import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, CheckCircle, ChevronRight } from 'lucide-react'
import { generateMetadata } from '@/lib/seo'
import ContactForm from '@/components/ui/ContactForm'
import SectionLabel from '@/components/ui/SectionLabel'

export const metadata: Metadata = generateMetadata({
  title: 'Residential & Commercial Plumbing Solutions',
  description: 'Expert residential and commercial plumbing services in Spirit Lake, Idaho. 38+ years of experience serving North Idaho with repairs, installations, and maintenance.',
  slug: 'residential-and-commercial-plumbing-solutions',
})

export default function ResidentialCommercialPage() {
  return (
    <div className="pt-14 sm:pt-16">

      <section className="relative min-h-[40vh] sm:min-h-[50vh] flex items-center">
        <Image
          src="/images/service-commercial-plumbing-project.webp"
          alt="Residential and Commercial Plumbing Services, Spirit Lake ID"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" />
        <div className="relative z-10 container-page">
          <span className="section-label text-blue-300 before:bg-blue-300">Residential & Commercial</span>
          <h1 className="font-display text-[clamp(2.2rem,8vw,4.5rem)] font-black uppercase leading-[0.9] text-white">
            Residential & Commercial<br />
            <span className="text-blue-300">Plumbing Solutions</span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm sm:text-lg text-gray-300">
            Expert plumbing services in Spirit Lake, Idaho and across North Idaho.
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
                Committed to Excellence<br />
                <span className="text-blue">in Residential and Commercial Plumbing</span>
              </h2>
              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  For over 38 years, we have been the plumbers that homes and businesses call in Spirit Lake, Rathdrum, Hayden, Post Falls, Athol, and Bayview. Simple repair or full install, our team handles it.
                </p>
                <p>
                  North Idaho winters and local water conditions are hard on plumbing. We know the area and we know what it takes to keep systems running through it all.
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
                We work on homes and businesses every day. Decades of experience plus modern tools means we get things done fast. Our team knows local codes, permit rules, and what passes inspection around here.
              </p>
              <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                Water heater upgrade or full commercial build. We deliver work that lasts. Nearly four decades in North Idaho.
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
              text="We handle leaks, burst pipes, clogged drains, and water heater failures. Emergency service available 24/7 for homes and businesses."
            />
            <ServiceCard
              title="New Plumbing Installations"
              text="Building new or outfitting a commercial space? We design and install efficient plumbing systems that meet local codes and work right the first time."
            />
            <ServiceCard
              title="Water Heater Installation and Repair"
              text="Tank or tankless, we install, maintain, and repair all types. We help you pick the right size and model for your property and budget."
            />
            <ServiceCard
              title="Drain Cleaning and Sewer Services"
              text="We clear blocked drains and sewer lines using hydro-jetting and video inspections. Fast, thorough, and built to prevent future backups."
            />
            <ServiceCard
              title="Fixture Upgrades and Replacements"
              text="New sinks, faucets, toilets, and more. Upgrade for better water efficiency, updated style, and lower utility bills."
            />
            <ServiceCard
              title="Preventive Plumbing Maintenance"
              text="Regular inspections catch small problems before they turn into expensive repairs. Extend the life of your plumbing with routine service."
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-page">
          <div className="max-w-4xl">
            <h2 className="font-display text-[clamp(1.8rem,5vw,2.5rem)] font-black uppercase leading-[0.95] text-gray-900">
              Expert Plumbing Services<br />
              <span className="text-blue">for Homes and Businesses</span>
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Nearly four decades in Spirit Lake means we have seen it all. Residential, commercial, maintenance, repairs, or full installs. We get it done right and stand behind our work.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-page">
          <span className="section-label">{'Benefits'}</span>
          <h2 className="mt-3 font-display text-[clamp(1.8rem,6vw,3rem)] font-black uppercase leading-[0.95] text-gray-900">
            Benefits of Professional<br />
            <span className="text-blue">Plumbing Solutions</span>
          </h2>
          <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <BenefitCard
              title="Expert Diagnosis and Efficient Repairs"
              text="We find the problem fast and fix it right the first time. No guesswork, no repeat visits."
            />
            <BenefitCard
              title="Compliance with Local Codes"
              text="Our work meets Spirit Lake and Idaho Panhandle plumbing codes. Permits and inspections handled. No fines, no hassle."
            />
            <BenefitCard
              title="Advanced Tools and Technology"
              text="Video pipe inspections, hydro-jetting, and leak detection equipment. We find problems without tearing things apart."
            />
            <BenefitCard
              title="Long-Term Cost Savings"
              text="Fix it right and maintain it regularly. You will avoid expensive emergency calls and extend the life of your system."
            />
            <BenefitCard
              title="Enhanced Water Efficiency"
              text="Upgraded fixtures and water-saving systems lower your bills. Good for your wallet and good for the community."
            />
            <BenefitCard
              title="Comprehensive Service Offering"
              text="One call handles it all. Repairs, installations, maintenance, and emergency service. No juggling multiple contractors."
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
          <div className="mt-8 max-w-4xl space-y-3 sm:space-y-4">
            <FAQItem question="What areas do you serve for plumbing services?" answer="Spirit Lake, Kootenai County, and communities across the Idaho Panhandle. We know the local water conditions and climate, so we can tailor solutions for your area." />
            <FAQItem question="How quickly can you respond to plumbing emergencies?" answer="We aim to be at your door within hours. Our trucks are stocked and ready for most emergencies on the first visit." />
            <FAQItem question="Do you provide services for both residential and commercial properties?" answer="Yes. Small household repair or large commercial install, we handle both. Our team has experience across all property types." />
            <FAQItem question="What types of water heaters do you install and repair?" answer="Tank and tankless. We install, repair, and maintain both types. We will help you pick the most efficient option for your home or business." />
            <FAQItem question="Are your plumbers licensed and insured?" answer="Yes. Every technician is fully licensed and insured. That means professional work and protection for your property." />
            <FAQItem question="What measures do you take to protect plumbing systems during winter?" answer="We recommend insulation, freeze protection, and timely maintenance to prevent burst pipes. Early preparation saves you from costly repairs later." />
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="max-w-4xl">
            <span className="section-label">Trusted Service</span>
            <h2 className="font-display text-[clamp(1.8rem,5vw,2.5rem)] font-black uppercase leading-[0.95] text-gray-900">
              Trusted Plumbing Solutions<br />
              <span className="text-blue">for Homes and Businesses</span>
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

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="rounded-xl bg-white border border-gray-200 p-5 shadow-premium">
      <p className="font-semibold text-gray-900 text-sm sm:text-base">{question}</p>
      <p className="mt-2 text-gray-600 text-sm sm:text-base">{answer}</p>
    </div>
  )
}
