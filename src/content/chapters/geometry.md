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

Triangles dominate GMAT geometry — roughly 40% of geometry questions involve a triangle, often hidden inside a bigger figure. Before formulas, anchor the angle vocabulary that appears in every diagram on the test.

**Mental model.** Geometry rewards drawing. Always sketch — even rough — before you compute. The key skill is recognizing which simpler shape hides inside a complex figure. Drawing forces that recognition.

### Angle relationships — the grammar of every GMAT diagram

These five rules are not optional background. They underlie every multi-step geometry question on the test. Miss one and a "formula problem" becomes a wrong-answer trap.

**Supplementary and complementary.** Two angles summing to 90° are complementary. Two summing to 180° are supplementary. A straight line is 180° — if two angles together form a straight line, they are supplementary.

**Vertical angles.** When two lines cross, the angles opposite each other are equal. Four angles form: opposite pairs are equal. This is free information — whenever two lines intersect, you know two pairs of equal angles without any extra work.

**Parallel lines cut by a transversal.** When a line crosses two parallel lines, eight angles form. Only two distinct values are possible — call them x and (180° − x). The rules:

- **Corresponding angles** (same position at each intersection): equal.
- **Alternate interior angles** (between the parallels, on opposite sides): equal.
- **Co-interior (same-side interior) angles**: supplementary.

Whenever a problem labels two lines as parallel, immediately assign a variable x to any one angle and label every other angle as either x or (180° − x). Do this before reading the question.

**Exterior angle of a triangle.** The exterior angle equals the sum of the two non-adjacent interior angles. Extend any side of a triangle and the angle formed outside equals the sum of the other two interior angles. This shortcut eliminates the "compute 180 minus the third angle" step.

**Example.** Triangle with interior angles 40° and 65°. The exterior angle at the third vertex? 40 + 65 = **105°**. Done without finding the third interior angle first.

### Family 1: The Pythagorean theorem

In any right triangle with legs a, b and hypotenuse c: **a² + b² = c²**.

**Example.** Legs 5 and 12, hypotenuse?

    5² + 12² = 25 + 144 = 169
    c = √169 = 13

**Memorize the Pythagorean triples.** These exact integer right triangles appear constantly on the GMAT, and recognizing one saves the square-root computation:

- **3-4-5** (and multiples: 6-8-10, 9-12-15, 15-20-25)
- **5-12-13**
- **8-15-17**
- **7-24-25**

When you see two numbers that complete a Pythagorean triple, the third side is free information — no computation needed.

### Family 2: Special right triangles

**45-45-90 (isosceles right triangle):** sides in ratio **1 : 1 : √2**. The two legs are equal; the hypotenuse is a leg times √2.

**Example.** Right triangle with both legs x and hypotenuse 8:

    x × √2 = 8
    x = 8/√2 = 4√2

Rationalizing 8/√2: multiply top and bottom by √2 → 8√2/2 = 4√2.

**30-60-90:** sides in ratio **1 : √3 : 2**. The side opposite 30° is the shortest; opposite 60° is the middle; opposite 90° (hypotenuse) is twice the shortest.

**Example.** 30-60-90 with hypotenuse 10. Side opposite 30°?

    shortest = hypotenuse / 2 = 10/2 = 5

Side opposite 60° = 5√3. Straight ratio application.

> **Self-explanation prompt.** Before the check questions: state the 30-60-90 ratio from memory and explain why the side opposite 60° is the middle value, not the hypotenuse. (Hint: longer side is always opposite the larger angle.) If you can say this cleanly, you will never mix up the two special-triangle ratios under time pressure.

### Family 3: Similar triangles

Two triangles are **similar** when their corresponding angles are equal — same shape, different size. Similar triangles are the mechanism behind roughly 20% of hard GMAT geometry questions. They appear any time a diagram has two triangles sharing an angle or a pair of parallel sides.

**The key rule.** Corresponding sides are proportional. If triangle ABC ~ triangle DEF with scale factor k, then AB/DE = BC/EF = AC/DF = k. Areas scale by k².

**The two recognition patterns:**

1. **AA (angle-angle).** Two equal angles prove similarity. Because the three angles must sum to 180°, matching two automatically matches the third.

2. **Parallel line creates embedded similar triangle.** A line parallel to one side of a triangle, cutting the other two sides, creates a smaller triangle similar to the original.

**Example (parallel line).** In triangle PQR, line XY is drawn parallel to QR, with X on PQ and Y on PR. If PX/PQ = 2/3, find XY if QR = 15.

XY ∥ QR creates corresponding angles at X and Q, so triangles PXY and PQR are similar with ratio 2/3. XY = (2/3) × 15 = **10**.

**Example (altitude to hypotenuse).** Right triangle ABC has legs 6 and 8 and hypotenuse 10. An altitude from C meets AB at point D. Find CD.

Area of triangle = ½ × 6 × 8 = 24. Also, area = ½ × AB × CD = ½ × 10 × CD. So CD = 48/10 = **4.8**.

(The altitude creates two smaller triangles, each similar to the original. The area route is usually faster on the GMAT than chasing the ratios.)

**Trap to watch.** Similarity is not congruence. Similar triangles have the same angles but not the same side lengths. Confusing the two is the most common error: "the triangles are similar" does NOT mean corresponding sides are equal — only that they are proportional.

### Family 4: Other triangle facts

**Every triangle:** three interior angles sum to 180°.

**Isosceles triangle:** two equal sides means the angles opposite those equal sides are also equal. If AB = AC, then angle B = angle C. Give the GMAT two sides of an isosceles triangle and it will ask for an angle; give it one angle and it will ask for a side. Either way, this symmetry is the entry point.

**Area of any triangle:** Area = ½ × base × height, where height is the perpendicular distance from the opposite vertex to the base line — not the slant side.

Why ½? Picture a parallelogram. A triangle is exactly half of a parallelogram with the same base and height — cut it diagonally. So area = ½ × (parallelogram area) = ½ × base × height.

**Equilateral triangle.** Side s: Area = s²√3 / 4. Memorize this formula — equilaterals appear embedded inside circles and regular hexagons on hard problems.

**Triangle inequality.** Each side must be less than the sum of the other two. If two sides are 5 and 8, the third satisfies **3 < x < 13**.

**Converse of the Pythagorean theorem.** If a² + b² = c², the triangle is right, with the right angle opposite c. On Data Sufficiency, "AB² + AC² = BC²" is sufficient to conclude angle A = 90°.

> **Recall check.** Without looking: list the four Pythagorean triples, the 45-45-90 ratio, the 30-60-90 ratio, the exterior angle rule, and the condition for two triangles to be similar. Write them out, then check. These facts account for roughly 35% of GMAT geometry points — forced retrieval beats passive re-reading by a wide margin on retention.

## @circles

Circles on the GMAT use four formulas plus one unifying idea: every arc, sector, and partial-circle measurement is simply a fraction of the full circle.

**The four formulas (all use radius r):**

- **Circumference:** C = 2πr (equivalently πd, where d = 2r)
- **Area:** A = πr²
- **Arc length:** L = (θ/360) × 2πr
- **Sector area:** A = (θ/360) × πr²

where θ is the central angle in degrees.

**The unifying idea.** Both arc length and sector area are just the full-circle formula multiplied by (central angle / 360). A 90° sector is ¼ of the circle. A 120° sector is ⅓. Memorize only the full-circle formulas; divide by the appropriate fraction on demand.

**Example (basic).** Radius 6 → area = 36π; circumference = 12π. The GMAT always includes both in the answer choices to catch the student who grabbed the wrong formula. Write the formula before substituting.

**Example (arc length).** Circle with circumference 10π, central angle 72°. Arc length?

    fraction = 72/360 = 1/5
    arc = (1/5) × 10π = 2π

**Example (sector area).** Circle with radius 6, central angle 120°. Sector area?

    fraction = 120/360 = 1/3
    sector area = (1/3) × π × 36 = 12π

Both problems run through the same two steps: find the fraction, multiply. No additional formula needed.

**Inscribed angle theorem.** An angle inscribed in a circle (vertex on the circle, sides as chords) equals half the central angle subtending the same arc. Central angle 80° → inscribed angle 40°. This theorem appears on 685+ problems, often disguised. A special case worth memorizing: an inscribed angle that subtends a diameter is always 90°.

**Inscribed squares.**

A square inscribed in a circle has its diagonal equal to the diameter. Side = diameter/√2 = (2r)/√2 = r√2. Area = (r√2)² = 2r². Shortcut: area of inscribed square = d²/2, where d is the diameter.

For the standard question ("circle radius 5, inscribed square area?"):

    area = d²/2 = 10²/2 = 50

**Tangent lines** are perpendicular to the radius at the point of tangency. If a tangent touches a circle at point P, the radius to P is perpendicular to the tangent line. This right angle is the entry point for any tangent geometry question.

**Trap to watch.** "Area of a circle with diameter 10?" Diameter 10 means radius 5, area = 25π. Students who substitute the diameter directly into πr² get π(10²) = 100π — four times too large. Always halve the diameter before plugging into any radius formula.

> **Self-explanation prompt.** Before the check questions: explain in one sentence why the arc length and sector area formulas both use (θ/360). If you can say "because both are simply the fraction of the full circle that the angle represents," you understand the underlying structure — and you will never need to memorize four separate circle-slice formulas.

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

**Area of a regular hexagon with side s:** 6 × (s²√3 / 4) = (3√3 × s²) / 2. Treat the hexagon as six equilateral triangles sharing a center. Rarely the primary question, but appears embedded in circle problems at 705+.

**Shortcut: exterior angles for "how many sides."** Each interior angle of a regular n-gon is [(n−2)×180]/n. If you're given the interior angle and asked for n, the exterior angle route is faster: exterior angle = 180° − interior angle, n = 360 / exterior angle.

**Example.** Each interior angle is 150°. Exterior angle = 30°. n = 360/30 = **12 sides**.

> **Self-explanation prompt.** Before the check questions: explain in one sentence why the interior-angle sum formula uses (n − 2) instead of n. If you can say "because any n-gon can be triangulated into n − 2 triangles from a single vertex, each contributing 180°," you've internalized the formula and won't forget the subtraction under pressure.

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

**Circles in the coordinate plane.** A circle with center (h, k) and radius r has equation:

    (x − h)² + (y − k)² = r²

This is just the distance formula: every point (x, y) on the circle is exactly r away from (h, k).

**Example.** Circle centered at (2, −3) with radius 5. Does point (5, 1) lie on it?

    (5 − 2)² + (1 − (−3))² = 9 + 16 = 25 = 5²   ✓

**Example (finding center and radius from a given equation).** Equation: (x + 3)² + (y − 4)² = 49. Center is (−3, 4), radius is 7. Watch the sign: (x + 3) means h = −3, not +3.

**When the equation is not in standard form.** The GMAT sometimes gives x² + y² + 4x − 6y = 12. Complete the square to identify center and radius. This is rare at 605-685 but appears at 725+.

**Points above and below a line.** The line y = mx + b divides the plane into two regions. A point (a, b) is above the line if b > ma + b_intercept (plug into the line equation and compare y-values). This appears in inequality problems asking "which region satisfies the constraint."

**Trap to watch.** Perpendicular slopes are negative reciprocals — not just negatives. The perpendicular to slope 2 is −1/2, not −2. Miss either the sign or the reciprocal and you have the wrong line.

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

The hardest GMAT geometry questions nest two shapes together — square inside circle, triangle inside square, two circles sharing a region — and ask for an area, perimeter, or missing length. The approach is always the same: **find the shared element that links the two shapes**, convert between dimensions, then solve one shape at a time.

**The shared-element catalogue. Memorize all five.**

| Configuration | Shared element | Conversion |
|---|---|---|
| Square inscribed in circle | Diagonal = diameter | d = s√2, so s = d/√2 |
| Circle inscribed in square | Diameter = side | r = s/2 |
| Right triangle inscribed in circle | Hypotenuse = diameter | — |
| Equilateral triangle inscribed in circle | Side s, radius r | r = s/√3 |
| Circle inscribed in equilateral triangle | Side s, radius r | r = s/(2√3) |

Once you identify the shared element, you have a bridge between both shapes and the rest is formula-plug.

**Example 1 (square in circle).** Circle radius 5, find the inscribed square's area.

    Diameter = 10 = diagonal of the square
    Area of square = d²/2 = 100/2 = 50

**Example 2 (circle in square).** Square with side 8, find the area of the inscribed circle.

    Diameter = side = 8, so radius = 4
    Area = π × 16 = 16π

**Example 3 (right triangle in circle — inscribed angle theorem).** Triangle ABC is inscribed in a circle with AB as the diameter. Since AB is the diameter, any inscribed angle that subtends AB is 90°. So angle C = 90°, meaning ABC is a right triangle. This is the inscribed angle theorem in action: if the hypotenuse is a diameter, the angle opposite it is 90°.

**The rectangle identity (DS trap).** For rectangle with sides L and W:

**(L + W)² = L² + 2LW + W²**

Rearranged: LW = [(L + W)² − (L² + W²)] / 2.

If you know the sum of sides (from perimeter: L + W = P/2) and the sum of squares (from diagonal: L² + W² = d²), you can find LW — the area — without ever solving for L and W individually.

**Example.** Rectangle diagonal 10, perimeter 28. Find area.

    L + W = 14, L² + W² = 100
    (L + W)² = 196 = L² + 2LW + W² = 100 + 2LW
    LW = 48

On Data Sufficiency: "diagonal alone" is not sufficient (many rectangles have diagonal 10). "Perimeter alone" is not sufficient either. Together, by this identity, they lock down LW = area. Answer is **C**.

**Shaded regions.** Complex shaded areas are almost always (big shape) − (small shape). Sketch carefully, compute each area separately, subtract. The most common version: area of a semicircle minus an inscribed triangle, or area of a square minus an inscribed circle.

**Area ratio in similar figures.** If two similar figures have a linear scale factor of k (lengths in ratio k), their areas are in ratio k². Their volumes are in ratio k³. When a problem doubles a side, the area quadruples — not doubles. This is tested frequently at 685+ in both Problem Solving and Data Sufficiency.

**Trap to watch.** When two regions share a boundary (circle inscribed in a square), the tangent points are the only contact — the circle and square do not overlap, they touch. "Shaded region" questions that show a circle inside a square ask for the area between them: square area − circle area. Students who subtract the wrong one from the wrong one get an impossible (negative) result; always check that your answer is positive and smaller than the larger shape.

## @summary

GMAT geometry is a formula-sheet topic. The student who has memorized the formulas — and recognizes which shape is in front of them — finishes every question in under 90 seconds. Here is the cold-memorization list.

**Angle relationships.**

- Supplementary: two angles sum to 180°. Complementary: sum to 90°.
- Vertical angles: equal. (Two crossing lines form two pairs of equal opposite angles.)
- Parallel lines + transversal: corresponding angles equal; alternate interior angles equal; co-interior angles supplementary.
- Exterior angle of a triangle: equals the sum of the two non-adjacent interior angles.

**Triangles.**

- Pythagorean: a² + b² = c²
- Triples: 3-4-5, 5-12-13, 8-15-17, 7-24-25
- 45-45-90: sides 1 : 1 : √2
- 30-60-90: sides 1 : √3 : 2
- Equilateral area: s²√3 / 4
- Any triangle area: ½ × base × height
- Angle sum: 180°
- Triangle inequality: |a − b| < c < a + b
- Similar triangles (AA): corresponding sides proportional; areas in ratio k².
- Isosceles: equal sides → equal opposite angles.

**Circles.**

- Circumference: C = 2πr
- Area: A = πr²
- Arc length: (θ/360) × 2πr
- Sector area: (θ/360) × πr²
- Inscribed angle = ½ central angle subtending the same arc.
- Inscribed angle subtending a diameter = 90°.

**Quadrilaterals and polygons.**

- Rectangle area: LW; perimeter: 2(L + W); diagonal: √(L² + W²)
- Square area: s²; diagonal: s√2; area-from-diagonal: d²/2
- Parallelogram: base × height
- Trapezoid: ½(b₁ + b₂) × h
- Interior-angle sum: (n − 2) × 180°
- Each angle of regular n-gon: (n − 2) × 180° / n
- Exterior-angle sum (any convex): 360°

**Coordinate geometry.**

- Distance: √((x₂−x₁)² + (y₂−y₁)²)
- Midpoint: ((x₁+x₂)/2, (y₁+y₂)/2)
- Slope: (y₂−y₁)/(x₂−x₁)
- Perpendicular slopes: negative reciprocals (product = −1)
- Line: y = mx + b
- Circle: (x − h)² + (y − k)² = r²

**3D solids.**

- Box: volume LWH; surface area 2(LW + LH + WH)
- Cube: volume s³; surface area 6s²
- Cylinder: volume πr²h; total surface area 2πr² + 2πrh
- Sphere: volume (4/3)πr³; surface area 4πr²
- Space diagonal of a box: √(L² + W² + H²)

**Inscribed figures — shared elements.**

- Square in circle: diagonal = diameter.
- Circle in square: diameter = side.
- Right triangle in circle: hypotenuse = diameter (angle opposite it = 90°).
- Area of inscribed square: d²/2 (where d = diameter).

**The one algebraic identity that breaks hard DS geometry problems.**

(L + W)² = L² + 2LW + W². Given diagonal (L² + W²) and perimeter (L + W), you can solve for area (LW) without finding L and W separately.

**Common GMAT geometry patterns:**

| Problem type | First move |
|---|---|
| Parallel lines in diagram | Assign x to one angle, label all others as x or 180° − x |
| Two triangles with shared angle | Check for similarity (AA) |
| Circle arc or sector | Fraction = θ/360; multiply by C or A |
| Inscribed figure | Identify the shared element (diagonal, diameter, side) |
| Combined shape area | Big area − small area |
| DS: diagonal + perimeter | Sufficient together (square-the-sum identity) |
| Scale factor k for similar figures | Areas in ratio k², volumes in ratio k³ |

**Time management.** Formula-plug questions (basic triangle, circle area): under 45 seconds. Inscribed-figure and combined-shape: up to 2 minutes. Coordinate-geometry multi-step: 90 seconds.

If you find yourself redrawing the same figure, you have not yet identified the key relationship. Stop. Ask: what is the shared element between the two shapes? That answer unlocks the rest.
