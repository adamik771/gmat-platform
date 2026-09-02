import { describe, expect, it } from "vitest"
import type { SupabaseClient } from "@supabase/supabase-js"
import {
  consumeSecurityRateLimit,
  getClientAddress,
  hashRateLimitSubject,
} from "@/lib/security-rate-limit"

describe("security rate-limit primitives", () => {
  it("creates deterministic, secret-dependent 64-character digests", () => {
    const first = hashRateLimitSubject("student@example.com", "secret-a")
    expect(first).toMatch(/^[0-9a-f]{64}$/)
    expect(hashRateLimitSubject("student@example.com", "secret-a")).toBe(first)
    expect(hashRateLimitSubject("student@example.com", "secret-b")).not.toBe(first)
  })

  it("prefers Vercel's anti-spoofed forwarding header", () => {
    const headers = new Headers({
      "x-vercel-forwarded-for": "203.0.113.10",
      "x-forwarded-for": "198.51.100.2",
    })
    expect(getClientAddress(headers)).toBe("203.0.113.10")
  })

  it("parses the atomic RPC response", async () => {
    const previous = process.env.RATE_LIMIT_SECRET
    process.env.RATE_LIMIT_SECRET = "unit-test-secret"
    const service = {
      rpc: async () => ({
        data: [{ allowed: false, retry_after_seconds: 12.2 }],
        error: null,
      }),
    } as unknown as SupabaseClient
    try {
      await expect(
        consumeSecurityRateLimit(service, {
          action: "test",
          subject: "subject",
          limit: 1,
          windowSeconds: 60,
        }),
      ).resolves.toEqual({ allowed: false, retryAfterSeconds: 13 })
    } finally {
      if (previous === undefined) delete process.env.RATE_LIMIT_SECRET
      else process.env.RATE_LIMIT_SECRET = previous
    }
  })

  it("fails closed on RPC errors", async () => {
    const previous = process.env.RATE_LIMIT_SECRET
    process.env.RATE_LIMIT_SECRET = "unit-test-secret"
    const service = {
      rpc: async () => ({ data: null, error: new Error("database unavailable") }),
    } as unknown as SupabaseClient
    try {
      await expect(
        consumeSecurityRateLimit(service, {
          action: "test",
          subject: "subject",
          limit: 1,
          windowSeconds: 60,
        }),
      ).rejects.toThrow("database unavailable")
    } finally {
      if (previous === undefined) delete process.env.RATE_LIMIT_SECRET
      else process.env.RATE_LIMIT_SECRET = previous
    }
  })
})
