# Referral Loop — Audit & Improvement Plan

Owner: Adam. Scope: the Zakarian GMAT referral loop during the free private beta (PAYWALL_ENABLED off, Stripe test-mode). This is an internal launch doc. Compliance reminder for any copy edits below: no score/percentile/timeline promises, no GMAC affiliation, the only performance claim allowed is the founder's own 565 to 735 (100th percentile), it IS a free private beta, no fake urgency or scarcity, no emojis.

Keep the reward wording exactly as already shipped: **$50 reward, paid once a referred friend becomes a paying founding member**. The reward effectively triggers only after the paywall turns on (no paid plans exist yet during the free beta), so the loop today is a *warm-up* loop — it collects referred signups now and converts them to rewards later.

---

## 1. What exists today (verified in the repo)

The loop is more built-out than a single page. There are three live referral surfaces plus an email step, all sharing one attribution mechanism.

### a. The `/refer` page — `src/app/(marketing)/refer/page.tsx`
- Public, indexable, `canonical: /refer`, carries the GMAC non-affiliation disclaimer.
- Three-step explainer: **Share it / They join / You get $50**, with "no cap" framing ("refer as many people as you genuinely want to help").
- Fine print is honest about the manual mechanism: "We track referrals manually during the launch, so there's nothing to install and no codes to manage — just make sure your friend mentions your name when they reserve." Reward "paid once your friend becomes a paying founding member."
- CTA at the bottom routes to `/#founding` (reserve your own founding access), so the page also recruits the referrer.

### b. The personalized share toolkit — `src/components/marketing/ReferralShare.tsx`
- Referrer types a **name**; the component derives a `refSlug` (lowercased, non-alphanumerics to hyphens, trimmed, capped at 40 chars).
- Builds a referral-tagged link:
  `https://www.zakariangmat.com/?utm_source=referral&utm_medium=personal&ref=<slug>`
  (the `ref` param is only added when a name is present).
- Generates a ready-to-send personal message containing the founder's 565 to 735 story, the "free while in beta" fact, the link, and the "mention my name for the founding discount" instruction, signed `— <name>`.
- Five share channels, each firing `referral_click` with `{ channel, named: Boolean(refSlug) }`:
  - **copy** (clipboard), **email** (`mailto:` with subject + body), **whatsapp** (`wa.me`), **x** (`twitter.com/intent/tweet` with text + url), **native** (`navigator.share`, falls back to copy).
- Honest-growth guardrail baked into the UI copy: "Keep it personal — send it to people you actually know. No spam, no mass messages."

### c. In-app product-led prompt — `src/components/dashboard/InviteFriend.tsx` (ALREADY SHIPPED)
This is the important correction to the original assumption that in-app prompts are deferred. They are **live**, not deferred:
- Rendered on the **dashboard** (`src/app/(app)/dashboard/page.tsx:1910`, `surface="dashboard"`), positioned after the achievements/badges block. The inline comment states it is "shown to active users (post-value), not in the no-data activation state" — i.e. it is intentionally placed below the activation surface so a brand-new, empty-state user isn't asked to refer before getting value.
- Rendered on the **mock report** (`src/app/(app)/mock/report/page.tsx:964`, `surface="mock_report"`) — a genuine milestone moment (a completed full-length mock).
- One-click copies a referral-tagged message using link `?utm_source=referral&utm_medium=in_app`, fires `referral_click` with `{ channel: "in_app", surface }`, and links out to `/refer` ("More ways to share") for the fuller, personalizable flow.
- Note: the in-app link uses `utm_medium=in_app` and carries **no `ref` slug** (the logged-in user's identity isn't stamped into the link). That is a measurement gap, not a correctness bug — see section 3.

### d. The founding-referral email step — `src/lib/outreach/`
- Sequence **B (founding)** has a dedicated referral step: `sequences.ts` -> `{ step: "referral", offsetDays: 5, templateKey: "founding-referral" }`.
- Template `founding-referral` (`templates.ts`): subject **"Bring a founding friend, get $50"**, preheader "They get founding pricing; you get a $50 reward." Body: "they get the founding rate, and you get a $50 reward (credit toward your plan or cash) once they join. Tracked by hand for now, so nothing slips." CTA "Share your link" -> `/refer`.
- Sequence **A (signup)** also nudges referral at day 5 (`signup-founding` precedes it; the day-5 founding/refer nudge is present), and the **milestone (E)** templates (`milestone-mock-review`, `milestone-progress`) both end on a refer CTA. Per the product facts, `milestone-first-practice` is wired/enqueued; `mock-review` and `progress` templates **exist but are not yet enqueued**.
- All emails are opt-in only (consent re-checked on every send) and carry one-click unsubscribe + the non-affiliation footer.

### e. The shared attribution spine — `src/lib/analytics.ts` + `src/components/analytics/AttributionCapture.tsx`
- `AttributionCapture` runs once on first load, calls `captureAttribution(window.location.search)`.
- `captureAttribution` stores **first-touch** attribution in `localStorage` under `zg_attribution` for these params: `utm_source, utm_medium, utm_campaign, utm_content, utm_term, ref` (plus `landing_path`). **First touch wins** — once stored it is never overwritten, so a friend who arrives via a referral link and converts three visits later is still credited to the referral.
- `trackEvent` merges `getAttribution()` into the props of **every** event automatically, and fans out to Vercel Web Analytics (always-on), Meta `fbq`, and Google `gtag` (both dormant until pixel env vars are set).

**Net:** the loop is end-to-end functional today. A referred friend who clicks a `ref=`/`utm_source=referral` link gets that attribution frozen at first touch, and their later `signup` event carries it. The only thing missing is the paid conversion that pays out the $50 — which is correct and expected during the free beta.

---

## 2. What's missing / safe improvements (with risk tradeoffs)

### 2.1 In-app prompts — already live; refine, don't rebuild
The original concern ("in-app prompts are a risky deferred change") is largely already resolved: `InviteFriend` ships on dashboard + mock report and is deliberately kept out of the empty/activation state. Remaining safe refinements:

- **Post-first-practice placement (DEFERRED — document, don't force).** A prompt right after a user's first completed practice session is the highest-intent moment, but it is also the riskiest to get wrong: too early and it interrupts activation; shown to a user who just did badly it reads as tone-deaf. The first-practice *email* milestone already covers this moment off-surface, which is the safer channel. Recommendation: leave the in-app first-practice prompt as a product decision for Adam, not an autonomous change. Reason to document-not-force: it touches the core activation flow, where a misplaced ask can measurably depress the activation rate we most need to protect in a zero-traffic beta.
- **Post-mock-review placement.** Already shipped on the mock report — this is the model to copy, because by the time a user finishes a mock they have clearly received value.
- **Frequency / fatigue.** Both current placements are static (always rendered for active users). Safe improvement: a lightweight dismiss or "remind me later" so the same user isn't asked on every dashboard visit. Low risk, purely additive.

Risk tradeoff summary: dashboard and mock-report placements are **low risk** (post-value, easy to ignore). Activation-flow placements (first practice, onboarding) are **higher risk** and should stay Adam's call.

### 2.2 Per-user referral code vs. the current manual mention
Today there is no per-user code. Identity is carried two ways: (a) the **name-derived `ref` slug** on `/refer` (collision-prone — two "Adam Z." referrers produce the same slug), and (b) the **manual "mention my name when you reserve"** instruction. The in-app `InviteFriend` link carries neither.

Options, cheapest to most involved:
- **Keep manual mention for payout, add a stable per-user `ref` for measurement (recommended near-term).** Stamp the logged-in user's id/slug into the `InviteFriend` link (e.g. `ref=<short-stable-id>`), so in-app shares become attributable. This is a small, safe, additive change — no schema, no payout logic, no new tables — and it closes the in-app measurement gap without pretending the loop is automated.
- **Full per-user referral-code system (DEFERRED — needs Adam's product decision).** A real code (persisted per user, validated at reserve time, auto-credited) removes the "mention my name" friction and de-duplicates referrers, but it requires: a storage decision (`user_metadata` vs. a `referrals` table), a claim/redemption UI on signup or `/mock`, and reconciliation against the manual ledger. It is the right end-state once paid plans turn on and payout volume justifies it; it is over-engineering during a zero-revenue beta. Document as the v2 of the loop, don't build it autonomously.

### 2.3 Referral landing personalization
The referral link lands on `/` with `ref=<slug>` in the URL but the homepage does not currently greet the referred visitor (e.g. "A friend thought this would help you — here's what it is"). Safe improvement: a subtle, dismissible referral banner that reads `ref`/`utm_source=referral` and shows a warm, honest one-liner plus the founding-discount note. Risk: low if it stays subtle and never fabricates a relationship ("Your friend Adam invited you" is only honest if we actually have the name — with the current slug we have a hint, not a verified identity, so keep it generic: "Someone shared this with you"). Keep it compliant — no urgency, no countdown.

### 2.4 Double-sided incentive clarity
The incentive is two-sided but the two sides land differently:
- **Referrer side:** $50 reward, paid once the friend becomes a paying founding member. Stated consistently across `/refer`, `InviteFriend`, and the `founding-referral` email.
- **Friend side:** "the founding discount when paid plans launch." This is honest but soft — during a free beta the friend's immediate benefit is simply *free full access now*, which is a stronger, more concrete hook than a future discount. Safe improvement: lead the friend-facing copy with the present-tense benefit ("free full access while it's in beta") and keep the founding discount as the forward-looking sweetener. The `ReferralShare` message already does this well; align `InviteFriend` and any new landing banner to the same emphasis. No new claims, just ordering.

---

## 3. Referral UTM + conversion tracking

### How it's measured today (the chain)
1. **Share** -> `referral_click` fires with `{ channel, named }` (web) or `{ channel: "in_app", surface }` (in-app). This counts *intent to share*, not a delivered referral.
2. **Friend clicks the link** -> `AttributionCapture` stores first-touch `{ utm_source: "referral", utm_medium: "personal"|"in_app", ref?: <slug>, landing_path }` in `zg_attribution`. First touch wins, so multi-visit journeys stay credited.
3. **Friend converts** -> `signup` (and `founding_reserve`, etc.) fire; `trackEvent` auto-merges the stored attribution, so each conversion event carries `utm_source=referral` (and `ref` when present).

So in Vercel Web Analytics you can already filter `signup` by `utm_source = referral` to see referral-driven signups. The data is flowing; what's missing is an explicit, named view and one gap-closure.

### What to add
- **A `referral_signup` view (recommended).** Two equivalent ways, pick one:
  - **Filter-only (no code):** in Vercel Web Analytics, filter the `signup` event where `utm_source = referral` (optionally `ref` is set). Zero risk, available now. This is the honest definition of a referral signup: a signup whose first-touch attribution `ref`/`utm_source` is set to referral.
  - **Explicit event (small code change):** when `signup` fires, if `getAttribution().utm_source === "referral"`, also fire a dedicated `referral_signup` event. Makes the funnel readable at a glance and lets the future pixel optimize toward it. Safe, additive, no schema.
- **Close the in-app `ref` gap.** As in 2.2, add a stable per-user `ref` slug to the `InviteFriend` link so in-app referral signups are distinguishable from web `/refer` signups (today both read `utm_source=referral`, but only `/refer` carries a `ref` slug). Until then, segment by `utm_medium` (`personal` vs `in_app`).
- **Funnel to watch (define the rates explicitly):**
  - `referral_click` (by `channel`/`surface`) -> share intent volume.
  - referral landing views (`utm_source=referral`) -> delivered clicks that actually arrived.
  - `signup` where `utm_source=referral` (the `referral_signup` view) -> conversions.
  - `founding_reserve` where `utm_source=referral` -> referred founding reservations (the pipeline that becomes $50 payouts once paid plans turn on).
- **Payout reconciliation.** Because the $50 is paid only on a *paying* founding member, keep a manual ledger now (CRM/spreadsheet already in `marketing-drafts/`) keyed by the friend's mentioned referrer name, and reconcile it against the `referral_signup` / `founding_reserve` analytics. When the paywall turns on, the dormant `purchase_completed` event carrying `utm_source=referral` becomes the trigger to pay.

---

## 4. Honest-growth guardrails (hold these on every change)

- **Personal, not broadcast.** The loop is explicitly built for one-to-one sharing. `ReferralShare` already prints "Keep it personal — send it to people you actually know. No spam, no mass messages." Keep that guardrail visible on any new surface. The X/native channels exist but the framing should keep favoring DMs over mass posts.
- **No fake urgency or scarcity.** No countdowns, no "spots running out," no "limited founding seats" unless a real cap exists. The honest hooks are: it is a free private beta, and founding pricing is locked for later. Nothing more.
- **No fabricated relationships.** A referral landing banner may say "someone shared this with you" but must not assert a named friend unless we genuinely have a verified name. The current `ref` slug is a hint, not consent to use someone's identity.
- **One performance claim only.** The founder's own 565 to 735 (100th percentile), framed as his result — never as a prediction for the friend. Already correct in all referral copy.
- **Opt-in email only.** The `founding-referral` and milestone refer emails go only to opted-in users, consent re-checked per send, one-click unsubscribe present. Do not enqueue referral emails to anyone outside the consent ledger.
- **No affiliation, no guarantees, no emojis.** Standing repo + compliance rules apply to every word added.
- **Don't pay before tracking is verified, and don't over-build before there's traffic.** Zero-traffic beta — measurement and copy clarity beat new machinery.

---

## 5. Prioritized next-steps checklist

### Claude can safely build in-app (additive, no schema, low risk)
1. **Create the `referral_signup` view.** Start with the filter-only version (Vercel Analytics: `signup` where `utm_source=referral`). Optionally add the explicit `referral_signup` event in `trackEvent`'s signup path. (Section 3.)
2. **Stamp a stable per-user `ref` into the in-app `InviteFriend` link** so in-app referral signups are attributable and de-duplicated, without building a full code system. (Sections 2.2, 3.)
3. **Add a dismiss / "remind me later" to `InviteFriend`** so active users aren't re-prompted every dashboard visit. (Section 2.1.)
4. **Add a subtle, dismissible, compliant referral landing banner** on `/` that reads `utm_source=referral`/`ref` and leads with the present-tense "free full access while in beta" benefit. Generic identity only. (Sections 2.3, 2.4.)
5. **Align friend-facing benefit ordering** in `InviteFriend` (and any new banner) to lead with free beta access, founding discount as the sweetener — matching `ReferralShare`. (Section 2.4.)
6. **Enqueue the existing `milestone-mock-review` and `milestone-progress` templates** (they exist but aren't enqueued) so post-value email refer nudges actually send — only to opted-in users. (Section 1d.)

### Needs Adam's product decision (document, do not force)
1. **In-app post-first-practice / onboarding referral prompt** — high intent but sits in the activation flow; risk of depressing the activation rate we most need to protect. Email already covers the moment. Adam's call. (Section 2.1.)
2. **Full per-user referral-code system** — persisted codes, claim/redeem UI at reserve time, auto-credit, reconciliation. Right v2 once paid plans turn on; over-engineering during a zero-revenue beta. (Section 2.2.)
3. **Payout mechanics for the $50** (cash vs. plan credit, when it triggers, how reconciled) — partly a finance/ops decision, tied to paywall go-live. Keep the manual ledger until then. (Sections 1d, 3.)
4. **Whether to keep mass-broadcast channels (X) prominent** vs. doubling down on personal DM channels, given the personal-not-broadcast guardrail. (Section 4.)
