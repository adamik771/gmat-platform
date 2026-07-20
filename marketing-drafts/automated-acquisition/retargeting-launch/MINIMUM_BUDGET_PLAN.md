> **STALE OFFER - review before use (2026-07-19).** Strategy below predates the current offer (free 7-day full-access trial, no card - never "free beta"/"private beta"). Founder-claim wording in this file has been aligned (565 to 735, top 1%, personal result, no "verified" framing), but offer/beta mechanics need a rewrite before launching anything from this file. Current wording source: acquisition-cleanup/OFFER_AUDIT.md and the live /gmat-free-trial page.

# Minimum Budget Plan — Retargeting — Zakarian GMAT

The smallest viable retargeting test, the traffic gate that must be met BEFORE any
dollar is spent, the expected reach, and the kill rule. Minimum money throughout.

---

## The gate (read first — do not skip)

**Do not spend a single retargeting dollar until ALL are true:**

1. Pixel + tag are **live and verified firing** (PIXEL_SETUP_CHECKLIST.md PART C all
   green).
2. At least **~300-500 unique visitors** have hit the site since the pixel went live.
3. The specific audience you want to run has cleared the platform minimum:
   - **Google Display Remarketing:** audience **>= 100 active users.**
   - **Google RLSA (Search):** Search list **>= 1,000 members.**
   - **Meta Custom Audience:** serves at ~100 matched users, but the pixel should be
     **warmed** (a few hundred logged events) for stable delivery.

If the gate is not met: **spend $0 on retargeting.** Keep building the visitor pool
via organic + the tiny EXACT/PHRASE Search prospecting budget ($5-10/day) that's
already the plan. Retargeting has nobody to target yet.

**Status today: GATE NOT MET (brand-new beta, little/no traffic). Budget = $0.**

---

## Why retargeting is wasteful before the gate

- **Nobody in the list.** A retargeting ad with a 40-person audience can't be
  delivered efficiently — platforms won't even serve below their minimums, and just
  above them the auction has almost nothing to optimize against.
- **The algorithm can't learn.** Meta/Google optimization needs a steady trickle of
  conversions/events to find patterns. Tens of events per week is statistical noise;
  you pay for "learning" that never converges.
- **You'd pay a premium to reach people email already reaches for free.** The warmest
  pools (A5 founding-reserved, A6 signed-up-inactive) are tiny during beta and are
  already covered by the opt-in email sequences (B and D). Paying to re-show ads to
  the same handful is pure waste.
- **Frequency burnout.** A small pool means the same few people see the ad many times
  fast — annoying, and it inflates cost with zero incremental lift.

Bottom line: below the gate, retargeting spend buys near-zero incremental
conversions. The free/organic + email channels do the warm re-engagement for $0.

---

## The minimum viable test (ONLY after the gate is met)

Start with ONE audience, ONE platform, the smallest budget that can deliver.

### Recommended first test
- **Platform:** Meta (cheaper CPMs for small warm audiences than Google Display; the
  pixel-based Custom Audience is the simplest to stand up).
- **Audience:** **A1 — landing visitors, no signup** (biggest pool, clears the gate
  first). Suppress all converters.
- **Budget:** **$3-5/day** (start at $3). One ad set, 2-3 honest variants
  (META_AD_COPY.md A1 block).
- **Optimization event:** a micro-conversion — `signup` or `lead_captured`
  (NOT purchase; purchase is zero during beta).
- **Frequency cap:** ~2-3 impressions/person/week so a small pool isn't burned out.
- **Run length:** minimum 7 days, ideally 10-14, before judging (small audiences need
  time to accumulate a readable signal).

### Optional second test (only if the first shows signal)
- **A2 — error-log downloaders, no account** at **$3/day** on Meta.
- Do NOT run more than 2 retargeting ad sets at once during beta — you'll split an
  already-thin audience and learn nothing.

### Google Display / RLSA
- Hold OFF on Google Display until a GA4 audience clears **>= 100** AND Meta has shown
  retargeting converts at all. RLSA needs **>= 1,000** — likely weeks/months away;
  note it and wait.

---

## Expected reach (rough, set expectations low)

At $3-5/day on a small warm Meta audience:
- **Daily impressions:** roughly **150-500** (depends on CPM and audience size).
- **Daily reach:** roughly **80-250 people**, capped by frequency and audience size —
  a small warm pool may be fully covered in days, after which spend just re-shows.
- **Clicks/day:** typically **a handful** (low single digits) — retargeting CTRs run
  higher than cold, but the absolute pool is tiny here.
- **Conversions:** expect **0-2/week** early. This is a SIGNAL test, not a volume
  play. Judge direction (any signups/leads at acceptable cost), not scale.

These are order-of-magnitude planning figures, not guarantees. Real numbers depend on
live auction prices.

---

## Total spend ceiling during the test phase

- **Retargeting:** **$3-5/day**, one audience, hard cap **$5/day** until it proves out.
- **Combined with the existing Search prospecting ($5-10/day),** total ad spend stays
  in the **~$8-15/day** range — consistent with the minimum-money mandate. If cash is
  tight, prospecting (which FEEDS the retargeting pool) takes priority over
  retargeting.

---

## KILL RULE (decide in advance, follow it)

Pause/kill the retargeting test when ANY of these is true:

1. **No micro-conversion in 14 days** at $3-5/day (zero `signup` / `lead_captured` /
   `founding_reserve` attributable to the retargeting ad set). -> Pause. The pool is
   too small or the angle is wrong; go back to growing traffic.
2. **Cost per micro-conversion is clearly unsustainable** for a $500-account beta
   (e.g. > ~$15-20 per signup/lead with no improving trend). -> Pause.
3. **Frequency runs hot with no lift** (avg frequency climbing past ~4-5/week and CTR
   falling) — you've saturated the pool. -> Pause; let the audience re-fill before
   trying again.
4. **The audience drops below its serving minimum** (Meta < ~100, Google Display
   < 100) because traffic stalled. -> Pause; fix the top of the funnel first.

When killed: revert to **$0 retargeting**, keep the pixel collecting, keep the
audiences building, and re-test only after the visitor pool is meaningfully larger.

---

## One-line summary for Adam

Retargeting stays at **$0** until the pixel is verified and you've got ~300-500
visitors with an audience >= 100. Then run **one** Meta ad set (Audience A1) at
**$3-5/day** optimized to signups, suppress all converters, and kill it if 14 days
produce no micro-conversion. Email (Sequences B/D) handles the warm-but-tiny pools for
free in the meantime.
