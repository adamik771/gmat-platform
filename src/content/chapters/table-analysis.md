---
slug: table-analysis
title: Table Analysis
section: DI
estimated_minutes: 55
prerequisites: []
summary: |
  Table Analysis is the most mechanical format in Data Insights — which makes it the highest-ROI chapter in this section. Unlike Multi-Source Reasoning or Two-Part Analysis, Table Analysis does not reward creative reasoning; it rewards a single repeatable workflow executed quickly. Students who have drilled the three-step discipline (identify columns, filter or sort, verify the claim) answer each statement in under 60 seconds. Students who improvise per question average twice that and still make errors.

  The seven statement patterns in this chapter cover roughly 90% of what you will see on test day. Once they are automatic, Table Analysis stops being a format to "do carefully" and becomes a format to execute fast — which is precisely the kind of gain that separates 685 from 725 scorers on DI.

  By the end of this chapter you will: (1) apply the three-step workflow without consciously thinking about it; (2) classify any Yes/No statement into one of seven patterns within five seconds of reading it; (3) choose sort vs. filter based on the statement structure; (4) compute derived metrics (ratios, percent changes, per-unit values) accurately under time pressure; and (5) write down every intermediate value instead of trusting your working memory.
sections:
  - id: pretest
    type: pretest
    title: Try before you learn
    intro: |
      Before I teach you anything, try these two. It's fine to miss them — research shows that *attempting* questions before instruction primes your brain to encode the lesson better. Rate your confidence honestly; your calibration matters more than your accuracy right now.
    pretest_question_ids:
      - table-analysis-q11
      - table-analysis-q12

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

## @the-three-step-workflow

Every Table Analysis question follows the same three-step pattern. Internalize the workflow and the question becomes mechanical.

**Mental model.** Every TA question has the same three steps: identify the rows, filter or sort, then verify the claim against the filtered subset. Skip the filter step and you over-compute on the full table; skip the verify step and you bubble the trap answer that looks right at a glance. The whole format becomes mechanical once the three-step rhythm is reflexive.

**Step 1: Identify the relevant column(s).**

Read the statement. What columns does it actually ask about? Most statements reference 1-2 columns out of 5-10 in the table. Ignore the rest.

**Example.** Table has columns: Employee, Department, Years, Salary, Age. Statement: "The average salary of Strategy employees is higher than that of Finance employees." Relevant columns: Department (to filter) and Salary (to average). Years and Age are irrelevant to this statement.

**Step 2: Filter or sort — whichever the statement requires.**

- If the statement specifies a subset ("employees in Strategy," "products priced under $50"), **filter** the table to just those rows.
- If the statement asks about rank or ordering ("the highest-paid employee," "the second lowest score"), **sort** the column by the relevant metric.

**Step 3: Verify — compute the check the statement requires.**

Once you have the relevant rows, do the arithmetic: compute the average, count the rows, find the max/min, etc. Compare to the statement. Decide Yes or No.

**The time budget.**

- Step 1 (identify columns): 5 seconds.
- Step 2 (filter or sort): 15 seconds.
- Step 3 (verify): 20-30 seconds.

Total: ~60 seconds per statement. Three statements per question = ~3 minutes. That's your target.

**Example (full workflow).**

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

Statement: "The average salary of Strategy employees is higher than that of Finance employees."

- **Step 1:** Relevant columns: Department, Salary.
- **Step 2:** Filter by Department. Strategy: A, C, G (salaries 120, 95, 150). Finance: B, E, H (salaries 140, 85, 115).
- **Step 3:** Strategy average: (120+95+150)/3 = 365/3 ≈ 121.7. Finance average: (140+85+115)/3 = 340/3 ≈ 113.3. Strategy > Finance. **Yes.**

**The "you don't have to compute exactly" shortcut.** For Yes/No questions about averages or medians, exact values are often unnecessary — you just need to know which is bigger.

**Strategy sum:** 120+95+150 = 365. **Finance sum:** 140+85+115 = 340. Strategy sum > Finance sum, and both have 3 employees — so Strategy average > Finance average. Skip the division entirely.

**Micro-drill.** Apply the three-step workflow to each statement against the Employee Demographics table above. 60 seconds each:

1. "The median salary across all eight employees exceeds $120K." → ___
2. "All employees in Finance earn more than the lowest-paid Strategy employee." → ___

Answers: (1) Step 1: Salary column. Step 2: Sort ascending: 85, 95, 115, 120, 125, 140, 150, 155 (n=8, even count). Step 3: Median = avg of positions 4 and 5 = (120+125)/2 = 122.5. Is 122.5 > 120? **Yes.** (2) Step 1: Department and Salary. Step 2: Filter to Finance: B (140), E (85), H (115). Filter to Strategy: A (120), C (95), G (150). Lowest Strategy salary: 95. Step 3: Check each Finance employee against 95: B (140) ✓, E (85) — 85 < 95. **No.** One counterexample is enough to disprove a universal claim — stop as soon as you find it.

> **Recall check.** Close the book. State the three-step Table Analysis workflow. Now state the time budget for each step. (Step 1 identify, Step 2 filter/sort, Step 3 verify. Budget: 5 + 15 + 30 = 60 seconds.) Pattern-drill this three-step until it's reflexive — that's what makes you fast on Table Analysis.

## @sorting-vs-filtering

GMAT Table Analysis tables are **sortable**. You can click a column header to sort ascending or descending — and many statements are much faster to answer after sorting.

**When to sort:**

- "The highest/lowest X in a category" — sort the X column and look at top/bottom.
- "The second [biggest/smallest] value" — sort and count rows.
- "The median of column X" — sort and find the middle row.
- "How many rows have X > 50" — sort X ascending, find where it crosses 50, count below/above.

**When to filter:**

- "Employees in department Y" — filter on department, work with the subset.
- "Products priced between $10 and $20" — filter on price in a range.
- "Clients with more than 3 orders AND from region X" — filter on multiple columns.

**When to sort AND filter:**

Some statements require both. "The highest-salaried Finance employee" requires first filtering to Finance, then sorting (or scanning) to find the max salary.

**The sorting workflow.**

1. Identify the column you need to sort by (the one the statement asks to rank on).
2. Decide direction: descending for "highest," "greatest," "largest"; ascending for "lowest," "smallest," "least."
3. Read off the answer from the top (or bottom).

**Example (sort).** Statement: "The highest-paid employee works in Operations."

- Sort by Salary descending: D (155), G (150), B (140), F (125), A (120), H (115), C (95), E (85).
- Top of list: D, Operations. Statement says Operations. **Yes.**

**Example (filter then sort).** Statement: "The highest-paid employee in Strategy earns more than the highest-paid employee in Finance."

- Filter to Strategy: A (120), C (95), G (150). Highest: G, 150.
- Filter to Finance: B (140), E (85), H (115). Highest: B, 140.
- 150 > 140. **Yes.**

**Mental sorting for small tables.** If the table has under 10 rows, you can often sort mentally by scanning the column once. For larger tables, click the sort button.

**The "top three" pattern.** Many questions ask about the top (or bottom) 3, 5, 10 rows after sorting. Sort, take the first N, then apply the filter/metric.

**Example.** Statement: "Of the top three most-experienced employees, at least one earns less than $130K."

- Sort by Years descending: D (12, 155), G (10, 150), B (8, 140).
- Salaries of top three: 155, 150, 140. All > 130. **No.**

**The "what if sorting is ambiguous" problem.** Ties in a sort (two employees with the same years) usually don't matter for the answer. If it does — e.g., "the third-most-experienced employee" and there's a tie for second — the problem is usually set up so ties don't change the answer.

**Trap to watch.** Some statements read like sort questions but are actually filter questions. "Is there any employee over 40 who earns less than $120K?" — this is a filter (age > 40 AND salary < 120) plus existence check (is the filtered set nonempty?). Don't waste time sorting the full table.

> **Self-explanation prompt.** For a statement asking "which department has the highest average salary," would you sort the Salary column or filter by Department? If you said "filter, then compute averages per group," you're right — sorting by Salary mixes all departments and makes the grouping invisible. Sorting finds extremes across the whole table; filtering isolates subgroups so you can compute within them. The statement's structure tells you which to reach for first.

**Micro-drill.** Classify each statement as a **sort**, **filter**, or **sort + filter** operation, then answer Yes or No using the Employee Demographics table. 45 seconds each:

1. "The youngest employee in the dataset works in Finance." → Operation: ___ Answer: ___
2. "All Operations employees earn more than $120K." → Operation: ___ Answer: ___
3. "The highest-paid Finance employee earns less than the lowest-paid Operations employee." → Operation: ___ Answer: ___

Answers: (1) **Sort** (Age ascending) — E at 26, Finance. Department is Finance. **Yes.** (2) **Filter** (Operations: D at 155, F at 125) — both > 120. **Yes.** (3) **Sort + filter** (twice) — max Finance salary: B at 140. Min Operations salary: F at 125. Is 140 < 125? **No.** The statement requires finding the max in one filtered group and the min in another — two separate sort+filter operations. Writing down both numbers before comparing is what prevents the transposition error under pressure.

## @statement-patterns

Seven statement patterns cover roughly 90% of what you'll see on Table Analysis. Memorize these and you'll recognize the move to make within 5 seconds of reading any statement.

**Pattern 1: Simple threshold count.**

"More than half of the rows satisfy condition X."

*Move:* filter on X, count, compare to total/2.

**Example.** Statement: "More than half of the companies had Q4 revenue greater than their Q1 revenue by at least 25%." For 5 companies, check each: compute Q4/Q1 ratio, compare to 1.25, count yes's. If count > 2.5 (i.e., ≥3), **Yes**; else **No**.

**Pattern 2: Rank check.**

"The highest/lowest value of X is in category Y."

*Move:* sort by X, read off the top/bottom row, check its category.

**Example.** Statement: "The employee with the most years of experience works in Strategy." Sort Years descending: D (12, Operations) is first. Department is Operations, not Strategy. **No.**

**Pattern 3: Category comparison.**

"The average/median of category A exceeds category B."

*Move:* filter to A, compute metric. Filter to B, compute metric. Compare.

**Pattern 4: Within-row derivation.**

"For every row, X > Y" (where X and Y are columns).

*Move:* compare the two columns row-by-row. A single counterexample makes the statement false.

**Example.** Statement: "Every company's Q4 revenue is higher than its Q1 revenue." Check each company — if any has Q4 ≤ Q1, the statement is **No**.

**Pattern 5: Existence check.**

"There is at least one row with both X > a and Y < b."

*Move:* filter on the conjunction. If the filtered set is nonempty, **Yes**; else **No**.

**Example.** Statement: "There is at least one Finance employee who is over 35 and earns more than $130K." Filter: Finance AND Age > 35. Qualifying rows: B (38, 140). Nonempty, and salary 140 > 130. **Yes.** One qualifying row is all you need — stop scanning once you find it.

**Pattern 6: Range check.**

"All values of X fall between a and b."

*Move:* find min and max of X. If min ≥ a and max ≤ b, **Yes**.

**Example.** Statement: "All salaries fall between $80K and $160K." Sort Salary: min = E at 85, max = D at 155. Is 85 ≥ 80 and 155 ≤ 160? **Yes.** You only need to check the extremes — if they're in range, every value between them is too.

**Pattern 7: Correlation/trend check.**

"The company with the highest X also has the highest Y" (or "highest X has lowest Y," etc.).

*Move:* find the top-X row. Check its Y rank. If Y is also top (or bottom, depending on statement), **Yes**.

**The "statement negation" reflex.** To prove a universal statement ("every," "all," "no") false, find one counterexample. To prove an existential statement ("at least one," "some") true, find one example. Focus your scanning accordingly — you don't have to exhaustively verify every row.

**Example.** "Every employee over 30 earns more than $100K." Scan employees over 30. Any earning ≤ 100K? One counterexample disproves.

**Example.** "At least one employee in Finance is older than 40." Scan Finance employees. Any older than 40? One example confirms.

**Micro-drill.** Using the Employee Demographics table, identify the pattern and answer Yes or No. 45 seconds each:

1. "More than half of all employees are under 35 years old." → Pattern ___ Answer ___
2. "The highest salary in the dataset belongs to an Operations employee." → Pattern ___ Answer ___
3. "There is at least one Strategy employee who is over 30 and earns under $100K." → Pattern ___ Answer ___
4. "For every employee, salary (in thousands) is greater than their age." → Pattern ___ Answer ___

Answers: (1) Pattern **1** (threshold count) — employees under 35: A (32), C (28), E (26), H (33) = 4 out of 8. 4/8 = 50%, which is not *more* than half. **No.** Note: "under 35" excludes 35 exactly — F is 35 and doesn't qualify. (2) Pattern **2** (rank check) — sort Salary descending: D (155, Operations) is first. **Yes.** (3) Pattern **5** (existence check) — Strategy employees over 30: A (32, 120), G (40, 150). Neither earns under $100K. **No.** You need one confirming row; none exists. (4) Pattern **4** (within-row derivation) — check each row: A: 120 > 32 ✓, B: 140 > 38 ✓, C: 95 > 28 ✓, D: 155 > 42 ✓, E: 85 > 26 ✓, F: 125 > 35 ✓, G: 150 > 40 ✓, H: 115 > 33 ✓. All eight pass. **Yes.** For a universal claim, you scan every row; one counterexample would end the check immediately.

> **Self-explanation prompt.** Why does "every"/"no" require checking every row but "at least one" needs just one example? If you can say "because universal claims fail if a single counterexample exists, while existential claims succeed if a single confirming case exists," you've internalized the asymmetry — and you'll scan tables much faster.

## @averages-and-medians

When statements involve averages or medians across categories, computation can feel daunting on a large table. Three techniques collapse this to under 30 seconds.

**Technique 1: Sum trick (for averages).**

The average is (sum of values) / (count). Comparing averages reduces to comparing sums if counts are equal.

**Example.** Statement: "Average salary of Strategy > average salary of Finance." Strategy has 3 employees, Finance has 3 employees. Compute the two sums — no need to divide. 365 > 340, so Strategy average > Finance average. **Yes.**

When counts differ, still compute sums first, then do the single division.

**Technique 2: Running count for medians.**

The median of an ordered set of n values is at position (n+1)/2 (for odd n) or average of positions n/2 and n/2+1 (for even n).

**Example.** Sort Salary: 85, 95, 115, 120, 125, 140, 150, 155 (n=8). Median is average of positions 4 and 5: (120+125)/2 = 122.5.

**Technique 3: Scanning for "average above X."**

Sometimes the question is "is the average above X?" without needing the exact average. Shortcut: compute (value - X) for each row and see if the sum is positive. If the sum of deviations is positive, the average is above X.

**Example.** Ages: 32, 38, 28, 42, 26, 35, 40, 33. Is average > 35?

Compute (age - 35) for each: -3, 3, -7, 7, -9, 0, 5, -2. Sum: -3+3-7+7-9+0+5-2 = -6. Sum of deviations is negative, so average is below 35. **No.**

This is often faster than computing the actual average.

**The weighted average template.** Some Table Analysis questions involve weighted averages — each row contributes a "weight" (like a transaction count) and the question asks about an overall average.

**Example.** Region sales: East sold 100 units at $5, West sold 200 at $8. Overall average price: (100×5 + 200×8)/(100+200) = (500+1600)/300 = 2100/300 = $7.

**The "median from a large table" shortcut.** For a sorted table with 50 rows, the median is rows 25-26 averaged. You don't have to compute — just click the sort and read the middle rows.

> **Recall check.** Without looking, state the two ways to compute a median (odd n vs even n). Now state the "sum trick" for comparing averages when counts are equal. (Answers: odd → middle row by position (n+1)/2; even → average of the two middle rows; sum comparison works when counts match because averages differ only by their sums in that case.) Retrieval of these three rules is what separates a 60-second verification from a 3-minute recomputation.

## @cross-category-comparisons

Questions that compare across multiple categories require a filter-then-compute-then-compare workflow. The challenge is staying organized so you don't lose track of which numbers go with which category.

**The two-pass technique.**

Pass 1: identify all categories relevant to the statement.
Pass 2: for each category, filter and compute the metric.

Write down the results as you go — don't try to hold them all in memory.

**Example.** Three departments (Strategy, Finance, Operations). Statement: "The average years of experience is highest in Operations."

Pass 1: three categories (all three departments).
Pass 2:

- Strategy (A, C, G): Years 5, 3, 10. Sum 18, count 3, avg 6.
- Finance (B, E, H): Years 8, 2, 6. Sum 16, count 3, avg 5.33.
- Operations (D, F): Years 12, 7. Sum 19, count 2, avg 9.5.

Operations average (9.5) is highest. **Yes.**

Note: when counts differ (2 vs 3), you DO need the division. When they're equal, sums suffice.

**The "best-fit ranking" pattern.**

"Rank the departments by average salary from highest to lowest."

Compute the average for each, sort, match to the answer choice.

**The "subgroup max/min" pattern.**

"The oldest employee in Finance is younger than the oldest employee in Strategy."

Filter to Finance, find max age. Filter to Strategy, find max age. Compare.

- Finance: B (38), E (26), H (33). Max age 38.
- Strategy: A (32), C (28), G (40). Max age 40.
- 38 < 40. **Yes.**

**The "conditional aggregation" pattern.**

"The total salary of employees over 35 exceeds $400K."

Filter by age > 35. Sum their salaries. Compare to threshold.

- Employees over 35: B (38, 140), D (42, 155), G (40, 150). Sum: 140+155+150 = 445. 445 > 400. **Yes.**

**The "intersection" pattern.**

"All employees in Finance who are over 30 earn more than $100K."

Filter on two conditions (Finance AND over 30). Then check all of them against the threshold.

- Finance over 30: B (38, 140), H (33, 115). Both > 100. **Yes.**

**Trap to watch.** "Overlap" mistakes — filtering on the wrong combination. "Finance AND over 30" is different from "Finance OR over 30." Read the statement carefully: "and" means both conditions must hold; "or" means either (or both). Universal quantifier ("all," "every") combined with filters usually means you're checking whether the filtered set satisfies a condition uniformly.

> **Self-explanation prompt.** When two categories have the same number of rows, you compare their sums directly. When counts differ, you must divide. Why? If you can say "because average = sum ÷ count, and equal counts cancel in the comparison — but a larger sum in a smaller group can still mean a smaller average," you will not default to comparing sums on unequal groups and get a wrong answer.

**Micro-drill.** Using the Employee Demographics table, answer each in under 90 seconds:

1. "Operations has the highest average salary of the three departments." → ___
2. "The total age of Strategy employees exceeds the total age of Finance employees." → ___
3. "Among employees with at least 5 years of experience, the average salary is above $130K." → ___

Answers: (1) Strategy (3 employees) and Finance (3 employees) share a count — use sum comparison: Strategy 120+95+150=365, Finance 140+85+115=340. Strategy avg ≈ 121.7, Finance avg ≈ 113.3. But Operations has only 2 employees — must divide: (155+125)/2 = 140. Operations (140) > Strategy (121.7). **Yes.** The sum shortcut works for Strategy vs Finance but NOT for comparing either against Operations. (2) Strategy total age: 32+28+40=100. Finance total age: 38+26+33=97. 100 > 97. **Yes.** This asks for "total age" directly, so no division needed. (3) Employees with 5+ years: A (5 yrs, 120), B (8 yrs, 140), D (12 yrs, 155), F (7 yrs, 125), G (10 yrs, 150), H (6 yrs, 115). Six employees. Sum: 120+140+155+125+150+115=805. Average: 805/6 ≈ 134.2. **Yes.** Common error: comparing 805 to 130 directly — that is the sum, not the average. Divide first.

## @derived-metrics-and-traps

Some statements require computing a *new* metric from the table columns — a ratio, a percentage, a per-unit value. These are the most arithmetic-heavy Table Analysis questions, and where most errors happen.

**Derived metric: ratio (column A / column B).**

**Example.** Table: Sales, Visitors. Statement: "The region with the highest conversion rate is East."

Conversion rate = Sales / Visitors. Compute per row, compare.

**Derived metric: percent change over time.**

**Example (full walkthrough).** Five-company revenue table:

| Company | Q1 Revenue | Q4 Revenue |
|---|---|---|
| A | 80 | 104 |
| B | 60 | 72 |
| C | 100 | 115 |
| D | 40 | 58 |
| E | 90 | 108 |

Statement: "More than half of these companies grew by at least 25% from Q1 to Q4."

For each row: % change = (Q4 − Q1) / Q1 × 100.

- A: (104−80)/80 × 100 = 24/80 × 100 = **30%** ✓
- B: (72−60)/60 × 100 = 12/60 × 100 = **20%** ✗
- C: (115−100)/100 × 100 = 15/100 × 100 = **15%** ✗
- D: (58−40)/40 × 100 = 18/40 × 100 = **45%** ✓
- E: (108−90)/90 × 100 = 18/90 × 100 = **20%** ✗

2 out of 5 qualify. Half of 5 is 2.5. Since 2 < 2.5, **No.**

**Percent-change denominator trap.** The formula is (new − old) / **old**, not (new − old) / new. Using the wrong denominator shifts every answer. On Company A: wrong denominator gives 24/104 = 23%, which would flip the classification.

**Derived metric: per-unit metric.**

**Example.** Columns Revenue, Employees. Statement: "Revenue per employee is highest at Company D."

Compute Revenue/Employees per row, sort, check top.

**The "multi-step derivation" pattern.** Some questions require two layers of computation. E.g., "The company with the highest revenue-per-employee also has the lowest cost-per-employee." Compute two ratios per row, then check ranks.

**Common traps on Table Analysis.**

1. **The "numeric label" trap.** Columns sometimes have numeric-looking labels (e.g., "Rank" 1, 2, 3...). Don't confuse a rank column with the metric being ranked.

2. **The "currency vs. units" trap.** Revenue in thousands vs millions; prices in dollars vs cents. Always check units in the column header.

3. **The "row label confusion" trap.** When filtering, double-check you're reading the values from the right rows. Especially easy to slip when scrolling a long table.

4. **The "statement says 'each' or 'every' but you only checked one row"** trap. Universal claims require checking all rows (or finding a counterexample to disprove). Don't answer Yes just because the first few rows satisfy the statement.

5. **The "percentage change denominator" trap.** % change = (new - old)/**old**, not (new - old)/new. A common source of close-but-wrong answers.

6. **The "comparing dissimilar metrics" trap.** If one column is revenue and another is profit, comparing them directly ("Region A's revenue exceeds Region B's profit") is valid but unusual — usually the statement compares revenue to revenue or profit to profit. Re-read carefully.

7. **The "rounding matters" trap.** If answer choices include 25% and 24.9% as separate options, you can't round casually. Compute exactly.

**The "does this even matter?" sanity check.** Before committing to a computation, ask: "Is there a pattern I'm missing?" Some questions are designed to be obvious once you spot the pattern — e.g., "every value in row X is larger than every value in row Y" (no arithmetic needed, just visual scan). Always look for the easy path before doing arithmetic.

> **Self-explanation prompt.** Why are derived metrics (ratios, percents) the most error-prone? If you can say "because they require two pieces of information per row combined correctly, and one mis-read of either piece corrupts the entire comparison," you've identified why these questions demand extra care — and why writing intermediate values down beats trying to do them in your head.

**Micro-drill.** Using the five-company revenue table above, answer each in under 60 seconds:

1. "The company with the highest Q4 revenue also had the highest growth rate." → ___
2. "The company with the lowest Q1 revenue had the highest growth rate." → ___
3. "More than half of companies had a Q4 revenue-to-Q1-revenue ratio above 1.2." → ___

Answers: (1) Highest Q4: E (108), growth rate 20%. Highest growth rate: D at 45%. Different companies. **No.** (2) Lowest Q1: D at 40. D's growth rate: 45% — the highest in the table. **Yes.** (3) Ratio = Q4/Q1 for each row: A: 104/80=1.30 ✓, B: 72/60=1.20 — is 1.20 "above 1.2"? No, it equals 1.2, not exceeds it ✗. C: 1.15 ✗. D: 1.45 ✓. E: 1.20 ✗. 2 out of 5 exceed 1.2. **No.** Critical precision: "above" means strictly greater than — B is an exact tie and does not qualify. Missing this distinction is exactly the trap the GMAT sets.

## @summary

Table Analysis is a mechanical workflow problem. Once you internalize the three-step workflow and recognize the seven statement patterns, every question becomes a 60-second exercise per statement.

**The five Table Analysis habits.**

1. **Identify relevant columns first.** Don't read the whole table; read the statement, then find the 1-2 columns that matter.
2. **Choose sort or filter based on the question.** Sort for ranks and extremes; filter for subsets.
3. **Write down intermediate values.** Don't trust your memory across three statements — write the numbers on scratch paper.
4. **Use sum comparison over average comparison** when counts are equal.
5. **Find a single counterexample to disprove universals; find a single example to confirm existentials.**

**The seven statement patterns:**

| Pattern | Move |
|---|---|
| Threshold count | Filter → count → compare to threshold |
| Rank check | Sort → read top/bottom → verify category |
| Category comparison | Filter each category → compute → compare |
| Within-row derivation | Compare two columns row by row |
| Existence check | Filter on conjunction → check if nonempty |
| Range check | Find min/max of column → check bounds |
| Correlation/trend check | Find top/bottom of one column → check other column's rank |

**Time-management targets.**

- Per statement: ~60 seconds (5 seconds identify, 15 seconds filter/sort, 40 seconds verify).
- Per question (3 statements): under 3 minutes.
- If you're over 3:30 on a single Table Analysis question, something went wrong — you probably re-read the table. Move on and come back if time permits.

**The habit that separates 685 scorers from 605 scorers:** writing down intermediate computations. Trying to hold three category-averages in your head while comparing them is how students lose points on medium-difficulty Table Analysis. Write every intermediate number down.

**What to do next.**

1. **Pattern recall before you drill.** Before opening the problem sets, take a blank sheet and write out all seven statement patterns — name, move, and the signal word(s) that identify it — from memory. Any pattern you cannot reproduce is the one to re-read. This step takes three minutes and front-loads the pattern recognition the drills are designed to build.

2. **Easy set: workflow out loud.** For each easy question, verbalize the three steps before answering: "Step 1, relevant columns are X and Y. Step 2, I will filter by... Step 3, I verify by computing..." Externalizing the workflow makes errors visible and builds automaticity. Target 100% accuracy — if you miss one, diagnose which step broke down, not just which answer was wrong.

3. **Medium set: write every intermediate.** Medium questions involve multi-category comparisons, derived metrics, and conditional aggregations. Write every intermediate value on scratch paper before comparing. If you miss a question, identify which step you skipped or computed incorrectly — the three-step frame tells you exactly where the error lives.

4. **Hard set: 3-minute cap per question.** If you are not done in 3 minutes, log what you were computing, guess, and move on. After the set, review which statements consumed the most time — those are the patterns to re-drill. Speed on Table Analysis comes entirely from pattern automaticity, not from computing faster.

Drill the 35 questions in this chapter across the three problem sets. The first few will feel slow; by the tenth, the workflow should be automatic.
