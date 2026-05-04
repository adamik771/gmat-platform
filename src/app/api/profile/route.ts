import { createSupabaseServer } from "@/lib/supabase/server"

/**
 * POST /api/profile — persist editable profile fields to Supabase Auth's
 * `user_metadata`. Accepts a partial `{ full_name?, exam_date? }` body;
 * anything else is ignored. Empty strings clear the field.
 *
 * - `full_name` is a free-text string, capped at 120 chars.
 * - `exam_date` is an ISO date (`YYYY-MM-DD`). Null or empty clears it.
 *   No future/past validation — users legitimately log past exam dates.
 *
 * Email changes go through a separate flow (Supabase's `updateUser({ email })`
 * sends a confirmation link) and are NOT handled here — we'd need the UI to
 * show "check your inbox" state. The settings page renders email read-only.
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
    full_name?: string | null
    exam_date?: string | null
    /** Persona flag: native English speaker. `false` layers the Int'l
     *  Verbal-weighted persona on top of the baseline-derived one. */
    english_native?: boolean | null
    /** Persona flag: has taken the real GMAT before. Layers the
     *  Retaker persona on top of the baseline-derived one. */
    prior_gmat_attempt?: boolean | null
  }

  const patch: Record<string, string | boolean | null> = {}

  if (body.full_name !== undefined) {
    if (body.full_name === null) {
      patch.full_name = null
    } else if (typeof body.full_name !== "string") {
      return Response.json({ error: "full_name must be a string" }, { status: 400 })
    } else {
      const trimmed = body.full_name.trim().slice(0, 120)
      patch.full_name = trimmed === "" ? null : trimmed
    }
  }

  if (body.exam_date !== undefined) {
    if (body.exam_date === null || body.exam_date === "") {
      patch.exam_date = null
    } else if (
      typeof body.exam_date !== "string" ||
      !/^\d{4}-\d{2}-\d{2}$/.test(body.exam_date)
    ) {
      return Response.json(
        { error: "exam_date must be an ISO date (YYYY-MM-DD) or null" },
        { status: 400 }
      )
    } else {
      patch.exam_date = body.exam_date
    }
  }

  if (body.english_native !== undefined) {
    if (body.english_native === null || typeof body.english_native === "boolean") {
      patch.english_native = body.english_native
    } else {
      return Response.json(
        { error: "english_native must be a boolean or null" },
        { status: 400 }
      )
    }
  }

  if (body.prior_gmat_attempt !== undefined) {
    if (
      body.prior_gmat_attempt === null ||
      typeof body.prior_gmat_attempt === "boolean"
    ) {
      patch.prior_gmat_attempt = body.prior_gmat_attempt
    } else {
      return Response.json(
        { error: "prior_gmat_attempt must be a boolean or null" },
        { status: 400 }
      )
    }
  }

  if (Object.keys(patch).length === 0) {
    return Response.json({ ok: true, unchanged: true })
  }

  const { error } = await supabase.auth.updateUser({ data: patch })
  if (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }

  return Response.json({ ok: true })
}
