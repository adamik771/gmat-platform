---
slug: table-analysis
title: Table Analysis
section: DI
estimated_minutes: 45
prerequisites: []
summary: |
  Table Analysis gives you a sortable data table and a series of Yes/No statements — the same task a junior analyst faces when a manager asks "can you verify that for me?" The test is not about reading speed; it's about process discipline. Students who struggle here re-read the whole table for each statement and try to hold intermediate values in their heads. Students who excel run a fixed three-step workflow, write every intermediate number down, and recognize the statement pattern within 5 seconds of reading it. This chapter gives you that workflow, the seven patterns that cover 90% of exam statements, and the traps that explain most wrong answers.
sections:
  - id: pretest
    type: pretest
    title: Try before you learn
    intro: |
      Before I teach you anything, try these two. It's fine to miss them — research shows that *attempting* questions before instruction primes your brain to encode the lesson better. Rate your confidence honestly; your calibration matters more than your accuracy right now.
    pretest_question_ids:
      - table-analysis-q11
      - table-analysis-q12

  - id: table-orientation
    type: reading
    title: "What Table Analysis actually tests — and the 30-second survey"
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

## @table-orientation

Most GMAT formats have a real learning curve. Table Analysis barely does. You already know how to read a spreadsheet. What trips students isn't the data — it's the absence of a survey ritual before they start answering.

**What the format actually tests.** Each Table Analysis question gives you a data table with sortable columns and three Yes/No statements. You have to decide whether each statement is supported by the data. The GMAT is testing whether you can extract specific information accurately from structured data — without wasting time on irrelevant columns or re-reading rows you've already processed. It's the same micro-task a business analyst performs when a manager asks "can you verify that figure for me?"

### The 30-second table survey

Before reading any statement, spend 30 seconds orienting yourself to the table. Do not skip this. Students who jump directly to the first statement frequently misidentify columns or confuse units midway through a computation — an error that's invisible until you've already committed to a wrong answer.

Survey in this order:

1. **Row count.** How many rows? Fewer than 10 — you can sort mentally. 10 to 30 — use the sort button. More than 30 — be precise when counting to median positions.
2. **Column headers and units.** What does each column represent? Check units: thousands vs. millions, percentages vs. raw counts, annual vs. monthly. Note any column that's derived from others — e.g., "Margin %" sitting beside "Revenue" and "Cost" means it's probably calculated, not independent.
3. **Outliers.** Scan each column briefly. Statements frequently reference the extremes, so knowing where the obvious high and low values sit saves time during verification.
4. **Categorical structure.** Is there a grouping column — department, region, product type? Identify the category labels now, before the statements ask you to filter on them.

**Mental model.** The table is a map. The survey is how you read the legend before navigating. Every 10 seconds you spend re-orienting mid-problem is a 10-second penalty you imposed on yourself by skipping the survey.

**Trap to watch.** Pay close attention to column names that look similar: "Revenue" vs. "Revenue Growth," "Score" vs. "Rank," "Units Sold" vs. "Units Produced." A misidentified column invalidates every computation you make with it, and the error is silent — the numbers still come out, they're just computed from the wrong column. Read every header exactly, once, before answering a single statement.

> **Recall check.** Without looking, state the four steps of the table survey in order. Then state the specific risk of skipping the survey. Take 20 seconds, then check yourself. If you missed a step, read the list once more deliberately before moving on.

## @the-three-step-workflow

Every Table Analysis statement, without exception, reduces to three steps. Internalize this workflow and the format becomes mechanical.

**Mental model.** Every statement asks you to: (1) identify which rows and columns are actually relevant, (2) filter or sort to isolate those rows, and (3) compute the required check and compare it to the statement's claim. Miss Step 2 and you over-compute on the full table — slow and error-prone. Miss Step 3 and you get fooled by statements that look right at a glance. The workflow isn't optional. It is the skill.

### Step 1: Identify the relevant columns

Read the statement. What columns does it actually reference? Most statements involve 1–2 columns out of 5–10 in the table. Everything else is noise — don't read it.

**Example.** Table: Employee, Department, Years, Salary (K), Age. Statement: "The average salary of Strategy employees is higher than that of Finance employees." Relevant columns: Department (to filter) and Salary (to compute). Years and Age are irrelevant. Ignore them.

### Step 2: Filter or sort

- If the statement specifies a subset ("employees in Strategy," "products priced under $50"), **filter** the table to just those rows before doing any arithmetic.
- If the statement asks about rank or ordering ("the highest-paid employee," "the second-lowest score"), **sort** the column by the relevant metric.
- Some statements require both: "The highest-salaried Finance employee" — filter to Finance, then sort by salary.

### Step 3: Verify — compute and compare

Once you have the right rows, do the arithmetic: compute the average, count the rows, find the max or min. Compare your result to the statement's claim. Decide Yes or No.

### The time budget

- Step 1 (identify): 5 seconds
- Step 2 (filter or sort): 15 seconds
- Step 3 (verify): 20–35 seconds, depending on the arithmetic

Target: **60 seconds per statement, 3 minutes per question.** If you're over 3:30 on a single TA question, you skipped Step 2 and re-read the table during Step 3.

### Full worked example

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

Statement: "The average salary of Strategy employees exceeds that of Finance employees."

- **Step 1.** Relevant columns: Department, Salary.
- **Step 2.** Filter by Department. Strategy rows: A (120), C (95), G (150). Finance rows: B (140), E (85), H (115).
- **Step 3.** Strategy sum: 120 + 95 + 150 = 365. Finance sum: 140 + 85 + 115 = 340. Both groups have 3 employees, so their averages stand in the same ratio as their sums — 365 > 340, so Strategy average > Finance average. **Yes.** No division needed.

**Pro tip.** When two groups have equal counts, skip the division entirely. The group with the higher sum has the higher average. Every division you avoid saves 10–15 seconds. Across three statements per question and 12 TA questions on a full exam, those seconds add up.

**Trap to watch.** The column-adjacency read error. When you've filtered to specific rows and trace horizontally to read a value, it's easy to land one column to the right of your target — especially when adjacent columns have numerically similar values. The fix: always anchor your read at the row's leftmost identifier (the name or ID), then move deliberately to the target column. Slow down for exactly that one step.

> **Recall check.** State the three steps and the time budget for each. Then state the equal-group-size shortcut for comparing averages. Close the chapter and try to reproduce all of this from memory before looking at the recall-check question below.

## @sorting-vs-filtering

The GMAT Table Analysis table is sortable — click any column header and rows reorder ascending or descending. Knowing *when* to sort versus when to filter is what separates fast, accurate responses from re-reading the whole table each time.

### When to sort

- "The highest / lowest X" → sort X descending / ascending, read the top / bottom row.
- "The second-[biggest/smallest] value" → sort, count to the second position.
- "The median of column X" → sort, find the middle row(s).
- "How many rows have X above 50" → sort X ascending, find where it crosses 50, count above.

### When to filter

- "Employees in department Y" → filter on the category column, work only with those rows.
- "Products priced between $10 and $20" → filter on the price range.
- "Clients with more than 3 orders AND from region X" → apply both conditions simultaneously.

### When to sort AND filter

"The highest-salaried Finance employee." Step 1: filter to Finance. Step 2: sort by Salary descending. Step 3: read the top row.

"Of the top three most-experienced Strategy employees, at least one earns under $130K." Filter to Strategy → sort by Years descending → take only the top three rows → check their salaries.

### The sorting workflow

1. Identify the column to sort by.
2. Decide direction: descending for "highest/greatest/largest"; ascending for "lowest/smallest/least."
3. Read off the answer from the top or bottom of the sorted column.

**Worked example.** Statement: "The highest-paid employee works in Operations."

Sort Salary descending: D (155), G (150), B (140), F (125), A (120), H (115), C (95), E (85). Top row: Employee D, Operations. **Yes.**

**Worked example.** Statement: "Of the top three most-experienced employees, at least one earns less than $130K."

Sort Years descending: D (12 years, 155K), G (10 years, 150K), B (8 years, 140K). Salaries of the top three: 155, 150, 140. All exceed $130K. None earns less. **No.**

**Pro tip.** For tables with 8–10 rows, don't bother clicking the sort button — visually scan the column and identify the top or bottom value. Clicking and waiting costs more time than a mental scan on a short table. Save the sort button for tables where the extremes aren't obvious by eye.

**Pro tip.** For rank questions ("the third-highest"), check for ties before committing to your count. If two rows are tied for first, both share rank 1, and the next distinct value is rank 2. One extra second to check ties prevents a silent counting error.

**Trap to watch.** Sort questions disguised as filter questions. "Is there any employee over 40 who earns less than $120K?" This is a filter (Age > 40 AND Salary < 120K) plus an existence check — it is not a rank question. Sorting the full table by age and then scrolling to find employees over 40 is slower and more error-prone than mentally filtering on the two conditions. The signal: whenever the statement says "is there any row where A and B both hold," filter — don't sort.

> **Recall check.** Without looking, state three specific signals that tell you to *sort*, and two that tell you to *filter*. Then describe the case that requires both, and the shortcut for small tables. Getting these automatic is the entire point of this section — the workflow is fast only if the sort/filter decision is reflexive.

## @statement-patterns

Seven statement patterns cover roughly 90% of what appears on Table Analysis. Recognizing the pattern within 5 seconds of reading a statement tells you exactly what move to make — and prevents wasted computation on the wrong approach.

### Pattern 1: Threshold count

*"More than half the rows satisfy condition X."*

**Move:** filter on condition X, count the matching rows, compare the count to the stated threshold.

**Example.** "More than half the companies grew Q4 revenue by at least 25% over Q1." For 6 companies, compute (Q4 − Q1) / Q1 for each. Count how many produce ≥ 0.25. If 4 or more qualify, **Yes**. If 3 or fewer, **No**. You only need to count — not rank, not average.

---

### Pattern 2: Rank check

*"The highest / lowest value of column X belongs to category Y."*

**Move:** sort column X, read the top or bottom row, check its category label.

**Example.** "The company with the lowest profit margin operates in the consumer sector." Sort Margin ascending, read the bottom row's sector. If it says Consumer, **Yes**. If not, **No** — regardless of what other consumer companies look like.

---

### Pattern 3: Category average comparison

*"The average of column X in group A exceeds that in group B."*

**Move:** filter to group A, sum column X, count rows. Repeat for group B. Compare (using the sum shortcut if the groups are the same size).

---

### Pattern 4: Within-row comparison

*"For every row, column X exceeds column Y."*

**Move:** compare the two columns row by row. A single row where X ≤ Y disproves the statement — stop as soon as you find the first exception.

**Example.** "Every company's Q4 revenue exceeds its Q1 revenue." Scan each row. The moment you find any company with Q4 ≤ Q1, the answer is **No**. If you reach the last row without finding one, the answer is **Yes**.

---

### Pattern 5: Existence check

*"There is at least one row where condition A AND condition B both hold."*

**Move:** filter on both conditions simultaneously. If the filtered set is nonempty, **Yes**. If empty, **No**.

**Example.** "At least one Finance employee over 30 earns less than $100K." Filter: Department = Finance AND Age > 30 AND Salary < 100K. Any rows remain? One is enough. **Yes** or **No**.

---

### Pattern 6: Range check

*"All values of column X fall between a and b."*

**Move:** find the minimum and maximum of column X. If min ≥ a AND max ≤ b, every value is in range. **Yes**. Otherwise **No**.

Shortcut: sort column X and check only the two endpoints — you don't need to read every value in between.

---

### Pattern 7: Correlation check

*"The row with the highest X also has the highest / lowest Y."*

**Move:** find the top-X row. Check its Y rank. Compare to what the statement claims.

**Example.** "The company with the most employees also has the highest revenue." Find the max-Employees row, read its Revenue. Is that Revenue also the table's highest? **Yes** or **No**.

---

**Key takeaway.** Before any arithmetic, spend 5 seconds asking whether the pattern offers a shortcut. Pattern 1 often has obvious outliers that let you count quickly. Pattern 3 often has equal group sizes — use the sum trick and skip division. Pattern 7 sometimes has a single row so dominant that the answer is visible without sorting. The shortcut scan costs 5 seconds and occasionally eliminates 30 seconds of arithmetic.

### The universal vs. existential asymmetry

This is the most important logical rule in Table Analysis.

**Universal statements** ("every," "all," "no row satisfies X") are disproved by a single counterexample. As soon as you find one row that violates the claim, the answer is **No** — stop checking.

**Existential statements** ("at least one," "some," "there exists a row where") are confirmed by a single example. As soon as you find one row that satisfies the claim, the answer is **Yes** — stop checking.

This asymmetry determines how you scan. For universals, you're hunting for the exception. For existentials, you're hunting for the confirmation. In both cases, the first row you check might end the search.

**Example (universal).** "Every employee over 30 earns more than $100K." Start checking employees over 30. Find any one earning ≤ $100K → **No** immediately. Run out of rows without finding one → **Yes**.

**Example (existential).** "At least one Finance employee is older than 40." Scan Finance rows. Find any one older than 40 → **Yes** immediately. Run through all Finance rows with none qualifying → **No**.

> **Recall check.** Name all seven patterns from memory, in order. For each, state the single key move. Then state the two scanning strategies (universal vs. existential) and what each is looking for. If any pattern is blank, return to it and re-read the example. Pattern recognition at statement-reading speed is the highest-leverage skill in this chapter.

## @averages-and-medians

Statements involving averages or medians feel arithmetic-heavy. Three techniques reduce most of them to under 30 seconds.

### The sum trick — your most valuable shortcut

Comparing averages of two groups reduces to comparing their sums when the group sizes are equal.

Average = Sum ÷ Count. If Count_A = Count_B, then Average_A > Average_B if and only if Sum_A > Sum_B. Skip the division.

**Mental model.** Imagine two bags, each holding the same number of items. To know which bag has the heavier average item weight, you don't need to weigh each item individually — you just need to know which bag is heavier. The per-item average is only meaningful when bag sizes differ.

**Worked example.** Statement: "The average salary of Strategy employees exceeds that of Finance employees." Strategy: 3 employees (120K, 95K, 150K). Finance: 3 employees (140K, 85K, 115K). Strategy sum = 365K. Finance sum = 340K. Equal group sizes → 365 > 340 → Strategy average is higher. **Yes.** Time spent on Step 3: about 15 seconds.

When group sizes differ, compute both sums first, then divide each by its count. Computing sums before dividing is still faster than mentally averaging each group from scratch.

---

### Finding the median

The median is the middle value of a sorted sequence.

- **Odd count (n rows):** median sits at position (n + 1) / 2.
- **Even count (n rows):** median is the average of the values at positions n/2 and (n/2) + 1.

For a TA table, sort the relevant column and count to the middle. You don't need to read the entire sorted list — just the middle row or two.

**Worked example.** Statement: "The median salary across all eight employees is above $120K." Sort salaries: 85, 95, 115, 120, 125, 140, 150, 155. n = 8 (even). Median = average of positions 4 and 5: (120 + 125) / 2 = 122.5. Since 122.5 > 120, **Yes**.

**Pro tip.** For large tables (20+ rows), the median position is near the center. Sort the column, count to the middle, and read only those one or two values. You do not need to read or remember the full sorted column.

---

### The deviation trick — is the average above a threshold?

To check whether an average exceeds a threshold X without computing the exact average: compute (each value − X) and sum the deviations. If the total is positive, the average is above X. If negative, the average is below X.

**Worked example.** Statement: "The average age across all employees exceeds 35." Ages: 32, 38, 28, 42, 26, 35, 40, 33.

Deviations from 35: −3, +3, −7, +7, −9, 0, +5, −2. Sum = −6. Negative total → average is below 35. **No.**

This is faster than summing all ages and dividing by 8.

---

### Weighted averages

Some questions involve a metric that's an average weighted by group size — for example, blending two regions' prices when the regions have different transaction volumes.

**Example.** Region X: 200 units sold at $5 each. Region Y: 100 units at $8 each. Overall average price per unit = (200 × 5 + 100 × 8) / (200 + 100) = (1000 + 800) / 300 = $6.

This is not (5 + 8) / 2 = $6.50. The group with more volume pulls the average toward its price. Always weight by group size, not by the number of groups.

**Trap to watch.** The unweighted average trap. "What is the average revenue per transaction?" If different categories have different transaction counts, the correct denominator is the total number of transactions — not the number of categories. Re-read the statement to confirm exactly what is being averaged and over what denominator.

> **Recall check.** State the sum trick and the condition under which it applies. State the median position formula for both odd and even counts. State the deviation trick. If you can reproduce all three without looking, you've internalized the techniques that directly reduce computation time on the 30–40% of TA statements involving averages or medians.

## @cross-category-comparisons

Cross-category comparisons ask you to compute a metric for multiple groups, then rank or compare the results. The challenge is staying organized — conflating one group's numbers with another's causes silent errors that are impossible to catch without starting over.

**Mental model.** Treat each category as a separate mini-table. Compute the required metric for one mini-table, write the result down, then move to the next. Never hold two category-averages in your head simultaneously. The cognitive load is what causes the error — not the arithmetic.

### The two-pass technique

**Pass 1:** Identify all the categories the statement involves and write them down.

**Pass 2:** For each category, filter to its rows, compute the metric, and record the result.

Then compare the recorded results. Students who skip Pass 1 (and start computing before confirming how many categories are involved) regularly miss a category.

**Worked example.** Statement: "The average years of experience is highest in Operations."

Pass 1: Three departments — Strategy, Finance, Operations.

Pass 2:
- Strategy (A, C, G): Years 5, 3, 10. Sum = 18, count = 3, avg = 6.0.
- Finance (B, E, H): Years 8, 2, 6. Sum = 16, count = 3, avg = 5.3.
- Operations (D, F): Years 12, 7. Sum = 19, count = 2, avg = 9.5.

Operations is highest. **Yes.** Note: Strategy and Finance both have 3 employees (sum comparison would work), but Operations has only 2 — so you need the actual averages to compare Operations against the others.

---

### The subgroup max/min pattern

"The oldest Finance employee is younger than the oldest Strategy employee."

For each category, filter and find the single extreme (max or min). Compare the extremes.

- Finance max age: B (38), E (26), H (33) → max = 38.
- Strategy max age: A (32), C (28), G (40) → max = 40.
- 38 < 40. **Yes.**

You don't average here — you isolate one value per category and compare those values directly.

---

### The conditional aggregation pattern

"The total salary of employees over 35 exceeds $400K."

This cuts across categories using a filter that applies to all rows (not just one department), then aggregates.

- Employees where Age > 35: B (38, 140K), D (42, 155K), G (40, 150K).
- Sum = 140 + 155 + 150 = 445K.
- 445K > 400K. **Yes.**

---

### The intersection pattern

"All Finance employees over 30 earn more than $100K."

Apply two filters simultaneously (Finance AND Age > 30). Then check every row in the result against the salary condition.

- Finance AND Age > 30: B (38, 140K), H (33, 115K). Both earn > 100K. **Yes.**

**Trap to watch.** "AND" vs. "OR" in multi-condition filters. "Finance AND over 30" means a row must satisfy both conditions — it's an intersection. "Finance OR over 30" means a row satisfies at least one — it's a union and includes many more rows. The word matters. Most TA statements use AND, but OR appears occasionally. Read it precisely before filtering.

**Trap to watch.** The category-count mismatch. Before applying the sum trick to a cross-category comparison, confirm the group sizes are actually equal. Strategy (3 employees) vs. Finance (3 employees) → sum comparison works. Operations (2 employees) vs. Finance (3 employees) → you must divide. Taking the shortcut with unequal groups gives the wrong comparison.

> **Recall check.** Describe the two-pass technique and explain why Pass 1 comes before any arithmetic. State the difference between "AND" and "OR" filters and how each changes which rows you include. State the condition under which you can use the sum shortcut in cross-category comparisons. These three points together cover the most common errors on this question type.

## @derived-metrics-and-traps

Derived metrics — ratios, percentages, per-unit values — are the most computation-heavy statements in Table Analysis. They're also where most errors happen, because each derived metric requires reading two column values correctly and combining them correctly. Mis-read either piece, and you compute a plausible-looking number from the wrong inputs.

### Common derived metric types

**Ratio (Column A ÷ Column B).** "The region with the highest conversion rate is East." Conversion rate = Sales ÷ Visitors. Compute per row, compare.

**Percent change.** "More than half the companies grew Q4 revenue by at least 25% over Q1." For each row: % change = (Q4 − Q1) / Q1 × 100. Count rows where this ≥ 25.

**Per-unit metric.** "Revenue per employee is highest at Company D." Compute Revenue ÷ Employees for each row, find the maximum.

**Two-layer derivation.** "The company with the highest revenue-per-employee also has the lowest cost-per-employee." Compute two ratios per row, find the top of the first and the bottom of the second. Check whether they're the same row.

---

**Worked example (percent change).**

| Company | Q1 Revenue (M) | Q4 Revenue (M) |
|---|---|---|
| Alpha | 40 | 52 |
| Beta | 60 | 63 |
| Gamma | 30 | 39 |
| Delta | 80 | 92 |

Statement: "More than half the companies grew revenue by at least 25% from Q1 to Q4."

- Alpha: (52 − 40) / 40 = 12/40 = 30%. Qualifies.
- Beta: (63 − 60) / 60 = 3/60 = 5%. Does not qualify.
- Gamma: (39 − 30) / 30 = 9/30 = 30%. Qualifies.
- Delta: (92 − 80) / 80 = 12/80 = 15%. Does not qualify.

2 out of 4 qualify — exactly 50%, not more than 50%. **No.**

---

### The seven traps

**Trap to watch.** The percent-change denominator trap. % change = (New − Old) / **Old**, not (New − Old) / New. Dividing by the new value produces a result that's close but slightly too small. Trap answers exploit this. When computing percent change, always confirm you're dividing by the starting value.

**Trap to watch.** The unit mismatch trap. Revenue in thousands vs. millions; rate in percent vs. decimal; annual vs. quarterly. If one company's revenue column is labeled "(K)" and another section of the table labels a similar column "(M)," a direct comparison is off by a factor of 1,000. Always verify units in the column header before any calculation.

**Trap to watch.** The numeric-rank vs. numeric-value trap. A "Rank" column assigns value 1 to the best performer — but 1 is the smallest integer. "The company with the highest rank" means the row with Rank = 1, not the row with the largest number in the rank column. When a rank column appears, confirm what Rank 1 represents before ordering.

**Trap to watch.** The "every" oversight trap. "Every row satisfies condition X." Students verify a few rows, see them all pass, and mark Yes. Universal claims require checking every row — or finding the first exception that disproves the claim. Never confirm "every" by checking only a sample.

**Trap to watch.** The column-adjacency trap. When reading a derived metric that combines two columns, it's easy to accidentally read the value from the adjacent column. Anchor at the row's identifier before reading each column value in turn.

**Trap to watch.** The per-unit denominator confusion. "Revenue per transaction" uses total transactions as the denominator — not number of products, not number of customers. Read the statement precisely to identify what denominator is implied.

**Trap to watch.** The rounding trap. Statements with precise thresholds ("exceeds $122.5K," "more than 24.9%") punish casual rounding. If an intermediate value is close to the boundary, compute exactly before comparing. Do not round until the final step.

---

### The "does this even need arithmetic?" sanity check

Before executing any computation on a derived metric, spend 3 seconds asking whether the statement can be answered by inspection. "Is there any row where revenue is negative?" — scan for negatives, no arithmetic needed. "Does any company's Q4 revenue equal its Q1?" — scan for identical adjacent values. The GMAT occasionally includes derived-metric statements that are solvable in 10 seconds by pattern recognition. Three seconds to check is always worth taking.

> **Recall check.** State the correct formula for percent change — including which value goes in the denominator. Name two specific traps that involve misidentifying a column or its units. Then state the sanity check and when to apply it. These three points explain the majority of derived-metric errors.

## @summary

Table Analysis is the most process-dependent format in DI. Accuracy and speed come from executing a fixed workflow — not from mathematical sophistication.

### The five Table Analysis habits

1. **Survey before reading statements.** Row count, column headers and units, outliers, categorical structure — 30 seconds before any statement. Every shortcut you discover in the survey pays dividends three times over.

2. **Run the three-step workflow on every statement.** Identify the relevant columns → filter or sort → compute and verify. Never work with the whole table when the statement only asks about a subset.

3. **Write down intermediate values.** Scratch paper is not optional. Holding three category-averages in memory while comparing them is the primary cause of medium-difficulty errors. Write every intermediate number down.

4. **Use the sum trick when group sizes are equal.** No division — just compare sums. Applied consistently, this saves 30–45 seconds per question.

5. **Hunt for the counterexample on universals; hunt for the confirmation on existentials.** The first row you check could end the search in either direction. Stop as soon as you have your answer.

---

### The seven statement patterns — quick reference

| Pattern | Key signal | Move |
|---|---|---|
| Threshold count | "More than X% of rows" / "at least N" | Filter → count → compare to threshold |
| Rank check | "Highest/lowest X belongs to category Y" | Sort X → read top/bottom → verify category |
| Category comparison | "Average in group A vs. group B" | Filter each → sum → compare (divide if unequal counts) |
| Within-row | "For every row, X > Y" | Compare two columns row by row; stop at first exception |
| Existence check | "At least one row with A and B" | Filter on both conditions → check if nonempty |
| Range check | "All X fall between a and b" | Sort X → check only min and max |
| Correlation | "Highest X also has highest/lowest Y" | Find top-X row → check its Y rank |

---

### Time targets

- Per statement: ~60 seconds (5 identify + 15 filter/sort + 40 verify).
- Per question (3 statements): under 3 minutes.
- Hard stop: if you've spent more than 3:30 on one TA question, something went wrong. Flag it mentally and move on — return with remaining time at section's end.

---

### What separates 685 from 605 scorers on Table Analysis

It is not computation speed. It is not mathematical knowledge. It is two habits that form through repetition, not from more reading:

- **Writing intermediate values down** instead of trusting memory across three statements.
- **Recognizing the statement pattern within the first 5 seconds** instead of re-reading it three times to figure out what's being asked.

Both habits are automatic with sufficient practice. Neither is automatic from reading alone.

---

### What to do next

Work through the **easy problem set** first. The goal isn't accuracy — it's confirming the three-step workflow feels reflexive, not deliberate. If any statement requires you to think about what step to take, the workflow isn't automatic yet.

Move to **medium** once the workflow is automatic. Medium questions introduce derived metrics and multi-condition cross-category comparisons. If your medium accuracy falls below your target, return to the specific section that covers the pattern you missed — derived-metrics-and-traps or cross-category-comparisons — and re-read it with your specific errors in mind.

**Hard questions** push on two-layer derivations, subtle universal/existential traps, and multi-step filter-then-sort combinations. If you're missing hard questions, return to the derived-metrics section (multi-step) and statement-patterns section (quantifier logic).

Every mistake in these problem sets tells you exactly which section of this chapter to revisit. Use that information.
