'use client'

import ResponsiveImage from '@/components/ui/ResponsiveImage'
import { IMAGE_SIZES } from '@/lib/image-sizes'
import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import { AnimatedCounter } from '@/components/animations'
import { Shield, CheckCircle, Heart, MapPin } from 'lucide-react'
import {
  getJobsCompleted,
  getYearsOfExperience,
  yearsExperienceLabel,
} from '@/lib/company-stats'

const values = [
  { icon: Shield, title: 'Licensed & Insured', description: 'Licensed, insured, and bonded. Every job, every time.' },
  { icon: CheckCircle, title: 'Code-Compliant', description: 'We pull permits and pass inspections on every project.' },
  { icon: Heart, title: 'Built to Last', description: 'Good materials and proper installation. Just solid work.' },
  { icon: MapPin, title: 'Community Rooted', description: 'We live here, work here, and reinvest here.' },
]

export default function AboutSection() {
  const years = getYearsOfExperience()
  const jobs = getJobsCompleted()

  return (
    <section className="section-padding bg-white relative overflow-hidden mesh-bg-warm">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 lg:order-1 mx-1 sm:mx-0">
            <div className="image-frame">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-premium-xl">
                <ResponsiveImage
                  src="/images/preferred-plumbing-service-truck.webp"
                  alt="Preferred Plumbing Solutions service truck - Spirit Lake, ID"
                  fill
                  sizes={IMAGE_SIZES.halfCol}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent" />
              </div>
            </div>
            <div className="absolute bottom-3 left-3 sm:-bottom-6 sm:-left-6 rounded-2xl border border-blue-light/20 bg-white p-3.5 sm:p-5 shadow-premium-xl">
              <p className="font-display text-3xl sm:text-4xl font-black text-blue-light">{yearsExperienceLabel()}</p>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mt-0.5">Years Exp.</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <SectionLabel text="Our Story" />
            <h2 className="section-heading">
              A Father-Son<br />
              <span className="text-blue">Plumbing Team</span>
            </h2>
            <div className="mt-6 space-y-4 text-gray-600 leading-relaxed text-[15px] sm:text-base">
              <p>
                Preferred Plumbing Solutions is a father-son shop run by Ron and Hunter Norris out of Spirit Lake.
                You get owners on the tools for new construction, radiant heat, remodels, and the repairs that
                cannot wait until next week.
              </p>
              <p>
                No call center. No handoff to a stranger. We answer the phone, show up when we say we will,
                and build systems meant to survive North Idaho winters.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6">
              {[
                { end: years, suffix: '+', label: 'Years Experience' },
                { end: jobs, suffix: '+', label: 'Projects Done' },
                { end: 16, suffix: '', label: 'Cities Served' },
                { end: 100, suffix: '%', label: 'Owner-Operated' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl border border-gray-200/80 bg-gray-50/50 p-4">
                  <p className="stat-value text-2xl sm:text-3xl">
                    <AnimatedCounter end={stat.end} suffix={stat.suffix} duration={1400} />
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 font-bold text-blue hover:text-blue-dark transition-colors"
            >
              Read Our Full Story &rarr;
            </Link>
          </div>
        </div>

        <div className="mt-16 sm:mt-20 grid gap-4 sm:gap-5 grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="group premium-card p-5 sm:p-6 text-center card-lift"
            >
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue/10 to-blue-light/10 text-blue transition-all duration-300 group-hover:from-blue group-hover:to-blue-dark group-hover:text-white">
                <value.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-sm sm:text-base font-black uppercase text-gray-900">{value.title}</h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-500 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 sm:mt-16 relative overflow-hidden rounded-2xl bg-navy-gradient p-8 sm:p-12 text-center shadow-premium-xl">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,102,255,0.14)_0%,_transparent_60%)] pointer-events-none" />
          <div className="relative">
            <p className="font-display text-2xl sm:text-3xl font-black uppercase text-white leading-tight">
              Meet the family behind the work.
            </p>
            <p className="mt-3 text-sm sm:text-base text-gray-300 max-w-lg mx-auto">
              Ron and Hunter would love to earn your trust.{' '}
              <span className="font-serif italic text-blue-light">No sales pitch. Just honest plumbing.</span>
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue px-8 py-3.5 font-bold text-white transition-all duration-300 hover:bg-blue-dark hover:shadow-glow active:scale-[0.97]"
            >
              Read Our Full Story &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
