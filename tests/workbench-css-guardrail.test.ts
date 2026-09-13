import { readFileSync } from "node:fs"
import { resolve } from "node:path"
import { describe, expect, it } from "vitest"

const globals = readFileSync(resolve("src/app/globals.css"), "utf8")
const calculator = readFileSync(
  resolve("src/app/(app)/score-calculator/ScoreCalculatorClient.tsx"),
  "utf8"
)

describe("authenticated workbench visibility guardrails", () => {
  it("removes radial decoration without hiding the element that owns it", () => {
    const rule = globals.match(
      /\.app-workbench main \[style\*="radial-gradient"\]\s*\{([^}]*)\}/
    )

    expect(rule).not.toBeNull()
    expect(rule?.[1]).toMatch(/background-image:\s*none\s*!important/)
    expect(rule?.[1]).not.toMatch(/display:\s*none/)
  })

  it("keeps the score result on a plain visible workbench surface", () => {
    expect(calculator).toContain('data-testid="score-calculator-result"')
    expect(calculator).toContain('backgroundColor: "#0D0D0D"')
    expect(calculator).not.toContain("radial-gradient")
  })
})
