import { describe, expect, it } from "vitest"
import { sanitizeDataError } from "@/lib/data-error"

describe("privacy-safe data error diagnostics", () => {
  it("keeps actionable schema details", () => {
    expect(
      sanitizeDataError({
        code: "42703",
        message: "column error_tags.id does not exist",
        status: 400,
      }),
    ).toEqual({
      code: "42703",
      message: "column error_tags.id does not exist",
      status: 400,
    })
  })

  it("redacts identities and secret-shaped values", () => {
    const safe = sanitizeDataError({
      code: "failure",
      message:
        "adam@example.com 123e4567-e89b-42d3-a456-426614174000 eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIn0.signature abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMN123456 https://example.com/private?student=12 'submitted note'",
    })

    expect(safe.message).toContain("[email]")
    expect(safe.message).toContain("[uuid]")
    expect(safe.message).toContain("[token]")
    expect(safe.message).toContain("[redacted]")
    expect(safe.message).toContain("[url]")
    expect(safe.message).toContain("[value]")
    expect(safe.message).not.toContain("adam@example.com")
    expect(safe.message).not.toContain("123e4567")
    expect(safe.message).not.toContain("submitted note")
  })

  it("normalizes non-error values without throwing", () => {
    expect(sanitizeDataError(null)).toEqual({
      code: "unknown",
      message: "Unknown data operation failure",
      status: null,
    })
  })
})
