import type { Metadata } from "next";
import { BlogPostCard } from "@/components/BlogPostCard";
import { Icon } from "@/components/Icon";
import { getPostsByDate, toBlogSummary } from "@/data/blog";
import { site } from "@/data/site";
import { withSocialMetadata } from "@/lib/metadata";

export const metadata: Metadata = withSocialMetadata({
  title: {
    absolute: "Plumbing Tips for North Idaho | Preferred Plumbing Solutions",
  },
  description:
    "Practical plumbing, water heater, radiant heat, drain, sewer, and remodel guides for Spirit Lake and North Idaho homeowners.",
  alternates: { canonical: "/blog/" },
});

const topics = [
  { label: "Water heaters", href: "/services/water-heaters/" },
  { label: "Heated driveways", href: "/services/heated-driveways/" },
  { label: "Radiant heat", href: "/services/radiant-heat/" },
  { label: "Sewer & drains", href: "/services/sewer-line/" },
  { label: "Emergency", href: "/services/emergency/" },
  { label: "New construction", href: "/services/new-construction/" },
] as const;

export default function BlogPage() {
  const posts = getPostsByDate().map(toBlogSummary);
  const [featured, ...rest] = posts;

  return (
    <>
      <section className="pagehero blog-index-hero">
        <div className="wrap">
          <div className="bread">
            <a href="/">Home</a>
            <Icon name="arrow" />
            <span>Blog</span>
          </div>
          <div className="hero-grid">
            <div>
              <div className="eyebrow">Field guides from the truck</div>
              <h1>
                Plumbing advice
                <br />
                <span className="cyan">for North Idaho homes.</span>
              </h1>
              <p>
                Straight answers on repairs, water heaters, radiant heat, drains,
                and winter plumbing — written from Spirit Lake jobs, not generic
                national copy.
              </p>
              <div className="actions">
                <a className="btn" href="#articles">
                  Browse guides <Icon name="arrow" />
                </a>
                <a className="btn dark" href={site.phoneHref}>
                  Call {site.phone} <Icon name="phone" />
                </a>
              </div>
            </div>
            <img
              className="cutout"
              src="/Preferred-Plumbing-Hero-Images/about.webp"
              alt="Preferred Plumbing tools and copper fittings"
              width={1536}
              height={1024}
            />
          </div>
        </div>
      </section>

      <section className="hub-trust" aria-label="Why these guides">
        <div className="wrap">
          <ul>
            {(
              [
                ["shield", "Owner-operated crew", "Written from real North Idaho jobs"],
                ["clock", "Sun–Fri, 7am–5pm", "Call when a guide turns into a job"],
                ["check", "Local climate focus", "Freeze depth, hard water, lake winters"],
                ["pin", "Spirit Lake based", "Serving the Panhandle and nearby WA"],
              ] as const
            ).map(([icon, title, note]) => (
              <li key={title}>
                <Icon name={icon} />
                <span>
                  <b>{title}</b>
                  <small>{note}</small>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section wrap" id="articles">
        <div className="sectionhead">
          <div>
            <div className="eyebrow">Latest from Preferred</div>
            <h2>Guides worth reading.</h2>
          </div>
          <a className="btn dark" href="/contact/">
            Free estimate <Icon name="arrow" />
          </a>
        </div>

        <div className="blog-topics" aria-label="Popular topics">
          {topics.map((topic) => (
            <a key={topic.href} href={topic.href}>
              {topic.label}
            </a>
          ))}
        </div>

        {featured && (
          <div className="blog-featured">
            <BlogPostCard post={featured} featured />
          </div>
        )}

        <div className="blog-grid">
          {rest.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <div>
            <div className="eyebrow cyan">Ready for a real answer on site?</div>
            <h2>Talk with Preferred.</h2>
            <p>
              Tell us what failed, where you are, and what timing you need. Clear
              scope before work starts.
            </p>
          </div>
          <div className="actions">
            <a className="btn" href="/contact/">
              Request a free estimate <Icon name="arrow" />
            </a>
            <a className="btn white" href={site.phoneHref}>
              {site.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
