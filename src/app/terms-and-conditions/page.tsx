import type { Metadata } from 'next'
import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import ContactEmailList from '@/components/ui/ContactEmailList'
import { generateMetadata, siteUrl } from '@/lib/seo'
import { FULL_ADDRESS, PHONE_DISPLAY } from '@/lib/utils'

export const metadata: Metadata = generateMetadata({
  title: 'Terms & Conditions',
  description:
    'Terms and conditions for Preferred Plumbing Solutions. Website use, service estimates, liability limits, and governing law for our Idaho plumbing business.',
  slug: 'terms-and-conditions',
  canonical: `${siteUrl}/terms-and-conditions`,
})

export default function TermsPage() {
  return (
    <div className="pt-site-header">
      <section className="section-padding bg-white">
        <div className="container-page">
          <SectionLabel text="Legal" />
          <h1 className="font-display text-[clamp(2.2rem,8vw,4.5rem)] font-black uppercase leading-[0.9] text-gray-900">
            Terms &amp; Conditions
          </h1>
        </div>
      </section>
      <section className="section-padding bg-gray-50">
        <div className="container-page max-w-3xl space-y-6 text-gray-600 leading-relaxed">
          <p>Last updated: July 22, 2026</p>
          <p>
            These Terms &amp; Conditions (&quot;Terms&quot;) govern your access to and use of
            callpreferredplumbing.com (the &quot;Site&quot;) operated by Preferred Plumbing
            Solutions (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), a plumbing contractor
            based in {FULL_ADDRESS}, serving North Idaho and Eastern Washington. By using the
            Site, you agree to these Terms. If you do not agree, please do not use the Site.
          </p>

          <h2 className="font-display text-xl font-bold uppercase text-gray-900">
            Website Use
          </h2>
          <p>
            You may use the Site for lawful purposes only—primarily to learn about our plumbing
            services, view project information, and request quotes or contact us. You agree not
            to misuse the Site, attempt to disrupt its operation, scrape content without
            permission, submit false or misleading information through forms, or use the Site
            for any unlawful activity.
          </p>

          <h2 className="font-display text-xl font-bold uppercase text-gray-900">
            Services and Estimates
          </h2>
          <p>
            Information on the Site—including service descriptions, project galleries, blog
            posts, and FAQs—is for general informational purposes. It does not constitute a
            binding offer, professional engineering advice, or a guarantee of availability,
            pricing, timeline, or results for any specific job.
          </p>
          <p>
            Quote requests and free estimates are invitations to discuss your project. Any
            binding agreement for plumbing work is formed only through a separate written
            estimate, proposal, invoice, or contract that we provide and that you accept.
            Actual scope, materials, permits, site conditions, and pricing may differ from
            preliminary discussions.
          </p>

          <h2 className="font-display text-xl font-bold uppercase text-gray-900">
            No Guarantees on Website Content
          </h2>
          <p>
            We strive to keep Site content accurate and up to date, but we do not warrant that
            the Site is error-free, complete, or continuously available. Service areas, hours,
            licensing statements, and offerings may change. Always confirm details by phone or
            email before relying on them.
          </p>

          <h2 className="font-display text-xl font-bold uppercase text-gray-900">
            Intellectual Property
          </h2>
          <p>
            The Site and its content—including text, logos, photographs, videos, graphics, and
            design—are owned by Preferred Plumbing Solutions or used with permission. You may
            view and print pages for personal, non-commercial use related to evaluating our
            services. You may not copy, modify, distribute, or commercially exploit Site
            content without our prior written consent, except as allowed by law.
          </p>

          <h2 className="font-display text-xl font-bold uppercase text-gray-900">
            Third-Party Links and Tools
          </h2>
          <p>
            The Site may link to third-party websites or embed tools such as Google Maps or
            social media profiles. We are not responsible for the content, privacy practices, or
            availability of those third parties. Your use of them is at your own risk and subject
            to their terms.
          </p>

          <h2 className="font-display text-xl font-bold uppercase text-gray-900">
            Limitation of Liability
          </h2>
          <p>
            To the fullest extent permitted by applicable law, Preferred Plumbing Solutions and
            its owners, employees, and agents are not liable for any indirect, incidental,
            consequential, special, or punitive damages arising from your use of—or inability to
            use—the Site, including reliance on Site content, even if we have been advised of
            the possibility of such damages.
          </p>
          <p>
            Our total liability related to your use of the Site shall not exceed one hundred
            dollars (US $100) or the amount you paid us (if any) specifically for website-related
            access, whichever is greater. This limitation does not affect warranties or
            liabilities that apply under a separate written service contract for plumbing work,
            or rights that cannot be limited under Idaho or Washington law.
          </p>

          <h2 className="font-display text-xl font-bold uppercase text-gray-900">
            Indemnification
          </h2>
          <p>
            You agree to indemnify and hold harmless Preferred Plumbing Solutions from claims,
            damages, losses, and expenses (including reasonable attorneys&apos; fees) arising from
            your misuse of the Site, your violation of these Terms, or your submission of
            unlawful or infringing content.
          </p>

          <h2 className="font-display text-xl font-bold uppercase text-gray-900">
            Privacy
          </h2>
          <p>
            How we collect and use personal information is described in our{' '}
            <Link href="/privacy-policy" className="font-semibold text-blue hover:underline">
              Privacy Policy
            </Link>
            , which is incorporated by reference into these Terms.
          </p>

          <h2 className="font-display text-xl font-bold uppercase text-gray-900">
            Governing Law
          </h2>
          <p>
            These Terms are governed by the laws of the State of Idaho, without regard to
            conflict-of-law principles. Any dispute arising from these Terms or your use of the
            Site shall be resolved in the state or federal courts located in Idaho, and you
            consent to personal jurisdiction there, except where applicable law requires
            otherwise.
          </p>

          <h2 className="font-display text-xl font-bold uppercase text-gray-900">
            Changes
          </h2>
          <p>
            We may update these Terms from time to time. The &quot;Last updated&quot; date shows
            the latest revision. Continued use of the Site after changes constitutes acceptance
            of the revised Terms.
          </p>

          <h2 className="font-display text-xl font-bold uppercase text-gray-900">
            Contact
          </h2>
          <p>
            Preferred Plumbing Solutions
            <br />
            {FULL_ADDRESS}
            <br />
            Phone: {PHONE_DISPLAY}
          </p>
          <p>Questions about these Terms:</p>
          <ContactEmailList className="mt-2" />
        </div>
      </section>
    </div>
  )
}
