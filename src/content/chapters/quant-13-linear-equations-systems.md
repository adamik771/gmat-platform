---
slug: quant-13-linear-equations-systems
title: "Algebra: Linear Equations & Systems"
section: Quant
estimated_minutes: 60
prerequisites:
  - quant-12-roots-radicals
summary: |
  Isolating one unknown and solving systems by substitution or elimination. Backsolving is often faster than the algebra.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions before the lesson. Miss them freely; attempting first sharpens the read.
    pretest_question_ids:
      - algebra-q1
      - algebra-q41
  - id: linear-equations-one-unknown
    type: reading
    title: "Linear equations in one unknown — isolate-the-variable discipline"
    check_question_ids:
      - algebra-q110
  - id: systems-of-equations
    type: reading
    title: "Systems of equations — substitution vs. elimination"
    check_question_ids:
      - algebra-q4
      - algebra-q15
  - id: the-algebra-blueprint
    type: reading
    title: "The algebra blueprint (and solving for the combo)"
    check_question_ids: []
  - id: summary
    type: summary
    title: "What to remember"
    check_question_ids: []
problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - algebra-q3
      - algebra-q43
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - algebra-q5
      - algebra-q6
---

## @summary

- Preserve equality by performing the same valid operation on both sides and clear fractions strategically.
- For systems, choose substitution when one variable is isolated and elimination when coefficients align cheaply.
- Interpret the result in context and check it in the original equations, especially after translating a word problem.

## @linear-equations-one-unknown

The single most important habit in algebra is "isolate the variable before you do anything else." Every one-unknown linear equation reduces to `x = something`. The work is mechanical; the errors come from doing it sloppily under time pressure. The good news is that this is the highest-leverage skill in all of Quant: linear manipulation shows up not just in algebra problems but inside word problems, rates, and ratios. Master the discipline once and it pays off across the whole section. Most test-takers already "know how" to solve `3x + 7 = 22`; what separates a mid-scoring test-taker from a top scorer is not knowing the steps but executing them without a single dropped sign across a four-step manipulation, under the clock, on a problem dressed up as something else.

**Mental model.** An equation is a balance scale. Whatever you do to one side, you must do to the other — the two sides stay equal. Solving means isolating the unknown by adding, subtracting, multiplying, or dividing **both sides** at once. Lose this discipline and your work breaks down within three steps. The scale metaphor is not decoration: it is the reason every legal move comes in pairs. If you change only one pan, the scale tips and the equality is gone. The whole of one-variable algebra is just repeatedly asking, "what is currently being done to x, and what is the inverse operation that undoes it?" — then applying that inverse to both pans simultaneously.

**The four operations that preserve equality:**

1. Add the same thing to both sides.
2. Subtract the same thing from both sides.
3. Multiply both sides by the same non-zero thing.
4. Divide both sides by the same non-zero thing.

That's it. Every algebraic step reduces to one of these four. If you find yourself doing anything else ("I'll just move this over and forget the sign change"), you're introducing errors. The phrase "move it over to the other side" is shorthand for "subtract it from both sides" — it is fine to think that way as long as you never forget that the sign flips when a term crosses the equals sign. Notice also that the "non-zero" qualifier on multiply and divide is doing real work: zero breaks the balance because multiplying both sides by zero turns any equation into the useless `0 = 0`, and dividing by zero is undefined. That qualifier becomes a live trap the moment the thing you multiply or divide by contains a variable.

**The order of unwrapping.** When several operations are stacked on the variable, undo them in reverse order — outermost first, the way you take off a coat before a shirt. In `3x + 7 = 22`, the variable has been multiplied by 3 and then had 7 added. Undo the addition first (subtract 7), then undo the multiplication (divide by 3). This "reverse-PEMDAS" instinct keeps multi-step problems clean. The reason it works: PEMDAS tells you the order operations were *applied* going in; to peel them off, you reverse that order, just as the last layer you put on is the first you take off.

**Example.** If `3x + 7 = 22`, find `6x + 5`.

- Subtract 7: `3x = 15`.
- Divide by 3: `x = 5`.
- Compute: `6(5) + 5 = 35`.

**The faster path: don't always solve for x.** Notice `6x + 5 = 2(3x) + 5 = 2(15) + 5 = 35`. You only needed `3x`, not `x`. The GMAT rewards students who read what the problem actually asks for — sometimes the target expression is a rearrangement of the given one, and you can skip solving for the individual variable.

**The "keep what you need" heuristic.** Before solving, glance at what the question wants. If it wants `2x − 1` and your equation gives `2x = 7`, just write `2x − 1 = 6`. No need to find x. This is one of the most common time-savers on the test: the test-writers deliberately set up an equation that gives a clean value for the whole *expression* the question asks about, even when the individual variable is ugly (a fraction or a non-integer). If x comes out messy, that is usually a hint that you were supposed to chase the expression, not the variable.

> **Recall check.** You have `5x = 12` and the question asks for `5x + 4`. What is the fastest move, and what is the answer? (Add 4 to both sides of the given equation directly: `5x + 4 = 16`. Never solve for the ugly `x = 12/5`.)

**Worked example (keep what you need, easy).** If `4a − 9 = 3`, what is the value of `8a − 9`?

- The naive path: solve `4a = 12`, so `a = 3`, then `8(3) − 9 = 15`.
- The faster path: notice the target `8a − 9` is built from `4a`. From `4a − 9 = 3` add 9 to get `4a = 12`. Then `8a = 2(4a) = 24`, so `8a − 9 = 15`.
- Both give 15, but the second path never isolates `a` and is harder to slip on. **Trap built into the choices:** an answer of 3 (the value of `4a − 9`) or 12 (the value of `4a`) will be sitting in the choice list to catch anyone who stops one step early. Always finish the exact expression asked for.

**Clearing fractions and decimals.** If an equation has fractions, multiply both sides by the LCD (lowest common denominator) to clear them. `x/3 + x/4 = 7` → multiply by 12 → `4x + 3x = 84` → `7x = 84` → `x = 12`. Decimal coefficients clear the same way: multiply both sides by a power of 10. `0.2x + 1.5 = 2.1` → multiply by 10 → `2x + 15 = 21` → `2x = 6` → `x = 3`. Clearing denominators *first* turns a messy-looking equation into a clean integer one and removes the single biggest source of fraction-arithmetic slips.

**Trap to watch — distribute the multiplier across every term.** When you multiply both sides by the LCD, multiply *every* term, including ones that had no denominator. In `x/3 + x/4 = 7`, the lone `7` must also be multiplied by 12 to give 84. Forgetting to scale the constant term is the classic fraction-clearing error. A reliable safeguard: before you simplify anything, write the multiplier in front of every single term — `12·(x/3) + 12·(x/4) = 12·7` — so no term can be silently skipped.

**Worked example (clearing fractions, medium).** Solve `(x + 2)/3 − (x − 1)/2 = 1`.

- The LCD of 3 and 2 is 6. Multiply every term by 6: `6·(x+2)/3 − 6·(x−1)/2 = 6·1`.
- Simplify each: `2(x + 2) − 3(x − 1) = 6`.
- Distribute carefully (watch the sign on the second group): `2x + 4 − 3x + 3 = 6`.
- Combine: `−x + 7 = 6`, so `−x = −1`, giving `x = 1`.
- Check: `(1+2)/3 − (1−1)/2 = 3/3 − 0 = 1`. Correct.

**Checking by substitution.** The cheapest insurance on any algebra problem: plug your answer back into the original equation. If it doesn't satisfy, you made an arithmetic mistake. Ten seconds of checking beats two minutes of confused rework. Always check against the *original* equation, not a rearranged line — if your error happened in step two, checking against step three will happily confirm the wrong answer.

**Pro tip.** Build the substitution check into muscle memory: every time you solve an algebra problem, the last thing you do before bubbling is verify. On the GMAT, an extra 5 seconds per algebra question buys you far fewer arithmetic-slip misses — by far the cheapest accuracy gain available. The check is also where "keep what you need" pays a second dividend: if you carried the whole expression instead of the variable, the substitution is usually simpler too.

> **Recall check.** When you multiply both sides of an equation by an expression that contains a variable, what two dangers appear? (You might be multiplying by zero, which can introduce a false solution; and if it were an inequality, an unknown-sign multiplier could flip the inequality direction.)

**The strategy plays: backsolving and plugging in.** Two answer-choice tactics make many one-unknown problems faster than the algebra, and they are worth naming so you reach for them deliberately.

- **Backsolving** means taking the five answer choices and testing them in the problem until one works. Because the GMAT lists numeric answers in order, **start with the middle choice (C)**. If it's too big, you've eliminated the three larger choices at once; if too small, eliminate the three smaller ones. You'll usually nail the answer in at most two tests.
- **Plugging in numbers** means replacing an abstract variable with a concrete, easy value (often 2, 10, or 100) when the answer choices are themselves expressions. Solve the concrete version, then find the matching answer choice.

The signal for *when* to reach for each: numeric, ordered answer choices plus algebra you'd rather not grind point to **backsolving**; variable expressions in the answer choices (things like `0.95n` or `(p + 2)/q`) point to **plugging in numbers**. If neither signal is present, just do the clean algebra.

**Worked example (backsolving, easy-medium).** If `(3x − 4)/5 = x − 4`, what is x? Choices: (A) 2 (B) 4 (C) 6 (D) 8 (E) 10.

- **Backsolve from C, x = 6:** left side `(18 − 4)/5 = 14/5 = 2.8`; right side `6 − 4 = 2`. Left is bigger than right, so C is too large for balance — but watch the trend: as x grows, the right side `x − 4` grows faster (slope 1) than the left side `(3x−4)/5` (slope 0.6). So I actually need a *larger* x to let the right side catch up. Test the bigger choices.
- **Try E, x = 10:** left `(30 − 4)/5 = 26/5 = 5.2`; right `10 − 4 = 6`. Now right exceeds left — the crossover is between 6 and 10. **Try D, x = 8:** left `(24 − 4)/5 = 20/5 = 4`; right `8 − 4 = 4`. Match. **Answer: D.**
- Confirm with algebra: multiply both sides by 5, `3x − 4 = 5x − 20`, so `16 = 2x`, `x = 8`. Same answer — and notice backsolving avoided the sign-management step where many students drop a minus.

**Worked example (plug in numbers, medium-hard).** If a number n is increased by 25% and the result is then decreased by 20%, the final value equals which of the following? Choices: (A) `0.95n` (B) `n` (C) `1.05n` (D) `1.10n` (E) `1.25n`.

- **Plug in n = 100** (percent problems love 100). Increase by 25%: `100 → 125`. Decrease that by 20%: `125 − 0.20(125) = 125 − 25 = 100`.
- Final value is 100, which equals the original 100, so the multiplier is `1.00`. **Answer: B, `n`.**
- **Trap:** a careless reader subtracts `25% − 20% = 5%` and picks (C) `1.05n` or (A) `0.95n`. Percent changes are *multiplicative*, not additive: `1.25 × 0.80 = 1.00`. Plugging in a concrete number makes the multiplicative reality obvious and immune to the additive trap.

**Worked example (translate a word problem, then isolate, hard).** A taxi charges a flat `$3.00` plus `$0.40` per quarter-mile. A ride costs `$11.00`. How many miles long was the ride?

- Let m = miles. There are `4m` quarter-miles, each costing `$0.40`. Equation: `3 + 0.40(4m) = 11`.
- Simplify the variable term: `0.40 × 4 = 1.60`, so `3 + 1.6m = 11`.
- Isolate: subtract 3 → `1.6m = 8`; divide by 1.6 → `m = 5`.
- Check: `3 + 0.40(4·5) = 3 + 0.40(20) = 3 + 8 = 11`. Correct, **5 miles**.
- **Trap to watch:** the rate is per *quarter*-mile, so a 5-mile ride has 20 charged units, not 5. Mismatched units (per quarter-mile vs. per mile) is the single most common word-problem error; define your variable's unit explicitly before writing the equation.

**Worked example (two-sided equation with a parameter, hard).** If `5(x − 2) = 2x + k` and `x = 4`, what is the value of `k`, and then for that `k` what is `x` when the equation instead reads `5(x − 2) = 2x + k + 9`?

- First find k. Substitute `x = 4` into `5(x − 2) = 2x + k`: left side `5(4 − 2) = 5(2) = 10`; right side `2(4) + k = 8 + k`. Set equal: `10 = 8 + k`, so `k = 2`.
- Now solve the second equation with `k = 2`: `5(x − 2) = 2x + 2 + 9`, i.e. `5(x − 2) = 2x + 11`.
- Distribute the left side first: `5x − 10 = 2x + 11`.
- Gather variables left, constants right: subtract `2x` → `3x − 10 = 11`; add 10 → `3x = 21`; divide by 3 → `x = 7`.
- Check: left `5(7 − 2) = 5(5) = 25`; right `2(7) + 11 = 14 + 11 = 25`. Correct, **k = 2 and x = 7**. The lesson: a variable on *both* sides is handled by the same balance moves — collect all variable terms on one pan, all constants on the other, then isolate.

> **Recall check.** On a numeric "solve for x" question with five ordered answer choices and ugly-looking algebra, which choice do you test first when backsolving, and why? (The middle choice, C — one test can eliminate three choices at once because the answers are sorted.)

**Trap to watch.** When you multiply or divide both sides by an expression containing a variable, you may be multiplying by zero or flipping a sign. If `x − 2` could be negative, multiplying an inequality by `x − 2` flips the inequality sign. Keep track of what's in your multiplier. Equally, when you divide both sides by a variable expression, you can silently *lose* a valid solution (the one where that expression equals zero) — in pure linear equations this is rare, but the instinct to never divide away a variable without checking the zero case will protect you later in quadratics.

**Trap to watch — the disappearing variable.** Occasionally an equation simplifies to something with no variable left. If you reach `5 = 5`, the equation is an identity — *every* number works (infinitely many solutions). If you reach `5 = 7`, it's a contradiction — *no* number works (no solution). Don't panic and assume you made an error; these are real, testable outcomes. An identity means the relationship holds for infinitely many values and can't pin down a single one; a contradiction means no value works at all.

**The procedure to memorize.** For any one-unknown linear equation, run this every time:

1. **Read the target.** Note what the question actually asks for — the variable, or an expression built from it. Decide whether "keep what you need" lets you skip solving for the variable.
2. **Clear denominators and decimals.** Multiply both sides by the LCD (and by a power of 10 for decimals), scaling *every* term.
3. **Distribute and combine.** Expand parentheses, then collect like terms on each side.
4. **Gather the variable on one side, constants on the other.** Add/subtract the same thing from both sides.
5. **Isolate by undoing the coefficient.** Divide (or multiply) both sides by the coefficient, undoing operations outermost-first.
6. **Build the requested expression.** If the question wanted `2x − 1`, compute it now from your value or, better, from the kept expression.
7. **Check by substitution into the original equation.** Confirm before bubbling.

When the algebra looks ugly or the answers are clean numbers, swap in **backsolving** (test choice C first); when the answers are expressions, swap in **plugging in numbers** (use 2, 10, or 100).

**Common mistakes.**

- Forgetting to apply an operation to *both* sides (tipping the scale).
- Dropping a sign when a term crosses the equals sign — "moving it over" without negating it.
- Multiplying the LCD into the fractioned terms but forgetting the lone constant term.
- Mishandling the minus sign when distributing across a subtracted group, e.g. `−(x − 1)` becoming `−x − 1` instead of `−x + 1`.
- Solving for the variable when the question wanted an expression, then picking the trap answer.
- Treating percent changes as additive (`+25% − 20% = +5%`) instead of multiplicative.
- Mismatching units in a word problem (per quarter-mile vs. per mile) before writing the equation.
- Skipping the substitution check and shipping an arithmetic slip.

**Recap.** Every one-unknown linear equation collapses to `x = something` through four equality-preserving moves: add, subtract, multiply, divide — always on both sides. Clear fractions and decimals first, undo operations in reverse order, and read the question so you can "keep what you need" instead of grinding to a single value. When a variable sits on both sides, collect variables on one pan and constants on the other. When the path is messy, backsolve from the middle choice or plug in friendly numbers. Finish the exact expression asked for, then check by substituting into the original. Do that consistently and one-unknown algebra becomes the most reliable points on the Quant section.

> **Self-explanation prompt.** In one sentence, why is "isolate the variable" good discipline? If you can say "because once the variable is alone, every remaining step is arithmetic," you've internalized why this is the only reliable path through multi-step algebra.

## @systems-of-equations

A system of equations has two or more equations and two or more unknowns. On the GMAT, you'll almost always see two equations in two unknowns — and occasionally three in three. The good news: two techniques cover essentially everything, and a single independence check protects you from the most common systems trap on the entire test — being handed two equations that secretly carry only one fact. Master those, and systems become bookkeeping rather than puzzles. The hard part of this topic is almost never the algebra — it's reading the target correctly and recognizing when two equations secretly carry only one fact. We'll drill both relentlessly.

**Mental model.** Each linear equation in two unknowns is a line. A *solution* to the system is a point that lies on both lines at once — the intersection. Two distinct, non-parallel lines cross at exactly one point, which is why two good equations usually pin down one unique `(x, y)`. Two parallel-but-different lines never cross (no solution). And two equations that are secretly the *same* line cross everywhere (infinitely many solutions). Hold this picture: almost every "system" question is really a question about whether two lines cross once, never, or always. Once or never or always — that trichotomy is the whole conceptual core of the topic.

**Substitution — use when one variable is cheap to isolate.** If one equation already gives you `y = 2x + 3`, or a variable has a coefficient of 1 so it isolates without fractions, substitute the expression into the other equation. Solve for the one remaining unknown, then back-substitute to get the other. The whole point of preferring substitution here is to *avoid fractions*: isolating a variable with coefficient 1 keeps every number an integer, and integer arithmetic is where you make the fewest mistakes under time pressure.

**Elimination — use when coefficients line up for addition or subtraction.** If one equation has `+2y` and the other has `−2y`, adding the equations kills y instantly. If the coefficients aren't opposites yet, scale one or both equations until they are, then add or subtract. Elimination is also the technique that most directly produces *combinations* — `x + y`, `x − y`, `2x − 3y` — sometimes in a single step, which matters because the GMAT loves to ask for a combination rather than the individual values.

**Example (elimination, easy).** `x + y = 12` and `x − y = 4`. The y-coefficients are already `+1` and `−1`. Add the equations: `2x = 16`, so `x = 8`. Subtract the second from the first: `2y = 8`, so `y = 4`. Two clean lines, no substitution needed. Notice how elimination shines when the unknowns appear with matching or opposite coefficients — you do almost no algebra.

**Example (substitution, easy-medium).** At a bakery, `2m + 3s = 21` and `4m + s = 17`, where m and s are prices. In equation 2, s has coefficient 1, so isolate it: `s = 17 − 4m`. Substitute into equation 1: `2m + 3(17 − 4m) = 21` → `2m + 51 − 12m = 21` → `−10m = −30` → `m = 3`. Then `s = 17 − 4(3) = 5`. Always finish by back-substituting; the question may want s, not m.

> **Recall check.** When should you reach for substitution rather than elimination? (When one variable is already isolated or has a coefficient of 1, so isolating it costs you no fractions.)

**Example (elimination with coefficient matching, medium).** `3x + 2y = 16` and `5x − 2y = 16`. The y-terms are `+2y` and `−2y` — already opposites — so add directly: `8x = 32`, giving `x = 4`. Back-substitute into the first: `3(4) + 2y = 16` → `12 + 2y = 16` → `y = 2`. If the question asks for `x + y`, the answer is `6`. When the coefficients *don't* line up — say `3x + 2y = 16` and `5x + 4y = 30` — multiply the first equation by 2 to get `6x + 4y = 32`, then subtract the second: `(6x − 5x) + (4y − 4y) = 32 − 30` → `x = 2`. Scaling to create a matched pair is the whole game in elimination.

**Read what the question asks before grinding.** Just as with one-unknown equations, the GMAT often wants a *combination* like `x + y` or `2x − y`, not the individual values. Sometimes you can get that combination by adding or subtracting the original equations without ever solving for x or y separately. Given `x + y = 12` and `x − y = 4`, if the question only wants `x` you already have it from one addition step; if it wants `xy` you'd compute `8 · 4 = 32`. Glance at the target first — you may save a full step.

Here's a quick reference for choosing your technique:

| Situation in the equations | Best technique | Why |
| --- | --- | --- |
| A variable already isolated (`y = ...`) | Substitution | Plug straight in, no setup |
| A variable has coefficient 1 | Substitution | Isolate with no fractions |
| Coefficients already opposite (`+2y`, `−2y`) | Elimination (add) | One step kills a variable |
| Coefficients equal (`+3x`, `+3x`) | Elimination (subtract) | One step kills a variable |
| Nothing lines up | Elimination after scaling | Multiply to force a match |
| Question wants a combination (`x + y`) | Add/subtract originals | May skip solving entirely |

**Worked example (combination shortcut, medium).** If `5x + 3y = 29` and `3x + 5y = 27`, what is `x + y`? Don't solve for x and y separately — that's the trap of wasted time. Add the two equations: `8x + 8y = 56`, so `8(x + y) = 56` and `x + y = 7`. One addition step, done. (If you also wanted `x − y`, subtract instead: `2x − 2y = 2`, so `x − y = 1`. From `x + y = 7` and `x − y = 1` you'd get `x = 4`, `y = 3` — but only bother if the question demands the individuals.) Naming this *symmetric-system shortcut* to yourself makes you reach for it on sight: whenever the coefficients are swapped between equations, add for the sum and subtract for the difference.

**Strategy spotlight — plugging in the answer choices (backsolving).** When a system is wrapped in a word problem and the answer choices are concrete numbers, you can often skip the algebra entirely. Consider: "A theater sold adult tickets at $12 and child tickets at $8. It sold 30 tickets for $312 total. How many adult tickets were sold?" with choices (A) 12 (B) 15 (C) 18 (D) 20 (E) 24. Test choice (C) 18 adult tickets: then `30 − 18 = 12` child tickets, revenue `18·12 + 12·8 = 216 + 96 = 312`. It matches — answer is (C). Backsolving turns a two-equation system into one arithmetic check, and because GMAT choices are usually ordered, starting from the middle value (C) lets you tell which direction to move if it misses. Name the tactic to yourself when you use it so it becomes a reflex.

**Worked example (backsolving when C misses, medium).** "Tickets cost $9 (adult) and $5 (child). A group bought 20 tickets for $144. How many adult tickets?" Choices (A) 8 (B) 11 (C) 14 (D) 16 (E) 18. Start at (C) 14 adults → 6 child → `14·9 + 6·5 = 126 + 30 = 156`. That's too high (target 144), so we need *fewer* of the expensive adult tickets — move down, not up. Try (B) 11 adults → 9 child → `11·9 + 9·5 = 99 + 45 = 144`. Match — answer (B). Notice the discipline: the direction of the miss at (C) told us instantly to go down, so we tested at most two choices instead of five. That direction-of-miss logic is the entire reason to start in the middle.

> **Recall check.** In backsolving a system word problem, which answer choice do you usually test first, and why? (The middle one — typically C — because if it's wrong, the result tells you whether to go higher or lower, saving tests.)

**The linear-dependence trap.** Two equations in two unknowns do *not* always pin down a unique answer. If one equation is just a multiple of the other, they describe the **same line** and the system has infinitely many solutions. Test writers love to disguise this: they hand you two equations that look different but are algebraically identical, hoping you'll assume the pair is solvable. The disguise is usually arithmetic scaling — they multiply through by 2, 3, or 1/2 and change the way the equation is written, so the two look unrelated at a glance.

**Example (a system that secretly carries one fact, medium).** A problem gives you `2x + 3y = 14` and `4x + 6y = 28` and asks for x. Can you find it? Multiply the first equation by 2 and you get *exactly* the second: same line, no new information. The pair is really one equation in two unknowns, so x is **not determined** — infinitely many (x, y) pairs satisfy both. The trap is assuming that any two equations must combine to a solution; here the "second" equation adds nothing.

**Quick test for independence.** Two linear equations `ax + by = c` and `dx + ey = f` are *independent* (cross at exactly one point, giving a unique x and y) if and only if `ae − bd ≠ 0`. This quantity is just the cross-multiplied coefficients. Run it at a glance before you trust that a system is solvable. Concretely: take the x-coefficient of the first times the y-coefficient of the second, then subtract the y-coefficient of the first times the x-coefficient of the second. If that number is nonzero, the lines cross once and the pair pins down a unique solution; if it's zero, stop — the constants alone can never rescue you.

> **Recall check.** For `ax + by = c` and `dx + ey = f`, what's the one-line check that the system has a unique solution? (`ae − bd ≠ 0` — the cross-product of the coefficients is nonzero.)

**Example (independence check, medium-hard).** Can the system `5x + 2y = 9` and `15x + 6y = c` determine x and y uniquely? Compute `ae − bd = (5)(6) − (2)(15) = 30 − 30 = 0`. The coefficient rows are proportional, so the lines are parallel or identical regardless of c — the system can *never* uniquely determine x and y. If `c = 27` the lines coincide (infinitely many solutions); if `c ≠ 27` they're parallel and distinct (no solution). Either way, not a unique point. The instant the determinant `ae − bd` is 0, stop — no amount of staring at the constants will rescue a unique pair.

**Worked example (the trap baited in disguise, hard).** What is the value of `3a − 2b` if `6a − 4b = 10`? The tempting protest is "one equation can't determine two unknowns, so I can't find it." But you aren't asked for a or b — you're asked for `3a − 2b`, and `6a − 4b = 2(3a − 2b)`, so `2(3a − 2b) = 10` gives `3a − 2b = 5` outright. (The same value falls out of `9a − 6b = 15`, which is `3(3a − 2b) = 15`.) The lesson cuts both ways: linear dependence can leave a system unsolvable when you need both unknowns *separately*, *or* it can hand you a requested combination in a single step when the question asks only for the very combination the equation already fixes. Always read the target first — if the question had asked "what is a?", this same equation would tell you nothing.

**Three unknowns and counting *independent* equations.** A unique solution to a system in three unknowns generally needs three independent equations. The GMAT exploits this by handing you three equations where one is a combination of the other two, or by burying a constraint in non-equation form (an inequality like `x > 0`, or "x and y are positive integers"). Don't count the equations you can *see*; count the *independent* pieces of information.

**Example (three unknowns, hard).** Given `x + y + z = 6`, `x + 2y + 3z = 14`, and `2x + 3y + 4z = 20`, can you find x, y, z? Add the first two: that's information; now check the third. Notice `2x + 3y + 4z` equals `(x + y + z) + (x + 2y + 3z) = 6 + 14 = 20`. The third equation is exactly the sum of the first two — it carries no new information. So you really have only **two** independent equations in three unknowns: infinitely many solutions. Three equations are visible, but one is redundant, so the values can't be pinned down — the skill being tested is recognizing the redundancy, not solving.

**Strategy spotlight — estimation and clean numbers.** When a system's answer choices are spread far apart, you don't always need exact values. If you've reduced to `−10m = −30`, you know `m = 3` immediately, but even before finishing, if choices were 1, 3, 9, 27, the sign and rough magnitude often eliminate options. Pair this with backsolving: plug a choice, see if revenue/total lands near the target, and let the gaps between choices do your filtering.

> **Self-explanation prompt.** In one sentence, explain *why* two equations in two unknowns can still fail to determine a unique solution. If you can say "because if one equation is a multiple of the other they're the same line, so they share infinitely many solutions instead of one," you've understood the linear-dependence trap at its root rather than memorizing a rule.

**Procedure to memorize — solving and judging a 2×2 system:**

1. **Read the target.** Does the question want x, y, or a combination like `x + y`? Aim for exactly that.
2. **Pick the technique.** A variable already isolated or with coefficient 1 → substitution. Coefficients that match or oppose → elimination. If neither, scale an equation to create a matched pair.
3. **Execute one technique cleanly.** Substitute fully (distribute every term) or add/subtract aligned equations. Solve the single remaining unknown.
4. **Back-substitute** to get the other unknown, or combine equations directly if only a combination is wanted.
5. **Check independence before trusting a system.** Confirm `ae − bd ≠ 0`. If it's 0, the system can't give a unique pair — but re-check what the question asks: a single dependent equation may still fix a requested combination.
6. **Verify.** Plug both values back into both original equations. Ten seconds of checking beats two minutes of rework.

**Trap to watch.** Three unknowns generally need three independent equations — but the GMAT can give you three equations where two combine into the third, or give you a constraint that isn't obviously an equation (such as `x > 0` or "all variables are positive integers"). Count *independent* equations, not visible ones, and treat inequalities and integer constraints as potential extra information that can collapse "infinitely many" down to a single answer. Conversely, never assume "more equations than unknowns" guarantees an answer — redundancy is invisible until you test for it.

**Common mistakes.**

- **Assuming two equations always solve.** Treating two equations that are secretly the same line as if they pinned down a unique answer. Always run `ae − bd ≠ 0` first.
- **Missing a one-equation shortcut.** The mirror image: when the question asks for a *combination*, a single equation can already fix it — you don't need to solve the whole system. Re-read the target before solving.
- **Sign errors in elimination.** When you *subtract* equations, distribute the minus sign across every term, including the constant. `(x − y) − (x − 3y)` is `2y`, not `−2y` or `4y`.
- **Forgetting to distribute in substitution.** `3(17 − 4m)` is `51 − 12m`, not `51 − 4m`. A dropped factor wrecks the whole solve.
- **Answering the wrong quantity.** Solving for m when the question wanted s, or finding x and y separately when it only wanted `x + y`. Re-read the target before bubbling.
- **Counting visible equations instead of independent ones.** Three equations can encode only two facts; an inequality can encode a real constraint. Audit for redundancy and hidden information.

**Recap.** Two clean techniques — substitution when a variable isolates cheaply, elimination when coefficients align (scale them if they don't) — handle every routine system. Read the target first so you solve for exactly what's asked, lean on the symmetric-system shortcut when coefficients are swapped, and reach for backsolving from the middle choice when the choices are concrete numbers. The one indispensable safeguard is the independence check: two equations in two unknowns usually pin down a unique answer *unless* one is a multiple of the other, so verify `ae − bd ≠ 0` before trusting that a system pins down a unique answer — and remember the flip side, where a single equation can still fix a requested combination outright. With three unknowns, count independent equations, not visible ones. Run those habits every time and the systems on this test become mechanical.

## @the-algebra-blueprint

The two sections above taught the *mechanics* — the four equality-preserving moves, substitution, elimination, the dependence check. This section is the *overlay*: a fixed order you run the mechanics in so the same messy equation never costs you a different mistake each time. The point of a blueprint is not new math; it's removing the small decisions ("do I clear fractions now or distribute first?") that drain attention and let a sign slip through. Run the steps in one direction every time and the manipulation becomes automatic, freeing your working memory for the one thing the test actually varies: what the question asks for.

**Mental model.** Think of every equation as something to be *pressed flat into one clean line* before you solve. Messy input arrives layered — fractions on top, parentheses inside, the same variable scattered on both sides. The blueprint flattens those layers in a set order so nothing fights you: **(1) clear fractions** by multiplying through by the LCD (covered in the first section — scale every term); **(2) distribute** to kill parentheses; **(3) combine like terms** on each side; **(4) move the variable terms to one side, constants to the other**; **(5) factor out the common coefficient** when the variable terms share one; **(6) divide to finish.** Same order, every equation. The flattening metaphor matters because each step removes one *kind* of clutter, and removing them out of order (distributing before you've cleared fractions, say) just creates more clutter to clean up later.

Two of those steps deserve a flag because they hide the most errors. **Factoring out a common term** is the one the first section barely touches: when your variable terms are something like `6x + 9x` or `4(x) + 4(3)`, pull the shared factor out *before* you divide — `6x + 9 = 0` is cleaner read as `3(2x + 3) = 0`, and `8x + 12 = 4y` collapses to `4(2x + 3) = 4y`, then `2x + 3 = y` in one stroke. Factoring is just division done early and visibly, and it routinely turns ugly coefficients into small integers. **Distributing** is its mirror — when a group is multiplied by something, expand it across *every* term inside, signs included, before you try to gather anything.

**GMAT move 1 — solve for the combo.** The first section's "keep what you need" was about one equation; extend it to *systems*. When the question asks for an expression like `4x + 4y` or `m − n` rather than the variables one at a time, you can often add or subtract the *whole equations* and read the answer straight off — no need to solve for either variable. This is the single highest-leverage habit on systems problems, so before you pick substitution or elimination, ask: *is the target itself a combination I can build by stacking the equations?*

**GMAT move 2 — pick the cleaner tool, and check for a twin.** Elimination and substitution both work on any solvable system (the second section covered when each is natural); the strategic add is to let *the numbers* choose for you rather than defaulting to a favorite. Glance first: is a variable already isolated or sitting on a coefficient of 1? Substitute. Do coefficients match or oppose, or scale to a match in one multiply? Eliminate. And run the twin check — if one equation is just a multiple of the other, they are secretly the *same* equation and no technique will produce a unique pair (the dependence trap from the previous section). Spotting the twin *before* you grind saves you from solving a system that has no single answer.

**Worked example.** A workshop sells small kits for `p` dollars and large kits for `q` dollars. The records read `(2p + q)/3 = 12` and `2p + 5q = 60`. What is `p + q`?

- Flatten the first equation with the blueprint. Clear the fraction (multiply through by 3): `2p + q = 36`. It's already one clean line, nothing to distribute or combine.
- Now read the target before choosing a tool: I want `p + q`, a *combination* — GMAT move 1. Stack the two equations and look for the combo directly. Subtract the flattened first equation from the second: `(2p + 5q) − (2p + q) = 60 − 36`, which gives `4q = 24`, so `q = 6`.
- Back-substitute into `2p + q = 36`: `2p = 30`, so `p = 15`. Then `p + q = 21`.
- Notice the factoring habit would have shortened the middle step too: `4q = 24` is `4(q) = 4(6)`, so `q = 6` at a glance. Check against the *original* fraction equation: `(2·15 + 6)/3 = 36/3 = 12`. Correct, **`p + q = 21`**.

**Trap to watch.** The blueprint's danger zone is doing two steps as one. The most common version: clearing fractions *and* distributing in a single mental jump, so the LCD multiplies the fractioned terms but skips a bare constant, or a minus sign in front of a group fails to flip every term inside (`−(2p + q)` must become `−2p − q`, not `−2p + q`). Slow the hand at exactly the clear-fractions and distribute steps — write the multiplier in front of every term, and write the expanded group out fully — because those are where a flattened line silently goes wrong. The second trap is reaching for substitution or elimination on a pair of twins: if the coefficients of one equation are a constant multiple of the other's, stop and check what's being asked, because the system itself fixes no unique pair.

> **Self-explanation prompt.** In one sentence, why does running the manipulation steps in a *fixed* order make you more accurate, not just faster? If you can say "because a fixed routine removes the in-the-moment decisions where errors creep in, leaving attention for reading what the question actually wants," you've understood why the blueprint is a strategy and not just a checklist.
