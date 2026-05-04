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
        "group relative p-6 rounded-xl border border-white/[0.08] bg-[#111111] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.16] hover:bg-[#141414] hover:shadow-[0_10px_40px_-12px_rgba(201,168,76,0.18)]",
        className
      )}
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-[1.05]"
        style={{ backgroundColor: "rgba(201, 168, 76, 0.12)" }}
      >
        <Icon className="w-5 h-5" style={{ color: "#C9A84C" }} />
      </div>
      <h3 className="text-base font-semibold text-[#F0F0F0] mb-2 tracking-tight">{title}</h3>
      <p className="text-sm text-[#888888] leading-relaxed">{description}</p>
    </div>
  )
}
