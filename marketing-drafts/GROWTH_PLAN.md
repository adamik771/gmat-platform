# Zakarian GMAT — Growth Plan (Low-Cost Founder-Led Launch)

The plan for getting the first cohort of real users and founding customers with
near-zero ad spend, using the founder's business-school network, LinkedIn,
warm referrals, free beta access, and a founding-user discount.

This file is the strategy. Four companion files hold the execution detail:

- `LAUNCH_ASSETS.md` — positioning, founder profile copy, landing/offer copy, and the LinkedIn content library (55 ready-to-post pieces).
- `OUTREACH_PLAYBOOK.md` — the manual, personalized DM/message templates and the outreach tracking system.
- `CONTENT_CALENDAR.md` — the 30-day day-by-day launch calendar.
- `REFERRAL_AND_DISCOUNT_PLAN.md` — pricing reality, the founding offer, discount codes, and the referral mechanism.

---

## 1. Where the product actually is (the honest baseline)

Before strategy, the facts that shape it:

- The platform is **live and free during an invite-based beta**. Any account currently gets full access — every chapter, the full question bank, mocks, analytics, review. No paywall is enforced (`PAYWALL_ENABLED=false`).
- **Real pricing already exists** for when paid plans turn on (one-time payments, 14-day money-back):
  - Self-Study — **$429** (4 months access)
  - Self-Study + Mentorship — **$599** (6 months + direct WhatsApp Q&A with Adam; the recommended tier)
  - Coaching — **$2,500** (8 1:1 sessions)
  - Intensive — **$4,200** (16 1:1 sessions)
- There is **no in-app "diagnostic" test**. The baseline is an official mba.com practice exam the user enters on `/mock`. We never advertise a "free diagnostic." The honest free hook is a **free personalized study plan + full beta access**.
- The only verified result is the founder's own: **565 to 735, 100th percentile, as a non-native English speaker.** No student testimonials exist yet — we do not invent any.

**Strategic implication:** this is not a "free trial to paid" funnel yet. It is a
**beta-signup funnel with a founding-conversion layer** on top. Keep beta free to
maximize signups and feedback; let committed users **reserve a locked-in founding
discount (30-40% off)** that is honored when paid plans launch.

---

## 2. Who we are selling to (segments, in priority order)

The whole launch runs on the founder's real relationships and earned audience — no
cold scraping, no bought lists.

| # | Segment | Why they convert | Where they are |
|---|---------|------------------|----------------|
| P0 | **People who previously asked Adam for GMAT advice** | Already raised their hand on this exact problem; warmest possible audience | Old DMs, WhatsApp, email, classmates |
| P0 | **Warm friends / BI classmates / b-school peers prepping for GMAT** | Trust + relevance; first feedback and first founding members | BI Oslo network, study groups |
| P1 | **MBA / MiM applicants in Adam's 1st-degree LinkedIn network** | Actively prepping; respect a 735 + admit story | LinkedIn connections |
| P1 | **Consulting / finance / admissions contacts who know applicants** | Referral multipliers, not always buyers themselves | LinkedIn, summer-program alumni (Harvard 2025, SMU 2024) |
| P2 | **Admins of b-school clubs / MBA-applicant communities** | One yes unlocks a whole group; must be value-first, not spammy | LinkedIn groups, club pages |
| P2 | **2nd-degree LinkedIn connections via warm intros** | Referral path, never cold-blast | Mutual connections |

Ideal early user (ICP): an ambitious GMAT-taker, often a non-native English
speaker, aiming for a 655+/top program, frustrated with content-dump courses,
willing to study consistently. Adam's own story is the exact mirror of this person.

---

## 3. Positioning (one line)

**The structured GMAT system built by someone who solved the hard version — 565 to
735 as a non-native speaker — for ambitious applicants who want a method, not a
pile of videos.** (Full positioning variants in `LAUNCH_ASSETS.md`.)

---

## 4. The funnel (5 stages, mapped to the real product and tracking)

```
Awareness        Interest             Activation              Conversion             Referral
LinkedIn posts   Free study plan      Signs up (beta) +       Reserves founding      Early user invites
Warm DMs         Sample chapter       onboarding (target +    discount (locked-in    friend; friend gets
Club/group       Error-log template   weak areas) + enters    30-40% off) -> later   founding price,
Referrals        Study-schedule gen.  official-exam baseline  paid at launch         referrer gets $50
                                       -> sees plan
```

Each stage now has an analytics event so we can see where people drop:

| Stage | Action | Event fired |
|-------|--------|-------------|
| Awareness | (off-platform) | UTM captured on landing (first-touch) |
| Interest | Free lead magnet email | `lead-capture` row (source-tagged) |
| Interest | Pricing viewed | `pricing_view` |
| Activation | Account created | `signup` |
| Conversion | Founding rate reserved | `founding_reserve` |
| Conversion | Checkout started (when live) | `checkout_initiated` |
| Conversion | Paid | `purchase_completed` |
| Referral | Referral message shared | `referral_click` |
| (any) | Feedback opened | `feedback_click` |

Every event automatically carries first-touch attribution (utm_source / medium /
campaign / ref), so a founding reservation can be traced back to the exact
LinkedIn post or DM that started it. See section 8 for what to do to turn the
dashboards on.

---

## 5. Channels (all low-cost, all manual)

1. **LinkedIn organic posts** — the engine. ~4-5 posts/week from the founder's account. Story posts build trust; advice/mistake posts build reach; beta-tester and founding-access posts convert. Library and cadence in `LAUNCH_ASSETS.md` / `CONTENT_CALENDAR.md`.
2. **Warm, personalized DMs** — small daily batches to the priority segments. Helpful-first, never templated-feeling. Templates in `OUTREACH_PLAYBOOK.md`.
3. **Communities / clubs** — value-first participation, then a value-first ask to admins. Never drop links into groups uninvited.
4. **Referrals** — once a handful of users are active and happy, the `/refer` page and the referral ask turn them into a channel.
5. **Free lead magnets** — the error-log template, sample chapters, study-schedule generator, score tools. These capture email from people not ready to sign up.

Explicitly **not** doing: paid ads (beyond optional tiny retargeting later), cold
email blasts, LinkedIn automation tools, scraping, or buying followers/lists.

---

## 6. Offer architecture (summary; detail in REFERRAL_AND_DISCOUNT_PLAN.md)

- **Top of funnel (free):** full beta access + a free personalized study plan; plus free sample chapters, study-schedule generator, and error-log template for those not ready to sign up.
- **Founding conversion:** reserve a **locked-in 30-40% founding discount** now (no charge today). Founding prices when paid plans launch: ~**$257-300** for Self-Study, ~**$360-420** for the $599 Mentorship tier. A **$300 special warm-user price** is at Adam's discretion for hand-picked people.
- **Referral:** friend gets the founding discount; referrer gets **$50** when the friend becomes a paying founding member.
- Framing rule: this is **founder/early-supporter access**, never "cheap" or "desperate," and never fake-scarce. No countdown timers, no "limited time."

---

## 7. 30-day priorities (P0 -> P3)

### P0 — Conversion foundation (shipped this session, plus owner actions)
- [x] Site-wide GMAC no-affiliation disclaimer in the footer (was only on /terms).
- [x] **Founding-member conversion block** on the landing page and pricing page (beta-only), with an email reservation that fires `founding_reserve`.
- [ ] **Owner action:** confirm `hello@zakariangmat.com` is a real, monitored inbox (founding/referral replies land there).

### P1 — Tracking, UTM, pricing/discount/referral flow (shipped, plus owner actions)
- [x] First-touch **UTM/attribution capture**, merged into every analytics event.
- [x] New funnel events: `pricing_view`, `founding_reserve`, `referral_click`, `feedback_click`.
- [x] **/refer page** + share toolkit (copy/email a personal referral message; referral-tagged link).
- [x] Lead-capture extended for `founding-member` and `referral` sources (+ DB migration file).
- [ ] **Owner action:** run `supabase/migrations/20260626000000_lead_captures_founding_referral.sql` in Supabase so founding/referral emails persist.
- [ ] **Owner action:** set `NEXT_PUBLIC_GOOGLE_TAG_ID` and/or `NEXT_PUBLIC_META_PIXEL_ID` in Vercel if you want pixel/GA dashboards (Vercel Analytics already records the events with no key).
- [ ] **Owner action:** create the founding/referral **promotion codes in Stripe** (see REFERRAL_AND_DISCOUNT_PLAN.md). `allow_promotion_codes` is already on.

### P2 — Outreach + content assets (created this session)
- [x] `LAUNCH_ASSETS.md`, `OUTREACH_PLAYBOOK.md`, `CONTENT_CALENDAR.md`, `REFERRAL_AND_DISCOUNT_PLAN.md`.
- [ ] **Owner action:** personalize the founder profile copy and start the 30-day calendar.

### P3 — Optional polish (backlog)
- [ ] Public feedback button shipped on marketing pages -> /contact; consider a dedicated short feedback form later.
- [ ] Reconcile stale "30-question placement diagnostic" copy still in some in-app/marketing strings (see AGENTS.md) so nothing implies a diagnostic exists.
- [ ] Add a real `TestimonialCard` grid once the first attributable beta result exists (component already built, intentionally unused).
- [ ] Lightweight SEO landing pages for high-intent queries (e.g. "GMAT Focus study plan", "GMAT for non-native speakers") — only after the warm-network push.

---

## 8. Metrics — definitions, how to read them, and 30-day targets

Track these weekly. Targets are deliberately modest for a solo, organic launch off
a personal network — beating them is upside, not the bar.

| Metric | Definition | Source | 30-day target |
|--------|------------|--------|---------------|
| **Manual messages sent** | Personalized DMs/messages you actually sent (logged in the outreach sheet) | Outreach sheet | 120-150 (4-5/day) |
| **Reply rate** | Replies / messages sent, by segment | Outreach sheet | 35-50% warm; 10-20% cooler |
| **Trial / beta starts** | New beta signups | `signup` event / Supabase auth | 30-50 |
| **Diagnostic / baseline completions** | Users who entered an official-exam baseline on `/mock` (the activation proxy — we have no in-app diagnostic) | Supabase `user_metadata.official_exam_scores` | 12-20 |
| **Onboarding completion** | Users who finished the intake (target + weak areas) | `user_metadata.onboarding.completedAt` | 20-30 |
| **Founding reservations** | Emails on the founding list | `founding_reserve` event + `lead_captures` (source founding-member) | 15-30 |
| **Trial-to-paid conversion** | Paying founding members / activated users (meaningful only once paid plans launch) | `purchase_completed` / Stripe | set after paywall flips |
| **Revenue** | Collected from founding members | Stripe | first dollars > 0 (proof) |
| **Referrals** | Referral shares and referral-sourced signups | `referral_click`; signups with utm_source=referral | 10+ shares, 3+ signups |
| **CAC** | Cash spent / customers acquired. With organic outreach, near-$0 cash CAC; track **time CAC** (hours of outreach per signup) instead | Outreach sheet hours | < 45 min per activated user |
| **Conversion by segment** | Activation and founding-reservation rate split by segment A-E | Outreach sheet + UTM | identify the best 1-2 segments by day 14 and double down |

**Reading the funnel:** the two numbers that matter most early are **reply rate**
(is the outreach landing?) and **baseline completion** (do signups actually
activate?). If reply rate is low, the message/targeting is off — fix that before
sending more. If signups don't reach a baseline, the activation path needs help
(better onboarding nudges, a personal "want me to walk you through your plan?"
offer) before pouring in more traffic.

---

## 9. Weekly cadence

- **Mon:** plan the week's posts + pick the week's DM targets from the sheet.
- **Tue-Fri:** post per calendar; send the day's small DM batch; reply to everything within a couple of hours.
- **Daily:** log every message and reply in the outreach sheet.
- **Fri/Sat:** weekly review — reply rate, top post, where people dropped, what to change next week (questions in `CONTENT_CALENDAR.md`).

---

## 10. Guardrails (non-negotiable)

- **Manual and personalized only.** No automation tools, no scraping, no mass-DMs, no bought lists. Respect LinkedIn's rules.
- **No fabricated proof.** No invented testimonials, no guaranteed scores, no "X% improvement" claims. Cite only Adam's verified 565->735 / 100th percentile.
- **No fake urgency.** Founding access is genuinely early, not scarce. No countdowns or "last chance."
- **No implied affiliation** with GMAC / mba.com / the official GMAT. The disclaimer is now site-wide; keep it in any public claim block and ad.
- **Helpful before selling.** Lead with the free study plan and honest advice. The sale is a natural next step, never the opener.
- **Data integrity.** Don't quote product counts as exact numbers — use the "50+ chapters / 1,900+ questions" floor phrasing already wired into the site.
