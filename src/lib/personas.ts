/**
 * Persona assignment — the research-report framework segments students by
 * baseline band (where they're starting) and target band (where they want
 * to land). Each persona carries a "core need" that should shape the
 * product experience: what gets surfaced on the dashboard, how hard the
 * practice pool leans, what emphasis the study plan takes.
 *
 * Four personas are fully derivable from (baseline, target) and handled
 * here: Foundations Rebuilder / Structured Improver / Ambitious Stretcher
 * / Elite Finisher. The report also describes two orthogonal personas —
 * International Verbal-Weighted Candidate and Retaker — that require
 * explicit user answers (first-language, prior-attempt) we don't yet
 * collect. Those layer on top and are TODO for a later wave.
 */

export type PersonaKey =
  | "foundations-rebuilder"
  | "structured-improver"
  | "ambitious-stretcher"
  | "elite-finisher"
  | "unknown"

/** Orthogonal persona flags per the research report. A student can be
 *  an Ambitious Stretcher AND a Retaker, or an Elite Finisher AND an
 *  Int'l Verbal-weighted candidate, etc. These layer on top of the
 *  baseline-derived persona without replacing it. */
export type PersonaTag = "intl-verbal" | "retaker"

export interface PersonaTagDef {
  key: PersonaTag
  label: string
  /** Short line added to PersonaCard when this tag is active. */
  addendum: string
  color: string
  bg: string
}

export const PERSONA_TAG_DEFS: Record<PersonaTag, PersonaTagDef> = {
  "intl-verbal": {
    key: "intl-verbal",
    label: "Int'l verbal-weighted",
    addendum:
      "Extra verbal emphasis: RC efficiency, CR precision, reading-load management. Vocabulary work only in-context — not flashcards.",
    color: "#6FB5F6",
    bg: "rgba(111,181,246,0.12)",
  },
  retaker: {
    key: "retaker",
    label: "Retaker",
    addendum:
      "Your study should start from the post-mortem: diagnose why last prep fell short, emphasise review behaviour, and lean on ESR-style analytics to spot patterns early.",
    color: "#B088FF",
    bg: "rgba(176,136,255,0.12)",
  },
}

export interface PersonaProfile {
  key: PersonaKey
  label: string
  /** Short band indicator for chips — e.g. "Baseline 495-595 → 595-655". */
  bandLabel: string
  /** One-sentence summary of what the student needs right now. */
  coreNeed: string
  /** One-sentence prescription for what the product should emphasise. */
  emphasis: string
  /** Accent colour for the persona chip — matches the platform palette. */
  color: string
  /** Background tint used behind the chip. */
  bg: string
  /** Layered orthogonal tags — intl-verbal / retaker. Driven by explicit
   *  user settings, not the diagnostic. */
  tags: PersonaTag[]
}

const PROFILES: Record<
  Exclude<PersonaKey, "unknown">,
  Omit<PersonaProfile, "bandLabel" | "tags">
> = {
  "foundations-rebuilder": {
    key: "foundations-rebuilder",
    label: "Foundations Rebuilder",
    coreNeed:
      "Basic Quant fluency, CR mechanics, reading discipline, DI literacy. Don't skip the fundamentals.",
    emphasis:
      "Long guided syllabus, easy-then-medium ramps, more worked examples, high-density review loops.",
    color: "#E8C97A",
    bg: "rgba(232,201,122,0.12)",
  },
  "structured-improver": {
    key: "structured-improver",
    label: "Structured Improver",
    coreNeed:
      "Consistency, mixed-set performance, timing control. The fundamentals are there; the delivery isn't reliable yet.",
    emphasis:
      "Standard path, weekly mixed sets, section rehearsals, frequent error-based assignments.",
    color: "#C9A84C",
    bg: "rgba(201,168,76,0.14)",
  },
  "ambitious-stretcher": {
    key: "ambitious-stretcher",
    label: "Ambitious Stretcher",
    coreNeed:
      "Harder-item strategy, DI sophistication, official-style calibration. The last 60 points cost more than the first 150.",
    emphasis:
      "Medium-to-hard pools, official item tracker, review/edit decision training.",
    color: "#3ECF8E",
    bg: "rgba(62,207,142,0.12)",
  },
  "elite-finisher": {
    key: "elite-finisher",
    label: "Elite Finisher",
    coreNeed:
      "Marginal gains, trap avoidance, endurance, official-style precision. Polish, not rebuild.",
    emphasis:
      "Hard/stress pools, blind official calibration, official mocks, strict review/edit discipline.",
    color: "#6FB5F6",
    bg: "rgba(111,181,246,0.12)",
  },
}

/**
 * Resolve a persona from the student's (baseline, target) pair. Bands
 * per the research report:
 *   Rebuilder: baseline 205–495
 *   Improver:  baseline 495–595
 *   Stretcher: baseline 595–655
 *   Elite:     baseline 655+
 *
 * Null baseline (no diagnostic yet) returns "unknown" so the caller can
 * prompt the student to finish the diagnostic. Target is used for the
 * display-only band label; the persona key itself is baseline-driven so
 * the assignment stays stable even if the target shifts.
 */
export interface PersonaFlags {
  /** `false` layers the Int'l Verbal-weighted tag. `null`/undefined =
   *  student hasn't answered; treat as unset. */
  englishNative?: boolean | null
  /** `true` layers the Retaker tag. */
  priorGmatAttempt?: boolean | null
}

export function computePersona(
  baseline: number | null,
  target: number | null,
  flags: PersonaFlags = {},
): PersonaProfile {
  const tags: PersonaTag[] = []
  // Orthogonal layering: a student can be both intl-verbal AND a
  // retaker, independent of their baseline-derived persona.
  if (flags.englishNative === false) tags.push("intl-verbal")
  if (flags.priorGmatAttempt === true) tags.push("retaker")

  if (baseline === null) {
    return {
      key: "unknown",
      label: "Not yet assigned",
      bandLabel: "Finish the diagnostic to unlock",
      coreNeed:
        "Your persona assignment depends on the diagnostic baseline. Take the 30-question placement to unlock a tailored plan.",
      emphasis: "",
      color: "#888888",
      bg: "rgba(255,255,255,0.04)",
      tags,
    }
  }

  let key: Exclude<PersonaKey, "unknown">
  if (baseline < 495) key = "foundations-rebuilder"
  else if (baseline < 595) key = "structured-improver"
  else if (baseline < 655) key = "ambitious-stretcher"
  else key = "elite-finisher"

  const profile = PROFILES[key]
  const bandLabel = target !== null
    ? `Baseline ${baseline} → target ${target}`
    : `Baseline ${baseline}`

  return { ...profile, bandLabel, tags }
}

/**
 * Persona-adaptive tweaks to the mastery gate thresholds from
 * `src/lib/mastery.ts`. Per the research report:
 *   "Rebuilders need higher untimed accuracy before being rushed; elite
 *    finishers can tolerate lower hard-item accuracy if timing and
 *    decision quality remain excellent."
 *
 * Returns the deltas to apply on top of the baseline thresholds. Undefined
 * keys mean "use the default." Callers should treat this as a lookup, not
 * a full override — the core thresholds live in mastery.ts and should not
 * duplicate here.
 */
export interface PersonaThresholdOverrides {
  conceptAccuracy?: number
  timedAccuracy?: number
  /** Multiplier on the section target time — 1.3 by default. Elite can
   *  afford 1.2 (tighter); Rebuilder gets 1.4 (looser). */
  timedMedianCap?: number
}

export function personaThresholdOverrides(
  key: PersonaKey,
): PersonaThresholdOverrides {
  switch (key) {
    case "foundations-rebuilder":
      // Higher untimed accuracy before being rushed into timed work.
      // Looser pace cap because fluency is still building.
      return { conceptAccuracy: 0.85, timedMedianCap: 1.4 }
    case "elite-finisher":
      // Lower accuracy tolerance OK if pace is tight — the emphasis is
      // polish, not hitting perfect on every attempt.
      return { timedAccuracy: 0.65, timedMedianCap: 1.2 }
    case "structured-improver":
    case "ambitious-stretcher":
    case "unknown":
    default:
      return {}
  }
}
