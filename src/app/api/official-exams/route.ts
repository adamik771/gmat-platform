import { createSupabaseServer } from "@/lib/supabase/server"
import { blockIfNoAccess } from "@/lib/entitlements"
import { getUserState, patchUserState } from "@/lib/user-state"
import {
  MAX_OFFICIAL_ENTRIES,
  parseOfficialExamEntries,
  validateOfficialExamEntry,
} from "@/lib/official-exams"

/**
 * POST /api/official-exams — persist official mba.com practice-exam
 * scores to the `user_state.official_exam_scores` value.
 *
 * The product treats first attempts on the six official practice exams as
 * the score signal; the student types each result in here after sitting
 * the exam under full conditions. Stored shape (canonical type + parser +
 * validator live in src/lib/official-exams.ts, shared with the client so
 * the two can't drift):
 *
 *   official_exam_scores: Array<{
 *     date: string          // ISO YYYY-MM-DD, unique key
 *     total: number         // 205-805
 *     quant?: number|null   // 60-90
 *     verbal?: number|null
 *     di?: number|null
 *     label?: string        // optional free text, <= 60 chars
 *     examNumber?: number   // 1-6; absent = legacy/unclassified entry
 *     attemptNumber?: number // >= 1; requires examNumber; 2+ = retake
 *   }>
 *
 * Body: { action: "add" | "remove", entry?: {...}, date?: string }.
 * "add" upserts by date (array kept sorted ascending by date, hard cap
 * 12 entries — new dates beyond the cap are rejected). "remove" deletes
 * the entry with the given date. Tagging a legacy entry with its exam
 * number is a plain "add" upsert on the same date.
 */

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/

export async function POST(request: Request) {
  const supabase = await createSupabaseServer()
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()

  if (authError || !user) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }

  const blocked = await blockIfNoAccess(supabase, user)
  if (blocked) return blocked

  let body: { action?: unknown; entry?: unknown; date?: unknown }
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 })
  }

  if (body.action !== "add" && body.action !== "remove") {
    return Response.json(
      { error: 'action must be "add" or "remove"' },
      { status: 400 }
    )
  }

  const state = await getUserState(supabase, user)
  const entries = parseOfficialExamEntries(state)

  if (body.action === "remove") {
    if (typeof body.date !== "string" || !DATE_RE.test(body.date)) {
      return Response.json(
        { error: "date must be an ISO date (YYYY-MM-DD)" },
        { status: 400 }
      )
    }
    const next = entries.filter((e) => e.date !== body.date)
    if (next.length === entries.length) {
      return Response.json(
        { error: "No entry found for that date" },
        { status: 404 }
      )
    }
    const { error } = await patchUserState(supabase, user, {
      official_exam_scores: next,
    })
    if (error) {
      return Response.json({ error }, { status: 500 })
    }
    return Response.json({ ok: true, official_exam_scores: next })
  }

  // action === "add". An official is logged AFTER it was taken — one day of
  // UTC grace absorbs clients whose local calendar is ahead of the server's.
  const maxIso = new Date(Date.now() + 86_400_000).toISOString().slice(0, 10)
  const validated = validateOfficialExamEntry(body.entry, maxIso)
  if ("error" in validated) {
    return Response.json({ error: validated.error }, { status: 400 })
  }
  const entry = validated.entry

  const existingIndex = entries.findIndex((e) => e.date === entry.date)
  if (existingIndex === -1 && entries.length >= MAX_OFFICIAL_ENTRIES) {
    return Response.json(
      {
        error: `Cannot store more than ${MAX_OFFICIAL_ENTRIES} official exam scores`,
      },
      { status: 400 }
    )
  }

  const next =
    existingIndex >= 0
      ? entries.map((e, i) => (i === existingIndex ? entry : e))
      : [...entries, entry]
  next.sort((a, b) => a.date.localeCompare(b.date))

  const { error } = await patchUserState(supabase, user, {
    official_exam_scores: next,
  })
  if (error) {
    return Response.json({ error }, { status: 500 })
  }

  return Response.json({ ok: true, official_exam_scores: next })
}
