import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle, ArrowRight } from "lucide-react"
import SectionWrapper from "@/components/shared/SectionWrapper"
import ScoreTimeline from "@/components/marketing/ScoreTimeline"

export const metadata: Metadata = {
  title: "About — Zakarian GMAT",
  description: "The story behind the score. Adam Zakarian, 565 → 735.",
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
      {/* Hero */}
      <SectionWrapper>
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#C9A84C" }}
          >
            About
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#F0F0F0] mb-6">
            The story behind the score.
          </h1>
          <p className="text-lg text-[#888888] leading-relaxed">
            I'm Adam Zakarian. I scored 565 on my first GMAT. I'm not a native English speaker.
            I have no engineering background. And I hit 735 — 100th percentile — eight months
            later. This is how.
          </p>
        </div>
      </SectionWrapper>

      {/* Story + Timeline */}
      <SectionWrapper variant="darker">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-2xl font-bold text-[#F0F0F0] mb-6">
              What actually happened
            </h2>
            <div className="space-y-5 text-[#888888] leading-relaxed text-sm">
              <p>
                When I got my 565, I did what everyone does — I panicked and bought the most
                popular course. I watched videos, did hundreds of practice problems, and felt
                like I was making progress. I wasn't. My score barely moved.
              </p>
              <p>
                The problem wasn't effort. I was working hard. The problem was that I was
                practicing without reviewing. I'd get a question wrong, check the answer, and
                move on. Three weeks later I'd get the same type of question wrong again.
              </p>
              <p>
                Everything changed when I started treating every wrong answer as data.{" "}
                <span className="text-[#F0F0F0]">
                  I built a manual error log in a spreadsheet.
                </span>{" "}
                I categorized every mistake — was it conceptual? Careless? Time pressure?
                Misread? Over two months, a clear pattern emerged: I was making the same
                five types of errors, repeatedly, across totally different question types.
              </p>
              <p>
                Once I addressed those root patterns instead of random question types, my
                accuracy jumped. My mock scores jumped. And on exam day, I hit 735.
              </p>
              <p>
                This platform is the exact system I built, rebuilt as a proper product.
                The error log is built in. The analytics are automated. The coaching is
                available if you want a second set of eyes on your patterns.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#F0F0F0] mb-6">Journey timeline</h2>
            <ScoreTimeline />
          </div>
        </div>
      </SectionWrapper>

      {/* Mission */}
      <SectionWrapper>
        <div className="max-w-2xl mx-auto text-center">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#C9A84C" }}
          >
            Mission
          </p>
          <h2 className="text-3xl font-bold text-[#F0F0F0] mb-6">
            Why I built this
          </h2>
          <p className="text-[#888888] leading-relaxed mb-6">
            Most GMAT prep companies are built by MBAs who scored 760 on their first try and
            never had to struggle. They teach to their strengths. That's not useful for most
            people.
          </p>
          <p className="text-[#888888] leading-relaxed">
            I built this for the student who has been grinding for months and isn't moving.
            For the non-native speaker who feels like Verbal is a wall they can't climb.
            For the non-engineer who thinks Quant is impossible. I was all three of those
            people. This is the system I wish I had.
          </p>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper variant="darker">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#F0F0F0]">What this platform stands for</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <div
              key={value.title}
              className="p-6 rounded-xl border border-white/[0.08] bg-[#111111]"
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: "rgba(201,168,76,0.1)" }}
              >
                <CheckCircle className="w-4 h-4" style={{ color: "#C9A84C" }} />
              </div>
              <h3 className="text-sm font-semibold text-[#F0F0F0] mb-2">{value.title}</h3>
              <p className="text-xs text-[#888888] leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#F0F0F0] mb-4">
            Ready to try a different approach?
          </h2>
          <p className="text-[#888888] mb-8">
            Start with a free trial. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold transition-all hover:opacity-90"
              style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
            >
              Start Free Trial
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold border border-white/[0.12] text-[#F0F0F0] hover:bg-white/5 transition-all"
            >
              Book a Free Call
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
