'use client'

import dynamic from 'next/dynamic'

const FloatingActionButton = dynamic(() => import('./FloatingActionButton'), {
  ssr: false,
})
const AnalyticsTracker = dynamic(() => import('./AnalyticsTracker'), { ssr: false })
const CookieConsentBanner = dynamic(() => import('./CookieConsentBanner'), {
  ssr: false,
})

/** Below-fold / consent chrome — keep it out of the SSR + initial JS path. */
export default function DeferredChrome() {
  return (
    <>
      <FloatingActionButton />
      <AnalyticsTracker />
      <CookieConsentBanner />
    </>
  )
}
