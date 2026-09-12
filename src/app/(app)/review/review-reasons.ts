import type { ReviewCandidate } from "@/lib/review-queue"
import type { SpacedQuestion } from "@/lib/spaced-review"

type QuestionEvidence = ReviewCandidate | SpacedQuestion

export function reviewReason(item: QuestionEvidence): { label: string; detail: string } {
  const saved = "saved" in item ? item.saved : item.savedForReview
  // The unified queue omits lastCorrect. Its question ladder is positive
  // exactly when the latest attempt was correct; a miss resets it to zero.
  const lastCorrect = "lastCorrect" in item ? item.lastCorrect : item.rung > 0
  const retention = { label: "Retention review", detail: "Your last answer was correct. The spacing interval has elapsed; this review checks retention." }
  if (lastCorrect && item.daysUntilDue <= 0) return retention
  if (saved) return { label: "Saved", detail: "You saved this question for review, so it can appear before its scheduled date." }
  if (item.flagged) return { label: "Flagged", detail: "You flagged this question during a mock, so it can appear before its scheduled date." }
  if (lastCorrect || item.missCount === 0) {
    return retention
  }
  if ("confidence" in item && item.confidence !== null && item.confidence <= 2) {
    return { label: "Low confidence", detail: "Your last review had a low confidence rating. Revisit the method and check your answer." }
  }
  return { label: "Previously missed", detail: "Your last answer was incorrect. A corrective review is due." }
}

export function reviewTiming(daysUntilDue: number): string {
  if (daysUntilDue < 0) {
    const days = Math.floor(-daysUntilDue)
    return days === 0 ? "Due today" : `${days} day${days === 1 ? "" : "s"} overdue`
  }
  if (daysUntilDue === 0) return "Due today"
  const days = Math.ceil(daysUntilDue)
  return `Scheduled in ${days} day${days === 1 ? "" : "s"}`
}
