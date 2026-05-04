---
title: Table Analysis
description: How to read sortable tables under time pressure — identify the relevant columns, sort or filter to surface the answer, ignore irrelevant data, and verify units before computing. The three-statement true/false format and the trap patterns that decide table problems above the 70th percentile.
section: DI
type: reading
---

# Chapter 3.3 — Table Analysis

## Core idea

Table Analysis is *Quant data plus structured triage*. The format gives you a sortable table — typically twenty to fifty rows with three to seven columns — and asks three or four true/false statements about the data. The skill is fast: scan the table for the relevant columns, sort or filter to surface the answer, ignore the irrelevant data, and verify units before any computation. Most table problems are answered without complex math, but they require *fluent navigation* of structured data — a skill the test rewards explicitly.

The mindset shift in this chapter: *let the table do the work*. Don't read every row. Don't compute every cell. Sort by the relevant column, then read the top or bottom of the sorted result. Use the sort feature as a search tool, not as a display preference.

### Quick check

1. Table Analysis is described as "Quant data plus" what?
2. The format gives a sortable table — typically how many rows and columns?
3. The skill is to *let the table do the work* — how?
4. The mindset shift is to *not read every row* but to do what?
5. Most table problems are answered without complex math — what's the bigger skill?

*Answers.* (1) Structured triage — fluent navigation of structured data. (2) About 20-50 rows and 3-7 columns. (3) Sort or filter to surface the answer; use the sort feature as a search tool. (4) Sort by the relevant column, then read the top or bottom of the result. (5) Fluent navigation — knowing which columns matter, sorting/filtering, and verifying units before computing.

## Why it matters

Three reasons Table Analysis deserves dedicated treatment.

*Sorting and filtering are the highest-leverage tools*. Most table questions can be answered in 30-60 seconds if you sort by the right column. The same questions take 3+ minutes if you read row by row. The sort is the key habit.

*Trap statements often involve units and definitions*. The table column says "revenue in millions"; the statement asks about "billions." A student who doesn't verify units produces a wrong answer. The discipline is *check the column header before computing on the column's values*.

*Table problems test multiple statements per problem set*. The standard format gives 3-4 true/false statements about the same table. Strong solvers reuse their understanding of the table across statements; weak solvers re-orient to the table on every statement, multiplying the work.

### Quick check

1. Sorting and filtering are described as the highest-leverage tools — why?
2. Trap statements often involve what?
3. Each problem set has 3-4 statements — how does this affect the protocol?
4. The chapter argues table problems test what skill specifically?
5. Why is *fluent navigation* worth more than computation skill on tables?

*Answers.* (1) Most table questions can be answered in 30-60 seconds with the right sort; the same questions take 3+ minutes if you read row by row. (2) Units and definitions — "millions" vs. "billions," percent vs. percentage points, etc. (3) Strong solvers reuse their understanding of the table across statements; weak solvers re-orient on every statement, multiplying the work. (4) Database-style query thinking — formulating the right query and executing efficiently. (5) Most questions don't require computing on the data; they require *finding* the relevant data point or aggregating with a sort.

## Mental model

The right framing for a sortable GMAT table is a *small database accessed through queries*. Each true/false statement is a query against the data: which columns are relevant, what filter applies, what aggregation produces the answer. Your job is to *formulate the query in your head* before you start scanning rows. The query is usually one of: find the row matching a condition, find the maximum or minimum on a column, count rows meeting a criterion, sum a column, or compare two columns row-by-row.

Once you've identified the query, the table's sort and filter features do the heavy lifting. The skill is in formulating the query precisely, not in scanning the data exhaustively. Don't read; query.

### Quick check

1. The "small database" mental model says each statement is what?
2. Your job is to formulate the query *before* you start what?
3. Common queries include: find the row matching what?
4. Common aggregations include sum, max, min, and what?
5. The skill is *formulating the query precisely* — what's the failure mode of skipping this?

*Answers.* (1) A query against the data — defined by which columns are relevant, what filter applies, what aggregation is needed. (2) Scanning rows. (3) A condition (e.g., "row where revenue is highest"). (4) Count (rows meeting a criterion); compare two columns row-by-row. (5) Reading rows top-to-bottom looking for the answer — costs 60+ seconds when query-formulation takes 5.

## GMAT recognition signals

Five recurring statement types in Table Analysis.

*"More rows have property X than property Y."* Counting comparison. Sort by the relevant column, count rows above and below a threshold, compare counts.

*"The row with the highest [or lowest] value in column X has [some other property]."* Sort by column X, look at the top (or bottom) row, check the other property.

*"The total of column X exceeds [some value]."* Sum the column. If many rows, sort and estimate; if few rows, compute. Often the sum is large enough that estimation suffices.

*"Most rows with property X also have property Y."* Filter by property X (mentally or by sorting), then check property Y on those rows.

*"Property X correlates positively with property Y across the rows."* Compare the two columns row by row. Often a quick scan — does X go up when Y goes up? — gives the answer.

### Quick check

1. Name the five recurring statement types.
2. *"More rows have property X than property Y"* — what's the query?
3. *"The row with the highest value in column X has [some other property]"* — what's the protocol?
4. *"The total of column X exceeds [some value]"* — when does estimation suffice vs. exact sum?
5. *"Most rows with property X also have property Y"* — what's the query structure?

*Answers.* (1) Counting comparison; max/min lookup; total/sum threshold; conditional pattern; correlation across rows. (2) Sort by relevant column; count rows above and below threshold; compare counts. (3) Sort by column X; look at top row; check the other property. (4) Estimate when many rows make exact summation slow; compute exactly when few rows or when total is close to threshold. (5) Filter by property X; count rows with property Y among them; compare to half (or majority).

## Method

A four-step Table Analysis protocol.

*Step 1. Read the question / statement first*. Identify which columns matter. Often two or three of the columns are relevant; the others are decoys.

*Step 2. Verify units and definitions*. Read the column headers carefully. "Revenue (in $ millions)" means each cell value should be multiplied by 1 million if the question asks about absolute dollars. "Pct change" means the cell shows percent change, not absolute value.

*Step 3. Sort or filter to surface the answer*. Use the sort feature on the relevant column. Read the top or bottom of the sorted result depending on what the question asks. For filtering, identify the rows meeting the criterion mentally (or via the platform's filter, if available).

*Step 4. Verify and commit*. Sanity-check that the answer respects the question's constraints — right column, right units, right direction (max vs min). Then mark true or false and move on.

### Quick check

1. State the four-step Table Analysis protocol.
2. Step 1 (read the question/statement first) tells you what?
3. Step 2 (verify units and definitions) is required because?
4. Step 3 (sort or filter) — what does this replace?
5. Step 4 (verify and commit) — what should you check before bubbling?

*Answers.* (1) Read the question/statement first; verify units and definitions; sort or filter to surface the answer; verify and commit. (2) Which columns matter; the others are decoys. (3) Column headers may show "millions" or "thousands" or "% change" — interpreting cells correctly requires reading the unit. (4) Reading rows sequentially. Sort/filter is faster and more reliable. (5) Right column targeted; right units; right direction (max vs. min); answer respects the question's constraint.

## Common traps

Six recurring Table Analysis traps.

*Reading row by row.* The instinct to start at row 1 and scan down. Wastes time. Fix: identify which columns matter, then sort by them.

*Ignoring units in column headers.* The column says "in thousands" and you treat it as ones. Fix: pause to read every column header before doing anything.

*Mixing absolute and percentage values.* The column shows percent change; you treat it as absolute change. Or vice versa. Fix: read the header carefully and label your work as "percent" or "absolute" on scratch.

*Over-computing.* Computing exact values when estimation suffices. The statement says "the total exceeds 1 million"; the column has rows of 200,000-ish and 300,000-ish, twenty rows total. The total is clearly above 1 million; no exact sum needed. Fix: estimate before computing.

*Selecting the wrong column.* The question is about "profit" but you sort by "revenue." Fix: re-read the question to confirm which column is the target.

*Forgetting the table on multi-statement problems.* Re-orienting to the table on every statement when the table didn't change. Fix: load the table's structure once on first read, then deploy that understanding across all the statements in the set.

### Quick check

1. Name three of the six recurring Table Analysis traps.
2. *Reading row by row* — what does it cost?
3. *Ignoring units in column headers* — what's the consequence?
4. *Mixing absolute and percentage values* — give an example.
5. *Forgetting the table on multi-statement problems* — what's the discipline?

*Answers.* (1) Any three of: reading row by row; ignoring units; mixing absolute/percent; over-computing; selecting wrong column; forgetting the table on multi-statement problems. (2) Wastes 60+ seconds per statement. The sort feature compresses it to 5-10 seconds. (3) The column header says "in thousands" but you treat values as ones, producing answers off by a factor of 1,000. (4) The column shows percent change; you treat it as absolute change. Or vice versa. (5) Load the table's structure once on first read; reuse it across all statements. Don't re-orient.

## Original mini-example

A worked example demonstrating the sort-first protocol.

*Hypothetical table.* Twenty rows of company data. Columns: Company name, Sector, Revenue (in $ billions), Employees (thousands), Headquarters region. The data is varied, with five companies in each of four sectors (Tech, Energy, Retail, Finance) and four regions.

*Statement 1.* "More than half of the top ten companies by revenue are in the Tech or Finance sector."

*Step 1 — Read the statement.* I need to identify the top ten companies by revenue and check the sector breakdown.

*Step 2 — Verify units.* Revenue column is in $ billions. No conversion needed for the sector question; sectors are categorical.

*Step 3 — Sort.* Sort the table by revenue descending. Look at the top ten rows. Count how many are in Tech or Finance.

*Step 4 — Verify and commit.* Suppose the count is 6 of 10 in Tech or Finance. 6 > 5, so "more than half" is satisfied. Statement is true.

*Time spent.* About 45 seconds — most of it in the visual scan of sectors after sorting.

*Trap to avoid.* The trap statement is something like "more than half of the *bottom* ten companies are in Tech or Finance" — same wording, opposite direction. A student who doesn't verify direction (top vs bottom) would get the same count and confidently mark the statement true based on the wrong rows. The fix: re-read the statement explicitly for direction.

The other trap on multi-statement problems is forgetting the sort across statements. If statement 2 is "the lowest-revenue company is in the Energy sector," I need to look at the bottom of the same sorted table. If I re-sort by sector instead, I lose the revenue ordering and have to do redundant work. Plan the sort sequence to support all the statements.

## More worked examples

### Example 1 — Sort to find the highest

*Setup.* Statement: "More than half of the companies with revenue above $100M are in the Tech sector." Table has 25 rows with columns: Company, Sector, Revenue.

*Thinking process.* Filter (mentally or with sort) for revenue above $100M. Count how many fall in this set; count how many of those are Tech. Compare to half.

*Solution.* Two-step query: filter, then count. 60-90 seconds.

*Common mistake.* Reading the entire table top to bottom looking for Tech companies. Costs 2+ minutes for what filter-and-count does in 30 seconds.

*Takeaway.* Tables aren't meant to be read sequentially. Identify the relevant filter, apply it, then count or compute on the filtered subset.

### Example 2 — Unit-checking before computing

*Setup.* Table column header: "Revenue ($ millions)." Statement: "Company X had revenue greater than $50,000."

*Thinking process.* The column shows values in *millions*. So "Company X has revenue $12 (in the table)" means $12 million in actual dollars, which is $12,000,000. The statement asks about $50,000 in actual dollars — Company X far exceeds it.

*Solution.* The statement is essentially trivially true once the unit is decoded.

*Common mistake.* Comparing the table value (12) directly to 50,000 and concluding Company X has revenue *less than* $50,000. The unit conversion was missed.

*Takeaway.* Read column units before any comparison. The unit is what gives the cell its actual meaning.

### Example 3 — Comparison across columns

*Setup.* Statement: "Companies in the Finance sector have higher average employee counts than companies in the Retail sector." Table has Sector and Employees columns.

*Thinking process.* Filter rows by Sector = Finance, average the Employees column. Filter rows by Sector = Retail, average. Compare the two averages.

*Solution.* Two filter operations and two averages, then a comparison.

*Common mistake.* Eyeballing the table without filtering — Finance and Retail rows are scattered. Without filtering, you might compare the wrong rows.

*Takeaway.* When comparing groups, filter each group separately and compute the metric on the filtered set. Then compare the metrics. Don't compare row-by-row across mixed-sector data.

## Active recall checkpoint

Close this chapter and answer these without looking back.

- Why is Table Analysis a *navigation* skill rather than a computation skill?
- What is the *database with a query interface* mental model?
- Name the *five recurring statement types* and what each requires.
- What is the four-step Table Analysis protocol?
- Why is *reading column headers carefully* the most important pre-computation step?
- Name three of the *common traps* and the failure mode each represents.

*Application.* For each described table-statement scenario, name the query you'd execute (sort by what column? filter how? compute what?).

- "More than half of the top ten companies by revenue are in the Tech sector." (Table has Company / Sector / Revenue / Employees columns across 25 rows.)
- "The total revenue across all rows exceeds 5 billion." (Same table.)
- "Most companies with revenue above $100M also have more than 1,000 employees." (Same table.)
- "Companies in the Finance sector have higher average employee counts than companies in the Retail sector." (Same table.)

For each, name the columns relevant to answering, the operation (sort / filter / sum / count / compare), and the unit-checking step you'd perform first.

If you missed any, re-read the relevant section and test yourself in three days.

## Review schedule

- *Day 1:* Read the chapter end to end.
- *Day 3:* Drill three Table Analysis problem sets with explicit sort-first discipline.
- *Day 7:* Re-read *Common traps*. Drill three more problem sets specifically scanning for unit traps.
- *Day 14:* Active recall checkpoint without re-reading. Drill four problem sets under timed conditions.
- *Day 30:* Re-read the chapter. Identify your dominant trap.
- *Day 60:* Final re-read. By now sort-first should be reflexive.

## Connection to other skills

Table Analysis connects to several Quant chapters. *Arithmetic Foundations* (Chapter 1.2) provides the percent and ratio fluency for table computations. *Statistics, Probability, and Combinatorics* (Chapter 1.6) provides the descriptive-statistics framework for understanding what means, medians, and ranges of table columns reveal.

Cross-section connection: the *navigation-not-computation* discipline in tables is the same discipline as *triage-not-process* in Multi-Source Reasoning (Chapter 3.5) and the same as *return-on-demand* in RC (Chapter 2.5). The skill of locating information rather than memorizing or processing all of it is one skill across multiple sections.
