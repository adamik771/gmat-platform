import {
  Clock,
  Target,
  CheckCircle,
  Flame,
  BookOpen,
  AlertCircle,
  Lock,
  RotateCcw,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"
import MetricCard from "@/components/dashboard/MetricCard"
import SectionProgress from "@/components/dashboard/SectionProgress"
import ActivityFeed from "@/components/dashboard/ActivityFeed"
import ScoreChart, { type ScoreDataPoint } from "@/components/dashboard/ScoreChart"
import QuickActions from "@/components/dashboard/QuickActions"
import EmptyState from "@/components/shared/EmptyState"
import { getAllLessons, getAllQuestions } from "@/lib/content"
import { createSupabaseServer } from "@/lib/supabase/server"
import { getReviewQueue } from "@/lib/review-queue"
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

export default async function DashboardPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let user: any = null

  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    if (supabaseUrl && supabaseKey && supabaseUrl !== "your_supabase_url") {
      const supabase = await createSupabaseServer()
      const { data } = await supabase.auth.getUser()
      user = data.user
    }
  } catch {
    // Supabase unavailable — render with empty state
  }

  const firstName: string =
    (user?.user_metadata?.full_name as string)?.split(" ")[0] ??
    user?.email?.split("@")[0] ??
    "there"

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  })

  // Mirrors the lessons page synthesis: first 2 "done", 3rd "current".
  const lessons = getAllLessons()
  const recommendedLesson = lessons[2] ?? lessons[0]

  // ---------- Query progress data from Supabase ----------
  let questionsThisWeek = 0
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
  let untaggedMistakeCount = 0

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
      const queue = await getReviewQueue(supabase, userId, { limit: 60 })
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
      // once for the Getting Started checklist up top.
      const rawMetaTarget = user.user_metadata?.target_score
      onboardingTargetSet =
        typeof rawMetaTarget === "number" && rawMetaTarget >= 205
      const metaExamDate = user.user_metadata?.exam_date
      onboardingExamDateSet =
        typeof metaExamDate === "string" && metaExamDate.length >= 10
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

  // Gap copy when both estimate + target are known — "+50 to hit target"
  // or "— already at target" if the user has exceeded it.
  let goalGapLabel: string | null = null
  if (estimatedTotal !== null && targetScore !== null) {
    const gap = targetScore - estimatedTotal
    if (gap > 0) goalGapLabel = `+${gap} to hit target`
    else if (gap === 0) goalGapLabel = "On target — keep practicing"
    else goalGapLabel = `+${-gap} above target`
  }

  // Onboarding checklist — only rendered while any of the three setup
  // steps are still outstanding. Disappears permanently once complete.
  const onboardingSteps = [
    {
      key: "target",
      label: "Set your target score",
      description: "Drives every accuracy target across the app.",
      href: "/dashboard",
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

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Greeting */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-[#F0F0F0]">
            Good morning, {firstName}
          </h1>
          <p className="text-sm text-[#555555] mt-1">{today}</p>
        </div>
        {currentPlan && (
          <span
            className="px-2.5 py-1 rounded text-[10px] font-semibold uppercase tracking-widest flex-shrink-0 mt-2"
            style={{
              backgroundColor: "rgba(201,168,76,0.12)",
              color: "#C9A84C",
            }}
          >
            {planLabel(currentPlan)} Plan
          </span>
        )}
      </div>

      {/* Getting Started — disappears once all three steps are done */}
      {!onboardingComplete && (
        <div
          className="p-5 rounded-xl border"
          style={{
            borderColor: "rgba(201,168,76,0.2)",
            backgroundColor: "rgba(201,168,76,0.04)",
          }}
        >
          <div className="flex items-center justify-between gap-3 mb-4">
            <div>
              <p className="text-[10px] uppercase tracking-widest font-semibold" style={{ color: "#C9A84C" }}>
                Getting started
              </p>
              <p className="text-base font-semibold text-[#F0F0F0] mt-0.5">
                {onboardingDoneCount === 0
                  ? "Three quick steps before you dive in"
                  : `${onboardingDoneCount} of 3 done — keep going`}
              </p>
            </div>
            <div
              className="h-1.5 w-24 rounded-full bg-white/[0.06] overflow-hidden flex-shrink-0"
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
          <div className="space-y-2">
            {onboardingSteps.map((step, i) => (
              <Link
                key={step.key}
                href={step.href}
                className="flex items-center gap-4 p-3 rounded-lg border transition-colors hover:bg-white/[0.02]"
                style={{
                  borderColor: step.done
                    ? "rgba(62,207,142,0.18)"
                    : "rgba(255,255,255,0.08)",
                  backgroundColor: step.done ? "rgba(62,207,142,0.04)" : "#0D0D0D",
                }}
              >
                <span
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: step.done
                      ? "rgba(62,207,142,0.15)"
                      : "rgba(255,255,255,0.04)",
                  }}
                >
                  {step.done ? (
                    <CheckCircle className="w-4 h-4" style={{ color: "#3ECF8E" }} />
                  ) : (
                    <span className="text-xs font-bold text-[#888888]">{i + 1}</span>
                  )}
                </span>
                <div className="flex-1 min-w-0">
                  <p
                    className="text-sm font-semibold"
                    style={{ color: step.done ? "#888888" : "#F0F0F0" }}
                  >
                    {step.label}
                  </p>
                  <p className="text-xs text-[#888888]">{step.description}</p>
                </div>
                {!step.done && (
                  <span
                    className="flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold hidden sm:inline-flex"
                    style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
                  >
                    {step.cta}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Score Goal Card — populated from derived section scores */}
      <div
        className="p-5 rounded-xl border border-white/[0.08] bg-[#111111]"
        style={{ borderColor: "rgba(201,168,76,0.2)" }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: "rgba(201,168,76,0.1)" }}
            >
              <Target className="w-5 h-5" style={{ color: "#C9A84C" }} />
            </div>
            <div>
              <p className="text-xs text-[#555555]">Score Goal</p>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mt-1">
                <span
                  className={
                    estimatedTotal !== null
                      ? "text-xl font-bold text-[#F0F0F0]"
                      : "text-xl font-bold text-[#555555]"
                  }
                >
                  {estimatedTotal !== null ? estimatedTotal : "—"}
                  <span className="text-sm font-normal text-[#555555] ml-1">
                    estimated
                  </span>
                </span>
                <span className="text-sm text-[#555555]">→</span>
                <TargetScoreControl
                  initialTarget={targetScore}
                  estimate={estimatedTotal}
                />
                {goalGapLabel && (
                  <span
                    className="ml-1 px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-widest"
                    style={{
                      backgroundColor: "rgba(201,168,76,0.12)",
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
              className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all hover:opacity-90"
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
        <div className="mt-2 flex items-center justify-between text-xs">
          <p className="text-[#555555]">
            {estimatedTotal !== null
              ? `Estimate based on ${Math.round(
                  (sectionDerived.Quant.accuracy! +
                    sectionDerived.Verbal.accuracy! +
                    sectionDerived.DI.accuracy!) /
                    3
                )}% average practice accuracy. Keep going — accuracy improves with deliberate practice.`
              : lessonsCompletedCount === 0
              ? "Complete lessons and build up practice data — an estimate appears after ~10 questions in each section."
              : `${lessonsCompletedCount} of ${totalLessons} lessons complete. Practice all three sections to unlock a score estimate.`}
          </p>
          <p className="text-[#888888] font-medium flex-shrink-0 ml-4">
            {lessonsCompletedCount}/{totalLessons} lessons
          </p>
        </div>
      </div>

      {/* Weekly Stats */}
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
        />
      </div>

      {/* Section Progress + Chart */}
      <div className="grid lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3 space-y-4">
          <h2 className="text-sm font-semibold text-[#888888] uppercase tracking-widest">
            Section Progress
          </h2>
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

        <div className="lg:col-span-2">
          <h2 className="text-sm font-semibold text-[#888888] uppercase tracking-widest mb-4">
            Accuracy Trend
          </h2>
          <div className="p-5 rounded-xl border border-white/[0.08] bg-[#111111]">
            <ScoreChart height={150} data={scoreChartData} />
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-sm font-semibold text-[#888888] uppercase tracking-widest mb-4">
          Quick Actions
        </h2>
        <QuickActions />
      </div>

      {/* Achievements */}
      <div>
        <div className="flex items-baseline justify-between mb-4">
          <h2 className="text-sm font-semibold text-[#888888] uppercase tracking-widest">
            Achievements
          </h2>
          <span className="text-xs text-[#555555]">
            {badges.filter((b) => b.unlocked).length} / {badges.length} unlocked
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {badges.map((badge) => {
            const Icon = badge.unlocked ? badge.icon : Lock
            return (
              <div
                key={badge.id}
                className="p-4 rounded-xl border flex flex-col items-start gap-2 transition-colors"
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
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
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
                        ? "text-xs font-semibold text-[#F0F0F0]"
                        : "text-xs font-semibold text-[#888888]"
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
      </div>

      {/* Activity + Mistakes */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div>
          <h2 className="text-sm font-semibold text-[#888888] uppercase tracking-widest mb-4">
            Recent Activity
          </h2>
          <div className="rounded-xl border border-white/[0.08] bg-[#111111] p-2">
            <ActivityFeed items={activityItems} />
          </div>
        </div>

        {/* Recent Mistakes + Next Lesson */}
        <div className="space-y-6">
          {/* Daily Review — spaced-retrieval queue surfaced at the top
              of the action column so retrieval practice is visible every
              time the student opens the dashboard. */}
          {reviewDueCount > 0 && (
            <div>
              <h2 className="text-sm font-semibold text-[#888888] uppercase tracking-widest mb-4">
                Daily Review
              </h2>
              <Link
                href="/review"
                className="p-5 rounded-xl border flex items-start gap-4 transition-colors hover:opacity-95"
                style={{
                  borderColor: "rgba(201,168,76,0.2)",
                  backgroundColor: "rgba(201,168,76,0.04)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(201,168,76,0.12)" }}
                >
                  <RotateCcw className="w-5 h-5" style={{ color: "#C9A84C" }} />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-[#555555] mb-1">
                    Spaced retrieval
                  </p>
                  <p className="text-sm font-semibold text-[#F0F0F0] mb-1">
                    {reviewDueCount} question{reviewDueCount === 1 ? "" : "s"} due for review
                  </p>
                  <p className="text-xs text-[#888888]">
                    {reviewTopTopic
                      ? `Weakest area right now: ${reviewTopTopic}`
                      : "Ranked by recent misses and time since last seen"}
                  </p>
                </div>
                <span
                  className="flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold"
                  style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
                >
                  Start
                </span>
              </Link>
            </div>
          )}

          {/* Next Lesson — real content from the lesson library */}
          <div>
            <h2 className="text-sm font-semibold text-[#888888] uppercase tracking-widest mb-4">
              Recommended Next
            </h2>
            <Link
              href={`/lessons/${recommendedLesson.slug}`}
              className="p-5 rounded-xl border flex items-start gap-4 transition-colors hover:opacity-95"
              style={{
                borderColor: "rgba(201,168,76,0.2)",
                backgroundColor: "rgba(201,168,76,0.04)",
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "rgba(201,168,76,0.12)" }}
              >
                <BookOpen className="w-5 h-5" style={{ color: "#C9A84C" }} />
              </div>
              <div className="flex-1">
                <p className="text-xs text-[#555555] mb-1">
                  Module {String(recommendedLesson.module).padStart(2, "0")}
                </p>
                <p className="text-sm font-semibold text-[#F0F0F0] mb-1">
                  {recommendedLesson.title}
                </p>
                <p className="text-xs text-[#888888]">
                  Est. {recommendedLesson.duration} minutes
                </p>
              </div>
              <span
                className="flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold"
                style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
              >
                Continue
              </span>
            </Link>
          </div>

          {/* Recent Mistakes */}
          <div>
            <div className="flex items-center justify-between gap-2 mb-4">
              <h2 className="text-sm font-semibold text-[#888888] uppercase tracking-widest">
                Recent Mistakes
              </h2>
              {untaggedMistakeCount > 0 && (
                <Link
                  href="/error-log"
                  className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-semibold px-2 py-0.5 rounded transition-colors hover:opacity-90"
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
                className="block rounded-xl border border-white/[0.08] bg-[#111111] divide-y divide-white/[0.04] hover:border-white/[0.14] transition-colors"
              >
                {recentMistakes.map((m) => (
                  <div key={m.id} className="p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="px-2 py-0.5 rounded text-[10px] uppercase tracking-wide"
                        style={{
                          backgroundColor: "rgba(255,68,68,0.1)",
                          color: "#FF4444",
                        }}
                      >
                        {m.section}
                      </span>
                      <span className="text-[10px] uppercase tracking-widest text-[#555555]">
                        {m.topic}
                      </span>
                    </div>
                    <p className="text-xs text-[#888888] line-clamp-2">
                      {m.preview || "Question source not found"}
                    </p>
                  </div>
                ))}
                <div className="p-3 text-xs text-[#888888] text-center">
                  View full error log →
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
