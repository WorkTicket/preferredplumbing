import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import HeroSection from '@/components/sections/HeroSection'
import EmergencyBand from '@/components/sections/EmergencyBand'
import { AnimatedSection } from '@/components/animations'
import { faqSchema, webpageSchema } from '@/lib/schema'
import { faqItems } from '@/lib/data'
import { generateMetadata as genMeta } from '@/lib/seo'

const WhyChooseUs = dynamic(() => import('@/components/sections/WhyChooseUs'))
const ServicesGrid = dynamic(() => import('@/components/sections/ServicesGrid'))
const AboutSection = dynamic(() => import('@/components/sections/AboutSection'))
const WorkGallery = dynamic(() => import('@/components/sections/WorkGallery'))
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'))
const LatestArticles = dynamic(() => import('@/components/sections/LatestArticles'))
const ServiceAreas = dynamic(() => import('@/components/sections/ServiceAreas'))
const FAQAccordion = dynamic(() => import('@/components/sections/FAQAccordion'))
const FindUsSection = dynamic(() => import('@/components/sections/FindUsSection'))
const ContactSection = dynamic(() => import('@/components/sections/ContactSection'))

export const metadata: Metadata = genMeta({
  title: 'Plumber Spirit Lake Idaho | Preferred Plumbing Solutions',
  description: "Family-owned plumber in Spirit Lake since 1987. New construction, radiant heat, water heaters, emergency service. Call 208-290-3889.",
  slug: '',
})

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(faqItems.slice(0, 5))),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webpageSchema('Preferred Plumbing Solutions', 'Family-owned plumber in Spirit Lake since 1987', '')),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, item: { '@type': 'Service', name: 'Emergency Plumbing', url: 'https://www.preferredplumbingsolution.com/services/emergency' } },
              { '@type': 'ListItem', position: 2, item: { '@type': 'Service', name: 'New Construction Plumbing', url: 'https://www.preferredplumbingsolution.com/services/new-construction' } },
              { '@type': 'ListItem', position: 3, item: { '@type': 'Service', name: 'Water Heater Installation', url: 'https://www.preferredplumbingsolution.com/services/water-heaters' } },
              { '@type': 'ListItem', position: 4, item: { '@type': 'Service', name: 'Radiant Floor Heating', url: 'https://www.preferredplumbingsolution.com/services/radiant-heat' } },
              { '@type': 'ListItem', position: 5, item: { '@type': 'Service', name: 'Sewer Line Replacement', url: 'https://www.preferredplumbingsolution.com/services/sewer-line' } },
              { '@type': 'ListItem', position: 6, item: { '@type': 'Service', name: 'Septic Systems', url: 'https://www.preferredplumbingsolution.com/services/septic-systems' } },
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
      <AnimatedSection variant="slideUp" delay={0.1}>
        <Testimonials />
      </AnimatedSection>
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
