import type { ReviewCandidate } from "@/lib/review-queue"
import type { ChartSpec } from "@/lib/chart-spec"
import { idbGet, idbSet, idbClear } from "./indexed-db"

/**
 * Review-queue cache — per-user-namespaced.
 *
 * Every cache key is prefixed with the user id so two students on the
 * same device (e.g. shared family iPad) never see each other's data.
 * Sign-out should call `clearReviewCache(userId)` to evict — wired
 * into the sign-out handler in (app)/layout.tsx.
 *
 * Storage shape:
 *   review-queue store:
 *     "{userId}:queue:current"
 *       → { items: ReviewCandidate[], cachedAt: number }
 *   review-questions store:
 *     "{userId}:{questionId}" → CachedQuestion
 */

function queueKey(userId: string): string {
  return `${userId}:queue:current`
}

function questionKey(userId: string, questionId: string): string {
  return `${userId}:${questionId}`
}

export interface CachedReviewQueue {
  items: ReviewCandidate[]
  /** When this snapshot was written to IndexedDB (ms epoch). Surface
   *  this in the UI so the student knows how stale their offline
   *  queue is — "Cached 2 hours ago". */
  cachedAt: number
}

export interface CachedQuestion {
  id: string
  // Mirror the SessionQuestion shape from the practice route. Kept
  // structural to avoid a circular import; consumers validate the
  // shape anyway.
  section: "Quant" | "Verbal" | "DI"
  topic: string
  subtopic: string
  difficulty: string
  type: string
  prompt: string
  context?: string | null
  options: string[]
  correctAnswer: number
  correctAnswerLetter: string
  explanation: string
  /** Graphics Interpretation chart, if any — so offline GI questions still
   *  show their data (the chart is stripped out of `prompt` at parse time). */
  chartSpec?: ChartSpec
}

export async function saveReviewQueue(
  userId: string,
  items: ReviewCandidate[]
): Promise<void> {
  if (!userId) return
  const payload: CachedReviewQueue = { items, cachedAt: Date.now() }
  await idbSet("review-queue", queueKey(userId), payload)
}

export async function loadReviewQueue(
  userId: string
): Promise<CachedReviewQueue | undefined> {
  if (!userId) return undefined
  return idbGet<CachedReviewQueue>("review-queue", queueKey(userId))
}

export async function saveCachedQuestion(
  userId: string,
  q: CachedQuestion
): Promise<void> {
  if (!userId) return
  await idbSet("review-questions", questionKey(userId, q.id), q)
}

export async function saveCachedQuestions(
  userId: string,
  qs: CachedQuestion[]
): Promise<void> {
  if (!userId || qs.length === 0) return
  // Sequential is fine for the bounded queue (≤60 items). Parallel
  // would risk transaction conflicts on the same store; the tiny IDB
  // wrapper opens a fresh transaction per call.
  for (const q of qs) {
    await idbSet("review-questions", questionKey(userId, q.id), q)
  }
}

export async function loadCachedQuestion(
  userId: string,
  questionId: string
): Promise<CachedQuestion | undefined> {
  if (!userId) return undefined
  return idbGet<CachedQuestion>(
    "review-questions",
    questionKey(userId, questionId)
  )
}

/** Clear ALL review caches. Use on sign-out. Per-user namespacing
 *  means we technically only need to clear this user's keys, but a
 *  blanket clear is simpler and the cache is bounded. */
export async function clearReviewCache(): Promise<void> {
  await idbClear("review-queue")
  await idbClear("review-questions")
}
