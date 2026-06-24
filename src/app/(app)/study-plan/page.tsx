import Link from "next/link"
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Check,
  CheckCircle,
  Clock,
  ExternalLink,
  FlaskConical,
  RotateCcw,
  Sparkles,
  Target,
  TrendingDown,
  TrendingUp,
  Flame,
  Wrench,
} from "lucide-react"
import { getAllChapters, getAllQuestions } from "@/lib/content"
import { createSupabaseServer } from "@/lib/supabase/server"
import {
  buildWeeklyCadence,
  computeStudyPlan,
  pickNextChapters,
  type DailySuggestion,
  type FocusAction,
  type StudyPlanOutput,
  type WeakArea,
} from "@/lib/study-plan-engine"
import {
  computeEngagedTopicMasteries,
  computeOfficialReady,
  type ChapterProgressShape,
  type MasteryAttempt,
  type MasterySession,
  type MasteryTier,
  type OfficialReadySummary,
  type TopicMastery,
} from "@/lib/mastery"
import {
  computePersona,
  personaThresholdOverrides,
  PERSONA_TAG_DEFS,
  type PersonaProfile,
  type PersonaTag,
} from "@/lib/personas"
import { gatherFlaggedQuestionIds } from "@/lib/mock"
import { getUserState } from "@/lib/user-state"
import type { Section } from "@/types"

const WEEKDAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const SECTION_MIN_SAMPLE = 10

/**
 * Scale 0-100 accuracy to a GMAT Focus total (205..805 in 10-point
 * increments). Mirrors the dashboard + analytics helpers so the three
 * surfaces agree on what "estimated score" means.
 */
function accuracyToFocusTotal(accuracy: number): number {
  const clamped = Math.max(0, Math.min(100, accuracy))
  const raw = 205 + clamped * 6.0
  return 205 + Math.round((raw - 205) / 10) * 10
}

/** Same section → 60-90 scaling used by the dashboard Score Goal card. */
function scaledSectionScore(correct: number, total: number): number {
  return Math.round(60 + (correct / total) * 30)
}

export default async function StudyPlanPage() {
  // ---------- Data we'll display ----------
  // Default to zero / null so an unauth or Supabase-down render shows empty.
  let examDate: string | null = null
  let targetScore: number | null = null
  const activityDays = new Set<string>() // YYYY-MM-DD for past 7 days with activity
  let studyHoursWeek = 0
  let studyDays30Count = 0
  let estimatedTotal: number | null = null
  let pendingMistakeCount = 0
  let plan: StudyPlanOutput | null = null
  let baselineExamDate: string | null = null
  let officialExamCount = 0
  let masteries: TopicMastery[] = []
  let officialBaseline: number | null = null
  let persona: PersonaProfile | null = null
  let officialReady: OfficialReadySummary | null = null
  const completedTags = new Set<string>()
  // Per-chapter reading progress (sectionsRead), for the guided-path
  // "Upcoming chapters" panel + the weekly cadence's reading queue.
  let readProgress: Record<string, { sectionsRead?: Record<string, boolean> }> = {}

  try {
    const supabase = await createSupabaseServer()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (user) {
      const state = await getUserState(supabase, user)
      examDate = (user.user_metadata?.exam_date as string | null) ?? null
      const rawTarget = user.user_metadata?.target_score
      targetScore =
        typeof rawTarget === "number" && Number.isInteger(rawTarget)
          ? rawTarget
          : null

      const rawReadProgress = state.chapter_progress
      if (rawReadProgress && typeof rawReadProgress === "object") {
        readProgress = rawReadProgress as Record<
          string,
          { sectionsRead?: Record<string, boolean> }
        >
      }

      // Fire the independent reads concurrently rather than in series. Each
      // only depends on user.id (+ a date window), and computeStudyPlan takes
      // the synchronous inputs already in scope — so they have no
      // inter-dependency and resolve in one round-trip's worth of wall-clock
      // instead of five. reviewedTags is the one genuine dependency (it needs
      // wrongIds) and stays sequential below. officialExamCount is still 0 here,
      // exactly as before (it's derived from user_metadata further down, after
      // this point — preserved deliberately, not "fixed").
      const sevenAgo = new Date(Date.now() - 7 * 86400000).toISOString()
      const thirtyAgo = new Date(Date.now() - 30 * 86400000).toISOString()
      const [
        { data: weekSessions },
        { data: monthSessions },
        { data: wrongAttempts },
        { data: sectionAttempts },
        planResult,
      ] = await Promise.all([
        supabase
          .from("practice_sessions")
          .select("created_at, total_time_ms")
          .eq("user_id", user.id)
          .gte("created_at", sevenAgo),
        supabase
          .from("practice_sessions")
          .select("created_at")
          .eq("user_id", user.id)
          .gte("created_at", thirtyAgo),
        supabase
          .from("practice_attempts")
          .select("id")
          .eq("user_id", user.id)
          .eq("is_correct", false),
        supabase
          .from("practice_attempts")
          .select("section, is_correct")
          .eq("user_id", user.id),
        computeStudyPlan(supabase, user.id, {
          targetScore,
          examDate,
          flaggedQuestionIds: gatherFlaggedQuestionIds(state),
          officialExamCount,
        }),
      ])

      // Past-7-day session activity — calendar dots + study hours
      for (const s of weekSessions ?? []) {
        const d = new Date(s.created_at as string)
        activityDays.add(d.toISOString().slice(0, 10))
        studyHoursWeek += ((s.total_time_ms as number) ?? 0) / 3600000
      }

      // Past-30-day activity days for "days practiced" — streak proxy.
      const monthDays = new Set<string>()
      for (const s of monthSessions ?? []) {
        monthDays.add(
          new Date(s.created_at as string).toISOString().slice(0, 10)
        )
      }
      studyDays30Count = monthDays.size

      // Pending-mistake count drives the error-review suggestion in the
      // weekly schedule. Counts wrong attempts whose error_tags row either
      // doesn't exist OR has reviewed=false — anything the user hasn't
      // cleared through the error log yet.
      const wrongIds = (wrongAttempts ?? []).map((a) => a.id as string)
      if (wrongIds.length > 0) {
        const { data: reviewedTags } = await supabase
          .from("error_tags")
          .select("attempt_id")
          .eq("user_id", user.id)
          .eq("reviewed", true)
          .in("attempt_id", wrongIds)
        const reviewedSet = new Set(
          (reviewedTags ?? []).map((t) => t.attempt_id as string)
        )
        pendingMistakeCount = wrongIds.filter((id) => !reviewedSet.has(id)).length
      }

      // Estimated GMAT total — only if all 3 sections have ≥10 attempts,
      // matching the dashboard's gating exactly.
      const secStats: Record<Section, { total: number; correct: number }> = {
        Quant: { total: 0, correct: 0 },
        Verbal: { total: 0, correct: 0 },
        DI: { total: 0, correct: 0 },
      }
      for (const a of sectionAttempts ?? []) {
        const sec = a.section as Section
        if (!secStats[sec]) continue
        secStats[sec].total++
        if (a.is_correct) secStats[sec].correct++
      }
      const allSectionsReady = (["Quant", "Verbal", "DI"] as const).every(
        (s) => secStats[s].total >= SECTION_MIN_SAMPLE
      )
      if (allSectionsReady) {
        const sectionScore = (s: { total: number; correct: number }) =>
          scaledSectionScore(s.correct, s.total)
        const avgAccuracy =
          (["Quant", "Verbal", "DI"] as const)
            .map((sec) => secStats[sec].correct / secStats[sec].total)
            .reduce((a, b) => a + b, 0) / 3
        // Two viable derivations — accuracy→total or sum-of-sections. Use
        // accuracy→total here (same as analytics/dashboard).
        estimatedTotal = accuracyToFocusTotal(avgAccuracy * 100)
        // Keep the per-section math around as a sanity check (unused but
        // documents the relationship) — suppress the unused warning.
        void sectionScore
      }

      // Adaptive plan (Today's focus + weak areas + queue counts) — computed
      // concurrently in the Promise.all above.
      plan = planResult

      // Mastery progress — per-topic gates (Concept / Timed / Mixed) that
      // replace the "completed the lesson = done" heuristic with the
      // research-report criteria. Needs session metadata to classify mixed
      // sessions and attempt timing to compute median pace.
      const [{ data: masteryAttempts }, { data: masterySessions }] =
        await Promise.all([
          supabase
            .from("practice_attempts")
            .select("topic, section, is_correct, time_spent_ms, session_id, difficulty")
            .eq("user_id", user.id)
            .limit(5000),
          supabase
            .from("practice_sessions")
            .select("id, slug, topic, created_at")
            .eq("user_id", user.id)
            .limit(1000),
        ])
      const sessionsById = new Map<string, MasterySession>()
      for (const s of masterySessions ?? []) {
        sessionsById.set(s.id as string, {
          id: s.id as string,
          slug: (s.slug as string | null) ?? null,
          topic: (s.topic as string | null) ?? null,
          created_at: s.created_at as string,
        })
      }
      const questionIndex = new Map(
        getAllQuestions().map((q) => [q.id, q])
      )
      masteries = computeEngagedTopicMasteries(
        (masteryAttempts ?? []) as MasteryAttempt[],
        sessionsById,
        state.chapter_progress as
          | ChapterProgressShape
          | undefined,
        questionIndex,
      )

      // Official baseline — the latest mba.com practice-exam score the
      // student has entered (user_metadata.official_exam_scores). It
      // anchors persona assignment and the plan's attribution line.
      const metaOfficial = state.official_exam_scores
      const officialScores: Array<{ date?: unknown; total?: unknown }> =
        Array.isArray(metaOfficial) ? metaOfficial : []
      const validOfficial = officialScores
        .filter(
          (e) =>
            typeof e?.date === "string" &&
            typeof e?.total === "number" &&
            e.total >= 205 &&
            e.total <= 805,
        )
        .sort((a, b) => String(a.date).localeCompare(String(b.date)))
      officialExamCount = validOfficial.length
      if (validOfficial.length > 0) {
        const latest = validOfficial[validOfficial.length - 1]
        officialBaseline = latest.total as number
        baselineExamDate = latest.date as string
      }

      persona = computePersona(officialBaseline, targetScore, {
        englishNative:
          (user.user_metadata?.english_native as boolean | null | undefined) ??
          null,
        priorGmatAttempt:
          (user.user_metadata?.prior_gmat_attempt as
            | boolean
            | null
            | undefined) ?? null,
      })

      // Re-compute masteries with persona-adaptive thresholds if we
      // didn't already (we computed with defaults above). Overriding
      // in-place avoids an extra DB round-trip — the expensive part
      // was the fetch, not the compute.
      if (persona.key !== "unknown") {
        masteries = computeEngagedTopicMasteries(
          (masteryAttempts ?? []) as MasteryAttempt[],
          sessionsById,
          state.chapter_progress as
            | ChapterProgressShape
            | undefined,
          questionIndex,
          personaThresholdOverrides(persona.key),
        )
      }

      // Aggregate Official-ready signal — two-week stability across
      // mixed + mock attempts. Uses the same persona threshold override
      // the per-topic timed gate uses.
      officialReady = computeOfficialReady(
        (masteryAttempts ?? []) as MasteryAttempt[],
        sessionsById,
        persona.key !== "unknown"
          ? personaThresholdOverrides(persona.key)
          : {},
      )

      // Persona-path completion signals. Each tag collapses a step in
      // the path card so students see what's still left rather than
      // "do these things again" on every /study-plan visit.
      const nowMs = Date.now()
      const dayMs = 86_400_000
      for (const s of sessionsById.values()) {
        const ts = Date.parse(s.created_at)
        if (Number.isNaN(ts)) continue
        const ageDays = (nowMs - ts) / dayMs
        if (s.slug?.startsWith("mock-") && ageDays <= 14) {
          completedTags.add("ran-mock-14d")
        }
        const topicLower = s.topic?.toLowerCase() ?? ""
        if (
          ageDays <= 7 &&
          (s.slug === "custom" || topicLower.startsWith("mixed review"))
        ) {
          completedTags.add("ran-mixed-7d")
        }
        // Hard-difficulty detection would require attempt-level difficulty
        // lookups; simple proxy: any timed practice session in 7d counts
        // as "drilled recently" for Stretcher/Elite until we add a
        // difficulty-aware signal.
        if (
          ageDays <= 7 &&
          s.slug !== "custom" &&
          !s.slug?.startsWith("mock-") &&
          !s.slug?.startsWith("diagnostic-") &&
          !s.slug?.startsWith("review-")
        ) {
          completedTags.add("drilled-recently")
        }
      }
      const chapterProgress = state.chapter_progress as
        | ChapterProgressShape
        | undefined
      if (chapterProgress) {
        for (const [slug, block] of Object.entries(chapterProgress)) {
          const qs = block?.questions
          if (!qs) continue
          const anySubmitted = Object.values(qs).some((q) => q?.submitted)
          if (anySubmitted) completedTags.add(`chapter-started:${slug}`)
        }
      }
      // Hard-difficulty drill detection — Stretcher/Elite "hard pool"
      // steps should only tick when the student actually ran Advanced
      // practice recently, not any practice. Collect attempts from
      // sessions that started in the last 7 days, check difficulty.
      const sevenDaysAgoMs = nowMs - 7 * dayMs
      const recentSessionIds = new Set<string>()
      for (const s of sessionsById.values()) {
        if (Date.parse(s.created_at) >= sevenDaysAgoMs) {
          recentSessionIds.add(s.id)
        }
      }
      for (const a of (masteryAttempts ?? []) as Array<
        MasteryAttempt & { difficulty?: string | null }
      >) {
        if (!a.session_id || !recentSessionIds.has(a.session_id)) continue
        if (a.difficulty === "Advanced") {
          completedTags.add("hard-drilled-recently")
          break
        }
      }

      // Error-log is "clear" when the pending-untagged count is small —
      // uses the same signal /review already surfaces.
      if (pendingMistakeCount < 5) {
        completedTags.add("error-log-clear")
      }
    }
  } catch {
    // Supabase unavailable — render with empty defaults.
  }

  // ---------- Derived: next chapters on the guided path ----------
  // getAllChapters() returns the guided-path order; a chapter is read when
  // every section is marked read. The first three incomplete chapters feed
  // the "Up next" panel; the full queue feeds the weekly cadence. (The old
  // /lessons library is deprecated — chapters are the curriculum.)
  const pathChapters = getAllChapters()
  const isChapterRead = (ch: (typeof pathChapters)[number]) => {
    const entry = readProgress[ch.slug]
    if (!entry || ch.sections.length === 0) return false
    return ch.sections.every((s) => entry.sectionsRead?.[s.id])
  }
  // A chapter is "engaged" once any section has been read — anchors the
  // recommendation to where the student actually is.
  const isChapterEngaged = (ch: (typeof pathChapters)[number]) => {
    const sr = readProgress[ch.slug]?.sectionsRead
    return sr ? Object.values(sr).some(Boolean) : false
  }
  const incompleteChapters = pathChapters.filter((ch) => !isChapterRead(ch))
  // Recency-aware "Up next": recommend forward from the furthest chapter the
  // student has touched, so a single unread section in chapter 1 no longer pins
  // "Welcome to the GMAT" as next after they've moved on (see pickNextChapters).
  const {
    nextUp: nextChapterUp,
    upcoming: upcomingChapters,
    readingQueue: nextReadingQueue,
  } = pickNextChapters(pathChapters, isChapterRead, isChapterEngaged)
  const chaptersDoneCount = pathChapters.length - incompleteChapters.length
  const totalChapters = pathChapters.length

  // ---------- Adaptive weekly cadence ----------
  // Adapts to the student's state: injects review days when the queue is
  // hot, and weak-topic chapter days when weak areas exist. Falls back
  // to guided-path chapter reads / practice if nothing else signals.
  const adaptivePlan =
    plan ??
    ({
      todaysFocus: [],
      weakAreas: [],
      reviewDueCount: pendingMistakeCount,
    } as StudyPlanOutput)
  const weeklyCadence = buildWeeklyCadence(
    adaptivePlan,
    nextReadingQueue.map((ch) => ({ slug: ch.slug, title: ch.title }))
  )
  const suggestionByKey = new Map<string, DailySuggestion>()

  // ---------- Derived: calendar for the current week (Sun → Sat) ----------
  const today = new Date()
  const sunday = new Date(today)
  sunday.setHours(0, 0, 0, 0)
  sunday.setDate(today.getDate() - today.getDay())
  const todayStart = new Date(today)
  todayStart.setHours(0, 0, 0, 0)
  const todayStartMs = todayStart.getTime()
  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(sunday)
    d.setDate(sunday.getDate() + i)
    const key = d.toISOString().slice(0, 10)
    const isToday = d.getTime() === todayStartMs
    const isPast = d.getTime() < todayStartMs
    return {
      weekdayLabel: WEEKDAY_LABELS[i],
      date: d,
      key,
      isToday,
      isPast,
      hasActivity: activityDays.has(key),
    }
  })

  // Walk future days and assign a pre-computed suggestion from the
  // adaptive cadence. Today isn't given a calendar suggestion — the
  // "Today's focus" card above owns that.
  let cadenceIdx = 0
  for (const day of weekDays) {
    if (day.isPast || day.isToday) continue
    const suggestion = weeklyCadence[cadenceIdx % weeklyCadence.length]
    cadenceIdx++
    if (suggestion) suggestionByKey.set(day.key, suggestion)
  }

  // ---------- Derived: exam readiness ----------
  const daysUntilExam = examDate
    ? Math.ceil(
        (new Date(examDate).getTime() -
          new Date(new Date().toDateString()).getTime()) /
          86400000
      )
    : null

  // === Stage gate ===
  // The page promises an "adaptive plan" but the engine has no real
  // signal until a baseline exists. Showing locked widgets next to
  // unlocked ones (the multi-week link, weekly calendar, "up next"
  // modules) made the adaptive system feel fake. Pre-baseline → render
  // a focused unlock view; the full plan comes online once the first
  // official mba.com practice-exam score is entered.
  if (officialExamCount === 0) {
    return (
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Hero — baseline-dominant; the page's only primary CTA */}
        <section
          className="relative overflow-hidden rounded-2xl border"
          style={{
            borderColor: "rgba(201,168,76,0.28)",
            backgroundColor: "#0D0D0D",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 60% at 0% 50%, rgba(201,168,76,0.14) 0%, transparent 60%), radial-gradient(ellipse 50% 60% at 100% 100%, rgba(201,168,76,0.06) 0%, transparent 60%)",
            }}
            aria-hidden
          />
          <div
            className="absolute inset-0 pointer-events-none bg-grain opacity-[0.03] mix-blend-overlay"
            aria-hidden
          />
          <div className="relative grid lg:grid-cols-[minmax(0,1fr)_320px] gap-8 lg:gap-12 p-6 sm:p-10">
            <div className="min-w-0">
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="inline-flex items-center justify-center w-7 h-7 rounded-lg"
                  style={{ backgroundColor: "rgba(201,168,76,0.14)" }}
                >
                  <Target
                    className="w-3.5 h-3.5"
                    style={{ color: "#C9A84C" }}
                  />
                </span>
                <p
                  className="text-[10px] font-semibold uppercase tracking-[0.22em]"
                  style={{ color: "#C9A84C" }}
                >
                  Adaptive plan · locked
                </p>
              </div>
              <h1 className="font-display text-3xl md:text-[42px] font-semibold tracking-[-0.02em] text-[#F0F0F0] leading-[1.05]">
                Your adaptive plan unlocks{" "}
                <span
                  className="font-display-italic"
                  style={{ color: "#C9A84C" }}
                >
                  after your baseline exam.
                </span>
              </h1>
              <p className="text-[15px] leading-[1.7] text-[#C0C0C0] max-w-2xl mt-4">
                Take Official Practice Exam 1 on mba.com under full exam
                conditions and enter the score on the Mock page. A real
                exam score assigns your study persona and seeds the weekly
                cadence, section priorities, and mastery gates. Without
                it, every recommendation is a guess.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href="/mock"
                  className="group inline-flex items-center gap-2 px-5 py-3 rounded-lg text-[13px] font-semibold transition-transform duration-200 hover:-translate-y-0.5"
                  style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
                >
                  Open the official exam plan
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <a
                  href="https://www.mba.com/exam-prep/gmat-official-practice-exams"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-lg text-[13px] font-semibold border transition-colors hover:border-white/20"
                  style={{
                    borderColor: "rgba(255,255,255,0.10)",
                    color: "#C0C0C0",
                  }}
                >
                  Get the exam on mba.com
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                {!examDate && (
                  <Link
                    href="/settings"
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-lg text-[13px] font-semibold border transition-colors"
                    style={{
                      borderColor: "rgba(255,255,255,0.10)",
                      color: "#C0C0C0",
                    }}
                  >
                    Set exam date
                  </Link>
                )}
              </div>
            </div>

            {/* Right column — plan-status snapshot. Quiet visual; the
                baseline CTA stays dominant. */}
            <div className="flex flex-col gap-2.5 lg:max-w-[320px]">
              <p
                className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-1"
                style={{ color: "#C9A84C" }}
              >
                Plan status
              </p>
              {[
                {
                  label: "Baseline exam",
                  done: officialExamCount > 0,
                  href: "/mock",
                },
                {
                  label: "Target score",
                  done: targetScore !== null,
                  href: "/dashboard#score-goal",
                },
                {
                  label: "Exam date",
                  done: examDate !== null,
                  href: "/settings",
                },
              ].map((row) => (
                <Link
                  key={row.label}
                  href={row.href}
                  className="group flex items-center gap-3 px-3.5 py-2.5 rounded-lg border transition-colors hover:bg-white/[0.02]"
                  style={{
                    borderColor: row.done
                      ? "rgba(62,207,142,0.22)"
                      : "rgba(255,255,255,0.06)",
                    backgroundColor: row.done
                      ? "rgba(62,207,142,0.04)"
                      : "rgba(255,255,255,0.012)",
                  }}
                >
                  {row.done ? (
                    <CheckCircle
                      className="w-3.5 h-3.5 flex-shrink-0"
                      style={{ color: "#3ECF8E" }}
                    />
                  ) : (
                    <span
                      className="w-3.5 h-3.5 rounded-full border flex-shrink-0"
                      style={{ borderColor: "rgba(255,255,255,0.2)" }}
                      aria-hidden
                    />
                  )}
                  <span
                    className="text-[13px] flex-1"
                    style={{ color: row.done ? "#888888" : "#C0C0C0" }}
                  >
                    {row.label}
                  </span>
                  <span
                    className="text-[11px] uppercase tracking-[0.18em] font-semibold"
                    style={{
                      color: row.done
                        ? "#3ECF8E"
                        : "rgba(255,255,255,0.4)",
                    }}
                  >
                    {row.done ? "Set" : "Missing"}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Launch sequence — replaces the empty 7-day calendar that
            otherwise read as "you've already missed Sun/Mon/Tue/Wed".
            Three steps, two of them locked, the first one bright. */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.22em]"
              style={{ color: "#C9A84C" }}
            >
              Your launch sequence
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
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              {
                kicker: "Today",
                title: "Take Official Practice Exam 1",
                body: "On mba.com, full exam conditions, one sitting. The whole plan keys off this.",
                state: "current" as const,
                href: "/mock",
              },
              {
                kicker: "Next",
                title: "Enter your baseline score",
                body: "Type the total and section scores into the exam plan so the system can anchor to them.",
                state: "next" as const,
                href: "/mock",
              },
              {
                kicker: "Then",
                title: "Receive your weekly cadence",
                body: "A real seven-day plan auto-builds from your baseline + exam date.",
                state: "future" as const,
                href: "/study-plan",
              },
            ].map((step) => {
              const accent =
                step.state === "current"
                  ? "#C9A84C"
                  : "rgba(255,255,255,0.25)"
              const bg =
                step.state === "current"
                  ? "rgba(201,168,76,0.05)"
                  : "#0D0D0D"
              const border =
                step.state === "current"
                  ? "rgba(201,168,76,0.28)"
                  : "rgba(255,255,255,0.06)"
              return (
                <li key={step.kicker}>
                  <Link
                    href={step.href}
                    className="group block h-full p-5 rounded-xl border transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      borderColor: border,
                      backgroundColor: bg,
                    }}
                  >
                    <p
                      className="text-[10px] uppercase tracking-[0.22em] font-semibold mb-2"
                      style={{
                        color:
                          step.state === "current"
                            ? "#C9A84C"
                            : "rgba(255,255,255,0.4)",
                      }}
                    >
                      {step.kicker}
                    </p>
                    <p
                      className="text-[15px] font-semibold tracking-tight leading-snug"
                      style={{
                        color:
                          step.state === "current"
                            ? "#F0F0F0"
                            : "rgba(240,240,240,0.7)",
                      }}
                    >
                      {step.title}
                    </p>
                    <p
                      className="text-[12px] mt-1.5 leading-snug"
                      style={{
                        color:
                          step.state === "current"
                            ? "rgba(192,192,192,0.75)"
                            : "rgba(255,255,255,0.4)",
                      }}
                    >
                      {step.body}
                    </p>
                    {step.state === "current" && (
                      <span
                        className="inline-flex items-center gap-1 mt-3 text-[11px] uppercase tracking-[0.18em] font-semibold"
                        style={{ color: accent }}
                      >
                        Start now
                        <ArrowRight className="w-3 h-3" aria-hidden />
                      </span>
                    )}
                  </Link>
                </li>
              )
            })}
          </ol>
        </section>

        {/* Unlocks after baseline — preview tiles. Each tile is a
            one-line promise of what the baseline activates. Replaces
            the live empty Mastery / Weak-areas / Calendar / Adaptive
            multi-week panels that otherwise rendered as filler. */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.22em]"
              style={{ color: "#888888" }}
            >
              Unlocks after baseline
            </p>
            <div
              className="h-px flex-1"
              style={{
                background:
                  "linear-gradient(to right, rgba(255,255,255,0.10), transparent)",
              }}
              aria-hidden
            />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              {
                Icon: Sparkles,
                title: "Study persona",
                body: "A baseline-derived label (Rebuilder / Improver / Stretcher / Elite) that tunes thresholds and the path.",
              },
              {
                Icon: CalendarDays,
                title: "Weekly cadence",
                body: "Real seven-day schedule built from your exam runway + recommended hours per week.",
              },
              {
                Icon: Target,
                title: "Mastery gates",
                body: "Per-topic Concept → Timed → Mixed → Section progression so you know what's stable.",
              },
              {
                Icon: TrendingDown,
                title: "Stability signal",
                body: "Two-week mock + mixed accuracy band — the readiness check before test day.",
              },
            ].map(({ Icon, title, body }) => (
              <div
                key={title}
                className="p-4 rounded-xl border flex flex-col gap-2.5"
                style={{
                  borderColor: "rgba(255,255,255,0.05)",
                  backgroundColor: "rgba(255,255,255,0.012)",
                }}
              >
                <span
                  className="inline-flex items-center justify-center w-8 h-8 rounded-lg"
                  style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
                >
                  <Icon
                    className="w-3.5 h-3.5"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  />
                </span>
                <p
                  className="text-[14px] font-semibold tracking-tight"
                  style={{ color: "rgba(240,240,240,0.7)" }}
                >
                  {title}
                </p>
                <p
                  className="text-[12px] leading-snug"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    )
  }

  // === Active-mode section numbering ===
  // Built dynamically from the sections that will actually render —
  // hardcoded "01"/"02" labels left a gap at "04" whenever weak-areas
  // had no data, which read as an unfinished build.
  const renderedNumberedSections: string[] = []
  if (plan && plan.todaysFocus.length > 0)
    renderedNumberedSections.push("todays-focus")
  renderedNumberedSections.push("this-week")
  if (plan && plan.weakAreas.length > 0)
    renderedNumberedSections.push("weak-areas")
  if (masteries.length > 0) renderedNumberedSections.push("mastery")
  renderedNumberedSections.push("up-next")
  const sectionNum = (key: string) =>
    String(renderedNumberedSections.indexOf(key) + 1).padStart(2, "0")

  return (
    <div className="max-w-5xl mx-auto space-y-10">
      <section
        className="relative overflow-hidden rounded-2xl border border-white/[0.06] px-6 py-10 sm:px-10 sm:py-14"
        style={{ backgroundColor: "#0D0D0D" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 20% -10%, rgba(201,168,76,0.14) 0%, transparent 60%), radial-gradient(ellipse 70% 60% at 110% 110%, rgba(201,168,76,0.08) 0%, transparent 60%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 pointer-events-none bg-grain opacity-[0.035] mix-blend-overlay"
          aria-hidden
        />
        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.22em]"
              style={{ color: "#C9A84C" }}
            >
              Adaptive plan
            </p>
            <div
              className="h-px w-12"
              style={{
                background:
                  "linear-gradient(to right, rgba(201,168,76,0.4), transparent)",
              }}
              aria-hidden
            />
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05]">
            Your weekly{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              cadence.
            </span>
          </h1>
          <p className="text-[15px] leading-[1.75] text-[#C0C0C0] mt-4 max-w-2xl">
            {daysUntilExam !== null && daysUntilExam > 0
              ? `${daysUntilExam} day${daysUntilExam === 1 ? "" : "s"} until your exam — the plan below ranks today's focus, weak topics, and a seven-day cadence drawn from your real activity.`
              : daysUntilExam !== null && daysUntilExam <= 0
                ? "Exam day has passed or is here — update your date in Settings to re-anchor the countdown."
                : "Set an exam date in Settings to anchor a countdown — the plan adapts to whatever runway you have left."}
          </p>
        </div>
      </section>

      {/* Persona card — research-report segmentation by (baseline, target).
          Drives copy, emphasis, and downstream mastery thresholds. Shows
          "Not yet assigned" with a baseline CTA when baseline is null. */}
      {persona && <PersonaCard persona={persona} />}

      {/* Persona path — each baseline-derived persona gets a short,
          tailored "do these next" list. Research-report segment table
          drives the prescription per persona: Rebuilder rebuilds
          fundamentals, Improver rehearses consistency, Stretcher hits
          harder pools + review/edit discipline, Elite calibrates
          against official-style mocks. Hidden when persona is unknown. */}
      {persona && persona.key !== "unknown" && (
        <PersonaPathCard
          personaKey={persona.key}
          completedTags={completedTags}
          tags={persona.tags}
        />
      )}

      {/* Baseline attribution — only when an official score exists, so the
          plan is visibly rooted in real data. Tiny line; clicks through to
          the exam plan. */}
      {officialExamCount > 0 && baselineExamDate && (
        <Link
          href="/mock"
          className="flex items-center justify-between gap-3 p-4 rounded-2xl border border-white/[0.06] bg-[#0D0D0D] hover:border-white/[0.12] transition-all duration-300 hover:shadow-[0_10px_30px_-15px_rgba(201,168,76,0.18)]"
        >
          <p className="text-[13px] text-[#C0C0C0]">
            <span className="text-[#888888]">
              Plan anchored to your latest official exam
              {officialBaseline !== null ? ` (${officialBaseline})` : ""}
            </span>
            <span className="mx-2 text-[#333333]">·</span>
            {new Date(baselineExamDate).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </p>
          <span
            className="text-[11px] font-semibold uppercase tracking-[0.18em]"
            style={{ color: "#C9A84C" }}
          >
            View report →
          </span>
        </Link>
      )}

      {/* Adaptive multi-week plan link — synthesises every signal source
          (official exams, mocks, practice, timing, confidence, mistakes,
          spaced queue) into a 2-4 week schedule. Sits above today's
          focus so students can choose between zoomed-in (today) and
          zoomed-out (week) views. */}
      <Link
        href="/study-plan/adaptive"
        className="group flex items-center justify-between gap-4 p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5"
        style={{
          borderColor: "rgba(201,168,76,0.18)",
          backgroundColor: "#0D0D0D",
          boxShadow:
            "0 0 40px rgba(201,168,76,0.05), inset 0 1px 0 rgba(255,255,255,0.04)",
        }}
      >
        <div className="flex items-start gap-3">
          <CalendarDays
            className="w-4 h-4 mt-0.5 flex-shrink-0"
            style={{ color: "#C9A84C" }}
          />
          <div>
            <p className="text-[15px] font-semibold tracking-tight text-[#F0F0F0]">
              Open your adaptive multi-week plan
            </p>
            <p className="text-[13px] text-[#C0C0C0] leading-[1.65] mt-1">
              Synthesised from your official exams, mocks, practice attempts,
              timing patterns, confidence log, and mistake-log patterns.
              Re-runs every visit so the schedule stays current.
            </p>
          </div>
        </div>
        <ArrowRight
          className="w-4 h-4 flex-shrink-0 text-[#C9A84C] group-hover:translate-x-0.5 transition-transform"
          aria-hidden
        />
      </Link>

      {/* Today's focus — adaptive action queue ranked by impact.
          Highest-priority item first; up to 3 shown. */}
      {plan && plan.todaysFocus.length > 0 && (
        <section>
          <div className="flex items-center gap-3 mb-5">
            <span
              className="font-display text-[11px] font-semibold tabular-nums"
              style={{ color: "rgba(201,168,76,0.55)" }}
              aria-hidden
            >
              {sectionNum("todays-focus")}
            </span>
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.22em]"
              style={{ color: "#C9A84C" }}
            >
              Today&apos;s focus
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
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.1] mb-5">
            Today&apos;s{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              focus.
            </span>
          </h2>
          <div className="space-y-3">
            {plan.todaysFocus.map((action, i) => (
              <FocusCard key={`${action.type}-${i}`} action={action} primary={i === 0} />
            ))}
          </div>
        </section>
      )}

      {/* Weekly Calendar — real activity dots for the current week */}
      <section>
        <div className="flex items-center gap-3 mb-5">
          <span
            className="font-display text-[11px] font-semibold tabular-nums"
            style={{ color: "rgba(201,168,76,0.55)" }}
            aria-hidden
          >
            {sectionNum("this-week")}
          </span>
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.22em]"
            style={{ color: "#C9A84C" }}
          >
            This week
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
        <div className="overflow-x-auto -mx-1 px-1">
          <div className="grid grid-cols-7 gap-2 min-w-[560px]">
          {weekDays.map((day) => {
            const { weekdayLabel, date, isToday, isPast, hasActivity } = day
            const borderColor = isToday
              ? "rgba(201,168,76,0.3)"
              : hasActivity
              ? "rgba(62,207,142,0.2)"
              : "rgba(255,255,255,0.06)"
            const bg = isToday
              ? "rgba(201,168,76,0.05)"
              : hasActivity
              ? "rgba(62,207,142,0.04)"
              : "#0D0D0D"
            return (
              <div key={day.key} className="flex flex-col gap-2">
                <p
                  className={`text-[10px] text-center font-semibold uppercase tracking-[0.18em] ${
                    isToday ? "text-[#C9A84C]" : "text-[#555555]"
                  }`}
                >
                  {weekdayLabel}{" "}
                  <span className="font-display text-[11px] normal-case tracking-normal text-[#444444] tabular-nums">
                    {date.getDate()}
                  </span>
                </p>
                <div
                  className="rounded-2xl p-3 border min-h-[96px] flex flex-col gap-2 transition-all duration-300 hover:-translate-y-0.5"
                  style={{ borderColor, backgroundColor: bg }}
                >
                  {hasActivity ? (
                    <>
                      <CheckCircle
                        className="w-3.5 h-3.5"
                        style={{ color: "#3ECF8E" }}
                      />
                      <p className="text-xs text-[#C0C0C0] leading-snug">
                        Practiced
                      </p>
                    </>
                  ) : isToday ? (
                    <>
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: "#C9A84C" }}
                      />
                      <p className="text-xs text-[#C0C0C0] leading-snug">
                        {nextChapterUp
                          ? `Next: ${nextChapterUp.title}`
                          : "Run a practice set"}
                      </p>
                    </>
                  ) : isPast ? (
                    <p className="text-xs text-[#444444]">No activity</p>
                  ) : (
                    <SuggestionCell suggestion={suggestionByKey.get(day.key) ?? null} />
                  )}
                </div>
              </div>
            )
          })}
          </div>
        </div>
      </section>

      {/* Progress cards — real counts. Projected total leads when the
          student has enough section data (>=10 attempts each) to estimate it. */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {estimatedTotal !== null && (
          <div className="p-5 rounded-2xl border border-white/[0.06] bg-[#0F0F0F] flex items-center gap-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.12] hover:shadow-[0_10px_30px_-15px_rgba(201,168,76,0.18)]">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "#C9A84C15" }}
            >
              <TrendingUp className="w-4 h-4" style={{ color: "#C9A84C" }} />
            </div>
            <div className="min-w-0">
              <p className="font-display text-2xl font-semibold text-[#F0F0F0] tracking-[-0.02em] tabular-nums leading-none">
                {estimatedTotal}
              </p>
              <p className="text-[11px] text-[#888888] mt-1.5 uppercase tracking-[0.18em]">
                Projected total
              </p>
              {(targetScore !== null || officialBaseline !== null) && (
                <p className="text-[11px] text-[#555555] mt-1 tabular-nums">
                  {targetScore !== null && (
                    <span
                      style={{
                        color:
                          estimatedTotal >= targetScore
                            ? "#3ECF8E"
                            : estimatedTotal >= targetScore - 40
                              ? "#C9A84C"
                              : "#FF4444",
                      }}
                    >
                      {estimatedTotal >= targetScore ? "+" : ""}
                      {estimatedTotal - targetScore} vs target
                    </span>
                  )}
                  {targetScore !== null && officialBaseline !== null && (
                    <span className="mx-1.5 text-[#333333]">·</span>
                  )}
                  {officialBaseline !== null && (
                    <span>baseline {officialBaseline}</span>
                  )}
                </p>
              )}
            </div>
          </div>
        )}
        <StatCard
          icon={BookOpen}
          color="#C9A84C"
          label="Chapters read"
          value={`${chaptersDoneCount} / ${totalChapters}`}
        />
        <StatCard
          icon={Clock}
          color="#C9A84C"
          label="Practice hours (7d)"
          value={(() => {
            const rounded = Math.round(studyHoursWeek * 10) / 10
            return rounded >= 0.1 ? `${rounded.toFixed(1)} hrs` : "—"
          })()}
        />
        <StatCard
          icon={Flame}
          color="#C9A84C"
          label="Active days (30d)"
          value={studyDays30Count > 0 ? `${studyDays30Count}` : "—"}
        />
      </div>

      {/* Official-ready status — surfaces when the user has cleared the
          official-exam readiness bar. */}
      {officialReady && <OfficialReadyCard summary={officialReady} />}

      {/* Weak areas — topic-level accuracy deficit driven from real attempts.
          Each row links to the relevant chapter so the student can read
          before re-drilling the topic. */}
      {plan && plan.weakAreas.length > 0 && (
        <section>
          <div className="flex items-center gap-3 mb-5">
            <span
              className="font-display text-[11px] font-semibold tabular-nums"
              style={{ color: "rgba(201,168,76,0.55)" }}
              aria-hidden
            >
              {sectionNum("weak-areas")}
            </span>
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.22em]"
              style={{ color: "#C9A84C" }}
            >
              Weakest topics
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
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.1] mb-5">
            Where accuracy{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              leaks.
            </span>
          </h2>
          <div className="space-y-3">
            {plan.weakAreas.map((w) => (
              <WeakAreaCard key={w.topic} weak={w} />
            ))}
          </div>
        </section>
      )}

      {/* Per-topic mastery gates — discrete concept->timed->mixed->section
          progression from real attempts, weakest-first (already sorted).
          Distinct from Weak Areas above: those are accuracy deficits,
          these are gate milestones. */}
      {masteries.length > 0 &&
        (() => {
          const TIER_COLOR: Record<MasteryTier, string> = {
            "not-started": "#555555",
            "concept-ready": "#C9A84C",
            "timed-ready": "#C9A84C",
            "mixed-ready": "#3ECF8E",
            "section-ready": "#3ECF8E",
          }
          const TIER_LABEL: Record<MasteryTier, string> = {
            "not-started": "Not started",
            "concept-ready": "Concept",
            "timed-ready": "Timed",
            "mixed-ready": "Mixed",
            "section-ready": "Section",
          }
          // Gate index each tier has reached, so the "next step" hint points
          // at the gate ahead of the student rather than a bypassed earlier
          // one (engine gates aren't strictly monotonic — concept/timed/mixed
          // are independent checks).
          const TIER_GATE_INDEX: Record<MasteryTier, number> = {
            "not-started": 0,
            "concept-ready": 1,
            "timed-ready": 2,
            "mixed-ready": 3,
            "section-ready": 4,
          }
          const shown = masteries.slice(0, 6)
          return (
            <section>
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="font-display text-[11px] font-semibold tabular-nums"
                  style={{ color: "rgba(201,168,76,0.55)" }}
                  aria-hidden
                >
                  {sectionNum("mastery")}
                </span>
                <p
                  className="text-[10px] font-semibold uppercase tracking-[0.22em]"
                  style={{ color: "#C9A84C" }}
                >
                  Mastery gates
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
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.1] mb-2">
                Where mastery{" "}
                <span
                  className="font-display-italic"
                  style={{ color: "#C9A84C" }}
                >
                  is forming.
                </span>
              </h2>
              <p className="text-[13px] text-[#888888] mb-5 max-w-2xl leading-relaxed">
                Four milestones per topic — concept, timed, mixed, section.
                Independent checks, not raw accuracy; weakest first.
              </p>
              <div className="space-y-3">
                {shown.map((m) => {
                  const color = TIER_COLOR[m.tier]
                  const fromIndex = TIER_GATE_INDEX[m.tier]
                  const nextGate =
                    m.gates.slice(fromIndex).find((g) => !g.satisfied) ??
                    m.gates.find((g) => !g.satisfied)
                  return (
                    <div
                      key={`${m.section}|${m.topic}`}
                      className="flex items-center gap-4 p-4 rounded-2xl border border-white/[0.06] bg-[#0F0F0F] transition-all duration-300 hover:border-white/[0.12] hover:shadow-[0_10px_30px_-15px_rgba(201,168,76,0.18)]"
                    >
                      <p className="text-[13px] text-[#C0C0C0] w-32 sm:w-44 flex-shrink-0 truncate">
                        <span className="text-[#555555] mr-1.5 text-[11px] uppercase tracking-wider">
                          {m.section}
                        </span>
                        {m.topic}
                      </p>
                      <div className="flex-1 flex gap-1">
                        {m.gates.map((g) => (
                          <div
                            key={g.id}
                            className="flex-1 h-2 rounded-full bg-white/[0.06] overflow-hidden"
                            title={`${g.label}: ${g.evidence}`}
                            role="img"
                            aria-label={`${g.label}: ${g.satisfied ? "cleared" : "not cleared"} — ${g.evidence}`}
                          >
                            <div
                              className="h-full rounded-full transition-all duration-700"
                              style={{
                                width: g.satisfied ? "100%" : "0%",
                                backgroundColor: color,
                              }}
                              aria-hidden
                            />
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0 justify-end">
                        {nextGate && (
                          <span className="text-[11px] text-[#555555] truncate hidden md:inline max-w-[12rem]">
                            {nextGate.evidence}
                          </span>
                        )}
                        <span
                          className="rounded-full px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.18em] flex-shrink-0"
                          style={{ color, backgroundColor: `${color}1f` }}
                        >
                          {TIER_LABEL[m.tier]}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
              {masteries.length > 6 && (
                <Link
                  href="/analytics"
                  className="mt-4 inline-block text-[11px] font-semibold uppercase tracking-[0.18em] text-[#888888] hover:text-[#F0F0F0] transition-colors"
                >
                  +{masteries.length - 6} more topics →
                </Link>
              )}
            </section>
          )
        })()}

      {/* Upcoming lessons — real curriculum */}
      <section>
        <div className="flex items-center gap-3 mb-5">
          <span
            className="font-display text-[11px] font-semibold tabular-nums"
            style={{ color: "rgba(201,168,76,0.55)" }}
            aria-hidden
          >
            {sectionNum("up-next")}
          </span>
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.22em]"
            style={{ color: "#C9A84C" }}
          >
            Up next
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
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.1] mb-5">
          Upcoming{" "}
          <span className="font-display-italic" style={{ color: "#C9A84C" }}>
            chapters.
          </span>
        </h2>
        {upcomingChapters.length === 0 ? (
          <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#0F0F0F]">
            <div className="flex items-start gap-3">
              <CheckCircle
                className="w-5 h-5 flex-shrink-0 mt-0.5"
                style={{ color: "#3ECF8E" }}
              />
              <div>
                <p className="text-[15px] font-semibold text-[#F0F0F0] tracking-tight">
                  Curriculum complete
                </p>
                <p className="text-[13px] text-[#C0C0C0] mt-1 leading-relaxed">
                  All {totalChapters} chapters read. Keep drilling practice
                  sets and mock exams until test day.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            {upcomingChapters.map((chapter, i) => {
              const pathPosition = pathChapters.findIndex((c) => c.slug === chapter.slug)
              const chapterLabel = `Chapter ${String(pathPosition + 1).padStart(2, "0")}`
              return (
                <Link
                  key={chapter.slug}
                  href={`/chapters/${chapter.slug}`}
                  className="flex items-start gap-4 p-5 rounded-2xl border border-white/[0.06] bg-[#0F0F0F] hover:border-white/[0.14] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-15px_rgba(201,168,76,0.18)]"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      backgroundColor:
                        i === 0
                          ? "rgba(201,168,76,0.1)"
                          : "rgba(255,255,255,0.04)",
                    }}
                  >
                    <BookOpen
                      className="w-5 h-5"
                      style={{ color: i === 0 ? "#C9A84C" : "#888888" }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#555555]">
                        {chapterLabel}
                      </span>
                      <span
                        className="px-2 py-0.5 rounded-full text-[10px] uppercase tracking-[0.18em]"
                        style={{
                          backgroundColor: "rgba(201,168,76,0.08)",
                          color: "#C9A84C",
                        }}
                      >
                        {chapter.section === "DI" ? "Data Insights" : chapter.section}
                      </span>
                      {i === 0 && (
                        <span
                          className="px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-[0.22em] border"
                          style={{
                            backgroundColor: "rgba(201,168,76,0.08)",
                            borderColor: "rgba(201,168,76,0.25)",
                            color: "#C9A84C",
                          }}
                        >
                          Up next
                        </span>
                      )}
                    </div>
                    <p className="text-[15px] font-semibold text-[#F0F0F0] tracking-tight">
                      {chapter.title}
                    </p>
                    {chapter.summary && (
                      <p className="text-[13px] text-[#C0C0C0] mt-1 line-clamp-1 leading-relaxed">
                        {chapter.summary}
                      </p>
                    )}
                    <div className="flex items-center gap-1.5 mt-2">
                      <Clock className="w-3 h-3 text-[#444444]" />
                      <span className="text-[11px] text-[#888888] tabular-nums">
                        {chapter.estimatedPages} pages
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        )}
      </section>

    </div>
  )
}

/**
 * Inline suggestion card for a future day in the weekly calendar. Each
 * DailySuggestion from the adaptive engine maps to a one-icon + one-label
 * cell that links directly to the suggested surface.
 */
function SuggestionCell({
  suggestion,
}: {
  suggestion: DailySuggestion | null
}) {
  if (!suggestion) {
    return <p className="text-xs text-[#444444]">Open</p>
  }

  const iconMap: Record<DailySuggestion["type"], typeof BookOpen> = {
    practice: Wrench,
    review: RotateCcw,
    chapter: Sparkles,
    mock: Target,
  }
  const colorMap: Record<DailySuggestion["type"], string> = {
    practice: "#888888",
    review: "#C9A84C",
    chapter: "#C9A84C",
    mock: "#C9A84C",
  }
  const typeLabel: Record<DailySuggestion["type"], string> = {
    practice: "Practice",
    review: "Review",
    chapter: "Chapter",
    mock: "Mock",
  }
  const Icon = iconMap[suggestion.type]
  const color = colorMap[suggestion.type]

  return (
    <Link
      href={suggestion.href}
      className="flex flex-col gap-1 text-left hover:opacity-90 transition-opacity"
    >
      <Icon className="w-3 h-3" style={{ color }} />
      <p className="text-[9px] uppercase tracking-[0.22em] text-[#555555] font-semibold">
        {typeLabel[suggestion.type]}
      </p>
      <p className="text-[11px] text-[#C0C0C0] leading-snug line-clamp-2">
        {suggestion.label}
      </p>
    </Link>
  )
}

/**
 * Large card for a Today's Focus action. The first (primary) card is
 * highlighted with the gold accent so the student can see at a glance
 * what the single most-important next action is.
 */
function FocusCard({
  action,
  primary,
}: {
  action: FocusAction
  primary: boolean
}) {
  const Icon = (() => {
    switch (action.type) {
      case "baseline":
        return FlaskConical
      case "review":
        return RotateCcw
      case "weak-topic-chapter":
        return Sparkles
      case "mock":
        return Target
      case "practice":
      default:
        return Wrench
    }
  })()

  return (
    <Link
      href={action.href}
      className="group p-5 rounded-2xl border flex items-start gap-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-18px_rgba(201,168,76,0.22)]"
      style={{
        borderColor: primary
          ? "rgba(201,168,76,0.3)"
          : "rgba(255,255,255,0.08)",
        backgroundColor: primary ? "rgba(201,168,76,0.04)" : "#0F0F0F",
      }}
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{
          backgroundColor: primary
            ? "rgba(201,168,76,0.12)"
            : "rgba(255,255,255,0.04)",
        }}
      >
        <Icon
          className="w-5 h-5"
          style={{ color: primary ? "#C9A84C" : "#888888" }}
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[15px] font-semibold tracking-tight text-[#F0F0F0] mb-1">
          {action.title}
        </p>
        <p className="text-[13px] text-[#C0C0C0] leading-relaxed">
          {action.subtitle}
        </p>
      </div>
      <span
        className="flex-shrink-0 px-3.5 py-1.5 rounded-xl text-xs font-semibold tracking-tight transition-all duration-200 group-hover:scale-[1.02]"
        style={{
          backgroundColor: primary ? "#C9A84C" : "rgba(201,168,76,0.12)",
          color: primary ? "#0A0A0A" : "#C9A84C",
        }}
      >
        {action.cta}
      </span>
    </Link>
  )
}

/**
 * Row for a topic the student is measurably weak on. Links the student
 * to the chapter so they can re-read before drilling more questions in
 * the same area.
 */
function WeakAreaCard({ weak }: { weak: WeakArea }) {
  // Drill links use the question-bank set slug (the only family
  // /practice/session resolves); chapter slugs diverged from set slugs
  // when the chapters split, so weak.chapterSlug 404s there.
  const practiceSlug = weak.setSlug

  // Tailor the recommended action to the error pattern: a conceptual gap
  // wants chapter review first, an execution pattern wants timed drilling
  // with a careless-check focus, and mixed/insufficient signal keeps the
  // generic practice nudge.
  const recommendation =
    weak.errorPattern === "conceptual"
      ? `Review the ${weak.topic} chapter, then drill medium difficulty`
      : weak.errorPattern === "execution"
        ? `Drill timed practice in ${weak.topic} — focus on careless checks`
        : `Practice ${weak.topic}`
  const patternChip =
    weak.errorPattern === "conceptual"
      ? { label: "Conceptual gap", color: "#C9A84C", bg: "rgba(201,168,76,0.10)" }
      : weak.errorPattern === "execution"
        ? { label: "Execution", color: "#3ECF8E", bg: "rgba(62,207,142,0.10)" }
        : null
  // For a conceptual gap, lead with the chapter (Read) — but only when a
  // chapter actually exists to link to; otherwise the drill stays primary.
  const chapterIsPrimary =
    weak.errorPattern === "conceptual" && weak.chapterSlug !== null
  const primaryStyle = { backgroundColor: "#C9A84C", color: "#0A0A0A" }
  const secondaryStyle = {
    backgroundColor: "rgba(201,168,76,0.12)",
    color: "#C9A84C",
  }
  return (
    <div className="p-5 rounded-2xl border border-white/[0.06] bg-[#0F0F0F] flex items-start sm:items-center justify-between gap-4 flex-col sm:flex-row transition-all duration-300 hover:border-white/[0.12] hover:shadow-[0_10px_30px_-15px_rgba(201,168,76,0.18)]">
      <div className="flex items-start gap-3">
        <TrendingDown className="w-4 h-4 mt-0.5 text-[#FF4444] flex-shrink-0" />
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span
              className="px-2 py-0.5 rounded-full text-[10px] uppercase tracking-[0.18em]"
              style={{
                backgroundColor: "rgba(201,168,76,0.08)",
                color: "#C9A84C",
              }}
            >
              {weak.section}
            </span>
            {patternChip && (
              <span
                className="px-2 py-0.5 rounded-full text-[10px] uppercase tracking-[0.18em]"
                style={{
                  backgroundColor: patternChip.bg,
                  color: patternChip.color,
                }}
              >
                {patternChip.label}
              </span>
            )}
            <span className="text-[11px] text-[#888888] tabular-nums">
              {Math.round(weak.accuracy * 100)}% on {weak.attempts} question
              {weak.attempts === 1 ? "" : "s"}
            </span>
          </div>
          <p className="text-[15px] font-semibold tracking-tight text-[#F0F0F0]">
            {weak.topic}
          </p>
          <p className="text-[12px] text-[#888888] mt-1 leading-snug">
            {recommendation}
          </p>
        </div>
      </div>
      <div className="flex-shrink-0 flex items-center gap-2 self-end sm:self-auto">
        {practiceSlug && (
          <Link
            href={`/practice/session/${practiceSlug}`}
            className="text-xs px-3.5 py-1.5 rounded-xl font-semibold tracking-tight transition-all duration-200 hover:scale-[1.02] inline-flex items-center gap-1"
            style={chapterIsPrimary ? secondaryStyle : primaryStyle}
          >
            Drill
          </Link>
        )}
        {weak.chapterSlug ? (
          <Link
            href={`/chapters/${weak.chapterSlug}`}
            className="text-xs px-3.5 py-1.5 rounded-xl font-semibold tracking-tight transition-all duration-200 hover:scale-[1.02] inline-flex items-center gap-1"
            style={chapterIsPrimary ? primaryStyle : secondaryStyle}
          >
            Read
            <ArrowRight className="w-3 h-3" />
          </Link>
        ) : (
          <span className="text-[11px] text-[#555555] italic">Keep practicing</span>
        )}
      </div>
    </div>
  )
}

/**
 * Per-persona "do these next" path. Each baseline persona (Rebuilder /
 * Improver / Stretcher / Elite) gets a short list of 3-4 CTAs tailored
 * to the research-report segment prescription.
 *
 *   Rebuilder — fundamentals rebuild: 4 chapters in order.
 *   Improver  — consistency + mixed-set rehearsal.
 *   Stretcher — harder pools + review/edit training.
 *   Elite     — calibration + stress-test discipline.
 */
type PersonaPathKey = Exclude<PersonaProfile["key"], "unknown">

interface PersonaPathStep {
  href: string
  section?: "Quant" | "Verbal" | "DI" | "All"
  label: string
  why: string
  /** Optional completion tag. When present and matched against the page-
   *  level `completedTags` set, the step renders muted + with a check
   *  so students see what's left instead of "do these again." */
  completionTag?: string
}

interface PersonaPathDef {
  title: string
  intro: string
  steps: PersonaPathStep[]
  accent: { color: string; bg: string; border: string }
}

const PERSONA_PATHS: Record<PersonaPathKey, PersonaPathDef> = {
  "foundations-rebuilder": {
    title: "Foundations path",
    intro:
      "Four chapters cover the fundamentals that every other topic leans on. Work them in order — each one unlocks comfort for the next. Don't skip to mixed sets until you've finished these.",
    steps: [
      {
        href: "/chapters/quant-05-order-and-signed-numbers",
        section: "Quant",
        label: "Arithmetic Foundations",
        why: "Basic Quant fluency — every other Quant topic leans on this.",
        completionTag: "chapter-started:quant-05-order-and-signed-numbers",
      },
      {
        href: "/chapters/verbal-01-foundations",
        section: "Verbal",
        label: "Verbal Foundations",
        why: "Active reading + argument anatomy — the shared base under CR and RC.",
        completionTag: "chapter-started:verbal-01-foundations",
      },
      {
        href: "/chapters/verbal-02-cr-argument-structure",
        section: "Verbal",
        label: "CR: Argument Structure",
        why: "Conclusion, evidence, gap — the engine every CR question type runs on.",
        completionTag: "chapter-started:verbal-02-cr-argument-structure",
      },
      {
        href: "/chapters/data-sufficiency",
        section: "DI",
        label: "Data Sufficiency",
        why: "DI literacy — sufficiency logic, not arithmetic.",
        completionTag: "chapter-started:data-sufficiency",
      },
    ],
    accent: {
      color: "#E8C97A",
      bg: "rgba(232,201,122,0.06)",
      border: "rgba(232,201,122,0.35)",
    },
  },
  "structured-improver": {
    title: "Improver path",
    intro:
      "The fundamentals are there; the delivery isn't reliable yet. Build a weekly rhythm of mixed sets + section rehearsals + error review so the right answer comes out consistently, not only when conditions are easy.",
    steps: [
      {
        href: "/review",
        section: "All",
        label: "Two mixed-review sessions",
        why: "Interleaving is where consistency is forged — your topic-by-topic accuracy is already decent.",
        completionTag: "ran-mixed-7d",
      },
      {
        href: "/test-builder",
        section: "All",
        label: "One timed section rehearsal",
        why: "Quarter-section or half-section blocks train pacing and triage without the mock's endurance cost.",
        completionTag: "drilled-recently",
      },
      {
        href: "/error-log",
        section: "All",
        label: "Clear the error-log backlog",
        why: "Tag every miss this week. Frequency-of-error patterns only show up once each mistake has a label.",
        completionTag: "error-log-clear",
      },
    ],
    accent: {
      color: "#C9A84C",
      bg: "rgba(201,168,76,0.06)",
      border: "rgba(201,168,76,0.35)",
    },
  },
  "ambitious-stretcher": {
    title: "Stretcher path",
    intro:
      "The last 60 points cost more than the first 150. Stop running up the accuracy of topics you've already cleared — shift to harder pools, DI sophistication, and review/edit decision training.",
    steps: [
      {
        href: "/practice",
        section: "All",
        label: "Hard-item drills",
        why: "Pick Advanced difficulty on topics where you're already ≥75% at Intermediate. Leave medium behind.",
        completionTag: "hard-drilled-recently",
      },
      {
        href: "/chapters/multi-source-reasoning",
        section: "DI",
        label: "DI sophistication — MSR + TPA",
        why: "DI is where 705+ candidates earn real ground — Multi-Source + Two-Part are the highest-leverage workflows.",
        completionTag: "chapter-started:multi-source-reasoning",
      },
      {
        href: "/mock/run",
        section: "All",
        label: "Mock + review-edit coach",
        why: "The 3-edit cap under time pressure is its own skill — run a mock and read the review/edit helped/hurt counts.",
        completionTag: "ran-mock-14d",
      },
    ],
    accent: {
      color: "#3ECF8E",
      bg: "rgba(62,207,142,0.06)",
      border: "rgba(62,207,142,0.35)",
    },
  },
  "elite-finisher": {
    title: "Elite path",
    intro:
      "Polish, not rebuild. Your ceiling work is endurance, trap discipline, and official-style calibration — leave the content drills and lean on realistic full-lengths with strict post-mortems.",
    steps: [
      {
        href: "/mock",
        section: "All",
        label: "Official-style full mock",
        why: "Full-length under exam conditions is the only reliable signal at this band. Treat our mock as the practice; use real official mocks as the calibration ground-truth.",
        completionTag: "ran-mock-14d",
      },
      {
        href: "/practice",
        section: "All",
        label: "Stress-pool drills",
        why: "Hard-only sets on your weakest 2-3 topics. Skip everything else — you've earned the time.",
        completionTag: "hard-drilled-recently",
      },
      {
        href: "/error-log",
        section: "All",
        label: "Strict review/edit discipline",
        why: "At this band, review/edit is where points leak. Tag every answer change with its root cause; only keep edits you can name the flaw for.",
        completionTag: "error-log-clear",
      },
    ],
    accent: {
      color: "#6FB5F6",
      bg: "rgba(111,181,246,0.06)",
      border: "rgba(111,181,246,0.35)",
    },
  },
}

/**
 * Orthogonal tag-driven step layering. When `intl-verbal` or `retaker`
 * are active, we append 1 extra step per tag to the base persona path —
 * never replace. The intent is: the baseline persona is still the spine
 * of the prescription; tags add emphasis, not substitution.
 *
 * Each tag-layered step carries `tagOrigin` so the card can render a
 * small chip showing *why* the step is in the list (e.g. "Int'l" pill
 * on a Verbal drill). Completion tags are omitted here on purpose —
 * these are persistent recommendations, not gated tasks.
 */
type PersonaPathStepWithOrigin = PersonaPathStep & { tagOrigin: PersonaTag }

const PERSONA_TAG_STEPS: Record<
  PersonaTag,
  Record<PersonaPathKey, PersonaPathStep>
> = {
  "intl-verbal": {
    "foundations-rebuilder": {
      href: "/practice",
      section: "Verbal",
      label: "Untimed RC reading drills",
      why: "Build reading-load stamina before the clock matters. Non-native readers need more volume here — pace comes after fluency.",
    },
    "structured-improver": {
      href: "/test-builder",
      section: "Verbal",
      label: "Verbal-only timed block",
      why: "Your delivery risk is sharper in Verbal — a section-length Verbal rehearsal trains reading-load pacing specifically.",
    },
    "ambitious-stretcher": {
      href: "/practice",
      section: "Verbal",
      label: "Advanced CR + RC pools",
      why: "Verbal precision is the ceiling piece for non-native readers — drill Advanced only, leave medium Verbal behind.",
    },
    "elite-finisher": {
      href: "/practice",
      section: "Verbal",
      label: "Verbal stress-pool",
      why: "The final points for Int'l candidates usually leak from a 2-3 question Verbal block under time. Drill Advanced RC + CR exclusively.",
    },
  },
  retaker: {
    "foundations-rebuilder": {
      href: "/analytics",
      section: "All",
      label: "Post-mortem on /analytics",
      why: "Your last GMAT is a data point. Score Report Mirror approximates the ESR breakdown — find the leak before re-running the same prep.",
    },
    "structured-improver": {
      href: "/analytics",
      section: "All",
      label: "Read your Score Report Mirror",
      why: "Your last GMAT shows the drag you didn't address last time. Mirror the section + type breakdown to make sure this cycle attacks it.",
    },
    "ambitious-stretcher": {
      href: "/analytics",
      section: "All",
      label: "Prediction MAE + type breakdown",
      why: "Calibration matters more for retakers — your last real score is the only one that counted. Read the MAE direction before the next mock.",
    },
    "elite-finisher": {
      href: "/analytics",
      section: "All",
      label: "Strict ESR-style review/edit discipline",
      why: "Retakers at the Elite band leak on review/edit decisions under time. Tag every post-time answer change with its root cause.",
    },
  },
}

function PersonaPathCard({
  personaKey,
  completedTags,
  tags,
}: {
  personaKey: PersonaPathKey
  completedTags: Set<string>
  tags: PersonaTag[]
}) {
  const path = PERSONA_PATHS[personaKey]
  const extraSteps: PersonaPathStepWithOrigin[] = tags.map((tag) => ({
    ...PERSONA_TAG_STEPS[tag][personaKey],
    tagOrigin: tag,
  }))
  const allSteps: (PersonaPathStep | PersonaPathStepWithOrigin)[] = [
    ...path.steps,
    ...extraSteps,
  ]
  const doneCount = path.steps.filter(
    (s) => s.completionTag && completedTags.has(s.completionTag),
  ).length
  return (
    <div
      className="p-6 sm:p-7 rounded-2xl border transition-all duration-300"
      style={{
        borderColor: path.accent.border,
        backgroundColor: path.accent.bg,
      }}
    >
      <div className="flex items-center gap-3 mb-2 flex-wrap">
        <BookOpen className="w-4 h-4" style={{ color: path.accent.color }} />
        <p
          className="text-[10px] font-semibold uppercase tracking-[0.22em]"
          style={{ color: path.accent.color }}
        >
          {path.title}
        </p>
        {doneCount > 0 && (
          <span
            className="text-[10px] uppercase tracking-[0.18em] font-semibold px-2 py-0.5 rounded-full tabular-nums border"
            style={{
              backgroundColor: path.accent.color + "1A",
              borderColor: path.accent.color + "40",
              color: path.accent.color,
            }}
          >
            {doneCount}/{path.steps.length} done
          </span>
        )}
      </div>
      <p className="text-[14px] text-[#C0C0C0] leading-[1.65] mb-5">
        {path.intro}
      </p>
      <ol className="space-y-2.5">
        {allSteps.map((step, i) => {
          const done = !!(
            step.completionTag && completedTags.has(step.completionTag)
          )
          const tagOrigin = "tagOrigin" in step ? step.tagOrigin : undefined
          const tagDef = tagOrigin ? PERSONA_TAG_DEFS[tagOrigin] : null
          return (
            <li key={`${step.href}-${i}`}>
              <Link
                href={step.href}
                className="group flex items-start gap-3 p-4 rounded-xl bg-[#0D0D0D] border border-white/[0.06] hover:border-white/[0.14] transition-all duration-300 hover:-translate-y-0.5"
                style={done ? { opacity: 0.55 } : {}}
              >
                <span
                  className="flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0 font-display text-[13px] font-semibold tabular-nums mt-0.5"
                  style={
                    done
                      ? {
                          backgroundColor: "rgba(62,207,142,0.18)",
                          color: "#3ECF8E",
                        }
                      : tagDef
                        ? {
                            backgroundColor: tagDef.bg,
                            color: tagDef.color,
                          }
                        : {
                            backgroundColor: path.accent.color + "26",
                            color: path.accent.color,
                          }
                  }
                >
                  {done ? <Check className="w-3.5 h-3.5" /> : `0${i + 1}`}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    {step.section && (
                      <span
                        className="px-1.5 py-0.5 rounded-full text-[9px] uppercase tracking-[0.18em]"
                        style={{
                          backgroundColor: "rgba(201,168,76,0.08)",
                          color: "#C9A84C",
                        }}
                      >
                        {step.section}
                      </span>
                    )}
                    {tagDef && (
                      <span
                        className="px-1.5 py-0.5 rounded-full text-[9px] uppercase tracking-[0.18em]"
                        style={{
                          backgroundColor: tagDef.bg,
                          color: tagDef.color,
                        }}
                      >
                        {tagDef.label}
                      </span>
                    )}
                    <p
                      className="text-[14px] font-semibold tracking-tight"
                      style={{
                        color: done ? "#888888" : "#F0F0F0",
                        textDecoration: done ? "line-through" : "none",
                      }}
                    >
                      {step.label}
                    </p>
                  </div>
                  <p className="text-[12px] text-[#C0C0C0] leading-relaxed">
                    {step.why}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#555555] flex-shrink-0 mt-1.5 group-hover:text-[#C9A84C] transition-colors" />
              </Link>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

/**
 * Aggregate Official-ready card. Surfaces two-week stability on mixed +
 * mock work — the research-report signal that a student's performance
 * is "real" enough to weigh vs rolling practice accuracy. Hides empty
 * by rendering only after `computeOfficialReady` has run.
 */
function OfficialReadyCard({ summary }: { summary: OfficialReadySummary }) {
  const { status, thisWeekAccuracy, thisWeekAttempts, lastWeekAccuracy, lastWeekAttempts, threshold, headline } = summary
  const colour =
    status === "ready"
      ? "#3ECF8E"
      : status === "stable-partial"
        ? "#C9A84C"
        : status === "unstable"
          ? "#FF4444"
          : "#888888"
  const bg =
    status === "ready"
      ? "rgba(62,207,142,0.08)"
      : status === "stable-partial"
        ? "rgba(201,168,76,0.08)"
        : status === "unstable"
          ? "rgba(255,68,68,0.08)"
          : "rgba(255,255,255,0.03)"
  const statusLabel =
    status === "ready"
      ? "Official-ready"
      : status === "stable-partial"
        ? "Stabilising"
        : status === "unstable"
          ? "Unstable"
          : "Not enough data"
  const pct = (x: number | null) => (x === null ? "—" : `${Math.round(x * 100)}%`)
  return (
    <div
      className="p-6 rounded-2xl border transition-all duration-300 hover:shadow-[0_14px_36px_-20px_rgba(201,168,76,0.18)]"
      style={{ borderColor: colour + "40", backgroundColor: bg }}
    >
      <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4" style={{ color: colour }} />
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.22em]"
            style={{ color: colour }}
          >
            {statusLabel}
          </p>
        </div>
        <span className="text-[11px] text-[#888888] tabular-nums">
          Two-week mixed + mock stability · target ≥{Math.round(threshold * 100)}%
        </span>
      </div>
      <p className="text-[14px] text-[#C0C0C0] leading-[1.65] mb-5">
        {headline}
      </p>
      <div className="grid grid-cols-2 gap-3">
        <div className="p-4 rounded-xl bg-[#0D0D0D] border border-white/[0.06]">
          <p className="text-[10px] uppercase tracking-[0.22em] text-[#555555] font-semibold">
            Last week
          </p>
          <p className="font-display text-2xl font-semibold text-[#F0F0F0] mt-1.5 tabular-nums tracking-[-0.02em]">
            {pct(lastWeekAccuracy)}
          </p>
          <p className="text-[11px] text-[#888888] mt-1 tabular-nums">
            {lastWeekAttempts} attempt{lastWeekAttempts === 1 ? "" : "s"}
          </p>
        </div>
        <div className="p-4 rounded-xl bg-[#0D0D0D] border border-white/[0.06]">
          <p className="text-[10px] uppercase tracking-[0.22em] text-[#555555] font-semibold">
            This week
          </p>
          <p className="font-display text-2xl font-semibold text-[#F0F0F0] mt-1.5 tabular-nums tracking-[-0.02em]">
            {pct(thisWeekAccuracy)}
          </p>
          <p className="text-[11px] text-[#888888] mt-1 tabular-nums">
            {thisWeekAttempts} attempt{thisWeekAttempts === 1 ? "" : "s"}
          </p>
        </div>
      </div>
    </div>
  )
}

/**
 * Persona chip + blurb. When the student has no baseline exam yet, shows
 * the "Not yet assigned" variant with a CTA to enter it —
 * persona is the driver for downstream threshold tuning so we can't
 * meaningfully personalise anything until it's set.
 */
function PersonaCard({ persona }: { persona: PersonaProfile }) {
  const unknown = persona.key === "unknown"
  return (
    <div
      className="p-6 sm:p-7 rounded-2xl border transition-all duration-300 hover:shadow-[0_14px_36px_-20px_rgba(201,168,76,0.2)]"
      style={{
        borderColor: unknown ? "rgba(255,255,255,0.08)" : persona.color,
        backgroundColor: unknown ? "#0F0F0F" : persona.bg,
      }}
    >
      <div className="flex items-center gap-2 mb-3 flex-wrap">
        <span
          className="px-2.5 py-1 rounded-full text-[10px] uppercase tracking-[0.22em] font-semibold"
          style={{
            backgroundColor: persona.bg,
            color: persona.color,
            border: `1px solid ${persona.color}`,
          }}
        >
          {persona.label}
        </span>
        {persona.tags.map((tag) => {
          const def = PERSONA_TAG_DEFS[tag]
          return (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full text-[10px] uppercase tracking-[0.22em] font-semibold"
              style={{
                backgroundColor: def.bg,
                color: def.color,
                border: `1px solid ${def.color}`,
              }}
            >
              {def.label}
            </span>
          )
        })}
        <span className="text-[11px] text-[#888888] tracking-tight">
          {persona.bandLabel}
        </span>
      </div>
      <p className="text-[15px] leading-[1.65] text-[#F0F0F0] tracking-tight">
        {persona.coreNeed}
      </p>
      {persona.emphasis && (
        <p className="text-[13px] text-[#C0C0C0] leading-[1.65] mt-2">
          <span className="text-[#888888]">Product emphasis:</span>{" "}
          {persona.emphasis}
        </p>
      )}
      {persona.tags.length > 0 && (
        <div className="mt-3 space-y-1.5">
          {persona.tags.map((tag) => {
            const def = PERSONA_TAG_DEFS[tag]
            return (
              <p
                key={`addendum-${tag}`}
                className="text-[13px] leading-[1.65]"
                style={{ color: def.color }}
              >
                <span className="font-semibold">{def.label}:</span>{" "}
                <span className="text-[#C0C0C0]">{def.addendum}</span>
              </p>
            )
          })}
        </div>
      )}
      {unknown && (
        <Link
          href="/mock"
          className="inline-flex items-center gap-1.5 text-xs px-4 py-2 rounded-xl font-semibold tracking-tight mt-4 transition-all duration-200 hover:scale-[1.02]"
          style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
        >
          Enter your baseline exam
          <ArrowRight className="w-3 h-3" />
        </Link>
      )}
    </div>
  )
}

function StatCard({
  icon: Icon,
  color,
  label,
  value,
}: {
  icon: typeof BookOpen
  color: string
  label: string
  value: string
}) {
  return (
    <div className="p-5 rounded-2xl border border-white/[0.06] bg-[#0F0F0F] flex items-center gap-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.12] hover:shadow-[0_10px_30px_-15px_rgba(201,168,76,0.18)]">
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: `${color}15` }}
      >
        <Icon className="w-4 h-4" style={{ color }} />
      </div>
      <div className="min-w-0">
        <p className="font-display text-2xl font-semibold text-[#F0F0F0] tracking-[-0.02em] tabular-nums leading-none">
          {value}
        </p>
        <p className="text-[11px] text-[#888888] mt-1.5 uppercase tracking-[0.18em]">
          {label}
        </p>
      </div>
    </div>
  )
}
