# Conversion Tracking Plan — Zakarian GMAT (Google Ads + GA4)

Scope: how conversions are wired today, what to import into Google Ads, which event is PRIMARY vs SECONDARY, what to optimize for at $7/day, how to test events before spending, and how to debug when conversions do not appear. Ground truth: this is a free private beta (Stripe test-mode only, no charging), $7/day Search-only campaign, near-zero impressions so far, on "Maximize clicks" with a max-CPC cap. Tracking is already live and verified this session.

This plan is decision-support. Anything requiring a login to GA4, Google Ads, or Vercel is marked USER_ACTION_REQUIRED.

---

## 1. GA4 setup (LIVE — documented for reference)

Verified this session, do not rebuild:

- GA4 property "Zakarian GMAT" is live. `NEXT_PUBLIC_GOOGLE_TAG_ID` is set in Vercel and the Google tag (gtag.js) loads site-wide. The single shared Google tag is the correct approach here — because GA4 events are imported into Ads (not hand-coded per-page conversion snippets), the only hard requirement is that the tag loads on every route, which it does, including the no-account `/error-log-template` page [Google Ads Help — Use the Google tag for conversion tracking, https://support.google.com/google-ads/answer/7548399?hl=en, 2026-06-29].
- Funnel events fire and are confirmed in GA4 Realtime:
  - `landing_view` { page }
  - `lead_captured` { source, lead_magnet } — CONFIRMED firing
  - `signup`
  - `signup_initiated`
  - `founding_reserve`
  - `pricing_view`
  - `referral_click`
- First-touch UTM attribution is auto-merged into every event (so each conversion carries its originating campaign/source).
- `checkout_initiated` / `purchase_completed` are wired but dormant (free beta, no charging). Leave them dormant — there is no conversion value to optimize toward, so Target ROAS is structurally inapplicable during the beta [Google Ads Help — About Target ROAS bidding, https://support.google.com/google-ads/answer/6268637?hl=en, 2026-06-29].
- GA4 is LINKED to the Google Ads account (auto-tagging on; audiences + metrics import on). Vercel Web Analytics is also on. Meta pixel is dormant.

What is NOT in GA4 yet and is the one open setup item: the events above must be explicitly marked as **key events** in GA4 before Google Ads can import them as conversions (see Section 2). Firing in Realtime is necessary but not sufficient — import requires the key-event flag [Google Ads Help — Import Google Analytics conversions, https://support.google.com/google-ads/answer/2375435?hl=en, 2026-06-29].

---

## 2. Google Ads conversion setup (import GA4 conversions)

The GA4 <-> Ads link is already done, which satisfies the main prerequisite. Remaining prerequisites and steps for the GA4-event import path:

Prerequisites [Google Ads Help — Import Google Analytics conversions, https://support.google.com/google-ads/answer/2375435?hl=en, 2026-06-29]:
- Ads and Analytics accounts linked — DONE.
- Auto-tagging enabled — should be on as part of the link; verify (Section 5).
- The event is marked as a **key event** in GA4 — OPEN ITEM.
- At least Marketer access in Analytics.
- The GCLID must not be stripped by redirects (Vercel routing risk — verify in Section 5).
- Note: imported conversion data can take **up to 24 hours** to appear in Google Ads. This delay is the reason imported conversions cannot drive fast learning at $7/day, and is a normal "missing data" cause, not a bug (Section 5).

USER_ACTION_REQUIRED — in GA4 (Admin > Events / Key events): mark `lead_captured` as a key event first, then `signup` and `founding_reserve`. Confirm you have at least Marketer access on the property.

USER_ACTION_REQUIRED — in Google Ads (Goals > Conversions > New conversion action > Import > Google Analytics 4 properties > Web): import the three key events listed below. Set their Primary/Secondary classification per Section 3.

USER_ACTION_REQUIRED — after import, run Tag Assistant on the live domain and on `/error-log-template` to confirm the Google tag fires site-wide and each imported action is healthy. A correctly verified action with no clicks yet will read "No recent conversions" and flip to "Recording" once real conversions occur — that is the expected healthy state at zero spend, not an error [Google Ads Help — Use Tag Assistant to troubleshoot conversion actions, https://support.google.com/google-ads/answer/10989978?hl=en, 2026-06-29].

### Which events to import

Import only the three that represent a real acquisition action. Do NOT import `landing_view`, `pricing_view`, `referral_click`, `signup_initiated`, or the dormant checkout/purchase events as conversions — they are funnel-diagnostic or revenue events with no value during the beta and would dilute the conversion picture.

| GA4 event | Import as conversion? | Role |
|---|---|---|
| `lead_captured` { source, lead_magnet } | Yes | PRIMARY |
| `signup` | Yes | SECONDARY |
| `founding_reserve` | Yes | SECONDARY |
| `landing_view`, `pricing_view`, `referral_click`, `signup_initiated` | No | Keep in GA4 for funnel analysis only |
| `checkout_initiated`, `purchase_completed` | No | Dormant — no value in free beta |

---

## 3. PRIMARY vs SECONDARY classification

- **PRIMARY: `lead_captured`.** It is the cheapest, highest-volume, lowest-friction signal — especially the `/error-log-template` CSV download, which needs no account. It is the only event that can realistically produce enough volume to matter on this budget [Jellyfish — Tactics to Improve Smart Bidding for Low Conversion Businesses, https://www.jellyfish.com/en-gb/training/blog/tactics-to-improve-smart-bidding-for-low-conversion-businesses, 2026-06-29].
- **SECONDARY: `signup` and `founding_reserve`.** Keep these as secondary for funnel diagnosis (how many leads turn into accounts / founding reservations).

Why classification matters even though bidding is manual right now: Primary actions report in the "Conversions" column and are what Smart Bidding would optimize toward later; secondary actions report only in "All conversions" and are observational (unless attached to a custom goal) [Google Ads Help — About primary and secondary conversion actions, https://support.google.com/google-ads/answer/11461796?hl=en, 2026-06-29]. Setting this correctly now means the data is ready the day you graduate to conversion bidding — no rework.

Caveat on `lead_captured` as primary: optimizing purely toward a free download can buy cheap, low-quality leads. That is acceptable for the current learning phase (we want volume + cost signal), but revisit whether `signup` should become primary once volume supports conversion bidding [Jellyfish, https://www.jellyfish.com/en-gb/training/blog/tactics-to-improve-smart-bidding-for-low-conversion-businesses, 2026-06-29].

---

## 4. What to optimize for initially

**Stay on "Maximize clicks" with the max-CPC cap. Do NOT switch to Maximize Conversions / Target CPA / Target ROAS yet.** Use the imported conversions for observation only.

Reasoning, grounded in this account's state:

- Google itself recommends a brand-new campaign with no conversion history start on Maximize Clicks to build traffic and data first, and have a baseline of at least 15 conversions in the last 30 days before applying Maximize Conversions [Google Ads Help — About Maximize conversions bidding, https://support.google.com/google-ads/answer/7381968?hl=en, 2026-06-29].
- Target CPA wants ~30 conversions in the last 30 days to evaluate; Target ROAS wants 15/30 days AND a conversion value (which the free beta has none of) [Google Ads Help — About Target CPA bidding, https://support.google.com/google-ads/answer/6268632?hl=en, 2026-06-29; Google Ads Help — About Target ROAS bidding, https://support.google.com/google-ads/answer/6268637?hl=en, 2026-06-29].
- The Smart Bidding learning period can take up to ~50 conversion events / 3 cycles to calibrate. At $7/day a paid-goal account would essentially never exit learning, spending the tiny budget mostly on volatile "learning" [Google Ads Help — Duration of the learning period, https://support.google.com/google-ads/answer/13020501?hl=en, 2026-06-29].
- The 24h import lag (Section 2) means conversion signal arrives too slowly to steer fast automated bidding at this volume anyway.

Practical optimization at $7/day:
- Optimize manually toward **`lead_captured` volume and cost-per-lead**, concentrating budget on the highest-intent ad groups (`AG-Error-Log-Template`, `AG-Free-Practice`) rather than spreading thin across all groups, so the budget buys more usable signal [Jellyfish, https://www.jellyfish.com/en-gb/training/blog/tactics-to-improve-smart-bidding-for-low-conversion-businesses, 2026-06-29].
- Read the funnel directionally (impressions -> clicks -> `lead_captured`), not as a statistical A/B verdict. At this volume conversion-rate significance is unreachable (you would need ~100-1,600 conversions per variant) [Growth Spree — Google Ads Experiments / statistical significance, https://www.growthspreeofficial.com/blogs/google-ads-experiments-b2b-saas-statistical-significance-methodology, 2026-06-29].
- Trigger to graduate: once `lead_captured` reliably produces ~15+ events in a trailing 30 days at the campaign level, test Maximize Conversions (optimizing `lead_captured`); consider Target CPA only near ~30/30 days. Until then, the imported conversions just accrue history so the algorithm has something to learn from later [Google Ads Help — About Maximize conversions bidding, https://support.google.com/google-ads/answer/7381968?hl=en, 2026-06-29].
- When you do switch, expect ~1-2 weeks of volatility and avoid further bid/budget/keyword edits during the window — those can reset learning [Google Ads Help — Duration of the learning period, https://support.google.com/google-ads/answer/13020501?hl=en, 2026-06-29].

Do NOT promise a specific cost-per-lead internally. The WordStream/LocaliQ Education benchmark CPL of $77.48 is a sales-qualified lead for paying education businesses; a free CSV download should cost far less per event, but the two are not the same thing — measure your own cost-per-`lead_captured` by ad group and ignore the absolute $77 [WordStream — Google Ads Benchmarks 2026, https://www.wordstream.com/blog/2026-google-ads-benchmarks, 2026-05-19].

---

## 5. How to test events (before meaningful spend)

Do this verification before/while raising spend, so you are confident the signal chain (event fires -> key event -> imported -> attributed) is intact.

### 5a. GA4 Realtime + DebugView (confirm the event AND its parameters)
USER_ACTION_REQUIRED — log in to GA4:
1. Enable debug mode on the live site (Tag Assistant / GA Debugger extension, or load with `?debug_mode=true` if wired) [Google Analytics Help — Monitor events in DebugView, https://support.google.com/analytics/answer/7201382?hl=en, 2026-06-29].
2. Admin > Data display > DebugView, then on the live site **submit a real test lead** on `/error-log-template` (download the error-log CSV).
3. In DebugView, click the `lead_captured` event and confirm its parameters are attached: `source`, `lead_magnet`, and the first-touch UTM values. Realtime's "Event count by Event name" / "Key events by Event name" cards (last 30 min) are a second confirmation.
4. Note: marking a new key event can take 24-48h to surface in GA4 standard reports even though DebugView/Realtime show it instantly — judge the test by DebugView/Realtime, not standard reports.

To exercise the secondary events, repeat with a test `signup` and a test `founding_reserve`, confirming each lands in DebugView.

### 5b. Google Ads Tag Assistant (confirm import + tag health)
USER_ACTION_REQUIRED — log in to Google Ads:
1. Goals > Conversions > Diagnostics / Troubleshoot, launch Tag Assistant, connect a landing-page URL (use `/error-log-template`), trigger the lead while it monitors, and review which tags fired / failed / duplicated [Google Ads Help — Use Tag Assistant to troubleshoot conversion actions, https://support.google.com/google-ads/answer/10989978?hl=en, 2026-06-29].
2. Confirm the Google tag is present on every page via tagassistant.google.com (Add domain) [Google Ads Help — Use the Google tag, https://support.google.com/google-ads/answer/7548399?hl=en, 2026-06-29].
3. Expected healthy state at zero spend: imported actions read "No recent conversions" / "Recording," not "Tag inactive." Because conversions are imported from GA4, do not expect a native per-page event snippet — sitewide tag load is what matters.

### 5c. End-to-end GCLID check
Click one of your own live ads (or append a test `?gclid=...`-style Google click) and confirm the click lands on the destination page with the GCLID intact after any Vercel redirects, then completes a `lead_captured`. A stripped GCLID is the single most common reason an imported conversion never ties back to a click (Section 6).

---

## 6. Debugging — conversions fire in GA4 but do not show in Google Ads

Work down this list; the first three are the usual culprits for this stack.

1. **Import lag (most common, not a bug).** GA4-imported conversions can take **up to 24 hours** to appear in Google Ads. Wait a full day before concluding anything is broken [Google Ads Help — Import Google Analytics conversions, https://support.google.com/google-ads/answer/2375435?hl=en, 2026-06-29].
2. **Event not marked as a key event in GA4.** If the event fires in Realtime but never imports, confirm it is flagged as a key event in GA4 — the import only sees key events [Google Ads Help — Import Google Analytics conversions, https://support.google.com/google-ads/answer/2375435?hl=en, 2026-06-29]. USER_ACTION_REQUIRED to set.
3. **GCLID stripped by a redirect.** If GA4 shows the conversion but Google Ads shows zero, the click identifier was likely lost between the ad click and the conversion. Verify auto-tagging is on and that Vercel routing/redirects (www-canonical redirect, `/gmat-error-log-template` -> `/error-log-template` alias, trailing-slash rewrites) preserve `?gclid=` end to end [Google Ads Help — Import Google Analytics conversions, https://support.google.com/google-ads/answer/2375435?hl=en, 2026-06-29]. This is the highest-probability silent failure given the alias and canonical redirects in place.
4. **Ad blockers / privacy tooling.** Some visitors block gtag, so a fraction of real conversions simply never register. This caps measured totals slightly and is unfixable from the ad side — do not chase a "missing" few percent. Verify with your own un-blocked browser via Tag Assistant (5b).
5. **Consent / region.** If a consent banner or consent-mode gating prevents the tag from firing until opt-in (or for certain regions), conversions can be under-reported. Confirm the tag fires for a normal US/CA/UK/AU visitor (the campaign's targeted locations) and that consent settings are not silently blocking measurement.
6. **Attribution window / model.** A conversion only attributes to an ad if it falls inside the click-through conversion window and the click is attributable under the model. A lead that happens days after the click, or via a different device/browser, may attribute differently than expected. Check the conversion action's window settings before assuming data loss.
7. **Tag not on the conversion page / inactive action.** Re-run Tag Assistant (5b) to confirm the Google tag loads on the specific page and the imported action is not in "Tag inactive / Needs attention" [Google Ads Help — Use Tag Assistant to troubleshoot conversion actions, https://support.google.com/google-ads/answer/10989978?hl=en, 2026-06-29].
8. **No clicks yet (the trivial case).** With near-zero impressions/spend so far, "no conversions in Google Ads" can simply mean no ad clicks have produced a lead yet. Confirm there were qualifying ad clicks before treating it as a tracking fault.

---

## Quick reference

- GA4: live; events firing; mark `lead_captured`, `signup`, `founding_reserve` as key events (open item).
- Ads: GA4 link done; import those three; `lead_captured` = PRIMARY, `signup` + `founding_reserve` = SECONDARY.
- Optimize: stay on Maximize Clicks + max-CPC cap; observe `lead_captured` volume/cost; graduate to Maximize Conversions only at ~15+ `lead_captured`/30 days.
- Test: GA4 DebugView (event + params), submit a test lead on `/error-log-template`; Ads Tag Assistant; verify GCLID survives Vercel redirects.
- Debug order: import lag (24h) -> key-event flag -> GCLID stripping -> ad blocker/consent -> attribution window -> tag presence -> no clicks yet.
