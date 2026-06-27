import { describe, it, expect } from "vitest"
import {
  readMarketingConsent,
  buildMarketingConsent,
} from "@/lib/outreach/consent-flag"

describe("marketing consent flag", () => {
  it("defaults to NOT opted in when the flag is absent", () => {
    expect(readMarketingConsent(undefined).optedIn).toBe(false)
    expect(readMarketingConsent(null).optedIn).toBe(false)
    expect(readMarketingConsent({}).optedIn).toBe(false)
    expect(readMarketingConsent({ full_name: "Alex" }).optedIn).toBe(false)
  })

  it("only reads optedIn when it is strictly true (never truthy-coerced)", () => {
    expect(readMarketingConsent({ marketing_consent: { optedIn: "yes" } }).optedIn).toBe(false)
    expect(readMarketingConsent({ marketing_consent: { optedIn: 1 } }).optedIn).toBe(false)
    expect(readMarketingConsent({ marketing_consent: { optedIn: true } }).optedIn).toBe(true)
  })

  it("reads the consent timestamp and source when opted in", () => {
    const flag = readMarketingConsent({
      marketing_consent: { optedIn: true, at: "2026-06-27T10:00:00.000Z", source: "signup" },
    })
    expect(flag).toEqual({ optedIn: true, at: "2026-06-27T10:00:00.000Z", source: "signup" })
  })

  it("buildMarketingConsent records time + source only when opted in", () => {
    expect(buildMarketingConsent(true, "2026-06-27T10:00:00.000Z")).toEqual({
      optedIn: true,
      at: "2026-06-27T10:00:00.000Z",
      source: "signup",
    })
    expect(buildMarketingConsent(false, "2026-06-27T10:00:00.000Z")).toEqual({
      optedIn: false,
    })
  })
})
