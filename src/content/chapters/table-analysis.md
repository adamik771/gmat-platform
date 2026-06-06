---
slug: table-analysis
title: Table Analysis
section: DI
estimated_minutes: 50
prerequisites: []
summary: |
  Table Analysis gives you a sortable data table plus a series of Yes/No statements, and asks whether each statement is true given the data. The test isn't about reading speed — it's about efficiency. You need a repeatable filter-sort-verify discipline that answers each statement in under 60 seconds without re-reading the whole table. Master the three-step workflow, internalize the seven most common statement patterns, and apply the three speed techniques for averages and medians — and every Table Analysis question becomes a mechanical exercise, not a judgment call.

  By the end of this chapter you will: (1) apply the three-step workflow reflexively to any statement; (2) classify a Yes/No statement into one of seven patterns in under five seconds; (3) use sum comparison, the deviation shortcut, and position-based median reading to evaluate aggregate metrics without unnecessary division; and (4) recognize the seven most common Table Analysis traps before they cost you a point.
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
      This is the most important section in the chapter. Students who skip it — or read it passively — answer Table Analysis statements by scanning the whole table each time, which is slow and error-prone. Students who internalize the three-step rhythm answer every statement in under 60 seconds without reading a single row they don't need. The micro-drill at the end of this section will tell you whether you've actually absorbed it or just recognized it.
    check_question_ids:
      - table-analysis-q13

  - id: sorting-vs-filtering
    type: reading
    title: "Sorting vs. filtering — when to use each"
    intro: |
      The GMAT's Table Analysis interface lets you sort any column — and most students use it far less than they should. Sorting is the fastest way to answer rank-based statements; filtering is the fastest way to handle subset-based statements. Using the wrong tool adds 20-30 seconds per statement. This section gives you a five-second classification rule and a set of statements to apply it immediately.
    check_question_ids:
      - table-analysis-q22
      - table-analysis-q23

  - id: statement-patterns
    type: reading
    title: "The seven most common Yes/No statement patterns"
    intro: |
      Roughly 90% of Yes/No statements belong to seven patterns. Once you can classify a statement in five seconds, the method to answer it is automatic. The other 10% are combinations of these seven — and once you know them individually, compound cases are just two-step versions of patterns you already own. This section also covers the statement-negation reflex, which tells you whether you need a single confirming example or an exhaustive scan.
    check_question_ids:
      - table-analysis-q16
      - table-analysis-q18
      - table-analysis-q25

  - id: averages-and-medians
    type: reading
    title: "Averages, medians, and aggregated metrics"
    intro: |
      Average and median statements are where students lose the most time on Table Analysis — not because the math is hard, but because they compute full divisions when a faster check would suffice. Three techniques cut per-statement time from 60 seconds to under 30. If you leave this section with one thing, make it the sum comparison: it eliminates the most common "I divided when I didn't have to" mistake.
    check_question_ids:
      - table-analysis-q14
      - table-analysis-q15

  - id: cross-category-comparisons
    type: reading
    title: "Cross-category comparisons — subsetting and ranking"
    intro: |
      Multi-category statements require comparing numbers you computed yourself — not numbers printed in the table. The single biggest error students make here is accidentally reading rows from the wrong category when going back for a second comparison. The two-pass technique in this section solves that by keeping category computations separated and written down before any comparison is made.
    check_question_ids:
      - table-analysis-q17
      - table-analysis-q26

  - id: derived-metrics-and-traps
    type: reading
    title: "Derived metrics and common traps"
    intro: |
      Derived metrics — percentages, ratios, per-unit figures — appear in the hardest Table Analysis statements. They require two pieces of information per row combined correctly; a mis-read of either piece corrupts the whole comparison. This section covers the five most common derived-metric types and the seven traps the test places around them. At least two of those traps appear in nearly every Table Analysis set at the medium-hard level.
    check_question_ids:
      - table-analysis-q36
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
      - table-analysis-q36
      - table-analysis-q37
      - table-analysis-q38
  hard:
    target_accuracy_by_score:
      "605": 25
      "645": 40
      "685": 60
      "725": 80
    question_ids:
      - table-analysis-q19
      - table-analysis-q20
      - table-analysis-q33
      - table-analysis-q34
      - table-analysis-q35
      - table-analysis-q40
      - table-analysis-q48
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

> **Recall check.** Close the book. State the three-step Table Analysis workflow. Now state the time budget for each step. (Step 1 identify, Step 2 filter/sort, Step 3 verify. Budget: 5 + 15 + 30 = 60 seconds.) Pattern-drill this three-step until it's reflexive — that's what makes you fast on Table Analysis.

**Micro-drill.** Apply the three-step workflow to each statement below — write out all three steps before computing, even for the easy ones. The habit only forms if you practice it, not just read it. Budget: 90 seconds per statement.

Table (Tech Startup Revenue):

| Company | Sector | Q1 Rev ($M) | Q4 Rev ($M) | Headcount | Gross Margin |
|---|---|---|---|---|---|
| Altera | SaaS | 12 | 18 | 80 | 72% |
| Brova | Hardware | 20 | 16 | 120 | 38% |
| Citrus | SaaS | 8 | 15 | 55 | 68% |
| Delphi | Hardware | 25 | 30 | 150 | 42% |
| Esper | SaaS | 14 | 21 | 90 | 75% |
| Fenix | Hardware | 18 | 17 | 100 | 35% |

1. More than half of the companies grew revenue from Q1 to Q4.
2. The company with the highest gross margin is in the SaaS sector.
3. The average Q4 revenue of SaaS companies exceeds that of Hardware companies.

Answers: (1) **Yes** — Step 1: Q1 Rev and Q4 Rev columns. Step 2: compare each row. Growth: Altera 18>12 ✓, Brova 16<20 ✗, Citrus 15>8 ✓, Delphi 30>25 ✓, Esper 21>14 ✓, Fenix 17<18 ✗. Count: 4 of 6. 4 > 3 (half of 6). (2) **Yes** — Step 1: Gross Margin and Sector columns. Step 2: sort Gross Margin descending. Top row: Esper, 75%, SaaS. Statement confirmed. (3) **No** — Step 1: Sector and Q4 Rev columns. Step 2: filter by Sector. SaaS Q4 sum: 18+15+21 = 54. Hardware Q4 sum: 16+30+17 = 63. Equal counts of 3 each — compare sums directly. 54 < 63. Hardware average exceeds SaaS. Statement is false. If you said Yes, you may have compared a single company's Q4 rather than computing category averages.

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

**Micro-drill — sort or filter?** Using the Tech Startup table from the previous section, classify each statement as sort, filter, or both — before computing. 60 seconds total.

1. "The highest-revenue company in Q4 is in the Hardware sector."
2. "All SaaS companies have gross margins above 65%."
3. "The company with the second-lowest headcount grew revenue from Q1 to Q4."
4. "Is there any Hardware company with Q4 revenue under $18M and headcount over 100?"

Answers: (1) **Sort** — sort Q4 descending; top row: Delphi, Hardware. Yes. (2) **Filter** — filter to SaaS (Altera 72%, Citrus 68%, Esper 75%). Lowest is 68% > 65%. Yes. (3) **Sort then check** — sort headcount ascending: 55 (Citrus), 80 (Altera), 90 (Esper)... Second-lowest headcount = Altera (80). Altera Q4 18 > Q1 12. Yes. (4) **Filter** — filter Hardware AND Q4 < 18 AND headcount > 100. Brova: Q4=16 < 18 ✓, headcount=120 > 100 ✓. Exists. Yes. Students who sort by Q4 for statement 4 scan more rows than they need — filtering to Hardware first shrinks the problem immediately.

> **Self-explanation prompt.** When does sorting save time and when does filtering save time? If you can say "sorting is fastest when the statement asks about rank — highest, lowest, nth — while filtering is fastest when the statement asks about a defined subset," you have the classification rule. The trap is defaulting to one tool for everything; neither is universally faster.

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

> **Self-explanation prompt.** Why does "every"/"no" require checking every row but "at least one" needs just one example? If you can say "because universal claims fail if a single counterexample exists, while existential claims succeed if a single confirming case exists," you've internalized the asymmetry — and you'll scan tables much faster.

> **Recall check.** Cover this section. Without looking, list all seven pattern names and state the move for each. (Answers: 1. Threshold count → filter, count, compare to half. 2. Rank check → sort, read top/bottom, verify category. 3. Category comparison → filter each category, compute metric, compare. 4. Within-row derivation → compare two columns row by row. 5. Existence check → filter on conjunction, check nonempty. 6. Range check → find min/max, check bounds. 7. Correlation/trend check → find top/bottom of one column, check other column's rank.) If you reproduced all seven, you're ready for the problem sets. If any pattern was missing, re-read its definition once, close the page, and re-test before moving on.

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

Sometimes the question is "is the average above X?" without needing the exact average. Shortcut: compute (value − X) for each row and see if the sum is positive. If the sum of deviations is positive, the average is above X.

**Example.** Ages: 32, 38, 28, 42, 26, 35, 40, 33. Is average > 35?

Compute (age − 35) for each: −3, 3, −7, 7, −9, 0, 5, −2. Sum: −3+3−7+7−9+0+5−2 = −6. Sum of deviations is negative, so average is below 35. **No.**

This is often faster than computing the actual average.

**The weighted average template.** Some Table Analysis questions involve weighted averages — each row contributes a "weight" (like a transaction count) and the question asks about an overall average.

**Example.** Region sales: East sold 100 units at $5, West sold 200 at $8. Overall average price: (100×5 + 200×8)/(100+200) = (500+1600)/300 = 2100/300 = $7.

**The "median from a large table" shortcut.** For a sorted table with 50 rows, the median is rows 25-26 averaged. You don't have to compute — just click the sort and read the middle rows.

> **Recall check.** Without looking, state the two ways to compute a median (odd n vs even n). Now state the sum trick for comparing averages when counts are equal. (Answers: odd → middle row at position (n+1)/2; even → average of the two middle rows; sum comparison works when counts match because averages differ only by their sums in that case.) Retrieval of these three rules is what separates a 60-second verification from a 3-minute recomputation.

**Micro-drill.** Using the Tech Startup table, apply the right technique for each — 45 seconds each. Do not compute more than the technique requires.

1. Is the average headcount across all six companies greater than 100?
2. What is the median Q1 revenue across all six companies?
3. Is the average gross margin of SaaS companies greater than 70%?

Answers: (1) **No** — Use the deviation shortcut. Deviations from 100: 80−100=−20, 120−100=+20, 55−100=−45, 150−100=+50, 90−100=−10, 100−100=0. Sum: −20+20−45+50−10+0 = −5. Negative sum means average is below 100. (2) **$16M** — Sort Q1 ascending: 8, 12, 14, 18, 20, 25. n=6 (even). Median = average of 3rd and 4th values = (14+18)/2 = 16. (3) **Yes** — SaaS companies: Altera 72%, Citrus 68%, Esper 75%. Sum = 215. Equal count of 3 — compare sum to 3×70 = 210. 215 > 210, so average > 70%. No division required. If you divided 215 by 3 to get 71.7% before comparing, that's valid but slower — the sum comparison skips the arithmetic.

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

**Micro-drill.** Using the Tech Startup table, work this statement from scratch — use the two-pass technique and write down each sector's result before making any comparison. Two minutes maximum.

Statement: "Among the two sectors, the sector with higher total Q4 revenue also has the higher average gross margin."

Pass 1: two sectors — SaaS and Hardware.
Pass 2: compute both metrics for each sector, written down:

- SaaS Q4 total: 18+15+21 = 54 ($M). SaaS gross margins: 72%, 68%, 75%. Sum = 215; equal count of 3; avg = 215/3 ≈ 71.7%.
- Hardware Q4 total: 16+30+17 = 63 ($M). Hardware gross margins: 38%, 42%, 35%. Sum = 115; equal count of 3; avg = 115/3 ≈ 38.3%.

Hardware has higher total Q4 revenue (63 > 54). But Hardware has lower average gross margin (38.3% < 71.7%). The statement claims both metrics go to the same sector — they don't. **No.**

The trap: high revenue does not imply high margin. The statement tests whether you check both metrics independently or assume they move together.

> **Self-explanation prompt.** Why does the two-pass technique require writing down each category's result before comparing? If you can say "because once you switch from computing category A to computing category B, you will misremember category A's exact number unless it's written down — and a single misread corrupts the comparison," you've identified the mechanical reason the habit matters. This is not about skill; it's about managing the limits of working memory under time pressure.

> **Recall check.** State the two-pass technique from memory. (Pass 1: identify all categories named in the statement. Pass 2: for each category, filter and compute the required metric, writing it down.) Now name the cross-category trap. (Two metrics don't necessarily rank in the same order across categories — always compute both before concluding which sector "wins.")

## @derived-metrics-and-traps

Some statements require computing a *new* metric from the table columns — a ratio, a percentage, a per-unit value. These are the most arithmetic-heavy Table Analysis questions, and where most errors happen.

**Derived metric: ratio (column A / column B).**

**Example.** Table: Sales, Visitors. Statement: "The region with the highest conversion rate is East."

Conversion rate = Sales / Visitors. Compute per row, compare.

**Derived metric: percent change over time.**

**Example.** Columns Q1 and Q4. Statement: "More than half of companies grew by at least 25% from Q1 to Q4."

For each row: % change = (Q4 − Q1)/Q1 × 100. Count rows where this ≥ 25. Compare count to half the total.

**Derived metric: per-unit metric.**

**Example.** Columns Revenue, Employees. Statement: "Revenue per employee is highest at Company D."

Compute Revenue/Employees per row, sort, check top.

**The "multi-step derivation" pattern.** Some questions require two layers of computation. E.g., "The company with the highest revenue-per-employee also has the lowest cost-per-employee." Compute two ratios per row, then check ranks.

**Common traps on Table Analysis.**

1. **The "numeric label" trap.** Columns sometimes have numeric-looking labels (e.g., "Rank" 1, 2, 3...). Don't confuse a rank column with the metric being ranked.

2. **The "currency vs. units" trap.** Revenue in thousands vs millions; prices in dollars vs cents. Always check units in the column header.

3. **The "row label confusion" trap.** When filtering, double-check you're reading the values from the right rows. Especially easy to slip when scrolling a long table.

4. **The "statement says 'each' or 'every' but you only checked one row"** trap. Universal claims require checking all rows (or finding a counterexample to disprove). Don't answer Yes just because the first few rows satisfy the statement.

5. **The "percentage change denominator" trap.** % change = (new − old)/**old**, not (new − old)/new. A common source of close-but-wrong answers.

6. **The "comparing dissimilar metrics" trap.** If one column is revenue and another is profit, comparing them directly is valid but unusual — re-read carefully to confirm what the statement is actually claiming.

7. **The "rounding matters" trap.** If answer choices are close (e.g., 25% vs 24.9%), compute exactly — do not round mid-calculation.

**The "does this even matter?" sanity check.** Before committing to a computation, ask: "Is there a pattern I'm missing?" Some questions are designed to be obvious once you spot the pattern — e.g., "every value in row X is larger than every value in row Y" (no arithmetic needed, just visual scan). Always look for the easy path before doing arithmetic.

> **Self-explanation prompt.** Why are derived metrics the most error-prone? If you can say "because they require two pieces of information per row combined correctly, and one mis-read of either piece corrupts the entire comparison," you've identified why these questions demand extra care — and why writing intermediate values down beats trying to do them in your head.

**Micro-drill.** Using the Tech Startup table, compute each derived metric and answer Yes or No. Work at test pace — no more than 90 seconds each.

1. Citrus had the highest percentage revenue growth from Q1 to Q4 of any company.
2. Revenue per employee in Q4 (Q4 Rev ÷ Headcount) is highest at Esper.
3. Gross profit in Q4 (Q4 Rev × Gross Margin) is highest at Delphi.

Answers: (1) **Yes** — Percentage growth = (Q4 − Q1)/Q1. Altera: 6/12 = 50%. Brova: −4/20 = −20%. Citrus: 7/8 = 87.5%. Delphi: 5/25 = 20%. Esper: 7/14 = 50%. Fenix: −1/18 ≈ −6%. Citrus 87.5% is highest. Trap: if you used (Q4−Q1)/Q4 for any company, you used the wrong denominator — percent change is always over the base period (Q1), not the final period. (2) **No** — Q4 revenue ÷ headcount: Altera 18/80 = 0.225, Brova 16/120 ≈ 0.133, Citrus 15/55 ≈ 0.273, Delphi 30/150 = 0.200, Esper 21/90 ≈ 0.233, Fenix 17/100 = 0.170. Highest is Citrus (0.273), not Esper (0.233). Trap: Esper has the highest gross margin in the table — that's a distractor. Revenue per employee is a separate derived metric; never assume two rankings move together. (3) **No** — Gross profit = Q4 revenue × gross margin. Altera: 18×0.72 = 12.96. Brova: 16×0.38 = 6.08. Citrus: 15×0.68 = 10.20. Delphi: 30×0.42 = 12.60. Esper: 21×0.75 = 15.75. Fenix: 17×0.35 = 5.95. Highest is Esper (15.75), not Delphi (12.60). Trap: Delphi has the highest Q4 revenue — but revenue and gross profit rank differently when margins vary. High revenue at low margin loses to moderate revenue at high margin.

## @summary

Table Analysis is a mechanical workflow problem. Once you internalize the three-step workflow and recognize the seven statement patterns, every question becomes a 60-second exercise per statement.

**The five Table Analysis habits.**

1. **Identify relevant columns first.** Don't read the whole table; read the statement, then find the 1-2 columns that matter.
2. **Choose sort or filter based on the statement.** Sort for ranks and extremes; filter for subsets.
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

1. **Easy set immediately.** The Easy questions test whether the three-step workflow is reflexive. If any statement takes more than 90 seconds, the gap is the workflow itself — re-read the first section and re-do its recall check before advancing. Do not proceed to Medium until Easy feels mechanical, not effortful.

2. **Medium set: classify before computing.** Before any computation, name the pattern (one of the seven). If you can't, re-read the patterns section. Pattern misclassification is the most common source of medium-difficulty errors — it causes unnecessary computation rather than wrong computation, and the distinction matters for time management.

3. **If average/median statements slow you down:** return to the Averages and Medians section and practice all three techniques (sum comparison, deviation shortcut, position-based median) on five questions before moving to Hard. These are skills, not insights — they get faster with repetition.

4. **Hard set: derived metrics and compound filters.** The Hard questions combine multiple patterns — filter to a subset, then compute a derived ratio per row, then determine a rank. Work each one with the two-pass technique written out on scratch paper. Under time pressure, students skip the write-down step first — and that's exactly when the row-confusion error happens.

5. **Error log discipline.** For every wrong answer, identify two things: the pattern (which of the seven?) and the specific error (wrong denominator, filter confusion, reversed comparison, unit mismatch). Two wrong answers in the same pattern signals a conceptual gap; the same execution error across multiple patterns signals a habit to fix. One tag per wrong answer, one week of tagging — and you will know exactly where to drill.
