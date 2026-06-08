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
