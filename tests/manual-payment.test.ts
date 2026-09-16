import { describe, expect, it } from "vitest"
import {
  manualPaymentMailto,
  manualPaymentWhatsAppUrl,
  SITE_WHATSAPP_NUMBER,
} from "@/lib/manual-payment"

describe("manual payment contact links", () => {
  it("opens Adam's WhatsApp with a clear prepared continuation message", () => {
    const url = new URL(
      manualPaymentWhatsAppUrl({ planName: "Self-Study" }),
    )

    expect(url.hostname).toBe("wa.me")
    expect(url.pathname).toBe(`/${SITE_WHATSAPP_NUMBER}`)
    expect(url.searchParams.get("text")).toContain(
      "I enjoyed my Zakarian GMAT free trial and would like to continue.",
    )
    expect(url.searchParams.get("text")).toContain(
      "I am interested in the Self-Study plan.",
    )
    expect(url.searchParams.get("text")).toContain(
      "Please send me the available payment instructions.",
    )
    expect(url.searchParams.get("text")).not.toContain("@")
  })

  it("prepares an email containing the selected plan and account email", () => {
    const href = manualPaymentMailto({
      planName: "Mentorship",
      accountEmail: "student@example.com",
    })
    const query = new URL(href.replace("mailto:", "https://mail.local/"))

    expect(href.startsWith("mailto:hello@zakariangmat.com")).toBe(true)
    expect(query.searchParams.get("subject")).toBe(
      "Continue Zakarian GMAT with Mentorship",
    )
    expect(query.searchParams.get("body")).toContain(
      "My account email: student@example.com",
    )
  })
})
