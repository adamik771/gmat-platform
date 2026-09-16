# Deep product audit — 2026-07-13 (evening pass)

Six-domain audit (production QA flows, GMAT content integrity, UX metrics, conversion/trust, SEO, reliability/security) run as parallel investigation agents; fixes implemented and verified by the main session. Branch `chore/deep-product-audit` off the merged bug-fix release (`32ccb94`).

**Important scoping note:** a separate Claude session was editing `src/content/**` and `scripts/` concurrently and committed its own work as `0b868ed` ("content(audit): academic quality audit…", report: `GMAT_CONTENT_AUDIT.md`) on this same branch. This pass's commit deliberately contains none of those files, but independently verified several of that session's edits (see "Concurrent content session" below).

## Issues found and fixed

### Student-facing QA (trust in the data)

1. **Dashboard "Recent mistakes" was an arbitrary frozen slice, not recent** — ordered by `session_id` (a random UUID). Now `created_at desc`. Same class as the error-log bug fixed earlier today; two more instances found and fixed (below), plus a guardrail test so the class is dead permanently ([tests/uuid-order-guardrail.test.ts](tests/uuid-order-guardrail.test.ts)).
2. **Deep-review "your last attempt" was an arbitrary attempt** (`.order("id")` on UUIDs) — a student who re-solved a question correctly could still be shown an old wrong attempt as their result. Now `created_at desc` ([review/question/[id]/page.tsx](src/app/(app)/review/question/[id]/page.tsx)).
3. **All 95 Two-Part Analysis questions rendered answerless on the deep-review page** — the single-select highlighting keyed on `correctAnswer` (−1 for TPA) so nothing was marked correct and the footer read "Correct: —". TPA now renders its rows with the correct row per column labeled.
4. **Mock report merged every same-day mock into one bogus report** — a full mock plus a later single-section rep produced duplicate section rows, a total averaged over 4+ entries, and a "Partial Mock" label on a finished full mock. Now deduped to one row per section (newest first) ([mock/report/page.tsx](src/app/(app)/mock/report/page.tsx)).
5. **Failed/expired email-confirmation links landed on /login with zero explanation** — the auth callback redirects with `?error=auth_callback`, which the login form never read. It now seeds the error banner with recovery guidance ([login/page.tsx](src/app/(auth)/login/page.tsx)).
6. **/study-plan/adaptive had its own UTC/local countdown math** (overshot by a day in Oslo-like timezones) — now uses the shared `daysUntil()`.
7. **Saved-session history page numbered questions in arbitrary order** — attempts now ordered by `created_at`.

### UX simplification (fewer, meaningful numbers)

8. **Study plan: Today's Focus was buried ~1000px down** under PersonaCard, PersonaPathCard, baseline attribution, and the multi-week link — while the onboarding banner said "your next step is right below". The actionable blocks (Today's Focus, 7-day calendar, stat cards) now lead; the context cards moved below them.
9. **Analytics readiness trajectory contradicted the dashboard's just-fixed accuracy** — unweighted per-session means including review replays. Now question-weighted and review-excluded, mirroring the dashboard rule ([analytics/page.tsx](src/app/(app)/analytics/page.tsx)).
10. **The two remaining estimated-score computations were local re-implementations** of helpers that already exist — dashboard now uses `accuracyToSectionScore` + `sectionScoresToTotal`, analytics uses the already-imported `accuracyToScore`. One scoring formula everywhere; ~60 lines of duplicate math deleted, along with the dashboard's dead week-over-week trend computation and the 20k-row session join that fed only it.
11. **The dashboard computed an estimated total it never displayed** — while the pre-data locked tile promised a "Readiness band". The estimate now renders next to the target ("est. NNN") in the Course-progress cell, answering "am I on track?" at a glance.
12. **Analytics locked view promised a "Score-report mirror" module that does not exist** in active mode — entry deleted.
13. **Mock report stated a naked "Nth percentile"** from a linear internal estimate — now "~Nth percentile (est.)".
14. **Study-plan stat grid declared 4 columns for 3 cards** (dead column since the Projected-total removal) — now 3.
15. **Dead code deleted:** `NextBestActionPanel.tsx` + `next-best-action.ts` (zero importers; duplicated the baseline-prompt logic that caused today's stuck-prompt bug).

### Conversion / trust (public pages)

16. **"…without paying anything while the beta is open" on the live /gmat-study-plan-2-months page** — forbidden beta language contradicting the trial offer. Clause replaced with "without paying anything up front".
17. **/glossary CTA said the platform is "all free"** with no trial framing — now states the 7-day full-access trial (and uses the shared chapter-count constant).
18. **Homepage FAQ claimed "many students come to this system after TTP/Manhattan/Magoosh"** — unverifiable social proof contradicting the site's own honesty page. Reframed as method ("If you've already tried…, the difference here is…").
19. **"Checkout opens shortly / the day checkout opens"** in the pricing reserve-intercept — an unbackable timing promise. Now "Paid checkout hasn't opened yet… when checkout opens".
20. **Homepage listed unqualified "Expert Coaching — weekly 1:1"** under the free-trial-CTA'd "everything you need" grid; coaching is a $2,500+ tier. Now "Expert Coaching (select plans)" (matching /course).
21. **The homepage hero never said what happens after the trial** — appended "after the trial, access continues with a one-time paid plan — no subscription". /course's final CTA ("Choose your plan…") swapped for the trial offer.
22. **"50+ chapters" was hardcoded in 12 files** — all now use `CHAPTER_COUNT_CLAIM` from src/lib/site.ts (pricing, faq×2, homepage×2, course×2, how-we-compare, resources, glossary, SampleChapterRenderer, blog×2), so the floor can bump in one place.
23. **The app never mentioned the trial that signup promises** — the dashboard now shows "Day N of your 7-day full-access trial" while it runs, and "Trial period over — access continues free until paid checkout opens" after (honest over-delivery bridge; zero copy debt at paywall flip).

### SEO

24. **The two highest-intent landing pages were internal-link orphans** (/gmat-free-trial — the declared bottom-funnel page — and /gmat-focus-edition-changes were reachable only via the sitemap). Both added to the footer.
25. **/login and /signup indexed as duplicate-homepage results** (client pages, no metadata) — per-route layouts added with unique titles, descriptions, canonicals.
26. **Sitemap `lastModified` was the request timestamp** on all 57 URLs (worthless freshness signal crawlers learn to discount) — removed.
27. **Keyword cannibalization pairs** (study-plan lander vs blog post; focus-changes lander vs blog post) — prominent hub cross-links added from both posts. Retitling deferred to the backlog (needs a content read to stay honest).

### Reliability / security

28. **Account deletion left the deleted user subscribed** — `email_subscriptions`, `email_queue`, and `email_events` rows survived erasure, so the outreach cron kept mailing people who had deleted their accounts. All three now cleared alongside `lead_captures` ([account/delete/route.ts](src/app/api/account/delete/route.ts)).
29. **Password-reset endpoint had zero rate limiting** (bypasses Supabase's built-in limit by design) — added a pre-`generateLink` per-email 5-minute cooldown (placed before link-minting so it can never invalidate a just-sent token; unobservable — same generic response). In-memory per instance; durable throttle remains an owner task.
30. **Lead-capture allowed unlimited third-party drip enrolment** (unauthenticated, only a honeypot) — added a per-IP 5/hour throttle with the same generic response. WAF rule is the durable complement.
31. **`error_tags.notes` accepted unbounded payloads** — now string ≤ 2000 chars (same cap as beta feedback).
32. **Four routes 500'd on malformed JSON** (mock-flags, checkout, email-change, error-tags×2) — all now return a clean 400, matching the repo pattern.
33. **Trial-tamper trap armed with a warning:** if `PAYWALL_ENABLED` is ever true without `PAYWALL_TRIAL_EPOCH`, entitlements now logs loudly that trial starts fall back to user-editable metadata (a signed-in user could extend their own trial). The epoch env var at flip time is the real fix (owner task).

## Files changed (this commit)

App: dashboard, analytics, study-plan (+adaptive), mock/report, review/question/[id], practice/history/[id], login (+new layout), signup (new layout). Lib: entitlements.ts, sitemap.ts. API: account/delete, auth/reset-request, lead-capture, error-tags, mock-flags, checkout, email-change. Marketing: homepage, pricing, faq, course, glossary, resources, how-we-compare, gmat-study-plan-2-months, blog×2, Footer, ReserveInterceptButton, SampleChapterRenderer. Deleted: analytics/NextBestActionPanel.tsx, lib/next-best-action.ts. Tests: uuid-order-guardrail (new).

## Tests added

- `tests/uuid-order-guardrail.test.ts` — bans `.order("id"/"session_id")` on UUID columns repo-wide (three shipped bugs in this class across two passes).
- Full gate at commit: content 0 errors, tsc clean, **400 tests**, eslint (pre-existing script warning only), `next build` green.

## Concurrent content session (own commit `0b868ed` on this branch)

A parallel session edited `src/content/**` + `scripts/validate-content.ts` and committed them itself (`GMAT_CONTENT_AUDIT.md` is its report). Before that commit landed, this session adversarially verified a sample of its edits:
- Three rewritten questions (arithmetic remainder, statistics spade-or-ace, algebra q79 duplicate) — **all blind-solved to their stored keys** with consistent explanations and no remaining duplicates.
- `estimated_minutes` recalibration across ~25 chapters — **sampled 5, all defensible** (the old 8-11 min values were impossible for 3-10k-word chapters).
- Two prerequisite fixes — **both justified** (forward-pointing links on the guided path).
- ~32 pretest pin swaps — structurally green (embed-uniqueness + composition tests pass) but pedagogically unreviewed; some Advanced pretest pins remain.

## Remaining risks / owner tasks

- **Set `PAYWALL_TRIAL_EPOCH` in Vercel the moment `PAYWALL_ENABLED` flips** — otherwise trials are user-extendable (now logged loudly).
- **public/score-report.png does not exist** while ~6 pages cite "100th percentile on his official score report" — the site's load-bearing claim points at an unpublishable document. Supply the redacted image and re-enable `ScoreReportProof` on /about (the approved standing decision).
- Durable rate limiting (table or Vercel WAF) for reset-request and lead-capture; the in-memory throttles are per-instance.
- Double-opt-in for drip enrolment when marketing volume matters.
- 134 graded problem-set slots hold questions whose difficulty contradicts the set tier (e.g. Advanced questions in "easy" sets with 80-100% accuracy targets) — needs per-question reconciliation + a validator rule; deliberately not bulk-changed (swaps ripple into test pools).
- 17 geometry questions in the DI banks contradict the platform's own "geometry is gone" teaching — replace or make a syllabus call (GMAC's published position is that geometry was removed).
- SEO backlog: retitle the two cannibal blog posts after a content read; real per-route sitemap dates; /resources cards for the de-orphaned landers.

## Product decisions needed from Adam

1. The concurrent session's content commit (`0b868ed`, now on this branch): this session's verification verdicts above support the sampled classes, but the ~32 pretest pin swaps need your pedagogy eye before the branch merges.
2. Dashboard estimate placement: it now renders as "est. NNN" beside the target — alternative was softening the locked-tile promise instead. Move/remove if you prefer analytics as the only estimate surface.
3. ConsultOffer strip currently outranks Today's Mission on the dashboard — one-block move if you want the student's next action to always be the first pixel (pure taste; documented, not changed).
4. Whether coaching should appear on the homepage feature grid at all pre-checkout.

## Recommended next Claude mission

Reconcile the 134 problem-set difficulty mismatches + the 17 DI geometry items in one content pass (with validator rules to lock both), then flip on real per-route sitemap dates and the two blog retitles — that closes every open content-integrity and SEO item from this audit.
