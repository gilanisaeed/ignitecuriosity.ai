import { Microscope, ShieldCheck, Lock } from "lucide-react"
import { Reveal } from "@/components/reveal"

const promises = [
  {
    icon: Microscope,
    title: "Research-Driven Design",
    description:
      "We operationalize the latest research in cognitive and learning sciences to prioritize neural encoding over rote memorization. We don't just want students to get the answer; we want them to wire the concept.",
  },
  {
    icon: ShieldCheck,
    title: "Ethical & Transparent",
    description:
      'No secret algorithms. We prioritize "Explainable AI," ensuring teachers always understand why the system gave a specific prompt. If you can\'t explain it, we won\'t ship it.',
  },
  {
    icon: Lock,
    title: "Data Privacy First",
    description:
      "Your classroom is your sanctuary. We built our architecture with Zero Persistent Storage, ensuring we meet the strictest standards of safety (FERPA/COPPA) from the very first line of code.",
  },
]

export function LabPromiseSection() {
  return (
    <section id="promise" className="py-20 bg-muted/40">
      <div className="container px-6 md:px-12">
        <Reveal className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary mb-6">
            Built on Science. Grounded in Responsibility.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {promises.map((promise, index) => {
            const Icon = promise.icon
            return (
              <Reveal
                key={promise.title}
                delay={index * 120}
                className="group bg-background p-8 rounded-xl shadow-sm border border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30"
              >
                <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center mb-6 shadow-sm transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-4">{promise.title}</h3>
                <p className="text-muted-foreground">{promise.description}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
