---
slug: quant-11-exponent-rules
title: "Exponents: The Rules & Scientific Notation"
section: Quant
estimated_minutes: 8
prerequisites:
  - quant-10-primes-remainders
summary: |
  The same-base reflex: the three exponent rules, the sign-flip of negative and zero exponents, how signs behave, and scientific notation.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions before the lesson. Miss them freely; attempting first sharpens the read.
    pretest_question_ids:
      - exponents-roots-q1
      - exponents-roots-q2
  - id: integer-exponents-rules
    type: reading
    title: "Integer exponents — the three rules you multiply by"
    check_question_ids:
      - exponents-roots-q1
      - exponents-roots-q11
  - id: negative-and-zero-exponents
    type: reading
    title: "Negative and zero exponents — the sign-flip trap"
    check_question_ids:
      - exponents-roots-q5
  - id: even-odd-exponent-signs
    type: reading
    title: "Even and odd exponents — how sign behaves"
    check_question_ids:
      - exponents-roots-q25
  - id: scientific-notation
    type: reading
    title: "Scientific notation — treat the pieces separately"
    check_question_ids:
      - exponents-roots-q3
      - exponents-roots-q9
problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - exponents-roots-q3
      - exponents-roots-q4
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - exponents-roots-q5
      - exponents-roots-q6
---

## @integer-exponents-rules

Three rules do 80% of the work on every exponent question you'll see. Learn them so well you apply them without thinking. On test day you should not be *deciding* whether to add or multiply exponents — that decision should already be made, burned in, automatic, so that your scarce thinking time goes to the parts of the problem that are actually hard. Exponents show up everywhere on GMAT Focus Quant: in pure algebra, inside word problems about growth, hidden in number-properties questions, and as the engine behind scientific notation. The investment you make memorizing three rules here pays interest across the entire section.

**Mental model.** Exponents are shorthand for repeated multiplication; roots are the inverse. Every "rule" — x^a · x^b = x^(a+b), (x^a)^b = x^(ab), sqrt(ab) = sqrt(a) · sqrt(b) — falls out of that single fact. Memorize the rules if you must, but if you understand the multiplication picture, you can re-derive any rule in 5 seconds when memory fails under pressure. Concretely, x^3 just *means* x·x·x. So x^3 · x^2 is (x·x·x)·(x·x) = five x's multiplied = x^5. You didn't memorize "add the exponents"; you *counted* the factors. That counting picture is your safety net all through this chapter.

**1. Product of same base: x^a · x^b = x^(a+b).** Multiply same-base powers by *adding* exponents. The base does not change.

**2. Quotient of same base: x^a / x^b = x^(a-b).** Subtract. (Same counting logic: dividing cancels factors, so you take away exponents instead of adding them.)

**3. Power of a power: (x^a)^b = x^(ab).** Multiply the exponents. Here (x^2)^3 means x^2 multiplied by itself three times — (x^2)(x^2)(x^2) — which is six x's, so x^6. Three groups of two factors = 3 × 2 factors.

Notice the trap built into rules 1 and 3: both involve "combining" two exponents, but one *adds* and one *multiplies*. x^a · x^b adds; (x^a)^b multiplies. The difference is the structure of the expression — are you multiplying two separate powers (add), or raising one power to another power (multiply)? Read the expression's shape before you reach for a rule.

Here is the whole toolkit in one place so you can drill it cold:

| Situation | What you see | Rule | What you do |
|---|---|---|---|
| Multiply, same base | x^a · x^b | Product | Add exponents → x^(a+b) |
| Divide, same base | x^a / x^b | Quotient | Subtract exponents → x^(a-b) |
| Power of a power | (x^a)^b | Power | Multiply exponents → x^(ab) |
| Multiply, same exponent | x^a · y^a | Same-exponent | Combine bases → (xy)^a |
| Add powers | x^a + x^b | (no merge rule) | Factor out the smaller power |

**Worked example.** Simplify (2^3 · 2^5) / 2^4.

- Numerator: 2^3 · 2^5 = 2^8 (product rule — same base, add exponents).
- Now 2^8 / 2^4 = 2^4 (quotient rule — same base, subtract exponents).
- 2^4 = 16.

That's the entire workflow. The GMAT will never give you a problem where you should compute 2^8 = 256 before dividing by 2^4 = 16. Always collapse exponents first, evaluate last. Collapsing-first keeps the numbers tiny and keeps you off the calculator (which the Quant section doesn't give you anyway).

> **Recall check.** x^a · x^b and (x^a)^b both combine two exponents — which one adds and which one multiplies? (x^a · x^b **adds** → x^(a+b); (x^a)^b **multiplies** → x^(ab).)

**Same-base reflex.** When you see exponent expressions that *look* ugly, the first thing to try is rewriting everything to a common base. If you see 4^x and 8^y in the same equation, rewrite both using base 2: 4^x = 2^(2x) and 8^y = 2^(3y). Then equate exponents. This single reflex unlocks a huge share of medium and hard exponent problems, because the GMAT loves to *hide* a shared base behind different-looking numbers. Train yourself to ask, on every exponent problem: "Are these bases secretly powers of the same number?" The usual suspects are powers of 2 (2, 4, 8, 16, 32, 64), powers of 3 (3, 9, 27, 81), and powers of 5 (5, 25, 125). Keep that short table of small powers in your head — most disguises on the test are built from exactly these.

**Worked example.** If 9^x = 27, find x.

Rewrite both sides with base 3: 9 = 3^2 and 27 = 3^3. So (3^2)^x = 3^3, which gives 3^(2x) = 3^3 (power of a power — multiply the exponents). Exponents must match: 2x = 3, so x = 3/2.

**Worked example (harder — same-base reflex on both sides).** If 4^(x+1) = 8^(x-1), find x.

Neither base is a power of the other, but both are powers of 2. Rewrite: 4 = 2^2 and 8 = 2^3.

- Left side: 4^(x+1) = (2^2)^(x+1) = 2^(2(x+1)) = 2^(2x+2).
- Right side: 8^(x-1) = (2^3)^(x-1) = 2^(3(x-1)) = 2^(3x-3).
- Same base, so set exponents equal: 2x + 2 = 3x - 3.
- Solve: 2 + 3 = 3x - 2x, so x = 5.

Quick check: 4^6 = 4096 and 8^4 = 4096. They match, so x = 5 is right. The whole problem dissolved the moment we forced a common base — that is the reflex paying off.

> **Recall check.** You see 25^n and 125^n in one equation. What common base should you reach for, and how do you rewrite each? (Base **5**: 25^n = 5^(2n) and 125^n = 5^(3n).)

**Same-exponent shortcut (less common but useful).** x^a · y^a = (xy)^a and (x/y)^a = x^a / y^a. Different bases, *same* exponent? The exponent distributes across multiplication and division. (It does **not** distribute across addition: (x + y)^a is *not* x^a + y^a — more on that trap below.)

**Worked example (same-exponent shortcut).** Simplify (6^10) / (2^10).

Same exponent on top and bottom, so combine the bases under that one exponent: (6/2)^10 = 3^10. No need to ever expand 6^10 or 2^10 — the matching exponents let you shrink the bases first. Recognizing "same exponent" is just as valuable as recognizing "same base." A second flavor of this: 15^4 / 5^4 = (15/5)^4 = 3^4 = 81. The exponent rides along while you simplify the bases.

**Worked example (strategy: backsolving).** If 2^n · 2^n · 2^n = 8^4, what is n? Answer choices: (A) 2 (B) 3 (C) 4 (D) 6 (E) 8.

You can do this cleanly with the rules: the left side is 2^(3n) and 8^4 = (2^3)^4 = 2^12. So 3n = 12, n = 4 → answer (C). But suppose under pressure you blank on whether to add or multiply. **Backsolve** instead: plug the middle choice, (C) n = 4. Left side: 2^4 · 2^4 · 2^4. Each 2^4 = 16, so 16 · 16 · 16 = 4096. Right side: 8^4 = 4096. Match — answer (C). Backsolving turns an algebra problem into pure arithmetic you can't get wrong, and starting from the middle choice means even a miss tells you which direction to move: if (C) had come out too small, you'd jump up to (D) or (E) next; too big, down to (A) or (B). Name the tactic so you remember to use it: when the answers are clean numbers and the algebra is shaky, **backsolve from (C)**.

**Worked example (hard — combining all three rules plus estimation).** If 3^(2k) · 9^(k-1) = 3^10, what is k?

The mixed bases scream "force a common base." Rewrite 9 = 3^2, so 9^(k-1) = (3^2)^(k-1) = 3^(2k-2) (power of a power — multiply). Now the left side is 3^(2k) · 3^(2k-2) = 3^((2k) + (2k-2)) = 3^(4k-2) (product rule — add). Set exponents equal: 4k - 2 = 10, so 4k = 12, k = 3. Sanity-estimate before committing: with k = 3 the left side is 3^6 · 9^2 = 729 · 81, which is in the tens of thousands; 3^10 = 59049, same ballpark — good. Notice the choreography: rule 3 to unify the base, rule 1 to collapse, then equate exponents. That three-step dance handles most hard exponent equations on the test.

**Trap to watch.** Students who half-learn these rules multiply the *bases* when they should keep them constant: 2^3 · 2^5 is NOT 4^8 and it's NOT 2^15. The base stays, the exponents combine by *addition*. Repeat that sentence to yourself until it feels automatic: **base stays, exponents add.** The phantom "4^8" comes from multiplying the bases (2×2) *and* the exponents (3+5 misread as combine-everything) — it is doubly wrong and it is a favorite GMAT distractor.

**Trap to watch (the addition mirage).** None of these rules apply to *addition* of powers. 2^3 + 2^5 is not 2^8 and not 2^15 — there is no shortcut; it's just 8 + 32 = 40. The product and quotient rules require *multiplication or division* of the powers. The most you can do with a sum is **factor**: 2^3 + 2^5 = 2^3(1 + 2^2) = 2^3 · 5 = 40. Factoring out the smallest power is the only legitimate move on a sum of powers, and it's a genuine hard-problem skill — but it is not "adding the exponents."

**Worked example (factoring a sum of powers).** Simplify 5^11 + 5^12 + 5^13, expressing it as a single power times a constant.

There is no rule to merge these — they are added. So factor out the smallest power, 5^11: 5^11(1 + 5 + 5^2) = 5^11(1 + 5 + 25) = 5^11 · 31. That's as simple as it gets, and on the GMAT the answer choices will be written in exactly that factored form (something like 31 · 5^11). If you'd tried to "add the exponents" you'd have produced nonsense. Factor, don't merge.

> **Recall check.** Is 3^4 + 3^4 equal to 3^8? If not, what is it? (No — the exponent rules don't touch addition. 3^4 + 3^4 = 2 · 3^4 = 2 · 81 = 162. You can factor a sum, but you can't merge the exponents.)

**Procedure to memorize — the same-base workflow.** When an exponent expression or equation lands in front of you, run these steps in order:

1. **Scan for a common base.** Are all the bases powers of one number (2, 3, 5, …)? If yes, rewrite every term over that base using rule 3, (x^a)^b = x^(ab).
2. **Collapse within each side.** Use rule 1 (multiply → add exponents) and rule 2 (divide → subtract exponents) to compress each side to a single power. Keep the base fixed.
3. **If it's an equation, set the exponents equal.** Once both sides are one power of the same base, the bases match, so the *exponents* must match. Solve that simpler equation.
4. **If it's an expression, evaluate last.** Collapse to the smallest power, then compute the actual number only at the very end.
5. **Sanity-check.** Plug your answer back, or estimate the magnitude, to catch an add-vs-multiply slip.

**Self-explanation prompt.** Before the check question, write down each of the three rules from memory, then explain *why* the product rule adds while the power-of-a-power rule multiplies — using the "count the factors" picture, not just the formula. If you can say "x^2 · x^3 lays out five separate x's so I add, but (x^2)^3 stacks three groups of two so I multiply," you understand the rules rather than having memorized them. That understanding is what lets you re-derive a rule in five seconds when nerves wipe your memory on test day.

**Common mistakes.**
- **Multiplying the bases.** 2^3 · 2^5 → "4^8." No. Base stays 2; exponents add to give 2^8.
- **Adding when you should multiply (or vice versa).** (x^a)^b is x^(ab), not x^(a+b). Two separate powers multiplied → add; one power raised to a power → multiply.
- **Treating sums like products.** 2^3 + 2^5 ≠ 2^8. Exponent rules apply only to multiplication and division of powers. Factor a sum; never merge its exponents.
- **Distributing an exponent over a sum.** (x + y)^2 ≠ x^2 + y^2. It expands to x^2 + 2xy + y^2. The exponent distributes over × and ÷ only.
- **Evaluating too early.** Computing 2^8 = 256 before dividing wastes time and invites arithmetic errors. Collapse exponents first, evaluate last.
- **Botching the common base.** Rewriting 8 as 2^2 instead of 2^3, or 27 as 3^2 instead of 3^3. Recompute the small powers (8 = 2·2·2) rather than trusting a rushed guess.

**Recap.** Three rules carry the section: same-base multiplication *adds* exponents, same-base division *subtracts* them, and a power of a power *multiplies* them — all of it falling straight out of "exponents just count repeated factors." Your two reflexes are (1) force a **common base** when bases differ but are secretly powers of the same number, and (2) recognize a **common exponent** so you can combine bases instead. Collapse first, evaluate last, never touch the rules on a *sum* (factor it instead), and when the answers are clean numbers and your algebra feels shaky, **backsolve from (C)**. Master this and the rest of the chapter — negative exponents, sign behavior, scientific notation — is just this same machinery pointed at new cases.

## @negative-and-zero-exponents

Two special cases trip up more students than any real "hard" exponent content. Master these and you defuse a whole category of answer-choice traps — the test writers know that "zero" and "negative" feel counterintuitive, so they lean on them constantly. The good news: there are exactly two new rules to learn here, plus one mechanical "flip" move. Everything else is the careful arithmetic you already own. The entire difficulty lives in the gap between *knowing* the rule and *executing* it under time pressure without a sign slip.

**Zero exponent.** x^0 = 1 for any nonzero x. Not 0. Not x. Just 1. This falls out of the quotient rule: x^a / x^a = x^(a−a) = x^0, and anything divided by itself is 1. So x^0 *has* to be 1 to keep the rules consistent. The one excluded case is 0^0, which is undefined — but the GMAT essentially never makes you confront it, so the working rule is "anything (nonzero) to the zero is 1." This holds no matter how ugly the base looks: (7y^3 − 2)^0 = 1, and (−418)^0 = 1. If the whole quantity sits under a zero exponent, you can erase it and write 1 without doing any of the inner work.

**Negative exponent.** x^(−n) = 1/x^n. A negative exponent takes the **reciprocal**. It does NOT make the value negative. Read that twice, because the single most common error in this entire chapter is treating x^(−2) as if it were a negative number. The exponent's sign controls *reciprocal-or-not*, never *positive-or-negative*. Think of the sign of the exponent as a switch labeled "which floor" — up in the numerator or down in the denominator — and the sign of the *base* as a separate switch labeled "plus or minus." They are wired to different things and never cross.

**Worked example.** 3^(−2) = 1/3^2 = 1/9. Positive, not −9 and not −1/9. The base 3 is positive, so the result is positive; the negative exponent only flipped it to a fraction.

**Why this works.** Follow the pattern: 2^3 = 8, 2^2 = 4, 2^1 = 2, 2^0 = 1, 2^(−1) = 1/2, 2^(−2) = 1/4. Each step down divides by 2. The pattern forces 2^0 = 1 and 2^(−1) = 1/2 — the definitions aren't arbitrary; they're the only values that keep the rules consistent. If 2^0 were 0, the ladder would break: you'd go 2, then suddenly 0, then what? The smooth halving is the whole point. Laying it out as a table makes the symmetry impossible to miss:

| Exponent n | 3 | 2 | 1 | 0 | −1 | −2 | −3 |
|---|---|---|---|---|---|---|---|
| 2^n | 8 | 4 | 2 | 1 | 1/2 | 1/4 | 1/8 |

Every value is exactly half the one to its left. Zero isn't a special case that breaks the rule; it's the rule's natural midpoint, and the negatives are just the reciprocals of the positives mirrored across it.

> **Recall check.** What is 5^0 + 5^(−1)? (Answer: 1 + 1/5 = 6/5. The 5^0 is 1, and 5^(−1) is the reciprocal 1/5 — both positive.)

**Division-with-negatives trick.** A negative exponent in a fraction **flips across the fraction bar** and becomes positive. So 1/x^(−2) = x^2, and x^4/y^(−3) = x^4·y^3. This is worth internalizing — the "flip" move saves you from having to rewrite everything as 1/something. Whenever you see a negative exponent stuck in the denominator, mentally hoist it to the numerator (sign now positive); whenever it's in the numerator, drop it to the denominator. The factor just changes floors and changes sign. Crucially, this is a *per-factor* move: each base flips on its own, and a factor with a positive exponent stays exactly where it is. You never flip the whole fraction — only the offending factor.

**Worked example.** Simplify (a^2 · b^(−3)) / (a^(−1) · b^2).

Subtract exponents across the fraction bar: a-exponent is 2 − (−1) = 3, b-exponent is −3 − 2 = −5. Result: a^3·b^(−5), which equals a^3/b^5.

The most common mistake here is sign-handling. Slow down for two seconds on the subtraction step. 2 − (−1) is 3, not 1. When you're subtracting a negative, you're adding a positive. The b-exponent is −3 − 2 = −5, and that negative result means b lives in the denominator as b^5.

**Worked example (plugging in numbers — name the tactic).** The expression (2^(−3) · 4) / 2^(−1) equals which of the following? (A) 1 (B) 2 (C) 4 (D) 8 (E) 16

You can do this with rules, but watch how **plugging in a concrete value** turns abstract exponent juggling into plain arithmetic. Evaluate each piece numerically: 2^(−3) = 1/8, so 2^(−3) · 4 = 4/8 = 1/2. Then divide by 2^(−1) = 1/2. Dividing by 1/2 means multiplying by 2: (1/2) · 2 = 1. The answer is **(A)**. Notice the trap built into the choices — if you mishandled the negative exponent in the denominator and *multiplied* by 1/2 instead of dividing, you'd get 1/4 and might grab a related distractor. The arithmetic route makes the sign behavior concrete and hard to fumble. (Sanity check with rules: 2^(−3) · 2^2 = 2^(−1), then divided by 2^(−1) gives 2^(−1−(−1)) = 2^0 = 1. Same answer, which is exactly the confirmation you want.)

> **Recall check.** Why does 1/x^(−2) equal x^2 rather than 1/x^2? (Answer: the negative exponent flips the factor across the fraction bar and turns positive — x^(−2) in the denominator becomes x^2 in the numerator.)

**Worked example (harder — combining zero, negative, and the flip).** Simplify (3x^0·y^(−2) · 2x^3) / (6x^(−1)·y^(−4)).

Take it in stages so nothing gets dropped:
- Coefficients: (3 · 2) / 6 = 6/6 = 1.
- The x^0 vanishes — it's just 1 — so the numerator's x part is x^3. Across the bar: x^3 / x^(−1) = x^(3−(−1)) = x^4.
- y part: y^(−2) / y^(−4) = y^(−2−(−4)) = y^2.

Combine: 1 · x^4 · y^2 = x^4·y^2. No negative exponents remain, which is exactly what a fully simplified answer should look like. The x^0 trying to bait you into writing an extra factor, and the two subtract-a-negative steps, are the whole difficulty here.

**Worked example (backsolving a "must equal" trap).** If 2^x · 2^(−3) = 1/2, what is x? (A) −3 (B) −1 (C) 1 (D) 2 (E) 4

Here **backsolving** — testing answer choices against the equation — is faster than fighting the algebra, and it's self-checking. The left side is 2^(x−3) and the right side is 2^(−1), so really x − 3 = −1, but suppose you don't trust that. Test (D) x = 2: 2^2 · 2^(−3) = 2^(−1) = 1/2. That matches, so the answer is **(D)**. Notice how the wrong choices are engineered: (B) x = −1 tempts anyone who read "1/2" as "the exponent is −1" and forgot to undo the −3; (A) x = −3 baits a sign flip on that term. Backsolving sidesteps both because you're checking the *actual equation*, not your memory of which sign goes where.

**Trap to watch.** −3^2 and (−3)^2 are different. −3^2 = −(3^2) = −9 because exponentiation binds tighter than the negative sign. (−3)^2 = 9 because the parentheses force the negative inside. GMAT answer choices often exploit this to separate students who actually read the expression from those who skim it. The rule of thumb: a negative sign only goes through the exponent when it sits **inside parentheses** with the base.

**A second trap — coefficients vs. exponents.** In 3x^(−2), only the x is raised to −2; the 3 is a plain multiplier. So 3x^(−2) = 3/x^2, not 1/(3x^2) and not 3/x. Students sometimes drag the coefficient under the bar along with the variable. The exponent attaches to its base only — the nearest factor it's written on — never to a neighboring number. Contrast this with (3x)^(−2), where the parentheses *do* pull the 3 in: (3x)^(−2) = 1/(3x)^2 = 1/(9x^2). One pair of parentheses changes the answer by a factor of 9.

**Procedure to memorize (handling any negative/zero exponent expression):**
1. **Replace every x^0 with 1** and delete it from the expression.
2. **Flip each negative-exponent factor across the fraction bar**, changing its exponent's sign to positive (denominator → numerator, or numerator → denominator). Flip factors one at a time — never the whole fraction.
3. **Combine like bases** using the product/quotient rules (add exponents when multiplying, subtract when dividing) — and on every subtraction, rewrite "minus a negative" as "plus" before computing.
4. **Multiply or divide the numerical coefficients separately** from the variables.
5. **Confirm no negative exponents remain.** If any do, you missed a flip — go back to step 2.

**Common mistakes.**
- Writing x^(−2) = −x^2 (sign confusion). It's 1/x^2 — positive.
- Saying x^0 = 0 or x^0 = x. It's 1.
- Botching "minus a negative": 2 − (−1) is 3, not 1.
- Reading −3^2 as (−3)^2. Without parentheses the base is just 3, and the answer is −9.
- Letting a coefficient get pulled under the bar: 3x^(−2) = 3/x^2, not 1/(3x^2).
- Flipping the entire fraction instead of the single negative-exponent factor.

> **Recall check.** Evaluate −2^(−2) and (−2)^(−2). (Answer: −2^(−2) = −(1/2^2) = −1/4 — the negative is outside, so flip then negate. (−2)^(−2) = 1/(−2)^2 = 1/4 — the parentheses put the negative inside, the even power makes it positive, then the negative exponent flips it. Two different answers from two tiny notation differences.)

> **Self-explanation prompt.** Cover this section and write down: why does x^(−2) equal 1/x^2 instead of −x^2? If you can trace it through the quotient rule — x^2 / x^4 = x^(2−4) = x^(−2), and that same ratio is clearly 1/x^2 — you understand it rather than having memorized it. That distinction matters when a novel-looking problem hits you on test day.

**Closing recap.** Zero exponent gives 1, always (for nonzero bases). A negative exponent takes a reciprocal — it flips a factor across the fraction bar and turns its sign positive — and it never makes the value itself negative. The sign of the *result* comes from the base and from parentheses, not from the exponent. When you simplify, kill the x^0 terms, flip the negatives one factor at a time, combine like bases with careful sign arithmetic, handle coefficients on their own, and check that nothing negative is left in the exponents. When a question lets you, plug in a number or backsolve to turn the sign rules into concrete arithmetic that checks itself. Get those moves automatic and the test's favorite exponent traps stop working on you.

## @even-odd-exponent-signs

Sign behavior with exponents follows one simple rule — but the GMAT uses it in subtle ways. This whole section is really about one question: **after I raise something to a power, can I still tell whether it was positive or negative?** Sometimes yes, sometimes no — and knowing which is which is the difference between a clean answer and a careless wrong one. The machinery hides inside expressions like (−1)^n or −x^4, where the test is betting you'll compute fast and attach the wrong sign. Slow down on the sign; speed up on the magnitude. That order is the entire skill.

**Even exponent → always non-negative.** (−3)^2 = 9, not −9. Raising any real number to an even power erases the sign. The pairs cancel: (−3)^2 = (−3)(−3) = 9. Concretely: (−a)^even = a^even. The intuition: an even exponent means the negative signs come in matched pairs, and every pair of negatives multiplies to a positive. Two negatives, four negatives, six negatives — they always pair off with none left over. The only way an even power equals zero is if the base itself is zero; otherwise the result is strictly positive. So "even power" really means "non-negative," and for a nonzero base it means "positive."

**Odd exponent → preserves the sign.** (−3)^3 = −27. The result stays negative. (−a)^odd = −(a^odd). Here the negatives also pair off, but there's always exactly one left over — the unpaired negative that keeps the result negative. (−3)^3 = (−3)(−3)(−3) = (+9)(−3) = −27. The first two negatives cancel; the third has no partner. This is why an odd power behaves like a faithful messenger: whatever sign you feed in, the same sign comes out the other side.

**The parenthesis test — where does the negative live?**

- **(−3)^2 = 9.** The base is −3. The negative is inside the exponent operation and goes through it twice. Positive result.
- **−(3^2) = −9.** You compute 3^2 = 9, then negate afterward. The negative never went through the exponent.

On the GMAT, these two expressions appear in the same problem to create wrong-answer traps. Read the expression before computing. The rule of thumb: **a negative sign only goes "through" the exponent if it's wrapped in parentheses with the base.** No parentheses means the exponent acts first and the negative is applied last. Think of it as order of operations: exponents bind tighter than a leading minus sign, so −2^4 is really −(2^4). The parentheses are the only thing that can drag the minus inside.

> **Recall check.** Without computing the full value: is (−7)^10 positive or negative? Is (−7)^11 positive or negative? (Even power → positive; odd power → negative.)

**Worked example.** What is (−2)^5?

The base is −2, the exponent is 5 (odd). Odd exponents preserve the sign: (−2)^5 = −32. To confirm the magnitude, 2^5 = 32, and the lone unpaired negative makes it −32.

**Worked example.** What is −2^5?

No parentheses — the negative sits outside. Compute 2^5 = 32 first, then negate: −32. Same answer here, but this is coincidental for odd exponents. For even exponents it diverges: (−2)^4 = 16 but −2^4 = −16. Burn that contrast in: for **odd** exponents the two forms happen to agree, but for **even** exponents they split, and that split is exactly where the GMAT plants its trap.

**Worked example (read carefully, then compute).** Evaluate the expression (−1)^4 + (−1)^5 − (−1)^6.

Take each term with the parenthesis test. (−1)^4: even power, so +1. (−1)^5: odd power, so −1. (−1)^6: even power, so +1. Now substitute: (+1) + (−1) − (+1) = 1 − 1 − 1 = −1. Notice the entire problem reduces to "is the exponent even or odd?" — you never need to multiply anything out. **Powers of −1 are pure sign generators**: (−1)^even = 1, (−1)^odd = −1. Memorizing that single fact turns a scary-looking expression into a parity count.

**Worked example (estimation-free parity, harder).** Simplify (−1)^100 − (−1)^99 + (−1)^50 − (−1)^51.

Don't reach for a calculator instinct — there is no big number to compute, only parity to read. 100 even → +1. 99 odd → −1. 50 even → +1. 51 odd → −1. Substitute, watching the subtraction signs: (+1) − (−1) + (+1) − (−1) = 1 + 1 + 1 + 1 = 4. The double-negative on the odd terms is the only place to slip. The named tactic here is **reduce to parity first, arithmetic second**: convert every power to ±1 before you touch the plus and minus signs between terms.

> **Self-explanation prompt.** Without looking: (a) What is (−5)^4? (b) What is −5^4? (c) Why are they different? Then: if you're told x^6 = 64, can you determine the sign of x? If your answer is "no, because an even exponent loses sign information," you understand the trap. If you said yes, re-read the section above — the even-exponent erasure is the entire point. (Answers: (a) +625; (b) −625; (c) the parentheses pull the minus through the even power in (a), but in (b) the exponent acts first and the minus is applied last.)

**The trap: even exponents hide sign.** If a problem tells you x^2 = 9, you cannot conclude x = 3 — you know x = 3 or x = −3. Even exponents destroy sign information, so you cannot recover it from the result alone. A fact of the form "x^2 = k" almost never pins down x by itself when the sign matters; you must carry both roots. The same logic applies to x^4 = 16 (x = ±2), x^6 = 64 (x = ±2), and any even power: the equation hands you a magnitude but withholds the sign. The lone exception is x^even = 0, which pins x = 0 exactly — zero has no sign to hide.

**The shortcut: odd exponents reveal sign.** If you know x^5 > 0, you can conclude x > 0 — because an odd power preserves sign, a positive result demands a positive base. That single fact pins the sign cleanly. Symmetrically, x^5 < 0 forces x < 0, and x^3 = −8 forces x = −2 exactly (only one real cube root, sign included). Odd powers are **invertible with sign intact**; even powers are not.

The table below is the whole section compressed into a decision grid. When a statement gives you a power equal to (or compared with) a constant, find the row and read off whether the sign is recoverable.

| You're told | Exponent | Sign recoverable? | Conclusion |
|---|---|---|---|
| x^2 = 9 | even | No | x = 3 or x = −3 (two candidates if sign matters) |
| x^4 = 16 | even | No | x = 2 or x = −2 |
| x^6 = 0 | even | Yes | x = 0 (only case where even pins it) |
| x^3 = 27 | odd | Yes | x = 3 uniquely |
| x^5 > 0 | odd | Yes | x > 0 |
| x^5 < 0 | odd | Yes | x < 0 |

> **Recall check.** A problem tells you n^4 = 81. Can you determine n? What about n^3 = 27? (No for the first — n = 3 or n = −3; yes for the second — n = 3 uniquely, because odd powers keep the sign.)

**Worked example (even hides sign, odd reveals it — plugging in numbers).** If x^2 = 49 and x^3 < 0, what is the value of x?

From x^2 = 49, **plugging in numbers** shows the ambiguity directly: x = 7 works and x = −7 works too, so the even power alone leaves two candidates. Now bring in x^3 < 0: an odd power preserves sign, so a negative cube means a negative base — x must be negative. That eliminates +7 and leaves **x = −7**. The lesson, and the named tactic: when an even-power equation looks like it "solves" the problem, deliberately try one positive and one negative value to expose the hidden sign ambiguity, then use an odd-power fact (or any sign information) to break the tie.

**Worked example (hard — combining parity with inequalities, backsolving the logic).** If x is a nonzero number and x^5 and x^2 have opposite signs, what can you conclude about x?

Reason through parity. x^2 is an even power, so x^2 is **always positive** (x is nonzero). For x^5 to have the **opposite** sign from x^2, x^5 must be negative. x^5 is an odd power, so x^5 negative forces x negative. Conclusion: **x < 0.** You can confirm by **backsolving** with a candidate: try x = −2. Then x^2 = 4 (positive) and x^5 = −32 (negative) — opposite signs, condition satisfied. Try x = +2: x^2 = 4 and x^5 = 32, both positive — condition fails. So only negative x works, confirming the deduction. The strategic move: rather than juggle abstract sign rules, **pick a concrete negative number and a concrete positive number and check which one fits the stated condition.**

**Worked example (hard — two facts pin a unique value with sign logic).** If x^2 = 16 and x^3 < 0, what is x?

Take the facts in turn. x^2 = 16 means x = 4 or x = −4 — two candidates, because the even power has thrown away the sign. x^3 < 0 means x < 0, but on its own that allows any negative number (−4, −1, −100), so it doesn't name a value either. Put them together: x^2 = 16 narrows x to {4, −4}, and x^3 < 0 forces x negative, eliminating 4 and leaving **x = −4** uniquely. Watch the trap — it's tempting to treat x^2 = 16 as already "solved" at x = 4. The even power is precisely what leaves two candidates, and only the odd-power fact breaks the tie.

**Procedure to memorize — reading any signed power.**

1. **Find the base.** Look for parentheses. If the negative is inside parentheses with the number, the base is negative; if not, the base is positive and the negative is applied last.
2. **Read the exponent's parity.** Even or odd?
3. **Apply the sign rule.** Negative base + even exponent → positive. Negative base + odd exponent → negative. Positive base → always positive.
4. **Only now compute the magnitude.** Evaluate the power as if everything were positive, then attach the sign from step 3.
5. **Run the inverse.** Given a result, ask: was the exponent even (sign lost — carry both ± values) or odd (sign preserved — unique answer)?

**Trap to watch.** The deadliest trap is treating −x^2 and (−x)^2 as interchangeable, or assuming x^2 = 9 "means" x = 3. Both errors come from skipping step 1 (locate the base) or skipping the sign-inverse in step 5. Whenever you see an even power equal to a constant, your reflex should be "**two values — carry both**" — not "solved it." And whenever you see a bare negative in front of a power, your reflex should be "**negate last**," not "the answer is positive." A second, sneakier trap: even powers don't only hide the minus sign, they can also make a small fraction look like growth — but the sign rule is the one the GMAT tests most.

**Common mistakes.**

- Writing (−3)^2 = −9. The even power makes it +9; the negatives pair off.
- Confusing −2^4 (= −16) with (−2)^4 (= +16). No parentheses means the exponent acts first.
- Concluding x = 3 from x^2 = 9, forgetting x = −3 is equally valid.
- Thinking an odd-power fact like x^3 > 0 is "not enough" — it actually pins the sign down completely.
- Mishandling the subtraction between ±1 terms (e.g., reading − (−1) as −1 instead of +1) when summing powers of −1.
- Computing the big number before checking the sign, then losing track of whether to negate.

**Memorize cold:**
- (−a)^even = positive (always, for nonzero a)
- (−a)^odd = negative (always)
- (−1)^even = 1, (−1)^odd = −1 (pure sign switch)
- −a^even = negative, but (−a)^even = positive (parentheses decide)
- x^even = k > 0 → x = ±sqrt(k) (two solutions; not signed, so an even-power fact alone usually leaves the sign open)
- x^odd > 0 → x > 0, and x^odd < 0 → x < 0 (one solution; sign is determined outright)

**Recap.** Even exponents erase sign — every result is non-negative, which means an even-power equation hands you a magnitude but hides the ±, so carry both the positive and negative root. Odd exponents preserve sign — the result carries the base's sign, so an odd-power fact (positive, negative, or an exact value) nails down the sign outright. The parenthesis test decides whether a leading minus rides through the power or gets applied last, and powers of −1 collapse to a simple parity count. Read the base first (the parenthesis test), read the parity second, attach the sign third, and compute the magnitude last. Master that order and the GMAT's favorite sign traps stop working on you.

## @scientific-notation

Scientific notation writes any number as **a × 10ᵏ**, where 1 ≤ a < 10 and k is an integer. The coefficient `a` is one nonzero digit followed by a decimal tail; the power of 10 fixes the magnitude. It's the GMAT's way of testing exponents in disguise: every arithmetic problem in scientific notation is really two sub-problems glued together — one about the coefficients, one about the powers of 10. The instant you treat those two pieces as a single tangled lump, you lose. The instant you split them, the question becomes routine. This is not an esoteric topic the test reserves for a single oddball question; it's a *tool* that shows up the moment a problem involves very large numbers (populations, distances in meters, computing storage) or very small ones (wavelengths, concentrations, probabilities), and the students who own it convert reflexively while everyone else is still counting zeros by hand.

**Why the GMAT loves it.** The test cannot give you a calculator on Quant, so it leans on numbers that are easy to handle *if* you respect place value and impossible to handle if you don't. A number like 0.000000036 is unmanageable as written; as 3.6 × 10⁻⁸ it's two trivial facts. Recognizing that translation is the whole skill. The hard versions hide it inside a word problem ("a virus measuring 0.00000012 meters...") so you have to convert before you can even start, and they often pair a tiny number with a huge one so that the raw arithmetic would be hopeless but the scientific-notation arithmetic collapses to a one-line exponent addition.

**Converting to scientific notation.** Slide the decimal point so that exactly one nonzero digit sits to its left. Count the slides; that count is |k|. Direction sets the sign:

- Slide **left** (the number you started with was large, ≥ 10) → k is **positive**.
- Slide **right** (the number you started with was small, < 1) → k is **negative**.

The mnemonic that never fails: the *original number* and the *power of 10* must multiply back to where you started. If you shrank a big number down to a coefficient between 1 and 10, the 10ᵏ has to be big to compensate, so k > 0. If you grew a tiny number up to a coefficient between 1 and 10, the 10ᵏ has to be a small fraction to compensate, so k < 0. Whenever the sign feels slippery, fall back on this compensation idea rather than memorizing a rule you might flip.

**Worked example.** Express 0.00045 in scientific notation.

Slide the decimal right until one nonzero digit is on the left: 0.00045 → 4.5, and that took 4 slides. The original number was tiny (less than 1), so k is negative. Result: **4.5 × 10⁻⁴**. Sanity check: 4.5 × 10⁻⁴ = 4.5 / 10,000 = 0.00045. Matches.

**Worked example.** Express 6,300,000 in scientific notation.

Slide left until one nonzero digit remains on the left: 6,300,000 → 6.3, and that took 6 slides. The original number was large, so k is positive. Result: **6.3 × 10⁶**. Count the slides, not the zeros — a sloppy "count the zeros" habit gives you 10⁵ here because 6.3 isn't a round million, and that off-by-one is exactly the error the test rewards itself for catching.

> **Recall check.** Sliding the decimal to the *right* to reach scientific notation gives a positive or negative exponent? (Negative — you slide right only for numbers smaller than 1.)

**Arithmetic rule.** Handle coefficients and powers of 10 separately, every time. This is the load-bearing habit of the whole section.

**Multiplication:** multiply the coefficients, add the exponents. (3 × 10⁴) · (2 × 10⁻⁷) = (3 · 2) × 10⁴⁺⁽⁻⁷⁾ = 6 × 10⁻³.

**Division:** divide the coefficients, subtract the exponents. (8 × 10⁵) / (2 × 10²) = (8/2) × 10⁵⁻² = 4 × 10³.

**Addition/subtraction:** you cannot combine until the powers of 10 match. Rewrite one term so both share the same exponent, then add or subtract the coefficients while the power of 10 rides along unchanged. This is the one operation where you are *not* allowed to touch the exponents arithmetically — they must already agree. The reason is just the distributive law: a × 10ᵏ + b × 10ᵏ = (a + b) × 10ᵏ only factors cleanly when both terms carry the *same* 10ᵏ. With mismatched powers there is no common factor to pull out, so you manufacture one by rewriting a term.

**Worked example.** Compute (3 × 10⁵) + (2 × 10⁴).

The exponents differ, so first force a match. Rewrite the smaller term up to 10⁵: 2 × 10⁴ = 0.2 × 10⁵. Now the powers agree, so add coefficients: (3 + 0.2) × 10⁵ = **3.2 × 10⁵**. Notice the answer is already normalized (3.2 sits in [1, 10)), so you're done. If you had instead tried to "add the exponents" you'd have produced nonsense — addition never adds exponents.

**Worked example (multiplication that needs normalizing).** Compute (5 × 10⁶) · (4 × 10⁻²).

Coefficients: 5 · 4 = 20. Exponents: 6 + (−2) = 4. Intermediate result: 20 × 10⁴. But 20 is not in [1, 10), so normalize: 20 = 2.0 × 10¹, which bumps the power up by one. Final: **2 × 10⁵**. The rule for normalizing: when the coefficient shrinks, the exponent grows, because you moved a factor of 10 out of the coefficient and into the power.

> **Recall check.** Before you can add (7 × 10⁹) + (4 × 10⁶), what single thing must be true of the two terms? (Their powers of 10 must match — rewrite one term so both share the same exponent, then add coefficients.)

**Normalizing after arithmetic.** A scientific-notation answer is only "proper" when the coefficient is in [1, 10). After any multiplication or division you may land outside that window, and you fix it by sliding the decimal in the coefficient and compensating in the exponent — the exact same move as the original conversion. A compact way to keep the direction straight:

| Coefficient after operation | What to do | Exponent moves |
| --- | --- | --- |
| ≥ 10 (e.g. 24 × 10⁵) | shrink coefficient | **up** → 2.4 × 10⁶ |
| < 1 (e.g. 0.7 × 10³) | grow coefficient | **down** → 7 × 10² |
| already in [1, 10) | nothing | unchanged |

The conservation idea is the same every time: a factor of 10 you take *out* of the coefficient has to go *into* the power, and vice versa. Nothing is created or destroyed; you're only moving a factor of 10 across the times sign.

**Worked example (division landing below 1).** Compute (3 × 10⁴) / (6 × 10⁻¹).

Coefficients: 3/6 = 0.5. Exponents: 4 − (−1) = 5. Intermediate: 0.5 × 10⁵. The coefficient 0.5 is below 1, so normalize down: 0.5 = 5 × 10⁻¹, dropping the exponent by one. Final: **5 × 10⁴**. Watch the exponent subtraction — 4 − (−1) = 5, not 3. Subtracting a negative adds.

**The estimation play — use scientific notation to crush a calculator-bait product.** When the test hands you something like "0.0000032 × 1,500,000" and five answer choices that differ by orders of magnitude, do not multiply the digits longhand. Convert, then estimate the coefficient. The structure of the answer choices is a gift: if they're spread across powers of 10, you can win on the power of 10 alone and never need the exact coefficient.

**Worked example (estimation tactic, hard).** Approximately what is (0.0000032 × 1,500,000) / 0.004?

Convert each piece to scientific notation first:
- 0.0000032 = 3.2 × 10⁻⁶
- 1,500,000 = 1.5 × 10⁶
- 0.004 = 4 × 10⁻³

Now group coefficients and powers of 10 separately. Coefficients: (3.2 × 1.5) / 4 = 4.8 / 4 = 1.2. Powers of 10: (10⁻⁶ × 10⁶) / 10⁻³ = 10⁰ / 10⁻³ = 10³. Recombine: 1.2 × 10³ = **1,200**. Because the answer choices are spread across magnitudes, you didn't even need the exact coefficient — the 10³ alone eliminates anything that isn't in the low thousands. This is the **estimation tactic**: convert, isolate the power of 10, and let order of magnitude do the elimination.

**Worked example (backsolving from spread-out choices, hard).** Light travels about 3 × 10⁸ meters per second. Roughly how many meters does it travel in one hour? The choices are (A) 1.1 × 10⁶ (B) 1.1 × 10⁹ (C) 1.1 × 10¹² (D) 1.1 × 10¹⁵ (E) 1.1 × 10¹⁸.

You don't need a precise product — the choices differ only in their exponents, so this is a pure **order-of-magnitude / answer-choice tactic**. One hour is 3,600 seconds = 3.6 × 10³ s. Multiply: (3 × 10⁸) · (3.6 × 10³). Coefficients: 3 · 3.6 = 10.8. Exponents: 8 + 3 = 11. That's 10.8 × 10¹¹, which normalizes to 1.08 × 10¹² ≈ **1.1 × 10¹²**, choice **(C)**. Notice the whole problem reduced to "exponent 8 plus exponent 3 is 11, then normalizing the coefficient 10.8 bumps it to 12." If you'd only tracked the powers of 10 you'd have landed within one normalization step of the answer and could have picked (C) by elimination, since no other choice is near 10¹².

**Trap to watch.** Be precise about whether exponents move up or down, and never confuse the sign of the exponent with the sign of the number. 4.5 × 10⁻⁴ is a *very small positive* number (0.00045); the negative exponent does not make the value negative — it makes it small. If you wrote 4.5 × 10⁴ you'd have 45,000, which is wrong by a factor of 10⁸. Whenever an exponent sign feels ambiguous, plug in a sanity-check number and confirm the order of magnitude before you commit.

**A second trap — the decimal-count slip.** When converting, count *places moved*, not *zeros visible*. For 6,300,000 the answer is 10⁶ (six slides), even though there are only five trailing zeros after the 63. Counting zeros instead of slides is the single most common conversion error, and it's always an off-by-one in the exponent.

**The load-bearing benchmark: 2¹⁰ ≈ 10³.** Exactly, 2¹⁰ = 1,024. This approximation lets you compare powers of 2 against powers of 10 with no calculator: 2²⁰ ≈ 10⁶, 2³⁰ ≈ 10⁹, and in general 2¹⁰ⁿ ≈ 10³ⁿ. The approximation runs slightly low (1,024 is about 2.4% above 1,000), but for GMAT comparison and order-of-magnitude questions it's close enough — and one of the hardest exponent comparison questions on the test hinges on recognizing it. If a problem asks "is 2⁴⁰ greater than 10¹²?", convert: 2⁴⁰ = (2¹⁰)⁴ ≈ (10³)⁴ = 10¹², and since 2¹⁰ is actually a hair above 10³, 2⁴⁰ is just *above* 10¹². That's the whole question.

**Worked example (the benchmark in action).** Roughly how many digits does 2³⁰ have?

2³⁰ = (2¹⁰)³ ≈ (10³)³ = 10⁹. A number around 10⁹ is "1 followed by 9 zeros," which has **10 digits**. (The exact value is 1,073,741,824 — ten digits. The benchmark nailed it.) The named move here is **estimation via a memorized benchmark**: you never computed 2³⁰ directly; you swapped in 10³ for 2¹⁰ and read the magnitude off the power of 10. A useful side-rule falls out: a number written as c × 10ᵏ with 1 ≤ c < 10 has exactly **k + 1** digits, which is why 10⁹ has ten digits, not nine.

> **Recall check.** What is the exact value of 2¹⁰, and what power of 10 do you approximate it with? (2¹⁰ = 1,024 ≈ 10³; the approximation is about 2.4% high, which is fine for GMAT magnitude work.)

**Procedure to memorize — scientific-notation arithmetic.**

1. **Convert** every quantity to a × 10ᵏ with 1 ≤ a < 10. Count *slides*, not zeros; right-slide → negative k, left-slide → positive k.
2. **Split** the problem into two independent tracks: the coefficients and the powers of 10.
3. **Operate on the coefficients** using ordinary arithmetic (multiply, divide, or — only after matching exponents — add/subtract).
4. **Operate on the powers of 10** using exponent rules: add exponents to multiply, subtract to divide, leave them untouched (but matched) for add/subtract.
5. **Recombine** into coefficient × 10ᵏ.
6. **Normalize** so the coefficient lands back in [1, 10): coefficient shrinks → exponent up; coefficient grows → exponent down.
7. **Sanity-check the magnitude.** Ask whether the answer is plausibly tiny or huge, and confirm the sign of the exponent by eyeballing one concrete value.

**Common mistakes.**

- **Adding exponents when adding the numbers.** Addition/subtraction never adds exponents — it requires matching them first, then combining coefficients only.
- **Confusing exponent sign with number sign.** 10⁻⁴ means *small and positive*, not negative. The value stays positive.
- **Counting zeros instead of decimal slides** when converting — a reliable off-by-one in the exponent.
- **Forgetting to normalize.** 24 × 10⁵ and 0.5 × 10⁵ are correct *values* but not proper scientific notation; on "express in scientific notation" questions the un-normalized form is a wrong answer.
- **Botching the exponent subtraction in division.** 4 − (−1) = 5, not 3. Subtracting a negative adds.
- **Miscounting digits.** c × 10ᵏ has k + 1 digits, not k; an off-by-one here flips a "how many digits" answer.
- **Skipping the magnitude check**, which is the cheapest insurance on the section — one second catches a factor-of-10ⁿ blunder.

**Recap.** Scientific notation is a × 10ᵏ with the coefficient pinned to [1, 10). Convert by sliding the decimal (right → negative k, left → positive k, count slides). For arithmetic, split into coefficients and powers of 10, operate on each separately — multiply/divide directly, but *match exponents before adding or subtracting* — then recombine and normalize the coefficient back into [1, 10). Lean on the estimation and answer-choice tactics whenever the choices are spread across magnitudes: the power of 10 alone often decides the question. Keep 2¹⁰ ≈ 10³ in your pocket for power-of-2 comparisons and digit-counting, remember that c × 10ᵏ has k + 1 digits, and end every calculation with a magnitude sanity check, because a single wrong exponent sign moves your answer by an entire order of magnitude.

> **Self-explanation prompt.** Cover this section. Express (7.2 × 10⁸) ÷ (9 × 10⁻²) in scientific notation. Work it: 7.2/9 = 0.8 for the coefficients, and 10⁸ / 10⁻² = 10⁸⁻⁽⁻²⁾ = 10¹⁰ for the powers, giving 0.8 × 10¹⁰, which normalizes to 8 × 10⁹. Did you keep the coefficient division and the exponent subtraction as two clean, separate steps — and did you catch that 8 − (−2) = 10? If you tangled the tracks together or stumbled on the negative exponent, rerun it slowly with the split made explicit, because that separation is the entire technique.
