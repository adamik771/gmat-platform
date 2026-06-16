import type { Section } from "@/types"

/**
 * Free-diagnostic share encoding.
 *
 * ORPHANED (2026-06): the public `/free-diagnostic` result page was removed.
 * The only remaining importer is `/api/og/diagnostic-result` (an OG-card route
 * that nothing links to). Kept rather than deleted this pass — safe to remove
 * the pair together once confirmed unused. See the baseline note in AGENTS.md.
 *
 * The result of the public mini-diagnostic encodes as three short URL
 * parameters — one per section — where each parameter is a binary string
 * with one character per question. "1" = correct, "0" = wrong.
 *
 *   /free-diagnostic/result?q=101&v=0111&d=110
 *
 * That URL is short enough to share in plain text (Slack, iMessage,
 * Reddit), reads at a glance, and lets us render a public result page +
 * a dynamic OG card without any database round-trip.
 */

export const SAMPLE_COUNTS = {
  Quant: 3,
  Verbal: 4,
  DI: 3,
} as const

export const SAMPLE_TOTAL =
  SAMPLE_COUNTS.Quant + SAMPLE_COUNTS.Verbal + SAMPLE_COUNTS.DI

export interface DiagnosticResult {
  quant: boolean[]
  verbal: boolean[]
  di: boolean[]
}

const SECTION_PARAM: Record<Section, "q" | "v" | "d"> = {
  Quant: "q",
  Verbal: "v",
  DI: "d",
}

const VALID_BINARY = /^[01]+$/

function boolsToBinary(arr: boolean[]): string {
  return arr.map((b) => (b ? "1" : "0")).join("")
}

function binaryToBools(s: string): boolean[] {
  return s.split("").map((c) => c === "1")
}

export function encodeDiagnosticResult(
  result: DiagnosticResult,
): Record<string, string> {
  return {
    q: boolsToBinary(result.quant),
    v: boolsToBinary(result.verbal),
    d: boolsToBinary(result.di),
  }
}

export function buildDiagnosticShareUrl(
  origin: string,
  result: DiagnosticResult,
): string {
  const p = new URLSearchParams(encodeDiagnosticResult(result))
  return `${origin.replace(/\/$/, "")}/free-diagnostic/result?${p.toString()}`
}

/**
 * Decode + validate URL params back into a result. Returns null on any
 * shape mismatch — callers should treat null as "render the empty
 * sampler-promo state, not a confused half-result."
 */
export function decodeDiagnosticResult(
  params:
    | Record<string, string | string[] | undefined>
    | URLSearchParams,
): DiagnosticResult | null {
  const get = (k: string): string | null => {
    if (params instanceof URLSearchParams) return params.get(k)
    const v = params[k]
    if (typeof v === "string") return v
    if (Array.isArray(v)) return v[0] ?? null
    return null
  }
  const q = get("q")
  const v = get("v")
  const d = get("d")
  if (!q || !v || !d) return null
  if (q.length !== SAMPLE_COUNTS.Quant) return null
  if (v.length !== SAMPLE_COUNTS.Verbal) return null
  if (d.length !== SAMPLE_COUNTS.DI) return null
  if (!VALID_BINARY.test(q)) return null
  if (!VALID_BINARY.test(v)) return null
  if (!VALID_BINARY.test(d)) return null
  return {
    quant: binaryToBools(q),
    verbal: binaryToBools(v),
    di: binaryToBools(d),
  }
}

/**
 * Per-section signal banding.
 *
 *   N == sample count   → Strong
 *   N - 1               → Mixed
 *   <= N - 2            → Needs work
 *
 * "Strong" / "Mixed" / "Needs work" rather than fake percentages
 * because the sample is too small for any real percentage to mean
 * anything. The full diagnostic is what produces a real score.
 */
export type SectionBand = "Strong" | "Mixed" | "Needs work"

export function bandFor(correct: number, total: number): SectionBand {
  if (correct === total) return "Strong"
  if (correct === total - 1) return "Mixed"
  return "Needs work"
}

export interface DiagnosticSummary {
  totalCorrect: number
  totalQuestions: number
  perSection: {
    section: Section
    correct: number
    total: number
    band: SectionBand
  }[]
  weakestSection: Section | null
}

export function summarizeDiagnostic(
  result: DiagnosticResult,
): DiagnosticSummary {
  const sections: Section[] = ["Quant", "Verbal", "DI"]
  const counts: Record<Section, boolean[]> = {
    Quant: result.quant,
    Verbal: result.verbal,
    DI: result.di,
  }
  const perSection = sections.map((section) => {
    const arr = counts[section]
    const correct = arr.filter(Boolean).length
    const total = arr.length
    return { section, correct, total, band: bandFor(correct, total) }
  })

  // Lowest accuracy ratio breaks ties by section order (Quant < Verbal < DI).
  // We deliberately pick a single weakest rather than declaring two —
  // an honest "this is the one to fix first" beats a hedge.
  let weakestSection: Section | null = null
  let lowest = Infinity
  for (const row of perSection) {
    const ratio = row.correct / row.total
    if (ratio < lowest) {
      lowest = ratio
      weakestSection = row.section
    }
  }
  // If everything is perfect, "weakest" has no meaning — return null.
  if (lowest === 1) weakestSection = null

  const totalCorrect = perSection.reduce((acc, r) => acc + r.correct, 0)
  const totalQuestions = perSection.reduce((acc, r) => acc + r.total, 0)
  return { totalCorrect, totalQuestions, perSection, weakestSection }
}

/**
 * Reference param key for the section, used when the share URL needs to
 * point one piece of code at a specific section's column.
 */
export function paramForSection(section: Section): "q" | "v" | "d" {
  return SECTION_PARAM[section]
}
