import SectionLabel from '@/components/ui/SectionLabel'
import { StaggerChildren } from '@/components/animations'
import { Check } from 'lucide-react'
import { yearsInTradeTitle } from '@/lib/company-stats'

export default function WhyChooseUs() {
  const reasons = [
    {
      title: yearsInTradeTitle(),
      description: 'We work on-site alongside the crew every day, not behind a desk.',
    },
    {
      title: 'Licensed & Insured',
      description: 'Fully licensed, bonded, and insured. Every job meets Idaho code and passes inspection.',
    },
    {
      title: 'Radiant Heating Pros',
      description: 'We specialize in in-floor radiant heat. Boilers, zone controls, retrofits. We design and build it all.',
    },
    {
      title: 'Same-Day Service',
      description: 'Need help during business hours (Sun–Fri 7am–5pm)? We respond fast. Most emergencies get a truck within the hour.',
    },
    {
      title: 'Full-Service Shop',
      description: 'New construction, kitchen remodels, bathroom remodels. We do it all in-house. No subs.',
    },
    {
      title: 'Owner-Operated',
      description: 'When you call, you talk to one of us. No dispatchers, no voicemail loops. Just real people.',
    },
  ]

  return (
    <section className="section-padding bg-gray-50 relative overflow-hidden mesh-bg-light">
      <div className="container-page relative z-10">
        <div className="max-w-3xl">
          <SectionLabel text="Why Choose Us" />
          <h2 className="section-heading">
            Why North Idaho<br />
            <span className="text-blue">Chooses Preferred</span>
          </h2>
          <p className="section-subtitle mt-4">
            We&apos;re not the biggest outfit in North Idaho. We just show up, work hard, and treat people right.
          </p>
        </div>

        <StaggerChildren
          className="mt-10 sm:mt-12 grid gap-x-12 gap-y-6 sm:gap-y-8 grid-cols-1 md:grid-cols-2 max-w-5xl"
          staggerDelay={0.05}
          variant="fadeUp"
        >
          {reasons.map((reason) => (
            <div key={reason.title} className="flex gap-3 sm:gap-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue text-white">
                <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden />
              </span>
              <div>
                <h3 className="font-display text-base sm:text-lg font-black uppercase tracking-wide text-gray-900 leading-tight">
                  {reason.title}
                </h3>
                <p className="mt-1.5 text-sm sm:text-[15px] text-gray-500 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
