I have everything I need. I've confirmed every trigger site, the dedupe-key shapes, consent sources, and the exact event-logging call sites. One note: the `queued` event type exists in the schema/enum and the `EmailEventType` union, but I should verify whether anything actually writes a `queued` event. From my reads, no enqueue path writes a `queued` event — the enqueue helpers (`enqueueDrip`/`enqueueStep`) only upsert into `email_queue` and don't call `logEmailEvent`. I'll document `queued` accurately as a reserved/defined-but-unused type. Same for `held` (a defined status/event with no current writer). Let me write EVENT_MAP.md.

# Event Map

This document maps every outreach trigger to its enqueue site, the sequence and steps it schedules, the consent source it records, and the dedupe-key shape it uses. It then documents the `email_events` log: every event type, when each is written, and the open/click tracking routes.

System: Next.js (App Router) + Supabase Postgres + Resend + Vercel Cron. Branch `launch-system-growth-funnel`. Opt-in only; not yet deployed (gated on the owner setting the email provider and env vars). Not affiliated with GMAC/mba.com; no guaranteed-score or diagnostic claims anywhere.

All three tables (`email_subscriptions`, `email_queue`, `email_events`) are RLS-on with no policies, so only the service-role client reads or writes them. Clients never see the email list or the send log.

---

## 1. How a sequence starts (the trigger model)

There are five sequences (A-E). Each is started from exactly one place:

- **Drips (A, B, C)** are time-offset: one trigger enqueues the whole sequence at once via `enqueueDrip`, with each step's `scheduled_for` set to `trigger_time + offsetDays`.
- **Inactive (D)** is threshold-detected: the cron worker enqueues one step at a time via `enqueueStep` when a user crosses an inactivity threshold.
- **Milestone (E)** is event-driven: an app event enqueues a single step via `enqueueStep` when the milestone is reached.

Two preconditions gate every enqueue:

1. A consent row must exist and be `subscribed=true`. `recordConsent` is called first; it never resurrects a prior unsubscribe (an existing row is returned untouched), so an unsubscribed person is never re-enrolled.
2. The unique `dedupe_key` on `email_queue` makes re-triggering a no-op (`ignoreDuplicates: true`), so a daily cron re-scan or a repeated form submit cannot double-schedule.

A second, independent gate runs at send time: the worker re-checks `subscribed=true` immediately before each send and cancels the row if consent is gone.

---

## 2. Trigger -> Where -> Sequence -> Consent source

| Trigger | Where it is enqueued (file) | Enqueue call | Sequence (id) -> steps | Consent source recorded |
|---|---|---|---|---|
| A. New signup | `src/app/api/cron/outreach/route.ts` (Phase 1a) | `enqueueDrip` | `signup` -> welcome@0, start@1, invite@3, founding@5, feedback@10 | `signup` |
| B. Founding reservation | `src/app/api/lead-capture/route.ts` (`source === "founding-member"`) | `enqueueDrip` | `founding` -> confirm@0, includes@2, referral@5, next@10 | `founding-reservation` |
| C. Error-log / template lead | `src/app/api/lead-capture/route.ts` (`leadMagnet === "error-log-template"`) | `enqueueDrip` | `error-log` -> deliver@0, howto@2, beta@5, founding@8 | `lead-capture:error-log-template` |
| D. Inactive user | `src/app/api/cron/outreach/route.ts` (Phase 1b) | `enqueueStep` (per crossed threshold) | `inactive` -> restart@3d, plan@7d, blocked@14d | (consent must already exist; D only runs for already-`subscribed=true` users — it does not call `recordConsent`) |
| E. Milestone (first practice) | `src/app/api/practice-sessions/route.ts` (first qualifying practice set) | `enqueueStep` | `milestone` -> first-practice | `signup` |
| E. Milestone (mock-review) | NOT WIRED — follow-up | `enqueueStep('milestone','mock-review', ...)` from the mock-report surface | `milestone` -> mock-review (template exists; no event hook yet) | (would be `signup`) |
| E. Milestone (progress) | NOT WIRED — follow-up | `enqueueStep('milestone','progress', ...)` from the analytics surface | `milestone` -> progress (template exists; no event hook yet) | (would be `signup`) |

Notes on the table:
- `@N` means N days after the trigger. For A-C these are real schedule offsets. For D the day-number is the inactivity threshold that fires the step (not an offset from a single trigger). E steps are event-time (offset 0).
- Phase 1a only enrolls signups whose account was created within the last 3 days (`ENROLL_WINDOW_DAYS`) and only confirmed accounts (`email_confirmed_at` set), so the daily scan is bounded and pre-existing users are not blasted.
- The `mock-review` and `progress` milestone templates exist but their event hooks are not wired yet; they are documented as a follow-up.

---

## 3. Enqueue sites in detail

### A. New signup — cron Phase 1a
- **File:** `src/app/api/cron/outreach/route.ts`
- **Detection:** lists Supabase auth users (paged), keeps `email_confirmed_at`-confirmed accounts created within the last `ENROLL_WINDOW_DAYS` (3) days.
- **Consent:** `recordConsent(service, { email, userId, source: "signup" })`. Skipped if consent is null or not subscribed.
- **Enqueue:** `enqueueDrip(service, { sequence: "signup", email, userId, startIso: <account-created>, payload: { firstName } })`. `startIso` is the account-creation time, so the drip schedule is anchored to signup, not to the cron run.
- **Sequence/steps:** `signup` -> welcome@0, start@1 (set a baseline via the official mba.com practice exam), invite@3 (`/refer`), founding@5 (`/pricing`), feedback@10 (`/contact`).
- **Dedupe key shape:** `<userId>:signup:<step>` (recipientId is the user id when known). One key per step; re-running the daily scan re-upserts the same keys and is ignored.

### B. Founding reservation — lead-capture route
- **File:** `src/app/api/lead-capture/route.ts`
- **Detection:** `source === "founding-member"` on a successful capture.
- **Consent:** `recordConsent(supabase, { email, source: "founding-reservation" })`.
- **Enqueue:** `enqueueDrip(supabase, { sequence: "founding", email, payload: { downloadUrl } })`. No `userId` (anonymous prospect), so the recipient id is the email.
- **Sequence/steps:** `founding` -> confirm@0, includes@2, referral@5 (`/refer`, $50), next@10.
- **Dedupe key shape:** `<email>:founding:<step>`.

### C. Error-log / template lead — lead-capture route
- **File:** `src/app/api/lead-capture/route.ts`
- **Detection:** `leadMagnet === "error-log-template"` on a successful capture.
- **Consent:** `recordConsent(supabase, { email, source: "lead-capture:error-log-template" })`.
- **Enqueue:** `enqueueDrip(supabase, { sequence: "error-log", email, payload: { downloadUrl } })`. The `downloadUrl` carries the error-log template file into the deliver email.
- **Sequence/steps:** `error-log` -> deliver@0 (the template), howto@2, beta@5 (`/signup`), founding@8 (`/pricing`).
- **Dedupe key shape:** `<email>:error-log:<step>`.
- **Note:** outreach enrolment here is best-effort and never blocks or fails the capture response.

### D. Inactive user — cron Phase 1b
- **File:** `src/app/api/cron/outreach/route.ts`
- **Detection:** loads already-`subscribed=true` users with a `user_id`, finds each user's most recent `practice_sessions.created_at` within the last 15 days, computes `daysInactive`, and selects the **largest** crossed threshold from `INACTIVE_THRESHOLDS` (3 -> 7 -> 14). Does not call `recordConsent` — it only operates on existing consent.
- **Enqueue:** `enqueueStep(service, { sequence: "inactive", step: band.step, email, userId, payload: { firstName }, dedupeSuffix: <last-activity YYYY-MM-DD> })`.
- **Sequence/steps:** `inactive` -> restart@3d (`/review`), plan@7d (`/study-plan`), blocked@14d (`/contact`).
- **Dedupe key shape:** `<userId>:inactive:<step>:<YYYY-MM-DD-of-last-activity>`. The date suffix scopes the key to one inactivity episode, so a later episode (new last-activity date) can legitimately re-send the same step while a single episode never re-sends.

### E. Milestone — practice-sessions route
- **File:** `src/app/api/practice-sessions/route.ts`
- **Detection:** after a practice set is saved, for slugs that are not `mock-`, `diagnostic-`, `review-`, or `custom`. The user id and email come from the verified session, not the request body.
- **Consent:** `recordConsent(service, { email, userId, source: "signup" })`.
- **Enqueue:** `enqueueStep(service, { sequence: "milestone", step: "first-practice", email, userId, payload: { firstName } })`.
- **Sequence/steps:** `milestone` -> first-practice (celebrate + soft referral, `/refer`).
- **Dedupe key shape:** `<userId>:milestone:first-practice` (no dedupe suffix), so it fires exactly once per user.
- **Follow-up (not wired):** `mock-review` and `progress` would be enqueued via `enqueueStep('milestone', 'mock-review' | 'progress', ...)` from the mock-report and analytics surfaces; their templates already exist.

---

## 4. Dedupe-key shapes, summarized

`dedupeKey(recipientId, sequence, step)` = `` `${recipientId}:${sequence}:${step}` ``, where `recipientId` is the user id when known, else the lowercased email. `enqueueStep` may append `:<dedupeSuffix>`.

| Sequence | recipientId | Key shape |
|---|---|---|
| A signup | user id | `<userId>:signup:<step>` |
| B founding | email | `<email>:founding:<step>` |
| C error-log | email | `<email>:error-log:<step>` |
| D inactive | user id | `<userId>:inactive:<step>:<YYYY-MM-DD last activity>` |
| E milestone (first-practice) | user id | `<userId>:milestone:first-practice` |

The unique constraint on `email_queue.dedupe_key` plus `upsert(..., { onConflict: "dedupe_key", ignoreDuplicates: true })` is what makes every trigger idempotent.

---

## 5. The `email_events` log

`email_events` is the admin-safe activity log (service-role only). Columns: `queue_id`, `email`, `type`, `meta` (jsonb), `created_at`. It is the analytics surface: every send/skip/failure plus opens, clicks, and unsubscribes land here. It holds no policies, so it is never readable by ordinary clients.

All writes go through `logEmailEvent(service, { queueId?, email?, type, meta? })` in `src/lib/outreach/queue.ts`. That helper is best-effort and never throws — a logging failure can never break the worker, the pixel, the redirect, or an unsubscribe.

### Event types and when each is written

The schema enum and the `EmailEventType` union define eight types: `queued`, `sent`, `failed`, `skipped`, `held`, `open`, `click`, `unsubscribe`. Where each is written today:

| Type | Written by | When | Typical `meta` |
|---|---|---|---|
| `sent` | cron Phase 2 (`/api/cron/outreach`) | Resend accepted the message; queue row marked `sent` | `{ sequence, step }` |
| `skipped` | cron Phase 2 | Recipient is unsubscribed or has no consent row (row canceled, never sent); or Resend reported the send as skipped | `{ reason: "unsubscribed" \| "no-consent" }` or `{ reason }` |
| `failed` | cron Phase 2 | Unknown template, render failure, or a send error. On a send error, `terminal` is true once attempts reach the max (3) | `{ reason, terminal? }`, `{ reason: "unknown-template", template }`, `{ reason: "render-failed" }` |
| `open` | `/api/email/open` | The tracking pixel is loaded | (none; `queueId` only) |
| `click` | `/api/email/click` | A tracked CTA is followed | `{ url: <same-origin destination> }` |
| `unsubscribe` | `/api/email/unsubscribe` (POST) | A successful one-click unsubscribe | `{ via: "one-click" }` |
| `queued` | reserved | Defined in the enum and the `EmailEventType` union, but no enqueue path writes it today. Enqueue (`enqueueDrip`/`enqueueStep`) only upserts into `email_queue`; it does not log a `queued` event. | — |
| `held` | reserved | Defined as both a queue status and an event type, but nothing currently sets `status='held'` or logs a `held` event. | — |

Notes:
- `sent`/`skipped`/`failed` are always paired with the corresponding `email_queue` status update (`markSent` / `markOutcome`) in the same loop iteration, so the queue row and the event log stay consistent.
- `open`, `click`, and `unsubscribe` are recipient-driven and carry only what the route can derive (queue id, destination, or "one-click").
- The send phase only runs when Resend is configured. If it is not, the queue accumulates and no `sent`/`skipped`/`failed` events are written — there is no faking of a send.

### Funnel reading order

A single email's life shows up in `email_events` as, at most: `sent` (delivery accepted) -> `open` (pixel loaded) -> `click` (CTA followed), with `unsubscribe` possible at any later point. `skipped`/`failed` replace `sent` when the email is canceled or errors.

---

## 6. Open and click tracking routes

Both tracking routes run on the Node runtime, are `force-dynamic`, and log through `logEmailEvent` best-effort so tracking can never block the response.

### Open tracking — `GET /api/email/open?id=<queueId>`
- **File:** `src/app/api/email/open/route.ts`
- Emails embed `<img src="<SITE_URL>/api/email/open?id=<queueId>">` (the worker passes `openPixelUrl` into the template).
- Logs an `open` event with `queueId = id`, then always returns a 1x1 transparent GIF with `Cache-Control: no-store` so each open re-fires.

### Click tracking — `GET /api/email/click?id=<queueId>&u=<dest>`
- **File:** `src/app/api/email/click/route.ts`
- Email CTAs route through `<SITE_URL>/api/email/click?id=<queueId>&u=<path>` (the worker passes `clickBase` into the template).
- Resolves `u` against `SITE_URL`; only redirects when the resolved origin equals our own origin (open-redirect guard) — otherwise falls back to the homepage. Since every emitted CTA is a same-origin path, this loses nothing.
- Logs a `click` event with `meta: { url: dest }`, then issues a `302` redirect to `dest`.

### Unsubscribe (related, for completeness) — `/api/email/unsubscribe?token=...`
- **File:** `src/app/api/email/unsubscribe/route.ts`
- `POST` performs the one-click unsubscribe (RFC 8058): flips `subscribed=false` via `unsubscribeByToken`, logs an `unsubscribe` event (`meta: { via: "one-click" }`), and returns a generic ok (idempotent; never leaks whether a token was valid).
- `GET` only redirects to the `/unsubscribe` confirmation page, so a link prefetch or scanner cannot unsubscribe anyone by accident. The visible in-body link points at that page; its Confirm button POSTs back to this route.
- Sends carry both the in-body unsubscribe link and the `List-Unsubscribe` + `List-Unsubscribe-Post: List-Unsubscribe=One-Click` headers, which point at this route.

---

## 7. Compliance recap (load-bearing)

- Opt-in only. A subscription row is created solely from an action the person took (signup, founding reservation, form submit). No cold outreach, scraped or purchased contacts, or LinkedIn bots/DMs, ever.
- `consent_source` + `consent_at` are recorded on every subscription; the footer reason line is derived from `consent_source` via `consentReasonFor`.
- `recordConsent` never resurrects a prior unsubscribe; the worker re-checks `subscribed=true` immediately before every send and cancels otherwise.
- Every marketing email includes a visible unsubscribe link plus `List-Unsubscribe` and one-click headers, and the not-affiliated / no-guarantee footer.
- Transactional email (password reset) is separate and not gated by marketing consent.
- If Resend is unset, the queue builds but nothing sends (no faking), and no `sent`/`skipped`/`failed` events are written.
