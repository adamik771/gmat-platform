> **STALE OFFER - review before use (2026-07-19).** Strategy below predates the current offer (free 7-day full-access trial, no card - never "free beta"/"private beta"). Founder-claim wording in this file has been aligned (565 to 735, top 1%, personal result, no "verified" framing), but offer/beta mechanics need a rewrite before launching anything from this file. Current wording source: acquisition-cleanup/OFFER_AUDIT.md and the live /gmat-free-trial page.

# Daily Launch Checklist

A simple, repeatable operating rhythm for a solo founder running a manual, ethical launch. Pair it with `CONTENT_CALENDAR.md` (what to post / who to DM), `OUTREACH_PLAYBOOK.md` (message templates), and `CRM_TEMPLATE.csv` (where to log everything). Not affiliated with GMAC, the GMAT, or mba.com.

## One-time, before you start

- [ ] **Run the migration** `supabase/migrations/20260626000000_lead_captures_founding_referral.sql` in the Supabase SQL editor, or founding-member reservations fail the DB check and are silently dropped.
- [ ] Confirm `hello@zakariangmat.com` receives mail (MX or forwarding), or contact replies bounce.
- [ ] Add `public/score-report.png` (redacted) to turn on the top-1% proof on /about.
- [ ] (For ads later) Create a Meta Pixel + Google tag, set `NEXT_PUBLIC_META_PIXEL_ID` / `NEXT_PUBLIC_GOOGLE_TAG_ID` in Vercel. Until then, organic + DMs only.
- [ ] Set up the founding/referral Stripe promotion codes when you are ready to monetize (see `REFERRAL_AND_DISCOUNT_PLAN.md`). Not needed while the beta is free.
- [ ] Seed `CRM_TEMPLATE.csv` with 30-50 warm names. Delete the example row.
- [ ] Verify the funnel yourself: the founding-member block on the landing page and `/pricing`, the `/refer` page (copy + email a referral message), the marketing feedback button, and a throwaway signup. Make sure each step feels right.

## Every weekday (about 45-60 minutes total)

Morning (15 min)
- [ ] Post the day's LinkedIn content (from the calendar). Your own voice; no emojis.
- [ ] Reply to every comment and DM from yesterday. Helpful first, no pitch unless they ask.
- [ ] Glance at metrics: founding reservations, referrals, signups, new replies. Note anything unusual.

Midday DM block (20-30 min, time-boxed)
- [ ] Send the day's manual DMs to the calendar's target group (5-15 people). One ask each, fully personalized. Never paste the same message twice.
- [ ] Use `OUTREACH_PLAYBOOK.md` templates as starting points only.
- [ ] Log every send in the CRM: name, segment, angle, date, next follow-up.

Evening (10 min)
- [ ] Do the day's follow-up action from the calendar (founding-reservation follow-ups, no-reply bumps).
- [ ] Update CRM statuses and set next-follow-up dates. Anyone interested in founding access: capture it and reply with the manual access steps.

## Each conversion moment (do immediately, do not batch)

- [ ] Someone reserves or asks for founding access -> grant beta access, log them, lock their founding price by hand, set a follow-up.
- [ ] Someone gives positive feedback -> thank them, ask if you can share it (consent), and ask who they would refer.
- [ ] Someone refers a friend -> record the referral source on both rows so you can pay the $50 reward correctly.

## Weekly review (Sunday, 20-30 min)

- [ ] Tally the week: new contacts, DMs sent, replies, founding reservations, founding conversions, referrals.
- [ ] Look at which post topics and which segments produced replies. Do more of what worked.
- [ ] Plan and pre-write next week's posts in one batch.
- [ ] Clean the CRM: advance statuses, remove dead leads, line up next week's follow-ups.

## Metrics to watch (keep it to a handful)

- Funnel events (Vercel Analytics): page views, `pricing_view`, `founding_reserve`, `referral_click`, `feedback_click`, `signup`, `purchase_completed` — each carries the first-touch UTM/ref source.
- Manual numbers from the CRM: DMs sent, reply rate, founding conversations, founding conversions, referrals.
- The one ratio that matters early: warm DM -> reply -> founding reservation / signup. If replies are low, the message is wrong; if signups are low after replies, the offer or the landing page is wrong.

## Hard rules (never break these)

- Manual and personal only. No automated DMs, no scraping, no mass copy-paste.
- No fake urgency, no guaranteed-score claims, no implying official GMAT/GMAC/mba.com affiliation, no generalized "students improve X" claims.
- Help before selling. If a message has no value in it, do not send it.
- One ask per message. Always personalize.
