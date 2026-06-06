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
**fastest_path:** Compute S&S share for each region from Tab 2: West 45%, East 55%, Central 35%, South 36%. East wins.
**explanation:** S&S/total per region: Western 4.49/9.98=45%, Eastern 3.83/6.96=55%, Central 1.53/4.37=35%, Southern 1.08/2.99=36%. Eastern highest. Answer B.
**mistake_a:** Western 45%, second.
**mistake_c:** Central lowest at 35%.
**mistake_d:** Southern 36%.
**common_trap:** Picking Western because it has the largest *absolute* S&S revenue ($4.49M). The question asks for *proportion*, not amount.
**takeaway:** Multi-source ratio questions: read the absolute values from the table, then divide. Largest absolute ≠ largest proportion.
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
**fastest_path:** Run all 4 targets against the data: Hardware 55% (fail), S&S grew 28% (pass), Western 41% (fail), Central declined (fail). Only 1 target met.
**explanation:** Target check: (1) Hardware ≤50%: 13.37/24.3=55% — fail. (2) S&S grew ≥15%: prior S&S=22.5·0.38=8.55M, current 10.93M, growth 28% — pass. (3) No region >40%: Western 9.98/24.3=41.1% — fail. (4) All regions positive: Central −5% — fail. Net: 1 met. Answer A.
**mistake_b:** 2 — overcounting (e.g., counting Western as ≤40%).
**mistake_c:** 3 — over-generous on Central or Hardware.
**mistake_d:** 4 — accepting all without checking.
**common_trap:** Failing to compute S&S baseline from "62% of last year's revenue." Multi-source questions often require *cross-tab inference* (memo + table) to reconstruct prior values.
**takeaway:** Constraint-checking on multi-source data: list each criterion, then verify each one against the table. Don't trust visual narrative; compute.
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
**fastest_path:** Without enterprise contracts: 6.96 − 0.90 = 6.06M. Growth vs 5.80M = 0.26/5.80 ≈ 4.5%.
**explanation:** Strip the enterprise contribution: 6.06M. Compare to prior 5.80M: 0.26/5.80 ≈ 4.5%. Answer A.
**mistake_b:** 7.2% — slip on subtraction or division.
**mistake_c:** 10.4% — half the original 20%, applied incorrectly.
**mistake_d:** 14.8% — kept too much of the contracts.
**common_trap:** Subtracting from the *previous year's* revenue instead of the *current year's*. Strip the contribution from the year that received it.
**takeaway:** Counterfactual growth: subtract the named contribution from the *current* period's value, then recompute (new/old − 1).
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
**fastest_path:** Sig threshold p<0.05. Low SOL p=0.03 (sig), Low TST p=0.08 (not sig), High SOL p<0.001 (sig), High TST p=0.002 (sig). High hits both.
**explanation:** Significance requires p<0.05. Low dose: SOL 0.03 sig, TST 0.08 not sig. High dose: SOL <0.001 sig, TST 0.002 sig. High dose achieves significance on *both* endpoints. Answer B.
**mistake_a:** Low dose TST p=0.08 fails.
**mistake_c:** Both doses sig on SOL is true, but the question asks for the *combination* including TST — high dose hits both.
**mistake_d:** Low dose TST p=0.08 fails.
**common_trap:** Picking C ("both doses for SOL only") because both doses *did* achieve SOL significance. But the question asks which *combination* of dose and endpoint was significant — (B) names the more complete combination (high dose, both endpoints).
**takeaway:** Multi-source significance reading: build a 2×2 (dose × endpoint) significance matrix. Match the answer to the most complete cell pattern.
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
**fastest_path:** Check each criterion per group. Low: TST +0.9 (fails ≥1.0). High: SOL p<0.001, TST +1.7, dropout 14.6% < 2·7.9%=15.8%. All three met for high dose only.
**explanation:** Three criteria: (i) SOL p<0.05; (ii) TST ≥+1.0h; (iii) dropout ≤ 2× placebo (15.8%). Low: SOL passes, TST fails (0.9<1.0). High: all three pass (p<0.001, +1.7h, 14.6%<15.8%). Answer B.
**mistake_a:** Low fails TST criterion.
**mistake_c:** Only high satisfies; low fails (ii).
**mistake_d:** High *does* satisfy all three.
**common_trap:** Forgetting to compute "twice placebo dropout" (15.8%, not 7.9%). Many students set the threshold at the placebo rate itself.
**takeaway:** Multi-criteria recommendation problems: compute each threshold from the source, check each criterion. Don't shortcut.
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
**fastest_path:** High − placebo for each AE: drowsiness 18.7, headache 1.9, nausea 2.8, dizziness 8.8. Drowsiness wins.
**explanation:** AE differences (high − placebo): drowsiness 24.4−5.7=18.7; headache 9.8−7.9=1.9; nausea 7.3−4.5=2.8; dizziness 12.2−3.4=8.8. Drowsiness biggest. Answer A.
**mistake_b:** Headache 1.9 — too small.
**mistake_c:** Nausea 2.8.
**mistake_d:** Dizziness 8.8 — second.
**common_trap:** Picking the AE with the largest *absolute* high-dose rate (drowsiness 24.4%) without comparing to placebo. The question asks for the *gap*.
**takeaway:** Drug-vs-placebo comparison: subtract placebo from treatment for each event. Largest gap, not largest treatment rate, is the answer.
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
**fastest_path:** Torres: PS ≥ 32% of total. Proposed PS=33% ✓. Park: Infra ≥ $8M. Proposed Infra=$7.68M ✗.
**explanation:** Torres: PS ≥ 32%. Proposed: 15.84/48 = 33% — pass. Park: Infra ≥ $8M. Proposed: $7.68M — fail. Torres yes, Park no. Answer B.
**mistake_a:** Park's request fails ($7.68M < $8M).
**mistake_c:** Torres's request passes (33% ≥ 32%).
**mistake_d:** Torres's request *does* pass.
**common_trap:** Reading "approximately $7.68M ≈ $8M" as "yes, met." Park's request is *at least* $8M; $7.68M strictly fails.
**takeaway:** Constraint-checking on numerical thresholds: literal comparison, not approximate. Even small misses fail.
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
**fastest_path:** Minutes total $45.28M; table sums to $44.36M. Δ = $0.92M. Table omits a category.
**explanation:** Minutes: $45.28M. Table sum: $44.36M. Difference = $0.92M. Most likely: the table omits a budget category (admin, contingency, etc.) accounting for that gap. Answer A.
**mistake_b:** 45.28 × 1.06 ≈ 48.0; the 6% is consistent, not erroneous.
**mistake_c:** Debt service appears once in the table — no double count.
**mistake_d:** Grants are *not* in operating budget per the City Manager.
**common_trap:** Picking (D) because grants are mentioned. But the City Manager *explicitly* says grants aren't in the operating budget — they can't be the discrepancy source.
**takeaway:** Discrepancy reconciliation: read each tab for the *exclusion clauses*. They eliminate distractor explanations.
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
**fastest_path:** Sum deferred from Tab 3: 0.15+0.60+0.60+0.46+0.00 = $1.81M. Proposed increase: 7.68−6.34 = $1.34M. 1.81 > 1.34.
**explanation:** Cumulative deferred: $1.81M (sum of 5 years). Proposed increase: $1.34M. Deferred exceeds the increase. Answer A.
**mistake_b:** *Reverses* the comparison.
**mistake_c:** $1.21M — undercount (4 years).
**mistake_d:** $0.60M — single year.
**common_trap:** Summing only the most recent few years' deferrals, missing the cumulative totaling.
**takeaway:** Cumulative-vs-proposed comparison: literal sum across all listed periods, then subtract endpoints from current/proposed for the comparison value.
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
**fastest_path:** Tab 1 directly states "the weakest driver was 'status/image.'" Direct lookup.
**explanation:** Tab 1 lists strongest drivers (clean ingredients, afternoon energy, taste) and explicitly names "status/image" as weakest. Answer D.
**mistake_a:** "Clean ingredients" is the *strongest* driver.
**mistake_b:** Strongest driver category.
**mistake_c:** Strongest driver category.
**common_trap:** Picking the listed drivers (A, B, C) by skimming for them as familiar terms — but the question asks for the *weakest*. Read the verb in the stem.
**takeaway:** Direct fact-lookup MSR: locate the exact phrase in the source. Read the stem's qualifier (strongest vs weakest) carefully.
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
**fastest_path:** Gross margin = (Rev − COGS) / Rev. Y3: (32 − 16)/32 = 50%.
**explanation:** Tab 2 Y3: revenue $32M, COGS $16M. Gross margin = 16/32 = 50%. Answer C.
**mistake_a:** 32.5% — slip arithmetic.
**mistake_b:** 45% — slip.
**mistake_d:** 55% — overshoot.
**common_trap:** Computing *operating margin* (Rev − all expenses) instead of *gross margin* (Rev − COGS only). Definitions differ.
**takeaway:** Margin definitions: gross = (Rev − COGS) / Rev; operating includes other costs. Use the *exact* definition the question names.
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
**fastest_path:** Board member: $3.49 is too low. Need evidence supporting *higher* price. (B): closest competitor (Ember & Root) at $3.99 in same positioning → North Star underprices its segment.
**explanation:** Argument: $3.49 is too low. Evidence supporting higher price needs same-segment comparison. (B) gives it: Ember & Root at $3.99, "premium adaptogen" — same segment as North Star. Underpricing leaves margin on the table.
**mistake_a:** *Argues against* raising — intent drops above $3.99.
**mistake_c:** Mass-market competitor — different segment, doesn't support premium pricing.
**mistake_d:** Category growth pace, not pricing.
**common_trap:** Picking (A) because it's about price thresholds. But $3.99 ceiling supports a price *between* $3.49 and $3.99, not necessarily that $3.49 is too low.
**takeaway:** "Mispriced relative to positioning" arguments require *same-segment* comparison data. Synthesize positioning (Tab 1) + competitor pricing (Tab 3).
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
**fastest_path:** Tab 2 utilization: Columbus 68%, Indianapolis 64%, St. Louis 55%, Milwaukee 57%. St. Louis lowest.
**explanation:** Direct read from Tab 2. St. Louis at 55%. Answer C.
**mistake_a:** Columbus 68%, highest.
**mistake_b:** Indianapolis 64%.
**mistake_d:** Milwaukee 57%, second lowest.
**common_trap:** Picking Milwaukee because it has the smallest capacity (34,000) and "small = low utilization" feels intuitive. Utilization is a ratio (used/capacity), not absolute size.
**takeaway:** Utilization is a *ratio*. Smallest capacity ≠ lowest utilization. Read the percentage column directly.
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
**fastest_path:** Current cost $28.4M − Scenario 2 cost $16.5M = $11.9M.
**explanation:** Current $28.4M (Tab 2). Scenario 2 projected $16.5M (Tab 3). Annual savings = $11.9M. Note: question asks *before* one-time $6.8M transition cost. Answer A.
**mistake_b:** $12.4M — slip.
**mistake_c:** $13.0M — overshoot.
**mistake_d:** $15.2M — using wrong scenario.
**common_trap:** Subtracting the $6.8M transition cost from annual savings. The question explicitly asks "before the one-time transition cost."
**takeaway:** Read the question's exclusion clauses. "Before the one-time cost" means raw annual operating savings, not net first-year savings.
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
**fastest_path:** Three constraints: delivery ≤ 0.5d, util ≤ 90%, savings > $4M (cost < $24.4M). S1 ✓, S2 ✓, S3 fails delivery, S4 fails delivery. 2 pass.
**explanation:** Constraints: (1) delivery ≤ 0.5d; (2) util ≤ 90%; (3) cost < $24.4M (= 28.4 − 4.0). S1: 0.3 / 88% / $16.1M ✓. S2: 0.4 / 85% / $16.5M ✓. S3: 0.6 fails (1). S4: 0.7 fails (1). 2 pass. Answer C.
**mistake_a:** 0 — undercount.
**mistake_b:** 1 — undercount.
**mistake_d:** 3 — overcount; only 2 pass all constraints.
**common_trap:** Forgetting to translate "savings > $4M" into a *cost* threshold ($24.4M). All four scenarios satisfy the cost constraint; the binding constraint here is delivery.
**takeaway:** Multi-constraint scenario problems: translate each constraint into a directly-comparable metric, then check each scenario.
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
**fastest_path:** Tab 3 shows express > standard for every size (S 20>12, M 26>18, L 36>28). A must be true.
**explanation:** Tab 3 verifies (A) directly: express is strictly more expensive than standard for all three sizes. Other claims fail: North 40% > Central 25% (B); Med-Exp $26 < Lg-Std $28 (C); D unsupported; E vacuous since express isn't available for Central.
**mistake_b:** North=40% > Central=25%, so North is *not* less.
**mistake_c:** Med-Exp $26 < Lg-Std $28.
**mistake_d:** No service-mix data given.
**mistake_e:** Express isn't available for Central — comparison doesn't apply.
**common_trap:** Picking (B) by computing North as the *remainder* but forgetting to compare to Central (25%). Always finish the comparison.
**takeaway:** "Must be true" MSR: verify each candidate against each tab. Eliminate vacuous claims (premise doesn't apply) and partial claims that miss data.
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
**fastest_path:** North = 100% − 35% − 25% = 40%. 0.40 × 12000 = 4800.
**explanation:** Tab 1 gives South 35%, Central 25%, total 12,000. North share = 40%. Orders = 4,800. Answer D.
**mistake_a:** 3000 — slip on subtraction.
**mistake_b:** 3500 — undershoot.
**mistake_c:** 4200 — slip.
**mistake_e:** 5000 — round up.
**common_trap:** Forgetting the "remainder" deduction; computing only South or Central directly without realizing North is implicit.
**takeaway:** Volume-share MSR with implicit residuals: subtract named shares from 100%, then apply to total.
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
**fastest_path:** Weighted: 0.4·26 + 0.6·18 = 10.4 + 10.8 = $21.20.
**explanation:** Tab 3: med-std $18, med-exp $26. Weighted avg = 0.4·26 + 0.6·18 = $21.20. Answer C.
**mistake_a:** $18.00 — pure standard pricing.
**mistake_b:** $20.80 — slip on weights or surcharge.
**mistake_d:** $23.60 — using 60/40 split inverted.
**mistake_e:** $26.00 — pure express.
**common_trap:** Applying weights inversely (60/40 → 40/60). Always read which mix-fraction goes with which price tier.
**takeaway:** Weighted-avg MSR: weight × value, summed. Verify the weight matches the price tier.
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
**fastest_path:** Walk each claim. NC growth +2% is lowest of the three (+8, +17, +2). D is true.
**explanation:** Growth rates: Lyton +8%, MS +17%, NC +2%. NC lowest. Answer D.
**mistake_a:** MS $71.4M < Lyton $74.8M.
**mistake_b:** Total $174.1M < $180M.
**mistake_c:** Lyton's 11% < trailing 12.5% — not every company exceeded its trailing.
**mistake_e:** FX impact ≈ $11M (computed: 420 × (1.20−1.17)/1.17 ≈ $11M), not > $20M.
**common_trap:** Picking (E) without computing the FX dollar impact. Use prior-year base × the rate differential.
**takeaway:** "Must be true" with multi-tab data: verify each numeric claim. Especially watch out for "exceeds X" claims that require explicit calculation.
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
**fastest_path:** Absolute increase = current − prior. Lyton 680 − 629.6 ≈ $50.4M. MS 420 − 359 ≈ $61M. NC 310 − 304 ≈ $6M. MS biggest.
**explanation:** Δ revenue = Q1 − prior Q1 = Q1 − Q1/(1+growth). Lyton: $50.4M. MS: $61M. NC: $6M. MS largest. Answer B.
**mistake_a:** Lyton has highest *level* but smaller absolute increase.
**mistake_c:** NC has lowest growth and smallest base.
**mistake_d:** Lyton ($50M) and MS ($61M) differ.
**mistake_e:** All three values are computable.
**common_trap:** Anchoring on Lyton because it has the highest revenue *level*. Absolute increase requires multiplying growth rate by prior base.
**takeaway:** Absolute Δ vs growth rate: highest growth rate doesn't always give highest absolute Δ. Multiply rate × prior base.
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
**fastest_path:** MS at 20% growth: prior ≈$359M → Q1 ≈$431M. Op profit at 17% margin = $73.3M. Total = 74.8 + 73.3 + 27.9 ≈ $176M.
**explanation:** MS scenario: prior $359M × 1.20 = $431M. New MS op profit = $431M × 0.17 ≈ $73.3M (+$1.9M). Lyton and NC unchanged. Total ≈ $176M. Answer C.
**mistake_a:** $172M — too low.
**mistake_b:** $174.1M — original total (no FX adjustment).
**mistake_d:** $178M — overshoot.
**mistake_e:** $180M — adding revenue bump *directly* without margin multiplier.
**common_trap:** Adding the revenue bump (~$11M) to the total profit. Op profit needs the margin (17%) applied: ~$2M, not $11M.
**takeaway:** Forecast Δ profit: Δ profit = Δ revenue × margin. Don't add raw revenue to profit.
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
**fastest_path:** Tab 1: 182 PalliMed-X vs 141 control achieved endpoint. 182 > 141 — C must be true.
**explanation:** 182 > 141, directly verifiable. A: no subgroup breakdown. B: no p-value reported. D: 16% nausea ≠ majority. E: reversed (PMX 26% > control 23%). Answer C.
**mistake_a:** No subgroup data — can't claim "every subgroup."
**mistake_b:** Statistical significance requires p-value; not reported.
**mistake_d:** Nausea 16% is not a majority.
**mistake_e:** Reversed — PMX 26% > control 23%.
**common_trap:** Picking (B) because a 14-pp gap *seems* clinically meaningful. But statistical significance is a specific claim requiring a p-value, not a magnitude.
**takeaway:** Trial-data MSR: distinguish *magnitude* from *significance*. Magnitude is the gap; significance requires explicit p-value.
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
**fastest_path:** 12% (PMX) − 8% (control) = 4 pp.
**explanation:** Tab 3: discontinuation 12% vs 8%. Δ = 4 pp. Answer B.
**mistake_a:** 2 — slip.
**mistake_c:** 6 — slip.
**mistake_d:** 8 — using control rate alone.
**mistake_e:** 12 — using PMX rate alone.
**common_trap:** Confusing pp difference (4) with relative increase (50%). Question asks pp.
**takeaway:** Pp vs % change: pp = absolute difference; % change = relative.
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
**fastest_path:** Δ success rate: 61−47 = 14 pp → 14 per 100. Δ discontinuation: 12−8 = 4 pp → 4 per 100.
**explanation:** Per 100 patients: additional successes = 14 (rate diff), additional discontinuations = 4. Answer B.
**mistake_a:** Δ success is 14 (not 10).
**mistake_c:** Δ disc is 4 (not 7).
**mistake_d:** Δ success is 14 (not 7).
**mistake_e:** Δ values are 14 and 4, not 20 and 10.
**common_trap:** Computing the *ratio* of rates (61/47 ≈ 30%) instead of the difference. "Additional patients" needs absolute pp difference applied to 100.
**takeaway:** "Additional patients per N" = pp difference × N/100. Don't confuse with relative lift (%).
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
**fastest_path:** Threshold: 2.6 × 0.88 = 2.288 L/100km. SA-200 (3.0) fails, SA-300 (2.6) fails, SA-400 (2.2) ✓, SA-500 (1.9) ✓.
**explanation:** Standard requires ≤ 2.288 L. SA-400 (2.2) and SA-500 (1.9) qualify. SA-200 (3.0) and SA-300 (2.6) fail. Answer D.
**mistake_a:** SA-200 fails.
**mistake_b:** SA-300 fails (at industry average, not below threshold).
**mistake_c:** SA-300 fails — only SA-400 passes among the rest.
**mistake_e:** SA-300 fails the 12%-below threshold.
**common_trap:** Picking (E) because SA-300 *equals* the industry average. The threshold is 12% *below* (2.288), not at (2.6).
**takeaway:** Regulatory thresholds: compute the literal threshold (X% below average), then compare. "Below average" ≠ "12% below average."
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
**fastest_path:** Failing models: SA-200 (30%) + SA-300 (45%) = 75%.
**explanation:** From Q1, SA-200 and SA-300 fail. Combined US sales share: 30% + 45% = 75%. Answer E.
**mistake_a:** 25% — SA-400 share (passes standard).
**mistake_b:** 30% — SA-200 alone.
**mistake_c:** 45% — SA-300 alone.
**mistake_d:** 55% — slip on summing.
**common_trap:** Forgetting SA-300 also fails (it's *at* 2.6, not below the 12% threshold). Easy to count only SA-200 (30%) as failing.
**takeaway:** Volume-share follow-up: chain answers from prior question. Failing-model set determines failing-share sum.
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
**fastest_path:** 150 × $1.2M = $180M.
**explanation:** Retrofit per aircraft = $1.2M (Tab 3). 150 SA-200 × $1.2M = $180M. Answer C.
**mistake_a:** $120M — using $0.8M per aircraft.
**mistake_b:** $150M — using $1.0M per aircraft.
**mistake_d:** $240M — overshoot.
**mistake_e:** $300M — using $2M per aircraft.
**common_trap:** Slipping the per-aircraft figure to a round $1.0M or $1.5M. Read the literal $1.2M from Tab 3.
**takeaway:** Cost projection: literal per-unit × count. No rounding.
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
**fastest_path:** Equities contribution = 0.60 × (16−13) = +1.8 pp. Positive → B must be true.
**explanation:** Equities: 0.60·(16−13) = +1.8 pp — positive contribution. A: Fixed Income underperformed (7<8). C: FI contribution = −0.3 pp (negative). D: total was 12.9%, not 11%. E: weights 60/30/10 not equal. Answer B.
**mistake_a:** FI underperformed; not "every asset class."
**mistake_c:** FI contribution is negative.
**mistake_d:** 12.9% ≠ 11%.
**mistake_e:** 60/30/10 not equal.
**common_trap:** Picking (A) because Equities and Alternatives outperformed. Always check *every* asset class.
**takeaway:** Attribution MSR: contribution = weight × (portfolio − benchmark) for each class. Sign depends on whether portfolio beats benchmark in that class.
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
**fastest_path:** 0.10 × (12 − 10) = 0.20 pp.
**explanation:** Alternatives contribution = weight × Δ = 0.10 × 2 = 0.20 pp. Answer B.
**mistake_a:** 0.1 — half the answer.
**mistake_c:** 0.5 — overshoot.
**mistake_d:** 1.0 — using wrong weight.
**mistake_e:** 2.0 — return *differential* without weight applied.
**common_trap:** Picking (E) because the *return differential* is 2 pp. But contribution requires weight × differential, not differential alone.
**takeaway:** Contribution = weight × (portfolio − benchmark). Always apply the weight.
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
**fastest_path:** Sum contributions: 1.8 + (−0.3) + 0.2 = 1.7 pp. Cross-check: 12.9 − 11.2 = 1.7. ✓
**explanation:** Equities +1.8, FI −0.3, Alt +0.2. Total = 1.7 pp. Cross-check via Tab 1: 12.9% − 11.2% = 1.7 pp. Answer C.
**mistake_a:** 1.0 — undercount.
**mistake_b:** 1.5 — undercount.
**mistake_d:** 2.0 — ignoring negative FI contribution.
**mistake_e:** 2.5 — way over.
**common_trap:** Ignoring the FI underperformance (−0.3 pp). Total excess includes negative contributions.
**takeaway:** Total excess return: sum *all* contributions, including negatives. Cross-check via direct (portfolio − benchmark) calculation.
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
**fastest_path:** Tab 2 direct: A $400, B $250, C $500. C wins.
**explanation:** Tab 2 gives per-customer revenue by variant: A = $400, B = $250, C = $500. C wins outright — no arithmetic needed, just read the right row off the right tab.
**mistake_a:** $400 — second-highest.
**mistake_b:** $250 — lowest.
**mistake_d:** A and C aren't tied (400 vs 500).
**mistake_e:** Data is provided directly.
**common_trap:** Confusing avg revenue per customer with total revenue or efficiency.
**takeaway:** Direct fact-lookup MSR: read the relevant column. Don't compute when not asked.
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
**fastest_path:** Same impressions (5000), so highest conversions = highest rate. A 100, B 150, C 75 → B.
**explanation:** Conversion rate = conversions / impressions. With equal impressions, B's 150 conversions wins. Rates: 2.0%, 3.0%, 1.5%. Answer B.
**mistake_a:** A 2% < B 3%.
**mistake_c:** C 1.5%, lowest.
**mistake_d:** Rates clearly differ.
**mistake_e:** Computable directly.
**common_trap:** Confusing volume (conversions) with rate. With equal impressions, they coincide; otherwise compute the ratio.
**takeaway:** Rate metric: conversions / impressions. With equal denominators, the numerator alone ranks them.
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
**fastest_path:** Efficiency = revenue/spend. A: $40K/$8K = 5.0. B: $37.5K/$15K = 2.5. C: $37.5K/$12.5K = 3.0. A wins.
**explanation:** Efficiency = total revenue / ad spend. A: 100·400/8000 = 5.0. B: 150·250/15000 = 2.5. C: 75·500/12500 = 3.0. A highest. Answer A.
**mistake_b:** B has highest conversions but lowest efficiency.
**mistake_c:** C has highest avg revenue but middle efficiency.
**mistake_d:** Values differ.
**mistake_e:** All computable.
**common_trap:** Ranking by intermediate metrics (conversions or avg revenue) instead of the final efficiency. Efficiency joins revenue and cost.
**takeaway:** Composite-metric MSR: compute the named final metric. Intermediate-metric leaders rarely lead on composite metrics.
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
**fastest_path:** Two conditions: growth > market AND margin ≥ 20%. Cloud (12>9, 22%) ✓, Security (18>14, 28%) ✓, AI (65>55, 15%) ✗ on margin.
**explanation:** Check both conditions per line. Cloud: 12>9 ✓, 22 ≥20 ✓ → high. Security: 18>14 ✓, 28 ≥20 ✓ → high. AI: 65>55 ✓ but 15 <20 ✗ → review. Two qualify. Answer D.
**mistake_a:** Security also qualifies.
**mistake_b:** Cloud also qualifies.
**mistake_c:** AI fails on margin.
**mistake_e:** AI fails on margin.
**common_trap:** Picking (E) because AI Platform has dramatic growth (65%). Margin threshold (≥20%) eliminates it.
**takeaway:** Multi-criteria classification: BOTH conditions must hold. Strong growth alone doesn't override the margin gate.
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
**fastest_path:** NA total = 280+160+75 = $515M. Company total = 450+280+120 = $850M. 515/850 ≈ 61%.
**explanation:** Tab 3 NA: 280+160+75 = $515M. Tab 2 total: $850M. NA share = 515/850 ≈ 60.6% → 61%. Answer D.
**mistake_a:** 45% — undershoot.
**mistake_b:** 52% — slip.
**mistake_c:** 55% — slip.
**mistake_e:** 68% — overshoot.
**common_trap:** Using only one product line's NA share (e.g., Cloud 280/450 ≈ 62%) instead of the company-wide share.
**takeaway:** Cross-tab share: sum the relevant rows in one tab; divide by the total from another tab.
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
**fastest_path:** Security 2024 = $280M. ×1.18 = $330.4M ≈ $330M.
**explanation:** Tab 2: Security 2024 = $280M. ×1.18 = $330.4M. Answer C.
**mistake_a:** $290M — under-applying growth.
**mistake_b:** $310M — slip.
**mistake_d:** $350M — overshoot.
**mistake_e:** $370M — applying growth twice.
**common_trap:** Applying growth to the *company total* ($850M × 1.18) instead of the Security Services line. Read which entity grows.
**takeaway:** Forecast MSR: identify which subgroup the growth rate applies to. Apply only to that subgroup's base.
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
