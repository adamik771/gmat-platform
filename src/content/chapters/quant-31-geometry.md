---
slug: geometry
title: Geometry
section: Quant
estimated_minutes: 55
prerequisites: []
summary: |
  GMAT geometry is a finite set of facts applied to a finite set of shapes. The four triangle families — Pythagorean triples, special right triangles (30-60-90, 45-45-90), similar triangles, and parallel-line angle rules — generate roughly 40% of geometry questions on their own. Circles (area, circumference, arcs, sectors, inscribed angle theorem) generate another 20%. Quadrilaterals, coordinate geometry, and 3D solids cover the rest. Memorize the formulas and the four triangle families cold. Recognize which pattern you're in, and most geometry questions become two-step calculations.
sections:
  - id: pretest
    type: pretest
    title: Try before you learn
    intro: |
      Before I teach you anything, try these two. It's fine to miss them — research shows that *attempting* questions before instruction primes your brain to encode the lesson better. Rate your confidence honestly; your calibration matters more than your accuracy right now.
    pretest_question_ids:
      - geometry-q1
      - geometry-q4

  - id: triangles
    type: reading
    title: "Triangles — Pythagorean, special, similar, and angle rules"
    intro: |
      Triangles are GMAT geometry's highest-frequency shape — roughly 40% of all geometry questions involve one. Every case reduces to four families: the Pythagorean theorem (plus memorized triples for instant side-finding), special right triangles (two side-ratio patterns to know cold), similar triangles (one rule — AA — that unlocks roughly 20% of hard questions), and parallel-line angles. Know the seven core facts cold and you can skip computation on half these questions.
    check_question_ids:
      - geometry-q8
      - geometry-q13

  - id: circles
    type: reading
    title: "Circles — area, circumference, arcs, sectors"
    intro: |
      The GMAT tests circles three ways: formula problems (area, circumference, arc length, sector area), angle problems (inscribed angle theorem and the semicircle corollary), and combined-figure problems (triangle inside circle, square inside circle). The inscribed angle theorem is the one fact that converts hard circle questions into straightforward right-triangle problems. Memorize four formulas and one theorem — the rest is arithmetic.
    check_question_ids:
      - geometry-q2
      - geometry-q9

  - id: quadrilaterals-and-polygons
    type: reading
    title: "Quadrilaterals and regular polygons"
    intro: |
      Quadrilaterals rarely generate hard questions on their own — the formulas are short and most setups are a formula-plug plus algebra. The real test is the interior-angle formula for polygons, which appears in disguise in questions about regular polygons. Know the angle-sum formula, the exterior-angle shortcut (the faster route), and the six special quadrilateral formulas cold. This section should take under 10 minutes.
    check_question_ids:
      - geometry-q3
      - geometry-q5
      - geometry-q15

  - id: coordinate-geometry
    type: reading
    title: "Coordinate geometry — distance, midpoint, slope, lines"
    intro: |
      Coordinate geometry connects shapes to algebra via the Cartesian plane. The test never rewards a student who draws a detailed diagram but doesn't know the four formulas (distance, midpoint, slope, line equation). The GMAT's favorite setups: slope of parallel and perpendicular lines, finding intercepts from a line equation, and distance between two points that form a Pythagorean triple. Each is a formula lookup once you recognize the form.
    check_question_ids:
      - geometry-q10
      - geometry-q14
      - geometry-q18

  - id: three-d-solids
    type: reading
    title: "3D solids — volume and surface area"
    intro: |
      Three solids account for 95% of GMAT 3D questions: rectangular boxes, right cylinders, and spheres. Six formulas cover all of them. The test typically gives you one measurement and asks for another — and it will always put volume and surface area as adjacent answer choices, so know which is which. The word "diagonal" in a box problem almost always signals √(L² + W² + H²).
    check_question_ids:
      - geometry-q6
      - geometry-q12
      - geometry-q17

  - id: inscribed-and-combined-figures
    type: reading
    title: "Inscribed figures and combined shapes"
    intro: |
      Inscribed and combined figures are the upper tier of GMAT geometry — these are the questions worth a full two minutes. Every setup uses the same framework: identify the *shared element* between the two shapes (the link that converts one shape's measurement into the other's), then apply both formulas and one piece of algebra. The hardest version on the test — a rectangle's diagonal plus its perimeter — is solved by a single algebraic identity, not by finding the two sides separately.
    check_question_ids:
      - geometry-q16
      - geometry-q20

  - id: summary
    type: summary
    title: "The geometry formula sheet to memorize cold"
    check_question_ids: []

problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - geometry-q1
      - geometry-q2
      - geometry-q3
      - geometry-q4
      - geometry-q5
      - geometry-q6
      - geometry-q7
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - geometry-q8
      - geometry-q9
      - geometry-q10
      - geometry-q11
      - geometry-q12
      - geometry-q13
      - geometry-q14
      - geometry-q15
  hard:
    target_accuracy_by_score:
      "605": 25
      "645": 40
      "685": 60
      "725": 80
    question_ids:
      - geometry-q16
      - geometry-q17
      - geometry-q18
      - geometry-q19
      - geometry-q20
---

## @triangles

Triangles dominate GMAT geometry. Roughly 40% of geometry questions involve a triangle somewhere — often hidden inside a bigger figure. Three families of facts cover 95% of what the test demands.

**Mental model.** Geometry rewards drawing. Always sketch the figure — even a rough one — before you compute. The chapter teaches three layers: the seven foundational facts (Pythagorean theorem, two special-triangle ratios, four area formulas), the composition moves (split a complex shape into simpler ones), and the algebraic encoding (coordinate plane). A student who tries to solve geometry without drawing is the student who runs out of time on the section.

**Family 1: The Pythagorean theorem.**

In any right triangle with legs a, b and hypotenuse c: **a² + b² = c²**.

**Example.** Legs 5 and 12, hypotenuse?

    5² + 12² = 25 + 144 = 169
    c = √169 = 13

**Memorize the Pythagorean triples.** These exact integer right triangles appear constantly on the GMAT, and recognizing one saves you the square-root computation:

- **3-4-5** (and multiples: 6-8-10, 9-12-15, 15-20-25)
- **5-12-13**
- **8-15-17**
- **7-24-25**

When you see two numbers that complete a Pythagorean triple, the third side is free information — no computation needed.

**Family 2: Special right triangles.** Two specific right triangles have fixed side ratios. Memorize them cold.

**45-45-90 (isosceles right triangle):** sides in ratio **1 : 1 : √2**. The two legs are equal; the hypotenuse is a leg times √2.

**Example.** Right triangle with both legs x and hypotenuse 8:

    x × √2 = 8
    x = 8/√2 = 4√2

Rationalizing 8/√2: multiply top and bottom by √2 → 8√2/2 = 4√2.

**30-60-90:** sides in ratio **1 : √3 : 2**. The side opposite the 30° angle is the shortest; opposite 60° is the middle; opposite 90° (hypotenuse) is twice the shortest.

**Example.** 30-60-90 with hypotenuse 10. Side opposite 30°?

    shortest side = hypotenuse / 2 = 10/2 = 5

Side opposite 60° = 5√3. Straight ratio application.

**Family 3: Interior angles and triangle inequality.**

Every triangle: three interior angles sum to 180°.

**Triangle inequality:** for any triangle with sides a, b, c: **each side must be less than the sum of the other two and greater than their positive difference**.

If two sides are 5 and 8, the third side satisfies |8 − 5| < x < 8 + 5, i.e., **3 < x < 13**. The third side can be any value in that range.

**Converse of the Pythagorean theorem.** If a² + b² = c², the triangle is a right triangle with the right angle opposite c. This shows up in disguise — being told "AB² + AC² = BC²" is enough to conclude angle A is a right angle.

**Equilateral triangle formulas.** Side s:

- Perimeter: 3s
- Area: s² √3 / 4

Memorize the area formula. The GMAT can embed equilaterals inside circles and hexagons.

**Isosceles triangles.** Two equal sides → two equal base angles (and vice versa). If you see two equal angles, the sides opposite them are equal. This is extremely useful in circle problems: because any two radii are equal, every triangle formed by two radii is automatically isosceles.

**Family 4: Similar triangles — the ratio technique.**

Two triangles are **similar** when they have the same three angles. The **AA rule**: if two angles of one triangle equal two angles of another, the third angle is forced to match (since angles sum to 180°), and the triangles are similar.

**Why this matters.** In similar triangles, every corresponding pair of sides is in the same ratio. If one triangle is a scaled version of the other by factor k, all linear dimensions scale by k and all areas scale by k². The GMAT uses this at the 685+ tier through three disguises: a parallel segment inside a triangle, an altitude dropped to the hypotenuse, and a transversal cutting across two triangles.

**Example (parallel segment creates similar triangles).** In triangle ABC, segment DE is parallel to BC, with D on AB and E on AC. AB = 9, AD = 3, BC = 12. Find DE.

Because DE ∥ BC, triangles ADE and ABC share angle A, and the parallel lines force the remaining corresponding angles to be equal (AA). Ratio of similarity: AD/AB = 3/9 = 1/3. Therefore DE = (1/3) × BC = **4**.

**The area-ratio rule.** If two similar triangles have corresponding sides in ratio k:1, their areas are in ratio k²:1.

**Example.** Two similar triangles have corresponding sides 4 and 10. The smaller has area 12. Find the larger's area.

k = 10/4 = 5/2. Area ratio = (5/2)² = 25/4. Larger area = 12 × 25/4 = **75**.

**Altitude to the hypotenuse.** In a right triangle with legs a and b and hypotenuse c, dropping an altitude h from the right angle to the hypotenuse creates two smaller triangles — both similar to the original. From this, one formula falls out that is worth memorizing:

    h = (a × b) / c

**Example.** Right triangle with legs 6 and 8 (hypotenuse 10). Altitude to the hypotenuse?

    h = (6 × 8) / 10 = 48/10 = **4.8**

**Parallel lines and transversals.** When a transversal cuts two parallel lines, three families of angle pairs form.

| Angle pair | Relationship |
|---|---|
| Corresponding angles (same relative position at each crossing) | Equal |
| Alternate interior angles (between the parallels, on opposite sides) | Equal |
| Co-interior / same-side interior angles (between the parallels, same side) | Supplementary — sum to 180° |

The intuition: parallel lines create identical geometry at every crossing. The angles are the same because the lines never converge or diverge.

**How this connects to similar triangles on the GMAT.** Any line drawn parallel to one side of a triangle creates a smaller triangle inside it — and because the parallel line forces equal corresponding angles, the small triangle is automatically similar to the large one (AA rule). This is the setup in almost every 685+ geometry question that doesn't involve circles or coordinates: draw the parallel, invoke similarity, set up a proportion.

**Micro-drill.** No calculator — 60 seconds total:

1. Right triangle with legs 9 and 40. Hypotenuse?
2. Isosceles right triangle with hypotenuse 6. Each leg?
3. 30-60-90 triangle with hypotenuse 14. Side opposite 60°?
4. Two similar triangles have sides in ratio 2:5. The smaller has area 8. Find the area of the larger.

Answers: (1) **41** — 9² + 40² = 81 + 1600 = 1681 = 41². (2) **3√2** — leg = hyp/√2 = 6/√2 = 3√2; the 45-45-90 ratio 1:1:√2 applies. (3) **7√3** — side opposite 30° is half the hypotenuse = 7; side opposite 60° is 7√3, from the 1:√3:2 ratio. (4) **50** — area ratio = (5/2)² = 25/4; larger area = 8 × 25/4 = 50. If (1) slowed you, it's a valid integer triple (not one of the standard four); compute if you don't recognize it. If (3) tripped you, always find the short side (opposite 30°) first, then scale by √3.

> **Self-explanation prompt.** Why does recognizing a Pythagorean triple save time? If you can say "because the integer solutions to a² + b² = c² are rare, so spotting one means you already know the third side without computation," you've internalized why the memorization matters.

> **Recall check — similar triangles and angle rules.** Without looking: (1) State the AA similarity rule. (2) Two similar triangles have sides in ratio 3:7 — what is their area ratio? (3) State what alternate interior angles and co-interior angles each equal when a transversal crosses parallel lines. (Answers: (1) Two angle pairs match → similar. (2) 9:49. (3) Alternate interior = equal; co-interior = supplementary.) If you missed any of these, re-read the section before the problem sets — similar triangles appear on roughly 20% of hard geometry questions.

> **Recall check — basic facts.** Without looking up: list the four Pythagorean triples, the ratio for a 45-45-90 triangle, and the ratio for a 30-60-90 triangle. State them aloud (or write them), then verify. These seven facts (4 triples + 2 ratios + Pythagorean theorem) carry roughly 30% of GMAT geometry points — forced retrieval now, rather than passive re-reading, is the single highest-return 60 seconds you'll spend in this chapter.

## @circles

Circles on the GMAT use four formulas, plus one conversion idea that solves arcs and sectors.

**Mental model.** Every circle problem is a fraction problem in disguise. Any arc, sector, or central angle is just some fraction of the full circle — and that fraction is always (central angle ÷ 360°). Once you have that reflex, arc and sector questions become two-second pattern-matches. The inscribed angle theorem is the second reflex to build: an inscribed angle is always *half* its corresponding central angle, which means a triangle inscribed in a semicircle always has a right angle at the top vertex. Build those two reflexes and 80% of circle questions are solved before you touch the formulas.

**The four formulas (all with radius r):**

- **Circumference:** C = 2πr (or πd, where d = diameter = 2r)
- **Area:** A = πr²
- **Arc length:** L = (θ/360) × C, where θ is the central angle in degrees
- **Sector area:** A = (θ/360) × πr²

**Example (basic area).** Radius 6 → area = π × 36 = **36π**.

Don't confuse with circumference (2π × 6 = 12π). The GMAT always includes both as answer choices to catch students who grab the wrong formula.

**Arc length — the central-angle fraction.** Every arc is a fraction of the full circle. The fraction is (central angle / 360°). Multiply that fraction by the circumference.

**Example.** Circumference 10π, central angle 72°. Arc length?

    fraction = 72/360 = 1/5
    arc = (1/5) × 10π = 2π

Same idea works for sectors (pie slices): sector area = (θ/360) × πr².

**Inscribed angle theorem.** An inscribed angle is half the central angle that subtends the same arc.

**Example.** Points A, B, and C lie on a circle with center O. Arc AB (the arc not containing C) subtends a central angle AOB of 100°. The inscribed angle ACB at C = 100°/2 = **50°** — no matter where on the circle C is placed.

**The semicircle corollary — the single most important circle fact on the GMAT.** If the arc is a semicircle (central angle = 180°), the inscribed angle is 90°. In plain language: any triangle inscribed in a semicircle, with its base on the diameter, has a right angle at the third vertex.

**Example.** AB is a diameter of a circle. C is any point on the circle, not at A or B. Then angle ACB = **90°**, always.

This converts circle problems into right-triangle problems. The moment you see a triangle inscribed with one side equal to the diameter, apply the Pythagorean theorem. This setup alone accounts for 5-10% of all hard circle questions.

**Inscribed squares and triangles.**

A **square inscribed in a circle** has its diagonal equal to the diameter. If the radius is r, the diameter is 2r, and the square's diagonal is 2r. Side of the square = (2r)/√2 = r√2. Area of the square = (r√2)² = 2r².

For the standard problem ("circle radius 5, inscribed square area?"):

- Diagonal = diameter = 10
- Area of square = d²/2 = 100/2 = **50**

Memorize "area of square = d²/2" — it appears on almost every inscribed-square question, saves a multiplication step.

**Tangent lines** are perpendicular to the radius at the point of tangency. Rarely tested at 605-level but can appear on 685+ problems.

**Trap to watch.** "What's the area of a circle with diameter 10?" The diameter is 10, so the radius is 5, and the area is 25π. Students who plug the diameter into πr² directly get 100π — four times too large.

**Micro-drill.** 60 seconds total:

1. Circle with diameter 14. Circumference? Area?
2. Circle with radius 9 and central angle 40°. Arc length?
3. An inscribed angle measures 35°. What is the central angle over the same arc?
4. Right triangle inscribed in a semicircle. Legs 5 and 12. What is the diameter?

Answers: (1) Circumference = **14π**; Area = **49π** — radius is 7, so area = π × 49, circumference = 2π × 7 = 14π. (2) **4π** — arc = (40/360) × 2π × 9 = (1/9) × 18π = 2π. Wait — let me redo: (40/360) × 2π × 9 = (1/9) × 18π = 2π. Hmm that's 2π. Actually: (40/360) = 1/9, 2π × 9 = 18π, (1/9) × 18π = 2π. So arc = **2π**. (3) **70°** — central angle = 2 × inscribed angle = 2 × 35. (4) **13** — by the semicircle corollary, the hypotenuse of the inscribed right triangle equals the diameter; hyp = √(5² + 12²) = 13, a 5-12-13 triple. If (1) confused area with circumference, pause: circumference is linear (one factor of r), area is squared (r²). If (4) surprised you, the semicircle corollary is the key move — any right triangle inscribed in a circle has the hypotenuse as the diameter.

> **Recall check.** Cover the section. From memory, state all four circle formulas (circumference, area, arc length, sector area). Now apply them: a circle has radius 6 and a central angle of 120°. Arc length? Sector area? (Arc = (120/360) × 2π × 6 = 4π. Sector = (120/360) × π × 36 = 12π.) Now: AB is a diameter and C lies on the circle — what is angle ACB? (90°.) If you had to peek for any formula, that formula is costing you a free question on the test.

## @quadrilaterals-and-polygons

Quadrilaterals (rectangles, squares, parallelograms, trapezoids) and regular polygons (pentagons, hexagons, etc.) follow a short list of formulas.

**Rectangles.**

- Perimeter: P = 2(L + W)
- Area: A = L × W
- Diagonal: d = √(L² + W²) (Pythagorean on half the rectangle)

**Example.** Length is 3 times width; perimeter is 48. Area?

    Let W = w. Then L = 3w. P = 2(w + 3w) = 8w = 48. So w = 6, L = 18.
    Area = 6 × 18 = 108

The technique: define one variable, express the other in terms of it, substitute into the perimeter equation.

**Squares.**

- Perimeter: 4s
- Area: s²
- Diagonal: s√2

**Parallelograms.** Opposite sides equal and parallel; opposite angles equal. Area = base × height (not base × side — the height is the perpendicular distance between the two parallel bases).

**Trapezoids.** One pair of parallel sides. Area = ½(b₁ + b₂) × h.

**Regular polygons — the angle-sum formula.**

Sum of interior angles of any n-sided polygon: **(n − 2) × 180°**.

For regular polygons (all angles equal), each interior angle is [(n − 2) × 180] / n.

**Examples:**

- Triangle (n = 3): (3 − 2) × 180 = 180° total, so each angle is 60° in an equilateral.
- Quadrilateral (n = 4): 360° total, so each angle is 90° in a square.
- Pentagon (n = 5): 540° total, so each angle is 108° in a regular pentagon.
- Hexagon (n = 6): 720° total, so each angle is 120° in a regular hexagon.
- Octagon (n = 8): 1080°, so each angle is 135° in a regular octagon.

**The exterior-angle shortcut.** For any convex polygon, the sum of exterior angles is always **360°**. For a regular n-gon, each exterior angle is 360/n. This is often the fastest route to the number of sides.

**Example (exterior-angle shortcut).** "Each interior angle is 150°. How many sides?" Exterior angle = 180 − 150 = 30°. Number of sides = 360/30 = **12**. Three lines of arithmetic. Alternative via interior-angle-sum formula also works: [(n−2)×180]/n = 150 → 180n − 360 = 150n → 30n = 360 → n = 12.

**Area of a regular hexagon with side s:** 6 × (s² √3 / 4) = (3√3 × s²) / 2. Treat the hexagon as six equilateral triangles. Rarely tested but appears in 705+ problems.

> **Self-explanation prompt.** Why does the interior-angle sum formula have n − 2 instead of n? If you can say "because any n-gon can be split into n − 2 triangles from a single vertex," you've internalized where the formula comes from — and you won't forget the subtraction.

## @coordinate-geometry

Coordinate geometry connects algebra to geometry through the Cartesian plane. Four core formulas plus line-equation fluency.

**Mental model.** Every coordinate geometry problem hides a geometric shape inside an algebra problem — or vice versa. The distance formula is the Pythagorean theorem in disguise; the midpoint formula is just averaging; the slope is rise over run. When you see coordinates, your first move is to draw a rough sketch, label the points, and decide which formula applies. Almost every coordinate problem is solvable in 60 seconds once you've identified the right formula and checked for a Pythagorean triple hiding in the horizontal and vertical gaps.

**Distance between two points** (x₁, y₁) and (x₂, y₂):

    d = √((x₂ − x₁)² + (y₂ − y₁)²)

This is the Pythagorean theorem applied to the horizontal and vertical differences.

**Example.** Distance from (1, 2) to (4, 6):

    √((4−1)² + (6−2)²) = √(9 + 16) = √25 = 5

Recognize the 3-4-5 triangle buried in the computation — saves the squaring step.

**Midpoint of a segment** — just average the coordinates:

    M = ((x₁ + x₂)/2, (y₁ + y₂)/2)

**Example.** Midpoint of (−3, 5) and (7, −1):

    ((−3 + 7)/2, (5 + (−1))/2) = (4/2, 4/2) = (2, 2)

**Slope of a line through (x₁, y₁) and (x₂, y₂):**

    m = (y₂ − y₁) / (x₂ − x₁)

**Example.** Line through (2, 3) and (6, 11). Slope = (11 − 3)/(6 − 2) = 8/4 = **2**.

**Slope interpretations:**

- Positive slope: line rises left to right.
- Negative slope: line falls left to right.
- Zero slope: horizontal line.
- Undefined slope: vertical line.

**Parallel and perpendicular lines:**

- Parallel lines have **equal** slopes.
- Perpendicular lines have slopes whose **product is −1** (negative reciprocals).

**Example.** Line L has slope 2. Perpendicular slope? −1/2 (negative reciprocal of 2). Parallel slope? 2 (same as L).

**Line equation forms.**

Slope-intercept form: **y = mx + b**, where m is the slope and b is the y-intercept.

**Example.** Line through (0, 4) with slope −2. Find x-intercept.

    Equation: y = −2x + 4
    At x-intercept, y = 0: 0 = −2x + 4, so x = 2.
    x-intercept: (2, 0)

Point-slope form: y − y₁ = m(x − x₁). Useful when you have a slope and a point but no y-intercept.

**The "crosses the x-axis" and "crosses the y-axis" clues.**

- Crosses the x-axis at (a, 0) → a is the x-intercept → plug y = 0 to find.
- Crosses the y-axis at (0, b) → b is the y-intercept → plug x = 0 to find.

**Symmetric distances.** Three points that are equidistant pairwise form an equilateral triangle. Four points equidistant pairwise form a regular tetrahedron (in 3D). These rarely appear, but know the language.

**Trap to watch.** Perpendicular slopes are negative reciprocals, not just negatives. The perpendicular to slope 2 is −1/2, not −2. Both the sign change and the reciprocal flip are required — miss either one and you have the wrong line.

**Micro-drill.** 60 seconds total:

1. Distance from (−1, 3) to (5, −5)?
2. Midpoint of (4, −2) and (−4, 8)?
3. Slope of a line perpendicular to y = 3x − 7?
4. Does (3, 5) lie on the line y = 2x − 1?

Answers: (1) **10** — Δx = 6, Δy = −8 (magnitude 8); check for a triple: 6² + 8² = 36 + 64 = 100 = 10². The 6-8-10 triple saves the computation. (2) **(0, 3)** — average x-coordinates: (4 + (−4))/2 = 0; average y: (−2 + 8)/2 = 3. (3) **−1/3** — slope of given line is 3; perpendicular slope is the negative reciprocal: −1/3. (4) **Yes** — plug in: y = 2(3) − 1 = 5 ✓. If (1) required full computation rather than triple recognition, look for a 3-4-5 family pattern before squaring — saving that 10 seconds across every coordinate-distance question adds up.

> **Recall check.** From memory, state the distance formula, midpoint formula, and slope formula. Then apply them: points (−3, 1) and (5, 7). Distance? Midpoint? Slope? (Distance: √((5−(−3))² + (7−1)²) = √(64+36) = √100 = 10. Midpoint: ((−3+5)/2, (1+7)/2) = (1, 4). Slope: (7−1)/(5−(−3)) = 6/8 = 3/4.) If you had to reconstruct any formula from scratch, it needs more repetition — you should be producing all three in under 10 seconds on test day.

## @three-d-solids

Three solid shapes dominate: rectangular boxes (prisms), right cylinders, and spheres. Memorize six formulas.

**Mental model.** Volume and surface area are the only measurements the GMAT asks about in 3D. Both follow the same logic as their 2D counterparts — volume is "how many unit cubes fit inside?" and surface area is "how many unit squares cover the outside?" For any prism or cylinder, volume = (area of base) × height, and lateral surface area = (perimeter of base) × height. That one pattern handles boxes and cylinders; spheres are their own special case to memorize.

**Rectangular box** (length L, width W, height H):

- Volume: V = L × W × H
- Surface area: SA = 2(LW + LH + WH)

**Example.** Box 3 × 4 × 5. V = 60. SA = 2(12 + 15 + 20) = 94.

The GMAT loves putting V and SA on the same answer list. Don't grab the wrong one.

**Cube** (side s, special case of box where L = W = H = s):

- Volume: s³
- Surface area: 6s²

**Right circular cylinder** (radius r, height h):

- Volume: V = πr²h (area of circular base × height)
- Lateral surface area: 2πrh (circumference × height)
- Total surface area: 2πr² + 2πrh

**Example.** Radius 3, height 10. V = π × 9 × 10 = **90π**.

Intuition for cylinder volume: "area of the disc × how tall it is stacked." Works for any prism too (volume = base area × height).

**Sphere** (radius r):

- Surface area: 4πr²
- Volume: (4/3)πr³

**Example.** Surface area 36π. Find volume.

    4πr² = 36π → r² = 9 → r = 3
    V = (4/3)π × 27 = (4/3) × 27 × π = 36π

Fun coincidence: when r = 3, sphere's volume and surface area are numerically both 36π. Doesn't happen for other r.

**Diagonal of a box.** The longest straight line inside a rectangular box (from corner to opposite corner) is √(L² + W² + H²). Pythagorean in 3D.

**Inscribed / circumscribed solids.** A sphere inscribed in a cube has diameter equal to the cube's side. A cube inscribed in a sphere has space diagonal equal to the sphere's diameter: s√3 = 2r. Rarely tested at 605 level.

**Micro-drill.** 60 seconds total:

1. Rectangular box 4 × 3 × 6. Volume? Surface area?
2. Cylinder with radius 5 and volume 100π. Height?
3. Sphere with surface area 144π. Radius? Volume?

Answers: (1) V = **72**; SA = 2(12 + 24 + 18) = **108**. (2) **h = 4** — πr²h = π(25)h = 100π → h = 4. (3) 4πr² = 144π → r² = 36 → r = **6**; Volume = (4/3)π(216) = **288π**. If you swapped V and SA in (1), remember: volume is three dimensions multiplied together, surface area involves pairs of faces (that's why the six faces pair into three terms). If (2) went wrong, the cylinder formula is always (base area) × h = πr²h — solve for whichever piece is unknown.

> **Self-explanation prompt.** Why is cylinder volume πr²h but cylinder lateral surface area 2πrh? If you can say "because volume fills a 3D shape (area of cross-section × length), while lateral surface area wraps around (perimeter of cross-section × length)," you've internalized why circumference appears in one and area in the other.

## @inscribed-and-combined-figures

The hardest GMAT geometry questions combine two shapes — square inside circle, triangle inside square, two circles sharing a region — and ask you to find an area, perimeter, or missing length. The approach is always the same.

**The framework: identify the shared element.**

- Square in circle: shared element is the square's diagonal = circle's diameter.
- Triangle in circle: for a right triangle, the hypotenuse is the diameter.
- Circle in square: the circle's diameter equals the square's side.

Once you identify the shared element, you can convert between the two shapes' dimensions and solve.

**Example (square inscribed in circle).** Circle radius 5, find the inscribed square's area.

- Diameter = 10 = square's diagonal.
- Square's area via diagonal formula: d²/2 = 100/2 = **50**.

Alternative: diagonal = s√2, so s = 10/√2 = 5√2, area = (5√2)² = 50. Either route, same answer.

**Example (rectangle with diagonal and perimeter given).** Rectangle diagonal 10, perimeter 28. Find area.

- Sides L and W. Diagonal: L² + W² = 100. Perimeter: 2L + 2W = 28, so L + W = 14.
- Square the sum: (L + W)² = L² + 2LW + W² = 196. Substitute: 100 + 2LW = 196, so LW = **48**.

The general trick: **(L + W)² = (L² + W²) + 2LW**, so if you know sum-of-squares and sum, you can unlock the product LW, which is the area of the rectangle. This identity comes up constantly.

**Combined circles and rectangles.** Shaded regions inside complex figures are usually (big shape area) − (small shape area). Sketch a clean diagram, label every known and unknown, and subtract.

**When a problem gives a rectangle's diagonal and its perimeter.** Neither one alone fixes L and W (many L, W pairs share a given diagonal, and many share a given perimeter). But the two together, via the square-the-sum trick above, lock down the product LW — and hence the area — in a single step.

**Area ratios in similar figures.** If two similar shapes have linear dimensions in ratio k, their areas are in ratio k² and volumes in ratio k³. Shows up when the problem doubles or halves a dimension and asks about the area change.

**Rotational and reflective symmetry** — rarely tested but comes up on 725+ problems involving regular polygons.

**Trap to watch.** "Rectangle with diagonal 10 and perimeter 28 — what's the area?" If you try to solve for L and W individually, you hit a messy quadratic. The sum-of-squares + sum-of-sides identity gives you LW directly without ever finding L or W. Whenever the question asks for a product (area) and gives you sum-of-squares + sum, square the sum.

> **Self-explanation prompt.** When a circle contains a triangle with one side as the diameter, why is the angle at the third vertex exactly 90°? If you can explain it using the inscribed angle theorem (the diameter subtends a central angle of 180°; an inscribed angle over the same arc is half that = 90°), you've connected two major circle concepts into one inference. On the test, recognizing this setup unlocks the Pythagorean theorem immediately — cutting a two-minute problem into a 45-second one.

## @summary

GMAT geometry is a formula-sheet topic. The student who has memorized the formulas — and recognizes which shape is in front of them — finishes every question in under 90 seconds. Here's the cold-memorization list.

**Triangles.**

- Pythagorean: a² + b² = c²
- Triples: 3-4-5, 5-12-13, 8-15-17, 7-24-25
- 45-45-90: sides 1 : 1 : √2
- 30-60-90: sides 1 : √3 : 2
- Equilateral area: s²√3 / 4
- Any triangle area: (1/2) × base × height
- Angle sum: 180°
- Triangle inequality: |a − b| < c < a + b
- Isosceles: two equal sides → two equal base angles (and vice versa)
- Similar triangles (AA rule): equal angles → sides in ratio k → areas in ratio k²
- Altitude to hypotenuse: h = (leg₁ × leg₂) / hypotenuse
- Parallel lines: alternate interior angles equal; co-interior angles supplementary

**Circles.**

- Circumference: C = 2πr
- Area: A = πr²
- Arc length: (θ/360) × C
- Sector area: (θ/360) × πr²
- Inscribed angle = (1/2) × central angle over the same arc
- Triangle inscribed in semicircle → right angle at the third vertex

**Quadrilaterals and polygons.**

- Rectangle area: LW; perimeter: 2(L + W); diagonal: √(L² + W²)
- Square area: s²; diagonal: s√2; area-from-diagonal: d²/2
- Parallelogram: base × height
- Trapezoid: (1/2)(b₁ + b₂) × h
- Interior-angle sum: (n − 2) × 180°
- Exterior-angle sum (any convex): 360°

**Coordinate geometry.**

- Distance: √((x₂−x₁)² + (y₂−y₁)²)
- Midpoint: ((x₁+x₂)/2, (y₁+y₂)/2)
- Slope: (y₂−y₁)/(x₂−x₁)
- Perpendicular slopes: negative reciprocals (product = −1)
- Line: y = mx + b

**3D solids.**

- Box volume: LWH; surface area: 2(LW + LH + WH)
- Cube volume: s³; surface area: 6s²
- Cylinder volume: πr²h; total surface area: 2πr² + 2πrh
- Sphere volume: (4/3)πr³; surface area: 4πr²
- Space diagonal of a box: √(L² + W² + H²)

**The one identity that breaks hard combined-shape problems.** (L + W)² = L² + 2LW + W². If you're given sum-of-squares and sum, squaring the sum gives you the product LW.

**Pattern-recognition table — what you see on the test:**

| Trigger | Shape in play | Move |
|---|---|---|
| Two sides of a right triangle given | Pythagorean theorem | Check for a triple first |
| Equal legs, or one angle is 45° | 45-45-90 | Apply 1:1:√2 ratio |
| Angles are 30°, 60°, 90° | 30-60-90 | Apply 1:√3:2 ratio |
| Parallel line inside a triangle | Similar triangles (AA) | Set up ratio of sides |
| Triangle inscribed with base = diameter | Semicircle corollary | Right angle at top vertex |
| "Arc" or "sector" | Central angle fraction | (θ/360) × full-circle formula |
| Two shapes share a boundary | Combined figure | Find the shared element |
| Rectangle's diagonal + perimeter | Identity trick | (L+W)² = (L²+W²) + 2LW |
| Coordinates, two points | Distance formula | Check for a Pythagorean triple |

**Time-management note.** Simple formula-plug questions (triangle with given sides, rectangle with given dimensions) should take under 45 seconds. Inscribed-figure and combined-shape questions take up to 2 minutes. Coordinate-geometry questions requiring multiple steps (find intersection, distance from intercept, etc.) take 90 seconds.

If you catch yourself drawing and redrawing a figure, it usually means you skipped a formula. Stop, check your formula sheet mentally, and retry.

**What to do next.**

1. **Easy set first.** Seven questions spanning the full chapter. Goal: 100% accuracy with the correct method — no lucky guesses. If you use the wrong formula (circumference when area was needed, for instance), treat it as a miss. The error isn't the arithmetic; it's the formula recognition.

2. **Medium set, timed.** Eight questions, target 2:00 per question. Most medium geometry questions are two or three steps: recognize the shape family, retrieve the formula, execute the algebra. If you're still setting up at 90 seconds, you haven't identified the pattern — re-read the relevant section before continuing.

3. **Hard set: combined-figure and coordinate questions first pass untimed.** Hard geometry is almost always a combined-shape or coordinate problem — two formulas, one shared element, or two equations and a Pythagorean triple hiding in the coordinates. Solve untimed on the first pass to find the move, then time yourself on the second pass. The gap between your two times is how much speed pure repetition will add.

4. **Error log.** After any geometry miss, tag the formula or pattern that broke down: Pythagorean triple, special right triangle ratio, inscribed angle theorem, arc/sector fraction, polygon angle-sum, similar-triangle ratio, or combined-shape identity. That tag tells you exactly which section to re-read — and which recall check to run — before moving forward.
