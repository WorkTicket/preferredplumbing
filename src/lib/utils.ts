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
export const PHONE_DISPLAY = '(208) 290-3889'
export const PHONE_HREF = 'tel:12082903889'
export const PHONE_E164 = '+12082903889'

export const CONTACT_EMAILS = [
  { name: 'Hunter Norris', email: 'preferredhnorris@gmail.com' },
  { name: 'Ron Norris', email: 'preferredrnorris@gmail.com' },
] as const

export const CITY = 'Spirit Lake'
export const STATE = 'Idaho'
export const ZIP = '83869'
export const FULL_ADDRESS = `${CITY}, ${STATE} ${ZIP}`

export const MAP_EMBED_URL =
  'https://maps.google.com/maps?q=Spirit+Lake,+ID+83869&z=12&output=embed'

export const DIRECTIONS_URL =
  'https://www.google.com/maps/dir/?api=1&destination=47.9668,-116.8693'

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

type GtagFn = (...args: unknown[]) => void

function getGtag(): GtagFn | undefined {
  if (typeof window === 'undefined') return undefined
  const gtag = (window as Window & { gtag?: GtagFn }).gtag
  return typeof gtag === 'function' ? gtag : undefined
}

export function trackPhoneCall(source: string) {
  getGtag()?.('event', 'phone_call', {
    event_category: 'engagement',
    event_label: source,
    value: 1,
  })
}

export function trackFormSubmission(service?: string) {
  getGtag()?.('event', 'generate_lead', {
    event_category: 'conversion',
    event_label: service || 'quote_request',
    value: 1,
  })
}

export function trackClick(label: string) {
  getGtag()?.('event', 'click', {
    event_category: 'engagement',
    event_label: label,
  })
}
