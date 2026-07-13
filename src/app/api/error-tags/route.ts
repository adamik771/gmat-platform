import { createSupabaseServer } from "@/lib/supabase/server"
import { blockIfNoAccess } from "@/lib/entitlements"
import {
  ALL_TAG_IDS,
  ROOT_CAUSE_IDS,
  type ErrorTag,
} from "@/app/(app)/error-log/constants"

const VALID_TAGS: readonly string[] = ALL_TAG_IDS
const VALID_ROOT_CAUSES: readonly string[] = ROOT_CAUSE_IDS

/**
 * POST /api/error-tags — upsert a tag / notes / reviewed flag for a single
 * `practice_attempts` row. Body: { attemptId, tag?, notes?, reviewed? }.
 * Any field omitted from the body is left unchanged on an existing row (or
 * defaulted on insert). A null `tag` clears the tag. An empty-string notes
 * clears notes.
 *
 * DELETE /api/error-tags — remove all tag metadata for an attempt.
 * Body: { attemptId }.
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

  const blocked = await blockIfNoAccess(supabase, user)
  if (blocked) return blocked

  type TagBody = {
    attemptId?: string
    tag?: ErrorTag | null
    rootCause?: string | null
    contributingCauses?: string[] | null
    notes?: string | null
    reviewed?: boolean
    remediationAssignedAt?: string | null
    remediationCompletedAt?: string | null
  }
  let body: TagBody
  try {
    body = (await request.json()) as TagBody
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 })
  }

  if (!body.attemptId || typeof body.attemptId !== "string") {
    return Response.json({ error: "attemptId required" }, { status: 400 })
  }

  // Notes: free text, but bounded — every sibling field is validated and an
  // unbounded string could stash multi-megabyte payloads rendered on
  // /error-log and dumped into the GDPR export. Same cap as beta feedback.
  if (
    body.notes !== undefined &&
    body.notes !== null &&
    (typeof body.notes !== "string" || body.notes.length > 2000)
  ) {
    return Response.json(
      { error: "notes must be a string of at most 2000 characters" },
      { status: 400 },
    )
  }

  if (
    body.tag !== undefined &&
    body.tag !== null &&
    !VALID_TAGS.includes(body.tag as ErrorTag)
  ) {
    return Response.json({ error: "invalid tag" }, { status: 400 })
  }

  if (
    body.rootCause !== undefined &&
    body.rootCause !== null &&
    !VALID_ROOT_CAUSES.includes(body.rootCause)
  ) {
    return Response.json({ error: "invalid rootCause" }, { status: 400 })
  }

  // Contributing causes: research-report spec allows up to 2 secondary
  // causes alongside the primary root cause. Must be valid codes, must
  // not include the primary (would be a tautology), and must not
  // duplicate each other.
  if (body.contributingCauses !== undefined && body.contributingCauses !== null) {
    if (!Array.isArray(body.contributingCauses)) {
      return Response.json(
        { error: "contributingCauses must be an array" },
        { status: 400 },
      )
    }
    if (body.contributingCauses.length > 2) {
      return Response.json(
        { error: "at most 2 contributing causes allowed" },
        { status: 400 },
      )
    }
    for (const c of body.contributingCauses) {
      if (typeof c !== "string" || !VALID_ROOT_CAUSES.includes(c)) {
        return Response.json(
          { error: `invalid contributing cause: ${c}` },
          { status: 400 },
        )
      }
    }
    const unique = new Set(body.contributingCauses)
    if (unique.size !== body.contributingCauses.length) {
      return Response.json(
        { error: "duplicate contributing causes" },
        { status: 400 },
      )
    }
    if (body.rootCause && unique.has(body.rootCause)) {
      return Response.json(
        { error: "contributing cause cannot equal the primary root cause" },
        { status: 400 },
      )
    }
  }

  // Remediation timestamps — ISO-string shape check. Null clears.
  for (const field of ["remediationAssignedAt", "remediationCompletedAt"] as const) {
    const v = body[field]
    if (v !== undefined && v !== null && typeof v !== "string") {
      return Response.json(
        { error: `${field} must be an ISO string or null` },
        { status: 400 },
      )
    }
    if (typeof v === "string" && Number.isNaN(new Date(v).getTime())) {
      return Response.json(
        { error: `${field} is not a valid ISO timestamp` },
        { status: 400 },
      )
    }
  }

  // Verify the attempt belongs to the user before writing — RLS will also
  // catch this, but this gives us a cleaner 404 and a safer upsert.
  const { data: attempt, error: lookupError } = await supabase
    .from("practice_attempts")
    .select("id, user_id")
    .eq("id", body.attemptId)
    .single()
  if (lookupError || !attempt || attempt.user_id !== user.id) {
    return Response.json({ error: "Attempt not found" }, { status: 404 })
  }

  // Enforce: remediation_completed_at can only be non-null if
  // remediation_assigned_at is also non-null. Check either the body
  // (if assigned_at is being set this same request) or the existing DB
  // row. Mirrors the DB-side constraint we want users to see as a 400
  // rather than a DB-check failure.
  if (
    body.remediationCompletedAt !== undefined &&
    body.remediationCompletedAt !== null
  ) {
    let assignedAt: string | null = null
    if (body.remediationAssignedAt !== undefined) {
      assignedAt = body.remediationAssignedAt
    } else {
      const { data: existing } = await supabase
        .from("error_tags")
        .select("remediation_assigned_at")
        .eq("attempt_id", body.attemptId)
        .eq("user_id", user.id)
        .maybeSingle()
      assignedAt =
        (existing as { remediation_assigned_at: string | null } | null)
          ?.remediation_assigned_at ?? null
    }
    if (!assignedAt) {
      return Response.json(
        {
          error:
            "remediationCompletedAt requires remediationAssignedAt to be set first",
        },
        { status: 400 },
      )
    }
  }

  // Build a partial row — only fields present in the body override.
  // Any user-driven write promotes the row's `confidence` to 'manual'
  // (G9), so an auto-classified row that the student touches becomes
  // their own. The column is conditionally added by
  // `__schema_migration_g9` — if it doesn't exist yet, retry without
  // it so the legacy schema still accepts writes.
  const patch: Record<string, unknown> = {
    attempt_id: body.attemptId,
    user_id: user.id,
    updated_at: new Date().toISOString(),
    confidence: "manual",
  }
  if (body.tag !== undefined) patch.tag = body.tag
  if (body.rootCause !== undefined) patch.root_cause = body.rootCause
  if (body.contributingCauses !== undefined)
    patch.contributing_causes = body.contributingCauses ?? []
  if (body.notes !== undefined) patch.notes = body.notes
  if (body.reviewed !== undefined) patch.reviewed = body.reviewed
  if (body.remediationAssignedAt !== undefined)
    patch.remediation_assigned_at = body.remediationAssignedAt
  if (body.remediationCompletedAt !== undefined)
    patch.remediation_completed_at = body.remediationCompletedAt

  let { error } = await supabase
    .from("error_tags")
    .upsert(patch, { onConflict: "attempt_id" })

  if (error && /confidence/i.test(error.message ?? "")) {
    // Pre-G9-migration fallback — retry without the new column.
    const { confidence: _drop, ...legacyPatch } = patch
    void _drop
    const retry = await supabase
      .from("error_tags")
      .upsert(legacyPatch, { onConflict: "attempt_id" })
    error = retry.error
  }

  if (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }

  return Response.json({ ok: true })
}

export async function DELETE(request: Request) {
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

  let attemptId: string | undefined
  try {
    attemptId = ((await request.json()) as { attemptId?: string }).attemptId
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 })
  }
  if (!attemptId || typeof attemptId !== "string") {
    return Response.json({ error: "attemptId required" }, { status: 400 })
  }

  const { error } = await supabase
    .from("error_tags")
    .delete()
    .eq("attempt_id", attemptId)
    .eq("user_id", user.id)

  if (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }

  return Response.json({ ok: true })
}
