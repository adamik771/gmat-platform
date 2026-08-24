import { describe, expect, it } from "vitest"
import {
  PRACTICE_RESUME_TTL_MS,
  parsePracticeResumeSnapshot,
  restorePracticeResume,
  type PracticeResumeSnapshot,
} from "@/lib/practice-resume"

const NOW = 2_000_000_000_000
const questions = [
  { id: "q1", options: ["A", "B", "C"], hints: ["hint"] },
  {
    id: "q2",
    options: ["row 1", "row 2", "row 3"],
    twoPartColumns: ["First", "Second"],
  },
]

function snapshot(overrides: Partial<PracticeResumeSnapshot> = {}): PracticeResumeSnapshot {
  return {
    version: 1,
    userId: "user-1",
    slug: "chapter-test",
    questionIds: ["q2", "q1"],
    states: [
      {
        selected: null,
        twoPartSelections: [2, 0],
        submitted: true,
        elapsedMs: 80_000,
        hintsRevealed: 0,
        confidence: "medium",
        firstInteractionMs: 20_000,
      },
      {
        selected: 1,
        submitted: false,
        elapsedMs: 0,
        hintsRevealed: 1,
        confidence: "high",
        firstInteractionMs: 12_000,
      },
    ],
    currentIdx: 1,
    currentElapsedMs: 42_000,
    mode: "study",
    isReplay: false,
    updatedAt: NOW,
    ...overrides,
  }
}

describe("practice resume snapshots", () => {
  it("restores order, position, answers, TPA selections, timer, and mode", () => {
    const restored = restorePracticeResume(JSON.stringify(snapshot()), questions, {
      userId: "user-1",
      slug: "chapter-test",
      now: NOW + 1_000,
    })
    expect(restored?.questions.map((q) => q.id)).toEqual(["q2", "q1"])
    expect(restored?.snapshot.currentIdx).toBe(1)
    expect(restored?.snapshot.currentElapsedMs).toBe(42_000)
    expect(restored?.snapshot.mode).toBe("study")
    expect(restored?.snapshot.states[0].twoPartSelections).toEqual([2, 0])
    expect(restored?.snapshot.states[1]).toMatchObject({
      selected: 1,
      hintsRevealed: 1,
      confidence: "high",
    })
  })

  it("rejects another user, another route, stale data, and changed decks", () => {
    expect(
      restorePracticeResume(snapshot(), questions, {
        userId: "user-2",
        slug: "chapter-test",
        now: NOW,
      })
    ).toBeNull()
    expect(
      restorePracticeResume(snapshot(), questions, {
        userId: "user-1",
        slug: "different",
        now: NOW,
      })
    ).toBeNull()
    expect(
      restorePracticeResume(snapshot(), questions, {
        userId: "user-1",
        slug: "chapter-test",
        now: NOW + PRACTICE_RESUME_TTL_MS + 1,
      })
    ).toBeNull()
    expect(
      restorePracticeResume(snapshot(), questions.slice(0, 1), {
        userId: "user-1",
        slug: "chapter-test",
        now: NOW,
      })
    ).toBeNull()
  })

  it("rejects answer indexes and hint counts that no longer fit live content", () => {
    const badAnswer = snapshot({
      states: [snapshot().states[0], { ...snapshot().states[1], selected: 9 }],
    })
    expect(
      restorePracticeResume(badAnswer, questions, {
        userId: "user-1",
        slug: "chapter-test",
        now: NOW,
      })
    ).toBeNull()

    const badHints = snapshot({
      states: [snapshot().states[0], { ...snapshot().states[1], hintsRevealed: 2 }],
    })
    expect(
      restorePracticeResume(badHints, questions, {
        userId: "user-1",
        slug: "chapter-test",
        now: NOW,
      })
    ).toBeNull()
  })

  it("bounds payload shape before it can enter user_state", () => {
    expect(parsePracticeResumeSnapshot(snapshot())).not.toBeNull()
    expect(parsePracticeResumeSnapshot({ ...snapshot(), states: [] })).toBeNull()
    expect(
      parsePracticeResumeSnapshot({
        ...snapshot(),
        questionIds: Array.from({ length: 101 }, (_, i) => `q${i}`),
      })
    ).toBeNull()
  })
})
