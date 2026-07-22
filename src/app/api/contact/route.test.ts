import { afterEach, describe, expect, it, vi } from 'vitest'
import { POST } from './route'

const sendMock = vi.fn()

vi.mock('@opennextjs/cloudflare', () => ({
  getCloudflareContext: vi.fn(async () => ({
    env: {
      EMAIL: { send: sendMock },
      CONTACT_TO_EMAIL:
        'coltondwehr@icloud.com,preferredhnorris@gmail.com,preferredrnorris@gmail.com',
      CONTACT_FROM_EMAIL: 'quotes@callpreferredplumbing.com',
    },
  })),
}))

function jsonRequest(body: unknown) {
  return new Request('http://localhost/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
}

const validPayload = {
  name: 'Pat Norris',
  phone: '2085550100',
  email: 'pat@example.com',
  city: 'Spirit Lake',
  service: 'Emergency Plumbing',
  message: 'Need help with a burst pipe today.',
  referral: 'Google',
  _honey: '',
}

describe('POST /api/contact', () => {
  afterEach(() => {
    sendMock.mockReset()
  })

  it('returns 400 when required fields are missing', async () => {
    const res = await POST(jsonRequest({ name: 'Pat' }))
    expect(res.status).toBe(400)
    await expect(res.json()).resolves.toEqual({
      success: false,
      error: 'Please enter a valid phone number.',
    })
  })

  it('returns success for honeypot submissions without sending email', async () => {
    const res = await POST(jsonRequest({ ...validPayload, _honey: 'bot' }))
    expect(res.status).toBe(200)
    await expect(res.json()).resolves.toEqual({ success: true })
    expect(sendMock).not.toHaveBeenCalled()
  })

  it('sends email via Cloudflare Email binding', async () => {
    sendMock.mockResolvedValue(undefined)
    const res = await POST(jsonRequest(validPayload))
    expect(res.status).toBe(200)
    await expect(res.json()).resolves.toEqual({ success: true })
    expect(sendMock).toHaveBeenCalledWith(
      expect.objectContaining({
        to: [
          'coltondwehr@icloud.com',
          'preferredhnorris@gmail.com',
          'preferredrnorris@gmail.com',
        ],
        subject: 'New Quote Request - Pat Norris (Emergency Plumbing)',
        replyTo: 'pat@example.com',
      }),
    )
  })

  it('returns 502 when email delivery fails', async () => {
    sendMock.mockRejectedValue(new Error('send failed'))
    const res = await POST(jsonRequest(validPayload))
    expect(res.status).toBe(502)
    await expect(res.json()).resolves.toEqual({
      success: false,
      error: 'send failed',
    })
  })
})
