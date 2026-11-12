# Preferred Plumbing — old-domain cleanup (live status)

Primary: `https://www.callpreferredplumbing.com/`  
Old singular: `preferredplumbingsolution.com` (Cloudflare-proxied; keep, do not delete)  
Plural: `preferredplumbingsolutions.com` — DNS does **not** resolve as of 2026-11-12. Confirm registrar ownership with Ron before any work.

## Already done

| Item | Status |
| --- | --- |
| Old homepage 301 → new homepage | Pass |
| Old service pages that previously served stale HTML | Now 301 (live) |
| `/areas/:slug` → `/locations/:slug/` on new site | Pass (`public/_redirects`) |
| Sitemap uses `/locations/...` only | Pass |
| No old-domain links in this repo | Pass |
| Apex `callpreferredplumbing.com` → `www` | Pass |

Google snippets may still show old copy (555 number, 24/7, Spokane/Castlegar). That is index lag, not live HTML.

## Remaining gaps (priority)

1. **Broken destination paths** — old domain still sends these to 404s on the new host:
   - `/dishwashers` → should be `/services/dishwashers/`
   - `/about-us` → `/about/`
   - `/emergency-plumbing` → `/services/emergency/`
   - `/drain-cleaning` → `/services/drain-cleaning/`
   - `/index.php`, `/wp-admin` → `/`
2. **Extra hop** — many old redirects omit the trailing slash, so Next adds a 308. Point Bulk Redirects at slash-canonical URLs (see CSV).
3. **`/areas-we-serve`** — old domain → `/areas-we-serve` then new host → `/locations/`. Point old domain straight at `/locations/`.
4. **`robots.txt` on old domain** — keep accessible (200 is fine). Do **not** redirect it; ensure it does not block crawling of old URLs.
5. **`/wp-admin`** — leave as 404/410. Do not redirect admin paths to the homepage.
6. **Search Console** — verify both hosts on old + new, then Change of Address after redirects are clean.
7. **External profiles / ads** — GBP, Meta, Bing, Yelp, email signatures, review links. Keep ~$30/day ads paused until final URL + call-tracking QA.
8. **Plural domain** — only after Ron confirms ownership.

## In-repo safety net

`public/_redirects` catches legacy path aliases on the **new** host (`/dishwashers`, `/about-us`, `/emergency-plumbing`, `/drain-cleaning`, `/index.php`) so imperfect old-domain hops recover after deploy. `/wp-admin` is intentionally left as 404.

## Old-domain redirects (actual mechanism)

Live redirects are served by Worker `preferred-plumbing-old-domain-redirects`
(routes: `preferredplumbingsolution.com/*` and `www.preferredplumbingsolution.com/*`),
not Cloudflare Bulk Redirects. Source of truth in-repo:

- `workers/old-domain-redirects/`
- Backup of prior PATH_MAP: `ops/old-domain-worker-backup/`
- CSV kept as a human-readable map: `ops/old-domain-bulk-redirects.csv` (excludes `robots.txt` and `/wp-admin`)

Do **not** put old-hostname rules only in this Pages `_redirects` file — path rules are hostname-agnostic and would risk looping the new site.

## QA (re-run after Bulk Redirect update)

```bash
curl -I -L https://preferredplumbingsolution.com/new-construction-plumbing-services
curl -I -L https://preferredplumbingsolution.com/dishwashers
curl -I -L https://preferredplumbingsolution.com/areas-we-serve
curl -I -L https://preferredplumbingsolution.com/emergency-plumbing
curl -I https://preferredplumbingsolution.com/robots.txt
```

Expect: first hop 301 → slash-canonical `www.callpreferredplumbing.com/.../` → final 200 in one hop when possible. `robots.txt` stays 200 on the old domain.
