import { describe, expect, it } from 'vitest'
import { canonicalDestinationPath, normalizePathname } from './legacy-redirects'

describe('canonicalDestinationPath', () => {
  it('leaves already-canonical paths alone', () => {
    expect(canonicalDestinationPath('/')).toBeNull()
    expect(canonicalDestinationPath('/privacy-policy')).toBeNull()
    expect(canonicalDestinationPath('/services/dishwashers')).toBeNull()
  })

  it('strips trailing slashes in one hop', () => {
    expect(normalizePathname('/privacy-policy/')).toBe('/privacy-policy')
    expect(canonicalDestinationPath('/privacy-policy/')).toBe('/privacy-policy')
  })

  it('maps legacy Duda paths including trailing slashes', () => {
    expect(canonicalDestinationPath('/dishwashers-and-disposals')).toBe('/services/dishwashers')
    expect(canonicalDestinationPath('/dishwashers-and-disposals/')).toBe('/services/dishwashers')
    expect(canonicalDestinationPath('/privacy')).toBe('/privacy-policy')
    expect(canonicalDestinationPath('/privacy/')).toBe('/privacy-policy')
    expect(canonicalDestinationPath('/areas-we-serve/spirit-lake-id')).toBe('/areas/spirit-lake-id')
    expect(canonicalDestinationPath('/portfolio/old-job')).toBe('/gallery')
  })
})
