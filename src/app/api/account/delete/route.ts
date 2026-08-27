import { createSupabaseServer } from "@/lib/supabase/server"
import { getSupabaseService } from "@/lib/supabase/service"
import {
  enqueueAccountDeletion,
  processAccountDeletion,
} from "@/lib/account-deletion"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

/**
 * GDPR right-to-erasure. The durable job is written before Auth is touched,
 * so every accepted request can finish without the user remaining signed in.
 */
export async function POST() {
  const supabase = await createSupabaseServer()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }

  let service
  try {
    service = getSupabaseService()
  } catch {
    console.error("[account/delete] service client unavailable")
    return Response.json(
      { error: "Account deletion is temporarily unavailable." },
      { status: 503 },
    )
  }

  let job
  try {
    job = await enqueueAccountDeletion(service, {
      userId: user.id,
      email: user.email ?? null,
    })
  } catch {
    console.error("[account/delete] could not persist deletion request")
    return Response.json(
      { error: "Account deletion is temporarily unavailable." },
      { status: 503 },
    )
  }

  const result = await processAccountDeletion(service, job)
  if (result.complete) {
    return Response.json({ ok: true, status: "complete" })
  }

  if (!result.authRemoved) {
    return Response.json(
      {
        ok: false,
        status: "pending",
        message: "Account deletion is queued and will be retried automatically.",
      },
      { status: 202 },
    )
  }

  // Auth is gone, but database erasure has not committed yet. 202 is
  // intentionally not a claim of completion; the durable worker owns retry.
  return Response.json({ ok: false, status: "pending" }, { status: 202 })
}
