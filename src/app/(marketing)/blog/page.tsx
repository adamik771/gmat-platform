import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"
import SectionWrapper from "@/components/shared/SectionWrapper"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "GMAT prep strategy, mistake patterns, and score-improvement frameworks from the founder of Zakarian GMAT.",
}

interface PostMeta {
  slug: string
  title: string
  description: string
  date: string
  readMinutes: number
}

const posts: PostMeta[] = [
  {
    slug: "how-to-retake-the-gmat-after-a-low-score",
    title: "How to Retake the GMAT After a Low Score",
    description:
      "When to retake, when to walk away, the seven-day rule, the post-mortem framework, and how to plan a second attempt that actually moves the needle.",
    date: "2026-05-04",
    readMinutes: 11,
  },
  {
    slug: "gmat-vs-gre-for-mba-admissions",
    title: "GMAT vs GRE for MBA Admissions: An Honest Decision Framework",
    description:
      "What schools actually accept, where each test is harder, the score-conversion math, and the five honest scenarios for picking one over the other.",
    date: "2026-05-04",
    readMinutes: 13,
  },
  {
    slug: "gmat-quant-timing-strategy",
    title: "GMAT Quant Timing Strategy: How to Finish All 21 Questions",
    description:
      "The per-question budget, the bookmark rule, the soft-cap-and-move discipline, and the four-tier triage that gets you through the 45-minute Quant section.",
    date: "2026-05-04",
    readMinutes: 12,
  },
  {
    slug: "first-30-days-of-gmat-prep",
    title: "The First 30 Days of GMAT Prep: A Beginner's Plan",
    description:
      "What to actually do in your first month of GMAT prep — week by week, with the diagnostic-first sequence that beats jumping straight into content. Built for working professionals starting cold.",
    date: "2026-05-03",
    readMinutes: 12,
  },
  {
    slug: "gmat-prep-for-non-native-english-speakers",
    title: "GMAT Prep for Non-Native English Speakers: A Targeted Plan",
    description:
      "What works, what doesn't, and the seven specific tactics that took a non-native speaker from 565 to 735 — including the Verbal-section-specific approach native-speaker prep guides leave out.",
    date: "2026-05-03",
    readMinutes: 13,
  },
  {
    slug: "gmat-focus-vs-old-gmat-whats-changed",
    title: "GMAT Focus Edition vs the Old GMAT: What Actually Changed",
    description:
      "Section-by-section breakdown of what GMAT Focus removed, what it kept, what the new 205-805 scoring scale means in old-test terms, and how to translate any old GMAT prep into a Focus study plan.",
    date: "2026-05-03",
    readMinutes: 12,
  },
  {
    slug: "gmat-reading-comprehension-passage-strategy",
    title: "GMAT Reading Comprehension: How to Read Dense Passages Fast",
    description:
      "The four passage types, the structural skim that beats line-by-line reading, the question-type taxonomy, and how non-native speakers can match native-speaker accuracy on RC.",
    date: "2026-05-03",
    readMinutes: 13,
  },
  {
    slug: "gmat-critical-reasoning-question-types-explained",
    title: "GMAT Critical Reasoning Question Types Explained",
    description:
      "All eight Critical Reasoning question types — what each one is actually asking, the trap built into each, and how to recognise the stem in five seconds.",
    date: "2026-05-03",
    readMinutes: 15,
  },
  {
    slug: "gmat-data-sufficiency-strategy-guide",
    title: "GMAT Data Sufficiency: The Strategy Guide for 2026",
    description:
      "The five answer choices, the AD/BCE process, the trap that costs most students 20 points per section, and how to drill DS without burning out.",
    date: "2026-05-03",
    readMinutes: 14,
  },
  {
    slug: "gmat-data-insights-complete-guide",
    title: "GMAT Data Insights: The Complete Section Guide for 2026",
    description:
      "All five question types, timing strategy, the traps that cost most students points, and how to practice the newest section on the GMAT Focus Edition.",
    date: "2026-05-03",
    readMinutes: 14,
  },
  {
    slug: "how-to-build-a-gmat-study-plan-that-works",
    title: "How to Build a GMAT Study Plan That Actually Works",
    description:
      "Why most GMAT study plans fail, the diagnostic-first approach that actually moves your score, and a 16-week framework you can adapt to a real schedule.",
    date: "2026-05-03",
    readMinutes: 13,
  },
  {
    slug: "why-your-gmat-score-is-stuck",
    title: "Why Your GMAT Score Is Stuck",
    description:
      "I went from 565 to 735 in eight months. The single shift that made it possible — and why most prep advice misses it.",
    date: "2026-05-02",
    readMinutes: 9,
  },
]

export default function BlogIndexPage() {
  return (
    <div style={{ backgroundColor: "#0A0A0A" }}>
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 90% 55% at 50% -5%, rgba(201,168,76,0.16) 0%, transparent 60%)",
          }}
          aria-hidden
        />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-4"
            style={{ color: "#C9A84C" }}
          >
            Writing
          </p>
          <h1 className="font-display text-4xl sm:text-6xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.02] mb-5">
            Notes on{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              the climb.
            </span>
          </h1>
          <p className="text-[16px] text-[#C0C0C0] leading-relaxed max-w-xl mx-auto">
            Strategy, mistake patterns, and score-improvement frameworks. From
            the founder of Zakarian GMAT.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <ul className="space-y-3 max-w-3xl mx-auto">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/blog/${p.slug}`}
                className="group block p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  borderColor: "rgba(255,255,255,0.06)",
                  backgroundColor: "#0D0D0D",
                }}
              >
                <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-[#888888] mb-3">
                  <span className="tabular-nums">{p.date}</span>
                  <span className="text-[#444444]">·</span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    {p.readMinutes} min read
                  </span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-tight mb-2">
                  {p.title}
                </h2>
                <p className="text-[14px] text-[#C0C0C0] leading-relaxed mb-4 max-w-xl">
                  {p.description}
                </p>
                <span
                  className="inline-flex items-center gap-1.5 text-[12px] uppercase tracking-[0.18em] font-semibold transition-transform group-hover:translate-x-0.5"
                  style={{ color: "#C9A84C" }}
                >
                  Read post
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </SectionWrapper>
    </div>
  )
}
