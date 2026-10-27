import type { BlogPostSummary } from "@/data/blog";

export function BlogPostCard({ post }: { post: BlogPostSummary }) {
  return <article className="contact-card" style={{ display: "block" }}>
    <a href={`/blog/${post.slug}/`}>
      <img src={post.coverImage} alt={post.coverImageAlt} loading="lazy" width={1280} height={720} style={{ width: "100%", height: "auto", borderRadius: 12 }} />
      <small>{post.category} · {post.readTimeMinutes} min read</small>
      <h2>{post.title}</h2>
      <p>{post.excerpt}</p>
      <strong>Read the guide →</strong>
    </a>
  </article>;
}
