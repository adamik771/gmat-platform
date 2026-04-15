import { cn } from "@/lib/utils"
import {
  BookOpen,
  Target,
  Trophy,
  ClipboardList,
  CheckCircle,
  Activity,
} from "lucide-react"
import { ActivityItem } from "@/types"
import EmptyState from "@/components/shared/EmptyState"

const typeConfig = {
  lesson_completed: {
    icon: BookOpen,
    color: "#C9A84C",
    bg: "rgba(201, 168, 76, 0.1)",
  },
  practice_set: {
    icon: Target,
    color: "#3ECF8E",
    bg: "rgba(62, 207, 142, 0.1)",
  },
  milestone: {
    icon: Trophy,
    color: "#C9A84C",
    bg: "rgba(201, 168, 76, 0.1)",
  },
  mock_exam: {
    icon: ClipboardList,
    color: "#888888",
    bg: "rgba(136, 136, 136, 0.1)",
  },
  error_reviewed: {
    icon: CheckCircle,
    color: "#3ECF8E",
    bg: "rgba(62, 207, 142, 0.1)",
  },
}

interface ActivityFeedProps {
  items: ActivityItem[]
  className?: string
}

function formatRelativeTime(timestamp: string): string {
  const now = new Date()
  const then = new Date(timestamp)
  const diff = Math.floor((now.getTime() - then.getTime()) / 1000)

  if (diff < 60) return "just now"
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`
  return `${Math.floor(diff / 86400)}d ago`
}

export default function ActivityFeed({ items, className }: ActivityFeedProps) {
  if (items.length === 0) {
    return (
      <div className={cn("p-2", className)}>
        <EmptyState
          icon={Activity}
          title="No activity yet"
          description="Finish a practice set or lesson to see your recent sessions here."
          ctaHref="/practice"
          ctaLabel="Start practicing"
          size="sm"
        />
      </div>
    )
  }

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item) => {
        const config = typeConfig[item.type]
        const Icon = config.icon

        return (
          <div
            key={item.id}
            className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/[0.02] transition-colors"
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: config.bg }}
            >
              <Icon className="w-4 h-4" style={{ color: config.color }} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-[#F0F0F0] font-medium truncate">
                {item.title}
              </p>
              <p className="text-xs text-[#555555]">{item.description}</p>
            </div>
            <div className="flex-shrink-0 flex flex-col items-end gap-1">
              <span className="text-xs text-[#555555]">
                {formatRelativeTime(item.timestamp)}
              </span>
              {item.score !== undefined && (
                <span
                  className="text-xs font-medium"
                  style={{ color: "#3ECF8E" }}
                >
                  {item.score}%
                </span>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
