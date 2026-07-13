import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/igniteed/navigation"
import { Footer } from "@/components/igniteed/footer"
import { ArrowRight, CheckCircle, Users, GraduationCap, Building2, Sparkles, FileText, BarChart3 } from "lucide-react"

export default function ImpactPage() {
  return (
    <main className="min-h-screen bg-[#FEFDFB]">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-[#F27A37] font-semibold mb-4 tracking-wide uppercase">
            The Proof: ROI Beyond the Classroom
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#192028] mb-6 leading-tight font-montserrat">
            Beyond Efficiency.
            <br />
            <span className="text-[#56457f]">True Instructional Transformation.</span>
          </h1>
          <p className="text-xl text-[#192028]/70 max-w-3xl mx-auto leading-relaxed">
            IgniteEd doesn't just teach software. We transform school culture by shifting educators from "users of
            tools" to <span className="font-semibold text-[#56457f]">"Instructional Architects"</span> who design
            adaptive, human-centered learning ecosystems.
          </p>
        </div>
      </section>

      {/* Triple Win Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#192028] mb-4 font-montserrat">The "Triple Win"</h2>
            <p className="text-lg text-[#192028]/70 max-w-2xl mx-auto">
              Breaking down the ROI for the three key stakeholder groups
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* For Educators */}
            <div className="bg-[#FEFDFB] rounded-2xl p-8 border-2 border-[#56457f]/20 hover:border-[#56457f]/40 transition-colors">
              <div className="w-14 h-14 bg-[#56457f]/10 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-[#56457f]" />
              </div>
              <h3 className="text-xl font-bold text-[#192028] mb-2 font-montserrat">For Educators</h3>
              <p className="text-[#56457f] font-semibold mb-4">Capability & Confidence</p>

              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-[#192028]/60 uppercase tracking-wide mb-1">The Shift</p>
                  <p className="text-[#192028]">
                    From "AI Anxiety" & "Tool Fatigue" → Strategic Agency as an{" "}
                    <span className="font-semibold">"Instructional Architect"</span>
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#192028]/60 uppercase tracking-wide mb-1">The Gain</p>
                  <p className="text-[#192028]/80">
                    Mastery of adaptive frameworks and the ability to architect personalized learning environments that
                    proactively respond to student needs using data-informed insights.
                  </p>
                </div>
              </div>
            </div>

            {/* For Students */}
            <div className="bg-[#FEFDFB] rounded-2xl p-8 border-2 border-[#f27a37]/20 hover:border-[#f27a37]/40 transition-colors">
              <div className="w-14 h-14 bg-[#f27a37]/10 rounded-xl flex items-center justify-center mb-6">
                <GraduationCap className="w-7 h-7 text-[#f27a37]" />
              </div>
              <h3 className="text-xl font-bold text-[#192028] mb-2 font-montserrat">For Students</h3>
              <p className="text-[#f27a37] font-semibold mb-4">Equity & Personalization</p>

              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-[#192028]/60 uppercase tracking-wide mb-1">The Shift</p>
                  <p className="text-[#192028]">
                    From "One-size-fits-all" → <span className="font-semibold">"Adaptive Pathways"</span>
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#192028]/60 uppercase tracking-wide mb-1">The Gain</p>
                  <p className="text-[#192028]/80">
                    Deeper engagement through multi-modal support, personalized "3-Path" structures, and clear, ethical
                    guidelines for their own AI use.
                  </p>
                </div>
              </div>
            </div>

            {/* For School */}
            <div className="bg-[#FEFDFB] rounded-2xl p-8 border-2 border-[#2f8ca8]/20 hover:border-[#2f8ca8]/40 transition-colors">
              <div className="w-14 h-14 bg-[#2f8ca8]/10 rounded-xl flex items-center justify-center mb-6">
                <Building2 className="w-7 h-7 text-[#2f8ca8]" />
              </div>
              <h3 className="text-xl font-bold text-[#192028] mb-2 font-montserrat">For the School</h3>
              <p className="text-[#216B80] font-semibold mb-4">Governance & Leadership</p>

              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-[#192028]/60 uppercase tracking-wide mb-1">The Shift</p>
                  <p className="text-[#192028]">
                    From "Wild West" → <span className="font-semibold">"Responsible Infrastructure"</span>
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#192028]/60 uppercase tracking-wide mb-1">The Gain</p>
                  <p className="text-[#192028]/80">
                    A codified Responsible AI Policy, optimized software procurement (we help you choose the right
                    stack), reduced liability risk, and a reputation as an innovation leader.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before vs After Section */}
      <section className="py-20 px-4 bg-[#192028]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-montserrat">The Transformation</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              The tangible difference in your classroom after 12 months
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Before Column */}
            <div className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white/60 mb-6 font-montserrat uppercase tracking-wide">
                Before IgniteEd
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-white/40 mt-2 shrink-0"></div>
                  <div>
                    <p className="text-white font-semibold">Static Lesson Plans</p>
                    <p className="text-white/60 text-sm">One path for all students.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-white/40 mt-2 shrink-0"></div>
                  <div>
                    <p className="text-white font-semibold">Vendor Lock-in</p>
                    <p className="text-white/60 text-sm">Relying on one specific tool.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-white/40 mt-2 shrink-0"></div>
                  <div>
                    <p className="text-white font-semibold">AI Anxiety</p>
                    <p className="text-white/60 text-sm">Fear of cheating & plagiarism.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-white/40 mt-2 shrink-0"></div>
                  <div>
                    <p className="text-white font-semibold">Unclear Policies</p>
                    <p className="text-white/60 text-sm">"Wild West" usage risks.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* After Column */}
            <div className="bg-gradient-to-br from-[#F27A37]/20 to-[#56457f]/20 backdrop-blur rounded-2xl p-8 border border-[#F27A37]/30">
              <h3 className="text-xl font-bold text-[#F27A37] mb-6 font-montserrat uppercase tracking-wide">
                After IgniteEd
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-[#F27A37] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-white font-semibold">Dynamic Frameworks</p>
                    <p className="text-white/70 text-sm">Adaptive paths for every learner.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-[#F27A37] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-white font-semibold">Platform Agnostic</p>
                    <p className="text-white/70 text-sm">Fluency across best-in-class models.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-[#F27A37] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-white font-semibold">Confident Design</p>
                    <p className="text-white/70 text-sm">"Human-in-the-Loop" instruction.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-[#F27A37] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-white font-semibold">Transparent Guidelines</p>
                    <p className="text-white/70 text-sm">Clear, ethical guardrails & vetting.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Measurable Success Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#192028] mb-4 font-montserrat">Measurable Success</h2>
            <p className="text-lg text-[#192028]/70 max-w-2xl mx-auto">How we track and prove ROI</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-[#56457f]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-[#56457f]" />
              </div>
              <h3 className="text-xl font-bold text-[#192028] mb-3 font-montserrat">Classroom Pilots</h3>
              <p className="text-[#192028]/70">
                Every teacher runs a 2-week Plan-Do-Study-Act (PDSA) innovation pilot to gather real learning data.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 bg-[#f27a37]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-[#f27a37]" />
              </div>
              <h3 className="text-xl font-bold text-[#192028] mb-3 font-montserrat">Capstone Portfolios</h3>
              <p className="text-[#192028]/70">
                Teachers graduate with a tangible portfolio of work and a "Train-the-Trainer" certification (Tier 3),
                creating a permanent internal asset.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 bg-[#2f8ca8]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-[#2f8ca8]" />
              </div>
              <h3 className="text-xl font-bold text-[#192028] mb-3 font-montserrat">Impact Reports</h3>
              <p className="text-[#192028]/70">
                (Included in Tier 2/Premium) We provide leadership with Mid-Year and End-Year analysis on adoption,
                sentiment, and instructional growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#56457f] to-[#2f8ca8]">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-montserrat">
            See the change in your school.
          </h2>
          <Button size="lg" className="bg-[#F27A37] hover:bg-[#F27A37]/90 text-[#2C2A33] text-lg px-8 py-6 h-auto" asChild>
            <a href="/igniteed/readiness-review">
              Start Your Readiness Review
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
