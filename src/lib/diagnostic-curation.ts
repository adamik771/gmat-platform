import type { Section } from "@/types"

/**
 * Curated diagnostic question lists.
 *
 * The diagnostic is the "first move" of the product per the framework
 * (diagnose before teaching). For results to be comparable across users
 * and re-takes, the question set must be deterministic and pedagogically
 * intentional — not random, not silently shuffled.
 *
 * These lists pick 10 questions per section, stratified across:
 *   - Difficulty: 3 Easy / 4 Medium / 3 Hard
 *   - Topic coverage: every major subskill is represented at least once
 *   - Trap variety: each list spans the canonical trap patterns
 *     catalogued in the curriculum (so the trap-pattern report has
 *     enough range to be informative)
 *
 * IDs follow the platform convention `${fileSlug}-q${n}`. They are
 * resolved through `getQuestionsByIds` which preserves order; if any
 * id is missing the diagnostic falls back to the stratified picker.
 *
 * Maintenance:
 *   - Replace an id only if the underlying question is removed/edited
 *     in a way that breaks calibration.
 *   - When the bank grows, prefer questions that carry the standardized
 *     6-section explanation (fastest_path, common_trap, takeaway,
 *     related_reading) — those drive the enhanced report's trap-pattern
 *     and chapter-recommendation fields.
 */

export const DIAGNOSTIC_QUESTION_IDS: Record<Section, string[]> = {
  // -------- Quant (10): spans 9 topic files + 3 difficulty levels --------
  // Easy (3) — anchor topics: arithmetic, algebra, number properties
  // Medium (4) — exponents/roots, ratios/percents, rates/work, statistics
  // Hard (3) — geometry, word problems, combinatorics
  Quant: [
    "arithmetic-q1", // Easy — fraction-decimal-percent baseline
    "algebra-q1", // Easy — linear equations recognition
    "number-properties-q1", // Easy — primes recognition + small-composite trap
    "exponents-roots-q5", // Medium — exponent rules
    "ratios-percents-q11", // Medium — reverse percent (50% increase reverse)
    "rates-work-q12", // Medium — combined work, rate-vs-time trap
    "statistics-probability-q14", // Medium — mean shift via added value
    "geometry-q16", // Hard — square inscribed in circle
    "word-problems-q22", // Hard — piecewise revenue optimization
    "combinatorics-q20", // Hard — restricted combinations
  ],

  // -------- Verbal (10): CR-heavy with RC sampling --------
  // CR types span Strengthen, Weaken, Assumption, Inference, Paradox, Flaw, Boldface.
  // RC sampling covers main-idea + detail + inference question types.
  Verbal: [
    "critical-reasoning-q1", // Easy — Strengthen, alternative-cause anchor
    "critical-reasoning-q11", // Easy — Assumption, plan-feasibility
    "critical-reasoning-q26", // Easy — Flaw, hasty generalization
    "critical-reasoning-q34", // Easy — Paradox, demand cannibalization
    "critical-reasoning-q42", // Medium — Weaken, mechanism doesn't apply
    "critical-reasoning-q21", // Easy — Inference, market conditions
    "critical-reasoning-q70", // Hard — Assumption, lab-to-factory transfer
    "critical-reasoning-q49", // Hard — Boldface, principle + mechanism
    "critical-reasoning-q90", // Hard — Boldface, evidence + rebuttal
    "reading-comprehension-q1", // Medium — RC main idea or detail (passage 1)
  ],

  // -------- DI (10): spans all 5 question types --------
  // Coverage: DS (4) + Tables (2) + Graphics (1) + MSR (2) + TPA (1)
  // DS gets extra weight because it tests the most distinct sub-skills.
  DI: [
    "data-sufficiency-q1", // Easy — DS yes/no recognition
    "data-sufficiency-q15", // Medium — DS value sufficiency
    "table-analysis-q3", // Easy — Tables, sort-to-find
    "graphics-interpretation-q5", // Medium — Graphics, axes-before-content
    "multi-source-reasoning-q1", // Medium — MSR, source mapping
    "two-part-analysis-q5", // Medium — TPA, constraint-pair elimination
    "data-sufficiency-q40", // Hard — DS with edge-case testing
    "table-analysis-q20", // Hard — Tables, unit-checking trap
    "multi-source-reasoning-q10", // Hard — MSR cross-source synthesis
    "data-sufficiency-q56", // Hard — DS, alone-first protocol
  ],
}

/**
 * Section-level guidance that surfaces with each diagnostic section in
 * the UI. Brief rationale for what the section measures and the rough
 * time budget the elite-scorer answer key assumes.
 */
export const DIAGNOSTIC_SECTION_GUIDANCE: Record<
  Section,
  { description: string; targetMinutes: number }
> = {
  Quant: {
    description:
      "10 stratified questions across all 9 quant topics. Tests both content recall (formulas, rules) and method-selection (when to estimate, when to backsolve, when to set up algebra).",
    targetMinutes: 21,
  },
  Verbal: {
    description:
      "9 CR + 1 RC question across the major question types (Strengthen, Weaken, Assumption, Inference, Paradox, Flaw, Boldface). Tests argument structure recognition and trap-pattern resistance.",
    targetMinutes: 23,
  },
  DI: {
    description:
      "10 questions spanning all 5 DI types (DS, Tables, Graphics, MSR, Two-Part). Heaviest on DS since it tests the most distinct sub-skills.",
    targetMinutes: 21,
  },
}
