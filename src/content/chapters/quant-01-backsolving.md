---
slug: quant-01-backsolving
title: "Method: Backsolving — Test the Answers, Skip the Algebra"
section: Quant
estimated_minutes: 12
prerequisites: []
summary: |
  The first move in your Problem Solving toolkit. When the choices are numbers and one unknown is in play, you stop deriving the answer and start testing which choice survives. Faster than algebra, and immune to algebra mistakes.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Before the lesson, find a "what is the value of x" Problem Solving question and resist the urge to set up an equation. Just plug the middle answer choice into the problem and see what happens. Hold that experience in mind — the chapter explains why it so often beats the algebra.
  - id: why-backsolving
    type: reading
    title: "Why backsolving wins"
    check_question_ids: []
  - id: median-first
    type: reading
    title: "The median-first method"
    check_question_ids: []
  - id: pattern-library
    type: reading
    title: "Four shapes, one move"
    check_question_ids: []
  - id: when-it-breaks
    type: reading
    title: "When backsolving breaks"
    check_question_ids: []
  - id: summary
    type: summary
    title: "Lock it in"
    check_question_ids: []
problem_sets:
---

## @why-backsolving

Most test-takers treat the five answer choices as scenery — something to glance at only after the algebra is done. That instinct quietly costs them points. On a "what is the value of x" Problem Solving question, the choices are not decoration. They are five candidate answers, and the test has certified that **exactly one of them is correct**. Your job is no longer to *derive* the answer; it is to *test which given number survives*. That shift — from producing the answer to auditing five suspects — is the whole method, and it is almost always faster and more reliable than symbol-pushing.

**By the end of this chapter you will be able to:**

- Recognize, in under five seconds, when a problem is built for backsolving.
- Use the middle choice to cut five options down to one or two in a single test.
- Apply the move across equations, word problems, number properties, and rates.
- Name the three situations where backsolving fails — and switch methods before you waste a guess.

**Mental model.** Picture the five choices as a sorted lineup of suspects, and you are the bouncer who already knows the culprit is in the room. GMAT numeric answers are listed in order — ascending or descending — so the middle choice splits the lineup cleanly in half. You test one suspect; the result tells you which half of the room is innocent. You are not solving a crime from scratch. You are running an alibi check, and the test already guaranteed one alibi is a lie.

The reason this is worth a dedicated chapter — the very first in the Quant track — is leverage. Backsolving is bulletproof against the exact failures that sink careless scorers: a dropped negative, a flipped fraction, a mis-distributed parenthesis. When you plug a *known* number into the problem and check it against the stated condition, there is no algebra left to botch. You are doing arithmetic on a concrete value, not steering symbols through three error-prone steps.

> **Recall check.** What is the one question your work answers when you backsolve — and how is it different from the question algebra answers? (Backsolving answers "does this specific number satisfy the condition?" Algebra answers "what is the number?" Verification is cheaper and safer than derivation.)

## @median-first

Here is the engine. When the choices are sorted numbers and a larger input pushes the result reliably in one direction — what we will call a **monotonic** relationship — you never test more than twice.

**Start at the median choice.** Plug it into the problem and read the result against what the stem demands:

- If it comes out **exactly right**, you are done on the first test.
- If it comes out **too big**, every choice on the large side dies with it — kill it and everything above.
- If it comes out **too small**, the small side dies — kill it and everything below.

One smart test collapses five options to two. A second test on either survivor finishes the job. **Worst case: two plug-ins.** That guarantee is why you always enter through the middle — the median is the only choice that splits the field evenly, so it extracts the most information per test.

**Worked example.** *If x² − 3x = 28 and x > 0, what is x?* Choices: (A) 4 (B) 5 (C) 7 (D) 8 (E) 9. Start at the median, x = 7: `49 − 21 = 28`. Exact on the first test — **answer (C)**. Notice everything you skipped: you never moved the 28 across, never factored `x² − 3x − 28` into `(x − 7)(x + 4)`, never had to discard a negative root. The `x > 0` condition that would trip a careless algebraist is irrelevant here, because every listed choice is already positive.

**Worked example.** *A number n satisfies `2n + (n + 6)/3 = 23`. What is n?* Choices: (A) 5 (B) 6 (C) 7 (D) 8 (E) 9. The fraction makes the algebra annoying, so test the median, n = 7: `14 + (13)/3 = 14 + 4.33 = 18.33`. **Too small** — and since raising n only raises the left side, n = 5, 6, and 7 all die at once. Two survivors remain: 8 and 9. Test one of them, n = 8: `16 + (14)/3 = 16 + 4.67 = 20.67`. Still short of 23, so 8 dies too — which leaves exactly one choice standing. **Answer (E), n = 9**, and a half-second check confirms it: `18 + 15/3 = 18 + 5 = 23`. Two plug-ins, no equation solved, no fraction cleared. The direction of each miss did the eliminating for you.

> **Self-explanation prompt.** Why does starting at the median guarantee at most two tests for a monotonic relationship? (Because one test of the middle partitions an ordered list into a ruled-out half and a surviving half of at most two; the second test distinguishes those two. Starting at an end choice throws that efficiency away.)

## @pattern-library

Backsolving is not just for equations. The instant a problem fits the left column below, reach for it.

| Use backsolving when… | Why it works |
|---|---|
| The stem asks "what is the value of x / n / the price / the speed" | The choices *are* candidate values you can test directly |
| Answer choices are **numeric and sortable** | Median-choice elimination halves the field per test |
| There is **one unknown** and a **checkable condition** | You verify a guess by plugging it back in |
| The algebra is **ugly** — quadratics, nested fractions, messy setups | Arithmetic on a known number beats symbolic manipulation |
| A word problem hides a clean equation behind heavy phrasing | Skip the translation; test the number against the words |

**Worked example.** *(Word problem.)* A store sells pens at one price and pencils at half that price. Marco buys 3 pens and 4 pencils for $20. What is the price of one pen? Choices: (A) $3 (B) $4 (C) $5 (D) $6 (E) $8. Test the median, pen = $5, pencil = $2.50: `3(5) + 4(2.50) = 15 + 10 = $25`. **Too big** — kill C, D, and E in one stroke, since a higher pen price only lifts the total. Test B, pen = $4, pencil = $2: `12 + 8 = $20`. Exact. **Answer (B).** You never wrote `3p + 4(p/2) = 20`; you read the sentence and tested numbers against it.

**Worked example.** *(Number properties.)* The sum of three consecutive even integers is 78. What is the largest? Choices: (A) 24 (B) 26 (C) 28 (D) 30 (E) 32. Let the largest be the median, 28: then the three are 24, 26, 28, summing to 78. Exact on the first try — **answer (C)**. "Consecutive," "divisible by," "remainder," and "largest such" stems are prime backsolving territory, because each choice is instantly checkable against the stated property with no equation at all.

**Worked example.** *(Work rate.)* A pool fills in 6 hours through pipe A alone. With pipe B also open it fills in 4 hours. How many hours would pipe B take alone? Choices: (A) 8 (B) 10 (C) 12 (D) 14 (E) 16. Test the median, B = 12: combined rate `= 1/6 + 1/12 = 2/12 + 1/12 = 3/12 = 1/4` pool per hour, which fills in exactly 4 hours. Exact — **answer (C)**. You never solved `1/6 + 1/b = 1/4` for b; you let the choice *be* b and checked the combined rate against the stated 4 hours.

**Speed tip.** When you have to test a second choice, don't restart from zero — reuse the work. If the median overshot the target by a little, the answer is the *adjacent* choice on the small side, not the far end. Trust the size of the miss: a small overshoot points to the neighbor, a huge overshoot points further down the list. That read often lets you skip straight to the correct choice and confirm it in one test.

## @when-it-breaks

A method you reach for blindly becomes a trap of its own. Backsolving has a precise domain, and stepping outside it wastes the very time the method is supposed to save.

**Trap to watch.** Backsolving **breaks when the choices are not concrete numbers you can test.** Do not reach for it when:

- Answers are **variable expressions** — `3k`, `x + 2`, `n/4`. There is nothing fixed to plug back and verify.
- The stem says **"must be true"** or **"could be true."** These demand reasoning over *every* case; a number that works for your guess may fail for another, so confirming one value proves nothing.
- Choices are **non-numeric or non-sortable** — Roman-numeral combinations, "cannot be determined," bare ratios like 2 : 3 with no unit. Too-big / too-small has nothing to bite on.
- The relationship is **not monotonic.** If a larger choice doesn't push the condition reliably in one direction, half-elimination fails — test choices individually or solve directly.

**Trap to watch.** Even when backsolving fits, **answer the stem's exact ask.** If the problem defines x but asks for `x + 1` or `2x`, the choices describe the *transformed* quantity. Back out the underlying value each choice implies before you plug, or solve for x first and then transform. The method rewards precision, not speed alone — a fast plug-in of the wrong quantity is just a confident wrong answer.

**Micro-drill.** For each, decide whether to backsolve, and if so, which choices die after one median test. Aim for under 60 seconds total.

1. "If `4(x − 1) = 2x + 6`, what is x?" Choices: 5, 6, 7, 8, 9. You test the median, 7, and the left side comes out **larger** than the right. Which choices survive? → ___
2. "Which of the following could be the remainder when a prime greater than 5 is divided by 6?" Choices give Roman-numeral combinations. Backsolve or not? → ___
3. "The value of `n` satisfies `n² + n = 56`, `n > 0`." Choices: 5, 6, 7, 8, 9. Test the median — does it land? → ___

Answers: (1) **5 and 6 survive.** A bigger x makes `4(x − 1)` grow faster than `2x + 6`, so if 7 already overshoots (`24 > 20`), 8 and 9 overshoot worse — kill 7, 8, 9. Testing 6 still overshoots (`20 > 18`), so the answer is **x = 5** (`16 = 16`). (2) **Do not backsolve** — a Roman-numeral "could be true" stem requires reasoning over every case, not testing one number. (3) **Yes — test 7:** `49 + 7 = 56`. Exact on the first test. **n = 7.**

> **Recall check.** Name the three signals that tell you to *abandon* backsolving the moment you see them. (Variable-expression answers; "must be true" / "could be true" phrasing; non-numeric or non-monotonic choices.)

## @summary

You came in treating the answer choices as scenery. You leave knowing they are five free guesses with one certified winner — and that on the right problem, finding the winner is faster than deriving it.

**Takeaway.** Backsolving converts a two-minute derivation into a thirty-second confirmation whenever three conditions line up: a **single unknown**, **sortable numeric choices**, and a **checkable condition**. Enter through the median, let the direction of the miss steer you, and finish in at most two tests.

The three-step loop, every time:

1. **Spot the fit.** "What is the value of…?" plus numeric, sorted choices and ugly algebra? Backsolve.
2. **Test the median.** Exact means done. Too big or too small kills that entire half of the list.
3. **Confirm a survivor.** One more test on the remaining side names the answer — or the size of the first miss points you straight to it.

And know the exits cold: variable-expression answers, "must / could be true" stems, and non-monotonic or non-numeric choices all mean *switch methods now* rather than burn a plug-in.

**What to do next.** This is the first method in the Quant track for a reason — it changes how you read every Problem Solving question that follows. Use the buttons below to drill it under time pressure in a Quant practice set, then move on to **Method: Plugging In Numbers**, the companion move for problems whose answers are variable expressions — exactly the case where backsolving steps aside.

> **Self-explanation prompt.** In one sentence, explain to a friend why backsolving is safer than algebra on an ugly equation. If you can say "because checking whether a known number works has no error-prone steps to drop, while deriving the number does," the method is yours.
