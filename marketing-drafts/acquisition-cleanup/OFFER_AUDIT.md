# Public Offer Audit — Acquisition Cleanup (2026-07-13)

Scope: make every public surface carry ONE offer — **"7-day full-access GMAT prep trial. No credit card. Then choose a paid plan."** — ahead of low-cost acquisition and Google Ads. Driven by the Deep Research report (`~/Downloads/deep-research-report (2).md`) and a full claim scan of the repo.

Verified ground truth this audit is written against (code, not copy):
- `PAYWALL_ENABLED=false` in prod → plans are **visible but not purchasable**; every account gets full access; the 7-day trial clock is stamped at signup (`trial_started_at`) and enforcement is dormant.
- Signup asks name/email/password only → "no credit card required" is TRUE.
- The error-log template downloads after an email form (LeadCapture) → "no account" is true, "no email" would be false.
- `src/lib/site.ts` floors the public counts: `QUESTION_CLAIM` = "1,900+" (live bank ~1,933+), `CHAPTER_COUNT_CLAIM` = "50+" (live 62).

## Final approved public offer wording

Primary (hero/CTA surfaces):
> **Free 7-day full-access trial. No credit card. After the trial, access continues with a one-time paid plan (no subscription).**

Standard supporting lines:
- Trial contents: "every chapter, the full question bank, mock exams, error log, spaced review, analytics — the whole product, no locked trial tier."
- Pricing-page status (while `PAYWALL_ENABLED=false`): "Paid checkout hasn't opened yet; the plans below show exactly what each tier costs when it does."
- Founding discount (down-funnel only): "30–40% off the listed plan prices, locked in for when **checkout opens**" — never "when paid plans launch" (the plans are already published; only checkout is pending).
- Error-log template: "Free spreadsheet — no account, no card, **just your email**."
- Founder result framing: always "the founder's own result (565 → 735, 100th percentile on his official score report); results vary — no score promises." Never a user guarantee.

## Findings and actions

| # | Claim / problem | File(s) | Action taken |
|---|---|---|---|
| 1 | Founding-discount block rendered on the **homepage** — founding was a main cold-traffic CTA competing with the trial | `src/app/(marketing)/page.tsx` | **Removed** from homepage (import + render). Founding block now exists only on `/pricing` (`#founding`), i.e. down-funnel. |
| 2 | FoundingOffer copy said discounts are "locked in for **when paid plans launch**" while `/pricing` displays live prices — the report's "offer feels unstable" contradiction | `src/components/marketing/FoundingOffer.tsx` | Reworded to checkout framing: "Paid checkout isn't open yet… 30–40% off the plan prices above, locked in for when checkout opens." All LeadCapture strings updated the same way. |
| 3 | Pricing banner ("Early access… plans below are how pricing works as they roll out") left plans-vs-purchasable ambiguous | `src/app/(marketing)/pricing/page.tsx` | Rewritten: trial first, then "Paid checkout hasn't opened yet; the plans below show exactly what each tier costs when it does — one-time payments, not subscriptions." |
| 4 | Report flagged Self-Study *appearing* to include WhatsApp/coaching. Root cause: excluded features are only *visually* dimmed (X icon); text extraction/scrapers/screen readers read them as plain list items | `src/components/marketing/PricingCard.tsx` | Added `sr-only` "Not included: " prefix on excluded features. Data itself (`src/lib/plans.ts`) was already correct — Self-Study excludes both. Homepage pricing preview also verified correct. |
| 5 | `/gmat-private-beta` — stale "private beta" slug + founding-reservation page as an acquisition landing page | `src/app/(marketing)/gmat-private-beta/page.tsx` (deleted), `next.config.ts`, `src/app/sitemap.ts` | **Deleted**; permanent redirect `/gmat-private-beta → /gmat-free-trial`; sitemap entry swapped. |
| 6 | No clean bottom-funnel trial page for commercial-intent/paid traffic (report's #1 code prerequisite) | `src/app/(marketing)/gmat-free-trial/page.tsx` (new) | Built on `AcquisitionLanding`: one offer, hero chips, honest "what happens after the trial" (branches on `PAYWALL_ENABLED`), no founding language, no diagnostic claims, no guarantees, GMAC disclaimer inherited, error-log template as the secondary lead capture. |
| 7 | Cold SEO page pitched founding pricing ($399/$599 + referral $50) inside the "is it free" FAQ | `src/app/(marketing)/gmat-quant-practice/page.tsx` | Founding pitch removed; answer now: trial → one-time plan, prices on /pricing; free tools listed. |
| 8 | **Broken lead-magnet promises**: pages promised emailed assets that don't exist / aren't delivered (`newsletter` magnet delivers nothing): study-plan "one-page worksheet", quant "sample chapter by email", DI "drill checklist", mock-review "one-page checklist" | `gmat-study-plan`, `gmat-quant-practice`, `gmat-data-insights-practice`, `gmat-mock-review` pages | All four switched to the real `error-log-template` magnet (instant download) with copy that promises only what's delivered. |
| 9 | "No signup required" on error-log template promos while the download requires an email | homepage lead block, `src/components/shared/Footer.tsx` | Changed to "No account needed — just your email." The `/error-log-template` + `/gmat-error-log-template` pages already said "no account… enter your email" and were left as-is. |
| 10 | Signup page said "Full access. No credit card needed." — implied free-forever, didn't name the trial | `src/app/(auth)/signup/page.tsx` | Now "Free 7-day full-access trial. No credit card needed." (form + fallback). |
| 11 | Referral surfaces framed the *friend's* benefit as founding-first and used "when paid plans launch" | `refer/page.tsx`, `ReferralShare.tsx`, `InviteFriend.tsx` | Reframed friend-side to the trial first; founding discount kept as the secondary mechanic with "when checkout opens" wording; `/refer` final CTA repointed `/#founding → /pricing#founding` (homepage anchor no longer exists). Reward mechanics ($50, manual tracking) unchanged. |
| 12 | FAQ "when paid plans open" phrasing | `faq/page.tsx` | → "when paid checkout opens" (consistency with the new framing). |
| 13 | **Publicly distributed CSV** carried "Free while it is in private beta" | `public/downloads/zakarian-gmat-error-log-template.csv` (row 38 CTA) | → "Every new account starts with a free 7-day full-access trial, no card." CSV shape verified intact (38 rows × 13 cols). |
| 14 | Ad copy bank full of "Free During (Private) Beta", "Join The Private Beta", "Reserve Founding Access" headlines, `/gmat-private-beta` URLs, and hardcoded "62 chapters" | `marketing-drafts/automated-acquisition/AD_COPY_BANK.md` | Full reframe to "Free 7-Day Trial / Free 7-day full-access trial, no card"; founding removed from cold ad groups (kept ONLY in the warm pricing-retargeting ad, which is late-funnel by definition); URLs → `/gmat-free-trial`; counts floored to "50+ chapters". |
| 15 | Google Ads launch docs: RSA CSV headlines/descriptions with beta + founding claims, keywords/landing map pointing at `/gmat-private-beta`, ad group 6 optimizing to `founding_reserve` | `google-ads-launch/ADS.csv`, `KEYWORDS.csv`, `LANDING_PAGE_MAP.md`, `CAMPAIGN_STRUCTURE.md`, `UTM_TEMPLATE.md`, `NEGATIVE_KEYWORDS.csv`, `BUDGET_PLAN.md`, `7_DAY_OPTIMIZATION_PLAN.md` | Beta claims → trial claims (all headlines ≤30 chars, descriptions ≤90, CSV parse-verified 23 cols); prep-platform ad group now lands on `/gmat-free-trial` and optimizes to `signup`; founding demoted to a secondary event. |
| 16 | Question-count claim: report suggested reconciling "1,900+" vs the in-app live count (~1,979) | — | **No change.** Standing owner decision (2026-06-16): floor-style "1,900+" via the shared `QUESTION_CLAIM` constant so marketing never overstates and never contradicts the (higher) live in-app numbers. Same for "50+ chapters". |
| 17 | No-fake-diagnostic / no-guarantee / no-GMAC-affiliation checks | all public pages | Verified intact: no diagnostic claims anywhere (redirects `/diagnostic`, `/free-diagnostic` in place), every founder-result mention is framed as founder-only with explicit "no promises", GMAC disclaimers present site-wide (footer + landing pages). Founder "100th percentile" kept per owner decision (backed by official score report). |

## Where founding-discount language still exists (intentionally, late-stage only)

- `/pricing` `#founding` block (below the plans; hidden the moment `PAYWALL_ENABLED=true`).
- `ReserveInterceptButton` reveal on pricing cards (shown only after a buy-intent click).
- Signup drip day 5 (`signup-founding`) and error-log drip day 8 (`errorlog-founding`) emails — consent-gated, behaviorally late.
- Referral mechanics (friend's founding rate + $50 reward) on `/refer`, `InviteFriend`, `ReferralShare` — peer-to-peer, not cold.
- Warm retargeting ad for pricing-page visitors in `AD_COPY_BANK.md`.

## Remaining risks / owner decisions

1. **Google search snippets** will keep showing "private beta" text until Google recrawls. The 308 redirect + updated sitemap handle it; optionally request reindexing of `/gmat-free-trial` and the homepage in Search Console.
2. **Google Ads console** still holds the paused campaign whose ads/keywords predate this cleanup. Before any relaunch: rebuild from the updated `ADS.csv`/`KEYWORDS.csv`, and finish the conversion import (GA4 `signup` as the sole primary conversion — per the 2026-07-08 audit plan). The live ad that lands on `/error-log-template` is honest as-is (that page was already truthful).
3. **"50+ chapters" vs "60+ chapters"**: the brief suggested "60+" as an example; the repo's standing rule (owner decision, PR #526) floors to "50+". Left at "50+" — flipping to "60+" is a one-line change in `src/lib/site.ts` (`CHAPTER_COUNT_CLAIM`) if preferred; 62 chapters exist so both are truthful.
4. **Pre-launch over-delivery**: while `PAYWALL_ENABLED=false`, copy promises 7 days and delivers more (access isn't cut off). This is stated honestly in the FAQ and on `/gmat-free-trial`. When the paywall flips, the `PAYWALL_ENABLED=true` copy branches take over automatically — no copy debt.
5. **Founding reservation vs live prices**: the reframed wording ("discount on the prices above, when checkout opens") is coherent, but the cleanest end state is still to flip checkout on and retire the founding block entirely (it self-hides at flip). Blocked on the processor/entity decision, not code.
6. **`GOOGLE_ADS_SETUP_STEPS.md`** still lists `founding_reserve` among events to import as conversions. Left as-is (tracking config, secondary event) — align with the "signup as sole primary" plan when doing the console work.
7. **Other marketing-drafts were NOT swept** — out of the "affects current ads" scope, and many still carry beta-era framing. Two groups:
   - Organic/social drafts: GROWTH_PLAN, LAUNCH_ASSETS, OUTREACH_PLAYBOOK, CONTENT_CALENDAR, REFERRAL_AND_DISCOUNT_PLAN.
   - Never-launched channel playbooks in `automated-acquisition/`: RETARGETING_SETUP, retargeting-launch/*, REDDIT_ADS_SETUP, LINKEDIN_ADS_SETUP, SEO_PAGE_PLAN, SEO_EXECUTION_REPORT, UTM_AND_CONVERSION_MAP, ACQUISITION_PLAN, MEASUREMENT_DASHBOARD, DAILY_MONITORING, EMAIL_AUTOMATION_READINESS, REFERRAL_GROWTH_REPORT — no ads exist on those channels, so nothing live is affected. `GOOGLE_ADS_SETUP.md` (the original 7-campaign playbook, highest confusion risk at relaunch) got an explicit STALE banner pointing to the updated `google-ads-launch/` set. Rewrite any of these per-piece before acting on them.

## Ads-readiness verdict

The site copy is now consistent and honest enough for paid traffic. **First ad traffic should go to `/gmat-free-trial`** (commercial intent) and `/gmat-study-plan` (planning intent) — but only after the Google Ads ↔ GA4 conversion import is verified (owner console task; ads remain paused until then).
