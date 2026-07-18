import { describe, expect, it } from 'vitest'
import {
  FEATURED_HOME_SERVICE_SLUGS,
  SERVICE_NAV_ORDER,
  SPECIALTY_SERVICE_SLUGS,
} from './service-slugs'
import { services } from './data'
import { serviceContent, pageMeta } from './service-content'
import { getFaqSections, getAllFaqItems } from './data'
import { getAllBlogSlugs, blogPosts } from '@/data/blog'
import { galleryProjects, getGalleryProjectById } from '@/data/gallery'

describe('content modules', () => {
  it('keeps nav order and content records aligned with services', () => {
    const serviceSlugs = new Set(services.map((s) => s.slug))
    for (const slug of SERVICE_NAV_ORDER) {
      expect(serviceSlugs.has(slug)).toBe(true)
      expect(serviceContent[slug]).toBeDefined()
      expect(pageMeta[slug]).toBeDefined()
    }
    expect(SERVICE_NAV_ORDER).toHaveLength(services.length)
  })

  it('uses featured/specialty slug sets that exist', () => {
    const serviceSlugs = new Set(services.map((s) => s.slug))
    for (const slug of FEATURED_HOME_SERVICE_SLUGS) {
      expect(serviceSlugs.has(slug)).toBe(true)
    }
    for (const slug of SPECIALTY_SERVICE_SLUGS) {
      expect(serviceSlugs.has(slug)).toBe(true)
      expect(slug).not.toBe('emergency')
    }
  })

  it('builds FAQ sections from general + service FAQs', () => {
    const sections = getFaqSections()
    expect(sections[0]?.id).toBe('general')
    expect(sections.length).toBeGreaterThan(1)
    expect(getAllFaqItems().length).toBeGreaterThan(sections[0].items.length)
  })

  it('exposes blog and gallery lookups', () => {
    expect(getAllBlogSlugs()).toEqual(blogPosts.map((p) => p.slug))
    expect(galleryProjects.length).toBeGreaterThan(0)
    expect(getGalleryProjectById(galleryProjects[0].id)?.slug).toBe(galleryProjects[0].slug)
  })
})
