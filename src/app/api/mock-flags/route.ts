import { createSupabaseServer } from "@/lib/supabase/server"

const VALID_SECTIONS = new Set(["Quant", "Verbal", "DI"])

/**
 * POST /api/mock-flags — persist the per-section list of flagged question
 * IDs from a mock run. Shape written to `user_metadata.mock_flags`:
 *
 *   { [dateIso: "YYYY-MM-DD"]: { Quant?: string[], Verbal?: string[], DI?: string[] } }
 *
 * The per-section array is replaced each time a section finishes, so
 * re-running a section (or finalising after auto-timeout) stays
 * idempotent. Empty arrays are allowed — they clear any previously
 * stored flags for that section.
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
    flaggedQuestionIds?: unknown
  }

  const dateIso = body.dateIso
  const section = body.section
  const flagged = body.flaggedQuestionIds

  if (typeof dateIso !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(dateIso)) {
    return Response.json(
      { error: "dateIso must be a YYYY-MM-DD string" },
      { status: 400 }
    )
  }
  if (typeof section !== "string" || !VALID_SECTIONS.has(section)) {
    return Response.json(
      { error: "section must be Quant, Verbal, or DI" },
      { status: 400 }
    )
  }
  if (
    !Array.isArray(flagged) ||
    flagged.some((v) => typeof v !== "string")
  ) {
    return Response.json(
      { error: "flaggedQuestionIds must be an array of strings" },
      { status: 400 }
    )
  }

  // Defensive cap — a mock section maxes out around 23 questions; 50 is
  // already a generous ceiling against a hostile caller.
  const cleaned = (flagged as string[]).slice(0, 50)

  const existing =
    (user.user_metadata?.mock_flags as
      | Record<string, Partial<Record<string, string[]>>>
      | undefined) ?? {}
  const existingForDate = existing[dateIso] ?? {}
  const next = {
    ...existing,
    [dateIso]: { ...existingForDate, [section]: cleaned },
  }

  const { error } = await supabase.auth.updateUser({
    data: { mock_flags: next },
  })

  if (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }

  return Response.json({ ok: true })
}
