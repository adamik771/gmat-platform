"use client"

import { useEffect } from "react"
import { captureAttribution } from "@/lib/analytics"

/**
 * Captures first-touch campaign attribution (utm_source/medium/campaign/
 * content/term + ref) on the first page load that carries any of them, and
 * stores it so every later trackEvent — signup, pricing_view, founding_reserve,
 * purchase_completed — can be traced back to the LinkedIn post, DM, or referral
 * that started the journey. Renders nothing. Reads window.location.search
 * directly (no useSearchParams) so it needs no Suspense boundary.
 */
export default function AttributionCapture() {
  useEffect(() => {
    captureAttribution(window.location.search)
  }, [])
  return null
}
