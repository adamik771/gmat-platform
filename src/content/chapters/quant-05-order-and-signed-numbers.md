---
slug: quant-05-order-and-signed-numbers
title: "Arithmetic: Order of Operations & Signed Numbers"
section: Quant
estimated_minutes: 9
prerequisites:
  - quant-04-answer-choice-tactics
summary: |
  The grammar of arithmetic: PEMDAS, sign rules, and what changes when a value need not be an integer. Estimation and plugging-in pay off heavily here.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions before the lesson. Miss them freely; attempting first sharpens the read.
    pretest_question_ids:
      - arithmetic-q1
      - arithmetic-q2
  - id: order-of-operations
    type: reading
    title: "Order of operations — PEMDAS and the traps inside it"
    check_question_ids:
      - arithmetic-q16
  - id: signs-and-negatives
    type: reading
    title: "Signs and negatives — keeping the minus signs from eating your time"
    check_question_ids:
      - arithmetic-q17
  - id: integers-vs-non-integers
    type: reading
    title: "Integers vs. non-integers — knowing which world you're in"
    check_question_ids:
      - arithmetic-q18
problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - arithmetic-q3
      - arithmetic-q4
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - arithmetic-q5
      - arithmetic-q6
---

## @order-of-operations

Every student has heard of PEMDAS — Parentheses, Exponents, Multiplication/Division, Addition/Subtraction. Reciting it is not the skill. The skill is surviving the two traps the GMAT plants *inside* PEMDAS, the ones that turn a problem you "know how to do" into a wrong answer you were certain of.

**Mental model.** Arithmetic is grammar. Order of operations, sign rules, fraction-handling — these are the syntax that has to run on autopilot before any higher quant skill can sit on top of it. A 705 scorer doesn't think faster than a 605 scorer here; they make fewer sloppy moves per minute. Nearly every "I knew that one" miss in an error log is a grammar rule that broke under time pressure. This chapter's job is to make the rules so automatic they can't break.

**Trap one: multiplication and division bind tighter than addition and subtraction — full stop.** See `8 − 2 × 4` and your eye wants to read left to right: "8 minus 2 is 6, times 4 is 24." Wrong. The multiplication resolves first: `2 × 4 = 8`, then `8 − 8 = 0`. The test writes expressions specifically to bait that left-to-right reflex.

**Trap two: subtraction and division are not associative.** `10 − 3 − 2` is `5`, not `9` — go left to right: `10 − 3 = 7`, then `7 − 2 = 5`. Compute `3 − 2 = 1` first and you've silently invented a different problem. Division is the same: `24 / 4 / 2 = 3`, not `12`. Chained subtractions and divisions always run left to right unless parentheses say otherwise.

**Worked example.** Evaluate `12 − 8 ÷ 2 × 3 + 1`. Choices: (A) −5 (B) 1 (C) 5 (D) 7 (E) 19. The whole problem is a trap on the two rules above. Division and multiplication first, left to right: `8 ÷ 2 = 4`, then `4 × 3 = 12`. Now the additions and subtractions, left to right: `12 − 12 + 1 = 1`. Answer is **(B)**. Choice (D) 7 is the engineered trap — it's what you get processing strictly left to right (`12 − 8 = 4`, `4 ÷ 2 = 2`, `2 × 3 = 6`, `6 + 1 = 7`), which is exactly the mistake the expression was built to catch.

**Example (the full mechanical sweep).** `8 − 2 × (3 − 5)² + 12 / 4`

- Parentheses: `(3 − 5) = −2`
- Exponent: `(−2)² = 4`
- Multiplication and division, left to right: `2 × 4 = 8`, `12 / 4 = 3`
- Addition and subtraction, left to right: `8 − 8 + 3 = 3`

**Trap to watch.** A negative sign in front of a parenthesis distributes to *every* term inside. `−(3 − 5)` is `−3 + 5 = 2`, not `−3 − 5 = −8`. Under pressure the second term is the one you forget. The fix: read the leading minus as `−1 ×` and distribute it deliberately.

**The clean-up habit.** Before evaluating any expression, scan it once for three things: parentheses to resolve, exponents to expand, and negatives you might mishandle. Ten seconds of scanning beats sixty seconds of backtracking after a sign flips on you.

**Micro-drill.** Evaluate each — under 25 seconds total:

1. `12 − 3 × 2` → ___
2. `(6 + 2)² ÷ 4 − 1` → ___
3. `−(4 − 7)²` → ___

Answers: (1) **6** — multiply first: 3 × 2 = 6, then 12 − 6. (2) **15** — parens: 8, squared: 64, ÷ 4: 16, minus 1. (3) **−9** — parens give −3, squared gives 9, then the leading negative makes it −9. If (3) gave you +9, you applied the exponent to the whole expression — but it binds only to `(4 − 7)`, and the leading minus stays outside.

> **Recall check.** Without computing on paper: what is `20 − 12 ÷ 3 − 2`, and why is the answer not `2`? (It's `14`: division first gives `20 − 4 − 2`, then left to right `16 − 2 = 14`. Grouping `12 ÷ 3 − 2` or chaining the subtractions out of order is the standard slip.)

> **Self-explanation prompt.** Say it out loud in one sentence: *why* does multiplication happen before subtraction? If you can articulate that multiplication is compressed repeated addition — `2 × 4` is really `4 + 4`, already an addition waiting to happen — the left-to-right error stops feeling tempting.

**Takeaway.** Order of operations is not about memorizing PEMDAS; it's about two reflexes — *bind multiplication and division tighter*, and *run equal-rank operations strictly left to right*. Get those automatic and this entire layer of careless misses disappears.

## @signs-and-negatives

Signed-number arithmetic costs careful students points not because they don't know the rules, but because they skip them under pressure. The rules are short. Memorize them once, then never re-derive them mid-problem.

**Multiplication and division of signs:**

- `(+) × (+) = (+)`
- `(−) × (−) = (+)`
- `(+) × (−) = (−)` and `(−) × (+) = (−)`

**Same sign → positive, different signs → negative.** That is the entire table.

**Speed tip.** Don't track signs pair by pair through a long product — just *count the negatives*. A product is negative if and only if it has an **odd** number of negative factors. `(−2)(−3)(−4) = −24` (three negatives, odd → negative). `(−2)(−3)(−4)(−5) = 120` (four negatives, even → positive). One parity check replaces four sign multiplications.

**Addition and subtraction of signs:**

- Same sign → add magnitudes, keep the sign. `−7 + (−3) = −10`.
- Different signs → subtract magnitudes, keep the sign of the larger. `−7 + 3 = −4`; `7 + (−3) = 4`.
- Subtracting a negative is adding: `5 − (−3) = 5 + 3 = 8`.

**Absolute value.** `|x|` is the *distance* of x from zero — always non-negative. `|−3| = 3`, `|3| = 3`, `|0| = 0`. One identity earns its keep on test day: `|x − y| = |y − x|`, because distance is symmetric. So any time `|x − y| − |y − x|` appears inside a messy expression, it's zero — strike it before you compute anything else.

**Example.** If `x = −3` and `y = 2`, find `|x − y| − |y − x| + |x| − |y|`.

- `|x − y| = |−3 − 2| = |−5| = 5`
- `|y − x| = |2 − (−3)| = |5| = 5`
- `|x − y| − |y − x| = 0` (always — symmetry)
- `|x| − |y| = 3 − 2 = 1`
- Total: `0 + 1 = 1`

**Worked example.** If `|2x − 7| = 11`, what is the sum of all possible values of x? Choices: (A) −2 (B) 7 (C) 9 (D) 11 (E) 18. An `|expression| = k` equation opens into two cases — the inside can be `+k` or `−k`. Case 1: `2x − 7 = 11` → `2x = 18` → `x = 9`. Case 2: `2x − 7 = −11` → `2x = −4` → `x = −2`. Sum: `9 + (−2) = 7`. Answer is **(B)**. Choice (C) 9 is the trap that catches everyone who solves only the positive case and forgets the negative one — the single most common absolute-value error on the test.

**Trap to watch.** `(−3)² = 9`, but `−3² = −9`. The exponent binds tighter than the bare negation: with no parentheses around it, the minus stays outside the squaring. Read `−3²` as `−(3²)` every time.

**Micro-drill.** Evaluate each — 10 seconds each:

1. `(−3)² − 3²` → ___
2. `−(5 − 9)²` → ___
3. `|3 − 8| × |8 − 3|` → ___
4. `(−1)(−2)(−3)(−4)` → ___

Answers: (1) **0** — (−3)² = 9 and 3² = 9, difference is 0. (2) **−16** — parens: −4, squared: 16, then the leading minus: −16. (3) **25** — |−5| = 5 and |5| = 5, product 25. (4) **24** — four negative factors, even count → positive; 1×2×3×4 = 24. If (1) gave you −18, you treated `(−3)²` as `−(3²) = −9` — but the parentheses pull the negative *into* the base. If (4) gave you −24, the count-the-negatives reflex isn't automatic yet — drill it until it is.

> **Recall check.** Cover the page. What are the two solutions of `|x + 4| = 6`, and which one do rushed test-takers drop? (x = 2 and x = −10; they keep only x = 2 by solving the positive case and skipping `x + 4 = −6`.)

**Takeaway.** Two reflexes carry the whole section: *count negatives for parity* instead of chaining signs, and *split every absolute-value equation into two cases*. The points lost here are almost never knowledge — they're a skipped second case or a minus sign that escaped a parenthesis.

## @integers-vs-non-integers

The GMAT cares intensely about one question you can easily forget to ask: *is this number an integer, or not?* Whole families of Data Sufficiency questions hinge on it, and Problem Solving traps quietly plant a fraction where you assumed a whole number. This section is shorter on rules and longer on one habit — checking the domain before you trust an answer.

**Mental model.** Every variable lives in a *world* the problem assigns it. "Real number" is the wide-open world — x can be 1.5, −0.7, or √2. "Integer," "positive integer," "prime" are progressively smaller, fenced-in worlds. Most sufficiency traps work by letting you assume the small world when the problem only gave you the wide one.

**The integer facts worth holding in memory:**

- Integers run `…, −3, −2, −1, 0, 1, 2, 3, …` — negatives included.
- Zero is an integer, zero is even, and zero is a multiple of every integer.
- A "non-integer" on the GMAT means a rational like `3/2` or `0.7`, or an irrational like `√2`.

**Spot the world from the words.** The test announces the integer world explicitly when it matters, with phrases you should pattern-match on sight:

| If you see… | You're in… |
|---|---|
| "n is a positive integer," "k is a whole number" | integer world — test 1, 2, 3, … |
| "factor of," "multiple of," "divisible by," "remainder" | integer world |
| "p is prime" | integer world, and p ≥ 2 (1 is not prime) |
| "x is a number," "x is positive," "x > 0" | **real-number world — fractions are live** |

If the fence isn't in the words, it isn't there. When no integer language appears, your job is to *go hunting for a fraction* that breaks the obvious answer.

**Worked example.** What is the value of x, given x² = 9? The verdict depends entirely on the world. With no constraint, `x = 3` or `x = −3` — **not** enough to pin down x. Add "x is positive" (or "x is a positive integer") and only `x = 3` survives — now sufficient. Same equation, opposite verdict, decided purely by the domain. The reflex this should burn in: on any squared variable, ask *"could x be negative?"* before you answer. If the problem hasn't ruled it out, you can't either.

**Worked example.** Is `x² > x`? It's tempting to say "of course — squaring makes things bigger." Test the small world first. `x = 2`: `4 > 2`, true. `x = 1/2`: `1/4 > 1/2`, **false**. `x = 0`: `0 > 0`, false. So the statement is true for x > 1, false for 0 ≤ x ≤ 1 — undecided until x is pinned down. Now a single fact settles it: if a statement tells you `x > 1`, then `x² > x` always holds (multiply `x > 1` by the positive x). **Sufficient** — and notice "x > 1" never mentioned integers. The fraction `1/2` is what exposes the trap; reaching for it is the whole skill.

> **Recall check.** A problem says only "x is a number" and asks whether `x² ≥ x`. Name one value that makes it false. (Any x strictly between 0 and 1, e.g. `x = 1/2`: `1/4 < 1/2`. If your instinct was "it's always true," that's exactly the assumption the test sells.)

**Terminating vs non-terminating decimals.** A fraction `a/b` in lowest terms terminates if and only if `b`'s only prime factors are 2 and 5. `3/8 = 0.375` (b = 2³ → terminates). `1/3 = 0.333…` (b = 3 → repeats). `1/6 = 0.1666…` (the 3 in `2 × 3` forces the repeat). You'll see this dressed up as "is the decimal terminating?" sufficiency questions — they reduce to "factor the denominator and look for primes other than 2 and 5."

**Trap to watch.** "x is a positive number" does **not** mean "x is a positive integer." This one sentence accounts for a startling share of missed Data Sufficiency questions. When you catch yourself assuming a clean whole number, stop and ask whether the problem actually granted it.

**Micro-drill — for each, name a single value that breaks the "obvious" answer:**

1. "k is positive. Is `k > 1/k`?" Obvious answer: yes. Breaker → ___
2. "Is `√(n²) = n`?" Obvious answer: yes. Breaker → ___
3. "x is a number with `x² = 2x`. Is x = 2?" Obvious answer: yes. Breaker → ___

Answers: (1) **k = 1/2** — then `1/2 > 2` is false. (2) **n = −3** — `√9 = 3 ≠ −3`; in fact `√(n²) = |n|`. (3) **x = 0** — also satisfies `x² = 2x`, so x isn't forced to be 2. Every breaker is a value the wide world allows and the "obvious" answer forgot.

> **Self-explanation prompt.** Why does `1/7` never terminate? If you can say "because 7 is neither 2 nor 5, so no power of 10 is divisible by it," you've replaced a memorized list with a rule you can regenerate under pressure.

**Takeaway.** The highest-leverage move in this whole chapter is one question, asked before you commit to any answer: *what world is this variable in?* Read the words for the fence. If it isn't there, hunt for the fraction or the negative that breaks the easy answer — that hunt is what separates a sufficiency verdict you guessed from one you proved.

---

**Putting it together.** Order of operations, signs, and the integer/real distinction are the grammar every harder Quant problem speaks. Three reflexes carry all of it: *bind ×/÷ tighter and run equal ranks left to right*; *count negatives and split every absolute value into two cases*; *name the variable's world before you trust an answer*. None of these is hard. All of them break under time pressure unless they're automatic — which is the entire point of drilling them now.

**What to do next.** Run the graded problem sets below. Treat each miss as a diagnosis, not a verdict: was it a grammar slip (re-read trap one and two), a dropped sign or second case (drill the negatives section), or an assumed integer (the world question)? Tag it in your error log so the pattern surfaces, then carry these reflexes straight into the fractions and number-properties chapters, where they stop being the lesson and become the floor you build on.
