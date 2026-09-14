/** Old Duda (and alias) paths → current App Router paths. */
export const LEGACY_REDIRECTS: Record<string, string> = {
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
  '/portfolio': '/gallery',
  '/privacy': '/privacy-policy',
}

export function normalizePathname(pathname: string): string {
  if (!pathname || pathname === '/') return '/'
  return pathname.replace(/\/+$/, '') || '/'
}

/** Final path after trailing-slash strip + legacy remap, or null if already canonical. */
export function canonicalDestinationPath(pathname: string): string | null {
  const normalized = normalizePathname(pathname)
  const mapped = LEGACY_REDIRECTS[normalized]
  if (mapped) return mapped

  const areaMatch = normalized.match(/^\/areas-we-serve\/([^/]+)$/)
  if (areaMatch) return `/areas/${areaMatch[1]}`

  const portfolioMatch = normalized.match(/^\/portfolio\/([^/]+)$/)
  if (portfolioMatch) return '/gallery'

  if (normalized !== pathname) return normalized
  return null
}
