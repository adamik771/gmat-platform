import type { Section } from "@/types"

/**
 * Routing rules for per-chapter practice tests.
 *
 * Question banks are organized by BROAD topic file (e.g. `number-properties.md`),
 * while chapters are GRANULAR sub-topics (quant-08 even/odd, quant-09 divisibility,
 * quant-10 primes/remainders). These rules route each question to a chapter by
 * keyword-matching its free-text `subtopic` tag, so a freshly uploaded question
 * tagged with a recognizable keyword lands in the right chapter automatically —
 * no per-chapter frontmatter editing.
 *
 * Resolution order (applied in content.ts `getPracticeChapterGroups`):
 *   1. an explicit pin in any chapter's `problem_sets` wins (curated seed);
 *   2. `DIRECT_BANK_CHAPTER` for 1:1 banks (DI — the file slug IS the chapter slug);
 *   3. the first `BANK_RULES` rule whose keyword is a substring of the lowercased subtopic;
 *   4. the bank's default rule (`match: []`).
 *
 * This is the only hand-maintained artifact — it changes when a new chapter or
 * bank appears, not when a question is uploaded.
 */

/** Max questions per test, by section. The number of tests per chapter grows with the bank. */
export const TEST_CAPS: Record<Section, number> = { Quant: 18, Verbal: 10, DI: 10 }

/** Banks that are 1:1 with a chapter — file slug equals chapter slug, subtopic ignored (DI). */
export const DIRECT_BANK_CHAPTER: Record<string, string> = {
  "data-sufficiency": "data-sufficiency",
  "table-analysis": "table-analysis",
  "graphics-interpretation": "graphics-interpretation",
  "two-part-analysis": "two-part-analysis",
}

export interface SubtopicRule {
  /** Lowercased substrings tested against the question's subtopic; first rule with any hit wins. */
  match: string[]
  chapter: string
}

/** Per shared bank: ordered keyword rules, each ending with a default rule (`match: []`). */
export const BANK_RULES: Record<string, SubtopicRule[]> = {
  arithmetic: [
    { match: ["gcf", "lcm", "units digit", "estimation", "divisib"], chapter: "quant-07-gcf-lcm-units-digits" },
    { match: ["remainder"], chapter: "quant-10-primes-remainders" },
    { match: ["order of operations", "signed", "number line", "integer operation", "absolute value", "consecutive integer"], chapter: "quant-05-order-and-signed-numbers" },
    { match: ["mixture", "weighted", "dilution", "acid", "drain"], chapter: "quant-20-mixtures-weighted-averages" },
    { match: ["ratio"], chapter: "quant-18-ratios-proportions" },
    { match: ["percent", "profit", "markup", "discount", "interest", "investment", "break-even", "pricing"], chapter: "quant-19-percents" },
    { match: ["rate", "fill"], chapter: "quant-21-rate-time-distance" },
    { match: ["power", "root"], chapter: "quant-11-exponent-rules" },
    { match: [], chapter: "quant-06-fractions-decimals" },
  ],
  "number-properties": [
    { match: ["prime", "remainder", "trailing zero", "units digit", "chinese remainder"], chapter: "quant-10-primes-remainders" },
    { match: ["even", "odd", "parity", "perfect square", "integer propert", "consecutive integer"], chapter: "quant-08-even-odd-integer-properties" },
    { match: ["divisib", "factor", "multiple", "gcd", "lcm", "gcf"], chapter: "quant-09-divisibility-factors" },
    { match: ["inclusion-exclusion"], chapter: "quant-29-sets-venn" },
    { match: [], chapter: "quant-09-divisibility-factors" },
  ],
  "exponents-roots": [
    { match: ["root", "radical"], chapter: "quant-12-roots-radicals" },
    { match: [], chapter: "quant-11-exponent-rules" },
  ],
  algebra: [
    { match: ["quadratic", "vieta", "discriminant", "factoring", "root reconstruction", "polynomial"], chapter: "quant-14-quadratics-factoring" },
    { match: ["inequalit", "absolute value", "absolute-value", "critical point"], chapter: "quant-15-inequalities-absolute-value" },
    { match: ["function", "sequence", "composition", "recurrence", "telescoping"], chapter: "quant-16-functions-sequences" },
    { match: ["word problem", "translation", "relative motion", "age"], chapter: "quant-17-translating-word-problems" },
    { match: [], chapter: "quant-13-linear-equations-systems" },
  ],
  "ratios-percents": [
    { match: ["mixture", "weighted", "payroll"], chapter: "quant-20-mixtures-weighted-averages" },
    { match: ["percent", "profit", "markup", "discount"], chapter: "quant-19-percents" },
    { match: ["ratio", "proportion", "scaling"], chapter: "quant-18-ratios-proportions" },
    { match: ["rate"], chapter: "quant-21-rate-time-distance" },
    { match: [], chapter: "quant-18-ratios-proportions" },
  ],
  "rates-work": [
    { match: ["combined work", "work rate", "work with", "worker", "machine", "job", "joint-and-solo", "team size"], chapter: "quant-22-work-rate" },
    { match: [], chapter: "quant-21-rate-time-distance" },
  ],
  "statistics-probability": [
    { match: ["probability", "expected value", "independent", "dependent", "mutually exclusive", "binomial", "geometric prob", "conditional"], chapter: "quant-27-probability" },
    { match: ["inclusion-exclusion", "union", "neither", "three sets"], chapter: "quant-29-sets-venn" },
    { match: [], chapter: "quant-23-statistics" },
  ],
  combinatorics: [
    { match: ["probability", "expected value", "independent", "dependent", "complement", "binomial", "replacement"], chapter: "quant-27-probability" },
    { match: ["overlapping set"], chapter: "quant-29-sets-venn" },
    { match: ["restriction", "adjacency", "committee", "grid path", "forbidden", "stars and bars", "two-constraint", "inclusion-exclusion", "circular"], chapter: "quant-26-restrictions-advanced-counting" },
    { match: ["counting", "multiplication principle", "enumeration", "fundamental counting"], chapter: "quant-24-counting-basics" },
    { match: [], chapter: "quant-25-permutations-combinations" },
  ],
  "word-problems": [
    { match: ["overlapping set", "venn"], chapter: "quant-29-sets-venn" },
    { match: ["work rate", "work"], chapter: "quant-22-work-rate" },
    { match: ["rate", "distance", "meeting", "multi-leg", "average speed"], chapter: "quant-21-rate-time-distance" },
    { match: ["mixture", "weighted average"], chapter: "quant-20-mixtures-weighted-averages" },
    { match: ["interest", "profit", "loss"], chapter: "quant-19-percents" },
    { match: [], chapter: "quant-28-classic-word-problems" },
  ],
  "critical-reasoning": [
    { match: ["weaken"], chapter: "verbal-05-cr-weaken" },
    { match: ["strengthen"], chapter: "verbal-04-cr-strengthen" },
    { match: ["assumption"], chapter: "verbal-03-cr-assumption" },
    { match: ["inference"], chapter: "verbal-06-cr-inference" },
    { match: ["evaluate"], chapter: "verbal-07-cr-evaluate" },
    { match: ["flaw"], chapter: "verbal-08-cr-flaw" },
    { match: ["paradox", "discrepancy", "resolve"], chapter: "verbal-09-cr-paradox" },
    { match: ["boldface", "bold-face", "bold face"], chapter: "verbal-10-cr-boldface" },
    { match: ["complete"], chapter: "verbal-11-cr-complete" },
    { match: ["trap"], chapter: "verbal-12-cr-answer-traps" },
    { match: [], chapter: "verbal-02-cr-argument-structure" },
  ],
}

/**
 * In-scope content chapters that simply lack a reusable question bank today.
 * Rendered as a muted "tests coming soon" row so the practice list reads as the
 * full syllabus. Method/foundations/timing chapters are NOT here — they are
 * omitted entirely (not practice-test material).
 */
export const COMING_SOON_CHAPTERS: ReadonlySet<string> = new Set([
  "verbal-13-rc-reading-process",
  "verbal-14-rc-main-idea",
  "verbal-15-rc-detail",
  "verbal-16-rc-inference",
  "verbal-17-rc-application",
  "verbal-18-rc-function",
  "verbal-19-rc-attitude",
  "verbal-20-rc-answer-traps",
  "multi-source-reasoning",
])

/**
 * Chapters omitted from the Practice page entirely — method, foundations, and
 * timing chapters that aren't standalone-test material. Pins pointing at these
 * are ignored so their sampler questions route to their real topic chapters.
 */
export const OMITTED_CHAPTERS: ReadonlySet<string> = new Set([
  "quant-01-backsolving",
  "quant-02-plugging-in-numbers",
  "quant-03-estimation",
  "quant-04-answer-choice-tactics",
  "quant-30-timing",
  "verbal-01-foundations",
  "verbal-21-mixed-timing",
  "di-foundations",
  "di-timing-mixed",
])

/**
 * Resolve which chapter a question belongs to from its bank slug + subtopic.
 * Returns `{ chapter: null }` when the bank has no rules (question is not placed).
 * `viaDefault` is true when no keyword matched and the bank default was used —
 * used by the validator to flag banks whose uploads use unrecognized tags.
 * Pins (problem_sets) take precedence and are applied by the caller.
 */
export function resolveChapterAssignment(
  setSlug: string,
  subtopic: string
): { chapter: string | null; viaDefault: boolean } {
  const direct = DIRECT_BANK_CHAPTER[setSlug]
  if (direct) return { chapter: direct, viaDefault: false }
  const rules = BANK_RULES[setSlug]
  if (!rules) return { chapter: null, viaDefault: false }
  const s = subtopic.toLowerCase()
  for (const rule of rules) {
    if (rule.match.length === 0) return { chapter: rule.chapter, viaDefault: true }
    if (rule.match.some((kw) => s.includes(kw))) return { chapter: rule.chapter, viaDefault: false }
  }
  return { chapter: null, viaDefault: false }
}
