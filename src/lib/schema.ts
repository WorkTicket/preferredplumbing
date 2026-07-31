import { siteUrl } from './seo'
import { CONTACT_EMAILS, FACEBOOK_URL, GBP_URL, PHONE, PHONE_E164, TIKTOK_URL, ZIP } from './utils'
import {
  combinedExperiencePhrase,
  yearsExperienceBadge,
  yearsExperienceLabel,
} from './company-stats'

const socialProfiles = [FACEBOOK_URL, TIKTOK_URL, GBP_URL]
const primaryEmail = CONTACT_EMAILS[0]?.email

/** Shared PostalAddress — service-area business (no public street). */
function postalAddress(locality = 'Spirit Lake', region = 'ID', postalCode = ZIP) {
  return {
    '@type': 'PostalAddress',
    addressLocality: locality,
    addressRegion: region,
    postalCode,
    addressCountry: 'US',
  }
}

/** Google Organization / Article publisher logo as ImageObject. */
export function logoImageObject() {
  return {
    '@type': 'ImageObject',
    url: `${siteUrl}/images/preferred-logo.webp`,
    contentUrl: `${siteUrl}/images/preferred-logo.webp`,
    width: 1536,
    height: 1024,
    caption: 'Preferred Plumbing Solutions logo',
  }
}

const contactPoints = CONTACT_EMAILS.map((contact) => ({
  '@type': 'ContactPoint',
  telephone: PHONE_E164,
  contactType: 'customer service',
  email: contact.email,
  availableLanguage: ['English'],
  areaServed: ['US'],
}))

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: 'Preferred Plumbing Solutions',
    url: siteUrl,
    logo: logoImageObject(),
    image: logoImageObject(),
    description: `Family-owned plumber in Spirit Lake with ${combinedExperiencePhrase()}. Radiant heat, new construction, water heaters, emergency service.`,
    founder: { '@type': 'Person', name: 'Ron Norris' },
    address: postalAddress(),
    // Organization is not a Place — nest geo under location (schema.org).
    location: {
      '@type': 'Place',
      name: 'Preferred Plumbing Solutions',
      address: postalAddress(),
      geo: { '@type': 'GeoCoordinates', latitude: 47.9668, longitude: -116.8693 },
    },
    telephone: PHONE_E164,
    ...(primaryEmail ? { email: primaryEmail } : {}),
    sameAs: socialProfiles,
    areaServed: [
      { '@type': 'City', name: 'Spirit Lake' },
      { '@type': 'City', name: "Coeur d'Alene" },
      { '@type': 'City', name: 'Post Falls' },
      { '@type': 'City', name: 'Sandpoint' },
      { '@type': 'State', name: 'Idaho' },
    ],
    contactPoint: contactPoints,
  }
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Plumber',
    '@id': `${siteUrl}/#localbusiness`,
    name: 'Preferred Plumbing Solutions',
    url: siteUrl,
    logo: logoImageObject(),
    image: [
      `${siteUrl}/images/og-preferred-plumbing-solutions.webp`,
      `${siteUrl}/images/preferred-plumbing-service-truck.webp`,
      `${siteUrl}/images/service-new-construction-plumbing.webp`,
    ],
    telephone: PHONE_E164,
    priceRange: '$$',
    ...(primaryEmail ? { email: primaryEmail } : {}),
    description: `Family-owned plumber in Spirit Lake with ${combinedExperiencePhrase()}. Radiant heat, new construction, water heaters, emergency service. Call ${PHONE}.`,
    founder: { '@type': 'Person', name: 'Ron Norris' },
    address: postalAddress(),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 47.9668,
      longitude: -116.8693,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '17:00',
      },
    ],
    areaServed: [
      { '@type': 'City', name: 'Spirit Lake', '@id': 'https://en.wikipedia.org/wiki/Spirit_Lake,_Idaho' },
      { '@type': 'City', name: "Coeur d'Alene", '@id': 'https://en.wikipedia.org/wiki/Coeur_d%27Alene,_Idaho' },
      { '@type': 'City', name: 'Post Falls', '@id': 'https://en.wikipedia.org/wiki/Post_Falls,_Idaho' },
      { '@type': 'City', name: 'Sandpoint' },
      { '@type': 'City', name: 'Hayden' },
      { '@type': 'City', name: 'Rathdrum' },
      { '@type': 'City', name: 'Priest River' },
      { '@type': 'City', name: 'Athol' },
      { '@type': 'City', name: 'Blanchard' },
      { '@type': 'City', name: 'Newport' },
      { '@type': 'City', name: 'Chattaroy' },
      { '@type': 'State', name: 'Idaho' },
      { '@type': 'State', name: 'Washington' },
    ],
    sameAs: socialProfiles,
    hasMap: GBP_URL,
    award: yearsExperienceBadge(),
    numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 2, maxValue: 10 },
    knowsAbout: [
      'Plumbing installation and repair',
      'New construction plumbing',
      'Commercial plumbing',
      'Radiant floor heating',
      'Water heater installation',
      'Water softener installation',
      'Sewer line replacement',
      'Water line replacement',
      'Gas line installation and repair',
      'Septic system installation',
      'Emergency plumbing',
      'Heated driveway installation',
      'Tankless water heater installation',
      'Kitchen and bathroom remodeling',
    ],
  }
}

export function postalAddressSchema() {
  return {
    '@context': 'https://schema.org',
    ...postalAddress(),
  }
}

export function contactPointSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': contactPoints,
  }
}

export function imageObjectSchema(src: string, caption: string, name: string) {
  const url = `${siteUrl}${src}`
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: url,
    url,
    name,
    caption,
    description: caption,
  }
}

export function personSchema(name: string, jobTitle: string, description: string, image?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    jobTitle,
    description,
    image: image ? `${siteUrl}${image}` : undefined,
    worksFor: {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Preferred Plumbing Solutions',
      url: siteUrl,
    },
    sameAs: socialProfiles,
  }
}

export function reviewSchema(
  reviewItems: { id: string; name: string; location?: string; rating: number; text: string; date?: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: reviewItems.map((review, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: review.rating,
          bestRating: 5,
          worstRating: 1,
        },
        author: {
          '@type': 'Person',
          name: review.name,
        },
        reviewBody: review.text,
        datePublished: review.date || '2025-01-01',
        itemReviewed: {
          '@type': 'Plumber',
          '@id': `${siteUrl}/#localbusiness`,
          name: 'Preferred Plumbing Solutions',
          url: siteUrl,
        },
      },
    })),
  }
}

export function videoObjectSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Preferred Plumbing Solutions - Spirit Lake Plumber',
    description: `Preferred Plumbing Solutions is a family-owned plumber in Spirit Lake, Idaho. ${yearsExperienceLabel()} years of experience, radiant heat specialists, emergency service Sunday through Friday 7am to 5pm.`,
    thumbnailUrl: [`${siteUrl}/images/preferred-plumbing-hero-poster.webp`],
    contentUrl: `${siteUrl}/videos/preferred-plumbing-hero.mp4`,
    uploadDate: '2024-01-01T00:00:00-08:00',
    duration: 'PT13S',
    publisher: {
      '@type': 'Organization',
      name: 'Preferred Plumbing Solutions',
      url: siteUrl,
      logo: logoImageObject(),
    },
  }
}

export function webpageSchema(title: string, description: string, slug: string) {
  const path = slug ? `/${slug}` : ''
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: `${siteUrl}${path}`,
    isPartOf: { '@type': 'WebSite', '@id': `${siteUrl}/#website`, name: 'Preferred Plumbing Solutions', url: siteUrl },
    about: {
      '@type': 'Plumber',
      '@id': `${siteUrl}/#localbusiness`,
      name: 'Preferred Plumbing Solutions',
      url: siteUrl,
    },
    inLanguage: 'en-US',
    isAccessibleForFree: true,
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    name: 'Preferred Plumbing Solutions',
    url: siteUrl,
    description: `Family-owned plumber in Spirit Lake with ${combinedExperiencePhrase()}. Radiant heat, new construction, water heaters, emergency service.`,
    publisher: { '@id': `${siteUrl}/#organization` },
    inLanguage: 'en-US',
  }
}

export function faqSchema(questions: { question: string; answer: string; href?: string; linkLabel?: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.href && q.linkLabel ? `${q.answer} ${q.linkLabel}` : q.answer,
      },
    })),
  }
}

/** Service markup without Offer/price — we do not publish fixed prices. */
export function serviceSchema(serviceName: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description,
    provider: {
      '@type': 'Plumber',
      '@id': `${siteUrl}/#localbusiness`,
      name: 'Preferred Plumbing Solutions',
      url: siteUrl,
    },
    areaServed: [
      { '@type': 'City', name: 'Spirit Lake', '@id': 'https://en.wikipedia.org/wiki/Spirit_Lake,_Idaho' },
      { '@type': 'State', name: 'Idaho' },
      { '@type': 'State', name: 'Washington' },
    ],
    serviceType: serviceName,
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function articleSchema(input: {
  title: string
  description: string
  slug: string
  image: string
  datePublished: string
  dateModified?: string
  authorName?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.title,
    description: input.description,
    image: [`${siteUrl}${input.image}`],
    datePublished: input.datePublished,
    dateModified: input.dateModified || input.datePublished,
    author: {
      '@type': 'Person',
      name: input.authorName || 'Ron Norris',
      url: `${siteUrl}/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Preferred Plumbing Solutions',
      url: siteUrl,
      logo: logoImageObject(),
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/blog/${input.slug}`,
    },
    inLanguage: 'en-US',
  }
}
