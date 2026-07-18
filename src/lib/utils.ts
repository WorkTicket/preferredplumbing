import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPhone(phone: string) {
  const cleaned = phone.replace(/\D/g, '')
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`
  }
  return phone
}

/** Format YYYY-MM-DD as a local calendar date (avoids UTC off-by-one). */
export function formatDisplayDate(
  dateStr: string,
  options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' },
) {
  const [y, m, d] = dateStr.split('-').map(Number)
  if (!y || !m || !d) return dateStr
  return new Date(y, m - 1, d).toLocaleDateString('en-US', options)
}

export const PHONE = '208-290-3889'
export const PHONE_HREF = 'tel:12082903889'

export const CONTACT_EMAILS = [
  { name: 'Hunter Norris', email: 'preferredhnorris@gmail.com' },
  { name: 'Ron Norris', email: 'preferredrnorris@gmail.com' },
] as const

/** @deprecated Use CONTACT_EMAILS */
export const EMAIL = CONTACT_EMAILS[0].email

export const FORM_RECIPIENT_EMAILS = CONTACT_EMAILS.map((contact) => contact.email)
export const CITY = 'Spirit Lake'
export const STATE = 'Idaho'
export const ZIP = '83869'
export const FULL_ADDRESS = `${CITY}, ${STATE} ${ZIP}`

export const MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d171073.44739193922!2d-116.98501708359373!3d47.966799999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5361195b0b0b0b0b%3A0x0!2sSpirit%20Lake%2C%20ID%2083869!5e0!3m2!1sen!2sus!4v1'

export const DIRECTIONS_URL =
  'https://www.google.com/maps/dir/?api=1&destination=47.9668,-116.8693&destination_place_id=Spirit%20Lake%2C%20ID'

export const GBP_URL = 'https://maps.app.goo.gl/ne3NdeDCnQqC3Zni7'
export const TIKTOK_URL = 'https://www.tiktok.com/@preferredhnorris'

/** Open Sun–Fri 7am–5pm; closed Saturday. No 24/7 service. */
export const BUSINESS_HOURS = {
  openDays: 'Sunday–Friday',
  openRange: '7am–5pm',
  saturday: 'Saturday Closed',
  short: 'Sun–Fri 7am–5pm · Sat Closed',
  lines: ['Sun–Fri 7am–5pm', 'Sat Closed'] as const,
}

export function trackPhoneCall(source: string) {
  if (typeof window !== 'undefined' && typeof (window as any).gtag !== 'undefined') {
    ;(window as any).gtag('event', 'phone_call', {
      event_category: 'engagement',
      event_label: source,
      value: 1,
    })
  }
}

export function trackFormSubmission(service?: string) {
  if (typeof window !== 'undefined' && typeof (window as any).gtag !== 'undefined') {
    ;(window as any).gtag('event', 'generate_lead', {
      event_category: 'conversion',
      event_label: service || 'quote_request',
      value: 1,
    })
  }
}

export function trackClick(label: string) {
  if (typeof window !== 'undefined' && typeof (window as any).gtag !== 'undefined') {
    ;(window as any).gtag('event', 'click', {
      event_category: 'engagement',
      event_label: label,
    })
  }
}
