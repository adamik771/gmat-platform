import { idbGet, idbSet, idbDelete } from "./indexed-db"

/**
 * Pending-attempts queue. Per-user namespaced. Holds attempts the
 * student completed offline so they can be replayed (POSTed to
 * /api/practice-sessions) when the network returns.
 *
 * Storage shape:
 *   pending-attempts store:
 *     "{userId}:queue" → PendingAttempt[]   (one row per user)
 *
 * One row per user keeps the wrapper simple — every read/write
 * operates on the full list. The list is bounded by what a single
 * student can drill in one offline session (typically <50 items), so
 * the cost is fine.
 *
 * For schema evolution, the array type is versioned via a `v` discriminator
 * — bump it and add a migration path in `loadPendingAttempts` if the
 * shape needs to change.
 */

export interface PendingAttempt {
  /** Schema version for this row. Currently always 1. */
  v: 1
  /** Unique id assigned client-side at queue time. Used to dedupe if
   *  a partial sync ran. */
  id: string
  /** Mirrors the AttemptPayload shape /api/practice-sessions accepts. */
  questionId: string
  section: "Quant" | "Verbal" | "DI"
  topic: string
  subtopic: string
  difficulty: string
  questionType: string
  selectedAnswer: number | null
  isCorrect: boolean
  timeSpentMs: number
  /** ms epoch when the student submitted offline. The server's
   *  created_at will reflect drain time, not original submit time —
   *  that's a known limitation and is documented in the runner UI. */
  submittedAt: number
}

function queueKey(userId: string): string {
  return `${userId}:queue`
}

export async function loadPendingAttempts(
  userId: string
): Promise<PendingAttempt[]> {
  if (!userId) return []
  const list = await idbGet<PendingAttempt[]>(
    "pending-attempts",
    queueKey(userId)
  )
  return list ?? []
}

export async function appendPendingAttempt(
  userId: string,
  attempt: PendingAttempt
): Promise<void> {
  if (!userId) return
  const current = await loadPendingAttempts(userId)
  current.push(attempt)
  await idbSet("pending-attempts", queueKey(userId), current)
}

export async function clearPendingAttempts(userId: string): Promise<void> {
  if (!userId) return
  await idbDelete("pending-attempts", queueKey(userId))
}

/** Generate a queue id. Client-side only — uuid not strictly needed,
 *  collision risk is negligible in single-user scope. */
export function newAttemptId(): string {
  return `att_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`
}
