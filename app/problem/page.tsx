import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { TrendingDown, Flame, Box, UserX, BrainCircuit, ShieldAlert, ArrowRight } from "lucide-react"

export default function ProblemPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Section 1: The Double Crisis (Hero) */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="font-heading text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary mb-6">
                A Classroom in Crisis.
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Teachers are burning out. Students are falling behind. <br className="hidden md:block" />
                And the current wave of AI tools is ignoring the reality of the classroom.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-background p-8 rounded-2xl shadow-sm border border-border/50 flex flex-col items-center text-center">
                <div className="h-16 w-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <TrendingDown className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4">Math Proficiency at a 20-Year Low</h3>
                <p className="text-muted-foreground">
                  According to NAEP 2025, only <span className="font-bold text-foreground">25% of 8th graders</span> are
                  proficient in math. Efficiency is no longer enough; we need depth.
                </p>
              </div>

              <div className="bg-background p-8 rounded-2xl shadow-sm border border-border/50 flex flex-col items-center text-center">
                <div className="h-16 w-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <Flame className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4">53% of Teachers Report Severe Burnout</h3>
                <p className="text-muted-foreground">
                  Educators are facing unprecedented demands to personalize instruction, yet they are being handed tools
                  that bypass them entirely.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: The "Shortcut Trap" in Education */}
        <section className="py-20 bg-background">
          <div className="container px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div className="order-2 lg:order-1 relative">
                <div className="aspect-square bg-muted rounded-3xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 opacity-90" />
                  <Box className="h-32 w-32 text-white/20 relative z-10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-background/10 backdrop-blur-md border border-white/10 p-6 rounded-xl text-white max-w-xs text-center">
                      <p className="font-mono text-sm mb-2 text-red-300">Teacher Disconnected</p>
                      <p className="text-lg font-semibold">"Black Box" Robot Filling In Answers</p>
                      <p className="text-sm text-white/60 mt-2">Student zones out...</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2 space-y-8">
                <div className="space-y-4">
                  <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
                    We are facing a crisis of "Soft Dropout."
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    For the last decade, EdTech has optimized for efficiency, getting students to the right answer as
                    fast as possible. The current wave of "Autonomous AI Tutors" has accelerated this problem.
                  </p>
                </div>

                <div className="space-y-6">
                  <p className="text-muted-foreground">
                    By functioning as <span className="font-bold text-foreground">Answer Engines</span> rather than{" "}
                    <span className="font-bold text-foreground">Reasoning Partners</span>, these tools encourage students
                    to offload their thinking to the algorithm.
                  </p>

                  <div className="bg-muted/50 p-6 rounded-xl border border-border">
                    <h4 className="font-bold text-foreground mb-3">The Reality:</h4>
                    <p className="text-muted-foreground">
                      It creates a state of <span className="font-bold text-foreground">"Soft Dropout."</span> Students
                      physically show up, but mentally check out because the AI removes the "Need to Know", stripping
                      away the friction required for neural encoding.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Why Current AI Fails the Classroom */}
        <section className="py-20 bg-muted/30">
          <div className="container px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
                Why Current AI Fails the Classroom
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-background p-8 rounded-2xl shadow-sm border border-border/50">
                <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <UserX className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-4">Teacher Disempowerment</h3>
                <p className="text-sm font-medium text-primary mb-3">The "Black Box" Problem</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Most AI tools bypass the expert in the room. They generate explanations that are unverified, misaligned
                  with your specific lesson plan, and impossible for teachers to control. You are held accountable for the
                  outcome, but you have no control over the input.
                </p>
              </div>

              <div className="bg-background p-8 rounded-2xl shadow-sm border border-border/50">
                <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <BrainCircuit className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-4">Student Degradation</h3>
                <p className="text-sm font-medium text-primary mb-3">The "Passive Consumption" Problem</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Standard LLMs are designed to satisfy the user. When a student asks for help, the AI gives it, often too
                  much, too soon. This turns active learners into passive consumers, stripping away the "Productive
                  Struggle" necessary for deep mathematical reasoning.
                </p>
              </div>

              <div className="bg-background p-8 rounded-2xl shadow-sm border border-border/50">
                <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <ShieldAlert className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-4">Infrastructure Gaps</h3>
                <p className="text-sm font-medium text-primary mb-3">The Equity Problem</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  High-quality AI is often gated behind expensive hardware and high-speed internet. This leaves
                  under-resourced schools behind, widening the gap between those who use AI and those who understand it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: The Consequence (The Bridge) */}
        <section className="py-20 bg-background">
          <div className="container px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                We cannot automate the most important relationship in the room.
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                If we continue to deploy autonomous, answer-focused AI, we risk raising a generation of students who can
                prompt but cannot reason.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mt-6">
                We believe there is a better way.{" "}
                <span className="font-bold text-foreground">
                  We don't need AI that does the work for students. We need AI that makes students work better.
                </span>
              </p>
              <div className="pt-4">
                <Link href="/solution">
                  <Button
                    size="lg"
                    className="h-14 px-8 text-lg bg-secondary text-secondary-foreground hover:bg-secondary/90"
                  >
                    See Our Solution
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
