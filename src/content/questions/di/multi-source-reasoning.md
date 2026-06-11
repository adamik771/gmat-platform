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
**explanation:** **Governing framework.** The reviewer applies a three-part conjunctive gate: all three criteria must be satisfied by the same dose. Each dose is tested against each criterion in order.

**Criterion (i): Statistical significance on the primary endpoint (SOL, p < 0.05).**

Tab 2 supplies the SOL p-values versus placebo. The study protocol (Tab 1) defines statistical significance as p < 0.05.

- Group A (10 mg): p = 0.03. Because 0.03 < 0.05, criterion (i) is satisfied for Group A.
- Group B (25 mg): p < 0.001. Because 0.001 < 0.05, criterion (i) is satisfied for Group B.

Both doses clear the first gate.

**Criterion (ii): Clinically meaningful improvement in TST, defined as at least 1.0 hour increase from baseline to Week 12.**

Tab 2 provides the change in TST for each active group.

- Group A (10 mg): Change in TST = +0.9 hrs. The threshold is 1.0 hr. Because 0.9 < 1.0, Group A does not satisfy criterion (ii).
- Group B (25 mg): Change in TST = +1.7 hrs. Because 1.7 > 1.0, Group B satisfies criterion (ii).

Group A is eliminated here. Only Group B remains a candidate.

**Criterion (iii): Dropout rate does not exceed twice the placebo dropout rate.**

Tab 2 provides dropout rates. The placebo dropout rate is 7.9%. The threshold is 2 * 7.9 = 15.8%. A dose group passes only if its dropout rate is at or below 15.8%.

- Group B (25 mg): Dropout rate = 14.6%. Because 14.6 < 15.8, Group B satisfies criterion (iii).

Group B clears the third gate.

**Summary.**

| Criterion | Group A (10 mg) | Group B (25 mg) |
|-----------|----------------|----------------|
| (i) SOL p < 0.05 | Pass (p = 0.03) | Pass (p < 0.001) |
| (ii) TST change >= 1.0 hr | Fail (+0.9 hrs) | Pass (+1.7 hrs) |
| (iii) Dropout <= 2 * 7.9% = 15.8% | Not needed (already failed) | Pass (14.6%) |

Group A fails on criterion (ii) and therefore cannot support a Phase III recommendation. Group B satisfies all three criteria. Choice A is wrong because Group A fails the TST threshold. Choice C is wrong for the same reason — not both doses qualify, only the high dose. Choice D is wrong because Group B does in fact satisfy all three criteria.

The correct answer is B.
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
**explanation:** **Governing principle.** In a multi-source reasoning set, a numerical discrepancy between two sources must be reconciled by locating the specific item each source includes or excludes. The analysis begins by quantifying the gap precisely, then tests each candidate explanation against the arithmetic.

**Quantifying the discrepancy.** Tab 1 states the current year's total operating budget is $45.28 million. Tab 2 lists departmental line items that sum to $44.36 million for the current year. The difference is:

45.28 - 44.36 = 0.92 million dollars

The question is what accounts for $0.92 million that appears in the minutes figure but not in the table.

**Verifying the 6% growth claim.** Before testing the answer choices, the Council Chair's arithmetic is confirmed against the data. If the current-year figure of $45.28 million is accepted as stated, the proposed budget would be:

45.28 x 1.06 = 47.9968 million

Rounded to the nearest $10,000, this equals $48.00 million — matching the proposed total stated in the minutes and shown in Tab 2. The rounding difference of roughly $32,000 is negligible at this scale. The 6% calculation is therefore not the source of the discrepancy, and the minutes figure of $45.28 million appears reliable.

**Testing the answer choices.** Choice B asserts the 6% increase was calculated incorrectly. The verification above shows that 45.28 x 1.06 rounds to 48.00, which is precisely the proposed total. There is no meaningful arithmetic error in the Chair's statement. Choice B is inconsistent with the data.

Choice C asserts that the $4.80 million debt service payment was double-counted in the minutes. Were that true, the inflated figure would exceed the table total by $4.80 million, not $0.92 million. Choice C does not explain a gap of $0.92 million and is ruled out.

Choice D asserts that $3.2 million in state and federal grants was included in the minutes figure. Tab 1 explicitly states that the City Manager noted those grants "are not included in the operating budget figures." Moreover, $3.2 million does not equal $0.92 million. Choice D is ruled out on both grounds.

Choice A asserts that the table omits a department or budget category carrying $0.92 million. This is the only explanation that accounts for the exact size of the discrepancy. The table lists six line items. If one additional category — such as an administrative reserve, a contingency fund, or a small department not separately enumerated — holds $0.92 million in the current year, the table's departmental sum would be $44.36 million while the aggregate operating budget reported in the minutes would be $44.36 + 0.92 = $45.28 million. This reconciliation is internally consistent and consistent with the verified 6% growth calculation.

**Conclusion.** The $0.92 million gap cannot be attributed to a calculation error, double-counting of a $4.80 million item, or a $3.2 million grant exclusion. The only explanation that is both arithmetically exact and logically coherent is that the proposed budget table does not enumerate every spending category, leaving a residual of $0.92 million unrepresented.

The correct answer is A.
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
**explanation:** **Governing principle.** A cumulative sum aggregates individual period values over the full span shown; a budget change is the difference between a proposed allocation and the current allocation. The question asks us to compute both figures and compare them.

**Identifying the relevant sources.** Tab 3 supplies the five-year deferred-project figures; Tab 2 supplies the current-year and proposed Infrastructure allocations. No computation from Tab 1 is needed here, though Tab 1 confirms Councilmember Park's concern about deferred spending, which provides interpretive context.

**Computing cumulative deferred infrastructure spending.**

Let D denote the cumulative deferred amount over the five fiscal years shown in Tab 3. Reading each row:

- FY-4: $0.15M
- FY-3: $0.60M
- FY-2: $0.60M
- FY-1: $0.46M
- Current: $0.00M (estimated)

Therefore D = 0.15 + 0.60 + 0.60 + 0.46 + 0.00 = $1.81M.

A tempting misreading is to sum only the three years with the largest deferrals (FY-3, FY-2, and FY-1), yielding 0.60 + 0.60 + 0.46 = $1.66M, or to omit FY-4 on the assumption that it falls outside a "recent" window. The question specifies "over the five-year historical period shown," so all five rows must be included, and D = $1.81M.

**Computing the proposed Infrastructure spending increase.**

Let I denote the year-over-year change in Infrastructure allocation. From Tab 2:

- Current Year allocation: $6.34M
- Proposed allocation: $7.68M
- I = 7.68 - 6.34 = $1.34M

The Change column in Tab 2 confirms +$1.34M directly, providing a useful cross-check.

**Comparison.**

Comparing D and I: 1.81 > 1.34. The cumulative deferred amount ($1.81M) exceeds the proposed increase ($1.34M) by 1.81 - 1.34 = $0.47M. The proposed increase therefore does not fully offset the backlog of deferred projects even before accounting for the 12% projected rise in road maintenance costs noted in Tab 1.

**Ruling out incorrect choices.** Choice B states the correct deferred total of $1.81M but reverses the comparison, asserting $1.81M < $1.34M, which is false. Choice C uses a deferred total of $1.21M, a figure not obtainable from the table under any standard summing method. Choice D uses only $0.60M, which corresponds to a single year's deferral (FY-3 or FY-2) rather than the cumulative five-year figure.

The correct answer is A.
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
**explanation:** **Governing principle.** In price-positioning analysis, a product's retail price should be consistent with the segment it occupies. When a brand claims a premium or specialist niche, pricing it materially below the established benchmark for that niche undercuts the positioning signal and may leave margin unrealized — this is the "mispricing" a board member would flag.

**Identifying the relevant sources.** Tab 3 (Competitive Landscape) is the primary source for this question: it lists competitor prices, distribution breadth, and explicit positioning descriptions. Tab 1 supplies North Star's intended positioning and the price-sensitivity findings. Tab 2 concerns financial projections and is not directly relevant to a pricing-versus-positioning argument.

**Applying the principle to choice B.** Tab 3 notes that Ember & Root is "considered the closest direct competitor." Ember & Root is priced at $3.99 and is positioned as "premium adaptogen" — the identical niche North Star targets ("sparkling adaptogen wellness"). North Star's proposed price is $3.49, which is $3.99 - $3.49 = $0.50 per can below its nearest direct comparable. A product occupying the same premium-adaptogen segment but priced $0.50 below the established benchmark is, by standard positioning logic, underpriced: it sacrifices margin and may send a quality signal inconsistent with a premium claim. This is the most direct evidentiary support for the board member's argument.

**Ruling out choice A.** Tab 1 states that above $3.99 purchase intent falls below 25%. This finding argues for a ceiling near $3.99, not for raising the price above $3.49. It actually suggests $3.49 is safely within the viable range, which cuts against the board member's claim rather than supporting it.

**Ruling out choice C.** BrightKick is priced at $2.79 and occupies the "mass-market energy" segment — a categorically different positioning from premium adaptogen. Its 14% category share reflects mass-market volume economics, not a benchmark relevant to North Star's premium segment. Citing BrightKick's share provides no support for the claim that $3.49 is too low for a wellness-premium product.

**Ruling out choice D.** The deceleration of overall functional-beverage category growth from 14% to a forecast 7% YoY is a macro market headwind. It speaks to the size of the opportunity, not to whether $3.49 is the correct price for the product's intended segment. Tab 1 separately notes that adaptogen-specific SKUs are still growing at 22% YoY, further weakening any inference from overall category deceleration to a pricing conclusion.

**Conclusion.** Only choice B draws directly on the competitive-positioning benchmark most relevant to North Star's stated segment. The $0.50 gap between North Star's proposed price and Ember & Root's established price, combined with their shared premium-adaptogen positioning, provides the most direct support for the board member's argument that $3.49 is too low.

The correct answer is B.
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
**explanation:** The governing framework. Tab 1 establishes three binding constraints that any retained-pair scenario must satisfy simultaneously:

- Constraint A (delivery): the maximum increase in average delivery time to any customer group must be no greater than 0.5 days.
- Constraint B (utilization): the combined utilization of the two retained warehouses must not exceed 90%.
- Constraint C (savings): net annual savings must exceed $4.0 million.

Net annual savings is defined as current total operating cost minus projected annual operating cost. From Tab 2, current total annual operating cost is $28.4 million. The savings condition therefore translates to: 28.4 minus (projected cost) > 4.0, which simplifies to projected cost < 24.4 million.

Applying the constraints to each scenario (Tab 3).

Let D = max customer delivery increase, U = combined utilization, and S = 28.4 minus projected cost.

Scenario 1 — Columbus + Indianapolis.
- D = 0.3 days. Since 0.3 <= 0.5, Constraint A is satisfied.
- U = 88%. Since 88% <= 90%, Constraint B is satisfied.
- S = 28.4 - 16.1 = 12.3 million. Since 12.3 > 4.0, Constraint C is satisfied.
- Result: all three constraints satisfied.

Scenario 2 — Columbus + St. Louis.
- D = 0.4 days. Since 0.4 <= 0.5, Constraint A is satisfied.
- U = 85%. Since 85% <= 90%, Constraint B is satisfied.
- S = 28.4 - 16.5 = 11.9 million. Since 11.9 > 4.0, Constraint C is satisfied.
- Result: all three constraints satisfied.

Scenario 3 — Columbus + Milwaukee.
- D = 0.6 days. Since 0.6 > 0.5, Constraint A is violated.
- U = 92%. Since 92% > 90%, Constraint B is also violated.
- Result: fails two constraints.

Scenario 4 — Indianapolis + St. Louis.
- D = 0.7 days. Since 0.7 > 0.5, Constraint A is violated. No further evaluation is required.
- Result: fails at least one constraint.

Summary table.

| Scenario | Constraint A (D <= 0.5) | Constraint B (U <= 90%) | Constraint C (S > 4.0M) | Pass all three? |
|----------|-------------------------|-------------------------|--------------------------|-----------------|
| 1        | 0.3 pass                | 88% pass                | 12.3M pass               | Yes             |
| 2        | 0.4 pass                | 85% pass                | 11.9M pass               | Yes             |
| 3        | 0.6 fail                | 92% fail                | 13.0M pass               | No              |
| 4        | 0.7 fail                | 84% pass                | 12.7M pass               | No              |

Exactly two scenarios — Scenario 1 and Scenario 2 — satisfy all three constraints. Scenarios 3 and 4 both achieve savings well above the $4.0 million threshold; they are disqualified by the utilization cap and the delivery-time cap, respectively, not by financial performance. The temptation to count either of those as passing because the savings figure is strong must therefore be resisted.

The correct answer is C.
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
**explanation:** **Governing Principle.** In a Multi-Source Reasoning question, a statement "must be true" only if it follows necessarily from the data provided across all relevant tabs, with no additional assumptions required. Statements that are merely possible, or that rely on information not given, do not qualify.

**Tab 3 establishes the pricing structure.** For each order size, express shipping costs exactly $8 more than standard shipping:

- Small: express $20, standard $12; difference = 20 - 12 = 8
- Medium: express $26, standard $18; difference = 26 - 18 = 8
- Large: express $36, standard $28; difference = 36 - 28 = 8

Tab 2 confirms this pattern explicitly: "Express shipping... costs $8 more per order than standard." Since $8 > 0, express shipping is strictly more expensive than standard shipping for every order size listed. This holds universally across all three size categories, therefore choice A must be true.

**Evaluating the remaining choices to confirm none of them must be true.**

Choice B states that the North region accounts for less order volume than either the Central or the South region. Tab 1 gives the following regional shares of 12,000 total orders:

- South: 35% = 0.35 x 12,000 = 4,200 orders
- Central: 25% = 0.25 x 12,000 = 3,000 orders
- North: remainder = 100% - 35% - 25% = 40% = 0.40 x 12,000 = 4,800 orders

The North region accounts for 40% of total volume, which is greater than both Central (25%) and South (35%). Choice B is false, not true.

Choice C compares the price of a medium express order to the price of a large standard order. From Tab 3, medium express = $26 and large standard = $28. Since 26 < 28, a medium express order costs less than a large standard order. Choice C is false.

Choice D claims that most orders are shipped via express. Tab 2 specifies that express shipping is available only for orders from the South region, which accounts for 35% of total orders. Even if every South-region order were shipped express, that would represent at most 35% of all orders — a minority, not a majority. Choice D cannot be true given the data.

Choice E states that standard shipping is slower than express shipping for Central-region orders. Tab 2 specifies that express shipping is available only for orders from the South region. Central-region orders are therefore ineligible for express shipping, making any comparison between the two shipping methods for Central-region orders meaningless within the scope of the given information. Choice E does not must be true.

**Conclusion.** Only choice A follows necessarily from the data in all three tabs. The Tab 3 pricing table, corroborated by the explicit $8 differential stated in Tab 2, confirms that express shipping exceeds standard shipping in cost for every order size without exception.

The correct answer is A.
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
**explanation:** For a "must be true" question, the credited answer must follow necessarily from the data as given, while every other choice either contradicts the data or cannot be confirmed from the information provided.

Tab 1 (Analyst Memo) supplies the year-over-year revenue growth rates: Lyton Apparel +8%, MorningShade Cosmetics +17%, NorthCrest Outdoors +2%. Tab 2 (Financial Model Summary) supplies Q1 operating profit figures: Lyton $74.8M, MorningShade $71.4M, NorthCrest $27.9M, total $174.1M. Tab 3 (Historical Reference) supplies trailing four-quarter operating margins: Lyton 12.5%, MorningShade 18.0%, NorthCrest 10.0%.

Tab 2 shows MorningShade Q1 operating profit = $71.4M and Lyton Q1 operating profit = $74.8M. Because 71.4 < 74.8, MorningShade's projected profit is lower, not higher. Choice A is false.

Tab 2 states total projected Q1 operating profit = $174.1M. Because 174.1 < 180, the total does not exceed $180M. Choice B is false.

Comparing each company's projected Q1 margin (Tab 2) against its trailing four-quarter average (Tab 3): Lyton projects 11.0% against a trailing 12.5%, so its margin is lower; MorningShade projects 17.0% against a trailing 18.0%, so its margin is lower; NorthCrest projects 9.0% against a trailing 10.0%, so its margin is lower. Every company shows a projected margin below its trailing average, making the claim that every margin is higher false. Choice C is false.

The three year-over-year revenue growth rates from Tab 1 are Lyton +8%, MorningShade +17%, and NorthCrest +2%. Ranking them in ascending order: NorthCrest 2% < Lyton 8% < MorningShade 17%. NorthCrest's growth rate of 2% is strictly less than both 8% and 17%, so NorthCrest has the lowest projected Q1 revenue growth rate of the three companies. This follows directly and necessarily from the data. Choice D must be true.

Tab 1 states that the FX headwind trims MorningShade's revenue growth rate by 3 percentage points, not that it reduces revenue by a stated dollar amount. To quantify the dollar impact, the prior-year Q1 revenue base is needed. The current estimate of $420M reflects +17% growth, so the prior-year base is approximately $420 / 1.17, or roughly $359M. Applying the 3-percentage-point headwind to that base yields approximately 0.03 x $359M, or roughly $10.8M — well below $20M. Choice E is not supported.

The correct answer is D.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q20
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Revenue Increase Comparison

Which company is projected to have the largest year-over-year increase in Q1 revenue in absolute dollar terms?

- A) Lyton Apparel
- B) MorningShade Cosmetics
- C) NorthCrest Outdoors
- D) Lyton Apparel and MorningShade are tied
- E) Cannot be determined from the information provided

**answer:** B
**explanation:** The year-over-year absolute dollar increase in revenue equals current-period revenue minus prior-period revenue. Let r denote the Q1 revenue estimate and g denote the stated year-over-year growth rate for a given company. Because r represents the result after applying g to the prior-year base, the prior-year revenue equals r / (1 + g), and the absolute dollar increase equals r - r / (1 + g), which simplifies to r * g / (1 + g).

Tab 1 (Analyst Memo) supplies the growth rates; Tab 2 (Financial Model Summary) supplies the current Q1 revenue estimates. Tab 3 is not required for this calculation.

Lyton Apparel: r = 680, g = 0.08. Prior-year revenue = 680 / 1.08 = 629.63. Absolute increase = 680 - 629.63 = approximately $50.4M.

MorningShade Cosmetics: r = 420, g = 0.17. Prior-year revenue = 420 / 1.17 = 358.97. Absolute increase = 420 - 358.97 = approximately $61.0M.

NorthCrest Outdoors: r = 310, g = 0.02. Prior-year revenue = 310 / 1.02 = 303.92. Absolute increase = 310 - 303.92 = approximately $6.1M.

Ranking the three absolute increases: MorningShade $61.0M > Lyton $50.4M > NorthCrest $6.1M.

Choice A (Lyton Apparel) is tempting because Lyton carries the largest revenue base and a solid 8% growth rate, but the narrower percentage gain applied to $680M yields only approximately $50.4M, which falls short of MorningShade's approximately $61.0M. Choice D (a tie between Lyton and MorningShade) can be ruled out because the two figures differ by roughly $10.6M. Choice E is incorrect because both the current estimates and the growth rates are explicitly provided, making the calculation fully determinable.

The absolute increase for MorningShade Cosmetics, at approximately $61.0M, exceeds that of every other company in the coverage set.

The correct answer is B.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q21
**difficulty:** Hard
**type:** Multi-Source Reasoning
**topic:** Scenario Forecasting

Suppose the FX headwind disappears entirely during Q1, so MorningShade grows at its underlying constant-currency rate of 20% year-over-year rather than the reported 17%. Assuming every company's operating margin is held constant at the projected level in Tab 2, approximately what will the three-company total Q1 operating profit be?

- A) $172M
- B) $174M
- C) $176M
- D) $178M
- E) $180M

**answer:** C
**explanation:** **Governing principle.** Operating profit equals revenue multiplied by operating margin. To forecast a revised total, recompute only the line item affected by the changed assumption, hold all other line items fixed, and sum.

**Identifying the relevant source.** The question modifies the revenue growth assumption for MorningShade only. Tab 1 (Analyst Memo) establishes that the reported 17% year-over-year growth already embeds a 3-percentage-point FX drag, implying an underlying constant-currency growth rate of 20%. Tab 2 (Financial Model Summary) supplies the base Q1 revenue of $420M and the projected operating margin of 17.0% for MorningShade, as well as the unchanged figures for Lyton Apparel ($74.8M operating profit) and NorthCrest Outdoors ($27.9M operating profit).

**Step 1: Recover MorningShade's prior-year Q1 revenue base.**

The Tab 2 projected revenue of $420M reflects 17% year-over-year growth, so the prior-year base is:

R_prior = 420 / 1.17 ≈ 358.97M

**Step 2: Compute MorningShade's revised Q1 revenue at 20% growth.**

R_revised = 358.97 × 1.20 ≈ 430.77M

An equivalent, arithmetically transparent route: the incremental revenue from removing the FX drag equals the prior-year base multiplied by the 3-percentage-point difference between the constant-currency rate and the reported rate:

Incremental revenue = (420 / 1.17) × 0.03 ≈ 10.77M

Therefore R_revised = 420 + 10.77 ≈ 430.77M

**Step 3: Apply MorningShade's projected operating margin to the revised revenue.**

The question instructs that every company's operating margin be held constant at the Tab 2 projected level. MorningShade's margin is 17.0%, so:

MorningShade revised operating profit = 430.77 × 0.17 ≈ 73.23M

**Step 4: Assemble the three-company total.**

The operating profits for Lyton Apparel ($74.8M) and NorthCrest Outdoors ($27.9M) are unaffected by the scenario change. The revised total is:

Total = 74.8 + 73.23 + 27.9 = 175.93M ≈ 176M

A tempting trap is to use MorningShade's original $420M revenue, which produces $174M (choice B) and ignores the instruction to substitute the constant-currency growth rate. Another near-miss would be to apply a higher margin alongside the higher revenue; however, the question explicitly holds margins constant, so no margin adjustment is warranted.

The correct answer is C.
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
- C) More patients in the PalliMed-X group than in the control group achieved the primary endpoint.
- D) PalliMed-X causes nausea in the majority of patients who receive it.
- E) The control group had a higher rate of prior opioid use than the PalliMed-X group.

**answer:** C
**explanation:** **Governing principle.** A "must be true" question in Multi-Source Reasoning requires that the credited statement be directly verifiable — and necessarily accurate — from the data as presented, without any inference beyond what the exhibits explicitly supply. Statements that require subgroup data not shown, statistical computations not reported, or a causal claim not established by the trial design cannot "must be true."

**Locating the relevant data.** The primary quantitative result lives in Tab 1 (Trial Summary). Tab 2 (Baseline Characteristics) and Tab 3 (Adverse Events) supply ancillary figures needed to evaluate the distractors.

**Evaluating the credited answer (C).** Tab 1 states: 182 of 300 patients in the PalliMed-X arm met the primary endpoint, versus 141 of 300 patients in the control arm. Comparing the raw counts directly: 182 > 141. Therefore, more patients in the PalliMed-X group achieved the primary endpoint than in the control group. This is a direct reading of reported numerators; no calculation beyond a simple integer comparison is required, and no assumption is needed. Statement C must be true.

**Ruling out the distractors.**

Choice A claims superiority in every subgroup. Tab 1 presents only aggregate trial-level results; no subgroup breakdowns appear in any of the three tabs. Because the data do not address subgroup-level performance, this claim is unsupported and cannot be established as necessarily true.

Choice B asserts statistical significance of the 14-percentage-point difference. None of the three tabs reports a p-value, confidence interval, or any hypothesis-test result. Statistical significance requires inferential analysis beyond raw counts, and that analysis is simply absent from the exhibit set. The claim may or may not be true, but it cannot be read directly from the data.

Choice D asserts that PalliMed-X causes nausea in the majority (> 50%) of patients who receive it. Tab 3 shows: nausea events in the PalliMed-X group = 48 out of 300 patients. Computing the rate: 48/300 = 0.16, or 16%. Because 16% < 50%, fewer than a majority experienced nausea, so this statement is false on the data as given — quite apart from the separate problem that correlation in an adverse-event table does not establish causation.

Choice E claims the control group had a higher rate of prior opioid use. Tab 2 shows: prior opioid use in the PalliMed-X group = 26%; prior opioid use in the control group = 23%. Because 26% > 23%, it is the PalliMed-X group, not the control group, that had the higher rate. Statement E is directly contradicted by Tab 2.

**Conclusion.** Only statement C is directly and necessarily supported by the reported data: 182 (PalliMed-X) > 141 (control) is an arithmetic fact read straight from Tab 1.

The correct answer is C.
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
- B) 14 additional successes, 4 additional discontinuations
- C) 14 additional successes, 7 additional discontinuations
- D) 7 additional successes, 4 additional discontinuations
- E) 20 additional successes, 10 additional discontinuations

**answer:** B
**explanation:** The relevant data come from two tabs. Tab 1 supplies the primary-endpoint rates; Tab 3 supplies the discontinuation-due-to-adverse-event rates.

For the primary endpoint, the PalliMed-X group had 182 of 300 patients achieve the endpoint, giving a rate of approximately 61%. The control group had 141 of 300, giving a rate of exactly 47%. The absolute difference is 61% minus 47%, which equals 14 percentage points. Applied to a population of 100 patients, this translates to 14 additional patients expected to achieve the primary endpoint under PalliMed-X relative to the control. This rules out choices A (10 additional successes), D (7 additional successes), and E (20 additional successes), leaving only B and C as candidates.

For discontinuations due to adverse events, Tab 3 shows that 36 of 300 patients in the PalliMed-X group discontinued due to an adverse event, a rate of 12%. In the control group, 24 of 300 discontinued, a rate of 8%. The absolute difference is 12% minus 8%, which equals 4 percentage points. Applied to 100 patients, this yields 4 additional patients expected to discontinue. This rules out choice C, which overstates the discontinuation difference as 7 percentage points. The value 7% appears in Tab 3 as the serious adverse event rate for PalliMed-X alone, not as an incremental discontinuation difference, making C a plausible but incorrect distractor. Choice E overstates both figures and was already eliminated.

The conclusion is that for every 100 patients treated with PalliMed-X instead of the control, approximately 14 additional patients are expected to achieve meaningful pain relief and approximately 4 additional patients are expected to discontinue due to adverse events.

The correct answer is B.
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
**explanation:** The FAA rule, stated in Tab 1, requires that any aircraft newly sold in the US market starting in 2027 must achieve a fuel burn per passenger-mile at least 12% below the current industry average. The current industry average is 2.6 L per 100 passenger-kilometers. The maximum permissible fuel burn under the proposed standard is therefore:

2.6 × (1 - 0.12) = 2.6 × 0.88 = 2.288 L/100 passenger-km.

Any model whose fuel burn exceeds 2.288 L/100 passenger-km does not comply; any model at or below that figure does comply.

**Applying the threshold to each model (Tab 2).** Each aircraft's listed fuel burn is compared against the computed ceiling of 2.288:

- SA-200: 3.0 L/100 passenger-km. Since 3.0 > 2.288, the SA-200 fails the standard.
- SA-300: 2.6 L/100 passenger-km. Since 2.6 > 2.288, the SA-300 also fails; it merely matches the current average rather than beating it by 12%.
- SA-400: 2.2 L/100 passenger-km. Since 2.2 < 2.288, the SA-400 meets the standard.
- SA-500: 1.9 L/100 passenger-km. Since 1.9 < 2.288, the SA-500 also meets the standard.

**Addressing the SA-500's status.** Tab 3 notes that the SA-500 is not yet available for commercial sale as of the date of the analysis, and Tab 2 gives its planned introduction year as 2026. The question asks which models would meet the standard if newly sold in the US in 2027. Because the SA-500's planned introduction precedes 2027, it is not categorically excluded from the 2027 market, and the question's conditional framing ("if newly sold in 2027") does not disqualify it on availability grounds. Its fuel burn of 1.9 L/100 passenger-km satisfies the regulatory threshold, so it is properly included.

**Ruling out tempting alternatives.** Choice E includes the SA-300, which does not qualify: 2.6 L/100 passenger-km equals the industry average and therefore falls short of the required 12% reduction. Choice C likewise includes the SA-300 and excludes the SA-500 without justification. Choices A and B each name a single model that does not meet the threshold.

The two models that satisfy the 2.288 L/100 passenger-km ceiling are the SA-400 (2.2) and the SA-500 (1.9).

The correct answer is D.
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
- C) $180M
- D) $240M
- E) $300M

**answer:** C
**explanation:** **Governing principle.** A total-cost calculation takes the form Total Cost = (Cost per Unit) x (Number of Units). The relevant figures are drawn from two sources: Tab 3 supplies the per-aircraft retrofit cost, and the question stem supplies the fleet count.

**Identifying the data.** Tab 3 states that retrofitting one SA-200 to meet the proposed FAA standard costs approximately $1.2 million per aircraft. The question stem specifies that 150 SA-200 aircraft are currently in the US fleet. No data from Tab 1 or Tab 2 is required for this arithmetic step; those tabs establish the regulatory threshold and fleet fuel-burn figures, which are background context here.

**Computation.** Let n = 150 (number of SA-200 aircraft) and c = 1,200,000 (retrofit cost per aircraft, in dollars). The total program cost T is

T = n x c = 150 x 1,200,000

Breaking this down: 150 x 1,200,000 = 150 x 1.2 x 10^6 = 180 x 10^6 = 180,000,000.

Therefore T = $180,000,000, or approximately $180 million.

**Ruling out tempting alternatives.** A result of $120M would require only 100 aircraft (100 x 1,200,000 = 120,000,000), not 150. A result of $150M would require a per-aircraft cost of exactly $1.0 million (150 x 1,000,000), not $1.2 million. A result of $240M would require 200 aircraft, and $300M would require 250 aircraft — neither matches the 150-aircraft figure given in the stem. Only 150 x 1,200,000 = 180,000,000 is consistent with both data points simultaneously.

The correct answer is C.
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
- B) Equities contributed positively to Orion's excess return.
- C) Fixed Income contributed positively to Orion's excess return.
- D) Orion's 2024 total portfolio return was 11%.
- E) Orion weighted its three asset classes approximately equally.

**answer:** B
**explanation:** Tab 3 defines each asset class's contribution to excess return as (weight) × (Orion's return in that class minus the benchmark's return in that class). Applying this formula to the figures in Tab 2 gives the following results.

For Equities: 0.60 × (16% − 13%) = 0.60 × 3 = +1.8 percentage points. For Fixed Income: 0.30 × (7% − 8%) = 0.30 × (−1) = −0.3 percentage points. For Alternatives: 0.10 × (12% − 10%) = 0.10 × 2 = +0.2 percentage points. Total excess return = 1.8 + (−0.3) + 0.2 = +1.7 percentage points.

Tab 3 also states that the total portfolio return equals the weighted sum of asset-class returns: 0.60 × 16 + 0.30 × 7 + 0.10 × 12 = 9.6 + 2.1 + 1.2 = 12.9%. The same formula applied to benchmark figures gives 0.60 × 13 + 0.30 × 8 + 0.10 × 10 = 7.8 + 2.4 + 1.0 = 11.2%. Both values match Tab 1 exactly, confirming that the data across all three tabs are internally consistent.

Turning to the choices: Choice A is false because Tab 2 shows Fixed Income returned 7% for Orion against 8% for the benchmark, meaning Orion underperformed in that class. Choice C is false because the Fixed Income contribution is −0.3 percentage points, a negative value. Choice D is false because Tab 1 explicitly states Orion's total return was 12.9%, confirmed by the weighted computation above, not 11%. Choice E is false because Tab 1 and Tab 2 both state weights of 60%, 30%, and 10%, which are materially unequal. Choice B must be true: the Equities contribution equals +1.8 percentage points, which is strictly positive, following directly and necessarily from the Tab 2 figures and the Tab 3 formula.

The correct answer is B.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q29
**difficulty:** Hard
**type:** Multi-Source Reasoning
**topic:** Single-Asset Contribution

What was Alternatives' approximate contribution to Orion's excess return in 2024?

- A) 0.1 percentage points
- B) 0.2 percentage points
- C) 0.5 percentage points
- D) 1.0 percentage points
- E) 2.0 percentage points

**answer:** B
**explanation:** **Relevant source.** Tab 3 defines the attribution framework, and Tab 2 supplies the required figures. Tab 1 is not needed for this calculation, though its reported total returns serve as a useful consistency check.

**Governing definition.** Under the framework in Tab 3, each asset class's contribution to excess return equals

(weight) x (Orion's return in that class - Benchmark's return in that class).

Let w_A = 0.10 (the portfolio weight of Alternatives), r_A = 12% (Orion's Alternatives return), and b_A = 10% (the benchmark's Alternatives return). Substituting:

Contribution_Alternatives = w_A x (r_A - b_A) = 0.10 x (12 - 10) = 0.10 x 2 = 0.20 percentage points.

The result is 0.2 percentage points, which corresponds to choice B.

**Ruling out the other choices.** Choice A (0.1 pp) would require either a weight of 5% or a return differential of only 1 percentage point; neither matches the data. Choice C (0.5 pp) would require a differential of 5 percentage points or a weight of 25%, both inconsistent with Tab 2. Choice D (1.0 pp) and choice E (2.0 pp) are far too large for a 10%-weighted asset class outperforming by 2 percentage points.

**Cross-check via total returns.** One can verify the full attribution. Let contributions from Equities, Fixed Income, and Alternatives be computed as:

- Equities: 0.60 x (16 - 13) = 0.60 x 3 = 1.80 pp
- Fixed Income: 0.30 x (7 - 8) = 0.30 x (-1) = -0.30 pp
- Alternatives: 0.10 x (12 - 10) = 0.10 x 2 = 0.20 pp

Summing: 1.80 + (-0.30) + 0.20 = 1.70 pp total excess return. Tab 1 reports Orion's total return as 12.9% and the benchmark as 11.2%, a difference of 12.9 - 11.2 = 1.7 percentage points. The attribution sum matches exactly, confirming the arithmetic is correct and that Alternatives' isolated contribution is 0.20 pp.

The correct answer is B.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q30
**difficulty:** Hard
**type:** Multi-Source Reasoning
**topic:** Verifying Total Excess Return

Using the attribution framework, what was Orion's approximate total excess return (Orion total minus benchmark total) in 2024?

- A) 1.0 percentage points
- B) 1.5 percentage points
- C) 1.7 percentage points
- D) 2.0 percentage points
- E) 2.5 percentage points

**answer:** C
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

Both methods yield the same figure. Choice A (1.0) and choice B (1.5) are too small; a test-taker might arrive at 1.5 by incorrectly omitting the Alternatives class or by applying weights inconsistently. Choice D (2.0) could result from rounding 12.9 up to 13.0 before subtracting, and choice E (2.5) likely reflects an error in which the Fixed Income underperformance is ignored and only the two outperforming classes are summed. None of those paths follows the framework correctly.

The correct answer is C.
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
- C) C
- D) A and C are tied
- E) Cannot be determined

**answer:** C
**explanation:** Tab 2 (Pilot Campaign Results) is the operative source; it presents the "Avg Revenue per Customer ($)" column directly. The recorded values are $400 for Variant A, $250 for Variant B, and $500 for Variant C. No computation is required. Ranking the three figures in descending order gives 500 > 400 > 250, which corresponds to C > A > B. Choice D (A and C are tied) would require 400 to equal 500, which is false, so D is eliminated. Choice E (Cannot be determined) would apply only if the necessary data were absent or ambiguous; the column is fully populated with unambiguous figures, so E is eliminated. Choice B is the weakest of the three at $250 and is eliminated on inspection. Because 500 > 400 > 250, Variant C carries the highest Average Revenue per converted Customer among the three variants tested.

The correct answer is C.
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
**mistake_d:** $46,800 = $3 × 200 × 90 — used Downtown's room count (200) instead of Midtown's (130), likely from scanning the wrong row.
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
**mistake_b:** BN-318 (Phase II CNS) is 65% enrolled, higher than BN-618 (Phase III, 60%). The "every Phase III > every Phase II" claim fails on this pair.
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
