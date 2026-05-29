---
slug: table-analysis
title: Table Analysis
section: DI
estimated_minutes: 45
prerequisites: []
summary: |
  Table Analysis gives you a sortable data table plus a series of Yes/No statements, and asks whether each statement is true given the data. The test isn't about reading speed — it's about efficiency. You need a repeatable filter-sort-verify discipline that answers each statement in under 60 seconds without re-reading the whole table. Master the three-step workflow (identify the relevant column, filter or sort, compute the check), internalize the seven most common statement patterns, and you'll solve every Table Analysis question without ever feeling rushed.
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
      Table Analysis is called "Analysis" for a reason — you're evaluating whether a claim is true against data, not just reading. Every statement can be answered in under 60 seconds if you follow the same three moves in the same order, every time. Skip a step and you either compute on data you didn't need, or commit to an answer before you've verified the claim. This section gives you the workflow; every section after this applies it to a specific class of statement.
    check_question_ids:
      - table-analysis-q13

  - id: sorting-vs-filtering
    type: reading
    title: "Sorting vs. filtering — when to use each"
    intro: |
      The Table Analysis interface lets you click any column header to sort the table ascending or descending. Most students ignore this and scan manually, which doubles their time on ranking and median questions. Knowing when to sort — for rank, extreme-value, and median questions — vs. when to filter — for subset and intersection questions — is worth 20–30 seconds per statement. This section makes that choice automatic.
    check_question_ids:
      - table-analysis-q22
      - table-analysis-q23

  - id: statement-patterns
    type: reading
    title: "The seven most common Yes/No statement patterns"
    intro: |
      Ninety percent of Table Analysis statements fit one of seven patterns. Once you name the pattern, you already know the move — the arithmetic is almost secondary. The skill being tested here isn't computation; it's pattern identification under time pressure. This section builds that reflex so you can name the pattern within five seconds of reading any statement.
    check_question_ids:
      - table-analysis-q1
      - table-analysis-q2
      - table-analysis-q3

  - id: averages-and-medians
    type: reading
    title: "Averages, medians, and aggregated metrics"
    intro: |
      Statements involving averages or medians look calculation-heavy but have shortcuts that compress them to 20 seconds. The most powerful: when two categories have the same number of rows, you can skip the division entirely and just compare sums. This section gives you three techniques that cover every average-and-median statement on the test — and the sum trick alone eliminates 15–20 seconds of arithmetic per question.
    check_question_ids:
      - table-analysis-q14
      - table-analysis-q15

  - id: cross-category-comparisons
    type: reading
    title: "Cross-category comparisons — subsetting and ranking"
    intro: |
      When a statement compares three or more categories, the main risk isn't arithmetic error — it's organizational error. Students try to hold multiple intermediate results in their heads simultaneously and mix them up. The fix is structural: one pass to identify all relevant categories, then one pass per category to compute and write the result. Structure beats memory, especially under test-day pressure.
    check_question_ids:
      - table-analysis-q17
      - table-analysis-q26

  - id: derived-metrics-and-traps
    type: reading
    title: "Derived metrics and common traps"
    intro: |
      Derived metrics — ratios, percentage changes, per-unit values — are where most Table Analysis errors compound. They require two correct reads before you can even begin the arithmetic, and errors cascade: a misread numerator corrupts the ratio, which corrupts the rank, which corrupts the final answer. This section covers the four derived-metric types and the seven traps that recur across every Table Analysis question involving computation.
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

Read the statement. What columns does it actually ask about? Most statements reference 1–2 columns out of 5–10 in the table. Ignore the rest.

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

> **Recall check.** Close the book. State the three-step Table Analysis workflow. Now state the time budget for each step. (Step 1 identify, Step 2 filter/sort, Step 3 verify. Budget: 5 + 15 + 30 = 60 seconds.) Pattern-drill this three-step until it's reflexive — that's what makes you fast on Table Analysis.

> **Self-explanation prompt.** Why does the workflow always run in order — identify, filter, then verify — and never the other way around? If you can say "because verification only produces a correct answer when it runs on the right rows — filter first and the arithmetic is almost always trivial; filter last and your arithmetic will be fast but wrong," you've understood why the sequence matters, not just what the steps are.

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

> **Recall check.** Without looking back, state the conditions that call for sorting vs. filtering. Now classify each of these: (a) "The second-youngest employee in Finance." (b) "All employees with salary above $120K and fewer than 7 years of experience." (c) "The median salary across all employees." (Answers: (a) filter to Finance first, then sort by age ascending and read the second row — both tools needed; (b) filter on two conditions simultaneously — salary > 120 AND years < 7 — no sorting required; (c) sort the full salary column and read the middle row — pure sort. If you chose sort for (b), re-read "When to filter" — any multi-condition intersection is a filter, not a sort.)

## @statement-patterns

Seven statement patterns cover roughly 90% of what you'll see on Table Analysis. Memorize these and you'll recognize the move to make within 5 seconds of reading any statement.

**Pattern 1: Simple threshold count.**

"More than half of the rows satisfy condition X."

*Move:* filter on X, count, compare to total/2.

**Example.** Statement: "More than half of the companies had Q4 revenue greater than their Q1 revenue by at least 25%." For 5 companies, check each: compute Q4/Q1 ratio, compare to 1.25, count yes's. If count > 2.5 (i.e., ≥3), **Yes**; else **No**.

**Pattern 2: Rank check.**

"The highest/lowest value of X is in category Y."

*Move:* sort by X, read off the top/bottom row, check its category.

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

**Pattern 6: Range check.**

"All values of X fall between a and b."

*Move:* find min and max of X. If min ≥ a and max ≤ b, **Yes**.

**Pattern 7: Correlation/trend check.**

"The company with the highest X also has the highest Y" (or "highest X has lowest Y," etc.).

*Move:* find the top-X row. Check its Y rank. If Y is also top (or bottom, depending on statement), **Yes**.

**The "statement negation" reflex.** To prove a universal statement ("every," "all," "no") false, find one counterexample. To prove an existential statement ("at least one," "some") true, find one example. Focus your scanning accordingly — you don't have to exhaustively verify every row.

**Example.** "Every employee over 30 earns more than $100K." Scan employees over 30. Any earning ≤ 100K? One counterexample disproves.

**Example.** "At least one employee in Finance is older than 40." Scan Finance employees. Any older than 40? One example confirms.

**Micro-drill.** Use the Employee Demographics table from the previous section. Name the pattern first, then state Yes or No — 90 seconds total:

1. "More than half of all employees have fewer than 8 years of experience."
2. "The average age of Finance employees exceeds the average age of Strategy employees."
3. "The employee with the most years of experience is also the highest-paid."
4. "At least one Finance employee is under 30 years old."

Answers: (1) **Pattern 1 (threshold count). Yes.** Employees with < 8 years: A(5), C(3), E(2), F(7), H(6) — 5 out of 8. Half of 8 = 4. 5 > 4. (2) **Pattern 3 (category comparison). No.** Finance: B(38), E(26), H(33) — sum 97. Strategy: A(32), C(28), G(40) — sum 100. Equal counts — compare sums directly: 97 < 100, so Finance average is lower. (3) **Pattern 7 (correlation check). Yes.** Most years: D (12). Highest salary: D ($155K). Same employee, so both ranks align. (4) **Pattern 5 (existence check). Yes.** Scan Finance: B(38), E(26), H(33). E is 26 — one confirming case is sufficient. If you answered correctly but couldn't name the patterns, go back and review the seven labels. The name is the recall cue that makes the move automatic under test pressure.

> **Self-explanation prompt.** Why does "every"/"no" require scanning all rows while "at least one"/"some" stops at the first confirming case? If you can say "because universal claims are disproved by a single counterexample, while existential claims are proved by a single confirming case — so the moment you find what you're looking for, your search is over," you've internalized why the two quantifiers drive completely different scanning strategies.

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

**The "median from a large table" shortcut.** For a sorted table with 50 rows, the median is rows 25–26 averaged. You don't have to compute — just click the sort and read the middle rows.

> **Recall check.** Without looking, state the two ways to compute a median (odd n vs even n). Now state the "sum trick" for comparing averages when counts are equal. (Answers: odd → middle row by position (n+1)/2; even → average of the two middle rows; sum comparison works when counts match because averages differ only by their sums in that case.) Retrieval of these three rules is what separates a 60-second verification from a 3-minute recomputation.

> **Self-explanation prompt.** Why does comparing sums give the same result as comparing averages when the two categories have equal counts? If you can say "because average = sum ÷ count, and when counts are identical that division is the same operation for both sides — so whichever sum is larger must produce the larger average," you've understood why the trick works and not just how to apply it. This also tells you exactly when it fails: the moment the counts differ, the shortcut is invalid and you must divide.

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

**Micro-drill.** Three cross-category questions using the same table — 2 minutes total:

1. "Among all three departments, which has the highest average salary?" (state all three in ranked order)
2. "Do all Operations employees earn more than the median salary across all employees?"
3. "The total salary paid to Strategy employees exceeds the total salary paid to Finance employees."

Answers: (1) **Operations highest, then Strategy, then Finance.** Strategy: (120+95+150)/3 = 365/3 ≈ $121.7K. Finance: (140+85+115)/3 = 340/3 ≈ $113.3K. Operations: (155+125)/2 = $140K. Counts differ (3 vs 3 vs 2), so divide each — the sum shortcut only applies to direct pairwise comparisons with equal counts. (2) **Yes.** Sort all 8 salaries: 85, 95, 115, 120, 125, 140, 150, 155. Median = (120+125)/2 = $122.5K. Operations: D($155K), F($125K). Both exceed $122.5K. (3) **Yes — use the sum trick.** Equal counts (3 each). Strategy sum: 365. Finance sum: 340. 365 > 340. The question asks about totals, not averages — the sum comparison is the direct answer with no division needed.

**Trap to watch.** "Overlap" mistakes — filtering on the wrong combination. "Finance AND over 30" is different from "Finance OR over 30." Read the statement carefully: "and" means both conditions must hold; "or" means either (or both). Universal quantifier ("all," "every") combined with filters usually means you're checking whether the filtered set satisfies a condition uniformly.

> **Self-explanation prompt.** In the micro-drill ranking question above, why couldn't you use the sum shortcut even though Strategy and Finance each have 3 employees? If you can say "because the three-way ranking also includes Operations which has only 2 employees — and the shortcut only works when the two groups you're directly comparing have equal counts," you've understood the scope of the shortcut precisely. A mixed-count comparison or any three-way ranking requires dividing each sum by its count.

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

**Micro-drill.** Three derived-metric questions using the Employee Demographics table — 2 minutes total:

1. (Ratio) "Employee D has a higher salary-per-year-of-experience ratio than Employee G." Yes or No?
2. (Percent change) "If Employee C received a 20% raise, their new salary would still be less than Employee A's current salary." Yes or No?
3. (Derived category ranking) "Finance employees have a higher average salary-per-year-of-experience than Strategy employees." Yes or No?

Answers: (1) **No.** D: 155 ÷ 12 ≈ $12.9K per year. G: 150 ÷ 10 = $15.0K per year. D < G. The trap: D has the highest raw salary in the table, so it feels like D should win any salary-related comparison. Derived metrics rank differently from their source columns — always recompute, never assume. (2) **Yes.** C after raise: $95K × 1.20 = $114K. A's current salary: $120K. $114K < $120K. The 20% raise adds $19K, bringing C to $114K — still $6K short of A. (3) **Yes.** Salary-per-year ratios — Strategy: A(120÷5=24.0), C(95÷3≈31.7), G(150÷10=15.0); average ≈ 23.6K/year. Finance: B(140÷8=17.5), E(85÷2=42.5), H(115÷6≈19.2); average ≈ 26.4K/year. Finance (26.4) > Strategy (23.6). Note that E — the lowest-paid Finance employee — has the highest individual ratio because of their short tenure; one outlier can shift a category average substantially. If your instinct was to compare raw average salaries (Strategy≈$121.7K vs Finance≈$113.3K, where Strategy wins) and answer No, you just experienced why derived metrics produce different rankings than their underlying columns — which is the point of the first trap below.

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

## @summary

Table Analysis is a mechanical workflow problem. Once you internalize the three-step workflow and recognize the seven statement patterns, every question becomes a 60-second exercise per statement.

**The five Table Analysis habits.**

1. **Identify relevant columns first.** Don't read the whole table; read the statement, then find the 1–2 columns that matter.
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

1. **Easy set — workflow first, speed second.** Seven questions. On every question, write down three things before you compute: which columns are relevant, whether you're sorting or filtering, and which of the seven patterns the statement is. If you answer correctly but skipped this step, you haven't built the habit — the habit is what makes you fast on your tenth Table Analysis question, not your first. Target 100% accuracy; timing is irrelevant on this pass.

2. **Medium set — 60 seconds per statement, 3 minutes per question.** Twenty questions. Set a timer. If you go over 3 minutes on any question, stop, mark it, and note which step caused the overrun: identify (you weren't sure which columns mattered), filter/sort (you tried both instead of committing to one), or verify (you got stuck in arithmetic). After the set, sort your misses by pattern type — if you missed two threshold-count statements and zero rank-check statements, threshold-count is your next focused drill, not more general Table Analysis practice.

3. **Hard set — untimed first pass, then timed.** Eight questions. Hard Table Analysis questions layer operations: filter to a category, compute a derived metric, then compare against a threshold — all in one statement. On the first pass, take as long as you need and write every intermediate number explicitly on scratch paper. On the second pass, target under 3 minutes per question. The gap between your two pass times measures how much speed repetition alone will give you.

4. **Error log.** For each missed question, write one sentence naming the step where you went wrong and one sentence naming what you'd do differently. Tag every miss by failure mode: wrong-column read, sort-vs-filter confusion, derived-metric error, or rounding mistake. The tag that appears most often is your next focused drill — not more general Table Analysis practice, but targeted work on that one failure mode.
