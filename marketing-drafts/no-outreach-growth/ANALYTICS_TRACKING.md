# Zakarian GMAT — Analytics & Tracking

The measurement spec for the no-outreach growth system. Eight stable,
snake_case events tell you whether the website is converting and whether the
product-led loop is referring — without any manual tracking on your part.

Companion files: `00_START_HERE.md`, `PRODUCT_LED_REFERRAL_LOOP.md`.

Every event carries **first-touch utm attribution** automatically
(`utm_source` / `utm_medium` / `utm_campaign` + `ref`), captured on the
visitor's first landing and merged into every subsequent event. You never have
to tag events by hand.

---

## The eight events

| Event | What it means | Where it fires (surface) | Key props |
|-------|---------------|--------------------------|-----------|
| `landing_view` | Someone viewed the homepage | Homepage (landing) | first-touch utm |
| `signup_initiated` | A visitor began the signup form | Signup form (CTA engaged) | first-touch utm |
| `signup` | An account was created | Signup completion | first-touch utm (referral signup if `utm_source=referral`) |
| `lead_captured` | An email was captured | `LeadCapture` / `/api/lead-capture` (error-log template, founding reservation, newsletter) | capture source/template, first-touch utm |
| `pricing_view` | The pricing surface was viewed | `/pricing` and homepage pricing block | first-touch utm |
| `founding_reserve` | A founding discount was reserved | `FoundingOffer` block (homepage + `/pricing`) | plan/tier if present, first-touch utm |
| `referral_click` | A referral message/link was copied or sent | `/refer` (`ReferralShare`) and in-app `InviteFriend` | `channel` (e.g. `in_app`), `ref` slug, first-touch utm |
| `purchase_completed` | A paid purchase completed | Checkout success (post-launch) | plan, amount, first-touch utm |

---

## Two derived metrics (no separate events)

- **Referral signups** = `signup` events whose **first-touch `utm_source =
  referral`**. There is no distinct "referral_signup" event — the attribution
  riding on the `signup` event is what makes it a referral signup. This avoids
  double counting and keeps the event set stable.
- **Email captures** = `lead_captured`. Every successful email capture, across
  all capture surfaces, is the same event; segment by capture source/template in
  the props if you want to split them.

---

## The passive funnel to watch

Three short paths. You are watching for healthy fall-through, not perfection.

**Main conversion path**

```
landing_view  ->  signup_initiated  ->  signup  ->  founding_reserve
```

**Referral path** (the product-led loop)

```
referral_click  ->  referral signup
                    (= signup with first-touch utm_source=referral)
```

**Lead path** (email capture for lifecycle re-engagement)

```
lead_captured
```

If `landing_view` is high but `signup_initiated` is low, the homepage CTA needs
work. If `signup_initiated` is high but `signup` is low, the signup flow is
leaking. If `signup` is healthy but `founding_reserve` is low, the founding
offer needs clearer framing. If `referral_click` is happening but referral
signups are not following, the referral message or landing experience needs a
look.

---

## Reading them in Vercel Web Analytics

- Events record in **Vercel Web Analytics** with **no key needed** — they show
  up in the **events view** automatically.
- Open the project in Vercel, go to the **Analytics** tab, and look at the
  **Events** list to see counts per event over your selected time range.
- Filter or break down by the utm dimensions to separate referral, search, and
  direct traffic.
- **Meta Pixel / Google tag** forward these same events **only when** the env
  ids are set: `NEXT_PUBLIC_META_PIXEL_ID` and `NEXT_PUBLIC_GOOGLE_TAG_ID`. If
  those are unset, events still record in Vercel — they just are not forwarded
  to ad platforms. There is nothing to fix if you are not running ads.

---

## The 5-number weekly glance

The whole owner habit. Open the events view, pick "last 7 days," and read these
five numbers. Two minutes, no spreadsheet.

1. **`landing_view`** — top of funnel. Is anyone arriving?
2. **`signup`** — the headline number. Are visitors becoming users?
3. **Referral signups** — `signup` filtered to first-touch `utm_source=referral`.
   Is the product-led loop producing growth on its own?
4. **`founding_reserve`** — intent to pay at launch. Are users committing to the
   founding rate?
5. **`lead_captured`** — your lifecycle email pipeline. Is the list growing so
   re-engagement has someone to reach?

If those five are flat or growing week over week, the system is working and
there is nothing to do. If one drops, the funnel section above tells you which
surface to look at. That is the entire measurement burden — everything else is
automatic.
