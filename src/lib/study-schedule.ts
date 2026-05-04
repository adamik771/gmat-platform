/**
 * Personalised study-schedule generator.
 *
 * Takes a target exam date, weekly study hours, and (optionally) a
 * starting per-section accuracy snapshot, and produces a week-by-week
 * schedule from "now" to the exam.
 *
 * The shape of the schedule is the same one the platform's adaptive
 * plan uses: diagnose first, attack the weakest section, expand to
 * second-weakest, mixed practice, mocks, taper. The output here is the
 * static, marketing-page version — pure functions, no DB, no auth.
 *
 * Honest framing: this is a starter schedule. Real adaptive planning
 * adjusts weekly from new data; this gives you a defensible baseline.
 */

import type { Section } from "@/types"

export interface SectionAccuracy {
  /** 0–1 accuracy on the public sampler or the user's gut estimate. */
  quant: number
  verbal: number
  di: number
}

export interface ScheduleInput {
  /** Exam date as ISO string (yyyy-mm-dd). */
  examDateIso: string
  /** Today's date as ISO. Default = now() at function call. */
  todayIso?: string
  /**
   * Total weekly study hours (e.g. 7.5 for 90 min/day × 5 days/week).
   * Range 3–25 — anything outside is clamped at the call boundary.
   */
  weeklyHours: number
  /**
   * Optional accuracy snapshot. If omitted, the schedule defaults to
   * an even Quant/Verbal/DI distribution and warns the user that
   * taking the diagnostic produces a much better plan.
   */
  accuracy?: SectionAccuracy
}

export type WeekFocus =
  | "Diagnostic + foundation"
  | "Foundational reading"
  | "Weakest section deep work"
  | "Second-weakest section"
  | "DI focused work"
  | "Mixed practice + error review"
  | "Mock + debrief"
  | "Targeted weak-spot drill"
  | "Final week protocol"

export interface ScheduleWeek {
  /** 1-indexed week number from "now." */
  index: number
  /** Date range label for the week, e.g. "May 5 – May 11". */
  rangeLabel: string
  /** High-level focus theme for the week. */
  focus: WeekFocus
  /** One-line "what you do this week." */
  action: string
  /** Sub-detail / 2-3 bullet plan. */
  bullets: string[]
}

export interface Schedule {
  totalWeeks: number
  weeklyHours: number
  examDate: Date
  weakestSection: Section | null
  weeks: ScheduleWeek[]
  /**
   * If totalWeeks < 8 the plan is necessarily compressed — we still
   * produce a schedule but flag this so the UI can warn the user.
   */
  compressed: boolean
  /** True if the plan was generated with no accuracy input. */
  unprimed: boolean
}

const MS_PER_WEEK = 7 * 24 * 60 * 60 * 1000

function clamp(n: number, lo: number, hi: number): number {
  return Math.max(lo, Math.min(hi, n))
}

function formatRange(start: Date, end: Date): string {
  const opts: Intl.DateTimeFormatOptions = { month: "short", day: "numeric" }
  return `${start.toLocaleDateString("en-US", opts)} – ${end.toLocaleDateString("en-US", opts)}`
}

function daysBetween(a: Date, b: Date): number {
  return Math.round((b.getTime() - a.getTime()) / (24 * 60 * 60 * 1000))
}

/**
 * Identify the weakest section. Returns null if the input is missing
 * or perfectly uniform (the latter is rare in practice but valid).
 */
function pickWeakest(acc: SectionAccuracy | undefined): Section | null {
  if (!acc) return null
  const entries: Array<[Section, number]> = [
    ["Quant", acc.quant],
    ["Verbal", acc.verbal],
    ["DI", acc.di],
  ]
  entries.sort((a, b) => a[1] - b[1])
  if (entries[0][1] === entries[2][1]) return null
  return entries[0][0]
}

function pickSecondWeakest(
  acc: SectionAccuracy | undefined,
  exclude: Section | null,
): Section | null {
  if (!acc) return null
  const entries: Array<[Section, number]> = [
    ["Quant", acc.quant],
    ["Verbal", acc.verbal],
    ["DI", acc.di],
  ]
  entries.sort((a, b) => a[1] - b[1])
  for (const [section] of entries) {
    if (section !== exclude) return section
  }
  return null
}

/**
 * Build the week-by-week plan. Strategy:
 *
 *   - Reserve weeks 1-2 for diagnose + foundation
 *   - Reserve last 2 weeks for mocks + final-week protocol
 *   - Allocate the middle to: weakest section deep work (40-60% of
 *     middle weeks), second-weakest (30-40%), mixed + DI (rest).
 *   - For very short plans (<8 weeks total), compress proportionally
 *     and mark `compressed: true`.
 */
export function buildSchedule(input: ScheduleInput): Schedule {
  const today = input.todayIso ? new Date(input.todayIso) : new Date()
  const examDate = new Date(input.examDateIso)
  const weeklyHours = clamp(input.weeklyHours, 3, 25)

  const days = Math.max(7, daysBetween(today, examDate))
  const totalWeeks = Math.max(2, Math.ceil(days / 7))
  const compressed = totalWeeks < 8
  const unprimed = !input.accuracy

  const weakest = pickWeakest(input.accuracy)
  const secondWeakest = pickSecondWeakest(input.accuracy, weakest)

  // Compute middle-section spans
  const foundationWeeks = compressed ? 1 : 2
  const finalWeeks = compressed ? 1 : 2
  const middleWeeks = Math.max(0, totalWeeks - foundationWeeks - finalWeeks)

  // Allocate middle: weakest 50%, second 30%, mixed 20%
  const weakestSpan = Math.max(1, Math.round(middleWeeks * 0.5))
  const secondSpan = Math.max(
    middleWeeks > weakestSpan ? 1 : 0,
    Math.round(middleWeeks * 0.3),
  )
  const mixedSpan = Math.max(0, middleWeeks - weakestSpan - secondSpan)

  const weeks: ScheduleWeek[] = []
  let cursor = today

  function addWeek(focus: WeekFocus, action: string, bullets: string[]) {
    const start = new Date(cursor)
    const end = new Date(cursor.getTime() + 6 * 24 * 60 * 60 * 1000)
    weeks.push({
      index: weeks.length + 1,
      rangeLabel: formatRange(start, end),
      focus,
      action,
      bullets,
    })
    cursor = new Date(cursor.getTime() + MS_PER_WEEK)
  }

  // Foundation
  if (foundationWeeks >= 2) {
    addWeek(
      "Diagnostic + foundation",
      "Diagnose first, then start reading the section you're weakest at.",
      [
        "Take the 30-question stratified diagnostic (~35 min).",
        "Read your report — identify weakest section + two weakest topics.",
        "Set up the error log template before any practice.",
      ],
    )
    addWeek(
      "Foundational reading",
      "Refresh fundamentals on your weakest section. No drilling yet.",
      [
        "One chapter per day on the weakest section.",
        "Light recall checks at the end of each reading; no timed sets.",
        "End of week: write your first weekly outcome statement.",
      ],
    )
  } else {
    addWeek(
      "Diagnostic + foundation",
      "Compressed start: diagnose + immediately read your weakest section.",
      [
        "Take the diagnostic on day 1.",
        "Read 2 chapters per day on the weakest section.",
        "Set up the error log before any practice.",
      ],
    )
  }

  // Weakest section deep work
  for (let i = 0; i < weakestSpan; i++) {
    const sectionLabel = weakest ?? "weakest section (TBD by diagnostic)"
    addWeek(
      "Weakest section deep work",
      `Drill ${sectionLabel} topics, timed, with full review after every set.`,
      [
        `${Math.round(weeklyHours * 0.7)} hours of timed drilling on ${sectionLabel}.`,
        "30 min per session reviewing every miss into the error log.",
        i === weakestSpan - 1 ? "End-of-block: short timed mock on this section." : "",
      ].filter(Boolean),
    )
  }

  // Second-weakest section
  for (let i = 0; i < secondSpan; i++) {
    const sectionLabel =
      secondWeakest ?? "second-weakest section (TBD by diagnostic)"
    addWeek(
      "Second-weakest section",
      `Drill ${sectionLabel} topics. Maintain weekly maintenance on the first.`,
      [
        `${Math.round(weeklyHours * 0.6)} hours on ${sectionLabel}.`,
        `${Math.round(weeklyHours * 0.2)} hours of maintenance on the first weakest.`,
        "Re-sort the error log mid-week. Confirm patterns are shifting.",
      ],
    )
  }

  // Mixed
  for (let i = 0; i < mixedSpan; i++) {
    addWeek(
      i === mixedSpan - 1 ? "Mock + debrief" : "Mixed practice + error review",
      i === mixedSpan - 1
        ? "Full mock + structured debrief. Re-prioritise based on what surfaces."
        : "Cross-section mixed sets, timed. Heavy review-to-practice ratio.",
      i === mixedSpan - 1
        ? [
            "One full-length mock under exam conditions.",
            "Written debrief: per-section, per-question-type, three biggest errors.",
            "Action items for the next week, written down.",
          ]
        : [
            `Daily 30-question mixed set, timed (~${Math.round(weeklyHours * 0.5)} hrs/wk total).`,
            "Review-to-practice ratio: roughly 1:2 (review-heavy by week's end).",
            "Weekend: section mock alternating Q / V / DI.",
          ],
    )
  }

  // Final
  if (finalWeeks >= 2) {
    addWeek(
      "Targeted weak-spot drill",
      "Surgical work on the remaining 2-3 weaknesses from your last mock.",
      [
        "No new content. Focused drilling on what the last debrief surfaced.",
        "One mid-week section mock on the weakest remaining area.",
        "Continue spaced review on past misses — daily.",
      ],
    )
    addWeek(
      "Final week protocol",
      "No new questions. Light review only. Sleep, nutrition, logistics.",
      [
        "Final full mock 7-10 days before exam, then no further mocks.",
        "Day before: rest. Re-read top error-log patterns once. Then stop.",
        "See the exam-day checklist for the day-of routine.",
      ],
    )
  } else {
    addWeek(
      "Final week protocol",
      "Compressed taper. Light review only — no new content.",
      [
        "One last mock at the start of this week, then stop.",
        "Daily 30-min spaced review on prior misses.",
        "Day before: full rest. Use the exam-day checklist.",
      ],
    )
  }

  return {
    totalWeeks: weeks.length,
    weeklyHours,
    examDate,
    weakestSection: weakest,
    weeks,
    compressed,
    unprimed,
  }
}

/**
 * Quick helper: rough total hours over the plan duration.
 */
export function totalHours(schedule: Schedule): number {
  return schedule.weeks.length * schedule.weeklyHours
}
