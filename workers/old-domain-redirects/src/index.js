const CANONICAL = "https://www.callpreferredplumbing.com";

// Exact old paths → slash-canonical destinations on the new site.
const PATH_MAP = {
  "/residential-and-commercial-plumbing-solutions": "/services/",
  "/commercial-projects": "/services/commercial/",
  "/new-construction-projects": "/services/new-construction/",
  "/new-construction-plumbing-services": "/services/new-construction/",
  "/water-heaters": "/services/water-heaters/",
  "/radiant-heat": "/services/radiant-heat/",
  "/radiant-heating-and-in-floor-systems": "/services/radiant-heat/",
  "/water-softeners": "/services/water-softeners/",
  "/toilets-and-faucets": "/services/toilets-faucets/",
  "/bathtubs-and-showers": "/services/bathtubs-showers/",
  "/dishwashers": "/services/dishwashers/",
  "/dishwashers-and-disposals": "/services/dishwashers/",
  "/sewer-line-replacement": "/services/sewer-line/",
  "/septic-systems": "/services/septic-systems/",
  "/drain-cleaning": "/services/drain-cleaning/",
  "/emergency-plumbing": "/services/emergency/",
  "/plumbing-remodels-and-upgrades": "/services/remodels/",
  "/kitchen-remodels": "/services/kitchen-remodels/",
  "/bathroom-remodels": "/services/bathroom-remodels/",
  "/plumbing-repairs-and-emergency-services": "/services/emergency/",
  "/areas-we-serve": "/locations/",
  "/faqs": "/faqs/",
  "/gallery": "/gallery/",
  "/portfolio": "/gallery/",
  "/contact": "/contact/",
  "/about": "/about/",
  "/about-us": "/about/",
  "/blog": "/blog/",
  "/services": "/services/",
  "/privacy-policy": "/privacy-policy/",
  "/privacy": "/privacy-policy/",
  "/sitemap.xml": "/sitemap.xml",
  "/index.php": "/",
};

// Do not redirect these. Google needs to crawl old URLs to observe 301s.
const PASSTHROUGH = new Set(["/robots.txt"]);

// Removed admin/tooling paths — return 404/410, never send to the homepage.
const NOT_FOUND = new Set([
  "/wp-admin",
  "/wp-login.php",
  "/xmlrpc.php",
  "/wp-cron.php",
]);

function normalizePath(pathname) {
  if (!pathname || pathname === "/") return "/";
  return pathname.replace(/\/+$/, "") || "/";
}

function withTrailingSlash(path) {
  if (!path || path === "/") return "/";
  if (/\.[a-z0-9]+$/i.test(path)) return path;
  return path.endsWith("/") ? path : `${path}/`;
}

function robotsBody() {
  return [
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: ${CANONICAL}/sitemap.xml`,
    "",
  ].join("\n");
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const key = normalizePath(url.pathname);

    if (PASSTHROUGH.has(key)) {
      return new Response(robotsBody(), {
        status: 200,
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Cache-Control": "public, max-age=300",
          "X-Redirect-By": "preferred-plumbing-old-domain-redirects",
        },
      });
    }

    if (NOT_FOUND.has(key) || key.startsWith("/wp-admin/")) {
      return new Response("Not Found", {
        status: 404,
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Cache-Control": "no-store",
          "X-Redirect-By": "preferred-plumbing-old-domain-redirects",
        },
      });
    }

    const mapped = PATH_MAP[key];
    const destPath =
      mapped ?? (key === "/" ? "/" : withTrailingSlash(key));
    const target = `${CANONICAL}${destPath}${url.search}`;

    return new Response(null, {
      status: 301,
      headers: {
        Location: target,
        "X-Redirect-By": "preferred-plumbing-old-domain-redirects",
        "Cache-Control": "no-store",
      },
    });
  },
};
