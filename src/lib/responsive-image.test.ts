import { describe, expect, it } from 'vitest'
import { IMAGE_SIZES } from './image-sizes'
import { buildSrcset, getVariantUrl } from './responsive-image'

const gallerySrc = '/images/gallery/under-slab-plumbing-1.webp'

describe('gallery image loading', () => {
  it('caps homepage preview thumbs', () => {
    expect(IMAGE_SIZES.galleryPreview).toContain('50vw')
    expect(IMAGE_SIZES.galleryPreview).not.toContain('100vw')
  })

  it('caps hero srcset at 1920 so 2560 never wins LCP', () => {
    expect(IMAGE_SIZES.hero).toContain('1920px')
    const src = '/images/preferred-plumbing-hero-poster.webp'
    const srcset = buildSrcset(src, 'avif', 1920)
    expect(srcset).toContain('768w')
    expect(srcset).toContain('1920w')
    expect(srcset).not.toContain('2560w')
  })

  it('caps thumbnail srcset so phones do not request 1280–2560 files', () => {
    const srcset = buildSrcset(gallerySrc, 'webp', 1024)
    expect(srcset).toContain('640w')
    expect(srcset).toContain('1024w')
    expect(srcset).not.toContain('1280w')
    expect(srcset).not.toContain('2560w')
  })

  it('picks a 768 webp fallback within the thumbnail cap', () => {
    expect(getVariantUrl(gallerySrc, 'webp', 768, 1024)).toContain('-768.webp')
  })
})
