import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import EmergencyBand from '@/components/sections/EmergencyBand'
import Testimonials from '@/components/sections/Testimonials'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import ServicesGrid from '@/components/sections/ServicesGrid'
import RecentProjects from '@/components/sections/RecentProjects'
import AboutSection from '@/components/sections/AboutSection'
import FAQAccordion from '@/components/sections/FAQAccordion'
import ServiceAreas from '@/components/sections/ServiceAreas'
import ContactSection from '@/components/sections/ContactSection'
import { AnimatedSection } from '@/components/animations'
import { faqSchema, webpageSchema, reviewSchema } from '@/lib/schema'
import { faqItems, reviews } from '@/lib/data'
import { generateMetadata as genMeta } from '@/lib/seo'

export const metadata: Metadata = genMeta({
  title: 'Plumber Spirit Lake Idaho | Preferred Plumbing Solutions',
  description: "Spirit Lake's trusted plumber for 38+ years. New construction, radiant heat, water heaters, emergency service. Call 208-290-3889.",
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
          __html: JSON.stringify(webpageSchema('Preferred Plumbing Solutions', "Spirit Lake's trusted plumber for 38+ years", '')),
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
      <HeroSection />
      <AnimatedSection variant="fadeUp" delay={0.1}>
        <EmergencyBand />
      </AnimatedSection>
      <AnimatedSection variant="slideUp" delay={0.1}>
        <Testimonials />
      </AnimatedSection>
      <AnimatedSection variant="fadeUp" delay={0.1}>
        <WhyChooseUs />
      </AnimatedSection>
      <AnimatedSection variant="fadeUp" delay={0.1}>
        <ServicesGrid />
      </AnimatedSection>
      <AnimatedSection variant="fadeUp" delay={0.1}>
        <RecentProjects />
      </AnimatedSection>
      <AnimatedSection variant="slideUp" delay={0.1}>
        <AboutSection />
      </AnimatedSection>
      <AnimatedSection variant="fadeUp" delay={0.1}>
        <FAQAccordion />
      </AnimatedSection>
      <AnimatedSection variant="fadeUp" delay={0.1}>
        <ServiceAreas />
      </AnimatedSection>
      <AnimatedSection variant="fadeUp" delay={0.15}>
        <ContactSection />
      </AnimatedSection>
    </>
  )
}
