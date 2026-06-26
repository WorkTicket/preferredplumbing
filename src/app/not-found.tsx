import type { Metadata } from 'next'
import Link from 'next/link'
import { Home, Phone } from 'lucide-react'
import { generateMetadata } from '@/lib/seo'

export const metadata: Metadata = generateMetadata({
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist or has been moved. Contact Preferred Plumbing Solutions at 208-290-3889.',
  slug: '404',
  noIndex: true,
})

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center bg-white">
      <p className="font-display text-8xl sm:text-9xl font-black text-blue">404</p>
      <h1 className="mt-4 font-display text-2xl sm:text-3xl font-black uppercase text-gray-900">
        Page Not Found
      </h1>
      <p className="mt-2 text-gray-500">That page doesn&apos;t exist or was moved.</p>
      <p className="mt-1 text-sm text-gray-400">
        Need plumbing help? We&apos;re just a phone call away.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <Link
          href="/"
          className="btn-primary"
        >
          <Home className="h-5 w-5" /> Back to Home
        </Link>
        <a
          href="tel:12082903889"
          className="btn-secondary"
        >
          <Phone className="h-5 w-5" /> Call (208) 290-3889
        </a>
      </div>
    </div>
  )
}
