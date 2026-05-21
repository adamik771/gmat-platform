import {
  Clock,
  Target,
  CheckCircle,
  Flame,
  AlertCircle,
  ArrowRight,
  Compass,
  Flag,
  Lock,
  RotateCcw,
  Sparkles,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"
import MetricCard from "@/components/dashboard/MetricCard"
import SectionProgress from "@/components/dashboard/SectionProgress"
import ActivityFeed from "@/components/dashboard/ActivityFeed"
import ScoreChart, { type ScoreDataPoint } from "@/components/dashboard/ScoreChart"
import QuickActions from "@/components/dashboard/QuickActions"
import EmptyState from "@/components/shared/EmptyState"
import { getAllChapters, getAllLessons, getAllQuestions } from "@/lib/content"
import { createSupabaseServer } from "@/lib/supabase/server"
import { getReviewQueue } from "@/lib/review-queue"
import { gatherFlaggedQuestionIds } from "@/lib/mock"
import { collectAdaptiveSignals } from "@/lib/adaptive-plan-engine"
import { computeNextBestAction } from "@/lib/next-best-action"
import {
  computeStudyPlan,
  type FocusAction,
} from "@/lib/study-plan-engine"
import NextBestActionPanel from "../analytics/NextBestActionPanel"
import {
  computeBadges,
  computeStreaks,
  type Badge,
} from "@/lib/gamification"
import type { ActivityItem, Section } from "@/types"
import TargetScoreControl from "./TargetScoreControl"

const PLAN_LABELS: Record<string, string> = {
  self_study: "Self-Study",
  self_study_plus: "Self-Study Plus",
  coaching: "Coaching",
  intensive: "Intensive",
}

function planLabel(id: string): string {
  return PLAN_LABELS[id] ?? id
}

function timeOfDayGreeting(): string {
  const hour = new Date().getHours()
  if (hour < 12) return "Good morning"
  if (hour < 18) return "Good afternoon"
  return "Good evening"
}

/**
 * Today's question-goal pill. Shows the count vs the target with a
 * compact gold progress arc. Stays subdued until the goal is met,
 * then pulses green to mark the daily completion.
 */
function DailyGoalWidget({
  questionsToday,
  goal,
}: {
  questionsToday: number
  goal: number
}) {
  const pct = goal > 0 ? Math.min(100, Math.round((questionsToday / goal) * 100)) : 0
  const met = questionsToday >= goal && goal > 0
  return (
    <div className="flex flex-col items-end gap-2 min-w-[180px]">
      <div className="flex items-baseline gap-2">
        <span
          className="font-display text-xl font-semibold tabular-nums leading-none"
          style={{ color: met ? "#3ECF8E" : "#F0F0F0" }}
        >
          {questionsToday}
        </span>
        <span className="text-[12px] tabular-nums" style={{ color: "#888888" }}>
          / {goal}
        </span>
        <span
          className="text-[10px] uppercase tracking-[0.18em] font-semibold ml-1"
          style={{ color: met ? "#3ECF8E" : "#888888" }}
        >
          {met ? "Goal hit" : "Today"}
        </span>
      </div>
      <div className="w-full h-1 rounded-full bg-white/[0.06] overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${pct}%`,
            backgroundColor: met ? "#3ECF8E" : "#C9A84C",
          }}
        />
      </div>
    </div>
  )
}

export default async function DashboardPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let user: any = null

  // Next-best-action result, computed once we have a logged-in user. Same
  // signals the adaptive plan + analytics page consume — keeps the
  // recommendation consistent across surfaces. Failure here is non-fatal:
  // the dashboard renders without the panel.
  let nbaResult: ReturnType<typeof computeNextBestAction> | null = null

  // "Resume" card target — the chapter the student most recently touched
  // (highest lastSeenAt across all chapter_progress entries) plus the
  // anchor to the first unread section so a click drops them right where
  // they left off. Null when no chapter has been touched yet.
  let resumeTarget: {
    slug: string
    title: string
    section: "Quant" | "Verbal" | "DI"
    href: string
    pct: number
    nextSectionTitle: string | null
    isComplete: boolean
  } | null = null

  // "Today's Mission" — the single highest-priority next step surfaced
  // from the adaptive study-plan engine. Sits above everything else on
  // the dashboard so a returning student sees one decisive action
  // without scanning a metrics grid first. Null when the engine has
  // no recommendation yet (cold-start users hit this).
  let topFocus: FocusAction | null = null
  let topFocusMinutes: number | null = null

  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    if (supabaseUrl && supabaseKey && supabaseUrl !== "your_supabase_url") {
      const supabase = await createSupabaseServer()
      const { data } = await supabase.auth.getUser()
      user = data.user

      if (user) {
        try {
          const flaggedQuestionIds = gatherFlaggedQuestionIds(user.user_metadata)
          const signals = await collectAdaptiveSignals(
            supabase,
            user.id,
            user.user_metadata,
            { flaggedQuestionIds }
          )
          const examDate =
            (user.user_metadata?.exam_date as string | null | undefined) ?? null
          const targetScore =
            (user.user_metadata?.target_score as number | null | undefined) ?? null
          const daysUntilExam =
            examDate !== null
              ? Math.max(
                  0,
                  Math.ceil(
                    (Date.parse(examDate) -
                      new Date(new Date().toDateString()).getTime()) /
                      86_400_000
                  )
                )
              : null
          nbaResult = computeNextBestAction(signals, {
            daysUntilExam,
            targetScore,
          })

          // Today's Mission — pull the top item from the study-plan
          // engine and compute an estimated time so the hero card can
          // render "~15 min" without the engine knowing about chapter
          // lengths. Runs inside the same try as NBA so it shares
          // scope with the already-derived `targetScore`, `examDate`,
          // and `flaggedQuestionIds` inputs. Failures are non-fatal:
          // the hero card just doesn't render.
          try {
            const plan = await computeStudyPlan(supabase, user.id, {
              targetScore,
              examDate,
              flaggedQuestionIds,
            })
            if (plan.todaysFocus.length > 0) {
              topFocus = plan.todaysFocus[0]
              if (
                topFocus.type === "weak-topic-chapter" &&
                topFocus.href.startsWith("/chapters/")
              ) {
                const slug =
                  topFocus.href.split("/chapters/")[1]?.split(/[#?]/)[0] ??
                  ""
                const chapter = getAllChapters().find(
                  (c) => c.slug === slug
                )
                if (chapter?.estimatedMinutes) {
                  topFocusMinutes = chapter.estimatedMinutes
                }
              } else if (topFocus.type === "practice") {
                topFocusMinutes = 15
              } else if (topFocus.type === "review") {
                // ~2 min per due item, clamped to a sensible range so
                // the card doesn't promise a 90-min review session.
                topFocusMinutes = Math.max(
                  5,
                  Math.min(plan.reviewDueCount * 2, 30)
                )
              } else if (topFocus.type === "mock") {
                topFocusMinutes = 135
              } else if (topFocus.type === "diagnostic") {
                topFocusMinutes = 30
              }
            }
          } catch {
            // Study-plan computation failed — leave nulls so the
            // hero card stays hidden.
          }
        } catch {
          // Signals or NBA computation failed — leave the panel hidden.
        }

        // Resume target — find the most recently touched chapter from
        // user_metadata.chapter_progress and surface a "continue where
        // you left off" card. Independent from NBA: NBA suggests new
        // weak spots; Resume continues an in-progress reading.
        try {
          const rawProgress = user.user_metadata?.chapter_progress as
            | Record<
                string,
                {
                  sectionsRead?: Record<string, boolean>
                  lastSeenAt?: number
                }
              >
            | undefined
          if (rawProgress && typeof rawProgress === "object") {
            let bestSlug: string | null = null
            let bestTs = 0
            for (const [slug, entry] of Object.entries(rawProgress)) {
              const ts = typeof entry?.lastSeenAt === "number" ? entry.lastSeenAt : 0
              if (ts > bestTs) {
                bestTs = ts
                bestSlug = slug
              }
            }
            if (bestSlug) {
              const allChapters = getAllChapters()
              const chapter = allChapters.find((c) => c.slug === bestSlug)
              const entry = rawProgress[bestSlug]
              if (chapter && entry) {
                const total = chapter.sections.length
                const read = chapter.sections.filter(
                  (s) => entry.sectionsRead?.[s.id]
                ).length
                const firstUnread = chapter.sections.find(
                  (s) => !entry.sectionsRead?.[s.id]
                )
                const pct = total > 0 ? Math.round((read / total) * 100) : 0
                const isComplete = total > 0 && read === total
                resumeTarget = {
                  slug: chapter.slug,
                  title: chapter.title,
                  section: chapter.section,
                  href: firstUnread
                    ? `/chapters/${chapter.slug}#${firstUnread.id}`
                    : `/chapters/${chapter.slug}`,
                  pct,
                  nextSectionTitle: firstUnread?.title ?? null,
                  isComplete,
                }
              }
            }
          }
        } catch {
          // Failed to compute resume target — leave it null.
        }
      }
    }
  } catch {
    // Supabase unavailable — render with empty state
  }

  // Only use a real authored name. The email-username fallback ("adamzakaryan15")
  // makes the page look like a dev build — better to drop the comma than to
  // greet someone with their handle.
  const fullName = (user?.user_metadata?.full_name as string | null) ?? null
  const firstName: string | null =
    fullName && fullName.trim().length > 0 ? fullName.trim().split(/\s+/)[0] : null

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  })

  const greeting = timeOfDayGreeting()

  const lessons = getAllLessons()

  // ---------- Query progress data from Supabase ----------
  let questionsThisWeek = 0
  let questionsToday = 0
  let studyHours: number | null = null
  let weekAccuracy: number | null = null
  let totalSessionCount: number | null = null
  // Per-section stats split into overall / thisWeek / priorWeek so we can
  // derive a section score (60-90) and a week-over-week trend label.
  type SectionBucket = { total: number; correct: number }
  const sectionStats: Record<
    Section,
    { overall: SectionBucket; thisWeek: SectionBucket; priorWeek: SectionBucket }
  > = {
    Quant: {
      overall: { total: 0, correct: 0 },
      thisWeek: { total: 0, correct: 0 },
      priorWeek: { total: 0, correct: 0 },
    },
    Verbal: {
      overall: { total: 0, correct: 0 },
      thisWeek: { total: 0, correct: 0 },
      priorWeek: { total: 0, correct: 0 },
    },
    DI: {
      overall: { total: 0, correct: 0 },
      thisWeek: { total: 0, correct: 0 },
      priorWeek: { total: 0, correct: 0 },
    },
  }
  let activityItems: ActivityItem[] = []
  let scoreChartData: ScoreDataPoint[] = []
  let recentMistakes: {
    id: string
    section: Section
    topic: string
    preview: string
  }[] = []
  let lessonsCompletedCount = 0
  let currentPlan: string | null = null
  let currentStreak = 0
  let longestStreak = 0
  let badges: Badge[] = []
  let reviewDueCount = 0
  let reviewTopTopic: string | null = null
  let diagnosticSectionsDone = 0
  let onboardingTargetSet = false
  let onboardingExamDateSet = false
  let onboardingIntakeDone = false
  let untaggedMistakeCount = 0
  /** Count of flagged questions from the most-recent mock the student ran
   *  (across all 3 sections of that date). Drives a dashboard nudge card. */
  let lastMockFlagCount = 0
  let lastMockDate: string | null = null

  try {
    if (user) {
      const supabase = await createSupabaseServer()
      const userId = user.id

      // Weekly sessions (last 7 days)
      const weekAgo = new Date(Date.now() - 7 * 86400000).toISOString()
      const { data: weekSessions } = await supabase
        .from("practice_sessions")
        .select("total_questions, correct_count, total_time_ms, accuracy")
        .eq("user_id", userId)
        .gte("created_at", weekAgo)

      questionsThisWeek =
        weekSessions?.reduce((s, r) => s + r.total_questions, 0) ?? 0

      // Today's questions — same data, narrowed to sessions started after
      // local midnight. The session's created_at is UTC; comparing against
      // a local-midnight Date works because Supabase returns ISO timestamps.
      const localMidnightMs = new Date(new Date().toDateString()).getTime()
      const { data: todaySessions } = await supabase
        .from("practice_sessions")
        .select("total_questions, created_at")
        .eq("user_id", userId)
        .gte("created_at", new Date(localMidnightMs).toISOString())
      questionsToday =
        todaySessions?.reduce((s, r) => s + r.total_questions, 0) ?? 0

      const studyMsThisWeek =
        weekSessions?.reduce((s, r) => s + r.total_time_ms, 0) ?? 0
      studyHours =
        studyMsThisWeek > 0
          ? Number((studyMsThisWeek / 3600000).toFixed(1))
          : null
      weekAccuracy =
        weekSessions && weekSessions.length > 0
          ? Math.round(
              weekSessions.reduce((s, r) => s + Number(r.accuracy), 0) /
                weekSessions.length
            )
          : null

      // Total sessions ever
      const { count } = await supabase
        .from("practice_sessions")
        .select("id", { count: "exact", head: true })
        .eq("user_id", userId)
      totalSessionCount = count

      // Per-section accuracy from all attempts — join the parent session's
      // created_at so we can split into overall / this-week / prior-week
      // buckets for trend calculations.
      const { data: sectionAttempts } = await supabase
        .from("practice_attempts")
        .select("section, is_correct, practice_sessions(created_at)")
        .eq("user_id", userId)

      const weekAgoMs = Date.now() - 7 * 86400000
      const twoWeeksAgoMs = Date.now() - 14 * 86400000
      type AttemptWithSession = {
        section: string
        is_correct: boolean
        practice_sessions: { created_at: string } | null
      }
      for (const a of (sectionAttempts as AttemptWithSession[] | null) ?? []) {
        const sec = a.section as Section
        if (!sectionStats[sec]) continue
        sectionStats[sec].overall.total++
        if (a.is_correct) sectionStats[sec].overall.correct++

        const createdAt = a.practice_sessions?.created_at
        if (createdAt) {
          const t = new Date(createdAt).getTime()
          if (t >= weekAgoMs) {
            sectionStats[sec].thisWeek.total++
            if (a.is_correct) sectionStats[sec].thisWeek.correct++
          } else if (t >= twoWeeksAgoMs) {
            sectionStats[sec].priorWeek.total++
            if (a.is_correct) sectionStats[sec].priorWeek.correct++
          }
        }
      }

      // Lessons completed count
      const { count: completedCount } = await supabase
        .from("lesson_completions")
        .select("user_id", { count: "exact", head: true })
        .eq("user_id", userId)
      lessonsCompletedCount = completedCount ?? 0

      // Recent sessions for activity feed
      const { data: recentSessions } = await supabase
        .from("practice_sessions")
        .select("id, slug, topic, section, accuracy, total_questions, correct_count, created_at")
        .eq("user_id", userId)
        .order("created_at", { ascending: false })
        .limit(10)

      activityItems = (recentSessions ?? []).map((s) => ({
        id: s.id,
        type: "practice_set" as const,
        title: `${s.topic} Practice`,
        description: `${s.correct_count}/${s.total_questions} correct · ${Math.round(Number(s.accuracy))}%`,
        timestamp: s.created_at,
        score: Math.round(Number(s.accuracy)),
      }))

      // Weekly accuracy trend for score chart (last 8 weeks)
      const eightWeeksAgo = new Date(Date.now() - 56 * 86400000).toISOString()
      const { data: trendSessions } = await supabase
        .from("practice_sessions")
        .select("accuracy, created_at")
        .eq("user_id", userId)
        .gte("created_at", eightWeeksAgo)
        .order("created_at", { ascending: true })

      // Recent mistakes — 3 most recent wrong attempts, enriched with prompt.
      const { data: recentWrong } = await supabase
        .from("practice_attempts")
        .select("id, question_id, section, topic")
        .eq("user_id", userId)
        .eq("is_correct", false)
        .order("session_id", { ascending: false })
        .limit(3)

      if (recentWrong && recentWrong.length > 0) {
        const byId = new Map(getAllQuestions().map((q) => [q.id, q]))
        recentMistakes = recentWrong.map((r) => {
          const q = byId.get(r.question_id as string)
          const previewSource = q?.prompt ?? ""
          // Strip markdown-ish chars for a clean one-liner preview.
          const clean = previewSource
            .replace(/\n+/g, " ")
            .replace(/[#*`_>]/g, "")
            .trim()
          return {
            id: r.id as string,
            section: r.section as Section,
            topic: r.topic as string,
            preview: clean.length > 120 ? `${clean.slice(0, 120)}…` : clean,
          }
        })
      }

      // Most-recent purchase → current plan chip. Users may upgrade later
      // so we take the latest row.
      const { data: latestPurchase } = await supabase
        .from("purchases")
        .select("plan_id")
        .eq("user_id", userId)
        .order("paid_at", { ascending: false })
        .limit(1)
        .maybeSingle()
      currentPlan = (latestPurchase?.plan_id as string | null) ?? null

      // ---------- Streaks + badges ----------
      // Every date the user had ANY activity — practice sessions or lesson
      // completions. Two small queries plus a Set dedupe beats one big
      // union query and keeps the streak logic in plain JS.
      const { data: allSessions } = await supabase
        .from("practice_sessions")
        .select("created_at, total_questions")
        .eq("user_id", userId)
      const { data: allCompletions } = await supabase
        .from("lesson_completions")
        .select("completed_at")
        .eq("user_id", userId)

      const activeDays = new Set<string>()
      let totalQuestions = 0
      let largestSessionQuestions = 0
      for (const s of allSessions ?? []) {
        const iso = (s.created_at as string).slice(0, 10)
        activeDays.add(iso)
        const qCount = (s.total_questions as number) ?? 0
        totalQuestions += qCount
        if (qCount > largestSessionQuestions) largestSessionQuestions = qCount
      }
      for (const c of allCompletions ?? []) {
        activeDays.add((c.completed_at as string).slice(0, 10))
      }

      const streak = computeStreaks(activeDays)
      currentStreak = streak.current
      longestStreak = streak.longest

      // Did the user ever build a custom test? Single-row probe.
      const { data: customProbe } = await supabase
        .from("practice_sessions")
        .select("id")
        .eq("user_id", userId)
        .eq("slug", "custom")
        .limit(1)
        .maybeSingle()
      const hasCustomTest = !!customProbe

      // Reviewed vs tagged mistakes — badge progress.
      const { data: tagRows } = await supabase
        .from("error_tags")
        .select("reviewed")
        .eq("user_id", userId)
      let taggedMistakeCount = 0
      let reviewedMistakeCount = 0
      for (const t of tagRows ?? []) {
        taggedMistakeCount++
        if (t.reviewed) reviewedMistakeCount++
      }

      // Untagged mistakes = total wrong attempts − tagged attempts.
      // Head-only count keeps the payload tiny; we never pull the rows.
      const { count: totalWrongCount } = await supabase
        .from("practice_attempts")
        .select("id", { count: "exact", head: true })
        .eq("user_id", userId)
        .eq("is_correct", false)
      untaggedMistakeCount = Math.max(
        0,
        (totalWrongCount ?? 0) - taggedMistakeCount
      )

      const rawTargetBadge = user.user_metadata?.target_score
      const hasTarget =
        typeof rawTargetBadge === "number" && rawTargetBadge >= 205

      badges = computeBadges({
        totalSessions: totalSessionCount ?? 0,
        totalQuestions,
        lessonsCompleted: lessonsCompletedCount,
        longestStreak,
        currentStreak,
        taggedMistakeCount,
        reviewedMistakeCount,
        hasCustomTest,
        hasTarget,
        largestSessionQuestions,
      })

      if (trendSessions && trendSessions.length > 0) {
        const weeks = new Map<string, number[]>()
        for (const s of trendSessions) {
          const d = new Date(s.created_at)
          const weekStart = new Date(d)
          weekStart.setDate(d.getDate() - d.getDay())
          const key = weekStart.toISOString().slice(0, 10)
          const arr = weeks.get(key) ?? []
          arr.push(Number(s.accuracy))
          weeks.set(key, arr)
        }
        scoreChartData = [...weeks.entries()].map(([, accs], i) => ({
          week: `Wk ${i + 1}`,
          score: Math.round(accs.reduce((a, b) => a + b, 0) / accs.length),
        }))
      }

      // Daily review queue — surface the count + top weak topic on the
      // dashboard so retrieval practice becomes a visible daily prompt.
      const queue = await getReviewQueue(supabase, userId, {
        limit: 60,
        flaggedQuestionIds: gatherFlaggedQuestionIds(user.user_metadata),
      })
      reviewDueCount = queue.length
      if (queue.length > 0) {
        const counts = new Map<string, number>()
        for (const c of queue) counts.set(c.topic, (counts.get(c.topic) ?? 0) + 1)
        const [topTopic] = [...counts.entries()].sort((a, b) => b[1] - a[1])
        reviewTopTopic = topTopic?.[0] ?? null
      }

      // Diagnostic — count which of the 3 diagnostic sections have been
      // completed. Used to surface the "Start your diagnostic" CTA only
      // when the user hasn't finished it yet.
      const { data: diagRows } = await supabase
        .from("practice_sessions")
        .select("slug")
        .eq("user_id", userId)
        .in("slug", [
          "diagnostic-quant",
          "diagnostic-verbal",
          "diagnostic-di",
        ])
      const diagSlugs = new Set((diagRows ?? []).map((r) => r.slug as string))
      diagnosticSectionsDone = diagSlugs.size

      // Onboarding state — target + exam are in user_metadata. Read
      // once for the Getting Started checklist up top. The intake-survey
      // flag flips when the multi-step /onboarding wizard has been
      // completed (it writes user_metadata.onboarding.completedAt).
      const rawMetaTarget = user.user_metadata?.target_score
      onboardingTargetSet =
        typeof rawMetaTarget === "number" && rawMetaTarget >= 205
      const metaExamDate = user.user_metadata?.exam_date
      onboardingExamDateSet =
        typeof metaExamDate === "string" && metaExamDate.length >= 10
      const metaOnboarding = user.user_metadata?.onboarding
      onboardingIntakeDone =
        typeof metaOnboarding === "object" &&
        metaOnboarding !== null &&
        typeof (metaOnboarding as { completedAt?: unknown }).completedAt === "string"

      // Last-mock flag nudge — take the most recent date with any
      // flags across its three sections. The flags live in
      // user_metadata.mock_flags, so no extra DB round-trip needed.
      const mockFlagsTree =
        (user.user_metadata?.mock_flags as
          | Record<string, Partial<Record<Section, string[]>>>
          | undefined) ?? {}
      const sortedDates = Object.keys(mockFlagsTree)
        .filter((d) => /^\d{4}-\d{2}-\d{2}$/.test(d))
        .sort((a, b) => b.localeCompare(a))
      for (const d of sortedDates) {
        const perDate = mockFlagsTree[d] ?? {}
        const count = (["Quant", "Verbal", "DI"] as const).reduce(
          (acc, sec) => acc + (perDate[sec]?.length ?? 0),
          0
        )
        if (count > 0) {
          lastMockFlagCount = count
          lastMockDate = d
          break
        }
      }
    }
  } catch {
    // Supabase query failed — render with empty state
  }

  const hasData = (totalSessionCount ?? 0) > 0

  // ---------- Derive section / total scores ----------
  // A section score (60-90) is only shown once the user has a minimum sample
  // to avoid wild swings from 1-2 lucky answers.
  const SECTION_MIN_SAMPLE = 10

  /** Accuracy (0-1) → official GMAT section scaled score (60-90). */
  function scaledSectionScore(correct: number, total: number): number {
    return Math.round(60 + (correct / total) * 30)
  }

  /**
   * Sum of section scores → GMAT Focus total (205, 215, 225, …, 805).
   * Three sections each contribute 30 points above the 60 floor, so
   * 600 raw points map to the 600-point 205..805 range (1:1 at max).
   * Round to the nearest valid Focus score (increments of 10 offset by 5).
   */
  function scaledTotalScore(
    quant: number,
    verbal: number,
    di: number
  ): number {
    const above60 = quant - 60 + (verbal - 60) + (di - 60)
    const raw = 205 + above60 * 6.6667
    const rounded = 205 + Math.round((raw - 205) / 10) * 10
    return Math.min(805, Math.max(205, rounded))
  }

  const sectionDerived: Record<
    Section,
    {
      score: number | null
      accuracy: number | null
      trend: "up" | "down" | "stable" | undefined
      trendLabel: string | undefined
    }
  > = {
    Quant: deriveSection("Quant"),
    Verbal: deriveSection("Verbal"),
    DI: deriveSection("DI"),
  }

  function deriveSection(section: Section) {
    const s = sectionStats[section]
    const hasEnough = s.overall.total >= SECTION_MIN_SAMPLE
    const accuracy = hasEnough
      ? Math.round((s.overall.correct / s.overall.total) * 100)
      : null
    const score = hasEnough
      ? scaledSectionScore(s.overall.correct, s.overall.total)
      : null

    let trend: "up" | "down" | "stable" | undefined
    let trendLabel: string | undefined
    if (s.thisWeek.total >= 3 && s.priorWeek.total >= 3) {
      const thisWeekAcc = (s.thisWeek.correct / s.thisWeek.total) * 100
      const priorWeekAcc = (s.priorWeek.correct / s.priorWeek.total) * 100
      const delta = Math.round(thisWeekAcc - priorWeekAcc)
      if (Math.abs(delta) < 2) {
        trend = "stable"
        trendLabel = "flat"
      } else if (delta > 0) {
        trend = "up"
        trendLabel = `+${delta}%`
      } else {
        trend = "down"
        trendLabel = `${delta}%`
      }
    }

    return { score, accuracy, trend, trendLabel }
  }

  const allSectionsHaveSample =
    sectionDerived.Quant.score !== null &&
    sectionDerived.Verbal.score !== null &&
    sectionDerived.DI.score !== null

  const estimatedTotal = allSectionsHaveSample
    ? scaledTotalScore(
        sectionDerived.Quant.score!,
        sectionDerived.Verbal.score!,
        sectionDerived.DI.score!
      )
    : null

  const totalLessons = lessons.length
  const lessonPct =
    totalLessons > 0
      ? Math.round((lessonsCompletedCount / totalLessons) * 100)
      : 0

  // User's persisted target score lives in user_metadata.target_score.
  // Round to a GMAT-valid value defensively in case a future client writes
  // something else.
  const rawTarget = (user?.user_metadata?.target_score as number | null | undefined) ?? null
  const targetScore =
    typeof rawTarget === "number" &&
    Number.isInteger(rawTarget) &&
    rawTarget >= 205 &&
    rawTarget <= 805
      ? rawTarget
      : null

  // Daily question goal — per-user override stored in user_metadata,
  // defaults to 25 when unset. Drives the goal widget in the hero.
  const rawDailyGoal = user?.user_metadata?.daily_question_goal
  const dailyQuestionGoal: number =
    typeof rawDailyGoal === "number" && rawDailyGoal > 0 && rawDailyGoal <= 200
      ? rawDailyGoal
      : 25

  // Gap copy when both estimate + target are known — "+50 to hit target"
  // or "— already at target" if the user has exceeded it.
  let goalGapLabel: string | null = null
  if (estimatedTotal !== null && targetScore !== null) {
    const gap = targetScore - estimatedTotal
    if (gap > 0) goalGapLabel = `+${gap} to hit target`
    else if (gap === 0) goalGapLabel = "On target — keep practicing"
    else goalGapLabel = `+${-gap} above target`
  }

  // Onboarding checklist — only rendered while any of the four setup
  // steps are still outstanding. Disappears permanently once complete.
  // The intake survey wizard at /onboarding sets target + exam + a
  // larger intake (current score, weekly hours, weak areas, prep
  // history). When done, the first three steps below auto-flip "done"
  // because the wizard writes target_score / exam_date for us.
  const onboardingSteps = [
    {
      key: "intake",
      label: "Run the intake survey",
      description: "Six quick questions — target, test date, weak areas, weekly hours. Seeds the plan.",
      href: "/onboarding",
      done: onboardingIntakeDone,
      cta: "Start",
    },
    {
      key: "target",
      label: "Set your target score",
      description: "Drives every accuracy target across the app.",
      href: "/dashboard#score-goal",
      done: onboardingTargetSet,
      cta: "Set target",
    },
    {
      key: "exam",
      label: "Set your exam date",
      description: "Unlocks the exam countdown and a time-aware Study Plan.",
      href: "/settings",
      done: onboardingExamDateSet,
      cta: "Set date",
    },
    {
      key: "diagnostic",
      label: "Take the diagnostic",
      description: "3 sections, 10 questions each. Baselines everything.",
      href: "/diagnostic",
      done: diagnosticSectionsDone === 3,
      cta: diagnosticSectionsDone === 0 ? "Start" : "Continue",
    },
  ] as const
  const onboardingComplete = onboardingSteps.every((s) => s.done)
  const onboardingDoneCount = onboardingSteps.filter((s) => s.done).length

  // === Dashboard stage gate ===
  // Pre-data ("baseline" stage): the student has no practice or diagnostic
  // sessions yet, so most analytics widgets would render as 12 dead cards
  // ("—" everywhere). Instead, drop them entirely and focus the page on the
  // single decisive action: take the diagnostic. Setup checklist + a locked
  // preview of what unlocks afterward are the only other things on screen.
  if (!hasData) {
    return (
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Slim greeting — no daily-goal pill, no plan chip; nothing to
            show until there's signal. */}
        <section className="relative overflow-hidden rounded-2xl border border-white/[0.06] px-6 py-9 sm:px-10 sm:py-12" style={{ backgroundColor: "#0D0D0D" }}>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 20% -10%, rgba(201,168,76,0.14) 0%, transparent 60%)",
            }}
            aria-hidden
          />
          <div
            className="absolute inset-0 pointer-events-none bg-grain opacity-[0.035] mix-blend-overlay"
            aria-hidden
          />
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A84C" }}>
                {today}
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
            <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05]">
              {firstName ? (
                <>
                  {greeting},{" "}
                  <span
                    className="font-display-italic"
                    style={{ color: "#C9A84C" }}
                  >
                    {firstName}.
                  </span>
                </>
              ) : (
                <>
                  {greeting}
                  <span style={{ color: "#C9A84C" }}>.</span>
                </>
              )}
            </h1>
            <p className="text-[14px] text-[#888888] leading-[1.65] mt-3 max-w-xl">
              Your dashboard activates after the diagnostic. Until then,
              everything you see here is setup.
            </p>
          </div>
        </section>

        {/* Diagnostic-dominant hero — the single page-level primary
            action. Everything else is secondary. */}
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
          <div className="relative grid lg:grid-cols-[minmax(0,1fr)_320px] gap-8 lg:gap-12 p-6 sm:p-10">
            <div className="min-w-0">
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="inline-flex items-center justify-center w-7 h-7 rounded-lg"
                  style={{ backgroundColor: "rgba(201,168,76,0.14)" }}
                >
                  <Target className="w-3.5 h-3.5" style={{ color: "#C9A84C" }} />
                </span>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A84C" }}>
                  Start here
                </p>
              </div>
              <h2 className="font-display text-3xl sm:text-[40px] font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05]">
                Take your diagnostic{" "}
                <span className="font-display-italic" style={{ color: "#C9A84C" }}>
                  first.
                </span>
              </h2>
              <p className="mt-4 text-[15px] text-[#C0C0C0] leading-[1.7] max-w-2xl">
                Without it, every recommendation on this site is a guess.
                The diagnostic baselines your readiness across Quant,
                Verbal, and Data Insights — and turns the rest of the
                dashboard on.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px]" style={{ color: "rgba(255,255,255,0.5)" }}>
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#C9A84C" }} aria-hidden />
                  30 questions · 3 sections
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-3 h-3" />
                  ~50 min
                </span>
                <span>{diagnosticSectionsDone}/3 sections done</span>
              </div>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href="/diagnostic"
                  className="group inline-flex items-center gap-2 px-5 py-3 rounded-lg text-[13px] font-semibold transition-transform duration-200 hover:-translate-y-0.5"
                  style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
                >
                  {diagnosticSectionsDone === 0
                    ? "Start 30-question diagnostic"
                    : `Continue diagnostic (${diagnosticSectionsDone}/3)`}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                {!onboardingTargetSet && (
                  <Link
                    href="/onboarding"
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-lg text-[13px] font-semibold border transition-colors"
                    style={{
                      borderColor: "rgba(255,255,255,0.10)",
                      color: "#C0C0C0",
                    }}
                  >
                    Set target score
                  </Link>
                )}
              </div>
            </div>
            {/* Right column — three thin status rows showing setup
                state. Quiet visual; the diagnostic CTA stays dominant. */}
            <div className="flex flex-col gap-2.5 lg:max-w-[320px]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C9A84C] mb-1">
                Setup status
              </p>
              {[
                { label: "Diagnostic", done: diagnosticSectionsDone === 3 },
                { label: "Target score", done: onboardingTargetSet },
                { label: "Exam date", done: onboardingExamDateSet },
                { label: "Intake survey", done: onboardingIntakeDone },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg border"
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
                    <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#3ECF8E" }} />
                  ) : (
                    <span
                      className="w-3.5 h-3.5 rounded-full border flex-shrink-0"
                      style={{ borderColor: "rgba(255,255,255,0.2)" }}
                      aria-hidden
                    />
                  )}
                  <span className="text-[13px] flex-1" style={{ color: row.done ? "#888888" : "#C0C0C0" }}>
                    {row.label}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.18em] font-semibold" style={{ color: row.done ? "#3ECF8E" : "rgba(255,255,255,0.4)" }}>
                    {row.done ? "Set" : "Missing"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === Onboarding checklist (rebranded for the baseline framing) === */}
        {!onboardingComplete && (
          <section>
            <div className="flex items-center gap-3 mb-5">
              <p
                className="text-[10px] font-semibold uppercase tracking-[0.22em]"
                style={{ color: "#C9A84C" }}
              >
                Build your GMAT baseline
              </p>
              <div
                className="h-px flex-1"
                style={{
                  background:
                    "linear-gradient(to right, rgba(201,168,76,0.3), transparent)",
                }}
                aria-hidden
              />
              <span className="text-[11px] text-[#888888] tabular-nums">
                {onboardingDoneCount}/{onboardingSteps.length} done
              </span>
            </div>
            <div
              className="p-6 sm:p-7 rounded-2xl border"
              style={{
                borderColor: "rgba(201,168,76,0.18)",
                backgroundColor: "rgba(201,168,76,0.03)",
              }}
            >
              <p className="text-[14px] text-[#C0C0C0] leading-[1.65] mb-6 max-w-2xl">
                Each step calibrates a specific part of your plan.
                Together they unlock readiness scoring, weak-area mapping,
                and a weekly cadence built around your test date.
              </p>
              <div className="space-y-3">
                {onboardingSteps.map((step, i) => {
                  // Outcome-focused descriptions — what each step *unlocks*,
                  // not what it asks for. Premium framing of admin work.
                  const outcomeCopy: Record<string, string> = {
                    intake:
                      "Personalizes your weekly workload, weak-area focus, and section priority.",
                    target:
                      "Sets the accuracy thresholds and pacing goals for every drill.",
                    exam:
                      "Converts your timeline into a week-by-week study cadence.",
                    diagnostic:
                      "Identifies the first weaknesses to attack, in priority order.",
                  }
                  return (
                    <Link
                      key={step.key}
                      href={step.href}
                      className="group flex items-center gap-5 p-4 rounded-xl border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-15px_rgba(201,168,76,0.18)]"
                      style={{
                        borderColor: step.done
                          ? "rgba(62,207,142,0.2)"
                          : "rgba(255,255,255,0.08)",
                        backgroundColor: step.done
                          ? "rgba(62,207,142,0.04)"
                          : "#0D0D0D",
                      }}
                    >
                      <span
                        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{
                          backgroundColor: step.done
                            ? "rgba(62,207,142,0.15)"
                            : "rgba(201,168,76,0.08)",
                        }}
                      >
                        {step.done ? (
                          <CheckCircle className="w-4 h-4" style={{ color: "#3ECF8E" }} />
                        ) : (
                          <span
                            className="font-display text-base font-semibold tabular-nums"
                            style={{ color: "#C9A84C" }}
                          >
                            0{i + 1}
                          </span>
                        )}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p
                          className="text-[15px] font-semibold tracking-tight"
                          style={{ color: step.done ? "#888888" : "#F0F0F0" }}
                        >
                          {step.label}
                        </p>
                        <p className="text-[13px] text-[#888888] mt-0.5 leading-relaxed">
                          {outcomeCopy[step.key] ?? step.description}
                        </p>
                      </div>
                      {!step.done && (
                        <span
                          className="flex-shrink-0 px-3.5 py-1.5 rounded-xl text-xs font-semibold tracking-tight hidden sm:inline-flex transition-all duration-200 group-hover:scale-[1.02] group-active:scale-[0.98]"
                          style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
                        >
                          {step.cta}
                        </span>
                      )}
                    </Link>
                  )
                })}
              </div>
            </div>
          </section>
        )}

        {/* === What unlocks after the diagnostic ===
            Locked tiles to set the expectation — the dashboard isn't
            empty by accident, it's gated. Each tile is a one-line
            promise of what that widget will surface once data exists. */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <Lock className="w-3 h-3" style={{ color: "rgba(255,255,255,0.5)" }} />
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#888888]">
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
                Icon: TrendingUp,
                title: "Readiness band",
                body: "A 205–805 estimate from your section accuracy, refreshed every drill.",
              },
              {
                Icon: Compass,
                title: "Weak-area map",
                body: "Per-topic accuracy and timing, ranked by score impact.",
              },
              {
                Icon: Sparkles,
                title: "Adaptive plan",
                body: "Today's highest-leverage task, picked from your weakest signals.",
              },
              {
                Icon: RotateCcw,
                title: "Review queue",
                body: "Spaced-retrieval queue of misses, due for review on the right day.",
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
                <div className="flex items-center justify-between">
                  <span
                    className="inline-flex items-center justify-center w-8 h-8 rounded-lg"
                    style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
                  >
                    <Icon className="w-3.5 h-3.5" style={{ color: "rgba(255,255,255,0.4)" }} />
                  </span>
                  <Lock className="w-3 h-3" style={{ color: "rgba(255,255,255,0.3)" }} aria-hidden />
                </div>
                <p className="text-[14px] font-semibold tracking-tight" style={{ color: "rgba(240,240,240,0.7)" }}>
                  {title}
                </p>
                <p className="text-[12px] leading-snug" style={{ color: "rgba(255,255,255,0.4)" }}>
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
  // Numbers were hard-coded ternaries (`onboardingComplete ? "01" : "02"`),
  // which left a gap at "06" whenever Quick Actions was hidden. Build the
  // ordered list of sections that will actually render, then look up each
  // section's index by key.
  const renderedNumberedSections: string[] = []
  if (!onboardingComplete) renderedNumberedSections.push("getting-started")
  renderedNumberedSections.push("score-goal")
  renderedNumberedSections.push("this-week")
  renderedNumberedSections.push("section-progress")
  renderedNumberedSections.push("accuracy-trend")
  if (!nbaResult) renderedNumberedSections.push("quick-actions")
  renderedNumberedSections.push("achievements")
  renderedNumberedSections.push("recent-activity")
  const sectionNum = (key: string) =>
    String(renderedNumberedSections.indexOf(key) + 1).padStart(2, "0")

  return (
    <div className="max-w-7xl mx-auto space-y-10">
      {/* Today's Mission — one decisive next step at the top of the
          dashboard. Sourced from the study-plan engine's top focus
          item. Renders only when the engine has a recommendation;
          cold-start users see the greeting first instead. */}
      {topFocus && (
        <section
          className="relative overflow-hidden rounded-2xl border"
          style={{
            backgroundColor: "#111111",
            borderColor: "rgba(255,255,255,0.06)",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 55% at 100% 0%, rgba(201,168,76,0.12) 0%, transparent 60%)",
            }}
            aria-hidden
          />
          <div
            className="absolute inset-0 pointer-events-none bg-grain opacity-[0.03] mix-blend-overlay"
            aria-hidden
          />
          <div className="relative flex flex-wrap items-center justify-between gap-6 p-6 sm:p-8">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-3">
                <Target
                  className="w-3.5 h-3.5"
                  style={{ color: "#C9A84C" }}
                  aria-hidden
                />
                <p
                  className="text-[10px] font-semibold uppercase tracking-[0.22em]"
                  style={{ color: "#C9A84C" }}
                >
                  Today&apos;s mission
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
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#F0F0F0] tracking-tight leading-[1.15]">
                {topFocus.title}
              </h2>
              <p className="text-[13px] sm:text-[14px] text-[#C0C0C0] mt-2 leading-relaxed max-w-2xl">
                {topFocus.subtitle}
              </p>
              {topFocusMinutes !== null && (
                <div className="mt-4 inline-flex items-center gap-1.5 text-[11px] text-[#888888]">
                  <Clock className="w-3 h-3" aria-hidden />
                  ~{topFocusMinutes} min
                </div>
              )}
            </div>
            <Link
              href={topFocus.href}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-[13px] font-semibold transition-transform duration-200 hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98] flex-shrink-0"
              style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
            >
              {topFocus.cta}
              <ArrowRight className="w-4 h-4" aria-hidden />
            </Link>
          </div>
        </section>
      )}

      {/* Greeting — atmospheric editorial hero */}
      <section className="relative overflow-hidden rounded-2xl border border-white/[0.06] px-6 py-10 sm:px-10 sm:py-14" style={{ backgroundColor: "#0D0D0D" }}>
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
        <div className="relative flex flex-wrap items-start justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A84C" }}>
                {today}
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
            <h1 className="font-display text-4xl sm:text-5xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05]">
              {firstName ? (
                <>
                  {greeting},{" "}
                  <span
                    className="font-display-italic"
                    style={{ color: "#C9A84C" }}
                  >
                    {firstName}.
                  </span>
                </>
              ) : (
                <>
                  {greeting}
                  <span style={{ color: "#C9A84C" }}>.</span>
                </>
              )}
            </h1>
            <p className="text-[15px] text-[#C0C0C0] leading-[1.75] mt-4 max-w-xl">
              {hasData
                ? "Pick up where you left off — your streak, review queue, and next lesson are waiting."
                : "A few quick steps below and your GMAT plan goes adaptive."}
            </p>
          </div>
          <div className="flex flex-col items-end gap-3 flex-shrink-0">
            {currentPlan && (
              <span
                className="inline-flex items-center px-3 py-1.5 rounded-full text-[10px] font-semibold uppercase tracking-[0.22em] border"
                style={{
                  backgroundColor: "rgba(201,168,76,0.08)",
                  borderColor: "rgba(201,168,76,0.25)",
                  color: "#C9A84C",
                }}
              >
                {planLabel(currentPlan)} Plan
              </span>
            )}
            {/* Daily question goal — small progress widget. The goal is
                stored per-user in user_metadata.daily_question_goal and
                defaults to 25 when unset. Counts questions answered since
                local midnight so a returning student knows what's left in
                the day at a glance. */}
            <DailyGoalWidget
              questionsToday={questionsToday}
              goal={dailyQuestionGoal}
            />
          </div>
        </div>
      </section>

      {/* Resume — pinpoints the chapter + section the student last
          touched. Sits right under the greeting so returning users see
          "continue where you left off" before any other suggestion.
          Hidden when nothing has been touched yet, or when the chapter
          is fully complete (NBA covers what to do next in that case). */}
      {resumeTarget && !resumeTarget.isComplete && (
        <Link
          href={resumeTarget.href}
          className="group relative block overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_44px_-20px_rgba(201,168,76,0.25)]"
          style={{
            borderColor: "rgba(201,168,76,0.22)",
            backgroundColor: "#0D0D0D",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 0% 50%, rgba(201,168,76,0.08) 0%, transparent 60%)",
            }}
            aria-hidden
          />
          <div className="relative flex flex-wrap items-center gap-6 p-6">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-2">
                <RotateCcw
                  className="w-3.5 h-3.5"
                  style={{ color: "#C9A84C" }}
                />
                <p
                  className="text-[10px] font-semibold uppercase tracking-[0.22em]"
                  style={{ color: "#C9A84C" }}
                >
                  Resume reading
                </p>
                <span
                  className="px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-[0.18em]"
                  style={{
                    backgroundColor: "rgba(201,168,76,0.08)",
                    color: "#C9A84C",
                  }}
                >
                  {resumeTarget.section}
                </span>
              </div>
              <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#F0F0F0] tracking-tight leading-[1.2]">
                {resumeTarget.title}
              </h2>
              {resumeTarget.nextSectionTitle && (
                <p className="text-[13px] text-[#888888] mt-1.5">
                  Up next: {resumeTarget.nextSectionTitle}
                </p>
              )}
              <div className="mt-4 flex items-center gap-3 max-w-xs">
                <div className="h-1 flex-1 rounded-full bg-white/[0.06] overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${resumeTarget.pct}%`,
                      backgroundColor: "#C9A84C",
                    }}
                  />
                </div>
                <span className="text-[11px] text-[#555555] tabular-nums tracking-wide">
                  {resumeTarget.pct}%
                </span>
              </div>
            </div>
            <div
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-[13px] font-semibold transition-transform duration-200 group-hover:translate-x-0.5"
              style={{
                backgroundColor: "#C9A84C",
                color: "#0A0A0A",
              }}
            >
              Continue
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </Link>
      )}

      {/* Today's focus — single decisive recommendation surfaced from the
          adaptive engine. Sits right under the greeting so a returning
          student sees "do this next" before any metric. Hidden until the
          engine has enough signal to recommend something. */}
      {nbaResult && (
        <NextBestActionPanel result={nbaResult} className="" />
      )}

      {/* Getting Started — disappears once all three steps are done */}
      {!onboardingComplete && (
        <section>
          <div className="flex items-center gap-3 mb-5">
            <span
              className="font-display text-[11px] font-semibold tabular-nums"
              style={{ color: "rgba(201,168,76,0.55)" }}
              aria-hidden
            >
              {sectionNum("getting-started")}
            </span>
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.22em]"
              style={{ color: "#C9A84C" }}
            >
              Build your GMAT baseline
            </p>
            <div
              className="h-px flex-1"
              style={{
                background:
                  "linear-gradient(to right, rgba(201,168,76,0.3), transparent)",
              }}
              aria-hidden
            />
            <span className="text-[11px] text-[#888888] tabular-nums">
              {onboardingDoneCount}/{onboardingSteps.length} done
            </span>
          </div>
          <div
            className="p-6 sm:p-7 rounded-2xl border"
            style={{
              borderColor: "rgba(201,168,76,0.2)",
              backgroundColor: "rgba(201,168,76,0.04)",
            }}
          >
            <div className="flex items-center justify-between gap-3 mb-6">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.1]">
                {onboardingDoneCount === 0 ? (
                  <>
                    A few quick steps before you{" "}
                    <span className="font-display-italic" style={{ color: "#C9A84C" }}>
                      begin.
                    </span>
                  </>
                ) : (
                  <>
                    {onboardingDoneCount} of {onboardingSteps.length} done —{" "}
                    <span className="font-display-italic" style={{ color: "#C9A84C" }}>
                      keep going.
                    </span>
                  </>
                )}
              </h2>
              <div
                className="h-1.5 w-28 rounded-full bg-white/[0.06] overflow-hidden flex-shrink-0"
                aria-hidden
              >
                <div
                  className="h-full rounded-full transition-all"
                  style={{
                    width: `${(onboardingDoneCount / onboardingSteps.length) * 100}%`,
                    backgroundColor: "#C9A84C",
                  }}
                />
              </div>
            </div>
            <div className="space-y-3">
              {onboardingSteps.map((step, i) => (
                <Link
                  key={step.key}
                  href={step.href}
                  className="group flex items-center gap-5 p-4 rounded-xl border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-15px_rgba(201,168,76,0.18)]"
                  style={{
                    borderColor: step.done
                      ? "rgba(62,207,142,0.2)"
                      : "rgba(255,255,255,0.08)",
                    backgroundColor: step.done ? "rgba(62,207,142,0.04)" : "#0D0D0D",
                  }}
                >
                  <span
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: step.done
                        ? "rgba(62,207,142,0.15)"
                        : "rgba(201,168,76,0.08)",
                    }}
                  >
                    {step.done ? (
                      <CheckCircle className="w-4 h-4" style={{ color: "#3ECF8E" }} />
                    ) : (
                      <span
                        className="font-display text-base font-semibold tabular-nums"
                        style={{ color: "#C9A84C" }}
                      >
                        0{i + 1}
                      </span>
                    )}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-[15px] font-semibold tracking-tight"
                      style={{ color: step.done ? "#888888" : "#F0F0F0" }}
                    >
                      {step.label}
                    </p>
                    <p className="text-[13px] text-[#888888] mt-0.5 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {!step.done && (
                    <span
                      className="flex-shrink-0 px-3.5 py-1.5 rounded-xl text-xs font-semibold tracking-tight hidden sm:inline-flex transition-all duration-200 group-hover:scale-[1.02] group-active:scale-[0.98]"
                      style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
                    >
                      {step.cta}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Score Goal Card — populated from derived section scores */}
      <section id="score-goal" className="scroll-mt-20">
        <div className="flex items-center gap-3 mb-5">
          <span
            className="font-display text-[11px] font-semibold tabular-nums"
            style={{ color: "rgba(201,168,76,0.55)" }}
            aria-hidden
          >
            {sectionNum("score-goal")}
          </span>
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.22em]"
            style={{ color: "#C9A84C" }}
          >
            Score Goal
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
        <div
          className="p-6 sm:p-7 rounded-2xl border bg-[#0F0F0F]"
          style={{ borderColor: "rgba(201,168,76,0.18)" }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 mb-5">
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "rgba(201,168,76,0.1)" }}
              >
                <Target className="w-5 h-5" style={{ color: "#C9A84C" }} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] font-semibold text-[#888888]">
                  Readiness → Target
                </p>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mt-1.5">
                  <span
                    className={
                      estimatedTotal !== null
                        ? "font-display text-4xl sm:text-[2.75rem] font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-none tabular-nums"
                        : "font-display text-4xl sm:text-[2.75rem] font-semibold text-[#555555] tracking-[-0.02em] leading-none tabular-nums"
                    }
                  >
                    {estimatedTotal !== null ? estimatedTotal : "—"}
                  </span>
                  <span className="text-xs uppercase tracking-[0.18em] text-[#555555] font-semibold">
                    readiness
                  </span>
                  <span className="text-lg text-[#555555]">→</span>
                  <TargetScoreControl
                    initialTarget={targetScore}
                    estimate={estimatedTotal}
                  />
                  {goalGapLabel && (
                    <span
                      className="ml-1 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.18em] border"
                      style={{
                        backgroundColor: "rgba(201,168,76,0.08)",
                        borderColor: "rgba(201,168,76,0.25)",
                        color: "#C9A84C",
                      }}
                    >
                      {goalGapLabel}
                    </span>
                  )}
                </div>
              </div>
            </div>
            {estimatedTotal === null && (
              <Link
                href="/test-builder"
                className="px-4 py-2 rounded-xl text-xs font-semibold tracking-tight transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] hover:opacity-90"
                style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
              >
                Take diagnostic
              </Link>
            )}
          </div>

          {/* Lessons-completed progress bar */}
          <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{
                width: `${lessonPct}%`,
                backgroundColor: "#C9A84C",
              }}
            />
          </div>
          <div className="mt-3 flex items-start justify-between gap-4 text-[13px]">
            <p className="text-[#C0C0C0] leading-[1.65] flex-1">
              {estimatedTotal !== null
                ? `Readiness band derived from ${Math.round(
                    (sectionDerived.Quant.accuracy! +
                      sectionDerived.Verbal.accuracy! +
                      sectionDerived.DI.accuracy!) /
                      3
                  )}% average practice accuracy — a current-state signal, not a test-day forecast.`
                : lessonsCompletedCount === 0
                ? "Complete lessons and build up practice data — a readiness band appears after ~10 questions in each section."
                : `${lessonsCompletedCount} of ${totalLessons} lessons complete. Practice all three sections to unlock your readiness band.`}
            </p>
            <p className="text-[#888888] font-medium tabular-nums flex-shrink-0">
              {lessonsCompletedCount}/{totalLessons} lessons
            </p>
          </div>
        </div>
      </section>

      {/* Weekly Stats */}
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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            label="Study hours this week"
            value={studyHours}
            unit={studyHours !== null ? "hrs" : undefined}
            icon={Clock}
          />
          <MetricCard
            label="Questions this week"
            value={questionsThisWeek > 0 ? questionsThisWeek : null}
            icon={CheckCircle}
          />
          <MetricCard
            label="Weekly accuracy"
            value={weekAccuracy}
            unit={weekAccuracy !== null ? "%" : undefined}
            icon={TrendingUp}
          />
          <MetricCard
            label="Current streak"
            value={currentStreak > 0 ? currentStreak : null}
            unit={currentStreak > 0 ? (currentStreak === 1 ? "day" : "days") : undefined}
            icon={Flame}
            trend={
              longestStreak > 0
                ? longestStreak === currentStreak
                  ? "stable"
                  : "up"
                : undefined
            }
            trendValue={
              longestStreak > 0 ? `best ${longestStreak}d` : undefined
            }
            pulseOnMount={currentStreak > 0}
          />
        </div>
      </section>

      {/* Section Progress + Chart */}
      <section className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 space-y-5">
          <div className="flex items-center gap-3">
            <span
              className="font-display text-[11px] font-semibold tabular-nums"
              style={{ color: "rgba(201,168,76,0.55)" }}
              aria-hidden
            >
              {sectionNum("section-progress")}
            </span>
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.22em]"
              style={{ color: "#C9A84C" }}
            >
              Section Progress
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
          <div className="grid sm:grid-cols-3 gap-4">
            {(["Quant", "Verbal", "DI"] as const).map((sec) => {
              const d = sectionDerived[sec]
              return (
                <SectionProgress
                  key={sec}
                  section={sec}
                  score={d.score}
                  accuracy={d.accuracy}
                  trend={d.trend}
                  trendLabel={d.trendLabel}
                  empty={d.score === null}
                />
              )
            })}
          </div>
        </div>

        <div className="lg:col-span-2 space-y-5">
          <div className="flex items-center gap-3">
            <span
              className="font-display text-[11px] font-semibold tabular-nums"
              style={{ color: "rgba(201,168,76,0.55)" }}
              aria-hidden
            >
              {sectionNum("accuracy-trend")}
            </span>
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.22em]"
              style={{ color: "#C9A84C" }}
            >
              Accuracy Trend
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
          <div className="p-5 rounded-2xl border border-white/[0.06] bg-[#0F0F0F] transition-all duration-300 hover:border-white/[0.12] hover:shadow-[0_20px_40px_-20px_rgba(201,168,76,0.15)]">
            <ScoreChart height={150} data={scoreChartData} />
          </div>
        </div>
      </section>

      {/* Quick Actions — hidden when the NBA panel is showing, since
          NBA's primary + alternates already cover the "what to do next"
          intent. Falls back to the full Quick Actions strip for users
          without enough signal for an NBA recommendation. */}
      {!nbaResult && (
        <section>
          <div className="flex items-center gap-3 mb-5">
            <span
              className="font-display text-[11px] font-semibold tabular-nums"
              style={{ color: "rgba(201,168,76,0.55)" }}
              aria-hidden
            >
              {sectionNum("quick-actions")}
            </span>
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.22em]"
              style={{ color: "#C9A84C" }}
            >
              Quick Actions
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
          <QuickActions />
        </section>
      )}

      {/* Achievements */}
      <section>
        <div className="flex items-center gap-3 mb-5">
          <span
            className="font-display text-[11px] font-semibold tabular-nums"
            style={{ color: "rgba(201,168,76,0.55)" }}
            aria-hidden
          >
            {sectionNum("achievements")}
          </span>
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.22em]"
            style={{ color: "#C9A84C" }}
          >
            Achievements
          </p>
          <div
            className="h-px flex-1"
            style={{
              background:
                "linear-gradient(to right, rgba(201,168,76,0.3), transparent)",
            }}
            aria-hidden
          />
          <span className="text-[11px] text-[#888888] tabular-nums">
            {badges.filter((b) => b.unlocked).length} / {badges.length} unlocked
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {badges.map((badge) => {
            const Icon = badge.unlocked ? badge.icon : Lock
            return (
              <div
                key={badge.id}
                className="group p-4 rounded-2xl border flex flex-col items-start gap-2 transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  borderColor: badge.unlocked
                    ? "rgba(201,168,76,0.25)"
                    : "rgba(255,255,255,0.06)",
                  backgroundColor: badge.unlocked
                    ? "rgba(201,168,76,0.04)"
                    : "#0F0F0F",
                }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: badge.unlocked
                      ? "rgba(201,168,76,0.12)"
                      : "rgba(255,255,255,0.04)",
                  }}
                >
                  <Icon
                    className="w-4 h-4"
                    style={{ color: badge.unlocked ? "#C9A84C" : "#555555" }}
                  />
                </div>
                <div className="min-w-0">
                  <p
                    className={
                      badge.unlocked
                        ? "text-[13px] font-semibold text-[#F0F0F0] tracking-tight"
                        : "text-[13px] font-semibold text-[#888888] tracking-tight"
                    }
                  >
                    {badge.label}
                  </p>
                  <p className="text-[11px] text-[#555555] leading-snug mt-0.5">
                    {badge.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Activity + Mistakes */}
      <section className="grid lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span
              className="font-display text-[11px] font-semibold tabular-nums"
              style={{ color: "rgba(201,168,76,0.55)" }}
              aria-hidden
            >
              {sectionNum("recent-activity")}
            </span>
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.22em]"
              style={{ color: "#C9A84C" }}
            >
              Recent Activity
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
          <div className="rounded-2xl border border-white/[0.06] bg-[#0F0F0F] p-2 transition-all duration-300 hover:border-white/[0.12]">
            <ActivityFeed items={activityItems} />
          </div>
        </div>

        {/* Recent Mistakes + Next Lesson */}
        <div className="space-y-8">
          {/* Daily Review — spaced-retrieval queue surfaced at the top
              of the action column so retrieval practice is visible every
              time the student opens the dashboard. */}
          {reviewDueCount > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-5">
                <p
                  className="text-[10px] font-semibold uppercase tracking-[0.22em]"
                  style={{ color: "#C9A84C" }}
                >
                  Daily Review
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
              <Link
                href="/review"
                className="group p-5 rounded-2xl border flex items-start gap-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-20px_rgba(201,168,76,0.2)]"
                style={{
                  borderColor: "rgba(201,168,76,0.2)",
                  backgroundColor: "rgba(201,168,76,0.04)",
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(201,168,76,0.12)" }}
                >
                  <RotateCcw className="w-5 h-5" style={{ color: "#C9A84C" }} />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] uppercase tracking-[0.18em] font-semibold text-[#888888] mb-1.5">
                    Spaced retrieval
                  </p>
                  <p className="font-display text-lg font-semibold text-[#F0F0F0] tracking-tight leading-snug mb-1">
                    {reviewDueCount} question{reviewDueCount === 1 ? "" : "s"} due for review
                  </p>
                  <p className="text-[13px] text-[#C0C0C0] leading-[1.6]">
                    {reviewTopTopic
                      ? `Weakest area right now: ${reviewTopTopic}`
                      : "Ranked by recent misses and time since last seen"}
                  </p>
                </div>
                <span
                  className="flex-shrink-0 px-3.5 py-1.5 rounded-xl text-xs font-semibold tracking-tight transition-all duration-200 group-hover:scale-[1.02] group-active:scale-[0.98]"
                  style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
                >
                  Start
                </span>
              </Link>
            </div>
          )}

          {/* Flagged from last mock — nudges the student back into the
              report to reconcile whatever they weren't sure about on
              test day. Skipped when there are no flags on the most
              recent mock. */}
          {lastMockFlagCount > 0 && lastMockDate && (
            <div>
              <div className="flex items-center gap-3 mb-5">
                <p
                  className="text-[10px] font-semibold uppercase tracking-[0.22em]"
                  style={{ color: "#C9A84C" }}
                >
                  Flagged on your last mock
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
              <Link
                href="/mock/report"
                className="group p-5 rounded-2xl border flex items-start gap-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-20px_rgba(201,168,76,0.2)]"
                style={{
                  borderColor: "rgba(201,168,76,0.2)",
                  backgroundColor: "rgba(201,168,76,0.04)",
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(201,168,76,0.12)" }}
                >
                  <Flag className="w-5 h-5" style={{ color: "#C9A84C" }} />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] uppercase tracking-[0.18em] font-semibold text-[#888888] mb-1.5">
                    Mock {lastMockDate}
                  </p>
                  <p className="font-display text-lg font-semibold text-[#F0F0F0] tracking-tight leading-snug mb-1">
                    {lastMockFlagCount} flagged question
                    {lastMockFlagCount === 1 ? "" : "s"} to revisit
                  </p>
                  <p className="text-[13px] text-[#C0C0C0] leading-[1.6]">
                    Reconcile these while the uncertainty is fresh — they already get a priority boost in your review queue.
                  </p>
                </div>
                <span
                  className="flex-shrink-0 px-3.5 py-1.5 rounded-xl text-xs font-semibold tracking-tight transition-all duration-200 group-hover:scale-[1.02] group-active:scale-[0.98]"
                  style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
                >
                  Review
                </span>
              </Link>
            </div>
          )}

          {/* Recent Mistakes */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <p
                className="text-[10px] font-semibold uppercase tracking-[0.22em]"
                style={{ color: "#C9A84C" }}
              >
                Recent Mistakes
              </p>
              <div
                className="h-px flex-1"
                style={{
                  background:
                    "linear-gradient(to right, rgba(201,168,76,0.3), transparent)",
                }}
                aria-hidden
              />
              {untaggedMistakeCount > 0 && (
                <Link
                  href="/error-log"
                  className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] font-semibold px-2.5 py-1 rounded-full transition-colors hover:opacity-90"
                  style={{
                    backgroundColor: "rgba(255,68,68,0.1)",
                    color: "#FF4444",
                  }}
                  title="Classifying a miss takes 5 seconds and makes your error analysis much sharper."
                >
                  {untaggedMistakeCount} untagged
                </Link>
              )}
            </div>
            {recentMistakes.length === 0 ? (
              <EmptyState
                icon={AlertCircle}
                title="No mistakes logged yet"
                description="Your error log will collect questions you got wrong so you can review patterns over time."
                ctaHref="/error-log"
                ctaLabel="Open error log"
                size="sm"
              />
            ) : (
              <Link
                href="/error-log"
                className="block rounded-2xl border border-white/[0.06] bg-[#0F0F0F] divide-y divide-white/[0.04] transition-all duration-300 hover:border-white/[0.12] hover:shadow-[0_20px_40px_-20px_rgba(201,168,76,0.15)]"
              >
                {recentMistakes.map((m) => (
                  <div key={m.id} className="p-4">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span
                        className="px-2 py-0.5 rounded-full text-[10px] uppercase tracking-[0.18em] font-semibold"
                        style={{
                          backgroundColor: "rgba(255,68,68,0.1)",
                          color: "#FF4444",
                        }}
                      >
                        {m.section}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.18em] font-semibold text-[#888888]">
                        {m.topic}
                      </span>
                    </div>
                    <p className="text-[13px] text-[#C0C0C0] line-clamp-2 leading-[1.65]">
                      {m.preview || "Question source not found"}
                    </p>
                  </div>
                ))}
                <div className="p-3 text-[11px] uppercase tracking-[0.18em] font-semibold text-[#888888] text-center hover:text-[#C9A84C] transition-colors">
                  View full error log →
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
