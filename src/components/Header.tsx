import { Icon } from "./Icon";
import { MobileMenu } from "./MobileMenu";
import { ServicesNavDrop } from "./ServicesNavDrop";
import { site } from "@/data/site";

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
              src="/assets/preferred-logo-truck-240.webp"
              srcSet="/assets/preferred-logo-truck-240.webp 240w"
              sizes="180px"
              alt={site.name}
              width={240}
              height={88}
              decoding="async"
              fetchPriority="low"
            />
          </a>

          <div className="navlinks">
            <a href="/">Home</a>
            <ServicesNavDrop />
            <a href="/about/">About</a>
            <a href="/locations/">Locations</a>
            <a href="/blog/">Blog</a>
            <a href="/gallery/">Gallery</a>
            <a href="/contact/">Contact</a>
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

          <MobileMenu />
        </nav>
      </header>
    </>
  );
}
