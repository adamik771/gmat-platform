import { describe, it, expect } from "vitest"
import {
  ACTIVE_DECK_TTL_MS,
  RECENT_SEEN_COOLDOWN_MS,
  balanceDataSufficiencyOrder,
  buildLastSeenMap,
  planCustomSet,
  restoreDeckOrder,
  selectFresh,
  serializeDeck,
  withContextLastSeen,
} from "@/lib/question-selection"

const q = (id: string, section = "Quant") => ({ id, section })
const seen = (entries: Array<[string, number]>) => new Map(entries)

const NOW = 1_000_000_000_000
const HOUR = 60 * 60 * 1000

describe("balanceDataSufficiencyOrder", () => {
  const ds = (id: string, answer: string, difficulty = "Intermediate") => ({
    id,
    section: "DI",
    type: "Data Sufficiency",
    correctAnswerLetter: answer,
    difficulty,
  })

  it("rotates available DS outcomes instead of serving a C-heavy streak", () => {
    const ordered = [
      ds("c1", "C"),
      ds("c2", "C"),
      ds("c3", "C"),
      ds("a1", "A"),
      ds("b1", "B"),
      ds("d1", "D"),
      ds("e1", "E"),
    ]
    const balanced = balanceDataSufficiencyOrder(ordered, { seed: 0 })
    expect(balanced.slice(0, 5).map((q) => q.correctAnswerLetter)).toEqual([
      "A",
      "B",
      "C",
      "D",
      "E",
    ])
    expect(balanced.map((q) => q.id).sort()).toEqual(
      ordered.map((q) => q.id).sort()
    )
  })

  it("does not move a seen question into an unseen slot", () => {
    const ordered = [ds("fresh-c", "C"), ds("fresh-a", "A"), ds("seen-b", "B")]
    const balanced = balanceDataSufficiencyOrder(ordered, {
      lastSeenAt: seen([["seen-b", NOW - HOUR]]),
    })
    expect(balanced[2].id).toBe("seen-b")
  })

  it("preserves non-DS positions and difficulty bands", () => {
    const other = {
      id: "chart",
      section: "DI",
      type: "Graphics Interpretation",
      correctAnswerLetter: "C",
      difficulty: "Intermediate",
    }
    const ordered = [
      ds("easy-c", "C", "Beginner"),
      other,
      ds("hard-a", "A", "Advanced"),
      ds("hard-c", "C", "Advanced"),
    ]
    const balanced = balanceDataSufficiencyOrder(ordered)
    expect(balanced[0].difficulty).toBe("Beginner")
    expect(balanced[1]).toBe(other)
    expect(balanced.slice(2).every((q) => q.difficulty === "Advanced")).toBe(true)
  })
})

describe("selectFresh", () => {
  it("serves unseen questions before any seen one", () => {
    const pool = [q("a"), q("b"), q("c"), q("d")]
    const { picked } = selectFresh(pool, 4, seen([["b", NOW - HOUR]]), {
      seed: 1,
      now: NOW,
    })
    // b (the only seen question) must come last.
    expect(picked.map((x) => x.id)[3]).toBe("b")
    expect(picked).toHaveLength(4)
  })

  it("avoids repeats entirely while unseen alternatives cover the request", () => {
    const pool = [q("a"), q("b"), q("c"), q("d"), q("e"), q("f")]
    const result = selectFresh(
      pool,
      3,
      seen([
        ["a", NOW - HOUR],
        ["b", NOW - 2 * HOUR],
      ]),
      { seed: 5, now: NOW }
    )
    expect(result.repeatCount).toBe(0)
    expect(result.recentRepeatCount).toBe(0)
    expect(result.picked.map((x) => x.id).sort()).not.toContain("a")
    expect(result.picked).toHaveLength(3)
  })

  it("small pools still produce a full valid set — repeats fill in, never a short set", () => {
    const pool = [q("a"), q("b"), q("c")]
    const result = selectFresh(
      pool,
      10,
      seen([
        ["a", NOW - HOUR],
        ["b", NOW - 2 * HOUR],
        ["c", NOW - 3 * HOUR],
      ]),
      { seed: 2, now: NOW }
    )
    expect(result.picked).toHaveLength(3)
    expect(result.repeatCount).toBe(3)
  })

  it("forced repeats come least-recently-attempted first", () => {
    const pool = [q("a"), q("b"), q("c")]
    const { picked } = selectFresh(
      pool,
      3,
      seen([
        ["a", 300],
        ["b", 100],
        ["c", 200],
      ]),
      { seed: 9, now: NOW }
    )
    expect(picked.map((x) => x.id)).toEqual(["b", "c", "a"])
  })

  it("classifies repeats inside the cooldown window as recent", () => {
    const pool = [q("old"), q("fresh"), q("recent")]
    const result = selectFresh(
      pool,
      3,
      seen([
        ["old", NOW - RECENT_SEEN_COOLDOWN_MS - HOUR],
        ["recent", NOW - HOUR],
      ]),
      { seed: 3, now: NOW }
    )
    expect(result.repeatCount).toBe(2)
    expect(result.recentRepeatCount).toBe(1)
  })

  it("never mutates the pool (selection is read-only over history and pool)", () => {
    const pool = [q("a"), q("b"), q("c"), q("d")]
    const snapshot = pool.map((x) => x.id)
    selectFresh(pool, 2, seen([["a", 1]]), { seed: 1, now: NOW })
    expect(pool.map((x) => x.id)).toEqual(snapshot)
  })
})

describe("planCustomSet", () => {
  it("keeps the even round-robin split across sections while preferring unseen per section", () => {
    const pool = [
      q("q1", "Quant"),
      q("q2", "Quant"),
      q("q3", "Quant"),
      q("v1", "Verbal"),
      q("v2", "Verbal"),
      q("v3", "Verbal"),
    ]
    const result = planCustomSet(
      pool,
      ["Quant", "Verbal"],
      4,
      seen([
        ["q1", NOW - HOUR],
        ["v2", NOW - HOUR],
      ]),
      { seed: 4, now: NOW }
    )
    const ids = result.picked.map((x) => x.id)
    expect(ids).toHaveLength(4)
    // 2 per section...
    expect(ids.filter((id) => id.startsWith("q"))).toHaveLength(2)
    expect(ids.filter((id) => id.startsWith("v"))).toHaveLength(2)
    // ...and the seen ones are skipped since each section has enough unseen.
    expect(ids).not.toContain("q1")
    expect(ids).not.toContain("v2")
    expect(result.repeatCount).toBe(0)
  })

  it("falls back to repeats within a section when its unseen run out", () => {
    const pool = [q("q1", "Quant"), q("q2", "Quant"), q("v1", "Verbal")]
    const result = planCustomSet(
      pool,
      ["Quant", "Verbal"],
      3,
      seen([["q1", NOW - HOUR], ["q2", NOW - 2 * HOUR]]),
      { seed: 4, now: NOW }
    )
    expect(result.picked).toHaveLength(3)
    expect(result.repeatCount).toBe(2)
    // Within Quant, least-recent (q2) is drawn before q1.
    const quantIds = result.picked.filter((x) => x.section === "Quant").map((x) => x.id)
    expect(quantIds).toEqual(["q2", "q1"])
  })

  it("is deterministic for a given seed (the UI notice matches the built set)", () => {
    const pool = [q("a"), q("b"), q("c"), q("d"), q("e")]
    const p1 = planCustomSet(pool, ["Quant"], 3, seen([]), { seed: 7, now: NOW })
    const p2 = planCustomSet(pool, ["Quant"], 3, seen([]), { seed: 7, now: NOW })
    expect(p1.picked.map((x) => x.id)).toEqual(p2.picked.map((x) => x.id))
  })
})

describe("withContextLastSeen (RC/MSR passage-level cooldown)", () => {
  it("marks a passage's untouched siblings as seen via the group's most recent attempt", () => {
    const questions = [
      { id: "p1", context: "passage text A" },
      { id: "p2", context: "passage text A" },
      { id: "solo" },
    ]
    const effective = withContextLastSeen(questions, seen([["p1", 500]]))
    expect(effective.get("p1")).toBe(500)
    expect(effective.get("p2")).toBe(500) // never attempted, but the passage was
    expect(effective.has("solo")).toBe(false)
  })

  it("uses the group max and keeps a member's own later attempt", () => {
    const questions = [
      { id: "a1", context: "set B" },
      { id: "a2", context: "set B" },
    ]
    const effective = withContextLastSeen(
      questions,
      seen([
        ["a1", 100],
        ["a2", 900],
      ])
    )
    expect(effective.get("a1")).toBe(900)
    expect(effective.get("a2")).toBe(900)
  })
})

describe("buildLastSeenMap", () => {
  it("keeps the most recent attempt per question regardless of row order", () => {
    const map = buildLastSeenMap([
      { question_id: "a", created_at: "2026-01-01T00:00:00Z" },
      { question_id: "a", created_at: "2026-03-01T00:00:00Z" },
      { question_id: "a", created_at: "2026-02-01T00:00:00Z" },
    ])
    expect(map.get("a")).toBe(new Date("2026-03-01T00:00:00Z").getTime())
  })

  it("skips null ids and unparseable timestamps", () => {
    const map = buildLastSeenMap([
      { question_id: null, created_at: "2026-01-01T00:00:00Z" },
      { question_id: "b", created_at: "not-a-date" },
      { question_id: "c", created_at: null },
      { question_id: "d", created_at: "2026-01-01T00:00:00Z" },
    ])
    expect([...map.keys()]).toEqual(["d"])
  })
})

describe("restoreDeckOrder (active-attempt stability)", () => {
  const deck = [q("a"), q("b"), q("c")]

  it("restores the stored order over a reshuffled incoming deck", () => {
    const stored = serializeDeck(["c", "a", "b"], NOW - HOUR)
    const restored = restoreDeckOrder(stored, deck, NOW)
    expect(restored?.map((x) => x.id)).toEqual(["c", "a", "b"])
  })

  it("rejects a stale deck (TTL) so a returning student gets a fresh attempt", () => {
    const stored = serializeDeck(["c", "a", "b"], NOW - ACTIVE_DECK_TTL_MS - 1)
    expect(restoreDeckOrder(stored, deck, NOW)).toBeNull()
  })

  it("rejects any id-set mismatch — changed pools and redo-missed subsets never corrupt a deck", () => {
    const fresh = NOW - HOUR
    // Subset (redo-missed deck stored, full deck incoming).
    expect(restoreDeckOrder(serializeDeck(["a", "b"], fresh), deck, NOW)).toBeNull()
    // Different member.
    expect(restoreDeckOrder(serializeDeck(["a", "b", "x"], fresh), deck, NOW)).toBeNull()
    // Duplicated stored id can't sneak past the length check.
    expect(restoreDeckOrder(serializeDeck(["a", "a", "b"], fresh), deck, NOW)).toBeNull()
  })

  it("rejects malformed storage payloads", () => {
    expect(restoreDeckOrder(null, deck, NOW)).toBeNull()
    expect(restoreDeckOrder("", deck, NOW)).toBeNull()
    expect(restoreDeckOrder("not json", deck, NOW)).toBeNull()
    expect(restoreDeckOrder("{}", deck, NOW)).toBeNull()
    expect(restoreDeckOrder('{"ids":"a","savedAt":1}', deck, NOW)).toBeNull()
    expect(restoreDeckOrder('{"ids":[1,2,3],"savedAt":1}', deck, NOW)).toBeNull()
  })

  it("never mutates the incoming deck", () => {
    const stored = serializeDeck(["c", "a", "b"], NOW - HOUR)
    restoreDeckOrder(stored, deck, NOW)
    expect(deck.map((x) => x.id)).toEqual(["a", "b", "c"])
  })
})
