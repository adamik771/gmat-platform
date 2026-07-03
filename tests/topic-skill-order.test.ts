import { describe, it, expect } from "vitest"
import {
  pickAdaptiveOrder,
  pickFreshOrder,
  MIN_ATTEMPTS_FOR_ADAPTIVE,
  DEFAULT_LEVEL,
  type TopicSkillLevel,
} from "@/lib/topic-skill"
import type { Difficulty } from "@/types"

const q = (id: string, difficulty: Difficulty = "Intermediate", context?: string) => ({
  id,
  difficulty,
  context,
})

const NEW_USER: TopicSkillLevel = { level: DEFAULT_LEVEL, attempts: 0, updatedAt: 0 }
const ADAPTIVE_USER: TopicSkillLevel = {
  level: DEFAULT_LEVEL,
  attempts: MIN_ATTEMPTS_FOR_ADAPTIVE,
  updatedAt: 0,
}

const seen = (entries: Array<[string, number]>) => new Map(entries)

describe("pickFreshOrder", () => {
  it("degrades to pickAdaptiveOrder when nothing was ever attempted", () => {
    const qs = [q("a"), q("b"), q("c")]
    expect(pickFreshOrder(qs, ADAPTIVE_USER, seen([]), { seed: 7 })).toEqual(
      pickAdaptiveOrder(qs, ADAPTIVE_USER, { seed: 7 })
    )
  })

  it("puts unseen questions first and seen ones last, least-recently-seen first", () => {
    const qs = [q("a"), q("b"), q("c"), q("d")]
    // b seen yesterday, d seen last week; a and c never attempted.
    const order = pickFreshOrder(
      qs,
      NEW_USER,
      seen([
        ["b", 2_000],
        ["d", 1_000],
      ])
    ).map((x) => x.id)
    // New user: unseen keep file order (a, c); then seen LRU (d before b).
    expect(order).toEqual(["a", "c", "d", "b"])
  })

  it("the second session continues where the first left off (the repeat complaint)", () => {
    const qs = [q("q1"), q("q2"), q("q3"), q("q4"), q("q5")]
    // First session: user answered q1-q2 and ended. Old behavior replayed
    // q1 first next time; now q3 leads.
    const secondSession = pickFreshOrder(
      qs,
      NEW_USER,
      seen([
        ["q1", 100],
        ["q2", 200],
      ])
    ).map((x) => x.id)
    expect(secondSession).toEqual(["q3", "q4", "q5", "q1", "q2"])
  })

  it("keeps a passage group atomic and counts it seen if ANY member was attempted", () => {
    const qs = [
      q("p1", "Intermediate", "passage-A"),
      q("p2", "Intermediate", "passage-A"),
      q("solo"),
    ]
    const order = pickFreshOrder(qs, NEW_USER, seen([["p1", 500]])).map((x) => x.id)
    // Whole passage sinks together (p2 rides with p1); solo leads as unseen.
    expect(order).toEqual(["solo", "p1", "p2"])
  })

  it("stamps a group with its MOST RECENT member attempt for LRU ordering", () => {
    const qs = [
      q("a1", "Intermediate", "set-A"),
      q("a2", "Intermediate", "set-A"),
      q("b1", "Intermediate", "set-B"),
    ]
    // set-A: members at 100 and 900 -> group time 900. set-B at 500.
    const order = pickFreshOrder(
      qs,
      NEW_USER,
      seen([
        ["a1", 100],
        ["a2", 900],
        ["b1", 500],
      ])
    ).map((x) => x.id)
    expect(order).toEqual(["b1", "a1", "a2"])
  })

  it("orders all-seen sets purely by least-recently-attempted", () => {
    const qs = [q("a"), q("b"), q("c")]
    const order = pickFreshOrder(
      qs,
      NEW_USER,
      seen([
        ["a", 300],
        ["b", 100],
        ["c", 200],
      ])
    ).map((x) => x.id)
    expect(order).toEqual(["b", "c", "a"])
  })

  it("applies the adaptive tier ordering within the unseen partition", () => {
    const qs = [q("hard", "Advanced"), q("easy", "Beginner"), q("mid"), q("gone")]
    const order = pickFreshOrder(qs, ADAPTIVE_USER, seen([["gone", 50]]), {
      seed: 3,
    }).map((x) => x.id)
    // Seen question is last regardless of the adaptive shuffle of the rest.
    expect(order[3]).toBe("gone")
    expect(order.slice(0, 3).sort()).toEqual(["easy", "hard", "mid"])
  })
})
