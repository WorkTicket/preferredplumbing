export const DEFAULT_CONTACT_TO_EMAILS = [
  'coltondwehr@icloud.com',
  'preferredhnorris@gmail.com',
  'preferredrnorris@gmail.com',
] as const

export const DEFAULT_CONTACT_FROM_EMAIL = 'quotes@callpreferredplumbing.com'

export type ContactLead = {
  name: string
  phone: string
  email: string
  city: string
  service: string
  message: string
  referral: string
}

export function getRecipientEmails(raw?: string | null): string[] {
  const source = raw?.trim() || DEFAULT_CONTACT_TO_EMAILS.join(',')
  return source
    .split(',')
    .map((email) => email.trim())
    .filter(Boolean)
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export function buildEmailHtml(data: ContactLead): string {
  const rows: [string, string][] = [
    ['Name', data.name],
    ['Phone', data.phone],
    ['City', data.city],
    ['Service', data.service],
    ['Email', data.email || 'Not provided'],
    ['How they heard about us', data.referral || 'Not provided'],
    ['Job details', data.message || 'Not provided'],
  ]

  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600;background:#f9fafb;">${escapeHtml(label)}</td><td style="padding:8px 12px;border:1px solid #e5e7eb;white-space:pre-wrap;">${escapeHtml(value)}</td></tr>`,
    )
    .join('')

  return `
    <div style="font-family:Arial,sans-serif;color:#111827;line-height:1.5;">
      <h2 style="margin:0 0 16px;">New Quote Request</h2>
      <p style="margin:0 0 16px;">A visitor submitted the contact form on callpreferredplumbing.com.</p>
      <table style="border-collapse:collapse;width:100%;max-width:640px;">${tableRows}</table>
    </div>
  `.trim()
}

export function buildEmailText(data: ContactLead): string {
  return [
    'New Quote Request',
    '',
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `City: ${data.city}`,
    `Service: ${data.service}`,
    `Email: ${data.email || 'Not provided'}`,
    `How they heard about us: ${data.referral || 'Not provided'}`,
    `Job details: ${data.message || 'Not provided'}`,
  ].join('\n')
}
