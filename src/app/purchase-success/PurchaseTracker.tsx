"use client"

import { useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { markPurchaseTracked, trackEvent } from "@/lib/analytics"

/**
 * Fires the purchase_completed conversion exactly once for a purchase the
 * SERVER already verified (session ownership + paid status + recorded row) —
 * this component only renders on that verified branch of /purchase-success,
 * so the event can never be spoofed via query params or fired on an error
 * path. localStorage (keyed by the Stripe session id) dedupes refreshes of
 * the confirmation page; the ref dedupes double-mount within a render.
 * After a short beat (long enough for the event to flush) it forwards the
 * customer to the dashboard.
 *
 * Deliberately no value/currency here: passing amounts through the client
 * adds nothing trustworthy. Revenue-accurate conversions belong server-side
 * (webhook + GA4 Measurement Protocol / Meta CAPI) — documented for the
 * pre-paywall batch.
 */
export default function PurchaseTracker({
  plan,
  sessionId,
}: {
  plan: string
  sessionId: string
}) {
  const router = useRouter()
  const fired = useRef(false)

  useEffect(() => {
    if (fired.current) return
    fired.current = true
    // markPurchaseTracked is true exactly once per session id (reload-safe);
    // trackEvent parks the Google/Meta legs until the tag scripts are ready
    // (AdPixels flushes on Script onReady), so a mount-effect fire can't
    // race tag initialization and vanish.
    if (markPurchaseTracked(sessionId)) {
      trackEvent("purchase_completed", { plan })
    }
    const t = window.setTimeout(() => router.replace("/dashboard"), 1500)
    return () => window.clearTimeout(t)
  }, [plan, sessionId, router])

  return null
}
