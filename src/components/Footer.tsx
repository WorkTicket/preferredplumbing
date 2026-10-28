import { Icon } from "./Icon";
import { services } from "@/data/services";
import { publishedLocations } from "@/data/locations";
import { site } from "@/data/site";
import { StickyMobileBar } from "./StickyMobileBar";

const social = [
  {
    label: "Facebook",
    href: site.facebook,
    path: "M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z",
  },
  {
    label: "TikTok",
    href: site.tiktok,
    path: "M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z",
  },
];

export function Footer() {
  const featured = services.slice(0, 8);
  return (
    <>
      <footer className="site-footer">
        <div className="wrap">
          <div className="sf-grid">
            <div className="sf-brand">
              <a href="/" aria-label="Preferred Plumbing Solutions home">
                <img
                  src="/assets/footer-logo.webp"
                  alt="Preferred Plumbing Solutions"
                  width={1254}
                  height={1254}
                  loading="lazy"
                  decoding="async"
                />
              </a>
              <p>
                Owner-operated plumbing, radiant heat, and repairs. Spirit Lake
                roots. North Idaho reach.
              </p>
              <div className="sf-social" aria-label="Follow Preferred Plumbing">
                {social.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${s.label} (opens in a new tab)`}
                    title={s.label}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d={s.path} />
                    </svg>
                  </a>
                ))}
              </div>
              <a
                className="sf-review"
                href={site.googleReview}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sf-stars" aria-hidden="true">
                  ★★★★★
                </span>
                <span>Leave us a Google review</span>
              </a>
            </div>

            <nav aria-label="Services">
              <h3>Services</h3>
              {featured.map((s) => (
                <a key={s.slug} href={`/services/${s.slug}/`}>
                  {s.title}
                </a>
              ))}
              <a className="sf-more" href="/services/">
                All services →
              </a>
            </nav>

            <nav aria-label="Company">
              <h3>Company</h3>
              <a href="/">Home</a>
              <a href="/about/">Our story</a>
              <a href="/gallery/">Project gallery</a>
              <a href="/learn/">Homeowner resources</a>
              <a href="/faqs/">Common questions</a>
              <a href="/contact/">Contact &amp; estimates</a>
            </nav>

            <nav aria-label="Service areas">
              <h3>Service areas</h3>
              <div className="sf-areas">
                {publishedLocations.map((l) => (
                  <span key={l.slug}>
                    <a href={`/locations/${l.slug}/`}>{l.city}</a>
                  </span>
                ))}
              </div>
              <a className="sf-more" href="/locations/">
                View service area →
              </a>
            </nav>

            <div className="sf-contact">
              <h3>Contact</h3>
              <ul>
                <li>
                  <Icon name="phone" />
                  <a href={site.phoneHref}>{site.phone}</a>
                </li>
                <li>
                  <Icon name="mail" />
                  <span>
                    <a href={`mailto:${site.hunterEmail}`}>
                      {site.hunterEmail}
                    </a>
                    <a href={`mailto:${site.ronEmail}`}>{site.ronEmail}</a>
                  </span>
                </li>
                <li>
                  <Icon name="pin" />
                  <span>{site.location}</span>
                </li>
                <li>
                  <Icon name="clock" />
                  <span>
                    Sun–Fri 7am–5pm
                    <br />
                    Saturday closed
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="sf-bottom">
            <span>
              © 2026 Preferred Plumbing Solutions. All rights reserved.
            </span>
            <span className="sf-badges">
              <Icon name="shield" /> Licensed &amp; insured · Free estimates
            </span>
            <span className="sf-legal">
              <a href="/privacy-policy/">Privacy</a>
              <a href="/terms-and-conditions/">Terms</a>
              <a href="https://www.kinexisdigital.com/">
                Built by Kinexis Digital
              </a>
            </span>
          </div>
        </div>
      </footer>
      <StickyMobileBar />
    </>
  );
}
