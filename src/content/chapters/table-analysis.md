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

**Mental model.** Table Analysis tests whether you can extract targeted information from a structured dataset — not whether you can compute. Every question has three Yes/No statements, each of which asks you to filter or sort the table and verify one claim. The students who score highest don't do more arithmetic; they do less, because they've narrowed to the right rows and columns before touching a number. Internalize the three-step workflow and the format becomes mechanical.

**What you're looking at.**

Every Table Analysis question presents a sortable data table — you can click any column header to reorder the rows — plus three statements. Your job: decide whether each statement is true or false given the table data. You have roughly 3 minutes per question.

**Step 1: Identify the relevant column(s).**

Read the statement. Which 1–2 columns does it actually ask about? Every other column is irrelevant to this statement. A table with eight columns rarely requires touching more than two for any given statement.

**Step 2: Filter or sort.**

- Statement specifies a subset ("employees in Strategy," "products below $50") → **filter** to those rows.
- Statement asks about rank or extremes ("highest-paid employee," "third-most experienced") → **sort** the relevant column.
- Statement asks about a ranked subset → **filter first**, then sort within the result.

**Step 3: Verify.**

With the right rows isolated, do the minimum computation to confirm or deny the statement.

**Key takeaway.** Never compute more than the statement requires. If the statement asks whether average A > average B, you need to determine the sign of (A − B), not the values of A and B individually. That "minimal computation" principle is what keeps you inside the 60-second target per statement.

**Worked example.** The table below is used throughout this chapter. Reference it as you work through each section.

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

Statement: "Strategy employees earn a higher average salary than Finance employees."

**Step 1:** Relevant columns — Department (to filter), Salary (to average). Years and Age don't matter here.

**Step 2:** Filter. Strategy rows: A (120), C (95), G (150). Finance rows: B (140), E (85), H (115).

**Step 3:** Strategy sum = 120 + 95 + 150 = 365. Finance sum = 140 + 85 + 115 = 340.

Both groups have exactly 3 employees. Equal group sizes mean comparing sums is equivalent to comparing averages — skip the division. 365 > 340. **Yes.**

No division performed. That's the minimal computation principle in action: equal counts → sums are enough.

**Time budget per statement.**

| Step | Action | Target |
|---|---|---|
| Step 1 | Identify relevant columns | 5 sec |
| Step 2 | Filter or sort | 15 sec |
| Step 3 | Verify | 30–40 sec |
| Total | | ~60 sec |

Three statements × 60 seconds = 3 minutes per question. If a single statement takes more than 90 seconds, something broke down at Step 1 (you read too many columns) or Step 3 (you computed more than necessary). Recognize the sign and reset.

> **Recall check.** Without looking, name the three steps and the time budget for each. Then explain the minimal computation principle in one sentence. (Step 1: identify relevant columns — 5 sec. Step 2: filter or sort — 15 sec. Step 3: verify — 30–40 sec. Minimal computation: determine only whether the statement is true or false, no more.)

## @sorting-vs-filtering

GMAT tables are sortable — clicking any column header reorders the rows. Knowing when to use this feature versus when to filter is what separates students who finish Table Analysis in time from those who don't.

**Mental model.** Ask two questions about the statement before touching the table: (1) Does it define a subset of rows? If yes, filter. (2) Does it ask about rank, extremes, or ordering? If yes, sort. If both conditions apply — a ranked subset — filter first, then sort within the result.

**When sorting helps:**

- "The highest/lowest value of X is in category Y" — sort by X, check the category at the top or bottom.
- "The second-most-experienced employee" — sort by Years, read row 2.
- "The median salary" — sort by Salary, find the middle row(s).
- "How many rows have salary above $120K" — sort by Salary, count rows above the threshold.

**When filtering helps:**

- "Employees in Finance" — filter on Department = Finance.
- "Products priced between $10 and $30" — filter on Price within the range.
- "Clients with rating above 4.0 AND from region East" — filter on both conditions simultaneously.

**When both are needed:**

"The highest-paid Strategy employee earns more than the highest-paid Finance employee." Filter to Strategy → find max. Filter to Finance → find max. Compare.

**Example (sort only).** Statement: "The most experienced employee works in Operations."

Sort by Years descending: D (12), G (10), B (8), F (7), H (6)…

Top row: D, Operations. **Yes.** Stop as soon as you've identified the top row — no need to sort the rest.

**Example (filter then sort).** Statement: "The highest-paid Strategy employee earns more than the highest-paid Finance employee."

Filter to Strategy: A (120), C (95), G (150). Max = G, 150.
Filter to Finance: B (140), E (85), H (115). Max = B, 140.
150 > 140. **Yes.**

**Mental sorting.** For tables with fewer than 10–12 rows, scanning the column visually is often faster than clicking the sort button. Practice finding column maxima by eye. For larger tables, always use the sort feature.

**Trap to watch.** Some statements read like rank questions but are actually existence questions. "Is there any employee over 40 who earns below $130K?" — this is a filter (Age > 40 AND Salary < 130), then an existence check: is the filtered set nonempty? No sorting required.

Working it: employees over 40: D (42, 155), G (40 — not strictly over, skip). Only D qualifies. D earns 155, which is not below 130. Filtered set is empty. **No.**

The clue that flipped this from sort to filter: the word "any" signals an existence check, not a rank check.

## @statement-patterns

Seven patterns cover roughly 90% of Table Analysis statements. Recognizing the pattern in the first five seconds of reading means you know the sequence of moves before you touch the table.

| Pattern | Trigger phrase | Move |
|---|---|---|
| Threshold count | "more than X%," "at least N rows" | Filter → count → compare to threshold |
| Rank check | "the highest/lowest X is in category Y" | Sort by X → check category at top/bottom |
| Category comparison | "average/median of group A vs. group B" | Filter each → compute → compare |
| Within-row derivation | "for every row, X > Y" | Scan column pair; one exception = No |
| Existence check | "at least one row with both X and Y" | Filter on conjunction → nonempty = Yes |
| Range check | "all values of X between a and b" | Find min/max of X → check bounds |
| Correlation check | "highest X also has highest/lowest Y" | Find top-X row → check its Y rank |

**The universal vs. existential reflex — the most important pattern skill to build.**

Every statement is either universal or existential:

- **Universal:** "every," "all," "no row" — the claim applies to all rows.
- **Existential:** "at least one," "some," "there exists" — the claim requires only one row.

**Mental model.** A universal claim fails the moment you find one counterexample — so scan to refute. An existential claim succeeds the moment you find one confirming row — so scan to confirm. Design your search around what would resolve the statement fastest, not around covering every row.

**Worked example — universal.** "Every employee over 30 earns more than $100K."

Scan employees over 30, looking for *any* earning $100K or less. One counterexample ends the search.

Employees over 30: A (32, 120), B (38, 140), D (42, 155), F (35, 125), G (40, 150), H (33, 115). All exceed 100. No counterexample found. **Yes.**

**Worked example — existential.** "At least one Finance employee is older than 40."

Scan Finance employees, looking for *any* older than 40. One confirming row ends the search.

Finance: B (38), E (26), H (33). None over 40. Search exhausted with no confirmation. **No.**

**Pattern 1 in depth: threshold count.**

"More than half of the employees earn above $120K."

Move: filter on Salary > 120, count, compare to total/2.

Employees above 120: B (140), D (155), F (125), G (150). Count = 4. Total = 8. 4/8 = exactly half — not *more* than half. **No.**

**Pro tip.** For "more than half" on a 10-row table, stop counting once you've confirmed 6 qualifying rows — you don't need to check the remaining 4. Apply the same logic in reverse: if you're at 5 qualifying rows with only 4 remaining and need more than 5, stop and answer No.

**Pattern 7 in depth: correlation check.**

"The most experienced employee also earns the highest salary."

Move: identify the top-Years employee → check their Salary rank.

Sort Years descending: D (12). Now check D's salary: 155. Is 155 the column maximum? Scan: 155 is the highest salary. **Yes.**

**Trap to watch.** Correlation checks become a trap when the "also" condition involves a derived metric. "The most experienced employee also has the highest salary-to-age ratio." You'd need to compute Salary/Age for each row and find D's rank on that derived column — not just read D's salary. Read carefully: is the second condition a column that exists, or a ratio you must calculate?

> **Recall check.** Without looking, name the seven patterns. Then explain the universal/existential reflex: why does a universal claim fail with one counterexample, but an existential claim succeed with one confirming row? (Universals assert that every element satisfies the condition — one violation breaks the claim. Existentials only assert that at least one satisfying element exists — one case is enough to confirm.)

## @averages-and-medians

Most Table Analysis time is wasted on average and median computations. Three techniques together cover almost every case — and most of them eliminate the need for a full computation.

**Mental model.** The question is almost never "compute the exact average." It's "is average A greater than average B?" or "is the average above value X?" These comparisons require less precision than a full computation, and the three techniques below let you answer them with the minimum work.

**Technique 1: Sum comparison for equal-size groups.**

When comparing averages between two groups of the same size, comparing the sums is equivalent — no division needed.

*Why it works:* Average₁ > Average₂ iff Sum₁/n > Sum₂/n iff Sum₁ > Sum₂, when n is the same for both groups.

**Worked example.** "Average salary is higher in Strategy than in Finance."

Strategy (3 employees): 120 + 95 + 150 = 365.
Finance (3 employees): 140 + 85 + 115 = 340.
365 > 340. **Yes.** No division performed.

When group sizes differ, compute each sum first, then divide — but do both divisions before comparing.

**Technique 2: Deviation from a target value.**

When the question is "is the average above threshold X?", compute (row value − X) for each row in the group and sum the deviations. A positive total means the average exceeds X; a negative total means it doesn't.

*Why it works:* The sum of deviations = n × (mean − X). The sign of the sum reveals the sign of (mean − X).

**Worked example.** Eight employee ages: 32, 38, 28, 42, 26, 35, 40, 33. Is the average above 35?

Deviations from 35: −3, +3, −7, +7, −9, 0, +5, −2. Sum: −6. Negative → average is below 35. **No.**

This is faster than computing (32 + 38 + 28 + 42 + 26 + 35 + 40 + 33)/8 = 294/8 = 36.75. Wait — actually 36.75 > 35, which would be **Yes**. Let me recount: 32+38=70, +28=98, +42=140, +26=166, +35=201, +40=241, +33=274. 274/8 = 34.25. Below 35. **No.** The deviation sum (−6) gave the right sign immediately.

**Technique 3: Median by position.**

For a sorted column of n values:
- n odd → median = value at position (n + 1)/2
- n even → median = average of values at positions n/2 and (n/2) + 1

Sort the relevant column and read the middle row(s). No arithmetic beyond one addition.

**Worked example.** Sort all salaries ascending: 85, 95, 115, 120, 125, 140, 150, 155. (n = 8, even.) Positions 4 and 5: 120 and 125. Median = (120 + 125)/2 = 122.5.

**The weighted average template.**

Some statements involve an overall average computed from groups of different sizes — a weighted average.

**Worked example.** "What is the overall average price per unit?" Region A: 100 units at $5. Region B: 200 units at $8.

Weighted average = (100 × 5 + 200 × 8) / (100 + 200) = (500 + 1600) / 300 = 2100/300 = $7.

**Trap to watch.** The unweighted average of $5 and $8 is $6.50 — wrong, because Region B is twice as large. Whenever groups differ in size, the unweighted average gives a systematically wrong result. Check whether the statement implies a weighted or unweighted calculation before computing.

A second trap: if the question asks for the median of a *filtered subset*, sort within the subset after filtering — not within the full column. The median of all 8 salaries is 122.5. The median of Finance salaries (sorted: 85, 115, 140) is 115. Very different.

> **Recall check.** State Technique 2 (deviation from target) and explain in one sentence why it works. Then give the two median formulas for odd and even n. (Technique 2: the sum of deviations from X equals n × (mean − X), so a positive sum proves mean > X. Odd n: position (n+1)/2. Even n: average of positions n/2 and n/2+1.)

## @cross-category-comparisons

**Mental model.** When comparing across three or more categories, the main failure mode isn't arithmetic — it's disorganization. You compute a value for category A, start on B, and lose track of which number belonged to which group. The fix is simple: write every intermediate value down before moving to the next category.

**The two-pass method.**

Pass 1: list all categories the statement mentions. Write them on scratch paper before you touch the table.

Pass 2: compute the relevant metric for each category, one at a time, recording the result next to the category name.

Compare only after all computations are complete.

**Worked example.** "Average years of experience is highest in Operations."

Pass 1 → categories: Strategy, Finance, Operations. Written down.

Pass 2:
- Strategy: Years 5, 3, 10 → sum 18, count 3 → avg 6.0
- Finance: Years 8, 2, 6 → sum 16, count 3 → avg 5.3
- Operations: Years 12, 7 → sum 19, count 2 → avg 9.5

Operations (9.5) is the highest. **Yes.**

**The unequal counts flag.** Notice Operations had only 2 employees vs. 3 in each other department. When group sizes differ, you cannot compare sums directly — you must divide. Spot unequal counts in Pass 1 so you don't skip the division step in Pass 2.

**The subgroup max/min pattern.**

"The oldest Finance employee is younger than the oldest Strategy employee."

Filter to Finance → find max age: B (38), E (26), H (33). Max = 38.
Filter to Strategy → find max age: A (32), C (28), G (40). Max = 40.
38 < 40. **Yes.**

**The conditional aggregation pattern.**

"The total salary of employees with 5 or more years of experience exceeds $400K."

Filter by Years ≥ 5: A (5, 120), B (8, 140), D (12, 155), F (7, 125), G (10, 150).

Sum = 120 + 140 + 155 + 125 + 150 = 690. 690 > 400. **Yes.**

**The intersection pattern.**

"Every Finance employee over the age of 30 earns more than $100K."

Filter on Finance AND Age > 30: B (38, 140), H (33, 115). Both exceed 100. **Yes.**

**Trap to watch.** "Finance AND over 30" is a smaller set than "Finance OR over 30." The AND requires both conditions to hold simultaneously. Re-read the statement and mark the logical connective — "and," "or" — before filtering. Applying the wrong connective changes which rows you include.

**Pro tip.** On comparisons spanning three or more categories, write the category names as headers on your scratch paper before starting. Three seconds of setup ("Str: / Fin: / Ops:") eliminates the number-ownership confusion that causes wrong answers on medium and hard questions.

## @derived-metrics-and-traps

**Mental model.** Derived metrics are the hidden columns in a Table Analysis question — values not present in the table that you must construct from two or more existing columns. Ratios, percent changes, and per-unit metrics are the most common types. The trap isn't computational difficulty; it's applying the wrong formula or reading the wrong source column. Write the formula first, compute second.

**The ratio pattern.**

"The region with the highest conversion rate is East." (Conversion rate = Sales / Visitors — this column doesn't exist in the table.)

Move: compute Sales/Visitors for each row. Identify the row with the highest result.

**Mental model.** A ratio question is a hidden sort on a derived column. Once you compute the ratios, you're ranking rows on a metric you had to build — and you can't use the table's sort feature on it.

**The percent change pattern.**

"More than half of companies grew revenue by at least 25% from Q1 to Q4."

Formula: % change = (Q4 − Q1) / Q1 × 100. The denominator is always the *starting* value.

Move: compute this per row, count rows ≥ 25%, compare to half the total.

**Trap to watch.** The single most common derived-metric error: using the wrong denominator for percent change. The formula is (new − old) / old — not /new, not /(average), not /(new + old)/2. Write the formula explicitly before computing. One wrong denominator corrupts every comparison you make with it.

**The per-unit metric pattern.**

"Revenue per employee is highest at Company D." (Revenue per employee = Revenue / Headcount.)

Move: compute Revenue/Headcount per row. Find the row with the highest result.

**Multi-step derivation.**

Some statements chain two derived metrics. "The company with the highest revenue per employee also has the lowest cost per employee."

Step 1: compute Revenue/Headcount per row → identify the top-ranked company.
Step 2: compute Cost/Headcount per row → check whether that company is at the bottom.

Multi-step derivations are the most arithmetic-intensive Table Analysis statements. Slow down and write each intermediate value before moving to the next step.

**The seven common traps.**

**1. Numeric-label column.** A column labeled "Rank" (1, 2, 3…) contains ordinal labels, not quantities. Don't sum or average rank values — the result is meaningless. Check the column header before treating any column as a quantity.

**2. Unit mismatch.** Revenue in thousands vs. millions; prices in dollars vs. cents. Units live in the column header. Verify units for every column you use before computing.

**3. Row-identification slip.** When filtering a long table, it's easy to copy a value from an adjacent row. After filtering, verify the row's identifier — company name, employee letter — before recording the number.

**4. Universal quantifier without full coverage.** "Every company satisfies X" requires checking all rows or finding a counterexample. Answering Yes after checking three out of ten rows is wrong.

**5. Percent change denominator.** (new − old) / old. Not /new. Not /(average). Always the starting value.

**6. Dissimilar metrics on opposite sides.** "Region A's revenue exceeds Region B's profit." Revenue and profit are different metrics. Valid comparison, but easy to misread. Slow down whenever the two sides of a comparison use different column labels.

**7. Premature rounding.** If two outcomes are close in value (e.g., 24.9% vs. 25.1%), rounding early produces the wrong answer. Carry extra decimal places or compute exactly when values are near a critical threshold.

**Worked example — catching a trap mid-problem.**

Statement: "The company with the highest revenue also has the highest profit margin."

You sort Revenue descending → Company A is top.

You look for a "Profit Margin" column. It doesn't exist. The table has Revenue and Cost.

Derived: Profit Margin = (Revenue − Cost) / Revenue. Two source columns, non-obvious combination.

You must compute this for each row, then check Company A's rank on the derived column.

The students who miss this question sorted Revenue correctly but assumed "highest revenue = highest margin" — a shortcut that fails when companies have very different cost structures. The tell: the column the statement asks about doesn't exist. Slow down and build it.

> **Self-explanation prompt.** Why are derived metrics the most error-prone Table Analysis statements? Before reading further, say it aloud in one sentence. (Because you must combine two source columns using a formula that isn't written on screen — misreading either column or misremembering the formula corrupts every comparison you make downstream.)

## @summary

**The five habits that separate efficient Table Analysis solvers.**

**1. Identify relevant columns before reading data.** Read the statement, mark the 1–2 relevant columns, then ignore everything else. This is the single highest-leverage habit — students who skip it read 5–10× more data than necessary.

**2. Decide sort vs. filter before touching the table.** Group or subset → filter. Rank or extreme → sort. Both → filter then sort. Deciding up front prevents mid-problem confusion and wasted moves.

**3. Write down every intermediate value.** On any multi-group comparison, record each group's metric on scratch paper before comparing. Holding three category averages in working memory while scanning is unreliable — and unnecessary.

**4. Apply the universal/existential reflex.** Universals fail with one counterexample — scan to refute. Existentials succeed with one confirming row — scan to confirm. Focused scanning beats exhaustive scanning.

**5. Write the formula before computing derived metrics.** Before any ratio or percent change, write the formula on scratch paper. Before reading any column value, verify the unit in the header.

**The seven statement patterns.**

| Pattern | Trigger phrase | Move |
|---|---|---|
| Threshold count | "more than X%," "at least N" | Filter → count → compare |
| Rank check | "highest/lowest X in category Y" | Sort by X → check category |
| Category comparison | "average/median of A vs. B" | Filter each → compute → compare |
| Within-row derivation | "for every row, X > Y" | Scan column pair; one exception = No |
| Existence check | "at least one row with..." | Filter → nonempty = Yes |
| Range check | "all values of X between a and b" | Find min/max → check bounds |
| Correlation check | "highest X also has lowest Y" | Find top-X row → check Y rank |

**Time benchmarks.**

| Metric | Target |
|---|---|
| Per statement | ~60 seconds |
| Per question (3 statements) | under 3 minutes |
| Warning sign | over 3:30 on one question → move on |

If you're consistently over time, the break almost always occurs at Step 1 (reading irrelevant columns) or Step 3 (computing more than necessary to determine the sign of the comparison).

**What to do next.**

Work through the easy problem set first. Those questions isolate the three-step workflow on threshold-count and rank-check patterns — the building blocks. Complete the easy set before moving to medium.

The medium set introduces cross-category comparisons and derived metrics — the types that most students miss. Expect the first few to feel slow. By the tenth question, the workflow should be automatic.

The hard set adds multi-step derivations and ambiguous universal statements at the boundary of what the GMAT asks.

After the problem sets: if you're missing category-comparison or threshold-count questions, return to the Statement Patterns section. If you're missing derived-metric questions, return to Derived Metrics and Traps. Targeted re-reading is more efficient than re-reading the whole chapter.

For mixed timed practice on DI, use the practice drill. Questions you miss here will enter your spaced review queue automatically.
