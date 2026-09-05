import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import HeroSection from '@/components/sections/HeroSection'
import EmergencyBand from '@/components/sections/EmergencyBand'
import { AnimatedSection } from '@/components/animations'
import { webpageSchema, reviewSchema, videoObjectSchema, featuredServicesItemList } from '@/lib/schema'
import { reviews } from '@/lib/data'
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
  title: 'Spirit Lake Plumber | Same-Day Service',
  description:
    'Plumbing services near Spirit Lake and North Idaho. Family-owned, 38+ years. Water heaters, radiant heat, emergency plumber. Call 208-290-3889.',
  slug: '',
  keywords: [
    'plumber',
    'plumbing services',
    'plumbing services near me',
    'plumber Spirit Lake Idaho',
    'plumber Coeur d\'Alene',
    'plumber Post Falls',
    'plumber Rathdrum',
    'emergency plumber near me',
    'water heater repair near me',
  ],
})

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
            __html: JSON.stringify(webpageSchema('Spirit Lake Plumber | Same-Day Service', `Plumbing services near Spirit Lake and North Idaho. Family-owned with ${combinedExperiencePhrase()}. Water heaters, radiant heat, and emergency plumber.`, '')),
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
          __html: JSON.stringify(
            featuredServicesItemList([
              { name: 'Emergency Plumbing', url: `${siteUrl}/services/emergency` },
              { name: 'Water Heater Repair & Installation', url: `${siteUrl}/services/water-heaters` },
              { name: 'Heated Driveway Installation', url: `${siteUrl}/services/heated-driveways` },
              { name: 'Radiant Floor Heating', url: `${siteUrl}/services/radiant-heat` },
              { name: 'New Construction Plumbing', url: `${siteUrl}/services/new-construction` },
              { name: 'Commercial Plumbing', url: `${siteUrl}/services/commercial` },
            ]),
          ),
        }}
      />
      <div className="hero-fold flex flex-col">
        <HeroSection />
        <EmergencyBand />
      </div>
      <AnimatedSection variant="fadeIn" delay={0.1} className="bg-gray-50">
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
