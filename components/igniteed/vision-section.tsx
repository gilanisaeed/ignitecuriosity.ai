import { Card, CardContent } from "@/components/ui/card"
import { Users, Globe, Shield } from "lucide-react"

export function VisionSection() {
  const features = [
    {
      icon: Users,
      title: "Human-Centered Design",
      description:
        "We believe curiosity is the driving force behind meaningful learning. IgniteEd positions educators as Instructional Architects, not just users of tools.",
      color: "#56457f", // Deep Curiosity Purple
    },
    {
      icon: Globe,
      title: "Platform Agnostic",
      description:
        "Don't get locked into a single vendor. We teach enduring design principles that work on any platform (ChatGPT, Claude, Gemini, or Copilot), ensuring your staff's skills are future-proof.",
      color: "#f27a37", // Curiosity Orange
    },
    {
      icon: Shield,
      title: "Ethical & Responsible",
      description:
        "Safety & Integrity First. We equip your school with a customized Responsible AI Policy, bias mitigation strategies, and student guidelines to protect data and dignity.",
      color: "#2f8ca8", // Curiosity Teal
    },
  ]

  return (
    <section className="py-20 bg-[#FEFDFB]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-semibold text-center text-[#192028] mb-4 text-balance">
          AI Should Elevate Teachers, Not Replace Them.
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg bg-white">
              <CardContent className="p-8">
                <div
                  className="w-16 h-16 rounded-lg flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${feature.color}15` }}
                >
                  <feature.icon className="w-8 h-8" style={{ color: feature.color }} />
                </div>
                <h3 className="text-2xl font-semibold text-[#192028] mb-4">{feature.title}</h3>
                <p className="text-[#192028]/80 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
