---
section: Quant
topic: Plugging In Numbers
---

## Q1
**difficulty:** Easy
**type:** Problem Solving
**topic:** Plugging In Numbers

A store sells pencils at p cents each. Which of the following expressions gives the cost, in dollars, of 30 pencils?

- A) 30p
- B) 3p/10
- C) 30/p
- D) p/30
- E) 3p

**answer:** B
**hint_nudge:** Variables in the answer choices — pick a concrete value for p and compute the real cost first.
**hint_strategy:** Try p = 10 cents. Work out what 30 pencils actually cost in dollars, then test which choice produces that number.
**hint_setup:** At p = 10, thirty pencils cost 300 cents = 3 dollars. Plug p = 10 into each choice and keep the one that equals 3.
**explanation:** Variables in the choices means you never have to think in variables. Pick p = 10: thirty pencils cost 30 x 10 = 300 cents, which is 3 dollars. Now run p = 10 through the choices: (A) 300 — that's the cents figure, not dollars; (B) 3(10)/10 = 3 — match; (C) 30/10 = 3 — also a match, so the tame number left a tie. Plug a second value, p = 20: real cost is 600 cents = 6 dollars; (B) gives 3(20)/10 = 6 — still right; (C) gives 30/20 = 1.5 — dead. The answer is B. Algebraically, 30 pencils cost 30p cents and dollars are cents over 100, so 30p/100 = 3p/10 — but the plug-and-match route never required that conversion insight.
**fastest_path:** Set p = 10, compute the true cost in dollars (3), and match the choices; break any tie with a second value.
**common_trap:** Choosing A = 30p, the cost in cents — forgetting the stem asks for dollars.
**takeaway:** When the choices contain variables, plug one clean number, compute the real answer, and match — and when two choices tie, that's a signal to plug a second number, not to guess.
**related_reading:** quant-02-plugging-in-numbers

---

## Q2
**difficulty:** Medium
**type:** Problem Solving
**topic:** Plugging In Numbers

If x is 25 percent greater than y, then y is what percent less than x?

- A) 20%
- B) 25%
- C) 30%
- D) 75%
- E) 80%

**answer:** A
**hint_nudge:** No real numbers anywhere in the problem — so supply your own. For percent problems there is one number that makes everything clean.
**hint_strategy:** Let y = 100. Then x is forced, and "y is what percent less than x" becomes plain arithmetic.
**hint_setup:** With y = 100, x = 125. The drop from 125 down to 100 is 25 points — what percent of 125 is that?
**explanation:** Percent problems with no concrete quantities are an open invitation to plug in 100. Let y = 100; then x is 25% greater, so x = 125. The question asks what percent less y is than x: the gap is 25, measured against the starting value x = 125, so 25/125 = 1/5 = 20%. The answer is A. The trap is answering 25% — the percent change is not symmetric, because going up measures the gap against the smaller number while coming down measures the same gap against the larger one. Plugging in 100 makes that asymmetry visible as arithmetic instead of something you have to remember.
**fastest_path:** Set y = 100 so x = 125, then compute the drop as a fraction of 125: 25/125 = 20%.
**common_trap:** Picking B = 25% by assuming the percent up and the percent down are the same, when the base of the percentage has changed.
**takeaway:** Percent-of-an-unknown problems collapse when you plug in 100 — and percent changes are never symmetric, because the base shifts.
**related_reading:** quant-02-plugging-in-numbers

---

## Q3
**difficulty:** Medium
**type:** Problem Solving
**topic:** Plugging In Numbers

For which of the following questions would picking your own value for the variable NOT be a reliable way to find the answer?

- A) Which of the following expressions is equivalent to (x + 2)² − x²?
- B) If a worker earns d dollars per hour, which expression gives her pay for a 40-hour week?
- C) If n is an integer, which of the following must be odd?
- D) If 5x − 8 = 22, what is the value of x?
- E) A number x is doubled and then increased by 50 percent. The result is what multiple of x?

**answer:** D
**hint_nudge:** Plugging in your own number works when the variable is free to be anything. In one of these stems, the variable's value is already locked in.
**hint_strategy:** Look for the stem where a stated equation determines x — a number you invent has no reason to satisfy it.
**hint_setup:** In "5x − 8 = 22," x is fixed by the equation. Your own pick (say x = 2) simply makes the equation false — the right move there is solving or backsolving the choices.
**explanation:** Plugging in your own numbers requires a variable that is genuinely free. Choices A, B, and E are variables-in-the-choices problems — any clean value of x or d generates a target you can match against the choices. Choice C is a must-be-true property question, where you attack each option with adversarial cases. Choice D is different: the equation 5x − 8 = 22 determines x completely (x = 6). If you invent x = 2, the equation is simply false and tells you nothing — there is no freedom to exploit. The right tools there are solving directly or backsolving the answer choices, which is the mirror-image method: testing the test's numbers rather than your own. The answer is D.
**fastest_path:** Scan for the stem where an equation pins the variable to one value — invented numbers are useless there.
**common_trap:** Treating plugging-in and backsolving as the same move; backsolving tests the choices on a determined value, while plugging in supplies values only where the variable is free.
**takeaway:** Plug in your own numbers only when the variable is unconstrained; when an equation fixes the value, solve or backsolve instead.
**related_reading:** quant-02-plugging-in-numbers

---

## Q4
**difficulty:** Medium
**type:** Problem Solving
**topic:** Plugging In Numbers

You want to test whether the claim "n² − n is divisible by 2 for every integer n" can be broken. Which set of test values is the most efficient first probe?

- A) n = 2, 4, and 6
- B) n = 1, 3, and 5
- C) n = 2 and n = 3
- D) n = 10 and n = 100
- E) n = 7 alone

**answer:** C
**hint_nudge:** Divisibility by 2 is a parity question. How many genuinely different kinds of integer are there for parity?
**hint_strategy:** Testing three even numbers re-runs the same case three times. You want each test value to probe a different way the claim could fail.
**hint_setup:** One even value and one odd value cover both parity cases in two checks. Which option does that?
**explanation:** For a parity claim there are exactly two kinds of integer — even and odd — so an efficient probe tests one of each. Option C, n = 2 and n = 3, does it in two plugs: 4 − 2 = 2 (even) and 9 − 3 = 6 (even). Options A, B, D, and E test only one parity (all even, all odd, both even, one odd), so they re-run the same case and can never expose a failure that lives in the other case. The answer is C. The claim itself happens to be true — n² − n = n(n − 1) is a product of consecutive integers, one of which is always even — but the skill being tested is choosing stress cases that each attack a different failure mode rather than piling up redundant confirmations.
**fastest_path:** Pick the option whose values differ in the property under test — one even, one odd.
**common_trap:** Confusing many tests with good tests: three same-parity values (A or B) feel thorough but probe only one case.
**takeaway:** In break-it mode, choose each test number to attack a different failure mode — vary parity, sign, and size instead of repeating the same kind of number.
**related_reading:** quant-02-plugging-in-numbers

---

## Q5
**difficulty:** Medium
**type:** Problem Solving
**topic:** Plugging In Numbers

On a variables-in-the-choices problem, you plug in x = 2, compute the target value, and find that two answer choices both match it. What is the right next move?

- A) Pick whichever of the two choices looks algebraically simpler
- B) Pick the first of the two in answer-choice order
- C) Plug a second, structurally different number (a negative or a fraction) into just those two choices
- D) Abandon the method and redo the problem with algebra from scratch
- E) Plug x = 2 into all five choices again to check for arithmetic errors

**answer:** C
**hint_nudge:** Two survivors doesn't mean the method failed — it means your number was too tame to separate them.
**hint_strategy:** The two choices agree at x = 2 but are different expressions, so they must disagree somewhere. Choose a number with different behavior — negative, fractional — and only the truly equivalent one will still match.
**hint_setup:** Re-compute the target with something like x = −3 or x = 1/2, then test only the two surviving choices against it.
**explanation:** Two different expressions can coincide at a tame value — x = 2 makes 3x and x² + 2 both equal 6 — but distinct expressions cannot agree everywhere. So a tie is a signal to plug again with a structurally different number, not to guess or to start over. Option C is exactly that: re-run the target with a negative or a fraction and test only the two survivors; one of them will break. Options A and B decide by superstition; D throws away correct work the method has already done (three choices are legitimately dead); E re-checks arithmetic that produced a consistent result and will just reproduce the tie. The answer is C. Choosing a "weirder" second number matters: a negative flips sign-sensitive terms and a fraction separates x from x², which is usually where the survivors differ.
**fastest_path:** Keep the three eliminations, re-plug one adversarial value (negative or fraction), and test only the two survivors.
**common_trap:** Treating a two-way tie as the method failing (option D) and burning a minute redoing algebra, when one more ten-second plug settles it.
**takeaway:** When two choices survive a plug, your number was too friendly — escalate to a negative or a fraction and let it break the tie.
**related_reading:** quant-02-plugging-in-numbers

---

## Q6
**difficulty:** Easy
**type:** Problem Solving
**topic:** Plugging In Numbers

A car travels m miles in h hours. Which of the following expressions gives its average speed in miles per minute?

- A) m/h
- B) m/(60h)
- C) 60m/h
- D) 60h/m
- E) mh/60

**answer:** B
**hint_nudge:** Variables in the choices — invent easy numbers for m and h and compute the real speed per minute first.
**hint_strategy:** Pick m = 120 and h = 2. Work out the miles-per-minute figure directly, then match the choices.
**hint_setup:** 120 miles in 2 hours is 120 miles in 120 minutes — exactly 1 mile per minute. Which choice equals 1 when m = 120, h = 2?
**explanation:** Plug m = 120 miles and h = 2 hours. That's 120 miles in 120 minutes, so the true speed is exactly 1 mile per minute. Now test the choices at m = 120, h = 2: (A) 60 — miles per hour, not per minute; (B) 120/120 = 1 — match; (C) 3,600 — multiplied where you should divide; (D) 1 — also a match at these values, so break the tie: try m = 60, h = 1. True speed: 60 miles in 60 minutes = 1 mile per minute again — unlucky, these numbers also collide. Go uglier: m = 60, h = 2 gives a true speed of 60 miles per 120 minutes = 0.5; (B) gives 60/120 = 0.5 — right; (D) gives 120/60 = 2 — dead. The answer is B. Units logic confirms it: per-minute speed must be the per-hour speed m/h shrunk by 60.
**fastest_path:** Plug numbers where hours convert to minutes cleanly, compute miles per minute, and match; escalate to a second pair if two choices tie.
**common_trap:** Picking C = 60m/h by multiplying by 60 — converting the wrong way, since a minute is a shorter time and the per-minute figure must be smaller.
**takeaway:** Unit-conversion expressions are prime plug-in territory: concrete numbers make "should this be 60 times bigger or smaller" a fact you observe instead of a rule you recall.
**related_reading:** quant-02-plugging-in-numbers

---

## Q7
**difficulty:** Easy
**type:** Problem Solving
**topic:** Plugging In Numbers

After a 20 percent discount, a shirt sells for d dollars. Which of the following gives the original price, in dollars?

- A) 0.80d
- B) 1.20d
- C) 1.25d
- D) 1.80d
- E) d − 0.20

**answer:** C
**hint_nudge:** Make up the original price first, then see what d becomes — don't start from d.
**hint_strategy:** Let the original price be 100. A 20% discount makes d = 80. Now test which choice turns 80 back into 100.
**hint_setup:** With d = 80, check each choice: 0.80(80), 1.20(80), 1.25(80), and so on. The right one returns exactly 100.
**explanation:** Invent the original price: 100 dollars. After a 20% discount, the shirt sells for d = 80. The correct expression must turn 80 back into 100. Test: (A) 0.80(80) = 64 — discounted twice; (B) 1.20(80) = 96 — close, but not 100; (C) 1.25(80) = 100 — match. The answer is C. Choice B is the engineered trap: undoing "down 20%" is not "up 20%," because the 20% now acts on the smaller number. The real inverse of multiplying by 0.8 is dividing by 0.8, and 1/0.8 = 1.25. Plugging in 100 exposes that in one line of arithmetic, with no formula to misremember.
**fastest_path:** Set the original at 100 so d = 80, then keep the choice that maps 80 back to 100.
**common_trap:** Choosing B = 1.20d — adding 20% back, when the discount was 20% of the larger original, not of the sale price.
**takeaway:** To reverse a percent change, divide by the multiplier instead of adding the percent back — and plugging in 100 proves it faster than recalling the rule.
**related_reading:** quant-02-plugging-in-numbers

---

## Q8
**difficulty:** Medium
**type:** Problem Solving
**topic:** Plugging In Numbers

If x is not zero, then (x + 1/x)² − (x − 1/x)² =

- A) 0
- B) 2
- C) 4
- D) 2x²
- E) 4x²

**answer:** C
**hint_nudge:** Before expanding anything, try a single concrete value of x and see what the expression actually equals.
**hint_strategy:** Pick x = 2. Compute both squares numerically, subtract, and compare against the choices — note that a constant answer and an x-dependent answer give different values at x = 2.
**hint_setup:** At x = 2: x + 1/x = 2.5 and x − 1/x = 1.5. Evaluate 2.5² − 1.5², then check which choices equal that number when x = 2.
**explanation:** Plug x = 2: then x + 1/x = 2.5 and x − 1/x = 1.5, so the expression is 6.25 − 2.25 = 4. Check the choices at x = 2: (A) 0, (B) 2, (C) 4 — match; (D) 2x² = 8, (E) 4x² = 16. Only C survives, and the answer is C. One concrete value settled what expanding two binomial squares would have taken several lines to show: (x² + 2 + 1/x²) − (x² − 2 + 1/x²) = 4, with the x² terms cancelling. If you'd worried the match was a coincidence, a second plug (x = 3 gives (10/3)² − (8/3)² = 36/9 = 4) confirms the expression is the constant 4 for every x — which also kills D and E on sight, since they change with x.
**fastest_path:** Evaluate the whole expression at x = 2 and match against the choices evaluated at x = 2.
**common_trap:** Expanding both squares by hand and dropping a sign on the middle term, landing on 0 or 2x² instead of letting the cross-terms add to 4.
**takeaway:** When an algebraic expression looks expansion-heavy, one concrete value reveals the answer's shape — and instantly distinguishes constant answers from variable-dependent ones.
**related_reading:** quant-02-plugging-in-numbers

---

## Q9
**difficulty:** Medium
**type:** Problem Solving
**topic:** Plugging In Numbers

A quantity is increased by 30 percent, and the result is then decreased by 30 percent. The final quantity is

- A) 9% less than the original
- B) 1% less than the original
- C) equal to the original
- D) 1% more than the original
- E) 9% more than the original

**answer:** A
**hint_nudge:** Don't reason it out in your head — run the two changes on a concrete starting number.
**hint_strategy:** Start at 100. Apply the 30% increase, then take 30% of that new, larger number away.
**hint_setup:** 100 grows to 130. The decrease is 30% of 130, not 30% of 100 — subtract it and compare the result to 100.
**explanation:** Start at 100. Up 30%: 130. Now down 30% — of 130, the current value: 130 − 39 = 91. The final quantity is 91, which is 9% less than the original 100. The answer is A. The trap answer is C: up-then-down by the same percent feels like it should cancel, but the decrease acts on a larger base than the increase did, so it removes more than the increase added. Plugging in 100 turns that subtlety into two lines of arithmetic. The general pattern — up p% then down p% lands at a p²/100 percent net loss (here 30²/100 = 9) — is worth knowing, but the concrete plug derives it on the spot whenever memory wobbles.
**fastest_path:** Run 100 through both changes: 100 to 130 to 91, a 9% net loss.
**common_trap:** Choosing C on the intuition that +30% and −30% cancel, ignoring that the percentages act on different bases.
**takeaway:** Successive percent changes never cancel by symmetry — plug in 100 and let the shifting base show itself as plain arithmetic.
**related_reading:** quant-02-plugging-in-numbers

---

## Q10
**difficulty:** Medium
**type:** Problem Solving
**topic:** Plugging In Numbers

When the positive integer k is divided by 7, the remainder is 3. What is the remainder when 3k + 2 is divided by 7?

- A) 1
- B) 2
- C) 3
- D) 4
- E) 5

**answer:** D
**hint_nudge:** Don't reason abstractly about remainders — build a concrete k that fits the condition and run it through.
**hint_strategy:** The smallest k with remainder 3 on division by 7 is k = 3 itself. Compute 3k + 2 and divide by 7; verify with a second k like 10.
**hint_setup:** With k = 3: 3k + 2 = 11, and 11 divided by 7 leaves remainder 4. Confirm with k = 10: 3(10) + 2 = 32 = 28 + 4.
**explanation:** Remainder conditions hand you a family of legal numbers — pick the smallest. k = 3 leaves remainder 3 when divided by 7 (it is 0 sevens plus 3). Then 3k + 2 = 11 = 7 + 4, remainder 4. One more plug to be safe, since remainder behavior should be checked on a second representative: k = 10 gives 3k + 2 = 32 = 4(7) + 4 — remainder 4 again. The answer is D. The abstract route — k = 7q + 3, so 3k + 2 = 21q + 11 = 7(3q + 1) + 4 — proves the pattern holds for every legal k, but the two concrete plugs reach the same certainty in a fraction of the time, because remainders on a fixed divisor repeat identically across the whole family.
**fastest_path:** Use k = 3, the smallest legal value, compute 3k + 2 = 11, and read off remainder 4; confirm once with k = 10.
**common_trap:** Forgetting that k = 3 itself satisfies the condition and starting from k = 10, or slipping to C = 3 by reporting k's own remainder instead of the transformed quantity's.
**takeaway:** Remainder problems are plug-in problems in disguise: test the smallest legal value, confirm with one more, and trust the pattern — remainders repeat across the whole family.
**related_reading:** quant-02-plugging-in-numbers
