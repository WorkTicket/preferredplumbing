import { services, type Service } from "@/data/services";
import { serviceDepth } from "@/data/service-depth";
import { Icon } from "./Icon";
// Neutral plumbing art used when a card's own image would repeat in the row
// or match the page's hero image.
const fallbackArt = [
  "/assets/repair.webp",
  "/assets/tools.webp",
  "/assets/repairs-realistic.webp",
  "/assets/manifold.webp",
  "/assets/construction-model.webp",
];

export function ServiceCards({
  slugs,
  avoid,
  useServiceCutouts = false,
}: {
  slugs?: string[];
  /**
   * When set, no card repeats an image within the row or any path listed here
   * (e.g. the page's hero). Leave unset for full catalogs.
   */
  avoid?: string[];
  /** Use the dedicated transparent illustrations on the services hub. */
  useServiceCutouts?: boolean;
}) {
  const selected = slugs
    ? slugs
        .map((slug) => services.find((service) => service.slug === slug))
        .filter((s): s is Service => Boolean(s))
    : services;
  const used = new Set(avoid ?? []);
  const art = new Map<string, string>();
  for (const service of selected) {
    const own = useServiceCutouts
      ? `/Preferred-Plumbing-Service-Card-Cutouts/${service.slug}-card.webp`
      : serviceDepth[service.slug]?.asset;
    if (!avoid) {
      art.set(service.slug, own || "/assets/repairs-realistic.webp");
      continue;
    }
    let pick = own && !used.has(own) ? own : undefined;
    pick ??= fallbackArt.find((a) => !used.has(a)) ?? own;
    if (pick) used.add(pick);
    art.set(service.slug, pick ?? fallbackArt[0]);
  }
  return (
    <div className="services service-catalog">
      {selected.map((service) => (
        <article className="service" key={service.slug}>
          <div className="catalog-visual">
            <img
              src={art.get(service.slug)}
              alt={`${service.title} illustration`}
              loading="lazy"
              decoding="async"
              width={1536}
              height={1024}
            />
            <span className="service-icon">
              <Icon name={service.icon} />
            </span>
          </div>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <a href={`/services/${service.slug}/`}>
            Explore service <Icon name="arrow" />
          </a>
        </article>
      ))}
    </div>
  );
}
