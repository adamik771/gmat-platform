import { describe, it, expect } from "vitest"
import {
  deriveExamRoadmap,
  deriveScheduleSlots,
  FREE_OFFICIAL_EXAMS,
  TOTAL_OFFICIAL_EXAMS,
} from "@/lib/official-exams"

// Reference exam date used across cases. Weekly slots (deriveScheduleSlots):
//   07-01, 07-08, 07-15, 07-22, 07-29, 08-05  (exam 2026-08-12)
const EXAM = "2026-08-12"

describe("official exam constants", () => {
  it("six officials exist, two of them free", () => {
    expect(TOTAL_OFFICIAL_EXAMS).toBe(6)
    expect(FREE_OFFICIAL_EXAMS).toBe(2)
  })
})

describe("deriveExamRoadmap — baseline (0 officials)", () => {
  it("recommends Official Practice Exam 1 as the baseline, regardless of timing", () => {
    const r = deriveExamRoadmap({
      todayIso: "2026-05-01",
      examDate: EXAM,
      officialCount: 0,
      siteMockCount: 0,
    })
    expect(r.kind).toBe("official")
    expect(r.officialNumber).toBe(1)
    expect(r.isRetake).toBe(false)
    expect(r.caution).toBeNull()
  })

  it("without a test date, still recommends the baseline but asks for the date first", () => {
    const r = deriveExamRoadmap({
      todayIso: "2026-05-01",
      examDate: null,
      officialCount: 0,
      siteMockCount: 0,
    })
    expect(r.kind).toBe("official")
    expect(r.officialNumber).toBe(1)
    expect(r.prereq).toMatch(/test date/i)
  })
})

describe("deriveExamRoadmap — midpoint (some officials taken)", () => {
  it("recommends the next official when its weekly slot is within a week", () => {
    // 2 entered -> next slot index 2 = 07-15; today 07-10 is 5 days out.
    const r = deriveExamRoadmap({
      todayIso: "2026-07-10",
      examDate: EXAM,
      officialCount: 2,
      siteMockCount: 1,
    })
    expect(r.kind).toBe("official")
    expect(r.officialNumber).toBe(3)
    expect(r.isRetake).toBe(false)
    expect(r.officialTargetDate).toBe("2026-07-15")
  })

  it("recommends an in-platform mock when the next official slot is over a week out", () => {
    // 1 entered -> next slot index 1 = 07-08; today 06-01 is far out.
    const r = deriveExamRoadmap({
      todayIso: "2026-06-01",
      examDate: EXAM,
      officialCount: 1,
      siteMockCount: 0,
    })
    expect(r.kind).toBe("site-mock")
    expect(r.officialNumber).toBe(2) // next official is still tracked
    expect(r.officialTargetDate).toBe("2026-07-08")
    expect(r.reason).toMatch(/Official Practice Exam 2/)
  })

  it("flags an overdue slot and still recommends the official", () => {
    // 0f the schedule: 3 entered -> slot index 3 = 07-22; today 07-25.
    const r = deriveExamRoadmap({
      todayIso: "2026-07-25",
      examDate: EXAM,
      officialCount: 3,
      siteMockCount: 2,
    })
    expect(r.kind).toBe("official")
    expect(r.officialNumber).toBe(4)
    expect(r.reason).toMatch(/passed/i)
  })

  it("without a test date, saves remaining officials and points at site mocks", () => {
    const r = deriveExamRoadmap({
      todayIso: "2026-06-01",
      examDate: null,
      officialCount: 2,
      siteMockCount: 0,
    })
    expect(r.kind).toBe("site-mock")
    expect(r.officialNumber).toBe(3)
    expect(r.prereq).toMatch(/test date/i)
  })
})

describe("deriveExamRoadmap — short timelines", () => {
  it("never schedules a full official inside the final week", () => {
    const r = deriveExamRoadmap({
      todayIso: "2026-08-08", // 4 days to exam
      examDate: EXAM,
      officialCount: 4,
      siteMockCount: 3,
    })
    expect(r.kind).toBe("site-mock")
    expect(r.officialNumber).toBeNull()
    expect(r.reason).toMatch(/fatigue|final/i)
  })

  it("notes when more officials remain than weekly slots left (no impossible schedule)", () => {
    // Today 07-20: remaining slots are 07-22, 07-29, 08-05 (3). 1 official
    // entered -> 5 remain > 3 slots. Slot 07-08 (index 1) already passed, so
    // the next official is recommended (overdue) with the overbooked note.
    const r = deriveExamRoadmap({
      todayIso: "2026-07-20",
      examDate: EXAM,
      officialCount: 1,
      siteMockCount: 0,
    })
    expect(r.kind).toBe("official")
    expect(r.reason).toMatch(/won't use them all/i)
    expect(r.reason).toMatch(/never sit two full exams in one week/i)
  })
})

describe("deriveExamRoadmap — all six consumed", () => {
  it("recommends the optional Exam 1 reset only 1-3 weeks out, with the repeat caution", () => {
    const r = deriveExamRoadmap({
      todayIso: "2026-07-29", // 14 days to exam
      examDate: EXAM,
      officialCount: 6,
      siteMockCount: 4,
    })
    expect(r.kind).toBe("official")
    expect(r.officialNumber).toBe(1)
    expect(r.isRetake).toBe(true)
    expect(r.caution).toMatch(/repeated questions/i)
    expect(r.caution).toMatch(/optimistic/i)
    // Never claims a reset guarantees new questions.
    expect(r.caution).not.toMatch(/new questions/i)
  })

  it("recommends site mocks (not retakes) for routine checkpoints when the exam is far out", () => {
    const r = deriveExamRoadmap({
      todayIso: "2026-06-01",
      examDate: EXAM,
      officialCount: 6,
      siteMockCount: 0,
    })
    expect(r.kind).toBe("site-mock")
    expect(r.isRetake).toBe(false)
    expect(r.caution).toMatch(/repeated questions/i)
  })

  it("tapers inside the final week even with all officials used", () => {
    const r = deriveExamRoadmap({
      todayIso: "2026-08-10",
      examDate: EXAM,
      officialCount: 6,
      siteMockCount: 4,
    })
    expect(r.kind).toBe("site-mock")
    expect(r.officialNumber).toBeNull()
  })
})

describe("deriveExamRoadmap — setup problems", () => {
  it("asks for a date update when the saved test date has passed", () => {
    const r = deriveExamRoadmap({
      todayIso: "2026-08-13",
      examDate: EXAM,
      officialCount: 2,
      siteMockCount: 0,
    })
    expect(r.kind).toBe("setup")
    expect(r.reason).toMatch(/passed/i)
  })
})

describe("deriveExamRoadmap — consistency with the weekly schedule", () => {
  it("its official target date is always one of the derived weekly slots", () => {
    const slots = deriveScheduleSlots(EXAM)
    for (const count of [1, 2, 3, 4, 5]) {
      const r = deriveExamRoadmap({
        todayIso: "2026-06-20",
        examDate: EXAM,
        officialCount: count,
        siteMockCount: 0,
      })
      if (r.officialTargetDate) {
        expect(slots).toContain(r.officialTargetDate)
      }
    }
  })
})
