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
**explanation:** This question asks which region had the highest proportion of its revenue coming from Software & Services. The relevant figures are in Tab 2 of the Regional Revenue Table; Tab 1 and Tab 3 are not needed.

For each region, the proportion equals Software & Services revenue divided by FY Current total revenue.

Western: 4.49 / 9.98 = approximately 45.0%
Eastern: 3.83 / 6.96 = approximately 55.0%
Central: 1.53 / 4.37 = approximately 35.0%
Southern: 1.08 / 2.99 = approximately 36.1%

The Western region carries the largest absolute Software & Services figure (4.49) and might appear to be a strong candidate, but its large revenue base (9.98) brings its proportion down to roughly 45%, materially below Eastern's. Central and Southern both fall in the 35–36% range and are easily eliminated. Eastern's relatively modest total revenue base of 6.96, combined with a Software & Services figure of 3.83 that actually exceeds its Hardware revenue of 3.13, produces the highest proportion among all four regions at approximately 55%, a margin of roughly 10 percentage points over the next-closest region, Western.

The correct answer is B.
**related_reading:** reading-di-05-multi-source-reasoning

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
**explanation:** The question requires evaluating each of the four board-approved targets from Tab 3 against the current fiscal year actuals reported in Tab 2 and corroborated by the memo in Tab 1.

Target 1. Hardware should account for no more than 50% of total revenue.

Total current revenue = $24.30M (Tab 2). Total hardware revenue = $13.37M (Tab 2). Hardware share = 13.37 / 24.30 = 0.5502, or approximately 55.0%. The memo confirms this figure explicitly: "Hardware sales accounted for 55% of total revenue this year." Because 55.0% > 50%, this target is not met.

Target 2. Software & Services revenue should grow by at least 15% year-over-year.

From Tab 2, total Software & Services current = $10.93M. The prior-year Software & Services total is not given directly in the table, but it can be derived using the memo's disclosure that hardware was 62% of last year's revenue: 0.62 x $22.50M = $13.95M in prior-year hardware, leaving $22.50M - $13.95M = $8.55M in prior-year Software & Services. Growth = (10.93 - 8.55) / 8.55 = 2.38 / 8.55 = 0.2784, or approximately 27.8%. Because 27.8% > 15%, this target is met.

Target 3. No single region should account for more than 40% of total revenue.

The 40% threshold on $24.30M total is 0.40 x 24.30 = $9.72M. The largest region is Western at $9.98M. Because 9.98 > 9.72, Western's share = 9.98 / 24.30 = 0.4107, or approximately 41.1%, which exceeds 40%. This target is not met.

Target 4. Every region must achieve positive year-over-year revenue growth.

Tab 2 shows the Central region at $4.37M current versus $4.60M prior, a change of -5.0%. Because Central's revenue declined, not every region achieved positive growth. This target is not met.

Of the four targets, only Target 2 (Software & Services growth >= 15%) was met. Targets 1, 3, and 4 were each missed. Therefore exactly one target was achieved.

The correct answer is A.
**related_reading:** reading-di-05-multi-source-reasoning

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

**answer:** A
**explanation:** **Source identification.** The relevant data lives in Tab 2 (Regional Revenue Table), which supplies the Eastern region's FY Previous revenue of $5.80 million and FY Current revenue of $6.96 million. The memo (Tab 1) identifies enterprise client contracts as the driver of Eastern growth but supplies no dollar figure; the $0.90 million figure is given in the question stem.

**Governing principle.** Year-over-year growth rate is defined as (Current Revenue - Previous Revenue) / Previous Revenue. To isolate organic growth — that is, growth excluding the enterprise contracts — the contract revenue is subtracted from the current-year figure before applying the formula.

**Setup.** Let R_adj be the Eastern region's adjusted current-year revenue:

R_adj = 6.96 - 0.90 = 6.06 (millions)

The FY Previous baseline remains unchanged at 5.80 million, because the enterprise contracts were signed in Q3 of the current year and therefore contributed nothing to the prior-year figure.

**Computation.**

Growth rate = (R_adj - R_prev) / R_prev = (6.06 - 5.80) / 5.80 = 0.26 / 5.80

Performing the division: 0.26 / 5.80 = 0.04482..., which rounds to approximately 4.5%.

**Ruling out alternatives.** Choice B (7.2%) would require an incremental gain of roughly 5.80 * 0.072 = 0.418 million above the prior-year base, not 0.26 million. Choice C (10.4%) would require a gain of approximately 0.603 million. Choice D (14.8%) would require a gain of approximately 0.858 million — notably close to the unadjusted gain of 1.16 million, suggesting it might tempt a solver who subtracts the $0.90 million from the wrong figure or uses it as the new baseline rather than as a deduction from current revenue. None of B, C, or D is consistent with the arithmetic derived above.

The correct answer is A.
**related_reading:** reading-di-05-multi-source-reasoning

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
**explanation:** The study protocol (Tab 1) establishes the significance threshold: a result is statistically significant if its p-value is less than 0.05. With that criterion fixed, Tab 2 supplies the p-values for each dose group and each endpoint.

**Applying the Threshold — Primary Endpoint (SOL).** For Group A (10 mg), the SOL p-value versus placebo is 0.03. Because 0.03 < 0.05, the low-dose result for SOL is statistically significant. For Group B (25 mg), the SOL p-value is reported as < 0.001, which is also less than 0.05, so the high-dose result for SOL is likewise statistically significant. Both doses therefore clear the bar on the primary endpoint.

**Applying the Threshold — Secondary Endpoint (TST).** For Group A (10 mg), the TST p-value versus placebo is 0.08. Because 0.08 > 0.05, the low-dose result for TST does not meet the significance criterion. For Group B (25 mg), the TST p-value is 0.002. Because 0.002 < 0.05, the high-dose result for TST is statistically significant.

**Summary of Findings.**

| Group | SOL p-value | Significant? | TST p-value | Significant? |
|-------|-------------|--------------|-------------|--------------|
| A (10 mg) | 0.03 | Yes (0.03 < 0.05) | 0.08 | No (0.08 > 0.05) |
| B (25 mg) | < 0.001 | Yes | 0.002 | Yes (0.002 < 0.05) |

**Ruling Out the Alternatives.** Choice A requires low dose to be significant for both endpoints; however, the TST p-value for Group A is 0.08, which fails the threshold, so A is incorrect. Choice C requires both doses to achieve significance on SOL only, but Group B also achieves significance on TST, making "SOL only" an incomplete characterization for the high dose. Choice D requires both doses to be significant on both endpoints; again, Group A fails on TST, eliminating D. Only choice B — high dose for both SOL and TST — is fully supported: both p-values for Group B (< 0.001 and 0.002) satisfy the p < 0.05 criterion, while Group A's TST result does not.

The correct answer is B.
**related_reading:** reading-di-05-multi-source-reasoning

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
**fastest_path:** Check all three criteria dose by dose; the high dose has significant SOL, +1.7 hours TST, and 14.6% dropout versus a 15.8% cap.
**explanation:** Low dose meets the primary-endpoint test because p = 0.03, but its TST gain is only 0.9 hour, below the required 1.0 hour. High dose has p < 0.001, gains 1.7 hours of TST, and has a 14.6% dropout rate. Twice the placebo dropout rate is 2 x 7.9% = 15.8%, so 14.6% is within the limit. Only the high dose satisfies all three criteria, so B is correct.
**common_trap:** Stopping after statistical significance and failing to test clinical improvement and dropout for the same dose.
**takeaway:** For conjunctive clinical criteria, evaluate every requirement on one dose rather than mixing evidence across groups.
**related_reading:** reading-di-05-multi-source-reasoning

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
**explanation:** The relevant data reside entirely in Tab 3 (Adverse Events Report). The question asks for the greatest absolute percentage-point difference between Group B (25 mg, high dose) and Group C (Placebo). For each adverse event, the difference D is defined as D = (Group B rate) - (Group C rate), expressed in percentage points.

Applying this definition to each event listed:

- Morning drowsiness: D = 24.4 - 5.7 = **18.7 pp**
- Headache: D = 9.8 - 7.9 = **1.9 pp**
- Nausea: D = 7.3 - 4.5 = **2.8 pp**
- Dizziness: D = 12.2 - 3.4 = **8.8 pp**

Ranking the four values in descending order: 18.7 > 8.8 > 2.8 > 1.9. Morning drowsiness produces the largest absolute difference by a wide margin. One might consider dizziness a tempting alternative because its Group B rate of 12.2% appears prominently elevated relative to placebo's 3.4%; however, the resulting gap of 8.8 pp is less than half of the 18.7 pp gap observed for morning drowsiness. Headache and nausea are ruled out immediately, as their differences (1.9 pp and 2.8 pp, respectively) are the two smallest values in the set.

The correct answer is A.
**related_reading:** reading-di-05-multi-source-reasoning

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
**explanation:** Two separate threshold conditions must both be satisfied for answer choice A to hold. Let P denote the proposed Public Safety allocation and I denote the proposed Infrastructure allocation. Torres's request requires P >= 32% of the total proposed budget. Park's request requires I >= $8 million. Each condition is evaluated independently using data from Tab 2.

From Tab 2, the total proposed budget is $48.00 million and the proposed Public Safety allocation is $15.84 million. The percentage represented by Public Safety is 15.84 / 48.00 = 0.33 = 33.0%, a figure Tab 2 confirms directly in the "% of Proposed Budget" column. Since 33.0% > 32%, the proposed budget satisfies Torres's minimum threshold. The current-year figure of $14.20 million is irrelevant because the question concerns the proposed budget, not the current one.

From Tab 2, the proposed Infrastructure allocation is $7.68 million. Park's stated minimum is $8 million. Since 7.68 < 8.00, the proposed allocation falls short by $0.32 million, and the condition I >= $8.00 million is not met. Tab 3 shows that Infrastructure budgets have been declining for four consecutive years (from $8.10 million in FY-4 to $6.34 million currently), which is precisely the context motivating Park's concern, but those historical figures do not alter the proposed allocation of $7.68 million stated in Tab 2. The City Manager's note in Tab 1 that grants cover $3.2 million of Education spending is irrelevant to either threshold test because that figure applies to Education, not Infrastructure or Public Safety.

Torres's request is satisfied (33.0% >= 32%); Park's request is not satisfied ($7.68 million < $8.00 million). The proposed budget therefore satisfies Torres's request but not Park's.

The correct answer is B.
**related_reading:** reading-di-05-multi-source-reasoning

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
**fastest_path:** Subtract the two current-year totals: $45.28M - $44.36M = $0.92M, then find the option that accounts for exactly that gap.
**explanation:** The meeting minutes give a current operating budget of $45.28 million, while the departmental table totals $44.36 million. The unexplained difference is $0.92 million. If the listed departmental figures are correct, the table must omit a department or category worth that amount, so A fits exactly. The 6% calculation concerns the proposed $48 million total, debt service is already listed once, and the $3.2 million in grants is explicitly outside the operating-budget figures.
**common_trap:** Using the grant figure because it appears in the sources without checking whether it matches the $0.92 million discrepancy.
**takeaway:** When two source totals conflict, calculate the exact gap first and test each explanation against both amount and scope.
**related_reading:** reading-di-05-multi-source-reasoning

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
**fastest_path:** Add the five deferred-project amounts, then compare the sum with the +$1.34M proposed change in Tab 2.
**explanation:** Deferred projects total $0.15M + $0.60M + $0.60M + $0.46M + $0.00M = $1.81M. Tab 2 shows proposed Infrastructure spending rising from $6.34M to $7.68M, an increase of $1.34M. Because $1.81M exceeds $1.34M by $0.47M, A is correct.
**common_trap:** Using only the largest annual deferral instead of summing the full five-year Deferred Projects column.
**takeaway:** For cumulative-versus-current comparisons, total the historical flow first and compare it with the stated one-year change.
**related_reading:** reading-di-05-multi-source-reasoning

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
**explanation:** This question draws entirely on Tab 1 (Market Research Summary), which reports the results of a concept test conducted among 1,200 target consumers across four metro markets.

Tab 1 presents the appeal drivers in explicit ranked order: "The strongest appeal drivers were (in order): 'clean ingredients,' 'afternoon energy without jitters,' and 'taste.'" Immediately following, the tab states: "The weakest driver was 'status/image.'"

No arithmetic is required. The passage enumerates three strongest drivers — clean ingredients (rank 1), afternoon energy without jitters (rank 2), and taste (rank 3) — and names a single weakest driver: status/image. Answer choices A, B, and C correspond precisely to those three strongest drivers and are therefore ruled out. Answer choice D, status/image, matches the passage's explicit identification of the weakest driver.

The correct answer is D.
**related_reading:** reading-di-05-multi-source-reasoning

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
**explanation:** Gross margin is defined as revenue minus cost of goods sold, expressed as a percentage of revenue. Formally, gross margin = (R - C) / R × 100%, where R denotes revenue and C denotes cost of goods sold.

The relevant data reside entirely in Tab 2 (Budget and Financial Projections). For Year 3, the table reports:

- Projected Revenue: $32.0M
- Cost of Goods Sold: $16.0M

Applying the definition:

Gross profit = R - C = 32.0 - 16.0 = 16.0 ($M)

Gross margin = 16.0 / 32.0 = 0.50 = 50.0%

It is worth ruling out the adjacent answer choices. Answer choice B (45.0%) would require COGS of 32.0 × 0.55 = $17.6M, which does not match the table. Answer choice D (55.0%) would require COGS of 32.0 × 0.45 = $14.4M, also inconsistent with the stated figure. Answer choice A (32.5%) would require gross profit of approximately $10.4M, implying COGS of roughly $21.6M — a figure that appears nowhere in the Year 3 row or any other row of the table.

None of the other tabs contribute figures needed for this computation. Tab 1 (Market Research) and Tab 3 (Competitive Landscape) contain pricing and market-share data, but gross margin is a function of internal cost structure, which Tab 2 alone supplies.

The correct answer is C.
**related_reading:** reading-di-05-multi-source-reasoning

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
**fastest_path:** Compare North Star with its closest positioning match: Ember & Root targets premium adaptogens at $3.99 versus North Star's $3.49.
**explanation:** B most directly supports the claim that $3.49 is too low. Tab 3 identifies Ember & Root as the closest direct competitor and places it in the premium adaptogen segment at $3.99. North Star targets the same premium-adaptogen space but is priced $0.50 lower, which can undercut its intended positioning. A explains why a price above $3.99 may be risky, not why $3.49 is too low. BrightKick is a mass-market product, and slowing category growth does not establish the appropriate price.
**common_trap:** Comparing North Star with the category-share leader even though that product has a different mass-market position.
**takeaway:** Pricing evidence is strongest when the comparator matches the product's target segment and positioning.
**related_reading:** reading-di-05-multi-source-reasoning

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
**explanation:** Utilization is defined in the Executive Briefing (Tab 1) as used pallet positions divided by total pallet capacity, expressed as a percentage. The question asks which single warehouse, as reported in Tab 2, carries the lowest value of that ratio.

Tab 2 lists the current utilization for each of the four warehouses:

- Columbus: 68%
- Indianapolis: 64%
- St. Louis: 55%
- Milwaukee: 57%

Ranking these four figures in ascending order gives 55% < 57% < 64% < 68%. St. Louis, at 55%, is strictly lower than every other site. Milwaukee at 57% is the second-lowest and may attract attention because it also falls below 60%, but 57% > 55%, so it does not hold the minimum.

Indianapolis at 64% and Columbus at 68% are both above 60% and are therefore not candidates for the lowest position.

The correct answer is C.
**related_reading:** reading-di-05-multi-source-reasoning

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
**explanation:** The relevant source is Tab 3, which provides projected annual operating costs for each two-warehouse scenario, combined with the baseline total cost stated in Tab 1 and confirmed by the column total in Tab 2.

Net annual operating cost savings is defined as the difference between the current total annual operating cost and the projected annual operating cost under the proposed scenario, before any one-time transition costs. Letting the current total cost be C_current and the projected cost under a given scenario be C_scenario, the formula is: Net annual savings = C_current minus C_scenario.

From Tab 1, confirmed by the column total in Tab 2, the current combined annual operating cost across all four warehouses is $28.4 million. From Tab 3, Scenario 2 retains Columbus and St. Louis and carries a projected annual operating cost of $16.5 million. Tab 3 explicitly states that all projected costs include incremental freight and staffing needed to serve reassigned customers, so no further adjustment is required for rerouting expenses.

Computing the savings: 28.4 minus 16.5 equals 11.9 million dollars.

The remaining choices do not arise from applying the correct formula to Scenario 2. Choice B ($12.4M) does not correspond to any scenario's arithmetic; Scenario 1 yields 28.4 minus 16.1 = 12.3, which is neither $12.4M nor the result for Scenario 2. Choice C ($13.0M) matches Scenario 3 (Columbus + Milwaukee), where 28.4 minus 15.4 = 13.0, but Scenario 3 is not the scenario the question asks about. Choice D ($15.2M) is not derivable from any row in Tab 3 under the stated formula and appears to conflate projected cost with savings.

The question asks for net annual operating cost savings before the one-time transition cost. The $6.8 million transition cost noted in Tab 1 is therefore excluded from this calculation, consistent with the question's framing.

The correct answer is A.
**related_reading:** reading-di-05-multi-source-reasoning

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
**fastest_path:** Annual savings exceed $4M in every row, so screen only utilization at 90% and delivery increase at 0.5 day.
**explanation:** Savings equal $28.4M minus projected cost, so even the smallest saving is $11.9M and every scenario clears the $4M requirement. Scenario 1 has 88% utilization and a 0.3-day increase; Scenario 2 has 85% and 0.4 day, so both pass. Scenario 3 fails both limits at 92% and 0.6 day. Scenario 4 passes utilization at 84% but fails delivery at 0.7 day. Two scenarios satisfy all three constraints, so C is correct.
**common_trap:** Subtracting the one-time transition cost from annual savings even though the stated annual-cost figures exclude it and the constraint concerns net annual savings.
**takeaway:** Simplify a multi-constraint screen by identifying any condition that every option already satisfies.
**related_reading:** reading-di-05-multi-source-reasoning


---

## Set 6: Cedar Logistics Warehouse Shipping

### Tab 1: Internal Memo

**From:** Cedar Logistics Warehouse Operations
**To:** Regional Managers

Our e-commerce warehouse fulfills orders from three regions. The South region accounts for 35% of total weekly order volume; the Central region accounts for 25%; the remainder is the North region.

Last week we processed 12,000 total orders.

### Tab 2: Shipping Policy

- Standard shipping takes 3 business days on average.
- Express shipping takes 1 business day on average and costs $8 more per order than standard.
- Express shipping is available only for orders from the South region.

### Tab 3: Pricing (all-in, per order)

| Size   | Standard | Express |
|--------|----------|---------|
| Small  | $12      | $20     |
| Medium | $18      | $26     |
| Large  | $28      | $36     |

### Q16
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Cross-Tab Inference

Based on the information provided across all three tabs, which of the following statements must be true?

- A) For every order size, express shipping is more expensive than standard shipping.
- B) The North region accounts for less order volume than either the Central or the South region.
- C) A medium-sized order shipped via express costs more than a large-sized order shipped via standard.
- D) Most of the warehouse's orders are shipped via express service.
- E) Standard shipping is slower than express shipping for Central-region orders.

**answer:** A
**fastest_path:** Look for the statement stated directly across the pricing table: express is exactly $8 above standard for every size.
**explanation:** A must be true. The table gives standard/express prices of $12/$20, $18/$26, and $28/$36, so express costs $8 more for every size, matching the policy. North supplies the remaining 40% of orders, more than Central's 25% and South's 35%, so B is false. Medium express is $26 versus $28 for large standard, eliminating C. The express share is unknown, and express is unavailable to Central orders, eliminating D and E.
**common_trap:** Inferring how many orders use express when the sources give eligibility but no service-choice counts.
**takeaway:** A must-be-true answer must follow from stated values without adding an unstated usage assumption.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q17
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Volume Calculation

How many orders did the warehouse process from the North region last week?

- A) 3,000
- B) 3,500
- C) 4,200
- D) 4,800
- E) 5,000

**answer:** D
**explanation:** **Reasoning.** The key principle here is that the three regions together account for 100% of total weekly order volume. Tab 1 (Internal Memo) supplies all figures required; Tabs 2 and 3 govern shipping methods and pricing, which are not relevant to a pure volume count.

Let T = 12,000, the total orders processed last week.

Tab 1 states that the South region accounts for 35% of T and the Central region accounts for 25% of T. Because the three regions are exhaustive and mutually exclusive, the North region's share equals the remainder:

North percentage = 100% - 35% - 25% = 40%

Applying that percentage to the total:

North orders = 40/100 x 12,000 = 0.40 x 12,000 = 4,800

This result can be verified: South = 0.35 x 12,000 = 4,200; Central = 0.25 x 12,000 = 3,000; North = 4,800. Summing: 4,200 + 3,000 + 4,800 = 12,000, which matches T exactly.

Among the answer choices, 3,000 equals the Central region's volume, not the North's; 3,500 corresponds to no defined region; 4,200 is the South region's volume; and 5,000 exceeds the computed figure. None of those alternatives follow from the 40% remainder.

The correct answer is D.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q18
**difficulty:** Hard
**type:** Multi-Source Reasoning
**topic:** Weighted Average Pricing

Suppose all South-region orders last week were medium-sized, with 40% shipped via express and the remaining 60% via standard. What was the average shipping cost per South-region order?

- A) $18.00
- B) $20.80
- C) $21.20
- D) $23.60
- E) $26.00

**answer:** C
**explanation:** The governing principle is the weighted average: when a population is split into subgroups, the overall average equals the sum of each subgroup's share multiplied by its unit value.

Tab 1 states that the South region accounts for 35% of 12,000 total orders, giving 0.35 × 12,000 = 4,200 South-region orders. The absolute count is not required for the average calculation, but it confirms the South region is the only one eligible for express shipping (Tab 2) and that the scenario is internally consistent.

From Tab 3, the per-order shipping cost for medium-sized orders is $18 for standard and $26 for express. The $8 premium stated in Tab 2 is consistent: 26 − 18 = 8. No data beyond the South-region percentage from Tab 1, and no data from the North or Central rows, are needed here.

With 60% of South-region orders shipped via standard and 40% via express, the weighted average cost per order is:

Average = 0.60 × 18 + 0.40 × 26

Computing each term: 0.60 × 18 = 10.80 and 0.40 × 26 = 10.40, so the average = 10.80 + 10.40 = 21.20.

Choice A ($18.00) applies the standard price to all orders, ignoring the 40% shipped express. Choice E ($26.00) does the opposite, applying the express price to all orders. Choice B ($20.80) results from an arithmetic slip in which 0.40 × 26 is miscalculated as 10.00 rather than 10.40, yielding 10.80 + 10.00 = 20.80. Choice D ($23.60) follows from reversing the weights and mixing sizes: 0.60 × 26 + 0.40 × 20 = 15.60 + 8.00 = 23.60, which uses the correct express-medium price but substitutes the small-standard price ($20) for the medium-standard price ($18), while also flipping the proportions.

The weighted average of the two medium-size prices at shares 60/40 is $21.20.

The correct answer is C.
**related_reading:** reading-di-05-multi-source-reasoning


---

## Set 7: Northgate Equity Research — Q1 Earnings Preview

### Tab 1: Analyst Memo

**From:** Helen Marsh, Research Analyst
**To:** Portfolio Team
**Date:** March 10

Attached is my Q1 preview for the three specialty-retail companies in our coverage.

- **Lyton Apparel:** Q1 revenue estimate $680M (+8% year-over-year), operating margin 11%. Key risk: heavier-than-usual winter inventory markdowns.
- **MorningShade Cosmetics:** Q1 revenue estimate $420M (+17% year-over-year), operating margin 17%. Key risk: FX headwind from a stronger dollar is estimated to trim the revenue growth rate by 3 percentage points versus underlying constant-currency growth.
- **NorthCrest Outdoors:** Q1 revenue estimate $310M (+2% year-over-year), operating margin 9%. Key risk: reduced promotional spend may limit upside.

### Tab 2: Financial Model Summary

| Company         | Q1 Revenue ($M) | Q1 Operating Margin | Q1 Operating Profit ($M) |
|-----------------|-----------------|---------------------|--------------------------|
| Lyton Apparel   | 680             | 11.0%               | 74.8                     |
| MorningShade    | 420             | 17.0%               | 71.4                     |
| NorthCrest      | 310             |  9.0%               | 27.9                     |
| **Total**       | **1,410**       | —                   | **174.1**                |

### Tab 3: Historical Reference

Trailing four-quarter operating margin for each company:

- Lyton Apparel: 12.5%
- MorningShade: 18.0%
- NorthCrest: 10.0%

### Q19
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Cross-Tab Inference

Based on the information provided across all three tabs, which of the following must be true?

- A) MorningShade is projected to have higher Q1 operating profit than Lyton Apparel.
- B) The total projected Q1 operating profit across the three companies exceeds $180 million.
- C) Every company's projected Q1 operating margin is higher than its trailing four-quarter average.
- D) NorthCrest's Q1 revenue growth rate is the lowest of the three companies.
- E) The FX headwind is reducing MorningShade's Q1 revenue by more than $20 million.

**answer:** D
**fastest_path:** Compare the three stated growth rates: Lyton 8%, MorningShade 17%, NorthCrest 2%; the lowest is NorthCrest.
**explanation:** D must be true because NorthCrest's projected 2% revenue growth is below Lyton's 8% and MorningShade's 17%. A is false: MorningShade's projected operating profit is $71.4M versus Lyton's $74.8M. B is false because the total is $174.1M. C is false because every projected margin is below its trailing average. E cannot be established without the prior-year MorningShade revenue needed to convert the three-point growth headwind into dollars.
**common_trap:** Converting a percentage-point growth headwind into dollars without the prior-year revenue base.
**takeaway:** For must-be-true questions, verify direct comparisons first and reject calculations that need an unstated base value.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q20
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Revenue Increase Comparison

Which company is projected to have the largest year-over-year increase in Q1 revenue in absolute dollar terms?

- A) Lyton Apparel
- B) Cannot be determined from the information provided
- C) NorthCrest Outdoors
- D) Lyton Apparel and MorningShade are tied
- E) MorningShade Cosmetics

**answer:** E
**explanation:** The year-over-year absolute dollar increase in revenue equals current-period revenue minus prior-period revenue. Let r denote the Q1 revenue estimate and g denote the stated year-over-year growth rate for a given company. Because r represents the result after applying g to the prior-year base, the prior-year revenue equals r / (1 + g), and the absolute dollar increase equals r - r / (1 + g), which simplifies to r * g / (1 + g).

Tab 1 (Analyst Memo) supplies the growth rates; Tab 2 (Financial Model Summary) supplies the current Q1 revenue estimates. Tab 3 is not required for this calculation.

Lyton Apparel: r = 680, g = 0.08. Prior-year revenue = 680 / 1.08 = 629.63. Absolute increase = 680 - 629.63 = approximately $50.4M.

MorningShade Cosmetics: r = 420, g = 0.17. Prior-year revenue = 420 / 1.17 = 358.97. Absolute increase = 420 - 358.97 = approximately $61.0M.

NorthCrest Outdoors: r = 310, g = 0.02. Prior-year revenue = 310 / 1.02 = 303.92. Absolute increase = 310 - 303.92 = approximately $6.1M.

Ranking the three absolute increases: MorningShade $61.0M > Lyton $50.4M > NorthCrest $6.1M.

Choice A (Lyton Apparel) is tempting because Lyton carries the largest revenue base and a solid 8% growth rate, but the narrower percentage gain applied to $680M yields only approximately $50.4M, which falls short of MorningShade's approximately $61.0M. Choice D (a tie between Lyton and MorningShade) can be ruled out because the two figures differ by roughly $10.6M. Choice B is incorrect because both the current estimates and the growth rates are explicitly provided, making the calculation fully determinable.

The absolute increase for MorningShade Cosmetics, at approximately $61.0M, exceeds that of every other company in the coverage set.

The correct answer is E.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q21
**difficulty:** Hard
**type:** Multi-Source Reasoning
**topic:** Scenario Forecasting

Suppose the FX headwind disappears entirely during Q1, so MorningShade grows at its underlying constant-currency rate of 20% year-over-year rather than the reported 17%. Assuming every company's operating margin is held constant at the projected level in Tab 2, approximately what will the three-company total Q1 operating profit be?

- A) $172M
- B) $174M
- C) $180M
- D) $178M
- E) $176M

**answer:** E
**fastest_path:** Recover MorningShade's prior revenue as 420/1.17, grow it by 20%, then apply the unchanged 17% margin.
**explanation:** MorningShade's $420M estimate represents 117% of prior-year revenue, so the base is $420M/1.17 = about $359.0M. At 20% growth, revenue would be about $430.8M, or $10.8M above the estimate. At a 17% margin, that adds about $1.8M of operating profit. The original three-company total is $174.1M, so the revised total is about $175.9M, closest to $176M. Thus E is correct.
**common_trap:** Taking 3% of $420M; the three-point change applies to the prior-year revenue growth base, not directly to projected revenue.
**takeaway:** When a forecast growth rate changes, recover the original base before recomputing revenue and downstream profit.
**related_reading:** reading-di-05-multi-source-reasoning


---

## Set 8: PalliMed Phase III Trial Overview

### Tab 1: Trial Summary

A Phase III clinical trial evaluated PalliMed-X (a new investigational drug) against a standard-of-care control for patients with moderate chronic pain. 600 patients were enrolled: 300 received PalliMed-X and 300 received the control. The primary endpoint was the percentage of patients reporting significant pain reduction (≥ 50% decrease from baseline) at week 12.

Key result: 182 of 300 patients (61%) in the PalliMed-X group met the primary endpoint, versus 141 of 300 patients (47%) in the control group — a difference of 14 percentage points.

### Tab 2: Baseline Characteristics

| Characteristic              | PalliMed-X (n=300) | Control (n=300) |
|-----------------------------|--------------------|-----------------|
| Mean age (years)            | 58.2               | 57.8            |
| Female (%)                  | 52%                | 55%             |
| Mean baseline pain (0-10)   | 6.8                | 6.7             |
| Prior opioid use (%)        | 26%                | 23%             |

### Tab 3: Adverse Events

| Event                              | PalliMed-X | Control   |
|------------------------------------|------------|-----------|
| Any adverse event                  | 189 (63%)  | 165 (55%) |
| Serious adverse event              | 21 (7%)    | 15 (5%)   |
| Discontinued due to adverse event  | 36 (12%)   | 24 (8%)   |
| Nausea                             | 48 (16%)   | 27 (9%)   |
| Headache                           | 39 (13%)   | 33 (11%)  |

### Q22
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Cross-Tab Inference

Based on the data presented in the three tabs, which of the following must be true?

- A) PalliMed-X is more effective than the control in every subgroup of patients.
- B) The difference in primary-endpoint achievement between the two groups is statistically significant.
- C) The control group had a higher rate of prior opioid use than the PalliMed-X group.
- D) PalliMed-X causes nausea in the majority of patients who receive it.
- E) More patients in the PalliMed-X group than in the control group achieved the primary endpoint.

**answer:** E
**fastest_path:** Use the endpoint counts directly: 182 PalliMed-X patients achieved it versus 141 control patients.
**explanation:** E must be true because Tab 1 explicitly reports 182 endpoint successes for PalliMed-X and 141 for control. No subgroup results are provided, so A cannot be established. The sources give no p-value or significance threshold for the 14-point difference, so B is not guaranteed. Prior opioid use is 26% for PalliMed-X versus 23% for control, reversing C. Nausea affected 16%, not a majority, eliminating D.
**common_trap:** Treating a visible percentage difference as statistically significant without a reported test or enough information to derive one.
**takeaway:** For must-be-true questions, prefer a direct reported comparison and reject claims requiring missing statistical or subgroup evidence.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q23
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Rate Comparison

Approximately what was the percentage-point difference between the two groups in the rate of discontinuation due to adverse events?

- A) 2
- B) 4
- C) 6
- D) 8
- E) 12

**answer:** B
**explanation:** **Identifying the relevant source.** The question asks for the discontinuation rate due to adverse events in each group. This figure is reported in Tab 3 (Adverse Events), not Tab 1 or Tab 2, so Tab 3 is the governing source.

**Reading the raw counts.** From Tab 3:

- PalliMed-X: 36 of 300 patients discontinued due to an adverse event.
- Control: 24 of 300 patients discontinued due to an adverse event.

**Computing the rates.** Let r_P denote the discontinuation rate for PalliMed-X and r_C denote the rate for the control group.

r_P = 36/300 = 0.12, or 12%.

r_C = 24/300 = 0.08, or 8%.

**Computing the percentage-point difference.** The percentage-point difference is defined as the absolute difference between two percentage rates expressed in the same units, not as a ratio.

Difference = r_P - r_C = 12% - 8% = 4 percentage points.

**Ruling out the tempting alternatives.** Choice E (12) corresponds to the PalliMed-X discontinuation rate in isolation, which the question does not ask for. Choice C (6) and Choice D (8) would arise from arithmetic errors such as subtracting counts rather than rates or misreading one row of the table. Choice A (2) would result from using the headache row (13% - 11% = 2), which is the wrong row. Only the discontinuation row yields a difference of 4 percentage points.

The correct answer is B.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q24
**difficulty:** Hard
**type:** Multi-Source Reasoning
**topic:** Net Benefit Projection

Assume that the differences in primary-endpoint achievement and discontinuation rates observed in the trial would persist in a broader population. For every 100 patients treated with PalliMed-X instead of the control, approximately how many additional patients would be expected to achieve the primary endpoint, and how many additional patients would be expected to discontinue due to adverse events?

- A) 10 additional successes, 2 additional discontinuations
- B) 20 additional successes, 10 additional discontinuations
- C) 14 additional successes, 7 additional discontinuations
- D) 7 additional successes, 4 additional discontinuations
- E) 14 additional successes, 4 additional discontinuations

**answer:** E
**explanation:** The relevant data come from two tabs. Tab 1 supplies the primary-endpoint rates; Tab 3 supplies the discontinuation-due-to-adverse-event rates.

For the primary endpoint, the PalliMed-X group had 182 of 300 patients achieve the endpoint, giving a rate of approximately 61%. The control group had 141 of 300, giving a rate of exactly 47%. The absolute difference is 61% minus 47%, which equals 14 percentage points. Applied to a population of 100 patients, this translates to 14 additional patients expected to achieve the primary endpoint under PalliMed-X relative to the control. This rules out choices A (10 additional successes), D (7 additional successes), and B (20 additional successes), leaving only E and C as candidates.

For discontinuations due to adverse events, Tab 3 shows that 36 of 300 patients in the PalliMed-X group discontinued due to an adverse event, a rate of 12%. In the control group, 24 of 300 discontinued, a rate of 8%. The absolute difference is 12% minus 8%, which equals 4 percentage points. Applied to 100 patients, this yields 4 additional patients expected to discontinue. This rules out choice C, which overstates the discontinuation difference as 7 percentage points. The value 7% appears in Tab 3 as the serious adverse event rate for PalliMed-X alone, not as an incremental discontinuation difference, making C a plausible but incorrect distractor. Choice B overstates both figures and was already eliminated.

The conclusion is that for every 100 patients treated with PalliMed-X instead of the control, approximately 14 additional patients are expected to achieve meaningful pain relief and approximately 4 additional patients are expected to discontinue due to adverse events.

The correct answer is E.
**related_reading:** reading-di-05-multi-source-reasoning


---

## Set 9: Stellar Aerospace — FAA Regulatory Update

### Tab 1: Regulatory Summary

The Federal Aviation Administration (FAA) has proposed new fuel-efficiency rules for commercial airliners newly sold in the US market starting in 2027. The proposed standard requires fuel burn per passenger-mile at least 12% below the current industry average, as measured under standard operational conditions. The current industry average fuel burn is 2.6 L per 100 passenger-kilometers.

### Tab 2: Stellar Aerospace Fleet Models

| Aircraft Model  | Fuel Burn per PAX-km (L/100km) | Year First Introduced |
|-----------------|---------------------------------|-----------------------|
| SA-200          | 3.0                             | 2015                  |
| SA-300          | 2.6                             | 2019                  |
| SA-400          | 2.2                             | 2023                  |
| SA-500 (in dev) | 1.9                             | 2026 (planned)        |

### Tab 3: Commercial Impact Analysis

- The SA-200 currently represents approximately 30% of Stellar's US fleet sales.
- The SA-300 represents approximately 45% of Stellar's US fleet sales.
- The SA-400 represents approximately 25% of Stellar's US fleet sales.
- The SA-500 is not yet available for commercial sale.
- Retrofitting an existing SA-200 to meet the proposed standard is estimated to cost approximately $1.2 million per aircraft.

### Q25
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Cross-Tab — Regulatory Fit

Based on the three tabs, which of Stellar's aircraft models, if newly sold in the US in 2027, would meet the FAA's proposed fuel-efficiency standard?

- A) SA-200 only
- B) SA-300 only
- C) SA-300 and SA-400 only
- D) SA-400 and SA-500 only
- E) SA-300, SA-400, and SA-500

**answer:** D
**fastest_path:** Compute the maximum allowed burn: 2.6 x 88% = 2.288; keep models at or below that value.
**explanation:** The standard requires fuel burn at least 12% below 2.6, so the limit is 2.6 x 0.88 = 2.288 L per 100 passenger-kilometers. SA-200 at 3.0 and SA-300 at 2.6 fail. SA-400 at 2.2 and SA-500 at 1.9 pass. Therefore exactly SA-400 and SA-500 meet the proposed standard, making D correct.
**common_trap:** Subtracting 0.12 from 2.6 instead of reducing the industry average by 12%.
**takeaway:** Translate 'percent below' into a multiplier before comparing each model with the threshold.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q26
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Volume Share

Based on current US fleet-sales mix in Tab 3, approximately what percentage of Stellar's US sales would *fail* to meet the proposed standard without retrofit or redesign?

- A) 25%
- B) 30%
- C) 45%
- D) 55%
- E) 75%

**answer:** E
**explanation:** The FAA proposed standard requires that any newly sold aircraft achieve a fuel burn at least 12% below the current industry average. The compliance ceiling must first be computed from Tab 1, then each commercially available model in Tab 2 must be tested against that ceiling, and finally the failing shares from Tab 3 must be summed.

Tab 1 states the current industry average fuel burn is 2.6 L per 100 passenger-kilometers. A reduction of 12% yields the maximum permissible fuel burn:

2.6 × (1 − 0.12) = 2.6 × 0.88 = 2.288 L/100 passenger-km.

Any model burning more than 2.288 L/100 passenger-km fails the proposed standard.

Tab 3 lists three models as contributing to current US fleet sales; the SA-500 is explicitly noted as not yet available for commercial sale and therefore contributes 0% to the current sales mix. Testing the three available models against the 2.288 ceiling:

SA-200: 3.0 L/100 km. Because 3.0 > 2.288, this model fails.
SA-300: 2.6 L/100 km. Because 2.6 > 2.288, this model also fails.
SA-400: 2.2 L/100 km. Because 2.2 < 2.288, this model passes.

Summing the failing shares from Tab 3: 30% (SA-200) + 45% (SA-300) = 75%.

A tempting error is to count only the SA-200 (30%, choice B) or only the SA-300 (45%, choice C), overlooking that both models exceed the 2.288 L/100 passenger-km ceiling. Another temptation is to answer with the passing share (25%, choice A) rather than the failing share. Choice D (55%) has no arithmetic basis in the data. Because both the SA-200 and the SA-300 fall above the compliance threshold, 75% of current US sales — the combined share of those two models — would fail the proposed standard without retrofit or redesign.

The correct answer is E.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q27
**difficulty:** Hard
**type:** Multi-Source Reasoning
**topic:** Cost Projection

Suppose Stellar decides to retrofit all existing SA-200 aircraft in the US fleet to meet the standard. If 150 SA-200 aircraft are in the US fleet, what is the approximate total cost of the retrofit program?

- A) $120M
- B) $150M
- C) $300M
- D) $240M
- E) $180M

**answer:** E
**explanation:** **Governing principle.** A total-cost calculation takes the form Total Cost = (Cost per Unit) x (Number of Units). The relevant figures are drawn from two sources: Tab 3 supplies the per-aircraft retrofit cost, and the question stem supplies the fleet count.

**Identifying the data.** Tab 3 states that retrofitting one SA-200 to meet the proposed FAA standard costs approximately $1.2 million per aircraft. The question stem specifies that 150 SA-200 aircraft are currently in the US fleet. No data from Tab 1 or Tab 2 is required for this arithmetic step; those tabs establish the regulatory threshold and fleet fuel-burn figures, which are background context here.

**Computation.** Let n = 150 (number of SA-200 aircraft) and c = 1,200,000 (retrofit cost per aircraft, in dollars). The total program cost T is

T = n x c = 150 x 1,200,000

Breaking this down: 150 x 1,200,000 = 150 x 1.2 x 10^6 = 180 x 10^6 = 180,000,000.

Therefore T = $180,000,000, or approximately $180 million.

**Ruling out tempting alternatives.** A result of $120M would require only 100 aircraft (100 x 1,200,000 = 120,000,000), not 150. A result of $150M would require a per-aircraft cost of exactly $1.0 million (150 x 1,000,000), not $1.2 million. A result of $240M would require 200 aircraft, and $300M would require 250 aircraft — neither matches the 150-aircraft figure given in the stem. Only 150 x 1,200,000 = 180,000,000 is consistent with both data points simultaneously.

The correct answer is E.
**related_reading:** reading-di-05-multi-source-reasoning


---

## Set 10: Orion Capital — 2024 Portfolio Review

### Tab 1: Portfolio Memo

Orion Capital's 2024 portfolio was distributed across three asset classes: Equities (60% weight), Fixed Income (30%), and Alternatives (10%). Orion's benchmark index returned 11.2% in 2024, and Orion's portfolio returned 12.9% in 2024.

### Tab 2: Asset Class Performance

| Asset Class    | Portfolio Weight | Orion's Return | Benchmark Return |
|----------------|------------------|----------------|------------------|
| Equities       | 60%              | 16%            | 13%              |
| Fixed Income   | 30%              | 7%             | 8%               |
| Alternatives   | 10%              | 12%            | 10%              |

### Tab 3: Attribution Framework

Orion uses the following simple performance-attribution framework:

- A portfolio's total return is the weighted sum across asset classes: (weight × asset-class return), summed.
- Excess return equals Orion's total return minus the benchmark's total return.
- Each asset class's *contribution* to excess return equals (weight) × (Orion's return in that class − Benchmark's return in that class).

### Q28
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Cross-Tab Must Be True

Based on the three tabs, which of the following must be true?

- A) Orion outperformed its benchmark in every asset class.
- B) Orion's 2024 total portfolio return was 11%.
- C) Fixed Income contributed positively to Orion's excess return.
- D) Equities contributed positively to Orion's excess return.
- E) Orion weighted its three asset classes approximately equally.

**answer:** D
**explanation:** Tab 3 defines each asset class's contribution to excess return as (weight) × (Orion's return in that class minus the benchmark's return in that class). Applying this formula to the figures in Tab 2 gives the following results.

For Equities: 0.60 × (16% − 13%) = 0.60 × 3 = +1.8 percentage points. For Fixed Income: 0.30 × (7% − 8%) = 0.30 × (−1) = −0.3 percentage points. For Alternatives: 0.10 × (12% − 10%) = 0.10 × 2 = +0.2 percentage points. Total excess return = 1.8 + (−0.3) + 0.2 = +1.7 percentage points.

Tab 3 also states that the total portfolio return equals the weighted sum of asset-class returns: 0.60 × 16 + 0.30 × 7 + 0.10 × 12 = 9.6 + 2.1 + 1.2 = 12.9%. The same formula applied to benchmark figures gives 0.60 × 13 + 0.30 × 8 + 0.10 × 10 = 7.8 + 2.4 + 1.0 = 11.2%. Both values match Tab 1 exactly, confirming that the data across all three tabs are internally consistent.

Turning to the choices: Choice A is false because Tab 2 shows Fixed Income returned 7% for Orion against 8% for the benchmark, meaning Orion underperformed in that class. Choice C is false because the Fixed Income contribution is −0.3 percentage points, a negative value. Choice B is false because Tab 1 explicitly states Orion's total return was 12.9%, confirmed by the weighted computation above, not 11%. Choice E is false because Tab 1 and Tab 2 both state weights of 60%, 30%, and 10%, which are materially unequal. Choice D must be true: the Equities contribution equals +1.8 percentage points, which is strictly positive, following directly and necessarily from the Tab 2 figures and the Tab 3 formula.

The correct answer is D.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q29
**difficulty:** Hard
**type:** Multi-Source Reasoning
**topic:** Single-Asset Contribution

What was Alternatives' approximate contribution to Orion's excess return in 2024?

- A) 0.1 percentage points
- B) 2.0 percentage points
- C) 0.5 percentage points
- D) 1.0 percentage points
- E) 0.2 percentage points

**answer:** E
**explanation:** **Relevant source.** Tab 3 defines the attribution framework, and Tab 2 supplies the required figures. Tab 1 is not needed for this calculation, though its reported total returns serve as a useful consistency check.

**Governing definition.** Under the framework in Tab 3, each asset class's contribution to excess return equals

(weight) x (Orion's return in that class - Benchmark's return in that class).

Let w_A = 0.10 (the portfolio weight of Alternatives), r_A = 12% (Orion's Alternatives return), and b_A = 10% (the benchmark's Alternatives return). Substituting:

Contribution_Alternatives = w_A x (r_A - b_A) = 0.10 x (12 - 10) = 0.10 x 2 = 0.20 percentage points.

The result is 0.2 percentage points, which corresponds to choice E.

**Ruling out the other choices.** Choice A (0.1 pp) would require either a weight of 5% or a return differential of only 1 percentage point; neither matches the data. Choice C (0.5 pp) would require a differential of 5 percentage points or a weight of 25%, both inconsistent with Tab 2. Choice D (1.0 pp) and choice B (2.0 pp) are far too large for a 10%-weighted asset class outperforming by 2 percentage points.

**Cross-check via total returns.** One can verify the full attribution. Let contributions from Equities, Fixed Income, and Alternatives be computed as:

- Equities: 0.60 x (16 - 13) = 0.60 x 3 = 1.80 pp
- Fixed Income: 0.30 x (7 - 8) = 0.30 x (-1) = -0.30 pp
- Alternatives: 0.10 x (12 - 10) = 0.10 x 2 = 0.20 pp

Summing: 1.80 + (-0.30) + 0.20 = 1.70 pp total excess return. Tab 1 reports Orion's total return as 12.9% and the benchmark as 11.2%, a difference of 12.9 - 11.2 = 1.7 percentage points. The attribution sum matches exactly, confirming the arithmetic is correct and that Alternatives' isolated contribution is 0.20 pp.

The correct answer is E.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q30
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Verifying Total Excess Return

Using the attribution framework, what was Orion's approximate total excess return (Orion total minus benchmark total) in 2024?

- A) 1.0 percentage points
- B) 1.5 percentage points
- C) 2.0 percentage points
- D) 1.7 percentage points
- E) 2.5 percentage points

**answer:** D
**explanation:** **Governing principle.** Under the attribution framework defined in Tab 3, a portfolio's total return equals the weighted sum of asset-class returns: total return = sum of (weight × asset-class return). Excess return then equals Orion's total return minus the benchmark's total return. These two definitions are sufficient to answer the question.

**Computing Orion's total return.** Using the weights and Orion returns from Tab 2:

Orion total = (0.60 × 16) + (0.30 × 7) + (0.10 × 12)
            = 9.6 + 2.1 + 1.2
            = 12.9%

This figure matches the 12.9% stated in Tab 1, confirming internal consistency.

**Computing the benchmark total return.** Applying the same formula to the benchmark returns in Tab 2:

Benchmark total = (0.60 × 13) + (0.30 × 8) + (0.10 × 10)
                = 7.8 + 2.4 + 1.0
                = 11.2%

Again, this matches the 11.2% benchmark return stated in Tab 1.

**Excess return.** By the framework's definition:

Excess return = 12.9 - 11.2 = 1.7 percentage points

**Verification via per-class contribution.** Tab 3 also defines each asset class's contribution to excess return as (weight) × (Orion return − Benchmark return). Summing across classes provides an independent check:

- Equities: 0.60 × (16 - 13) = 0.60 × 3 = 1.8 percentage points
- Fixed Income: 0.30 × (7 - 8) = 0.30 × (-1) = -0.3 percentage points
- Alternatives: 0.10 × (12 - 10) = 0.10 × 2 = 0.2 percentage points

Total attributed excess = 1.8 + (-0.3) + 0.2 = 1.7 percentage points

Both methods yield the same figure. Choice A (1.0) and choice B (1.5) are too small; a test-taker might arrive at 1.5 by incorrectly omitting the Alternatives class or by applying weights inconsistently. Choice C (2.0) could result from rounding 12.9 up to 13.0 before subtracting, and choice E (2.5) likely reflects an error in which the Fixed Income underperformance is ignored and only the two outperforming classes are summed. None of those paths follows the framework correctly.

The correct answer is D.
**related_reading:** reading-di-05-multi-source-reasoning


---

## Set 11: TerraGrow — Marketing Campaign Evaluation

### Tab 1: Executive Memo

TerraGrow, a mid-sized agricultural supply company, conducted a six-month pilot marketing campaign on digital advertising platforms to evaluate three distinct creative variants (A, B, and C). The goal was to identify the variant that generates the highest lifetime customer value (LCV) per advertising dollar spent. Each variant was shown 5,000 impressions. The team tracked conversions, revenue per converted customer, and total advertising spend.

### Tab 2: Pilot Campaign Results

| Variant | Impressions | Conversions | Avg Revenue per Customer ($) | Ad Spend ($K) |
|---------|-------------|-------------|-------------------------------|---------------|
| A       | 5,000       | 100         | 400                           | 8.0           |
| B       | 5,000       | 150         | 250                           | 15.0          |
| C       | 5,000       | 75          | 500                           | 12.5          |

### Tab 3: Attribution Framework

For each variant:

- Conversion rate = (Conversions) / (Impressions).
- Total revenue = (Conversions) × (Avg revenue per customer).
- Efficiency = (Total revenue) / (Ad spend).

The team will rank variants by efficiency for the formal recommendation.

### Q31
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Reading the Table — Highest Avg Revenue

Which variant has the highest Average Revenue per converted Customer?

- A) A
- B) B
- C) Cannot be determined
- D) A and C are tied
- E) C

**answer:** E
**explanation:** Tab 2 (Pilot Campaign Results) is the operative source; it presents the "Avg Revenue per Customer ($)" column directly. The recorded values are $400 for Variant A, $250 for Variant B, and $500 for Variant C. No computation is required. Ranking the three figures in descending order gives 500 > 400 > 250, which corresponds to C > A > B. Choice D (A and C are tied) would require 400 to equal 500, which is false, so D is eliminated. Choice C (Cannot be determined) would apply only if the necessary data were absent or ambiguous; the column is fully populated with unambiguous figures, so C is eliminated. Choice B is the weakest of the three at $250 and is eliminated on inspection. Because 500 > 400 > 250, Variant C carries the highest Average Revenue per converted Customer among the three variants tested.

The correct answer is E.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q32
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Conversion-Rate Comparison

Which variant has the highest conversion rate?

- A) A
- B) B
- C) C
- D) They are approximately equal
- E) Cannot be determined

**answer:** B
**explanation:** Tab 3 (Attribution Framework) specifies that conversion rate = Conversions / Impressions. Because all three variants were each served exactly 5,000 impressions (Tab 2: Pilot Campaign Results), the denominator is identical across variants, and the ranking of conversion rates reduces to a direct comparison of raw conversion counts.

Let I = 5,000 (impressions, common to all variants).

Variant A: conversion rate = 100 / 5,000 = 0.02, or 2.0%.
Variant B: conversion rate = 150 / 5,000 = 0.03, or 3.0%.
Variant C: conversion rate = 75 / 5,000 = 0.015, or 1.5%.

Comparing the three results, 0.03 > 0.02 > 0.015, so Variant B has the highest conversion rate. The margin over Variant A is 0.03 - 0.02 = 0.01, a full percentage point, so the result is not close; answer choice D (approximately equal) is not supportable.

Variant A's rate of 2.0% is second highest, not first, so choice A is incorrect. Variant C, with only 75 conversions, produces the lowest rate at 1.5%, eliminating choice C. All necessary data — impressions and conversions for each variant — appear explicitly in Tab 2, so choice E (cannot be determined) does not apply.

The correct answer is B.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q33
**difficulty:** Hard
**type:** Multi-Source Reasoning
**topic:** Efficiency — Revenue per Ad Dollar

Based on the Efficiency metric defined in Tab 3, which variant delivered the highest total revenue per advertising dollar spent?

- A) A
- B) B
- C) C
- D) They are approximately equal
- E) Cannot be determined

**answer:** A
**explanation:** **Governing definition.** Tab 3 defines efficiency as total revenue divided by ad spend, where total revenue equals conversions multiplied by average revenue per customer. The task is to compute this ratio for each variant and identify the maximum.

Let R denote total revenue and S denote ad spend (in dollars, not thousands) for a given variant. Then:

Efficiency = R / S = (Conversions x Avg Revenue per Customer) / (Ad Spend)

All figures are drawn from Tab 2.

**Variant A.**

R_A = 100 x 400 = 40,000

S_A = 8.0 x 1,000 = 8,000

Efficiency_A = 40,000 / 8,000 = 5.00 (dollars of revenue per dollar of ad spend)

**Variant B.**

R_B = 150 x 250 = 37,500

S_B = 15.0 x 1,000 = 15,000

Efficiency_B = 37,500 / 15,000 = 2.50

**Variant C.**

R_C = 75 x 500 = 37,500

S_C = 12.5 x 1,000 = 12,500

Efficiency_C = 37,500 / 12,500 = 3.00

**Comparison.** Efficiency_A (5.00) > Efficiency_C (3.00) > Efficiency_B (2.50)

Variant A therefore yields the highest revenue per advertising dollar. Note that Variant B attracted the most conversions (150) and Variant C the highest average revenue per customer ($500), but neither advantage overcomes the disproportionate ad spend associated with each. Variant B spent nearly twice as much as Variant A ($15,000 vs. $8,000) while generating less total revenue ($37,500 vs. $40,000), collapsing its efficiency to exactly half of Variant A's. Variant C's high per-customer value ($500) is offset by a low conversion count (75) and substantial spend ($12,500), yielding an intermediate efficiency of 3.00. Because the three values are 5.00, 2.50, and 3.00 respectively, they are not approximately equal, and sufficient data exist to determine the answer, eliminating choices D and E.

The correct answer is A.
**related_reading:** reading-di-05-multi-source-reasoning


---

## Set 12: Lumen Tech — 2024 Product Portfolio Review

### Tab 1: Executive Summary

Lumen Tech is reviewing its 2024 product portfolio across three product lines — Cloud Infrastructure, Security Services, and AI Platform — before setting 2025 strategic priorities. The CEO has requested that the review address financial performance, regional distribution, competitive market context, and a formal classification into "High priority" versus "Review" tiers.

### Tab 2: Revenue and Margin Performance

| Product Line          | 2024 Revenue ($M) | Growth vs. 2023 (%) | Operating Margin (%) |
|-----------------------|-------------------|---------------------|----------------------|
| Cloud Infrastructure  | 450               | 12                  | 22                   |
| Security Services     | 280               | 18                  | 28                   |
| AI Platform           | 120               | 65                  | 15                   |

### Tab 3: Regional Revenue Breakdown (in $M)

| Region         | Cloud Infrastructure | Security Services | AI Platform |
|----------------|----------------------|-------------------|-------------|
| North America  | 280                  | 160               | 75          |
| EMEA           | 120                  | 85                | 30          |
| APAC           | 50                   | 35                | 15          |

### Tab 4: Competitive Market Growth

Industry estimates for each product line's addressable market growth rate:

- Cloud Infrastructure market: approximately 9 percent annual growth.
- Security Services market: approximately 14 percent annual growth.
- AI Platform market: approximately 55 percent annual growth.

### Tab 5: Strategic Priorities Framework

- A product line qualifies as "High priority" when BOTH its growth rate exceeds its addressable market's growth rate AND its operating margin is at least 20 percent.
- Lines that fail either condition are classified as "Review."
- 2025 investment increases will be allocated only to "High priority" lines.

### Q34
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Cross-Tab Classification

Based on the Strategic Priorities Framework in Tab 5 and the data in Tabs 2 and 4, which product line(s) qualify as "High priority"?

- A) Cloud Infrastructure only
- B) Security Services only
- C) AI Platform only
- D) Cloud Infrastructure and Security Services
- E) All three product lines

**answer:** D
**explanation:** Tab 5 establishes a two-part conjunctive test: a product line is "High priority" only when (i) its own growth rate strictly exceeds the addressable market's growth rate, and (ii) its operating margin is at least 20 percent. Failure on either condition alone is sufficient to place the line in "Review." The test is applied to each of the three product lines using the figures in Tab 2 (company growth and margin) and Tab 4 (market growth rates).

Cloud Infrastructure. Tab 2 reports a company growth rate of 12 percent and an operating margin of 22 percent. Tab 4 places the addressable market growth rate at approximately 9 percent.

- Condition (i): 12 > 9. Satisfied.
- Condition (ii): 22 >= 20. Satisfied.

Both conditions hold; Cloud Infrastructure qualifies as "High priority."

Security Services. Tab 2 reports a company growth rate of 18 percent and an operating margin of 28 percent. Tab 4 places the addressable market growth rate at approximately 14 percent.

- Condition (i): 18 > 14. Satisfied.
- Condition (ii): 28 >= 20. Satisfied.

Both conditions hold; Security Services qualifies as "High priority."

AI Platform. Tab 2 reports a company growth rate of 65 percent and an operating margin of 15 percent. Tab 4 places the addressable market growth rate at approximately 55 percent.

- Condition (i): 65 > 55. Satisfied.
- Condition (ii): 15 >= 20. Not satisfied; 15 < 20.

Because Condition (ii) fails, the conjunctive test is not met. AI Platform is classified as "Review" regardless of its strong relative growth.

Ruling out the alternatives. Choice A (Cloud Infrastructure only) and Choice B (Security Services only) each omit one of the two qualifying lines. Choice C (AI Platform only) selects the one line whose margin disqualifies it. Choice E (all three) incorrectly includes AI Platform, which fails the margin threshold.

Exactly two product lines — Cloud Infrastructure and Security Services — satisfy both prongs of the Tab 5 framework. The correct answer is D.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q35
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Regional Share Calculation

Approximately what percentage of Lumen Tech's 2024 total revenue came from North America?

- A) 45%
- B) 52%
- C) 55%
- D) 61%
- E) 68%

**answer:** D
**explanation:** **Governing principle.** A regional share is computed by dividing the region's aggregate revenue across all product lines by the company-wide total revenue, then expressing the result as a percentage.

**Locating the data.** The necessary figures appear in Tab 3 (Regional Revenue Breakdown). Tab 2 provides a useful cross-check because its product-line totals must equal Tab 3's grand total.

**Step 1 — North America aggregate.**

Let R_NA be total North America revenue. Summing across all three product lines:

R_NA = 280 + 160 + 75 = 515 ($M)

**Step 2 — Company-wide total revenue.**

Let R_total be the sum of all regions and all product lines. Adding by region:

- EMEA: 120 + 85 + 30 = 235
- APAC: 50 + 35 + 15 = 100

R_total = 515 + 235 + 100 = 850 ($M)

Cross-check using Tab 2: 450 + 280 + 120 = 850. The totals are consistent.

**Step 3 — North America share.**

North America share = R_NA / R_total = 515 / 850

To compute: 515 / 850 = 51.5 / 85 = 103 / 170. Dividing, 170 x 0.60 = 102, so 103 / 170 approximately equals 0.6059, or approximately 60.6 percent.

Rounding to the nearest whole percent yields 61 percent, which corresponds to answer choice D.

**Ruling out nearby alternatives.** Choice C (55%) would require R_NA approximately equal to 467.5, well below the computed 515. Choice E (68%) would require R_NA approximately equal to 578, which exceeds the actual figure. Neither is consistent with the Tab 3 data.

The correct answer is D.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q36
**difficulty:** Hard
**type:** Multi-Source Reasoning
**topic:** Forecast — Applied Growth Rate

Suppose Lumen Tech increases 2025 investment only in "High priority" lines (per Tab 5), and Security Services maintains its 18 percent year-over-year growth rate into 2025. Approximately what will Security Services' 2025 revenue be?

- A) $290M
- B) $310M
- C) $330M
- D) $350M
- E) $370M

**answer:** C
**explanation:** Tab 5 establishes that a product line is classified "High priority" — and therefore receives 2025 investment increases — only when both of the following conditions hold simultaneously: its own growth rate exceeds the addressable market's growth rate, and its operating margin is at least 20 percent. A product line failing either condition is classified "Review." The question asks for 2025 revenue under the assumption that Security Services maintains its 18 percent year-over-year growth rate.

The relevant data come from Tab 2 and Tab 4. From Tab 2, Security Services posted 2024 revenue of $280M, a growth rate of 18 percent versus 2023, and an operating margin of 28 percent. From Tab 4, the Security Services addressable market grows at approximately 14 percent annually.

Checking the first condition: the product line's growth rate of 18 percent exceeds the market growth rate of 14 percent, so the first condition is satisfied. Checking the second condition: the operating margin of 28 percent is at least 20 percent, so the second condition is also satisfied. Both conditions hold; Security Services is therefore classified "High priority" and eligible for 2025 investment increases. The premise of the question is consistent with this classification, and the 18 percent growth assumption is applied without adjustment.

Applying 18 percent year-over-year growth to the 2024 base of $280M gives 280 times 1.18. Breaking this out: 280 times 1 equals 280, and 280 times 0.18 equals 50.4, yielding a total of $330.4M, which rounds to approximately $330M.

Choice B ($310M) would correspond to a growth rate of roughly (310 minus 280) divided by 280, or approximately 10.7 percent — well below the stated 18 percent. Choice D ($350M) would require growth of (350 minus 280) divided by 280, equal to exactly 25 percent. Neither figure matches the assumption given in the question, so both are incorrect.

The correct answer is C.
**related_reading:** reading-di-05-multi-source-reasoning

---

## Set 13: Meridian Hotels — Q4 Operations Review

### Tab 1: Internal Memo

**From:** Marcus Rivera, VP Operations
**To:** Property General Managers
**Re:** Q4 Performance Summary

The portfolio closed Q4 with an average occupancy rate of 68%, falling short of our board-approved target of 72%. Average RevPAR (revenue per available room per night) across all five properties was $94 for the quarter.

The Lakeside property led the portfolio in RevPAR, driven by the premium-suite rate initiative that took effect in October. The Downtown property achieved the highest occupancy in the portfolio, though its RevPAR ranked second — a gap that signals meaningful rate optimization opportunity. The Suburbs property continues to underperform, posting both the lowest occupancy and the lowest RevPAR in the portfolio.

Two properties — Midtown and Downtown — showed year-over-year RevPAR declines, which the board will scrutinize at the upcoming presentation.

### Tab 2: Property Performance (Q4)

| Property | Occupancy (%) | RevPAR ($) | Available Rooms | Prior Q4 RevPAR ($) |
|----------|---------------|------------|-----------------|---------------------|
| Lakeside | 64% | 118 | 120 | 108 |
| Downtown | 82% | 97 | 200 | 100 |
| Airport | 72% | 88 | 150 | 85 |
| Midtown | 65% | 91 | 130 | 95 |
| Suburbs | 55% | 76 | 110 | 72 |

### Tab 3: Board Targets for Q4

1. Portfolio average occupancy must be at least 72%.
2. Every property must show positive RevPAR growth year-over-year.
3. No property's RevPAR should fall below $80.
4. At least three properties must exceed 70% occupancy.

### Q37
**difficulty:** Easy
**type:** Multi-Source Reasoning
**topic:** Business Analysis

Based on Tab 2, which property had the lowest RevPAR in the portfolio during Q4?

- A) Lakeside
- B) Airport
- C) Midtown
- D) Suburbs

**answer:** D
**fastest_path:** Scan the RevPAR column: Suburbs = $76, the minimum.
**explanation:** RevPAR values from Tab 2: Lakeside $118, Downtown $97, Airport $88, Midtown $91, Suburbs $76. The minimum is Suburbs at $76. Answer D.
**mistake_a:** Lakeside has the highest RevPAR, not the lowest. A common anchor error when the memo prominently mentions Lakeside's performance.
**mistake_b:** Airport ($88) is second-lowest.
**mistake_c:** Midtown ($91) is third from the bottom.
**common_trap:** Associating "lowest RevPAR" with lowest *occupancy* (also Suburbs, by coincidence here). The question asks about RevPAR specifically — always re-read which column the question targets.
**takeaway:** For "lowest X" questions: scan only the X column and find the minimum. Ignore all other columns until you have the answer.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q38
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Business Analysis

Based on Tab 2, which property (or properties) showed a year-over-year RevPAR decline?

- A) Lakeside only
- B) Midtown only
- C) Downtown only
- D) Midtown and Downtown

**answer:** D
**fastest_path:** Compare Current vs Prior RevPAR for each row. Lakeside: 118 > 108 (up). Downtown: 97 < 100 (down). Airport: 88 > 85 (up). Midtown: 91 < 95 (down). Suburbs: 76 > 72 (up). Two declined: Midtown and Downtown.
**explanation:** Row-by-row check: Lakeside grew ($108 → $118). Downtown declined ($100 → $97). Airport grew ($85 → $88). Midtown declined ($95 → $91). Suburbs grew ($72 → $76). Exactly two properties declined — Midtown and Downtown — confirming the memo's statement. Answer D.
**mistake_a:** Lakeside had the strongest RevPAR growth; it did not decline.
**mistake_b:** Midtown did decline, but so did Downtown — "only" makes this wrong.
**mistake_c:** Downtown did decline, but so did Midtown — "only" makes this wrong.
**common_trap:** Stopping after finding one declining property. The question asks "which property (or properties)" — always finish checking every row before selecting an answer.
**takeaway:** When verifying a condition across multiple rows, complete every row check before answering. Partial checks produce partial (wrong) answers.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q39
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Business Analysis

According to the board targets in Tab 3, how many of the four targets did the portfolio fail to meet in Q4?

- A) 1
- B) 2
- C) 3
- D) 4

**answer:** D
**fastest_path:** Check all four targets: (1) Avg occupancy (64+82+72+65+55)/5 = 67.6% < 72% — fail. (2) All positive RevPAR growth — Midtown and Downtown declined — fail. (3) No RevPAR below $80 — Suburbs $76 — fail. (4) At least 3 properties exceed 70% occupancy — Downtown (82%) and Airport (72%) only, 2 not 3 — fail. All four failed.
**explanation:** Target 1: average occupancy = (64+82+72+65+55)/5 = 338/5 = 67.6%, below the 72% target — fail. Target 2: Midtown and Downtown both declined year-over-year — fail. Target 3: Suburbs RevPAR = $76, below the $80 floor — fail. Target 4: properties exceeding 70% occupancy are Downtown (82%) and Airport (72%) — only two, not the required three — fail. All four targets were missed. Answer D.
**mistake_a:** Student checked only the most visible target (occupancy average) and stopped.
**mistake_b:** Student found the two RevPAR-decline properties and stopped, missing targets 3 and 4.
**mistake_c:** Student found three failures but overlooked target 4 (the three-property threshold).
**common_trap:** Target 4 requires careful counting: only Downtown (82%) and Airport (72%) exceed 70% — exactly two properties, one short of the required three. Many students count Airport as "close enough" or forget to apply the strict ">" threshold.
**takeaway:** Multi-criterion compliance: evaluate each criterion explicitly against the data. "At least N" thresholds require an exact count, not a rough visual scan.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q40
**difficulty:** Hard
**type:** Multi-Source Reasoning
**topic:** Business Analysis

If the Midtown property increased its RevPAR to match the portfolio average of $94 while keeping its current 130 available rooms, by how much would its quarterly revenue increase? Assume a 90-day quarter.

- A) $11,700
- B) $22,815
- C) $35,100
- D) $46,800

**answer:** C
**fastest_path:** RevPAR increase = $94 − $91 = $3. Quarterly revenue gain = $3 × 130 rooms × 90 days = $35,100.
**explanation:** RevPAR is defined as total room revenue divided by (available rooms × nights). Therefore, total quarterly revenue = RevPAR × available rooms × days. Current quarterly revenue = $91 × 130 × 90 = $1,064,700. New revenue = $94 × 130 × 90 = $1,099,800. Increase = $1,099,800 − $1,064,700 = $35,100. Equivalently: $3 increase × 130 rooms × 90 nights = $35,100. Answer C.
**mistake_a:** $11,700 = $3 × 130 × 30 — used a 30-day month rather than a 90-day quarter.
**mistake_b:** $22,815 = $3 × (130 × 65%) × 90 = $3 × 84.5 × 90 — applied the RevPAR increment to *occupied* rooms (130 × 65%) rather than *available* rooms. RevPAR is defined over all available rooms, so the full 130 is the correct denominator.
**mistake_d:** $46,800 = $4 × 130 × 90 — used a $4 RevPAR increase instead of $3, e.g. by reading Midtown's current RevPAR as $90 rather than $91 (so $94 − $90 = $4). The increment is $94 − $91 = $3.
**common_trap:** Confusing RevPAR (revenue per *available* room) with ADR (average daily rate, which uses *occupied* rooms in the denominator). Choice B is designed for this mistake. The computation must use total available rooms, not occupied rooms.
**takeaway:** RevPAR questions: Revenue = RevPAR × Available Rooms × Days. "Available" is the full inventory, not the occupied subset. Verify the room count from the correct property row before computing.
**related_reading:** reading-di-05-multi-source-reasoning

---

## Set 14: BioNova Research — Drug Development Pipeline

### Tab 1: Strategic Memo

**From:** Dr. Lena Park, Chief Medical Officer
**To:** Portfolio Review Committee
**Re:** Q3 Pipeline Status

Three observations from this quarter's data. First, the oncology Phase III program (BN-101) is progressing faster than planned and is positioned for a regulatory filing within the year. Second, both Phase II neurology programs are at risk of enrollment shortfalls: one is 40% enrolled and the other is only 22% enrolled against identical 18-month timelines. Third, our CNS drugs collectively represent our largest strategic commitment, but also carry the longest development horizons — no CNS drug in the portfolio is projected to complete within two years from now.

### Tab 2: Drug Development Pipeline

| Drug | Therapeutic Area | Phase | Target Enrollment | Enrolled (%) | Projected Completion (months) |
|------|-----------------|-------|-------------------|--------------|-------------------------------|
| BN-101 | Oncology | III | 500 | 80% | 14 |
| BN-204 | Neurology | II | 300 | 40% | 18 |
| BN-317 | CNS | II | 250 | 65% | 28 |
| BN-412 | Cardiovascular | I | 120 | 33% | 22 |
| BN-505 | Neurology | II | 350 | 22% | 18 |
| BN-618 | CNS | III | 400 | 60% | 31 |

### Q41
**difficulty:** Easy
**type:** Multi-Source Reasoning
**topic:** Clinical Research

According to Tab 2, which drug has the earliest projected completion date?

- A) BN-101
- B) BN-204
- C) BN-317
- D) BN-618

**answer:** A
**fastest_path:** Scan the "Projected Completion" column for the minimum: BN-101 = 14 months, the lowest.
**explanation:** Projected completion months from Tab 2: BN-101 (14), BN-204 (18), BN-317 (28), BN-412 (22), BN-505 (18), BN-618 (31). The minimum is BN-101 at 14 months. Answer A.
**mistake_b:** BN-204 is tied for second-earliest at 18 months, not the earliest.
**mistake_d:** BN-618 has the latest projected completion at 31 months — opposite end of the range.
**common_trap:** The memo prominently discusses BN-101 as "progressing faster than planned," which may anchor students on that drug — but the correct anchor is the completion timeline column, not the enrollment narrative.
**takeaway:** "Earliest" = minimum value in the relevant column. Anchor on the column the question asks about, not on which drug receives the most narrative attention.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q42
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Clinical Research

Based on Tab 2, which of the following statements is accurate?

- A) There are more Phase I drugs in the pipeline than Phase III drugs.
- B) Every Phase III drug has a higher enrollment percentage than every Phase II drug.
- C) BN-505 has the lowest enrollment percentage of any drug in the pipeline.
- D) The cardiovascular program has a shorter projected timeline than both neurology programs.

**answer:** C
**fastest_path:** C: scan the "Enrolled (%)" column — BN-505 = 22%, the minimum. Confirm no other drug is lower.
**explanation:** Check each statement. A: Phase I count = 1 (BN-412), Phase III count = 2 (BN-101, BN-618) — false, Phase III has more. B: Phase III enrollment percentages are BN-101 (80%) and BN-618 (60%); Phase II includes BN-317 at 65%. Since BN-618 (60%) < BN-317 (65%), not every Phase III exceeds every Phase II — false. C: BN-505 = 22%; all others are 33%, 40%, 60%, 65%, 80% — BN-505 is the minimum. True. D: Cardiovascular (BN-412) = 22 months; both neurology programs (BN-204 and BN-505) = 18 months. 22 > 18, so BN-412 is longer, not shorter — false. Answer C.
**mistake_a:** There are 2 Phase III drugs (BN-101 and BN-618) versus only 1 Phase I drug (BN-412).
**mistake_b:** BN-317 (Phase II CNS) is 65% enrolled, higher than BN-618 (Phase III, 60%). The "every Phase III > every Phase II" claim fails on this pair.
**mistake_d:** BN-412 (Cardiovascular) has a 22-month timeline while both neurology Phase II programs have 18-month timelines — cardiovascular is longer, not shorter.
**common_trap:** For statement B, students who only compare BN-101 (80%) against Phase II drugs find it true for BN-101, then stop. The full criterion requires every Phase III drug to exceed every Phase II drug — checking BN-618 (60%) against BN-317 (65%) breaks the claim.
**takeaway:** "Every X has higher Y than every Z" requires checking the worst-case X against the best-case Z. A single counterexample disproves the universal claim.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q43
**difficulty:** Hard
**type:** Multi-Source Reasoning
**topic:** Clinical Research

Based on Tab 2, how many additional participants still need to be enrolled across all Phase III drugs to reach their respective target enrollments? Assume current enrollment percentages are exact.

- A) 100
- B) 160
- C) 260
- D) 400

**answer:** C
**fastest_path:** Phase III drugs: BN-101 and BN-618. BN-101 remaining = 500 × (1−0.80) = 100. BN-618 remaining = 400 × (1−0.60) = 160. Total = 260.
**explanation:** Identify Phase III drugs from Tab 2: BN-101 (Oncology) and BN-618 (CNS). BN-101: target = 500, enrolled = 80% → currently enrolled = 400, remaining = 100. BN-618: target = 400, enrolled = 60% → currently enrolled = 240, remaining = 160. Combined remaining = 100 + 160 = 260. Answer C.
**mistake_a:** 100 — computed only BN-101's remaining participants, omitting BN-618.
**mistake_b:** 160 — computed only BN-618's remaining participants, omitting BN-101.
**mistake_d:** 400 — summed current enrolled counts (400 + 240 = 640) minus BN-618's remaining (160), or confused "currently enrolled" with "still needed" for one drug.
**common_trap:** Applying the Phase III filter correctly but then computing *currently enrolled* (400 + 240 = 640) instead of *remaining to enroll* (100 + 160 = 260). The question asks what is still needed, not what has been achieved.
**takeaway:** "Still needed" = Target × (1 − Enrolled%). Verify the filter criterion (Phase III only) before computing, then compute remaining for each qualifying drug separately before summing.
**related_reading:** reading-di-05-multi-source-reasoning

---

## Set 15: Clearwater Municipal Transit Authority — Annual Service Review

### Tab 1: Director Memo

**From:** Patricia Osei, Director of Transit Services
**To:** City Council Transportation Committee
**Re:** Annual Route Performance Summary

Overall systemwide ridership grew 3.2% year-over-year. Route 3 posted the strongest individual ridership growth at 8.2%, driven by the extension to the new employment corridor in Q2. Two routes experienced ridership declines — both are designated residential routes, which triggers a formal service review under our charter.

Three routes are currently running at a daily operating subsidy, where fare revenue does not cover operating costs. The authority is evaluating whether to restructure or discontinue the weakest-performing routes before the next budget cycle.

### Tab 2: Route Performance Summary

| Route | Avg Daily Riders | Daily Oper. Cost ($) | Daily Fare Revenue ($) | YoY Rider Growth |
|-------|-----------------|----------------------|------------------------|------------------|
| 1 | 2,400 | 7,200 | 8,400 | +2.5% |
| 2 | 1,800 | 6,000 | 4,800 | −3.5% |
| 3 | 3,100 | 9,600 | 9,300 | +8.2% |
| 4 | 1,200 | 3,000 | 3,600 | +1.0% |
| 5 | 800 | 4,000 | 2,000 | −1.2% |

### Tab 3: Service Standards

- All routes must maintain a minimum daily fare revenue-to-cost ratio of 0.85.
- No route may operate with fewer than 700 average daily riders.
- Routes serving primarily residential areas (Routes 2 and 5 are designated residential) must achieve positive year-over-year ridership growth.

### Q44
**difficulty:** Easy
**type:** Multi-Source Reasoning
**topic:** Public Policy Analysis

According to Tab 2, which route has the highest average daily ridership?

- A) Route 1
- B) Route 2
- C) Route 3
- D) Route 4

**answer:** C
**fastest_path:** Scan the "Avg Daily Riders" column: Route 3 = 3,100, the maximum.
**explanation:** Average daily ridership from Tab 2: Route 1 (2,400), Route 2 (1,800), Route 3 (3,100), Route 4 (1,200), Route 5 (800). The maximum is Route 3 at 3,100. Answer C.
**mistake_a:** Route 1 has the second-highest ridership at 2,400.
**mistake_d:** Route 4 has one of the lower ridership counts at 1,200.
**common_trap:** The memo prominently discusses Route 3's *growth* (+8.2%), which helps confirm the answer, but the question asks about *absolute ridership*, not growth rate. Both metrics point to Route 3 here, but they measure different things.
**takeaway:** Distinguish absolute values (how many riders today) from rate-of-change values (how fast ridership is growing). Both appear in the same table; always read which one the question asks for.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q45
**difficulty:** Easy
**type:** Multi-Source Reasoning
**topic:** Public Policy Analysis

Based on the YoY Rider Growth column in Tab 2, which route experienced the most negative year-over-year ridership change?

- A) Route 1
- B) Route 2
- C) Route 4
- D) Route 5

**answer:** B
**fastest_path:** Scan the YoY growth column for the most negative value: Route 2 = −3.5%, which is more negative than Route 5's −1.2%.
**explanation:** YoY Rider Growth: Route 1 (+2.5%), Route 2 (−3.5%), Route 3 (+8.2%), Route 4 (+1.0%), Route 5 (−1.2%). Two routes declined; among them, −3.5% (Route 2) is more negative than −1.2% (Route 5). Answer B.
**mistake_a:** Route 1 had positive growth of +2.5%.
**mistake_c:** Route 4 had positive growth of +1.0%.
**mistake_d:** Route 5 did decline (−1.2%), but −1.2% is a smaller decline than Route 2's −3.5%.
**common_trap:** Stopping at the first negative value encountered when reading the table top to bottom — Route 5 appears after Route 2 in the table but has a smaller decline. Always compare all negative values before selecting.
**takeaway:** "Most negative" requires comparing the magnitudes of all negative values. A −3.5% decline is worse (more negative) than a −1.2% decline, even though both are declines.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q46
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Public Policy Analysis

According to the service standard in Tab 3 requiring a minimum daily fare revenue-to-cost ratio of 0.85, how many routes currently fail to meet this threshold?

- A) 1
- B) 2
- C) 3
- D) 4

**answer:** B
**fastest_path:** Compute revenue/cost for each route. Route 1: 8,400/7,200 = 1.17 ✓. Route 2: 4,800/6,000 = 0.80 ✗. Route 3: 9,300/9,600 = 0.97 ✓. Route 4: 3,600/3,000 = 1.20 ✓. Route 5: 2,000/4,000 = 0.50 ✗. Two routes fail.
**explanation:** Revenue-to-cost ratios: Route 1 = 8,400/7,200 = 1.167 (passes). Route 2 = 4,800/6,000 = 0.800, below 0.85 (fails). Route 3 = 9,300/9,600 = 0.969 (passes). Route 4 = 3,600/3,000 = 1.200 (passes). Route 5 = 2,000/4,000 = 0.500, below 0.85 (fails). Two routes fail: Route 2 and Route 5. Answer B.
**mistake_a:** Student only identified Route 5 (the most obvious failure at 0.50) and stopped.
**mistake_c:** Student included Route 3 as a failure because it runs at a small absolute subsidy ($9,300 < $9,600), but its ratio is 0.969 — above the 0.85 threshold. The standard is a ratio, not a requirement for profit.
**mistake_d:** Student counted all routes operating at any subsidy (Routes 2, 3, and 5 all have revenue < cost) rather than applying the specific 0.85 ratio threshold.
**common_trap:** Confusing "operating at a subsidy" (revenue < cost) with "failing the 0.85 ratio." A route can run at a loss while still meeting the 0.85 standard — Route 3 does exactly this ($9,300/$9,600 = 0.969). The specific threshold, not mere profitability, is what determines compliance.
**takeaway:** Compliance questions require applying the exact stated criterion. Read the threshold carefully; then compute the relevant metric for each entity before comparing.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q47
**difficulty:** Hard
**type:** Multi-Source Reasoning
**topic:** Public Policy Analysis

The authority is evaluating whether to discontinue Route 2 or Route 5. Both routes fail the revenue-to-cost standard and have negative ridership growth. The decision rule: discontinue the route that saves more daily operating cost per daily rider discontinued. Based on Tab 2, which route should be discontinued, and what is the daily cost savings per rider?

- A) Route 2; approximately $3.33 per daily rider
- B) Route 2; approximately $5.00 per daily rider
- C) Route 5; approximately $3.33 per daily rider
- D) Route 5; approximately $5.00 per daily rider

**answer:** D
**fastest_path:** Route 5: $4,000 / 800 = $5.00/rider. Route 2: $6,000 / 1,800 = $3.33/rider. $5.00 > $3.33, so discontinue Route 5.
**explanation:** The rule requires maximizing cost savings per rider discontinued. Route 5: daily cost = $4,000, daily riders = 800 → $4,000 / 800 = $5.00 per rider. Route 2: daily cost = $6,000, daily riders = 1,800 → $6,000 / 1,800 = $3.33 per rider. Route 5 generates $5.00 of daily cost savings per rider lost, exceeding Route 2's $3.33. Per the decision rule, Route 5 should be discontinued. Answer D.
**mistake_a:** Picks Route 2 because it saves more in *absolute* daily cost ($6,000 vs. $4,000), but the rule specifies *per rider*, not total — Route 5 wins on that metric.
**mistake_b:** Picks Route 2 but attributes Route 5's per-rider figure ($5.00) to it — swapped the ratios between routes.
**mistake_c:** Picks the correct route (Route 5) but attributes Route 2's per-rider figure ($3.33) — computed the right route from the decision rule but pulled the wrong dollar figure.
**common_trap:** Route 2 appears more expensive to run ($6,000 vs. $4,000), making it the intuitive cut candidate. But the rule normalizes by ridership, and Route 5's 800 daily riders generate a higher cost-per-rider ratio than Route 2's 1,800 riders do at $6,000. Per-rider analysis often inverts the ranking from absolute analysis.
**takeaway:** "Per unit" decision rules require dividing, not comparing absolute totals. Compute the ratio for each option independently, then compare. Larger absolute cost does not imply larger cost per unit.
**related_reading:** reading-di-05-multi-source-reasoning

---

## Set 16: Arcturus Manufacturing — Component C Supplier Analysis

### Tab 1: Operations Memo

**From:** Elena Vasquez, VP Supply Chain
**To:** Procurement Committee
**Re:** Supplier Performance Review and Proposed Vendor Switch

We are evaluating switching primary sourcing for Component C from Helios to Meridian. Meridian's per-unit cost is 5% higher than Helios, but its defect rate and lead time are significantly better. Our annual requirement for Component C is 12,000 units. A switch would require a one-time transition cost of $15,000.

Separately, Orion's lead time increased from 18 days to 25 days in Q2. This moves Orion outside our preferred-vendor tier, which requires a lead time of 21 days or fewer. We will reassess Orion's tier status in Q3.

I want the committee to evaluate the full cost picture — purchase price, rework costs, and the payback on the transition — before deciding.

### Tab 2: Supplier Performance Summary

| Supplier | Component | Per-Unit Cost ($) | Lead Time (days) | Defect Rate (%) | Annual Volume | Rework Cost per Defect ($) |
|----------|-----------|-------------------|------------------|-----------------|---------------|----------------------------|
| Sigma    | A         | 42                | 14               | 1.8%            | 8,000         | 120                        |
| Helios   | C         | 60                | 19               | 4.0%            | 12,000        | 150                        |
| Meridian | C         | 63                | 12               | 1.0%            | N/A           | 150                        |
| Apex     | B         | 28                | 10               | 0.5%            | 15,000        | 80                         |
| Orion    | D         | 35                | 25               | 1.1%            | 9,000         | 90                         |

### Q48
**difficulty:** Easy
**type:** Multi-Source Reasoning
**topic:** Supply Chain Analysis

Based on Tab 2, which active supplier has the lowest defect rate?

- A) Sigma
- B) Helios
- C) Meridian
- D) Apex

**answer:** D
**fastest_path:** Scan the "Defect Rate (%)" column: Apex = 0.5%, the minimum.
**explanation:** Defect rates from Tab 2: Sigma 1.8%, Helios 4.0%, Meridian 1.0%, Apex 0.5%, Orion 1.1%. The minimum is Apex at 0.5%. Answer D.
**mistake_a:** Sigma (1.8%) is mid-range, not the lowest.
**mistake_b:** Helios (4.0%) is the highest defect rate, not the lowest.
**mistake_c:** Meridian (1.0%) is lower than most but above Apex's 0.5%.
**common_trap:** Meridian is prominently discussed in the memo as having a better defect rate than Helios, which can anchor attention on Meridian. But the question asks for the overall minimum across all suppliers — Apex, which isn't part of the memo's discussion, is lower.
**takeaway:** Scan the entire relevant column before answering. The subject of the memo's analysis is not necessarily the answer to a "which is lowest" question.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q49
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Supply Chain Analysis

The memo defines preferred-vendor status as a lead time of 21 days or fewer. Among the four currently active suppliers (excluding Meridian, which has no active volume), how many qualify as preferred vendors?

- A) 1
- B) 2
- C) 3
- D) 4

**answer:** C
**fastest_path:** Active suppliers: Sigma (14 days ✓), Helios (19 days ✓), Apex (10 days ✓), Orion (25 days ✗). Three qualify.
**explanation:** Active suppliers and their lead times from Tab 2: Sigma (14 days), Helios (19 days), Apex (10 days), Orion (25 days). The threshold is ≤21 days. Sigma (14) passes, Helios (19) passes, Apex (10) passes, Orion (25) fails. Three of the four active suppliers meet the preferred-vendor criterion. Answer C.
**mistake_b:** Student may have excluded Helios because it is being evaluated for replacement, but the question asks about current preferred-vendor status by lead time — Helios at 19 days still qualifies.
**mistake_d:** Student counted Orion as meeting the standard — but 25 > 21. The memo explicitly flags that Orion moved *out* of the preferred-vendor tier.
**common_trap:** Using the memo's narrative to exclude Helios (since it is under review) from the count. The question asks about the technical threshold (lead time ≤21), not strategic status. Helios still meets the numeric criterion.
**takeaway:** When a question asks about a defined numeric threshold, apply the threshold mechanically. Narrative context (e.g., a supplier being evaluated for replacement) does not change whether it meets the numeric standard.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q50
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Supply Chain Analysis

Based on Tab 2, what is the total annual rework cost currently incurred for Component C (sourced entirely from Helios)?

- A) $18,000
- B) $43,200
- C) $57,600
- D) $72,000

**answer:** D
**fastest_path:** Annual rework = 12,000 units × 4.0% defect rate × $150 per defect = 480 defects × $150 = $72,000.
**explanation:** From Tab 2: Helios supplies 12,000 units annually at a 4.0% defect rate, with a rework cost of $150 per defective unit. Annual defective units = 12,000 × 0.040 = 480. Annual rework cost = 480 × $150 = $72,000. Answer D.
**mistake_a:** $18,000 = 12,000 × 1.0% × $150 — used Meridian's defect rate (the candidate supplier) instead of Helios's current rate.
**mistake_b:** $43,200 = 12,000 × 4.0% × $90 — used Orion's rework cost per defect ($90) instead of Helios's ($150).
**mistake_c:** $57,600 = 12,000 × 3.2% × $150 — misread Helios's defect rate as 3.2% (close to the actual 4.0% but pulling from the wrong row or an estimation).
**common_trap:** When computing rework costs in a multi-supplier table, it is tempting to use a value from the "featured" comparison row (Meridian) rather than the current supplier (Helios). Always confirm which row's data the question asks you to use.
**takeaway:** Multi-row tables require row discipline: identify the subject row first, then extract all needed fields from that single row before computing. Cross-row contamination produces every common wrong answer here.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q51
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Supply Chain Analysis

If Arcturus switches all Component C sourcing to Meridian, how much more will it spend annually on Component C purchases (unit cost only, excluding rework)?

- A) $3,000
- B) $12,000
- C) $36,000
- D) $108,000

**answer:** C
**fastest_path:** Price increase = $63 − $60 = $3 per unit × 12,000 units = $36,000/year.
**explanation:** Meridian's per-unit cost is $63 versus Helios's $60, a difference of $3 per unit. Annual volume is 12,000 units. Additional annual purchase cost = $3 × 12,000 = $36,000. Answer C. (Cross-check: memo states Meridian is 5% more expensive. $60 × 1.05 = $63 ✓.)
**mistake_a:** $3,000 = $3 × 1,000 — miscounted the annual volume as 1,000 instead of 12,000.
**mistake_b:** $12,000 = $3 × 4,000 — used one quarter's worth of volume (12,000 / 3 ≈ 4,000) instead of the full annual volume.
**mistake_d:** $108,000 = 12,000 × $9 — computed a 15% premium ($60 × 0.15 = $9) instead of the stated 5% premium ($60 × 0.05 = $3). The memo clearly states 5%, and Tab 2 confirms: $63 / $60 = 1.05.
**common_trap:** Misreading "5% higher" as "15% higher" — especially if a student confuses this with a similar problem or skims the memo without verifying against the table. Always cross-check the memo's percentage claim against the raw numbers in the table.
**takeaway:** When the memo states a percentage and the table gives raw numbers, verify consistency: $63 / $60 = 1.05 = 5% premium. Use the exact dollar difference for the calculation, not the percentage alone.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q52
**difficulty:** Hard
**type:** Multi-Source Reasoning
**topic:** Supply Chain Analysis

Using the data in Tab 2 and the transition cost from the memo, what is the payback period in months for switching all Component C sourcing from Helios to Meridian? (Assume annual savings accrue evenly across months and the transition cost is paid upfront.)

- A) 3 months
- B) 10 months
- C) 18 months
- D) 25 months

**answer:** B
**fastest_path:** Annual rework savings: 12,000 × (4%−1%) × $150 = 360 × $150 = $54,000. Annual purchase cost increase: 12,000 × $3 = $36,000. Net annual savings: $54,000 − $36,000 = $18,000 = $1,500/month. Payback: $15,000 / $1,500 = 10 months.
**explanation:** Step 1 — Annual rework cost with Helios: 12,000 × 4.0% × $150 = $72,000. With Meridian: 12,000 × 1.0% × $150 = $18,000. Rework savings = $54,000/year. Step 2 — Annual purchase cost increase: 12,000 × ($63 − $60) = $36,000 more per year. Step 3 — Net annual savings: $54,000 − $36,000 = $18,000/year = $1,500/month. Step 4 — Payback: $15,000 transition cost / $1,500 per month = 10 months. Answer B.
**mistake_a:** 3 months = $15,000 / ($54,000 / 12) = $15,000 / $4,500 — used gross rework savings ($54,000) without netting out the $36,000 annual purchase cost increase. This ignores that Meridian costs more per unit.
**mistake_c:** 18 months — arises from computing net monthly savings incorrectly, for example by using only the purchase premium as the denominator ($36,000/12 = $3,000/month; $15,000/$3,000 = 5 months) or from a multi-step arithmetic error that yields a lower net benefit figure.
**mistake_d:** 25 months — likely from a major arithmetic error in the rework or purchase cost step, such as misreading the defect rate or rework cost per unit from another supplier's row.
**common_trap:** Computing only one of the two cost effects. The switch both saves money (lower rework) and costs money (higher unit price). Using only the rework savings overstates the benefit and understates the payback period. The net figure is what goes in the denominator.
**takeaway:** Payback = One-time cost / Net annual savings. Net = benefits minus costs. Never use gross savings as the denominator; always subtract the ongoing cost premium before dividing.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q53
**difficulty:** Hard
**type:** Multi-Source Reasoning
**topic:** Supply Chain Analysis

The procurement committee proposes a hybrid approach: purchase 60% of the annual Component C requirement from Helios and 40% from Meridian. Assuming the same per-unit costs, defect rates, and rework costs from Tab 2, how would the hybrid arrangement change total annual Component C costs (purchases plus rework) compared with the current all-Helios arrangement?

- A) Increases by $7,200
- B) Decreases by $7,200
- C) Increases by $14,400
- D) Decreases by $18,000

**answer:** B
**fastest_path:** Hybrid split: 7,200 units from Helios, 4,800 from Meridian. Helios portion: (7,200×$60)+(7,200×4%×$150) = $432,000+$43,200 = $475,200. Meridian portion: (4,800×$63)+(4,800×1%×$150) = $302,400+$7,200 = $309,600. Hybrid total = $784,800. Current all-Helios: (12,000×$60)+(12,000×4%×$150) = $720,000+$72,000 = $792,000. Change = $784,800 − $792,000 = −$7,200 (saves $7,200).
**explanation:** Current all-Helios annual cost: purchases = 12,000 × $60 = $720,000; rework = 12,000 × 4.0% × $150 = 480 × $150 = $72,000; total = $792,000. Hybrid arrangement: Helios volume = 60% × 12,000 = 7,200 units; Meridian volume = 40% × 12,000 = 4,800 units. Helios portion cost: (7,200 × $60) + (7,200 × 4.0% × $150) = $432,000 + $43,200 = $475,200. Meridian portion cost: (4,800 × $63) + (4,800 × 1.0% × $150) = $302,400 + $7,200 = $309,600. Hybrid total = $475,200 + $309,600 = $784,800. Change vs. current: $784,800 − $792,000 = −$7,200. The hybrid arrangement saves $7,200/year. Answer B.
**mistake_a:** Increases by $7,200 — correct magnitude but wrong direction. This arises from subtracting in the wrong order (hybrid − current computed as $792,000 − $784,800 instead of $784,800 − $792,000).
**mistake_c:** Increases by $14,400 — computed only the purchase cost premium for the Meridian portion (4,800 × $3 = $14,400) without accounting for the rework savings from switching 40% of volume to the lower-defect supplier. Net rework savings on the Meridian portion = (4,800 × 4% × $150) − (4,800 × 1% × $150) = $28,800 − $7,200 = $21,600. Net change = $21,600 savings − $14,400 premium = $7,200 savings (not an increase).
**mistake_d:** Decreases by $18,000 — the net annual savings if ALL 12,000 units switched to Meridian (the full-switch figure from Q52). This error applies the full-switch savings to a 60/40 hybrid. Only 40% of volume moves to Meridian, so only 40% of the potential rework savings are realized.
**common_trap:** Two traps in one question. First, students who only calculate the Meridian purchase premium ($14,400) and ignore rework savings choose C. Second, students who compute the correct full-switch savings ($18,000 from Q52) and apply them to the hybrid proposal choose D. The hybrid problem requires computing each supplier's portion costs separately — there is no shortcut that uses the full-switch numbers directly.
**takeaway:** Hybrid-split problems: always compute each portion's full cost (purchase + rework) separately, then sum. You cannot apply a full-population rate to a partial volume — doing so is the definition of the misleading distractor.
**related_reading:** reading-di-05-multi-source-reasoning

---

## Set 17: Halvorsen Retail — Store Expansion Review

### Tab 1: Internal Memo

**From:** Greta Halvorsen, Director of Retail Strategy
**To:** Regional Operations Leads
**Re:** Annual Store Performance and Expansion Screen

Ahead of next year's capital-allocation meeting, I want to flag where our four flagship stores stand. Total chain revenue across these four stores reached $20.0 million this year.

The Dunmore store remains our standout performer, posting both the strongest year-over-year revenue growth and the highest sales productivity per square foot in the portfolio. The Cresthill store is the only location to see revenue decline this year, and its rent burden relative to revenue is the heaviest in the group — a combination that excludes it from any near-term expansion consideration.

Please review each store against the board's expansion-screen criteria (Tab 3) before we meet. Only stores that clear all three criteria will be considered for square-footage expansion.

### Tab 2: Store Performance Summary

| Store     | Annual Revenue ($M) | Selling Area (sq ft) | Annual Rent ($M) | YoY Revenue Growth |
|-----------|---------------------|----------------------|------------------|--------------------|
| Aspen     | 4.2                 | 12,000               | 0.48             | +6%                |
| Brixton   | 5.6                 | 20,000               | 0.84             | +3%                |
| Cresthill | 3.0                 | 10,000               | 0.50             | -2%                |
| Dunmore   | 7.2                 | 18,000               | 0.90             | +11%               |

### Tab 3: Expansion-Screen Criteria (Board-Approved)

A store qualifies as an expansion candidate only if it meets ALL of the following:

1. Revenue per square foot of at least $320.
2. Rent-to-revenue ratio (annual rent divided by annual revenue) of no more than 13%.
3. Positive year-over-year revenue growth.

### Q54
**difficulty:** Easy
**type:** Multi-Source Reasoning
**topic:** Business Analysis

Based on Tab 2, which store had the highest revenue per square foot this year?

- A) Aspen
- B) Brixton
- C) Cresthill
- D) Dunmore
- E) Cannot be determined

**answer:** D
**explanation:** Revenue per square foot equals annual revenue divided by selling area. All figures needed come from Tab 2 (Store Performance Summary); Tabs 1 and 3 are not required, though the memo's claim that Dunmore leads on "sales productivity per square foot" provides a useful cross-check.

Computing the ratio for each store (revenue converted to dollars):

- Aspen: 4,200,000 / 12,000 = $350
- Brixton: 5,600,000 / 20,000 = $280
- Cresthill: 3,000,000 / 10,000 = $300
- Dunmore: 7,200,000 / 18,000 = $400

Ranking in descending order: $400 > $350 > $300 > $280, which corresponds to Dunmore > Aspen > Cresthill > Brixton. Dunmore, at $400 per square foot, is the maximum. Brixton carries the largest selling area (20,000 sq ft) and might appear productive, but its revenue base of $5.6M spread over that area yields only $280 per square foot, the lowest in the portfolio. Choice E is eliminated because every figure required is explicitly given in Tab 2, making the ratio fully determinable.

The correct answer is D.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q55
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Business Analysis

Applying the board-approved expansion-screen criteria in Tab 3 to the data in Tab 2, which store or stores qualify as expansion candidates?

- A) Dunmore only
- B) Aspen and Dunmore
- C) Aspen, Dunmore, and Brixton
- D) Brixton and Dunmore
- E) All four stores

**answer:** B
**explanation:** Tab 3 establishes a three-part conjunctive screen: a store qualifies only if it satisfies all three criteria simultaneously — revenue per square foot of at least $320, rent-to-revenue ratio of no more than 13%, and positive year-over-year revenue growth. Each store is tested using the figures in Tab 2.

Revenue per square foot (computed in Q54): Aspen $350, Brixton $280, Cresthill $300, Dunmore $400.

Rent-to-revenue ratio (annual rent divided by annual revenue, from Tab 2):

- Aspen: 0.48 / 4.2 = 0.1143, or approximately 11.4%
- Brixton: 0.84 / 5.6 = 0.1500, or 15.0%
- Cresthill: 0.50 / 3.0 = 0.1667, or approximately 16.7%
- Dunmore: 0.90 / 7.2 = 0.1250, or 12.5%

Year-over-year growth (Tab 2): Aspen +6%, Brixton +3%, Cresthill -2%, Dunmore +11%.

Applying all three criteria:

- Aspen: $350 (>= 320, pass); 11.4% (<= 13%, pass); +6% (positive, pass). Qualifies.
- Brixton: $280 (< 320, fail). Disqualified on criterion 1 regardless of its other figures.
- Cresthill: $300 (< 320, fail); also 16.7% rent ratio and -2% growth fail. Disqualified.
- Dunmore: $400 (pass); 12.5% (pass); +11% (pass). Qualifies.

Only Aspen and Dunmore clear all three criteria. Choice A omits Aspen, which passes every criterion. Choice C wrongly includes Brixton, which fails on revenue per square foot ($280 < $320). Choice D wrongly includes Brixton and omits Aspen. Choice E includes Cresthill, the only store to decline year-over-year and the one with the heaviest rent burden, as the memo notes.

The correct answer is B.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q56
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Business Analysis

Based on Tab 2, which store has the highest rent-to-revenue ratio?

- A) Aspen
- B) Brixton
- C) Cresthill
- D) Dunmore
- E) They are approximately equal

**answer:** C
**explanation:** The rent-to-revenue ratio is defined in Tab 3 as annual rent divided by annual revenue. The relevant figures are in Tab 2; the question asks which store carries the largest value of that ratio. The memo (Tab 1) states that Cresthill's "rent burden relative to revenue is the heaviest in the group," which the computation confirms directly.

Computing each ratio from Tab 2:

- Aspen: 0.48 / 4.2 = approximately 11.4%
- Brixton: 0.84 / 5.6 = 15.0%
- Cresthill: 0.50 / 3.0 = approximately 16.7%
- Dunmore: 0.90 / 7.2 = 12.5%

Ranking in descending order: 16.7% > 15.0% > 12.5% > 11.4%, which corresponds to Cresthill > Brixton > Dunmore > Aspen. Cresthill carries the highest ratio at approximately 16.7%. A solver might be tempted by Brixton, which has the largest absolute rent figure ($0.84M), but its larger revenue base ($5.6M) holds its ratio to 15.0%, below Cresthill's. Cresthill pairs a modest rent of $0.50M with the smallest revenue base ($3.0M), producing the highest ratio. The three figures are not close, so choice E is eliminated.

The correct answer is C.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q57
**difficulty:** Hard
**type:** Multi-Source Reasoning
**topic:** Business Analysis

A board member asks for the chain-wide revenue per square foot across all four stores combined. Based on Tab 2, approximately what is it?

- A) $300
- B) $320
- C) $333
- D) $350
- E) $358

**answer:** C
**explanation:** **Governing principle.** A chain-wide (aggregate) revenue-per-square-foot figure is computed by dividing total revenue across all stores by total selling area across all stores. It is not the simple average of the individual per-store ratios, because the stores differ in size — a size-weighted aggregate is required.

**Identifying the source.** All figures come from Tab 2. The memo (Tab 1) confirms total chain revenue of $20.0 million, which serves as a cross-check on the numerator.

**Step 1: Total revenue.**

4.2 + 5.6 + 3.0 + 7.2 = 20.0 ($M)

This matches the $20.0 million stated in the memo, confirming the figures are internally consistent.

**Step 2: Total selling area.**

12,000 + 20,000 + 10,000 + 18,000 = 60,000 sq ft

**Step 3: Chain-wide revenue per square foot.**

20,000,000 / 60,000 = 333.33, or approximately $333 per square foot.

**Ruling out the alternatives.** Choice D ($350) and choice E ($358) reflect a common error: averaging the four individual per-store ratios ($350, $280, $300, $400) without weighting by area. The simple average of those four is (350 + 280 + 300 + 400) / 4 = 1330 / 4 = $332.50, which happens to land near the correct weighted figure here but is the wrong method and would diverge in other cases; choices D and E overstate this. Choice A ($300) and choice B ($320) understate the aggregate. Only the size-weighted computation — total revenue divided by total area — yields $333.

The correct answer is C.
**related_reading:** reading-di-05-multi-source-reasoning

---

## Set 18: Calderon Energy — Solar Project Bid Evaluation

### Tab 1: Procurement Memo

**From:** Diego Calderon, VP Project Development
**To:** Bid Review Committee
**Re:** Utility-Scale Solar Bid Evaluation

We received three vendor bids for our next utility-scale solar build. The committee should evaluate each bid on cost efficiency (capital cost per megawatt of capacity), schedule (months to completion), and equipment warranty before applying the formal shortlisting framework in Tab 3.

A few notes from my initial read. Verde Power offers the largest nameplate capacity of the three bids but also the shortest warranty. Helios Grid is the fastest to deliver and carries the longest warranty, but its cost per megawatt is the highest of the three. Only bids that clear every criterion in the shortlisting framework will advance to final negotiation.

### Tab 2: Bid Summary

| Bidder      | Capacity (MW) | Capital Cost ($M) | Completion (months) | Warranty (years) |
|-------------|---------------|-------------------|---------------------|------------------|
| SunPeak     | 50            | 60                | 14                  | 20               |
| Helios Grid | 40            | 52                | 12                  | 25               |
| Verde Power | 60            | 66                | 18                  | 15               |

### Tab 3: Shortlisting Framework

A bid is shortlisted for final negotiation only if it meets ALL of the following:

1. Capital cost per megawatt of no more than $1.25 million.
2. Completion within 16 months.
3. Equipment warranty of at least 18 years.

### Q58
**difficulty:** Easy
**type:** Multi-Source Reasoning
**topic:** Operations Analysis

Based on Tab 2, which bid offers the lowest capital cost per megawatt of capacity?

- A) SunPeak
- B) Helios Grid
- C) Verde Power
- D) SunPeak and Verde Power are tied
- E) Cannot be determined

**answer:** C
**explanation:** Capital cost per megawatt equals total capital cost divided by capacity. All figures come from Tab 2; the memo (Tab 1) notes that Helios Grid has "the highest" cost per megawatt, which serves as a cross-check.

Computing the ratio for each bid:

- SunPeak: 60 / 50 = $1.20 million per MW
- Helios Grid: 52 / 40 = $1.30 million per MW
- Verde Power: 66 / 60 = $1.10 million per MW

Ranking in ascending order: $1.10M < $1.20M < $1.30M, which corresponds to Verde Power < SunPeak < Helios Grid. Verde Power, at $1.10 million per MW, is the lowest. This is also consistent with the memo's observation that Helios Grid is the most expensive per MW. Choice D is eliminated because SunPeak ($1.20M) and Verde Power ($1.10M) are not equal. Choice E is eliminated because both capacity and capital cost are explicitly given for every bidder, making the ratio fully determinable.

The correct answer is C.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q59
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Operations Analysis

Applying the shortlisting framework in Tab 3 to the data in Tab 2, which bid or bids advance to final negotiation?

- A) SunPeak only
- B) Helios Grid only
- C) SunPeak and Helios Grid
- D) SunPeak and Verde Power
- E) All three bids

**answer:** A
**explanation:** Tab 3 establishes a three-part conjunctive framework: a bid advances only if it satisfies all three criteria — capital cost of no more than $1.25 million per MW, completion within 16 months, and warranty of at least 18 years. Each bid is tested using Tab 2.

Capital cost per MW (computed in Q58): SunPeak $1.20M, Helios Grid $1.30M, Verde Power $1.10M.

Applying all three criteria:

- SunPeak: $1.20M (<= $1.25M, pass); 14 months (<= 16, pass); 20 years (>= 18, pass). Advances.
- Helios Grid: $1.30M (> $1.25M, fail). Disqualified on criterion 1, despite its 12-month schedule and 25-year warranty.
- Verde Power: $1.10M (pass); 18 months (> 16, fail). Disqualified on criterion 2, despite its low cost per MW.

Only SunPeak clears all three criteria. Choice B is wrong because Helios Grid fails the cost-per-MW ceiling. Choice C wrongly includes Helios Grid. Choice D wrongly includes Verde Power, which exceeds the 16-month completion limit. Choice E includes all three, but two bids each fail a distinct criterion. Each rejected bid is strong on the criteria where the other is weak — Helios Grid on schedule and warranty, Verde Power on cost — which is precisely why a conjunctive screen, requiring all three at once, leaves only SunPeak.

The correct answer is A.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q60
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Cross-Tab Inference

Based on the information across the three tabs, which of the following must be true?

- A) Verde Power offers the most total capacity of the three bids.
- B) Verde Power offers both the most total capacity and the longest warranty.
- C) Every bid meets the warranty minimum in the shortlisting framework.
- D) Helios Grid offers the lowest capital cost per megawatt.
- E) SunPeak's capital cost is the highest of the three bids.

**answer:** A
**explanation:** A "must be true" question requires that the credited statement follow necessarily from the data, while every other choice is contradicted by, or unsupported by, the exhibits.

Choice A. Tab 2 lists capacity as SunPeak 50 MW, Helios Grid 40 MW, Verde Power 60 MW. Ranking: 60 > 50 > 40, so Verde Power offers the most total capacity. The memo (Tab 1) corroborates this directly, stating Verde Power "offers the largest nameplate capacity of the three bids." This follows necessarily from the data and must be true.

Choice B. Verde Power does offer the most capacity (60 MW), but its warranty of 15 years is the shortest of the three (versus SunPeak 20 and Helios Grid 25), not the longest. The memo explicitly notes Verde Power has "the shortest warranty." Choice B is false.

Choice C. The framework's warranty minimum (Tab 3) is 18 years. Verde Power's warranty is 15 years, which is below 18. Therefore not every bid meets the minimum. Choice C is false.

Choice D. Cost per MW (Q58) is SunPeak $1.20M, Helios Grid $1.30M, Verde Power $1.10M. The lowest is Verde Power, not Helios Grid; in fact Helios Grid is the highest, as the memo notes. Choice D is false.

Choice E. Capital costs from Tab 2 are SunPeak $60M, Helios Grid $52M, Verde Power $66M. The highest is Verde Power ($66M), not SunPeak. Choice E is false.

Only choice A is directly and necessarily supported by the data: Verde Power's 60 MW exceeds both other bids.

The correct answer is A.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q61
**difficulty:** Hard
**type:** Multi-Source Reasoning
**topic:** Cost Projection

Suppose Calderon Energy needs 100 MW of total capacity. It awards Verde Power's full 60 MW bid and contracts SunPeak for the additional capacity needed to reach 100 MW, with SunPeak charging its stated cost per megawatt for that incremental capacity. Based on Tab 2, what is the approximate total capital cost?

- A) $108M
- B) $114M
- C) $120M
- D) $126M
- E) $132M

**answer:** B
**explanation:** **Governing principle.** Total capital cost is the sum of the cost of each awarded component. Verde Power's portion is its full bid as stated; SunPeak's portion is its per-megawatt rate applied to the incremental capacity required to close the gap to 100 MW.

**Identifying the data.** From Tab 2: Verde Power offers 60 MW for a capital cost of $66M. SunPeak's capital cost is $60M for 50 MW, which gives a cost per megawatt of 60 / 50 = $1.20 million per MW (the same figure computed in Q58). The 100 MW target is given in the question stem.

**Step 1: Verde Power's contribution.**

Verde Power supplies its full bid: 60 MW at a capital cost of $66M.

**Step 2: Incremental capacity required from SunPeak.**

100 MW (target) - 60 MW (Verde Power) = 40 MW must come from SunPeak.

**Step 3: SunPeak's cost for 40 MW.**

At $1.20 million per MW: 40 x 1.20 = $48M.

**Step 4: Total capital cost.**

66 + 48 = $114M.

**Ruling out the alternatives.** Choice C ($120M) results from applying SunPeak's $1.20M-per-MW rate to the entire 100 MW (100 x 1.20 = 120), ignoring that Verde Power's 60 MW comes at Verde Power's own bid price. Choice D ($126M) results from adding SunPeak's full bid of $60M (for 50 MW) to Verde Power's $66M, rather than charging SunPeak only for the 40 MW actually needed (66 + 60 = 126). Choices A ($108M) and E ($132M) do not follow from any correct combination of the stated figures. Only $66M (Verde Power full bid) plus $48M (40 MW from SunPeak at $1.20M/MW) yields the consistent total.

The correct answer is B.
**related_reading:** reading-di-05-multi-source-reasoning

---

## Set 19: Aldridge Foods — Plant Efficiency Review

### Tab 1: Operations Memo

**From:** Rosa Aldridge, VP Manufacturing
**To:** Plant Performance Committee
**Re:** Annual Plant Efficiency Screen

Ahead of next quarter's capacity-planning review, I want the committee to evaluate our four packaged-goods plants. Combined annual output across the four sites reached 1.98 million units this year.

A few observations from my initial read. Caldwell is our most labor-efficient site, producing more units per labor hour than any other plant. Eastvale, by contrast, carries the heaviest quality burden, with the highest defective-unit rate in the group — a problem that, together with its weak labor productivity, keeps it off our investment shortlist this year.

Please screen each plant against the board-approved efficiency criteria in Tab 3 before we meet. Only plants that clear all three criteria will be considered for capacity expansion.

### Tab 2: Plant Performance Summary

| Plant      | Annual Output (000 units) | Labor Hours (000) | Operating Cost ($M) | Defective-Unit Rate |
|------------|---------------------------|-------------------|---------------------|---------------------|
| Brookfield | 480                       | 240               | 7.2                 | 1.8%                |
| Caldwell   | 600                       | 250               | 9.0                 | 2.5%                |
| Dunbar     | 360                       | 200               | 6.3                 | 1.2%                |
| Eastvale   | 540                       | 300               | 8.1                 | 3.1%                |

### Tab 3: Efficiency-Screen Criteria (Board-Approved)

A plant qualifies as an expansion candidate only if it meets ALL of the following:

1. Output of at least 2.0 units per labor hour.
2. Operating cost per unit of no more than $16.00.
3. Defective-unit rate of no more than 2.5%.

### Q62
**difficulty:** Easy
**type:** Multi-Source Reasoning
**topic:** Operations Analysis

Based on Tab 2, which plant produced the most units per labor hour this year?

- A) Brookfield
- B) Caldwell
- C) Dunbar
- D) Eastvale
- E) Cannot be determined

**answer:** B
**explanation:** Output per labor hour equals annual output divided by labor hours. Both quantities in Tab 2 are expressed in thousands, so the thousands cancel and the ratio is directly comparable across plants. Tabs 1 and 3 are not required for the computation, though the memo's claim that Caldwell is "our most labor-efficient site" provides a useful cross-check.

Computing the ratio for each plant:

- Brookfield: 480 / 240 = 2.00 units per labor hour
- Caldwell: 600 / 250 = 2.40 units per labor hour
- Dunbar: 360 / 200 = 1.80 units per labor hour
- Eastvale: 540 / 300 = 1.80 units per labor hour

Ranking in descending order: 2.40 > 2.00 > 1.80 = 1.80, which corresponds to Caldwell first, Brookfield second, then Dunbar and Eastvale tied at the bottom. Caldwell, at 2.40 units per labor hour, is the maximum, consistent with the memo. Eastvale carries the largest labor base (300,000 hours) and might appear productive, but its output of 540,000 units spread over that base yields only 1.80 units per labor hour, tied for the lowest. Choice E is eliminated because both output and labor hours are explicitly given for every plant, making the ratio fully determinable.

The correct answer is B.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q63
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Operations Analysis

Applying the efficiency-screen criteria in Tab 3 to the data in Tab 2, which plant or plants qualify as expansion candidates?

- A) Caldwell only
- B) Brookfield and Caldwell
- C) Brookfield, Caldwell, and Eastvale
- D) Caldwell and Dunbar
- E) All four plants

**answer:** B
**explanation:** Tab 3 establishes a three-part conjunctive screen: a plant qualifies only if it satisfies all three criteria simultaneously — at least 2.0 units per labor hour, operating cost per unit of no more than $16.00, and a defective-unit rate of no more than 2.5%. Each plant is tested using the figures in Tab 2.

Output per labor hour (computed in Q62): Brookfield 2.00, Caldwell 2.40, Dunbar 1.80, Eastvale 1.80.

Operating cost per unit (operating cost divided by output; with cost in millions of dollars and output in thousands of units, cost per unit = cost in $M times 1,000,000, divided by output times 1,000):

- Brookfield: 7.2 / 480 (in thousands) = $15.00 per unit
- Caldwell: 9.0 / 600 = $15.00 per unit
- Dunbar: 6.3 / 360 = $17.50 per unit
- Eastvale: 8.1 / 540 = $15.00 per unit

Defective-unit rate (Tab 2): Brookfield 1.8%, Caldwell 2.5%, Dunbar 1.2%, Eastvale 3.1%.

Applying all three criteria:

- Brookfield: 2.00 (>= 2.0, pass); $15.00 (<= $16.00, pass); 1.8% (<= 2.5%, pass). Qualifies.
- Caldwell: 2.40 (pass); $15.00 (pass); 2.5% (<= 2.5%, pass — the threshold is inclusive). Qualifies.
- Dunbar: 1.80 (< 2.0, fail); also $17.50 cost per unit fails. Disqualified.
- Eastvale: 1.80 (< 2.0, fail); also 3.1% defect rate fails. Disqualified.

Only Brookfield and Caldwell clear all three criteria. Brookfield passes the labor-productivity criterion exactly at the 2.00 threshold, and Caldwell passes the defect criterion exactly at the 2.5% threshold; because both criteria are stated as "at least" and "no more than" respectively, the boundary cases qualify. Choice A omits Brookfield, which passes every criterion. Choice C wrongly includes Eastvale, which fails on both labor productivity (1.80 < 2.0) and defect rate (3.1% > 2.5%). Choice D includes Dunbar, which fails on labor productivity and cost per unit. Choice E includes both disqualified plants.

The correct answer is B.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q64
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Cross-Tab Inference

Based on the information across the three tabs, which of the following must be true?

- A) The plant with the highest output also has the highest operating cost per unit.
- B) Eastvale has both the highest defective-unit rate and the lowest output per labor hour among the four plants.
- C) Dunbar qualifies as an expansion candidate under the criteria in Tab 3.
- D) Every plant produces at least 2.0 units per labor hour.
- E) Brookfield has a higher operating cost per unit than Caldwell.

**answer:** B
**explanation:** A "must be true" question requires the credited statement to follow necessarily from the data, while every other choice is contradicted by, or unsupported by, the exhibits.

Choice A. The plant with the highest output is Caldwell (600,000 units, Tab 2). Caldwell's operating cost per unit is $15.00 (Q63), tied for the lowest, not the highest — Dunbar's $17.50 is the highest. Choice A is false.

Choice B. From Tab 2, Eastvale's defective-unit rate is 3.1%, the highest of the four (versus Brookfield 1.8%, Caldwell 2.5%, Dunbar 1.2%). From Q62, Eastvale's output per labor hour is 1.80, tied with Dunbar for the lowest; no plant produces fewer units per labor hour than Eastvale, so Eastvale holds the lowest position (a tie still satisfies "lowest"). The memo (Tab 1) corroborates both facts, noting Eastvale carries "the highest defective-unit rate" together with "weak labor productivity." Both halves of the statement hold, so choice B must be true.

Choice C. Dunbar fails two of the three criteria in Tab 3 — output per labor hour of 1.80 (< 2.0) and operating cost per unit of $17.50 (> $16.00) — as shown in Q63. Dunbar does not qualify. Choice C is false.

Choice D. Dunbar and Eastvale each produce 1.80 units per labor hour, below the 2.0 threshold. Therefore not every plant reaches 2.0. Choice D is false.

Choice E. Brookfield's operating cost per unit is $15.00 and Caldwell's is also $15.00 (Q63). They are equal, not higher for Brookfield. Choice E is false.

Only choice B is directly and necessarily supported by the data across the tabs.

The correct answer is B.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q65
**difficulty:** Hard
**type:** Multi-Source Reasoning
**topic:** Cost Projection

Suppose Aldridge Foods needs 720,000 units of additional output for a new contract. It assigns Caldwell its full annual output of 600,000 units and assigns Brookfield the remaining units needed, with Brookfield charged at its stated operating cost per unit for that incremental output. Based on Tab 2, what is the approximate total operating cost of fulfilling this 720,000-unit order?

- A) $9.0M
- B) $9.8M
- C) $10.8M
- D) $11.0M
- E) $12.0M

**answer:** C
**explanation:** **Governing principle.** Total operating cost is the sum of the cost of each assigned source. Caldwell's portion is its full annual operating cost as stated; Brookfield's portion is its per-unit operating cost applied to the incremental output required to close the gap to 720,000 units.

**Identifying the data.** From Tab 2: Caldwell produces 600,000 units at an annual operating cost of $9.0M. Brookfield's operating cost is $7.2M for 480,000 units, which gives a cost per unit of 7.2 / 480 (in thousands) = $15.00 per unit (the same figure computed in Q63). The 720,000-unit target is given in the question stem.

**Step 1: Caldwell's contribution.**

Caldwell supplies its full annual output of 600,000 units at an operating cost of $9.0M.

**Step 2: Incremental output required from Brookfield.**

720,000 (target) - 600,000 (Caldwell) = 120,000 units must come from Brookfield.

**Step 3: Brookfield's cost for 120,000 units.**

At $15.00 per unit: 120,000 x 15.00 = $1,800,000, or $1.8M.

**Step 4: Total operating cost.**

9.0 + 1.8 = $10.8M.

**Ruling out the alternatives.** Choice A ($9.0M) counts only Caldwell's cost and ignores the 120,000 units that must come from Brookfield. Choice E ($12.0M) results from charging all 800,000 units of the two plants' combined annual capacity at Brookfield's $15.00-per-unit rate (800,000 x 15.00 = $12.0M), which overshoots the 720,000-unit order. Choices B ($9.8M) and D ($11.0M) do not follow from any correct combination of the stated figures. Only $9.0M (Caldwell's full output) plus $1.8M (120,000 units from Brookfield at $15.00 per unit) yields the consistent total of $10.8M.

The correct answer is C.
**related_reading:** reading-di-05-multi-source-reasoning

---

## Set 20: Pinewood University — Scholarship Fund Allocation

### Tab 1: Allocation Memo

**From:** Marcus Vale, Director of Financial Aid
**To:** Scholarship Allocation Board
**Re:** Annual Scholarship Fund Distribution

This year's total scholarship fund reached $1,200,000, up from $1,000,000 last year. The increase let us raise every program's award pool above last year's level, and I want the board to confirm that the proposed distribution honors the trustees' allocation rules before we publish it.

For context, our two STEM programs — Engineering and Computer Science — continue to draw the largest applicant pools, and the trustees have asked that STEM remain the priority of the fund. The non-STEM programs, Business and Humanities, also grew this year. Please review the proposed distribution in Tab 2 against the rules in Tab 3.

### Tab 2: Proposed Distribution

| Program          | Applicants | Funded Last Year ($) | Funded This Year ($) | Awards Granted |
|------------------|------------|----------------------|----------------------|----------------|
| Engineering      | 320        | 360,000              | 420,000              | 120            |
| Computer Science | 280        | 300,000              | 360,000              | 90             |
| Business         | 240        | 200,000              | 240,000              | 80             |
| Humanities       | 160        | 140,000              | 180,000              | 60             |

Note: "Awards Granted" is the number of students funded this year. Engineering and Computer Science are STEM programs; Business and Humanities are non-STEM.

### Tab 3: Trustee Allocation Rules

A distribution is approved only if it satisfies ALL of the following:

1. No single program may receive more than 40% of the total fund.
2. Every program must receive at least as much as it received last year.
3. STEM programs combined must receive at least 50% of the total fund.

### Q66
**difficulty:** Easy
**type:** Multi-Source Reasoning
**topic:** Business Analysis

Based on Tab 2, which program had the largest applicant pool this year?

- A) Engineering
- B) Computer Science
- C) Business
- D) Humanities
- E) Cannot be determined

**answer:** A
**explanation:** This question is a direct lookup in Tab 2 (Proposed Distribution); no computation across tabs is required. The memo (Tab 1) provides supporting context, noting that the two STEM programs "continue to draw the largest applicant pools," but the exact figures come from the Applicants column of Tab 2.

The applicant counts are:

- Engineering: 320
- Computer Science: 280
- Business: 240
- Humanities: 160

Ranking in descending order: 320 > 280 > 240 > 160, which corresponds to Engineering > Computer Science > Business > Humanities. Engineering, with 320 applicants, has the largest pool. Computer Science is second at 280 and may attract attention as the other STEM program, but 280 < 320, so it does not hold the maximum. Choice E is eliminated because the applicant count is explicitly given for every program.

The correct answer is A.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q67
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Cross-Tab Inference

Based on the information across the three tabs, which of the following must be true?

- A) Every program received more funding this year than it did last year.
- B) Computer Science received the most total funding of any program this year.
- C) The program with the fewest applicants received the highest average award per student.
- D) Business received a larger share of the fund this year than Engineering did.
- E) The combined funding for the non-STEM programs exceeded the combined funding for the STEM programs.

**answer:** A
**explanation:** A "must be true" question requires the credited statement to follow necessarily from the data, while every other choice is contradicted by the exhibits.

Choice A. Comparing the "Funded This Year" and "Funded Last Year" columns in Tab 2 for each program: Engineering 420,000 vs 360,000; Computer Science 360,000 vs 300,000; Business 240,000 vs 200,000; Humanities 180,000 vs 140,000. In every case this year's figure strictly exceeds last year's. The memo (Tab 1) corroborates this, stating the increase "let us raise every program's award pool above last year's level." Choice A must be true.

Choice B. From Tab 2, this-year funding is Engineering 420,000, Computer Science 360,000, Business 240,000, Humanities 180,000. The most-funded program is Engineering (420,000), not Computer Science. Choice B is false.

Choice C. Average award per student equals funding this year divided by awards granted: Engineering 420,000 / 120 = $3,500; Computer Science 360,000 / 90 = $4,000; Business 240,000 / 80 = $3,000; Humanities 180,000 / 60 = $3,000. The program with the fewest applicants is Humanities (160), whose average award is $3,000 — the lowest, tied with Business, not the highest. The highest average award belongs to Computer Science ($4,000). Choice C is false.

Choice D. Business received $240,000 and Engineering received $420,000 (Tab 2). Because 240,000 < 420,000, Business's share is smaller than Engineering's, not larger. Choice D is false.

Choice E. Non-STEM (Business + Humanities) = 240,000 + 180,000 = $420,000. STEM (Engineering + Computer Science) = 420,000 + 360,000 = $780,000. Since 420,000 < 780,000, non-STEM funding did not exceed STEM funding. Choice E is false.

Only choice A is necessarily supported by the data.

The correct answer is A.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q68
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Policy Analysis

A trustee proposes an alternative distribution of the $1,200,000 fund: Engineering $520,000, Computer Science $300,000, Business $220,000, and Humanities $160,000. Applying the rules in Tab 3, how many of the three rules does this alternative distribution satisfy?

- A) 0
- B) 1
- C) 2
- D) 3
- E) Cannot be determined

**answer:** C
**explanation:** The three rules in Tab 3 must each be tested against the trustee's proposed figures, using the total fund of $1,200,000 (Tab 1) and last year's amounts from Tab 2. The proposal sums to 520,000 + 300,000 + 220,000 + 160,000 = $1,200,000, so it allocates the full fund.

**Rule 1: No single program may receive more than 40% of the total fund.**

The 40% cap is 0.40 x 1,200,000 = $480,000. Testing each program: Engineering 520,000 (> 480,000, violates); Computer Science 300,000 (25.0%, within cap); Business 220,000 (18.3%, within cap); Humanities 160,000 (13.3%, within cap). Engineering's $520,000 represents 520,000 / 1,200,000 = 43.3% of the fund, exceeding the 40% ceiling. Rule 1 is violated.

**Rule 2: Every program must receive at least as much as it received last year.**

Last year's amounts (Tab 2): Engineering 360,000, Computer Science 300,000, Business 200,000, Humanities 140,000. Testing: Engineering 520,000 >= 360,000 (pass); Computer Science 300,000 >= 300,000 (pass, equal satisfies "at least"); Business 220,000 >= 200,000 (pass); Humanities 160,000 >= 140,000 (pass). Rule 2 is satisfied.

**Rule 3: STEM programs combined must receive at least 50% of the total fund.**

The 50% threshold is 0.50 x 1,200,000 = $600,000. STEM combined = Engineering 520,000 + Computer Science 300,000 = $820,000, which is 820,000 / 1,200,000 = 68.3% of the fund. Since 820,000 >= 600,000, Rule 3 is satisfied.

**Summary.** Rule 1 is violated (Engineering exceeds the 40% cap); Rules 2 and 3 are satisfied. Exactly two of the three rules are met. Choice D is wrong because Rule 1 fails. Choices A and B understate the count. Choice E is wrong because every figure needed is provided.

The correct answer is C.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q69
**difficulty:** Hard
**type:** Multi-Source Reasoning
**topic:** Funding Projection

The Humanities department wants to fund every one of its applicants this year while keeping its average award per student unchanged from the level implied by Tab 2. Based on the data, approximately how much ADDITIONAL funding beyond its current this-year allocation would Humanities need?

- A) $120,000
- B) $180,000
- C) $300,000
- D) $360,000
- E) $480,000

**answer:** C
**explanation:** **Governing principle.** To fund every applicant at an unchanged average award, the required total equals the number of applicants multiplied by the current average award per student. The additional funding needed is that required total minus the current allocation.

**Identifying the data.** All figures come from Tab 2. Humanities has 160 applicants, a current this-year allocation of $180,000, and 60 awards granted this year.

**Step 1: Current average award per student.**

Average award = funding this year / awards granted = 180,000 / 60 = $3,000 per student.

**Step 2: Total required to fund all 160 applicants at $3,000 each.**

160 x 3,000 = $480,000.

**Step 3: Additional funding needed beyond the current allocation.**

480,000 (required) - 180,000 (current) = $300,000.

**Ruling out the alternatives.** Choice E ($480,000) is the total funding required to cover all 160 applicants, not the additional amount beyond the current allocation — it omits the subtraction of the $180,000 already allocated. Choice A ($120,000) corresponds to funding only the increase in award count (160 - 60 = 100 additional students) but miscomputes the dollar figure. Choice B ($180,000) merely restates the current allocation. Choice D ($360,000) does not follow from any correct combination of the figures. Only the full computation — 160 applicants at $3,000 each, less the $180,000 already provided — yields the additional requirement of $300,000.

The correct answer is C.
**related_reading:** reading-di-05-multi-source-reasoning


---

## Set 21: Cascade Freight — Rail vs. Truck Lane Analysis

### Tab 1: Logistics Memo

**From:** Dana Okafor, Director of Network Planning
**To:** Lane Managers
**Re:** Shifting outbound lanes from truck to intermodal rail

We are reviewing whether to shift outbound shipments on four high-volume lanes from full-truckload (truck) service to intermodal rail. Rail is generally cheaper on long hauls but carries a flat per-shipment terminal handling fee and adds transit days because of yard dwell time.

For this review, treat each shipment as a single full container of identical weight. Use the per-shipment cost formulas in Tab 3, the lane data in Tab 2, and the two decision rules below.

**Decision rules for moving a lane to rail:**

1. Rail's per-shipment cost must be strictly lower than truck's per-shipment cost on that lane.
2. The transit-time penalty (rail transit days minus truck transit days) on that lane must be no greater than 2 days.

A lane moves to rail only if BOTH rules are satisfied.

### Tab 2: Lane Data

| Lane              | Distance (mi) | Truck Rate ($/mi) | Truck Transit (days) | Rail Transit (days) |
|-------------------|---------------|-------------------|----------------------|---------------------|
| Portland–Boise    | 400           | 1.80              | 1                    | 3                   |
| Portland–Denver   | 1,200         | 2.25              | 3                    | 4                   |
| Portland–Dallas   | 2,000         | 2.10             | 4                    | 7                   |
| Portland–Chicago  | 2,200         | 2.05              | 4                    | 6                   |

### Tab 3: Cost Formulas

- **Truck per-shipment cost** = Distance (mi) × Truck Rate ($/mi).
- **Rail per-shipment cost** = $500 flat terminal handling fee + Distance (mi) × $1.20 per mile.

The flat $500 fee and the $1.20-per-mile rail rate are the same on every lane.

### Q70
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Cost Comparison

On how many of the four lanes is rail's per-shipment cost strictly lower than truck's per-shipment cost?

- A) 1
- B) 2
- C) 3
- D) 4
- E) Cannot be determined

**answer:** C
**explanation:** The cost comparison requires combining Tab 2 (distances and truck rates) with the per-shipment formulas in Tab 3. For each lane, truck cost is Distance × Truck Rate, and rail cost is $500 + Distance × $1.20. The decision-rule wording in Tab 1 ("strictly lower") confirms that ties would not count, though no ties arise here.

Computing both costs for each lane:

Portland–Boise: truck = 400 × 1.80 = $720; rail = 500 + 400 × 1.20 = 500 + 480 = $980. Since 980 > 720, rail is more expensive on this lane.

Portland–Denver: truck = 1,200 × 2.25 = $2,700; rail = 500 + 1,200 × 1.20 = 500 + 1,440 = $1,940. Since 1,940 < 2,700, rail is cheaper.

Portland–Dallas: truck = 2,000 × 2.10 = $4,200; rail = 500 + 2,000 × 1.20 = 500 + 2,400 = $2,900. Since 2,900 < 4,200, rail is cheaper.

Portland–Chicago: truck = 2,200 × 2.05 = $4,510; rail = 500 + 2,200 × 1.20 = 500 + 2,640 = $3,140. Since 3,140 < 4,510, rail is cheaper.

Rail is strictly cheaper on three lanes — Denver, Dallas, and Chicago — and more expensive on the short Boise lane, where the flat $500 fee is not offset by enough mileage savings. The structural reason is that rail's per-mile rate ($1.20) undercuts every truck rate, but the fixed $500 fee dominates on short distances; the break-even distance against, for example, the Boise truck rate of $1.80/mi is 500 / (1.80 − 1.20) = 500 / 0.60 ≈ 833 miles, and Boise's 400 miles falls below it.

Choice D overcounts by including Boise; choices A and B undercount. Choice E is wrong because every required figure is provided. Exactly three lanes favor rail on cost.

The correct answer is C.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q71
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Savings Projection

Cascade ships 6 full-container loads per week on the Portland–Denver lane. If all 6 were shifted from truck to rail, approximately what would the weekly cost savings be?

- A) $760
- B) $2,700
- C) $4,560
- D) $11,640
- E) $16,200

**answer:** C
**explanation:** Weekly savings equal the per-shipment savings on the lane multiplied by the number of weekly shipments. The per-shipment costs come from Tab 2 and Tab 3; the weekly load count comes from the question stem.

From the Portland–Denver row of Tab 2, distance is 1,200 miles and the truck rate is $2.25 per mile. Applying the Tab 3 formulas:

Truck per-shipment cost = 1,200 × 2.25 = $2,700.

Rail per-shipment cost = 500 + 1,200 × 1.20 = 500 + 1,440 = $1,940.

Per-shipment savings = 2,700 − 1,940 = $760.

The lane carries 6 loads per week, so weekly savings = 760 × 6 = $4,560.

Choice A ($760) reports the per-shipment savings without multiplying by the 6 weekly loads. Choice B ($2,700) is the truck cost of a single shipment, not a savings figure. Choice D ($11,640) results from multiplying the rail cost ($1,940) by 6 rather than the savings, and choice E ($16,200) multiplies the truck cost ($2,700) by 6. Only $4,560 reflects the per-shipment savings of $760 scaled to the 6 weekly shipments.

The correct answer is C.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q72
**difficulty:** Hard
**type:** Multi-Source Reasoning
**topic:** Multi-Constraint Filtering

Applying BOTH decision rules from Tab 1, how many of the four lanes should be moved to rail?

- A) 0
- B) 1
- C) 2
- D) 3
- E) 4

**answer:** C
**explanation:** Tab 1 imposes a conjunctive test: a lane moves to rail only if (Rule 1) rail's per-shipment cost is strictly lower than truck's, AND (Rule 2) the transit-time penalty — rail transit days minus truck transit days — is no greater than 2 days. Each lane is tested against both rules using Tab 2 and the Tab 3 formulas.

Rule 1 (cost) was established lane by lane: rail is cheaper on Denver ($1,940 vs. $2,700), Dallas ($2,900 vs. $4,200), and Chicago ($3,140 vs. $4,510), and more expensive on Boise ($980 vs. $720). So Boise fails Rule 1 immediately and is eliminated.

Rule 2 (transit penalty) is computed from the two transit-day columns in Tab 2:

- Portland–Boise: 3 − 1 = 2 days (passes Rule 2, but already failed Rule 1).
- Portland–Denver: 4 − 3 = 1 day. Since 1 ≤ 2, Rule 2 is satisfied.
- Portland–Dallas: 7 − 4 = 3 days. Since 3 > 2, Rule 2 is violated.
- Portland–Chicago: 6 − 4 = 2 days. Since 2 ≤ 2, Rule 2 is satisfied.

Combining both rules:

| Lane    | Rule 1 (rail cheaper) | Rule 2 (penalty ≤ 2) | Move to rail? |
|---------|-----------------------|----------------------|---------------|
| Boise   | Fail                  | Pass (2)             | No            |
| Denver  | Pass                  | Pass (1)             | Yes           |
| Dallas  | Pass                  | Fail (3)             | No            |
| Chicago | Pass                  | Pass (2)             | Yes           |

Only Denver and Chicago satisfy both rules. Dallas is the key trap: it offers the second-largest cost savings ($1,300 per shipment), which might tempt a solver to include it, but its 3-day transit penalty exceeds the 2-day cap and disqualifies it. Choice D (3) counts Dallas on cost alone; choice E (4) ignores both filters; choices A and B undercount. Exactly two lanes qualify.

The correct answer is C.
**related_reading:** reading-di-05-multi-source-reasoning

---

## Set 22: Helios Solar — Module Production Line Review

### Tab 1: Plant Briefing

**Subject:** Capacity-expansion screening across three module production lines
**Prepared by:** Manufacturing Engineering, Helios Solar

Our Phoenix plant runs three solar-module production lines. Each line runs 20 operating hours per day. Lines differ in throughput (modules started per hour) and in yield (the percentage of started modules that pass final inspection and become saleable). A module that fails inspection is scrapped and cannot be sold.

We are screening lines for a capital-expansion program. Capacity will be added only to lines that are both high-quality and high-volume, per the framework in Tab 3.

### Tab 2: Line Performance

| Line   | Modules Started per Hour | Yield (%) |
|--------|--------------------------|-----------|
| Line 1 | 200                      | 92        |
| Line 2 | 160                      | 97        |
| Line 3 | 240                      | 85        |

### Tab 3: Expansion Screening Framework

A line qualifies for the capacity-expansion program only if it satisfies BOTH:

- Yield is at least 90 percent.
- Good (saleable) module output is at least 3,000 modules per day.

"Good output per day" is defined as: Modules Started per Hour × 20 operating hours × Yield.

### Q73
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Cross-Tab Inference

Based on the data in the three tabs, which of the following must be true?

- A) Line 3 produces the most good modules per day despite having the lowest yield.
- B) The line with the highest yield also has the highest good output per day.
- C) Line 2 produces the most good modules per day.
- D) Every line produces at least 3,500 good modules per day.
- E) Line 1 has both the highest throughput and the highest yield.

**answer:** A
**explanation:** A "must be true" question requires the credited statement to follow necessarily from the data, while every other choice is contradicted by the exhibits. Tab 3 defines good output per day as Modules Started per Hour × 20 × Yield. Computing it for each line using Tab 2:

- Line 1: 200 × 20 × 0.92 = 4,000 × 0.92 = 3,680 good modules/day.
- Line 2: 160 × 20 × 0.97 = 3,200 × 0.97 = 3,104 good modules/day.
- Line 3: 240 × 20 × 0.85 = 4,800 × 0.85 = 4,080 good modules/day.

Choice A claims Line 3 produces the most good modules per day despite having the lowest yield. Line 3's good output of 4,080 is the largest of the three values (4,080 > 3,680 > 3,104), and its 85% yield is the lowest of the three. Line 3's very high throughput (240 started per hour) more than compensates for its weaker yield. Both halves of the statement are confirmed by the data, so A must be true.

Choice B claims the highest-yield line also has the highest good output. The highest yield belongs to Line 2 (97%), but Line 2 has the lowest good output (3,104). The highest good output belongs to Line 3 (4,080), which has the lowest yield. So B is false.

Choice C claims Line 2 produces the most good modules. Line 2's 3,104 is in fact the lowest of the three, so C is false.

Choice D claims every line produces at least 3,500 good modules per day. Line 2 produces only 3,104, which is below 3,500, so D is false.

Choice E claims Line 1 has both the highest throughput and the highest yield. Line 1's throughput of 200 is exceeded by Line 3's 240, and its 92% yield is exceeded by Line 2's 97%. Line 1 leads on neither metric, so E is false.

Only choice A is necessarily supported by the data.

The correct answer is A.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q74
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Throughput Calculation

Which line produces the greatest number of GOOD (saleable) modules per day?

- A) Line 1
- B) Line 2
- C) Line 3
- D) Line 1 and Line 3 are tied
- E) Cannot be determined

**answer:** C
**explanation:** Tab 3 supplies the governing definition: good output per day equals Modules Started per Hour × 20 operating hours × Yield. The required inputs — throughput and yield — are read from Tab 2.

Applying the formula to each line:

- Line 1: 200 × 20 × 0.92 = 3,680 good modules/day.
- Line 2: 160 × 20 × 0.97 = 3,104 good modules/day.
- Line 3: 240 × 20 × 0.85 = 4,080 good modules/day.

Ranking the three results: 4,080 > 3,680 > 3,104, which corresponds to Line 3 > Line 1 > Line 2. Line 3 produces the most saleable modules per day.

The trap in this item is yield. Line 3 has the lowest yield of the three lines at 85%, which might lead a solver to dismiss it; and Line 2 has the highest yield at 97%, which might appear to make it the leader. But yield alone does not determine output — it must be applied to throughput. Line 3's high throughput of 240 modules started per hour produces 4,800 gross modules per day, and even after scrapping 15%, the 4,080 saleable units exceed every other line's good output. Choice D is impossible because 3,680 (Line 1) does not equal 4,080 (Line 3), and choice E is wrong because all needed data are present.

The correct answer is C.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q75
**difficulty:** Hard
**type:** Multi-Source Reasoning
**topic:** Multi-Constraint Screening

Applying the screening framework in Tab 3, which line(s) qualify for the capacity-expansion program?

- A) Line 1 only
- B) Line 3 only
- C) Line 1 and Line 3
- D) Line 1 and Line 2
- E) All three lines

**answer:** D
**explanation:** Tab 3 establishes a conjunctive test: a line qualifies only if BOTH (i) its yield is at least 90 percent, AND (ii) its good output is at least 3,000 modules per day. Failure on either condition disqualifies the line. Good output per day is computed as Modules Started per Hour × 20 × Yield, using Tab 2.

Line 1. Yield = 92%; since 92 ≥ 90, condition (i) is satisfied. Good output = 200 × 20 × 0.92 = 3,680; since 3,680 ≥ 3,000, condition (ii) is satisfied. Both hold — Line 1 qualifies.

Line 2. Yield = 97%; since 97 ≥ 90, condition (i) is satisfied. Good output = 160 × 20 × 0.97 = 3,104; since 3,104 ≥ 3,000, condition (ii) is satisfied. Both hold — Line 2 qualifies.

Line 3. Yield = 85%; since 85 < 90, condition (i) fails. The conjunctive test is therefore not met, and Line 3 is disqualified regardless of its good output. (For completeness, its good output of 4,080 is the highest of the three and clears the 3,000 bar, but the yield gate stops it.)

| Line   | Yield ≥ 90% | Good output ≥ 3,000 | Qualifies? |
|--------|-------------|---------------------|------------|
| Line 1 | Pass (92%)  | Pass (3,680)        | Yes        |
| Line 2 | Pass (97%)  | Pass (3,104)        | Yes        |
| Line 3 | Fail (85%)  | Pass (4,080)        | No         |

Exactly two lines — Line 1 and Line 2 — satisfy both conditions. Choice B and choice C both include Line 3, the highest-volume line, which is the central trap: high output cannot rescue a line that fails the yield gate. Choice A omits the qualifying Line 2, and choice E wrongly admits Line 3.

The correct answer is D.
**related_reading:** reading-di-05-multi-source-reasoning

---

## Set 23: Brightline Publishing — Subscription Tier Review

### Tab 1: Revenue Memo

**From:** Priya Raman, Head of Consumer Revenue
**To:** Subscriptions Working Group

Brightline sells three subscription tiers: Digital, Print+Digital, and Premium. Before we set next year's pricing, the working group should understand where our monthly recurring revenue actually comes from. A common misconception internally is that the tier with the most subscribers drives the most revenue — that is not necessarily so once price differences are accounted for.

All figures in Tab 2 are current as of the most recent monthly close. Treat each subscriber as paying the full listed monthly price.

### Tab 2: Tier Snapshot

| Tier          | Monthly Price ($) | Subscribers | Monthly Churn (%) |
|---------------|-------------------|-------------|-------------------|
| Digital       | 8                 | 50,000      | 5.0               |
| Print+Digital | 20                | 30,000      | 3.0               |
| Premium       | 35                | 12,000      | 2.0               |

### Tab 3: Definitions

- **Monthly recurring revenue (MRR) for a tier** = Monthly Price × Subscribers.
- **Monthly churn** is the percentage of a tier's subscribers who cancel during the month.

### Q76
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Revenue Attribution

Which tier generates the most monthly recurring revenue?

- A) Digital
- B) Print+Digital
- C) Premium
- D) Digital and Premium are approximately tied
- E) Cannot be determined

**answer:** B
**explanation:** Tab 3 defines monthly recurring revenue (MRR) for a tier as Monthly Price × Subscribers. The two inputs come from Tab 2. The memo in Tab 1 flags the trap explicitly: the tier with the most subscribers is not necessarily the highest-revenue tier.

Computing MRR for each tier:

- Digital: 8 × 50,000 = $400,000.
- Print+Digital: 20 × 30,000 = $600,000.
- Premium: 35 × 12,000 = $420,000.

Ranking the three results: $600,000 > $420,000 > $400,000, which corresponds to Print+Digital > Premium > Digital. Print+Digital generates the most monthly recurring revenue.

This is precisely the situation the memo anticipates. Digital has by far the largest subscriber base (50,000), which might suggest it leads on revenue, but its low $8 price holds its MRR to $400,000 — actually the lowest of the three. Premium commands the highest price ($35), which might also suggest it leads, but its small base of 12,000 caps its MRR at $420,000. Print+Digital's middle price ($20) combined with a substantial base (30,000) produces the largest MRR. Choice A (Digital) is the most-subscribers trap, and choice C (Premium) is the highest-price trap. Choice D fails because $400,000 (Digital) and $420,000 (Premium) are not the leaders and are not tied with the winner. Choice E is wrong because both inputs are given.

The correct answer is B.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q77
**difficulty:** Hard
**type:** Multi-Source Reasoning
**topic:** Scenario Modeling

Suppose Brightline raises the Premium price by 20 percent and, as a result, loses 10 percent of its Premium subscribers, with all other tiers unchanged. Approximately how would Premium's monthly recurring revenue change?

- A) It would fall by about $42,000.
- B) It would be unchanged.
- C) It would rise by about $33,600.
- D) It would rise by about $84,000.
- E) It would rise by about $420,000.

**answer:** C
**explanation:** Premium's monthly recurring revenue (MRR), per Tab 3, is Monthly Price × Subscribers. The scenario changes both factors: price rises 20 percent and subscribers fall 10 percent. The new MRR equals the old MRR multiplied by the combined factor (1 + 0.20) × (1 − 0.10), and the change is new MRR minus old MRR.

From Tab 2, Premium's current price is $35 and its current subscriber count is 12,000, so current MRR = 35 × 12,000 = $420,000.

Applying the scenario:

- New price = 35 × 1.20 = $42.
- New subscribers = 12,000 × 0.90 = 10,800.
- New MRR = 42 × 10,800 = $453,600.

Change in MRR = 453,600 − 420,000 = +$33,600, an increase. Equivalently, the combined multiplier is 1.20 × 0.90 = 1.08, an 8 percent net increase: 420,000 × 0.08 = $33,600.

Choice B (unchanged) is the trap for a solver who assumes a 20 percent price increase and a 10 percent subscriber loss roughly cancel; they do not, because the percentages are applied multiplicatively and the price increase is larger, leaving a net 8 percent gain. Choice A treats the change as a decline, the wrong direction. Choice D ($84,000) doubles the correct change, as if applying a 20 percent gain without the offsetting 10 percent loss (420,000 × 0.20 = 84,000). Choice E ($420,000) restates the entire current MRR rather than the change. The correct net effect is an increase of about $33,600.

The correct answer is C.
**related_reading:** reading-di-05-multi-source-reasoning

---

## Set 24: Vanguard Athletics — Store Cohort Review

### Tab 1: Real Estate Memo

**From:** Leo Tanaka, VP Retail Strategy
**To:** Store Operations Committee

The committee is reviewing the four stores in our newest cohort before approving any further leases in those markets. For each store we track annual revenue, annual operating cost, the one-time buildout cost we paid to open it, and selling-floor square footage.

Please assess each store on profitability, capital payback, and selling productivity, using the definitions in Tab 3 and the review flag described there.

### Tab 2: Store Cohort Data

| Store      | Annual Revenue ($K) | Annual Operating Cost ($K) | Buildout Cost ($K) | Selling Floor (sq ft) |
|------------|---------------------|----------------------------|--------------------|-----------------------|
| Riverside  | 1,200               | 900                        | 600                | 4,000                 |
| Harborview | 1,800               | 1,260                      | 900                | 6,000                 |
| Oakdale    | 840                 | 720                        | 500                | 4,200                 |
| Summit     | 1,500               | 975                        | 1,100              | 4,000                 |

### Tab 3: Definitions and Review Flag

- **Annual operating profit** = Annual Revenue − Annual Operating Cost.
- **Payback period (years)** = Buildout Cost / Annual operating profit.
- **Sales per square foot ($)** = Annual Revenue (in dollars) / Selling Floor (sq ft).
- **Review flag:** a store is flagged for review if its sales per square foot is below $250 OR its payback period exceeds 3 years.

### Q78
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Cross-Tab Inference

Based on the data in the tabs, which of the following must be true?

- A) The store with the highest revenue also has the highest sales per square foot.
- B) Summit has the highest sales per square foot of the four stores.
- C) Oakdale has both the highest annual operating profit and the shortest payback period.
- D) Every store has a payback period under 3 years.
- E) Harborview and Summit have equal annual operating profit.

**answer:** B
**explanation:** A "must be true" question requires the credited statement to follow necessarily from the data, while the others are contradicted by the exhibits. Using the Tab 3 definitions on the Tab 2 figures:

Annual operating profit (Revenue − Operating Cost):
- Riverside: 1,200 − 900 = $300K.
- Harborview: 1,800 − 1,260 = $540K.
- Oakdale: 840 − 720 = $120K.
- Summit: 1,500 − 975 = $525K.

Payback period (Buildout / profit):
- Riverside: 600 / 300 = 2.00 yr.
- Harborview: 900 / 540 ≈ 1.67 yr.
- Oakdale: 500 / 120 ≈ 4.17 yr.
- Summit: 1,100 / 525 ≈ 2.10 yr.

Sales per square foot (Revenue in dollars / sq ft):
- Riverside: 1,200,000 / 4,000 = $300.
- Harborview: 1,800,000 / 6,000 = $300.
- Oakdale: 840,000 / 4,200 = $200.
- Summit: 1,500,000 / 4,000 = $375.

Choice A claims the highest-revenue store also has the highest sales per square foot. The highest-revenue store is Harborview ($1,800K), but Harborview's sales per square foot is $300, which is below Summit's $375. The highest sales per square foot belongs to Summit, not the highest-revenue store, because Harborview also has the largest selling floor (6,000 sq ft), diluting its productivity. Choice A is false.

Choice B claims Summit has the highest sales per square foot. Summit's $375 exceeds Riverside's $300, Harborview's $300, and Oakdale's $200. Summit is the unique maximum, so B is true.

Choice C claims Oakdale has both the highest profit and the shortest payback. Oakdale has the lowest profit ($120K) and the longest payback (4.17 yr), the opposite of the claim, so C is false.

Choice D claims every store's payback is under 3 years. Oakdale's payback is 4.17 years, so D is false.

Choice E claims Harborview and Summit have equal profit. Harborview earns $540K and Summit $525K; 540 ≠ 525, so E is false.

Only choice B is necessarily supported by the data: Summit leads on sales per square foot at $375.

The correct answer is B.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q79
**difficulty:** Hard
**type:** Multi-Source Reasoning
**topic:** Multi-Criterion Flagging

Applying the review flag defined in Tab 3, how many of the four stores are flagged for review?

- A) 0
- B) 1
- C) 2
- D) 3
- E) 4

**answer:** B
**explanation:** Tab 3 defines the review flag as a disjunctive condition: a store is flagged if its sales per square foot is below $250 OR its payback period exceeds 3 years. A store avoids the flag only if it clears BOTH thresholds — sales per square foot of at least $250 and payback of at most 3 years. Each store is tested using the Tab 3 definitions applied to Tab 2.

First, the two metrics for each store.

Annual operating profit (needed for payback) = Revenue − Operating Cost:
- Riverside: $300K; Harborview: $540K; Oakdale: $120K; Summit: $525K.

Payback period = Buildout / profit:
- Riverside: 600 / 300 = 2.00 yr.
- Harborview: 900 / 540 ≈ 1.67 yr.
- Oakdale: 500 / 120 ≈ 4.17 yr.
- Summit: 1,100 / 525 ≈ 2.10 yr.

Sales per square foot = Revenue (in dollars) / sq ft:
- Riverside: 1,200,000 / 4,000 = $300.
- Harborview: 1,800,000 / 6,000 = $300.
- Oakdale: 840,000 / 4,200 = $200.
- Summit: 1,500,000 / 4,000 = $375.

Now applying the disjunctive flag (flag if sales/sq ft < $250 OR payback > 3 yr):

| Store      | Sales/sq ft | < $250? | Payback (yr) | > 3 yr? | Flagged? |
|------------|-------------|---------|--------------|---------|----------|
| Riverside  | $300        | No      | 2.00         | No      | No       |
| Harborview | $300        | No      | 1.67         | No      | No       |
| Oakdale    | $200        | Yes     | 4.17         | Yes     | Yes      |
| Summit     | $375        | No      | 2.10         | No      | No       |

Only Oakdale trips the flag — and it trips both halves of the OR condition at once: its $200 sales per square foot is below the $250 floor, and its 4.17-year payback exceeds the 3-year limit. The remaining three stores clear both thresholds and are not flagged. The trap is to misread the flag as conjunctive (requiring both failures) or to over-apply it; here the disjunction happens to catch a single store because only Oakdale fails on either dimension. Choices C, D, and E overcount, and choice A overlooks Oakdale entirely.

The correct answer is B.
**related_reading:** reading-di-05-multi-source-reasoning

---

## Set 25: Meridian Air — Route Performance Review

### Tab 1: Network Planning Memo

**From:** Priya Anand, Director of Network Planning
**To:** Route Profitability Committee

The committee is reviewing five domestic routes ahead of the autumn schedule. For each route we track the number of weekly round-trip flights, the average number of seats sold per flight, the average fare collected per sold seat, and the fully allocated cost of operating one round-trip flight.

We are under pressure to free up two aircraft for a new coastal market, so two routes will likely be trimmed. Please assess each route using the definitions in Tab 3 and identify which routes fall below our profitability standard. Note that every aircraft we operate seats 180 passengers, so a route's load factor tells us how full its flights run on average.

### Tab 2: Route Operating Data

| Route          | Weekly Round Trips | Avg Seats Sold / Flight | Avg Fare / Seat ($) | Cost / Round Trip ($) |
|----------------|--------------------|-------------------------|---------------------|-----------------------|
| Cedar–Brook    | 14                 | 153                     | 210                 | 24,000                |
| Cedar–Glen     | 10                 | 99                      | 240                 | 23,000                |
| Brook–Harbor   | 21                 | 126                     | 180                 | 19,500                |
| Glen–Harbor    | 7                  | 162                     | 260                 | 36,000                |
| Brook–Summit   | 12                 | 90                      | 150                 | 14,000                |

### Tab 3: Definitions and Standard

- **Revenue per round trip ($)** = Avg Seats Sold per Flight × Avg Fare per Seat.
- **Profit per round trip ($)** = Revenue per round trip − Cost per round trip.
- **Load factor (%)** = Avg Seats Sold per Flight / 180.
- **Weekly route profit ($)** = Profit per round trip × Weekly Round Trips.
- **Profitability standard:** a route meets the standard only if BOTH its profit per round trip is positive AND its load factor is at least 60%. A route that fails either test is a candidate for trimming.

### Q80
**difficulty:** Hard
**type:** Multi-Source Reasoning
**topic:** Multi-Criterion Flagging

Applying the profitability standard in Tab 3 to the data in Tab 2, how many of the five routes are candidates for trimming (that is, fail at least one of the two tests)?

- A) 1
- B) 2
- C) 3
- D) 4
- E) 5

**answer:** B
**fastest_path:** Check each route against both tests: positive profit per trip and at least 108 seats sold, because 60% of 180 is 108.
**explanation:** Cedar-Glen sells 99 seats, so its 55% load factor fails even though revenue of 99 x $240 = $23,760 exceeds its $23,000 cost. Brook-Summit sells 90 seats, a 50% load factor, and loses $500 per trip because 90 x $150 = $13,500 against $14,000 cost. The other three routes have positive per-trip profit and load factors of 70% or more. Exactly two routes fail at least one test, so B is correct.
**common_trap:** Checking profitability but forgetting that a route must also meet the 60% load-factor threshold.
**takeaway:** For an AND standard, test every candidate against every condition and count any failure once.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q81
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Business Analysis

Using the Tab 3 definitions, which route generates the highest weekly route profit?

- A) Cedar–Brook
- B) Cedar–Glen
- C) Brook–Harbor
- D) Glen–Harbor
- E) Brook–Summit

**answer:** A
**explanation:** Weekly route profit is defined in Tab 3 as profit per round trip multiplied by the number of weekly round trips. Profit per round trip is revenue per round trip (Avg Seats Sold × Avg Fare) minus cost per round trip. All inputs come from Tab 2.

Profit per round trip (computed in the prior question):
- Cedar–Brook: 153 × 210 − 24,000 = 32,130 − 24,000 = 8,130.
- Cedar–Glen: 99 × 240 − 23,000 = 23,760 − 23,000 = 760.
- Brook–Harbor: 126 × 180 − 19,500 = 22,680 − 19,500 = 3,180.
- Glen–Harbor: 162 × 260 − 36,000 = 42,120 − 36,000 = 6,120.
- Brook–Summit: 90 × 150 − 14,000 = 13,500 − 14,000 = −500.

Weekly route profit = profit per round trip × weekly round trips:
- Cedar–Brook: 8,130 × 14 = 113,820.
- Cedar–Glen: 760 × 10 = 7,600.
- Brook–Harbor: 3,180 × 21 = 66,780.
- Glen–Harbor: 6,120 × 7 = 42,840.
- Brook–Summit: −500 × 12 = −6,000.

Ranking: 113,820 > 66,780 > 42,840 > 7,600 > −6,000. Cedar–Brook leads decisively at $113,820 per week. Glen–Harbor has the second-highest per-trip profit ($6,120) but operates only 7 weekly round trips, so its weekly total ($42,840) trails both Cedar–Brook and Brook–Harbor. Brook–Harbor is a strong second on weekly profit because its high frequency (21 trips) compounds a moderate per-trip profit. The trap of selecting Glen–Harbor (highest fare and highest per-trip profit margin per seat) is defused by the frequency weighting. Cedar–Brook, with both a healthy per-trip profit and the second-highest frequency, produces the largest weekly figure.

The correct answer is A.
**related_reading:** reading-di-05-multi-source-reasoning

---

## Set 26: Brightseed Agriculture — Trial Plot Yield Study

### Tab 1: Agronomy Briefing

**From:** Dr. Helena Wirth, Head of Field Research
**To:** Product Development Group

We tested four seed treatments (T1–T4) plus an untreated control on standardized one-hectare plots over a single growing season. Each treatment was applied to several replicate plots; the table reports the mean yield across replicates and the input cost per hectare for each treatment.

Our adoption rule is simple but strict: we advance a treatment to multi-site trials only if it delivers a yield uplift over the control that is both statistically significant (p < 0.05 versus control) and economically worthwhile. "Economically worthwhile" is defined in Tab 3. Wheat sold at the assumed price of $250 per tonne this season.

### Tab 2: Trial Results

| Treatment | Mean Yield (tonnes/ha) | Input Cost ($/ha) | Yield p-value vs Control |
|-----------|------------------------|-------------------|--------------------------|
| Control   | 6.00                   | 0                 | —                        |
| T1        | 6.40                   | 60                | 0.21                     |
| T2        | 6.90                   | 120               | 0.03                     |
| T3        | 7.50                   | 300               | 0.01                     |
| T4        | 7.20                   | 250               | 0.04                     |

### Tab 3: Adoption Economics

- **Yield uplift (tonnes/ha)** = Treatment mean yield − Control mean yield.
- **Incremental revenue ($/ha)** = Yield uplift × wheat price ($250/tonne).
- **Net economic benefit ($/ha)** = Incremental revenue − Input cost.
- **Economically worthwhile:** net economic benefit per hectare is at least $50.
- **Advancement rule:** advance a treatment only if it is BOTH statistically significant (p < 0.05 vs control) AND economically worthwhile.

### Q82
**difficulty:** Hard
**type:** Multi-Source Reasoning
**topic:** Multi-Criterion Flagging

Applying the advancement rule, exactly which treatments should be advanced to multi-site trials?

- A) T2 only
- B) T2 and T3
- C) T2 and T4
- D) T3 and T4
- E) T2, T3, and T4

**answer:** E
**fastest_path:** For T2-T4, compute uplift x $250 minus input cost, then pair that result with p < 0.05.
**explanation:** T1 is not significant because p = 0.21. T2 earns 0.9 x $250 - $120 = $105 per hectare and has p = 0.03. T3 earns 1.5 x $250 - $300 = $75 and has p = 0.01. T4 earns 1.2 x $250 - $250 = $50 and has p = 0.04. T2, T3, and T4 each meet both the significance and minimum-$50 economic tests, so E is correct.
**common_trap:** Advancing a treatment for high yield alone without subtracting its input cost or checking statistical significance.
**takeaway:** When advancement requires two conditions, compute the economic test and significance test separately for every treatment.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q83
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Business Analysis

Which treatment delivers the highest net economic benefit per hectare?

- A) T1
- B) T2
- C) T3
- D) T4
- E) Control

**answer:** B
**explanation:** Net economic benefit per hectare is defined in Tab 3 as incremental revenue minus input cost, where incremental revenue equals yield uplift over the control multiplied by the $250/tonne wheat price (Tab 1). All figures come from Tab 2.

Computing net economic benefit for each treatment:
- Control: uplift = 0; revenue = $0; cost = $0; net = $0.
- T1: uplift = 6.40 − 6.00 = 0.40; revenue = 0.40 × 250 = $100; net = 100 − 60 = $40.
- T2: uplift = 6.90 − 6.00 = 0.90; revenue = 0.90 × 250 = $225; net = 225 − 120 = $105.
- T3: uplift = 7.50 − 6.00 = 1.50; revenue = 1.50 × 250 = $375; net = 375 − 300 = $75.
- T4: uplift = 7.20 − 6.00 = 1.20; revenue = 1.20 × 250 = $300; net = 300 − 250 = $50.

Ranking the net benefits: $105 (T2) > $75 (T3) > $50 (T4) > $40 (T1) > $0 (Control). T2 produces the highest net economic benefit at $105/ha.

The instructive trap is T3, which posts the highest absolute yield (7.50 t/ha) and the highest incremental revenue ($375), so a solver anchoring on yield or top-line revenue would pick it. But T3's input cost of $300 is steep, netting only $75. T2 pairs a solid 0.90 t/ha uplift with a modest $120 input cost, so its net benefit edges out T3 by $30/ha. T4 is squeezed similarly by its $250 cost. The control and T1 trail. Net of costs, the moderate-yield, low-cost treatment T2 wins.

The correct answer is B.
**related_reading:** reading-di-05-multi-source-reasoning

---

## Set 27: Stratus Cloud — Subscription Plan Migration

### Tab 1: Pricing Team Memo

**From:** Marco Ferreira, Head of Monetization
**To:** Revenue Operations

We are migrating customers off our legacy "Flex" plan onto three new tiers. The committee wants to understand the revenue impact before we send migration notices. The tabs give the current Flex distribution, the new tier prices, and the migration mapping rules. All prices are monthly per seat. Assume every customer migrates exactly as the rules specify and that seat counts do not change.

### Tab 2: Current Flex Customer Base

| Segment      | Number of Customers | Seats per Customer | Current Flex Price ($/seat/mo) |
|--------------|---------------------|--------------------|--------------------------------|
| Starter      | 500                 | 5                  | 12                             |
| Growth       | 300                 | 20                 | 12                             |
| Scale        | 120                 | 50                 | 12                             |
| Enterprise   | 80                  | 200                | 12                             |

### Tab 3: New Tiers and Migration Rules

New monthly per-seat prices:

| New Tier   | Price ($/seat/mo) |
|------------|-------------------|
| Essential  | 10                |
| Standard   | 15                |
| Premium    | 22                |

Migration mapping rules:
- Customers with fewer than 10 seats migrate to **Essential**.
- Customers with 10 to 99 seats (inclusive) migrate to **Standard**.
- Customers with 100 or more seats migrate to **Premium**.

### Q84
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Volume Calculation

Under the migration rules, what is the total number of seats that will be migrated onto the Standard tier?

- A) 2,500
- B) 6,000
- C) 12,000
- D) 16,000
- E) 18,000

**answer:** C
**explanation:** The Standard tier receives customers with 10 to 99 seats inclusive (Tab 3). The task is to identify which Tab 2 segments fall in that seat range, then sum their seats. Prices are irrelevant to a pure seat count.

Mapping each segment to a tier by seats per customer:
- Starter: 5 seats per customer → fewer than 10 → Essential. (Not Standard.)
- Growth: 20 seats per customer → between 10 and 99 → Standard.
- Scale: 50 seats per customer → between 10 and 99 → Standard.
- Enterprise: 200 seats per customer → 100 or more → Premium. (Not Standard.)

Only the Growth and Scale segments migrate to Standard. Total seats = customers × seats per customer:
- Growth: 300 × 20 = 6,000 seats.
- Scale: 120 × 50 = 6,000 seats.

Standard total = 6,000 + 6,000 = 12,000 seats.

Checking the distractors: choice B (6,000) captures only one of the two qualifying segments. Choice A (2,500) is the Starter segment's seats (500 × 5), which migrate to Essential, not Standard. Choice D (16,000) erroneously adds Enterprise's 16,000 seats (80 × 200), which actually go to Premium. Choice E (18,000) adds Enterprise's seats to one Standard segment. Only Growth and Scale belong on Standard, giving 12,000 seats.

The correct answer is C.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q85
**difficulty:** Hard
**type:** Multi-Source Reasoning
**topic:** Cross-Tab Inference

Considering the migration from current Flex pricing to the new tiers, what is the net change in total monthly revenue across the entire customer base?

- A) An increase of $31,000
- B) An increase of $36,000
- C) An increase of $160,000
- D) An increase of $191,000
- E) An increase of $196,000

**answer:** D
**explanation:** Net change in monthly revenue equals new total monthly revenue minus current total monthly revenue. The cleanest path is to compute, for each segment, the per-seat price change (new tier price − $12 Flex price) and multiply by that segment's total seats. Current prices come from Tab 2; new prices and the migration mapping come from Tab 3.

First, total seats per segment (customers × seats per customer):
- Starter: 500 × 5 = 2,500 seats → migrates to Essential ($10).
- Growth: 300 × 20 = 6,000 seats → migrates to Standard ($15).
- Scale: 120 × 50 = 6,000 seats → migrates to Standard ($15).
- Enterprise: 80 × 200 = 16,000 seats → migrates to Premium ($22).

Net change via per-seat price deltas:
- Starter → Essential: (10 − 12) × 2,500 = −$5,000.
- Growth → Standard: (15 − 12) × 6,000 = +$18,000.
- Scale → Standard: (15 − 12) × 6,000 = +$18,000.
- Enterprise → Premium: (22 − 12) × 16,000 = +$160,000.
- Net change = −5,000 + 18,000 + 18,000 + 160,000 = +$191,000.

Cross-check via totals. Current revenue: all 30,500 seats at $12 = $366,000. New revenue: 2,500 × 10 + 12,000 × 15 + 16,000 × 22 = 25,000 + 180,000 + 352,000 = $557,000. Difference = 557,000 − 366,000 = +$191,000, confirming the per-seat method.

The distractors isolate partial computations. Choice C ($160,000) counts only the Enterprise repricing and ignores the Essential and Standard segments. Choice B ($36,000) captures only the two Standard segments' gains ($18,000 + $18,000) and drops both Enterprise and Essential. Choice A ($31,000) is the non-Enterprise net (−5,000 + 18,000 + 18,000), omitting the dominant Premium effect. Choice E ($196,000) forgets that the Starter segment loses $5,000 (treating its move as zero rather than negative), overstating the total by exactly that $5,000. The full, correctly signed total is +$191,000.

The correct answer is D.
**related_reading:** reading-di-05-multi-source-reasoning

---

## Set 28: Aurora Health System — Clinic Wait-Time Audit

### Tab 1: Operations Memo

**From:** Dana Okeke, Director of Patient Access
**To:** Clinic Site Leads

We audited five outpatient clinics last quarter. For each clinic we recorded the average patient wait time (minutes), the number of providers on staff, the average daily patient visits, and the patient satisfaction score (0–100). The board has asked us to identify clinics needing intervention. Use the targets in Tab 3.

### Tab 2: Clinic Audit Data

| Clinic     | Avg Wait (min) | Providers | Avg Daily Visits | Satisfaction (0–100) |
|------------|----------------|-----------|------------------|----------------------|
| Northgate  | 18             | 6         | 120              | 88                   |
| Eastpark   | 35             | 4         | 132              | 71                   |
| Westside   | 22             | 5         | 90               | 84                   |
| Southbay   | 41             | 7         | 175              | 66                   |
| Midtown    | 27             | 5         | 110              | 79                   |

### Tab 3: Board Targets and Intervention Rule

- **Visits per provider** = Avg Daily Visits / Providers.
- **Targets:** average wait time should be at most 30 minutes; satisfaction should be at least 75; visits per provider should be at most 25.
- **Intervention rule:** a clinic is flagged for intervention if it misses two or more of the three targets.

### Q86
**difficulty:** Hard
**type:** Multi-Source Reasoning
**topic:** Multi-Criterion Flagging

Applying the intervention rule in Tab 3, how many of the five clinics are flagged for intervention?

- A) 1
- B) 2
- C) 3
- D) 4
- E) 5

**answer:** B
**fastest_path:** For each clinic, mark failures in wait, satisfaction, and visits/provider; flag only rows with at least two failures.
**explanation:** Northgate passes all three targets. Eastpark fails wait (35), satisfaction (71), and visits/provider (132/4 = 33), so it is flagged. Westside passes all three. Southbay fails wait (41) and satisfaction (66) but meets visits/provider at 175/7 = 25, so it is flagged. Midtown passes with wait 27, satisfaction 79, and 110/5 = 22 visits/provider. Two clinics are flagged, so B is correct.
**common_trap:** Treating a clinic that misses one target as flagged even though intervention requires at least two misses.
**takeaway:** Convert every row into a count of failed conditions before applying a threshold-based intervention rule.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q87
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Cross-Tab Inference

Based on the data in the tabs, which of the following statements must be true?

- A) The clinic with the most providers has the lowest visits per provider.
- B) Westside has the highest visits per provider of the five clinics.
- C) Every clinic that meets the wait-time target also meets the satisfaction target.
- D) Every clinic meets the visits-per-provider target.
- E) No clinic meets all three board targets.

**answer:** C
**explanation:** A "must be true" question requires the credited statement to follow necessarily from the exhibits; each of the others must be checked against the data and shown false. The relevant figures are in Tab 2, with visits per provider computed via the Tab 3 definition (Avg Daily Visits / Providers): Northgate 20.0, Eastpark 33.0, Westside 18.0, Southbay 25.0, Midtown 22.0.

Choice A: the clinic with the most providers is Southbay (7 providers), whose visits per provider is 25.0. The lowest visits per provider belongs to Westside at 18.0, not Southbay. So the most-staffed clinic does not have the lowest visits per provider. Choice A is false.

Choice B: it claims Westside has the highest visits per provider. Westside's 18.0 is in fact the lowest of the five values (the highest is Eastpark at 33.0). Choice B is false; it reverses the extreme.

Choice C: every clinic meeting the wait-time target (≤ 30 min) also meets the satisfaction target (≥ 75). The clinics meeting the wait target are Northgate (18), Westside (22), and Midtown (27); Eastpark (35) and Southbay (41) miss it. Checking those three on satisfaction: Northgate 88 ≥ 75, Westside 84 ≥ 75, Midtown 79 ≥ 75. All three clinics that satisfy the wait target also satisfy the satisfaction target, with no exception. Choice C is a universal claim verified exhaustively, so it must be true.

Choice D: it claims every clinic meets the visits-per-provider target (≤ 25). Eastpark's 33.0 exceeds 25, so at least one clinic misses the target. Choice D is false.

Choice E: it claims no clinic meets all three targets. Northgate meets all three — wait 18 ≤ 30, satisfaction 88 ≥ 75, visits/provider 20.0 ≤ 25 — so the claim is false. Choice E is false.

Only choice C survives: it is the one statement that follows necessarily from the data, verified across every clinic in the qualifying subset.

The correct answer is C.
**related_reading:** reading-di-05-multi-source-reasoning

---

## Set 29: Tideline Apparel — Channel Profitability Review

### Tab 1: Finance Memo

**From:** Yara Solberg, FP&A Manager
**To:** Channel Strategy Committee

We sell the same core jacket through four channels. For each channel the table gives units sold last quarter, the average selling price per unit, the variable cost per unit, and the fixed cost allocated to that channel for the quarter. Returns are already netted out of units sold. Use the definitions in Tab 3 to assess channel economics.

### Tab 2: Channel Data (Last Quarter)

| Channel       | Units Sold | Avg Selling Price ($) | Variable Cost / Unit ($) | Allocated Fixed Cost ($) |
|---------------|------------|-----------------------|--------------------------|--------------------------|
| Own Stores    | 8,000      | 120                   | 72                       | 300,000                  |
| Wholesale     | 25,000     | 70                    | 55                       | 180,000                  |
| E-commerce    | 12,000     | 110                   | 60                       | 360,000                  |
| Marketplace   | 15,000     | 95                    | 80                       | 90,000                   |

### Tab 3: Definitions

- **Contribution margin per unit ($)** = Avg Selling Price − Variable Cost per Unit.
- **Total contribution ($)** = Contribution margin per unit × Units Sold.
- **Channel operating profit ($)** = Total contribution − Allocated Fixed Cost.
- **Contribution margin ratio (%)** = Contribution margin per unit / Avg Selling Price.

### Q88
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Business Analysis

Using the Tab 3 definitions, which channel had the highest channel operating profit last quarter?

- A) Own Stores
- B) Wholesale
- C) E-commerce
- D) Marketplace
- E) Two channels tied for the highest

**answer:** C
**explanation:** Channel operating profit is defined in Tab 3 as total contribution minus allocated fixed cost, where total contribution equals contribution margin per unit (selling price minus variable cost) times units sold. All inputs come from Tab 2.

Contribution margin per unit:
- Own Stores: 120 − 72 = $48.
- Wholesale: 70 − 55 = $15.
- E-commerce: 110 − 60 = $50.
- Marketplace: 95 − 80 = $15.

Total contribution = CM/unit × units:
- Own Stores: 48 × 8,000 = $384,000.
- Wholesale: 15 × 25,000 = $375,000.
- E-commerce: 50 × 12,000 = $600,000.
- Marketplace: 15 × 15,000 = $225,000.

Channel operating profit = total contribution − allocated fixed cost:
- Own Stores: 384,000 − 300,000 = $84,000.
- Wholesale: 375,000 − 180,000 = $195,000.
- E-commerce: 600,000 − 360,000 = $240,000.
- Marketplace: 225,000 − 90,000 = $135,000.

Ranking: $240,000 (E-commerce) > $195,000 (Wholesale) > $135,000 (Marketplace) > $84,000 (Own Stores). The highest channel operating profit belongs to E-commerce at $240,000.

The correct answer is C.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q89
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Business Analysis

Which channel had the highest contribution margin ratio?

- A) Own Stores
- B) Wholesale
- C) E-commerce
- D) Marketplace
- E) Own Stores and E-commerce tied

**answer:** C
**explanation:** Contribution margin ratio is defined in Tab 3 as contribution margin per unit divided by average selling price. Contribution margin per unit is average selling price minus variable cost per unit. All figures come from Tab 2.

Contribution margin per unit (from the prior question):
- Own Stores: $48; Wholesale: $15; E-commerce: $50; Marketplace: $15.

Contribution margin ratio = CM per unit / selling price:
- Own Stores: 48 / 120 = 0.400 = 40.0%.
- Wholesale: 15 / 70 ≈ 0.214 = 21.4%.
- E-commerce: 50 / 110 ≈ 0.455 = 45.5%.
- Marketplace: 15 / 95 ≈ 0.158 = 15.8%.

Ranking: 45.5% (E-commerce) > 40.0% (Own Stores) > 21.4% (Wholesale) > 15.8% (Marketplace). The highest contribution margin ratio belongs to E-commerce at about 45.5%.

The trap is to anchor on contribution margin per unit in absolute dollars, where E-commerce ($50) and Own Stores ($48) are close, and conclude they are essentially tied (choice E) — but the ratio divides by selling price, and E-commerce's lower price base ($110 vs $120) lifts its ratio above Own Stores'. E-commerce leads on both the dollar margin and the ratio. Own Stores is a clear second on the ratio at 40.0%, distinct from E-commerce's 45.5%, so there is no tie.

The correct answer is C.
**related_reading:** reading-di-05-multi-source-reasoning
