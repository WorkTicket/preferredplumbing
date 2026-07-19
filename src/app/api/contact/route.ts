export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, phone, email, city, service, message, referral } = body

    if (!name || !phone || !city || !service || !message) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const webhookUrl = process.env.GHL_WEBHOOK_URL
    if (!webhookUrl) {
      return Response.json(
        { error: 'Contact form is not configured' },
        { status: 503 },
      )
    }

    try {
      const webhookRes = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, email, city, service, message, referral }),
      })

      if (!webhookRes.ok) {
        return Response.json({ error: 'Failed to deliver request' }, { status: 502 })
      }
    } catch {
      return Response.json({ error: 'Failed to deliver request' }, { status: 502 })
    }

    return Response.json({ success: true })
  } catch {
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
}
