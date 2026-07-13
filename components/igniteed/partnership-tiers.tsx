import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star, Sparkles, Crown } from "lucide-react"
import Link from "next/link"

export function PartnershipTiers() {
  const tiers = [
    {
      name: "Essential",
      icon: Star,
      iconColor: "#56457f",
      tagline: "The Foundation",
      subtitle: "Perfect for schools beginning their journey.",
      keyInclusion: 'Now includes Administrator "Look-Fors" Training to ensure leadership alignment from Day 1.',
      features: ["Full Curriculum License", "3 Coaching Cycles", "Resource Hub"],
    },
    {
      name: "Premium",
      icon: Sparkles,
      iconColor: "#f27a37",
      tagline: "The Standard",
      subtitle: "Most Popular",
      description: "Deepens adoption with sustained support and community engagement.",
      keyInclusion: "Family & Parent Guide Toolkit and Mid-Year Impact Reports.",
      features: ['"Monthly Office Hours"', "8 Coaching Cycles", "Slack/Teams Channel"],
      popular: true,
    },
    {
      name: "Platinum",
      icon: Crown,
      iconColor: "#2f8ca8",
      tagline: "The Partnership",
      subtitle: "Full institutional roadmap for innovation leaders.",
      keyInclusion: 'Board-Level Strategic Advisory and "Train-the-Trainer" Certification.',
      features: ['Custom "AI Curator" Technical Track', "On-Site Launch", "Policy Consulting"],
    },
  ]



  return (
    <section className="py-20 bg-[#FEFDFB]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#192028] mb-4 text-balance">
            Choose Your Partnership Model
          </h2>
          <p className="text-lg text-[#192028]/80">Pricing for 10-Teacher Cohorts | 12-Month Engagement</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {tiers.map((tier, index) => (
            <Card
              key={index}
              className={`relative ${
                tier.popular ? "border-[#F27A37] border-2 shadow-xl scale-105" : "border-gray-200"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#F27A37] text-[#2c2a33] px-4 py-1 rounded-full text-sm font-medium">
                  {tier.subtitle}
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ backgroundColor: `${tier.iconColor}15` }}
                >
                  <tier.icon className="w-7 h-7" style={{ color: tier.iconColor }} />
                </div>
                <CardTitle className="text-2xl font-semibold text-[#192028]">{tier.name}</CardTitle>
                <p className="text-[#56457f] font-medium mt-2">{tier.tagline}</p>
                {!tier.popular && tier.subtitle && <p className="text-sm text-[#192028]/60 mt-1">{tier.subtitle}</p>}
              </CardHeader>
              <CardContent>
                {/* Key Inclusion highlight */}
                <div className="bg-[#56457f]/5 rounded-lg p-3 mb-4">
                  <p className="text-sm text-[#192028] font-medium">
                    <span className="text-[#56457f] font-semibold">Key Inclusion:</span> {tier.keyInclusion}
                  </p>
                </div>

                <p className="text-sm text-[#192028]/70 mb-4">Includes:</p>
                <ul className="space-y-3">
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#F27A37] flex-shrink-0 mt-0.5" />
                      <span className="text-[#192028]/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mb-12 bg-[#2f8ca8]/5 rounded-lg p-6 border border-[#2f8ca8]/20">
          <h3 className="text-lg font-semibold text-[#216b80] mb-2">The Procurement Concierge</h3>
          <p className="text-[#192028]/80 text-sm leading-relaxed">
            Program fees cover instructional design and strategy. Fees do not include software licensing. However, we
            act as your <span className="font-semibold">Procurement Concierge</span>: we help you evaluate, select, and
            negotiate the best "Best-in-Class" model stack (e.g., ChatGPT Plus, Claude, or Gemini) for your specific
            needs.
          </p>
        </div>

        <div className="text-center">
          <Link href="/igniteed/pricing">
            <Button
              size="lg"
              className="bg-[#F27A37] hover:bg-[#F27A37]/90 text-[#2c2a33] font-medium text-lg px-10 py-6 h-auto"
            >
              Book a Strategy Session
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
