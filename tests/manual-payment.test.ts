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

  it("uses a neutral enquiry for prospects, without inventing trial history", () => {
    const input = { planName: "Self-Study", intent: "enquiry" as const }
    const whatsapp = new URL(manualPaymentWhatsAppUrl(input))
    const email = new URL(manualPaymentMailto(input))
    for (const message of [whatsapp.searchParams.get("text"), email.searchParams.get("body")]) {
      expect(message).toContain("Self-Study")
      expect(message).toContain("whether paid access is currently available")
      expect(message).toContain("total price and access period")
      expect(message).not.toMatch(/enjoyed|trial has ended|Please send me the available payment instructions/)
    }
    expect(email.searchParams.get("subject")).toBe("Zakarian GMAT payment options: Self-Study")
  })

  it("encodes plan names safely and supports an enquiry without a plan", () => {
    const url = new URL(manualPaymentWhatsAppUrl({ planName: "  Q&A + support  ", intent: "enquiry" }))
    expect([...url.searchParams.keys()]).toEqual(["text"])
    expect(url.searchParams.get("text")).toContain("Q&A + support plan")
    expect(new URL(manualPaymentMailto({ intent: "enquiry" })).searchParams.get("subject"))
      .toBe("Zakarian GMAT payment options")
  })
})
