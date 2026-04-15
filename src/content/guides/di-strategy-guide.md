---
title: Data Insights Strategy Guide
description: Frameworks for all five DI question types. The section most people underprepare for — and the one where preparation pays the biggest dividends.
section: DI
type: reference
---

# Data Insights Strategy Guide

**20 questions in 45 minutes (~2:15 per question).** Five question types: Data Sufficiency, Multi-Source Reasoning, Table Analysis, Graphics Interpretation, Two-Part Analysis. **Calculator IS available.** Use it for complex arithmetic, but don't become dependent on it.

---

## Universal DI Tips

1. **Read the question first (for MSR and Table Analysis).** This tells you what to look for in the data.
2. **Use the calculator strategically.** For simple arithmetic, mental math is faster.
3. **Estimate before computing.** If answer choices are far apart, you often don't need exact values.
4. **Watch the units.** $M vs. $K, thousands vs. millions, miles vs. kilometers — units are a common trap.
5. **Know when to guess.** If you're stuck for 2:30+, guess and move on.

---

## 1. Data Sufficiency (DS)

### The Question
You're given a question and two statements. You must determine whether the statements provide enough information to answer the question.

### The Five Answer Choices (Always the Same)
- **(A)** Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- **(B)** Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- **(C)** BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- **(D)** EACH statement ALONE is sufficient.
- **(E)** Statements (1) and (2) TOGETHER are NOT sufficient.

### The Elimination Framework

**Step 1:** Evaluate Statement (1) alone.
- Sufficient? Eliminate B, C, E → answer is **A or D**
- Not sufficient? Eliminate A, D → answer is **B, C, or E**

**Step 2:** Evaluate Statement (2) alone.
- Combined with Step 1:
  - (1) Sufficient, (2) Sufficient → **D**
  - (1) Sufficient, (2) Not → **A**
  - (1) Not, (2) Sufficient → **B**
  - (1) Not, (2) Not → Evaluate TOGETHER → **C** or **E**

### The Golden Rule
**You are not solving for a value. You are determining whether you COULD solve for it.**

If a statement gives you a unique value for the variable, it's sufficient. You don't need to calculate the actual number.

### Common DS Traps

**Trap 1: Forgetting constraints.** The question stem often has constraints (e.g., "x is a positive integer," "y > 0"). These apply to both statements and can change sufficiency.

**Trap 2: "Obvious" C.** When both statements individually seem insufficient, it's tempting to pick C. But sometimes they're ALSO insufficient together (leading to E). Always verify that combining actually helps.

**Trap 3: Not recognizing sufficiency.** If the answer to a Yes/No question could only be Yes or only be No (not both), that's sufficient. If it could be both, it's not sufficient.

**Trap 4: Doing algebra unnecessarily.** Sometimes you can just test values: try 2 and 3, see if you get the same answer. If yes, likely sufficient.

### DS Tactical Tips
- For **value questions** ("What is x?"), sufficient = you can pinpoint ONE value
- For **Yes/No questions** ("Is x > 0?"), sufficient = you always get the same answer
- Try plugging in test values (small integers, negative numbers, zero, fractions)
- Don't waste time calculating the actual answer if you can see that a unique answer exists

---

## 2. Multi-Source Reasoning (MSR)

### The Format
You'll see 2-3 tabs containing related information (emails, reports, data tables, articles). Questions ask you to synthesize information across tabs.

### The MSR Approach

**Step 1: Skim all tabs first (60-90 seconds total).**
Don't read every word. Get a sense of:
- What each tab contains
- How the tabs relate to each other
- Where key data points are

**Step 2: Read the question carefully.** Identify which tabs are relevant.

**Step 3: Cross-reference.**
Most MSR answers require combining data from multiple tabs. Tab 1 might give you a number, Tab 2 might give context for what that number means.

### MSR Question Types
- **Evaluate a Claim:** "Is this statement supported by the information?" Yes/No for each statement.
- **Infer a Value:** "What would be the total cost if...?" Requires combining data from tabs.
- **Identify a Relationship:** "Which of the following best describes the connection between...?"

### MSR Tips
- **Tab order matters.** Later tabs often modify or reference earlier tabs.
- **Watch for dates, conditions, and qualifiers.** "Only if X" or "Starting next month" affects what information applies.
- **Don't assume.** If a tab doesn't state something, it's not true for the question.
- **Time investment pays off.** The first 60 seconds skimming saves 2-3 minutes on individual questions.

---

## 3. Table Analysis

### The Format
A sortable data table with 2-3 statements. For each statement, select Yes if it's supported by the data, No if it's not.

### The Table Approach

**Step 1: Scan the table structure.**
- Note column headers and units
- Note how many rows
- Identify any pre-sorted order (ascending, descending)

**Step 2: For each statement, determine which column(s) matter.**
- Which column does the statement reference?
- Is it comparing columns?
- Is it asking about max/min, averages, or counts?

**Step 3: Sort mentally (or use the sort feature).**
- For "highest," "lowest," "top N" questions, sort by the relevant column
- For comparative questions, scan the two columns side by side

### Common Table Question Patterns

**Pattern 1: Ranking**
"The company with the highest X also has the lowest Y."
- Sort by X (descending), find the top, check its Y value, verify it's the lowest

**Pattern 2: Threshold**
"More than half of the entries have X > Y."
- Count entries where X > Y, compare to half the total

**Pattern 3: Range**
"The range of values in column X is greater than 50."
- Find max and min of column X, subtract

**Pattern 4: Correlation**
"Entries with higher X tend to have higher Y."
- Sort by X, check if Y trends upward (roughly)

### Table Analysis Tips
- Read column headers CAREFULLY — "Revenue ($M)" is different from "Revenue Growth (%)"
- Watch the quantifiers: "at least" = ≥, "more than" = >, "most" = > 50%
- Don't eyeball — use the sort feature for precision
- When in doubt, check systematically row by row

---

## 4. Graphics Interpretation

### The Format
A graph (line, bar, scatter, pie) with fill-in-the-blank or multiple choice questions.

### The Graph Reading Framework

**Step 1: Read the title and axis labels.**
- What's being measured?
- What are the units?
- What's the time frame?

**Step 2: Note the scale.**
- Does the y-axis start at 0 or some other value?
- A non-zero baseline makes differences LOOK larger than they are

**Step 3: Answer the question.**
- Estimate if answer choices are far apart
- Calculate precisely if answer choices are close

### By Graph Type

**Line Graph**
- Focus on: trends, peaks, valleys, slopes
- Slope = rate of change (steeper = faster change)

**Bar Chart**
- Focus on: heights for values, comparisons
- Stacked bars: look at both segments AND totals

**Scatter Plot**
- Focus on: correlation (positive, negative, none), outliers, clusters
- Linear trend line (if present) shows the average relationship

**Pie Chart**
- Focus on: proportions (each slice = % of whole)
- Exact values require multiplying the % by the total

**Histogram**
- Focus on: distribution shape, median/mean location
- Width of bars = range of values in that bin

### Graphics Interpretation Tips
- "Closest to" allows estimation — don't over-calculate
- Pay attention to: value, change, or percentage? These are different questions.
- When interpolating between data points, use halfway as a starting estimate
- Always double-check the units before selecting an answer

---

## 5. Two-Part Analysis (TPA)

### The Format
A scenario with a two-column answer grid. You pick one option per column, and both must be correct.

### TPA Subtypes

**Quantitative TPA:**
- Two related math problems
- Example: "Find x and y such that 3x + 2y = 17 and x − y = 1"
- Solving one part constrains the other

**Logic-Based TPA:**
- Two logically consistent claims
- Example: "Identify the conclusion and the assumption"
- Or: "Identify a statement that strengthens and one that weakens"

### The TPA Approach

**Step 1: Read the scenario carefully.**
- What does each column represent?
- Are they independent or related?

**Step 2: Understand the relationship.**
- For quantitative: what equation(s) link the two values?
- For logic-based: what role does each answer play?

**Step 3: Solve one column first.**
- Usually the easier one
- It often narrows the options for the other

**Step 4: Verify consistency.**
- Do both answers make sense together?
- Plug them back into the scenario to double-check

### TPA Tips
- **Getting one right and one wrong gets you ZERO credit.** Both must be correct.
- For quantitative: write out the equations before guessing
- For logic-based: identify what role each statement plays (premise, conclusion, assumption, etc.)
- Don't rush — TPA questions are often the most time-consuming in DI

---

## DI Timing Strategy

Budget time by question type:
- **DS:** 2:00 per question (these should be fastest — you're evaluating sufficiency)
- **MSR:** 2:30 per question (tab-reading takes time upfront)
- **Table:** 2:00 per question (systematic scanning)
- **GI:** 2:00 per question (estimation saves time)
- **TPA:** 2:30 per question (most time-consuming)

**Average target:** 2:15 per question (20 questions in 45 minutes).

---

## Common DI Mistakes

1. **Spending too long on DS.** Beyond 2:00, you're overcomplicating it. Trust your instinct and move on.
2. **Reading only one MSR tab.** The answer almost always requires cross-referencing.
3. **Misreading table data.** Mixing up rows, columns, or units.
4. **Ignoring graph scale.** A bar that looks twice as tall might only be 10% higher.
5. **Partial TPA credit = no credit.** Check BOTH parts before submitting.
6. **Over-relying on the calculator.** Simple arithmetic is faster mentally.

---

## Quick Reference: When to Use the Calculator

**Use it:**
- Division with 3+ digit numbers
- Percentages of awkward numbers (e.g., 17% of 2,345)
- Compound calculations across multiple steps
- Anything where you've already decided the approach but need the final number

**Don't use it:**
- Simple arithmetic (30% of 100, 50 + 25)
- Estimations ("closest to")
- Checking order of magnitude
- Decisions where you'd rather just try different values
