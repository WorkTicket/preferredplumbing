'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin, ChevronRight, Shield, Star, Award, HardHat } from 'lucide-react'
import { PHONE, PHONE_HREF, EMAIL } from '@/lib/utils'
import { AnimatedSection } from '@/components/animations'

const serviceLinks = [
  { href: '/services/emergency', label: 'Emergency Plumbing' },
  { href: '/services/new-construction', label: 'New Construction' },
  { href: '/services/commercial', label: 'Commercial Plumbing' },
  { href: '/services/radiant-heat', label: 'Radiant Heat' },
  { href: '/services/water-heaters', label: 'Water Heaters' },
  { href: '/services/water-softeners', label: 'Water Softeners' },
  { href: '/services/toilets-faucets', label: 'Toilets & Faucets' },
  { href: '/services/bathtubs-showers', label: 'Bathtubs & Showers' },
  { href: '/services/sewer-line', label: 'Sewer Line' },
  { href: '/services/septic-systems', label: 'Septic Systems' },
  { href: '/services/remodels', label: 'Remodels & Upgrades' },
]

const trustBadges = [
  { icon: Shield, text: 'Licensed & Insured' },
  { icon: Award, text: 'Free Estimates' },
  { icon: HardHat, text: '38+ Years Experience' },
  { icon: Star, text: 'Family-Owned Since 1987' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 pt-12 sm:pt-16 pb-24 sm:pb-12 md:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Trust Badges */}
        <div className="mb-10 pb-8 border-b border-gray-800">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {trustBadges.map((badge) => (
              <div key={badge.text} className="flex items-center justify-center sm:justify-start gap-2 text-gray-400">
                <badge.icon className="h-4 w-4 text-blue-light shrink-0" />
                <span className="text-xs sm:text-sm font-medium">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-x-16 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
          <AnimatedSection as="div" variant="fadeUp" delay={0} className="lg:col-span-1 w-full text-center lg:text-left">
            <Link href="/" className="flex flex-col lg:flex-row items-center lg:items-start gap-2">
              <img
                src="/images/preferred logo.webp"
                alt="Preferred Plumbing Solutions - Spirit Lake, ID Plumber"
                width={36}
                height={36}
                className="h-9 w-auto shrink-0"
              />
              <div className="font-display text-sm font-bold uppercase tracking-wider text-white leading-tight text-center lg:text-left">
                Preferred<br />Plumbing<br />Solutions
              </div>
            </Link>
            <p className="mt-3 text-sm text-gray-400 leading-relaxed">
              Serving North Idaho since 1987. Family-owned. Licensed &amp; insured. We cover 16 cities across Idaho and Washington.
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <a href={PHONE_HREF} className="inline-flex lg:justify-start justify-center items-center gap-2 text-sm text-gray-300 hover:text-blue-light transition-colors duration-300 font-semibold">
                <Phone className="h-4 w-4 text-blue-light" /> {PHONE}
              </a>
              <a href={`mailto:${EMAIL}`} className="inline-flex lg:justify-start justify-center items-center gap-2 text-sm text-gray-400 hover:text-blue-light transition-colors duration-300">
                <Mail className="h-4 w-4 text-blue-light" /> {EMAIL}
              </a>
              <p className="inline-flex lg:justify-start justify-center items-center gap-2 text-sm text-gray-400">
                <MapPin className="h-4 w-4 text-blue-light shrink-0" /> Spirit Lake, ID 83869
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-800">
              <h4 className="font-display text-xs font-bold uppercase tracking-wider text-blue-light mb-3 text-center lg:text-left">Get Help Now</h4>
              <p className="text-sm text-gray-400 mb-3 text-center lg:text-left">Emergency? We&apos;re available 24/7.</p>
              <a
                href={PHONE_HREF}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-blue-dark active:scale-[0.97] shadow-premium"
              >
                <Phone className="h-4 w-4" /> Call {PHONE}
              </a>
              <Link
                href="/contact"
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gray-600 px-5 py-3 text-sm font-semibold text-gray-300 transition-all duration-300 hover:bg-gray-800 active:scale-[0.97]"
              >
                Get Free Quote
              </Link>
            </div>
          </AnimatedSection>

            <AnimatedSection as="div" variant="fadeUp" delay={0.1} className="w-full text-center lg:text-left">
            <h4 className="font-bold text-xs uppercase tracking-wider text-blue-light mb-4">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="group text-sm text-gray-400 transition-all duration-300 hover:text-blue-light inline-flex items-center gap-1">
                    <ChevronRight className="h-3 w-3 text-blue-light/50 transition-all duration-300 group-hover:translate-x-0.5" /> <span className="link-underline">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/services" className="mt-3 inline-flex text-xs font-semibold text-blue-light hover:text-blue transition-colors duration-300">
              View All Services &rarr;
            </Link>
          </AnimatedSection>

          <AnimatedSection as="div" variant="fadeUp" delay={0.2} className="w-full text-center lg:text-left">
            <h4 className="font-bold text-xs uppercase tracking-wider text-blue-light mb-4">Service Areas</h4>
            <ul className="space-y-2.5">
              <li><Link href="/areas/spirit-lake-id" className="group text-sm text-gray-400 transition-all duration-300 hover:text-blue-light"><span className="link-underline">Spirit Lake, ID</span></Link></li>
              <li><Link href="/areas/coeur-dalene-id" className="group text-sm text-gray-400 transition-all duration-300 hover:text-blue-light"><span className="link-underline">Coeur d&apos;Alene, ID</span></Link></li>
              <li><Link href="/areas/post-falls-id" className="group text-sm text-gray-400 transition-all duration-300 hover:text-blue-light"><span className="link-underline">Post Falls, ID</span></Link></li>
              <li><Link href="/areas/sandpoint-id" className="group text-sm text-gray-400 transition-all duration-300 hover:text-blue-light"><span className="link-underline">Sandpoint, ID</span></Link></li>
              <li><Link href="/areas/hayden-id" className="group text-sm text-gray-400 transition-all duration-300 hover:text-blue-light"><span className="link-underline">Hayden, ID</span></Link></li>
              <li><Link href="/areas/rathdrum-id" className="group text-sm text-gray-400 transition-all duration-300 hover:text-blue-light"><span className="link-underline">Rathdrum, ID</span></Link></li>
              <li><Link href="/areas/newport-wa" className="group text-sm text-gray-400 transition-all duration-300 hover:text-blue-light"><span className="link-underline">Newport, WA</span></Link></li>
              <li><Link href="/areas-we-serve" className="text-xs font-semibold text-blue-light hover:text-blue mt-1 inline-block">View All Areas &rarr;</Link></li>
            </ul>
          </AnimatedSection>

          <AnimatedSection as="div" variant="fadeUp" delay={0.3} className="w-full text-center lg:text-left">
            <h4 className="font-bold text-xs uppercase tracking-wider text-blue-light mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              <li><Link href="/about" className="group text-sm text-gray-400 transition-all duration-300 hover:text-blue-light"><span className="link-underline">About Us</span></Link></li>
              <li><Link href="/gallery" className="group text-sm text-gray-400 transition-all duration-300 hover:text-blue-light"><span className="link-underline">Project Gallery</span></Link></li>
              <li><Link href="/portfolio" className="group text-sm text-gray-400 transition-all duration-300 hover:text-blue-light"><span className="link-underline">Portfolio</span></Link></li>
              <li><Link href="/faqs" className="group text-sm text-gray-400 transition-all duration-300 hover:text-blue-light"><span className="link-underline">FAQs</span></Link></li>
              <li><Link href="/blog" className="group text-sm text-gray-400 transition-all duration-300 hover:text-blue-light"><span className="link-underline">Blog</span></Link></li>
              <li><Link href="/areas-we-serve" className="group text-sm text-gray-400 transition-all duration-300 hover:text-blue-light"><span className="link-underline">Service Areas</span></Link></li>
              <li><Link href="/contact" className="group text-sm text-gray-400 transition-all duration-300 hover:text-blue-light"><span className="link-underline">Contact Us</span></Link></li>
              <li><Link href="/privacy-policy" className="group text-sm text-gray-400 transition-all duration-300 hover:text-blue-light"><span className="link-underline">Privacy Policy</span></Link></li>
            </ul>
          </AnimatedSection>
        </div>

        <div className="mt-10 sm:mt-12 border-t border-gray-800 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Preferred Plumbing Solutions. All rights reserved. | Licensed & Insured in Idaho &amp; Washington | Family-Owned Since 1987
          </p>
          <p className="mt-2 text-xs text-gray-600">
            Spirit Lake, ID 83869 | 24/7 Emergency Service Available
          </p>
        </div>
      </div>
    </footer>
  )
}
