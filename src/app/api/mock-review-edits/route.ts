import { createSupabaseServer } from "@/lib/supabase/server"
import { getUserState, patchUserState } from "@/lib/user-state"

const VALID_SECTIONS = new Set(["Quant", "Verbal", "DI"])

interface EditEntry {
  questionId: string
  /** Pre-edit selected option index (0..N) or null if the student
   *  hadn't picked anything before the review phase. */
  preEditAnswer: number | null
  /** Post-edit selected option index (0..N) or null if cleared. */
  postEditAnswer: number | null
}

/**
 * POST /api/mock-review-edits — persist the list of answer changes the
 * student made during a mock's end-of-section review window. The mock
 * report compares these against the correct answer to show a
 * "review/edit coach" readout: X edits, Y helped, Z hurt.
 *
 * Shape written to `user_metadata.mock_review_edits`:
 *
 *   { [date: "YYYY-MM-DD"]: { Quant?: EditEntry[], Verbal?: EditEntry[], DI?: EditEntry[] } }
 *
 * Like mock_flags, the per-section array fully replaces each POST so a
 * retake is idempotent.
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

  const body = (await request.json()) as {
    dateIso?: string
    section?: string
    edits?: unknown
  }

  if (
    typeof body.dateIso !== "string" ||
    !/^\d{4}-\d{2}-\d{2}$/.test(body.dateIso)
  ) {
    return Response.json(
      { error: "dateIso must be a YYYY-MM-DD string" },
      { status: 400 }
    )
  }
  if (typeof body.section !== "string" || !VALID_SECTIONS.has(body.section)) {
    return Response.json(
      { error: "section must be Quant, Verbal, or DI" },
      { status: 400 }
    )
  }
  if (!Array.isArray(body.edits)) {
    return Response.json(
      { error: "edits must be an array" },
      { status: 400 }
    )
  }

  // Validate + coerce each entry. Defensive clean — drop anything that
  // doesn't look right rather than 400ing the whole batch, because a
  // single malformed row shouldn't wipe out good data from the same mock.
  const cleaned: EditEntry[] = []
  for (const raw of body.edits as unknown[]) {
    if (!raw || typeof raw !== "object") continue
    const r = raw as Record<string, unknown>
    if (typeof r.questionId !== "string" || r.questionId.length > 100) continue
    const pre =
      typeof r.preEditAnswer === "number" ? r.preEditAnswer : null
    const post =
      typeof r.postEditAnswer === "number" ? r.postEditAnswer : null
    cleaned.push({
      questionId: r.questionId,
      preEditAnswer: pre,
      postEditAnswer: post,
    })
    if (cleaned.length >= 10) break // real GMAT caps edits at 3; 10 is a generous ceiling
  }

  const state = await getUserState(supabase, user)
  const existing =
    (state.mock_review_edits as
      | Record<string, Partial<Record<string, EditEntry[]>>>
      | undefined) ?? {}
  const existingForDate = existing[body.dateIso] ?? {}
  const merged: Record<string, Partial<Record<string, EditEntry[]>>> = {
    ...existing,
    [body.dateIso]: { ...existingForDate, [body.section]: cleaned },
  }
  // Keep only the most recent ~24 mock dates so the map can't grow unbounded.
  const next = Object.fromEntries(
    Object.entries(merged)
      .sort(([a], [b]) => b.localeCompare(a))
      .slice(0, 24)
  )

  const { error } = await patchUserState(supabase, user, { mock_review_edits: next })

  if (error) {
    return Response.json({ error }, { status: 500 })
  }

  return Response.json({ ok: true })
}
