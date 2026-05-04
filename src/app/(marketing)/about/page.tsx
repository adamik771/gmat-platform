import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import SectionWrapper from "@/components/shared/SectionWrapper"
import ScoreTimeline from "@/components/marketing/ScoreTimeline"
import Breadcrumbs from "@/components/seo/Breadcrumbs"

export const metadata: Metadata = {
  title: "About",
  description:
    "The full founder narrative behind Zakarian GMAT. How Adam went from 565 to 735 in 8 months as a non-native English speaker with no engineering background — and the system that came out of it.",
  alternates: { canonical: "/about" },
}

function Strong({ children }: { children: React.ReactNode }) {
  return <strong className="text-[#F0F0F0] font-semibold">{children}</strong>
}

const values = [
  {
    title: "Consistency",
    description:
      "Every 10-point improvement comes from showing up every day — not cramming the week before.",
  },
  {
    title: "Mastery",
    description:
      "Don't move on until you understand. Covering more ground slower beats skimming faster every time.",
  },
  {
    title: "Honesty",
    description:
      "Your error log doesn't lie. The most uncomfortable patterns are the most important ones to face.",
  },
  {
    title: "Structure",
    description:
      "Willpower runs out. Systems don't. The study plan removes the daily decision of what to do next.",
  },
]

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: "#0A0A0A" }}>
      <div className="max-w-3xl mx-auto pt-24 px-4 sm:px-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
          ]}
        />
      </div>
      {/* Hero */}
      <section className="relative pt-8 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 90% 55% at 50% -5%, rgba(201,168,76,0.16) 0%, transparent 60%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 pointer-events-none bg-grain opacity-[0.035] mix-blend-overlay"
          aria-hidden
        />
        <div className="relative max-w-3xl mx-auto text-center px-4">
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-5"
            style={{ color: "#C9A84C" }}
          >
            About
          </p>
          <h1 className="font-display text-4xl sm:text-6xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.02] mb-6">
            The story behind the{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              score.
            </span>
          </h1>
          <p className="text-[17px] sm:text-[18px] text-[#C0C0C0] leading-relaxed max-w-2xl mx-auto">
            I&apos;m Adam Zakarian. I scored 565 on my first GMAT. I&apos;m not a native
            English speaker. I have no engineering background. And I hit 735 — 100th
            percentile — eight months later. This is how.
          </p>
        </div>
      </section>

      {/* Story + Timeline */}
      <SectionWrapper variant="darker">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-3" style={{ color: "#C9A84C" }}>
              The story
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05] mb-8">
              What actually happened
            </h2>
            <div className="space-y-5 text-[15px] text-[#C0C0C0] leading-[1.75]">
              <p>
                <span className="font-display text-5xl font-semibold float-left leading-none mt-1 mr-3" style={{ color: "#C9A84C" }}>I</span>
                  was 26, working full time at a consulting firm in Yerevan, and the
                first time I sat for the GMAT I scored 565. I&apos;d been studying
                for three months, doing what every guide tells you to do &mdash;
                work through chapters, do practice sets, take mocks, repeat. I
                was averaging two hours a day. I felt like I was getting better.
                I wasn&apos;t.
              </p>
              <p>
                The 565 was a body blow. I&apos;d been targeting M7 schools.
                Median GMAT at HBS / Stanford / Wharton was 730+ at the time.
                The gap between where I was and where I needed to be was
                roughly 170 points &mdash; and the prep cycle I&apos;d just
                completed had moved me 15 points off my untested baseline.
                At that pace, I was on track to hit 730 around 2032.
              </p>
              <p>
                I did what everyone does. I panicked and bought a more
                expensive course. Watched more videos. Did more questions.
                After eight more weeks of this, my mock scores had moved
                another 10 points. The course was thorough. The instructors
                were competent. None of it was the problem.
              </p>
              <p>
                The problem &mdash; and this took me three months to actually
                understand &mdash; was that I was practising without
                reviewing. I&apos;d get a question wrong, read the
                explanation, nod, and move on. Three weeks later, I&apos;d
                miss the same question type again. I&apos;d read the same
                explanation again. I&apos;d nod again. The content went in
                and out without ever leaving a mark on what I&apos;d do
                differently next time.
              </p>
              <p>
                The shift came in month four. I built a spreadsheet.{" "}
                <span className="font-display-italic text-[#F0F0F0]">
                  Six columns: question source, section, what I got
                  wrong, why, fix, retest.
                </span>{" "}
                Six tags for the &ldquo;why&rdquo; column: Conceptual,
                Careless, Time pressure, Misread, Strategy, Other. One
                row per missed question. No exceptions.
              </p>
              <p>
                For the first two weeks I just logged. No drilling, no
                re-attempts, no plan. Just every miss into the
                spreadsheet, with five fields filled in honestly.
              </p>
              <p>
                At week three I sorted the log. The pattern was almost
                embarrassing. Out of 140 missed questions, more than half
                were three things: inequality sign-flips on Algebra, CR
                Assumption questions where I&apos;d eliminate the right
                answer because it &ldquo;felt too broad,&rdquo; and DI
                Table-Analysis questions where I tried to compute exact
                values instead of comparisons. Three patterns. Across
                hundreds of questions. The content was never the problem.
              </p>
              <p>
                I built a study loop around the log. Drill 20 questions on
                a target topic, log every miss with the five fields, end
                the week reviewing the log and doing a 30-question
                targeted set on whatever pattern dominated. Re-test
                flagged questions a week later. From 565 in October to
                645 in late January. 695 in March. 735 in May.{" "}
                <span className="font-display font-semibold" style={{ color: "#C9A84C" }}>
                  735.
                </span>{" "}
                100th percentile. Eight months from the worst day of my
                prep cycle.
              </p>
              <p>
                The slope wasn&apos;t linear &mdash; most of the climb
                happened once the log had eight to ten weeks of data and
                the patterns were visible. Below that threshold,
                you don&apos;t have enough signal to act on. The
                discipline was in logging through the noise until the
                signal showed up.
              </p>
              <p>
                Zakarian GMAT is the spreadsheet, rebuilt as a real
                product. The error log is built in with the same six tags.
                The analytics surface the patterns automatically &mdash;
                you don&apos;t have to remember to sort. The adaptive
                study plan re-prioritises every week based on the log&apos;s
                latest data. The spaced review queue resurfaces past
                misses on the schedule that actually makes them stick.
                Coaching is available for a second set of eyes on your
                patterns; the platform alone is the loop you can run by
                yourself.
              </p>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-3" style={{ color: "#C9A84C" }}>
              Journey
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05] mb-8">
              From 565 to 735
            </h2>
            <ScoreTimeline />
          </div>
        </div>
      </SectionWrapper>

      {/* What I'd tell my past self */}
      <SectionWrapper>
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-3" style={{ color: "#C9A84C" }}>
            Hindsight
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05] mb-8">
            What I&apos;d tell my past self
          </h2>
          <div className="space-y-5 text-[15px] text-[#C0C0C0] leading-[1.75]">
            <p>
              <Strong>The error log was the unlock.</Strong> Everything
              else I did was downstream of it. If I&apos;d started logging
              in week one instead of month four, the prep cycle would have
              been three months shorter.
            </p>
            <p>
              <Strong>Don&apos;t over-buy content.</Strong> By the time I
              hit 565 I&apos;d already covered every Quant topic in the
              standard curriculum twice. The gap was patterns, not
              content. More course material would not have helped.
            </p>
            <p>
              <Strong>Stop practising untimed past week two.</Strong>
              Untimed practice teaches the wrong instincts. You finish
              questions in 3:30 and feel competent, then crater on the
              timed mock. Train against the clock from day one.
            </p>
            <p>
              <Strong>The non-native disadvantage is narrower than it
              looks.</Strong> The standard advice (&ldquo;Verbal is
              easier for native speakers&rdquo;) is wrong in the
              important way. The real disadvantage is comprehension
              <em> speed</em>, not comprehension. The structural-skim
              approach on RC and stem-first reading on CR closed most
              of my Verbal gap in three months.
            </p>
            <p>
              <Strong>One full rest day per week is non-negotiable.</Strong>
              I tried seven-day-a-week prep for four weeks. Burned out
              on week five. Lost two weeks of recovery. Net negative.
              Sunday off, every week.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Mission */}
      <SectionWrapper>
        <div className="max-w-2xl mx-auto text-center">
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-4"
            style={{ color: "#C9A84C" }}
          >
            Mission
          </p>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05] mb-8">
            Why I built{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              this.
            </span>
          </h2>
          <p className="text-[16px] text-[#C0C0C0] leading-relaxed mb-5">
            Most GMAT prep companies are built by MBAs who scored 760 on their first try and
            never had to struggle. They teach to their strengths. That&apos;s not useful for most
            people.
          </p>
          <p className="text-[16px] text-[#C0C0C0] leading-relaxed">
            I built this for the student who has been grinding for months and isn&apos;t moving.
            For the non-native speaker who feels like Verbal is a wall they can&apos;t climb.
            For the non-engineer who thinks Quant is impossible. I was all three of those
            people. This is the system I wish I had.
          </p>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper variant="darker">
        <div className="text-center mb-14">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-3" style={{ color: "#C9A84C" }}>
            Principles
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05]">
            What this platform stands for
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, i) => (
            <div
              key={value.title}
              className="group relative p-6 rounded-2xl border border-white/[0.08] bg-[#111111] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.16] hover:bg-[#141414] hover:shadow-[0_10px_40px_-12px_rgba(201,168,76,0.15)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="font-display text-[11px] font-semibold tabular-nums"
                  style={{ color: "rgba(201,168,76,0.55)" }}
                  aria-hidden
                >
                  0{i + 1}
                </span>
                <div
                  className="h-px flex-1"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(201,168,76,0.3), transparent)",
                  }}
                  aria-hidden
                />
              </div>
              <h3 className="font-display text-lg font-semibold text-[#F0F0F0] mb-2 tracking-tight">
                {value.title}
              </h3>
              <p className="text-[13px] text-[#888888] leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="relative py-28 overflow-hidden" style={{ backgroundColor: "#0A0A0A" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 70% at 50% 100%, rgba(201,168,76,0.14) 0%, transparent 65%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 pointer-events-none bg-grain opacity-[0.03] mix-blend-overlay"
          aria-hidden
        />
        <div className="relative max-w-3xl mx-auto text-center px-4">
          <h2 className="font-display text-3xl sm:text-5xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05] mb-5">
            Ready to try a{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              different
            </span>{" "}
            approach?
          </h2>
          <p className="text-[15px] sm:text-[17px] text-[#888888] leading-relaxed mb-10">
            Start with a free trial. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
              style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
            >
              Start Free Trial
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold border border-white/[0.12] text-[#C0C0C0] hover:border-white/[0.2] hover:text-[#F0F0F0] transition-all duration-200"
            >
              Book a Free Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
