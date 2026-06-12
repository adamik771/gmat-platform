/**
 * GMAT terminology glossary.
 *
 * Each entry is a single term with a one-paragraph definition and an
 * optional cross-link to a deeper post / tool / sample chapter on the
 * site. Used by the public /glossary page.
 *
 * Adding a term: append to ENTRIES, sorted alphabetically by term.
 * The page renders alphabetically grouped by first letter.
 */

export interface GlossaryEntry {
  term: string
  /** Aliases / alternate spellings for search rendering. Optional. */
  aliases?: string[]
  /** One-paragraph definition. Plain text — no markdown. */
  definition: string
  /** Internal cross-link path + label, when relevant. */
  link?: { href: string; label: string }
}

export const ENTRIES: GlossaryEntry[] = [
  {
    term: "AD/BCE process",
    definition:
      "The standard Data Sufficiency decision tree. Evaluate Statement (1) alone; if sufficient, the answer is A or D. If not, the answer is B, C, or E. Then evaluate Statement (2) alone, then both together if needed. Used to standardise sufficiency analysis without computing values.",
    link: {
      href: "/blog/gmat-data-sufficiency-strategy-guide",
      label: "Data Sufficiency strategy guide",
    },
  },
  {
    term: "Adaptive testing",
    definition:
      "The GMAT adjusts question difficulty based on your previous answers within a section. A correct answer typically leads to a harder follow-up; a wrong answer to an easier one. Your score depends on the difficulty of questions you handle correctly, not just raw count.",
  },
  {
    term: "Argument",
    definition:
      "On Critical Reasoning, the short passage you're asked to evaluate. Always has three parts: a conclusion (the main claim), evidence (facts presented to support it), and a gap (the unstated assumption that makes the leap from evidence to conclusion work).",
    link: {
      href: "/blog/gmat-critical-reasoning-question-types-explained",
      label: "Critical Reasoning question types",
    },
  },
  {
    term: "Assumption question",
    definition:
      "A Critical Reasoning question type that asks you to find the unstated premise the argument depends on. The right answer is something the argument requires to be true — not something that would merely strengthen it. The negation test (does negating this answer break the argument?) is the standard verification.",
  },
  {
    term: "Bookmark",
    definition:
      "On the GMAT Focus Edition, the in-section feature that lets you flag up to three questions per section to revisit at the end. New on Focus — the legacy GMAT was strictly forward-only.",
  },
  {
    term: "C trap",
    definition:
      "On Data Sufficiency, the most common error pattern. The student combines both statements, gets a single answer, and picks C — but each statement alone was actually sufficient, making D the correct answer. Defended against by evaluating each statement in isolation before considering them together.",
  },
  {
    term: "Critical Reasoning (CR)",
    definition:
      "One of the two question types in the GMAT Focus Verbal section. Tests logical reasoning via short arguments (2-4 sentences) followed by a question stem. Eight question types: Assumption, Strengthen, Weaken, Inference, Resolve the Paradox, Find the Flaw, Evaluate, Bold-face.",
    link: {
      href: "/blog/gmat-critical-reasoning-question-types-explained",
      label: "CR question types explained",
    },
  },
  {
    term: "Data Insights (DI)",
    definition:
      "The third section of the GMAT Focus Edition (45 minutes, 20 questions). Replaced the legacy Integrated Reasoning section. Includes Data Sufficiency (moved from Quant), Multi-Source Reasoning, Table Analysis, Graphics Interpretation, and Two-Part Analysis. Counts equally with Quant and Verbal toward the Total Score.",
    link: {
      href: "/blog/gmat-data-insights-complete-guide",
      label: "Data Insights complete guide",
    },
  },
  {
    term: "Data Sufficiency (DS)",
    definition:
      "A question type that gives you a question stem, two numbered statements, and the same five answer choices every time. The task is to determine whether the statements together (or separately) are sufficient to answer the question — not to actually compute the answer. On the Focus Edition, DS lives in the Data Insights section, not Quant.",
    link: {
      href: "/blog/gmat-data-sufficiency-strategy-guide",
      label: "Data Sufficiency strategy guide",
    },
  },
  {
    term: "Diagnostic",
    definition:
      "A short stratified test taken at the start of prep to identify your starting per-section score and per-topic weakness profile. The Zakarian platform uses 30 questions (10 per section, stratified by difficulty); the public sampler uses 10. The diagnostic is the input to a real study plan — without one, every plan is guesswork.",
    link: { href: "/free-diagnostic", label: "Take the free diagnostic" },
  },
  {
    term: "Error log",
    definition:
      "A structured spreadsheet (or platform feature) where every missed practice question is logged with metadata: section, topic, difficulty, mistake tag, root cause, and intended fix. The single highest-leverage habit in GMAT prep — patterns that are invisible at the question level become obvious at the aggregate level.",
    link: {
      href: "/blog/why-your-gmat-score-is-stuck",
      label: "Why your GMAT score is stuck",
    },
  },
  {
    term: "Focus Edition",
    definition:
      "The current version of the GMAT, launched in late 2023 and the only version offered as of early 2024. 2 hours 15 minutes total, three sections (Quant, Verbal, Data Insights), scoring scale 205-805. Replaced the legacy GMAT, which was 3 hours 7 minutes and used a 200-800 scale.",
    link: {
      href: "/blog/gmat-focus-vs-old-gmat-whats-changed",
      label: "Focus vs old GMAT explainer",
    },
  },
  {
    term: "Focus score scale",
    definition:
      "The Focus Edition Total Score runs from 205 to 805 in 10-point increments. All Focus scores end in 5 (205, 215, ..., 805). Per-section scores run 60-90 in 1-point increments. Deliberately offset from the legacy 200-800 scale so the two are not directly comparable.",
    link: { href: "/score-converter", label: "Score converter tool" },
  },
  {
    term: "Graphics Interpretation (GI)",
    definition:
      "A Data Insights question type. Shows a chart (scatter, bar, line, or other) with two fill-in-the-blank statements underneath, each with a dropdown of values. Both blanks must be correct for the question to be scored as right.",
  },
  {
    term: "Inference question",
    definition:
      "A Critical Reasoning or Reading Comprehension question that asks what must be true based on the passage. Mathematical standard: if there's any case where the passage is true and the answer is false, the answer is wrong. 'Probably true' is not the standard.",
  },
  {
    term: "Integrated Reasoning (IR)",
    definition:
      "The legacy GMAT section that Focus replaced with Data Insights. IR had four question types and didn't count toward the Total Score. Many old prep materials still reference IR — the format question types (MSR, TA, GI, TPA) are still relevant on Focus DI; the section's role has changed completely.",
  },
  {
    term: "Mock exam",
    definition:
      "A full-length practice GMAT under timed conditions. Three sections of 45 minutes each, taken in your chosen order. Used to measure section-level pacing + cumulative stamina. Standard prep cycle includes 4-8 mocks across 12-16 weeks.",
  },
  {
    term: "Multi-Source Reasoning (MSR)",
    definition:
      "A Data Insights question type. Presents two or three tabbed sources (an email, a memo, a spreadsheet, etc.) followed by 2-3 questions about the information. The questions are independently scored. Strategy: skim the tabs in 30 seconds, then look up information per question.",
  },
  {
    term: "Negation test",
    definition:
      "The mechanical technique for verifying Critical Reasoning Assumption questions. Take each candidate answer, negate it (turn it into its logical opposite), and check whether the negated version destroys the argument. If yes, that's the assumption; if no, it isn't.",
  },
  {
    term: "Old GMAT",
    definition:
      "Colloquial name for the legacy GMAT (the version that ran from 1997 to early 2024 in its final scoring form). Replaced by the Focus Edition. Old GMAT scores (200-800) are not directly comparable to Focus scores (205-805); see the score converter for the GMAC concordance.",
    link: { href: "/score-converter", label: "Score converter" },
  },
  {
    term: "Per-question time budget",
    definition:
      "The recommended maximum time per question, used to enforce pacing in practice. Standard budgets: ~2:00 for Quant, ~1:55 for Verbal, ~2:15 for DI (with MSR sets pooled at ~5-6 minutes total). Crossing the soft cap is the signal to flag-and-move rather than over-invest.",
  },
  {
    term: "Percentile",
    definition:
      "Your standing relative to other test-takers in the GMAT population. A 90th-percentile score means you scored higher than 90% of recent test-takers. Percentiles drift slightly year to year as the population changes; check your actual score report for the official number.",
  },
  {
    term: "Problem Solving (PS)",
    definition:
      "The other half of the legacy Quant section (alongside Data Sufficiency). On Focus, Problem Solving IS the entire Quant section — DS moved to Data Insights. Standard multi-choice math problems with five answer options.",
  },
  {
    term: "Quant",
    definition:
      "The first section of the GMAT Focus (45 minutes, 21 questions). Tests algebra, arithmetic, number properties, statistics, and word problems. Scoring scale 60-90 per section. On Focus, Quant is Problem Solving only — Data Sufficiency lives in DI, and geometry is no longer tested.",
  },
  {
    term: "Reading Comprehension (RC)",
    definition:
      "One of the two GMAT Focus Verbal question types. A 200-350-word passage followed by 3-4 questions. Strategy: a 90-second structural skim (paragraph structure, author position, structural pivot) beats line-by-line reading. Seven question types: main idea, detail, inference, author's attitude, function, strengthen/weaken, application.",
    link: {
      href: "/blog/gmat-reading-comprehension-passage-strategy",
      label: "RC passage strategy",
    },
  },
  {
    term: "Sample chapter",
    definition:
      "On Zakarian GMAT, a publicly accessible reading from the production curriculum, free and without signup. Three samples cover the three Focus sections: Critical Reasoning (Verbal), Algebra (Quant), and Data Sufficiency (DI).",
    link: { href: "/sample-chapter", label: "Read a sample chapter" },
  },
  {
    term: "Section order",
    definition:
      "On the GMAT Focus Edition, you choose the order in which to take the three sections (Quant, Verbal, DI). The choice affects pacing strategy and energy allocation. Most students benefit from doing their most demanding section first.",
  },
  {
    term: "Sentence Correction (SC)",
    definition:
      "A legacy GMAT Verbal question type that has been REMOVED from the Focus Edition. Tested grammar and idiom knowledge. If your prep materials cover SC, the time spent on it is now sunk cost — Focus Verbal is RC and CR only.",
  },
  {
    term: "Six-tag taxonomy",
    definition:
      "The Zakarian GMAT error-log classification scheme: Conceptual, Careless, Time pressure, Misread, Strategy, Other. Each missed practice question is tagged with one of the six. The dominant tags after 2-3 weeks of logging tell you what to drill, not what topics to study.",
    link: {
      href: "/blog/why-your-gmat-score-is-stuck",
      label: "Error log explainer",
    },
  },
  {
    term: "Stratified diagnostic",
    definition:
      "A diagnostic that selects questions in a planned distribution across difficulty tiers (typically 3 Beginner, 4 Intermediate, 3 Advanced per section). Produces a more reliable signal than a uniform-difficulty sampler because it captures whether you're failing on Hard questions (expected) or also on Mediums (a real content gap).",
  },
  {
    term: "Strengthen / Weaken",
    definition:
      "Mirror-image Critical Reasoning question types. Strengthen asks you to find new information that makes the conclusion more likely true; Weaken asks for information that makes it less likely. Both operate on the same gap between evidence and conclusion.",
  },
  {
    term: "Structural skim",
    definition:
      "The Reading Comprehension technique of mapping a passage's structure (first sentence of every paragraph, author's position, structural pivot, skip list) in 90 seconds rather than reading every word. Then look up specific facts when questions ask for them. The single highest-leverage RC habit.",
  },
  {
    term: "Table Analysis (TA)",
    definition:
      "A Data Insights question type. Shows a sortable table with three statements to judge as true/false (or 'would help'/'would not help'). All three judgements must be correct for the question to be scored right. Use the on-screen sort feature once per statement.",
  },
  {
    term: "Total Score",
    definition:
      "Your overall GMAT score, scaled 205-805 on the Focus Edition. Composed of all three section scores (Quant, Verbal, DI). The number admissions committees see; the per-section scores are useful for studying but not what schools rank you by.",
  },
  {
    term: "Two-Part Analysis (TPA)",
    definition:
      "A Data Insights question type. Presents a written prompt and asks you to choose two values from the same column list, one for each of two related slots. Both slots must be correct for the question to be scored right. Strategy: solve the more constrained slot first.",
  },
  {
    term: "Verbal",
    definition:
      "The second section of the GMAT Focus (45 minutes, 23 questions). Two question types: Reading Comprehension and Critical Reasoning. Scoring scale 60-90 per section. On the Focus Edition, Sentence Correction was removed — it's no longer part of Verbal.",
  },
]

export type GlossaryGroup = { letter: string; entries: GlossaryEntry[] }

/**
 * Group entries alphabetically by first letter of the term. Entries
 * within a group preserve insertion order (which is alphabetical
 * within each group already).
 */
export function groupAlphabetically(): GlossaryGroup[] {
  const groups = new Map<string, GlossaryEntry[]>()
  const sorted = [...ENTRIES].sort((a, b) =>
    a.term.toLowerCase().localeCompare(b.term.toLowerCase()),
  )
  for (const entry of sorted) {
    const letter = entry.term[0].toUpperCase()
    if (!groups.has(letter)) groups.set(letter, [])
    groups.get(letter)!.push(entry)
  }
  return Array.from(groups.entries()).map(([letter, entries]) => ({
    letter,
    entries,
  }))
}
