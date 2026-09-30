const STATIC_EXT = /\.(?:png|jpe?g|webp|avif|gif|svg|ico|mp4|webm|woff2?|txt)$/i

/**
 * Browsers always revalidate (deploy visibility). CDN may reuse HTML for 5 minutes
 * so crawlers (Ahrefs) are not waiting on a Worker cold start for every URL.
 */
export const HTML_CACHE_CONTROL =
  'public, max-age=0, s-maxage=300, stale-while-revalidate=86400'

/** HTML must revalidate at the CDN; images/video/fonts should keep long-cache headers. */
export function shouldApplyHtmlCacheHeaders(pathname: string): boolean {
  if (pathname.startsWith('/images/') || pathname.startsWith('/videos/')) return false
  return !STATIC_EXT.test(pathname)
}
