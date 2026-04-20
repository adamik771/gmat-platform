---
section: DI
topic: Multi-Source Reasoning
---

## Set 1: Apex Electronics Regional Sales Review

### Tab 1: Internal Memo

**From:** Sarah Nguyen, VP of Sales
**To:** Regional Directors
**Date:** March 15

Team,

Our fiscal year ended on December 31, and I want to share preliminary observations before the board meeting next week. Overall company revenue grew 8% year-over-year to $24.3 million. However, growth was uneven across regions.

The Western region continues to be our largest revenue contributor, but its growth rate has slowed compared to last year. The Eastern region showed the strongest percentage growth of any region, driven largely by the new enterprise client contracts signed in Q3. The Central region's revenue declined for the first time in five years, which I attribute primarily to the loss of two major retail accounts in Q2.

I also want to flag that our product mix has shifted. Hardware sales accounted for 55% of total revenue this year, down from 62% last year. Software and services made up the balance.

Please prepare your regional breakdowns for the board presentation.

-- Sarah

### Tab 2: Regional Revenue Table

| Region   | FY Previous ($M) | FY Current ($M) | YoY Change (%) | Hardware ($M) | Software & Services ($M) |
|----------|-------------------|-----------------|-----------------|---------------|--------------------------|
| Western  | 9.50              | 9.98            | +5.0%           | 5.49          | 4.49                     |
| Eastern  | 5.80              | 6.96            | +20.0%          | 3.13          | 3.83                     |
| Central  | 4.60              | 4.37            | -5.0%           | 2.84          | 1.53                     |
| Southern | 2.60              | 2.99            | +15.0%          | 1.91          | 1.08                     |
| **Total**| **22.50**         | **24.30**       | **+8.0%**       | **13.37**     | **10.93**                |

### Tab 3: Product Mix Targets (Board-Approved)

The board set the following strategic targets for the current fiscal year:

- Hardware should account for no more than 50% of total revenue.
- Software & Services revenue should grow by at least 15% year-over-year.
- No single region should account for more than 40% of total revenue.
- Every region must achieve positive year-over-year revenue growth.

### Q1
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Business Analysis

Based on the information provided, which region had the highest proportion of its revenue coming from Software & Services?

- A) Western
- B) Eastern
- C) Central
- D) Southern

**answer:** B
**explanation:** Calculate Software & Services as a percentage of each region's total current revenue. Western: 4.49/9.98 = 45.0%. Eastern: 3.83/6.96 = 55.0%. Central: 1.53/4.37 = 35.0%. Southern: 1.08/2.99 = 36.1%. Eastern has the highest proportion at 55.0%.

---

### Q2
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Business Analysis

How many of the four board-approved targets (from Tab 3) did the company meet or exceed in the current fiscal year?

- A) 1
- B) 2
- C) 3
- D) 4

**answer:** A
**explanation:** Check each target: (1) Hardware ≤ 50% of revenue: $13.37M / $24.30M = 55.0% -- NOT met. (2) Software & Services YoY growth ≥ 15%: Previous year hardware was 62% of $22.50M = $13.95M, so previous S&S = $8.55M. Current S&S = $10.93M. Growth = (10.93 - 8.55)/8.55 = 27.8% -- MET. (3) No region > 40% of total: Western = 9.98/24.30 = 41.1% -- NOT met. (4) Every region positive growth: Central declined 5.0% -- NOT met. Only 1 of 4 targets was met.

---

### Q3
**difficulty:** Hard
**type:** Multi-Source Reasoning
**topic:** Business Analysis

If the Eastern region's enterprise client contracts (referenced in the memo) contributed $0.90 million in revenue during the current fiscal year, approximately what would the Eastern region's year-over-year growth rate have been without those contracts?

- A) 4.5%
- B) 7.2%
- C) 10.4%
- D) 14.8%

**answer:** C
**explanation:** Eastern region current revenue = $6.96M. Without the enterprise contracts: $6.96M - $0.90M = $6.06M. Previous year Eastern revenue = $5.80M. Growth rate without contracts = ($6.06M - $5.80M) / $5.80M = $0.26M / $5.80M = 4.48%. The closest answer is A. Let me recheck: 0.26/5.80 = 0.04483 = approximately 4.5%. The answer is A.

**answer:** A
**explanation:** Eastern current revenue without contracts = $6.96M - $0.90M = $6.06M. Previous Eastern revenue = $5.80M. Growth = (6.06 - 5.80) / 5.80 = 0.26 / 5.80 = 0.0448 = approximately 4.5%.

---

## Set 2: Veridian Therapeutics Phase II Clinical Study

### Tab 1: Study Protocol Summary

**Study Title:** Efficacy of Compound VT-400 for Moderate Chronic Insomnia
**Study Design:** Randomized, double-blind, placebo-controlled
**Duration:** 12 weeks
**Population:** Adults aged 25-65 diagnosed with moderate chronic insomnia (defined as sleep onset latency > 30 minutes and/or total sleep time < 6 hours per night, occurring at least 3 nights per week for at least 3 months)

Participants were randomized into three groups:
- **Group A (Low Dose):** 10 mg VT-400 taken 30 minutes before bedtime (n = 85)
- **Group B (High Dose):** 25 mg VT-400 taken 30 minutes before bedtime (n = 82)
- **Group C (Placebo):** Matching placebo taken 30 minutes before bedtime (n = 88)

**Primary Endpoint:** Change in average sleep onset latency (SOL) from baseline to Week 12, measured by polysomnography.
**Secondary Endpoint:** Change in total sleep time (TST) from baseline to Week 12.

A result was considered statistically significant if p < 0.05.

### Tab 2: Results Summary

| Metric                          | Group A (10 mg) | Group B (25 mg) | Group C (Placebo) |
|---------------------------------|-----------------|-----------------|-------------------|
| Baseline Avg SOL (min)          | 48.2            | 47.5            | 49.1              |
| Week 12 Avg SOL (min)           | 31.4            | 22.8            | 41.3              |
| Change in SOL (min)             | -16.8           | -24.7           | -7.8              |
| SOL p-value vs Placebo          | 0.03            | < 0.001         | --                |
| Baseline Avg TST (hrs)          | 5.1             | 5.0             | 5.2               |
| Week 12 Avg TST (hrs)           | 6.0             | 6.7             | 5.6               |
| Change in TST (hrs)             | +0.9            | +1.7            | +0.4              |
| TST p-value vs Placebo          | 0.08            | 0.002           | --                |
| Dropout Rate                    | 9.4%            | 14.6%           | 7.9%              |

### Tab 3: Adverse Events Report

Adverse events reported by at least 5% of participants in any group:

| Adverse Event     | Group A (10 mg) | Group B (25 mg) | Group C (Placebo) |
|-------------------|-----------------|-----------------|-------------------|
| Morning drowsiness| 11.8%           | 24.4%           | 5.7%              |
| Headache          | 8.2%            | 9.8%            | 7.9%              |
| Nausea            | 3.5%            | 7.3%            | 4.5%              |
| Dizziness         | 5.9%            | 12.2%           | 3.4%              |

### Q4
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Research Analysis

Based on the study results, for which combination of dose level and endpoint did the study demonstrate statistical significance?

- A) Low dose for both SOL and TST
- B) High dose for both SOL and TST
- C) Both doses for SOL only
- D) Both doses for both SOL and TST

**answer:** B
**explanation:** Statistical significance requires p < 0.05. Group A (low dose) SOL: p = 0.03 < 0.05, significant. Group A TST: p = 0.08, NOT significant. Group B (high dose) SOL: p < 0.001, significant. Group B TST: p = 0.002, significant. So the low dose was significant for SOL only, while the high dose was significant for both SOL and TST. Looking at the answer choices, (B) correctly identifies that the high dose achieved significance on both endpoints. (C) is partially correct about SOL but ignores that the high dose also hit TST. The question asks which combination was demonstrated, and (B) is the most complete correct answer about a single dose achieving significance on both measures.

---

### Q5
**difficulty:** Hard
**type:** Multi-Source Reasoning
**topic:** Research Analysis

A regulatory reviewer is assessing VT-400. She will recommend advancing to Phase III only if ALL of the following criteria are satisfied: (i) at least one dose shows statistical significance on the primary endpoint; (ii) that same dose shows a clinically meaningful improvement in TST, defined as at least 1.0 hour increase; and (iii) the dropout rate for that dose group does not exceed twice the placebo dropout rate. Based on the data, should the reviewer recommend advancing to Phase III?

- A) Yes, based on the low dose group only
- B) Yes, based on the high dose group only
- C) Yes, based on either dose group
- D) No, neither dose group satisfies all three criteria

**answer:** B
**explanation:** Check each group against all three criteria. Group A (10 mg): (i) SOL p = 0.03 < 0.05 -- Met. (ii) TST change = +0.9 hours, less than 1.0 -- NOT met. Fails criterion (ii). Group B (25 mg): (i) SOL p < 0.001 -- Met. (ii) TST change = +1.7 hours ≥ 1.0 -- Met. (iii) Dropout rate = 14.6%; twice placebo dropout = 2 x 7.9% = 15.8%. Since 14.6% < 15.8% -- Met. Group B satisfies all three criteria. The answer is B.

---

### Q6
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Research Analysis

Which of the following adverse events showed the greatest absolute percentage-point difference between the high dose group and the placebo group?

- A) Morning drowsiness
- B) Headache
- C) Nausea
- D) Dizziness

**answer:** A
**explanation:** Calculate the absolute difference between Group B (25 mg) and Group C (placebo) for each adverse event. Morning drowsiness: 24.4% - 5.7% = 18.7 percentage points. Headache: 9.8% - 7.9% = 1.9 percentage points. Nausea: 7.3% - 4.5% = 2.8 percentage points. Dizziness: 12.2% - 3.4% = 8.8 percentage points. Morning drowsiness has the greatest difference at 18.7 percentage points.

---

## Set 3: Millbrook City Budget Allocation

### Tab 1: City Council Meeting Minutes (Excerpt)

**Millbrook City Council -- Budget Session, February 10**

Council Chair Daniels opened the session by noting that the city's total operating budget for the upcoming fiscal year is $48 million, a 6% increase from the current year's $45.28 million budget.

Councilmember Torres advocated for increasing the Public Safety allocation, noting that the city's population grew 4% this year and response times have increased. She proposed that Public Safety receive no less than 32% of the total budget.

Councilmember Park countered that Infrastructure spending has been deferred for three years and that road maintenance costs are projected to rise 12% next year. He requested that Infrastructure receive at least $8 million.

The City Manager noted that state and federal grants will cover $3.2 million of Education spending, which is not included in the operating budget figures. She also reminded the council that debt service payments of $4.8 million are fixed and non-negotiable.

### Tab 2: Proposed Budget Allocation

| Department         | Current Year ($M) | Proposed ($M) | % of Proposed Budget | Change ($M) |
|--------------------|-------------------|---------------|----------------------|-------------|
| Public Safety      | 14.20             | 15.84         | 33.0%                | +1.64       |
| Education          | 11.32             | 11.52         | 24.0%                | +0.20       |
| Infrastructure     | 6.34              | 7.68          | 16.0%                | +1.34       |
| Parks & Recreation | 3.62              | 3.36          | 7.0%                 | -0.26       |
| Health Services    | 4.08              | 4.80          | 10.0%                | +0.72       |
| Debt Service       | 4.80              | 4.80          | 10.0%                | 0.00        |
| **Total**          | **44.36**         | **48.00**     | **100%**             | **+3.64**   |

### Tab 3: Five-Year Historical Spending (Infrastructure Only)

| Fiscal Year | Infrastructure Budget ($M) | Actual Spending ($M) | Deferred Projects ($M) |
|-------------|---------------------------|----------------------|------------------------|
| FY-4        | 8.10                      | 7.95                 | 0.15                   |
| FY-3        | 7.80                      | 7.20                 | 0.60                   |
| FY-2        | 7.10                      | 6.50                 | 0.60                   |
| FY-1        | 6.80                      | 6.34                 | 0.46                   |
| Current     | 6.34                      | 6.34 (est.)          | 0.00 (est.)            |

### Q7
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Policy Analysis

Does the proposed budget satisfy both Councilmember Torres's request regarding Public Safety and Councilmember Park's request regarding Infrastructure?

- A) It satisfies both requests.
- B) It satisfies Torres's request but not Park's.
- C) It satisfies Park's request but not Torres's.
- D) It satisfies neither request.

**answer:** B
**explanation:** Torres requested Public Safety receive no less than 32% of the total budget. Proposed Public Safety = $15.84M / $48.00M = 33.0%. This meets Torres's threshold. Park requested Infrastructure receive at least $8 million. Proposed Infrastructure = $7.68M, which is less than $8M. This does NOT meet Park's request. Therefore, the budget satisfies Torres's request but not Park's. The answer is B.

---

### Q8
**difficulty:** Hard
**type:** Multi-Source Reasoning
**topic:** Policy Analysis

According to the meeting minutes, the current year's total operating budget was $45.28 million, but the proposed budget table shows the current year total as $44.36 million. Assuming the table figures are correct departmental allocations, which of the following best explains the discrepancy?

- A) The table omits a department or category that accounts for $0.92 million.
- B) The 6% increase was calculated incorrectly by the Council Chair.
- C) The debt service figure was double-counted in the minutes.
- D) State and federal grants of $3.2 million were included in the minutes figure.

**answer:** A
**explanation:** The minutes state the current budget is $45.28M, but the table sums to $44.36M. The difference is $45.28M - $44.36M = $0.92M. This suggests the table does not include all budget categories -- there may be administrative costs, contingency reserves, or other line items totaling $0.92M not shown in the table. Option B is unlikely since 45.28 x 1.06 = 48.0 (approximately $48M), confirming the 6% figure is consistent. Option C: debt service appears once in the table at $4.80M. Option D: the City Manager specifically noted the grants are NOT included in the operating budget. The answer is A.

---

### Q9
**difficulty:** Hard
**type:** Multi-Source Reasoning
**topic:** Policy Analysis

Over the five-year historical period shown in Tab 3, what is the total cumulative amount of deferred infrastructure projects, and how does it compare to the proposed increase in Infrastructure spending for the upcoming year?

- A) Deferred projects total $1.81M, which exceeds the proposed Infrastructure increase of $1.34M.
- B) Deferred projects total $1.81M, which is less than the proposed Infrastructure increase of $1.34M.
- C) Deferred projects total $1.21M, which is less than the proposed Infrastructure increase of $1.34M.
- D) Deferred projects total $0.60M, which is less than the proposed Infrastructure increase of $1.34M.

**answer:** A
**explanation:** Sum the deferred projects from Tab 3: $0.15M + $0.60M + $0.60M + $0.46M + $0.00M = $1.81M. The proposed Infrastructure increase from Tab 2 is $7.68M - $6.34M = $1.34M. Since $1.81M > $1.34M, the cumulative deferred projects exceed the proposed increase. The answer is A.

---

## Set 4: Lumen Beverages — North Star Product Launch

### Tab 1: Market Research Summary

**Prepared by:** Consumer Insights Team
**Product:** North Star — a sparkling adaptogen-infused beverage
**Target Segments:** Urban professionals (25-44), wellness-focused consumers

Our concept test surveyed 1,200 target consumers across four metro markets (Austin, Denver, Seattle, Boston). Purchase intent (top-two-box) averaged 42%, well above our internal benchmark of 30% for new functional beverages.

Price sensitivity analysis suggests a $3.49 per can optimum retail price. Above $3.99, purchase intent falls below 25%. Below $2.99, consumers reported suspicion about ingredient quality.

The strongest appeal drivers were (in order): "clean ingredients," "afternoon energy without jitters," and "taste." The weakest driver was "status/image."

Finally, we flag that category growth for functional beverages is decelerating from 14% YoY (two years ago) to a forecast 7% YoY next year, though adaptogen-specific SKUs are still growing at 22% YoY.

### Tab 2: Budget and Financial Projections

| Line Item                          | Year 1 ($M) | Year 2 ($M) | Year 3 ($M) |
|------------------------------------|-------------|-------------|-------------|
| Projected Revenue                  | 8.0         | 18.5        | 32.0        |
| Cost of Goods Sold                 | 4.8         | 10.2        | 16.0        |
| Marketing Spend                    | 3.6         | 4.5         | 5.0         |
| Distribution & Logistics           | 1.2         | 2.6         | 4.2         |
| G&A Allocation                     | 0.8         | 1.0         | 1.2         |
| **Operating Profit / (Loss)**      | **(2.4)**   | **0.2**     | **5.6**     |

Breakeven is projected for mid-Year 2. Marketing spend in Year 1 includes $1.2M of one-time launch costs (influencer seeding, trade promotions, and in-store demos).

### Tab 3: Competitive Landscape

| Competitor    | Retail Price | Distribution (% ACV) | Category Share | Positioning                    |
|---------------|--------------|----------------------|----------------|--------------------------------|
| BrightKick    | $2.79        | 68%                  | 14%            | Mass-market energy             |
| Ember & Root  | $3.99        | 34%                  | 6%             | Premium adaptogen              |
| Still/Fizz    | $3.29        | 52%                  | 9%             | Sparkling wellness             |
| Calm Co.      | $3.59        | 41%                  | 7%             | Stress-reduction functional    |
| North Star (proposed) | $3.49 | TBD                  | 0%             | Sparkling adaptogen wellness   |

Notes: "ACV" is All-Commodity Volume, a standard measure of retail distribution breadth. Ember & Root is considered the closest direct competitor.

### Q10
**difficulty:** Easy
**type:** Multi-Source Reasoning
**topic:** Business Analysis

According to the market research, which of the following was identified as the WEAKEST driver of appeal for North Star?

- A) Clean ingredients
- B) Afternoon energy without jitters
- C) Taste
- D) Status/image

**answer:** D
**explanation:** Tab 1 explicitly states, "The weakest driver was 'status/image.'" The other three options are listed as the strongest drivers, in order. This is a direct fact-lookup from Tab 1.

---

### Q11
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Business Analysis

Based on the financial projections, what is North Star's projected gross margin (revenue minus COGS, divided by revenue) in Year 3?

- A) 32.5%
- B) 45.0%
- C) 50.0%
- D) 55.0%

**answer:** C
**explanation:** From Tab 2, Year 3 revenue = $32.0M and COGS = $16.0M. Gross margin = (32.0 - 16.0) / 32.0 = 16.0 / 32.0 = 0.50 = 50.0%. The answer is C. Note: a common trap is to subtract all expenses (operating margin = 5.6/32.0 ≈ 17.5%), but the question specifies gross margin.

---

### Q12
**difficulty:** Hard
**type:** Multi-Source Reasoning
**topic:** Business Analysis

A board member argues that North Star is mispriced given its positioning. Considering all three tabs, which of the following most directly supports her claim that the proposed $3.49 price is too LOW?

- A) Price sensitivity analysis showed purchase intent falls below 25% above $3.99.
- B) The closest direct competitor (Ember & Root) is priced at $3.99 and occupies the "premium adaptogen" segment that North Star also targets.
- C) BrightKick is priced at $2.79 and holds the largest category share among competitors listed.
- D) Category growth for functional beverages is decelerating to 7% YoY.

**answer:** B
**explanation:** The board member claims the $3.49 price is too LOW. We need evidence that would support a HIGHER price. (A) actually argues against raising price — it says intent drops sharply above $3.99. (B) is the strongest support: the closest direct competitor occupies the same adaptogen-wellness positioning and charges $3.99, so a $3.49 price may undercut North Star's premium claim and leave money on the table. (C) compares to a mass-market competitor, which is a different positioning. (D) speaks to category growth, not pricing. Synthesizing Tab 1 (positioning) and Tab 3 (competitive pricing) gives B.

---

## Set 5: Northfield Logistics — Warehouse Consolidation Study

### Tab 1: Executive Briefing

**Subject:** Proposed consolidation of Midwest warehouse footprint
**Prepared by:** Operations Strategy, Northfield Logistics

Northfield currently operates four regional warehouses in the Midwest: Columbus, Indianapolis, St. Louis, and Milwaukee. Total annual operating cost across these four sites is $28.4 million. Average utilization (measured as used pallet positions divided by total pallet capacity) is 61%, below our internal target of 75%.

Leadership is evaluating a plan to close two of the four warehouses and consolidate volume into the remaining two. The key constraints:

1. No customer should experience an increase in average delivery time greater than 0.5 days.
2. The combined utilization of the two remaining warehouses must not exceed 90% (to preserve surge capacity).
3. Net annual savings must exceed $4.0 million to justify the transition cost (estimated one-time at $6.8 million).

### Tab 2: Warehouse Operating Data

| Warehouse     | Annual Op Cost ($M) | Pallet Capacity | Current Utilization | Avg Delivery Time to Served Customers (days) |
|---------------|---------------------|-----------------|---------------------|----------------------------------------------|
| Columbus      | 7.8                 | 42,000          | 68%                 | 1.4                                          |
| Indianapolis  | 6.9                 | 38,000          | 64%                 | 1.5                                          |
| St. Louis     | 7.4                 | 40,000          | 55%                 | 1.7                                          |
| Milwaukee     | 6.3                 | 34,000          | 57%                 | 1.9                                          |
| **Total**     | **28.4**            | **154,000**     | **61% (avg)**       | —                                            |

### Tab 3: Delivery Impact Simulation

The operations team simulated four two-warehouse scenarios. Each row shows the retained pair and the projected results after all volume is rerouted.

| Scenario | Retained Pair                | Combined Utilization | Max Customer Delivery Increase (days) | Projected Annual Op Cost ($M) |
|----------|------------------------------|----------------------|---------------------------------------|-------------------------------|
| 1        | Columbus + Indianapolis      | 88%                  | 0.3                                   | 16.1                          |
| 2        | Columbus + St. Louis         | 85%                  | 0.4                                   | 16.5                          |
| 3        | Columbus + Milwaukee         | 92%                  | 0.6                                   | 15.4                          |
| 4        | Indianapolis + St. Louis     | 84%                  | 0.7                                   | 15.7                          |

All projected costs include incremental freight and staffing needed to serve reassigned customers. Transition cost ($6.8M) is not included in these figures.

### Q13
**difficulty:** Easy
**type:** Multi-Source Reasoning
**topic:** Operations Analysis

According to Tab 2, which warehouse has the LOWEST current utilization?

- A) Columbus
- B) Indianapolis
- C) St. Louis
- D) Milwaukee

**answer:** C
**explanation:** Reading directly from Tab 2: Columbus 68%, Indianapolis 64%, St. Louis 55%, Milwaukee 57%. St. Louis at 55% is the lowest. The answer is C. A common trap is to pick Milwaukee because it has the smallest capacity, but utilization is a ratio, not raw volume.

---

### Q14
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Operations Analysis

Based on the simulation in Tab 3, what would be the net annual operating cost savings (before the one-time transition cost) if Scenario 2 were adopted?

- A) $11.9 million
- B) $12.4 million
- C) $13.0 million
- D) $15.2 million

**answer:** A
**explanation:** From Tab 2, current total annual op cost = $28.4M. From Tab 3, Scenario 2 projected annual op cost = $16.5M. Savings = $28.4M - $16.5M = $11.9M. The answer is A. Note the question asks about annual savings before the one-time $6.8M transition cost, so we do not subtract that here.

---

### Q15
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Operations Analysis

Applying the three constraints from the Executive Briefing (Tab 1) to the scenarios in Tab 3, how many of the four scenarios satisfy ALL three constraints?

- A) 0
- B) 1
- C) 2
- D) 3

**answer:** C
**explanation:** Check each scenario against all three constraints. Constraint 1: max delivery increase ≤ 0.5 days. Constraint 2: combined utilization ≤ 90%. Constraint 3: annual savings > $4.0M (i.e., projected op cost < $28.4M - $4.0M = $24.4M). Scenario 1: 0.3 days (OK), 88% (OK), $16.1M < $24.4M (OK) — PASSES. Scenario 2: 0.4 days (OK), 85% (OK), $16.5M (OK) — PASSES. Scenario 3: 0.6 days FAILS constraint 1. Scenario 4: 0.7 days FAILS constraint 1. Two scenarios (1 and 2) satisfy all three constraints. The answer is C.
