import BrandLogo from '@/components/ui/BrandLogo'
import Link from 'next/link'
import { Phone, Mail, MapPin, Star, Shield, ChevronRight } from 'lucide-react'
import FacebookIcon from '@/components/icons/FacebookIcon'
import {
  PHONE_DISPLAY,
  PHONE_HREF,
  GBP_URL,
  FACEBOOK_URL,
  TIKTOK_URL,
  CONTACT_EMAILS,
  CITY,
  STATE,
  ZIP,
} from '@/lib/utils'
import { SHOW_GOOGLE_REVIEWS } from '@/lib/feature-flags'
import FooterSignature from '@/components/FooterSignature'
import { areas } from '@/lib/data'

const companyLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const

const popularServiceLinks = [
  { label: 'Emergency Plumbing', href: '/services/emergency' },
  { label: 'Drain Cleaning', href: '/services/drain-cleaning' },
  { label: 'Water Heaters', href: '/services/water-heaters' },
  { label: 'Sewer Lines', href: '/services/sewer-line' },
] as const

const guideLinks = [
  { label: 'Plumber Cost in Spirit Lake', href: '/blog/plumber-cost-spirit-lake-idaho' },
  { label: 'Radiant Heat Cost in North Idaho', href: '/blog/radiant-heat-cost-north-idaho' },
  { label: 'Heated Driveway Cost', href: '/blog/heated-driveway-cost-north-idaho' },
  { label: 'Water Heater Repair or Replace', href: '/blog/water-heater-repair-or-replace' },
] as const

const resourceLinks = [
  { label: 'Blog', href: '/blog' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Service Areas', href: '/areas-we-serve' },
  { label: 'All Services', href: '/services' },
] as const

function FooterEmail({ email }: { email: string }) {
  const at = email.lastIndexOf('@')
  const local = at >= 0 ? email.slice(0, at + 1) : email
  const domain = at >= 0 ? email.slice(at + 1) : ''

  return (
    <a
      href={`mailto:${email}`}
      className="flex items-start gap-2.5 text-sm text-gray-400 transition-colors hover:text-white"
    >
      <Mail size={15} className="mt-0.5 shrink-0 text-blue-light" />
      <span className="min-w-0 leading-snug">
        {local}
        {domain ? (
          <>
            <wbr />
            <span className="whitespace-nowrap">{domain}</span>
          </>
        ) : null}
      </span>
    </a>
  )
}

function FooterNav({
  title,
  links,
}: {
  title: string
  links: readonly { label: string; href: string }[]
}) {
  return (
    <nav aria-label={title}>
      <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-white">
        {title}
      </p>
      <ul className="mt-2.5 space-y-1.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-gray-300">
      <div className="h-[2px] bg-gradient-to-r from-blue-dark via-blue-light to-blue" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.045] mix-blend-overlay" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")" }} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_10%_0%,rgba(0,102,255,0.16),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="grid grid-cols-2 gap-x-5 gap-y-5 sm:grid-cols-3 lg:grid-cols-[minmax(0,1.1fr)_repeat(4,minmax(0,0.85fr))_minmax(16.5rem,1.4fr)] lg:gap-x-6">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <BrandLogo size={36} className="h-9 w-auto shrink-0" />
              <div>
                <p className="font-display text-base font-bold leading-tight text-white">
                  Preferred Plumbing Solutions
                </p>
                <p className="text-[0.6875rem] font-medium uppercase tracking-wider text-blue-light">
                  {CITY}, {STATE}
                </p>
              </div>
            </Link>
            <p className="mt-3 text-sm leading-snug text-gray-400">
              Family-owned plumbing for North Idaho and Eastern Washington.
            </p>
            <p className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-400">
              {SHOW_GOOGLE_REVIEWS && (
                <span className="inline-flex items-center gap-1">
                  <Star size={12} className="text-blue-light" /> 5-Star Rated
                </span>
              )}
              <span className="inline-flex items-center gap-1">
                <Shield size={12} className="text-blue-light" /> Licensed &amp; Insured
              </span>
            </p>
            <div className="mt-4 flex flex-col items-start gap-2">
              <Link
                href="/contact"
                className="inline-flex h-9 items-center gap-1 whitespace-nowrap rounded-lg bg-blue px-4 text-xs font-bold leading-none tracking-wide text-white shadow-glow transition-all hover:bg-blue-dark"
              >
                Get Free Quote
                <ChevronRight className="h-3 w-3" aria-hidden />
              </Link>
              <a
                href={PHONE_HREF}
                className="text-sm font-medium text-gray-300 underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <FooterNav title="Company" links={companyLinks} />
          <FooterNav title="Popular Services" links={popularServiceLinks} />
          <FooterNav title="Guides" links={guideLinks} />
          <FooterNav title="Resources" links={resourceLinks} />

          <div className="col-span-2 min-w-0 sm:col-span-3 lg:col-span-1">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-white">
              Contact
            </p>
            <ul className="mt-2.5 space-y-2">
              <li className="flex items-start gap-2.5 text-sm text-gray-400">
                <MapPin size={15} className="mt-0.5 shrink-0 text-blue-light" />
                <span>
                  {CITY}, {STATE} {ZIP}
                </span>
              </li>
              <li>
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-2.5 text-sm text-gray-400 transition-colors hover:text-white"
                >
                  <Phone size={15} className="shrink-0 text-blue-light" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              {CONTACT_EMAILS.map((contact) => (
                <li key={contact.email}>
                  <FooterEmail email={contact.email} />
                </li>
              ))}
              <li className="flex flex-wrap items-center gap-x-4 gap-y-1">
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-gray-400 transition-colors hover:text-white"
                >
                  <FacebookIcon size={15} className="shrink-0 text-blue-light" />
                  Facebook
                </a>
                <a
                  href={TIKTOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  TikTok
                </a>
                <a
                  href={GBP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-gray-400 transition-colors hover:text-white"
                >
                  <Star size={15} className="shrink-0 text-blue-light" />
                  Leave a Google Review
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-center text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-white">
            Service Area
          </p>
          <ul className="mt-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-gray-400">
            {areas.map((area) => (
              <li key={area.slug}>
                <Link href={`/areas/${area.slug}`} className="transition-colors hover:text-white">
                  {area.city}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/[0.08] pb-[calc(var(--mobile-cta-h)+env(safe-area-inset-bottom,0px))] md:pb-0">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-2 text-[11px] leading-4 text-gray-500 sm:justify-between sm:px-6 lg:px-8">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} Preferred Plumbing Solutions. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <Link href="/privacy-policy" className="transition-colors hover:text-gray-300">
              Privacy Policy
            </Link>
            <span className="text-white/15" aria-hidden>
              ·
            </span>
            <Link href="/terms-and-conditions" className="transition-colors hover:text-gray-300">
              Terms
            </Link>
            <span className="text-white/15" aria-hidden>
              ·
            </span>
            <FooterSignature />
          </div>
        </div>
      </div>
    </footer>
  )
}
