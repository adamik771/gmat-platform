# Conversion Event Map — Zakarian GMAT

Maps every internal funnel event to its Meta event, its Google conversion/audience
role, and whether it is a **retargeting trigger** (build an audience FROM it), a
**conversion to optimize** toward, or a **suppression** signal (exclude converters).

The site fires these snake_case events to Vercel Web Analytics and auto-forwards them
to Meta `fbq` and Google `gtag` once the pixels are set (no code changes needed).
First-touch attribution (utm_*, ref) is merged into every event automatically.

---

## Master table

| Internal event | Fires when | Meta event | Google (GA4 / Ads) | Retargeting trigger? | Optimize / suppress |
|---|---|---|---|---|---|
| `landing_view {page}` | Acquisition/landing page viewed | Custom: `landing_view` (or ViewContent) | GA4 event `landing_view`; build audience | **YES — primary TOF audience (A1)** | Not a conversion; pure audience source |
| `lead_captured {source, lead_magnet}` | Email captured (incl. error-log CSV) | **Lead** (standard) | GA4 key event -> import as Ads conversion | **YES — A2 (error-log), A3 (newsletter)** | **Optimize** (micro-conversion); suppress on signup audiences |
| `signup_initiated {gated}` | Signup form submitted | Custom: `signup_initiated` (or InitiateCheckout-style funnel step) | GA4 event; funnel step | Optional (abandoned-signup audience) | Funnel diagnostic; not the main conversion |
| `signup {gated}` | Account created | **CompleteRegistration** (standard) | GA4 key event -> import as Ads conversion | Audience source for A6 (signed-up-inactive) | **Optimize** (primary micro-conversion); **SUPPRESS** from all "get them to sign up" audiences |
| `founding_reserve {source, lead_magnet}` | Founding access reserved | **Lead** or custom `founding_reserve` (use custom to keep it distinct from email leads) | GA4 key event -> import as Ads conversion | Audience source for A5 (reserved-not-activated) | **Optimize** (micro-conversion); **SUPPRESS** from A4 pricing audience and any "reserve founding" ad |
| `referral_click {channel, named}` | Referral share action (copy/email/whatsapp/x/native) | Custom: `referral_click` | GA4 event | No (engagement signal, not a return-intent pool) | Engagement metric; not a conversion to bid on |
| `pricing_view` | Pricing page viewed | **ViewContent** (or custom `pricing_view`) | GA4 event; build audience | **YES — A4 consideration audience** | Not a conversion; audience source |
| `feedback_click` | Feedback button clicked | Custom: `feedback_click` | GA4 event | No | Product signal; ignore for ads |
| `checkout_initiated` | Checkout started | **InitiateCheckout** (standard) | GA4 / Ads conversion | (Later) cart-abandon audience | **DORMANT** until paywall on; then optimize |
| `purchase_completed` | Purchase done | **Purchase** (standard) | GA4 / Ads conversion (primary) | No — it's the END state | **DORMANT** now; when live, **SUPPRESS everywhere** (never retarget a paying founding member) |

---

## How to read the three roles

- **Retargeting trigger (build audience FROM):** the event marks intent without
  completion, so it seeds a pool to re-engage. Sources: `landing_view`,
  `lead_captured`, `pricing_view` (and `signup`/`founding_reserve` as sources for the
  next-stage audiences A5/A6).
- **Conversion to optimize toward:** the micro-conversions we tell Meta/Google to
  optimize delivery for during the free beta, since purchase volume is zero:
  **`lead_captured`, `signup`, `founding_reserve`**.
- **Suppression (exclude converters):** attach as a NEGATIVE audience so you stop
  paying once someone advances:
  - Exclude `signup` from sign-up audiences (A1, A2, A3).
  - Exclude `founding_reserve` from the founding/pricing audience (A4).
  - Exclude `purchase_completed` from EVERYTHING the day the paywall turns on.
  - Maintain one blanket **"All Converters"** exclusion = `signup` OR `founding_reserve`
    OR `purchase_completed`; attach to every campaign.

---

## Which to import as Google Ads conversions (optimization targets)

Mark as **Key events** in GA4, then import into Google Ads as conversions:

1. `lead_captured` — micro-conversion (email / error-log).
2. `signup` — primary micro-conversion (account created).
3. `founding_reserve` — micro-conversion (warmest non-customer).

Leave `checkout_initiated` and `purchase_completed` configured but **dormant** —
import and switch them to the primary conversion the day the paywall turns on
(PAYWALL_ENABLED -> on). Do NOT optimize toward purchase while the beta is free
(volume is zero; the algorithm can't learn).

---

## Meta standard-event notes

- The map above uses Meta **standard** events where one fits (Lead,
  CompleteRegistration, InitiateCheckout, Purchase) so Meta's optimization and
  reporting recognize them. Everything else is a **custom** event by its snake_case
  name.
- `signup` -> **CompleteRegistration** and `purchase_completed` -> **Purchase** are
  already specified as the standard mappings; keep them consistent in Test Events
  verification (PIXEL_SETUP_CHECKLIST.md step A3.12).

---

## Dormant-event handling (paywall flip)

When `PAYWALL_ENABLED` is turned on and Stripe leaves test mode:
1. Verify `checkout_initiated` (InitiateCheckout) and `purchase_completed` (Purchase)
   fire with real values in Meta Test Events and GA4 DebugView.
2. Switch the **primary** optimization conversion in both platforms to
   `purchase_completed`; keep the micro-conversions as secondary.
3. Add `purchase_completed` to the "All Converters" exclusion so no ad ever
   retargets a paying founding member.

---

## Compliance note

Event names and conversion labels are internal/technical and carry no claims. Any
CREATIVE attached to a conversion or audience must still follow the hard rules: no
score/percentile/timeline guarantee, no GMAC/mba.com affiliation, only the founder's
own 565 -> 735 (100th percentile) as a personal result.
