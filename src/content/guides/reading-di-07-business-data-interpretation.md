---
title: Business and Data Interpretation
description: How to reason about tradeoffs, forecasts, profitability, market share, risk, and conditional recommendations under data constraints. The business-judgment skill that decides DI problems wrapped in operational scenarios — when intuition is enough, when computation is required, and when the data doesn't support a confident conclusion.
section: DI
type: reading
---

# Chapter 3.7 — Business and Data Interpretation

## Core idea

Many DI problems are *wrapped in business scenarios*: a company evaluating a consolidation, a retailer assessing pricing changes, a manufacturer comparing supplier costs. The scenarios test more than data manipulation — they test *business judgment* under data constraints. When does the data support a conclusion? When does it suggest a tradeoff? When does it require a conditional recommendation ("the consolidation makes sense *if* assumptions X and Y hold")?

The mindset shift in this chapter: *the data drives the conclusion; conclusions that go beyond the data are wrong*. Even if a recommendation seems "business-savvy," if the data doesn't support it, it's the wrong answer. Strong solvers stay rigorously within what the data shows; weak solvers add unjustified business intuition and miss.

### Quick check

1. Many DI problems are wrapped in what kind of scenarios?
2. The chapter argues these problems test business judgment under what?
3. The mindset shift is *the data drives the conclusion* — what does this rule out?
4. Even if a recommendation seems "business-savvy," what determines whether it's right?
5. Why is *outside business intuition* dangerous on this question type?

*Answers.* (1) Business scenarios — consolidations, pricing, supplier comparisons, forecasting, etc. (2) Data constraints — when does the data support a conclusion, when does it require qualification. (3) Adding outside business knowledge that the data doesn't justify. (4) Whether the data supports it — not whether it sounds business-smart. (5) The data may show the opposite of conventional wisdom (e.g., "consolidations save money" might be wrong for *this* specific consolidation, even if true on average).

## Why it matters

Three reasons business interpretation deserves its own chapter.

*The temptation to add outside business knowledge is real and dangerous*. A student with an MBA-track background might "know" that consolidations save money on average — but the GMAT problem in front of them gives specific data, and the data may show this consolidation specifically would *not* save money. Picking the answer based on general business knowledge instead of specific data is wrong. Discipline: data first, intuition second.

*Tradeoff analysis is a recurring theme*. Many DI problems present a decision with both pros and cons (a price increase boosts margin but may reduce volume). Strong solvers identify both sides; weak solvers anchor on one side and miss.

*Conditional recommendations are an important answer pattern*. The right answer may be "the consolidation makes sense *if* the demand pattern stays the same." A student who picks the unconditional version of the answer is wrong; the conditional is the precise match.

### Quick check

1. The temptation to add outside business knowledge is real and dangerous — why specifically dangerous on the GMAT?
2. *Tradeoff analysis* is a recurring theme — what's the failure mode of one-sided thinking?
3. *Conditional recommendations* are an important answer pattern — what's the structure?
4. A student with MBA-track background brings what risk to business-DI problems?
5. Why is "match the answer's strength to the data" the right discipline?

*Answers.* (1) The data may show this *specific* consolidation/pricing/forecast doesn't follow the general pattern; ignoring data in favor of intuition produces wrong answers. (2) Anchoring on one side — picking the savings without acknowledging the cost (or vice versa) — produces incomplete answers; trap answers position for this. (3) "The action is right *if* condition X holds" — surfacing the dependency rather than committing unconditionally. (4) "Knowing" the conventional answer (consolidation saves money) without checking what the specific data shows. (5) The data supports a confident, qualified, or only-conditional conclusion; matching that strength is what produces the right answer.

## Mental model

Picture every business-DI problem as a *consultant's analytical memo*. The data is the analysis section. The question is asking you for the *conclusion section* — the recommendation, the tradeoff, the projection. A good consultant's memo doesn't claim more than the data supports. The recommendation is qualified by the data's coverage and the assumptions made. Your job is to write the consultant's conclusion that the data *actually justifies*.

The consultant analogy carries three reminders. First, *stay within the data*. Don't add outside knowledge. Second, *acknowledge tradeoffs*. The right answer often has a "but" or "if." Third, *match the precision*. The data supports a confident recommendation, a qualified one, or only a conditional one — match the answer's certainty to the data's strength.

### Quick check

1. The "consultant's analytical memo" mental model says the data is what?
2. The question is asking for what?
3. A good consultant's memo doesn't claim more than what?
4. The recommendation is qualified by what?
5. Three reminders the analogy carries — name them.

*Answers.* (1) The analysis section — the data the consultant would reason from. (2) The conclusion section — the recommendation, the tradeoff, the projection. (3) More than the data supports — analytical memos are honest about evidence strength. (4) The data's coverage and the assumptions made. (5) Stay within the data; acknowledge tradeoffs; match the precision of the recommendation to the strength of the data.

## GMAT recognition signals

Five recurring business-DI scenario types.

*Consolidation / efficiency.* Multiple operations being combined or reduced; the question asks whether the consolidation produces savings or what the optimal version would be. Look for: fixed costs, variable costs, capacity constraints.

*Pricing / market response.* A pricing change and its expected effect. Look for: demand elasticity (how does volume change when price changes), margin (price minus cost per unit), and total profit.

*Forecasting / projection.* Past data and a question about the future. Look for: trend stability, seasonality, growth rates, and whether the projection assumes the past trend continues.

*Comparative analysis.* Two or more options (suppliers, locations, strategies) and the question asks which is best on some dimension. Look for: the dimension, the units, and any constraints that rule out options.

*Risk / sensitivity.* The question asks how the answer changes if an assumption changes. Look for: which variable is being varied, the range of variation, and the resulting outcomes.

### Quick check

1. Name the five recurring business-DI scenario types.
2. *Consolidation / efficiency* — what's typically asked?
3. *Pricing / market response* — what watch-for variables?
4. *Forecasting / projection* — what's the key qualification?
5. *Comparative analysis* — what's the structure?

*Answers.* (1) Consolidation/efficiency; pricing/market response; forecasting/projection; comparative analysis; risk/sensitivity. (2) Whether the consolidation produces savings or what the optimal version would be — look for fixed costs, variable costs, capacity constraints. (3) Demand elasticity (volume-vs-price), margin (price minus cost), total profit. (4) Trend stability — does the past data continue or plateau/reverse? (5) Two or more options (suppliers, locations, strategies); the question asks which is best on a specified dimension; check feasibility, not just optimality.

## Method

A four-step business-interpretation protocol.

*Step 1. Identify the business decision being evaluated.* What is the company considering? What are the options? What is the decision criterion (cost, profit, market share, risk)?

*Step 2. Locate the relevant data.* What metrics in the data set bear on the decision? Often it's a subset of the available data; ignore the rest.

*Step 3. Compute or compare.* Apply the data to the decision criterion. If cost is the criterion, sum the costs of each option. If profit, compute revenue minus cost for each. If market share, compute proportions.

*Step 4. Match the answer's strength to the data.* If the data clearly favors one option, the answer is unconditional. If two options are close, the answer may involve a tradeoff or a condition. Match the answer's qualifier ("if," "assuming," "unless") to the data's coverage.

### Quick check

1. State the four-step business-interpretation protocol.
2. Step 1 (identify the business decision) requires identifying what?
3. Step 2 (locate the relevant data) — why is it often a *subset* of the data?
4. Step 3 (compute or compare) — what determines the right operation?
5. Step 4 (match the answer's strength to the data) — when should the answer be conditional?

*Answers.* (1) Identify the business decision; locate the relevant data; compute or compare; match the answer's strength to the data. (2) What the company is considering, what the options are, what the decision criterion is (cost, profit, market share, risk). (3) Many DI problems include data that's relevant to the scenario but not the specific question. (4) The decision criterion — if cost, sum the costs; if profit, compute revenue minus cost; if market share, compute proportions. (5) When two options are close, when the data has uncertainty (forecasts), or when feasibility constraints rule out the apparent best.

## Common traps

Six recurring business-interpretation traps.

*Adding outside business intuition.* Picking an answer because it's "business-smart" rather than because the data supports it. Fix: stay within the data.

*Missing tradeoffs.* Anchoring on one side of a decision (the savings) without seeing the cost (the lost capacity, the migration risk). Fix: scan for both sides.

*Treating projections as certain.* The data shows past growth; the question asks about future growth. The answer should treat the projection as probabilistic, not certain. Fix: match certainty to evidence.

*Confusing absolute and relative metrics.* The question asks about percent change; the data is in absolute numbers. Or vice versa. Fix: read the question carefully.

*Ignoring constraint conditions.* The data shows option A is cheapest, but option A's capacity is too small to handle the demand. Option A is therefore not feasible despite being cheapest. Fix: check feasibility before optimizing.

*Picking the unconditional answer when the conditional is right.* "The consolidation will produce savings of $X" — but the consolidation only produces savings *if* demand remains stable. The right answer says "if demand remains stable." Fix: scan answer choices for conditional language.

### Quick check

1. Name three of the six common business-interpretation traps.
2. *Adding outside business intuition* — what's the discipline against?
3. *Missing tradeoffs* — what's the failure mode?
4. *Treating projections as certain* — what's the right discipline?
5. *Picking the unconditional answer when the conditional is right* — what's the recognition signal?

*Answers.* (1) Any three of: adding outside business intuition; missing tradeoffs; treating projections as certain; confusing absolute and relative metrics; ignoring constraint conditions; picking unconditional when conditional is right. (2) Stay within the data; outside knowledge that contradicts the data is wrong even when it sounds business-smart. (3) Anchoring on one side of a decision (the savings) without seeing the other (the lost capacity, the migration risk). (4) Match certainty to evidence — past trends don't entail future certainty. (5) Look for "if," "assuming," "unless" qualifiers in the answer choices — the right answer often acknowledges a dependency.

## Original mini-example

A worked example demonstrating business interpretation on a consolidation problem.

*Scenario.* A retail chain operates four stores: A, B, C, D. The chain is evaluating closing one store and redistributing its sales among the others. The data shows:

- Each store's annual revenue: A $4M, B $5M, C $3M, D $6M.
- Each store's annual fixed costs: A $1M, B $1.5M, C $0.8M, D $1.5M.
- Each store's variable cost is 70% of revenue.
- If a store closes, 60% of its sales transfer to the other stores; 40% are lost.

*Question.* If the chain closes the store with the lowest annual revenue and redistributes sales, what is the net change in total annual profit?

*Step 1 — Identify the decision.* Closing the lowest-revenue store (Store C, at $3M) and redistributing its sales.

*Step 2 — Locate the data.* Revenue, fixed costs, variable costs (70% of revenue), and the redistribution rule (60% transfer, 40% lost).

*Step 3 — Compute.*

Current annual profit:
- Total revenue = $4M + $5M + $3M + $6M = $18M.
- Total variable cost = 70% × $18M = $12.6M.
- Total fixed cost = $1M + $1.5M + $0.8M + $1.5M = $4.8M.
- Current profit = $18M - $12.6M - $4.8M = $0.6M.

After closing Store C:
- Lost sales from C: 40% × $3M = $1.2M lost. Transferred sales: 60% × $3M = $1.8M (now at A, B, D).
- New total revenue = $4M + $5M + $6M + $1.8M (from C) = $16.8M.
- New total variable cost = 70% × $16.8M = $11.76M.
- New total fixed cost = $1M + $1.5M + $1.5M = $4M (C's $0.8M is gone).
- New profit = $16.8M - $11.76M - $4M = $1.04M.

Net change = $1.04M - $0.6M = +$0.44M increase.

*Step 4 — Match strength.* The data clearly shows an increase. Answer: net profit increases by $0.44M (or approximately $440K).

*Trap to avoid.* The trap is to skip Step 1 and assume "closing a store reduces revenue, so profit drops." That's a piece of business intuition that the data contradicts: even with $1.2M of revenue lost, the fixed-cost savings ($0.8M) and the variable-cost savings (70% of $1.2M = $0.84M) outweigh the lost margin (30% of $1.2M = $0.36M). The data drives the conclusion; intuition would have produced the wrong answer.

The other trap is failing to track the redistribution. If you forget that 60% of C's sales transfer to A, B, D, you under-count revenue and under-count variable cost — both errors, but they don't cancel because the variable cost is only 70% of revenue. Tracking the redistribution carefully matters.

*Time spent.* About 3 minutes — most of it in the careful computation. On harder problems with more data, the discipline of locating only the relevant figures saves time.

## More worked examples

### Example 1 — Tradeoff identification

*Setup.* A retailer's pricing analysis shows that raising prices by 10% increased per-unit profit margin from 30% to 38%, but reduced unit sales volume by 8%. Question: did the price increase improve total profit?

*Thinking process.* New profit per unit increased proportionally; unit volume dropped. Total profit = profit per unit × volume. New ratio: (1.10 × original price × 0.38 / original price × 0.30) × (0.92 volume) = (1.10 × 38/30) × 0.92 ≈ 1.39 × 0.92 ≈ 1.28. Total profit rose by ~28%.

*Solution.* Yes, total profit rose despite reduced volume.

*Common mistake.* Anchoring on the volume drop ("sales fell, so this was bad") without computing the joint effect. The price increase boosted margin enough to outweigh the volume loss.

*Takeaway.* Tradeoffs require joint computation, not anchoring on one side. Total profit, not unit volume, is the right metric.

### Example 2 — Forecast certainty

*Setup.* Past 3 years of revenue: $10M, $11M, $12M (10% growth, then 9.1% growth). Question: "Will revenue likely exceed $14M next year?"

*Thinking process.* Linear extrapolation: $13M next year. The data shows growth is slowing slightly (10% → 9.1%). $14M would require 16.7% growth — substantially above recent pattern. The forecast doesn't strongly support $14M.

*Solution.* Probably not — recent trend doesn't support that level of growth. The right answer would be qualified ("probably not, given recent slowing growth") rather than confident.

*Common mistake.* Assuming linear extrapolation from past data. Recent growth was decelerating; assuming it continues constant is unjustified.

*Takeaway.* Forecasts based on past data should be qualified by trends in that data — accelerating, decelerating, or stable. Match the answer's confidence to the data's predictive strength.

### Example 3 — Conditional recommendation

*Setup.* A company is evaluating two suppliers: A (lower per-unit cost, longer lead time) and B (higher per-unit cost, shorter lead time). Question: which supplier should the company use?

*Thinking process.* The right answer depends on the company's *priorities and constraints*. If demand is steady and inventory storage is cheap, longer lead time is acceptable → choose A. If demand is volatile and stockouts are expensive, shorter lead time matters more → choose B.

*Solution.* The right answer is a conditional: "Choose A if [steady demand, low storage cost]; choose B if [volatile demand, high stockout cost]."

*Common mistake.* Picking one supplier without conditions, based on which factor seems "more important." The data doesn't support an unconditional answer; the right answer surfaces the dependency.

*Takeaway.* When a tradeoff exists, the right answer often is a *conditional* recommendation that names which condition tilts the decision. Unconditional answers in these scenarios are usually trap answers.

## Active recall checkpoint

Close this chapter and answer these without looking back.

- Why is *outside business intuition* a dangerous habit on business-DI problems?
- What is the *consultant's analytical memo* mental model?
- Name the *five business-DI scenario types*.
- What is the four-step business-interpretation protocol?
- When should an answer have a *conditional* qualifier?
- Name three of the *common traps* and the failure mode each represents.

*Application.* For each described business-DI scenario, identify what kind of qualifier (if any) the right answer would carry.

- A retailer's pricing analysis shows that raising prices by 10% increased per-unit profit but reduced sales volume by 8%. The question asks whether the price increase improved total profit.
- A consolidation analysis shows fixed-cost savings if one of three plants closes, but the closing plant has the only specialized production capability for a low-volume product line.
- A forecast based on three years of past growth projects 15% growth next year. The question asks how confident the forecast should be.
- A comparison of two suppliers shows Supplier A has lower per-unit cost but longer lead times. The question asks which supplier the company should use.

For each, identify the tradeoff or condition that the right answer should acknowledge, and name the specific outside-knowledge trap that an unqualified or business-intuition-driven answer would represent.

If you missed any, re-read the relevant section and test yourself in three days.

## Review schedule

- *Day 1:* Read the chapter end to end.
- *Day 3:* Drill five business-DI problems with explicit "data first, intuition second" discipline.
- *Day 7:* Re-read *Common traps*. Drill five more problems specifically watching for tradeoff analysis.
- *Day 14:* Active recall checkpoint without re-reading. Drill ten business problems under tight time.
- *Day 30:* Re-read the chapter. Identify your dominant business-trap.
- *Day 60:* Final re-read. By now data-first should be reflexive.

## Connection to other skills

Business interpretation connects to multiple chapters. *Word Problems* (Chapter 1.5) provides the translation skills for revenue-cost-profit setups. *Statistics, Probability, and Combinatorics* (Chapter 1.6) provides the framework for forecasting and projection questions. *Critical Reasoning Core Framework* (Chapter 2.3) provides the discipline of separating evidence from conclusion.

Cross-section connection: the *match-strength-to-evidence* discipline in business interpretation is identical to *match-claim-to-evidence* in CR (Chapter 2.4) and to *match-precision-to-data* in Graphics (Chapter 3.4). The skill of calibrating confidence to evidence is one skill across all three sections.
