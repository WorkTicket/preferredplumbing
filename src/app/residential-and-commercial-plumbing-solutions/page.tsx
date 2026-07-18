import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import HeroImagePreload from '@/components/ui/HeroImagePreload'
import LcpHeroImage from '@/components/ui/LcpHeroImage'
import Link from 'next/link'
import { Phone, CheckCircle, ChevronRight } from 'lucide-react'
import { generateMetadata } from '@/lib/seo'
import SectionLabel from '@/components/ui/SectionLabel'
import FaqAccordionList from '@/components/ui/FaqAccordionList'

const ContactForm = dynamic(() => import('@/components/ui/ContactForm'))

export const metadata: Metadata = generateMetadata({
  title: 'Residential & Commercial Plumbing',
  description: 'Residential and commercial plumbing in Spirit Lake, Idaho. Repairs, installs, and maintenance across North Idaho. Call 208-290-3889.',
  slug: 'residential-and-commercial-plumbing-solutions',
})

const residentialFaqs = [
  {
    question: 'What areas do you serve for plumbing services?',
    answer: 'Spirit Lake, Kootenai County, and communities across the Idaho Panhandle. We know the local water conditions and winter weather, so we plan the job for how things work here.',
  },
  {
    question: 'How quickly can you respond to plumbing emergencies?',
    answer: 'We aim to be at your door within hours during business hours. Our trucks are stocked so we can handle most emergencies on the first visit.',
  },
  {
    question: 'Do you provide services for both residential and commercial properties?',
    answer: 'Yes. Small household repair or large commercial install, we handle both.',
  },
  {
    question: 'What types of water heaters do you install and repair?',
    answer: 'Tank and tankless. We install, repair, and maintain both. We will help you pick what fits your home or business and your budget.',
  },
  {
    question: 'Are your plumbers licensed and insured?',
    answer: 'Yes. We are fully licensed and insured in Idaho and Washington.',
  },
  {
    question: 'What measures do you take to protect plumbing systems during winter?',
    answer: 'Insulation, freeze protection, and regular maintenance go a long way. Getting ahead of winter is cheaper than fixing a burst pipe later.',
  },
]

export default function ResidentialCommercialPage() {
  return (
    <div className="pt-14 sm:pt-16">

      <section className="relative min-h-[40vh] sm:min-h-[50vh] flex items-center">
        <HeroImagePreload src="/images/service-commercial-plumbing-project.webp" />
        <LcpHeroImage
          src="/images/service-commercial-plumbing-project.webp"
          alt="Residential and Commercial Plumbing Services, Spirit Lake ID"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" />
        <div className="relative z-10 container-page">
          <span className="section-label text-blue-300 before:bg-blue-300">Residential & Commercial</span>
          <h1 className="font-display text-[clamp(2.2rem,8vw,4.5rem)] font-black uppercase leading-[0.9] text-white">
            Residential & Commercial<br />
            <span className="text-blue-300">Plumbing Solutions</span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm sm:text-lg text-gray-300">
            Homes and businesses in Spirit Lake and across North Idaho.
          </p>
          <a
            href="tel:12082903889"
            className="mt-6 inline-flex btn-primary-lg"
          >
            <Phone className="h-5 w-5" /> Call (208) 290-3889
          </a>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <span className="section-label">{'About'}</span>
              <h2 className="mt-3 font-display text-[clamp(1.8rem,6vw,3rem)] font-black uppercase leading-[0.95] text-gray-900">
                Plumbing for Homes<br />
                <span className="text-blue">and Businesses</span>
              </h2>
              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Homes and businesses in Spirit Lake, Rathdrum, Hayden, Post Falls, Athol, and Bayview call us for simple repairs and full installs.
                </p>
                <p>
                  North Idaho winters and hard water are rough on plumbing. We live here, so we know how to keep systems running through it.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 shadow-premium-md">
                <h3 className="font-display text-lg font-bold uppercase text-gray-900">Get a Free Quote</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Tell us about your project and we&apos;ll get back to you within 24 hours.
                </p>
                <div className="mt-4">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-page">
          <div className="max-w-4xl">
            <span className="section-label">What We Do</span>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                We work on homes and businesses every day. We know the local codes, permit rules, and what passes inspection around here.
              </p>
              <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                Water heater upgrade or full commercial build. We do the job so it lasts.
              </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-page">
          <span className="section-label">{'Services'}</span>
          <h2 className="mt-3 font-display text-[clamp(1.8rem,6vw,3rem)] font-black uppercase leading-[0.95] text-gray-900">
            Our Residential &amp; Commercial<br />
            <span className="text-blue">Plumbing Services</span>
          </h2>

          <div className="mt-8 sm:mt-10 grid gap-5 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              title="Plumbing Repairs and Emergency Services"
              text="Leaks, burst pipes, clogged drains, and water heater failures. Emergency service available Sunday through Friday, 7am to 5pm."
            />
            <ServiceCard
              title="New Plumbing Installations"
              text="Building new or outfitting a commercial space? We design and install systems that meet local codes and work the first time."
            />
            <ServiceCard
              title="Water Heater Installation and Repair"
              text="Tank or tankless. We install, maintain, and repair both. We help you pick the right size for your property and budget."
            />
            <ServiceCard
              title="Drain Cleaning and Sewer Services"
              text="We clear blocked drains and sewer lines with hydro-jetting and video inspections so you know what is going on underground."
            />
            <ServiceCard
              title="Fixture Upgrades and Replacements"
              text="New sinks, faucets, toilets, and more. Better water use, a fresher look, and often lower bills."
            />
            <ServiceCard
              title="Preventive Plumbing Maintenance"
              text="Regular inspections catch small problems before they turn into expensive repairs."
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-page">
          <div className="max-w-4xl">
            <h2 className="font-display text-[clamp(1.8rem,5vw,2.5rem)] font-black uppercase leading-[0.95] text-gray-900">
              One Shop for Homes<br />
              <span className="text-blue">and Businesses</span>
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Maintenance, repairs, or full installs. We get it done right and stand behind the work.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-page">
          <span className="section-label">{'Benefits'}</span>
          <h2 className="mt-3 font-display text-[clamp(1.8rem,6vw,3rem)] font-black uppercase leading-[0.95] text-gray-900">
            Why Homeowners and<br />
            <span className="text-blue">Businesses Call Us</span>
          </h2>
          <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <BenefitCard
              title="We Find It and Fix It"
              text="We find the problem fast and fix it right the first time. No guesswork, no repeat visits."
            />
            <BenefitCard
              title="Code and Permit Ready"
              text="Our work meets Spirit Lake and Idaho Panhandle plumbing codes. We handle permits and inspections."
            />
            <BenefitCard
              title="The Right Tools for the Job"
              text="Video pipe inspections, hydro-jetting, and leak detection. We find problems without tearing everything apart."
            />
            <BenefitCard
              title="Fewer Emergency Calls Later"
              text="Fix it right and keep up with maintenance. That usually means fewer big surprises down the road."
            />
            <BenefitCard
              title="Lower Water Bills"
              text="Better fixtures and smarter setups can cut water use. That shows up on your bill."
            />
            <BenefitCard
              title="One Call Covers It"
              text="Repairs, installs, maintenance, and emergency service. No juggling a stack of contractors."
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-page">
          <span className="section-label">{'FAQ'}</span>
          <h2 className="mt-3 font-display text-[clamp(1.8rem,6vw,3rem)] font-black uppercase leading-[0.95] text-gray-900">
            Frequently Asked<br />
            <span className="text-blue">Questions</span>
          </h2>
          <div className="mt-8 max-w-4xl">
            <FaqAccordionList items={residentialFaqs} idPrefix="residential" />
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="max-w-4xl">
            <span className="section-label">Our Work</span>
            <h2 className="font-display text-[clamp(1.8rem,5vw,2.5rem)] font-black uppercase leading-[0.95] text-gray-900">
              Plumbing for Homes<br />
              <span className="text-blue">and Businesses</span>
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Preferred Plumbing Solutions serves Spirit Lake, Hauser, Twin Lakes, Blanchard, Oldtown, Coeur d&apos;Alene, and more. We know Kootenai County because we live here too.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Every project meets local codes and stands up to the Idaho climate. Plumbing is what keeps your home comfortable and your business running. We take that seriously.
            </p>
          </div>
          <div className="mt-8">
            <Link href="/contact" className="btn-primary">
              Get a Free Quote <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue to-blue-dark py-8 sm:py-10">
        <div className="container-page flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-center text-lg sm:text-xl font-bold text-white sm:text-left">
            Ready to get started? Call (208) 290-3889 for a free estimate.
          </p>
          <a
            href="tel:12082903889"
            className="btn-primary bg-white text-blue hover:bg-blue-50 inline-flex"
          >
            <Phone className="h-5 w-5" /> Call Now
          </a>
        </div>
      </section>
    </div>
  )
}

function ServiceCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-xl bg-white border border-gray-200 p-5 sm:p-6 shadow-premium transition-all hover:-translate-y-0.5 hover:shadow-premium-md hover:border-blue/20">
      <h3 className="font-display text-lg font-bold uppercase text-blue">{title}</h3>
      <p className="mt-3 text-gray-600 leading-relaxed text-sm sm:text-base">{text}</p>
    </div>
  )
}

function BenefitCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-xl bg-white border border-gray-200 p-5 sm:p-6 shadow-premium transition-all hover:-translate-y-0.5 hover:shadow-premium-md hover:border-blue/20">
      <CheckCircle className="h-6 w-6 text-blue" />
      <h3 className="mt-3 font-display text-lg font-bold uppercase text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600 leading-relaxed text-sm sm:text-base">{text}</p>
    </div>
  )
}
