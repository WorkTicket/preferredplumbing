"use client";

import { useEffect, useId, useState } from "react";

type MobileNavToggleProps = {
  navId: string;
};

const DESKTOP_MQ = "(min-width: 1241px)";

export function MobileNavToggle({ navId }: MobileNavToggleProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const backdropId = useId();

  useEffect(() => {
    const nav = document.getElementById(navId);
    if (!nav) return;

    if (menuOpen) {
      nav.classList.add("is-open");
      requestAnimationFrame(() => {
        nav.classList.add("is-visible");
      });
    } else {
      nav.classList.remove("is-visible");
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      window.setTimeout(
        () => {
          if (!nav.classList.contains("is-visible")) {
            nav.classList.remove("is-open");
          }
        },
        reduceMotion ? 0 : 220,
      );
    }
  }, [menuOpen, navId]);

  useEffect(() => {
    document.body.classList.toggle("nav-open", menuOpen);
    return () => document.body.classList.remove("nav-open");
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const onResize = () => {
      if (window.matchMedia(DESKTOP_MQ).matches) setMenuOpen(false);
    };
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      if (target.closest(`[data-nav-backdrop="${CSS.escape(backdropId)}"]`)) {
        setMenuOpen(false);
        return;
      }
      const link = target.closest(`#${CSS.escape(navId)} a`);
      if (!link) return;
      // Keep drawer open while toggling the Services accordion.
      if (link.classList.contains("navdrop-label")) return;
      setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("click", onClick);
    };
  }, [menuOpen, navId, backdropId]);

  return (
    <>
      <button
        type="button"
        className={`menu${menuOpen ? " is-open" : ""}`}
        aria-expanded={menuOpen}
        aria-controls={navId}
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="menu-bars" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>
      <button
        type="button"
        className={`nav-backdrop${menuOpen ? " is-open" : ""}`}
        data-nav-backdrop={backdropId}
        aria-label="Close navigation"
        tabIndex={menuOpen ? 0 : -1}
        hidden={!menuOpen}
      />
    </>
  );
}
