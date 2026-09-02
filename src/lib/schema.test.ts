import { describe, expect, it } from 'vitest'
import { serviceAreaServed, serviceSchema, servedCityPlaces } from './schema'

describe('service area schema', () => {
  it('lists actual cities and counties, not whole states', () => {
    const served = serviceAreaServed()
    const stateEntries = served.filter(
      (entry) => entry['@type'] === 'State' || /^(Idaho|Washington)$/i.test(String(entry.name)),
    )
    expect(stateEntries).toHaveLength(0)
    expect(servedCityPlaces().length).toBeGreaterThan(10)
  })

  it('includes service url when slug is provided', () => {
    const schema = serviceSchema(
      'Water Heater Repair',
      'Same-day water heater repair in North Idaho.',
      'water-heaters',
    )
    expect(schema.url).toContain('/services/water-heaters')
    expect(schema.areaServed).toEqual(serviceAreaServed())
  })
})
