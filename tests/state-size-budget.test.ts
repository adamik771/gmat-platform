import { describe, it, expect } from "vitest"
import { recordReviewAttempt } from "@/lib/spaced-review"
import {
  appendToUserMetadata,
  USER_METADATA_FALLBACK_LIMIT,
  USER_METADATA_FALLBACK_MESSAGE_CHARS,
} from "@/lib/beta-feedback"

/**
 * Scale guardrail for the growth class behind the 494 incident: drive the
 * write-cap functions past their cap and prove the persisted state stays
 * bounded. Every finding in the post-incident audit shared "passes with an
 * empty account" — these turn that into a failing test.
 *
 * (A full page-render-against-a-heavy-DB test would need integration infra the
 * repo doesn't have; these exercise the actual size-bounding logic directly.
 * In production these run once per action, not in a loop — the loop counts here
 * only need to exceed the cap, kept just over it to stay fast.)
 */

const bytes = (o: unknown) => Buffer.byteLength(JSON.stringify(o ?? {}), "utf8")
const REVIEW_LOG_CAP = 1000 // MAX_REVIEW_LOG_ENTRIES in spaced-review.ts
const N = REVIEW_LOG_CAP + 50 // just over the cap, so trimming is exercised

function hammer(kind: "question" | "drill" | "checkpoint"): Record<string, unknown> {
  let meta: Record<string, unknown> = {}
  for (let i = 0; i < N; i++) {
    meta = recordReviewAttempt(meta, { id: `${kind}-${i}`, kind }, (i % 5) + 1, i + 1)
  }
  return meta
}

describe("state-size budget (prevents user_state row + cookie bloat)", () => {
  it("review logs stay capped no matter how many reviews a user does", () => {
    const drillMeta = hammer("drill")
    const checkMeta = hammer("checkpoint")
    // confidence_log is written on every kind; drill/checkpoint logs on their own.
    expect(Object.keys(drillMeta.confidence_log as object).length).toBeLessThanOrEqual(REVIEW_LOG_CAP)
    expect(Object.keys(drillMeta.drill_reviews as object).length).toBeLessThanOrEqual(REVIEW_LOG_CAP)
    expect(Object.keys(checkMeta.checkpoint_reviews as object).length).toBeLessThanOrEqual(REVIEW_LOG_CAP)
    // The whole relocatable blob stays small enough for a jsonb row.
    expect(bytes(drillMeta)).toBeLessThan(300 * 1024)
  })

  it("the cap keeps the NEWEST entries (spacing depends on recent activity)", () => {
    const meta = hammer("question")
    const conf = meta.confidence_log as Record<string, unknown>
    expect(conf[`question-${N - 1}`]).toBeDefined() // newest survives
    expect(conf["question-0"]).toBeUndefined() // oldest trimmed
  })

  it("beta_feedback fallback is bounded by count AND message length", () => {
    let meta: Record<string, unknown> = {}
    const huge = "x".repeat(5000)
    for (let i = 0; i < 50; i++) {
      meta = appendToUserMetadata(meta, {
        kind: "general",
        message: `${i} ${huge}`,
      } as Parameters<typeof appendToUserMetadata>[1])
    }
    const fb = meta.beta_feedback as Array<{ message: string }>
    expect(fb.length).toBeLessThanOrEqual(USER_METADATA_FALLBACK_LIMIT)
    for (const e of fb) {
      expect(e.message.length).toBeLessThanOrEqual(USER_METADATA_FALLBACK_MESSAGE_CHARS)
    }
  })
})
