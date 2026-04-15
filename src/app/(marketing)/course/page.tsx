import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Video,
  Target,
  ClipboardList,
  BarChart3,
  AlertCircle,
  Users,
} from "lucide-react"
import SectionWrapper from "@/components/shared/SectionWrapper"
import { getAllLessons, getContentStats } from "@/lib/content"

export const metadata: Metadata = {
  title: "Course — Zakarian GMAT",
  description: "A complete GMAT prep system. 8 modules, structured curriculum.",
}

// Marketing bullet lists per module. The lesson markdown files describe
// content, not marketing beats, so these stay hand-authored. Keyed by
// `module` number from the lesson frontmatter.
const topicsByModule: Record<number, string[]> = {
  1: [
    "How the GMAT actually scores you",
    "Why content-heavy prep fails",
    "Building your study identity",
    "The error log framework",
  ],
  2: [
    "Full diagnostic assessment",
    "Section-by-section analysis",
    "Identifying your highest-leverage weaknesses",
    "Building your personalized study plan",
  ],
  3: [
    "Number properties & arithmetic",
    "Algebra & word problems",
    "Geometry fundamentals",
    "Data Sufficiency strategy",
    "Quant timing framework",
  ],
  4: [
    "Critical Reasoning argument mapping",
    "RC passage strategy for dense texts",
    "Sentence Correction core rules",
    "Non-native speaker shortcuts",
    "Verbal timing framework",
  ],
  5: [
    "Multi-Source Reasoning strategy",
    "Table Analysis approach",
    "Graphics Interpretation",
    "Two-Part Analysis",
    "DI timing and pacing",
  ],
  6: [
    "Mock exam protocol",
    "Post-mock debrief framework",
    "Score analysis by section",
    "Adjusting your plan based on results",
  ],
  7: [
    "Final week study schedule",
    "What NOT to do the week before",
    "Sleep, nutrition, and logistics",
    "Day-of mindset protocol",
  ],
  8: [
    "Vocabulary and reading speed drills",
    "Verbal pacing for non-native speakers",
    "Language-agnostic CR & RC techniques",
    "Mindset advantages of discipline",
  ],
}

function formatDuration(minutes: number): string {
  if (minutes >= 60) {
    const hours = minutes / 60
    const rounded = Math.round(hours * 10) / 10
    return `${rounded} hour${rounded === 1 ? "" : "s"}`
  }
  return `${minutes} min`
}

function sectionLabel(section: string): string {
  return section === "General" ? "Foundation" : section
}

const weeks = [
  { week: "Week 1–2", focus: "Diagnostic + Mindset" },
  { week: "Week 3–5", focus: "Quant deep dive" },
  { week: "Week 6–7", focus: "Verbal precision" },
  { week: "Week 8", focus: "Data Insights" },
  { week: "Week 9–11", focus: "Mixed practice + error review" },
  { week: "Week 12–13", focus: "Mock exams + debrief" },
  { week: "Week 14–15", focus: "Targeted weak spots" },
  { week: "Week 16", focus: "Final week protocol" },
]

export default function CoursePage() {
  const lessons = getAllLessons()
  const stats = getContentStats()

  const modules = lessons.map((lesson) => ({
    num: String(lesson.module).padStart(2, "0"),
    title: lesson.title,
    section: sectionLabel(lesson.section),
    duration: formatDuration(lesson.duration),
    description: lesson.description,
    topics: topicsByModule[lesson.module] ?? [],
  }))

  const included = [
    {
      icon: Video,
      title: "50+ hours of video lessons",
      description: "Structured, to the point. No filler content.",
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
      <SectionWrapper>
        <div className="max-w-3xl">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#C9A84C" }}
          >
            Platform
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#F0F0F0] mb-6">
            A complete prep system.{" "}
            <span className="text-[#888888]">Not a collection of videos.</span>
          </h1>
          <p className="text-lg text-[#888888] leading-relaxed max-w-xl">
            8 progressive modules, built around how the GMAT actually tests you. Each
            lesson connects to the next. Every mistake feeds into the system.
          </p>
        </div>
      </SectionWrapper>

      {/* Modules */}
      <SectionWrapper variant="darker">
        <div className="space-y-4">
          {modules.map((mod) => (
            <div
              key={mod.num}
              className="p-6 rounded-xl border border-white/[0.08] bg-[#111111] hover:border-white/[0.14] transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <span
                    className="text-2xl font-bold flex-shrink-0"
                    style={{ color: "rgba(201,168,76,0.4)" }}
                  >
                    {mod.num}
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-base font-semibold text-[#F0F0F0]">
                        {mod.title}
                      </h3>
                      <span
                        className="px-2 py-0.5 rounded text-xs"
                        style={{
                          backgroundColor: "rgba(201,168,76,0.08)",
                          color: "#C9A84C",
                        }}
                      >
                        {mod.section}
                      </span>
                      <span className="text-xs text-[#555555]">{mod.duration}</span>
                    </div>
                    <p className="text-sm text-[#888888] mb-3">{mod.description}</p>
                    <ul className="flex flex-wrap gap-2">
                      {mod.topics.map((topic) => (
                        <li
                          key={topic}
                          className="text-xs px-2 py-1 rounded border border-white/[0.06] text-[#555555]"
                        >
                          {topic}
                        </li>
                      ))}
                    </ul>
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
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#F0F0F0] mb-3">
              16-week study timeline
            </h2>
            <p className="text-[#888888] text-sm">
              Designed for 90 min/day, 5 days/week. Adapt to your schedule.
            </p>
          </div>

          <div className="space-y-2">
            {weeks.map((w, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 rounded-lg border border-white/[0.06] bg-[#0D0D0D]"
              >
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: "#C9A84C" }}
                />
                <span className="text-xs text-[#555555] w-24 flex-shrink-0">{w.week}</span>
                <span className="text-sm text-[#C0C0C0]">{w.focus}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* What's included */}
      <SectionWrapper variant="darker">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-[#F0F0F0]">
            Everything in the platform
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {included.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="flex items-start gap-4 p-5 rounded-xl border border-white/[0.08] bg-[#111111]"
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(201,168,76,0.1)" }}
                >
                  <Icon className="w-4 h-4" style={{ color: "#C9A84C" }} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#F0F0F0] mb-1">{item.title}</p>
                  <p className="text-xs text-[#888888]">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#F0F0F0] mb-4">
            Ready to get started?
          </h2>
          <p className="text-[#888888] mb-8">
            Choose your plan and start your first lesson today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold transition-all hover:opacity-90"
              style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
            >
              Start Free Trial
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold border border-white/[0.12] text-[#F0F0F0] hover:bg-white/5 transition-all"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
