/** Canonical origin. Keep in sync with `siteUrl` in seo.ts. */
export const CANONICAL_ORIGIN =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
  'https://www.callpreferredplumbing.com'

/** Absolute https://www URL with no trailing slash (homepage has no path). */
export function toCanonicalUrl(slugOrPath = ''): string {
  if (!slugOrPath || slugOrPath === '/') return CANONICAL_ORIGIN
  if (/^https?:\/\//i.test(slugOrPath)) {
    try {
      return toCanonicalUrl(new URL(slugOrPath).pathname)
    } catch {
      /* fall through and treat as a path */
    }
  }
  const path = slugOrPath.replace(/^\/+|\/+$/g, '')
  return path ? `${CANONICAL_ORIGIN}/${path}` : CANONICAL_ORIGIN
}

export function canonicalLinkHeaderValue(pathname: string): string {
  return `<${toCanonicalUrl(pathname)}>; rel="canonical"`
}

/** Skip assets and machine routes that should not advertise a document canonical. */
export function shouldSetCanonicalLinkHeader(pathname: string): boolean {
  if (pathname === '/robots.txt') return false
  if (pathname.startsWith('/sitemap')) return false
  if (pathname.startsWith('/api/')) return false
  if (pathname === '/index' || pathname === '/home') return false
  return true
}
