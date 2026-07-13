import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, BarChart3, Scale, Rocket } from "lucide-react"

export function ProgramSection() {
  const pillars = [
    {
      icon: Lightbulb,
      title: "AI-Enabled Instruction",
      description: 'Crafting high-quality, human-led lessons using the "Best Brain for the Job."',
      color: "#56457f", // Deep Curiosity Purple
    },
    {
      icon: BarChart3,
      title: "Data-Informed Teaching",
      description: 'Using AI as a "Data Analyst" to proactively respond to student needs.',
      color: "#f27a37", // Curiosity Orange
    },
    {
      icon: Scale,
      title: "Ethical Governance",
      description: 'Establishing clear "Responsible AI" policies for vetting tools and protecting privacy.',
      color: "#2f8ca8", // Curiosity Teal
    },
    {
      icon: Rocket,
      title: "Innovation Pilots",
      description: "Running Plan-Do-Study-Act (PDSA) cycles to measure real impact.",
      color: "#192028", // Midnight Slate
    },
  ]

  const phases = [
    {
      name: "PHASE 1: IGNITE & ALIGN",
      modules: [
        'Module 1: Foundations of AI-Enabled Instruction (The "Model Face-Off")',
        "Module 2: AI Ethics, Bias Mitigation & Governance",
        "Module 3: Designing Adaptive Learning Frameworks",
      ],
    },
    {
      name: "PHASE 2: BUILD & ANALYZE",
      modules: [
        "Module 4: AI-Enhanced Instructional Design Studio",
        "Module 5: Data-Informed Teaching & Learning Analytics",
      ],
    },
    {
      name: "PHASE 3: APPLY & PILOT",
      modules: [
        "Module 6: Subject-Specific AI-Enabled Instruction",
        "Module 7: AI-Enabled Classroom Pilot (PDSA Cycle)",
      ],
    },
    {
      name: "PHASE 4: SCALE & CELEBRATE",
      modules: [
        "Module 8: The Capstone Portfolio (The Instructional Architect)",
        "Module 9: Technical Sovereignty (IT/CS Track)",
      ],
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-[#FEFDFB] to-[#f8f7f5]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#192028] mb-6 text-balance">
            More Than Professional Development. A Transformation.
          </h2>
          <p className="text-lg text-[#192028]/80 leading-relaxed">
            IgniteEd is a year-long capability-building program designed to take your faculty from exploration to
            mastery. We align with your school's mission to integrate AI safely and effectively.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center text-[#192028] mb-10">Key Program Pillars</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => (
              <Card
                key={index}
                className="border-2 border-[#56457f]/20 bg-white hover:border-[#F27A37] transition-colors"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: `${pillar.color}15` }}
                  >
                    <pillar.icon className="w-6 h-6" style={{ color: pillar.color }} />
                  </div>
                  <h4 className="text-lg font-semibold text-[#192028] mb-2">{pillar.title}</h4>
                  <p className="text-sm text-[#192028]/70 leading-relaxed">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center bg-[#2f8ca8]/5 rounded-lg p-6 max-w-3xl mx-auto border-2 border-[#2f8ca8]/20 mb-16">
          <p className="text-[#216b80] font-medium">
            Platform Agnostic: Seamless integration with Google Workspace, Microsoft 365, and Canvas.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold text-center text-[#192028] mb-8">Roadmap Preview</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {phases.map((phase, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border border-[#56457f]/20 hover:border-[#F27A37] transition-colors"
              >
                <h4 className="text-sm font-bold text-[#56457f] mb-4 uppercase tracking-wide">{phase.name}</h4>
                <ul className="space-y-2">
                  {phase.modules.map((module, mIndex) => (
                    <li key={mIndex} className="text-sm text-[#192028]/80 leading-relaxed">
                      {module}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
