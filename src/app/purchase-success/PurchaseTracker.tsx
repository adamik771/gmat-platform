"use client"

import { useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { trackEvent } from "@/lib/analytics"

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
    let alreadyTracked = false
    const key = `zg_purchase_tracked:${sessionId}`
    try {
      alreadyTracked = window.localStorage.getItem(key) !== null
      if (!alreadyTracked) window.localStorage.setItem(key, "1")
    } catch {
      // Storage blocked (private mode) — fall through and fire; the ref
      // still prevents double-fires within this page view.
    }
    if (!alreadyTracked) {
      trackEvent("purchase_completed", { plan })
    }
    const t = window.setTimeout(() => router.replace("/dashboard"), 1500)
    return () => window.clearTimeout(t)
  }, [plan, sessionId, router])

  return null
}
