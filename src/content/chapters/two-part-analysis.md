---
slug: two-part-analysis
title: Two-Part Analysis
section: DI
estimated_minutes: 45
prerequisites: []
summary: |
  Two-Part Analysis tests a single cognitive skill: satisfying two constraints simultaneously. Every question — quantitative or logical — gives you two requirements, a shared answer list, and asks you to find the one pair that meets both at once. The format is unfamiliar; the underlying tasks are not. Quantitative TPA is a two-equation system in disguise. Logical TPA is argument decomposition in disguise. Master the classification reflex, derive both values before you consult the answer list, and verify the pair against every original constraint. That routine handles every question at every difficulty level.

  By the end of this chapter you will: (1) classify quantitative vs. logical TPA in under 10 seconds; (2) set up and solve two-equation systems for rate, mixture, and investment problems; (3) decompose arguments into conclusion, evidence, assumption, strengthener, and weakener — and match two roles simultaneously; (4) apply the full four-step verification routine on every question; (5) recognize all four TPA trap types by name before they cost you points.
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
      Two-Part Analysis is the only GMAT format that requires two coordinated answers. Every other question type lets you evaluate options one at a time. Here, a single wrong pick invalidates a pair that was otherwise correct. This section gives you the format, the mental model that makes it tractable, and the one discipline — derive first, scan second — that separates efficient TPA solvers from students who waste two minutes testing answer combinations.
    check_question_ids:
      - two-part-analysis-q11

  - id: quantitative-setup
    type: reading
    title: "Quantitative Two-Part — set up the equations, then pick the pair"
    intro: |
      Beneath the unfamiliar format is a completely ordinary problem type: two equations, two unknowns. This section shows you the standard workflow, three fully worked templates covering the most common quantitative TPA categories, and the verification reflex that catches arithmetic errors before you submit a wrong pair.
    check_question_ids:
      - two-part-analysis-q1
      - two-part-analysis-q2
      - two-part-analysis-q3

  - id: logical-two-part
    type: reading
    title: "Logical Two-Part — argument roles and structure"
    intro: |
      Logical TPA applies the same joint-constraint discipline to argument analysis instead of algebra. Two roles in the argument — conclusion and assumption, evidence and weakener, or any other pair — mapped to two items from a shared list. The tool is standard critical reasoning decomposition. The new skill is matching two roles simultaneously and verifying that the pair captures the specific structure the question asked for, not just two individually plausible statements.
    check_question_ids:
      - two-part-analysis-q4
      - two-part-analysis-q6
      - two-part-analysis-q13

  - id: rate-and-mixture-templates
    type: reading
    title: "Rate, mixture, and system-of-equations templates"
    intro: |
      Most quantitative TPA questions use one of four algebraic templates. Each reduces to two equations with two unknowns. Identifying the template determines your setup in seconds — then the rest is algebra. This section names all four templates, gives a worked example for each, and covers the backsolve strategy for questions where integer constraints make direct algebra messy.
    check_question_ids:
      - two-part-analysis-q5
      - two-part-analysis-q7
      - two-part-analysis-q15

  - id: common-tpa-traps
    type: reading
    title: "The four TPA traps — and the compute-first reflex"
    intro: |
      Four structural traps account for the majority of hard TPA wrong answers. None require difficult arithmetic — they exploit the format's joint-answer structure in specific ways. Reading this section once means you can name and catch all four under test pressure.
    check_question_ids: []

  - id: cause-effect-patterns
    type: reading
    title: "Cause-and-effect argument patterns"
    intro: |
      Cause-and-effect reasoning underlies most logical TPA questions — either as the argument's core structure, or as the basis for a strengthen/weaken pair. This section names the two question types you'll encounter, gives you the causal argument template, and builds the framework for evaluating supporters and underminers systematically rather than by feel.
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

**The core mental shift.** On every other GMAT question type, you can evaluate options one at a time and eliminate independently. On Two-Part, you cannot. A value that looks valid for Part 1 may destroy the constraints when paired with the only valid value for Part 2. The format is specifically designed to punish column-by-column thinking. The discipline that follows: *derive both values from the problem before you look at the answer list.* Students who scan the list first and try combinations anchor on a number that works for one part, then bend their reasoning to justify the second. Students who solve the problem first and check their answers against the list catch every mistake before it becomes a wrong answer.

**The format, in a table.**

|          | Part 1 | Part 2 |
|----------|--------|--------|
| Option A | ◯      | ◯      |
| Option B | ◯      | ◯      |
| Option C | ◯      | ◯      |
| Option D | ◯      | ◯      |
| Option E | ◯      | ◯      |
| Option F | ◯      | ◯      |

Each row is one option. Each column is one selection. You pick exactly one row for Part 1 and exactly one row for Part 2. The two selections can be the same row or different rows.

**The shared-answer-list constraint.** Both parts draw from the same list. The same numeric value (or statement) can be the correct answer to both parts, to just one, or to neither. This structural feature enables Trap 3 described later — don't assume the two answers must differ.

**The two flavors.**

- **Quantitative Two-Part** gives you a word problem with two related unknowns. You set up equations, solve, and match to the list.
- **Logical Two-Part** gives you an argument and asks you to identify two structural roles — conclusion and assumption, evidence and weakener, cause and effect. You decompose the argument and match each role to an item in the list.

**How to recognize which flavor you're in — the 10-second rule.**

Quantitative tells: numbers, units, "find the value of," equations, percentages, concentrations.

Logical tells: arguments, claims, "therefore," conclusions, assumptions, "identify the role," "which of the following…"

**The general procedure — five steps, every time.**

1. Read the stem. Identify what Part 1 and Part 2 are each asking for.
2. Quantitative: set up equations. Logical: decompose the argument structure.
3. Solve for both values independently.
4. Find each value in the answer list.
5. Verify: substitute both selections back into every original constraint. Both must hold simultaneously.

The answer list is a verification layer, not a menu to try combinations from. Treat it that way on every question.

> **Recall check.** Close your eyes. Describe the Two-Part answer format. Describe the two flavors. Walk through all five steps of the general procedure. (Format: shared list, one pick per column. Flavors: quant = equations, logical = argument roles. Steps: read → classify → solve → match → verify.) If you can walk through all five steps unprompted, the format's mechanics won't cost you time during the real question.

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
- Substitute x = 10 − y: 0.30(10 − y) + 0.60y = 4.5 → 3 + 0.30y = 4.5 → y = 5. So x = 5.
- **Pick 5 for both parts.**

**Example (investment problem).** "Invest $100,000 total between Fund Alpha (8% return) and Fund Beta (5% return). Total return $6,800. Pick the amount in Alpha and in Beta from the list: 20K, 40K, 50K, 60K, 70K, 80K."

- Let a = Alpha, b = Beta.
- a + b = 100,000.
- 0.08a + 0.05b = 6,800.
- Multiply second by 100: 8a + 5b = 680,000. Substitute b = 100,000 − a: 8a + 5(100,000 − a) = 680,000 → 3a = 180,000 → a = 60,000. So b = 40,000.
- **Pick 60,000 for Alpha, 40,000 for Beta.**

**The "check against the answer list" reflex.** After solving, verify both your answers appear in the list. If one doesn't, recheck your arithmetic before guessing — usually a sign error or a setup mistake.

**The "backsolve if the list is small" shortcut.** If the list has only 4–5 values and the algebra is complex, plug each option into the constraint and find which pair works. Usually slower than direct solving — use it as a backup when you've spent more than 90 seconds on setup.

**The "same answer for both parts" case.** The mixture example above shows this — both answers were 5. The format allows it; quantitative TPA produces symmetric answers regularly. Don't second-guess it. Trust the math.

**Micro-drill.** Two TPA setups — define variables, write equations, solve, identify both values. No peeking at the answers until you've finished both setups.

1. "Machine A fills a vat in 8 hours. Machine B fills the same vat in 12 hours. They work together for T hours to fill the vat. B's alone time is S hours. List: 4, 4.8, 8, 12, 16."
2. "Blend Coffee X (15% Arabica) with Coffee Y (45% Arabica) to make 20 kg of a 30% Arabica blend. Find the amount of X and amount of Y. List: 6, 8, 10, 12, 14 (kg)."

Answers: (1) **T = 4.8, S = 12** — combined rate: 1/8 + 1/12 = 3/24 + 2/24 = 5/24 per hour; T = 24/5 = 4.8 hours. S is B's alone time = 12 hours directly from the problem. Verify: 4.8 and 12 both appear in the list; plug back: 4.8 × (5/24) = 1. ✓ (2) **X = 10, Y = 10** — x + y = 20; 0.15x + 0.45y = 0.30 × 20 = 6; substitute: 0.15(20 − y) + 0.45y = 6 → 3 + 0.30y = 6 → y = 10, x = 10. Same value for both parts — trust the math, pick row 10 twice.

> **Self-explanation prompt.** Why is quantitative Two-Part just a standard two-equation system? If you can say "because the shared-list format is a presentation convention — the underlying problem is identical to any 2-unknown word problem, and the list is simply where your solutions live," you've stripped the mystery from the format and can apply your existing algebra skills without hesitation.

## @logical-two-part

Logical Two-Part asks you to identify two roles in an argument or passage. Classic pairs:

- "Identify the conclusion" (Part 1) and "Identify the primary assumption" (Part 2).
- "Identify a piece of evidence that strengthens" (Part 1) and "Identify a piece of evidence that weakens" (Part 2).
- "Identify the cause claimed by the author" (Part 1) and "Identify the effect" (Part 2).

**The workflow.**

1. Read the argument. Apply standard CR structural analysis: find the conclusion, the evidence, and the assumption gap.
2. Identify what Part 1 and Part 2 are each asking for.
3. For each part, scan the list for the statement that best matches that role.
4. Verify: re-read the argument with your two selections substituted. Does each selection actually play the role the question assigned it?

**The argument decomposition checklist.**

| Role | Hallmarks |
|---|---|
| Conclusion | Main claim; often follows "therefore," "thus," "hence," "this shows" |
| Evidence / premise | Facts, data, observations; often follows "because," "since," "research shows" |
| Assumption | Unstated premise the argument requires; negating it collapses the conclusion |
| Strengthener | Additional fact that makes the evidence-conclusion link more plausible |
| Weakener | Introduces alternative cause, confounder, or counter-evidence |
| Counter-claim | A view the author argues *against* — not the author's own position |
| Intermediate conclusion | A step drawn from evidence, then used as evidence for the main conclusion |

**The negation test for assumptions.** If you're unsure whether a statement is the assumption, negate it mentally. If negating it destroys the argument's conclusion, it's the assumption. If the argument survives negation, the statement isn't load-bearing.

**Example (conclusion + assumption).** Argument: "The new marketing campaign increased sales by 25% in Q1. However, the campaign coincided with a major competitor going bankrupt. Therefore, the campaign's effectiveness may be overstated."

Decompose:
- Evidence: Sales grew 25%; a competitor exited simultaneously.
- Conclusion: The campaign's effectiveness may be overstated.
- Assumption (gap): The competitor's exit contributed to the sales growth — otherwise, "overstated" doesn't follow. Negate it: "the competitor's exit had no effect on sales" → the conclusion collapses. ✓

From the answer list:
- Part 1 (conclusion) → "The campaign's effectiveness may be overstated."
- Part 2 (assumption challenged) → "All of the 25% sales growth is attributable to the marketing campaign."

**Example (strengthen + weaken pair).** "A study found that employees working remotely reported 20% higher productivity. The CEO concluded remote work should be mandated for all staff."

- Part 1 (strengthener): "Productivity was measured using identical metrics for both remote and office workers." — Rules out measurement bias; eliminates a specific alternative explanation.
- Part 2 (weakener): "Remote workers were self-selected from historically high-performing employees." — Introduces a better alternative explanation (the people, not the location, drove productivity).

**The "verify both selections" discipline.** After picking your two answers, re-read the argument with your selections substituted. Does Part 1's statement play the role Part 1 asked for? Does Part 2's? The most common logical TPA error is identifying a counter-claim as the conclusion, or an intermediate conclusion as the main one. This verification step catches both.

**Micro-drill.** For each argument, identify the conclusion and the primary assumption — 90 seconds each. Apply the negation test to confirm your assumption before writing your answer.

1. "Cities with bike-sharing programs have lower per-capita car ownership than cities without them. Expanding bike-sharing in our city will therefore reduce car ownership here."

2. "Our company's revenue increased 30% in Q3. We launched a new product line in Q2. Therefore, the new product line drove the Q3 revenue growth."

Answers: (1) Conclusion: "Expanding bike-sharing in our city will reduce car ownership here." Assumption: "Our city's conditions are sufficiently similar to the cities in the data that the same relationship will hold." Negation test: "Our city's conditions differ from the studied cities in ways that break the relationship" → the conclusion no longer follows. ✓ (2) Conclusion: "The new product line drove the Q3 revenue growth." Assumption: "No other factor independently caused the Q3 increase." Negation test: "A separate factor — competitor exit, seasonal demand, pricing change — caused the Q3 increase without the new product line" → the conclusion collapses. ✓

> **Self-explanation prompt.** Why does the negation test work for identifying assumptions? If you can say "because assumptions are exactly the statements the argument needs to be true — they bridge the gap between evidence and conclusion — so negating them removes the bridge and the conclusion falls," you understand why negation is the most reliable assumption test across every CR and logical TPA question.

## @rate-and-mixture-templates

The most common quantitative Two-Part templates are rate/work, mixture, percent/investment, and distance-rate-time. Each reduces to the same structure: two equations in two unknowns.

**The underlying structure all four share.** Every template has (1) a *conservation equation* ("parts sum to a total") and (2) a *performance equation* ("weighted contribution equals a target"). Seeing that shared structure — not memorizing four separate formulas — is what lets you set up novel variants without hesitation.

**Rate template (combined work).**

Workers A and B have individual times `a` and `b`. Combined time T:

    1/a + 1/b = 1/T

If the question asks for T and one individual time, solve for T using the above.

**Mixture template (weighted average).**

Mix quantities x and y with concentrations c_X and c_Y to get total t with concentration c:

    x + y = t
    c_X × x + c_Y × y = c × t

**Percent/investment template.**

Split capital P between two instruments with rates r_A and r_B for total return R:

    a + b = P
    r_A × a + r_B × b = R

**Distance-rate-time template.**

Two objects at rates r_1 and r_2 over distances d_1 and d_2:

    d_1 = r_1 × t_1
    d_2 = r_2 × t_2

Plus a linking constraint: same total time, same meeting point, or one catches the other.

**Example (D/R/T Two-Part).** Two cars leave together in opposite directions at 50 mph and 70 mph. After t hours they are 360 miles apart. Car A also traveled distance d. List: 3, 50, 100, 120, 150, 210.

- Separation rate: 50 + 70 = 120 mph.
- 120t = 360 → t = 3 hours. Pick **3 for Part 1**.
- Distance A traveled: 50 × 3 = 150 miles. Pick **150 for Part 2**.

**Example (system with integer constraints).** "A factory makes chairs (5 wood units, 2 labor hours each) and tables (8 wood units, 5 labor hours each). Budget: 80 wood, 35 labor. Find the maximum chairs (Part 1) and tables (Part 2) producible simultaneously. List: 2, 3, 4, 5, 6, 7, 8, 9, 10."

Set up: 5c + 8t ≤ 80 and 2c + 5t ≤ 35. Solve simultaneously: multiply first constraint by 2 and second by 5 → 10c + 16t = 160 and 10c + 25t = 175; subtract: 9t = 15, so t = 5/3 (non-integer). Since the list is integers, do corner-point case-checking. Try c = 10, t = 3: wood = 50 + 24 = 74 ≤ 80 ✓; labor = 20 + 15 = 35 ✓. This is the tight feasible corner. Pick **10 chairs (Part 1), 3 tables (Part 2)**.

**The "round to integer" discipline.** When the answer list is integers and algebra yields a non-integer, your equations describe a continuous optimum but the problem requires integer solutions. Test the nearest integers at the feasibility boundary.

> **Self-explanation prompt.** Why do the mixture template and the investment template have identical algebraic structure? If you can say "both are weighted averages — in one case you're blending concentrations, in the other you're blending returns — and in both cases total weighted output must match target output, so the same two-equation system describes both," you've seen the template structure underneath the different surface stories and can set up any variant in under 30 seconds.

> **Recall check.** Without looking, state the combined-work formula, the mixture formula, and the investment formula. (1/a+1/b=1/T; x+y=t with concentration equation; a+b=P with return equation.) All three are the same structure — conservation equation plus weighted-contribution equation. If you reproduced all three from memory, the setup step on test day takes five seconds.

## @common-tpa-traps

Two-Part Analysis has the most consistently mis-handled traps of any DI subtype because the format creates a unique failure mode: you must satisfy *two* constraints at once, but you pick *each* answer independently. The four traps below cost more points on hard TPA than any algebra error.

**Trap 1: The single-column-valid pair.**

This is the signature TPA failure. You pick a value for Part 1 that's valid considered alone, then a value for Part 2 that's valid considered alone — and the pair fails the joint constraint between them.

*Example.* The problem asks for "amount of Solution X" (Part 1) and "amount of Solution Y" (Part 2), with constraint x + y = 10. List: 2, 3, 4, 5, 6, 7. Under time pressure, a student picks x = 4 (passes the column-1 sanity check) and y = 5 (passes the column-2 sanity check) — but 4 + 5 = 9, not 10. Both individual picks look reasonable. The pair is wrong.

The fix: **always verify the joint constraint as your last step**. The pair must satisfy every equation in the problem, not just each column's constraint in isolation. If there are two equations, your two values must satisfy both simultaneously.

**Trap 2: The intermediate-result distractor.**

TPA answer lists almost always include a value that's the result of an intermediate step in a multi-step solve. Students who finish step 3 of a 4-step problem, recognize "their" number in the list, and bubble lose the question.

*Example.* Solving the system 3a + 5b = 100 and a + b = 24. Substituting b = 24 − a: −2a = −20 → a = 10. The list includes 20 (from the −2a step), 14 (from b = 24 − 10), 10, 6, 4. The student, having just computed "−2a = −20," anchors on 20 and bubbles it for Part 1. Wrong — Part 1 asks for the value of a, which is 10.

The fix: **before bubbling, restate what each part is asking for and confirm your value answers that specific question**. "Part 1 asks for a. My value is 10. Is 10 in the list? Yes." State it explicitly — the recognition reflex is exactly what the test writers exploit.

**Trap 3: The "must differ" assumption.**

Students sometimes assume Part 1 and Part 2 must be different rows. They are not required to differ. When the math gives the same value for both parts — common on mixture problems with equal proportions, or symmetric investment splits — pick the same row twice and move on.

*Example.* "Mix Solution X (30% salt) with Solution Y (60% salt) to make 10 L of 45% solution. List: 2, 3, 4, 5, 6, 7." Solving gives x = 5, y = 5. Pick row 5 for both. Logical TPA almost never has the same answer for both parts; quantitative TPA does regularly. Trust the math.

**Trap 4: Binary scoring → all-or-nothing pacing.**

TPA is graded all-or-nothing per question. Part 1 right and Part 2 wrong earns zero credit — identical to missing both. There is no partial credit, ever.

Strategic consequence: if you're stuck on Part 1 at the 2:30 mark, do not spend another 90 seconds carefully solving Part 2. That 90 seconds earns zero expected points on the current question and costs you the chance to fully solve an easier question elsewhere. Commit to a best guess for both and move.

The flip side: once Part 1 is nailed with confidence, invest fully in Part 2. The point is only awarded if both are correct — Part 2 now has full value.

**The compute-first reflex (the meta-discipline).**

Strong TPA solvers derive their answers on scratch paper before they look at the list. Students who scan the list first anchor on a value that "looks right" for one part and stop doing algebra. The list is deliberately populated with trap values that look right for the wrong reasons.

The discipline: **derive both values from the problem on your scratchwork, then find them in the list**. If your value isn't in the list, your setup has an error — check before guessing. The list is a verification layer, not a starting point.

**The full TPA verification routine — every question, no exceptions.**

1. Derive both values from the problem without consulting the list.
2. Find each value in the list.
3. Substitute both back into every original equation. Both must hold.
4. Restate what each part asked for. Confirm your selection answers that specific question, not an intermediate quantity.

This adds 15–20 seconds per question. It eliminates the errors that Traps 1 and 2 are designed to produce.

> **Self-explanation prompt.** Why is verifying the joint constraint specifically the last step in TPA — rather than treating each part as an independent question? If you can say "because TPA's format invites column-by-column thinking — picking each part as if it were independent — and only joint verification forces you to check the cross-constraint the format is designed to test," you've understood why TPA punishes the same algebra mistake more severely than DS or PS would.

## @cause-effect-patterns

Cause-and-effect reasoning appears in most logical TPA questions. It shows up as one of two question types, and knowing which one you're in before reading the answer list saves 30–40 seconds.

**Type 1: The causal argument pair.** The argument claims X caused Y. Part 1 asks for "a fact that supports the causal claim"; Part 2 asks for "a fact that undermines it." Both draw from the same list. Your job: evaluate how each answer option interacts with the causal link.

**Type 2: The structural role pair.** The argument uses causal language ("because," "led to," "resulted in"). Part 1 asks for "the cause the author identifies"; Part 2 asks for "the effect" (or the mechanism, or a counter-cause). Your job: identify which parts of the argument play each causal role — no evaluation, just mapping.

**The causal argument template.**

Author observes correlation between X and Y, then concludes X caused Y. The argument is always vulnerable to:

- Alternative causes — Z caused Y instead of X
- Reversed causation — Y actually caused X
- Confounding — a third variable drives both X and Y
- Self-selection — the group exposed to X was already different from the control group

**Supporters** strengthen causal claims by:

- Establishing temporal order (X preceded Y — necessary but not sufficient)
- Providing a mechanism (a physical, biological, or economic process linking X to Y)
- Ruling out alternative causes (showing specific competing explanations were absent)
- Demonstrating dose-response (more X → more Y, which would be hard to explain as coincidence)

Of these, **ruling out alternative causes** is almost always the strongest move available on GMAT. An answer that eliminates the single most plausible alternative explanation will beat an answer that adds more correlated evidence.

**Underminers** weaken causal claims by:

- Introducing a credible alternative cause
- Reversing the direction (Y preceded X, or Y causes X)
- Showing a confounding variable that drove both
- Demonstrating that X and Y occur independently in other contexts

**Example (full analysis — causal argument pair).** Argument: "Employees who completed the company's 12-week fitness program had 40% fewer sick days in the following year compared to employees who did not participate. The program clearly improves employee health."

Causal claim: fitness program → improved health (fewer sick days).
Primary vulnerability: self-selection — employees who enrolled may have been healthier or more motivated to begin with. The 40% gap might reflect who enrolled, not what the program did.

From a hypothetical answer list:

- Part 1 (supporter): "Participation was randomly assigned by HR rather than chosen by employees." — Eliminates self-selection entirely. This is the category of strengthener that most directly addresses the primary vulnerability.
- Part 2 (underminer): "Employees who declined the program were significantly more likely to have reported chronic health conditions at baseline." — Suggests the sick-day difference reflects pre-existing health differences, not program effect. Classic self-selection underminer.

**Example (structural role pair — causal chain).** Argument: "The new inventory software reduced order processing time by 20%, which allowed the warehouse team to handle a higher volume of orders without adding staff."

This is a three-step causal chain:

    new software → 20% faster processing → higher volume without added staff

Part 1: "Identify the proximate cause of the time reduction." → New inventory software.
Part 2: "Identify the downstream outcome described by the author." → Ability to handle higher volume without added staff.

**Mapping causal chains.** Three-step chains produce a common error: students correctly map the chain but pick from the wrong position. "The 20% time reduction" is the intermediate effect — it sits between cause and final outcome. If Part 2 asks for "the most distal outcome," you need the last node, not the middle one. Write the chain explicitly before matching:

    cause → intermediate effect → final outcome

Then read the question stem and pick the correct node.

**Micro-drill.** For each argument, (a) state the causal claim, (b) identify the primary vulnerability, (c) give the best strengthener and the best underminer. 90 seconds each.

1. "Schools that adopted a four-day school week showed 15% higher teacher retention compared to schools on a traditional schedule. The shorter week appears to reduce burnout."

2. "Neighborhoods with active community gardening programs have lower vandalism rates than comparable neighborhoods without them. Community gardens appear to reduce antisocial behavior."

Answers: (1) Causal claim: four-day week → reduced burnout → better retention. Vulnerability: schools adopting four-day weeks may differ systematically (rural vs. urban, existing morale, funding) from those that didn't. Best strengthener: "Schools were matched for demographic, funding, and prior-year retention before comparison" or "schools were randomly selected for the pilot." Best underminer: "Schools adopting the four-day week were predominantly rural, and rural schools historically have higher teacher retention regardless of schedule." (2) Causal claim: community gardens → reduced antisocial behavior. Vulnerability: reversed causation or confounding — neighborhoods with higher social cohesion may both start gardens *and* have lower vandalism, making social cohesion the driver, not the gardens. Best strengthener: "Vandalism rates declined specifically on blocks adjacent to new garden plots, with no change on nearby blocks without gardens." Best underminer: "The neighborhoods that started gardening programs had undergone significant demographic shifts prior to the programs, with different residents moving in before vandalism rates changed."

> **Self-explanation prompt.** Why does ruling out alternative causes strengthen a causal claim more reliably than adding correlated supporting evidence? If you can say "because additional correlated evidence still permits alternative explanations — it narrows nothing — while ruling out an alternative eliminates one of the remaining ways the conclusion could be false," you've understood the asymmetric structure of causal arguments that governs both TPA and every CR strengthener/weakener question.

## @summary

Two-Part Analysis is two question types wearing the same format. Classifying the flavor in the first 10 seconds determines the entire approach.

**The Two-Part decision tree.**

1. **Classify the flavor.** Numbers and equations → quantitative. Arguments and roles → logical.
2. **Quantitative:** define variables, set up two equations, solve, match to list.
3. **Logical:** decompose the argument (conclusion, evidence, assumption), identify what each part's role is, match to list.
4. **Verify the joint constraint.** Substitute both selections into every original equation or re-read the argument with both substituted. Both must hold.

**The quantitative templates.**

| Template | Formula |
|---|---|
| Combined work | 1/a + 1/b = 1/T |
| Weighted mixture | x + y = t; c_X·x + c_Y·y = c·t |
| Split capital | a + b = P; r_A·a + r_B·b = R |
| Distance-rate-time | d = r·t, separation rate = sum (opposite) or difference (same direction) |

**The logical roles.**

| Role | Signature |
|---|---|
| Conclusion | Main claim, often after "therefore" |
| Evidence / premise | Facts and observations; often after "because" or "since" |
| Assumption | Unstated premise; negating it collapses the conclusion |
| Strengthener | Fact that narrows the evidence-conclusion gap |
| Weakener | Alternative cause, confounder, or counter-evidence |
| Counter-claim | View the author argues against — not the author's own position |
| Intermediate conclusion | Step drawn from evidence, then used as evidence for the main claim |

**The four traps, named.**

1. Single-column-valid pair — looks good per column; fails the joint constraint.
2. Intermediate-result distractor — a computed sub-step appears in the list to lure you.
3. Must-differ assumption — the two parts can be the same row; trust the math.
4. Binary-scoring pacing error — no partial credit; don't polish Part 2 when Part 1 is uncertain.

**The verification routine, every question.**

1. Derive both values before consulting the list.
2. Find each value in the list.
3. Substitute back into every original constraint.
4. Confirm each selection answers the specific question its part asked.

**Time-management targets.**

- Easy quantitative TPA: under 90 seconds.
- Medium: 90–120 seconds.
- Hard: up to 2 minutes; at 2:30 with Part 1 still uncertain, commit to a best guess and move.

**What to do next.**

1. **Easy set, no time limit.** Two questions. Goal: perfect accuracy using the full five-step procedure every time (classify → derive → match → verify). If you miss one, identify whether the failure was classification (wrong flavor), setup (wrong equations), arithmetic, or joint verification. The root cause determines the fix.

2. **Medium set, 90-second target.** Eight questions. Log every question where you consulted the answer list before finishing your scratchwork — that's the compute-first reflex breaking down. Fix this habit before moving to hard; the harder questions are specifically designed to exploit list-first solvers.

3. **Hard set, first pass untimed.** Five questions. On each, write the two equations (quantitative) or the full argument structure (logical) explicitly before looking at the answer list. Time yourself only on the second pass. Hard TPA errors sort almost perfectly into the four trap categories — after each miss, name which trap you fell into.

4. **Error pattern audit.** If two or more misses are on logical TPA, the gap is argument decomposition — return to the logical section, run the micro-drill again, and retest before the mock. If two or more misses are on quantitative TPA, check whether your equations were set up correctly before you touched the list; if they were, the gap is the compute-first reflex; if they weren't, the gap is template recognition.

Two-Part carries disproportionate weight in Data Insights because the question bank is smaller than Quant or CR. Each question matters more. Target 90%+ on medium before test day.
