import { cn } from "@/lib/utils"
import { Quote, Star } from "lucide-react"

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
        "group relative p-6 rounded-xl border border-[var(--public-line,rgba(255,255,255,0.08))] bg-[var(--public-surface,#111111)] flex flex-col gap-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--public-line,rgba(255,255,255,0.16))] hover:bg-[var(--public-surface,#141414)] hover:shadow-[0_10px_40px_-12px_var(--public-tint,rgba(201,168,76,0.15))]",
        className
      )}
    >
      {/* Decorative quote mark */}
      <Quote
        className="absolute top-4 right-4 w-8 h-8 pointer-events-none"
        strokeWidth={1}
        style={{ color: "var(--public-accent-line,rgba(201,168,76,0.18))" }}
        aria-hidden
      />

      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 fill-current"
            style={{ color: "var(--public-accent,#C9A84C)" }}
          />
        ))}
      </div>

      {/* Quote */}
      <p className="font-display text-[15px] text-[color:var(--public-ink,#D8D8D8)] leading-relaxed flex-1 italic tracking-[-0.005em]">&ldquo;{quote}&rdquo;</p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-[var(--public-line,rgba(255,255,255,0.06))]">
        <div>
          <p className="text-sm font-medium text-[color:var(--public-ink,#F0F0F0)]">{author}</p>
          <p className="text-xs text-[color:var(--public-muted,#555555)]">{detail}</p>
        </div>
        <div
          className="px-2.5 py-1 rounded-lg text-xs font-semibold"
          style={{ backgroundColor: "rgba(62, 207, 142, 0.12)", color: "var(--public-success,#3ECF8E)" }}
        >
          {scoreJump}
        </div>
      </div>
    </div>
  )
}
