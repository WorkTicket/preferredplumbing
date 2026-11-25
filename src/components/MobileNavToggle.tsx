"use client";

import { useEffect, useState } from "react";

type MobileNavToggleProps = {
  navId: string;
};

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
    const onResize = () => {
      if (window.matchMedia("(min-width: 1241px)").matches) setMenuOpen(false);
    };
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      if (target.closest(`#${CSS.escape(navId)} a`)) setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
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
