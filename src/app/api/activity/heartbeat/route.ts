import { createSupabaseServer } from "@/lib/supabase/server"
import { reportDataFailure } from "@/lib/server-data-observability"

export async function POST(request: Request) {
  const supabase = await createSupabaseServer()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }

  let seconds: unknown
  try {
    const body = (await request.json()) as { seconds?: unknown }
    seconds = body.seconds
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 })
  }

  if (!Number.isInteger(seconds) || (seconds as number) < 1 || (seconds as number) > 120) {
    return Response.json(
      { error: "seconds must be an integer between 1 and 120" },
      { status: 400 },
    )
  }

  const { error } = await supabase.rpc("record_user_activity", {
    p_active_seconds: seconds as number,
  })
  if (error) {
    reportDataFailure(error, {
      surface: "activity-heartbeat",
      operation: "record",
      rpc: "record_user_activity",
    })
    return Response.json({ error: "Unable to record activity" }, { status: 503 })
  }

  return Response.json({ ok: true })
}
