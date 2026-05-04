import type { ParsedQuestion } from "./content"

/**
 * Similarity matcher for question-review follow-ups.
 *
 * Given a "seed" question and the full pool, return the top-N most
 * similar questions for the "Similar follow-up questions" panel on
 * the deep-review page.
 *
 * Similarity is rule-based and deterministic — no embeddings, no
 * randomness. Each rule contributes a weighted score; we sort the
 * pool by total score and return the top N (excluding the seed
 * itself).
 *
 * Rules + weights:
 *   - same trapType slug   → 100 (strongest signal — exact same engineered failure mode)
 *   - same subtopic        → 60
 *   - same topic           → 25
 *   - same questionType    → 15  (e.g. both DS, both CR)
 *   - same difficulty      → 10
 *   - same section         → 5   (always true within a topic; tie-breaker)
 *
 * A perfect match (same trap + same subtopic) scores 160; a question
 * sharing only the section scores 5. Threshold for inclusion: 30 —
 * lower than that and the questions aren't really "similar."
 */

const MIN_SIMILARITY_SCORE = 30

interface ScoredQuestion {
  question: ParsedQuestion
  score: number
  matchedOn: string[]
}

export interface SimilarQuestion {
  question: ParsedQuestion
  /** Composite similarity score (0-160). Surfaces in the UI as a small chip. */
  score: number
  /** Plain-English labels of what matched (e.g. ["same trap", "same sub-skill"]). */
  matchedOn: string[]
}

export function findSimilarQuestions(
  seed: ParsedQuestion,
  pool: ParsedQuestion[],
  limit: number = 5
): SimilarQuestion[] {
  const scored: ScoredQuestion[] = []
  for (const q of pool) {
    if (q.id === seed.id) continue
    let score = 0
    const matchedOn: string[] = []

    // Same trap is the strongest similarity signal.
    if (seed.trapType && q.trapType && seed.trapType === q.trapType) {
      score += 100
      matchedOn.push("same trap")
    } else if (
      seed.commonTrap &&
      q.commonTrap &&
      seed.commonTrap === q.commonTrap
    ) {
      score += 80
      matchedOn.push("same trap")
    }

    // Same fine-grained sub-skill.
    if (
      seed.subtopic &&
      q.subtopic &&
      seed.subtopic.toLowerCase() === q.subtopic.toLowerCase() &&
      seed.subtopic !== seed.topic
    ) {
      score += 60
      matchedOn.push("same sub-skill")
    }

    // Same topic.
    if (seed.topic && q.topic && seed.topic === q.topic) {
      score += 25
      matchedOn.push("same topic")
    }

    // Same question-type (e.g., both DS, both CR).
    if (seed.type && q.type && seed.type === q.type) {
      score += 15
      matchedOn.push(seed.type)
    }

    // Same difficulty — useful for "drill at the same difficulty as
    // the question that just bit me."
    if (seed.difficulty === q.difficulty) {
      score += 10
      matchedOn.push(seed.difficulty)
    }

    // Same section — final tie-breaker. Always true within a topic so
    // not very informative on its own, but bumps cross-topic matches
    // that share trap.
    if (seed.section === q.section) {
      score += 5
    }

    if (score >= MIN_SIMILARITY_SCORE) {
      scored.push({ question: q, score, matchedOn })
    }
  }

  scored.sort((a, b) => b.score - a.score)
  return scored.slice(0, limit).map((s) => ({
    question: s.question,
    score: s.score,
    matchedOn: dedupeMatchLabels(s.matchedOn),
  }))
}

function dedupeMatchLabels(labels: string[]): string[] {
  const seen = new Set<string>()
  const out: string[] = []
  for (const l of labels) {
    const k = l.toLowerCase()
    if (seen.has(k)) continue
    seen.add(k)
    out.push(l)
  }
  return out
}
