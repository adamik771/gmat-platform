import {
  Clock,
  Target,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Award,
  ChevronRight,
  Compass,
  Flag,
  FlaskConical,
  Lock,
  RotateCcw,
  Sparkles,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"
import QuickActions from "@/components/dashboard/QuickActions"
import StudyHoursChart from "./StudyHoursChart"
import { getAllChapters, getAllQuestions } from "@/lib/content"
import { createSupabaseServer } from "@/lib/supabase/server"
import { getReviewQueue } from "@/lib/review-queue"
import { gatherFlaggedQuestionIds } from "@/lib/mock"
import {
  officialExamReminder,
  parseIsoDate,
  type OfficialExamReminder,
} from "@/lib/official-exams"
import {
  computeStudyPlan,
  type FocusAction,
} from "@/lib/study-plan-engine"
import {
  computeBadges,
  computeStreaks,
  type Badge,
} from "@/lib/gamification"
import type { Section } from "@/types"
import TargetScoreControl from "./TargetScoreControl"

const PLAN_LABELS: Record<string, string> = {
  self_study: "Self-Study",
  self_study_guaranteed: "Self-Study Guaranteed",
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

export default async function DashboardPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let user: any = null

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
    nextChapter: { slug: string; title: string; section: "Quant" | "Verbal" | "DI" } | null
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
          const examDate =
            (user.user_metadata?.exam_date as string | null | undefined) ?? null
          const targetScore =
            (user.user_metadata?.target_score as number | null | undefined) ?? null

          // Today's Mission — pull the top item from the study-plan
          // engine and compute an estimated time so the hero card can
          // render "~15 min" without the engine knowing about chapter
          // lengths. Uses the already-derived `targetScore`, `examDate`,
          // and `flaggedQuestionIds` inputs. Failures are non-fatal:
          // the hero card just doesn't render.
          try {
            const metaOfficialEarly = user.user_metadata?.official_exam_scores
            const plan = await computeStudyPlan(supabase, user.id, {
              targetScore,
              examDate,
              flaggedQuestionIds,
              officialExamCount: Array.isArray(metaOfficialEarly)
                ? metaOfficialEarly.length
                : 0,
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
              } else if (topFocus.type === "baseline") {
                topFocusMinutes = 135
              }
            }
          } catch {
            // Study-plan computation failed — leave nulls so the
            // hero card stays hidden.
          }
        } catch {
          // Study-plan inputs failed to resolve — leave the hero hidden.
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
                let nextChapter: { slug: string; title: string; section: "Quant" | "Verbal" | "DI" } | null = null
                if (isComplete) {
                  const SECTION_ORDER: Record<string, number> = { Quant: 0, Verbal: 1, DI: 2 }
                  const sortedAll = allChapters
                    .filter((c) => c.section === "Quant" || c.section === "Verbal" || c.section === "DI")
                    .sort((a, b) => {
                      const sd = (SECTION_ORDER[a.section] ?? 9) - (SECTION_ORDER[b.section] ?? 9)
                      return sd !== 0 ? sd : a.title.localeCompare(b.title)
                    })
                  const idx = sortedAll.findIndex((c) => c.slug === chapter.slug)
                  const nc = idx !== -1 ? (sortedAll[idx + 1] ?? null) : null
                  if (nc && (nc.section === "Quant" || nc.section === "Verbal" || nc.section === "DI")) {
                    nextChapter = { slug: nc.slug, title: nc.title, section: nc.section }
                  }
                }
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
                  nextChapter,
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

  // ---------- Query progress data from Supabase ----------
  let questionsThisWeek = 0
  let questionsToday = 0
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
  /** Every session's timestamp + duration — the study-hours chart buckets
   *  these into local-time days client-side and supports week-back nav. */
  let studySessions: Array<{ t: string; ms: number }> = []
  let badges: Badge[] = []
  let reviewDueCount = 0
  let reviewTopTopic: string | null = null
  let officialExamCount = 0
  let examReminder: OfficialExamReminder | null = null
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
        .select("created_at, total_questions, total_time_ms")
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
        const ms = (s.total_time_ms as number) ?? 0
        if (ms > 0) studySessions.push({ t: s.created_at as string, ms })
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

      // Official baseline — how many mba.com practice-exam scores the
      // student has entered. Drives the "set your baseline" CTA until the
      // first official score exists.
      const metaOfficialScores = user.user_metadata?.official_exam_scores
      officialExamCount = Array.isArray(metaOfficialScores)
        ? metaOfficialScores.length
        : 0

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

      // Official-exam reminder — surfaces only when the next weekly official
      // practice exam is due within a week (or overdue), derived from the
      // exam date + how many officials have been entered.
      examReminder = officialExamReminder(
        typeof metaExamDate === "string" ? metaExamDate : null,
        new Date().toISOString().slice(0, 10),
        officialExamCount,
      )

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
    // NB: entering the baseline official exam is NOT a setup step — it's a
    // timed action for the final ~6 weeks. It's surfaced by Today's Mission
    // and the weekly official-exam reminder, not this checklist.
  ] as const
  const onboardingComplete = onboardingSteps.every((s) => s.done)
  const onboardingDoneCount = onboardingSteps.filter((s) => s.done).length

  // === Dashboard stage gate ===
  // Pre-data ("baseline" stage): the student has no practice sessions yet,
  // so most analytics widgets would render as 12 dead cards ("—"
  // everywhere). Instead, drop them entirely and focus the page on the
  // single decisive action: take the baseline official exam. Setup
  // checklist + a locked
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
              Your dashboard activates once you practice and enter your
              baseline official exam. Until then, everything here is setup.
            </p>
          </div>
        </section>

        {/* Baseline-dominant hero — the single page-level primary
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
                Set your baseline{" "}
                <span className="font-display-italic" style={{ color: "#C9A84C" }}>
                  first.
                </span>
              </h2>
              <p className="mt-4 text-[15px] text-[#C0C0C0] leading-[1.7] max-w-2xl">
                Take Official Practice Exam 1 on mba.com under full exam
                conditions — same start time as your real slot, one sitting,
                official breaks — then enter the score here. A real exam is
                the only baseline worth planning around.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px]" style={{ color: "rgba(255,255,255,0.5)" }}>
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#C9A84C" }} aria-hidden />
                  Official GMAT Focus practice exam · mba.com
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-3 h-3" />
                  ~2 h 15 min, one sitting
                </span>
              </div>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href="/mock"
                  className="group inline-flex items-center gap-2 px-5 py-3 rounded-lg text-[13px] font-semibold transition-transform duration-200 hover:-translate-y-0.5"
                  style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
                >
                  Open the official exam plan
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
                state. Quiet visual; the baseline CTA stays dominant. */}
            <div className="flex flex-col gap-2.5 lg:max-w-[320px]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C9A84C] mb-1">
                Setup status
              </p>
              {[
                { label: "Baseline exam", done: officialExamCount > 0 },
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
                    baseline:
                      "Anchors your score trend and what the gap to target really is.",
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

        {/* === What unlocks after your first data ===
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

  // === Active-mode derived bits ===
  // Unlocked-badge count + the label of the most recently relevant unlocked
  // badge, surfaced in the one-line Achievements chip. computeBadges returns
  // a stable order with earlier-earned milestones first; the *last* unlocked
  // entry is therefore the most advanced (most-recently-relevant) one.
  const unlockedBadges = badges.filter((b) => b.unlocked)
  const latestBadgeLabel =
    unlockedBadges.length > 0 ? unlockedBadges[unlockedBadges.length - 1].label : null

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Compact greeting bar — one slim row replacing the old ~200px
          editorial hero. Greeting + date on the left; plan chip + a
          compact daily-goal indicator on the right. Restrained gold. */}
      <section
        className="relative overflow-hidden rounded-2xl border border-white/[0.06] px-5 sm:px-6 py-4"
        style={{ backgroundColor: "#0D0D0D" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 120% at 0% 0%, rgba(201,168,76,0.08) 0%, transparent 60%)",
          }}
          aria-hidden
        />
        <div className="relative flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
          <div className="min-w-0">
            <h1 className="font-display text-xl sm:text-2xl font-semibold text-[#F0F0F0] tracking-[-0.01em] leading-tight">
              {firstName ? (
                <>
                  {greeting},{" "}
                  <span className="font-display-italic" style={{ color: "#C9A84C" }}>
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
            <p className="text-[12px] mt-1" style={{ color: "#888888" }}>
              {today}
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            {currentPlan && (
              <span
                className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.18em] border"
                style={{
                  backgroundColor: "rgba(201,168,76,0.08)",
                  borderColor: "rgba(201,168,76,0.25)",
                  color: "#C9A84C",
                }}
              >
                {planLabel(currentPlan)}
              </span>
            )}
            {/* Daily question goal — count vs target since local midnight.
                Subdued gold until the goal is hit, then green. */}
            <div className="flex items-center gap-2">
              <span
                className="font-display text-base font-semibold tabular-nums leading-none"
                style={{
                  color:
                    questionsToday >= dailyQuestionGoal && dailyQuestionGoal > 0
                      ? "#3ECF8E"
                      : "#F0F0F0",
                }}
              >
                {questionsToday}
              </span>
              <span className="text-[12px] tabular-nums" style={{ color: "#888888" }}>
                / {dailyQuestionGoal}
              </span>
              <span
                className="text-[10px] uppercase tracking-[0.18em] font-semibold"
                style={{
                  color:
                    questionsToday >= dailyQuestionGoal && dailyQuestionGoal > 0
                      ? "#3ECF8E"
                      : "#888888",
                }}
              >
                {questionsToday >= dailyQuestionGoal && dailyQuestionGoal > 0
                  ? "Goal hit"
                  : "today"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started — disappears once all setup steps are done */}
      {/* Finish-setup strip — compact. Shows only the steps still left (no
          re-listing completed ones) + a thin progress bar. Disappears once
          onboarding is complete. */}
      {!onboardingComplete && (
        <section
          className="rounded-2xl border overflow-hidden"
          style={{
            borderColor: "rgba(201,168,76,0.2)",
            backgroundColor: "rgba(201,168,76,0.04)",
          }}
        >
          <div className="flex items-center gap-3 px-5 pt-3.5 pb-2.5">
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.22em] flex-shrink-0"
              style={{ color: "#C9A84C" }}
            >
              Finish setup
            </p>
            <span
              className="text-[11px] tabular-nums flex-shrink-0"
              style={{ color: "#888888" }}
            >
              {onboardingDoneCount}/{onboardingSteps.length}
            </span>
            <div
              className="h-1 flex-1 rounded-full bg-white/[0.06] overflow-hidden"
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
          <div className="divide-y divide-white/[0.04]">
            {onboardingSteps
              .filter((step) => !step.done)
              .map((step) => (
                <Link
                  key={step.key}
                  href={step.href}
                  className="group flex items-center gap-3 px-5 py-3 min-h-[44px] transition-colors hover:bg-white/[0.02]"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: "#C9A84C" }}
                    aria-hidden
                  />
                  <p className="flex-1 min-w-0 text-[13px] font-semibold text-[#F0F0F0] truncate">
                    {step.label}
                  </p>
                  <span
                    className="flex-shrink-0 inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.18em] font-semibold"
                    style={{ color: "#C9A84C" }}
                  >
                    {step.cta}
                    <ChevronRight
                      className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </span>
                </Link>
              ))}
          </div>
        </section>
      )}

      {/* Today's Mission — one decisive next step. Sourced from the
          study-plan engine's top focus item. Renders only when the
          engine has a recommendation. */}
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

      {/* Quick Actions — fallback when Today's Mission isn't showing, so
          users without a study-plan recommendation still get a clear
          "what to do next" strip. */}
      {!topFocus && <QuickActions />}

      {/* Status strip — merges the old Score Goal + This Week cards into one
          compact row of stat cells: readiness→target (with the inline,
          editable TargetScoreControl), streak, week volume, week accuracy. */}
      <section
        className="rounded-2xl border bg-[#0F0F0F] p-4 sm:p-5"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-y divide-white/[0.05] sm:divide-y-0 sm:divide-x">
          {/* Readiness → Target */}
          <div className="px-1 py-3 sm:px-4 sm:py-1">
            <p className="text-[10px] uppercase tracking-[0.22em] font-semibold text-[#888888]">
              Readiness → Target
            </p>
            <div className="flex items-baseline gap-2 mt-2">
              <span
                className="font-display text-[2rem] font-semibold tracking-[-0.02em] leading-none tabular-nums"
                style={{ color: estimatedTotal !== null ? "#F0F0F0" : "#555555" }}
              >
                {estimatedTotal !== null ? estimatedTotal : "—"}
              </span>
              <span className="text-base text-[#555555]">→</span>
              <TargetScoreControl
                initialTarget={targetScore}
                estimate={estimatedTotal}
              />
            </div>
            {goalGapLabel && (
              <p className="text-[11px] mt-1.5" style={{ color: "#C9A84C" }}>
                {goalGapLabel}
              </p>
            )}
          </div>

          {/* Streak */}
          <div className="px-1 py-3 sm:px-4 sm:py-1">
            <p className="text-[10px] uppercase tracking-[0.22em] font-semibold text-[#888888]">
              Streak
            </p>
            <p
              className="font-display text-[2rem] font-semibold tracking-[-0.02em] leading-none tabular-nums mt-2"
              style={{ color: currentStreak > 0 ? "#F0F0F0" : "#555555" }}
            >
              {currentStreak > 0 ? currentStreak : "—"}
              {currentStreak > 0 && (
                <span className="text-[12px] font-medium text-[#888888] ml-1.5">
                  {currentStreak === 1 ? "day" : "days"}
                </span>
              )}
            </p>
            {longestStreak > currentStreak && (
              <p className="text-[11px] mt-1.5" style={{ color: "#555555" }}>
                best {longestStreak}d
              </p>
            )}
          </div>

          {/* This week — questions */}
          <div className="px-1 py-3 sm:px-4 sm:py-1">
            <p className="text-[10px] uppercase tracking-[0.22em] font-semibold text-[#888888]">
              This week
            </p>
            <p
              className="font-display text-[2rem] font-semibold tracking-[-0.02em] leading-none tabular-nums mt-2"
              style={{ color: questionsThisWeek > 0 ? "#F0F0F0" : "#555555" }}
            >
              {questionsThisWeek > 0 ? questionsThisWeek : "—"}
              <span className="text-[12px] font-medium text-[#888888] ml-1.5">
                questions
              </span>
            </p>
          </div>

          {/* Accuracy */}
          <div className="px-1 py-3 sm:px-4 sm:py-1">
            <p className="text-[10px] uppercase tracking-[0.22em] font-semibold text-[#888888]">
              Accuracy
            </p>
            <p
              className="font-display text-[2rem] font-semibold tracking-[-0.02em] leading-none tabular-nums mt-2"
              style={{ color: weekAccuracy !== null ? "#F0F0F0" : "#555555" }}
            >
              {weekAccuracy !== null ? weekAccuracy : "—"}
              {weekAccuracy !== null && (
                <span className="text-[12px] font-medium text-[#888888] ml-0.5">%</span>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Study hours — per-day time invested, week-by-week comparison */}
      <section>
        <div className="flex items-center gap-3 mb-5">
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.22em]"
            style={{ color: "#C9A84C" }}
          >
            Study Hours
          </p>
          <div
            className="h-px flex-1"
            style={{
              background:
                "linear-gradient(to right, rgba(201,168,76,0.3), transparent)",
            }}
            aria-hidden
          />
          <span className="text-[11px]" style={{ color: "#555555" }}>
            Time in sessions, per day
          </span>
        </div>
        <StudyHoursChart sessions={studySessions} />
      </section>

      {/* Section scores + accuracy trend moved to /analytics. A single
          slim row points there instead of duplicating both cards here. */}
      <Link
        href="/analytics"
        className="group flex items-center justify-between gap-4 px-5 py-4 rounded-2xl border border-white/[0.06] transition-all duration-300 hover:border-white/[0.12]"
        style={{ backgroundColor: "#0D0D0D" }}
      >
        <p className="text-[13px] text-[#C0C0C0] leading-[1.5]">
          Section scores and your accuracy trend now live in Analytics
        </p>
        <span
          className="inline-flex items-center gap-1.5 text-[12px] font-semibold tracking-tight flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
          style={{ color: "#C9A84C" }}
        >
          View analytics
          <ArrowRight className="w-3.5 h-3.5" aria-hidden />
        </span>
      </Link>

      {/* Up next — consolidates Resume reading, Daily Review, Flagged,
          and Recent Mistakes into one tight list of compact link rows.
          Replaces the four separate lower cards + the resume cards. */}
      <section
        className="rounded-2xl border bg-[#0F0F0F] overflow-hidden"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="flex items-center gap-3 px-5 pt-4 pb-2">
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
          <span className="text-[11px]" style={{ color: "#555555" }}>
            Pick up where you left off
          </span>
        </div>
        <div className="divide-y divide-white/[0.04]">
          {/* Official exam due — highest priority, time-sensitive. Only shows
              within a week of a scheduled official practice exam (or when
              overdue). */}
          {examReminder &&
            (() => {
              const due = parseIsoDate(examReminder.dueDate)
              const dueLabel = due
                ? due.toLocaleDateString("en-US", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                    timeZone: "UTC",
                  })
                : examReminder.dueDate
              const detail = examReminder.overdue
                ? `Was due ${dueLabel} — take it under exam conditions`
                : examReminder.daysUntil === 0
                  ? `Due today (${dueLabel}) — full exam conditions`
                  : `Due ${dueLabel} · ${examReminder.daysUntil} day${
                      examReminder.daysUntil === 1 ? "" : "s"
                    } · ${examReminder.enteredCount}/${examReminder.totalSlots} done`
              return (
                <Link
                  href="/mock"
                  className="group flex items-center gap-3 px-5 py-3 min-h-[44px] transition-colors hover:bg-white/[0.02]"
                >
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: examReminder.overdue
                        ? "rgba(255,68,68,0.12)"
                        : "rgba(201,168,76,0.1)",
                    }}
                  >
                    <FlaskConical
                      className="w-3.5 h-3.5"
                      style={{ color: examReminder.overdue ? "#FF6B6B" : "#C9A84C" }}
                    />
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-semibold text-[#F0F0F0] truncate">
                      {examReminder.overdue
                        ? "Official practice exam overdue"
                        : "Next official practice exam"}
                    </p>
                    <p className="text-[12px] text-[#888888] truncate">{detail}</p>
                  </div>
                  <ChevronRight
                    className="w-4 h-4 flex-shrink-0 text-[#555555] transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </Link>
              )
            })()}
          {/* Resume reading / Chapter complete */}
          {resumeTarget && !resumeTarget.isComplete && (
            <Link
              href={resumeTarget.href}
              className="group flex items-center gap-3 px-5 py-3 min-h-[44px] transition-colors hover:bg-white/[0.02]"
            >
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "rgba(201,168,76,0.1)" }}
              >
                <RotateCcw className="w-3.5 h-3.5" style={{ color: "#C9A84C" }} />
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-semibold text-[#F0F0F0] truncate">
                  Resume {resumeTarget.title}
                </p>
                <p className="text-[12px] text-[#888888] truncate">
                  {resumeTarget.nextSectionTitle
                    ? `Up next: ${resumeTarget.nextSectionTitle}`
                    : `${resumeTarget.section} · ${resumeTarget.pct}% read`}
                </p>
              </div>
              <ChevronRight
                className="w-4 h-4 flex-shrink-0 text-[#555555] transition-transform group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>
          )}
          {resumeTarget && resumeTarget.isComplete && (
            <Link
              href={
                resumeTarget.nextChapter
                  ? `/chapters/${resumeTarget.nextChapter.slug}`
                  : "/chapters"
              }
              className="group flex items-center gap-3 px-5 py-3 min-h-[44px] transition-colors hover:bg-white/[0.02]"
            >
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "rgba(62,207,142,0.12)" }}
              >
                <CheckCircle className="w-3.5 h-3.5" style={{ color: "#3ECF8E" }} />
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-semibold text-[#F0F0F0] truncate">
                  Chapter complete — {resumeTarget.title}
                </p>
                <p className="text-[12px] text-[#888888] truncate">
                  {resumeTarget.nextChapter
                    ? `Next: ${resumeTarget.nextChapter.title}`
                    : "Browse all chapters"}
                </p>
              </div>
              <ChevronRight
                className="w-4 h-4 flex-shrink-0 text-[#555555] transition-transform group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>
          )}

          {/* Review due */}
          {reviewDueCount > 0 && (
            <Link
              href="/review"
              className="group flex items-center gap-3 px-5 py-3 min-h-[44px] transition-colors hover:bg-white/[0.02]"
            >
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "rgba(201,168,76,0.1)" }}
              >
                <RotateCcw className="w-3.5 h-3.5" style={{ color: "#C9A84C" }} />
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-semibold text-[#F0F0F0] truncate">
                  {reviewDueCount} due for review
                </p>
                <p className="text-[12px] text-[#888888] truncate">
                  {reviewTopTopic
                    ? `Weakest: ${reviewTopTopic}`
                    : "Spaced-retrieval queue"}
                </p>
              </div>
              <ChevronRight
                className="w-4 h-4 flex-shrink-0 text-[#555555] transition-transform group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>
          )}

          {/* Flagged on last mock */}
          {lastMockFlagCount > 0 && (
            <Link
              href="/mock/report"
              className="group flex items-center gap-3 px-5 py-3 min-h-[44px] transition-colors hover:bg-white/[0.02]"
            >
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "rgba(201,168,76,0.1)" }}
              >
                <Flag className="w-3.5 h-3.5" style={{ color: "#C9A84C" }} />
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-semibold text-[#F0F0F0] truncate">
                  {lastMockFlagCount} flagged on your last mock
                </p>
                <p className="text-[12px] text-[#888888] truncate">
                  {lastMockDate ? `Mock ${lastMockDate} — revisit` : "Revisit in the report"}
                </p>
              </div>
              <ChevronRight
                className="w-4 h-4 flex-shrink-0 text-[#555555] transition-transform group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>
          )}

          {/* Recent mistakes — up to 3 rows */}
          {recentMistakes.length === 0 ? (
            <div className="flex items-center gap-3 px-5 py-3 min-h-[44px]">
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
              >
                <AlertCircle className="w-3.5 h-3.5" style={{ color: "#555555" }} />
              </span>
              <p className="text-[13px] text-[#888888]">No mistakes logged yet</p>
            </div>
          ) : (
            recentMistakes.map((m) => (
              <Link
                key={m.id}
                href="/error-log"
                className="group flex items-center gap-3 px-5 py-3 min-h-[44px] transition-colors hover:bg-white/[0.02]"
              >
                <span
                  className="px-1.5 py-0.5 rounded text-[10px] uppercase tracking-[0.14em] font-semibold flex-shrink-0"
                  style={{ backgroundColor: "rgba(255,68,68,0.1)", color: "#FF4444" }}
                >
                  {m.section}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-semibold text-[#F0F0F0] truncate">
                    {m.topic}
                  </p>
                  <p className="text-[12px] text-[#888888] truncate">
                    {m.preview || "Question source not found"}
                  </p>
                </div>
                <ChevronRight
                  className="w-4 h-4 flex-shrink-0 text-[#555555] transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>
            ))
          )}
        </div>
        {/* Footer — open error log, with an untagged hint when relevant */}
        <Link
          href="/error-log"
          className="group flex items-center justify-between gap-3 px-5 py-3 border-t border-white/[0.04] transition-colors hover:bg-white/[0.02]"
        >
          <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] font-semibold text-[#888888] group-hover:text-[#C9A84C] transition-colors">
            Open error log
            <ArrowRight className="w-3.5 h-3.5" aria-hidden />
          </span>
          {untaggedMistakeCount > 0 && (
            <span
              className="text-[10px] uppercase tracking-[0.18em] font-semibold px-2 py-0.5 rounded-full"
              style={{ backgroundColor: "rgba(255,68,68,0.1)", color: "#FF4444" }}
            >
              {untaggedMistakeCount} untagged
            </span>
          )}
        </Link>
      </section>

      {/* Achievements — collapsed from the 10-badge grid to a one-line chip */}
      <div
        className="flex items-center justify-between gap-3 px-5 py-3 rounded-2xl border border-white/[0.06]"
        style={{ backgroundColor: "#0D0D0D" }}
      >
        <span className="inline-flex items-center gap-2.5 min-w-0">
          <Award className="w-4 h-4 flex-shrink-0" style={{ color: "#C9A84C" }} aria-hidden />
          <span className="text-[12px] font-semibold tabular-nums" style={{ color: "#F0F0F0" }}>
            {unlockedBadges.length}/{badges.length} badges
          </span>
          {latestBadgeLabel && (
            <span className="text-[12px] truncate" style={{ color: "#888888" }}>
              · {latestBadgeLabel}
            </span>
          )}
        </span>
        <span className="text-[10px] uppercase tracking-[0.22em] font-semibold flex-shrink-0" style={{ color: "#555555" }}>
          Achievements
        </span>
      </div>
    </div>
  )
}
