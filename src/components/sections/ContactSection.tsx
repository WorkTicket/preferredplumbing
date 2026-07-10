'use client'

import dynamic from 'next/dynamic'
import { Phone, Shield, Zap, MessageSquare } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import { PHONE, PHONE_HREF } from '@/lib/utils'

const ContactForm = dynamic(() => import('@/components/ui/ContactForm'))

const perks = [
  { icon: Shield, text: 'Free estimates, no obligation' },
  { icon: Zap, text: 'Same-day service available' },
  { icon: MessageSquare, text: 'We respond within 24 hours' },
]

export default function ContactSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" id="contact">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent pointer-events-none" />
      <div className="container-page relative z-10">
        <div className="text-center">
          <div className="flex justify-center">
            <SectionLabel text="Get In Touch" />
          </div>
          <h2 className="font-display text-[clamp(2rem,7vw,3rem)] font-black uppercase text-gray-900 leading-[0.95]">
            Ready to Start?<br />
            <span className="text-blue">Get Your Free Estimate</span>
          </h2>
          <p className="mt-3 text-gray-500 max-w-lg mx-auto">
            No pressure, no pushy sales. Just honest advice and a fair price.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 rounded-xl bg-blue px-6 py-3.5 font-bold text-white transition-all duration-300 hover:bg-blue-dark hover:shadow-premium-lg active:scale-[0.97] shadow-premium-md"
            >
              <Phone className="h-5 w-5" /> Call {PHONE}
            </a>
            <span className="text-xs sm:text-sm text-gray-400">
              Available 24/7 for emergencies
            </span>
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {perks.map((perk) => (
              <span key={perk.text} className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-gray-500">
                <perk.icon className="h-3.5 w-3.5 text-blue" /> {perk.text}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 sm:mt-12 max-w-2xl mx-auto">
          <div className="rounded-xl bg-white border border-gray-200 p-5 sm:p-6 shadow-premium-md transition-all duration-500 hover:shadow-premium-xl">
            <h3 className="font-display text-base sm:text-lg font-bold uppercase text-gray-900">Request a Free Quote</h3>
            <p className="mt-2 text-sm text-gray-500">
              Tell us what you need and we&apos;ll get back to you within 24 hours.
            </p>
            <div className="mt-5">
              <ContactForm />
            </div>
          </div>

          <div className="mt-6 rounded-xl bg-gradient-to-br from-blue to-blue-dark p-5 sm:p-6 shadow-premium-lg text-white text-center">
            <p className="text-lg sm:text-xl font-bold">Need Help Now?</p>
            <p className="mt-1 text-sm text-blue-200">We&apos;re standing by for emergencies</p>
            <a
              href={PHONE_HREF}
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-blue-dark transition-all duration-300 hover:bg-blue-50 active:scale-[0.97] shadow-premium-md"
            >
              <Phone className="h-4 w-4" /> Call {PHONE}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
