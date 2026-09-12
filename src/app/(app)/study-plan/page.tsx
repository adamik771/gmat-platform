import Link from "next/link"
import {
  dailyStudyBudgetLabel,
  normalizeWeeklyHoursTarget,
  weeklyHoursAdvice,
} from "@/lib/study-hours"
import { daysUntil, localDayIso } from "@/lib/utils"
import { getUserTz } from "@/lib/tz"
import { isChapterRead } from "@/lib/chapter-progress-merge"
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  CheckCircle,
  Clock,
  FlaskConical,
  RotateCcw,
  Sparkles,
  Target,
  TrendingDown,
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
} from "@/lib/personas"
import { gatherFlaggedQuestionIds } from "@/lib/mock"
import { getUserState } from "@/lib/user-state"
import { buildActivitySummary } from "@/lib/activity-summary"
import { nextSevenPlanDays, recentActivityDays } from "./presentation"

export default async function StudyPlanPage({
  searchParams,
}: {
  searchParams: Promise<{ welcome?: string }>
}) {
  // One-time "you're all set" confirmation when arriving from onboarding
  // (?welcome=1) — the visible "your plan adapted" signal beta testers wanted.
  // Rendered in BOTH the pre-baseline early-return and the full plan below, so
  // a brand-new user (officialExamCount === 0) still sees it.
  const justOnboarded = (await searchParams).welcome === "1"
  const tz = await getUserTz()
  const welcomeBanner = justOnboarded ? (
    <div
      className="flex items-start gap-3 px-5 py-4 rounded-lg border"
      style={{
        borderColor: "rgba(201,168,76,0.28)",
        backgroundColor: "rgba(201,168,76,0.06)",
      }}
    >
      <CheckCircle
        className="w-5 h-5 flex-shrink-0 mt-0.5"
        style={{ color: "#C9A84C" }}
        aria-hidden
      />
      <div>
        <p className="text-[14px] font-semibold text-[#F0F0F0]">
          You&apos;re all set — this is your plan.
        </p>
        <p className="text-[13px] text-[#888888] leading-relaxed mt-0.5">
          It&apos;s built from your answers and gets sharper as you study. Your
          next step is right below.
        </p>
      </div>
    </div>
  ) : null
  // ---------- Data we'll display ----------
  // Default to zero / null so an unauth or Supabase-down render shows empty.
  let examDate: string | null = null
  let targetScore: number | null = null
  let weeklyHoursTarget: number | null = null
  const activityDays = new Set<string>() // YYYY-MM-DD for past 7 days with activity
  let studyHoursWeek = 0
  let studyDays30Count = 0
  let pendingMistakeCount = 0
  let plan: StudyPlanOutput | null = null
  let baselineExamDate: string | null = null
  let officialExamCount = 0
  let masteries: TopicMastery[] = []
  let officialBaseline: number | null = null
  let persona: PersonaProfile | null = null
  let officialReady: OfficialReadySummary | null = null
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
      // The onboarding wizard's hours-per-week answer — shapes the weekly
      // cadence (weak-areas-first when low, a rest day when high).
      const rawHours = (
        user.user_metadata?.onboarding as { weeklyHours?: unknown } | undefined
      )?.weeklyHours
      weeklyHoursTarget = normalizeWeeklyHoursTarget(rawHours)

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
      // wrongIds) and stays sequential below.
      //
      // Official baseline — derived from user_state BEFORE the plan engine
      // runs. This used to happen ~120 lines below, so computeStudyPlan
      // always saw officialExamCount=0 and its priority-100 "Set your
      // baseline" card sat permanently on top of Today's Focus even after
      // the student had entered their exam (friend-reported bug).
      const metaOfficial = state.official_exam_scores
      const officialScores: Array<{
        date?: unknown
        total?: unknown
        attemptNumber?: unknown
      }> = Array.isArray(metaOfficial) ? metaOfficial : []
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
      // Anchor the plan to the latest FIRST ATTEMPT — retake scores draw
      // from a seen pool and can be inflated, so they never set the
      // baseline. Legacy entries (no attemptNumber) are first attempts.
      const firstAttempts = validOfficial.filter(
        (e) =>
          !(typeof e.attemptNumber === "number" && e.attemptNumber >= 2),
      )
      if (firstAttempts.length > 0) {
        const latest = firstAttempts[firstAttempts.length - 1]
        officialBaseline = latest.total as number
        baselineExamDate = latest.date as string
      }

      const activityNow = new Date()
      const thirtyDayStart = new Date(
        Date.UTC(
          activityNow.getUTCFullYear(),
          activityNow.getUTCMonth(),
          activityNow.getUTCDate(),
        ),
      )
      thirtyDayStart.setUTCDate(thirtyDayStart.getUTCDate() - 29)
      const thirtyAgo = thirtyDayStart.toISOString()
      const [
        { data: monthSessions },
        { data: trackedActivity },
        { count: totalWrongCount },
        { count: reviewedTagCount },
        planResult,
        { data: masteryAttempts },
        { data: masterySessions },
      ] = await Promise.all([
        supabase
          .from("practice_sessions")
          .select("created_at, total_time_ms, total_questions")
          .eq("user_id", user.id)
          .gte("created_at", thirtyAgo),
        supabase
          .from("user_activity_daily")
          .select("activity_date, active_seconds, last_seen_at")
          .eq("user_id", user.id)
          .gte("activity_date", thirtyAgo.slice(0, 10)),
        // Head-counts, not row transfer: the old full-id fetch fed a
        // .in() filter whose GET URL blew past the proxy limit at the
        // 1000-id cap — the query silently failed and the pending count
        // inflated for exactly the heavy users it mattered to.
        supabase
          .from("practice_attempts")
          .select("id", { count: "exact", head: true })
          .eq("user_id", user.id)
          .eq("is_correct", false),
        supabase
          .from("error_tags")
          .select("attempt_id", { count: "exact", head: true })
          .eq("user_id", user.id)
          .eq("reviewed", true),
        computeStudyPlan(supabase, user.id, {
          targetScore,
          examDate,
          tz,
          flaggedQuestionIds: gatherFlaggedQuestionIds(state),
          officialExamCount,
        }),
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

      // The full-site heartbeat includes quiet chapter reading and practice.
      // Practice-session time remains the historical fallback; daily max
      // prevents counting the same practice work twice.
      const activity = buildActivitySummary(
        (monthSessions ?? []) as Array<{
          created_at: string
          total_time_ms: number | null
          total_questions: number | null
        }>,
        (trackedActivity ?? []) as Array<{
          activity_date: string
          active_seconds: number | null
        }>,
        activityNow,
      )
      studyHoursWeek = activity.activeSeconds7d / 3_600
      studyDays30Count = activity.activeDays30d

      // Calendar dots use the user's local day. Daily heartbeat totals are
      // stored in UTC, so their last-seen timestamp is the best local-day
      // anchor; the duration total itself remains exact across the window.
      for (const s of monthSessions ?? []) {
        activityDays.add(localDayIso(new Date(s.created_at as string), tz))
      }
      for (const day of trackedActivity ?? []) {
        if (typeof day.last_seen_at === "string") {
          activityDays.add(localDayIso(new Date(day.last_seen_at), tz))
        }
      }

      // Pending-mistake count drives the error-review suggestion in the
      // weekly schedule: wrong attempts minus reviewed ones — the same
      // definition the dashboard chip uses.
      pendingMistakeCount = Math.max(
        0,
        (totalWrongCount ?? 0) - (reviewedTagCount ?? 0)
      )

      // Adaptive plan (Today's focus + weak areas + queue counts) — computed
      // concurrently in the Promise.all above.
      plan = planResult

      // Mastery progress — per-topic gates (Concept / Timed / Mixed) that
      // replace the "completed the lesson = done" heuristic with the
      // research-report criteria. Needs session metadata to classify mixed
      // sessions and attempt timing to compute median pace.
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
  // Shared reading-sections completion rule — the old inline every-section
  // predicate (pretest + summary included) disagreed with /chapters and kept
  // "Chapters read" pinned low for students who read everything but never
  // clicked the pretest/summary cards.
  const isChapterReadHere = (ch: (typeof pathChapters)[number]) =>
    isChapterRead(ch.sections, readProgress[ch.slug]?.sectionsRead)
  // A chapter is "engaged" once any section has been read — anchors the
  // recommendation to where the student actually is.
  const isChapterEngaged = (ch: (typeof pathChapters)[number]) => {
    const sr = readProgress[ch.slug]?.sectionsRead
    return sr ? Object.values(sr).some(Boolean) : false
  }
  const incompleteChapters = pathChapters.filter((ch) => !isChapterReadHere(ch))
  // Recency-aware "Up next": recommend forward from the furthest chapter the
  // student has touched, so a single unread section in chapter 1 no longer pins
  // "Welcome to the GMAT" as next after they've moved on (see pickNextChapters).
  const {
    upcoming: upcomingChapters,
    readingQueue: nextReadingQueue,
  } = pickNextChapters(pathChapters, isChapterReadHere, isChapterEngaged)
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
    nextReadingQueue.map((ch) => ({ slug: ch.slug, title: ch.title })),
    weeklyHoursTarget
  )
  const todayIso = localDayIso(new Date(), tz)
  const weekDays = nextSevenPlanDays(todayIso, weeklyCadence, activityDays)

  // ---------- Derived: exam readiness ----------
  // Shared local-midnight parse — the naive new Date("YYYY-MM-DD") (UTC)
  // version read a day short in positive-offset timezones and disagreed
  // with the engine's own countdown.
  const daysUntilExam = daysUntil(examDate, tz)
  const roundedStudyHours = Math.round(studyHoursWeek * 10) / 10
  const weeklyHoursRemaining =
    weeklyHoursTarget !== null
      ? Math.max(0, Math.round((weeklyHoursTarget - studyHoursWeek) * 10) / 10)
      : null
  const weeklyStudyProgress =
    weeklyHoursTarget !== null && weeklyHoursTarget > 0
      ? Math.min(100, Math.round((studyHoursWeek / weeklyHoursTarget) * 100))
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
      <div className="mx-auto max-w-5xl space-y-6">
        {welcomeBanner}
        <header className="flex flex-wrap items-start justify-between gap-4">
          <div><h1 className="text-3xl font-semibold text-[#F0F0F0]">Study plan</h1><p className="mt-2 text-sm text-[#B9B7AE]">An official baseline anchors the personalized plan.</p></div>
          <Link href="/settings" className="inline-flex min-h-11 items-center gap-2 text-sm text-[#C9A84C]"><CalendarDays className="h-4 w-4" aria-hidden />Update my schedule</Link>
        </header>
        <section className="border-t border-white/10 py-5">
          <h2 className="text-xl font-semibold text-[#F0F0F0]">Record your official baseline</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#B9B7AE]">Take an official mba.com practice exam and enter its result on the exam plan. You can read chapters and practice before recording it.</p>
          <Link href="/mock" className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#C9A84C] px-4 py-2 text-sm font-semibold text-[#0A0A0A]">Open exam plan<ArrowRight className="h-4 w-4" aria-hidden /></Link>
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
  if (plan && plan.weakAreas.length > 0)
    renderedNumberedSections.push("weak-areas")
  if (masteries.length > 0) renderedNumberedSections.push("mastery")
  renderedNumberedSections.push("up-next")
  const sectionNum = (key: string) =>
    String(renderedNumberedSections.indexOf(key) + 1).padStart(2, "0")

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {welcomeBanner}
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0">
          <h1 className="text-3xl font-semibold text-[#F0F0F0]">Study plan</h1>
          <p className="mt-2 text-sm leading-relaxed text-[#B9B7AE]">
            {daysUntilExam !== null && daysUntilExam > 0
              ? daysUntilExam + " days until your exam. Today's task comes first; future tasks are suggestions, not completion records."
              : daysUntilExam === 0
                ? "Your exam is today. Update your schedule if your plans have changed."
                : daysUntilExam !== null
                  ? "Your exam date has passed. Update it to align future suggestions."
                  : "Set an exam date to anchor your plan."}
          </p>
        </div>
        <Link href="/settings" className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-[#C9A84C]"><CalendarDays className="h-4 w-4" aria-hidden />Update my schedule</Link>
      </header>

      {/* One primary action. Lower-ranked recommendations remain available as
          compact optional follow-ups instead of competing task cards. */}
      {plan && plan.todaysFocus.length > 0 && (
        <section id="todays-focus" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-5">
            <span
              className="font-sans text-[11px] font-semibold tabular-nums"
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
          <h2 className="font-sans text-xl font-semibold text-[#F0F0F0] tracking-normal leading-[1.1] mb-5">
            Today&apos;s{" "}
            <span className="font-normal" style={{ color: "#C9A84C" }}>
              focus.
            </span>
          </h2>
          <FocusCard action={plan.todaysFocus[0]} primary />
          {plan.todaysFocus.length > 1 && (
            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#666666]">
                After that, optional
              </span>
              {plan.todaysFocus.slice(1).map((action, i) => (
                <Link
                  key={`${action.type}-${i}`}
                  href={action.href}
                  className="inline-flex items-center gap-1.5 text-[12px] text-[#888888] hover:text-[#C9A84C] transition-colors"
                >
                  {action.title}
                  <ArrowRight className="h-3 w-3" aria-hidden />
                </Link>
              ))}
            </div>
          )}
        </section>
      )}

      <section className="border-t border-white/10 pt-6">
        <h2 className="text-xl font-semibold text-[#F0F0F0]">Next seven days</h2>
        <p className="mt-2 text-sm leading-relaxed text-[#B9B7AE]">
          Suggested tasks, not saved appointments.
          {weeklyHoursTarget !== null && <> Your {weeklyHoursTarget} hr/week target is about {dailyStudyBudgetLabel(weeklyHoursTarget)} per day. {weeklyHoursAdvice(weeklyHoursTarget)}</>}
        </p>
        <ol className="mt-4 divide-y divide-white/10">
          {weekDays.map((day) => {
            const suggestion = day.suggestion
            return <li key={day.key} className="grid gap-2 py-3 sm:grid-cols-[100px_minmax(0,1fr)] sm:gap-4">
              <div><p className="text-sm font-medium text-[#F0F0F0]">{day.isToday ? "Today" : day.weekdayLabel} {day.date.getUTCDate()}</p><p className="text-sm text-[#B9B7AE]">{day.hasActivity ? "Activity recorded" : "Suggested"}</p></div>
              {day.isToday
                ? <a href={plan?.todaysFocus.length ? "#todays-focus" : "/practice"} className="inline-flex min-h-11 items-center gap-2 text-sm text-[#C9A84C]">{plan?.todaysFocus.length ? "Today's focus" : "Choose practice"}<ArrowRight className="h-4 w-4" aria-hidden /></a>
                : <SuggestionCell suggestion={suggestion ?? null} />}
            </li>
          })}
        </ol>
      </section>

      <details className="border-t border-white/10 pt-3">
        <summary className="min-h-11 cursor-pointer py-3 text-sm font-medium text-[#B9B7AE]">Recorded activity · last seven calendar days</summary>
        <p className="pb-3 text-sm text-[#B9B7AE]">{recentActivityDays(todayIso, activityDays)} days with recorded study. Activity does not confirm that a suggested task was completed.</p>
      </details>

      {/* Progress cards use directly observed counts and time only. Practice
          accuracy is not converted into a GMAT total score. */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <StatCard
          icon={BookOpen}
          color="#C9A84C"
          label="Chapters read"
          value={`${chaptersDoneCount} / ${totalChapters}`}
          detail="Reading completion"
        />
        <StatCard
          icon={Clock}
          color="#C9A84C"
          label="Study time · last 7 days"
          value={
            weeklyHoursTarget !== null
              ? `${roundedStudyHours.toFixed(1)} / ${weeklyHoursTarget} hrs`
              : roundedStudyHours >= 0.1
                ? `${roundedStudyHours.toFixed(1)} hrs`
                : "—"
          }
          detail={
            weeklyHoursRemaining === null
              ? "Includes reading and practice"
              : weeklyHoursRemaining === 0
                ? "Weekly target met"
                : `${weeklyHoursRemaining.toFixed(1)} hrs to your rolling target`
          }
          progress={weeklyStudyProgress}
        />
        <StatCard
          icon={Flame}
          color="#C9A84C"
          label="Active days (30d)"
          value={studyDays30Count > 0 ? `${studyDays30Count}` : "—"}
          detail="Days with recorded study"
        />
      </div>

      {/* Official-ready status — surfaces when the user has cleared the
          official-exam readiness bar. */}
      {officialReady && <OfficialReadyCard summary={officialReady} />}

      {persona && <details className="border-t border-white/10 pt-3">
        <summary className="min-h-11 cursor-pointer py-3 text-sm font-medium text-[#B9B7AE]">Plan assumptions</summary>
        <PersonaCard persona={persona} />
      </details>}

      {/* Baseline attribution — only when an official score exists, so the
          plan is visibly rooted in real data. Tiny line; clicks through to
          the exam plan. */}
      {officialExamCount > 0 && baselineExamDate && (
        <Link
          href="/mock"
          className="flex items-center justify-between gap-3 p-4 rounded-lg border border-white/[0.06] bg-[#0D0D0D] hover:border-white/[0.12] transition-all duration-300 hover:shadow-[0_10px_30px_-15px_rgba(201,168,76,0.18)]"
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



      {/* Weak areas — topic-level accuracy deficit driven from real attempts.
          Each row links to the relevant chapter so the student can read
          before re-drilling the topic. */}
      {plan && plan.weakAreas.length > 0 && (
        <section>
          <div className="flex items-center gap-3 mb-5">
            <span
              className="font-sans text-[11px] font-semibold tabular-nums"
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
          <h2 className="font-sans text-xl font-semibold text-[#F0F0F0] tracking-normal leading-[1.1] mb-5">
            Where accuracy{" "}
            <span className="font-normal" style={{ color: "#C9A84C" }}>
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
                  className="font-sans text-[11px] font-semibold tabular-nums"
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
              <h2 className="font-sans text-xl font-semibold text-[#F0F0F0] tracking-normal leading-[1.1] mb-2">
                Where mastery{" "}
                <span
                  className="font-normal"
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
                      className="flex items-center gap-4 p-4 rounded-lg border border-white/[0.06] bg-[#0F0F0F] transition-all duration-300 hover:border-white/[0.12] hover:shadow-[0_10px_30px_-15px_rgba(201,168,76,0.18)]"
                    >
                      <p className="text-[13px] text-[#C0C0C0] w-32 sm:w-44 flex-shrink-0 truncate">
                        <span className="text-[#888888] mr-1.5 text-[11px] uppercase tracking-wider">
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
                          <span className="text-[11px] text-[#888888] truncate hidden md:inline max-w-[12rem]">
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
            className="font-sans text-[11px] font-semibold tabular-nums"
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
        <h2 className="font-sans text-xl font-semibold text-[#F0F0F0] tracking-normal leading-[1.1] mb-5">
          Upcoming{" "}
          <span className="font-normal" style={{ color: "#C9A84C" }}>
            chapters.
          </span>
        </h2>
        <p className="mb-4 text-sm leading-relaxed text-[#B9B7AE]">Reading sequence after your furthest engaged chapter. Today&apos;s focus may recommend different work based on practice history.</p>
        {upcomingChapters.length === 0 ? (
          <div className="p-6 rounded-lg border border-white/[0.08] bg-[#0F0F0F]">
            <div className="flex items-start gap-3">
              <CheckCircle
                className="w-5 h-5 flex-shrink-0 mt-0.5"
                style={{ color: "#3ECF8E" }}
              />
              <div>
                <p className="text-[15px] font-semibold text-[#F0F0F0] tracking-tight">
                  {incompleteChapters.length === 0 ? "All chapters read" : "Earlier chapters still to read"}
                </p>
                <p className="text-[13px] text-[#C0C0C0] mt-1 leading-relaxed">
                  {incompleteChapters.length === 0
                    ? `${totalChapters} / ${totalChapters} chapters read. Reading completion is separate from practice and mastery.`
                    : `${chaptersDoneCount} / ${totalChapters} chapters read. ${incompleteChapters.length} earlier chapters remain; they stay in the reading queue.`}
                  {" "}<Link href="/chapters" className="inline-flex min-h-11 items-center text-[#C9A84C] underline underline-offset-4">View learning path</Link>
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
                  className="flex items-start gap-4 p-5 rounded-lg border border-white/[0.06] bg-[#0F0F0F] hover:border-white/[0.14] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-15px_rgba(201,168,76,0.18)]"
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
                      <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#888888]">
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
                      <Clock className="w-3 h-3 text-[#888888]" />
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
    return <p className="text-xs text-[#888888]">Open</p>
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
      className="flex min-h-11 flex-wrap items-center gap-3 text-left hover:opacity-90 transition-opacity"
    >
      <Icon className="w-3 h-3" style={{ color }} />
      <p className="text-sm text-[#B9B7AE]">
        {typeLabel[suggestion.type]}
      </p>
      <p className="text-sm text-[#C0C0C0] leading-relaxed">
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
      className="group p-5 rounded-lg border flex flex-wrap items-start gap-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-18px_rgba(201,168,76,0.22)]"
      style={{
        borderColor: primary
          ? "rgba(201,168,76,0.3)"
          : "rgba(255,255,255,0.08)",
        backgroundColor: primary ? "rgba(201,168,76,0.04)" : "#0F0F0F",
      }}
    >
      <div
        className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
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
      <div className="flex-1 min-w-[140px]">
        <p className="text-[15px] font-semibold tracking-tight text-[#F0F0F0] mb-1">
          {action.title}
        </p>
        <p className="text-[13px] text-[#C0C0C0] leading-relaxed">
          {action.subtitle}
        </p>
      </div>
      <span
        className="inline-flex min-h-11 max-w-full items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-semibold tracking-tight transition-all duration-200 group-hover:scale-[1.02]"
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
    <div className="p-5 rounded-lg border border-white/[0.06] bg-[#0F0F0F] flex items-start sm:items-center justify-between gap-4 flex-col sm:flex-row transition-all duration-300 hover:border-white/[0.12] hover:shadow-[0_10px_30px_-15px_rgba(201,168,76,0.18)]">
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
            className="text-xs px-3.5 py-1.5 rounded-lg font-semibold tracking-tight transition-all duration-200 hover:scale-[1.02] inline-flex items-center gap-1"
            style={chapterIsPrimary ? secondaryStyle : primaryStyle}
          >
            Drill
          </Link>
        )}
        {weak.chapterSlug ? (
          <Link
            href={`/chapters/${weak.chapterSlug}`}
            className="text-xs px-3.5 py-1.5 rounded-lg font-semibold tracking-tight transition-all duration-200 hover:scale-[1.02] inline-flex items-center gap-1"
            style={chapterIsPrimary ? primaryStyle : secondaryStyle}
          >
            Read
            <ArrowRight className="w-3 h-3" />
          </Link>
        ) : (
          <span className="text-[11px] text-[#888888] italic">Keep practicing</span>
        )}
      </div>
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
      className="p-6 rounded-lg border transition-all duration-300 hover:shadow-[0_14px_36px_-20px_rgba(201,168,76,0.18)]"
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
        <div className="p-4 rounded-lg bg-[#0D0D0D] border border-white/[0.06]">
          <p className="text-[10px] uppercase tracking-[0.22em] text-[#888888] font-semibold">
            Last week
          </p>
          <p className="font-sans text-2xl font-semibold text-[#F0F0F0] mt-1.5 tabular-nums tracking-normal">
            {pct(lastWeekAccuracy)}
          </p>
          <p className="text-[11px] text-[#888888] mt-1 tabular-nums">
            {lastWeekAttempts} attempt{lastWeekAttempts === 1 ? "" : "s"}
          </p>
        </div>
        <div className="p-4 rounded-lg bg-[#0D0D0D] border border-white/[0.06]">
          <p className="text-[10px] uppercase tracking-[0.22em] text-[#888888] font-semibold">
            This week
          </p>
          <p className="font-sans text-2xl font-semibold text-[#F0F0F0] mt-1.5 tabular-nums tracking-normal">
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
      className="p-6 sm:p-7 rounded-lg border transition-all duration-300 hover:shadow-[0_14px_36px_-20px_rgba(201,168,76,0.2)]"
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
      <p className="text-sm leading-relaxed text-[#B9B7AE]">
        This planning group comes from your recorded official baseline and target score;
        additional labels reflect your profile selections. It adjusts practice benchmarks,
        not a diagnosis of your ability or proof that you have mastered a topic.
      </p>
      {unknown && (
        <Link
          href="/mock"
          className="inline-flex items-center gap-1.5 text-xs px-4 py-2 rounded-lg font-semibold tracking-tight mt-4 transition-all duration-200 hover:scale-[1.02]"
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
  detail,
  progress,
}: {
  icon: typeof BookOpen
  color: string
  label: string
  value: string
  detail?: string
  progress?: number | null
}) {
  return (
    <div className="p-5 rounded-lg border border-white/[0.06] bg-[#0F0F0F] flex items-center gap-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.12] hover:shadow-[0_10px_30px_-15px_rgba(201,168,76,0.18)]">
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: `${color}15` }}
      >
        <Icon className="w-4 h-4" style={{ color }} />
      </div>
      <div className="min-w-0">
        <p className="font-sans text-2xl font-semibold text-[#F0F0F0] tracking-normal tabular-nums leading-none">
          {value}
        </p>
        <p className="text-[11px] text-[#888888] mt-1.5 uppercase tracking-[0.18em]">
          {label}
        </p>
        {detail ? (
          <p className="mt-1 text-[11px] leading-snug text-[#66635D]">
            {detail}
          </p>
        ) : null}
        {progress !== null && progress !== undefined ? (
          <div
            className="mt-2 h-1.5 w-full max-w-40 overflow-hidden rounded-full bg-white/[0.06]"
            role="progressbar"
            aria-label="Weekly study target progress"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.max(0, Math.min(100, progress))}
          >
            <div
              className="h-full rounded-full bg-[#C9A84C]"
              style={{ width: `${Math.max(0, Math.min(100, progress))}%` }}
            />
          </div>
        ) : null}
      </div>
    </div>
  )
}
