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
