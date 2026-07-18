'use client'

import SectionLabel from '@/components/ui/SectionLabel'
import { StaggerChildren } from '@/components/animations'
import { Shield, Flame, Clock, Wrench, Users, Award } from 'lucide-react'

const reasons = [
  {
    icon: Award,
    title: '38+ Years in the Trade',
    description: 'We work on-site alongside the crew every day, not behind a desk.',
  },
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Fully licensed, bonded, and insured. Every job meets Idaho code and passes inspection.',
  },
  {
    icon: Flame,
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
    icon: Users,
    title: 'Owner-Operated',
    description: 'When you call, you talk to one of us. No dispatchers, no voicemail loops. Just real people.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-gray-50 relative overflow-hidden mesh-bg-light">
      <div className="container-page relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <SectionLabel text="Why Choose Us" centered />
          <h2 className="section-heading">
            Why North Idaho<br />
            <span className="text-blue">Chooses Preferred</span>
          </h2>
          <p className="section-subtitle-center">
            We&apos;re not the biggest outfit in North Idaho. We just show up, work hard, and treat people right.
          </p>
        </div>

        <StaggerChildren
          className="mt-12 sm:mt-14 grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.06}
          variant="fadeUp"
        >
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="group premium-card card-lift flex h-full flex-col"
            >
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue/10 to-blue-light/10 text-blue transition-colors duration-300 group-hover:from-blue group-hover:to-blue-dark group-hover:text-white">
                  <reason.icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <h3 className="mt-5 font-display text-lg font-black uppercase tracking-wide text-gray-900 leading-tight">
                  {reason.title}
                </h3>
                <p className="mt-2.5 flex-1 text-sm sm:text-[15px] text-gray-500 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </article>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
