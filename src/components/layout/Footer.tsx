import ResponsiveImage from '@/components/ui/ResponsiveImage'
import Link from 'next/link'
import { Phone, MapPin, ChevronRight, Shield, Star, Award, HardHat, ExternalLink } from 'lucide-react'
import { PHONE, PHONE_HREF, GBP_URL, TIKTOK_URL, BUSINESS_HOURS } from '@/lib/utils'
import ContactEmailList from '@/components/ui/ContactEmailList'
import FooterSignature from '@/components/FooterSignature'
import { getNavServiceGroups, SERVICE_NAV_LABELS } from '@/lib/nav-services'

const trustStats = [
  { value: '38+', label: 'Years Experience' },
  { value: '500+', label: 'Jobs Completed' },
  { value: '16', label: 'Cities Served' },
  { value: '5★', label: 'Google Rating' },
]

const trustBadges = [
  { icon: Shield, text: 'Licensed & Insured' },
  { icon: Award, text: 'Free Estimates' },
  { icon: HardHat, text: '38+ Years Experience' },
  { icon: Star, text: 'Family-Owned & Operated' },
]

export default function Footer() {
  const serviceGroups = getNavServiceGroups()

  return (
    <footer className="relative bg-navy-gradient pt-14 sm:pt-20 pb-24 sm:pb-12 md:pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(0,102,255,0.12)_0%,_transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(0,78,204,0.1)_0%,_transparent_50%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 pb-10 border-b border-white/10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {trustStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-3xl sm:text-4xl font-black text-blue-light">{stat.value}</p>
                <p className="mt-1.5 text-xs sm:text-sm text-gray-400 font-medium uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12 pb-10 border-b border-white/10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {trustBadges.map((badge) => (
              <div key={badge.text} className="flex items-center justify-center sm:justify-start gap-2.5 text-gray-400">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10">
                  <badge.icon className="h-4 w-4 text-blue-light shrink-0" />
                </div>
                <span className="text-xs sm:text-sm font-medium">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-x-16 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1 w-full text-center lg:text-left">
            <Link href="/" className="flex flex-col lg:flex-row items-center lg:items-start gap-3">
              <ResponsiveImage
                src="/images/preferred logo.webp"
                alt="Preferred Plumbing Solutions - Spirit Lake, ID Plumber"
                width={40}
                height={40}
                className="h-10 w-auto shrink-0"
                sizes="80px"
              />
              <div className="font-display text-sm font-bold uppercase tracking-wider text-white leading-tight text-center lg:text-left">
                Preferred<br />Plumbing<br />Solutions
              </div>
            </Link>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Family-owned. Licensed &amp; insured. We cover North Idaho and Eastern Washington.
            </p>
            <div className="mt-5 flex flex-col gap-2.5">
              <a href={PHONE_HREF} className="inline-flex lg:justify-start justify-center items-center gap-2 text-sm text-gray-300 hover:text-blue-light transition-colors duration-300 font-semibold">
                <Phone className="h-4 w-4 text-blue-light" /> {PHONE}
              </a>
              <ContactEmailList variant="footer" />
              <p className="inline-flex lg:justify-start justify-center items-center gap-2 text-sm text-gray-400">
                <MapPin className="h-4 w-4 text-blue-light shrink-0" /> Spirit Lake, ID 83869
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <a
                href={GBP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-semibold text-gray-300 transition-all hover:border-blue-light/30 hover:text-white hover:bg-white/10"
              >
                <Star className="h-3.5 w-3.5 text-blue-light" /> Google Business
              </a>
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-semibold text-gray-300 transition-all hover:border-blue-light/30 hover:text-white hover:bg-white/10"
              >
                TikTok
                <ExternalLink className="h-3 w-3 text-gray-500" />
              </a>
              <a
                href={GBP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-semibold text-gray-300 transition-all hover:border-blue-light/30 hover:text-white hover:bg-white/10"
              >
                Leave a Review
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <h4 className="font-display text-xs font-bold uppercase tracking-wider text-blue-light mb-3 text-center lg:text-left">Get Help Now</h4>
              <p className="text-sm text-gray-400 mb-4 text-center lg:text-left">Emergency? Call during business hours ({BUSINESS_HOURS.short}).</p>
              <a
                href={PHONE_HREF}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue px-5 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-blue-dark active:scale-[0.97] shadow-premium-lg"
              >
                <Phone className="h-4 w-4" /> Call {PHONE}
              </a>
              <Link
                href="/contact"
                className="mt-2.5 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-3.5 text-sm font-semibold text-gray-300 transition-all duration-300 hover:bg-white/5 hover:border-blue-light/30 active:scale-[0.97]"
              >
                Get Free Quote
              </Link>
            </div>
          </div>

          <div className="w-full text-center lg:text-left">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-blue-light mb-5">Services</h4>
            <div className="space-y-5">
              {serviceGroups.map((group) => (
                <div key={group.id}>
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-gray-500">
                    {group.label}
                  </p>
                  <ul className="space-y-2">
                    {group.services.map((service) => {
                      const label = SERVICE_NAV_LABELS[service.slug] ?? service.title
                      return (
                        <li key={service.slug}>
                          <Link
                            href={`/services/${service.slug}`}
                            className="group text-sm text-gray-400 transition-all duration-300 hover:text-white inline-flex items-center gap-1"
                          >
                            <ChevronRight className="h-3 w-3 text-blue-light/50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-blue-light" />
                            <span className="link-underline">{label}</span>
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              ))}
            </div>
            <Link href="/services" className="mt-4 inline-flex text-xs font-semibold text-blue-light hover:text-blue-light transition-colors duration-300">
              View All Services &rarr;
            </Link>
          </div>

          <div className="w-full text-center lg:text-left">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-blue-light mb-5">Service Areas</h4>
            <ul className="space-y-2.5">
              <li><Link href="/areas/spirit-lake-id" className="group text-sm text-gray-400 transition-all duration-300 hover:text-white"><span className="link-underline">Spirit Lake, ID</span></Link></li>
              <li><Link href="/areas/coeur-dalene-id" className="group text-sm text-gray-400 transition-all duration-300 hover:text-white"><span className="link-underline">Coeur d&apos;Alene, ID</span></Link></li>
              <li><Link href="/areas/post-falls-id" className="group text-sm text-gray-400 transition-all duration-300 hover:text-white"><span className="link-underline">Post Falls, ID</span></Link></li>
              <li><Link href="/areas/sandpoint-id" className="group text-sm text-gray-400 transition-all duration-300 hover:text-white"><span className="link-underline">Sandpoint, ID</span></Link></li>
              <li><Link href="/areas/hayden-id" className="group text-sm text-gray-400 transition-all duration-300 hover:text-white"><span className="link-underline">Hayden, ID</span></Link></li>
              <li><Link href="/areas/rathdrum-id" className="group text-sm text-gray-400 transition-all duration-300 hover:text-white"><span className="link-underline">Rathdrum, ID</span></Link></li>
              <li><Link href="/areas/newport-wa" className="group text-sm text-gray-400 transition-all duration-300 hover:text-white"><span className="link-underline">Newport, WA</span></Link></li>
              <li><Link href="/areas-we-serve" className="text-xs font-semibold text-blue-light hover:text-blue-light mt-1 inline-block">View All Areas &rarr;</Link></li>
            </ul>
          </div>

          <div className="w-full text-center lg:text-left">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-blue-light mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              <li><Link href="/about" className="group text-sm text-gray-400 transition-all duration-300 hover:text-white"><span className="link-underline">About Us</span></Link></li>
              <li><Link href="/gallery" className="group text-sm text-gray-400 transition-all duration-300 hover:text-white"><span className="link-underline">Project Gallery</span></Link></li>
              <li><Link href="/faqs" className="group text-sm text-gray-400 transition-all duration-300 hover:text-white"><span className="link-underline">FAQs</span></Link></li>
              <li><Link href="/blog" className="group text-sm text-gray-400 transition-all duration-300 hover:text-white"><span className="link-underline">Blog</span></Link></li>
              <li><Link href="/areas-we-serve" className="group text-sm text-gray-400 transition-all duration-300 hover:text-white"><span className="link-underline">Service Areas</span></Link></li>
              <li><Link href="/contact" className="group text-sm text-gray-400 transition-all duration-300 hover:text-white"><span className="link-underline">Contact Us</span></Link></li>
              <li><Link href="/privacy-policy" className="group text-sm text-gray-400 transition-all duration-300 hover:text-white"><span className="link-underline">Privacy Policy</span></Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 border-t border-white/10 pt-8 text-center">
          <p className="text-xs sm:text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Preferred Plumbing Solutions. All rights reserved. | Licensed & Insured in Idaho &amp; Washington | Family-Owned &amp; Operated
          </p>
          <p className="mt-2 text-xs text-gray-600">
            Spirit Lake, ID 83869 | Emergency Service · {BUSINESS_HOURS.short}
          </p>
          <FooterSignature />
        </div>
      </div>
    </footer>
  )
}
