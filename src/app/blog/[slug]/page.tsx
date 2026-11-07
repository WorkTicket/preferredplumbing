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
      <section className="section wrap">
        <div className="bread">
          <a href="/">Home</a>
          <Icon name="arrow" />
          <a href="/blog/">Blog</a>
          <Icon name="arrow" />
          <span>{post.category}</span>
        </div>
        <div className="eyebrow">
          {post.category} · {minutes} min read
        </div>
        <h1>{post.title}</h1>
        <p>{post.excerpt}</p>
        <img
          src={post.coverImage}
          alt={post.coverImageAlt}
          width={1280}
          height={720}
          style={{
            width: "100%",
            height: "auto",
            borderRadius: 18,
            marginTop: 24,
          }}
        />
      </section>
      <section className="section tint">
        <div className="wrap" style={{ maxWidth: 820 }}>
          {post.content.map((block, index) =>
            block.startsWith("## ") ? (
              <h2 key={index}>{block.slice(3)}</h2>
            ) : (
              <BlogRichText key={index} text={block} />
            ),
          )}
          {serviceHref && post.relatedService && (
            <p style={{ marginTop: 28 }}>
              <a className="btn dark" href={serviceHref}>
                {post.relatedService.label} <Icon name="arrow" />
              </a>
            </p>
          )}
        </div>
      </section>
      <section className="cta-band">
        <div className="wrap">
          <div>
            <h2>Need plumbing help?</h2>
            <p>Get a free estimate from our owner-operated team.</p>
          </div>
          <a className="btn" href="/contact/">
            Contact Preferred <Icon name="arrow" />
          </a>
        </div>
      </section>
      {related.length > 0 && (
        <section className="section wrap">
          <div className="sectionhead">
            <div>
              <div className="eyebrow">Keep reading</div>
              <h2>Related articles.</h2>
            </div>
          </div>
          <div className="svc-features">
            {related.map((item) => (
              <BlogPostCard key={item.slug} post={item} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
