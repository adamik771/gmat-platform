import { Lock, Check } from "lucide-react"
import SectionWrapper from "@/components/shared/SectionWrapper"
import LeadCapture from "@/components/marketing/LeadCapture"
import { TRIAL_DAYS } from "@/lib/entitlements"

/**
 * FoundingOffer — the pre-checkout reservation block. While checkout is not
 * yet open, this lets a prospect reserve a locked-in founding discount on the
 * published plan prices without paying today. Rendered ONLY on /pricing
 * (down-funnel; the public lead offer everywhere else is the 7-day trial),
 * gated on `!PAYWALL_ENABLED` so it disappears the moment real checkout goes
 * live. Reuses LeadCapture's founding-member capture, which fires the
 * `founding_reserve` funnel event on submit.
 */
export default function FoundingOffer({
  variant = "dark",
}: {
  variant?: "dark" | "darker"
}) {
  const perks = [
    `Full platform access during early release, including the ${TRIAL_DAYS}-day trial`,
    "30-40% off the plan prices above, locked in for when checkout opens",
    "A founding code by email when checkout opens; choose your plan then",
  ]

  return (
    <SectionWrapper variant={variant} id="founding" className="scroll-mt-24 !py-12 lg:!py-16">
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
              Paid checkout is not open. Reserve a founding discount by email,
              with no charge or obligation. This reservation is not tied to a
              plan; you choose one when checkout opens.
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
              description="Reserve by email. Choose your plan when checkout opens; no payment today."
              ctaLabel="Reserve my founding rate"
              successHeadline="You're on the founding list."
              successDescription="Your founding rate is reserved to this address, and a confirmation email is on its way. When checkout opens, your code arrives here — one email, just the code. No charge unless you decide to buy."
              footnote="Reserving sends one confirmation email now and your code when checkout opens — nothing more unless you tick the updates box above. No charge today."
              optInLabel="Also email me founding-user updates — getting-started tips and early access as checkout opens. Optional; unsubscribe in one click."
              secondChancePitch="Want founding-user updates? I'll email getting-started tips and early access as checkout opens. Unsubscribe in one click."
              optInCtaLabel="Email me founding updates"
            />
            <p className="text-[11px] text-[#555555] leading-relaxed mt-4">
              GMAC, GMAT, Graduate Management Admission Council, and Graduate
              Management Admission Test are trademarks of GMAC in the United
              States and other countries. Zakarian GMAT is independent and is
              not affiliated with, endorsed by, or sponsored by GMAC.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
