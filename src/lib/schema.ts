import { siteUrl } from './seo'

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Preferred Plumbing Solutions',
    url: siteUrl,
    logo: `${siteUrl}/images/preferred%20logo.webp`,
    description: "Spirit Lake's trusted plumber for 38+ years. New construction, radiant heat, water heaters, emergency service.",
    foundingDate: '1987',
    founder: { '@type': 'Person', name: 'Ron Norris' },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Spirit Lake',
      addressRegion: 'ID',
      postalCode: '83869',
      addressCountry: 'US',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 47.9668, longitude: -116.8693 },
    telephone: '+12082903889',
    email: 'ron@preferredplumbingsolution.com',
    sameAs: ['https://www.tiktok.com/@preferredhnorris'],
    areaServed: [
      { '@type': 'City', name: 'Spirit Lake' },
      { '@type': 'City', name: "Coeur d'Alene" },
      { '@type': 'City', name: 'Post Falls' },
      { '@type': 'City', name: 'Sandpoint' },
      { '@type': 'State', name: 'Idaho' },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+12082903889',
      contactType: 'customer service',
      email: 'ron@preferredplumbingsolution.com',
      availableLanguage: ['English'],
      areaServed: ['US'],
    },
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
    telephone: '+12082903889',
    priceRange: '$$',
    email: 'ron@preferredplumbingsolution.com',
    description: "Spirit Lake's trusted plumber for 38+ years. New construction, radiant heat, water heaters, emergency service. Call 208-290-3889.",
    foundingDate: '1987',
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
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '07:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday'],
        opens: '07:00',
        closes: '17:00',
        description: 'Emergency services only',
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
    award: '38+ Years Serving North Idaho',
    numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 2, maxValue: 10 },
    knowsAbout: [
      'Plumbing installation and repair',
      'New construction plumbing',
      'Commercial plumbing',
      'Radiant floor heating',
      'Water heater installation',
      'Water softener installation',
      'Sewer line replacement',
      'Septic system installation',
      'Emergency plumbing',
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
    streetAddress: 'Spirit Lake, ID 83869',
  }
}

export function contactPointSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPoint',
    telephone: '+12082903889',
    contactType: 'customer service',
    email: 'ron@preferredplumbingsolution.com',
    availableLanguage: ['English'],
    areaServed: ['US'],
    contactOption: 'TollFree',
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

export function reviewSchema(reviews: { id: string; name: string; rating: number; text: string; date?: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: reviews.map((review, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: review.rating,
          bestRating: '5',
        },
        author: { '@type': 'Person', name: review.name },
        reviewBody: review.text,
        datePublished: review.date || '2025-01-01',
        publisher: { '@type': 'Organization', name: 'Preferred Plumbing Solutions' },
      },
    })),
  }
}

export function videoObjectSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Preferred Plumbing Solutions - Spirit Lake Plumber',
    description: 'Preferred Plumbing Solutions provides expert plumbing services in Spirit Lake, Idaho. 38+ years of experience, 24/7 emergency service.',
    thumbnailUrl: [
      `${siteUrl}/images/og-preferred-plumbing-solutions.webp`,
    ],
    contentUrl: `${siteUrl}/videos/preferred-plumbing-hero.mp4`,
    uploadDate: '2024-01-01',
    duration: 'PT30S',
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
    dateModified: new Date().toISOString().split('T')[0],
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
    description: "Spirit Lake's trusted plumber for 38+ years. New construction, radiant heat, water heaters, emergency service.",
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function faqSchema(questions: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
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
      url: 'https://www.preferredplumbingsolution.com',
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
