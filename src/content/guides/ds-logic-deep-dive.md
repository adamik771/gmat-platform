---
title: Data Sufficiency Logic Deep Dive
description: The sufficiency-style thinking playbook. Value DS vs yes/no DS, the five-step process applied to every major DS category, algebraic and number-property DS, the C/D/E traps with fifteen-plus worked examples, and the logical discipline that moves DS accuracy into the top percentiles.
section: DI
type: reference
---

# Data Sufficiency Logic Deep Dive

## Introduction

Data Sufficiency is the most learnable format on the test. The answer choices are always the same five. The reasoning style is always the same: is the information sufficient? The problems recycle a finite library of quantitative content — number properties, linear equations, inequalities, statistics, probability. Master DS, and you've unlocked a quarter to a third of the DI section's score impact.

I score 735s on this test. DS is the format where my error rate is closest to zero, and it got there from explicit systematic training — the five-step process applied to every problem, the negation test on every yes/no question, the counterexample hunt on every value question. Every DS error I made during prep was logged, labeled with its trap pattern, and used to drive targeted practice. That methodology is what this guide teaches.

*Who this guide is for.* You've read the DI Master Chapter. You know the five answer choices, understand the five-step process in principle, and have done some DS practice. Your DS accuracy is somewhere in the 60–80% range and you want to push it to 90%+. That's the gap this guide closes.

*How to use it.* Read end to end once. Then come back to the specific problem types where your error log surfaces weaknesses. DS errors cluster — once you identify your patterns, targeted re-reading accelerates the fix.

*All worked examples are my own writing*, invented specifically to illustrate the logic being taught. Nothing paraphrased from any prep book, official guide, or third-party source.

## The DS Mindset

### What sufficiency actually means

A statement is sufficient when, combined with the information in the question stem, it forces a unique answer to the specific question being asked.

For a *value* question ("what is x?"), sufficient means x is uniquely determined. If the statement allows x to equal either 3 or −3, it is not sufficient, even if the "right" answer might happen to be one of those values in some intuition.

For a *yes/no* question ("is x > 0?"), sufficient means the answer is *definitively* yes or *definitively* no. A statement that sometimes produces yes and sometimes produces no is not sufficient. "Mostly yes" is not sufficient. "Probably yes" is not sufficient. The answer must be forced, consistently, across every case the statement allows.

This is where students lose the most DS points. They pick "sufficient" for statements that produce a likely answer but not a forced one. The test punishes this ruthlessly.

### The cognitive shift

DS requires a cognitive shift most students resist. When you see a question like "What is the value of x?" your brain wants to solve for x. DS asks you *not to solve*, but to judge whether solving is possible.

This feels unnatural. Regular math rewards solving. DS rewards judging. You must train yourself to suspend the solve-impulse and focus only on the logical question: *given this information, could I solve if I needed to, and would the answer be unique?*

Many DS questions can be judged without any computation at all. Recognizing the structure ("one equation, two unknowns — not solvable") is often faster than actual algebra.

### The negation test for yes/no

The single most reliable yes/no DS technique. For each candidate statement:

1. Suppose the statement is true. Try to find a case where the answer to the question is yes.
2. Suppose the statement is true. Try to find a case where the answer to the question is no.
3. If both are possible, statement is *not sufficient*.
4. If only one answer type is possible, statement is *sufficient*.

Apply this mechanically. It catches yes/no DS errors almost every time.

### The counterexample test for value

For each candidate statement in a value DS:

1. Assume the statement holds. Find one value of x consistent with it.
2. Can you find another value of x also consistent with it?
3. If yes, statement is *not sufficient* (multiple values allowed).
4. If no (only one x works), statement is *sufficient*.

### The "what do I need?" question

Before evaluating statements, ask: what would I need to know in order to answer the question? Often the answer is obvious (one equation for one unknown, two equations for two unknowns, the sign of a specific variable). Then evaluate whether each statement provides what you need.

This is faster than starting with the statements and asking "is this enough?" It's directionally focused.

## The Five Answer Choices, Cold

Every DS question has the same five choices. You should be able to recite them in your sleep.

- **(A)** Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- **(B)** Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- **(C)** BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- **(D)** EACH statement ALONE is sufficient.
- **(E)** Statements (1) and (2) TOGETHER are NOT sufficient.

### The decision flow

The answer choice follows mechanically from two independent judgments:

- Is (1) alone sufficient? Yes or no.
- Is (2) alone sufficient? Yes or no.

- Yes, Yes → (D).
- Yes, No → (A).
- No, Yes → (B).
- No, No → evaluate together. Together sufficient? → (C). Not together? → (E).

Do the independent judgments first. Do not combine statements until you've judged each alone. This discipline prevents the most common DS errors.

## The Five-Step Process in Depth

### Step 1: Read the stem carefully

Classify the question: value or yes/no? Identify all variables and any constraints (positive integer, distinct, non-negative, prime, etc.). The constraints often limit what values you can test.

### Step 2: Evaluate Statement (1) alone

Ignoring Statement (2) entirely — as if it did not exist — does Statement (1) provide enough information to answer?

If you're tempted to "peek" at Statement (2), resist. The peek contaminates your judgment.

For yes/no: apply the negation test.
For value: apply the counterexample test.

Conclude sufficient or not sufficient.

### Step 3: Evaluate Statement (2) alone

Same process, ignoring Statement (1) entirely. Start fresh. Do not let Statement (1)'s information leak into your analysis.

This is harder than it sounds. Your brain just processed Statement (1); suppressing it requires discipline.

### Step 4: If needed, evaluate together

Only if *both* statements alone were insufficient. Combine the information and judge sufficiency again.

### Step 5: Select

Map your two (or three) judgments to the answer choice via the decision flow above.

## Value DS — Deep Treatment

### What value DS looks like

"What is the value of x?"
"How many students are in the class?"
"What is the average age of the employees?"
"What is the perimeter of the triangle?"

The answer is a single number. Sufficient means the statements force a unique number.

### The one-equation-two-unknowns rule

If the stem involves two unknowns and a statement gives you one equation, that statement alone is not sufficient — one equation cannot solve for two unknowns.

If both statements give you different equations, combining gives two equations in two unknowns, which is usually sufficient.

This rule is the skeleton of many value DS problems. Recognize it in 5 seconds.

### The hidden constraint

Sometimes the stem gives you an equation or constraint that, combined with one statement, is sufficient even though the statement alone looks like one equation in two unknowns.

Example. "If x and y are positive integers such that x + y = 12, what is x?"

(1) x > y.

Statement (1) alone with the stem: x + y = 12 and x > y with both positive integers. x can be 7, 8, 9, 10, or 11 (with corresponding y = 5, 4, 3, 2, 1). Multiple values of x. *Not sufficient.*

(2) x = 2y.

Statement (2) alone with the stem: x + y = 12 and x = 2y. Substitute: 3y = 12, y = 4, x = 8. *Sufficient.*

Lesson: the stem's equation and the integer constraint together with one statement's equation can solve. The stem often provides more than it seems.

### Value DS worked example 1 — clean (A)

*Stem.* If x is a positive integer, what is the value of x?

*(1)* x = (y + 3)² where y = 2.
*(2)* x² = 25.

*Analysis.*

(1) y = 2, so x = (2 + 3)² = 25. Unique value. *Sufficient.*

(2) x² = 25, so x = 5 or x = −5. Constraint says positive integer, so x = 5. Unique. *Sufficient.*

Both sufficient. *Answer: (D).*

### Value DS worked example 2 — classic (C)

*Stem.* What is the value of x + y?

*(1)* 2x + y = 10.
*(2)* x + 2y = 14.

*Analysis.*

(1) Alone: one equation, two unknowns. *Not sufficient.*

(2) Alone: one equation, two unknowns. *Not sufficient.*

Together: two equations, two unknowns. Add: 3x + 3y = 24, so x + y = 8. *Sufficient.*

*Answer: (C).*

### Value DS worked example 3 — (A) with a shortcut

*Stem.* What is the value of a + b?

*(1)* a² − b² = 20 and a − b = 4.
*(2)* ab = 15.

*Analysis.*

(1) Alone: a² − b² = (a − b)(a + b) = 20. Given a − b = 4, then 4(a + b) = 20, so a + b = 5. *Sufficient.*

(2) Alone: ab = 15 alone doesn't determine a + b (e.g., a=3, b=5 gives a+b=8; a=15, b=1 gives a+b=16). *Not sufficient.*

*Answer: (A).*

Note: Statement (1) actually gives you two pieces of information within one statement (the difference of squares plus the difference). That's still one statement; evaluating it means using everything in that statement.

### Value DS worked example 4 — (E) with apparent sufficiency

*Stem.* If x is a positive integer, what is x?

*(1)* x is even.
*(2)* x is a prime number.

*Analysis.*

(1) Many positive even integers (2, 4, 6, ...). *Not sufficient.*

(2) Many primes (2, 3, 5, 7, ...). *Not sufficient.*

Together: x is even AND prime. The only even prime is 2. *Sufficient.*

*Answer: (C).*

Wait — let me reread. If x is both even and prime, then x = 2 (the only even prime). So together they do determine x uniquely. (C) is correct.

*Lesson.* Sometimes combining two seemingly broad statements narrows to a unique value via a specific mathematical property.

### Value DS worked example 5 — the subtle (E)

*Stem.* What is the value of x?

*(1)* x² = 9.
*(2)* x < 0.

*Analysis.*

(1) x = 3 or x = −3. Not sufficient.

(2) x < 0. Infinite negative values. Not sufficient.

Together: x² = 9 AND x < 0. x = −3. *Sufficient.*

*Answer: (C).*

If instead the stem had said "If x is a positive integer, what is x?" with the same statements, Statement (1) would still give x = 3 (excluding −3) alone: sufficient. Statement (2) would contradict the stem (x < 0 but x is positive) and produce no solution, making (2) vacuously sufficient in a weird way — but GMAT usually avoids this edge case.

### Value DS worked example 6 — counterexample hunting

*Stem.* What is the value of the positive integer n?

*(1)* n is a factor of 24.
*(2)* n is greater than 6.

*Analysis.*

(1) Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24. Multiple values. *Not sufficient.*

(2) n > 6. Infinite values. *Not sufficient.*

Together: factor of 24 AND > 6. Candidates: 8, 12, 24. Still multiple. *Not sufficient.*

*Answer: (E).*

*Trap to avoid.* Thinking "combined" narrowed it enough. Always check if the remaining set has more than one value.

### Value DS worked example 7 — average value

*Stem.* What is the average (arithmetic mean) of the numbers in a list?

*(1)* The numbers sum to 80.
*(2)* The list contains 16 numbers.

*Analysis.*

(1) The sum alone doesn't determine the average — need the count. *Not sufficient.*

(2) The count alone doesn't determine the average — need the sum. *Not sufficient.*

Together: average = 80/16 = 5. *Sufficient.*

*Answer: (C).*

*Recognition cue.* Average = sum ÷ count — you need both pieces, never just one.

### Value DS traps, expanded

*The "looks complete but isn't"* trap. Statement provides apparent precision but leaves ambiguity. Example: "x² = 25" alone looks precise but allows x = 5 or −5.

*The "looks insufficient but is"* trap. Statement looks vague but provides enough because of the stem's constraint. Example: "x is a positive integer and x ≤ 2" — alone this gives x = 1 or 2, but if combined with a further constraint like "x is prime," uniquely x = 2.

*The "stem-reading skip"* trap. Missing the stem's constraint (positive integer, distinct, etc.) and treating the problem more broadly.

*The "coincidence test"* trap. Finding one value consistent with the statement and stopping. Always try to find a second value.

## Yes/No DS — Deep Treatment

### What yes/no DS looks like

"Is x > 0?"
"Does the team have more than 10 members?"
"Is n divisible by 3?"
"Is the triangle isosceles?"

The answer is yes or no. Sufficient means the statements force a definitive answer, consistently.

### The negation test in detail

For a statement that seems to make the answer "yes":
- Can you find a case where the statement holds but the answer is "no"? If yes, statement is not sufficient.

For a statement that seems to make the answer "no":
- Can you find a case where the statement holds but the answer is "yes"? If yes, statement is not sufficient.

Essentially: if both yes and no are possible under the statement, not sufficient.

### The "definitely" vs "sometimes"

A sufficient statement forces a *definite* answer. "Sometimes yes, sometimes no" is *not* sufficient. This is worth emphasizing because students routinely call it sufficient if most cases go one way.

### Yes/No DS worked example 1 — sign reasoning

*Stem.* Is x positive?

*(1)* x² > x.
*(2)* x > −5.

*Analysis.*

(1) x² > x rearranges to x² − x > 0, or x(x − 1) > 0. This holds when x > 1 or x < 0. If x > 1, yes (x positive). If x < 0, no (x negative). Both possible. *Not sufficient.*

(2) x > −5. x could be 3 (yes) or −2 (no). *Not sufficient.*

Together: x² > x AND x > −5. x could be 2 (x² = 4 > 2, x > −5; yes positive). Or x could be −3 (x² = 9 > −3, x > −5; no, x negative). Both possible. *Not sufficient.*

*Answer: (E).*

### Yes/No DS worked example 2 — divisibility

*Stem.* If n is a positive integer, is n divisible by 12?

*(1)* n is divisible by 6.
*(2)* n is divisible by 8.

*Analysis.*

(1) n divisible by 6 means n = 6, 12, 18, 24, ... Of these, 12 and 24 are divisible by 12; 6 and 18 are not. Both yes and no possible. *Not sufficient.*

(2) n divisible by 8 means n = 8, 16, 24, 32, ... Some divisible by 12 (24), some not (8, 16). Both possible. *Not sufficient.*

Together: n divisible by 6 AND by 8. LCM(6, 8) = 24. So n is a multiple of 24, and any multiple of 24 is divisible by 12. Always yes. *Sufficient.*

*Answer: (C).*

*Recognition cue.* Divisibility questions with multiple factor statements → LCM reasoning.

### Yes/No DS worked example 3 — the "structural" answer

*Stem.* Is the product xy positive?

*(1)* x > 0 and y > 0.
*(2)* Neither x nor y equals zero.

*Analysis.*

(1) Both positive, so product positive. Always yes. *Sufficient.*

(2) Neither zero but signs unknown. If both positive or both negative, product positive. If opposite signs, product negative. Both answers possible. *Not sufficient.*

*Answer: (A).*

### Yes/No DS worked example 4 — scale and inequality

*Stem.* Is a > b?

*(1)* 2a > 2b.
*(2)* a/3 > b/3.

*Analysis.*

(1) 2a > 2b, divide both sides by 2: a > b. *Sufficient.*

(2) a/3 > b/3, multiply both sides by 3: a > b. *Sufficient.*

*Answer: (D).*

Both statements are trivial equivalents of the stem question. Both give the same information, both sufficient.

### Yes/No DS worked example 5 — the tricky (C)

*Stem.* Is x + y > 0?

*(1)* x > y.
*(2)* |x| > |y|.

*Analysis.*

(1) x > y doesn't tell us about the sign. Could be x = 5, y = 3 (sum > 0). Could be x = −2, y = −5 (sum < 0). *Not sufficient.*

(2) |x| > |y|. Magnitude of x is bigger. x could be 5, y could be 3 (sum 8 > 0). Or x could be −5, y could be 3 (sum −2 < 0). *Not sufficient.*

Together: x > y AND |x| > |y|.

Case A: x and y both positive. Then |x| = x, |y| = y, and |x| > |y| is equivalent to x > y. Sum positive.

Case B: x and y both negative. Then |x| > |y| means x is more negative. But x > y (x less negative than y)... wait, for negatives, "x > y" means x is larger (less negative). |x| > |y| means x is more negative. Contradiction. So this case impossible.

Case C: x positive, y negative. Sum = x − |y|. But |x| > |y| means x > |y|, so sum > 0. Positive.

Case D: x negative, y positive. Then x < 0 and y > 0, so x < y, contradicting x > y. Impossible.

So valid cases: A and C, both give positive sum. *Sufficient.*

*Answer: (C).*

This is a harder problem but shows how case analysis resolves it. Practice this style.

### Yes/No DS worked example 6 — classical number properties

*Stem.* If n is an integer, is n² even?

*(1)* n is odd.
*(2)* n² + 1 is odd.

*Analysis.*

(1) n odd. Odd × odd = odd, so n² = odd × odd = odd. Not even. Always no. *Sufficient.*

(2) n² + 1 odd. Subtract 1: n² is even. Always yes. *Sufficient.*

*Answer: (D).*

### Yes/No DS worked example 7 — the (E)

*Stem.* Is x < 0?

*(1)* x³ < x.
*(2)* x² > x.

*Analysis.*

(1) x³ < x. Rearrange: x³ − x < 0, so x(x − 1)(x + 1) < 0. Signs: when is the product of three factors negative?
- All three negative: x < 0, x − 1 < 0, x + 1 < 0. Third condition needs x < −1. Together: x < −1.
- One negative, two positive: x < 0, x − 1 < 0, x + 1 > 0 means −1 < x < 0. That's x negative. One factor (x) negative, x − 1 also negative. Two factors negative — product positive, not negative. Doesn't satisfy.

Actually let me redo. x(x − 1)(x + 1) < 0 requires an odd number of negative factors.

Case 1: x = 0.5: 0.5 × (−0.5) × 1.5 = −0.375 < 0. x > 0 here, so yes the statement holds for some x > 0.

Case 2: x = −2: (−2)(−3)(−1) = −6 < 0. x < 0 here. Statement holds.

Both positive and negative x can satisfy the statement. *Not sufficient.*

(2) x² > x. x² − x > 0, so x(x − 1) > 0. Holds when x > 1 or x < 0. If x > 1, x positive (answer to question: no, not < 0). If x < 0, answer is yes. Both possible. *Not sufficient.*

Together: x³ < x AND x² > x.

x² > x requires x > 1 or x < 0. x³ < x, from Case 1 we saw x = 0.5 satisfies it but x = 0.5 doesn't satisfy x² > x. Let's check specific cases in the intersection.

x = 2 (x > 1): x² = 4 > 2 ✓. x³ = 8. Is 8 < 2? No. Doesn't satisfy Statement (1).

x = −2 (x < 0): x² = 4 > −2 ✓. x³ = −8. Is −8 < −2? Yes (−8 is less than −2). Satisfies both statements.

x = −0.5 (x < 0 but between 0 and −1): x² = 0.25 > −0.5 ✓. x³ = −0.125. Is −0.125 < −0.5? No (−0.125 is greater). Doesn't satisfy Statement (1).

So in the intersection of the two statements (where both hold), the candidates I've tested so far are all x ≤ −1 — x negative. Let me check x = 0.5 against Statement (2): x² = 0.25, not > 0.5. Doesn't satisfy Statement (2).

So the intersection is just x < −1 or similar — all x negative. *Sufficient.*

Wait, let me double-check by finding a non-negative x in the intersection. If x > 1: need x² > x (yes, since x > 1 gives x² = x·x > x·1 = x) ✓. Need x³ < x: x³ − x = x(x−1)(x+1). For x > 1, all factors positive, so product positive, so x³ > x, not < x. Doesn't satisfy.

So no x > 1 works for Statement (1) and Statement (2) simultaneously. Confirmed: intersection is x < something, all negative.

*Together: sufficient. Answer: (C).*

This problem illustrates why case analysis and careful testing matter for harder DS problems.

### Yes/No DS traps, expanded

*The "most cases" trap.* A statement where most cases give yes but some give no. Students pick sufficient; it's not.

*The "missing zero" trap.* Forgetting that zero is an integer. If the stem allows x to be zero, check whether zero satisfies the statement and what the question's answer is at zero.

*The "boundary case" trap.* The statement involves strict inequality (x > 0) but the boundary (x = 0) might be a trap case to consider.

*The "sign-case incomplete"* trap. For sign-based questions, check positive, negative, and zero cases when the stem doesn't restrict sign.

## The C Trap, D Trap, E Trap

The three most common answer-choice mistakes, in decreasing frequency.

### The C Trap

Picking (C) when the correct answer is (A), (B), or (D).

*How it happens.* Students let Statement (2)'s information leak into their Statement (1) analysis. They conclude (C) because the statements together are sufficient, without rigorously checking if one alone suffices.

*The fix.* Evaluate each statement in total isolation. When considering Statement (1), ignore that Statement (2) exists. Test specifically: if Statement (1) alone is sufficient, the answer cannot be (C).

*Practical rule.* Before picking (C), verify that neither statement alone suffices. If either alone suffices, (C) is wrong.

### The D Trap

Picking (D) when the correct answer is (A) or (B).

*How it happens.* Students rush through one of the statement evaluations and conclude sufficient without counterexample testing.

*The fix.* Apply the counterexample test or negation test to both statements equally rigorously. A "quick look" at Statement (2) after Statement (1) is where the D trap strikes.

### The E Trap

Picking (E) when the correct answer is (A), (B), (C), or (D).

*How it happens.* Students fail to see a clever combination or a structural insight that makes a statement sufficient.

*The fix.* Don't pick (E) until you've genuinely tried each statement alone and together, including considering whether any structural property or algebraic identity might apply.

*Practical rule.* Before picking (E), ask: is there any insight I'm missing? Any algebraic identity, any number property, any geometric shortcut that would make the information sufficient?

## Advanced DS — Problems Combining Topics

Above the 75th percentile, DS problems layer multiple concepts. A single problem might involve number properties, algebra, and inequality. Here are the common combinations.

### Number properties + algebra

"If x and y are positive integers such that xy = 60, what is the value of x?"

Factoring 60 gives multiple (x, y) pairs. Statements narrow the candidates via additional constraints (x > y, x prime, x + y even, etc.).

### Inequality + algebra

"If 2x − y > 5 and x + y > 3, is x > 2?"

Statements provide inequalities or specific values. Solve by case analysis or substitution.

### Statistics + algebra

"What is the average of five numbers a, b, c, d, e?"

Average = sum/count. Statements give sums, specific values, or ratios.

### Probability + number properties

"If a die is rolled three times, what is the probability of getting at least one six?"

Classical complement-of-none approach; statements might alter conditions.

### Advanced worked example 1 — number properties + algebra

*Stem.* If x and y are positive integers, what is the value of x?

*(1)* x + y = 10.
*(2)* xy = 21.

*Analysis.*

(1) Alone: x + y = 10 with x, y positive integers. x = 1, 2, ..., 9. Multiple values. *Not sufficient.*

(2) Alone: xy = 21. Factor pairs: (1, 21), (3, 7), (7, 3), (21, 1). So x = 1, 3, 7, or 21. *Not sufficient.*

Together: x + y = 10 AND xy = 21. Try factor pairs of 21: (1, 21) — sum 22, no. (3, 7) — sum 10, yes. (7, 3) — sum 10, yes. So (x, y) is (3, 7) or (7, 3). x = 3 or 7. Multiple values. *Not sufficient.*

*Answer: (E).*

*Lesson.* Even combined statements can leave ambiguity when x and y are interchangeable in both constraints.

### Advanced worked example 2 — inequality + algebra

*Stem.* Is x² > y²?

*(1)* x > y.
*(2)* x and y are both positive.

*Analysis.*

(1) Alone: x > y doesn't determine x² vs y² because signs matter. Example: x = 1, y = 0: x² = 1 > 0. Yes. x = −3, y = −5: x > y but x² = 9, y² = 25, x² < y². No. Both possible. *Not sufficient.*

(2) Alone: both positive. Doesn't tell us relative size. *Not sufficient.*

Together: x > y AND both positive. Both positive means |x| = x and |y| = y. x > y means |x| > |y| (since both positive). Squaring: x² > y². Always yes. *Sufficient.*

*Answer: (C).*

### Advanced worked example 3 — coordinate plane + algebra

*Stem.* In the coordinate plane, is the distance from point P(x, y) to the origin less than 5?

*(1)* x = 3.
*(2)* y = 3.

*Analysis.*

Distance from P to origin = √(x² + y²). Less than 5 iff x² + y² < 25.

(1) x = 3. Then x² + y² = 9 + y². This is < 25 iff y² < 16, iff −4 < y < 4. Since we don't know y, the answer depends. *Not sufficient.*

(2) y = 3. Symmetric. *Not sufficient.*

Together: x = 3 AND y = 3. Then x² + y² = 9 + 9 = 18 < 25. Answer yes. *Sufficient.*

*Answer: (C).*

### Advanced worked example 4 — statistics

*Stem.* What is the average of three distinct positive integers a, b, c?

*(1)* The sum a + b + c = 18.
*(2)* The median of the three integers is 6.

*Analysis.*

(1) Sum 18, three integers, average = 18/3 = 6. *Sufficient.*

(2) Median 6. If sorted, middle is 6. But without knowing the other two, sum and average could vary. *Not sufficient.*

*Answer: (A).*

### Advanced worked example 5 — a hidden-shape problem

*Stem.* If x is a positive integer, is x a multiple of 3?

*(1)* x² is a multiple of 3.
*(2)* x + 1 is not a multiple of 3.

*Analysis.*

(1) If x² is divisible by 3, then x is divisible by 3 (because 3 is prime and divides x², so must divide x). Always yes. *Sufficient.*

(2) If x + 1 is not divisible by 3, then x is either a multiple of 3 (x+1 leaves remainder 1) or 2 mod 3 (x+1 leaves remainder 0, contradiction) or 1 mod 3 (x + 1 leaves remainder 2). So x is either 0 mod 3 or 1 mod 3. x could be divisible by 3 (yes) or not (no). *Not sufficient.*

*Answer: (A).*

*Recognition cue.* Prime divisibility properties (like "if p | ab, then p | a or p | b") are common in DS number-property problems.

## Statement-Combination Patterns

Certain statement combinations have predictable structures.

### Pattern: One equation + one sign

If Statement (1) is an equation and Statement (2) is a sign (like x > 0), the combination is often sufficient because the sign resolves ambiguity in the equation's solution.

Example: x² = 4 + x < 0 → x = 2 or x = −2; x < 0 means x = −2.

### Pattern: Two equations, two unknowns

Combination is usually sufficient. Solve as a system.

### Pattern: Two inequalities

Often (E) because inequalities leave range. Check if a structural property determines the answer.

### Pattern: One statement is a logical consequence of the other

If Statement (2) can be derived from Statement (1), Statement (2) adds no new information. The answer depends on Statement (1) alone.

### Pattern: Two statements about different aspects of the same problem

Combination often sufficient because the statements complement each other.

## The DS Pacing Budget

A typical DS problem should take 90 seconds to 2 minutes. Breakdown:

- Read stem: 15 seconds.
- Evaluate Statement (1) alone: 30 seconds.
- Evaluate Statement (2) alone: 30 seconds.
- If needed, combine: 20 seconds.
- Select and mark: 10 seconds.

For harder problems, budget 2:30. Above 2:30, guess and move.

### DS-specific time saves

*Skip redundant arithmetic.* If you can see the structure, don't compute. "Two equations in two unknowns" → sufficient without solving.

*Recognize structural sufficiency.* Some problems have answers determined by structure. "Perimeter of a triangle > 0" is always yes.

*Use the negation test fast.* Practice it until you can apply in 10 seconds per statement.

## The DS Error Log Template

For every missed DS problem:

1. *Stem:* question type (value or yes/no), constraints.
2. *What I picked:* (A/B/C/D/E).
3. *Correct answer:* (A/B/C/D/E).
4. *Trap pattern:* C trap, D trap, E trap, missing constraint, counterexample missed, etc.
5. *Root cause:* method (skipped a step), reading (missed stem detail), arithmetic (computation error), or logic (wrong about sufficiency).
6. *Lesson:* specific takeaway.

After 30 logged DS errors, patterns emerge. Common patterns:

- "I leak Statement (2) into Statement (1)." → C trap awareness drill.
- "I miss the 'x negative' case." → sign-case discipline.
- "I over-compute." → structural-sufficiency drill.

## DS Study Protocol

### Week 1: Process internalization

Every DS problem, fully written out: Statement (1) analysis, Statement (2) analysis, combined if needed, conclusion. Untimed. Goal: make the process reflexive.

### Week 2: Value vs yes/no distinction

Focus on the bar for sufficiency. Drill yes/no problems with the negation test. Drill value problems with counterexample testing.

### Week 3: C trap awareness

Focus on problems where the trap is (C). Force yourself to rigorously verify each statement alone.

### Week 4: Advanced categories

Number properties DS, algebra DS, inequality DS. Drill each category separately to build content-specific DS fluency.

### Week 5: Timed practice

Introduce timer. Target: 90 seconds average, 2:30 ceiling. Track errors.

### Week 6: Integration

Full DI sections. Review DS errors specifically.

### Daily drill

Every day: 5 DS problems, untimed or timed, fully written out. Sufficiency thinking every single day.

## DS Elite Habits

### They classify the question in 3 seconds

Value or yes/no. The cognitive mode follows.

### They evaluate each statement in isolation

No leakage. Full discipline.

### They apply the negation test mechanically

Yes/no DS: negate the candidate answer to check.

### They apply the counterexample test

Value DS: find a second consistent value to check for non-uniqueness.

### They recognize structural sufficiency

"This is two equations in two unknowns → solvable." No need to solve.

### They don't compute unnecessarily

DS isn't a computation test. Compute only when it helps the sufficiency judgment.

### They check the stem's constraints

"Positive integer" changes what you test.

### They never pick (C) without verifying alone statements

The discipline that prevents the C trap.

### They never pick (D) without rigorous alone testing

The discipline that prevents the D trap.

### They never pick (E) without trying combinations

The discipline that prevents the E trap.

## Closing Note

Data Sufficiency is the most learnable format on the test. Not the easiest — the easiest is arguably Graphics Interpretation for students with chart-reading experience. But the *most learnable*, because the structure is rigid, the traps are finite, and the methodology is teachable.

Students who plateau on DS have almost always plateaued because their sufficiency-style thinking is incomplete. They evaluate statements loosely, miss constraints, and fall for the C or D trap. All of those are fixable with disciplined practice.

This guide gave you the methodology. Six to eight weeks of systematic practice — daily written-out DS drills, careful error logging, trap-pattern targeting — should push your DS accuracy to the 90%+ range.

I score 735s on this test. My DS accuracy is north of 95%. The method is the method. Now it's yours.
