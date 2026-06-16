import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Brain,
  Check,
  Layers,
  Minus,
  Sparkles,
  Target,
} from "lucide-react"
import Breadcrumbs from "@/components/seo/Breadcrumbs"

export const metadata: Metadata = {
  title: "How Zakarian GMAT Is Different",
  description:
    "Most GMAT prep makes you stitch a quant tool to a verbal tool to a pile of mocks. Zakarian GMAT is one path through all three sections, built for the GMAT Focus Edition and on how people actually learn — diagnose, retrieve, space, log, adapt.",
  alternates: { canonical: "/how-we-compare" },
}

interface Pillar {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>
  eyebrow: string
  title: string
  body: string
}

const PILLARS: Pillar[] = [
  {
    icon: Layers,
    eyebrow: "All three sections",
    title: "One path, not a stack you assemble.",
    body: "The most-recommended way to prep is a workaround: one tool for quant, another for verbal, a third for mocks. Zakarian runs Quant, Verbal, and Data Insights through a single guided path in the order they actually reinforce each other — so nothing falls through the seams between three logins.",
  },
  {
    icon: Target,
    eyebrow: "Focus-native",
    title: "Built for the test you're taking.",
    body: "The current GMAT has no Sentence Correction and treats Data Insights as a full third of the exam. This platform was designed around that format from the first chapter — not a legacy course with the old material trimmed out and Data Insights bolted on.",
  },
  {
    icon: Brain,
    eyebrow: "Learning science",
    title: "Designed around how people actually learn.",
    body: "Not a pile of videos. A loop the research backs: an official-exam baseline that places you, readings that make you recall instead of re-read, problem sets that interleave, an error log that tags why you missed, and a spaced-review queue that brings misses back before you forget them.",
  },
]

// Category-level comparison — the typical approach vs this one. No
// competitor is named: this contrasts patterns, not brands, so it stays
// accurate as rivals change their offerings.
const COMPARISON: { label: string; typical: string; zakarian: string }[] = [
  {
    label: "Section coverage",
    typical: "Strong in one section; you pair a second tool for the rest.",
    zakarian: "Quant, Verbal, and Data Insights in one guided path.",
  },
  {
    label: "Format fit",
    typical: "A legacy course updated for the Focus Edition.",
    zakarian: "Built for the Focus Edition from day one.",
  },
  {
    label: "Data Insights",
    typical: "Often the thinnest, last-built section.",
    zakarian: "A first-class section, not an afterthought.",
  },
  {
    label: "How you study",
    typical: "Watch videos, then grind questions.",
    zakarian: "Diagnose, learn by retrieval, space it, then drill weak spots.",
  },
  {
    label: "Your mistakes",
    typical: "A list of wrong answers.",
    zakarian: "A six-tag error log feeding a spaced-review queue.",
  },
  {
    label: "Trying it",
    typical: "Pay before you see the teaching.",
    zakarian: "Free sample chapters — real curriculum, no card.",
  },
]

const LOOP: { step: string; detail: string }[] = [
  {
    step: "Diagnose",
    detail:
      "An official mba.com practice exam places you by section and sub-skill — you enter your scores and the adaptive plan targets your gaps, not the whole syllabus from zero.",
  },
  {
    step: "Learn by retrieval",
    detail:
      "Each chapter opens with a pretest, then readings broken by recall checks and self-explanation prompts. Pulling an answer from memory beats re-reading it — that is the most robust finding in learning science.",
  },
  {
    step: "Space it",
    detail:
      "Every miss enters a spaced-review queue and comes back on a schedule, right before you would otherwise forget it.",
  },
  {
    step: "Log the why",
    detail:
      "The error log tags each miss by cause — conceptual, careless, time pressure, misread, strategy, other — so you fix patterns, not one-off questions.",
  },
  {
    step: "Adapt",
    detail:
      "The study plan and analytics surface your weakest areas and slowest question types, and point the next session at them.",
  },
]

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <div className="mb-8 max-w-2xl">
      <p
        className="text-[10px] uppercase tracking-[0.22em] font-semibold mb-2"
        style={{ color: "#C9A84C" }}
      >
        {eyebrow}
      </p>
      <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.1] mb-3">
        {title}
      </h2>
      {description && (
        <p className="text-[15px] text-[#C0C0C0] leading-relaxed">{description}</p>
      )}
    </div>
  )
}

export default function HowWeComparePage() {
  return (
    <div style={{ backgroundColor: "#0A0A0A" }}>
      <div className="max-w-3xl mx-auto pt-24 px-4 sm:px-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "How we compare", href: "/how-we-compare" },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="relative pt-8 pb-12 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 90% 55% at 50% -5%, rgba(201,168,76,0.16) 0%, transparent 60%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 pointer-events-none bg-grain opacity-[0.035] mix-blend-overlay"
          aria-hidden
        />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 mb-5">
            <Sparkles className="w-4 h-4" style={{ color: "#C9A84C" }} />
            <p className="text-[10px] uppercase tracking-[0.22em] text-[#C9A84C] font-semibold">
              How we compare
            </p>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.02] mb-5">
            Most GMAT prep makes you build your own stack.{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              We didn&apos;t.
            </span>
          </h1>
          <p className="text-[16px] sm:text-[17px] text-[#C0C0C0] leading-relaxed max-w-2xl mx-auto">
            The usual advice is to buy one tool for quant, another for verbal,
            and a separate set of mocks &mdash; then stitch them together
            yourself. Zakarian GMAT is one platform across all three sections,
            built for the GMAT Focus Edition and around how people actually
            learn.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 mt-10 mb-16">
        <div className="grid sm:grid-cols-3 gap-4">
          {PILLARS.map((p) => {
            const Icon = p.icon
            return (
              <div
                key={p.title}
                className="p-6 rounded-2xl border"
                style={{
                  borderColor: "rgba(255,255,255,0.06)",
                  backgroundColor: "#0D0D0D",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: "rgba(201,168,76,0.1)" }}
                >
                  <Icon className="w-4 h-4" style={{ color: "#C9A84C" }} />
                </div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#666666] font-semibold mb-2">
                  {p.eyebrow}
                </p>
                <h3 className="font-display text-lg font-semibold text-[#F0F0F0] tracking-tight mb-2 leading-tight">
                  {p.title}
                </h3>
                <p className="text-[14px] text-[#888888] leading-relaxed">
                  {p.body}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Comparison table */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 mb-16">
        <SectionHeader
          eyebrow="The usual way vs this one"
          title="What changes when it&apos;s one system."
          description="A category-level comparison — the typical GMAT-prep pattern against how this platform works. No brand names: approaches change less often than price tags do."
        />
        <div
          className="rounded-2xl border overflow-hidden"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <div
            className="grid grid-cols-1 sm:grid-cols-[1fr_1.4fr_1.4fr] text-[10px] uppercase tracking-[0.18em] font-semibold"
            style={{ backgroundColor: "#111111", color: "#888888" }}
          >
            <div className="px-5 py-3 hidden sm:block">&nbsp;</div>
            <div className="px-5 py-3">Typical GMAT prep</div>
            <div
              className="px-5 py-3"
              style={{ color: "#C9A84C", backgroundColor: "rgba(201,168,76,0.06)" }}
            >
              Zakarian GMAT
            </div>
          </div>
          {COMPARISON.map((row, i) => (
            <div
              key={row.label}
              className="grid grid-cols-1 sm:grid-cols-[1fr_1.4fr_1.4fr] border-t"
              style={{
                borderColor: "rgba(255,255,255,0.06)",
                backgroundColor: i % 2 === 0 ? "#0D0D0D" : "#0A0A0A",
              }}
            >
              <div className="px-5 pt-4 pb-1 sm:py-4 text-[12px] uppercase tracking-[0.14em] font-semibold text-[#C0C0C0]">
                {row.label}
              </div>
              <div className="px-5 py-2 sm:py-4 flex items-start gap-2 text-[14px] text-[#888888] leading-snug">
                <Minus className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#555555]" />
                {row.typical}
              </div>
              <div
                className="px-5 pt-2 pb-4 sm:py-4 flex items-start gap-2 text-[14px] text-[#E8E8E8] leading-snug"
                style={{ backgroundColor: "rgba(201,168,76,0.04)" }}
              >
                <Check
                  className="w-4 h-4 mt-0.5 flex-shrink-0"
                  style={{ color: "#3ECF8E" }}
                />
                {row.zakarian}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Learning-science loop */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 mb-16">
        <SectionHeader
          eyebrow="The method"
          title="A loop, not a library."
          description="Videos and a question bank are the easy part. The hard part is making the studying stick. The platform is built around the parts of learning science that move scores."
        />
        <div className="space-y-3">
          {LOOP.map((s, i) => (
            <div
              key={s.step}
              className="flex items-start gap-4 p-5 rounded-2xl border"
              style={{
                borderColor: "rgba(255,255,255,0.06)",
                backgroundColor: "#0D0D0D",
              }}
            >
              <span
                className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-[13px] font-semibold tabular-nums"
                style={{ backgroundColor: "rgba(201,168,76,0.1)", color: "#C9A84C" }}
              >
                {i + 1}
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-[#F0F0F0] tracking-tight leading-tight mb-1">
                  {s.step}
                </h3>
                <p className="text-[14px] text-[#888888] leading-relaxed">
                  {s.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Honest credibility */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 mb-16">
        <div
          className="p-6 sm:p-8 rounded-2xl border"
          style={{
            borderColor: "rgba(255,255,255,0.06)",
            backgroundColor: "#0D0D0D",
          }}
        >
          <SectionHeader
            eyebrow="Straight talk"
            title="What we won&apos;t tell you."
          />
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 text-[14px] text-[#C0C0C0] leading-relaxed">
            <p>
              We won&apos;t quote a guaranteed score jump or a percentage of
              students who broke 700. The platform is built by one person who
              went from 565 to 735, and the honest pitch is the method, not a
              number we can&apos;t stand behind.
            </p>
            <p>
              So see it before you pay. Three sample chapters &mdash; real
              curriculum, with the recall checks and problem sets intact &mdash;
              are free, no card required. If the teaching doesn&apos;t click in
              the sample, it won&apos;t click after you pay either.
            </p>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/sample-chapter"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-[13px] font-semibold transition-transform duration-200 hover:-translate-y-0.5"
              style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
            >
              Read a free sample chapter
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/course"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-[13px] font-semibold border transition-colors"
              style={{ borderColor: "rgba(255,255,255,0.10)", color: "#C0C0C0" }}
            >
              See the full curriculum
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="relative py-20 overflow-hidden border-t border-white/[0.06]"
        style={{ backgroundColor: "#050505" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 70% at 50% 100%, rgba(201,168,76,0.14) 0%, transparent 65%)",
          }}
          aria-hidden
        />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05] mb-4">
            One platform.{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              All three sections.
            </span>
          </h2>
          <p className="text-[15px] text-[#C0C0C0] leading-relaxed mb-7 max-w-xl mx-auto">
            50+ chapters across Quant, Verbal, and Data Insights, the adaptive
            study plan, the error log and spaced-review queue, and mock exams
            with debrief tools &mdash; built for the GMAT Focus Edition. Free
            while in beta, no card required.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
              style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
            >
              Start Free
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold border border-white/[0.1] text-[#C0C0C0] hover:border-white/[0.18] hover:text-[#F0F0F0] transition-all duration-200"
            >
              See pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
