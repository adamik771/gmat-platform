---
slug: geometry
title: Geometry
section: Quant
estimated_minutes: 55
prerequisites: []
summary: |
  GMAT geometry is a small, finite list of facts applied to a small, finite list of shapes. Triangles (Pythagorean theorem, 30-60-90, 45-45-90), circles (area, circumference, arcs, sectors), quadrilaterals (squares, rectangles, parallelograms), regular polygons (the (n−2)×180 angle sum), coordinate geometry (distance, midpoint, slope), and 3D solids (volume and surface area of boxes, cylinders, spheres). Memorize the formulas, recognize the patterns, and every geometry question becomes a 60-second calculation.
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
    title: "Triangles — Pythagorean, 30-60-90, 45-45-90"
    check_question_ids:
      - geometry-q8
      - geometry-q13

  - id: circles
    type: reading
    title: "Circles — area, circumference, arcs, sectors"
    check_question_ids:
      - geometry-q2
      - geometry-q9

  - id: quadrilaterals-and-polygons
    type: reading
    title: "Quadrilaterals and regular polygons"
    check_question_ids:
      - geometry-q3
      - geometry-q5
      - geometry-q15

  - id: coordinate-geometry
    type: reading
    title: "Coordinate geometry — distance, midpoint, slope, lines"
    check_question_ids:
      - geometry-q10
      - geometry-q14
      - geometry-q18

  - id: three-d-solids
    type: reading
    title: "3D solids — volume and surface area"
    check_question_ids:
      - geometry-q6
      - geometry-q12
      - geometry-q17

  - id: inscribed-and-combined-figures
    type: reading
    title: "Inscribed figures and combined shapes"
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

**Converse of the Pythagorean theorem.** If a² + b² = c², the triangle is a right triangle with the right angle opposite c. This shows up on DS — statement "AB² + AC² = BC²" is sufficient to conclude angle A is a right angle.

**Equilateral triangle formulas.** Side s:

- Perimeter: 3s
- Area: s² √3 / 4

Memorize the area formula. The GMAT can embed equilaterals inside circles and hexagons.

> **Self-explanation prompt.** Why does recognizing a Pythagorean triple save time? If you can say "because the integer solutions to a² + b² = c² are rare, so spotting one means you already know the third side without computation," you've internalized why the memorization matters.

> **Recall check.** Without looking up: list the four Pythagorean triples, the ratio for a 45-45-90 triangle, and the ratio for a 30-60-90 triangle. State them aloud (or write them), then verify. These seven facts (4 triples + 2 ratios + Pythagorean theorem) carry roughly 30% of GMAT geometry points — forced retrieval now, rather than passive re-reading, is the single highest-return 60 seconds you'll spend in this chapter.

## @circles

Circles on the GMAT use four formulas, plus one conversion idea that solves arcs and sectors.

**The four formulas (all with radius r):**

- **Circumference:** C = 2πr (or πd, where d = diameter = 2r)
- **Area:** A = πr²
- **Diameter:** d = 2r
- **Arc length:** L = (θ/360) × C, where θ is the central angle in degrees

**Example (basic area).** Radius 6 → area = π × 36 = **36π**.

Don't confuse with circumference (2π × 6 = 12π). The GMAT always includes both as answer choices to catch students who grab the wrong formula.

**Arc length — the central-angle fraction.** Every arc is a fraction of the full circle. The fraction is (central angle / 360°). Multiply that fraction by the circumference.

**Example.** Circumference 10π, central angle 72°. Arc length?

    fraction = 72/360 = 1/5
    arc = (1/5) × 10π = 2π

Same idea works for sectors (pie slices): sector area = (θ/360) × πr².

**Inscribed angle theorem.** An inscribed angle is half the central angle that subtends the same arc. If the central angle is 80°, the inscribed angle is 40°. Rarely tested directly but appears on hard problems.

**Inscribed squares and triangles.**

A **square inscribed in a circle** has its diagonal equal to the diameter. If the radius is r, the diameter is 2r, and the square's diagonal is 2r. Side of the square = (2r)/√2 = r√2. Area of the square = (r√2)² = 2r².

For the standard problem ("circle radius 5, inscribed square area?"):

- Diagonal = diameter = 10
- Area of square = d²/2 = 100/2 = **50**

Memorize "area of square = d²/2" — it appears on almost every inscribed-square question, saves a multiplication step.

**Tangent lines** are perpendicular to the radius at the point of tangency. Rarely tested at 605-level but can appear on 685+ problems.

> **Trap to watch.** "What's the area of a circle with diameter 10?" The diameter is 10, so the radius is 5, and the area is 25π. Students who plug the diameter into πr² directly get 100π — four times too large.

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

**The exterior-angle shortcut.** For any convex polygon, the sum of exterior angles is always **360°**. For a regular n-gon, each exterior angle is 360/n. This is often the fastest route on DS.

**Example (DS shortcut).** "Each interior angle is 150°. How many sides?" Exterior angle = 180 − 150 = 30°. Number of sides = 360/30 = **12**. Three lines of arithmetic. Alternative via interior-angle-sum formula also works: [(n−2)×180]/n = 150 → 180n − 360 = 150n → 30n = 360 → n = 12.

**Area of a regular hexagon with side s:** 6 × (s² √3 / 4) = (3√3 × s²) / 2. Treat the hexagon as six equilateral triangles. Rarely tested but appears in 705+ problems.

> **Self-explanation prompt.** Why does the interior-angle sum formula have n − 2 instead of n? If you can say "because any n-gon can be split into n − 2 triangles from a single vertex," you've internalized where the formula comes from — and you won't forget the subtraction.

## @coordinate-geometry

Coordinate geometry connects algebra to geometry through the Cartesian plane. Four core formulas plus line-equation fluency.

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

> **Trap to watch.** Perpendicular slopes are negative reciprocals, not just negatives. The perpendicular to slope 2 is −1/2, not −2. And both perpendicular and reciprocal changes — drop the minus sign or skip the reciprocal, and you've got the wrong line.

## @three-d-solids

Three solid shapes dominate: rectangular boxes (prisms), right cylinders, and spheres. Memorize six formulas.

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

> **Self-explanation prompt.** Why is cylinder volume πr² × h but cylinder lateral surface area 2πr × h? If you can say "because volume fills a 3D shape (area of cross-section × length), while lateral surface area wraps around (perimeter × length)," you've internalized why circumference appears in one and area in the other.

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

The general trick: **(L + W)² = (L² + W²) + 2LW**, so if you know sum-of-squares and sum, you can unlock the product LW, which is the area of the rectangle. This identity comes up constantly on DS.

**Combined circles and rectangles.** Shaded regions inside complex figures are usually (big shape area) − (small shape area). Sketch a clean diagram, label every known and unknown, and subtract.

**When a DS problem gives "diagonal" in one statement and "perimeter" in the other.** Neither alone is sufficient (many L, W pairs satisfy each). Together, by the square-the-sum trick above, they lock down the product LW, so the answer is **C (together sufficient, neither alone)**.

**Area ratios in similar figures.** If two similar shapes have linear dimensions in ratio k, their areas are in ratio k² and volumes in ratio k³. Shows up when the problem doubles or halves a dimension and asks about the area change.

**Rotational and reflective symmetry** — rarely tested but comes up on 725+ problems involving regular polygons.

> **Trap to watch.** "Rectangle with diagonal 10 and perimeter 28 — what's the area?" If you try to solve for L and W individually, you hit a messy quadratic. The sum-of-squares + sum-of-sides identity gives you LW directly without ever finding L or W. Whenever the question asks for a product (area) and gives you sum-of-squares + sum, square the sum.

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

**Circles.**

- Circumference: C = 2πr
- Area: A = πr²
- Arc length: (θ/360) × C
- Sector area: (θ/360) × πr²

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

**The one identity that breaks hard combined-shape DS problems.** (L + W)² = L² + 2LW + W². If you're given sum-of-squares and sum, squaring the sum gives you the product LW.

**Time-management note.** Simple formula-plug questions (triangle with given sides, rectangle with given dimensions) should take under 45 seconds. Inscribed-figure and combined-shape questions take up to 2 minutes. Coordinate-geometry questions requiring multiple steps (find intersection, distance from intercept, etc.) take 90 seconds.

If you catch yourself drawing and redrawing a figure, it usually means you skipped a formula. Stop, check your formula sheet mentally, and retry.
