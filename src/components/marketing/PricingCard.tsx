import Link from "next/link"
import { Check, MessageCircle, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { PricingTier } from "@/types"
import CheckoutButton from "./CheckoutButton"
import ReserveInterceptButton from "./ReserveInterceptButton"

interface PricingCardProps {
  tier: PricingTier
  className?: string
  checkoutCancelPath?: "/pricing" | "/upgrade"
  purchasable?: boolean
  reservationAvailable?: boolean
  manualContactHref?: string
  manualEmailHref?: string
}

export default function PricingCard({
  tier,
  className,
  checkoutCancelPath,
  purchasable = true,
  reservationAvailable = true,
  manualContactHref,
  manualEmailHref,
}: PricingCardProps) {
  const name = tier.id === "self_study_guaranteed" ? "Mentorship" : tier.name
  return (
    <article className={cn(
      "relative flex min-w-0 flex-col rounded-lg border p-6",
      tier.highlighted ? "border-[#C9A84C]/45 bg-[#141612]" : "border-white/15 bg-[#111111]",
      className
    )}>
      <div className="min-h-7 text-xs font-semibold text-[#C9A84C]">{tier.badge}</div>
      <h3 className="text-xl font-semibold text-[#F0F0F0]">{name}</h3>
      <p className="mt-2 min-h-24 text-sm leading-relaxed text-[#B9B7AE]">
        {tier.id === "self_study_guaranteed" ? "Includes Self-Study. Direct WhatsApp Q&A with Adam." : tier.description}
      </p>
      <div className="my-5 border-y border-white/10 py-5">
        <p className="text-4xl font-semibold tabular-nums text-[#F0F0F0]">
          ${tier.price.toLocaleString("en-US")}
        </p>
        <p className="mt-2 text-sm text-[#B9B7AE]">USD / one-time {tier.priceLabel === "package" ? "package" : "payment"}</p>
      </div>
      {purchasable ? (
        <CheckoutButton planId={tier.id} label={tier.cta} highlighted={tier.highlighted} cancelPath={checkoutCancelPath} />
      ) : reservationAvailable ? (
        <ReserveInterceptButton planId={tier.id} label="Reserve founding rate" highlighted={tier.highlighted} />
      ) : manualContactHref ? (
        <div className="mb-6 space-y-2">
          <a
            href={manualContactHref}
            target="_blank"
            rel="noreferrer"
            className={cn(
              "flex min-h-11 w-full items-center justify-center gap-2 rounded-lg px-3 text-sm font-medium transition-opacity hover:opacity-90",
              tier.highlighted
                ? "bg-[#C9A84C] text-[#0A0A0A]"
                : "border border-white/[0.12] text-[#F0F0F0] hover:bg-white/5",
            )}
          >
            <MessageCircle aria-hidden="true" className="h-4 w-4" />
            Continue on WhatsApp
          </a>
          {manualEmailHref && (
            <a
              href={manualEmailHref}
              className="block text-center text-xs text-[#B9B7AE] underline decoration-white/20 underline-offset-4 hover:text-[#F0F0F0]"
            >
              Or contact Adam by email
            </a>
          )}
        </div>
      ) : (
        <div className="mb-6">
          <p className="mb-2 text-sm text-[#B9B7AE]">Checkout temporarily unavailable</p>
          <Link href="/contact" className="inline-flex min-h-11 items-center text-sm text-[#C9A84C] underline">Contact Adam</Link>
        </div>
      )}
      <ul className="mt-auto space-y-3 border-t border-white/10 pt-5">
        {tier.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2.5">
            {feature.included ? <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#3ECF8E]" /> : <X aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#B9B7AE]" />}
            <span className="text-sm leading-relaxed text-[#C0C0C0]">
              <span className="sr-only">{feature.included ? "Included: " : "Not included: "}</span>{feature.text}
            </span>
          </li>
        ))}
      </ul>
    </article>
  )
}
