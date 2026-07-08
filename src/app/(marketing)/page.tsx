import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  BookOpen,
  BarChart3,
  Users,
  Brain,
  Clock,
  Globe,
  TrendingUp,
  ChevronDown,
  CheckCircle,
  Flame,
} from "lucide-react"
import SectionWrapper from "@/components/shared/SectionWrapper"
import FeatureCard from "@/components/marketing/FeatureCard"
import FAQAccordion from "@/components/marketing/FAQAccordion"
import HeroDashboardCard from "@/components/marketing/HeroDashboardCardLazy"
import ScoreCalloutNumbers from "@/components/marketing/ScoreCalloutNumbers"
import LeadCapture from "@/components/marketing/LeadCapture"
import FoundingOffer from "@/components/marketing/FoundingOffer"
import TrackView from "@/components/analytics/TrackView"
import { QUESTION_CLAIM } from "@/lib/site"
import { PAYWALL_ENABLED, TRIAL_DAYS } from "@/lib/entitlements"

// Self-referencing canonical + the homepage's shared-link card (moved here
// from the root layout so other pages inherit their own og text instead of
// all sharing the homepage's).
export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: "Zakarian GMAT — From 565 to 735, On Your Terms",
    description:
      "The structured GMAT prep system that took Adam from 565 to 735. Baseline-driven, mistake-driven, score-anchored — built for ambitious MBA candidates.",
  },
  twitter: {
    title: "Zakarian GMAT — From 565 to 735, On Your Terms",
    description:
      "The structured GMAT prep system that took Adam from 565 to 735.",
  },
}

// The guided path's five phases — mirrors the /course curriculum section
// and the real chapter order (CHAPTER_PATH_ORDER).
const modules = [
  { num: "01", title: "Foundations First", desc: "Arithmetic and section fundamentals — eased in, even with a weak math background." },
  { num: "02", title: "The Strategy Toolkit", desc: "Backsolving, plugging in, estimation — turn algebra into arithmetic." },
  { num: "03", title: "Core Topics in Rotation", desc: "Quant, Verbal, and Data Insights built in parallel — not months apart." },
  { num: "04", title: "Advanced Ground & Traps", desc: "Counting, probability, boldface, answer traps — the 645-to-705 layer." },
  { num: "05", title: "Timing & Mixed Pressure", desc: "Pacing frameworks and mixed sets under real exam conditions." },
]

const pillars = [
  {
    icon: Brain,
    title: "Mistake-Based Learning",
    description:
      "Analyze why you got it wrong, not just that you did. The error log turns every mistake into a data point.",
  },
  {
    icon: Clock,
    title: "Daily Consistency System",
    description:
      "Built for busy schedules. 90-minute structured sessions that fit around work and life.",
  },
  {
    icon: Globe,
    title: "Non-Native Advantage",
    description:
      "Built by someone who scored 735 without English as a first language. Verbal isn't a barrier — it's a skill.",
  },
  {
    icon: TrendingUp,
    title: "Built on a Real Jump",
    description:
      "A verified founder jump from 565 to 735 (+170 points). Real student results coming soon — no averages until they're verified.",
  },
]

const faqItems = [
  {
    question: "Who is this course for?",
    answer:
      "This system is built for ambitious MBA candidates who want a structured, data-driven approach — not a pile of videos to wade through. It's especially effective for non-native English speakers and non-technical backgrounds.",
  },
  {
    question: "Do I need a strong math background?",
    answer:
      "No. Adam himself has no engineering background. The Quant curriculum starts from first principles and builds systematically. The issue is almost never knowledge — it's strategy.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "It depends on your starting point and how consistently you study — we don't promise a timeline or a score. The system is built to surface your weak areas fast, so your study time is targeted from day one instead of spent guessing.",
  },
  {
    question: "What if I've already tried other courses?",
    answer:
      "Many students come to this system after TTP, Manhattan, or Magoosh. The difference is the review layer — the error log, the debrief frameworks, and the consistency system. Most prep is content-heavy. This system focuses on what you do with mistakes.",
  },
  {
    question: "Is there a refund policy?",
    answer:
      "Yes — a 14-day money-back guarantee on both self-study plans, no questions asked, and it isn't tied to your exam result, because no honest prep can promise a specific score. Coaching and Intensive are refundable in full before your first session; the full conditions for each plan are on our Refund Policy page.",
  },
]

export default function HomePage() {
  return (
    <div style={{ backgroundColor: "#0A0A0A" }}>
      {/* Fires landing_view on mount — top of the passive funnel. */}
      <TrackView event="landing_view" />
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Atmospheric depth layers */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 90% 60% at 50% -5%, rgba(201,168,76,0.18) 0%, transparent 55%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 80% 20%, rgba(201,168,76,0.06) 0%, transparent 60%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, #0A0A0A 100%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 pointer-events-none bg-grain opacity-[0.035] mix-blend-overlay"
          aria-hidden
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <div>
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium mb-8"
                style={{
                  borderColor: "rgba(201,168,76,0.3)",
                  backgroundColor: "rgba(201,168,76,0.06)",
                  color: "#C9A84C",
                }}
              >
                <Flame className="w-3 h-3" />
                565 → 735 · 100th Percentile
              </div>

              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-[-0.02em] mb-6">
                <span className="text-[#F0F0F0]">Master the </span>
                <span className="font-display-italic" style={{ color: "#C9A84C" }}>GMAT.</span>
                <br />
                <span className="text-[#F0F0F0]">On Your Terms.</span>
              </h1>

              <p className="text-lg text-[#888888] leading-relaxed mb-8 max-w-lg">
                The structured prep system that took Adam from 565 to 735 — built for
                ambitious students who don&apos;t have time for guesswork.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 mb-3">
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
                  style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
                >
                  Start Free
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/course"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold border border-white/[0.12] text-[#F0F0F0] hover:bg-white/5 transition-all duration-200"
                >
                  See How It Works
                  <ChevronDown className="w-4 h-4" />
                </Link>
              </div>
              {/* This subtext is gated on PAYWALL_ENABLED. While off, it renders
                  the beta copy byte-for-byte. When the paywall lands, the paid
                  branch takes over and must describe the REAL model
                  (entitlements.ts + proxy.ts): a TRIAL_DAYS full-access trial,
                  then a one-time plan purchase unlocks the plan's access
                  window — there is no permanent free tier. */}
              <p className="text-xs text-[#888888] mb-2">
                {PAYWALL_ENABLED
                  ? `Free to sign up — no credit card. Every new account starts a ${TRIAL_DAYS}-day full-access trial; after that, a one-time plan purchase (no subscription) unlocks your plan's access window, with a 14-day money-back guarantee on the self-study plans.`
                  : "Free while we're in beta — no credit card. Full access to every chapter, the full question bank, mock exams and review."}
              </p>
              <p className="text-xs mb-10">
                <Link
                  href="/sample-chapter"
                  className="hover:underline transition-opacity hover:opacity-80"
                  style={{ color: "#C9A84C" }}
                >
                  Or read a sample chapter first
                </Link>
                <span className="text-[#555555]"> — no signup required.</span>
              </p>

              {/* Score proof chips */}
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "565 Starting Score", color: "#888888", bg: "rgba(136,136,136,0.08)" },
                  { label: "→", color: "#555555", bg: "transparent" },
                  { label: "735 Final Score", color: "#C9A84C", bg: "rgba(201,168,76,0.1)" },
                  { label: "→", color: "#555555", bg: "transparent" },
                  { label: "100th Percentile", color: "#3ECF8E", bg: "rgba(62,207,142,0.1)" },
                ].map((chip, i) => (
                  <span
                    key={i}
                    className={
                      chip.bg !== "transparent"
                        ? "px-3 py-1.5 rounded-lg text-xs font-semibold border border-white/[0.06]"
                        : "px-1 text-sm font-bold"
                    }
                    style={{ color: chip.color, backgroundColor: chip.bg !== "transparent" ? chip.bg : undefined }}
                  >
                    {chip.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Mock dashboard card */}
            <div className="hidden lg:flex justify-center">
              <HeroDashboardCard />
            </div>
          </div>
        </div>
      </section>

      {/* CREDIBILITY STRIP */}
      <div
        className="border-y border-white/[0.06] py-5"
        style={{ backgroundColor: "#0D0D0D" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#555555]">
            <span>Built for MBA candidates targeting</span>
            {[
              "Harvard GSB",
              "Wharton",
              "Booth",
              "Columbia",
              "Kellogg",
            ].map((name) => (
              <span
                key={name}
                className="px-3 py-1 rounded-full border border-white/[0.06] text-[#444444]"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* PRODUCT OVERVIEW */}
      <SectionWrapper>
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-5xl font-semibold text-[#F0F0F0] mb-4 tracking-[-0.02em] leading-[1.05]">
            Everything you need to hit 655+
          </h2>
          <p className="text-[#888888] max-w-xl mx-auto">
            Not a pile of videos. A complete system — structured curriculum, smart
            analytics, and expert coaching in one place.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            icon={BookOpen}
            title="Structured Curriculum"
            description="One guided path through 50+ chapters, built around how the GMAT actually tests you — not how you think it does."
          />
          <FeatureCard
            icon={BarChart3}
            title="Smart Analytics"
            description="Track every question, every mistake, every trend. Know your score before exam day."
          />
          <FeatureCard
            icon={Users}
            title="Expert Coaching"
            description="Weekly 1:1 sessions with Adam. Not an outsourced tutor — the person who built the system."
          />
        </div>
      </SectionWrapper>

      {/* WHY IT WORKS */}
      <SectionWrapper variant="darker">
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#C9A84C" }}
          >
            Why It Works
          </p>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold text-[#F0F0F0] mb-4 tracking-[-0.02em] leading-[1.05]">
            Four pillars of real score improvement
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <FeatureCard
              key={pillar.title}
              icon={pillar.icon}
              title={pillar.title}
              description={pillar.description}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* COURSE STRUCTURE PREVIEW */}
      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#C9A84C" }}
            >
              Curriculum
            </p>
            <h2 className="font-display text-3xl sm:text-5xl font-semibold text-[#F0F0F0] mb-4 tracking-[-0.02em] leading-[1.05]">
              One guided path. Five phases.
            </h2>
            <p className="text-[#888888]">
              Each chapter builds on the last. No random video library — a real progression.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {modules.map((mod) => (
              <div
                key={mod.num}
                className="flex items-start gap-4 p-4 rounded-xl border border-white/[0.06] bg-[#0F0F0F] hover:border-white/[0.12] transition-colors"
              >
                <span
                  className="text-xs font-bold flex-shrink-0 mt-0.5"
                  style={{ color: "#C9A84C" }}
                >
                  {mod.num}
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#F0F0F0]">{mod.title}</p>
                  <p className="text-xs text-[#888888] mt-0.5">{mod.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/course"
              className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
              style={{ color: "#C9A84C" }}
            >
              See full curriculum breakdown
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* RESULTS */}
      <SectionWrapper variant="darker" id="results">
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#C9A84C" }}
          >
            Results
          </p>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold text-[#F0F0F0] mb-6 tracking-[-0.02em] leading-[1.05]">
            The numbers speak for themselves.
          </h2>

          {/* Score display — the founder's own verified result. Student
              testimonials were removed: the product has no real students yet,
              so invented named testimonials were a false-advertising risk.
              Re-add a TestimonialCard grid here once real, attributable
              results exist. */}
          <ScoreCalloutNumbers start={565} delta={170} end={735} />
        </div>
      </SectionWrapper>

      {/* FOUNDER */}
      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#C9A84C" }}
            >
              The Founder
            </p>
            <h2 className="font-display text-3xl sm:text-5xl font-semibold text-[#F0F0F0] mb-6 tracking-[-0.02em] leading-[1.05]">
              Built by someone who solved the hard version.
            </h2>
            <p className="text-[#888888] leading-relaxed mb-6">
              I&apos;m Adam Zakarian. I scored 565 on my first attempt. I&apos;m not a native English
              speaker. I don&apos;t have an engineering background. I built this prep system
              by obsessively studying what actually moves the needle — and ignoring everything
              that doesn&apos;t.
            </p>
            <p className="text-[#888888] leading-relaxed mb-8">
              In 8 months, I went from 565 to 735 — 100th percentile. This platform is the
              exact system I built for myself, packaged for every ambitious student facing the
              same obstacles I did.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                { label: "Scored 100th Percentile", color: "#C9A84C" },
                { label: "Non-Native Speaker", color: "#3ECF8E" },
                { label: "Non-Technical Background", color: "#888888" },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/[0.08] bg-white/[0.03]"
                >
                  <CheckCircle className="w-3.5 h-3.5" style={{ color: badge.color }} />
                  <span className="text-xs font-medium text-[#C0C0C0]">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Founder avatar. The styled "AZ" initials are the shipped avatar.
              The previous next/image of /founder.jpg returned a 400 (the file
              doesn't exist), painting a broken-image glyph over the initials —
              and a server component can't onError-fallback. To restore a real
              photo: drop a square crop (~512x512) at public/founder.jpg and
              re-add a next/image overlay here. */}
          <div className="flex justify-center">
            <div className="relative">
              <div
                className="relative w-64 h-64 rounded-full border-2 overflow-hidden flex items-center justify-center"
                style={{
                  borderColor: "#C9A84C",
                  backgroundColor: "rgba(201,168,76,0.05)",
                  boxShadow: "0 0 60px rgba(201,168,76,0.15)",
                }}
              >
                <span
                  aria-hidden
                  className="flex items-center justify-center text-6xl font-bold"
                  style={{ color: "#C9A84C" }}
                >
                  AZ
                </span>
              </div>
              <div
                className="absolute -bottom-2 -right-2 px-3 py-1.5 rounded-xl text-xs font-bold border"
                style={{
                  backgroundColor: "#111111",
                  borderColor: "rgba(201,168,76,0.3)",
                  color: "#C9A84C",
                }}
              >
                565 → 735
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* PRICING PREVIEW */}
      <SectionWrapper variant="darker">
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#C9A84C" }}
          >
            Pricing
          </p>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold text-[#F0F0F0] mb-4 tracking-[-0.02em] leading-[1.05]">
            Choose your path to 655+
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            {
              name: "Self-Study",
              price: "$429",
              note: "one-time",
              desc: "Full platform, 4-month access",
              features: [
                "50+ chapters — Q, V & Data Insights",
                QUESTION_CLAIM,
                "Full analytics + error log",
                "4-month platform access",
              ],
              highlighted: false,
            },
            {
              name: "Self-Study + Mentorship",
              price: "$599",
              note: "one-time",
              desc: "Everything + WhatsApp Q&A access",
              features: [
                "Everything in Self-Study",
                "WhatsApp Q&A access with Adam",
                "6-month platform access",
                "No scheduled calls required",
              ],
              highlighted: true,
              badge: "Recommended",
            },
            {
              name: "Coaching",
              price: "$2,500",
              note: "package",
              desc: "Mentorship + 8 weekly 1:1 sessions",
              features: [
                "Everything in Mentorship",
                "8 × 60-min 1:1 calls with Adam",
                "Direct support between sessions",
                "Custom per-week plan + ESR debrief",
              ],
              highlighted: false,
            },
            {
              name: "Intensive",
              price: "$4,200",
              note: "package",
              desc: "Full-service — 16 sessions",
              features: [
                "Everything in Coaching",
                "16 weekly 1:1 sessions",
                "12-month platform access",
                "Mock-by-mock tuning loop",
              ],
              highlighted: false,
            },
          ].map((plan) => (
            <div
              key={plan.name}
              className="group relative p-7 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5"
              style={{
                borderColor: plan.highlighted
                  ? "rgba(201,168,76,0.42)"
                  : "rgba(255,255,255,0.07)",
                backgroundColor: plan.highlighted ? "#131313" : "#0D0D0D",
                boxShadow: plan.highlighted
                  ? "0 0 60px rgba(201,168,76,0.1), inset 0 1px 0 rgba(255,255,255,0.05)"
                  : undefined,
              }}
            >
              {plan.badge && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase"
                  style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
                >
                  {plan.badge}
                </div>
              )}
              <h3 className="font-display text-xl font-semibold text-[#F0F0F0] mb-1 tracking-tight">
                {plan.name}
              </h3>
              <p className="text-xs text-[#888888] mb-6">{plan.desc}</p>
              <div className="flex items-baseline gap-1.5 mb-6 pb-6 border-b border-white/[0.06]">
                <span className="font-display text-4xl font-semibold text-[#F0F0F0] tracking-[-0.02em]">
                  {plan.price}
                </span>
                <span className="text-xs text-[#555555]">{plan.note}</span>
              </div>
              <ul className="space-y-2.5 mb-6">
                {plan.features.map((feat) => (
                  <li
                    key={feat}
                    className="flex items-start gap-2.5 text-xs text-[#C0C0C0] leading-relaxed"
                  >
                    <CheckCircle
                      className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                      style={{
                        color: plan.highlighted ? "#C9A84C" : "#3ECF8E",
                      }}
                    />
                    {feat}
                  </li>
                ))}
              </ul>
              <Link
                href="/pricing"
                className="block text-center py-3 rounded-lg text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
                style={
                  plan.highlighted
                    ? { backgroundColor: "#C9A84C", color: "#0A0A0A" }
                    : {
                        border: "1px solid rgba(255,255,255,0.12)",
                        color: "#F0F0F0",
                      }
                }
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-sm text-[#888888] hover:text-[#F0F0F0] transition-colors"
          >
            See full pricing & comparison
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </SectionWrapper>

      {/* FOUNDING OFFER — beta-only conversion block (reserve a locked-in
          founding discount). Disappears the moment real checkout goes live. */}
      {!PAYWALL_ENABLED && <FoundingOffer variant="darker" />}

      {/* FAQ PREVIEW */}
      <SectionWrapper>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05]">Common questions</h2>
          </div>
          <FAQAccordion items={faqItems} />
          <div className="text-center mt-8">
            <Link
              href="/faq"
              className="text-sm hover:underline"
              style={{ color: "#C9A84C" }}
            >
              View all FAQs →
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* LEAD MAGNET — error-log template */}
      <SectionWrapper>
        <div className="max-w-xl mx-auto">
          <LeadCapture
            source="homepage"
            leadMagnet="error-log-template"
            eyebrow="Free template"
            headline="The error-log template I used to go from 565 to 735."
            description="The exact six-tag taxonomy and the spreadsheet structure. Two months of honest logging surfaces the patterns. No signup required."
            ctaLabel="Send me the template"
          />
        </div>
      </SectionWrapper>

      {/* FINAL CTA */}
      <section
        className="relative py-28 overflow-hidden"
        style={{ backgroundColor: "#0A0A0A" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 50% 100%, rgba(201,168,76,0.16) 0%, transparent 65%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 pointer-events-none bg-grain opacity-[0.035] mix-blend-overlay"
          aria-hidden
        />
        <div className="relative max-w-3xl mx-auto text-center px-4">
          <h2 className="font-display text-4xl sm:text-6xl font-semibold text-[#F0F0F0] mb-6 tracking-[-0.02em] leading-[1.02]">
            Ready to score{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>655+?</span>
          </h2>
          <p className="text-[#888888] mb-8 text-lg">
            Stop guessing. Start scoring with a system, not a pile of videos.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm font-semibold transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
              style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
            >
              Start Free
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm font-semibold border border-white/[0.12] text-[#F0F0F0] hover:bg-white/5 transition-all"
            >
              Book a Free Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
