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
    const chapters = getAllChapters()
    expect(chapters.length).toBe(58)
  })
})
