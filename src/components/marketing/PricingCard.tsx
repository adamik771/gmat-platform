import { Check, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { PricingTier } from "@/types"
import CheckoutButton from "./CheckoutButton"
import ReserveInterceptButton from "./ReserveInterceptButton"

interface PricingCardProps {
  tier: PricingTier
  className?: string
  /** Passed through to CheckoutButton — see its cancelPath doc. */
  checkoutCancelPath?: "/pricing" | "/upgrade"
  /** False while no live payment processor exists (PAYWALL_ENABLED off): the
   *  buy CTA becomes a founding-rate reservation link instead of a checkout
   *  that dead-ends in a declined test-mode charge. The #founding anchor is
   *  the FoundingOffer block, rendered on /pricing exactly when the paywall
   *  is off. Defaults to purchasable for post-flip surfaces (/upgrade). */
  purchasable?: boolean
}

export default function PricingCard({
  tier,
  className,
  checkoutCancelPath,
  purchasable = true,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "group relative rounded-2xl border p-7 flex flex-col transition-all duration-300 hover:-translate-y-0.5",
        tier.highlighted
          ? "border-[#C9A84C]/45 bg-[#131313]"
          : "border-white/[0.07] bg-[#0F0F0F] hover:border-white/[0.16] hover:bg-[#121212]",
        className
      )}
      style={
        tier.highlighted
          ? {
              boxShadow:
                "0 0 60px rgba(201,168,76,0.1), inset 0 1px 0 rgba(255,255,255,0.05)",
            }
          : undefined
      }
    >
      {/* Badge */}
      {tier.badge && (
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.18em]"
          style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
        >
          {tier.badge}
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <h3 className="font-display text-xl font-semibold text-[#F0F0F0] mb-1 tracking-tight">
          {tier.name}
        </h3>
        <p className="text-xs text-[#888888] mb-5 leading-relaxed">{tier.description}</p>
        <div className="flex items-baseline gap-1.5 pb-6 border-b border-white/[0.06]">
          <span className="font-display text-4xl sm:text-[2.75rem] font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-none">
            ${tier.price.toLocaleString()}
          </span>
          <span className="text-xs text-[#555555] ml-0.5">{tier.priceLabel}</span>
        </div>
      </div>

      {/* CTA — routes unauthenticated users to /signup, otherwise POSTs
          to /api/checkout and redirects to Stripe. Pre-checkout (paywall
          off), the same slot shows an identical-looking button whose CLICK
          reveals the interim story (free meanwhile + founding reservation) —
          the reveal is intent-gated on purpose, so the cards read as a normal
          pricing page to browsers who never meant to buy. */}
      {purchasable ? (
        <CheckoutButton
          planId={tier.id}
          label={tier.cta}
          highlighted={tier.highlighted}
          cancelPath={checkoutCancelPath}
        />
      ) : (
        <ReserveInterceptButton
          planId={tier.id}
          label={tier.cta}
          highlighted={tier.highlighted}
        />
      )}

      {/* Features */}
      <ul className="space-y-2.5 flex-1 mt-6 pt-6 border-t border-white/[0.05]">
        {tier.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2.5">
            {feature.included ? (
              <Check
                className="w-4 h-4 mt-0.5 flex-shrink-0"
                style={{
                  color: tier.highlighted ? "#C9A84C" : "#3ECF8E",
                }}
              />
            ) : (
              <X className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#2E2E2E]" />
            )}
            <span
              className={cn(
                "text-[13px] leading-relaxed",
                feature.included ? "text-[#C0C0C0]" : "text-[#444444]"
              )}
            >
              {/* Excluded features are only distinguished visually (dimmed + X
                  icon); spell it out for screen readers and text extraction so
                  e.g. Self-Study never *reads* as including WhatsApp/coaching. */}
              {!feature.included && <span className="sr-only">Not included: </span>}
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
