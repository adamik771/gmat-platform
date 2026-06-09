---
slug: quant-17-translating-word-problems
title: "Algebra: Translating Word Problems"
section: Quant
estimated_minutes: 8
prerequisites:
  - quant-16-functions-sequences
summary: |
  The discipline of turning English into algebra cleanly — the skill underneath every applied problem.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions before the lesson. Miss them freely; attempting first sharpens the read.
    pretest_question_ids:
      - word-problems-q1
      - word-problems-q2
  - id: translation-discipline
    type: reading
    title: "Translation discipline — English to algebra without losing the meaning"
    check_question_ids:
      - word-problems-q13
      - word-problems-q14
      - word-problems-q47
      - word-problems-q52
      - word-problems-q59
  - id: word-problem-translation
    type: reading
    title: "Word-problem translation — English into equations"
    check_question_ids:
      - algebra-q7
      - algebra-q20
problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - word-problems-q3
      - word-problems-q4
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - word-problems-q5
      - word-problems-q6
---

## @translation-discipline

Every word problem is two tasks welded together: translate English into algebra, then solve. Most errors happen in the first step — students set up the wrong equation and then solve the wrong equation correctly. Four discipline habits eliminate 90% of translation errors.

**Mental model.** Word problems are *translation* problems. The hard part is converting English ("twice as many," "after a 20% increase," "for every 3 X there are 5 Y") into equations. Once the equations are right, the algebra is mechanical. Almost every word-problem error is a translation error — a misread "more than" or a confused before/after — not an arithmetic one. The discipline: write the equation in symbols *before* you start solving.

**Habit 1: Define your variable explicitly, in words, with units.**

Not "x = amount" but "x = the number of dimes in the piggy bank." Writing out what the variable stands for — in full, with units — prevents the single most common mistake: solving for the wrong quantity.

Look at this problem: "Maria is 3 times as old as her daughter. If her daughter is 8, how old will Maria be in 6 years?" If you let `x = Maria's current age`, you'll answer 24. If you let `x = Maria's age in 6 years`, you'll answer 30. The algebra is fine either way; the question wants a specific one. Writing the variable clearly keeps you aimed at what the question actually asks.

**Habit 2: Translate phrases literally, one clause at a time.**

English-to-algebra is a word-by-word conversion, not a summary. Build the equation clause by clause.

| English phrase | Algebra |
|---|---|
| "x more than y" | y + x |
| "x less than y" | y − x |
| "twice as many as y" | 2y |
| "three times as old as" | 3 × (age of other) |
| "x years from now" | (current age) + x |
| "x years ago" | (current age) − x |
| "the sum of A and B" | A + B |
| "the product of A and B" | A × B |
| "the ratio of A to B" | A/B |
| "x is p% of y" | x = (p/100) × y |

**The word "is" = equals.** "Twice the sum of x and 3 is 20" becomes 2(x + 3) = 20. The equality always lives at "is."

**Habit 3: Pick which unknown to call the variable strategically.**

Given a choice, let the variable stand for the quantity that gives the cleanest equation. If one person is defined in terms of another ("John is 5 years older than Mary"), let Mary = x and John = x + 5, not the other way — the "+5" is cleaner than "−5."

**Example.** Three consecutive integers sum to 72. Find the largest.

Option A: let x = smallest. Integers: x, x+1, x+2. Sum: 3x + 3 = 72, so x = 23. Largest = 25.

Option B: let x = middle. Integers: x−1, x, x+1. Sum: 3x = 72, so x = 24. Largest = 25.

Option B is faster because the middle is the mean of the three — there's no "+1 +2" arithmetic. For any evenly-spaced group, let the middle element be the variable.

**Habit 4: Check your answer by plugging back into the *original English*.**

After you get a numeric answer, read the problem again and verify that your number satisfies every stated condition. Not the algebra — the English. If you answered "30" but the problem says "Maria is 3× her 8-year-old daughter's age now," check: 3 × 8 = 24, not 30 — but the question asked about 6 years from now, and 24 + 6 = 30. ✓

This single habit catches 80% of translation errors.

**Two-variable setups.** Many word problems force two variables (ages, coins, mixtures). Write two equations, then solve by substitution or elimination.

**Example (ages).** Sara is twice as old as Tom was 10 years ago. Their ages sum to 62 now. Sara's age?

- Let S = Sara now, T = Tom now.
- Equation 1 (sum now): S + T = 62
- Equation 2 (Sara was twice Tom 10 years ago): S − 10 = 2(T − 10)

Simplify eq 2: S − 10 = 2T − 20, so S = 2T − 10. Substitute into eq 1: (2T − 10) + T = 62, so 3T = 72, T = 24. Then S = 62 − 24 = **38**.

Verify: 10 years ago, Sara was 28 and Tom was 14. Was 28 = 2 × 14? Yes. ✓

**Note on the James-and-nephew problem.** Same template. Two clauses → two equations → substitute or eliminate. The arithmetic is more complex, but the structure is identical.

> **Self-explanation prompt.** Why does picking the "middle" variable work for consecutive-integer problems? If you can say "because the middle is the mean, so the sum collapses to (count)(middle) with no extra +1, +2 terms," you've internalized the why — and you'll apply it to evenly-spaced sets of any size.

## @word-problem-translation

Most GMAT algebra questions arrive in English, not symbols. Translation is the bottleneck. The habit that wins: translate each English phrase into a single algebraic expression, left to right, without rearranging.

**The translation dictionary:**

| English | Algebra |
|---|---|
| is, was, equals, will be | = |
| sum of, total, more than, increased by | + |
| difference, less than, decreased by, fewer than | − |
| product, of (with a percent), times, twice | × |
| quotient, per, ratio of | / |
| half as much as | `x/2` |
| twice as many as | `2x` |
| three more than | `x + 3` (NOT `3 + x` if "than" is explicit — same value but track which is "the thing") |
| three less than x | `x − 3` (NOT `3 − x` — this is the #1 translation mistake) |
| x is 20% more than y | `x = 1.20y` |
| x is 20% less than y | `x = 0.80y` |

**The "less than" trap.** "5 less than x" is `x − 5`, not `5 − x`. Read right-to-left when you see "less than" or "fewer than." Similarly, "5 more than x" is `x + 5`.

**Example.** The sum of three consecutive even integers is 18 more than twice the smallest. Find the largest.

Let the three integers be `n`, `n + 2`, `n + 4`. Sum: `3n + 6`. "18 more than twice the smallest" = `2n + 18`.

Equation: `3n + 6 = 2n + 18` → `n = 12`. Largest: `n + 4 = 16`.

**The unit-matching habit.** In word problems with mixed units (dollars, hours, kilograms), write units next to every variable. "A muffin costs m dollars" → `m` has units of dollars per muffin. Check that equations have matching units; a mismatch almost always means a translation error.

**Example.** At a bakery, 2 muffins and 3 scones cost $21, while 4 muffins and 1 scone cost $17. Find the cost of one scone.

Let m = dollars per muffin, s = dollars per scone.

- `2m + 3s = 21`
- `4m + s = 17`

From equation 2: `s = 17 − 4m`. Substitute: `2m + 3(17 − 4m) = 21` → `2m + 51 − 12m = 21` → `−10m = −30` → `m = 3`. Then `s = 17 − 12 = 5`.

**Rates and percents in words.** A 20% raise: multiply by 1.20. A 20% cut: multiply by 0.80. "30% of x" is `0.30x`. "Twenty percent more than x" is `1.20x`, not `x + 20`. Always convert percents to decimals before multiplying.

**Trap to watch.** "Three more than half of x" is `x/2 + 3`, not `(x + 3)/2`. Parse the English by the last operation first: "more than" is the outer verb, applied to "half of x" (inner). Always resolve inner phrases before outer ones.

> **Self-explanation prompt.** Translate in one breath: "the number of boys is 5 fewer than twice the number of girls." If you wrote `b = 2g − 5`, you've got it. If you wrote `b = 5 − 2g`, re-read — "fewer than" means subtract from the bigger thing.
