# Acquisition Plan

The low-cost, no-cold-outreach plan to bring new GMAT prospects to Zakarian GMAT and convert them into beta signups and founding users. It builds on what already exists (the founding funnel, `/refer`, first-touch UTM attribution, the opt-in email system) and adds paid + SEO + referral acquisition on top.

Not affiliated with GMAC or mba.com. No guaranteed-score, diagnostic, or affiliation claims appear in any ad, page, or email.

## 1. The funnel

```
   Search / Reddit / LinkedIn / Meta / SEO / a friend's referral link
                              |
                              v
              landing page (real value + opt-in + signup)
                 landing_view  ->  AttributionCapture stores first-touch UTM
                              |
                 +------------+------------+
                 v                         v
        email opt-in (explicit box)   create account
            lead_captured                 signup  (Meta CompleteRegistration)
                 |                         |
                 v                         v
        opt-in nurture sequence      founding reservation  -> founding_reserve
        (only after opt-in)                |
                 \_________________________/
                              |
                              v
                  becomes a happy beta user
                              |
                              v
                  refers a friend  -> referral_click  -> loop restarts
```

Primary conversion = **signup**. Secondary = **lead_captured** (explicit-opt-in email). Every event carries the first-touch UTM, so any signup can be traced back to the exact ad, post, or referral that started it (see `UTM_AND_CONVERSION_MAP.md`).

## 2. Channel roles

| Channel | Role | Why |
|---|---|---|
| Google Search Ads | High-intent capture | People searching "GMAT study plan", "GMAT error log template" etc. are ready now. Highest conversion, start here. |
| SEO landing pages | Compounding, free | The same high-value pages rank organically over time — zero marginal cost once built. |
| Referral loop (`/refer`) | Cheapest growth | Happy beta users bring friends; friend gets founding pricing, referrer gets $50. |
| Reddit Ads | Audience + intent | r/GMAT and related communities; helpful, non-salesy creative. |
| LinkedIn Ads | Audience by profile | MBA aspirants, finance/consulting; high CPM, use sparingly + precisely. |
| Meta/Instagram retargeting | Recovery | Re-engage people who visited but didn't sign up. Cheap, high-ROI, never cold prospecting. |

## 3. Landing-page map

| Intent | Page |
|---|---|
| GMAT error log template | `/error-log-template` (improved; opt-in + view tracking) |
| GMAT study plan | `/gmat-study-plan` |
| GMAT mock review | `/gmat-mock-review` |
| GMAT Data Insights practice | `/gmat-data-insights-practice` |
| GMAT Quant practice | `/gmat-quant-practice` |
| GMAT private beta / founding | `/gmat-private-beta` |
| Pricing / founding offer | `/pricing` |
| Referral | `/refer` |

Each landing page delivers real value (usable even without signing up), captures email behind an explicit unticked opt-in box, links to signup, fires `landing_view`, and carries the GMAC non-affiliation disclaimer.

## 4. Phased rollout (cheapest, lowest-risk first)

**Phase 0 — free, now (no ad spend):**
- Ship the SEO landing pages (done) and let them index; submit the sitemap in Google Search Console.
- Turn on the referral loop: share `/refer` with current beta users; use the in-app referral prompts.
- Keep doing the manual warm outreach from the earlier playbook.

**Phase 1 — set up tracking (before any paid spend):**
- Create a Meta Pixel + Google Ads tag; set `NEXT_PUBLIC_META_PIXEL_ID` / `NEXT_PUBLIC_GOOGLE_TAG_ID` in Vercel (then `trackEvent` auto-forwards conversions — see `RETARGETING_SETUP.md`).
- Import `signup` (primary) and `lead_captured` (secondary) as conversions in each ad platform.

**Phase 2 — small Google Search test:**
- One search campaign on the highest-intent themes (study plan, error log, mock review), tight match types, strong negatives, ~$10-20/day for 2 weeks. Watch cost-per-signup (see `GOOGLE_ADS_SETUP.md` + `DAILY_MONITORING.md`).

**Phase 3 — retarget + expand:**
- Once there's traffic, turn on Meta/Google retargeting of non-converters (cheap recovery). Then test Reddit and a small, precise LinkedIn campaign only if the Search numbers justify it.

## 5. Budget guidance (solo founder)

- Phases 0-1 cost nothing but your time.
- Phase 2: start at **$10-20/day** on Search only. Judge purely on **cost per signup**, not clicks.
- Don't scale a channel until it shows a signup at a cost you'd happily pay repeatedly. Kill anything that burns budget without signups after a fair test (see the kill/scale rule in `DAILY_MONITORING.md`).
- Retargeting is usually the cheapest paid channel — prioritize it once you have visitors.

## 6. Safety guardrails (non-negotiable)

- No cold outreach, no scraped or purchased lists, no automated DMs, no LinkedIn bots, no fake accounts, no spam.
- Email only after an explicit opt-in (the unticked checkbox); see `COMPLIANCE_RULES.md` in the outreach docs.
- No guaranteed-score claims, no "diagnostic"/readiness-band claims, no implied GMAT/GMAC/mba.com affiliation in any ad, page, or email. The only performance claim is the founder's own 565 to 735.
- Every paid landing page and email carries the non-affiliation disclaimer.

## 7. The other docs

`GOOGLE_ADS_SETUP.md`, `REDDIT_ADS_SETUP.md`, `LINKEDIN_ADS_SETUP.md`, `RETARGETING_SETUP.md`, `SEO_PAGE_PLAN.md`, `AD_COPY_BANK.md`, `UTM_AND_CONVERSION_MAP.md`, `DAILY_MONITORING.md`.
