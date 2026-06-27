import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import SectionWrapper from "@/components/shared/SectionWrapper"
import ScoreTimeline from "@/components/marketing/ScoreTimeline"
import Breadcrumbs from "@/components/seo/Breadcrumbs"

export const metadata: Metadata = {
  title: "About",
  description:
    "The founder narrative behind Zakarian GMAT. How Adam went from 565 to 735 (100th percentile) on the GMAT Focus Edition as a non-native English speaker — and the system that came out of it.",
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
            I&apos;m Adam Zakarian. My first GMAT diagnostic came back 565 —
            56th percentile. I&apos;m not a native English speaker. Eight
            months later I scored 735 — 100th percentile — on the GMAT
            Focus Edition. This is how.
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
                  started studying in April 2025. My very first practice
                exam, taken cold before any structured prep, was a major
                reality check: 565. Q78, V79, DI77. 56th percentile.
                I had some foundational knowledge, but no real structure
                and no depth.
              </p>
              <p>
                I spent a few days on review forums reading honest
                accounts of how other people had moved their scores.
                The pattern was consistent &mdash; pick a structured
                curriculum, follow its plan, build the error-review
                habit early. I picked one and went to work.
              </p>
              <p>
                April through end of May was the initial push.
                Foundational Quant. Daily problem sets. Even in that
                short window I noticed a real shift in how I approached
                problems &mdash; conceptual clarity over shortcuts,
                structure over guesswork. Then life intervened and I had
                to step away for the summer.
              </p>
              <p>
                I resumed at the end of August. From that point until
                early November I studied every single day, 4&ndash;5
                hours a day. The structure removed the daily decision of
                what to do next &mdash; I always knew the topic, the
                set, the review. Even on days when productivity felt
                low, I still showed up and followed the plan. That
                discipline was the entire thing.
              </p>
              <p>
                In early November I sat for my first official GMAT Focus
                exam.{" "}
                <span className="font-display-italic text-[#F0F0F0]">
                  675. Q86, V85, DI80. 95th percentile.
                </span>{" "}
                A strong improvement, but it felt underwhelming. My
                practice tests had been ranging 675&ndash;725 and I&apos;d
                expected to land closer to the top. The official came
                in at the floor of that range.
              </p>
              <p>
                After the first attempt I had to pull away from GMAT
                prep for about a month for school exams. When I came
                back to the test, I signed up for another exam in
                December &mdash; with only five days&apos; notice.
                Three to four of those days I spent on review only.
                Past mistakes. No new material. Reactivating what I
                already knew, sharpening execution.
              </p>
              <p>
                Test day at the test center was smooth and calm. The
                official felt very similar to my practice sets, which
                kept me composed and helped me manage time. I was
                genuinely shocked when the score came up:{" "}
                <span className="font-display font-semibold" style={{ color: "#C9A84C" }}>
                  735.
                </span>{" "}
                Q88, V86, DI85. 100th percentile.
              </p>
              <p>
                The arc wasn&apos;t linear. The biggest gain &mdash;
                from 675 to 735 &mdash; came from five days of focused
                mistake review, not from new content. Once the
                fundamentals were in, the lever was honest analysis of
                where I was still losing points and disciplined
                reactivation of what I already knew.
              </p>
              <p>
                Zakarian GMAT is that loop, rebuilt as a single
                platform. A structured chapter sequence so you always
                know what&apos;s next. A built-in error log that tracks
                root causes alongside topic and difficulty. An adaptive
                study plan that re-prioritises against the log every
                week. A spaced review queue that resurfaces past
                misses on the schedule that makes them stick. Coaching
                for a second set of eyes; the platform alone is the
                loop you can run by yourself.
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
            {/* ScoreReportProof is intentionally not rendered: there is no
                redacted score-report image yet, so referencing the missing
                /score-report.png would mean a 404 image request and an
                unsupported "verified score report" caption in production. To
                re-enable, add the redacted PNG at public/score-report.png and
                restore the import + `<ScoreReportProof />` here. */}
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
              <Strong>Consistency beats everything.</Strong> Show up
              every day. On the days when productivity feels low, follow
              the plan anyway. The compound effect of daily reps is the
              actual lever, not any single heroic study session.
            </p>
            <p>
              <Strong>Progress isn&apos;t linear.</Strong> The biggest
              jump on my arc &mdash; 675 to 735 &mdash; came from five
              days of focused mistake review, not from new content.
              Don&apos;t extrapolate from a flat month and don&apos;t
              celebrate a peak month either. The slope changes when
              the right inputs land.
            </p>
            <p>
              <Strong>Mocks calibrate, they don&apos;t promise.</Strong>
              My practice tests ranged 675&ndash;725. My first official
              came in at 675 &mdash; the floor of that range. Use
              mocks to find weaknesses, not to predict your number.
              A great mock is a hypothesis, not a guarantee.
            </p>
            <p>
              <Strong>After fundamentals, review beats more
              material.</Strong> By the second official, the content
              was already in. The five-day window I had between the
              two attempts was spent entirely on past mistakes &mdash;
              no new chapters, no new question banks. That is what
              moved the score 60 points.
            </p>
            <p>
              <Strong>A real break can sharpen you.</Strong> I lost
              the summer mid-prep and a month before the second
              official. Each time I came back clearer, not duller.
              Forced rest beat forced practice when I was over the
              edge.
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
            Most GMAT prep is sold by people who scored well on their first
            try. They teach to their own strengths. That&apos;s not useful
            for the student starting cold at 50th percentile, with a lot of
            ground to cover and limited time.
          </p>
          <p className="text-[16px] text-[#C0C0C0] leading-relaxed">
            I built this for the student who knows they need a structured
            plan, an honest error log, and a way to compound daily effort
            into real score gains. That&apos;s the path I took. This is
            the system I wish I&apos;d had access to from day one.
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
            Free to start. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
              style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
            >
              Start Free
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
