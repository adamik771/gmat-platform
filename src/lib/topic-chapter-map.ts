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
