# Growth Assumptions

Every non-obvious decision behind the launch/growth system, with the reasoning. If a fact below is wrong, correct it here first and the rest of the assets follow.

This documents the canonical growth system shipped on `launch-system-growth-funnel`. Not affiliated with GMAC, the GMAT, GMAT Focus, or mba.com.

## 1. The product reality these assets are built on

- The platform is **live and free** right now: `PAYWALL_ENABLED` is OFF in production, so the full self-study product is a **free private beta**. "Buying" today is really **founding-user access**.
- **No diagnostic, by decision.** The in-app `/diagnostic` placement route was removed earlier; the logged-in baseline is the student's **own official mba.com practice-exam score**, entered on `/mock`. We also **deliberately do not ship a public pre-signup diagnostic** — the honest-hooks approach uses the founding-member reservation, the error-log template lead magnet, the free sample chapters, and the free score tools instead. (`/free-diagnostic` stays redirected to `/signup` in `next.config.ts`.)

## 2. The funnel (what was built)

A low-cost, founder-led funnel for the free beta:
- **Founding-member reservation block** on the landing page and `/pricing` (beta-gated), reusing `LeadCapture`; fires `founding_reserve`.
- **`/refer` referral page** + `ReferralShare` (copy or email a personal, referral-tagged message); fires `referral_click`.
- **Public feedback button** on marketing pages linking to `/contact`; fires `feedback_click`.
- **Site-wide GMAC no-affiliation disclaimer** in the footer.
- **First-touch UTM/ref attribution** captured on landing (`AttributionCapture`) and auto-merged into every `trackEvent` so conversions trace back to source; page views via `TrackView`.
- Funnel events: `pricing_view`, `referral_click`, `founding_reserve`, `feedback_click` (plus the existing `signup`, `checkout_initiated`, `purchase_completed`). All route through `trackEvent` → Vercel Analytics + Meta Pixel + Google tag (pixels dormant until their env ids are set).

## 3. Pricing and the founding-user offer

The site's real list prices (one-time; access term varies by tier):

| Plan | List price | Notes |
|---|---|---|
| Self-Study | $429 | platform only, 4-month access |
| Self-Study + Mentorship ("Guaranteed") | $599 | platform + mentorship, 6-month access |
| Coaching | $2,500 | high-touch, not the growth focus |
| Intensive | $4,200 | high-touch, not the growth focus |

Founding-user math (the growth offer):
- **Public founding price: $399** = ~33% off the $599 tier (the headline founding offer; 6-month access).
- **Self-study founding price: $299** = ~30% off $429 (the lighter, 4-month option).
- **Private warm-lead price: $300** = offered manually at your discretion.
- **Referral:** the friend gets the founding price; the referrer gets **$50** (credit or cash), tracked manually at first.
- Positioned as **premium, limited, founder-led early access** — not a cheap product. During the beta the platform is free, so "founding access" = free now + a locked-in founding price when monetization turns on.

## 4. The manual conversion workflow (because the paywall is off)

There is **no automatic checkout-to-access** today. Do not flip the paywall to sell — operate it manually:
1. A lead reserves founding access (the founding block writes a `lead_captures` row, source `founding-member` / lead_magnet `founding-reservation`) or messages you directly.
2. You grant **free beta access** immediately (they sign up at `/signup`).
3. You **log them in `CRM_TEMPLATE.csv`** and lock in their founding price by hand.
4. When you turn monetization on, you send a **Stripe payment link or promo code** (see `REFERRAL_AND_DISCOUNT_PLAN.md`).

## 5. Required migration (do this before launch outreach)

`supabase/migrations/20260626000000_lead_captures_founding_referral.sql` widens the `lead_captures` source/lead_magnet CHECK constraints to admit `founding-member` / `referral` / `founding-reservation`. **Run it in the Supabase SQL editor before sending traffic** — the lead-capture route returns ok even on insert failure, so without the migration founding reservations are silently swallowed.

## 6. What we deliberately did NOT do (guardrails)

- No public diagnostic / no "score band" / no "readiness band" / no guaranteed-score language.
- Did not flip `PAYWALL_ENABLED`, touch live Stripe keys/prices, or run any payment.
- No LinkedIn scraping. No automated LinkedIn DMs. All outreach is manual and personal.
- No fabricated testimonials, no student-count claims, no fake urgency, no implied GMAC/mba.com affiliation.
- The only performance claim is the founder's own **565 to 735** climb (and "100th percentile" on the official score report, which the /about proof image backs once `public/score-report.png` is added). Never generalized to "students improve X".
- No emojis anywhere.

## 7. Founder facts used (verify if any are stale)

- Adam Zakarian. BBA at BI Norwegian Business School (Oslo), graduating June 2026; starting the Master in Banking & Finance at the University of St. Gallen (HSG) in Sept 2026.
- GMAT 735, 100th percentile on the official score report, self-studied up from a 565 baseline. Built the platform and wrote all content solo.

## 8. Open risks / things that still need you

- **Run the migration** (section 5) before outreach.
- **Pixels are dormant** until you set `NEXT_PUBLIC_META_PIXEL_ID` / `NEXT_PUBLIC_GOOGLE_TAG_ID` in Vercel. Events still flow to Vercel Analytics without them.
- `public/score-report.png` is missing, so the /about 100th-percentile proof stays hidden. Add a redacted image to activate it.
- `hello@zakariangmat.com` must actually receive mail before you point people at it (provision MX or forwarding).
- See `DAILY_LAUNCH_CHECKLIST.md` for the one-time pre-launch list and the daily/weekly rhythm.
