"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Icon } from "./Icon";
import { services, type Service } from "@/data/services";

const CATEGORY_ORDER = [
  "Heating",
  "Water",
  "Repairs",
  "Building",
  "Remodeling",
] as const;

const OPEN_DELAY_MS = 40;
const CLOSE_DELAY_MS = 160;

function groupServices(items: Service[]) {
  const groups: { category: string; items: Service[] }[] = CATEGORY_ORDER.map(
    (category) => ({
      category,
      items: items.filter((service) => service.category === category),
    }),
  ).filter((group) => group.items.length > 0);

  const known = new Set<string>(CATEGORY_ORDER);
  const leftovers = items.filter((service) => !known.has(service.category));
  if (leftovers.length) {
    groups.push({ category: "More", items: leftovers });
  }
  return groups;
}

const groups = groupServices(services);

/** Desktop-only Services mega menu. Mobile uses MobileMenu. */
export function ServicesNavDrop() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const openTimer = useRef<number | null>(null);
  const closeTimer = useRef<number | null>(null);

  const clearTimers = () => {
    if (openTimer.current !== null) {
      window.clearTimeout(openTimer.current);
      openTimer.current = null;
    }
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const openMenu = () => {
    clearTimers();
    setOpen(true);
  };

  const closeMenu = () => {
    clearTimers();
    setOpen(false);
  };

  useEffect(() => () => clearTimers(), []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      event.preventDefault();
      closeMenu();
      rootRef.current?.querySelector<HTMLElement>(".navdrop-label")?.focus();
    };

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) closeMenu();
    };

    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <div
      className={`navdrop${open ? " is-open" : ""}`}
      ref={rootRef}
      onMouseEnter={() => {
        clearTimers();
        openTimer.current = window.setTimeout(() => setOpen(true), OPEN_DELAY_MS);
      }}
      onMouseLeave={() => {
        clearTimers();
        closeTimer.current = window.setTimeout(
          () => setOpen(false),
          CLOSE_DELAY_MS,
        );
      }}
    >
      <a
        className="navdrop-label"
        href="/services/"
        aria-expanded={open}
        aria-controls={menuId}
        aria-haspopup="true"
        onFocus={openMenu}
      >
        <span>Services</span>
        <Icon name="chevron" />
      </a>

      <div
        id={menuId}
        className="mega"
        role="region"
        aria-label="Services menu"
        aria-hidden={!open}
        onFocusCapture={openMenu}
      >
        <div className="mega-inner">
          <div className="mega-top">
            <div>
              <strong>Plumbing for every part of your home</strong>
              <p>
                Explore the full Preferred lineup, from urgent repairs to
                radiant heat.
              </p>
            </div>
            <a className="mega-all" href="/services/">
              All services <Icon name="arrow" />
            </a>
          </div>

          <div className="mega-groups">
            {groups.map((group) => (
              <div className="mega-group" key={group.category}>
                <p className="mega-group-label">{group.category}</p>
                <ul className="mega-list">
                  {group.items.map((service) => (
                    <li key={service.slug}>
                      <a href={`/services/${service.slug}/`}>
                        <span className="mega-icon" aria-hidden="true">
                          <Icon name={service.icon} />
                        </span>
                        <span className="mega-link-text">{service.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mega-foot">
            <a href="/contact/">Free estimate</a>
            <a href="tel:2082903889">Call 208-290-3889</a>
          </div>
        </div>
      </div>
    </div>
  );
}
