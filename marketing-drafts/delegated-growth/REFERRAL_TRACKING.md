> **STALE OFFER - review before use (2026-07-19).** Strategy below predates the current offer (free 7-day full-access trial, no card - never "free beta"/"private beta"). Founder-claim wording in this file has been aligned (565 to 735, top 1%, personal result, no "verified" framing), but offer/beta mechanics need a rewrite before launching anything from this file. Current wording source: acquisition-cleanup/OFFER_AUDIT.md and the live /gmat-free-trial page.

# Zakarian GMAT - Referral Tracking

How referrals work, how to share them honestly, how to record who referred whom,
how to confirm a referral actually converted, and how the $50 reward gets logged
and paid. This file pairs with the **Referred by** column in the CRM.

The offer is simple and honest: **the friend gets the founding discount; the
referrer gets $50 when the friend becomes a paying founding member.** No cap.
Tracked manually during launch. The $50 is paid by Adam, and only on a real paid
conversion - never on a signup, a reservation, or a promise.

Zakarian GMAT is in private beta and free during beta. **GMAT is a registered
trademark of GMAC, which does not endorse and is not affiliated with this product.**

## Companion files

- `CRM_WORKFLOW.md` - the "Outreach CRM" and the **Referred by** column.
- `DAILY_ASSISTANT_CHECKLIST.md` - where, in the day, you share the `/refer` link.
- `WEEKLY_SOP.md` - the Friday reconciliation that checks the ledger.
- `../REFERRAL_AND_DISCOUNT_PLAN.md` - the full offer mechanics and Stripe setup
  (do not duplicate that file; this one is the day-to-day tracking process).

---

## 1. How the `/refer` link works

The referral page is live at **https://www.zakariangmat.com/refer**.

1. The referrer opens `/refer`, types their name, and copies a **personalized share
   message plus a referral-tagged link**. The link carries
   `utm_source=referral&utm_medium=personal&ref=<name-slug>`. Copying or emailing it
   fires a **`referral_click`** analytics event.
2. The friend opens the link and lands on the site. First-touch attribution captures
   `utm_source=referral` plus the `ref` slug, which then rides along on the friend's
   `signup`, `founding_reserve`, and `purchase_completed` events.
3. The share message tells the friend to mention the referrer's name when they
   reserve - so you get a human signal (the name) and a technical signal (the `ref`
   slug) for the same referral.

**The spreadsheet ledger below is the source of truth.** The `referral_click` and
`founding_reserve` analytics events are supporting signals you cross-check against,
not the record of who is owed money.

## 2. How assistants / ambassadors share it

- Share the `/refer` link **where it is natural**: when an early user gives positive
  feedback, when a happy beta user asks how they can help, or when a warm contact
  knows someone studying for the GMAT.
- Do **not** spray the link. No mass posting, no bulk DMs, no buying or scraping
  contacts. Every share is personal and in context. One genuine share beats fifty
  blasts.
- If you (the assistant) are sharing on someone's behalf, still work from your own
  account, personalize the ask, and respect each platform's terms and anti-spam law.
- When you ask an early user to refer, point them to `/refer` so they generate their
  own tagged link with their own name slug.

## 3. How to record who referred whom

Two places, always both:

1. **In the CRM** (`CRM_WORKFLOW.md`): on the **friend's** row, set **Referred by**
   to the referrer's name, and set **Source/UTM** to `utm_source=referral`.
2. **In the referral ledger** (below): add a row the moment a referral is shared or
   a referred friend appears.

Cross-check the `ref` slug on the friend's inbound events against the name the
friend mentioned. If they match, attribution is solid. If they conflict, note it
and confirm with the referrer before logging a reward as due.

## 4. How to confirm a referral converted

A referral converts in two steps; track both:

1. **Friend reserves founding access** - they submit the founding reservation form
   (email capture, no charge). Set the friend's CRM Status to **Founding reserved**.
   In the ledger, set **Friend status = Founding reserved** and **Converted? = Not
   yet** (a reservation is not a payment).
2. **Friend pays** - after paid plans launch, the friend becomes a paying founding
   member. Set the friend's CRM Status to **Paid**. In the ledger, set **Friend
   status = Paid**, **Converted? = Yes**, and **Reward due = $50**.

Only step 2 makes the $50 due. Confirm the payment is real (a recorded purchase),
not just an intent, before marking Reward due.

## 5. How the $50 reward is logged and paid

- The reward is **logged** by you in the ledger (Reward due = $50) the moment a
  referred friend's payment is confirmed.
- The reward is **paid by Adam only** - you never disburse money. Flag it to Adam in
  the Friday report (`WEEKLY_SOP.md`) so he can pay it by the method he and the
  referrer agreed on.
- Once Adam pays, set **Reward paid = Yes** with the date in the ledger. This keeps
  a clean, auditable trail of what is owed vs. settled.
- Tell referrers up front that the $50 lands only when their friend actually pays -
  no surprises, no implied guarantees.

## 6. The referral ledger

Keep this as its own tab in the "Outreach CRM" workbook (or a sibling sheet). Use
these columns:

| Referrer | Referrer contact | Friend | Date shared | Friend status | Converted? | Reward due | Reward paid |
|----------|------------------|--------|-------------|---------------|------------|------------|-------------|
| Sample Referrer | sample@email.com | Sample Friend | 2026-06-27 | Founding reserved | Not yet | $0 | No |

Column notes:

- **Referrer** - who shared the link.
- **Referrer contact** - how Adam reaches them to pay (email/handle agreed up front).
- **Friend** - the person referred.
- **Date shared** - when the referral link/ask went out.
- **Friend status** - mirror the friend's CRM Status (Contacted / Interested / Beta
  signup / Founding reserved / Paid / Lost).
- **Converted?** - Yes only when the friend has **paid**; otherwise "Not yet" or "No".
- **Reward due** - $50 once Converted? = Yes; $0 until then.
- **Reward paid** - No until Adam pays, then Yes + date.

Delete the sample row before real use.

## 7. Guardrails

- $50 only on a **real paid** conversion. Never on a signup, a reservation, or a
  maybe.
- The ledger is the source of truth; analytics events are corroboration only.
- No invented discount codes or prices - those are Adam-approved (see
  `../REFERRAL_AND_DISCOUNT_PLAN.md`). Escalate pricing questions.
- No spam to drive referrals. Personal, relevant, consented shares only.
- No emojis. No score promises. No GMAC/mba.com affiliation claims; include the GMAC
  non-affiliation line in any public-facing referral copy.
