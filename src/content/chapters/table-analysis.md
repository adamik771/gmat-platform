---
slug: table-analysis
title: Table Analysis
section: DI
estimated_minutes: 50
prerequisites: []
summary: |
  Table Analysis gives you a sortable data table and three Yes/No statements. The skill is a repeatable three-step workflow — identify the relevant columns, filter or sort to reach the relevant rows, verify the claim with minimal arithmetic — executed fast enough to answer all three statements in under three minutes. This chapter teaches that workflow, the seven statement patterns that cover most of what you will see, and the arithmetic shortcuts that eliminate unnecessary computation.
sections:
  - id: pretest
    type: pretest
    title: Try before you learn
    intro: |
      Before I teach you anything, try these two. Missing them is expected — the point is to prime your brain with the problem before the instruction arrives. Research consistently shows that attempted practice before study improves retention. Rate your confidence honestly.
    pretest_question_ids:
      - table-analysis-q11
      - table-analysis-q12

  - id: what-is-table-analysis
    type: reading
    title: "What Table Analysis looks like — and why it is trainable"
    check_question_ids: []

  - id: the-three-step-workflow
    type: reading
    title: "The three-step workflow — identify, filter, verify"
    check_question_ids:
      - table-analysis-q13

  - id: sorting-vs-filtering
    type: reading
    title: "Sorting vs. filtering — when to use each"
    check_question_ids:
      - table-analysis-q22
      - table-analysis-q23

  - id: statement-patterns
    type: reading
    title: "The seven statement patterns"
    check_question_ids:
      - table-analysis-q1
      - table-analysis-q2
      - table-analysis-q3

  - id: averages-and-medians
    type: reading
    title: "Averages, medians, and aggregated metrics"
    check_question_ids:
      - table-analysis-q14
      - table-analysis-q15

  - id: cross-category-comparisons
    type: reading
    title: "Cross-category comparisons — subsetting and ranking"
    check_question_ids:
      - table-analysis-q17
      - table-analysis-q26

  - id: derived-metrics-and-traps
    type: reading
    title: "Derived metrics and common traps"
    check_question_ids:
      - table-analysis-q7
      - table-analysis-q19

  - id: summary
    type: summary
    title: "The five Table Analysis habits"
    check_question_ids: []

problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - table-analysis-q11
      - table-analysis-q12
      - table-analysis-q13
      - table-analysis-q21
      - table-analysis-q22
      - table-analysis-q23
      - table-analysis-q24
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - table-analysis-q1
      - table-analysis-q2
      - table-analysis-q3
      - table-analysis-q5
      - table-analysis-q7
      - table-analysis-q8
      - table-analysis-q9
      - table-analysis-q14
      - table-analysis-q15
      - table-analysis-q16
      - table-analysis-q17
      - table-analysis-q18
      - table-analysis-q25
      - table-analysis-q26
      - table-analysis-q27
      - table-analysis-q28
      - table-analysis-q29
      - table-analysis-q30
      - table-analysis-q31
      - table-analysis-q32
  hard:
    target_accuracy_by_score:
      "605": 25
      "645": 40
      "685": 60
      "725": 80
    question_ids:
      - table-analysis-q4
      - table-analysis-q6
      - table-analysis-q10
      - table-analysis-q19
      - table-analysis-q20
      - table-analysis-q33
      - table-analysis-q34
      - table-analysis-q35
---

## @what-is-table-analysis

**What the question type looks like.** Every Table Analysis item presents a single data table — typically 5–12 columns and 8–25 rows — alongside three statements. Your job is to evaluate each statement against the data and select Yes or No. Each statement is scored independently; partial credit is possible.

The table has one affordance the GMAT gives you for free: **sortable columns**. Click any column header and the rows re-sort by that column, ascending or descending. This is not decoration. It transforms rank-based statements from slow mental scanning into a two-second read at the top of the column.

**The Yes/No format is constrained in a useful way.** The statements are not open-ended. The test draws from a small set of statement structures: comparisons between category averages, rank checks, threshold counts, derived-metric comparisons, and existence checks. Once you recognize which structure a statement belongs to, the right operation is determined. You are pattern-matching under time pressure — not analyzing a dataset from scratch.

**The time budget.** The DI section is 45 minutes for 20 questions. Table Analysis questions warrant about 2–3 minutes each. Target under 60 seconds per statement. If you are past 3:30 on a single TA question, cut your losses: make your best directional guess on the remaining statement and move on. Bleeding time on one difficult statement costs you more at the end of the section than one uncertain Yes/No.

**What makes TA errors happen.** Nearly every wrong answer in Table Analysis traces back to one of four mistakes:

1. Applying the right metric to the wrong rows — filtering incorrectly or forgetting to filter at all
2. Reading the wrong column after correct filtering
3. Using the wrong formula for a derived metric (e.g., wrong denominator for % change)
4. Confirming a universal claim after checking only the first few rows

The three-step workflow in the next section eliminates all four of these when applied consistently.

**Mental model.** Table Analysis is not a comprehension problem. You are not forming opinions about the data. You are a verification machine: the statement makes a claim, you check whether the numbers support it, you return Yes or No. Treat it like a quality-control check. Precision over interpretation.

## @the-three-step-workflow

Every Table Analysis statement reduces to the same three steps. Run this sequence for every statement, every time, until it is reflexive.

**Mental model.** Step 1 prevents you from wasting time on irrelevant columns. Step 2 ensures the arithmetic applies to the right rows. Step 3 executes only the computation the statement actually requires. Each step has a specific failure mode: Step 1 failure → you compute things the statement never asked about. Step 2 failure → you compute the right metric on the wrong rows. Step 3 failure → you confirm a claim without completing the verification. All three produce wrong answers.

**Step 1 — Identify the relevant columns.**

Read the statement. Ask: which columns does this actually reference? Most statements touch 1–2 columns from a table that may have 8–12. Everything else is noise for this statement.

**Worked example.** Table columns: Employee, Department, Years of Service, Salary (K), Performance Rating. Statement: "The average salary of the Strategy department is higher than the average salary of the Finance department."

Relevant columns: Department (to filter) and Salary (to compute). Years and Rating do not appear in the statement. Identify this in 3–5 seconds and ignore those columns.

**Step 2 — Filter or sort to reach the relevant rows.**

Decide which operation the statement requires:

- **Filter** when the statement specifies a subset: "employees in Strategy," "products priced under $50," "transactions from Q3."
- **Sort** when the statement asks about rank: "the highest-paid employee," "the region with the lowest growth," "the second-most-common category."
- **Both** when the statement ranks within a subset: "the highest-paid Finance employee."

**Step 3 — Verify the claim against the filtered rows.**

With the right rows in front of you, execute the minimum arithmetic the statement requires. Compare to the threshold or comparator. Return Yes or No.

"Minimum arithmetic" is deliberate. Many verifications do not require exact computation. The next two sections cover shortcuts that reduce Step 3 time significantly.

**The time budget.**

| Step | What happens | Target |
|---|---|---|
| Step 1: Identify | Find relevant columns | 5 seconds |
| Step 2: Filter / sort | Reach relevant rows | 10–15 seconds |
| Step 3: Verify | Compute and compare | 20–35 seconds |
| Total per statement | | ~55 seconds |

Three statements at 55 seconds = 2:45. You have a 15-second buffer before the 3-minute target.

**Worked example — full workflow.**

Use this reference table for all examples in this chapter:

| Employee | Department | Years | Salary (K) | Age |
|---|---|---|---|---|
| A | Strategy | 5 | 120 | 32 |
| B | Finance | 8 | 140 | 38 |
| C | Strategy | 3 | 95 | 28 |
| D | Operations | 12 | 155 | 42 |
| E | Finance | 2 | 85 | 26 |
| F | Operations | 7 | 125 | 35 |
| G | Strategy | 10 | 150 | 40 |
| H | Finance | 6 | 115 | 33 |

Statement: "The average salary of Strategy employees is higher than that of Finance employees."

- **Step 1:** Relevant columns: Department, Salary. Ignore Years and Age.
- **Step 2:** Filter Department = Strategy → rows A, C, G (salaries 120, 95, 150). Filter Department = Finance → rows B, E, H (salaries 140, 85, 115).
- **Step 3:** Both groups have 3 employees. Compare sums instead of averages: Strategy = 365, Finance = 340. Same count, larger sum → larger average. **Yes.**

The sum shortcut in Step 3 (valid because both groups have equal size) is covered in detail in the Averages section. The workflow here: Step 2 gave you the right rows, Step 3 stayed focused on what the statement was actually claiming.

> **Recall check.** Close the chapter. State the three steps of the Table Analysis workflow. State one failure mode for each step. Now state the time budget per step. If you can do this without looking, the workflow is encoding. If you cannot, read this section once more and try again before moving on.

## @sorting-vs-filtering

The GMAT TA interface lets you sort any column with a click. This single affordance changes the difficulty level of rank-related statements from "scan every row" to "read the top of the sorted column."

**Mental model.** Sorting is navigation — it reorganizes the table so the row you need is at the top or bottom. Filtering is selection — it reduces the table to only the rows that qualify. Choosing the wrong tool costs 30–60 seconds of unnecessary work. Choosing the right tool makes many statements trivially fast.

**Use SORT when the statement involves rank or extremes:**

- "The highest / lowest X" → sort X descending / ascending, read row 1
- "The second-highest X" → sort descending, read row 2
- "The median of column X" → sort X, find the middle row(s)
- "How many rows exceed threshold X" → sort X ascending, find where values cross the threshold, count above

**Use FILTER when the statement specifies a subset:**

- "Employees in Department Y" → filter on Department = Y, work within that subset
- "Products priced between $10 and $50" → filter on the price range
- "Transactions with rating above 4 AND from Region East" → filter on both conditions (intersection)

**Use BOTH when the statement ranks within a subset:**

- "The highest-paid Finance employee" → filter to Finance first, then scan or sort salary within that group
- "The department with the lowest average growth" → filter per department, compute per group, compare results

**Decision heuristic.** Ask: "Am I looking for the top or bottom of something across all rows?" → sort. "Am I looking at something within a specific labeled group?" → filter. If both, filter first (smaller table), then sort the reduced set.

**Worked example (sort).** Statement: "The highest-paid employee works in Operations."

Sort Salary descending: D (155), G (150), B (140), F (125), A (120), H (115), C (95), E (85). Row 1: D, Department = Operations. **Yes.**

**Worked example (filter then sort).** Statement: "The highest-paid employee in Strategy earns more than the highest-paid employee in Finance."

Filter Strategy: A (120), C (95), G (150) → highest is G at 150. Filter Finance: B (140), E (85), H (115) → highest is B at 140. 150 > 140. **Yes.**

**Worked example (sort for a count).** Statement: "More than three employees earn over $120K."

Sort Salary descending: 155, 150, 140, 125, 120, 115, 95, 85. Count strictly above 120: 155, 150, 140, 125 — four values. Four > three. **Yes.**

**Trap to watch.** "Is there any employee over 40 who earns less than $120K?" reads like a sort question but is actually a filter. Filter: Age > 40 AND Salary < 120. Age > 40: only D (42, 155). D earns 155 — not below 120. Filtered set is empty. **No.** Sorting by age would put D at the top, which looks helpful, but you still need to check salary manually — and in this case the condition fails immediately.

## @statement-patterns

Seven statement patterns cover roughly 90% of GMAT Table Analysis statements. Identify the pattern within 5 seconds of reading a statement and you know the exact move before touching the table.

**How to use this section.** Read each pattern, its signal words, its move, and the worked example. Then cover the example and reconstruct the move from the signal words alone. Once you can do that for all seven, the workflow becomes pattern-matching rather than problem-solving.

All examples use the reference table from the Three-Step Workflow section.

---

**Pattern 1 — Threshold count.**

*Signal words:* "more than half," "at least N," "fewer than X rows," "the majority of."

*Move:* Filter on the condition. Count the rows that qualify. Compare the count to the threshold.

**Worked example.** Statement: "More than half of the employees have more than 5 years of service."

Eight employees total. Filter Years > 5: B (8), D (12), F (7), G (10), H (6) — five employees. Five out of eight is greater than four (half of eight). **Yes.**

*Speed note:* For "more than half" with n rows, you need count > n/2. For n = 8, you need count > 4 — so 5 qualifies immediately. No fraction computation necessary.

---

**Pattern 2 — Rank check.**

*Signal words:* "the highest," "the lowest," "ranked first," "the employee with the most," "which region has the greatest."

*Move:* Sort the relevant column. Read the top or bottom row. Confirm whether the stated attribute (department, category, label) matches.

**Worked example.** Statement: "The employee with the most years of service works in Operations."

Sort Years descending: D (12), G (10), B (8), F (7), H (6), A (5), C (3), E (2). Row 1: D, Department = Operations. **Yes.**

*Speed note:* Rank checks are among the fastest TA statements — one sort, one read. Under 20 seconds if you use the sort function. The only thing to verify is whether the row attribute matches the statement's claim.

---

**Pattern 3 — Category comparison.**

*Signal words:* "the average / median of [group A] is higher than [group B]," "exceeds," "is lower than," "compared to [category]."

*Move:* Filter to each group. Compute the metric for each group. Compare.

**Worked example.** Statement: "The average age of Finance employees is lower than the average age of Strategy employees."

Filter Finance: B (38), E (26), H (33). Sum = 97, count = 3. Filter Strategy: A (32), C (28), G (40). Sum = 100, count = 3. Both groups have count 3, so compare sums: 97 < 100. Finance average < Strategy average. **Yes.**

*Speed note:* When both groups have the same count, compare sums — skip the division entirely. When counts differ, you must divide. See the Averages section for the full toolkit.

---

**Pattern 4 — Within-row derivation.**

*Signal words:* "for every employee," "in all cases," "each company's X exceeds its Y," "no row has," "every value of X is greater than Y."

*Move:* Go row by row comparing two columns within the same row. One counterexample proves the statement false — stop the moment you find it.

**Worked example.** Statement: "Every employee over 30 earns more than $100K."

Identify employees over 30: A (32, 120), B (38, 140), D (42, 155), F (35, 125), G (40, 150), H (33, 115). All six earn above 100. **Yes.**

*Speed note:* Start with rows most likely to be counterexamples — employees near the boundary (just over 30, or lower-paid). If the statement is false, you find the counterexample in the first suspicious row and stop immediately.

---

**Pattern 5 — Existence check.**

*Signal words:* "at least one," "there exists," "is there any," "some employees satisfy," "does any row."

*Move:* Filter on the full condition (both constraints if there are two). If the filtered set is nonempty, the answer is Yes. You need one confirming row — stop as soon as you find it.

**Worked example.** Statement: "At least one Operations employee earns less than $130K."

Filter: Department = Operations AND Salary < 130. Operations employees: D (155), F (125). F has Salary 125 < 130. One confirming row found. **Yes.**

*Speed note:* Existence checks are among the fastest statements once you recognize them. Scan for one example. Confirm it. Stop. The error is over-checking after you have already confirmed the claim.

---

**Pattern 6 — Range check.**

*Signal words:* "all values of X fall between," "no value exceeds," "the minimum is at least," "the range of Y is less than," "always between."

*Move:* Find the minimum and maximum of the relevant column. Check whether both bounds satisfy the stated condition.

**Worked example.** Statement: "All employee ages are between 25 and 45."

Sort Age: 26 (E), 28 (C), 32 (A), 33 (H), 35 (F), 38 (B), 40 (G), 42 (D). Min = 26, max = 42. Both within [25, 45]. **Yes.**

*Speed note:* Sort the column first. A range check is then a two-second read at the top and bottom of the sorted list. Without sorting, you scan every row looking for outliers — slower and error-prone.

---

**Pattern 7 — Correlation / trend check.**

*Signal words:* "the employee with the highest X also has the highest Y," "the top N in X are also the top N in Y," "tends to increase as," "positively / negatively correlated."

*Move:* Find the top (or bottom) row(s) of column X. Check the rank of those same rows in column Y.

**Worked example.** Statement: "The employee with the most years of service also has the highest salary."

Sort Years descending: D (12) is row 1. D's Salary = 155. Sort Salary descending: D (155) is also row 1. Same employee leads both columns. **Yes.**

*Speed note:* Two sorts, two reads. No arithmetic. Correlation checks are fast once recognized — the cognitive load is in confirming the same row appears at the top (or near the top) of both sorted columns.

---

**The universal vs. existential asymmetry.**

This applies across all seven patterns and is worth making explicit:

- **Universal claim** ("every," "all," "no row has") — proven false by a single counterexample. Scan for suspicious rows first — the easy rows are not where the answer hides.
- **Existential claim** ("at least one," "there exists") — proven true by a single confirming example. Stop as soon as you find one.

Applying these correctly makes Patterns 4 and 5 dramatically faster. A universal claim over 20 rows could take 2 minutes to verify exhaustively; scanning the 3–4 most suspicious rows first often resolves it in 15 seconds.

> **Self-explanation prompt.** Pick any two of the seven patterns. For each, write one sentence explaining: what operation you perform on the table and why that operation is the right one for that pattern. If you can articulate the *why*, you will recognize these patterns under exam pressure — not just when the material is fresh.

## @averages-and-medians

Statements involving averages or medians look computationally expensive. Three shortcuts reduce most of them to under 30 seconds.

**Mental model.** Average computation has two parts: summing and dividing. Most TA average comparisons never need the division. Your goal is to do the minimum arithmetic that determines the Yes/No answer — no more.

---

**Shortcut 1 — The sum trick (equal group sizes).**

If both groups have the same number of rows, skip the division. A larger sum produces a larger average when counts are equal.

**Worked example.** Statement: "The average salary of Strategy is higher than that of Finance."

Strategy: rows A, C, G — salaries 120, 95, 150 → sum 365, count 3.
Finance: rows B, E, H — salaries 140, 85, 115 → sum 340, count 3.

Both have count 3. Compare sums: 365 > 340. Strategy average > Finance average. **Yes.** Division skipped.

*When it does not apply:* if group sizes differ (e.g., Strategy has 3 rows, Operations has 2), a larger sum does not guarantee a larger average — you must divide both.

---

**Shortcut 2 — The deviation trick (is the average above a threshold?).**

Compute (value − threshold) for each row. If the sum of deviations is positive, the average exceeds the threshold. If negative, it falls below.

**Worked example.** Statement: "The average age of all employees is above 34."

Ages: 32, 38, 28, 42, 26, 35, 40, 33. Deviations from 34: −2, +4, −6, +8, −8, +1, +6, −1. Sum = 2. Positive → average above 34. **Yes.**

Computing the actual average (274 / 8 = 34.25) gives the same answer but requires full addition. The deviation approach gives you the sign — which is all you need — with smaller arithmetic.

*This shortcut is most useful when values are close to the threshold.* If the threshold is 34 and all values are in the 30s, deviations are small numbers. If values are far from the threshold, a quick estimate is usually sufficient without needing deviations.

---

**Shortcut 3 — Median from a sorted column.**

Sort the relevant column. The median is:

- **Odd n:** the value at position (n + 1) / 2
- **Even n:** the average of the values at positions n/2 and (n/2) + 1

**Worked example.** Statement: "The median salary exceeds $120K."

Sort Salary ascending: 85, 95, 115, 120, 125, 140, 150, 155 (n = 8). Middle positions: 4 and 5 → values 120 and 125. Median = (120 + 125) / 2 = 122.5. 122.5 > 120. **Yes.**

*Speed note:* Sort the column with one click, count to the middle row(s), read. For a table with 8 rows, this takes under 15 seconds.

---

**Weighted averages.**

Some TA questions involve weighted averages — rows contribute a weight (transaction volume, employee count, units sold) rather than adding a single value to a simple mean.

**Worked example.** Two regions: East (100 units, avg price $5), West (200 units, avg price $8). Statement: "The overall average price exceeds $7."

Weighted average = (100 × 5 + 200 × 8) / (100 + 200) = (500 + 1,600) / 300 = 2,100 / 300 = 7.00. Not strictly greater than 7. **No.**

*Trap:* the unweighted average of $5 and $8 is $6.50 — also below $7, but for the wrong reason. When weights differ substantially, direction can be unexpected. Always identify whether the question is asking for a simple or weighted average.

---

**Do I need exact arithmetic?**

Before computing, estimate: is the comparison close? If one group sum is 365 and the other 340 with equal counts, the answer is clear without division. If sums are within 5% of each other with different counts, you may need exact values.

Develop the habit of estimating first. If the estimate is decisive, move on. If it is borderline, compute once carefully.

> **Recall check.** State the three shortcuts from memory: sum trick (when does it apply? when doesn't it?), deviation trick (how do you interpret the sign of the sum?), median formula for even n. If you can state all three accurately, you are ready for the problem set. If one is fuzzy, re-read only that shortcut.

## @cross-category-comparisons

Statements that compare multiple categories — "the department with the highest average X," "rank the regions by Y" — require organizing multiple computations without losing track of intermediate results.

**Mental model.** The challenge is not the arithmetic — it is cognitive load. You compute a number for Group A, hold it in memory, compute for Group B, compare. Under time pressure, that is where errors happen: not in the math, but in attributing the wrong number to the wrong category, or forgetting to filter a second group correctly. The discipline here is organizational: write down every intermediate result before comparing.

**The two-pass technique.**

Pass 1: identify all categories relevant to the statement.
Pass 2: for each category, filter and compute the metric. Write the result with the category label before moving to the next.

**Worked example.** Statement: "Of the three departments, Operations has the highest average years of service."

Pass 1: three categories — Strategy, Finance, Operations.
Pass 2 (written as you go):

- Strategy: A (5), C (3), G (10) → sum 18, count 3, avg 6.0. Write: Strategy = 6.0
- Finance: B (8), E (2), H (6) → sum 16, count 3, avg 5.3. Write: Finance = 5.3
- Operations: D (12), F (7) → sum 19, count 2, avg 9.5. Write: Operations = 9.5

Compare: Strategy 6.0, Finance 5.3, Operations 9.5. Operations is highest. **Yes.**

Note: Operations has count 2 versus 3 for the others — the sum trick does not apply. You must divide: 19 / 2 = 9.5.

**Subgroup max/min.**

"The oldest Finance employee is younger than the oldest Strategy employee."

Filter Finance: B (38), E (26), H (33) → max age 38. Filter Strategy: A (32), C (28), G (40) → max age 40. 38 < 40. **Yes.**

This is a two-filter, two-read, one-comparison sequence. Keep them separate — don't try to hold both max values in memory simultaneously.

**Conditional aggregation.**

"The total salary of employees over 35 exceeds $400K."

Filter: Age > 35 → B (38, 140), D (42, 155), G (40, 150). Sum: 140 + 155 + 150 = 445. 445 > 400. **Yes.**

**Intersection filter.**

"All Finance employees over 30 earn more than $100K."

Filter: Department = Finance AND Age > 30 → B (38, 140), H (33, 115). Check each: both earn above 100. **Yes.**

This is Pattern 4 (within-row check) applied to a filtered subset. Apply both filter conditions first, then check the universal claim within that subset.

**Trap to watch.** "AND" and "OR" produce entirely different filtered sets. Department = Finance AND Age > 30 is the intersection — only employees who satisfy both conditions. Department = Finance OR Age > 30 is the union — every Finance employee plus every over-30 employee from any department. "OR" filters are rare in TA but they do appear. Re-read carefully if you see the word "either."

> **Self-explanation prompt.** Why does writing down intermediate values during a cross-category comparison matter more than during a single-category check? If you can say "because multi-category comparisons require holding one group's result in memory while computing the next group's result — and memory under timed pressure is unreliable — writing each number down eliminates that failure point," you have identified the specific cognitive bottleneck this discipline prevents.

## @derived-metrics-and-traps

Derived metrics — ratios, percentage changes, per-unit values — require computing a new number from two or more columns. These are the most arithmetic-intensive TA statements and the most error-prone.

**Mental model.** A derived metric turns the table into something the table does not directly contain. You have to build it. The risk is double: you can use the wrong formula, or you can apply the right formula to the wrong rows. Write the formula down before pulling any values from the table.

---

**Ratio (column A / column B).**

Statement: "The region with the highest conversion rate (Revenue / Visitors) is East."

Compute Revenue / Visitors for each region. Sort the derived ratios. Read the top row. Check whether it is East.

---

**Percentage change from column A to column B.**

**Formula:** % change = (B − A) / A × 100. The denominator is always the starting value.

Statement: "More than half of companies grew by at least 25% from Q1 to Q4."

For each company: compute (Q4 − Q1) / Q1. Count companies where this is ≥ 0.25. Compare count to half the total.

---

**Per-unit metric.**

Statement: "Revenue per employee is highest at Company D."

Compute Revenue / Employees for each company. Sort. Read row 1.

---

**Multi-step derivation.**

Some questions require two derived metrics: "The company with the highest revenue-per-employee also has the lowest cost-per-employee."

Compute both ratios for every row. Find the top-revenue-per-employee row. Check whether that same row has the lowest cost-per-employee ratio. Two ratios, two reads.

Writing down intermediate values is most critical here. Holding "revenue/employee for all 8 companies" in memory while computing "cost/employee" produces transposition errors reliably.

---

**The seven traps — named for fast recall under pressure:**

| Trap | What goes wrong |
|---|---|
| The rank-vs-metric trap | A column labeled "Rank" contains rank numbers (1, 2, 3), not the metric being ranked — comparing ranks arithmetically gives nonsense |
| The units trap | Revenue in thousands vs. millions; rates in percent vs. decimal — always check column headers before computing |
| The wrong-row trap | After filtering, verify you are reading values only from the filtered rows, not the full table |
| The one-row trap | Universal claims require checking all qualifying rows — confirming the first row is not confirming the claim |
| The denominator trap | Percentage change uses the starting value (old) as denominator, not the ending value (new) |
| The apples-oranges trap | Some statements compare revenue to profit, or salary to headcount — re-read what is actually being compared before computing |
| The rounding trap | If answer choices differ by less than 1%, do not round intermediate values — compute exactly |

**The "do I need to compute?" check.**

Before reaching for arithmetic, scan for visual dominance. If one category's values are clearly the largest across every relevant column, the answer may be Yes without any calculation. If one category's count is the smallest while having the largest sum, the per-unit value is almost certainly the highest — a 5-second visual confirms it.

Arithmetic is the fallback, not the default. The fastest TA solvers compute as little as possible.

**Worked example.** Statement: "Company D has the highest revenue per employee." Company D has revenue 200 (highest in the table) and employees 5 (lowest in the table). No other company can have a higher revenue-per-employee ratio when D dominates both directions. **Yes** — no calculation required.

> **Self-explanation prompt.** Why are percentage-change questions the most error-prone TA items? If you can say "because they require three correct steps — identifying the starting value, computing the difference, dividing by the starting value — and an error in any one of those three corrupts the comparison, while universal or threshold claims then require repeating that computation across every qualifying row," you have mapped the full failure surface. That map tells you exactly where to slow down.

## @summary

Table Analysis is an execution problem. The concepts are not complex; the challenge is applying a clean, disciplined process fast enough to answer three statements in under three minutes, every time.

**The five Table Analysis habits.**

1. **Identify relevant columns before touching the table.** Read the statement. Find the 1–2 columns it references. Ignore everything else for this statement.
2. **Choose sort or filter before computing.** Sort for rank and extremes. Filter for subsets. Use both when ranking within a subset.
3. **Recognize the pattern within 5 seconds.** Seven patterns cover ~90% of all statements. The moment you see the signal words — "highest," "at least one," "every row," "average of A vs. B" — the move is determined.
4. **Write down every intermediate value.** Do not hold multiple category results in memory simultaneously. One number on the scratch pad takes 2 seconds; one memory error costs 30.
5. **Exploit the asymmetry.** Universal claims fail on one counterexample — scan suspicious rows first. Existential claims succeed on one example — stop the moment you find it.

---

**The seven patterns — quick reference:**

| Pattern | Signal words | Move |
|---|---|---|
| Threshold count | "more than half," "at least N" | Filter → count → compare to threshold |
| Rank check | "highest," "lowest," "ranked first" | Sort → read row 1 or last → check attribute |
| Category comparison | "average of A vs. average of B" | Filter each → compute → compare |
| Within-row derivation | "every," "all," "no row" | Row-by-row: find the counterexample fast |
| Existence check | "at least one," "there exists" | Filter on conjunction → check if nonempty |
| Range check | "all values between a and b" | Sort → check min and max |
| Correlation check | "highest X also has highest Y" | Sort X → find row 1 → check Y rank |

---

**When you are running out of time.**

If you are 2:30 into a TA question with one statement left: eliminate choices that require the expensive computation, make a directional estimate, and move on. Running out of time at the end of the DI section costs you more than one uncertain Yes/No on a hard statement.

---

**What to do next.**

Work through the three problem sets below, starting with Easy regardless of your target score. The first several questions will feel slow as you consciously run the three-step workflow. By the eighth or tenth question, the pattern recognition should start feeling automatic. That shift — from deliberate procedure to reflexive recognition — is the skill this chapter is building.

For every question you miss: note which step failed. Did you filter the wrong rows (Step 2)? Misread a column header (Step 1)? Apply the wrong formula to a derived metric (Step 3)? One-sentence error log entry per mistake gives you more information than re-reading the chapter.

Once you complete the problem sets, Table Analysis questions will cycle into the spaced retrieval queue. That is where the pattern recognition solidifies.
