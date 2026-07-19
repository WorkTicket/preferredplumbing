import { describe, expect, it } from 'vitest'
import { defaultTitle, generateMetadata, siteName, siteUrl } from './seo'

describe('generateMetadata', () => {
  it('uses absolute titles and site defaults', () => {
    const meta = generateMetadata({ title: 'Contact Us', slug: 'contact' })
    expect(meta.title).toEqual({
      absolute: `Contact Us | ${siteName} | Spirit Lake, ID`,
    })
    expect(meta.alternates?.canonical).toBe(`${siteUrl}/contact`)
    expect(meta.description).toBeTruthy()
  })

  it('falls back to default title when none provided', () => {
    const meta = generateMetadata({})
    expect(meta.title).toEqual({ absolute: defaultTitle })
    expect(meta.alternates?.canonical).toBe(siteUrl)
  })
})
