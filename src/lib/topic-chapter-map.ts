/**
 * Maps the topic strings used in question frontmatter to chapter slugs.
 * Shared between the study-plan engine and the diagnostic report so
 * both surfaces route a weak-topic student to the same chapter.
 *
 * Kept as a tiny standalone module because it imports no runtime
 * dependencies — safe to import from server or client code.
 */
export const TOPIC_TO_CHAPTER: Record<string, string> = {
  Arithmetic: "arithmetic",
  "Number Properties": "number-properties",
  Algebra: "algebra",
  "Exponents and Roots": "exponents-roots",
  "Ratios and Percents": "ratios-percents",
  Combinatorics: "combinatorics",
  "Rates and Work": "rates-work",
  "Statistics & Probability": "statistics-probability",
  Geometry: "geometry",
  "Word Problems": "word-problems",
  "Critical Reasoning": "critical-reasoning",
  "Reading Comprehension": "reading-comprehension",
  "Data Sufficiency": "data-sufficiency",
  "Graphics Interpretation": "graphics-interpretation",
  "Table Analysis": "table-analysis",
  "Multi-Source Reasoning": "multi-source-reasoning",
  "Two-Part Analysis": "two-part-analysis",
}

/**
 * Maps a Critical Reasoning question's `type` (from question frontmatter,
 * e.g. "Strengthen", "Assumption") to the focused spoke chapter that teaches
 * it. The shared "Critical Reasoning" topic still routes to the foundations
 * hub via TOPIC_TO_CHAPTER above; this finer map lets weak-area surfaces send
 * a student to the exact question-type chapter once they consume `question_type`.
 *
 * Keys cover the spoke chapters; types without a dedicated spoke (Boldface,
 * Complete, and generic "Critical Reasoning") fall back to the hub.
 */
export const CR_TYPE_TO_CHAPTER: Record<string, string> = {
  Strengthen: "critical-reasoning-strengthen-weaken",
  Weaken: "critical-reasoning-strengthen-weaken",
  Assumption: "critical-reasoning-assumption",
  Inference: "critical-reasoning-inference",
  Evaluate: "critical-reasoning-evaluate",
  Flaw: "critical-reasoning-flaw-paradox",
  "Flaw/Paradox": "critical-reasoning-flaw-paradox",
  Paradox: "critical-reasoning-flaw-paradox",
}

/**
 * Maps a Reading Comprehension question's `type` (from question frontmatter,
 * e.g. "Main Idea", "Specific Detail") to the focused spoke chapter that
 * teaches it. The shared "Reading Comprehension" topic still routes to the
 * foundations hub via TOPIC_TO_CHAPTER above; this finer map lets weak-area
 * surfaces send a student to the exact question-type chapter once they
 * consume `question_type`. Function and Author's Attitude share a chapter.
 */
export const RC_TYPE_TO_CHAPTER: Record<string, string> = {
  "Main Idea": "reading-comprehension-main-idea",
  "Specific Detail": "reading-comprehension-specific-detail",
  Inference: "reading-comprehension-inference",
  Application: "reading-comprehension-application",
  Function: "reading-comprehension-function-attitude",
  "Author's Attitude": "reading-comprehension-function-attitude",
}

/** Topics that have a sub-type → spoke map (i.e. were split hub-and-spoke). */
const SUBTYPE_MAPS: Record<string, Record<string, string>> = {
  "Critical Reasoning": CR_TYPE_TO_CHAPTER,
  "Reading Comprehension": RC_TYPE_TO_CHAPTER,
}

/** Concentration threshold: a weakness must be at least this fraction of one
 *  sub-type before we route the student to that single spoke chapter rather
 *  than the broader foundations hub. Below it, the hub is the safer entry. */
const SUBTYPE_CONCENTRATION = 0.6

/**
 * Resolve the best chapter slug for a weakness.
 *
 * Falls back to the topic-level hub (TOPIC_TO_CHAPTER) — which is the prior
 * behaviour — unless `authoredTypes` (the raw `type:` values of the questions
 * driving the weakness, from `ParsedQuestion.authoredType`) are concentrated
 * in a single sub-type that has its own spoke chapter. In that case it returns
 * the spoke, so a student whose misses cluster on, say, Assumption is sent to
 * the Assumption chapter instead of the general Critical Reasoning hub.
 *
 * Used only for chapter *reading* links. Never use it for drill / practice
 * slugs: those route through /practice/session/{slug} keyed on the question-
 * file slug, which the spoke slugs are not — keep those on the hub/topic slug.
 */
export function resolveChapterSlug(
  topic: string,
  authoredTypes?: string[]
): string | undefined {
  const hub = TOPIC_TO_CHAPTER[topic]
  const subtypeMap = SUBTYPE_MAPS[topic]
  if (!subtypeMap || !authoredTypes || authoredTypes.length === 0) return hub

  const counts = new Map<string, number>()
  let mapped = 0
  for (const t of authoredTypes) {
    const slug = subtypeMap[t]
    if (!slug) continue
    counts.set(slug, (counts.get(slug) ?? 0) + 1)
    mapped += 1
  }
  if (mapped === 0) return hub

  let best: string | undefined
  let bestN = 0
  for (const [slug, n] of counts) {
    if (n > bestN) {
      best = slug
      bestN = n
    }
  }
  return best && bestN / mapped >= SUBTYPE_CONCENTRATION ? best : hub
}
