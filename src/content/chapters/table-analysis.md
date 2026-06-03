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

  - id: format-and-mindset
    type: reading
    title: "What Table Analysis is — and the three failure modes to avoid"
    intro: |
      Table Analysis is the most mechanical format in Data Insights. A sortable table, three Yes/No statements, one repeatable workflow. Students who underperform here rarely have a content problem — they have a process problem. This section shows you the format, the cognitive traps, and the mindset shift that makes every question solvable in under three minutes.

  - id: the-three-step-workflow
    type: reading
    title: "The three-step workflow — identify, filter, verify"
    intro: |
      Every Table Analysis question, regardless of difficulty, uses the same three moves. Students who have this workflow internalized answer in 60 seconds per statement. Students without it burn 90 seconds re-reading the table. Across 4–6 TA questions that difference is enough to answer two more questions elsewhere in DI.
    check_question_ids:
      - table-analysis-q13

  - id: sorting-vs-filtering
    type: reading
    title: "Sorting vs. filtering — when to use each"
    intro: |
      The table's sort function is one of two primary tools available to you. Knowing which to reach for — sort or filter — before you start computing saves 15–30 seconds per statement. This section builds the reflex so you never hesitate at that decision again.
    check_question_ids:
      - table-analysis-q22
      - table-analysis-q23

  - id: statement-patterns
    type: reading
    title: "The seven most common Yes/No statement patterns"
    intro: |
      Every Yes/No statement in Table Analysis belongs to one of seven structural patterns. The moment you recognize the pattern, you know exactly what to compute. This section gives you the patterns, a decision framework to identify them in under five seconds, and the specific move for each.
    check_question_ids:
      - table-analysis-q1
      - table-analysis-q2
      - table-analysis-q3

  - id: averages-and-medians
    type: reading
    title: "Averages, medians, and aggregated metrics"
    intro: |
      Statements about averages and medians look computationally heavy. Three shortcuts collapse the work. Learn the sum trick, the deviation check, and the median-from-sort method — and what looked like a 90-second calculation becomes 30 seconds.
    check_question_ids:
      - table-analysis-q14
      - table-analysis-q15

  - id: cross-category-comparisons
    type: reading
    title: "Cross-category comparisons — subsetting and ranking"
    intro: |
      Statements that compare multiple categories require you to track several filtered results simultaneously. The two-pass technique and the habit of writing intermediate values on scratch paper prevent the most common errors here.
    check_question_ids:
      - table-analysis-q17
      - table-analysis-q26

  - id: derived-metrics-and-traps
    type: reading
    title: "Derived metrics and common traps"
    intro: |
      Derived metrics — ratios, percent changes, contribution percentages — are where most Table Analysis points are lost. Each type requires two correct reads and correct arithmetic. This section walks through the most important types with full worked examples and the specific trap hiding in each.
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

## @format-and-mindset

**What you are working with.**

Each Table Analysis question presents a data table — typically 6 to 15 rows, 4 to 8 columns — along with three Yes/No statements. Each statement makes a specific claim about the data. Your job: decide, for each statement independently, whether that claim is supported by the table.

The table is genuinely interactive. On test day you can click any column header to sort ascending or descending. This is not cosmetic — it is a core solving tool. Students who do not use the sort function work significantly harder than those who do.

**How many questions to expect.**

Data Insights contains roughly 20 questions on the GMAT Focus Edition. Table Analysis typically accounts for 4 to 6 of them. That concentration matters: once you have the workflow, you are not solving four novel puzzles — you are running the same disciplined process four to six times.

**The three failure modes.**

Three patterns account for the majority of Table Analysis mistakes.

**Failure mode 1: Reading the table before reading the statement.**

The table is a lookup tool, not a document to read linearly. A student who reads the full table first wastes 30–60 seconds building a mental model that the statement will immediately require them to narrow. The correct sequence is always: read the statement first, then go to the relevant columns.

**Failure mode 2: Mental arithmetic on derived metrics.**

Ratios, percent changes, and contribution percentages require two correct reads from the table plus correct arithmetic. One mis-read of either value corrupts the entire computation. Students who rush these in their heads — instead of writing intermediate values down — lose points they should not lose.

**Failure mode 3: Confirming universal statements after checking two rows.**

"Every company had positive revenue growth" requires checking every company. Checking the first three and answering Yes is how students lose points on questions they fully understood. Universal claims — "every," "all," "no" — are only confirmed after exhaustively checking the relevant set, or finding one counterexample to disprove.

**The right mindset.**

Table Analysis rewards process discipline over raw intelligence. The 685-scorer and the 605-scorer often have comparable quantitative ability. The gap is whether the 685-scorer has a locked-in workflow that prevents all three failure modes above.

Your goal in this chapter: build that workflow and make it reflexive. By the end, you should be able to approach any Table Analysis question — regardless of what the data is about — using the same steps, in the same order, every time.

## @the-three-step-workflow

Every Table Analysis question follows the same three-step pattern. Internalize the workflow and the question becomes mechanical.

**Mental model.** Every TA question has the same three moves: identify the relevant rows, filter or sort, then verify the claim against the result. Skip the filter step and you over-compute on the full table. Skip the verify step and you bubble the trap answer that looks right at a glance. The whole format becomes mechanical once this three-step rhythm is reflexive.

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

Strategy sum: 120+95+150 = 365. Finance sum: 140+85+115 = 340. Strategy sum > Finance sum, and both groups have 3 employees — so Strategy average > Finance average. Skip the division entirely.

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
- Top of list: D, Operations. **Yes.**

**Example (filter then sort).** Statement: "The highest-paid employee in Strategy earns more than the highest-paid employee in Finance."

- Filter to Strategy: A (120), C (95), G (150). Highest: G, 150.
- Filter to Finance: B (140), E (85), H (115). Highest: B, 140.
- 150 > 140. **Yes.**

**Mental sorting for small tables.** If the table has under 10 rows, you can often sort mentally by scanning the column once. For larger tables, click the sort button.

**The "top N" pattern.** Many questions ask about the top (or bottom) 3, 5, or 10 rows after sorting. Sort, take the first N, then apply the filter or metric.

**Example.** Statement: "Of the top three most-experienced employees, at least one earns less than $130K."

- Sort by Years descending: D (12, 155), G (10, 150), B (8, 140).
- Salaries of top three: 155, 150, 140. All > 130. **No.**

**The "what if sorting is ambiguous" problem.** Ties in a sort — two employees with the same years — usually don't matter for the answer. If it does matter (e.g., "the third-most-experienced employee" with a tie for second), the problem is usually set up so ties don't change the answer. Move forward.

**Trap to watch.** Some statements read like sort questions but are actually filter questions. "Is there any employee over 40 who earns less than $120K?" — this is a filter (age > 40 AND salary < 120) plus an existence check (is the filtered set nonempty?). Don't waste time sorting the full table.

## @statement-patterns

Seven statement patterns cover roughly 90% of what you'll see on Table Analysis. Memorize these and you'll recognize the move to make within 5 seconds of reading any statement.

**Pattern identification: how to read the statement and know the move.**

Ask these questions in order when you encounter a new statement:

1. Does it say "every," "all," or "no X satisfies Y"? → **Within-row check or Range check** — you must check all qualifying rows (or find one counterexample to disprove).
2. Does it say "at least one" or "there exists"? → **Existence check** — stop as soon as you find one example.
3. Does it ask "how many rows satisfy X" or use "more than half / fewer than"? → **Threshold count** — filter and count.
4. Does it ask for the highest or lowest value, or which category has the maximum? → **Rank check** — sort and read.
5. Does it compare a metric (average, total) of group A to group B? → **Category comparison** — filter each group and compute.
6. Does it ask whether all values fall within bounds? → **Range check** — find column min and max.
7. Does it link two rankings ("company with highest X also has highest Y")? → **Correlation check** — find the top of one column, check the other.

Once you can identify the pattern within five seconds, you know exactly which tool to reach for.

**Pattern 1: Simple threshold count.**

"More than half of the rows satisfy condition X."

*Move:* filter on X, count, compare to total/2.

**Example.** Statement: "More than half of the companies had Q4 revenue greater than their Q1 revenue by at least 25%." For 5 companies, check each: compute Q4/Q1 ratio, compare to 1.25, count the yes's. If count > 2.5 (i.e., ≥3), **Yes**; else **No**.

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

*Move:* find the top-X row. Check its Y rank. If Y is also top (or bottom, depending on the statement), **Yes**.

**The "statement negation" reflex.** To prove a universal statement ("every," "all," "no") false, find one counterexample. To prove an existential statement ("at least one," "some") true, find one example. Focus your scanning accordingly — you don't have to exhaustively verify every row for existential claims.

**Example.** "Every employee over 30 earns more than $100K." Scan employees over 30. Any earning ≤ 100K? One counterexample disproves.

**Example.** "At least one employee in Finance is older than 40." Scan Finance employees. Any older than 40? One example confirms.

> **Self-explanation prompt.** Why does "every"/"no" require checking every row but "at least one" needs just one example? If you can say "because universal claims fail if a single counterexample exists, while existential claims succeed if a single confirming case exists," you've internalized the asymmetry — and you'll scan tables much faster.

## @averages-and-medians

When statements involve averages or medians across categories, computation can feel daunting on a large table. Three techniques collapse this to under 30 seconds.

**Technique 1: Sum trick (for averages).**

The average is (sum of values) / (count). Comparing averages reduces to comparing sums if counts are equal.

**Example.** Statement: "Average salary of Strategy > average salary of Finance." Strategy has 3 employees, Finance has 3 employees. Compute the two sums — no need to divide. 365 > 340, so Strategy average > Finance average. **Yes.**

When counts differ, still compute sums first, then do the single division.

**Technique 2: Running count for medians.**

The median of an ordered set of n values is at position (n+1)/2 (for odd n) or the average of positions n/2 and n/2+1 (for even n).

**Example.** Sort Salary: 85, 95, 115, 120, 125, 140, 150, 155 (n=8). Median is average of positions 4 and 5: (120+125)/2 = 122.5.

**Technique 3: Scanning for "average above X."**

Sometimes the question is "is the average above X?" without needing the exact average. Shortcut: compute (value − X) for each row and see if the sum is positive. If the sum of deviations is positive, the average is above X.

**Example.** Ages: 32, 38, 28, 42, 26, 35, 40, 33. Is average > 35?

Compute (age − 35) for each: −3, 3, −7, 7, −9, 0, 5, −2. Sum: −6. Sum of deviations is negative, so average is below 35. **No.**

This is often faster than computing the actual average.

**The weighted average template.** Some Table Analysis questions involve weighted averages — each row contributes a "weight" (like a transaction count) and the question asks about an overall average.

**Example.** Region sales: East sold 100 units at $5, West sold 200 at $8. Overall average price: (100×5 + 200×8)/(100+200) = (500+1600)/300 = 2100/300 = $7.

**The "median from a large table" shortcut.** For a sorted table with 50 rows, the median is rows 25–26 averaged. You don't have to compute — just click the sort and read the middle rows.

> **Recall check.** Without looking, state the two ways to compute a median (odd n vs even n). Now state the "sum trick" for comparing averages when counts are equal. (Answers: odd → middle row at position (n+1)/2; even → average of the two middle rows; sum comparison works when counts match because averages differ only by their sums in that case.) Retrieval of these three rules is what separates a 60-second verification from a 3-minute recomputation.

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

**Trap to watch.** "Overlap" mistakes — filtering on the wrong combination. "Finance AND over 30" is different from "Finance OR over 30." Read the statement carefully: "and" means both conditions must hold; "or" means either (or both). A universal quantifier ("all," "every") combined with filters means you're checking whether every member of the filtered set satisfies a condition uniformly.

## @derived-metrics-and-traps

This is where most Table Analysis points are lost. Derived metrics require two correct reads from the table AND correct arithmetic — any error in either step corrupts the answer. Go slower here than anywhere else, write down intermediate values, and sanity-check your result.

**What a derived metric is.**

A derived metric is a value that does not appear in any column but can be computed from two or more existing columns. The four most common types on GMAT Table Analysis:

- **Ratio:** column A ÷ column B (e.g., revenue per employee = Revenue ÷ Headcount)
- **Percent change:** (new value − old value) ÷ old value × 100
- **Contribution percentage:** one row's value ÷ column total × 100
- **Margin:** (Revenue − Cost) ÷ Revenue × 100

**Full worked example: ratio comparison.**

Table:

| Region | Revenue ($K) | Sales Team |
|---|---|---|
| East | 2,400 | 12 |
| West | 3,000 | 18 |
| North | 1,800 | 8 |
| South | 2,100 | 14 |

Statement: "The North region has the highest revenue per sales rep."

- Step 1: Identify metric. Revenue per rep = Revenue ÷ Team.
- Step 2: Compute per row. East: 200. West: 166.7. North: 225. South: 150.
- Step 3: North (225) is highest. **Yes.**

**Shortcut for ratio comparison: cross-multiplication.** Rather than dividing each fraction, compare any two candidates by cross-multiplying. Is 1,800/8 > 2,400/12? Cross-multiply: 1,800 × 12 = 21,600 vs. 2,400 × 8 = 19,200. North wins. No division required. Use this whenever you are comparing exactly two ratio candidates.

**Full worked example: percent change.**

Table:

| Company | Q1 Revenue | Q4 Revenue |
|---|---|---|
| Alpha | 400 | 520 |
| Beta | 250 | 310 |
| Gamma | 600 | 690 |
| Delta | 180 | 225 |

Statement: "More than half of the companies grew by at least 25% from Q1 to Q4."

A 25% increase means Q4 ≥ 1.25 × Q1. Compute 1.25 × Q1 for each company and compare to Q4:

- Alpha: 1.25 × 400 = 500. Q4 = 520 ≥ 500. **Grew ≥ 25%.**
- Beta: 1.25 × 250 = 312.5. Q4 = 310 < 312.5. **Did not.**
- Gamma: 1.25 × 600 = 750. Q4 = 690 < 750. **Did not.**
- Delta: 1.25 × 180 = 225. Q4 = 225 = 225. **Exactly 25% — counts.**

2 of 4 companies grew by at least 25%. "More than half" means more than 2 of 4. Two of four is exactly 50%, not more than 50%. **No.**

The trap: noticing that Alpha and Delta qualify and rushing to answer Yes because "two companies satisfied it." Two of four is exactly half, not more than half.

**Full worked example: contribution percentage.**

Statement: "The Strategy department's payroll accounts for more than 40% of total payroll."

Using the earlier employee table:
- Strategy salaries: 120 + 95 + 150 = 365
- All salaries: 120 + 95 + 150 + 140 + 85 + 115 + 155 + 125 = 985
- Is 365/985 > 0.40? Rephrase: is 365 > 0.40 × 985? 0.40 × 985 = 394. 365 < 394. **No.**

Shortcut: convert the percentage threshold to a dollar amount, then compare sums. No division required.

**Full worked example: multi-step derivation.**

Statement: "The company with the highest revenue-per-employee also has the lowest cost-per-employee."

This requires two derived metrics per row. Compute each column, find the top of one metric, then check whether that same company sits at the bottom of the other. Two passes through the table, two columns written on scratch paper.

**The seven common traps — each with a fix.**

| Trap | What happens | Fix |
|---|---|---|
| Numeric label confusion | "Rank" column has values 1, 2, 3 — you treat them as quantities | Re-read column headers; rank columns are for ordering, not arithmetic |
| Unit mismatch | Revenue in thousands vs millions; you compare across formats | Check units in the column header before every computation |
| Wrong row after filtering | You filter correctly but read values from adjacent rows | Write down the row identifiers before reading values |
| Unchecked universal claim | "Every company..." — you check 2-3 rows and answer Yes | Count the qualifying rows. Confirm you have checked all of them. |
| Percent change denominator | You divide by the new value instead of the old | Percent change = (new − old) ÷ **old**. Old is always the denominator. |
| Dissimilar metric comparison | Revenue of Company A vs profit of Company B | Re-read the statement to confirm both sides measure the same thing |
| Rounding at the boundary | Two values close to the threshold — casual rounding gives the wrong side | When the margin is under 5% of the threshold value, compute exactly |

**The double-check habit.**

After computing a derived metric, spend five seconds asking: "Does this answer make intuitive sense?" A ratio of 0.002 when you expected roughly 200 means a unit error. A percent change of 400% when all others are near 25% means you inverted the formula. This sanity check catches the errors that feel most painful in retrospect — the ones you understood conceptually but executed incorrectly under time pressure.

> **Self-explanation prompt.** What is the conceptual difference between contribution percentage and percent change? If you can say "contribution percentage measures a part-to-whole relationship at a single point in time; percent change measures the same metric against itself across two points in time, using the earlier value as the base," you have internalized the distinction that prevents formula mix-ups under time pressure.

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

1. **Work the problem sets in this chapter** — easy first, then medium, then hard. If your accuracy drops by more than 15% between the easy and medium sets, re-read the section on the pattern type you are missing most.
2. **Tag your mistakes in the error log.** Table Analysis errors almost always fall into one of two categories: process errors (you skipped a step in the workflow) or arithmetic errors (right process, wrong computation). Knowing which tells you exactly where to focus.
3. **Use the Review queue.** Any Table Analysis question you miss will appear in your spaced-retrieval queue within 48 hours. Working through questions with the three-step process is more effective than re-reading this chapter.
4. **Return here before your next mock.** Read the seven-pattern table and the five habits. This five-minute review primes the workflow before you need it under timed conditions.
