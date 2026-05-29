---
slug: graphics-interpretation
title: Graphics Interpretation
section: DI
estimated_minutes: 55
prerequisites: []
summary: |
  Graphics Interpretation tests two skills: reading values off a chart accurately, and computing simple derivatives (percentage change, ratio, average, difference) from those values. Every question follows the same three-step protocol: audit the axes, extract the exact values the question requires, then apply one formula. The six chart types each have one signature trap — learn the trap, run the protocol, and every GI question becomes a structured 60–90 second exercise.
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
    title: "The GI Protocol — audit, extract, compute"
    intro: |
      Every GI question follows the same three-step protocol: **Audit → Extract → Compute**. Students who skip the Audit misread the chart. Students who mix Extract with Compute make arithmetic errors. Run the steps in order on every question — it takes 10 extra seconds at the start and eliminates the entire category of errors that comes from misreading, not from bad math.
    check_question_ids:
      - graphics-interpretation-q11
      - graphics-interpretation-q13

  - id: line-graphs-and-trends
    type: reading
    title: "Line graphs — trends, peaks, and rates of change"
    intro: |
      Line graphs test slope reasoning, not just data retrieval. Students who only look up point values miss rate-of-change questions entirely. This section gives you the four question types, the visual shortcut for comparing rates, and the absolute-vs-rate distinction that accounts for the majority of line-graph errors.
    check_question_ids:
      - graphics-interpretation-q24
      - graphics-interpretation-q2

  - id: bar-charts-and-comparisons
    type: reading
    title: "Bar charts — absolute vs. relative comparisons"
    intro: |
      The "biggest vs. fastest-growing" trap appears in the majority of medium and hard bar-chart questions. Two categories can produce opposite answers depending on whether the question asks for absolute change or percentage change — and the test always plants the wrong answer for whichever comparison you default to. This section makes the distinction automatic before that mistake costs you points.
    check_question_ids:
      - graphics-interpretation-q3
      - graphics-interpretation-q4

  - id: pie-charts-and-stacked-bars
    type: reading
    title: "Pie charts and stacked bars — proportions in context"
    intro: |
      Pie charts and stacked bars both represent proportions, but they obey different reading rules. Treating them as the same chart type causes two entirely separate mistake classes. This section gives each its own discipline — and the stacked-bar segment-height trap is the single most exploitable error across all DI chart types.
    check_question_ids:
      - graphics-interpretation-q7
      - graphics-interpretation-q8
      - graphics-interpretation-q18

  - id: scatter-plots-and-correlation
    type: reading
    title: "Scatter plots — correlation, outliers, and trend lines"
    intro: |
      Scatter plots are the only GI chart type that tests reasoning, not just reading. The correct answer to a causation question is almost always "consistent with but does not prove" — and the test exploits students who treat observed correlation as established cause. Get the reasoning frame right first; the chart reading follows naturally.
    check_question_ids:
      - graphics-interpretation-q5
      - graphics-interpretation-q15

  - id: computation-shortcuts
    type: reading
    title: "The five computation shortcuts that accelerate every question"
    intro: |
      GI arithmetic is almost always simple — one percent-change, one ratio, one average. The question is whether you reach for the right formula immediately or spend 30 seconds doing multi-step arithmetic you didn't need. These five shortcuts compress the computation phase to 15–20 seconds, leaving your budget for the chart read where it belongs.
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

**The three-step GI Protocol.**

Every Graphics Interpretation question — regardless of chart type — runs through the same three steps:

1. **Audit (10 seconds):** verify the axes, scale, and origin before reading any values.
2. **Extract (30 seconds):** locate only the data points the question asks about.
3. **Compute (15–20 seconds):** apply a single formula to the extracted values.

If you get a wrong answer, trace which step failed. Most failures happen in Step 1 (axis misread) or Step 2 (extracted the wrong bar or time period). Almost none happen in Step 3 — the arithmetic is nearly always trivial.

**Step 1: The Axis Audit.** Three things to verify on every chart, every time, before touching any calculation:

1. **Axis labels:** What is the y-axis measuring? Revenue in dollars, millions, or thousands? Time in months or quarters?
2. **Scale and origin:** Does the y-axis start at zero or at a truncated value (say, 80 or 100)? What is each gridline worth?
3. **Scope:** What time period or category set does this chart show? All countries, or only developed ones?

Most traps exploit a mismatch between what the question asks and what the chart actually shows. The Audit catches them before they cost you.

**The "missing zero" trap.** A bar that looks twice as tall as another might represent only a 10% difference — if the y-axis starts at 100 instead of 0. A chart ranging from 100 to 200 makes a bar at 120 look close to the minimum when it is actually 20% above it.

Always check the y-axis minimum. If it is not 0, visual proportions mislead. Compute actual values using gridline numbers, not bar heights.

**Trap to watch.** On any truncated-axis chart, visual comparisons ("twice as big," "half as tall") are unreliable. Two bars that look like 2:1 might be 120:110 — a ratio of 1.09. Do the arithmetic.

**Step 2: Extraction discipline.** Before reading any value, re-read the question and confirm:

- Which data points? (Country A in 2020 and 2024 — not Country B)
- Which axis? (left or right, on dual-axis charts)
- Which unit? (if the label says "thousands," multiply your gridline value)

Extract only what the question requires. Reading extra values wastes time and creates mixing errors.

**Step 3: Estimation is usually fine.** Most GI answer choices are spaced far apart (1.5, 1.8, 2.1, 2.5, 3.0). You rarely need three-decimal precision. Read to the nearest gridline and compute.

**Worked example.** A line graph shows revenue from 85 to 180 across 12 months. Answer choices for "ratio of highest to lowest revenue": 1.5, 1.8, 2.1, 2.5, 3.0. Highest ≈ 180, lowest ≈ 85. Ratio ≈ 180/85 ≈ 2.12. Pick 2.1. No need to compute 2.117.

For values that fall between gridlines, estimate to the nearest half-gridline. If answer choices are 120, 125, 130, 140 — use half-gridline precision. If they are 90, 125, 160, 210 — your rough estimate is enough.

**Chart conventions at a glance:**

| Chart type | Best for | Watch out for |
|---|---|---|
| Line graph | Trends over time, rates of change | Non-zero origin; multiple lines crossing |
| Bar chart | Comparing discrete categories | Truncated origin; grouped bars mixing categories |
| Pie chart | Proportions of a whole | Use labeled percentages — don't estimate from angles |
| Scatter plot | Correlation between two variables | Outliers; correlation ≠ causation |
| Stacked bar | Breakdown of totals over categories | Segment *height*, not segment *top position* |
| Bubble chart | Three variables simultaneously | Bubble *area* represents the third variable, not diameter |

**Micro-drill.** Three chart-read scenarios — apply the Protocol, 60 seconds total:

1. A bar chart has a y-axis starting at 50 (not 0) and ending at 150. Bar A reaches the 130 mark; Bar B reaches the 90 mark. What is the ratio of A's actual value to B's actual value? → ___
2. A line graph is labeled "Revenue (thousands of dollars)." The peak point sits on gridline 8.5. What is the actual peak revenue? → ___
3. A stacked bar's total height is 200. The bottom segment (Salaries) ends at 120. The middle segment (Operations) ends at 170. What is the size of the Operations segment? → ___

Answers: (1) **130/90 ≈ 1.44** — read the actual y-axis values, not the visual bar heights. (2) **$8,500** — 8.5 × 1,000 = 8,500. (3) **50** — the segment runs from 120 to 170; its height is 170 − 120 = 50, not 170. If (3) tripped you, you read the top position instead of the height — that is the stacked-bar trap covered in a later section.

> **Recall check.** Cover this section. State the three steps of the GI Protocol in order, with a one-sentence description of each. Then list the three items in the Axis Audit. If you paused or looked back, run it again until it flows in under 20 seconds. That is the pace required on test day.

> **Self-explanation prompt.** Why does running the Audit before any calculation matter, rather than reading the chart and computing on first impression? If you can say "because an axis misread compounds — every number you extract will be wrong, and you cannot catch the error after the fact," the Protocol becomes mandatory rather than optional.

## @line-graphs-and-trends

Line graphs plot a variable (y-axis) over a continuous index (x-axis, usually time). The questions ask four kinds of things: values at specific points, trends (increasing/decreasing), rates of change (slope), or comparisons between periods.

**The four question types on line graphs.**

1. **Point read.** "What was revenue in March?" Read the y-value at x = March.
2. **Trend identification.** "Which quarter shows the steepest increase?" Look for the segment with the largest y-change.
3. **Rate comparison.** "How does the rate of change in Q1 compare to Q2?" Compute slope as (y2 − y1) / (x2 − x1) for each period.
4. **Average over a range.** "What was the average monthly revenue for Q2?" Read values for April, May, June; average them.

**The "steepness" shortcut for rate questions.** On a chart with consistent x-axis spacing, steeper segment = larger rate of change. Just eyeball it.

**Example.** "During which month did revenue grow the most?" Find the segment with the biggest visible jump. That is your answer — no computation needed when the spacing is even.

**Peak and trough identification.** The highest y-value is the peak; the lowest is the trough. Easy questions often ask "peak minus trough" or "peak divided by trough." Read both and compute.

**Example.** Monthly revenue: Jan 85, Feb 92, Mar 110, Apr 125, May 140, Jun 155, Jul 170, Aug 165, Sep 150, Oct 135, Nov 120, Dec 180.

- Peak: Dec 180. Trough: Jan 85.
- Ratio: 180/85 ≈ 2.12. Difference: 180 − 85 = 95.
- Q1 average (Jan–Mar): (85+92+110)/3 ≈ 95.7. Q2 average: (125+140+155)/3 = 140.

**The "compare two periods" pattern.** "Was growth stronger in H1 or H2?" Compute H1 (end − start of H1) vs H2. The side with the larger change wins.

**Multiple lines on one graph.** Each line is a different series. Questions often ask when one line crosses another. Find the intersection visually and read the x-value.

**Rate vs. absolute change.** "Biggest rate of change" is slope — change per unit time. "Biggest absolute change" is the raw difference, regardless of how long it took. A 10-unit increase over 2 months is a larger rate than a 10-unit increase over 5 months, even though the absolute change is identical.

**Trap to watch.** When x-axis intervals are unequal (e.g., one gap is 1 month, the next is 3 months), visual steepness is not a reliable proxy for rate of change. A steep-looking segment over a short interval can have a smaller rate than a shallow-looking segment over a much longer one. If the x-axis spacing varies, compute slope explicitly — do not eyeball.

> **Self-explanation prompt.** Why does "rate of change" equal slope on a line graph? If you can say "because slope is defined as change in y per unit change in x — which is exactly the rate at which the variable is changing per unit time," you have internalized why visual steepness corresponds to the rate the question asks about. And when the x-axis spacing is uneven, the visual breaks down — which is why the formula exists.

**Micro-drill.** Use the monthly data above (Jan=85, Feb=92, Mar=110, Apr=125, May=140, Jun=155) — 60 seconds:

1. Which month had the highest month-over-month absolute increase? → ___
2. What was the average monthly revenue for Q1 (Jan–Mar)? → ___
3. From Jan to Jun, what was the overall percent change? → ___

Answers: (1) **March** — Jan→Feb: +7, Feb→Mar: +18, Mar→Apr: +15, Apr→May: +15, May→Jun: +15. March wins. (2) **(85+92+110)/3 ≈ 95.7**. (3) **(155−85)/85 ≈ 82%**. If you said February for (1) without computing all months, you eyeballed — always compute each month-to-month gap before declaring a winner. Visual steepness can mislead when intervals are unequal or when the scale compresses the differences.

> **Recall check.** Without looking, state the four line-graph question types. Then: what is the single most common trap on rate-of-change questions? (Answer: confusing rate — slope — with absolute change. They diverge when the time intervals are different across the segments being compared.)

## @bar-charts-and-comparisons

Bar charts compare values across discrete categories. The single most important distinction on bar-chart questions: **absolute vs. relative comparisons.**

**Absolute comparison:** "Which country had the largest population increase?"

Compute each country's increase (new − old). The country with the largest *number* wins.

**Relative (percentage) comparison:** "Which country had the largest *percentage* population increase?"

Compute each country's increase as a fraction of its starting value. The country with the largest *fraction* wins — and this is often a different country from the absolute winner.

**Example.** Population (in millions) for 2020 and 2024:

| Country | 2020 | 2024 | Absolute Δ | % Δ |
|---|---|---|---|---|
| A | 45 | 50 | +5 | 11.1% |
| B | 80 | 82 | +2 | 2.5% |
| C | 30 | 38 | +8 | 26.7% |
| D | 120 | 115 | −5 | −4.2% |
| E | 25 | 35 | +10 | 40.0% |

Absolute winner: Country E (+10). Percentage winner: Country E (+40%). In this case they coincide — but often they don't.

Contrast: Country A goes from 1,000 to 1,100 (+100 absolute, +10% relative). Country C goes from 10 to 30 (+20 absolute, +200% relative). Absolute winner: A. Percentage winner: C. Opposite answers from the same data.

**The percentage-change formula:** % change = (new − old) / old × 100.

Always divide by the *starting* value. Dividing by the new value gives a different number — and that different number is often present as a trap answer choice.

**Trap to watch.** Percent change is asymmetric. If a value increases by 50% (from 100 to 150), reversing back to 100 requires a 33% decrease — not 50%. The percentage depends on which value is the base. On any question involving changes in both directions (from 2020 to 2024 vs. from 2024 to 2020), the percentage differs even though the raw change is the same number.

**Bar chart trap: comparing bars from different groups.** Grouped bar charts show multiple bars per category (e.g., "2020 population" and "2024 population" for each country). Students sometimes compare the 2020 value of Country A against the 2024 value of Country C. Always verify which bar belongs to which group before computing.

**Horizontal vs. vertical bars.** Some bar charts have categories on the y-axis and values on the x-axis. Same math; just rotated. Don't let the orientation change your process.

**The "median category" pattern.** If a bar chart has 5 categories and asks for the median, sort by height and pick the 3rd. Don't guess from visual appearance when values are close.

**The "above the average" pattern.** Compute the average of all bars, then count how many bars exceed it. Often the answer is a count (2 out of 5), not a percentage.

**Micro-drill.** Four computations using the country table above — 90 seconds total:

1. Country C grew from 30 to 38. What is the percentage change? → ___
2. Country A has a larger absolute increase than Country C. Which country has the larger *percentage* increase? → ___
3. A sixth country F goes from 200 to 240. What is its percentage increase? → ___
4. Which country from the table had the smallest positive absolute change? → ___

Answers: (1) **(38−30)/30 = 8/30 ≈ 26.7%**. (2) **Country C** — 26.7% vs. A's 11.1%. A larger absolute change does not mean a larger percentage change. (3) **(240−200)/200 = 40/200 = 20%**. (4) **Country A** — absolute change +5 (vs. C's +8, E's +10). If you missed (2), you defaulted to absolute comparison when the question asked for relative — that is the signature bar-chart trap.

> **Recall check.** Without looking, state the percentage-change formula. Then apply it: value goes from 80 to 120. Percentage change? (Answer: (120−80)/80 = 50%.) Now apply it incorrectly — if you divided by 120 instead of 80, you get 33.3%. Why is that wrong? (Because 120 is the ending value, not the starting value. The change is always measured relative to where you started.)

> **Self-explanation prompt.** Why can the country with the largest absolute increase also have one of the smallest percentage increases? If you can say "because a large country starting from a huge base can add a large number of people while barely moving its percentage — while a small country doubles from a trivially small absolute change," the absolute/relative distinction is locked in. They measure different things: one measures the size of the change, the other measures the speed relative to the starting point.

## @pie-charts-and-stacked-bars

Pie charts and stacked bars both show proportions of a whole — but they obey different reading rules, and each has its own trap.

### Pie charts

**Every slice is labeled with its percentage.** Don't estimate from angles — they are nearly impossible to read precisely. Use the labels.

**Core operations on pie charts:**

- **% of total:** read the label.
- **Dollar or unit value of a slice:** total × (slice percentage ÷ 100).
- **Ratio of two slices:** divide their percentages directly.
- **Combined categories:** add the percentages.

**Example.** Household expenses: Housing 30%, Food 18%, Transportation 15%, Healthcare 10%, Utilities 8%, Other 19%. Total monthly budget: $4,500.

- Housing dollars: $4,500 × 0.30 = **$1,350**.
- Food + Transportation combined: 18 + 15 = 33% → $4,500 × 0.33 = **$1,485**.
- Ratio of Healthcare to Utilities: 10:8 = **5:4**.

**The "unlabeled Other" pattern.** Sometimes slices add to 95% and the question asks about the remaining 5%. Read all labeled slices, sum them, subtract from 100.

**Two pie charts side-by-side.** A slice can grow in *percentage* while shrinking in *dollar value* — if the total shrank between the two years. Always check whether the question asks about percentages or absolute amounts. If absolute, you need each chart's total, not just the percentages.

### Stacked bar charts

A stacked bar shows a total as a stack of segments, each representing one category's contribution.

**Core operations on stacked bars:**

- **Total for a bar:** read the top of the bar on the y-axis.
- **Size of one segment:** (segment top) − (segment bottom) on the y-axis.
- **Proportion of one segment:** segment height ÷ total bar height.

**Example.** 2024 department budget: Salaries goes from 0 to 600 (height 600), Operations from 600 to 900 (height 300), Marketing from 900 to 1,000 (height 100). Total: 1,000.

- Salaries: 600 (60%). Operations: 300 (30%). Marketing: 100 (10%).

**The "reading segment height" trap.** Students read the segment's *top position* as its value. Operations in the example is NOT 900 — it is 300 (the space from 600 to 900). Always compute: segment height = top − bottom.

**100%-stacked bars.** All bars are scaled to 100%, so all bars are the same height and segments show percentages directly. You can compare proportions easily, but absolute-size information is lost.

**Trap to watch.** When a stacked bar's total height grows from year to year, a segment that holds a constant *proportion* still grows in absolute size. And a segment can shrink as a proportion while growing in absolute size if the total grew fast enough. Clarify what the question asks — proportion or absolute — before computing.

**Micro-drill.** Five operations on both chart types — 90 seconds total:

1. From the household-expenses pie chart: what percentage of the total budget is non-housing? → ___
2. Same chart: what is the ratio of Food spending to Transportation spending? → ___
3. From the department stacked bar: Operations is what percentage of the total budget? → ___
4. A second year's budget has the same proportions but a total of $1,200. What is the absolute value of the Salaries segment? → ___
5. The pie chart total rises to $5,000 but the Housing percentage drops to 25%. Does absolute housing spending go up or down compared to the original $4,500 chart? → ___

Answers: (1) **70%** — Housing is 30%, so everything else is 100 − 30 = 70%. (2) **18:15 = 6:5**. (3) **30%** — 300 out of 1,000. (4) **$720** — $1,200 × 0.60. (5) **Down** — original: $4,500 × 0.30 = $1,350; new: $5,000 × 0.25 = $1,250. The rise in total does not offset the drop in percentage here. Question 5 is the two-pie-chart trap in practice: never assume that a larger total means larger slice values.

> **Recall check.** Without looking: state the formula for the size of a stacked-bar segment. Then state the operation for finding the ratio of two pie-chart slices. (Answers: segment = top y − bottom y; ratio of two slices = divide their labeled percentages directly.)

> **Self-explanation prompt.** Why is reading the segment's *top position* on the y-axis wrong on a stacked bar? If you can say "because the segment does not start at zero — it sits on top of whatever is below it, so its value is only the space it occupies, from its bottom edge to its top edge," the segment-height trap is gone permanently. On every stacked bar: segment value = top y-coordinate minus bottom y-coordinate, never the top y-coordinate alone.

## @scatter-plots-and-correlation

Scatter plots show individual data points as dots in a 2D grid. Each dot represents a case (a country, a company, a person); the x and y coordinates are two measured attributes.

**The three question types on scatter plots.**

1. **Correlation strength.** "Is there a positive, negative, or no correlation between X and Y?"
2. **Outlier identification.** "Which data point lies farthest from the general trend?"
3. **Specific-point read.** "What is the y-value of the point with the largest x-value?"

**Correlation in 15 seconds.**

- **Positive:** as x increases, y tends to increase. Points cluster along an upward line.
- **Negative:** as x increases, y tends to decrease. Points cluster along a downward line.
- **None:** points are scattered with no clear trend.
- **Strong:** points hug the trend line tightly.
- **Weak:** points follow a loose trend with wide spread.

**The "imaginary line" technique.** Squint at the scatter plot. Does an imaginary line rise, fall, or neither? That is your direction. How tightly do the points follow that line? That is your strength.

**Correlation ≠ causation.** A scatter plot can show that cities with more coffee shops have higher GDP. That does not prove coffee shops cause GDP. Both might be driven by a third factor (population density), the causation might run the other way, or the correlation might be coincidental. On GMAT, scatter-plot evidence is *consistent with* but never *proves* a causal claim.

**Trap to watch.** On causation questions, answer choices that say "proves," "demonstrates that," or "establishes that X causes Y" are almost always wrong when the only evidence is a scatter plot. The correct framing is "is consistent with" or "suggests but does not prove." Train yourself to reject causal language applied to correlational evidence — this rule applies to Critical Reasoning causation arguments as well.

**Outlier identification.** Outliers are points far from the main cluster or trend line. Scan for isolated points that don't fit. The question often asks which point is the outlier — look for the one farthest from your imaginary line.

**Example.** Points: (2,3), (3,5), (4,7), (5,8), (6,10), and one point at (10,2). The first five follow a clear positive trend. The last point is far to the right and very low — it is the outlier.

**The "data points in a region" pattern.** "How many points have x > 5 AND y > 10?" Count the dots in that region. No computation — just careful counting.

**Trend-line questions.** Some scatter plots include a drawn best-fit line. Questions may ask the slope or which point lies farthest above or below it. Read the trend-line endpoints and compute slope as (y2 − y1) / (x2 − x1).

**The "clusters" reading.** Sometimes a scatter plot has two separate clusters — groups of points that hang together. This usually signals two subpopulations. Questions may ask about each cluster's behavior independently.

**Micro-drill.** Classify each description — 30 seconds total:

1. Points cluster tightly along a steep upward line. → ___
2. Points are scattered randomly with no visible pattern. → ___
3. Points show a loose downward trend with considerable spread. → ___
4. Points form two separate dense clusters, each internally random. → ___

Answers: (1) **Strong positive**. (2) **No correlation**. (3) **Weak negative**. (4) **No overall correlation** — two clusters with no directional relationship between them. If you matched all four in under 30 seconds, your pattern-recognition is fast enough for test conditions.

> **Self-explanation prompt.** Why is correlation not proof of causation? If you can say "because both correlated variables might be driven by a third variable, causation might run in the opposite direction, or the correlation might be coincidental," you have internalized why scatter plots show associations, not causal structure. This reasoning applies directly to Critical Reasoning causation arguments — the inference logic is the same in both question types.

## @computation-shortcuts

Most GI questions require small amounts of arithmetic after reading the chart. Five shortcuts make this arithmetic fast.

**Shortcut 1: Percent change, done mentally.**

% change = (new − old) / old × 100.

- From 80 to 120: change is 40, so 40/80 = 0.5 = **+50%**.
- From 40 to 50: change is 10, so 10/40 = 0.25 = **+25%**.
- From 120 to 96: change is −24, so −24/120 = −0.2 = **−20%**.

For non-round numbers, estimate: "140 to 170 is about +30 on a base of 140, so roughly 30/140 ≈ 21%."

**Shortcut 2: Ratio simplification.**

- 180:85 → divide by 5 → 36:17 ≈ 2.12
- 240:96 → divide by 48 → 5:2 = 2.5

Find common factors and divide. GMAT ratios often reduce to clean numbers.

**Shortcut 3: Average of a few values.**

For 3 values: (sum)/3. For evenly-spaced values: middle value, or (first + last)/2.

- Jan 85, Feb 92, Mar 110: (85+92+110)/3 = 287/3 ≈ **95.7**.
- Quarterly sales 100, 150, 200, 250 (evenly spaced): average = (100+250)/2 = **175**. No need to sum all four.

**Shortcut 4: Percent of a whole.**

Total × (percent/100). Break down awkward multiplications: 4,500 × 0.18 = 45 × 18 = (45 × 20) − (45 × 2) = 900 − 90 = **810**.

**Shortcut 5: Smart numbers for proportion problems.**

When the chart gives only percentages, pick a convenient total (100 or 1,000) and compute. The ratio or percentage answer is independent of the total you chose.

**Example.** Pie chart: Urban 45%, Suburban 30%, Rural 25%. "What percent of non-rural population is urban?" Pick total = 100. Non-rural = 75. Urban ÷ non-rural = 45/75 = **60%**.

**The "don't compute what you don't need" principle.** If the question asks for a rank ("which country had the most growth?"), you only need relative magnitudes — not exact values. If it asks for a ratio, you don't need absolute amounts. Always read the question before starting any arithmetic and identify the minimum computation required.

> **Self-explanation prompt.** Why is "don't compute what you don't need" a strategic discipline, not just an efficiency tip? If you can say "because unnecessary computation introduces arithmetic errors and wastes time on information that doesn't affect the answer," you have internalized why reading the question carefully before computing is what separates fast, accurate solvers from slow, error-prone ones. The chart is a data source — the question tells you exactly what fraction of that data matters.

**Micro-drill.** Five mental-math computations — target 10 seconds each:

1. Revenue: 75 → 120. Percent change? → ___
2. Revenue: 200 → 170. Percent change? → ___
3. Evenly-spaced values: 40, 80, 120, 160. Average? → ___
4. Total = 6,000. One category is 35% of the whole. Category amount? → ___
5. Urban = 40%, Rural = 25%, total = 100 people. Ratio of Urban to Rural? → ___

Answers: (1) **(120−75)/75 = 45/75 = 60%**. (2) **(170−200)/200 = −30/200 = −15%**. (3) **100** — use (40+160)/2, not a full sum. (4) **2,100** — try 6,000 × 0.30 = 1,800 plus 6,000 × 0.05 = 300. (5) **8:5** — 40:25, divide by 5. If (3) took more than 5 seconds, you summed all four values instead of using the evenly-spaced shortcut — that shortcut alone saves 10+ seconds per average question.

> **Recall check.** Without peeking, state the percent-change formula. Then: revenue went from 150 to 210 — percent change? (Answer: 60/150 = 40%.) Now: revenue went from 210 to 150 — percent change? (Answer: −60/210 ≈ −28.6%.) The two answers differ because the base changes. A symmetric-looking change in absolute terms produces asymmetric percentages — this asymmetry is a frequent trap on both GI and percent-word-problem questions.

## @summary

**Active recall — before reading the tables below.** From memory: name the six chart types, and for each one, state its signature trap in a single sentence. Then name the three steps of the GI Protocol. If you can do this in under 90 seconds without looking, your retention is at test-day level.

Graphics Interpretation is two skills: reading values accurately and performing a small amount of arithmetic. The six chart types and five computation shortcuts cover every question.

**The GI Protocol (every question, every time):**

1. **Audit:** axis labels, scale, origin, and scope.
2. **Extract:** only the data points the question requires.
3. **Compute:** one formula.

**The six chart types and their signature operations:**

| Chart | Main operation | Signature trap |
|---|---|---|
| Line graph | Read values, compute trends and rates | Non-zero origin exaggerates visual changes |
| Bar chart | Compare absolute vs. relative changes | "Biggest absolute" ≠ "fastest growth" |
| Pie chart | Use labeled percentages; compute dollar values | Two pies with different totals: % up but $ down |
| Stacked bar | Segment height = top − bottom | Reading segment top position as its value |
| Scatter plot | Correlation direction + strength; outliers | Correlation ≠ causation; reject causal language |
| Bubble chart | Three variables; bubble area = third variable | Reading diameter instead of area |

**The five computation shortcuts:**

1. Percent change = (new − old) / old × 100.
2. Ratio reduction — find common factors; reduce.
3. Evenly-spaced average = middle value or (first + last)/2.
4. Percent of total = total × percent/100.
5. Smart numbers (pick 100 or 1,000) for proportion-only problems.

**Time-management targets.**

- Easy GI: 45–60 seconds.
- Medium GI: 60–90 seconds.
- Hard GI: up to 2 minutes.

Most of that time belongs to the Audit and Extract steps, not to the computation. If you are computing for more than 30 seconds, you likely misread something — restart from the Audit.

**The four failure modes (log which one when you miss a question):**

1. Axis misread → run the Audit more carefully next time.
2. Wrong data extracted → re-read the question before extracting values.
3. Wrong formula → review the five computation shortcuts.
4. Arithmetic slip → estimate first, then compute; catch order-of-magnitude errors.

Categorizing your mistakes by failure mode tells you exactly where to drill. Axis misreads and wrong extractions are the two most common — together they account for more GI errors than bad arithmetic ever does.

**What to do next.**

1. **Easy set, no time limit.** Nine questions covering all six chart types. Goal: zero axis misreads. Run the Audit on every question before touching any value. If you miss a question, identify which failure mode caused it.

2. **Medium set, 90-second target.** Apply the Protocol under real time pressure. Log how long each question took. Consistent overages usually mean the chart-type reading rules are not yet automatic — not that the arithmetic is hard.

3. **Hard set, untimed first pass, then timed.** Hard GI combines steps: read a stacked-bar segment, compute a percentage change, then compare to a prior year. Write each step explicitly on the first pass. On the second pass, time yourself and target under 2 minutes. The gap between your two pass times is the speed you will gain from repetition.

Any GI miss on a practice set or mock: log which failure mode it was. The four modes each have a specific fix. Most students overinvest in arithmetic review when their actual problem is chart misreads — cataloguing your errors tells you which one you actually commit.
