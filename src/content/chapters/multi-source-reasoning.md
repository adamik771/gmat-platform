---
slug: multi-source-reasoning
title: Multi-Source Reasoning
section: DI
estimated_minutes: 60
prerequisites: []
summary: |
  Multi-Source Reasoning gives you 2-3 tabs of information — memos, tables, rules, emails, research abstracts — and asks questions that require synthesizing across them. The test isn't reading comprehension; it's navigation. You need to know which tab to consult for each question, extract the specific data points, combine them correctly, and verify against constraints. Master the two-pass navigation protocol (orient first, then dive in per question), internalize the five question types, and every MSR set becomes a 5-6 minute sequence rather than a frantic re-read of three screens.
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

  - id: scope-and-inference-limits
    type: reading
    title: "Scope and inference limits — what the tabs can and cannot prove"
    check_question_ids:
      - multi-source-reasoning-q5
      - multi-source-reasoning-q9

  - id: summary
    type: summary
    title: "The MSR workflow and the five question types"
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

Multi-Source Reasoning is an information architecture problem. You're given 2-3 tabs — a mix of memos, emails, data tables, rules lists, and research summaries. The challenge is not to understand any single tab deeply; it's to navigate across tabs efficiently when each question pulls from a different place.

**Why MSR is designed this way.** The test intentionally includes more information than any question uses. The designers want to see whether you can locate and extract specific data under time pressure — not whether you can read everything carefully. Students who try to absorb all three tabs before reading a single question are failing the test's actual challenge before they answer Question 1.

**Mental model.** MSR is a two-pass exercise. Pass 1: build a mental table-of-contents — what type is each tab, what topic does it cover, what's the key claim or data in it. Pass 2: deep-read only what the current question forces you to. Students who try to absorb everything in one pass consistently run out of time on a 6-question set. The two passes cost less total time than one careful pass, because most of what's in the tabs never gets asked about.

**The two-pass protocol.**

**Pass 1: Orient.** Before reading deeply, scan all tabs for 30-45 seconds. Build a mental map:

- What type is each tab? A memo? A data table? A set of rules?
- What topic does each tab address? (Sales figures, clinical results, budget allocations, etc.)
- What are the key data points or claims? (E.g., "Tab 2 has regional revenue numbers"; "Tab 3 has the board's strategic targets.")

Don't try to memorize content. You're building a *table of contents* in your head, not the whole book.

**Pass 2: Dive in per question.** Read the question stem, decide which tab(s) contain the needed information, and read those parts carefully. Ignore everything else.

**What to record in pass 1 by tab type.**

| Tab type | What to note |
|---|---|
| Memo / email / letter | Who's speaking? What's the main claim? Any key numbers mentioned? |
| Data table | What are the rows and columns? What's the unit? Is there a totals row? |
| Rules / targets / policy | How many rules? What's the scope — budget, strategy, compliance? |
| Research abstract | What was studied? What were the results? Were there noted limitations? |
| Meeting minutes | What decisions were made? What disputes remain open? |

**The time budget per set.**

| Phase | Time |
|---|---|
| Pass 1 — orient all tabs | 30-45 seconds |
| Per question — find data + answer | 90-120 seconds |
| Total for a 3-question set | 5-6 minutes |

If a 3-question set takes more than 7 minutes, you over-read in pass 1 or re-read tabs unnecessarily on individual questions. The fix: trust your pass-1 map more.

**The "who's claiming what" question.** When a tab contains narrative text, different people may be quoted or referenced. Track *who* is making each claim — questions often ask "based on Person X's memo" or "which committee member disagrees with Y." Miss the authorship and you can answer the right question about the wrong person.

**The "which tab has the numbers" heuristic.** Narrative tabs describe data in prose but rarely have precise figures. If a question asks for a specific percentage or dollar amount, go to the data table first.

> **Trap to watch.** The most common MSR error isn't arithmetic — it's re-reading all tabs for every question. Each full re-read costs 60-90 seconds you don't have. Train the reflex: question stem → identify tab → read only the relevant section of that tab.

> **Micro-drill.** Three tabs: (1) an internal email from a CFO discussing Q3 budget overruns; (2) a table of quarterly revenue by product line; (3) a board resolution listing three strategic objectives. Which tab would you consult for "Did Q3 revenue for the software product line exceed the board's growth target?" If you said Tab 2 for the revenue and Tab 3 for the target, the reflex is right. That's cross-tab — one lookup each, not a full re-read.

> **Recall check.** Close the section. State the two-pass protocol. Then: what do you NOT do in pass 1? (Answer: you don't try to memorize content — you build a table of contents.) Retrieval of that distinction is what separates 5-minute MSR sets from 9-minute ones.

## @matching-question-to-tab

Every MSR question is anchored in one or more tabs. Your first move after reading the question stem is to decide which tab(s) to consult. Students who dive in without making this decision first waste time reading irrelevant content and risk anchoring their answer to the wrong source.

**The five-step tab-matching protocol.**

1. **Look for explicit tab references.** "Based on Sarah Nguyen's memo..." points to the tab authored by her. "According to the revenue table..." points to the data table. Explicit naming is the easy case.
2. **Match the question's topic to the tab you mapped in pass 1.** "What was Eastern's revenue growth?" → the tab you noted as "regional revenue numbers."
3. **Apply the type-to-content filter.** Numbers live in tables. Rationale and intent live in memos. Constraints and requirements live in rules tabs.
4. **Flag cross-tab questions early.** Any question involving "based on all available information" or requiring a compliance check against a target uses multiple tabs. Budget for 2-3 lookups.
5. **When uncertain, start with the most specific tab and set a 30-second time box** before expanding to a second tab. Don't drift between tabs without a plan.

**The type-to-content filter.**

| What the question asks | Which tab type to check first |
|---|---|
| A specific number, percentage, or rank | Data table |
| The *reason* for a trend or decision | Narrative tab (memo, email) |
| Whether a constraint or target was met | Rules/targets tab, then data table to verify |
| Someone's opinion or inference | The memo attributed to that person |
| An aggregated or computed metric | Data table, possibly multiple columns |

**Example (three-tab set: VP memo, revenue table, board targets).**

- "What was Eastern's revenue growth?" → Tab 2. One lookup.
- "Why did Central's revenue decline?" → Tab 1 (the VP's explanation). One lookup.
- "Did the company meet its hardware-mix target?" → Tab 3 for the target, then Tab 2 for the actual figure. Cross-tab — two lookups.

**The "already-read vs. must-re-read" decision.** For simple lookups you recorded in pass 1, memory may be sufficient. For cross-tab or exact numerical questions, always go back to the tab — don't trust memory for precision.

**The "check all rules" discipline on compliance questions.** "How many of the board's four targets did the company meet?" requires checking each target in the rules tab against the corresponding data in the table. Skip one and you risk answering 3 instead of 2. Always enumerate.

**The "memo characterization vs. actual data" trap.** Memos say things like "Central declined significantly." The table shows the actual percentage. When a question asks for a number, always use the table — the memo's word "significantly" is unquantified and potentially misleading.

> **Trap to watch.** When a question references a memo's argument ("the CFO argues that..."), students often re-read the full memo. Instead, navigate directly to the paragraph containing that specific claim. A memo is a structured document — navigate within it, don't re-read it.

> **Micro-drill.** For each stem, write the tab type you'd check first — table, narrative, or rules:
> 1. "What percentage of Q3 revenue came from new clients?"
> 2. "What reason did the operations director give for the supply delay?"
> 3. "How many compliance targets did the company meet?"
> 4. "What was the combined software revenue for the North and East regions?"
>
> Answers: table / narrative / rules then table / table. If you got all four in under 10 seconds, the tab-matching reflex is calibrated.

> **Self-explanation prompt.** Why is matching the question to the tab before reading it better than scanning all tabs for every question? If you can say "because MSR questions test whether you can locate specific information — navigating to the right tab IS the skill being measured, not reading speed," you've understood why the match step is the whole game.

## @cross-tab-synthesis

Cross-tab synthesis is what makes MSR harder than Table Analysis. In Table Analysis, every answer comes from one table. In MSR, the answer is assembled from two or three different sources — and the information in each source is incomplete without the others.

**The three-step synthesis workflow.**

1. **List every data point the question requires.** Before opening any tab, identify what facts you need. "I need Eastern's current revenue, its previous revenue, and the enterprise contract contribution."
2. **Find each data point in the correct tab.** Record each on scratch paper as you locate it.
3. **Combine.** Perform the arithmetic or logical combination on what you've written down — not in your head.

**Why step 1 comes before opening any tab.** If you open Tab 2 and start reading without knowing exactly what you're looking for, you'll extract the wrong column, miss a relevant row, or stop reading too early. Listing the required facts first gives you a checklist — you don't stop until every item is checked.

**The "write it down" rule.** Mental synthesis of 3+ numbers under time pressure is where accuracy drops. Write each data point on scratch paper before combining. Two extra seconds of writing prevents a chain of arithmetic errors.

**Example (revenue synthesis).** "If Eastern's enterprise contracts contributed $0.90M in revenue, what would Eastern's growth rate have been without them?"

Data points needed:
- Eastern current revenue (Tab 2): $6.96M
- Enterprise contract contribution (from question stem, confirmed Tab 1): $0.90M
- Eastern previous revenue (Tab 2): $5.80M

On scratch paper: 6.96 − 0.90 = 6.06. Growth = (6.06 − 5.80) / 5.80 = 0.26 / 5.80 ≈ **4.5%**. Write the formula, then the numbers, then the result.

**The transitive reasoning chain.** Some questions require following a chain across three tabs: Tab 1 names an entity, Tab 2 gives that entity's data, Tab 3 sets the constraint for that entity. You must link all three before drawing a conclusion.

**Example (compliance chain).** "Does the Southern region's hardware mix meet the board's target?"

- Tab 1 (VP memo): Company-wide hardware split is 55%.
- Tab 2 (revenue table): Southern hardware = $1.91M of $2.99M total = 63.9%.
- Tab 3 (board targets): Hardware mix must not exceed 50%.

Chain: Southern actual (63.9%) > target (50%) → Southern does NOT meet the target. If you stopped at the company-wide 55% in Tab 1, you'd answer a different question. The chain requires all three tabs.

**The "conflicting narratives" pattern.** Two narrative tabs may present opposing views. When a question asks "which executive's characterization does the data support?", identify the specific claim each made and check which one the numbers confirm. The test is not asking who's right — it's asking whose stated position is more consistent with Tab 2.

**Example.** CFO memo: "Enterprise segment is driving all growth." CEO memo: "Growth is broad-based, not concentrated in any segment." Tab 2 shows: enterprise +40%, all other segments +3-4%. The data shows concentrated enterprise growth — more consistent with the CFO's characterization. Answer: the CFO.

**The "weighted average" trap.** When a question asks for a company-wide percentage, you cannot average the regional percentages. You must compute: (sum of the metric across regions) / (sum of the base across regions).

**Example.** "What percent of total revenue came from Software & Services?" Eastern S&S: $2.85M of $6.96M. Western S&S: $4.49M of $8.47M. Correct: total S&S = 2.85 + 4.49 = $7.34M; total revenue = 6.96 + 8.47 = $15.43M; S&S share = 7.34 / 15.43 ≈ 47.6%. Incorrect shortcut: (41% + 53%) / 2 = 47% — happens to be close here, but fails badly when regions differ in size.

> **Trap to watch.** After reading Tab 1, students sometimes form a hypothesis and skip checking Tab 2 or Tab 3. If the question requires any cross-tab signal, finish the full chain before concluding. Forming an early answer from partial information is the primary source of synthesis errors.

> **Micro-drill.** A question asks: "What would the company's total Software & Services revenue percentage have been if Eastern's S&S revenue were $3.50M instead of $2.85M?" Before opening any tab, list the three data points you need. Answer: (1) new Eastern S&S = $3.50M (given), (2) total revenue from all regions (Tab 2), (3) S&S from all other regions (Tab 2). If you listed those three in under 15 seconds, the pre-reading step is becoming automatic.

> **Recall check.** Cover the section. State the three-step synthesis workflow from memory. Then: why can't you average regional percentages to get a company-wide percentage? (Answer: different regions have different sizes — simple averaging ignores the weights.) If the answer didn't come immediately, re-read the weighted average section before proceeding.

## @conditional-and-hypothetical

Conditional questions change one element of the scenario and ask you to recompute an outcome under the new conditions. They're harder than lookup questions because there's no single cell to read — you must build the answer from modified inputs.

**The four-step conditional template.**

1. **Identify what changes.** Underline or note the altered element in the question stem.
2. **Identify what stays the same.** Everything NOT mentioned in the change is unchanged — including data in other tabs that isn't downstream of the alteration.
3. **Apply the change to the actual data.** Start from the real numbers, apply the modification.
4. **Recompute only the affected metric.** Don't recompute everything — just what the question asks for.

**The "held constant" rule.** This is the most commonly violated step. When a question says "if Eastern's enterprise contracts had not been signed," only Eastern's current revenue changes. Previous-year numbers don't change. Other regions don't change. Compute only what the hypothetical directly alters.

**Example (revenue carve-out).** "If Eastern's enterprise contracts contributed $0.90M, what would Eastern's growth rate have been without them?"

1. What changes: Eastern current revenue drops by $0.90M.
2. What stays the same: Eastern previous revenue ($5.80M), all other regions.
3. Apply change: $6.96 − $0.90 = $6.06M.
4. Recompute: growth = (6.06 − 5.80) / 5.80 ≈ **4.5%**.

**Example (entity exclusion).** "If the Central region were excluded, would the company still have met its 8% growth target?"

1. What changes: Central removed from both current and previous totals.
2. What stays the same: all other regions, the growth target.
3. Apply change: current without Central = $24.30 − $4.37 = $19.93M; previous without Central = $22.50 − $4.60 = $17.90M.
4. Recompute: growth = (19.93 − 17.90) / 17.90 = 2.03 / 17.90 ≈ 11.3%. Target met.

**The cascade effect.** Some hypotheticals alter a component that feeds into multiple derived metrics. Changing a region's revenue also changes: total revenue, total growth rate, and every ratio where total revenue is the denominator. Work through the cascade step by step — but only the parts the question asks about.

**Example (cascade).** "If Eastern's revenue had been $8.00M instead of $6.96M, what would the company's total revenue growth have been?"

- Old total: $24.30M. New Eastern: $8.00M. New total: 24.30 − 6.96 + 8.00 = **$25.34M**.
- Previous total (unchanged): $22.50M.
- New growth: (25.34 − 22.50) / 22.50 = 2.84 / 22.50 ≈ **12.6%** vs. actual 8.0%.

The cascade is two steps: update the total, then compute the rate. Students who use the old total as the denominator get the wrong rate. Write the updated number before dividing.

**Example (rule change).** "If the board's hardware target were 60% instead of 50%, how many targets would the company have met?"

Actual hardware mix: 55%. Under the 50% target, 55% fails. Under the new 60% target, 55% passes. Count originally-met targets and add one.

**Reading the hypothetical stem precisely.** The conditional is usually structured as: "If [change], what [outcome]?" Mis-reading "what was Western's growth without the hardware premium" as "what was Western's growth?" gives an answer that matches a real table value — a purposeful wrong-answer trap.

**The "approximately" signal.** When the question says "approximately," round to the nearest natural choice after computing. If you get 4.48% and the options are 4.5%, 7.2%, 10.4%, 14.8%, pick 4.5%. Don't second-guess by seeking the closest absolute value — pick the cleanly rounded match.

> **Trap to watch.** The cascading-denominator error: changing a component but using the original denominator when recomputing ratios. Always update the total before dividing. Write the updated number on scratch paper before doing the division step.

> **Micro-drill.** "A company's current total revenue is $24.30M. If the Northern region's revenue had been $0.50M higher, what would total revenue have been?" (Answer: $24.80M.) Now: "What was Northern's growth rate in the original data if it grew from $3.80M to $4.10M?" (Answer: 0.30/3.80 ≈ 7.9%.) If you computed both in under 20 seconds without scratch paper, try the same exercise with four regional adjustments simultaneously. That's when not writing it down starts costing points.

> **Self-explanation prompt.** Why must you identify what's "held constant" before computing a hypothetical? If you can say "because the hypothetical alters exactly one element — computing downstream effects of anything else changing would be answering a question that wasn't asked," you've internalized why step 2 prevents arithmetic drift.

## @yes-no-statement-checks

Some MSR questions present a set of statements and ask whether each one is supported (Yes) or not supported (No) by the information across the tabs. This looks like Table Analysis, but the mechanics are heavier: each statement may require a cross-tab lookup before you can evaluate it, and the data comes from multiple sources rather than a single table.

**What makes MSR Yes/No different from Table Analysis.** In Table Analysis, you read one table and all answers come from that table. In MSR Yes/No questions, a single statement may require combining data from Tab 1, Tab 2, and Tab 3. The judgment call (yes/no) is identical — but the work per statement is 2-3x heavier. Budget accordingly.

**The per-statement workflow.**

1. Identify exactly what the statement claims — a number, a comparison, a direction, a cause.
2. Identify which tab(s) contain the relevant data.
3. Extract the data from each tab and record on scratch paper.
4. Evaluate: does the data directly support the statement? (Yes) Does it directly contradict it? (No) Does it neither confirm nor contradict it? (See the next section.)

**Example (single-tab).** Statement: "The Western region's hardware revenue exceeded its software revenue by more than $500K."

- Tab 2: Western hardware = $5.49M, Western software = $4.49M.
- Difference: $5.49 − $4.49 = $1.00M = $1,000K.
- $1,000K > $500K. **Yes.**

**Example (cross-tab).** Statement: "Eastern region's growth rate exceeded the company's board-approved growth target."

- Tab 2: Eastern previous = $5.80M, current = $6.96M. Growth = 1.16/5.80 = **20%**.
- Tab 3: Board growth target = 8%.
- 20% > 8%. **Yes.** One statement required two tabs — budget for it.

**The quantifier deep-dive.** The exact quantifier in a statement determines the verification standard:

| Quantifier | What makes the statement True |
|---|---|
| "Every region" / "All regions" | ALL must satisfy the condition |
| "At least one" | ONE OR MORE must satisfy it |
| "No region" / "None" | ZERO must satisfy it |
| "Exactly two" | Precisely two — three or one both make it False |
| "More than X%" | Strictly greater — equal fails |
| "At least X%" | Greater or equal — equal passes |
| "At most X" | Less than or equal — X+1 fails |

**Example (universal quantifier).** Statement: "Every region achieved positive growth." Check all regions. If Central is −5%, the answer is No — even if all other four regions grew. Universal quantifiers require exhaustive checking — don't stop at the first passing example.

**Example (threshold quantifier).** Statement: "Software & Services revenue grew by at least 20% across the company." Previous S&S total = $8.55M. Current S&S total = $10.93M. Growth = (10.93 − 8.55) / 8.55 ≈ 27.8%. 27.8% ≥ 20%. **Yes.**

**The "exact vs. approximate" precision trap.** If a statement says "exactly 10%" and the data shows 9.8%, the answer is No. The word "approximately" is the only signal that relaxes the precision requirement. Without it, treat equality as strict.

> **Trap to watch.** On universal-quantifier statements, don't stop at the first passing example. "Every region" requires checking every row before marking Yes. Five regions, four checked — you're guessing on the fifth. Budget the extra 15 seconds to complete the scan.

> **Micro-drill.** A question has three Yes/No statements: Statement 1 is a single-tab lookup; Statement 2 involves a universal quantifier across four regions; Statement 3 involves a cross-tab comparison. Roughly how many seconds should you budget per statement? (Reasonable answer: ~20s, ~40s, ~35s — total ~95 seconds, within the 90-120s per-question budget.) If your instinct was "equal time for each," recalibrate — universal-quantifier and cross-tab statements take materially longer.

> **Self-explanation prompt.** Why is MSR Yes/No heavier than Table Analysis Yes/No? If you can say "because each MSR statement may require 2-3 tab lookups instead of one column scan, and the synthesis step adds both time and error risk," you've identified why MSR Yes/No questions tend to appear in the medium-hard bucket.

## @scope-and-inference-limits

MSR questions frequently ask not just what the data shows, but whether a conclusion can be drawn *at all* from the information provided. Scope questions are where students most often lose points to outside knowledge or over-inference — and they're disproportionately represented in the hard question pool.

**The fundamental rule.** Every answer must be grounded in the tabs. What you know about business, chemistry, history, or economics from outside this specific set is irrelevant — using it leads to wrong answers. The question is always: does THIS information, in THESE tabs, support this conclusion?

**The three scope failure modes.**

**1. Outside knowledge trap.** "Steel prices generally fall when demand drops" is true in the real world. If it's not stated in the tabs, it doesn't count. If a question asks whether a drop in steel demand implies lower costs, and the tabs say nothing about costs, the answer is "cannot be determined" — not "yes, because that's how markets work."

**2. Unstated-assumption trap.** The memo says "we expect to hit our revenue target next quarter." That means the executive believes they will — not that they will. The statement "the company will meet its Q4 target" is unsupported. The tabs support only "the executive expects to meet the Q4 target." Attributed belief ≠ confirmed fact.

**3. Over-inference trap.** Two facts that are individually true can produce a false inference if the combination isn't verified. "Revenue grew" and "headcount grew" do not together support "revenue per employee grew" — unless you compute the ratio. Don't chain facts without checking the combined claim numerically.

**The "cannot be determined" question type.** Some questions ask which statements "can be determined" from the tabs. "Can be determined" means: given only the tabs, you can calculate or confirm the statement definitively. "Cannot be determined" means: the tabs don't provide sufficient information, or the necessary computation requires a quantity not given anywhere.

**Example (cannot be determined).** Tabs give regional revenues for current and previous year. Statement: "The company's market share increased."

You have revenue, but not industry-wide revenue. Without the industry total, market share cannot be computed. **Cannot be determined.**

**Example (can be determined — and is false).** Statement: "Eastern region's current revenue is higher than Western's." Tab 2: Eastern $6.96M, Western $8.47M.

Direct lookup. Eastern < Western. The statement is **False** — but it absolutely can be determined. "No/False" is not the same as "cannot be determined." The distinction matters for the answer format.

**The "supported" vs. "consistent with" distinction.** Some questions ask whether the data *supports* a statement; others ask whether the data is *consistent with* it.

- "Supported" means the data provides affirmative evidence for the claim.
- "Consistent with" means the data doesn't contradict the claim — but doesn't necessarily confirm it.

A statement can be consistent with the data without being supported by it. "The company may expand into a new market next year" — the tabs don't rule this out, so it's consistent; but the tabs provide no evidence for it, so it's not supported. The question wording sets the standard.

**The "author's claim vs. verified fact" distinction.** Narrative tabs contain assertions, not established facts. A VP memo stating "our quality is best-in-class" is the VP's claim. If a question asks what the data shows about quality, and the only source is that assertion, the correct answer is "the VP claims quality is best-in-class" — not "quality IS best-in-class." Treat narrative assertions as attributed beliefs unless a data tab independently confirms them.

**Practical workflow for scope questions.**

1. Read the statement.
2. Ask: is this directly calculable from the numbers in the tabs?
3. If yes, compute and judge true/false.
4. If no, ask: would I need information not present in the tabs? If yes → cannot be determined. If the tabs actively contradict the statement → No/False. If the tabs are silent but the question asks "supported" → not supported.

> **Trap to watch.** The "silence = supported" trap: students mark a statement Yes because they can't find a reason to say no. Silence isn't support. Support requires a positive signal in the data. Absent a direct connection, the answer is "cannot be determined" or "not supported" depending on the question wording.

> **Micro-drill.** Three statements. Classify each as (A) determinable and true, (B) determinable and false, or (C) cannot be determined — assuming the only available data is a regional revenue table (no margin data, no industry totals). (1) "Eastern revenue is higher than Central revenue." (2) "The company's gross margin improved." (3) "Eastern grew faster than the industry average." Answers: A / C / C. If you marked B for Statement 2 (thinking "false because margin data isn't available"), recalibrate — the issue isn't that it's false, it's that it can't be determined from this data.

> **Recall check.** Cover the section. Name the three scope failure modes. Then: what is the difference between "supported" and "consistent with"? (Answer: supported = affirmative evidence exists; consistent with = not contradicted but not confirmed.) If you can't state both cleanly, re-read before attempting Q5 and Q9.

## @summary

Multi-Source Reasoning is a navigation-and-synthesis skill. The two-pass protocol plus the five question-type templates cover every MSR set.

**The two-pass protocol:**

1. **Orient** (30-45 seconds): scan all tabs, build a mental table of contents — what type is each tab, what topic does it cover.
2. **Dive in per question**: match the stem to the right tab(s), extract the needed data points, combine on scratch paper.

**The five MSR question types.**

| Type | What it tests | Key technique |
|---|---|---|
| Simple lookup | Locating one piece of information | Know which tab type holds which data |
| Cross-tab synthesis | Combining info from 2-3 tabs | List required data points first; write before combining |
| Conditional / hypothetical | Recomputing under a changed scenario | Identify what changes and what stays constant; update totals before ratios |
| Yes/No statement check | Verifying multi-tab claims | Evaluate quantifiers strictly; check all rows on universal claims |
| Scope / inference limit | Whether a conclusion can be drawn | Use only what's in the tabs; distinguish "supported" from "consistent with" |

**Time-management targets per set.**

- Orient: 30-45 seconds.
- Per question: 90-120 seconds.
- Total for a 3-question set: 5-6 minutes.

If you're over 7 minutes on a single set, you re-read tabs you didn't need. Step back and ask: "What specific data point am I actually missing?"

**The six highest-leverage MSR habits.**

1. **Orient before diving.** 30 seconds of tab-mapping saves 2 minutes of confused back-and-forth later.
2. **Match question to tab before reading carefully.** Don't re-read all tabs for every question.
3. **Write down data points before combining.** Mental synthesis of 3+ numbers is where errors accumulate.
4. **Check all rules on compliance questions.** When the question enumerates items, verify all of them.
5. **Read quantifiers carefully on Yes/No statements.** "Every," "at least," "exactly," "more than" each set a different verification standard.
6. **Stay inside the tabs.** Outside knowledge and over-inference are wrong-answer factories on scope questions.

**Common traps across MSR.**

- Partial tab coverage — looking at Tab 1 and Tab 2 but ignoring Tab 3 when the question needs all three.
- Trusting a memo's characterization when the question asks for a precise number from the data table.
- Missing cascading effects in hypothetical questions, especially forgetting to update the denominator.
- Using a simple average of percentages instead of a weighted total.
- Confusing "current year" and "previous year" figures.
- Marking a statement "supported" because the tabs don't contradict it — silence isn't support.

**What to do next.**

If you scored below 70% on the medium problem set: revisit the tab-matching section. Before each question, state aloud which tab you're opening and why. The error is almost always a navigation error, not an arithmetic one.

If you scored 70-90% on the medium set: check any conditional/hypothetical mistakes first — conditional errors are almost always cascade errors (forgetting to update the total). Then move to the Table Analysis chapter, which builds on the same Yes/No discipline in a single-table format.

If you scored above 90% on the medium set but below 80% on the hard set: your difficulty is likely scope questions (Q5 and Q9). Re-read the scope section before retrying them. Hard MSR questions almost always include a "cannot be determined" or "supported vs. consistent with" element.

After this chapter: the Two-Part Analysis chapter is the other DI format requiring multi-step reasoning. The inference skills from Section 6 apply directly there.
