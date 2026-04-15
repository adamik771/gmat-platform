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
    description: "Took the official GMAT diagnostic cold. No prep, no strategy.",
    score: 565,
  },
  {
    date: "May 2025",
    title: "Started TTP",
    description: "Enrolled in Target Test Prep. Built a baseline in Quant.",
  },
  {
    date: "June–July 2025",
    title: "Deep Verbal Work",
    description: "Focused on CR and RC. Started tracking every mistake.",
  },
  {
    date: "August–October 2025",
    title: "The Grind",
    description: "3–4 hours daily. Mock after mock. Error log discipline.",
  },
  {
    date: "November 2025",
    title: "Mock Peak",
    description: "Consistently hitting 680–700 on official mocks.",
    score: 675,
  },
  {
    date: "December 2025",
    title: "Official GMAT",
    description: "Exam day. Everything clicked. The system worked.",
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
