const BREAKPOINTS = [480, 640, 768, 1024, 1280, 1536, 1920, 2560] as const

export const FORMATS = ['avif', 'webp', 'jpeg'] as const

export type ImageFormat = (typeof FORMATS)[number]

/** Common hero / OG dimensions — avoids bundling the full image manifest. */
const KNOWN_DIMENSIONS: Record<string, { width: number; height: number }> = {
  '/images/preferred-plumbing-truck-interior.webp': { width: 2560, height: 1440 },
  '/images/preferred logo.webp': { width: 512, height: 512 },
}

export function normalizeImageSrc(src: string): string {
  return src.split('?')[0]
}

export function imagePathBase(src: string): string {
  const withoutExt = normalizeImageSrc(src).replace(/\.(webp|png|jpg|jpeg|avif)$/i, '')
  const idx = withoutExt.lastIndexOf('/')
  return idx >= 0 ? withoutExt.slice(idx + 1) : withoutExt
}

function variantUrl(src: string, format: ImageFormat, width: number): string {
  const base = imagePathBase(src)
  return `/images/generated/${base}-${width}.${format}`
}

export function buildSrcset(src: string, format: ImageFormat): string {
  const base = imagePathBase(src)
  return BREAKPOINTS.map((width) => `${variantUrl(src, format, width)} ${width}w`).join(', ')
}

export function getImageDimensions(src: string): { width: number; height: number } | undefined {
  const normalized = normalizeImageSrc(src)
  return KNOWN_DIMENSIONS[normalized]
}

export function getVariantUrl(src: string, format: ImageFormat, preferredWidth = 720): string {
  const pick = BREAKPOINTS.find((w) => w >= preferredWidth) ?? BREAKPOINTS[BREAKPOINTS.length - 1]
  return variantUrl(src, format, pick)
}

export function getLcpPreloadHref(src: string, preferredWidth = 768): string {
  return getVariantUrl(src, 'avif', preferredWidth)
}

export function getLcpPreloadSrcset(src: string): string {
  return buildSrcset(src, 'avif')
}
