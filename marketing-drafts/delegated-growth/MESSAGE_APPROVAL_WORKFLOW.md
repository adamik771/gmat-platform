# Message Approval Workflow

How Adam approves messaging **once** so that day-to-day outreach needs no further sign-off.
This is the "approve once, reuse forever" model. Once Adam approves the starter set of templates,
you (the assistant or ambassador) can send those templates every day without asking again — as long
as you stay inside the personalization rules below.

**Read this first, before you send anything.** It defines what you may change, what you may never
change, and how a brand-new message gets approved.

Sibling docs:
- `OUTREACH_SCRIPTS.md` — the actual approved scripts you send.
- `OUTREACH_QA_RULES.md` — the can-say / cannot-say rules every message must obey.
- `LEAD_REPLY_DECISION_TREE.md` — how to handle replies.
- `ESCALATION_RULES.md` — when to hand something up to Adam.

---

## 1. The core idea: approve a set once

Adam does not approve every message. That does not scale and it is not his job.

Instead:

1. Adam approves a **set of templates** one time (the scripts in `OUTREACH_SCRIPTS.md`, plus the
   reply snippets in `LEAD_REPLY_DECISION_TREE.md`).
2. From then on, you send those templates freely, every day, without asking.
3. You personalize each one inside the **allowed** zone (Section 3).
4. The only thing that ever goes back to Adam for approval is a **brand-new template type** or
   **off-script wording** — never a routine send (Section 4).

This is part of the "Adam does only 5 things" contract. One of his five things is:
**approve the first message templates (once).** After that he does not approve routine messaging.

---

## 2. What "approved" means

A template is "approved" when Adam has signed off on its exact wording in `OUTREACH_SCRIPTS.md` or
`LEAD_REPLY_DECISION_TREE.md` and it is logged in the version table in Section 5 with status
**Approved**.

- An approved template can be sent as many times as you like, to as many (relevant, real) people as
  you like, with allowed personalization.
- A template that is not in the version log as **Approved** may not be sent. If it is not approved,
  treat it as off-script and route it through Section 4.

---

## 3. Personalization rules (what you MAY and MUST NOT change)

Every message has two zones. Learn the line between them cold.

### You MAY change (the personalization zone)

- **Recipient name** — fill in `[name]` with the real person's name.
- **The opening line** — rewrite the first 1-2 sentences to reference something real and specific
  about that person (their post, their target school, your last conversation, a mutual contact).
  This is the part that makes it not-spam. Make it true.
- **One specific detail** — one concrete, accurate reference somewhere in the body that ties the
  message to that person (e.g. "since you mentioned Data Insights is your weak section").
- **Light glue words** — small connective edits so the personalized line flows into the approved
  body (e.g. "Anyway —", "So —"). No meaning change.
- **The sign-off** — your own name and, where relevant, your own role/identity (you always send as
  yourself, never as Adam — see `OUTREACH_SCRIPTS.md`).

### You MUST NOT change (the locked zone)

- **Claims** — anything about the product, Adam's score (565 to 735, 100th percentile), features,
  what the platform does. Use the approved wording exactly.
- **The offer** — free private-beta access, the founding discount, the $50 referral reward, the
  free study-plan hook. Do not restate, reinterpret, or "improve" these.
- **Prices and discount codes** — never invent, change, or quote a price or code that is not in the
  approved scripts. (Approved figures and codes live in `OUTREACH_QA_RULES.md` and
  `../REFERRAL_AND_DISCOUNT_PLAN.md`.) Anything beyond them escalates.
- **Links** — use only the approved URLs (`https://www.zakariangmat.com`,
  `https://www.zakariangmat.com/refer`). Do not shorten, swap, or add links.
- **The disclaimer** — where a script includes the GMAC non-affiliation line, it stays verbatim:
  *"GMAT is a registered trademark of GMAC, which does not endorse and is not affiliated with this
  product."*

**Rule of thumb:** you may change *who you are talking to and why this message is for them.* You may
not change *what is being claimed, offered, priced, or linked.* When in doubt, it is locked — leave
it and escalate per `ESCALATION_RULES.md`.

---

## 4. New template types and off-script wording

If you want to send something that is **not** an approved template, or you want to change wording
inside the **locked** zone, that is a new template type. It must be approved before it is used.

How to get it approved (async — Adam does not need to be live):

1. Write the proposed message in the **"Pending approval"** tab of the Outreach CRM (or the shared
   approval doc, whichever Adam is using).
2. Note: the segment it targets, the channel, why the existing approved templates do not fit, and
   the exact proposed wording.
3. Flag it to Adam via the agreed async channel (a single batched note, not a live ping).
4. Do **not** send it until its status in the version log (Section 5) is **Approved**.
5. Once approved, add it to `OUTREACH_SCRIPTS.md` (or the relevant doc) and log it below. From then
   on it is routine — send it freely with allowed personalization.

After the initial set is approved, **Adam approves only brand-new template types.** He does not
re-approve edits inside the personalization zone, follow-ups that use approved templates, or
repeated sends of approved templates.

If something is urgent or sensitive (a complaint, press, a pricing negotiation, anything on the RED
list), it is **not** a template-approval question — it is an escalation. Route it through
`ESCALATION_RULES.md` instead.

---

## 5. Template version log

One row per template version. A template may not be sent unless it appears here with status
**Approved**. Update this whenever a template is added, edited, or retired.

| Template ID | Where it lives | Purpose / segment | Version | Status | Approved by | Date approved | Notes |
|-------------|----------------|-------------------|---------|--------|-------------|---------------|-------|
| DS-1 | OUTREACH_SCRIPTS.md | LinkedIn connection note (own account) — Seg C | v1 | Pending | — | — | Awaiting initial sign-off |
| DS-2 | OUTREACH_SCRIPTS.md | Warm referral from ambassador to friend — Seg B/E | v1 | Pending | — | — | Awaiting initial sign-off |
| DS-3 | OUTREACH_SCRIPTS.md | Personalized cold-ish email (with opt-out) — Seg C | v1 | Pending | — | — | Awaiting initial sign-off |
| DS-4 | OUTREACH_SCRIPTS.md | Value-first community message (admin-approved) — Seg D | v1 | Pending | — | — | Awaiting initial sign-off |
| DS-5 | OUTREACH_SCRIPTS.md | Single follow-up after no reply | v1 | Pending | — | — | Awaiting initial sign-off |
| DS-6 | OUTREACH_SCRIPTS.md | Reply when someone is interested | v1 | Pending | — | — | Awaiting initial sign-off |
| DS-7 | OUTREACH_SCRIPTS.md | Ambassador personal share message (mirrors /refer) | v1 | Pending | — | — | Awaiting initial sign-off |
| GREEN-A | LEAD_REPLY_DECISION_TREE.md | Curious/positive reply snippet | v1 | Pending | — | — | Awaiting initial sign-off |
| GREEN-B | LEAD_REPLY_DECISION_TREE.md | Factual FAQ reply snippets | v1 | Pending | — | — | Awaiting initial sign-off |
| GREEN-C | LEAD_REPLY_DECISION_TREE.md | Ready-to-start / wants-access reply snippet | v1 | Pending | — | — | Awaiting initial sign-off |

When Adam approves the initial set, change every **Pending** to **Approved**, fill in "Approved by"
and "Date approved", and keep the table current as templates evolve.

---

## 6. Quick checklist before you hit send

- [ ] The template I am using is in the version log as **Approved**.
- [ ] I only changed the **name, opening line, and one specific detail** (plus my own sign-off).
- [ ] I did not touch any **claim, offer, price, code, link, or disclaimer**.
- [ ] The opening line is true and specific to this person.
- [ ] If anything is new, off-script, or uncertain, I sent it to **Pending approval** or escalated
      it (`ESCALATION_RULES.md`) instead of sending.
- [ ] The message obeys `OUTREACH_QA_RULES.md` (no banned claims, anti-spam compliant).
