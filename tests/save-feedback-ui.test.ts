import { createElement } from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { readFileSync } from "node:fs"
import { describe, expect, it, vi } from "vitest"
import SaveForReviewButton from "@/components/review/SaveForReviewButton"
import QuestionFeedbackBar from "@/components/beta/QuestionFeedbackBar"

vi.mock("next/navigation", () => ({
  useRouter: () => ({ refresh: vi.fn() }),
  usePathname: () => "/practice/session/test",
}))

describe("review save and explanation feedback controls", () => {
  it.each(["default", "ghost", "compact"] as const)("reflects confirmed bookmark state in %s buttons", (variant) => {
    for (const initialSaved of [false, true]) {
      const html = renderToStaticMarkup(createElement(SaveForReviewButton, {
        questionId: "test-q", initialSaved, variant,
      }))
      expect(html).toContain(`aria-pressed="${initialSaved}"`)
      expect(html).toContain('aria-busy="false"')
      expect(html).not.toContain('role="alert"')
    }
  })

  it("keeps the explanation report collapsed and free of answer content", () => {
    const html = renderToStaticMarkup(createElement(QuestionFeedbackBar, {
      questionId: "test-q", variant: "explanation",
    }))
    expect(html).toContain("This explanation confused me")
    expect(html).toContain('aria-expanded="false"')
    expect(html).not.toContain("textarea")
    expect(html).not.toContain("Flag this question")
    expect(html).not.toContain("feedback recorded")
  })

  it("retains all six existing deep-review feedback categories", () => {
    const html = renderToStaticMarkup(createElement(QuestionFeedbackBar, { questionId: "test-q" }))
    for (const label of ["Wrong answer", "Unclear prompt", "Ambiguous options", "Too easy", "Too hard", "Explanation needs work"]) {
      expect(html).toContain(label)
    }
  })

  it("keeps the practice report within the submitted-and-revealed solution", () => {
    const source = readFileSync("src/app/(app)/practice/session/[slug]/SessionClient.tsx", "utf8")
    const gate = source.indexOf("currentState.submitted && reveal && current.explanation && (")
    const report = source.indexOf('<QuestionFeedbackBar key={current.id}')
    const analysis = source.indexOf("<FullAnalysis", gate)
    expect(gate).toBeGreaterThan(-1)
    expect(report).toBeGreaterThan(gate)
    expect(report).toBeLessThan(analysis)
  })

  it("does not let manual chapter retry bypass failed-read protection", () => {
    const source = readFileSync("src/app/(app)/chapters/[slug]/ChapterReader.tsx", "utf8")
    expect(source).toContain("if (pushSuppressed) {")
    expect(source).toContain("{!pushSuppressed && (")
    expect(source).toContain("await pushNow(progressRef.current)")
    expect(source).not.toContain("Progress is saved on this device but hasn't synced yet")
  })
})
