---
section: DI
topic: Graphics Interpretation
---

## Q1 (Set 1 — Monthly Revenue Line Graph)

```chart
{"type":"line","title":"Monthly revenue, 2024 (thousands USD)","x":{"label":"Month"},"y":{"label":"Revenue ($K)","min":0,"max":200},"series":[{"key":"revenue","name":"Revenue"}],"data":[{"x":"Jan","revenue":85},{"x":"Feb","revenue":92},{"x":"Mar","revenue":110},{"x":"Apr","revenue":125},{"x":"May","revenue":140},{"x":"Jun","revenue":155},{"x":"Jul","revenue":170},{"x":"Aug","revenue":165},{"x":"Sep","revenue":150},{"x":"Oct","revenue":135},{"x":"Nov","revenue":120},{"x":"Dec","revenue":180}]}
```

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
**fastest_path:** Read the maximum, 180 in December, and the minimum, 85 in January. Their ratio is 180/85 ≈ 2.1.
**explanation:** The question asks only for highest divided by lowest; the months between them do not matter. December is the maximum at 180 and January is the minimum at 85. Since 180 is slightly more than twice 85, the ratio is approximately 2.1. The correct answer is C.
**common_trap:** Dividing the lower value by the higher one, or getting distracted by the shape of the trend between the endpoints.
**takeaway:** For a maximum-to-minimum ratio, identify the two extreme values first and ignore unrelated movement in the graph.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q2 (Set 1 — Monthly Revenue, continued)

```chart
{"type":"line","title":"Monthly revenue, 2024 (thousands USD)","x":{"label":"Month"},"y":{"label":"Revenue ($K)","min":0,"max":200},"series":[{"key":"revenue","name":"Revenue"}],"data":[{"x":"Jan","revenue":85},{"x":"Feb","revenue":92},{"x":"Mar","revenue":110},{"x":"Apr","revenue":125},{"x":"May","revenue":140},{"x":"Jun","revenue":155},{"x":"Jul","revenue":170},{"x":"Aug","revenue":165},{"x":"Sep","revenue":150},{"x":"Oct","revenue":135},{"x":"Nov","revenue":120},{"x":"Dec","revenue":180}]}
```

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
**explanation:** The average of a set of values is defined as the sum of the values divided by the count of values. For Q2 — the second calendar quarter — the relevant months are April, May, and June.

Reading the data points directly from the line graph:

- April revenue: 125 thousand USD
- May revenue: 140 thousand USD
- June revenue: 155 thousand USD

Let S denote the sum of Q2 revenues. Then:

S = 125 + 140 + 155 = 420 thousand USD

The number of months in Q2 is 3, so the average monthly revenue for Q2 is:

Average = S / 3 = 420 / 3 = 140 thousand USD

This result equals exactly 140, which corresponds to answer choice C. Note that 140 is also the May data point itself — a coincidence that arises because the three Q2 values (125, 140, 155) form an arithmetic sequence with common difference 15, and the mean of an arithmetic sequence equals its middle term.

The correct answer is C.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q3 (Set 2 — Population Growth Bar Chart)

```chart
{"type":"bar","title":"Population by country (millions), 2020 vs 2024","x":{"label":"Country"},"y":{"label":"Population (M)"},"series":[{"key":"y2020","name":"2020"},{"key":"y2024","name":"2024"}],"data":[{"x":"Country A","y2020":45,"y2024":50},{"x":"Country B","y2020":80,"y2024":82},{"x":"Country C","y2020":30,"y2024":38},{"x":"Country D","y2020":120,"y2024":115},{"x":"Country E","y2020":25,"y2024":35}]}
```

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
**explanation:** Percentage population growth is defined as ((2024 value − 2020 value) / 2020 value) × 100. Applying this formula to the values read directly from the bar chart:

Country A: (50 − 45) / 45 × 100 = 5/45 × 100 ≈ 11.1%
Country B: (82 − 80) / 80 × 100 = 2/80 × 100 = 2.5%
Country C: (38 − 30) / 30 × 100 = 8/30 × 100 ≈ 26.7%
Country D: (115 − 120) / 120 × 100 = −5/120 × 100 ≈ −4.2%
Country E: (35 − 25) / 25 × 100 = 10/25 × 100 = 40.0%

Ranking in descending order: Country E (40.0%) > Country C (26.7%) > Country A (11.1%) > Country B (2.5%) > Country D (−4.2%). Country D is the only country whose population declined over this period, and Country B shows only a marginal increase. Although Country A and Country C both post positive growth, neither surpasses Country E. Country E's growth of 10 million on a base of only 25 million yields the largest ratio and therefore the highest percentage change among all five countries.

The correct answer is E.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q4 (Set 2 — Population Growth, continued)

```chart
{"type":"bar","title":"Population by country (millions), 2020 vs 2024","x":{"label":"Country"},"y":{"label":"Population (M)"},"series":[{"key":"y2020","name":"2020"},{"key":"y2024","name":"2024"}],"data":[{"x":"Country A","y2020":45,"y2024":50},{"x":"Country B","y2020":80,"y2024":82},{"x":"Country C","y2020":30,"y2024":38},{"x":"Country D","y2020":120,"y2024":115},{"x":"Country E","y2020":25,"y2024":35}]}
```

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
**explanation:** Population change is defined as the 2024 value minus the 2020 value for each country. A positive result indicates a gain; a negative result indicates a loss.

Reading directly from the bar chart, the change for each country is:

- Country A: 50 - 45 = +5 million
- Country B: 82 - 80 = +2 million
- Country C: 38 - 30 = +8 million
- Country D: 115 - 120 = -5 million
- Country E: 35 - 25 = +10 million

Among the five countries, only Country D yields a negative change. Countries A, B, C, and E all recorded population gains, with Country E posting the largest gain at +10 million and Country C the second largest at +8 million. Because Country C gained less than Country E, the claim that C gained more than E is false. Country D, with a change of -5 million, is the sole country whose population declined over the period. No other country recorded a loss, confirming that Country D was the only country to lose population.

The correct answer is E.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q5 (Set 3 — Scatter Plot)

```chart
{"type":"scatter","title":"Hours studied vs. test score (15 students)","x":{"label":"Hours studied","min":0,"max":20},"y":{"label":"Test score","min":0,"max":100},"data":[{"x":2,"y":50},{"x":4,"y":56},{"x":5,"y":85},{"x":6,"y":61},{"x":8,"y":67},{"x":9,"y":70},{"x":10,"y":75},{"x":11,"y":76},{"x":13,"y":81},{"x":14,"y":84},{"x":15,"y":60},{"x":16,"y":90},{"x":18,"y":95}]}
```

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
**fastest_path:** Ignore the two clear outliers and follow the main cloud from lower left to upper right.
**explanation:** Most observations rise from scores near 50 at low study hours to scores near 95 at high study hours, and they stay fairly close to an upward-sloping pattern. The points near (5,85) and (15,60) are outliers, but they do not erase the dominant relationship. The correlation is therefore strong positive, so A is correct.
**common_trap:** Calling the correlation weak or absent because a strong relationship can still contain a few outliers.
**takeaway:** Judge correlation from the overall direction and tightness of the point cloud, not from one or two exceptions.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q6 (Set 3 — Scatter Plot, continued)

```chart
{"type":"scatter","title":"Hours studied vs. test score (15 students)","x":{"label":"Hours studied","min":0,"max":20},"y":{"label":"Test score","min":0,"max":100},"data":[{"x":2,"y":50},{"x":4,"y":56},{"x":5,"y":85},{"x":6,"y":61},{"x":8,"y":67},{"x":9,"y":70},{"x":10,"y":75},{"x":11,"y":76},{"x":13,"y":81},{"x":14,"y":84},{"x":15,"y":60},{"x":16,"y":90},{"x":18,"y":95}]}
```

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
**fastest_path:** At five study hours, the main cluster predicts a score near 60; the plotted score of 85 is roughly 25 points higher.
**explanation:** The overall scatter rises from about 50 at two hours to about 95 at eighteen hours. Around five hours, that trend places a typical score near the upper 50s or about 60. The observed point is 85, roughly 25 points above that level and far beyond the ordinary scatter around the trend. It is therefore well above the trend line, so A is correct.
**common_trap:** Calling the point only slightly above because five hours is near other low-hour observations; compare vertical position at the same x-value.
**takeaway:** Judge a point's residual vertically: actual y minus the trend-line y at that x-value.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q7 (Set 4 — Pie Chart)

```chart
{"type":"pie","title":"Smartphone market share, 2024 (%)","data":[{"name":"A","value":38},{"name":"B","value":24},{"name":"C","value":18},{"name":"D","value":12},{"name":"E","value":8}]}
```

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
**explanation:** **Governing principle.** To find the unit sales for a single segment of a pie chart, multiply the segment's percentage share by the total quantity represented by the whole chart.

Let T = total smartphone sales = 1.5 billion units = 1,500,000,000 units, and let s_C = Manufacturer C's share = 18%.

Translating into arithmetic:

Units sold by C = s_C × T = (18 / 100) × 1,500,000,000

We evaluate the product in two steps. First, 18 / 100 = 0.18. Second, 0.18 × 1,500,000,000 = 270,000,000, which equals 270 million units.

A useful cross-check: 10% of 1.5 billion is 150 million, and 8% of 1.5 billion is 0.08 × 1,500,000,000 = 120 million. Therefore 18% = 10% + 8% corresponds to 150 million + 120 million = 270 million, confirming the result.

Among the answer choices, 270 million matches option C exactly.

The correct answer is C.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q8 (Set 4 — Pie Chart, continued)

```chart
{"type":"pie","title":"Smartphone market share, 2024 (%)","data":[{"name":"A","value":38},{"name":"B","value":24},{"name":"C","value":18},{"name":"D","value":12},{"name":"E","value":8}]}
```

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
**explanation:** To find how many times one quantity is another, the ratio definition applies: if quantity P equals some multiple k of quantity Q, then k = P / Q. In this context, the two quantities are the market-share percentages read directly from the pie chart.

Let A = 38% (Manufacturer A's market share) and D = 12% (Manufacturer D's market share). The ratio sought is k = A / D = 38 / 12.

Performing the division: 38 / 12 = 3.1666..., which rounds to approximately 3.17, and therefore the closest answer choice is 3.2.

A cross-check confirms the approximation is tight: 3.2 × 12 = 38.4, which is within 0.4 percentage points of 38. The next candidate, 3.0, would imply 3.0 × 12 = 36, a deviation of 2 percentage points; and 3.5 would imply 3.5 × 12 = 42, a deviation of 4 percentage points. Neither is as close as 3.2.

The correct answer is C.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q9 (Set 5 — Stacked Bar Chart)

```chart
{"type":"stackedBar","title":"Monthly household expenses by income group ($)","x":{"label":"Income group"},"y":{"label":"Expenses ($)"},"series":[{"key":"Housing","name":"Housing"},{"key":"Food","name":"Food"},{"key":"Transport","name":"Transport"},{"key":"Other","name":"Other"}],"data":[{"x":"Low","Housing":1200,"Food":600,"Transport":300,"Other":400},{"x":"Middle","Housing":1800,"Food":900,"Transport":600,"Other":1700},{"x":"High","Housing":2800,"Food":1200,"Transport":900,"Other":4100}]}
```

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
**explanation:** **Proportional Analysis.**

To determine which income group allocates the greatest share of total monthly expenses to housing, we compute the housing percentage for each group. Let H denote housing expenditure and T denote total expenditure for a given group; then the housing share is defined as H / T, expressed as a percentage.

**Low income group.** H = 1,200, T = 2,500.

Housing share = 1,200 / 2,500 = 0.48 = 48%.

**Middle income group.** H = 1,800, T = 5,000.

Housing share = 1,800 / 5,000 = 0.36 = 36%.

**High income group.** H = 2,800, T = 9,000.

Housing share = 2,800 / 9,000 = 14/45 ≈ 0.3111 = 31.1%.

Comparing the three results: 48% > 36% > 31.1%. The low-income group's housing percentage is strictly greater than that of either the middle- or high-income group. The absolute dollar amounts — 2,800 > 1,800 > 1,200 — suggest that high-income households spend the most on housing in nominal terms, but the question asks for the proportional share. When each housing figure is expressed relative to its own group's total, the relationship reverses: as income rises, housing expenditure grows more slowly than total expenditure, causing the housing share to decline.

The results are:

- Low income: 1,200 / 2,500 = 48%
- Middle income: 1,800 / 5,000 = 36%
- High income: 2,800 / 9,000 ≈ 31.1%

48% > 36% > 31.1%, so the housing percentage is uniquely highest for the low-income group.

The correct answer is A.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q10 (Set 5 — Stacked Bar Chart, continued)

```chart
{"type":"stackedBar","title":"Monthly household expenses by income group ($)","x":{"label":"Income group"},"y":{"label":"Expenses ($)"},"series":[{"key":"Housing","name":"Housing"},{"key":"Food","name":"Food"},{"key":"Transport","name":"Transport"},{"key":"Other","name":"Other"}],"data":[{"x":"Low","Housing":1200,"Food":600,"Transport":300,"Other":400},{"x":"Middle","Housing":1800,"Food":900,"Transport":600,"Other":1700},{"x":"High","Housing":2800,"Food":1200,"Transport":900,"Other":4100}]}
```

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
**explanation:** To determine how many times as much the high-income group spends on "Other" expenses relative to the low-income group, the relevant values are read directly from the stacked bar chart and compared as a ratio.

Let H = the high-income group's monthly "Other" expenditure, and L = the low-income group's monthly "Other" expenditure:

- H = 4,100 dollars
- L = 400 dollars

The ratio H / L = 4,100 / 400 = 10.25.

Because the question asks for an approximate value, 10.25 is rounded to the nearest listed option. Among the answer choices (5, 7, 9, 10, 12), the value 10.25 is closest to 10, differing by only 0.25 — a deviation of roughly 2.5% from the exact quotient. No other choice is comparably close: 9 is off by 1.25 units, and 12 is off by 1.75 units.

Therefore, the high-income group spends approximately 10 times as much on "Other" expenses as the low-income group.

The correct answer is D.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q11
**difficulty:** Easy
**type:** Graphics Interpretation
**topic:** Bar Chart

```chart
{"type":"bar","title":"EV sales by dealership (2025, thousands)","x":{"label":"Dealership"},"y":{"label":"EVs sold (K)"},"series":[{"key":"sold","name":"EVs sold"}],"data":[{"x":"P","sold":42},{"x":"Q","sold":58},{"x":"R","sold":31},{"x":"S","sold":67},{"x":"T","sold":49}]}
```

Based on the chart, the combined sales of the two lowest-selling dealerships were closest to what fraction of the highest-selling dealership's sales?

- A) 0.85
- B) 1.00
- C) 1.09
- D) 1.25
- E) 1.50

**answer:** C
**fastest_path:** The two lowest values are 31 and 42; together they make 73. Divide by the highest value, 67: 73/67 ≈ 1.09.
**explanation:** Sort only far enough to identify the needed bars. R and P are the two lowest-selling dealerships, with 31 and 42 thousand sales, while S is highest at 67 thousand. The requested fraction is (31 + 42)/67 = 73/67, which is closest to 1.09. The correct answer is C.
**common_trap:** Using the two lowest values as separate fractions instead of adding them before dividing by the highest value.
**takeaway:** Translate the wording into a numerator and denominator before calculating: combined two lowest over highest.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q12
**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Bar Chart

```chart
{"type":"bar","title":"Average daily water consumption (L/person)","x":{"label":"City"},"y":{"label":"Liters/person"},"series":[{"key":"liters","name":"Liters"}],"data":[{"x":"City 1","liters":180},{"x":"City 2","liters":225},{"x":"City 3","liters":140},{"x":"City 4","liters":310},{"x":"City 5","liters":95},{"x":"City 6","liters":260}]}
```

Based on the chart, the number of cities whose consumption exceeds the six-city average is:

- A) 2
- B) 3
- C) 4
- D) 5
- E) 6

**answer:** B
**explanation:** A value "exceeds the average" if and only if it is strictly greater than the arithmetic mean of the data set. The six-city mean is computed first, then each value is tested against that threshold.

The sum of the six consumption values is 180 + 225 + 140 + 310 + 95 + 260. Adding in stages: 180 + 225 = 405; 405 + 140 = 545; 545 + 310 = 855; 855 + 95 = 950; 950 + 260 = 1210. Dividing by six gives a mean of 1210/6, approximately 201.67 liters per person.

Testing each city against that threshold: City 1 at 180 falls below 201.67; City 2 at 225 exceeds 201.67; City 3 at 140 falls below 201.67; City 4 at 310 exceeds 201.67; City 5 at 95 falls below 201.67; City 6 at 260 exceeds 201.67.

Exactly three cities — City 2, City 4, and City 6 — record consumption above the six-city mean of 1210/6 liters per person. The remaining three cities fall below that threshold. The count of cities whose consumption exceeds the average is therefore 3.

The correct answer is B.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q13
**difficulty:** Easy
**type:** Graphics Interpretation
**topic:** Line Graph

```chart
{"type":"line","title":"Quarterly active users (millions)","x":{"label":"Quarter"},"y":{"label":"Users (M)"},"series":[{"key":"users","name":"Active users"}],"data":[{"x":"Q1'23","users":4.2},{"x":"Q2'23","users":4.8},{"x":"Q3'23","users":5.1},{"x":"Q4'23","users":5.6},{"x":"Q1'24","users":6.0},{"x":"Q2'24","users":6.9},{"x":"Q3'24","users":7.5},{"x":"Q4'24","users":8.5}]}
```

The quarter-over-quarter growth in active users was largest between:

- A) Q1 2023 and Q2 2023
- B) Q4 2023 and Q1 2024
- C) Q1 2024 and Q2 2024
- D) Q2 2024 and Q3 2024
- E) Q3 2024 and Q4 2024

**answer:** E
**explanation:** The quarter-over-quarter change in active users is the absolute increase from one quarter to the next: change = users(Q_n+1) - users(Q_n). To identify the largest such change, this difference is computed for every consecutive pair and compared.

The eight data points read from the line graph are:

| Quarter | Active Users (millions) |
|---------|------------------------|
| Q1 2023 | 4.2 |
| Q2 2023 | 4.8 |
| Q3 2023 | 5.1 |
| Q4 2023 | 5.6 |
| Q1 2024 | 6.0 |
| Q2 2024 | 6.9 |
| Q3 2024 | 7.5 |
| Q4 2024 | 8.5 |

Every consecutive difference:

- Q1 2023 to Q2 2023: 4.8 - 4.2 = 0.6
- Q2 2023 to Q3 2023: 5.1 - 4.8 = 0.3
- Q3 2023 to Q4 2023: 5.6 - 5.1 = 0.5
- Q4 2023 to Q1 2024: 6.0 - 5.6 = 0.4
- Q1 2024 to Q2 2024: 6.9 - 6.0 = 0.9
- Q2 2024 to Q3 2024: 7.5 - 6.9 = 0.6
- Q3 2024 to Q4 2024: 8.5 - 7.5 = 1.0

The maximum change of 1.0 million occurs in a single interval, Q3 2024 to Q4 2024 (choice E). The next largest increase is 0.9 million, from Q1 2024 to Q2 2024 (choice C), and every remaining interval is smaller still. Only choice E attains the maximum quarter-over-quarter growth, so it is the unique correct answer.

The correct answer is E.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q14
**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Line Graph

```chart
{"type":"line","title":"Commodity X price ($/barrel)","x":{"label":"Year"},"y":{"label":"$/barrel"},"series":[{"key":"price","name":"Price"}],"data":[{"x":"2020","price":40},{"x":"2021","price":48},{"x":"2022","price":66},{"x":"2023","price":59},{"x":"2024","price":72}]}
```

Based on the graph, the compound annual growth rate (CAGR) of the price from 2020 to 2024 was closest to:

- A) 8%
- B) 12%
- C) 16%
- D) 20%
- E) 25%

**answer:** C
**explanation:** The compound annual growth rate over n years is defined as CAGR = (End Value / Start Value)^(1/n) - 1. Reading the values directly from the graph, the price in 2020 is $40 per barrel and the price in 2024 is $72 per barrel. The span from 2020 to 2024 covers n = 4 years. The intermediate annual prices (2021: $48, 2022: $66, 2023: $59) do not enter the CAGR formula; only the endpoints matter.

Let r denote the CAGR. Then:

r = (72 / 40)^(1/4) - 1

The ratio 72 / 40 = 1.8. We therefore need the fourth root of 1.8.

Rather than computing (1.8)^(1/4) exactly, we use the answer choices to test which rate r satisfies 40 * (1 + r)^4 = 72.

- At r = 0.12: 40 * (1.12)^4 = 40 * 1.5735 = 62.94
- At r = 0.16: 40 * (1.16)^4 = 40 * 1.8106 = 72.43
- At r = 0.20: 40 * (1.20)^4 = 40 * 2.0736 = 82.94

The target value is $72. The result at r = 0.16 yields $72.43, which differs from $72 by less than $0.50. The result at r = 0.12 falls short by nearly $9, and at r = 0.20 overshoots by nearly $11. Therefore r = 0.16 (i.e., 16%) produces the compounded end value closest to the observed $72.

Solving directly: (1.8)^(1/4) = (1.8)^0.25. Since 1.15^4 = 1.749 and 1.16^4 = 1.811, the fourth root of 1.8 lies between 1.15 and 1.16, specifically very close to 1.158. Thus r ≈ 0.158, or approximately 15.8%, which rounds to the 16% answer choice.

The correct answer is C.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q15
**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Scatter Plot

```chart
{"type":"scatter","title":"Advertising spend vs. monthly sales ($K)","x":{"label":"Ad spend ($K)","min":0,"max":100},"y":{"label":"Sales ($K)","min":0,"max":500},"data":[{"x":10,"y":80},{"x":15,"y":110},{"x":20,"y":140},{"x":25,"y":160},{"x":30,"y":200},{"x":35,"y":230},{"x":40,"y":260},{"x":50,"y":310},{"x":60,"y":360},{"x":75,"y":420},{"x":85,"y":460},{"x":55,"y":150}]}
```

Based on the scatter plot, the outlier store at (55, 150) generated approximately how much less in sales than would be predicted by the overall trend?

- A) $50 thousand
- B) $100 thousand
- C) $150 thousand
- D) $200 thousand
- E) $250 thousand

**answer:** D
**explanation:** The scatter plot presents eleven points that form a tight, nearly linear cluster — (10, 80), (15, 110), (20, 140), (25, 160), (30, 200), (35, 230), (40, 260), (50, 310), (60, 360), (75, 420), and (85, 460) — along with a single outlier at (55, 150). The task is to estimate the sales figure the trend line would predict at an advertising spend of $55 thousand, then subtract the outlier's actual value of $150 thousand.

The two data points that bracket x = 55 are (50, 310) and (60, 360). Because x = 55 falls at the exact midpoint of that interval, linear interpolation between those two bracketing points gives a predicted value of (310 + 360) / 2 = 335 thousand dollars. This visual reading is the most natural approach on a GMAT scatter plot. It is also well supported by a formal least-squares fit on the eleven trend points, which yields a slope of approximately 5.14 and an intercept near 40, producing a predicted value of roughly 323 thousand dollars at x = 55.

The shortfall is therefore in the range of 323 to 335 minus 150, that is, approximately 173 to 185 thousand dollars. Among the five answer choices — 50, 100, 150, 200, and 250 — the interpolation-based estimate of 185 is closest to 200 (difference of 15), while the regression-based estimate of 173 is nearly equidistant between 150 and 200. In either case, $200 thousand is the answer choice most consistent with the overall trend reading, and no other choice falls within reasonable range of the computed shortfall.

The correct answer is D.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q16
**difficulty:** Easy
**type:** Graphics Interpretation
**topic:** Scatter Plot

```chart
{"type":"scatter","title":"Years of experience vs. annual salary ($K)","x":{"label":"Experience (years)","min":0,"max":20},"y":{"label":"Salary ($K)","min":40,"max":160},"data":[{"x":2,"y":52},{"x":3,"y":60},{"x":5,"y":70},{"x":7,"y":85},{"x":8,"y":78},{"x":10,"y":100},{"x":12,"y":115},{"x":14,"y":125},{"x":17,"y":145},{"x":19,"y":155}]}
```

Based on the scatter plot, the correlation between experience and salary is best described as:

- A) strong negative
- B) weak negative
- C) no correlation
- D) weak positive
- E) strong positive

**answer:** E
**fastest_path:** The points rise from lower left to upper right and stay close to one upward-sloping line: strong positive correlation.
**explanation:** Direction and strength are visual judgments here. Salary generally rises as experience rises, so the direction is positive. The points cluster fairly tightly around that upward trend, with only a small local deviation, so the relationship is strong rather than weak. The correct answer is E.
**common_trap:** Calculating a slope or correlation coefficient when the answer choices ask only for a visual classification.
**takeaway:** On a scatter plot, read direction from the overall slope and strength from how tightly the points cluster around that trend.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q17
**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Pie Chart

```chart
{"type":"pie","title":"University budget allocation 2025 ($120M, %)","data":[{"name":"Instruction","value":42},{"name":"Research","value":22},{"name":"Facilities","value":15},{"name":"Administration","value":11},{"name":"Student Services","value":7},{"name":"Other","value":3}]}
```

If the university plans to reallocate half of the Administration budget equally to Research and Student Services next year, the new Research allocation (in dollars) will be closest to:

- A) $26 million
- B) $29 million
- C) $32 million
- D) $35 million
- E) $38 million

**answer:** B
**explanation:** To find a new budget allocation after a reallocation, each relevant category must first be expressed as a dollar amount (percentage multiplied by the total budget), after which the stated transfer arithmetic is applied.

With a total budget T of $120 million, the current dollar allocations are: Administration = 0.11 × 120 = $13.2 million; Research = 0.22 × 120 = $26.4 million; Student Services = 0.07 × 120 = $8.4 million.

The university transfers half of the Administration budget to Research and Student Services in equal shares. Half of Administration = 13.2 / 2 = $6.6 million. Divided equally between the two recipients, each receives 6.6 / 2 = $3.3 million.

Adding the transferred amount to the current Research budget: New Research = 26.4 + 3.3 = $29.7 million. Among the answer choices, $29.7 million is closest to $29 million.

The correct answer is B.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q18
**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Stacked Bar Chart

```chart
{"type":"stackedBar","title":"Employees by division (thousands)","x":{"label":"Year"},"y":{"label":"Employees (K)"},"series":[{"key":"Engineering","name":"Engineering"},{"key":"Sales","name":"Sales"},{"key":"Support","name":"Support"}],"data":[{"x":"2022","Engineering":3.0,"Sales":2.5,"Support":1.5},{"x":"2023","Engineering":4.0,"Sales":2.8,"Support":1.7},{"x":"2024","Engineering":5.6,"Sales":3.0,"Support":1.4}]}
```

Based on the chart, Engineering's share of total headcount from 2022 to 2024 changed by approximately how many percentage points?

- A) +8
- B) +13
- C) +18
- D) +23
- E) +28

**answer:** B
**explanation:** A percentage-point change is the arithmetic difference between two percentage values: (later percentage) minus (earlier percentage). Both values are read directly from the chart.

Engineering headcount in 2022 was 3.0 thousand against a total of 7.0 thousand, giving a share of 3.0 / 7.0 = 42.86%. In 2024, Engineering headcount was 5.6 thousand against a total of 10.0 thousand, giving a share of 5.6 / 10.0 = 56.00%. The change is 56.00 - 42.86 = 13.14 percentage points, which rounds to approximately +13. This is positive, confirming that Engineering's share of total headcount grew over the period. The answer choice that matches is B.

The correct answer is B.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q19
**difficulty:** Hard
**type:** Graphics Interpretation
**topic:** Bubble Chart

```chart
{"type":"bubble","title":"SaaS companies: contract value vs. churn (bubble = ARR)","x":{"label":"Avg contract value ($K)","min":0,"max":60},"y":{"label":"Annual churn (%)","min":0,"max":20},"data":[{"name":"Alpha","x":10,"y":18,"z":30},{"name":"Beta","x":25,"y":12,"z":85},{"name":"Gamma","x":45,"y":6,"z":140},{"name":"Delta","x":55,"y":4,"z":220},{"name":"Epsilon","x":15,"y":15,"z":45},{"name":"Zeta","x":35,"y":9,"z":110}]}
```

Which statement is best supported by the chart?

- A) Higher contract values are associated with higher churn rates.
- B) ARR size is independent of contract value.
- C) Companies with higher contract values tend to have lower churn and larger ARR.
- D) Churn rate and ARR size are positively correlated.
- E) The company with the smallest ARR has the lowest churn.

**answer:** C
**fastest_path:** Track all three encodings together: points farther right generally sit lower and use larger ARR markers.
**explanation:** The chart shows that firms with higher contract values tend to have lower churn rates and larger ARR, which is exactly C. A reverses the churn direction. B and D ignore the visible association among the plotted variables. E makes an unsupported claim about the smallest-ARR firm. Because the question asks what is best supported, the broad joint trend matters more than any single point.
**common_trap:** Reading only two axes and ignoring that marker size carries the third variable, ARR.
**takeaway:** In a multivariable scatter plot, interpret position and marker encoding together before evaluating a claim.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q20
**difficulty:** Hard
**type:** Graphics Interpretation
**topic:** Combination Bar + Line

```chart
{"type":"composed","title":"Units sold vs. average selling price (2024)","x":{"label":"Quarter"},"y":{"label":"Units (000s)"},"y2":{"label":"Avg price ($)"},"composed":{"bars":["units"],"lines":["price"]},"data":[{"x":"Q1","units":120,"price":450},{"x":"Q2","units":140,"price":430},{"x":"Q3","units":180,"price":400},{"x":"Q4","units":150,"price":470}]}
```

Based on the chart, the quarter with the highest total revenue was:

- A) Q1
- B) Q2
- C) Q3
- D) Q4
- E) Q1 and Q4 tied

**answer:** C
**explanation:** Total revenue equals units sold multiplied by average selling price. Reading units from the bar chart (expressed in thousands) and price from the line chart:

Q1: 120,000 × 450 = 54,000,000
Q2: 140,000 × 430 = 60,200,000
Q3: 180,000 × 400 = 72,000,000
Q4: 150,000 × 470 = 70,500,000

Ranked in descending order: 72,000,000 > 70,500,000 > 60,200,000 > 54,000,000. Q3 produces the highest total revenue. Q4 carries the highest average price ($470), but the 30,000-unit shortfall relative to Q3 more than offsets that price premium; the revenue gap is $72,000,000 - $70,500,000 = $1,500,000 in favor of Q3.

The correct answer is C.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q21
**difficulty:** Easy
**type:** Graphics Interpretation
**topic:** Bar Chart

```chart
{"type":"bar","title":"Books published by genre (2025, thousands)","x":{"label":"Genre"},"y":{"label":"Books (K)"},"series":[{"key":"books","name":"Books"}],"data":[{"x":"Mystery","books":24},{"x":"Romance","books":38},{"x":"Sci-Fi","books":17},{"x":"Biography","books":12},{"x":"Self-Help","books":29}]}
```

Based on the chart, the total number of books published across all five genres was closest to:

- A) 95 thousand
- B) 110 thousand
- C) 120 thousand
- D) 135 thousand
- E) 150 thousand

**answer:** C
**explanation:** When a bar chart displays discrete category values, the total across all categories is found by summing each individual bar's value. Reading the five bar heights from the chart gives the following values (in thousands): Mystery = 24, Romance = 38, Sci-Fi = 17, Biography = 12, Self-Help = 29.

The total T is computed as:

T = 24 + 38 + 17 + 12 + 29

Grouping terms for convenience:

(24 + 38) + (17 + 12) + 29 = 62 + 29 + 29 = 62 + 58 = 120

Therefore T = 120 thousand books. Comparing this result to the five answer choices — 95, 110, 120, 135, and 150 — the value 120 is an exact match rather than merely the closest approximation, making choice C the unambiguous answer.

The correct answer is C.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q22
**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Bar Chart

```chart
{"type":"bar","title":"Average commute time (minutes)","x":{"label":"Metro"},"y":{"label":"Minutes"},"series":[{"key":"minutes","name":"Commute (min)"}],"data":[{"x":"Metro A","minutes":28},{"x":"Metro B","minutes":44},{"x":"Metro C","minutes":19},{"x":"Metro D","minutes":52},{"x":"Metro E","minutes":33},{"x":"Metro F","minutes":40}]}
```

Based on the chart, the median commute time across the six metros is closest to:

- A) 28 minutes
- B) 33 minutes
- C) 36.5 minutes
- D) 40 minutes
- E) 44 minutes

**answer:** C
**explanation:** **The median of an even-numbered data set** is defined as the arithmetic mean of the two middle values once all observations are arranged in ascending order. With six metropolitan areas, the median is therefore the mean of the 3rd and 4th values in the sorted list.

Reading the bar heights directly from the chart, the six commute times are 28, 44, 19, 52, 33, and 40 minutes. Arranging these in ascending order yields:

19, 28, 33, 40, 44, 52

The 3rd value is 33 and the 4th value is 40. The median is therefore (33 + 40) / 2 = 73 / 2 = 36.5 minutes.

Among the answer choices, 36.5 minutes matches option C exactly. The other choices correspond to individual data points — 28 (Metro A), 33 (Metro E), 40 (Metro F), and 44 (Metro B) — and none of them equals the computed median. In particular, 33 and 40 are the two middle values themselves, not their mean, and selecting either of those would reflect a common error of treating one of the two middle observations as the median rather than averaging them.

The correct answer is C.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q23
**difficulty:** Hard
**type:** Graphics Interpretation
**topic:** Bar Chart

```chart
{"type":"bar","title":"Quarterly revenue by subsidiary ($M)","x":{"label":"Quarter"},"y":{"label":"Revenue ($M)"},"series":[{"key":"North","name":"North"},{"key":"South","name":"South"}],"data":[{"x":"Q1","North":18,"South":14},{"x":"Q2","North":22,"South":20},{"x":"Q3","North":25,"South":28},{"x":"Q4","North":31,"South":30}]}
```

Based on the chart, the percentage-point change in Subsidiary South's share of combined revenue from Q1 to Q4 is closest to:

- A) +2 pp
- B) +6 pp
- C) +10 pp
- D) +14 pp
- E) +18 pp

**answer:** B
**explanation:** A subsidiary's share of combined revenue in a given quarter is its revenue divided by the sum of both subsidiaries' revenues for that quarter, expressed as a percentage. The percentage-point change in that share from Q1 to Q4 is the Q4 share minus the Q1 share — an arithmetic difference of two percentages, not a relative change.

Reading from the chart: Subsidiary North records 18 in Q1 and 31 in Q4; Subsidiary South records 14 in Q1 and 30 in Q4.

In Q1, combined revenue is 18 + 14 = 32. Subsidiary South's share is 14 / 32 = 0.4375, or 43.75%.

In Q4, combined revenue is 31 + 30 = 61. Subsidiary South's share is 30 / 61 ≈ 0.4918, or approximately 49.18%.

The percentage-point change is 49.18% − 43.75% = 5.43 pp. Among the given answer choices, +6 pp is the closest value.

The correct answer is B.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q24
**difficulty:** Easy
**type:** Graphics Interpretation
**topic:** Line Graph

```chart
{"type":"line","title":"Monthly rainfall (mm), 2025","x":{"label":"Month"},"y":{"label":"Rainfall (mm)"},"series":[{"key":"rainfall","name":"Rainfall"}],"data":[{"x":"Jan","rainfall":60},{"x":"Feb","rainfall":55},{"x":"Mar","rainfall":80},{"x":"Apr","rainfall":120},{"x":"May","rainfall":150},{"x":"Jun","rainfall":90}]}
```

Based on the graph, the month with the largest month-over-month increase in rainfall is:

- A) February
- B) March
- C) April
- D) May
- E) June

**answer:** C
**explanation:** A month-over-month increase in rainfall is defined as the positive difference between a given month's rainfall and the immediately preceding month's rainfall. We compute this difference for every consecutive pair of months represented on the graph and identify the maximum.

Let d(m) denote the month-over-month change for month m, where d(m) = rainfall(m) - rainfall(m - 1).

- d(Feb) = 55 - 60 = -5 (a decrease; not eligible)
- d(Mar) = 80 - 55 = +25
- d(Apr) = 120 - 80 = +40
- d(May) = 150 - 120 = +30
- d(Jun) = 90 - 150 = -60 (a decrease; not eligible)

Comparing the positive values, we find 25 < 40 > 30, therefore the largest month-over-month increase is 40 mm, which occurs in April.

The correct answer is C.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q25
**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Line Graph

```chart
{"type":"line","title":"Year-end headcount","x":{"label":"Year"},"y":{"label":"Headcount"},"series":[{"key":"headcount","name":"Headcount"}],"data":[{"x":"2019","headcount":20},{"x":"2020","headcount":32},{"x":"2021","headcount":48},{"x":"2022","headcount":75},{"x":"2023","headcount":115},{"x":"2024","headcount":180}]}
```

Based on the graph, the year with the highest year-over-year percentage growth in headcount is:

- A) 2020
- B) 2021
- C) 2022
- D) 2023
- E) 2024

**answer:** A
**explanation:** Year-over-year percentage growth is defined as ((headcount in year N) - (headcount in year N-1)) / (headcount in year N-1) * 100. We apply this formula to each year for which a prior-year value exists.

Let H(y) denote headcount at the end of year y. The values read from the graph are:

- H(2019) = 20
- H(2020) = 32
- H(2021) = 48
- H(2022) = 75
- H(2023) = 115
- H(2024) = 180

We compute g(y) = (H(y) - H(y-1)) / H(y-1) * 100 for each eligible year:

- g(2020) = (32 - 20) / 20 * 100 = 12/20 * 100 = 60.00%
- g(2021) = (48 - 32) / 32 * 100 = 16/32 * 100 = 50.00%
- g(2022) = (75 - 48) / 48 * 100 = 27/48 * 100 = 56.25%
- g(2023) = (115 - 75) / 75 * 100 = 40/75 * 100 = 53.33%
- g(2024) = (180 - 115) / 115 * 100 = 65/115 * 100 = 56.52%

Ranking in descending order: 60.00% > 56.52% > 56.25% > 53.33% > 50.00%. The year 2020 produces the largest value, 60%, which exceeds each subsequent year's growth rate. Although the absolute increases grow larger over time (12, 16, 27, 40, 65), the denominator grows proportionally faster after 2020, causing the percentage rate to remain below 60% in every later year.

The correct answer is A.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q26
**difficulty:** Hard
**type:** Graphics Interpretation
**topic:** Line Graph

```chart
{"type":"line","title":"GDP at five-year intervals ($B)","x":{"label":"Year"},"y":{"label":"GDP ($B)"},"series":[{"key":"gdp","name":"GDP"}],"data":[{"x":"2005","gdp":180},{"x":"2010","gdp":240},{"x":"2015","gdp":310},{"x":"2020","gdp":360},{"x":"2025","gdp":470}]}
```

Based on the graph, the compound annual growth rate (CAGR) of GDP from 2005 to 2025 was closest to:

- A) 3.5%
- B) 4.9%
- C) 6.2%
- D) 8.0%
- E) 10.5%

**answer:** B
**explanation:** The compound annual growth rate (CAGR) over n years is the constant annual rate r satisfying

    Ending Value = Starting Value * (1 + r)^n

which gives

    r = (Ending Value / Starting Value)^(1/n) - 1

The GDP in 2005 is 180 billion dollars and in 2025 is 470 billion dollars, a span of n = 20 years. Substituting,

    (1 + r)^20 = 470 / 180 = 2.6111...

Taking the twentieth root via the natural logarithm: ln(2.6111) is approximately 0.9598, dividing by 20 gives approximately 0.04799, and e^0.04799 is approximately 1.0492. Therefore r is approximately 0.0492, or about 4.9%.

Bracket verification against the forward formula 180 * (1 + r)^20:

- r = 3.5%: 180 * (1.035)^20 is approximately 358, well below 470.
- r = 4.9%: 180 * (1.049)^20 is approximately 469, essentially equal to 470.
- r = 6.2%: 180 * (1.062)^20 is approximately 600, well above 470.
- r = 8.0%: 180 * (1.080)^20 is approximately 839, far above 470.
- r = 10.5%: 180 * (1.105)^20 is approximately 1326, far above 470.

The target ratio of approximately 2.611 is matched only by r near 4.9%. All other choices produce terminal values that fall far short of or greatly exceed 470 billion dollars.

The correct answer is B.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q27
**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Scatter Plot

```chart
{"type":"scatter","title":"Median household income vs. home price ($K)","x":{"label":"Income ($K)","min":30,"max":150},"y":{"label":"Home price ($K)","min":200,"max":900},"data":[{"x":35,"y":220},{"x":45,"y":280},{"x":55,"y":340},{"x":65,"y":380},{"x":75,"y":450},{"x":80,"y":500},{"x":90,"y":560},{"x":100,"y":620},{"x":110,"y":680},{"x":125,"y":780},{"x":140,"y":860},{"x":70,"y":820}]}
```

Based on the scatter plot, the correlation between household income and home price is best described as:

- A) strong negative
- B) weak negative
- C) no correlation
- D) weak positive
- E) strong positive

**answer:** E
**fastest_path:** Judge the dominant pattern: 11 of 12 points form a tight upward line; one high-price outlier does not erase it.
**explanation:** As income rises from $35K to $140K, home price generally rises from $220K to $860K, and most points lie close to a straight upward trend. The point near ($70K, $820K) is an outlier, but the remaining 11 points show a clear, tight positive association. The best description is strong positive correlation, choice E.
**common_trap:** Do not label the relationship weak merely because one point is unusual. Strength reflects the overall pattern across all observations.
**takeaway:** Identify the dominant direction and tightness first; then decide whether outliers are numerous or severe enough to change the label.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q28
**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Scatter Plot

```chart
{"type":"scatter","title":"Route distance vs. delivery time","x":{"label":"Distance (miles)","min":5,"max":50},"y":{"label":"Time (min)","min":15,"max":120},"data":[{"x":5,"y":18},{"x":10,"y":28},{"x":15,"y":40},{"x":20,"y":52},{"x":25,"y":62},{"x":30,"y":75},{"x":35,"y":88},{"x":45,"y":115},{"x":12,"y":95},{"x":40,"y":45}]}
```

Based on the scatter plot, which of the following is best supported by the data?

- A) Shorter routes tend to take longer than longer routes.
- B) The two outliers likely reflect unusual conditions rather than the typical distance-time relationship.
- C) Distance has no relationship with delivery time.
- D) Delivery time is determined entirely by distance.
- E) Longer routes always take longer than shorter routes.

**answer:** B
**fastest_path:** Identify the main upward distance-time pattern, then treat the two far-off points as exceptions rather than the rule.
**explanation:** Most points follow a positive relationship: longer routes generally take more time. Two observations sit well away from that pattern, so unusual conditions are the best-supported explanation, making B correct. A reverses the main trend, C denies it, and D and E use absolute language that the outliers directly disprove. The chart supports a tendency, not a deterministic rule.
**common_trap:** Letting two outliers erase the dominant relationship or choosing an 'always' statement that the outliers contradict.
**takeaway:** Separate the main pattern from outliers, and avoid absolute conclusions when the plot contains clear exceptions.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q29
**difficulty:** Easy
**type:** Graphics Interpretation
**topic:** Pie Chart

```chart
{"type":"pie","title":"Monthly household budget ($6,000, %)","data":[{"name":"Housing","value":35},{"name":"Food","value":18},{"name":"Transportation","value":14},{"name":"Healthcare","value":9},{"name":"Savings","value":15},{"name":"Discretionary","value":9}]}
```

Based on the chart, the combined dollar amount spent on Housing and Food was closest to:

- A) $2,400
- B) $2,700
- C) $2,900
- D) $3,180
- E) $3,500

**answer:** D
**explanation:** In a pie chart representing a fixed total, the dollar value of any category is found by multiplying the total budget by that category's percentage expressed as a decimal. Let T = $6,000 (the monthly budget), and let p_H = 35% and p_F = 18% denote the Housing and Food shares, respectively.

The combined percentage for Housing and Food is p_H + p_F = 35 + 18 = 53%.

Applying the governing principle, the combined dollar amount is T × (p_H + p_F) / 100 = 6000 × 53/100 = 6000 × 0.53.

Computing directly: 6000 × 0.53 = 6000 × 0.50 + 6000 × 0.03 = 3000 + 180 = 3180.

Therefore the combined dollar amount spent on Housing and Food equals exactly $3,180, which corresponds to answer choice D. Among the five options, $3,180 is not merely the closest — it is the exact result, confirming the selection without ambiguity.

The correct answer is D.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q30
**difficulty:** Easy
**type:** Graphics Interpretation
**topic:** Stacked Bar

```chart
{"type":"stackedBar","title":"Monthly sales by product line (units)","x":{"label":"Month"},"y":{"label":"Units"},"series":[{"key":"Apparel","name":"Apparel"},{"key":"Accessories","name":"Accessories"},{"key":"Footwear","name":"Footwear"}],"data":[{"x":"Jan","Apparel":400,"Accessories":250,"Footwear":150},{"x":"Feb","Apparel":380,"Accessories":320,"Footwear":200},{"x":"Mar","Apparel":450,"Accessories":300,"Footwear":250}]}
```

Based on the chart, which statement is best supported?

- A) Footwear sales decreased from January to March.
- B) Apparel was the top-selling category in every month.
- C) Accessories sales grew each month.
- D) Total sales were flat across the three months.
- E) Footwear overtook Accessories in February.

**answer:** B
**fastest_path:** Compare the three category values within each month. Apparel leads in January (400), February (380), and March (450), so B is supported.
**explanation:** Check a statement against all three months, not just one. Apparel exceeds Accessories and Footwear in January, February, and March. The other claims each conflict with at least one chart value: Footwear rises, Accessories falls in March, totals rise, and Footwear remains below Accessories in February. The correct answer is B.
**common_trap:** Accepting a statement because it works in one month without verifying the full period named in the choice.
**takeaway:** For “best supported,” test each claim against every relevant category and time period.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q31
**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Bubble Chart

```chart
{"type":"bubble","title":"Warehouses: order volume vs. on-time rate (bubble = headcount)","x":{"label":"Order volume (K/mo)","min":0,"max":40},"y":{"label":"On-time delivery (%)","min":70,"max":100},"data":[{"name":"W1","x":8,"y":95,"z":40},{"name":"W2","x":15,"y":88,"z":90},{"name":"W3","x":22,"y":82,"z":150},{"name":"W4","x":30,"y":76,"z":220},{"name":"W5","x":38,"y":72,"z":310}]}
```

Based on the chart, which statement is best supported?

- A) Larger warehouses deliver on time more reliably.
- B) Higher order volume is associated with lower on-time delivery rates and larger workforces.
- C) Workforce headcount is unrelated to order volume.
- D) The smallest warehouse has the worst on-time performance.
- E) On-time delivery increases with workforce size.

**answer:** B
**explanation:** A bubble chart encodes three variables simultaneously: x-position, y-position, and bubble area proportional to a third quantitative measure. To evaluate which statement is best supported, each warehouse's coordinates and bubble size are read directly, then examined for consistent monotonic relationships across the five data points.

Let V = order volume (thousands/month), D = on-time delivery rate (%), and H = workforce headcount (bubble size). The five observations are:

| Warehouse | V | D | H |
|-----------|---|---|---|
| W1 | 8 | 95 | 40 |
| W2 | 15 | 88 | 90 |
| W3 | 22 | 82 | 150 |
| W4 | 30 | 76 | 220 |
| W5 | 38 | 72 | 310 |

As V increases from 8 to 15 to 22 to 30 to 38, D moves as 95 > 88 > 82 > 76 > 72 — strictly decreasing at every step, for a total drop of 23 percentage points across the full range of V. Over the same sequence, H moves as 40 < 90 < 150 < 220 < 310 — strictly increasing at every step, for a total rise of 270 headcount units. Both sub-claims in choice B are therefore verified without exception: higher order volume corresponds to lower on-time delivery rates and larger workforces. The remaining choices each contradict one or more of these monotone patterns. Choice A reverses the H-to-D relationship; the data show W5 (the largest workforce) has the lowest delivery rate, not the highest. Choice C denies any relationship between H and V despite their clear co-movement. Choice D misidentifies W1 as having the worst on-time performance when it in fact records the best rate at 95%. Choice E claims D rises with H, the opposite of what the data show.

The correct answer is B.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q32
**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Combination Bar + Line

```chart
{"type":"composed","title":"Units produced vs. defect rate (2025)","x":{"label":"Quarter"},"y":{"label":"Units (000s)"},"y2":{"label":"Defect rate (%)"},"composed":{"bars":["units"],"lines":["defectRate"]},"data":[{"x":"Q1","units":50,"defectRate":4.0},{"x":"Q2","units":60,"defectRate":3.5},{"x":"Q3","units":75,"defectRate":2.8},{"x":"Q4","units":80,"defectRate":3.2}]}
```

Based on the chart, the quarter with the highest absolute number of defective units was:

- A) Q1
- B) Q2
- C) Q3
- D) Q4
- E) Q1 and Q4 tied

**answer:** D
**explanation:** The absolute number of defective units produced in a given quarter is the product of the total units produced and the defect rate expressed as a decimal. Let U(Q) denote units produced in thousands and r(Q) the defect rate as a proportion; then defective units D(Q) = U(Q) × 1,000 × r(Q).

From the combination chart, the following values are read directly:

| Quarter | Units (000s) | Defect Rate (%) | r(Q) (decimal) |
|---------|-------------|-----------------|----------------|
| Q1      | 50          | 4.0             | 0.040          |
| Q2      | 60          | 3.5             | 0.035          |
| Q3      | 75          | 2.8             | 0.028          |
| Q4      | 80          | 3.2             | 0.032          |

Applying the formula to each quarter:

D(Q1) = 50,000 × 0.040 = 2,000

D(Q2) = 60,000 × 0.035 = 2,100

D(Q3) = 75,000 × 0.028 = 2,100

D(Q4) = 80,000 × 0.032 = 2,560

The ordering is 2,000 < 2,100 = 2,100 < 2,560, so D(Q4) is strictly the largest value. Although Q3 carries the lowest defect rate on the line graph, its production volume is not high enough to overcome Q4's combination of higher volume (80,000 units) and only modestly elevated defect rate (3.2%). The visual prominence of the Q2 and Q3 bars on the left axis does not translate to the highest defect count once the right-axis rate is applied.

The correct answer is D.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q33
**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Combination Bar + Line

```chart
{"type":"composed","title":"Subscribers vs. ARPU","x":{"label":"Year"},"y":{"label":"Subscribers (M)"},"y2":{"label":"ARPU ($)"},"composed":{"bars":["subscribers"],"lines":["arpu"]},"data":[{"x":"2021","subscribers":40,"arpu":9.00},{"x":"2022","subscribers":55,"arpu":10.00},{"x":"2023","subscribers":70,"arpu":11.50},{"x":"2024","subscribers":85,"arpu":12.00},{"x":"2025","subscribers":95,"arpu":13.50}]}
```

Based on the chart, total revenue in 2025 exceeded total revenue in 2021 by approximately:

- A) $600 million
- B) $850 million
- C) $922 million
- D) $1,122 million
- E) $1,282 million

**answer:** C
**explanation:** Total revenue for a given year equals the number of subscribers multiplied by the average revenue per user (ARPU). Because subscribers are expressed in millions, the product of subscribers (in millions) and ARPU (in dollars per user) yields total revenue in millions of dollars.

Let R(y) denote total revenue in year y. Then:

R(y) = Subscribers(y) [millions] × ARPU(y) [$/user]

Reading the values directly from the chart:

- 2021: Subscribers = 40 M, ARPU = $9.00
- 2025: Subscribers = 95 M, ARPU = $13.50

Applying the formula:

R(2021) = 40 × 9.00 = 360 million dollars

R(2025) = 95 × 13.50 = 95 × 13 + 95 × 0.50 = 1,235 + 47.50 = 1,282.50 million dollars

The excess of 2025 revenue over 2021 revenue is therefore:

R(2025) - R(2021) = 1,282.50 - 360 = 922.50 million dollars

Rounding to the nearest whole million, the difference is approximately $922 million, which corresponds to choice C.

The correct answer is C.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q34
**difficulty:** Hard
**type:** Graphics Interpretation
**topic:** Histogram

```chart
{"type":"bar","title":"Customer order value distribution (200 orders)","x":{"label":"Order value ($)"},"y":{"label":"Orders"},"series":[{"key":"orders","name":"Orders"}],"data":[{"x":"0–20","orders":18},{"x":"20–40","orders":42},{"x":"40–60","orders":56},{"x":"60–80","orders":38},{"x":"80–100","orders":26},{"x":"100–120","orders":14},{"x":"120–140","orders":6}]}
```

Based on the histogram, the median order value falls in which bin?

- A) $20–$40
- B) $40–$60
- C) $60–$80
- D) $80–$100
- E) Cannot be determined

**answer:** B
**explanation:** The median of a dataset is the middle value when all observations are arranged in ascending order. For an even number of observations n, the median is the average of the (n/2)-th and the (n/2 + 1)-th values. Here n = 200, so the median is the average of the 100th and 101st values in the ordered list of order amounts.

The total is confirmed: 18 + 42 + 56 + 38 + 26 + 14 + 6 = 200.

Cumulative frequencies from the lowest bin upward locate which bin contains the 100th and 101st positions.

- Bin $0–$20: 18 orders — cumulative count = 18. The 100th position is not yet reached.
- Bin $20–$40: 42 orders — cumulative count = 18 + 42 = 60. The 100th position is still not reached; positions 1 through 60 are accounted for.
- Bin $40–$60: 56 orders — cumulative count = 60 + 56 = 116. Positions 61 through 116 all fall within this bin.

Because position 100 satisfies 61 <= 100 <= 116, the 100th value lies in the $40–$60 bin. Likewise, position 101 satisfies 61 <= 101 <= 116, so the 101st value also lies in the $40–$60 bin. The average of two values both drawn from the same bin must itself fall within that bin. Therefore the median order value falls in the $40–$60 bin.

The $20–$40 bin accounts only for positions 19–60, so it is exhausted before position 100 is reached; the $60–$80 bin begins only at position 117, which is beyond both target positions. No ambiguity exists, and the answer cannot be "Cannot be determined."

The correct answer is B.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q35
**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Dual-axis Line

```chart
{"type":"composed","title":"Store count vs. same-store sales growth","x":{"label":"Year"},"y":{"label":"Stores"},"y2":{"label":"Same-store growth (%)"},"composed":{"bars":["stores"],"lines":["growth"]},"data":[{"x":"2020","stores":800,"growth":-2},{"x":"2021","stores":1000,"growth":3},{"x":"2022","stores":1250,"growth":8},{"x":"2023","stores":1450,"growth":6},{"x":"2024","stores":1700,"growth":2},{"x":"2025","stores":1900,"growth":-1}]}
```

Based on the chart, which statement is best supported?

- A) Store count and same-store sales growth both peaked in 2022.
- B) As the store count grew, same-store sales growth rose steadily.
- C) Store count rose every year while same-store sales growth peaked in 2022 and then declined.
- D) Same-store sales growth was negative in every year shown.
- E) Store count declined after 2022.

**answer:** C
**fastest_path:** Read each series separately: store count rises every year; same-store growth peaks at 8% in 2022, then falls.
**explanation:** Store count increases from 800 in 2020 to 1,900 in 2025 with no decline. Same-store sales growth rises from -2% to 3% to 8% in 2022, then declines to 6%, 2%, and -1%. This is exactly C. Store count does not peak in 2022, growth does not rise steadily, and neither series behaves as A, B, D, or E claims.
**common_trap:** Combining the bar and line series into one trend instead of tracking each measure independently.
**takeaway:** On a dual-axis chart, describe each series first, then evaluate claims about how their trends coincide or diverge.
**related_reading:** reading-di-04-graphics-interpretation


---

## Q36 (Set 13 — FlowStream Monthly Subscription Revenue)

```chart
{"type":"bar","title":"FlowStream monthly subscription revenue ($K)","x":{"label":"Month"},"y":{"label":"Revenue ($K)"},"series":[{"key":"revenue","name":"Revenue"}],"data":[{"x":"Jan","revenue":120},{"x":"Feb","revenue":115},{"x":"Mar","revenue":130},{"x":"Apr","revenue":145},{"x":"May","revenue":160},{"x":"Jun","revenue":155},{"x":"Jul","revenue":170},{"x":"Aug","revenue":185},{"x":"Sep","revenue":170},{"x":"Oct","revenue":160},{"x":"Nov","revenue":150},{"x":"Dec","revenue":165}]}
```

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
**fastest_path:** Every positive month shown rises by $15K, so the largest percentage increase comes from the smallest prior-month base.
**explanation:** The positive changes into March, April, May, July, August, and December are all $15K. Their prior-month bases are 115, 130, 145, 155, 170, and 150. Because the same increase divided by a smaller base gives a larger percentage, March is largest: 15/115 = 13.0%. Choice B.
**common_trap:** The question asks for percentage increase, not dollar increase. Equal $15K gains produce different percentages because their starting values differ.
**takeaway:** Percentage change equals change divided by the previous value; always identify the correct base.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q37 (Set 14 — Quarterly Website Traffic)

```chart
{"type":"line","title":"Quarterly website traffic (millions of visits)","x":{"label":"Quarter"},"y":{"label":"Visits (M)"},"series":[{"key":"visits","name":"Visits"}],"data":[{"x":"Q1Y1","visits":8},{"x":"Q2Y1","visits":10},{"x":"Q3Y1","visits":9},{"x":"Q4Y1","visits":12},{"x":"Q1Y2","visits":11},{"x":"Q2Y2","visits":14},{"x":"Q3Y2","visits":12},{"x":"Q4Y2","visits":16},{"x":"Q1Y3","visits":14},{"x":"Q2Y3","visits":17},{"x":"Q3Y3","visits":15},{"x":"Q4Y3","visits":20}]}
```

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
**fastest_path:** Compare the same quarter across years, then find each year's peak. Every quarter grows year over year, and Q4 is always highest.
**explanation:** The yearly pattern repeats: Q1 rises to Q2, dips in Q3, and peaks in Q4. Q4 values are 12, 16, and 20, the highest in each year. Each matching quarter also increases from Year 1 to Year 3: Q1 8-11-14, Q2 10-14-17, Q3 9-12-15, and Q4 12-16-20. This is seasonal Q4 peaking with year-over-year growth, choice B.
**common_trap:** Do not read the whole line as uninterrupted quarterly growth; Q3 dips within each year even though each quarter grows year over year.
**takeaway:** Separate seasonality (within-year shape) from trend (same-period change across years).
**related_reading:** reading-di-04-graphics-interpretation

---

## Q38 (Set 15 — SaaS Dashboard Snapshot)

A dashboard for a subscription software company displays three metrics:

| Dashboard metric | Value |
|---|---|
| Monthly recurring revenue (MRR), January | $4.5 million |
| Net revenue retention (NRR), annualized | 112% |
| Monthly gross churn rate | approximately 2% of MRR |

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
**fastest_path:** Six months is half a year, so apply the square root of the 1.12 annual NRR multiplier: $4.5M x sqrt(1.12).
**explanation:** Annualized NRR of 112% means existing-customer MRR multiplies by 1.12 over a year. Over six months, use 1.12^(6/12) = sqrt(1.12), about 1.0583. Thus projected MRR is $4.5M x 1.0583 = about $4.76M, so C is correct. Do not subtract the 2% gross churn separately: NRR already nets churn and contraction against expansion.
**common_trap:** Applying the full 12% annual increase over six months or subtracting gross churn again after using net retention.
**takeaway:** Convert an annual compound multiplier to a partial-year multiplier, and do not double-count components already included in a net metric.
**related_reading:** reading-di-04-graphics-interpretation


---

## Q39 (Set 16 — Stacked Quarterly Revenue)

```chart
{"type":"stackedBar","title":"Quarterly revenue by business unit ($M)","x":{"label":"Quarter"},"y":{"label":"Revenue ($M)"},"series":[{"key":"A","name":"Unit A"},{"key":"B","name":"Unit B"},{"key":"C","name":"Unit C"},{"key":"D","name":"Unit D"}],"data":[{"x":"Q1","A":20,"B":25,"C":15,"D":10},{"x":"Q2","A":25,"B":20,"C":20,"D":15},{"x":"Q3","A":30,"B":15,"C":25,"D":20},{"x":"Q4","A":35,"B":10,"C":30,"D":25}]}
```

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
**explanation:** The percentage change in revenue from Q1 to Q4 for any business unit is computed as (Q4 value minus Q1 value) divided by the Q1 value, multiplied by 100. A negative result indicates a decline; the unit with the most negative result showed the largest percentage decline.

Reading the values from the stacked bar chart for each unit:

- Unit A: Q1 = 20, Q4 = 35
- Unit B: Q1 = 25, Q4 = 10
- Unit C: Q1 = 15, Q4 = 30
- Unit D: Q1 = 10, Q4 = 25

Applying the percentage-change formula to each unit in turn:

Unit A: (35 - 20) / 20 * 100 = 15/20 * 100 = 75%. Unit A experienced growth, not decline.

Unit B: (10 - 25) / 25 * 100 = -15/25 * 100 = -60%. Unit B declined by 60%.

Unit C: (30 - 15) / 15 * 100 = 15/15 * 100 = 100%. Unit C doubled its revenue; no decline.

Unit D: (25 - 10) / 10 * 100 = 15/10 * 100 = 150%. Unit D grew substantially; no decline.

Among the four units, only Unit B experienced any decline at all, falling from 25 million dollars in Q1 to 10 million dollars in Q4, a decrease of 15 million dollars. The magnitude of that decline as a percentage of the Q1 base is -15/25 * 100 = -60%. Because no other unit declined, Unit B holds the largest percentage decline by default.

The correct answer is B.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q40 (Set 17 — Budget Pie Chart)

```chart
{"type":"pie","title":"Annual budget allocation ($600M total, %)","data":[{"name":"R&D","value":25},{"name":"Marketing","value":20},{"name":"Salaries","value":35},{"name":"Operations","value":15},{"name":"Other","value":5}]}
```

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
**explanation:** The governing principle is that when one budget category changes while all others remain fixed in absolute dollars, the new total equals the old total adjusted only by the absolute change in that single category.

Let T = total budget = $600M. From the pie chart, R&D represents 25% of T, so the current R&D allocation is 0.25 * 600 = $150M. The remaining categories account for the other 75%: Marketing (20%), Salaries (35%), Operations (15%), and Other (5%), whose combined absolute value is 0.75 * 600 = $450M. Because every category other than R&D is held constant in absolute dollars, that $450M figure carries forward unchanged into the next year's budget.

The proposed reduction applies only to R&D. A 20% reduction on $150M yields a new R&D allocation of 150 * (1 - 0.20) = 150 * 0.80 = $120M. The absolute decrease in R&D spending is therefore 150 - 120 = $30M.

The new total budget is the sum of the unchanged categories and the revised R&D figure:

New total = $450M + $120M = $570M

Equivalently, New total = $600M - $30M = $570M.

Both approaches confirm the same result. Note that the reduction of $30M is 5% of the original $600M total (30/600 = 0.05), which equals the product of R&D's budget share (25%) and the percentage cut applied within that category (20%): 0.25 * 0.20 = 0.05. This cross-check is consistent.

The correct answer is C.
**related_reading:** reading-di-04-graphics-interpretation


---

## Q41 (Set 18 — Advertising vs. Sales Scatter Plot)

```chart
{"type":"scatter","title":"Advertising spend vs. monthly sales ($K)","x":{"label":"Ad spend ($K)"},"y":{"label":"Sales ($K)"},"data":[{"x":20,"y":150},{"x":25,"y":160},{"x":30,"y":170},{"x":30,"y":180},{"x":35,"y":210},{"x":40,"y":200},{"x":45,"y":240},{"x":50,"y":250},{"x":55,"y":260},{"x":60,"y":290}]}
```

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
**fastest_path:** Read the overall direction and tightness of the points: they rise steadily from about (20,150) to (60,290) with little scatter.
**explanation:** As advertising spend increases, monthly sales almost always increase, so the direction is positive. The points also lie close to a straight upward trend, with only small deviations such as the point near (40,200). There are no major outliers or turning point. The best description is a strong positive correlation, choice A; an exact correlation calculation is unnecessary.
**common_trap:** A small local dip does not make the overall relationship weak. Judge the full cloud of points, not one neighboring pair.
**takeaway:** For scatter plots, assess direction, strength, and form before considering individual deviations.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q42 (Set 19 — Salary Distribution Histogram)

```chart
{"type":"bar","title":"Employee salary distribution","x":{"label":"Salary ($K)"},"y":{"label":"Employees"},"series":[{"key":"employees","name":"Employees"}],"data":[{"x":"30–40","employees":8},{"x":"40–50","employees":12},{"x":"50–60","employees":18},{"x":"60–70","employees":15},{"x":"70–80","employees":9},{"x":"80–90","employees":3}]}
```

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
**explanation:** **Bin Share Calculation.**

To find the percentage of employees whose salaries fall within a specified range, the count of employees in that range is divided by the total number of employees across all bins, then converted to a percentage.

**Reading the histogram.** The six salary bins and their employee counts are:

- [30–40): 8
- [40–50): 12
- [50–60): 18
- [60–70): 15
- [70–80): 9
- [80–90): 3

**Total employees.** Let N be the total number of employees.

N = 8 + 12 + 18 + 15 + 9 + 3 = 65

**Employees in the target range.** The range $50,000 to $70,000 corresponds to the bins [50–60) and [60–70). Let T be the count of employees in those two bins.

T = 18 + 15 = 33

**Computing the percentage.** The percentage of employees earning between $50,000 and $70,000 is (T / N) * 100.

(33 / 65) * 100 = 50.77...%

Rounding 50.77% to the nearest whole percent gives approximately 51%. The values 33% and 42% fall well below 50.77%, and 57% and 65% are meaningfully above it, so 51% is the closest match among the choices.

The correct answer is C.
**related_reading:** reading-di-04-graphics-interpretation


---

## Q43 (Set 20 — Operating Expense Pie)

```chart
{"type":"pie","title":"Annual operating expenses ($800M total, %)","data":[{"name":"Labor","value":45},{"name":"Materials","value":25},{"name":"Facilities","value":15},{"name":"Marketing","value":10},{"name":"Other","value":5}]}
```

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
**explanation:** **Governing principle.** When a single cost category grows while all others remain fixed, both the numerator and the denominator of that category's share change. Therefore the new share must be recomputed from first principles rather than by simply applying the percentage increase to the old share.

**Setting up the numbers.** Let the current total operating budget be T = $800 million. Labor's current dollar amount is

L = 0.45 * 800 = $360 million.

All other categories together equal

O = 800 - 360 = $440 million,

and O remains fixed in dollar terms.

**After the increase.** Labor grows by 10%, so next year's Labor expense is

L' = 360 * 1.10 = $396 million.

The new total is

T' = 396 + 440 = $836 million.

**New Labor share.** Labor's share of the new total is

396 / 836 ≈ 0.4737, or about 47.37%.

**Change in share.** The increase in Labor's percentage-point share is

47.37% - 45.00% = 2.37 percentage points,

which rounds to approximately 2.4 percentage points.

**Why the other choices fail.** A naive reading might suggest that a 10% increase in Labor simply raises its share by 10 percentage points (choice D) or by 10% of 45% = 4.5 percentage points (choice C). Both errors ignore the fact that the total itself rises, diluting the share gain. The correct approach — recomputing numerator and denominator — yields the modest 2.4-point increase in choice B.

The correct answer is B.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q44 (Set 21 — Dual-Axis Quarterly Trend)

```chart
{"type":"composed","title":"Quarterly revenue vs. operating margin","x":{"label":"Quarter"},"y":{"label":"Revenue ($M)"},"y2":{"label":"Operating margin (%)"},"composed":{"bars":["revenue"],"lines":["margin"]},"data":[{"x":"Q1'22","revenue":45,"margin":10},{"x":"Q2'22","revenue":48,"margin":11},{"x":"Q3'22","revenue":52,"margin":12},{"x":"Q4'22","revenue":55,"margin":14},{"x":"Q1'23","revenue":58,"margin":13},{"x":"Q2'23","revenue":60,"margin":13},{"x":"Q3'23","revenue":62,"margin":12},{"x":"Q4'23","revenue":65,"margin":11}]}
```

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
**fastest_path:** Multiply revenue by margin for the close contenders: 55x14%, 58x13%, 60x13%, 62x12%, and 65x11%.
**explanation:** The candidate operating profits, in millions, are Q4 2022: 55 x 0.14 = 7.70; Q1 2023: 58 x 0.13 = 7.54; Q2 2023: 60 x 0.13 = 7.80; Q3 2023: 62 x 0.12 = 7.44; and Q4 2023: 65 x 0.11 = 7.15. The largest is $7.80M in Q2 2023, so C is correct. Highest revenue alone does not win because its margin is lower.
**common_trap:** Selecting the quarter with the highest revenue or margin without multiplying the two measures.
**takeaway:** For a derived metric, compare the required products rather than ranking either input by itself.
**related_reading:** reading-di-04-graphics-interpretation


---

## Q45 (Set 22 — Cumulative Market Share)

```chart
{"type":"stackedBar","title":"Company market share by segment (pp of market)","x":{"label":"Year"},"y":{"label":"Share (pp)"},"series":[{"key":"A","name":"Segment A"},{"key":"B","name":"Segment B"},{"key":"C","name":"Segment C"},{"key":"D","name":"Segment D"}],"data":[{"x":"2019","A":15,"B":10,"C":8,"D":5},{"x":"2023","A":22,"B":18,"C":12,"D":10}]}
```

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
**explanation:** The growth in total market share equals the difference between the company's cumulative share in the ending year and its cumulative share in the starting year, both read directly from the stacked area chart.

The segment shares in 2019 are A 15%, B 10%, C 8%, and D 5%, giving a total of 15 + 10 + 8 + 5 = 38 percentage points. The segment shares in 2023 are A 22%, B 18%, C 12%, and D 10%, giving a total of 22 + 18 + 12 + 10 = 62 percentage points. The growth in total market share is therefore 62 − 38 = 24 percentage points.

The correct answer is B.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q46 (Set 23 — Experience vs. Salary Scatter)

```chart
{"type":"scatter","title":"Years of experience vs. annual salary ($K)","x":{"label":"Experience (years)"},"y":{"label":"Salary ($K)"},"data":[{"x":2,"y":52},{"x":3,"y":58},{"x":3,"y":65},{"x":5,"y":68},{"x":7,"y":75},{"x":8,"y":85},{"x":9,"y":90},{"x":10,"y":95},{"x":12,"y":105},{"x":14,"y":120},{"x":15,"y":110},{"x":18,"y":140}]}
```

**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Correlation Strength

Based on the scatter plot, which of the following best describes the relationship between years of experience and annual salary?

- A) Strong negative correlation
- B) Weak negative correlation
- C) No apparent correlation
- D) Moderate-to-strong positive correlation, with modest scatter around an approximately linear trend
- E) Non-linear pattern with a clear turning point

**answer:** D
**fastest_path:** Read direction, form, and spread: the points rise roughly linearly with modest scatter and no reversal.
**explanation:** As years of experience increase, annual salary generally increases, so the relationship is positive. The points remain reasonably close to an upward-sloping linear pattern, though not perfectly, which supports a moderate-to-strong correlation with modest scatter. That matches D. The plot is neither negative nor directionless, and it shows no clear turning point that would make a nonlinear description better.
**common_trap:** Calling a relationship perfect or nonlinear merely because individual points do not sit exactly on one line.
**takeaway:** Describe a scatter plot using direction, strength, and form rather than expecting every observation to follow the trend exactly.
**related_reading:** reading-di-04-graphics-interpretation


---

## Q47 (Set 24 — Product Bubble Chart)

```chart
{"type":"bubble","title":"Products: sales volume vs. margin (bubble = total profit)","x":{"label":"Sales volume (K units)"},"y":{"label":"Profit margin (%)"},"data":[{"name":"A","x":50,"y":20,"z":10},{"name":"B","x":80,"y":15,"z":12},{"name":"C","x":30,"y":35,"z":10.5},{"name":"D","x":120,"y":10,"z":12},{"name":"E","x":40,"y":25,"z":10},{"name":"F","x":100,"y":18,"z":18}]}
```

**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Reading Three-Variable Bubble Chart

Based on the bubble chart, which product has the highest total monthly profit?

- A) A
- B) B
- C) C
- D) D
- E) F

**answer:** E
**explanation:** In a bubble chart with three encoded variables, the axes encode monthly sales volume (x, in thousands of units) and profit margin (y, as a percentage), while bubble size encodes total monthly profit (in thousands of dollars) directly. No calculation is needed to recover total monthly profit; it is read directly from the relative size of each bubble.

The six products and their encoded total monthly profit values are:

- Product A: bubble size = 10 (i.e., $10,000)
- Product B: bubble size = 12 (i.e., $12,000)
- Product C: bubble size = 10.5 (i.e., $10,500)
- Product D: bubble size = 12 (i.e., $12,000)
- Product E: bubble size = 10 (i.e., $10,000)
- Product F: bubble size = 18 (i.e., $18,000)

Comparing all six values: 10, 12, 10.5, 12, 10, 18. The maximum is 18, which belongs to Product F. Every other product has a total monthly profit strictly less than 18 (since 18 > 12 > 10.5 > 10). Therefore Product F has the highest total monthly profit of the six products shown.

Product C carries the highest profit margin at 35%, yet its total monthly profit (bubble size 10.5) is among the lowest. Products B and D share the second-highest bubble size at 12, but neither approaches F's value of 18. The question asks specifically about total monthly profit, which is encoded in bubble size, and on that dimension F is unambiguous.

The correct option is E (Product F).
**related_reading:** reading-di-04-graphics-interpretation

---

## Q48 (Set 25 — Revenue vs. Costs Crossover)

```chart
{"type":"line","title":"Quarterly revenue vs. operating costs ($M)","x":{"label":"Quarter"},"y":{"label":"$M"},"series":[{"key":"revenue","name":"Revenue"},{"key":"costs","name":"Operating costs"}],"data":[{"x":"Q1'22","revenue":40,"costs":50},{"x":"Q2'22","revenue":45,"costs":52},{"x":"Q3'22","revenue":50,"costs":53},{"x":"Q4'22","revenue":55,"costs":54},{"x":"Q1'23","revenue":60,"costs":55},{"x":"Q2'23","revenue":65,"costs":58},{"x":"Q3'23","revenue":68,"costs":62},{"x":"Q4'23","revenue":70,"costs":68}]}
```

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
**explanation:** Finding the crossover requires identifying the first quarter in which revenue strictly exceeds operating costs. Let R(q) denote revenue and C(q) denote operating costs in quarter q, both in millions of dollars; the goal is the smallest q such that R(q) > C(q).

Reading the eight quarters from the line graph:

| Quarter | Revenue R(q) | Operating Costs C(q) | R(q) − C(q) |
|---------|-------------|----------------------|-------------|
| Q1 2022 | 40 | 50 | −10 |
| Q2 2022 | 45 | 52 | −7 |
| Q3 2022 | 50 | 53 | −3 |
| Q4 2022 | 55 | 54 | +1 |
| Q1 2023 | 60 | 55 | +5 |
| Q2 2023 | 65 | 58 | +7 |
| Q3 2023 | 68 | 62 | +6 |
| Q4 2023 | 70 | 68 | +2 |

In Q1 2022, R(q) − C(q) = 40 − 50 = −10 < 0, so costs exceed revenue. The deficit narrows in Q2 2022 (45 − 52 = −7) and again in Q3 2022 (50 − 53 = −3); in both quarters the inequality R(q) > C(q) is not yet satisfied. In Q4 2022, R(q) = 55 and C(q) = 54, giving R(q) − C(q) = 55 − 54 = +1 > 0. This is the first quarter in which revenue strictly exceeds operating costs. All subsequent quarters also satisfy the inequality, but Q4 2022 is the earliest.

The correct answer is C.
**related_reading:** reading-di-04-graphics-interpretation


---

## Q49 (Set 26 — Sales Team Radar Chart)

```chart
{"type":"radar","title":"Sales team performance (0–10)","series":[{"key":"A","name":"Member A"},{"key":"B","name":"Member B"},{"key":"C","name":"Member C"}],"data":[{"x":"Sales Volume","A":9,"B":5,"C":7},{"x":"New Clients","A":7,"B":9,"C":6},{"x":"Upsells","A":8,"B":7,"C":9},{"x":"Customer Retention","A":6,"B":8,"C":7},{"x":"Training Completion","A":5,"B":9,"C":8}]}
```

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
**explanation:** The total score for each team member is the arithmetic sum of that member's scores across all five categories. To determine which member has the highest total, we sum each member's five values and compare the results.

The radar chart assigns each team member a score on a 0-to-10 scale along five axes: Sales Volume, New Clients, Upsells, Customer Retention, and Training Completion. The stated values are as follows.

- Team member A: 9, 7, 8, 6, 5
- Team member B: 5, 9, 7, 8, 9
- Team member C: 7, 6, 9, 7, 8

Let S_A, S_B, and S_C denote the total scores for members A, B, and C respectively.

S_A = 9 + 7 + 8 + 6 + 5 = 35

S_B = 5 + 9 + 7 + 8 + 9 = 38

S_C = 7 + 6 + 9 + 7 + 8 = 37

S_B = 38 is strictly greater than both S_C = 37 and S_A = 35. Therefore no tie exists, and B alone holds the highest total score across all five categories.

The correct answer is B.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q50 (Set 27 — Linear Sign-Up Trend)

```chart
{"type":"line","title":"Monthly customer sign-ups","x":{"label":"Month"},"y":{"label":"Sign-ups"},"series":[{"key":"signups","name":"Sign-ups"}],"data":[{"x":"Jan","signups":120},{"x":"Feb","signups":135},{"x":"Mar","signups":150},{"x":"Apr","signups":165},{"x":"May","signups":180},{"x":"Jun","signups":195},{"x":"Jul","signups":210},{"x":"Aug","signups":225},{"x":"Sep","signups":240},{"x":"Oct","signups":255}]}
```

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
**explanation:** **Linear Extrapolation.**

When a data set exhibits a constant rate of change, it is modeled with a linear function of the form y = a + b * x, where a is the initial value, b is the slope (the constant increment per unit of x), and x is the independent variable.

**Reading the graph.** The monthly sign-up values for months 1 through 10 are:

| Month (x) | Sign-ups (y) |
|-----------|-------------|
| 1 (Jan)   | 120         |
| 2 (Feb)   | 135         |
| 3 (Mar)   | 150         |
| 4 (Apr)   | 165         |
| 5 (May)   | 180         |
| 6 (Jun)   | 195         |
| 7 (Jul)   | 210         |
| 8 (Aug)   | 225         |
| 9 (Sep)   | 240         |
| 10 (Oct)  | 255         |

**Identifying the slope.** Computing successive differences: 135 - 120 = 15, 150 - 135 = 15, and so on. Every consecutive pair differs by exactly 15, confirming a constant slope of b = 15 sign-ups per month.

**Writing the linear model.** Let x represent the month number (January = 1). At x = 1 the value is 120, so the intercept satisfies a + 15 * 1 = 120, giving a = 105. The model is therefore y = 105 + 15x.

Verification: at x = 10, y = 105 + 15 * 10 = 105 + 150 = 255, which matches the observed October value exactly.

**Extrapolating to December.** December corresponds to x = 12. Substituting into the model, y = 105 + 15 * 12 = 105 + 180 = 285.

Equivalently, from October (x = 10, y = 255), advancing two additional months gives 255 + 2 * 15 = 255 + 30 = 285.

Both approaches yield the same result; therefore, the projected number of customer sign-ups in December is 285.

The correct answer is D.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q51 (Set 28 — Coffee Shop Daily Transactions by Location)

```chart
{"type":"line","title":"Daily transactions by location","x":{"label":"Day"},"y":{"label":"Transactions","min":0,"max":700},"series":[{"key":"downtown","name":"Downtown"},{"key":"airport","name":"Airport"}],"data":[{"x":"Mon","downtown":320,"airport":480},{"x":"Tue","downtown":350,"airport":460},{"x":"Wed","downtown":410,"airport":500},{"x":"Thu","downtown":380,"airport":520},{"x":"Fri","downtown":520,"airport":610},{"x":"Sat","downtown":600,"airport":540},{"x":"Sun","downtown":450,"airport":400}]}
```

**difficulty:** Easy
**type:** Graphics Interpretation
**topic:** Trend Identification

Based on the graph, the day with the highest combined transactions across both locations was ______.

- A) Wednesday
- B) Thursday
- C) Friday
- D) Saturday
- E) Sunday

**answer:** D
**explanation:** The combined transaction total for a given day is the sum of that day's Downtown value and Airport value, read directly from the two lines. To find the busiest day overall, this sum is computed for each of the seven days and the maximum identified.

Reading both series from the graph:

- Mon: 320 + 480 = 800
- Tue: 350 + 460 = 810
- Wed: 410 + 500 = 910
- Thu: 380 + 520 = 900
- Fri: 520 + 610 = 1,130
- Sat: 600 + 540 = 1,140
- Sun: 450 + 400 = 850

Ranking the daily totals in descending order: 1,140 (Sat) > 1,130 (Fri) > 910 (Wed) > 900 (Thu) > 850 (Sun) > 810 (Tue) > 800 (Mon). Saturday produces the largest combined total at 1,140 transactions, edging out Friday by 10. Although the Airport line peaks on Friday (610) and the Downtown line peaks on Saturday (600), the combined total is what the question asks for, and the strong Downtown showing on Saturday is enough to make Saturday the overall busiest day.

The correct answer is D.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q52 (Set 28 — Coffee Shop Daily Transactions, continued)

```chart
{"type":"line","title":"Daily transactions by location","x":{"label":"Day"},"y":{"label":"Transactions","min":0,"max":700},"series":[{"key":"downtown","name":"Downtown"},{"key":"airport","name":"Airport"}],"data":[{"x":"Mon","downtown":320,"airport":480},{"x":"Tue","downtown":350,"airport":460},{"x":"Wed","downtown":410,"airport":500},{"x":"Thu","downtown":380,"airport":520},{"x":"Fri","downtown":520,"airport":610},{"x":"Sat","downtown":600,"airport":540},{"x":"Sun","downtown":450,"airport":400}]}
```

**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Averages

Based on the graph, the average daily number of Downtown transactions over the seven-day week was closest to ______.

- A) 410
- B) 433
- C) 450
- D) 470
- E) 500

**answer:** B
**explanation:** The average of a data set is the sum of its values divided by the count. Here the relevant values are the seven Downtown readings, one per day, and the count is 7.

Reading the Downtown series from the graph: Mon 320, Tue 350, Wed 410, Thu 380, Fri 520, Sat 600, Sun 450.

Summing in stages: 320 + 350 = 670; 670 + 410 = 1,080; 1,080 + 380 = 1,460; 1,460 + 520 = 1,980; 1,980 + 600 = 2,580; 2,580 + 450 = 3,030.

Dividing by the seven days: 3,030 / 7 = 432.86, which rounds to approximately 433.

Among the answer choices — 410, 433, 450, 470, 500 — the value 433 is the closest, matching the computed mean to within 0.2. The other choices are off by 17 or more. Note that 450 is the Sunday data point itself and 410 is the Wednesday point; neither equals the seven-day average, which lies between them.

The correct answer is B.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q53 (Set 28 — Coffee Shop Daily Transactions, continued)

```chart
{"type":"line","title":"Daily transactions by location","x":{"label":"Day"},"y":{"label":"Transactions","min":0,"max":700},"series":[{"key":"downtown","name":"Downtown"},{"key":"airport","name":"Airport"}],"data":[{"x":"Mon","downtown":320,"airport":480},{"x":"Tue","downtown":350,"airport":460},{"x":"Wed","downtown":410,"airport":500},{"x":"Thu","downtown":380,"airport":520},{"x":"Fri","downtown":520,"airport":610},{"x":"Sat","downtown":600,"airport":540},{"x":"Sun","downtown":450,"airport":400}]}
```

**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Comparison

Based on the graph, the number of days on which Downtown transactions exceeded Airport transactions was ______.

- A) 1
- B) 2
- C) 3
- D) 4
- E) 5

**answer:** B
**explanation:** Downtown exceeds Airport on a given day when the Downtown value is strictly greater than the Airport value for that day. We test each day by comparing the two series readings directly.

| Day | Downtown | Airport | Downtown > Airport? |
|-----|----------|---------|---------------------|
| Mon | 320 | 480 | No (320 < 480) |
| Tue | 350 | 460 | No (350 < 460) |
| Wed | 410 | 500 | No (410 < 500) |
| Thu | 380 | 520 | No (380 < 520) |
| Fri | 520 | 610 | No (520 < 610) |
| Sat | 600 | 540 | Yes (600 > 540) |
| Sun | 450 | 400 | Yes (450 > 400) |

The Airport location records more transactions on every weekday (Monday through Friday), reflecting steady travel traffic. Only on the weekend does Downtown pull ahead: Saturday (600 vs. 540) and Sunday (450 vs. 400). That is exactly two days on which Downtown transactions exceeded Airport transactions.

The correct answer is B.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q54 (Set 28 — Coffee Shop Daily Transactions, continued)

```chart
{"type":"line","title":"Daily transactions by location","x":{"label":"Day"},"y":{"label":"Transactions","min":0,"max":700},"series":[{"key":"downtown","name":"Downtown"},{"key":"airport","name":"Airport"}],"data":[{"x":"Mon","downtown":320,"airport":480},{"x":"Tue","downtown":350,"airport":460},{"x":"Wed","downtown":410,"airport":500},{"x":"Thu","downtown":380,"airport":520},{"x":"Fri","downtown":520,"airport":610},{"x":"Sat","downtown":600,"airport":540},{"x":"Sun","downtown":450,"airport":400}]}
```

**difficulty:** Hard
**type:** Graphics Interpretation
**topic:** Percent Change

Based on the graph, the largest single-day percentage increase in Airport transactions relative to the immediately previous day occurred on ______.

- A) Wednesday
- B) Thursday
- C) Friday
- D) Saturday
- E) Sunday

**answer:** C
**explanation:** The day-over-day percentage change in Airport transactions is ((current day − previous day) / previous day) × 100. We compute this for each day from Tuesday through Sunday and identify the largest positive value.

Reading the Airport series: Mon 480, Tue 460, Wed 500, Thu 520, Fri 610, Sat 540, Sun 400.

- Tue: (460 − 480) / 480 × 100 = −20/480 × 100 ≈ −4.2% (decrease)
- Wed: (500 − 460) / 460 × 100 = 40/460 × 100 ≈ +8.7%
- Thu: (520 − 500) / 500 × 100 = 20/500 × 100 = +4.0%
- Fri: (610 − 520) / 520 × 100 = 90/520 × 100 ≈ +17.3%
- Sat: (540 − 610) / 610 × 100 = −70/610 × 100 ≈ −11.5% (decrease)
- Sun: (400 − 540) / 540 × 100 = −140/540 × 100 ≈ −25.9% (decrease)

Only Wednesday, Thursday, and Friday show increases. The positive values are Wednesday +8.7%, Thursday +4.0%, and Friday +17.3%. The maximum among these is Friday's +17.3%, driven by a jump of 90 transactions on a base of 520. Although Wednesday adds 40 on a smaller base of 460, its 8.7% increase still falls well short of Friday's. Saturday and Sunday both decline and are excluded.

The correct answer is C.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q55 (Set 29 — Renewable Energy Capacity by Region)

```chart
{"type":"bar","title":"Renewable energy capacity by region (GW), 2021 vs 2024","x":{"label":"Region"},"y":{"label":"Capacity (GW)","min":0,"max":100},"series":[{"key":"y2021","name":"2021"},{"key":"y2024","name":"2024"}],"data":[{"x":"North","y2021":40,"y2024":70},{"x":"South","y2021":60,"y2024":75},{"x":"East","y2021":25,"y2024":50},{"x":"West","y2021":80,"y2024":88},{"x":"Central","y2021":30,"y2024":54}]}
```

**difficulty:** Easy
**type:** Graphics Interpretation
**topic:** Absolute Change

Based on the chart, the region with the largest absolute increase in capacity from 2021 to 2024 was ______.

- A) North
- B) South
- C) East
- D) West
- E) Central

**answer:** A
**explanation:** The absolute increase in capacity for a region is its 2024 value minus its 2021 value, both read directly from the paired bars. We compute this difference for each region and select the largest.

- North: 70 − 40 = +30 GW
- South: 75 − 60 = +15 GW
- East: 50 − 25 = +25 GW
- West: 88 − 80 = +8 GW
- Central: 54 − 30 = +24 GW

Ranking the increases in descending order: 30 (North) > 25 (East) > 24 (Central) > 15 (South) > 8 (West). North posted the largest absolute gain at 30 GW. Note that West, despite having the highest capacity in both years (80 then 88), added the least in absolute terms (only 8 GW), because its starting base was already high and its growth modest.

The correct answer is A.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q56 (Set 29 — Renewable Energy Capacity, continued)

```chart
{"type":"bar","title":"Renewable energy capacity by region (GW), 2021 vs 2024","x":{"label":"Region"},"y":{"label":"Capacity (GW)","min":0,"max":100},"series":[{"key":"y2021","name":"2021"},{"key":"y2024","name":"2024"}],"data":[{"x":"North","y2021":40,"y2024":70},{"x":"South","y2021":60,"y2024":75},{"x":"East","y2021":25,"y2024":50},{"x":"West","y2021":80,"y2024":88},{"x":"Central","y2021":30,"y2024":54}]}
```

**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Percent Change

Based on the chart, the region with the highest percentage growth in capacity from 2021 to 2024 was ______.

- A) North
- B) South
- C) East
- D) West
- E) Central

**answer:** C
**explanation:** Percentage growth is defined as ((2024 value − 2021 value) / 2021 value) × 100. Unlike absolute change, this measure scales the gain against each region's own starting base, so a smaller absolute gain on a small base can outrank a larger gain on a large base.

Applying the formula to the values read from the chart:

- North: (70 − 40) / 40 × 100 = 30/40 × 100 = 75.0%
- South: (75 − 60) / 60 × 100 = 15/60 × 100 = 25.0%
- East: (50 − 25) / 25 × 100 = 25/25 × 100 = 100.0%
- West: (88 − 80) / 80 × 100 = 8/80 × 100 = 10.0%
- Central: (54 − 30) / 30 × 100 = 24/30 × 100 = 80.0%

Ranking in descending order: East (100.0%) > Central (80.0%) > North (75.0%) > South (25.0%) > West (10.0%). East exactly doubled its capacity, from 25 GW to 50 GW, giving the highest percentage growth of any region. Although North added the most absolute capacity (+30 GW, from Q55), East's smaller base of 25 GW means its +25 GW gain represents a larger proportional increase.

The correct answer is C.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q57 (Set 29 — Renewable Energy Capacity, continued)

```chart
{"type":"bar","title":"Renewable energy capacity by region (GW), 2021 vs 2024","x":{"label":"Region"},"y":{"label":"Capacity (GW)","min":0,"max":100},"series":[{"key":"y2021","name":"2021"},{"key":"y2024","name":"2024"}],"data":[{"x":"North","y2021":40,"y2024":70},{"x":"South","y2021":60,"y2024":75},{"x":"East","y2021":25,"y2024":50},{"x":"West","y2021":80,"y2024":88},{"x":"Central","y2021":30,"y2024":54}]}
```

**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Totals

Based on the chart, the combined 2024 capacity across all five regions was ______ GW.

- A) 235
- B) 305
- C) 337
- D) 360
- E) 412

**answer:** C
**explanation:** The combined capacity is the sum of the 2024 bar values across all five regions. Each value is read directly from the 2024 series of the grouped bar chart.

The 2024 capacities are: North 70, South 75, East 50, West 88, Central 54.

Summing in stages: 70 + 75 = 145; 145 + 50 = 195; 195 + 88 = 283; 283 + 54 = 337.

Therefore the combined 2024 capacity is 337 GW, which matches choice C exactly. A useful cross-check distinguishes this from the 2021 total: the 2021 values sum to 40 + 60 + 25 + 80 + 30 = 235 GW (choice A), which is the prior-year figure and a common trap for a reader who sums the wrong series. The total grew from 235 GW to 337 GW over the period.

The correct answer is C.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q58 (Set 29 — Renewable Energy Capacity, continued)

```chart
{"type":"bar","title":"Renewable energy capacity by region (GW), 2021 vs 2024","x":{"label":"Region"},"y":{"label":"Capacity (GW)","min":0,"max":100},"series":[{"key":"y2021","name":"2021"},{"key":"y2024","name":"2024"}],"data":[{"x":"North","y2021":40,"y2024":70},{"x":"South","y2021":60,"y2024":75},{"x":"East","y2021":25,"y2024":50},{"x":"West","y2021":80,"y2024":88},{"x":"Central","y2021":30,"y2024":54}]}
```

**difficulty:** Hard
**type:** Graphics Interpretation
**topic:** Share Change

Based on the chart, East's share of total capacity changed from 2021 to 2024 by approximately ______ percentage points.

- A) +1
- B) +4
- C) +8
- D) +12
- E) +25

**answer:** B
**explanation:** A region's share of total capacity in a given year is its capacity divided by the sum of all regions' capacities that year, expressed as a percentage. The percentage-point change is the later share minus the earlier share — an arithmetic difference of two percentages, not a relative change.

First, the yearly totals. The 2021 capacities (North 40, South 60, East 25, West 80, Central 30) sum to 40 + 60 + 25 + 80 + 30 = 235 GW. The 2024 capacities (North 70, South 75, East 50, West 88, Central 54) sum to 70 + 75 + 50 + 88 + 54 = 337 GW.

East's share in each year:

- 2021: 25 / 235 = 0.10638, or about 10.64%.
- 2024: 50 / 337 = 0.14837, or about 14.84%.

The percentage-point change is 14.84% − 10.64% = 4.20 pp. Among the answer choices, +4 pp is the closest value. The increase reflects East's capacity doubling (a 100% increase, the fastest of any region) outpacing the overall total's growth from 235 to 337 GW (about 43%), so East's slice of the pie expanded by roughly four percentage points. Choice E (+25) is a trap that confuses the absolute GW gain (+25 GW) with the percentage-point share change.

The correct answer is B.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q59 (Set 30 — Average Monthly Temperature in Two Cities)

```chart
{"type":"line","title":"Average monthly temperature (deg C)","x":{"label":"Month"},"y":{"label":"Temperature (deg C)","min":-10,"max":30},"series":[{"key":"oslo","name":"Oslo"},{"key":"lisbon","name":"Lisbon"}],"data":[{"x":"Jan","oslo":-4,"lisbon":11},{"x":"Mar","oslo":2,"lisbon":14},{"x":"May","oslo":12,"lisbon":18},{"x":"Jul","oslo":18,"lisbon":24},{"x":"Sep","oslo":11,"lisbon":22},{"x":"Nov","oslo":1,"lisbon":14}]}
```

**difficulty:** Easy
**type:** Graphics Interpretation
**topic:** Comparison

Based on the graph, the month with the largest temperature gap between the two cities was ______.

- A) January
- B) March
- C) July
- D) September
- E) November

**answer:** A
**explanation:** The temperature gap for a given month is the absolute difference between Lisbon's reading and Oslo's reading, both taken directly from the two lines. We compute this gap for each plotted month and find the maximum.

| Month | Oslo | Lisbon | Gap |
|-------|------|--------|-----|
| Jan | −4 | 11 | 15 |
| Mar | 2 | 14 | 12 |
| May | 12 | 18 | 6 |
| Jul | 18 | 24 | 6 |
| Sep | 11 | 22 | 11 |
| Nov | 1 | 14 | 13 |

Ranking the gaps in descending order: 15 (Jan) > 13 (Nov) > 12 (Mar) > 11 (Sep) > 6 (May) = 6 (Jul). January shows the largest gap at 15 degrees, because Oslo is at its coldest (−4) while Lisbon remains mild (11). The two cities are closest in the summer months (May and July), when both are warm and the gap shrinks to just 6 degrees.

The correct answer is A.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q60 (Set 30 — Average Monthly Temperature, continued)

```chart
{"type":"line","title":"Average monthly temperature (deg C)","x":{"label":"Month"},"y":{"label":"Temperature (deg C)","min":-10,"max":30},"series":[{"key":"oslo","name":"Oslo"},{"key":"lisbon","name":"Lisbon"}],"data":[{"x":"Jan","oslo":-4,"lisbon":11},{"x":"Mar","oslo":2,"lisbon":14},{"x":"May","oslo":12,"lisbon":18},{"x":"Jul","oslo":18,"lisbon":24},{"x":"Sep","oslo":11,"lisbon":22},{"x":"Nov","oslo":1,"lisbon":14}]}
```

**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Averages

Based on the graph, Oslo's average temperature across the six readings was closest to ______ degrees Celsius.

- A) 5.0
- B) 6.7
- C) 8.0
- D) 9.5
- E) 11.0

**answer:** B
**explanation:** The average is the sum of the six Oslo readings divided by 6. Care is required because one of the values is negative.

Reading the Oslo series: Jan −4, Mar 2, May 12, Jul 18, Sep 11, Nov 1.

Summing, with attention to the negative term: −4 + 2 = −2; −2 + 12 = 10; 10 + 18 = 28; 28 + 11 = 39; 39 + 1 = 40.

Dividing by the six readings: 40 / 6 = 6.667, which rounds to approximately 6.7.

Among the answer choices — 5.0, 6.7, 8.0, 9.5, 11.0 — the value 6.7 is the exact match. A common error is to overlook the −4 January reading or to treat it as +4; doing so would inflate the sum to 48 and yield an average of 8.0 (choice C), which is why that distractor is present.

The correct answer is B.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q61 (Set 30 — Average Monthly Temperature, continued)

```chart
{"type":"line","title":"Average monthly temperature (deg C)","x":{"label":"Month"},"y":{"label":"Temperature (deg C)","min":-10,"max":30},"series":[{"key":"oslo","name":"Oslo"},{"key":"lisbon","name":"Lisbon"}],"data":[{"x":"Jan","oslo":-4,"lisbon":11},{"x":"Mar","oslo":2,"lisbon":14},{"x":"May","oslo":12,"lisbon":18},{"x":"Jul","oslo":18,"lisbon":24},{"x":"Sep","oslo":11,"lisbon":22},{"x":"Nov","oslo":1,"lisbon":14}]}
```

**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Range

Based on the graph, the range of Lisbon's temperatures across the six readings was ______ degrees Celsius.

- A) 6
- B) 11
- C) 13
- D) 18
- E) 24

**answer:** C
**explanation:** The range of a data set is the maximum value minus the minimum value. Here the relevant data set is Lisbon's six temperature readings.

Reading the Lisbon series from the graph: Jan 11, Mar 14, May 18, Jul 24, Sep 22, Nov 14.

The maximum is 24 degrees (July) and the minimum is 11 degrees (January). The range is therefore:

Range = 24 − 11 = 13 degrees Celsius.

Among the answer choices, 13 matches choice C exactly. The distractor 24 (choice E) is the maximum value itself, a common error of reporting the highest reading rather than the spread; and 18 (choice D) is the May data point. The true range, capturing the full spread of Lisbon's seasonal swing, is 13 degrees.

The correct answer is C.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q62 (Set 30 — Average Monthly Temperature, continued)

```chart
{"type":"line","title":"Average monthly temperature (deg C)","x":{"label":"Month"},"y":{"label":"Temperature (deg C)","min":-10,"max":30},"series":[{"key":"oslo","name":"Oslo"},{"key":"lisbon","name":"Lisbon"}],"data":[{"x":"Jan","oslo":-4,"lisbon":11},{"x":"Mar","oslo":2,"lisbon":14},{"x":"May","oslo":12,"lisbon":18},{"x":"Jul","oslo":18,"lisbon":24},{"x":"Sep","oslo":11,"lisbon":22},{"x":"Nov","oslo":1,"lisbon":14}]}
```

**difficulty:** Hard
**type:** Graphics Interpretation
**topic:** Change Between Readings

Based on the graph, the largest increase in Oslo's temperature between consecutive readings occurred between ______.

- A) January and March
- B) March and May
- C) May and July
- D) July and September
- E) September and November

**answer:** B
**explanation:** The change between consecutive readings is the later reading minus the earlier reading. We compute this for each adjacent pair in the Oslo series and identify the largest positive value.

Reading the Oslo series: Jan −4, Mar 2, May 12, Jul 18, Sep 11, Nov 1.

- Jan to Mar: 2 − (−4) = +6
- Mar to May: 12 − 2 = +10
- May to Jul: 18 − 12 = +6
- Jul to Sep: 11 − 18 = −7 (a decrease)
- Sep to Nov: 1 − 11 = −10 (a decrease)

The two positive intervals besides Mar-to-May are each +6 (Jan-to-Mar and May-to-Jul). The Mar-to-May interval, at +10, is the largest single increase: Oslo warms from 2 degrees in March to 12 degrees in May as spring arrives. The intervals after July are both negative as the city cools toward winter, so they cannot be the largest increase. Note that the Jan-to-Mar change requires careful handling of the negative starting value: 2 − (−4) = +6, not +2.

The correct answer is B.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q63 (Set 31 — Public EV Charging Stations by Quarter)

```chart
{"type":"line","title":"Public EV charging stations installed (cumulative)","x":{"label":"Quarter"},"y":{"label":"Stations","min":0,"max":4500},"series":[{"key":"stations","name":"Stations"}],"data":[{"x":"Q1","stations":1200},{"x":"Q2","stations":1450},{"x":"Q3","stations":1700},{"x":"Q4","stations":2100},{"x":"Q5","stations":2500},{"x":"Q6","stations":2750},{"x":"Q7","stations":3300},{"x":"Q8","stations":3900}]}
```

**difficulty:** Easy
**type:** Graphics Interpretation
**topic:** Trend Identification

Based on the graph, the largest quarter-over-quarter absolute increase in the number of stations occurred between ______.

- A) Q3 and Q4
- B) Q4 and Q5
- C) Q5 and Q6
- D) Q6 and Q7
- E) Q7 and Q8

**answer:** E
**explanation:** The quarter-over-quarter absolute increase is the later quarter's value minus the immediately preceding quarter's value. We compute this difference for each consecutive pair and identify the maximum.

Reading the cumulative station counts from the graph: Q1 1,200, Q2 1,450, Q3 1,700, Q4 2,100, Q5 2,500, Q6 2,750, Q7 3,300, Q8 3,900.

The seven consecutive differences are:

- Q1 to Q2: 1,450 − 1,200 = +250
- Q2 to Q3: 1,700 − 1,450 = +250
- Q3 to Q4: 2,100 − 1,700 = +400
- Q4 to Q5: 2,500 − 2,100 = +400
- Q5 to Q6: 2,750 − 2,500 = +250
- Q6 to Q7: 3,300 − 2,750 = +550
- Q7 to Q8: 3,900 − 3,300 = +600

Ranking in descending order: 600 (Q7 to Q8) > 550 (Q6 to Q7) > 400 (Q3 to Q4) = 400 (Q4 to Q5) > 250 (the three remaining intervals). The maximum absolute increase of 600 stations occurs between Q7 and Q8. Although the Q3-to-Q4 and Q4-to-Q5 intervals each add a respectable 400 stations, and Q6-to-Q7 adds 550, none matches the final-quarter jump of 600.

The correct answer is E.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q64 (Set 31 — Public EV Charging Stations, continued)

```chart
{"type":"line","title":"Public EV charging stations installed (cumulative)","x":{"label":"Quarter"},"y":{"label":"Stations","min":0,"max":4500},"series":[{"key":"stations","name":"Stations"}],"data":[{"x":"Q1","stations":1200},{"x":"Q2","stations":1450},{"x":"Q3","stations":1700},{"x":"Q4","stations":2100},{"x":"Q5","stations":2500},{"x":"Q6","stations":2750},{"x":"Q7","stations":3300},{"x":"Q8","stations":3900}]}
```

**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Averages

Based on the graph, the average number of stations across the final four quarters (Q5 through Q8) was closest to ______.

- A) 2,750
- B) 2,900
- C) 3,113
- D) 3,300
- E) 3,450

**answer:** C
**explanation:** The average of a data set is the sum of its values divided by the count. Here the relevant values are the four station counts for Q5 through Q8, and the count is 4.

Reading those four values from the graph: Q5 2,500, Q6 2,750, Q7 3,300, Q8 3,900.

Summing in stages: 2,500 + 2,750 = 5,250; 5,250 + 3,300 = 8,550; 8,550 + 3,900 = 12,450.

Dividing by the four quarters: 12,450 / 4 = 3,112.5, which rounds to approximately 3,113.

Among the answer choices — 2,750, 2,900, 3,113, 3,300, and 3,450 — the value 3,113 is the closest, matching the computed mean to within 0.5. Note that 2,750 is the Q6 data point and 3,300 is the Q7 data point; neither equals the four-quarter average, which lies between them. Selecting one of those individual readings rather than computing the mean is a common error.

The correct answer is C.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q65 (Set 31 — Public EV Charging Stations, continued)

```chart
{"type":"line","title":"Public EV charging stations installed (cumulative)","x":{"label":"Quarter"},"y":{"label":"Stations","min":0,"max":4500},"series":[{"key":"stations","name":"Stations"}],"data":[{"x":"Q1","stations":1200},{"x":"Q2","stations":1450},{"x":"Q3","stations":1700},{"x":"Q4","stations":2100},{"x":"Q5","stations":2500},{"x":"Q6","stations":2750},{"x":"Q7","stations":3300},{"x":"Q8","stations":3900}]}
```

**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Percent Change

Based on the graph, the largest quarter-over-quarter percentage increase occurred between ______.

- A) Q1 and Q2
- B) Q3 and Q4
- C) Q4 and Q5
- D) Q6 and Q7
- E) Q7 and Q8

**answer:** B
**explanation:** The quarter-over-quarter percentage increase is ((current − previous) / previous) × 100. Because percentage change scales the absolute gain against the base, a smaller absolute gain on a small base can outrank a larger gain on a large base. We compute the percentage for each consecutive pair and identify the maximum.

Reading the station counts from the graph: Q1 1,200, Q2 1,450, Q3 1,700, Q4 2,100, Q5 2,500, Q6 2,750, Q7 3,300, Q8 3,900.

- Q1 to Q2: 250 / 1,200 × 100 ≈ 20.83%
- Q2 to Q3: 250 / 1,450 × 100 ≈ 17.24%
- Q3 to Q4: 400 / 1,700 × 100 ≈ 23.53%
- Q4 to Q5: 400 / 2,100 × 100 ≈ 19.05%
- Q5 to Q6: 250 / 2,500 × 100 = 10.00%
- Q6 to Q7: 550 / 2,750 × 100 = 20.00%
- Q7 to Q8: 600 / 3,300 × 100 ≈ 18.18%

Ranking in descending order: Q3 to Q4 (23.53%) > Q1 to Q2 (20.83%) > Q6 to Q7 (20.00%) > Q4 to Q5 (19.05%) > Q7 to Q8 (18.18%) > Q2 to Q3 (17.24%) > Q5 to Q6 (10.00%). The maximum percentage increase of about 23.53% occurs between Q3 and Q4. Notably, although Q7-to-Q8 has the largest absolute increase (600 stations, from the previous question), its base of 3,300 is so large that the percentage gain falls to only about 18.18% — well behind the Q3-to-Q4 jump of 400 on a base of just 1,700.

The correct answer is B.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q66 (Set 31 — Public EV Charging Stations, continued)

```chart
{"type":"line","title":"Public EV charging stations installed (cumulative)","x":{"label":"Quarter"},"y":{"label":"Stations","min":0,"max":4500},"series":[{"key":"stations","name":"Stations"}],"data":[{"x":"Q1","stations":1200},{"x":"Q2","stations":1450},{"x":"Q3","stations":1700},{"x":"Q4","stations":2100},{"x":"Q5","stations":2500},{"x":"Q6","stations":2750},{"x":"Q7","stations":3300},{"x":"Q8","stations":3900}]}
```

**difficulty:** Hard
**type:** Graphics Interpretation
**topic:** Percent Change

Based on the graph, the total percentage increase in the number of stations from Q1 to Q8 was ______.

- A) 125%
- B) 175%
- C) 200%
- D) 225%
- E) 325%

**answer:** D
**explanation:** The total percentage increase over a span is ((ending value − starting value) / starting value) × 100. Only the two endpoints enter this calculation; the intermediate quarterly values are not needed.

Reading the endpoints from the graph: the Q1 value is 1,200 stations and the Q8 value is 3,900 stations.

The absolute increase is 3,900 − 1,200 = 2,700 stations. Expressing this as a percentage of the starting value:

2,700 / 1,200 × 100 = 2.25 × 100 = 225%.

Therefore the number of stations grew by 225% from Q1 to Q8, which corresponds to choice D exactly. A common error is to compute the ratio 3,900 / 1,200 = 3.25 and report 325% (choice E); that figure is the ending value as a percentage of the starting value, not the increase. The increase itself is the ratio minus 1, that is, 3.25 − 1 = 2.25, or 225%. Equivalently, the stations grew to 3.25 times their original count, which is an increase of 2.25 times, or 225%.

The correct answer is D.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q67 (Set 32 — Smartphone Shipments by Brand)

```chart
{"type":"bar","title":"Smartphone shipments by brand (millions), 2022 vs 2025","x":{"label":"Brand"},"y":{"label":"Shipments (M)","min":0,"max":70},"series":[{"key":"y2022","name":"2022"},{"key":"y2025","name":"2025"}],"data":[{"x":"Brand W","y2022":30,"y2025":54},{"x":"Brand X","y2022":45,"y2025":60},{"x":"Brand Y","y2022":20,"y2025":50},{"x":"Brand Z","y2022":25,"y2025":40},{"x":"Brand V","y2022":50,"y2025":55}]}
```

**difficulty:** Easy
**type:** Graphics Interpretation
**topic:** Absolute Change

Based on the chart, the brand with the largest absolute increase in shipments from 2022 to 2025 was ______.

- A) Brand W
- B) Brand X
- C) Brand Y
- D) Brand Z
- E) Brand V

**answer:** C
**explanation:** The absolute increase for a brand is its 2025 shipment value minus its 2022 shipment value, both read directly from the paired bars. We compute this difference for each brand and select the largest.

- Brand W: 54 − 30 = +24 million
- Brand X: 60 − 45 = +15 million
- Brand Y: 50 − 20 = +30 million
- Brand Z: 40 − 25 = +15 million
- Brand V: 55 − 50 = +5 million

Ranking the increases in descending order: 30 (Brand Y) > 24 (Brand W) > 15 (Brand X) = 15 (Brand Z) > 5 (Brand V). Brand Y posted the largest absolute gain at 30 million units. Note that Brand V, despite shipping the most units in 2022 (50 million), added the least in absolute terms (only 5 million), because it was already near the top of the range and grew only modestly.

The correct answer is C.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q68 (Set 32 — Smartphone Shipments, continued)

```chart
{"type":"bar","title":"Smartphone shipments by brand (millions), 2022 vs 2025","x":{"label":"Brand"},"y":{"label":"Shipments (M)","min":0,"max":70},"series":[{"key":"y2022","name":"2022"},{"key":"y2025","name":"2025"}],"data":[{"x":"Brand W","y2022":30,"y2025":54},{"x":"Brand X","y2022":45,"y2025":60},{"x":"Brand Y","y2022":20,"y2025":50},{"x":"Brand Z","y2022":25,"y2025":40},{"x":"Brand V","y2022":50,"y2025":55}]}
```

**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Percent Change

Based on the chart, the brand with the highest percentage growth in shipments from 2022 to 2025 was ______.

- A) Brand W
- B) Brand X
- C) Brand Y
- D) Brand Z
- E) Brand V

**answer:** C
**explanation:** Percentage growth is defined as ((2025 value − 2022 value) / 2022 value) × 100. Unlike absolute change, this measure scales each brand's gain against its own starting base, so a brand starting from a small base can show high percentage growth even with a modest absolute gain.

Applying the formula to the values read from the chart:

- Brand W: (54 − 30) / 30 × 100 = 24/30 × 100 = 80.0%
- Brand X: (60 − 45) / 45 × 100 = 15/45 × 100 ≈ 33.3%
- Brand Y: (50 − 20) / 20 × 100 = 30/20 × 100 = 150.0%
- Brand Z: (40 − 25) / 25 × 100 = 15/25 × 100 = 60.0%
- Brand V: (55 − 50) / 50 × 100 = 5/50 × 100 = 10.0%

Ranking in descending order: Brand Y (150.0%) > Brand W (80.0%) > Brand Z (60.0%) > Brand X (33.3%) > Brand V (10.0%). Brand Y's shipments grew the fastest, increasing by 150% from a base of 20 million to 50 million. Brand Y also recorded the largest absolute gain (+30 million, from the previous question), so here both the absolute and the percentage measures point to the same brand — but the percentage figure is what distinguishes it most sharply, because its small 2022 base of 20 million amplifies the proportional growth.

The correct answer is C.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q69 (Set 32 — Smartphone Shipments, continued)

```chart
{"type":"bar","title":"Smartphone shipments by brand (millions), 2022 vs 2025","x":{"label":"Brand"},"y":{"label":"Shipments (M)","min":0,"max":70},"series":[{"key":"y2022","name":"2022"},{"key":"y2025","name":"2025"}],"data":[{"x":"Brand W","y2022":30,"y2025":54},{"x":"Brand X","y2022":45,"y2025":60},{"x":"Brand Y","y2022":20,"y2025":50},{"x":"Brand Z","y2022":25,"y2025":40},{"x":"Brand V","y2022":50,"y2025":55}]}
```

**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Totals

Based on the chart, the combined 2025 shipments across all five brands was ______ million units.

- A) 170
- B) 215
- C) 245
- D) 259
- E) 275

**answer:** D
**explanation:** The combined shipments figure is the sum of the 2025 bar values across all five brands. Each value is read directly from the 2025 series of the grouped bar chart.

The 2025 shipments are: Brand W 54, Brand X 60, Brand Y 50, Brand Z 40, Brand V 55.

Summing in stages: 54 + 60 = 114; 114 + 50 = 164; 164 + 40 = 204; 204 + 55 = 259.

Therefore the combined 2025 shipments total 259 million units, which matches choice D exactly. A useful cross-check distinguishes this from the prior-year total: the 2022 values sum to 30 + 45 + 20 + 25 + 50 = 170 million units (choice A), which is the 2022 figure and a common trap for a reader who sums the wrong series. Total shipments across the five brands grew from 170 million in 2022 to 259 million in 2025.

The correct answer is D.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q70 (Set 32 — Smartphone Shipments, continued)

```chart
{"type":"bar","title":"Smartphone shipments by brand (millions), 2022 vs 2025","x":{"label":"Brand"},"y":{"label":"Shipments (M)","min":0,"max":70},"series":[{"key":"y2022","name":"2022"},{"key":"y2025","name":"2025"}],"data":[{"x":"Brand W","y2022":30,"y2025":54},{"x":"Brand X","y2022":45,"y2025":60},{"x":"Brand Y","y2022":20,"y2025":50},{"x":"Brand Z","y2022":25,"y2025":40},{"x":"Brand V","y2022":50,"y2025":55}]}
```

**difficulty:** Hard
**type:** Graphics Interpretation
**topic:** Share Change

Based on the chart, Brand W's share of total shipments changed from 2022 to 2025 by approximately ______ percentage points.

- A) +1
- B) +3
- C) +8
- D) +18
- E) +24

**answer:** B
**explanation:** A brand's share of total shipments in a given year is its shipments divided by the sum of all five brands' shipments that year, expressed as a percentage. The percentage-point change is the later share minus the earlier share — an arithmetic difference of two percentages, not a relative change.

First, the yearly totals. The 2022 shipments (Brand W 30, X 45, Y 20, Z 25, V 50) sum to 30 + 45 + 20 + 25 + 50 = 170 million. The 2025 shipments (W 54, X 60, Y 50, Z 40, V 55) sum to 54 + 60 + 50 + 40 + 55 = 259 million.

Brand W's share in each year:

- 2022: 30 / 170 = 0.17647, or about 17.65%.
- 2025: 54 / 259 = 0.20849, or about 20.85%.

The percentage-point change is 20.85% − 17.65% = 3.20 pp. Among the answer choices, +3 pp is the closest value. Brand W's share rose modestly because its own shipments grew by 80% (from 30 to 54) while the overall market grew by about 52% (from 170 to 259); growing faster than the market lifts a brand's slice of the total. Choice E (+24) is a trap that confuses Brand W's absolute gain (+24 million units) with the percentage-point change in its share.

The correct answer is B.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q71 (Set 33 — App Daily Active Users by Tier)

```chart
{"type":"line","title":"Daily active users by tier (thousands)","x":{"label":"Month"},"y":{"label":"Users (K)","min":0,"max":1500},"series":[{"key":"free","name":"Free"},{"key":"premium","name":"Premium"}],"data":[{"x":"Jan","free":800,"premium":120},{"x":"Feb","free":920,"premium":150},{"x":"Mar","free":1050,"premium":200},{"x":"Apr","free":1100,"premium":260},{"x":"May","free":1240,"premium":300},{"x":"Jun","free":1300,"premium":380}]}
```

**difficulty:** Easy
**type:** Graphics Interpretation
**topic:** Comparison

Based on the graph, the month with the largest gap between Free and Premium users was ______.

- A) February
- B) March
- C) April
- D) May
- E) June

**answer:** D
**explanation:** The gap for a given month is the Free value minus the Premium value, both read directly from the two lines. We compute this gap for each month and find the maximum.

| Month | Free | Premium | Gap |
|-------|------|---------|-----|
| Jan | 800 | 120 | 680 |
| Feb | 920 | 150 | 770 |
| Mar | 1,050 | 200 | 850 |
| Apr | 1,100 | 260 | 840 |
| May | 1,240 | 300 | 940 |
| Jun | 1,300 | 380 | 920 |

Ranking the gaps in descending order: 940 (May) > 920 (Jun) > 850 (Mar) > 840 (Apr) > 770 (Feb) > 680 (Jan). May shows the largest gap at 940 thousand users: Free users reach 1,240 thousand while Premium users stand at only 300 thousand. Although both tiers grow over the period, the gap peaks in May and then narrows slightly in June, because Premium grows faster than Free in that final month (Premium jumps 80, Free adds only 60), shrinking the gap from 940 to 920.

The correct answer is D.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q72 (Set 33 — App Daily Active Users, continued)

```chart
{"type":"line","title":"Daily active users by tier (thousands)","x":{"label":"Month"},"y":{"label":"Users (K)","min":0,"max":1500},"series":[{"key":"free","name":"Free"},{"key":"premium","name":"Premium"}],"data":[{"x":"Jan","free":800,"premium":120},{"x":"Feb","free":920,"premium":150},{"x":"Mar","free":1050,"premium":200},{"x":"Apr","free":1100,"premium":260},{"x":"May","free":1240,"premium":300},{"x":"Jun","free":1300,"premium":380}]}
```

**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Averages

Based on the graph, the average number of Premium users across the six months was ______ thousand.

- A) 210
- B) 235
- C) 260
- D) 285
- E) 300

**answer:** B
**explanation:** The average of a data set is the sum of its values divided by the count. Here the relevant values are the six monthly Premium readings, and the count is 6.

Reading the Premium series from the graph: Jan 120, Feb 150, Mar 200, Apr 260, May 300, Jun 380.

Summing in stages: 120 + 150 = 270; 270 + 200 = 470; 470 + 260 = 730; 730 + 300 = 1,030; 1,030 + 380 = 1,410.

Dividing by the six months: 1,410 / 6 = 235.

Therefore the average number of Premium users was exactly 235 thousand, which matches choice B precisely. Among the answer choices — 210, 235, 260, 285, 300 — the value 235 is not merely the closest but the exact result. Note that 260 is the April data point and 300 is the May data point; selecting an individual reading rather than computing the mean is a common error.

The correct answer is B.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q73 (Set 33 — App Daily Active Users, continued)

```chart
{"type":"line","title":"Daily active users by tier (thousands)","x":{"label":"Month"},"y":{"label":"Users (K)","min":0,"max":1500},"series":[{"key":"free","name":"Free"},{"key":"premium","name":"Premium"}],"data":[{"x":"Jan","free":800,"premium":120},{"x":"Feb","free":920,"premium":150},{"x":"Mar","free":1050,"premium":200},{"x":"Apr","free":1100,"premium":260},{"x":"May","free":1240,"premium":300},{"x":"Jun","free":1300,"premium":380}]}
```

**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Percent Change

Based on the graph, the largest month-over-month percentage increase in Premium users occurred in ______.

- A) February
- B) March
- C) April
- D) May
- E) June

**answer:** B
**explanation:** The month-over-month percentage increase in Premium users is ((current month − previous month) / previous month) × 100. We compute this for each month from February through June and identify the largest value.

Reading the Premium series: Jan 120, Feb 150, Mar 200, Apr 260, May 300, Jun 380.

- February: (150 − 120) / 120 × 100 = 30/120 × 100 = 25.00%
- March: (200 − 150) / 150 × 100 = 50/150 × 100 ≈ 33.33%
- April: (260 − 200) / 200 × 100 = 60/200 × 100 = 30.00%
- May: (300 − 260) / 260 × 100 = 40/260 × 100 ≈ 15.38%
- June: (380 − 300) / 300 × 100 = 80/300 × 100 ≈ 26.67%

Ranking in descending order: March (33.33%) > April (30.00%) > June (26.67%) > February (25.00%) > May (15.38%). The largest month-over-month percentage increase of about 33.33% occurs in March, when Premium users rose from 150 thousand to 200 thousand. Although June adds the most absolute users (+80 thousand), its larger base of 300 dilutes the percentage to about 26.67%, behind March's gain of 50 on a smaller base of 150.

The correct answer is B.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q74 (Set 33 — App Daily Active Users, continued)

```chart
{"type":"line","title":"Daily active users by tier (thousands)","x":{"label":"Month"},"y":{"label":"Users (K)","min":0,"max":1500},"series":[{"key":"free","name":"Free"},{"key":"premium","name":"Premium"}],"data":[{"x":"Jan","free":800,"premium":120},{"x":"Feb","free":920,"premium":150},{"x":"Mar","free":1050,"premium":200},{"x":"Apr","free":1100,"premium":260},{"x":"May","free":1240,"premium":300},{"x":"Jun","free":1300,"premium":380}]}
```

**difficulty:** Hard
**type:** Graphics Interpretation
**topic:** Share Change

Based on the graph, Premium users as a share of total daily active users changed from January to June by approximately ______ percentage points.

- A) +2
- B) +5
- C) +10
- D) +16
- E) +22

**answer:** C
**explanation:** Premium's share of total daily active users in a given month is the Premium count divided by the sum of Free and Premium counts that month, expressed as a percentage. The percentage-point change is the June share minus the January share — an arithmetic difference of two percentages, not a relative change.

First, the monthly totals for the two endpoints. In January, total = Free + Premium = 800 + 120 = 920 thousand. In June, total = 1,300 + 380 = 1,680 thousand.

Premium's share in each month:

- January: 120 / 920 = 0.13043, or about 13.04%.
- June: 380 / 1,680 = 0.22619, or about 22.62%.

The percentage-point change is 22.62% − 13.04% = 9.58 pp. Among the answer choices, +10 pp is the closest value. Premium's share of the user base rose because Premium grew much faster over the period (from 120 to 380, a 217% increase) than Free did (from 800 to 1,300, a 63% increase); the faster-growing tier captures a larger slice of the total. Choice E (+22) is a trap that mistakes June's Premium share (about 22.6%) for the change in share, ignoring the January starting point of about 13%.

The correct answer is C.
**related_reading:** reading-di-04-graphics-interpretation


---

## Q75 (Set 34 — Logistics Cost Breakdown Pie Chart)

```chart
{"type":"pie","title":"Logistics cost breakdown, 2025 (%)","data":[{"name":"Warehousing","value":34},{"name":"Transportation","value":28},{"name":"Inventory","value":16},{"name":"Labor","value":14},{"name":"Technology","value":8}]}
```

**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Pie Chart Proportions

If the firm's total annual logistics cost was $250 million, the combined spending on Warehousing and Technology was approximately ______ million dollars.

- A) 85
- B) 95
- C) 105
- D) 115
- E) 125

**answer:** C
**explanation:** To find the combined dollar spending of two pie-chart segments, the percentage shares are first added and the resulting combined share is multiplied by the total quantity the whole chart represents.

Let T = total logistics cost = $250 million. Reading the two relevant slices: Warehousing = 34% and Technology = 8%.

Combined share = 34% + 8% = 42%.

Combined spending = 0.42 × 250 = 105 million dollars.

A useful cross-check computes each slice separately: Warehousing = 0.34 × 250 = 85 million, and Technology = 0.08 × 250 = 20 million. Their sum is 85 + 20 = 105 million, confirming the result. Among the answer choices — 85, 95, 105, 115, 125 — the value 105 is an exact match. Note that 85 (choice A) is the Warehousing slice alone, a trap for solvers who forget to add the Technology share.

The correct answer is C.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q76 (Set 34 — Logistics Cost Breakdown, continued)

```chart
{"type":"pie","title":"Logistics cost breakdown, 2025 (%)","data":[{"name":"Warehousing","value":34},{"name":"Transportation","value":28},{"name":"Inventory","value":16},{"name":"Labor","value":14},{"name":"Technology","value":8}]}
```

**difficulty:** Hard
**type:** Graphics Interpretation
**topic:** Pie Chart Reallocation

Suppose the firm cuts the Transportation share by one quarter and adds the freed-up percentage to Technology. After this change, Technology's share will be approximately ______ times its original share.

- A) 1.5
- B) 1.9
- C) 2.5
- D) 2.9
- E) 3.5

**answer:** B
**explanation:** This problem requires translating a relative cut in one slice into an absolute number of percentage points, transferring those points to a second slice, and then comparing the second slice's new share to its original share as a ratio.

The Transportation slice begins at 28%. Cutting it by one quarter removes 28 × (1/4) = 7 percentage points, so the freed-up amount is 7 percentage points. These 7 points are added to Technology.

Technology begins at 8%. Its new share is 8 + 7 = 15%.

The ratio of new to original Technology share is 15 / 8 = 1.875, which rounds to approximately 1.9.

A cross-check confirms the total still sums to 100%: Warehousing 34 + Transportation (28 − 7 = 21) + Inventory 16 + Labor 14 + Technology 15 = 34 + 21 + 16 + 14 + 15 = 100. Among the choices, 1.875 is closest to 1.9. Choice C (2.5) is a trap that incorrectly transfers the full 28% rather than only the one-quarter cut, and choice A (1.5) understates the transferred amount.

The correct answer is B.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q77 (Set 35 — Solar Capacity Bar Chart)

```chart
{"type":"bar","title":"Installed solar capacity by region (GW), 2025","x":{"label":"Region"},"y":{"label":"Capacity (GW)"},"series":[{"key":"capacity","name":"Capacity"}],"data":[{"x":"North","capacity":50},{"x":"South","capacity":70},{"x":"East","capacity":30},{"x":"West","capacity":90},{"x":"Central","capacity":50}]}
```

**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Bar Chart

Based on the chart, the West region's installed capacity exceeds the average of the other four regions by approximately ______ percent.

- A) 35
- B) 55
- C) 72
- D) 80
- E) 95

**answer:** D
**explanation:** The phrase "exceeds the average of the other four regions by approximately X percent" requires first computing the mean of the four non-West regions, then expressing West's capacity as a percentage excess over that mean using the formula ((West − mean) / mean) × 100.

Reading the bar heights: North 50, South 70, East 30, West 90, Central 50 (all in GW).

The four regions other than West are North, South, East, and Central. Their sum is 50 + 70 + 30 + 50 = 200 GW, and their average is 200 / 4 = 50 GW.

West's capacity is 90 GW. The percentage excess over the four-region average is:

((90 − 50) / 50) × 100 = (40 / 50) × 100 = 80%.

Among the answer choices — 35, 55, 72, 80, 95 — the value 80% is an exact match. A common trap is to compute West as a percentage OF the four-region average (90 / 50 = 180%) and select the wrong magnitude; the question asks by how much West EXCEEDS the average, which is the 80 percentage points above 100%, not the 180% ratio itself.

The correct answer is D.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q78 (Set 35 — Solar Capacity, continued)

```chart
{"type":"bar","title":"Installed solar capacity by region (GW), 2025","x":{"label":"Region"},"y":{"label":"Capacity (GW)"},"series":[{"key":"capacity","name":"Capacity"}],"data":[{"x":"North","capacity":50},{"x":"South","capacity":70},{"x":"East","capacity":30},{"x":"West","capacity":90},{"x":"Central","capacity":50}]}
```

**difficulty:** Easy
**type:** Graphics Interpretation
**topic:** Bar Chart

Based on the chart, the West region's capacity is approximately ______ times that of the East region.

- A) 1.5
- B) 2.0
- C) 2.5
- D) 2.8
- E) 3.0

**answer:** E
**explanation:** To find how many times one bar is another, the ratio definition applies: divide the larger region's value by the smaller region's value, both read directly from the chart.

Reading the two relevant bars: West = 90 GW and East = 30 GW.

The ratio is 90 / 30 = 3.0 exactly.

A cross-check confirms the result: 3.0 × 30 = 90, matching West's capacity precisely. Among the choices — 1.5, 2.0, 2.5, 2.8, 3.0 — the value 3.0 is an exact match rather than an approximation. The trap choice 2.8 would correspond to an East value near 32, and 2.5 to an East value of 36; neither matches the chart's East reading of 30.

The correct answer is E.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q79 (Set 36 — Subscriber Cohort Line Graph)

```chart
{"type":"line","title":"Subscriber retention by cohort month (% remaining)","x":{"label":"Months since signup"},"y":{"label":"Retention (%)","min":0,"max":100},"series":[{"key":"retention","name":"Retention"}],"data":[{"x":"0","retention":100},{"x":"1","retention":82},{"x":"2","retention":70},{"x":"3","retention":61},{"x":"4","retention":55},{"x":"5","retention":51},{"x":"6","retention":48}]}
```

**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Line Graph

Based on the graph, the steepest single-month drop in retention occurred between month ______ and the month after it.

- A) 0
- B) 1
- C) 2
- D) 3
- E) 4

**answer:** A
**explanation:** A single-month drop in retention is the decline from one month's value to the next: drop = retention(month n) − retention(month n+1). The steepest drop is the largest such decline, computed over every consecutive pair.

Reading the retention curve: month 0 = 100, month 1 = 82, month 2 = 70, month 3 = 61, month 4 = 55, month 5 = 51, month 6 = 48 (all percentages).

Consecutive drops:

- Month 0 to 1: 100 − 82 = 18
- Month 1 to 2: 82 − 70 = 12
- Month 2 to 3: 70 − 61 = 9
- Month 3 to 4: 61 − 55 = 6
- Month 4 to 5: 55 − 51 = 4
- Month 5 to 6: 51 − 48 = 3

Ranking in descending order: 18 > 12 > 9 > 6 > 4 > 3. The largest decline, 18 percentage points, occurs between month 0 and month 1. This reflects the common pattern in subscription cohorts: the heaviest churn happens immediately after signup, and the curve flattens as the remaining subscribers become progressively more committed.

The correct answer is A.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q80 (Set 36 — Subscriber Cohort, continued)

```chart
{"type":"line","title":"Subscriber retention by cohort month (% remaining)","x":{"label":"Months since signup"},"y":{"label":"Retention (%)","min":0,"max":100},"series":[{"key":"retention","name":"Retention"}],"data":[{"x":"0","retention":100},{"x":"1","retention":82},{"x":"2","retention":70},{"x":"3","retention":61},{"x":"4","retention":55},{"x":"5","retention":51},{"x":"6","retention":48}]}
```

**difficulty:** Hard
**type:** Graphics Interpretation
**topic:** Line Graph

If the cohort began with 5,000 subscribers, the number who churned between month 2 and month 6 was approximately ______.

- A) 600
- B) 900
- C) 1,100
- D) 1,400
- E) 1,750

**answer:** C
**explanation:** The number of subscribers remaining at any month equals the starting cohort multiplied by that month's retention percentage. The number who churned over an interval is the difference between the count remaining at the start of the interval and the count remaining at the end.

The starting cohort is 5,000 subscribers. Reading the retention values: month 2 = 70% and month 6 = 48%.

Subscribers remaining at month 2 = 0.70 × 5,000 = 3,500.
Subscribers remaining at month 6 = 0.48 × 5,000 = 2,400.

The number who churned between month 2 and month 6 is 3,500 − 2,400 = 1,100.

Equivalently, the retention fell by 70% − 48% = 22 percentage points, and 22% of 5,000 is 0.22 × 5,000 = 1,100. Both methods agree. Among the choices — 600, 900, 1,100, 1,400, 1,750 — the value 1,100 is an exact match. Choice E (1,750) is a trap that computes those who left from the original cohort by month 2 (the 30% already churned, 1,500) plus confusion; choice A (600) reflects only the month 4-to-6 interval.

The correct answer is C.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q81 (Set 37 — Department Headcount vs. Attrition Composed Chart)

```chart
{"type":"composed","title":"Headcount and attrition rate by department (2025)","x":{"label":"Department"},"y":{"label":"Headcount"},"y2":{"label":"Attrition (%)"},"composed":{"bars":["headcount"],"lines":["attrition"]},"data":[{"x":"Sales","headcount":200,"attrition":15},{"x":"Engineering","headcount":350,"attrition":10},{"x":"Support","headcount":150,"attrition":20},{"x":"Marketing","headcount":100,"attrition":12},{"x":"Finance","headcount":80,"attrition":5}]}
```

**difficulty:** Hard
**type:** Graphics Interpretation
**topic:** Combination Bar + Line

Based on the chart, the department that lost the greatest number of employees to attrition in 2025 was ______.

- A) Sales
- B) Engineering
- C) Support
- D) Marketing
- E) Finance

**answer:** B
**explanation:** The number of employees lost to attrition equals a department's headcount multiplied by its attrition rate. Although the attrition rate is read from the line and the headcount from the bars, the product — not either factor alone — determines the absolute number of departures.

Reading both series for each department and computing headcount × attrition rate:

- Sales: 200 × 0.15 = 30
- Engineering: 350 × 0.10 = 35
- Support: 150 × 0.20 = 30
- Marketing: 100 × 0.12 = 12
- Finance: 80 × 0.05 = 4

Ranking in descending order: Engineering 35 > Sales 30 = Support 30 > Marketing 12 > Finance 4.

Engineering lost the greatest number of employees, 35, even though its 10% attrition rate is far from the highest in the chart. Its large headcount of 350 more than compensates: 350 × 10% exceeds Support's 150 × 20% = 30 and Sales's 200 × 15% = 30. The two traps are Support, which has the highest attrition rate (20%) but only the third-largest workforce, and Engineering being overlooked because solvers fixate on the visibly low line value. Only the product of headcount and rate gives the true count of departures, and that product is uniquely largest for Engineering.

The correct answer is B.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q82 (Set 38 — R&D Spending vs. Patents Bubble Chart)

```chart
{"type":"bubble","title":"Pharma firms: R&D spend vs. approval rate (bubble = patents filed)","x":{"label":"R&D spend ($B)","min":0,"max":12},"y":{"label":"Drug approval rate (%)","min":0,"max":40},"data":[{"name":"F1","x":2,"y":12,"z":40},{"name":"F2","x":4,"y":18,"z":75},{"name":"F3","x":6,"y":22,"z":120},{"name":"F4","x":8,"y":28,"z":160},{"name":"F5","x":10,"y":34,"z":210},{"name":"F6","x":3,"y":30,"z":250}]}
```

**difficulty:** Hard
**type:** Graphics Interpretation
**topic:** Bubble Chart

Which statement is best supported by the chart?

- A) Higher R&D spending is associated with lower approval rates.
- B) The firm with the highest approval rate also files the most patents.
- C) Excluding one firm, higher R&D spending is associated with both higher approval rates and more patents filed.
- D) Patents filed are independent of R&D spending.
- E) The firm spending the least on R&D files the most patents.

**answer:** C
**fastest_path:** Set aside F6, then read F1-F5 in spending order: approval rates and bubble sizes both increase at every step.
**explanation:** F6 is the exception: at $3B of R&D it has a 30% approval rate and 250 patents. Excluding it, F1 through F5 rise with spending from $2B to $10B; approval rates increase 12%, 18%, 22%, 28%, 34%, and patents increase 40, 75, 120, 160, 210. That supports C. F5 has the highest approval rate but F6 has the most patents, eliminating B. A, D, and E contradict the visible trend or endpoint values.
**common_trap:** Ignoring the bubble-size variable or letting one explicit outlier hide the consistent pattern among the other firms.
**takeaway:** In a bubble chart, sort by x and track both y and bubble size, noting whether one point is a clear exception.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q83 (Set 39 — Quarterly Imports and Exports Stacked Bar Chart)

```chart
{"type":"stackedBar","title":"Quarterly trade volume by category ($B)","x":{"label":"Quarter"},"y":{"label":"Trade volume ($B)"},"series":[{"key":"Goods","name":"Goods"},{"key":"Services","name":"Services"},{"key":"Energy","name":"Energy"}],"data":[{"x":"Q1","Goods":120,"Services":60,"Energy":40},{"x":"Q2","Goods":135,"Services":75,"Energy":30},{"x":"Q3","Goods":150,"Services":90,"Energy":50},{"x":"Q4","Goods":140,"Services":100,"Energy":60}]}
```

**difficulty:** Hard
**type:** Graphics Interpretation
**topic:** Proportional Analysis

Based on the chart, Services as a share of total quarterly trade volume was highest in ______.

- A) Q1
- B) Q2
- C) Q3
- D) Q4
- E) Q2 and Q3 tied

**answer:** D
**explanation:** A category's share of total quarterly trade volume is its value divided by the sum of all three categories that quarter, expressed as a percentage. We compute the Services share for each quarter and compare.

Reading the three series and totaling each quarter:

- Q1: total = 120 + 60 + 40 = 220; Services share = 60 / 220 ≈ 27.27%.
- Q2: total = 135 + 75 + 30 = 240; Services share = 75 / 240 = 31.25%.
- Q3: total = 150 + 90 + 50 = 290; Services share = 90 / 290 ≈ 31.03%.
- Q4: total = 140 + 100 + 60 = 300; Services share = 100 / 300 ≈ 33.33%.

Ranking in descending order: Q4 (33.33%) > Q2 (31.25%) > Q3 (31.03%) > Q1 (27.27%). Services claimed its largest share of the trade mix in Q4, at about 33.33%, even though Q2 and Q3 are close behind. Note that Q3 has the highest absolute Services value at 90, yet its larger total (290) dilutes the share below Q4's, where Services reaches 100 against a total of 300. The trap here is selecting Q3 (highest absolute Services) instead of computing the proportional share.

The correct answer is D.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q84 (Set 39 — Quarterly Trade Volume, continued)

```chart
{"type":"stackedBar","title":"Quarterly trade volume by category ($B)","x":{"label":"Quarter"},"y":{"label":"Trade volume ($B)"},"series":[{"key":"Goods","name":"Goods"},{"key":"Services","name":"Services"},{"key":"Energy","name":"Energy"}],"data":[{"x":"Q1","Goods":120,"Services":60,"Energy":40},{"x":"Q2","Goods":135,"Services":75,"Energy":30},{"x":"Q3","Goods":150,"Services":90,"Energy":50},{"x":"Q4","Goods":140,"Services":100,"Energy":60}]}
```

**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Absolute Comparison

Based on the chart, the total trade volume across all three categories grew from Q1 to Q3 by approximately ______ percent.

- A) 18
- B) 24
- C) 32
- D) 38
- E) 45

**answer:** C
**explanation:** The percentage growth in total trade volume from Q1 to Q3 is ((Q3 total − Q1 total) / Q1 total) × 100, where each quarter's total is the sum of all three category values for that quarter.

Reading and summing the three categories for each endpoint:

- Q1 total = Goods 120 + Services 60 + Energy 40 = 220 ($B).
- Q3 total = Goods 150 + Services 90 + Energy 50 = 290 ($B).

The growth is:

((290 − 220) / 220) × 100 = (70 / 220) × 100 ≈ 31.82%.

Among the answer choices — 18, 24, 32, 38, 45 — the value 31.82% is closest to 32. A cross-check: 220 × 1.32 = 290.4, essentially matching the Q3 total of 290. The next candidate, 38, would imply 220 × 1.38 = 303.6, overshooting by nearly 14; and 24 would imply 272.8, undershooting by more than 17. Neither is as close as 32.

The correct answer is C.
**related_reading:** reading-di-04-graphics-interpretation


---

## Q85 (Set 40 — Regional Coffee Shop Openings)

```chart
{"type":"line","title":"New coffee shop openings by region (count)","x":{"label":"Year"},"y":{"label":"Openings"},"series":[{"key":"north","name":"North"},{"key":"south","name":"South"}],"data":[{"x":"2020","north":40,"south":24},{"x":"2021","north":52,"south":36},{"x":"2022","north":58,"south":54},{"x":"2023","north":61,"south":78},{"x":"2024","north":63,"south":99}]}
```

**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Crossover Identification

Based on the graph, the first year in which the South region's annual openings exceeded the North region's was ______.

- A) 2020
- B) 2021
- C) 2022
- D) 2023
- E) 2024

**answer:** D
**explanation:** This question asks for the earliest year in which one series first rises above another. We compare the two series value by value, in chronological order, and stop at the first year in which South strictly exceeds North.

Reading the two lines directly from the graph:

| Year | North | South | South > North? |
|------|-------|-------|----------------|
| 2020 | 40    | 24    | No (24 < 40)   |
| 2021 | 52    | 36    | No (36 < 52)   |
| 2022 | 58    | 54    | No (54 < 58)   |
| 2023 | 61    | 78    | Yes (78 > 61)  |
| 2024 | 63    | 99    | Yes (99 > 63)  |

Through 2022 the North line remains above the South line, although the gap narrows from 16 (in 2020) to 4 (in 2022). In 2023 the South value of 78 exceeds the North value of 61 for the first time, marking the crossover. South also leads in 2024, but the question asks for the first such year.

A common trap is to choose 2022, where the two lines are closest (58 vs. 54) and appear to be on the verge of crossing; but in 2022 South has not yet overtaken North. The crossover occurs the following year.

The correct answer is D.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q86 (Set 41 — Manufacturing Plant Output)

```chart
{"type":"bar","title":"Monthly output by plant (thousands of units)","x":{"label":"Plant"},"y":{"label":"Output (K units)"},"series":[{"key":"output","name":"Output"}],"data":[{"x":"Plant 1","output":340},{"x":"Plant 2","output":410},{"x":"Plant 3","output":275},{"x":"Plant 4","output":520},{"x":"Plant 5","output":455}]}
```

**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Share of Total

Based on the chart, the single highest-output plant accounts for approximately ______ percent of the combined output of all five plants.

- A) 21
- B) 26
- C) 30
- D) 34
- E) 38

**answer:** B
**explanation:** A single category's share of a total is its value divided by the sum of all categories, expressed as a percentage. We first identify the highest-output plant, then compute the total across all five plants, then form the ratio.

Reading the five bar heights (in thousands of units): Plant 1 = 340, Plant 2 = 410, Plant 3 = 275, Plant 4 = 520, Plant 5 = 455.

The highest output belongs to Plant 4 at 520 thousand units, since 520 > 455 > 410 > 340 > 275.

The combined output is the sum of all five values:

340 + 410 + 275 + 520 + 455 = (340 + 410) + (275 + 520) + 455 = 750 + 795 + 455 = 2,000 thousand units.

Plant 4's share is therefore:

520 / 2,000 = 0.26 = 26%.

Among the answer choices, 26% is an exact match. A cross-check: 25% of 2,000 would be 500, and 520 is 20 above that, corresponding to one additional percentage point (since 1% of 2,000 = 20). Thus 520 corresponds to exactly 26%, confirming choice B. The other choices correspond to plants that are not the maximum: roughly 21% (410/2,000) would be Plant 2's share, and about 23% (455/2,000) would be Plant 5's, neither of which is the highest plant requested.

The correct answer is B.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q87 (Set 42 — Mobile App Revenue Mix)

```chart
{"type":"pie","title":"Mobile app revenue by source ($40M total, %)","data":[{"name":"In-app purchases","value":44},{"name":"Subscriptions","value":31},{"name":"Advertising","value":17},{"name":"Partnerships","value":8}]}
```

**difficulty:** Hard
**type:** Graphics Interpretation
**topic:** Reallocation and New Share

If next year total revenue grows to $50 million, Subscriptions revenue grows by exactly 50 percent in dollar terms, and all other sources' dollar amounts remain unchanged, then Subscriptions' share of next year's total revenue will be closest to ______ percent.

- A) 31
- B) 34
- C) 37
- D) 40
- E) 47

**answer:** C
**explanation:** A category's future share equals its future dollar amount divided by the future total. Each dollar amount is computed from the current percentages and the stated changes; the future total here is given directly as $50 million, so we do not infer it from the parts.

Current total T = $40M. Reading the pie chart, the current dollar amounts are:

- In-app purchases: 0.44 × 40 = $17.6M
- Subscriptions: 0.31 × 40 = $12.4M
- Advertising: 0.17 × 40 = $6.8M
- Partnerships: 0.08 × 40 = $3.2M

(Check: 17.6 + 12.4 + 6.8 + 3.2 = 40.0, consistent.)

Subscriptions grows by exactly 50% in dollar terms:

New Subscriptions = 12.4 × 1.50 = $18.6M.

The future total is given as $50M. Therefore next year's Subscriptions share is:

18.6 / 50 = 0.372 = 37.2%.

Rounding 37.2% to the nearest listed option gives 37%, choice C.

A consistency note: the other three sources are unchanged at 17.6 + 6.8 + 3.2 = $27.6M, so named sources total 27.6 + 18.6 = $46.2M; the remaining 50 − 46.2 = $3.8M reflects net growth in unspecified or newly added revenue consistent with the total reaching $50M, which does not affect the Subscriptions-share computation. Choice A (31%) is the unchanged old share and ignores both the dollar growth and the larger base; choice D (40%) would result from dividing the new Subscriptions figure by $46.2M of named revenue rather than the stated $50M total.

The correct answer is C.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q88 (Set 43 — Streaming Hours vs. Churn Bubble Chart)

```chart
{"type":"bubble","title":"Streaming plans: monthly hours vs. churn (bubble = subscribers, M)","x":{"label":"Avg monthly hours watched","min":0,"max":60},"y":{"label":"Monthly churn (%)","min":0,"max":12},"data":[{"name":"P1","x":12,"y":10,"z":2.0},{"name":"P2","x":22,"y":8,"z":3.5},{"name":"P3","x":34,"y":6,"z":5.0},{"name":"P4","x":45,"y":4,"z":7.5},{"name":"P5","x":52,"y":3,"z":9.0},{"name":"P6","x":40,"y":9,"z":1.2}]}
```

**difficulty:** Hard
**type:** Graphics Interpretation
**topic:** Three-Variable Pattern with Outlier

Based on the bubble chart, which statement is best supported?

- A) Plans with more average hours watched have higher churn and fewer subscribers.
- B) Setting aside one plan, plans with more average hours watched tend to have both lower churn and more subscribers.
- C) Churn rate and subscriber count are positively associated across all plans.
- D) The plan with the most subscribers has the highest churn.
- E) Average hours watched is unrelated to subscriber count.

**answer:** B
**fastest_path:** Set aside P6; P1-P5 show hours rising, churn falling, and bubble size increasing at every step.
**explanation:** From P1 to P5, average hours rise 12, 22, 34, 45, 52; churn falls 10%, 8%, 6%, 4%, 3%; and subscribers rise 2M, 3.5M, 5M, 7.5M, 9M. P6 is the exception, with 40 hours, 9% churn, and 1.2M subscribers. Therefore B, which explicitly sets aside one plan, is best supported. The other choices reverse or deny these visible relationships.
**common_trap:** Demanding a pattern hold for every point when the correct statement explicitly allows one outlier.
**takeaway:** Sort bubble-chart observations by x, track y and size together, and identify whether one point explains the exception.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q89 (Set 44 — Quarterly Units vs. Price Composed Chart)

```chart
{"type":"composed","title":"Quarterly units shipped vs. unit price","x":{"label":"Quarter"},"y":{"label":"Units (000s)"},"y2":{"label":"Unit price ($)"},"composed":{"bars":["units"],"lines":["price"]},"data":[{"x":"Q1","units":80,"price":60},{"x":"Q2","units":95,"price":56},{"x":"Q3","units":110,"price":50},{"x":"Q4","units":90,"price":64}]}
```

**difficulty:** Hard
**type:** Graphics Interpretation
**topic:** Derived Revenue Maximum

Based on the chart, the quarter with the highest total revenue (units × unit price) was ______.

- A) Q1
- B) Q2
- C) Q3
- D) Q4
- E) Q2 and Q4 tied

**answer:** D
**explanation:** Total revenue equals units shipped multiplied by unit price. Units are expressed in thousands and price in dollars per unit, so each product (thousands × dollars) yields revenue in thousands of dollars. Because units rise then fall while price falls then rises, the revenue maximum need not coincide with the peak of either factor; we therefore compute revenue for every quarter.

Reading units from the bars and price from the line:

| Quarter | Units (000s) | Price ($) | Revenue ($000s) |
|---------|-------------|-----------|------------------|
| Q1      | 80          | 60        | 80 × 60 = 4,800  |
| Q2      | 95          | 56        | 95 × 56 = 5,320  |
| Q3      | 110         | 50        | 110 × 50 = 5,500 |
| Q4      | 90          | 64        | 90 × 64 = 5,760  |

Ranking the four revenue figures: 5,760 > 5,500 > 5,320 > 4,800. The largest is Q4 at 5,760 thousand dollars.

It is instructive to see why Q3, which ships the most units (110), does not win: its low price of $50 yields 110 × 50 = 5,500, which falls short of Q4's 90 × 64 = 5,760 by 260. Q4 combines the highest price ($64) with a still-substantial volume (90 thousand units), producing the top revenue. Likewise Q1, with the highest price tier shared by no other low-volume quarter, has too few units (80) to compete. Q2 and Q4 are not tied: 5,320 ≠ 5,760, eliminating choice E.

The correct answer is D.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q90 (Set 45 — Customer Wait-Time Histogram)

```chart
{"type":"bar","title":"Customer call wait-time distribution (250 calls)","x":{"label":"Wait time (minutes)"},"y":{"label":"Calls"},"series":[{"key":"calls","name":"Calls"}],"data":[{"x":"0–2","calls":30},{"x":"2–4","calls":55},{"x":"4–6","calls":70},{"x":"6–8","calls":45},{"x":"8–10","calls":30},{"x":"10–12","calls":20}]}
```

**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Histogram Median Bin

Based on the histogram, the median call wait time falls in which bin?

- A) 2–4 minutes
- B) 4–6 minutes
- C) 6–8 minutes
- D) 8–10 minutes
- E) Cannot be determined

**answer:** B
**explanation:** The median of an ordered data set of n values, when n is even, is the average of the (n/2)-th and (n/2 + 1)-th values. With n = 250 calls, the median is the average of the 125th and 126th values in the ordered list of wait times. We use cumulative frequencies from the lowest bin upward to locate which bin contains those two positions.

First confirm the total: 30 + 55 + 70 + 45 + 30 + 20 = 250.

Cumulative counts from the smallest wait-time bin upward:

- Bin 0–2: 30 calls — cumulative = 30. Positions 1–30. The 125th is not yet reached.
- Bin 2–4: 55 calls — cumulative = 30 + 55 = 85. Positions 31–85. The 125th is still not reached.
- Bin 4–6: 70 calls — cumulative = 85 + 70 = 155. Positions 86–155 fall in this bin.

Because position 125 satisfies 86 ≤ 125 ≤ 155, the 125th value lies in the 4–6 bin. Position 126 likewise satisfies 86 ≤ 126 ≤ 155, so the 126th value is also in the 4–6 bin. The average of two values drawn from the same bin must itself lie within that bin. Therefore the median call wait time falls in the 4–6 minute bin.

The 2–4 bin is exhausted at position 85, before position 125 is reached, and the 6–8 bin begins only at position 156, beyond both target positions. The location is unambiguous, so the answer is not "Cannot be determined."

The correct answer is B.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q91 (Set 46 — Two-City Rainfall Comparison)

```chart
{"type":"bar","title":"Average monthly rainfall, two cities (mm)","x":{"label":"Month"},"y":{"label":"Rainfall (mm)"},"series":[{"key":"riverton","name":"Riverton"},{"key":"hillcrest","name":"Hillcrest"}],"data":[{"x":"Mar","riverton":40,"hillcrest":55},{"x":"Apr","riverton":62,"hillcrest":58},{"x":"May","riverton":85,"hillcrest":70},{"x":"Jun","riverton":110,"hillcrest":95},{"x":"Jul","riverton":95,"hillcrest":120}]}
```

**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** Comparing Two Series

Based on the chart, the number of months in which Riverton recorded more rainfall than Hillcrest is ______.

- A) 1
- B) 2
- C) 3
- D) 4
- E) 5

**answer:** C
**explanation:** For each month we compare the two cities' rainfall values directly and count the months in which Riverton's value strictly exceeds Hillcrest's.

Reading the paired bars for each month:

| Month | Riverton | Hillcrest | Riverton > Hillcrest? |
|-------|----------|-----------|------------------------|
| Mar   | 40       | 55        | No (40 < 55)           |
| Apr   | 62       | 58        | Yes (62 > 58)          |
| May   | 85       | 70        | Yes (85 > 70)          |
| Jun   | 110      | 95        | Yes (110 > 95)         |
| Jul   | 95       | 120       | No (95 < 120)          |

Riverton exceeds Hillcrest in April, May, and June — three months. In March and July, Hillcrest leads. The count of months in which Riverton recorded more rainfall is therefore 3.

A common error is to focus on the single largest bar (Hillcrest's 120 in July or Riverton's 110 in June) rather than performing the month-by-month comparison; the question requires counting head-to-head wins, which yields exactly three months for Riverton.

The correct answer is C.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q92 (Set 47 — Compound Growth of Enrollment)

```chart
{"type":"line","title":"Online course enrollment (thousands)","x":{"label":"Year"},"y":{"label":"Enrollment (K)"},"series":[{"key":"enrollment","name":"Enrollment"}],"data":[{"x":"2018","enrollment":50},{"x":"2019","enrollment":62},{"x":"2020","enrollment":88},{"x":"2021","enrollment":105},{"x":"2022","enrollment":130},{"x":"2023","enrollment":162}]}
```

**difficulty:** Medium
**type:** Graphics Interpretation
**topic:** CAGR from Endpoints

Based on the graph, the compound annual growth rate (CAGR) of enrollment from 2018 to 2023 was closest to ______ percent.

- A) 16
- B) 22
- C) 26
- D) 32
- E) 38

**answer:** C
**explanation:** The compound annual growth rate over n years is the constant rate r satisfying Ending = Starting × (1 + r)^n, hence r = (Ending / Starting)^(1/n) − 1. Only the two endpoints enter the formula; the intermediate years are not used.

Reading the endpoints from the graph: enrollment in 2018 is 50 thousand and in 2023 is 162 thousand. The span from 2018 to 2023 is n = 5 years.

The growth ratio is 162 / 50 = 3.24, so we need (3.24)^(1/5) − 1.

Rather than extract the fifth root directly, test the answer choices against the forward relation 50 × (1 + r)^5 = 162:

- r = 0.22: (1.22)^5 = 1.22^2 × 1.22^2 × 1.22 = 1.4884 × 1.4884 × 1.22 ≈ 2.2153 × 1.22 ≈ 2.703; 50 × 2.703 ≈ 135. Too low.
- r = 0.26: (1.26)^5: 1.26^2 = 1.5876; 1.5876^2 ≈ 2.5205; × 1.26 ≈ 3.176; 50 × 3.176 ≈ 158.8. Very close to 162.
- r = 0.32: (1.32)^5: 1.32^2 = 1.7424; 1.7424^2 ≈ 3.0360; × 1.32 ≈ 4.008; 50 × 4.008 ≈ 200. Too high.

The target ending value of 162 is matched most closely at r = 0.26, which gives about 159 — a shortfall of only about 3 — whereas r = 0.22 falls short by about 27 and r = 0.32 overshoots by about 38. Refining slightly, (3.24)^(1/5): since 1.26^5 ≈ 3.176 and 1.27^5 ≈ 3.30, the fifth root of 3.24 lies just above 1.26, near 1.265, giving r ≈ 0.265, which rounds to 26%.

The correct answer is C.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q93 (Set 48 — Department Budget Stacked Bar)

```chart
{"type":"stackedBar","title":"Annual budget by department ($M)","x":{"label":"Year"},"y":{"label":"Budget ($M)"},"series":[{"key":"Eng","name":"Engineering"},{"key":"Sales","name":"Sales"},{"key":"Ops","name":"Operations"},{"key":"Admin","name":"Admin"}],"data":[{"x":"2022","Eng":24,"Sales":18,"Ops":12,"Admin":6},{"x":"2023","Eng":30,"Sales":20,"Ops":14,"Admin":6},{"x":"2024","Eng":48,"Sales":22,"Ops":16,"Admin":14}]}
```

**difficulty:** Hard
**type:** Graphics Interpretation
**topic:** Share Change Over Time

Based on the chart, Engineering's share of the total annual budget changed from 2022 to 2024 by approximately ______ percentage points.

- A) +4
- B) +8
- C) +12
- D) +16
- E) +20

**answer:** B
**explanation:** A percentage-point change in a category's share is the arithmetic difference between its later share and its earlier share, where each share is the category value divided by that year's total budget. We compute Engineering's share in 2022 and in 2024, then subtract.

Reading the four series and totaling each year:

- 2022 total = Eng 24 + Sales 18 + Ops 12 + Admin 6 = 60 ($M). Engineering share = 24 / 60 = 0.4000 = 40.00%.
- 2024 total = Eng 48 + Sales 22 + Ops 16 + Admin 14 = 100 ($M). Engineering share = 48 / 100 = 0.4800 = 48.00%.

The percentage-point change is:

48.00% − 40.00% = 8.00 percentage points.

The change is +8 percentage points, choice B. Note the distinction between a percentage-point change and a percentage change: in absolute dollars Engineering's budget rose from 24 to 48, a 100% increase, but its share of the (also growing) total rose only from 40% to 48%, an 8-percentage-point gain. Choices such as +16 or +20 would result from confusing the dollar growth with the share growth, while +4 would result from an arithmetic slip in one of the year totals.

The correct answer is B.
**related_reading:** reading-di-04-graphics-interpretation

---

## Q94 (Set 49 — Salesperson Performance Scatter Plot)

```chart
{"type":"scatter","title":"Sales calls vs. deals closed (per rep, monthly)","x":{"label":"Calls made","min":0,"max":120},"y":{"label":"Deals closed","min":0,"max":30},"data":[{"x":20,"y":4},{"x":35,"y":7},{"x":45,"y":9},{"x":55,"y":11},{"x":65,"y":14},{"x":75,"y":16},{"x":85,"y":18},{"x":95,"y":21},{"x":110,"y":24},{"x":50,"y":22}]}
```

**difficulty:** Hard
**type:** Graphics Interpretation
**topic:** Outlier Deviation from Trend

Based on the scatter plot, the outlier rep at (50, 22) closed approximately how many more deals than the trend line would predict at 50 calls?

- A) 4
- B) 7
- C) 12
- D) 16
- E) 20

**answer:** C
**explanation:** A trend line predicts the response value (deals closed) for a given explanatory value (calls made). To find how far the outlier rep at (50, 22) deviates, we estimate the predicted deals at 50 calls from the conforming points, then subtract that prediction from the rep's actual 22 deals.

Nine of the ten plotted points form a tight, nearly linear cluster: (20, 4), (35, 7), (45, 9), (55, 11), (65, 14), (75, 16), (85, 18), (95, 21), and (110, 24). The tenth point, (50, 22), sits far above this band and is the outlier in question.

The two conforming points that bracket x = 50 are (45, 9) and (55, 11). Because x = 50 is the exact midpoint of that interval, linear interpolation gives a predicted value of (9 + 11) / 2 = 10 deals at 50 calls. This visual reading is the natural GMAT approach. It is corroborated by a line through the endpoints of the cluster, (20, 4) and (110, 24): the slope is (24 − 4) / (110 − 20) = 20 / 90 ≈ 0.222 deals per call, and the intercept from 4 = 0.222 × 20 + b gives b ≈ 4 − 4.44 ≈ −0.44, so the predicted value at x = 50 is 0.222 × 50 − 0.44 ≈ 11.1 − 0.44 ≈ 10.7 deals. Both methods agree on roughly 10 to 11 predicted deals.

The outlier's actual value is 22 deals. The deviation above the trend is therefore approximately 22 − 10 ≈ 12 (interpolation) or 22 − 10.7 ≈ 11.3 (regression). Among the answer choices — 4, 7, 12, 16, 20 — the value 12 is the closest to both estimates. No other choice falls within reasonable range: 7 would imply a predicted value of 15 (well above the cluster's level at 50 calls), and 16 would imply a predicted value of 6 (well below it).

The correct answer is C.
**related_reading:** reading-di-04-graphics-interpretation
