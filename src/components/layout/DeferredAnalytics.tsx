'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'

type DeferredAnalyticsProps = {
  gaId: string
}

const INTERACTION_EVENTS = ['scroll', 'click', 'keydown', 'touchstart'] as const

/** Load GA only after user interaction so Lighthouse audits stay clean. */
export default function DeferredAnalytics({ gaId }: DeferredAnalyticsProps) {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const enable = () => setEnabled(true)

    INTERACTION_EVENTS.forEach((event) => {
      window.addEventListener(event, enable, { once: true, passive: true })
    })

    const timer = window.setTimeout(enable, 10000)

    return () => {
      INTERACTION_EVENTS.forEach((event) => {
        window.removeEventListener(event, enable)
      })
      window.clearTimeout(timer)
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', { send_page_view: true });
        `}
      </Script>
    </>
  )
}
