# Email Automation Readiness & Validation

Readiness + validation report for the automated, opt-in-only email follow-up system for Zakarian GMAT. The system is already built and live in the repo. Every item below was confirmed against the actual source files, table/column names, and config. Statuses are READY (working, no action needed) or NEEDS OWNER ACTION (a manual step is required, all of which are Vercel-dashboard or Supabase-dashboard operations the owner controls).

Independent GMAT prep. Not affiliated with, endorsed by, or sponsored by GMAC, the GMAT, or mba.com. No score is guaranteed.

---

## 1. Component-by-component validation

### Migration applied (email_subscriptions / email_queue / email_events)
Status: READY (code) / NEEDS OWNER ACTION (confirm applied to prod DB)

- File: `supabase/migrations/20260627000000_email_outreach.sql`. Idempotent (`create table if not exists ...`), safe to re-run.
- `public.email_subscriptions` — the consent ledger, one row per email: `id, email (unique), user_id, subscribed (bool, default true), consent_source (NOT NULL — no row without a source), consent_at, unsubscribed_at, unsubscribe_token (unique), created_at`. Index on `email`.
- `public.email_queue` — the outbox: `id, email, user_id, sequence, step, template_key, payload (jsonb), scheduled_for, status (check: pending/sent/failed/skipped/canceled/held), attempts, last_error, sent_at, dedupe_key (unique), created_at`. Indexes on `(status, scheduled_for)` and `email`.
- `public.email_events` — admin-safe log: `id, queue_id, email, type (check: queued/sent/failed/skipped/held/open/click/unsubscribe), meta (jsonb), created_at`. Indexes on `queue_id` and `(type, created_at desc)`.
- All three tables: `enable row level security` with NO policies → service-role only. Ordinary anon/authenticated clients get zero rows. The email list and send log are never exposed.
- OWNER ACTION: confirm this migration has actually been run against the production Supabase project (e.g. via `supabase db push` or the SQL editor). The code assumes the three tables exist; the lead-capture route already logs a console error if a write fails because a migration has not run.

### Queue + cron worker (/api/cron/outreach)
Status: READY

- File: `src/app/api/cron/outreach/route.ts` (Node runtime, `force-dynamic`, never cached).
- Auth: requires `Authorization: Bearer ${CRON_SECRET}`. If `CRON_SECRET` is unset it returns 503 and refuses to run; a wrong/missing bearer returns 401.
- Phase 1 (enqueue, always runs — safe even before a provider is set):
  - Phase 1a enrolls new confirmed signups into sequence A, but ONLY if `marketingOptIn` is true and the account was created within `ENROLL_WINDOW_DAYS = 3` days. Records consent, then `enqueueDrip`.
  - Phase 1b detects inactivity (sequence D) from `practice_sessions`, only for `subscribed = true` users, enqueuing the largest crossed threshold (3 → 7 → 14 days), deduped per inactivity episode.
- Phase 2 (send) runs only when `emailConfigured()` is true (i.e. `RESEND_API_KEY` is set). If not configured it returns `{ ok: true, emailConfigured: false, note: "queue built; not sending (no email provider)" }` and never fakes a send — the queue simply accumulates.
- Send loop: `claimDue` (status=pending, scheduled_for <= now, oldest first, batch of 50), re-checks consent, renders the template, sends with List-Unsubscribe headers, and records outcome to `email_queue` + `email_events`. `MAX_ATTEMPTS = 3` for transient failures; terminal states stop retries.
- Helper libs are all `server-only`: `src/lib/outreach/queue.ts` (enqueue/claim/mark/log), `src/lib/outreach/sequences.ts` (pure sequence defs), `src/lib/outreach/consent.ts` (consent ledger), `src/lib/outreach/templates.ts` (rendering), `src/lib/outreach/consent-flag.ts` (signup metadata flag), `src/lib/outreach/labels.ts` (`consentReasonFor`).

### One-click unsubscribe (RFC 8058 + /unsubscribe page)
Status: READY

- Header on every send (`route.ts` send call): `List-Unsubscribe: <{SITE_URL}/api/email/unsubscribe?token=...>` and `List-Unsubscribe-Post: List-Unsubscribe=One-Click` → RFC 8058 one-click. Gmail/Apple Mail POST directly.
- Endpoint: `src/app/api/email/unsubscribe/route.ts`. Only POST mutates (so a link prefetch/scanner can't unsubscribe anyone); GET 302-redirects to the confirmation page. POST always returns a generic `{ ok: true }` (idempotent; never leaks whether a token was valid). On success it logs an `unsubscribe` event with `{ via: "one-click" }`.
- Visible in-body link: every template footer links to `{SITE_URL}/unsubscribe?token=...` (the confirmation page), separate from the header URL.
- Page: `src/app/(marketing)/unsubscribe/page.tsx`. Confirm button POSTs to the API and shows an unsubscribed/incomplete-link/error state. Copy explicitly notes essential account email (e.g. password reset) still works.
- Mechanics: `unsubscribeByToken` (in `consent.ts`) flips `subscribed = false` + sets `unsubscribed_at`. `recordConsent` NEVER resurrects a prior unsubscribe — an existing row is returned untouched, so re-consent cannot silently re-subscribe an opted-out address.

### EXPLICIT opt-in required (signup checkbox + LeadCapture optIn)
Status: READY

- Signup form: `src/app/(auth)/signup/page.tsx` — `marketingOptIn` state defaults to `false` (unticked), rendered as a real `<input type="checkbox">` (lines ~406-408), sent as `marketingConsent` in the request body.
- Signup API: `src/app/api/signup/route.ts` writes `user_metadata.marketing_consent = buildMarketingConsent(body.marketingConsent === true, now)`. `buildMarketingConsent` (in `consent-flag.ts`) returns `{ optedIn: false }` unless the box was ticked — so an account created without ticking is `optedIn: false`.
- LeadCapture: `src/components/marketing/LeadCapture.tsx` — `optIn` state defaults to `false` (unticked), real checkbox (lines ~245-247), sent as `optIn` in the body. The lead row + asset (e.g. CSV download) are delivered regardless; only the email SEQUENCE is gated.
- Lead-capture API: `src/app/api/lead-capture/route.ts` enrolls into sequence B (founding) or C (error-log) ONLY when `body.optIn === true` AND the source/magnet matches. Without opt-in, no one is enrolled.
- Cron Phase 1a: re-states the rule — `if (!u.marketingOptIn) continue`. Creating an account never enrolls anyone on its own.

### Worker re-checks consent on every send
Status: READY

- In the Phase 2 send loop (`route.ts`), for each claimed row the worker batch-loads `email_subscriptions` and checks `sub.subscribed`. If there is no consent row or `subscribed = false`, it marks the row `canceled` with `last_error` = `no-consent` / `unsubscribed`, logs a `skipped` event, and NEVER sends.
- This is a fresh per-tick read of the ledger, independent of whatever was true at enqueue time. An unsubscribe that lands after a row is queued still stops the send.
- Defense in depth: `recordConsent` is fail-safe (returns the existing row, never reverses an unsubscribe) and `isSubscribed` is fail-closed (returns `false` on any error). The milestone hook also gates on `isSubscribed` before enqueuing at all.

### Every template has the non-affiliation + no-guarantee + unsubscribe footer
Status: READY

- File: `src/lib/outreach/templates.ts`. ALL templates render through one shared `shell()` (HTML) and `textVersion()` (plain text). Both append the same footer to every email:
  - Consent reason line: "You're receiving this because {reason}." with an Unsubscribe link.
  - Compliance line: "Zakarian GMAT is independent GMAT prep. It is not affiliated with, endorsed by, or sponsored by GMAC, the GMAT, or mba.com. No score is guaranteed."
- Because the footer lives in the shared shell, no individual template can ship without it.

### No fake claims
Status: READY

- Reviewed all 19 template builders. None promise a score, range, percentile, timeline, or improvement; none reference an in-app/30-question diagnostic; none claim GMAC/mba.com affiliation.
- The only baseline language used is "official mba.com practice exam" / "your own baseline" (compliant — it describes the real exam the user takes). The founder's 565 → 735 result does not appear in these automated emails at all, which is the safest framing.
- Honest beta framing throughout: "free to use while we're in private beta", founding = "early pricing for when it goes paid later" (no fake scarcity or fake testimonials). Referral copy states the $50 reward as manual ("tracked by hand for now").

### NO emails to non-opted-in users (the consent gate)
Status: READY

There are three independent gates, all of which must pass before a marketing email goes out:
1. Enrollment gate — a row only enters `email_queue` if the user explicitly opted in (signup checkbox, LeadCapture optIn, or an existing subscription for milestones).
2. Send-time gate — the worker re-reads `email_subscriptions` per row and cancels anything not `subscribed = true`.
3. Ledger integrity — `recordConsent` never reverses an unsubscribe; unsubscribe is one-click and persisted.

### Transactional email never gated
Status: READY

- Transactional/auth email (e.g. password reset) goes through `src/lib/auth-emails.ts` and `src/lib/email.ts::sendEmail` directly. It does NOT touch `email_subscriptions`, `isSubscribed`, or any consent check (confirmed: no consent/subscribed references in `auth-emails.ts`).
- The unsubscribe UI copy explicitly tells users that essential account emails still work after they unsubscribe.

---

## 2. Resend / environment requirements

| Env var | Purpose | Status |
| --- | --- | --- |
| `RESEND_API_KEY` | Auth for Resend REST API. `emailConfigured()` returns true only when set; until then Phase 2 never sends. | SET (Vercel prod) |
| `EMAIL_FROM` | From address. Defaults to `Zakarian GMAT <noreply@zakariangmat.com>` if unset. | SET (Vercel prod) |
| Resend domain verification | `zakariangmat.com` must be verified in Resend for delivery (SPF/DKIM). | VERIFIED — sending confirmed live |
| `CRON_SECRET` | Bearer secret the cron route requires; route returns 503 if unset, 401 on mismatch. | SET (Vercel prod) |
| `SUPABASE_SERVICE_ROLE_KEY` | Service-role client used by the worker, consent writes, and event log (RLS-exempt). | SET (Vercel prod) |
| `NEXT_PUBLIC_SITE_URL` | Builds absolute unsubscribe / CTA / pixel URLs. Defaults to `https://www.zakariangmat.com`. | SET |

Implementation notes:
- `src/lib/email.ts` calls Resend's REST endpoint directly (no SDK). When `RESEND_API_KEY` is unset, `sendEmail` is a no-op returning `{ skipped: true }` — it never throws and never fakes a send.
- All five required env vars (`RESEND_API_KEY`, `EMAIL_FROM`, `CRON_SECRET`, `SUPABASE_SERVICE_ROLE_KEY`, `NEXT_PUBLIC_SITE_URL`) are reported SET in Vercel prod and the domain is VERIFIED. No env action is outstanding.

---

## 3. Cron schedule + Hobby-vs-Pro timing constraint

- File: `vercel.json` — `{ "path": "/api/cron/outreach", "schedule": "0 14 * * *" }` → daily at 14:00 UTC. (A second cron, `/api/cron/reminders` at `0 13 * * *`, is the separate study-reminder job, not part of this system.)
- Timing constraint: Vercel Hobby plan REJECTS sub-daily cron schedules — a daily cron is the maximum cadence on Hobby. The current `0 14 * * *` is daily and therefore Hobby-compatible.
- If the owner upgrades to Vercel Pro, the schedule can be tightened (e.g. hourly, `0 * * * *`) so queued steps send closer to their `scheduled_for` time instead of waiting for the next daily tick. Until then, expect up to ~24h of delay between a step becoming due and it sending. This is purely a latency consideration; correctness is unaffected because the worker always claims everything currently due.
- NEEDS OWNER ACTION (optional): decide whether to upgrade to Pro and move to hourly. Not required for go-live.

---

## 4. How to manually trigger / test

The worker is a GET endpoint protected by the `CRON_SECRET` bearer. To trigger it by hand:

```
curl -i https://www.zakariangmat.com/api/cron/outreach \
  -H "Authorization: Bearer $CRON_SECRET"
```

Status: SKIPPED_USER_ACTION — `CRON_SECRET` lives only in Vercel and is not available in this session, so this curl cannot be run here. The owner can run it from a machine where the secret is known (or pull it from the Vercel dashboard). Vercel also exposes a "Run" button for the cron in the project's Cron Jobs tab, which fires it with the correct bearer automatically.

Expected responses:
- No provider configured: `{ ok: true, emailConfigured: false, note: "queue built; not sending (no email provider)", enqueued: {...}, sent: 0 }`.
- Provider configured: `{ ok: true, emailConfigured: true, enqueued: {...}, sent, skipped, failed }`.
- Missing/zero `CRON_SECRET`: HTTP 503. Wrong bearer: HTTP 401.

Safe end-to-end test (recommended before relying on it):
1. Create a throwaway account and TICK the opt-in box on the signup form (or submit a LeadCapture form with the box ticked).
2. Trigger the cron. Confirm Phase 1 enqueued a sequence-A (or B/C) row in `email_queue`, and that a welcome/deliver email arrives.
3. Click the one-click unsubscribe (or the footer link → confirm). Verify `email_subscriptions.subscribed` flips to false and an `unsubscribe` row lands in `email_events`.
4. Trigger the cron again and confirm any still-pending rows for that address are marked `canceled` with `last_error = unsubscribed` (the per-send consent re-check) and that NO further email arrives.
5. Negative test: create an account WITHOUT ticking opt-in; confirm the cron enqueues nothing for it.

Inspect results via the Supabase SQL editor (service-role): `email_queue` (status/last_error), `email_events` (sent/skipped/unsubscribe), `email_subscriptions` (subscribed flag).

---

## 5. Unwired milestone templates (sequence E)

Sequence E is event-driven: each step is enqueued only when its real in-app event fires. One of three is wired; two are not.

| Step | template_key | Status | Hook it needs |
| --- | --- | --- | --- |
| first-practice | `milestone-first-practice` | WIRED | Already fires from `src/app/api/practice-sessions/route.ts` (~line 225) on a non-mock/non-review/non-diagnostic/non-custom session POST, gated on `isSubscribed`. |
| mock-review | `milestone-mock-review` | NOT WIRED | Needs an `enqueueStep({ sequence: "milestone", step: "mock-review", ... })` call at the point a user finishes reviewing a full-length mock — most likely the mock report/review surface (`/mock/report`, or a `mock-review` session POST). Must gate on `isSubscribed(service, user.email)` first, exactly like the first-practice hook, and pass `payload.firstName`. |
| progress | `milestone-progress` | NOT WIRED | Needs a hook where a positive mock-to-mock trend is computed (e.g. when a new mock result is saved and the trend vs. the prior mock is up). Enqueue `step: "progress"` there, gated on `isSubscribed`. Because the dedupe key is `<user>:milestone:progress`, it fires at most once per user unless a `dedupeSuffix` is added to allow repeats per improvement.

Both templates already exist and render with the compliant footer; they simply have no caller. No copy work is needed — only the two enqueue hooks. Until wired, these two emails are never sent (no fake/placeholder sends), which is safe.

NEEDS OWNER ACTION (optional, post-launch): add the two enqueue hooks above if/when the mock-review and progress milestones are desired. Not required for the core signup/founding/error-log/inactive automation to run.

---

## 6. Go-live checklist

Pre-flight (all currently satisfied per the env/code review):
- [x] Migration `20260627000000_email_outreach.sql` present and idempotent. (Owner: confirm it has been applied to prod Supabase.)
- [x] `RESEND_API_KEY` set in Vercel prod.
- [x] `EMAIL_FROM` set (`Zakarian GMAT <noreply@zakariangmat.com>`).
- [x] Resend domain `zakariangmat.com` verified; live sending confirmed.
- [x] `CRON_SECRET` set in Vercel prod.
- [x] `SUPABASE_SERVICE_ROLE_KEY` set in Vercel prod.
- [x] `NEXT_PUBLIC_SITE_URL = https://www.zakariangmat.com` set.
- [x] `vercel.json` cron `/api/cron/outreach` at `0 14 * * *` (daily, Hobby-compatible).
- [x] Signup checkbox + LeadCapture checkbox both unticked-by-default; only ticking enrolls.
- [x] Worker re-checks consent per send; cancels non-subscribed rows.
- [x] One-click unsubscribe (RFC 8058 header) + `/unsubscribe` confirmation page live.
- [x] Every template carries the non-affiliation + no-guarantee + unsubscribe footer.
- [x] No fake claims; transactional email ungated.

Owner actions before declaring fully live:
- [ ] Confirm the migration is applied to the production Supabase project (the only hard gate not verifiable from code alone).
- [ ] Run the safe end-to-end test in Section 4 (opt-in → cron → email → unsubscribe → re-cron) against a throwaway address, then check `email_queue` / `email_events`.
- [ ] Run the negative test: an account created WITHOUT opt-in must enqueue nothing.

Optional, post-launch:
- [ ] Upgrade to Vercel Pro and move the cron to hourly if same-day send latency matters.
- [ ] Wire the two milestone hooks (mock-review, progress) per Section 5.

Bottom line: the automated email follow-up system is code-complete, opt-in-only, consent-gated at enrollment AND at send, fully unsubscribe-compliant (RFC 8058 + confirmation page), and carries the required non-affiliation / no-guarantee footer on every email. All required env vars and the Resend domain are set/verified. The only blocking owner action is confirming the migration is applied in prod and running the test pass; the milestone wiring and Pro/hourly cron are optional enhancements.
