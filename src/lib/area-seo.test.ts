import { describe, expect, it } from 'vitest'
import { areas } from '@/lib/data'
import { areaFaqs, areaServicesForCity, citySeoDescription, citySeoTitle } from './area-seo'
import { DESCRIPTION_MAX, generateMetadata, TITLE_MAX } from './seo'

describe('city SERP copy', () => {
  it('keeps every city title within SERP length after the brand suffix', () => {
    for (const area of areas) {
      const title = citySeoTitle(area)
      const withBrand = /Preferred Plumbing/i.test(title)
        ? title
        : `${title} | Preferred Plumbing`
      expect(withBrand.length, area.slug).toBeLessThanOrEqual(TITLE_MAX)
      expect(title.toLowerCase()).toMatch(/plumber|plumbing/)
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

  it('leads Spirit Lake and Sandpoint with well/septic and hydronic work', () => {
    const spirit = areaServicesForCity('spirit-lake-id')
    const sandpoint = areaServicesForCity('sandpoint-id')
    expect(spirit[0]?.slug).toBe('septic-systems')
    expect(spirit.some((s) => s.slug === 'radiant-heat')).toBe(true)
    expect(sandpoint[0]?.slug).toBe('septic-systems')
  })

  it('includes Spirit Lake well, septic, and winterizing FAQs', () => {
    const spirit = areas.find((a) => a.slug === 'spirit-lake-id')!
    const faqs = areaFaqs(spirit)
    const blob = faqs.map((f) => `${f.question} ${f.answer}`).join(' ').toLowerCase()
    expect(blob).toContain('septic')
    expect(blob).toContain('well')
    expect(blob).toContain('winterize')
  })

  it('states free estimates with no dispatch fee on Post Falls, Rathdrum, and Hayden', () => {
    for (const slug of ['post-falls-id', 'rathdrum-id', 'hayden-id'] as const) {
      const area = areas.find((item) => item.slug === slug)!
      const blob = areaFaqs(area)
        .map((faq) => `${faq.question} ${faq.answer}`)
        .join(' ')
        .toLowerCase()
      expect(blob, slug).toContain('dispatch fee')
      expect(blob, slug).toMatch(/free estimate|estimates are free/)
    }
  })

  it('gives every city locally specific FAQs, not only a shared template', () => {
    for (const area of areas) {
      const faqs = areaFaqs(area)
      expect(faqs.length, area.slug).toBeGreaterThanOrEqual(5)
      expect(
        faqs.some(
          (faq) =>
            faq.question.toLowerCase().includes(area.city.toLowerCase()) ||
            faq.answer.toLowerCase().includes(area.city.toLowerCase()),
        ),
        area.slug,
      ).toBe(true)
    }
  })

  it('uses Hayden and Sandpoint SERP overrides without retitling ranking-problem hubs', () => {
    const hayden = areas.find((a) => a.slug === 'hayden-id')!
    const sandpoint = areas.find((a) => a.slug === 'sandpoint-id')!
    expect(citySeoTitle(hayden)).toBe('Hayden Plumbing | Free Estimates')
    expect(citySeoDescription(hayden)).toContain('no dispatch fee')
    expect(citySeoTitle(sandpoint)).toBe('Plumber Sandpoint ID | Radiant Heat')
    expect(citySeoDescription(sandpoint)).toContain('Pend Oreille')

    const haydenMeta = generateMetadata({
      title: citySeoTitle(hayden),
      description: citySeoDescription(hayden),
      slug: 'areas/hayden-id',
    })
    const sandpointMeta = generateMetadata({
      title: citySeoTitle(sandpoint),
      description: citySeoDescription(sandpoint),
      slug: 'areas/sandpoint-id',
    })
    expect((haydenMeta.title as { absolute: string }).absolute).toBe(
      'Hayden Plumbing | Free Estimates | Preferred Plumbing',
    )
    expect((sandpointMeta.title as { absolute: string }).absolute).toBe(
      'Plumber Sandpoint ID | Radiant Heat | Preferred Plumbing',
    )
    expect((haydenMeta.description as string).length).toBeGreaterThanOrEqual(120)
    expect((haydenMeta.description as string).length).toBeLessThanOrEqual(DESCRIPTION_MAX)
    expect((sandpointMeta.description as string).length).toBeGreaterThanOrEqual(120)
    expect((sandpointMeta.description as string).length).toBeLessThanOrEqual(DESCRIPTION_MAX)

    for (const slug of ['post-falls-id', 'coeur-dalene-id', 'rathdrum-id'] as const) {
      const area = areas.find((item) => item.slug === slug)!
      expect(citySeoTitle(area), slug).toMatch(/^Plumber in /)
    }
  })
})
