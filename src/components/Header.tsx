import { Icon } from "./Icon";
import { MobileNavToggle } from "./MobileNavToggle";
import { services } from "@/data/services";
import { site } from "@/data/site";

const NAV_ID = "site-navlinks";

export function Header() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-white focus:px-5 focus:py-3"
      >
        Skip to content
      </a>
      <div className="topline">
        <div className="wrap flex items-center justify-between">
          <span>
            <Icon name="pin" /> SPIRIT LAKE, IDAHO · FAMILY-OWNED &amp; OPERATED
          </span>
          <span>Sun–Fri 7am–5pm · Saturday closed</span>
        </div>
      </div>
      <header>
        <nav className="wrap site-nav" aria-label="Main navigation">
          <a
            href="/"
            className="brand"
            aria-label="Preferred Plumbing Solutions home"
          >
            <img
              className="brand-full"
              src="/assets/preferred-logo-truck-520.webp"
              srcSet="/assets/preferred-logo-truck-520.webp 520w, /assets/preferred-logo-truck-920.webp 920w"
              sizes="(max-width: 1100px) 180px, 220px"
              alt={site.name}
              width={520}
              height={190}
              decoding="async"
              fetchPriority="low"
            />
          </a>

          <div className="navlinks" id={NAV_ID}>
            <a href="/">Home</a>
            <div className="navdrop">
              <a className="navdrop-label" href="/services/">
                Services <Icon name="chevron" />
              </a>
              <div id="services-menu" className="mega">
                <div className="mega-top">
                  Plumbing for every part of your home.
                  <a href="/services/">All services ↗</a>
                </div>
                <div className="mega-grid">
                  {services.map((service) => (
                    <a key={service.slug} href={`/services/${service.slug}/`}>
                      <Icon name={service.icon} />
                      <span>{service.title}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <a href="/about/">About</a>
            <a href="/locations/">Locations</a>
            <a href="/blog/">Blog</a>
            <a href="/gallery/">Gallery</a>
            <a href="/contact/">Contact</a>
            <div className="navlinks-mobile-actions">
              <a className="navcall" href={site.phoneHref}>
                <Icon name="phone" />
                <span>{site.phone}</span>
              </a>
              <a className="btn nav-cta" href="/contact/">
                Free estimate <Icon name="arrow" />
              </a>
            </div>
          </div>

          <div className="nav-right">
            <a
              className="navcall"
              href={site.phoneHref}
              aria-label={`Call ${site.phone}`}
            >
              <Icon name="phone" />
              <span>
                <small>LET’S TALK PLUMBING</small>
                {site.phone}
              </span>
            </a>
            <a className="btn nav-cta" href="/contact/">
              Free estimate <Icon name="arrow" />
            </a>
          </div>

          <MobileNavToggle navId={NAV_ID} />
        </nav>
      </header>
    </>
  );
}
