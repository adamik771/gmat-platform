"use client"

import { useEffect } from "react"
import { captureAttribution, CONSENT_EVENT, getConsent } from "@/lib/analytics"

/**
 * Captures first-touch campaign attribution (utm_source/medium/campaign/
 * content/term + ref + ad click ids) on the first page load that carries any
 * of them, and stores it so every later trackEvent — signup, pricing_view,
 * founding_reserve, purchase_completed — can be traced back to the LinkedIn
 * post, DM, or referral that started the journey. Renders nothing. Reads
 * window.location.search directly (no useSearchParams) so it needs no
 * Suspense boundary.
 *
 * Consent-gated: captureAttribution no-ops until the visitor accepts the
 * consent banner. The common accept happens on the landing page itself, so
 * this also listens for the consent-change event and re-captures — the URL
 * params are still in the address bar at that moment. If the visitor
 * navigates before accepting, the params are deliberately lost (restrained
 * default: no pre-consent stashing).
 */
export default function AttributionCapture() {
  useEffect(() => {
    captureAttribution(window.location.search)
    const onConsent = () => {
      if (getConsent() === "granted") {
        captureAttribution(window.location.search)
      }
    }
    window.addEventListener(CONSENT_EVENT, onConsent)
    return () => window.removeEventListener(CONSENT_EVENT, onConsent)
  }, [])
  return null
}
