import { describe, expect, it } from 'vitest'
import { areas } from '@/lib/data'
import { areaExtras, extrasForArea } from './area-extras'

describe('area extras', () => {
  it('covers every published city with drive time and named places', () => {
    for (const area of areas) {
      expect(areaExtras[area.slug], area.slug).toBeTruthy()
      const extras = extrasForArea(area)
      expect(extras.driveTime.length, area.slug).toBeGreaterThan(40)
      expect(extras.neighborhoods.length, area.slug).toBeGreaterThanOrEqual(3)
    }
  })

  it('surfaces no-dispatch-fee CTAs on Lilac City cross-shop towns', () => {
    for (const slug of ['post-falls-id', 'rathdrum-id', 'hayden-id'] as const) {
      const extras = extrasForArea({ slug, city: slug })
      expect(extras.ctaNote?.toLowerCase(), slug).toContain('no dispatch fee')
      expect(extras.ctaBandSubtitle?.toLowerCase(), slug).toContain('no dispatch fee')
    }
  })

  it('gives Spirit Lake combo sections for wells/septic, radiant, water heaters, and drains', () => {
    const spirit = extrasForArea({ slug: 'spirit-lake-id', city: 'Spirit Lake' })
    const slugs = (spirit.comboSections ?? []).map((section) => section.slug)
    expect(slugs).toEqual(['water-heaters', 'septic-systems', 'radiant-heat', 'drain-cleaning'])
    expect(spirit.localPhoto?.src).toContain('service-truck')
  })
})
