"use client"

import { useSyncExternalStore } from "react"

/**
 * `useOnline()` — subscribe to navigator.onLine. Returns `true` when
 * the browser thinks it has network, `false` otherwise.
 *
 * Caveat: navigator.onLine reports whether the device has *any*
 * network interface up, not whether the actual destination is
 * reachable. A device on captive-portal Wi-Fi reports online but can't
 * fetch anything. The offline indicator built on top of this should
 * verify with a heartbeat fetch when high confidence is required.
 */

function subscribe(cb: () => void): () => void {
  if (typeof window === "undefined") return () => {}
  window.addEventListener("online", cb)
  window.addEventListener("offline", cb)
  return () => {
    window.removeEventListener("online", cb)
    window.removeEventListener("offline", cb)
  }
}

function getSnapshot(): boolean {
  if (typeof navigator === "undefined") return true
  return navigator.onLine
}

function getServerSnapshot(): boolean {
  // SSR can't know — assume online. Mismatch on first client paint
  // resolves on hydration; the (rare) flicker is acceptable.
  return true
}

export function useOnline(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
