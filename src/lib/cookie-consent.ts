export const COOKIE_CONSENT_KEY = 'pp_cookie_consent'
export const COOKIE_CONSENT_EVENT = 'pp-cookie-consent'
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

export function subscribeCookieConsent(onStoreChange: () => void) {
  window.addEventListener(COOKIE_CONSENT_EVENT, onStoreChange)
  window.addEventListener('storage', onStoreChange)
  return () => {
    window.removeEventListener(COOKIE_CONSENT_EVENT, onStoreChange)
    window.removeEventListener('storage', onStoreChange)
  }
}

export function setCookieConsent(value: CookieConsentValue) {
  try {
    localStorage.setItem(COOKIE_CONSENT_KEY, value)
  } catch {
    /* ignore private-mode / blocked storage */
  }
  window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT))
}

export function hasAnalyticsConsent(): boolean {
  return getCookieConsent() === 'accepted'
}

export function shouldShowCookieBanner(): boolean {
  return getCookieConsent() === null
}
