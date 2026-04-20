---
slug: graphics-interpretation
title: Graphics Interpretation
section: DI
estimated_minutes: 50
prerequisites: []
summary: |
  Graphics Interpretation tests two skills: reading values off a chart accurately, and computing simple derivatives (percentage change, ratio, average, difference) from those values. The charts come in six types — line graph, bar chart, pie chart, scatter plot, stacked bar, and combination — and each has its own reading discipline and trap patterns. Master the six chart-type templates and the five computation shortcuts, and every question becomes a 60-90 second exercise in careful extraction plus a tiny bit of arithmetic.
sections:
  - id: pretest
    type: pretest
    title: Try before you learn
    intro: |
      Before I teach you anything, try these two. It's fine to miss them — research shows that *attempting* questions before instruction primes your brain to encode the lesson better. Rate your confidence honestly; your calibration matters more than your accuracy right now.
    pretest_question_ids:
      - graphics-interpretation-q1
      - graphics-interpretation-q7

  - id: reading-charts-accurately
    type: reading
    title: "Reading charts accurately — axes, scale, and estimation"
    check_question_ids:
      - graphics-interpretation-q11
      - graphics-interpretation-q13

  - id: line-graphs-and-trends
    type: reading
    title: "Line graphs — trends, peaks, and rates of change"
    check_question_ids:
      - graphics-interpretation-q24
      - graphics-interpretation-q2

  - id: bar-charts-and-comparisons
    type: reading
    title: "Bar charts — absolute vs. relative comparisons"
    check_question_ids:
      - graphics-interpretation-q3
      - graphics-interpretation-q4

  - id: pie-charts-and-stacked-bars
    type: reading
    title: "Pie charts and stacked bars — proportions in context"
    check_question_ids:
      - graphics-interpretation-q7
      - graphics-interpretation-q8
      - graphics-interpretation-q18

  - id: scatter-plots-and-correlation
    type: reading
    title: "Scatter plots — correlation, outliers, and trend lines"
    check_question_ids:
      - graphics-interpretation-q5
      - graphics-interpretation-q15

  - id: computation-shortcuts
    type: reading
    title: "The five computation shortcuts that accelerate every question"
    check_question_ids: []

  - id: summary
    type: summary
    title: "The six chart types and the reading discipline"
    check_question_ids: []

problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - graphics-interpretation-q1
      - graphics-interpretation-q7
      - graphics-interpretation-q11
      - graphics-interpretation-q13
      - graphics-interpretation-q16
      - graphics-interpretation-q21
      - graphics-interpretation-q24
      - graphics-interpretation-q29
      - graphics-interpretation-q30
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - graphics-interpretation-q2
      - graphics-interpretation-q3
      - graphics-interpretation-q4
      - graphics-interpretation-q5
      - graphics-interpretation-q6
      - graphics-interpretation-q8
      - graphics-interpretation-q10
      - graphics-interpretation-q12
      - graphics-interpretation-q15
      - graphics-interpretation-q17
      - graphics-interpretation-q18
      - graphics-interpretation-q22
      - graphics-interpretation-q25
      - graphics-interpretation-q27
      - graphics-interpretation-q28
  hard:
    target_accuracy_by_score:
      "605": 25
      "645": 40
      "685": 60
      "725": 80
    question_ids:
      - graphics-interpretation-q9
      - graphics-interpretation-q14
      - graphics-interpretation-q19
      - graphics-interpretation-q20
      - graphics-interpretation-q23
      - graphics-interpretation-q26
---

## @reading-charts-accurately

Before you compute anything, you have to read the chart correctly. Three out of four errors on Graphics Interpretation come from misreading values — not from bad math.

**The three things to verify on every chart, every time, before touching any calculation:**

1. **What are the axes measuring?** Read the axis labels. Is the y-axis revenue in dollars, millions of dollars, or thousands? Is the x-axis months, years, or calendar quarters?
2. **What is the scale?** Does the y-axis start at 0 or at some truncated value (say, 100)? Is each grid line worth 10, 100, or 1000 units?
3. **What time period or category is represented?** Are we looking at all of 2024 or just Q1? All countries or just developed ones?

Most traps exploit a mismatch between what the question asks and what the chart actually shows. "Average revenue" might refer to *monthly* average when the data is quarterly — check what unit the question uses.

**Axis labels and the "missing zero" trap.** Many real-world charts (and many GMAT charts) start the y-axis at a non-zero value. A bar that "looks" twice as tall as another might reflect only a 10% difference — because the y-axis starts at, say, 100 and goes to 200, not 0 to 200.

Always look at the y-axis number at the bottom of the chart. If it's not 0, the visual proportions are misleading. Compute actual values before declaring one bar "much bigger."

**Estimation is usually fine — precision is usually wasteful.** Most GMAT Graphics Interpretation answer choices are spaced far apart (1.5, 1.8, 2.1, 2.5, 3.0). You don't need three-decimal accuracy. Read values to the nearest grid line and compute.

**Example.** A line graph shows revenue from 85 to 180 across 12 months. The answer choices for "ratio of highest to lowest revenue" are 1.5, 1.8, 2.1, 2.5, 3.0. Highest ≈ 180, lowest ≈ 85. Ratio ≈ 180/85 ≈ 2.12. Pick 2.1. No need to try for 2.117.

**Reading data off a chart: three techniques.**

- **For exact values:** use gridlines. Count squares from a known reference (the axis, a labeled data point) to the target.
- **For "between values":** estimate to the nearest gridline or half-gridline. If the bar reaches between 120 and 130, call it 125.
- **For very rough estimates:** compare the target to a known reference (e.g., "that bar is about half the height of this one, which is 80, so ~40").

**The two-step read for every question.** First, identify what data points the question requires (maybe two months' revenue, or two countries' populations). Extract those values. Only then do the computation. Mixing extraction with arithmetic causes mistakes — separate the steps.

**Chart conventions to internalize:**

| Chart type | Best for | Watch out for |
|---|---|---|
| Line graph | Trends over time, rates of change | Non-zero y-axis origin; multiple lines can cross |
| Bar chart | Comparing discrete categories | Vertical vs horizontal bars; category order; grouped bars |
| Pie chart | Proportions of a whole | Angles are hard to read precisely; % is often labeled |
| Scatter plot | Correlation between two variables | Outliers; clusters; trend lines vs raw data |
| Stacked bar | Breakdown of totals over categories | Reading *segment* height vs *total* height |
| Bubble chart | Three variables simultaneously | Bubble *area* (not diameter) represents the third variable |

> **Recall check.** Cover this section. Now list the three things to verify on every chart before you compute. Now list the three chart types where a non-zero y-axis origin is likely to mislead visually. (Answers: axes-units-scale, then time-period-category; all three of line, bar, stacked-bar can do this.) Forced retrieval of the chart-reading checklist is what makes this skill automatic on test day.

> **Trap to watch.** Bubble charts represent the third variable by bubble **area**, not bubble *diameter*. A bubble that looks "twice as wide" as another is actually **four times as big** in area. This is almost always the trap on bubble-chart questions.

## @line-graphs-and-trends

Line graphs plot a variable (y-axis) over a continuous index (x-axis, usually time). The questions ask four kinds of things: values at specific points, trends (increasing/decreasing), rates of change (slope), or comparisons between periods.

**The four question types on line graphs.**

1. **Point read.** "What was revenue in March?" Read the y-value at x = March.
2. **Trend identification.** "Which quarter shows the steepest increase?" Look for the segment with the largest y-change.
3. **Rate comparison.** "How does the rate of change in Q1 compare to Q2?" Compute slope as (y2 - y1) / (x2 - x1) for each period.
4. **Average over a range.** "What was the average monthly revenue for Q2?" Read values for April, May, June; average them.

**The "steepness" shortcut for rate questions.** The slope of a line segment equals the *visual* steepness. On a chart with a consistent scale, steeper = larger rate of change. Just eyeball.

**Example.** "During which month did revenue grow the most?" Look at the line graph and find the segment with the biggest visible jump. That's your answer — no computation needed.

**Peak and trough identification.** The highest y-value on the curve is the peak (maximum); the lowest is the trough (minimum). Easy questions often ask to compute "peak minus trough" or "peak divided by trough." Read both and do the arithmetic.

**Example.** Monthly revenue: Jan 85, Feb 92, Mar 110, Apr 125, May 140, Jun 155, Jul 170, Aug 165, Sep 150, Oct 135, Nov 120, Dec 180.

- Peak: Dec 180.
- Trough: Jan 85.
- Ratio: 180/85 ≈ 2.12.
- Difference: 180 - 85 = 95.

**Quarterly averages.** Q1 (Jan-Mar): (85+92+110)/3 = 287/3 ≈ 95.7. Q2: (125+140+155)/3 = 140. Q4: (120+135+180)/3 = 145.

**The "compare two periods" pattern.** "Was growth stronger in H1 or H2?" Compute H1 (last value - first value in H1) vs H2. Often one answer is clear — the side with a bigger jump is the winner.

**Multiple lines on one graph.** Each line is a different series (maybe two products, two companies, two time periods). Questions often ask when one line crosses another, or when one is higher/lower. Find the intersection visually and read off the x-value.

**Rate vs. absolute change trap.** "Biggest rate of change" is measured by **slope** (change per unit time). "Biggest absolute change" is just the difference between two points, regardless of time. A 10-unit increase over 2 months is a bigger rate than a 10-unit increase over 5 months, even though the absolute change is the same.

> **Self-explanation prompt.** Why does "rate of change" equal slope on a line graph? If you can say "because slope is defined as change in y per unit change in x — which is exactly the rate at which the variable is changing per unit time," you've internalized why visual steepness corresponds directly to the quantity the question asks about.

## @bar-charts-and-comparisons

Bar charts compare values across discrete categories. The single most important distinction on bar-chart questions: **absolute vs. relative comparisons.**

**Absolute comparison:** "Which country had the largest population increase?"

Compute each country's increase (new - old). The country with the largest *number* wins.

**Relative (percentage) comparison:** "Which country had the largest *percentage* population increase?"

Compute each country's increase as a fraction of its starting value. The country with the largest *fraction* wins — and this is often a different country from the absolute winner.

**Example.** Population (in millions) for 2020 and 2024:

| Country | 2020 | 2024 | Absolute Δ | % Δ |
|---|---|---|---|---|
| A | 45 | 50 | +5 | 11.1% |
| B | 80 | 82 | +2 | 2.5% |
| C | 30 | 38 | +8 | 26.7% |
| D | 120 | 115 | -5 | -4.2% |
| E | 25 | 35 | +10 | 40.0% |

Absolute winner: Country E (+10). Percentage winner: Country E (+40%). In this case they coincide.

But consider a different dataset: A goes from 1000 to 1100 (absolute +100, relative +10%), C goes from 10 to 30 (absolute +20, relative +200%). Absolute winner: A. Percentage winner: C. Opposite answers.

**The percentage-change formula:** % change = (new - old) / old × 100.

Always divide by the *starting* value. Dividing by the new value (or by their sum) gives wrong answers that are often present in trap options.

**Bar chart trap: comparing bars from different groups.** Grouped bar charts show multiple bars per category (e.g., "2020 population" and "2024 population" for each country). Students sometimes compare apples and oranges — reading the 2020 value of Country A as if it were the 2024 value of Country C. Always verify which bar you're reading.

**Horizontal vs. vertical bars.** Some bar charts are horizontal (categories on y-axis, values on x-axis). Same math; just rotated. Don't let the orientation trick you.

**Stacked bars — a different beast (covered next section).** Regular bar charts show separate bars per value. Stacked bars show each bar *split into segments*. Different reading rule.

**The "median category" pattern.** If a bar chart has 5 categories and you're asked for the median category, sort by height and pick the 3rd. Count carefully — don't just guess based on visual appearance if the values are close.

**The "above the average" pattern.** Compute the average of all bars. Then count how many bars are above that average. Often the answer is a count (2 out of 5, 3 out of 7) rather than a percentage.

> **Recall check.** Without looking, state the percentage-change formula. Now apply it: if value goes from 80 to 120, what's the percentage change? (Answer: (120-80)/80 = 50%.) Now apply it the wrong way: would dividing by 120 give 33.3%? Yes — but that's the answer to "120 is 33% more than 80" framed wrong. Knowing to always divide by the *starting* value prevents 20% of bar-chart errors.

## @pie-charts-and-stacked-bars

Pie charts and stacked bars both show proportions of a whole — but they do it differently, and each has its own reading discipline.

### Pie charts

**Every slice is labeled with its percentage** (or the chart has a legend with percentages). Don't try to estimate from the angle — angles are hard to read precisely. Use the labels.

**Core operations on pie charts:**

- **% of total:** read the label directly.
- **Dollar or unit value of a slice:** multiply the total (given in the question or chart title) by the slice's percentage.
- **Ratio of two slices:** divide their percentages. If slice A is 30% and slice B is 20%, A:B = 30:20 = 3:2.
- **Slices summing to…:** add percentages. "What % is urban or suburban?" → add the urban and suburban slices.

**Example.** Pie chart of household expenses: Housing 30%, Food 18%, Transportation 15%, Healthcare 10%, Utilities 8%, Other 19%. Total monthly budget: $4,500.

- Housing dollars: $4,500 × 0.30 = **$1,350**.
- Food + Transportation: 18 + 15 = 33% → $4,500 × 0.33 = **$1,485**.
- Ratio of Healthcare to Utilities: 10:8 = **5:4**.

**The "find what the chart doesn't tell you" pattern.** Sometimes the slices add to 95% and the question asks about the missing 5% ("Other"). Read all labeled slices, sum, subtract from 100 to find the unlabeled piece.

**Two pie charts side-by-side.** Common on medium/hard questions. "Comparing 2020 vs 2024 pie charts." A slice can grow in *percentage* while shrinking in *dollar value* (if the total shrank). Always check: is the question asking about percentages, or absolute amounts? If absolute, you need the total for each chart, not just the percentages.

### Stacked bar charts

A stacked bar shows a total value as a **stack of segments**, where each segment is one category's contribution.

**Core operations on stacked bars:**

- **Total for a bar:** read the TOP of the bar on the y-axis.
- **Size of one segment:** read the height of that specific segment (difference between its top and bottom on the y-axis).
- **Proportion of one segment within a bar:** segment height / total bar height.

**Example.** Stacked bar for 2024 department budget: Salaries segment goes from 0 to 600 (height 600), Operations from 600 to 900 (height 300), Marketing from 900 to 1,000 (height 100). Total budget: 1,000.

- Salaries: 600 (60% of total)
- Operations: 300 (30% of total)
- Marketing: 100 (10% of total)

**The "reading segment height" trap.** Students read a segment's *top position* instead of its *height*. Operations in the example is NOT 900 — it's 300 (the segment from 600 to 900). Always compute segment height as (segment top) - (segment bottom).

**Comparing proportions across bars.** On a stacked bar with multiple bars (e.g., departments over multiple years), the *proportion* of any segment within its bar is independent of the total bar size. Comparing segment proportions requires computing each one as a fraction of its own bar's total.

**100%-stacked bars.** A variant where each bar is scaled to 100% — so all bars are the same height, and segments show percentages directly. Easier to compare proportions visually. But you lose absolute-size information.

> **Trap to watch.** On stacked bars, "the bar for Department X grew 50% from 2020 to 2024" refers to the *total* bar height, not any one segment. A department's total could grow while one segment (e.g., salaries) shrinks. Always clarify: is the question about total or segment?

## @scatter-plots-and-correlation

Scatter plots show individual data points as dots in a 2D grid. Each dot is a case (a person, a country, a company); the x-coordinate and y-coordinate are two measured attributes.

**The three question types on scatter plots.**

1. **Correlation strength.** "Is there a positive, negative, or no correlation between X and Y?"
2. **Outlier identification.** "Which data point lies farthest from the general trend?"
3. **Specific-point read.** "What is the y-value of the point with the largest x-value?"

**Correlation in 15 seconds.**

- **Positive correlation:** as x increases, y tends to increase. Points cluster along an upward-sloping line.
- **Negative correlation:** as x increases, y tends to decrease. Points cluster along a downward-sloping line.
- **No correlation:** points are scattered with no clear trend. Random-looking cloud.
- **Strong correlation:** points hug the trend line tightly.
- **Weak correlation:** points loosely follow a trend but have lots of spread.

**The "imaginary line" technique.** Squint at the scatter plot. Does an imaginary line rise, fall, or neither? That's your correlation direction. How tightly do the points hug the line? That's your correlation strength.

**Correlation ≠ causation.** A scatter plot showing that cities with more coffee shops have higher GDP doesn't prove that coffee shops cause GDP (or vice versa). Both could be driven by a third factor (population density). On GMAT, if the question asks about a causal relationship, scatter-plot correlation is *consistent with* but doesn't *prove* causation.

**Outlier identification.** Outliers are points that deviate substantially from the trend. Specifically, points that are very far from the imaginary trend line. Scan the scatter plot for isolated points that don't fit the cluster.

**Example.** Most points follow a clear positive trend: (2, 3), (3, 5), (4, 7), (5, 8), (6, 10). But one point is (10, 2) — far to the right, very low. That's the outlier.

**The "number of data points in a region" pattern.** Questions often ask: "How many data points have x > 5 AND y > 10?" Count the points in the specified region of the scatter plot. No computation — just careful counting.

**Trend-line questions.** Some scatter plots include a drawn trend line (or best-fit line). Questions may ask the slope of this line, or which data point lies farthest *above* vs *below* the line. Read carefully.

**The "clusters" reading.** Sometimes a scatter plot has two or more clusters — groups of points that hang together. This usually indicates two subpopulations (maybe male vs female, treatment vs control). Questions may ask about each cluster's behavior.

> **Self-explanation prompt.** Why is correlation not proof of causation? If you can say "because both correlated variables might be driven by a third variable, or the causation might run in the opposite direction, or the correlation might be coincidence," you've internalized why scatter plots show associations but not causal structure. This matters both for scatter-plot questions and for every Critical Reasoning causation question.

## @computation-shortcuts

Most Graphics Interpretation questions require small amounts of arithmetic after you've read the chart. Five shortcuts make this arithmetic fast.

**Shortcut 1: The percent-change formula, done mentally.**

% change = (new - old) / old × 100.

For round numbers, this is one division:

- From 80 to 120: change is 40, so 40/80 = 0.5 = **+50%**.
- From 40 to 50: change is 10, so 10/40 = 0.25 = **+25%**.
- From 120 to 96: change is -24, so -24/120 = -0.2 = **-20%**.

For non-round numbers, estimate: "140 to 170 is about +30 on a base of 140, so about 30/140 ≈ 20%."

**Shortcut 2: Ratio of two values, simplified.**

To compare "ratio of A to B" with answer choices, reduce:

- 180:85 → divide by 5 → 36:17 ≈ 2.12
- 240:96 → divide by 48 → 5:2 = 2.5

Look for common factors; divide by them. GMAT ratios often reduce to clean numbers.

**Shortcut 3: Average of a few values.**

For 3 values, average = sum/3. For evenly-spaced values (arithmetic sequence), average = middle value OR (first + last)/2.

**Example.** Revenue for Jan (85), Feb (92), Mar (110). Average: (85+92+110)/3 = 287/3 ≈ **95.7**.

**Example (evenly spaced).** Sales quarterly: 100, 150, 200, 250. Average: (100+250)/2 = **175**. No need to sum all four.

**Shortcut 4: Fraction of a whole.**

If the total is 4500 and one category is 18%, that category is 4500 × 0.18 = 4500/100 × 18 = 45 × 18 = **810**. Break down: 45 × 18 = 45 × 20 - 45 × 2 = 900 - 90 = 810.

**Shortcut 5: "Smart numbers" for percent problems.**

When the chart gives percentages but no absolute values, pick a convenient total (100 or 1000) and compute. Then if the question asks for a ratio or a percent, your answer is independent of the total you picked.

**Example.** Pie chart: Urban 45%, Suburban 30%, Rural 25%. Question: "What percent of non-rural population is urban?"

Pick total = 100. Urban = 45, Suburban = 30, Rural = 25. Non-rural = 75. Urban as % of non-rural = 45/75 = **60%**.

**The "don't compute what you don't need" principle.** If the question asks for a ratio, you don't need the absolute values. If it asks for a rank ("which country has the most growth?"), you don't need exact growth amounts — just relative magnitudes. Always look at the question first and figure out the minimum arithmetic required.

> **Recall check.** Without peeking, state the percent-change formula. Now, mentally: revenue went from 150 to 210. What's the percent change? (Answer: (210-150)/150 = 60/150 = 40%.) Now: revenue went from 210 to 150. What's the percent change? (Answer: (150-210)/210 = -60/210 ≈ -28.6%.) Note how the two directions give different percent-changes even though the raw change is the same ±60 — because the base differs. This asymmetry is a frequent trap.

## @summary

Graphics Interpretation is two skills: reading values accurately and doing a tiny bit of arithmetic on those values. The six chart types and the five computation shortcuts cover every question.

**The three pre-computation checks (every chart, every time):**

1. Axis labels — what units, what scale?
2. Origin — does the y-axis start at 0?
3. Time period / categories — what is actually shown?

**The six chart types and their signature operations:**

| Chart | Main operation | Signature trap |
|---|---|---|
| Line graph | Read values, compute trends/rates | Non-zero origin exaggerates changes |
| Bar chart | Compare absolute vs. relative changes | Confusing "biggest" (absolute) with "fastest growth" (relative) |
| Pie chart | Use labeled percentages; compute dollar values | Missing "Other" category; comparing two pies with different totals |
| Stacked bar | Segment height = top - bottom of segment | Reading segment top as its value |
| Scatter plot | Correlation direction + strength; outliers | Confusing correlation with causation |
| Bubble chart | Three variables; bubble *area* represents the third | Reading bubble diameter instead of area |

**The five computation shortcuts:**

1. Percent change = (new - old) / old × 100.
2. Ratio reduction — find common factors.
3. Evenly-spaced average = middle value or (first+last)/2.
4. Percent of total = total × percent/100.
5. Smart numbers (pick 100 or 1000) for proportion problems.

**Time-management targets.**

- Easy Graphics: 45-60 seconds.
- Medium Graphics: 60-90 seconds.
- Hard Graphics: up to 2 minutes.

The majority of time on these questions should be spent *reading*, not computing. If you're computing for more than 30 seconds, you've probably misread something — step back, re-read the axes, and restart.

**The one big discipline that separates 685 scorers from 605 scorers:** take the extra 10 seconds at the start to verify the axes and scale. Almost every wrong answer in this topic comes from misreading the chart, not from bad arithmetic.
