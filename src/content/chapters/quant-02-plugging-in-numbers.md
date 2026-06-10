---
slug: quant-02-plugging-in-numbers
title: "Method: Plugging In Numbers"
section: Quant
estimated_minutes: 12
prerequisites:
  - quant-01-backsolving
summary: |
  Picking smart concrete numbers for variables — the trick that cracks variables-in-the-choices algebra, percent problems, and must-be-true number properties without abstract manipulation. Backsolving tests the test's numbers; plugging in supplies your own.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two questions before the lesson. Don't worry about getting them right — attempting first makes the method land harder when you read it. Solve them any way you can, then watch the chapter turn each one into two lines of arithmetic.
    pretest_question_ids:
      - plugging-in-q1
      - plugging-in-q2
  - id: two-modes
    type: reading
    title: "The two modes: solve it or break it"
    check_question_ids:
      - plugging-in-q3
  - id: picking-numbers
    type: reading
    title: "Picking the right numbers"
    check_question_ids:
      - plugging-in-q4
  - id: break-it-and-traps
    type: reading
    title: "Break-it mode — and the traps that flip your answer"
    check_question_ids:
      - plugging-in-q5
  - id: summary
    type: summary
    title: "Plugging in on one screen"
    check_question_ids: []
problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - plugging-in-q6
      - plugging-in-q7
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - plugging-in-q8
      - plugging-in-q9
      - plugging-in-q10
---

## @two-modes

When a problem hands you variables instead of numbers, you do not have to think in variables. **Swap them for concrete numbers, run the arithmetic, and read off the answer.** This is the single highest-leverage tactic on Quant: it converts abstract algebra and slippery number-property logic into grade-school computation you cannot fumble.

By the end of this chapter you'll be able to:

- **Recognize** the two problem families where supplying your own numbers beats algebra — and the one situation where it's useless.
- **Choose** numbers that make the arithmetic trivial and the wrong answers visible.
- **Attack** "must be true" claims with adversarial cases instead of abstract reasoning.

There are two distinct jobs, and you choose your numbers differently for each.

**Mental model.** Plugging in has two modes. **VIC mode** (variables in the choices, or percent problems): you want *one clean number* that makes the target easy, compute the actual answer, then plug the same number into all five choices and keep the one that matches. **Break-it mode** ("must be true," "could be true," divisibility, even/odd, sign): you are not solving — you are *attacking*. You pick adversarial cases trying to make each claim **false**. One counterexample kills a "must be true" choice instantly.

One boundary before anything else: plugging in needs a variable that is **free**. If the problem fixes the value — "if 5x − 8 = 22, what is x?" — a number you invent simply makes the equation false and tells you nothing. That's backsolving territory (the previous chapter): there you test the *test's* numbers; here you supply *your own*. The two methods are mirror images, and recognizing which one a problem wants is half the skill.

**Worked example.** (VIC algebra) *The price of a book is increased by p percent, then the new price is decreased by p percent. The final price is what percent of the original?* Pick original price 100 and p = 20. Up 20%: 100 to 120. Down 20% of 120: 120 minus 24 = 96. So final is **96%** of original — a 4% net loss. Now test the choices against 96. The standard answer form is 100 minus p²/100; check: 100 minus 400/100 = 100 minus 4 = **96.** Match. The trap choice "100%" (people assume up-then-down cancels) is killed in one line of arithmetic.

**Worked example.** (Percent VIC) *In a class, 60% are women and 25% of the women wear glasses. What percent of the whole class are women who wear glasses?* Let the class be **100** people. Women: 60. Glasses-wearing women: 25% of 60 = 15. Out of 100, that's **15%.** Done — no variable ever appeared. If the choices were in terms of letters, you'd plug 100 and your percentages in and match to 15.

> **Recall check.** What distinguishes a problem where you plug in your own numbers from one where you backsolve the choices? (Plugging in needs a free variable; backsolving fits when the value is determined and the choices are candidate answers.)

## @picking-numbers

The method lives or dies on number choice. Here is the menu.

| Use this trick when... | Pick these numbers | Why |
|---|---|---|
| Percent of an unknown total | **100** | Percents become whole numbers; no fractions |
| VIC with variables in choices | small distinct **2, 3, 5, 7** | Easy arithmetic, avoids coincidental matches |
| "Must be true" number properties | **stress cases**: 0, 1, negatives, fractions, primes | Each tests a different way the claim can break |
| Even/odd or divisibility claims | one **even**, one **odd**, plus a **prime** | Forces the parity/factor edge to show |
| Ratios with no totals given | a multiple of the **denominators** | Keeps every part a whole number |
| Two choices survive your first plug | a **second, weirder** number | Breaks the tie that one number left |

The rules behind the menu. **Avoid 0 and 1** in VIC mode — they make too many choices coincidentally equal (x times anything is 0; x to any power is 1), so you cannot tell choices apart. But in break-it mode, **0 and 1 are your best weapons**, precisely because they behave abnormally. Don't reuse the same number for two different variables — distinct primes keep the algebra honest. And for percents, **100 is non-negotiable**.

**Micro-drill.** Plug a number and read off each answer — under 30 seconds total:

1. If y = 3x and x is positive, x is what fraction of y? → ___
2. A price rises 50%, then falls 50%. The result is what percent of the original? → ___
3. If n is odd, is (n + 1)(n + 2) even or odd? → ___

Answers: (1) **1/3** — plug x = 2, y = 6; 2 of 6 is one third. (2) **75%** — 100 up to 150, then down 75 to 75. (3) **Even** — n = 3 gives 4 × 5 = 20; n + 1 is even whenever n is odd, and one even factor makes the whole product even. If you reasoned any of these abstractly and slipped, notice how the concrete number would have caught it.

> **Recall check.** Why is 100 the default for percent problems? (Every percentage becomes a whole-number count of items, eliminating fractions and division errors.)

> **Self-explanation prompt.** Explain why 0 and 1 are *banned* in VIC mode but *required* in break-it mode. (In VIC you want choices to separate, and 0/1 collapse them together; in break-it you want abnormal behavior that exposes false claims, which is exactly what 0 and 1 provide.)

## @break-it-and-traps

In break-it mode your mindset flips from solver to attacker. A "must be true" choice survives only if it holds for *every* legal number — so your job is to hunt for the one number that kills it. Vary what matters: parity, sign, size, integer-ness. Three confirmations with the same kind of number prove nothing; one counterexample is final.

**Worked example.** (Number properties, break-it) *If n is an integer, which of the following must be even?* with a choice **n² + n**. Attack it: try n = 3 (odd): 9 + 3 = 12, even. Try n = 4 (even): 16 + 4 = 20, even. Try n = 0: 0, even. Try n negative, n = −5: 25 minus 5 = 20, even. It survives every stress case — and it should, because n² + n = n(n + 1) is a product of consecutive integers, one of which is always even. Contrast a tempting wrong choice like **n² + 1**: n = 3 gives 10 (even) but n = 4 gives 17 (**odd**) — one counterexample and it's dead.

**Worked example.** (Inequalities, "could be true") *If x < y < 0, which could be true?* with choice **x/y < 1.** Both negative, so x/y is positive. Pick x = −4, y = −2: that violates x < y, so it's out of bounds. Stay legal: x = −1, y = −0.5 keeps x < y < 0, giving x/y = 2, which is **not** < 1. Try another legal pair, x = −3, y = −1: x/y = 3, again not < 1. With x more negative than y, the magnitude ratio always exceeds 1, so this choice is actually **always false** — and the disciplined move is to test 2–3 valid pairs before trusting any verdict.

**Trap to watch.** The number-one error is picking a number that **violates the constraints**. If the problem says "x is a positive even integer," do not plug 3. If it says "x not equal to y," keep them distinct. A number that breaks the rules produces a confidently wrong answer — re-read the constraints every time, before you choose.

**Trap to watch.** In VIC mode, stopping after one number when **two choices both match**. That's not a coincidence to ignore — it means your number was too tame. Distinct expressions can agree at a friendly value (x = 2 makes 3x and x² + 2 both equal 6) but cannot agree everywhere. Plug a second, uglier number — a negative, a fraction — into just the survivors, and only one will live.

> **Recall check.** Two choices both match your plug of x = 2. What's the move? (Keep the eliminations, re-plug a structurally different number — negative or fractional — and test only the two survivors.)

## @summary

Plugging in converts abstraction into arithmetic. Here it is on one screen.

| Step | What you do |
|---|---|
| 1. Qualify | Free variable? VIC, percent-of-unknown, or must-be-true? Plug in. Value determined by an equation? Backsolve instead. |
| 2. Pick by mode | VIC: one clean number (100 for percents; 2, 3, 5, 7 elsewhere). Break-it: stress cases — 0, 1, negatives, fractions. |
| 3. Compute and match | Work out the real answer with your number, then test all five choices against it. |
| 4. Escalate | Two survivors? Plug a weirder number into just those two. Must-be-true? Keep attacking until one counterexample lands or every stress case fails to break it. |

**Takeaway.** VIC mode is one clean number, compute, match. Break-it mode is multiple adversarial numbers hunting for a counterexample. Always re-read the constraints before choosing — and when two choices survive, that's a signal to plug again, not a coin flip.

**What to do next.** Run the two graded problem sets below — the easy set drills VIC matching, and the medium set escalates to expression-collapsing, successive percents, and a remainder problem where concrete numbers beat algebra outright. On every question, force yourself to plug rather than solve, even if you can see the algebra: the goal is making the reflex automatic. Then carry it into the next chapter, Estimation, which handles the problems where even your plugged numbers are more precision than you need.
