---
slug: quant-02-plugging-in-numbers
title: "Method: Plugging In Numbers"
section: Quant
estimated_minutes: 8
prerequisites:
  - quant-01-backsolving
summary: |
  Picking smart concrete numbers for variables — the trick that cracks variables-in-the-choices algebra, percent problems, and must-be-true number properties without abstract manipulation.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions before the lesson. Miss them freely; attempting first sharpens the read.
  - id: plugging-in-numbers
    type: reading
    title: "Method: Plugging In Numbers"
    check_question_ids: []
problem_sets:
---

## @plugging-in-numbers

When a problem hands you variables instead of numbers, you do not have to think in variables. **Swap them for concrete numbers, run the arithmetic, and read off the answer.** This is the single highest-leverage tactic on Quant: it converts abstract algebra and slippery number-property logic into grade-school computation you cannot fumble.

There are two distinct jobs, and you choose your numbers differently for each.

**Mental model.** Plugging in has two modes. **VIC mode** (variables in the choices, or percent problems): you want *one clean number* that makes the target easy, compute the actual answer, then plug the same number into all five choices and keep the one that matches. **Break-it mode** ("must be true," "could be true," divisibility, even/odd, sign): you are not solving — you are *attacking*. You pick adversarial cases trying to make each claim **false**. One counterexample kills a "must be true" choice instantly.

Here is the menu of which numbers to reach for.

| Use this trick when... | Pick these numbers | Why |
|---|---|---|
| Percent of an unknown total | **100** | Percents become whole numbers; no fractions |
| VIC with variables in choices | small distinct **2, 3, 5, 7** | Easy arithmetic, avoids coincidental matches |
| "Must be true" number properties | **stress cases**: 0, 1, negatives, fractions, primes | Each tests a different way the claim can break |
| Even/odd or divisibility claims | one **even**, one **odd**, plus a **prime** | Forces the parity/factor edge to show |
| Ratios with no totals given | a multiple of the **denominators** | Keeps every part a whole number |
| Two choices survive your first plug | a **second, weirder** number | Breaks the tie that one number left |

The rules behind the menu. **Avoid 0 and 1** in VIC mode — they make too many choices coincidentally equal (x times anything is 0; x to any power is 1), so you cannot tell choices apart. But in break-it mode, **0 and 1 are your best weapons**, precisely because they behave abnormally. Don't reuse the same number for two different variables — distinct primes keep the algebra honest. And for percents, **100 is non-negotiable**.

**Worked example.** (VIC algebra) *The price of a book is increased by p percent, then the new price is decreased by p percent. The final price is what percent of the original?* Pick original price 100 and p = 20. Up 20%: 100 to 120. Down 20% of 120: 120 minus 24 = 96. So final is **96%** of original — a 4% net loss. Now test the choices against 96. The standard answer form is 100 minus p^2/100; check: 100 minus 400/100 = 100 minus 4 = **96.** Match. The trap choice "100%" (people assume up-then-down cancels) is killed in one line of arithmetic.

**Worked example.** (Percent VIC) *In a class, 60% are women and 25% of the women wear glasses. What percent of the whole class are women who wear glasses?* Let the class be **100** people. Women: 60. Glasses-wearing women: 25% of 60 = 15. Out of 100, that's **15%.** Done — no variable ever appeared. If the choices were in terms of letters, you'd plug 100 and your percentages in and match to 15.

**Worked example.** (Number properties, break-it) *If n is an integer, which of the following must be even?* with a choice **n^2 + n**. Attack it: try n = 3 (odd): 9 + 3 = 12, even. Try n = 4 (even): 16 + 4 = 20, even. Try n = 0: 0, even. Try n negative, n = -5: 25 minus 5 = 20, even. It survives every stress case — and it should, because n^2 + n = n(n+1) is a product of consecutive integers, one of which is always even. Contrast a tempting wrong choice like **n^2 + 1**: n = 3 gives 10 (even) but n = 4 gives 17 (**odd**) — one counterexample and it's dead.

**Worked example.** (Inequalities, "could be true") *If x < y < 0, which could be true?* with choice **x/y < 1.** Both negative, so x/y is positive. Pick x = -4, y = -2: that violates x < y, so it's out of bounds. Stay legal: x = -1, y = -0.5 keeps x < y < 0, giving x/y = 2, which is **not** < 1. Try another legal pair, x = -3, y = -1: x/y = 3, again not < 1. With x more negative than y, the magnitude ratio always exceeds 1, so this choice is actually **always false** — and the disciplined move is to test 2–3 valid pairs before trusting any verdict.

**Trap to watch.** The number-one error is picking a number that **violates the constraints**. If the problem says "x is a positive even integer," do not plug 3. If it says "x not equal to y," keep them distinct. A second trap: in VIC mode, stopping after one number when **two choices both match**. That's not a coincidence to ignore — it means your number was too tame. Plug a second, uglier number (a negative, a fraction) and only one will survive.

> **Recall check.** Why is 100 the default for percent problems? (Every percentage becomes a whole-number count of items, eliminating fractions and division errors.)

> **Self-explanation prompt.** Explain why 0 and 1 are *banned* in VIC mode but *required* in break-it mode. (In VIC you want choices to separate, and 0/1 collapse them together; in break-it you want abnormal behavior that exposes false claims, which is exactly what 0 and 1 provide.)

- **VIC mode:** one clean number, compute the target, match all five choices.
- **Break-it mode:** multiple adversarial numbers, hunt for a counterexample.
- Always **re-read the constraints** before choosing — a number that breaks the rules gives a confidently wrong answer.
- When two choices survive, that's a **signal to plug again**, not a coin flip.
