import { describe, it, expect } from "vitest"
import {
  classifyMistake,
  type MistakeAttemptInput,
} from "@/lib/mistake-classifier"

/**
 * The classifier must not INVENT a diagnosis. Before this was fixed, the
 * root-cause inference fell through to a fabricated K2 ("concept
 * misapplied") on every miss with no decisive signal — and the error-log
 * page persisted that guess for every displayed mistake on render. The
 * effects: "untagged mistakes" collapsed to ~0 after one visit, and the
 * study plan's conceptual/execution patterning trained on classifier
 * defaults rather than student evidence.
 */
function attempt(over: Partial<MistakeAttemptInput> = {}): MistakeAttemptInput {
  return {
    questionId: "algebra-q1",
    section: "Quant",
    topic: "Algebra",
    subtopic: "Linear Equations",
    difficulty: "Intermediate",
    questionType: "Problem Solving",
    timeSpentMs: 105_000, // squarely normal pace for Quant
    ...over,
  }
}

describe("classifyMistake — no fabricated diagnoses", () => {
  it("returns a NULL root cause when nothing decisive is present", () => {
    const c = classifyMistake(attempt(), undefined)
    expect(c.rootCause.value).toBeNull()
  })

  it("still diagnoses a rushed answer with high confidence", () => {
    const c = classifyMistake(attempt({ timeSpentMs: 12_000 }), undefined)
    expect(c.rootCause.value).not.toBeNull()
    expect(c.rootCause.confidence).toBe("high")
  })

  it("still diagnoses a labored answer on an easier question", () => {
    const c = classifyMistake(
      attempt({ difficulty: "Beginner", timeSpentMs: 260_000 }),
      undefined
    )
    expect(c.rootCause.value).not.toBeNull()
  })

  it("a no-signal miss produces nothing worth persisting", () => {
    // Both inferred fields empty => persistAutoClassifications skips the
    // row entirely (it only builds rows with a tag or a root cause).
    const c = classifyMistake(attempt(), undefined)
    const persistable =
      (c.mistakeType.value && c.mistakeType.confidence !== "low") ||
      (c.rootCause.value && c.rootCause.confidence !== "low")
    expect(persistable).toBeFalsy()
  })
})
