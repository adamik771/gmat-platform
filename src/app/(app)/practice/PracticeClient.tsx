"use client"

import Link from "next/link"
import {
  ArrowRight,
  Clock,
  Compass,
  Flag,
  RotateCcw,
  Sparkles,
  Target,
  Wrench,
} from "lucide-react"
import type { PracticeChapterGroup, PracticeTest } from "@/lib/content"

type Section = "Quant" | "Verbal" | "DI"

export interface PracticeRecommendation {
  slug: string
  topic: string
  subskill: string
  section: Section
  misses: number
}

const EYEBROW = "text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C9A84C]"

const SECTION_ORDER: Section[] = ["Quant", "Verbal", "DI"]

const SECTION_BLURB: Record<Section, string> = {
  Quant:
    "Algebra, arithmetic, number properties, rates, ratios, probability, word translation — chapter by chapter.",
  Verbal:
    "Critical Reasoning, one chapter per question type. Tight logic, steady pacing.",
  DI: "Data sufficiency, table analysis, graphics interpretation, two-part analysis. One strategy per format.",
}

const SECTION_ACCENT: Record<Section, string> = {
  Quant: "#5FA8FF",
  Verbal: "#B088FF",
  DI: "#3ECF8E",
}

export default function PracticeClient({
  chapterGroups,
  recommendations = [],
}: {
  chapterGroups: PracticeChapterGroup[]
  recommendations?: PracticeRecommendation[]
}) {
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

      {/* === Chapter bank — section by section, chapter by chapter. Each
          chapter heading is followed by its short tests; the next chapter
          starts below. Tests are count-up timed with no auto-submit. */}
      {SECTION_ORDER.map((section) => {
        const groups = chapterGroups.filter((g) => g.section === section)
        if (groups.length === 0) return null
        const accent = SECTION_ACCENT[section]
        const withTests = groups.filter((g) => !g.comingSoon)
        const sectionTests = withTests.reduce((s, g) => s + g.tests.length, 0)
        const sectionQs = withTests.reduce(
          (s, g) => s + g.tests.reduce((t, x) => t + x.count, 0),
          0
        )
        return (
          <section key={section} className="space-y-6">
            <div
              className="rounded-xl border p-5 sm:p-6 flex items-start gap-3"
              style={{
                borderColor: "rgba(255,255,255,0.06)",
                backgroundColor: "#0D0D0D",
              }}
            >
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
                  {withTests.length} chapter{withTests.length === 1 ? "" : "s"} ·{" "}
                  {sectionTests} test{sectionTests === 1 ? "" : "s"} · {sectionQs}{" "}
                  question{sectionQs === 1 ? "" : "s"}
                </p>
              </div>
            </div>

            <div className="space-y-7">
              {groups.map((group) => (
                <ChapterBlock key={group.chapterSlug} group={group} />
              ))}
            </div>
          </section>
        )
      })}

      {chapterGroups.length === 0 && (
        <div className="p-10 rounded-2xl border border-white/[0.06] bg-[#0D0D0D] text-center">
          <p className="text-[15px] text-[#888888]">
            No practice tests published yet.
          </p>
        </div>
      )}
    </div>
  )
}

/**
 * One chapter: a heading line (title + test/question counts) followed by its
 * short test rows. Chapters with no question bank yet (RC, MSR) show a muted
 * "coming soon" row so the practice list reads as the full syllabus.
 */
function ChapterBlock({ group }: { group: PracticeChapterGroup }) {
  const totalQ = group.tests.reduce((s, t) => s + t.count, 0)
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3 pb-2 border-b border-white/[0.08]">
        <h3 className="font-display text-base sm:text-lg font-semibold text-[#F0F0F0] tracking-tight">
          {group.chapterTitle}
        </h3>
        <span className="text-[11px] text-[#555555] tabular-nums flex-shrink-0">
          {group.comingSoon
            ? "Coming soon"
            : `${group.tests.length} test${group.tests.length === 1 ? "" : "s"} · ${totalQ} Q`}
        </span>
      </div>
      {group.comingSoon ? (
        <div
          className="mt-2.5 flex items-center gap-2 px-4 py-3 rounded-xl border border-dashed text-[12px]"
          style={{ borderColor: "rgba(255,255,255,0.06)", color: "#555555" }}
        >
          <Clock className="w-3.5 h-3.5 flex-shrink-0" aria-hidden />
          Tests coming soon — read the chapter for now.
        </div>
      ) : (
        <div className="mt-2.5 space-y-2">
          {group.tests.map((test) => (
            <ChapterTestRow key={test.id} test={test} />
          ))}
        </div>
      )}
    </div>
  )
}

/**
 * A single timed test row: label, question count, difficulty mix, estimated
 * runtime, and a Start CTA. Links to the count-up, no-auto-submit session.
 */
function ChapterTestRow({ test }: { test: PracticeTest }) {
  const { easy, medium, hard } = test.difficultyMix
  const pills: Array<{ label: string; count: number; color: string }> = []
  if (easy > 0) pills.push({ label: "Easy", count: easy, color: "#3ECF8E" })
  if (medium > 0) pills.push({ label: "Med", count: medium, color: "#C9A84C" })
  if (hard > 0) pills.push({ label: "Hard", count: hard, color: "#FF8A65" })
  return (
    <Link
      href={`/practice/session/${test.id}`}
      aria-label={`Start ${test.label} — ${test.count} questions`}
      className="group flex items-center justify-between gap-4 px-4 py-3 rounded-xl border border-white/[0.06] bg-[#0D0D0D] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.14] hover:bg-[#111111]"
    >
      <div className="flex items-center gap-x-3 gap-y-1.5 min-w-0 flex-wrap">
        <span className="text-[13px] font-semibold text-[#F0F0F0]">{test.label}</span>
        <span className="text-[11px] text-[#555555] tabular-nums">{test.count} Q</span>
        <span className="hidden sm:flex items-center gap-1.5">
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
                style={{ backgroundColor: p.color }}
                aria-hidden
              />
              {p.count} {p.label}
            </span>
          ))}
        </span>
        <span className="text-[11px] text-[#666666] tabular-nums">
          ~{test.estimatedMinutes} min
        </span>
      </div>
      <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] font-semibold text-[#888888] flex-shrink-0 transition-colors group-hover:text-[#C9A84C]">
        Start
        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  )
}
