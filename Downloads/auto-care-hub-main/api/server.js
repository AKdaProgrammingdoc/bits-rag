// Vercel serverless entry — bridges Node.js req/res to the Fetch API
// then delegates to TanStack Start's built SSR handler in dist/server/server.js

import { createServer } from "../dist/server/server.js";

/**
 * Convert a Node.js IncomingMessage into a Web Fetch API Request.
 */
async function toRequest(req) {
  const host = req.headers["x-forwarded-host"] || req.headers.host || "localhost";
  const proto = req.headers["x-forwarded-proto"] || "https";
  const url = `${proto}://${host}${req.url}`;

  const method = req.method || "GET";
  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (value !== undefined) {
      if (Array.isArray(value)) {
        for (const v of value) headers.append(key, v);
      } else {
        headers.set(key, value);
      }
    }
  }

  const hasBody = !["GET", "HEAD"].includes(method);
  const body = hasBody
    ? await new Promise((resolve) => {
        const chunks = [];
        req.on("data", (chunk) => chunks.push(chunk));
        req.on("end", () => resolve(Buffer.concat(chunks)));
      })
    : undefined;

  return new Request(url, { method, headers, body });
}

/**
 * Write a Web Fetch API Response back to Node.js ServerResponse.
 */
async function sendResponse(webResponse, res) {
  res.statusCode = webResponse.status;
  for (const [key, value] of webResponse.headers.entries()) {
    res.setHeader(key, value);
  }
  if (webResponse.body) {
    const buf = await webResponse.arrayBuffer();
    res.end(Buffer.from(buf));
  } else {
    res.end();
  }
}

let serverPromise;

async function getServer() {
  if (!serverPromise) {
    serverPromise = import("../dist/server/server.js").then(
      (m) => m.default ?? m
    );
  }
  return serverPromise;
}

export default async function handler(req, res) {
  try {
    const server = await getServer();
    const request = await toRequest(req);
    const response = await server.fetch(request);
    await sendResponse(response, res);
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    res.setHeader("content-type", "text/plain");
    res.end("Internal Server Error");
  }
}
