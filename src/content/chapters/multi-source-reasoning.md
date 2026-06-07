---
slug: multi-source-reasoning
title: Multi-Source Reasoning
section: DI
estimated_minutes: 60
prerequisites: []
summary: |
  Multi-Source Reasoning gives you 2-3 tabs of information — memos, tables, rules, emails, research abstracts — and asks questions that require synthesizing across them. The test isn't reading comprehension; it's navigation. You need to know which tab to consult for each question, extract the specific data points, combine them correctly, and verify against constraints. Master the two-pass navigation protocol (orient first, then dive in for each question), internalize the four question types, recognize the five recurring wrong-answer patterns, and every MSR set becomes a 5-6 minute sequence rather than a frantic re-read of three screens.
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
    intro: |
      The instinct on MSR is to read all three tabs carefully before answering anything. That instinct is the single biggest time sink in Data Insights. This section replaces it with the protocol strong scorers run on autopilot: map the tabs first, read deeply only when a question demands it.
    check_question_ids:
      - multi-source-reasoning-q1

  - id: matching-question-to-tab
    type: reading
    title: "Simple lookup — matching the question to the right tab"
    intro: |
      The most common MSR question asks for one fact from one tab. It looks trivial — and it is, *if* you reach the right cell in three seconds instead of re-scanning all three tabs. This section turns navigation into a reflex, so lookups cost you 15 seconds, not 90.
    check_question_ids:
      - multi-source-reasoning-q2
      - multi-source-reasoning-q11

  - id: cross-tab-synthesis
    type: reading
    title: "Cross-tab synthesis — combining two or more sources"
    intro: |
      This is where MSR points are won and lost. Synthesis questions force you to pull data from two or three tabs and combine it — and the failure mode is almost never the arithmetic. It's losing track of a number mid-navigation. This section gives you the discipline that prevents that.
    check_question_ids:
      - multi-source-reasoning-q4
      - multi-source-reasoning-q7

  - id: conditional-and-hypothetical
    type: reading
    title: "Conditional and hypothetical questions — 'what if' reasoning"
    intro: |
      Hypotheticals change one thing about the scenario and ask what follows. The skill is surgical: update exactly what the question moved, cascade to whatever depends on it, and freeze everything else. This section shows you the two patterns these questions always take.
    check_question_ids:
      - multi-source-reasoning-q3
      - multi-source-reasoning-q12

  - id: yes-no-statement-checks
    type: reading
    title: "Yes/No statement checks against multi-tab constraints"
    intro: |
      These questions hand you three to five statements and ask you to verify each one independently. The trap isn't the data — it's the wording. "Exceeded," "at least," and "every" each carry a different standard, and the test writes near-misses on exactly that edge. This section makes you precise.
    check_question_ids:
      - multi-source-reasoning-q8
      - multi-source-reasoning-q14

  - id: answer-choice-traps
    type: reading
    title: "Five wrong-answer patterns that recur across MSR"
    intro: |
      Wrong answers on MSR aren't random — they're manufactured from five recurring patterns. Once you can name the pattern a wrong answer is built on, you eliminate it deliberately instead of second-guessing. This section is your trap inventory.
    check_question_ids: []

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

Multi-Source Reasoning gives you 2-3 tabs — memos, tables, rule lists, research abstracts, meeting notes — and asks 3 questions per set. The tabs contain far more information than any single question needs. That's by design: the test rewards students who extract only what's relevant, not students who try to absorb everything upfront.

**Mental model.** Treat the tab set as a database, not an essay. You don't read a database cover to cover — you learn where each kind of record lives, then run a targeted query for each question. MSR is a navigation skill wearing a reading-comprehension costume.

**The core insight.** Reading every tab thoroughly before question 1 is a trap. You'll spend 3+ minutes on content you'll never use. MSR rewards selective reading driven by the question, not comprehensive reading driven by anxiety.

**The two-pass protocol.**

**Pass 1 — Orient (30-45 seconds total).** Scan all tabs. Build a mental map. Do not try to memorize content.

For each tab, answer three questions:
- What kind of tab is this? (Memo, table, rule list, abstract, meeting notes?)
- What topic does it cover? ("Regional sales data" / "Board's strategic targets" / "CFO's risk assessment")
- What's the rough structure? (Rows and columns? Bullet points? Narrative prose?)

That's it. You're building a table of contents, not reading the book.

**Pass 2 — Dive in per question.** Read the question stem. Decide which tab(s) it needs. Read only those parts carefully. Answer.

**Why this beats one careful read-through.**

A 3-question set typically needs 1-2 specific data points per question — roughly 5-6 data points total out of the dozens across three tabs. One thorough pass reads 100% of the content to use maybe 15% of it. Two passes read 100% at low depth, then 15% at high depth — total effort is much lower.

Students who deep-read all three tabs upfront often spend 3+ minutes on the orientation alone, leaving under 90 seconds per question. That's not enough time for synthesis or hypothetical questions.

**Pass 1 tab-reading guide.**

| Tab type | What to note in 30 seconds |
|---|---|
| Memo / email | Who wrote it? Main claim? Any numbers mentioned? |
| Data table | Rows and columns? Units? Any totals row? |
| Rule / target list | How many rules? What scope? (budget, compliance, strategy) |
| Research abstract | What was studied? What result? |
| Meeting minutes | Decisions made? Open disputes? Who disagreed? |

**The "who said what" distinction.** Narrative tabs often include multiple voices — a VP's memo may quote a CFO, or meeting notes may summarize three committee members. Track who is making each claim. MSR questions frequently ask "based on Nguyen's memo" or "which committee member argued for X." Conflating sources is a common, avoidable error.

**The "numbers live in tables" heuristic.** Memos describe data in prose but imprecisely. When a question asks for a specific dollar figure or percentage, go to the table. When it asks for rationale or intent, go to the memo. Each source is authoritative for what it's specifically designed to convey.

**The time budget.**

| Phase | Time target |
|---|---|
| Pass 1 (all tabs) | 30-45 seconds |
| Per question (pass 2 + answer) | 90-120 seconds |
| Total for a 3-question set | 5-6 minutes |

If you're over 7 minutes on a single set, something broke in your process — almost always re-reading tabs you didn't need on question 2 or 3.

**Micro-drill (routing, 10 seconds each).** A set has three tabs: (1) the COO's strategy memo, (2) a quarterly revenue table by region, (3) the board's compliance thresholds. For each question below, name the single tab you'd open first — before reading any of them carefully:

1. "What was the Western region's Q3 revenue?"
2. "Why did the COO recommend pausing the Northern expansion?"
3. "Did software revenue meet the board's 45% minimum?"
4. "Which region grew fastest year over year?"

Answers: (1) Tab 2 — specific number lives in the table. (2) Tab 1 — reasoning and intent live in the memo. (3) Tabs 3 *and* 2 — a compliance check needs the threshold *and* the actual, so it's the only one that touches two tabs. (4) Tab 2 — a comparison across regions is a table operation. If you reached for the memo on (1) or (4), you're reading for content when you should be routing for data — that habit is what blows the time budget.

> **Recall check.** Close the book. State the two-pass protocol in two sentences. Then answer: in pass 1, what specifically do you NOT try to do? The answer: you don't memorize content — you build a navigation map. The test is whether you can distinguish *orientation* from *comprehension*. Students who can't make this distinction re-read all tabs on every question and run 2-3 minutes over time per set.

## @matching-question-to-tab

**Question type: Simple Lookup.** The most common MSR question type. You need one specific piece of information from one specific tab. The skill tested is navigation — reaching the right data point efficiently. No computation required.

**What lookup questions look like in the stem:**

- "According to [the memo / the revenue table / Tab 2]..."
- "Based on the table, what was [Region X]'s [metric] in [period]?"
- "The [person]'s [memo/report] states that..."
- "What [amount / percentage / figure] is given for..."

When you see any of these framings, your only job is to navigate precisely and read the correct cell or sentence.

**The three-second tab decision.** Before reading any tab carefully:

1. Does the stem name a specific tab or source? Go there directly.
2. Does it name a topic — a person, a region, a metric? Go to the tab you flagged for that topic in pass 1.
3. Ambiguous? Start with the data table. Tables answer more lookup questions than any other tab type.

**The specific-vs-general filter.**

| Question asks for | Look in |
|---|---|
| A specific number or percentage | Data table |
| A person's reasoning or intent | Narrative (memo, email) |
| Whether a rule was followed | Rules / targets tab |
| A reported result or finding | Abstract or meeting notes |

**The re-read vs. recall decision.** For lookup questions, you can sometimes answer from pass-1 memory if the data point was prominent (e.g., "which region had the highest revenue?"). For anything requiring a specific number, re-read. Don't trust recalled figures for precision — a remembered "$6.9M" might be $6.96M or $6.09M, and that difference can determine a whole Yes/No.

**The memo-vs-table precision trap.** Memos frequently characterize data in prose: "Central region revenue declined." A lookup question asking "what was the Central region's revenue decline?" needs the table number, not the memo's characterization. The memo says "declined"; the table says "$4.37M, down from $4.60M, a 5% decline." These are different levels of precision. The question determines which you need.

**Partial-tab reading discipline.** When you go to the data table for a lookup, read only the relevant row and column. Scanning the whole table for context wastes time and introduces distracting numbers that can contaminate your answer.

**Example.** Set with three tabs: (1) VP's internal memo, (2) regional revenue table, (3) board strategic targets.

- "What was the Eastern region's revenue in Q4?" → Tab 2, Eastern row, Q4 column. Done.
- "What rationale did the VP give for the Central region's decline?" → Tab 1, Central discussion. Done.
- "What growth target did the board set for hardware products?" → Tab 3. Done.

Each question takes 15-20 seconds once you navigate correctly. The navigation IS the skill being tested.

> **Self-explanation prompt.** Why does the test include lookup questions if they seem easy? If you can say "because under time pressure, students who re-read all tabs rather than navigating precisely will answer lookup questions correctly but run out of time on synthesis questions — efficient process is part of what's being measured" — you've understood the format. Lookup questions are the warm-up for harder synthesis, and they reward process discipline, not just knowledge.

## @cross-tab-synthesis

**Question type: Cross-Tab Synthesis.** Requires data from 2-3 tabs that you combine. You're not just locating — you're collecting and computing. This is where most MSR errors happen, and where process discipline matters most.

**What synthesis questions look like in the stem:**

- "If the board's target is X and the table shows Y, did the company..."
- "Based on all available information, which of the following..."
- "Considering the memo's claim and the revenue table, what was..."
- Any question requiring both a target (from a rules tab) and an actual (from a data table)
- Any question where you need to sum, divide, or compare across sources

**The three-step synthesis workflow.**

1. **List what you need.** Before touching any tab, read the question and enumerate every piece of data required. Write a short list on scratch paper: "I need Eastern revenue, I need the enterprise contract contribution, I need Eastern's prior-year revenue."
2. **Find each item.** Go tab by tab. Write the numbers down as you find them — on scratch paper, next to your list.
3. **Combine.** Do the arithmetic or logical combination on paper. Not in your head.

The discipline in step 2 is non-negotiable: write numbers as you find them. Students who try to hold 3-4 values in memory while switching tabs make errors — not because the math is hard, but because working memory is unreliable under time pressure when you're also navigating tabs.

**Synthesis pattern 1: Target vs. Actual (compliance check).**

One tab has a target or threshold. Another has the actual result. The question asks whether the target was met.

Workflow: locate the target → locate the actual → compare precisely.

**Example.** Tab 3: board target = software revenue must be at least 45% of total. Tab 2: software = $10.93M out of $24.30M total.

Actual software share: $10.93M / $24.30M = 44.97%. Target: 45%. Does it meet the target?

44.97% < 45%. No — misses by 0.03 percentage points. Note: if you had approximated 44.97% as "roughly 45%," you'd answer incorrectly. Precision matters on compliance questions. Don't round until you've made the comparison.

**Synthesis pattern 2: Extract, then adjust (remove or add a component).**

One tab gives you a total. Another (or the question itself) gives you a component to remove or add. You compute what the metric would be under the adjusted figure.

**Example.** Tab 2: Eastern region's total revenue = $6.96M; previous year = $5.80M. Tab 1 (memo): mentions enterprise contracts contributed $0.90M to Eastern's current revenue. Question: "What was Eastern's growth rate from sources other than enterprise contracts?"

- Adjusted revenue: $6.96M − $0.90M = $6.06M
- Organic growth: ($6.06M − $5.80M) / $5.80M = $0.26M / $5.80M ≈ 4.5%

The headline growth (from $5.80M to $6.96M ≈ 20%) is driven largely by a single contract. The organic rate of 4.5% tells a completely different story. That's the insight the question is probing.

**Synthesis pattern 3: Aggregated metric (weighted, not simple, average).**

When a question asks for a combined metric across multiple entities, you need weighted totals — not averages of percentages.

**Example.** "What percent of total revenue came from Software & Services?"

Wrong approach: average each region's S&S percentage. That weights a $1M region identically to a $10M region.

Correct approach: sum S&S revenue across all regions; divide by total revenue across all regions. The denominator is total company revenue, not the number of regions.

This pattern comes up on any aggregation question: average price, total growth rate, blended margin, combined share. Default to weighted math when combining across entities of different sizes.

**Synthesis pattern 4: Chain reasoning across three tabs.**

Sometimes the logic runs through all three: Tab 1 identifies the entity → Tab 2 has its data → Tab 3 has the relevant constraint.

Before computing, write out the chain: "I need [entity from Tab 1] → its [metric from Tab 2] → compared against [constraint from Tab 3]." Collect each piece, then evaluate.

**The "conflicting sources" rule.** Sometimes a memo says "6% decline" and the table shows 5.8%. The table is authoritative for numbers; the memo is authoritative for reasoning, attribution, and intent. If the question asks for the specific figure, use the table. If it asks why a result occurred, use the memo.

**Trap to watch.** When you combine percentages across entities of different sizes, never average the percentages — average the underlying totals. "The four regions averaged 40% software share" does not mean the company is at 40%; a single large region can drag the true figure far from the simple average. Sum the software dollars, sum the total dollars, then divide. Averaging percentages is the most expensive single error in cross-tab synthesis because the wrong number always looks reasonable.

**Micro-drill (60 seconds).** Two tabs. Tab 1 (table): Region A sold $9.0M, of which $3.6M was software; Region B sold $1.0M, of which $0.6M was software. Tab 2 (board target): company-wide software share must be at least 40%. Question: did the company meet the target? Work it before reading on.

Answer: **Yes, barely.** Simple average of the two shares is (40% + 60%) / 2 = 50%, which would clear the target with room to spare — but that's the trap. Weighted: total software = $3.6M + $0.6M = $4.2M; total revenue = $10.0M; share = 42%. Still above 40%, so the company complies — but the honest figure (42%) is much closer to the line than the averaged figure (50%) suggested. On a question where the target were 41%, averaging the percentages would have flipped your answer.

> **Recall check.** Without looking: state the three-step workflow. Then explain why step 2 — writing numbers down — is the part you cannot skip. If you said "because mental tracking of 3+ data points across tab switches exceeds working memory capacity under timed conditions" — correct. Writing takes two seconds; forgetting a number and recollecting costs thirty. The three-step workflow exists because multi-tab synthesis is genuinely harder than it sounds when time pressure is on.

## @conditional-and-hypothetical

**Question type: Conditional / Hypothetical.** These questions specify a change to the situation and ask what would follow. They test whether you can accurately update data under a new assumption — without accidentally changing things the question didn't modify.

**What these questions look like in the stem:**

- "If [condition], what would [outcome] have been?"
- "Suppose [change]. How many targets would..."
- "Had [entity] not been included, would..."
- "If the [rule / threshold] were [new value], which..."
- "Assuming [X], what is the revised [metric]?"

**The two flavors of hypothetical.**

**Flavor 1: Data carve-out or addition.**

The question removes or adds a component from a computed total, then asks you to recompute a metric.

Template:
1. Get the actual data from the tabs.
2. Apply the specified change (subtract, add, or replace a component).
3. Recompute the metric the question asks for.
4. Everything the question didn't mention stays the same.

**Example.** Three tabs: (1) marketing team's memo, (2) product launch data table, (3) campaign performance benchmarks.

Tab 2: Product A total units sold = 42,000. Total units across all products = 210,000. Tab 1: influencer campaign units for Product A = 8,400.

Question: "If the influencer campaign units were excluded, what would Product A's share of total unit sales have been?"

- Adjusted Product A units: 42,000 − 8,400 = 33,600
- Adjusted total units: 210,000 − 8,400 = 201,600
- Product A's adjusted share: 33,600 / 201,600 ≈ 16.7%

Cascade awareness: the adjustment reduces both the numerator (Product A) and the denominator (company total). Students who reduce only the numerator compute 33,600 / 210,000 = 16.0% and pick the wrong answer. The "held constant" rule means freeze only what wasn't logically affected — not everything.

**Flavor 2: Rule or threshold change.**

The question replaces a target, threshold, or constraint with a new value, then asks how the outcome changes.

Template:
1. Identify which entities currently pass or fail under the original rule.
2. Apply the new threshold.
3. Determine which entities switched (pass→fail or fail→pass).
4. Recount.

**Example.** Tab 3: board's hardware mix target = maximum 50%. Tab 2: four regions with hardware percentages of 38%, 44%, 52%, and 57%. Under the 50% target, two regions fail (52% and 57%).

Question: "If the board's hardware target were 60% instead of 50%, how many regions would meet it?"

- Under 60%: all four regions are at or below 60% — all four qualify.
- Answer: 4.

Work from "what changed" — don't recheck regions obviously far from the boundary unless the new threshold is near them.

**The "held constant" rule.** In any hypothetical, change only what the question specifies, and cascade only to things logically downstream. If the question increases Region X's revenue by $1M, adjust Region X's revenue, adjust any totals that include Region X, and recompute any ratios built from those totals. Do not touch other regions' individual revenues.

**Reading hypothetical stems precisely.** The stem has two parts: (1) what changed, and (2) what are you asked to compute. Confusing them is the most common error on this question type. Before touching any tab, write both parts on scratch paper: "Change: [X]. Compute: [Y]."

**Trap to watch.** Rounding intermediate values. Hypothetical questions often produce answers close to round numbers. If you round $8,400 to $8,000 during computation, your final answer shifts enough to land on the wrong choice. Keep full precision through every intermediate step; round only at the final comparison, and only if "approximately" appears in the question.

**Micro-drill (45 seconds).** Tab data: Product A sold 50,000 units; total units across all products = 250,000. The question states that 10,000 of Product A's units came from a one-time bulk order. "If the bulk order is excluded, what is Product A's share of total units?" Compute before reading on.

Answer: **16.7%.** The removed 10,000 units come out of *both* Product A and the company total: adjusted A = 40,000; adjusted total = 240,000; share = 40,000 / 240,000 = 16.7%. The cascade error is to shrink only the numerator — 40,000 / 250,000 = 16.0% — which is a real answer choice the test plants for exactly this slip. Whenever you remove a component, ask "what totals did this component live inside?" and adjust every one of them.

> **Recall check.** What are the two flavors of hypothetical question? For the data carve-out type — what is the "cascade" error students make, and why does it produce a wrong answer? (Answer: reducing only the numerator while leaving the denominator unchanged — because the removed component was also part of the total, the denominator must decrease too. Missing this gives a slightly low adjusted share, which maps to the wrong answer choice.) This is the highest-frequency error on conditional questions.

## @yes-no-statement-checks

**Question type: Yes/No Statement Check.** The question presents 3-5 statements about the multi-tab scenario. For each, you answer Yes (the available information supports it) or No (the available information contradicts it or is insufficient to confirm it).

**What these questions look like:**

- A table with 3-4 rows, each containing a statement and a Yes / No selection
- Stems like "Based on the available data, indicate whether each of the following statements is accurate"

**The verification sequence — one statement at a time.**

1. Read the statement. Identify the specific, checkable assertion.
2. Identify which tab(s) contain the relevant data.
3. Extract the numbers or facts.
4. Check: does the data support the statement, as written?
5. Mark Yes or No. Move to the next statement.

Treat each statement as completely independent. Don't carry assumptions from one to the next.

**Quantifier precision — the most common source of errors.**

| Quantifier | What "Yes" requires |
|---|---|
| "Exceeded by more than X" | Difference strictly > X (equality does not qualify) |
| "At least X" | Value ≥ X (equality qualifies) |
| "More than X" | Value > X (equality does not qualify) |
| "Every / all / each" | Must verify EVERY instance — one exception makes the answer No |
| "At most X" | Value ≤ X |
| "Exactly X" | Value = X precisely (no rounding) |

The test writes quantifiers to create near-misses. A statement claiming "Product B's revenue per unit exceeded $42" with actual data showing exactly $42.00 is designed to trap students who read "exceeded" loosely. "Exceeded" means strictly greater than. $42.00 does not exceed $42. Answer: No.

**The "every" trap in detail.** A statement like "every region achieved positive revenue growth" requires checking all four (or five) regions. Most students check two or three, see yes, and stop. If any single region is flat or negative, the answer is No — regardless of what the other regions did. Before checking, count how many instances the statement claims to cover, then verify all of them.

**The "can be determined" variant.** Some questions ask whether a statement *can be determined* from the available information. This is a three-way judgment: Yes, No, or Cannot Be Determined. If the tabs contain the necessary data — answer Yes or No based on it. If the tabs are silent on what the statement claims — answer Cannot Be Determined. This is different from No. "No" means the data contradicts it. "Cannot Be Determined" means the data doesn't address it.

**Synthesis within statements.** Many statements require combining data from two tabs. "Software revenue grew faster than hardware revenue" requires software growth rate and hardware growth rate — two separate lookups, then a comparison. Apply the same collection discipline as in cross-tab synthesis: list what you need, find each item, then compare.

**Example (worked in full).** Three-tab set about a product launch.

Statement: "Product B's revenue per unit exceeded $42."

- Tab 2: Product B revenue = $5.88M; Product B units sold = 140,000.
- Revenue per unit: $5.88M / 140,000 = $42.00 exactly.
- Statement: "exceeded $42" — does $42.00 exceed $42? No. Exceeded means strictly greater than.
- Answer: **No.**

This is a precision trap. The test writes $42.00 exactly because students who do the math correctly but read "exceeded" loosely will answer Yes. The statement would need to say "at least $42" or "no less than $42" for $42.00 to qualify.

**Example (the "every" trap).** Statement: "All four regions met the board's growth target of 8%."

- Tab 2: North = +12%, South = +9%, East = +20%, Central = −5%.
- Three regions met the target. Central did not.
- Answer: **No.**

If you stopped after checking North, South, and East — all yes — you'd bubble Yes. The one exception you didn't check overturns the whole claim.

**Micro-drill (quantifier precision, 15 seconds each).** The table shows: Product P revenue per unit = $30.00 exactly; four regions grew +5%, +5%, +5%, and +5%; total revenue = $48M. Mark each statement Yes or No:

1. "Product P's revenue per unit exceeded $30."
2. "Product P's revenue per unit was at least $30."
3. "Every region grew by more than 4%."
4. "Total revenue exceeded $48M."

Answers: (1) **No** — "exceeded" is strictly greater than; $30.00 does not exceed $30. (2) **Yes** — "at least" includes equality; $30.00 ≥ $30. (3) **Yes** — every region cleared 4%, and "every" is satisfied because all four did. (4) **No** — "exceeded $48M" needs strictly more than $48M; exactly $48M fails. If you missed (1) or (4), you are reading quantifiers loosely — and that is precisely the edge the test writes its near-misses on.

> **Self-explanation prompt.** Why does the GMAT use Yes/No format for MSR rather than five-choice format? If you can say "because multi-tab verification produces 3-5 independent binary judgments — each one requires locating and checking data — the format tests depth of process, not just the final answer" — you've understood the design. A student who checks only 2 of 4 statements carefully will get some wrong even if their math is sound. Completeness and precision are the skill.

## @answer-choice-traps

MSR wrong answers are built around five recurring patterns. Recognizing them as patterns — rather than being surprised by each one — lets you eliminate deliberately rather than second-guess.

**Trap 1: Right tab, wrong data point.**

The answer uses a real number from the correct tab — but the wrong row, column, or year. Example: a question asks for Eastern region's current-year revenue; a wrong answer gives Eastern's prior-year revenue (a number visible one column over in the same table). The trap works because the number is real and from the right region — the error is a dimensional slip, not an incorrect source.

*Defense:* Before going to the tab, write down exactly what dimension the question asks for — which region, which year, which metric. Check that dimension label against what you're reading.

**Trap 2: Right data, wrong operation.**

The correct numbers are retrieved, but the arithmetic is wrong — usually a growth-rate question where one choice gives the absolute change and another gives the percentage change.

Example: Eastern grew from $5.80M to $6.96M. Wrong answer: $1.16M (absolute difference). Correct answer: $1.16M / $5.80M ≈ 20% (growth rate). The wrong answer is the intermediate calculation, not the final one — it's a plausible stopping point.

*Defense:* Confirm what the question is asking for — absolute change, percentage change, or ratio — before computing. Write the formula on scratch paper, then fill in the numbers.

**Trap 3: Plausible but unsupported (out of scope).**

An answer makes a claim that sounds reasonable given the scenario but isn't supported by any tab. Common on synthesis and Yes/No questions. The claim is consistent with general knowledge, but the tabs don't say it.

Example: a memo describes declining revenue in one region; an answer says "the decline was due to increased competition." The memo gives numbers, not causes. Nothing in the tabs supports the competition claim.

*Defense:* Every answer to a MSR question must be anchored in specific tab content. "Sounds plausible" is not a Yes. If you can't point to the line in the tab, the claim isn't supported.

**Trap 4: Partially correct (fails on one instance you didn't check).**

An answer is true for most instances but fails for one. Frequent on "every / all / each" Yes/No statements. Students verify three of four cases, see three yeses, and select Yes without checking the exception.

Example: "All four regions met the board's growth target." Three did. Central didn't. If you checked North, South, East — all yes — and stopped, you'd pick Yes. The missed case determines the answer.

*Defense:* On any statement with a universal quantifier, count the instances the statement covers, then verify every one before answering. Treat it as a checklist, not a spot-check.

**Trap 5: Correct answer, wrong set (memory bleed).**

Within a single session, you may work multiple MSR sets. A number from an earlier set's tabs can bleed into memory and contaminate your retrieval for the current set. Or within a single set, a number from one tab is recalled as if it came from another.

*Defense:* For any specific numerical answer, go back to the tab and read the number directly rather than recalling it from memory — unless you read it in the last 10 seconds. Memory degrades fast under cognitive load. The tab is always right; your memory of the tab is sometimes not.

**Takeaway.** Four of these five traps share one root: the wrong answer is built from *real* material — a real number, a real region, a real intermediate result — placed where it doesn't belong. That's why MSR rewards anchoring every answer to a specific line in a specific tab. If you can't point to where the answer comes from, you haven't earned it, no matter how familiar the number looks.

## @summary

**The MSR workflow — two steps, applied to every set.**

1. **Orient (30-45 seconds).** Scan all tabs. For each: what type of tab? what topic? what's the structure? Build a mental table of contents, not a summary of content.
2. **Per question:** Read stem → identify which tab(s) → extract data → answer.

**The four question types — recognition and response.**

| Type | Stem signal | Key move |
|---|---|---|
| Simple Lookup | "According to..." / "What was [entity]'s [metric]?" | Navigate to the single correct tab; read only the relevant row or sentence |
| Cross-Tab Synthesis | "Based on all information..." / requires a target from one tab + actual from another | List all data points needed first; write each down before combining |
| Conditional / Hypothetical | "If [condition]..." / "Had [X] not been included..." | Apply the change to the actual data; cascade to affected totals; freeze everything else |
| Yes/No Statement Check | Statement table with Yes/No column | Verify each statement independently; parse quantifiers strictly; check every instance claimed |

**Time budget.**

| Phase | Target |
|---|---|
| Pass 1 (orient all tabs) | 30-45 seconds |
| Per question (pass 2 + answer) | 90-120 seconds |
| 3-question set total | 5-6 minutes |

If a set runs past 7 minutes, identify the moment it slipped. Almost always: re-reading tabs you didn't need because pass 1 was rushed or skipped. A 30-second investment in orientation pays for itself multiple times over.

**The five highest-leverage habits.**

1. Orient before diving — 30 seconds of tab-mapping prevents 2 minutes of disorganized back-and-forth.
2. Match question to tab before reading carefully — navigation is the core skill.
3. Write data points on scratch paper — never do multi-number synthesis in your head.
4. Check every instance on "every / all / each" statements — one exception overturns the entire claim.
5. Parse quantifiers precisely — "exceeded," "at least," "more than," and "exactly" have different verification standards.

**The five wrong-answer patterns to watch.**

- Right tab, wrong data point (wrong row, column, or time period)
- Right data, wrong operation (absolute change when the question wants percentage, or vice versa)
- Plausible but unsupported (sounds reasonable; no tab actually says it)
- Partially correct (fails on one instance you skipped)
- Memory bleed (recalled a number from the wrong set or wrong tab)

**What to notice as you drill the problem sets.**

Each set of 2-3 questions shares the same tabs. The orientation pass you do for question 1 pays off on questions 2 and 3 — you already know the tab map. By the end of the hard problem set, the two-pass protocol should feel like a reflex, not a procedure you have to consciously invoke. That's the goal.

**What to do next.** Open this chapter's problem sets — Easy first, then Medium. Run the two-pass protocol on every set from question one, even when a single careful read would be faster; you're training the reflex, not optimizing this one set. After each miss, write a single sentence naming which of the five wrong-answer patterns caught you, and tag the attempt in your error log so it resurfaces in your review queue. Once you're clearing Medium at 80%+, move to Hard and start a timer: the standard is 5-6 minutes per 3-question set, and Hard is where pacing breaks first. If you consistently run long, the problem is almost always orientation — go back and re-read the two-pass section before your next session.

**Time discipline in one line.** Orient in 30-45 seconds, spend 90-120 seconds per question, and never re-read a tab you've already mapped unless the question forces a specific number you didn't capture. Hold that and MSR stops being the section that eats your clock.
