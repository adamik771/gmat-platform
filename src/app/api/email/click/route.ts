import { getSupabaseService } from "@/lib/supabase/service"
import { logEmailEvent } from "@/lib/outreach/queue"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.zakariangmat.com"
).replace(/\/$/, "")

/**
 * Click-tracking redirect: email CTAs route through
 * /api/email/click?id=<queueId>&u=<destination>. Records a 'click' event
 * (best-effort), then redirects.
 *
 * Open-redirect guard: only ever redirects to our own origin; anything else
 * falls back to the homepage. Since every CTA we emit is a same-origin path,
 * this loses nothing.
 */
export async function GET(request: Request) {
  const params = new URL(request.url).searchParams
  const id = params.get("id")
  const u = params.get("u") ?? ""

  const origin = new URL(SITE_URL).origin
  let dest = SITE_URL
  try {
    const target = new URL(u, SITE_URL)
    if (target.origin === origin) dest = target.toString()
  } catch {
    /* keep the safe default */
  }

  if (id) {
    try {
      await logEmailEvent(getSupabaseService(), {
        queueId: id,
        type: "click",
        meta: { url: dest },
      })
    } catch {
      /* tracking must never block the redirect */
    }
  }
  return Response.redirect(dest, 302)
}
