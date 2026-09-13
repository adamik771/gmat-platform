# Zakarian GMAT — No-Outreach Growth: Start Here

This folder describes a growth system that runs with almost no manual work from
you and **no outreach**. There is no DMing, no LinkedIn automation, no cold
email, no hiring. Interest is meant to arrive on its own and convert on its own.

Your only ongoing job is **optional**: post if you feel like it, and read the
analytics now and then. Everything else is built into the website and the
product.

These docs complement (they do not duplicate) the existing files in
`marketing-drafts/`: `GROWTH_PLAN.md`, `LAUNCH_ASSETS.md`,
`CONTENT_CALENDAR.md`, `REFERRAL_AND_DISCOUNT_PLAN.md`, and the
`delegated-growth/` folder.

---

## How it runs without you

Five mechanisms do the work, none of which need daily attention:

1. **The website converts.** A clear private-beta call to action ("Start Free —
   free while we are in beta, no credit card"), a founding-discount reservation
   block, and email capture turn visitors into signups and leads on their own.
2. **The product refers.** A product-led loop (see
   `PRODUCT_LED_REFERRAL_LOOP.md`) gives every user a copyable, referral-tagged
   message and link from inside the app — on the dashboard and at milestone
   moments — so users bring users without you asking.
3. **SEO compounds over time.** The free tools and content already live
   (study-schedule generator, score converter, score-by-school, glossary,
   exam-day checklist, sample chapters, 20+ blog posts, the `/resources` hub)
   keep pulling in search traffic that grows month over month.
4. **Lifecycle emails re-engage.** Opt-in, compliant transactional and
   lifecycle emails (sender identified, one-click unsubscribe) bring people back
   without any manual sending.
5. **Optional posts add reach.** If and when you post, it adds to the top of the
   funnel — but the system does not depend on it.

---

## Passive conversion checklist

The seven things a passive site needs so that a visitor can convert, reserve,
and refer without you in the loop.

| # | Item | Status | Note |
|---|------|--------|------|
| 1 | Clear private-beta CTA | Exists | "Start Free — free while we are in beta, no credit card" on the homepage; fires `signup_initiated` when the form begins. |
| 2 | Founding discount reservation | Exists | `FoundingOffer` block on the homepage and `/pricing`; reserves a locked-in 30-40% founding rate; fires `founding_reserve`. |
| 3 | Referral page | Exists | `/refer` with the `ReferralShare` tool — copy or email a personal referral-tagged message/link; fires `referral_click`. |
| 4 | Shareable beta invite link | Added now | Signup page accepts `?invite=CODE` and pre-fills it; signup is currently open in production, so the link is just the homepage/signup URL, optionally with a referral utm. |
| 5 | Testimonials / early-feedback section | Recommended | Placeholder only — not shown yet, because there are no real, attributable student results to cite. Do not fabricate. Add when genuine, named beta feedback exists. |
| 6 | Email capture | Exists | `LeadCapture` + `/api/lead-capture` (error-log template, founding reservation, newsletter); fires `lead_captured` on every successful submit. |
| 7 | "Send this to a friend" CTA | Added now | In-app `InviteFriend` component on the dashboard and the mock report; copyable message + referral-tagged link; fires `referral_click` with `channel=in_app`. Public counterpart is `/refer`. |

Only item 5 needs a human decision later — and only once you have a real,
attributable result to show. The rest converts and refers on its own.

---

## Analytics at a glance

Eight stable, snake_case events, each carrying first-touch utm attribution
automatically. Full spec in `ANALYTICS_TRACKING.md`.

- `landing_view` — homepage view
- `signup_initiated` — user begins the signup form
- `signup` — account created
- `lead_captured` — any email capture
- `pricing_view` — pricing surface viewed
- `founding_reserve` — founding discount reserved
- `referral_click` — a referral message/link is copied or sent
- `purchase_completed` — a paid purchase (post-launch)

Referral **signups** are not a separate event — they are `signup` events whose
first-touch `utm_source = referral`.

---

## The eight files in this folder

1. `00_START_HERE.md` — this entry point: the passive system, the conversion
   checklist, and the index.
2. `PRODUCT_LED_REFERRAL_LOOP.md` — the in-app loop that turns users into
   referrers with zero manual work.
3. `ANALYTICS_TRACKING.md` — the measurement spec: all eight events, the passive
   funnel, and a weekly glance.
4. `CONTENT_LIBRARY.md` — optional posts (20 LinkedIn, 10 short founder, 5
   one-line) to use only if you feel like it.
5. `SEO_ARTICLE_IDEAS.md` — 10 article ideas that compound search traffic,
   complementing the existing blog.
6. `SEO_PAGE_PLAN.md` — the 7 target SEO landing pages, with build-vs-improve
   verdicts (`/error-log-template` is shipped).
7. `PROFILE_ASSETS.md` — LinkedIn headline + About, a pinned post, email
   signature, short bio, and beta invite text.
8. `EMAIL_SEQUENCES.md` — 5 opt-in, compliant lifecycle emails (welcome,
   feedback, referral ask, founding reminder, reactivation).

All eight files in this folder are written and ready to use.

---

## Owner effort, honestly

Your manual effort is essentially:

- **Optional posting** — only if you feel like it; the system does not need it.
- **Reading analytics** — a two-minute weekly glance (see `ANALYTICS_TRACKING.md`).

That is the whole ask. Everything else runs without you.

---

## Absolute rules (non-negotiable)

- **Zero emojis** anywhere, in any file.
- **Never** call anything a "free diagnostic" or claim a scored diagnostic or
  placement test exists. There is none. The baseline is an official mba.com
  practice exam the user takes themselves and enters in the app.
- **Never** promise or imply a guaranteed score or specific improvement. Cite
  only Adam's own 565 to 735 (top 1%).
- **Never** imply affiliation with, endorsement by, or partnership with GMAC,
  mba.com, or the official GMAT. Include in any public-facing claim block:
  "GMAT is a registered trademark of GMAC, which does not endorse and is not
  affiliated with this product."
- **No** scraping, automated LinkedIn DMs, hiring workflow, or spam.
- **Lifecycle/automated emails** must be opt-in and compliant: identify the
  sender, include one-click unsubscribe (CAN-SPAM / GDPR). Never cold bulk email.
- **Keep Adam's manual work minimal and optional.**
- **Do not quote discount codes publicly** until launch (`FOUNDING30` /
  `FOUNDING40` exist in Stripe TEST mode only).
