import { describe, expect, it } from 'vitest'
import { HTML_CACHE_CONTROL, shouldApplyHtmlCacheHeaders } from './static-asset-path'
import { INDEXNOW_KEY } from './indexnow'

describe('shouldApplyHtmlCacheHeaders', () => {
  it('revalidates HTML routes', () => {
    expect(shouldApplyHtmlCacheHeaders('/')).toBe(true)
    expect(shouldApplyHtmlCacheHeaders('/about')).toBe(true)
    expect(shouldApplyHtmlCacheHeaders('/sitemap.xml')).toBe(true)
  })

  it('lets the CDN reuse HTML briefly while browsers revalidate', () => {
    expect(HTML_CACHE_CONTROL).toContain('max-age=0')
    expect(HTML_CACHE_CONTROL).toContain('s-maxage=300')
  })

  it('leaves images, video, icons, and IndexNow key on their own cache headers', () => {
    expect(shouldApplyHtmlCacheHeaders('/images/preferred-logo.webp')).toBe(false)
    expect(shouldApplyHtmlCacheHeaders('/videos/preferred-plumbing-hero.mp4')).toBe(false)
    expect(shouldApplyHtmlCacheHeaders('/apple-icon.png')).toBe(false)
    expect(shouldApplyHtmlCacheHeaders('/icon.png')).toBe(false)
    expect(shouldApplyHtmlCacheHeaders('/favicon.ico')).toBe(false)
    expect(shouldApplyHtmlCacheHeaders(`/${INDEXNOW_KEY}.txt`)).toBe(false)
  })
})
