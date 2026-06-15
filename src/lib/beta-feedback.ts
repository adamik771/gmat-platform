/**
 * Beta-feedback storage primitives.
 *
 * V1 stores everything in a single Supabase table (`beta_feedback`).
 * Cross-user analysis is the whole point of beta — keeping the data in
 * `user_metadata` would make aggregation queries impractical. The table
 * is append-only; Adam triages by reading it directly.
 *
 * Until the migration runs, the API routes write to
 * `user_metadata.beta_feedback` as a fallback so feedback isn't lost.
 * The `__schema_migration` constant below is the SQL Adam can paste
 * into Supabase's SQL editor when he's ready to promote feedback to a
 * proper table.
 */

export const __schema_migration = `
-- Promote beta feedback from user_metadata to a dedicated table.
-- Append-only by design; never updated, never deleted in the v1 flow.
create table if not exists public.beta_feedback (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  kind text not null check (kind in ('general', 'question', 'bug', 'rating')),
  /** Free-form 1-1000 char message. Empty string allowed for ratings-only rows. */
  message text not null default '',
  /** Question id when kind = 'question'. */
  question_id text null,
  /** 1-5 stars when kind = 'rating' (or attached to other kinds). */
  rating int null check (rating is null or (rating >= 1 and rating <= 5)),
  /** Categorical tag: "wrong-answer" / "unclear" / "too-easy" / "too-hard" / "broken-rendering" / "other". */
  tag text null,
  /** Path the feedback was submitted from. */
  source_path text null,
  /** Browser / device context for bug reports. */
  user_agent text null,
  created_at timestamptz not null default now(),
  /** Triage status — Adam updates this as he processes the feedback. */
  status text not null default 'open' check (status in ('open', 'reviewed', 'fixed', 'wontfix', 'duplicate'))
);

create index if not exists beta_feedback_user_id_idx on public.beta_feedback(user_id);
create index if not exists beta_feedback_kind_status_idx on public.beta_feedback(kind, status);
create index if not exists beta_feedback_question_id_idx on public.beta_feedback(question_id) where question_id is not null;

-- Row Level Security — students can write their own feedback; only the
-- service role can read aggregates. Adam reads from the SQL editor or
-- from a future admin surface.
alter table public.beta_feedback enable row level security;

create policy "users insert own feedback"
  on public.beta_feedback for insert
  to authenticated
  with check (auth.uid() = user_id);

create policy "users read own feedback"
  on public.beta_feedback for select
  to authenticated
  using (auth.uid() = user_id);
`

export type FeedbackKind = "general" | "question" | "bug" | "rating"

export type FeedbackTag =
  // question-feedback tags
  | "wrong-answer"
  | "unclear-prompt"
  | "ambiguous-options"
  | "too-easy"
  | "too-hard"
  | "explanation-incomplete"
  | "broken-rendering"
  // bug-report tags
  | "ui-bug"
  | "data-loss"
  | "performance"
  | "auth"
  // generic
  | "other"

export interface FeedbackEntry {
  id: string
  userId: string
  kind: FeedbackKind
  message: string
  questionId?: string | null
  rating?: number | null
  tag?: FeedbackTag | null
  sourcePath?: string | null
  userAgent?: string | null
  createdAt: string
  status: "open" | "reviewed" | "fixed" | "wontfix" | "duplicate"
}

/** All tags and the kinds they apply to — used by the UI to render tag pickers. */
export const TAG_DEFS: Array<{ id: FeedbackTag; label: string; kinds: FeedbackKind[] }> = [
  { id: "wrong-answer", label: "Wrong answer key", kinds: ["question"] },
  { id: "unclear-prompt", label: "Unclear prompt", kinds: ["question"] },
  { id: "ambiguous-options", label: "Ambiguous options", kinds: ["question"] },
  { id: "too-easy", label: "Too easy", kinds: ["question"] },
  { id: "too-hard", label: "Too hard", kinds: ["question"] },
  { id: "explanation-incomplete", label: "Explanation incomplete", kinds: ["question"] },
  { id: "broken-rendering", label: "Broken rendering", kinds: ["question", "bug"] },
  { id: "ui-bug", label: "UI bug", kinds: ["bug"] },
  { id: "data-loss", label: "Data loss / sync issue", kinds: ["bug"] },
  { id: "performance", label: "Performance / slowness", kinds: ["bug"] },
  { id: "auth", label: "Auth / login issue", kinds: ["bug"] },
  { id: "other", label: "Other", kinds: ["general", "question", "bug", "rating"] },
]

/** Maximum entries kept in the user_metadata fallback before we trim oldest first. */
export const USER_METADATA_FALLBACK_LIMIT = 30

/**
 * Append a feedback entry to user_metadata.beta_feedback. Used as a
 * fallback when the Supabase table doesn't exist yet (i.e., before the
 * migration runs). Trims to the last `USER_METADATA_FALLBACK_LIMIT`
 * entries to keep user_metadata size bounded.
 */
export function appendToUserMetadata(
  userMetadata: unknown,
  entry: Omit<FeedbackEntry, "userId" | "status">
): Record<string, unknown> {
  const meta = (userMetadata && typeof userMetadata === "object"
    ? { ...(userMetadata as Record<string, unknown>) }
    : {}) as Record<string, unknown>

  const existing = (meta.beta_feedback as Array<unknown> | undefined) ?? []
  const next: Array<unknown> = [...existing, entry]

  // Trim oldest first when over the cap.
  while (next.length > USER_METADATA_FALLBACK_LIMIT) next.shift()
  meta.beta_feedback = next
  return meta
}

/** Validation helper. Returns null if valid; an error string otherwise. */
export function validateFeedbackInput(input: {
  kind?: unknown
  message?: unknown
  questionId?: unknown
  rating?: unknown
  tag?: unknown
}): string | null {
  if (
    input.kind !== "general" &&
    input.kind !== "question" &&
    input.kind !== "bug" &&
    input.kind !== "rating"
  ) {
    return "kind must be one of: general | question | bug | rating"
  }
  if (typeof input.message !== "string") {
    return "message must be a string"
  }
  if (input.message.length > 2000) {
    return "message must be ≤ 2000 chars"
  }
  if (
    input.questionId != null &&
    (typeof input.questionId !== "string" ||
      input.questionId.length < 1 ||
      input.questionId.length > 100)
  ) {
    return "questionId must be a 1-100 char string or null"
  }
  if (input.rating != null) {
    if (
      typeof input.rating !== "number" ||
      !Number.isInteger(input.rating) ||
      input.rating < 1 ||
      input.rating > 5
    ) {
      return "rating must be null or an integer 1-5"
    }
  }
  if (
    input.tag != null &&
    (typeof input.tag !== "string" ||
      !TAG_DEFS.some((d) => d.id === input.tag))
  ) {
    return "tag must be a known feedback tag or null"
  }
  // For ratings-only entries, require a non-null rating.
  if (input.kind === "rating" && input.rating == null) {
    return "rating entries must include a 1-5 rating"
  }
  // For question feedback, require a questionId.
  if (input.kind === "question" && !input.questionId) {
    return "question feedback must include a questionId"
  }
  return null
}
