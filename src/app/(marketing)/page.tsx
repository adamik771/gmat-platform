import Image from "next/image"
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
import TestimonialCard from "@/components/marketing/TestimonialCard"
import FAQAccordion from "@/components/marketing/FAQAccordion"
import HeroDashboardCard from "@/components/marketing/HeroDashboardCard"
import ScoreCalloutNumbers from "@/components/marketing/ScoreCalloutNumbers"
import LeadCapture from "@/components/marketing/LeadCapture"

const modules = [
  { num: "01", title: "Mindset Reset", desc: "Rewire how you approach standardized tests." },
  { num: "02", title: "Baseline Deep Dive", desc: "Official practice exam first — know exactly where you stand on day one." },
  { num: "03", title: "Quant Mastery", desc: "PS, DS, and number sense from the ground up." },
  { num: "04", title: "Verbal Precision", desc: "CR, RC, and SC — clarity over cramming." },
  { num: "05", title: "Data Insights", desc: "The newest section. Demystified." },
  { num: "06", title: "Mock Strategy", desc: "Simulate real exam conditions, then debrief." },
  { num: "07", title: "Final Week Protocol", desc: "The last 7 days before your exam." },
  { num: "08", title: "Bonus Resources", desc: "Templates, flashcards, formula sheets." },
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
    title: "Proven Score Jumps",
    description:
      "Average improvement of +95 points. Not a promise — a pattern backed by a real 170-point jump.",
  },
]

const testimonials = [
  {
    quote:
      "I'd been stuck around 585 for months. Adam's error log approach completely changed how I reviewed. Went from 585 to 665 in 6 weeks.",
    author: "Priya M.",
    detail: "Applying to Wharton",
    scoreJump: "585 → 665",
  },
  {
    quote:
      "As a non-native speaker, I was terrified of Verbal. This system broke it down in a way no other course did. My CR accuracy went from 55% to 81%.",
    author: "Hamid K.",
    detail: "Harvard GSB applicant",
    scoreJump: "+78 points",
  },
  {
    quote:
      "The mock exam debriefing framework alone was worth the investment. I stopped guessing and started understanding.",
    author: "Sophie R.",
    detail: "Booth applicant",
    scoreJump: "645 → 675",
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
      "Most students see measurable improvement within 3–4 weeks of consistent daily study. Hitting 655+ typically takes 10–16 weeks depending on your starting score.",
  },
  {
    question: "What if I've already tried other courses?",
    answer:
      "Many students come to this system after TTP, Manhattan, or Magoosh. The difference is the review layer — the error log, the debrief frameworks, and the consistency system. Most prep is content-heavy. This system focuses on what you do with mistakes.",
  },
  {
    question: "Is there a refund policy?",
    answer:
      "Yes. If you complete the full curriculum and don't hit your target score, contact us within 30 days of your exam. We'll work with you one-on-one or refund your course fee.",
  },
]

export default function HomePage() {
  return (
    <div style={{ backgroundColor: "#0A0A0A" }}>
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
                565 → 735 · 99th Percentile
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
                  Start Free Trial
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
              {/* Trial scope — 7 days of full access, no card required.
                  The codebase doesn't enforce a paywall today
                  (`purchases.plan_id` is a display chip only); this
                  copy describes intent. Wire actual gating to
                  `purchases` + a `trial_started_at` field on
                  user_metadata when the paywall lands. */}
              <p className="text-xs text-[#888888] mb-2">
                No credit card. 7 days of full access — every chapter, full question bank, mock and review.
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
                  { label: "99th Percentile", color: "#3ECF8E", bg: "rgba(62,207,142,0.1)" },
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
            <span>Trusted by MBA candidates at</span>
            {[
              "Harvard GSB applicant",
              "Wharton applicant",
              "Booth applicant",
              "Columbia applicant",
              "Kellogg applicant",
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
            description="8 progressive modules built around how the GMAT actually tests you — not how you think it does."
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
              8 modules. One coherent system.
            </h2>
            <p className="text-[#888888]">
              Each module builds on the last. No random video library — a real progression.
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

          {/* Score display */}
          <ScoreCalloutNumbers start={565} delta={170} end={735} />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard
              key={t.author}
              quote={t.quote}
              author={t.author}
              detail={t.detail}
              scoreJump={t.scoreJump}
            />
          ))}
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
              In 8 months, I went from 565 to 735 — 99th percentile. This platform is the
              exact system I built for myself, packaged for every ambitious student facing the
              same obstacles I did.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                { label: "Scored 99th Percentile", color: "#C9A84C" },
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

          {/* Founder photo. Save a square crop (head + shoulders,
              ~512×512 or larger) at `public/founder.jpg`. Layered
              fallback: the "AZ" initials sit underneath; the
              next/image overlays them. When the file exists, the
              image covers the initials. When it doesn't (404), the
              <img> renders transparent and the initials show through
              — so the page never looks broken even before Adam drops
              the photo in. */}
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
                  className="absolute inset-0 flex items-center justify-center text-6xl font-bold"
                  style={{ color: "#C9A84C" }}
                >
                  AZ
                </span>
                <Image
                  src="/founder.jpg"
                  alt="Adam Zakarian"
                  width={512}
                  height={512}
                  priority
                  className="relative w-full h-full object-cover"
                />
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

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              name: "Self-Study",
              price: "$297",
              note: "one-time",
              desc: "Full curriculum + analytics",
              features: [
                "8-module progressive curriculum",
                "Full error-log analytics",
                "Unlimited practice + 6 mocks",
                "Spacing + review queue",
              ],
              highlighted: false,
            },
            {
              name: "Coaching",
              price: "$2,500",
              note: "package",
              desc: "8 weekly 1:1 sessions + WhatsApp",
              features: [
                "Everything in Self-Study",
                "8 × 60-min 1:1 calls with Adam",
                "Direct WhatsApp between sessions",
                "Custom per-week plan + ESR debrief",
              ],
              highlighted: true,
              badge: "Most Popular",
            },
            {
              name: "Intensive",
              price: "$4,200",
              note: "package",
              desc: "16 weeks + score guarantee",
              features: [
                "Everything in Coaching",
                "16 weeks of weekly sessions",
                "Score guarantee or refund",
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
            Join students who stopped guessing and started scoring.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm font-semibold transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
              style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
            >
              Start Free Trial
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
