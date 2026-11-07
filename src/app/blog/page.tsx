import type { Metadata } from "next";
import { BlogPostCard } from "@/components/BlogPostCard";
import { Icon } from "@/components/Icon";
import { getPostsByDate, toBlogSummary } from "@/data/blog";
import { withSocialMetadata } from "@/lib/metadata";

export const metadata: Metadata = withSocialMetadata({
  title: { absolute: "Plumbing Tips for North Idaho | Preferred Plumbing" },
  description:
    "Practical plumbing, water heater, radiant heat, drain, sewer, and remodel guides for Spirit Lake and North Idaho homeowners.",
  alternates: { canonical: "/blog/" },
});

export default function BlogPage() {
  return <>
    <section className="pagehero"><div className="wrap">
      <div className="bread"><a href="/">Home</a><Icon name="arrow" /><span>Blog</span></div>
      <div className="hero-grid"><div><div className="eyebrow">Plumbing tips &amp; guides</div><h1>Useful answers.<br /><span className="cyan">Built for North Idaho.</span></h1><p>Practical advice on repairs, water heaters, drains, heating systems, and planning your next project.</p></div>
      <img className="cutout" src="/Preferred-Plumbing-Hero-Images/about.webp" alt="North Idaho plumbing guides" width={1536} height={1024} /></div>
    </div></section>
    <section className="section wrap"><div className="sectionhead"><div><div className="eyebrow">Latest articles</div><h2>Plan with better information.</h2></div></div>
      <div className="svc-features">{getPostsByDate().map((post) => <BlogPostCard key={post.slug} post={toBlogSummary(post)} />)}</div>
    </section>
  </>;
}
