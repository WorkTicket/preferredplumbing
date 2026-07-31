const CANONICAL = 'https://www.callpreferredplumbing.com'

/** Old Duda paths → new Next.js paths (from redirects/cloudflare-bulk-redirects.csv). */
const PATH_MAP = {
  '/residential-and-commercial-plumbing-solutions': '/services',
  '/commercial-projects': '/services/commercial',
  '/new-construction-projects': '/services/new-construction',
  '/new-construction-plumbing-services': '/services/new-construction',
  '/water-heaters': '/services/water-heaters',
  '/radiant-heat': '/services/radiant-heat',
  '/radiant-heating-and-in-floor-systems': '/services/radiant-heat',
  '/water-softeners': '/services/water-softeners',
  '/toilets-and-faucets': '/services/toilets-faucets',
  '/bathtubs-and-showers': '/services/bathtubs-showers',
  '/dishwashers-and-disposals': '/services/dishwashers',
  '/sewer-line-replacement': '/services/sewer-line',
  '/septic-systems': '/services/septic-systems',
  '/plumbing-remodels-and-upgrades': '/services/remodels',
  '/kitchen-remodels': '/services/kitchen-remodels',
  '/bathroom-remodels': '/services/bathroom-remodels',
  '/plumbing-repairs-and-emergency-services': '/services/emergency',
  '/areas-we-serve': '/areas-we-serve',
  '/faqs': '/faqs',
  '/gallery': '/gallery',
  '/portfolio': '/gallery',
  '/contact': '/contact',
  '/about': '/about',
  '/privacy-policy': '/privacy-policy',
  '/privacy': '/privacy-policy',
}

function normalizePath(pathname) {
  if (!pathname || pathname === '/') return '/'
  return pathname.replace(/\/+$/, '') || '/'
}

export default {
  async fetch(request) {
    const url = new URL(request.url)
    const key = normalizePath(url.pathname)
    const destPath = PATH_MAP[key] ?? (key === '/' ? '/' : key)
    const target = `${CANONICAL}${destPath}${url.search}`
    return new Response(null, {
      status: 301,
      headers: {
        Location: target,
        'X-Redirect-By': 'preferred-plumbing-old-domain-redirects',
        'Cache-Control': 'no-store',
      },
    })
  },
}
