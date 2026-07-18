import { afterEach, describe, expect, it, vi } from 'vitest'
import { POST } from './route'

function jsonRequest(body: unknown) {
  return new Request('http://localhost/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
}

describe('POST /api/contact', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
    vi.unstubAllEnvs()
  })

  it('returns 400 when required fields are missing', async () => {
    const res = await POST(jsonRequest({ name: 'Pat' }))
    expect(res.status).toBe(400)
    await expect(res.json()).resolves.toEqual({ error: 'Missing required fields' })
  })

  it('returns 503 when webhook is not configured', async () => {
    vi.stubEnv('GHL_WEBHOOK_URL', '')
    const res = await POST(
      jsonRequest({
        name: 'Pat',
        phone: '2085550100',
        city: 'Spirit Lake',
        service: 'emergency',
        message: 'Need help',
      }),
    )
    expect(res.status).toBe(503)
  })

  it('forwards payload and returns success', async () => {
    vi.stubEnv('GHL_WEBHOOK_URL', 'https://hooks.example/ghl')
    const fetchMock = vi.fn().mockResolvedValue(new Response('ok', { status: 200 }))
    vi.stubGlobal('fetch', fetchMock)

    const payload = {
      name: 'Pat',
      phone: '2085550100',
      email: 'pat@example.com',
      city: 'Spirit Lake',
      service: 'emergency',
      message: 'Need help',
      referral: 'google',
    }
    const res = await POST(jsonRequest(payload))
    expect(res.status).toBe(200)
    await expect(res.json()).resolves.toEqual({ success: true })
    expect(fetchMock).toHaveBeenCalledWith(
      'https://hooks.example/ghl',
      expect.objectContaining({
        method: 'POST',
        body: JSON.stringify(payload),
      }),
    )
  })

  it('returns 502 when webhook delivery fails', async () => {
    vi.stubEnv('GHL_WEBHOOK_URL', 'https://hooks.example/ghl')
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response('nope', { status: 500 })))

    const res = await POST(
      jsonRequest({
        name: 'Pat',
        phone: '2085550100',
        city: 'Spirit Lake',
        service: 'emergency',
        message: 'Need help',
      }),
    )
    expect(res.status).toBe(502)
  })
})
