"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { Icon } from "./Icon";

export function StickyMobileBar() {
  const [heroPassed, setHeroPassed] = useState(false);
  const [footerNear, setFooterNear] = useState(false);

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>("main .hero, main .pagehero");
    const footer = document.querySelector<HTMLElement>(".site-footer");

    if (!hero) setHeroPassed(true);

    const heroObserver = hero
      ? new IntersectionObserver(([entry]) => {
          setHeroPassed(
            !entry.isIntersecting && entry.boundingClientRect.bottom <= 0,
          );
        })
      : null;

    const footerObserver = footer
      ? new IntersectionObserver(
          ([entry]) => setFooterNear(entry.isIntersecting),
          { rootMargin: "0px 0px 96px 0px" },
        )
      : null;

    if (hero && heroObserver) heroObserver.observe(hero);
    if (footer && footerObserver) footerObserver.observe(footer);

    return () => {
      heroObserver?.disconnect();
      footerObserver?.disconnect();
    };
  }, []);

  const visible = heroPassed && !footerNear;

  return (
    <div
      className="mobilebar"
      data-visible={visible ? "true" : "false"}
      aria-hidden={!visible}
    >
      <a href={site.phoneHref} tabIndex={visible ? 0 : -1}>
        <Icon name="phone" /> Call Preferred
      </a>
      <a href="/contact/" tabIndex={visible ? 0 : -1}>
        <Icon name="chat" /> Free estimate
      </a>
    </div>
  );
}
