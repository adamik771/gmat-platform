"use client"

import { useEffect } from "react"

/**
 * Mounts once per session and registers the service worker at /sw.js.
 *
 * No UI — purely a side-effect carrier. Drop into the (app)/layout
 * once and forget. The registrar is idempotent: if a worker is already
 * registered with the same URL the call resolves to the existing
 * registration without re-installing.
 *
 * Failures are swallowed silently. If the SW can't register (private
 * browsing, unsupported browser, HTTP-not-HTTPS) the rest of the app
 * keeps working — offline support just stays off for that session.
 */
export default function ServiceWorkerRegistrar() {
  useEffect(() => {
    if (typeof window === "undefined") return
    if (!("serviceWorker" in navigator)) return
    // Don't register in development by default — Turbopack HMR and a
    // service worker on the same origin can fight each other (the SW
    // caches stale dev assets, HMR rewrites them; mismatch confuses
    // both). Set NEXT_PUBLIC_SW_DEV=true in .env.local to opt in.
    if (
      process.env.NODE_ENV !== "production" &&
      process.env.NEXT_PUBLIC_SW_DEV !== "true"
    ) {
      return
    }
    let cancelled = false
    ;(async () => {
      try {
        await navigator.serviceWorker.register("/sw.js", {
          scope: "/",
          updateViaCache: "none",
        })
        if (cancelled) return
      } catch {
        // SW registration failed — non-fatal, offline support is the
        // only feature lost.
      }
    })()
    return () => {
      cancelled = true
    }
  }, [])
  return null
}
