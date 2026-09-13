> **STALE OFFER - review before use (2026-07-19).** Strategy below predates the current offer (free 7-day full-access trial, no card - never "free beta"/"private beta"). Founder-claim wording in this file has been aligned (565 to 735, top 1%, personal result, no "verified" framing), but offer/beta mechanics need a rewrite before launching anything from this file. Current wording source: acquisition-cleanup/OFFER_AUDIT.md and the live /gmat-free-trial page.

# Zakarian GMAT — Referral & Discount Plan

How the founding discount and the referral reward work, what to set up in Stripe,
and how it all gets tracked. Grounded in the platform's actual pricing and the
fact that checkout already supports promotion codes.

Companion files: `GROWTH_PLAN.md`, `OUTREACH_PLAYBOOK.md`, `LAUNCH_ASSETS.md`.

---

## 1. Pricing reality (don't guess — this is what's live)

Real plans, for when paid plans turn on. One-time payments, 14-day money-back:

| Plan | Standard price | Access | Extra |
|------|----------------|--------|-------|
| Self-Study | **$429** | 4 months | Full platform |
| Self-Study + Mentorship (recommended) | **$599** | 6 months | + WhatsApp Q&A with Adam |
| Coaching | **$2,500** | 6 months | + 8 1:1 sessions |
| Intensive | **$4,200** | 12 months | + 16 1:1 sessions |

Right now the platform is **free in beta** (no paywall). So the founding discount
applies to the **future** paid price — we are reserving a rate, not charging today.

---

## 2. The founding model (free beta now, locked price later)

- Keep beta **free** to maximize signups and feedback.
- Let committed users **reserve a locked-in founding discount of 30-40% off** the standard price, honored when paid plans launch.
- Framing: **founder / early-supporter access**, not a clearance sale. No countdowns, no "limited time," no desperation. It is genuinely early; that is the whole pitch.

### Recommended founding prices

| Plan | Standard | Founding 30% off | Founding 40% off | Recommended founding price |
|------|----------|------------------|------------------|----------------------------|
| Self-Study | $429 | ~$300 | ~$257 | **$299** (clean ~30%) |
| Self-Study + Mentorship | $599 | ~$419 | ~$359 | **$399** (~33%) |

- **Default founding offer:** the prices above (roughly a third off). Lead with the Mentorship tier at **$399**.
- **Deep warm offer (your discretion):** up to 40% off, i.e. **$257 / $359**.
- **Special warm-user price:** **$300 flat**, hand-picked people only (e.g. close peers, your first few champions). Not advertised.

Keep Coaching/Intensive at full price — those are high-touch and shouldn't be
discounted to launch; if anything, comp a single seat manually.

---

## 3. How discounts are delivered (Stripe — already wired)

Checkout already passes `allow_promotion_codes: true`, so the Stripe hosted
checkout shows an **"Add promotion code"** field. You create the codes in Stripe;
no code change needed. A 100%-off code even produces a $0 order that still grants
access via the webhook (useful for comps and tests).

### One-time setup in the Stripe Dashboard

1. **Switch to the right mode** (test mode first, then live).
2. **Create coupons** (Product catalog -> Coupons -> New, or Coupons section):
   - `Founding 30` — percentage, **30% off**, duration: once.
   - `Founding 40` — percentage, **40% off**, duration: once.
   - `Warm 300` — for the $300 special: easiest as a **fixed amount off** scoped to the Self-Study price (e.g. $129 off $429 = $300), or just apply Founding 40 for those people.
3. **Create promotion codes** (the customer-facing code that maps to a coupon):
   - Coupon `Founding 30` -> code **`FOUNDING30`**
   - Coupon `Founding 40` -> code **`FOUNDING40`**
   - Coupon `Warm 300` -> code **`WARM300`** (optionally restrict: max redemptions, specific customer, expiry)
4. **Optional restrictions** per promotion code: max redemptions, first-order-only, expiry. Use sparingly — avoid fake scarcity, but a sane cap (e.g. first 50 founding members) is honest and fine if you actually mean it.
5. **Test** with Stripe test card `4242 4242 4242 4242`: apply the code, confirm the discounted total, confirm the `purchases` row lands and the dashboard shows the plan.

> Note: the live price IDs / `STRIPE_SECRET_KEY` / webhook secret still need to be set in Vercel before any real charge (see HANDOFF.md "Stripe / env var setup"). Until then checkout returns a clean 503 — fine during free beta.

---

## 4. The founding-reservation flow (works today, in beta)

This is live on the site now (landing + pricing "Founding access" block):

1. Prospect enters email in the **founding reservation** form.
2. Email is saved to `lead_captures` (source `founding-member`, magnet `founding-reservation`) and a **`founding_reserve`** analytics event fires (with first-touch attribution).
3. No charge. They're on the founding list.
4. **When paid plans launch:** email the founding list their code (`FOUNDING30`, or `FOUNDING40` for the deeper tier) -> they check out -> code applies -> webhook records the purchase.

> **Owner action:** run `supabase/migrations/20260626000000_lead_captures_founding_referral.sql` in the Supabase SQL editor, or founding-member rows fail the DB CHECK and are silently dropped (the route returns ok regardless). The `founding_reserve` event still records in analytics either way, but you want the emails persisted.

To read the founding list: query `lead_captures` where `source = 'founding-member'`
(service role only; RLS blocks client reads by design).

---

## 5. The referral mechanism

**Offer:** the friend gets the founding discount; the referrer gets **$50** when
the friend becomes a paying founding member. No cap.

**How it works (live now at `/refer`):**

1. The referrer opens `/refer`, types their name, and copies a **personalized message + a referral-tagged link** (`?utm_source=referral&utm_medium=personal&ref=<name-slug>`). Copy/email fires a **`referral_click`** event.
2. The friend lands; **first-touch attribution captures `utm_source=referral` + the `ref` slug**, which then rides along on the friend's `signup` / `founding_reserve` / `purchase_completed` events.
3. The friend mentions the referrer's name when they reserve (the message tells them to), and the `ref` slug gives you a second signal.
4. When the friend becomes a **paying** founding member, you pay the referrer **$50** by a method you agree on (this is tracked **manually** during launch).

**Why manual:** there is no per-user referral-code system in the product yet, and
building one (a `referrals` table, unique codes, automated payouts) is overkill for
the first cohort. Manual + attribution is enough until referral volume justifies
real infrastructure — note that as a P3 backlog item if it takes off.

**Attribution to look for:**
- `referral_click` events = how much sharing is happening.
- Signups / founding reservations whose first-touch `utm_source = referral` = referral-driven activation.
- The `ref` slug on those events = which referrer (cross-check with the name they mentioned).

---

## 6. End-to-end: from reserve to paid to referral

```
Free beta signup
   -> reserves founding rate (founding_reserve, email on lead_captures)
   -> [paid plans launch] gets FOUNDING30 code by email
   -> checkout with code (checkout_initiated -> purchase_completed, discount on Stripe)
   -> becomes a founding member
   -> asked for a referral (Template 10) -> shares /refer link (referral_click)
        -> friend lands (utm_source=referral) -> reserves -> later pays
        -> referrer paid $50 (logged manually)
```

---

## 7. Measurement

| Question | Where to look |
|----------|---------------|
| How many founding reservations? | `founding_reserve` event count; `lead_captures` source `founding-member` |
| How much referral sharing? | `referral_click` event count |
| Referral-driven signups? | signups with first-touch `utm_source=referral` |
| Which referrer? | `ref` slug on the event + the name the friend mentioned |
| Discounted purchases / revenue? | Stripe (promo code + amount), `purchase_completed` event |
| Best acquisition source overall? | first-touch `utm_*` distribution across `signup` / `founding_reserve` |

---

## 8. Owner action checklist

- [ ] Run the lead-captures migration (`20260626000000_lead_captures_founding_referral.sql`).
- [ ] Decide final founding prices (recommended: Mentorship **$399**, Self-Study **$299**; deep **$359 / $257**; special **$300**).
- [ ] Create Stripe coupons + promotion codes (`FOUNDING30`, `FOUNDING40`, `WARM300`); test with `4242…`.
- [ ] Confirm `hello@zakariangmat.com` is monitored (founding/referral replies land there).
- [ ] (Optional) set `NEXT_PUBLIC_GOOGLE_TAG_ID` / `NEXT_PUBLIC_META_PIXEL_ID` in Vercel for ad-platform dashboards.
- [ ] Set the live Stripe env vars before charging anyone (HANDOFF.md has the list).

---

## 9. Guardrails

- **Honest discounts.** The standard price is real ($429 / $599) — the founding price is a genuine reduction off it, not a fake "was/now."
- **No fake scarcity.** A finite founding cohort is fine *if you actually hold the line*; invented countdowns are not.
- **$50 only on real conversion.** Pay the referral reward when the friend actually pays, and tell referrers that up front.
- **Protect perceived value.** Don't discount below the founding floor or hand out the $300 special widely — it's for hand-picked champions.
- **No guarantees, no affiliation claims.** Discounts never come with score promises, and every public offer block carries the GMAC non-affiliation line.
