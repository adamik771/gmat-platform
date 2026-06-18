import { createSupabaseServer } from "@/lib/supabase/server"
import {
  recordReviewAttempt,
  type SpacedItemKind,
} from "@/lib/spaced-review"
import { getUserState, patchUserState, type UserState } from "@/lib/user-state"

/**
 * POST /api/spaced-review — record the result of a spaced-review attempt.
 *
 * Body:
 *   {
 *     itemId: string             // e.g. "drill:reading-quant-01-mindset::micro-drill-1"
 *     kind: "question" | "concept" | "drill" | "checkpoint"
 *     confidence: 1 | 2 | 3 | 4 | 5
 *   }
 *
 * Side-effects (stored in the user_state table, NOT user_metadata — these
 * grow with usage and would bloat the auth cookie):
 *   - Writes `confidence_log[itemId] = { confidence, ts }`
 *   - For drill/checkpoint: also writes `{kind}_reviews[itemId] = ts`
 */

const VALID_KINDS: Set<SpacedItemKind> = new Set([
  "question",
  "concept",
  "drill",
  "checkpoint",
])

export async function POST(request: Request) {
  const supabase = await createSupabaseServer()
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()

  if (authError || !user) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }

  let body: {
    itemId?: unknown
    kind?: unknown
    confidence?: unknown
  }
  try {
    body = (await request.json()) as typeof body
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 })
  }

  const itemId = body.itemId
  const kind = body.kind
  const confidence = body.confidence

  if (typeof itemId !== "string" || itemId.length < 3 || itemId.length > 200) {
    return Response.json({ error: "itemId is required" }, { status: 400 })
  }
  if (typeof kind !== "string" || !VALID_KINDS.has(kind as SpacedItemKind)) {
    return Response.json(
      { error: "kind must be one of question | concept | drill | checkpoint" },
      { status: 400 }
    )
  }
  if (
    typeof confidence !== "number" ||
    !Number.isInteger(confidence) ||
    confidence < 1 ||
    confidence > 5
  ) {
    return Response.json(
      { error: "confidence must be an integer 1-5" },
      { status: 400 }
    )
  }

  const state = await getUserState(supabase, user)
  const nextMeta = recordReviewAttempt(
    state,
    { id: itemId, kind: kind as SpacedItemKind },
    confidence,
    Date.now()
  )

  // Persist only the keys recordReviewAttempt can touch: confidence_log for any
  // kind, plus the kind-specific review log for drill/checkpoint.
  const patch: UserState = { confidence_log: nextMeta.confidence_log }
  if (kind === "drill") patch.drill_reviews = nextMeta.drill_reviews
  else if (kind === "checkpoint") patch.checkpoint_reviews = nextMeta.checkpoint_reviews

  const { error } = await patchUserState(supabase, user, patch)
  if (error) {
    return Response.json({ error }, { status: 500 })
  }

  return Response.json({ ok: true })
}
