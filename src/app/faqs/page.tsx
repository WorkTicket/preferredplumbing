import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ChevronRight, ArrowUpRight } from 'lucide-react'
import { getAllFaqItems, getFaqSections } from '@/lib/data'
import { SERVICE_NAV_LABELS } from '@/lib/nav-services'
import { faqSchema } from '@/lib/schema'
import { generateMetadata, siteUrl } from '@/lib/seo'
import PageHero from '@/components/sections/PageHero'
import FaqAccordionList from '@/components/ui/FaqAccordionList'
import SectionLabel from '@/components/ui/SectionLabel'
import { PHONE_HREF, PHONE_DISPLAY } from '@/lib/utils'

export const metadata: Metadata = generateMetadata({
  title: 'Plumbing FAQs Spirit Lake ID',
  description:
    'Plumbing FAQs for Spirit Lake and North Idaho covering emergency service, radiant heat, water heaters, remodels, and more. Call 208-290-3889.',
  slug: 'faqs',
  canonical: `${siteUrl}/faqs`,
})

export default function FAQsPage() {
  const sections = getFaqSections()
  const allFaqs = getAllFaqItems()
  const serviceSections = sections.filter((section) => section.id !== 'general')

  return (
    <div className="pt-14 sm:pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(allFaqs)) }}
      />
      <PageHero
        label="FAQ"
        title={<>Frequently Asked<br /><span className="text-blue-300">Questions</span></>}
        description={`General plumbing questions plus FAQs for every service we offer. Can't find your answer? Call ${PHONE_DISPLAY}.`}
        image="/images/hero-services.webp"
        imageAlt="Frequently asked questions about plumbing services in Spirit Lake Idaho"
        priority
      />

      <section className="section-padding bg-white border-b border-gray-100">
        <div className="container-page">
          <div className="text-center">
            <SectionLabel text="Browse by Topic" />
            <h2 className="font-display text-[clamp(1.5rem,5vw,2rem)] font-black uppercase text-gray-900 leading-[0.95]">
              Jump to a <span className="text-blue">Service</span>
            </h2>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3">
            <a
              href="#general"
              className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-xs sm:text-sm font-semibold text-gray-700 transition hover:border-blue/30 hover:bg-blue/5 hover:text-blue"
            >
              General
            </a>
            {serviceSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-xs sm:text-sm font-semibold text-gray-700 transition hover:border-blue/30 hover:bg-blue/5 hover:text-blue"
              >
                {SERVICE_NAV_LABELS[section.id] ?? section.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-gray-50">
        {sections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            className={`section-padding scroll-mt-28 sm:scroll-mt-32 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
          >
            <div className="container-page max-w-3xl">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
                <div>
                  <SectionLabel text={section.id === 'general' ? 'General' : 'Service FAQs'} />
                  <h2 className="font-display text-[clamp(1.5rem,5vw,2.25rem)] font-black uppercase text-gray-900 leading-[0.95]">
                    {section.title}
                  </h2>
                  <p className="mt-2 text-sm text-gray-500">
                    {section.items.length} question{section.items.length === 1 ? '' : 's'}
                  </p>
                </div>
                {section.href && (
                  <Link
                    href={section.href}
                    className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-blue transition hover:gap-2.5"
                  >
                    View Service <ArrowUpRight className="h-4 w-4" />
                  </Link>
                )}
              </div>

              <div className="mt-6 sm:mt-8">
                <FaqAccordionList items={section.items} idPrefix={section.id} defaultOpenIndex={0} />
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="section-padding bg-white">
        <div className="container-page text-center">
          <h2 className="font-display text-[clamp(1.8rem,5vw,2.5rem)] font-black uppercase text-gray-900 leading-[0.95]">
            Still Have<br />
            <span className="text-blue">Questions?</span>
          </h2>
          <p className="mt-3 text-gray-600">
            Call us or request a free quote online.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href={PHONE_HREF} className="btn-primary">
              <Phone className="h-5 w-5" /> Call {PHONE_DISPLAY}
            </a>
            <a href="/contact" className="btn-secondary">
              Get Free Quote <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
