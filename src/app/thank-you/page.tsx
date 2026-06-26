import Link from 'next/link'
import type { Metadata } from 'next'
import { CheckCircle, Phone, ChevronRight, Clock } from 'lucide-react'
import { siteUrl } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Thank You | Preferred Plumbing Solutions',
  description: 'Your quote request has been submitted successfully. We will get back to you within 24 hours.',
  robots: { index: false, follow: false },
}

export default function ThankYouPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center pt-14 sm:pt-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-green-100 animate-bounce">
        <CheckCircle className="h-10 w-10 sm:h-12 sm:w-12 text-green-500" />
      </div>
      <h1 className="mt-6 font-display text-3xl sm:text-4xl font-black uppercase text-gray-900">
        Thank You!
      </h1>
      <p className="mt-4 max-w-md text-gray-600 text-sm sm:text-base">
        Your quote request has been sent successfully. We&apos;ll review your project details and get back to you within 24 hours.
      </p>
      <div className="mt-4 flex items-center gap-2 text-amber-600 bg-amber-50 rounded-lg px-4 py-2 text-sm font-semibold">
        <Clock className="h-4 w-4" />
        Need help now? Call our 24/7 emergency line.
      </div>
      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <a
          href="tel:12082903889"
          className="btn-primary"
        >
          <Phone className="h-5 w-5" /> Call (208) 290-3889
        </a>
        <Link
          href="/"
          className="btn-secondary"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
