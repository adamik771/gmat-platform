import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Calculator, Clock } from "lucide-react"
import JsonLd from "@/components/seo/JsonLd"
import { articleLd } from "@/lib/structured-data"
import Breadcrumbs from "@/components/seo/Breadcrumbs"
import RelatedPosts from "@/components/marketing/RelatedPosts"

const TITLE = "GMAT Focus Edition vs the Old GMAT: What Actually Changed"
const DESCRIPTION =
  "Section-by-section breakdown of what GMAT Focus removed, what it kept, what the new 205-805 scoring scale means in old-test terms, and how to translate any old GMAT prep into a Focus study plan."
const PUBLISHED_DATE = "2026-05-03"
const READ_MINUTES = 12

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/blog/gmat-focus-vs-old-gmat-whats-changed",
  },
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
          path: "/blog/gmat-focus-vs-old-gmat-whats-changed",
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
              label: "Focus vs Old GMAT",
              href: "/blog/gmat-focus-vs-old-gmat-whats-changed",
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
            GMAT Focus vs the old GMAT:{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              what actually changed.
            </span>
          </h1>
          <p className="text-[18px] text-[#C0C0C0] leading-[1.55]">
            What the GMAT Focus Edition removed, what it kept, what the
            new 205-805 scoring scale means in old-test terms, and how to
            translate any old GMAT prep into a Focus study plan.
          </p>
        </header>

        <div className="prose-zk space-y-6">
          <p>
            If you started GMAT prep before late 2023, you started on the
            old test. If you&apos;re testing now, you&apos;re testing on
            the GMAT Focus Edition. The two share a name and a logo, but
            the format, the scoring scale, and even the section list
            changed enough that old prep needs to be re-mapped &mdash; not
            thrown out, but re-targeted. This guide walks through what
            actually changed, what didn&apos;t, and how to translate
            anything you&apos;ve already learned into the new test
            without starting over.
          </p>
          <p>
            Quick context first: GMAT Focus is the official replacement
            for the legacy GMAT. The legacy test was retired in early
            2024 and Focus is the only version of the test now offered.
            If you&apos;re shopping for a test date, it&apos;s Focus. If
            you&apos;re buying prep, it should be prep that targets
            Focus. Old prep that hasn&apos;t been updated will teach you
            things that no longer matter on test day.
          </p>

          <Pull>
            The GMAT Focus Edition is shorter, more flexible, and
            scored differently. The underlying skills it tests are
            mostly the same. The biggest mistake is treating it as a
            different test entirely &mdash; or as exactly the same test
            with a fresh paint job. It&apos;s neither.
          </Pull>

          <H2>The five biggest changes at a glance</H2>
          <ol>
            <li>
              <Strong>Total length dropped.</Strong> Old GMAT was
              roughly 3 hours 7 minutes (plus breaks). Focus is 2 hours
              15 minutes &mdash; one of the most-asked-about changes,
              and the most consequential for pacing strategy.
            </li>
            <li>
              <Strong>Sentence Correction was removed.</Strong> The old
              Verbal section had Reading Comprehension, Critical
              Reasoning, and Sentence Correction. Focus Verbal has only
              the first two. Sentence Correction is gone from the test
              entirely.
            </li>
            <li>
              <Strong>Data Insights replaced Integrated Reasoning.</Strong>
              Old IR had four question types and didn&apos;t count toward
              the Total Score. Focus DI has five question types
              (including Data Sufficiency, moved from Quant) and counts
              equally with Quant and Verbal toward the Total Score.
            </li>
            <li>
              <Strong>The AWA essay was removed.</Strong> The old test
              had an Analytical Writing Assessment that didn&apos;t count
              toward the Total Score. Focus has no essay.
            </li>
            <li>
              <Strong>The scoring scale changed from 200&ndash;800 to
              205&ndash;805.</Strong> The new scale was deliberately
              shifted to make old and new scores non-interchangeable
              &mdash; a 700 on the old test and a 705 on Focus are
              <em> not</em> equivalent. Conversion requires the official
              concordance table, not arithmetic.
            </li>
          </ol>

          <H2>Section-by-section: what changed</H2>

          <H3>Quant</H3>
          <p>
            The Quant section is the most stable. Same content topics
            (algebra, arithmetic, number properties, geometry, etc.).
            Same scoring scale per section (60-90 on Focus, formerly
            6-51 on the old test). Same general difficulty distribution.
          </p>
          <p>
            <Strong>What changed:</Strong>
          </p>
          <ul>
            <li>
              <Strong>Length:</Strong> 21 questions in 45 minutes
              (was 31 in 62 minutes). Per-question time is roughly the
              same (2:08 vs 2:00).
            </li>
            <li>
              <Strong>Data Sufficiency moved out.</Strong> DS is now in
              Data Insights, not Quant. Quant is Problem Solving only.
            </li>
            <li>
              <Strong>The bookmark / review feature was added.</Strong>
              You can now flag and revisit questions within a section,
              and change up to three answers at the end. This is a real
              strategic change &mdash; old test was strictly forward-only.
            </li>
          </ul>

          <H3>Verbal</H3>
          <p>
            The biggest content change of all sections. Sentence
            Correction is gone, which means the entire grammar-heavy
            half of old Verbal study is now off the table.
          </p>
          <p>
            <Strong>What changed:</Strong>
          </p>
          <ul>
            <li>
              <Strong>Length:</Strong> 23 questions in 45 minutes (was
              36 in 65 minutes).
            </li>
            <li>
              <Strong>Question types:</Strong> Reading Comprehension and
              Critical Reasoning only. Sentence Correction removed.
            </li>
            <li>
              <Strong>Section weighting shifts.</Strong> RC and CR each
              now make up roughly half the section instead of a third
              each.
            </li>
          </ul>
          <p>
            For non-native speakers in particular, removing Sentence
            Correction is a significant change. SC was the section where
            grammar fluency mattered most directly. Without it, the
            Verbal section now rewards comprehension speed and logical
            structure recognition almost exclusively.
          </p>

          <H3>Data Insights (new section)</H3>
          <p>
            Data Insights is the section that requires the most mental
            re-mapping. It&apos;s a fresh section in name, but it&apos;s
            built from pieces of the old test.
          </p>
          <p>
            <Strong>What it includes:</Strong>
          </p>
          <ul>
            <li>
              Data Sufficiency (formerly in Quant)
            </li>
            <li>Multi-Source Reasoning (formerly in Integrated Reasoning)</li>
            <li>Table Analysis (formerly in IR)</li>
            <li>Graphics Interpretation (formerly in IR)</li>
            <li>Two-Part Analysis (formerly in IR)</li>
          </ul>
          <p>
            <Strong>What changed for you:</Strong>
          </p>
          <ul>
            <li>
              <Strong>Length:</Strong> 20 questions in 45 minutes.
            </li>
            <li>
              <Strong>It now counts toward the Total Score</Strong> &mdash;
              equally with Quant and Verbal. This is the biggest single
              implication of the change. On the old test, IR was a side
              section schools could mostly ignore. On Focus, DI is a
              third of your score.
            </li>
            <li>
              <Strong>Section ordering is your choice.</Strong> Same as
              the old test &mdash; you can take Q, V, DI in any order &mdash;
              but the sections themselves are different.
            </li>
          </ul>

          <H3>What was removed entirely</H3>
          <ul>
            <li>
              <Strong>The Analytical Writing Assessment (AWA) essay.</Strong>
              Gone. No replacement. If you spent any time on essay prep,
              that time is now sunk cost &mdash; reallocate it to DI.
            </li>
            <li>
              <Strong>The 30-second &ldquo;tutorial&rdquo; before each
              section</Strong> &mdash; small, but adds up to a few minutes
              of total exam time savings.
            </li>
          </ul>

          <H2>Scoring: 200-800 to 205-805</H2>
          <p>
            The Focus Edition uses a 205-805 total score, scaled in
            10-point increments. This was deliberately offset from the
            old 200-800 scale so that scores from the two tests are
            <em> not directly comparable</em>. A 700 on the old test is
            not the same as a 705 on Focus &mdash; they happen to land in
            different percentiles.
          </p>
          <p>
            <Strong>Approximate concordance (from official GMAC tables):</Strong>
          </p>
          <ul>
            <li>805 (Focus) ≈ 800 (old)</li>
            <li>745 (Focus) ≈ 760 (old)</li>
            <li>695 (Focus) ≈ 720 (old)</li>
            <li>645 (Focus) ≈ 680 (old)</li>
            <li>595 (Focus) ≈ 640 (old)</li>
            <li>545 (Focus) ≈ 600 (old)</li>
          </ul>
          <p>
            The takeaway: if you scored 720 on the old test and you
            want the equivalent on Focus, you&apos;re aiming at roughly
            695. If you scored 680 on the old test, the Focus
            equivalent is roughly 645. If you&apos;re translating an
            admissions target like &ldquo;730+&rdquo; from old-test
            terms, the rough Focus equivalent is in the 705-715 range.
          </p>
          <p>
            For an interactive version that handles arbitrary scores,
            see the{" "}
            <Link href="/score-converter">
              GMAT score converter
            </Link>{" "}
            tool.
          </p>

          <H2>Per-section scoring</H2>
          <p>
            Per-section scores on Focus run from 60 to 90, in 1-point
            increments. The old per-section scale was 6 to 51 for Quant
            and Verbal, with no per-section score for IR. The new
            60-90 range applies identically to Quant, Verbal, and DI.
          </p>
          <p>
            A common rough mapping:
          </p>
          <ul>
            <li>87+ Focus per-section ≈ 99th percentile (very high)</li>
            <li>83-86 ≈ 90th-99th percentile (excellent)</li>
            <li>78-82 ≈ 75th-90th percentile (strong)</li>
            <li>73-77 ≈ 50th-75th percentile (mid-range)</li>
            <li>68-72 ≈ 25th-50th percentile (entry level for top schools)</li>
          </ul>
          <p>
            Per-section percentiles for Focus aren&apos;t identical to
            the old test&apos;s percentiles &mdash; the population taking
            the test is different, the scale is different, and GMAC
            recalibrates over time. Use the table above as a rough
            anchor; check current percentiles on your actual score
            report for the official number.
          </p>

          <Pull>
            The Total Score percentile is what admissions actually
            looks at. The 60-90 per-section scores are useful for
            studying, but a 705 Focus is a 705 Focus regardless of how
            it splits across the three sections.
          </Pull>

          <H2>How to translate old GMAT prep into Focus prep</H2>
          <p>
            If you have old prep materials &mdash; books, courses,
            question banks &mdash; here&apos;s the rough mapping:
          </p>

          <H3>Old Quant material</H3>
          <p>
            <Strong>Mostly still useful.</Strong> Problem Solving content
            transfers directly. Data Sufficiency content also transfers
            but practice it as part of DI, not Quant. Pacing practice
            should be re-done at the new 45-minute, 21-question budget.
          </p>

          <H3>Old Verbal material</H3>
          <p>
            <Strong>Sentence Correction:</Strong> stop using it. Time
            spent here is wasted now.
          </p>
          <p>
            <Strong>RC and CR:</Strong> still fully relevant. The
            question types and the underlying reasoning are unchanged.
            Re-pace at the new 45-minute, 23-question budget.
          </p>

          <H3>Old Integrated Reasoning material</H3>
          <p>
            <Strong>Useful for the format,</Strong> but the section now
            includes Data Sufficiency. If your old IR material covers
            MSR / TA / GI / TPA, that&apos;s still relevant. You&apos;ll
            need new DS material to fill out the section.
          </p>

          <H3>Old AWA prep</H3>
          <p>
            <Strong>Discard.</Strong> No essay on Focus.
          </p>

          <H2>Pacing: the single biggest practical change</H2>
          <p>
            Old test pacing was easier to bluff. The longer sections gave
            you slack to recover from a slow start. Focus removed that
            slack. Three sections of 45 minutes each leaves no room for
            getting bogged down on any single question. The bookmark /
            review feature partially compensates &mdash; you can now flag
            three questions per section to revisit &mdash; but the
            per-question budget is tighter than it looks on paper.
          </p>
          <p>
            Practice rules I&apos;d adopt:
          </p>
          <ol>
            <li>
              <Strong>Per-question soft caps.</Strong> 2:00 for Quant,
              1:55 for Verbal, 2:15 for DI. If you cross the cap and
              you&apos;re not 80% of the way through, flag and move on.
            </li>
            <li>
              <Strong>Bookmark strategically.</Strong> Save your three
              flags for the questions where you have a 50/50 between two
              answers. Don&apos;t flag questions you have no idea on.
            </li>
            <li>
              <Strong>Time individual sections in practice.</Strong> Full
              45-minute timed sets, not untimed sets followed by review.
              Pacing is the part of the skill that doesn&apos;t transfer
              from old prep.
            </li>
          </ol>

          <H2>Section order: choose Quant first if you can</H2>
          <p>
            You can take the three sections in any order. The choice
            isn&apos;t obvious, and there&apos;s real strategy in it.
            For most students, the rough advice is:
          </p>
          <ul>
            <li>
              <Strong>Quant first:</Strong> if you find Quant the most
              demanding section, do it when you&apos;re fresh.
            </li>
            <li>
              <Strong>DI second:</Strong> the format-heavy section in the
              middle gives your reading-stamina muscles a rest.
            </li>
            <li>
              <Strong>Verbal third:</Strong> for most students Verbal is
              less mentally taxing per question and benefits less from
              freshness.
            </li>
          </ul>
          <p>
            Test this in practice mocks. The right order is the one that
            produces your highest combined score across multiple mocks
            &mdash; not the order any guide tells you.
          </p>

          <H2>The short version</H2>
          <p>
            Focus is shorter (2:15 vs 3:07), removed Sentence
            Correction and the AWA essay, moved Data Sufficiency into a
            new Data Insights section that now counts toward your Total
            Score, and uses a 205-805 scoring scale that doesn&apos;t
            map arithmetically to the old 200-800. Most old prep
            content is still useful &mdash; remove SC and AWA, re-pace
            everything to the tighter section budgets, treat DI as a
            real section. The pacing change is the one that gets
            underestimated. Practice timed full sections from week one.
          </p>

          <H2>The platform</H2>
          <p>
            Zakarian GMAT was built for the Focus Edition specifically.
            All content targets the current section structure, the
            scoring scale is 205-805 throughout, and the diagnostic
            uses the new 60-90 per-section ranges. If you&apos;re moving
            from old prep to Focus prep, the diagnostic will tell you in
            30 questions which of your old skills carried over and
            which need re-targeting.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/score-converter"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-[13px] font-semibold transition-transform duration-200 hover:-translate-y-0.5"
              style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
            >
              <Calculator className="w-3.5 h-3.5" />
              Use the score converter
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/free-diagnostic"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-[13px] font-semibold border transition-colors"
              style={{
                borderColor: "rgba(255,255,255,0.10)",
                color: "#C0C0C0",
              }}
            >
              Take the Focus diagnostic
            </Link>
          </div>
        </div>
        <RelatedPosts currentSlug="gmat-focus-vs-old-gmat-whats-changed" />
      </article>
      <style>{`
        .prose-zk { color: #C0C0C0; font-size: 17px; line-height: 1.75; }
        .prose-zk p { color: #C0C0C0; }
        .prose-zk strong { color: #F0F0F0; font-weight: 600; }
        .prose-zk em { color: #E8E8E8; font-style: italic; }
        .prose-zk ol, .prose-zk ul { padding-left: 22px; }
        .prose-zk ol > li, .prose-zk ul > li { margin-bottom: 8px; }
        .prose-zk a { color: #C9A84C; text-decoration: underline; }
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
