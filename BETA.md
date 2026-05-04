# Beta testing — feedback intake + triage process

**Status:** v1, shipped 2026-04-27.

This document covers how beta feedback flows from student → engineer (Adam) → revisions to the question bank or product. The intake plumbing is built; the triage process is the human side.

## Storage

Feedback lands in **`public.beta_feedback`** when the table exists, and falls back to **`user_metadata.beta_feedback`** (capped at 30 entries per user) until then. The migration SQL lives in `src/lib/beta-feedback.ts::__schema_migration` — paste it into Supabase's SQL editor when ready.

The table shape:

| column | type | notes |
|---|---|---|
| `id` | uuid | auto-generated |
| `user_id` | uuid | FK to `auth.users` |
| `kind` | text | `general` / `question` / `bug` / `rating` |
| `message` | text | 0-2000 chars |
| `question_id` | text | when kind = question |
| `rating` | int | 1-5 stars (any kind) |
| `tag` | text | categorical — see `TAG_DEFS` in `beta-feedback.ts` |
| `source_path` | text | the page the feedback was sent from |
| `user_agent` | text | browser/device for bug context |
| `created_at` | timestamptz | default now() |
| `status` | text | `open` / `reviewed` / `fixed` / `wontfix` / `duplicate` |

Row-level security: students insert + read their own rows only; aggregation reads via service role (i.e., the SQL editor).

## Where feedback comes from

Two surfaces, both in `src/components/beta/`:

1. **`FeedbackWidget`** — floating bottom-right launcher embedded on the authenticated layout (`src/app/(app)/layout.tsx`). Three-tab modal: General / Bug / Rate. Captures `source_path` automatically so Adam can see which page produced the report.

2. **`QuestionFeedbackBar`** — six one-tap buttons on the deep-review page (`/review/question/[id]`):
   - `wrong-answer` (alert)
   - `unclear-prompt` (help-circle)
   - `ambiguous-options` (scissors)
   - `too-easy` / `too-hard` (thumbs up/down)
   - `explanation-incomplete` (snail)

   Tapping any button opens an optional context textbox, then submits as a `question`-kind feedback row tagged with the chosen category.

Both surfaces POST to `/api/feedback` with the validated body shape from `src/lib/beta-feedback.ts::validateFeedbackInput`.

## Triage process

Cadence: **Adam reviews the queue once a week** (Sunday morning is reasonable — fresh enough for fast turnaround, far enough from the last batch to see weekly patterns).

### Step 1 — read the queue

```sql
-- All open feedback, newest first.
select
  id, kind, tag, rating,
  question_id, source_path,
  message, created_at
from public.beta_feedback
where status = 'open'
order by created_at desc;
```

### Step 2 — bucket by kind

For each row, decide its disposition:

| kind | typical action |
|---|---|
| `general` | Note the suggestion. If actionable, file a P2 in `AUDIT.md` and set status `reviewed`. |
| `question` | Open `/review/question/{question_id}`. Verify the flag against the question content. If real, fix the question file inline (or queue in `AUDIT.md`); set status `fixed` after the rewrite ships. If the flag is off-base (student misread the prompt), set `wontfix` with a one-line note. |
| `bug` | Reproduce locally if possible. File against the codebase or set `wontfix` if it's not actually a bug (e.g., expected behaviour). |
| `rating` | No individual action. Fold into the weekly aggregate (next step). |

### Step 3 — weekly aggregates

```sql
-- Question-level pattern detection: which question got the most flags?
select
  question_id,
  count(*) as flag_count,
  array_agg(distinct tag) as tags,
  min(created_at) as first_flag,
  max(created_at) as latest_flag
from public.beta_feedback
where kind = 'question'
  and created_at >= now() - interval '7 days'
group by question_id
having count(*) >= 2
order by count(*) desc;
```

A question hit by **≥ 3 students with the same tag** in a week is almost certainly a real defect. Promote to a P0 in `AUDIT.md` and fix immediately.

```sql
-- Page-level bug pattern: which surface produced the most bug reports?
select
  source_path,
  count(*) as bug_count,
  array_agg(distinct tag) as bug_tags
from public.beta_feedback
where kind = 'bug'
  and created_at >= now() - interval '7 days'
group by source_path
order by count(*) desc;
```

```sql
-- Rating trend: are average ratings improving / declining week over week?
select
  date_trunc('week', created_at) as week,
  avg(rating) as avg_rating,
  count(*) as n
from public.beta_feedback
where rating is not null
group by 1
order by 1 desc;
```

### Step 4 — close the loop

- For every `fixed` row, briefly thank the student. Even a one-line "fixed in the next deploy — thanks for the flag" goes a long way for beta-tester goodwill. (Optional v2: build an in-app changelog that surfaces fixes attributed to specific feedback.)
- Update `AUDIT.md` whenever the queue surfaces a P0/P1 issue not already on the table.
- Update `HANDOFF.md` weekly with the rolled-up counts (e.g., "Beta queue this week: 12 question flags, 4 bug reports, avg rating 4.3"). Keeps the trend visible across context windows.

## Severity guide for question feedback

| Tag | Severity to start | Notes |
|---|---|---|
| `wrong-answer` | P0 | Verify with the math. If student is right, ship a fix this turn. |
| `ambiguous-options` | P1 | Sometimes the student misread; sometimes there's a real overlap (e.g., 5/16 vs 11/32 in a fractions question). Re-verify the cross-multiplication gaps. |
| `unclear-prompt` | P1 | Re-read the prompt cold. If you have to read it twice, the student has a point. |
| `explanation-incomplete` | P1 | Often legitimate — explanations get cut tight in the bulk-rewrite waves. |
| `too-easy` | P2 | Difficulty drift is normal. Wait for ≥ 3 reports on the same question before recalibrating. |
| `too-hard` | P2 | Same — difficulty perception varies a lot per student. |

## Privacy + RLS

- Students can only read their own feedback. They never see other students' messages.
- Service-role queries (the triage step above) bypass RLS, so Adam needs to be authenticated as the service role in the SQL editor.
- Personal data: messages are free-form. Don't post raw messages publicly; aggregate or anonymise before sharing.

## What's intentionally NOT in v1

- **In-app status feedback to the student** ("we read your flag — here's what changed"). v2 nice-to-have.
- **Triage UI** at `/admin/feedback` for Adam. Currently the SQL editor is the triage UI.
- **Auto-categorisation** — the student picks a tag; we don't try to infer one from the free-form message. Tags are constrained at validation time so the data stays clean.
- **PII redaction** — students could paste an email or name. Low risk because messages are RLS-bounded.
- **Analytics events beyond feedback** — page-view / click tracking belongs in a separate system (Plausible / PostHog). The `beta_feedback` table is for *student-initiated* signals only.

## File map

| File | Role |
|---|---|
| `src/lib/beta-feedback.ts` | Types, tag catalogue, validation, user_metadata fallback, migration SQL |
| `src/app/api/feedback/route.ts` | POST endpoint, table-first / fallback-second persistence |
| `src/components/beta/FeedbackWidget.tsx` | Floating launcher + 3-tab modal |
| `src/components/beta/QuestionFeedbackBar.tsx` | 6-button per-question flag row |
| `src/app/(app)/layout.tsx` | Embeds `FeedbackWidget` globally |
| `src/app/(app)/review/question/[id]/page.tsx` | Embeds `QuestionFeedbackBar` at the bottom |
| `BETA.md` | This document |
