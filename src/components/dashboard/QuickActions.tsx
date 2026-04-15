import Link from "next/link"
import { BookOpen, Target, AlertCircle, ClipboardList } from "lucide-react"
import { cn } from "@/lib/utils"

const actions = [
  {
    label: "Continue Studying",
    description: "Pick up where you left off",
    href: "/lessons",
    icon: BookOpen,
    primary: true,
  },
  {
    label: "Build Practice Set",
    description: "Custom question set",
    href: "/test-builder",
    icon: Target,
    primary: false,
  },
  {
    label: "Review Mistakes",
    description: "Error log analysis",
    href: "/error-log",
    icon: AlertCircle,
    primary: false,
  },
  {
    label: "Take Mock Exam",
    description: "Full timed practice",
    href: "/test-builder",
    icon: ClipboardList,
    primary: false,
  },
]

interface QuickActionsProps {
  className?: string
}

export default function QuickActions({ className }: QuickActionsProps) {
  return (
    <div className={cn("grid grid-cols-2 gap-3", className)}>
      {actions.map((action) => {
        const Icon = action.icon
        return (
          <Link
            key={action.href + action.label}
            href={action.href}
            className={cn(
              "flex items-center gap-3 p-4 rounded-xl border transition-all duration-200 hover:scale-[1.02]",
              action.primary
                ? "border-[#C9A84C]/30 bg-[#C9A84C]/5 hover:bg-[#C9A84C]/10"
                : "border-white/[0.08] bg-[#111111] hover:border-white/[0.14]"
            )}
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{
                backgroundColor: action.primary
                  ? "rgba(201, 168, 76, 0.15)"
                  : "rgba(255,255,255,0.05)",
              }}
            >
              <Icon
                className="w-4 h-4"
                style={{ color: action.primary ? "#C9A84C" : "#888888" }}
              />
            </div>
            <div>
              <p
                className={cn(
                  "text-sm font-medium",
                  action.primary ? "text-[#C9A84C]" : "text-[#F0F0F0]"
                )}
              >
                {action.label}
              </p>
              <p className="text-xs text-[#555555]">{action.description}</p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
