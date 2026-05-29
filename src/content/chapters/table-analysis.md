---
slug: table-analysis
title: Table Analysis
section: DI
estimated_minutes: 45
prerequisites: []
summary: |
  Table Analysis gives you a sortable data table plus a series of Yes/No statements, and asks whether each statement is true given the data. The test is not about reading speed — it is about workflow discipline. You need a repeatable orient-filter-sort-verify routine that answers each statement in under 60 seconds without ever re-reading the whole table. Master the pre-question orientation, internalize the seven statement patterns, and learn when to approximate instead of computing exactly. Do those three things and Table Analysis becomes one of the most reliably scored question types on the DI section.
sections:
  - id: pretest
    type: pretest
    title: Try before you learn
    intro: |
      Before I teach you anything, try these two. It is fine to miss them — research shows that *attempting* questions before instruction primes your brain to encode the lesson better. Rate your confidence honestly; your calibration matters more than your accuracy right now.
    pretest_question_ids:
      - table-analysis-q11
      - table-analysis-q12

  - id: the-three-step-workflow
    type: reading
    title: "The three-step workflow — orient, filter, verify"
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
    title: "The seven most common Yes/No statement patterns"
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
    title: "The Table Analysis playbook"
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

## @the-three-step-workflow

Before reading a single statement, spend ten seconds orienting to the table. This is not wasted time — it is the investment that makes every statement faster and prevents the most common Table Analysis error: confusing columns or misreading units mid-calculation.

**Step 0 (10 seconds, once per question): Orient yourself.**

Scan the table header. Ask three questions:
1. What does each column represent, and what are the units?
2. How many rows are there?
3. Is there a "Total" or "Average" row at the bottom? (If so, flag it now — accidentally including it in a row-level filter is a classic error.)

After 10 seconds you should be able to say: "This is a 12-row table showing employees, with columns for department, years of experience, salary in thousands, and age. No totals row."

**Why orientation matters.** Most Table Analysis errors are not arithmetic errors. They are filter errors — computing the right formula on the wrong rows because you did not know the table's structure before the clock pressure began. Orientation done once prevents this in every statement.

**Mental model.** The workflow has four moves: orient the table, identify the relevant column(s), filter or sort, then verify the claim. Skip orientation and you lose track of units. Skip identification and you compute across the wrong columns. Skip filtering and you compute across too many rows. Skip verification and you bubble the trap answer that looks right at a glance. Each move takes a fixed amount of time — together they produce a reliable answer in under 60 seconds.

**Step 1 (5 seconds): Identify the relevant column(s).**

Read the statement. Which 1-2 columns does it actually reference? Most statements touch 2 columns out of 5-10. The rest are irrelevant — ignore them.

**Example.** Table columns: Employee, Department, Years, Salary (K), Age. Statement: "The average salary of Strategy employees is higher than that of Finance employees." Relevant columns: Department (to filter) and Salary (to average). Years and Age play no role — do not read them.

**Step 2 (15 seconds): Filter or sort.**

- If the statement specifies a subset ("employees in Strategy," "products priced under $50"), **filter** — work only with those rows.
- If the statement asks about rank or ordering ("the highest-paid employee," "the median salary"), **sort** the relevant column.

**Step 3 (35-40 seconds): Verify.**

With the right rows identified, do the arithmetic: compute the average, count rows, find the max/min. Compare to the statement. Decide Yes or No.

**The complete time budget.**

- Step 0 (orientation, paid once per question): 10 seconds.
- Step 1 per statement (identify columns): 5 seconds.
- Step 2 per statement (filter or sort): 15 seconds.
- Step 3 per statement (verify): 35-40 seconds.
- Total per statement: ~55-60 seconds. Three statements: under 3 minutes.

If you are consistently going over 3:30 on a single question, the problem is almost always Step 0 skipped — you are re-reading the table header mid-statement instead of once at the start.

**Worked example (full workflow).**

Table (Employee Demographics):

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

Step 0: 8 rows. Columns: Employee (label), Department (category), Years (integer), Salary in K, Age. No totals row. Ready.

Statement: "The average salary of Strategy employees is higher than that of Finance employees."

- **Step 1:** Relevant columns: Department, Salary.
- **Step 2:** Filter by Department. Strategy rows: A (120), C (95), G (150). Finance rows: B (140), E (85), H (115).
- **Step 3:** Strategy sum = 365. Finance sum = 340. Both groups have 3 employees, so comparing sums is enough — skip the division. 365 > 340. **Yes.**

**The "you do not always have to compute exactly" principle.**

For Yes/No questions, you only need to know which side is bigger — not the exact values. Two shortcuts apply: (1) when both groups have the same count, compare sums instead of averages; (2) when values are far enough apart to call without precision, commit to the direction without full arithmetic. Only compute exactly when the margin is too close to call on inspection.

> **Recall check.** Cover this section. State the four steps of the Table Analysis workflow in order, with their time budgets. (Step 0 orient 10s once; Step 1 identify 5s; Step 2 filter/sort 15s; Step 3 verify 35-40s.) State the single most common reason students go over 3:30 on a question. If you can answer both without looking, the workflow is encoded. If you stumbled, say the four steps aloud three times and move on.

## @sorting-vs-filtering

GMAT Table Analysis tables are sortable — click a column header to reorder rows ascending or descending. Many statements are much faster to answer after sorting, but knowing when to sort vs. when to filter is the decision that separates efficient execution from wasted motion.

**The one question that determines your move:**

> Does this statement care about **which rows rank highest or lowest** — or does it care about **which rows belong to a specific group**?

If it is about rank or ordering, **sort**. If it is about group membership, **filter**.

**When to sort:**

- "The employee with the highest salary is in Operations." → Sort Salary descending, read the top row, check the department.
- "The second-highest value of X." → Sort X, count two rows from the top.
- "The median of column X." → Sort X, find the middle row.
- "How many rows have X above 50." → Sort X ascending, find where the column crosses 50, count above.

**When to filter:**

- "Employees in the Strategy department." → Filter on Department = Strategy; work only within that subset.
- "Products priced between $10 and $20." → Filter on price range.
- "Clients with more than 3 orders and from Region X." → Filter on multiple conditions simultaneously.

**When to sort AND filter:**

Some statements require both operations. "The highest-paid Finance employee" cannot be answered by sorting the full table — sorting salary puts the global highest earner at the top, who may not be in Finance. Correct order: filter to Finance first, then find the maximum salary within that subset. Always filter before sorting when the statement restricts to a category.

**The sorting workflow.**

1. Identify which column to sort on.
2. Direction: descending for "highest/greatest/largest"; ascending for "lowest/smallest/least."
3. Read the answer from the top or bottom.

**Example (sort only).** Statement: "The highest-paid employee works in Operations."

- Sort by Salary descending: D (155), G (150), B (140), F (125), A (120), H (115), C (95), E (85).
- Top row: D, Operations. **Yes.**

**Example (filter then sort).** Statement: "The highest-paid Strategy employee earns more than the highest-paid Finance employee."

- Filter to Strategy: A (120), C (95), G (150). Max = 150 (G).
- Filter to Finance: B (140), E (85), H (115). Max = 140 (B).
- 150 > 140. **Yes.**

**Example (sort plus count).** Statement: "Of the three most-experienced employees, at least one earns below $130K."

- Sort Years descending: D (12, 155), G (10, 150), B (8, 140).
- Salaries of top three: 155, 150, 140. None below 130. **No.**

**Mental scan vs. click-to-sort.** For tables with under 10 rows, scanning the column visually is usually faster than clicking. For 15+ rows, click the sort — do not try to mentally order 20 numbers.

**Handling ties.** When two rows share the same value in the sort column, check whether the tie affects the answer. Usually it does not. If a statement asks about "the third-most-experienced employee" and there is a tie at rank 2, the GMAT is almost always designed so the tie does not change the Yes/No outcome.

**Trap: filter disguised as a sort question.** "Is there any employee over 40 who earns below $120K?" reads like a scan question, but it is a filter (age > 40 AND salary < 120) followed by an existence check. Sorting the full table by age and then trying to cross-reference salary is slower and more error-prone than filtering directly.

> **Self-explanation prompt.** Why does "filter before sort" consistently produce a cleaner answer than "sort before filter" when a statement restricts to a category? If you can say "because sorting the full table gives the global rank, which may not belong to the target category — you would then have to cross-reference a second column anyway — while filtering first reduces the problem to a smaller, category-pure subset where sorting or scanning is straightforward," you have understood why operation order matters.

## @statement-patterns

The GMAT tests Table Analysis because data tables support a limited vocabulary of claims: you can count things, rank things, aggregate things, compare things across groups, and check relationships between variables. That vocabulary produces exactly seven statement patterns. Recognize the pattern within five seconds of reading a statement and you know the move before any arithmetic begins.

**Pattern 1: Threshold count.**

Key words: "more than half," "at least X%," "fewer than N rows."

*Why it appears:* Tests whether you can filter a subset accurately and compare its size to a threshold.

*Move:* Filter on the stated condition. Count the qualifying rows. Compare to the threshold (e.g., total/2, or total × 0.6). If count clears the threshold, **Yes**.

**Example.** Statement: "More than half the companies had Q4 revenue at least 25% above Q1." With 6 companies, count how many satisfy Q4/Q1 ≥ 1.25. If count ≥ 4, **Yes**.

**Pattern 2: Rank check.**

Key words: "the highest/lowest X is in category Y," "the top-N rows all belong to Y."

*Why it appears:* Tests sort discipline and whether you read the category column, not just the metric.

*Move:* Sort by the metric. Read the top or bottom row. Check its category label.

**Pattern 3: Category comparison.**

Key words: "the average/median/total of group A exceeds that of group B."

*Why it appears:* Tests aggregation over subsets — the most arithmetic-intensive pattern.

*Move:* Filter to group A, compute the metric. Filter to group B, compute the metric. Compare. Use the sum shortcut when group sizes are equal.

**Pattern 4: Within-row derivation.**

Key words: "every row," "for all employees," "each company."

*Why it appears:* Tests whether you compare within a single row vs. comparing across rows.

*Move:* Compare the two relevant columns for each row. A single counterexample makes the statement false — stop the moment you find one.

**Example.** Statement: "Every company's Q4 revenue exceeds its Q1 revenue." Scan row by row. The first row where Q4 ≤ Q1 makes this **No** — no further scanning needed.

**Pattern 5: Existence check.**

Key words: "at least one," "there exists," "some."

*Why it appears:* Tests multi-condition filtering and whether you stop appropriately once you find a qualifying row.

*Move:* Filter on the conjunction of all conditions. If the filtered set is nonempty, **Yes** — stop the moment you find the first qualifying row.

**Pattern 6: Range check.**

Key words: "all values of X fall between a and b," "no value exceeds Y."

*Why it appears:* Tests min/max identification without requiring full enumeration.

*Move:* Find the minimum and maximum of the relevant column. If min ≥ a and max ≤ b, **Yes**. You only need two values from the entire column.

**Pattern 7: Correlation check.**

Key words: "the row with the highest X also has the highest Y," "rank in X matches rank in Y."

*Why it appears:* Tests whether you understand that rank in one column does not imply rank in another — a conceptual trap as much as a computation trap.

*Move:* Find the top (or bottom) row for metric X. Check its rank in metric Y. If Y is also at the top (or bottom, depending on the statement), **Yes**.

**The negation asymmetry — the most important concept in this chapter.**

- Universal claims ("every," "all," "no") are disproved by a single counterexample and confirmed only by checking all rows.
- Existential claims ("at least one," "some") are confirmed by a single example and disproved only by checking all rows.

In practice: universal claims are fast to disprove, slow to confirm. Existential claims are fast to confirm, slow to disprove. Adjust your scan accordingly — stop as soon as the answer is determined.

**Pattern recognition drill.** Classify each statement below (Patterns 1-7) before reading the answers:

1. "The region with the highest total sales also has the most employees." → (7)
2. "Every product has a profit margin above 15%." → (4)
3. "At least one company has both revenue above $500K and expenses below $200K." → (5)
4. "The average contract length for US clients exceeds that for EU clients." → (3)
5. "All employee ages fall between 25 and 60." → (6)
6. "More than 60% of transactions exceeded $1,000." → (1)
7. "The employee with the longest tenure works in Engineering." → (2)

Train yourself to read the opening word first: "every/all/no" → Pattern 4 or 6. "At least one/some" → Pattern 5. "The highest/lowest" → Pattern 2 or 7. "Average/median" → Pattern 3. "More than X%/half" → Pattern 1.

> **Self-explanation prompt.** Why can a Pattern 4 claim ("every row satisfies X") sometimes be disproved faster than a Pattern 5 claim ("at least one row satisfies X") can be confirmed — even though the universal claim sounds harder? If you can say "because a universal claim fails at the first counterexample — one bad row and you are done — while an existential claim requires finding a row that satisfies multiple conditions simultaneously, which may not happen until late in a long table," you have understood the asymmetry. This is the insight that makes your scanning targeted instead of exhaustive.

## @averages-and-medians

When a statement involves averages or medians across categories, the instinct is to compute everything exactly. Three techniques cut this time in half without sacrificing accuracy. The fourth prevents a trap that catches students who skip the method selection step.

**Why aggregated metrics appear so often.** They compress many rows into one number — the prime vehicle for "does group A outperform group B?" questions. Expect at least one aggregation statement per Table Analysis question.

**Technique 1: Sum trick for averages (equal group sizes only).**

Average = sum / count. If two groups have the same count, comparing their averages reduces to comparing their sums — skip the division.

**Example.** Strategy: 3 employees, salaries 120, 95, 150 (sum 365). Finance: 3 employees, salaries 140, 85, 115 (sum 340). Equal counts → compare sums. 365 > 340, so Strategy average > Finance average. **Yes.**

**When this shortcut fails.** If Strategy has 3 employees and Finance has 4, the sums are not comparable without dividing by their respective counts. Check the group sizes before applying the shortcut. If sizes differ even by one, compute averages.

**Technique 2: Median position formula.**

The median of an ordered set of n values:
- Odd n: the value at position (n+1)/2.
- Even n: the average of the values at positions n/2 and n/2 + 1.

**Example (odd n = 5).** Sorted: 85, 95, 115, 140, 150. Median at position 3: **115**.

**Example (even n = 8).** Sorted: 85, 95, 115, 120, 125, 140, 150, 155. Median = average of positions 4 and 5: (120 + 125)/2 = **122.5**.

For large tables, sort the column and count to the middle row(s). You never need to read every value — only the position(s) that matter.

**Technique 3: Deviation trick for "is the average above threshold X?"**

Compute (value − X) for each row. Sum the deviations. If the sum is positive, the average is above X; if negative, the average is below X. This avoids summing all values and then dividing.

**Example.** Ages: 32, 38, 28, 42, 26, 35, 40, 33. Is the average above 35?

Deviations from 35: −3, +3, −7, +7, −9, 0, +5, −2. Sum = −6. Negative → average is below 35. **No.** (Actual average: 274/8 = 34.25.)

This technique is fastest when values cluster near the threshold, because the deviations are small and easy to add.

**Technique 4: Weighted averages.**

Some statements require an overall average that accounts for the fact that different rows contribute different volumes — for example, a store with 200 transactions and a store with 20 transactions should not be weighted equally in an overall average price calculation.

Weighted average = (sum of weight × value) / (sum of weights).

**Example.** East region: 100 units sold at $5 average price. West region: 200 units sold at $8 average price. Overall average price: (100×5 + 200×8) / (100+200) = 2100/300 = **$7.00** — not ($5 + $8)/2 = $6.50.

The unweighted average is wrong because it treats both regions as equal contributors. West had twice as many transactions and should dominate the overall figure. When a table contains both a "volume" column and a "rate" or "price" column, watch for weighted average statements.

**Trap: average vs. median when outliers are present.** If a data set has one extreme value, the average and median will diverge significantly. The GMAT exploits this. A statement about "average salary" may have **Yes** as the answer while the same threshold applied to "median salary" has **No** (or vice versa). Compute the metric the statement actually names — do not substitute one for the other under time pressure.

> **Recall check.** Without looking: state the median position formula for odd and even n. State the condition under which the sum trick is valid for comparing averages. State what a negative sum of deviations tells you about the average relative to the threshold. (Odd: position (n+1)/2. Even: average of positions n/2 and n/2+1. Sum trick: equal group sizes only. Negative sum: average is below the threshold.) If you needed to look up any of these, drill them one more time before moving to the check questions.

## @cross-category-comparisons

Statements that compare across multiple categories require you to hold several intermediate numbers simultaneously — and that is exactly where working-memory errors appear. The antidote is not better mental arithmetic. It is organized scratch work.

**The two-pass technique with written labels.**

Pass 1: identify all categories the statement mentions.
Pass 2: for each category, filter and compute the metric. Write the result down with a label before moving to the next category.

Write: "Strategy: 6.0 | Finance: 5.3 | Operations: 9.5" on scratch paper as you go. Do not try to compare three numbers you are holding in memory while looking at a fourth.

**Example.** Statement: "The average years of experience is highest in Operations."

Pass 1: all three departments.
Pass 2:
- Strategy (A, C, G): Years 5, 3, 10. Avg = 18/3 = **6.0**
- Finance (B, E, H): Years 8, 2, 6. Avg = 16/3 ≈ **5.3**
- Operations (D, F): Years 12, 7. Avg = 19/2 = **9.5**

Operations is highest. **Yes.**

Note: Operations has 2 employees vs. 3 for the others — the sum trick does not apply. Division required.

**The baseline comparison technique.**

When comparing many categories, pick one as a baseline and compare all others against it — not against each other. This reduces comparisons from N(N−1)/2 down to N−1.

**Example.** Four regions with average scores A:6.2, B:7.1, C:6.8, D:7.4. Statement: "Region D has the highest average." Use D as the baseline: 7.4 > 7.1 (B), 7.4 > 6.8 (C), 7.4 > 6.2 (A). Three comparisons, not six. **Yes.**

**Subgroup max/min.** "The oldest Finance employee is younger than the oldest Strategy employee."

- Finance max age: scan B (38), E (26), H (33). Max = **38**.
- Strategy max age: scan A (32), C (28), G (40). Max = **40**.
- 38 < 40. **Yes.**

**Conditional aggregation.** "Total salary of employees over 35 exceeds $400K."

Filter age > 35: B (38, 140K), D (42, 155K), G (40, 150K). Sum: 445K. 445 > 400. **Yes.**

Write the row labels (B, D, G) before extracting salary values — do not scan and add simultaneously, because your eyes will slip to the wrong row.

**Intersection filter.** "All Finance employees over 30 earn more than $100K."

Filter Finance AND age > 30: B (38, 140K), H (33, 115K). Employee E is 26 and excluded. Both remaining employees earn above 100K. **Yes.**

**The single most common cross-category error.** Applying the wrong filter — including rows that do not satisfy all conditions, or excluding rows that do. "Finance AND over 30" keeps rows that satisfy both. "Finance OR over 30" would keep far more rows. On the GMAT, a multi-condition filter is almost always AND (intersection). Read the filter conditions twice before extracting values.

**Trap: unequal group sizes invalidating the sum shortcut.** Whenever group sizes differ, the group with more members will tend to have a higher sum regardless of per-member performance. Always confirm group sizes match before skipping division.

> **Self-explanation prompt.** Why does writing intermediate results on scratch paper improve accuracy, not just speed? If you can say "because working memory can hold roughly four items at once — adding a fifth causes one of the earlier values to be displaced or corrupted, which produces a comparison between the right formula and the wrong numbers," you have identified why organized notation is a skill, not a convenience. The student who writes four intermediate values cleanly beats the student who tries to hold them mentally every time the table has more than two categories.

## @derived-metrics-and-traps

Some statements require computing a metric that does not directly appear in the table — a ratio, a percent change, a per-unit value. These questions demand a deliberate approach: you must state the formula explicitly before computing, because forgetting which denominator to use mid-calculation produces an answer that looks plausible but is systematically wrong.

**The approximate-first rule.**

Before doing any arithmetic, ask: can I tell Yes or No from a rough estimate? If the numerator is clearly more than twice the denominator and the threshold is 150%, you can commit without computing. If a ratio is clearly below 0.5 and the threshold is 0.6, same result. Only compute exactly when the estimate lands near the threshold and direction is genuinely unclear.

Applying this rule consistently eliminates 20-30 seconds from the hardest derived-metric statements.

**Derived metric: ratio.**

**Example.** Columns: Sales, Visitors. Statement: "The region with the highest conversion rate (Sales/Visitors) is East."

State the formula: Sales/Visitors. Compute per row. East: 50/100 = 0.50. West: 80/200 = 0.40. North: 60/150 = 0.40. East has the highest ratio. **Yes.**

If margins between regions are tight (e.g., 0.50 vs. 0.48), compute to two decimal places. If one region dominates by inspection, stop there.

**Derived metric: percent change.**

**Example.** Columns: Q1, Q4. Statement: "More than half of companies grew at least 25% from Q1 to Q4."

State the formula: (Q4 − Q1) / Q1 × 100. Compute per row. Count rows where result ≥ 25. Compare count to total/2.

**Derived metric: per-unit value.**

**Example.** Columns: Revenue, Employees. Statement: "Revenue per employee is highest at Company D."

State the formula: Revenue/Employees. Compute for each company. You only need the maximum — if D is clearly ahead on inspection, stop; otherwise compute the two or three closest competitors.

**Multi-step derivation.** "The company with the highest revenue-per-employee also has the lowest cost-per-employee."

Derive ratio 1 (Revenue/Employees) for each row. Identify the top company. Then derive ratio 2 (Cost/Employees) only for that one company and compare to the rest. Two derivations, but the second only requires full computation for the identified top row.

**The seven common traps — and why each one works against unprepared students.**

1. **Numeric label trap.** A "Rank" column contains values 1, 2, 3 — ordinal labels, not quantities. Using rank values as amounts in arithmetic produces nonsense. Always read what the column header says the numbers mean.

2. **Unit trap.** Revenue in thousands vs. millions; prices in dollars vs. cents. The GMAT mixes units to catch students who skip the column header. Read units before every calculation.

3. **Row label confusion.** After filtering to a subset, it is easy to accidentally read a value from a non-member row when scanning a long table. Write down the qualifying row labels before extracting values.

4. **Universal claim checked partially.** You confirm the first three rows satisfy the statement, assume all rows will, and miss the counterexample on row 8. Universal claims require checking all rows — or finding one counterexample that ends the search.

5. **Percent change denominator trap.** % change = (new − old) / **old**, never / new. Computing (Q4 − Q1)/Q4 produces a smaller number and is always wrong. State the formula before plugging in numbers.

6. **Comparing mismatched metrics.** Double-check that both sides of a comparison refer to the same metric. "Company A's revenue vs. Company B's profit" is a valid statement if that is what is written, but students under pressure often compute B's revenue instead of B's profit. Read each side of the comparison carefully.

7. **Rounding prematurely.** If values cluster near a threshold (e.g., 24.8% compared to a 25% cutoff), rounding to whole numbers changes the answer. Keep one decimal place until the comparison is resolved.

> **Self-explanation prompt.** Why does explicitly stating the formula before computing protect against derived-metric errors? If you can say "because the formula specifies both the numerator and the denominator — writing it down locks in which column goes where, so mid-calculation you cannot accidentally swap them or apply last statement's formula to this statement's numbers," you have understood the discipline. The formula statement takes three seconds. The error it prevents costs 60 seconds to recover from.

## @summary

Table Analysis is a workflow problem. A student who executes the four steps consistently on every question beats a student who improvises — even if the improviser is stronger at arithmetic. Here is the complete playbook.

**The pre-question routine (10 seconds, once per question before any statement).**

1. Read all column headers and note units.
2. Count the rows.
3. Check for a "Total" or "Average" row at the bottom — flag it so you do not accidentally include it in row-level filters.

This orientation is paid once and saves time on every one of the three statements that follow.

**The per-statement workflow.**

| Step | Action | Time |
|---|---|---|
| Step 1 | Identify the 1-2 columns the statement references | 5s |
| Step 2 | Decide: sort (for rank/order) or filter (for group membership) | 15s |
| Step 3 | Verify: compute the metric, compare to the statement | 35-40s |

**The seven statement patterns.**

| Pattern | Opening words | Move |
|---|---|---|
| Threshold count | "More than X% / half" | Filter → count → compare to threshold |
| Rank check | "The highest/lowest X is in Y" | Sort by X → read top/bottom → check category |
| Category comparison | "Average/median of A exceeds B" | Filter each group → compute → compare |
| Within-row derivation | "Every row, column X > column Y" | Compare two columns row by row; stop at counterexample |
| Existence check | "At least one row satisfies X and Y" | Filter on conjunction → nonempty? |
| Range check | "All values of X fall between a and b" | Find min and max of X; check bounds |
| Correlation check | "Top of X is also top of Y" | Find top-X row → check its rank in Y |

**The five execution habits.**

1. **Orient before every question.** Ten seconds on the header and row count prevents unit and row-confusion errors in every statement that follows.
2. **Identify relevant columns first.** The statement names 1-2 columns. Lock those in before you touch the table.
3. **Sort for rank, filter for group.** Asking "is this about order or about membership?" takes two seconds and prevents the wrong operation.
4. **Write every intermediate value.** Cross-category comparisons especially — label each number as you write it. Comparisons from memory fail more than comparisons from scratch paper.
5. **Match scanning strategy to claim type.** Universal claims ("every") → scan for a counterexample, stop the moment you find one. Existential claims ("at least one") → scan for a confirming row, stop the moment you find one.

**Time management.**

- Orientation: 10 seconds once per question.
- Per statement: ~55-60 seconds.
- Per question (3 statements + orientation): under 3 minutes.
- If a question takes over 3:30, the root cause is almost always orientation skipped — you re-read the table mid-statement. Fix the habit, not the arithmetic.

**The habit that separates 685 scorers from 605 scorers.** Writing down intermediate computations for cross-category statements. Trying to hold three group averages in memory while comparing them is the single most common source of wrong answers on medium Table Analysis. The scratch paper is mandatory, not optional.

**What to do next.** Work through the 35 questions across all three problem sets, Easy first. After each wrong answer, identify which step of the workflow broke down: wrong columns identified (Step 1), wrong operation — sorted when you should have filtered (Step 2), or arithmetic error (Step 3). Arithmetic errors are the least common failure mode. Pattern misidentification and filter errors are far more common. Tag your mistakes by step — that is the data that tells you which section to re-read before the Hard set.

Hard questions are almost always Pattern 3, 4, or 7 combined with derived metrics. If the Hard set is where points disappear, re-read the Derived Metrics section and the Cross-Category Comparisons section before retrying.
