/**
 * Shared constants used by both the server page (for aggregations) and
 * the client component (for UI). Keeping these in a non-"use client"
 * module so the server can iterate them without the Turbopack
 * client-boundary weirdness that drops non-component exports.
 *
 * The taxonomy follows the hierarchical error-families model from the
 * product framework — each tag belongs to a family (Knowledge,
 * Translation, DI logic, Reasoning, Reading, DI process, Execution,
 * Timing, Behaviour) and carries a *default remediation* path so the
 * error log becomes an actionable next-step engine rather than a diary.
 *
 * LEGACY tags (pre-framework) remain valid in the DB for existing rows,
 * but new UI only surfaces the structured tags below. When the legacy
 * check constraint is replaced (see HANDOFF for SQL), delete the legacy
 * array.
 */

export type ErrorFamily =
  | "Knowledge"
  | "Translation"
  | "DI logic"
  | "Reasoning"
  | "Reading"
  | "DI process"
  | "Execution"
  | "Timing"
  | "Behaviour"

export interface ErrorTagDef {
  /** Stable identifier, written to DB. Short SCREAMING_SNAKE per PDF. */
  id: string
  /** Short display label. */
  label: string
  family: ErrorFamily
  /** Sections where this tag applies; null = all. */
  appliesTo: ("Quant" | "Verbal" | "DI" | "All")[]
  /** One-line help for the TagEditor picker. */
  description: string
  /** Short, action-first remediation copy. Surfaces on the mistake row. */
  remediation: string
}

export const ERROR_TAG_DEFS: ErrorTagDef[] = [
  {
    id: "Q_CONCEPT",
    label: "Concept gap",
    family: "Knowledge",
    appliesTo: ["Quant", "DI"],
    description: "Concept missing or unstable.",
    remediation: "Lesson replay + 2 worked examples + an easy drill on the same topic.",
  },
  {
    id: "Q_SETUP",
    label: "Setup error",
    family: "Translation",
    appliesTo: ["Quant", "DI"],
    description: "Understood the problem but set up the equation or table wrong.",
    remediation: "Sentence-to-equation (or condition-to-table) translation drill.",
  },
  {
    id: "DS_SUFF",
    label: "DS sufficiency",
    family: "DI logic",
    appliesTo: ["DI"],
    description: "Tried to solve fully instead of just testing sufficiency.",
    remediation: "DS decision-tree + statement-isolation set — stop at enough-info.",
  },
  {
    id: "CR_SCOPE",
    label: "CR out-of-scope",
    family: "Reasoning",
    appliesTo: ["Verbal"],
    description: "Answer was relevant-sounding but outside the argument's scope.",
    remediation: "Argument-map exercise + trap-pattern drill on scope.",
  },
  {
    id: "RC_STRUCTURE",
    label: "RC structure",
    family: "Reading",
    appliesTo: ["Verbal"],
    description: "Missed the main point, viewpoint, or role of a paragraph.",
    remediation: "Passage-map template + low-time annotation drill.",
  },
  {
    id: "MSR_MAP",
    label: "MSR source map",
    family: "DI process",
    appliesTo: ["DI"],
    description: "Lost track of where information lived across tabs/sources.",
    remediation: "Source-map protocol + tab-switching practice set.",
  },
  {
    id: "TA_FILTER",
    label: "TA filter-first",
    family: "DI process",
    appliesTo: ["DI"],
    description: "Failed to sort or filter before judging statements.",
    remediation: "Filter-first workflow + spreadsheet drill.",
  },
  {
    id: "GI_UNITS",
    label: "GI axes/units",
    family: "DI process",
    appliesTo: ["DI"],
    description: "Misread axes, labels, scales, or units on a chart.",
    remediation: "Graph-decoding warm-up + unit-check routine.",
  },
  {
    id: "TPA_LINK",
    label: "TPA linkage",
    family: "DI process",
    appliesTo: ["DI"],
    description: "Ignored the dependency between the two prompts.",
    remediation: "Dependency-first checklist + pair-elimination set.",
  },
  {
    id: "CALC_SLIP",
    label: "Calc slip",
    family: "Execution",
    appliesTo: ["Quant", "DI"],
    description: "Correct plan but the arithmetic or transcription went wrong.",
    remediation: "Low-difficulty accuracy block under a tight time cap.",
  },
  {
    id: "TIME_SINK",
    label: "Time sink",
    family: "Timing",
    appliesTo: ["All"],
    description: "Spent far too long for the expected payoff.",
    remediation: "Stop-loss training + triage review of the last 10 items.",
  },
  {
    id: "REVIEW_EDIT",
    label: "Bad review/edit",
    family: "Behaviour",
    appliesTo: ["All"],
    description: "Poor bookmarking or answer-change discipline in the review phase.",
    remediation: "Review/edit lab + end-of-section protocol drill.",
  },
  {
    id: "FATIGUE_DROP",
    label: "Fatigue drop",
    family: "Behaviour",
    appliesTo: ["All"],
    description: "Accuracy collapsed late in the section or mock.",
    remediation: "Section-order experiment + stamina block.",
  },
  {
    id: "OVERCONF",
    label: "Overconfidence",
    family: "Behaviour",
    appliesTo: ["All"],
    description: "Fast wrong answer on a question that felt easy.",
    remediation: "Confidence-audit drill + mandatory final-check routine.",
  },
] as const

/**
 * Legacy tags from the v1 error log. Kept valid in the DB for existing
 * rows, not surfaced in the new TagEditor picker. Delete once the
 * widened `error_tags.tag` CHECK constraint is live (see HANDOFF).
 */
export const LEGACY_ERROR_TAGS = [
  "Conceptual",
  "Careless",
  "Time Pressure",
  "Misread",
  "Strategy",
  "Other",
] as const

/** All legal values for `error_tags.tag` — new + legacy combined. */
export const ALL_TAG_IDS = [
  ...ERROR_TAG_DEFS.map((t) => t.id),
  ...LEGACY_ERROR_TAGS,
] as const

export type ErrorTag = (typeof ALL_TAG_IDS)[number]

/** Lookup: id → definition (new tags only). Legacy tags return undefined. */
export const ERROR_TAG_BY_ID: Record<string, ErrorTagDef> = Object.fromEntries(
  ERROR_TAG_DEFS.map((t) => [t.id, t])
)

/** Families in display order (matches PDF). */
export const ERROR_FAMILIES: ErrorFamily[] = [
  "Knowledge",
  "Translation",
  "DI logic",
  "Reasoning",
  "Reading",
  "DI process",
  "Execution",
  "Timing",
  "Behaviour",
]

/**
 * Backward-compat alias for code that iterates the old 6-element list.
 * Points at the legacy list so existing reads (e.g. breakdown card
 * defaults before the UI rewrite lands) keep rendering. New code should
 * import ERROR_TAG_DEFS directly.
 */
export const ERROR_TAGS = ERROR_TAG_DEFS.map((t) => t.id)

/**
 * Root-cause taxonomy from the deep research report (see
 * `/Users/adam/Downloads/deep-research-report.md`). A strict LAYER on
 * top of ERROR_TAG_DEFS — not a replacement. The two taxonomies are
 * orthogonal:
 *
 *   ERROR_TAG_DEFS  → the WHAT: which question-type family failed
 *                     (DS sufficiency, CR scope, RC structure, ...).
 *   ROOT_CAUSE_DEFS → the WHY: which step in the solve process broke
 *                     (concept absent, wrong strategy, calc slip, ...).
 *
 * A single mistake can carry both. E.g. `CR_SCOPE` + `R2` says "a
 * scope-family CR miss because the student ignored a qualifier in the
 * stimulus." The research report calls this "one root cause and up to
 * two contributing causes." For now we store one root cause per error
 * row; contributing causes are TODO when the UI can ask for two.
 */
export type RootCauseFamily =
  | "Knowledge"
  | "Representation"
  | "Strategy"
  | "Execution"
  | "Pacing"
  | "Judgement"
  | "Fatigue"

export interface RootCauseDef {
  /** Short code written to DB. Matches the research report exactly. */
  id: string
  label: string
  family: RootCauseFamily
  /** Help text for the picker. One sentence. */
  description: string
  /** Action-first remediation the mistake row surfaces. */
  remediation: string
}

export const ROOT_CAUSE_DEFS: RootCauseDef[] = [
  {
    id: "K1",
    label: "Concept absent",
    family: "Knowledge",
    description: "Didn't actually know the underlying rule or concept.",
    remediation: "Return to the lesson and work the recap cards cold.",
  },
  {
    id: "K2",
    label: "Concept misapplied",
    family: "Knowledge",
    description: "Knew the topic but applied it wrongly to this question.",
    remediation: "Targeted worked examples on the exact variant that tripped you.",
  },
  {
    id: "R1",
    label: "Translation / representation",
    family: "Representation",
    description: "Mis-set the equation, logic, or diagram from the wording.",
    remediation: "Sentence-to-equation (or condition-to-diagram) translation drill.",
  },
  {
    id: "R2",
    label: "Condition miss",
    family: "Representation",
    description: "Ignored a qualifier, range, or constraint in the stem.",
    remediation: "Slow-read protocol + annotation cues on qualifiers.",
  },
  {
    id: "S1",
    label: "Wrong strategy choice",
    family: "Strategy",
    description: "Chose algebra when estimation or backsolving was faster.",
    remediation: "Strategy-comparison set — same item, multiple paths.",
  },
  {
    id: "S2",
    label: "Opportunity missed",
    family: "Strategy",
    description: "Failed to use elimination, choosing numbers, or bookmark affordances.",
    remediation: "Affordance drill: items where the fast path is an affordance.",
  },
  {
    id: "E1",
    label: "Execution / arithmetic",
    family: "Execution",
    description: "Setup was right; the arithmetic or a transcription step failed.",
    remediation: "Short fluency set on the exact operation that slipped.",
  },
  {
    id: "E2",
    label: "Data extraction slip",
    family: "Execution",
    description: "Misread a table, chart, passage detail, or answer choice.",
    remediation: "Stimulus-scanning drill + check-before-commit routine.",
  },
  {
    id: "P1",
    label: "Slow but correct",
    family: "Pacing",
    description: "Accuracy fine, time cost unacceptable.",
    remediation: "Timed variant on the same skill with a target-time cap.",
  },
  {
    id: "P2",
    label: "Panic guess / timeout",
    family: "Pacing",
    description: "Abandoned process under time pressure and guessed.",
    remediation: "Section-pacing intervention — checkpoint drills.",
  },
  {
    id: "J1",
    label: "Review/edit damage",
    family: "Judgement",
    description: "Changed a right answer to a wrong one, or reviewed poorly.",
    remediation: "Review-decision protocol: change only if you can name the flaw.",
  },
  {
    id: "F1",
    label: "Stamina / focus fade",
    family: "Fatigue",
    description: "Accuracy or pace decayed late in the section or exam.",
    remediation: "Endurance sets + break-strategy rehearsal.",
  },
] as const

export const ROOT_CAUSE_BY_ID: Record<string, RootCauseDef> = Object.fromEntries(
  ROOT_CAUSE_DEFS.map((r) => [r.id, r]),
)

export const ROOT_CAUSE_FAMILIES: RootCauseFamily[] = [
  "Knowledge",
  "Representation",
  "Strategy",
  "Execution",
  "Pacing",
  "Judgement",
  "Fatigue",
]

export const ROOT_CAUSE_IDS = ROOT_CAUSE_DEFS.map((r) => r.id) as readonly string[]
