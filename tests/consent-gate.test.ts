import { afterEach, describe, expect, it } from "vitest"
import {
  captureAttribution,
  getAttribution,
  getConsent,
  setConsent,
} from "@/lib/analytics"

/**
 * Guardrail for the batch's central privacy invariant: no advertising
 * attribution is stored or read without an explicit "granted" consent, and
 * denial clears what a prior grant stored. If this breaks, the site tracks
 * ad clicks for visitors who never accepted (or rejected) the banner.
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

function freshWindow(): { localStorage: MemStorage } {
  const win = {
    localStorage: new MemStorage(),
    location: { pathname: "/gmat-free-trial" },
    dispatchEvent: () => true,
  }
  ;(globalThis as { window?: unknown }).window = win
  return win
}

afterEach(() => {
  delete (globalThis as { window?: unknown }).window
})

const AD_SEARCH = "?utm_source=google&utm_campaign=brand&gclid=CjTEST123"

describe("consent gate", () => {
  it("stores nothing and reads null before any choice", () => {
    const win = freshWindow()
    expect(getConsent()).toBe(null)
    captureAttribution(AD_SEARCH)
    expect(win.localStorage.getItem("zg_attribution")).toBe(null)
    expect(getAttribution()).toEqual({})
  })

  it("does not read pre-existing attribution without granted consent", () => {
    const win = freshWindow()
    // Pre-consent-era residue (or tampering) must not leak into events.
    win.localStorage.setItem(
      "zg_attribution",
      JSON.stringify({ utm_source: "legacy" })
    )
    expect(getAttribution()).toEqual({})
    setConsent("denied")
    expect(getAttribution()).toEqual({})
  })

  it("captures and reads attribution only after granted", () => {
    freshWindow()
    setConsent("granted")
    expect(getConsent()).toBe("granted")
    captureAttribution(AD_SEARCH)
    expect(getAttribution()).toEqual({
      utm_source: "google",
      utm_campaign: "brand",
      gclid: "CjTEST123",
      landing_path: "/gmat-free-trial",
    })
  })

  it("first touch still wins after grant", () => {
    freshWindow()
    setConsent("granted")
    captureAttribution(AD_SEARCH)
    captureAttribution("?utm_source=second-touch")
    expect(getAttribution().utm_source).toBe("google")
  })

  it("denial clears stored attribution and blocks reads", () => {
    const win = freshWindow()
    setConsent("granted")
    captureAttribution(AD_SEARCH)
    expect(getAttribution().gclid).toBe("CjTEST123")
    setConsent("denied")
    expect(getConsent()).toBe("denied")
    expect(win.localStorage.getItem("zg_attribution")).toBe(null)
    expect(getAttribution()).toEqual({})
  })
})
