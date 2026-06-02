---
slug: table-analysis
title: Table Analysis
section: DI
estimated_minutes: 45
prerequisites: []
summary: |
  Table Analysis gives you a sortable data table plus a series of Yes/No statements, and asks whether each statement is true given the data. The test isn't about reading speed — it's about efficiency. You need a repeatable filter-sort-verify discipline that answers each statement in under 60 seconds without re-reading the whole table. Master the three-step workflow (identify the relevant column, filter or sort, compute the check), internalize the seven most common statement patterns, and you'll solve every Table Analysis question without ever feeling rushed.

  By the end of this chapter you will: (1) apply the three-step workflow automatically on every statement; (2) classify any Table Analysis statement into one of seven patterns within five seconds of reading it; (3) use sort and filter as precision instruments rather than brute-force scanning; and (4) avoid the seven traps that turn medium questions into hard ones.
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
      Table Analysis is the most procedural question type on the GMAT — every single statement can be answered with the same three-step workflow. Internalize this workflow before anything else: once it becomes reflexive, even the hardest statements feel mechanical. This section builds the workflow from first principles and gives you a micro-drill to make it automatic.
    check_question_ids:
      - table-analysis-q13

  - id: sorting-vs-filtering
    type: reading
    title: "Sorting vs. filtering — when to use each"
    intro: |
      The GMAT's Table Analysis interface lets you click any column header to sort the table — and most students never use this feature effectively. Sorting is the fastest path to rank and extremum questions; filtering is the fastest path to category and subset questions. Knowing which to reach for before you start halves your per-statement time.
    check_question_ids:
      - table-analysis-q22
      - table-analysis-q23

  - id: statement-patterns
    type: reading
    title: "The seven most common Yes/No statement patterns"
    intro: |
      Ninety percent of Table Analysis statements map to one of seven patterns. Recognize the pattern in the first five seconds of reading and you know the exact operation to run before you touch the table. This section catalogues the seven patterns, gives the move for each, and builds recognition through a classification drill.
    check_question_ids:
      - table-analysis-q1
      - table-analysis-q2
      - table-analysis-q3

  - id: averages-and-medians
    type: reading
    title: "Averages, medians, and aggregated metrics"
    intro: |
      Average and median computations feel slow on large tables — until you know three shortcuts that eliminate most of the arithmetic. Internalize these and you will close most average and median statements in under 30 seconds without a calculator.
    check_question_ids:
      - table-analysis-q14
      - table-analysis-q15

  - id: cross-category-comparisons
    type: reading
    title: "Cross-category comparisons — subsetting and ranking"
    intro: |
      Multi-category comparisons are organizationally demanding — the risk isn't arithmetic, it's losing track of which numbers belong to which category. A disciplined two-pass technique prevents those mix-ups and keeps computation clean even with three or four categories.
    check_question_ids:
      - table-analysis-q17
      - table-analysis-q26

  - id: derived-metrics-and-traps
    type: reading
    title: "Derived metrics and common traps"
    intro: |
      The hardest Table Analysis questions ask you to compute a metric that doesn't appear as a column — a ratio, a per-unit value, a percent change. These questions require combining two data points per row in a specific way, and one misread of either piece corrupts the result. This section gives you the patterns, the unit-mismatch warning, and the sanity check that catches most errors before you bubble.
    check_question_ids:
      - table-analysis-q7
      - table-analysis-q19

  - id: summary
    type: summary
    title: "The Table Analysis decision tree"
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

**Mental model.** Every TA statement has the same three steps: identify the rows, filter or sort, then verify the claim against the filtered subset. Skip the filter step and you over-compute on the full table. Skip the verify step and you bubble the trap answer that looks right at a glance. The whole format becomes mechanical once the three-step rhythm is reflexive.

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
- Step 3 (verify): 20–30 seconds.

Total: ~60 seconds per statement. Three statements per question = ~3 minutes. That is your target.

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

**Micro-drill.** Using the Employee Demographics table above, apply the three-step workflow to each statement. Try all three before checking the answers — aim for under 60 seconds each.

1. "The youngest employee earns less than $100K."
2. "The Finance department has more total years of experience than the Operations department."
3. "Every employee over age 35 earns above the company's average salary."

(Answers: **1.** Step 1: Age column. Step 2: Sort age ascending — youngest is E, age 26. Step 3: E's salary is 85K. 85 < 100. **Yes.** **2.** Step 1: Department + Years. Step 2: Filter Finance (B, E, H): 8+2+6 = 16 years. Filter Operations (D, F): 12+7 = 19 years. Step 3: 16 < 19. **No.** **3.** Step 1: Age + Salary. Step 2: Filter age>35: B (38, 140), D (42, 155), G (40, 150). F is exactly 35 — "over 35" excludes F. Step 3: Company average = (120+140+95+155+85+125+150+115)/8 = 985/8 = 123.1K. All three earn above 123.1K. **Yes.** Notice step 2 — the boundary exclusion on F is exactly the kind of slip that costs points under time pressure.)

> **Recall check.** Close the book. State the three-step Table Analysis workflow. Now state the time budget for each step. (Step 1 identify, Step 2 filter/sort, Step 3 verify. Budget: 5 + 15 + 30 = 60 seconds.) Pattern-drill this three-step until it is reflexive — that is what makes you fast on Table Analysis.

## @sorting-vs-filtering

GMAT Table Analysis tables are **sortable**. You can click a column header to sort ascending or descending — and many statements are much faster to answer after sorting.

**When to sort:**

- "The highest/lowest X in a category" — sort the X column and look at the top/bottom.
- "The second [biggest/smallest] value" — sort and count rows.
- "The median of column X" — sort and find the middle row.
- "How many rows have X > 50" — sort X ascending, find where it crosses 50, count below/above.

**When to filter:**

- "Employees in department Y" — filter on department, work with the subset.
- "Products priced between $10 and $20" — filter on price range.
- "Clients with more than 3 orders AND from region X" — filter on multiple columns.

**When to sort AND filter:**

Some statements require both. "The highest-salaried Finance employee" requires first filtering to Finance, then sorting (or scanning) within that subset to find the maximum salary.

**The sorting workflow.**

1. Identify the column you need to sort by.
2. Decide direction: descending for "highest," "greatest," "largest"; ascending for "lowest," "smallest," "least."
3. Read off the answer from the top (or bottom).

**Example (sort).** Statement: "The highest-paid employee works in Operations."

- Sort by Salary descending: D (155), G (150), B (140), F (125), A (120), H (115), C (95), E (85).
- Top of list: D, Operations. **Yes.**

**Example (filter then sort).** Statement: "The highest-paid Strategy employee earns more than the highest-paid Finance employee."

- Filter to Strategy: A (120), C (95), G (150). Highest: G, 150.
- Filter to Finance: B (140), E (85), H (115). Highest: B, 140.
- 150 > 140. **Yes.**

**Mental sorting for small tables.** If the table has under 10 rows, you can often sort mentally by scanning the column once. For larger tables, use the sort button.

**The "top three" pattern.** Many questions ask about the top (or bottom) 3–5 rows after sorting. Sort, take the first N, then apply the filter or compute the metric.

**Example.** Statement: "Of the top three most-experienced employees, at least one earns less than $130K."

- Sort by Years descending: D (12, 155), G (10, 150), B (8, 140).
- Salaries of top three: 155, 150, 140. All > 130. **No.**

**The "what if sorting is ambiguous" problem.** Ties in a sort (two employees with the same years) usually don't affect the answer. If the question explicitly depends on a tie — "the third-most-experienced employee" when two employees share second place — re-read to see if the problem specifies a tiebreaker, or if any resolution of the tie gives the same answer.

**Trap to watch.** Some statements read like sort questions but are actually filter questions. "Is there any employee over 40 who earns less than $120K?" — this is a filter (age > 40 AND salary < 120) plus an existence check (is the filtered set nonempty?). Don't waste time sorting the full table.

> **Recall check.** Without looking above: when does a statement call for sorting versus filtering? Name one case where you need to sort AND filter. (Sort for rank and extremum: "highest," "lowest," "second biggest." Filter for subsets: "employees in Finance," "products priced under $50." Sort AND filter: "the highest-paid Finance employee" requires filtering to Finance, then finding the maximum salary within that subset.) If you hesitated on any of these, re-read the two "When to..." lists before the check questions.

## @statement-patterns

Seven statement patterns cover roughly 90% of what you will see on Table Analysis. The table below is your reference — study it, then verify each pattern with the detailed examples that follow.

| Pattern | Trigger words | Move |
|---|---|---|
| Threshold count | "more than half," "at least X%" | filter → count → compare to threshold |
| Rank check | "highest/lowest X is in category Y" | sort by X → read top/bottom row's category |
| Category comparison | "average/median of A exceeds B" | filter each → compute → compare |
| Within-row derivation | "for every row, X > Y" | compare two columns row-by-row; one counterexample → No |
| Existence check | "at least one row with X > a AND Y < b" | filter on conjunction → nonempty → Yes |
| Range check | "all values of X fall between a and b" | find min and max of X → check bounds |
| Correlation/trend | "highest X also has highest Y" | find top-X row → check its Y rank |

**Pattern 1: Simple threshold count.**

"More than half of the rows satisfy condition X."

*Move:* filter on X, count, compare to total/2.

**Example.** Statement: "More than half of the companies had Q4 revenue greater than their Q1 revenue by at least 25%." For 5 companies, check each: compute Q4/Q1 ratio, compare to 1.25, count yes-rows. If count > 2.5 (i.e., ≥ 3), **Yes**; else **No**.

**Pattern 2: Rank check.**

"The highest/lowest value of X is in category Y."

*Move:* sort by X, read off the top/bottom row, check its category.

**Pattern 3: Category comparison.**

"The average/median of category A exceeds category B."

*Move:* filter to A, compute metric. Filter to B, compute metric. Compare.

**Pattern 4: Within-row derivation.**

"For every row, X > Y" (where X and Y are columns in the same row).

*Move:* compare the two columns row-by-row. A single counterexample makes the statement false.

**Example.** Statement: "Every company's Q4 revenue is higher than its Q1 revenue." Check each row — if any has Q4 ≤ Q1, the answer is **No**.

**Pattern 5: Existence check.**

"There is at least one row with both X > a and Y < b."

*Move:* filter on the conjunction. If the filtered set is nonempty, **Yes**; else **No**.

**Pattern 6: Range check.**

"All values of X fall between a and b."

*Move:* find min and max of X. If min ≥ a and max ≤ b, **Yes**.

**Pattern 7: Correlation/trend check.**

"The company with the highest X also has the highest Y."

*Move:* find the top-X row. Check its Y rank. If Y is also top, **Yes**.

**The "statement negation" reflex.** To prove a universal statement ("every," "all," "no") false, find one counterexample. To prove an existential statement ("at least one," "some") true, find one example. This asymmetry determines how you scan: for universals you scan exhaustively until you find a counterexample or confirm all rows pass; for existentials you stop the moment you find one confirming row.

**Example.** "Every employee over 30 earns more than $100K." Scan employees over 30: B (38, 140), D (42, 155), F (35, 125), G (40, 150), H (33, 115). All > 100. **Yes.** (One counterexample would flip the answer immediately.)

**Example.** "At least one Finance employee is older than 40." Scan Finance: B (38), E (26), H (33). None > 40. **No.** (Only takes one confirming example to answer Yes — you don't have to check all Finance employees once you find one over 40.)

**Micro-drill.** Classify each statement by pattern and name the move — before you work it out. Use the Employee Demographics table from the previous section.

1. "More than three-quarters of the employees are younger than 40."
2. "The employee with the highest salary is in Operations."
3. "There is at least one Finance employee older than every Strategy employee."
4. "Every Strategy employee's salary falls between $90K and $160K."
5. "The department with the highest average salary also has the highest average age."

(Answers: **1.** Threshold count — filter age < 40: A, B, C, E, F, H = 6 employees. Is 6 > (3/4)×8 = 6? No, 6 is not *more than* 6. **No.** **2.** Rank check — sort Salary descending; top row is D (155), Operations. **Yes.** **3.** Existence check — max Strategy age is G (40). Filter Finance: B (38), E (26), H (33). None > 40. **No.** **4.** Range check — filter Strategy (A 120, C 95, G 150): min 95 ≥ 90, max 150 ≤ 160. **Yes.** **5.** Correlation/trend — average salary by dept: Strategy 121.7, Finance 113.3, Operations 140. Highest salary: Operations. Average age: Strategy (33.3), Finance (32.3), Operations (38.5). Highest age: Operations. Same department. **Yes.**)

> **Self-explanation prompt.** Why does "every"/"no" require checking every row but "at least one" needs just one example? If you can say "because universal claims fail if a single counterexample exists, while existential claims succeed if a single confirming case exists," you have internalized the asymmetry — and you will scan tables much faster.

## @averages-and-medians

When statements involve averages or medians across categories, computation can feel daunting on a large table. Three techniques collapse this to under 30 seconds.

**Technique 1: Sum trick (for averages).**

The average is (sum of values) / (count). Comparing averages reduces to comparing sums when counts are equal.

**Example.** Statement: "Average salary of Strategy > average salary of Finance." Strategy has 3 employees, Finance has 3 employees. Compute the two sums — no need to divide. 365 > 340, so Strategy average > Finance average. **Yes.**

When counts differ, compute sums first, then do the single division for each — but only divide when you have to, not as a reflex.

**Technique 2: Running count for medians.**

The median of an ordered set of n values is at position (n+1)/2 for odd n, or the average of positions n/2 and n/2+1 for even n.

**Example.** Sort Salary: 85, 95, 115, 120, 125, 140, 150, 155 (n=8). Median is average of positions 4 and 5: (120+125)/2 = 122.5.

**Technique 3: Deviation scanning (for "is the average above X?").**

Sometimes the question is "is the average above X?" without needing the exact value. Shortcut: compute (value − X) for each row and sum the deviations. If the sum is positive, the average is above X.

**Example.** Ages: 32, 38, 28, 42, 26, 35, 40, 33. Is the average above 35?

Deviations from 35: −3, +3, −7, +7, −9, 0, +5, −2. Sum: −6. Sum is negative — average is below 35. **No.**

This is often faster than computing the actual average because the deviations are smaller numbers.

**The weighted average template.** Some Table Analysis questions involve weighted averages — each row contributes a "weight" (like a transaction count) and the question asks about an overall average.

**Example.** Region sales: East sold 100 units at $5, West sold 200 at $8. Overall average price: (100×5 + 200×8)/(100+200) = (500+1600)/300 = 2100/300 = $7.

The weighted average lies closer to the $8 end because West has more units — two-thirds of the weight. This is the key intuition: the weighted average tilts toward the group with more weight.

**The "median from a large table" shortcut.** For a sorted table with 50 rows, the median is the average of rows 25 and 26. You don't need to compute — click the sort button and read the middle two values.

> **Recall check.** Without looking: state the two formulas for finding the median (odd n vs. even n). Now state the sum trick for comparing averages when counts are equal. Now describe the deviation-scanning technique. (Median for odd n: position (n+1)/2. For even n: average of positions n/2 and n/2+1. Sum trick: when counts match, compare sums instead of computing averages. Deviation scanning: compute each value minus the threshold, sum the deviations; positive sum means average is above threshold.) Retrieval of these three rules is what separates a 30-second verification from a 3-minute recomputation.

## @cross-category-comparisons

Questions that compare across multiple categories require a filter-then-compute-then-compare workflow. The challenge is staying organized so you don't lose track of which numbers belong to which category.

**The two-pass technique.**

Pass 1: identify all categories relevant to the statement.
Pass 2: for each category, filter and compute the metric.

Write down the results as you go — do not try to hold three category averages in memory simultaneously.

**Example.** Three departments (Strategy, Finance, Operations). Statement: "The average years of experience is highest in Operations."

Pass 1: three categories (all three departments).
Pass 2:

- Strategy (A, C, G): Years 5, 3, 10. Sum 18, count 3, avg 6.
- Finance (B, E, H): Years 8, 2, 6. Sum 16, count 3, avg 5.33.
- Operations (D, F): Years 12, 7. Sum 19, count 2, avg 9.5.

Operations average (9.5) is highest. **Yes.**

Note: when counts differ (2 vs. 3 here), you need the division. When counts are equal, sums suffice.

**The "subgroup max/min" pattern.**

"The oldest Finance employee is younger than the oldest Strategy employee."

Filter to Finance, find max age. Filter to Strategy, find max age. Compare.

- Finance: B (38), E (26), H (33). Max age 38.
- Strategy: A (32), C (28), G (40). Max age 40.
- 38 < 40. **Yes.**

**The "conditional aggregation" pattern.**

"The total salary of employees over 35 exceeds $400K."

Filter by age > 35. Sum their salaries. Compare to threshold.

- Employees over 35: B (38, 140), D (42, 155), G (40, 150). Sum: 140+155+150 = 445. 445 > 400. **Yes.**

Note F is exactly 35 — excluded by "over 35."

**The "intersection" pattern.**

"All Finance employees over 30 earn more than $100K."

Filter on both conditions simultaneously (Finance AND age > 30). Then verify the salary condition on every row in the filtered set.

- Finance over 30: B (38, 140), H (33, 115). Both > 100. **Yes.**

**Trap to watch.** "AND" versus "OR" in filter conditions. "Finance AND over 30" means both conditions must hold in the same row. "Finance OR over 30" means at least one condition holds. On Table Analysis, compound filters almost always use AND (both conditions must be true) — but read carefully.

**The organizational mistake to avoid.** Under time pressure, students sometimes filter correctly but then accidentally grab a salary value from a non-filtered row while scanning. The fix: before doing any arithmetic, physically circle or mentally mark the row IDs in the filtered set (A, C, G for Strategy). Only pull values from those rows.

> **Recall check.** State the two passes of the two-pass technique. Why write down intermediate values rather than hold them in memory? (Pass 1: identify all relevant categories. Pass 2: filter each category and compute. Write values down because cross-category questions require comparing three or more computed numbers — holding all of them while computing the last one causes retroactive interference; writing pins each value as it's computed.)

> **Self-explanation prompt.** Why is the organizational mistake — grabbing a value from the wrong row — so much more common on cross-category questions than on single-pass questions? If you can say "because cross-category questions require you to mentally hold a filter condition while scanning, and the extra cognitive load of maintaining the filter opens a gap for the eye to slip to an adjacent row," you have identified the exact failure mode — and writing down row IDs before computing closes that gap.

## @derived-metrics-and-traps

Some statements require computing a new metric from the table columns — a ratio, a percentage, a per-unit value. These are the most arithmetic-heavy Table Analysis questions, and the most error-prone.

**Derived metric: ratio (column A / column B).**

**Example.** Table: Sales, Visitors. Statement: "The region with the highest conversion rate is East."

Conversion rate = Sales / Visitors. Compute per row, compare. Do not pick by highest Sales alone.

**Derived metric: percent change over time.**

**Example.** Columns Q1 and Q4. Statement: "More than half of companies grew by at least 25% from Q1 to Q4."

For each row: % change = (Q4 − Q1) / Q1 × 100. Count rows where this ≥ 25. Compare to half the total.

The denominator is Q1 (the starting value), not Q4. Dividing by the wrong value is the most common arithmetic error on percent-change questions.

**Derived metric: per-unit value.**

**Example.** Columns Revenue, Employees. Statement: "Revenue per employee is highest at Company D."

Compute Revenue/Employees per row, compare. The company with the highest absolute Revenue may have so many employees that its per-unit value is mediocre.

**The "multi-step derivation" pattern.** Some hard questions require two layers of computation. "The company with the highest revenue-per-employee also has the lowest cost-per-employee." Compute two ratios per row, then cross-check ranks.

**Common traps on Table Analysis.**

1. **The "numeric label" trap.** Columns sometimes have numeric-looking labels (e.g., "Rank" 1, 2, 3...). Do not treat a rank column as the underlying metric being ranked.

2. **The "currency vs. units" trap.** Revenue in millions vs. thousands; prices in dollars vs. cents. Always check units in the column header before dividing. Dividing $72K by $480M without a unit conversion gives a number 1000× too large.

3. **The "row label confusion" trap.** When scanning a long filtered table, double-check you are reading values from the correct rows. Easy to slip to an adjacent row.

4. **The "each" or "every" trap.** Universal claims require checking all filtered rows — not just the first few. Do not answer Yes after two confirming rows; finish the scan.

5. **The "percent change denominator" trap.** % change = (new − old) / **old**, not (new − old) / new. A small old value and a large new value will produce a very different result depending on which is the denominator.

6. **The "comparing dissimilar metrics" trap.** If one column is revenue and another is profit, re-read the statement carefully — it may be comparing different metrics deliberately. Do not assume the statement compares like to like.

7. **The "rounding matters" trap.** If answer choices are close (24.9% vs. 25%), do not round intermediate values. Carry one more decimal place than the answer requires.

**The "does this even matter?" sanity check.** Before committing to multi-step arithmetic, ask: is there a pattern that resolves this without computing? "Every value in column X is larger than every value in column Y" can sometimes be confirmed by a quick visual scan — no arithmetic needed. Always look for the easy path first.

> **Self-explanation prompt.** Why are derived metrics (ratios, percents) the most error-prone Table Analysis question type? If you can say "because they require two pieces of information per row combined in a specific order, and one misread of either piece — or a unit mismatch between them — corrupts the entire comparison," you have identified why these questions demand writing intermediate values down rather than computing mentally.

## @summary

Table Analysis is a mechanical workflow problem. Once you have the three-step workflow and the seven statement patterns internalized, every question becomes a 60-second-per-statement exercise.

**The Table Analysis decision tree — use this on every statement.**

1. Read the statement. Identify what it is claiming (rank? average? existence? threshold?).
2. Map it to one of the seven patterns. → This tells you the exact move to make.
3. Does the statement apply to the full table or a subset? → If a subset, filter first.
4. Is ranking or an extremum involved? → Sort the relevant column.
5. Universal claim ("every," "all," "no")? → Scan for a counterexample; one counterexample → No.
6. Existential claim ("at least one," "some")? → Scan for one confirming example; one found → Yes.
7. Compute → write down the result → verify → bubble.

**The five Table Analysis habits.**

1. **Identify relevant columns first.** Read the statement, then find the 1-2 columns that matter. Ignore the rest.
2. **Choose sort or filter based on the statement type.** Sort for ranks and extremes; filter for subsets.
3. **Write down intermediate values.** Do not hold multiple category-averages in memory — write each one as you compute it.
4. **Use sum comparison over average comparison** when category counts are equal.
5. **Find a single counterexample to disprove universals; find a single example to confirm existentials.**

**The seven statement patterns.**

| Pattern | Move |
|---|---|
| Threshold count | Filter → count → compare to threshold |
| Rank check | Sort → read top/bottom → verify category |
| Category comparison | Filter each category → compute → compare |
| Within-row derivation | Compare two columns row-by-row |
| Existence check | Filter on conjunction → check if nonempty |
| Range check | Find min/max of column → check bounds |
| Correlation/trend check | Find top/bottom of one column → check other column's rank |

**Time-management targets.**

- Per statement: ~60 seconds (5 seconds identify, 15 seconds filter/sort, 40 seconds verify).
- Per question (3 statements): under 3 minutes.
- If you are over 3:30 on a single Table Analysis question, you probably re-read the table rather than filtering first. Move on and return if time permits.

**The habit that separates 685 scorers from 605 scorers:** writing down intermediate computations. Trying to hold three category-averages in your head while comparing them is how points are lost on medium-difficulty Table Analysis. Write every intermediate number down.

**What to do next.** Work through the easy problem set first — the goal isn't accuracy yet, it's building the three-step workflow until it feels automatic. After each incorrect answer, name the step where you went wrong: Step 1 (identified the wrong column), Step 2 (wrong operation — sorted when you should have filtered), or Step 3 (arithmetic error). That one-sentence diagnosis builds pattern recognition faster than re-reading this chapter. Once easy is above 90%, move to medium. The medium set covers all seven statement patterns. Once medium is above 80%, tackle the hard set — most hard questions are derived-metric and multi-filter questions, so if those sections felt thin, re-read the derived-metrics section before starting. Track time per statement: any statement over 90 seconds means you are re-reading the full table rather than filtering to the relevant rows first.
