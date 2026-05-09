// Vercel serverless entry point.
// Bridges Node.js IncomingMessage/ServerResponse to the Fetch API,
// then delegates to the fully-bundled SSR handler (api/ssr.mjs).

let serverPromise;

async function getServer() {
  if (!serverPromise) {
    // Dynamic import so module is loaded once and cached
    serverPromise = import('./ssr.mjs').then((m) => m.default ?? m);
  }
  return serverPromise;
}

/**
 * Convert Node.js IncomingMessage → Web Fetch Request
 */
async function toFetchRequest(req) {
  const host =
    req.headers['x-forwarded-host'] ||
    req.headers['host'] ||
    'localhost';
  const proto = req.headers['x-forwarded-proto'] || 'https';
  const url = `${proto}://${host}${req.url}`;

  const headers = new Headers();
  for (const [key, val] of Object.entries(req.headers)) {
    if (val == null) continue;
    if (Array.isArray(val)) val.forEach((v) => headers.append(key, v));
    else headers.set(key, val);
  }

  const method = (req.method || 'GET').toUpperCase();
  const hasBody = !['GET', 'HEAD'].includes(method);

  const body = hasBody
    ? await new Promise((resolve) => {
        const chunks = [];
        req.on('data', (c) => chunks.push(c));
        req.on('end', () => resolve(Buffer.concat(chunks)));
      })
    : undefined;

  return new Request(url, { method, headers, body });
}

/**
 * Write Web Fetch Response → Node.js ServerResponse
 */
async function sendFetchResponse(fetchResponse, res) {
  res.statusCode = fetchResponse.status;
  fetchResponse.headers.forEach((val, key) => res.setHeader(key, val));

  if (fetchResponse.body) {
    const reader = fetchResponse.body.getReader();
    const pump = async () => {
      const { done, value } = await reader.read();
      if (done) { res.end(); return; }
      res.write(Buffer.from(value));
      await pump();
    };
    await pump();
  } else {
    res.end();
  }
}

export default async function handler(req, res) {
  try {
    const server = await getServer();
    const request = await toFetchRequest(req);
    const response = await server.fetch(request);
    await sendFetchResponse(response, res);
  } catch (err) {
    console.error('[api/server] fatal:', err);
    res.statusCode = 500;
    res.setHeader('content-type', 'text/plain');
    res.end('Internal Server Error');
  }
}
