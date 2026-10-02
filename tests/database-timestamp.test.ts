import { describe, expect, it } from "vitest"
import { databaseTimestampMicros } from "@/lib/database-timestamp"

describe("database timestamp precision", () => {
  it("preserves microseconds and normalizes precision and timezone representations", () => {
    const first = databaseTimestampMicros("2026-09-01T00:00:00.123456Z")!
    expect(databaseTimestampMicros("2026-09-01T00:00:00.123457Z")).toBe(first + 1)
    expect(databaseTimestampMicros("2026-09-01T02:00:00.123456+02:00")).toBe(first)
    expect(databaseTimestampMicros("2026-09-01T00:00:00.100000Z")).toBe(databaseTimestampMicros("2026-09-01T00:00:00.1Z"))
    expect(databaseTimestampMicros("2026-09-01T00:00:00Z")).toBe(Date.parse("2026-09-01T00:00:00Z") * 1000)
  })
  it("rejects ambiguous or unsupported timestamps", () => {
    for (const value of [null, 123, "invalid", "2026-09-01", "2026-09-01T00:00:00", "2026-09-01T00:00:00.1234567Z"]) {
      expect(databaseTimestampMicros(value)).toBeNull()
    }
  })
})
