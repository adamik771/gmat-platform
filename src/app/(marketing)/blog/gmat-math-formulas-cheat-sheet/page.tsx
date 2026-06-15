import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"
import JsonLd from "@/components/seo/JsonLd"
import { articleLd } from "@/lib/structured-data"
import Breadcrumbs from "@/components/seo/Breadcrumbs"
import RelatedPosts from "@/components/marketing/RelatedPosts"
import BlogInlineCTA from "@/components/marketing/BlogInlineCTA"

const TITLE = "GMAT Math Formulas: The Cheat Sheet You Actually Need (2026)"
const DESCRIPTION =
  "Every formula tested on GMAT Focus Quant, organized by topic with a one-line when-to-use note for each — arithmetic, number properties, algebra, word problems, stats, counting, and geometry. No calculator, no formula sheet on test day, so memorize the high-frequency ones."
const PUBLISHED_DATE = "2026-06-15"
const READ_MINUTES = 12

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/blog/gmat-math-formulas-cheat-sheet" },
  openGraph: {
    type: "article",
    title: TITLE,
    description: DESCRIPTION,
    publishedTime: `${PUBLISHED_DATE}T00:00:00.000Z`,
    authors: ["Adam Zakarian"],
  },
}

export default function PostPage() {
  return (
    <div style={{ backgroundColor: "#0A0A0A" }}>
      <JsonLd
        data={articleLd({
          path: "/blog/gmat-math-formulas-cheat-sheet",
          title: TITLE,
          description: DESCRIPTION,
          datePublished: PUBLISHED_DATE,
        })}
      />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 pt-28 pb-20">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            {
              label: "Math Formula Cheat Sheet",
              href: "/blog/gmat-math-formulas-cheat-sheet",
            },
          ]}
        />

        <header className="mb-10">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-[#888888] mb-4">
            <span className="tabular-nums">{PUBLISHED_DATE}</span>
            <span className="text-[#444444]">·</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3 h-3" />
              {READ_MINUTES} min read
            </span>
            <span className="text-[#444444]">·</span>
            <span>Adam Zakarian</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05] mb-4">
            GMAT math formulas:{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              the cheat sheet
            </span>{" "}
            you actually need.
          </h1>
          <p className="text-[18px] text-[#C0C0C0] leading-[1.55]">
            Every formula tested on GMAT Focus Quant, organized by topic
            with a one-line when-to-use note for each. No calculator and no
            formula sheet on test day &mdash; so the high-frequency ones
            have to live in your head.
          </p>
        </header>

        <div className="prose-zk space-y-6">
          <p>
            The GMAT hands you nothing. On the Quantitative section there is
            no on-screen calculator and there is no formula sheet, on any
            section, ever. Whatever you need to compute, you compute by
            hand, and whatever formula you need, you supply from memory.
            That changes what a cheat sheet is for. This is not a document
            to glance at during the exam &mdash; you can&apos;t. It is a
            drilling tool. Read it, cover a column, recite the other, and
            keep doing that until recall is automatic. The goal is to make
            the formula appear in your head the instant you recognize the
            question type.
          </p>

          <Pull>
            A formula you can look up is useless on test day, because you
            can&apos;t look anything up. The only formulas that count are
            the ones you can produce cold, under the clock, with no prompt.
          </Pull>

          <p>
            Quant on the Focus Edition is Problem Solving only: 21
            questions in 45 minutes, multiple choice. Data Sufficiency now
            lives in Data Insights. The formulas below cover the full Quant
            content map. Each table pairs the formula with a one-line note
            on when to reach for it, because knowing a formula and knowing
            <em> when</em> it applies are two different skills, and the GMAT
            tests the second one harder.
          </p>

          <H2>Arithmetic</H2>
          <p>
            The unglamorous foundation. Percent and ratio questions are
            everywhere on Quant and bleed into the word problems, so fluency
            here pays off across the whole section.
          </p>
          <table>
            <thead>
              <tr>
                <th>Formula</th>
                <th>Use it when&hellip;</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Percent change = (new &minus; old) / old &times; 100</td>
                <td>
                  a value goes up or down and you need the percentage,
                  not the raw difference. Always divide by the
                  <em> original</em> value.
                </td>
              </tr>
              <tr>
                <td>
                  Increase by p% &rarr; multiply by (1 + p/100); decrease
                  &rarr; multiply by (1 &minus; p/100)
                </td>
                <td>
                  chaining successive changes. A 20% rise then a 20% fall
                  is &times;1.2&times;0.8 = 0.96, not back to start.
                </td>
              </tr>
              <tr>
                <td>x% of y = (x/100) &times; y = y% of x</td>
                <td>
                  translating &ldquo;percent of&rdquo; into arithmetic;
                  the swap trick makes some calculations far easier.
                </td>
              </tr>
              <tr>
                <td>Fraction &harr; decimal &harr; percent equivalents</td>
                <td>
                  you want to skip long division. Know 1/8 = 0.125 = 12.5%,
                  1/6 &asymp; 16.7%, 1/3 &asymp; 33.3%, and the rest of the
                  common set on sight.
                </td>
              </tr>
              <tr>
                <td>Ratio a : b means parts; total = a + b parts</td>
                <td>
                  a quantity is split in a given ratio. Scale every part by
                  the same multiplier to recover actual amounts.
                </td>
              </tr>
            </tbody>
          </table>

          <H2>Number properties</H2>
          <p>
            High-frequency and almost never requiring heavy computation
            &mdash; these reward structure over arithmetic. Prime
            factorization is the master key to most of them.
          </p>
          <table>
            <thead>
              <tr>
                <th>Rule / formula</th>
                <th>Use it when&hellip;</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Divisibility: by 3 if digit sum divisible by 3; by 9 if
                  digit sum by 9; by 4 if last two digits by 4; by 6 if even
                  and divisible by 3
                </td>
                <td>
                  testing factors fast without dividing. Combine the rules
                  for composite divisors.
                </td>
              </tr>
              <tr>
                <td>
                  GCF &amp; LCM via prime factorization (GCF = lowest powers
                  shared; LCM = highest powers present)
                </td>
                <td>
                  you need the largest common factor or smallest common
                  multiple. Also: GCF &times; LCM = product of the two
                  numbers.
                </td>
              </tr>
              <tr>
                <td>Units-digit cycles (e.g. powers of 2 cycle 2, 4, 8, 6)</td>
                <td>
                  a question asks for the last digit of a large power. Find
                  the cycle length, then take the exponent mod that length.
                </td>
              </tr>
              <tr>
                <td>Remainder form: n = dk + r, with 0 &le; r &lt; d</td>
                <td>
                  reasoning about remainders. The remainder r is what
                  matters; d is the divisor and k is the quotient.
                </td>
              </tr>
            </tbody>
          </table>

          <H2>Algebra</H2>
          <p>
            Less about exotic formulas and more about recognizing patterns
            instantly. The factoring identities below show up constantly,
            often disguised, and spotting them turns a grind into one line.
          </p>
          <table>
            <thead>
              <tr>
                <th>Formula</th>
                <th>Use it when&hellip;</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Linear: solve ax + b = c &rarr; x = (c &minus; b)/a</td>
                <td>
                  one unknown, one equation. For two unknowns, use
                  substitution or elimination across two equations.
                </td>
              </tr>
              <tr>
                <td>
                  Quadratic formula: x = (&minus;b &plusmn; &radic;(b&sup2;
                  &minus; 4ac)) / 2a
                </td>
                <td>
                  a quadratic won&apos;t factor cleanly. The discriminant
                  b&sup2; &minus; 4ac tells you how many real roots exist.
                </td>
              </tr>
              <tr>
                <td>
                  Difference of squares: a&sup2; &minus; b&sup2; = (a + b)(a
                  &minus; b)
                </td>
                <td>
                  you see two squares subtracted. One of the highest-value
                  patterns on the test; it collapses ugly expressions fast.
                </td>
              </tr>
              <tr>
                <td>
                  Perfect squares: (a &plusmn; b)&sup2; = a&sup2; &plusmn;
                  2ab + b&sup2;
                </td>
                <td>
                  expanding a binomial square, or recognizing one to factor
                  in reverse. Watch the middle 2ab term.
                </td>
              </tr>
              <tr>
                <td>
                  FOIL: (a + b)(c + d) = ac + ad + bc + bd
                </td>
                <td>
                  multiplying any two binomials by hand. First, Outer,
                  Inner, Last &mdash; the systematic way to avoid dropping
                  a term.
                </td>
              </tr>
            </tbody>
          </table>

          <H2>Exponents and roots</H2>
          <p>
            Pure rules, no judgment calls &mdash; which makes them free
            points if memorized and silent score-killers if fuzzy. The
            negative and fractional cases trip people up the most.
          </p>
          <table>
            <thead>
              <tr>
                <th>Rule</th>
                <th>Use it when&hellip;</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Product / quotient: x&#8319; &middot; x&#7504; =
                  x&#8319;&#8314;&#7504;; x&#8319; / x&#7504; =
                  x&#8319;&#8315;&#7504;
                </td>
                <td>
                  same base, multiplied or divided. Add or subtract the
                  exponents; never multiply the bases.
                </td>
              </tr>
              <tr>
                <td>Power of a power: (x&#8319;)&#7504; = x&#8319;&#7504;</td>
                <td>
                  an exponent is raised to another exponent. Multiply them.
                </td>
              </tr>
              <tr>
                <td>Negative exponent: x&#8315;&#8319; = 1 / x&#8319;</td>
                <td>
                  you want to clear a negative power. Flip the base to the
                  denominator and make the exponent positive.
                </td>
              </tr>
              <tr>
                <td>
                  Fractional exponent: x&#7504;&#8260;&#8319; =
                  &#8319;&radic;(x&#7504;)
                </td>
                <td>
                  a root is written as a power, or vice versa. The
                  denominator is the root, the numerator is the power.
                </td>
              </tr>
              <tr>
                <td>
                  Root rules: &radic;(ab) = &radic;a &middot; &radic;b;
                  &radic;(a/b) = &radic;a / &radic;b
                </td>
                <td>
                  simplifying radicals. Pull perfect-square factors out from
                  under the root.
                </td>
              </tr>
            </tbody>
          </table>

          <H2>Word problems</H2>
          <p>
            The translation tax. The arithmetic is rarely hard; converting
            a sentence into the right equation is where points are won and
            lost. These four templates cover the overwhelming majority of
            Quant word problems.
          </p>
          <table>
            <thead>
              <tr>
                <th>Formula</th>
                <th>Use it when&hellip;</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Distance = rate &times; time (D = RT)</td>
                <td>
                  anything moves. Build a small table of distance, rate, and
                  time for each traveler, then relate them.
                </td>
              </tr>
              <tr>
                <td>
                  Combined work rate: 1/a + 1/b = 1/t (rates add)
                </td>
                <td>
                  two or more agents work together. Add their per-unit
                  rates, not their times, to get the shared rate.
                </td>
              </tr>
              <tr>
                <td>
                  Weighted average = &Sigma;(value &times; weight) / &Sigma;
                  weights
                </td>
                <td>
                  mixing groups of different sizes, or blending solutions of
                  different concentrations. The bigger group pulls the
                  average toward it.
                </td>
              </tr>
              <tr>
                <td>
                  Simple interest: I = Prt. Compound: A = P(1 + r/n)&#8319;&#7505;
                </td>
                <td>
                  a question specifies simple vs. compound. Simple grows on
                  principal only; compound grows on principal plus prior
                  interest.
                </td>
              </tr>
            </tbody>
          </table>

          <BlogInlineCTA />

          <H2>Statistics</H2>
          <p>
            The GMAT loves descriptive stats because they reward
            understanding over calculation. You will almost never compute a
            standard deviation by hand &mdash; but you must know what it
            measures and how a data shift affects it.
          </p>
          <table>
            <thead>
              <tr>
                <th>Formula / concept</th>
                <th>Use it when&hellip;</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mean = sum of values / count</td>
                <td>
                  the question says &ldquo;average.&rdquo; Often you&apos;re
                  given the mean and count and must back out the sum.
                </td>
              </tr>
              <tr>
                <td>Median = middle value (or average of the two middle)</td>
                <td>
                  data is skewed or has outliers. Order the set first; the
                  median ignores how extreme the tails are.
                </td>
              </tr>
              <tr>
                <td>Range = greatest &minus; least</td>
                <td>
                  you need a quick measure of total spread. It only sees the
                  two endpoints.
                </td>
              </tr>
              <tr>
                <td>
                  Standard deviation = spread around the mean (conceptual)
                </td>
                <td>
                  comparing how tightly clustered two sets are. Adding a
                  constant to every value leaves SD unchanged; multiplying
                  scales it.
                </td>
              </tr>
              <tr>
                <td>
                  Evenly spaced set: sum = average &times; count; average =
                  (first + last)/2
                </td>
                <td>
                  summing a consecutive or arithmetic sequence. Pairing the
                  ends gives the average instantly.
                </td>
              </tr>
              <tr>
                <td>Count = (last &minus; first)/step + 1</td>
                <td>
                  counting terms in an evenly spaced list. The
                  &ldquo;+ 1&rdquo; is the classic off-by-one trap.
                </td>
              </tr>
            </tbody>
          </table>

          <H2>Counting and probability</H2>
          <p>
            The smallest topic by volume but the one students fear most.
            The whole area reduces to a few ideas: multiply independent
            choices, decide whether order matters, and count the
            complement when direct counting is messy.
          </p>
          <table>
            <thead>
              <tr>
                <th>Formula</th>
                <th>Use it when&hellip;</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Fundamental counting principle: total = n&#8321; &times;
                  n&#8322; &times; &hellip;
                </td>
                <td>
                  independent stages each have their own number of choices.
                  Multiply across the stages.
                </td>
              </tr>
              <tr>
                <td>Permutations: nPr = n! / (n &minus; r)!</td>
                <td>
                  order matters &mdash; arrangements, rankings, seatings.
                  ABC and CBA count as different outcomes.
                </td>
              </tr>
              <tr>
                <td>Combinations: nCr = n! / [r!(n &minus; r)!]</td>
                <td>
                  order does <em>not</em> matter &mdash; choosing a group or
                  committee. ABC and CBA are the same selection.
                </td>
              </tr>
              <tr>
                <td>Probability = desired outcomes / total outcomes</td>
                <td>
                  outcomes are equally likely. Count the favorable cases and
                  the total cases, then divide.
                </td>
              </tr>
              <tr>
                <td>
                  At least one: P(at least one) = 1 &minus; P(none)
                </td>
                <td>
                  &ldquo;at least one&rdquo; appears and direct counting is
                  ugly. Computing the complement is almost always faster.
                </td>
              </tr>
            </tbody>
          </table>

          <H2>Geometry</H2>
          <p>
            The longest list, because geometry is formula-dense. The figures
            are usually not drawn to scale, so you reason from given values
            and these relationships, not from how the picture looks.
          </p>
          <table>
            <thead>
              <tr>
                <th>Formula</th>
                <th>Use it when&hellip;</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Angles: triangle sums to 180&deg;; straight line 180&deg;;
                  full circle 360&deg;
                </td>
                <td>
                  any figure with unknown angles. Chase angles using these
                  sums plus vertical and parallel-line rules.
                </td>
              </tr>
              <tr>
                <td>Triangle area = &frac12; &times; base &times; height</td>
                <td>
                  you have a base and the perpendicular height. The height
                  must be perpendicular to the chosen base, not a slanted
                  side.
                </td>
              </tr>
              <tr>
                <td>
                  Pythagorean theorem: a&sup2; + b&sup2; = c&sup2;
                </td>
                <td>
                  a right triangle. Memorize the common triples 3-4-5 and
                  5-12-13 to skip the radical.
                </td>
              </tr>
              <tr>
                <td>
                  45-45-90 sides in ratio 1 : 1 : &radic;2
                </td>
                <td>
                  an isosceles right triangle, or a square&apos;s diagonal.
                  The hypotenuse is a leg times &radic;2.
                </td>
              </tr>
              <tr>
                <td>
                  30-60-90 sides in ratio 1 : &radic;3 : 2
                </td>
                <td>
                  a 30-60-90 triangle, or half of an equilateral. The side
                  opposite 30&deg; is the smallest.
                </td>
              </tr>
              <tr>
                <td>
                  Circle: circumference = 2&pi;r; area = &pi;r&sup2;
                </td>
                <td>
                  any circle problem. Diameter d = 2r; arcs and sectors are
                  fractions of these by the central angle over 360&deg;.
                </td>
              </tr>
              <tr>
                <td>Slope = (y&#8322; &minus; y&#8321;)/(x&#8322; &minus; x&#8321;)</td>
                <td>
                  comparing line steepness or testing parallel (equal
                  slopes) and perpendicular (negative reciprocals).
                </td>
              </tr>
              <tr>
                <td>
                  Distance = &radic;[(x&#8322; &minus; x&#8321;)&sup2; +
                  (y&#8322; &minus; y&#8321;)&sup2;]
                </td>
                <td>
                  finding the length of a segment in the coordinate plane.
                  It&apos;s the Pythagorean theorem in disguise.
                </td>
              </tr>
              <tr>
                <td>
                  Midpoint = ((x&#8321; + x&#8322;)/2, (y&#8321; +
                  y&#8322;)/2)
                </td>
                <td>
                  you need the point halfway between two coordinates. Average
                  the x-values and the y-values separately.
                </td>
              </tr>
              <tr>
                <td>
                  Box: volume = lwh; surface area = 2(lw + lh + wh)
                </td>
                <td>
                  a rectangular solid. Volume fills it; surface area wraps
                  the six faces.
                </td>
              </tr>
              <tr>
                <td>
                  Cylinder: volume = &pi;r&sup2;h; surface area = 2&pi;r&sup2;
                  + 2&pi;rh
                </td>
                <td>
                  a cylinder. The lateral surface is the circumference times
                  the height; add the two circular caps.
                </td>
              </tr>
            </tbody>
          </table>

          <H2>What to actually memorize</H2>
          <p>
            You cannot brute-force this list by rote and expect it to hold
            under pressure. Split it in two. A small set of high-frequency
            formulas appears so often that hesitation costs you real time
            and points &mdash; those must be reflexive: <Strong>percent
            change</Strong>, <Strong>D = RT</Strong>, the <Strong>combined
            work rate</Strong>, the <Strong>30-60-90 and 45-45-90 special
            triangles</Strong>, and <Strong>nCr</Strong>. Drill those until
            they fire without conscious effort.
          </p>
          <p>
            Everything else, you derive from understanding rather than
            store as a fact. If you understand that area is base times
            height for a parallelogram, the triangle&apos;s half follows.
            If you understand FOIL, the perfect-square and
            difference-of-squares identities are just patterns you&apos;ve
            seen enough times to recognize. The distance formula is the
            Pythagorean theorem with coordinates plugged in. Memorize the
            handful that need to be instant; build the rest on a foundation
            you can reconstruct when memory fails.
          </p>

          <Pull>
            Memorize the high-frequency five cold. Derive the rest from
            understanding. A cheat sheet you can rebuild from principles is
            worth more than one you&apos;ve only ever read.
          </Pull>

          <H2>The platform</H2>
          <p>
            Zakarian GMAT&apos;s Quant chapters teach each of these
            formulas in context, then immediately put them to work in graded
            problem sets so the recall is built through retrieval rather
            than re-reading. The error log&apos;s tags surface whether a
            miss was a formula gap or a misapplication, which tells you
            exactly which row of this cheat sheet to drill next. The sample
            chapter is free if you want to see the teaching first.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/sample-chapter/quant"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-[13px] font-semibold transition-transform duration-200 hover:-translate-y-0.5"
              style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
            >
              Read the free Quant sample chapter
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/blog/gmat-quant-timing-strategy"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-[13px] font-semibold border transition-colors"
              style={{
                borderColor: "rgba(255,255,255,0.10)",
                color: "#C0C0C0",
              }}
            >
              Read the Quant timing strategy
            </Link>
          </div>
        </div>
        <RelatedPosts currentSlug="gmat-math-formulas-cheat-sheet" />
      </article>
      <style>{`
        .prose-zk { color: #C0C0C0; font-size: 17px; line-height: 1.75; }
        .prose-zk p { color: #C0C0C0; }
        .prose-zk strong { color: #F0F0F0; font-weight: 600; }
        .prose-zk em { color: #E8E8E8; font-style: italic; }
        .prose-zk ol, .prose-zk ul { padding-left: 22px; }
        .prose-zk ol > li, .prose-zk ul > li { margin-bottom: 8px; }
        .prose-zk a { color: #C9A84C; text-decoration: underline; }
        .prose-zk table { width:100%; border-collapse:collapse; margin:8px 0; font-size:15px; }
        .prose-zk th,.prose-zk td { border:1px solid rgba(255,255,255,0.08); padding:8px 10px; text-align:left; }
        .prose-zk th { color:#F0F0F0; font-weight:600; }
      `}</style>
    </div>
  )
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#F0F0F0] tracking-tight leading-tight mt-12 mb-3">
      {children}
    </h2>
  )
}

function Strong({ children }: { children: React.ReactNode }) {
  return <strong className="text-[#F0F0F0] font-semibold">{children}</strong>
}

function Pull({ children }: { children: React.ReactNode }) {
  return (
    <blockquote
      className="my-8 pl-6 border-l-2 italic font-display text-[20px] leading-[1.6]"
      style={{ borderColor: "#C9A84C", color: "#F0F0F0" }}
    >
      {children}
    </blockquote>
  )
}
