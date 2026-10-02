# Reliability and Question-Quality Audit

Audit date: 2026-09-16

## Scope and safety

- Production checks were read-only. No student progress, review state, account data, or checkout session was created or changed.
- The question audit queries only attempt fields needed for aggregate psychometrics and categorical feedback fields. It does not query or print emails, feedback messages, source paths, user agents, or student identities.
- Checkout was verified at its unauthenticated boundary and through code/tests. A real financial transaction was intentionally not attempted.

## Reliability changes

- Added privacy-safe Sentry reporting for completed-practice saves, chapter-progress saves, saved-for-review writes, and checkout failures.
- Added operation-level tags without attaching request bodies, notes, question content, email addresses, user ids, or checkout metadata.
- Practice duplicate detection now fails closed when its lookup errors, preventing a transient read failure from creating a duplicate session.
- Database error text is no longer returned directly by the completed-practice and state-save endpoints.
- Invalid JSON sent to chapter progress now returns a controlled `400` response.
- Auth and paywall redirects now carry `Cache-Control: private, no-store`; the production smoke test identified that redirect-only responses previously missed this header.
- Added `npm run smoke:production`, a no-credentials/no-write route and auth-boundary check.

## Production observations

- Public pages and unauthenticated API boundaries responded successfully.
- Signed-in dashboard, chapters, practice, review, test builder, analytics, and exams loaded without a visible error state.
- Browser console: zero errors across the authenticated read-only pass.
- Mobile checks at 390 x 844: dashboard, chapters, practice, review, test builder, and pricing had no horizontal overflow or visible error state.
- Public-route response times during the smoke run were approximately 150-530 ms from this machine. These are availability timings, not lab Core Web Vitals.

## Question-quality evidence

- Question bank: 2,007 items.
- Production attempt rows read: 4,052.
- Questions attempted at least once: Quant 709, Verbal 295, Data Insights 299.
- No item yet has the 20 clean independent first attempts required for the existing psychometric threshold.
- No active categorical question-feedback signal was present at the audit cutoff.
- Advanced Verbal material longest-answer cues: 6 of 168 (4%).
- Data Sufficiency answer distribution: A 20%, B 13%, C 40%, D 18%, E 8%.
- No explanations crossed the audit's thin or overlong screening thresholds.

The audit therefore made no question-content changes. Low-sample observations are reported separately as an inconclusive watchlist; they are not treated as evidence to rewrite or relabel an item.

## Repeatable commands

```bash
npm run smoke:production
npm run audit:question-quality
```

The second command is read-only but requires the local production Supabase service credentials. Its output is aggregate-only.
