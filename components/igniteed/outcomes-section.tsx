import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Users, Building2 } from "lucide-react"

export function OutcomesSection() {
  const outcomes = [
    {
      icon: Users,
      title: "For Teachers",
      subtitle: "Capability & Confidence",
      shift: "From AI Anxiety → AI Fluency.",
      gain: "Mastery of adaptive frameworks and the ability to select the right tool for any task.",
      color: "#56457f", // Deep Curiosity Purple
      textColor: "#56457f", // AA-safe on white
    },
    {
      icon: GraduationCap,
      title: "For Students",
      subtitle: "Equity & Personalization",
      shift: "From One-size-fits-all → Adaptive Pathways.",
      gain: "Deeper engagement through multi-modal support and clear, ethical guidelines.",
      color: "#f27a37", // Curiosity Orange
      textColor: "#c0531f", // accent-strong, AA-safe on white
    },
    {
      icon: Building2,
      title: "For the School",
      subtitle: "Governance & Leadership",
      shift: "From Wild West → Responsible Infrastructure.",
      gain: "A codified Responsible AI Policy, reduced liability risk, and a reputation as an innovation leader.",
      color: "#2f8ca8", // Curiosity Teal
      textColor: "#216b80", // teal-text, AA-safe on white
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-[#f8f7f5] to-[#FEFDFB]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-semibold text-center text-[#192028] mb-4 text-balance">
          ROI Beyond the Classroom
        </h2>
        <p className="text-lg text-[#192028]/70 text-center mb-16 max-w-2xl mx-auto">
          Tangible outcomes that transform your entire learning community.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {outcomes.map((outcome, index) => (
            <Card key={index} className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: outcome.color }}
                >
                  <outcome.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-[#192028] mb-1">{outcome.title}</h3>
                <p className="font-medium mb-4" style={{ color: outcome.textColor }}>
                  {outcome.subtitle}
                </p>

                <div className="rounded-lg p-3 mb-4" style={{ backgroundColor: `${outcome.color}10` }}>
                  <p className="text-sm font-medium" style={{ color: outcome.textColor }}>
                    {outcome.shift}
                  </p>
                </div>

                <p className="text-[#192028]/80 leading-relaxed">
                  <span className="font-medium text-[#192028]">The Gain:</span> {outcome.gain}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
