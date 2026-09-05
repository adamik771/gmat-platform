import { describe, expect, it } from "vitest"
import { safeInternalPath } from "@/lib/safe-navigation"

describe("safe internal navigation", () => {
  it("keeps ordinary internal paths with search and hash", () => {
    expect(safeInternalPath("/practice?mode=timed#q2")).toBe(
      "/practice?mode=timed#q2",
    )
  })

  it.each([
    "https://attacker.example",
    "//attacker.example/path",
    "/\\attacker.example/path",
    "/\t//attacker.example/path",
    "javascript:alert(1)",
  ])("rejects unsafe destination %s", (value) => {
    expect(safeInternalPath(value)).toBe("/dashboard")
  })

  it("supports an explicit fallback", () => {
    expect(safeInternalPath(null, "/")).toBe("/")
  })
})
