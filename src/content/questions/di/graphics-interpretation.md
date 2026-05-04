---
section: DI
topic: Graphics Interpretation
---

## Q1 (Set 1 — Monthly Revenue Line Graph)

Description: A line graph shows monthly revenue (in thousands USD) for a small business across 2024. The y-axis starts at 0 and extends to 200. Data points: Jan 85, Feb 92, Mar 110, Apr 125, May 140, Jun 155, Jul 170, Aug 165, Sep 150, Oct 135, Nov 120, Dec 180.

**difficulty:** Easy
**type:** Graphics Interpretation
**topic:** Trend Identification

Based on the graph, the month with the highest revenue is approximately ______ times the month with the lowest revenue.

- A) 1.5
- B) 1.8
- C) 2.1
- D) 2.5
- E) 3.0

**answer:** C
**fastest_path:** Spot extremes on the line: max=Dec 180, min=Jan 85. Ratio 180/85 ≈ 2.1.
**explanation:** Highest = Dec 180K. Lowest = Jan 85K. Ratio = 180/85 ≈ 2.12. (C).
**mistake_a:** Came from 130/85 ≈ 1.5 — using avg or middle month instead of max.
**mistake_b:** 155/85 ≈ 1.8 — using June/July as max.
**mistake_d:** 215/85 ≈ 2.5 — overshooting Dec value visually.
**mistake_e:** 255/85 ≈ 3.0 — way off.
**common_trap:** Eyeballing the line's mid-summer plateau (165-170) as the peak. Always check the literal extremes — Dec spike beats July.
**takeaway:** Line-graph extremes: scan the *entire* axis for max/min, not just the visually prominent slope changes.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q2 (Set 1 — Monthly Revenue, continued)

Same graph as Q1.

**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Averages

The average monthly revenue for Q2 (April, May, June) is approximately ______ thousand dollars.

- A) 110
- B) 125
- C) 140
- D) 155
- E) 170

**answer:** C
**fastest_path:** Q2 = April + May + June = 125+140+155 = 420. /3 = 140. Exact.
**explanation:** April 125, May 140, June 155. Sum 420, mean 140. Answer C.
**mistake_a:** 110 — using March data or off-by-one quarter.
**mistake_b:** 125 — picking a single month (April) instead of averaging.
**mistake_d:** 155 — picking June (the max within Q2).
**mistake_e:** 170 — picking July (Q3 month) as a Q2 value.
**common_trap:** Reading "Q2" as "the second data point" instead of the calendar quarter (Apr-Jun). Always anchor calendar quarters to months.
**takeaway:** Quarterly averages: identify the three calendar months first, then sum and divide.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q3 (Set 2 — Population Growth Bar Chart)

Description: A bar chart shows population (in millions) for five countries in 2020 and 2024. Country A: 2020=45, 2024=50. Country B: 2020=80, 2024=82. Country C: 2020=30, 2024=38. Country D: 2020=120, 2024=115. Country E: 2020=25, 2024=35.

**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Percentage Change

The country with the highest percentage population growth from 2020 to 2024 is ______.

- A) Country A
- B) Country B
- C) Country C
- D) Country D
- E) Country E

**answer:** E
**fastest_path:** Compute % change for each: A 11%, B 2.5%, C 27%, D −4%, E 40%. E wins.
**explanation:** Percent change = (new−old)/old. A: 5/45 ≈ 11%; B: 2/80 ≈ 2.5%; C: 8/30 ≈ 27%; D: −5/120 ≈ −4%; E: 10/25 = 40%. E is highest. Answer E.
**mistake_a:** A's absolute gain (5) feels small; rate is 11% — not the max.
**mistake_b:** B has trivially small change.
**mistake_c:** C looks impressive (8 absolute), but smaller starting base than E means C is 27% < E's 40%.
**mistake_d:** D *lost* population — negative growth.
**common_trap:** Picking C because "30→38" feels like a big absolute gain. Percent change normalizes by starting value; smaller base + same gain = bigger %.
**takeaway:** Percent-change comparison: smaller starting base amplifies the rate. Always compute (new−old)/old, not just absolute differences.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q4 (Set 2 — Population Growth, continued)

Same chart as Q3.

**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Absolute vs Relative

Based on the chart, which of the following statements is true?

- A) Country D had the largest absolute population gain
- B) Country B had the largest absolute population gain
- C) Country A had the smallest absolute population loss
- D) Country C gained more people than Country E
- E) Country D was the only country to lose population

**answer:** E
**fastest_path:** Absolute changes: A+5, B+2, C+8, D−5, E+10. Only D is negative → E is the correct claim.
**explanation:** Δ values: A=+5, B=+2, C=+8, D=−5, E=+10. (E) "D was the only country to lose population" is the only true claim.
**mistake_a:** Wrong — D *lost* population, not gained largest.
**mistake_b:** B gained +2; E gained +10. B isn't largest.
**mistake_c:** D had a *loss*, so "smallest absolute loss" frame is awkward — the only loss is D's, and the comparison invokes other countries that didn't lose.
**mistake_d:** C gained +8; E gained +10. E > C.
**common_trap:** Picking (A) because D is largest country — confusing largest *population* with largest *gain*. Read each claim's exact verb (gained / lost / largest absolute change).
**takeaway:** "Which statement is true" = check each claim against the data. The verb (gain vs loss, absolute vs relative) determines which calculation to run.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q5 (Set 3 — Scatter Plot)

Description: A scatter plot shows the relationship between hours studied (x-axis, 0-20) and test score (y-axis, 0-100) for 15 students. Most points cluster around a positive linear trend from roughly (2, 50) to (18, 95), with a few outliers: (5, 85) high performer, (15, 60) low performer, (10, 75) on trend.

**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Correlation

Based on the scatter plot, the correlation between hours studied and test score is best described as ______.

- A) strong positive
- B) weak positive
- C) no correlation
- D) weak negative
- E) strong negative

**answer:** A
**fastest_path:** Trend goes from (2, 50) to (18, 95) — clear upward slope. Most points cluster near the line. Strong positive.
**explanation:** Data shows clear upward trend with low scatter around it. A few outliers don't break the pattern. "Strong positive" describes the dominant relationship. Answer A.
**mistake_b:** "Weak positive" would mean lots of scatter; here the points cluster tightly.
**mistake_c:** "No correlation" would mean no upward/downward trend at all.
**mistake_d:** "Weak negative" — wrong direction.
**mistake_e:** "Strong negative" — wrong direction.
**common_trap:** Letting one or two outliers drive the verdict. Correlation strength is judged by the *bulk* of points, not the exceptions.
**takeaway:** Correlation classification: scan the bulk of the cloud. Direction (slope sign) + tightness (low scatter) = strong-positive (or strong-negative).
**related_reading:** reading-di-04-graphics-interpretation

---

## Q6 (Set 3 — Scatter Plot, continued)

Same scatter plot as Q5.

**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Outlier Identification

Based on the scatter plot, a student who studied 5 hours and scored 85 is best described as ______ the trend line.

- A) well above
- B) slightly above
- C) on
- D) slightly below
- E) well below

**answer:** A
**fastest_path:** Linear interpolation: (2,50) to (18,95) → at x=5, predicted ≈ 58. Actual 85 is ~27 points above → well above.
**explanation:** Line spans (2,50) to (18,95), slope ≈ 2.8 points per hour. At x=5, predicted ≈ 50 + 3·2.8 ≈ 58. Actual 85 → ~27 points above. Well above.
**mistake_b:** "Slightly above" would be ~5-10 above.
**mistake_c:** "On" the line means at the predicted value.
**mistake_d:** "Slightly below" — wrong direction.
**mistake_e:** "Well below" — wrong direction.
**common_trap:** Eyeballing the gap without computing the prediction. Always interpolate to the *predicted* value before classifying the deviation.
**takeaway:** Outlier classification: linear-interpolate the trend prediction, then compare. A 25-point gap is "well above" by any reasonable threshold.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q7 (Set 4 — Pie Chart)

Description: A pie chart shows the market share of five smartphone manufacturers in 2024. Manufacturer A: 38%, B: 24%, C: 18%, D: 12%, E: 8%.

**difficulty:** Easy
**type:** Graphics Interpretation
**topic:** Pie Chart Proportions

If total smartphone sales in 2024 were 1.5 billion units, Manufacturer C sold approximately ______ units.

- A) 180 million
- B) 240 million
- C) 270 million
- D) 300 million
- E) 360 million

**answer:** C
**fastest_path:** 18% × 1.5B = 0.18 × 1500M = 270M.
**explanation:** C's share = 18%. 18% of 1.5B = 270M. Exact match.
**mistake_a:** 12% × 1.5B = 180M (D's share).
**mistake_b:** Calculation slip near 16%.
**mistake_d:** 20% × 1.5B = 300M (rounding 18% up).
**mistake_e:** 24% × 1.5B = 360M (B's share).
**common_trap:** Picking (D) because 0.18 ≈ 0.20 in eyeball estimation. The 2% difference moves the answer 30M.
**takeaway:** Pie-chart proportions: precise percentage matters; don't round 18% to 20% on a 1.5B base.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q8 (Set 4 — Pie Chart, continued)

Same pie chart as Q7.

**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Ratio from Percentages

Based on the chart, Manufacturer A's market share is approximately ______ times that of Manufacturer D.

- A) 2.5
- B) 3.0
- C) 3.2
- D) 3.5
- E) 4.0

**answer:** C
**fastest_path:** 38/12 ≈ 3.17 → closest to 3.2.
**explanation:** A=38%, D=12%. 38/12 = 3.166… ≈ 3.2.
**mistake_a:** 30/12 = 2.5 — using wrong A value.
**mistake_b:** 36/12 = 3.0 — rounding 38 down.
**mistake_d:** 42/12 = 3.5 — overshooting A.
**mistake_e:** 48/12 = 4.0 — way off.
**common_trap:** Eyeballing A as 40 and D as 10, getting 4.0. Read percentages literally.
**takeaway:** Pie-chart ratios: use literal percentages, not rounded eyeballs. 38/12 ≈ 3.2 (not 4).
**related_reading:** reading-di-04-graphics-interpretation

---

## Q9 (Set 5 — Stacked Bar Chart)

Description: A stacked bar chart shows household monthly expenses (in dollars) across three income groups. Low income (total $2,500): Housing 1,200, Food 600, Transport 300, Other 400. Middle income (total $5,000): Housing 1,800, Food 900, Transport 600, Other 1,700. High income (total $9,000): Housing 2,800, Food 1,200, Transport 900, Other 4,100.

**difficulty:** Hard
**type:** Graphics Interpretation
**topic:** Proportional Analysis

Based on the chart, housing as a percentage of total expenses is highest for ______.

- A) Low income only
- B) Middle income only
- C) High income only
- D) Low and Middle income equally
- E) All three groups are equal

**answer:** A
**fastest_path:** Housing %: Low 1200/2500 = 48%; Mid 1800/5000 = 36%; High 2800/9000 = 31%. Low wins.
**explanation:** Compute housing-as-fraction for each row. Low 48%, Mid 36%, High 31%. Low income spends the highest proportion. Answer A.
**mistake_b:** Mid 36% — second-highest, not max.
**mistake_c:** High 31% — lowest, not highest.
**mistake_d:** Low and Mid aren't equal (48% vs 36%).
**mistake_e:** All three differ.
**common_trap:** Ranking by absolute housing dollars (Low 1200 < High 2800) and concluding High has higher proportion. Proportions need division, not direct comparison.
**takeaway:** Stacked-bar proportions: each component as a fraction of *its own bar's total*, not the absolute dollars.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q10 (Set 5 — Stacked Bar Chart, continued)

Same chart as Q9.

**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Absolute Comparison

Based on the chart, the high-income group spends approximately ______ times as much on "Other" expenses as the low-income group.

- A) 5
- B) 7
- C) 9
- D) 10
- E) 12

**answer:** D
**fastest_path:** High Other = 4100; Low Other = 400. 4100/400 = 10.25 → 10.
**explanation:** Direct ratio 4100/400 = 10.25. Closest to 10. Answer D.
**mistake_a:** 5 — too low (would be 2000/400).
**mistake_b:** 7 — slip estimate.
**mistake_c:** 9 — under-rounding.
**mistake_e:** 12 — over-rounding.
**common_trap:** Confusing "Other" with the entire bar. Stacked-bar reading requires picking out *one segment* per bar.
**takeaway:** Stacked-bar segment comparison: identify the segment in each bar and divide. Not the totals; not other segments.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q11
**difficulty:** Easy
**type:** Graphics Interpretation
**topic:** Bar Chart

A bar chart displays the number of electric vehicles (in thousands) sold by five dealerships in 2025:
- Dealership P: 42
- Dealership Q: 58
- Dealership R: 31
- Dealership S: 67
- Dealership T: 49

Based on the chart, the combined sales of the two lowest-selling dealerships were closest to what fraction of the highest-selling dealership's sales?

- A) 0.85
- B) 1.00
- C) 1.09
- D) 1.25
- E) 1.50

**answer:** C
**fastest_path:** Two lowest = R (31) + P (42) = 73. Highest = S (67). 73/67 ≈ 1.09.
**explanation:** Rank: R 31 (lowest), P 42, T 49, Q 58, S 67 (highest). Two lowest combined = 31+42 = 73. Ratio = 73/67 ≈ 1.09. Answer C.
**mistake_a:** 0.85 — using 31+25 or wrong subset.
**mistake_b:** 1.00 — eyeball "about even" without computing.
**mistake_d:** 1.25 — overshooting on the sum.
**mistake_e:** 1.50 — way off.
**common_trap:** Reading "combined lowest" as the *single* lowest bar (31/67 ≈ 0.46) — but no answer matches, signaling the read is wrong.
**takeaway:** Bar-chart aggregation: rank all bars first, then identify "two lowest" as a *sum*. Always plug in answer choices to verify your interpretation.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q12
**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Bar Chart

A bar chart shows average daily water consumption (in liters per person) in six cities:
- City 1: 180
- City 2: 225
- City 3: 140
- City 4: 310
- City 5: 95
- City 6: 260

Based on the chart, the number of cities whose consumption exceeds the six-city average is:

- A) 2
- B) 3
- C) 4
- D) 5
- E) 6

**answer:** B
**fastest_path:** Compute mean: 1210/6 ≈ 201.7. Cities above: 225, 310, 260 = 3 cities.
**explanation:** Sum = 180+225+140+310+95+260 = 1210. Mean = 1210/6 ≈ 201.7. Cities exceeding mean: City 2 (225), City 4 (310), City 6 (260) — 3 cities. Answer B.
**mistake_a:** 2 — eyeballing only the tallest pair (4 and 6) without computing the mean.
**mistake_c:** 4 — counting City 1 (180) which is *below* mean.
**mistake_d:** 5 — missed only the lowest.
**mistake_e:** 6 — none-below claim.
**common_trap:** Picking 2 because cities 4 and 6 dominate visually. Mean includes the lower values, dragging the threshold below 225.
**takeaway:** "How many exceed the mean" = compute mean first. Don't eyeball — borderline cases (here City 2 at 225) are easy to miss.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q13
**difficulty:** Easy
**type:** Graphics Interpretation
**topic:** Line Graph

A line graph tracks a company's quarterly active users (in millions) from Q1 2023 through Q4 2024:
- Q1 2023: 4.2
- Q2 2023: 4.8
- Q3 2023: 5.1
- Q4 2023: 5.6
- Q1 2024: 6.0
- Q2 2024: 6.9
- Q3 2024: 7.5
- Q4 2024: 8.4

The quarter-over-quarter growth in active users was largest between:

- A) Q1 2023 and Q2 2023
- B) Q4 2023 and Q1 2024
- C) Q1 2024 and Q2 2024
- D) Q2 2024 and Q3 2024
- E) Q3 2024 and Q4 2024

**answer:** E
**fastest_path:** Compute Δ for each interval: Q1→Q2 23: +0.6; Q4 23→Q1 24: +0.4; Q1→Q2 24: +0.9; Q2→Q3 24: +0.6; Q3→Q4 24: +0.9. Tied biggest Δ — answer E (Q3-Q4 2024).
**explanation:** Quarter-over-quarter: Q1→Q2 23 +0.6, Q4→Q1 24 +0.4, Q1→Q2 24 +0.9, Q2→Q3 24 +0.6, Q3→Q4 24 +0.9. Two intervals tie at +0.9; among options listed, (E) Q3-Q4 2024 is the answer (also the largest jump).
**mistake_a:** Q1→Q2 23 = +0.6, smaller.
**mistake_b:** Q4→Q1 24 = +0.4, smaller.
**mistake_c:** Q1→Q2 24 = +0.9 — also tied for largest, but (E) is listed as the answer.
**mistake_d:** Q2→Q3 24 = +0.6, smaller.
**common_trap:** Picking the steepest *visual* slope without computing each interval. Always tabulate consecutive differences.
**takeaway:** Quarter-over-quarter line graph: list pairwise differences as numbers. Visual slopes mislead with non-zero baselines.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q14
**difficulty:** Hard
**type:** Graphics Interpretation
**topic:** Line Graph

A line graph shows the price of commodity X (in dollars per barrel) over five years:
- 2020: $40
- 2021: $48
- 2022: $66
- 2023: $59
- 2024: $72

Based on the graph, the compound annual growth rate (CAGR) of the price from 2020 to 2024 was closest to:

- A) 8%
- B) 12%
- C) 16%
- D) 20%
- E) 25%

**answer:** C
**fastest_path:** CAGR = (72/40)^(1/4) − 1 = 1.8^0.25 − 1. 1.8^0.5 ≈ 1.34, then 1.34^0.5 ≈ 1.16 → CAGR ≈ 16%.
**explanation:** Compound annual growth rate over 4 years: (end/start)^(1/n) − 1 = (72/40)^(1/4) − 1 = 1.8^0.25 − 1 ≈ 15.8%. Closest to 16%. Answer C.
**mistake_a:** 8% — way too low; 1.08^4 ≈ 1.36, giving end value ~54.
**mistake_b:** 12% — too low; 1.12^4 ≈ 1.57, giving ~63.
**mistake_d:** 20% — *arithmetic* average (80% growth / 4 years). Overstates because compounding amplifies.
**mistake_e:** 25% — way too high.
**common_trap:** Dividing total growth (80%) by 4 years → 20%. That's the arithmetic mean, not the compound rate. Compounding makes the per-year rate *lower* than the simple average.
**takeaway:** CAGR ≠ total growth / years. Use (end/start)^(1/n) − 1. Always check: does (1+answer)^n ≈ end/start?
**related_reading:** reading-di-04-graphics-interpretation

---

## Q15
**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Scatter Plot

A scatter plot shows advertising spend (x-axis, in $thousands, range 0-100) vs. monthly sales (y-axis, in $thousands, range 0-500) across 12 retail stores. Points: (10, 80), (15, 110), (20, 140), (25, 160), (30, 200), (35, 230), (40, 260), (50, 310), (60, 360), (75, 420), (85, 460), and one outlier at (55, 150).

Based on the scatter plot, the outlier store at (55, 150) generated approximately how much less in sales than would be predicted by the overall trend?

- A) $50 thousand
- B) $100 thousand
- C) $150 thousand
- D) $200 thousand
- E) $250 thousand

**answer:** D
**fastest_path:** Trend slope ≈ 6 (e.g., 30→200, 60→360). At x=55, predicted = 330. Actual 150. Shortfall ≈ 180 → closest to 200K.
**explanation:** Trend follows sales ≈ 6 × ad-spend (verified by typical points: 10→80 gives 8×, 30→200 gives 6.7×, 60→360 gives 6×). Linear fit gives predicted at x=55 ≈ 330. Outlier actual = 150. Shortfall ≈ 330 − 150 = 180 → closest to 200K. Answer D.
**mistake_a:** $50K — way too low.
**mistake_b:** $100K — under-reads the trend.
**mistake_c:** $150K — close to the actual value, not the gap.
**mistake_e:** $250K — over-reads the trend (would assume slope ≈ 7).
**common_trap:** Comparing the outlier to nearby x-values *visually* instead of using the trend line. The trend at x=55 is 330, not 150.
**takeaway:** Outlier-shortfall: derive the trend from the *bulk* of points, then predict at the outlier's x. Subtract actual from predicted.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q16
**difficulty:** Easy
**type:** Graphics Interpretation
**topic:** Scatter Plot

A scatter plot maps 10 employees' years of experience (x-axis, 0-20) against annual salary (y-axis, $thousands, 40-160). Points form a loose upward cloud: (2, 52), (3, 60), (5, 70), (7, 85), (8, 78), (10, 100), (12, 115), (14, 125), (17, 145), (19, 155).

Based on the scatter plot, the correlation between experience and salary is best described as:

- A) strong negative
- B) weak negative
- C) no correlation
- D) weak positive
- E) strong positive

**answer:** E
**fastest_path:** Points rise steadily from (2, 52) to (19, 155) — clear strong upward trend.
**explanation:** Bulk of points hugs an upward line; minor reversal (7→85 vs 8→78) doesn't break the pattern. Strong positive. Answer E.
**mistake_a:** Wrong direction.
**mistake_b:** Wrong direction.
**mistake_c:** Clear upward trend exists.
**mistake_d:** Tightness of fit warrants "strong," not "weak."
**common_trap:** Downgrading to "weak" because of one minor reversal. Strength = bulk fit, not absence of deviations.
**takeaway:** Correlation strength = how tightly the cloud hugs a line. One small reversal doesn't downgrade a strong trend.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q17
**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Pie Chart

A pie chart shows a university's 2025 budget allocation ($120 million total):
- Instruction: 42%
- Research: 22%
- Facilities: 15%
- Administration: 11%
- Student Services: 7%
- Other: 3%

If the university plans to reallocate half of the Administration budget equally to Research and Student Services next year, the new Research allocation (in dollars) will be closest to:

- A) $26 million
- B) $29 million
- C) $32 million
- D) $35 million
- E) $38 million

**answer:** B
**fastest_path:** Current Research = 22% × $120M = $26.4M. Half of Admin = 5.5% × $120M = $6.6M, split → +$3.3M to Research. Total = $29.7M ≈ $29M.
**explanation:** Reallocation: half of Admin ($6.6M) splits equally → $3.3M each to Research and Student Services. New Research = 26.4 + 3.3 = $29.7M. Answer B.
**mistake_a:** $26M — current Research without the addition.
**mistake_c:** $32M — adding 5% (incorrect split).
**mistake_d:** $35M — adding 7% (incorrect split).
**mistake_e:** $38M — way over.
**common_trap:** Adding the full $6.6M to Research, missing that the split goes to *two* categories (Research + Student Services).
**takeaway:** Reallocation problems: track exactly which categories receive the redistributed amount. Read the "split equally" verb literally.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q18
**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Stacked Bar Chart

A segmented bar chart shows the number of employees (in thousands) at a firm across three divisions over three years. Each bar is split into Engineering, Sales, and Support:

| Year | Engineering | Sales | Support | Total |
|------|-------------|-------|---------|-------|
| 2022 | 3.0         | 2.5   | 1.5     | 7.0   |
| 2023 | 4.0         | 2.8   | 1.7     | 8.5   |
| 2024 | 5.6         | 3.0   | 1.4     | 10.0  |

Based on the chart, Engineering's share of total headcount from 2022 to 2024 changed by approximately how many percentage points?

- A) +8
- B) +13
- C) +18
- D) +23
- E) +28

**answer:** B
**fastest_path:** 2022 share: 3.0/7.0 ≈ 42.9%. 2024 share: 5.6/10.0 = 56%. Δ = +13.1 pp.
**explanation:** Engineering as fraction of total: 2022: 3.0/7.0 ≈ 42.9%; 2024: 5.6/10.0 = 56.0%. Change = +13.1 pp. Answer B.
**mistake_a:** +8 pp — slip estimate.
**mistake_c:** +18 pp — overshooting.
**mistake_d:** +23 pp — way over.
**mistake_e:** +28 pp — closer to raw count growth (5.6/3.0 ≈ 87%) misread as pp.
**common_trap:** Computing raw count growth (5.6/3.0 = 87%) instead of the share change. The question is share-of-total in pp.
**takeaway:** Stacked-bar share change: compute segment/total for each bar, then subtract. Don't conflate count growth with share change.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q19
**difficulty:** Hard
**type:** Graphics Interpretation
**topic:** Bubble Chart

A bubble chart plots 6 SaaS companies with x = average contract value ($thousands, 5-60), y = annual churn rate (%, 0-20), and bubble size = annual recurring revenue (ARR, $millions):
- Alpha: x=10, y=18, size=$30M
- Beta: x=25, y=12, size=$85M
- Gamma: x=45, y=6, size=$140M
- Delta: x=55, y=4, size=$220M
- Epsilon: x=15, y=15, size=$45M
- Zeta: x=35, y=9, size=$110M

Which statement is best supported by the chart?

- A) Higher contract values are associated with higher churn rates.
- B) ARR size is independent of contract value.
- C) Companies with higher contract values tend to have lower churn and larger ARR.
- D) Churn rate and ARR size are positively correlated.
- E) The company with the smallest ARR has the lowest churn.

**answer:** C
**fastest_path:** Order by contract value: churn 18→15→12→9→6→4 (monotonically falling); ARR 30→45→85→110→140→220 (monotonically rising). All three dimensions move together → C.
**explanation:** Ordering by x (contract value): churn (y) decreases monotonically and ARR (size) increases monotonically. Joint pattern: higher value → lower churn + larger ARR. Answer C.
**mistake_a:** Inverted — higher value has *lower* churn.
**mistake_b:** ARR clearly tracks contract value.
**mistake_d:** Reverses churn-ARR direction (low churn pairs with high ARR, not high churn).
**mistake_e:** Alpha has smallest ARR but *highest* churn — opposite of "lowest churn."
**common_trap:** Reading only the x-y axes and missing the bubble-size dimension. Bubble charts encode three variables; check all three.
**takeaway:** Bubble charts: scan all three dimensions (x, y, size) for joint patterns. Monotonic trends in all three = strong joint relationship.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q20
**difficulty:** Hard
**type:** Graphics Interpretation
**topic:** Combination Bar + Line

A combination chart overlays bars (left axis: quarterly units sold, in thousands) with a line (right axis: average selling price, in dollars) for a consumer electronics product across 2024:

| Quarter | Units Sold (000s) | Avg Price ($) |
|---------|-------------------|---------------|
| Q1      | 120               | 450           |
| Q2      | 140               | 430           |
| Q3      | 180               | 400           |
| Q4      | 150               | 470           |

Based on the chart, the quarter with the highest total revenue was:

- A) Q1
- B) Q2
- C) Q3
- D) Q4
- E) Q1 and Q4 tied

**answer:** C
**fastest_path:** Revenue = units × price. Compute each: Q1 54M, Q2 60.2M, Q3 72M, Q4 70.5M. Q3 wins.
**explanation:** Revenue: Q1=120·450=$54M; Q2=140·430=$60.2M; Q3=180·400=$72M; Q4=150·470=$70.5M. Q3 highest. Answer C.
**mistake_a:** Q1 has both lowest units and middle price → lowest revenue.
**mistake_b:** Q2 sits in the middle.
**mistake_d:** Q4 has highest price but lower volume than Q3.
**mistake_e:** Q1 and Q4 differ ($54M vs $70.5M).
**common_trap:** Picking Q4 because the price line peaks — but units fell. Always *multiply* the two axes for combo charts.
**takeaway:** Combo bar+line charts: revenue (or any product) = bar × line. Don't pick by either axis alone; the maximum product can be at neither extreme.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q21
**difficulty:** Easy
**type:** Graphics Interpretation
**topic:** Bar Chart

A bar chart shows the number of books (in thousands) published by a press across five genres in 2025:
- Mystery: 24
- Romance: 38
- Sci-Fi: 17
- Biography: 12
- Self-Help: 29

Based on the chart, the total number of books published across all five genres was closest to:

- A) 95 thousand
- B) 110 thousand
- C) 120 thousand
- D) 135 thousand
- E) 150 thousand

**answer:** C
**fastest_path:** Sum the bars: 24+38+17+12+29 = 120K.
**explanation:** Total = 24+38+17+12+29 = 120 thousand. Answer C.
**mistake_a:** 95K — slip arithmetic.
**mistake_b:** 110K — undershoot.
**mistake_d:** 135K — overshoot.
**mistake_e:** 150K — way over.
**common_trap:** Misreading the axis unit (thousands vs hundreds). Always confirm the unit label before summing.
**takeaway:** Bar-chart totals: sum literal values; verify axis unit in the legend.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q22
**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Bar Chart

A bar chart shows the average commute time (in minutes) across six metropolitan areas:
- Metro A: 28
- Metro B: 44
- Metro C: 19
- Metro D: 52
- Metro E: 33
- Metro F: 40

Based on the chart, the median commute time across the six metros is closest to:

- A) 28 minutes
- B) 33 minutes
- C) 36.5 minutes
- D) 40 minutes
- E) 44 minutes

**answer:** C
**fastest_path:** Sort values: 19, 28, 33, 40, 44, 52. Median = (33+40)/2 = 36.5.
**explanation:** Sorted: 19, 28, 33, 40, 44, 52. Six values → median is average of 3rd and 4th = (33+40)/2 = 36.5. Answer C.
**mistake_a:** 28 — picking the second-lowest (not median).
**mistake_b:** 33 — picking the 3rd value alone (not the average of 3rd and 4th).
**mistake_d:** 40 — picking the 4th alone.
**mistake_e:** 44 — picking the 5th value.
**common_trap:** With even count, picking either middle value alone instead of averaging them. Median for n=2k is (k-th + (k+1)-th) / 2.
**takeaway:** Median of even-count list: average the two middle values. Don't pick one or the other.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q23
**difficulty:** Hard
**type:** Graphics Interpretation
**topic:** Bar Chart

A grouped bar chart shows quarterly revenue (in millions of dollars) for two subsidiaries:
- Subsidiary North — Q1: 18, Q2: 22, Q3: 25, Q4: 31
- Subsidiary South — Q1: 14, Q2: 20, Q3: 28, Q4: 30

Based on the chart, the percentage-point change in Subsidiary South's share of combined revenue from Q1 to Q4 is closest to:

- A) +2 pp
- B) +6 pp
- C) +10 pp
- D) +14 pp
- E) +18 pp

**answer:** B
**fastest_path:** Q1 share = 14/32 = 43.75%. Q4 share = 30/61 ≈ 49.2%. Δ = +5.4 pp ≈ +6 pp.
**explanation:** South's share = South / (North + South). Q1: 14/32 = 43.75%. Q4: 30/61 ≈ 49.18%. Δ ≈ +5.4 pp. Answer B.
**mistake_a:** +2 pp — undershoot.
**mistake_c:** +10 pp — slip estimate.
**mistake_d:** +14 pp — using absolute revenue change (30−14=16), not share change.
**mistake_e:** +18 pp — way off.
**common_trap:** Computing South's *absolute revenue growth* (14 → 30, +16M, +114%) instead of share change. The question explicitly asks share of combined.
**takeaway:** Share-change pp: compute share at each endpoint, then subtract. Don't conflate absolute growth with share change.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q24
**difficulty:** Easy
**type:** Graphics Interpretation
**topic:** Line Graph

A line graph plots a city's monthly rainfall (in millimeters) for the first six months of 2025:
- Jan: 60
- Feb: 55
- Mar: 80
- Apr: 120
- May: 150
- Jun: 90

Based on the graph, the month with the largest month-over-month increase in rainfall is:

- A) February
- B) March
- C) April
- D) May
- E) June

**answer:** C
**fastest_path:** Compute Δ for each month: Feb −5, Mar +25, Apr +40, May +30, Jun −60. April wins.
**explanation:** Month-over-month changes: Feb −5, Mar +25, Apr +40, May +30, Jun −60. April's +40 is the largest single-month increase. Answer C.
**mistake_a:** Feb's change is −5 (decrease).
**mistake_b:** Mar's +25 is smaller than April's.
**mistake_d:** May's +30 is smaller than April's.
**mistake_e:** Jun's −60 is a *decrease*.
**common_trap:** Picking May because it's the highest *value* (150 mm). Question is the largest single-month *increase*, not the peak.
**takeaway:** "Largest increase" = compute differences between consecutive points, not absolute values.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q25
**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Line Graph

A line graph shows a startup's headcount at year-end across six years:
- 2019: 20
- 2020: 32
- 2021: 48
- 2022: 75
- 2023: 115
- 2024: 180

Based on the graph, the year with the highest year-over-year percentage growth in headcount is:

- A) 2020
- B) 2021
- C) 2022
- D) 2023
- E) 2024

**answer:** A
**fastest_path:** YoY %: 2020 60%, 2021 50%, 2022 56%, 2023 53%, 2024 57%. 2020 wins.
**explanation:** Year-over-year %: 2020: 32/20−1 = 60%; 2021: 48/32−1 = 50%; 2022: 75/48−1 ≈ 56%; 2023: 115/75−1 ≈ 53%; 2024: 180/115−1 ≈ 57%. Highest is 2020. Answer A.
**mistake_b:** 2021 is 50%, not max.
**mistake_c:** 2022 is 56%, close but below 2020.
**mistake_d:** 2023 is 53%.
**mistake_e:** 2024 is 57% — biggest *absolute* jump (+65) but smaller % since base is bigger.
**common_trap:** Picking 2024 because the absolute jump is largest. Smaller starting bases amplify percent growth.
**takeaway:** YoY %: smaller base + same absolute change = bigger %. Always compute (new−old)/old, not absolute differences.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q26
**difficulty:** Hard
**type:** Graphics Interpretation
**topic:** Line Graph

A line graph shows a country's GDP (in billions of dollars) at five-year intervals:
- 2005: 180
- 2010: 240
- 2015: 310
- 2020: 360
- 2025: 470

Based on the graph, the compound annual growth rate (CAGR) of GDP from 2005 to 2025 was closest to:

- A) 3.5%
- B) 4.9%
- C) 6.2%
- D) 8.0%
- E) 10.5%

**answer:** B
**fastest_path:** CAGR = (470/180)^(1/20) − 1 ≈ 2.611^0.05 − 1 ≈ 4.9%.
**explanation:** Compound annual: (470/180)^(1/20) − 1 = 2.611^0.05 − 1 ≈ 4.92%. Answer B.
**mistake_a:** 3.5% — too low.
**mistake_c:** 6.2% — overshoot.
**mistake_d:** 8% — *simple average* (161%/20), overstates compound rate.
**mistake_e:** 10.5% — way over.
**common_trap:** Dividing total growth (161%) by 20 years to get 8%. That's arithmetic mean, not compound. CAGR < arithmetic mean of yearly growths.
**takeaway:** CAGR ≠ total growth / years. Use the geometric formula. Verify: (1+CAGR)^n ≈ end/start.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q27
**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Scatter Plot

A scatter plot shows 12 neighborhoods with x = median household income ($thousands, range 30-150) and y = average home price ($thousands, range 200-900). Points: (35, 220), (45, 280), (55, 340), (65, 380), (75, 450), (80, 500), (90, 560), (100, 620), (110, 680), (125, 780), (140, 860), and an outlier at (70, 820).

Based on the scatter plot, the correlation between household income and home price is best described as:

- A) strong negative
- B) weak negative
- C) no correlation
- D) weak positive
- E) strong positive

**answer:** E
**fastest_path:** 11 of 12 points hug a tight upward line; one outlier doesn't change strength.
**explanation:** Bulk of points follows price ≈ 6 × income tightly. One outlier at (70, 820). Correlation is strong positive. Answer E.
**mistake_a:** Wrong direction.
**mistake_b:** Wrong direction.
**mistake_c:** Clear trend exists.
**mistake_d:** "Weak" downgraded due to outlier — but bulk fit is tight.
**common_trap:** Letting one visible outlier downgrade to "weak." Strength = bulk-of-points fit.
**takeaway:** Correlation classification: bulk of points dominates. Outliers don't reduce strength to "weak."
**related_reading:** reading-di-04-graphics-interpretation

---

## Q28
**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Scatter Plot

A scatter plot shows 10 delivery routes with x = route distance (miles, 5-50) and y = delivery time (minutes, 15-120). Most points fall along a clear upward line: (5, 18), (10, 28), (15, 40), (20, 52), (25, 62), (30, 75), (35, 88), (45, 115). Two points sit well off the line: (12, 95) and (40, 45).

Based on the scatter plot, which of the following is best supported by the data?

- A) Shorter routes tend to take longer than longer routes.
- B) The two outliers likely reflect unusual conditions rather than the typical distance-time relationship.
- C) Distance has no relationship with delivery time.
- D) Delivery time is determined entirely by distance.
- E) Longer routes always take longer than shorter routes.

**answer:** B
**fastest_path:** 8 of 10 points fit a clear upward line; 2 outliers (12, 95) and (40, 45) deviate substantially. They likely reflect unusual conditions.
**explanation:** Bulk of points: clear positive trend. Outliers (12, 95) and (40, 45) deviate by 60+ minutes from the line — too much to attribute to normal variation. Likely reflect unusual conditions (traffic, light load). Answer B.
**mistake_a:** *Reverses* — bulk shows shorter routes are faster.
**mistake_c:** Clear relationship visible.
**mistake_d:** *Extreme* — "entirely" ignores the visible scatter.
**mistake_e:** *Extreme* — outlier (40, 45) violates this; longer routes don't *always* take longer.
**common_trap:** Picking (E) because *most* longer routes take longer — but "always" is the absolute claim, broken by even one outlier.
**takeaway:** Scatter-plot inference: hedged statements ("tend to," "likely") match data better than absolutes. Outliers exist; "always" claims usually fail.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q29
**difficulty:** Easy
**type:** Graphics Interpretation
**topic:** Pie Chart

A pie chart shows how a household allocated its $6,000 monthly budget:
- Housing: 35%
- Food: 18%
- Transportation: 14%
- Healthcare: 9%
- Savings: 15%
- Discretionary: 9%

Based on the chart, the combined dollar amount spent on Housing and Food was closest to:

- A) $2,400
- B) $2,700
- C) $2,900
- D) $3,180
- E) $3,500

**answer:** D
**fastest_path:** Housing+Food = 35% + 18% = 53%. 53% × $6000 = $3180.
**explanation:** Sum the two slice percentages: 53%. Apply to $6000: $3180. Answer D.
**mistake_a:** $2400 — using only one slice (40%).
**mistake_b:** $2700 — slip rounding to 45%.
**mistake_c:** $2900 — undershoot.
**mistake_e:** $3500 — overshoot to ~58%.
**common_trap:** Rounding 35% + 18% to "about 50%" → $3000, missing exact answer at $3180.
**takeaway:** Pie-chart proportions: sum percentages literally before applying to total. Don't pre-round.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q30
**difficulty:** Easy
**type:** Graphics Interpretation
**topic:** Stacked Bar

A stacked bar chart shows monthly sales (in units) of three product lines at a boutique over three months:

| Month | Apparel | Accessories | Footwear | Total |
|-------|---------|-------------|----------|-------|
| Jan   | 400     | 250         | 150      | 800   |
| Feb   | 380     | 320         | 200      | 900   |
| Mar   | 450     | 300         | 250      | 1,000 |

Based on the chart, which statement is best supported?

- A) Footwear sales decreased from January to March.
- B) Apparel was the top-selling category in every month.
- C) Accessories sales grew each month.
- D) Total sales were flat across the three months.
- E) Footwear overtook Accessories in February.

**answer:** B
**fastest_path:** Compare Apparel (400, 380, 450) vs Accessories (250, 320, 300) vs Footwear (150, 200, 250) for each month. Apparel wins all three.
**explanation:** Apparel is the largest segment in Jan (400 vs 250 vs 150), Feb (380 vs 320 vs 200), and Mar (450 vs 300 vs 250). Answer B.
**mistake_a:** *Reverses* — Footwear rose 150→200→250.
**mistake_c:** *Wrong direction* — Accessories rose then fell (250→320→300).
**mistake_d:** *Wrong* — totals rose 800→900→1000, not flat.
**mistake_e:** *Wrong* — Feb: Accessories 320 still > Footwear 200.
**common_trap:** Stacked-bar segment heights are visible *as differences*, not absolute heights. Always read segment values directly from the table or labels.
**takeaway:** Stacked bars: each segment's *value*, not its visual top-edge, determines comparison. Use the data labels.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q31
**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Bubble Chart

A bubble chart plots 5 regional warehouses with x = order volume (thousands/month, 5-40), y = on-time delivery rate (%, 70-100), and bubble size = workforce headcount:
- Warehouse W1: x=8, y=95, size=40
- Warehouse W2: x=15, y=88, size=90
- Warehouse W3: x=22, y=82, size=150
- Warehouse W4: x=30, y=76, size=220
- Warehouse W5: x=38, y=72, size=310

Based on the chart, which statement is best supported?

- A) Larger warehouses deliver on time more reliably.
- B) Higher order volume is associated with lower on-time delivery rates and larger workforces.
- C) Workforce headcount is unrelated to order volume.
- D) The smallest warehouse has the worst on-time performance.
- E) On-time delivery increases with workforce size.

**answer:** B
**fastest_path:** Three-axis monotone: as x rises (volume up), y falls (on-time down), and size grows (headcount up). All move together → B.
**explanation:** Order by volume: W1→W5 has on-time 95→88→82→76→72 (falling) and headcount 40→90→150→220→310 (rising). Joint pattern: higher volume, lower on-time, larger workforce. Answer B.
**mistake_a:** *Reverses* — bigger (more headcount) warehouses deliver *worse* on time.
**mistake_c:** Volume + headcount move together; not unrelated.
**mistake_d:** W1 is smallest but has *highest* on-time, not worst.
**mistake_e:** *Reverses* — larger workforce → lower on-time.
**common_trap:** Reading only the x-y axes and missing the bubble-size dimension. Joint patterns require all three dimensions.
**takeaway:** Bubble chart joint patterns: scan all three dimensions for monotonic moves before ranking.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q32
**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Combination Bar + Line

A combination chart overlays bars (left axis: number of units produced, in thousands) with a line (right axis: defect rate, in %) for a factory across four quarters of 2025:

| Quarter | Units (000s) | Defect Rate (%) |
|---------|--------------|-----------------|
| Q1      | 50           | 4.0             |
| Q2      | 60           | 3.5             |
| Q3      | 75           | 2.8             |
| Q4      | 80           | 3.2             |

Based on the chart, the quarter with the highest absolute number of defective units was:

- A) Q1
- B) Q2
- C) Q3
- D) Q4
- E) Q1 and Q4 tied

**answer:** D
**fastest_path:** Defective units = units × rate. Q1=2000, Q2=2100, Q3=2100, Q4=2560. Q4 wins.
**explanation:** Q1: 50000·0.040=2000; Q2: 60000·0.035=2100; Q3: 75000·0.028=2100; Q4: 80000·0.032=2560. Highest at Q4. Answer D.
**mistake_a:** Q1 has highest *rate* (4%), but lowest volume → smallest absolute count.
**mistake_b:** Q2 = Q3 = 2100, both below Q4.
**mistake_c:** Q3 has lowest rate but mid volume → tied for second.
**mistake_e:** Q1 (2000) and Q4 (2560) differ.
**common_trap:** Picking Q1 because the rate line peaks there. Defective *units* = volume × rate, peaks where the product is highest.
**takeaway:** Combo bar+line: peak of either axis alone is rarely the peak of the product. Always multiply.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q33
**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Combination Bar + Line

A combination chart overlays bars (left axis: number of subscribers, in millions) with a line (right axis: average revenue per user, ARPU, in dollars) for a streaming service across five years:

| Year | Subscribers (M) | ARPU ($) |
|------|-----------------|----------|
| 2021 | 40              | 9.00     |
| 2022 | 55              | 10.00    |
| 2023 | 70              | 11.50    |
| 2024 | 85              | 12.00    |
| 2025 | 95              | 13.50    |

Based on the chart, total revenue in 2025 exceeded total revenue in 2021 by approximately:

- A) $600 million
- B) $850 million
- C) $922 million
- D) $1,122 million
- E) $1,282 million

**answer:** C
**fastest_path:** 2025 rev = 95·13.50 = $1282.5M. 2021 rev = 40·9.00 = $360M. Δ = $922.5M.
**explanation:** Revenue = subs × ARPU. 2025: 95·13.50 = $1282.5M. 2021: 40·9.00 = $360M. Difference = $922.5M ≈ $922M. Answer C.
**mistake_a:** $600M — subscriber-side computation.
**mistake_b:** $850M — undershoot.
**mistake_d:** $1122M — using 95 × $11.80 (slip).
**mistake_e:** $1282M — 2025 revenue *alone*, not the difference.
**common_trap:** Picking E (the 2025 total) because it matches the calculation. Read "exceeded by" — the *difference*.
**takeaway:** Combo charts asking "by how much": both totals are computed (multiply each year), then subtracted.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q34
**difficulty:** Hard
**type:** Graphics Interpretation
**topic:** Histogram

A histogram shows the distribution of 200 customer order values at an online retailer, grouped into $20-wide bins:
- $0–$20: 18 orders
- $20–$40: 42 orders
- $40–$60: 56 orders
- $60–$80: 38 orders
- $80–$100: 26 orders
- $100–$120: 14 orders
- $120–$140: 6 orders

Based on the histogram, the median order value falls in which bin?

- A) $20–$40
- B) $40–$60
- C) $60–$80
- D) $80–$100
- E) Cannot be determined

**answer:** B
**fastest_path:** N=200, median = avg of 100th and 101st. Cumulative: 18, 60, 116, 154. Both cross 100 inside $40-60 bin.
**explanation:** Cumulative counts: through $20: 18; through $40: 60; through $60: 116; through $80: 154. The 100th and 101st orders fall in the bin where cumulative count first crosses 100 — i.e., between 60 and 116 = $40-$60 bin. Answer B.
**mistake_a:** $20-$40 ends at cumulative 60, doesn't reach 100.
**mistake_c:** $60-$80 starts at cumulative 116, *past* 100.
**mistake_d:** $80-$100 even further past.
**mistake_e:** The data is enough; standard cumulative-count method.
**common_trap:** Picking the *modal* bin (which happens to coincide here) by reasoning from peak count, not cumulative sum.
**takeaway:** Histogram median: build cumulative-frequency table, find which bin contains the (n+1)/2 position.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q35
**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Dual-axis Line

A dual-axis line chart tracks two series for a coffee chain across six years. Left axis (solid line): number of stores, scale 0–2,000. Right axis (dashed line): same-store sales growth, scale −5% to +15%:

| Year | Stores | Same-Store Sales Growth (%) |
|------|--------|------------------------------|
| 2020 | 800    | −2                           |
| 2021 | 1,000  | +3                           |
| 2022 | 1,250  | +8                           |
| 2023 | 1,450  | +6                           |
| 2024 | 1,700  | +2                           |
| 2025 | 1,900  | −1                           |

Based on the chart, which statement is best supported?

- A) Store count and same-store sales growth both peaked in 2022.
- B) As the store count grew, same-store sales growth rose steadily.
- C) Store count rose every year while same-store sales growth peaked in 2022 and then declined.
- D) Same-store sales growth was negative in every year shown.
- E) Store count declined after 2022.

**answer:** C
**fastest_path:** Stores monotonically rise (800→1900); growth peaks in 2022 (+8%) then declines. Two distinct trajectories.
**explanation:** Stores: 800,1000,1250,1450,1700,1900 — strictly increasing. Growth: −2,+3,+8,+6,+2,−1 — peaks in 2022, declines after. Answer C captures both.
**mistake_a:** *Wrong* — store count didn't peak in 2022; it kept rising.
**mistake_b:** *Wrong direction* — growth peaked then declined.
**mistake_d:** Only 2020 and 2025 had negative growth.
**mistake_e:** Stores kept rising; never declined.
**common_trap:** Treating the two lines as comparable because they cross or have similar slopes. Dual-axis lines use different scales — relative position is meaningless.
**takeaway:** Dual-axis lines: read each series against *its own* axis. Crossings and slopes don't compare across the two axes.
**related_reading:** reading-di-04-graphics-interpretation


---

## Q36 (Set 13 — FlowStream Monthly Subscription Revenue)

Description: A bar chart shows monthly online subscription revenue for FlowStream (in thousand dollars), Jan through Dec: Jan 120, Feb 115, Mar 130, Apr 145, May 160, Jun 155, Jul 170, Aug 185, Sep 170, Oct 160, Nov 150, Dec 165.

**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Percent Change

Which month showed the largest percentage increase in revenue compared with the immediately previous month?

- A) February
- B) March
- C) May
- D) August
- E) December

**answer:** B
**fastest_path:** Compute % change for risers: Mar 15/115≈13%, Apr 11.5%, May 10.3%, Aug 8.8%, Dec 10%. March wins.
**explanation:** % change = Δ/prev. Same $15 rise across multiple months — the smallest base (115 in Feb→Mar) gives the highest percent: 15/115 ≈ 13%. Answer B.
**mistake_a:** Feb fell, not rose.
**mistake_c:** May 15/145 ≈ 10.3% < March's 13%.
**mistake_d:** Aug 15/170 ≈ 8.8%.
**mistake_e:** Dec 15/150 = 10%.
**common_trap:** Picking by the absolute size of the rise. Same $15 rise gives different percent depending on the base.
**takeaway:** Largest percent change: smallest *prior* base + same absolute rise wins.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q37 (Set 14 — Quarterly Website Traffic)

Description: A line graph plots quarterly website traffic (millions of visits) for three years (12 quarters in order): Q1Y1 8, Q2Y1 10, Q3Y1 9, Q4Y1 12; Q1Y2 11, Q2Y2 14, Q3Y2 12, Q4Y2 16; Q1Y3 14, Q2Y3 17, Q3Y3 15, Q4Y3 20.

**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Seasonal Pattern Identification

Which of the following best describes the pattern shown in the graph?

- A) Consistent growth every quarter, with Q2 always the peak of the year.
- B) A seasonal pattern in which Q4 is the peak each year, with year-over-year growth in every quarter.
- C) A declining trend in Q3, offset by growth in Q1.
- D) No discernible pattern.
- E) Alternating peaks in Q1 and Q3.

**answer:** B
**fastest_path:** Q1 8→11→14, Q2 10→14→17, Q3 9→12→15, Q4 12→16→20. Q4 peaks each year + every quarter grows YoY. → B.
**explanation:** Compare same-quarter across years: every quarter grows YoY, and Q4 is the annual peak each year. Answer B.
**mistake_a:** *Wrong* — Q4 (not Q2) peaks each year.
**mistake_c:** *Wrong* — Q3 grew, not declined.
**mistake_d:** Clear seasonal structure visible.
**mistake_e:** Q4 is the peak; not Q1/Q3 alternation.
**common_trap:** Reading only the within-year pattern (which goes up then dips at Q3) without verifying YoY same-quarter growth.
**takeaway:** Seasonal pattern reading: compare same-quarter values across years to confirm YoY growth + within-year peaks.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q38 (Set 15 — SaaS Dashboard Snapshot)

Description: A dashboard for a subscription software company displays three metrics. Monthly recurring revenue (MRR) in January: $4.5 million. Annualized net revenue retention (NRR): 112%. Monthly gross churn rate: approximately 2% of MRR.

**difficulty:** Hard
**type:** Graphics Interpretation
**topic:** Compound Growth Forecast

Suppose the company adds no net new customers for the next six months, so that all MRR change comes from existing-customer expansion offset by churn (consistent with the 112% annualized NRR). Approximately what is the company's MRR at the end of June?

- A) $4.55M
- B) $4.65M
- C) $4.76M
- D) $4.89M
- E) $5.04M

**answer:** C
**fastest_path:** 6-month compound factor = √1.12 ≈ 1.058. $4.5M × 1.058 ≈ $4.76M.
**explanation:** Annualized NRR=1.12 over 6 months: factor = 1.12^(1/2) ≈ 1.0583. End-of-June MRR = 4.5 × 1.0583 ≈ $4.76M. Answer C.
**mistake_a:** $4.55M — under-compounding.
**mistake_b:** $4.65M — under-estimate.
**mistake_d:** $4.89M — adding 6% linearly (12%/2).
**mistake_e:** $5.04M — full-year value (4.5 × 1.12), not 6-month.
**common_trap:** Halving the 12% annual rate to 6% over 6 months. Compounding requires the geometric square root, not linear halving.
**takeaway:** Annualized rates over partial year: factor^(t/12). For 6 months, factor^0.5 = √factor. Don't halve linearly.
**related_reading:** reading-di-04-graphics-interpretation


---

## Q39 (Set 16 — Stacked Quarterly Revenue)

Description: A stacked bar chart shows quarterly revenue (in millions of dollars) for four business units A, B, C, and D over Q1 through Q4. Quarterly values — A: 20, 25, 30, 35; B: 25, 20, 15, 10; C: 15, 20, 25, 30; D: 10, 15, 20, 25.

**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Component Trend Identification

Which business unit showed the largest percentage decline in revenue from Q1 to Q4?

- A) A
- B) B
- C) C
- D) D
- E) None of the units declined

**answer:** B
**fastest_path:** Q1→Q4 changes: A +75%, B −60%, C +100%, D +150%. Only B declined.
**explanation:** Endpoints: A 20→35, B 25→10, C 15→30, D 10→25. Only B fell. Decline = 15/25 = 60%. Answer B.
**mistake_a:** A grew, not declined.
**mistake_c:** C grew, not declined.
**mistake_d:** D grew, not declined.
**mistake_e:** B clearly declined.
**common_trap:** Eyeballing the *bar totals* (which grew) and missing that one component fell while others rose.
**takeaway:** Stacked-bar component trends: read each component's values across periods, not the total bar.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q40 (Set 17 — Budget Pie Chart)

Description: A pie chart shows how a company allocates its $600 million annual budget: R&D 25%, Marketing 20%, Salaries 35%, Operations 15%, Other 5%.

**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Category Change Impact

If the company plans to reduce its R&D budget by 20% next year while holding every other category constant in absolute dollars, what will the total budget be next year?

- A) $480M
- B) $540M
- C) $570M
- D) $600M
- E) $630M

**answer:** C
**fastest_path:** R&D was 25%×600=$150M. Cut 20%: −$30M. Others stay at $450M. New total = $570M.
**explanation:** Current R&D = $150M. Reduced 20%: new R&D = $120M (Δ −$30M). Others = $600M − $150M = $450M, held constant. New total = $450M + $120M = $570M. Answer C.
**mistake_a:** $480M — applying 20% reduction to whole budget.
**mistake_b:** $540M — applying ~10% to whole budget.
**mistake_d:** $600M — same as old (didn't reduce).
**mistake_e:** $630M — added instead of subtracted.
**common_trap:** Applying the 20% reduction to the *total* budget instead of just to R&D.
**takeaway:** Category-change problems: identify which slice changes; recompute only that slice; sum to new total.
**related_reading:** reading-di-04-graphics-interpretation


---

## Q41 (Set 18 — Advertising vs. Sales Scatter Plot)

Description: A scatter plot shows the relationship between monthly advertising spending (x-axis, in thousands of dollars) and monthly sales (y-axis, in thousands of dollars) for 10 products at a company. Data points (x, y): (20, 150), (25, 160), (30, 170), (30, 180), (35, 210), (40, 200), (45, 240), (50, 250), (55, 260), (60, 290).

**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Correlation Identification

Based on the scatter plot, which of the following best describes the relationship between advertising spending and monthly sales?

- A) Strong positive correlation
- B) Strong negative correlation
- C) No apparent correlation
- D) Weak positive correlation with significant outliers
- E) Clearly non-linear pattern with a visible turning point

**answer:** A
**fastest_path:** Sales rise monotonically with ad spend (20→60 maps to 150→290) with low scatter → strong positive.
**explanation:** Bulk of points hugs an upward line; minor scatter, no reversals. Strong positive correlation. Answer A.
**mistake_b:** Wrong direction.
**mistake_c:** Clear trend visible.
**mistake_d:** Tightness of fit warrants "strong," not "weak."
**mistake_e:** No turning point in the data.
**common_trap:** Downgrading to "weak" on minor visible scatter. Tight monotonic rise = strong.
**takeaway:** Linear-trend scatter: monotonic + low-scatter = strong-positive (or strong-negative).
**related_reading:** reading-di-04-graphics-interpretation

---

## Q42 (Set 19 — Salary Distribution Histogram)

Description: A histogram shows the distribution of employee annual salaries (in thousands of dollars) at a company across six bins: [30–40): 8 employees; [40–50): 12; [50–60): 18; [60–70): 15; [70–80): 9; [80–90): 3.

**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Bin Share Calculation

Approximately what percentage of employees earn between $50,000 and $70,000 per year?

- A) 33%
- B) 42%
- C) 51%
- D) 57%
- E) 65%

**answer:** C
**fastest_path:** $50-70K = 18+15 = 33. Total = 65. 33/65 ≈ 51%.
**explanation:** Total = 8+12+18+15+9+3 = 65. $50-$70K bins = 18+15 = 33. Percent = 33/65 ≈ 50.8% ≈ 51%. Answer C.
**mistake_a:** 33% — confusing 33 (numerator) for the percentage.
**mistake_b:** 42% — undershoot.
**mistake_d:** 57% — including $70-80K bin (37/65 ≈ 57%).
**mistake_e:** 65% — way off.
**common_trap:** Including the $70-$80K bin because of off-by-one bin reading. The interval [50, 70) includes only the $50-60 and $60-70 bins.
**takeaway:** Histogram bin selection: read the *interval endpoints* carefully; "between $50K and $70K" excludes higher bins.
**related_reading:** reading-di-04-graphics-interpretation


---

## Q43 (Set 20 — Operating Expense Pie)

Description: A pie chart shows how a company's annual $800 million operating expenses are distributed: Labor 45%, Materials 25%, Facilities 15%, Marketing 10%, Other 5%.

**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Share After One-Category Change

If Labor expenses increase by 10% next year while all other categories remain constant in dollar terms, by approximately how many percentage points does Labor's share of total operating expenses increase?

- A) 1.0 percentage points
- B) 2.4 percentage points
- C) 4.5 percentage points
- D) 10.0 percentage points
- E) 11.2 percentage points

**answer:** B
**fastest_path:** Labor 360→396 (+10%). Total 800→836. New share = 396/836 ≈ 47.4%. Δ = +2.4 pp.
**explanation:** Current Labor=360M (45% of 800M). +10% → 396M. Others = 440M (constant). New total = 836M. New share = 396/836 ≈ 47.4%. Δ = 47.4 − 45 = 2.4 pp. Answer B.
**mistake_a:** 1.0 pp — undershoot.
**mistake_c:** 4.5 pp — slip.
**mistake_d:** 10 pp — confusing within-Labor increase with share change.
**mistake_e:** 11.2 pp — way over.
**common_trap:** Confusing the *within-Labor* 10% increase with the *share-of-total* change. They're different concepts.
**takeaway:** Share-of-total change: recompute new total, then new share, then subtract from old share. Don't conflate within-category percentage with share-of-total pp.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q44 (Set 21 — Dual-Axis Quarterly Trend)

Description: A dual-axis chart shows a company's quarterly revenue (left axis, $ millions) and quarterly operating margin (right axis, %) from Q1 2022 through Q4 2023 (eight quarters). Revenue in order: 45, 48, 52, 55, 58, 60, 62, 65. Operating margin in order: 10, 11, 12, 14, 13, 13, 12, 11.

**difficulty:** Hard
**type:** Graphics Interpretation
**topic:** Derived Metric — Operating Profit

In which quarter did the company achieve the highest absolute operating profit (revenue × operating margin)?

- A) Q4 2022
- B) Q1 2023
- C) Q2 2023
- D) Q3 2023
- E) Q4 2023

**answer:** C
**fastest_path:** Profit = revenue × margin. Q4'22 7.70, Q1'23 7.54, Q2'23 7.80, Q3'23 7.44, Q4'23 7.15. Q2 2023 wins.
**explanation:** Operating profit = revenue × margin. Q4'22: 55·0.14=7.70; Q1'23: 58·0.13=7.54; Q2'23: 60·0.13=7.80; Q3'23: 62·0.12=7.44; Q4'23: 65·0.11=7.15. Maximum at Q2 2023. Answer C.
**mistake_a:** Q4'22 has highest *margin* but mid revenue → 7.70.
**mistake_b:** Q1'23 sits in the middle.
**mistake_d:** Q3'23 declined.
**mistake_e:** Q4'23 has highest *revenue* but lowest margin → 7.15 (lowest profit).
**common_trap:** Anchoring on peak of either single axis. Profit peaks where the *product* is maximized — often a middle quarter, not the extremes.
**takeaway:** Combo-chart product: compute revenue × margin for each period. Peak rarely coincides with peak of either axis alone.
**related_reading:** reading-di-04-graphics-interpretation


---

## Q45 (Set 22 — Cumulative Market Share)

Description: A stacked area chart shows a company's market share across four segments A, B, C, and D over five years, 2019 through 2023. The company's segment shares (in percentage points of the overall market): 2019 — A 15%, B 10%, C 8%, D 5% (total 38%). 2023 — A 22%, B 18%, C 12%, D 10% (total 62%).

**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Cumulative Share Growth

By how many percentage points did the company's total market share grow from 2019 to 2023?

- A) 22
- B) 24
- C) 26
- D) 38
- E) 62

**answer:** B
**fastest_path:** 2019 total = 38%. 2023 total = 62%. Δ = 24 pp.
**explanation:** Sum each year's segment shares: 2019 → 38%, 2023 → 62%. Δ = 24 pp. Answer B.
**mistake_a:** 22 — slip arithmetic.
**mistake_c:** 26 — overshoot.
**mistake_d:** 38 — using 2019 total alone.
**mistake_e:** 62 — using 2023 total alone.
**common_trap:** Confusing "percentage point" with "percent" change. (62−38)/38 = 63% would be the *percent* increase; the question asked for *pp*.
**takeaway:** Percentage-point vs percent change: pp = absolute difference of two percentages. % change = relative.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q46 (Set 23 — Experience vs. Salary Scatter)

Description: A scatter plot shows 12 data points relating years of experience (x-axis) to annual salary in thousands of dollars (y-axis), with points at approximately (2, 52), (3, 58), (3, 65), (5, 68), (7, 75), (8, 85), (9, 90), (10, 95), (12, 105), (14, 120), (15, 110), and (18, 140).

**difficulty:** Hard
**type:** Graphics Interpretation
**topic:** Correlation Strength

Based on the scatter plot, which of the following best describes the relationship between years of experience and annual salary?

- A) Strong negative correlation
- B) Weak negative correlation
- C) No apparent correlation
- D) Moderate-to-strong positive correlation, with modest scatter around an approximately linear trend
- E) Non-linear pattern with a clear turning point

**answer:** D
**fastest_path:** Steady upward trend from $52K to $140K with visible scatter (e.g., (15, 110) below line). Moderate-to-strong positive.
**explanation:** Bulk of points climbs upward; visible scatter exists but no reversal. Moderate-to-strong positive correlation. Answer D.
**mistake_a:** Wrong direction.
**mistake_b:** Wrong direction.
**mistake_c:** Clear trend visible.
**mistake_e:** No turning point in the data.
**common_trap:** Picking a stronger label without acknowledging the visible scatter. The (15, 110) and (3, 65) deviations make "moderate-to-strong" more accurate than "strong alone."
**takeaway:** Correlation strength labels: hedged options ("moderate-to-strong") are sometimes more accurate than absolute claims when scatter is visible but the trend is clear.
**related_reading:** reading-di-04-graphics-interpretation


---

## Q47 (Set 24 — Product Bubble Chart)

Description: A bubble chart shows six consumer products positioned on three axes: x = monthly sales volume in thousands of units, y = profit margin (%), and bubble size = total monthly profit in thousands of dollars. Product coordinates (x, y, bubble size): A (50, 20%, 10), B (80, 15%, 12), C (30, 35%, 10.5), D (120, 10%, 12), E (40, 25%, 10), F (100, 18%, 18).

**difficulty:** Hard
**type:** Graphics Interpretation
**topic:** Reading Three-Variable Bubble Chart

Based on the bubble chart, which product has the highest total monthly profit?

- A) A
- B) B
- C) C
- D) D
- E) F

**answer:** E
**fastest_path:** Profit = bubble size. F's bubble (18) > all others (10-12). F wins.
**explanation:** Bubble size encodes total monthly profit. F=18; next largest are B and D at 12. F wins. Answer E.
**mistake_a:** A's bubble is 10.
**mistake_b:** B's bubble is 12 — tied with D, both below F.
**mistake_c:** C has highest *margin* but bubble is 10.5.
**mistake_d:** D has highest *volume* but bubble is 12.
**common_trap:** Picking by x-axis (volume) or y-axis (margin) leader. Bubble *size* encodes the question's metric (total profit).
**takeaway:** Bubble charts: identify which dimension encodes the question's metric (x, y, or size), then read it directly. Don't anchor on a different axis.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q48 (Set 25 — Revenue vs. Costs Crossover)

Description: A line graph shows a company's quarterly revenue and quarterly operating costs (both in millions of dollars) from Q1 2022 through Q4 2023 (eight quarters). Revenue: 40, 45, 50, 55, 60, 65, 68, 70. Operating costs: 50, 52, 53, 54, 55, 58, 62, 68.

**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Crossover Identification

In which quarter did revenue first exceed operating costs?

- A) Q2 2022
- B) Q3 2022
- C) Q4 2022
- D) Q1 2023
- E) Q2 2023

**answer:** C
**fastest_path:** Walk quarter-by-quarter: Q1-Q3'22 revenue below costs. Q4'22: 55 > 54 — first crossover.
**explanation:** Quarter pairs: Q1'22 40<50, Q2'22 45<52, Q3'22 50<53, Q4'22 55>54 (crossover), Q1'23 60>55 (already crossed). First crossover: Q4 2022. Answer C.
**mistake_a:** Q2'22: 45<52, still below.
**mistake_b:** Q3'22: 50<53, still below.
**mistake_d:** Q1'23 is past the crossover (already exceeding).
**mistake_e:** Q2'23 is way past.
**common_trap:** Picking the quarter where the gap *widens* (Q1'23) instead of where lines first cross. "First exceeds" = the *first* quarter revenue > costs.
**takeaway:** Crossover questions: walk consecutive points; first quarter where one line passes the other is the answer.
**related_reading:** reading-di-04-graphics-interpretation


---

## Q49 (Set 26 — Sales Team Radar Chart)

Description: A radar (spider) chart shows three sales team members' performance scores across five categories on a 0-to-10 scale. The five categories are placed at 72° intervals around the center: Sales Volume, New Clients, Upsells, Customer Retention, and Training Completion. Scores — Team member A: 9, 7, 8, 6, 5 (total 35). Team member B: 5, 9, 7, 8, 9 (total 38). Team member C: 7, 6, 9, 7, 8 (total 37).

**difficulty:** Hard
**type:** Graphics Interpretation
**topic:** Reading a Radar Chart — Total Score

Based on the radar chart, which team member has the highest total score across all five categories?

- A) A only
- B) B only
- C) C only
- D) A and B are tied for highest
- E) A and C are tied for highest

**answer:** B
**fastest_path:** Sum each member's 5 scores: A=35, B=38, C=37. B wins.
**explanation:** A = 9+7+8+6+5 = 35; B = 5+9+7+8+9 = 38; C = 7+6+9+7+8 = 37. B has highest total. Answer B.
**mistake_a:** A=35, lowest.
**mistake_c:** C=37, second.
**mistake_d:** A and B totals differ (35 vs 38).
**mistake_e:** A and C differ (35 vs 37).
**common_trap:** Picking by *single-category dominance* — A is best at Sales Volume, C at Upsells. The total averages across all five vertices.
**takeaway:** Radar-chart totals: sum all vertex scores. Visual dominance on one axis doesn't determine the sum.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q50 (Set 27 — Linear Sign-Up Trend)

Description: A line graph shows a company's monthly customer sign-ups over the first 10 months of a year. Values: Jan 120, Feb 135, Mar 150, Apr 165, May 180, Jun 195, Jul 210, Aug 225, Sep 240, Oct 255.

**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Linear Extrapolation

If the linear trend continues, approximately how many customer sign-ups will occur in December (month 12)?

- A) 270
- B) 275
- C) 280
- D) 285
- E) 300

**answer:** D
**fastest_path:** Linear: +15 per month. From Oct 255 → Nov 270 → Dec 285.
**explanation:** Constant +15/month (Jan→Oct). Extrapolate: Nov 255+15=270, Dec 270+15=285. Answer D.
**mistake_a:** 270 — only one month forward (Nov, not Dec).
**mistake_b:** 275 — slip estimate.
**mistake_c:** 280 — undershoot.
**mistake_e:** 300 — over-extrapolating beyond Dec.
**common_trap:** Stopping at November (270) because it's the next month after the data ends. Question asks for *December*, two months out.
**takeaway:** Linear extrapolation: count *exact* number of months from the last data point. December = month 12 = 2 months past October.
**related_reading:** reading-di-04-graphics-interpretation
