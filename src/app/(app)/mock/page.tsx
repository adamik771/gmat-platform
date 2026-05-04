import Link from "next/link"
import {
  ArrowRight,
  CalendarCheck2,
  CheckCircle2,
  Clock,
  Compass,
  Lock,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react"
import { createSupabaseServer } from "@/lib/supabase/server"
import ScoreChart from "@/components/dashboard/ScoreChart"
import { MOCK_MODE_DEFS, type MockMode } from "@/lib/mock-modes"
import {
  MOCK_QUESTION_COUNT,
  MOCK_SECTIONS,
  MOCK_SECTION_MINUTES,
  accuracyToScore,
} from "@/lib/mock"
import type { Section } from "@/types"

export const metadata = {
  title: "Full-Length Mock",
}

interface PastMock {
  dateIso: string
  totalScore: number
  sectionScores: Record<Section, number | null>
}

const DECISION_RULES = [
  {
    title: "Reframe by 30 seconds",
    body: "If you can't state what the question is asking, reframe the task — guess the question type, not the answer.",
  },
  {
    title: "Path by 90 seconds",
    body: "No executable path? Triage. Eliminate, pick, move on.",
  },
  {
    title: "Cut the loss",
    body: "If you're far over time and still unsure, move. One 4-minute question costs you two 1-minute ones.",
  },
  {
    title: "Edit with a fix",
    body: "Bookmark only when you have a specific fix in mind. You only get three edits in review.",
  },
] as const

const PRE_MOCK_CHECKLIST = [
  "Block 2h 15m end-to-end. Breaks count toward total.",
  "Use a quiet room. Treat the clock as real.",
  "Don't pause. Section auto-submits at 45 minutes.",
  "Don't peek at answers — the report unlocks only after completion.",
] as const

export default async function MockLandingPage() {
  const supabase = await createSupabaseServer()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const pastMocks: PastMock[] = []
  let inProgressDate: string | null = null
  let diagnosticSectionsDone = 0
  let practiceAttemptsCount = 0
  let targetScore: number | null = null

  if (user) {
    targetScore =
      typeof user.user_metadata?.target_score === "number"
        ? (user.user_metadata.target_score as number)
        : null

    const { data: rows } = await supabase
      .from("practice_sessions")
      .select(
        "slug, section, accuracy, created_at, total_questions, correct_count"
      )
      .eq("user_id", user.id)
      .like("slug", "mock-%")
      .order("created_at", { ascending: false })
      .limit(60)

    const byDate = new Map<
      string,
      { accuracies: Partial<Record<Section, number>> }
    >()
    for (const row of rows ?? []) {
      const match = (row.slug as string).match(
        /^mock-(\d{4}-\d{2}-\d{2})-(.+)$/
      )
      if (!match) continue
      const date = match[1]
      const section = row.section as Section
      const group = byDate.get(date) ?? { accuracies: {} }
      if (!(section in group.accuracies)) {
        group.accuracies[section] = (row.accuracy as number) / 100
      }
      byDate.set(date, group)
    }
    for (const [date, group] of byDate) {
      const sectionScores: Record<Section, number | null> = {
        Quant:
          group.accuracies.Quant !== undefined
            ? accuracyToScore(group.accuracies.Quant)
            : null,
        Verbal:
          group.accuracies.Verbal !== undefined
            ? accuracyToScore(group.accuracies.Verbal)
            : null,
        DI:
          group.accuracies.DI !== undefined
            ? accuracyToScore(group.accuracies.DI)
            : null,
      }
      const nonNull = Object.values(sectionScores).filter(
        (n) => n !== null
      ) as number[]
      const total =
        nonNull.length === 3
          ? Math.round(nonNull.reduce((a, b) => a + b, 0) / 3 / 10) * 10
          : 0
      pastMocks.push({ dateIso: date, totalScore: total, sectionScores })
    }

    const today = new Date().toISOString().slice(0, 10)
    const todaysGroup = byDate.get(today)
    if (todaysGroup) {
      const count = Object.keys(todaysGroup.accuracies).length
      if (count > 0 && count < 3) inProgressDate = today
    }

    // Readiness signals — diagnostic completion + total practice volume.
    // Both cheap (one query per signal); used to decide which readiness
    // state the page renders and which adaptive mock modes lock.
    const { data: diagRows } = await supabase
      .from("practice_sessions")
      .select("slug")
      .eq("user_id", user.id)
      .in("slug", ["diagnostic-quant", "diagnostic-verbal", "diagnostic-di"])
    diagnosticSectionsDone = new Set(
      (diagRows ?? []).map((r) => r.slug as string)
    ).size

    const { count: practiceCount } = await supabase
      .from("practice_sessions")
      .select("id", { count: "exact", head: true })
      .eq("user_id", user.id)
      .not("slug", "like", "mock-%")
      .not("slug", "like", "diagnostic-%")
    practiceAttemptsCount = practiceCount ?? 0
  }

  const scored = pastMocks.filter((m) => m.totalScore > 0)
  const oldestFirst = [...scored].reverse()
  const trendVisible = oldestFirst.length >= 2
  const trendFirst = trendVisible ? oldestFirst[0].totalScore : 0
  const trendLast = trendVisible
    ? oldestFirst[oldestFirst.length - 1].totalScore
    : 0
  const trendDelta = trendVisible ? trendLast - trendFirst : 0
  const trendDeltaLabel =
    trendDelta > 0
      ? `+${trendDelta}`
      : trendDelta < 0
        ? `${trendDelta}`
        : "no change"
  const trendDeltaColor =
    trendDelta > 0
      ? "#3ECF8E"
      : trendDelta < 0
        ? "#FF4444"
        : "#888888"

  // === Readiness logic ===
  // Three states drive the panel + lock the adaptive mock modes:
  //   - "diagnostic-first": no diagnostic. A full mock is allowed but
  //     the post-mock analysis is weaker without a baseline.
  //   - "ready-anchor": diagnostic done, no mocks yet. Take the first
  //     full mock to establish a score anchor.
  //   - "trend-active": ≥1 past mock. Show the latest score + delta to
  //     target so the page reads as a tracking surface, not a launcher.
  type ReadinessState = "diagnostic-first" | "ready-anchor" | "trend-active"
  const readiness: ReadinessState =
    pastMocks.length > 0
      ? "trend-active"
      : diagnosticSectionsDone < 3
        ? "diagnostic-first"
        : "ready-anchor"

  const latestScore =
    scored.length > 0 ? scored[0].totalScore : null
  const targetGap =
    latestScore !== null && targetScore !== null
      ? targetScore - latestScore
      : null

  // Mode availability — unlocks for adaptive variants. Static modes
  // (full / Q-only / V-only / DI-only / hard) always run; weak-area
  // and mixed-review need real signal to be meaningful.
  const weakAvailable = diagnosticSectionsDone === 3
  const mixedReviewAvailable =
    practiceAttemptsCount > 0 || diagnosticSectionsDone > 0

  return (
    <div className="relative">
      <div
        className="absolute inset-x-0 top-0 h-[480px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(201,168,76,0.1) 0%, transparent 60%), radial-gradient(ellipse 55% 40% at 90% 20%, rgba(201,168,76,0.06) 0%, transparent 60%)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 pointer-events-none bg-grain opacity-[0.03] mix-blend-overlay"
        aria-hidden
      />

      <div className="relative max-w-4xl mx-auto space-y-12">
        {/* HERO */}
        <section className="pt-4">
          <div className="flex items-center gap-3 mb-5">
            <span
              className="h-px w-10"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(201,168,76,0.6))",
              }}
              aria-hidden
            />
            <p
              className="text-[10px] uppercase tracking-[0.22em] font-semibold"
              style={{ color: "#C9A84C" }}
            >
              Mock simulation
            </p>
            <div
              className="h-px flex-1"
              style={{
                background:
                  "linear-gradient(to right, rgba(201,168,76,0.3), transparent)",
              }}
              aria-hidden
            />
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05]">
            Measure where you{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              really
            </span>{" "}
            are.
          </h1>
          <p className="text-[15px] leading-[1.75] text-[#C0C0C0] mt-5 max-w-2xl">
            A realistic, timed simulation of the GMAT Focus format. Three
            sections, forty-five minutes each, back-to-back. Use this to
            establish your score anchor, not just to do more questions.
          </p>
        </section>

        {/* SECTION STRUCTURE — visualizes "what 64 Q / 135 min looks
            like" so the commitment is concrete before the user clicks
            Start. */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {MOCK_SECTIONS.map((section, i) => (
              <div
                key={section}
                className="p-5 rounded-2xl border border-white/[0.06] bg-[#111111]"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="font-display text-[11px] font-semibold tabular-nums"
                    style={{ color: "rgba(201,168,76,0.55)" }}
                    aria-hidden
                  >
                    0{i + 1}
                  </span>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#888888] font-semibold">
                    {section}
                  </p>
                </div>
                <p className="font-display text-3xl sm:text-4xl font-semibold text-[#F0F0F0] tabular-nums tracking-[-0.02em] leading-none">
                  {MOCK_QUESTION_COUNT[section]}
                </p>
                <p className="text-[11px] text-[#555555] mt-2">
                  questions · {MOCK_SECTION_MINUTES[section]} min
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* MOCK READINESS — state-aware. Tells the student whether
            today is a good day for a full mock or whether the
            diagnostic should come first. Replaces "no readiness
            evaluation at all" — the central gap from the critique. */}
        <ReadinessPanel
          state={readiness}
          diagnosticSectionsDone={diagnosticSectionsDone}
          latestScore={latestScore}
          targetScore={targetScore}
          targetGap={targetGap}
          pastMockCount={pastMocks.length}
        />

        {/* CEREMONIAL FULL-MOCK CTA + pre-mock checklist.
            The previous version was a normal link card; this is the
            page's flagship action and now reads as such. */}
        <FullMockCard
          inProgressDate={inProgressDate}
          pastMockCount={pastMocks.length}
        />

        {/* DECISION RULES — moved up from the bottom of the page.
            These are pre-mock coaching, not appendix material. */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <span
              className="h-px w-8"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(201,168,76,0.6))",
              }}
              aria-hidden
            />
            <p
              className="text-[10px] uppercase tracking-[0.22em] font-semibold"
              style={{ color: "#C9A84C" }}
            >
              Mock rules for today
            </p>
            <div
              className="h-px flex-1"
              style={{
                background:
                  "linear-gradient(to right, rgba(201,168,76,0.3), transparent)",
              }}
              aria-hidden
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {DECISION_RULES.map((rule, i) => (
              <div
                key={rule.title}
                className="p-4 rounded-xl border border-white/[0.06] bg-[#111111]"
              >
                <div className="flex items-center gap-3 mb-1.5">
                  <span
                    className="font-display text-[11px] font-semibold tabular-nums"
                    style={{ color: "rgba(201,168,76,0.55)" }}
                    aria-hidden
                  >
                    0{i + 1}
                  </span>
                  <h3 className="text-[13px] font-semibold text-[#F0F0F0] tracking-tight">
                    {rule.title}
                  </h3>
                </div>
                <p className="text-[12px] leading-snug text-[#C0C0C0]">
                  {rule.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* MOCK MODE PICKER — alternate variants, grouped by purpose.
            Adaptive variants (Weak / Mixed-review) lock if the user
            doesn't have enough signal for them to be meaningful. */}
        <MockModePicker
          weakAvailable={weakAvailable}
          mixedReviewAvailable={mixedReviewAvailable}
          diagnosticSectionsDone={diagnosticSectionsDone}
        />

        {/* TREND */}
        {trendVisible && (
          <section>
            <div className="flex items-center gap-3 mb-6">
              <span
                className="h-px w-8"
                style={{
                  background:
                    "linear-gradient(to right, transparent, rgba(201,168,76,0.6))",
                }}
                aria-hidden
              />
              <p
                className="text-[10px] uppercase tracking-[0.22em] font-semibold"
                style={{ color: "#C9A84C" }}
              >
                Mock trend
              </p>
              <div
                className="h-px flex-1"
                style={{
                  background:
                    "linear-gradient(to right, rgba(201,168,76,0.3), transparent)",
                }}
                aria-hidden
              />
              <div className="flex items-center gap-3">
                <span className="text-[11px] tabular-nums text-[#555555]">
                  {trendFirst} <span className="text-[#333333]">→</span>{" "}
                  {trendLast}
                </span>
                <span
                  className="text-[10px] tracking-[0.2em] uppercase font-semibold tabular-nums"
                  style={{ color: trendDeltaColor }}
                >
                  {trendDeltaLabel}
                </span>
              </div>
            </div>
            <div className="p-6 rounded-2xl border border-white/[0.06] bg-[#111111]">
              <ScoreChart
                height={160}
                data={oldestFirst.map((m, i) => ({
                  week: `Mock ${i + 1}`,
                  score: m.totalScore,
                }))}
              />
            </div>
          </section>
        )}

        {/* PAST MOCKS */}
        {pastMocks.length === 0 && user && (
          <section>
            <div className="flex items-center gap-3 mb-6">
              <span
                className="h-px w-8"
                style={{
                  background:
                    "linear-gradient(to right, transparent, rgba(201,168,76,0.6))",
                }}
                aria-hidden
              />
              <p
                className="text-[10px] uppercase tracking-[0.22em] font-semibold"
                style={{ color: "#C9A84C" }}
              >
                Past mocks
              </p>
            </div>
            <div
              className="p-8 sm:p-10 rounded-2xl border border-white/[0.06] bg-[#111111] text-center"
              style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)" }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                style={{
                  backgroundColor: "rgba(201,168,76,0.12)",
                  border: "1px solid rgba(201,168,76,0.28)",
                }}
              >
                <CalendarCheck2
                  className="w-6 h-6"
                  style={{ color: "#C9A84C" }}
                />
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.1] mb-3">
                No mocks completed{" "}
                <span
                  className="font-display-italic"
                  style={{ color: "#C9A84C" }}
                >
                  yet.
                </span>
              </h2>
              <p className="text-[14px] text-[#C0C0C0] leading-[1.75] max-w-md mx-auto mb-6">
                Run your first full-length to anchor a score and unlock the
                mock-to-mock trend.
              </p>
              <Link
                href="/mock/run"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
                style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
              >
                Run your first full-length
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>
        )}
        {pastMocks.length > 0 && (
          <section>
            <div className="flex items-center gap-3 mb-6">
              <span
                className="h-px w-8"
                style={{
                  background:
                    "linear-gradient(to right, transparent, rgba(201,168,76,0.6))",
                }}
                aria-hidden
              />
              <p
                className="text-[10px] uppercase tracking-[0.22em] font-semibold"
                style={{ color: "#C9A84C" }}
              >
                Past mocks
              </p>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.1] mb-8">
              The{" "}
              <span
                className="font-display-italic"
                style={{ color: "#C9A84C" }}
              >
                record.
              </span>
            </h2>
            <div className="space-y-3">
              {pastMocks.map((m) => (
                <Link
                  key={m.dateIso}
                  href="/mock/report"
                  className="group flex items-center justify-between gap-6 p-5 sm:p-6 rounded-2xl border border-white/[0.06] bg-[#111111] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.14] hover:bg-[#141414] hover:shadow-[0_10px_40px_-14px_rgba(201,168,76,0.18)]"
                >
                  <div className="flex items-center gap-6 sm:gap-8 flex-1 min-w-0">
                    <div className="flex-shrink-0">
                      <p className="text-[10px] uppercase tracking-[0.22em] text-[#555555] font-semibold mb-2">
                        {m.dateIso}
                      </p>
                      <p
                        className="font-display text-4xl sm:text-5xl font-semibold tabular-nums tracking-[-0.03em] leading-none"
                        style={{
                          color: m.totalScore > 0 ? "#F0F0F0" : "#555555",
                        }}
                      >
                        {m.totalScore > 0 ? m.totalScore : "—"}
                      </p>
                      <p className="text-[10px] uppercase tracking-[0.22em] text-[#555555] mt-2 font-medium">
                        {m.totalScore > 0 ? "Total" : "Partial"}
                      </p>
                    </div>
                    <div className="hidden sm:flex items-center gap-5 text-[12px] text-[#888888] min-w-0">
                      {MOCK_SECTIONS.map((s) => {
                        const score = m.sectionScores[s]
                        return (
                          <div key={s} className="flex flex-col">
                            <span className="text-[9px] uppercase tracking-[0.22em] text-[#555555] font-semibold">
                              {s}
                            </span>
                            <span className="font-display text-lg font-semibold tabular-nums text-[#C0C0C0] mt-1">
                              {score ?? "—"}
                            </span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                  <div className="flex-shrink-0 flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] font-semibold text-[#555555] transition-colors group-hover:text-[#C9A84C]">
                    <Clock className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Report</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              ))}
            </div>
            <p className="sm:hidden text-[11px] text-[#555555] mt-4 leading-relaxed">
              Tap a mock for the full section breakdown and review.
            </p>
          </section>
        )}
      </div>
    </div>
  )
}

/**
 * State-aware readiness header. Three branches:
 *   - "diagnostic-first": no diagnostic baseline. Surface the diagnostic
 *     CTA so the student doesn't burn a full mock as a placeholder.
 *   - "ready-anchor": diagnostic done, no mocks yet. Show what the first
 *     mock unlocks.
 *   - "trend-active": ≥1 past mock. Show latest score + target gap so
 *     the page reads as a tracking surface, not a launcher.
 */
function ReadinessPanel({
  state,
  diagnosticSectionsDone,
  latestScore,
  targetScore,
  targetGap,
  pastMockCount,
}: {
  state: "diagnostic-first" | "ready-anchor" | "trend-active"
  diagnosticSectionsDone: number
  latestScore: number | null
  targetScore: number | null
  targetGap: number | null
  pastMockCount: number
}) {
  if (state === "diagnostic-first") {
    return (
      <section
        className="rounded-2xl border p-6"
        style={{
          borderColor: "rgba(201,168,76,0.22)",
          backgroundColor: "rgba(201,168,76,0.04)",
        }}
      >
        <div className="flex items-start gap-4">
          <span
            className="inline-flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0"
            style={{
              backgroundColor: "rgba(201,168,76,0.12)",
              border: "1px solid rgba(201,168,76,0.28)",
            }}
          >
            <Compass className="w-4 h-4" style={{ color: "#C9A84C" }} />
          </span>
          <div className="flex-1 min-w-0">
            <p
              className="text-[10px] uppercase tracking-[0.22em] font-semibold mb-1.5"
              style={{ color: "#C9A84C" }}
            >
              Mock readiness · Diagnostic first
            </p>
            <p className="font-display text-xl sm:text-2xl font-semibold text-[#F0F0F0] tracking-tight leading-snug mb-2">
              Take the diagnostic before your first mock.
            </p>
            <p className="text-[13px] text-[#C0C0C0] leading-relaxed max-w-2xl">
              You can run a full mock now, but the post-mock analysis is
              much sharper after the diagnostic baselines your weak
              sub-skills and timing patterns.
              {diagnosticSectionsDone > 0 && (
                <>
                  {" "}You&apos;ve done {diagnosticSectionsDone}/3 sections so far.
                </>
              )}
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/diagnostic"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-[12px] font-semibold transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
              >
                {diagnosticSectionsDone === 0
                  ? "Take diagnostic first"
                  : `Continue diagnostic (${diagnosticSectionsDone}/3)`}
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
  }
  if (state === "ready-anchor") {
    return (
      <section
        className="rounded-2xl border p-6"
        style={{
          borderColor: "rgba(62,207,142,0.22)",
          backgroundColor: "rgba(62,207,142,0.04)",
        }}
      >
        <div className="flex items-start gap-4">
          <span
            className="inline-flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0"
            style={{
              backgroundColor: "rgba(62,207,142,0.12)",
              border: "1px solid rgba(62,207,142,0.28)",
            }}
          >
            <CheckCircle2
              className="w-4 h-4"
              style={{ color: "#3ECF8E" }}
            />
          </span>
          <div className="flex-1 min-w-0">
            <p
              className="text-[10px] uppercase tracking-[0.22em] font-semibold mb-1.5"
              style={{ color: "#3ECF8E" }}
            >
              Mock readiness · Ready for first anchor
            </p>
            <p className="font-display text-xl sm:text-2xl font-semibold text-[#F0F0F0] tracking-tight leading-snug mb-2">
              Take a full mock to set your score anchor.
            </p>
            <p className="text-[13px] text-[#C0C0C0] leading-relaxed max-w-2xl mb-4">
              Diagnostic baseline is in. Your first full-length mock
              unlocks the score band, section bands, timing-pressure map,
              and mock-to-mock trend.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { Icon: Target, label: "Total score band" },
                { Icon: Sparkles, label: "Section bands" },
                { Icon: Clock, label: "Timing pressure map" },
                { Icon: TrendingUp, label: "Mock-to-mock trend" },
              ].map(({ Icon, label }) => (
                <div
                  key={label}
                  className="px-3 py-2 rounded-lg border flex items-center gap-2 text-[11px]"
                  style={{
                    borderColor: "rgba(255,255,255,0.05)",
                    backgroundColor: "rgba(255,255,255,0.012)",
                    color: "rgba(192,192,192,0.7)",
                  }}
                >
                  <Icon
                    className="w-3 h-3 flex-shrink-0"
                    style={{ color: "#3ECF8E" }}
                  />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
  // trend-active
  return (
    <section
      className="rounded-2xl border p-6"
      style={{
        borderColor: "rgba(201,168,76,0.22)",
        backgroundColor: "rgba(201,168,76,0.04)",
      }}
    >
      <div className="flex items-start gap-4">
        <span
          className="inline-flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0"
          style={{
            backgroundColor: "rgba(201,168,76,0.12)",
            border: "1px solid rgba(201,168,76,0.28)",
          }}
        >
          <TrendingUp className="w-4 h-4" style={{ color: "#C9A84C" }} />
        </span>
        <div className="flex-1 min-w-0">
          <p
            className="text-[10px] uppercase tracking-[0.22em] font-semibold mb-1.5"
            style={{ color: "#C9A84C" }}
          >
            Mock readiness · Trend tracking active
          </p>
          <p className="font-display text-xl sm:text-2xl font-semibold text-[#F0F0F0] tracking-tight leading-snug mb-2">
            {pastMockCount} mock{pastMockCount === 1 ? "" : "s"} on record.
          </p>
          {latestScore !== null &&
            (targetScore !== null && targetGap !== null ? (
              <p className="text-[14px] text-[#C0C0C0] leading-relaxed">
                <span className="text-[#F0F0F0] font-semibold tabular-nums">
                  {latestScore}
                </span>{" "}
                latest <span className="text-[#444444]">·</span>{" "}
                <span className="text-[#F0F0F0] font-semibold tabular-nums">
                  {targetScore}
                </span>{" "}
                target <span className="text-[#444444]">·</span>{" "}
                <span
                  className="font-semibold tabular-nums"
                  style={{
                    color:
                      targetGap > 0
                        ? "#C9A84C"
                        : targetGap === 0
                          ? "#3ECF8E"
                          : "#3ECF8E",
                  }}
                >
                  {targetGap > 0
                    ? `+${targetGap} to go`
                    : targetGap === 0
                      ? "on target"
                      : `+${-targetGap} above target`}
                </span>
              </p>
            ) : (
              <p className="text-[14px] text-[#C0C0C0] leading-relaxed">
                Latest:{" "}
                <span className="text-[#F0F0F0] font-semibold tabular-nums">
                  {latestScore}
                </span>
                . Set a target score to see the gap.
              </p>
            ))}
        </div>
      </div>
    </section>
  )
}

/**
 * Ceremonial full-mock CTA. Replaces the previous "First attempt /
 * Start your first mock." card. The pre-mock checklist is inline so
 * students see the commitment before clicking through.
 */
function FullMockCard({
  inProgressDate,
  pastMockCount,
}: {
  inProgressDate: string | null
  pastMockCount: number
}) {
  const eyebrow = inProgressDate
    ? "Resume today"
    : pastMockCount > 0
      ? "Begin a new mock"
      : "First full-length mock"
  const headline = inProgressDate
    ? "Resume today's mock."
    : pastMockCount > 0
      ? "Run another full-length."
      : "Establish your score anchor."
  const ctaLabel = inProgressDate
    ? "Resume mock"
    : pastMockCount > 0
      ? "Start full mock"
      : "Start full mock"
  return (
    <section
      className="relative overflow-hidden rounded-2xl border"
      style={{
        borderColor: "rgba(201,168,76,0.28)",
        backgroundColor: "rgba(201,168,76,0.05)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 100% 50%, rgba(201,168,76,0.14) 0%, transparent 60%)",
        }}
        aria-hidden
      />
      <div className="relative grid lg:grid-cols-[minmax(0,1fr)_300px] gap-7 lg:gap-10 p-7 sm:p-9">
        <div className="min-w-0">
          <p
            className="text-[10px] uppercase tracking-[0.22em] font-semibold mb-2"
            style={{ color: "#C9A84C" }}
          >
            {eyebrow}
          </p>
          <h2 className="font-display text-3xl sm:text-[34px] font-semibold text-[#F0F0F0] tracking-[-0.01em] leading-[1.1]">
            {headline}
          </h2>
          <p className="text-[14px] leading-[1.7] text-[#C0C0C0] mt-3 max-w-lg">
            64 questions · 135 minutes · 3 sections × 45 min, back-to-back.
            You pick the section order. Answers unlock only after
            completion.
          </p>
          <div className="mt-6">
            <Link
              href="/mock/run"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-lg text-[13px] font-semibold transition-transform duration-200 hover:-translate-y-0.5"
              style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
            >
              {ctaLabel}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
        {/* Pre-mock checklist — sits inside the same card so it reads as
            part of the ritual, not a separate section. */}
        <aside
          className="rounded-xl border p-5 self-start"
          style={{
            borderColor: "rgba(255,255,255,0.06)",
            backgroundColor: "rgba(255,255,255,0.012)",
          }}
        >
          <p
            className="text-[10px] uppercase tracking-[0.22em] font-semibold mb-3"
            style={{ color: "#C9A84C" }}
          >
            Before you begin
          </p>
          <ul className="space-y-2.5">
            {PRE_MOCK_CHECKLIST.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-[12px] leading-snug"
                style={{ color: "rgba(192,192,192,0.85)" }}
              >
                <span
                  className="w-3.5 h-3.5 rounded-full border flex-shrink-0 mt-0.5"
                  style={{ borderColor: "rgba(255,255,255,0.18)" }}
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}

/**
 * MockModePicker — six alternative mock modes beyond the default full
 * mock. Now grouped into "Section timing" (full-length single sections)
 * and "Targeted training" (advanced/adaptive variants). Adaptive
 * variants are state-aware: weak-area requires a diagnostic baseline,
 * mixed-review requires past attempts.
 */
function MockModePicker({
  weakAvailable,
  mixedReviewAvailable,
  diagnosticSectionsDone,
}: {
  weakAvailable: boolean
  mixedReviewAvailable: boolean
  diagnosticSectionsDone: number
}) {
  const SECTION_TIMING: MockMode[] = ["quant-only", "verbal-only", "di-only"]
  const TARGETED: MockMode[] = ["hard", "weak", "mixed-review"]

  const modeMeta: Record<
    MockMode,
    { bestWhen: string; locked: boolean; lockReason: string | null }
  > = {
    full: { bestWhen: "", locked: false, lockReason: null },
    "quant-only": {
      bestWhen: "Quant pacing or stamina is the score-limiter.",
      locked: false,
      lockReason: null,
    },
    "verbal-only": {
      bestWhen: "Verbal needs argument-recognition stamina under timing.",
      locked: false,
      lockReason: null,
    },
    "di-only": {
      bestWhen: "DI is the section that drops first under fatigue.",
      locked: false,
      lockReason: null,
    },
    hard: {
      bestWhen: "Foundations are stable; you're chasing the elite band.",
      locked: false,
      lockReason: null,
    },
    weak: {
      bestWhen: "Diagnostic + practice data exists to identify weakness.",
      locked: !weakAvailable,
      lockReason: weakAvailable
        ? null
        : `Locked until diagnostic complete (${diagnosticSectionsDone}/3 sections done).`,
    },
    "mixed-review": {
      bestWhen: "Your spaced-review queue has overdue items.",
      locked: !mixedReviewAvailable,
      lockReason: mixedReviewAvailable
        ? null
        : "Locked until you've logged some practice misses.",
    },
  }

  const renderCard = (id: MockMode) => {
    const def = MOCK_MODE_DEFS[id]
    const meta = modeMeta[id]
    if (meta.locked) {
      return (
        <div
          key={id}
          className="block p-5 rounded-2xl border"
          style={{
            borderColor: "rgba(255,255,255,0.05)",
            backgroundColor: "rgba(255,255,255,0.012)",
          }}
        >
          <div className="flex items-baseline justify-between gap-3 mb-3">
            <p
              className="text-[10px] uppercase tracking-[0.22em] font-semibold"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              {def.label}
            </p>
            <Lock
              className="w-3 h-3"
              style={{ color: "rgba(255,255,255,0.3)" }}
              aria-hidden
            />
          </div>
          <p
            className="text-[13px] tracking-tight font-semibold mb-2 leading-snug"
            style={{ color: "rgba(240,240,240,0.6)" }}
          >
            {def.shortDescription}
          </p>
          <p
            className="text-[12px] leading-relaxed"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            {meta.lockReason}
          </p>
        </div>
      )
    }
    return (
      <Link
        key={id}
        href={`/mock/run?mode=${id}`}
        className="group block p-5 rounded-2xl border border-white/[0.08] bg-[#0D0D0D] transition-all duration-300 hover:border-white/[0.14] hover:-translate-y-0.5"
        style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)" }}
      >
        <div className="flex items-baseline justify-between gap-3 mb-3">
          <p
            className="text-[10px] uppercase tracking-[0.22em] font-semibold"
            style={{ color: "#C9A84C" }}
          >
            {def.label}
          </p>
          <p className="text-[11px] text-[#888888] tracking-tight tabular-nums">
            {def.totalQuestionsHint} Q · {def.totalMinutesHint} min
          </p>
        </div>
        <p className="text-[13px] text-[#F0F0F0] tracking-tight font-semibold mb-2 leading-snug">
          {def.shortDescription}
        </p>
        <p className="text-[12px] text-[#888888] leading-relaxed line-clamp-2">
          {def.description}
        </p>
        {meta.bestWhen && (
          <p
            className="text-[11px] mt-3 leading-snug"
            style={{ color: "rgba(201,168,76,0.7)" }}
          >
            Best when: {meta.bestWhen}
          </p>
        )}
        <div
          className="flex items-center gap-1.5 mt-4 text-[12px] font-semibold tracking-tight transition-transform group-hover:translate-x-0.5"
          style={{ color: "#C9A84C" }}
        >
          Start
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </Link>
    )
  }

  return (
    <section className="space-y-7">
      <div>
        <div className="flex items-center gap-3 mb-3">
          <span
            className="h-px w-8"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(201,168,76,0.6))",
            }}
            aria-hidden
          />
          <p
            className="text-[10px] uppercase tracking-[0.22em] font-semibold"
            style={{ color: "#C9A84C" }}
          >
            Other mock modes
          </p>
        </div>
        <p className="text-[13px] text-[#C0C0C0] leading-relaxed max-w-2xl">
          Variants share the same scoring scale, but only the full-length
          mock should be treated as a readiness anchor. The variants
          below are training tools — single-section pacing, advanced
          pressure, weakness repair, and timed retrieval.
        </p>
      </div>

      {/* Group 1 — Section timing */}
      <div>
        <p
          className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#888888] mb-3"
        >
          Section timing
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {SECTION_TIMING.map(renderCard)}
        </div>
      </div>

      {/* Group 2 — Targeted training */}
      <div>
        <p
          className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#888888] mb-3"
        >
          Targeted training
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {TARGETED.map(renderCard)}
        </div>
      </div>
    </section>
  )
}
