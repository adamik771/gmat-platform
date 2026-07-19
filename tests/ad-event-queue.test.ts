import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import {
  flushPendingAdEvents,
  markPurchaseTracked,
  setConsent,
  trackEvent,
} from "@/lib/analytics"

/**
 * Reliable ad-event delivery: a consent-granted event fired before the
 * Google/Meta tag scripts have installed their globals must park and flush
 * exactly once when the tags initialize (AdPixels calls
 * flushPendingAdEvents from Script onReady). Never without consent, never
 * twice, and a reload of the purchase page must not re-fire (session-keyed
 * marker).
 */

class MemStorage {
  private m = new Map<string, string>()
  getItem(k: string): string | null {
    return this.m.has(k) ? (this.m.get(k) as string) : null
  }
  setItem(k: string, v: string): void {
    this.m.set(k, String(v))
  }
  removeItem(k: string): void {
    this.m.delete(k)
  }
}

interface StubWindow {
  localStorage: MemStorage
  location: { pathname: string }
  dispatchEvent: () => boolean
  gtag?: (...args: unknown[]) => void
  fbq?: (...args: unknown[]) => void
}

function freshWindow(): StubWindow {
  const win: StubWindow = {
    localStorage: new MemStorage(),
    location: { pathname: "/purchase-success" },
    dispatchEvent: () => true,
  }
  ;(globalThis as { window?: unknown }).window = win
  return win
}

beforeEach(() => {
  vi.stubEnv("NEXT_PUBLIC_GOOGLE_TAG_ID", "G-TEST")
  vi.stubEnv("NEXT_PUBLIC_META_PIXEL_ID", "123456")
  // Drain any queue state left by a previous test: with no window+denied
  // consent the flush empties both parked queues.
  freshWindow()
  setConsent("denied")
  flushPendingAdEvents()
})

afterEach(() => {
  vi.unstubAllEnvs()
  delete (globalThis as { window?: unknown }).window
})

function installTags(win: StubWindow) {
  const gtagCalls: unknown[][] = []
  const fbqCalls: unknown[][] = []
  win.gtag = (...args: unknown[]) => {
    gtagCalls.push(args)
  }
  win.fbq = (...args: unknown[]) => {
    fbqCalls.push(args)
  }
  return { gtagCalls, fbqCalls }
}

describe("ad-event queue", () => {
  it("parks a consent-granted event fired before tags exist and flushes it exactly once on readiness", () => {
    const win = freshWindow()
    setConsent("granted")
    trackEvent("purchase_completed", { plan: "self_study" })

    // Tags initialize afterwards (Script onReady) — the event must arrive.
    const { gtagCalls, fbqCalls } = installTags(win)
    flushPendingAdEvents()
    const gtagEvents = gtagCalls.filter((c) => c[0] === "event")
    expect(gtagEvents).toHaveLength(1)
    expect(gtagEvents[0][1]).toBe("purchase_completed")
    const fbqTracks = fbqCalls.filter((c) => c[0] === "track")
    expect(fbqTracks).toHaveLength(1)
    expect(fbqTracks[0][1]).toBe("Purchase")

    // Repeat flushes (onReady can run again on remount) deliver nothing new.
    flushPendingAdEvents()
    flushPendingAdEvents()
    expect(gtagCalls.filter((c) => c[0] === "event")).toHaveLength(1)
    expect(fbqCalls.filter((c) => c[0] === "track")).toHaveLength(1)
  })

  it("sends directly when tags are already installed (nothing left to flush)", () => {
    const win = freshWindow()
    setConsent("granted")
    const { gtagCalls } = installTags(win)
    trackEvent("signup")
    expect(gtagCalls.filter((c) => c[0] === "event")).toHaveLength(1)
    flushPendingAdEvents()
    expect(gtagCalls.filter((c) => c[0] === "event")).toHaveLength(1)
  })

  it("parks nothing without consent, and a later flush delivers nothing", () => {
    const win = freshWindow()
    // No choice stored (null) — treated as denied.
    trackEvent("purchase_completed", { plan: "self_study" })
    const { gtagCalls, fbqCalls } = installTags(win)
    flushPendingAdEvents()
    expect(gtagCalls).toHaveLength(0)
    expect(fbqCalls).toHaveLength(0)
  })

  it("empties the queue when consent is denied between park and flush", () => {
    const win = freshWindow()
    setConsent("granted")
    trackEvent("purchase_completed", { plan: "self_study" })
    setConsent("denied")
    const { gtagCalls, fbqCalls } = installTags(win)
    flushPendingAdEvents()
    expect(gtagCalls.filter((c) => c[0] === "event")).toHaveLength(0)
    expect(fbqCalls.filter((c) => c[0] === "track")).toHaveLength(0)
  })

  it("marks a purchase session exactly once so a reload cannot re-fire", () => {
    freshWindow()
    // First page view fires; the reload (same storage) must not.
    expect(markPurchaseTracked("cs_test_123")).toBe(true)
    expect(markPurchaseTracked("cs_test_123")).toBe(false)
    // A different session id is independent.
    expect(markPurchaseTracked("cs_test_456")).toBe(true)
  })
})
