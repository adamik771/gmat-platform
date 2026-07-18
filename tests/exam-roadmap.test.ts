import { describe, it, expect } from "vitest"
import {
  deriveExamRoadmap,
  deriveScheduleSlots,
  FREE_OFFICIAL_EXAMS,
  TOTAL_OFFICIAL_EXAMS,
  RETAKE_CAUTION,
  type OfficialExamEntry,
} from "@/lib/official-exams"

// Reference exam date used across cases. Weekly slots (deriveScheduleSlots):
//   07-01, 07-08, 07-15, 07-22, 07-29, 08-05  (exam 2026-08-12)
const EXAM = "2026-08-12"

/** Entry builder: e("2026-06-01", 3) = Exam 3 first attempt on that date;
 *  omit examNumber for a legacy unclassified entry. */
function e(
  date: string,
  examNumber?: number,
  attemptNumber?: number
): OfficialExamEntry {
  return {
    date,
    total: 605,
    ...(examNumber !== undefined ? { examNumber } : {}),
    ...(attemptNumber !== undefined ? { attemptNumber } : {}),
  }
}

describe("official exam constants", () => {
  it("six officials exist, two of them free", () => {
    expect(TOTAL_OFFICIAL_EXAMS).toBe(6)
    expect(FREE_OFFICIAL_EXAMS).toBe(2)
  })
})

describe("deriveExamRoadmap — baseline (no entries)", () => {
  it("recommends Official Practice Exam 1 as the baseline, regardless of timing", () => {
    const r = deriveExamRoadmap({
      todayIso: "2026-05-01",
      examDate: EXAM,
      entries: [],
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
      entries: [],
      siteMockCount: 0,
    })
    expect(r.kind).toBe("official")
    expect(r.officialNumber).toBe(1)
    expect(r.prereq).toMatch(/test date/i)
  })
})

describe("deriveExamRoadmap — exam identity (recorded exam numbers, not entry count)", () => {
  it("recommends the lowest UNUSED exam when exams were taken out of order", () => {
    // Took Exam 1 then Exam 3 — next is 2, never 3 (= count + 1).
    const r = deriveExamRoadmap({
      todayIso: "2026-07-10",
      examDate: EXAM,
      entries: [e("2026-06-24", 1), e("2026-07-08", 3)],
      siteMockCount: 1,
    })
    expect(r.kind).toBe("official")
    expect(r.officialNumber).toBe(2)
    expect(r.isRetake).toBe(false)
  })

  it("an early Exam 1 retake never consumes an unused exam", () => {
    // Exam 1 twice + Exam 2 once = 3 sittings but only 2 exams used;
    // the recommendation is unused Exam 3, not Exam 4.
    const r = deriveExamRoadmap({
      todayIso: "2026-07-10",
      examDate: EXAM,
      entries: [
        e("2026-06-17", 1, 1),
        e("2026-06-24", 1, 2),
        e("2026-07-08", 2, 1),
      ],
      siteMockCount: 1,
    })
    expect(r.officialNumber).toBe(3)
    expect(r.isRetake).toBe(false)
  })

  it("multiple attempts of the same exam leave the other five as the pool", () => {
    const r = deriveExamRoadmap({
      todayIso: "2026-06-01",
      examDate: null,
      entries: [e("2026-05-01", 2, 1), e("2026-05-10", 2, 2), e("2026-05-20", 2, 3)],
      siteMockCount: 0,
    })
    // Officials remain (1, 3, 4, 5, 6) — lowest unused is 1.
    expect(r.officialNumber).toBe(1)
    expect(r.isRetake).toBe(false)
  })

  it("more than six entries with six unique exams still lands in the all-six branch", () => {
    const entries = [
      e("2026-05-01", 1),
      e("2026-05-08", 2),
      e("2026-05-15", 3),
      e("2026-05-22", 4),
      e("2026-05-29", 5),
      e("2026-06-05", 6),
      e("2026-06-12", 1, 2),
      e("2026-06-19", 2, 2),
    ]
    const r = deriveExamRoadmap({
      todayIso: "2026-06-25",
      examDate: EXAM,
      entries,
      siteMockCount: 2,
    })
    // Far out from the exam: routine checkpoints on site mocks.
    expect(r.kind).toBe("site-mock")
    expect(r.isRetake).toBe(false)
  })
})

describe("deriveExamRoadmap — legacy unclassified entries", () => {
  it("asks to tag entries instead of inventing exam numbers", () => {
    const r = deriveExamRoadmap({
      todayIso: "2026-07-10",
      examDate: EXAM,
      entries: [e("2026-06-24"), e("2026-07-08")],
      siteMockCount: 0,
    })
    expect(r.kind).toBe("classify")
    expect(r.officialNumber).toBeNull()
    expect(r.title).toMatch(/tag/i)
    // Generic guidance only — no specific exam number presented as fact.
    expect(r.title).not.toMatch(/Exam \d/)
    expect(r.reason).not.toMatch(/Exam [1-6] is (due|next|scheduled)/)
  })

  it("one unclassified entry among classified ones still forces the tagging step", () => {
    const r = deriveExamRoadmap({
      todayIso: "2026-07-10",
      examDate: EXAM,
      entries: [e("2026-06-24", 1), e("2026-07-08")],
      siteMockCount: 0,
    })
    expect(r.kind).toBe("classify")
    expect(r.officialNumber).toBeNull()
  })

  it("a passed test date still wins over classification", () => {
    const r = deriveExamRoadmap({
      todayIso: "2026-08-13",
      examDate: EXAM,
      entries: [e("2026-06-24")],
      siteMockCount: 0,
    })
    expect(r.kind).toBe("setup")
  })
})

describe("deriveExamRoadmap — midpoint scheduling", () => {
  it("recommends the next official when its weekly slot is within a week", () => {
    // 2 sittings -> next slot index 2 = 07-15; today 07-10 is 5 days out.
    const r = deriveExamRoadmap({
      todayIso: "2026-07-10",
      examDate: EXAM,
      entries: [e("2026-07-01", 1), e("2026-07-08", 2)],
      siteMockCount: 1,
    })
    expect(r.kind).toBe("official")
    expect(r.officialNumber).toBe(3)
    expect(r.isRetake).toBe(false)
    expect(r.officialTargetDate).toBe("2026-07-15")
  })

  it("recommends an in-platform mock when the next official slot is over a week out", () => {
    const r = deriveExamRoadmap({
      todayIso: "2026-06-01",
      examDate: EXAM,
      entries: [e("2026-05-20", 1)],
      siteMockCount: 0,
    })
    expect(r.kind).toBe("site-mock")
    expect(r.officialNumber).toBe(2)
    expect(r.officialTargetDate).toBe("2026-07-08")
    expect(r.reason).toMatch(/Official Practice Exam 2/)
  })

  it("flags an overdue slot and still recommends the official", () => {
    const r = deriveExamRoadmap({
      todayIso: "2026-07-25",
      examDate: EXAM,
      entries: [e("2026-07-01", 1), e("2026-07-08", 2), e("2026-07-15", 3)],
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
      entries: [e("2026-05-01", 1), e("2026-05-15", 2)],
      siteMockCount: 0,
    })
    expect(r.kind).toBe("site-mock")
    expect(r.officialNumber).toBe(3)
    expect(r.prereq).toMatch(/test date/i)
  })
})

describe("deriveExamRoadmap — retake window boundaries (all six used)", () => {
  const allSix = [1, 2, 3, 4, 5, 6].map((n, i) =>
    e(`2026-06-0${i + 1}`, n)
  )

  it("offers the retake at exactly 8 and 21 days out; not at 22; tapers at 7", () => {
    const at = (todayIso: string) =>
      deriveExamRoadmap({ todayIso, examDate: EXAM, entries: allSix, siteMockCount: 3 })
    expect(at("2026-08-04").isRetake).toBe(true) // 8 days out
    expect(at("2026-07-22").isRetake).toBe(true) // 21 days out
    expect(at("2026-07-21").isRetake).toBe(false) // 22 days out -> site mocks
    const finalWeek = at("2026-08-05") // 7 days out
    expect(finalWeek.kind).toBe("site-mock")
    expect(finalWeek.officialNumber).toBeNull()
  })

  it("all six used with no test date points at site mocks, never a retake", () => {
    const r = deriveExamRoadmap({
      todayIso: "2026-06-25",
      examDate: null,
      entries: allSix,
      siteMockCount: 1,
    })
    expect(r.kind).toBe("site-mock")
    expect(r.isRetake).toBe(false)
    expect(r.reason).toMatch(/all six/i)
  })

  it("classify copy drops the unused-officials principle when none are unused", () => {
    const r = deriveExamRoadmap({
      todayIso: "2026-06-25",
      examDate: EXAM,
      entries: [...allSix, e("2026-06-10")],
      siteMockCount: 1,
    })
    expect(r.kind).toBe("classify")
    expect(r.reason).not.toMatch(/haven't seen/i)
    expect(r.reason).toMatch(/rehearsal, not a measurement/i)
  })
})

describe("deriveExamRoadmap — short timelines", () => {
  it("never schedules a full official inside the final week", () => {
    const r = deriveExamRoadmap({
      todayIso: "2026-08-08", // 4 days to exam
      examDate: EXAM,
      entries: [
        e("2026-07-01", 1),
        e("2026-07-08", 2),
        e("2026-07-15", 3),
        e("2026-07-22", 4),
      ],
      siteMockCount: 3,
    })
    expect(r.kind).toBe("site-mock")
    expect(r.officialNumber).toBeNull()
    expect(r.reason).toMatch(/fatigue|final/i)
  })

  it("notes when more officials remain than weekly slots left (no impossible schedule)", () => {
    const r = deriveExamRoadmap({
      todayIso: "2026-07-20",
      examDate: EXAM,
      entries: [e("2026-07-01", 1)],
      siteMockCount: 0,
    })
    expect(r.kind).toBe("official")
    expect(r.reason).toMatch(/won't use them all/i)
    expect(r.reason).toMatch(/never sit two full exams in one week/i)
  })

  it("still fires the overbooked note when a retake advanced the slot pointer", () => {
    // Slots: 07-01, 07-08, 07-15, 07-22, 07-29, 08-05. Three sittings (one a
    // retake) put the pointer at 07-22, leaving 3 usable slots for 4 unused
    // exams — wall-clock alone would count 07-15 too and miss the overbook.
    const r = deriveExamRoadmap({
      todayIso: "2026-07-10",
      examDate: EXAM,
      entries: [
        e("2026-07-01", 1, 1),
        e("2026-07-05", 1, 2),
        e("2026-07-08", 2, 1),
      ],
      siteMockCount: 1,
    })
    expect(r.reason).toMatch(/won't use them all/i)
    expect(r.officialNumber).toBe(3)
  })
})

describe("deriveExamRoadmap — all six used", () => {
  const allSix = [
    e("2026-06-03", 1),
    e("2026-06-10", 2),
    e("2026-06-17", 3),
    e("2026-06-24", 4),
    e("2026-07-01", 5),
    e("2026-07-08", 6),
  ]

  it("offers the optional Exam 1 RETAKE only 1-3 weeks out, with the validity caution", () => {
    const r = deriveExamRoadmap({
      todayIso: "2026-07-29", // 14 days to exam
      examDate: EXAM,
      entries: allSix,
      siteMockCount: 4,
    })
    expect(r.kind).toBe("official")
    expect(r.officialNumber).toBe(1)
    expect(r.isRetake).toBe(true)
    expect(r.caution).toMatch(/repeated questions/i)
    expect(r.caution).toMatch(/inflated/i)
    expect(r.caution).toMatch(/less valid/i)
  })

  it("recommends site mocks (not retakes) for routine checkpoints when the exam is far out", () => {
    const r = deriveExamRoadmap({
      todayIso: "2026-06-25",
      examDate: EXAM,
      entries: allSix.slice(0, 5).concat([{ ...allSix[5], date: "2026-06-20" }]),
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
      entries: allSix,
      siteMockCount: 4,
    })
    expect(r.kind).toBe("site-mock")
    expect(r.officialNumber).toBeNull()
  })
})

describe("retake language and claims", () => {
  const retake = deriveExamRoadmap({
    todayIso: "2026-07-29",
    examDate: EXAM,
    entries: [
      e("2026-06-03", 1),
      e("2026-06-10", 2),
      e("2026-06-17", 3),
      e("2026-06-24", 4),
      e("2026-07-01", 5),
      e("2026-07-08", 6),
    ],
    siteMockCount: 4,
  })
  const texts = [
    retake.title,
    retake.reason,
    retake.prereq ?? "",
    retake.caution ?? "",
    RETAKE_CAUTION,
  ]

  it('says "retake", never "reset", when recommending sitting an exam again', () => {
    expect(retake.title).toMatch(/retake/i)
    for (const t of texts) expect(t).not.toMatch(/reset/i)
  })

  it("never claims a retake is calibrated or gives mostly-new questions", () => {
    for (const t of texts) {
      expect(t).not.toMatch(/calibrated/i)
      expect(t).not.toMatch(/new questions/i)
      expect(t).not.toMatch(/fresh questions/i)
    }
  })

  it("frames the retake as an optional rehearsal, not a measurement", () => {
    expect(retake.title).toMatch(/optional/i)
    expect(retake.reason).toMatch(/rehearsal/i)
    expect(RETAKE_CAUTION).toMatch(/not a score measurement/i)
  })
})

describe("deriveExamRoadmap — setup problems", () => {
  it("asks for a date update when the saved test date has passed", () => {
    const r = deriveExamRoadmap({
      todayIso: "2026-08-13",
      examDate: EXAM,
      entries: [e("2026-07-01", 1), e("2026-07-08", 2)],
      siteMockCount: 0,
    })
    expect(r.kind).toBe("setup")
    expect(r.reason).toMatch(/passed/i)
  })
})

describe("deriveExamRoadmap — consistency with the weekly schedule", () => {
  it("its official target date is always one of the derived weekly slots", () => {
    const slots = deriveScheduleSlots(EXAM)
    const dates = ["2026-06-03", "2026-06-10", "2026-06-17", "2026-06-24", "2026-07-01"]
    for (let count = 1; count <= 5; count++) {
      const r = deriveExamRoadmap({
        todayIso: "2026-06-20",
        examDate: EXAM,
        entries: dates.slice(0, count).map((d, i) => e(d, i + 1)),
        siteMockCount: 0,
      })
      if (r.officialTargetDate) {
        expect(slots).toContain(r.officialTargetDate)
      }
    }
  })
})
