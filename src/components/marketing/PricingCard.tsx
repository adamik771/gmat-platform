import Link from "next/link"
import { Check, MessageCircle, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { PricingTier } from "@/types"
import CheckoutButton from "./CheckoutButton"
import ReserveInterceptButton from "./ReserveInterceptButton"
import PlanEnquiryLink from "./PlanEnquiryLink"

interface PricingCardProps {
  tier: PricingTier
  className?: string
  checkoutCancelPath?: "/pricing" | "/upgrade"
  purchasable?: boolean
  reservationAvailable?: boolean
  manualContactHref?: string
  manualEmailHref?: string
  contactLabel?: string
  accessMonths?: number
}

export default function PricingCard({
  tier,
  className,
  checkoutCancelPath,
  purchasable = true,
  reservationAvailable = true,
  manualContactHref,
  manualEmailHref,
  contactLabel = "Continue on WhatsApp",
  accessMonths,
}: PricingCardProps) {
  const name = tier.id === "self_study_guaranteed" ? "Mentorship" : tier.name
  return (
    <article data-highlighted={tier.highlighted} className={cn(
      "relative flex min-w-0 flex-col rounded-lg border p-6",
      tier.highlighted ? "border-[color:var(--public-accent-line,#C9A84C)]/45 bg-[var(--public-surface,#141612)]" : "border-[var(--public-line,rgba(255,255,255,0.15))] bg-[var(--public-surface,#111111)]",
      className
    )}>
      <div data-slot="plan-badge" className="min-h-7 text-xs font-semibold text-[color:var(--public-accent,#C9A84C)]">{tier.badge}</div>
      <h3 className="text-xl font-semibold text-[color:var(--public-ink,#F0F0F0)]">{name}</h3>
      <p data-slot="plan-description" className="mt-2 min-h-24 text-sm leading-relaxed text-[color:var(--public-muted,#B9B7AE)]">
        {tier.id === "self_study_guaranteed" ? "Includes Self-Study. Direct WhatsApp Q&A with Adam." : tier.description}
      </p>
      <div data-slot="plan-price" className="my-5 border-y border-[var(--public-line,rgba(255,255,255,0.1))] py-5">
        <p className="text-4xl font-semibold tabular-nums text-[color:var(--public-ink,#F0F0F0)]">
          ${tier.price.toLocaleString("en-US")}
        </p>
        <p className="mt-2 text-sm text-[color:var(--public-muted,#B9B7AE)]">USD / one-time {tier.priceLabel === "package" ? "package" : "payment"}</p>
        {accessMonths !== undefined && <p data-slot="plan-duration">{accessMonths} months of platform access</p>}
      </div>
      {purchasable ? (
        <CheckoutButton planId={tier.id} label={tier.cta} highlighted={tier.highlighted} cancelPath={checkoutCancelPath} />
      ) : manualContactHref ? (
        <div className="mb-6 space-y-2">
          <PlanEnquiryLink
            href={manualContactHref}
            planId={tier.id}
            channel="whatsapp"
            surface={checkoutCancelPath === "/upgrade" ? "upgrade" : "pricing"}
            target="_blank"
            rel="noreferrer"
            className={cn(
              "flex min-h-11 w-full items-center justify-center gap-2 rounded-lg px-3 text-sm font-medium transition-opacity hover:opacity-90",
              tier.highlighted
                ? "bg-[var(--public-action,#C9A84C)] text-[color:var(--public-on-accent,#0A0A0A)]"
                : "border border-[var(--public-line,rgba(255,255,255,0.12))] text-[color:var(--public-ink,#F0F0F0)] hover:bg-[var(--public-surface-hover,rgba(255,255,255,0.05))]",
            )}
          >
            <MessageCircle aria-hidden="true" className="h-4 w-4 shrink-0" />
            {contactLabel}
          </PlanEnquiryLink>
          {manualEmailHref && (
            <PlanEnquiryLink
              href={manualEmailHref}
              planId={tier.id}
              channel="email"
              surface={checkoutCancelPath === "/upgrade" ? "upgrade" : "pricing"}
              className="block text-center text-xs text-[color:var(--public-muted,#B9B7AE)] underline decoration-[var(--public-line,rgba(255,255,255,0.2))] underline-offset-4 hover:text-[color:var(--public-ink,#F0F0F0)]"
            >
              Or contact Adam by email
            </PlanEnquiryLink>
          )}
          {reservationAvailable && (
            <Link href="#founding" className="block py-2 text-center text-xs text-[color:var(--public-accent,#C9A84C)] underline underline-offset-4">
              Prefer to wait? Reserve a founding rate
            </Link>
          )}
        </div>
      ) : reservationAvailable ? (
        <ReserveInterceptButton planId={tier.id} label="Reserve founding rate" highlighted={tier.highlighted} />
      ) : (
        <div className="mb-6">
          <p className="mb-2 text-sm text-[color:var(--public-muted,#B9B7AE)]">Checkout temporarily unavailable</p>
          <Link href="/contact" className="inline-flex min-h-11 items-center text-sm text-[color:var(--public-accent,#C9A84C)] underline">Contact Adam</Link>
        </div>
      )}
      <ul data-slot="plan-features" className="mt-auto space-y-3 border-t border-[var(--public-line,rgba(255,255,255,0.1))] pt-5">
        {tier.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2.5">
            {feature.included ? <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--public-success,#3ECF8E)]" /> : <X aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--public-muted,#B9B7AE)]" />}
            <span className="text-sm leading-relaxed text-[color:var(--public-body,#C0C0C0)]">
              <span className="sr-only">{feature.included ? "Included: " : "Not included: "}</span>{feature.text}
            </span>
          </li>
        ))}
      </ul>
    </article>
  )
}
