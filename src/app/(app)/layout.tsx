"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  LayoutDashboard,
  Calendar,
  BookOpen,
  Sparkles,
  Target,
  Wrench,
  BarChart3,
  AlertCircle,
  Settings,
  ChevronDown,
  Menu,
  X,
  LogOut,
  User,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { createSupabaseBrowser } from "@/lib/supabase/browser"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Study Plan", href: "/study-plan", icon: Calendar },
  { label: "Chapters", href: "/chapters", icon: Sparkles },
  { label: "Lessons", href: "/lessons", icon: BookOpen },
  { label: "Practice", href: "/practice", icon: Target },
  { label: "Test Builder", href: "/test-builder", icon: Wrench },
  { label: "Analytics", href: "/analytics", icon: BarChart3 },
  { label: "Error Log", href: "/error-log", icon: AlertCircle },
]

function SidebarLink({
  item,
  active,
  onClick,
}: {
  item: (typeof navItems)[0]
  active: boolean
  onClick?: () => void
}) {
  const Icon = item.icon
  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors group",
        active
          ? "text-[#F0F0F0]"
          : "text-[#555555] hover:text-[#888888] hover:bg-white/[0.03]"
      )}
      style={active ? { backgroundColor: "rgba(201,168,76,0.08)" } : {}}
    >
      <Icon
        className="w-4 h-4 flex-shrink-0"
        style={{ color: active ? "#C9A84C" : undefined }}
      />
      <span>{item.label}</span>
      {active && (
        <span
          className="ml-auto w-1 h-1 rounded-full"
          style={{ backgroundColor: "#C9A84C" }}
        />
      )}
    </Link>
  )
}

function Sidebar({
  pathname,
  onClose,
}: {
  pathname: string
  onClose?: () => void
}) {
  return (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="px-4 py-5 border-b border-white/[0.06]">
        <Link href="/" className="flex items-center gap-1">
          <span className="text-[#F0F0F0] font-bold text-sm">ZAKARIAN</span>
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: "#C9A84C" }}
          />
          <span className="text-[#F0F0F0] font-bold text-sm">GMAT</span>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto p-3 space-y-1">
        {navItems.map((item) => (
          <SidebarLink
            key={item.href}
            item={item}
            active={pathname.startsWith(item.href)}
            onClick={onClose}
          />
        ))}
      </nav>

      {/* Bottom */}
      <div className="p-3 border-t border-white/[0.06]">
        <Link
          href="/settings"
          onClick={onClose}
          className={cn(
            "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors",
            pathname.startsWith("/settings")
              ? "text-[#F0F0F0]"
              : "text-[#555555] hover:text-[#888888] hover:bg-white/[0.03]"
          )}
        >
          <Settings className="w-4 h-4 flex-shrink-0" />
          <span>Settings</span>
        </Link>
      </div>
    </div>
  )
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [userName, setUserName] = useState("")
  const [userInitials, setUserInitials] = useState("")

  useEffect(() => {
    const supabase = createSupabaseBrowser()
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) {
        const fullName = (user.user_metadata?.full_name as string) ?? user.email ?? ""
        setUserName(fullName.split(" ")[0] || user.email?.split("@")[0] || "User")
        const parts = fullName.split(" ").filter(Boolean)
        setUserInitials(
          parts.length >= 2
            ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
            : fullName.slice(0, 2).toUpperCase()
        )
      }
    })
  }, [])

  async function handleSignOut() {
    const supabase = createSupabaseBrowser()
    await supabase.auth.signOut()
    router.push("/login")
    router.refresh()
  }

  const currentLabel =
    navItems.find((i) => pathname.startsWith(i.href))?.label ?? "Dashboard"

  return (
    <div
      className="flex h-screen overflow-hidden"
      style={{ backgroundColor: "#0A0A0A" }}
    >
      {/* Desktop sidebar */}
      <aside
        className="hidden lg:flex flex-col w-56 flex-shrink-0 border-r border-white/[0.06]"
        style={{ backgroundColor: "#0D0D0D" }}
      >
        <Sidebar pathname={pathname} />
      </aside>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setSidebarOpen(false)}
          />
          <aside
            className="relative z-10 w-56 flex flex-col border-r border-white/[0.06]"
            style={{ backgroundColor: "#0D0D0D" }}
          >
            <Sidebar
              pathname={pathname}
              onClose={() => setSidebarOpen(false)}
            />
          </aside>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header
          className="flex items-center justify-between px-4 sm:px-6 h-14 border-b border-white/[0.06] flex-shrink-0"
          style={{ backgroundColor: "#0A0A0A" }}
        >
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-1.5 rounded-lg text-[#555555] hover:text-[#888888]"
            >
              <Menu className="w-5 h-5" />
            </button>
            <p className="text-sm text-[#888888]">
              <span className="text-[#555555]">App</span>
              <span className="mx-1.5 text-[#333333]">/</span>
              <span className="text-[#F0F0F0]">{currentLabel}</span>
            </p>
          </div>

          {/* User menu */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-white/[0.04] transition-colors">
              <Avatar className="w-7 h-7">
                <AvatarFallback
                  className="text-xs font-bold"
                  style={{
                    backgroundColor: "rgba(201,168,76,0.15)",
                    color: "#C9A84C",
                  }}
                >
                  {userInitials || ".."}
                </AvatarFallback>
              </Avatar>
              <span className="hidden sm:block text-sm text-[#888888]">{userName || "..."}</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#555555]" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-48 border-white/[0.08]"
              style={{ backgroundColor: "#111111" }}
            >
              <DropdownMenuItem>
                <Link
                  href="/settings"
                  className="flex items-center gap-2 text-[#888888] hover:text-[#F0F0F0] cursor-pointer w-full"
                >
                  <User className="w-4 h-4" />
                  Profile & Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-white/[0.06]" />
              <DropdownMenuItem
                onClick={handleSignOut}
                className="flex items-center gap-2 text-[#888888] cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-4 sm:p-6">{children}</div>
        </main>
      </div>
    </div>
  )
}
