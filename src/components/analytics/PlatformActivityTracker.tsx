"use client"

import { useEffect } from "react"

const HEARTBEAT_MS = 60_000
const ACTIVE_WINDOW_MS = 5 * 60_000

/**
 * Records coarse active-use time for student support. The server stores only a
 * daily number of seconds and a last-seen timestamp, never browsing history.
 */
export default function PlatformActivityTracker() {
  useEffect(() => {
    let lastInteractionAt = Date.now()

    const markActive = () => {
      lastInteractionAt = Date.now()
    }
    const sendHeartbeat = () => {
      if (document.visibilityState !== "visible" || !navigator.onLine) return
      if (Date.now() - lastInteractionAt > ACTIVE_WINDOW_MS) return

      void fetch("/api/activity/heartbeat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ seconds: HEARTBEAT_MS / 1_000 }),
        credentials: "same-origin",
        keepalive: true,
      }).catch(() => {
        // Activity tracking must never interrupt studying. The next heartbeat
        // can succeed independently; the server intentionally stores no queue.
      })
    }

    const passive: AddEventListenerOptions = { passive: true }
    window.addEventListener("pointerdown", markActive, passive)
    window.addEventListener("keydown", markActive)
    window.addEventListener("scroll", markActive, passive)
    window.addEventListener("touchstart", markActive, passive)
    const interval = window.setInterval(sendHeartbeat, HEARTBEAT_MS)

    return () => {
      window.clearInterval(interval)
      window.removeEventListener("pointerdown", markActive)
      window.removeEventListener("keydown", markActive)
      window.removeEventListener("scroll", markActive)
      window.removeEventListener("touchstart", markActive)
    }
  }, [])

  return null
}
