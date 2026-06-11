---
slug: quant-07-gcf-lcm-units-digits
title: "Arithmetic: GCF/LCM, Units Digits & Estimation"
section: Quant
estimated_minutes: 12
prerequisites:
  - quant-06-fractions-decimals
summary: |
  Three pattern tools that replace grinding: read GCF and LCM off one prime-factor table, answer any units-digit power question from a four-step cycle, and let the answer-choice spread decide when estimation beats exact computation.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions before the lesson. Miss them freely; attempting first sharpens the read. As you work, notice your reflex: did you reach for long-hand computation the moment the numbers looked big?
    pretest_question_ids:
      - arithmetic-q13
      - arithmetic-q70
  - id: gcf-lcm
    type: reading
    title: "GCF and LCM — one factor table, two read-offs"
    check_question_ids:
      - arithmetic-q69
      - arithmetic-q33
  - id: gcf-lcm-in-the-wild
    type: reading
    title: "GCF and LCM in the wild — hearing the cue in word problems"
    check_question_ids:
      - arithmetic-q38
  - id: units-digit-patterns
    type: reading
    title: "Units digit patterns — answering power questions in 10 seconds"
    check_question_ids:
      - arithmetic-q70
      - arithmetic-q75
  - id: estimation-tricks
    type: reading
    title: "Estimation — when to compute and when to approximate"
    check_question_ids:
      - arithmetic-q37
      - arithmetic-q19
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
      - arithmetic-q79
      - arithmetic-q80
      - arithmetic-q81
      - arithmetic-q35
      - arithmetic-q82
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - arithmetic-q40
      - arithmetic-q71
      - arithmetic-q72
      - arithmetic-q74
      - arithmetic-q83
  hard:
    target_accuracy_by_score:
      "605": 25
      "645": 40
      "685": 60
      "725": 80
    question_ids:
      - arithmetic-q48
      - arithmetic-q49
      - arithmetic-q76
      - arithmetic-q84
---

## @gcf-lcm

Everything you did with fractions in the last chapter leaned on one skill: seeing a number as a product of primes. This section turns that skill into two test-day tools. GCF and LCM questions are free points for students who can read both values off a single factor table — and slow, error-prone guesswork for everyone else. The machinery takes ten minutes to own and never changes.

**Mental model.** A number's prime factorization is its parts list: `360 = 2³ × 3² × 5` means "three 2s, two 3s, one 5." GCF and LCM are the same table read in opposite directions. The **GCF** collects only what both parts lists share — each common prime at its *lower* exponent. The **LCM** builds the smallest kit that contains both lists — every prime that appears anywhere, at its *higher* exponent. One table, two reads: min for GCF, max for LCM.

**Worked example (GCF by prime factorization).** GCF(42, 98). Factor: `42 = 2 × 3 × 7` and `98 = 2 × 7²`. The shared primes are 2 and 7, each at its lower exponent: 2¹ and 7¹. GCF = 2 × 7 = **14**. The 3 in 42 and the second 7 in 98 are not shared, so they contribute nothing.

**Worked example (GCF by the Euclidean algorithm).** When the numbers are large, factoring stalls. Instead, replace the larger number with the remainder of dividing larger by smaller, and repeat until the remainder is 0; the last non-zero remainder is the GCF. GCF(98, 42): 98 = 2 × 42 + 14, so the pair becomes (42, 14). Then 42 = 3 × 14 + 0. GCF = **14**. Speed standard: for two-digit numbers, factor; for three-digit or larger, run Euclid.

**Worked example (LCM, two reads).** LCM(8, 12). By max exponents: `8 = 2³`, `12 = 2² × 3`, so LCM = 2³ × 3 = **24**. Or by the identity below: GCF(8, 12) = 4, so LCM = (8 × 12) / 4 = 96 / 4 = **24**. Same table as the GCF — you just take the max of each exponent instead of the min.

**The identity worth memorizing.** For any two positive integers,

> GCF(a, b) × LCM(a, b) = a × b

Multiplying a and b double-counts the shared factors exactly once; dividing by the GCF removes that double-counting. The GMAT tests this identity directly: give you three of the four quantities, ask for the fourth.

**Worked example (using the identity).** The GCF of two integers is 4 and their LCM is 120. If one integer is 24, the other is (4 × 120) / 24 = **20**. Verify with the table: `24 = 2³ × 3`, `20 = 2² × 5` — min exponents give 2² = 4, max exponents give 2³ × 3 × 5 = 120. Both conditions check.

**Trap to watch.** GCF and LCM swap in students' heads under time pressure. Run the size check: GCF ≤ both inputs ≤ LCM. If your "GCF" came out bigger than either input, you took max exponents and found the LCM. And never assume LCM(a, b) = a × b — that holds only when a and b share no primes. LCM(12, 18) is 36, not 216; the product overshoots by exactly the GCF.

**Where you've already used this.** Simplifying a fraction is dividing numerator and denominator by their GCF in one step — the pretest's 42/98 reduces by 14 to 3/7, no guessing. Finding a common denominator is taking the LCM: `1/8 + 1/12` → LCD = LCM(8, 12) = 24 → `3/24 + 2/24 = 5/24`. After reducing, verify: if numerator and denominator still share a prime, you divided by *a* common factor, not the *greatest* one — and the partially-reduced version is always waiting in the answer choices.

> **Recall check.** Without looking back: which exponents does the GCF take, which does the LCM take, and what does GCF × LCM equal? (Min exponents of shared primes; max exponents of all primes; the product a × b.) If any of the three took more than a beat, re-read the mental model before the drill.

**Micro-drill.** Under 45 seconds total:

1. GCF(36, 48) = ___
2. LCM(9, 15) = ___
3. Add `5/12 + 7/18` in simplified form = ___

Answers: (1) **12** (`36 = 2² × 3²`, `48 = 2⁴ × 3`; GCF = 2² × 3 = 12). (2) **45** (GCF(9,15) = 3; LCM = 9 × 15 / 3 = 45). (3) **29/36** (LCD = LCM(12,18) = 36; `15/36 + 14/36 = 29/36`; GCF(29,36) = 1, fully reduced). If (1) gave 6, you found *a* common factor but not the *greatest* — always verify that the quotients share no further factors.

> **Self-explanation prompt.** Why is LCM = (a × b) / GCF? If you can say "because multiplying a and b double-counts the shared factors, so dividing by GCF removes the double-counting exactly once," you understand the relationship — not just the formula.

## @gcf-lcm-in-the-wild

The test almost never says "find the LCM." It hides the machinery inside a story and pays the student who hears the cue. Word problems built on GCF and LCM are among the most formulaic on the exam — once you map the phrasing to the tool, the hard part is over and what remains is the ten-second read-off you just learned.

**The cue table:**

| The stem says | The tool |
|---|---|
| "every j minutes ... every k minutes ... when do they next coincide?" | LCM(j, k) |
| "largest equal groups / biggest tile / greatest length, with nothing left over" | GCF |
| "divisible by both a and b" | multiple of LCM(a, b) |
| "common denominator" | LCM of the denominators |
| "in lowest terms / fully reduced" | GCF of numerator and denominator is 1 |

The direction heuristic resolves any doubt: questions about events *building up* until they align ask for something **at least as large** as the inputs — LCM. Questions about *dividing down* into equal pieces ask for something **no larger** than the inputs — GCF. Decide the direction first; the tool follows.

**Worked example (sync → LCM).** Two shuttles leave a terminal together; one returns every 6 minutes, the other every 14. When are they next at the terminal together? Coinciding cycles is an LCM cue: `6 = 2 × 3`, `14 = 2 × 7`, LCM = 2 × 3 × 7 = **42 minutes**. Note the product trap: 6 × 14 = 84 double-counts the shared 2. The shuttles do meet at 84 — but they meet at 42 first, and "next" means first.

**Worked example (split → GCF).** A caterer has 54 sandwiches and 90 sliders and wants identical platters with nothing left over. The platter count must divide both 54 and 90; the *greatest* such count is GCF(54, 90) = 2 × 3² = **18 platters** — each carrying 3 sandwiches and 5 sliders. Dividing down into equal groups → GCF.

**Trap to watch.** The classic miss is answering the right question with the wrong direction — reporting the GCF when two buses sync up, or the LCM when a floor gets tiled. Sanity-check against the direction heuristic: a sync answer shorter than one of the cycles, or a "largest tile" bigger than the floor's side, is impossible on its face. With three inputs, factor all three at once — LCM(6, 10, 15) = 30, and no pairwise shortcut gets you there.

> **Recall check.** Name the tool, no peeking: (1) "blinking lights flash together again after how long?" (2) "greatest number of identical gift bags from 48 pens and 72 stickers?" (3) "smallest number divisible by both 4 and 6?" (4) "is 51/68 in lowest terms?" (Answers: LCM; GCF; LCM — its multiples are the candidates; GCF — it is 17, so no.) If you missed one, find its row in the cue table and say *why* the direction fits.

## @units-digit-patterns

The second pattern tool. "What is the units digit of 7^83?" looks like it demands a calculator and is actually a 10-second question — because the units digit of any power depends only on the units digit of the base, and those digits repeat in short cycles. `17^83` ends in the same digit as `7^83`: when you multiply, the units digit of the product depends only on the units digits of the factors. Memorize the cycles below and these questions become free time you can spend elsewhere.

**The cycles:**

| Units digit of base | Cycle (1st, 2nd, 3rd, 4th power…) | Cycle length |
|---|---|---|
| 0 | 0, 0, 0, … | 1 — always 0 |
| 1 | 1, 1, 1, … | 1 — always 1 |
| 2 | **2, 4, 8, 6**, 2, 4, 8, 6, … | 4 |
| 3 | **3, 9, 7, 1**, 3, 9, 7, 1, … | 4 |
| 4 | **4, 6**, 4, 6, … | 2 — odd exp → 4, even exp → 6 |
| 5 | 5, 5, 5, … | 1 — always 5 |
| 6 | 6, 6, 6, … | 1 — always 6 |
| 7 | **7, 9, 3, 1**, 7, 9, 3, 1, … | 4 |
| 8 | **8, 4, 2, 6**, 8, 4, 2, 6, … | 4 |
| 9 | **9, 1**, 9, 1, … | 2 — odd exp → 9, even exp → 1 |

Bases 0, 1, 5, 6: units digit never changes. Bases 4, 9: two-step cycles (just check odd/even). Bases 2, 3, 7, 8: four-step cycles — use the remainder method below.

**Method for four-step cycles:**
1. Divide the exponent by 4 and find the remainder.
2. Match the remainder to the cycle position: remainder 1 → position 1, remainder 2 → position 2, remainder 3 → position 3, **remainder 0 → position 4** (the last in the cycle, not the first).

**Worked example.** Units digit of 7^83.
- Cycle for 7: (7, 9, 3, 1)
- 83 ÷ 4 = 20 remainder **3** → position 3 → units digit is **3**.

**Worked example.** Units digit of 2^100.
- Cycle for 2: (2, 4, 8, 6)
- 100 ÷ 4 = 25 remainder **0** → position 4 → units digit is **6**.

**Trap to watch.** The zero-remainder rule is where these questions are lost. When the exponent is divisible by 4, the position is *4*, not 1 — remainder 0 maps to the **last** entry of the cycle. For base 7 that's 1; for base 2 that's 6; for base 3 that's 1; for base 8 that's 6. If a units-digit answer feels off, this mapping is the first thing to re-check.

**Worked example (compound).** What is the units digit of 3^7 + 8^4?

- 3^7: 7 ÷ 4 = 1 r 3 → position 3 in (3, 9, 7, 1) → units digit **7**.
- 8^4: 4 ÷ 4 = 1 r 0 → position 4 in (8, 4, 2, 6) → units digit **6**.
- Sum: 7 + 6 = 13 → units digit of sum is **3**.

Sums, differences, and products all work this way: resolve each power to its units digit first, then combine, then keep only the units digit of the result.

**Micro-drill.** Under 60 seconds total:

1. Units digit of 3^25 = ___
2. Units digit of 4^17 = ___
3. Units digit of 9^44 = ___
4. Units digit of 7^100 = ___

Answers: (1) **3** (25 ÷ 4 = 6 r 1 → position 1 → 3). (2) **4** (17 is odd → 4). (3) **1** (44 is even → 1). (4) **1** (100 ÷ 4 = 25 r 0 → position 4 of (7,9,3,1) → 1). If (2) gave 6, remember: for bases ending in 4, it's odd→4, even→6. If (4) gave 7, you treated remainder 0 as position 1 — it's always position 4.

> **Self-explanation prompt.** Why does only the units digit of the base matter? If you can say "because when multiplying integers, the units digit of the product equals the units digit of (units digit of factor 1 × units digit of factor 2)," you understand why `7^83` and `17^83` have the same units digit — and you'll never waste time writing out powers.

## @estimation-tricks

The third tool is a decision, not a technique: knowing *when* the answer choices let you skip exact computation. On every Problem Solving question, scan the choices before you start. If they're spread (5, 15, 50, 150, 500), estimate — a 5% rounding error can't jump to a neighbor that's 3× away. If they're tight (11, 12, 13, 14, 15), compute. The full decision framework lives in the Estimation strategy chapter; here you'll apply it to the arithmetic this block has built.

**Worked example (rounding with spread choices).** Approximately what is 39.8% of 1,512? Round 39.8% up to 40% and 1,512 down to 1,500: 0.4 × 1,500 = **600**. The two roundings pushed in opposite directions, so they partially cancel — the exact value, 601.776, sits almost on top of the estimate. That's the discipline: round each number to a clean neighbor, *track which direction each rounding pushed*, and you know whether the true answer sits slightly above or below your estimate.

**Worked example (closest-to, by cross-multiplication).** Which is closest to 1/4: 6/25, 7/27, or 9/35? Eyeballing decimals invites error; measure the gaps exactly. The distance of p/q from a/b is |bp − aq| / (bq). Against 1/4 the gap of p/q is |4p − q| / (4q):

- 6/25: |24 − 25| / 100 = 1/100
- 7/27: |28 − 27| / 108 = 1/108
- 9/35: |36 − 35| / 140 = 1/140

Every numerator is 1, so the biggest denominator wins: **9/35** is closest. When the gaps share a numerator, you compare them with zero division — and when they don't, the same formula still settles it. Check *every* candidate; "closest to" questions are engineered so the second-best choice feels convincing if you stop early.

**Estimation heuristics worth memorizing:**

- `π ≈ 3.14 ≈ 22/7`. Close enough for any GMAT geometry question.
- `√2 ≈ 1.414`, `√3 ≈ 1.732`, `√5 ≈ 2.236`. Decimals of these three roots show up constantly.
- 10% of a number is easy; 1% is easier. For 17% of 350, compute 10% = 35, plus 7% = 7 × 3.5 = 24.5. Total ≈ 59.5.
- Doubling and halving preserves a product: `25 × 16 = 50 × 8 = 100 × 4 = 400`. Cleaner numbers, same answer.

**Compute-exactly signals:**

- Answer choices are close (within 10% of each other).
- The question asks for a remainder or a specific digit.
- The problem says "exactly" or "precisely."

**Estimate signals:**

- Answer choices are spread (each differs from the next by 50%+).
- The problem says "approximately" or "closest to."
- You're multiplying messy decimals and one choice is obviously nearest.

**Trap to watch.** Estimation doesn't mean "guess." It means "round each number to a cleaner value, compute, and check the direction of your rounding error." If you rounded up twice, your estimate is too high — mentally adjust down before you bubble. The wrong answer one notch in your rounding direction is usually sitting in the choices, waiting.

> **Recall check.** Without looking back, state the two conditions that tell you to estimate (spread choices, "approximately") and the two that tell you to compute exactly (tight choices, "remainder" or "exactly"). Now apply the filter: if the answer choices are 4.8, 5.0, 5.2, 5.4, 5.6 — do you estimate or compute? (Compute — the choices are within 17% of each other.) What if they're 5, 15, 45, 135, 405? (Estimate — each is 3× the previous.) The filter fires in under two seconds; by the time you've read the choices, your approach should already be chosen.

## @summary

**Takeaway.** This chapter handed you three substitutes for brute computation. GCF and LCM are one prime-factor table read twice — min exponents down to the GCF, max exponents up to the LCM, with GCF × LCM = a × b linking the four quantities. Word problems hide the same machinery behind cues: syncing up → LCM, splitting down → GCF. Units digits of powers repeat in cycles of at most four, so "what digit does 17^83 end in" is a remainder question, not a computation. And the answer-choice spread decides for you whether estimation is safe.

The recap, one line per tool:

- **GCF/LCM machinery.** Factor once; min exponents for GCF, max for LCM; Euclid when factoring stalls; GCF × LCM = a × b.
- **The cue read.** "When do they coincide?" → LCM. "Largest equal split?" → GCF. "Divisible by both?" → multiples of the LCM. Direction first, tool second.
- **Units digits.** Only the base's units digit matters; cycles of 1, 2, or 4; remainder 0 → *last* position in the cycle.
- **Estimate vs. compute.** Spread choices and "approximately" → round and track the error's direction. Tight choices, digits, remainders → compute exactly.

**What to do next.** Run the graded problem sets above — the reading is the easy part, and these skills only become test-day fast through retrieval under a clock. The sets climb from straight machinery through word-problem cues to questions that combine both reads of the factor table. After that, you're done with the arithmetic block: next comes **Number Properties: Even/Odd & Integer Properties**, where the prime-factorization habits you built here start carrying real structural arguments — and the divisibility rules that pair with this chapter's machinery get their full treatment two chapters on.
