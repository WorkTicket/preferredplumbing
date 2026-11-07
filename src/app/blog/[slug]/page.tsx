import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostCard } from "@/components/BlogPostCard";
import { BlogRichText } from "@/components/BlogRichText";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import {
  blogPosts,
  getBlogPost,
  getContentWordCount,
  getReadTimeMinutes,
  getRelatedPosts,
} from "@/data/blog";
import { site } from "@/data/site";
import { withSocialMetadata } from "@/lib/metadata";

export const dynamicParams = false;
export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

function clipDescription(text: string): string {
  const cleaned = text.replace(/\s+/g, " ").trim();
  if (cleaned.length >= 110 && cleaned.length <= 155) return cleaned;
  if (cleaned.length > 155) {
    const sliced = cleaned.slice(0, 152);
    const cut = sliced.lastIndexOf(" ");
    return `${(cut > 90 ? sliced.slice(0, cut) : sliced).trim()}…`;
  }
  const pad =
    " Owner-operated plumbing guidance for Spirit Lake and North Idaho.";
  let out = cleaned;
  while (out.length < 110) out = `${out}${pad}`.trim();
  return out.slice(0, 155);
}

function absoluteTitle(preferred: string, fallback: string): string {
  const brand = " | Preferred Plumbing";
  const base = (preferred || fallback).replace(/\s+/g, " ").trim();
  const full = base.includes("Preferred") ? base : `${base}${brand}`;
  if (full.length <= 60) return full;
  const budget = 60 - brand.length;
  const short = base.slice(0, budget - 1).replace(/\s+\S*$/, "").trim();
  return `${short || base.slice(0, budget)}${brand}`.slice(0, 60);
}

function formatDate(iso: string): string {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  return withSocialMetadata({
    title: { absolute: absoluteTitle(post.seoTitle || "", post.title) },
    description: clipDescription(post.excerpt),
    alternates: { canonical: `/blog/${slug}/` },
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  const related = getRelatedPosts(slug, 3);
  const minutes = getReadTimeMinutes(post.content);
  const url = `${site.url}/blog/${slug}/`;
  const serviceHref = post.relatedService
    ? `${post.relatedService.href.replace(/\/+$/, "")}/`
    : null;
  const areaHref = post.relatedArea
    ? `${post.relatedArea.href.replace(/\/+$/, "")}/`
    : null;

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            image: new URL(post.coverImage, site.url).toString(),
            datePublished: post.date,
            dateModified: post.date,
            wordCount: getContentWordCount(post.content),
            timeRequired: `PT${minutes}M`,
            mainEntityOfPage: url,
            author: { "@type": "Organization", name: site.name },
            publisher: {
              "@type": "Organization",
              name: site.name,
              logo: {
                "@type": "ImageObject",
                url: `${site.url}/assets/preferred-logo-truck.webp`,
              },
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: `${site.url}/`,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: `${site.url}/blog/`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: post.title,
                item: url,
              },
            ],
          },
        ]}
      />

      <section className="blog-post-hero">
        <div className="wrap">
          <div className="bread">
            <a href="/">Home</a>
            <Icon name="arrow" />
            <a href="/blog/">Blog</a>
            <Icon name="arrow" />
            <span>{post.category}</span>
          </div>
          <div className="blog-post-hero-grid">
            <div>
              <div className="blog-post-meta">
                <span className="blog-tag">{post.category}</span>
                <span>
                  {formatDate(post.date)} · {minutes} min read
                </span>
              </div>
              <h1>{post.title}</h1>
              <p className="blog-post-deck">{post.excerpt}</p>
              <div className="blog-byline">
                <img
                  src="/assets/preferred-logo-truck.webp"
                  alt=""
                  width={72}
                  height={26}
                />
                <div>
                  <strong>{site.name}</strong>
                  <small>Spirit Lake, Idaho · Owner-operated</small>
                </div>
              </div>
            </div>
            <figure className="blog-post-cover">
              <img
                src={post.coverImage}
                alt={post.coverImageAlt}
                width={1280}
                height={720}
                fetchPriority="high"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="section blog-post-body">
        <div className="wrap blog-post-layout">
          <article className="blog-prose">
            {post.content.map((block, index) =>
              block.startsWith("## ") ? (
                <h2 key={index}>{block.slice(3)}</h2>
              ) : (
                <BlogRichText key={index} text={block} />
              ),
            )}

            {(serviceHref || areaHref) && (
              <div className="blog-inline-links">
                {serviceHref && post.relatedService && (
                  <a className="btn dark" href={serviceHref}>
                    {post.relatedService.label} <Icon name="arrow" />
                  </a>
                )}
                {areaHref && post.relatedArea && (
                  <a className="btn" href={areaHref}>
                    {post.relatedArea.label} <Icon name="arrow" />
                  </a>
                )}
              </div>
            )}
          </article>

          <aside className="blog-aside" aria-label="Get help from Preferred">
            <div className="blog-aside-card">
              <div className="eyebrow">Need this done?</div>
              <h2>Talk to Preferred.</h2>
              <p>
                Owner-operated plumbing from Spirit Lake. Clear scope before work
                starts — Sun through Fri, 7am to 5pm.
              </p>
              <a className="btn" href={site.phoneHref}>
                Call {site.phone} <Icon name="phone" />
              </a>
              <a className="btn dark" href="/contact/">
                Free estimate <Icon name="arrow" />
              </a>
              <ul>
                <li>
                  <Icon name="shield" /> Licensed &amp; insured
                </li>
                <li>
                  <Icon name="users" /> Family-owned crew
                </li>
                <li>
                  <Icon name="pin" /> North Idaho &amp; nearby WA
                </li>
              </ul>
            </div>
            {serviceHref && post.relatedService && (
              <a className="blog-aside-service" href={serviceHref}>
                <span>Related service</span>
                <strong>{post.relatedService.label}</strong>
              </a>
            )}
          </aside>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <div>
            <h2>Have a project in mind?</h2>
            <p>Tell us what you need. We’ll help you work out the next step.</p>
          </div>
          <a className="btn" href="/contact/">
            Request a free estimate <Icon name="arrow" />
          </a>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section tint">
          <div className="wrap">
            <div className="sectionhead">
              <div>
                <div className="eyebrow">Keep reading</div>
                <h2>Related guides.</h2>
              </div>
              <a href="/blog/" className="btn dark">
                All guides <Icon name="arrow" />
              </a>
            </div>
            <div className="blog-grid">
              {related.map((item) => (
                <BlogPostCard key={item.slug} post={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
