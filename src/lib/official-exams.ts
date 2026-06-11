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
