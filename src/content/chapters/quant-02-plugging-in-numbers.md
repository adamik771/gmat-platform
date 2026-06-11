---
slug: quant-02-plugging-in-numbers
title: "Plugging In Numbers: Turn Algebra Into Arithmetic"
section: Quant
estimated_minutes: 12
prerequisites:
  - quant-01-backsolving
summary: |
  The companion to backsolving: when a problem hands you variables, don't think in symbols — swap in concrete numbers and compute. Master the two modes (pick-and-match for variables in the choices, hunt-the-counterexample for "must be true"), pick numbers that can't betray you, and turn slippery algebra into grade-school arithmetic.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions before the lesson. Miss them freely — attempting first sharpens what the reading lands on. As you work, notice whether you reached for variables by reflex when a number would have been faster.
    pretest_question_ids:
      - plugging-in-q1
      - plugging-in-q2
  - id: two-modes
    type: reading
    title: "Two modes, two mindsets"
    check_question_ids:
      - plugging-in-q3
  - id: vic-mode
    type: reading
    title: "VIC mode — pick, compute, match"
    check_question_ids:
      - plugging-in-q4
  - id: break-it-mode
    type: reading
    title: "Break-it mode — hunt the counterexample"
    check_question_ids:
      - plugging-in-q5
  - id: summary
    type: summary
    title: "Recap and what to do next"
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
      - plugging-in-q12
      - plugging-in-q13
      - plugging-in-q14
      - plugging-in-q15
      - plugging-in-q16
  medium:
    target_accuracy_by_score:
      "605": 55
      "645": 70
      "685": 85
      "725": 95
    question_ids:
      - plugging-in-q8
      - plugging-in-q9
      - plugging-in-q17
      - plugging-in-q18
      - plugging-in-q19
      - plugging-in-q20
      - plugging-in-q21
      - plugging-in-q22
      - plugging-in-q23
  hard:
    target_accuracy_by_score:
      "605": 40
      "645": 55
      "685": 70
      "725": 90
    question_ids:
      - plugging-in-q10
      - plugging-in-q11
      - plugging-in-q24
      - plugging-in-q25
      - plugging-in-q26
      - plugging-in-q27
      - plugging-in-q28
---

## @two-modes

By the end of this chapter you will be able to:

- Decide in one glance whether a problem wants you to plug in numbers, and which of the two modes it calls for.
- Pick numbers that expose the answer instead of hiding it — and avoid the values that quietly sabotage you.
- Convert variables-in-the-choices algebra and "must be true" number-property logic into arithmetic you cannot fumble.

**Mental model.** When a problem hands you variables instead of numbers, you do not have to think in variables. Swap them for concrete numbers, run the arithmetic, and read off the answer. This is the highest-leverage tactic on Quant after backsolving: it turns abstract algebra and slippery number-property logic into grade-school computation. Backsolving tests the *answers*; plugging in invents the *inputs* the problem refused to give you.

There are two distinct jobs here, and the whole skill is knowing which one you're in — because you choose your numbers in opposite ways for each.

| Mode | You see… | Your goal | How you pick numbers |
|---|---|---|---|
| **VIC** (variables in choices) | answers written as `3k`, `x/2`, or percents of an unknown | find the one choice that matches | one clean, tame number |
| **Break-it** | "must be true," "could be true," divisibility, even/odd, sign | make a claim fail | several adversarial, weird numbers |

In **VIC mode** you are *solving*: pick one easy number, compute the real answer, then plug that same number into all five choices and keep the one that matches. In **break-it mode** you are *attacking*: you pick adversarial cases trying to force a claim to be **false**, because one counterexample kills a "must be true" choice on the spot.

**Pro tip.** The two modes even disagree on which numbers are safe. The values 0 and 1 are *banned* in VIC mode — they collapse too many choices together — and *required* in break-it mode, precisely because they behave abnormally. Same toolkit, opposite settings. Get the mode right first and the number choice follows.

> **Recall check.** A problem's answer choices are `2x`, `x + 3`, and `x/4`. Which mode are you in, and what's your first move? (VIC mode — the choices contain a variable. Pick one clean number for x, compute the target the stem asks for, then test all five choices against that value.)

## @vic-mode

VIC mode is the workhorse: any problem whose answer choices contain a variable, and every percent-of-an-unknown problem, yields to it. The procedure never changes.

1. **Pick one clean number** for each variable — small, distinct, constraint-legal.
2. **Compute the actual answer** the stem asks for. This is now a real number, not an expression.
3. **Plug your number into all five choices** and keep the one that equals your answer.
4. **If two choices match, plug a second, uglier number.** That breaks the tie.

The number-picking rules are short. For **percent of an unknown total, always pick 100** — every percentage becomes a whole-number count and division errors vanish. For **variables in the choices, use small distinct primes** like 2, 3, 5, 7: they keep the arithmetic easy and stop two choices from matching by coincidence. And **avoid 0 and 1 here** — `x` times anything is 0, `x` to any power is 1, so they make wrong choices look right.

**Worked example.** *(VIC algebra.)* A book's price is raised by `p` percent, then the new price is lowered by `p` percent. The final price is what percent of the original? Pick original price **100** and **p = 20**. Up 20 percent: 100 becomes 120. Down 20 percent of 120: that's 24 off, landing at **96**. So the final price is **96 percent** of the original — a 4 percent net loss. Plug into the choices and only the form equal to 96 survives; the trap choice "100 percent" (people assume up-then-down cancels) dies in one line of arithmetic.

**Worked example.** *(Percent of an unknown.)* In a class, 60 percent are women and 25 percent of the women wear glasses. What percent of the whole class are women who wear glasses? Let the class be **100** people. Women: 60. Glasses-wearing women: 25 percent of 60 = **15**. Out of 100, that's **15 percent** — and a variable never appeared. If the choices were written in letters, you'd plug 100 and the given percentages in and match to 15.

**Micro-drill (do these in your head).** *(i)* You need "30 percent of an unknown salary, then taxed 10 percent" — what number do you set the salary to? *(ii)* A VIC problem's choices are `n + 2`, `2n`, and `n^2`; you plug n = 2 and two of them give 4. What went wrong and what do you do? Answers: *(i)* 100 — percents become clean counts. *(ii)* You picked a number where `2n` and `n^2` collide (both 4 at n = 2); plug a second value like n = 5 (giving 10 vs. 25) and only one choice will still match.

> **Recall check.** Why pick 100 for percent problems and small primes for variable choices — why not just always use 1? (Because 1 collapses choices together — `x²`, `x`, and `x³` all equal 1 — so you can't tell them apart. You want numbers that make the right answer *stand out*, not numbers that make everything look equal.)

## @break-it-mode

Break-it mode is the opposite reflex, and the one students skip. The triggers are unmistakable: **"must be true," "could be true," "which of the following is always,"** or any number-property claim about divisibility, parity, or sign. Here you are not solving for a value — you are a prosecutor hunting for the one case that makes a claim collapse.

The mindset flip: in VIC mode one number finishes the job; in break-it mode **one number proves nothing.** A "must be true" choice is only safe after it survives a deliberate gauntlet of weird inputs. So you reach for the values VIC mode forbids — **0, 1, negatives, fractions, and primes** — because abnormal numbers are exactly what expose a fragile claim.

**Worked example.** *(Must be true.)* If `n` is an integer, which must be even? Consider the choice `n² + n`. Attack it: n = 3 gives 12, n = 4 gives 20, n = 0 gives 0, n = −5 gives 20 — even every time. It *should* survive, because `n² + n = n(n + 1)` is a product of consecutive integers, one of which is always even. Now contrast a tempting wrong choice, `n² + 1`: n = 3 gives 10 (even), but n = 4 gives 17 (**odd**). One counterexample and it's dead.

**Worked example.** *(Divisibility.)* If `n` is a positive integer, which must be divisible by 3? Take the choice `n(n + 1)(n + 2)`. Test n = 1: that's 1·2·3 = 6; n = 2: 2·3·4 = 24; n = 4: 4·5·6 = 120 — divisible by 3 every time, because any three consecutive integers must contain a multiple of 3. Now a near-miss choice, `n² + n + 1`: n = 1 gives 3 (divisible), but n = 2 gives 7 (**not**). A single weird input separates the guaranteed claim from the merely plausible one.

**Worked example.** *(Could be true, with constraints.)* If `x < y < 0`, could `x/y < 1`? Both are negative, so `x/y` is positive — but you must keep your numbers *legal*. The pair x = −1, y = −0.5 obeys `x < y < 0` and gives `x/y = 2`, not less than 1. Try x = −3, y = −1: `x/y = 3`, again not less than 1. Because `x` is more negative than `y`, the magnitude ratio always exceeds 1 — so this is actually **always false**. The discipline: test two or three *valid* pairs before trusting any verdict.

**Trap to watch.** The number-one error is picking a number that **violates the constraints**. If the stem says "x is a positive even integer," do not plug 3. If it says "x ≠ y," keep them distinct. Re-read the constraints *before* you choose, every time — a number that breaks the rules hands you a confident, wrong answer.

> **Recall check.** You test a "must be true" choice with n = 4 and it comes out even, so you select it. Why is that reasoning unsafe? (One passing case never proves a universal claim — it only fails to disprove it. You have to try odd, negative, zero, and fractional inputs and confirm the choice survives *all* of them.)

## @summary

**Takeaway.** When a problem gives you variables, stop thinking in symbols and start thinking in numbers. First name the mode. **VIC** — variables in the choices or a percent of an unknown — means pick one clean number, compute the real answer, and match all five choices. **Break-it** — "must / could be true," parity, divisibility, sign — means hunt for a counterexample with deliberately weird inputs.

The four-line recap:

- **Name the mode first.** VIC = solve and match; break-it = attack and disprove. Everything else follows from this.
- **Pick numbers for the mode.** Tame and clean for VIC (100 for percents, small primes for variables); weird and adversarial for break-it (0, 1, negatives, fractions).
- **Obey the constraints.** A number that violates the stem gives a confidently wrong answer.
- **When two choices survive, plug again.** A tie is a signal your first number was too tame, not a coin flip.

**What to do next.** Run the graded problem sets above — the reading shows you the moves, but retrieval under realistic conditions is what makes the mode-recognition automatic. Then carry the instinct into mixed practice: the instant you see a variable in an answer choice or the words "must be true," your hand should already be writing down a concrete number. Together with **Backsolving**, this completes your pair of algebra-avoidance tools — backsolving tests the given answers, plugging in invents the missing inputs, and between them they defuse most of the algebra the GMAT throws at you. Next up, **Estimation** adds the third reflex: knowing when the answer choices are spread far enough apart that you can ballpark instead of compute.
