import type { Metadata } from 'next'
import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import ContactEmailList from '@/components/ui/ContactEmailList'
import { generateMetadata, siteUrl } from '@/lib/seo'
import { FULL_ADDRESS, PHONE_DISPLAY } from '@/lib/utils'

export const metadata: Metadata = generateMetadata({
  title: 'Privacy Policy',
  description:
    'Privacy policy for Preferred Plumbing Solutions. How we collect, use, and protect your personal information when you contact us or visit our website.',
  slug: 'privacy-policy',
  canonical: `${siteUrl}/privacy-policy`,
})

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
          <p>Last updated: July 22, 2026</p>
          <p>
            Preferred Plumbing Solutions (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates
            callpreferredplumbing.com and provides plumbing services from {FULL_ADDRESS},
            serving North Idaho and Eastern Washington. This Privacy Policy explains what
            information we collect, why we collect it, how we use it, and your choices.
          </p>

          <h2 className="font-display text-xl font-bold uppercase text-gray-900">
            Information We Collect
          </h2>
          <p>We may collect the following categories of information:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="text-gray-800">Contact and quote details</strong> you submit
              through our forms, including name, phone number, email address (optional), city,
              requested service, message, and how you heard about us.
            </li>
            <li>
              <strong className="text-gray-800">Communications</strong> when you call, text, or
              email us, including the phone number or email address you use and the content of
              your inquiry as needed to respond and schedule service.
            </li>
            <li>
              <strong className="text-gray-800">Technical and usage data</strong> when you visit
              our website, such as pages viewed, approximate location derived from IP address,
              device/browser type, and referral source. If you consent to analytics cookies, we
              collect this through Google Analytics.
            </li>
          </ul>

          <h2 className="font-display text-xl font-bold uppercase text-gray-900">
            How We Use Your Information
          </h2>
          <p>We use personal information to:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Respond to quote requests and schedule appointments</li>
            <li>Communicate about your project, service, or estimate</li>
            <li>Operate, secure, and improve our website</li>
            <li>
              Understand site traffic and performance (analytics), only when you have consented
            </li>
            <li>Comply with legal obligations and protect our rights</li>
          </ul>
          <p>
            We do not sell your personal information, and we do not share it with third parties
            for their own marketing purposes.
          </p>

          <h2 className="font-display text-xl font-bold uppercase text-gray-900">
            Cookies and Similar Technologies
          </h2>
          <p>We use cookies and similar technologies as follows:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="text-gray-800">Essential</strong> — needed for the site to
              function securely (for example, hosting and security features provided by our
              infrastructure). These do not require consent.
            </li>
            <li>
              <strong className="text-gray-800">Analytics</strong> — with your consent, Google
              Analytics (GA4) helps us understand how visitors use callpreferredplumbing.com
              (pages viewed, traffic sources, and similar usage metrics). You can accept or
              reject analytics cookies via our cookie banner.
            </li>
          </ul>
          <p>
            Your choice is stored in your browser (local storage) so we remember your preference.
            You can clear site data in your browser settings to see the banner again and change
            your choice. You may also use browser controls to block or delete cookies.
          </p>

          <h2 className="font-display text-xl font-bold uppercase text-gray-900">
            Third Parties and Service Providers
          </h2>
          <p>
            We use trusted service providers who process information on our behalf or as
            independent controllers of their own services:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="text-gray-800">Cloudflare</strong> — website hosting, security,
              and content delivery for callpreferredplumbing.com.
            </li>
            <li>
              <strong className="text-gray-800">Google Analytics</strong> — website analytics when
              you consent to analytics cookies. Google&apos;s use of data is governed by its own
              privacy policy.
            </li>
            <li>
              <strong className="text-gray-800">Google Maps</strong> — map embeds and directions
              links on our contact and location pages.
            </li>
            <li>
              <strong className="text-gray-800">Email delivery</strong> — contact form submissions
              are transmitted securely (HTTPS) and delivered to our business email so we can
              respond to your inquiry.
            </li>
          </ul>
          <p>
            Our site may also link to third-party platforms such as Facebook, TikTok, or Google
            Business Profile. Those services have their own privacy practices once you leave our
            site.
          </p>

          <h2 className="font-display text-xl font-bold uppercase text-gray-900">
            Data Retention and Security
          </h2>
          <p>
            We retain contact and project-related information as long as needed to respond to
            inquiries, provide services, maintain business records, and meet legal requirements.
            We use reasonable administrative and technical safeguards, including HTTPS
            transmission. No method of transmission or storage is completely secure.
          </p>

          <h2 className="font-display text-xl font-bold uppercase text-gray-900">
            Your Rights and Choices
          </h2>
          <p>
            Depending on applicable law, you may request access to, correction of, or deletion of
            personal information we hold about you. You may also opt out of analytics cookies as
            described above. To make a privacy request, contact us using the information below.
            We will respond within a reasonable time.
          </p>

          <h2 className="font-display text-xl font-bold uppercase text-gray-900">
            Children&apos;s Privacy
          </h2>
          <p>
            Our website and services are directed to adults seeking plumbing services. We do not
            knowingly collect personal information from children under 13.
          </p>

          <h2 className="font-display text-xl font-bold uppercase text-gray-900">
            Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. The &quot;Last updated&quot; date
            at the top of this page will reflect the latest revision. Continued use of the site
            after changes means you acknowledge the updated policy.
          </p>

          <h2 className="font-display text-xl font-bold uppercase text-gray-900">
            Related Terms
          </h2>
          <p>
            Use of this website is also subject to our{' '}
            <Link href="/terms-and-conditions" className="font-semibold text-blue hover:underline">
              Terms &amp; Conditions
            </Link>
            .
          </p>

          <h2 className="font-display text-xl font-bold uppercase text-gray-900">Contact Us</h2>
          <p>
            Preferred Plumbing Solutions
            <br />
            {FULL_ADDRESS}
            <br />
            Phone: {PHONE_DISPLAY}
          </p>
          <p>For privacy questions or requests, email:</p>
          <ContactEmailList className="mt-2" />
        </div>
      </section>
    </div>
  )
}
