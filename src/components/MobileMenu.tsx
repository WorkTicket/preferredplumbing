"use client";

import { useEffect, useId, useState } from "react";
import { Icon } from "./Icon";
import { services, type Service } from "@/data/services";
import { site } from "@/data/site";

const DESKTOP_MQ = "(min-width: 1241px)";

const CATEGORY_ORDER = [
  "Heating",
  "Water",
  "Repairs",
  "Building",
  "Remodeling",
] as const;

function groupServices(items: Service[]) {
  return CATEGORY_ORDER.map((category) => ({
    category,
    items: items.filter((service) => service.category === category),
  })).filter((group) => group.items.length > 0);
}

const groups = groupServices(services);

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/locations/", label: "Locations" },
  { href: "/blog/", label: "Blog" },
  { href: "/gallery/", label: "Gallery" },
  { href: "/contact/", label: "Contact" },
] as const;

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const panelId = useId();
  const servicesId = useId();

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-open", open);
    return () => document.body.classList.remove("mobile-menu-open");
  }, [open]);

  useEffect(() => {
    if (!open) {
      setServicesOpen(false);
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const media = window.matchMedia(DESKTOP_MQ);
    const onBreakpoint = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    media.addEventListener("change", onBreakpoint);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      media.removeEventListener("change", onBreakpoint);
    };
  }, [open]);

  return (
    <div className="mobile-menu-root">
      <button
        type="button"
        className={`mobile-menu-toggle${open ? " is-open" : ""}`}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="mobile-menu-toggle-bars" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>

      {open ? (
        <div
          id={panelId}
          className="mobile-menu-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <div className="mobile-menu-sheet">
            <div className="mobile-menu-top">
              <a
                href="/"
                className="mobile-menu-brand"
                aria-label={`${site.name} home`}
                onClick={() => setOpen(false)}
              >
                <img
                  src="/assets/preferred-logo-truck-240.webp"
                  alt=""
                  width={180}
                  height={66}
                  decoding="async"
                />
              </a>
              <button
                type="button"
                className="mobile-menu-close"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>

            <nav className="mobile-menu-nav" aria-label="Mobile">
              <a href="/" onClick={() => setOpen(false)}>
                Home
              </a>

              <div
                className={`mobile-menu-services${servicesOpen ? " is-open" : ""}`}
              >
                <button
                  type="button"
                  className="mobile-menu-services-toggle"
                  aria-expanded={servicesOpen}
                  aria-controls={servicesId}
                  onClick={() => setServicesOpen((value) => !value)}
                >
                  <span>Services</span>
                  <Icon name="chevron" />
                </button>

                <div id={servicesId} className="mobile-menu-services-panel">
                  <a
                    className="mobile-menu-services-all"
                    href="/services/"
                    onClick={() => setOpen(false)}
                  >
                    All services <Icon name="arrow" />
                  </a>
                  {groups.map((group) => (
                    <div key={group.category} className="mobile-menu-group">
                      <p className="mobile-menu-group-label">{group.category}</p>
                      <ul>
                        {group.items.map((service) => (
                          <li key={service.slug}>
                            <a
                              href={`/services/${service.slug}/`}
                              onClick={() => setOpen(false)}
                            >
                              <span
                                className="mobile-menu-service-icon"
                                aria-hidden="true"
                              >
                                <Icon name={service.icon} />
                              </span>
                              <span>{service.title}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {LINKS.filter((link) => link.href !== "/").map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mobile-menu-actions">
              <a
                className="mobile-menu-phone"
                href={site.phoneHref}
                onClick={() => setOpen(false)}
              >
                <Icon name="phone" />
                <span>{site.phone}</span>
              </a>
              <a
                className="btn mobile-menu-cta"
                href="/contact/"
                onClick={() => setOpen(false)}
              >
                Free estimate <Icon name="arrow" />
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
