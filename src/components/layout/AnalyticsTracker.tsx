'use client'

import { useEffect } from 'react'
import { trackPhoneCall } from '@/lib/utils'

export default function AnalyticsTracker() {
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
