import { describe, it, expect } from "vitest"
import { SEQUENCES } from "@/lib/outreach/sequences"
import {
  renderTemplate,
  TEMPLATE_KEYS,
  isKnownTemplate,
} from "@/lib/outreach/templates"

const CTX = {
  firstName: "Alex",
  siteUrl: "https://www.zakariangmat.com",
  unsubscribeUrl: "https://www.zakariangmat.com/unsubscribe?token=tok123",
  consentReason: "you signed up at zakariangmat.com",
  downloadUrl: "https://www.zakariangmat.com/resources",
  referralUrl: "https://www.zakariangmat.com/refer",
}

describe("outreach templates", () => {
  it("has a template for every sequence step", () => {
    const keys = Object.values(SEQUENCES)
      .flat()
      .map((s) => s.templateKey)
    for (const k of keys) expect(isKnownTemplate(k)).toBe(true)
  })

  it("renders every template with an unsubscribe link, disclaimer, and CTA", () => {
    for (const key of TEMPLATE_KEYS) {
      const r = renderTemplate(key, CTX)
      expect(r.subject.length).toBeGreaterThan(0)
      expect(r.html).toContain(CTX.unsubscribeUrl)
      expect(r.text).toContain(CTX.unsubscribeUrl)
      expect(r.html.toLowerCase()).toContain("not affiliated")
      expect(r.text.toLowerCase()).toContain("not affiliated")
      expect(r.html).toContain("Hi Alex,")
    }
  })

  it("contains NO prohibited claims in any template", () => {
    const banned = [
      /guaranteed score/i,
      /guarantee[ds]? a score/i,
      /free diagnostic/i,
      /30-question/i,
      /readiness band/i,
      /score band/i,
      /typically lands/i,
      /most students (see|improve)/i,
    ]
    for (const key of TEMPLATE_KEYS) {
      const r = renderTemplate(key, CTX)
      const blob = `${r.subject}\n${r.html}\n${r.text}`
      for (const re of banned) {
        expect(re.test(blob), `${key} must not match ${re}`).toBe(false)
      }
    }
  })

  it("falls back to a generic greeting without a name", () => {
    const r = renderTemplate("signup-welcome", { ...CTX, firstName: null })
    expect(r.text).toContain("Hi there,")
  })

  it("throws on an unknown template key", () => {
    expect(() => renderTemplate("nope", CTX)).toThrow()
  })

  it("wraps CTAs through the click tracker and embeds the open pixel when configured", () => {
    const r = renderTemplate("signup-welcome", {
      ...CTX,
      clickBase: "https://www.zakariangmat.com/api/email/click?id=q1",
      openPixelUrl: "https://www.zakariangmat.com/api/email/open?id=q1",
    })
    expect(r.html).toContain("/api/email/click?id=q1&u=")
    expect(r.html).toContain("/api/email/open?id=q1")
  })
})
