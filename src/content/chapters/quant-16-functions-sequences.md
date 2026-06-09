---
slug: quant-16-functions-sequences
title: "Algebra: Functions & Sequences"
section: Quant
estimated_minutes: 8
prerequisites:
  - quant-15-inequalities-absolute-value
summary: |
  Function notation, custom-defined operators, and arithmetic and geometric sequences.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions before the lesson. Miss them freely; attempting first sharpens the read.
    pretest_question_ids:
      - algebra-q19
      - algebra-q20
  - id: functions-and-sequences
    type: reading
    title: "Functions, sequences, and custom characters"
    check_question_ids:
      - algebra-q6
      - algebra-q11
problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - algebra-q21
      - algebra-q22
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - algebra-q23
      - algebra-q24
---

## @functions-and-sequences

**Function notation** is just a compact way to describe a rule. `f(x) = 2x^2 − 3x + 1` means "take the input, square it, double that, subtract three times the input, add one." Whenever you see `f(something)`, substitute that "something" wherever `x` appears. The letter `x` is a placeholder — nothing more. You could rewrite the same rule as `f(blob) = 2·blob^2 − 3·blob + 1` and lose no meaning. That mental reframing kills more than half of all function errors, because it forces you to wrap the *entire* input in parentheses before doing anything to it. The GMAT does not test whether you remember a special "function" technique; it tests whether you can substitute carefully and resist the intimidation of unfamiliar notation. Treat every `f`, every `@`, every `#` as a recipe card: read the card, follow it literally, ignore the scary packaging.

The key habit: **parenthesize the input first, simplify second.** If you are asked for `f(t + 1)`, write `2(t + 1)^2 − 3(t + 1) + 1` and only then expand. Skipping the parentheses is how careless points evaporate.

**Worked example (basic).** If `f(x) = 2x^2 − 3x + 1`, find `f(3) − f(1)`.

- `f(3) = 2(9) − 3(3) + 1 = 18 − 9 + 1 = 10`
- `f(1) = 2(1) − 3(1) + 1 = 2 − 3 + 1 = 0`
- `f(3) − f(1) = 10 − 0 = 10`

No deep algebra required — just careful substitution.

**Worked example (algebraic input).** If `f(x) = x^2 + 2x`, find `f(a − 1)` in simplest form.

- Parenthesize the whole input: `f(a − 1) = (a − 1)^2 + 2(a − 1)`
- Expand: `(a^2 − 2a + 1) + (2a − 2)`
- Combine: `a^2 − 2a + 1 + 2a − 2 = a^2 − 1`

Notice the `−2a` and `+2a` cancel. GMAT loves this kind of "messy-looking input that simplifies cleanly" — if your algebra leaves an ugly tangle, you probably dropped a sign in the expansion. A clean cancellation is a green light.

> **Self-explanation prompt.** Before reading on, say out loud why `f(a − 1)` required parentheses around `(a − 1)` in *both* the `x^2` term and the `2x` term. (Because `x` appears in two places, and the input replaces `x` everywhere it occurs — miss one spot and the whole expression is wrong.)

**Worked example (plugging in numbers to beat an abstract answer).** If `f(x) = x^2 − 4`, which of the following equals `f(x + 2)`? (A) `x^2` (B) `x^2 + 4x` (C) `x^2 − 8x` (D) `x^2 + 4x − 8` (E) `x^2 + 4`

You could expand `(x + 2)^2 − 4 = x^2 + 4x + 4 − 4 = x^2 + 4x` and pick (B). But under pressure, the cleaner-feeling move is **plugging in numbers.** Pick a concrete `x`, say `x = 1`. Then `f(1 + 2) = f(3) = 9 − 4 = 5`. Now test each choice at `x = 1`: (A) gives 1, (B) gives `1 + 4 = 5` ✓, (C) gives `−7`, (D) gives `−3`, (E) gives 5. Both (B) and (E) survive `x = 1`, so try a second value, `x = 2`: target `f(4) = 12`; (B) gives `4 + 8 = 12` ✓, (E) gives `4 + 4 = 8` ✗. Only (B) survives both. **Plugging in numbers** turns an algebra-identity question into two rounds of arithmetic — and when two choices tie on the first number, a second number breaks the tie. Always test a second value when more than one choice survives.

**Nested functions — `f(f(x))`.** Apply the function once, then apply it again to the result. The output of the inner application becomes the input of the outer one.

**Worked example.** If `f(n) = n^2 − n`, find `f(f(3))`.

- Inner first: `f(3) = 9 − 3 = 6`
- Outer next: `f(6) = 36 − 6 = 30`

Work **inside out** every time. The trap: students compute `f(3 + 3) = f(6)` directly (skipping the inner step) — gets the right answer here by coincidence but fails on `f(f(2))` style questions. Test it yourself: `f(2) = 4 − 2 = 2`, so `f(f(2)) = f(2) = 2`, whereas `f(2 + 2) = f(4) = 12`. The shortcut gives a wildly wrong answer. Inner-then-outer is non-negotiable.

**Two different functions composed.** Sometimes the GMAT gives you `f` and `g` and asks for `f(g(x))` or `g(f(x))`. These are usually *not* equal, so the order is the whole point.

**Worked example (two functions, watch the order).** If `f(x) = 3x − 2` and `g(x) = x^2`, find `f(g(2)) − g(f(2))`.

- `g(2) = 4`, so `f(g(2)) = f(4) = 3(4) − 2 = 10`
- `f(2) = 3(2) − 2 = 4`, so `g(f(2)) = g(4) = 16`
- Answer: `10 − 16 = −6`

The fact that `f(g(2)) ≠ g(f(2))` is the lesson. Composition order matters as much as operation order in arithmetic. When a question pairs two functions, circle which one is on the *inside* before you compute anything.

> **Recall check.** To evaluate `f(g(x))`, which function do you apply first, and what becomes the input to the second? (Apply the inner function `g` first; its output becomes the input to `f`. Always inside-out.)

**Custom characters — the "made-up operator" trick.** The GMAT defines its own operator symbols all the time: `x @ y = x^2 + y^2`, `a ◇ b = 2a − b`, etc. These are **functions in disguise** — the definition is the rule, substitute mechanically. The strange symbol is designed to intimidate; it carries zero meaning beyond the definition printed right next to it.

**Worked example.** If `a ◇ b = 2a − b`, compute `(3 ◇ 4) ◇ 5`.

- Inner: `3 ◇ 4 = 2(3) − 4 = 2`
- Outer: `2 ◇ 5 = 2(2) − 5 = −1`

Inside out, same as nested functions.

**The one rule for custom-character problems:** substitute the definition *literally*. If the definition says `x @ y = x^2 − y^2`, then `5 @ 3 = 25 − 9 = 16`, and `3 @ 5 = 9 − 25 = −16`. Order matters — custom operators are often non-commutative. Watch the slots: whatever sits on the left of the symbol is the *first* variable in the definition, whatever sits on the right is the *second*.

**Worked example (custom operator with an unknown — backsolving).** Define `x ★ y = xy − x − y`. If `4 ★ k = 11`, what is `k`?

- Substitute literally: `4·k − 4 − k = 11`, i.e. `4k − k − 4 = 11`, so `3k = 15`, giving `k = 5`.

Now the strategic alternative, in case the algebra felt slippery. This is **backsolving** — plug the answer choices into the defining equation and keep the one that works. Suppose the choices were 3, 4, 5, 6, 7. Test the **middle choice** `k = 5` first: `4·5 − 4 − 5 = 20 − 9 = 11`. Match on the first try. Had it come out too small, the sorted choices tell you to jump to 6 or 7; too large, drop to 3 or 4 — so you never test more than two or three. On the real test, naming the tactic out loud ("I'll backsolve from C") keeps you from drifting back into slow algebra under time pressure.

**Worked example (nested custom operator, harder).** Define `n# = n^2 + n` for any number `n` (a one-input custom symbol). What is `(2#)#`?

- Inner: `2# = 4 + 2 = 6`
- Outer: `6# = 36 + 6 = 42`

The single-input version (a "postfix" symbol like `n#`) trips people who expect two slots. Read the definition's arity — how many inputs it takes — before plugging.

**Worked example (custom operator — substitute literally).** Define `x ▽ y = x + y − xy`. If `a ▽ b = 0` and `a = 0`, what is the value of `b`? Substitute literally: `a ▽ b = 0 + b − 0·b = b`, so the condition `a ▽ b = 0` becomes simply `b = 0`. The value is **b = 0**. The lesson: the intimidating symbol is fully resolved by substitution — `▽` is just shorthand for `x + y − xy`. Once you plug in the given value, what's left is an ordinary equation. The only trap is letting relief at decoding the operator make you sloppy on the algebra that follows.

**Trap to watch.** When a custom operator appears *inside* an expression with regular arithmetic, resolve the custom operator first unless parentheses say otherwise, and never assume it commutes or associates. `(a ◇ b) ◇ c` is generally not `a ◇ (b ◇ c)`. Check with the earlier definition `a ◇ b = 2a − b`: `(1 ◇ 2) ◇ 3 = 0 ◇ 3 = −3`, but `1 ◇ (2 ◇ 3) = 1 ◇ 1 = 1`. Different answers — so grouping is everything.

**Arithmetic sequences.** A sequence where each term differs from the previous by a fixed **common difference** `d`. Formula for the nth term:

    aₙ = a₁ + (n − 1)d

The `(n − 1)` is the single most common slip: from the 1st term to the nth term you take `n − 1` steps, not `n`. To reach the 10th term you add `d` nine times, not ten.

**Worked example.** First term 5, common difference 3. 10th term? `a₁₀ = 5 + 9(3) = 32`.

**Worked example (solve for an unknown term count).** In an arithmetic sequence, the first term is 7 and the common difference is 4. Which term equals 63?

- Set up: `63 = 7 + (n − 1)·4`
- `56 = (n − 1)·4`, so `n − 1 = 14`, giving `n = 15`.

So 63 is the **15th** term. If you had forgotten the `−1` and written `63 = 7 + 4n`, you'd get `n = 14` — off by one, and on a "how many terms" question that single error is usually the wrong-answer trap the test-writers planted.

**Sum of an arithmetic sequence:**

    Sₙ = (n/2)(a₁ + aₙ)

The elegant interpretation: the sum of n terms equals n times the *average* term. And because arithmetic sequences are symmetric, the average is `(first + last)/2`. This "average times count" view is faster than the formula and harder to misremember.

**Worked example.** Sum of integers from 1 to 100: `(100/2)(1 + 100) = 50 × 101 = 5050`. Gauss's classic — a one-line calculation.

**Worked example (counting terms before summing — the off-by-one trap).** Find the sum of all multiples of 5 from 30 to 95 inclusive.

- First find how many terms. These are arithmetic with `a₁ = 30`, `d = 5`, last term 95. Number of terms `= (95 − 30)/5 + 1 = 65/5 + 1 = 13 + 1 = 14`.
- Now sum: `Sₙ = (14/2)(30 + 95) = 7 × 125 = 875`.

The "`+ 1`" in the count is the classic **fence-post** error: the gaps between terms number one fewer than the terms themselves. Always `(last − first)/d + 1`. Forgetting the `+ 1` here would give 13 terms and a sum of `(13/2)(125) = 812.5` — not even an integer, which is itself a clue you miscounted.

**Worked example (estimation as a sanity check).** A 700-level prompt asks for the sum of the integers from 17 to 83 inclusive, and one answer choice is 3,300. Should you trust it? Don't grind — **estimate.** The count is `(83 − 17) + 1 = 67`. The average term is `(17 + 83)/2 = 50`. So the sum is about `67 × 50 = 3,350`. The candidate 3,300 is close but not exact, so it is wrong; the true value is exactly `67 × 50 = 3,350`. **Estimation** here doubles as the actual method — "count times average term" *is* the sum — and it instantly flags a near-miss decoy. When answer choices are spread out, a 10-second estimate often eliminates three of them.

> **Recall check.** Without scrolling up, state the formula for the nth term of an arithmetic sequence and the formula for the nth term of a geometric sequence. Now state the sum formula for an arithmetic sequence, and the rule for counting how many terms run from first to last. (`aₙ = a₁ + (n − 1)d`; `aₙ = a₁ × r^(n − 1)`; `Sₙ = (n/2)(a₁ + aₙ)`; count `= (last − first)/d + 1`.) If you can write them from memory, you've encoded the template; if not, re-read the boxes and try again in two minutes. Retrieval beats re-reading — that's the single most robust finding in the learning-science literature.

**Geometric sequences.** Each term is the previous times a fixed **common ratio** `r`. Formula for nth term:

    aₙ = a₁ × r^(n − 1)

Same `(n − 1)` logic: to reach the nth term you *multiply* by `r` exactly `n − 1` times.

**Worked example.** First term 3, common ratio 2. 5th term? `a₅ = 3 × 2^4 = 48`.

**Worked example (negative ratio — sign discipline).** A geometric sequence has `a₁ = 2` and `r = −3`. Find `a₄`.

- `a₄ = 2 × (−3)^3 = 2 × (−27) = −54`.

Two things bite here. First, the exponent is `4 − 1 = 3`, not 4. Second, a negative ratio makes the terms **alternate in sign**: 2, −6, 18, −54, … An odd power of a negative is negative; an even power is positive. If a question asks for the sign of a far-out term, you don't need its value — just the parity of the exponent.

**Worked example (geometric, solve for the ratio with a hidden second answer).** A geometric sequence has `a₁ = 4` and `a₃ = 36`. What is `a₂`? Using `a₃ = a₁ · r^2`: `36 = 4r^2`, so `r^2 = 9` and `r = ±3`. **Both signs are legal** for a geometric sequence. If `r = 3`, then `a₂ = 4·3 = 12`; if `r = −3`, then `a₂ = 4·(−3) = −12`. A Problem Solving question that lists only 12 is exploiting the assumption that `r` must be positive; the correct reading carries both 12 and −12 unless the problem rules one out. **Trap:** taking the square root of `r^2` without writing the negative branch. Whenever a geometric problem hands you an even-spaced relationship (`a₁` and `a₃`, or `a₂` and `a₄`), expect two ratios unless the problem rules one out (e.g., "all terms positive").

**Sum of a geometric sequence:**

    Sₙ = a₁ × (1 − rⁿ) / (1 − r)   (for r ≠ 1)

Rare on the GMAT but occasionally appears in 705+ questions about compounding. You will far more often just write out the handful of terms and add them — for short geometric sequences that is faster and less error-prone than the formula.

**The "recurrence" definition.** Some GMAT problems define a sequence recursively: "each term is the previous plus 5" (`aₙ = aₙ₋₁ + 5`) or "each term is twice the previous minus 3" (`aₙ = 2aₙ₋₁ − 3`). Write out the first 4–5 terms to spot the pattern, then apply the arithmetic or geometric formula **only if one cleanly fits**. Many recurrences are neither purely arithmetic nor purely geometric — the `2aₙ₋₁ − 3` type, for instance — and the safe move there is to grind out terms.

**Worked example (recursive, fits a formula).** `a₁ = 2` and `aₙ = aₙ₋₁ + 4`. Find `a₁₀`.

This is arithmetic with `d = 4`, so `a₁₀ = 2 + 9(4) = 38`.

**Worked example (recursive, fits no clean formula — find the pattern instead).** A sequence is defined by `a₁ = 1` and `aₙ = 2aₙ₋₁ + 1`. Find `a₅`.

- `a₁ = 1`
- `a₂ = 2(1) + 1 = 3`
- `a₃ = 2(3) + 1 = 7`
- `a₄ = 2(7) + 1 = 15`
- `a₅ = 2(15) + 1 = 31`

There is no common difference (1, 3, 7, 15, 31 — the gaps are 2, 4, 8, 16) and no common ratio (3/1 ≠ 7/3). Trying to force the arithmetic or geometric formula here would give nonsense. **Recognizing that a recurrence is neither** and just computing the terms is the disciplined choice. As a bonus, the pattern `2^n − 1` (1, 3, 7, 15, 31) often hides in these — spotting it lets you jump straight to a far term if the question asks for, say, `a₁₀ = 2^10 − 1 = 1023`.

**Worked example (cyclic recurrence — exploit the repeat, don't grind to term 50).** A sequence has `a₁ = 3`, `a₂ = 5`, and for `n ≥ 3`, `aₙ = aₙ₋₁ − aₙ₋₂`. What is `a₅₀`?

- List terms until the pattern loops: `a₁ = 3`, `a₂ = 5`, `a₃ = 5 − 3 = 2`, `a₄ = 2 − 5 = −3`, `a₅ = −3 − 2 = −5`, `a₆ = −5 − (−3) = −2`, `a₇ = −2 − (−5) = 3`, `a₈ = 3 − (−2) = 5`.
- Terms 7 and 8 repeat terms 1 and 2 — the sequence cycles with **period 6**: (3, 5, 2, −3, −5, −2), then repeats.
- To find `a₅₀`, reduce 50 by the period: `50 = 6·8 + 2`, so the remainder is 2. Term 50 sits in the same slot as term 2, so `a₅₀ = 5`.

Long subtractive or "difference" recurrences almost always cycle. The strategic move is **find the period, then use the remainder of the position divided by the period** — never compute fifty terms by hand. Watch the remainder convention: a remainder of 0 means the term equals the *last* term of one full cycle (here, position 6), not the first.

**Domain and range (lite).** The GMAT occasionally asks where a function is undefined. `f(x) = 1/(x − 3)` is undefined at `x = 3` (division by zero). `g(x) = √(x − 5)` requires `x ≥ 5` (square root of a negative is not real, and the GMAT works in real numbers). Knowing these two cases — denominator cannot be zero, even-root radicand cannot be negative — handles nearly every domain question you will see.

**Worked example (combined domain — the subtle one).** For what values of `x` is `h(x) = √(x − 2) / (x − 5)` defined?

- The square root forces `x − 2 ≥ 0`, i.e. `x ≥ 2`.
- The denominator forces `x − 5 ≠ 0`, i.e. `x ≠ 5`.
- Combine both: `x ≥ 2` **and** `x ≠ 5`. So the domain is all `x` from 2 upward, with a hole at 5.

The trap is satisfying one condition and forgetting the other. When a function has *both* a radical and a denominator, it has *two* restrictions, and you must intersect them. A choice like "`x ≥ 2`" alone is the deliberate near-miss.

> **Recall check.** A function has a square root in the numerator and a binomial in the denominator. How many restrictions does its domain have, and how do you combine them? (Two — the radicand must be ≥ 0 and the denominator must be ≠ 0 — and you **intersect** them, keeping only values that satisfy both.)

**Procedure to memorize.**

1. **Identify the form.** Plain function `f(x)`? Nested `f(f(x))` / `f(g(x))`? Custom symbol (`@`, `◇`, `#`)? Arithmetic, geometric, or general recurrence? Domain question? Naming the type picks your tool.
2. **Parenthesize the input.** Wrap whatever goes in — even a whole expression — and substitute it everywhere the variable appears. Never distribute function notation.
3. **Work inside out.** For nesting and composition, resolve the innermost piece fully, then feed its *output* outward. Respect explicit grouping.
4. **For custom operators, substitute literally and keep slot order.** Left input = first variable, right input = second. Assume nothing commutes or associates; check grouping.
5. **For sequences, pick the right template.** Arithmetic `aₙ = a₁ + (n − 1)d`; geometric `aₙ = a₁ × r^(n−1)`; sum `Sₙ = (n/2)(a₁ + aₙ)`. Mind the `(n − 1)`.
6. **Count terms as `(last − first)/d + 1`.** Never trust a guessed count on a sum or "how many" question.
7. **If no formula fits, list 4–5 terms** and read the pattern (gaps, ratios, a closed form like `2^n − 1`, or a repeating cycle — then use the remainder of the position divided by the period).
8. **For domain, list every restriction** — zero denominators and negative even-root radicands — then intersect.

**Common mistakes.**

- Treating `f(a + b)` as `f(a) + f(b)` — only true if `f` is strictly linear (no exponent, no constant inside a product). For `f(x) = x^2`, it fails.
- Skipping the inner step in `f(f(x))` and writing `f(x + x)` — coincidentally right sometimes, usually wrong.
- Assuming a custom operator commutes (`a ◇ b = b ◇ a`) or associates (`(a ◇ b) ◇ c = a ◇ (b ◇ c)`) — usually false.
- Cracking a custom-operator question's substitution but then mishandling the ordinary equation that's left.
- Using `n` instead of `(n − 1)` in the sequence term formulas — the universal off-by-one.
- Forgetting the `+ 1` when counting terms — the fence-post error.
- Dropping the sign on `(−r)` raised to an odd power, or taking only the positive root when `r^2 = k` (the missing `±r` branch in geometric problems).
- Grinding 50 terms of a cyclic recurrence instead of finding the period and reducing the position modulo it.
- Solving only half a domain restriction (the radical *or* the denominator, not both).

**Trap to watch.** "`f(a + b)`" is **not** the same as "`f(a) + f(b)`" unless `f` is literally linear. For `f(x) = x^2`, `f(2 + 3) = 25`, but `f(2) + f(3) = 4 + 9 = 13`. Students who distribute function notation like multiplication get trapped constantly. Always compute the input first, then apply the function.

**Recap.** Function notation is substitution with parentheses; custom symbols are functions in disguise — substitute literally and respect slot order and grouping. Nesting and composition go strictly inside-out, and `f(a + b) ≠ f(a) + f(b)` except for linear `f`. Arithmetic sequences add a constant `d` (`aₙ = a₁ + (n − 1)d`, sum = count × average term); geometric sequences multiply by a constant `r` (`aₙ = a₁ × r^(n−1)`), with sign care when `r` is negative and a `±` whenever you square-root the ratio. Count terms as `(last − first)/d + 1`, watch the `(n − 1)` and the `+ 1` fence-posts, and when a recurrence fits no formula, list the terms and read the pattern — including cycles, where you reduce the position modulo the period. For domains, kill zero denominators and negative even-root radicands — and intersect every restriction. Lean on strategy under the clock: **plug in numbers** to test abstract answer choices, **estimate** with "count times average term" to kill decoys, and **backsolve from the middle answer choice** rather than grinding algebra.
