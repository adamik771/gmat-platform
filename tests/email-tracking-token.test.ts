import { afterEach, beforeEach, describe, expect, it } from "vitest"
import {
  signEmailTrackingId,
  verifyEmailTrackingId,
} from "@/lib/email-tracking-token"

const ID = "123e4567-e89b-42d3-a456-426614174000"
const original = process.env.EMAIL_TRACKING_SECRET

beforeEach(() => {
  process.env.EMAIL_TRACKING_SECRET = "test-tracking-secret"
})

afterEach(() => {
  if (original === undefined) delete process.env.EMAIL_TRACKING_SECRET
  else process.env.EMAIL_TRACKING_SECRET = original
})

describe("email tracking tokens", () => {
  it("signs and verifies a queue id", () => {
    const token = signEmailTrackingId(ID)
    expect(token).toMatch(/^[A-Za-z0-9_-]{43}$/)
    expect(verifyEmailTrackingId(ID, token)).toBe(true)
  })

  it("rejects altered ids and tokens", () => {
    const token = signEmailTrackingId(ID)!
    expect(
      verifyEmailTrackingId("223e4567-e89b-42d3-a456-426614174000", token),
    ).toBe(false)
    expect(verifyEmailTrackingId(ID, `${token.slice(0, -1)}x`)).toBe(false)
  })

  it("rejects malformed queue ids", () => {
    expect(signEmailTrackingId("not-a-uuid")).toBeNull()
    expect(verifyEmailTrackingId("not-a-uuid", "token")).toBe(false)
  })
})
