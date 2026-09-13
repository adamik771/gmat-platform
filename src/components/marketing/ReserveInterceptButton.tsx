import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

/** Reservations currently capture an email, not a plan selection. */
export default function ReserveInterceptButton({
  planId,
  label,
  highlighted,
}: {
  planId: string
  label: string
  highlighted: boolean
}) {
  return (
    <div className="mb-6">
      <Link
        href="#founding"
        data-plan-id={planId}
        className={cn(
          "flex min-h-11 w-full items-center justify-center gap-2 rounded-md px-3 py-3 text-center text-sm font-medium",
          highlighted ? "bg-[#C9A84C] text-[#171B17] hover:bg-[#DEC371]" : "border border-white/20 text-[#F0F0F0] hover:bg-white/5"
        )}
      >
        {label}<ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0" />
      </Link>
      <p className="mt-2 text-xs leading-relaxed text-[#B9B7AE]">No payment today. Choose a plan when checkout opens.</p>
    </div>
  )
}
