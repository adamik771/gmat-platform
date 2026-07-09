import { Lock, Check } from "lucide-react"
import SectionWrapper from "@/components/shared/SectionWrapper"
import LeadCapture from "@/components/marketing/LeadCapture"

/**
 * FoundingOffer — the launch conversion block. While the platform is free in
 * beta, this lets a prospect reserve a locked-in founding discount (honored
 * when paid plans turn on) without paying today. Render it gated on
 * `!PAYWALL_ENABLED` from the parent server page so it disappears the moment
 * real checkout goes live. Reuses LeadCapture's founding-member capture, which
 * fires the `founding_reserve` funnel event on submit.
 */
export default function FoundingOffer({
  variant = "dark",
}: {
  variant?: "dark" | "darker"
}) {
  const perks = [
    "Full access to the whole platform — a free 7-day trial, no card",
    "A founding discount of 30-40% off, locked in for when paid plans launch",
    "Your founding code before anyone else — no charge until you choose to upgrade",
    "A direct line to shape what gets built next",
  ]

  return (
    <SectionWrapper variant={variant} id="founding">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left: the pitch */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[11px] font-semibold uppercase tracking-[0.18em] mb-5"
              style={{
                borderColor: "rgba(201,168,76,0.3)",
                backgroundColor: "rgba(201,168,76,0.06)",
                color: "#C9A84C",
              }}
            >
              <Lock className="w-3 h-3" />
              Founding access
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05] mb-4">
              Become a founding member.
            </h2>
            <p className="text-[15px] text-[#888888] leading-relaxed mb-7 max-w-md">
              Every new account starts with a free 7-day full-access trial —
              no card. Founding members reserve a permanent discount on the paid
              plans before they launch. There&apos;s no charge today and no
              obligation; you&apos;re holding your place and your price.
            </p>
            <ul className="space-y-3">
              {perks.map((perk) => (
                <li key={perk} className="flex items-start gap-2.5">
                  <Check
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "#3ECF8E" }}
                  />
                  <span className="text-[14px] text-[#C0C0C0] leading-relaxed">
                    {perk}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: the reservation form */}
          <div>
            <LeadCapture
              source="founding-member"
              leadMagnet="founding-reservation"
              trackEventName="founding_reserve"
              eyebrow="Reserve your rate"
              headline="Hold my founding discount."
              description="Drop your email and I'll reserve your founding price. When paid plans open, you get your code first — at the founding rate, locked in."
              ctaLabel="Reserve my founding rate"
              successHeadline="You're on the founding list."
              successDescription="Your founding rate is reserved to this address. When paid plans open, I'll send your code here — one email, just the code. No charge unless you decide to upgrade."
              footnote="No charge today. No obligation. Unsubscribe with one click."
              optInLabel="Also email me founding-user updates — getting-started tips and early access as paid plans open. Optional; unsubscribe in one click."
              secondChancePitch="Want founding-user updates? I'll email getting-started tips and early access as paid plans open. Unsubscribe in one click."
              optInCtaLabel="Email me founding updates"
            />
            <p className="text-[11px] text-[#555555] leading-relaxed mt-4">
              GMAT is a registered trademark of the Graduate Management Admission
              Council (GMAC), which does not endorse and is not affiliated with
              Zakarian GMAT.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
