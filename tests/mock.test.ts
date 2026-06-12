import { describe, it, expect } from "vitest"
import {
  inferScoreTier,
  getDifficultyMixForTarget,
  DIFFICULTY_MIX_BY_TIER,
  mockSlugFor,
  pickMockQuestions,
  difficultyMixOf,
  gatherFlaggedQuestionIds,
  MOCK_QUESTION_COUNT,
  MOCK_SECTION_MINUTES,
  MOCK_SECTIONS,
  MOCK_BREAK_MINUTES,
  type ScoreTier,
} from "@/lib/mock"
import type { Section, Difficulty } from "@/types"

const SECTIONS: Section[] = ["Quant", "Verbal", "DI"]
const TIERS: ScoreTier[] = ["foundation", "default", "stretch"]
const DIFFICULTIES: Difficulty[] = ["Beginner", "Intermediate", "Advanced"]

describe("inferScoreTier", () => {
  it("returns 'default' for non-number / non-finite inputs", () => {
    expect(inferScoreTier(null)).toBe("default")
    expect(inferScoreTier(undefined)).toBe("default")
    expect(inferScoreTier(NaN)).toBe("default")
    expect(inferScoreTier(Infinity)).toBe("default")
    // older user_metadata rows may carry strings — defensive fallback
    expect(inferScoreTier("605" as unknown as number)).toBe("default")
  })

  it("maps low targets to 'foundation' at and below the 545 boundary", () => {
    expect(inferScoreTier(205)).toBe("foundation")
    expect(inferScoreTier(500)).toBe("foundation")
    expect(inferScoreTier(545)).toBe("foundation") // inclusive upper edge
  })

  it("maps mid targets to 'default' just above the foundation edge", () => {
    expect(inferScoreTier(546)).toBe("default") // one tick above foundation
    expect(inferScoreTier(605)).toBe("default")
    expect(inferScoreTier(685)).toBe("default") // inclusive upper edge of default
  })

  it("maps high targets to 'stretch' strictly above 685", () => {
    expect(inferScoreTier(686)).toBe("stretch") // first stretch value
    expect(inferScoreTier(705)).toBe("stretch")
    expect(inferScoreTier(805)).toBe("stretch")
  })

  it("treats the 545 and 685 boundaries exactly as documented (<= / >)", () => {
    // 545 belongs to foundation, 545.0001 to default
    expect(inferScoreTier(545)).toBe("foundation")
    expect(inferScoreTier(545.0001)).toBe("default")
    // 685 belongs to default, 685.0001 to stretch
    expect(inferScoreTier(685)).toBe("default")
    expect(inferScoreTier(685.0001)).toBe("stretch")
  })
})

describe("DIFFICULTY_MIX_BY_TIER", () => {
  it("has an entry for every tier and every section", () => {
    for (const tier of TIERS) {
      expect(DIFFICULTY_MIX_BY_TIER[tier]).toBeDefined()
      for (const section of SECTIONS) {
        expect(DIFFICULTY_MIX_BY_TIER[tier][section]).toBeDefined()
      }
    }
  })

  it("each section mix sums to that section's MOCK_QUESTION_COUNT across every tier", () => {
    for (const tier of TIERS) {
      for (const section of SECTIONS) {
        const mix = DIFFICULTY_MIX_BY_TIER[tier][section]
        const sum = mix.Beginner + mix.Intermediate + mix.Advanced
        expect(sum).toBe(MOCK_QUESTION_COUNT[section])
      }
    }
  })

  it("uses only non-negative integer quotas", () => {
    for (const tier of TIERS) {
      for (const section of SECTIONS) {
        const mix = DIFFICULTY_MIX_BY_TIER[tier][section]
        for (const d of DIFFICULTIES) {
          expect(Number.isInteger(mix[d])).toBe(true)
          expect(mix[d]).toBeGreaterThanOrEqual(0)
        }
      }
    }
  })

  it("shifts weight from easy to hard as the tier rises (foundation < default < stretch on Advanced)", () => {
    for (const section of SECTIONS) {
      const f = DIFFICULTY_MIX_BY_TIER.foundation[section]
      const d = DIFFICULTY_MIX_BY_TIER.default[section]
      const s = DIFFICULTY_MIX_BY_TIER.stretch[section]
      // Advanced count is non-decreasing across the rising tiers
      expect(f.Advanced).toBeLessThanOrEqual(d.Advanced)
      expect(d.Advanced).toBeLessThanOrEqual(s.Advanced)
      // Beginner count is non-increasing across the rising tiers
      expect(f.Beginner).toBeGreaterThanOrEqual(d.Beginner)
      expect(d.Beginner).toBeGreaterThanOrEqual(s.Beginner)
    }
  })
})

describe("getDifficultyMixForTarget", () => {
  it("returns the foundation mix for a low target", () => {
    expect(getDifficultyMixForTarget("Quant", 500)).toEqual(
      DIFFICULTY_MIX_BY_TIER.foundation.Quant
    )
  })

  it("returns the default mix for a mid target and for a null target", () => {
    expect(getDifficultyMixForTarget("Verbal", 605)).toEqual(
      DIFFICULTY_MIX_BY_TIER.default.Verbal
    )
    expect(getDifficultyMixForTarget("Verbal", null)).toEqual(
      DIFFICULTY_MIX_BY_TIER.default.Verbal
    )
  })

  it("returns the stretch mix for a high target", () => {
    expect(getDifficultyMixForTarget("DI", 705)).toEqual(
      DIFFICULTY_MIX_BY_TIER.stretch.DI
    )
  })

  it("threads the same tier resolution as inferScoreTier for every section", () => {
    const targets = [null, 400, 545, 546, 685, 686, 805]
    for (const t of targets) {
      const tier = inferScoreTier(t)
      for (const section of SECTIONS) {
        expect(getDifficultyMixForTarget(section, t)).toBe(
          DIFFICULTY_MIX_BY_TIER[tier][section]
        )
      }
    }
  })
})

describe("mockSlugFor", () => {
  it("formats as mock-<YYYY-MM-DD>-<lowercased section>", () => {
    expect(mockSlugFor("Quant", "2026-06-12")).toBe("mock-2026-06-12-quant")
    expect(mockSlugFor("Verbal", "2026-06-12")).toBe("mock-2026-06-12-verbal")
    expect(mockSlugFor("DI", "2026-06-12")).toBe("mock-2026-06-12-di")
  })

  it("truncates a full ISO timestamp to its date portion (first 10 chars)", () => {
    expect(mockSlugFor("Quant", "2026-01-05T23:59:59.000Z")).toBe(
      "mock-2026-01-05-quant"
    )
  })

  it("matches the documented mock slug convention used for persistence", () => {
    const slug = mockSlugFor("DI", "2026-12-31T08:00:00Z")
    expect(slug).toBe("mock-2026-12-31-di")
    expect(slug).toMatch(/^mock-\d{4}-\d{2}-\d{2}-(quant|verbal|di)$/)
  })
})

describe("MOCK_QUESTION_COUNT / MOCK_SECTION_MINUTES / constants", () => {
  it("MOCK_SECTIONS lists exactly the three GMAT Focus sections", () => {
    expect(MOCK_SECTIONS).toEqual(["Quant", "Verbal", "DI"])
  })

  it("MOCK_QUESTION_COUNT matches the GMAT Focus per-section totals (Q21 / V23 / DI20)", () => {
    expect(MOCK_QUESTION_COUNT.Quant).toBe(21)
    expect(MOCK_QUESTION_COUNT.Verbal).toBe(23)
    expect(MOCK_QUESTION_COUNT.DI).toBe(20)
  })

  it("every section count is a positive integer", () => {
    for (const section of SECTIONS) {
      expect(Number.isInteger(MOCK_QUESTION_COUNT[section])).toBe(true)
      expect(MOCK_QUESTION_COUNT[section]).toBeGreaterThan(0)
    }
  })

  it("MOCK_SECTION_MINUTES is 45 for every section (GMAT Focus pacing)", () => {
    for (const section of SECTIONS) {
      expect(MOCK_SECTION_MINUTES[section]).toBe(45)
    }
  })

  it("MOCK_BREAK_MINUTES is the documented 10-minute optional break", () => {
    expect(MOCK_BREAK_MINUTES).toBe(10)
  })
})

describe("difficultyMixOf", () => {
  it("counts an empty set as all zeros", () => {
    expect(difficultyMixOf([])).toEqual({
      Beginner: 0,
      Intermediate: 0,
      Advanced: 0,
    })
  })

  it("tallies questions by difficulty bucket", () => {
    const qs = [
      { difficulty: "Beginner" },
      { difficulty: "Beginner" },
      { difficulty: "Intermediate" },
      { difficulty: "Advanced" },
      { difficulty: "Advanced" },
      { difficulty: "Advanced" },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ] as any
    expect(difficultyMixOf(qs)).toEqual({
      Beginner: 2,
      Intermediate: 1,
      Advanced: 3,
    })
  })
})

describe("gatherFlaggedQuestionIds", () => {
  it("returns an empty set for non-object / missing input", () => {
    expect(gatherFlaggedQuestionIds(null).size).toBe(0)
    expect(gatherFlaggedQuestionIds(undefined).size).toBe(0)
    expect(gatherFlaggedQuestionIds(42).size).toBe(0)
    expect(gatherFlaggedQuestionIds("nope").size).toBe(0)
    expect(gatherFlaggedQuestionIds({}).size).toBe(0)
    expect(gatherFlaggedQuestionIds({ mock_flags: null }).size).toBe(0)
  })

  it("flattens the per-date / per-section tree into a unique id set", () => {
    const meta = {
      mock_flags: {
        "2026-06-10": { Quant: ["algebra-q1", "algebra-q2"], DI: ["di-q5"] },
        "2026-06-11": { Verbal: ["cr-q3"], Quant: ["algebra-q2"] }, // dup algebra-q2
      },
    }
    const ids = gatherFlaggedQuestionIds(meta)
    expect(ids).toEqual(
      new Set(["algebra-q1", "algebra-q2", "di-q5", "cr-q3"])
    )
    expect(ids.size).toBe(4) // dedup collapsed the repeated algebra-q2
  })

  it("ignores malformed branches without throwing (non-array, non-object, non-string entries)", () => {
    const meta = {
      mock_flags: {
        "2026-06-10": { Quant: "not-an-array", DI: ["good-q1", 7, null] },
        "2026-06-11": "junk",
        "2026-06-12": null,
      },
    }
    const ids = gatherFlaggedQuestionIds(meta)
    expect(ids).toEqual(new Set(["good-q1"]))
  })
})

describe("pickMockQuestions (reads real content, deterministic)", () => {
  it("returns exactly MOCK_QUESTION_COUNT questions per section", () => {
    for (const section of SECTIONS) {
      const picked = pickMockQuestions(section)
      expect(picked.length).toBe(MOCK_QUESTION_COUNT[section])
    }
  })

  it("is deterministic — same section + index yields the same ids in the same order", () => {
    const a = pickMockQuestions("Quant")
    const b = pickMockQuestions("Quant")
    expect(a.map((q) => q.id)).toEqual(b.map((q) => q.id))
  })

  it("returns only questions belonging to the requested section, each with options", () => {
    const picked = pickMockQuestions("Verbal")
    for (const q of picked) {
      expect(q.section).toBe("Verbal")
      expect(q.options.length).toBeGreaterThan(0)
    }
  })

  it("returns no duplicate question ids within a section set", () => {
    const picked = pickMockQuestions("DI")
    const ids = picked.map((q) => q.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it("honours a countOverride for total length", () => {
    const picked = pickMockQuestions("Quant", undefined, 5)
    expect(picked.length).toBe(5)
  })

  it("honours a mixOverride — a hard-only mix yields no Beginner items", () => {
    // pool is large (>600 Quant) so the strict pass fills without top-up
    const hardMix: Record<Difficulty, number> = {
      Beginner: 0,
      Intermediate: 0,
      Advanced: 10,
    }
    const picked = pickMockQuestions("Quant", hardMix, 10)
    expect(picked.length).toBe(10)
    for (const q of picked) {
      expect(q.difficulty).toBe("Advanced")
    }
  })

  it("rotates the pool with mockIndex so a later mock draws a different leading slice", () => {
    const first = pickMockQuestions("Quant", undefined, undefined, 0)
    const rotated = pickMockQuestions("Quant", undefined, undefined, 50)
    // Both still valid full-length sets...
    expect(first.length).toBe(MOCK_QUESTION_COUNT.Quant)
    expect(rotated.length).toBe(MOCK_QUESTION_COUNT.Quant)
    // ...but the rotation offset produces a different selection.
    expect(rotated.map((q) => q.id)).not.toEqual(first.map((q) => q.id))
  })
})
