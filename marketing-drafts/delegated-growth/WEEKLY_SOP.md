# Zakarian GMAT - Weekly SOP

The weekly operating rhythm for the person running growth for Zakarian GMAT. The
daily routine lives in `DAILY_ASSISTANT_CHECKLIST.md`; this file zooms out to the
week: planning on Monday, a midweek check, and a Friday report plus CRM cleanup.

Zakarian GMAT is a premium GMAT Focus Edition prep platform in private beta, free
during beta (full access, invite-based, no credit card). The launch is manual,
personal, and honest. No automation, no scraping, no bulk messaging.

**GMAT is a registered trademark of GMAC, which does not endorse and is not
affiliated with this product.**

## Companion files

- `DAILY_ASSISTANT_CHECKLIST.md` - the daily 30-45 minute routine.
- `OUTREACH_SCRIPTS.md` - approved message templates.
- `LEAD_REPLY_DECISION_TREE.md` - the lead reply decision tree.
- `CRM_WORKFLOW.md` - the "Outreach CRM": columns, statuses, logging.
- `REFERRAL_TRACKING.md` - the `/refer` link and the $50 reward ledger.
- `WEEKLY_REPORT_TEMPLATE.md` - the exact report you fill in every Friday.
- `../CONTENT_CALENDAR.md` - the 30-day plan, organized into weekly themes.
- `../LAUNCH_ASSETS.md` - the post drafts and comment-reply lines.

## Weekly cadence at a glance

| Day | Focus | Time |
|-----|-------|------|
| Monday | Plan the week: targets, segments, content themes | 30-40 min |
| Tue-Thu | Run the daily checklist | 30-45 min/day |
| Wednesday | Midweek check: are we on pace? Adjust | +10 min |
| Friday | Compile the weekly report, reconcile the CRM, flag stale leads, prep next week | 45-60 min |
| Sat-Sun | Light: triage, follow-ups, light engagement only | 10-15 min/day |

Small, realistic weekly targets (adjust with Adam as the list grows):

- 20-30 personalized outreaches sent across the week.
- Every reply triaged the same day.
- 1 post per weekday drafted for Adam to approve.
- All CRM rows current; zero overdue follow-ups by Friday.

---

## MONDAY - plan the week (30-40 min)

1. **Pick the week's theme(s) from `../CONTENT_CALENDAR.md`.** The calendar is
   organized into weekly arcs (warm circle and credibility; widen and recruit beta
   testers; activation and first feedback plus open founding access; founding push
   and referrals). Identify which week you are in and note the content categories
   it calls for.
2. **Pick this week's targets.** Choose which audience segments to focus on (A-E,
   defined in `DAILY_ASSISTANT_CHECKLIST.md` and `CRM_WORKFLOW.md`) and pull a
   short hand-picked list of named people for each day. Keep it small enough that
   every message can be genuinely personalized.
3. **Line up the week's content.** Map each weekday to a post draft in
   `../LAUNCH_ASSETS.md`. You will adapt and submit one per day for Adam's approval;
   pre-reading them now makes the daily routine fast.
4. **Clear overdue follow-ups.** Scan the CRM **Next action + date** column for
   anything overdue from last week and schedule it into this week.
5. **Confirm escalations are resolved.** Check that every **Escalated? = Yes** row
   from last week got an answer from Adam or has a clear next step.

Write the week's plan somewhere shared (a Monday note or the report template's
"plan" section) so Adam can see the intent at a glance.

---

## WEDNESDAY - midweek check (+10 min on top of the daily routine)

- Are you on pace for the week's outreach target? If you are behind, do not cram a
  big batch - add 1-2 quality sends per remaining day instead.
- Are replies being handled same-day? Any greens not yet acted on? Any reds not yet
  escalated?
- Is any content stuck waiting on Adam's approval? Nudge once, politely.
- Quick CRM sanity pass: any rows missing a Next action + date? Fix them now so
  Friday is light.

---

## FRIDAY - report, reconcile, prep (45-60 min)

### 1. Compile the weekly report (use `WEEKLY_REPORT_TEMPLATE.md`)

Fill in the template with this week's numbers, pulled from the CRM daily logs plus
the supporting analytics events. The report is the one weekly artifact Adam reviews
(one of his five jobs). Keep it skimmable. Include:

- Outreaches sent, replies, reply rate.
- Pipeline movement by status (new Interested / Beta signup / Baseline set /
  Founding reserved / Paid - see `CRM_WORKFLOW.md` for definitions).
- Referrals shared and any referral conversions (`REFERRAL_TRACKING.md`).
- Escalations handed to Adam and their outcomes.
- What worked (which segments and post topics produced replies) and what to repeat.
- Anything that needs an Adam decision next week.

Supporting analytics signals (Vercel Analytics) you can cite alongside the CRM:
`founding_reserve`, `referral_click`, `signup`, `pricing_view`,
`purchase_completed`. The **CRM is the source of truth**; analytics are corroboration.

### 2. Reconcile the CRM

- Every touch this week has a row and a correct **Status**, **Last touch**, and
  **Next action + date**.
- Dedupe any double-entered people (merge per `CRM_WORKFLOW.md`).
- Confirm **Source/UTM** and **Referred by** are filled where known.
- Confirm referral attribution matches the ledger in `REFERRAL_TRACKING.md`.

### 3. Flag stale leads

- A lead is **stale** if its **Next action + date** is more than 7 days overdue
  with no movement, or it has sat at the same Status for 2+ weeks.
- For each: either schedule one final polite follow-up (max one), or set Status =
  Lost with a one-line reason in **Notes**. Do not let dead threads clutter the
  pipeline. Never send a third unanswered follow-up.

### 4. Prep next week

- Draft next Monday's target list and content map so Monday planning is fast.
- Note any objection or question that came up more than once this week - that is a
  signal for Adam (maybe an FAQ update or a content idea).

---

## Weekly review questions (answer these in the report)

1. How many personalized outreaches went out, and what was the reply rate?
2. Which segment (A-E) and which post topic produced the most genuine replies?
3. How many leads moved forward a stage, and where is the funnel leaking?
4. How many founding reservations and how many referrals this week?
5. What did Adam need to decide, and is anything still waiting on him?
6. What is the single most worthwhile thing to repeat next week?

## How ambassadors report their numbers in

If more than one person is doing outreach (ambassadors), each works from their own
accounts and reports into the same system:

- Each ambassador logs their own touches in the shared "Outreach CRM" with **Owner**
  set to their name on every row. This keeps attribution clean.
- By **end of day Thursday**, each ambassador submits their week's tally (outreaches,
  replies, interested, beta signups, founding reserved, referrals) using the same
  fields as the daily log in `DAILY_ASSISTANT_CHECKLIST.md`.
- The lead assistant rolls all ambassador numbers into the single Friday
  `WEEKLY_REPORT_TEMPLATE.md` for Adam, broken out per owner so contribution is
  visible.
- Same hard rules apply to everyone: own accounts only, fully personalized, no
  automation, no invented pricing, no score promises, no affiliation claims, and
  all pricing/serious leads escalated to Adam.
