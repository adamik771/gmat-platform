import { Lock, Check } from "lucide-react"
import SectionWrapper from "@/components/shared/SectionWrapper"
import LeadCapture from "@/components/marketing/LeadCapture"

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
    "Full access to the whole platform — a free 7-day trial, no card",
    "30-40% off the plan prices above, locked in for when checkout opens",
    "Your founding code before anyone else — no charge until you choose to buy",
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
              Paid checkout isn&apos;t open yet. Until it opens, you can reserve
              a founding discount on the plan prices listed above — no charge
              today and no obligation; you&apos;re holding your place and your
              price while you try the platform on the free 7-day trial.
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
              description="Drop your email and I'll reserve your founding price. When checkout opens, you get your code first — at the founding rate, locked in."
              ctaLabel="Reserve my founding rate"
              successHeadline="You're on the founding list."
              successDescription="Your founding rate is reserved to this address, and a confirmation email is on its way. When checkout opens, your code arrives here — one email, just the code. No charge unless you decide to buy."
              footnote="Reserving sends one confirmation email now and your code when checkout opens — nothing more unless you tick the updates box above. No charge today."
              optInLabel="Also email me founding-user updates — getting-started tips and early access as checkout opens. Optional; unsubscribe in one click."
              secondChancePitch="Want founding-user updates? I'll email getting-started tips and early access as checkout opens. Unsubscribe in one click."
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
