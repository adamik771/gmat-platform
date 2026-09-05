import { isChapterRead } from "@/lib/chapter-progress-merge"
import { findActivePurchase, purchaseExpiresAt } from "@/lib/plan-access"
import { SECTION_TARGET_SECONDS } from "@/lib/pacing"
import { computeRung, priorityFor } from "@/lib/review-queue"
import { gatherFlaggedQuestionIds } from "@/lib/mock"
import { readSavedForReview } from "@/lib/spaced-review"
import { parseOfficialExamEntries } from "@/lib/official-exams"
import { isReplaySession } from "@/lib/utils"

export type StudentAttentionStatus =
  | "inactive"
  | "not-started"
  | "review-backlog"
  | "accuracy"
  | "timing"
  | "new"
  | "no-alert"

export interface AdminStudentUser {
  id: string
  email: string | null
  isAdmin: boolean
  createdAt: string
  lastSignInAt: string | null
  userMetadata: Record<string, unknown>
  appMetadata: Record<string, unknown>
}

export interface AdminPracticeSessionRow {
  id: string
  user_id: string
  slug: string | null
  topic: string | null
  section: string | null
  total_questions: number | null
  correct_count: number | null
  total_time_ms: number | null
  created_at: string
}

export interface AdminPracticeAttemptRow {
  id: string
  user_id: string
  session_id: string | null
  question_id?: string | null
  section: string | null
  topic?: string | null
  subtopic?: string | null
  is_correct: boolean | null
  confidence?: string | null
  time_spent_ms: number | null
  created_at: string
}

export interface AdminUserStateRow {
  user_id: string
  data: Record<string, unknown> | null
  updated_at: string
}

export interface AdminActivityDayRow {
  user_id: string
  activity_date: string
  active_seconds: number | null
  last_seen_at: string
}

export interface AdminPurchaseRow {
  user_id: string
  plan_id: string
  paid_at: string
  revoked_at: string | null
}

export interface AdminTutorUsageRow {
  user_id: string
  created_at: string
}

export interface AdminLessonCompletionRow {
  user_id: string
  completed_at: string
}

export interface AdminChapterDefinition {
  slug: string
  section: "Quant" | "Verbal" | "DI" | "General"
  sections: ReadonlyArray<{ id: string; type: string }>
}

export interface AdminQuestionDefinition {
  id: string
  section: "Quant" | "Verbal" | "DI"
  correctAnswer: number
  twoPartCorrectAnswers?: number[]
}

export interface AdminStudentSectionMetric {
  section: "Quant" | "Verbal" | "DI"
  questions: number
  accuracy: number | null
  averageTimeMs: number | null
  recentQuestions: number
  recentAccuracy: number | null
  learningQuestions: number
  learningAccuracy: number | null
}

export interface AdminStudentMetric {
  id: string
  name: string
  email: string
  isAdmin: boolean
  joinedAt: string
  lastSignInAt: string | null
  lastActiveAt: string | null
  targetScore: number | null
  examDate: string | null
  plan: string | null
  planActive: boolean
  planExpiresAt: string | null
  courseCompletionPct: number
  completedChapters: number
  totalChapters: number
  chapterSetsCompleted: number
  totalQuestions: number
  practiceQuestions: number
  learningQuestions: number
  learningAccuracy: number | null
  questions: number
  questions7d: number
  questions30d: number
  accuracy: number | null
  accuracy30d: number | null
  averageTimeMs: number | null
  averageTime30dMs: number | null
  activeHours: number
  activeHours30d: number
  trackedActivityAvailable: boolean
  activeDays30d: number
  sessions: number
  reviewBacklog: number
  officialExamCount: number
  tutorRequests30d: number
  weakestSection: "Quant" | "Verbal" | "DI" | null
  sectionMetrics: AdminStudentSectionMetric[]
  status: StudentAttentionStatus
  guidance: string
}

export interface BuildAdminStudentMetricsInput {
  users: AdminStudentUser[]
  sessions: AdminPracticeSessionRow[]
  attempts: AdminPracticeAttemptRow[]
  userStates: AdminUserStateRow[]
  activityDays: AdminActivityDayRow[]
  purchases: AdminPurchaseRow[]
  tutorUsage: AdminTutorUsageRow[]
  lessonCompletions: AdminLessonCompletionRow[]
  chapters: AdminChapterDefinition[]
  questions: AdminQuestionDefinition[]
  now: Date
}

const DAY_MS = 86_400_000
const MAX_REASONABLE_QUESTION_MS = 30 * 60_000
const MAX_REASONABLE_SESSION_MS = 4 * 60 * 60_000
const REVIEW_WINDOW_MS = 84 * DAY_MS

function finiteNonNegative(value: number | null | undefined): number {
  return typeof value === "number" && Number.isFinite(value) && value > 0
    ? value
    : 0
}

function timestamp(value: string | null | undefined): number | null {
  if (!value) return null
  const parsed = Date.parse(value)
  return Number.isFinite(parsed) ? parsed : null
}

function maxIso(values: Array<string | null | undefined>): string | null {
  let winner: string | null = null
  let winnerMs = -1
  for (const value of values) {
    const ms = timestamp(value)
    if (ms !== null && ms > winnerMs) {
      winner = value ?? null
      winnerMs = ms
    }
  }
  return winner
}

function utcDay(value: string): string | null {
  const ms = timestamp(value)
  return ms === null ? null : new Date(ms).toISOString().slice(0, 10)
}

function percent(correct: number, total: number): number | null {
  return total > 0 ? Math.round((correct / total) * 100) : null
}

function median(values: number[]): number | null {
  if (values.length === 0) return null
  const sorted = [...values].sort((a, b) => a - b)
  const middle = Math.floor(sorted.length / 2)
  return sorted.length % 2 === 0
    ? Math.round((sorted[middle - 1] + sorted[middle]) / 2)
    : sorted[middle]
}

function reasonableSessionMs(session: AdminPracticeSessionRow): number {
  const reported = finiteNonNegative(session.total_time_ms)
  const questionCount = Math.max(1, finiteNonNegative(session.total_questions))
  // Ten minutes of setup/review plus five minutes per question is deliberately
  // generous, but prevents a suspended one-question tab from becoming hours of
  // historical activity. Full mocks remain covered by the four-hour hard cap.
  const contextualCap = 10 * 60_000 + questionCount * 5 * 60_000
  return Math.min(reported, contextualCap, MAX_REASONABLE_SESSION_MS)
}

function chapterQuestionCorrect(
  progress: {
    selected?: number | null
    submitted?: boolean
    twoPartSelections?: (number | null)[]
  },
  question: AdminQuestionDefinition,
): boolean | null {
  if (!progress.submitted) return null
  if (question.twoPartCorrectAnswers?.length) {
    const selected = progress.twoPartSelections
    if (!selected || selected.length !== question.twoPartCorrectAnswers.length) return null
    return selected.every((answer, index) => answer === question.twoPartCorrectAnswers?.[index])
  }
  return typeof progress.selected === "number"
    ? progress.selected === question.correctAnswer
    : null
}

function dueReviewCount(input: {
  attempts: AdminPracticeAttemptRow[]
  state: Record<string, unknown>
  examDate: string | null
  nowMs: number
}): number {
  const saved = readSavedForReview(input.state)
  const flagged = gatherFlaggedQuestionIds(input.state)
  const grouped = new Map<string, AdminPracticeAttemptRow[]>()
  for (const attempt of input.attempts) {
    if (attempt.is_correct === null) continue
    const seenAt = timestamp(attempt.created_at)
    if (seenAt === null || seenAt < input.nowMs - REVIEW_WINDOW_MS) continue
    const questionId = attempt.question_id ?? attempt.id
    const rows = grouped.get(questionId)
    if (rows) rows.push(attempt)
    else grouped.set(questionId, [attempt])
  }

  const examMs = input.examDate
    ? Date.parse(`${input.examDate}T23:59:59.999Z`)
    : Number.NaN
  const daysUntilExam = Number.isFinite(examMs)
    ? Math.max(0, Math.ceil((examMs - input.nowMs) / DAY_MS))
    : null
  let due = 0
  for (const [questionId, attempts] of grouped) {
    const chronological = attempts.sort(
      (a, b) => (timestamp(a.created_at) ?? 0) - (timestamp(b.created_at) ?? 0),
    )
    const latest = chronological.at(-1)
    if (!latest) continue
    const latestMs = timestamp(latest.created_at) ?? input.nowMs
    const correctness = chronological.map((attempt) => attempt.is_correct === true)
    const rung = computeRung(correctness)
    const missCount = correctness.filter((correct) => !correct).length
    const isFlagged = flagged.has(questionId)
    const isSaved = saved.has(questionId)
    // The student queue also schedules routine reinforcement for questions
    // answered correctly from the start. That is healthy practice, not an
    // admin intervention signal; this count is specifically weak/saved/flagged
    // material that is now due.
    if (missCount === 0 && !isFlagged && !isSaved) continue
    const result = priorityFor(
      rung,
      Math.max(0, (input.nowMs - latestMs) / DAY_MS),
      missCount,
      isFlagged,
      {
        daysUntilExam,
        confidentMiss: latest.is_correct === false && latest.confidence === "high",
        saved: isSaved,
      },
    )
    if (result.due || isFlagged || isSaved) due += 1
  }
  return due
}

function daysSince(value: string | null, nowMs: number): number | null {
  const ms = timestamp(value)
  return ms === null ? null : Math.max(0, Math.floor((nowMs - ms) / DAY_MS))
}

function studentName(metadata: Record<string, unknown>, email: string | null): string {
  const fullName = typeof metadata.full_name === "string" ? metadata.full_name.trim() : ""
  if (fullName) return fullName
  return email?.split("@")[0] || "Unnamed student"
}

function scalarNumber(value: unknown): number | null {
  return typeof value === "number" && Number.isFinite(value) ? value : null
}

function scalarString(value: unknown): string | null {
  return typeof value === "string" && value.trim() ? value.trim() : null
}

function statusFor(input: {
  hasStarted: boolean
  questions30d: number
  joinedAt: string
  lastActiveAt: string | null
  accuracy30d: number | null
  timingSection: "Quant" | "Verbal" | "DI" | null
  reviewBacklog: number
  nowMs: number
}): { status: StudentAttentionStatus; guidance: string } {
  const inactivity = daysSince(input.lastActiveAt, input.nowMs)
  const accountAge = daysSince(input.joinedAt, input.nowMs) ?? 0

  if (!input.hasStarted && accountAge > 3) {
    return {
      status: "not-started",
      guidance: "Has not completed a recorded question yet.",
    }
  }
  if (inactivity !== null && inactivity >= 7) {
    return {
      status: "inactive",
      guidance: `No recorded activity for ${inactivity} days.`,
    }
  }
  if (input.reviewBacklog >= 10) {
    return {
      status: "review-backlog",
      guidance: `${input.reviewBacklog} unique questions are due in spaced review.`,
    }
  }
  if (
    input.questions30d >= 15 &&
    input.accuracy30d !== null &&
    input.accuracy30d < 55
  ) {
    return {
      status: "accuracy",
      guidance: `Recent original-attempt accuracy is ${input.accuracy30d}%.`,
    }
  }
  if (input.timingSection) {
    return {
      status: "timing",
      guidance: `${input.timingSection} median pace is materially above its section target.`,
    }
  }
  if (accountAge <= 7) {
    return {
      status: "new",
      guidance: "New student. Check that the first-week path is clear.",
    }
  }
  return {
    status: "no-alert",
    guidance: "No rule-based intervention signal right now.",
  }
}

function groupByUser<T extends { user_id: string }>(rows: T[]): Map<string, T[]> {
  const grouped = new Map<string, T[]>()
  for (const row of rows) {
    const bucket = grouped.get(row.user_id)
    if (bucket) bucket.push(row)
    else grouped.set(row.user_id, [row])
  }
  return grouped
}

export function buildAdminStudentMetrics(
  input: BuildAdminStudentMetricsInput,
): AdminStudentMetric[] {
  const nowMs = input.now.getTime()
  const sevenDaysAgo = nowMs - 7 * DAY_MS
  const thirtyDaysAgo = nowMs - 30 * DAY_MS
  const sessionsByUser = groupByUser(input.sessions)
  const attemptsByUser = groupByUser(input.attempts)
  const activityByUser = groupByUser(input.activityDays)
  const purchasesByUser = groupByUser(input.purchases)
  const tutorByUser = groupByUser(input.tutorUsage)
  const completionsByUser = groupByUser(input.lessonCompletions)
  const stateByUser = new Map(input.userStates.map((row) => [row.user_id, row]))
  const questionById = new Map(input.questions.map((question) => [question.id, question]))

  return input.users.map((user) => {
    const sessions = sessionsByUser.get(user.id) ?? []
    const sessionById = new Map(sessions.map((session) => [session.id, session]))
    const allAttempts = attemptsByUser.get(user.id) ?? []
    const scoredAttempts = allAttempts.filter((attempt) => {
      const session = attempt.session_id ? sessionById.get(attempt.session_id) : null
      return !session || !isReplaySession(session.slug, session.topic)
    })
    const recent30 = scoredAttempts.filter(
      (attempt) => (timestamp(attempt.created_at) ?? 0) >= thirtyDaysAgo,
    )
    const recent7 = scoredAttempts.filter(
      (attempt) => (timestamp(attempt.created_at) ?? 0) >= sevenDaysAgo,
    )

    const correct = scoredAttempts.filter((attempt) => attempt.is_correct === true).length
    const correct30 = recent30.filter((attempt) => attempt.is_correct === true).length
    const timed = scoredAttempts
      .map((attempt) => finiteNonNegative(attempt.time_spent_ms))
      .filter((ms) => ms >= 1_000 && ms <= MAX_REASONABLE_QUESTION_MS)
    const timed30d = recent30
      .map((attempt) => finiteNonNegative(attempt.time_spent_ms))
      .filter((ms) => ms >= 1_000 && ms <= MAX_REASONABLE_QUESTION_MS)

    const stateRow = stateByUser.get(user.id)
    const state = stateRow?.data ?? user.userMetadata
    const chapterProgress =
      state.chapter_progress && typeof state.chapter_progress === "object"
        ? (state.chapter_progress as Record<
            string,
            {
              sectionsRead?: Record<string, boolean>
              questions?: Record<
                string,
                {
                  selected?: number | null
                  submitted?: boolean
                  twoPartSelections?: (number | null)[]
                }
              >
              problemSetResults?: Record<
                string,
                {
                  correct?: number
                  total?: number
                  attempts?: number
                  lifetimeCorrect?: number
                  lifetimeTotal?: number
                }
              >
            }
          >)
        : {}
    const completedChapters = input.chapters.filter((chapter) =>
      isChapterRead(chapter.sections, chapterProgress[chapter.slug]?.sectionsRead),
    ).length

    const learningBySection: Record<
      "Quant" | "Verbal" | "DI",
      { questions: number; graded: number; correct: number }
    > = {
      Quant: { questions: 0, graded: 0, correct: 0 },
      Verbal: { questions: 0, graded: 0, correct: 0 },
      DI: { questions: 0, graded: 0, correct: 0 },
    }
    let chapterSetsCompleted = 0
    for (const chapter of input.chapters) {
      const progress = chapterProgress[chapter.slug]
      if (!progress) continue
      for (const [questionId, questionProgress] of Object.entries(
        progress.questions ?? {},
      )) {
        if (!questionProgress.submitted) continue
        const question = questionById.get(questionId)
        const section = question?.section ?? chapter.section
        if (section === "General") continue
        learningBySection[section].questions += 1
        if (!question) continue
        const correctResult = chapterQuestionCorrect(questionProgress, question)
        if (correctResult === null) continue
        learningBySection[section].graded += 1
        if (correctResult) learningBySection[section].correct += 1
      }
      for (const result of Object.values(progress.problemSetResults ?? {})) {
        const total = scalarNumber(result?.lifetimeTotal ?? result?.total) ?? 0
        const correctResult = scalarNumber(
          result?.lifetimeCorrect ?? result?.correct,
        ) ?? 0
        if (total <= 0) continue
        if (chapter.section === "General") continue
        learningBySection[chapter.section].questions += total
        learningBySection[chapter.section].graded += total
        learningBySection[chapter.section].correct += Math.min(total, correctResult)
        chapterSetsCompleted += Math.max(
          1,
          scalarNumber(result?.attempts) ?? 1,
        )
      }
    }
    const learningQuestions = Object.values(learningBySection).reduce(
      (sum, metric) => sum + metric.questions,
      0,
    )
    const learningCorrect = Object.values(learningBySection).reduce(
      (sum, metric) => sum + metric.correct,
      0,
    )

    const sectionMetrics = (["Quant", "Verbal", "DI"] as const).map((section) => {
      const rows = scoredAttempts.filter((attempt) => attempt.section === section)
      const recentRows = recent30.filter((attempt) => attempt.section === section)
      const sectionTimed = rows
        .map((attempt) => finiteNonNegative(attempt.time_spent_ms))
        .filter((ms) => ms >= 1_000 && ms <= MAX_REASONABLE_QUESTION_MS)
      const learning = learningBySection[section]
      return {
        section,
        questions: rows.length,
        accuracy: percent(
          rows.filter((attempt) => attempt.is_correct === true).length,
          rows.length,
        ),
        averageTimeMs:
          sectionTimed.length > 0
            ? Math.round(sectionTimed.reduce((sum, ms) => sum + ms, 0) / sectionTimed.length)
            : null,
        recentQuestions: recentRows.length,
        recentAccuracy: percent(
          recentRows.filter((attempt) => attempt.is_correct === true).length,
          recentRows.length,
        ),
        learningQuestions: learning.questions,
        learningAccuracy: percent(learning.correct, learning.graded),
      }
    })
    const recentFocusCandidates = sectionMetrics.filter(
      (metric) => metric.recentQuestions >= 10 && metric.recentAccuracy !== null,
    )
    const lifetimeFocusCandidates = sectionMetrics.filter(
      (metric) => metric.questions >= 20 && metric.accuracy !== null,
    )
    const focusCandidates =
      recentFocusCandidates.length >= 2
        ? recentFocusCandidates.sort(
            (a, b) => (a.recentAccuracy ?? 101) - (b.recentAccuracy ?? 101),
          )
        : lifetimeFocusCandidates.length >= 2
          ? lifetimeFocusCandidates.sort(
            (a, b) => (a.accuracy ?? 101) - (b.accuracy ?? 101),
          )
          : []
    const weakestSection = focusCandidates[0]?.section ?? null

    const timingSection = (["Quant", "Verbal", "DI"] as const)
      .map((section) => {
        const times = recent30
          .filter((attempt) => attempt.section === section)
          .map((attempt) => finiteNonNegative(attempt.time_spent_ms))
          .filter((ms) => ms >= 1_000 && ms <= MAX_REASONABLE_QUESTION_MS)
        const medianMs = median(times)
        return {
          section,
          count: times.length,
          ratio:
            medianMs === null
              ? 0
              : medianMs / (SECTION_TARGET_SECONDS[section] * 1_000),
        }
      })
      .filter((metric) => metric.count >= 10 && metric.ratio > 1.3)
      .sort((a, b) => b.ratio - a.ratio)[0]?.section ?? null

    const practiceSecondsByDay = new Map<string, number>()
    for (const session of sessions) {
      const day = utcDay(session.created_at)
      if (!day) continue
      const ms = reasonableSessionMs(session)
      practiceSecondsByDay.set(day, (practiceSecondsByDay.get(day) ?? 0) + ms / 1_000)
    }
    const trackedSecondsByDay = new Map<string, number>()
    const activityRows = activityByUser.get(user.id) ?? []
    for (const day of activityRows) {
      const seconds = Math.min(finiteNonNegative(day.active_seconds), 86_400)
      trackedSecondsByDay.set(
        day.activity_date,
        Math.max(trackedSecondsByDay.get(day.activity_date) ?? 0, seconds),
      )
    }
    const allDays = new Set([
      ...practiceSecondsByDay.keys(),
      ...trackedSecondsByDay.keys(),
    ])
    let activeSeconds = 0
    let activeSeconds30d = 0
    let activeDays30d = 0
    for (const day of allDays) {
      const seconds = Math.max(
        practiceSecondsByDay.get(day) ?? 0,
        trackedSecondsByDay.get(day) ?? 0,
      )
      activeSeconds += seconds
      const dayMs = Date.parse(`${day}T23:59:59.999Z`)
      if (Number.isFinite(dayMs) && dayMs >= thirtyDaysAgo) {
        activeSeconds30d += seconds
        if (seconds > 0) activeDays30d += 1
      }
    }

    const examDate = scalarString(state.exam_date ?? user.userMetadata.exam_date)
    const reviewBacklog = dueReviewCount({
      attempts: allAttempts,
      state,
      examDate,
      nowMs,
    })

    const purchaseHistory = (purchasesByUser.get(user.id) ?? [])
      .filter((purchase) => !purchase.revoked_at)
      .sort((a, b) => b.paid_at.localeCompare(a.paid_at))
    const latestPurchase = purchaseHistory[0] ?? null
    const activePurchase = findActivePurchase(purchaseHistory, input.now)
    const displayedPurchase = activePurchase ?? latestPurchase
    const tutorRequests30d = (tutorByUser.get(user.id) ?? []).filter(
      (row) => (timestamp(row.created_at) ?? 0) >= thirtyDaysAgo,
    ).length
    const lastActiveAt = maxIso([
      ...activityRows.map((row) => row.last_seen_at),
      ...sessions.map((row) => row.created_at),
      ...scoredAttempts.map((row) => row.created_at),
      ...(completionsByUser.get(user.id) ?? []).map((row) => row.completed_at),
      stateRow?.updated_at,
    ])

    const status = statusFor({
      hasStarted:
        scoredAttempts.length + learningQuestions > 0 ||
        completedChapters > 0 ||
        activeSeconds > 0,
      questions30d: recent30.length,
      joinedAt: user.createdAt,
      lastActiveAt,
      accuracy30d: percent(correct30, recent30.length),
      timingSection,
      reviewBacklog,
      nowMs,
    })

    return {
      id: user.id,
      name: studentName(user.userMetadata, user.email),
      email: user.email ?? "",
      isAdmin: user.isAdmin,
      joinedAt: user.createdAt,
      lastSignInAt: user.lastSignInAt,
      lastActiveAt,
      targetScore: scalarNumber(state.target_score ?? user.userMetadata.target_score),
      examDate,
      plan: displayedPurchase?.plan_id ?? null,
      planActive: activePurchase !== null,
      planExpiresAt: displayedPurchase
        ? purchaseExpiresAt(displayedPurchase.plan_id, displayedPurchase.paid_at)
        : null,
      courseCompletionPct:
        input.chapters.length > 0
          ? Math.round((completedChapters / input.chapters.length) * 100)
          : 0,
      completedChapters,
      totalChapters: input.chapters.length,
      chapterSetsCompleted,
      totalQuestions: scoredAttempts.length + learningQuestions,
      practiceQuestions: scoredAttempts.length,
      learningQuestions,
      learningAccuracy: percent(
        learningCorrect,
        Object.values(learningBySection).reduce(
          (sum, metric) => sum + metric.graded,
          0,
        ),
      ),
      questions: scoredAttempts.length,
      questions7d: recent7.length,
      questions30d: recent30.length,
      accuracy: percent(correct, scoredAttempts.length),
      accuracy30d: percent(correct30, recent30.length),
      averageTimeMs:
        timed.length > 0
          ? Math.round(timed.reduce((sum, ms) => sum + ms, 0) / timed.length)
          : null,
      averageTime30dMs:
        timed30d.length > 0
          ? Math.round(timed30d.reduce((sum, ms) => sum + ms, 0) / timed30d.length)
          : null,
      activeHours: Math.round((activeSeconds / 3_600) * 10) / 10,
      activeHours30d: Math.round((activeSeconds30d / 3_600) * 10) / 10,
      trackedActivityAvailable: activityRows.length > 0,
      activeDays30d,
      sessions: sessions.length,
      reviewBacklog,
      officialExamCount: parseOfficialExamEntries(state).length,
      tutorRequests30d,
      weakestSection,
      sectionMetrics,
      status: status.status,
      guidance: status.guidance,
    }
  })
}
