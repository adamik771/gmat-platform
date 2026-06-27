import { getSupabaseService } from "@/lib/supabase/service"
import { logEmailEvent } from "@/lib/outreach/queue"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

// 1x1 transparent GIF.
const PIXEL = Buffer.from(
  "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  "base64"
)

/**
 * Open-tracking pixel: emails embed <img src="/api/email/open?id=<queueId>">.
 * Records an 'open' event (best-effort) and always returns the pixel.
 */
export async function GET(request: Request) {
  const id = new URL(request.url).searchParams.get("id")
  if (id) {
    try {
      await logEmailEvent(getSupabaseService(), { queueId: id, type: "open" })
    } catch {
      /* tracking must never block the pixel */
    }
  }
  return new Response(PIXEL, {
    status: 200,
    headers: {
      "Content-Type": "image/gif",
      "Cache-Control": "no-store, max-age=0",
      "Content-Length": String(PIXEL.length),
    },
  })
}
