import { Reveal } from "@/components/reveal"

export function PhilosophySection() {
  return (
    <section id="philosophy" className="py-20 bg-muted/40">
      <div className="container px-6 md:px-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <Reveal className="text-center space-y-6">
            <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              Human-led. <span className="text-foreground">AI-supported.</span>
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          </Reveal>

          <Reveal
            delay={150}
            className="space-y-6 text-lg leading-relaxed text-muted-foreground max-w-3xl mx-auto text-center"
          >
            <p>
              <strong className="text-foreground">
                The most powerful instrument in any classroom isn't an algorithm — it's a teacher's judgment about what
                each student needs next.
              </strong>
            </p>
            <p>
              Most EdTech tries to route around the teacher in the name of speed. We do the opposite. We build systems
              that take direction from teachers and amplify their judgment, handling the patient, repetitive work of
              prompting and probing so educators are free to do what only humans can: motivate, mentor, and read the
              room.
            </p>
            <blockquote className="border-l-4 border-primary pl-6 py-2 italic text-foreground bg-primary/5 rounded-r-lg">
              "We believe the future of AI in education is not autonomous — it is collaborative."
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
