import { describe, it, expect } from "vitest"
import {
  MS_PER_DAY,
  parseIsoDate,
  toIso,
  deriveScheduleSlots,
  officialExamReminder,
} from "@/lib/official-exams"

describe("parseIsoDate", () => {
  it("parses a valid YYYY-MM-DD as a UTC midnight Date", () => {
    const d = parseIsoDate("2026-08-12")
    expect(d).not.toBeNull()
    // Parsed at UTC midnight, so the ISO string is stable regardless of TZ.
    expect(d!.toISOString()).toBe("2026-08-12T00:00:00.000Z")
    expect(d!.getUTCFullYear()).toBe(2026)
    expect(d!.getUTCMonth()).toBe(7) // August is month index 7
    expect(d!.getUTCDate()).toBe(12)
  })

  it("rejects non-matching formats", () => {
    expect(parseIsoDate("2026-8-12")).toBeNull() // not zero-padded
    expect(parseIsoDate("08-12-2026")).toBeNull()
    expect(parseIsoDate("2026/08/12")).toBeNull()
    expect(parseIsoDate("2026-08-12T00:00:00Z")).toBeNull() // extra suffix
    expect(parseIsoDate("")).toBeNull()
    expect(parseIsoDate("garbage")).toBeNull()
  })

  it("rejects format-valid but out-of-range months (NaN time)", () => {
    // Matches the regex but an out-of-range month yields an Invalid Date.
    expect(parseIsoDate("2026-13-12")).toBeNull() // month 13
    expect(parseIsoDate("2026-00-10")).toBeNull() // month 00
  })
})

describe("toIso", () => {
  it("formats a Date as its YYYY-MM-DD UTC slice", () => {
    expect(toIso(new Date("2026-08-12T00:00:00Z"))).toBe("2026-08-12")
    // Later-in-day UTC times still slice to the same calendar date.
    expect(toIso(new Date("2026-08-12T23:59:59Z"))).toBe("2026-08-12")
  })

  it("round-trips with parseIsoDate", () => {
    for (const iso of ["2026-01-01", "2026-08-12", "2026-12-31", "2027-02-28"]) {
      expect(toIso(parseIsoDate(iso)!)).toBe(iso)
    }
  })
})

describe("MS_PER_DAY", () => {
  it("is exactly one day in milliseconds", () => {
    expect(MS_PER_DAY).toBe(24 * 60 * 60 * 1000)
    expect(MS_PER_DAY).toBe(86_400_000)
  })
})

describe("deriveScheduleSlots", () => {
  it("returns six ascending weekly slots, last exactly one week before the exam", () => {
    const exam = "2026-08-12"
    const slots = deriveScheduleSlots(exam)
    expect(slots).toEqual([
      "2026-07-01", // exam - 42
      "2026-07-08", // exam - 35
      "2026-07-15", // exam - 28
      "2026-07-22", // exam - 21
      "2026-07-29", // exam - 14
      "2026-08-05", // exam - 7
    ])
    // Capped at exactly six slots.
    expect(slots.length).toBe(6)
    // Last slot is exactly 7 days before the exam.
    const last = parseIsoDate(slots[slots.length - 1])!
    const examDate = parseIsoDate(exam)!
    expect((examDate.getTime() - last.getTime()) / MS_PER_DAY).toBe(7)
    // And it strictly precedes the exam date.
    expect(last.getTime()).toBeLessThan(examDate.getTime())
  })

  it("spaces slots exactly 7 days apart in strictly ascending order", () => {
    const slots = deriveScheduleSlots("2026-08-12")
    for (let i = 1; i < slots.length; i++) {
      const prev = parseIsoDate(slots[i - 1])!
      const cur = parseIsoDate(slots[i])!
      expect(cur.getTime()).toBeGreaterThan(prev.getTime())
      expect((cur.getTime() - prev.getTime()) / MS_PER_DAY).toBe(7)
    }
  })

  it("handles slots crossing a month/year boundary", () => {
    // Exam 2027-01-13 -> first slot is in the previous year.
    const slots = deriveScheduleSlots("2027-01-13")
    expect(slots).toEqual([
      "2026-12-02",
      "2026-12-09",
      "2026-12-16",
      "2026-12-23",
      "2026-12-30",
      "2027-01-06",
    ])
  })

  it("returns an empty array for an invalid exam date", () => {
    expect(deriveScheduleSlots("not-a-date")).toEqual([])
    expect(deriveScheduleSlots("2026-13-01")).toEqual([])
    expect(deriveScheduleSlots("")).toEqual([])
  })
})

describe("officialExamReminder", () => {
  // Reference exam used across cases; slots are:
  //   07-01, 07-08, 07-15, 07-22, 07-29, 08-05  (exam 08-12)
  const EXAM = "2026-08-12"

  it("returns null when there is no exam date", () => {
    expect(officialExamReminder(null, "2026-07-01", 0)).toBeNull()
  })

  it("returns null when the exam date is unparseable", () => {
    expect(officialExamReminder("not-a-date", "2026-07-01", 0)).toBeNull()
  })

  it("returns null when today is unparseable", () => {
    expect(officialExamReminder(EXAM, "garbage", 0)).toBeNull()
  })

  it("stays silent when the exam is far out (first slot > 1 week away)", () => {
    // 30 days before the first slot (07-01) -> next sitting is way more than
    // a week out, so nothing should surface.
    expect(officialExamReminder(EXAM, "2026-06-01", 0)).toBeNull()
    // Exactly 8 days before the first slot is still too far (> 7).
    expect(officialExamReminder(EXAM, "2026-06-23", 0)).toBeNull()
  })

  it("surfaces the first slot exactly when it comes within a week (boundary = 7)", () => {
    // 7 days before slot 07-01 is 2026-06-24.
    const r = officialExamReminder(EXAM, "2026-06-24", 0)
    expect(r).not.toBeNull()
    expect(r).toEqual({
      dueDate: "2026-07-01",
      daysUntil: 7,
      overdue: false,
      enteredCount: 0,
      totalSlots: 6,
    })
  })

  it("reports daysUntil and a non-overdue reminder when the slot is today", () => {
    const r = officialExamReminder(EXAM, "2026-07-01", 0)
    expect(r).not.toBeNull()
    expect(r!.dueDate).toBe("2026-07-01")
    expect(r!.daysUntil).toBe(0)
    expect(r!.overdue).toBe(false)
  })

  it("marks the reminder overdue when today is past the next slot", () => {
    // Today 07-05, no officials entered -> first slot 07-01 is 4 days overdue.
    const r = officialExamReminder(EXAM, "2026-07-05", 0)
    expect(r).not.toBeNull()
    expect(r!.dueDate).toBe("2026-07-01")
    expect(r!.daysUntil).toBe(-4)
    expect(r!.overdue).toBe(true)
    expect(r!.enteredCount).toBe(0)
  })

  it("advances to the next unentered slot as officials are entered", () => {
    // 3 entered -> next slot is index 3 = 07-22. On 07-22 it's due today.
    const r = officialExamReminder(EXAM, "2026-07-22", 3)
    expect(r).not.toBeNull()
    expect(r!.dueDate).toBe("2026-07-22")
    expect(r!.daysUntil).toBe(0)
    expect(r!.enteredCount).toBe(3)
    expect(r!.totalSlots).toBe(6)
  })

  it("stays silent if the next unentered slot is still more than a week out", () => {
    // 2 entered -> next slot index 2 = 07-15. Today 07-01 is 14 days out.
    expect(officialExamReminder(EXAM, "2026-07-01", 2)).toBeNull()
  })

  it("returns null once all six slots are entered", () => {
    expect(officialExamReminder(EXAM, "2026-08-05", 6)).toBeNull()
    // enteredCount above the cap is clamped, still treated as all done.
    expect(officialExamReminder(EXAM, "2026-08-05", 99)).toBeNull()
  })

  it("clamps a negative enteredCount to the first slot", () => {
    // Negative is floored to 0, so the next slot is index 0 = 07-01.
    const r = officialExamReminder(EXAM, "2026-06-24", -5)
    expect(r).not.toBeNull()
    expect(r!.dueDate).toBe("2026-07-01")
    expect(r!.enteredCount).toBe(0)
  })

  it("returns null when the exam has already passed", () => {
    // Exam was 08-12; today 08-13 is after it.
    expect(officialExamReminder(EXAM, "2026-08-13", 0)).toBeNull()
  })

  it("still reminds on the exam day itself (exam not yet 'passed')", () => {
    // 5 entered -> next slot index 5 = 08-05. On exam day 08-12 the slot is
    // 7 days overdue, and exam==today is not strictly before today, so it shows.
    const r = officialExamReminder(EXAM, "2026-08-12", 5)
    expect(r).not.toBeNull()
    expect(r!.dueDate).toBe("2026-08-05")
    expect(r!.daysUntil).toBe(-7)
    expect(r!.overdue).toBe(true)
  })
})
