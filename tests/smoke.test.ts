import { describe, it, expect } from "vitest"
import { accuracyToScore } from "@/lib/scoring"
import { getAllChapters } from "@/lib/content"

// Smoke test: proves the Vitest harness resolves the @/ alias, loads a pure
// module (scoring), and loads content.ts (which uses node:fs and imports a
// sibling with an explicit .ts extension).
describe("vitest harness", () => {
  it("resolves @/ alias + pure module", () => {
    expect(typeof accuracyToScore).toBe("function")
  })

  it("loads content.ts (fs + .ts-extension import)", () => {
    // Exact chapter-count ownership lives in chapter-order.test.ts; the smoke
    // test only proves the loader works through the harness.
    const chapters = getAllChapters()
    expect(chapters.length).toBeGreaterThan(50)
  })
})
