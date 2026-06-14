import { createSupabaseServer } from "@/lib/supabase/server"
import {
  getAllChapters,
  getAllQuestions,
  type ParsedQuestion,
} from "@/lib/content"
import { getReviewQueue } from "@/lib/review-queue"
import { gatherFlaggedQuestionIds } from "@/lib/mock"
import type { Section } from "@/types"

/**
 * POST /api/mixed-review
 *
 * Builds an interleaved review set. Returns `{ ids, label, section }` for
 * the client to redirect into the existing custom-session runner.
 *
 * Interleaving effect (Rohrer & Taylor 2007, Rohrer 2012): mixing problems
 * from different concepts forces the student to first identify WHICH method
 * applies before executing it — the part novices skip when they do 20
 * algebra problems in a row. Interleaved practice is better for long-term
 * retention and transfer than blocked practice, even though blocked feels
 * more productive in the moment.
 *
 * Pool allocation:
 *   With chapterSlug (end-of-chapter mixed review):
 *     3 from this chapter's problem-set pool (recent material)
 *     2 from past completed chapters (retention check)
 *     3 from last-14-day misses (spaced-retrieval)
 *     2 from top of review queue (flagged + hard misses)
 *   Without chapterSlug (global mixed review from /review):
 *     4 recent misses
 *     3 top of review queue
 *     3 from any completed-chapter pool
 *
 * Short-pool shortfall is topped up from any available pool so the student
 * always gets a full set. Final shuffle so the order interleaves rather
 * than reads as "all current-chapter first, then others."
 */
export async function POST(request: Request) {
  const supabase = await createSupabaseServer()
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()

  if (authError || !user) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }

  const body = (await request.json().catch(() => ({}))) as {
    chapterSlug?: string
    count?: number
  }

  const count = Math.min(20, Math.max(4, body.count ?? 10))
  const chapterSlug =
    typeof body.chapterSlug === "string" && /^[a-z0-9-]+$/.test(body.chapterSlug)
      ? body.chapterSlug
      : null

  const allChapters = getAllChapters()
  const current = chapterSlug
    ? allChapters.find((c) => c.slug === chapterSlug) ?? null
    : null

  // Pool 1: current chapter's problem-set question IDs (recent material).
  const currentPool: string[] = current
    ? Array.from(
        new Set(current.problemSets.flatMap((ps) => ps.questionIds))
      )
    : []

  // Pool 2: other chapters the student has actually attempted — not every
  // chapter in the catalog. Checked against user_metadata.chapter_progress
  // where any problem-set run landed (correct + total > 0).
  const chapterProgress =
    (user.user_metadata?.chapter_progress as Record<string, unknown> | undefined) ?? {}
  const otherCompletedSlugs: string[] = []
  for (const [slug, raw] of Object.entries(chapterProgress)) {
    if (slug === chapterSlug) continue
    if (!raw || typeof raw !== "object") continue
    const results = (raw as { problemSetResults?: Record<string, unknown> })
      .problemSetResults
    if (!results || typeof results !== "object") continue
    const anyAttempted = (["easy", "medium", "hard"] as const).some((d) => {
      const r = (results as Record<string, unknown>)[d]
      return (
        r &&
        typeof r === "object" &&
        typeof (r as { total?: number }).total === "number" &&
        (r as { total: number }).total > 0
      )
    })
    if (anyAttempted) otherCompletedSlugs.push(slug)
  }
  const otherPool: string[] = Array.from(
    new Set(
      otherCompletedSlugs.flatMap((slug) => {
        const ch = allChapters.find((c) => c.slug === slug)
        if (!ch) return []
        return ch.problemSets.flatMap((ps) => ps.questionIds)
      })
    )
  )

  // Pool 3: last-14-day misses (recent fragility, time-dated).
  const cutoff = new Date()
  cutoff.setDate(cutoff.getDate() - 14)
  const { data: missedRows } = await supabase
    .from("practice_attempts")
    .select("question_id, practice_sessions(created_at)")
    .eq("user_id", user.id)
    .eq("is_correct", false)
    .gte("practice_sessions.created_at", cutoff.toISOString())
    .order("practice_sessions(created_at)", { ascending: false })
    .limit(30)
  const missedIds: string[] = []
  const missedSeen = new Set<string>()
  for (const row of (missedRows ?? []) as Array<{ question_id: string }>) {
    const id = row.question_id
    if (!id || missedSeen.has(id)) continue
    missedSeen.add(id)
    missedIds.push(id)
  }

  // Pool 4: review queue top (priority-ranked, flag-boosted).
  const queue = await getReviewQueue(supabase, user.id, {
    limit: 10,
    flaggedQuestionIds: gatherFlaggedQuestionIds(user.user_metadata),
  })
  const queueIds = queue.map((c) => c.questionId)

  // Allocation
  const chosen = new Set<string>()
  const ordered: string[] = []
  const pickFrom = (pool: string[], n: number) => {
    const filtered = pool.filter((id) => !chosen.has(id))
    const shuffled = shuffle(filtered)
    for (const id of shuffled.slice(0, n)) {
      chosen.add(id)
      ordered.push(id)
    }
  }

  if (current) {
    pickFrom(currentPool, 3)
    pickFrom(otherPool, 2)
    pickFrom(missedIds, 3)
    pickFrom(queueIds, 2)
  } else {
    pickFrom(missedIds, 4)
    pickFrom(queueIds, 3)
    pickFrom(otherPool, 3)
  }

  // Top up from any pool if we're still short (e.g., new user without enough
  // completed chapters). Preserves the "always returns something useful" invariant.
  if (ordered.length < count) {
    const topUp = shuffle(
      [...currentPool, ...otherPool, ...missedIds, ...queueIds].filter(
        (id) => !chosen.has(id)
      )
    )
    for (const id of topUp) {
      if (ordered.length >= count) break
      chosen.add(id)
      ordered.push(id)
    }
  }

  // Resolve to playable questions + final interleave shuffle.
  const qIndex = new Map(getAllQuestions().map((q) => [q.id, q]))
  const resolved = ordered
    .filter((id) => {
      const q = qIndex.get(id)
      return q && q.options.length > 0
    })
    .slice(0, count)
  const finalIds = shuffle(resolved)

  const section: Section =
    (current && current.section !== "General" ? current.section : null) ??
    deriveSection(finalIds.map((id) => qIndex.get(id)!).filter(Boolean))

  const label = current ? `Mixed Review: ${current.title}` : "Mixed Review"

  return Response.json({ ids: finalIds, label, section })
}

function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice()
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function deriveSection(qs: ParsedQuestion[]): Section {
  if (qs.length === 0) return "Quant"
  const counts: Record<Section, number> = { Quant: 0, Verbal: 0, DI: 0 }
  for (const q of qs) counts[q.section]++
  const sections: Section[] = ["Quant", "Verbal", "DI"]
  return sections.reduce((a, b) => (counts[a] >= counts[b] ? a : b))
}
