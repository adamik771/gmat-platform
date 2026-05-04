import Link from "next/link"
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calendar,
  Clock,
  RotateCcw,
  Sparkles,
  Target,
  TrendingDown,
} from "lucide-react"
import { createSupabaseServer } from "@/lib/supabase/server"
import {
  buildEnhancedReport,
  computeSectionOrderRecommendation,
  DIAGNOSTIC_SECTIONS,
  type DiagnosticAttempt,
  type SectionResult,
  type TimingAnalysis,
  type TrapPattern,
} from "@/lib/diagnostic"
import { getQuestionsByIds } from "@/lib/content"
import { TOPIC_TO_CHAPTER } from "@/lib/topic-chapter-map"
import type { Section } from "@/types"

export const metadata = {
  title: "Diagnostic Report",
}

export default async function DiagnosticReportPage() {
  const supabase = await createSupabaseServer()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return (
      <EmptyFrame
        title="Sign in to view your diagnostic report"
        body="Your diagnostic is personalised — sign in to see the section scores and weak-topic breakdown."
      />
    )
  }

  const attempts: DiagnosticAttempt[] = []
  for (const section of DIAGNOSTIC_SECTIONS) {
    const slug = `diagnostic-${section.toLowerCase()}`
    const { data: session } = await supabase
      .from("practice_sessions")
      .select("id, created_at")
      .eq("user_id", user.id)
      .eq("slug", slug)
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle()
    if (!session) continue
    const { data: rows } = await supabase
      .from("practice_attempts")
      .select("question_id, section, topic, subtopic, difficulty, is_correct, time_spent_ms")
      .eq("session_id", session.id)
    for (const row of rows ?? []) {
      attempts.push({
        questionId: row.question_id as string,
        section: row.section as Section,
        topic: (row.topic as string | null) ?? "General",
        subtopic: (row.subtopic as string | null) ?? "General",
        difficulty: (row.difficulty as "Beginner" | "Intermediate" | "Advanced") ?? "Intermediate",
        isCorrect: !!row.is_correct,
        timeSpentMs: (row.time_spent_ms as number | null) ?? undefined,
      })
    }
  }

  if (attempts.length === 0) {
    return (
      <EmptyFrame
        title="Take the diagnostic first"
        body={
          <>
            Head back to{" "}
            <Link
              href="/diagnostic"
              className="underline underline-offset-2"
              style={{ color: "#C9A84C" }}
            >
              the diagnostic
            </Link>{" "}
            and complete at least one section. Your report builds as sections finish.
          </>
        }
      />
    )
  }

  // Resolve the questions referenced by these attempts so the enhanced
  // report can read each question's commonTrap / relatedReading metadata.
  // Missing ids are silently skipped — the enhanced builder degrades
  // gracefully (those signals just don't fire).
  const attemptQuestionIds = Array.from(new Set(attempts.map((a) => a.questionId)))
  const attemptQuestions = getQuestionsByIds(attemptQuestionIds)
  const report = buildEnhancedReport(attempts, attemptQuestions)
  const completedSections = new Set(report.sections.map((s) => s.section))
  const allComplete = completedSections.size === DIAGNOSTIC_SECTIONS.length
  const sectionRec = computeSectionOrderRecommendation(report.sections)
  const weakRows = report.sections
    .flatMap((s) =>
      s.weakTopics.map((t) => ({
        section: s.section,
        topic: t.topic,
        accuracy: t.accuracy,
        attempts: t.attempts,
      }))
    )
    .sort((a, b) => a.accuracy - b.accuracy)
    .slice(0, 5)

  return (
    <div className="relative">
      <div
        className="absolute inset-x-0 top-0 h-[520px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(201,168,76,0.09) 0%, transparent 60%)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 pointer-events-none bg-grain opacity-[0.03] mix-blend-overlay"
        aria-hidden
      />

      <div className="relative max-w-4xl mx-auto space-y-14">
        <Link
          href="/diagnostic"
          className="inline-flex items-center gap-1.5 text-[12px] tracking-tight text-[#888888] hover:text-[#F0F0F0] transition-colors"
        >
          <ArrowLeft className="w-3 h-3" />
          Back to diagnostic
        </Link>

        {/* HERO SCORE CALLOUT */}
        <div className="text-center pt-4">
          <div className="inline-flex items-center gap-3 mb-6">
            <span
              className="h-px w-10"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(201,168,76,0.6))",
              }}
            />
            <p
              className="text-[10px] uppercase tracking-[0.22em] font-semibold"
              style={{ color: "#C9A84C" }}
            >
              {allComplete ? "Diagnostic Result" : "Partial Diagnostic"}
            </p>
            <span
              className="h-px w-10"
              style={{
                background:
                  "linear-gradient(to left, transparent, rgba(201,168,76,0.6))",
              }}
            />
          </div>

          <p className="text-[11px] uppercase tracking-[0.22em] text-[#555555] mb-10 font-medium">
            {completedSections.size} of {DIAGNOSTIC_SECTIONS.length} sections
          </p>

          <div
            className="relative inline-flex items-center gap-8 sm:gap-10 px-8 sm:px-12 py-8 sm:py-10 rounded-2xl border mb-8"
            style={{
              borderColor: "rgba(201,168,76,0.18)",
              backgroundColor: "#111111",
              boxShadow:
                "0 0 80px rgba(201,168,76,0.08), inset 0 1px 0 rgba(255,255,255,0.04)",
            }}
          >
            <div className="text-center relative px-4">
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 50% 50%, rgba(201,168,76,0.25) 0%, transparent 65%)",
                  filter: "blur(22px)",
                }}
                aria-hidden
              />
              <p
                className="relative font-display text-6xl sm:text-8xl font-semibold tracking-[-0.03em] leading-none"
                style={{ color: "#C9A84C" }}
              >
                {report.totalScore}
              </p>
              <div className="relative flex items-center justify-center gap-2 mt-4">
                <span
                  className="h-px w-10"
                  style={{
                    background:
                      "linear-gradient(to right, transparent, rgba(201,168,76,0.5))",
                  }}
                />
                <p
                  className="text-[10px] tracking-[0.22em] uppercase font-semibold"
                  style={{ color: "#C9A84C" }}
                >
                  {allComplete ? "Readiness Band" : "Partial"}
                </p>
                <span
                  className="h-px w-10"
                  style={{
                    background:
                      "linear-gradient(to left, transparent, rgba(201,168,76,0.5))",
                  }}
                />
              </div>
            </div>
          </div>

          <p className="text-[15px] leading-[1.75] text-[#C0C0C0] max-w-2xl mx-auto">
            {allComplete
              ? "Average of your three section scores — a readiness band for where your prep stands today, not a test-day forecast. GMAT Focus reports total in 10-point increments from 205 to 805."
              : `You've completed ${completedSections.size} of ${DIAGNOSTIC_SECTIONS.length} sections. Finish the remaining to unlock your full readiness band.`}
          </p>
        </div>

        {/* SECTION BREAKDOWN */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span
              className="h-px w-8"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(201,168,76,0.6))",
              }}
            />
            <p
              className="text-[10px] uppercase tracking-[0.22em] font-semibold"
              style={{ color: "#C9A84C" }}
            >
              By Section
            </p>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-[#F0F0F0] mb-8 leading-[1.1]">
            Section{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              breakdown.
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {DIAGNOSTIC_SECTIONS.map((section) => {
              const s = report.sections.find((x) => x.section === section)
              if (!s) return <PendingCard key={section} section={section} />
              return <SectionCard key={section} result={s} />
            })}
          </div>
        </div>

        {/* SECTION-ORDER RECOMMENDATION */}
        {sectionRec && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span
                className="h-px w-8"
                style={{
                  background:
                    "linear-gradient(to right, transparent, rgba(201,168,76,0.6))",
                }}
              />
              <p
                className="text-[10px] uppercase tracking-[0.22em] font-semibold"
                style={{ color: "#C9A84C" }}
              >
                Recommended Mock Order
                {!sectionRec.confident && (
                  <span className="ml-2 text-[#555555] font-medium normal-case tracking-normal">
                    · low signal
                  </span>
                )}
              </p>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-[#F0F0F0] mb-5 leading-[1.1]">
              Lead with the{" "}
              <span className="font-display-italic" style={{ color: "#C9A84C" }}>
                weakest.
              </span>
            </h2>

            <div
              className="relative p-7 sm:p-9 rounded-2xl border border-white/[0.08] bg-[#0D0D0D] overflow-hidden"
              style={{
                boxShadow:
                  "0 0 60px rgba(201,168,76,0.05), inset 0 1px 0 rgba(255,255,255,0.04)",
              }}
            >
              <div
                className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 100% 0%, rgba(201,168,76,0.08) 0%, transparent 60%)",
                }}
                aria-hidden
              />
              <div className="relative flex items-center gap-3 flex-wrap mb-5">
                {sectionRec.order.map((sec, i) => (
                  <span key={sec} className="inline-flex items-center gap-2">
                    {i > 0 && (
                      <ArrowRight className="w-3.5 h-3.5 text-[#555555]" />
                    )}
                    <span
                      className="px-3 py-1.5 rounded-lg text-[12px] font-semibold tracking-tight"
                      style={{
                        backgroundColor: "rgba(201,168,76,0.12)",
                        color: "#C9A84C",
                      }}
                    >
                      {i + 1}. {sec}
                    </span>
                  </span>
                ))}
              </div>
              <p className="relative text-[15px] leading-[1.75] text-[#C0C0C0]">
                {sectionRec.rationale}
              </p>
              <p className="relative text-[12px] text-[#555555] leading-relaxed mt-3 italic">
                Set this order on your next mock&apos;s intro screen. If your score drops vs. a prior order, try reversing it on the mock after.
              </p>
            </div>
          </div>
        )}

        {/* WEAK TOPICS */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span
              className="h-px w-8"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(201,168,76,0.6))",
              }}
            />
            <p
              className="text-[10px] uppercase tracking-[0.22em] font-semibold"
              style={{ color: "#C9A84C" }}
            >
              Weak Topics
            </p>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-[#F0F0F0] mb-8 leading-[1.1]">
            Where to{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              focus.
            </span>
          </h2>

          {weakRows.length === 0 ? (
            <p className="text-[15px] leading-[1.75] text-[#C0C0C0]">
              No clearly weaker topics — your diagnostic came in evenly across the board.
            </p>
          ) : (
            <div className="space-y-3">
              {weakRows.map((row, idx) => {
                const slug = TOPIC_TO_CHAPTER[row.topic] ?? null
                return (
                  <div
                    key={`${row.section}-${row.topic}`}
                    className="p-5 rounded-2xl border border-white/[0.08] bg-[#0D0D0D] flex items-start sm:items-center justify-between gap-4 flex-col sm:flex-row transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.12]"
                    style={{
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
                    }}
                  >
                    <div className="flex items-start gap-4 min-w-0">
                      <span
                        className="font-display font-display-italic text-[1.75rem] leading-none flex-shrink-0 mt-0.5"
                        style={{ color: "#C9A84C" }}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span
                            className="px-2 py-0.5 rounded text-[10px] uppercase tracking-[0.18em] font-semibold"
                            style={{
                              backgroundColor: "rgba(201,168,76,0.08)",
                              color: "#C9A84C",
                            }}
                          >
                            {row.section}
                          </span>
                          <span className="text-[12px] text-[#555555] inline-flex items-center gap-1.5">
                            <TrendingDown className="w-3.5 h-3.5 text-[#FF4444]" />
                            {Math.round(row.accuracy * 100)}% on {row.attempts} question{row.attempts === 1 ? "" : "s"}
                          </span>
                        </div>
                        <p className="text-[15px] font-semibold text-[#F0F0F0] tracking-tight">
                          {row.topic}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 self-end sm:self-auto flex-shrink-0">
                      {slug && (
                        <Link
                          href={`/practice/session/${slug}`}
                          className="text-[12px] px-3.5 py-1.5 rounded-lg font-semibold tracking-tight transition-all hover:scale-[1.03]"
                          style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
                        >
                          Drill
                        </Link>
                      )}
                      <Link
                        href={slug ? `/chapters/${slug}` : "/chapters"}
                        className="text-[12px] px-3.5 py-1.5 rounded-lg font-semibold tracking-tight transition-all hover:scale-[1.03]"
                        style={{
                          backgroundColor: "rgba(201,168,76,0.12)",
                          color: "#C9A84C",
                        }}
                      >
                        Read
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* TRAP PATTERNS — surfaces trap_type / common_trap from missed questions */}
        {report.trapPatterns.length > 0 && (
          <TrapPatternsSection traps={report.trapPatterns} />
        )}

        {/* TIMING ANALYSIS — per-section pacing classification */}
        {report.timingAnalysis.length > 0 && (
          <TimingAnalysisSection timing={report.timingAnalysis} />
        )}

        {/* FIRST 5 DAYS — PERSONALIZED PLAN */}
        <PersonalizedWeekPlan report={report} />

        {/* RECOMMENDED PATH + QUICK LINKS */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span
              className="h-px w-8"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(201,168,76,0.6))",
              }}
            />
            <p
              className="text-[10px] uppercase tracking-[0.22em] font-semibold"
              style={{ color: "#C9A84C" }}
            >
              Next Moves
            </p>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-[#F0F0F0] mb-8 leading-[1.1]">
            Where we go{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              from here.
            </span>
          </h2>

          <Link
            href="/study-plan"
            className="group relative flex items-center justify-between gap-4 p-7 rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.01]"
            style={{
              borderColor: "rgba(201,168,76,0.22)",
              backgroundColor: "#0D0D0D",
              boxShadow:
                "0 0 60px rgba(201,168,76,0.05), inset 0 1px 0 rgba(255,255,255,0.04)",
            }}
          >
            <div
              className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 100% 0%, rgba(201,168,76,0.1) 0%, transparent 60%)",
              }}
              aria-hidden
            />
            <div className="relative flex items-start gap-4">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  backgroundColor: "rgba(201,168,76,0.12)",
                  border: "1px solid rgba(201,168,76,0.25)",
                }}
              >
                <Calendar className="w-5 h-5" style={{ color: "#C9A84C" }} />
              </div>
              <div>
                <p className="text-[16px] font-semibold text-[#F0F0F0] mb-1 tracking-tight">
                  Open your personalized Study Plan
                </p>
                <p className="text-[13px] text-[#C0C0C0] leading-relaxed">
                  Today&apos;s Focus, weekly cadence, weakest topics — already wired to your diagnostic results.
                </p>
              </div>
            </div>
            <ArrowRight
              className="relative w-5 h-5 flex-shrink-0 transition-transform group-hover:translate-x-1"
              style={{ color: "#C9A84C" }}
            />
          </Link>

          <div
            className="mt-4 p-7 rounded-2xl border border-white/[0.08] bg-[#0D0D0D]"
            style={{
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
            }}
          >
            <p
              className="text-[10px] uppercase tracking-[0.22em] font-semibold mb-5"
              style={{ color: "#C9A84C" }}
            >
              Quick Links
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <ArrowRight
                  className="w-4 h-4 mt-1.5 flex-shrink-0"
                  style={{ color: "#C9A84C" }}
                />
                <span className="text-[15px] leading-[1.75] text-[#C0C0C0]">
                  Every question you missed is already in{" "}
                  <Link
                    href="/review"
                    className="underline underline-offset-4 decoration-[rgba(201,168,76,0.4)] hover:decoration-[#C9A84C] transition-colors font-medium"
                    style={{ color: "#C9A84C" }}
                  >
                    Daily Review
                  </Link>{" "}
                  — retrieval practice on today&apos;s misses is the highest-ROI follow-up.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight
                  className="w-4 h-4 mt-1.5 flex-shrink-0"
                  style={{ color: "#C9A84C" }}
                />
                <span className="text-[15px] leading-[1.75] text-[#C0C0C0]">
                  Re-take a section any time — your score, weak topics, and the rest of the plan update each attempt.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function PersonalizedWeekPlan({
  report,
}: {
  report: { sections: SectionResult[] }
}) {
  const allWeakTopics = report.sections
    .flatMap((s) => s.weakTopics.map((t) => ({ ...t, section: s.section })))
    .sort((a, b) => a.accuracy - b.accuracy)
    .slice(0, 3)

  if (allWeakTopics.length === 0) return null

  type Day =
    | { kind: "chapter"; topic: string; section: Section; chapterSlug: string | null; accuracy: number }
    | { kind: "review" }
    | { kind: "mock" }

  const days: Day[] = []
  const chapterDays = allWeakTopics.map<Day>((t) => ({
    kind: "chapter",
    topic: t.topic,
    section: t.section,
    chapterSlug: TOPIC_TO_CHAPTER[t.topic] ?? null,
    accuracy: t.accuracy,
  }))
  days.push(chapterDays[0])
  days.push({ kind: "review" })
  if (chapterDays[1]) days.push(chapterDays[1])
  days.push({ kind: "mock" })
  if (chapterDays[2]) days.push(chapterDays[2])

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <span
          className="h-px w-8"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(201,168,76,0.6))",
          }}
        />
        <p
          className="text-[10px] uppercase tracking-[0.22em] font-semibold"
          style={{ color: "#C9A84C" }}
        >
          First 5 Days
        </p>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-[#F0F0F0] mb-8 leading-[1.1]">
        Your opening{" "}
        <span className="font-display-italic" style={{ color: "#C9A84C" }}>
          moves.
        </span>
      </h2>
      <div className="space-y-3">
        {days.map((day, i) => (
          <DayRow key={i} dayNumber={i + 1} day={day} />
        ))}
      </div>
    </div>
  )
}

function DayRow({
  dayNumber,
  day,
}: {
  dayNumber: number
  day:
    | { kind: "chapter"; topic: string; section: Section; chapterSlug: string | null; accuracy: number }
    | { kind: "review" }
    | { kind: "mock" }
}) {
  let icon: typeof Sparkles
  let title: string
  let subtitle: string
  let href: string

  if (day.kind === "chapter") {
    icon = BookOpen
    title = `Read the ${day.topic} chapter`
    subtitle = `${day.section} · you hit ${Math.round(day.accuracy * 100)}% on the diagnostic here`
    href = day.chapterSlug ? `/chapters/${day.chapterSlug}` : "/chapters"
  } else if (day.kind === "review") {
    icon = RotateCcw
    title = "Daily Review"
    subtitle = "Retrieval practice on your diagnostic misses — seeded for you."
    href = "/review"
  } else {
    icon = Target
    title = "Full-length mock"
    subtitle = "Measure against your diagnostic baseline after a few days of focused study."
    href = "/mock"
  }

  const Icon = icon

  return (
    <Link
      href={href}
      className="group flex items-center gap-5 p-5 rounded-2xl border border-white/[0.08] bg-[#0D0D0D] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.12]"
      style={{
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
      }}
    >
      <span
        className="font-display font-display-italic text-[1.75rem] leading-none flex-shrink-0"
        style={{ color: "#C9A84C" }}
      >
        {String(dayNumber).padStart(2, "0")}
      </span>
      <Icon className="w-4 h-4 flex-shrink-0" style={{ color: "#888888" }} />
      <div className="flex-1 min-w-0">
        <p className="text-[15px] font-semibold text-[#F0F0F0] tracking-tight">
          {title}
        </p>
        <p className="text-[13px] text-[#C0C0C0] truncate mt-0.5">{subtitle}</p>
      </div>
      <ArrowRight
        className="w-4 h-4 flex-shrink-0 text-[#555555] transition-all group-hover:translate-x-1 group-hover:text-[#C9A84C]"
      />
    </Link>
  )
}

function TrapPatternsSection({ traps }: { traps: TrapPattern[] }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <span
          className="h-px w-8"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(201,168,76,0.6))",
          }}
        />
        <p
          className="text-[10px] uppercase tracking-[0.22em] font-semibold"
          style={{ color: "#C9A84C" }}
        >
          Trap Patterns
        </p>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-[#F0F0F0] mb-4 leading-[1.1]">
        Where you{" "}
        <span className="font-display-italic" style={{ color: "#C9A84C" }}>
          slipped.
        </span>
      </h2>
      <p className="text-[14px] text-[#888888] mb-6 leading-relaxed">
        Each trap below is a named wrong-answer pattern from the curriculum. You fell into it on the diagnostic — drill the recognition signal until you spot it cold.
      </p>
      <div className="space-y-3">
        {traps.map((t, idx) => (
          <div
            key={t.trap}
            className="p-5 rounded-2xl border border-white/[0.08] bg-[#0D0D0D] flex items-start gap-4"
            style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)" }}
          >
            <span
              className="font-display font-display-italic text-[1.75rem] leading-none flex-shrink-0 mt-0.5"
              style={{ color: "#C9A84C" }}
            >
              {String(idx + 1).padStart(2, "0")}
            </span>
            <AlertTriangle
              className="w-4 h-4 flex-shrink-0 mt-1.5"
              style={{ color: "#FF4444" }}
            />
            <div className="min-w-0 flex-1">
              <p className="text-[15px] font-semibold text-[#F0F0F0] tracking-tight mb-1">
                {t.trap}
              </p>
              <p className="text-[12px] text-[#888888] leading-relaxed">
                {t.occurrences === 1
                  ? `Hit once on the diagnostic.`
                  : `Hit ${t.occurrences} times on the diagnostic.`}
                {t.trapType ? ` · taxonomy: ${t.trapType}` : null}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function TimingAnalysisSection({ timing }: { timing: TimingAnalysis[] }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <span
          className="h-px w-8"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(201,168,76,0.6))",
          }}
        />
        <p
          className="text-[10px] uppercase tracking-[0.22em] font-semibold"
          style={{ color: "#C9A84C" }}
        >
          Pacing
        </p>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-[#F0F0F0] mb-4 leading-[1.1]">
        How you spent the{" "}
        <span className="font-display-italic" style={{ color: "#C9A84C" }}>
          clock.
        </span>
      </h2>
      <p className="text-[14px] text-[#888888] mb-6 leading-relaxed">
        Per-section behavioural pacing label. The label drives study-plan recommendations on the next page.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {timing.map((t) => {
          const avgSec = t.avgTimeMs ? Math.round(t.avgTimeMs / 1000) : null
          const patternColor =
            t.pattern === "efficient"
              ? "#3ECF8E"
              : t.pattern === "rushed" || t.pattern === "stuck"
                ? "#FF4444"
                : "#C9A84C"
          return (
            <div
              key={t.section}
              className="p-5 rounded-2xl border border-white/[0.08] bg-[#0D0D0D]"
              style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)" }}
            >
              <div className="flex items-center justify-between mb-3">
                <p
                  className="text-[10px] uppercase tracking-[0.22em] font-semibold"
                  style={{ color: "#C9A84C" }}
                >
                  {t.section}
                </p>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: patternColor }}>
                  <Clock className="w-3 h-3" />
                  {t.pattern}
                </span>
              </div>
              {avgSec !== null && (
                <p className="text-[13px] text-[#C0C0C0] mb-2 tracking-tight">
                  <span className="text-[#F0F0F0] font-semibold">{avgSec}s</span> avg per question
                  <span className="mx-1.5 text-[#333333]">·</span>
                  <span className="text-[#888888]">
                    {t.rushedCount} rushed, {t.laboredCount} labored
                  </span>
                </p>
              )}
              <p className="text-[12px] text-[#888888] leading-relaxed">{t.summary}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function SectionCard({ result }: { result: SectionResult }) {
  return (
    <div
      className="group p-6 rounded-2xl border border-white/[0.08] bg-[#0D0D0D] transition-all duration-300 hover:-translate-y-0.5"
      style={{
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
      }}
    >
      <p
        className="text-[10px] uppercase tracking-[0.22em] font-semibold mb-3"
        style={{ color: "#C9A84C" }}
      >
        {result.section}
      </p>
      <p className="font-display text-[2.75rem] font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-none mb-3">
        {result.score}
      </p>
      <p className="text-[13px] text-[#888888] tracking-tight">
        <span className="text-[#C0C0C0]">
          {result.correct} / {result.total}
        </span>
        <span className="mx-1.5 text-[#333333]">·</span>
        {Math.round(result.accuracy * 100)}%
      </p>
    </div>
  )
}

function PendingCard({ section }: { section: Section }) {
  return (
    <div
      className="p-6 rounded-2xl border border-dashed border-white/[0.08] bg-[#0A0A0A]"
    >
      <p
        className="text-[10px] uppercase tracking-[0.22em] font-semibold mb-3 text-[#555555]"
      >
        {section}
      </p>
      <p className="font-display text-[2.75rem] font-semibold text-[#333333] tracking-[-0.02em] leading-none mb-3">
        —
      </p>
      <p className="text-[13px] text-[#555555]">Not yet taken</p>
    </div>
  )
}

function EmptyFrame({
  title,
  body,
}: {
  title: string
  body: React.ReactNode
}) {
  return (
    <div className="relative">
      <div
        className="absolute inset-x-0 top-0 h-80 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 65%)",
        }}
        aria-hidden
      />
      <div className="relative max-w-2xl mx-auto space-y-8">
        <Link
          href="/diagnostic"
          className="inline-flex items-center gap-1.5 text-[12px] tracking-tight text-[#888888] hover:text-[#F0F0F0] transition-colors"
        >
          <ArrowLeft className="w-3 h-3" />
          Back to diagnostic
        </Link>
        <div className="flex items-center gap-3">
          <span
            className="h-px w-8"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(201,168,76,0.6))",
            }}
          />
          <p
            className="text-[10px] uppercase tracking-[0.22em] font-semibold"
            style={{ color: "#C9A84C" }}
          >
            Diagnostic Report
          </p>
        </div>
        <div
          className="p-8 sm:p-10 rounded-2xl border border-white/[0.08] bg-[#0D0D0D]"
          style={{
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
          }}
        >
          <h1 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#F0F0F0] mb-4 leading-[1.1]">
            {title}
          </h1>
          <div className="text-[15px] leading-[1.75] text-[#C0C0C0]">{body}</div>
        </div>
      </div>
    </div>
  )
}
