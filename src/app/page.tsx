import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import HeroSection from '@/components/sections/HeroSection'
import EmergencyBand from '@/components/sections/EmergencyBand'
import { AnimatedSection } from '@/components/animations'
import { faqSchema, webpageSchema, reviewSchema, videoObjectSchema } from '@/lib/schema'
import { faqItems, reviews } from '@/lib/data'
import { generateMetadata as genMeta, siteUrl } from '@/lib/seo'
import { SHOW_GOOGLE_REVIEWS } from '@/lib/feature-flags'
import { combinedExperiencePhrase } from '@/lib/company-stats'

const WhyChooseUs = dynamic(() => import('@/components/sections/WhyChooseUs'))
const ServicesGrid = dynamic(() => import('@/components/sections/ServicesGrid'))
const AboutSection = dynamic(() => import('@/components/sections/AboutSection'))
const WorkGallery = dynamic(() => import('@/components/sections/WorkGallery'))
const Testimonials = SHOW_GOOGLE_REVIEWS
  ? dynamic(() => import('@/components/sections/Testimonials'))
  : null
const LatestArticles = dynamic(() => import('@/components/sections/LatestArticles'))
const ServiceAreas = dynamic(() => import('@/components/sections/ServiceAreas'))
const FAQAccordion = dynamic(() => import('@/components/sections/FAQAccordion'))
const FindUsSection = dynamic(() => import('@/components/sections/FindUsSection'))
const ContactSection = dynamic(() => import('@/components/sections/ContactSection'))

export const metadata: Metadata = genMeta({
  description:
    'Family-owned plumber in Spirit Lake with 38+ years experience. Radiant heat, water heaters, emergency service. Licensed and insured. Call 208-290-3889.',
  slug: '',
})

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(faqItems.slice(0, 7))),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webpageSchema('Preferred Plumbing Solutions', `Family-owned plumber in Spirit Lake with ${combinedExperiencePhrase()}`, '')),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoObjectSchema()) }}
      />
      {SHOW_GOOGLE_REVIEWS && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(reviewSchema(reviews.slice(0, 3))),
          }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, item: { '@type': 'Service', name: 'Emergency Plumbing', url: `${siteUrl}/services/emergency` } },
              { '@type': 'ListItem', position: 2, item: { '@type': 'Service', name: 'Radiant Floor Heating', url: `${siteUrl}/services/radiant-heat` } },
              { '@type': 'ListItem', position: 3, item: { '@type': 'Service', name: 'Heated Driveway Installation', url: `${siteUrl}/services/heated-driveways` } },
              { '@type': 'ListItem', position: 4, item: { '@type': 'Service', name: 'New Construction Plumbing', url: `${siteUrl}/services/new-construction` } },
              { '@type': 'ListItem', position: 5, item: { '@type': 'Service', name: 'Commercial Plumbing', url: `${siteUrl}/services/commercial` } },
              { '@type': 'ListItem', position: 6, item: { '@type': 'Service', name: 'Tankless Water Heater Installation', url: `${siteUrl}/services/tankless-water-heaters` } },
            ],
          }),
        }}
      />
      <div className="hero-fold flex flex-col">
        <HeroSection />
        <EmergencyBand />
      </div>
      <AnimatedSection variant="fadeUp" delay={0.1}>
        <WhyChooseUs />
      </AnimatedSection>
      <AnimatedSection variant="fadeUp" delay={0.1}>
        <ServicesGrid />
      </AnimatedSection>
      <AnimatedSection variant="slideUp" delay={0.1}>
        <AboutSection />
      </AnimatedSection>
      <AnimatedSection variant="fadeUp" delay={0.1}>
        <WorkGallery />
      </AnimatedSection>
      {Testimonials && (
        <AnimatedSection variant="slideUp" delay={0.1}>
          <Testimonials />
        </AnimatedSection>
      )}
      <AnimatedSection variant="fadeUp" delay={0.1}>
        <LatestArticles />
      </AnimatedSection>
      <AnimatedSection variant="fadeUp" delay={0.1}>
        <ServiceAreas />
      </AnimatedSection>
      <AnimatedSection variant="fadeUp" delay={0.1}>
        <FAQAccordion />
      </AnimatedSection>
      <AnimatedSection variant="fadeUp" delay={0.1}>
        <FindUsSection />
      </AnimatedSection>
      <AnimatedSection variant="fadeUp" delay={0.15}>
        <ContactSection />
      </AnimatedSection>
    </>
  )
}
