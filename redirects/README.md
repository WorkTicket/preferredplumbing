# Canonical redirects (best practice)

**Canonical host:** `https://www.callpreferredplumbing.com`

Old domain `preferredplumbingsolution.com` is **not under our control** — cross-domain
301s in `cloudflare-bulk-redirects.csv` stay archival until ownership is recovered.

## Layered setup (defense in depth)

| Layer | Role |
|-------|------|
| **Cloudflare Single Redirect** | Edge single-hop: apex or HTTP → `https://www…` (runs before the Worker) |
| **Always Use HTTPS = OFF** | Prevents `http://apex → https://apex → www` chains; HTTPS upgrade is in the redirect rule |
| **HSTS** (`next.config.mjs`) | Browsers stick to HTTPS after first secure visit |
| **Next middleware** | Safety net if a request still hits the Worker on apex/HTTP |
| **`next.config.mjs` redirects** | Legacy Duda path remaps on our domain only |

## Apply / sync (recommended)

Requires an API token with **Zone → Rulesets → Edit** and **Zone → Zone Settings → Edit**,
plus zone access for `callpreferredplumbing.com`.

```bash
# Local (PowerShell)
$env:CLOUDFLARE_API_TOKEN="…"
# optional if token can list zones:
# $env:CLOUDFLARE_ZONE_ID="…"
npm run cf:sync-redirects
```

CI runs the same script after deploy when `CLOUDFLARE_ZONE_ID` (or zone list permission) is available.

The script upserts one Dynamic Redirect:

- **When:** host is apex, OR host is www and scheme is `http`
- **Then:** `301` → `https://www.callpreferredplumbing.com` + path, preserve query string
- **And:** sets **Always Use HTTPS** to `off` so HTTP is not upgraded on the same host first

## Manual dashboard equivalent

1. **Rules → Redirect Rules → Create**
   - Custom expression: `(http.host eq "callpreferredplumbing.com") or (http.host eq "www.callpreferredplumbing.com" and http.request.scheme eq "http")`
   - Dynamic target: `concat("https://www.callpreferredplumbing.com", http.request.uri.path)`
   - Status `301`, preserve query string
2. **SSL/TLS → Edge Certificates → Always Use HTTPS → Off**

## Verify (one hop only)

```bash
curl -sI http://callpreferredplumbing.com/about
# Location: https://www.callpreferredplumbing.com/about

curl -sI https://callpreferredplumbing.com/about
# Location: https://www.callpreferredplumbing.com/about
```

## What Ahrefs will still show (expected)

| Issue | Why it remains |
|-------|----------------|
| **3XX redirect** | Apex / HTTP URLs correctly return 301. Keep them; do not remove. Sitemap + internal links already use `https://www`. |
| **HTTP to HTTPS** | Same: crawlers that request `http://` get a 301. That is correct. |

Ahrefs flags the *redirecting* URLs, not a misconfiguration, once the chain is gone.

## Archival

`cloudflare-bulk-redirects.csv` — old-domain cutover only.
