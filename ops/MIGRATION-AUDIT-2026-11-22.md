# Migration and URL audit — 2026-11-22

## Current-domain checks

| URL | Result | Action |
| --- | --- | --- |
| `/areas/spirit-lake-id/` | 301 → `/locations/spirit-lake-id/` | Keep |
| `/areas/:slug/` (Pages `_redirects`) | 301 → `/locations/:slug/` | Keep |
| `/services/hydronic-heating/` | 404 | Redirect to `/services/radiant-heat/` (added) |
| `/services/boiler-service/` | 404 | Redirect to `/services/radiant-heat/` (added) — boiler plant stays on radiant hub until standalone scope is approved |
| `/services/radiant-heat/` | 200 self-canonical (pre-release) | Campaign update in PR |
| `/services/heated-driveways/` | 200 | Campaign update in PR |
| `/services/new-construction/` | 200 | Campaign update in PR |
| Cost + builder guides | 200 | Dated Nov 22, 2026 with estimate CTAs |

## Old-domain worker

`workers/old-domain-redirects` maps legacy paths including `/radiant-heat` and `/areas/*` to the current host. Keep redirects at least a year after any domain move. Plural old hostname still needs ownership/DNS verification before proposing changes (unchanged from plan).

## Standalone boiler / hydronic pages

Do **not** publish separate `/services/boiler-service/` or `/services/hydronic-heating/` content pages until crew confirms standalone repair scope, proof, and keyword evidence. Soft 301s to the radiant hub prevent soft-404 equity loss if those URLs get typed or linked.

## GSC / Ahrefs (manual — no API in this session)

1. Export current + prior 28-day Web Search (property + US).
2. URL Inspection: radiant, snow-melt, new construction, both cost guides — record final URL, index reason, Google-selected canonical, last crawl.
3. Ahrefs Organic Keywords US weekly — total detected vs high-ticket heating terms.
4. Request indexing once after production deploy of materially changed pages.
