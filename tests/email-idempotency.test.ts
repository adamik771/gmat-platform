import { afterEach, describe, expect, it, vi } from "vitest"
import { sendEmail } from "@/lib/email"

const originalKey = process.env.RESEND_API_KEY

afterEach(() => {
  vi.unstubAllGlobals()
  if (originalKey === undefined) delete process.env.RESEND_API_KEY
  else process.env.RESEND_API_KEY = originalKey
})

describe("transactional email idempotency", () => {
  it("forwards a stable idempotency key to Resend", async () => {
    process.env.RESEND_API_KEY = "re_test"
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({ id: "email_1" }), {
        status: 200,
        headers: { "content-type": "application/json" },
      }),
    )
    vi.stubGlobal("fetch", fetchMock)

    await sendEmail({
      to: "student@example.com",
      subject: "Trial ended",
      html: "<p>Hello</p>",
      idempotencyKey: "trial-expiry-user-window",
    })

    const init = fetchMock.mock.calls[0]?.[1] as RequestInit
    expect(init.headers).toMatchObject({
      "Idempotency-Key": "trial-expiry-user-window",
    })
  })
})
