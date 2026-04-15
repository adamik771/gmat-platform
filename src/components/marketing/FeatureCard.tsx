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
        "p-6 rounded-xl border border-white/[0.08] bg-[#111111] hover:border-white/[0.14] transition-colors duration-300",
        className
      )}
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
        style={{ backgroundColor: "rgba(201, 168, 76, 0.12)" }}
      >
        <Icon className="w-5 h-5" style={{ color: "#C9A84C" }} />
      </div>
      <h3 className="text-base font-semibold text-[#F0F0F0] mb-2">{title}</h3>
      <p className="text-sm text-[#888888] leading-relaxed">{description}</p>
    </div>
  )
}
