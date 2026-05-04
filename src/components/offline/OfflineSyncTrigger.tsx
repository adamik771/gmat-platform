"use client"

import { useEffect } from "react"
import { drainPendingAttempts } from "@/lib/offline/sync"

/**
 * Side-effect-only. On mount and on every `online` event, attempts
 * to drain the pending-attempts queue (offline drills the student
 * completed earlier) by POSTing them to /api/practice-sessions.
 *
 * Receives `userId` from the server-rendered layout — the queue is
 * per-user namespaced. Renders null.
 *
 * Idempotent: drainPendingAttempts no-ops when the queue is empty,
 * so duplicate triggers cost one IDB read.
 */
export default function OfflineSyncTrigger({ userId }: { userId: string }) {
  useEffect(() => {
    if (!userId) return
    if (typeof window === "undefined") return

    let cancelled = false
    const run = () => {
      if (cancelled) return
      void drainPendingAttempts(userId)
    }

    // Try once on mount (e.g., user opens the app having queued
    // drills offline yesterday and is now online).
    run()

    // Also retry whenever the browser flips online.
    window.addEventListener("online", run)
    return () => {
      cancelled = true
      window.removeEventListener("online", run)
    }
  }, [userId])

  return null
}
