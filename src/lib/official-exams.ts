/**
 * Official mba.com practice-exam scheduling — shared by the Mock page's
 * Official Exam Plan and the dashboard reminder, so both derive the same
 * weekly slots from one place.
 *
 * The plan: in the final six weeks before the real exam, take one official
 * practice exam each week, on the same weekday as the real appointment. The
 * candidate slots are examDate - 7k days for k = 6..1 (ascending) — six
 * weekly dates, the last exactly one week before the exam.
 */

export const MS_PER_DAY = 86_400_000

/** Parse YYYY-MM-DD as a UTC date so weekday math is timezone-stable. */
export function parseIsoDate(iso: string): Date | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) return null
  const d = new Date(`${iso}T00:00:00Z`)
  return Number.isNaN(d.getTime()) ? null : d
}

export function toIso(d: Date): string {
  return d.toISOString().slice(0, 10)
}

/** The six weekly official-exam slot dates (ascending) before examIso. */
export function deriveScheduleSlots(examIso: string): string[] {
  const exam = parseIsoDate(examIso)
  if (!exam) return []
  const slots: string[] = []
  for (let k = 6; k >= 1; k--) {
    slots.push(toIso(new Date(exam.getTime() - k * 7 * MS_PER_DAY)))
  }
  return slots
}

export interface OfficialExamReminder {
  /** The slot date the next official exam is due (YYYY-MM-DD). */
  dueDate: string
  /** Slot date minus today, in whole days; negative when overdue. */
  daysUntil: number
  overdue: boolean
  /** How many officials entered so far (capped at the 6-slot plan). */
  enteredCount: number
  totalSlots: number
}

/**
 * The next official exam the student should take, but ONLY when it is due
 * within a week (or already overdue) — so the reminder stays silent until
 * the ~6-week exam window is near, then surfaces one week ahead of each
 * sitting. Returns null when there's no exam date, the exam has passed, all
 * six are done, or the next one is still more than a week out.
 *
 * `enteredCount` is treated as progress through the plan (the Nth unentered
 * slot is next), so off-schedule sittings — e.g. an early baseline — advance
 * the schedule correctly.
 */
/** GMAC sells six official practice exams on mba.com. 1-2 are free (Starter
 *  Kit), 3-6 are paid. Sources: mba.com/exam-prep/gmat-official-starter-kit-
 *  practice-exams-1-and-2-free and mba.com/exam-prep/gmat-practice-exams-3-6. */
export const TOTAL_OFFICIAL_EXAMS = 6
export const FREE_OFFICIAL_EXAMS = 2

export interface ExamRoadmapInput {
  todayIso: string
  /** Real test date (user_metadata.exam_date), or null. */
  examDate: string | null
  /** Official mba.com practice-exam scores entered (consumed exams). */
  officialCount: number
  /** Completed in-platform full mocks (distinct mock dates). */
  siteMockCount: number
}

export type RoadmapKind = "official" | "site-mock" | "setup"

export interface ExamRoadmap {
  /** What to sit NEXT: an official exam, an in-platform mock, or fix setup. */
  kind: RoadmapKind
  /** Which official (1-6) is next whenever an official is next sat; null when
   *  none remain or none should be taken. */
  officialNumber: number | null
  /** True when officialNumber refers to a reset+retake of a consumed exam. */
  isRetake: boolean
  /** The weekly slot the next official is planned for; null = now/unscheduled. */
  officialTargetDate: string | null
  title: string
  reason: string
  /** What to have done before sitting it. */
  prereq: string | null
  caution: string | null
}

const RETAKE_CAUTION =
  "A reset official reuses its question pool — expect repeated questions and read the score as optimistic, not calibrated."

/**
 * One shared derivation for "which exam next" — consumed by the /mock plan
 * card (and anything else that surfaces exam recommendations), so the app
 * never gives two conflicting answers.
 *
 * Principles encoded here (per GMAC's own guidance on mba.com):
 *   - unused officials before any reset/retake;
 *   - officials are scarce (six exist; retakes repeat questions and inflate
 *     scores), so in-platform mocks cover routine checkpoints between them;
 *   - officials are spaced weekly via deriveScheduleSlots (final six weeks),
 *     never more than one per week, none inside the final week;
 *   - a reset of Exam 1 is reasonable only as a final calibrated rehearsal
 *     1-3 weeks out after all six are consumed.
 */
export function deriveExamRoadmap(input: ExamRoadmapInput): ExamRoadmap {
  const { todayIso, examDate, siteMockCount } = input
  const officialCount = Math.max(0, input.officialCount)
  const remaining = Math.max(0, TOTAL_OFFICIAL_EXAMS - officialCount)
  const nextNumber = officialCount + 1
  const exam = examDate ? parseIsoDate(examDate) : null
  const today = parseIsoDate(todayIso)
  const daysToExam =
    exam && today
      ? Math.round((exam.getTime() - today.getTime()) / MS_PER_DAY)
      : null

  // Exam date in the past — nothing sensible to schedule until it's fixed.
  if (daysToExam !== null && daysToExam < 0) {
    return {
      kind: "setup",
      officialNumber: remaining > 0 ? nextNumber : null,
      isRetake: false,
      officialTargetDate: null,
      title: "Update your test date",
      reason:
        "Your saved test date has passed. Update it in Settings to rebuild the exam schedule.",
      prereq: null,
      caution: null,
    }
  }

  // Baseline: no official entered yet. Always the first exam recommendation.
  if (officialCount === 0) {
    return {
      kind: "official",
      officialNumber: 1,
      isRetake: false,
      officialTargetDate: null,
      title: "Official Practice Exam 1 — your baseline",
      reason:
        "One real, adaptively scored data point anchors your study plan and score trend. Exams 1 and 2 are free on mba.com.",
      prereq: examDate
        ? "Sit it under full exam conditions, then log the score here."
        : "Set your test date in Settings so the weekly exam schedule can build around it.",
      caution: null,
    }
  }

  // All six consumed.
  if (remaining === 0) {
    if (daysToExam !== null && daysToExam > 7 && daysToExam <= 21) {
      return {
        kind: "official",
        officialNumber: 1,
        isRetake: true,
        officialTargetDate: null,
        title: "Optional: reset and retake Official Practice Exam 1",
        reason:
          "All six officials are used. A final calibrated rehearsal 1-3 weeks out is the one good reason to reset — Exam 1 is your oldest, so it has the fewest fresh memories.",
        prereq: "Only if you want one more full-conditions rehearsal — an in-platform mock covers the pacing rep without spending a reset.",
        caution: RETAKE_CAUTION,
      }
    }
    return {
      kind: "site-mock",
      officialNumber: null,
      isRetake: false,
      officialTargetDate: null,
      title: "In-platform mock for your next checkpoint",
      reason:
        daysToExam !== null && daysToExam <= 7
          ? "Inside the final week — no more full-length exams. Keep sharp with short timed sections and review."
          : "All six officials are used. Run in-platform mocks for checkpoints; save any reset of an official for a final rehearsal 1-3 weeks before test day.",
      prereq: null,
      caution: RETAKE_CAUTION,
    }
  }

  // Officials remain, but no test date to space them against.
  if (!examDate || daysToExam === null) {
    return {
      kind: "site-mock",
      officialNumber: nextNumber,
      isRetake: false,
      officialTargetDate: null,
      title: "In-platform mock for now — save the officials",
      reason: `You have ${remaining} unused official${remaining === 1 ? "" : "s"} left. Without a test date they can't be spaced across the final six weeks, so use in-platform mocks for checkpoints and keep Exam ${nextNumber} for the schedule.`,
      prereq: "Set your test date in Settings to schedule the remaining officials.",
      caution: null,
    }
  }

  // Final week: the last weekly slot is exam-minus-7 by design.
  if (daysToExam <= 7) {
    return {
      kind: "site-mock",
      officialNumber: null,
      isRetake: false,
      officialTargetDate: null,
      title: "Final week — taper, no more full exams",
      reason:
        "Full-length exams this close to test day cost more in fatigue than they return in signal. Short timed sections, review queue, and rest.",
      prereq: null,
      caution: null,
    }
  }

  // Scheduled cadence: next unentered weekly slot (same math as the reminder).
  const slots = deriveScheduleSlots(examDate)
  const nextSlot = slots[Math.min(officialCount, slots.length - 1)]
  const slotDate = nextSlot ? parseIsoDate(nextSlot) : null
  const daysToSlot =
    slotDate && today
      ? Math.round((slotDate.getTime() - today.getTime()) / MS_PER_DAY)
      : null
  const slotsLeft = slots.filter((s) => s >= todayIso).length
  const overbooked = remaining > slotsLeft && slotsLeft > 0
  const overbookedNote = overbooked
    ? ` You have more unused officials (${remaining}) than weekly slots left (${slotsLeft}) — you won't use them all, and that's fine; never sit two full exams in one week.`
    : ""

  if (daysToSlot !== null && daysToSlot <= 7) {
    return {
      kind: "official",
      officialNumber: nextNumber,
      isRetake: false,
      officialTargetDate: nextSlot,
      title: `Official Practice Exam ${nextNumber}`,
      reason:
        (daysToSlot < 0
          ? `Your week-${officialCount + 1} slot has passed — sit it as soon as you can get full exam conditions.`
          : `Due ${daysToSlot === 0 ? "today" : `in ${daysToSlot} day${daysToSlot === 1 ? "" : "s"}`} on your weekly schedule.`) + overbookedNote,
      prereq:
        "Clear your review queue the day before and go in rested — same start time as your real slot.",
      caution: null,
    }
  }

  return {
    kind: "site-mock",
    officialNumber: nextNumber,
    isRetake: false,
    officialTargetDate: nextSlot ?? null,
    title: "In-platform mock this week",
    reason:
      `Official Practice Exam ${nextNumber} is scheduled for ${nextSlot}${daysToSlot !== null ? ` (${daysToSlot} days out)` : ""}. ` +
      (siteMockCount === 0
        ? "Use an in-platform mock for this week's checkpoint so the officials aren't burned early."
        : "Keep weekly checkpoints on in-platform mocks between officials.") +
      overbookedNote,
    prereq: null,
    caution: null,
  }
}

export function officialExamReminder(
  examIso: string | null,
  todayIso: string,
  enteredCount: number,
): OfficialExamReminder | null {
  if (!examIso) return null
  const slots = deriveScheduleSlots(examIso)
  const today = parseIsoDate(todayIso)
  const exam = parseIsoDate(examIso)
  if (slots.length === 0 || !today || !exam) return null
  // Exam already passed — nothing to remind about.
  if (exam.getTime() < today.getTime()) return null

  const done = Math.max(0, Math.min(enteredCount, slots.length))
  if (done >= slots.length) return null // all six entered

  const nextSlot = slots[done]
  const slotDate = parseIsoDate(nextSlot)
  if (!slotDate) return null
  const daysUntil = Math.round((slotDate.getTime() - today.getTime()) / MS_PER_DAY)
  // Stay quiet until the next sitting is within a week (or overdue).
  if (daysUntil > 7) return null

  return {
    dueDate: nextSlot,
    daysUntil,
    overdue: daysUntil < 0,
    enteredCount: done,
    totalSlots: slots.length,
  }
}
