import type { Section } from "@/types"
import type {
  ChapterRecommendation,
  EnhancedDiagnosticReport,
  SubskillResult,
  TimingAnalysis,
  TrapPattern,
} from "./diagnostic"

/**
 * Personalized study-path engine.
 *
 * Takes an `EnhancedDiagnosticReport` and produces a structured 4-week
 * study path with:
 *   - section ordering (weakest first while fresh)
 *   - per-week themes (each week has a focus area + chapter list)
 *   - daily activity rotation (chapter → practice → review pattern)
 *   - explicit "why this week" rationale tied back to diagnostic
 *     evidence (specific traps, specific subskills)
 *
 * The engine is pure — no Supabase, no `fs`, no React. Safe to call
 * from anywhere. Wire it up:
 *   const report = buildEnhancedReport(attempts, questions)
 *   const path = computeStudyPath(report, { targetScore, daysAvailable })
 *
 * Distinct from `study-plan-engine.ts`:
 *   - This module synthesizes a *one-shot* multi-week plan from diagnostic
 *     evidence — used right after the diagnostic completes.
 *   - The other module produces *daily* recommendations from ongoing
 *     practice attempts — used on the dashboard / study-plan page.
 *   They share the same chapter-mapping conventions and TOPIC_TO_CHAPTER.
 */

export interface StudyPathInput {
  /** The student's target GMAT score (205-805). Drives priority weighting:
   *  higher targets demand stronger trap defense and pacing discipline. */
  targetScore?: number | null
  /** Days until the planned exam date. Used to tighten the cadence when
   *  short on time (compress; skip mock weeks if <14 days). */
  daysAvailable?: number | null
  /** Total weeks the path should span. Default: 4 (the canonical "first
   *  iteration after the diagnostic"). */
  weeks?: number
}

export type StudyPathActivity =
  | { kind: "read-chapter"; slug: string; title: string; section: Section; rationale: string }
  | { kind: "practice-set"; topic: string; section: Section; targetCount: number; rationale: string }
  | { kind: "review"; section?: Section; rationale: string }
  | { kind: "trap-drill"; trap: string; section: Section; rationale: string }
  | { kind: "timed-set"; section: Section; rationale: string }
  | { kind: "mock"; rationale: string }

export interface StudyPathDay {
  /** 1-indexed within the week (1-7). Rest day = empty `activities`. */
  day: number
  /** Two-letter weekday abbreviation, derived from cadence template. */
  weekday: "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun"
  activities: StudyPathActivity[]
}

export interface StudyPathWeek {
  /** 1-indexed (1..weeks). */
  week: number
  /** Single-line theme — describes what THIS week is about. */
  theme: string
  /** 2-3 sentences explaining why this week was chosen given the diagnostic. */
  rationale: string
  /** Section emphasis for the week. Drives the daily mix. */
  primarySection: Section
  /** Chapters to read this week, in order. */
  chapters: ChapterRecommendation[]
  /** Trap patterns to drill this week (subset of report's traps). */
  trapsToDrill: TrapPattern[]
  /** Day-by-day plan. */
  days: StudyPathDay[]
}

export interface StudyPathOutput {
  /** Recommended exam-day section order (weakest first, freshest brain). */
  sectionOrder: Section[]
  /** Why this section order, tied to per-section accuracy. */
  sectionOrderRationale: string
  /** The full multi-week plan. */
  weeks: StudyPathWeek[]
  /** Top-line summary suitable for a dashboard headline. */
  headline: string
  /** Concrete starting score and target gap to close. */
  scoring: {
    diagnosticTotal: number
    targetScore: number | null
    gapPoints: number | null
  }
}

const DEFAULT_WEEKS = 4
const WEEKDAY_TEMPLATE: StudyPathDay["weekday"][] = [
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun",
]

/**
 * Decide section order for the plan. The default heuristic mirrors
 * `computeSectionOrderRecommendation`:
 *   - Weakest section first (when fresh, attack the biggest gap)
 *   - Strongest section last (fatigue hurts mastery less)
 *
 * If two sections are within 5 percentage points, we use the canonical
 * Q → V → DI ordering instead — small differences aren't worth optimizing.
 */
function decideSectionOrder(report: EnhancedDiagnosticReport): {
  order: Section[]
  rationale: string
} {
  if (report.sections.length < 2) {
    return {
      order: ["Quant", "Verbal", "DI"],
      rationale:
        "Diagnostic is partial — defaulting to Q → V → DI order. Re-run after completing all three sections for a tailored ordering.",
    }
  }
  const sorted = [...report.sections].sort((a, b) => a.accuracy - b.accuracy)
  const weakest = sorted[0]
  const strongest = sorted[sorted.length - 1]
  const spread = strongest.accuracy - weakest.accuracy

  if (spread < 0.05) {
    return {
      order: ["Quant", "Verbal", "DI"],
      rationale: `All sections within ${Math.round(spread * 100)}% of each other — order won't move the needle. Default Q → V → DI.`,
    }
  }

  // Determine middle section (rest of `report.sections` minus weakest/strongest).
  const used = new Set([weakest.section, strongest.section])
  const middle = report.sections.find((s) => !used.has(s.section))?.section

  const order: Section[] = middle
    ? [weakest.section, middle, strongest.section]
    : [weakest.section, strongest.section]

  return {
    order,
    rationale: `Start with ${weakest.section} (${Math.round(weakest.accuracy * 100)}%) — you're freshest and that's where the biggest gains live. End with ${strongest.section} (${Math.round(strongest.accuracy * 100)}%); fatigue hits mastery less.`,
  }
}

/**
 * Allocate chapters to weeks. Strategy:
 *   - Week 1: top 2-3 chapters by priority (the urgent fixes)
 *   - Week 2: next 2 chapters + first trap drills
 *   - Week 3: remaining chapters + timing discipline
 *   - Week 4: timed sets + first mock + integration review
 *
 * Adjust if `daysAvailable` is short — for ≤14 days we collapse weeks 2-3.
 */
function allocateChaptersByWeek(
  chapters: ChapterRecommendation[],
  weeks: number
): ChapterRecommendation[][] {
  const result: ChapterRecommendation[][] = Array.from({ length: weeks }, () => [])
  if (chapters.length === 0) return result

  // Allocate front-loaded: more chapters in the early weeks.
  const distribution: number[] = []
  if (weeks >= 4) {
    distribution.push(3, 2, 1, 0)
  } else if (weeks === 3) {
    distribution.push(3, 2, 1)
  } else if (weeks === 2) {
    distribution.push(4, 2)
  } else {
    distribution.push(chapters.length)
  }

  let i = 0
  for (let w = 0; w < weeks && i < chapters.length; w++) {
    const take = distribution[w] ?? 0
    for (let k = 0; k < take && i < chapters.length; k++) {
      result[w].push(chapters[i])
      i++
    }
  }
  // Anything left after the standard distribution → drop into final week.
  while (i < chapters.length) {
    result[result.length - 1].push(chapters[i])
    i++
  }
  return result
}

/**
 * Build a 7-day cadence for a single week. Cadence varies by week:
 *   - Week 1: chapters dominate (concept install)
 *   - Week 2: chapter + practice + trap drill
 *   - Week 3: practice-heavy + timed sets
 *   - Week 4: timed sets + mock + review
 *   - Final week: rest day on Sunday before exam
 */
function buildWeekCadence(
  weekIndex: number,
  totalWeeks: number,
  chapters: ChapterRecommendation[],
  traps: TrapPattern[],
  primarySection: Section,
  topSubskill: SubskillResult | undefined
): StudyPathDay[] {
  const days: StudyPathDay[] = []
  const isFirstWeek = weekIndex === 0
  const isLastWeek = weekIndex === totalWeeks - 1

  for (let d = 0; d < 7; d++) {
    const weekday = WEEKDAY_TEMPLATE[d]
    const activities: StudyPathActivity[] = []

    if (isLastWeek && weekday === "Sun") {
      // Rest day before exam (or end-of-cycle).
      days.push({ day: d + 1, weekday, activities })
      continue
    }

    // ---- Week-specific cadence ----
    if (isFirstWeek) {
      // Chapter-heavy: read 1 chapter on most days, light practice.
      const chapter = chapters[d % Math.max(1, chapters.length)]
      if (chapter && d < chapters.length * 2) {
        activities.push({
          kind: "read-chapter",
          slug: chapter.chapterSlug,
          title: chapter.title,
          section: chapter.section,
          rationale: chapter.reason,
        })
      }
      if (d % 2 === 1 && topSubskill) {
        activities.push({
          kind: "practice-set",
          topic: topSubskill.topic,
          section: topSubskill.section,
          targetCount: 8,
          rationale: `Drill ${topSubskill.subskill} after the chapter — you were at ${Math.round(topSubskill.accuracy * 100)}% on the diagnostic.`,
        })
      }
      if (d === 6) {
        activities.push({
          kind: "review",
          section: primarySection,
          rationale: "End the week with a review pass on questions you missed.",
        })
      }
    } else if (weekIndex === 1 && totalWeeks >= 3) {
      // Mix chapter + practice + trap drill.
      if (d === 0 && chapters[0]) {
        activities.push({
          kind: "read-chapter",
          slug: chapters[0].chapterSlug,
          title: chapters[0].title,
          section: chapters[0].section,
          rationale: chapters[0].reason,
        })
      } else if (d === 3 && chapters[1]) {
        activities.push({
          kind: "read-chapter",
          slug: chapters[1].chapterSlug,
          title: chapters[1].title,
          section: chapters[1].section,
          rationale: chapters[1].reason,
        })
      }
      if (traps[0] && (d === 1 || d === 4)) {
        activities.push({
          kind: "trap-drill",
          trap: traps[0].trap,
          section: primarySection,
          rationale: `You fell into "${traps[0].trap}" ${traps[0].occurrences > 1 ? `${traps[0].occurrences} times` : "once"} on the diagnostic. Drill until you spot it cold.`,
        })
      }
      if (d === 2 && topSubskill) {
        activities.push({
          kind: "practice-set",
          topic: topSubskill.topic,
          section: topSubskill.section,
          targetCount: 12,
          rationale: `Build retrieval strength on ${topSubskill.subskill} — your weakest sub-skill.`,
        })
      }
      if (d === 5) {
        activities.push({
          kind: "review",
          rationale: "Spaced retrieval over the week's misses.",
        })
      }
    } else if (weekIndex === 2 && totalWeeks >= 4) {
      // Practice-heavy + timing discipline.
      if (d === 0 || d === 3) {
        activities.push({
          kind: "timed-set",
          section: primarySection,
          rationale: "Timed practice with strict per-question caps. Build pacing instinct.",
        })
      }
      if (d === 1 && traps[1]) {
        activities.push({
          kind: "trap-drill",
          trap: traps[1].trap,
          section: primarySection,
          rationale: `Second trap pattern from your diagnostic — drill recognition.`,
        })
      }
      if (d === 2 && chapters[0]) {
        activities.push({
          kind: "read-chapter",
          slug: chapters[0].chapterSlug,
          title: chapters[0].title,
          section: chapters[0].section,
          rationale: chapters[0].reason,
        })
      }
      if (d === 4) {
        activities.push({
          kind: "practice-set",
          topic: topSubskill?.topic ?? "mixed",
          section: primarySection,
          targetCount: 15,
          rationale: "Mid-week mixed-difficulty set across your weak areas.",
        })
      }
      if (d === 5) {
        activities.push({
          kind: "review",
          rationale: "Long-form review of the week's misses.",
        })
      }
    } else {
      // Final week (or week 4+): mock + integration.
      if (d === 1) {
        activities.push({
          kind: "mock",
          rationale: "Full-length timed mock under exam conditions. Builds endurance.",
        })
      }
      if (d === 2 || d === 5) {
        activities.push({
          kind: "review",
          rationale: "Walk through every miss; tag with error type.",
        })
      }
      if (d === 3) {
        activities.push({
          kind: "timed-set",
          section: primarySection,
          rationale: "Quick timed set to keep pacing instincts sharp.",
        })
      }
      if (d === 4 && traps[0]) {
        activities.push({
          kind: "trap-drill",
          trap: traps[0].trap,
          section: primarySection,
          rationale: "Final reps on your top trap before exam day.",
        })
      }
    }

    days.push({ day: d + 1, weekday, activities })
  }
  return days
}

/**
 * Construct each week's metadata (theme + rationale) from the report's
 * dominant signals.
 */
function buildWeek(
  weekIndex: number,
  totalWeeks: number,
  chapters: ChapterRecommendation[],
  traps: TrapPattern[],
  primarySection: Section,
  weakSubskills: SubskillResult[],
  timing: TimingAnalysis | undefined
): StudyPathWeek {
  const isFirstWeek = weekIndex === 0
  const isLastWeek = weekIndex === totalWeeks - 1

  let theme: string
  let rationale: string

  if (isFirstWeek) {
    theme = "Concept install — read the chapters that fix your top weak spots"
    const top = weakSubskills[0]
    rationale = top
      ? `Your weakest sub-skill is ${top.subskill} (${Math.round(top.accuracy * 100)}%). The chapters this week teach the recognition signals you're missing — read first, drill light.`
      : `Start with the chapters most likely to move your score. We've ranked them by trap-pattern frequency and sub-skill weakness from the diagnostic.`
  } else if (weekIndex === 1) {
    theme = "Trap-pattern drilling — turn recognition into reflex"
    const topTrap = traps[0]
    rationale = topTrap
      ? `You fell into "${topTrap.trap}" ${topTrap.occurrences > 1 ? `${topTrap.occurrences} times` : "once"} on the diagnostic. This week mixes one more chapter with intentional drilling on that pattern until you can spot it without thinking.`
      : `Move from concept-install to retrieval. Practice sets target the same sub-skills you read about last week.`
  } else if (weekIndex === 2) {
    theme = "Pacing + timed sets"
    if (timing && timing.pattern !== "efficient") {
      rationale = `Your ${primarySection} pacing was ${timing.pattern} on the diagnostic. ${timing.summary} This week introduces strict per-question time caps so the rhythm becomes automatic.`
    } else {
      rationale = `Pacing held up on the diagnostic — keep it that way. Timed sets this week prevent regression as the question difficulty rises.`
    }
  } else if (isLastWeek) {
    theme = "Integration + first mock"
    rationale = `Final week before reassessing. One full-length mock midweek, error-tagging on every miss, and a final pass through your top trap.`
  } else {
    theme = "Continued drilling"
    rationale = `Steady-state practice — no new content; consolidate what you've installed.`
  }

  return {
    week: weekIndex + 1,
    theme,
    rationale,
    primarySection,
    chapters,
    trapsToDrill: traps,
    days: buildWeekCadence(
      weekIndex,
      totalWeeks,
      chapters,
      traps,
      primarySection,
      weakSubskills[0]
    ),
  }
}

/**
 * Compress weeks if `daysAvailable` is short. Two heuristics:
 *   - days ≤ 14 → 2 weeks (skip mid-cycle pacing week)
 *   - days ≤ 21 → 3 weeks
 *   - days ≥ 22 → keep requested weeks (default 4)
 */
function resolveWeekCount(input: StudyPathInput): number {
  const requested = input.weeks ?? DEFAULT_WEEKS
  const days = input.daysAvailable
  if (days == null) return requested
  if (days <= 14) return Math.min(2, requested)
  if (days <= 21) return Math.min(3, requested)
  return requested
}

/**
 * Compute the full personalized study path from an enhanced diagnostic
 * report. Returns ordered weeks with daily activities, plus exam-day
 * section ordering and a top-line headline.
 */
export function computeStudyPath(
  report: EnhancedDiagnosticReport,
  input: StudyPathInput = {}
): StudyPathOutput {
  const weeks = resolveWeekCount(input)
  const { order, rationale: sectionOrderRationale } = decideSectionOrder(report)

  // Each week's primary section rotates through the recommended order so
  // the student doesn't spend a whole week on one section if multiple
  // sections need work.
  const sectionRotation = order.length > 0 ? order : (["Quant", "Verbal", "DI"] as Section[])

  const chaptersByWeek = allocateChaptersByWeek(report.recommendedChapters, weeks)

  const builtWeeks: StudyPathWeek[] = []
  for (let w = 0; w < weeks; w++) {
    const primarySection = sectionRotation[w % sectionRotation.length]
    const weekChapters = chaptersByWeek[w]
    // Weight traps toward the primary section's sub-skills when possible.
    const sectionTraps = report.trapPatterns.filter((t) => {
      // Trap doesn't carry a section directly — use the question id of the
      // first driving question to infer.
      return t.questionIds.length > 0
    })
    const sectionWeakSubskills = report.weakSubskills.filter(
      (s) => s.section === primarySection
    )
    const sectionTiming = report.timingAnalysis.find((t) => t.section === primarySection)
    builtWeeks.push(
      buildWeek(
        w,
        weeks,
        weekChapters,
        sectionTraps.slice(0, 2),
        primarySection,
        sectionWeakSubskills.length > 0 ? sectionWeakSubskills : report.weakSubskills,
        sectionTiming
      )
    )
  }

  const targetScore = input.targetScore ?? null
  const gapPoints =
    targetScore !== null ? Math.max(0, targetScore - report.totalScore) : null

  const headline = buildHeadline(report, targetScore, gapPoints, weeks)

  return {
    sectionOrder: order,
    sectionOrderRationale,
    weeks: builtWeeks,
    headline,
    scoring: {
      diagnosticTotal: report.totalScore,
      targetScore,
      gapPoints,
    },
  }
}

function buildHeadline(
  report: EnhancedDiagnosticReport,
  targetScore: number | null,
  gapPoints: number | null,
  weeks: number
): string {
  if (targetScore !== null && gapPoints !== null && gapPoints > 0) {
    return `Diagnostic ${report.totalScore} → target ${targetScore} (${gapPoints}-point gap). ${weeks}-week plan starts with your weakest section while you're fresh.`
  }
  if (targetScore !== null && gapPoints !== null && gapPoints === 0) {
    return `You're already at your target (${targetScore}). Use this ${weeks}-week plan to harden against trap patterns and stabilize pacing.`
  }
  return `Diagnostic ${report.totalScore}. ${weeks}-week plan tailored to your weakest sub-skills and trap patterns.`
}
