import type { Metadata } from 'next'

const siteUrl = 'https://www.preferredplumbingsolution.com'
export const siteName = 'Preferred Plumbing Solutions'
export const defaultTitle = 'Plumber Spirit Lake ID | Preferred Plumbing Solutions | 208-290-3889'
export const defaultDescription =
  'Family-owned plumber in Spirit Lake with 38+ years of combined experience. Radiant heat, new construction, water heaters, emergency service. Licensed & insured. Call 208-290-3889.'

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

function buildDocumentTitle(title: string): string {
  if (/Preferred Plumbing Solutions/i.test(title)) return title
  if (/Spirit Lake/i.test(title)) return `${title} | Preferred Plumbing Solutions`
  return `${title} | Preferred Plumbing Solutions | Spirit Lake, ID`
}

function buildOgTitle(title: string): string {
  if (/Preferred Plumbing Solutions/i.test(title)) return title
  return `${title} | Preferred Plumbing Solutions`
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
  // Skip repeating Spirit Lake / brand when the page title already includes them.
  const metaTitle = title ? buildDocumentTitle(title) : defaultTitle
  const ogTitle = title ? buildOgTitle(title) : defaultTitle
  const metaDescription = description || defaultDescription
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
