import Link from "next/link"
import { notFound } from "next/navigation"
import { BarChart3, MessageSquareText, UsersRound } from "lucide-react"
import { isAdmin } from "@/lib/admin-auth"
import { getRequestUser } from "@/lib/supabase/server"

export const dynamic = "force-dynamic"

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const user = await getRequestUser()
  if (!isAdmin(user)) notFound()

  return (
    <div className="mx-auto max-w-[1540px] space-y-5">
      <nav
        aria-label="Admin tools"
        className="flex max-w-full items-center gap-1 overflow-x-auto border-b border-white/[0.07] pb-3"
      >
        <AdminLink href="/admin/students" icon={UsersRound} label="Student activity" />
        <AdminLink href="/admin/feedback" icon={MessageSquareText} label="Feedback" />
        <AdminLink href="/qa/psychometrics" icon={BarChart3} label="Item quality" />
      </nav>
      {children}
    </div>
  )
}

function AdminLink({
  href,
  icon: Icon,
  label,
}: {
  href: string
  icon: React.ComponentType<{ className?: string }>
  label: string
}) {
  return (
    <Link
      href={href}
      className="flex h-9 shrink-0 items-center gap-2 px-3 text-xs font-medium text-[#888888] transition-colors hover:bg-white/[0.035] hover:text-[#F0F0F0]"
    >
      <Icon className="h-3.5 w-3.5" />
      {label}
    </Link>
  )
}
