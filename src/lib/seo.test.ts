import { describe, expect, it } from 'vitest'
import { blogPosts } from '@/data/blog'
import {
  clampAtWord,
  defaultTitle,
  generateBlogMetadata,
  generateMetadata,
  normalizeDescription,
  siteName,
  siteUrl,
  TITLE_MAX,
  DESCRIPTION_MAX,
  DESCRIPTION_MIN,
} from './seo'

describe('generateMetadata', () => {
  it('uses absolute titles within SERP length limits', () => {
    const meta = generateMetadata({ title: 'Contact Us', slug: 'contact' })
    expect(meta.title).toEqual({
      absolute: 'Contact Us | Preferred Plumbing',
    })
    expect((meta.title as { absolute: string }).absolute.length).toBeLessThanOrEqual(TITLE_MAX)
    expect(meta.alternates?.canonical).toBe(`${siteUrl}/contact`)
    expect(meta.description).toBeTruthy()
    expect((meta.description as string).length).toBeGreaterThanOrEqual(DESCRIPTION_MIN)
    expect((meta.description as string).length).toBeLessThanOrEqual(DESCRIPTION_MAX)
  })

  it('falls back to default title when none provided', () => {
    const meta = generateMetadata({})
    expect(meta.title).toEqual({ absolute: defaultTitle })
    expect(defaultTitle.length).toBeLessThanOrEqual(TITLE_MAX)
    expect(meta.alternates?.canonical).toBe(siteUrl)
  })

  it('clamps long titles and descriptions', () => {
    const meta = generateMetadata({
      title: 'Bathroom Remodel Plumbing: What North Idaho Homeowners Should Budget For',
      description:
        'A very long description that goes on and on about plumbing services across Spirit Lake, Coeur d\'Alene, Post Falls, Sandpoint, Hayden, Rathdrum, and the rest of North Idaho with way too many words for a meta description field.',
    })
    const title = (meta.title as { absolute: string }).absolute
    const description = meta.description as string
    expect(title.length).toBeLessThanOrEqual(TITLE_MAX)
    expect(description.length).toBeLessThanOrEqual(DESCRIPTION_MAX)
    expect(description.length).toBeGreaterThanOrEqual(DESCRIPTION_MIN)
  })
})

describe('clamp helpers', () => {
  it('clampAtWord respects max length', () => {
    expect(clampAtWord('One two three four five', 10).length).toBeLessThanOrEqual(10)
  })

  it('normalizeDescription pads short copy', () => {
    const out = normalizeDescription('Short meta description.')
    expect(out.length).toBeGreaterThanOrEqual(DESCRIPTION_MIN)
    expect(out).toContain('208-290-3889')
  })

  it('keeps site name available for layout/schema', () => {
    expect(siteName).toBe('Preferred Plumbing Solutions')
  })
})

describe('generateBlogMetadata', () => {
  it('uses seoTitle so long headlines are not truncated in the SERP', () => {
    const meta = generateBlogMetadata({
      title: 'Is a Heated Driveway Worth It in North Idaho Winters?',
      seoTitle: 'Heated Driveway Worth It in Idaho?',
      excerpt:
        'Hydronic snow-melt costs more upfront. In Spirit Lake winters you get safer walks, less salt damage, and no more shoveling.',
      slug: 'heated-driveway-worth-it-north-idaho',
      publishedAt: '2026-07-17',
    })
    const title = (meta.title as { absolute: string }).absolute
    expect(title).toBe('Heated Driveway Worth It in Idaho? | Preferred Plumbing')
    expect(title.length).toBeLessThanOrEqual(TITLE_MAX)
  })

  it('keeps every published post seoTitle within SERP length', () => {
    for (const post of blogPosts) {
      expect(post.seoTitle, post.slug).toBeTruthy()
      const meta = generateBlogMetadata({
        title: post.title,
        seoTitle: post.seoTitle,
        excerpt: post.excerpt,
        slug: post.slug,
        publishedAt: post.date,
      })
      const title = (meta.title as { absolute: string }).absolute
      expect(title.length, post.slug).toBeLessThanOrEqual(TITLE_MAX)
    }
  })
})

