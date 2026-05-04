---
title: Word Problems
description: How to translate dense scenario prose into clean equations, the eight word-problem subtypes that account for nearly every example on the section, and the misread traps that decide word problems above the 70th percentile. Read for the equation, not the story.
section: Quant
type: reading
---

# Chapter 1.5 — Word Problems

## Core idea

Word problems are *translation problems*. The math underneath them — usually a single equation or a small system — is rarely hard once it's written down. The hard part is reading the scenario prose, identifying which quantities matter, and converting the relationship into algebra without losing a constraint, dropping a unit, or solving for the wrong thing. Most word-problem mistakes are not math mistakes. They are *reading mistakes*. The fix is not more algebra. It is a tighter translation protocol.

The volume matters: word problems are one of the largest content surfaces on the section — most Quant sections include several — and they cluster at the difficulty bands where pacing pressure is highest. A student who tightens translation accuracy without learning a single new piece of math usually sees Quant performance improve, because *the math underneath was already mastered* and the wrong answer was a reading-error symptom, not a content-knowledge symptom.

### Quick check

1. Word problems are primarily what kind of problem rather than what kind?
2. Most word-problem mistakes are not math mistakes — what are they?
3. The core skill of word problems is: translate slowly, then *what* quickly?
4. What proportion of the Quant section do word problems make up roughly?
5. What's the consequence of rushing the translation step?

*Answers.* (1) Translation problems, not math problems. (2) Reading mistakes — misidentifying the unknown, missing constraints, dropping units. (3) Solve quickly. (4) About 30% (one of the larger content surfaces). (5) A wrong setup, which produces algebra-correct but problem-wrong answers — and you typically discover the error mid-solve, costing 60+ extra seconds.

## Why it matters

Three reasons word problems decide scores.

*The translation step is high-leverage*. Once the equation is written, most word problems are routine algebra. The whole problem is decided in the first thirty seconds — the reading and translation phase. Students who rush this step pay for it for the next two minutes.

*The trap surface is wide*. Word problems can hide misreads in ten different places: which variable is the unknown, which units are in play, which constraint applies, what the question is actually asking, whether the relationship is direct or inverse, whether the rate is per unit time or per unit something else. Strong solvers have a translation checklist that scans for all of these. Weak solvers translate in a hurry and miss one.

*Word problems test "reading for structure"* — exactly the meta-skill that connects all three sections. Strong word-problem reading transfers to strong Critical Reasoning reading and strong Multi-Source Reasoning reading. Tighten one and the others tighten as a side effect.

### Quick check

1. The translation step is high-leverage because what?
2. The trap surface is wide — name three places word problems can hide misreads.
3. Why does word-problem reading transfer to *Verbal* skills?
4. Approximately how much time should the translation phase take?
5. What's the difference between rushing translation and rushing solving?

*Answers.* (1) Once the equation is written, most word problems are routine algebra; the whole problem is decided in the first 30 seconds. (2) Any three of: which variable is the unknown, which units are in play, which constraint applies, what the question is actually asking, whether the relationship is direct or inverse. (3) "Reading for structure" is the meta-skill that connects all three sections — strong word-problem reading transfers to strong CR and MSR. (4) About 30-45 seconds of the 2-minute budget. (5) Rushing solving costs you the easy minute at the end; rushing translation costs you the entire problem.

## Mental model

Picture every word problem as a *story wrapped around an equation*. The story is decoration — names, units that cancel, parenthetical clarifications, scenario context that does not affect the math. The equation is substance — the relationship between the quantities that determines the answer. Your job is to *peel the story off and write the equation*. The peeling takes thirty to forty-five seconds. The math takes thirty to sixty seconds. The whole problem is two minutes if you peel cleanly, three to four minutes if you don't.

Strong solvers literally read word problems twice on a first pass. The first read is for the *story* — get the scenario in your head. The second read is for the *equation* — what's the unknown, what's known, what's the relationship. The two-pass habit looks slow and is actually faster, because the alternative is misreading on the first pass and discovering it after a minute of algebra.

### Quick check

1. The "story wrapped around an equation" model says the story is what?
2. The equation is what?
3. Strong solvers read word problems how many times on the first pass?
4. What happens on each of the two reads?
5. The two-pass habit looks slow but is actually faster — why?

*Answers.* (1) Decoration — names, irrelevant context, parenthetical clarifications. (2) Substance — the relationship between quantities that determines the answer. (3) Twice. (4) First read for the *story* (orient to the scenario); second read for the *equation* (identify unknowns, knowns, relationship). (5) The alternative is misreading on the first pass and discovering it after a minute of failed algebra. Two careful reads beat one careless one.

## GMAT recognition signals

Eight word-problem subtypes account for nearly every example on the section. Recognize the subtype fast and switch into the right framework.

*Rate problems*. "Tom paints a fence in 4 hours; Sarah paints it in 6." Recognition: rates per unit time, the word "rate," "speed," "per hour," "per minute," or "together." Framework: convert each rate into "fraction of job per unit time," add the rates if working together, subtract if working against each other. Total time = 1 / (combined rate).

*Work and combined-rate problems*. The above is a subtype. Combined rate examples extend to filling pools (one pipe in, one out), assembly lines, etc. Same framework.

*Mixture problems*. "How much 30% solution must be added to 50% solution to produce a 40% mixture?" Recognition: percentages or concentrations, plus a target percentage. Framework: write a mass-balance equation. Total stuff before = total stuff after; total active ingredient before = total active ingredient after. Two equations, two unknowns.

*Weighted average problems*. "The average of two groups, weighted by their sizes, is X. If group A has Y people..." Recognition: averages of subgroups combining into a total average. Framework: weighted average equals the sum of (subgroup average × subgroup weight) divided by total weight. Often solvable by setting up "the deviation from the overall average" as the unknown.

*Overlapping sets*. "Out of 100 people, 60 like coffee, 40 like tea, 20 like both. How many like neither?" Recognition: two or three categories with overlaps. Framework: use inclusion-exclusion (|A ∪ B| = |A| + |B| − |A ∩ B|) or draw a Venn diagram with the overlap region drawn explicitly.

*Profit, revenue, and cost problems*. "A widget sells for $X, costs $Y to make, fixed costs are $Z, what is breakeven?" Recognition: financial vocabulary, breakeven, profit margin, markup, discount. Framework: write profit = revenue − cost; revenue = price × quantity; cost = variable × quantity + fixed.

*Growth and decay problems*. "A population doubles every 3 years; current population is 1,000." Recognition: compound growth, exponential decay, "doubles," "halves," "grows by X% per period." Framework: final = initial × (1 + r)^t for compound, or initial × 2^(t/doubling-time) for doubling-format.

*Sequences and patterns*. "A sequence is defined by a₁ = 3, aₙ = 2aₙ₋₁ + 1. What is a₅?" Recognition: subscript notation, recursive definitions, term-finding requests. Framework: compute a few terms by hand, look for a pattern (geometric, arithmetic, or non-standard).

### Quick check

1. Name the eight word-problem subtypes.
2. The framework for combined-rate problems is what?
3. The framework for mixture problems uses what kind of equation?
4. Weighted-average problems can often be solved by reasoning about what?
5. What's the framework for overlapping-sets problems?

*Answers.* (1) Rates; work and combined-rate; mixtures; weighted averages; overlapping sets; profit/revenue/cost; growth and decay; sequences and patterns. (2) Convert each rate to "fraction of job per unit time," add the rates if working together (subtract if opposing), then take the reciprocal of the combined rate. (3) Mass-balance equations — total stuff before = total stuff after; total active ingredient before = total active ingredient after. (4) Deviations from the overall average, weighted by subgroup size, summing to zero. (5) Inclusion-exclusion: |A ∪ B| = |A| + |B| − |A ∩ B|, then subtract from total to get the "neither" region.

## Method

A four-step translation protocol. Run it on every word problem.

*Step 1. Read the scenario for the story (first pass)*. Don't write anything. Just understand what the problem is describing. Who is doing what to whom, in what context. Five to ten seconds.

*Step 2. Re-read for the equation (second pass)*. This time write on scratch. Identify the unknown — what does the problem ask for? Define a variable for it. Identify the known quantities — write them down with units. Identify the *relationship* that connects them. The relationship is the equation. Twenty to thirty seconds.

*Step 3. Solve the equation*. Algebra in this step is usually routine — by the time you have the equation, the math is at most a few steps. Thirty to forty-five seconds.

*Step 4. Re-read the question and sanity-check*. The most expensive word-problem error is solving correctly for the wrong variable. Check what the problem asked for. Check that your units are right. Check that your answer is in the plausible range — if the problem asked "how many people in the room" and you got 4.7, you need to recheck. Five to ten seconds.

Total budget: about ninety seconds. Strong solvers run the whole protocol consistently in that budget; weak solvers skip Step 1 (the first read) and Step 4 (the final check) and pay for both omissions.

### Quick check

1. Name the four-step translation protocol.
2. What does Step 1 (read the scenario for the story) specifically *not* involve?
3. What two things does Step 2 (re-read for the equation) require you to identify?
4. Why does Step 3 (solve the equation) usually take less time than the surrounding steps?
5. What's the discipline at Step 4 (re-read the question and sanity-check)?

*Answers.* (1) Read for the story; re-read for the equation; solve the equation; re-read the question and sanity-check. (2) Writing on scratch — just understand the scenario in your head. (3) The unknown (with a defined variable) and the relationship that connects known quantities to the unknown. (4) By the time you have the equation, the math is at most a few mechanical steps. (5) Compare your answer to the question's exact request — units, what was actually asked for, plausible range — and adjust if needed.

## Common traps

Six recurring word-problem traps.

*Solving for the wrong variable.* The problem asks for the *number of red marbles*. You solved for the *total number of marbles* and bubbled. Fix: re-read the question after solving.

*Unit mismatches.* The problem mixes minutes and hours, dollars and cents, miles and kilometers. You set up the equation without converting, and your answer is off by a factor of 60 or 100. Fix: write units next to every quantity on scratch and convert before you write the equation.

*Inverse-relationship confusion.* "If x is *inversely* proportional to y, and x doubles, then y..." halves. Direct and inverse proportionality are easy to mix up under time pressure. Fix: write the relationship algebraically (xy = k for inverse, x/y = k for direct) before reasoning about it.

*Missing implicit constraints.* The problem says "students" — i.e., positive integers. You produce a non-integer answer. Fix: scan for integer-implied vocabulary (people, items, rooms, days, etc.) and check that your answer respects integer constraints.

*Mistranslating "more than" or "less than."* "John has 5 more than twice what Mary has" is J = 2M + 5, not J = 2(M + 5). The placement of "more than" matters. Fix: read these phrases slowly and translate them word by word.

*Mixing up rate types.* A rate of "30 mph" is "30 miles per 1 hour." A rate of "30 minutes per page" is "30 minutes per 1 page" or equivalently "1/30 page per minute." Confusing these two formats produces wrong setups. Fix: always write the rate as a fraction with the unit you care about in the numerator.

### Quick check

1. Name three of the six common word-problem traps.
2. What does "solving for the wrong variable" look like in practice?
3. How do you avoid unit mismatches in setup?
4. "5 more than twice what Mary has" translates to what equation if Mary has M?
5. The most common failure mode in rate problems is what?

*Answers.* (1) Any three of: solving for the wrong variable; unit mismatches; inverse-relationship confusion; missing implicit constraints; mistranslating "more than" / "less than"; mixing up rate types. (2) The problem asks for *red marbles*; you solve for *total marbles* and bubble. The math was right; the question was different. (3) Write units next to every quantity on scratch and convert before writing the equation. (4) J = 2M + 5 (not J = 2(M + 5)). The "5 more than" attaches to the doubling, not Mary's count. (5) Adding the times instead of the rates — produces wrong setups for "working together" scenarios.

## Original mini-example

A worked example to demonstrate the translation protocol on a rate problem.

*Problem.* A logistics company runs two parallel sorting machines, each operating independently. Machine A, working alone, can sort the daily shipment in 3 hours. When Machine A and Machine B operate together, the same shipment is sorted in 2 hours. How many hours would Machine B take to sort the shipment working alone?

*First read (the story).* Two machines, working separately and together. Combined-rate scenario.

*Second read (the equation).* Machine A's rate: 1/3 of the shipment per hour. Machine B's rate: 1/b of the shipment per hour, where b is the hours Machine B needs alone. Combined rate equals the sum of individual rates: 1/3 + 1/b. The combined operation finishes the shipment in 2 hours, so combined rate = 1/2 per hour.

*Equation.* 1/3 + 1/b = 1/2. Solve: 1/b = 1/2 − 1/3 = 3/6 − 2/6 = 1/6. So b = 6.

*Sanity check.* Machine B takes 6 hours alone — slower than Machine A. The combined time (2 hours) is faster than either machine alone but closer to A's solo time, since A is the faster contributor. Internally consistent.

*Trap to avoid.* The most common wrong setup adds the *times* instead of the rates: 3 + b = 2, which gives a negative answer and makes no sense. The right framework is to *add the rates* (work-per-hour, expressed as fractions of the job), then take the reciprocal of the combined rate to get the combined time. Whenever you see "working together," reach for rates, not times. The trap answer corresponding to additive times sometimes appears as a small number that looks plausible enough to bubble in a hurry.

*Time spent.* Reading: 10 seconds. Translation: 25 seconds. Solving: 30 seconds. Sanity check: 5 seconds. Total: 70 seconds, well under the average two-minute budget.

## More worked examples

### Example 1 — Weighted average

*Setup.* Class A has 20 students with average score 75. Class B has 30 students with average score 85. What is the average score across both classes combined?

*Thinking process.* Weighted average = (sum of all scores) / (total students) = (20 × 75 + 30 × 85) / 50 = (1500 + 2550) / 50 = 4050 / 50 = 81.

*Solution.* 81.

*Common mistake.* Averaging the two means directly: (75 + 85)/2 = 80. This ignores that Class B is larger and pulls the combined average toward 85.

*Takeaway.* When combining averages of subgroups of different sizes, you must weight by size. The simple average of two means is correct only when the subgroups are equal in size.

### Example 2 — Overlapping sets

*Setup.* In a survey of 200 people, 120 like coffee, 90 like tea, and 50 like both. How many like neither?

*Thinking process.* Inclusion-exclusion: |coffee or tea| = 120 + 90 − 50 = 160. So |neither| = 200 − 160 = 40.

*Solution.* 40 people like neither.

*Common mistake.* Adding 120 + 90 = 210 (which exceeds the total of 200) — the 50 who like both are double-counted.

*Takeaway.* When two categories overlap, the union is the sum minus the intersection: |A ∪ B| = |A| + |B| − |A ∩ B|. The neither-region is then total minus union.

### Example 3 — Inverse rate translation

*Setup.* Pump A fills a tank in 4 hours. Pump B drains the same tank in 6 hours. If both run together with the tank initially empty, how long until the tank is full?

*Thinking process.* Rates, not times. Pump A's rate: +1/4 of the tank per hour. Pump B's rate: −1/6 (drains, so negative). Combined rate: 1/4 − 1/6 = 3/12 − 2/12 = 1/12 of the tank per hour. Time to fill: 1 / (1/12) = 12 hours.

*Solution.* 12 hours.

*Common mistake.* Adding the times: 4 + 6 = 10 hours. Or subtracting them: 6 − 4 = 2 hours. Both ignore that the rates combine, not the times.

*Takeaway.* For combined-rate problems, work in *rates per unit time* and add (or subtract, when one process opposes the other). Then take the reciprocal of the combined rate to get the combined time.

## Active recall checkpoint

Close this chapter and answer these without looking back.

- Why are word problems primarily *translation* problems rather than *math* problems?
- Name the *eight word-problem subtypes* and one recognition signal for each.
- What is the four-step translation protocol? What does Step 1 specifically *not* involve?
- For combined rates, do you add rates or add times? Why does the other approach fail?
- Name three of the *common traps* and the failure mode each represents.
- In the worked example, what was the equation and how was it derived from the rate framework?

*Application.* For each scenario, name the word-problem subtype and the framework you'd deploy.

- "Two automated assembly lines together produce a daily order in 4 hours; line A alone takes 6 hours. How long does line B take alone?"
- "The average of five test scores is 80. If the lowest score is dropped, the average rises to 85. What was the lowest score?"
- "Of 100 employees, 60 are certified in language X, 50 in language Y, and 20 in both. How many are certified in neither?"
- "A solution containing 30% acid is mixed with a solution containing 50% acid to produce 100 liters of 42% acid. How many liters of the 30% solution were used?"
- "A bacterial culture doubles every 3 hours. After 12 hours, the culture contains 16,000 cells. How many cells did it contain initially?"

For each, identify the subtype (combined-rate / weighted average / overlapping sets / mixture / growth-and-decay), the variable you'd define, and the equation you'd write before solving.

If you missed any, re-read the relevant section and test yourself again in two days.

## Review schedule

- *Day 1:* Read the chapter end to end. Memorize the eight subtypes.
- *Day 3:* Drill twenty word problems. For each, identify the subtype before solving and write down the recognition signal you used.
- *Day 7:* Re-read *Common traps*. Identify which trap is your most frequent failure; drill problems specifically on that trap.
- *Day 14:* Active recall checkpoint without re-reading. Drill ten word problems under a tight 90-second cap to force the protocol.
- *Day 30:* Re-read the chapter with full error-log data. Look for patterns — are your wrong answers concentrated in one subtype? In one trap? Re-target.
- *Day 60:* Final re-read. By now the translation protocol should be reflexive.

## Connection to other skills

Word problems chain back into earlier chapters and forward into later ones. *Algebra and Equations* (Chapter 1.4) is what executes once the translation produces an equation — the cleaner the algebra, the smaller the translation tax. *Number Properties* (Chapter 1.3) often hides inside word problems through integer constraints ("how many widgets," "how many students"). *Arithmetic Foundations* (Chapter 1.2) is the engine that makes the equation-solving step fast. *Statistics, Probability, and Combinatorics* (Chapter 1.6) frequently uses word-problem framing to embed counting and probability questions.

The cross-section connection runs deeper here than almost anywhere else in the curriculum. *Reading the equation, not the story* operates on the same cognitive move as *reading the argument structure, not the topic* in Verbal (Chapter 2.2) and *reading the data relationship, not the surface presentation* in Data Insights (Chapter 3.5). All three demand the same act: stripping decoration off a passage to expose the formal object underneath — equation, argument skeleton, data structure. Word problems are where the skill becomes most visible in Quant because the surface decoration is densest; but transfer to the other sections is direct, because the underlying habit is the same.
