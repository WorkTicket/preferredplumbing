import type { Metadata } from 'next'
import SectionLabel from '@/components/ui/SectionLabel'
import ContactEmailList from '@/components/ui/ContactEmailList'
import { siteUrl } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Privacy Policy | Preferred Plumbing Solutions',
  description: 'Privacy policy for Preferred Plumbing Solutions. Learn how we collect, use, and protect your personal information.',
  robots: { index: true, follow: true },
  alternates: { canonical: `${siteUrl}/privacy-policy` },
  openGraph: {
    title: 'Privacy Policy | Preferred Plumbing Solutions',
    description: 'Privacy policy for Preferred Plumbing Solutions. Learn how we collect, use, and protect your personal information.',
    url: `${siteUrl}/privacy-policy`,
    siteName: 'Preferred Plumbing Solutions',
    locale: 'en_US',
    type: 'website',
  },
}

export default function PrivacyPage() {
  return (
    <div className="pt-14 sm:pt-16">
      <section className="section-padding bg-white">
        <div className="container-page">
          <SectionLabel text="Legal" />
          <h1 className="font-display text-[clamp(2.2rem,8vw,4.5rem)] font-black uppercase leading-[0.9] text-gray-900">
            Privacy Policy
          </h1>
        </div>
      </section>
      <section className="section-padding bg-gray-50">
        <div className="container-page max-w-3xl space-y-6 text-gray-600 leading-relaxed">
          <p>Last updated: June 2026</p>
          <h2 className="font-display text-xl font-bold uppercase text-gray-900">Information We Collect</h2>
          <p>
            When you fill out our contact form, we collect your name, phone number, email address,
            and project details. This information is used solely to respond to your inquiry and provide
            plumbing services.
          </p>
          <h2 className="font-display text-xl font-bold uppercase text-gray-900">How We Use Your Information</h2>
          <p>
            We use your information to: respond to quote requests, schedule service appointments,
            communicate about your project, and send relevant follow-ups. We do not sell or share your
            personal information with third parties for marketing purposes.
          </p>
          <h2 className="font-display text-xl font-bold uppercase text-gray-900">Data Security</h2>
          <p>
            We implement reasonable security measures to protect your personal information. Contact form
            submissions are transmitted securely via HTTPS and stored in encrypted email systems.
          </p>
          <h2 className="font-display text-xl font-bold uppercase text-gray-900">Contact</h2>
          <p>
            For questions about this privacy policy, contact us by phone at (208) 290-3889 or email:
          </p>
          <ContactEmailList className="mt-2" />
        </div>
      </section>
    </div>
  )
}
