"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Platform", href: "/course" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Results", href: "/about#results" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/[0.06]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 group">
            <span className="text-[#F0F0F0] font-bold text-lg tracking-tight">
              ZAKARIAN
            </span>
            <span
              className="w-1.5 h-1.5 rounded-full mt-0.5 transition-transform group-hover:scale-125"
              style={{ backgroundColor: "#C9A84C" }}
            />
            <span className="text-[#F0F0F0] font-bold text-lg tracking-tight">
              GMAT
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#888888] hover:text-[#F0F0F0] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm text-[#888888] hover:text-[#F0F0F0] transition-colors"
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
              style={{
                backgroundColor: "#C9A84C",
                color: "#0A0A0A",
              }}
            >
              Start Free Trial
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="md:hidden p-2 rounded-lg text-[#888888] hover:text-[#F0F0F0] transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-72 border-white/[0.08]"
              style={{ backgroundColor: "#111111" }}
            >
              <div className="flex flex-col h-full pt-6">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-1 mb-8"
                >
                  <span className="text-[#F0F0F0] font-bold text-lg">ZAKARIAN</span>
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-0.5"
                    style={{ backgroundColor: "#C9A84C" }}
                  />
                  <span className="text-[#F0F0F0] font-bold text-lg">GMAT</span>
                </Link>

                <div className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="px-3 py-3 rounded-lg text-[#888888] hover:text-[#F0F0F0] hover:bg-white/5 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                <div className="mt-auto flex flex-col gap-3">
                  <Link
                    href="/login"
                    onClick={() => setOpen(false)}
                    className="text-center px-4 py-2.5 rounded-lg text-sm text-[#888888] border border-white/[0.08] hover:text-[#F0F0F0] transition-colors"
                  >
                    Sign in
                  </Link>
                  <Link
                    href="/signup"
                    onClick={() => setOpen(false)}
                    className="text-center px-4 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
                  >
                    Start Free Trial
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
