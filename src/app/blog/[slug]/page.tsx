import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostCard } from "@/components/BlogPostCard";
import { BlogRichText } from "@/components/BlogRichText";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { blogPosts, getBlogPost, getContentWordCount, getReadTimeMinutes, getRelatedPosts } from "@/data/blog";
import { site } from "@/data/site";
import { withSocialMetadata } from "@/lib/metadata";

export const dynamicParams = false;
export function generateStaticParams() { return blogPosts.map((post) => ({ slug: post.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  return withSocialMetadata({ title: post.seoTitle || post.title, description: post.excerpt, alternates: { canonical: `/blog/${slug}/` } });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  const related = getRelatedPosts(slug, 3);
  const minutes = getReadTimeMinutes(post.content);
  const url = `${site.url}/blog/${slug}/`;
  return <>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", headline: post.title, description: post.excerpt, image: new URL(post.coverImage, site.url).toString(), datePublished: post.date, dateModified: post.date, wordCount: getContentWordCount(post.content), timeRequired: `PT${minutes}M`, mainEntityOfPage: url, author: { "@type": "Organization", name: site.name }, publisher: { "@type": "Organization", name: site.name } }} />
    <section className="section wrap"><div className="bread"><a href="/">Home</a><Icon name="arrow" /><a href="/blog/">Blog</a><Icon name="arrow" /><span>{post.category}</span></div>
      <div className="eyebrow">{post.category} · {minutes} min read</div><h1>{post.title}</h1><p>{post.excerpt}</p>
      <img src={post.coverImage} alt={post.coverImageAlt} width={1280} height={720} style={{ width: "100%", height: "auto", borderRadius: 18, marginTop: 24 }} />
    </section>
    <section className="section tint"><div className="wrap" style={{ maxWidth: 820 }}>
      {post.content.map((block, index) => block.startsWith("## ") ? <h2 key={index}>{block.slice(3)}</h2> : <BlogRichText key={index} text={block} />)}
      <div className="cta-band" style={{ marginTop: 36 }}><div className="wrap"><div><h2>Need plumbing help?</h2><p>Get a free estimate from our owner-operated team.</p></div><a className="btn" href="/contact/">Contact Preferred <Icon name="arrow" /></a></div></div>
    </div></section>
    {related.length > 0 && <section className="section wrap"><div className="sectionhead"><div><div className="eyebrow">Keep reading</div><h2>Related articles.</h2></div></div><div className="svc-features">{related.map((item) => <BlogPostCard key={item.slug} post={item} />)}</div></section>}
  </>;
}
