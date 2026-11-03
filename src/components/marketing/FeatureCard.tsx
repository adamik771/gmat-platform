import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group relative p-6 rounded-xl border border-[var(--public-line,rgba(255,255,255,0.08))] bg-[var(--public-surface,#111111)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--public-line,rgba(255,255,255,0.16))] hover:bg-[var(--public-surface,#141414)] hover:shadow-[0_10px_40px_-12px_var(--public-accent-line,rgba(201,168,76,0.18))]",
        className
      )}
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-[1.05]"
        style={{ backgroundColor: "var(--public-tint,rgba(201, 168, 76, 0.12))" }}
      >
        <Icon className="w-5 h-5" style={{ color: "var(--public-accent,#C9A84C)" }} />
      </div>
      <h3 className="text-base font-semibold text-[color:var(--public-ink,#F0F0F0)] mb-2 tracking-tight">{title}</h3>
      <p className="text-sm text-[color:var(--public-muted,#888888)] leading-relaxed">{description}</p>
    </div>
  )
}
