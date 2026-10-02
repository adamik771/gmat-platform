import { readFileSync } from "node:fs"
import { join } from "node:path"
import { describe, it, expect } from "vitest"
import {
  parseOfficialExamEntries,
  validateOfficialExamEntry,
  deriveExamUsage,
  nextAttemptNumber,
  deriveAttemptForEntry,
  planExamTagUpdates,
  isFirstAttempt,
  MAX_ATTEMPT_NUMBER,
  TOTAL_OFFICIAL_EXAMS,
  type OfficialExamEntry,
} from "@/lib/official-exams"

const MAX_ISO = "2026-07-18"

describe("parseOfficialExamEntries — canonical stored-shape parser", () => {
  it("reads legacy entries without examNumber (unclassified, never inferred)", () => {
    const entries = parseOfficialExamEntries({
      official_exam_scores: [
        { date: "2026-06-01", total: 605 },
        { date: "2026-06-08", total: 615, quant: 82, label: " Baseline " },
      ],
    })
    expect(entries).toHaveLength(2)
    expect(entries[0].examNumber).toBeUndefined()
    expect(entries[0].attemptNumber).toBeUndefined()
    expect(entries[1].quant).toBe(82)
    expect(entries[1].label).toBe("Baseline")
  })

  it("keeps valid examNumber/attemptNumber pairs", () => {
    const entries = parseOfficialExamEntries({
      official_exam_scores: [
        { date: "2026-06-01", total: 605, examNumber: 3, attemptNumber: 2 },
      ],
    })
    expect(entries[0].examNumber).toBe(3)
    expect(entries[0].attemptNumber).toBe(2)
  })

  it("drops invalid examNumber values but keeps the entry", () => {
    for (const bad of [0, 7, 2.5, "3", -1, NaN]) {
      const entries = parseOfficialExamEntries({
        official_exam_scores: [
          { date: "2026-06-01", total: 605, examNumber: bad },
        ],
      })
      expect(entries).toHaveLength(1)
      expect(entries[0].examNumber).toBeUndefined()
    }
  })

  it("drops attemptNumber when examNumber is missing or invalid", () => {
    const entries = parseOfficialExamEntries({
      official_exam_scores: [
        { date: "2026-06-01", total: 605, attemptNumber: 2 },
        { date: "2026-06-08", total: 615, examNumber: 9, attemptNumber: 2 },
      ],
    })
    expect(entries[0].attemptNumber).toBeUndefined()
    expect(entries[1].attemptNumber).toBeUndefined()
  })

  it("skips malformed entries and tolerates junk state", () => {
    expect(parseOfficialExamEntries(null)).toEqual([])
    expect(parseOfficialExamEntries({ official_exam_scores: "nope" })).toEqual([])
    const entries = parseOfficialExamEntries({
      official_exam_scores: [
        null,
        { date: "not-a-date", total: 605 },
        { date: "2026-06-01" },
        { date: "2026-06-02", total: 605 },
      ],
    })
    expect(entries).toHaveLength(1)
    expect(entries[0].date).toBe("2026-06-02")
  })
})

describe("validateOfficialExamEntry — API-shared validation", () => {
  const base = { date: "2026-06-01", total: 605 }

  it("accepts a full valid entry", () => {
    const result = validateOfficialExamEntry(
      { ...base, quant: 80, verbal: 84, di: 78, examNumber: 2, attemptNumber: 1 },
      MAX_ISO
    )
    expect("entry" in result && result.entry.examNumber).toBe(2)
    expect("entry" in result && result.entry.attemptNumber).toBe(1)
  })

  it("accepts a legacy-shaped entry with no exam identity", () => {
    const result = validateOfficialExamEntry(base, MAX_ISO)
    expect("entry" in result).toBe(true)
  })

  it("rejects attemptNumber without examNumber", () => {
    const result = validateOfficialExamEntry(
      { ...base, attemptNumber: 2 },
      MAX_ISO
    )
    expect("error" in result && result.error).toMatch(/requires entry.examNumber/)
  })

  it("rejects out-of-range examNumber and attemptNumber", () => {
    for (const examNumber of [0, TOTAL_OFFICIAL_EXAMS + 1, 1.5]) {
      const result = validateOfficialExamEntry({ ...base, examNumber }, MAX_ISO)
      expect("error" in result).toBe(true)
    }
    for (const attemptNumber of [0, MAX_ATTEMPT_NUMBER + 1, 1.5]) {
      const result = validateOfficialExamEntry(
        { ...base, examNumber: 1, attemptNumber },
        MAX_ISO
      )
      expect("error" in result).toBe(true)
    }
  })

  it("still enforces the existing date/total/section rules", () => {
    expect("error" in validateOfficialExamEntry({ ...base, date: "2027-01-01" }, MAX_ISO)).toBe(true)
    expect("error" in validateOfficialExamEntry({ ...base, total: 810 }, MAX_ISO)).toBe(true)
    expect("error" in validateOfficialExamEntry({ ...base, quant: 95 }, MAX_ISO)).toBe(true)
    expect("error" in validateOfficialExamEntry({ date: "junk", total: 605 }, MAX_ISO)).toBe(true)
  })

  it("round-trips through the stored shape unchanged (validate -> persist -> parse)", () => {
    const result = validateOfficialExamEntry(
      { ...base, verbal: 85, examNumber: 4, attemptNumber: 2, label: "Retake rep" },
      MAX_ISO
    )
    if (!("entry" in result)) throw new Error("expected valid entry")
    const parsed = parseOfficialExamEntries({
      official_exam_scores: [result.entry],
    })
    expect(parsed).toHaveLength(1)
    expect(parsed[0]).toEqual(result.entry)
  })
})

describe("deriveExamUsage — exam identity, not entry count", () => {
  it("counts unique exam numbers, out of order, with retakes and legacy entries", () => {
    const usage = deriveExamUsage([
      { date: "2026-05-01", total: 585, examNumber: 3 },
      { date: "2026-05-08", total: 595, examNumber: 1, attemptNumber: 1 },
      { date: "2026-05-15", total: 625, examNumber: 1, attemptNumber: 2 },
      { date: "2026-05-22", total: 605 }, // legacy, unclassified
    ])
    expect(usage.usedNumbers).toEqual([1, 3])
    expect(usage.unusedNumbers).toEqual([2, 4, 5, 6])
    expect(usage.retakeCount).toBe(1)
    expect(usage.unclassifiedCount).toBe(1)
    expect(usage.sittingCount).toBe(4)
  })

  it("six unique exams used means empty unused pool even with extra retakes", () => {
    const entries = [1, 2, 3, 4, 5, 6].map((n, i) => ({
      date: `2026-05-0${i + 1}`,
      total: 605,
      examNumber: n,
    }))
    entries.push({ date: "2026-05-09", total: 645, examNumber: 1, attemptNumber: 2 } as never)
    const usage = deriveExamUsage(entries)
    expect(usage.usedNumbers).toEqual([1, 2, 3, 4, 5, 6])
    expect(usage.unusedNumbers).toEqual([])
    expect(usage.sittingCount).toBe(7)
  })
})

describe("nextAttemptNumber", () => {
  const entries = [
    { date: "2026-05-01", total: 605, examNumber: 1 }, // implicit attempt 1
    { date: "2026-05-08", total: 615, examNumber: 2, attemptNumber: 3 },
  ]
  it("is 1 for an exam with no recorded attempts", () => {
    expect(nextAttemptNumber(entries, 4)).toBe(1)
  })
  it("is highest recorded + 1", () => {
    expect(nextAttemptNumber(entries, 1)).toBe(2)
    expect(nextAttemptNumber(entries, 2)).toBe(4)
  })
  it("is capped at MAX_ATTEMPT_NUMBER", () => {
    expect(
      nextAttemptNumber(
        [{ date: "2026-05-01", total: 605, examNumber: 1, attemptNumber: MAX_ATTEMPT_NUMBER }],
        1
      )
    ).toBe(MAX_ATTEMPT_NUMBER)
  })
})

describe("deriveAttemptForEntry — form preview semantics", () => {
  const entries: OfficialExamEntry[] = [
    { date: "2026-06-01", total: 605, examNumber: 3, attemptNumber: 1 },
    { date: "2026-06-08", total: 615, examNumber: 1 },
  ]

  it("overwriting the same date with the same exam keeps its attempt (edit, not retake)", () => {
    expect(deriveAttemptForEntry(entries, "2026-06-01", 3)).toBe(1)
  })

  it("a new date for an already-used exam is the next attempt", () => {
    expect(deriveAttemptForEntry(entries, "2026-06-15", 3)).toBe(2)
    expect(deriveAttemptForEntry(entries, "2026-06-15", 1)).toBe(2)
  })

  it("a new date for an unused exam is attempt 1", () => {
    expect(deriveAttemptForEntry(entries, "2026-06-15", 5)).toBe(1)
  })

  it("re-tagging the same date to a different exam counts the others only", () => {
    expect(deriveAttemptForEntry(entries, "2026-06-01", 1)).toBe(2)
  })
})

describe("planExamTagUpdates — chronology-consistent tagging", () => {
  it("tags a lone legacy entry as attempt 1 and preserves its fields", () => {
    const entries: OfficialExamEntry[] = [
      { date: "2026-06-01", total: 605, quant: 82, label: "First go" },
    ]
    const updates = planExamTagUpdates(entries, "2026-06-01", 2)
    expect(updates).toEqual([
      {
        date: "2026-06-01",
        total: 605,
        quant: 82,
        label: "First go",
        examNumber: 2,
        attemptNumber: 1,
      },
    ])
  })

  it("a middle-dated tag bumps later attempts of the same exam", () => {
    const entries: OfficialExamEntry[] = [
      { date: "2026-06-01", total: 585, examNumber: 1, attemptNumber: 1 },
      { date: "2026-06-20", total: 625, examNumber: 1, attemptNumber: 2 },
      { date: "2026-06-10", total: 605 }, // legacy, sits between the two
    ]
    const updates = planExamTagUpdates(entries, "2026-06-10", 1)
    // 06-01 already attempt 1 (no-op); 06-10 becomes attempt 2; 06-20 bumps to 3.
    expect(updates).toEqual([
      { date: "2026-06-10", total: 605, examNumber: 1, attemptNumber: 2 },
      { date: "2026-06-20", total: 625, examNumber: 1, attemptNumber: 3 },
    ])
  })

  it("tagging order cannot scramble ranks (newest tagged first, then oldest)", () => {
    const a: OfficialExamEntry = { date: "2026-06-01", total: 585 }
    const b: OfficialExamEntry = { date: "2026-06-20", total: 625 }
    // Tag the NEWER entry first: alone in the family, it becomes attempt 1.
    const first = planExamTagUpdates([a, b], "2026-06-20", 1)
    expect(first).toEqual([
      { date: "2026-06-20", total: 625, examNumber: 1, attemptNumber: 1 },
    ])
    // Then tag the OLDER one: it takes attempt 1 and the newer re-ranks to 2.
    const afterFirst: OfficialExamEntry[] = [a, first[0]]
    const second = planExamTagUpdates(afterFirst, "2026-06-01", 1)
    expect(second).toEqual([
      { date: "2026-06-01", total: 585, examNumber: 1, attemptNumber: 1 },
      { date: "2026-06-20", total: 625, examNumber: 1, attemptNumber: 2 },
    ])
  })

  it("returns [] for an unknown date and caps at MAX_ATTEMPT_NUMBER", () => {
    expect(planExamTagUpdates([], "2026-06-01", 1)).toEqual([])
    const many: OfficialExamEntry[] = Array.from(
      { length: MAX_ATTEMPT_NUMBER },
      (_, i) => ({
        date: `2026-05-${String(i + 1).padStart(2, "0")}`,
        total: 605,
        examNumber: 1,
        attemptNumber: i + 1,
      })
    )
    many.push({ date: "2026-06-01", total: 605 })
    const updates = planExamTagUpdates(many, "2026-06-01", 1)
    const target = updates.find((u) => u.date === "2026-06-01")
    expect(target?.attemptNumber).toBe(MAX_ATTEMPT_NUMBER)
  })
})

describe("isFirstAttempt — baseline anchoring rule", () => {
  it("legacy entries and attempt 1 are first attempts; retakes are not", () => {
    expect(isFirstAttempt({})).toBe(true)
    expect(isFirstAttempt({ attemptNumber: 1 })).toBe(true)
    expect(isFirstAttempt({ attemptNumber: 2 })).toBe(false)
  })
})

describe("retake vs reset copy in the plan client", () => {
  const src = readFileSync(
    join(__dirname, "../src/app/(app)/mock/OfficialExamPlanClient.tsx"),
    "utf8"
  )

  it('reserves "reset" for the paid product mechanism', () => {
    const resetLines = src
      .split("\n")
      .filter((line) => /reset/i.test(line))
    expect(resetLines.length).toBeGreaterThan(0)
    for (const line of resetLines) {
      expect(line).toMatch(/paid/i)
    }
  })

  it("never claims retakes are calibrated or mostly new", () => {
    expect(src).not.toMatch(/calibrated/i)
    expect(src).not.toMatch(/new questions/i)
    expect(src).toMatch(/inflated and less valid/i)
  })

  it("states the free-exam and paid-exam attempt facts", () => {
    expect(src).toMatch(/Exams 1-2 can be taken multiple times/i)
    expect(src).toMatch(/repeated questions become increasingly likely/i)
    expect(src).toMatch(/two attempts each/i)
  })
})
