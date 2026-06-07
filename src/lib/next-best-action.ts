import type { AdaptiveSignals } from "./adaptive-plan-engine"
import type { Section } from "@/types"

/**
 * Next-best-action engine.
 *
 * Given the same `AdaptiveSignals` the multi-week planner consumes,
 * returns ONE decisive action — the exact thing the student should
 * do *right now* — plus 2-3 alternates ranked by priority.
 *
 * The engine is rule-based (deterministic). Each rule scores the
 * candidate action; the highest-scoring action wins. Rules are
 * declared in priority order so ties break in favor of higher-impact
 * moves (diagnostic > review > concept-install > drill > pacing >
 * mock prep > continue-plan).
 *
 * Why a separate decisive engine when `computeAdaptivePlan` already
 * exists? The multi-week plan tells the student WHAT to do across
 * 4 weeks; the next-best-action tells them THE EXACT NEXT THING
 * with no ambiguity. Different question, different surface.
 */

export type ActionKind =
  | "take-diagnostic"
  | "review-backlog"
  | "read-chapter"
  | "drill-trap"
  | "drill-subskill"
  | "timed-practice"
  | "mock-prep"
  | "take-mock"
  | "continue-plan"
  | "rest"

export interface NextBestAction {
  /** Discriminator; the UI picks the right icon and copy. */
  kind: ActionKind
  /** One-line title — what the student is being asked to do. */
  title: string
  /** Plain-English rationale tying the action to the signals. */
  rationale: string
  /** Where to go to do it. */
  href: string
  /** Rough time budget so the student knows it'll fit a session. */
  estimatedMinutes: number
  /** Composite score that ranked this action. Higher = more urgent. */
  score: number
  /** Evidence labels — short tags shown alongside the rationale. */
  evidence: string[]
}

export interface NextBestActionResult {
  /** The single highest-scoring action. */
  primary: NextBestAction
  /** Up to 3 next-best alternates, in case the primary doesn't fit
   *  the student's current time/energy budget. */
  alternates: NextBestAction[]
  /** All rules that produced a candidate, with their scores — useful
   *  for the "why this action" tooltip and for transparency in the UI. */
  evaluated: NextBestAction[]
}

interface ContextOptions {
  /** Days until the planned exam (null = no exam date set). */
  daysUntilExam?: number | null
  /** GMAT target score (205-805) — used for mock-prep urgency. */
  targetScore?: number | null
  /** Has the student already done a session today? Avoids over-recommending
   *  the same action when they've just finished it. */
  doneTodayKinds?: ActionKind[]
  /** Number of practice sessions logged today. Drives the rest rule:
   *  after a heavy day with the queue clear, stopping is the optimal move. */
  sessionsCompletedToday?: number
}

const DONE_TODAY_PENALTY = 25 // shrink a kind's score if it was just done

/**
 * Top-level entry. Walks every rule, returns the highest-scoring
 * candidate as `primary` and up to 3 next-best as `alternates`.
 */
export function computeNextBestAction(
  signals: AdaptiveSignals,
  options: ContextOptions = {}
): NextBestActionResult {
  const candidates: NextBestAction[] = []
  const doneToday = new Set(options.doneTodayKinds ?? [])

  // ---- Rule 1: Diagnostic not yet taken ----
  if (signals.diagnosticTotalScore === null) {
    candidates.push({
      kind: "take-diagnostic",
      title: "Take the diagnostic",
      rationale:
        "No diagnostic on record yet. Without it, every other recommendation is a guess. 30 questions across all three sections seeds the rest of the plan.",
      href: "/diagnostic",
      estimatedMinutes: 50,
      score: 1000, // overrides everything else
      evidence: ["No diagnostic"],
    })
  }

  // ---- Rule 2: Spaced-review backlog is large ----
  if (signals.pendingReviewTotal >= 15) {
    candidates.push({
      kind: "review-backlog",
      title: `Clear ${signals.pendingReviewTotal} due in spaced review`,
      rationale: `Your spaced queue has ${signals.pendingReviewTotal} items overdue. Retrieval practice on prior misses is the single highest-leverage intervention in learning science — clearing the backlog is more valuable than any new content.`,
      href: "/review/all",
      estimatedMinutes: Math.min(45, Math.max(15, signals.pendingReviewTotal * 1.5)),
      score: 850 + Math.min(50, signals.pendingReviewTotal),
      evidence: [
        `${signals.pendingReviewByKind.question} questions`,
        `${signals.pendingReviewByKind.concept} concepts`,
        `${signals.pendingReviewByKind.drill} drills`,
      ],
    })
  } else if (signals.pendingReviewTotal >= 5) {
    candidates.push({
      kind: "review-backlog",
      title: `Quick review — ${signals.pendingReviewTotal} due`,
      rationale: `Short retrieval pass on items the spacing engine surfaced today.`,
      href: "/review",
      estimatedMinutes: 15,
      score: 500 + signals.pendingReviewTotal * 4,
      evidence: [`${signals.pendingReviewTotal} due`],
    })
  }

  // ---- Rule 3: Top priority fix from mistake log ----
  // The mistake-insights priority fix already encodes recurrence × recency
  // × Hard-weight; we lift it here as a candidate. The kind depends on
  // whether the fix is a sub-skill or a trap pattern.
  const topFix = signals.priorityFixes[0]
  if (topFix) {
    if (topFix.kind === "trap" && topFix.chapterSlug) {
      candidates.push({
        kind: "drill-trap",
        title: topFix.title,
        rationale: topFix.rationale,
        href: topFix.chapterSlug.startsWith("reading-")
          ? `/guides/${topFix.chapterSlug}`
          : `/chapters/${topFix.chapterSlug}`,
        estimatedMinutes: 25,
        score: 700 + topFix.priority,
        evidence: [
          `${topFix.misses}× miss`,
          topFix.section,
          "trap pattern",
        ],
      })
    } else if (topFix.kind === "subskill" && topFix.drillSlug) {
      candidates.push({
        kind: "drill-subskill",
        title: topFix.title,
        rationale: topFix.rationale,
        href: `/practice/session/${topFix.drillSlug}`,
        estimatedMinutes: 25,
        score: 650 + topFix.priority,
        evidence: [`${topFix.misses}× miss`, topFix.section, "weak sub-skill"],
      })
    }
  }

  // ---- Rule 4: Severe pacing pattern ----
  // Rushed → student is panic-guessing. Stuck → student is sinking time.
  // Both are worth a dedicated timed-practice intervention.
  const severePacing = signals.pacingPatterns.find(
    (p) => p.pattern === "rushed" || p.pattern === "stuck"
  )
  if (severePacing) {
    candidates.push({
      kind: "timed-practice",
      title: `${severePacing.section} timed set — fix ${severePacing.pattern} pacing`,
      rationale: severePacing.summary,
      href: "/test-builder",
      estimatedMinutes: 30,
      score: 600,
      evidence: [severePacing.section, severePacing.pattern, "pacing"],
    })
  }

  // ---- Rule 5: Concept-install (weakest sub-skill from synthesis) ----
  // If the top weak sub-skill hasn't been chapter-served yet, route the
  // student to the chapter that fixes it.
  const topWeak = signals.topWeakSubskills[0]
  if (topWeak && topWeak.topicSlug) {
    candidates.push({
      kind: "read-chapter",
      title: `Read the ${topWeak.topic} chapter`,
      rationale: `Your weakest sub-skill is ${topWeak.subskill} (${topWeak.misses} miss${
        topWeak.misses === 1 ? "" : "es"
      } across ${topWeak.sources.join(" + ")}). The chapter teaches the recognition signal you're missing.`,
      href: `/chapters/${topWeak.topicSlug}`,
      estimatedMinutes: 20,
      score: 550 + Math.min(80, topWeak.severity),
      evidence: [topWeak.section, ...topWeak.sources, `${topWeak.misses}× miss`],
    })
  }

  // ---- Rule 6: Mock under-tested or exam imminent ----
  const daysUntilExam = options.daysUntilExam
  if (daysUntilExam !== null && daysUntilExam !== undefined && daysUntilExam <= 7) {
    candidates.push({
      kind: "take-mock",
      title: "Take a full mock — exam is close",
      rationale: `Exam in ${daysUntilExam} day${daysUntilExam === 1 ? "" : "s"}. A full-length mock under exam conditions builds endurance and validates pacing rhythms one last time.`,
      href: "/mock",
      estimatedMinutes: 165,
      score: 800,
      evidence: [`${daysUntilExam}d to exam`],
    })
  } else if (signals.latestMockTotalScore === null && signals.diagnosticTotalScore !== null) {
    candidates.push({
      kind: "take-mock",
      title: "Run your first full-length mock",
      rationale: `Diagnostic done; mock not yet. Mocks measure endurance + section-order rhythm — different signal from the diagnostic.`,
      href: "/mock",
      estimatedMinutes: 165,
      score: 480,
      evidence: ["No mock yet"],
    })
  }

  // ---- Rule 8: Rest — the day's work is done ----
  // The only rule that recommends doing nothing. Memory consolidates in
  // the gaps between study, not by piling on volume: distributed practice
  // reliably beats massing the same hours (Cepeda et al. 2006), and the
  // spacing engine needs the overnight gap to do its job. Ambitious
  // students over-study; naming "stop now" as the optimal move is a
  // serious recommendation, not a soft one.
  //
  // Fires only when the day is genuinely finished: 3+ sessions logged,
  // diagnostic on record, the spaced queue is essentially clear (<5 due),
  // and the exam is not imminent. Gating on a clear queue means we never
  // tell a student to rest while retrieval windows are closing. The score
  // scales gently with volume so a heavier day rests with more conviction;
  // it sits below the time-sensitive actions (overdue backlog, imminent
  // mock) but above evergreen content suggestions — those keep until
  // tomorrow, when the student is sharper.
  const sessionsToday = options.sessionsCompletedToday ?? 0
  const examImminent =
    daysUntilExam !== null && daysUntilExam !== undefined && daysUntilExam <= 7
  if (
    sessionsToday >= 3 &&
    signals.diagnosticTotalScore !== null &&
    signals.pendingReviewTotal < 5 &&
    !examImminent
  ) {
    candidates.push({
      kind: "rest",
      title: "Rest — the work is done for today",
      rationale: `${sessionsToday} sessions logged today and your review queue is clear. Memory consolidates in the gaps between study — distributed practice beats massing the same hours into one sitting. Stopping now lets the spacing work in your favour; come back tomorrow sharper.`,
      href: "/analytics",
      estimatedMinutes: 0,
      score: Math.min(790, 700 + sessionsToday * 10),
      evidence: [`${sessionsToday} sessions today`, "queue clear"],
    })
  }

  // ---- Rule 7: Continue-plan fallback ----
  // Always present so the engine never returns nothing.
  candidates.push({
    kind: "continue-plan",
    title: "Continue your weekly plan",
    rationale:
      "No urgent signals. Open your adaptive plan and pick this week's next activity — chapter, drill, or practice set.",
    href: "/study-plan/adaptive",
    estimatedMinutes: 30,
    score: 100,
    evidence: ["No urgent signal"],
  })

  // ---- Apply done-today penalty ----
  for (const c of candidates) {
    if (doneToday.has(c.kind)) c.score -= DONE_TODAY_PENALTY
  }

  // Sort by score descending. The first is `primary`; the next 3 are alternates.
  candidates.sort((a, b) => b.score - a.score)
  return {
    primary: candidates[0],
    alternates: candidates.slice(1, 4),
    evaluated: candidates,
  }
}

/**
 * Plain-English summary of why the primary action was chosen — for the
 * "Why this?" tooltip / panel beneath the recommendation.
 */
export function explainPrimary(result: NextBestActionResult): string {
  const p = result.primary
  const competing = result.alternates
    .map((a) => `${a.title} (score ${a.score})`)
    .join(", ")
  return `${p.title} scored ${p.score} on the rule engine. Next-closest alternates: ${competing}.`
}

/**
 * Map an action kind → section emphasis when one applies. Used by the
 * UI to color-code the action card by section accent.
 */
export function sectionFor(action: NextBestAction): Section | null {
  for (const ev of action.evidence) {
    if (ev === "Quant" || ev === "Verbal" || ev === "DI") return ev as Section
  }
  return null
}
