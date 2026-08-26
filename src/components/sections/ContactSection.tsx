'use client'

import dynamic from 'next/dynamic'
import { Phone, CheckCircle, Clock, MessageSquare } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import { PHONE, PHONE_HREF } from '@/lib/utils'

const ContactForm = dynamic(() => import('@/components/ui/ContactForm'))

const perks = [
  { icon: CheckCircle, text: 'Free estimates, no obligation' },
  { icon: Clock, text: 'Same-day service available' },
  { icon: MessageSquare, text: 'We respond within 24 hours' },
]

export default function ContactSection() {
  return (
    <section className="section-padding bg-gray-50 relative overflow-hidden mesh-bg-light" id="contact">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-navy/10" />
      <div className="container-page relative z-10">
        <div className="max-w-2xl">
          <SectionLabel text="Get In Touch" />
          <h2 className="section-heading">
            Ready to Start?<br />
            <span className="text-blue">Get Your Free Estimate</span>
          </h2>
          <p className="section-subtitle mt-4">
            No pressure, no pushy sales. Just honest advice and a fair price.
          </p>
        </div>

        <div className="mt-8 sm:mt-10 grid gap-8 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <div className="order-1 lg:order-2 premium-card p-5 sm:p-8 shadow-premium-xl">
            <h3 className="font-display text-lg sm:text-xl font-black uppercase text-gray-900">Request a Free Quote</h3>
            <p className="mt-2 text-sm text-gray-500">
              Tell us what you need and we&apos;ll get back to you within 24 hours.
            </p>
            <div className="mt-5 sm:mt-6">
              <ContactForm formLocation="homepage" />
            </div>
          </div>

          <div className="order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-4">
              {perks.map((perk) => (
                <div key={perk.text} className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue/10 text-blue">
                    <perk.icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm sm:text-base font-medium text-gray-600">{perk.text}</span>
                </div>
              ))}
            </div>

            <a
              href={PHONE_HREF}
              className="mt-6 sm:mt-8 inline-flex w-full sm:w-auto items-center gap-3 rounded-2xl bg-blue px-6 sm:px-7 py-4 font-bold text-white transition-all duration-300 hover:bg-blue-dark hover:shadow-premium-xl active:scale-[0.97] shadow-premium-lg"
            >
              <Phone className="h-5 w-5" />
              <div className="text-left">
                <p className="text-xs text-blue-100 font-medium">Call us directly</p>
                <p className="text-lg">{PHONE}</p>
              </div>
            </a>
            <p className="mt-3 text-xs sm:text-sm text-gray-400">
              Emergency service Sun–Fri 7am–5pm
            </p>

            <div className="mt-6 sm:mt-8 premium-card-dark p-5 sm:p-7">
              <p className="font-display text-lg font-black uppercase text-white">Need Help Now?</p>
              <p className="mt-2 text-sm text-gray-300">Plumbing emergency across North Idaho? Call us during business hours.</p>
              <a
                href={PHONE_HREF}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue px-6 py-3.5 font-bold text-white transition-all duration-300 hover:bg-blue-dark active:scale-[0.97]"
              >
                <Phone className="h-4 w-4" /> Emergency Line
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
