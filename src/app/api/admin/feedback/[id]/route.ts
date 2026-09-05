import { createSupabaseServer } from "@/lib/supabase/server"
import { getSupabaseService } from "@/lib/supabase/service"
import { isAdmin } from "@/lib/admin-auth"

const ALLOWED_STATUSES = new Set([
  "open",
  "reviewed",
  "fixed",
  "wontfix",
  "duplicate",
])

/**
 * PATCH /api/admin/feedback/[id] — update the triage status of a row in
 * `beta_feedback`. Admin-only (trusted role or bootstrap allowlist); writes use the
 * service-role client because the standard RLS only lets users edit
 * their own rows.
 *
 * Body: { status: "open" | "reviewed" | "fixed" | "wontfix" | "duplicate" }
 *
 * Returns 404 for non-admins (matches the page-level gate so we never
 * confirm the route exists to non-allowlisted callers).
 */
export async function PATCH(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const supabase = await createSupabaseServer()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!isAdmin(user)) {
    return Response.json({ error: "Not found" }, { status: 404 })
  }

  const { id } = await context.params
  if (!id || typeof id !== "string") {
    return Response.json({ error: "Invalid id" }, { status: 400 })
  }

  let body: { status?: unknown }
  try {
    body = (await request.json()) as { status?: unknown }
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 })
  }

  const status = body.status
  if (typeof status !== "string" || !ALLOWED_STATUSES.has(status)) {
    return Response.json(
      { error: `status must be one of: ${Array.from(ALLOWED_STATUSES).join(" | ")}` },
      { status: 400 }
    )
  }

  const service = getSupabaseService()
  const { error, data } = await service
    .from("beta_feedback")
    .update({ status })
    .eq("id", id)
    .select("id, status")
    .single()

  if (error) {
    return Response.json(
      { error: error.message ?? "Update failed" },
      { status: 500 }
    )
  }

  return Response.json({ ok: true, id: data?.id ?? id, status: data?.status ?? status })
}
