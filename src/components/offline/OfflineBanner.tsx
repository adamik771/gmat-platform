"use client"

import { WifiOff } from "lucide-react"
import { useOnline } from "@/lib/offline/use-online"

/**
 * Thin banner that appears at the top of the app when the browser
 * reports offline. Hidden when online — zero render cost in the common
 * path. Sits above the (app) top bar so it's always visible regardless
 * of which route is active.
 *
 * The banner only signals state. Routing to a cached version of the
 * page is the service worker's job (sw.js → networkFirstWithFallback).
 */
export default function OfflineBanner() {
  const online = useOnline()
  if (online) return null
  return (
    <div
      className="flex items-center justify-center gap-2 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.18em]"
      style={{
        backgroundColor: "rgba(201,168,76,0.08)",
        borderBottom: "1px solid rgba(201,168,76,0.25)",
        color: "#C9A84C",
      }}
      role="status"
      aria-live="polite"
    >
      <WifiOff className="w-3.5 h-3.5" aria-hidden />
      <span>Offline · review queue still works if cached</span>
    </div>
  )
}
