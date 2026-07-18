import { Resend } from 'resend'
import { FORM_RECIPIENT_EMAILS } from '@/lib/utils'

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, phone, email, city, service, message, referral } = body

    if (!name || !phone || !city || !service || !message) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const resendKey = process.env.RESEND_API_KEY
    const webhookUrl = process.env.GHL_WEBHOOK_URL

    if (!resendKey && !webhookUrl) {
      return Response.json(
        { error: 'Contact form is not configured' },
        { status: 503 },
      )
    }

    let delivered = false

    if (resendKey) {
      const resend = new Resend(resendKey)
      const { error } = await resend.emails.send({
        from: 'website@preferredplumbingsolution.com',
        to: FORM_RECIPIENT_EMAILS,
        subject: `New Quote Request from ${String(name).slice(0, 80)} - ${String(service).slice(0, 80)}`,
        html: `
          <h2>New Quote Request</h2>
          <p><strong>Name:</strong> ${escapeHtml(String(name))}</p>
          <p><strong>Phone:</strong> ${escapeHtml(String(phone))}</p>
          <p><strong>Email:</strong> ${escapeHtml(String(email || 'N/A'))}</p>
          <p><strong>City/Zip:</strong> ${escapeHtml(String(city))}</p>
          <p><strong>Service:</strong> ${escapeHtml(String(service))}</p>
          <p><strong>Referral:</strong> ${escapeHtml(String(referral || 'N/A'))}</p>
          <p><strong>Message:</strong><br/>${escapeHtml(String(message)).replace(/\n/g, '<br/>')}</p>
        `,
      })

      if (error) {
        console.error('Resend error:', error)
        if (!webhookUrl) {
          return Response.json({ error: 'Failed to send email' }, { status: 502 })
        }
      } else {
        delivered = true
      }
    }

    if (webhookUrl) {
      try {
        const webhookRes = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, phone, email, city, service, message, referral }),
        })
        if (webhookRes.ok) {
          delivered = true
        } else if (!delivered) {
          return Response.json({ error: 'Failed to deliver request' }, { status: 502 })
        }
      } catch {
        if (!delivered) {
          return Response.json({ error: 'Failed to deliver request' }, { status: 502 })
        }
      }
    }

    if (!delivered) {
      return Response.json({ error: 'Failed to deliver request' }, { status: 502 })
    }

    return Response.json({ success: true })
  } catch {
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
}
