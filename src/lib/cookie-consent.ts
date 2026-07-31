export const COOKIE_CONSENT_KEY = 'pp_cookie_consent'
export type CookieConsentValue = 'accepted' | 'rejected'

export function getCookieConsent(): CookieConsentValue | null {
  if (typeof window === 'undefined') return null
  try {
    const value = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (value === 'accepted' || value === 'rejected') return value
    return null
  } catch {
    return null
  }
}

export function setCookieConsent(value: CookieConsentValue) {
  try {
    localStorage.setItem(COOKIE_CONSENT_KEY, value)
  } catch {
    /* ignore private-mode / blocked storage */
  }
}

export function hasAnalyticsConsent(): boolean {
  return getCookieConsent() === 'accepted'
}
