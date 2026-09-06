import { describe, expect, it } from 'vitest'
import { areas } from '@/lib/data'
import { areaFaqs, areaServicesForCity, citySeoDescription, citySeoTitle } from './area-seo'
import { DESCRIPTION_MAX, TITLE_MAX } from './seo'

describe('city SERP copy', () => {
  it('keeps every city title within SERP length after the brand suffix', () => {
    for (const area of areas) {
      const title = citySeoTitle(area)
      const withBrand = /Preferred Plumbing/i.test(title)
        ? title
        : `${title} | Preferred Plumbing`
      expect(withBrand.length, area.slug).toBeLessThanOrEqual(TITLE_MAX)
      expect(title.toLowerCase()).toContain('plumber')
    }
  })

  it('writes a unique description from the city page copy', () => {
    const spirit = areas.find((a) => a.slug === 'spirit-lake-id')
    const cda = areas.find((a) => a.slug === 'coeur-dalene-id')
    expect(spirit && cda).toBeTruthy()
    const spiritDesc = citySeoDescription(spirit!)
    const cdaDesc = citySeoDescription(cda!)
    expect(spiritDesc).not.toBe(cdaDesc)
    expect(spiritDesc.length).toBeLessThanOrEqual(DESCRIPTION_MAX)
    expect(cdaDesc.length).toBeLessThanOrEqual(DESCRIPTION_MAX)
    expect(spiritDesc).toContain('208-290-3889')
  })

  it('builds unique visible FAQs per city', () => {
    const spirit = areas.find((a) => a.slug === 'spirit-lake-id')!
    const faqs = areaFaqs(spirit)
    expect(faqs.length).toBeGreaterThanOrEqual(4)
    expect(faqs.some((f) => f.question.includes('Spirit Lake'))).toBe(true)
    expect(faqs.some((f) => f.answer.toLowerCase().includes('same-day'))).toBe(true)
  })

  it('keeps Coeur d\'Alene title within SERP length', () => {
    const cda = areas.find((a) => a.slug === 'coeur-dalene-id')!
    const title = citySeoTitle(cda)
    const withBrand = `${title} | Preferred Plumbing`
    expect(withBrand.length).toBeLessThanOrEqual(TITLE_MAX)
    expect(title).toContain("Coeur d'Alene")
  })

  it('surfaces heated driveways on high-demand city pages', () => {
    const cda = areaServicesForCity('coeur-dalene-id')
    const hayden = areaServicesForCity('hayden-id')
    const moscow = areaServicesForCity('moscow-id')
    expect(cda.some((s) => s.slug === 'drain-cleaning')).toBe(true)
    expect(cda.some((s) => s.slug === 'leak-detection')).toBe(true)
    expect(hayden.some((s) => s.slug === 'heated-driveways')).toBe(true)
    expect(moscow.some((s) => s.slug === 'heated-driveways')).toBe(true)
  })
})
