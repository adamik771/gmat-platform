import { processAccountDeletion } from "@/lib/account-deletion"
import { getSupabaseService } from "@/lib/supabase/service"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const BATCH_SIZE = 25

/** Retry durable erasure jobs. Vercel supplies Authorization: Bearer CRON_SECRET. */
export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET
  if (!secret) {
    return Response.json(
      { ok: false, error: "CRON_SECRET unset - refusing to run." },
      { status: 503 },
    )
  }
  if (request.headers.get("authorization") !== `Bearer ${secret}`) {
    return Response.json({ ok: false, error: "Unauthorized" }, { status: 401 })
  }

  let service
  try {
    service = getSupabaseService()
  } catch {
    return Response.json(
      { ok: false, error: "Service unavailable" },
      { status: 503 },
    )
  }

  const { data, error } = await service
    .from("account_deletion_jobs")
    .select("id, user_id, attempts")
    .lte("next_attempt_at", new Date().toISOString())
    .order("requested_at", { ascending: true })
    .limit(BATCH_SIZE)

  if (error) {
    console.error("[account-deletion] could not load retry jobs")
    return Response.json(
      { ok: false, error: "Could not load deletion jobs" },
      { status: 500 },
    )
  }

  let completed = 0
  let pending = 0
  for (const row of data ?? []) {
    const result = await processAccountDeletion(service, {
      id: row.id as string,
      userId: row.user_id as string,
      attempts: row.attempts as number,
    })
    if (result.complete) completed += 1
    else pending += 1
  }

  return Response.json({ ok: true, checked: data?.length ?? 0, completed, pending })
}
