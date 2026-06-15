import Link from "next/link"
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Check,
  Clock,
  Flag,
  Sparkles,
  TrendingDown,
  X,
} from "lucide-react"
import { createSupabaseServer } from "@/lib/supabase/server"
import { MOCK_SECTIONS, accuracyToScore } from "@/lib/mock"
import { snapToValidTotal } from "@/lib/scoring"
import { getAllQuestions, getQuestionsByIds } from "@/lib/content"
import {
  buildEnhancedReport,
  type DiagnosticAttempt,
  type TimingAnalysis,
  type TrapPattern,
  type ChapterRecommendation,
} from "@/lib/diagnostic"
import {
  totalPercentile,
  sectionPercentile,
  percentileBand,
  accuracyToSectionScore,
  interpretTotalScore,
} from "@/lib/score-percentiles"
import type { Difficulty, Section } from "@/types"

export const metadata = {
  title: "Mock Report",
}

interface SectionReport {
  section: Section
  total: number
  correct: number
  accuracy: number
  score: number
  totalTimeMs: number
  avgTimePerQuestionMs: number
  weakTopics: Array<{ topic: string; accuracy: number; attempts: number }>
}

interface FlaggedRow {
  questionId: string
  section: Section
  topic: string
  preview: string
  correct: boolean | null
}

function stripMarkdown(input: string, maxLen = 140): string {
  const cleaned = input
    .replace(/`/g, "")
    .replace(/[#*_>]/g, "")
    .replace(/\n+/g, " ")
    .trim()
  return cleaned.length > maxLen ? `${cleaned.slice(0, maxLen).trim()}…` : cleaned
}

export default async function MockReportPage() {
  const supabase = await createSupabaseServer()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return (
      <EmptyFrame
        title="Sign in to view your mock report"
        body="Mocks are personalised — sign in to see your results."
      />
    )
  }

  const { data: sessionRows } = await supabase
    .from("practice_sessions")
    .select("id, slug, section, topic, accuracy, total_questions, correct_count, total_time_ms, created_at")
    .eq("user_id", user.id)
    .like("slug", "mock-%")
    .order("created_at", { ascending: false })
    .limit(20)

  if (!sessionRows || sessionRows.length === 0) {
    return (
      <EmptyFrame
        title="No mock yet"
        body={
          <>
            Head back to{" "}
            <Link
              href="/mock"
              className="underline underline-offset-2"
              style={{ color: "#C9A84C" }}
            >
              Mock
            </Link>{" "}
            and take your first full-length simulation. The report builds once at least one section is complete.
          </>
        }
      />
    )
  }

  const firstSlug = sessionRows[0].slug as string
  const dateMatch = firstSlug.match(/^mock-(\d{4}-\d{2}-\d{2})-/)
  const targetDate = dateMatch?.[1] ?? null

  const mostRecent = targetDate
    ? sessionRows.filter((r) => (r.slug as string).startsWith(`mock-${targetDate}-`))
    : sessionRows.slice(0, 3)

  // Mode label = the `topic` we wrote at save time (e.g., "Full mock",
  // "Quant-only mock", "Hard-question mock"). Older sessions wrote the
  // legacy literal "Full-Length Mock" — treat that as the full mode.
  const rawTopic = (mostRecent[0]?.topic as string | null) ?? null
  const modeLabel =
    rawTopic && rawTopic !== "Full-Length Mock" ? rawTopic : "Full mock"

  const byDate = new Map<string, typeof sessionRows>()
  for (const row of sessionRows) {
    const m = (row.slug as string).match(/^mock-(\d{4}-\d{2}-\d{2})-/)
    if (!m) continue
    const d = m[1]
    if (d === targetDate) continue
    const arr = byDate.get(d) ?? []
    arr.push(row)
    byDate.set(d, arr)
  }
  let previousTotal: number | null = null
  let previousDate: string | null = null
  for (const [date, rows] of byDate) {
    if (rows.length < MOCK_SECTIONS.length) continue
    const accBySection: Partial<Record<Section, number>> = {}
    for (const r of rows) {
      const sec = r.section as Section
      if (accBySection[sec] === undefined) {
        // Full-set accuracy (correct / total_questions) — matches how the
        // current mock's total is computed below. The stored `accuracy` column
        // is answered-only (correct/answered), so mixing the two produced a
        // bogus current-vs-previous delta.
        const total = (r.total_questions as number) ?? 0
        const correct = (r.correct_count as number) ?? 0
        accBySection[sec] = total === 0 ? 0 : correct / total
      }
    }
    const scores = MOCK_SECTIONS.map((s) => accBySection[s])
      .filter((v): v is number => typeof v === "number")
      .map((a) => accuracyToScore(a))
    if (scores.length === MOCK_SECTIONS.length) {
      previousTotal = snapToValidTotal(scores.reduce((a, b) => a + b, 0) / 3)
      previousDate = date
      break
    }
  }

  const attemptCorrectById = new Map<string, boolean>()
  const reports: SectionReport[] = []
  // Aggregate attempts across all sections for the enhanced report.
  // Diagnostic attempts shape mirrors what `buildEnhancedReport` expects
  // (it doesn't care that the source is a mock vs. a diagnostic).
  const enhancedAttempts: DiagnosticAttempt[] = []
  for (const sessionRow of mostRecent) {
    const section = sessionRow.section as Section
    const { data: attempts } = await supabase
      .from("practice_attempts")
      .select("question_id, section, topic, subtopic, difficulty, is_correct, time_spent_ms")
      .eq("session_id", sessionRow.id as string)

    for (const a of attempts ?? []) {
      if (typeof a.question_id === "string") {
        attemptCorrectById.set(a.question_id, Boolean(a.is_correct))
        enhancedAttempts.push({
          questionId: a.question_id,
          section: (a.section as Section) ?? section,
          topic: (a.topic as string | null) ?? "General",
          subtopic: (a.subtopic as string | null) ?? "General",
          difficulty:
            (a.difficulty as Difficulty | null) ?? "Intermediate",
          isCorrect: Boolean(a.is_correct),
          timeSpentMs:
            typeof a.time_spent_ms === "number" ? a.time_spent_ms : undefined,
        })
      }
    }

    const total = (sessionRow.total_questions as number) ?? 0
    const correct = (sessionRow.correct_count as number) ?? 0
    const accuracy = total === 0 ? 0 : correct / total
    const totalTimeMs = (sessionRow.total_time_ms as number) ?? 0

    const byTopic = new Map<string, { correct: number; total: number }>()
    for (const a of attempts ?? []) {
      const topic = (a.topic as string | null) ?? "General"
      const t = byTopic.get(topic) ?? { correct: 0, total: 0 }
      t.total += 1
      if (a.is_correct) t.correct += 1
      byTopic.set(topic, t)
    }
    const weakTopics = [...byTopic.entries()]
      .filter(([, v]) => v.total >= 2)
      .map(([topic, v]) => ({
        topic,
        accuracy: v.correct / v.total,
        attempts: v.total,
      }))
      .sort((a, b) => a.accuracy - b.accuracy)
      .slice(0, 3)

    reports.push({
      section,
      total,
      correct,
      accuracy,
      score: accuracyToScore(accuracy),
      totalTimeMs,
      avgTimePerQuestionMs: total > 0 ? totalTimeMs / total : 0,
      weakTopics,
    })
  }

  // Resolve unique attempt question ids → ParsedQuestion[] so the
  // enhanced builder can read each question's commonTrap / relatedReading
  // metadata. Missing ids are silently skipped.
  const enhancedQuestionIds = Array.from(
    new Set(enhancedAttempts.map((a) => a.questionId))
  )
  const enhancedQuestions = getQuestionsByIds(enhancedQuestionIds)
  const enhancedReport = buildEnhancedReport(enhancedAttempts, enhancedQuestions)

  const totalScore = reports.length
    ? snapToValidTotal(
        reports.reduce((acc, r) => acc + r.score, 0) / reports.length
      )
    : 205
  const complete = reports.length === MOCK_SECTIONS.length

  let editsTotal = 0
  let editsHelped = 0
  let editsHurt = 0
  let editsNeutral = 0
  if (targetDate) {
    const reviewEdits = (user.user_metadata?.mock_review_edits ?? {}) as Record<
      string,
      Partial<Record<Section, Array<{
        questionId: string
        preEditAnswer: number | null
        postEditAnswer: number | null
      }>>>
    >
    const forDate = reviewEdits[targetDate] ?? {}
    const qIndex = new Map(getAllQuestions().map((q) => [q.id, q]))
    for (const section of MOCK_SECTIONS) {
      for (const edit of forDate[section] ?? []) {
        const q = qIndex.get(edit.questionId)
        if (!q) continue
        if (q.correctAnswer < 0) {
          editsTotal += 1
          editsNeutral += 1
          continue
        }
        const preWasCorrect = edit.preEditAnswer === q.correctAnswer
        const postWasCorrect = edit.postEditAnswer === q.correctAnswer
        editsTotal += 1
        if (!preWasCorrect && postWasCorrect) editsHelped += 1
        else if (preWasCorrect && !postWasCorrect) editsHurt += 1
        else editsNeutral += 1
      }
    }
  }

  const flaggedRows: FlaggedRow[] = []
  if (targetDate) {
    const mockFlags = (user.user_metadata?.mock_flags ?? {}) as Record<
      string,
      Partial<Record<Section, string[]>>
    >
    const forDate = mockFlags[targetDate] ?? {}
    const flatIds = new Set<string>()
    for (const section of MOCK_SECTIONS) {
      for (const id of forDate[section] ?? []) flatIds.add(id)
    }
    if (flatIds.size > 0) {
      const qIndex = new Map(getAllQuestions().map((q) => [q.id, q]))
      for (const section of MOCK_SECTIONS) {
        for (const id of forDate[section] ?? []) {
          const q = qIndex.get(id)
          if (!q) continue
          const correct = attemptCorrectById.has(id)
            ? attemptCorrectById.get(id)!
            : null
          flaggedRows.push({
            questionId: id,
            section,
            topic: q.topic,
            preview: stripMarkdown(q.prompt),
            correct,
          })
        }
      }
    }
  }

  const delta = complete && previousTotal !== null ? totalScore - previousTotal : null

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
          href="/mock"
          className="inline-flex items-center gap-1.5 text-[12px] tracking-tight text-[#888888] hover:text-[#F0F0F0] transition-colors"
        >
          <ArrowLeft className="w-3 h-3" />
          Back to Mock
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
              {complete ? "Mock Result" : "Partial Mock"}
            </p>
            <span
              className="h-px w-10"
              style={{
                background:
                  "linear-gradient(to left, transparent, rgba(201,168,76,0.6))",
              }}
            />
          </div>

          <p className="text-[11px] uppercase tracking-[0.22em] text-[#555555] mb-3 font-medium">
            {targetDate ?? "most recent"}
          </p>
          <div className="mb-10">
            <span
              className="inline-block text-[10px] uppercase tracking-[0.22em] font-semibold px-3 py-1 rounded-full border"
              style={{
                borderColor: "rgba(201,168,76,0.25)",
                backgroundColor: "rgba(201,168,76,0.08)",
                color: "#C9A84C",
              }}
            >
              {modeLabel}
            </span>
          </div>

          <div
            className="relative inline-flex items-center gap-8 sm:gap-10 px-8 sm:px-12 py-8 sm:py-10 rounded-2xl border mb-8"
            style={{
              borderColor: "rgba(201,168,76,0.18)",
              backgroundColor: "#111111",
              boxShadow:
                "0 0 80px rgba(201,168,76,0.08), inset 0 1px 0 rgba(255,255,255,0.04)",
            }}
          >
            {complete && previousTotal !== null ? (
              <>
                <div className="text-center">
                  <p className="font-display text-5xl sm:text-7xl font-semibold text-[#888888] tracking-[-0.03em] leading-none">
                    {previousTotal}
                  </p>
                  <p className="text-[10px] tracking-[0.18em] uppercase text-[#555555] mt-3 font-medium">
                    Previous
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <div
                    className="h-px w-12 sm:w-20"
                    style={{
                      background:
                        "linear-gradient(to right, rgba(201,168,76,0.1), #C9A84C, rgba(201,168,76,0.1))",
                    }}
                  />
                  <span
                    className="text-[10px] tracking-[0.2em] uppercase font-semibold"
                    style={{
                      color:
                        delta !== null && delta > 0
                          ? "#3ECF8E"
                          : delta !== null && delta < 0
                          ? "#FF4444"
                          : "#C9A84C",
                    }}
                  >
                    {delta !== null && delta > 0
                      ? `+${delta}`
                      : delta !== null && delta < 0
                      ? `${delta}`
                      : "±0"}
                  </span>
                </div>
                <div className="text-center relative">
                  <div
                    className="absolute inset-0 rounded-full pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(circle at 50% 50%, rgba(201,168,76,0.25) 0%, transparent 65%)",
                      filter: "blur(20px)",
                    }}
                    aria-hidden
                  />
                  <p
                    className="relative font-display text-5xl sm:text-7xl font-semibold tracking-[-0.03em] leading-none"
                    style={{ color: "#C9A84C" }}
                  >
                    {totalScore}
                  </p>
                  <p
                    className="relative text-[10px] tracking-[0.18em] uppercase mt-3 font-medium"
                    style={{ color: "#C9A84C" }}
                  >
                    This Mock
                  </p>
                </div>
              </>
            ) : (
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
                  {totalScore}
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
                    {complete ? "Final Total" : "Partial"}
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
            )}
          </div>

          <p className="text-[15px] leading-[1.75] text-[#C0C0C0] max-w-2xl mx-auto">
            {complete
              ? previousTotal !== null
                ? (
                  <>
                    Measured against your previous completed mock on{" "}
                    <span className="text-[#F0F0F0] font-medium">{previousDate}</span>. Treat the absolute score as a rough calibration — official reports use a slightly different scale — but trust the direction of the delta.
                  </>
                )
                : "Average of your three section scores on this mock. Take another mock in one to two weeks to see how this number moves."
              : `You completed ${reports.length} of ${MOCK_SECTIONS.length} sections. Finish the rest for a full estimate.`}
          </p>

          {complete && (
            <div className="mt-6 inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/[0.08] bg-[#0D0D0D]">
              <Sparkles className="w-3.5 h-3.5" style={{ color: "#C9A84C" }} />
              <p className="text-[12px] tracking-tight text-[#C0C0C0]">
                <span className="text-[#F0F0F0] font-semibold">
                  {percentileBand(totalPercentile(totalScore))}
                </span>
                <span className="mx-2 text-[#333333]">·</span>
                <span className="text-[#888888]">
                  {interpretTotalScore(totalScore, previousTotal).split(" — ")[1] ?? ""}
                </span>
              </p>
            </div>
          )}
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
            {MOCK_SECTIONS.map((section) => {
              const r = reports.find((x) => x.section === section)
              return (
                <div
                  key={section}
                  className="group p-6 rounded-2xl border border-white/[0.08] bg-[#0D0D0D] transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
                  }}
                >
                  <p
                    className="text-[10px] uppercase tracking-[0.22em] font-semibold mb-3"
                    style={{ color: "#C9A84C" }}
                  >
                    {section}
                  </p>
                  {r ? (
                    <>
                      <p className="font-display text-[2.75rem] font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-none mb-3">
                        {r.score}
                      </p>
                      <p className="text-[13px] text-[#888888] tracking-tight">
                        <span className="text-[#C0C0C0]">
                          {r.correct} / {r.total}
                        </span>
                        <span className="mx-1.5 text-[#333333]">·</span>
                        {Math.round(r.avgTimePerQuestionMs / 1000)}s avg/q
                      </p>
                      <p className="text-[11px] text-[#555555] mt-2 uppercase tracking-[0.16em] font-medium">
                        {sectionPercentile(section, accuracyToSectionScore(r.accuracy))}th percentile
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="font-display text-[2.75rem] font-semibold text-[#333333] tracking-[-0.02em] leading-none mb-3">
                        —
                      </p>
                      <p className="text-[13px] text-[#555555]">Not yet taken</p>
                    </>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* PACING — per-section behavioural timing label */}
        {enhancedReport.timingAnalysis.length > 0 && (
          <PacingSection timing={enhancedReport.timingAnalysis} />
        )}

        {/* TRAP PATTERNS — recurring named-trap failures */}
        {enhancedReport.trapPatterns.length > 0 && (
          <TrapPatternsSection traps={enhancedReport.trapPatterns} />
        )}

        {/* RECOMMENDED CHAPTERS — chapter-priority list from the enhanced engine */}
        {enhancedReport.recommendedChapters.length > 0 && (
          <RecommendedChaptersSection chapters={enhancedReport.recommendedChapters} />
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
            What we{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              learned.
            </span>
          </h2>

          {reports.every((r) => r.weakTopics.length === 0) ? (
            <p className="text-[15px] leading-[1.75] text-[#C0C0C0]">
              No clearly weaker topics — you came in evenly across the board.
            </p>
          ) : (
            <div className="space-y-3">
              {reports
                .flatMap((r) =>
                  r.weakTopics.map((t) => ({
                    section: r.section,
                    ...t,
                  }))
                )
                .sort((a, b) => a.accuracy - b.accuracy)
                .slice(0, 5)
                .map((row) => (
                  <div
                    key={`${row.section}-${row.topic}`}
                    className="p-5 rounded-2xl border border-white/[0.08] bg-[#0D0D0D] flex items-center justify-between gap-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.12]"
                    style={{
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
                    }}
                  >
                    <div className="flex items-start gap-3 min-w-0">
                      <TrendingDown className="w-4 h-4 mt-1 text-[#FF4444] flex-shrink-0" />
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
                          <span className="text-[12px] text-[#555555]">
                            {Math.round(row.accuracy * 100)}% on {row.attempts} question
                            {row.attempts === 1 ? "" : "s"}
                          </span>
                        </div>
                        <p className="text-[15px] font-semibold text-[#F0F0F0] tracking-tight">
                          {row.topic}
                        </p>
                      </div>
                    </div>
                    <Link
                      href="/chapters"
                      className="flex-shrink-0 text-[12px] px-3.5 py-1.5 rounded-lg font-semibold tracking-tight transition-all hover:scale-[1.03]"
                      style={{
                        backgroundColor: "rgba(201,168,76,0.12)",
                        color: "#C9A84C",
                      }}
                    >
                      Study
                    </Link>
                  </div>
                ))}
            </div>
          )}
        </div>

        {/* REVIEW / EDIT COACH */}
        {editsTotal > 0 && (
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
                Review / Edit Coach
              </p>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-[#F0F0F0] mb-5 leading-[1.1]">
              Should you{" "}
              <span className="font-display-italic" style={{ color: "#C9A84C" }}>
                second-guess?
              </span>
            </h2>
            <p className="text-[15px] leading-[1.75] text-[#C0C0C0] mb-8 max-w-2xl">
              {editsHelped > editsHurt
                ? "Your edits improved your score on balance — keep trusting yourself in review."
                : editsHurt > editsHelped
                ? "Most of your edits hurt — unless you spotted a specific, fixable mistake, leave your first answer alone next time."
                : "Your edits broke even. Treat the review phase as surgical, not as \"second-guess everything.\""}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div
                className="p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  borderColor: "rgba(62,207,142,0.22)",
                  backgroundColor: "rgba(62,207,142,0.05)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
                }}
              >
                <p
                  className="text-[10px] uppercase tracking-[0.22em] font-semibold mb-3"
                  style={{ color: "#3ECF8E" }}
                >
                  Helped
                </p>
                <p
                  className="font-display text-[2.75rem] font-semibold tracking-[-0.02em] leading-none mb-3"
                  style={{ color: "#3ECF8E" }}
                >
                  {editsHelped}
                </p>
                <p className="text-[12px] text-[#888888] tracking-tight">
                  wrong → right
                </p>
              </div>
              <div
                className="p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  borderColor: "rgba(255,68,68,0.22)",
                  backgroundColor: "rgba(255,68,68,0.05)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
                }}
              >
                <p
                  className="text-[10px] uppercase tracking-[0.22em] font-semibold mb-3"
                  style={{ color: "#FF4444" }}
                >
                  Hurt
                </p>
                <p
                  className="font-display text-[2.75rem] font-semibold tracking-[-0.02em] leading-none mb-3"
                  style={{ color: "#FF4444" }}
                >
                  {editsHurt}
                </p>
                <p className="text-[12px] text-[#888888] tracking-tight">
                  right → wrong
                </p>
              </div>
              <div
                className="p-6 rounded-2xl border border-white/[0.08] bg-[#0D0D0D] transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
                }}
              >
                <p
                  className="text-[10px] uppercase tracking-[0.22em] font-semibold mb-3"
                  style={{ color: "#C9A84C" }}
                >
                  Neutral
                </p>
                <p className="font-display text-[2.75rem] font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-none mb-3">
                  {editsNeutral}
                </p>
                <p className="text-[12px] text-[#888888] tracking-tight">
                  wrong → wrong / etc.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* FLAGGED QUESTIONS */}
        {flaggedRows.length > 0 && (
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
                Flagged Questions
              </p>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-[#F0F0F0] mb-5 leading-[1.1]">
              Revisit while{" "}
              <span className="font-display-italic" style={{ color: "#C9A84C" }}>
                fresh.
              </span>
            </h2>
            <p className="text-[15px] leading-[1.75] text-[#C0C0C0] mb-8 max-w-2xl">
              You flagged {flaggedRows.length} question{flaggedRows.length === 1 ? "" : "s"} during the mock. These get a priority boost in Daily Review — revisit them now while the uncertainty is fresh.
            </p>
            <div className="space-y-3">
              {flaggedRows.map((row) => {
                const outcomeIcon =
                  row.correct === true ? (
                    <Check className="w-3.5 h-3.5" style={{ color: "#3ECF8E" }} />
                  ) : row.correct === false ? (
                    <X className="w-3.5 h-3.5" style={{ color: "#FF4444" }} />
                  ) : null
                const outcomeLabel =
                  row.correct === true
                    ? "Correct"
                    : row.correct === false
                    ? "Missed"
                    : "No answer"
                const outcomeBg =
                  row.correct === true
                    ? "rgba(62,207,142,0.12)"
                    : row.correct === false
                    ? "rgba(255,68,68,0.12)"
                    : "rgba(255,255,255,0.04)"
                const outcomeColor =
                  row.correct === true
                    ? "#3ECF8E"
                    : row.correct === false
                    ? "#FF4444"
                    : "#888888"
                return (
                  <div
                    key={row.questionId}
                    className="p-5 rounded-2xl border border-white/[0.08] bg-[#0D0D0D] flex items-start justify-between gap-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.12]"
                    style={{
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
                    }}
                  >
                    <div className="flex items-start gap-3 min-w-0">
                      <Flag
                        className="w-4 h-4 mt-1 flex-shrink-0"
                        style={{ color: "#C9A84C" }}
                      />
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
                          <span className="text-[12px] text-[#555555]">{row.topic}</span>
                        </div>
                        <p className="text-[15px] text-[#F0F0F0] truncate tracking-tight">
                          {row.preview}
                        </p>
                      </div>
                    </div>
                    <span
                      className="flex-shrink-0 inline-flex items-center gap-1 text-[11px] font-semibold tracking-tight px-2.5 py-1 rounded-lg"
                      style={{ backgroundColor: outcomeBg, color: outcomeColor }}
                    >
                      {outcomeIcon}
                      {outcomeLabel}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* NEXT MOVES */}
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
            <ul className="relative space-y-5">
              <li className="flex items-start gap-3">
                <ArrowRight
                  className="w-4 h-4 mt-1.5 flex-shrink-0"
                  style={{ color: "#C9A84C" }}
                />
                <span className="text-[15px] leading-[1.75] text-[#C0C0C0]">
                  Every question you missed has been added to{" "}
                  <Link
                    href="/review"
                    className="underline underline-offset-4 decoration-[rgba(201,168,76,0.4)] hover:decoration-[#C9A84C] transition-colors font-medium"
                    style={{ color: "#C9A84C" }}
                  >
                    Daily Review
                  </Link>
                  . Retrieval practice on today&apos;s misses is the highest-leverage follow-up.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight
                  className="w-4 h-4 mt-1.5 flex-shrink-0"
                  style={{ color: "#C9A84C" }}
                />
                <span className="text-[15px] leading-[1.75] text-[#C0C0C0]">
                  Re-take the mock in one to two weeks to measure improvement. A different calendar date means a different question selection, so comparisons stay meaningful.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function PacingSection({ timing }: { timing: TimingAnalysis[] }) {
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
        Per-section behavioural pacing. The label below drives the recommended next study path.
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
                <span
                  className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.18em]"
                  style={{ color: patternColor }}
                >
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
        Each trap is a named wrong-answer pattern from the curriculum that caught you on this mock. Drill the recognition signal until you spot it cold.
      </p>
      <div className="space-y-3">
        {traps.map((t, idx) => (
          <div
            key={t.trap}
            className="p-5 rounded-2xl border border-white/[0.08] bg-[#0D0D0D] flex items-start gap-4"
            style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)" }}
          >
            <span
              className="font-display font-display-italic text-[1.5rem] leading-none flex-shrink-0 mt-0.5"
              style={{ color: "#C9A84C" }}
            >
              {String(idx + 1).padStart(2, "0")}
            </span>
            <AlertTriangle
              className="w-4 h-4 flex-shrink-0 mt-1.5"
              style={{ color: "#FF4444" }}
            />
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-semibold text-[#F0F0F0] tracking-tight mb-1">
                {t.trap}
              </p>
              <p className="text-[12px] text-[#888888] leading-relaxed">
                {t.occurrences === 1
                  ? "Hit once on this mock."
                  : `Hit ${t.occurrences} times on this mock.`}
                {t.trapType ? ` · taxonomy: ${t.trapType}` : null}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function RecommendedChaptersSection({
  chapters,
}: {
  chapters: ChapterRecommendation[]
}) {
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
          Recommended Chapters
        </p>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-[#F0F0F0] mb-4 leading-[1.1]">
        Read{" "}
        <span className="font-display-italic" style={{ color: "#C9A84C" }}>
          these next.
        </span>
      </h2>
      <p className="text-[14px] text-[#888888] mb-6 leading-relaxed">
        Priority-ranked from your trap patterns and weak sub-skills. The reason column tells you exactly what each chapter fixes.
      </p>
      <div className="space-y-3">
        {chapters.slice(0, 5).map((c, idx) => {
          // Chapters whose slug starts with `reading-` live under /guides/{slug};
          // legacy interactive chapters live under /chapters/{slug}.
          const href = c.chapterSlug.startsWith("reading-")
            ? `/guides/${c.chapterSlug}`
            : `/chapters/${c.chapterSlug}`
          return (
            <Link
              key={`${c.chapterSlug}-${idx}`}
              href={href}
              className="group flex items-start gap-4 p-5 rounded-2xl border border-white/[0.08] bg-[#0D0D0D] transition-all duration-300 hover:border-white/[0.14]"
              style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)" }}
            >
              <span
                className="font-display font-display-italic text-[1.75rem] leading-none flex-shrink-0 mt-0.5"
                style={{ color: "#C9A84C" }}
              >
                {String(idx + 1).padStart(2, "0")}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span
                    className="px-2 py-0.5 rounded text-[10px] uppercase tracking-[0.18em] font-semibold"
                    style={{
                      backgroundColor: "rgba(201,168,76,0.10)",
                      color: "#C9A84C",
                    }}
                  >
                    {c.section}
                  </span>
                  <p className="text-[14px] font-semibold text-[#F0F0F0] tracking-tight">
                    {c.title}
                  </p>
                </div>
                <p className="text-[12px] text-[#888888] leading-relaxed">
                  {c.reason}
                </p>
              </div>
              <ArrowRight
                className="w-4 h-4 flex-shrink-0 text-[#555555] group-hover:text-[#C9A84C] group-hover:translate-x-0.5 transition-all"
                aria-hidden
              />
            </Link>
          )
        })}
      </div>
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
          href="/mock"
          className="inline-flex items-center gap-1.5 text-[12px] tracking-tight text-[#888888] hover:text-[#F0F0F0] transition-colors"
        >
          <ArrowLeft className="w-3 h-3" />
          Back to Mock
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
            Mock Report
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
