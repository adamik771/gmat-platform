---
title: Data Insights Strategy Guide
description: Frameworks for all five DI question types. The section most people underprepare for — and the one where preparation pays the biggest dividends.
section: DI
type: reference
---

# Data Insights Strategy Guide

## How to Use This Guide

This is the tactical companion to the Module 5 Data Insights lesson. The lesson teaches you the mental model. This guide gives you the moves.

Use it three ways. First, read it straight through once after you finish Module 5 so the format-by-format playbook is loaded before you start drilling. Second, keep it open beside your practice sets — when a Graphics Interpretation question punishes you, flip to the GI section and re-read the trap list before the next one. Third, during your final two weeks, skim the Top 10 Traps and the Pacing Plan daily so the reflexes are warm on test day.

The calculator is your friend, not your crutch. Data Insights gives you an on-screen calculator that Quant does not — use it for genuinely messy arithmetic, but if you are reaching for it on 20% of 400, you are bleeding seconds you cannot afford. I score 735s on this test because I treat the calculator like a scalpel, not a hammer. That is the mindset this guide is trying to build.

One more note on how to read this guide. The sections are ordered roughly by how much return you get per minute of study. Data Sufficiency is first because it is the highest-frequency format and has the most learnable structure. MSR, Table Analysis, and Graphics Interpretation follow — these are the formats that punish sloppy reading. Two-Part Analysis closes the format coverage because it is the densest per question and the one where sloppy verification costs you the full point. Then pacing, calculator use, and the trap compendium tie everything together for test day.

## The DI Landscape

Twenty questions. Forty-five minutes. That works out to 2 minutes 15 seconds per question on average, and every minute you bank on an easy Data Sufficiency problem is a minute you get to spend untangling a Multi-Source Reasoning set that actually deserves the thought.

The five formats are mixed together in a single scrambled section. You will not get a block of DS followed by a block of MSR. Question 3 might be a Graphics Interpretation, question 4 a Two-Part Analysis, question 5 a DS, then a three-question MSR set followed by a Table Analysis. The format switch is part of the challenge — you have to pivot between "do I have enough information" mode and "read this dual-axis chart" mode without losing time. Build that flexibility in practice.

Rough format distribution on a typical test: Data Sufficiency is the biggest single slice at roughly 25-30% of the questions. You will almost always see one MSR scenario (three linked questions off three tabs). Table Analysis, Graphics Interpretation, and Two-Part Analysis fill out the rest, typically two to four of each. The exact mix shifts test to test — do not plan your prep assuming you will see exactly four of anything.

The calculator is available. The test gives you a basic four-function with percent and square root. No scientific functions, no memory beyond a single value. It is slow to click — faster mental math will always beat it on simple operations.

No partial credit exists on this section. Table Analysis sub-statements and MSR three-question sets are all-or-nothing per question. On a Table Analysis with three Yes/No sub-statements, getting two of three right earns you zero. Same logic on TPA: both columns must be right, or you get nothing. This is why verification matters — one sloppy sub-answer wipes out the whole question.

Scoring is integrated across all five formats into a single DI score. The algorithm does not care whether you crushed GI and tanked DS or the reverse. What it cares about is raw correctness and the difficulty of what you got right. Strong DS performance buys you credit toward harder questions in any format.

## Format 1: Data Sufficiency

DS is the format that breaks first-time test takers. It looks like a math problem and it is not. The meta-question is always the same: do I have enough information to answer this? Not: what is the answer? If you forget that distinction under time pressure you will burn four minutes calculating a value the test never asked you to produce.

### The five answer choices, memorized cold

- **(A)** Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- **(B)** Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- **(C)** BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- **(D)** EACH statement ALONE is sufficient.
- **(E)** Statements (1) and (2) TOGETHER are NOT sufficient.

You should be able to recite these in your sleep. If you are still reading them on test day you are losing 20 seconds per DS question.

### The five-step process

1. **Read the question stem carefully.** Classify it: is it a value question ("What is x?") or a yes/no question ("Is x > 0?")? This classification dictates what "sufficient" means.
2. **Simplify the stem.** Translate the question into the simplest form. "Is x > 0?" might be asking the same thing as "Is x positive?" but "Is x² > 0?" is different — that one is asking "is x nonzero?" Strip the question to its core before you touch either statement.
3. **Evaluate Statement (1) alone.** Ignore Statement (2) completely. On your scratch pad, write either "A/D" (if (1) is sufficient) or "B/C/E" (if (1) is not). That split cuts the answer field in half immediately.
4. **Evaluate Statement (2) alone.** Now ignore Statement (1). This is the step people blow — they let information from (1) leak into their evaluation of (2). Force yourself to forget.
5. **If neither alone is sufficient, evaluate them together.** Only now do you combine. The answer is C if together they pin down a single value or a single yes/no. E if they still do not.

### Value DS vs yes/no DS

For a value question, sufficient means the statement forces exactly one answer. If you can produce two valid values that satisfy the statement, it is insufficient. Example: "What is x?" with statement "x² = 9" is insufficient because x could be 3 or -3.

For a yes/no question, sufficient means the statement always produces the same answer. If you can find one case that yields "yes" and one that yields "no," the statement is insufficient. Example: "Is x positive?" with statement "x² > 4" is insufficient because x = 3 gives yes and x = -3 gives no.

### The C trap and the E trap

**The C trap:** both statements combined look like they nail down the answer, so C seems obvious — but you missed that one of them alone was already sufficient. Correct answer: A, B, or D. Defense: never evaluate together without independently confirming each alone was insufficient.

**The E trap:** you combine the statements and produce a value, but the combined information actually allows multiple values. Correct answer: E. Defense: when you combine, run the same two-case check you run on each statement alone.

### The trap checklist for DS

- Assuming integer when the problem did not say integer. "Is x > 2?" with x² > 4 looks sufficient if x is an integer, but x = -2.5 squares to 6.25 and answers no.
- Assuming positive when the problem did not say positive. Negatives break more DS problems than any other single oversight.
- Missing x = 0. Zero is neither positive nor negative, satisfies x · y = 0 for any y, and breaks inequalities that assume division is legal.
- Missing non-integer cases. "n is divisible by 4" restricts to integers; "n/4 is an integer" does too; "n is a multiple of 4" usually does. But "4 divides into n" in a word problem may or may not — check.

## Format 2: Multi-Source Reasoning

MSR is a reading comprehension passage disguised as a data problem. You get one scenario spread across three tabs and three questions keyed off that scenario. The tabs usually combine a prose paragraph (memo, article, email thread), a data table, and either a chart or a second prose tab. Sometimes you get email correspondence as one or two of the tabs — a back-and-forth between people that you have to parse for who said what.

### The skim-first principle

Do not read the tabs deeply before you see the questions. Skim them for one to two minutes total. Your goal in that skim is to build a mental index: tab 1 has the project timeline, tab 2 has the budget table, tab 3 has the regional breakdown. That is all you need. You are not trying to memorize numbers. You are trying to know where to look when a question demands a specific fact.

Heavy up-front reading is the biggest MSR time sink. People feel like they should "understand" all three tabs before tackling any question, and they spend three minutes doing it, and then they have four minutes left for three questions. Wrong order. Skim, then let the questions drive your deep reading.

### The question-driven workflow

For each of the three MSR questions:

1. Read the question and identify which tab or tabs it touches. The answer is almost always in one or two tabs, rarely all three.
2. Return to the relevant tabs surgically. Find the specific rows, sentences, or data points the question is about.
3. Answer. Verify against the tab content, not your memory of it.

### MSR trap patterns

- **The "true in one tab, false in another" trap.** An answer choice accurately reflects tab 1 but contradicts a qualifier in tab 2. When you see an answer that looks clearly supported by one tab, check the other tabs for contradictions before selecting.
- **The "synthesis required" question.** Some questions cannot be answered from any single tab — you have to combine. The giveaway is when your search of one tab turns up partial information that does not quite answer the question. That is your cue to cross-reference.
- **Qualifiers buried in prose.** "Starting in Q3" or "only for domestic orders" or "subject to approval" — these phrases live in the prose tab and silently modify the numbers in the data tab. Miss them and your arithmetic is correct but your answer is wrong.

### MSR time budget

Budget seven minutes for the three-question set total. That is 2 minutes 20 seconds per question, roughly on pace with the section average. The two-minute upfront skim eats into the first question's time, but you get that time back on questions two and three because you already know where everything lives.

## Format 3: Table Analysis

You get a sortable table. The sort function is real — clicking a column header reorders the rows. Below the table sits either a set of three Yes/No sub-statements or a single multiple-choice question. If it is the Yes/No format, all three must be correct for the question to score.

### Process

1. **Scan the column headers.** Understand what each column measures before you do anything else. "Units sold" and "units in stock" are different columns and they trap people who skim.
2. **Note the units.** Is the revenue column in thousands? Millions? Percentages? A single missed unit will invalidate every sub-statement you answer.
3. **For each sub-statement, identify the relevant columns.** Then compute or compare. If sorting helps, sort. The sort button exists for a reason — use it.

### Example trap setup

Imagine a table of companies with columns Revenue ($M), Growth Rate (%), and Market Share (%). A sub-statement reads: "The company with the highest revenue also has the highest growth rate." Sort by revenue descending to find the top. Check its growth rate. Then sort by growth rate descending to verify that same company is on top. Two sorts, fifteen seconds, done.

### Table Analysis trap list

- **Absolute change vs percent change.** "Revenue increased by 50" versus "revenue increased by 50%" are different claims. Check which the sub-statement is making.
- **Row totals vs column totals.** A sub-statement about "total sales" might mean summing a column (across companies) or summing a row (across quarters for one company). Read the header structure.
- **Mean vs median.** If a sub-statement says "the average is X," it almost always means arithmetic mean. But "the typical value" is vaguer — and the test will sometimes use an ambiguous phrasing to tempt you into the wrong measure.
- **Strict vs non-strict inequalities.** "More than 5" excludes 5. "At least 5" includes 5. "Less than half" is strict; "no more than half" includes exactly half. Misread one and you flip a Yes to a No.
- **The "almost true" sub-statement.** A sub-statement is true for four of the five rows and false for one. Because you sampled the first three rows, you said Yes. Wrong. Always check all relevant rows, or sort so the potential counterexample is the first one you see.

## Format 4: Graphics Interpretation

One chart, two or three fill-in-the-blank questions. The blanks use dropdowns with a fixed set of options — so you are not generating answers, you are selecting them.

### First move: read both axes

Before you interpret anything, read the x-axis label, the y-axis label, and the units on each. On a dual-axis chart, read both y-axes. This sounds obvious. It is the number one source of GI errors. If the left axis is revenue in millions and the right axis is employee count in thousands, the relationship between the two lines is not what your eyes think it is.

### Zoom in for specific data points

GI questions usually ask about specific values or specific comparisons, not overall trends. "In 2023, revenue was approximately ___" is a specific-point question. Find 2023 on the x-axis, trace up to the line or bar, trace across to the y-axis, read the value. Do not interpret from the general shape of the chart.

### CAGR and growth rate formulas

Compound annual growth rate shows up in GI regularly. The formula:

CAGR = (end / start)^(1/n) - 1

where n is the number of periods (not the number of data points — if you have 2020 through 2024 that is five data points but four periods).

Simple growth rate: (end - start) / start. That gives a percentage for the whole span, not annualized.

### Chart type cheat sheet

- **Bar chart:** comparing discrete values. Read bar heights against the y-axis gridlines.
- **Line chart:** trend over time. Slope matters — steeper means faster change.
- **Scatter plot:** correlation. Look for positive slope (as x increases, y increases), negative slope, or no pattern. Watch for outliers that distort the story.
- **Pie chart:** proportions of a whole. Slices should sum to 100%, but some pies on this test exclude an "other" category and sum to less — check.
- **Stacked bar:** sub-category trends within a total. The total bar height is one story, the composition is another. Questions usually target one or the other, not both.
- **Bubble chart:** three dimensions — x, y, and bubble size. The size encodes a third variable. Miss that and you are reading a 2D chart with random bubble sizes.
- **Dual-axis chart:** two different y-scales on one chart. Usually one series is bars and the other is a line, or two lines with distinct colors. Each series references only one axis. The trap is obvious: compare the two series directly when their scales differ.

### GI trap list

- **Dual-axis scale confusion.** Line A hits a peak at what looks like the same height as line B — but line A reads to the left axis and line B to the right, and the peaks are an order of magnitude apart.
- **Extrapolating trend beyond data.** "Based on the chart, what will 2030 revenue be?" The chart goes to 2024. Any extrapolation is a guess — but the test expects a specific linear or CAGR-style projection. Use the formula; do not eyeball.
- **Absolute vs rate.** A line showing "number of new customers per year" going up shows that the rate is positive. A line showing "total customers" going up shows the stock is growing. Flat rate plus positive stock is possible. Flat stock with positive rate is impossible. Check which quantity the y-axis encodes.

## Format 5: Two-Part Analysis

A prose setup followed by a table with two columns of candidate values and five or six rows. You pick one row for the first column and one row for the second column. Both must be right. No partial credit.

### Strategy: equations first, rows second

Do not start by plugging rows into the scenario. Start by understanding the relationship between the two columns. Write the equation or logical structure on your scratch pad. Only then do you scan the candidate rows.

Example: the prose describes a truck that travels distance D at speed S, and the columns are "travel time T" and "average speed S." The relationship is T = D/S. Set that up first. Now scan the rows — any pair where T × S does not equal D is eliminated instantly.

### The two common structures

**Quantitative TPA.** Rows are numeric values. The columns are two related quantities that must satisfy an equation from the prose. Your job is to find the pair that satisfies the constraint.

**Logic TPA.** Rows are statements. The columns are two logical roles — conclusion and assumption, strengthener and weakener, premise and inference. Your job is to assign the right statement to each role.

### TPA traps

- **The one-column match.** A row satisfies column 1's constraint beautifully. You select it. But it fails column 2's constraint. Defense: after you pick a row for each column, substitute both back into the prose and verify that both hold simultaneously.
- **The near-miss substitution.** A row looks right because the numbers are close. But "close" is not "correct" on a constraint problem. If the equation says T × S = 120 and your pair gives T × S = 118, that is wrong, not almost right.
- **The role swap on logic TPA.** The conclusion and the assumption can look similar when both are general statements. Ask: which sentence must be true for the argument to hold (assumption) versus which sentence is what the argument is trying to establish (conclusion). They are never the same statement.

## The DI Pacing Plan

The section average is 2 minutes 15 seconds per question. But not every format deserves the same budget. Here is the rough allocation I use:

- **DS:** 1:45 to 2:00 per question. These are the fastest format once you internalize the framework.
- **Table Analysis:** 2:00 per question. Sorting and scanning is mechanical once you know the trap list.
- **Graphics Interpretation:** 2:00 per question. The chart read is the slow part; the arithmetic is usually quick.
- **MSR:** 7:00 for the three-question set (about 2:20 per question). The upfront skim is the tax.
- **TPA:** 2:30 per question. These are dense — prose plus equation plus candidate scan.

Add it up for a representative mix (say 6 DS, 3 MSR, 4 TA, 4 GI, 3 TPA): 6(1:52) + 7:00 + 4(2:00) + 4(2:00) + 3(2:30) = 11:12 + 7:00 + 8:00 + 8:00 + 7:30 = 41:42. That leaves roughly three minutes of buffer on a 45-minute clock. Good.

### When to skip

If you are two minutes into a question and you do not see a path forward, flag it and move on. This is non-negotiable. Every extra minute you spend on a stuck question is a minute stolen from a question you could have gotten right. The test rewards quantity of correct answers, not quality of effort on any one problem.

Budget five to ten minutes of buffer time to revisit flagged questions at the end. If you have three flags and four minutes left, pick the two you think are most gettable and ignore the third.

## Calculator Discipline

The calculator is a tool. Tools have appropriate uses.

**Use the calculator when** the arithmetic is multi-step and the numbers are messy. Something like "what is 17% of 4,286, plus 9% of 3,150?" — that is calculator territory. Typing it once is faster than doing it mentally and less error-prone.

**Do not use the calculator when** the operation is single-step or pattern-based. "20% of 450" is 90 — mental math, half a second. "50 times 8" is 400 — mental math, half a second. If you reach for the calculator on those, you are giving away seconds because of low confidence in basic arithmetic. Build that confidence in practice.

**Calculator mistakes to watch for:**

- Misreading the display. 12,345 and 1,234.5 look similar at a glance. Scan the decimal.
- Mistyping. Every keystroke is a chance for a fat finger. Hit clear and retype if you sense an error; do not continue a calculation on a suspect value.
- Percentages as decimals. If you compute 20% of 150 by typing 20 × 150, you get 3,000, not 30. Use the % key, or type 0.2 × 150.

**Practice habit:** do your DI practice sets with no calculator first, to build mental math fluency. Then repeat the set with the calculator, to build speed on calculator-appropriate problems. The two-pass approach builds the judgment for when to reach for the tool.

## The Top 10 DI Traps

1. **Calculator over-use.** The question is "what is 25% of 80?" and you reach for the calculator. Twenty is a mental-math answer. Every wasted calculator reach is five seconds you will miss at the end of the section.
2. **Missing the unit.** Revenue in thousands, in millions, in billions — misread the unit and your entire answer is off by a factor of a thousand. Read column headers and axis labels explicitly, every time.
3. **Absolute vs percent change.** "Revenue grew by 50" and "revenue grew by 50%" are different statements. Table sub-statements exploit this constantly.
4. **"Must be" vs "could be."** A DS statement that allows the value to be 3 in one case and 5 in another is insufficient for a value question. But if the question asks "which of the following could be a value of x," the same information is compatible with multiple answers. Read the question phrasing carefully.
5. **Dual-axis scale confusion.** On a combo chart, two series look similar because they peak at the same visual height — but they reference different y-axes with different scales. Always read both axes.
6. **DS integer constraint missed.** The problem says "x is a positive integer" in the stem. You evaluate the statements with x as a general real number and get insufficient. But with the integer constraint, the same statement pins x down. Apply stem constraints to every statement evaluation.
7. **Yes/No DS incomplete case check.** You try x = 2, get "yes," and declare sufficient. You did not try x = -2 or x = 0 or x = 0.5. Always run at least two cases, ideally three if the statement allows edge cases.
8. **TPA one-column win.** You find a row that satisfies column 1 and pick it. You find another row that satisfies column 2 and pick it. You do not verify that the two picks are mutually consistent with the prose. They are not. Always substitute both back.
9. **MSR single-tab answer.** You find the answer in tab 1 and move on. The correct answer actually required combining tab 1 with a qualifier from tab 2. When an MSR answer looks easy, ask: did I check the other tabs for contradictions or qualifiers?
10. **Running out of time.** You spent four minutes on question 6 and now you have thirty seconds for questions 19 and 20. Flag, move on, come back. The section rewards you for finishing, not for solving any single problem elegantly.

### Closing note

The gap between a mediocre DI score and a strong one is not IQ. It is discipline in four specific places: reading units, running multiple cases on DS, verifying both columns on TPA, and moving on when stuck. Students who internalize those four habits add 20 to 40 points to their DI subscore inside two weeks of focused practice. Drill the formats, memorize the trap list, and trust the pacing plan. On test day, the work is already done — you are just executing.
