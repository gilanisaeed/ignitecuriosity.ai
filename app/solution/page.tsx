import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Triangle, Compass, BrainCircuit, ShieldCheck } from "lucide-react"

export default function SolutionPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      {/* Section 1: The Paradigm Shift (Hero) */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-muted/20">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-logo-deep-violet/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-logo-sky-blue/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-logo-warm-orange/5 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 py-16 md:py-20 px-6 md:px-12">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            {/* Teacher-Directed Triangle Diagram */}
            <div className="flex justify-center mb-8">
              <div className="relative w-64 h-64">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  {/* Triangle */}
                  <path
                    d="M100 30 L170 150 L30 150 Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-primary/30"
                  />

                  {/* Teacher at top */}
                  <circle cx="100" cy="30" r="20" fill="currentColor" className="text-primary" />
                  <text x="100" y="15" textAnchor="middle" className="text-xs font-semibold fill-foreground">
                    Teacher
                  </text>

                  {/* AI at bottom left */}
                  <circle cx="30" cy="150" r="20" fill="currentColor" className="text-secondary" />
                  <text x="30" y="180" textAnchor="middle" className="text-xs font-semibold fill-foreground">
                    AI
                  </text>

                  {/* Student at bottom right */}
                  <circle cx="170" cy="150" r="20" fill="currentColor" className="text-secondary" />
                  <text x="170" y="180" textAnchor="middle" className="text-xs font-semibold fill-foreground">
                    Student
                  </text>

                  {/* Connecting lines with arrows */}
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" className="text-primary" />
                    </marker>
                  </defs>
                  <line
                    x1="100"
                    y1="50"
                    x2="50"
                    y2="130"
                    stroke="currentColor"
                    strokeWidth="2"
                    markerEnd="url(#arrowhead)"
                    className="text-primary"
                  />
                  <line
                    x1="50"
                    y1="150"
                    x2="150"
                    y2="150"
                    stroke="currentColor"
                    strokeWidth="2"
                    markerEnd="url(#arrowhead)"
                    className="text-primary"
                  />
                  <line
                    x1="150"
                    y1="130"
                    x2="100"
                    y2="50"
                    stroke="currentColor"
                    strokeWidth="2"
                    markerEnd="url(#arrowhead)"
                    className="text-primary"
                  />
                </svg>
              </div>
            </div>

            <h1 className="font-heading text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-balance text-primary">
              We Don't Automate Teaching. We Amplify It.
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground text-balance max-w-3xl mx-auto">
              <span className="font-semibold text-foreground">
                Teacher-Directed AI for Mathematical Reasoning.
              </span>{" "}
              While "Answer Engines" try to replace human instruction, we build AI that takes direction from it. By
              embedding teacher expertise directly into the code, we create technology that is trustworthy, transparent,
              and grounded in the science of learning.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: The Core Innovation */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container px-6 md:px-12">
          <div className="mx-auto max-w-6xl space-y-12">
            <div className="text-center space-y-4">
              <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                Solving the "Black Box" Problem.
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                To fix the broken trust in EdTech, we had to redesign how AI works in the classroom. We reject the
                "passive consumption" model that guesses what a student needs. Instead, we created a system that listens
                to the expert in the room: You.
              </p>
              <p className="text-lg font-medium text-foreground max-w-3xl mx-auto">
                Our solution is built on three proprietary innovations that ensure the AI acts as a faithful extension
                of the teacher, not a replacement.
              </p>
            </div>

            {/* Black Box vs Ignite Architecture Comparison */}
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-card border rounded-lg p-8 text-center space-y-4">
                <div className="w-32 h-32 mx-auto bg-muted-foreground/20 rounded-lg flex items-center justify-center">
                  <div className="text-6xl font-bold text-muted-foreground/40">?</div>
                </div>
                <h3 className="font-heading text-xl font-bold text-muted-foreground">Black Box AI</h3>
                <p className="text-sm text-muted-foreground">Opaque, unpredictable, and disconnected from pedagogy</p>
              </div>

              <div className="bg-card border border-primary/30 rounded-lg p-8 text-center space-y-4 shadow-lg">
                <div className="w-32 h-32 mx-auto bg-primary/10 rounded-lg flex items-center justify-center">
                  <Triangle className="w-16 h-16 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-primary">Ignite Architecture</h3>
                <p className="text-sm text-foreground">Transparent, teacher-directed, and pedagogically grounded</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: The Three Pillars */}
      <section className="py-16 md:py-20">
        <div className="container px-6 md:px-12">
          <div className="mx-auto max-w-6xl space-y-12">
            <div className="text-center space-y-4">
              <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                Engineered for Control, Depth, and Trust.
              </h2>
            </div>

            <div className="grid gap-8">
              {/* Pillar 1: Alignment */}
              <div className="bg-card border rounded-lg p-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 shrink-0 rounded-xl bg-primary flex items-center justify-center">
                    <Compass className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="space-y-3 flex-1">
                    <h3 className="font-heading text-2xl font-bold text-primary">
                      1. Alignment: Teacher-Defined Guardrails
                    </h3>
                    <p className="text-sm font-semibold text-primary">The AI Follows Your Map.</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Standard AI operates as a "Black Box," generating answers based on open-ended training. We built a
                      system that operates strictly within the instructional guardrails you establish. You define the
                      lesson plan and the learning goals; the AI simply acts as a faithful mechanism to deliver them. It
                      never drifts, never overrides your intent, and never goes "rogue."
                    </p>
                  </div>
                </div>
              </div>

              {/* Pillar 2: Reasoning */}
              <div className="bg-card border rounded-lg p-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 shrink-0 rounded-xl bg-primary flex items-center justify-center">
                    <BrainCircuit className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="space-y-3 flex-1">
                    <h3 className="font-heading text-2xl font-bold text-primary">
                      2. Reasoning: A Cognitive Engagement Engine
                    </h3>
                    <p className="text-sm font-semibold text-primary">The Antidote to "Metacognitive Laziness."</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Standard AI is optimized for speed; ours is optimized for thinking. We designed our architecture
                      to break the "Shortcut Trap" by prioritizing the Engagement Zone over instant answers. The system
                      acts as a "Spoiler Block," withholding the final solution and instead providing the exact
                      scaffolded hints needed to help students reason their way to the answer themselves.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pillar 3: Trust */}
              <div className="bg-card border rounded-lg p-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 shrink-0 rounded-xl bg-primary flex items-center justify-center">
                    <ShieldCheck className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="space-y-3 flex-1">
                    <h3 className="font-heading text-2xl font-bold text-primary">3. Trust: The Human-in-the-Loop</h3>
                    <p className="text-sm font-semibold text-primary">Visibility, Not Just Automation.</p>
                    <p className="text-muted-foreground leading-relaxed">
                      To eliminate the risk of unverified advice, we prioritize radical transparency. Unlike tools that
                      hide their logic, our "Teacher-Directed" workflow gives you full visibility into the system's
                      guidance. You retain the sovereignty to review, refine, and pre-approve the AI's strategies,
                      ensuring that every digital interaction aligns 100% with your classroom culture.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Responsible AI Framework */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container px-6 md:px-12">
          <div className="mx-auto max-w-6xl space-y-12">
            <div className="text-center space-y-4">
              <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                Built for Every Classroom.
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We adhere to the strictest principles of Responsible AI, ensuring that innovation never comes at the
                cost of equity or safety.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Equitable Access */}
              <div className="bg-card border rounded-lg p-8 text-center space-y-4">
                <div className="text-5xl mx-auto">⚖️</div>
                <h3 className="font-heading text-xl font-bold text-primary">Equitable Access</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  High-quality AI shouldn't require high-speed fiber. Our "offline-lite" architecture is designed to run
                  on low-bandwidth networks with sub-2-second response times, ensuring access for rural and
                  under-resourced schools.
                </p>
              </div>

              {/* Radical Transparency */}
              <div className="bg-card border rounded-lg p-8 text-center space-y-4">
                <div className="text-5xl mx-auto">🔍</div>
                <h3 className="font-heading text-xl font-bold text-primary">Radical Transparency</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  No secret algorithms. We provide "Explainable AI" interfaces so teachers and administrators can see
                  exactly why the system offered a specific hint.
                </p>
              </div>

              {/* Zero-Data Retention */}
              <div className="bg-card border rounded-lg p-8 text-center space-y-4">
                <div className="text-5xl mx-auto">🛡️</div>
                <h3 className="font-heading text-xl font-bold text-primary">Zero-Data Retention</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We believe student data belongs to the school, not the vendor. Our system is FERPA/COPPA-aligned and
                  designed with zero persistent student data storage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: The Result */}
      <section className="py-16 md:py-20">
        <div className="container px-6 md:px-12">
          <div className="mx-auto max-w-3xl text-center space-y-8">
            <div className="space-y-4">
              <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                Stop the shortcuts. Start learning.
              </h2>
              <p className="text-lg text-muted-foreground">
                We've taken this "Teacher-Directed" architecture and built a tool specifically for the subject where
                students need reasoning the most: Mathematics.
              </p>
            </div>

            <div className="flex justify-center">
              <Button
                size="lg"
                className="h-14 px-10 text-lg bg-secondary text-secondary-foreground hover:bg-secondary/90"
              >
                See IgniteMath in Action
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
