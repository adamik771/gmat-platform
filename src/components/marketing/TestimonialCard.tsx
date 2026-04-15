import { cn } from "@/lib/utils"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  detail: string
  scoreJump: string
  className?: string
}

export default function TestimonialCard({
  quote,
  author,
  detail,
  scoreJump,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "p-6 rounded-xl border border-white/[0.08] bg-[#111111] flex flex-col gap-4",
        className
      )}
    >
      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 fill-current"
            style={{ color: "#C9A84C" }}
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-sm text-[#C0C0C0] leading-relaxed flex-1">"{quote}"</p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-white/[0.06]">
        <div>
          <p className="text-sm font-medium text-[#F0F0F0]">{author}</p>
          <p className="text-xs text-[#555555]">{detail}</p>
        </div>
        <div
          className="px-2.5 py-1 rounded-lg text-xs font-semibold"
          style={{ backgroundColor: "rgba(62, 207, 142, 0.12)", color: "#3ECF8E" }}
        >
          {scoreJump}
        </div>
      </div>
    </div>
  )
}
