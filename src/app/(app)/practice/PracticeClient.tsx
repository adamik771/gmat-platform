"use client"

import Link from "next/link"
import {
  ArrowRight,
  Clock,
  Lock,
  Target,
  Check,
  RotateCcw,
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

const SECTION_ACCENT: Record<Section, string> = {
  Quant: "#5FA8FF",
  Verbal: "#B088FF",
  DI: "#3ECF8E",
}

export default function PracticeClient({
  chapterGroups,
  recommendations = [],
  targetScore = null,
  lockTestsBeyond = null,
  attemptsBySlug = {},
}: {
  chapterGroups: PracticeChapterGroup[]
  recommendations?: PracticeRecommendation[]
  targetScore?: number | null
  /** Lock per-chapter tests whose 1-based index exceeds this number (free
   *  accounts when the paywall is on). null = no locking. */
  lockTestsBeyond?: number | null
  /** test.id -> latest attempt summary; drives the "Review" state + last score. */
  attemptsBySlug?: Record<
    string,
    { lastCorrect: number; lastTotal: number; attempts: number }
  >
}) {
  // Accuracy the score formula (205 + accuracy x 600) implies for the goal,
  // softened to 0.9x. A raw per-set bar at the literal score-accuracy is too
  // harsh: practice drills include hard items and the real exam is
  // adaptive/scaled, so you don't need your target-percentile raw accuracy on
  // every set. The gentler aim keeps goal sensitivity without demanding
  // near-perfection (e.g. an 805 goal now asks for ~90%, not 100%). Drives both
  // the goal "%+" label and the per-test "aim X/Y" chip.
  const AIM_SOFTENING = 0.9
  const requiredAccuracy =
    targetScore !== null
      ? Math.min(1, Math.max(0, ((targetScore - 205) / 600) * AIM_SOFTENING))
      : null
  const requiredPercent =
    requiredAccuracy !== null ? Math.ceil(requiredAccuracy * 100) : null
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
              Review queue
            </Link>
            <Link
              href="/practice/history"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-lg text-[13px] font-semibold border transition-colors"
              style={{
                borderColor: "rgba(255,255,255,0.10)",
                color: "#C0C0C0",
              }}
            >
              Session history
            </Link>
          </div>
        </div>
      </section>

      {/* === Goal accuracy strip — translates the student's score goal into
          the per-test accuracy bar they should clear. */}
      {requiredPercent !== null ? (
        <div
          className="rounded-xl border px-5 py-4 flex flex-wrap items-center gap-x-3 gap-y-2"
          style={{
            borderColor: "rgba(201,168,76,0.25)",
            backgroundColor: "rgba(201,168,76,0.05)",
          }}
        >
          <Target className="w-4 h-4 flex-shrink-0" style={{ color: "#C9A84C" }} />
          <p className="text-[14px] text-[#E8E8E8] leading-snug">
            <span className="font-semibold" style={{ color: "#C9A84C" }}>
              Goal {targetScore}
            </span>{" "}
            means scoring{" "}
            <span className="font-semibold tabular-nums" style={{ color: "#C9A84C" }}>
              {requiredPercent}%+
            </span>{" "}
            on these tests — each row shows the correct count to beat.
          </p>
        </div>
      ) : (
        <div
          className="rounded-xl border px-5 py-4 flex flex-wrap items-center gap-x-3 gap-y-2"
          style={{
            borderColor: "rgba(255,255,255,0.06)",
            backgroundColor: "rgba(255,255,255,0.012)",
          }}
        >
          <Target className="w-4 h-4 flex-shrink-0" style={{ color: "#888888" }} />
          <p className="text-[13px] text-[#888888] leading-snug">
            <Link
              href="/dashboard"
              className="underline underline-offset-2 hover:text-[#C9A84C] transition-colors"
            >
              Set a score goal
            </Link>{" "}
            to see the accuracy each test asks of you.
          </p>
        </div>
      )}

      {/* === Chapter bank — ONE interleaved list in the same guided-path order
          as the reading chapters (/chapters), NOT split into per-section blocks.
          getPracticeChapterGroups() already returns groups in CHAPTER_PATH_ORDER;
          each card carries a section tag. Tests are count-up timed, no auto-submit. */}
      {chapterGroups.length > 0 && (() => {
        const withTests = chapterGroups.filter((g) => !g.comingSoon)
        const totalTests = withTests.reduce((s, g) => s + g.tests.length, 0)
        const totalQs = withTests.reduce(
          (s, g) => s + g.tests.reduce((t, x) => t + x.count, 0),
          0
        )
        return (
          <section className="space-y-6">
            <div
              className="rounded-xl border p-5 sm:p-6"
              style={{
                borderColor: "rgba(255,255,255,0.06)",
                backgroundColor: "#0D0D0D",
              }}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-1 text-[#C9A84C]">
                Practice by chapter
              </p>
              <p className="text-[13px] text-[#C0C0C0] leading-snug max-w-xl">
                Same order as your reading path — foundations first, then topics in
                rotation across Quant, Verbal, and Data Insights, hardest last.
              </p>
              <p
                className="text-[11px] mt-2 tabular-nums"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                {withTests.length} chapter{withTests.length === 1 ? "" : "s"} ·{" "}
                {totalTests} test{totalTests === 1 ? "" : "s"} · {totalQs}{" "}
                question{totalQs === 1 ? "" : "s"}
              </p>
            </div>

            <div className="space-y-7">
              {chapterGroups.map((group) => (
                <ChapterBlock
                  key={group.chapterSlug}
                  group={group}
                  requiredAccuracy={requiredAccuracy}
                  lockTestsBeyond={lockTestsBeyond}
                  attemptsBySlug={attemptsBySlug}
                />
              ))}
            </div>
          </section>
        )
      })()}

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
function ChapterBlock({
  group,
  requiredAccuracy,
  lockTestsBeyond,
  attemptsBySlug,
}: {
  group: PracticeChapterGroup
  requiredAccuracy: number | null
  lockTestsBeyond: number | null
  attemptsBySlug: Record<
    string,
    { lastCorrect: number; lastTotal: number; attempts: number }
  >
}) {
  const totalQ = group.tests.reduce((s, t) => s + t.count, 0)
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3 pb-2.5 border-b border-white/[0.08]">
        <div className="min-w-0">
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.18em] mb-0.5"
            style={{ color: SECTION_ACCENT[group.section] }}
          >
            {group.section === "DI" ? "Data Insights" : group.section}
          </p>
          <h3 className="font-display text-lg sm:text-xl font-semibold text-[#F0F0F0] tracking-tight">
            {group.chapterTitle}
          </h3>
        </div>
        <span className="text-[12px] text-[#777777] tabular-nums flex-shrink-0">
          {group.comingSoon
            ? "Coming soon"
            : `${group.tests.length} test${group.tests.length === 1 ? "" : "s"} · ${totalQ} Q`}
        </span>
      </div>
      {group.comingSoon ? (
        <div
          className="mt-3 flex items-center gap-2 px-4 py-3 rounded-xl border border-dashed text-[12px]"
          style={{ borderColor: "rgba(255,255,255,0.06)", color: "#555555" }}
        >
          <Clock className="w-3.5 h-3.5 flex-shrink-0" aria-hidden />
          Tests coming soon — read the chapter for now.
        </div>
      ) : (
        <div className="mt-3 space-y-2.5">
          {group.tests.map((test, i) => (
            <ChapterTestRow
              key={test.id}
              test={test}
              requiredAccuracy={requiredAccuracy}
              accent={SECTION_ACCENT[group.section]}
              locked={lockTestsBeyond !== null && i + 1 > lockTestsBeyond}
              attempt={attemptsBySlug[test.id] ?? null}
            />
          ))}
        </div>
      )}
    </div>
  )
}

/**
 * A single test row: numbered badge, label, question count, difficulty mix,
 * the correct-count to beat for the student's goal, and a Start CTA. No time
 * shown — tests are untimed count-up sessions and a clock invites rushing.
 */
function ChapterTestRow({
  test,
  requiredAccuracy,
  accent,
  locked = false,
  attempt = null,
}: {
  test: PracticeTest
  requiredAccuracy: number | null
  /** The chapter's section accent colour (Quant blue / Verbal purple / DI green). */
  accent: string
  /** Paid test the free account can't run yet — links to /pricing. */
  locked?: boolean
  /** Latest attempt on this test, or null if never run. Drives the "Review"
   *  CTA + last-score badge (beta feedback). */
  attempt?: { lastCorrect: number; lastTotal: number; attempts: number } | null
}) {
  const { easy, medium, hard } = test.difficultyMix
  const pills: Array<{ label: string; count: number; color: string }> = []
  if (easy > 0) pills.push({ label: "Easy", count: easy, color: "#3ECF8E" })
  if (medium > 0) pills.push({ label: "Med", count: medium, color: "#C9A84C" })
  if (hard > 0) pills.push({ label: "Hard", count: hard, color: "#FF8A65" })
  const testNumber = test.label.replace(/\D+/g, "") || "1"
  const aimCount =
    requiredAccuracy !== null
      ? Math.min(test.count, Math.ceil(requiredAccuracy * test.count))
      : null
  // A locked test never counts as "attempted" (it can't have been run).
  const lastAttempt = locked ? null : attempt
  const metAim =
    lastAttempt && aimCount !== null
      ? lastAttempt.lastCorrect >= aimCount
      : null
  return (
    <Link
      href={locked ? "/pricing" : `/practice/session/${test.id}`}
      aria-label={
        locked
          ? `${test.label} — locked, see plans to unlock`
          : lastAttempt
            ? `Review ${test.label} — last score ${lastAttempt.lastCorrect} of ${lastAttempt.lastTotal}`
            : `Start ${test.label} — ${test.count} questions`
      }
      className={
        "group flex items-center justify-between gap-4 px-4 sm:px-5 py-4 rounded-xl border border-white/[0.06] bg-[#0D0D0D] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.14] hover:bg-[#111111]" +
        (locked ? " opacity-70 hover:opacity-100" : "")
      }
    >
      <div className="flex items-center gap-x-3.5 gap-y-1.5 min-w-0 flex-wrap">
        <span
          className="hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-lg font-display text-[16px] font-semibold flex-shrink-0"
          style={{
            backgroundColor: locked
              ? "rgba(255,255,255,0.04)"
              : lastAttempt
                ? "rgba(62,207,142,0.12)"
                : accent + "1A",
            color: locked ? "#888888" : lastAttempt ? "#3ECF8E" : accent,
          }}
          aria-hidden
        >
          {locked ? (
            <Lock className="w-4 h-4" />
          ) : lastAttempt ? (
            <Check className="w-5 h-5" />
          ) : (
            testNumber
          )}
        </span>
        <span className="text-[15px] font-semibold text-[#F0F0F0]">
          {test.label}
        </span>
        <span className="text-[13px] text-[#888888] tabular-nums">
          {test.count} questions
        </span>
        <span className="hidden md:flex items-center gap-1.5">
          {pills.map((p) => (
            <span
              key={p.label}
              className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-[11px] font-semibold tabular-nums"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                color: "rgba(192,192,192,0.85)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: p.color }}
                aria-hidden
              />
              {p.count} {p.label}
            </span>
          ))}
        </span>
        {lastAttempt ? (
          <span
            className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-[12px] font-semibold tabular-nums"
            style={{
              backgroundColor:
                metAim === true
                  ? "rgba(62,207,142,0.12)"
                  : "rgba(255,255,255,0.05)",
              color: metAim === true ? "#3ECF8E" : "rgba(192,192,192,0.9)",
            }}
          >
            {metAim === true ? (
              <Check className="w-3 h-3" aria-hidden />
            ) : (
              <Target className="w-3 h-3" aria-hidden />
            )}
            last {lastAttempt.lastCorrect}/{lastAttempt.lastTotal}
          </span>
        ) : aimCount !== null && !locked ? (
          <span
            className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-[12px] font-semibold tabular-nums"
            style={{
              backgroundColor: accent + "1A",
              color: accent,
            }}
          >
            <Target className="w-3 h-3" aria-hidden />
            aim {aimCount}/{test.count}
          </span>
        ) : null}
      </div>
      <span
        className="inline-flex items-center gap-1.5 text-[12px] uppercase tracking-[0.18em] font-semibold flex-shrink-0 transition-colors"
        style={{ color: locked || lastAttempt ? "#888888" : accent }}
      >
        {locked ? (
          <>
            Unlock
            <Lock className="w-3.5 h-3.5" />
          </>
        ) : lastAttempt ? (
          <>
            Review
            <RotateCcw className="w-3.5 h-3.5" />
          </>
        ) : (
          <>
            Start
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </>
        )}
      </span>
    </Link>
  )
}
