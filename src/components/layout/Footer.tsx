import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, MapPin, Star, Shield, ChevronRight, Facebook } from 'lucide-react'
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
import { jobsCompletedLabel, yearsExperienceLabel } from '@/lib/company-stats'
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
  { label: 'Water Heater Repair or Replace', href: '/blog/water-heater-repair-or-replace' },
  { label: 'Sewer Repair vs Replacement', href: '/blog/sewer-repair-vs-replacement-north-idaho' },
  { label: 'Drain Cleaning Cost', href: '/blog/drain-cleaning-cost-north-idaho' },
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
    <footer className="bg-navy pb-[calc(var(--mobile-cta-h)+env(safe-area-inset-bottom,0px))] text-gray-300 md:pb-0">
      <div className="h-1 bg-blue" />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-x-5 gap-y-5 sm:grid-cols-3 lg:grid-cols-[minmax(0,1.1fr)_repeat(4,minmax(0,0.85fr))_minmax(16.5rem,1.4fr)] lg:gap-x-6">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/images/preferred-logo.webp"
                alt="Preferred Plumbing Solutions logo"
                width={36}
                height={36}
                className="h-9 w-auto shrink-0"
              />
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
                className="inline-flex h-8 items-center gap-1 whitespace-nowrap rounded-md bg-blue px-3 text-[0.6875rem] font-semibold leading-none tracking-wide text-white transition-colors hover:bg-blue-dark"
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
                  <Facebook size={15} className="shrink-0 text-blue-light" />
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
                {SHOW_GOOGLE_REVIEWS && (
                  <a
                    href={GBP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    <Star size={15} className="shrink-0 text-blue-light" />
                    Google
                  </a>
                )}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 border-t border-white/10 pt-4">
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-white">
              Service Area
            </p>
            <ul className="flex flex-wrap items-center text-sm text-gray-400">
              {areas.map((area, index) => (
                <li key={area.slug} className="inline-flex items-center">
                  {index > 0 && (
                    <span className="px-1.5 text-white/20" aria-hidden>
                      ·
                    </span>
                  )}
                  <Link href={`/areas/${area.slug}`} className="transition-colors hover:text-white">
                    {area.city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-3 flex flex-col gap-2 text-xs text-gray-400 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
            <p>
              &copy; {new Date().getFullYear()} Preferred Plumbing Solutions. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span>{jobsCompletedLabel()} Jobs</span>
              <span className="text-white/20" aria-hidden>
                ·
              </span>
              <span>{yearsExperienceLabel()} Years</span>
              {SHOW_GOOGLE_REVIEWS && (
                <>
                  <span className="text-white/20" aria-hidden>
                    ·
                  </span>
                  <span>5.0 Average Rating</span>
                </>
              )}
              <span className="text-white/20" aria-hidden>
                ·
              </span>
              <span>Licensed &amp; Insured</span>
              <span className="text-white/20" aria-hidden>
                ·
              </span>
              <span>Idaho &amp; Washington</span>
              <span className="text-white/20" aria-hidden>
                ·
              </span>
              <Link href="/privacy-policy" className="transition-colors hover:text-white">
                Privacy Policy
              </Link>
              <span className="text-white/20" aria-hidden>
                ·
              </span>
              <Link href="/terms-and-conditions" className="transition-colors hover:text-white">
                Terms
              </Link>
              <span className="text-white/20" aria-hidden>
                ·
              </span>
              <FooterSignature />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
