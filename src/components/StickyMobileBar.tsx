import { site } from "@/data/site";
import { Icon } from "./Icon";

/** CSS-only sticky CTA — no client JS so homepage hydration stays light. */
export function StickyMobileBar() {
  return (
    <div className="mobilebar" data-visible="true">
      <a href={site.phoneHref}>
        <Icon name="phone" /> Call Preferred
      </a>
      <a href="/contact/">
        <Icon name="chat" /> Free estimate
      </a>
    </div>
  );
}
