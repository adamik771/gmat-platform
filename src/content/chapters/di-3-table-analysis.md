---
slug: table-analysis
title: Table Analysis
section: DI
estimated_minutes: 45
prerequisites: []
summary: |
  Table Analysis hands you a sortable data table and a set of Yes/No statements, then asks whether each is true. The skill being tested is not reading speed — it is disciplined efficiency: answering each statement in under 60 seconds without ever re-reading the whole table. The students who run out of time are not slow at arithmetic; they are undisciplined about what they read. This chapter fixes that with one repeatable loop (identify the column, filter or sort, verify the claim) and the seven statement patterns that cover roughly 90% of what the test shows you.

  By the end of this chapter you will: (1) run the identify-filter-verify loop on autopilot; (2) know on sight whether to sort or filter; (3) name any statement's pattern within five seconds; (4) compare averages and medians without heavy computation; and (5) sidestep the derived-metric traps that produce close-but-wrong answers.
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
    intro: |
      Table Analysis rewards process, not horsepower. The arithmetic is never the obstacle — the obstacle is reading too much, recomputing what you already know, and juggling three numbers in your head at once. This section installs a single loop that removes all three failure modes. Run it until it is reflexive, and every statement becomes mechanical.
    check_question_ids:
      - table-analysis-q13

  - id: sorting-vs-filtering
    type: reading
    title: "Sorting vs. filtering — when to use each"
    intro: |
      The table on your screen is interactive, and most students never use the one feature that makes it trivial: a single click on a column header. Sorting turns "scan every row" into "read one row." Knowing *when* to sort versus filter is the biggest speed lever on this question type — a decision you can make in under five seconds once the rules are automatic.
    check_question_ids:
      - table-analysis-q22
      - table-analysis-q23

  - id: statement-patterns
    type: reading
    title: "The seven most common Yes/No statement patterns"
    intro: |
      Three statements per question, and nearly every one is a variation on seven recurring shapes. The instant you can name the pattern, you stop improvising and start executing a move you have already rehearsed. This is the section that converts Table Analysis from a reading task into pure pattern recognition.
    check_question_ids:
      - table-analysis-q43
      - table-analysis-q2
      - table-analysis-q3

  - id: averages-and-medians
    type: reading
    title: "Averages, medians, and aggregated metrics"
    intro: |
      The moment a statement says "average" or "median," most students reach for division — and they rarely need it. This section gives you three shortcuts that answer aggregate questions with almost no arithmetic, because the test is daring you to compute exact values it never actually asked for.
    check_question_ids:
      - table-analysis-q14
      - table-analysis-q15

  - id: cross-category-comparisons
    type: reading
    title: "Cross-category comparisons — subsetting and ranking"
    intro: |
      Multi-category statements are where careless points leak — not because the math is hard, but because you are holding three group-results in your head and lose track of which is which. The fix is not a better memory; it is a two-pass routine that puts every number on paper before you compare. One second slower per step, far faster over the whole question.
    check_question_ids:
      - table-analysis-q17
      - table-analysis-q26

  - id: derived-metrics-and-traps
    type: reading
    title: "Derived metrics and common traps"
    intro: |
      This is the deep end: ratios, percent change, per-unit values — metrics the table never hands you directly. It is also where the test plants its sharpest traps, because every derived number combines two inputs and a single misread corrupts the answer. Own the handful of derivations here, and the hard set stops surprising you.
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
      - table-analysis-q66
      - table-analysis-q54
      - table-analysis-q62
      - table-analysis-q21
      - table-analysis-q50
      - table-analysis-q70
      - table-analysis-q24
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - table-analysis-q75
      - table-analysis-q37
      - table-analysis-q68
      - table-analysis-q5
      - table-analysis-q71
      - table-analysis-q8
      - table-analysis-q9
      - table-analysis-q46
      - table-analysis-q41
      - table-analysis-q16
      - table-analysis-q45
      - table-analysis-q18
      - table-analysis-q25
      - table-analysis-q56
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
      - table-analysis-q93
      - table-analysis-q20
      - table-analysis-q33
      - table-analysis-q34
      - table-analysis-q35
---

## @the-three-step-workflow

Table Analysis is the one DI question type where your discipline matters more than your math. The computations are never hard — simple averages, counts, and comparisons. What trips students up is inefficiency: reading too much of the table, re-computing values already computed, or holding three numbers in memory simultaneously. The three-step workflow eliminates all three failure modes.

Every Table Analysis question follows the same three-step pattern. Internalize the workflow and the question becomes mechanical.

**Mental model.** Every TA question has the same three steps: identify the columns, filter or sort, then verify the claim against the filtered subset. Skip the filter step and you over-compute on the full table; skip the verify step and you bubble the trap answer that looks right at a glance. The whole format becomes mechanical once the three-step rhythm is reflexive.

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
- Step 3 (verify): 30-40 seconds.

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

**Micro-drill.** Run the identify-filter-verify loop on the Employee Demographics table above. Name the relevant columns, then decide Yes or No — 30 seconds each:

1. More than half of the employees earn at least $120K.
2. The average age in Operations is greater than the average age in Strategy.
3. Every employee with more than 6 years of experience earns more than $130K.

Answers: (1) **Yes** — relevant column: Salary. Filter salary ≥ 120: A (120), B (140), D (155), F (125), G (150) — that's 5 of 8, and 5 > 4. You never touch Department, Years, or Age. (2) **Yes** — columns: Department, Age. Operations ages 42, 35 → sum 77, avg 38.5; Strategy ages 32, 28, 40 → sum 100, avg 33.3. Counts differ (2 vs 3), so you must divide. 38.5 > 33.3. (3) **No** — columns: Years, Salary. Filter Years > 6: B (8 yrs, 140), D (12, 155), F (7, 125), G (10, 150). F earns 125, which is not more than 130 — one counterexample ends it. If you answered Yes, you confirmed the first few rows instead of hunting for the exception; universal claims ("every") are disproved by a single miss.

> **Recall check.** Close the book. State the three-step Table Analysis workflow. Now state the time budget for each step. (Step 1 identify, Step 2 filter/sort, Step 3 verify. Budget: 5 + 15 + 40 = 60 seconds.) Pattern-drill this three-step until it's reflexive — that's what makes you fast on Table Analysis.

## @sorting-vs-filtering

GMAT Table Analysis tables are **sortable**. You can click a column header to sort ascending or descending — and many statements are much faster to answer after sorting.

**Why sorting works.** Sorting physically moves extreme values to the first or last row. That turns a "scan every cell" problem into a "read one row" problem. A statement about the highest salary in Finance requires scanning all Finance employees — unless you sort by Salary descending first, making the answer the topmost Finance row. Any time a statement involves a rank, extreme, or median, the sort click is faster than scanning.

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

**Micro-drill.** For each statement, first call it — sort, filter, or both — then answer using the Employee Demographics table. 30 seconds each:

1. The third-highest salary belongs to a Finance employee.
2. No employee under 30 years old earns more than $100K.
3. The most-experienced Operations employee earns more than the most-experienced Strategy employee.

Answers: (1) **Sort. Yes** — sort Salary descending: D (155), G (150), B (140). Third row is B, Finance. (2) **Filter. Yes** — filter Age < 30: C (28, 95K), E (26, 85K). Neither exceeds 100K, so "no employee" holds. You only inspect two rows, not eight. (3) **Filter then sort. Yes** — filter Operations: D (12 yrs, 155), F (7 yrs, 125); most experienced is D, earning 155. Filter Strategy: G (10 yrs, 150) is most experienced, earning 150. 155 > 150. Note that you compare the right people only after the filter — the most-experienced employee in each group, not the highest earner.

> **Recall check.** Cover this section. When does a statement call for a sort, and when for a filter? (Sort for ranks and extremes — highest, lowest, second-largest, median. Filter for subsets — a department, a price range, a compound condition.) Now: a statement asks for "the median salary." Sort or filter? (Sort the Salary column, then read the middle row(s) — no computation needed.) If you reached for a filter, re-read the "When to sort" list; medians are a sort move.

## @statement-patterns

Seven statement patterns cover roughly 90% of what you'll see on Table Analysis. Memorize these and you'll recognize the move to make within 5 seconds of reading any statement.

**Pattern 1: Simple threshold count.**

"More than half of the rows satisfy condition X."

*Move:* filter on X, count, compare to total/2.

**Example.** Statement: "More than half of the companies had Q4 revenue greater than their Q1 revenue by at least 25%." For 5 companies, check each: compute Q4/Q1 ratio, compare to 1.25, count yes's. If count > 2.5 (i.e., ≥3), **Yes**; else **No**.

**Pattern 2: Rank check.**

"The highest/lowest value of X is in category Y."

*Move:* sort by X, read off the top/bottom row, check its category.

**Example.** Statement: "The highest-paid employee works in Operations." Sort Salary descending: D (155, Operations) is the top row. Department = Operations. **Yes.**

**Pattern 3: Category comparison.**

"The average/median of category A exceeds category B."

*Move:* filter to A, compute metric. Filter to B, compute metric. Compare.

**Pattern 4: Within-row derivation.**

"For every row, X > Y" (where X and Y are columns).

*Move:* compare the two columns row-by-row. A single counterexample makes the statement false.

**Example.** Statement: "Every Strategy employee has more than 4 years of experience." Strategy rows: A (5 years), C (3 years), G (10 years). C has 3 years — that's ≤ 4. One counterexample disproves. **No.**

The move is identical whether the statement uses "every," "all," or "no [column] exceeds X" — always scan for the exception, not the confirmation.

**Pattern 5: Existence check.**

"There is at least one row with both X > a and Y < b."

*Move:* filter on the conjunction. If the filtered set is nonempty, **Yes**; else **No**.

**Pattern 6: Range check.**

"All values of X fall between a and b."

*Move:* find min and max of X. If min ≥ a and max ≤ b, **Yes**.

**Example.** Statement: "All salaries in the table fall between $80K and $160K." Sort Salary ascending: lowest is E (85K), highest is D (155K). 85 ≥ 80 and 155 ≤ 160. **Yes.** You only need to check two values — the minimum and maximum — not every row.

**Pattern 7: Correlation/trend check.**

"The company with the highest X also has the highest Y" (or "highest X has lowest Y," etc.).

*Move:* find the top-X row. Check its Y rank. If Y is also top (or bottom, depending on statement), **Yes**.

**Example.** Statement: "The highest-earning employee also has the most years of experience." Sort Salary descending: top row is D (Salary 155K, Years 12). Sort Years descending: top row is also D (Years 12). Both extremes belong to the same row. **Yes.** You only need to find the top-X row and check where it ranks on Y — no need to compute every row.

**The "statement negation" reflex.** To prove a universal statement ("every," "all," "no") false, find one counterexample. To prove an existential statement ("at least one," "some") true, find one example. Focus your scanning accordingly — you don't have to exhaustively verify every row.

**Example.** "Every employee over 30 earns more than $100K." Scan employees over 30. Any earning ≤ 100K? One counterexample disproves.

**Example.** "At least one employee in Finance is older than 40." Scan Finance employees. Any older than 40? One example confirms.

> **Self-explanation prompt.** Why does "every"/"no" require checking every row but "at least one" needs just one example? If you can say "because universal claims fail if a single counterexample exists, while existential claims succeed if a single confirming case exists," you've internalized the asymmetry — and you'll scan tables much faster.

**Micro-drill.** For each statement, name the pattern (1-7) before you compute, then answer using the Employee Demographics table. The naming is the point — 20 seconds each:

1. The highest-paid employee is also the oldest.
2. At least one Strategy employee is older than 38.
3. All employees are between 25 and 45 years old.

Answers: (1) **Pattern 7 (correlation/trend). Yes** — top of Salary is D (155); top of Age is also D (42). Same row owns both extremes, so check one row, not eight. (2) **Pattern 5 (existence). Yes** — Strategy ages 32, 28, 40; G at 40 confirms it on the first hit. Stop scanning the moment you find one. (3) **Pattern 6 (range). Yes** — you only need the min and max of Age: lowest is E (26), highest is D (42); 26 ≥ 25 and 42 ≤ 45. Two values settle a statement about all eight. If naming the pattern took longer than the arithmetic, that is exactly the reflex to drill — the label tells you the move before you read a single number.

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

**Micro-drill.** Use the deviation trick or the sort-to-the-middle move on the Employee Demographics table — no long division. 30 seconds each:

1. The average salary across all eight employees exceeds $120K.
2. The median salary is greater than $120K.

Answers: (1) **Yes** — deviation trick. Subtract 120 from each salary: 0, +20, −25, +35, −35, +5, +30, −5. Sum = +25. A positive total of deviations means the average sits above 120 — no need to find that it is actually 985 ÷ 8 ≈ 123.1. (2) **Yes** — sort Salary: 85, 95, 115, 120, 125, 140, 150, 155 (n = 8). Median is the average of positions 4 and 5: (120 + 125) / 2 = 122.5 > 120. You read two rows instead of summing all eight. Notice the average (123.1) and median (122.5) are close here only because the salaries are fairly symmetric — when a statement contrasts the two, expect a skew the test is exploiting.

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

**Micro-drill.** Run the two-pass routine on the Employee Demographics table — write each group's numbers down before comparing. 40 seconds each:

1. Operations has the highest average salary of the three departments.
2. The total salary of employees aged 35 or older exceeds $550K.

Answers: (1) **Yes** — Pass 1: three departments. Pass 2: Strategy (120, 95, 150) → 365 / 3 ≈ 121.7; Finance (140, 85, 115) → 340 / 3 ≈ 113.3; Operations (155, 125) → 280 / 2 = 140. Operations wins. Because Operations has only 2 employees against 3, you cannot compare raw sums here — the division is mandatory. (2) **Yes** — filter Age ≥ 35: B (38, 140), D (42, 155), F (35, 125), G (40, 150). Sum = 140 + 155 + 125 + 150 = 570 > 550. Watch the boundary: "35 or older" includes F at exactly 35; drop F and you get 445 and the wrong answer.

> **Self-explanation prompt.** Why does writing each group's result on paper beat holding them in your head, even when the math is easy? If you can say "because the error on these questions is almost never the arithmetic — it's attaching the right number to the wrong category under time pressure, and paper makes that mix-up impossible," you understand why the two-pass routine exists. Speed on cross-category questions comes from never having to re-derive a number you already computed.

## @derived-metrics-and-traps

Some statements require computing a *new* metric from the table columns — a ratio, a percentage, a per-unit value. These are the most arithmetic-heavy Table Analysis questions, and where most errors happen.

**Derived metric: ratio (column A / column B).**

**Example.** Table: Sales, Visitors. Statement: "The region with the highest conversion rate is East."

Conversion rate = Sales / Visitors. Compute per row, compare.

**Derived metric: percent change over time.**

**Example.** Columns Q1 and Q4. Statement: "More than half of companies grew by at least 25% from Q1 to Q4."

For each row: % change = (Q4 - Q1)/Q1 × 100. Count rows where this ≥ 25. Compare count to half the total.

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

**Micro-drill.** These two test the traps directly. Compute, then read the warning. 40 seconds each:

1. Using the Employee Demographics table, compute salary per year of experience (Salary ÷ Years) for D and F. Which is higher — and what does that reveal?
2. Employee C's salary rose from $95K to $120K. The statement claims that is a 25% increase. True or false?

Answers: (1) **F is higher.** D: 155 / 12 ≈ 12.9K per year. F: 125 / 7 ≈ 17.9K per year. D earns more in total but less per year of tenure — proof that a derived ranking can invert the raw ranking, which is exactly the inversion these statements are built on. Never assume the top earner also leads on a per-unit metric. (2) **False.** Percent change is over the *old* value: (120 − 95) / 95 = 25 / 95 ≈ 26.3%, not 25%. The trap answer comes from dividing by the new value (25 / 120 ≈ 20.8%) or from eyeballing the $25 jump as "25%." On any percent-change statement, the denominator is the starting number, every time.

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

Drill the 35 questions in this chapter across the three problem sets. The first few will feel slow; by the tenth, the workflow should be automatic.

**What to do next.**

- Below 60% on the medium set: revisit the @statement-patterns and @averages-and-medians sections. Most medium-difficulty errors come from skipping the filter step or misidentifying which rows belong to the subset.
- Above 80% on medium: move to the hard set. Hard questions almost always involve derived metrics — ratios and percent changes. Review @derived-metrics-and-traps before starting.
- After completing this chapter: the closest sibling is Graphics Interpretation, which uses the same filter-then-compute logic on charts instead of tables. Two-Part Analysis and Multi-Source Reasoning are the other DI types worth scheduling next.
