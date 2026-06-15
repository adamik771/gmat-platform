import { describe, it, expect } from "vitest"
import { groupByContext } from "@/lib/topic-skill"
import { orderForMock } from "@/lib/mock"
import type { ParsedQuestion } from "@/lib/content"
import type { Difficulty } from "@/types"

function q(id: string, difficulty: Difficulty, context?: string): ParsedQuestion {
  return { id, difficulty, context } as ParsedQuestion
}

const PASSAGE = "Passage 1: a long reading-comprehension passage"
const SET = "Set 1: multi-source reasoning tabs"

// A reading passage (3 grouped Qs) + an MSR set (2 grouped Qs) interleaved
// among standalone questions, with mixed difficulties inside each group.
const QUESTIONS: ParsedQuestion[] = [
  q("rc-q1", "Intermediate", PASSAGE),
  q("rc-q2", "Advanced", PASSAGE),
  q("rc-q3", "Beginner", PASSAGE),
  q("ps-q1", "Beginner"),
  q("ps-q2", "Advanced"),
  q("msr-q1", "Intermediate", SET),
  q("msr-q2", "Intermediate", SET),
  q("ps-q3", "Intermediate"),
  q("ps-q4", "Advanced"),
  q("ps-q5", "Beginner"),
]
const ALL_IDS = QUESTIONS.map((x) => x.id).sort()

/** True if every id in `group` occupies a contiguous run within `ids`. */
function contiguous(ids: string[], group: string[]): boolean {
  const positions = group.map((g) => ids.indexOf(g)).sort((a, b) => a - b)
  if (positions.some((p) => p < 0)) return false
  return positions[positions.length - 1] - positions[0] === positions.length - 1
}

describe("question grouping keeps passages/sets together when reordered", () => {
  it("groupByContext groups shared-context Qs; standalone are singletons", () => {
    const groups = groupByContext(QUESTIONS)
    const rc = groups.find((g) => g.some((x) => x.id === "rc-q1"))!
    expect(rc.map((x) => x.id)).toEqual(["rc-q1", "rc-q2", "rc-q3"])
    const msr = groups.find((g) => g.some((x) => x.id === "msr-q1"))!
    expect(msr.map((x) => x.id)).toEqual(["msr-q1", "msr-q2"])
    expect(groups.filter((g) => g.length === 1).length).toBe(5) // 5 standalone
  })

  it("orderForMock keeps the passage + set contiguous and loses nothing", () => {
    const ordered = orderForMock(QUESTIONS).map((x) => x.id)
    expect([...ordered].sort()).toEqual(ALL_IDS) // no drop / dup
    expect(contiguous(ordered, ["rc-q1", "rc-q2", "rc-q3"])).toBe(true)
    expect(contiguous(ordered, ["msr-q1", "msr-q2"])).toBe(true)
    // within-group order preserved
    const ids = ordered
    expect(ids.filter((i) => i.startsWith("rc-"))).toEqual([
      "rc-q1",
      "rc-q2",
      "rc-q3",
    ])
  })

  it("an all-standalone set is unchanged by grouping (singletons)", () => {
    const standalone = [
      q("a", "Beginner"),
      q("b", "Intermediate"),
      q("c", "Advanced"),
      q("d", "Beginner"),
    ]
    const groups = groupByContext(standalone)
    expect(groups.every((g) => g.length === 1)).toBe(true)
    expect(groups.flat().map((x) => x.id)).toEqual(["a", "b", "c", "d"])
  })
})
