/**
 * The per-user keys relocated OUT of Supabase `user_metadata` (which rides in
 * the auth JWT/cookie) and INTO the `user_state` table — see user-state.ts for
 * the why (a 494 REQUEST_HEADER_TOO_LARGE lockout from cookie bloat).
 *
 * Kept in its OWN module (no "server-only" import) so it can be shared by the
 * server accessor, the node backfill script, and the guardrail test alike.
 */

export const USER_STATE_KEYS = [
  "chapter_progress",
  "saved_for_review",
  "confidence_log",
  "mock_flags",
  "mock_review_edits",
  "drill_reviews",
  "checkpoint_reviews",
  "topic_skill_levels",
  "official_exam_scores",
] as const

export type UserStateKey = (typeof USER_STATE_KEYS)[number]

/** Loosely typed by design — call sites cast each value exactly as they did
 *  when reading off user_metadata (e.g. `as ChapterProgressMap`). */
export type UserState = Partial<Record<UserStateKey, unknown>>
