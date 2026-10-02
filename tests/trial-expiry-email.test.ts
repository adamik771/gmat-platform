import { describe, expect, it } from "vitest"
import { trialExpiryPaymentEmail } from "@/lib/trial-expiry-email"

describe("trial expiry payment email", () => {
  it("is warm, branded, transactional, and offers WhatsApp plus email", () => {
    const rendered = trialExpiryPaymentEmail({
      firstName: "Jasper",
      accountEmail: "jasper@example.com",
    })

    expect(rendered.subject).toBe("Your Zakarian GMAT trial has ended")
    expect(rendered.html).toContain("Hi Jasper,")
    expect(rendered.html).toContain("Message Adam on WhatsApp")
    expect(rendered.html).toContain("https://wa.me/4792949728")
    expect(rendered.html).toContain("hello@zakariangmat.com")
    expect(rendered.html).toContain("Your study history and progress are safe")
    expect(rendered.html).toContain("one-time service email")
    expect(rendered.text).toContain(
      "I hope you have enjoyed using Zakarian GMAT",
    )
    expect(rendered.text).not.toContain("discount")
    expect(rendered.text).not.toContain("guarantee")
  })

  it("escapes an authored name before placing it in HTML", () => {
    const rendered = trialExpiryPaymentEmail({
      firstName: '<img src=x onerror="alert(1)">',
      accountEmail: "student@example.com",
    })

    expect(rendered.html).not.toContain("<img")
    expect(rendered.html).toContain("&lt;img")
  })
})
