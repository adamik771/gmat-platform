# Automated Outreach Plan

Opt-in-only automated email outreach for Zakarian GMAT. This document describes the system as built on branch `launch-system-growth-funnel`. The system is implemented but NOT deployed yet — it is gated on the owner setting the email provider and the production environment variables. Until then the queue can build, but nothing sends.

Not affiliated with GMAC or mba.com. No guaranteed-score, diagnostic, or readiness-band claims appear anywhere in the system.

---

## 1. What the system does

The system turns actions a person already took on the site — signing up, reserving a founding-member spot, submitting a lead form, hitting a practice milestone, or going inactive — into well-timed, consent-backed email sequences. It is built around a durable queue and an hourly cron worker, so emails are scheduled deterministically and sent (or retried, skipped, or held) with a full event log.

Core properties:

- **Opt-in only.** A subscription row is created only from an action the person took. No cold outreach, no scraped or purchased contacts, no LinkedIn bots or DMs. Ever.
- **No provider = no fake sends.** If the email provider is not configured, the queue accumulates pending rows and the worker returns without sending and without faking a send.
- **Auditable.** Every queue outcome (queued, sent, failed, skipped, held, open, click, unsubscribe) is written to an admin-safe event log.
- **Re-checked consent.** Consent is verified immediately before every send; a prior unsubscribe is never resurrected.

---

## 2. Queue-based architecture

The pipeline is a straight line from consent to a logged outcome:

```
   person takes an action
            |
            v
   +------------------+        consent row (opt-in)
   |  recordConsent   |------> email_subscriptions
   +------------------+        (consent_source, consent_at,
            |                   unsubscribe_token)
            v
   +------------------+        scheduled rows (one per step)
   |   enqueueDrip /  |------> email_queue
   |   enqueueStep    |        (sequence, step, scheduled_for,
   +------------------+         dedupe_key, status=pending)
            |
            v
   +-------------------------------------------------+
   |        GET /api/cron/outreach  (hourly)         |
   |                                                 |
   |  Phase 1 (enqueue) -- ALWAYS runs:              |
   |    1a enrol new signups   -> sequence A         |
   |    1b detect inactivity   -> sequence D         |
   |                                                 |
   |  Phase 2 (send) -- ONLY if RESEND configured:   |
   |    claimDue -> re-check consent -> send         |
   |    -> markSent / markOutcome (<= 3 attempts)    |
   +-------------------------------------------------+
            |                         |
            v                         v
   +------------------+      +------------------+
   |   Resend (send)  |      |   email_events   |
   +------------------+      | (queued/sent/    |
            |               |  failed/skipped/  |
            v               |  held/open/click/ |
   recipient inbox          |  unsubscribe)     |
   (List-Unsubscribe,       +------------------+
    one-click, pixel,
    tracked links, footer)
```

Phase 1 always runs, even with no email provider, so consent capture and scheduling never depend on send readiness. Phase 2 is the only part gated on the provider.

---

## 3. Trigger map at a glance

| Seq | Name | Trigger | Where it starts | consent_source |
|-----|------|---------|-----------------|----------------|
| A | Signup | New signup | Cron phase 1a (accounts created in last 3 days) | `signup` |
| B | Founding | Founding reservation | Lead-capture API when `source='founding-member'` | `founding-reservation` |
| C | Error-log | Lead-magnet form | Lead-capture API when `leadMagnet='error-log-template'` | `lead-capture:error-log-template` |
| D | Inactive | Inactivity detected | Cron phase 1b (consented users, inactive 3/7/14 days) | (already consented) |
| E | Milestone | Practice milestone | Practice-sessions API enqueues on first practice set | (already consented) |

Sequence D only ever targets users who already consented; inactivity detection never creates a new subscription.

---

## 4. Sequences (step @ day-offset from trigger)

A–C are time-based drips, D is threshold-detected, E is event-driven.

**A — signup** (drip)
- `welcome` @ 0
- `start` @ 1 — set a baseline via the official mba.com practice exam
- `invite` @ 3 — `/refer`
- `founding` @ 5 — `/pricing`
- `feedback` @ 10 — `/contact`

**B — founding** (drip)
- `confirm` @ 0
- `includes` @ 2
- `referral` @ 5 — `/refer`, $50
- `next` @ 10

**C — error-log** (drip)
- `deliver` @ 0 — the template
- `howto` @ 2
- `beta` @ 5 — `/signup`
- `founding` @ 8 — `/pricing`

**D — inactive** (threshold-detected, INACTIVE_THRESHOLDS 3/7/14)
- `restart` @ 3 — `/review`
- `plan` @ 7 — `/study-plan`
- `blocked` @ 14 — `/contact`

**E — milestone** (event-driven)
- `first-practice` — celebrate + soft referral, `/refer` — **wired**
- `mock-review` — `/refer` — template exists, **hook not wired** (follow-up)
- `progress` — `/refer` — template exists, **hook not wired** (follow-up)

---

## 5. Tables

Migration: `supabase/migrations/20260627000000_email_outreach.sql`. All three tables have RLS on with **no policies**, meaning they are service-role only and never readable by clients.

- **`email_subscriptions`** — the consent record. Columns: `email` (unique), `user_id`, `subscribed` (bool), `consent_source`, `consent_at`, `unsubscribed_at`, `unsubscribe_token` (unique), `created_at`.
- **`email_queue`** — the outbox. Columns: `email`, `user_id`, `sequence`, `step`, `template_key`, `payload` (jsonb), `scheduled_for`, `status` in (`pending`, `sent`, `failed`, `skipped`, `canceled`, `held`), `attempts`, `last_error`, `sent_at`, `dedupe_key` (unique), `created_at`.
- **`email_events`** — the admin-safe log. Columns: `queue_id`, `email`, `type` in (`queued`, `sent`, `failed`, `skipped`, `held`, `open`, `click`, `unsubscribe`), `meta` (jsonb), `created_at`.

The `unsubscribe_token` and `dedupe_key` uniqueness constraints are what make unsubscribe links unguessable-per-user and make enqueueing idempotent (the same step can never be queued twice for the same recipient).

---

## 6. Libraries

Located in `src/lib/outreach/`.

- **`sequences.ts`** — `SEQUENCES` A–E, `plannedSteps`, `dedupeKey`, `INACTIVE_THRESHOLDS`. The source of truth for which steps exist, their day-offsets, and inactivity thresholds.
- **`consent.ts`** — `recordConsent`, `isSubscribed`, `getByToken`, `unsubscribeByToken`. `recordConsent` never resurrects a prior unsubscribe.
- **`queue.ts`** — `enqueueDrip`, `enqueueStep`, `claimDue`, `markSent`, `markOutcome`, `logEmailEvent`. The enqueue/claim/outcome surface over `email_queue` and `email_events`.
- **`templates.ts`** — `renderTemplate` returns `{ subject, html, text }`; brand shell; every email carries an unsubscribe link plus the not-affiliated / no-guarantee footer; 19 templates.
- **`labels.ts`** — `consentReasonFor`, the human-readable reason shown for why a person is receiving a given email.

---

## 7. Routes

**`GET /api/cron/outreach`** — the worker, secured by `CRON_SECRET` (`Authorization: Bearer CRON_SECRET`; returns 503 if the secret is unset, 401 if wrong).
- **Phase 1 (enqueue) — always runs**, even with no email provider: enrol new signups (sequence A; accounts created within the last 3 days) and detect inactivity (sequence D; only for already-consented users, inactive 3 / 7 / 14 days).
- **Phase 2 (send) — only if Resend is configured.** If it is not, the phase returns without sending and without faking a send; the queue simply accumulates. Sends add `List-Unsubscribe` + `List-Unsubscribe-Post` (one-click) headers; consent is re-checked immediately before each send; up to 3 attempts; every outcome is written to `email_events`.

**`POST /api/email/unsubscribe?token=...`** — one-click unsubscribe (RFC 8058), idempotent, returns a generic ok. A `GET` on this route just redirects to the `/unsubscribe` page, so a link prefetch can never unsubscribe someone.

**`/unsubscribe`** — confirmation page (token in query; a Confirm button POSTs to the route).

**`GET /api/email/open?id=<queueId>`** — a 1x1 pixel that logs an `open` event.

**`GET /api/email/click?id=<queueId>&u=<dest>`** — logs a `click`, then redirects. Same-origin only; open-redirect guarded.

---

## 8. How "opt-in only / no provider = no fake sends" is guaranteed

These are the load-bearing compliance guarantees and how the architecture enforces each one.

- **A subscription only ever comes from a person's own action.** Rows in `email_subscriptions` are written by `recordConsent` only from signup, founding reservation, or a form submit. There is no path that creates a subscription from a scraped, purchased, or cold contact.
- **`consent_source` + `consent_at` on every subscription.** Every row records why and when consent was given.
- **Unsubscribe is always available and one-click.** Every marketing email includes a visible unsubscribe link and `List-Unsubscribe` + one-click (`List-Unsubscribe-Post`) headers.
- **No resurrection.** `recordConsent` never flips a prior unsubscribe back to subscribed, and the worker re-checks `subscribed = true` immediately before every send.
- **No banned claims.** The unit test `tests/outreach-templates.test.ts` fails the build if any template contains "guaranteed score", "free diagnostic", "30-question", "readiness band", "score band", "typically lands", or "most students see/improve".
- **Transactional is separate.** Password-reset and other transactional email is not gated by marketing consent and is independent of this system.
- **No provider = no fake sends.** If `RESEND` is unset, Phase 1 still enqueues but Phase 2 returns early; the queue builds and nothing is sent, and no row is marked sent.

---

## 9. Wired vs documented follow-up

**Wired now:**
- A (signup) — cron phase 1a.
- B (founding) — lead-capture API on `source='founding-member'`.
- C (error-log) — lead-capture API on `leadMagnet='error-log-template'`.
- D (inactive) — cron phase 1b.
- E `first-practice` — practice-sessions API enqueues on the first practice set (deduped).

**Documented follow-up (templates exist, hooks not wired):**
- E `mock-review` — to be triggered via `enqueueStep('milestone', 'mock-review', ...)` from the mock-report surface.
- E `progress` — to be triggered via `enqueueStep('milestone', 'progress', ...)` from the analytics surface.

Both `mock-review` and `progress` templates already render and pass the compliance test; only their event hooks remain to be wired.

---

## 10. Environment and scheduling

**Environment variables (Vercel Production):**
- `RESEND_API_KEY` — sending (Phase 2 is gated on this).
- `EMAIL_FROM` — a verified sender on the `zakariangmat.com` Resend domain.
- `CRON_SECRET` — cron authorization.
- `NEXT_PUBLIC_SITE_URL` — absolute links in emails.
- Plus the already-required `SUPABASE_SERVICE_ROLE_KEY` and `NEXT_PUBLIC_SUPABASE_URL`.

Secret values are never printed anywhere.

**Vercel Cron:** `vercel.json` has `{ path: "/api/cron/outreach", schedule: "0 * * * *" }` (hourly).

Note: Vercel Hobby runs crons at most daily; sub-daily cadence needs Pro. On a daily cadence, "immediate" emails (day-offset 0 steps) send on the next daily run rather than within the hour.

---

## 11. Deployment gate

The system is built and tested but not deployed. To go live, the owner must set the email provider and the production environment variables above. Until `RESEND_API_KEY` and `EMAIL_FROM` are set, Phase 1 will enqueue and the queue will build, but Phase 2 will send nothing — by design.
