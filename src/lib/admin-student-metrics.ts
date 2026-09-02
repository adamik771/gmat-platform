import { isChapterRead } from "@/lib/chapter-progress-merge"
import { parseOfficialExamEntries } from "@/lib/official-exams"
import { isReplaySession } from "@/lib/utils"

export type StudentAttentionStatus =
  | "inactive"
  | "not-started"
  | "review-backlog"
  | "accuracy"
  | "timing"
  | "new"
  | "on-track"

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
  section: string | null
  is_correct: boolean | null
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

export interface AdminErrorTagRow {
  user_id: string
  attempt_id: string
  reviewed: boolean | null
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
  sections: ReadonlyArray<{ id: string; type: string }>
}

export interface AdminStudentSectionMetric {
  section: "Quant" | "Verbal" | "DI"
  questions: number
  accuracy: number | null
  averageTimeMs: number | null
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
  courseCompletionPct: number
  completedChapters: number
  totalChapters: number
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
  errorTags: AdminErrorTagRow[]
  tutorUsage: AdminTutorUsageRow[]
  lessonCompletions: AdminLessonCompletionRow[]
  chapters: AdminChapterDefinition[]
  now: Date
}

const DAY_MS = 86_400_000
const MAX_REASONABLE_QUESTION_MS = 30 * 60_000
const MAX_REASONABLE_SESSION_MS = 8 * 60 * 60_000

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
  questions: number
  questions30d: number
  joinedAt: string
  lastActiveAt: string | null
  accuracy30d: number | null
  averageTimeMs: number | null
  reviewBacklog: number
  nowMs: number
}): { status: StudentAttentionStatus; guidance: string } {
  const inactivity = daysSince(input.lastActiveAt, input.nowMs)
  const accountAge = daysSince(input.joinedAt, input.nowMs) ?? 0

  if (input.questions === 0 && accountAge > 3) {
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
      guidance: `${input.reviewBacklog} missed questions are still awaiting review.`,
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
  if (
    input.questions30d >= 15 &&
    input.averageTimeMs !== null &&
    input.averageTimeMs > 180_000
  ) {
    return {
      status: "timing",
      guidance: "Average question time is above three minutes.",
    }
  }
  if (accountAge <= 7) {
    return {
      status: "new",
      guidance: "New student. Check that the first-week path is clear.",
    }
  }
  return {
    status: "on-track",
    guidance: "No immediate intervention signal.",
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
  const tagsByUser = groupByUser(input.errorTags)
  const tutorByUser = groupByUser(input.tutorUsage)
  const completionsByUser = groupByUser(input.lessonCompletions)
  const stateByUser = new Map(input.userStates.map((row) => [row.user_id, row]))

  return input.users.map((user) => {
    const sessions = sessionsByUser.get(user.id) ?? []
    const sessionById = new Map(sessions.map((session) => [session.id, session]))
    const scoredAttempts = (attemptsByUser.get(user.id) ?? []).filter((attempt) => {
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

    const sectionMetrics = (["Quant", "Verbal", "DI"] as const).map((section) => {
      const rows = scoredAttempts.filter((attempt) => attempt.section === section)
      const sectionTimed = rows
        .map((attempt) => finiteNonNegative(attempt.time_spent_ms))
        .filter((ms) => ms >= 1_000 && ms <= MAX_REASONABLE_QUESTION_MS)
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
      }
    })
    const weakestSection = sectionMetrics
      .filter((metric) => metric.questions >= 5 && metric.accuracy !== null)
      .sort((a, b) => (a.accuracy ?? 101) - (b.accuracy ?? 101))[0]?.section ?? null

    const stateRow = stateByUser.get(user.id)
    const state = stateRow?.data ?? user.userMetadata
    const chapterProgress =
      state.chapter_progress && typeof state.chapter_progress === "object"
        ? (state.chapter_progress as Record<
            string,
            { sectionsRead?: Record<string, boolean> }
          >)
        : {}
    const completedChapters = input.chapters.filter((chapter) =>
      isChapterRead(chapter.sections, chapterProgress[chapter.slug]?.sectionsRead),
    ).length

    const practiceSecondsByDay = new Map<string, number>()
    for (const session of sessions) {
      const day = utcDay(session.created_at)
      if (!day) continue
      const ms = Math.min(
        finiteNonNegative(session.total_time_ms),
        MAX_REASONABLE_SESSION_MS,
      )
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

    const tags = tagsByUser.get(user.id) ?? []
    const reviewedAttemptIds = new Set(
      tags.filter((tag) => tag.reviewed).map((tag) => tag.attempt_id),
    )
    const wrongAttemptIds = new Set(
      scoredAttempts
        .filter((attempt) => attempt.is_correct === false)
        .map((attempt) => attempt.id),
    )
    const reviewBacklog = [...wrongAttemptIds].filter(
      (attemptId) => !reviewedAttemptIds.has(attemptId),
    ).length

    const activePurchase = (purchasesByUser.get(user.id) ?? [])
      .filter((purchase) => !purchase.revoked_at)
      .sort((a, b) => b.paid_at.localeCompare(a.paid_at))[0]
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
      questions: scoredAttempts.length,
      questions30d: recent30.length,
      joinedAt: user.createdAt,
      lastActiveAt,
      accuracy30d: percent(correct30, recent30.length),
      averageTimeMs:
        timed30d.length > 0
          ? Math.round(timed30d.reduce((sum, ms) => sum + ms, 0) / timed30d.length)
          : null,
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
      examDate: scalarString(state.exam_date ?? user.userMetadata.exam_date),
      plan: activePurchase?.plan_id ?? null,
      courseCompletionPct:
        input.chapters.length > 0
          ? Math.round((completedChapters / input.chapters.length) * 100)
          : 0,
      completedChapters,
      totalChapters: input.chapters.length,
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
