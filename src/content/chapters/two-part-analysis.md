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
    check_question_ids:
      - two-part-analysis-q11

  - id: quantitative-setup
    type: reading
    title: "Quantitative Two-Part — set up the equations, then pick the pair"
    check_question_ids:
      - two-part-analysis-q1
      - two-part-analysis-q2
      - two-part-analysis-q3

  - id: logical-two-part
    type: reading
    title: "Logical Two-Part — argument roles and structure"
    check_question_ids:
      - two-part-analysis-q4
      - two-part-analysis-q6
      - two-part-analysis-q13

  - id: rate-and-mixture-templates
    type: reading
    title: "Rate, mixture, and system-of-equations templates"
    check_question_ids:
      - two-part-analysis-q5
      - two-part-analysis-q7
      - two-part-analysis-q15

  - id: cause-effect-patterns
    type: reading
    title: "Cause-and-effect argument patterns"
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
---

## @the-two-part-format

Two-Part Analysis is the most unusual question format on the GMAT. Instead of picking one answer from five, you pick **two answers** from a shared list — one for each of two related questions. The catch: the two selections must *jointly* satisfy the constraints.

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
- Multiply second equation: 8a + 5b = 680,000. And a + b = 100,000, so b = 100,000 - a, and 8a + 5(100,000 - a) = 680,000 → 3a = 180,000 → a = 60,000.
- **Pick 60,000 for Alpha, 40,000 for Beta.**

**The "check against the answer list" reflex.** After solving, verify both your answers appear in the list. If one doesn't, check your arithmetic — probably a sign error or a setup mistake.

**The "backsolve if the answer list is small" shortcut.** If the answer list has only 4-5 values and the arithmetic is complex, plug each option into the constraint and see which pair works. This is usually slower than direct solving but can be a backup strategy.

**The "same answer for both parts" case.** Sometimes the correct answer for Part 1 and Part 2 is the same option (like the mixture example above where both were 5 liters). The format allows this — don't be thrown off.

**The "two unknowns but one equation" trap.** Some questions might seem underdetermined. But Two-Part quant always has enough constraints — if you think you need more information, you've missed a relationship in the problem statement. Re-read carefully.

**Percent and ratio patterns.** Many Two-Part questions involve percentages (investment returns, discounts, mixture concentrations). Translate percentages to multipliers (8% → 0.08) before setting up the equation.

> **Self-explanation prompt.** Why is Two-Part quant just a standard two-equation system? If you can say "because the shared-list format is a presentation convention; underneath, it's the same algebra as any 2-unknown word problem," you've stripped the mystery from the format and can apply your algebra skills directly.

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
- Primary assumption being challenged: That the full 25% growth is attributable to the campaign alone (i.e., that the competitor's bankruptcy didn't also contribute).

Match from the answer list:
- Part 1 (conclusion) → "The campaign's effectiveness may be overstated."
- Part 2 (assumption challenged) → "All of the 25% sales growth is attributable to the marketing campaign."

**Example (strengthen + weaken pair).** "A study found that employees working remotely reported 20% higher productivity than office workers. The CEO concluded remote work should be mandated for all staff."

The question might ask: "Identify one fact that strengthens the CEO's conclusion" (Part 1) and "Identify one fact that weakens it" (Part 2). Each part asks for a different kind of statement from the same list.

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

**The "same option for both parts" possibility.** Unlike quantitative, logical Two-Part almost never has the same statement for both parts — the two roles are distinct.

> **Trap to watch.** Don't confuse "the role the statement plays in the argument" with "the role the question asks about." The question might ask for the conclusion the author supports, or the conclusion the author *rejects*. Read the question stem carefully.

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

**Example (system of constraints Two-Part).** "A factory produces chairs and tables using wood and labor. Each chair uses 5 units of wood and 2 hours of labor; each table uses 8 units of wood and 5 hours. Budget: 80 units of wood, 35 hours of labor. Find the MAXIMUM number of chairs (Part 1) and tables (Part 2) that can be produced simultaneously. Options: 2, 3, 4, 5, 6, 7, 8, 9, 10."

Let c = chairs, t = tables. Constraints: 5c + 8t ≤ 80 and 2c + 5t ≤ 35, c ≥ 0, t ≥ 0.

To maximize both simultaneously, solve the system:
- 5c + 8t = 80 and 2c + 5t = 35.
- Multiply first by 2, second by 5: 10c + 16t = 160 and 10c + 25t = 175. Subtract: 9t = 15, so t = 5/3 ≈ 1.67. That's not an integer — so corner-point optimization.

Try integer combinations. c = 8, t = 2: 40 + 16 = 56 ≤ 80 ✓, 16 + 10 = 26 ≤ 35 ✓. c = 8, t = 3: 40 + 24 = 64, 16 + 15 = 31 ✓. c = 10, t = 3: 50 + 24 = 74, 20 + 15 = 35 ✓ (tight).

Etc. This kind of problem requires careful case-checking, which is typical for 705+ Two-Part.

**The "round to integer" discipline.** If the answer list has only integer options and your algebra yields a non-integer, either your setup is wrong or you need to find corner-point integer solutions.

> **Recall check.** Without looking, state the combined-work formula, the mixture formula, and the investment formula. (Answers: 1/a+1/b=1/T; weighted average with two equations; split-capital with two equations.) All three are structurally the same — two equations in two unknowns. Retrieval of all three cements the template in long-term memory.

## @cause-effect-patterns

Two-Part Analysis often tests cause-and-effect reasoning, either within a quantitative setup (e.g., "find the cause" and "find the effect") or in a logical argument.

**The cause-and-effect argument template.**

Author observes correlation between X and Y, then claims X caused Y. Common Two-Part question: "Identify a fact that supports the causal claim" (Part 1) and "Identify a fact that undermines the causal claim" (Part 2).

**Supporters typically:**

- Establish temporal order (X happened before Y).
- Provide a mechanism linking X to Y.
- Rule out alternative causes.
- Show that without X, Y doesn't happen.

**Underminers typically:**

- Introduce alternative causes.
- Reverse the direction (Y might cause X).
- Show confounding variables.
- Point out that X and Y occur independently in other contexts.

**Example.** Argument: "Employees who took a leadership training course were promoted twice as fast as those who didn't. Therefore, the course accelerates career advancement."

Support candidates:
- "Employees were randomly assigned to the course (vs self-selection)."
- "Course content directly teaches skills that managers evaluate in promotion decisions."

Undermine candidates:
- "Highly motivated employees were more likely to enroll in the course."
- "Managers give promotion preference to employees they've seen in training settings."

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

> **Self-explanation prompt.** Why is strengthening a causal claim typically about ruling out alternatives? If you can say "because 'X caused Y' is only convincing when other explanations are eliminated; each alternative ruled out narrows the gap between correlation and causation," you've internalized the asymmetric structure of causal arguments — and you'll apply the same logic across CR and logical Two-Part.

## @summary

Two-Part Analysis is two question types wearing the same dress. Recognizing the flavor (quantitative vs logical) is the first move; applying the appropriate template is the rest.

**The Two-Part decision tree.**

1. **Read the stem. Classify the flavor.** Numbers and equations → quantitative. Arguments and roles → logical.
2. **Quantitative:** define variables, set up equations, solve, match to list.
3. **Logical:** decompose the argument (conclusion, evidence, assumption), then match each part's required role to the list.
4. **Verify.** Plug selections back into the problem. Do they satisfy the constraints?

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
- Hard: up to 2 minutes.

**The two highest-leverage Two-Part habits:**

1. **Classify the flavor within the first 10 seconds.** Going in with the wrong frame (trying to set up equations for a logical question, or argument-analysis for a quantitative one) burns 30+ wasted seconds.

2. **Always verify your selections against the original stem.** With quantitative, plug the numbers back into the equations. With logical, re-read the argument with your selections substituted — does the pair make sense?

**Common traps across all Two-Part questions:**

- Picking the *opposite* role for Part 2 than requested (strengthen vs weaken).
- Skipping verification and submitting values that don't satisfy the constraints.
- Assuming the two answers must differ (they can be the same).
- On logical questions: confusing a claim the author cites with a claim the author endorses.

Drill the 15 questions in this chapter's problem sets. Because Two-Part is a smaller question bank, each question carries more weight in your Data Insights score — aim for 90%+ on the easy and medium sets before the test.
