import {
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Award,
  ChevronRight,
  Flag,
  FlaskConical,
  RotateCcw,
} from "lucide-react"
import Link from "next/link"
import { redirect, unstable_rethrow } from "next/navigation"
import QuickActions from "@/components/dashboard/QuickActions"
import InviteFriend from "@/components/dashboard/InviteFriend"
import StudyHoursChart from "./StudyHoursChart"
import FirstRunGuide from "./FirstRunGuide"
import ConsultOffer from "./ConsultOffer"
import { getAllChapters, getAllQuestions } from "@/lib/content"
import { createSupabaseServer, getRequestUser } from "@/lib/supabase/server"
import { getReviewQueue, type ReviewCandidate } from "@/lib/review-queue"
import { gatherFlaggedQuestionIds } from "@/lib/mock"
import { TRIAL_DAYS, trialDaysLeft, trialStartFor } from "@/lib/entitlements"
import {
  officialExamReminder,
  getFinalWeekReview,
  parseIsoDate,
  parseOfficialExamEntries,
  deriveExamUsage,
  type OfficialExamReminder,
} from "@/lib/official-exams"
import {
  computeStudyPlan,
  type FocusAction,
  type StudyPlanOutput,
} from "@/lib/study-plan-engine"
import {
  computeBadges,
  computeStreaks,
  type Badge,
} from "@/lib/gamification"
import type { Section } from "@/types"
import { getUserState, type UserState } from "@/lib/user-state"
import { readSavedForReview } from "@/lib/spaced-review"
import { isChapterRead } from "@/lib/chapter-progress-merge"
import { deriveFirst48Steps, first48Complete } from "./first48"
import { daysUntil, isReplaySession, localDayIso } from "@/lib/utils"
import { getUserTz } from "@/lib/tz"
import { deriveDailyStudyStatus } from "@/lib/daily-study-loop"
import DailyStudyLoop from "@/components/dashboard/DailyStudyLoop"
import ProgressSummary from "./ProgressSummary"
import { reportDataFailure } from "@/lib/server-data-observability"
import { findActivePurchase } from "@/lib/plan-access"

const PLAN_LABELS: Record<string, string> = {
  self_study: "Self-Study",
  self_study_guaranteed: "Mentorship",
  coaching: "Coaching",
  intensive: "Intensive",
}

function planLabel(id: string): string {
  return PLAN_LABELS[id] ?? id
}

function timeOfDayGreeting(tz?: string | null): string {
  // The USER's clock, not the server's — a UTC server told evening
  // students "Good afternoon".
  let hour = new Date().getHours()
  if (tz) {
    try {
      hour = Number(
        new Intl.DateTimeFormat("en-US", {
          timeZone: tz,
          hour: "numeric",
          hour12: false,
        }).format(new Date())
      )
    } catch {
      // Invalid tz — server hour stands.
    }
  }
  if (hour < 12) return "Good morning"
  if (hour < 18) return "Good afternoon"
  return "Good evening"
}

export default async function DashboardPage() {
  // Forced first-run: a new account (onboarding neither completed nor skipped)
  // is sent into the guided onboarding instead of the busy dashboard (beta
  // feedback: new users didn't know where to start). Kept OUTSIDE the try below
  // so redirect()'s control-flow throw propagates instead of being swallowed by
  // the catch.
  {
    let needsOnboarding = false
    try {
      const guardUser = await getRequestUser()
      const ob = guardUser?.user_metadata?.onboarding as
        | { completedAt?: unknown; skippedAt?: unknown }
        | undefined
      needsOnboarding =
        !!guardUser &&
        typeof ob?.completedAt !== "string" &&
        typeof ob?.skippedAt !== "string"
    } catch {
      // Auth/network hiccup — fail open and render the dashboard.
    }
    // redirect() outside the try so its control-flow throw isn't swallowed.
    if (needsOnboarding) redirect("/onboarding")
  }

  // User timezone (cookie) — resolved before the data block because the
  // review-queue options and every day-boundary computation below use it.
  const tz = await getUserTz()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let user: any = null
  // Per-user state relocated out of user_metadata (chapter_progress,
  // official_exam_scores, mock_flags, …) — read once from the user_state
  // table via getUserState and shared across both query blocks below. Stays
  // null until we have a `user`, mirroring how `user` itself is guarded.
  let state: UserState = {}

  // "Resume" card target — the chapter the student most recently touched
  // (highest lastSeenAt across all chapter_progress entries) plus the
  // anchor to the first unread section so a click drops them right where
  // they left off. Null when no chapter has been touched yet.
  let resumeTarget: {
    slug: string
    title: string
    section: "Quant" | "Verbal" | "DI" | "General"
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

  // Shared across the two data blocks below. The review queue is fetched once
  // and reused by both the study-plan engine and the dashboard's review widget
  // (previously two identical 12-week scans). The study-plan compute is kicked
  // off without awaiting so it overlaps with the metrics batch instead of
  // blocking it — the result is awaited once the batch is in flight.
  let reviewQueue: ReviewCandidate[] = []
  let studyPlanPromise: Promise<StudyPlanOutput | null> | null = null

  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    if (supabaseUrl && supabaseKey && supabaseUrl !== "your_supabase_url") {
      const supabase = await createSupabaseServer()
      user = await getRequestUser()

      if (user) {
        state = await getUserState(supabase, user)
        try {
          const flaggedQuestionIds = gatherFlaggedQuestionIds(state)
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
            // Canonical derivation — the raw-array length disagreed with
            // the parser (malformed entries counted), so this surface and
            // study-plan could disagree about whether a baseline exists.
            const officialCount = parseOfficialExamEntries(state).length
            // Single review-queue fetch, shared with the metrics batch's
            // review widget below (this was a duplicate 12-week
            // practice_attempts scan). Passing it into the engine stops it
            // from refetching the same rows.
            // Same options as /review — without savedQuestionIds and the
            // exam-window cap this surface counted a DIFFERENT queue than
            // the page it links to.
            reviewQueue =
              (await getReviewQueue(supabase, user.id, {
                limit: 60,
                flaggedQuestionIds,
                savedQuestionIds: readSavedForReview(state),
                daysUntilExam: daysUntil(examDate, tz),
              })) ?? []
            // Start the study-plan compute but don't block on it here — it
            // runs concurrently with the metrics batch and is awaited there.
            // The hero's topFocus is derived once the result lands. Non-fatal:
            // on failure the promise resolves null and the hero stays hidden.
            studyPlanPromise = computeStudyPlan(supabase, user.id, {
              targetScore,
              examDate,
              flaggedQuestionIds,
              officialExamCount: officialCount,
              tz,
              reviewQueue,
            }).catch(() => null)
          } catch {
            // Study-plan inputs failed — leave nulls so the hero stays hidden.
          }
        } catch {
          // Study-plan inputs failed to resolve — leave the hero hidden.
        }

        // Resume target — find the most recently touched chapter from
        // the user_state chapter_progress map and surface a "continue where
        // you left off" card. Independent from NBA: NBA suggests new
        // weak spots; Resume continues an in-progress reading.
        try {
          const rawProgress = state.chapter_progress as
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
                // Readings-only, the shared completion rule (isChapterRead)
                // — this card used to require pretest+summary clicks and
                // could show an in-progress % for a chapter every other
                // surface already called complete.
                const readingSections = chapter.sections.filter(
                  (s) => s.type === "reading"
                )
                const total = readingSections.length
                const read = readingSections.filter(
                  (s) => entry.sectionsRead?.[s.id]
                ).length
                // Scroll anchor still walks ALL sections so it can't jump
                // past an untouched pretest (matches /chapters).
                const firstUnread = chapter.sections.find(
                  (s) => !entry.sectionsRead?.[s.id]
                )
                const pct = total > 0 ? Math.round((read / total) * 100) : 0
                const isComplete = total > 0 && read === total
                let nextChapter: { slug: string; title: string; section: "Quant" | "Verbal" | "DI" } | null = null
                if (isComplete) {
                  // "Next chapter" follows the guided-path sequence —
                  // getAllChapters() is already in CHAPTER_PATH_ORDER. The
                  // welcome chapter (General) stays in the index so finishing
                  // it suggests the next real stop; the guard below only
                  // surfaces Q/V/DI successors.
                  const idx = allChapters.findIndex((c) => c.slug === chapter.slug)
                  const nc = idx !== -1 ? (allChapters[idx + 1] ?? null) : null
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
    ...(tz ? { timeZone: tz } : {}),
  })

  const greeting = timeOfDayGreeting(tz)

  // ---------- Query progress data from Supabase ----------
  let questionsThisWeek = 0
  let questionsToday = 0
  let weekAccuracy: number | null = null
  let accuracyQuestionCount = 0
  let totalSessionCount: number | null = null
  let recentMistakes: {
    id: string
    section: Section
    topic: string
    preview: string
  }[] = []
  let lessonsCompletedCount = 0
  let currentPlan: string | null = null
  let hasPurchaseHistory = false
  let currentStreak = 0
  let longestStreak = 0
  /** Every session's timestamp + duration — the study-hours chart buckets
   *  these into local-time days client-side and supports week-back nav. */
  const studySessions: Array<{ t: string; ms: number }> = []
  let badges: Badge[] = []
  let reviewDueCount = 0
  // First-48-hours guide (skippable forever; collapses when complete).
  let guideDismissed = true
  let guideExplainerOpened = false
  /** Distinct local days with any activity — day-2 signal for the guide. */
  let studyDayCount = 0
  /** Review loop used: any review-* session or a reviewed error-log entry. */
  let guideReviewUsed = false
  // Consultation-offer strip — shown to every logged-in user until dismissed.
  let consultDismissed = false
  let guideChapterStarted = false
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
  /** True when the metrics batch failed — render an honest error instead
   *  of the pre-data onboarding view (which reads as lost history). */
  let metricsLoadFailed = false
  let metricsFailureReported = false

  try {
    if (user) {
      const supabase = await createSupabaseServer()
      const userId = user.id

      // Time windows for the per-user reads below (computed once).
      // (Rolling 7-day windows are timezone-independent; the "today"
      // count is derived below from allSessions using the USER's day
      // boundary — a dedicated server-midnight query was UTC-midnight
      // in production and counted the wrong sessions.)
      const weekAgo = new Date(Date.now() - 7 * 86400000).toISOString()

      // Fire every independent per-user read in ONE parallel batch instead of
      // ~13 sequential round-trips. Each query depends only on userId/time —
      // never on another query's result — so running them concurrently is
      // behaviour-preserving and just collapses the latency.
      const [
        weekSessionsRes,
        totalSessionRes,
        completedCountRes,
        recentWrongRes,
        latestPurchaseRes,
        allSessionsRes,
        allCompletionsRes,
        customProbeRes,
        allTagCountRes,
        reviewedTagCountRes,
        totalWrongRes,
      ] = await Promise.all([
        supabase
          .from("practice_sessions")
          .select("slug, topic, total_questions, correct_count, total_time_ms, accuracy")
          .eq("user_id", userId)
          .gte("created_at", weekAgo),
        supabase
          .from("practice_sessions")
          .select("id", { count: "exact", head: true })
          .eq("user_id", userId),
        supabase
          .from("lesson_completions")
          .select("user_id", { count: "exact", head: true })
          .eq("user_id", userId),
        supabase
          .from("practice_attempts")
          .select("id, question_id, section, topic")
          .eq("user_id", userId)
          .eq("is_correct", false)
          // created_at, not session_id: session ids are random UUIDs, so
          // "recent" was an arbitrary frozen slice of the mistake history.
          .order("created_at", { ascending: false })
          .limit(3),
        supabase
          .from("purchases")
          .select("plan_id, paid_at, revoked_at")
          .eq("user_id", userId)
          .order("paid_at", { ascending: false })
          .limit(20),
        supabase
          .from("practice_sessions")
          .select("created_at, total_questions, total_time_ms, slug")
          .eq("user_id", userId)
          // ponytail: 5000 newest sessions ≈ years of daily use. Without
          // order+limit, PostgREST's ~1000-row cap silently returned an
          // ARBITRARY slice for power users — feeding streaks, badges,
          // and the hours chart. All-time badges saturate long before
          // this ceiling; revisit only if someone truly exceeds it.
          .order("created_at", { ascending: false })
          .limit(5000),
        supabase
          .from("lesson_completions")
          .select("completed_at")
          .eq("user_id", userId)
          .order("completed_at", { ascending: false })
          .limit(5000),
        supabase
          .from("practice_sessions")
          .select("id")
          .eq("user_id", userId)
          .eq("slug", "custom")
          .limit(1)
          .maybeSingle(),
        // Head-counts instead of full-row transfer — the page only needs
        // the two numbers. `error_tags` is keyed by `attempt_id`; it has no
        // generic `id` column, so selecting `id` makes the entire parallel
        // metrics batch fail even though the count itself needs no row data.
        supabase
          .from("error_tags")
          .select("attempt_id", { count: "exact", head: true })
          .eq("user_id", userId),
        supabase
          .from("error_tags")
          .select("attempt_id", { count: "exact", head: true })
          .eq("user_id", userId)
          .eq("reviewed", true),
        supabase
          .from("practice_attempts")
          .select("id", { count: "exact", head: true })
          .eq("user_id", userId)
          .eq("is_correct", false),
      ])

      const metricQueries = [
        { operation: "week_sessions", table: "practice_sessions", result: weekSessionsRes },
        { operation: "total_session_count", table: "practice_sessions", result: totalSessionRes },
        { operation: "lesson_completion_count", table: "lesson_completions", result: completedCountRes },
        { operation: "recent_mistakes", table: "practice_attempts", result: recentWrongRes },
        { operation: "current_plan", table: "purchases", result: latestPurchaseRes },
        { operation: "all_sessions", table: "practice_sessions", result: allSessionsRes },
        { operation: "lesson_activity", table: "lesson_completions", result: allCompletionsRes },
        { operation: "custom_test_probe", table: "practice_sessions", result: customProbeRes },
        { operation: "tagged_mistake_count", table: "error_tags", result: allTagCountRes },
        { operation: "reviewed_mistake_count", table: "error_tags", result: reviewedTagCountRes },
        { operation: "wrong_attempt_count", table: "practice_attempts", result: totalWrongRes },
      ] as const
      const failedMetric = metricQueries.find(({ result }) => result.error)
      if (failedMetric?.result.error) {
        metricsFailureReported = true
        reportDataFailure(failedMetric.result.error, {
          surface: "dashboard",
          operation: failedMetric.operation,
          table: failedMetric.table,
        })
        throw failedMetric.result.error
      }

      // Today's Mission — the study plan has been computing in parallel with
      // the metrics batch above; await it now (usually already resolved) and
      // derive the hero card's top focus + estimated minutes.
      const plan = studyPlanPromise ? await studyPlanPromise : null
      if (plan && plan.todaysFocus.length > 0) {
        topFocus = plan.todaysFocus[0]
        if (
          topFocus.type === "weak-topic-chapter" &&
          topFocus.href.startsWith("/chapters/")
        ) {
          const slug =
            topFocus.href.split("/chapters/")[1]?.split(/[#?]/)[0] ?? ""
          const chapter = getAllChapters().find((c) => c.slug === slug)
          if (chapter?.estimatedMinutes) {
            topFocusMinutes = chapter.estimatedMinutes
          }
        } else if (topFocus.type === "practice") {
          topFocusMinutes = 15
        } else if (topFocus.type === "review") {
          // ~2 min per due item, clamped so the card doesn't promise a
          // 90-minute review session.
          topFocusMinutes = Math.max(5, Math.min(plan.reviewDueCount * 2, 30))
        } else if (topFocus.type === "mock") {
          topFocusMinutes = 135
        } else if (topFocus.type === "baseline") {
          topFocusMinutes = 135
        }
      }

      const { data: weekSessions } = weekSessionsRes

      questionsThisWeek =
        weekSessions?.reduce((s, r) => s + r.total_questions, 0) ?? 0

      // questionsToday is derived from allSessions below, using the
      // USER's day boundary (tz cookie) instead of server midnight.

      // Question-weighted, and replay sessions excluded: an unweighted mean
      // of session accuracies let a 2-question review at 50% count the same
      // as a 45-question set at 80% — and review/redo/mixed-review sessions
      // replay previously-missed questions, so they dragged the number down
      // right after the student did the right thing (reviewing).
      const scoredWeek = (weekSessions ?? []).filter(
        (r) => !isReplaySession(r.slug as string, (r as { topic?: string }).topic)
      )
      const weekQTotal = scoredWeek.reduce((s, r) => s + r.total_questions, 0)
      accuracyQuestionCount = weekQTotal
      const weekQCorrect = scoredWeek.reduce(
        (s, r) => s + ((r.correct_count as number) ?? 0),
        0
      )
      weekAccuracy =
        weekQTotal > 0 ? Math.round((weekQCorrect / weekQTotal) * 100) : null

      // Total sessions ever
      const { count } = totalSessionRes
      totalSessionCount = count

      // Lessons completed count
      const { count: completedCount } = completedCountRes
      lessonsCompletedCount = completedCount ?? 0

      // Recent mistakes — 3 most recent wrong attempts, enriched with prompt.
      const { data: recentWrong } = recentWrongRes

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

      // Newest unexpired purchase → current plan chip. Expired/refunded rows
      // remain billing history but must not present as current access.
      const { data: purchaseRows } = latestPurchaseRes
      hasPurchaseHistory = (purchaseRows?.length ?? 0) > 0
      currentPlan = findActivePurchase(
        (purchaseRows ?? []) as Array<{
          plan_id: string
          paid_at: string
          revoked_at: string | null
        }>,
      )?.plan_id ?? null

      // ---------- Streaks + badges ----------
      // Every date the user had ANY activity — practice sessions or lesson
      // completions. Two small queries plus a Set dedupe beats one big
      // union query and keeps the streak logic in plain JS.
      const { data: allSessions } = allSessionsRes
      const { data: allCompletions } = allCompletionsRes

      const todayKey = localDayIso(new Date(), tz)
      const activeDays = new Set<string>()
      let totalQuestions = 0
      let largestSessionQuestions = 0
      let hasReviewSession = false
      for (const s of allSessions ?? []) {
        // The USER's local day (tz cookie), not the server's — on UTC
        // production servers a late-evening Oslo session used to land on
        // the next day's streak dot while the client-rendered hours
        // chart showed it on the right day.
        const iso = localDayIso(new Date(s.created_at as string), tz)
        activeDays.add(iso)
        if (iso === todayKey) {
          questionsToday += (s.total_questions as number) ?? 0
        }
        if (String((s as { slug?: unknown }).slug ?? "").startsWith("review-")) {
          hasReviewSession = true
        }
        const qCount = (s.total_questions as number) ?? 0
        totalQuestions += qCount
        if (qCount > largestSessionQuestions) largestSessionQuestions = qCount
        const ms = (s.total_time_ms as number) ?? 0
        if (ms > 0) studySessions.push({ t: s.created_at as string, ms })
      }
      for (const c of allCompletions ?? []) {
        activeDays.add(localDayIso(new Date(c.completed_at as string), tz))
      }
      // ponytail: chapter reading days are only partially recoverable —
      // each chapter stores just firstSeenAt/lastSeenAt, so this keeps
      // TODAY's chapter work counting toward the streak but cannot
      // reconstruct intermediate reading days. Real fix = per-day keys
      // in the chapter-progress route (deferred).
      const chapterDayEntries = (state.chapter_progress ?? null) as
        | Record<string, { firstSeenAt?: number; lastSeenAt?: number }>
        | null
      for (const entry of Object.values(chapterDayEntries ?? {})) {
        if (typeof entry?.firstSeenAt === "number") {
          activeDays.add(localDayIso(new Date(entry.firstSeenAt), tz))
        }
        if (typeof entry?.lastSeenAt === "number") {
          activeDays.add(localDayIso(new Date(entry.lastSeenAt), tz))
        }
      }

      const streak = computeStreaks(activeDays, tz)
      currentStreak = streak.current
      longestStreak = streak.longest
      studyDayCount = activeDays.size

      // Did the user ever build a custom test? Single-row probe.
      const { data: customProbe } = customProbeRes
      const hasCustomTest = !!customProbe

      // Reviewed vs tagged mistakes — badge progress (head-counts).
      const taggedMistakeCount = allTagCountRes.count ?? 0
      const reviewedMistakeCount = reviewedTagCountRes.count ?? 0
      guideReviewUsed = hasReviewSession || reviewedMistakeCount > 0

      // Mistakes still to clear = total wrong attempts − reviewed ones.
      // Matches the study-plan's "pending" definition (the two disagreed:
      // this chip used to subtract ALL tag rows, but the error-log page
      // auto-classifies every miss on render, so "untagged" collapsed to ~0
      // after one visit while the real review backlog stayed untouched).
      const { count: totalWrongCount } = totalWrongRes
      untaggedMistakeCount = Math.max(
        0,
        (totalWrongCount ?? 0) - reviewedMistakeCount
      )

      const rawTargetBadge = user.user_metadata?.target_score
      const hasTarget =
        typeof rawTargetBadge === "number" && rawTargetBadge >= 205

      // Reading badges must count CHAPTER reads too — lesson_completions is
      // the deprecated /lessons library's table, so a student on the
      // canonical /chapters path kept those badges locked at 0 forever.
      const badgeChapterProgress = (state.chapter_progress ?? null) as
        | Record<string, { sectionsRead?: Record<string, boolean> }>
        | null
      const chaptersReadForBadges = getAllChapters().filter((ch) =>
        isChapterRead(ch.sections, badgeChapterProgress?.[ch.slug]?.sectionsRead)
      ).length

      badges = computeBadges({
        totalSessions: totalSessionCount ?? 0,
        totalQuestions,
        lessonsCompleted: lessonsCompletedCount + chaptersReadForBadges,
        // "Curriculum Complete" means the whole course, not the legacy
        // 8-lesson library it was originally sized for.
        curriculumSize: getAllChapters().length,
        longestStreak,
        currentStreak,
        taggedMistakeCount,
        reviewedMistakeCount,
        hasCustomTest,
        hasTarget,
        largestSessionQuestions,
      })

      // Daily review queue — surface the count + top weak topic on the
      // dashboard so retrieval practice becomes a visible daily prompt. Reuses
      // the single fetch from the study-plan block above.
      const queue = reviewQueue
      reviewDueCount = queue.length
      if (queue.length > 0) {
        const counts = new Map<string, number>()
        for (const c of queue) counts.set(c.topic, (counts.get(c.topic) ?? 0) + 1)
        const [topTopic] = [...counts.entries()].sort((a, b) => b[1] - a[1])
        reviewTopTopic = topTopic?.[0] ?? null
      }

      // Official baseline — how many mba.com practice-exam sittings the
      // student has logged (canonical parser, so this can't drift from the
      // /mock plan). Drives the "set your baseline" CTA until the first
      // official score exists.
      const officialEntriesParsed = parseOfficialExamEntries(state)
      const officialUsage = deriveExamUsage(officialEntriesParsed)
      officialExamCount = officialEntriesParsed.length

      // First-48-hours guide state — permanently skippable
      // (guide_dismissed_at scalar); explainer-opened is its own scalar.
      guideDismissed =
        typeof user.user_metadata?.guide_dismissed_at === "string"
      guideExplainerOpened =
        typeof user.user_metadata?.guide_explainer_opened_at === "string"
      consultDismissed =
        typeof user.user_metadata?.consult_offer_dismissed_at === "string"
      const rawChapterProgress = state.chapter_progress as
        | Record<string, unknown>
        | null
        | undefined
      guideChapterStarted =
        !!rawChapterProgress && Object.keys(rawChapterProgress).length > 0

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
      // exam date + how many sittings have been logged. Suppressed while
      // untagged legacy entries exist: /mock's roadmap asks the student to
      // tag those first, and "take your next official" would contradict it.
      examReminder =
        officialUsage.unclassifiedCount > 0 || getFinalWeekReview(typeof metaExamDate === "string" ? metaExamDate : null, localDayIso(new Date(), tz))
          ? null
          : officialExamReminder(
              typeof metaExamDate === "string" ? metaExamDate : null,
              localDayIso(new Date(), tz),
              officialExamCount,
            )

      // Last-mock flag nudge — take the most recent date with any
      // flags across its three sections. The flags live in the
      // user_state mock_flags map (already loaded above), so no extra
      // DB round-trip needed.
      const mockFlagsTree =
        (state.mock_flags as
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
  } catch (error) {
    unstable_rethrow(error)
    // Supabase query failed. Flag it: rendering the pre-data onboarding
    // view here told a veteran student their history was gone.
    if (!metricsFailureReported) {
      reportDataFailure(error, {
        surface: "dashboard",
        operation: "metrics_batch",
      })
    }
    metricsLoadFailed = true
  }

  const hasData = (totalSessionCount ?? 0) > 0

  // Honest failure state — keep the shell, say what happened, offer the
  // retry. Rendering the baseline/onboarding branch on a transient DB
  // error reads as total data loss.
  if (user && metricsLoadFailed && !hasData) {
    return (
      <div className="max-w-2xl mx-auto mt-16 p-8 rounded-2xl border border-white/[0.06] bg-[#0F0F0F] text-center">
        <p
          className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-4"
          style={{ color: "#C9A84C" }}
        >
          Dashboard
        </p>
        <h1 className="font-display text-2xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.15] mb-3">
          Couldn&apos;t load your data.
        </h1>
        <p className="text-[14px] text-[#C0C0C0] leading-[1.75]">
          Your history is safe — this is a loading problem, not a data
          problem. Refresh to retry.
        </p>
      </div>
    )
  }

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
  // defaults to 25 when unset. Drives the single Today's Mission surface.
  // Trial status — signup promises a 7-day full-access trial, but nothing in
  // the app ever mentioned it again; a student who took the framing literally
  // hit day 8 with no signal. One honest line: day counter while it runs, and
  // the over-delivery message after (paywall is off, access continues free).
  // A purchase remains part of the account's history after it expires or is
  // revoked. Do not relabel that returning customer as a trial account.
  const trialStart = user && !hasPurchaseHistory ? trialStartFor(user) : null
  const trialLeft = trialStart ? trialDaysLeft(trialStart, new Date()) : null
  const trialLine =
    trialLeft === null
      ? null
      : trialLeft > 0
        ? `Day ${TRIAL_DAYS - trialLeft + 1} of your ${TRIAL_DAYS}-day full-access trial`
        : "Trial period over — access continues free until paid checkout opens"

  const rawDailyGoal = user?.user_metadata?.daily_question_goal
  const dailyQuestionGoal: number =
    typeof rawDailyGoal === "number" && rawDailyGoal > 0 && rawDailyGoal <= 200
      ? rawDailyGoal
      : 25
  const dailyStudy = deriveDailyStudyStatus(questionsToday, dailyQuestionGoal)

  // Course progress — share of chapters the student has read, using the
  // shared reading-sections rule (same as the /chapters cards; the old
  // every-section-including-pretest rule kept this stat at 0% for students
  // who read everything but never clicked the pretest/summary cards).
  const chapterProgressForPct = (state.chapter_progress ?? null) as
    | Record<string, { sectionsRead?: Record<string, boolean> }>
    | null
  const allChaptersForPct = getAllChapters()
  const totalChapters = allChaptersForPct.length
  const completedChapters = allChaptersForPct.filter((ch) =>
    isChapterRead(ch.sections, chapterProgressForPct?.[ch.slug]?.sectionsRead)
  ).length
  const courseCompletionPct =
    totalChapters > 0 ? Math.round((completedChapters / totalChapters) * 100) : 0

  // First-48-hours guide — every step derived server-side from real
  // recorded state (see first48.ts). While it's active it is THE dashboard
  // checklist; the older setup strips below stay hidden to avoid two
  // competing lists.
  const first48Steps = user
    ? deriveFirst48Steps({
        profileSet:
          onboardingIntakeDone || (onboardingTargetSet && onboardingExamDateSet),
        explainerOpened: guideExplainerOpened,
        officialExamCount,
        chapterStarted: guideChapterStarted,
        practiceSessionCount: totalSessionCount ?? 0,
        studyDayCount,
        chaptersRead: completedChapters,
        reviewUsed: guideReviewUsed,
      })
    : null
  const guideActive =
    !!first48Steps && !guideDismissed && !first48Complete(first48Steps)

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
      // /onboarding, not the #score-goal anchor: the anchor (and its
      // editor) only exists on the has-data dashboard branch, so for the
      // zero-data users this checklist serves, the link went nowhere.
      href: "/onboarding",
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

  const finalWeek = getFinalWeekReview(
    typeof user?.user_metadata?.exam_date === "string" ? user.user_metadata.exam_date : null,
    localDayIso(new Date(), tz),
  )
  if (finalWeek) {
    topFocus = { type: "review", title: finalWeek.title, subtitle: finalWeek.reason, href: finalWeek.href, cta: finalWeek.actionLabel, priority: 100 }
    topFocusMinutes = finalWeek.estimatedMinutes
  }

  // Empty accounts still have a useful next action, without fabricated metrics.
  if (!hasData) {
    const baselineSet = officialExamCount > 0
    const firstChapter = getAllChapters()[0]
    const emptyFocus: FocusAction = topFocus ?? (baselineSet ? {
      type: "weak-topic-chapter",
      title: resumeTarget && !resumeTarget.isComplete ? `Continue: ${resumeTarget.title}` : "Start your first chapter",
      subtitle: "Read a section, check your understanding, then try its questions. Your progress appears as you study.",
      href: resumeTarget && !resumeTarget.isComplete ? resumeTarget.href : firstChapter ? `/chapters/${firstChapter.slug}` : "/chapters",
      cta: "Open chapter",
      priority: 0,
    } : {
      type: "baseline",
      title: "Plan your official baseline exam",
      subtitle: "Take an official practice exam on mba.com, then log your section scores in Exams. You can start reading and practicing before taking it.",
      href: "/mock",
      cta: "Open exam plan",
      priority: 0,
    })
    return (
      <div className="max-w-7xl mx-auto space-y-6">
        <section className="dashboard-greeting">
          <h1>{greeting}{firstName ? `, ${firstName}.` : "."}</h1>
          <p className="mt-2">{today}</p>
        </section>
        <DailyStudyLoop status={dailyStudy} focus={emptyFocus} estimatedMinutes={topFocusMinutes} />
        {first48Steps && <FirstRunGuide steps={first48Steps} dismissed={guideDismissed} />}
        <section className="border-b border-white/10 py-5">
          <h2 className="text-lg font-semibold text-[#F4F1E8]">Your preparation</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#B9B7AE]">No practice results yet. Chapters, practice sets, and review are available now. Accuracy and timing will appear after you complete a set.</p>
          <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/chapters" className="inline-flex min-h-11 items-center gap-2 text-sm text-[#C8A85A]">Browse chapters<ArrowRight className="size-4" aria-hidden /></Link>
            <Link href="/practice" className="inline-flex min-h-11 items-center gap-2 text-sm text-[#C8A85A]">Choose a practice set<ArrowRight className="size-4" aria-hidden /></Link>
          </div>
        </section>
        {user && !consultDismissed && <ConsultOffer />}
      </div>
    )
  }

  // Cold-start fallback for Today's Mission (beta feedback: "hard to tell
  // where to start... wish there was even less room for decisions"). When the
  // study-plan engine has no recommendation, the hero used to vanish and the
  // user got a strip of CHOICES (QuickActions) — the opposite of one decisive
  // action. Fall back to continuing the in-progress chapter, and before any
  // chapter has been touched, to starting the guided course at chapter one.
  if (!topFocus) {
    if (resumeTarget && !resumeTarget.isComplete) {
      topFocus = {
        type: "weak-topic-chapter",
        title: `Continue: ${resumeTarget.title}`,
        subtitle: resumeTarget.nextSectionTitle
          ? `Pick up where you left off — up next: ${resumeTarget.nextSectionTitle}.`
          : `Pick up where you left off (${resumeTarget.pct}% read).`,
        href: resumeTarget.href,
        cta: "Continue reading",
        priority: 0,
      }
    } else {
      const firstChapter = getAllChapters()[0]
      if (firstChapter) {
        topFocus = {
          type: "weak-topic-chapter",
          title: "Start the course",
          subtitle:
            "The chapters run in a guided order — begin at the beginning and the platform sequences everything else (practice, review, mocks) as you go.",
          href: `/chapters/${firstChapter.slug}`,
          cta: "Open the first chapter",
          priority: 0,
        }
        topFocusMinutes = firstChapter.estimatedMinutes ?? null
      }
    }
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
      {/* Compact greeting bar. The daily count lives only in Today's Mission;
          repeating it here made the page feel like a metrics dashboard before
          the student even reached the action. */}
      <section
        className="dashboard-greeting"
      >
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
              {trialLine && (
                <>
                  <span className="mx-1.5 text-[#888888]">·</span>
                  <span style={{ color: "#C9A84C" }}>{trialLine}</span>
                </>
              )}
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
          </div>
        </div>
      </section>

      <DailyStudyLoop
        status={dailyStudy}
        focus={topFocus}
        estimatedMinutes={topFocusMinutes}
      />

      {/* First-48-hours guide — what to actually DO first, derived from real
          state. Skippable forever; collapses to one row once complete. */}
      {first48Steps && (
        <FirstRunGuide steps={first48Steps} dismissed={guideDismissed} />
      )}

      {/* Getting Started — disappears once all setup steps are done */}
      {/* Finish-setup strip — compact. Shows only the steps still left (no
          re-listing completed ones) + a thin progress bar. Disappears once
          onboarding is complete. Hidden while the first-48 guide is active
          (its profile step covers setup; no second competing checklist). */}
      {!guideActive && !onboardingComplete && (
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

      {/* Quick Actions — fallback when Today's Mission isn't showing, so
          users without a study-plan recommendation still get a clear
          "what to do next" strip. */}
      {!topFocus && !dailyStudy.complete && <QuickActions />}

      <ProgressSummary
        courseCompletionPct={courseCompletionPct}
        completedChapters={completedChapters}
        totalChapters={allChaptersForPct.length}
        targetScore={targetScore}
        currentStreak={currentStreak}
        longestStreak={longestStreak}
        questionsLastSevenDays={questionsThisWeek}
        accuracyLastSevenDays={weekAccuracy}
        accuracyQuestionCount={accuracyQuestionCount}
      />

      {/* Study time remains available for students who use it, but no longer
          competes with the action and three primary progress signals. */}
      <details className="group rounded-2xl border border-white/[0.06] bg-[#0D0D0D]">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-[12px] font-semibold text-[#C0C0C0] transition-colors hover:text-[#F0F0F0]">
          Study time
          <span className="text-[11px] font-normal text-[#888888] group-open:hidden">
            Show daily breakdown
          </span>
          <span className="hidden text-[11px] font-normal text-[#888888] group-open:inline">
            Hide breakdown
          </span>
        </summary>
        <div className="border-t border-white/[0.05] px-4 py-5 sm:px-5">
          <StudyHoursChart sessions={studySessions} />
        </div>
      </details>

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
          <span className="text-[11px]" style={{ color: "#888888" }}>
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
                    } · ${examReminder.enteredCount}/${examReminder.totalSlots} sittings`
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
                    className="w-4 h-4 flex-shrink-0 text-[#888888] transition-transform group-hover:translate-x-0.5"
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
                className="w-4 h-4 flex-shrink-0 text-[#888888] transition-transform group-hover:translate-x-0.5"
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
                className="w-4 h-4 flex-shrink-0 text-[#888888] transition-transform group-hover:translate-x-0.5"
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
                className="w-4 h-4 flex-shrink-0 text-[#888888] transition-transform group-hover:translate-x-0.5"
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
                className="w-4 h-4 flex-shrink-0 text-[#888888] transition-transform group-hover:translate-x-0.5"
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
                <AlertCircle className="w-3.5 h-3.5" style={{ color: "#888888" }} />
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
                  className="w-4 h-4 flex-shrink-0 text-[#888888] transition-transform group-hover:translate-x-0.5"
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
              {untaggedMistakeCount} to review
            </span>
          )}
        </Link>
      </section>

      {/* Surface the latest milestone without turning achievements into one
          more ratio the student has to track. */}
      {latestBadgeLabel && (
        <div
          className="flex items-center gap-2.5 rounded-2xl border border-white/[0.06] px-5 py-3"
          style={{ backgroundColor: "#0D0D0D" }}
        >
          <Award className="h-4 w-4 flex-shrink-0 text-[#C9A84C]" aria-hidden />
          <span className="text-[12px] text-[#888888]">Latest achievement</span>
          <span className="truncate text-[12px] font-semibold text-[#F0F0F0]">
            {latestBadgeLabel}
          </span>
        </div>
      )}

      {/* Product-led referral nudge — shown to active users (post-value), not
          in the no-data activation state. Fires referral_click on copy. */}
      {user && !consultDismissed && <ConsultOffer />}
      <InviteFriend surface="dashboard" />
    </div>
  )
}
