import { Settings, ShieldOff, Activity, Unlock, RefreshCw } from "lucide-react"
import { Reveal } from "@/components/reveal"

const steps = [
  {
    title: "Define",
    icon: Settings,
    description: "You set the lesson, scope, and guardrails.",
  },
  {
    title: "Deploy",
    icon: ShieldOff,
    description: "The assistant guides students through productive struggle instead of delivering answers.",
  },
  {
    title: "Monitor",
    icon: Activity,
    description: "Real-time insight into student reasoning, not just grades.",
  },
  {
    title: "Refine",
    icon: Unlock,
    description: "You control pacing, unlocking the next step when students are ready.",
  },
]

export function ProductSpotlight() {
  return (
    <section id="product" className="py-20 bg-background">
      <div className="container px-6 md:px-12">
        <div className="space-y-12">
          <Reveal className="text-center space-y-4 max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              IgniteMath: <span className="text-primary">teacher-directed AI for mathematical reasoning.</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Most AI tutors guess what to teach — and serve up the answer on request. IgniteMath does neither. It
              stays inside the guardrails a teacher sets, and by design it can't hand the answer over. Students get
              guidance through the reasoning, not a shortcut around it.
            </p>
          </Reveal>

          {/* Designed stepper */}
          <div className="relative">
            <ol className="grid gap-6 md:grid-cols-4">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <Reveal as="li" key={step.title} delay={index * 100} className="relative">
                    <div className="group relative h-full bg-muted/30 p-6 pt-8 rounded-xl border border-border transition-all duration-300 hover:border-secondary/50 hover:shadow-lg hover:-translate-y-1">
                      {/* Step node */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-primary shadow-sm ring-4 ring-background transition-transform duration-300 group-hover:scale-110">
                          <Icon className="h-6 w-6 text-primary-foreground" />
                          <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-secondary-foreground text-xs font-bold">
                            {index + 1}
                          </span>
                        </div>
                      </div>
                      <h3 className="font-heading font-bold text-lg mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </Reveal>
                )
              })}
            </ol>

            {/* Loop closure graphic */}
            <Reveal
              delay={400}
              className="mt-8 flex items-center justify-center gap-3 rounded-full border border-secondary/30 bg-secondary/5 px-5 py-2.5 w-fit mx-auto"
            >
              <RefreshCw className="h-4 w-4 text-secondary" />
              <span className="text-sm font-medium text-foreground">
                A continuous loop — every cycle feeds back into a sharper lesson.
              </span>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
