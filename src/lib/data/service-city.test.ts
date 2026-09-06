import { describe, expect, it } from 'vitest'
import { DESCRIPTION_MAX, TITLE_MAX } from '../seo'
import {
  SERVICE_CITY_CITIES,
  SERVICE_CITY_SERVICES,
  getAllServiceCityPages,
  getServiceCityPage,
  isServiceCityCombo,
  serviceHrefForCity,
} from './service-city'

describe('service × city landing pages', () => {
  it('builds 20 unique high-intent combos and skips Spirit Lake', () => {
    const pages = getAllServiceCityPages()
    expect(pages).toHaveLength(SERVICE_CITY_SERVICES.length * SERVICE_CITY_CITIES.length)
    expect(pages).toHaveLength(20)
    expect(pages.every((page) => page.citySlug !== ('spirit-lake-id' as string))).toBe(true)
    expect(isServiceCityCombo('emergency', 'spirit-lake-id')).toBe(false)
    expect(isServiceCityCombo('radiant-heat', 'coeur-dalene-id')).toBe(false)
  })

  it('keeps unique titles, descriptions, and body copy per combo', () => {
    const pages = getAllServiceCityPages()
    const titles = new Set(pages.map((page) => page.title))
    const h1s = new Set(pages.map((page) => page.h1))
    const descriptions = new Set(pages.map((page) => page.description))
    const intros = new Set(pages.map((page) => page.intro.join(' ')))
    expect(titles.size).toBe(pages.length)
    expect(h1s.size).toBe(pages.length)
    expect(descriptions.size).toBe(pages.length)
    expect(intros.size).toBe(pages.length)

    for (const page of pages) {
      const withBrand = `${page.title} | Preferred Plumbing`
      expect(withBrand.length, page.path).toBeLessThanOrEqual(TITLE_MAX)
      expect(page.description.length, page.path).toBeLessThanOrEqual(DESCRIPTION_MAX)
      expect(page.intro.length).toBeGreaterThanOrEqual(2)
      expect(page.localFocus.length).toBeGreaterThanOrEqual(1)
      expect(page.faqs.length).toBeGreaterThanOrEqual(3)
    }
  })

  it('points city hubs at the combo URL only when the page exists', () => {
    expect(serviceHrefForCity('emergency', 'coeur-dalene-id')).toBe(
      '/services/emergency/coeur-dalene-id',
    )
    expect(serviceHrefForCity('emergency', 'spirit-lake-id')).toBe('/services/emergency')
    expect(serviceHrefForCity('leak-detection', 'hayden-id')).toBe('/services/leak-detection')
    expect(getServiceCityPage('water-heaters', 'post-falls-id')?.h1).toContain('Post Falls')
  })
})
