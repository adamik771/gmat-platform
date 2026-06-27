# Compliance Rules

This document defines the hard compliance model for the Zakarian GMAT automated email outreach system. These rules are load-bearing. They are not guidelines. If a situation is not covered here, default to not sending.

Zakarian GMAT is not affiliated with GMAC or mba.com. No email, page, or template may make a guaranteed-score claim or a diagnostic claim.

## 1. Opt-in only

A person receives marketing outreach only if they gave EXPLICIT consent by ticking an unticked-by-default opt-in checkbox. Creating an account, reserving founding access, or submitting a lead form does NOT by itself enrol anyone — the checkbox is the consent. The system never adds a contact on its own initiative. No cold outreach, no scraped or purchased contacts, no LinkedIn automation. Ever.

A subscription row in `email_subscriptions` is created ONLY when the person ticked a marketing opt-in box:

- Signup checkbox — stored as `user_metadata.marketing_consent = { optedIn: true, at, source: 'signup' }`. Cron phase 1a enrols an account only when this reads `optedIn === true`. `consent_source = 'signup'`.
- Lead-capture checkbox (`optIn: true` in the request) on the founding-member form — `consent_source = 'founding-reservation'`.
- Lead-capture checkbox (`optIn: true`) on the error-log-template form — `consent_source = 'lead-capture:error-log-template'`.

The lead record and any requested asset (e.g. the template download) are delivered regardless of the checkbox; only the email SEQUENCE is gated on opt-in. If the box was not ticked, no subscription exists and nothing is sent. Inactivity (sequence D) and milestones (sequence E) are NOT consent sources — they only act on people who already have a `subscribed = true` record from an explicit opt-in. Pre-existing users are never auto-enrolled; they are reached only if they opt in going forward or via an approved manual backfill.

## 2. Consent tracking

Every subscription records who consented, why, and when:

- `consent_source` — where the opt-in box was ticked (see the list above).
- `consent_at` — the timestamp the person ticked the opt-in box.

These fields are written at creation and are the audit trail. A subscription without a valid `consent_source` and `consent_at` is invalid and must not be sent to.

## 3. Unsubscribe

Unsubscribe is one-click, immediate, and irreversible by automation.

- Every marketing email includes a visible unsubscribe link in the body AND `List-Unsubscribe` + `List-Unsubscribe-Post` headers for one-click unsubscribe (RFC 8058).
- The unsubscribe action is `POST /api/email/unsubscribe?token=...`. It is idempotent and always returns a generic ok, whether or not the token resolves to an active subscription.
- `GET` on that route does NOT unsubscribe — it only redirects to the `/unsubscribe` confirmation page. This prevents link prefetchers and scanners from unsubscribing someone by merely fetching the URL. Actual unsubscribe requires the POST from the Confirm button (or a one-click client honoring the List-Unsubscribe-Post header).
- Unsubscribe is keyed on a per-subscription `unsubscribe_token`. It sets `subscribed = false` and records `unsubscribed_at`.

Once unsubscribed, a person stays unsubscribed:

- `recordConsent` NEVER resurrects a prior unsubscribe. A new signup or form submit on an email that previously unsubscribed does not flip `subscribed` back to true automatically.
- The worker re-checks `subscribed = true` immediately before every individual send. If consent was revoked after an email was queued, that email is not sent.

## 4. Prohibited claims (enforced by test)

The following phrases and claim types are forbidden in any template, because they imply guaranteed outcomes, a diagnostic product, or unsupported score predictions:

- "guaranteed score" (or any guaranteed-score claim)
- "free diagnostic"
- "30-question"
- "readiness band"
- "score band"
- "typically lands"
- "most students see" / "most students improve"

Enforcement: `tests/outreach-templates.test.ts` scans every template and FAILS the build if any of these appear. This is a hard gate — a template containing a prohibited phrase cannot ship. Do not work around the test; fix the copy.

No template may claim affiliation with GMAC or mba.com. Every email carries the not-affiliated / no-guarantee footer.

## 5. No cold outreach, no scraping, no automation against third-party platforms

Permanently prohibited, with no exception:

- No cold outreach of any kind. Every recipient must have a consent record from their own action.
- No scraped contacts. No purchased or rented lists. No imported contacts that did not opt in through this system.
- No LinkedIn bots, no LinkedIn DMs, no LinkedIn automation, and no automation against any other third-party platform to source or message contacts.

If a contact's email did not enter the system through one of the three consent sources in section 1, it must not be sent to.

## 6. Transactional vs marketing separation

- Transactional email (for example, password reset) is separate from this system and is NOT gated by marketing consent. A user without a marketing subscription, or one who has unsubscribed, still receives required transactional mail.
- Everything routed through `email_queue` / the outreach sequences (A–E) is marketing and IS gated by marketing consent. Marketing consent state never affects transactional delivery, and transactional delivery never creates or implies marketing consent.

## 7. No email provider configured

The system is safe to run before the email provider is set up:

- Cron phase 1 (enqueue) ALWAYS runs and builds the queue, even with no provider.
- Cron phase 2 (send) runs ONLY if Resend is configured. If `RESEND_API_KEY` is unset, phase 2 returns without sending and WITHOUT faking a send. No row is marked `sent`, no `sent` event is logged.
- The queue simply accumulates. Nothing is delivered, and nothing pretends to have been delivered. When the provider and env vars are set, queued items send on the next worker run (and re-consent is checked at that point).

## 8. Before you send to anyone — checklist

Confirm every item before enabling sends:

1. The recipient has an `email_subscriptions` row with `subscribed = true`.
2. That row has a valid `consent_source` and `consent_at` from an explicit opt-in checkbox (signup, founding reservation, or error-log lead capture).
3. The recipient has not unsubscribed (`unsubscribed_at` is null; `subscribed` is true) — and the worker re-checks this immediately before the send.
4. The email being sent is a real template that passed `tests/outreach-templates.test.ts` (no prohibited claims).
5. The email contains a visible unsubscribe link and is sent with `List-Unsubscribe` + `List-Unsubscribe-Post` headers.
6. The email contains the not-affiliated / no-guarantee footer.
7. The send is marketing, not transactional — transactional mail does not run through this gate.
8. None of the contacts came from cold outreach, scraping, purchase, or platform automation.
9. The outcome of the send will be written to `email_events`.

If any item cannot be confirmed, do not send.
