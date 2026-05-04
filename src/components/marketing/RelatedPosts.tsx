import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"
import { getRelatedPosts } from "@/lib/blog-posts"

interface RelatedPostsProps {
  /** Slug of the current post — excluded from the suggestions. */
  currentSlug: string
  /** Max suggestions to render. Defaults to 3. */
  limit?: number
}

/**
 * "Read next" block for the bottom of a blog post. Suggests posts that
 * share at least one tag with the current post, ordered by overlap
 * count then date descending. Uses the same internal-linking pattern
 * Google rewards: relevant, contextual, two-way (the linked post will
 * also link back to this one if they share tags).
 */
export default function RelatedPosts({
  currentSlug,
  limit = 3,
}: RelatedPostsProps) {
  const related = getRelatedPosts(currentSlug, limit)
  if (related.length === 0) return null

  return (
    <section
      aria-label="Related posts"
      className="mt-16 pt-12 border-t border-white/[0.06]"
    >
      <p
        className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-2"
        style={{ color: "#C9A84C" }}
      >
        Read next
      </p>
      <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#F0F0F0] tracking-tight leading-tight mb-6">
        More on this topic
      </h2>
      <ul className="grid gap-3 sm:grid-cols-3">
        {related.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group block h-full p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5"
              style={{
                borderColor: "rgba(255,255,255,0.06)",
                backgroundColor: "#0D0D0D",
              }}
            >
              <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-[#666666] mb-3">
                <Clock className="w-3 h-3" />
                {post.readMinutes} min read
              </div>
              <h3 className="font-display text-base sm:text-lg font-semibold text-[#F0F0F0] tracking-tight leading-tight mb-2">
                {post.title}
              </h3>
              <p className="text-[12px] text-[#888888] leading-relaxed mb-3 line-clamp-3">
                {post.description}
              </p>
              <span
                className="inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.18em] font-semibold transition-transform group-hover:translate-x-0.5"
                style={{ color: "#C9A84C" }}
              >
                Read post
                <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
