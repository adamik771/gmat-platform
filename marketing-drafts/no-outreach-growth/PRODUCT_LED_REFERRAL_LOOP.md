> **STALE OFFER - review before use (2026-07-19).** Strategy below predates the current offer (free 7-day full-access trial, no card - never "free beta"/"private beta"). Founder-claim wording in this file has been aligned (565 to 735, top 1%, personal result, no "verified" framing), but offer/beta mechanics need a rewrite before launching anything from this file. Current wording source: acquisition-cleanup/OFFER_AUDIT.md and the live /gmat-free-trial page.

# Zakarian GMAT — Product-Led Referral Loop

The in-app loop that turns users into referrers with **zero manual work** from
you. No DMing, no asking people one by one. The product invites for you, at the
moments a person is most likely to share.

Companion files: `00_START_HERE.md`, `ANALYTICS_TRACKING.md`. The public-page
counterpart is `/refer` and the `ReferralShare` tool.

---

## The loop in one picture

```
user signs up
   -> uses the platform, hits a milestone (e.g. finishes a mock)
   -> sees InviteFriend: a copyable message + a referral-tagged link
   -> copies and sends it to a friend (referral_click, channel=in_app)
   -> friend lands via the referral-tagged link (utm_source=referral)
   -> friend signs up (signup; first-touch utm_source=referral -> a referral signup)
   -> friend becomes a user, hits their own milestone
   -> friend sees InviteFriend ... and the loop repeats
```

Each new user is a potential new source of users. None of it requires you to do
anything.

---

## The InviteFriend component

A small in-app block that gives the user a ready-to-send referral message and a
referral-tagged link. It is shown where sharing is natural:

- **On the dashboard** — for new and active users, so the invite is always one
  glance away.
- **On the mock report** — a milestone moment, right after the user sees their
  result and feels progress. This is the highest-intent share point currently
  shipped.

When the user copies the message or copies/sends the link, it fires
`referral_click` with `channel=in_app`. That single event tells you the in-app
loop is working, separately from public-page shares from `/refer`.

The component shows:

- A **copyable referral message** (clean text, no emojis — example below).
- A **referral-tagged link** the user can copy and paste anywhere.

There is nothing to configure and nothing for you to send.

---

## How the source is tracked

This is what makes the loop measurable without a separate "referral signup"
event:

1. The referral link carries `utm_source=referral` plus a `ref` slug
   identifying the referrer.
2. When the friend lands, **first-touch attribution** captures that
   `utm_source/medium/campaign + ref` on the very first page view and stores it.
3. That first-touch attribution then **rides on every subsequent event** from
   that visitor — including the `signup` event when they create an account.
4. So a **referral signup** is simply a `signup` event whose first-touch
   `utm_source = referral`. No extra event to wire up, no double counting.

See `ANALYTICS_TRACKING.md` for the exact funnel and how to read it.

> Note on the shareable link: signup is currently **open** in production (not
> gated), so the link is just the homepage/signup URL with the referral utm. The
> signup page also accepts `?invite=CODE` and pre-fills the invite code, so if
> signup is ever gated, the same link still works in one click.

---

## The copyable message (ready example)

Plain, warm, no hype, no emojis. Safe to ship as the default `InviteFriend`
copy:

```
I have been using Zakarian GMAT to prep, and it is genuinely good — 50+
chapters across Quant, Verbal, and Data Insights, 1,900+ practice questions,
full-length mocks, and analytics that show where I am actually losing points.

It is in private beta right now, which means it is free, full access, no credit
card. The founder scored a GMAT Focus 735 and built the whole thing himself.

If you are studying too, here is my link — sign up free while the beta is open:
{referral_link}
```

`{referral_link}` is the referral-tagged link the component generates. Keep the
tone exactly this plain; it reads as a real recommendation, which is why it
converts.

---

## Recommended next milestones (not yet shipped)

The two placements live now (dashboard, mock report) are the high-value ones.
These are the natural next moments to add an `InviteFriend` prompt, in priority
order:

1. **After onboarding completion** — the user has just set up their account and
   entered their baseline; momentum is high.
2. **After a practice set** — a small, frequent win; good for steady, repeated
   exposure without nagging.
3. **After a review session** — completing the spaced-review queue is a
   discipline moment; users who do this are engaged enough to recommend.

Each new placement fires the same `referral_click` with `channel=in_app`, so
adding them does not change the analytics model — it just adds more shots on
goal. Add them gradually; do not stack so many prompts that they feel pushy.

---

## Why this compounds

Outreach is linear: effort in, leads out, and it stops when you stop. A
product-led loop is different. Every user who shares can produce new users, and
each of those can share again. As long as the platform stays good and the
invite stays in front of people at the right moments, the loop keeps running on
its own — growing the base that feeds it, with no additional work from you.

The job, then, is not to "do referrals." It is to keep the product worth
recommending and let the in-app loop and `/refer` page carry it.
