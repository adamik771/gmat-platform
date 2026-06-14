import type { SupabaseClient } from "@supabase/supabase-js"

/**
 * Per-user rate limit for the AI tutor (/api/tutor).
 *
 * Usage is logged to the `tutor_usage` table (one row per request) and counted
 * over two sliding windows before each Anthropic call. Limits are generous for
 * real studying but cap key spend if the endpoint is scripted/abused.
 *
 * FAIL-OPEN until the table exists: if the usage query errors (e.g. the
 * 20260612000000_tutor_usage.sql migration hasn't been applied yet), the
 * limiter logs and allows — applying the migration is what arms the limit.
 */

const HOUR_MS = 60 * 60 * 1000
const DAY_MS = 24 * HOUR_MS

function envLimit(name: string, fallback: number): number {
  const raw = Number(process.env[name])
  return Number.isFinite(raw) && raw > 0 ? Math.floor(raw) : fallback
}

/** Max tutor requests per rolling hour / 24 hours (env-overridable). */
export const TUTOR_HOURLY_LIMIT = envLimit("TUTOR_HOURLY_LIMIT", 20)
export const TUTOR_DAILY_LIMIT = envLimit("TUTOR_DAILY_LIMIT", 100)

export interface TutorRateDecision {
  allowed: boolean
  /** Which window tripped, when blocked. */
  reason?: "hourly" | "daily"
  /** Seconds until the oldest in-window request ages out (>= 1 when blocked). */
  retryAfterSeconds?: number
}

/**
 * Pure windowed-limit evaluation: given the timestamps (ms) of prior requests
 * and "now", decide whether one more request is allowed. Exported for tests.
 */
export function evaluateTutorUsage(
  priorRequestsMs: number[],
  nowMs: number,
  limits: { hourly: number; daily: number } = {
    hourly: TUTOR_HOURLY_LIMIT,
    daily: TUTOR_DAILY_LIMIT,
  }
): TutorRateDecision {
  const inHour = priorRequestsMs.filter((t) => t > nowMs - HOUR_MS)
  const inDay = priorRequestsMs.filter((t) => t > nowMs - DAY_MS)

  if (inDay.length >= limits.daily) {
    const oldest = Math.min(...inDay)
    return {
      allowed: false,
      reason: "daily",
      retryAfterSeconds: Math.max(1, Math.ceil((oldest + DAY_MS - nowMs) / 1000)),
    }
  }
  if (inHour.length >= limits.hourly) {
    const oldest = Math.min(...inHour)
    return {
      allowed: false,
      reason: "hourly",
      retryAfterSeconds: Math.max(1, Math.ceil((oldest + HOUR_MS - nowMs) / 1000)),
    }
  }
  return { allowed: true }
}

/**
 * Check the caller's allowance from the tutor_usage table. Runs with the
 * user's own JWT (RLS restricts rows to the caller). Fail-open on any query
 * error so the tutor keeps working until the migration is applied.
 */
export async function checkTutorRateLimit(
  supabase: SupabaseClient,
  userId: string,
  nowMs: number = Date.now()
): Promise<TutorRateDecision> {
  try {
    const { data, error } = await supabase
      .from("tutor_usage")
      .select("created_at")
      .eq("user_id", userId)
      .gte("created_at", new Date(nowMs - DAY_MS).toISOString())
      .order("created_at", { ascending: false })
      .limit(TUTOR_DAILY_LIMIT + 1)
    if (error) {
      console.warn("[tutor] rate-limit check unavailable (allowing):", error.message)
      return { allowed: true }
    }
    const stamps = (data ?? []).map((r) => new Date(r.created_at as string).getTime())
    return evaluateTutorUsage(stamps, nowMs)
  } catch (e) {
    console.warn("[tutor] rate-limit check failed (allowing):", e)
    return { allowed: true }
  }
}

/** Log one tutor request. Errors are swallowed (fail-open, same as the check). */
export async function recordTutorUse(
  supabase: SupabaseClient,
  userId: string
): Promise<void> {
  try {
    const { error } = await supabase
      .from("tutor_usage")
      .insert({ user_id: userId })
    if (error) {
      console.warn("[tutor] usage insert failed:", error.message)
    }
  } catch (e) {
    console.warn("[tutor] usage insert failed:", e)
  }
}
