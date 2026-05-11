---
slug: multi-source-reasoning
title: Multi-Source Reasoning
section: DI
estimated_minutes: 50
prerequisites: []
summary: |
  Multi-Source Reasoning gives you 2-3 tabs of information — memos, tables, rules, emails, research abstracts — and asks questions that require synthesizing across them. The test isn't reading comprehension; it's navigation. You need to know which tab to consult for each question, extract the specific data points, combine them correctly, and verify against constraints. Master the two-pass navigation protocol (orient first, then dive in for each question), internalize the four question types, and every MSR set becomes a 5-6 minute sequence rather than a frantic re-read of three screens.
sections:
  - id: pretest
    type: pretest
    title: Try before you learn
    intro: |
      Before I teach you anything, try these two — they both reference Set 4 (Lumen Beverages). Read the tabs once, then answer. Rate your confidence honestly. Research shows that attempting before instruction primes your brain to encode the lesson that follows.
    pretest_question_ids:
      - multi-source-reasoning-q10
      - multi-source-reasoning-q13

  - id: the-two-pass-navigation
    type: reading
    title: "The two-pass navigation protocol"
    check_question_ids:
      - multi-source-reasoning-q1

  - id: matching-question-to-tab
    type: reading
    title: "Matching the question to the right tab"
    check_question_ids:
      - multi-source-reasoning-q2
      - multi-source-reasoning-q11

  - id: cross-tab-synthesis
    type: reading
    title: "Cross-tab synthesis — combining two or more sources"
    check_question_ids:
      - multi-source-reasoning-q4
      - multi-source-reasoning-q7

  - id: conditional-and-hypothetical
    type: reading
    title: "Conditional and hypothetical questions — 'what if' reasoning"
    check_question_ids:
      - multi-source-reasoning-q3
      - multi-source-reasoning-q12

  - id: yes-no-statement-checks
    type: reading
    title: "Yes/No statement-check questions against multi-tab constraints"
    check_question_ids:
      - multi-source-reasoning-q8
      - multi-source-reasoning-q14

  - id: summary
    type: summary
    title: "The MSR workflow and the four question types"
    check_question_ids: []

problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - multi-source-reasoning-q10
      - multi-source-reasoning-q13
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - multi-source-reasoning-q1
      - multi-source-reasoning-q2
      - multi-source-reasoning-q4
      - multi-source-reasoning-q6
      - multi-source-reasoning-q7
      - multi-source-reasoning-q11
      - multi-source-reasoning-q14
      - multi-source-reasoning-q15
  hard:
    target_accuracy_by_score:
      "605": 25
      "645": 40
      "685": 60
      "725": 80
    question_ids:
      - multi-source-reasoning-q3
      - multi-source-reasoning-q5
      - multi-source-reasoning-q8
      - multi-source-reasoning-q9
      - multi-source-reasoning-q12
---

## @the-two-pass-navigation

MSR overloads by design. You're handed 2-3 tabs of material before you've seen a single question. The typical instinct is to read everything carefully first. That instinct is wrong — and it's the main reason students run out of time on this format.

Here's why: deep-reading all three tabs before you know what the questions need forces you to absorb 30-40 data points in hopes of covering the 4-6 you'll actually use. Working memory doesn't scale that way. By question 3, you're rebuilding from scratch regardless. The two-pass protocol separates **orientation** (where does each type of information live?) from **retrieval** (get me this specific number from that tab).

**The running example.** Every worked example in this chapter references the same three tabs. Read them now so every demonstration is concrete — no floating numbers, no ambiguity.

---

**Meridian Technologies — Q3 Board Update**

**Tab 1 (CEO Memo):** "Q3 total revenue reached $48.0M. This represents approximately 12% growth year-over-year. Hardware led performance with 18% growth; Software declined by roughly 4%. I want to flag that two new enterprise contracts contributed a combined $3.0M to hardware revenue this quarter — without them, hardware growth would have been closer to 9%. Net margin for Q3 was 16.0%."

**Tab 2 (Revenue Table):**

| Division | Prior-Year Q3 ($M) | Q3 Revenue ($M) | YoY Change |
|---|---|---|---|
| Hardware | 33.9 | 40.0 | +18.0% |
| Software | 8.4 | 8.1 | -3.6% |
| Total | 42.3 | 48.0 | +13.5% |

**Tab 3 (Board Targets for Q3):**

1. Total revenue growth of at least 10% (required for annual bonus pool)
2. Hardware share of total revenue no greater than 80% (risk-concentration limit)
3. Software revenue growth of at least 5% (minimum for continued product investment)
4. Net margin of at least 18% (financial covenant)

---

Note: the CEO memo says "approximately 12%" growth, but the table's calculation is (48.0 - 42.3) / 42.3 = 13.5%. The memo rounds; the table is the precise source. This is a deliberate teaching point — we'll return to it.

**Pass 1: Orient (30-45 seconds).**

Scan all tabs before reading any of them carefully. Build a mental table-of-contents:

- What type of content is in each tab? (Memo, data table, rules list, research abstract, minutes?)
- What is each tab broadly about?
- Where are the precise numbers?

For Meridian: Tab 1 is the CEO's narrative — opinions, context, and approximate claims. Tab 2 is the authoritative data — exact figures. Tab 3 is the compliance checklist — the rules you'll verify answers against.

You are not memorizing content during pass 1. You are labeling.

**Pass 2: Dive in per question.**

Read the question stem. Decide which tab(s) contain the specific data point required. Navigate there. Read that section carefully. Extract and write down. Answer. Move on.

**Time budget per set.**

| Phase | Target |
|---|---|
| Pass 1 (orient all tabs) | 30-45 seconds |
| Each question (navigate + answer) | 75-105 seconds |
| Total for a 3-question set | 5-6 minutes |

If a set is running past 7 minutes, the cause is almost always unnecessary re-reading — going back to tabs without a specific target. When that happens: stop, write on scratch paper the exact thing you are looking for, then navigate directly to only that.

**What to build in pass 1, by tab type.**

| Tab type | What to register in 10 seconds |
|---|---|
| Memo / email / letter | Who wrote it, the main claim, any numbers mentioned |
| Data table | What the rows and columns represent, what the unit is |
| Rules / targets | How many rules, what domain they govern |
| Research abstract | What was tested, what the finding was |
| Meeting minutes | What was decided, what dispute remains open |

**The "who claims what" distinction.** Narrative tabs are authored perspectives. The CEO says revenue grew "approximately 12%." The table says 13.5%. The question may ask you to distinguish an attributed claim (the memo's 12%) from a computed fact (the table's 13.5%). Track who's asserting what, not just what's being asserted.

> **Self-explanation prompt.** Before the check question: in one sentence, why doesn't deep-reading all tabs upfront save time on a 3-question set? If you can say "because you absorb 40 data points hoping to cover the 5 you'll need, and the other 35 were wasted effort that also filled working memory," you understand why orientation and retrieval are separate skills.

## @matching-question-to-tab

After reading each question stem, your first move is to decide which tab contains the needed information. Questions are designed to obscure this — the skill being tested is often tab navigation itself, not the arithmetic that follows.

**The three diagnostic moves.**

1. **Look for explicit tab-naming language.** "Based on the CEO memo..." means Tab 1. "According to the revenue data..." means Tab 2. "To satisfy the board's conditions..." means Tab 3.

2. **Match the question's topic to each tab's scope.** Exact dollar amounts and percentages live in the table. Rationale, strategy, and characterizations live in the narrative. Compliance verification requires both the rules tab and the data table.

3. **Assume cross-tab when in doubt.** Any phrase like "based on all available information" or "considering both the memo and the data" signals that you need multiple tabs. Plan for it rather than being surprised mid-question.

**The specific vs. general filter.**

| What the question asks about | Go to first |
|---|---|
| Exact revenue, growth %, or share | Data table (Tab 2) |
| Why a trend occurred | Memo or narrative (Tab 1) |
| Whether a rule or threshold was met | Rules tab (Tab 3) + data table (Tab 2) |
| Whether a claim in the memo is accurate | Both Tab 1 and Tab 2 |

**Four examples using Meridian.**

*"What was Hardware's Q3 revenue?"*
Specific number. Tab 2. Hardware Q3 = $40.0M. Done in one step.

*"What explanation did the CEO give for hardware's outperformance?"*
Intent and rationale. Tab 1. "Two new enterprise contracts contributed $3.0M to hardware revenue."

*"Did Meridian meet the board's revenue-growth target?"*
Compliance. Tab 3 first (target: growth ≥ 10%), then Tab 2 (actual: +13.5%). Yes, it was met.

*"Is the CEO's claim about total revenue growth consistent with the revenue table?"*
Cross-check. Tab 1 says "approximately 12%." Tab 2 calculates (48.0 - 42.3) / 42.3 = 13.5%. The memo is a rounded approximation of the table's precise figure — they are broadly consistent, though not identical. This exact distinction may be what the question is testing.

**The "already-read vs. re-read" decision.** After pass 1, you'll remember the shape of each tab but not the numbers. For questions about intent or general claims, your pass-1 impression is often enough. For any question requiring a specific number, go back — never trust working memory for precision on a number you saw 4 minutes ago.

**The "memo claims vs. actual data" trap.** The CEO says Software "declined by roughly 4%." The table says -3.6%. When a question asks for the exact change, the answer is -3.6% from Tab 2, not "roughly 4%" from Tab 1. Memos characterize; tables quantify. Use each for what it does best.

> **Recall check.** Cover this section. State from memory: for a question asking whether a board target was met, which tabs do you need, and in what order? (Tab 3 first — to know the threshold — then Tab 2 for the actual number.) If you had to think about it, re-read the filter table above. The navigation sequence must be automatic.

## @cross-tab-synthesis

Cross-tab synthesis is where most students slow down. The question requires data from two or three tabs; the answer requires combining them. A disciplined three-step process prevents the errors that come from trying to hold multiple numbers in your head simultaneously.

**The three-step synthesis workflow.**

1. **List what you need before finding any of it.** Read the question and write down every data point required. Do not start navigating until you have the complete list.
2. **Find each data point in the correct tab, writing it down as you go.** Navigate to each tab, locate the number, record it on scratch paper. Do not start computing yet.
3. **Combine on paper.** Only after all data points are written down does arithmetic begin.

**Worked example: verifying compliance across all four board targets.**

*Question: "How many of Meridian's four board targets were met in Q3?"*

Step 1 — list what I need to check each target:
- Target 1: total revenue growth ≥ 10% → need actual total growth (Tab 2)
- Target 2: hardware ≤ 80% of total revenue → need hardware and total revenue (Tab 2)
- Target 3: software growth ≥ 5% → need software growth (Tab 2)
- Target 4: net margin ≥ 18% → need actual net margin (Tab 1, since Tab 2 has no margin data)

Step 2 — retrieve:
- Total growth: +13.5% (Tab 2)
- Hardware share: 40.0 / 48.0 = 83.3% (Tab 2)
- Software growth: -3.6% (Tab 2)
- Net margin: 16.0% (Tab 1 — the CEO memo)

Step 3 — evaluate each target:
- Target 1: 13.5% ≥ 10% → met
- Target 2: 83.3% ≤ 80% → not met
- Target 3: -3.6% ≥ 5% → not met
- Target 4: 16.0% ≥ 18% → not met

**Answer: 1 of 4 targets was met.**

Notice that this question required data from both Tab 2 (three targets) and Tab 1 (one target). If you only checked Tab 2, you'd miss the net margin target entirely. The "list first" step forces you to identify all required sources before you start.

**The "write it down" rule.** Mental synthesis of 3+ numbers under time pressure is where accuracy collapses. Write each number the moment you find it. Write each arithmetic step. The habit costs 10 seconds and prevents the most expensive errors on the hardest questions.

**The "weighted average" trap.** You cannot average each division's percentage to get the company-level percentage — a small division would be weighted the same as a large one.

*"What percent of Meridian's total Q3 revenue came from Software?"*
Wrong: average +18.0% and -3.6% to get... nothing meaningful.
Right: Software revenue / Total revenue = 8.1 / 48.0 = 16.9%.

When the question asks for a company-level share or rate, compute it directly from the totals. Never average percentages across divisions.

**The "Tab 1 fills the gaps" pattern.** Data tables capture measurable outcomes. Memos often contain information the table doesn't — the CEO's mention of enterprise contracts, the net margin figure, the cause of a trend. Before concluding that a question can't be answered, check whether the memo contains the missing piece.

> **Self-explanation prompt.** Why does writing each data point before computing improve accuracy more than working in your head? If you can say "because working memory reliably holds 4-7 chunks, and each number plus an arithmetic operation already saturates that — writing externalizes the storage so all capacity goes to computation," you understand why the habit is cognitive offloading, not just organization.

## @conditional-and-hypothetical

Conditional questions introduce a hypothetical change and ask what would happen under that changed scenario. They look like word problems; they are actually arithmetic-on-altered-data. The structure is always the same: change one parameter, recompute one metric.

**The four-step template.**

1. Identify exactly what the question changes (what is different in the hypothetical).
2. Start from the actual numbers in the tabs.
3. Apply the change: add, subtract, replace, or adjust the specified value.
4. Recompute only the metric the question asks about — nothing else.

**Worked example 1: removing a revenue contribution.**

*"If the two enterprise contracts had not been signed, would Meridian have met the board's total revenue growth target?"*

Step 1 — identify the change: remove $3.0M from hardware revenue (and therefore from total revenue).
Step 2 — actual numbers: total Q3 revenue = $48.0M, prior-year total = $42.3M.
Step 3 — apply the change: hypothetical Q3 total = $48.0 - $3.0 = $45.0M.
Step 4 — recompute growth: ($45.0 - $42.3) / $42.3 = $2.7 / $42.3 ≈ 6.4%.

Board target: growth ≥ 10%. Hypothetical growth: 6.4%. **No — the target would not have been met.**

**Worked example 2: changing a rule threshold.**

*"If the board's hardware concentration limit were 90% instead of 80%, how many targets would Meridian currently meet?"*

Step 1 — identify the change: Target 2 threshold changes from ≤ 80% to ≤ 90%.
Step 2 — actual hardware share: 40.0 / 48.0 = 83.3%.
Step 3 — apply: 83.3% ≤ 90% → Target 2 is now met.
Step 4 — recount: Target 1 (13.5% growth) still met; Target 2 (83.3% ≤ 90%) now met; Targets 3 and 4 still unmet.

**Answer: 2 of 4 targets met** (up from 1 of 4).

**The "held constant" assumption.** Everything the question does not specify is frozen at its actual value. If the hypothetical removes $3.0M from hardware, don't adjust the software numbers, the board targets, or anything else. Change exactly what is stated — nothing more, nothing less.

**The "cascading effect" awareness.** Changing one line item can alter downstream metrics. Removing $3.0M from hardware changes: hardware total, company total, hardware growth rate, and hardware's share of total revenue. When a conditional question asks about a cascading metric (like "what would hardware's share of total revenue have been?"), trace the cascade step by step.

Example: hypothetical hardware share = ($40.0 - $3.0) / ($48.0 - $3.0) = $37.0 / $45.0 = 82.2%. Both numerator and denominator changed.

**Reading the conditional stem precisely.** The change is embedded in a clause: "If [condition], what [outcome]?" Underline both parts before computing. The most common error is applying the change to the wrong variable — or computing a downstream effect the question didn't ask for.

> **Recall check.** Cover this section and state the four-step template from memory. (Identify the change → start from actual data → apply the change → recompute the asked metric.) The template must be reflexive. Every conditional question on the test follows this shape, regardless of how the numbers are dressed.

## @yes-no-statement-checks

Some MSR questions present a list of statements and ask you to evaluate each one against the available tabs. These can look like Table Analysis questions, but they differ in one key way: the information is spread across multiple tabs, so each statement may draw from a different source.

**Three possible verdicts per statement.**

| Verdict | Meaning |
|---|---|
| Yes | The tabs directly support the statement |
| No | The tabs directly contradict the statement |
| Cannot Be Determined | The tabs don't contain the information needed to evaluate the statement |

"Cannot Be Determined" is a distinct verdict, not a weaker version of "No." A **No** means you found data that actively contradicts the claim. **Cannot Be Determined** means the claim touches something the tabs simply don't address — you searched and found nothing relevant, not something contradictory.

**The per-statement workflow.**

1. Read the statement and identify what it claims.
2. Decide which tab(s) contain the relevant information.
3. Check: does the data confirm the claim (Yes), contradict it (No), or is the relevant data absent (Cannot Be Determined)?
4. Assign one of the three verdicts. Move to the next statement.

Treat each statement independently. Do not carry an assumption from one statement into the evaluation of the next.

**Four worked examples using Meridian.**

*Statement A: "Hardware Q3 revenue exceeded $39 million."*
Tab 2: Hardware Q3 = $40.0M. $40.0M > $39M. **Yes.**

*Statement B: "Software achieved its board growth target in Q3."*
Tab 3: target is growth ≥ 5%. Tab 2: Software growth = -3.6%. -3.6% is less than 5%. **No.**

*Statement C: "Hardware revenue grew faster than total company revenue year-over-year."*
Tab 2: Hardware growth = +18.0%; Total growth = +13.5%. 18.0% > 13.5%. **Yes.**

*Statement D: "Meridian's net margin improved year-over-year."*
Tab 1 gives Q3 net margin as 16.0%. No prior-year net margin appears anywhere in Tabs 1, 2, or 3. There is no basis for comparison. **Cannot Be Determined.**

Note the difference between B and D: for B, the data is present and it contradicts the claim. For D, the relevant comparison data doesn't exist in the tabs at all.

**The quantifier gotcha.** Statements using "every," "all," or "no" require you to verify the claim holds across every applicable item. One counterexample defeats the statement.

*"All divisions achieved positive revenue growth in Q3."*
Check each division: Hardware +18.0% (positive), Software -3.6% (negative). **No** — Software's decline defeats this statement, even though Hardware grew.

**"At least / at most" parsing.**
- "At least 2 targets were met" is true if 2, 3, or 4 targets were met.
- "At most 1 target was met" is true only if 0 or 1 targets were met.
Count carefully before assigning a verdict.

**The "exact vs. approximate" trap.** "Net margin was exactly 15%" vs. Tab 1's 16.0% → **No**. If the question uses "approximately," check whether rounding closes the gap. Without "approximately," strict precision is required.

**The "supported by the tabs" standard.** The test cares about what the tabs directly support, not what you can infer from general knowledge. If no tab mentions the CEO's tenure, a statement about how long the CEO has been in the role is **Cannot Be Determined** — regardless of anything you happen to know externally.

> **Self-explanation prompt.** What is the precise difference between "No" and "Cannot Be Determined"? If you can say "No means I found data that contradicts the claim; Cannot Be Determined means I found no data at all relevant to the claim — the tabs are silent on it," you will never conflate the two under test pressure.

## @summary

MSR is a navigation-and-synthesis skill. The two-pass protocol and four question-type templates cover every set you will encounter.

**The two-pass protocol.**

1. **Orient (30-45 seconds):** scan all tabs, build a mental table-of-contents. Know what type each tab is, what it covers broadly, and where the numbers live.
2. **Dive in per question:** match the question stem to the right tab(s), extract the needed data point(s), combine, answer.

**The four MSR question types.**

| Type | What it tests | Key technique |
|---|---|---|
| Simple lookup | Locating one data point | Navigate to the right tab; memo for context, table for numbers |
| Cross-tab synthesis | Combining data from 2-3 tabs | Write all data points before computing; weighted averages, not percentage averages |
| Conditional / hypothetical | Recomputing under a changed scenario | Identify the change → apply to actual data → recompute only the asked metric |
| Yes/No statement check | Verifying claims against multi-tab data | Three verdicts: Yes, No, Cannot Be Determined; quantifiers require checking all items |

**Time targets.**

| Phase | Target |
|---|---|
| Orient | 45 seconds or less |
| Per question | 90-105 seconds |
| Full 3-question set | 6 minutes or less |

If you exceed 7 minutes on a single set, you re-read tabs without a target. Fix: write on scratch paper the exact data point you need, then navigate directly to it.

**The five highest-leverage habits.**

1. **Orient before everything.** Forty seconds of tab-labeling saves two minutes of confused back-and-forth later.
2. **Navigate to the right tab before reading carefully.** The memo explains; the table quantifies. Never use a qualitative approximation where a precise number is available.
3. **Write data points before combining them.** Any question requiring 3+ numbers demands scratch paper before arithmetic.
4. **Verify every item on compliance questions.** "How many targets were met?" requires checking all targets — not stopping at the first one that passes.
5. **Apply all three verdicts on statement checks.** "No" and "Cannot Be Determined" are different answers. Conflating them costs points on every statement-check question.

**Common traps.**

- Using the memo's approximation ("roughly 12%") instead of the table's precise figure (13.5%) when a question asks for the exact number.
- Averaging percentages across divisions instead of computing the metric from the underlying totals.
- Applying a hypothetical change without tracing its cascading effects on downstream metrics.
- Assigning "No" when the correct verdict is "Cannot Be Determined" because the relevant data is absent, not contradictory.
- Stopping a compliance check early after finding one target that was met, missing that others were not.

**What to do next.** Work through the 15 questions in this chapter's problem sets. Each set shares tabs across 2-3 questions — so efficient tab-reading on question 1 directly accelerates questions 2 and 3. After you finish, check your error log: MSR errors almost always trace to one specific weak habit (tab navigation, the write-it-down discipline, or statement-verdict assignment). Isolate that habit, re-read the relevant section, and drill it with the hard problem set. Then move to Table Analysis — the two DI formats share the same "verify against data, not against intuition" mindset, and the skills transfer directly.
