import type { Metadata } from 'next'

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
  'https://www.callpreferredplumbing.com'
export const siteName = 'Preferred Plumbing Solutions'
/** Keep ≤60 chars for SERP display (Ahrefs / Google title length). */
export const defaultTitle = 'Plumber Spirit Lake ID | Preferred Plumbing'
export const defaultDescription =
  'Family-owned plumber in Spirit Lake with 38+ years experience. Radiant heat, water heaters, emergency service. Call 208-290-3889.'

/** Ahrefs: title too long >60; meta description too long >160, too short <70 (we target 120–155). */
export const TITLE_MAX = 60
export const DESCRIPTION_MIN = 120
export const DESCRIPTION_MAX = 155

interface SEOParams {
  title?: string
  description?: string
  slug?: string
  ogImage?: string
  noIndex?: boolean
  canonical?: string
  publishedTime?: string
  modifiedTime?: string
  type?: 'website' | 'article'
  locale?: string
  keywords?: string[]
}

export function clampAtWord(text: string, max: number): string {
  const trimmed = text.trim().replace(/\s+/g, ' ')
  if (trimmed.length <= max) return trimmed
  const slice = trimmed.slice(0, max)
  const lastSpace = slice.lastIndexOf(' ')
  const cut = lastSpace > Math.floor(max * 0.6) ? slice.slice(0, lastSpace) : slice
  return cut.replace(/[|,\s.;:–—-]+$/u, '').trim()
}

export function normalizeDescription(description: string): string {
  let desc = description.trim().replace(/\s+/g, ' ')
  if (desc.length > DESCRIPTION_MAX) {
    desc = clampAtWord(desc, DESCRIPTION_MAX)
  }
  if (desc.length < DESCRIPTION_MIN) {
    const pads = [
      ' Serving Spirit Lake and North Idaho.',
      ' Licensed and insured.',
      ' Call 208-290-3889 for a free estimate.',
    ]
    for (const pad of pads) {
      if (desc.length >= DESCRIPTION_MIN) break
      if (desc.length + pad.length <= DESCRIPTION_MAX) {
        desc += pad
      } else {
        const room = DESCRIPTION_MAX - desc.length
        if (room > 20) desc += pad.slice(0, room)
        break
      }
    }
    if (desc.length > DESCRIPTION_MAX) desc = clampAtWord(desc, DESCRIPTION_MAX)
  }
  return desc
}

function buildDocumentTitle(title: string): string {
  const result = title.trim().replace(/\s+/g, ' ')
  if (/Preferred Plumbing/i.test(result)) return clampAtWord(result, TITLE_MAX)
  const brandSuffix = ' | Preferred Plumbing'
  const withBrand = `${result}${brandSuffix}`
  if (withBrand.length <= TITLE_MAX) return withBrand
  return `${clampAtWord(result, TITLE_MAX - brandSuffix.length)}${brandSuffix}`
}

function buildOgTitle(title: string): string {
  const result = title.trim().replace(/\s+/g, ' ')
  if (/Preferred Plumbing/i.test(result)) return clampAtWord(result, 90)
  const brandSuffix = ' | Preferred Plumbing'
  const withBrand = `${result}${brandSuffix}`
  if (withBrand.length <= 90) return withBrand
  return `${clampAtWord(result, 90 - brandSuffix.length)}${brandSuffix}`
}

export function generateMetadata({
  title,
  description,
  slug = '',
  ogImage = '/images/og-preferred-plumbing-solutions.webp',
  noIndex = false,
  canonical,
  publishedTime,
  modifiedTime,
  type = 'website',
  locale = 'en_US',
  keywords,
}: SEOParams): Metadata {
  // Absolute titles avoid the root layout template double-appending the brand.
  const metaTitle = title ? buildDocumentTitle(title) : defaultTitle
  const ogTitle = title ? buildOgTitle(title) : defaultTitle
  const metaDescription = normalizeDescription(description || defaultDescription)
  const url = slug ? `${siteUrl}/${slug}` : siteUrl
  const canonicalUrl = canonical || url

  const og: Record<string, unknown> = {
    title: ogTitle,
    description: metaDescription,
    url,
    siteName,
    locale,
    type,
    images: [{ url: ogImage, width: 1200, height: 630, alt: ogTitle }],
  }

  if (publishedTime) {
    og.article = { ...og.article as Record<string, unknown>, published_time: publishedTime }
  }
  if (modifiedTime) {
    og.article = { ...og.article as Record<string, unknown>, modified_time: modifiedTime }
  }

  return {
    title: { absolute: metaTitle },
    description: metaDescription,
    metadataBase: new URL(siteUrl),
    alternates: { canonical: canonicalUrl },
    keywords: keywords || [
      'plumber Spirit Lake Idaho', 'plumbing contractor North Idaho',
      'emergency plumber Coeur d\'Alene', 'Preferred Plumbing Solutions',
      'Spirit Lake plumbing',
    ],
    openGraph: og,
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: metaDescription,
      images: [{ url: ogImage, alt: ogTitle }],
      site: '@preferredplumbing',
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
    other: {
      'geo.region': 'US-ID',
      'geo.placename': 'Spirit Lake',
    },
  }
}

export function generateBlogMetadata(post: {
  title: string
  excerpt: string
  slug: string
  publishedAt: string
  coverImage?: string
}): Metadata {
  return generateMetadata({
    title: post.title,
    description: post.excerpt,
    slug: `blog/${post.slug}`,
    ogImage: post.coverImage || '/images/og-preferred-plumbing-solutions.webp',
    publishedTime: post.publishedAt,
    modifiedTime: post.publishedAt,
    type: 'article',
  })
}

export { siteUrl }
