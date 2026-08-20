/**
 * Shared question-selection policy — the one place that decides how any
 * surface that SAMPLES questions from a pool treats the student's attempt
 * history. Root complaint: students re-see questions they answered recently
 * and recall the answer instead of solving.
 *
 * Policy, in priority order:
 *   1. Never-attempted questions first (shuffled for variety).
 *   2. Then already-seen questions, least-recently-attempted first.
 *   3. RC/MSR passages: a question counts as seen if ANY question sharing
 *      its passage context was attempted — the passage is what gets
 *      memorized, not just the stem (see `withContextLastSeen`).
 *   4. Small pools degrade gracefully: a request for N always returns
 *      min(N, pool) — repeats are allowed rather than short/empty sets,
 *      and the result reports how many repeats were forced so the UI can
 *      say so.
 *
 * Attempt history comes from `practice_attempts` (server-side, so the
 * policy is cross-device). sessionStorage is used ONLY for active-attempt
 * order stability (`restoreDeckOrder`) — a hard refresh mid-attempt must
 * not reshuffle the deck under the student.
 *
 * Topic drills order (not sample) their whole bank via
 * `pickFreshOrder` in `@/lib/topic-skill` — same unseen-first + LRU rules;
 * this module houses the sampling side and the shared constants.
 */

import { seededShuffle } from "@/lib/topic-skill"

/**
 * How recent an attempt has to be for a repeat to count as "recently seen"
 * in UI messaging. 3 days: topic banks run ~20-60 questions and the full
 * bank ~1,900, so a student drilling daily cycles a filtered pool within a
 * few sessions — inside this window they plausibly still remember the
 * answer; beyond it a repeat is ordinary spaced re-exposure. Ordering
 * already pushes ALL seen questions behind unseen ones regardless of this
 * value — it only classifies, never excludes.
 */
export const RECENT_SEEN_COOLDOWN_MS = 3 * 24 * 60 * 60 * 1000

/**
 * How long a persisted active-attempt deck stays restorable after the last
 * answer. 6 hours: longer than any plausible single sitting (sessions run
 * 10-45 min), short enough that returning tomorrow in a long-lived tab
 * starts a fresh attempt with fresh alternatives.
 */
export const ACTIVE_DECK_TTL_MS = 6 * 60 * 60 * 1000

/**
 * question id -> most recent attempt (epoch ms) from `practice_attempts`
 * rows. Order-independent (keeps the max), defensive against null ids and
 * unparseable timestamps.
 */
export function buildLastSeenMap(
  rows:
    | ReadonlyArray<{ question_id: string | null; created_at: string | null }>
    | null
    | undefined
): Map<string, number> {
  const out = new Map<string, number>()
  for (const row of rows ?? []) {
    const id = row.question_id
    if (!id) continue
    const at = row.created_at ? new Date(row.created_at).getTime() : NaN
    if (Number.isNaN(at)) continue
    const prev = out.get(id)
    if (prev === undefined || at > prev) out.set(id, at)
  }
  return out
}

/**
 * Propagate seen-ness across passage/set groups: every question sharing a
 * context inherits the group's most recent member attempt. This is what
 * stops "answered 2 of the passage's 4 questions yesterday, got served the
 * other 2 as 'fresh' today" — the student already knows the passage.
 */
export function withContextLastSeen<Q extends { id: string; context?: string }>(
  questions: readonly Q[],
  lastSeen: ReadonlyMap<string, number>
): Map<string, number> {
  const out = new Map<string, number>()
  const groupMax = new Map<string, number>()
  for (const q of questions) {
    const own = lastSeen.get(q.id) ?? 0
    if (own > 0) out.set(q.id, own)
    const ctx = q.context?.trim()
    if (ctx) groupMax.set(ctx, Math.max(groupMax.get(ctx) ?? 0, own))
  }
  for (const q of questions) {
    const ctx = q.context?.trim()
    if (!ctx) continue
    const g = groupMax.get(ctx) ?? 0
    if (g > (out.get(q.id) ?? 0)) out.set(q.id, g)
  }
  return out
}

export interface FreshSelection<T> {
  picked: T[]
  /** Picked questions the student has attempted before (any time). */
  repeatCount: number
  /** Picked repeats attempted within RECENT_SEEN_COOLDOWN_MS of `now`. */
  recentRepeatCount: number
}

/** Full fresh-first ordering of a pool: unseen (seeded shuffle), then seen LRU. */
function orderFresh<T extends { id: string }>(
  pool: readonly T[],
  lastSeenAt: ReadonlyMap<string, number>,
  seed: number
): T[] {
  const unseen: T[] = []
  const seen: Array<{ item: T; at: number }> = []
  for (const item of pool) {
    const at = lastSeenAt.get(item.id) ?? 0
    if (at === 0) unseen.push(item)
    else seen.push({ item, at })
  }
  seen.sort((a, b) => a.at - b.at)
  return [...seededShuffle(unseen, seed), ...seen.map((s) => s.item)]
}

interface AnswerBalanceQuestion {
  id: string
  type?: string
  correctAnswerLetter?: string
  difficulty?: string
}

const ANSWER_LETTERS = ["A", "B", "C", "D", "E"] as const

/**
 * Reorder only Data Sufficiency slots so one sufficiency outcome cannot form
 * an obvious streak while other answer patterns are available. The source
 * bank intentionally keeps its authored answers; this is a delivery guard,
 * not answer-key relabeling.
 *
 * Fresh/seen status and difficulty stay fixed at each slot. That matters:
 * answer balancing must never pull a repeat ahead of an unseen question or
 * turn an adaptive Foundation-first drill into an Advanced-first one. Within
 * each such group, answer letters rotate A-E while preserving authored order
 * inside a letter bucket. Non-DS questions never move.
 */
export function balanceDataSufficiencyOrder<Q extends AnswerBalanceQuestion>(
  ordered: readonly Q[],
  options: {
    lastSeenAt?: ReadonlyMap<string, number>
    seed?: number
  } = {}
): Q[] {
  const lastSeenAt = options.lastSeenAt
  const seed = options.seed ?? 0
  const groupKey = (q: Q) =>
    `${q.difficulty ?? "all"}:${lastSeenAt ? (lastSeenAt.has(q.id) ? "seen" : "unseen") : "all"}`

  const groups = new Map<string, Q[]>()
  for (const q of ordered) {
    if (q.type !== "Data Sufficiency") continue
    const key = groupKey(q)
    const list = groups.get(key)
    if (list) list.push(q)
    else groups.set(key, [q])
  }

  const balanced = new Map<string, Q[]>()
  let groupIndex = 0
  for (const [key, items] of groups) {
    const buckets = new Map<string, Q[]>(
      ANSWER_LETTERS.map((letter) => [letter, []])
    )
    const unknown: Q[] = []
    for (const item of items) {
      const bucket = buckets.get(item.correctAnswerLetter ?? "")
      if (bucket) bucket.push(item)
      else unknown.push(item)
    }

    const out: Q[] = []
    let cursor = Math.abs(seed + groupIndex) % ANSWER_LETTERS.length
    while (out.length < items.length - unknown.length) {
      let found = false
      for (let step = 0; step < ANSWER_LETTERS.length; step++) {
        const index = (cursor + step) % ANSWER_LETTERS.length
        const bucket = buckets.get(ANSWER_LETTERS[index])!
        const next = bucket.shift()
        if (!next) continue
        out.push(next)
        cursor = (index + 1) % ANSWER_LETTERS.length
        found = true
        break
      }
      if (!found) break
    }
    balanced.set(key, [...out, ...unknown])
    groupIndex += 1
  }

  const cursors = new Map<string, number>()
  return ordered.map((q) => {
    if (q.type !== "Data Sufficiency") return q
    const key = groupKey(q)
    const index = cursors.get(key) ?? 0
    cursors.set(key, index + 1)
    return balanced.get(key)?.[index] ?? q
  })
}

function countRepeats<T extends { id: string }>(
  picked: readonly T[],
  lastSeenAt: ReadonlyMap<string, number>,
  now: number
): { repeatCount: number; recentRepeatCount: number } {
  let repeatCount = 0
  let recentRepeatCount = 0
  for (const item of picked) {
    const at = lastSeenAt.get(item.id) ?? 0
    if (at === 0) continue
    repeatCount += 1
    if (now - at < RECENT_SEEN_COOLDOWN_MS) recentRepeatCount += 1
  }
  return { repeatCount, recentRepeatCount }
}

/**
 * Sample `count` questions from `pool` under the fresh-first policy.
 * Pure — never mutates `pool`. Never returns fewer than min(count, pool):
 * when unseen alternatives run out, least-recently-seen repeats fill the
 * set (and are counted in the result so the caller can surface it).
 */
export function selectFresh<T extends { id: string }>(
  pool: readonly T[],
  count: number,
  lastSeenAt: ReadonlyMap<string, number>,
  options: { seed?: number; now?: number } = {}
): FreshSelection<T> {
  const seed = options.seed ?? Date.now() % 1_000_000
  const now = options.now ?? Date.now()
  const picked = orderFresh(pool, lastSeenAt, seed).slice(
    0,
    Math.max(0, Math.min(count, pool.length))
  )
  return { picked, ...countRepeats(picked, lastSeenAt, now) }
}

/**
 * The test-builder's set plan: keep its even round-robin split across the
 * chosen sections (product semantics unchanged) but order each section's
 * bucket fresh-first, so unseen questions are drawn before any repeat.
 * Deterministic for a given seed — the builder shows this plan's repeat
 * counts BEFORE navigation, so what the UI says is exactly what runs.
 */
export function planCustomSet<T extends { id: string; section: string }>(
  pool: readonly T[],
  sections: readonly string[],
  count: number,
  lastSeenAt: ReadonlyMap<string, number>,
  options: { seed?: number; now?: number } = {}
): FreshSelection<T> {
  const seed = options.seed ?? Date.now() % 1_000_000
  const now = options.now ?? Date.now()

  const buckets = new Map<string, T[]>()
  for (const [i, sec] of sections.entries()) {
    buckets.set(
      sec,
      balanceDataSufficiencyOrder(
        orderFresh(
          pool.filter((q) => q.section === sec),
          lastSeenAt,
          seed + i
        ),
        { lastSeenAt, seed: seed + i }
      )
    )
  }

  const picked: T[] = []
  const cursors = new Map<string, number>(sections.map((s) => [s, 0]))
  let progress = true
  while (picked.length < count && progress) {
    progress = false
    for (const sec of sections) {
      if (picked.length >= count) break
      const bucket = buckets.get(sec) ?? []
      const cursor = cursors.get(sec) ?? 0
      if (cursor < bucket.length) {
        picked.push(bucket[cursor])
        cursors.set(sec, cursor + 1)
        progress = true
      }
    }
  }

  return { picked, ...countRepeats(picked, lastSeenAt, now) }
}

interface StoredDeck {
  ids: string[]
  savedAt: number
}

/** Serialized deck for sessionStorage — pairs with `restoreDeckOrder`. */
export function serializeDeck(ids: readonly string[], savedAt: number): string {
  return JSON.stringify({ ids: [...ids], savedAt } satisfies StoredDeck)
}

/**
 * Active-attempt stability: reorder `incoming` (a fresh server-provided
 * deck) to a previously stored order, so a hard refresh mid-attempt shows
 * the SAME questions in the SAME order instead of a Date.now()-seeded
 * reshuffle. Returns null — meaning "use the fresh deck" — unless ALL
 * guards pass:
 *   - `rawStored` parses to { ids: string[], savedAt: number }
 *   - savedAt is within ACTIVE_DECK_TTL_MS of `now` (stale = new attempt)
 *   - stored ids are exactly the incoming id-set (a changed pool, a
 *     different custom set, or a redo-missed subset must never be
 *     resurrected onto the wrong deck)
 * Pure; never mutates `incoming`.
 */
export function restoreDeckOrder<Q extends { id: string }>(
  rawStored: string | null | undefined,
  incoming: readonly Q[],
  now: number
): Q[] | null {
  if (!rawStored) return null
  let parsed: unknown
  try {
    parsed = JSON.parse(rawStored)
  } catch {
    return null
  }
  if (!parsed || typeof parsed !== "object") return null
  const { ids, savedAt } = parsed as { ids?: unknown; savedAt?: unknown }
  if (!Array.isArray(ids) || typeof savedAt !== "number") return null
  if (now - savedAt > ACTIVE_DECK_TTL_MS) return null
  if (ids.length !== incoming.length) return null

  const byId = new Map(incoming.map((q) => [q.id, q]))
  if (byId.size !== incoming.length) return null
  const out: Q[] = []
  for (const id of ids) {
    if (typeof id !== "string") return null
    const q = byId.get(id)
    if (!q) return null
    byId.delete(id) // a duplicated stored id must not pass the set check
    out.push(q)
  }
  return out
}
