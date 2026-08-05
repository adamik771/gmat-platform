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
    title: "First Diagnostic",
    description:
      "Sat for an official practice exam cold — no prep, no strategy. Q78, V79, DI77. 56th percentile.",
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
      "Q86, V85, DI80. 95th percentile. Practice tests had been ranging 675–725; the official landed at the floor.",
    score: 675,
  },
  {
    date: "December 2025",
    title: "Second Official Exam",
    description:
      "Booked with five days' notice. Three days of pure mistake review, no new content. Q88, V86, DI85. Top 1% of test-takers.",
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
      <div className="absolute left-4 top-2 bottom-2 w-px bg-white/[0.08]" />

      <div className="space-y-8">
        {events.map((event, index) => (
          <div key={index} className="relative flex gap-6 pl-12">
            {/* Dot */}
            <div
              className={cn(
                "absolute left-0 top-1 w-8 h-8 rounded-full flex items-center justify-center border-2",
                event.highlight
                  ? "border-[#C9A84C] bg-[#C9A84C]/10"
                  : "border-white/[0.12] bg-[#111111]"
              )}
            >
              <div
                className={cn(
                  "w-2 h-2 rounded-full",
                  event.highlight ? "bg-[#C9A84C]" : "bg-[#444444]"
                )}
              />
            </div>

            <div className="flex-1 pb-2">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs text-[#555555] mb-1">{event.date}</p>
                  <h4
                    className={cn(
                      "text-sm font-semibold mb-1",
                      event.highlight ? "text-[#C9A84C]" : "text-[#F0F0F0]"
                    )}
                  >
                    {event.title}
                  </h4>
                  <p className="text-sm text-[#888888]">{event.description}</p>
                </div>
                {event.score && (
                  <div
                    className={cn(
                      "flex-shrink-0 px-3 py-1.5 rounded-lg text-sm font-bold",
                      event.highlight
                        ? "bg-[#C9A84C]/10 text-[#C9A84C]"
                        : "bg-white/5 text-[#888888]"
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
