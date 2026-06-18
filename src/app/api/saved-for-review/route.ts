import { createSupabaseServer } from "@/lib/supabase/server"
import { getUserState, patchUserState } from "@/lib/user-state"

/**
 * POST /api/saved-for-review — toggle a question's "save for review" flag.
 *
 * Body: { questionId: string, action: "add" | "remove" }
 *
 * Storage: `user_state.saved_for_review` — string[] of question ids.
 * Capped at 100; oldest entries trim first when over the cap. Idempotent —
 * adding an already-saved id is a no-op; removing an absent id is a no-op.
 *
 * Downstream effect: `buildSpacedReviewQueue` reads this list and adds
 * a +50 priority boost to those question ids, surfacing them at the
 * top of /review/all with a "saved" badge.
 */

const MAX_SAVED = 100
const QUESTION_ID_RE = /^[a-z0-9-]{2,80}-q\d{1,4}$/

export async function POST(request: Request) {
  const supabase = await createSupabaseServer()
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()

  if (authError || !user) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }

  let body: { questionId?: unknown; action?: unknown }
  try {
    body = (await request.json()) as typeof body
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 })
  }

  const questionId = body.questionId
  const action = body.action

  if (typeof questionId !== "string" || !QUESTION_ID_RE.test(questionId)) {
    return Response.json(
      { error: "questionId must match `<slug>-q<number>` format" },
      { status: 400 }
    )
  }
  if (action !== "add" && action !== "remove") {
    return Response.json(
      { error: "action must be 'add' or 'remove'" },
      { status: 400 }
    )
  }

  // Read existing list with defensive parsing (state is user-controlled —
  // never throw on a malformed shape).
  const state = await getUserState(supabase, user)
  const rawList = state.saved_for_review
  const existing: string[] = Array.isArray(rawList)
    ? rawList.filter((x): x is string => typeof x === "string")
    : []

  let next: string[]
  if (action === "add") {
    if (existing.includes(questionId)) {
      // Idempotent — no-op.
      next = existing
    } else {
      next = [...existing, questionId]
      while (next.length > MAX_SAVED) next.shift()
    }
  } else {
    next = existing.filter((id) => id !== questionId)
  }

  const { error } = await patchUserState(supabase, user, { saved_for_review: next })
  if (error) {
    return Response.json({ error }, { status: 500 })
  }

  return Response.json({ ok: true, savedCount: next.length, saved: next.includes(questionId) })
}
