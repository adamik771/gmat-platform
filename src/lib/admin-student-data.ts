import "server-only"

import type { SupabaseClient, User } from "@supabase/supabase-js"
import { isAdmin } from "@/lib/admin-auth"
import {
  buildAdminStudentMetrics,
  type AdminActivityDayRow,
  type AdminLessonCompletionRow,
  type AdminPracticeAttemptRow,
  type AdminPracticeSessionRow,
  type AdminPurchaseRow,
  type AdminStudentMetric,
  type AdminTutorUsageRow,
  type AdminUserStateRow,
} from "@/lib/admin-student-metrics"
import { getAllChapters, getAllQuestions } from "@/lib/content"
import { reportDataFailure } from "@/lib/server-data-observability"
import { getSupabaseService } from "@/lib/supabase/service"

const PAGE_SIZE = 1_000
const MAX_PAGES = 100

export class AdminStudentDataError extends Error {
  constructor() {
    super("Student activity data is temporarily unavailable.")
    this.name = "AdminStudentDataError"
  }
}

async function allRows<T>(
  service: SupabaseClient,
  table: string,
  columns: string,
  orderColumn: string,
): Promise<T[]> {
  const rows: T[] = []
  for (let page = 0; page < MAX_PAGES; page += 1) {
    const from = page * PAGE_SIZE
    const { data, error } = await service
      .from(table)
      .select(columns)
      .order(orderColumn, { ascending: true })
      .range(from, from + PAGE_SIZE - 1)
    if (error) {
      reportDataFailure(error, {
        surface: "admin-student-activity",
        operation: "list",
        table,
      })
      throw new AdminStudentDataError()
    }
    const pageRows = (data ?? []) as T[]
    rows.push(...pageRows)
    if (pageRows.length < PAGE_SIZE) return rows
  }

  reportDataFailure(new Error("pagination ceiling reached"), {
    surface: "admin-student-activity",
    operation: "paginate",
    table,
  })
  throw new AdminStudentDataError()
}

async function allUsers(service: SupabaseClient): Promise<User[]> {
  const users: User[] = []
  for (let page = 1; page <= MAX_PAGES; page += 1) {
    const { data, error } = await service.auth.admin.listUsers({
      page,
      perPage: PAGE_SIZE,
    })
    if (error) {
      reportDataFailure(error, {
        surface: "admin-student-activity",
        operation: "list-users",
        table: "auth.users",
      })
      throw new AdminStudentDataError()
    }
    const pageUsers = data?.users ?? []
    users.push(...pageUsers)
    if (pageUsers.length < PAGE_SIZE) return users
  }

  reportDataFailure(new Error("pagination ceiling reached"), {
    surface: "admin-student-activity",
    operation: "paginate-users",
    table: "auth.users",
  })
  throw new AdminStudentDataError()
}

/**
 * Loads cross-student data only after a trusted server-side admin check.
 * Callers never choose a user id, and no service-role data is exposed through
 * a public JSON endpoint.
 */
export async function loadAdminStudentMetrics(
  viewer: User | null,
  now = new Date(),
): Promise<AdminStudentMetric[]> {
  if (!isAdmin(viewer)) throw new AdminStudentDataError()

  const service = getSupabaseService()
  const [
    users,
    sessions,
    attempts,
    userStates,
    activityDays,
    purchases,
    tutorUsage,
    lessonCompletions,
  ] = await Promise.all([
    allUsers(service),
    allRows<AdminPracticeSessionRow>(
      service,
      "practice_sessions",
      "id,user_id,slug,topic,section,total_questions,correct_count,total_time_ms,created_at",
      "id",
    ),
    allRows<AdminPracticeAttemptRow>(
      service,
      "practice_attempts",
      "id,user_id,session_id,question_id,section,topic,subtopic,is_correct,confidence,time_spent_ms,created_at",
      "id",
    ),
    allRows<AdminUserStateRow>(service, "user_state", "user_id,data,updated_at", "user_id"),
    allRows<AdminActivityDayRow>(
      service,
      "user_activity_daily",
      "user_id,activity_date,active_seconds,last_seen_at",
      "last_seen_at",
    ),
    allRows<AdminPurchaseRow>(
      service,
      "purchases",
      "user_id,plan_id,paid_at,revoked_at",
      "paid_at",
    ),
    allRows<AdminTutorUsageRow>(service, "tutor_usage", "user_id,created_at", "created_at"),
    allRows<AdminLessonCompletionRow>(
      service,
      "lesson_completions",
      "user_id,completed_at",
      "completed_at",
    ),
  ])

  return buildAdminStudentMetrics({
    users: users.map((user) => ({
      id: user.id,
      email: user.email ?? null,
      isAdmin: isAdmin(user),
      createdAt: user.created_at,
      lastSignInAt: user.last_sign_in_at ?? null,
      userMetadata: (user.user_metadata ?? {}) as Record<string, unknown>,
      appMetadata: (user.app_metadata ?? {}) as Record<string, unknown>,
    })),
    sessions,
    attempts,
    userStates,
    activityDays,
    purchases,
    tutorUsage,
    lessonCompletions,
    chapters: getAllChapters().map((chapter) => ({
      slug: chapter.slug,
      section: chapter.section,
      sections: chapter.sections.map((section) => ({
        id: section.id,
        type: section.type,
      })),
    })),
    questions: getAllQuestions().map((question) => ({
      id: question.id,
      section: question.section,
      correctAnswer: question.correctAnswer,
      twoPartCorrectAnswers: question.twoPartCorrectAnswers,
    })),
    now,
  })
}
