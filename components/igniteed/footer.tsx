import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#192028] text-white">
      {/* Main Footer */}
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Column 1: Brand & Identity */}
            <div>
              <div className="inline-flex flex-col mb-6">
                <Link href="/igniteed" className="text-3xl font-bold font-sans tracking-[-0.025em] leading-none">
                  <span className="text-[#56457f]">Ignite</span>
                  <span className="text-[#f27a37]">Ed</span>
                </Link>
                <Link href="/" className="text-xs text-white/50 font-medium mt-1 hover:text-white/80 transition-colors">
                  by Ignite Curiosity Lab
                </Link>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                IgniteEd is a strategic capacity-building partnership. We move schools from tool-fatigue to
                instructional agency by training teachers as Instructional Architects.
              </p>
              <p className="text-[#f27a37] font-medium text-sm">Platform Agnostic. Human-Centered.</p>
            </div>

            {/* Column 2: Navigation (Center) */}
            <div className="md:mx-auto">
              <h3 className="text-white font-semibold mb-6">Navigation</h3>
              <nav className="space-y-3">
                <Link
                  href="/igniteed/program"
                  className="block text-white/70 hover:text-[#f27a37] transition-colors text-sm"
                >
                  The Program
                </Link>
                <Link
                  href="/igniteed/impact"
                  className="block text-white/70 hover:text-[#f27a37] transition-colors text-sm"
                >
                  Impact
                </Link>
                <Link
                  href="/igniteed/about"
                  className="block text-white/70 hover:text-[#f27a37] transition-colors text-sm"
                >
                  About the Lab
                </Link>
                <Link
                  href="/igniteed/pricing"
                  className="block text-white/70 hover:text-[#f27a37] transition-colors text-sm"
                >
                  Pricing
                </Link>
              </nav>
            </div>

            {/* Column 3: Call to Action */}
            <div>
              <h3 className="text-white font-semibold mb-6">Ready to lead responsibly?</h3>
              <Button
                asChild
                className="bg-[#f27a37] hover:bg-[#f27a37]/90 text-[#2c2a33] font-medium mb-4 w-full md:w-auto"
              >
                <Link href="/igniteed/readiness-review">
                  Book Your AI Readiness Review
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <p className="text-white/70 text-base mb-3">
                <a
                  href="mailto:hello@ignitecuriositylab.ai"
                  className="hover:text-[#f27a37] transition-colors"
                >
                  hello@ignitecuriositylab.ai
                </a>
              </p>
              <a
                href="/igniteed/IgniteEd-Program-Overview.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-white/70 text-sm hover:text-[#f27a37] transition-colors underline underline-offset-4"
              >
                Download Program Overview (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Footer */}
      <div className="border-t border-white/10 py-6 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-white/50">
              © 2026 Ignite Curiosity Lab. All Rights Reserved.
            </p>
            <p className="text-white/50 italic">
              Where human curiosity meets responsible AI.
            </p>
            <a href="#" className="text-white/50 hover:text-[#f27a37] transition-colors">
              Privacy Policy (FERPA/COPPA Compliant)
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
