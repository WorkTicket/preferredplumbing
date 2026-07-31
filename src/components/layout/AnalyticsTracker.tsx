'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { loadGoogleAnalytics, trackPageView, trackPhoneCall } from '@/lib/analytics'
import { hasAnalyticsConsent } from '@/lib/cookie-consent'

export default function AnalyticsTracker() {
  const pathname = usePathname()
  const isFirstPath = useRef(true)

  useEffect(() => {
    if (!hasAnalyticsConsent()) return
    void loadGoogleAnalytics()
  }, [])

  useEffect(() => {
    if (!pathname) return
    // Initial page_view is sent by gtag('config') inside loadGoogleAnalytics.
    if (isFirstPath.current) {
      isFirstPath.current = false
      return
    }
    if (!hasAnalyticsConsent()) return
    trackPageView(pathname)
  }, [pathname])

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      const link = target?.closest('a[href^="tel:"]') as HTMLAnchorElement | null
      if (!link) return

      const source =
        link.getAttribute('data-track') ||
        (link.closest('header')
          ? 'header'
          : link.closest('footer')
            ? 'footer'
            : link.closest('#contact')
              ? 'contact_section'
              : link.textContent?.trim().slice(0, 40) || 'phone_link')

      trackPhoneCall(source)
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return null
}
