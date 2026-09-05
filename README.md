# Preferred Plumbing

Marketing site for [Preferred Plumbing](https://www.callpreferredplumbing.com) in Spirit Lake, Idaho.

**Live site:** [www.callpreferredplumbing.com](https://www.callpreferredplumbing.com)

## Stack

- [Next.js 14](https://nextjs.org/) (App Router) + TypeScript + Tailwind CSS
- Cloudflare Workers via [OpenNext](https://opennext.js.org/cloudflare)
- Contact form through Resend, with optional GoHighLevel webhook
- GA4 (consent-gated) and next-sitemap
- Vitest + GitHub Actions for lint, typecheck, test, and deploy

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

Useful checks:

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

## Deploy

Pushes to `main` run `.github/workflows/deploy-preview.yml`: lint, typecheck, test, then deploy to Cloudflare Workers.

Manual deploy:

```bash
npm run deploy
```

Old-domain redirects for `preferredplumbingsolution.com` live in `workers/old-domain-redirects/` and `redirects/`.

## Scripts

| Script | Purpose |
| --- | --- |
| `npm run preview` | Build and preview the OpenNext Cloudflare worker locally |
| `npm run deploy` | Build and deploy to Cloudflare |
| `npm run cf:sync-redirects` | Sync canonical www / apex redirects |
| `npm run cf:sync-bulk-redirects` | Sync old-domain path remaps |
| `npm run build:images` | Optimize site images |
| `npm run gallery:optimize` | Optimize gallery assets |
