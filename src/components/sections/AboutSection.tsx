'use client'

import Image from 'next/image'
import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import { AnimatedCounter } from '@/components/animations'
import { Shield, CheckCircle, Star, Heart } from 'lucide-react'

const values = [
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Licensed, insured, and bonded. Every job, every time.',
  },
  {
    icon: CheckCircle,
    title: 'Code-Compliant',
    description: 'We pull permits and pass inspections on every project.',
  },
  {
    icon: Star,
    title: 'Built to Last',
    description: 'Good materials and proper installation. Just solid work.',
  },
  {
    icon: Heart,
    title: 'Community Rooted',
    description: 'We live here, work here, and reinvest here.',
  },
]

export default function AboutSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-page">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative">
            <SectionLabel text="Our Story" />
            <h2 className="font-display text-[clamp(2rem,7vw,3rem)] font-black uppercase text-gray-900 leading-[0.95]">
              Family-Owned Since<br />
              <span className="text-blue">1987</span>
            </h2>
            <div className="mt-5 space-y-4 text-gray-600 leading-relaxed">
              <p>
                Preferred Plumbing Solutions is owned by Ron and his son Hunter. Together they have 38+ years
                in the trade doing new construction, residential and commercial plumbing, remodels, and radiant heating.
              </p>
              <p>
                Ron started this business with a simple goal: do good work for a fair price. That hasn&apos;t changed.
                We still answer our own phone, show up on time, and build things to last.
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-x-8 gap-y-2">
              <div>
                <p className="font-display text-2xl font-bold text-blue">
                  <AnimatedCounter end={38} suffix="+" duration={1400} />
                </p>
                <p className="text-xs text-gray-400">Years Experience</p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-blue">
                  <AnimatedCounter end={500} suffix="+" duration={1400} />
                </p>
                <p className="text-xs text-gray-400">Projects Done</p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-blue">
                  <AnimatedCounter end={16} duration={1200} />
                </p>
                <p className="text-xs text-gray-400">Cities Served</p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-blue">
                  <AnimatedCounter end={100} suffix="%" duration={1200} />
                </p>
                <p className="text-xs text-gray-400">Owner-Operated</p>
              </div>
            </div>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-blue transition hover:text-blue-dark"
            >
              Read Our Full Story &rarr;
            </Link>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-premium-lg">
              <Image
                src="/images/preferred-plumbing-service-truck.webp"
                alt="Preferred Plumbing Solutions service truck - Spirit Lake, ID"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 grid gap-4 sm:gap-5 grid-cols-2 sm:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="group rounded-xl bg-gray-50 border border-gray-200 p-5 sm:p-6 text-center card-lift hover:border-blue/20 hover:ring-1 hover:ring-blue/20"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue/10 text-blue transition-all duration-300 group-hover:bg-blue group-hover:text-white group-hover:shadow-premium-md">
                <value.icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="mt-3 font-bold text-sm sm:text-base uppercase text-gray-900">{value.title}</h3>
              <p className="mt-1 text-xs sm:text-sm text-gray-500">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-gradient-to-r from-blue to-blue-dark p-8 sm:p-10 text-center">
          <p className="font-display text-xl sm:text-2xl font-bold text-white">
            Meet the family behind the work.
          </p>
          <p className="mt-2 text-sm sm:text-base text-white/80">
            Ron and Hunter would love to earn your trust.
          </p>
          <Link
            href="/about"
            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-blue transition hover:bg-blue-50"
          >
            Read Our Full Story &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
