"use client"

import Link from "next/link"
import {
  ArrowRight,
  Compass,
  Flag,
  RotateCcw,
  Sparkles,
  Target,
  Wrench,
} from "lucide-react"

export interface PracticeSetData {
  slug: string
  topic: string
  section: "Quant" | "Verbal" | "DI"
  questions: number
  easy: number
  medium: number
  hard: number
  estimatedMinutes: number
}

export interface PracticeRecommendation {
  slug: string
  topic: string
  subskill: string
  section: "Quant" | "Verbal" | "DI"
  misses: number
}

const EYEBROW = "text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C9A84C]"

const SECTION_ORDER: Array<PracticeSetData["section"]> = ["Quant", "Verbal", "DI"]

const SECTION_BLURB: Record<PracticeSetData["section"], string> = {
  Quant:
    "Algebra, arithmetic, number properties, geometry, rates, ratios, probability, word translation.",
  Verbal:
    "Critical Reasoning and Reading Comprehension. Tight logic, dense text, steady pacing.",
  DI: "Multi-source, table analysis, graphics, two-part, data sufficiency. One strategy per format.",
}

const SECTION_ACCENT: Record<PracticeSetData["section"], string> = {
  Quant: "#5FA8FF",
  Verbal: "#B088FF",
  DI: "#3ECF8E",
}

export default function PracticeClient({
  sets,
  recommendations = [],
}: {
  sets: PracticeSetData[]
  recommendations?: PracticeRecommendation[]
}) {
  const grouped: Record<PracticeSetData["section"], PracticeSetData[]> = {
    Quant: [],
    Verbal: [],
    DI: [],
  }
  for (const set of sets) {
    grouped[set.section].push(set)
  }
  for (const section of SECTION_ORDER) {
    grouped[section].sort((a, b) => a.topic.localeCompare(b.topic))
  }

  const topRec = recommendations[0] ?? null
  // Hero CTA dynamically targets the highest-leverage action: top
  // recommendation when the engine has signal, otherwise the custom
  // builder (the only existing surface that exposes difficulty +
  // count + topic filters together).
  const heroPrimaryHref = topRec
    ? `/practice/session/${topRec.slug}`
    : "/test-builder"
  const heroPrimaryLabel = topRec
    ? `Drill ${topRec.subskill !== topRec.topic ? topRec.subskill : topRec.topic}`
    : "Build a custom set"

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* === Hero — action-driven; the page's primary decision lives
          here, not buried under empty analytics. */}
      <section className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0A0A0A] px-6 py-10 sm:px-10 sm:py-14">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 55% at 50% -10%, rgba(201,168,76,0.14) 0%, transparent 60%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 pointer-events-none bg-grain opacity-[0.03] mix-blend-overlay"
          aria-hidden
        />
        <div className="relative max-w-3xl">
          <p className={EYEBROW + " mb-4"}>Practice</p>
          <h1 className="font-display text-4xl sm:text-[44px] font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.04]">
            Practice with{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              purpose.
            </span>
          </h1>
          <p className="mt-4 text-[15px] text-[#C0C0C0] leading-[1.7] max-w-2xl">
            {topRec
              ? "We pick the highest-leverage set; you run it. Every miss feeds your error log and the spaced-review queue."
              : "Pick a mode, run a set, and every miss feeds your error log and the spaced-review queue. Original GMAT-style questions, expert-calibrated, timing-targeted."}
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href={heroPrimaryHref}
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-lg text-[13px] font-semibold transition-transform duration-200 hover:-translate-y-0.5"
              style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
            >
              {heroPrimaryLabel}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/review"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-lg text-[13px] font-semibold border transition-colors"
              style={{
                borderColor: "rgba(255,255,255,0.10)",
                color: "#C0C0C0",
              }}
            >
              Run mixed review
            </Link>
          </div>
        </div>
      </section>

      {/* === Recommended for you — top weak sub-skills with reasons.
          Hidden when the engine has no signal so first-time users see
          the practice modes + bank instead of an empty row. */}
      {recommendations.length > 0 && (
        <section>
          <div className="flex items-center gap-3 mb-5">
            <Target className="w-3.5 h-3.5" style={{ color: "#C9A84C" }} />
            <p className={EYEBROW}>Recommended today</p>
            <div
              className="h-px flex-1"
              style={{
                background:
                  "linear-gradient(to right, rgba(201,168,76,0.3), transparent)",
              }}
              aria-hidden
            />
            <span className="text-[11px] text-[#555555] tracking-wide">
              Ranked by recent misses
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {recommendations.map((rec) => (
              <Link
                key={rec.slug}
                href={`/practice/session/${rec.slug}`}
                className="group relative block p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  borderColor: "rgba(201,168,76,0.22)",
                  backgroundColor: "rgba(201,168,76,0.04)",
                  boxShadow:
                    "0 0 30px rgba(201,168,76,0.05), inset 0 1px 0 rgba(255,255,255,0.04)",
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-[0.18em]"
                    style={{
                      backgroundColor: "rgba(201,168,76,0.12)",
                      color: "#C9A84C",
                    }}
                  >
                    {rec.section}
                  </span>
                  <span className="text-[11px] text-[#888888] tabular-nums">
                    {rec.misses} miss{rec.misses === 1 ? "" : "es"}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-[#F0F0F0] tracking-tight leading-[1.2]">
                  {rec.subskill !== rec.topic ? rec.subskill : rec.topic}
                </h3>
                {rec.subskill !== rec.topic && (
                  <p className="text-[12px] text-[#888888] mt-1">{rec.topic}</p>
                )}
                {/* Reason line — tells the student *why* this is here. */}
                <p
                  className="text-[12px] mt-3 leading-snug"
                  style={{ color: "rgba(201,168,76,0.75)" }}
                >
                  Why: {rec.misses} recent miss
                  {rec.misses === 1 ? "" : "es"} on this skill — repair before
                  it compounds.
                </p>
                <div className="mt-4 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] font-semibold text-[#C9A84C]">
                  <span>Drill it</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* === System-connection strip — addresses the critique that the
          page never shows how practice connects to the rest of the
          system. One line, low-key, but visible above the bank. */}
      <div
        className="rounded-xl border px-4 py-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px]"
        style={{
          borderColor: "rgba(255,255,255,0.05)",
          backgroundColor: "rgba(255,255,255,0.012)",
          color: "rgba(192,192,192,0.7)",
        }}
      >
        <span className="font-semibold text-[#888888] uppercase tracking-[0.18em] text-[10px]">
          After every set
        </span>
        <span className="inline-flex items-center gap-1.5">
          <RotateCcw className="w-3 h-3" style={{ color: "#C9A84C" }} />
          Misses enter your spaced-review queue
        </span>
        <span className="text-[#444444]">·</span>
        <span className="inline-flex items-center gap-1.5">
          <Flag className="w-3 h-3" style={{ color: "#C9A84C" }} />
          Tagged in your error log
        </span>
        <span className="text-[#444444]">·</span>
        <span className="inline-flex items-center gap-1.5">
          <Sparkles className="w-3 h-3" style={{ color: "#C9A84C" }} />
          Updates analytics + mastery gates
        </span>
      </div>

      {/* === How to practice — modes row. "Start set" was the only CTA
          on the previous design; now the user can choose intentionally
          between custom-built sets, mixed retrieval, mistake retries,
          and a full mock. Each tile routes to an existing surface. */}
      <section>
        <div className="flex items-center gap-3 mb-5">
          <p className={EYEBROW}>How to practice</p>
          <div
            className="h-px flex-1"
            style={{
              background:
                "linear-gradient(to right, rgba(201,168,76,0.3), transparent)",
            }}
            aria-hidden
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            {
              Icon: Wrench,
              title: "Custom set",
              body: "Pick topic, difficulty, count. Built for targeted reps.",
              href: "/test-builder",
              cta: "Build set",
            },
            {
              Icon: RotateCcw,
              title: "Mixed review",
              body: "Spaced-retrieval queue of past misses, ranked by priority.",
              href: "/review",
              cta: "Open queue",
            },
            {
              Icon: Flag,
              title: "Retry mistakes",
              body: "Re-attempt tagged misses from your error log.",
              href: "/error-log",
              cta: "Open log",
            },
            {
              Icon: Compass,
              title: "Full mock",
              body: "Three-section timed simulation. Mock-to-mock trend.",
              href: "/mock",
              cta: "Take mock",
            },
          ].map(({ Icon, title, body, href, cta }) => (
            <Link
              key={title}
              href={href}
              className="group p-5 rounded-xl border transition-all duration-300 hover:-translate-y-0.5"
              style={{
                borderColor: "rgba(255,255,255,0.06)",
                backgroundColor: "#0D0D0D",
              }}
            >
              <span
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg mb-3"
                style={{ backgroundColor: "rgba(201,168,76,0.10)" }}
              >
                <Icon className="w-4 h-4" style={{ color: "#C9A84C" }} />
              </span>
              <p className="text-[14px] font-semibold tracking-tight text-[#F0F0F0]">
                {title}
              </p>
              <p
                className="text-[12px] mt-1 leading-snug"
                style={{ color: "rgba(192,192,192,0.7)" }}
              >
                {body}
              </p>
              <span
                className="inline-flex items-center gap-1 mt-3 text-[11px] uppercase tracking-[0.18em] font-semibold transition-transform group-hover:translate-x-0.5"
                style={{ color: "#C9A84C" }}
              >
                {cta}
                <ArrowRight className="w-3 h-3" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* === Topic bank — section by section. Section heroes carry a
          mini description + "Start baseline" CTA pointing at the first
          topic. Topic cards now show difficulty mix + estimated time so
          they help the student decide. */}
      {SECTION_ORDER.map((section) => {
        const items = grouped[section]
        if (items.length === 0) return null
        const accent = SECTION_ACCENT[section]
        const totalQuestions = items.reduce((sum, s) => sum + s.questions, 0)
        // First-by-alphabetical-order topic in section is the baseline
        // entry point. Not personalized, but it's a sensible default
        // when the user doesn't yet have a recommendation.
        const baselineTarget = items[0]
        return (
          <section key={section} className="space-y-5">
            <div
              className="rounded-xl border p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-5"
              style={{
                borderColor: "rgba(255,255,255,0.06)",
                backgroundColor: "#0D0D0D",
              }}
            >
              <div className="flex items-start gap-3 min-w-0">
                <span
                  className="w-1 h-9 rounded-full flex-shrink-0 mt-1"
                  style={{ backgroundColor: accent }}
                  aria-hidden
                />
                <div className="min-w-0">
                  <p
                    className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-1"
                    style={{ color: accent }}
                  >
                    {section === "DI" ? "Data Insights" : section} Practice
                  </p>
                  <p className="text-[13px] text-[#C0C0C0] leading-snug max-w-xl">
                    {SECTION_BLURB[section]}
                  </p>
                  <p
                    className="text-[11px] mt-2 tabular-nums"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                    {items.length} topic{items.length === 1 ? "" : "s"} ·{" "}
                    {totalQuestions} question
                    {totalQuestions === 1 ? "" : "s"}
                  </p>
                </div>
              </div>
              {baselineTarget && (
                <Link
                  href={`/practice/session/${baselineTarget.slug}`}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-[12px] font-semibold border flex-shrink-0 self-start sm:self-center transition-colors"
                  style={{
                    borderColor: `${accent}55`,
                    color: accent,
                    backgroundColor: `${accent}0D`,
                  }}
                >
                  Start {section === "DI" ? "DI" : section} baseline
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden />
                </Link>
              )}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {items.map((set) => (
                <TopicCard key={set.slug} set={set} accent={accent} />
              ))}
            </div>
          </section>
        )
      })}

      {sets.length === 0 && (
        <div className="p-10 rounded-2xl border border-white/[0.06] bg-[#0D0D0D] text-center">
          <p className="text-[15px] text-[#888888]">
            No practice sets published yet.
          </p>
        </div>
      )}
    </div>
  )
}

/**
 * Topic-card with difficulty pills + estimated runtime. Replaces the
 * flat "topic + count + Start set" card so the student can decide what
 * mix of work each set buys before clicking through.
 */
function TopicCard({
  set,
  accent,
}: {
  set: PracticeSetData
  accent: string
}) {
  const { easy, medium, hard, questions, estimatedMinutes } = set
  // Only render pills for non-zero buckets — keeps the row tidy when a
  // small set only carries one or two difficulty levels.
  const pills: Array<{ label: string; count: number }> = []
  if (easy > 0) pills.push({ label: "Easy", count: easy })
  if (medium > 0) pills.push({ label: "Med", count: medium })
  if (hard > 0) pills.push({ label: "Hard", count: hard })
  return (
    <Link
      href={`/practice/session/${set.slug}`}
      className="group relative p-5 rounded-2xl border border-white/[0.08] bg-[#111111] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.16] hover:bg-[#141414] hover:shadow-[0_10px_40px_-12px_rgba(201,168,76,0.18)]"
    >
      <div className="flex items-center justify-between mb-3">
        <span
          className="px-2 py-0.5 rounded text-[10px] font-semibold tracking-[0.18em] uppercase"
          style={{
            backgroundColor: `${accent}1A`,
            color: accent,
          }}
        >
          {set.section === "DI" ? "Data Insights" : set.section}
        </span>
        <span className="font-display text-[12px] text-[#555555] tabular-nums">
          {questions} Q
        </span>
      </div>
      <h3 className="font-display text-lg sm:text-xl font-semibold text-[#F0F0F0] tracking-tight leading-[1.2]">
        {set.topic}
      </h3>
      {pills.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {pills.map((p) => (
            <span
              key={p.label}
              className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-semibold tabular-nums"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                color: "rgba(192,192,192,0.8)",
              }}
            >
              <span
                className="w-1 h-1 rounded-full"
                style={{
                  backgroundColor:
                    p.label === "Easy"
                      ? "#3ECF8E"
                      : p.label === "Med"
                        ? "#C9A84C"
                        : "#FF8A65",
                }}
                aria-hidden
              />
              {p.count} {p.label}
            </span>
          ))}
        </div>
      )}
      <div
        className="mt-4 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] font-semibold transition-colors"
        style={{ color: "#888888" }}
      >
        <span className="text-[11px] tracking-normal normal-case text-[#666666] tabular-nums">
          ~{estimatedMinutes} min
        </span>
        <span className="inline-flex items-center gap-1.5 group-hover:text-[#C9A84C] transition-colors">
          Start set
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  )
}
