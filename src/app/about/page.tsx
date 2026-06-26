import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, ChevronRight, Star, Shield, Clock, HardHat, CheckCircle, Award } from 'lucide-react'
import { generateMetadata, siteUrl } from '@/lib/seo'
import { personSchema } from '@/lib/schema'
import SectionLabel from '@/components/ui/SectionLabel'

export const metadata: Metadata = generateMetadata({
  title: 'About Us',
  description: 'Meet Ron & Hunter of Preferred Plumbing Solutions. Family-owned plumbers serving Spirit Lake and North Idaho since 1987. Licensed, insured, free estimates.',
  slug: 'about',
  canonical: `${siteUrl}/about`,
})

const trustStats = [
  { icon: HardHat, number: '38+', label: 'Years Experience', sub: 'Since 1987' },
  { icon: CheckCircle, number: '500+', label: 'Projects Completed', sub: 'Across 16 cities' },
  { icon: Star, number: 'Free', label: 'Estimates', sub: 'No obligation' },
  { icon: Shield, number: 'Licensed', label: '& Insured', sub: 'ID & WA' },
]

export default function AboutPage() {
  return (
    <div className="pt-14 sm:pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'About Preferred Plumbing Solutions',
            description: 'Family-owned plumbing company serving Spirit Lake and North Idaho since 1987.',
            url: `${siteUrl}/about`,
            founder: { '@type': 'Person', name: 'Ron Norris' },
            foundingDate: '1987',
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            personSchema('Ron Norris', 'Founder & Master Plumber', 'Founder of Preferred Plumbing Solutions with 38+ years of plumbing experience in Spirit Lake, Idaho. Licensed and insured plumbing contractor serving North Idaho since 1987.')
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
      <section className="section-padding bg-white">
        <div className="container-page">
          <SectionLabel text="About Us" />
          <h1 className="font-display text-[clamp(2.2rem,8vw,4.5rem)] font-black uppercase leading-[0.9] text-gray-900">
            Meet Ron &amp; Hunter<br />
            <span className="text-blue">Your Local Plumbing Team</span>
          </h1>
          <p className="mt-4 max-w-2xl text-gray-600">
            Family-owned and operated since 1987. We&apos;re licensed, insured, and proud to serve 16 cities across North Idaho and Eastern Washington.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a href="tel:12082903889" className="btn-primary">
              <Phone className="h-5 w-5" /> Call (208) 290-3889
            </a>
            <Link href="/contact" className="btn-secondary">
              Get Free Quote <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

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
              <Image
                src="/images/preferred-plumbing-service-truck.webp"
                alt="Preferred Plumbing Solutions service truck - licensed plumber serving Spirit Lake, Idaho since 1987"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                We&apos;ve been serving Spirit Lake and all of North Idaho for over 38 years.
                What started as one guy doing quality work has grown into a father-son business
                that covers 16 cities across two states.
              </p>
              <p>
                Ron Norris started the company with a simple rule: do the job right, charge a fair price,
                and treat every customer like family. Now Ron works alongside his son Hunter, carrying
                that same attitude forward.
              </p>
              <p>
                We do new construction plumbing, radiant heat systems, water heaters,
                commercial work, kitchen and bath remodels, and 24/7 emergency calls. Every one
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
              We&apos;re locals. Spirit Lake is home, and we&apos;ve been doing plumbing here
              since 1987. Whether you&apos;re building a new house, fixing up a bathroom, or
              dealing with a pipe that burst at 2 AM, we show up.
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
              <Award className="h-3.5 w-3.5" /> Family-Owned Since 1987
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200 px-3 py-1.5 text-xs font-semibold text-blue-700">
              <Clock className="h-3.5 w-3.5" /> 24/7 Emergency Service
            </span>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue to-blue-dark py-8 sm:py-10">
        <div className="container-page flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-center text-lg sm:text-xl font-bold text-white sm:text-left">
            Ready to work with us? Give us a call.
          </p>
          <a
            href="tel:12082903889"
            className="btn-primary bg-white text-blue hover:bg-blue-50 inline-flex"
          >
            <Phone className="h-5 w-5" /> (208) 290-3889
          </a>
        </div>
      </section>
    </div>
  )
}
