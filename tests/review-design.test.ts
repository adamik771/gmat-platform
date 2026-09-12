import { describe, expect, it } from "vitest"
import { reviewReason, reviewTiming } from "@/app/(app)/review/review-reasons"
import { computeRung, type ReviewCandidate } from "@/lib/review-queue"
import type { SpacedQuestion } from "@/lib/spaced-review"

const candidate: ReviewCandidate = {
  questionId: "fixture-q1", section: "Quant", topic: "Fixture", subtopic: "Fixture",
  attemptCount: 1, missCount: 0, lastCorrect: true, daysSinceLastSeen: 3,
  rung: 1, daysUntilDue: -1, flagged: false, saved: false, confidentMiss: false, priority: 10,
}

describe("truthful question review reasons", () => {
  it("labels correct-only due questions as retention", () => {
    expect(reviewReason(candidate).label).toBe("Retention review")
    expect(reviewReason(candidate).detail).not.toMatch(/miss|incorrect/i)
  })
  it("does not let historical misses or a saved flag relabel a corrected due question", () => {
    const corrected = { ...candidate, missCount: 3, attemptCount: 4, saved: true }
    expect(reviewReason(corrected).label).toBe("Retention review")
    expect(reviewReason(corrected).detail).not.toMatch(/miss|incorrect/i)
  })
  it("identifies an actual latest miss", () => {
    expect(reviewReason({ ...candidate, lastCorrect: false, missCount: 1, rung: 0 }).label).toBe("Previously missed")
  })
  it("explains saved and flagged questions shown ahead of their spacing interval", () => {
    expect(reviewReason({ ...candidate, daysUntilDue: 1, saved: true }).label).toBe("Saved")
    expect(reviewReason({ ...candidate, daysUntilDue: 1, flagged: true }).label).toBe("Flagged")
  })
  it("uses the unchanged ladder to recognize corrected items in the unified queue", () => {
    const question: SpacedQuestion = {
      kind: "question", id: "question:fixture-q1", questionId: "fixture-q1", section: "Quant", topic: "Fixture", subtopic: "Fixture",
      attemptCount: 3, missCount: 2, daysSinceLastSeen: 4, daysUntilDue: -2,
      rung: computeRung([false, false, true]), flagged: false, savedForReview: false,
      confidence: 1, priority: 50, href: "/review/quant", reason: "Old incorrect label",
    }
    expect(reviewReason(question).label).toBe("Retention review")
    expect(reviewReason({ ...question, rung: 0 }).label).toBe("Low confidence")
  })
  it("does not call an unattempted saved question a previous miss", () => {
    expect(reviewReason({ ...candidate, attemptCount: 0, missCount: 0, lastCorrect: false, rung: 0, saved: true }).label).toBe("Saved")
  })
  it.each([[-0.2, "Due today"], [-1.2, "1 day overdue"], [-2.8, "2 days overdue"], [0, "Due today"], [1.2, "Scheduled in 2 days"]])("formats due offset %s", (offset, label) => {
    expect(reviewTiming(Number(offset))).toBe(label)
  })
})
