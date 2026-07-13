"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import Link from "next/link"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    if (window.location.pathname === "/igniteed") {
      const element = document.getElementById(id)
      if (element) {
        const offset = 80
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        })
      }
    } else {
      window.location.href = `/igniteed#${id}`
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex flex-col">
            <Link href="/igniteed" className="text-2xl font-bold font-sans tracking-[-0.025em] leading-none">
              <span className="text-[#56457f]">Ignite</span>
              <span className="text-[#f27a37]">Ed</span>
            </Link>
            <Link href="/" className="text-[11px] text-[#6e6a75] font-medium mt-0.5 hover:text-[#56457f] transition-colors">
              by Ignite Curiosity Lab
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/igniteed/program" className="text-[#192028] hover:text-[#F27A37] transition-colors font-bold">
              Program
            </Link>
            <Link href="/igniteed/impact" className="text-[#192028] hover:text-[#F27A37] transition-colors font-bold">
              Impact
            </Link>
            <Link href="/igniteed/about" className="text-[#192028] hover:text-[#F27A37] transition-colors font-bold">
              About
            </Link>
            <Link href="/igniteed/pricing" className="text-[#192028] hover:text-[#F27A37] transition-colors font-bold">
              Pricing
            </Link>
            <Link href="/igniteed/readiness-review">
              <Button className="bg-[#F27A37] hover:bg-[#F27A37]/90 text-[#2c2a33] font-medium">
                Book Your AI Readiness Review
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" aria-label="Menu">
            <svg className="w-6 h-6 text-[#192028]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
