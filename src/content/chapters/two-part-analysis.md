---
slug: two-part-analysis
title: Two-Part Analysis
section: DI
estimated_minutes: 45
prerequisites: []
summary: |
  Two-Part Analysis asks you to pick two values from a shared answer list — both values must jointly satisfy the constraints of the question. The questions come in two flavors: quantitative (set up equations, pick the pair that solves the system) and logical (identify two roles in an argument, like conclusion and assumption). The trick is recognizing which flavor you're in within the first 10 seconds, then applying the correct discipline: algebraic for quantitative, structural for logical. Master both templates and you will solve every Two-Part question in under 2 minutes.
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
      Two-Part Analysis is the only DI format where a single wrong selection earns zero points — there is no partial credit. Understanding how the format works before diving into content prevents the strategic errors that content knowledge alone cannot fix. Five minutes here will save you five wrong questions on test day.
    check_question_ids:
      - two-part-analysis-q11

  - id: quantitative-setup
    type: reading
    title: "Quantitative Two-Part — set up the equations, then pick the pair"
    intro: |
      Quantitative Two-Part looks unusual but is fundamentally the same two-equation algebra you already know. Strip the shared-list wrapper and you have two unknowns and two constraints — the same move every time. The list is a verification layer, not a shortcut.
    check_question_ids:
      - two-part-analysis-q1
      - two-part-analysis-q2
      - two-part-analysis-q3

  - id: logical-two-part
    type: reading
    title: "Logical Two-Part — argument roles and structure"
    intro: |
      Logical Two-Part is where most students lose Data Insights points — not from bad logic, but from failing to coordinate two argument roles simultaneously. On a standard CR question, you decompose the argument once and answer one question about one role. Here, you answer two coordinated questions from the same shared list. The coordination requirement is what makes this harder than it looks.
    check_question_ids:
      - two-part-analysis-q4
      - two-part-analysis-q6
      - two-part-analysis-q13

  - id: rate-and-mixture-templates
    type: reading
    title: "Rate, mixture, and system-of-equations templates"
    intro: |
      Three templates cover most quantitative Two-Part questions: combined work, weighted mixture, and split investment. Each reduces to two equations in two unknowns. Recognizing which template you're in is the skill — the algebra is just substitution.
    check_question_ids:
      - two-part-analysis-q5
      - two-part-analysis-q7
      - two-part-analysis-q15

  - id: common-tpa-traps
    type: reading
    title: "The four TPA traps — and the compute-first reflex"
    intro: |
      Four traps appear on almost every hard Two-Part question, and all four are format-specific — they exist only because TPA requires two coordinated answers instead of one. Recognizing them by name converts them from surprises into checkboxes.
    check_question_ids: []

  - id: cause-effect-patterns
    type: reading
    title: "Cause-and-effect argument patterns"
    intro: |
      The hardest logical Two-Part questions build an argument around a causal claim, then ask you to simultaneously identify one statement that supports it and one that undermines it. The skill is knowing what counts as a genuine strengthener vs. a genuine weakener — quickly enough to match both from the same list under test conditions.
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

Two-Part Analysis is the most unusual format on the GMAT. Instead of picking one answer from five, you pick **two answers** from a shared list — one for each of two related questions. The catch: the two selections must *jointly* satisfy the constraints. Getting Part 1 right and Part 2 wrong earns you zero — there is no partial credit.

**Mental model — one system, two unknowns.** Think of TPA as a system of equations with two unknowns. The answer list is a finite set of candidate values. Your job is to solve the system, then match both solutions to the list simultaneously. Students who treat each column as an independent question consistently fall into the joint-constraint trap (see @common-tpa-traps). Solve the system first; pick the values second.

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

**The shared-answer-list constraint.** Both parts draw from the same list. The correct answer to Part 1 and the correct answer to Part 2 might be the same row (common on symmetric quant problems) or different rows (common on logical problems). The format allows both — don't be thrown off by either.

**The two flavors.**

- **Quantitative Two-Part** gives you a word problem with two related unknowns. You set up equations, solve, and pick the two values from the list. Tells: numbers, units, "find the value of X," equations, percentages.

- **Logical Two-Part** gives you an argument and asks you to identify two structural roles (e.g., "the conclusion" and "the primary assumption"). You analyze argument anatomy and match each role to a statement in the list. Tells: arguments, conclusions, assumptions, "identify the role."

**Two reflexes to develop before you hit the test.**

**Classify first.** The moment you read the stem, identify the flavor. Going in with the wrong frame — trying to set up equations for a logical question — burns 30 or more wasted seconds. Classify in the first 10 seconds of every question.

**Derive first.** Solve the problem on scratchwork before scanning the answer list. Students who scan first anchor on a list value and try to force their algebra to match it — a path that leads to joint-constraint failures. Derive both values from the problem, then find them in the list. The list is a verification layer, not a starting point.

> **Micro-drill — classify the flavor fast.** Read each stem and classify as Quantitative or Logical — 30 seconds total:
> 1. "A company invests a total of $200,000. Part is invested at 6% annually and the remainder at 9% annually. Identify the amount in each fund."
> 2. "A news article argues that lower speed limits reduce traffic fatalities. Identify one fact that supports this claim and one fact that challenges it."
> 3. "A chemist mixes a 40% acid solution and a 90% acid solution to produce 8 liters of 55% acid. Find the volume of each solution."
> 4. "The following passage concludes that increased advertising drives customer loyalty. Identify the main conclusion and the primary assumption."
>
> (Answers: 1 Quant, 2 Logical, 3 Quant, 4 Logical. If you got all four in under 20 seconds, the classify-first reflex is wired in.)

## @quantitative-setup

Quantitative Two-Part is a word problem with two unknowns. The workflow is exactly like any two-equation, two-unknown algebra problem — just with a specific answer list at the end.

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
- Substitute x = 10 − y: 0.30(10 − y) + 0.60y = 4.5 → 3 − 0.30y + 0.60y = 4.5 → 0.30y = 1.5 → y = 5. So x = 5.
- **Pick 5 for both.**

**Example (investment problem).** "Invest $100,000 total between Fund Alpha (8% return) and Fund Beta (5% return). Total return $6,800. Pick the amount in Alpha and in Beta from the list: 20K, 40K, 50K, 60K, 70K, 80K."

- Let a = Alpha, b = Beta.
- a + b = 100,000.
- 0.08a + 0.05b = 6,800.
- Multiply second equation × 100: 8a + 5b = 680,000. Substitute b = 100,000 − a.
- 8a + 5(100,000 − a) = 680,000 → 3a = 180,000 → a = 60,000.
- **Pick 60,000 for Alpha, 40,000 for Beta.**

**The "check against the answer list" reflex.** After solving, verify both values appear in the list. If one doesn't, check your arithmetic — probably a sign error or a setup mistake.

**The "backsolve" shortcut.** If the answer list has only 4–5 values and the algebra is messy, plug each option into the joint constraint to find the pair that satisfies both equations. Usually slower than direct solving, but a valid backup when the setup is unclear.

**The "same answer for both parts" case.** Sometimes both Part 1 and Part 2 correctly point to the same option (the mixture example above: both x and y equal 5). The format allows this — trust the math.

**Percent and ratio patterns.** Translate percentages to decimals before setting up equations (8% → 0.08). Leaving percentages as integers (8, 5, 6800) without converting leads to off-by-100 errors on nearly every problem.

> **Self-explanation prompt.** Why is quantitative Two-Part just a standard two-equation system in a different costume? If you can say "because the shared-list format is a presentation convention; underneath, it's the same algebra as any two-unknown word problem," you've stripped the format of its mystery.

**Micro-drill.** Set up and solve — 90 seconds total:

1. Pump A fills a tank in 12 hours alone. Together with Pump B, they fill it in 4 hours. How long does Pump B take alone (Part 1)? What is the combined rate as a fraction of the tank per hour (Part 2)? List: 1/4, 1/3, 5, 6, 7, 8.

2. Mix a 40% acid solution with a 90% acid solution to make 10 liters of 55% acid. How many liters of 40% solution (Part 1) and how many liters of 90% solution (Part 2)? List: 2, 3, 5, 6, 7, 8.

Answers: (1) A's rate = 1/12. Combined rate = 1/4. B's rate = 1/4 − 1/12 = 3/12 − 1/12 = 1/6. B alone = **6 hours**. Combined rate = **1/4**. Joint check: 1/12 + 1/6 = 1/12 + 2/12 = 3/12 = 1/4 ✓. (2) Let x = liters of 40%, y = liters of 90%. x + y = 10 and 0.4x + 0.9y = 5.5. Substitute: 0.4(10 − y) + 0.9y = 5.5 → 4 + 0.5y = 5.5 → y = **3**. x = **7**. Joint check: 7 + 3 = 10 ✓; 0.4(7) + 0.9(3) = 2.8 + 2.7 = 5.5 ✓.

## @logical-two-part

The gap between logical TPA and a standard CR question is not the underlying logic — it is the coordination requirement. On CR, you decompose the argument once and answer one question about one role. Here, you decompose the same argument and answer two coordinated questions from the same shared list. Each answer must be independently correct and jointly consistent.

**The three-step process for every logical Two-Part.**

1. **Decompose the argument.** Before reading the answer list, identify: the conclusion (what the author is trying to establish), the evidence (what the author cites as support), and any key assumptions (unstated premises the argument requires). Write these in your margin.

2. **Read the column headers as instructions.** Part 1 and Part 2 have different requirements — "the primary assumption" and "a fact that would weaken the argument" are different tasks. Execute them in order.

3. **Match from your decomposition, then verify.** Find the option that fits Part 1. Find the option that fits Part 2. Re-read the argument with both selections in mind — does the pair make sense together?

**Why decompose before scanning the list?** Students who read the answer list first anchor on a plausible-looking statement, then backfill an argument analysis to justify it. This anchoring error causes systematic role-confusion. Decompose the argument cold first; use the list as your lookup table, not your starting point.

**Worked example — full process.**

*Argument:* "A university study found that students who studied in designated quiet rooms performed 12% better on final exams than students who studied elsewhere. The university has decided to expand the number of quiet rooms on campus."

*Step 1 — Decompose:*
- Evidence: Students in quiet rooms scored 12% higher.
- Conclusion: The university should expand quiet rooms.
- Key assumption: The performance difference is caused by the quiet environment — not by self-selection of more motivated or better-prepared students into those rooms.

*Step 2 — Column headers (hypothetical):*
- Part 1: "The main conclusion of the argument."
- Part 2: "The primary assumption underlying the argument."

*Step 3 — Match to a hypothetical answer list:*
- "Quiet rooms are the most cost-effective academic improvement available." → Not in the argument. Incorrect for conclusion.
- "The university should expand its number of quiet rooms." → This is the conclusion. ✓ **Part 1.**
- "Students who chose quiet rooms were already more academically motivated." → This challenges the assumption but is not the assumption itself.
- "The 12% improvement reflects the quiet environment's effect, not the type of student who self-selected into those rooms." → This is the unstated premise the argument requires. ✓ **Part 2.**

*Verify:* The conclusion and the assumption are coherent — the assumption is exactly what would need to be true for the conclusion to follow from the evidence. The pair is consistent.

**The decomposition checklist.**

| Role | What it is | How to find it |
|---|---|---|
| Conclusion | The main claim the author wants to establish | Often follows "therefore," "thus," "should," "conclude" |
| Evidence | Facts and observations cited as support | Often follows "because," "since," "study shows," "found that" |
| Assumption | Unstated premise the argument requires | Often about causation, sample representativeness, or scope |
| Strengthener | New fact that closes the evidence-conclusion gap | Makes the conclusion more likely given the evidence |
| Weakener | New fact that widens the gap or offers an alternative | Alternative cause, confounder, or counter-evidence |
| Counter-claim | Position the author argues against | "Critics claim," "opponents argue" — not the author's view |

**The "verify both selections" discipline.** After picking your two answers, re-read the argument with both selections substituted. For assumption questions: does negating your Part 2 selection undermine the argument? For strengthener/weakener pairs: do the two selections genuinely pull in opposite directions?

**Trap to watch.** The column header tells you what role to find. "The role the statement plays in the argument" asks you to classify a statement that already exists in the argument. "A fact that would strengthen the conclusion" asks you to evaluate whether a new statement helps. These are different tasks — read the header before you evaluate any option.

> **Micro-drill.** Read the argument and answer in 90 seconds.
>
> *Argument:* "A retail chain introduced mandatory customer service training for all employees in Q1. Customer satisfaction scores rose 18% in Q2. The chain's executives attributed the improvement to the training program."
>
> Available options: (A) Satisfaction scores rose 18% in Q2. (B) Employees with more training hours scored higher on internal assessments. (C) A major competitor closed stores in Q1, redirecting customers to this chain. (D) The chain also launched a new loyalty rewards program in Q1. (E) The training focused specifically on the skills customers consistently cite as most important.
>
> Part 1: "A fact that supports the executives' conclusion." Part 2: "A fact that undermines it."
>
> *Answers:* Part 1 → **(E)**: establishes a direct mechanism — the training addressed the specific skills customers value, making the causal link between training and satisfaction concrete. Part 2 → **(C)**: the competitor's closure is an alternative explanation — customers who had no other option might rate any experience highly, regardless of training. Note: (A) is evidence already in the argument, not a new strengthener. (D) also undermines (another Q1 change could explain the Q2 result), but (C) more directly challenges the causal attribution. If you selected (A) for Part 1, re-read the column header: Part 1 asks for a *new* fact that supports the conclusion, not a restatement of evidence.

## @rate-and-mixture-templates

The most common quantitative Two-Part templates are rate/work problems, mixture problems, and percent/investment problems. Each has a standard two-equation setup.

**Rate template (combined work).**

Workers A and B have individual times `a` and `b`. Combined time T is:

    1/a + 1/b = 1/T

If the question asks for T and one of the individual times, set up and solve for the unknown using this equation.

**Mixture template (weighted average).**

Mix quantities x and y of solutions with concentrations c_X and c_Y to get total t with concentration c:

    x + y = t
    c_X × x + c_Y × y = c × t

Two equations, two unknowns. Substitute x = t − y into the second equation.

**Percent/investment template.**

Split capital P between two instruments with rates r_A and r_B for total return R:

    a + b = P
    r_A × a + r_B × b = R

Standard two-equation system. If the answer list is in thousands, work in thousands throughout to avoid arithmetic errors.

**Distance-rate-time template.**

Two objects moving with rates r_1 and r_2:

    d_1 = r_1 × t_1
    d_2 = r_2 × t_2

Plus any constraint relating t_1 and t_2 (same start time, meeting at a point, one catching the other). That constraint is the second equation.

**Example (D/R/T Two-Part).** Two cars leave the same point in opposite directions. Car A at 50 mph, Car B at 70 mph. How many hours until they are 360 miles apart (Part 1)? How many miles did Car A travel (Part 2)?

- Separation rate: 50 + 70 = 120 mph. Time: 360/120 = **3 hours**.
- Distance A: 50 × 3 = **150 miles**.
- Pick 3 for Part 1, 150 for Part 2.

**Example (constraint optimization — 705+).** "A factory produces chairs using 5 units of wood and 2 hours of labor each; tables using 8 units of wood and 5 hours. Budget: 80 units of wood, 35 labor-hours. Find the maximum chairs (Part 1) and tables (Part 2) that can be produced simultaneously."

This is a linear programming problem, not a standard two-equation system. The approach shifts to testing integer corner points that satisfy both constraints. At 705+, expect to test 3–4 feasible pairs systematically. The "solve and substitute" reflex breaks here — recognize the constraint-optimization structure early and switch to corner-point testing.

> **Recall check.** Without looking back, state the combined-work formula, the mixture setup, and the investment setup. (Answers: 1/a + 1/b = 1/T; x + y = t with weighted concentration; a + b = P with weighted return.) Retrieval of all three in the same breath cements the template-recognition reflex — which is the core skill on quantitative TPA.

> **Self-explanation prompt.** Why are all three quantitative TPA templates structurally identical? If you can say "because they all express two constraints — a total constraint and a weighted-average constraint — and solving the system for the two unknowns is always the same move," you have understood what unifies them. The surface content changes (workers, solutions, investments); the algebra does not.

## @common-tpa-traps

Two-Part Analysis has the most consistently-mishandled traps of any DI subtype because the format itself creates a unique failure mode: you must satisfy *two* constraints at once, but you pick *each* answer independently. The four traps below cost more points on hard TPA than any algebra error.

**Trap 1: The single-column-valid pair.**

This is the signature TPA failure. You pick a value for Part 1 that's valid in isolation, then a value for Part 2 that's valid in isolation — and the pair fails the joint constraint between them.

*Example.* The problem asks for "amount of Solution X" (Part 1) and "amount of Solution Y" (Part 2), with constraint x + y = 10. The shared list: 2, 3, 4, 5, 6, 7. Under time pressure, a student picks x = 4 (passes the column-1 sanity check) and y = 5 (passes the column-2 sanity check) — but 4 + 5 = 9, not 10. Both individual picks look reasonable; the pair isn't.

The fix: **always verify the joint constraint as the last step.** Your two values must satisfy every equation in the problem simultaneously. One substitution at the end takes 10 seconds and prevents this trap entirely.

**Trap 2: The intermediate-result distractor.**

TPA answer lists almost always include values that are the result of intermediate steps, not the final answer. Students who recognize "their" number mid-solve and bubble early lose the question.

*Example.* A problem requires solving 3a + 5b = 100 and a + b = 24. A student substitutes b = 24 − a, gets −2a = −20, and lands on a = 10. The list includes 20 (from −2a = −20), 14 (from b = 24 − 10), 10, 6, 4. The student, having stared at "20" for a beat, bubbles 20 for Part 1. Wrong — the answer is a = 10, not the intermediate 2a = 20.

The fix: **before bubbling, restate exactly what Part 1 and Part 2 are asking for** and confirm your value answers that specific question. "Part 1 asks for a. My computed a is 10. I select 10." Don't trust the recognition reflex — the intermediate values are planted deliberately.

**Trap 3: The "must differ" assumption.**

Students sometimes assume Part 1 and Part 2 must be different rows. They can be the same. When the math points to the same value for both parts — common on mixture problems with symmetric solutions and on equal-split investment problems — pick the same row twice and move on.

*Example.* "Mix Solution X (30% salt) with Solution Y (60% salt) to make 10 L of 45% solution. List: 2, 3, 4, 5, 6, 7." Solving: x = 5, y = 5. Pick 5 for both — even when it feels wrong to pick the same row twice. Logical TPA almost never has the same answer for both; quantitative TPA does, regularly. Trust the math.

**Trap 4: Binary scoring shapes pacing decisions.**

TPA is graded all-or-nothing. Getting Part 1 right and Part 2 wrong gives you zero — the same as missing both. This has a specific strategic implication: if you are stuck on Part 1 after 2:30, do not invest more time optimizing Part 2. There is no partial credit. Commit to a best guess for both parts and move to a question you can fully solve.

The flip side: if you have nailed Part 1 with confidence, now it makes sense to invest in Part 2 — because each part you solve correctly contributes to a full point.

**The compute-first reflex (the meta-discipline).**

Strong TPA solvers compute both answers before scanning the list, then find them. Students who scan the list first anchor on a value and abandon their algebra before it converges. Derive both values from the problem on your scratchwork, then find them in the list. If your answer is missing from the list, you know your setup is wrong — that is more useful feedback than a lucky guess.

**The full TPA verification routine — every question, no exceptions.**

1. Derive both values from the problem (don't look at the list first).
2. Find each value in the list.
3. Substitute both selections back into every original equation. Both must hold.
4. Restate what each part asked for. Confirm your selection answers that specific question, not an intermediate quantity.

This adds 15–20 seconds per question. It prevents traps 1 and 2 entirely.

> **Self-explanation prompt.** Why is verifying the joint constraint specifically the last step in TPA — rather than treating each part as an independent question? If you can say "because TPA's shared-list format invites picking each part in isolation; only joint verification catches the cross-constraint failures the format is designed to surface," you have understood why TPA punishes the same algebra mistake more than DS or PS would.

## @cause-effect-patterns

Causal arguments on the GMAT follow a predictable structure: an author observes a correlation (X and Y occur together), claims X caused Y, and draws a conclusion or recommends an action. Two-Part questions on these arguments ask you to find two pieces of evidence simultaneously — one that closes the gap between correlation and causation, one that widens it.

**The anatomy of a causal argument.**

- **Correlation observed:** "We see X and Y together."
- **Causal claim:** "X caused Y."
- **Conclusion or recommendation:** "Therefore, do more of X."

Every strengthener and weakener operates on the gap between the correlation and the causal claim. The question is whether a new piece of information makes "X caused Y" more or less plausible than it was before.

**Four types of strengtheners.**

1. **Mechanism.** A plausible pathway from X to Y is identified. "The training addressed the specific skills customers value most."
2. **Temporal order.** X preceded Y. "Sales increased only after the campaign launched, not before."
3. **Controlled setting.** Confounders were held constant. "Subjects were randomly assigned; the groups were identical on all measured variables before the intervention."
4. **Dose-response.** More X → more Y. "Departments with more training hours saw proportionally larger improvements."

**Three types of weakeners.**

1. **Alternative cause (confounding variable).** Something other than X explains Y. "A competitor went out of business in the same quarter, redirecting customers."
2. **Reverse causation.** Y might have caused X, not the other way around. "Companies that are already growing tend to invest more in training."
3. **Sampling or scope issue.** The observed correlation doesn't generalize. "Only the highest-performing locations were included in the study."

**Why this framework matters for TPA.** Part 1 (strengthener) and Part 2 (weakener) must be genuine opposites in their effect on the causal claim. A valid strengthener cannot also weaken the claim; a valid weakener cannot also strengthen it. When you are uncertain which option to pick, ask directly: "Does this piece of evidence make X→Y more plausible, or less?" If more, it's a strengthener. If less, it's a weakener. If the answer is neither or both, it's a distractor — eliminate it.

**Worked example.**

*Argument:* "Employees who participated in a company wellness program were absent 3 fewer days per year than non-participants. The company concluded that the wellness program reduces absenteeism."

Available options: (A) "Participants self-selected from employees with already-strong health habits." (B) "The program specifically targeted the leading causes of employee sick days." (C) "Absenteeism at peer companies without programs stayed constant during the same period." (D) "Employees with the fewest sick days were most likely to enroll in the wellness program." (E) "A new HR sick-leave tracking policy was introduced at the same time as the wellness program."

*Analysis:*
- (A) → Self-selection bias: healthier employees enrolled, so the wellness program may not have caused the difference. **Weakener.** Alternative cause.
- (B) → Mechanism: if the program targeted the actual causes of absenteeism, the causal link is plausible. **Strengthener.**
- (C) → Control comparison: the drop is specific to this company, not a broader trend. **Strengthener** (rules out an industry-wide shift).
- (D) → Reverse causation: lower absenteeism predicted enrollment, not the other way around. **Weakener.**
- (E) → Alternative cause: the new tracking policy could have independently changed recorded absenteeism. **Weakener.**

*Best pair:* Part 1 (strengthener) = **(B)**. Part 2 (weakener) = **(A)** or **(D)**, depending on which undermining mechanism the column header specifies. Read the header before evaluating options.

**The "bridging statement" role.** Some arguments contain an intermediate conclusion — a claim drawn from initial evidence that then serves as evidence for the main conclusion. Two-Part may ask you to identify both. Both are claims the author makes; they are at different levels.

*Example:* "Exercise reduces cortisol levels. Elevated cortisol impairs cognitive focus. Therefore, regular exercise should improve productivity in office workers."

- Evidence: "Exercise reduces cortisol" and "cortisol impairs focus."
- Intermediate conclusion (unstated): "Exercise improves cognitive focus." (Implied bridge between the two pieces of evidence and the final claim.)
- Main conclusion: "Regular exercise should improve productivity."

If a Two-Part question asks for "an implied intermediate conclusion" (Part 1) and "the main conclusion" (Part 2), the intermediate is about focus; the main is about productivity. Both exist in the argument's logic, even when one is not written explicitly.

> **Micro-drill.** 90 seconds.
>
> *Argument:* "Neighborhoods with more public parks have lower rates of childhood obesity than neighborhoods with fewer parks. A city planning commission argued that adding parks to underserved neighborhoods would reduce childhood obesity."
>
> Options: (A) "Children in neighborhoods with more parks spend more time in outdoor physical activity." (B) "Families with higher incomes tend to both live near parks and maintain better nutrition habits." (C) "Similar park-building programs in other cities produced no measurable change in obesity rates." (D) "The planning commission included no physicians or public health experts." (E) "Childhood obesity rates rose nationally during the same period."
>
> Part 1: strengthener. Part 2: weakener.
>
> *Answers:* Part 1 → **(A)**: establishes a mechanism — more parks → more outdoor activity → less obesity. Without this link, the argument rests on correlation alone; with it, a plausible causal pathway exists. Part 2 → **(B)**: income is a confounding variable — wealthier families live near parks AND maintain better nutrition, so the park-obesity correlation may reflect income differences rather than parks themselves. Note: (C) is a weakener too (direct counter-evidence), but (B) is more precise as a causal challenge because it identifies the underlying confounder. (D) is irrelevant to the causal claim. (E) is ambiguous — if obesity rose nationally but fell in park-rich neighborhoods, that would actually strengthen the argument; as stated, the direction is unclear.

## @summary

Two-Part Analysis is two question types wearing the same format. Recognizing the flavor in the first 10 seconds is the first move; applying the appropriate template is everything else.

**The Two-Part decision tree.**

1. **Classify the flavor.** Numbers, equations, units → quantitative. Arguments, roles, conclusions → logical.
2. **Quantitative:** define variables, set up two equations, solve, match to list.
3. **Logical:** decompose the argument (conclusion, evidence, assumption), then match each part's required role to the list.
4. **Verify the joint constraint.** Substitute both selections into every original equation (quant), or re-read the argument with both selections in mind (logical). Both must hold.

**The quantitative templates:**

| Template | Two equations |
|---|---|
| Combined work | 1/a + 1/b = 1/T |
| Weighted mixture | x + y = t; c_X·x + c_Y·y = c·t |
| Split capital | a + b = P; r_A·a + r_B·b = R |
| Distance-rate-time | d = r·t for each object, plus a time or distance constraint |

**The logical roles:**

| Role | Signature |
|---|---|
| Conclusion | Main claim; often after "therefore," "should," "conclude" |
| Evidence | Facts cited as support; after "because," "since," "shows," "found that" |
| Assumption | Unstated premise; often about causation, samples, or no alternatives |
| Strengthener | Mechanism, temporal order, controlled setting, or dose-response |
| Weakener | Alternative cause, reverse causation, or sampling issue |
| Counter-claim | View the author argues against — not the author's own position |

**Time targets.**

- Easy quantitative: under 90 seconds.
- Medium: 90–120 seconds.
- Hard (constraint optimization or complex logical): up to 2:15.

**Common traps across all Two-Part questions:**

- Picking values that each satisfy their column in isolation without verifying the joint constraint.
- Bubbling an intermediate result instead of the final answer.
- Assuming Part 1 and Part 2 must be different rows (they can be the same).
- On logical questions: confusing a claim the author cites with a claim the author endorses.

**What to do next.**

1. **Easy set first — both questions.** TPA has only 2 easy questions in this chapter. Do them without timing yourself, writing out every step: define variables, set up equations, solve, substitute both values back. The goal is method, not speed.

2. **Medium set — 8 questions, 2 minutes each.** After every miss, tag the reason using the four traps from @common-tpa-traps. The trap with the most tags is the reflex to drill next. If most misses are quantitative, re-run the micro-drill in @quantitative-setup. If most are logical, re-do the @logical-two-part micro-drill cold.

3. **Hard set — 5 questions, untimed first.** On the first pass, find the approach at any cost — don't race. On the second pass, time yourself. The gap between your two pass times is a direct measure of how much speed repetition will buy, and it is almost always larger than students expect.

4. **Error log tag.** Every TPA miss should be tagged by trap number. After two problem-set runs, sort those tags. The most common tag is your next focused drill — fix one reflex at a time.

5. **Classification speed target.** You should classify any TPA stem as quantitative or logical within 10 seconds. If you're still uncertain at the 20-second mark, the classify-first section above needs another read, not another problem set.
