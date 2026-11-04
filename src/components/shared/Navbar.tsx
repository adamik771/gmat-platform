"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import publicTheme from "@/components/marketing/PublicTheme.module.css"

const navLinks = [
  { label: "Platform", href: "/course" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
]

const navigationFont = {
  fontFamily: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
} as const

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav
      aria-label="Public navigation"
      className={`public-navigation fixed top-0 left-0 right-0 z-50 border-b ${publicTheme.navigation}`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="group flex flex-col gap-0.5" aria-label="Zakarian GMAT home">
            <span className="flex items-center gap-2 text-[color:var(--public-ink,#F0F0F0)] font-semibold text-[15px] leading-none">
              <span>ZAKARIAN</span>
              <span
                className="w-1 h-1 rounded-full"
                style={{ backgroundColor: "var(--public-action,#C9A84C)" }}
              />
              <span>GMAT</span>
            </span>
            <span className="text-[11px] leading-none text-[color:var(--public-muted,#A5A59B)] group-hover:text-[color:var(--public-muted,#B9B7AE)] transition-colors">
              Preparation system
            </span>
          </Link>

          {/* Desktop Nav */}
          <div
            className="hidden lg:flex items-center gap-7 xl:gap-9"
            style={navigationFont}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className="group relative py-2 text-[15px] leading-none font-medium text-[color:var(--public-muted,#AAA69C)] hover:text-[color:var(--public-ink,#F0F0F0)] transition-colors duration-150"
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[var(--public-action,#C9A84C)] transition-transform duration-150 group-hover:scale-x-100"
                />
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div
            className="hidden lg:flex items-center gap-5"
            style={navigationFont}
          >
            <Link
              href="/login"
              className="text-[14px] font-medium text-[color:var(--public-muted,#AAA69C)] hover:text-[color:var(--public-ink,#F0F0F0)] transition-colors"
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2.5 rounded-[4px] text-[14px] font-semibold transition-colors duration-150 hover:bg-[var(--public-action-hover,#D5B765)]"
              style={{
                backgroundColor: "var(--public-action,#C9A84C)",
                color: "var(--public-on-accent,#0A0A0A)",
              }}
            >
              Start 7-day trial
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="lg:hidden h-11 w-11 inline-flex items-center justify-center rounded-lg text-[color:var(--public-muted,#B9B7AE)] hover:text-[color:var(--public-ink,#F0F0F0)] transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className={`w-72 ${publicTheme.drawer}`}
            >
              <SheetTitle className="sr-only">Site navigation</SheetTitle>
              <div className="flex flex-col h-full pt-6">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="flex flex-col items-start gap-0.5 mb-8"
                >
                  <span className="flex items-center gap-2 text-[color:var(--public-ink,#F0F0F0)] font-semibold text-[15px] leading-none">
                    <span>ZAKARIAN</span>
                    <span
                      className="w-1 h-1 rounded-full"
                      style={{ backgroundColor: "var(--public-action,#C9A84C)" }}
                    />
                    <span>GMAT</span>
                  </span>
                  <span className="text-[10px] leading-none text-[color:var(--public-muted,#77746C)]">
                    Preparation system
                  </span>
                </Link>

                <div className="flex flex-col gap-1" style={navigationFont}>
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      aria-current={pathname === link.href ? "page" : undefined}
                      onClick={() => setOpen(false)}
                      className="px-3 py-3.5 rounded-[4px] text-[15px] font-medium text-[color:var(--public-muted,#AAA69C)] hover:text-[color:var(--public-ink,#F0F0F0)] hover:bg-[var(--public-surface-hover,rgba(255,255,255,0.04))] transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                <div
                  className="mt-auto flex flex-col gap-3"
                  style={navigationFont}
                >
                  <Link
                    href="/login"
                    onClick={() => setOpen(false)}
                    className="text-center px-4 py-2.5 rounded-[4px] text-[14px] font-medium text-[color:var(--public-muted,#AAA69C)] border border-[var(--public-line,rgba(255,255,255,0.08))] hover:text-[color:var(--public-ink,#F0F0F0)] transition-colors"
                  >
                    Sign in
                  </Link>
                  <Link
                    href="/signup"
                    onClick={() => setOpen(false)}
                    className="text-center px-4 py-2.5 rounded-[4px] text-[14px] font-semibold hover:bg-[var(--public-action-hover,#D5B765)] transition-colors"
                    style={{ backgroundColor: "var(--public-action,#C9A84C)", color: "var(--public-on-accent,#0A0A0A)" }}
                  >
                    Start 7-day trial
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
