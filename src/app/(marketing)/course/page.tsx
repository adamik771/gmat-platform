import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  BookOpen,
  Target,
  ClipboardList,
  BarChart3,
  AlertCircle,
  Users,
} from "lucide-react"
import SectionWrapper from "@/components/shared/SectionWrapper"
import { getAllChapters, getContentStats } from "@/lib/content"
import CurriculumTopics from "./CurriculumTopics"

export const metadata: Metadata = {
  title: "Course",
  alternates: { canonical: "/course" },
  description:
    "A complete GMAT prep system. One guided path through 50+ chapters.",
}

// The guided path, phase by phase. Each phase lists the slugs of a few
// representative chapters; their display titles are derived from the real
// curriculum at render time so this section can never drift from the
// product (CHAPTER_PATH_ORDER in src/lib/content.ts is the actual order).
const PHASES: Array<{
  num: string
  title: string
  sections: string
  description: string
  exampleSlugs: string[]
}> = [
  {
    num: "01",
    title: "Foundations first",
    sections: "Quant · Verbal · DI",
    description:
      "The arithmetic and section fundamentals everything else builds on — designed to ease you in even with a weaker math background.",
    exampleSlugs: [
      "quant-05-order-and-signed-numbers",
      "quant-06-fractions-decimals",
      "quant-07-gcf-lcm-units-digits",
      "verbal-01-foundations",
      "di-foundations",
    ],
  },
  {
    num: "02",
    title: "The strategy toolkit",
    sections: "Quant",
    description:
      "Backsolving, plugging in numbers, estimation, answer-choice tactics — the quick-win methods that turn algebra into arithmetic.",
    exampleSlugs: [
      "quant-01-backsolving",
      "quant-02-plugging-in-numbers",
      "quant-03-estimation",
      "quant-04-answer-choice-tactics",
    ],
  },
  {
    num: "03",
    title: "Core topics, three sections in rotation",
    sections: "Quant · Verbal · DI",
    description:
      "A couple of Quant chapters, then Verbal, then Data Insights — every section builds in parallel instead of months apart.",
    exampleSlugs: [
      "quant-13-linear-equations-systems",
      "quant-19-percents",
      "verbal-03-cr-assumption",
      "data-sufficiency",
      "table-analysis",
      "quant-21-rate-time-distance",
    ],
  },
  {
    num: "04",
    title: "Advanced ground and trap immunity",
    sections: "Quant · Verbal · DI",
    description:
      "Counting, probability, boldface, the answer-trap chapters — the second-tier patterns that separate a 645 from a 705.",
    exampleSlugs: [
      "quant-25-permutations-combinations",
      "quant-27-probability",
      "verbal-10-cr-boldface",
      "verbal-20-rc-answer-traps",
      "multi-source-reasoning",
    ],
  },
  {
    num: "05",
    title: "Timing and mixed pressure",
    sections: "Quant · Verbal · DI",
    description:
      "Once the content is in, train the clock: per-section pacing frameworks and mixed sets under real exam pressure.",
    exampleSlugs: ["quant-30-timing", "verbal-21-mixed-timing", "di-timing-mixed"],
  },
]

const weeks = [
  { week: "Week 1–2", focus: "Baseline + Mindset" },
  { week: "Week 3–5", focus: "Quant deep dive" },
  { week: "Week 6–7", focus: "Verbal precision" },
  { week: "Week 8", focus: "Data Insights" },
  { week: "Week 9–11", focus: "Mixed practice + error review" },
  { week: "Week 12–13", focus: "Mock exams + debrief" },
  { week: "Week 14–15", focus: "Targeted weak spots" },
  { week: "Week 16", focus: "Final week protocol" },
]

export default function CoursePage() {
  const stats = getContentStats()

  // Resolve each phase's example slugs to live chapter titles so the
  // curriculum section always reflects the real guided path.
  const titleBySlug = new Map(getAllChapters().map((c) => [c.slug, c.title]))
  const modules = PHASES.map((phase) => ({
    num: phase.num,
    title: phase.title,
    section: phase.sections,
    duration: `${phase.exampleSlugs.length}+ chapters`,
    description: phase.description,
    topics: phase.exampleSlugs
      .map((slug) => titleBySlug.get(slug))
      .filter((t): t is string => !!t),
  }))

  const included = [
    {
      icon: BookOpen,
      title: "50+ research-backed chapters",
      description:
        "Reading-first curriculum with in-chapter checks and graded problem sets. No video filler — built to be worked through, not watched.",
    },
    {
      icon: Target,
      title: `${stats.totalQuestions} original practice questions`,
      description: "Original questions tagged by type, topic, and difficulty.",
    },
    {
      icon: ClipboardList,
      title: "Mock exams",
      description: "Full-length timed mocks with detailed debrief tools.",
    },
    {
      icon: AlertCircle,
      title: "Error log system",
      description: "Built-in mistake tracker with pattern analysis.",
    },
    {
      icon: BarChart3,
      title: "Analytics dashboard",
      description: "Score trends, accuracy by topic, pacing metrics.",
    },
    {
      icon: Users,
      title: "1:1 Coaching (select plans)",
      description: "Weekly sessions with Adam. Not an outsourced tutor.",
    },
  ]

  return (
    <div style={{ backgroundColor: "#0A0A0A" }}>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 90% 55% at 50% -5%, rgba(201,168,76,0.16) 0%, transparent 60%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 55% 40% at 85% 25%, rgba(201,168,76,0.06) 0%, transparent 60%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 pointer-events-none bg-grain opacity-[0.035] mix-blend-overlay"
          aria-hidden
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-5"
              style={{ color: "#C9A84C" }}
            >
              Platform
            </p>
            <h1 className="font-display text-4xl sm:text-6xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.02] mb-6">
              A complete prep{" "}
              <span className="font-display-italic" style={{ color: "#C9A84C" }}>
                system.
              </span>
              <br />
              <span className="text-[#888888]">Not a collection of videos.</span>
            </h1>
            <p className="text-[17px] sm:text-[18px] text-[#C0C0C0] leading-relaxed max-w-2xl">
              One guided path through 50+ chapters, built around how the GMAT
              actually tests you. Each chapter connects to the next. Every
              mistake feeds into the system.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/sample-chapter"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[13px] font-semibold border transition-all duration-200 hover:opacity-90"
                style={{
                  borderColor: "rgba(201,168,76,0.32)",
                  color: "#C9A84C",
                  backgroundColor: "rgba(201,168,76,0.04)",
                }}
              >
                <BookOpen className="w-3.5 h-3.5" />
                Read a sample chapter
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <span className="text-[12px] text-[#666666]">
                Two full readings from the Critical Reasoning chapter, no signup.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <SectionWrapper variant="darker">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-3"
            style={{ color: "#C9A84C" }}
          >
            Curriculum
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05] mb-4">
            One guided path. Five{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              phases.
            </span>
          </h2>
          <p className="text-[15px] text-[#C0C0C0] leading-relaxed">
            Foundations first, strategy early, the three sections built in
            rotation — easier chapters in, advanced and timing work last. A
            real sequence, built to compound.
          </p>
        </div>

        <div className="space-y-4">
          {modules.map((mod) => (
            <div
              key={mod.num}
              className="group relative p-7 rounded-2xl border border-white/[0.08] bg-[#111111] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.16] hover:bg-[#141414] hover:shadow-[0_10px_40px_-12px_rgba(201,168,76,0.15)]"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                <div className="flex items-start gap-5 flex-1">
                  <span
                    className="font-display text-3xl font-semibold flex-shrink-0 tabular-nums leading-none mt-0.5"
                    style={{ color: "rgba(201,168,76,0.55)" }}
                    aria-hidden
                  >
                    {mod.num}
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
                      <h3 className="font-display text-lg font-semibold text-[#F0F0F0] tracking-tight">
                        {mod.title}
                      </h3>
                      <span
                        className="px-2 py-0.5 rounded text-[11px] font-semibold tracking-wide"
                        style={{
                          backgroundColor: "rgba(201,168,76,0.08)",
                          color: "#C9A84C",
                        }}
                      >
                        {mod.section}
                      </span>
                      <span className="text-[11px] text-[#555555] tracking-wide">
                        {mod.duration}
                      </span>
                    </div>
                    <p className="text-[15px] text-[#C0C0C0] leading-relaxed mb-4">
                      {mod.description}
                    </p>
                    <CurriculumTopics topics={mod.topics} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Study timeline */}
      <SectionWrapper>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-3"
              style={{ color: "#C9A84C" }}
            >
              Timeline
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05] mb-4">
              Sixteen weeks, written for{" "}
              <span className="font-display-italic" style={{ color: "#C9A84C" }}>
                real
              </span>{" "}
              schedules.
            </h2>
            <p className="text-[15px] text-[#C0C0C0] leading-relaxed">
              Designed for 90 min/day, 5 days/week. Adapt to your calendar, not the other
              way around.
            </p>
          </div>

          <div className="space-y-2.5">
            {weeks.map((w, i) => (
              <div
                key={w.week}
                className="group flex items-center gap-5 p-5 rounded-2xl border border-white/[0.06] bg-[#0D0D0D] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.14] hover:bg-[#111111] hover:shadow-[0_10px_40px_-12px_rgba(201,168,76,0.12)]"
              >
                <span
                  className="font-display text-[11px] font-semibold tabular-nums flex-shrink-0"
                  style={{ color: "rgba(201,168,76,0.55)" }}
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div
                  className="h-px flex-1 max-w-[48px]"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(201,168,76,0.35), transparent)",
                  }}
                  aria-hidden
                />
                <span className="text-[11px] uppercase tracking-[0.18em] text-[#555555] w-28 flex-shrink-0 font-semibold">
                  {w.week}
                </span>
                <span className="text-[15px] text-[#C0C0C0] leading-relaxed">
                  {w.focus}
                </span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* What's included */}
      <SectionWrapper variant="darker">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-3"
            style={{ color: "#C9A84C" }}
          >
            Included
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05] mb-4">
            Everything in the{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              platform.
            </span>
          </h2>
          <p className="text-[15px] text-[#C0C0C0] leading-relaxed">
            Curriculum, question bank, analytics, error log, coaching — one environment,
            built to reinforce itself.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {included.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="group relative p-7 rounded-2xl border border-white/[0.08] bg-[#111111] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.16] hover:bg-[#141414] hover:shadow-[0_10px_40px_-12px_rgba(201,168,76,0.18)]"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-105"
                  style={{ backgroundColor: "rgba(201,168,76,0.1)" }}
                >
                  <Icon className="w-5 h-5" style={{ color: "#C9A84C" }} />
                </div>
                <h3 className="font-display text-lg font-semibold text-[#F0F0F0] mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-[14px] text-[#888888] leading-relaxed">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </SectionWrapper>

      {/* Final CTA */}
      <section
        className="relative py-28 overflow-hidden"
        style={{ backgroundColor: "#0A0A0A" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 70% at 50% 100%, rgba(201,168,76,0.14) 0%, transparent 65%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 pointer-events-none bg-grain opacity-[0.03] mix-blend-overlay"
          aria-hidden
        />
        <div className="relative max-w-3xl mx-auto text-center px-4">
          <h2 className="font-display text-3xl sm:text-5xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05] mb-5">
            Ready to{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              begin?
            </span>
          </h2>
          <p className="text-[15px] sm:text-[17px] text-[#888888] leading-relaxed mb-10">
            Choose your plan and start your first lesson today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
              style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
            >
              Start Free
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold border border-white/[0.12] text-[#C0C0C0] hover:border-white/[0.2] hover:text-[#F0F0F0] transition-all duration-200"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
