---
slug: quant-13-linear-equations-systems
title: "Algebra: Linear Equations & Systems"
section: Quant
estimated_minutes: 8
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
      - algebra-q2
  - id: linear-equations-one-unknown
    type: reading
    title: "Linear equations in one unknown — isolate-the-variable discipline"
    check_question_ids:
      - algebra-q1
  - id: systems-of-equations
    type: reading
    title: "Systems of equations — substitution vs. elimination"
    check_question_ids:
      - algebra-q4
      - algebra-q15
problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - algebra-q3
      - algebra-q4
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

## @linear-equations-one-unknown

The single most important habit in algebra is "isolate the variable before you do anything else." Every one-unknown linear equation reduces to `x = something`. The work is mechanical; the errors come from doing it sloppily under time pressure.

**Mental model.** An equation is a balance scale. Whatever you do to one side, you must do to the other — the two sides stay equal. Solving means isolating the unknown by adding, subtracting, multiplying, or dividing **both sides** at once. Lose this discipline and your work breaks down within three steps.

**The four operations that preserve equality:**

1. Add the same thing to both sides.
2. Subtract the same thing from both sides.
3. Multiply both sides by the same non-zero thing.
4. Divide both sides by the same non-zero thing.

That's it. Every algebraic step reduces to one of these four. If you find yourself doing anything else ("I'll just move this over and forget the sign change"), you're introducing errors.

**Example.** If `3x + 7 = 22`, find `6x + 5`.

- Subtract 7: `3x = 15`.
- Divide by 3: `x = 5`.
- Compute: `6(5) + 5 = 35`.

**The faster path: don't always solve for x.** Notice `6x + 5 = 2(3x) + 5 = 2(15) + 5 = 35`. You only needed `3x`, not `x`. The GMAT rewards students who read what the problem actually asks for — sometimes the target expression is a rearrangement of the given one, and you can skip solving for the individual variable.

**The "keep what you need" heuristic.** Before solving, glance at what the question wants. If it wants `2x − 1` and your equation gives `2x = 7`, just write `2x − 1 = 6`. No need to find x.

**Clearing fractions and decimals.** If an equation has fractions, multiply both sides by the LCD to clear them. `x/3 + x/4 = 7` → multiply by 12 → `4x + 3x = 84` → `7x = 84` → `x = 12`. Decimal coefficients clear the same way: multiply both sides by a power of 10.

**Checking by substitution.** The cheapest insurance on any algebra problem: plug your answer back into the original equation. If it doesn't satisfy, you made an arithmetic mistake. Ten seconds of checking beats two minutes of confused rework.

**Pro tip.** Build the substitution check into muscle memory: every time you solve an algebra problem, the last thing you do before bubbling is verify. On the GMAT, an extra 5 seconds per algebra question buys you ~30% fewer arithmetic-slip misses — by far the cheapest accuracy gain available.

**Trap to watch.** When you multiply or divide both sides by an expression containing a variable, you may be multiplying by zero or flipping a sign. If `x − 2` could be negative, multiplying an inequality by `x − 2` flips the inequality sign. Keep track of what's in your multiplier.

> **Self-explanation prompt.** In one sentence, why is "isolate the variable" good discipline? If you can say "because once the variable is alone, every remaining step is arithmetic," you've internalized why this is the only reliable path through multi-step algebra.

## @systems-of-equations

A system of equations has two or more equations and two or more unknowns. On the GMAT, you'll almost always see two equations in two unknowns. Two techniques cover everything.

**Substitution — use when one variable is cheap to isolate.** If one equation gives you `y = 2x + 3`, substitute `2x + 3` for y in the other equation. Solve for x, back-substitute for y.

**Elimination — use when coefficients line up for addition or subtraction.** If one equation has `+2y` and the other has `−2y`, adding them kills y.

**Example (elimination).** `x + y = 12` and `x − y = 4`. Add: `2x = 16`, so `x = 8`. Subtract: `2y = 8`, so `y = 4`. Two lines, no substitution needed.

**Example (substitution).** At a bakery, `2m + 3s = 21` and `4m + s = 17`. From equation 2: `s = 17 − 4m`. Substitute into equation 1: `2m + 3(17 − 4m) = 21` → `2m + 51 − 12m = 21` → `−10m = −30` → `m = 3`. Then `s = 17 − 12 = 5`.

**Elimination with coefficient matching.** If coefficients don't line up, scale one or both equations first. `3x + 2y = 16` and `5x − 2y = 16` line up on y — add them to get `8x = 32`, so `x = 4`. Back-substitute: `3(4) + 2y = 16` → `y = 2`. Then `x + y = 6`.

**The linear-dependence trap.** Two equations in two unknowns don't always pin down the answer. If one equation is a multiple of the other, they describe the same line and the system has infinitely many solutions.

**Example (Data Sufficiency).** What is x? (1) `2x + 3y = 14`. (2) `4x + 6y = 28`.

Statement (2) is exactly twice statement (1) — same equation, no new information. The two statements together still form one equation in two unknowns. Answer: E (insufficient together).

**Quick test for independence:** two linear equations `ax + by = c` and `dx + ey = f` are independent if and only if `ae − bd ≠ 0`. Check this at a glance on Data Sufficiency.

**Takeaway.** Two equations in two unknowns *usually* pin down a unique answer — unless one is a linear multiple of the other. Always run the independence check (`ae − bd ≠ 0`) before claiming sufficiency on Data Sufficiency. The C-trap on this pattern catches a huge fraction of mid-band students.

**Trap to watch.** Three unknowns generally need three independent equations. But the GMAT can give you three equations where two are redundant, or give you information in a form that's not obviously an equation (a constraint like `x > 0`). Count *independent* equations, not visible ones.
