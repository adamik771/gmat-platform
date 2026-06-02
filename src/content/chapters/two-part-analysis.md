---
slug: two-part-analysis
title: Two-Part Analysis
section: DI
estimated_minutes: 50
prerequisites: []
summary: |
  Two-Part Analysis asks you to pick two values from a shared answer list — the two values must jointly satisfy the constraints of the question. The questions come in two flavors: quantitative (set up equations, pick the pair that solves the system) and logical (identify two roles in an argument — like conclusion and assumption). The key insight that most prep books miss: Logical TPA is Critical Reasoning with a different answer format. If you can decompose an argument for CR, you can solve every Logical TPA. Master the two-flavor classification and the appropriate discipline for each, and you'll solve every Two-Part question in under two minutes.
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
      Two-Part Analysis is the most misunderstood format on the GMAT — not because the math or logic is harder, but because the answer format creates a failure mode that doesn't exist anywhere else on the test. Understanding that failure mode upfront is more valuable than any trick or shortcut.
    check_question_ids:
      - two-part-analysis-q11

  - id: quantitative-setup
    type: reading
    title: "Quantitative Two-Part — set up the equations, then pick the pair"
    intro: |
      Quantitative Two-Part is a two-unknown algebra problem wearing an unfamiliar dress. The algebra is the same as any GMAT PS or DS word problem — define variables, write two equations, solve. This section gives you the workflow, three worked examples across the common problem types, and three micro-drills to lock in the pattern.
    check_question_ids:
      - two-part-analysis-q1
      - two-part-analysis-q2
      - two-part-analysis-q3

  - id: logical-two-part
    type: reading
    title: "Logical Two-Part — argument structure and role mapping"
    intro: |
      Logical TPA is Critical Reasoning with a different answer format. That single insight unlocks every Logical TPA question. If you can find a conclusion, trace evidence, and spot an assumption on a CR question — and you can — then Logical TPA is already a skill you own. This section shows you how to apply it.
    check_question_ids:
      - two-part-analysis-q4
      - two-part-analysis-q6
      - two-part-analysis-q13

  - id: rate-and-mixture-templates
    type: reading
    title: "Rate, mixture, and system-of-equations templates"
    intro: |
      Three question templates account for roughly 70% of all Quantitative Two-Part questions you will see: combined work, weighted mixture, and split-capital investment. All three reduce to the same two-equation structure. Recognize the pattern and the setup becomes automatic.
    check_question_ids:
      - two-part-analysis-q5
      - two-part-analysis-q7
      - two-part-analysis-q15

  - id: common-tpa-traps
    type: reading
    title: "The four TPA traps — and the compute-first reflex"
    intro: |
      Two-Part Analysis has the most consistently mis-handled traps of any DI subtype. The format itself creates failure modes that don't exist on other question types. The four traps below cost more points on hard TPA than any algebra error. Read them once, but more importantly: understand *why* each trap works, so you'll recognize the setup even when the surface details look different.
    check_question_ids: []

  - id: cause-effect-patterns
    type: reading
    title: "Cause-and-effect argument patterns"
    intro: |
      Causal reasoning shows up in both Logical TPA and CR, and it's worth treating separately. The GMAT tests a specific pattern — author observes correlation, claims causation — and the ways to support or undermine a causal claim are predictable. Internalize the four causal-support moves and the three causal-undermine moves, and you'll instantly know which facts to look for in the answer list.
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

The failure mode that makes Two-Part Analysis hard isn't unfamiliar math or tricky logic. It's a structural trap built into the format: you have to satisfy a **joint** constraint, but the answer table invites you to treat each column as an independent question. Every other GMAT format asks you to satisfy one constraint. TPA asks you to satisfy a linked pair. Students who don't internalize this distinction approach the two columns separately — and that's exactly where points are lost.

**The format.**

You get a problem stem — either a word problem or an argument — and a shared answer list. The list has 5–6 options. You pick exactly one option for each of the two parts. The two picks can be the same option or different options.

|          | Part 1 | Part 2 |
|----------|--------|--------|
| Option A | ◯      | ◯      |
| Option B | ◯      | ◯      |
| Option C | ◯      | ◯      |
| Option D | ◯      | ◯      |
| Option E | ◯      | ◯      |
| Option F | ◯      | ◯      |

**The two flavors.**

There are exactly two TPA flavors. Everything else is a variation on one of them.

**Quantitative:** Numbers, units, and equations. You set up a system of two equations, solve for two unknowns, and match your answers to the list. Same algebra as any PS or DS word problem — just with a different answer format.

**Logical:** An argument or scenario. You identify two roles — conclusion, assumption, strengthener, weakener, cause, effect, disputed claim — and match each to a statement in the list. Same analysis as Critical Reasoning — just with two selections instead of one.

**The 10-second flavor check.**

Before doing anything else, classify the flavor. This is not optional.

Quantitative tells: numbers, units, "find the value of," "how many," rates, percentages.

Logical tells: arguments, claims, conclusions, assumptions, "identify the role," "supports," "undermines."

Misclassifying costs 90 seconds. If you try to set up equations for a logical question, you'll spin. If you search for argument roles in a quantitative question, you'll lose your bearings. The 10-second classification at the start recovers more time than almost any other single habit.

**The approach — same four steps for both flavors.**

1. Classify the flavor (10 seconds).
2. Solve the problem from the stem — before scanning the answer list.
3. Find your answers in the list.
4. Verify both answers jointly satisfy every constraint in the problem.

**Why you derive first, then check the list.** The answer list is a verification tool, not a starting point. Students who scan the list first anchor on values that look plausible, then reverse-engineer the problem around those anchors. That's the setup for two of the four major TPA traps (discussed in @common-tpa-traps). The list exists to confirm your derived answers — not to give you ideas.

> **Recall check.** Close your eyes. Describe the Two-Part format in one sentence. Now name the two flavors and how to distinguish them. Finally, state the four-step approach. (Shared list, pick one per column. Quant: numbers + equations. Logical: argument + roles. Steps: classify → derive → find → verify.) Locking in this structure before you see the first question is what separates a systematic solver from a guesser.

## @quantitative-setup

Quantitative Two-Part is a word problem with two unknowns. Underneath the unfamiliar answer table, it's the same algebra as any two-equation, two-unknown system you've solved on PS or DS. The format is new; the skill is not.

**The standard workflow.**

1. Define two variables for the two quantities you need to find.
2. Translate the problem into two equations.
3. Solve the system (substitution or elimination).
4. Match each variable's value to the answer list.

**Example 1 (combined work).** "Truck A delivers a load in 6 hours alone. Truck B delivers the same load in 4 hours alone. Together, they take T hours. A alone takes S hours. List: 1.6, 2.4, 3.6, 4.0, 6.0."

- S (A alone) is given directly: 6 hours. **Pick 6.0 for Part 2.**
- Combined rate = 1/6 + 1/4 = 2/12 + 3/12 = 5/12 per hour. T = 12/5 = 2.4 hours. **Pick 2.4 for Part 1.**

**Example 2 (mixture).** "Mix Solution X (30% salt) with Solution Y (60% salt) to make 10 L of 45% salt solution. Find x and y. List: 2, 3, 4, 5, 6, 7 (all in liters)."

- x + y = 10. 0.30x + 0.60y = 0.45 × 10 = 4.5.
- Substitute x = 10 − y: 0.30(10 − y) + 0.60y = 4.5 → 3 + 0.30y = 4.5 → 0.30y = 1.5 → y = 5, x = 5.
- **Pick 5 for both parts.** (Same option for both is valid and common on mixture problems.)

**Example 3 (investment).** "Invest $100,000 between Fund Alpha (8% return) and Fund Beta (5% return). Total return $6,800. Find the amount in each fund. List: 20K, 40K, 50K, 60K, 70K, 80K."

- a + b = 100,000. 0.08a + 0.05b = 6,800.
- Multiply second equation: 8a + 5b = 680,000. Substitute b = 100,000 − a: 8a + 5(100,000 − a) = 680,000 → 3a = 180,000 → a = 60,000. b = 40,000.
- **Pick 60,000 for Alpha, 40,000 for Beta.**

**Micro-drills.** Work out your answer completely before reading the solution.

*Drill 1.* A tank is filled by Pipe A in 12 hours, and simultaneously drained by Pipe B in 20 hours. How long T does it take to fill the tank from empty? After 15 hours, what fraction F of the tank has been filled? List: 1/4, 1/2, 2/3, 3/4, 30.

- Net fill rate = 1/12 − 1/20 = 5/60 − 3/60 = 2/60 = 1/30 per hour.
- T = 30 hours. After 15 hours: 15 × (1/30) = 1/2. **T = 30, F = 1/2.**

*Drill 2.* A merchant blends x kg of coffee at $4/kg with y kg at $7/kg, producing 10 kg at $5.50/kg average cost. Find x and y. List: 3, 4, 5, 6, 7, 8.

- x + y = 10. 4x + 7y = 55.
- Substitute: 4(10 − y) + 7y = 55 → 40 + 3y = 55 → y = 5, x = 5. **Both are 5.**

*Drill 3.* Two trains depart opposite ends of a 480-mile route at the same time. Train A travels at 60 mph, Train B at 80 mph. After how many hours T do they meet? How far D has Train A traveled? List: 2, 2.4, 3, 144, 200, 205, 288.

- Combined speed = 140 mph. T = 480/140 = 24/7 ≈ 3.43 hours. D = 60 × 24/7 ≈ 205.7 miles.
- On the GMAT, the list provides exact fractions or nearby values — pick the values your algebra generates. **T ≈ 3.43, D ≈ 205.7.**

**Two shortcuts.**

*Same answer for both parts.* When the math yields the same value for Part 1 and Part 2 (common on symmetric mixture problems), pick the same row for both. The format allows it; trust the math.

*Backsolve if stuck.* If the answer list is small (4–5 values) and your algebra isn't converging, plug options from the list into both constraints and find the pair that works. This is usually slower than direct solving, but it's a reliable fallback on hard questions.

> **Self-explanation prompt.** Why is Quantitative TPA just a two-equation system? If you can say "because the shared-list format is a presentation convention; underneath, it's two-unknown algebra identical to PS and DS," you've stripped the mystery from the format. You already know how to solve these — the only new skill is where to write your answers.

## @logical-two-part

Logical TPA is Critical Reasoning with a different answer format. That's the complete framing. If you can identify a conclusion, trace evidence, and spot an assumption on a CR question — you already own the core skill. The only new mechanic: instead of picking one best answer, you assign two argument roles to two separate columns.

This reframing matters because the biggest mistake students make on Logical TPA is treating it as something unfamiliar. They scan the answer list looking for "what seems right for Column 1" — the same way they'd approach a CR question without having read the argument carefully. That approach fails on CR and it fails here.

**The three-step Logical TPA workflow.**

1. **Decompose the argument.** Identify the conclusion, evidence, and assumption before reading the question stem. This takes 30 seconds and makes the rest automatic.
2. **Read the question.** Identify what Part 1 and Part 2 are each asking for. Match those roles to your decomposition.
3. **Select and verify.** Find the statements in the list that fill each role. Re-read the argument with your two selections placed in their roles. Does each one fit?

**Quick argument decomposition — 30 seconds.**

- **Conclusion**: the author's main claim. Signals: "therefore," "thus," "shows that," "conclude," "suggests."
- **Evidence**: what the author uses to support it. Signals: "because," "since," "data shows," "research found," "studies indicate."
- **Assumption**: the unstated premise the argument requires. Usually bridges the evidence to the conclusion — often about ruling out alternative causes, representing a broader population, or extending a correlation to causation.

**Common Part 1 / Part 2 pairings on Logical TPA:**

| Part 1 asks for | Part 2 asks for |
|---|---|
| Conclusion | Primary assumption |
| Fact that strengthens | Fact that weakens |
| Claim the author makes | Claim the author disputes |
| Cause | Effect |
| Evidence used | Conclusion drawn |

**Example 1 (conclusion + assumption).** Argument: "Our company's employee retention rate increased 18% after we launched a flexible work schedule. This shows that flexible work policies drive higher retention."

Decompose first:
- *Evidence*: Retention rose 18% after the flex schedule launched.
- *Conclusion*: Flexible work policies drive higher retention.
- *Assumption*: The retention increase was caused specifically by the flexible schedule — not by some other change that happened at the same time (e.g., salary adjustments, new management, improved benefits).

Part 1 (conclusion) → "Flexible work policies drive higher retention."

Part 2 (primary assumption) → "No other significant change occurred at the same time that could explain the 18% retention improvement."

**Verification.** Negate Part 2 and check whether the conclusion still holds. If another factor caused retention to rise, the conclusion "flex schedules drive retention" falls apart. That confirms the assumption.

**Example 2 (strengthen + weaken).** "A university found that graduates who took a statistics course in their final year earned 12% more on average over the first five years of employment. The dean concluded the statistics course is responsible for the higher earnings."

Decompose:
- *Evidence*: Statistics-course graduates earn 12% more.
- *Conclusion*: The statistics course causes higher earnings.
- *Assumption*: The earnings difference is caused by the course, not by prior differences between students who chose statistics and those who didn't.

Part 1 (strengthen): "Students were randomly assigned to take statistics or an equivalent elective." (Eliminates self-selection — the assumption now holds.)

Part 2 (weaken): "Students who chose statistics had higher GPAs and were more likely to enter higher-paying fields before taking the course." (Alternative cause — the assumption breaks down.)

The same argument; the roles for each part point in opposite directions.

**Example 3 (claim made + claim disputed).** Some Logical TPA questions ask for "a claim the argument makes" (Part 1) and "a claim the argument disputes or argues against" (Part 2).

Argument: "Critics argue that shorter workweeks reduce productivity. In fact, multiple firm-level studies show no productivity decline when hours fell from 40 to 32 per week. Therefore, concerns about productivity loss from shorter workweeks are unfounded."

- Claim the author *makes*: Productivity does not decline under a 32-hour workweek.
- Claim the author *disputes*: Shorter workweeks reduce productivity.

Both statements appear in the answer list. The most common error here: picking the disputed claim for Part 1. The author is arguing *against* the critics' view — don't attribute the critics' claim to the author.

**Micro-drills.** Decompose the argument before reading any answer choices.

*Drill 1.* Argument: "Schools that reduced class size from 30 to 20 students saw exam scores improve by an average of 8%. The school board concluded that smaller classes cause better learning outcomes."

State (a) the conclusion and (b) the primary assumption.

*(Conclusion: smaller classes cause better learning outcomes. Assumption: the exam improvement was due to class size reduction, not to other simultaneous interventions — e.g., new teachers, curriculum updates, or the fact that high-performing districts were more likely to make this change.)*

*Drill 2.* Argument: "Company A's top performers all had a mentor in their first year. Employees who had a mentor were three times as likely to reach the top quartile within five years. Therefore, mentorship programs cause high performance."

State one fact that strengthens the conclusion and one that weakens it.

*(Strengthen: employees were randomly assigned to mentorship programs vs. a control group — eliminating self-selection. Weaken: high-potential employees were preferentially selected for mentorship, making the top-quartile correlation a reflection of prior ability rather than mentorship effect.)*

**The "distinguish conclusion from evidence" check.** Ask yourself: "Is this statement what the author is trying to *prove* — or what the author is using *as proof*?" If it's a premise supporting the main claim, it's evidence. If it's the claim being supported, it's the conclusion. When in doubt, ask: "Can I use this statement to argue for something else in the passage?"

**Trap to watch.** Arguments often include a counter-claim — a view the author explicitly rejects. These counter-claims appear in the answer list and are designed to trap students who skim. Never pick a counter-claim as the author's conclusion. The conclusion is what the author *endorses*, not what the author *argues against*.

> **Self-explanation prompt.** Why is Logical TPA the same skill as Critical Reasoning? If you can say "because both require identifying the argument's structural roles — evidence, conclusion, assumption — and the only mechanical difference is that TPA assigns two of those roles to separate answer columns instead of asking you to pick one," then you've seen through the format. Every CR strategy you have transfers directly. Practice CR to improve Logical TPA; the skills are one-to-one.

## @rate-and-mixture-templates

The three most common Quantitative TPA templates are combined work, weighted mixture, and split-capital investment. All three reduce to the same structure: two equations, two unknowns. Learn to recognize the pattern on sight and the setup becomes automatic.

**Template 1: Combined work.**

Workers A and B have individual times `a` and `b`. Combined time T satisfies:

    1/a + 1/b = 1/T

If the question asks for T and one of the individual times (or rates), solve using this formula.

**Template 2: Weighted mixture.**

Mix quantity x of solution with concentration c_X and quantity y of solution with concentration c_Y to get total quantity t with concentration c:

    x + y = t
    c_X × x + c_Y × y = c × t

Two equations, two unknowns. Substitute or eliminate.

**Template 3: Split-capital investment.**

Invest capital P between two instruments with rates r_A and r_B for total return R:

    a + b = P
    r_A × a + r_B × b = R

Same structure. Note that rates are usually given as percentages — convert to decimals before setting up (8% → 0.08).

**Template 4: Distance-rate-time.**

Two objects at rates r_1 and r_2 over distances d_1 and d_2:

    d_1 = r_1 × t_1
    d_2 = r_2 × t_2

Plus the constraint linking t_1 and t_2 (same time, meet at a point, one catches the other). Separation rate = sum (opposite directions) or difference (same direction, catch-up).

**Worked example (D/R/T Two-Part).** Two cars start together and drive in opposite directions. Car A at 50 mph, Car B at 70 mph. After how many hours T are they 360 miles apart? How far D has Car A traveled?

- Separation rate: 50 + 70 = 120 mph.
- 120T = 360 → T = 3 hours.
- D = 50 × 3 = 150 miles.
- **Pick T = 3 for Part 1, D = 150 for Part 2.**

**Worked example (constraint-based).** "A factory produces chairs and tables. Each chair uses 5 units of wood and 2 labor hours; each table uses 8 units and 5 hours. Budget: 80 wood units, 35 labor hours. Find the maximum chairs C and maximum tables T that can be produced simultaneously."

Constraints: 5C + 8T ≤ 80 and 2C + 5T ≤ 35.

Solve the equality system: 5C + 8T = 80 and 2C + 5T = 35. Multiply: 10C + 16T = 160 and 10C + 25T = 175. Subtract: 9T = 15 → T = 5/3 (non-integer). Since the answer list contains integers, test corner points. C = 10, T = 3: 50 + 24 = 74 ≤ 80 ✓, 20 + 15 = 35 ✓. Both constraints tight — this is the binding corner.

**The "non-integer" signal.** When your algebra yields a non-integer and the answer list has only integers, you've hit a constraint optimization problem. Switch to corner-point testing — try combinations near your fractional solution and verify both constraints.

> **Recall check.** Without looking, state the combined-work formula, the mixture-system structure, and the investment-system structure. (1/a + 1/b = 1/T; x + y = t and c_X·x + c_Y·y = c·t; a + b = P and r_A·a + r_B·b = R.) All three are the same skeleton — two linear equations, two unknowns. Retrieval of all three means you recognize the template within the first sentence of a new problem.

## @common-tpa-traps

Two-Part Analysis has the most consistently mis-handled traps of any DI subtype. The format creates failure modes that don't exist on other question types. Each trap below is designed to exploit a specific behavior pattern — knowing the pattern means you can catch yourself before you fall in.

**Trap 1: The single-column-valid pair.**

This is the signature TPA failure. You pick a value for Part 1 that's valid considered alone, then a value for Part 2 that's valid considered alone — and the pair violates the joint constraint between them.

*Example.* The problem requires x + y = 10. The list: 2, 3, 4, 5, 6, 7. Under time pressure, a student picks x = 4 and y = 5 — each passes the column-level sanity check, but 4 + 5 = 9 ≠ 10. The pair fails.

The fix: **always verify the joint constraint as the last step**. Plug both values back into every original equation. Both must hold simultaneously.

**Trap 2: The intermediate-result distractor.**

The answer list almost always includes a value you encounter *during* the solve — not the final answer. Students who finish step 3 of a 4-step problem, spot their intermediate value in the list, and bubble in that value lose the question.

*Example.* Solving 3a + 5b = 100 and a + b = 24: substituting b = 24 − a gives −2a = −20 → a = 10. The intermediate value −2a = −20 means the list likely includes "20." A student who just stared at 20 on their scratch paper may bubble it reflexively. But Part 1 asked for `a`, not `2a`.

The fix: **before submitting, restate what each part asks for and confirm your selected value answers that question specifically** — not an intermediate step, not the coefficient, not the complementary value.

**Trap 3: The "must differ" assumption.**

Students often assume Part 1 and Part 2 must select different rows. They're not required to. When the math produces the same value for both parts — common on symmetric mixture problems — pick the same row for both and move on.

*Example.* "Mix Solution X (30% salt) with Solution Y (60% salt) to make 10 L of 45% solution." Solving: x = 5, y = 5. Correct answer: pick 5 for both. The format allows it. Logical TPA almost never yields the same selection for both parts; Quantitative TPA does, regularly.

**Trap 4: Binary scoring → all-or-nothing pacing.**

TPA is all-or-nothing. Getting Part 1 right and Part 2 wrong earns zero credit — the same as missing both. This matters for pacing.

If at the 2:30 mark Part 1 is still uncertain, commit to a best guess for both parts and move on. Spending another 90 seconds solving Part 2 carefully when Part 1 is still wrong earns zero expected points on this question — and those 90 seconds could fully solve an easier question downstream.

The flip side: once you've confirmed Part 1, *now* it makes sense to invest time in Part 2, because each part you answer correctly counts toward the full point.

**The compute-first reflex (the meta-discipline).**

Strong TPA solvers derive both answers on their scratchwork *before* scanning the list. Students who scan the list first anchor on values that look plausible, then bend their algebra to match. They lock onto a number that fits Part 1 and twist Part 2 around it — which is exactly how Traps 1 and 2 get triggered.

The discipline: **derive, then verify**. The list is a confirmation layer, not an input.

**The full TPA verification routine — every question, no exceptions.**

1. Derive both values from the problem (don't consult the list yet).
2. Find each value in the list.
3. Substitute both selections back into *every* original equation. Both must hold.
4. Restate what each part was asking for. Confirm your selection answers that specific question — not an intermediate quantity.

This routine adds 15–20 seconds per question. It prevents the category of errors most responsible for missed points on hard TPA.

> **Self-explanation prompt.** Why does TPA specifically reward the joint-verification step when DS or PS doesn't require it in the same way? If you can say "because the two-column format creates the illusion that each part is an independent check — but the problem has cross-column constraints that only joint verification catches," you've understood why TPA punishes the same algebra mistake more than any other format would.

## @cause-effect-patterns

Causal reasoning is the most commonly tested logic structure in Logical TPA. The pattern is predictable: an author observes that X and Y co-occur, then claims X caused Y. Two-Part questions ask you to identify one fact that supports the causal claim (Part 1) and one fact that undermines it (Part 2) — or vice versa.

**The causal claim structure.**

- *Observation*: X and Y correlate (occur together, rise together, follow each other).
- *Claim*: X caused Y.
- *The gap*: correlation is not causation. The argument requires that no alternative explanation accounts for Y.

**Four moves that support a causal claim.**

1. **Establish temporal order.** X occurred before Y. (Causation requires precedence — causes come before effects.)
2. **Provide a mechanism.** Explain *how* X leads to Y. (A plausible pathway closes the correlation-causation gap.)
3. **Rule out alternative causes.** Other potential causes of Y were absent, controlled for, or constant across comparison groups.
4. **Demonstrate dose-response.** More X → more Y. (Gradient evidence is strong causal evidence.)

**Three moves that undermine a causal claim.**

1. **Introduce an alternative cause.** Something else explains Y, or Z → both X and Y (confounding variable).
2. **Reverse the direction.** Y may have caused X, not the other way around.
3. **Establish self-selection or sampling bias.** The groups being compared differ in ways other than X — making X's apparent effect explainable by pre-existing differences.

**Example.** "Employees who completed a leadership development program were promoted twice as fast as those who didn't. Therefore, the program accelerates career advancement."

Support candidates:
- "Enrollment in the program was randomized across all eligible employees." (Rules out self-selection — move 3.)
- "The promotion advantage appeared specifically for skills the program explicitly taught." (Establishes mechanism — move 2.)

Undermine candidates:
- "Employees who enrolled in the program had, on average, higher pre-program performance ratings." (Self-selection — the promoted group was already higher-performing before the program.)
- "The promotion difference disappeared when the analysis controlled for years of tenure." (Alternative cause — tenure, not program participation, drives promotion speed.)

**Structural TPA with intermediate conclusions.**

Some arguments have a two-step logical chain: evidence → intermediate conclusion → main conclusion. A Two-Part question may ask for "the intermediate conclusion" (Part 1) and "the main conclusion" (Part 2), or "evidence used" (Part 1) and "conclusion supported" (Part 2).

*Example.* "Studies show diverse leadership teams outperform competitors by 15%. Diverse teams bring varied perspectives that improve decision quality. Therefore, companies should invest in diversity initiatives."

- *Evidence*: Studies show 15% outperformance.
- *Intermediate conclusion*: Diverse teams make better decisions. (Drawn from the evidence; then used as support for the final claim.)
- *Main conclusion*: Companies should invest in diversity initiatives.

All three exist in the passage. Two-Part can ask for any two. Identify which role each plays before scanning the list.

**The "claim the author disputes" distinction.** Some arguments cite opposing views in order to refute them. If the question asks for "the author's conclusion," don't pick the view the author argues against — pick the view the author defends. The disputed view is in the list as a trap.

> **Self-explanation prompt.** Why does ruling out alternative causes specifically strengthen a causal claim? If you can say "because a causal argument asserts that X is the *unique* explanation for Y — every alternative ruled out shrinks the gap between 'X correlates with Y' and 'X caused Y'," you've internalized the asymmetric structure of causal evidence. You'll apply this logic automatically across CR, Logical TPA, and cause-effect Two-Part questions.

## @summary

Two-Part Analysis is two question types in one format. Recognizing the flavor within the first 10 seconds and applying the appropriate discipline is the highest-leverage habit in the chapter.

**The Two-Part decision tree.**

1. **Read the stem. Classify the flavor.** Numbers and equations → Quantitative. Arguments and roles → Logical.
2. **Quantitative:** define variables, write two equations, solve, match to list. Verify both values satisfy every equation.
3. **Logical:** decompose the argument (conclusion, evidence, assumption), identify what Part 1 and Part 2 each ask for, map roles to the list. Verify each selection fits its assigned role.
4. **Verify jointly.** Plug both selections into the original constraints — whether that means checking both equations (Quantitative) or re-reading the argument with both roles filled in (Logical).

**The quantitative templates.**

| Template | Setup |
|---|---|
| Combined work | 1/a + 1/b = 1/T |
| Weighted mixture | x + y = t; c_X·x + c_Y·y = c·t |
| Split capital | a + b = P; r_A·a + r_B·b = R |
| Distance-rate-time | d = r·t; separation rate = sum (opposite) or difference (same direction) |

**The logical argument roles.**

| Role | Signature |
|---|---|
| Conclusion | Main claim; often after "therefore," "thus," "shows that" |
| Evidence / premise | Facts and observations; often after "because," "since," "data shows" |
| Assumption | Unstated premise the argument requires; usually "no alternative cause" or "sample represents population" |
| Strengthener | Additional fact that closes the evidence-to-conclusion gap |
| Weakener | Fact that opens an alternative explanation or undermines the evidence |
| Counter-claim | View the author argues *against* — not the author's own conclusion |

**The four traps — in one sentence each.**

- *Single-column-valid pair*: each answer passes a solo sanity check, but the pair fails the joint constraint. Fix: verify both values in every equation together.
- *Intermediate-result distractor*: a mid-solve value appears in the list. Fix: restate what each part asks before submitting.
- *"Must differ" assumption*: the same row is valid for both columns. Fix: trust the math; pick the same row when algebra says so.
- *Binary scoring pacing*: all-or-nothing scoring makes a half-solved question worth zero. Fix: commit a full guess before time expires; don't invest in Part 2 when Part 1 is unresolved.

**Time-management targets.**

| Difficulty | Target time |
|---|---|
| Easy Quantitative | Under 90 seconds |
| Medium (Quant or Logical) | 90–120 seconds |
| Hard | Up to 2 minutes; guess at 2:30 if unresolved |

**What to do next.**

Drill the 15 questions in this chapter's problem sets. Because Two-Part is a smaller pool in the DI section, each question carries above-average weight — miss three and your DI score drops noticeably. Aim for 90%+ on easy and medium before test day.

After the problem sets, do a focused pass through @common-tpa-traps and identify which of the four traps has caught you. One trap typically dominates; address it specifically. For Logical TPA weakness, return to any Critical Reasoning chapter and drill argument decomposition — the skills are one-to-one.
