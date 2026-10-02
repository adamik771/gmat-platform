import "server-only"
import type { SupabaseClient, User } from "@supabase/supabase-js"
import { mergeChapterExposure } from "@/lib/chapter-exposure"
import { buildLastSeenMap } from "@/lib/question-selection"
import { reportDataFailure } from "@/lib/server-data-observability"
import { getUserStateForWrite, type UserState } from "@/lib/user-state"
import { databaseTimestampMicros } from "@/lib/database-timestamp"

/** Selection may continue on read failure, but must disclose incomplete history. */
export async function loadSelectionState(supabase: SupabaseClient, user: User): Promise<{ state: UserState; errored: boolean }> {
  try {
    return await getUserStateForWrite(supabase, user)
  } catch (error) {
    reportDataFailure(error, { surface: "question-freshness", operation: "load", table: "user_state" })
    return { state: {}, errored: true }
  }
}

interface ExposureRow {
  id: string
  question_id: string
  created_at: string
  topic: string | null
  is_correct: boolean
}

/** RLS-scoped, bounded pagination; a server row cap cannot silently truncate history. */
export async function loadPracticeExposure(
  supabase: SupabaseClient,
  user: User,
  chapterProgress: unknown,
  stateErrored: boolean,
  now = new Date(),
) {
  const rows: ExposureRow[] = []
  let errored = stateErrored
  try {
    let previous: { id: string; at: number } | null = null
    let expected: number | null = null
    for (let page = 0; page < 100; page++) {
      const query = supabase.from("practice_attempts")
        .select("id,question_id,created_at,topic,is_correct", { count: "exact" })
        .eq("user_id", user.id)
        .lte("created_at", now.toISOString())
        .order("created_at", { ascending: true })
        .order("id", { ascending: true })
        .range(rows.length, rows.length + 499)
      const { data, error, count } = await query
      if (error) throw error
      if (!Array.isArray(data) || count === null) throw new Error("Missing history pagination metadata")
      if (expected === null) expected = count
      if (expected > 50_000 || count !== expected) throw new Error("Incomplete or changing history")
      for (const row of data as ExposureRow[]) {
        const at = databaseTimestampMicros(row.created_at)
        if (typeof row.id !== "string" || typeof row.question_id !== "string" || typeof row.is_correct !== "boolean" || at === null || (previous && (at < previous.at || (at === previous.at && row.id <= previous.id)))) throw new Error("Invalid history page")
        rows.push(row)
        previous = { id: row.id, at }
      }
      if (rows.length === expected) break
      if (data.length === 0 || page === 99) throw new Error("Incomplete history")
    }
  } catch (error) {
    errored = true
    reportDataFailure(error, { surface: "question-freshness", operation: "load", table: "practice_attempts" })
  }
  return {
    rows,
    lastSeen: mergeChapterExposure(buildLastSeenMap(rows), chapterProgress, now.getTime()),
    errored,
  }
}
