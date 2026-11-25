"use client";

import { useEffect, useState } from "react";

type MobileNavToggleProps = {
  navId: string;
};

const DESKTOP_MQ = "(min-width: 1241px)";

export function MobileNavToggle({ navId }: MobileNavToggleProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const nav = document.getElementById(navId);
    if (!nav) return;
    nav.classList.toggle("is-open", menuOpen);
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

    const media = window.matchMedia(DESKTOP_MQ);
    const onBreakpoint = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false);
    };

    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      const link = target.closest(`#${CSS.escape(navId)} a`);
      if (!link) return;
      if (link.classList.contains("navdrop-label")) return;
      setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    media.addEventListener("change", onBreakpoint);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      media.removeEventListener("change", onBreakpoint);
      document.removeEventListener("click", onClick);
    };
  }, [menuOpen, navId]);

  return (
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
  );
}
