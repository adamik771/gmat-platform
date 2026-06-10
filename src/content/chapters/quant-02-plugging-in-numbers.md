---
slug: quant-02-plugging-in-numbers
title: "Method: Plugging In Numbers — Turn Algebra Into Arithmetic"
section: Quant
estimated_minutes: 12
prerequisites:
  - quant-01-backsolving
summary: |
  Picking smart concrete numbers for variables — the move that cracks variables-in-the-choices algebra, percent problems, and must-be-true number properties without abstract manipulation.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Before the lesson, find any Problem Solving question whose answer choices contain variables — x's and n's in the choices instead of numbers. Try replacing every variable with a small number and see how far plain arithmetic takes you. Hold onto whatever felt awkward; the chapter turns that move into a system.
  - id: two-modes
    type: reading
    title: "One tactic, two modes"
    check_question_ids: []
  - id: vic-mode
    type: reading
    title: "VIC mode — variables in the choices"
    check_question_ids: []
  - id: break-it-mode
    type: reading
    title: "Break-it mode — hunt the counterexample"
    check_question_ids: []
  - id: picking-numbers
    type: reading
    title: "Choosing numbers like a pro"
    check_question_ids: []
  - id: summary
    type: summary
    title: "Lock it in"
    check_question_ids: []
problem_sets:
---

## @two-modes

Backsolving — the previous chapter — needs one thing to work: numeric answer choices you can test. The moment the choices fill with letters (`3x + 2y`, `n/4`, `100 − p`), there is nothing fixed to plug back, and most students sigh and reach for algebra. Don't. When a problem hands you variables, you do not have to think in variables. **Swap them for concrete numbers, run the arithmetic, and read off the answer.** This is the companion move to backsolving and the single highest-leverage tactic on Quant: it converts abstract algebra and slippery number-property logic into grade-school computation you cannot fumble.

**By the end of this chapter you will be able to:**

- Classify any variable-heavy problem into one of two modes — VIC or break-it — in seconds.
- Pick numbers that keep the arithmetic trivial without collapsing the choices together.
- Convert a "must be true" claim into a short, decisive counterexample hunt.
- Catch the two failure patterns before they cost you: illegal numbers and double matches.

**Mental model.** Plugging in has two modes. **VIC mode** — *variables in the choices*, including most percent problems: you want *one clean number* that makes the target easy, compute the actual answer for your case, then plug the same number into all five choices and keep the one that matches. **Break-it mode** — "must be true," "could be true," divisibility, even/odd, sign: you are not solving, you are *attacking*. You pick adversarial cases trying to make each claim **false**. One counterexample kills a "must be true" choice instantly.

The two modes answer different questions, and mixing them up is where students go wrong. VIC asks: *which expression produces the same number my concrete case produced?* Break-it asks: *can any legal number make this claim fail?* Diagnose the mode before you touch a number — the stem tells you which game you're playing.

> **Recall check.** What question does VIC mode answer, and what question does break-it mode answer? (VIC: "which choice matches the number my case produced?" Break-it: "can any legal number make this claim false?" One number serves VIC; a squad of hostile numbers serves break-it.)

## @vic-mode

The VIC loop has four steps, and the order matters:

1. **Pick one clean number per variable** — small, distinct, easy to track.
2. **Compute the target** — the actual numeric answer to the question for your case, *before* looking at the choices, so the choices can't anchor you.
3. **Plug the same numbers into all five choices** and keep the matches.
4. **If two choices match, plug a second, weirder number** into the survivors only.

**Worked example.** *(Percent VIC.)* The price of a book is increased by p percent, then the new price is decreased by p percent. The final price is what percent of the original? Pick original price 100 and p = 20. Up 20%: 100 to 120. Down 20% of 120: `120 − 24 = 96`. So the final price is **96%** of the original — a 4% net loss. Now test the choices against 96. The standard answer form is `100 − p²/100`; check: `100 − 400/100 = 96`. Match. The trap choice "100%" — people assume up-then-down cancels — dies in one line of arithmetic.

**Worked example.** *(Percent of a percent.)* In a class, 60% are women and 25% of the women wear glasses. What percent of the whole class are women who wear glasses? Let the class be **100** people. Women: 60. Glasses-wearing women: 25% of 60 = 15. Out of 100, that's **15%**. Done — no variable ever appeared. If the choices were expressed in letters, you'd plug your numbers into each and match to 15.

**Worked example.** *(VIC with a ratio.)* A theater sells r regular tickets at d dollars each, and twice as many student tickets at half price. In terms of r and d, what is the total revenue? Pick r = 2 and d = 10. Regular revenue: `2 × 10 = 20`. Student tickets: twice as many means 4, at half price means $5 each — revenue 20. Total: **40**. Now run the choices at r = 2, d = 10: `rd` gives 20, `3rd/2` gives 30, `2rd` gives **40** — match — `5rd/2` gives 50, `3rd` gives 60. Every choice lands on a different number, so the match is decisive. One clean case beat four lines of revenue algebra.

**Speed tip.** Keep your numbers tiny. If a plug-in has you multiplying three-digit values, your numbers were too big — restart with 2, 3, 5, or 10. Thirty seconds of small arithmetic beats two minutes of big arithmetic that exists only because you picked 47.

**Trap to watch.** In VIC mode, stopping after one number when **two choices both match**. A double match is not a coincidence to shrug at — it means your number was too tame (too symmetric, too round). Plug a second, uglier number — a different prime, a fraction, a negative if the constraints allow — into the *surviving choices only*. Exactly one will hold.

> **Recall check.** Why is 100 the default plug-in for percent problems? (Every percentage becomes a whole-number count, so the arithmetic stays in integers and the final figure *is* the percent — no conversion step, no fraction errors.)

## @break-it-mode

"Must be true," "could be true," "which of the following is always even" — these stems are not asking you to solve anything. They are claims about *every* number in a family, and your job is prosecution: find one legal number that makes the claim fail. The skill is choosing witnesses likely to expose a lie.

**The stress-case roster.** Each abnormal number breaks claims in its own way:

- **0** — annihilates products, is neither positive nor negative, is even.
- **1** — collapses powers (`1^n = 1`), survives multiplication unchanged.
- **Negatives** — flip inequalities under multiplication, vanish under even exponents.
- **Fractions between 0 and 1** — shrink when squared, the opposite of what intuition expects.
- **An even/odd pair** — forces parity claims to show their edge cases.

**Worked example.** *(Must be even.)* If n is an integer, which of the following must be even? Consider the choice `n² + n`. Attack it: n = 3 gives `9 + 3 = 12`, even. n = 4 gives `16 + 4 = 20`, even. n = 0 gives 0, even. n = −5 gives `25 − 5 = 20`, even. It survives every stress case — and it should, because `n² + n = n(n + 1)` is a product of consecutive integers, one of which is always even. Contrast the tempting wrong choice `n² + 1`: n = 3 gives 10, even — but n = 4 gives 17, **odd**. One counterexample and it's dead.

**Worked example.** *(Could be true.)* If `x < y < 0`, could `x/y < 1` be true? Both are negative, so x/y is positive. Try x = −1, y = −0.5 — legal, since −1 < −0.5 < 0: `x/y = 2`, not less than 1. Try x = −3, y = −1: `x/y = 3`, again not less than 1. The pattern is structural: x sits *further* from zero than y, so the magnitude ratio always exceeds 1 — this choice is actually **never** true. The disciplined move is to test two or three valid pairs before trusting any verdict, then look for the structural reason your cases keep agreeing.

> **Self-explanation prompt.** Explain why 0 and 1 are *banned* in VIC mode but *required* in break-it mode. (In VIC you want the five choices to separate, and 0 and 1 collapse them together — x times anything is 0, x to any power is 1. In break-it you want abnormal behavior that exposes false claims, which is exactly what 0 and 1 provide.)

## @picking-numbers

Mode tells you the goal; the menu tells you the numbers. Reach for the row that matches your problem.

| Use this trick when... | Pick these numbers | Why |
|---|---|---|
| Percent of an unknown total | **100** | Percents become whole numbers; no fractions |
| VIC with variables in choices | small distinct **2, 3, 5, 7** | Easy arithmetic, avoids coincidental matches |
| "Must be true" number properties | **stress cases**: 0, 1, negatives, fractions | Each tests a different way the claim can break |
| Even/odd or divisibility claims | one **even**, one **odd**, plus a **prime** | Forces the parity/factor edge to show |
| Ratios with no totals given | a multiple of the **denominators** | Keeps every part a whole number |
| A condition describing a family (remainders, multiples) | the family's **smallest members** | Cheapest cases; any member gives the same answer |
| Two choices survive your first plug | a **second, weirder** number | Breaks the tie that one number left |

The rules behind the menu: **avoid 0 and 1 in VIC mode** — they make too many choices coincidentally equal, so you cannot tell choices apart. **Don't reuse the same number** for two different variables — distinct primes keep the algebra honest. And for percents, **100 is non-negotiable**.

**Worked example.** *(Instantiating a family.)* When n is divided by 7, the remainder is 3. What is the remainder when 2n is divided by 7? The condition describes a family — n could be 3, 10, 17, 24, … — so hire its smallest members. n = 3: `2n = 6`, and 6 divided by 7 leaves remainder **6**. Cross-check with n = 10: `2n = 20 = 2 × 7 + 6` — remainder 6 again. Two members agreeing settles a single-answer question; the test could only ask this because every member of the family gives the same remainder.

**Trap to watch.** The number-one error in this whole method is picking a number that **violates the constraints**. If the problem says "x is a positive even integer," do not plug 3. If it says "x ≠ y," keep them distinct. If it says `x < y < 0`, check both the order *and* the signs before you trust the case. A number that breaks the rules doesn't give you a wrong answer that looks wrong — it gives you a wrong answer that looks confirmed. Re-read the constraint sentence immediately before choosing.

**Micro-drill.** Pick numbers and answer each — under 90 seconds total:

1. *If k apples cost c cents, how many apples can you buy for d dollars?* Pick numbers and compute the target. → ___
2. *"If x² > x, then x > 1." Must it be true?* → ___
3. *A price rises 25%, then falls 20%. Final price as a percent of the original?* → ___

Answers: (1) Pick k = 2, c = 50, d = 1: apples cost 25 cents each, and $1 = 100 cents buys **4 apples**; the choice that yields 4 — `100dk/c` — is the answer form. (2) **No.** x = −2 gives `4 > −2`, true, but −2 > 1 is false — one stress case from the negative file kills it. (3) Plug 100: up 25% to 125, down 20% is `125 × 0.8 = 100` — exactly **100%**. This pair *does* cancel; the lesson is that you compute the base shift every time rather than assuming either way.

## @summary

You came in seeing variables as a demand for algebra. You leave knowing they're an invitation: the problem doesn't care *which* legal numbers you reason with, so reason with the easiest ones in the room.

**Takeaway.** Plugging in converts abstraction into arithmetic. One clean number cracks a VIC; a squad of hostile numbers settles a must-be-true. The variables were never the point — the *relationships* were, and concrete numbers expose relationships faster than symbols do.

The loop, every time:

1. **Classify the mode.** Variables in the choices or a percent stem → VIC. "Must / could be true" → break-it.
2. **Pick from the menu.** 100 for percents; small distinct primes for VIC; stress cases for claims; smallest members for families.
3. **Run the play.** VIC: compute your target first, then match all five choices. Break-it: attack each claim, hunting one legal counterexample.
4. **Respect the signals.** Double match → plug a weirder number into the survivors. Any number you choose → re-check it against the constraints.

**What to do next.** Drill this in a Quant practice set and force yourself to plug in even when algebra feels available — the method has to be reflexive before it pays under time pressure. Then move on to **Method: Estimation**, which makes both this chapter and backsolving cheaper: it shrinks every computation you just learned to run into one you can do in your head.

> **Self-explanation prompt.** Explain to a friend why testing n = 3 and n = 4 can prove a "must be even" choice *false* but can never quite prove one *true* — and what finally settled `n² + n` above. (Examples can only fail to find a counterexample; certainty came from structure — n(n + 1) is a product of consecutive integers, so one factor is always even. Plug in to eliminate; reason to confirm.)
