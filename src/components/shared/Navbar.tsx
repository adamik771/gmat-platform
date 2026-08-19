"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navLinks = [
  { label: "Platform", href: "/course" },
  { label: "Curriculum", href: "/course#curriculum" },
  { label: "Results", href: "/#results" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.08] bg-[#0B0B0A]/95"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="group flex flex-col gap-0.5" aria-label="Zakarian GMAT home">
            <span className="flex items-center gap-2 text-[#F0F0F0] font-semibold text-[15px] leading-none">
              <span>ZAKARIAN</span>
              <span
                className="w-1 h-1 rounded-full"
                style={{ backgroundColor: "#C9A84C" }}
              />
              <span>GMAT</span>
            </span>
            <span className="text-[10px] leading-none text-[#77746C] group-hover:text-[#A39F95] transition-colors">
              Preparation system
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] text-[#8B887F] hover:text-[#F0F0F0] transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/login"
              className="text-[13px] text-[#8B887F] hover:text-[#F0F0F0] transition-colors"
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2.5 rounded-[4px] text-[13px] font-semibold transition-colors duration-150 hover:bg-[#D5B765]"
              style={{
                backgroundColor: "#C9A84C",
                color: "#0A0A0A",
              }}
            >
              Start trial
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="lg:hidden p-2 rounded-[4px] text-[#888888] hover:text-[#F0F0F0] transition-colors"
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
                  className="flex flex-col items-start gap-0.5 mb-8"
                >
                  <span className="flex items-center gap-2 text-[#F0F0F0] font-semibold text-[15px] leading-none">
                    <span>ZAKARIAN</span>
                    <span
                      className="w-1 h-1 rounded-full"
                      style={{ backgroundColor: "#C9A84C" }}
                    />
                    <span>GMAT</span>
                  </span>
                  <span className="text-[10px] leading-none text-[#77746C]">
                    Preparation system
                  </span>
                </Link>

                <div className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="px-3 py-3 rounded-[4px] text-[13px] text-[#888888] hover:text-[#F0F0F0] hover:bg-white/[0.04] transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                <div className="mt-auto flex flex-col gap-3">
                  <Link
                    href="/login"
                    onClick={() => setOpen(false)}
                    className="text-center px-4 py-2.5 rounded-[4px] text-[13px] text-[#888888] border border-white/[0.08] hover:text-[#F0F0F0] transition-colors"
                  >
                    Sign in
                  </Link>
                  <Link
                    href="/signup"
                    onClick={() => setOpen(false)}
                    className="text-center px-4 py-2.5 rounded-[4px] text-[13px] font-semibold hover:bg-[#D5B765] transition-colors"
                    style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
                  >
                    Start trial
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
