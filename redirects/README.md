# Legacy URL redirects

Old domain `preferredplumbingsolution.com` is **not under our control** — cross-domain
301s from that CSV cannot be activated unless ownership is regained later.

## What is live today

**Next.js redirects** in `next.config.mjs` remap old Duda slugs when they are
requested on **our** domain (e.g. `/water-heaters` → `/services/water-heaters`).

## Archival only

`cloudflare-bulk-redirects.csv` is kept in case the client ever recovers the old
domain. Until then, treat SEO as a fresh launch on `callpreferredplumbing.com`.
