/**
 * Official mba.com practice-exam model + scheduling — shared by the /mock
 * Official Exam Plan, the /api/official-exams route, and the dashboard
 * reminder, so every surface reads the same entry shape and derives the
 * same recommendation from one place.
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

/* ----------------------------------------------------------------------
 * Entry model
 *
 * GMAC sells six official practice exams on mba.com. 1-2 are free (Starter
 * Kit) and may be taken multiple times; 3-6 are paid and include two
 * attempts each (the product's reset unlocks the second attempt). Retakes
 * draw from the same fixed question pool, so repeated questions become
 * increasingly likely and retake scores can be inflated and less valid.
 * Sources:
 *   mba.com/exam-prep/gmat-official-starter-kit-practice-exams-1-and-2-free
 *   mba.com/exam-prep/gmat-practice-exams-3-6
 *   support.mba.com/hc/en-us/articles/52121740753435 (Using GMAT Practice
 *   Exams and EA Practice Assessments)
 * -------------------------------------------------------------------- */
export const TOTAL_OFFICIAL_EXAMS = 6
export const FREE_OFFICIAL_EXAMS = 2
/** Sanity bound for attemptNumber — free exams allow multiple retakes but
 *  double digits of the same exam is a data-entry error, not prep. */
export const MAX_ATTEMPT_NUMBER = 9
export const MAX_OFFICIAL_ENTRIES = 12

export interface OfficialExamEntry {
  /** ISO YYYY-MM-DD — the unique key of an entry (one sitting per day). */
  date: string
  /** Total score, 205-805. */
  total: number
  quant?: number | null
  verbal?: number | null
  di?: number | null
  label?: string
  /**
   * Which Official Practice Exam was sat (1-6). Absent on legacy entries
   * logged before exam identity was recorded — treat those as
   * UNCLASSIFIED, never infer a number from entry order.
   */
  examNumber?: number
  /** 1 = first attempt, 2+ = retake. Only meaningful with examNumber;
   *  absent on a classified entry means first attempt. */
  attemptNumber?: number
}

function isValidSectionScore(value: unknown): value is number {
  return (
    typeof value === "number" &&
    Number.isInteger(value) &&
    value >= 60 &&
    value <= 90
  )
}

function isValidExamNumber(value: unknown): value is number {
  return (
    typeof value === "number" &&
    Number.isInteger(value) &&
    value >= 1 &&
    value <= TOTAL_OFFICIAL_EXAMS
  )
}

function isValidAttemptNumber(value: unknown): value is number {
  return (
    typeof value === "number" &&
    Number.isInteger(value) &&
    value >= 1 &&
    value <= MAX_ATTEMPT_NUMBER
  )
}

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/

/**
 * Canonical tolerant parser for the stored `official_exam_scores` value —
 * the ONE place the stored shape is read (API route, /mock page, tests),
 * so client and API can't drift. Unknown/invalid optional fields are
 * dropped; entries missing date/total are skipped; legacy entries without
 * examNumber parse fine and stay unclassified.
 */
export function parseOfficialExamEntries(state: unknown): OfficialExamEntry[] {
  if (!state || typeof state !== "object") return []
  const raw = (state as Record<string, unknown>).official_exam_scores
  if (!Array.isArray(raw)) return []
  const out: OfficialExamEntry[] = []
  for (const item of raw) {
    if (!item || typeof item !== "object") continue
    const rec = item as Record<string, unknown>
    if (typeof rec.date !== "string" || !DATE_RE.test(rec.date)) continue
    if (typeof rec.total !== "number") continue
    const entry: OfficialExamEntry = { date: rec.date, total: rec.total }
    if (isValidSectionScore(rec.quant)) entry.quant = rec.quant
    if (isValidSectionScore(rec.verbal)) entry.verbal = rec.verbal
    if (isValidSectionScore(rec.di)) entry.di = rec.di
    if (typeof rec.label === "string" && rec.label.trim() !== "") {
      entry.label = rec.label.trim().slice(0, 60)
    }
    if (isValidExamNumber(rec.examNumber)) {
      entry.examNumber = rec.examNumber
      // attemptNumber is meaningless without an exam identity — drop it
      // rather than store an orphaned retake flag.
      if (isValidAttemptNumber(rec.attemptNumber)) {
        entry.attemptNumber = rec.attemptNumber
      }
    }
    out.push(entry)
  }
  return out
}

export type OfficialExamEntryError = { error: string }

/**
 * Validate one incoming entry (API body or client form) into a clean
 * OfficialExamEntry. `maxIso` is the latest acceptable date (officials are
 * logged after they were taken). Shared by /api/official-exams so client
 * and server validate identically.
 */
export function validateOfficialExamEntry(
  raw: unknown,
  maxIso: string
): { entry: OfficialExamEntry } | OfficialExamEntryError {
  if (!raw || typeof raw !== "object") {
    return { error: "entry is required" }
  }
  const rec = raw as Record<string, unknown>
  if (typeof rec.date !== "string" || !DATE_RE.test(rec.date)) {
    return { error: "entry.date must be an ISO date (YYYY-MM-DD)" }
  }
  if (rec.date > maxIso) {
    return {
      error:
        "entry.date cannot be in the future — log an official exam after you've taken it",
    }
  }
  if (
    typeof rec.total !== "number" ||
    !Number.isInteger(rec.total) ||
    rec.total < 205 ||
    rec.total > 805
  ) {
    return { error: "entry.total must be an integer between 205 and 805" }
  }
  const entry: OfficialExamEntry = { date: rec.date, total: rec.total }
  for (const key of ["quant", "verbal", "di"] as const) {
    const value = rec[key]
    if (value === undefined || value === null) continue
    if (!isValidSectionScore(value)) {
      return { error: `entry.${key} must be an integer between 60 and 90` }
    }
    entry[key] = value
  }
  if (rec.label !== undefined && rec.label !== null) {
    if (typeof rec.label !== "string" || rec.label.length > 60) {
      return { error: "entry.label must be a string of at most 60 characters" }
    }
    const trimmed = rec.label.trim()
    if (trimmed !== "") entry.label = trimmed
  }
  if (rec.examNumber !== undefined && rec.examNumber !== null) {
    if (!isValidExamNumber(rec.examNumber)) {
      return {
        error: `entry.examNumber must be an integer between 1 and ${TOTAL_OFFICIAL_EXAMS}`,
      }
    }
    entry.examNumber = rec.examNumber
  }
  if (rec.attemptNumber !== undefined && rec.attemptNumber !== null) {
    if (entry.examNumber === undefined) {
      return { error: "entry.attemptNumber requires entry.examNumber" }
    }
    if (!isValidAttemptNumber(rec.attemptNumber)) {
      return {
        error: `entry.attemptNumber must be an integer between 1 and ${MAX_ATTEMPT_NUMBER}`,
      }
    }
    entry.attemptNumber = rec.attemptNumber
  }
  return { entry }
}

export interface OfficialExamUsage {
  /** Unique exam numbers with ANY recorded attempt, ascending. An exam that
   *  only has a retake logged still had its first attempt in real life, so
   *  any recorded attempt marks the exam as used. */
  usedNumbers: number[]
  /** 1..6 minus usedNumbers, ascending — exams with no recorded attempt. */
  unusedNumbers: number[]
  /** Entries with attemptNumber >= 2. */
  retakeCount: number
  /** Legacy entries without an examNumber — identity unknown. */
  unclassifiedCount: number
  /** Total recorded sittings (every entry is one full exam sat). */
  sittingCount: number
}

export function deriveExamUsage(
  entries: ReadonlyArray<OfficialExamEntry>
): OfficialExamUsage {
  const used = new Set<number>()
  let retakeCount = 0
  let unclassifiedCount = 0
  for (const e of entries) {
    if (e.examNumber === undefined) {
      unclassifiedCount++
      continue
    }
    used.add(e.examNumber)
    if ((e.attemptNumber ?? 1) >= 2) retakeCount++
  }
  const usedNumbers = [...used].sort((a, b) => a - b)
  const unusedNumbers: number[] = []
  for (let n = 1; n <= TOTAL_OFFICIAL_EXAMS; n++) {
    if (!used.has(n)) unusedNumbers.push(n)
  }
  return {
    usedNumbers,
    unusedNumbers,
    retakeCount,
    unclassifiedCount,
    sittingCount: entries.length,
  }
}

/** The next attempt number to record for an exam: highest recorded + 1. */
export function nextAttemptNumber(
  entries: ReadonlyArray<OfficialExamEntry>,
  examNumber: number
): number {
  let highest = 0
  for (const e of entries) {
    if (e.examNumber !== examNumber) continue
    highest = Math.max(highest, e.attemptNumber ?? 1)
  }
  return Math.min(highest + 1, MAX_ATTEMPT_NUMBER)
}

/** True for a first attempt. Legacy entries with no attemptNumber count as
 *  first attempts — that is what logging a score meant before exam identity
 *  existed, and it keeps historical baselines stable. */
export function isFirstAttempt(
  e: Pick<OfficialExamEntry, "attemptNumber">
): boolean {
  return (e.attemptNumber ?? 1) === 1
}

/**
 * The attempt number an entry saved on `date` should carry for `examNumber`.
 * Overwriting an existing same-exam entry on the same date is an EDIT of
 * that sitting (keeps its attempt), never a new retake; otherwise it is the
 * next attempt over the remaining entries.
 */
export function deriveAttemptForEntry(
  entries: ReadonlyArray<OfficialExamEntry>,
  date: string,
  examNumber: number
): number {
  const existing = entries.find((e) => e.date === date)
  if (existing && existing.examNumber === examNumber) {
    return existing.attemptNumber ?? 1
  }
  return nextAttemptNumber(
    entries.filter((e) => e.date !== date),
    examNumber
  )
}

/**
 * The upserts needed to tag the entry on `targetDate` with `examNumber`.
 * Every entry of that exam number is re-ranked by date so attempt numbers
 * always follow chronology, however (and in whatever order) the student
 * tags legacy entries. All other entry fields are preserved. Returns []
 * when targetDate has no entry.
 */
export function planExamTagUpdates(
  entries: ReadonlyArray<OfficialExamEntry>,
  targetDate: string,
  examNumber: number
): OfficialExamEntry[] {
  const target = entries.find((e) => e.date === targetDate)
  if (!target) return []
  const family = entries
    .filter((e) => e.date !== targetDate && e.examNumber === examNumber)
    .concat([{ ...target, examNumber }])
    .sort((a, b) => a.date.localeCompare(b.date))
  const updates: OfficialExamEntry[] = []
  family.forEach((e, i) => {
    const want = Math.min(i + 1, MAX_ATTEMPT_NUMBER)
    if (e.date !== targetDate && e.attemptNumber === want) return
    updates.push({ ...e, examNumber, attemptNumber: want })
  })
  return updates
}

/* ----------------------------------------------------------------------
 * Roadmap
 * -------------------------------------------------------------------- */

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

export interface ExamRoadmapInput {
  todayIso: string
  /** Real test date (user_metadata.exam_date), or null. */
  examDate: string | null
  /** All recorded official-exam entries (parseOfficialExamEntries). */
  entries: ReadonlyArray<OfficialExamEntry>
  /** Completed in-platform full mocks (distinct mock dates). */
  siteMockCount: number
}

export type RoadmapKind = "official" | "site-mock" | "setup" | "classify"

export interface ExamRoadmap {
  /** What to do NEXT: sit an official, sit an in-platform mock, fix setup,
   *  or classify untagged legacy entries. */
  kind: RoadmapKind
  /** Which official (1-6) is next whenever an official is next sat; null
   *  when none remain, none should be taken, or identity is unknown. */
  officialNumber: number | null
  /** True when officialNumber refers to retaking an already-used exam. */
  isRetake: boolean
  /** The weekly slot the next official is planned for; null = now/unscheduled. */
  officialTargetDate: string | null
  title: string
  reason: string
  /** What to have done before sitting it. */
  prereq: string | null
  caution: string | null
}

export const RETAKE_CAUTION =
  "A retake draws from the same fixed question pool — repeated questions are increasingly likely, and a retake score can be inflated and less valid. Treat it as a rehearsal, not a score measurement."

/**
 * One shared derivation for "which exam next" — consumed by the /mock plan
 * card (and anything else that surfaces exam recommendations), so the app
 * never gives two conflicting answers.
 *
 * Principles encoded here (per GMAC's mba.com product/support pages cited
 * at the top of this file):
 *   - unused first attempts are the measurement signal — recommend them
 *     before any retake, by ACTUAL recorded exam number (lowest unused),
 *     never by entry count;
 *   - "all six used" means six unique exam numbers have recorded attempts,
 *     not six score entries — retakes never consume an unused exam;
 *   - legacy entries without an exam number get honest generic guidance
 *     (and a tagging path), never an inferred exam number presented as fact;
 *   - officials are spaced weekly via deriveScheduleSlots (final six weeks),
 *     never more than one per week, none inside the final week;
 *   - after all six are used, retaking free Exam 1 is an OPTIONAL
 *     full-conditions pacing rehearsal 1-3 weeks out — never a score
 *     measurement.
 */
export function deriveExamRoadmap(input: ExamRoadmapInput): ExamRoadmap {
  const { todayIso, examDate, entries, siteMockCount } = input
  const usage = deriveExamUsage(entries)
  const remaining = usage.unusedNumbers.length
  const nextNumber = usage.unusedNumbers[0] ?? null
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
      officialNumber: null,
      isRetake: false,
      officialTargetDate: null,
      title: "Update your test date",
      reason:
        "Your saved test date has passed. Update it in Settings to rebuild the exam schedule.",
      prereq: null,
      caution: null,
    }
  }

  // Baseline: nothing recorded yet. Always the first exam recommendation.
  if (entries.length === 0) {
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

  // Legacy entries without exam identity: exact recommendations would rest
  // on invented exam numbers. Ask for a one-time tagging instead and give
  // only the generic principle until then.
  if (usage.unclassifiedCount > 0) {
    const n = usage.unclassifiedCount
    return {
      kind: "classify",
      officialNumber: null,
      isRetake: false,
      officialTargetDate: null,
      title: `Tag ${n === 1 ? "your logged score" : `${n} logged scores`} to exam numbers`,
      reason:
        `${n === 1 ? "One of your logged scores doesn't say" : `${n} of your logged scores don't say`} which Official Practice Exam it was. Tag each entry below (one click) and the plan can tell you exactly which exam to sit next. ` +
        (usage.unusedNumbers.length > 0
          ? "Until then, the principle: take officials you haven't seen before any retake, and use in-platform mocks between them."
          : "Until then, use in-platform mocks for checkpoints — a retake is an optional rehearsal, not a measurement."),
      prereq: null,
      caution: null,
    }
  }

  // All six unique exams used (retakes never consume an unused exam).
  if (remaining === 0) {
    if (daysToExam !== null && daysToExam > 7 && daysToExam <= 21) {
      return {
        kind: "official",
        officialNumber: 1,
        isRetake: true,
        officialTargetDate: null,
        title: "Optional: retake Official Practice Exam 1",
        reason:
          "All six officials are used. If you want one more full-conditions pacing rehearsal 1-3 weeks out, Exam 1 is free to retake and your oldest sitting, so it has the fewest fresh memories. It is a rehearsal, not a new score measurement.",
        prereq:
          "Only if you want the full-length rehearsal — an in-platform mock covers the pacing rep without the repeated questions.",
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
          : "All six officials are used. Run in-platform mocks for checkpoints; save any retake of an official for a final rehearsal 1-3 weeks before test day.",
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

  // Scheduled cadence: next unentered weekly slot (same math as the
  // reminder). Every recorded sitting — first attempt or retake — consumed
  // a weekly slot, so progression runs on sittings while the recommended
  // exam NUMBER always comes from the actual unused set.
  const slots = deriveScheduleSlots(examDate)
  const nextSlot = slots[Math.min(usage.sittingCount, slots.length - 1)]
  const slotDate = nextSlot ? parseIsoDate(nextSlot) : null
  const daysToSlot =
    slotDate && today
      ? Math.round((slotDate.getTime() - today.getTime()) / MS_PER_DAY)
      : null
  // Slots the progression can still use: at or after the pointer AND not in
  // the past. Wall-clock alone overcounts once retakes/off-schedule sittings
  // advance the pointer past a still-future slot.
  const slotsLeft = slots
    .slice(Math.min(usage.sittingCount, slots.length))
    .filter((s) => s >= todayIso).length
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
          ? "Your weekly slot has passed — sit it as soon as you can get full exam conditions."
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
