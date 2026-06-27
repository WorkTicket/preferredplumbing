'use client'

import { Phone, MapPin, Clock, Shield, Zap, MessageSquare } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import ContactForm from '@/components/ui/ContactForm'
import { StaggerChildren } from '@/components/animations'
import { PHONE, PHONE_HREF } from '@/lib/utils'
import ContactEmailList from '@/components/ui/ContactEmailList'

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
            <span className="text-xs sm:text-sm text-gray-400 flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" /> Available 24/7 for emergencies
            </span>
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <StaggerChildren className="flex flex-wrap items-center justify-center gap-4 sm:gap-6" staggerDelay={0.1} variant="fadeIn">
              {perks.map((perk) => (
                <span key={perk.text} className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-gray-500">
                  <perk.icon className="h-3.5 w-3.5 text-blue" /> {perk.text}
                </span>
              ))}
            </StaggerChildren>
          </div>
        </div>
        <div className="mt-8 sm:mt-12 grid gap-8 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-xl bg-white border border-gray-200 p-5 sm:p-6 shadow-premium-md transition-all duration-500 hover:shadow-premium-xl hover:-translate-y-0.5">
              <h3 className="font-display text-base sm:text-lg font-bold uppercase text-gray-900">Contact Info</h3>
              <div className="mt-4 space-y-3 sm:space-y-4">
                <a href={PHONE_HREF} className="flex items-center gap-3 text-gray-700 transition-all duration-300 hover:text-blue group">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue/10 transition-all duration-300 group-hover:bg-blue">
                    <Phone className="h-5 w-5 text-blue transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Phone</p>
                    <span className="font-semibold">{PHONE}</span>
                  </div>
                </a>
                <ContactEmailList />
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue/10">
                    <MapPin className="h-5 w-5 text-blue" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Location</p>
                    <span>Spirit Lake, ID 83869</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-gray-700">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue/10 shrink-0">
                    <Clock className="h-5 w-5 text-blue" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Hours</p>
                    <span>Mon–Fri 7am–5pm<br />24/7 Emergency Line</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="aspect-[4/3] overflow-hidden rounded-xl border border-gray-200 shadow-premium-md transition-all duration-500 hover:shadow-premium-xl hover:-translate-y-0.5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d171073.44739193922!2d-116.98501708359373!3d47.966799999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5361195b0b0b0b0b%3A0x0!2sSpirit%20Lake%2C%20ID%2083869!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Spirit Lake, Idaho Map"
                className="h-full w-full"
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-xl bg-white border border-gray-200 p-5 sm:p-6 shadow-premium-md transition-all duration-500 hover:shadow-premium-xl hover:-translate-y-0.5">
              <h3 className="font-display text-base sm:text-lg font-bold uppercase text-gray-900">Request a Free Quote</h3>
              <p className="mt-2 text-sm text-gray-500">
                Tell us what you need and we&apos;ll get back to you within 24 hours.
              </p>
              <div className="mt-5">
                <ContactForm />
              </div>
            </div>

            <div className="rounded-xl bg-gradient-to-br from-blue to-blue-dark p-5 sm:p-6 shadow-premium-lg text-white text-center">
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
      </div>
    </section>
  )
}
