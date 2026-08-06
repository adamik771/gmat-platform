import {
  loadPendingAttempts,
  removePendingAttempts,
  type PendingAttempt,
} from "./pending-attempts"

/**
 * Drain the pending-attempts queue: package the list as a single
 * practice-session POST and clear the local queue on success. Called
 * when the browser flips online and on page load.
 *
 * Returns `true` when the queue was either drained successfully or
 * already empty; `false` on POST failure (caller should not clear).
 *
 * The drained attempts are coalesced into ONE practice_sessions row
 * (slug `review-offline-{date}`) regardless of how many drill bursts
 * the student ran offline. This is a deliberate simplification — at
 * beta scale a single offline-drill row per drain is plenty for
 * downstream analytics. A finer-grained split would mean recording
 * session boundaries in IndexedDB, which adds complexity without
 * obvious user value yet.
 */

interface DrainResult {
  drained: boolean
  attemptsSent: number
  error?: string
}

/** Same-tab dedupe: the drain has three triggers (page-load sync, the
 *  online event, post-drill flush) that can fire together — they share
 *  one in-flight drain instead of POSTing the same queue repeatedly. */
let drainInFlight: Promise<DrainResult> | null = null

/** Cross-tab lock. Two tabs coming online together would each read the
 *  full queue and POST it (duplicate sessions). localStorage is shared
 *  per-origin, so a timestamped lock closes the window; the TTL keeps a
 *  crashed tab from wedging the drain forever. */
const DRAIN_LOCK_KEY = "zk-offline-drain-lock"
const DRAIN_LOCK_TTL_MS = 30_000

function takeDrainLock(): boolean {
  try {
    const raw = window.localStorage.getItem(DRAIN_LOCK_KEY)
    if (raw && Date.now() - Number(raw) < DRAIN_LOCK_TTL_MS) return false
    window.localStorage.setItem(DRAIN_LOCK_KEY, String(Date.now()))
    return true
  } catch {
    return true // storage unavailable — single-tab contexts still work
  }
}

function releaseDrainLock(): void {
  try {
    window.localStorage.removeItem(DRAIN_LOCK_KEY)
  } catch {
    // Nothing to release.
  }
}

export function drainPendingAttempts(userId: string): Promise<DrainResult> {
  if (drainInFlight) return drainInFlight
  drainInFlight = doDrain(userId).finally(() => {
    drainInFlight = null
  })
  return drainInFlight
}

// Note: this replay persists a practice_sessions row but deliberately does
// NOT fire the practice_completed analytics event — activation is measured
// on the online SessionClient path only (see lib/analytics.ts).
async function doDrain(userId: string): Promise<DrainResult> {
  if (!userId) return { drained: false, attemptsSent: 0, error: "No user" }
  const attempts = await loadPendingAttempts(userId)
  if (attempts.length === 0) {
    return { drained: true, attemptsSent: 0 }
  }
  if (typeof navigator !== "undefined" && navigator.onLine === false) {
    return { drained: false, attemptsSent: 0, error: "Still offline" }
  }
  if (!takeDrainLock()) {
    return { drained: false, attemptsSent: 0, error: "Drain running in another tab" }
  }

  // Aggregate: total time, correct count, dominant section.
  const totalTimeMs = attempts.reduce((s, a) => s + a.timeSpentMs, 0)
  const correctCount = attempts.filter((a) => a.isCorrect).length
  const sectionCounts: Record<string, number> = {}
  for (const a of attempts) {
    sectionCounts[a.section] = (sectionCounts[a.section] ?? 0) + 1
  }
  const dominantSection =
    Object.entries(sectionCounts).sort((a, b) => b[1] - a[1])[0]?.[0] ??
    "Quant"

  const today = new Date().toISOString().slice(0, 10)
  const slug = `review-offline-${today}`

  const payload = {
    slug,
    topic: "Offline review",
    section: dominantSection,
    totalQuestions: attempts.length,
    correctCount,
    accuracy:
      attempts.length === 0
        ? 0
        : Math.round((correctCount / attempts.length) * 100),
    totalTimeMs,
    attempts: attempts.map((a) => stripQueueShape(a)),
  }

  try {
    const res = await fetch("/api/practice-sessions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
    if (!res.ok) {
      return {
        drained: false,
        attemptsSent: 0,
        error: `POST failed (${res.status})`,
      }
    }
    // Successful POST → remove exactly the drained attempts. A whole-key
    // clear here would also delete any attempt appended while the POST
    // was in flight.
    await removePendingAttempts(
      userId,
      attempts.map((a) => a.id)
    )
    return { drained: true, attemptsSent: attempts.length }
  } catch (e) {
    return {
      drained: false,
      attemptsSent: 0,
      error: e instanceof Error ? e.message : "Network error",
    }
  } finally {
    releaseDrainLock()
  }
}

/** Translate a stored PendingAttempt to the AttemptPayload shape the
 *  /api/practice-sessions handler expects. The `v`, `id`, and
 *  `submittedAt` fields are queue bookkeeping that the server doesn't
 *  consume. */
function stripQueueShape(a: PendingAttempt) {
  return {
    questionId: a.questionId,
    section: a.section,
    topic: a.topic,
    subtopic: a.subtopic,
    difficulty: a.difficulty,
    questionType: a.questionType,
    selectedAnswer: a.selectedAnswer,
    isCorrect: a.isCorrect,
    timeSpentMs: a.timeSpentMs,
  }
}
