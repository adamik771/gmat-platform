import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"
import JsonLd from "@/components/seo/JsonLd"
import { articleLd } from "@/lib/structured-data"
import Breadcrumbs from "@/components/seo/Breadcrumbs"
import RelatedPosts from "@/components/marketing/RelatedPosts"
import BlogInlineCTA from "@/components/marketing/BlogInlineCTA"

const TITLE = "GMAT Number Properties: The High-Frequency Concepts"
const DESCRIPTION =
  "The number-properties concepts that show up most on GMAT Focus Quant — factors vs multiples, prime factorization, divisibility rules, LCM/GCF, even/odd behavior, units-digit cycles, remainders, and evenly-spaced sets — each with a one-line worked illustration."
const PUBLISHED_DATE = "2026-06-15"
const READ_MINUTES = 13

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/blog/gmat-number-properties-guide" },
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
          path: "/blog/gmat-number-properties-guide",
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
              label: "Number Properties",
              href: "/blog/gmat-number-properties-guide",
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
            GMAT number properties:{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              the concepts that repeat
            </span>{" "}
            on Quant.
          </h1>
          <p className="text-[18px] text-[#C0C0C0] leading-[1.55]">
            Factors versus multiples, prime factorization, divisibility
            rules, LCM and GCF, even/odd behavior, units-digit cycles,
            remainders, and evenly-spaced sets &mdash; each with a
            one-line worked illustration you can carry into the section.
          </p>
        </header>

        <div className="prose-zk space-y-6">
          <p>
            Number properties is the most efficient topic to study on
            GMAT Focus Quant. The concepts are finite, they recur across
            the section, and they reward pattern recognition over
            calculation. There is no on-screen calculator on Quant and
            no formula sheet on test day, so the leverage comes from
            knowing a handful of behaviors cold. This guide walks the
            high-frequency ones in order, each with a rule and a single
            worked line so you can see the mechanics fire.
          </p>

          <Pull>
            Number properties rewards seeing structure, not grinding
            arithmetic. The student who recognizes that a question is
            really about prime factors finishes in twenty seconds; the
            one who starts multiplying burns two minutes and still
            misses it.
          </Pull>

          <H2>Integers and the vocabulary trap</H2>
          <p>
            An <Strong>integer</Strong> is a whole number &mdash;
            positive, negative, or zero &mdash; with no fractional part.
            Non-integers include fractions and decimals. Most number-
            properties questions live entirely in the integers, and the
            first trap is vocabulary, not math.
          </p>
          <p>
            Three phrases describe the same relationship from different
            directions. If 12 and 3 are the two numbers in play, then 12
            is <Strong>divisible by</Strong> 3, 3 is a{" "}
            <Strong>factor of</Strong> 12, and 12 is a{" "}
            <Strong>multiple of</Strong> 3. All three are the single
            fact that 12 = 3 &times; 4 with no remainder. The exam
            switches between these phrasings on purpose; treat them as
            one idea read from either end.
          </p>
          <p>
            <em>Illustration:</em> &ldquo;Is n divisible by 6?&rdquo;
            and &ldquo;Is 6 a factor of n?&rdquo; and &ldquo;Is n a
            multiple of 6?&rdquo; are the exact same question.
          </p>
          <p>
            Two edge cases the exam loves to exploit. Every integer is a
            multiple of itself and a multiple of 1, and 1 is a factor of
            every integer. Zero is a multiple of every number (0 = d
            &times; 0), but you can never divide by zero, so 0 is never a
            factor of anything. When a question says &ldquo;positive
            divisors&rdquo; or &ldquo;distinct factors,&rdquo; read the
            qualifier carefully &mdash; whether 1 and the number itself
            count is exactly the kind of detail the answer choices are
            built to punish.
          </p>

          <H2>Prime factorization: the atomic view</H2>
          <p>
            A <Strong>prime</Strong> is an integer greater than 1 whose
            only factors are 1 and itself (2, 3, 5, 7, 11, and so on; 2
            is the only even prime). <Strong>Prime factorization</Strong>{" "}
            breaks any integer into the unique product of primes that
            builds it. This is the single most useful move in the topic,
            because the prime factors are the atoms: divisibility, LCM,
            GCF, perfect squares, and the count of factors all read
            directly off the prime breakdown.
          </p>
          <p>
            <em>Illustration:</em> 360 = 2&sup3; &times; 3&sup2; &times;
            5. From that one line you can tell 360 is divisible by 8
            (it has 2&sup3;), by 9 (it has 3&sup2;), and by 45 (3&sup2;
            &times; 5) &mdash; without dividing once.
          </p>
          <p>
            The prime breakdown also counts factors for you. Take each
            exponent, add 1 to it, and multiply the results; that product
            is the total number of positive factors. The logic is that
            each factor is built by choosing how many copies of each
            prime to include, from zero up to its exponent.
          </p>
          <p>
            <em>Illustration:</em> 360 = 2&sup3; &times; 3&sup2; &times;
            5&sup1; has (3 + 1)(2 + 1)(1 + 1) = 4 &times; 3 &times; 2 =
            24 positive factors. A related tell: a number is a perfect
            square exactly when every exponent in its prime factorization
            is even, which is why perfect squares always have an odd
            number of factors.
          </p>

          <H2>Divisibility rules</H2>
          <p>
            These let you test divisibility by inspection, which matters
            when there is no calculator. The high-yield ones:
          </p>

          <table>
            <thead>
              <tr>
                <th>Divisor</th>
                <th>Rule</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2</td>
                <td>Last digit is even (0, 2, 4, 6, 8).</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Digit sum is divisible by 3.</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Last two digits form a number divisible by 4.</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Last digit is 0 or 5.</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Divisible by 2 and by 3 (both must hold).</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Last three digits form a number divisible by 8.</td>
              </tr>
              <tr>
                <td>9</td>
                <td>Digit sum is divisible by 9.</td>
              </tr>
              <tr>
                <td>10</td>
                <td>Last digit is 0.</td>
              </tr>
              <tr>
                <td>11</td>
                <td>
                  Alternating digit sum (add, subtract, add&hellip;) is a
                  multiple of 11, including 0.
                </td>
              </tr>
            </tbody>
          </table>

          <p>
            <em>Illustration:</em> Is 5,148 divisible by 11? Alternate
            the digits: 5 &minus; 1 + 4 &minus; 8 = 0, and 0 is a
            multiple of 11, so yes. The digit sum is 18, divisible by 9,
            so it is also divisible by 9.
          </p>

          <H2>LCM and GCF through prime factors</H2>
          <p>
            Once you have prime factorizations, the least common
            multiple and greatest common factor fall out mechanically.
            Line up the prime factorizations and:
          </p>
          <ul>
            <li>
              <Strong>GCF</Strong> &mdash; take the{" "}
              <Strong>lowest</Strong> power of each prime the numbers
              share.
            </li>
            <li>
              <Strong>LCM</Strong> &mdash; take the{" "}
              <Strong>highest</Strong> power of every prime that appears
              in either number.
            </li>
          </ul>
          <p>
            <em>Illustration:</em> 24 = 2&sup3; &times; 3 and 36 =
            2&sup2; &times; 3&sup2;. GCF takes the lows: 2&sup2; &times;
            3 = 12. LCM takes the highs: 2&sup3; &times; 3&sup2; = 72.
          </p>
          <p>
            The intuitive reading of LCM is &ldquo;when two repeating
            events next coincide.&rdquo; If one bus comes every 24
            minutes and another every 36 minutes and they leave together
            now, they next leave together in 72 minutes &mdash; the LCM.
          </p>
          <p>
            One more relationship worth carrying: for any two positive
            integers, <Strong>GCF &times; LCM equals their product.</Strong>{" "}
            Check it on 24 and 36: 12 &times; 72 = 864, and 24 &times; 36
            = 864. If a question hands you three of those four quantities,
            you can solve for the fourth without factoring at all.
          </p>

          <BlogInlineCTA />

          <H2>Even and odd behavior</H2>
          <p>
            Even/odd questions are pure structure, no arithmetic. An
            even number has 2 as a factor; an odd number does not. The
            behavior under the two basic operations:
          </p>

          <table>
            <thead>
              <tr>
                <th>Operation</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>even + even</td>
                <td>even</td>
              </tr>
              <tr>
                <td>odd + odd</td>
                <td>even</td>
              </tr>
              <tr>
                <td>even + odd</td>
                <td>odd</td>
              </tr>
              <tr>
                <td>even &times; even</td>
                <td>even</td>
              </tr>
              <tr>
                <td>even &times; odd</td>
                <td>even</td>
              </tr>
              <tr>
                <td>odd &times; odd</td>
                <td>odd</td>
              </tr>
            </tbody>
          </table>

          <p>
            You do not need to memorize the table if you understand why.
            For multiplication, a product is even the moment{" "}
            <Strong>any</Strong> factor brings a 2 to the table, so even
            &times; anything is even, and a product is odd only when{" "}
            <Strong>no</Strong> factor supplies a 2 &mdash; that is, odd
            &times; odd. For addition, two numbers of the same parity
            sum to even, and mixed parity sums to odd.
          </p>
          <p>
            <em>Illustration:</em> If n is odd, then n&sup2; + n =
            n(n + 1) is the product of an odd and the next integer,
            which is even &mdash; one even factor is enough to settle it.
          </p>

          <H2>Positive, negative, and sign rules</H2>
          <p>
            Signs follow the same any/all logic. A product or quotient
            is negative when there is an <Strong>odd</Strong> count of
            negative factors and positive when there is an{" "}
            <Strong>even</Strong> count (zero negatives counts as even).
            Even powers of any nonzero number are positive; odd powers
            keep the base&apos;s sign. Watch for zero, which is neither
            positive nor negative and breaks the &ldquo;assume
            nonzero&rdquo; habit on Data Sufficiency.
          </p>
          <p>
            <em>Illustration:</em> (&minus;2)&#8308; = 16, but
            (&minus;2)&sup3; = &minus;8 &mdash; even exponent erases the
            sign, odd exponent preserves it.
          </p>

          <H2>Units-digit cycles for powers</H2>
          <p>
            The units digit of a large power follows a short repeating
            cycle, so you can find the last digit of something enormous
            without computing it. Most digits cycle with a period that
            divides 4, which gives a clean method: divide the exponent by
            4 and use the remainder to pick the position in the cycle (a
            remainder of 0 lands on the fourth, last entry). Some digits
            never change.
          </p>

          <table>
            <thead>
              <tr>
                <th>Base ends in</th>
                <th>Cycle of units digits</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2</td>
                <td>2, 4, 8, 6 (repeats every 4)</td>
              </tr>
              <tr>
                <td>3</td>
                <td>3, 9, 7, 1 (repeats every 4)</td>
              </tr>
              <tr>
                <td>7</td>
                <td>7, 9, 3, 1 (repeats every 4)</td>
              </tr>
              <tr>
                <td>8</td>
                <td>8, 4, 2, 6 (repeats every 4)</td>
              </tr>
              <tr>
                <td>0, 1, 5, 6</td>
                <td>Steady &mdash; always 0, 1, 5, 6 respectively</td>
              </tr>
            </tbody>
          </table>

          <p>
            The steady digits (0, 1, 5, 6) keep the same units digit at
            every power, so they need no cycle. The digits 4 and 9 cycle
            with period 2 (4, 6 and 9, 1), which you can treat as the
            four-step rule too.
          </p>
          <p>
            <em>Illustration:</em> What is the units digit of
            7&#8311;&#8313;? Divide 79 by 4: remainder 3. The 3rd entry
            in 7&apos;s cycle (7, 9, 3, 1) is 3, so the units digit is 3.
          </p>

          <H2>Remainders</H2>
          <p>
            Every division of integers can be written as{" "}
            <Strong>n = dk + r</Strong>, where d is the divisor, k is the
            quotient, and r is the remainder with{" "}
            <Strong>0 &le; r &lt; d</Strong>. The most useful way to read
            this is &ldquo;n is a multiple of d, plus r.&rdquo; That
            reframing turns abstract remainder questions into concrete
            number lists you can test.
          </p>
          <p>
            Remainders also <Strong>add and multiply</Strong>, as long
            as you reduce back into range afterward. To find the
            remainder of a sum or product when divided by d, take the
            remainder of each piece, combine them, then take the
            remainder again.
          </p>
          <p>
            <em>Illustration:</em> The remainder of 17 &times; 23 divided
            by 5: 17 leaves 2, 23 leaves 3, so 2 &times; 3 = 6, which
            leaves a remainder of 1. (Check: 391 = 78 &times; 5 + 1.)
          </p>
          <H3>The cycle method for big powers</H3>
          <p>
            Remainders of large powers cycle just like units digits.
            Compute the remainder of the first few powers, find where the
            pattern repeats, then map the exponent onto the cycle.
          </p>
          <p>
            <em>Illustration:</em> Remainder of 3&sup1;&#8304;&#8304;
            divided by 4: powers of 3 leave remainders 3, 1, 3, 1&hellip;
            with period 2. Since 100 is even, it lands on the second
            entry, so the remainder is 1.
          </p>

          <H2>Consecutive integers and evenly-spaced sets</H2>
          <p>
            An evenly-spaced set is any sequence with a constant step:
            consecutive integers (step 1), consecutive even numbers
            (step 2), multiples of any number, arithmetic sequences in
            general. These have three properties worth memorizing
            because they collapse long sums into one multiplication.
          </p>
          <ul>
            <li>
              <Strong>Mean equals median</Strong>, and both equal{" "}
              <Strong>(first + last) / 2</Strong>. The set is symmetric,
              so the average sits at the midpoint.
            </li>
            <li>
              <Strong>Sum = average &times; count.</Strong> Find the
              midpoint, multiply by how many terms there are.
            </li>
            <li>
              <Strong>Count = (last &minus; first) / step + 1.</Strong>{" "}
              The &ldquo;+ 1&rdquo; is the fence-post correction &mdash;
              count the posts, not the gaps between them.
            </li>
          </ul>
          <p>
            <em>Illustration:</em> Sum of the even integers from 12 to
            40. Count = (40 &minus; 12) / 2 + 1 = 15 terms. Average =
            (12 + 40) / 2 = 26. Sum = 26 &times; 15 = 390 &mdash; no
            term-by-term addition.
          </p>

          <H2>How to drill this</H2>
          <p>
            Number properties pays off fastest because the rules are few
            and they stack. Build prime factorization into a reflex, since
            it underwrites divisibility, LCM, and GCF. Internalize the
            even/odd and sign logic so you reason about parity instead of
            plugging numbers. Memorize the four-digit units-digit cycles
            and the n = dk + r frame for remainders. Lock in the
            evenly-spaced formulas, especially the fence-post{" "}
            <em>+ 1</em>, which is the single most common counting slip in
            the section. Then practice spotting which property a question
            is testing &mdash; recognition is where the time savings live.
          </p>

          <H2>The platform</H2>
          <p>
            Zakarian GMAT&apos;s Quant chapters teach each of these
            properties with worked reasoning and a graded problem set, and
            the error log&apos;s six-tag taxonomy separates a conceptual
            number-properties gap from a careless slip so you fix the
            right thing. The sample chapter is free if you want to see the
            teaching before you commit.
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
        <RelatedPosts currentSlug="gmat-number-properties-guide" />
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

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-display text-xl font-semibold text-[#F0F0F0] tracking-tight leading-tight mt-8 mb-2">
      {children}
    </h3>
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
