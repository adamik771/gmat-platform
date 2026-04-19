import { createSupabaseServer } from "@/lib/supabase/server"

/**
 * POST /api/target-score — persist the user's target GMAT score to
 * `auth.users.raw_user_meta_data.target_score` via Supabase Auth's
 * updateUser. Accepts `{ targetScore: number | null }` — pass null to
 * clear a previously-set target.
 *
 * The GMAT Focus Edition scale is 205..805 in 10-point increments;
 * anything else is a validation error.
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

  const body = (await request.json()) as { targetScore?: number | null }
  const value = body.targetScore

  // null clears the target.
  if (value !== null) {
    // GMAT Focus Edition: 205, 215, 225, ..., 795, 805. Increment of 10 with
    // a 5-point offset from round hundreds.
    if (
      typeof value !== "number" ||
      !Number.isInteger(value) ||
      value < 205 ||
      value > 805 ||
      (value - 205) % 10 !== 0
    ) {
      return Response.json(
        { error: "targetScore must be a valid GMAT Focus score (205, 215, …, 805)" },
        { status: 400 }
      )
    }
  }

  const { error } = await supabase.auth.updateUser({
    data: { target_score: value },
  })

  if (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }

  return Response.json({ ok: true, targetScore: value })
}
