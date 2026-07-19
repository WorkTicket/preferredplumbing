import { siteUrl } from './seo'
import { CONTACT_EMAILS, PHONE, PHONE_E164 } from './utils'

const contactPoints = CONTACT_EMAILS.map((contact) => ({
  '@type': 'ContactPoint',
  telephone: PHONE_E164,
  contactType: 'customer service',
  email: contact.email,
  name: contact.name,
  availableLanguage: ['English'],
  areaServed: ['US'],
}))

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Preferred Plumbing Solutions',
    url: siteUrl,
    logo: `${siteUrl}/images/preferred%20logo.webp`,
    description: 'Family-owned plumber in Spirit Lake with 38+ years of combined experience. Radiant heat, new construction, water heaters, emergency service.',
    founder: { '@type': 'Person', name: 'Ron Norris' },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Spirit Lake',
      addressRegion: 'ID',
      postalCode: '83869',
      addressCountry: 'US',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 47.9668, longitude: -116.8693 },
    telephone: PHONE_E164,
    email: CONTACT_EMAILS.map((contact) => contact.email),
    sameAs: ['https://www.tiktok.com/@preferredhnorris'],
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
    name: 'Preferred Plumbing Solutions',
    url: siteUrl,
    logo: `${siteUrl}/images/preferred%20logo.webp`,
    image: [
      `${siteUrl}/images/og-preferred-plumbing-solutions.webp`,
      `${siteUrl}/images/preferred-plumbing-service-truck.webp`,
      `${siteUrl}/images/service-new-construction-plumbing.webp`,
    ],
    telephone: PHONE_E164,
    priceRange: '$$',
    email: CONTACT_EMAILS.map((contact) => contact.email),
    description: `Family-owned plumber in Spirit Lake with 38+ years of combined experience. Radiant heat, new construction, water heaters, emergency service. Call ${PHONE}.`,
    founder: { '@type': 'Person', name: 'Ron Norris' },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Spirit Lake',
      addressRegion: 'ID',
      postalCode: '83869',
      addressCountry: 'US',
    },
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
    sameAs: [
      'https://www.tiktok.com/@preferredhnorris',
    ],
    award: '38+ Years Experience',
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
    parentOrganization: {
      '@type': 'Organization',
      name: 'Preferred Plumbing Solutions',
      url: siteUrl,
    },
  }
}

export function postalAddressSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'PostalAddress',
    addressLocality: 'Spirit Lake',
    addressRegion: 'ID',
    postalCode: '83869',
    addressCountry: 'US',
  }
}

export function contactPointSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': contactPoints,
  }
}

export function imageObjectSchema(src: string, caption: string, name: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: `${siteUrl}${src}`,
    name,
    caption,
    description: caption,
    representativeOfPage: true,
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
      name: 'Preferred Plumbing Solutions',
      url: siteUrl,
    },
    sameAs: ['https://www.tiktok.com/@preferredhnorris'],
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
          bestRating: '5',
        },
        author: {
          '@type': 'Person',
          name: review.name,
          ...(review.location ? { address: review.location } : {}),
        },
        reviewBody: review.text,
        datePublished: review.date || '2025-01-01',
        publisher: { '@type': 'Organization', name: 'Preferred Plumbing Solutions' },
        itemReviewed: {
          '@type': 'Plumber',
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
    description: 'Preferred Plumbing Solutions is a family-owned plumber in Spirit Lake, Idaho. 38+ years of experience, radiant heat specialists, emergency service Sunday through Friday 7am to 5pm.',
    thumbnailUrl: [
      `${siteUrl}/images/preferred-plumbing-hero-poster.webp`,
    ],
    contentUrl: `${siteUrl}/videos/preferred-plumbing-hero.mp4`,
    uploadDate: '2024-01-01',
    duration: 'PT13S',
    publisher: {
      '@type': 'Organization',
      name: 'Preferred Plumbing Solutions',
      url: siteUrl,
    },
  }
}

export function webpageSchema(title: string, description: string, slug: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: `${siteUrl}/${slug}`,
    publisher: { '@type': 'Organization', name: 'Preferred Plumbing Solutions' },
    about: {
      '@type': 'Plumber',
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
    name: 'Preferred Plumbing Solutions',
    url: siteUrl,
    description: 'Family-owned plumber in Spirit Lake with 38+ years of combined experience. Radiant heat, new construction, water heaters, emergency service.',
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

export function serviceSchema(serviceName: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description,
    provider: {
      '@type': 'Plumber',
      name: 'Preferred Plumbing Solutions',
      url: siteUrl,
    },
    areaServed: [
      { '@type': 'City', name: 'Spirit Lake', '@id': 'https://en.wikipedia.org/wiki/Spirit_Lake,_Idaho' },
      { '@type': 'State', name: 'Idaho' },
    ],
    offers: {
      '@type': 'Offer',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'USD',
      },
    },
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
