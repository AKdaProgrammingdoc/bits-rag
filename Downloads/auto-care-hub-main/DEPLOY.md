# Vercel Deployment Guide

This project has been migrated from Cloudflare Workers to **Vercel** (Node.js SSR).

## What changed

| File | Change |
|------|--------|
| `vite.config.ts` | `server.preset` set to `"vercel"` (was Cloudflare) |
| `src/server.ts` | Removed Cloudflare `env`/`ctx` args from `fetch()` handler |
| `vercel.json` | Added — configures build output, rewrites, and Node.js function |
| `wrangler.jsonc` | Removed — Cloudflare Workers config, no longer needed |
| `package.json` | Removed `@cloudflare/vite-plugin`; added `vercel-build` script |
| `.gitignore` | Replaced `.wrangler/` with `.vercel` |

## Deploy to Vercel

### Option A — Vercel CLI

```bash
npm install
npm run build          # produces .output/
npx vercel             # first deploy (follow prompts)
npx vercel --prod      # subsequent production deploys
```

### Option B — GitHub integration (recommended)

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) → Import project.
3. Vercel auto-detects the `vercel.json` and runs `npm run build`.
4. Every push to `main` triggers an automatic deploy.

## Environment variables

If you add server-side env vars in future, set them in the Vercel dashboard under
**Project → Settings → Environment Variables**.

## Local development

```bash
npm install
npm run dev            # TanStack Start dev server with HMR
```
