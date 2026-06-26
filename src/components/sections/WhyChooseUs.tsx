'use client'

import { Users, Wrench, Thermometer, Handshake, Shield, Clock } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import { StaggerChildren } from '@/components/animations'

const reasons = [
  {
    icon: Users,
    title: '38+ Years of Trust',
    description: 'Ron and Hunter have been plumbing North Idaho since 1987. They work on-site alongside the crew every day.',
  },
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Fully licensed, bonded, and insured. Every job meets Idaho code and passes inspection.',
  },
  {
    icon: Thermometer,
    title: 'Radiant Heating Pros',
    description: 'We specialize in in-floor radiant heat. Boilers, zone controls, retrofits. We design and build it all.',
  },
  {
    icon: Clock,
    title: 'Same-Day Service',
    description: 'Need help now? We respond fast. Most emergencies get a truck within the hour.',
  },
  {
    icon: Wrench,
    title: 'Full-Service Shop',
    description: 'New construction, kitchen remodels, bathroom remodels. We do it all in-house. No subs.',
  },
  {
    icon: Handshake,
    title: 'Owner-Operated',
    description: 'When you call, you talk to one of us. No dispatchers, no voicemail loops. Just real people.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-page">
        <div className="text-center">
          <div className="flex justify-center">
            <SectionLabel text="Why Choose Us" />
          </div>
          <h2 className="font-display text-[clamp(2rem,7vw,3rem)] font-black uppercase text-gray-900 leading-[0.95]">
            Why North Idaho<br />
            <span className="text-blue">Chooses Preferred</span>
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            We&apos;re not the biggest outfit in North Idaho. We just show up, work hard, and treat people right.
          </p>
        </div>
        <StaggerChildren
          className="mt-8 sm:mt-12 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.06}
          variant="fadeUp"
        >
          {reasons.map((reason) => (
            <div key={reason.title} className="group rounded-xl bg-white border border-gray-200 p-5 sm:p-6 card-lift hover:border-blue/20 hover:ring-1 hover:ring-blue/20 shadow-premium">
              <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-blue/10 text-blue transition-all duration-300 group-hover:bg-blue group-hover:text-white group-hover:shadow-premium-md">
                <reason.icon className="h-6 w-6 sm:h-7 sm:w-7 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="mt-4 sm:mt-5 font-bold text-base sm:text-lg uppercase tracking-wide text-gray-900">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
