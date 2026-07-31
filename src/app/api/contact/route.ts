import { getCloudflareContext } from '@opennextjs/cloudflare'
import {
  buildEmailHtml,
  buildEmailText,
  DEFAULT_CONTACT_FROM_EMAIL,
  getRecipientEmails,
  isValidContactPhone,
  type ContactLead,
} from '@/lib/contact-email'

type EmailBinding = {
  send: (message: {
    to: string | string[]
    from: string | { email: string; name?: string }
    subject: string
    html: string
    text: string
    replyTo?: string
  }) => Promise<unknown>
}

type ContactEnv = {
  EMAIL?: EmailBinding
  CONTACT_TO_EMAIL?: string
  CONTACT_FROM_EMAIL?: string
}

function validatePayload(body: unknown):
  | { ok: false; message: string }
  | { ok: true; honeypot: true }
  | { ok: true; honeypot?: false; data: ContactLead } {
  if (!body || typeof body !== 'object') {
    return { ok: false, message: 'Invalid request body.' }
  }

  const record = body as Record<string, unknown>

  if (typeof record._honey === 'string' && record._honey.trim()) {
    return { ok: true, honeypot: true }
  }

  const name = typeof record.name === 'string' ? record.name.trim() : ''
  const phone = typeof record.phone === 'string' ? record.phone.trim() : ''
  const city = typeof record.city === 'string' ? record.city.trim() : ''
  const service = typeof record.service === 'string' ? record.service.trim() : ''
  const email = typeof record.email === 'string' ? record.email.trim() : ''
  const message = typeof record.message === 'string' ? record.message.trim() : ''
  const referral = typeof record.referral === 'string' ? record.referral.trim() : ''

  if (name.length < 2) {
    return { ok: false, message: 'Please enter your full name.' }
  }

  if (!isValidContactPhone(phone)) {
    return { ok: false, message: 'Please enter a valid phone number.' }
  }

  if (city.length < 2) {
    return { ok: false, message: 'Please enter your city.' }
  }

  if (!service) {
    return { ok: false, message: 'Please select a service.' }
  }

  if (message.length < 10) {
    return { ok: false, message: 'Please describe your project briefly.' }
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, message: 'Please enter a valid email address.' }
  }

  return {
    ok: true,
    data: { name, phone, email, city, service, message, referral },
  }
}

async function getEnv(): Promise<ContactEnv> {
  try {
    const { env } = await getCloudflareContext({ async: true })
    return env as ContactEnv
  } catch {
    return {
      CONTACT_TO_EMAIL: process.env.CONTACT_TO_EMAIL,
      CONTACT_FROM_EMAIL: process.env.CONTACT_FROM_EMAIL,
    }
  }
}

async function sendViaCloudflareEmail(env: ContactEnv, data: ContactLead) {
  if (!env.EMAIL) {
    return {
      ok: false as const,
      status: 503,
      message: 'Contact form is not configured yet. Please call us directly.',
    }
  }

  const toEmails = getRecipientEmails(env.CONTACT_TO_EMAIL)
  const fromEmail = env.CONTACT_FROM_EMAIL || DEFAULT_CONTACT_FROM_EMAIL

  const payload = {
    to: toEmails.length === 1 ? toEmails[0] : toEmails,
    from: { email: fromEmail, name: 'Preferred Plumbing Solutions' },
    subject: `New Quote Request - ${data.name} (${data.service})`,
    html: buildEmailHtml(data),
    text: buildEmailText(data),
    ...(data.email ? { replyTo: data.email } : {}),
  }

  try {
    await env.EMAIL.send(payload)
    return { ok: true as const }
  } catch (error) {
    const messageText =
      error instanceof Error && error.message
        ? error.message
        : 'Unable to send your request right now.'
    return { ok: false as const, status: 502, message: messageText }
  }
}

export async function POST(req: Request) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return Response.json({ success: false, error: 'Invalid request body.' }, { status: 400 })
  }

  const validation = validatePayload(body)
  if (!validation.ok) {
    return Response.json({ success: false, error: validation.message }, { status: 400 })
  }

  if ('honeypot' in validation && validation.honeypot) {
    return Response.json({ success: true })
  }

  if (!('data' in validation) || !validation.data) {
    return Response.json({ success: false, error: 'Invalid request body.' }, { status: 400 })
  }

  const env = await getEnv()
  const delivery = await sendViaCloudflareEmail(env, validation.data)
  if (!delivery.ok) {
    return Response.json(
      { success: false, error: delivery.message },
      { status: delivery.status },
    )
  }

  return Response.json({ success: true })
}
