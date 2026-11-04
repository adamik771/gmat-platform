"use client"

import { useRef } from "react"
import Link from "next/link"
import { ArrowRight, Menu } from "lucide-react"
import { TRIAL_DAYS } from "@/lib/entitlements"
import styles from "@/components/marketing/PublicLanding.module.css"

const links = [
  { href: "#inside", label: "Inside the course" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#plans", label: "Plans" },
]

export default function CandidateHeader({ activePage = "home", className = "" }: { activePage?: "home" | "resources"; className?: string }) {
  const menu = useRef<HTMLDetailsElement>(null)
  const close = () => { if (menu.current) menu.current.open = false }
  const home = "/landing-preview/final"
  const resources = `${home}/resources`
  const sectionLinks = links.map(link => ({ ...link, href: activePage === "resources" ? `${home}${link.href}` : link.href }))
  const HomeLink = activePage === "resources" ? Link : "a"

  return (
    <header className={`${styles.header} ${className}`}>
      <div className={styles.headerInner}>
        <HomeLink href={activePage === "resources" ? home : "#top"} className={styles.brand} aria-label="Zakarian GMAT candidate home">
          <span className={styles.monogram} aria-hidden="true">Z</span>
          <span>Zakarian <strong>GMAT</strong></span>
        </HomeLink>
        <nav className={styles.desktopNav} aria-label="Candidate navigation">
          {sectionLinks.map(link => <HomeLink key={link.href} href={link.href}>{link.label}</HomeLink>)}
          <Link href={resources} aria-current={activePage === "resources" ? "page" : undefined}>Resources</Link>
        </nav>
        <div className={styles.accountActions}>
          <Link href="/login" className={styles.signIn}>Sign in</Link>
          <Link href="/signup" className={styles.smallButton} data-acquisition-action="trial" data-placement="navigation">Start trial <ArrowRight size={15} aria-hidden="true" /></Link>
        </div>
        <details ref={menu} data-public-menu className={styles.mobileMenu} onKeyDown={event => {
          if (event.key === "Escape") {
            close()
            menu.current?.querySelector("summary")?.focus()
          }
        }}>
          <summary aria-label="Navigation menu"><Menu size={23} aria-hidden="true" /></summary>
          <nav aria-label="Mobile candidate navigation">
            {sectionLinks.map(link => <HomeLink key={link.href} href={link.href} onClick={close}>{link.label}</HomeLink>)}
            <Link href={resources} onClick={close} aria-current={activePage === "resources" ? "page" : undefined}>Resources</Link>
            <Link href="/login" onClick={close}>Sign in</Link>
            <Link href="/signup" onClick={close}>Start {TRIAL_DAYS}-day trial <ArrowRight size={16} aria-hidden="true" /></Link>
          </nav>
        </details>
      </div>
    </header>
  )
}
