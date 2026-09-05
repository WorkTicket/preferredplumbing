import { describe, expect, it } from 'vitest'
import { shouldApplyHtmlCacheHeaders } from './static-asset-path'

describe('shouldApplyHtmlCacheHeaders', () => {
  it('revalidates HTML routes', () => {
    expect(shouldApplyHtmlCacheHeaders('/')).toBe(true)
    expect(shouldApplyHtmlCacheHeaders('/about')).toBe(true)
    expect(shouldApplyHtmlCacheHeaders('/sitemap.xml')).toBe(true)
  })

  it('leaves images, video, and icons on their own cache headers', () => {
    expect(shouldApplyHtmlCacheHeaders('/images/preferred-logo.webp')).toBe(false)
    expect(shouldApplyHtmlCacheHeaders('/videos/preferred-plumbing-hero.mp4')).toBe(false)
    expect(shouldApplyHtmlCacheHeaders('/apple-icon.png')).toBe(false)
    expect(shouldApplyHtmlCacheHeaders('/icon.png')).toBe(false)
    expect(shouldApplyHtmlCacheHeaders('/favicon.ico')).toBe(false)
  })
})
