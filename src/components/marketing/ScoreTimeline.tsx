import { cn } from "@/lib/utils"

interface TimelineEvent {
  date: string
  title: string
  description: string
  score?: number
  highlight?: boolean
}

const events: TimelineEvent[] = [
  {
    date: "April 2025",
    title: "Official practice baseline",
    description:
      "Before structured preparation. Q78, V79, DI77.",
    score: 565,
  },
  {
    date: "April–May 2025",
    title: "Initial Push",
    description:
      "Picked a structured curriculum and went to work. Foundational Quant. Daily problem sets.",
  },
  {
    date: "August–October 2025",
    title: "The Grind",
    description:
      "Resumed end of August after a summer pause. 4–5 hours daily, every day. Error-log discipline through every set.",
  },
  {
    date: "November 2025",
    title: "First Official Exam",
    description:
      "Official GMAT Focus exam. Q86, V85, DI80.",
    score: 675,
  },
  {
    date: "December 2025",
    title: "Second Official Exam",
    description:
      "Official GMAT Focus exam. Q88, V86, DI85.",
    score: 735,
    highlight: true,
  },
]

interface ScoreTimelineProps {
  className?: string
}

export default function ScoreTimeline({ className }: ScoreTimelineProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Vertical line */}
      <div className="absolute left-4 top-2 bottom-2 w-px bg-[var(--public-surface-hover,rgba(255,255,255,0.08))]" />

      <div className="space-y-8">
        {events.filter((event) => event.score !== undefined).map((event, index) => (
          <div key={index} className="relative flex gap-6 pl-12">
            {/* Dot */}
            <div
              className={cn(
                "absolute left-0 top-1 w-8 h-8 rounded-full flex items-center justify-center border-2",
                event.highlight
                  ? "border-[color:var(--public-accent-line,#C9A84C)] bg-[var(--public-action,#C9A84C)]/10"
                  : "border-[var(--public-line,rgba(255,255,255,0.12))] bg-[var(--public-surface,#111111)]"
              )}
            >
              <div
                className={cn(
                  "w-2 h-2 rounded-full",
                  event.highlight ? "bg-[var(--public-action,#C9A84C)]" : "bg-[var(--public-muted,#444444)]"
                )}
              />
            </div>

            <div className="flex-1 pb-2">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-[color:var(--public-muted,#B9B7AE)] mb-1">{event.date}</p>
                  <h4
                    className={cn(
                      "text-sm font-semibold mb-1",
                      event.highlight ? "text-[color:var(--public-accent,#C9A84C)]" : "text-[color:var(--public-ink,#F0F0F0)]"
                    )}
                  >
                    {event.title}
                  </h4>
                  <p className="text-sm text-[color:var(--public-muted,#B9B7AE)]">{event.description}</p>
                </div>
                {event.score && (
                  <div
                    className={cn(
                      "flex-shrink-0 px-3 py-1.5 rounded-lg text-sm font-bold",
                      event.highlight
                        ? "bg-[var(--public-action,#C9A84C)]/10 text-[color:var(--public-accent,#C9A84C)]"
                        : "bg-[var(--public-surface-hover,rgba(255,255,255,0.05))] text-[color:var(--public-muted,#888888)]"
                    )}
                  >
                    {event.score}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
