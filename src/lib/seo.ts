import type { Metadata } from 'next'

const siteUrl = 'https://www.preferredplumbingsolution.com'
export const siteName = 'Preferred Plumbing Solutions'
export const defaultTitle = 'Plumber Spirit Lake ID | Preferred Plumbing Solutions | 208-290-3889'
export const defaultDescription =
  "Spirit Lake's trusted plumber for 38+ years. New construction, radiant heat, water heaters, emergency service. Call 208-290-3889."

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
  const metaTitle = title ? `${title} | Preferred Plumbing Solutions` : defaultTitle
  const metaDescription = description || defaultDescription
  const url = slug ? `${siteUrl}/${slug}` : siteUrl
  const canonicalUrl = canonical || url

  const og: Record<string, unknown> = {
    title: metaTitle,
    description: metaDescription,
    url,
    siteName,
    locale,
    type,
    images: [{ url: ogImage, width: 1200, height: 630, alt: metaTitle }],
  }

  if (publishedTime) {
    og.article = { ...og.article as Record<string, unknown>, published_time: publishedTime }
  }
  if (modifiedTime) {
    og.article = { ...og.article as Record<string, unknown>, modified_time: modifiedTime }
  }

  return {
    title: metaTitle,
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
      title: metaTitle,
      description: metaDescription,
      images: [{ url: ogImage, alt: metaTitle }],
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
