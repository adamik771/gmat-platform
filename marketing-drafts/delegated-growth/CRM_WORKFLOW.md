# Zakarian GMAT - CRM Workflow

How to run the single source of truth for the launch: a spreadsheet named
**"Outreach CRM"**. Every person you contact lives here. Every touch is logged here.
If it is not in the CRM, it did not happen.

This is tool-agnostic. **Google Sheets is the default** (free, shareable, easy).
Airtable is an optional upgrade if volume grows (same columns become fields). The
columns and Status values below are fixed - use them verbatim so reports and
referral attribution stay consistent.

Zakarian GMAT is in private beta and free during beta. The launch is manual and
personal. **GMAT is a registered trademark of GMAC, which does not endorse and is
not affiliated with this product.**

## Companion files

- `DAILY_ASSISTANT_CHECKLIST.md` - when, in the daily routine, you log each move.
- `WEEKLY_SOP.md` - the Friday reconciliation and stale-lead cleanup.
- `OUTREACH_SCRIPTS.md` - approved message templates.
- `LEAD_REPLY_DECISION_TREE.md` - the lead reply decision tree
  (greens/yellows you handle, reds you escalate).
- `REFERRAL_TRACKING.md` - the referral ledger that pairs with the **Referred by**
  column here.

---

## 1. The columns (use these exact names, in this order)

One sheet/table, one row per person:

| Column | What goes in it |
|--------|-----------------|
| **Name** | The person's full name. |
| **Segment** | One of: A (prior advice-askers), B (warm friends / b-school peers), C (MBA/MiM applicants and admissions/consulting/finance contacts), D (club/community admins), E (early users / referrals / feedback). |
| **Channel** | Where you are talking: LinkedIn, Email, WhatsApp, Instagram, community/forum, etc. |
| **Source/UTM** | How they entered the pipeline: a campaign tag, `utm_source=referral`, a specific post, "direct outreach", a community name. See section 6. |
| **Date contacted** | Date of first outreach (YYYY-MM-DD). |
| **Template used** | Which `OUTREACH_SCRIPTS.md` template the first message was based on. |
| **Status** | The pipeline stage. One of the values in section 3. |
| **Last touch** | Date of the most recent interaction either direction (YYYY-MM-DD). |
| **Next action + date** | The concrete next step and when it is due, e.g. "Follow-up bump - 2026-07-02". |
| **Referred by** | If this person came via a referral, the referrer's name. Blank otherwise. |
| **Owner** | Who is responsible for this lead (you, or an ambassador's name). |
| **Escalated?** | Yes / No - whether this has been handed to Adam (a red on the decision tree). |
| **Notes** | Free text: context, objections, consent to share feedback, anything useful. |

Keep a second tab named **Daily log** for the per-day tallies described in
`DAILY_ASSISTANT_CHECKLIST.md` (date, outreaches, replies, greens, reds, new
signups, founding reserved, referrals, notes). Reports roll up from there.

---

## 2. How to add a lead

1. Confirm the person is a legitimate, relevant contact (a real relationship or a
   warm, on-segment connection). No scraped lists, no cold strangers, no bought
   contacts.
2. **Dedupe first** (section 5) - search Name and any handle/email before adding.
3. Add one row. Fill **Name**, **Segment**, **Channel**, **Owner**, and
   **Source/UTM**.
4. Set **Status = New** until you have actually sent the first message; the moment
   you send, move to **Contacted** and fill **Date contacted** + **Template used**.
5. Set **Last touch** and a **Next action + date** (usually a follow-up 3-4 days
   out). A row with no Next action is incomplete.

---

## 3. Status values (the pipeline) - one-line definitions

Use these exact values. They move generally left to right; not everyone hits every
stage.

- **New** - added to the CRM but not yet contacted.
- **Contacted** - first personalized outreach sent; no reply yet.
- **Replied** - they responded (any reply, positive or not).
- **Interested** - they expressed genuine interest in the beta, the free study
  plan, a sample chapter, or learning more.
- **Beta signup** - they signed up for the free private-beta platform access.
- **Baseline set** - they entered their own official mba.com practice exam result
  in the app (the honest baseline; there is no in-app diagnostic).
- **Founding reserved** - they reserved the locked-in founding rate via the
  founding access form (email capture, no charge now).
- **Paid** - they became a paying founding member after paid plans launched.
- **Lost** - not interested, unresponsive after the allowed follow-ups, or not a fit.

> Pricing, the founding rate, discounts, and discount codes are Adam-approved only.
> You never quote or invent them. A lead asking about price is a **red** - escalate
> per `OUTREACH_SCRIPTS.md`.

## 4. Moving a lead through the pipeline

The intended path:

```
New -> Contacted -> Replied -> Interested -> Beta signup -> Baseline set
     -> Founding reserved -> Paid
```

- Update **Status** the moment something changes, not at end of day.
- On **every** touch (sent message, received reply, sent link, escalation): update
  **Last touch** to today and set a fresh **Next action + date**.
- Triage replies with the lead reply decision tree in `LEAD_REPLY_DECISION_TREE.md`. Greens
  and yellows you handle and log; reds you set **Escalated? = Yes** and hand to Adam.
- Skipping stages is fine (e.g. a warm peer goes straight Contacted -> Beta signup).
  Never skip the **logging** - record the move regardless.
- A lead with no reply after one polite follow-up: set a final **Next action +
  date**; if still silent, move to **Lost** with a reason in **Notes**. Never a
  third unanswered follow-up.

## 5. Deduplication

- Before adding anyone, search the sheet for their Name and any handle/email.
- If a person appears via two channels (e.g. LinkedIn and a referral), keep **one**
  row. Record the additional channel and the referral in **Notes** and set
  **Referred by** if applicable.
- When merging duplicates, keep the **earliest Date contacted**, the **furthest
  Status** reached, the most recent **Last touch**, and combine **Notes**. Delete
  the redundant row.
- In Google Sheets, conditional formatting on the Name column (highlight duplicate
  values) catches most accidental doubles.

## 6. Tagging Source/UTM

- For people you reach out to directly, use a clear label like "direct outreach -
  LinkedIn" or the community name.
- For inbound (someone arriving from a link), capture the UTM that brought them.
  Referral links carry `utm_source=referral&utm_medium=personal&ref=<name-slug>` -
  record `utm_source=referral` here and put the referrer in **Referred by**.
- Consistent tags let the Friday report (`WEEKLY_SOP.md`) compare which sources
  actually produce interested leads. The analytics events (`signup`,
  `founding_reserve`, `referral_click`) corroborate, but this column is what the
  report reads.

## 7. Marking Escalated

- Set **Escalated? = Yes** whenever you hand a lead to Adam: any red on the decision
  tree, any pricing/discount/refund question, any score question, any sensitive or
  uncertain situation, or a serious buying signal that needs the founder.
- Put what Adam needs to decide in **Next action + date** (e.g. "Adam to reply re
  founding price - 2026-07-01") and a one-line context in **Notes**.
- When Adam responds, record the outcome and either continue the lead or set the
  appropriate Status. Clear escalations are reviewed in the Friday report.

## 8. Recording referral attribution (Referred by)

- When a lead came because someone referred them, put the **referrer's name** in
  **Referred by** on the **friend's** row.
- Also add the referral to the ledger in `REFERRAL_TRACKING.md` - that ledger is
  the source of truth for who gets the $50 reward (paid by Adam only on a real paid
  conversion).
- Cross-check the `ref` slug on the friend's inbound events against the name the
  friend mentioned, so attribution is right before any reward is logged.

## 9. Hygiene rules

- One row per person. Every touch logged same-day. Every row has a Next action.
- Owner set on every row (yours or the ambassador's) so contribution is clear.
- Never store passwords or anyone's credentials in the CRM. You work only from your
  own accounts.
- No emojis. No invented pricing. No score promises. No GMAC/mba.com affiliation
  claims. Escalate anything you are unsure about.
