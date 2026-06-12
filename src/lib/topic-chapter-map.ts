/**
 * Maps the topic strings used in question frontmatter to chapter slugs.
 * Shared between the study-plan engine and the diagnostic report so
 * both surfaces route a weak-topic student to the same chapter.
 *
 * Kept as a tiny standalone module because it imports no runtime
 * dependencies — safe to import from server or client code.
 */
export const TOPIC_TO_CHAPTER: Record<string, string> = {
  Arithmetic: "quant-05-order-and-signed-numbers",
  "Number Properties": "quant-08-even-odd-integer-properties",
  Algebra: "quant-13-linear-equations-systems",
  "Exponents and Roots": "quant-11-exponent-rules",
  "Ratios and Percents": "quant-18-ratios-proportions",
  Combinatorics: "quant-24-counting-basics",
  "Rates and Work": "quant-21-rate-time-distance",
  "Statistics & Probability": "quant-23-statistics",
  "Word Problems": "quant-17-translating-word-problems",
  "Critical Reasoning": "verbal-02-cr-argument-structure",
  "Reading Comprehension": "verbal-13-rc-reading-process",
  "Data Sufficiency": "data-sufficiency",
  "Graphics Interpretation": "graphics-interpretation",
  "Table Analysis": "table-analysis",
  "Multi-Source Reasoning": "multi-source-reasoning",
  "Two-Part Analysis": "two-part-analysis",
}

/**
 * Maps the same topic strings to question-bank set slugs — the slugs
 * /practice/session/[slug] actually resolves via getQuestionsBySetSlug
 * (the question file's basename). Use THIS map for any "drill this
 * topic" link. TOPIC_TO_CHAPTER values are curriculum chapter slugs and
 * only coincide with bank slugs for the five DI topics, so linking a
 * chapter slug to /practice/session 404s for every Quant/Verbal topic.
 */
export const TOPIC_TO_SET: Record<string, string> = {
  Arithmetic: "arithmetic",
  "Number Properties": "number-properties",
  Algebra: "algebra",
  "Exponents and Roots": "exponents-roots",
  "Ratios and Percents": "ratios-percents",
  Combinatorics: "combinatorics",
  "Rates and Work": "rates-work",
  "Statistics & Probability": "statistics-probability",
  "Word Problems": "word-problems",
  "Critical Reasoning": "critical-reasoning",
  "Reading Comprehension": "reading-comprehension",
  "Data Sufficiency": "data-sufficiency",
  "Graphics Interpretation": "graphics-interpretation",
  "Table Analysis": "table-analysis",
  "Multi-Source Reasoning": "multi-source-reasoning",
  "Two-Part Analysis": "two-part-analysis",
}
