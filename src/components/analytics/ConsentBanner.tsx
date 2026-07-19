"use client"

import { useEffect, useState, useSyncExternalStore } from "react"
import Link from "next/link"
import {
  CONSENT_OPEN_EVENT,
  getConsent,
  setConsent,
  subscribeConsent,
} from "@/lib/analytics"

/**
 * Restrained cookie/measurement consent banner (Consent Mode v2 front end).
 *
 * Shows while no choice is stored; reopens via the site-wide
 * "Privacy settings" control (ConsentSettingsButton dispatches
 * CONSENT_OPEN_EVENT). Accept and Reject are deliberately identical in
 * size and prominence — no dark patterns, no pre-selection, and the page
 * stays fully usable behind it. The choice is remembered in localStorage
 * (necessary storage). Until Accept, no Google/Meta script loads and no
 * advertising attribution is stored (see AdPixels / lib/analytics.ts).
 *
 * Consent state is read via useSyncExternalStore (server snapshot: null),
 * so SSR renders nothing and the banner appears after hydration for
 * visitors without a stored choice — no setState-in-effect, no mismatch.
 */
// Client-readiness store for useSyncExternalStore: the value never changes
// after hydration, so subscribe is a no-op. Server snapshot false / client
// snapshot true makes the no-choice banner render only after hydration —
// no setState-in-effect, no hydration mismatch, and (unlike an rAF-gated
// flag) it also works in hidden/background tabs where rAF is throttled.
const subscribeNever = () => () => {}
const getHydrated = () => true
const getServerHydrated = () => false

export default function ConsentBanner() {
  const consent = useSyncExternalStore(subscribeConsent, getConsent, () => null)
  const hydrated = useSyncExternalStore(
    subscribeNever,
    getHydrated,
    getServerHydrated,
  )
  // The reopen affordance ("Privacy settings") — setState inside an event
  // listener callback only, which the set-state-in-effect rule permits.
  const [reopened, setReopened] = useState(false)

  useEffect(() => {
    const reopen = () => setReopened(true)
    window.addEventListener(CONSENT_OPEN_EVENT, reopen)
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, reopen)
  }, [])

  const open = reopened || (hydrated && consent === null)
  if (!open) return null

  const choose = (status: "granted" | "denied") => {
    setConsent(status)
    setReopened(false)
  }

  const buttonClass =
    "flex-1 sm:flex-none sm:min-w-[9rem] px-5 py-2.5 rounded-xl text-[13px] font-semibold border transition-all duration-200 hover:opacity-90"

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookie and measurement preferences"
      className="fixed inset-x-0 bottom-0 z-[45] border-t border-white/[0.1] px-4 py-4 sm:px-6"
      style={{ backgroundColor: "#0D0D0D", boxShadow: "0 -12px 40px rgba(0,0,0,0.5)" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center gap-4">
        <p className="flex-1 text-[13px] text-[#C0C0C0] leading-relaxed">
          <span className="font-semibold text-[#F0F0F0]">Measurement cookies.</span>{" "}
          With your permission we use Google and Meta cookies to measure how
          visitors find and use the site, including ad performance. Nothing is
          set unless you accept.{" "}
          <Link
            href="/privacy"
            className="underline hover:opacity-80"
            style={{ color: "#C9A84C" }}
          >
            Privacy policy
          </Link>
        </p>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => choose("denied")}
            className={buttonClass}
            style={{ borderColor: "rgba(255,255,255,0.2)", color: "#F0F0F0" }}
          >
            Reject
          </button>
          <button
            type="button"
            onClick={() => choose("granted")}
            className={buttonClass}
            style={{ borderColor: "rgba(255,255,255,0.2)", color: "#F0F0F0" }}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
