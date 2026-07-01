import { describe, it, expect } from "vitest"
import {
  dropBlankAttempts,
  summarizeAnsweredAttempts,
} from "@/lib/practice-save"

// Minimal attempt stub — the helper is generic over the attempt shape.
const att = (id: number) => ({ id })

const item = (submitted: boolean, correct: boolean, id: number) => ({
  submitted,
  correct,
  attempt: att(id),
})

describe("summarizeAnsweredAttempts", () => {
  it("keeps only submitted questions and derives all totals from them", () => {
    // The prod case that motivated this: a 10-question review session ended
    // after 1 (wrong) answer used to persist 0/10 @ 0% with 9 blank attempts.
    const items = [
      item(true, false, 0),
      ...Array.from({ length: 9 }, (_, i) => item(false, false, i + 1)),
    ]
    const s = summarizeAnsweredAttempts(items)
    expect(s).not.toBeNull()
    expect(s!.attempts).toEqual([att(0)])
    expect(s!.totalQuestions).toBe(1)
    expect(s!.correctCount).toBe(0)
    expect(s!.accuracy).toBe(0)
  })

  it("returns null when nothing was submitted (no session worth a row)", () => {
    expect(
      summarizeAnsweredAttempts([item(false, false, 0), item(false, false, 1)])
    ).toBeNull()
    expect(summarizeAnsweredAttempts([])).toBeNull()
  })

  it("a fully answered session is unchanged by the filter", () => {
    const items = [
      item(true, true, 0),
      item(true, false, 1),
      item(true, true, 2),
      item(true, true, 3),
    ]
    const s = summarizeAnsweredAttempts(items)!
    expect(s.attempts.map((a) => a.id)).toEqual([0, 1, 2, 3])
    expect(s.totalQuestions).toBe(4)
    expect(s.correctCount).toBe(3)
    expect(s.accuracy).toBe(75)
  })

  it("accuracy denominator is the ANSWERED count, so the stored trio is always consistent", () => {
    // The historical inconsistency: 12 questions, 1 answered-and-correct used
    // to store correct_count=1, total_questions=12, accuracy=100. Now the
    // total is the answered count and 1/1 @ 100% is internally consistent.
    const items = [
      item(true, true, 0),
      ...Array.from({ length: 11 }, (_, i) => item(false, false, i + 1)),
    ]
    const s = summarizeAnsweredAttempts(items)!
    expect(s.totalQuestions).toBe(1)
    expect(s.correctCount).toBe(1)
    expect(s.accuracy).toBe(100)
  })

  it("rounds accuracy to a whole percent", () => {
    const items = [item(true, true, 0), item(true, true, 1), item(true, false, 2)]
    expect(summarizeAnsweredAttempts(items)!.accuracy).toBe(67)
  })

  it("preserves attempt order within the answered set", () => {
    const items = [
      item(false, false, 0),
      item(true, true, 1),
      item(false, false, 2),
      item(true, false, 3),
    ]
    expect(
      summarizeAnsweredAttempts(items)!.attempts.map((a) => a.id)
    ).toEqual([1, 3])
  })
})

// Server-side guard for payloads from stale pre-fix clients.
const blank = { selectedAnswer: null, isCorrect: false, timeSpentMs: 0 }
const answered = (selectedAnswer: number | null, isCorrect: boolean, timeSpentMs: number) => ({
  selectedAnswer,
  isCorrect,
  timeSpentMs,
})

describe("dropBlankAttempts", () => {
  it("drops blanks and recomputes the trio from what remains", () => {
    // The prod case: 1 answered (wrong) + 9 blanks used to store 0/10 @ 0%.
    const s = dropBlankAttempts([answered(2, false, 45_000), ...Array(9).fill(blank)])!
    expect(s.attempts).toHaveLength(1)
    expect(s.totalQuestions).toBe(1)
    expect(s.correctCount).toBe(0)
    expect(s.accuracy).toBe(0)
  })

  it("returns null when every attempt is blank", () => {
    expect(dropBlankAttempts([blank, blank])).toBeNull()
    expect(dropBlankAttempts([])).toBeNull()
  })

  it("keeps submitted two-part answers (null selectedAnswer but time on the clock)", () => {
    const twoPart = answered(null, true, 80_000)
    const s = dropBlankAttempts([twoPart, blank])!
    expect(s.attempts).toEqual([twoPart])
    expect(s.totalQuestions).toBe(1)
    expect(s.correctCount).toBe(1)
    expect(s.accuracy).toBe(100)
  })

  it("passes a fully answered payload through unchanged", () => {
    const attempts = [
      answered(0, true, 30_000),
      answered(1, false, 50_000),
      answered(null, true, 70_000),
    ]
    const s = dropBlankAttempts(attempts)!
    expect(s.attempts).toEqual(attempts)
    expect(s.totalQuestions).toBe(3)
    expect(s.correctCount).toBe(2)
    expect(s.accuracy).toBe(67)
  })
})
