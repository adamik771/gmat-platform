/**
 * Centralised blog post metadata + related-post computation.
 *
 * Adding / updating a post: edit the POSTS array. Order is reverse-
 * chronological (newest first) — the blog index renders in this order.
 *
 * Related posts: each post has a `tags` array. Two posts are
 * "related" when they share at least one tag. Sorting tiebreaker is
 * date descending. The result is capped at 3 items.
 */

export type PostTag =
  | "founder-story"
  | "study-plan"
  | "data-insights"
  | "verbal"
  | "quant"
  | "section-guide"
  | "non-native"
  | "beginner"
  | "scoring"
  | "strategy"

export interface BlogPost {
  slug: string
  title: string
  description: string
  /** ISO date (yyyy-mm-dd). */
  date: string
  readMinutes: number
  tags: PostTag[]
}

export const POSTS: BlogPost[] = [
  {
    slug: "how-to-retake-the-gmat-after-a-low-score",
    title: "How to Retake the GMAT After a Low Score",
    description:
      "When to retake, when to walk away, the seven-day rule, the post-mortem framework, and how to plan a second attempt that actually moves the needle — without burning out before the rebooked exam date.",
    date: "2026-05-04",
    readMinutes: 11,
    tags: ["strategy", "study-plan", "scoring"],
  },
  {
    slug: "gmat-vs-gre-for-mba-admissions",
    title: "GMAT vs GRE for MBA Admissions: An Honest Decision Framework",
    description:
      "How to choose between the GMAT and the GRE for top MBA programs — what schools actually accept, where each test is harder, the score-conversion math, and the five honest scenarios for picking one over the other.",
    date: "2026-05-04",
    readMinutes: 13,
    tags: ["scoring", "strategy", "beginner"],
  },
  {
    slug: "gmat-quant-timing-strategy",
    title: "GMAT Quant Timing Strategy: How to Finish All 21 Questions",
    description:
      "The per-question budget, the bookmark rule, the soft-cap-and-move discipline, and the four-tier triage that gets you through the 45-minute Quant section without burning the clock on a single brutal question.",
    date: "2026-05-04",
    readMinutes: 12,
    tags: ["quant", "section-guide", "strategy"],
  },
  {
    slug: "first-30-days-of-gmat-prep",
    title: "The First 30 Days of GMAT Prep: A Beginner's Plan",
    description:
      "What to actually do in your first month of GMAT prep — week by week, with the diagnostic-first sequence that beats jumping straight into content. Built for working professionals starting cold.",
    date: "2026-05-03",
    readMinutes: 12,
    tags: ["beginner", "study-plan", "strategy"],
  },
  {
    slug: "gmat-prep-for-non-native-english-speakers",
    title: "GMAT Prep for Non-Native English Speakers: A Targeted Plan",
    description:
      "What works, what doesn't, and the seven specific tactics that took a non-native speaker from 565 to 735 — including the Verbal-section-specific approach native-speaker prep guides leave out.",
    date: "2026-05-03",
    readMinutes: 13,
    tags: ["non-native", "verbal", "founder-story", "strategy"],
  },
  {
    slug: "gmat-focus-vs-old-gmat-whats-changed",
    title: "GMAT Focus Edition vs the Old GMAT: What Actually Changed",
    description:
      "Section-by-section breakdown of what GMAT Focus removed, what it kept, what the new 205-805 scoring scale means in old-test terms, and how to translate any old GMAT prep into a Focus study plan.",
    date: "2026-05-03",
    readMinutes: 12,
    tags: ["section-guide", "scoring", "strategy"],
  },
  {
    slug: "gmat-reading-comprehension-passage-strategy",
    title: "GMAT Reading Comprehension: How to Read Dense Passages Fast",
    description:
      "The four passage types, the structural skim that beats line-by-line reading, the question-type taxonomy, and how non-native speakers can match native-speaker accuracy on RC.",
    date: "2026-05-03",
    readMinutes: 13,
    tags: ["verbal", "section-guide", "non-native", "strategy"],
  },
  {
    slug: "gmat-critical-reasoning-question-types-explained",
    title: "GMAT Critical Reasoning Question Types Explained",
    description:
      "All eight Critical Reasoning question types — what each one is actually asking, the trap built into each, and how to recognise the stem in five seconds.",
    date: "2026-05-03",
    readMinutes: 15,
    tags: ["verbal", "section-guide", "strategy"],
  },
  {
    slug: "gmat-data-sufficiency-strategy-guide",
    title: "GMAT Data Sufficiency: The Strategy Guide for 2026",
    description:
      "The five answer choices, the AD/BCE process, the trap that costs most students 20 points per section, and how to drill DS without burning out.",
    date: "2026-05-03",
    readMinutes: 14,
    tags: ["data-insights", "section-guide", "strategy"],
  },
  {
    slug: "gmat-data-insights-complete-guide",
    title: "GMAT Data Insights: The Complete Section Guide for 2026",
    description:
      "All five question types, timing strategy, the traps that cost most students points, and how to practice the newest section on the GMAT Focus Edition.",
    date: "2026-05-03",
    readMinutes: 14,
    tags: ["data-insights", "section-guide", "strategy"],
  },
  {
    slug: "how-to-build-a-gmat-study-plan-that-works",
    title: "How to Build a GMAT Study Plan That Actually Works",
    description:
      "Why most GMAT study plans fail, the diagnostic-first approach that actually moves your score, and a 16-week framework you can adapt to a real schedule.",
    date: "2026-05-03",
    readMinutes: 13,
    tags: ["study-plan", "strategy"],
  },
  {
    slug: "why-your-gmat-score-is-stuck",
    title: "Why Your GMAT Score Is Stuck",
    description:
      "I went from 565 to 735 in eight months. The single shift that made it possible — and why most prep advice misses it.",
    date: "2026-05-02",
    readMinutes: 9,
    tags: ["founder-story", "strategy"],
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug)
}

/**
 * Find up to `limit` posts that share at least one tag with `slug`,
 * sorted by tag-overlap count desc then by date desc. The post itself
 * is excluded.
 */
export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const source = getPostBySlug(slug)
  if (!source) return []

  const scored = POSTS.filter((p) => p.slug !== slug)
    .map((p) => ({
      post: p,
      overlap: p.tags.filter((t) => source.tags.includes(t)).length,
    }))
    .filter((s) => s.overlap > 0)
    .sort((a, b) => {
      if (b.overlap !== a.overlap) return b.overlap - a.overlap
      // tiebreaker: most recent first
      return b.post.date.localeCompare(a.post.date)
    })

  return scored.slice(0, limit).map((s) => s.post)
}
