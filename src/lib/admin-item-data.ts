import "server-only"

import type { User } from "@supabase/supabase-js"
import { isAdmin } from "@/lib/admin-auth"
import { getSupabaseService } from "@/lib/supabase/service"
import { reportDataFailure } from "@/lib/server-data-observability"
import { computeItemStats, type PsychometricsInput } from "@/lib/psychometrics"
import { isReplaySession } from "@/lib/utils"
import { databaseTimestampMicros } from "@/lib/database-timestamp"

const PAGE_SIZE = 500
const MAX_PAGES = 200

export class AdminItemDataError extends Error {
  constructor() {
    super("Item statistics are temporarily unavailable. No partial results are shown.")
    this.name = "AdminItemDataError"
  }
}

/** Returns aggregates only. No identities leave this server-only boundary. */
export async function loadAdminItemStats(viewer: User | null, now = new Date()) {
  if (!isAdmin(viewer)) throw new AdminItemDataError()
  try {
    const service = getSupabaseService()
    const rows: PsychometricsInput[] = []
    let previous: { id: string; at: number } | null = null
    let expectedCount: number | null = null
    for (let page = 0; page < MAX_PAGES; page++) {
      const query = service.from("practice_attempts")
        .select("id,user_id,question_id,section,topic,is_correct,created_at,hints_revealed,practice_sessions(slug,topic,user_id)", { count: "exact" })
        .lte("created_at", now.toISOString())
        .order("created_at", { ascending: true })
        .order("id", { ascending: true })
        .range(rows.length, rows.length + PAGE_SIZE - 1)
      const { data, error, count } = await query
      if (error) throw error
      if (count === null || !Array.isArray(data)) throw new Error("Missing pagination metadata")
      if (expectedCount === null) expectedCount = count
      if (count !== expectedCount || count > PAGE_SIZE * MAX_PAGES) throw new Error("Attempt data changed or exceeds the pagination ceiling")
      if (data.length === 0) {
        if (rows.length !== expectedCount) throw new Error("Incomplete attempt data")
        return computeItemStats(rows)
      }
      for (const value of data) {
        // A malformed row is a read failure, not a reason to publish a biased subset.
        const row = value as unknown as Record<string, unknown>
        if (typeof row.id !== "string" || typeof row.user_id !== "string" || typeof row.question_id !== "string" || !["Quant", "Verbal", "DI"].includes(String(row.section)) || typeof row.is_correct !== "boolean") throw new Error("Invalid attempt row")
        const at = databaseTimestampMicros(row.created_at)
        if (at === null || (previous && (at < previous.at || (at === previous.at && row.id <= previous.id)))) throw new Error("Invalid chronology or unstable pagination order")
        const relation = row.practice_sessions
        const session = (Array.isArray(relation) ? relation.length === 1 ? relation[0] : null : relation) as Record<string, unknown> | null
        const eligibleSession = !!session && session.user_id === row.user_id && typeof session.slug === "string" && !isReplaySession(session.slug, typeof session.topic === "string" ? session.topic : null)
        rows.push({
          id: row.id, user_id: row.user_id, question_id: row.question_id,
          section: row.section as PsychometricsInput["section"],
          topic: typeof row.topic === "string" ? row.topic : "Unknown",
          is_correct: row.is_correct,
          created_at: typeof row.created_at === "string" ? row.created_at : null,
          hints_revealed: typeof row.hints_revealed === "number" ? row.hints_revealed : null,
          eligibleSession,
        })
        previous = { id: row.id, at }
      }
      if (rows.length === expectedCount) return computeItemStats(rows)
    }
    throw new Error("Pagination safety ceiling reached")
  } catch (error) {
    reportDataFailure(error, { surface: "admin-item-qa", operation: "load", table: "practice_attempts" })
    throw new AdminItemDataError()
  }
}
