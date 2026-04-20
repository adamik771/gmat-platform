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

Multi-Source Reasoning is an information architecture problem. You're given 2-3 tabs — usually a mix of narrative text (memos, emails, reports), data tables, and rule lists. The challenge isn't understanding any one tab; it's knowing where each type of information lives and navigating efficiently when questions pull from different places.

**The two-pass protocol.**

**Pass 1: Orient.** Before reading deeply, scan all tabs for 30-45 seconds. Build a mental map:

- What is each tab? A memo? A table? A set of rules?
- What topic does each tab address? (Sales figures, clinical results, budget allocations, etc.)
- What are the key data points or claims in each? (E.g., "Tab 2 has regional revenue numbers"; "Tab 3 has the board's strategic targets.")

Don't try to memorize content. You're building a *table of contents* in your head, not the whole book.

**Pass 2: Dive in per question.** For each question, read the stem, decide which tab(s) contain the needed information, and read those parts carefully. Ignore the rest.

**Why this beats deep-reading all tabs.** MSR sets typically have 3 questions per set, and each question usually needs 1-2 specific data points out of the dozens present across the tabs. Reading everything thoroughly on pass 1 wastes time on information you'll never use. Orient fast, then dive on demand.

**The time budget per set.**

- Pass 1 (orient): 30-45 seconds.
- Per question (pass 2 + answer): 90-120 seconds.
- Total for a 3-question set: ~5-6 minutes.

This is aggressive — but achievable when you orient efficiently. Students who deep-read all three tabs upfront often spend 3+ minutes on reading alone, leaving only 2 minutes per question.

**What to build in pass 1.**

| Tab type | What to note |
|---|---|
| Memo / email / letter | Who's speaking? What's the main claim? What are the key numbers mentioned? |
| Table | What are the rows and columns? What's the unit? What are the totals? |
| Rules / targets list | How many rules? What's the general scope (budget, strategy, compliance)? |
| Research abstract | What was studied? What were the results? |
| Meeting minutes | What decisions were made? What disputes remain? |

**The "who's making what claim" question.** When a tab contains narrative text, different people may be quoted or referenced. Track who's claiming what — because questions often ask "based on Person X's memo" or "which of the committee members disagrees with Person Y."

**The "which tab has the numbers" heuristic.** Tables have data. Memos usually describe data in prose but often lack precise numbers. If a question asks for a specific percentage or dollar figure, check the table first.

> **Recall check.** Close the book. State the two-pass protocol. Now: in pass 1, what do you NOT do? (Answer: you don't try to memorize content. You build a table of contents, not the whole book.) Retrieval of the distinction between orienting and deep-reading is what separates 6-minute MSR sets from 10-minute ones.

## @matching-question-to-tab

Every MSR question is anchored in one or more tabs. Your first move after reading the question stem is to decide which tab(s) to consult.

**The three diagnostic moves for tab matching:**

1. **Look for tab-naming language.** Questions often reference content directly: "Based on the memo from Sarah Nguyen..." points to Tab 1. "According to the revenue table..." points to Tab 2. "To comply with the board's strategic targets..." points to Tab 3.

2. **Match the question's topic to tab contents.** If the question asks about dollar amounts, check the table. If it asks about a specific person's reasoning, check the relevant memo.

3. **When in doubt, check multiple tabs.** Some questions require synthesizing across tabs. If the question involves any phrase like "based on all three tabs" or "considering all available information," plan to consult every tab.

**The "specific vs. general" filter.**

- Questions asking for specific numbers or rankings → look at the data table.
- Questions asking about intent, rationale, or opinion → look at the narrative (memo, email).
- Questions involving constraints or compliance → look at the rules tab.

**Example.** MSR set about a company's regional sales, with three tabs: (1) VP's internal memo, (2) revenue table by region, (3) board-approved strategic targets.

- "What was the Eastern region's revenue growth?" → Tab 2 (the table).
- "Why did the Central region decline?" → Tab 1 (the memo explains — "loss of two major retail accounts").
- "Did the company meet the board's hardware-mix target?" → Tab 3 (for the target) + Tab 2 (for the actual numbers). Cross-tab.

**The "already-read vs. re-read" decision.** For simple data lookups, you usually remember enough from pass 1 to answer without re-reading. For cross-tab synthesis or specific numerical questions, re-read the relevant tab — don't trust memory for precision.

**The "check every relevant tab" rule on compliance questions.** "How many of the board's targets did the company meet?" requires checking Tab 3 for *each* target, then consulting Tab 2 for the corresponding number. Don't skip rules — if the answer is 1 out of 4, you'd better have verified all 4.

**Example of bad shortcutting.** Question asks "how many of the 4 board targets were met?" Student glances at tab 3, sees three targets that "sound met," picks 3. But the fourth — which the student skipped — might contradict and lower the count to 2. Always check all rules when the question enumerates compliance.

**The "memo claims vs. actual data" trap.** Memos often make claims like "our Central region revenue declined." If a question asks about the Central region's decline, check the TABLE for the actual number — the memo's characterization might be qualitative, but the question might require a specific percentage.

> **Self-explanation prompt.** Why is navigating to the right tab first better than reading the question and diving into the passages linearly? If you can say "because questions are written to test whether you can locate specific information, not whether you can re-read all tabs under time pressure — navigating to the right tab IS the skill being tested," you've internalized the point of the question format.

## @cross-tab-synthesis

The hardest MSR questions require combining information from two or three tabs. These are where most students slow down — they need a disciplined workflow.

**The three-step synthesis workflow.**

1. **Identify all data points needed.** Read the question and list every piece of information required. "I need Eastern region revenue, I need the enterprise contract contribution amount, I need the previous year's Eastern revenue."
2. **Find each data point in the correct tab.** Write them down (on scratch paper) as you find each.
3. **Combine.** Do the arithmetic or logical combination the question requires.

**Example (synthesis).** Question: "If the Eastern region's enterprise contracts (mentioned in the memo) contributed $0.90M in revenue this year, what would Eastern's growth rate have been without them?"

Data points needed:
- Eastern current revenue (from Tab 2): $6.96M.
- Enterprise contract contribution (from question, confirmed in Tab 1 mention): $0.90M.
- Eastern previous revenue (from Tab 2): $5.80M.

Combine: without contracts, Eastern revenue = 6.96 - 0.90 = 6.06M. Growth = (6.06 - 5.80)/5.80 ≈ 4.5%.

**The "write down as you go" discipline.** Don't try to hold 3-4 numbers in your head while doing arithmetic. Write them on scratch paper, then combine. Mental math with 3+ numbers under time pressure is where most errors happen.

**The "which tab agrees with which" cross-check pattern.** Sometimes tabs partially conflict — a memo says "Central declined 6%" but the table shows 5%. The table is usually authoritative for numbers; the memo is authoritative for rationale. Use each tab for what it's specifically good at.

**The "transitive reasoning" pattern.** Sometimes a chain: "A is referenced in Tab 1, A's specific values are in Tab 2, A's constraint is in Tab 3." You need to follow the chain. Example: "Does the Southern region's hardware mix meet the board's target?" → Tab 1 tells you the company split is 55% hardware (too high), Tab 2 tells you Southern's hardware is 1.91 of 2.99 = 63.9%, Tab 3 tells you the target is 50% max. Southern is 63.9% hardware — exceeds the 50% target → does NOT meet.

**The "conflicting claims" pattern.** Two narrative tabs can present different views (e.g., a CFO memo optimistic about Q3 vs. a CEO memo cautious). When a question asks "who would support X" or "which view is most consistent with Y," the test is identifying which perspective matches the situation — not deciding who's right.

**The "weighted average across tabs" pattern.** For any aggregated metric, you usually need weighted averages, not simple averages.

**Example.** "What percent of total revenue came from Software & Services?" You can't average the regional S&S percentages — that weights a small region the same as a large one. Instead: sum S&S across regions, divide by total revenue across regions.

> **Recall check.** Close the book. State the three-step synthesis workflow. Now: why can't you use mental math for a 3-data-point question? (Answer: because tracking three numbers plus arithmetic exceeds working memory capacity for most people; errors compound across steps.) Drilling the "write it down" habit is what keeps your accuracy high on hard synthesis questions.

## @conditional-and-hypothetical

Some MSR questions ask what would happen IF certain conditions were different: "If the Eastern region's enterprise contracts had not been signed, what would the growth rate have been?" These are conditional or hypothetical questions.

**The structure.** The question specifies a change to the situation. You need to compute what the data would look like under the alternative scenario, then answer.

**The template.**

1. Identify the change specified in the question (some revenue removed, an additional cost added, a region excluded).
2. Start with the actual data from the tabs.
3. Apply the change (subtract $0.90M, add 10% to a number, exclude a region from the total).
4. Recompute the metric the question asks about.

**Example (revenue carve-out).** "If the Eastern region's enterprise contracts contributed $0.90M, what would Eastern's growth rate have been without them?"

Actual Eastern revenue: $6.96M. Hypothetical: $6.96 - $0.90 = $6.06M. Previous revenue (unchanged): $5.80M. Growth = (6.06 - 5.80)/5.80 ≈ 4.5%.

**Example (entity exclusion).** "If the Central region were excluded, would the company still have met its growth target?"

Actual total: $24.30M (from Tab 2). Without Central: $24.30 - $4.37 = $19.93M. Previous total without Central: $22.50 - $4.60 = $17.90M. Growth without Central: (19.93 - 17.90)/17.90 ≈ 11.3%. Company target (say, 8%): exceeded.

**Example (rule change).** "If the board's hardware target were 60% instead of 50%, how many targets would the company have met?"

Recompute with the new target. Hardware was 55% — now meets the 60% target. Previously didn't meet. One additional target met. So if originally 1 target was met, now 2 would be.

**The "held constant" assumption.** In a hypothetical, everything NOT mentioned in the change stays the same. If the question says "if Central's revenue had grown by 5% instead of declining by 5%," don't also adjust the totals or the percentages — just change Central's growth and recompute anything downstream.

**The "cascading effect" awareness.** Sometimes a hypothetical has cascading consequences. Changing a region's revenue changes the total, which changes every region's share of the total. Work through the cascade carefully.

**The "verify the assumption is consistent" check.** Occasionally a hypothetical introduces an inconsistency with other tabs. For example, "If the VP's memo said hardware was 70% instead of 55%..." — in this case, the question is testing whether you update downstream numbers consistent with the memo's new claim.

**Reading hypothetical stems carefully.** The conditional is often embedded in a phrase: "If [condition], what [outcome]?" Underline both parts. A common error is missing exactly what the hypothetical changed.

> **Trap to watch.** When the question says "approximately," the answer is usually rounded. If you compute 4.48% and the answer choices are 4.5%, 7.2%, 10.4%, 14.8%, pick 4.5% — not the next closest by absolute distance. "Approximately" signals round-to-the-nearest-natural-choice, not round-to-the-closest-numeric.

## @yes-no-statement-checks

Some MSR questions follow a Table Analysis-style format: a set of Yes/No statements, with "Yes" meaning the statement is supported by the available information.

**The template.** For each statement, determine whether the multi-tab information supports it or not. The answer is yes if the statement follows from the data across the tabs.

**The workflow per statement.**

1. Identify what the statement claims.
2. Identify which tab(s) contain the relevant information.
3. Check if the statement is directly supported (yes) or directly contradicted (no) by those tabs.
4. If the statement is about something NOT covered in the tabs, answer depends on whether the question asks "supported" or "consistent with."

**Example.** Set with three tabs about a product launch. Statement: "The Western region's hardware revenue exceeded its software revenue by more than $500K."

- From Tab 2: Western hardware = $5.49M, software = $4.49M.
- Difference: $5.49 - $4.49 = $1.00M = $1,000K.
- Claim: difference > $500K? $1000K > $500K. **Yes.**

**The "can be determined" filter.** Some questions ask whether each statement "can be determined" (i.e., is yes/no answerable) from the information given. A statement about something the tabs don't address is "cannot be determined" — different from "No."

**The "exact vs. approximate" caveat.** If a statement says "exactly 10%" and the data shows 9.8%, that's technically No. GMAT sometimes uses "approximately" to signal that rounding is OK; without that word, strict equality may be required.

**The "combining with prior data" pattern.** Statements sometimes require you to combine tabs: "The Eastern region's growth exceeded the company's total growth by more than 10 percentage points." This requires Eastern's growth (20%) and total growth (8%) — difference is 12 pp, which exceeds 10, so Yes.

**The "strict" quantifier gotcha.** "Every region achieved positive growth" requires checking all regions. If Central is -5%, the answer is No — even though most regions did grow.

**The "at most / at least" parsing.** "At most three targets were met" means 0, 1, 2, or 3 — four possibilities. "At least two were met" means 2, 3, or 4 — three possibilities. Read quantifiers carefully.

**Example.** Statement: "Software & Services revenue grew by at least 20% across the company." Compute: Previous S&S = $22.50M × (1 - 0.62) = $22.50 × 0.38 = $8.55M. Current S&S = $10.93M. Growth = ($10.93 - $8.55)/$8.55 ≈ 27.8%. 27.8% ≥ 20%. **Yes.**

> **Self-explanation prompt.** Why is MSR's Yes/No format different from Table Analysis's Yes/No format? If you can say "because MSR requires synthesizing across tabs, not just filtering a single table, the computation usually involves 2-3 data sources rather than 1," you've identified why MSR feels heavier — the work per statement is denser. Plan accordingly.

## @summary

Multi-Source Reasoning is a navigation-and-synthesis skill. The two-pass protocol plus the four question-type templates cover every MSR set.

**The two-pass protocol:**

1. **Orient** (30-45 seconds): scan all tabs, build a mental table of contents.
2. **Dive in per question**: match the stem to tabs, extract the needed data, combine.

**The four MSR question types:**

| Type | What it tests | Key technique |
|---|---|---|
| Simple lookup | Locating one piece of information | Know which tab contains what |
| Cross-tab synthesis | Combining info from 2-3 tabs | Write down each data point before combining |
| Conditional / hypothetical | Recomputing under a changed scenario | Apply the change to the actual data, recompute |
| Yes/No statement check | Verifying multi-tab claims | Treat each statement independently; check quantifiers |

**Time-management targets per set.**

- Orient: 30-45 seconds.
- Per question: 90-120 seconds.
- Total for a 3-question set: 5-6 minutes.

If you're over 7 minutes on a single set, something went wrong — usually re-reading tabs you didn't need. Step back, look at your scratch paper, and ask "what specific data point am I missing?"

**The five highest-leverage MSR habits.**

1. **Orient before diving.** 30 seconds of tab-mapping saves 2 minutes of confused back-and-forth later.
2. **Match question to tab before reading carefully.** Don't re-read all tabs for every question.
3. **Write down data points on scratch paper.** Mental synthesis of 3+ numbers is error-prone.
4. **Check all rules on compliance questions.** When the question enumerates, you must check all items.
5. **Read quantifiers carefully on Yes/No statements.** "Every," "at least," "more than" each have different verification standards.

**Common traps across MSR:**

- Partial tab coverage (looking at Tab 1 and 2 but ignoring Tab 3 when the question needs it).
- Trusting a memo's characterization when the question asks for a precise number in the table.
- Missing cascading effects in hypothetical questions.
- Using a simple average when a weighted average is needed.
- Forgetting which figures are "current year" vs "previous year."

Drill the 15 questions in this chapter across the three problem sets. Each set has 2-3 questions that share a single set of tabs — so reading the tabs efficiently on the first question pays off on the rest. By the end of the hard set, the two-pass protocol should feel like second nature.
