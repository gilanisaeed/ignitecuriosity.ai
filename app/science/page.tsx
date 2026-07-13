import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { TrendingDown, UserX, BrainCircuit, ShieldAlert, Compass, Target, Users } from "lucide-react"
import { ProficiencyChart, BurnoutGauge } from "@/components/science/crisis-charts"

export default function SciencePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Section 1: The Crisis */}
        <section className="py-20 bg-muted/30">
          <div className="container px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="font-heading text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary text-balance">
                Students are falling behind — and AI is widening the gap.
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground text-pretty">
                Fewer students reach college-ready math each year, while AI hands out answers that skip the reasoning.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
              <div className="bg-background p-8 rounded-2xl shadow-lg border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-11 w-11 rounded-full bg-destructive/10 flex items-center justify-center">
                    <TrendingDown className="h-5 w-5 text-destructive" />
                  </div>
                  <h3 className="font-heading text-lg font-bold leading-tight">
                    Fewer students are ready for college math
                  </h3>
                </div>
                <ProficiencyChart />
                <p className="text-muted-foreground text-sm mt-4">
                  Only <span className="font-bold text-destructive tabular-nums">33%</span> of U.S. 12th-graders were
                  academically ready for entry-level college math in 2024 — down from 37% in 2019, with 45% scoring
                  below NAEP Basic (the lowest since 2005).
                </p>
                <p className="text-muted-foreground/80 text-xs mt-3">
                  Source: NAEP 2024 (The Nation&apos;s Report Card), National Assessment Governing Board.
                </p>
              </div>

              <div className="bg-background p-8 rounded-2xl shadow-lg border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-11 w-11 rounded-full bg-destructive/10 flex items-center justify-center">
                    <ShieldAlert className="h-5 w-5 text-destructive" />
                  </div>
                  <h3 className="font-heading text-lg font-bold leading-tight">Teachers are fighting answer-leaking</h3>
                </div>
                <BurnoutGauge />
                <p className="text-muted-foreground text-sm mt-4">
                  <span className="font-bold text-destructive tabular-nums">95%</span> of the 40+ teachers and
                  principals we interviewed named AI answer-leaking a top-three classroom concern.
                </p>
                <p className="text-muted-foreground/80 text-xs mt-3">Source: IgniteMath educator interviews (2025–26).</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: The "Soft Dropout" */}
        <section className="py-20 bg-background">
          <div className="container px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
              <div className="text-center space-y-6 mb-12">
                <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
                  We are facing a crisis of "Soft Dropout."
                </h2>
              </div>

              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  For the last decade, EdTech has optimized for efficiency, getting students to the right answer as
                  fast as possible. By functioning as <span className="font-bold text-foreground">Answer Engines</span>{" "}
                  rather than <span className="font-bold text-foreground">Reasoning Partners</span>, these tools
                  encourage students to offload their thinking.
                </p>

                <div className="bg-muted/50 p-8 rounded-xl border border-border">
                  <h4 className="font-bold text-foreground mb-3 text-xl">The Reality:</h4>
                  <p>
                    It creates a state of <span className="font-bold text-foreground">"Soft Dropout."</span> Students
                    physically show up, but mentally check out because the AI removes the "Need to Know," stripping
                    away the friction required for neural encoding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Why Current AI Fails */}
        <section className="py-20 bg-muted/30">
          <div className="container px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
                Why Current AI Fails the Classroom
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-background p-8 rounded-2xl shadow-sm border border-border">
                <div className="h-12 w-12 bg-destructive/10 rounded-xl flex items-center justify-center mb-6">
                  <UserX className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">Teacher Disempowerment</h3>
                <p className="text-sm font-medium text-secondary mb-3">The "Black Box" Problem</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  You are held accountable for the outcome, but you have no control over the input.
                </p>
              </div>

              <div className="bg-background p-8 rounded-2xl shadow-sm border border-border">
                <div className="h-12 w-12 bg-destructive/10 rounded-xl flex items-center justify-center mb-6">
                  <BrainCircuit className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">Student Degradation</h3>
                <p className="text-sm font-medium text-secondary mb-3">The "Passive Consumption" Problem</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Standard LLMs turn active learners into passive consumers.
                </p>
              </div>

              <div className="bg-background p-8 rounded-2xl shadow-sm border border-border">
                <div className="h-12 w-12 bg-destructive/10 rounded-xl flex items-center justify-center mb-6">
                  <ShieldAlert className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">Infrastructure Gaps</h3>
                <p className="text-sm font-medium text-secondary mb-3">The Equity Problem</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  High-quality AI is often gated behind expensive hardware.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: The Solution */}
        <section className="py-16 bg-background">
          <div className="container px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                We Don't Automate Teaching. We Amplify It.
              </h2>
              <p className="text-xl text-muted-foreground">
                While "Answer Engines" try to replace human instruction, we build AI that takes direction from it.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: The Methodology (3 Pillars) */}
        <section className="py-20 bg-muted/30">
          <div className="container px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                Not just a Chatbot. A Pedagogical Engine.
              </h2>
            </div>

            <div className="relative grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Connecting line behind the diagram nodes */}
              <div
                className="hidden md:block absolute top-7 left-[16.66%] right-[16.66%] h-0.5 bg-border"
                aria-hidden="true"
              />

              {/* Pillar 1: The Compass */}
              <div className="relative bg-background p-8 rounded-2xl shadow-lg border border-border">
                <div className="relative mx-auto h-14 w-14 rounded-full bg-primary flex items-center justify-center mb-6 shadow-sm ring-4 ring-background">
                  <Compass className="h-7 w-7 text-primary-foreground" />
                  <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-secondary text-secondary-foreground text-xs font-bold flex items-center justify-center">
                    1
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold text-primary mb-2 text-center">The Compass</h3>
                <p className="text-sm font-medium text-secondary mb-4 text-center">Instructional Guardrails</p>
                <p className="text-muted-foreground text-sm leading-relaxed text-center">
                  Standard AI can drift. Ours is strictly bound by the instructional guardrails you establish. It acts
                  as a faithful extension of your lesson plan.
                </p>
              </div>

              {/* Pillar 2: The Standard */}
              <div className="relative bg-background p-8 rounded-2xl shadow-lg border border-border">
                <div className="relative mx-auto h-14 w-14 rounded-full bg-primary flex items-center justify-center mb-6 shadow-sm ring-4 ring-background">
                  <Target className="h-7 w-7 text-primary-foreground" />
                  <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-secondary text-secondary-foreground text-xs font-bold flex items-center justify-center">
                    2
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold text-primary mb-2 text-center">The Standard</h3>
                <p className="text-sm font-medium text-secondary mb-4 text-center">Engagement Zone</p>
                <p className="text-muted-foreground text-sm leading-relaxed text-center">
                  Standard AI is optimized for speed. Ours is optimized for depth. We trained our model to break the
                  "Shortcut Trap" by acting as a "Spoiler Block," withholding the solution to foster critical thinking.
                </p>
              </div>

              {/* Pillar 3: The Safety Net */}
              <div className="relative bg-background p-8 rounded-2xl shadow-lg border border-border">
                <div className="relative mx-auto h-14 w-14 rounded-full bg-primary flex items-center justify-center mb-6 shadow-sm ring-4 ring-background">
                  <Users className="h-7 w-7 text-primary-foreground" />
                  <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-secondary text-secondary-foreground text-xs font-bold flex items-center justify-center">
                    3
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold text-primary mb-2 text-center">The Safety Net</h3>
                <p className="text-sm font-medium text-secondary mb-4 text-center">Human-in-the-Loop</p>
                <p className="text-muted-foreground text-sm leading-relaxed text-center">
                  To eliminate "Black Box" anxiety, we reject full automation. Teachers can asynchronously review and
                  pre-approve AI strategies, ensuring 100% alignment with your voice.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
