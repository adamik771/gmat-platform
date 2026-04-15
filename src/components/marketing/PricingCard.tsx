import Link from "next/link"
import { Check, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { PricingTier } from "@/types"

interface PricingCardProps {
  tier: PricingTier
  className?: string
}

export default function PricingCard({ tier, className }: PricingCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-xl border p-6 flex flex-col transition-all duration-300",
        tier.highlighted
          ? "border-[#C9A84C]/50 bg-[#111111] shadow-[0_0_40px_rgba(201,168,76,0.08)]"
          : "border-white/[0.08] bg-[#0F0F0F] hover:border-white/[0.14]",
        className
      )}
    >
      {/* Badge */}
      {tier.badge && (
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold"
          style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
        >
          {tier.badge}
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <h3 className="text-base font-semibold text-[#F0F0F0] mb-1">{tier.name}</h3>
        <p className="text-xs text-[#888888] mb-4">{tier.description}</p>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold text-[#F0F0F0]">
            ${tier.price.toLocaleString()}
          </span>
          <span className="text-sm text-[#555555]">{tier.priceLabel}</span>
        </div>
      </div>

      {/* CTA */}
      <Link
        href="/signup"
        className={cn(
          "w-full text-center py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:opacity-90 mb-6",
          tier.highlighted
            ? "text-[#0A0A0A]"
            : "border border-white/[0.12] text-[#F0F0F0] hover:bg-white/5"
        )}
        style={tier.highlighted ? { backgroundColor: "#C9A84C" } : {}}
      >
        {tier.cta}
      </Link>

      {/* Features */}
      <ul className="space-y-3 flex-1">
        {tier.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2.5">
            {feature.included ? (
              <Check
                className="w-4 h-4 mt-0.5 flex-shrink-0"
                style={{ color: "#3ECF8E" }}
              />
            ) : (
              <X className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#333333]" />
            )}
            <span
              className={cn(
                "text-sm",
                feature.included ? "text-[#C0C0C0]" : "text-[#444444]"
              )}
            >
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
