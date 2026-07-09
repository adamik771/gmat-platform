import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Gift, Send, UserPlus } from "lucide-react"
import SectionWrapper from "@/components/shared/SectionWrapper"
import ReferralShare from "@/components/marketing/ReferralShare"
import TrackView from "@/components/analytics/TrackView"

export const metadata: Metadata = {
  title: "Refer a Friend",
  alternates: { canonical: "/refer" },
  description:
    "Share Zakarian GMAT with someone prepping for the GMAT. They get the founding discount; you get a $50 reward when they become a founding member.",
}

const steps = [
  {
    icon: Send,
    title: "Share it",
    body: "Add your name below, copy your message, and send it to someone you know who's prepping. Personal beats broadcast — one good DM is worth a hundred posts.",
  },
  {
    icon: UserPlus,
    title: "They join",
    body: "Your friend creates a free trial account and reserves founding access. When they mention your name, they lock in the founding discount on paid plans.",
  },
  {
    icon: Gift,
    title: "You get $50",
    body: "When your friend becomes a paying founding member, you get a $50 reward. There's no cap — refer as many people as you genuinely want to help.",
  },
]

export default function ReferPage() {
  return (
    <div style={{ backgroundColor: "#0A0A0A" }}>
      <TrackView event="landing_view" props={{ page: "refer" }} />
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 90% 50% at 50% -5%, rgba(201,168,76,0.15) 0%, transparent 60%)",
          }}
          aria-hidden
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-4"
            style={{ color: "#C9A84C" }}
          >
            Refer a friend
          </p>
          <h1 className="font-display text-4xl sm:text-6xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.02] mb-5">
            Know someone prepping for the{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              GMAT?
            </span>
          </h1>
          <p className="text-[15px] sm:text-[17px] text-[#888888] leading-relaxed">
            If the platform has helped you, the best thing you can do is pass it
            to someone it would help too. They get the founding discount; you get
            a $50 reward when they become a founding member.
          </p>
        </div>
      </section>

      {/* How it works */}
      <SectionWrapper variant="darker">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={step.title}
                className="p-6 rounded-2xl border border-white/[0.08] bg-[#0D0D0D]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="flex items-center justify-center w-9 h-9 rounded-full flex-shrink-0"
                    style={{ backgroundColor: "rgba(201,168,76,0.1)" }}
                  >
                    <Icon className="w-4 h-4" style={{ color: "#C9A84C" }} />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#555555]">
                    Step {i + 1}
                  </span>
                </div>
                <h2 className="text-[16px] font-semibold text-[#F0F0F0] mb-2">
                  {step.title}
                </h2>
                <p className="text-[13px] text-[#888888] leading-relaxed">
                  {step.body}
                </p>
              </div>
            )
          })}
        </div>
      </SectionWrapper>

      {/* Share toolkit */}
      <SectionWrapper>
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05] mb-3">
              Your share message
            </h2>
            <p className="text-[14px] text-[#888888] leading-relaxed">
              Personalized and ready to send. Edit it however you like before you
              do.
            </p>
          </div>
          <ReferralShare />
        </div>
      </SectionWrapper>

      {/* Fine print + CTA */}
      <SectionWrapper variant="darker">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[13px] text-[#888888] leading-relaxed mb-8">
            The reward is paid once your friend becomes a paying founding member,
            by a method we agree on. We track referrals manually during the
            launch, so there&apos;s nothing to install and no codes to manage —
            just make sure your friend mentions your name when they reserve.
          </p>
          <Link
            href="/#founding"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm font-semibold transition-all hover:opacity-90 hover:scale-[1.02]"
            style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
          >
            Reserve your own founding access
            <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-[11px] text-[#555555] leading-relaxed mt-8 max-w-xl mx-auto">
            GMAT™ is a registered trademark of the Graduate Management Admission
            Council™ (GMAC™), which does not endorse and is not affiliated with
            Zakarian GMAT.
          </p>
        </div>
      </SectionWrapper>
    </div>
  )
}
