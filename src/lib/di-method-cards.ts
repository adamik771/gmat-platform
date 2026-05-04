/**
 * Per-DI-type method cards — compact workflow reminders the student can
 * keep open during a practice session. The copy comes directly from the
 * product framework (PDF page 10): each DI question type has a
 * distinctive failure mode and a specific first-move that most students
 * skip. These cards train the habit.
 *
 * We don't show them during mocks — the mock is where the student has to
 * have internalised the workflow on their own. Cards surface during
 * practice, review, and diagnostic sessions only.
 */

export interface DIMethodCard {
  title: string
  /** One-line premise of what this question type tests. */
  premise: string
  /** Ordered steps to follow, in test-day order. */
  steps: string[]
  /** Common failure mode to watch for — surfaces as a warning line. */
  trap: string
}

export const DI_METHOD_CARDS: Record<string, DIMethodCard> = {
  "Data Sufficiency": {
    title: "DS — sufficiency, not solution",
    premise:
      "DS asks whether the statements are enough to answer — not what the answer is.",
    steps: [
      "Identify the target (what the question is asking for) before looking at the statements.",
      "Test each statement alone. Don't peek at the other one.",
      "Only combine if neither alone is enough — and stop the moment you know the combined pair is (or isn't) sufficient.",
    ],
    trap: "Solving the whole thing burns time and pulls you toward C when the answer is often A, B, or D.",
  },
  "Multi-Source Reasoning": {
    title: "MSR — build a source map first",
    premise:
      "MSR hides information across 2–3 tabs. Every wrong answer usually lives on a different tab from where you looked.",
    steps: [
      "Read each tab for 10–15 seconds and note what kind of info lives there (dates? numbers? rules? quotes?).",
      "Re-read the question, then navigate directly to the tab most likely to hold the answer.",
      "Cross-check: if the answer involves two data types, both tabs must agree.",
    ],
    trap: "Skimming all tabs from scratch for every question eats the clock. The source map is a one-time investment.",
  },
  "Table Analysis": {
    title: "TA — filter before you judge",
    premise:
      "Table Analysis rewards mechanical filtering. Humans judging unsorted data lose.",
    steps: [
      "Read the prompt, identify the condition each statement tests (e.g. \"regions where revenue > $X\").",
      "Use the sort/filter to isolate rows that match the condition.",
      "Judge each true/false or yes/no independently against the filtered view — don't carry assumptions between statements.",
    ],
    trap: "Eyeballing the table without sorting leads to confident wrong answers on statements that trade on outliers.",
  },
  "Graphics Interpretation": {
    title: "GI — decode axes first",
    premise:
      "Chart questions punish readers who dive into inference before the chart is understood.",
    steps: [
      "Read the title, axis labels, scale, units, and any legend for 5–10 seconds BEFORE looking at any answer choice.",
      "State in your head what 1 unit on each axis represents (e.g. \"x = thousands of dollars, y = percent\").",
      "Now read the question and match the answer to the chart, not to your assumption about what the chart means.",
    ],
    trap: "Misreading axes or units is the #1 GI trap — always restate them before answering.",
  },
  "Two-Part Analysis": {
    title: "TPA — dependent or independent?",
    premise:
      "TPA presents two linked prompts. Whether the two answers depend on each other changes your approach.",
    steps: [
      "Decide first: are the two prompts independent (pick each row separately) or linked (the pair has to satisfy a joint constraint)?",
      "If independent, pick each column's row on its own merit.",
      "If linked, eliminate row-pairs together — rule out impossible combinations before evaluating any single row.",
    ],
    trap: "Treating linked prompts as independent produces \"each column looks right, why is the pair wrong?\" misses.",
  },
}

export function hasMethodCard(questionType: string): boolean {
  return questionType in DI_METHOD_CARDS
}
