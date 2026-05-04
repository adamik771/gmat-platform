import type { SupabaseClient } from "@supabase/supabase-js"
import {
  getQuestionsBySection,
  getQuestionsByIds,
  type ParsedQuestion,
} from "./content"
import { collectAdaptiveSignals } from "./adaptive-plan-engine"
import { buildSpacedReviewQueue } from "./spaced-review"
import type { Difficulty, Section } from "@/types"

/**
 * Mock-mode definitions and dispatcher.
 *
 * The platform supports seven mock modes. Five are *static* (sections +
 * counts known up-front, deterministic question selection); two are
 * *dynamic* (questions sourced from user-specific signals — weak areas
 * or the spaced-review queue).
 *
 * The picker uses the same `orderForMock` difficulty progression as the
 * full mock: easy items front-load, advanced items tail. That way the
 * pacing rhythm a student trains on is consistent across modes.
 *
 * Failure modes that route to the static fallback:
 *   - Dynamic mode but no signals (no diagnostic / no recent practice)
 *   - Dynamic mode with too few candidates to fill the mock
 * In both cases we top up with stratified picks from the section pool
 * so the mock is always playable.
 */

export type MockMode =
  | "full"
  | "quant-only"
  | "verbal-only"
  | "di-only"
  | "hard"
  | "weak"
  | "mixed-review"

export const MOCK_MODE_LIST: MockMode[] = [
  "full",
  "quant-only",
  "verbal-only",
  "di-only",
  "hard",
  "weak",
  "mixed-review",
]

export const ALL_SECTIONS: Section[] = ["Quant", "Verbal", "DI"]

export interface MockModeDef {
  id: MockMode
  label: string
  /** One-line marketing copy for the mode-picker grid. */
  shortDescription: string
  /** 2-3 sentence rationale shown in the picker. */
  description: string
  /** When true, sections + counts are deterministic. */
  isStatic: boolean
  /** Total minutes hint for the mode-picker card. */
  totalMinutesHint: number
  /** Total questions hint for the mode-picker card. */
  totalQuestionsHint: number
  /** Which sections appear in this mode (always 1-3 from {Q, V, DI}). */
  staticSections: Section[]
  /** Per-section question count (only sections in `staticSections`). */
  staticQuestionCounts: Record<Section, number>
  /** Per-section minutes (only sections in `staticSections`). */
  staticMinutesPerSection: Record<Section, number>
  /** Per-section difficulty mix (Beginner / Intermediate / Advanced).
   *  Undefined sections fall back to the default mix in `mock.ts`. */
  staticDifficultyMix?: Partial<Record<Section, Record<Difficulty, number>>>
}

const ZEROS: Record<Section, number> = { Quant: 0, Verbal: 0, DI: 0 }

// ============================================================
// Mode definitions
// ============================================================

export const MOCK_MODE_DEFS: Record<MockMode, MockModeDef> = {
  full: {
    id: "full",
    label: "Full mock",
    shortDescription: "GMAT Focus full simulation — 64 Q × 135 min",
    description:
      "Three sections (Quant 21 / Verbal 23 / DI 20) at exam-day timing and difficulty mix. The most realistic measurement of where you stand.",
    isStatic: true,
    totalMinutesHint: 135,
    totalQuestionsHint: 64,
    staticSections: ["Quant", "Verbal", "DI"],
    staticQuestionCounts: { Quant: 21, Verbal: 23, DI: 20 },
    staticMinutesPerSection: { Quant: 45, Verbal: 45, DI: 45 },
  },
  "quant-only": {
    id: "quant-only",
    label: "Quant-only mock",
    shortDescription: "Single section — 21 Q × 45 min",
    description:
      "One full-length Quant section at exam timing. Useful for isolating Quant pacing rhythms without the cognitive load of switching sections.",
    isStatic: true,
    totalMinutesHint: 45,
    totalQuestionsHint: 21,
    staticSections: ["Quant"],
    staticQuestionCounts: { ...ZEROS, Quant: 21 },
    staticMinutesPerSection: { ...ZEROS, Quant: 45 },
  },
  "verbal-only": {
    id: "verbal-only",
    label: "Verbal-only mock",
    shortDescription: "Single section — 23 Q × 45 min",
    description:
      "One full-length Verbal section at exam timing. Useful for isolating Verbal pacing or training argument-recognition stamina.",
    isStatic: true,
    totalMinutesHint: 45,
    totalQuestionsHint: 23,
    staticSections: ["Verbal"],
    staticQuestionCounts: { ...ZEROS, Verbal: 23 },
    staticMinutesPerSection: { ...ZEROS, Verbal: 45 },
  },
  "di-only": {
    id: "di-only",
    label: "DI-only mock",
    shortDescription: "Single section — 20 Q × 45 min",
    description:
      "One full-length Data Insights section at exam timing. The mode of choice when DI is the score-limiting subsection.",
    isStatic: true,
    totalMinutesHint: 45,
    totalQuestionsHint: 20,
    staticSections: ["DI"],
    staticQuestionCounts: { ...ZEROS, DI: 20 },
    staticMinutesPerSection: { ...ZEROS, DI: 45 },
  },
  hard: {
    id: "hard",
    label: "Hard-question mock",
    shortDescription: "60 Q × 90 min — heavy on Advanced",
    description:
      "20 questions per section × 30 min per section. Difficulty mix loads on Advanced (15 Hard + 5 Medium per section, no Easy). Trains pacing under top-end pressure — the kind of pacing you need to break into the elite score band.",
    isStatic: true,
    totalMinutesHint: 90,
    totalQuestionsHint: 60,
    staticSections: ["Quant", "Verbal", "DI"],
    staticQuestionCounts: { Quant: 20, Verbal: 20, DI: 20 },
    staticMinutesPerSection: { Quant: 30, Verbal: 30, DI: 30 },
    staticDifficultyMix: {
      Quant: { Beginner: 0, Intermediate: 5, Advanced: 15 },
      Verbal: { Beginner: 0, Intermediate: 5, Advanced: 15 },
      DI: { Beginner: 0, Intermediate: 5, Advanced: 15 },
    },
  },
  weak: {
    id: "weak",
    label: "Weak-area mock",
    shortDescription: "30 Q × 45 min — your weakest sub-skills",
    description:
      "Pulls 30 questions from your three weakest sub-skills (synthesised from diagnostic + mocks + practice). Mixed difficulty. The mock that targets the score gap directly.",
    isStatic: false,
    totalMinutesHint: 45,
    totalQuestionsHint: 30,
    staticSections: ["Quant", "Verbal", "DI"],
    staticQuestionCounts: { Quant: 0, Verbal: 0, DI: 0 }, // dynamic
    staticMinutesPerSection: { Quant: 45, Verbal: 45, DI: 45 }, // sections that appear get 45 min
  },
  "mixed-review": {
    id: "mixed-review",
    label: "Mixed-review mock",
    shortDescription: "25 Q × 30 min — items due in your spaced queue",
    description:
      "Pulls 25 questions from your spaced-review queue (questions you've missed before, ordered by overdue priority). A timed retrieval session — the highest-leverage 30 minutes you can spend most days.",
    isStatic: false,
    totalMinutesHint: 30,
    totalQuestionsHint: 25,
    staticSections: ["Quant", "Verbal", "DI"],
    staticQuestionCounts: { Quant: 0, Verbal: 0, DI: 0 }, // dynamic
    staticMinutesPerSection: { Quant: 30, Verbal: 30, DI: 30 },
  },
}

// ============================================================
// Picker dispatcher
// ============================================================

export interface MockSectionPick {
  section: Section
  minutes: number
  questions: ParsedQuestion[]
}

/**
 * Resolve a mode + user context into the section-by-section question
 * sets the runner consumes. Always returns at least one playable
 * section. For dynamic modes that don't have enough user signal yet,
 * falls back to the static stratified picker for the relevant sections.
 *
 * The two dynamic modes ("weak" and "mixed-review") need Supabase to
 * read attempt history. When `supabase` or `userId` is null, both
 * dynamic modes degrade gracefully into a stratified weak-area pick
 * across the three sections.
 */
export async function getMockSectionsForMode(
  mode: MockMode,
  context: {
    supabase: SupabaseClient | null
    userId: string | null
    userMetadata: unknown
    /** Optional: pre-import the existing static picker so we don't create a
     *  cycle (`mock.ts` imports this module too). */
    pickStatic: (
      section: Section,
      mix?: Record<Difficulty, number>,
      count?: number
    ) => ParsedQuestion[]
  }
): Promise<MockSectionPick[]> {
  const def = MOCK_MODE_DEFS[mode]
  if (!def) throw new Error(`Unknown mock mode: ${mode}`)

  if (def.isStatic) {
    return buildStaticSections(def, context.pickStatic)
  }
  if (mode === "weak") {
    return buildWeakSections(context, def)
  }
  if (mode === "mixed-review") {
    return buildMixedReviewSections(context, def)
  }
  throw new Error(`Unhandled mode: ${mode}`)
}

function buildStaticSections(
  def: MockModeDef,
  pickStatic: (
    section: Section,
    mix?: Record<Difficulty, number>,
    count?: number
  ) => ParsedQuestion[]
): MockSectionPick[] {
  const out: MockSectionPick[] = []
  for (const section of def.staticSections) {
    const count = def.staticQuestionCounts[section]
    if (count <= 0) continue
    const mix = def.staticDifficultyMix?.[section]
    const questions = pickStatic(section, mix, count)
    if (questions.length === 0) continue
    out.push({
      section,
      minutes: def.staticMinutesPerSection[section],
      questions,
    })
  }
  return out
}

/**
 * Weak-area mode — pull questions tied to the student's top weak
 * sub-skills. Targets ~30 questions; falls back to stratified picks if
 * the weak-skill pool is too thin.
 */
async function buildWeakSections(
  context: Parameters<typeof getMockSectionsForMode>[1],
  def: MockModeDef
): Promise<MockSectionPick[]> {
  const TARGET_TOTAL = def.totalQuestionsHint
  const fallback = (): MockSectionPick[] => {
    // Fallback when no user context: 10 each from Q / V / DI.
    return ALL_SECTIONS.map((section) => ({
      section,
      minutes: def.staticMinutesPerSection[section],
      questions: context.pickStatic(section, undefined, Math.floor(TARGET_TOTAL / 3)),
    }))
  }

  if (!context.supabase || !context.userId) return fallback()

  let weakSubskills: Awaited<ReturnType<typeof collectAdaptiveSignals>>["topWeakSubskills"]
  try {
    const signals = await collectAdaptiveSignals(
      context.supabase,
      context.userId,
      context.userMetadata
    )
    weakSubskills = signals.topWeakSubskills
  } catch {
    return fallback()
  }

  if (weakSubskills.length === 0) return fallback()

  // For each weak sub-skill, pull questions that match its topic +
  // subtopic from the bank. Cap per-skill to keep variety.
  const PER_SKILL_CAP = Math.max(3, Math.ceil(TARGET_TOTAL / weakSubskills.length))
  const bySection = new Map<Section, ParsedQuestion[]>()
  for (const w of weakSubskills) {
    const pool = getQuestionsBySection(w.section).filter((q) => {
      // Match by subtopic when meaningful; otherwise topic.
      if (q.options.length === 0) return false
      if (w.subskill !== w.topic) {
        return q.subtopic && q.subtopic.toLowerCase() === w.subskill.toLowerCase()
      }
      return q.topic === w.topic
    })
    if (pool.length === 0) continue
    const taken = pool.slice(0, PER_SKILL_CAP)
    const arr = bySection.get(w.section) ?? []
    bySection.set(w.section, [...arr, ...taken])
  }

  // Top up with stratified picks per section if we're under target.
  const picks: MockSectionPick[] = []
  let totalSoFar = 0
  for (const section of ALL_SECTIONS) {
    const got = bySection.get(section) ?? []
    if (got.length === 0) continue
    picks.push({
      section,
      minutes: def.staticMinutesPerSection[section],
      questions: dedupeById(got).slice(0, PER_SKILL_CAP * 3),
    })
    totalSoFar += picks[picks.length - 1].questions.length
  }

  if (totalSoFar === 0) return fallback()

  // If we're still under the target, distribute the remaining slots
  // proportionally to sections we already have — keeps the mock weak-
  // area-flavored rather than reverting to a generic distribution.
  const remaining = TARGET_TOTAL - totalSoFar
  if (remaining > 0 && picks.length > 0) {
    const perSection = Math.ceil(remaining / picks.length)
    for (const p of picks) {
      const existingIds = new Set(p.questions.map((q) => q.id))
      const fill = context.pickStatic(p.section, undefined, perSection + p.questions.length)
        .filter((q) => !existingIds.has(q.id))
        .slice(0, perSection)
      p.questions = [...p.questions, ...fill]
    }
  }
  return picks
}

/**
 * Mixed-review mode — pull questions from the spaced-review queue's
 * question kind, ordered by priority (overdue + miss-count + flagged
 * + confidence + mistake-type modifiers from the spaced engine).
 * Falls back to a generic 25-question stratified set if the queue
 * is empty.
 */
async function buildMixedReviewSections(
  context: Parameters<typeof getMockSectionsForMode>[1],
  def: MockModeDef
): Promise<MockSectionPick[]> {
  const TARGET_TOTAL = def.totalQuestionsHint
  const fallback = (): MockSectionPick[] => {
    return ALL_SECTIONS.map((section) => ({
      section,
      minutes: def.staticMinutesPerSection[section],
      questions: context.pickStatic(section, undefined, Math.floor(TARGET_TOTAL / 3)),
    }))
  }

  if (!context.supabase || !context.userId) return fallback()

  try {
    const queue = await buildSpacedReviewQueue(
      context.supabase,
      context.userId,
      context.userMetadata,
      { limit: TARGET_TOTAL * 2 }
    )
    const questionItems = queue.byKind.question
    if (questionItems.length === 0) return fallback()
    const ids = questionItems.slice(0, TARGET_TOTAL).map((q) =>
      // Spaced item id is "question:<questionId>"
      q.id.startsWith("question:") ? q.id.slice("question:".length) : q.id
    )
    const questions = getQuestionsByIds(ids).filter((q) => q.options.length > 0)
    if (questions.length === 0) return fallback()

    // Group by section. Each section that has at least one question
    // becomes its own segment in the mock — MockRunner already supports
    // a variable number of sections, so 1, 2, or 3 sections all work.
    const bySection = new Map<Section, ParsedQuestion[]>()
    for (const q of questions) {
      const arr = bySection.get(q.section) ?? []
      arr.push(q)
      bySection.set(q.section, arr)
    }
    const picks: MockSectionPick[] = []
    for (const section of ALL_SECTIONS) {
      const got = bySection.get(section) ?? []
      if (got.length === 0) continue
      picks.push({
        section,
        minutes: def.staticMinutesPerSection[section],
        questions: got,
      })
    }
    return picks.length > 0 ? picks : fallback()
  } catch {
    return fallback()
  }
}

function dedupeById(items: ParsedQuestion[]): ParsedQuestion[] {
  const seen = new Set<string>()
  const out: ParsedQuestion[] = []
  for (const q of items) {
    if (seen.has(q.id)) continue
    seen.add(q.id)
    out.push(q)
  }
  return out
}

/**
 * Type-narrowing helper — returns true when the string is a known mode.
 * Used by the route handler to validate the `?mode=` query param.
 */
export function isValidMockMode(s: string | null | undefined): s is MockMode {
  if (!s) return false
  return MOCK_MODE_LIST.includes(s as MockMode)
}
