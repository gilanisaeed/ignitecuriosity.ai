import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/igniteed/navigation"
import { Footer } from "@/components/igniteed/footer"
import { Check, Star, Sparkles, Crown, Shield, ArrowRight, Cpu, Sigma } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#FEFDFB]">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#192028] mb-4 font-sans">
            Choose Your Partnership Model
          </h1>
          <p className="text-xl text-[#192028]/70 mb-4">Pricing for 10-Teacher Cohorts | 12-Month Engagement</p>
          <p className="text-lg text-[#192028]/60 max-w-3xl mx-auto">
            <span className="font-semibold">Strategic Context:</span> IgniteEd is a capacity-building fellowship, not a
            one-off workshop. We partner with schools for a full year to ensure deep, measurable instructional
            transformation.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Tier 1: Essential */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-[#56457f]/30 transition-colors">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-6 h-6 text-[#56457f]" />
                <span className="text-sm font-semibold text-[#56457f] uppercase tracking-wide">Tier 1</span>
              </div>
              <h3 className="text-2xl font-bold text-[#192028] mb-2">Essential</h3>
              <p className="text-[#192028]/70 mb-2 font-medium">The Foundation.</p>
              <p className="text-[#192028]/60 mb-6">Perfect for schools beginning their journey.</p>

              <div className="bg-[#56457f]/5 rounded-lg p-4 mb-6">
                <p className="text-sm font-semibold text-[#56457f]">Best For:</p>
                <p className="text-sm text-[#192028]/70">
                  Schools that need a safe, structured launchpad for responsible AI adoption.
                </p>
              </div>

              <h4 className="font-semibold text-[#192028] mb-4">Key Inclusions:</h4>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#56457f] mt-0.5 flex-shrink-0" />
                  <span className="text-[#192028]/70">
                    <span className="font-medium text-[#192028]">Administrator "Look-Fors" Training:</span> We train
                    your leadership team on how to observe and evaluate AI-enabled instruction from Day 1.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#56457f] mt-0.5 flex-shrink-0" />
                  <span className="text-[#192028]/70">
                    <span className="font-medium text-[#192028]">Full Curriculum License:</span> Access to Modules 1-8
                    for the cohort.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#56457f] mt-0.5 flex-shrink-0" />
                  <span className="text-[#192028]/70">
                    <span className="font-medium text-[#192028]">3 Coaching Cycles:</span> Small-group capability
                    building.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#56457f] mt-0.5 flex-shrink-0" />
                  <span className="text-[#192028]/70">
                    <span className="font-medium text-[#192028]">Resource Hub Access:</span> Templates, policy drafts,
                    and prompt libraries.
                  </span>
                </li>
              </ul>

              <Button className="w-full bg-[#F27A37] hover:bg-[#F27A37]/90 text-[#2C2A33] font-medium">
                Get Started
              </Button>
            </div>

            {/* Tier 2: Premium */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-[#F27A37] relative transform md:scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#F27A37] text-[#2C2A33] px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-[#F27A37]" />
                <span className="text-sm font-semibold text-[#F27A37] uppercase tracking-wide">Tier 2</span>
              </div>
              <h3 className="text-2xl font-bold text-[#192028] mb-2">Premium</h3>
              <p className="text-[#192028]/70 mb-2 font-medium">The Standard.</p>
              <p className="text-[#192028]/60 mb-6">
                Deepens adoption with sustained support and community engagement.
              </p>

              <div className="bg-[#56457f]/5 rounded-lg p-4 mb-6">
                <p className="text-sm font-semibold text-[#56457f]">Best For:</p>
                <p className="text-sm text-[#192028]/70">
                  Schools seeking consistent adoption across grade bands and data-backed evidence of impact.
                </p>
              </div>

              <h4 className="font-semibold text-[#192028] mb-4">Everything in Essential, plus:</h4>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#F27A37] mt-0.5 flex-shrink-0" />
                  <span className="text-[#192028]/70">
                    <span className="font-medium text-[#192028]">Family & Parent Guide Toolkit:</span> Ready-to-use
                    materials to build trust with families.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#F27A37] mt-0.5 flex-shrink-0" />
                  <span className="text-[#192028]/70">
                    <span className="font-medium text-[#192028]">Mid-Year Impact Reports:</span> Data analysis of cohort
                    growth and instructional shifts.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#F27A37] mt-0.5 flex-shrink-0" />
                  <span className="text-[#192028]/70">
                    <span className="font-medium text-[#192028]">Monthly "Office Hours":</span> Drop-in expert support
                    for teachers.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#F27A37] mt-0.5 flex-shrink-0" />
                  <span className="text-[#192028]/70">
                    <span className="font-medium text-[#192028]">8 Coaching Cycles:</span> A mix of groups and targeted
                    1:1 support.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#F27A37] mt-0.5 flex-shrink-0" />
                  <span className="text-[#192028]/70">
                    <span className="font-medium text-[#192028]">Dedicated Slack/Teams Channel:</span> Real-time answers
                    for your staff.
                  </span>
                </li>
              </ul>

              <Button className="w-full bg-[#F27A37] hover:bg-[#F27A37]/90 text-[#2C2A33] font-medium">
                Get Started
              </Button>
            </div>

            {/* Tier 3: Platinum */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-[#2f8ca8]/30 transition-colors">
              <div className="flex items-center gap-2 mb-4">
                <Crown className="w-6 h-6 text-[#2f8ca8]" />
                <span className="text-sm font-semibold text-[#216B80] uppercase tracking-wide">Tier 3</span>
              </div>
              <h3 className="text-2xl font-bold text-[#192028] mb-2">Platinum</h3>
              <p className="text-[#192028]/70 mb-2 font-medium">The Partnership.</p>
              <p className="text-[#192028]/60 mb-6">A full institutional roadmap for innovation leaders.</p>

              <div className="bg-[#2f8ca8]/5 rounded-lg p-4 mb-6">
                <p className="text-sm font-semibold text-[#216B80]">Best For:</p>
                <p className="text-sm text-[#192028]/70">
                  Schools committed to becoming regional leaders in AI innovation and governance.
                </p>
              </div>

              <h4 className="font-semibold text-[#192028] mb-4">Everything in Premium, plus:</h4>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#2f8ca8] mt-0.5 flex-shrink-0" />
                  <span className="text-[#192028]/70">
                    <span className="font-medium text-[#192028]">"Train-the-Trainer" Certification:</span> We certify
                    your teacher-leaders to run the program internally next year.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#2f8ca8] mt-0.5 flex-shrink-0" />
                  <span className="text-[#192028]/70">
                    <span className="font-medium text-[#192028]">Strategic Board-Level Advisory:</span> Direct
                    consultation with school boards or owners to align AI implementation with long-term institutional
                    goals and risk management.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#2f8ca8] mt-0.5 flex-shrink-0" />
                  <span className="text-[#192028]/70">
                    <span className="font-medium text-[#192028]">Custom "AI Curator" Track:</span> Technical
                    architecture training for your IT staff (included).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#2f8ca8] mt-0.5 flex-shrink-0" />
                  <span className="text-[#192028]/70">
                    <span className="font-medium text-[#192028]">On-Site Launch Event:</span> Kickoff or Capstone
                    celebration at your school.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#2f8ca8] mt-0.5 flex-shrink-0" />
                  <span className="text-[#192028]/70">
                    <span className="font-medium text-[#192028]">Policy Consulting:</span> Hands-on drafting of your
                    school&apos;s Responsible AI Handbook to ensure safety, privacy, and academic integrity.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#2f8ca8] mt-0.5 flex-shrink-0" />
                  <span className="text-[#192028]/70">
                    <span className="font-medium text-[#192028]">Curriculum Alignment:</span> Custom mapping of AI
                    competencies directly to your school&apos;s unique Graduate Profile and strategic academic goals.
                  </span>
                </li>
              </ul>

              <Button className="w-full bg-[#F27A37] hover:bg-[#F27A37]/90 text-[#2C2A33] font-medium">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Add-Ons */}
      <section className="pb-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#192028] mb-2">Specialized Add-Ons</h2>
            <p className="text-[#192028]/60">Optional tracks to extend any partnership tier.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 border border-gray-200 flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-[#2f8ca8]/10 flex items-center justify-center flex-shrink-0">
                <Cpu className="w-6 h-6 text-[#2f8ca8]" aria-hidden="true" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-semibold text-[#192028]">{'"The AI Curator" (Technical Track)'}</h3>
                </div>
                <p className="text-sm font-semibold text-[#216B80] mb-2">Included in Tier 3</p>
                <p className="text-sm text-[#192028]/70">
                  Technical architecture training for IT directors and CS staff — model architectures, deployment, and
                  security.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-[#2f8ca8]/10 flex items-center justify-center flex-shrink-0">
                <Sigma className="w-6 h-6 text-[#2f8ca8]" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#192028] mb-1">
                  {'Math Modeling Track ("The Department Pivot")'}
                </h3>
                <p className="text-sm font-semibold text-[#216B80] mb-2">Available for Tier 2/3 on request</p>
                <p className="text-sm text-[#192028]/70">
                  A focused pathway helping math departments redesign instruction around adaptive, AI-enabled modeling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Procurement Concierge */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-[#56457f] to-[#56457f]/90 rounded-2xl p-8 md:p-12 text-white">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-[#F27A37]" />
              <h2 className="text-2xl md:text-3xl font-bold font-sans">The Procurement Concierge</h2>
            </div>

            <p className="text-white/80 mb-6">
              <span className="font-semibold text-white">Important Note on Software Licensing:</span> Program fees cover
              instructional design, strategy, and training. They do not include software licenses.
            </p>

            <p className="text-white/90 mb-6">
              However, as part of your partnership, we act as your{" "}
              <span className="font-semibold text-[#F27A37]">Procurement Concierge</span>. We help you:
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#F27A37] mt-0.5 flex-shrink-0" />
                <span className="text-white/90">
                  Evaluate the best model stack for your specific needs (e.g., ChatGPT Plus vs. Claude vs. Gemini).
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#F27A37] mt-0.5 flex-shrink-0" />
                <span className="text-white/90">Negotiate enterprise terms if applicable.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#F27A37] mt-0.5 flex-shrink-0" />
                <span className="text-white/90">Vet tools for privacy and data compliance.</span>
              </li>
            </ul>

            <p className="text-white/70 text-sm italic">
              We remain tool-agnostic to ensure you always have the best-in-class technology.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#56457f] to-[#2f8ca8]">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-sans">Ready to Compare Options?</h2>
          <p className="text-xl text-white/80 mb-8">
            {"We'll walk your leadership team through the tiers and build a custom rollout timeline."}
          </p>
          <Button asChild size="lg" className="bg-[#F27A37] hover:bg-[#F27A37]/90 text-[#2C2A33] text-lg px-8 py-6 h-auto">
            <Link href="/igniteed/readiness-review">
              Book a Strategy Session
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
