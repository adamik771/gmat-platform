Files confirmed. Here is the complete contents of MANUAL_SETUP.md.

# Manual Setup

This is the owner runbook for taking the opt-in email outreach system live for Zakarian GMAT. Follow the steps in order. The system is already built on branch `launch-system-growth-funnel` but is intentionally NOT deployed: it is gated on you setting the email provider and environment variables below.

Important up front:
- This system is opt-in only. Subscription rows are created only from an action the person took (signup, founding reservation, or a form submit). There is no cold outreach, no scraped or purchased contacts, and no LinkedIn automation. Keep it that way.
- Do not print or paste secret values anywhere (chat, commits, logs, screenshots). Set them directly in the Vercel dashboard.
- Until RESEND is configured in Production, the queue will build but nothing will send. That is the intended safe state.

## 1. Run the database migration

Apply the migration that creates the three outreach tables.

- File: `supabase/migrations/20260627000000_email_outreach.sql`
- Tables created:
  - `email_subscriptions` — the consent record.
  - `email_queue` — the outbox.
  - `email_events` — the admin-safe log.
- All three have RLS enabled with NO policies, which means they are service-role only and are never readable by client/browser keys.

How to run it:
- Preferred: `supabase db push` (or your existing migration workflow) against the production project.
- Or: open the Supabase Dashboard for the production project, go to the SQL Editor, paste the full contents of `20260627000000_email_outreach.sql`, and run it.

Confirm the three tables now exist in the `public` schema before continuing.

## 2. Set the environment variables in Vercel Production

In the Vercel project, go to Settings -> Environment Variables, and add the following for the Production environment. Never print or echo the secret values; type/paste them directly into the Vercel UI.

New variables required for outreach:
- `RESEND_API_KEY` — the Resend API key used to send. Until this is set, Phase 2 (send) does nothing.
- `EMAIL_FROM` — a verified sender on the `zakariangmat.com` Resend domain (see step 3), for example a From address on that domain.
- `CRON_SECRET` — the shared secret that authorizes the cron worker. The worker returns 503 if this is unset and 401 if a request presents the wrong value.
- `NEXT_PUBLIC_SITE_URL` — the absolute site URL (for example `https://zakariangmat.com`), used to build absolute links in emails (unsubscribe, tracking, CTAs).

Already required (should already be present; verify they exist in Production):
- `SUPABASE_SERVICE_ROLE_KEY`
- `NEXT_PUBLIC_SUPABASE_URL`

Reminder: do NOT commit any of these values or paste them into chat. Set them only in the Vercel dashboard.

## 3. Verify a sender domain in Resend (SPF/DKIM)

In Resend, add and verify the `zakariangmat.com` domain so mail authenticates and lands in the inbox.

- Add the domain in Resend and add the DNS records Resend gives you (SPF and DKIM, and DMARC if you use it) at your DNS provider.
- Wait for Resend to show the domain as Verified.
- Make sure the `EMAIL_FROM` value from step 2 is an address on this verified domain. Sending from an unverified domain will fail.

## 4. Confirm the Vercel cron and the cadence caveat

The cron worker is already declared in `vercel.json`:
- `{ "path": "/api/cron/outreach", "schedule": "0 * * * *" }` — hourly.

Cadence caveat (important):
- Vercel Hobby runs crons at most once per day, regardless of the schedule string. Sub-daily (hourly) cadence requires Vercel Pro.
- On a daily cadence, anything described as an "immediate" email is enqueued right away but only sends on the next daily cron run. Steps still fire in order; they are just paced by how often the cron actually runs.
- If you want hourly behavior, the project must be on Pro. Otherwise expect once-per-day processing.

No code change is needed here; just confirm which plan the project is on and set expectations accordingly.

## 5. Redeploy

Trigger a redeploy of the Production deployment so it picks up the new environment variables and the cron registration.

- Because `vercel.json` declares the cron, redeploying registers/updates the `/api/cron/outreach` schedule.
- After deploy, confirm the cron job appears in the Vercel project under the Cron Jobs view.

How the worker behaves once live:
- Phase 1 (enqueue) ALWAYS runs, even with no email provider configured: it enrolls new signups (sequence A; accounts created within the last 3 days) and detects inactivity (sequence D; only for already-consented users inactive at the 3/7/14-day thresholds).
- Phase 2 (send) runs ONLY if `RESEND_API_KEY` is set. If it is unset, Phase 2 returns without sending and without faking a send — the queue just accumulates rows in `pending`.
- Consent is re-checked (subscribed = true) immediately before every send, sends carry `List-Unsubscribe` and `List-Unsubscribe-Post` (one-click) headers, each message is attempted up to 3 times, and every outcome is written to `email_events`.

## 6. Optional: backfill older accounts

Auto-enrollment is intentionally narrow: cron Phase 1a only enrolls accounts created within the last 3 days. Older existing users are NOT auto-enrolled and will never be emailed unless you take a deliberate, consent-respecting action.

If — and only if — those older users genuinely opted in (they signed up / submitted a form), you may do a safe manual backfill by inserting consent rows. Insert into `email_subscriptions` only; do not directly stuff the queue. The worker will pick up consented users through its normal logic.

Guidelines for a safe backfill:
- Only include people who took an opt-in action. Do not backfill purchased, scraped, or merely "known" contacts.
- Set an honest `consent_source` (for example `signup`) and a truthful `consent_at`.
- Generate a unique `unsubscribe_token` per row.
- Never resurrect anyone who previously unsubscribed.

Example (run in the Supabase SQL Editor with the service role; adjust the source/criteria to match your real opt-in records):

```sql
insert into email_subscriptions (email, user_id, subscribed, consent_source, consent_at, unsubscribe_token)
select
  u.email,
  u.id,
  true,
  'signup',
  u.created_at,
  gen_random_uuid()::text
from auth.users u
where u.email is not null
  -- restrict to people who actually opted in; tighten this clause to your records
  and not exists (
    select 1 from email_subscriptions s where s.email = u.email
  );
```

Start with a small, known-good batch and verify before widening the criteria.

## 7. Verification: watching the queue and events

Use the Supabase service role (the SQL Editor in the Dashboard runs with elevated access) to inspect the tables. These tables are service-role only, so client keys cannot read them. The queries below are read-only.

Counts by queue status:

```sql
select status, count(*) as n
from email_queue
group by status
order by n desc;
```

Recent failures with their error:

```sql
select id, email, template_key, attempts, last_error, scheduled_for
from email_queue
where status = 'failed'
order by created_at desc
limit 20;
```

Recent events (queued / sent / failed / skipped / held / open / click / unsubscribe):

```sql
select created_at, type, email, queue_id, meta
from email_events
order by created_at desc
limit 50;
```

What healthy looks like:
- With RESEND unset: `email_queue` accumulates `pending` rows and `email_events` shows `queued` entries, but no `sent`.
- With RESEND set and the cron running: you should see `pending` transition to `sent`, and matching `sent` rows appear in `email_events`. Some `open`/`click` events will follow as recipients engage.

## Troubleshooting

- Nothing sends (queue keeps growing, only `pending` / `queued`):
  - `RESEND_API_KEY` is unset or wrong — Phase 2 is intentionally a no-op without it. Set it in Production and redeploy.
  - The cron is not running — check the Cron Jobs view in Vercel and the Hobby-vs-Pro cadence (step 4). On Hobby it runs at most once per day.
  - The worker is rejecting calls — a 503 means `CRON_SECRET` is unset; a 401 means the wrong secret is being presented. Confirm `CRON_SECRET` is set in Production.
- Inserts/enqueues fail (errors writing to the tables, or queue stays empty):
  - The migration has not been run, or was run against the wrong project. Re-run `20260627000000_email_outreach.sql` against the correct Supabase project (step 1) and confirm the three tables exist.
- Sends fail with sender/domain errors:
  - The domain is not verified in Resend, or `EMAIL_FROM` is not an address on the verified `zakariangmat.com` domain (step 3).

## Final reminder

Do NOT deploy to Production until you have confirmed the email provider (Resend, with a verified sender domain) and all required environment variables are set.
