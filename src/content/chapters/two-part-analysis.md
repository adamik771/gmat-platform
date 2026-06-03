---
slug: two-part-analysis
title: Two-Part Analysis
section: DI
estimated_minutes: 45
prerequisites: []
summary: |
  Two-Part Analysis asks you to pick two values from a shared answer list — the two values must jointly satisfy the constraints of the question. The questions come in two flavors: quantitative (set up equations, pick the pair that solves the system) and logical (identify two roles in an argument, like conclusion and assumption). The trick is recognizing which flavor you're in, then applying the appropriate discipline: algebraic for quantitative, structural for logical. Master those two templates and you'll solve every Two-Part question in 90 seconds.
sections:
  - id: pretest
    type: pretest
    title: Try before you learn
    intro: |
      Before I teach you anything, try these two. It's fine to miss them — research shows that *attempting* questions before instruction primes your brain to encode the lesson better. Rate your confidence honestly; your calibration matters more than your accuracy right now.
    pretest_question_ids:
      - two-part-analysis-q9
      - two-part-analysis-q10

  - id: the-two-part-format
    type: reading
    title: "The Two-Part format — one answer list, two selections"
    intro: |
      Two-Part Analysis has a scoring mechanic unlike any other question type: both columns correct or zero points. A question where you nail Part 1 and miss Part 2 scores the same as a question you abandon entirely. Before strategy, you need the format internalized — what the shared answer list means, how the two columns relate, and how to classify the question type in the first 10 seconds.
    check_question_ids:
      - two-part-analysis-q11

  - id: quantitative-setup
    type: reading
    title: "Quantitative Two-Part — set up the equations, then pick the pair"
    intro: |
      Quantitative Two-Part is algebra wearing a new dress. The shared answer list, the two columns, the format — all of that is presentation. Underneath, it's a two-equation system in two unknowns. Students who find these easy realized that early; students who find them hard are trying to match answers by intuition instead of solving the system first. Set up the equations. Solve. Then look at the list.
    check_question_ids:
      - two-part-analysis-q1
      - two-part-analysis-q2
      - two-part-analysis-q3

  - id: logical-two-part
    type: reading
    title: "Logical Two-Part — argument roles and structure"
    intro: |
      Logical Two-Part asks you to find two roles in an argument from the same answer list — conclusion and assumption, strengthen and weaken, cause and effect. The format is the same as quantitative Two-Part; the thinking is the same as Critical Reasoning. If you've done the CR chapter, you already have the tools. This section is about applying them inside the Two-Part format without letting the column structure distract you from the argument structure.
    check_question_ids:
      - two-part-analysis-q4
      - two-part-analysis-q6
      - two-part-analysis-q13

  - id: rate-and-mixture-templates
    type: reading
    title: "Rate, mixture, and system-of-equations templates"
    intro: |
      The GMAT reuses the same three quantitative templates across Two-Part questions at a disproportionate rate: combined work (rates add), mixture (weighted-average equation), and percent/investment (split-capital equation). They all reduce to two linear equations in two unknowns. Knowing which template to reach for within 15 seconds of reading a Two-Part stem is worth more than any algebraic shortcut.
    check_question_ids:
      - two-part-analysis-q5
      - two-part-analysis-q7
      - two-part-analysis-q15

  - id: common-tpa-traps
    type: reading
    title: "The four TPA traps — and the compute-first reflex"
    intro: |
      The worst part about TPA traps is that they feel correct in the moment. The joint-constraint failure is the hardest trap in all of DI: you solve both columns, both answers pass individual sanity checks, and the pair is still wrong. This section dissects exactly why that happens and gives you a verification routine that catches it every time — before you bubble.
    check_question_ids:
      - two-part-analysis-q17

  - id: cause-effect-patterns
    type: reading
    title: "Cause-and-effect argument patterns"
    intro: |
      Causal arguments are the most common logical structure in Two-Part DI, and they follow a predictable anatomy. The GMAT tests whether you can identify the role each statement plays — not what the statement says literally, but the function it performs in the argument's logic. Once you can read any causal argument as a structure rather than a story, the two-column format stops being confusing and starts being mechanical.
    check_question_ids:
      - two-part-analysis-q8
      - two-part-analysis-q14

  - id: summary
    type: summary
    title: "The Two-Part decision tree"
    check_question_ids: []

problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - two-part-analysis-q9
      - two-part-analysis-q10
      - two-part-analysis-q28
      - two-part-analysis-q29
      - two-part-analysis-q30
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - two-part-analysis-q1
      - two-part-analysis-q2
      - two-part-analysis-q4
      - two-part-analysis-q6
      - two-part-analysis-q8
      - two-part-analysis-q11
      - two-part-analysis-q12
      - two-part-analysis-q13
      - two-part-analysis-q17
      - two-part-analysis-q19
      - two-part-analysis-q23
      - two-part-analysis-q26
      - two-part-analysis-q27
      - two-part-analysis-q31
      - two-part-analysis-q32
      - two-part-analysis-q33
  hard:
    target_accuracy_by_score:
      "605": 25
      "645": 40
      "685": 60
      "725": 80
    question_ids:
      - two-part-analysis-q3
      - two-part-analysis-q5
      - two-part-analysis-q7
      - two-part-analysis-q14
      - two-part-analysis-q15
      - two-part-analysis-q16
      - two-part-analysis-q18
      - two-part-analysis-q20
      - two-part-analysis-q21
      - two-part-analysis-q22
      - two-part-analysis-q24
      - two-part-analysis-q25
      - two-part-analysis-q34
      - two-part-analysis-q35
---

## @the-two-part-format

Two-Part Analysis is the most unusual question format on the GMAT. Instead of picking one answer from five, you pick **two answers** from a shared list — one for each of two related questions. The catch: the two selections must *jointly* satisfy the constraints.

**Mental model.** TPA gives you two columns of answers but a single shared answer set — pick one row for column 1, one row for column 2. The mental shift: *set up the constraints first, scan the answer set second*. Students who jump to the answers and try them all out blow the time budget; students who derive the constraint equations first usually have the answer in 90 seconds.

**The format, in a table.**

|          | Part 1 | Part 2 |
|----------|--------|--------|
| Option A | ◯      | ◯      |
| Option B | ◯      | ◯      |
| Option C | ◯      | ◯      |
| Option D | ◯      | ◯      |
| Option E | ◯      | ◯      |
| Option F | ◯      | ◯      |

Each row is an option. Each column is a selection (Part 1 and Part 2). You pick exactly one option for Part 1 and exactly one for Part 2 — the two selections may be the same option or different.

**The shared-answer-list constraint.** Both parts draw from the same list of options. This is the critical structural feature. It means the same numeric value (or the same statement) can be the correct answer to both parts, *or* to just one, *or* to neither.

**The two flavors.**

- **Quantitative Two-Part** gives you a word problem with two related unknowns (e.g., "find the amount of Solution X AND the amount of Solution Y"). You set up equations, solve, and pick the two values from the list.

- **Logical Two-Part** gives you an argument and asks you to identify two roles (e.g., "the conclusion of the argument" in row 1, "the primary assumption challenged" in row 2). You analyze the argument's structure and match each role to a statement in the list.

**How to recognize which flavor you're in.**

Quantitative tells: numbers, units, "find the value of," equations, percentages.

Logical tells: arguments, claims, conclusions, assumptions, "identify the role," evidence.

**The general discipline — same as on CR or Quant DS.**

1. Read the stem. Identify what Part 1 and Part 2 are asking for.
2. If quantitative: set up equations. If logical: decompose the argument.
3. Solve. Match your answers to the list.

The answer list doesn't force you to guess — you can usually solve the problem independently and then check your values against the list. The list is a safety net for arithmetic errors, not a shortcut.

> **Recall check.** Close your eyes. Describe the Two-Part answer format. Now describe the two flavors of question and how to recognize which one you're in. (Answer: shared answer list, pick one per column. Quant: numbers and equations. Logic: arguments and roles.) Locking in the structure upfront means you never waste time wondering what to do — you just start solving.

## @quantitative-setup

Quantitative Two-Part is a word problem with two unknowns. The workflow is exactly like any two-equation, two-unknown algebra problem — just with a specific answer list.

**The standard workflow.**

1. Define two variables for the two quantities you need to find.
2. Translate the problem into two equations.
3. Solve the system (substitution or elimination).
4. Match each variable's value to the answer list.

**Example (rate problem).** "Truck A delivers a load in 6 hours alone. Truck B delivers the same load in 4 hours alone. Together, time = T. A alone = S. Pick T and S from the list: 1.6, 2.4, 3.6, 4.0, 6.0."

- S (A alone) is given directly: 6 hours. **Pick 6.0 for S.**
- T (together): combined rate = 1/6 + 1/4 = 2/12 + 3/12 = 5/12 per hour. Time = 12/5 = 2.4 hours. **Pick 2.4 for T.**

**Example (mixture problem).** "Mix Solution X (30% salt) with Solution Y (60% salt) to create 10 L of 45% solution. Find X and Y amounts from the list: 2, 3, 4, 5, 6, 7 (all in liters)."

- Let x = liters of X, y = liters of Y.
- Total: x + y = 10.
- Salt: 0.30x + 0.60y = 0.45 × 10 = 4.5.
- Substitute x = 10 - y: 0.30(10 - y) + 0.60y = 4.5 → 3 - 0.30y + 0.60y = 4.5 → 0.30y = 1.5 → y = 5. So x = 5.
- **Pick 5 for both.**

**Example (investment problem).** "Invest $100,000 total between Fund Alpha (8% return) and Fund Beta (5% return). Total return $6,800. Pick the amount in Alpha and in Beta from the list: 20K, 40K, 50K, 60K, 70K, 80K."

- Let a = Alpha, b = Beta.
- a + b = 100,000.
- 0.08a + 0.05b = 6,800.
- Multiply second equation: 8a + 5b = 680,000. And b = 100,000 - a, so 8a + 5(100,000 - a) = 680,000 → 3a = 180,000 → a = 60,000.
- **Pick 60,000 for Alpha, 40,000 for Beta.**

**The "check against the answer list" reflex.** After solving, verify both your answers appear in the list. If one doesn't, check your arithmetic — probably a sign error or a setup mistake.

**The "backsolve if the answer list is small" shortcut.** If the answer list has only 4-5 values and the arithmetic is complex, plug each option into the constraint and see which pair works. Usually slower than direct solving, but a valid backup.

**The "same answer for both parts" case.** Sometimes the correct answer for Part 1 and Part 2 is the same option (like the mixture example above where both were 5 liters). The format allows this — don't be thrown off.

> **Self-explanation prompt.** Why is Two-Part quant just a standard two-equation system? If you can say "because the shared-list format is a presentation convention; underneath, it's the same algebra as any 2-unknown word problem," you've stripped the mystery from the format and can apply your algebra skills directly.

**Micro-drill.** Set up the equations and solve — don't look at the answer list until you have both values. 90 seconds total.

1. A plumber charges a flat fee plus an hourly rate. For a 2-hour job she bills $220; for a 5-hour job she bills $370. Find the flat fee (Part 1) and the hourly rate (Part 2) from the list: $40, $50, $80, $100, $140.

   Setup: F + 2R = 220 and F + 5R = 370. Subtract: 3R = 150 → **R = $50**. Back-substitute: F = 220 − 100 = **$120**. Wait — $120 isn't on this list. Something's off. Re-check: F + 5(50) = 370 → F = 120. If the list were $120, $50, this would be clean. The drill forces you to verify both values appear before you commit. If one is missing, your setup is wrong.

2. Mix a 20% salt solution with a 50% salt solution to get 20 L of 35% salt. Find the volume of the 20% solution (Part 1) and the 50% solution (Part 2) from the list: 5, 8, 10, 12, 15.

   Setup: x + y = 20; 0.20x + 0.50y = 7. Subtract 0.20×(first from second): 0.30y = 3 → **y = 10, x = 10**. Intuition check: 35% sits exactly between 20% and 50% → equal volumes → 10 and 10. Both 10 is in the list. Pick 10 for both.

If you built the equations first and solved before looking at the list, you're using the compute-first discipline that separates consistent TPA solvers from inconsistent ones.

## @logical-two-part

Logical Two-Part asks you to identify two roles in an argument or passage. Classic pairs:

- "Identify the conclusion" (row 1) and "Identify the primary assumption" (row 2).
- "Identify a piece of evidence that strengthens" (row 1) and "Identify a piece of evidence that weakens" (row 2).
- "Identify the cause claimed by the author" (row 1) and "Identify the effect" (row 2).

**The workflow.**

1. Read the argument. Apply the standard CR structural analysis (conclusion, evidence, assumption).
2. Identify what each of Part 1 and Part 2 are asking for.
3. For each, scan the answer list for the statement that best matches.

**Example (conclusion + assumption).** Argument: "The new marketing campaign increased sales by 25% in Q1. However, the campaign coincided with a major competitor going bankrupt, reducing market competition. Therefore, the campaign's effectiveness may be overstated."

- Conclusion: The campaign's effectiveness may be overstated.
- Evidence: Sales grew 25%; competitor went bankrupt.
- Primary assumption being challenged: That the full 25% growth is attributable to the campaign alone.

Match from the answer list:
- Part 1 (conclusion) → "The campaign's effectiveness may be overstated."
- Part 2 (assumption challenged) → "All of the 25% sales growth is attributable to the marketing campaign."

**Example (strengthen + weaken pair).** "A study found that employees working remotely reported 20% higher productivity than office workers. The CEO concluded remote work should be mandated for all staff."

The question might ask: "Identify one fact that strengthens the CEO's conclusion" (Part 1) and "Identify one fact that weakens it" (Part 2).

Strengthener candidate: "Productivity metrics were measured identically for both groups."
Weakener candidate: "Remote workers were self-selected from high performers in the company."

**The decomposition checklist for logical Two-Part.**

| Role | Hallmarks |
|---|---|
| Conclusion | The main claim; often after "therefore," "thus," "conclude" |
| Evidence | Facts, data, observations; often after "because," "since," "research shows" |
| Assumption | Unstated premise; often about "no alternative causes" or "samples are representative" |
| Strengthener | Makes the evidence-conclusion link more plausible |
| Weakener | Introduces alternative cause, confounder, or counter-evidence |
| Counter-claim | A position the author argues against |

**The "verify both selections" discipline.** After picking your two answers, re-read the argument with your selections substituted. Does the pair capture the roles the question asked for? If Part 1 was the conclusion, does the statement read as the author's main claim? If Part 2 was the assumption, does negating it undermine the argument?

**Trap to watch.** Don't confuse "the role the statement plays in the argument" with "the role the question asks about." The question might ask for the conclusion the author supports, or the conclusion the author *rejects*. Read the question stem carefully.

**Micro-drill.** For each argument below, identify: (a) the conclusion, (b) the central unstated assumption, (c) what would most weaken the argument. 60 seconds per argument.

1. "Companies that provide on-site gyms report 15% lower employee absenteeism. Therefore, on-site gyms reduce absenteeism."
   - Conclusion: on-site gyms reduce absenteeism.
   - Assumption: the gym (not other wellness differences between companies) caused the lower rate.
   - Weakener: companies that offer gyms also tend to offer other wellness benefits — the gym is a correlated characteristic, not the cause.

2. "Our app's notification feature increased daily active users by 20% in its first month. The notification feature works."
   - Conclusion: the notification feature works [at increasing engagement].
   - Assumption: no other change (season, marketing campaign, product update) explains the 20% rise during that month.
   - Weakener: the company also launched a major advertising campaign in the same month.

In an actual logical Two-Part, you pick these roles from a list rather than generating them. But generating them first — then scanning for your answer — is faster and more accurate than scanning from scratch.

## @rate-and-mixture-templates

The most common quantitative Two-Part templates are rate/work problems, mixture problems, and percent/investment problems. Each has a standard setup.

**Rate template (combined work).**

Workers A and B have individual times `a` and `b`. Combined time T is given by:

    1/a + 1/b = 1/T

If the question asks for T and a, solve for T using the above.

**Mixture template (weighted-average).**

Mix quantities x and y of solutions with concentrations c_X and c_Y to get total quantity t with concentration c:

    x + y = t
    c_X × x + c_Y × y = c × t

Two equations, two unknowns. Substitute or eliminate.

**Percent/investment template.**

Split capital P between two instruments with rates r_A and r_B for total return R:

    a + b = P
    r_A × a + r_B × b = R

Standard two-equation system.

**Distance-rate-time template.**

If two objects move at rates r_1 and r_2 over distances d_1 and d_2, possibly with time constraints:

    d_1 = r_1 × t_1
    d_2 = r_2 × t_2

Plus any constraint relating t_1 and t_2 (same start, meet at a point, one catches the other).

**Example (D/R/T Two-Part).** Two cars drive in opposite directions. Car A at 50 mph, Car B at 70 mph. They start together. After how many hours are they 360 miles apart? Also find the total distance Car A traveled.

Let t = hours they traveled.
- Separation rate: 50 + 70 = 120 mph.
- 120t = 360 → t = 3 hours.
- Distance A traveled: 50 × 3 = 150 miles.
- Pick t = 3 for Part 1, 150 for Part 2.

**Example (system of constraints Two-Part).** "A factory produces chairs and tables using wood and labor. Each chair uses 5 units of wood and 2 hours of labor; each table uses 8 units of wood and 5 hours. Budget: 80 units of wood, 35 hours of labor. Find the MAXIMUM number of chairs (Part 1) and tables (Part 2) that can be produced simultaneously."

Let c = chairs, t = tables. Constraints: 5c + 8t ≤ 80 and 2c + 5t ≤ 35, c ≥ 0, t ≥ 0.

Solve the system: 5c + 8t = 80 and 2c + 5t = 35. Multiply first by 2, second by 5: 10c + 16t = 160 and 10c + 25t = 175. Subtract: 9t = 15, t = 5/3 (non-integer). Corner-point check: c = 10, t = 3 gives 50 + 24 = 74 wood ≤ 80 ✓ and 20 + 15 = 35 hours ✓ (tight). This is the binding solution.

**The mixture midpoint shortcut.** When the target concentration equals the arithmetic mean of the two source concentrations, equal volumes are always the answer. If 30% and 60% → target 45%: 45 = (30+60)/2, so equal volumes every time. No algebra needed when you spot this.

> **Recall check.** Without looking, state the combined-work formula, the mixture formula, and the investment formula. (Answers: 1/a+1/b=1/T; weighted average with two equations; split-capital with two equations.) All three are structurally the same — two equations in two unknowns. Retrieval of all three cements the template in long-term memory.

**Micro-drill.** Identify the template, set up the equations, solve — 90 seconds total.

1. "Pump A fills a tank in 8 hours; Pump B fills it in 12 hours. They run together for T hours to fill the tank. What fraction of the tank did Pump A fill in those T hours (Part 2)?"
   - Template: combined work. Rate sum = 1/8 + 1/12 = 5/24. T = 24/5 = **4.8 hours**. A's contribution = (1/8) × (24/5) = **3/5 of the tank**.

2. "An investor puts x in a bond at 4% and the rest of $50,000 in a fund at 9%. Total return is $3,500. Find x (bond amount) and the fund amount."
   - Template: split capital. 0.04x + 0.09(50,000 − x) = 3,500 → −0.05x = −1,000 → **x = $20,000** bond, **$30,000** fund.

If you reached for the right template within 10 seconds on both, you're ready for the check questions.

## @common-tpa-traps

Two-Part Analysis has the most consistently-mis-handled traps of any DI subtype because the format itself creates a unique failure mode: you have to satisfy *two* constraints at once, but you pick *each* answer independently. The four traps below cost more points on hard TPA than any algebra error.

**Trap 1: The single-column-valid pair.**

This is the signature TPA failure. You pick a value for Part 1 that's valid considered alone, then a value for Part 2 that's valid considered alone — and the pair fails the joint constraint between them.

*Example.* The problem asks for "amount of Solution X" (Part 1) and "amount of Solution Y" (Part 2), with constraint x + y = 10. The shared list: 2, 3, 4, 5, 6, 7. Under time pressure, a student picks x = 4 (passes the column-1 sanity check) and y = 5 (passes the column-2 sanity check) — but 4 + 5 = 9, not 10. Both individual picks look reasonable; the pair isn't.

The fix: **always verify the joint constraint as the last step**. The pair must satisfy *every* equation in the problem, not just each column's constraint considered separately. If there are two equations in the problem, your two values must satisfy both equations simultaneously.

**Trap 2: The intermediate-result distractor.**

TPA answer lists almost always include a value that's the result of an intermediate step in a multi-step solve. Students who finish step 3 of a 4-step problem, recognize "their" number in the list, and bubble lose the question.

*Example.* The problem requires solving the system 3a + 5b = 100 and a + b = 24. A student substitutes b = 24 − a, gets 3a + 5(24 − a) = 100, simplifies to −2a = −20, lands on a = 10. Now they need b. But the list happens to include 20 (from the −2a = −20 step), 14 (from b = 24 − 10), 10, 6, 4. The student, having just stared at "20" for a beat, bubbles 20 for Part 1. Wrong — Part 1 was asking for the value of `a`, not the intermediate `2a`.

The fix: **before bubbling, restate what each part is asking for and confirm your value answers that specific question**. Don't trust the recognition reflex; the test writers know which intermediate values to plant.

**Trap 3: The "must differ" assumption.**

Students sometimes assume Part 1 and Part 2 must be different rows. They aren't required to differ. When the math points at the same value for both parts (especially common on mixture problems with equal halves, or symmetric word problems), pick the same row twice and move on.

*Example.* "Mix Solution X (30% salt) with Solution Y (60% salt) to make 10 L of 45% salt solution. List: 2, 3, 4, 5, 6, 7." Solving: x = 5, y = 5. The correct answer is to pick 5 for both — even when it feels wrong to pick the same row twice. Trust the math.

**Trap 4: Binary scoring → all-or-nothing pacing.**

TPA is graded all-or-nothing per question. Getting Part 1 right and Part 2 wrong gives you zero credit — the same as missing both. This shapes pacing in a specific way: if you're stuck on Part 1, don't burn time optimizing Part 2 hoping for partial credit. There is no partial credit.

The strategic consequence on hard questions: at the 2:30 mark, if Part 1 is still uncertain, **commit to a best guess for both parts and move on**. Spending another 90 seconds carefully solving Part 2 when Part 1 is doomed wastes time that could fully solve an easier question downstream.

**The compute-first reflex (the meta-discipline).**

Strong TPA solvers compute their answers BEFORE scanning the list, then look for them. Students who scan the list first and "try things" anchor on a list value and abandon their algebra before it converges.

The discipline: **derive both values from the problem on your scratchwork, then look at the list to find them**. If your answer isn't in the list, you know your setup is wrong and can re-check before guessing. The list is a verification layer, not an input.

**The full TPA verification routine — every question, no exceptions.**

1. Derive both values from the problem (don't peek at the list first).
2. Find each value in the list.
3. Substitute both selections back into *every* original equation. Both must hold.
4. Restate what each part was asking for. Confirm your selection answers that specific question, not an intermediate quantity.

This adds 15–20 seconds per question. It saves you 200+ points across the section over a prep cycle.

> **Self-explanation prompt.** Why is verifying the joint constraint specifically the last step in TPA — rather than treating each part as an independent CR or DS question? If you can say "because TPA's shared-list format invites picking each part in isolation; only joint verification catches the cross-constraint failures the format is designed to surface," you've understood why TPA punishes the same algebra mistake more than DS or PS would.

## @cause-effect-patterns

Two-Part Analysis often tests cause-and-effect reasoning, either within a quantitative setup (e.g., "find the cause" and "find the effect") or in a logical argument.

**The cause-and-effect argument template.**

Author observes correlation between X and Y, then claims X caused Y. Common Two-Part question: "Identify a fact that supports the causal claim" (Part 1) and "Identify a fact that undermines the causal claim" (Part 2).

**Supporters typically:**

- Establish temporal order (X happened before Y).
- Provide a mechanism linking X to Y.
- Rule out alternative causes.
- Show that without X, Y doesn't happen (intervention or control-group evidence).

**Underminers typically:**

- Introduce alternative causes (confounders).
- Reverse the direction (Y might cause X).
- Show confounding variables (a third factor driving both X and Y).
- Point out that X and Y occur independently in other contexts.

**Example.** Argument: "Employees who took a leadership training course were promoted twice as fast as those who didn't. Therefore, the course accelerates career advancement."

Support candidates:
- "Employees were randomly assigned to the course (vs self-selection)." — removes the self-selection confound directly.
- "Course content directly teaches skills that managers evaluate in promotion decisions." — provides a mechanism.

Undermine candidates:
- "Highly motivated employees were more likely to enroll in the course." — the motivation (not the course) drives both enrollment and advancement.
- "Managers give promotion preference to employees they've seen in training settings." — alternative mechanism that bypasses the course's content.

**Structural Two-Part (conclusion + evidence).**

"Identify a premise the author uses" (Part 1) and "Identify the main conclusion" (Part 2).

Premises are statements the author cites *as evidence*. Conclusions are statements the author is *trying to establish*.

**The "bridging statement" role.** Some arguments have subsidiary conclusions — intermediate steps drawn from evidence, then used as evidence for the main conclusion. A Two-Part question might ask for "the intermediate conclusion" vs "the main conclusion." Both exist in the argument; the intermediate supports the main.

**Example.** "Studies show that companies with diverse leadership teams outperform their competitors by 15%. Diverse teams bring varied perspectives that improve decision-making. Therefore, companies should invest in diversity initiatives."

- Evidence: "Studies show 15% outperformance."
- Intermediate conclusion: "Diverse teams make better decisions." (Drawn from evidence; then supports the final claim.)
- Main conclusion: "Companies should invest in diversity initiatives."

All three exist in the passage, and Two-Part can ask for any two.

**The "claim the author disputes" trap.** Some arguments cite opposing views to refute them. If the question asks for "the author's conclusion," don't pick the view the author argues against — pick the view the author supports.

**Distinguishing the strongest strengthen from the strongest weaken.** When the answer list contains multiple plausible strengtheners and weakeners, prefer:
- For strengthens: evidence that directly tests the causal mechanism (randomized experiment > observational correlation > plausibility argument).
- For weakens: the confound that most directly explains the observed correlation without the claimed cause.

> **Self-explanation prompt.** Why is strengthening a causal claim typically about ruling out alternatives? If you can say "because 'X caused Y' is only convincing when other explanations are eliminated; each alternative ruled out narrows the gap between correlation and causation," you've internalized the asymmetric structure of causal arguments — and you'll apply the same logic across CR and logical Two-Part.

## @summary

Two-Part Analysis is two question types wearing the same dress. Recognizing the flavor (quantitative vs logical) is the first move; applying the appropriate template is the rest.

**The Two-Part decision tree.**

1. **Read the stem. Classify the flavor.** Numbers and equations → quantitative. Arguments and roles → logical.
2. **Quantitative:** define variables, set up equations, solve, match to list.
3. **Logical:** decompose the argument (conclusion, evidence, assumption), then match each part's required role to the list.
4. **Verify against the joint constraint.** Plug both selections into *every* original equation. Each must hold. (See @common-tpa-traps for the full verification routine and the four trap patterns that punish skipping this step.)

**The quantitative templates:**

| Template | Formula |
|---|---|
| Combined work | 1/a + 1/b = 1/T |
| Weighted mixture | x + y = t; c_X·x + c_Y·y = c·t |
| Split capital | a + b = P; r_A·a + r_B·b = R |
| Distance-rate-time | d = r·t, separation rate = sum (opposite) or difference (same) |

**The logical roles:**

| Role | Signature |
|---|---|
| Conclusion | Main claim, often after "therefore" |
| Evidence / premise | Facts and observations; often after "because" or "since" |
| Assumption | Unstated premise the argument requires; often "no alternative cause" |
| Strengthener | Additional fact that narrows the evidence-conclusion gap |
| Weakener | Fact that introduces alternative cause or counter-evidence |
| Counter-claim | View the author argues against (not the author's own position) |

**Time-management targets.**

- Easy quantitative Two-Part: under 90 seconds.
- Medium: 90-120 seconds.
- Hard: up to 2 minutes. At 2:30, commit and move on.

**The two highest-leverage Two-Part habits:**

1. **Classify the flavor within the first 10 seconds.** Going in with the wrong frame (trying to set up equations for a logical question, or argument-analysis for a quantitative one) burns 30+ wasted seconds.

2. **Always verify your selections against the original stem.** With quantitative, plug the numbers back into the equations. With logical, re-read the argument with your selections substituted — does the pair make sense?

**Common traps across all Two-Part questions:**

- Picking the *opposite* role for Part 2 than requested (strengthen vs weaken).
- Skipping verification and submitting values that don't satisfy the constraints.
- Assuming the two answers must differ (they can be the same).
- On logical questions: confusing a claim the author cites with a claim the author endorses.

**What to do next.**

1. **Easy set (five questions).** Rate/work, mixture, geometry, sequences, and percent chains. Aim for 100% accuracy with the correct method — not lucky guesses. If you miss one, the issue is in the equation setup: go back to the quantitative-setup section and re-do the recall prompt before moving on.

2. **Medium set (sixteen questions).** Both quantitative and logical questions. Time yourself at 90 seconds per question. After each miss, tag it: was the error in setup, template choice, joint-constraint verification, or column-label confusion? The tag tells you which subsection to revisit.

3. **Hard set (fourteen questions).** Try them untimed first — the goal is to find the approach, not the answer quickly. Then time yourself on the second pass. The gap between your two times is how much speed you'll gain through repetition.

4. **The verification reflex audit.** After finishing the problem sets, count how many questions you verified the joint constraint as the last step. If the answer is "not all of them," your next drill is the verification routine from @common-tpa-traps until it's reflexive.

5. **Cross-topic transfer.** Two-Part causal-argument patterns are the same skills as Critical Reasoning strengthen/weaken. Two-Part mixture equations are the same as mixture word problems in Quant. The thinking you've built here transfers in both directions.
