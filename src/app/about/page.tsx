import type { Metadata } from 'next'
import ResponsiveImage from '@/components/ui/ResponsiveImage'
import { IMAGE_SIZES } from '@/lib/image-sizes'
import Link from 'next/link'
import { Phone, ChevronRight, Star, Shield, Clock, HardHat, CheckCircle, Award } from 'lucide-react'
import { generateMetadata, siteUrl } from '@/lib/seo'
import { personSchema } from '@/lib/schema'
import SectionLabel from '@/components/ui/SectionLabel'
import PageHero from '@/components/sections/PageHero'
import { PHONE_HREF, PHONE_DISPLAY } from '@/lib/utils'
import {
  combinedExperiencePhrase,
  getYearsOfExperience,
  jobsCompletedLabel,
  yearsExperienceLabel,
} from '@/lib/company-stats'

export const metadata: Metadata = generateMetadata({
  title: 'About Preferred Plumbing',
  description:
    'Meet Ron & Hunter of Preferred Plumbing Solutions. Family-owned plumbers serving Spirit Lake and North Idaho. Licensed, insured, free estimates.',
  slug: 'about',
  canonical: `${siteUrl}/about`,
})

export default function AboutPage() {
  const years = getYearsOfExperience()
  const trustStats = [
    { icon: HardHat, number: yearsExperienceLabel(), label: 'Years Experience', sub: 'Ron & Hunter combined' },
    { icon: CheckCircle, number: jobsCompletedLabel(), label: 'Projects Completed', sub: 'Across North Idaho' },
    { icon: Star, number: 'Free', label: 'Estimates', sub: 'No obligation' },
    { icon: Shield, number: 'Licensed', label: '& Insured', sub: 'ID & WA' },
  ]

  return (
    <div className="pt-14 sm:pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'About Preferred Plumbing Solutions',
            description: `Family-owned plumbing company with ${combinedExperiencePhrase()} serving Spirit Lake and North Idaho.`,
            url: `${siteUrl}/about`,
            founder: { '@type': 'Person', name: 'Ron Norris' },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            personSchema('Ron Norris', 'Founder & Master Plumber', 'Founder of Preferred Plumbing Solutions with decades of plumbing experience in Spirit Lake, Idaho. Licensed and insured plumbing contractor serving North Idaho.')
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            personSchema('Hunter Norris', 'Plumber & Operations Manager', 'Second-generation plumber at Preferred Plumbing Solutions in Spirit Lake, Idaho. Carrying forward the family tradition of quality plumbing service across North Idaho.')
          ),
        }}
      />
      <PageHero
        label="About Us"
        title={<>Meet Ron &amp; Hunter<br /><span className="text-blue-300">Your Local Plumbing Team</span></>}
        description="Family-owned and operated. We're licensed, insured, and proud to serve communities across North Idaho and Eastern Washington."
        image="/images/hero-about.webp"
        imageAlt="Preferred Plumbing Solutions service truck serving North Idaho"
        priority
      >
        <a href={PHONE_HREF} className="btn-primary-lg">
          <Phone className="h-5 w-5" /> Call {PHONE_DISPLAY}
        </a>
        <Link href="/contact" className="btn-secondary border-white/30 bg-white/10 text-white hover:bg-white/20">
          Get Free Quote <ChevronRight className="h-4 w-4" />
        </Link>
      </PageHero>

      {/* Stats */}
      <section className="section-padding bg-gray-50">
        <div className="container-page">
          <div className="grid gap-4 sm:gap-6 grid-cols-2 sm:grid-cols-4">
            {trustStats.map((stat) => (
              <div key={stat.label} className="rounded-xl bg-white border border-gray-200 p-6 text-center shadow-premium">
                <stat.icon className="h-6 w-6 text-blue mx-auto" />
                <p className="mt-2 font-display text-2xl sm:text-3xl font-black text-blue">{stat.number}</p>
                <p className="text-sm font-semibold text-gray-900">{stat.label}</p>
                <p className="text-xs text-gray-400">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-premium-lg">
              <ResponsiveImage
                src="/images/preferred-plumbing-service-truck.webp"
                alt="Preferred Plumbing Solutions service truck - licensed plumber serving Spirit Lake, Idaho"
                fill
                sizes={IMAGE_SIZES.halfCol}
              />
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Between them, Ron and Hunter have more than {years} years in the trade. The company started with
                Ron taking jobs one at a time in Spirit Lake. Today the same family crew works across North
                Idaho and into eastern Washington.
              </p>
              <p>
                Ron&apos;s rule never changed: do the job right, charge a fair price, and treat the customer
                like a neighbor. Hunter grew up on those jobsites and now runs projects with that same standard.
              </p>
              <p>
                We do new construction plumbing, radiant heat systems, water heaters,
                commercial work, kitchen and bath remodels, and emergency calls. Every one
                of our guys is licensed, insured, and takes real pride in their work.
              </p>
              <p>
                Our goal has not changed: do good work, use solid materials, and make sure it holds up.
                We keep up with new methods and code changes, but we never lose the personal touch.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-page">
          <SectionLabel text="Our Roots" />
          <h2 className="font-display text-[clamp(2rem,6vw,3rem)] font-black uppercase text-gray-900 leading-[0.95]">
            Rooted in<br />
            <span className="text-blue">Spirit Lake, Idaho</span>
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-gray-600 leading-relaxed">
            <p>
              We&apos;re locals. Spirit Lake is home, and we bring decades of plumbing
              experience to every job here. New house, bathroom remodel, or an emergency
              during business hours — we show up fast.
            </p>
            <p>
              We handle residential and commercial jobs across North Idaho and into Washington.
              Radiant heat, remodels, emergency repairs, water heaters, sewer lines. If it involves
              pipes, we do it. And we do it right.
            </p>
            <p>
              Licensed and insured in Idaho and Washington. We stand behind every job we do.
              We are proud of what we have built, and we work hard to earn your trust on every job.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 border border-green-200 px-3 py-1.5 text-xs font-semibold text-green-700">
              <CheckCircle className="h-3.5 w-3.5" /> Licensed &amp; Insured
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200 px-3 py-1.5 text-xs font-semibold text-blue-700">
              <Star className="h-3.5 w-3.5" /> Free Estimates
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200 px-3 py-1.5 text-xs font-semibold text-blue-700">
              <Award className="h-3.5 w-3.5" /> Family-Owned &amp; Operated
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200 px-3 py-1.5 text-xs font-semibold text-blue-700">
              <Clock className="h-3.5 w-3.5" /> Emergency Service
            </span>
          </div>
        </div>
      </section>

      <section className="cta-band py-8 sm:py-10">
        <div className="container-page flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-center text-lg sm:text-xl font-bold text-white sm:text-left">
            Ready to work with us? Give us a call.
          </p>
          <a
            href={PHONE_HREF}
            className="btn-primary bg-white text-blue hover:bg-blue-50 inline-flex"
          >
            <Phone className="h-5 w-5" /> {PHONE_DISPLAY}
          </a>
        </div>
      </section>
    </div>
  )
}
