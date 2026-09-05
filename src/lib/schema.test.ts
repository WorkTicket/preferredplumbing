import { describe, expect, it } from 'vitest'
import {
  aboutPageSchema,
  articleSchema,
  contactPageSchema,
  featuredServicesItemList,
  imageGallerySchema,
  localBusinessSchema,
  serviceAreaServed,
  serviceSchema,
  servedCityPlaces,
} from './schema'

describe('service area schema', () => {
  it('lists actual cities and counties, not whole states', () => {
    const served = serviceAreaServed()
    const stateEntries = served.filter(
      (entry) => entry['@type'] === 'State' || /^(Idaho|Washington)$/i.test(String(entry.name)),
    )
    expect(stateEntries).toHaveLength(0)
    expect(servedCityPlaces().length).toBeGreaterThan(10)
  })

  it('links Wikipedia with sameAs instead of claiming @id identity', () => {
    const withWiki = servedCityPlaces().filter((city) => 'sameAs' in city)
    expect(withWiki.length).toBeGreaterThan(0)
    for (const city of servedCityPlaces()) {
      expect(city).not.toHaveProperty('@id')
    }
  })

  it('includes service url when slug is provided', () => {
    const schema = serviceSchema(
      'Water Heater Repair',
      'Same-day water heater repair in North Idaho.',
      'water-heaters',
    )
    expect(schema.url).toContain('/services/water-heaters')
    expect(schema.areaServed).toEqual(serviceAreaServed())
  })
})

describe('rich result schema', () => {
  it('does not emit priceless Offer nodes in the local business catalog', () => {
    const catalog = localBusinessSchema().hasOfferCatalog.itemListElement
    expect(catalog.every((item) => item['@type'] === 'OfferCatalog')).toBe(true)
    expect(catalog.every((item) => typeof item.url === 'string' && item.url.includes('/services/'))).toBe(true)
  })

  it('uses ImageObject for article images and Person+url for author', () => {
    const schema = articleSchema({
      title: 'Test',
      description: 'Desc',
      slug: 'test',
      image: '/images/blog/test.webp',
      datePublished: '2026-07-01',
      wordCount: 400,
      readTimeMinutes: 2,
    })
    expect(schema.image).toMatchObject({ '@type': 'ImageObject', width: 1920, height: 1080 })
    expect(schema.author).toMatchObject({ '@type': 'Person', url: expect.stringContaining('/about') })
    expect(schema.timeRequired).toBe('PT2M')
  })

  it('keeps AboutPage and ContactPage free of invalid extra properties', () => {
    const about = aboutPageSchema()
    expect(about['@type']).toBe('AboutPage')
    expect(about).not.toHaveProperty('founder')
    expect(about.mainEntity).toEqual({ '@id': expect.stringContaining('#organization') })

    const contact = contactPageSchema()
    expect(contact['@type']).toBe('ContactPage')
    expect(contact.mainEntity).toEqual({ '@id': expect.stringContaining('#localbusiness') })
    expect(contact).not.toHaveProperty('@graph')
  })

  it('lists featured services with ListItem url and name', () => {
    const schema = featuredServicesItemList([
      { name: 'Emergency Plumbing', url: 'https://www.callpreferredplumbing.com/services/emergency' },
    ])
    expect(schema.itemListElement[0]).toMatchObject({
      '@type': 'ListItem',
      position: 1,
      name: 'Emergency Plumbing',
      url: expect.stringContaining('/services/emergency'),
    })
  })

  it('types gallery locations as Place', () => {
    const schema = imageGallerySchema([
      {
        title: 'Radiant heat',
        description: 'Boiler room',
        location: 'Spirit Lake',
        image: 'https://www.callpreferredplumbing.com/images/gallery/boiler-radiant-heat-1.webp',
      },
    ])
    expect(schema['@type']).toBe('ImageGallery')
    expect(schema.associatedMedia[0].contentLocation).toEqual({
      '@type': 'Place',
      name: 'Spirit Lake',
    })
  })
})
