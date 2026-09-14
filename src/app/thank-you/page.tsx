import Link from 'next/link'
import type { Metadata } from 'next'
import { CheckCircle, Phone, Clock } from 'lucide-react'
import TrackPageEvent from '@/components/analytics/TrackPageEvent'
import { generateMetadata } from '@/lib/seo'
import { PHONE_HREF, PHONE_DISPLAY } from '@/lib/utils'

export const metadata: Metadata = generateMetadata({
  title: 'Thank You',
  description:
    'Your quote request was submitted successfully. Preferred Plumbing Solutions will get back to you within 24 hours.',
  slug: 'thank-you',
  noIndex: true,
})

export default function ThankYouPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 pt-site-header text-center mesh-bg-light">
      <TrackPageEvent event="thank_you_lead" />
      <div className="premium-card w-full max-w-lg px-6 py-12 sm:px-10 sm:py-14">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 sm:h-20 sm:w-20">
          <CheckCircle className="h-10 w-10 text-green-500 sm:h-12 sm:w-12" />
        </div>
        <h1 className="mt-6 font-display text-3xl font-black uppercase text-gray-900 sm:text-4xl">
          Thank You!
        </h1>
        <p className="mt-4 max-w-md text-sm text-gray-600 sm:text-base">
          Your quote request has been sent successfully. We&apos;ll review your project details and get back to you within 24 hours.
        </p>
        <div className="mt-4 flex items-center gap-2 rounded-lg bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-600">
          <Clock className="h-4 w-4" />
          Need help now? Call our emergency line during business hours (Sun–Fri 7am–5pm).
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a href={PHONE_HREF} className="btn-primary">
            <Phone className="h-5 w-5" /> Call {PHONE_DISPLAY}
          </a>
          <Link href="/" className="btn-secondary">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
