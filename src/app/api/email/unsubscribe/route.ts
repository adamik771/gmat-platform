import { getSupabaseService } from "@/lib/supabase/service"
import { unsubscribeByToken } from "@/lib/outreach/consent"
import { logEmailEvent } from "@/lib/outreach/queue"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

/**
 * One-click unsubscribe (RFC 8058). The email's `List-Unsubscribe-Post` header
 * points here; Gmail/Apple Mail POST to it directly. The visible in-body link
 * points at the /unsubscribe confirmation page, which also POSTs here on
 * confirm.
 *
 * Only POST mutates — GET redirects to the confirmation page so a link
 * prefetch / scanner can't unsubscribe anyone by accident. Always returns a
 * generic ok (idempotent; never leaks whether a token was valid).
 */
export async function POST(request: Request) {
  const token = new URL(request.url).searchParams.get("token")
  if (!token) {
    return Response.json({ ok: false, error: "missing token" }, { status: 400 })
  }
  let service
  try {
    service = getSupabaseService()
  } catch {
    return Response.json({ ok: false, error: "unavailable" }, { status: 503 })
  }
  const res = await unsubscribeByToken(service, token)
  if (res.ok) {
    await logEmailEvent(service, {
      email: res.email,
      type: "unsubscribe",
      meta: { via: "one-click" },
    })
  }
  return Response.json({ ok: true })
}

export function GET(request: Request) {
  const token = new URL(request.url).searchParams.get("token") ?? ""
  const url = new URL(
    `/unsubscribe?token=${encodeURIComponent(token)}`,
    request.url
  )
  return Response.redirect(url, 302)
}
