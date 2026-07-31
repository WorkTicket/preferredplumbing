import imageMaxWidths from './image-max-widths.json'

const BREAKPOINTS = [480, 640, 768, 1024, 1280, 1536, 1920, 2560] as const

export const FORMATS = ['avif', 'webp', 'jpeg'] as const

export type ImageFormat = (typeof FORMATS)[number]

/** Fallback dimensions for LCP / OG when the max-width map has no entry. */
const KNOWN_DIMENSIONS: Record<string, { width: number; height: number }> = {
  '/images/preferred-plumbing-truck-interior.webp': { width: 2560, height: 1440 },
  '/images/preferred-plumbing-hero-poster.webp': { width: 2560, height: 1440 },
  '/images/preferred-logo.webp': { width: 1536, height: 1024 },
}

const MAX_WIDTHS = imageMaxWidths as Record<string, number>

export function normalizeImageSrc(src: string): string {
  return src.split('?')[0]
}

export function getImageDimensions(src: string): { width: number; height: number } | undefined {
  const normalized = normalizeImageSrc(src)
  return KNOWN_DIMENSIONS[normalized]
}

function getMaxGeneratedWidth(src: string): number | undefined {
  const normalized = normalizeImageSrc(src)
  return MAX_WIDTHS[normalized] ?? getImageDimensions(normalized)?.width
}

/** Widths to emit in srcset — never larger than generated variants.
 *  Unknown images (not in the max-width map) get no generated srcset. */
function getSrcsetWidths(src: string): number[] {
  const maxWidth = getMaxGeneratedWidth(src)
  if (!maxWidth) return []
  const capped = BREAKPOINTS.filter((w) => w <= maxWidth)
  return capped.length > 0 ? capped : [maxWidth]
}

export function imagePathBase(src: string): string {
  const withoutExt = normalizeImageSrc(src).replace(/\.(webp|png|jpg|jpeg|avif)$/i, '')
  const idx = withoutExt.lastIndexOf('/')
  return idx >= 0 ? withoutExt.slice(idx + 1) : withoutExt
}

function variantUrl(src: string, format: ImageFormat, width: number): string {
  const base = imagePathBase(src)
  // Encode path segments so spaces (or other reserved chars) never break srcset parsers.
  const encodedBase = encodeURIComponent(base)
  return `/images/generated/${encodedBase}-${width}.${format}`
}

export function buildSrcset(src: string, format: ImageFormat): string {
  return getSrcsetWidths(src)
    .map((width) => `${variantUrl(src, format, width)} ${width}w`)
    .join(', ')
}

export function getVariantUrl(src: string, format: ImageFormat, preferredWidth = 720): string {
  const widths = getSrcsetWidths(src)
  if (widths.length === 0) return getOriginalImageUrl(src)
  const pick = widths.find((w) => w >= preferredWidth) ?? widths[widths.length - 1]
  return variantUrl(src, format, pick)
}

/** Original public path (strips cache-bust query). Use as img fallback if generated variants 404. */
export function getOriginalImageUrl(src: string): string {
  return normalizeImageSrc(src)
}

export function getLcpPreloadHref(src: string, preferredWidth = 768): string {
  return getVariantUrl(src, 'avif', preferredWidth)
}

export function getLcpPreloadSrcset(src: string): string {
  return buildSrcset(src, 'avif')
}
