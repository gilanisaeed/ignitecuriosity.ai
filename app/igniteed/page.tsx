import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import { Compass, BookOpen, Users, LineChart, ShieldCheck, Layers } from "lucide-react"
import Link from "next/link"

const pillars = [
  {
    icon: Compass,
    title: "Teacher-Directed by Design",
    description:
      "Every interaction stays inside the guardrails you set. The platform extends your lesson plan instead of replacing your judgment.",
  },
  {
    icon: BookOpen,
    title: "One Architecture, Every Subject",
    description:
      "The same reasoning-first engine that powers IgniteMath scales across the curriculum — from writing to science to history.",
  },
  {
    icon: LineChart,
    title: "Insight Into Reasoning",
    description:
      "See how students think, not just what they answer. Real-time signals surface who is stuck and where the misconception lives.",
  },
  {
    icon: Users,
    title: "Human-in-the-Loop",
    description:
      "Teachers review and pre-approve AI strategies asynchronously, so every prompt aligns with your voice and standards.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible & Transparent",
    description:
      'We prioritize "Explainable AI." If we can\'t show a teacher why the system gave a prompt, we won\'t ship it.',
  },
  {
    icon: Layers,
    title: "Built on Learning Science",
    description:
      "Grounded in cognitive science, the platform prioritizes durable neural encoding over rote answer delivery.",
  },
]

export default function IgniteEdPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 md:py-20 bg-background">
          <div className="container px-6 md:px-12">
            <Reveal className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="font-heading text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                <span className="text-foreground">One platform.</span>{" "}
                <span className="text-primary">Every subject.</span>
              </h1>
              <p className="text-xl md:text-2xl font-semibold text-foreground">
                IgniteEd: The Teacher-Directed AI Platform for the Whole Curriculum.
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                IgniteMath proved that AI can deepen reasoning instead of shortcutting it. IgniteEd brings that same
                teacher-directed architecture to every classroom and every subject.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  Request a Demo
                </Button>
                <Link href="/ignitemath">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10 bg-transparent w-full sm:w-auto"
                  >
                    Explore IgniteMath
                  </Button>
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Pillars */}
        <section className="py-20 bg-muted/30">
          <div className="container px-6 md:px-12">
            <Reveal className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary mb-6">
                The same principles, across the curriculum.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                IgniteEd is the foundation IgniteMath is built on — a responsible, reasoning-first system that keeps
                teachers in control.
              </p>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-8">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon
                return (
                  <Reveal
                    key={pillar.title}
                    delay={index * 100}
                    className="group bg-background p-8 rounded-xl shadow-sm border border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30"
                  >
                    <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center mb-6 shadow-sm transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-heading text-xl font-bold mb-4">{pillar.title}</h3>
                    <p className="text-muted-foreground">{pillar.description}</p>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-20 bg-background">
          <div className="container px-6 md:px-12">
            <Reveal className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
                Bring teacher-directed AI to your whole school.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Start with IgniteMath today, and expand to the full IgniteEd platform as it rolls out across subjects.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  Request a Demo
                </Button>
                <Link href="/science">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10 bg-transparent w-full sm:w-auto"
                  >
                    The Science Behind It
                  </Button>
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
