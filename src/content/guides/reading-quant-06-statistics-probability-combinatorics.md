---
title: Statistics, Probability, and Combinatorics
description: Three small content domains that look intimidating and yield to the same habit — define what's being counted, look for symmetry or complement, and use a formula only when no structural shortcut exists. Mean, median, range, weighted averages, probability, arrangements, combinations, and the formula-addiction trap.
section: Quant
type: reading
---

# Chapter 1.6 — Statistics, Probability, and Combinatorics

## Core idea

These three content areas — descriptive statistics (mean, median, range, weighted averages), probability, and combinatorics (counting, permutations, combinations) — share one trap: *students reach for formulas when they should be reasoning structurally*. The formulas are short and the formulas work, but in the time it takes to remember the formula and apply it, a student reasoning structurally has already answered the question. The skill in this chapter is *recognizing when the structure of the problem makes the formula unnecessary*.

The content here looks intimidating because it has more named identities than other Quant areas. It is in fact one of the smaller content surfaces — a strong student can master the whole rule-set in two focused weekends. The real work is in pattern recognition and trap awareness.

### Quick check

1. The three subdomains of this chapter share what common trap?
2. Why does the chapter argue formulas are *not* the right default?
3. About how long does it take to master the rule-set across all three subdomains?
4. The skill is recognizing what makes a formula *unnecessary* — give an example.
5. Why does this chapter look intimidating but is actually one of the smaller content surfaces?

*Answers.* (1) Formula addiction — reaching for nCr or P(A∩B) when structural reasoning would be faster. (2) Time taken to remember and apply the formula often exceeds the time of structural reasoning; the formula is a fallback, not the default. (3) Two focused weekends. (4) Spotting symmetry, the complement (when easier than direct counting), or a cancellation that collapses the formula. (5) It has more named identities than other content areas, but each is short — the surface looks larger than it is.

## Why it matters

Three reasons stats/probability/combinatorics decides scores.

*The "formula addiction" trap is the largest tax on this chapter*. Students who reach for nCr or P(A and B) on every problem, instead of looking for the symmetry or the complement, take three minutes per problem when ninety seconds would suffice. Across the four to six problems on a section that test these areas, formula addiction can cost a full section's worth of pacing.

*The traps are concentrated*. Most wrong answers on these problems come from one of five places: confusing arrangements with combinations, double-counting in inclusion-exclusion, ignoring whether events are independent, treating the standard deviation conceptually wrong, or forgetting the *complement* is sometimes smaller than the direct count.

*The reasoning transfers to Data Insights*. Probability framing and weighted averaging are core skills in DI's Two-Part Analysis and Multi-Source Reasoning. A strong stats/probability framework tightens DI scores at the same time as Quant scores.

### Quick check

1. The "formula addiction" trap costs roughly how much time per problem?
2. About how many problems on a typical Quant section test these three subdomains?
3. Most wrong answers in this chapter come from how many recurring failure modes?
4. The reasoning here transfers to which DI formats?
5. The cost of formula-grinding across the section's stats/prob/combo problems is what?

*Answers.* (1) Often 90+ extra seconds — the structural shortcut takes 30 seconds, the formula approach takes 2-3 minutes. (2) About 4-6 problems. (3) Five — confusing arrangements with combinations, forgetting independence, double-counting in inclusion-exclusion, misreading SD conceptually, ignoring the complement. (4) Two-Part Analysis (constraint counting) and Multi-Source Reasoning (proportions/probabilities applied to tabular data). (5) A full section's worth of pacing — enough to compromise the harder problems.

## Mental model

Picture probability and counting as *bookkeeping for things that haven't been listed*. The hardest part is figuring out *what to count* and *what to count it against*. Once you have the numerator (favorable outcomes) and the denominator (total outcomes), you have the answer. Most failures happen because students compute one but not both, or because they double-count one and not the other.

Picture statistics as *summary measures of a distribution*. The mean is the balance point. The median is the middle. The range is the spread. The standard deviation is how spread out the values are around the mean. These are not formulas to memorize; they are *intuitions* about distributions. If you understand them as intuitions, you can answer most stats questions without computing — by reasoning about how a change to the data affects the summary measure.

Picture combinatorics as *making choices with or without replacement, with or without order*. Two binary choices, four cases. Each case has a different counting framework: ordered with replacement (n^k), ordered without replacement (n permute k = n!/(n−k)!), unordered with replacement (rare on the GMAT), unordered without replacement (n choose k = n!/(k!(n−k)!)). Identify which case you're in and pick the right framework.

### Quick check

1. The "bookkeeping" mental model for probability says the hardest part is what?
2. Define mean, median, range, and standard deviation as *intuitions*, not formulas.
3. The "four cases" framework for combinatorics distinguishes which two binary choices?
4. What's the failure mode of skipping the "what to count" definition step?
5. Why is reasoning about distributions (instead of computing) usually faster?

*Answers.* (1) Figuring out *what* to count and *what* to count it against. (2) Mean = balance point; median = middle position; range = spread (max − min); SD = how spread out values are around the mean. (3) Order matters or doesn't; replacement allowed or not. (4) Solving a related-but-different problem; the math is right but the question is wrong. (5) Most stats questions ask about *how a change to the data affects* the summary measure — reasoning about the formula's pieces is faster than recomputing.

## GMAT recognition signals

Statistics, probability, and combinatorics announce themselves with specific vocabulary.

*"Mean," "median," "range," "average"* — descriptive statistics. The framework: write the formula and reason from it. Mean is sum/count. Median is the middle value (or average of two middles for an even-count list). Range is max minus min. Often the question is "what changes when one value is added/removed/replaced," and the answer is found by reasoning about the formula's pieces, not by recomputing from scratch.

*"Standard deviation," "spread," "variability"* — usually a conceptual question, not a numerical one. The GMAT rarely asks you to compute a standard deviation. It asks you to compare two distributions and identify which has greater SD. Reasoning: SD is small when the values cluster near the mean, large when they spread out. A list with all the same value has SD = 0. A list with values far from the mean has high SD.

*"Probability," "chance," "likelihood," "the probability that"* — probability framework. The framework: count favorable outcomes, count total outcomes, divide. Often the *complement* is easier to count: P(A) = 1 − P(not A). Whenever the problem asks "what is the probability that at least one X happens," consider computing P(zero Xs) and subtracting from 1.

*"How many ways," "different arrangements," "combinations of"* — combinatorics. First decide: does order matter? "Arrangements" usually means yes (permutations). "Combinations" or "groups" or "selections" usually means no.

*"Independent" or "without replacement"* — independence flags. Independence simplifies probability multiplication: P(A and B) = P(A) × P(B). "Without replacement" breaks independence — the probability of the second event depends on what happened in the first.

### Quick check

1. What vocabulary signals descriptive-statistics questions?
2. SD questions on the GMAT are usually computational or conceptual?
3. What's the recognition signal for "use the complement"?
4. How do you decide between permutations and combinations?
5. "Without replacement" vs "independent" — what's the relationship?

*Answers.* (1) "Mean," "median," "range," "average" — and "standard deviation" / "spread" / "variability" for SD. (2) Conceptual — comparing two distributions, identifying which has greater SD, reasoning about how a change affects spread. (3) Phrasing like "at least one" or "at least two" — the complement (zero of these) is usually cleaner. (4) Ask explicitly: does order matter? Permutations for arrangements; combinations for groups. (5) "Without replacement" breaks independence — the second event's probability depends on what happened in the first.

## Method

The methods diverge by subdomain. Each of the three content surfaces — descriptive statistics, probability, combinatorics — has its own protocol. The common thread: define what you're counting or measuring before computing, then scan for a structural shortcut before reaching for a formula.

### Descriptive statistics method

Most stats questions on the GMAT do not ask you to compute mean, median, range, or SD from scratch. They ask you how a *change to the data* affects one of these summary measures. The skill is reasoning about the formula's pieces, not recomputing.

*Mean problems.* The mean is sum/count. When you add a value v to a list of n values with mean m, the new mean is (nm + v) / (n+1). If v > m, the mean rises; if v < m, the mean falls; if v = m, the mean is unchanged. Most mean-problem questions reduce to this directional reasoning.

*Median problems.* The median is the middle value (or the average of the two middles if n is even). Adding or removing a value at the extremes (above max or below min) shifts the median by *one position*, which often barely changes its value. Adding a value in the middle of the existing range can change the median significantly. Reason about position, not value.

*Range problems.* The range is max minus min. Adding values inside the existing range never changes the range. Adding values outside the range expands the range by exactly the gap between the new value and the previous max or min.

*Standard deviation problems.* The GMAT rarely asks you to compute SD. It asks you to reason about it. Three rules cover most questions:
1. Adding a constant c to every value in the list does *not* change SD. The spread is preserved; values just shift.
2. Multiplying every value by a positive constant c multiplies SD by |c|. The spread scales with the values.
3. Adding a new value *at the current mean* decreases SD slightly, because the average squared deviation from the mean drops. Adding a value *far from the mean* increases SD.

*Weighted average problems.* A weighted average is the sum of (group value × group weight) divided by total weight. Often solvable by reasoning about deviations: each subgroup's deviation from the overall average, weighted by subgroup size, sums to zero. Useful framework: "the heavier group pulls the average toward itself."

### Probability method

A four-step probability protocol.

*Step 1. Define the event and the universe explicitly.* Write on scratch: "favorable outcomes are X. Total outcomes are Y." Half of probability mistakes come from misdefining one of these.

*Step 2. Decide between direct count, complement, and conditional reasoning.*
- *Direct count.* Use when the favorable event is a single, clean case.
- *Complement.* Use when "at least one," "at least two," or any "at-least" phrasing appears. P(at least k) is usually messy; P(fewer than k) = 1 − P(at least k) is often clean.
- *Conditional.* Use when events depend on each other (e.g., draws without replacement). Compute step by step, conditioning each probability on the previous outcomes.

*Step 3. Identify whether events are independent.* Independent events: P(A and B) = P(A) × P(B). Common independent setups: separate coin flips, separate dice rolls, separate draws *with* replacement. Common non-independent setups: draws without replacement, conditional events, sequence-dependent processes.

*Step 4. Apply the right combination rule.*
- *And* (both occur): multiply, with conditional adjustment if non-independent.
- *Or* (either or both occur): P(A) + P(B) − P(A and B). The subtraction handles the overlap.
- *Mutually exclusive or* (only one can occur): P(A) + P(B). No overlap to subtract.
- *Sequence of dependent events*: multiply step by step, updating the universe after each event.

### Combinatorics method

A three-step counting protocol.

*Step 1. Decide whether order matters.* This is the central combinatorics question. "How many ways to *arrange* 5 books on a shelf" — order matters. "How many ways to *choose* 3 books from 5" — order does not. Words to watch: *arrange, sequence, line up, rank* (order matters); *choose, select, group, combination* (order doesn't).

*Step 2. Decide whether replacement is in play.* "How many 4-digit codes can be formed from digits 0–9 if digits can repeat" — with replacement (10 × 10 × 10 × 10 = 10,000). "How many 4-digit numbers can be formed from digits 0–9 with no digit repeating" — without replacement (10 × 9 × 8 × 7).

*Step 3. Apply the right formula.*
- *Ordered, with replacement:* n^k. (k slots, n options for each.)
- *Ordered, without replacement (permutations):* n! / (n−k)!. (Equivalently, n × (n−1) × … × (n−k+1).)
- *Unordered, without replacement (combinations):* n! / (k!(n−k)!). Often written nCk.
- *Unordered, with replacement:* rare on the GMAT; if it appears, the formula is C(n+k−1, k).

*The combinatorics shortcut: complement counting.* When the question is "how many ways to do X *not satisfying* condition Y," it's usually faster to count total ways and subtract the ways that *do* satisfy Y. This parallels the probability complement habit and saves substantial work on hard problems.

### Quick check

1. Adding a constant to every value in a list — what happens to the mean? To the SD?
2. Multiplying every value by a constant c — what happens to the SD?
3. State the four-step probability protocol.
4. State the three-step combinatorics protocol.
5. The probability of A *or* B (where overlap exists) is what formula?

*Answers.* (1) Mean shifts by the constant; SD is unchanged. (2) SD multiplies by |c|. (3) Define event and universe; choose direct/complement/conditional; check independence; apply the right combination rule. (4) Decide whether order matters; decide whether replacement is in play; apply the right formula (n^k, n!/(n−k)!, nCk, etc.). (5) P(A) + P(B) − P(A and B). The subtraction handles the overlap.

## Common traps

Eight recurring traps across the three subdomains.

*Statistics traps.*

*Misreading SD as a numerical question.* The student tries to compute the standard deviation of {2, 5, 8, 11, 14} when the question only asked which of two lists has *greater* SD. Computational SD problems are extremely rare on the GMAT. Reason about spread relative to mean instead.

*Mean-vs-median confusion under skew.* Skewed distributions have mean ≠ median. Adding extreme outliers shifts the mean dramatically but barely affects the median. Many questions test the student's ability to reason about which measure is more sensitive to a given change.

*Probability traps.*

*Forgetting independence.* "Two cards drawn without replacement" — the second probability depends on the first. Multiplying as if independent gives the wrong answer. Identify replacement vs. no replacement *before* computing.

*Double-counting in inclusion-exclusion.* "How many like coffee or tea" with 60 coffee, 40 tea, 20 both is *not* 60 + 40 = 100. It's 60 + 40 − 20 = 80. Always subtract the intersection.

*Ignoring the complement.* "Probability that at least one of three coins lands heads" — direct count is messy (1, 2, or 3 heads); complement is clean (0 heads = 1/8, so answer is 7/8). Whenever you see "at least one" or "at least two," compute the complement first.

*Combinatorics traps.*

*Confusing arrangements with combinations.* "Seat 5 people in 5 chairs" is 5! = 120 (order matters). "Pick 3 people from 5" is 5C3 = 10 (order doesn't). The fix: ask explicitly, "does order matter?"

*Overcounting identical objects.* "How many distinct arrangements of the letters in BANANA?" The total is *not* 6! = 720. Three As and two Ns are interchangeable, so divide by their internal arrangements: 6! / (3! × 2!) = 60. Watch for repeated identical objects.

*Restriction errors.* "How many ways can 5 people sit at a round table?" Round-table problems fix one person and arrange the other 4: 4! = 24, not 5! = 120. Linear and circular arrangements have different formulas; recognize which is in play.

### Quick check

1. Name three of the eight common traps.
2. The "BANANA" example illustrates which trap?
3. "Round-table" arrangements have which formula adjustment vs. linear arrangements?
4. The "at least one" recognition signal points to which method?
5. Why does cross-multiplying P(A) and P(B) fail when A and B aren't independent?

*Answers.* (1) Any three of: misreading SD as numerical; mean-vs-median confusion under skew; forgetting independence; double-counting in inclusion-exclusion; ignoring complement; arrangements-vs-combinations confusion; overcounting identical objects; restriction errors (e.g., circular). (2) Overcounting identical objects — 6! / (3! × 2!) = 60, not 6! = 720, because of repeated As and Ns. (3) Round-table fixes one person and arranges the rest: (n−1)!, not n!. (4) The complement: P(at least one) = 1 − P(none). (5) Without independence, P(B) changes after A occurs; the simple product overstates the true joint probability.

## Original mini-example

A worked example showing the complement shortcut.

*Problem.* A bag contains 5 red marbles and 3 blue marbles. Three marbles are drawn at random without replacement. What is the probability that at least one of the three is blue?

*Method-selection scan.* "At least one" — complement is in play. Direct count would require adding P(exactly 1 blue) + P(exactly 2 blue) + P(exactly 3 blue), which is three separate calculations. Complement: P(zero blue) = P(all three are red).

*Method.* P(first is red) = 5/8. P(second is red, given first is red) = 4/7 (one red removed). P(third is red, given two reds gone) = 3/6 = 1/2. Multiply: 5/8 × 4/7 × 1/2 = 20/112 = 5/28. So P(at least one blue) = 1 − 5/28 = 23/28.

*Time spent.* About forty-five seconds, almost all of it in the multiplication. The recognition that complement was faster than direct counting saved ninety seconds.

*Trap to avoid.* Direct counting is the slow path. P(exactly 1 blue) requires choosing which of the three positions the blue marble fills (3 ways) times the probability of that specific arrangement (3/8 × 5/7 × 4/6 = 60/336). Then P(exactly 2 blue) requires similar setup. Then P(exactly 3 blue). Add them all up. The path produces the right answer in about three minutes — twice the budget. The complement shortcut is one of the highest-leverage habits in probability.

## More worked examples

### Example 1 — Median resistance to outliers

*Setup.* A list contains the values {2, 4, 5, 7, 8}. The median is 5. If a new value of 100 is added to the list, what happens to the median?

*Thinking process.* The new list, sorted, is {2, 4, 5, 7, 8, 100} — six values. The median is the average of the third and fourth: (5 + 7)/2 = 6.

*Solution.* The median rises from 5 to 6.

*Common mistake.* Assuming the outlier (100) shifts the median dramatically — it doesn't, because median is a *positional* statistic. The mean would jump significantly; the median barely moves.

*Takeaway.* Median is robust to outliers. Mean is not. Questions about distributions with extreme values often hinge on this distinction.

### Example 2 — Probability complement

*Setup.* If a fair six-sided die is rolled three times, what is the probability that at least one roll shows a six?

*Thinking process.* "At least one six" — complement is cleaner. P(no sixes in three rolls) = (5/6)³ = 125/216. P(at least one six) = 1 − 125/216 = 91/216.

*Solution.* 91/216.

*Common mistake.* Computing P(exactly one six) + P(exactly two sixes) + P(exactly three sixes) — three separate calculations, lots of arithmetic. The complement collapses to one.

*Takeaway.* Whenever the question asks "at least one" of something, compute the complement. The complement is almost always faster to count than the direct event.

### Example 3 — Order matters vs. doesn't

*Setup.* From a group of 5 people, how many ways are there to (a) pick 3 people for a committee, and (b) seat 3 of the 5 in a row of 3 chairs?

*Thinking process.* (a) Order doesn't matter — committees are unordered. Use combinations: 5C3 = 10. (b) Order matters — different seatings are different arrangements. Use permutations: 5P3 = 5 × 4 × 3 = 60.

*Solution.* (a) 10 ways. (b) 60 ways.

*Common mistake.* Using the same formula for both. Or computing 5! / (5−3)! = 60 for both. The committee question rewards combinations (60 / 3! = 10).

*Takeaway.* The single most important combinatorics question: does order matter? Two different formulas, two very different answers. Ask explicitly before computing.

## Active recall checkpoint

Close this chapter and answer these without looking back.

- What is the *single largest tax* on stats/probability/combinatorics problems and why?
- Define mean, median, range, and standard deviation as *intuitions* about distributions.
- What are the *four cases* in combinatorics (ordered/unordered, with/without replacement)?
- When should you compute the *complement* of a probability instead of the direct count?
- Why does multiplying probabilities of "without replacement" events fail without adjustment?
- Name three of the *common traps* and the failure mode each represents.

*Application.* For each problem, name the subdomain and the specific shortcut (if any) you'd reach for.

- "A list of seven values has mean 12. If a new value of 19 is added to the list, what is the new mean?"
- "What is the probability that, in three coin flips, at least one lands heads?"
- "How many distinct three-letter codes can be formed from the letters in CIRCLE?"
- "If x is a positive integer chosen at random from {1, 2, …, 20}, what is the probability that x is divisible by 3 or 4?"
- "A list of values has standard deviation s. If every value is multiplied by 4, what is the new standard deviation?"

For each, identify the subdomain (descriptive statistics / probability / combinatorics), the framework, and the trap most likely positioned in the wrong answers — formula-addiction trap, complement-not-used trap, double-counting in inclusion-exclusion, or SD-misreading.

If you missed any, re-read the relevant section and test yourself in three days.

## Review schedule

- *Day 1:* Read the chapter end to end. Memorize the four combinatorics cases.
- *Day 3:* Drill ten probability problems specifically scanning for complement opportunities.
- *Day 7:* Re-read *Common traps*. Drill ten combinatorics problems checking the order-matters question explicitly each time.
- *Day 14:* Active recall checkpoint without re-reading. Drill ten stats problems focused on standard-deviation conceptual reasoning.
- *Day 30:* Re-read the chapter with error-log data. Look for the trap that's costing you most.
- *Day 60:* Final re-read. By now the formula-addiction reflex should have flipped to a structural-shortcut reflex.

## Connection to other skills

Stats/probability/combinatorics connects to several other Quant chapters. *Number Properties* (Chapter 1.3) often appears inside probability problems via parity or divisibility constraints. *Arithmetic Foundations* (Chapter 1.2) is the engine for the fraction-and-multiplication arithmetic that probability problems generate. *Word Problems* (Chapter 1.5) frames many probability and counting questions with scenario prose that needs translating before the math starts. *Quant Method Selection* (Chapter 1.8) treats the complement shortcut as one of the canonical cases where structural insight beats direct computation.

Cross-section connection: the *bookkeeping discipline* of probability — clearly defining what you're counting and what the universe is — transfers directly to *Data Sufficiency Logic* (Chapter 3.2), where the question is "do these conditions narrow the answer set to one element," and to *Multi-Source Reasoning* (Chapter 3.5), where the question is "which subset of the data does this question apply to." The skill of clean set definition is one skill across two sections.
