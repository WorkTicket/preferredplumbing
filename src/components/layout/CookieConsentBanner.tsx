'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { loadGoogleAnalytics } from '@/lib/analytics'
import {
  getCookieConsent,
  setCookieConsent,
  type CookieConsentValue,
} from '@/lib/cookie-consent'

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (getCookieConsent()) return
    setVisible(true)
  }, [])

  function choose(value: CookieConsentValue) {
    setCookieConsent(value)
    setVisible(false)
    if (value === 'accepted') {
      void loadGoogleAnalytics()
    }
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
      className="fixed inset-x-0 bottom-0 z-[60] p-3 pb-[calc(3.5rem+env(safe-area-inset-bottom,0px)+0.75rem)] sm:p-4 md:bottom-4 md:left-4 md:right-auto md:max-w-md md:pb-4"
    >
      <div className="rounded-2xl border border-white/10 bg-navy px-4 py-4 shadow-premium-2xl sm:px-5 sm:py-5">
        <p className="font-display text-sm font-bold uppercase tracking-wider text-white">
          We use cookies
        </p>
        <p className="mt-2 text-sm leading-relaxed text-gray-300">
          We use essential cookies to run this site and, with your consent, analytics
          cookies to understand how visitors use callpreferredplumbing.com. See our{' '}
          <Link
            href="/privacy-policy"
            className="font-semibold text-blue-light underline underline-offset-2 hover:text-white"
          >
            Privacy Policy
          </Link>
          .
        </p>
        <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={() => choose('rejected')}
            className="inline-flex min-h-[44px] flex-1 items-center justify-center rounded-xl border border-white/20 px-4 py-2.5 text-sm font-semibold text-gray-200 transition-colors hover:bg-white/5 hover:text-white"
          >
            Reject non-essential
          </button>
          <button
            type="button"
            onClick={() => choose('accepted')}
            className="inline-flex min-h-[44px] flex-1 items-center justify-center rounded-xl bg-blue px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-blue-dark"
          >
            Accept analytics
          </button>
        </div>
      </div>
    </div>
  )
}
