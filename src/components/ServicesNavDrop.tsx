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

export function ServicesNavDrop() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number | null>(null);

  const clearCloseTimer = () => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const openMenu = () => {
    clearCloseTimer();
    setOpen(true);
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimer.current = window.setTimeout(() => setOpen(false), 140);
  };

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, [open]);

  useEffect(() => () => clearCloseTimer(), []);

  return (
    <div
      className={`navdrop${open ? " is-open" : ""}`}
      ref={rootRef}
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
    >
      <div className="navdrop-trigger">
        <a
          className="navdrop-label"
          href="/services/"
          aria-expanded={open}
          aria-controls={menuId}
          onFocus={openMenu}
        >
          Services
          <Icon name="chevron" />
        </a>
        <button
          type="button"
          className="navdrop-mobile-toggle"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Collapse services menu" : "Expand services menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name="chevron" />
        </button>
      </div>

      <div
        id={menuId}
        className="mega"
        role="region"
        aria-label="Services menu"
        onMouseEnter={openMenu}
        onFocusCapture={openMenu}
      >
        <div className="mega-top">
          <div>
            <strong>Plumbing for every part of your home</strong>
            <p>Explore the full Preferred lineup, from urgent repairs to radiant heat.</p>
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
  );
}
