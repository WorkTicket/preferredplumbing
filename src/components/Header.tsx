"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Icon } from "./Icon";
import { services } from "@/data/services";
import { site } from "@/data/site";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<"services" | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  useEffect(() => {
    function outside(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) setOpenMenu(null);
    }
    function escape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      if (openMenu)
        headerRef.current
          ?.querySelector<HTMLButtonElement>(
            `[aria-controls="${openMenu}-menu"]`,
          )
          ?.focus();
      setOpenMenu(null);
      setMobileOpen(false);
    }
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("keydown", escape);
    };
  }, [openMenu]);
  const close = () => {
    setOpenMenu(null);
    setMobileOpen(false);
  };
  const active = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname.startsWith(href.replace(/\/$/, ""));
  const navLink = (href: string, title: string) => (
    <a
      href={href}
      onClick={close}
      className={active(href) ? "active" : undefined}
      aria-current={active(href) ? "page" : undefined}
    >
      {title}
    </a>
  );
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
      <header ref={headerRef}>
        <nav
          className="wrap flex items-center justify-between"
          aria-label="Main navigation"
        >
          <a
            href="/"
            className="brand"
            aria-label="Preferred Plumbing Solutions home"
          >
            <img
              className="brand-full"
              src={site.logo}
              alt={site.name}
              width={1200}
              height={438}
            />
          </a>
          <div className={`navlinks ${mobileOpen ? "open" : ""}`} id="navlinks">
            {navLink("/", "Home")}
            <div className={`navdrop ${openMenu === "services" ? "open" : ""}`}>
              <button
                type="button"
                aria-expanded={openMenu === "services"}
                aria-controls="services-menu"
                onClick={() =>
                  setOpenMenu(openMenu === "services" ? null : "services")
                }
              >
                Services <Icon name="chevron" />
              </button>
              <div id="services-menu" className="mega">
                <div className="mega-top">
                  Plumbing for every part of your home.
                  <a href="/services/" onClick={close}>
                    All services ↗
                  </a>
                </div>
                <div className="mega-grid">
                  {services.map((service) => (
                    <a
                      key={service.slug}
                      href={`/services/${service.slug}/`}
                      onClick={close}
                    >
                      <Icon name={service.icon} />
                      <span>{service.title}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            {navLink("/about/", "About")}
            {navLink("/locations/", "Locations")}
            {navLink("/gallery/", "Gallery")}
            {navLink("/blog/", "Blog")}
            {navLink("/contact/", "Contact")}
          </div>
          <div className="nav-right">
            <a className="navcall" href={site.phoneHref}>
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
          <button
            type="button"
            className="menu"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            aria-controls="navlinks"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            ☰
          </button>
        </nav>
      </header>
    </>
  );
}
