import type { BlogPostSummary } from "@/data/blog";

function formatDate(iso: string): string {
  const date = new Date(`${iso}T12:00:00`);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function BlogPostCard({
  post,
  featured = false,
}: {
  post: BlogPostSummary;
  featured?: boolean;
}) {
  return (
    <article className={`blog-card${featured ? " blog-card-featured" : ""}`}>
      <a href={`/blog/${post.slug}/`} className="blog-card-link">
        <div className="blog-card-media">
          <img
            src={post.coverImage}
            alt={post.coverImageAlt}
            loading={featured ? "eager" : "lazy"}
            width={1280}
            height={720}
          />
        </div>
        <div className="blog-card-body">
          <div className="blog-card-meta">
            <span className="blog-tag">{post.category}</span>
            <span>
              {formatDate(post.date)} · {post.readTimeMinutes} min read
            </span>
          </div>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
          <span className="blog-card-cta">Read the guide →</span>
        </div>
      </a>
    </article>
  );
}
