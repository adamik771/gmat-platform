# Landing Page Fixes — Ad-Readiness Audit

Audit of every page proposed (or implied) as a paid-search destination, scored for ad-readiness before spending the first real budget on ZG-Search-Launch. Each page was fetched live on 2026-06-29. Scores are 1–10 (10 = send paid traffic today, no changes).

**How to read this.** At $7/day the account is volume-limited, not budget-limited — it had ~0 impressions on a single tight ad group after ~2 days. The job of these pages is not to "convert at the education benchmark"; it is to satisfy intent fast, fire `lead_captured` cheaply, and not trip a Misrepresentation flag. Education paid search is a favorable vertical (CTR 7.56%, CPC $4.81, CVR 13.14% medians) but those are medians of mature accounts blending Google + Microsoft Ads — a brand-new Google-Search-only account will start worse, so judge each page on intent-match and friction, not against $77 CPL [WordStream — Google Ads Benchmarks 2026, https://www.wordstream.com/blog/2026-google-ads-benchmarks, 2026-06-29].

**The single most load-bearing landing-page principle here:** message match. Google's own QS playbook says to make ad text mirror the search and keep "messaging consistent from ad to page," while explicitly noting the exact search phrase does NOT need to appear on the landing page — match intent, do not keyword-stuff [Google Ads Help — 5 ways to use Quality Score, https://support.google.com/google-ads/answer/6167130, 2026-06-29]. Higher real-time ad relevance + landing-page experience also buys lower CPCs and clears Ad Rank thresholds — which directly fixes the low-impression problem and stretches $7/day [Google Ads Help — About Ad Rank, https://support.google.com/google-ads/answer/1722122, 2026-06-29].

---

## Verdict table

| Page | Ad-ready score | Send paid traffic? | One-line reason |
|---|---|---|---|
| /error-log-template | 9/10 | **NOW — first ad traffic** | Lowest friction (no-account download), tightest intent, fires `lead_captured` directly |
| /gmat-practice-questions-free | 8/10 | **NOW** | High-volume intent, honest "original not official" framing, clean CTA |
| /gmat-private-beta | 7/10 | **NOW (product-intent terms only)** | Best for "gmat prep platform/app" intent; pricing claims need one guardrail check |
| /gmat-quant-practice | 7/10 | NOW (section terms) | Strong content + clean disclaimer; CTA is signup, not a download (higher friction) |
| /gmat-data-insights-practice | 7/10 | NOW (section terms) | Good DI intent match; same signup-friction note |
| /gmat-mock-review | 6/10 | LATER | "moves your score" headline is a claims risk; fix before spend |
| /gmat-study-plan | 6/10 | LATER | "That Actually Moves Your Score" headline is the sharpest claims risk on the site |
| /refer | 1/10 | **NEVER (paid search)** | Referral page; assumes an existing user, zero cold-traffic value prop |

**First ad traffic:** `/error-log-template`. **Likely best converter:** `/error-log-template` (free, no-account download = the cheapest, highest-volume `lead_captured` event, which is also the chosen primary optimization signal). **Too weak for paid traffic:** `/refer` (never).

---

## 1. /error-log-template  →  Score 9/10  →  SEND NOW (first ad traffic)

Primary ad target. This is the highest-intent, lowest-friction page on the site and the only one whose conversion needs no account.

**Verified current state (fetched 2026-06-29):** H1 "The GMAT error log template." Subheads explain the six-tag system, "the six causes behind every wrong answer," and "How to use it." Email form to send the template, with optional opt-in. Explicit "No credit card. No score promises." GMAC non-affiliation disclaimer present. Only performance claim: "565 to 735," attributed to Adam, with "no method can promise any specific result."

**Strengths**
- Frictionless conversion: account not required to get the template — this is exactly the low-friction micro-conversion Google's low-volume-account guidance says to optimize toward [Jellyfish — Tactics to Improve Smart Bidding for Low Conversion Businesses, https://www.jellyfish.com/en-gb/training/blog/tactics-to-improve-smart-bidding-for-low-conversion-businesses, 2026-06-29].
- One offer, one CTA — aligns with Google's "closely match your ad and keywords / make navigation quick toward the desired action" guidance [Google Ads Help — Optimize your ads and landing pages, https://support.google.com/google-ads/answer/6238826, 2026-06-29].
- Compliance is already clean: non-affiliation disclaimer present, "no score promises," founder result framed as his own — this avoids the Misrepresentation and False/unrealistic-claims tripwires [Google Ads Help — False, misleading, or unrealistic claims, https://support.google.com/adspolicy/answer/6086777, 2026-06-29].

**Weaknesses**
- A raw `Email me the template` honeypot label ("Do not fill this field…") is bleeding into the visible/extracted text — the hidden anti-spam field's label is rendering adjacent to the real input. Cosmetic, but on the page that will get the most paid clicks it should be visually clean. **Verify in a real browser** that the honeypot is `display:none` / off-screen and not visible to humans.
- Two CTA strings coexist: "Get the template" and "Start free in beta." The template grab is the page's job; the signup CTA competes with it. Keep the template the dominant, above-the-fold action.

**Exact edits before ads**
1. Confirm the honeypot field is fully hidden (CSS off-screen + `aria-hidden`/`tabindex=-1`); the visible form should show only the email input + button.
2. Make "Get the template" the single primary above-the-fold CTA; demote "Start free in beta" to a secondary link lower on the page.
3. Confirm the GA4 `lead_captured` event fires on template submit with `{source, lead_magnet}` params, and that this download path (no account) is the one wired — verify in DebugView before spend [Google Analytics Help — Monitor events in DebugView, https://support.google.com/analytics/answer/7201382, 2026-06-29].

**CTA recommendation:** "Get the error log template" (download/email), single primary, above the fold.

**Trust/compliance:** Clean. Keep "565→735" framed as Adam's own result and keep "no score promises." No edits needed for compliance.

**Send paid traffic:** NOW. This is the AG-Error-Log-Template destination and should receive first/most budget.

---

## 2. /gmat-practice-questions-free  →  Score 8/10  →  SEND NOW

The volume driver. "free gmat practice questions" is a high-intent, high-volume query family and the page handles the originality disclosure honestly.

**Verified current state:** H1 "Free GMAT Practice Questions, Built for the Focus Edition." Explicitly states: "These are original questions written to mirror the style, formats, and reasoning demands of the GMAT Focus Edition. They are not official GMAC questions." Two email forms (starter pack + error-log template). "We do not guarantee any score." GMAC non-affiliation disclaimer present.

**Strengths**
- The originality language is exactly right and pre-empts the single biggest claims risk for a question-bank advertiser: implying the questions are official GMAC content. This satisfies the "don't make it seem like you're affiliated… or imply unearned qualifications" rule [Google Ads Help — Unacceptable business practices (Misrepresentation), https://support.google.com/adspolicy/answer/15938071, 2026-06-29].
- "Built for the Focus Edition" is descriptive/nominative use of the mark — the allowed lane (prep FOR the exam, not the exam) [Google Ads Help — Trademark help for advertisers, https://support.google.com/adspolicy/answer/2562645, 2026-06-29].

**Weaknesses**
- Two competing lead magnets ("starter pack" + "error-log template") split intent. For a cold "free practice questions" searcher, the cleanest single offer is the questions themselves (Start free) OR the starter pack — not both.
- "Start free" routes to `/signup` (account required) — higher friction than the error-log page. The starter-pack email form is the lower-friction conversion and should be visually primary for paid clicks.

**Exact edits before ads**
1. Pick ONE primary lead magnet above the fold (recommend the no-account-feeling "starter pack" email form). Keep the second offer lower on the page.
2. Ensure the H1/above-the-fold copy restates the ad promise ("free GMAT practice questions") so message match is tight per ad group.
3. Keep the "original, not official" sentence above the fold or directly under the H1 — it is both a compliance asset and a trust asset; do not bury it.

**CTA recommendation:** Primary = "Get the free starter pack" (email, low friction). Secondary = "Start free" (signup).

**Trust/compliance:** Clean and notably strong on originality. No required compliance edits.

**Send paid traffic:** NOW (AG-Free-Practice). This is the best volume driver after the error-log page.

---

## 3. /gmat-private-beta  →  Score 7/10  →  SEND NOW (product-intent terms only)

The product pitch page — correct destination for "gmat prep platform / gmat prep app / gmat study app" intent (AG-Prep-Platform). Content-rich and honest, but it carries the most claim surface (pricing + founder result), so it needs one guardrail pass.

**Verified current state:** H1 "The GMAT private beta where your study plan is built from your real score, not a guess." Mentions 62 chapters, "1,900+ original practice questions," "565 to 735 (100th percentile on his official score report)," founding discount "roughly 30–40% locked in," planned tier "$599 … around $399 at founding rate," "Nothing is charged today and there is no obligation," referral "$50 when they join." Explicit: "What you should not expect: a promised score, a magic number, or a guarantee about how much you'll improve." GMAC non-affiliation disclaimer present.

**Strengths**
- The "what you should not expect" block is a model compliance move — it actively disclaims a guaranteed outcome, which is exactly what Google's claims policies require when score language is anywhere near the page [Google Ads Help — False, misleading, or unrealistic claims, https://support.google.com/adspolicy/answer/6086777, 2026-06-29].
- "Built from your real score, not a guess" is honest about the mba.com-baseline model and does NOT claim an in-app diagnostic — consistent with the product's no-fake-diagnostic rule.
- "1,900+ original practice questions" — approximate, original, non-affiliated. Correct framing.

**Weaknesses / compliance to verify**
- **Pricing claims = the one real risk here.** "$599 … around $399 founding rate" and "30–40% locked in" are forward-looking price claims on a product that is currently free and on Stripe test-mode only. This is honest as written, but ad copy pointing here must NOT add urgency/scarcity ("price rises soon," "limited spots") — that would manufacture false scarcity. Keep the page's "nothing is charged today, no obligation" prominent.
- **Headline length / clarity:** the H1 is long. Fine for the page, but the matching RSA headlines must stay descriptive and must not compress this into anything that reads as "official" or guaranteed.
- "Start free" is the CTA but the conversion is signup (account) — higher friction than the lead-magnet pages. Acceptable for product-intent searchers who are further down-funnel.

**Exact edits before ads**
1. Keep "Nothing is charged today and there is no obligation" visible near every pricing mention (it already appears — confirm it sits adjacent to the $599/$399 line, not only in a separate section).
2. Ensure no countdown/scarcity element is added to this page for the ad push. The founding-rate framing is fine as "reserve a rate"; it must not become "spots running out."
3. Confirm `signup` / `founding_reserve` events fire and are imported as **secondary** conversions (observation), with `lead_captured` primary [Google Ads Help — About primary and secondary conversion actions, https://support.google.com/google-ads/answer/11461796, 2026-06-29].

**CTA recommendation:** "Start free in the private beta" (signup). Keep the error-log template available as a secondary, lower-friction grab for visitors not ready to sign up.

**Trust/compliance:** Strong, with one watch item — pricing/founding language must never gain fake urgency, and ad copy must never read as "official." USER_ACTION_REQUIRED if the founding-price numbers ($599/$399, 30–40%) ever change: the page and any ad copy must stay in sync, and the "not charged today" disclaimer must remain.

**Send paid traffic:** NOW, but only from product-intent ad groups (prep platform/app/course). Do not point generic "free practice" terms here — those belong on pages 1–2.

---

## 4. /gmat-quant-practice  →  Score 7/10  →  SEND NOW (section terms)

Strong section page for "gmat quant practice" intent. Content-led, clean compliance, but its conversion is signup-shaped (more friction than a download).

**Verified current state:** H1 "GMAT Quant: Win on Strategy and Timing, Not on More Content." Method-led subheads (diagnose bottleneck, cheapest valid method, pacing triage, mixed timed sets, mocks). Two opt-in forms ("Quant error-log template and a sample chapter"; error-log template). "565 to 735 (100th percentile on my official report)." Explicit "We do not guarantee any score" and "there is no in-app diagnostic that estimates your score or readiness." GMAC disclaimer present.

**Strengths**
- "We do not guarantee any score" + "no in-app diagnostic" are both present — this page is compliance-clean and even pre-empts the fake-diagnostic risk.
- "Win on Strategy and Timing" is a method claim, not an outcome claim — safe. It does not promise a score, percentile, or improvement.
- The "Quant error-log template + sample chapter" offer is a genuine low-friction lead magnet — good for `lead_captured`.

**Weaknesses**
- "Start free" → `/signup` is the dominant CTA; the lower-friction email lead magnet (template + sample chapter) should be at least co-equal above the fold for paid clicks.
- Slightly content-heavy for a cold searcher; ensure the lead-capture form is reachable without deep scroll.

**Exact edits before ads**
1. Surface the "Quant error-log template + sample chapter" email form above the fold (or immediately under the H1) so paid clicks can convert without signing up.
2. Keep the H1 promise echoed in the matching RSA headlines (quant strategy/timing), not a generic "GMAT prep" line — preserves message match per [Google Ads Help — 5 ways to use Quality Score, https://support.google.com/google-ads/answer/6167130, 2026-06-29].

**CTA recommendation:** Co-primary: "Get the Quant template + sample chapter" (email) alongside "Start free." Lead with the email grab for cold traffic.

**Trust/compliance:** Clean. No required edits.

**Send paid traffic:** NOW for quant-section ad groups. Secondary priority behind pages 1–2 because the conversion is higher-friction.

---

## 5. /gmat-data-insights-practice  →  Score 7/10  →  SEND NOW (section terms)

Good destination for the under-served "gmat data insights / data sufficiency practice" intent. Mirrors the quant page's strengths and the same friction caveat.

**Verified current state:** H1 "GMAT Data Insights practice: master the five formats most students under-train." Method-led subheads (five DI formats, why DI is under-trained, a method not a question count, a one-week DI block). Two email forms. "565 → 735" (twice). GMAC non-affiliation disclaimer appears twice. Explicit "We do not guarantee any score."

**Strengths**
- "Master the five formats" is a content/skill claim, not a score outcome — compliant.
- Targets a low-competition, high-intent niche (DI is the newest Focus Edition section); good place for cheap, specific clicks.
- Disclaimer + "no score guarantee" both present.

**Weaknesses**
- Same honeypot-label bleed as the error-log page ("Do not fill this field…Send it to me") appearing in extracted text — verify the hidden field is not visible to humans.
- Two near-identical email forms; consolidate intent to one primary offer above the fold.
- "Start Free" routes to `/signup` (friction); lead with the email/template grab for cold DI searchers.

**Exact edits before ads**
1. Confirm the honeypot field is `display:none`/off-screen (same fix as page 1).
2. Make one DI-specific lead magnet primary above the fold; keep the second lower.
3. Echo "Data Insights / data sufficiency" in matching RSA headlines for message match.

**CTA recommendation:** Primary = "Get the DI practice guide / template" (email). Secondary = "Start free."

**Trust/compliance:** Clean. No required compliance edits beyond the cosmetic honeypot check.

**Send paid traffic:** NOW for DI-section ad groups (lower volume, but cheap and specific).

---

## 6. /gmat-mock-review  →  Score 6/10  →  SEND LATER (fix headline first)

Good content, but the H1 carries a score-outcome implication that should be softened before paid spend.

**Verified current state:** H1 "How to Review a GMAT Mock Exam (the part that actually moves your score)." Method subheads (sort misses into causes, review lucky-right answers, read timing as behavior, mock-to-mock trends, turn review into a plan). Two email forms (mock-review checklist + error-log template), "One email. No spam. Unsubscribe with one click." "565-to-735… 100th percentile on his official GMAT Focus report." Explicit: "We don't make score-guarantee or typical-result claims, because honest prep can't promise a specific number for any individual." GMAC disclaimer in footer.

**Strengths**
- The body has an explicit, well-worded no-guarantee statement — strong compliance posture in the content.
- "Mock review checklist" is a clean, specific lead magnet for mock-intent searchers.
- Method-led framing (causes, timing behavior, trends) is genuinely useful and original.

**Weaknesses / compliance**
- **"the part that actually moves your score" in the H1 is the problem.** Even parenthetical, it implies an outcome ("moves your score"). Google's policy bars "unrealistic claims… suggesting results that are improbable or cannot be guaranteed — even if technically possible but not typical" [Google Ads Help — False, misleading, or unrealistic claims, https://support.google.com/adspolicy/answer/6086777, 2026-06-29]. The body disclaims guarantees, but the H1 a paid clicker lands on still asserts a score effect. On a page receiving paid traffic, the headline is the highest-scrutiny surface.
- Two email forms split intent.
- "Start free" → signup (friction).

**Exact edits before ads**
1. **Reword the H1** to a method/behavior claim, not a score claim. E.g. "How to Review a GMAT Mock Exam — the review step most people skip" or "How to Turn a GMAT Mock Into a Study Plan." Remove "moves your score."
2. Keep the body no-guarantee line; surface it nearer the top.
3. Make the mock-review checklist the single primary lead magnet above the fold.

**CTA recommendation:** "Get the mock-review checklist" (email), single primary.

**Trust/compliance:** Body is compliant; the H1 is the one claims risk. Must fix the headline before any paid traffic.

**Send paid traffic:** LATER — only after the H1 is reworded. Then promote to NOW for mock-review intent.

---

## 7. /gmat-study-plan  →  Score 6/10  →  SEND LATER (fix headline first)

The sharpest claims risk on the site sits in this H1, despite otherwise excellent, honest content.

**Verified current state:** H1 "How to Build a GMAT Study Plan That Actually Moves Your Score." Subheads (real baseline not a guess, rank weak areas by score impact, spaced review, error log with categories, re-measure with full-lengths). Two email forms (weak-area + spaced-review worksheet; error-log template). "565 to a 735 (100th percentile on his official report)," "non-native English speaker," and an explicit disclaimer that this "is not a prediction of what any other student will score." GMAC non-affiliation disclaimer present. CTA "Start free."

**Strengths**
- Excellent, specific, non-generic method content (baseline-first, impact-ranked, spaced review) — exactly the "useful, original content" Google rewards [Google Ads Help — Optimize your ads and landing pages, https://support.google.com/google-ads/answer/6238826, 2026-06-29].
- Strong explicit disclaimer in the body ("not a prediction of what any other student will score").
- "Built from a real baseline, not a guess" reinforces the honest, no-fake-diagnostic positioning.

**Weaknesses / compliance**
- **"That Actually Moves Your Score" is a direct outcome claim in the H1.** This is the most explicit score-effect headline on the site. The body disclaimer does not neutralize the headline a paid clicker reads first. This must be reworded before this page receives paid clicks, on the same policy basis as page 6 [Google Ads Help — False, misleading, or unrealistic claims, https://support.google.com/adspolicy/answer/6086777, 2026-06-29].
- Two email forms split intent.
- "Start free" → signup (friction) rather than a download.

**Exact edits before ads**
1. **Reword the H1** to a method claim. E.g. "How to Build a GMAT Study Plan Around Your Own Baseline" or "How to Build a GMAT Study Plan That Targets Your Weak Areas." Remove "Actually Moves Your Score."
2. Make the "Weak-Area + Spaced-Review Worksheet" the single primary lead magnet above the fold (it is the most on-theme grab for study-plan searchers).
3. Keep the "not a prediction of what any other student will score" line and surface it higher.

**CTA recommendation:** "Get the weak-area + spaced-review worksheet" (email), single primary.

**Trust/compliance:** Body compliant; H1 is the top claims risk on the site. Must fix before paid traffic.

**Send paid traffic:** LATER — after H1 reword. This is a high-volume study-plan intent page (AG-Study-Plan) and should become a NOW destination as soon as the headline is fixed; until then, point AG-Study-Plan at a compliant page or hold the group.

---

## 8. /refer  →  Score 1/10  →  NEVER (for paid search)

**Verified current state:** H1 "Know someone prepping for the GMAT?" Subheads "Share it / They join / You get $50." Primary link "Reserve your own founding access." A share toolkit (name field, pre-populated editable share message) plus an email opt-in. The page assumes the visitor is already a user/beta participant; it offers no product value proposition to a cold prospect.

**Why never for paid search**
- It is a sharing/advocacy page, not an acquisition page. A cold searcher who clicks an ad and lands here is asked to refer a friend to a product they have not seen — there is no offer that matches any search intent we'd bid on. This is a guaranteed bounce and wasted spend, and it would drag landing-page-experience signals down [Google Ads Help — Optimize your ads and landing pages, https://support.google.com/google-ads/answer/6238826, 2026-06-29].
- The "$50 when they join" mechanic is fine for existing users but reads as an incentive-to-recruit to a stranger — poor message match for any GMAT-prep query.
- It is explicitly designated NOT a paid-traffic target in the plan, and this audit confirms it.

**Exact edits before ads:** None — do not advertise this page. (It is fine as an internal/email/onboarding share surface for existing users.)

**CTA recommendation:** N/A for paid. Keep it as an organic/in-app/email share page.

**Trust/compliance:** No score-claim risk (only the founder "565→735" credibility line). The issue is fit, not compliance.

**Send paid traffic:** **NEVER.** Add `/refer` (and any `?ref=` variants) to a campaign-level negative/exclusion mindset so no ad ever points here.

---

## Cross-page actions before any meaningful spend

1. **Fix the two score-headline pages first (mock-review, study-plan).** These are the only two compliance blockers in the set. Until reworded, do not send AG-Study-Plan or mock-intent traffic to them; both bodies are fine, only the H1s assert outcomes [Google Ads Help — False, misleading, or unrealistic claims, https://support.google.com/adspolicy/answer/6086777, 2026-06-29].
2. **One offer, one primary CTA per page.** Several pages run two near-identical email forms; pick the most on-theme lead magnet as the single above-the-fold primary, demote the rest. This is the "one offer / consistent messaging ad→page" guidance and it sharpens `lead_captured` rate [Google Ads Help — 5 ways to use Quality Score, https://support.google.com/google-ads/answer/6167130, 2026-06-29].
3. **Lead with the lowest-friction conversion.** Where "Start free" (signup) competes with an email/template grab, make the email grab visually primary for cold paid clicks — the no-account `/error-log-template` is the model. `lead_captured` is the cheapest, highest-volume signal and the chosen primary conversion [Jellyfish — Tactics to Improve Smart Bidding for Low Conversion Businesses, https://www.jellyfish.com/en-gb/training/blog/tactics-to-improve-smart-bidding-for-low-conversion-businesses, 2026-06-29].
4. **Verify the honeypot field is invisible** on every form page (it is bleeding into extracted text on at least /error-log-template and /gmat-data-insights-practice). Cosmetic, but it sits on the highest-traffic pages. **Verify in a real rendered browser**, not just the HTML.
5. **Confirm message match per ad group.** Each ad group's RSA headlines must echo that page's H1 promise (error-log → error-log page H1; DI → DI page H1). Do not keyword-stuff the page body — thematic relevance is enough, and the exact phrase is not required on the page [Google Ads Help — 5 ways to use Quality Score, https://support.google.com/google-ads/answer/6167130, 2026-06-29].
6. **Confirm sub-3s mobile load** on the paid pages (especially /error-log-template) via PageSpeed Insights; heavy chapter/interactive assets must not bloat these lead-magnet pages [Think with Google / Google-SOASTA, https://www.thinkwithgoogle.com/intl/en-emea/marketing-strategies/app-and-mobile/find-out-how-you-stack-new-industry-benchmarks-mobile-page-speed/, 2026-06-29]. **USER_ACTION_REQUIRED** (needs the live site / PageSpeed run).
7. **Verify conversion wiring before spend.** Mark `lead_captured` (primary), `signup`/`founding_reserve` (secondary) as GA4 key events, import to Google Ads, and confirm with DebugView + Tag Assistant that events and `{source, lead_magnet, UTM}` params fire and the gclid is not stripped on Vercel redirects [Google Ads Help — Import Google Analytics conversions, https://support.google.com/google-ads/answer/2375435, 2026-06-29; Google Analytics Help — DebugView, https://support.google.com/analytics/answer/7201382, 2026-06-29]. **USER_ACTION_REQUIRED** (needs GA4 + Ads dashboard login).

## Final routing decision

- **First ad traffic → /error-log-template** (9/10): tightest intent, no-account conversion, fires the primary signal directly.
- **Likely best converter → /error-log-template**, because the conversion is a frictionless free download (no signup wall) — expect a higher `lead_captured` rate than any signup-gated page.
- **Strong NOW companions → /gmat-practice-questions-free (8) and /gmat-private-beta (7, product terms only).**
- **NOW with a friction caveat → /gmat-quant-practice (7) and /gmat-data-insights-practice (7)** (section terms; lead with the email grab, not signup).
- **LATER (fix the score-claim H1 first) → /gmat-mock-review (6) and /gmat-study-plan (6).**
- **Too weak / NEVER for paid search → /refer (1).**
