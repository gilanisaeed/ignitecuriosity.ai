import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/igniteed/navigation"
import { Footer } from "@/components/igniteed/footer"
import {
  BookOpen,
  Layers,
  Shield,
  GraduationCap,
  Users,
  Calendar,
  MonitorPlay,
  BarChart3,
  Scale,
  Microscope,
  FlaskConical,
  Award,
  Sparkles,
} from "lucide-react"

export default function ProgramPage() {
  return (
    <main className="min-h-screen bg-[#FEFDFB]">
      <Navigation />

      {/* Hero Section - The Hook */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#192028] mb-6 leading-tight">
            A Year-Long Journey to <span className="text-[#F27A37]">AI Mastery</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#56457f] mb-6 font-medium">
            Move your educators from being "users of tools" to "Instructional Architects" who design adaptive,
            human-centered learning.
          </p>
          <p className="text-lg text-[#192028]/70 max-w-3xl mx-auto">
            IgniteEd is a future-ready instructional transformation model. We ensure AI elevates—never replaces—human
            teaching, critical thinking, and rigorous inquiry.
          </p>
        </div>
      </section>

      {/* Core Pillars Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#56457f]/5 to-[#F27A37]/5">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#192028] mb-4">The Core Pillars</h2>
          <p className="text-center text-[#192028]/70 mb-12 max-w-2xl mx-auto">
            Our pedagogical approach builds trust with skeptical academics and delivers lasting transformation.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pedagogically Driven */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#56457f]/10 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#56457f]/10 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="w-7 h-7 text-[#56457f]" />
              </div>
              <h3 className="text-xl font-semibold text-[#192028] mb-3">Pedagogically Driven</h3>
              <p className="text-[#192028]/70">
                Adaptive learning is the goal; AI is just the accelerator. We focus on Instructional Architecture first,
                tools second.
              </p>
            </div>

            {/* Platform Agnostic */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#56457f]/10 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#f27a37]/10 rounded-xl flex items-center justify-center mb-6">
                <Layers className="w-7 h-7 text-[#f27a37]" />
              </div>
              <h3 className="text-xl font-semibold text-[#192028] mb-3">Platform Agnostic</h3>
              <p className="text-[#192028]/70">
                We refuse to lock your school into a single vendor. We teach design principles that work on any platform
                (ChatGPT, Claude, Gemini, or Copilot), ensuring your staff's skills are future-proof.
              </p>
            </div>

            {/* Ethically Grounded */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#56457f]/10 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#2f8ca8]/10 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-[#2f8ca8]" />
              </div>
              <h3 className="text-xl font-semibold text-[#192028] mb-3">Ethically Grounded</h3>
              <p className="text-[#192028]/70">
                Safety, bias mitigation, and transparency are baked into every module to protect student data and
                dignity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Roadmap Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#192028] mb-4">
            From Literacy to Leadership
          </h2>
          <p className="text-center text-[#56457f] font-medium mb-12">The 12-Month Scope & Sequence</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Module 1 */}
            <div className="bg-white rounded-xl p-6 border border-[#56457f]/10 hover:border-[#F27A37]/30 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#F27A37] rounded-lg flex items-center justify-center text-[#2C2A33] font-semibold">
                  1
                </div>
                <GraduationCap className="w-5 h-5 text-[#56457f]" />
              </div>
              <h3 className="font-semibold text-[#192028] mb-2">Foundations of AI-Enabled Instruction</h3>
              <p className="text-sm text-[#192028]/70">The "Model Face-Off"</p>
            </div>

            {/* Module 2 */}
            <div className="bg-white rounded-xl p-6 border border-[#56457f]/10 hover:border-[#F27A37]/30 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#F27A37] rounded-lg flex items-center justify-center text-[#2C2A33] font-semibold">
                  2
                </div>
                <Scale className="w-5 h-5 text-[#56457f]" />
              </div>
              <h3 className="font-semibold text-[#192028]">AI Ethics, Bias Mitigation & Governance</h3>
            </div>

            {/* Module 3 */}
            <div className="bg-white rounded-xl p-6 border border-[#56457f]/10 hover:border-[#F27A37]/30 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#F27A37] rounded-lg flex items-center justify-center text-[#2C2A33] font-semibold">
                  3
                </div>
                <Layers className="w-5 h-5 text-[#56457f]" />
              </div>
              <h3 className="font-semibold text-[#192028] mb-2">Designing Adaptive Learning Frameworks</h3>
              <p className="text-sm text-[#192028]/70">Structured Data</p>
            </div>

            {/* Module 4 */}
            <div className="bg-white rounded-xl p-6 border border-[#56457f]/10 hover:border-[#F27A37]/30 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#F27A37] rounded-lg flex items-center justify-center text-[#2C2A33] font-semibold">
                  4
                </div>
                <MonitorPlay className="w-5 h-5 text-[#56457f]" />
              </div>
              <h3 className="font-semibold text-[#192028] mb-2">AI-Enhanced Instructional Design Studio</h3>
              <p className="text-sm text-[#192028]/70">Multi-Modal</p>
            </div>

            {/* Module 5 */}
            <div className="bg-white rounded-xl p-6 border border-[#56457f]/10 hover:border-[#F27A37]/30 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#F27A37] rounded-lg flex items-center justify-center text-[#2C2A33] font-semibold">
                  5
                </div>
                <BarChart3 className="w-5 h-5 text-[#56457f]" />
              </div>
              <h3 className="font-semibold text-[#192028]">Data-Informed Teaching & Learning Analytics</h3>
            </div>

            {/* Module 6 */}
            <div className="bg-white rounded-xl p-6 border border-[#56457f]/10 hover:border-[#F27A37]/30 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#F27A37] rounded-lg flex items-center justify-center text-[#2C2A33] font-semibold">
                  6
                </div>
                <Microscope className="w-5 h-5 text-[#56457f]" />
              </div>
              <h3 className="font-semibold text-[#192028] mb-2">Subject-Specific AI-Enabled Instruction</h3>
              <p className="text-sm text-[#192028]/70">STEM, Humanities, Specialists</p>
            </div>

            {/* Module 7 */}
            <div className="bg-white rounded-xl p-6 border border-[#56457f]/10 hover:border-[#F27A37]/30 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#F27A37] rounded-lg flex items-center justify-center text-[#2C2A33] font-semibold">
                  7
                </div>
                <FlaskConical className="w-5 h-5 text-[#56457f]" />
              </div>
              <h3 className="font-semibold text-[#192028] mb-2">AI-Enabled Classroom Pilot</h3>
              <p className="text-sm text-[#192028]/70">PDSA Cycle</p>
            </div>

            {/* Module 8 */}
            <div className="bg-white rounded-xl p-6 border border-[#56457f]/10 hover:border-[#F27A37]/30 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#F27A37] rounded-lg flex items-center justify-center text-[#2C2A33] font-semibold">
                  8
                </div>
                <Award className="w-5 h-5 text-[#56457f]" />
              </div>
              <h3 className="font-semibold text-[#192028] mb-2">The Capstone Portfolio</h3>
              <p className="text-sm text-[#192028]/70">The Instructional Architect</p>
            </div>

            {/* Module 9 */}
            <div className="bg-gradient-to-br from-[#56457f]/10 to-[#F27A37]/10 rounded-xl p-6 border border-[#56457f]/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#56457f] rounded-lg flex items-center justify-center text-white font-semibold">
                  9
                </div>
                <Sparkles className="w-5 h-5 text-[#F27A37]" />
              </div>
              <h3 className="font-semibold text-[#192028] mb-2">Technical Sovereignty</h3>
              <p className="text-sm text-[#192028]/70">IT/CS Track</p>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Model Section */}
      <section className="py-20 px-4 bg-[#192028]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-white mb-12">The Delivery Model</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
              <MonitorPlay className="w-10 h-10 text-[#F27A37] mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Format</h3>
              <p className="text-white/70 text-sm">Hybrid: Virtual Training + Async Design Studios + Coaching</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
              <Users className="w-10 h-10 text-[#F27A37] mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Cohort Size</h3>
              <p className="text-white/70 text-sm">
                Optimized for 10-teacher cohorts (with per-seat expansion options)
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
              <Calendar className="w-10 h-10 text-[#F27A37] mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Duration</h3>
              <p className="text-white/70 text-sm">12-month engagement (Sustained Support)</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
              <GraduationCap className="w-10 h-10 text-[#F27A37] mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Leadership Track</h3>
              <p className="text-white/70 text-sm">
                Parallel training for Principals and Admins on "Look-Fors" to support and evaluate innovation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Integration Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#192028] mb-12">
            Technology Integration
          </h2>

          <div className="bg-gradient-to-br from-[#56457f]/5 to-[#F27A37]/5 rounded-2xl p-8 md:p-12 border border-[#56457f]/10">
            {/* Platform Badge */}
            <div className="flex justify-center mb-8">
              <span className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#56457f]/20 text-sm font-medium text-[#56457f]">
                <Layers className="w-4 h-4" />
                Platform Agnostic: Works with Google, Microsoft, & Canvas
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-[#192028] mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#F27A37]" />
                  The Procurement Concierge
                </h3>
                <p className="text-[#192028]/70">
                  We don't just teach the tools; we help you buy them. We assist your IT team in evaluating,
                  negotiating, and vetting "Best-in-Class" models (like ChatGPT Plus or Claude) to ensure safety and
                  compliance.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#192028] mb-4 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-[#56457f]" />
                  LMS Integration
                </h3>
                <p className="text-[#192028]/70">
                  Deep alignment with your existing LMS (Canvas, Schoology, Google Classroom) and productivity suites
                  for seamless adoption.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#56457f]/5 to-[#F27A37]/5">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#192028] mb-12">The Outcomes</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* For Teachers */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#56457f]/10">
              <div className="w-14 h-14 bg-[#56457f]/10 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-[#56457f]" />
              </div>
              <h3 className="text-xl font-semibold text-[#192028] mb-4">For Teachers</h3>
              <p className="text-[#192028]/70">
                Transition from "Tool Fatigue" to "Instructional Architect," reclaiming planning time while increasing
                rigor.
              </p>
            </div>

            {/* For Students */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#f27a37]/10">
              <div className="w-14 h-14 bg-[#f27a37]/10 rounded-xl flex items-center justify-center mb-6">
                <GraduationCap className="w-7 h-7 text-[#f27a37]" />
              </div>
              <h3 className="text-xl font-semibold text-[#192028] mb-4">For Students</h3>
              <p className="text-[#192028]/70">
                Access to personalized, 3-path adaptive learning and clear ethical guidelines for their own AI use.
              </p>
            </div>

            {/* For the School */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#2f8ca8]/10">
              <div className="w-14 h-14 bg-[#2f8ca8]/10 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-[#2f8ca8]" />
              </div>
              <h3 className="text-xl font-semibold text-[#192028] mb-4">For the School</h3>
              <p className="text-[#192028]/70">
                A codified Responsible AI Policy, reduced liability risk, and a "Bench of Leaders" ready to train
                others.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#56457f] to-[#2f8ca8]">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">Ready to transform your faculty?</h2>
          <p className="text-white/80 mb-8 text-lg">{"Let's build a future where technology amplifies human curiosity."}</p>
          <Button
            asChild
            size="lg"
            className="bg-[#F27A37] hover:bg-[#F27A37]/90 text-[#2C2A33] text-lg px-8 py-6 h-auto rounded-full"
          >
            <a href="/igniteed/readiness-review">Readiness Review</a>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
