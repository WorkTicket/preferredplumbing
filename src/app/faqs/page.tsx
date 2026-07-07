import type { Metadata } from 'next'
import { Phone, ChevronRight } from 'lucide-react'
import { faqItems } from '@/lib/data'
import { faqSchema } from '@/lib/schema'
import { generateMetadata, siteUrl } from '@/lib/seo'
import PageHero from '@/components/sections/PageHero'

export const metadata: Metadata = generateMetadata({
  title: 'Frequently Asked Questions',
  description: 'Common questions about plumbing in Spirit Lake, Idaho. Emergency service, licensing, estimates, and more answered by Preferred Plumbing Solutions.',
  slug: 'faqs',
  canonical: `${siteUrl}/faqs`,
})

export default function FAQsPage() {
  return (
    <div className="pt-14 sm:pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqItems)) }}
      />
      <PageHero
        label="FAQ"
        title={<>Frequently Asked<br /><span className="text-blue-300">Questions</span></>}
        description="Got a question? Check the list below. If you don't see what you need, call (208) 290-3889."
        image="/images/hero-services.webp"
        imageAlt="Frequently asked questions about plumbing services in Spirit Lake Idaho"
        priority
      />

      <section className="section-padding bg-gray-50">
        <div className="container-page max-w-3xl">
          <div className="space-y-3 sm:space-y-4">
            {faqItems.map((faq, i) => (
              <details key={i} className="group rounded-xl bg-white border border-gray-200 shadow-premium open:ring-1 open:ring-blue/20">
                <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900 transition hover:text-blue list-none text-sm sm:text-base [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span className="shrink-0 text-2xl text-gray-400 transition group-open:rotate-45 ml-2">+</span>
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

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
            <a
              href="tel:12082903889"
              className="btn-primary"
            >
              <Phone className="h-5 w-5" /> Call (208) 290-3889
            </a>
            <a
              href="/contact"
              className="btn-secondary"
            >
              Get Free Quote <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
