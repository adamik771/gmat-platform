import React from 'react'
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Zakarian GMAT — Premium Prep System",
  description:
    "The structured GMAT prep system that took Adam from 565 to 735. Built for ambitious students who don't have time for guesswork.",
  keywords: ["GMAT", "GMAT prep", "MBA", "score improvement", "test prep"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body
        className="min-h-screen antialiased"
        style={{ backgroundColor: "#0A0A0A", color: "#F0F0F0" }}
      >
        {children}
      </body>
    </html>
  )
}
