import { Resend } from 'resend'
import { FORM_RECIPIENT_EMAILS } from '@/lib/utils'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, phone, email, city, service, message, referral } = body

    if (!name || !phone || !city || !service || !message) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 })
    }

    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY)
      await resend.emails.send({
        from: 'website@preferredplumbingsolution.com',
        to: FORM_RECIPIENT_EMAILS,
        subject: `New Quote Request from ${name} - ${service}`,
        html: `
          <h2>New Quote Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email || 'N/A'}</p>
          <p><strong>City/Zip:</strong> ${city}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Referral:</strong> ${referral || 'N/A'}</p>
          <p><strong>Message:</strong><br/>${message}</p>
        `,
      })
    }

    if (process.env.GHL_WEBHOOK_URL) {
      await fetch(process.env.GHL_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, email, city, service, message, referral }),
      }).catch(() => {})
    }

    return Response.json({ success: true })
  } catch {
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
}
