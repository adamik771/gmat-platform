"use client"

import { useEffect, useRef } from "react"
import { useSearchParams } from "next/navigation"
import { trackEvent } from "@/lib/analytics"

/**
 * Fires a `purchase_completed` conversion event when the user lands on the
 * Stripe success redirect (`?purchase=success&plan=...` — see the checkout
 * route's success_url). Renders nothing.
 *
 * This is the UX-side completion signal for the conversion funnel; the
 * authoritative purchase record is still the `purchases` row written by the
 * Stripe webhook. Mounted once in the (app) layout; wrap in <Suspense> because
 * it reads useSearchParams.
 */
export default function ConversionTracker() {
  const params = useSearchParams()
  const fired = useRef(false)

  useEffect(() => {
    if (fired.current) return
    if (params.get("purchase") === "success") {
      fired.current = true
      trackEvent("purchase_completed", { plan: params.get("plan") ?? "unknown" })
      // Strip the success params so a reload / bookmark / reshare of the URL
      // can't re-emit the event. history.replaceState (vs router.replace) keeps
      // it side-effect-free — no Next navigation or re-render.
      window.history.replaceState(null, "", window.location.pathname)
    }
  }, [params])

  return null
}
