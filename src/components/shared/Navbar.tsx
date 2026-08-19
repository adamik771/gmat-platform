"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navLinks = [
  { label: "Platform", href: "/course" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Results", href: "/#results" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.08] bg-[#0B0B0A]/95"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[68px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" aria-label="Zakarian GMAT home">
            <span className="text-[#F0F0F0] font-semibold text-[14px]">
              ZAKARIAN
            </span>
            <span
              className="w-1 h-1 rounded-full"
              style={{ backgroundColor: "#C9A84C" }}
            />
            <span className="text-[#F0F0F0] font-semibold text-[14px]">
              GMAT
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-7">
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
          <div className="hidden md:flex items-center gap-4">
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
              className="md:hidden p-2 rounded-[4px] text-[#888888] hover:text-[#F0F0F0] transition-colors"
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
                  className="flex items-center gap-2 mb-8"
                >
                  <span className="text-[#F0F0F0] font-semibold text-[14px]">ZAKARIAN</span>
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-0.5"
                    style={{ backgroundColor: "#C9A84C" }}
                  />
                  <span className="text-[#F0F0F0] font-semibold text-[14px]">GMAT</span>
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
