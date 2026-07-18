'use client'

import { faqItems } from '@/lib/data'
import SectionLabel from '@/components/ui/SectionLabel'
import FaqAccordionList from '@/components/ui/FaqAccordionList'
import Link from 'next/link'

export default function FAQAccordion() {
  return (
    <section className="section-padding bg-gray-50 relative overflow-hidden mesh-bg-warm">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16 lg:items-start">
          <div>
            <SectionLabel text="FAQ" />
            <h2 className="section-heading">
              Common<br />
              <span className="text-blue">Questions</span>
            </h2>
            <p className="section-subtitle mt-4">
              Quick answers to the things customers ask us most. Can&apos;t find what you need? Give us a call.
            </p>
            <div className="mt-8 hidden lg:block premium-card-dark p-6">
              <p className="font-display text-lg font-black uppercase text-white">Still have questions?</p>
              <p className="mt-2 text-sm text-gray-300">We&apos;re happy to talk through your project.</p>
              <a href="tel:12082903889" className="mt-4 inline-flex items-center gap-2 font-bold text-blue-light hover:text-white transition-colors">
                Call (208) 290-3889 &rarr;
              </a>
            </div>
          </div>

          <FaqAccordionList items={faqItems.slice(0, 7)} idPrefix="home" />
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/faqs" className="font-bold text-blue hover:text-blue-dark transition-colors">
            View All FAQs &rarr;
          </Link>
          <span className="hidden sm:inline text-gray-300">|</span>
          <p className="text-gray-500 text-sm lg:hidden">
            Still have questions?{' '}
            <a href="tel:12082903889" className="text-blue font-bold">
              Call (208) 290-3889
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
