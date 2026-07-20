> **STALE OFFER - review before use (2026-07-19).** Strategy below predates the current offer (free 7-day full-access trial, no card - never "free beta"/"private beta"). Founder-claim wording in this file has been aligned (565 to 735, top 1%, personal result, no "verified" framing), but offer/beta mechanics need a rewrite before launching anything from this file. Current wording source: acquisition-cleanup/OFFER_AUDIT.md and the live /gmat-free-trial page.

# Email Sequences

Five lifecycle email copies for Zakarian GMAT, written for the no-outreach growth system. These are triggered lifecycle and transactional emails that a user opted into by signing up for the free private beta. They are not cold bulk email. Each one ends with a compliant footer (sender identity plus a one-line unsubscribe), carries no guaranteed-score or diagnostic claims, and is emoji-free.

The honest hook these emails reinforce: a free personalized GMAT study plan plus full platform access during the private beta, plus free sample chapters, a free study-schedule generator, and a free error-log template. The baseline is an official mba.com practice exam the user takes themselves and enters in the app. There is no scored diagnostic or placement test, so none is implied anywhere below.

For profile and intro copy that pairs with these, see `PROFILE_ASSETS.md`. For the referral mechanics and discount details, see `../REFERRAL_AND_DISCOUNT_PLAN.md`. For the wider plan, see `../GROWTH_PLAN.md`.

Merge fields are shown in brackets, for example [first_name], [dashboard_url], [refer_url], [unsubscribe_url].

---

## 1. Welcome email

**Trigger / when it sends:** immediately after a user completes signup (the `signup` event).

**Subject:** You are in. Here is the fastest way to start.

**Body:**

> Hi [first_name],
>
> Welcome to Zakarian GMAT. You have full access during the private beta, free, with no credit card.
>
> Two steps will set you up well:
>
> 1. Set your baseline. Take an official mba.com practice exam on your own, then enter your section scores in the app. That gives the platform something real to plan around.
> 2. Generate your study plan. Once your baseline is in, the app builds an adaptive study plan around your timeline and your weak areas. You can adjust it any time.
>
> From there, the error log and spaced review queue do the quiet work in the background, the same setup I used going from 565 to 735.
>
> Start here: [dashboard_url]
>
> If anything is unclear, just reply to this email. It comes to me.
>
> Adam
>
> ---
> Adam Zakarian, Zakarian GMAT. You are receiving this because you signed up for the free private beta. Unsubscribe any time: [unsubscribe_url]
> GMAT is a registered trademark of GMAC, which does not endorse and is not affiliated with this product.

---

## 2. Beta feedback request

**Trigger / when it sends:** after some real usage, for example 5 to 7 days after signup with at least one completed study session.

**Subject:** One honest reaction?

**Body:**

> Hi [first_name],
>
> You have been using Zakarian GMAT for about a week now, so I wanted to ask one quick thing.
>
> This is a private beta, and I read every reply myself. What is one honest reaction so far? It can be one sentence. What felt useful, what felt confusing, what you wish existed. There is no wrong answer, and a blunt one helps most.
>
> Just hit reply. That is it.
>
> Thank you for being an early user. It genuinely shapes what I build next.
>
> Adam
>
> ---
> Adam Zakarian, Zakarian GMAT. You are receiving this because you signed up for the free private beta. Unsubscribe any time: [unsubscribe_url]
> GMAT is a registered trademark of GMAC, which does not endorse and is not affiliated with this product.

---

## 3. Referral ask

**Trigger / when it sends:** after a milestone moment, for example completing a first full-length mock or finishing a set number of chapters.

**Subject:** Know someone else studying for the GMAT?

**Body:**

> Hi [first_name],
>
> Nice work hitting [milestone_name]. That is a real step.
>
> Quick ask. If a friend, classmate, or colleague is also preparing for the GMAT, you can invite them in a couple of clicks from the refer page. They get full access during the free private beta, and they lock in the founding discount, which is 30 to 40 percent off the standard price when paid plans launch.
>
> There is also a thank-you for you: when a friend you referred becomes a paying founding member, you get 50 USD.
>
> Invite a friend here: [refer_url]
>
> No pressure either way. Only send it to people you think would actually find it useful.
>
> Adam
>
> ---
> Adam Zakarian, Zakarian GMAT. You are receiving this because you signed up for the free private beta. Unsubscribe any time: [unsubscribe_url]
> GMAT is a registered trademark of GMAC, which does not endorse and is not affiliated with this product.

---

## 4. Founding discount reminder

**Trigger / when it sends:** a gentle reminder roughly 10 to 14 days after signup for active users who have not yet reserved the founding rate. No fake urgency, no countdown.

**Subject:** Your founding rate, when you want it

**Body:**

> Hi [first_name],
>
> Quick, low-pressure note. The platform is free during the private beta, and it will stay that way for you while the beta runs. Nothing changes today.
>
> When paid plans do launch, founding members keep a locked-in discount, 30 to 40 percent off the standard price. If you would like to hold that rate, you can reserve it now from your account. Reserving costs nothing and does not start a plan. It just keeps the founding price available to you for later.
>
> Reserve your founding rate: [founding_url]
>
> If you would rather wait, that is completely fine too. The beta keeps running and you lose nothing.
>
> Adam
>
> ---
> Adam Zakarian, Zakarian GMAT. You are receiving this because you signed up for the free private beta. Unsubscribe any time: [unsubscribe_url]
> GMAT is a registered trademark of GMAC, which does not endorse and is not affiliated with this product.

---

## 5. Inactive-user reactivation

**Trigger / when it sends:** after N days of no activity, for example 14 to 21 days idle. One nudge only, helpful rather than guilt-driven.

**Subject:** A small next step, whenever you are ready

**Body:**

> Hi [first_name],
>
> It has been a little while since you were in Zakarian GMAT, and that is completely normal. Studying comes in waves.
>
> If you want an easy way back in, pick one of these. None takes long:
>
> - Add or update your baseline from an official mba.com practice exam, so your plan reflects where you are now.
> - Clear five items from your spaced review queue. Small and satisfying.
> - Read one sample chapter in a topic you have been avoiding.
>
> Your account and your progress are exactly where you left them: [dashboard_url]
>
> No rush. Whenever you are ready.
>
> Adam
>
> ---
> Adam Zakarian, Zakarian GMAT. You are receiving this because you signed up for the free private beta. Unsubscribe any time: [unsubscribe_url]
> GMAT is a registered trademark of GMAC, which does not endorse and is not affiliated with this product.

---

## How to send with minimal manual work

These are lifecycle and transactional emails, so they should run themselves once wired up, with almost no day-to-day effort from Adam.

- **Source of truth:** the existing Supabase user data already tells you who signed up, who is active, who hit a milestone, and who has gone idle. That is enough to trigger every email above.
- **Delivery:** connect a transactional email provider such as Resend or Postmark. Trigger sends from signup events, usage timestamps, and a simple idle-days check (a scheduled job or a database function). The welcome and feedback emails map cleanly to events you already track (`signup`, plus usage). The referral, founding, and reactivation emails are time or milestone based.
- **Opt-in and compliance only:** every recipient opted in by joining the free private beta. Identify the sender (Adam Zakarian, Zakarian GMAT) and include a working one-click unsubscribe in every send, which the footers above already do. This keeps it CAN-SPAM and GDPR compliant. Never use these for cold bulk email to people who did not opt in.
- **Light manual fallback:** if you have not wired up automation yet, these can be sent as a small manual batch from the provider dashboard to opted-in beta users, segmented by the same signals (new, active, milestone, idle). Still opt-in, still with unsubscribe, never cold.

The goal is a system that runs without you. Set the triggers once, keep the footers compliant, and these emails do their work passively. See `PROFILE_ASSETS.md` for the matching profile copy and `../GROWTH_PLAN.md` for how this fits the wider no-outreach loop.

---

GMAT is a registered trademark of GMAC, which does not endorse and is not affiliated with this product.
