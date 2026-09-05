const STATIC_EXT = /\.(?:png|jpe?g|webp|avif|gif|svg|ico|mp4|webm|woff2?)$/i

/** HTML must revalidate at the CDN; images/video/fonts should keep long-cache headers. */
export function shouldApplyHtmlCacheHeaders(pathname: string): boolean {
  if (pathname.startsWith('/images/') || pathname.startsWith('/videos/')) return false
  return !STATIC_EXT.test(pathname)
}
