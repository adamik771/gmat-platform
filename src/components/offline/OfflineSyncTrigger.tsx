"use client"

import { useEffect } from "react"

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
    const run = async () => {
      if (cancelled) return
      try {
        const { drainPendingAttempts } = await import("@/lib/offline/sync")
        if (!cancelled) await drainPendingAttempts(userId)
      } catch {
        // Offline recovery is best-effort and retries on the next online event.
      }
    }

    // Try once on mount (e.g., user opens the app having queued
    // drills offline yesterday and is now online).
    void run()

    // Also retry whenever the browser flips online.
    const onOnline = () => void run()
    window.addEventListener("online", onOnline)
    return () => {
      cancelled = true
      window.removeEventListener("online", onOnline)
    }
  }, [userId])

  return null
}
