"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  LayoutDashboard,
  Calendar,
  MessageCircle,
  Sparkles,
  Target,
  Wrench,
  BarChart3,
  AlertCircle,
  Calculator,
  RotateCcw,
  FlaskConical,
  GraduationCap,
  Settings,
  ChevronDown,
  Menu,
  LogOut,
  User,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { createSupabaseBrowser } from "@/lib/supabase/browser"
import FeedbackWidget from "@/components/beta/FeedbackWidget"
import StudyTimer from "@/components/shared/StudyTimer"
import ServiceWorkerRegistrar from "@/components/offline/ServiceWorkerRegistrar"
import OfflineBanner from "@/components/offline/OfflineBanner"
import OfflineSyncTrigger from "@/components/offline/OfflineSyncTrigger"
import { clearReviewCache } from "@/lib/offline/review-cache"
import { drainPendingAttempts } from "@/lib/offline/sync"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Guides + Lessons were dropped from the sidebar on 2026-04-28 — Lessons
// is the deprecated old format (chapters superseded it), and reading-type
// guides now appear inline in /chapters with a "Reading" badge. Reference
// guides are still reachable via the chapter listing or direct links.
const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Course", href: "/learn", icon: GraduationCap },
  { label: "Study Plan", href: "/study-plan", icon: Calendar },
  { label: "Chapters", href: "/chapters", icon: Sparkles },
  { label: "Practice", href: "/practice", icon: Target },
  { label: "Review", href: "/review", icon: RotateCcw },
  { label: "Exams", href: "/mock", icon: FlaskConical },
  { label: "Test Builder", href: "/test-builder", icon: Wrench },
  { label: "Analytics", href: "/analytics", icon: BarChart3 },
  { label: "Score Calc", href: "/score-calculator", icon: Calculator },
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
      aria-current={active ? "page" : undefined}
      className={cn(
        "flex items-center gap-3 border-l-2 px-3 py-2.5 text-[13px] transition-colors group",
        active
          ? "border-[#C9A84C] bg-white/[0.025] text-[#F0F0F0]"
          : "border-transparent text-[#77746C] hover:text-[#C0C0C0] hover:bg-white/[0.02]"
      )}
    >
      <Icon
        className="w-4 h-4 flex-shrink-0"
        style={{ color: active ? "#C9A84C" : undefined }}
      />
      <span>{item.label}</span>
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
      <div className="px-5 h-14 flex items-center border-b border-white/[0.07]">
        <Link href="/" className="flex items-center gap-2" aria-label="Zakarian GMAT home">
          <span className="text-[#F0F0F0] font-semibold text-[12px]">ZAKARIAN</span>
          <span
            className="w-1 h-1 rounded-full"
            style={{ backgroundColor: "#C9A84C" }}
          />
          <span className="text-[#F0F0F0] font-semibold text-[12px]">GMAT</span>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-3 py-5 space-y-0.5">
        {navItems.map((item) => (
          <SidebarLink
            key={item.href}
            item={item}
            active={pathname.startsWith(item.href)}
            onClick={onClose}
          />
        ))}
      </nav>

      {/* Bottom — community + settings. Community link only renders
          when NEXT_PUBLIC_COMMUNITY_URL is set (e.g. a Discord invite).
          Keeps the sidebar clean before the cohort exists, then turns
          on with one env var when Adam launches it. */}
      <div className="p-3 border-t border-white/[0.06] space-y-1">
        {process.env.NEXT_PUBLIC_COMMUNITY_URL && (
          <a
            href={process.env.NEXT_PUBLIC_COMMUNITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex items-center gap-3 border-l-2 border-transparent px-3 py-2.5 text-[13px] transition-colors text-[#77746C] hover:text-[#C0C0C0] hover:bg-white/[0.02]"
          >
            <MessageCircle className="w-4 h-4 flex-shrink-0" />
            <span>Community</span>
            <span
              className="ml-auto text-[9px] uppercase tracking-[0.18em] font-semibold"
              style={{ color: "rgba(201,168,76,0.55)" }}
            >
              ↗
            </span>
          </a>
        )}
        <Link
          href="/settings"
          onClick={onClose}
          className={cn(
            "flex items-center gap-3 border-l-2 px-3 py-2.5 text-[13px] transition-colors",
            pathname.startsWith("/settings")
              ? "border-[#C9A84C] bg-white/[0.025] text-[#F0F0F0]"
              : "border-transparent text-[#77746C] hover:text-[#C0C0C0] hover:bg-white/[0.02]"
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
  // Surfaced for the offline sync trigger — drains pending offline
  // drill attempts back to /api/practice-sessions when this user is
  // online. Empty until auth resolves; the trigger no-ops on empty.
  const [userId, setUserId] = useState("")

  // Publish the browser's IANA timezone as a cookie so server components
  // can compute the USER's day boundaries (streaks, "today" counts,
  // calendar dots). Production servers run UTC — without this, every
  // "local day" was a UTC day and late-evening sessions broke streaks.
  useEffect(() => {
    try {
      // IANA names (letters/digits/_ / + -) are cookie-safe unencoded —
      // encoding would percent-escape the slash and break the server's
      // validation regex.
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
      if (tz && /^[A-Za-z0-9_+/-]{1,64}$/.test(tz) && !document.cookie.includes(`tz=${tz}`)) {
        document.cookie = `tz=${tz}; path=/; max-age=31536000; samesite=lax`
      }
    } catch {
      // No Intl or cookies blocked — server-timezone math remains.
    }
  }, [])

  useEffect(() => {
    const supabase = createSupabaseBrowser()
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) {
        setUserId(user.id)
        // Only display a real authored name. The email-username fallback
        // ("adamzakaryan15") makes the chrome look like a dev build —
        // showing nothing is more premium than showing the handle.
        const fullName = (user.user_metadata?.full_name as string | undefined)?.trim() ?? ""
        const parts = fullName.split(/\s+/).filter(Boolean)
        if (parts.length > 0) {
          setUserName(parts[0])
          setUserInitials(
            parts.length >= 2
              ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
              : parts[0].slice(0, 2).toUpperCase()
          )
        } else {
          setUserName("")
          // Fall back to email-initial only for the avatar, never the visible name.
          const emailInitial = user.email?.[0]?.toUpperCase() ?? ""
          setUserInitials(emailInitial)
        }
      }
    })
  }, [])

  async function handleSignOut() {
    const supabase = createSupabaseBrowser()

    // Capture the current user id BEFORE we sign out — clearing the
    // user-namespaced offline state needs it. If we can't get it, skip
    // the per-user clear and fall back to the blanket cache wipe.
    const { data: { user } } = await supabase.auth.getUser()
    const uid = user?.id

    // Best-effort: sync any unsynced offline drill attempts to the
    // server before we wipe local state.
    if (uid) {
      // Only clear the queue when the drain actually landed: the queue is
      // keyed by user id (no cross-account leak), so on a failed drain the
      // unsynced attempts are kept for this user's next sign-in instead of
      // being silently destroyed.
      try {
        // No follow-up whole-key clear: a successful drain already removed
        // exactly the attempts it sent, so clearing here would delete only
        // attempts appended DURING the drain (e.g. a drill finishing in
        // another tab). A failed drain must keep the queue, and the key is
        // user-scoped so nothing leaks into the next account.
        await drainPendingAttempts(uid)
      } catch {
        // Swallow — sign-out should not block on a sync failure; the
        // user-scoped queue stays for the next session.
      }
    }
    try {
      await clearReviewCache()
    } catch {
      // Swallow — IDB errors should not block sign-out.
    }

    await supabase.auth.signOut()
    router.push("/login")
    router.refresh()
  }

  const currentLabel =
    navItems.find((i) => pathname.startsWith(i.href))?.label ?? "Dashboard"

  return (
    <div
      className="app-workbench flex h-dvh overflow-hidden"
      style={{ backgroundColor: "#0A0A0A" }}
    >
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      {/* Desktop sidebar */}
      <aside
        className="hidden lg:flex flex-col w-60 flex-shrink-0 border-r border-white/[0.07]"
        style={{ backgroundColor: "#0B0B0A" }}
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
            className="relative z-10 w-60 flex flex-col border-r border-white/[0.07]"
            style={{ backgroundColor: "#0B0B0A" }}
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
          className="flex items-center justify-between px-4 sm:px-6 h-14 border-b border-white/[0.07] flex-shrink-0"
          style={{ backgroundColor: "#0B0B0A" }}
        >
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-1.5 rounded-[4px] text-[#888888] hover:text-[#C0C0C0]"
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5" aria-hidden="true" />
            </button>
            <p className="text-[13px] font-semibold text-[#F0F0F0]">
              {currentLabel}
            </p>
          </div>

          {/* Right cluster: study timer + user menu */}
          <div className="flex items-center gap-3">
            <StudyTimer />

          {/* User menu */}
          <DropdownMenu>
            <DropdownMenuTrigger
              className="flex items-center gap-2 p-1.5 rounded-[4px] hover:bg-white/[0.04] transition-colors"
              aria-label="Open user menu"
            >
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
              {userName && (
                <span className="hidden sm:block text-sm text-[#888888]">{userName}</span>
              )}
              <ChevronDown className="w-3.5 h-3.5 text-[#888888]" />
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
          </div>
        </header>

        {/* Page content */}
        <main id="main-content" className="flex-1 overflow-y-auto bg-[#0B0B0A]">
          <div className="p-4 sm:p-6 lg:p-8">{children}</div>
        </main>
      </div>

      {/* Floating beta-feedback launcher — globally available across
          every authenticated page. The widget is fixed-position so it
          doesn't disrupt the layout. */}
      <FeedbackWidget />
      {/* The purchase_completed conversion now fires on /purchase-success
          itself, AFTER server-side session verification (PurchaseTracker) —
          never off editable query params, so ?purchase=success spoofing and
          the old stripe_error false-fire are impossible. */}
      {/* Offline plumbing — all three render null in the common path.
          The registrar attaches /sw.js on mount (production only); the
          sync trigger drains queued offline drills when online; the
          banner only shows when navigator.onLine flips false. Mounted
          last so the banner's stacking context is above other
          absolutely-positioned UI. */}
      <ServiceWorkerRegistrar />
      {userId && <OfflineSyncTrigger userId={userId} />}
      <div className="fixed top-0 inset-x-0 z-[60] pointer-events-none">
        <div className="pointer-events-auto">
          <OfflineBanner />
        </div>
      </div>
    </div>
  )
}
