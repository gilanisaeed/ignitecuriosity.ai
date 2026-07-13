import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { StickyNav } from "@/components/ignitemath/sticky-nav"
import { Faq } from "@/components/ignitemath/faq"
import { BrowserFrame } from "@/components/ignitemath/browser-frame"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"
import {
  Settings,
  ShieldOff,
  Activity,
  Unlock,
  RefreshCw,
  Check,
  X,
  Lock,
  Eye,
  Wifi,
  ArrowRight,
  Users,
  Gauge,
  Quote,
} from "lucide-react"
import Link from "next/link"

const steps = [
  {
    title: "Define the guardrails",
    icon: Settings,
    description:
      "You set the mission and the AI follows it. Choose the scope, the problem sets, and the learning goals, so the assistant never drifts from your curriculum.",
  },
  {
    title: "Deploy guided struggle",
    icon: ShieldOff,
    description:
      "Students work the problem with the assistant, which offers scaffolded hints that require their own reasoning. By design it can't hand the answer over, so it guides without giving anything away.",
  },
  {
    title: "Monitor reasoning",
    icon: Activity,
    description:
      "A live view shows exactly where each student's reasoning breaks down — by student and by concept — so you can step in at the moment it matters instead of waiting for a grade.",
  },
  {
    title: "Refine with mastery pacing",
    icon: Unlock,
    description:
      "You control progression. The class advances when you unlock the next section based on demonstrated mastery — technology serves your timeline, not the reverse.",
  },
]

const showcase = [
  {
    title: "Live reasoning dashboard",
    image: "/images/ignitemath-live-pulse.png",
    alt: "IgniteMath teacher dashboard showing live student status and turns-per-problem distribution.",
    objectPosition: "object-center",
    aspect: "aspect-[4/3]",
    fit: "object-contain",
    caption:
      "See which students are stuck, mastered, or fast-tracking — and the specific misconception behind each, not a generic 'needs help.'",
  },
  {
    title: "The student experience",
    image: "/images/ignitemath-agent-workspace.png",
    alt: "IgniteMath student view: a student corrects the AI's line of best fit and explains the reasoning.",
    objectPosition: "object-center",
    aspect: "aspect-[11/10]",
    fit: "object-contain",
    caption: "Students catch the AI's mistake, fix it, and explain why. Reasoning they build, not answers they're handed.",
  },
  {
    title: "Teacher controls",
    image: "/images/ignitemath-teacher-copilot.png",
    alt: "IgniteMath teacher controls: set the productive-struggle band, acceptance threshold, and reading level.",
    objectPosition: "object-center",
    aspect: "aspect-[4/3]",
    fit: "object-contain",
    caption: "Set the guardrails, define mastery, and lock pacing. The rules are yours.",
  },
]

const comparison = [
  { label: "Answer suppression", general: "Prompt rules and output filters", ignite: "Built in, not a prompt that can be undone" },
  { label: "Math correctness", general: "The model checks itself (and hallucinates)", ignite: "Independently verified, not guessed" },
  { label: "What gets assessed", general: "Did the final answer match?", ignite: "The reasoning, step by step" },
  { label: "Jailbreak resistance", general: "Holds for days", ignite: "Built into the architecture" },
]

const trustCards = [
  {
    icon: Lock,
    title: "Privacy first",
    description:
      "FERPA/COPPA-aligned from the first line of code, with consent-based data governance and no sale of student data. Student data belongs to the school.",
  },
  {
    icon: Eye,
    title: "Explainable by design",
    description:
      "No secret algorithms. Teachers can always see why the assistant offered a given prompt. If we can't explain it, we don't ship it.",
  },
  {
    icon: Wifi,
    title: "Equitable access",
    description:
      "Quality AI shouldn't require high-speed fiber. IgniteMath is engineered for fast, classroom-ready responses even on low-bandwidth school networks.",
  },
]

const teacherBenefits = [
  {
    icon: Eye,
    title: "Visibility into how students actually think",
    description: "See the misconception, not just the wrong answer.",
  },
  {
    icon: Users,
    title: "Attention that scales",
    description: "Reach every student who's stuck, the moment they're stuck.",
  },
  {
    icon: Gauge,
    title: "Full control of pacing",
    description: "The class moves when you decide it's ready.",
  },
]

export default function IgniteMathPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* Section 1: Hero */}
        <section className="py-16 md:py-20 bg-background relative overflow-hidden">
          <div className="container px-6 md:px-12 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <Reveal className="space-y-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-secondary">
                  Teacher-directed AI for mathematical reasoning
                </p>
                <h1 className="font-heading text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-balance">
                  Stop the shortcut. <span className="text-primary">Start the reasoning.</span>
                </h1>
                <p className="text-xl font-medium text-foreground text-pretty">
                IgniteMath guides students through the thinking in math — and by design it can't hand the answer
                over, so they can't offload it onto the AI.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                  Built for the subject where reasoning matters most, IgniteMath works strictly inside the guardrails a
                  teacher sets. Students get adaptive questioning and scaffolded support that keep the struggle — and the
                  learning — intact.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <a href="#final-cta">
                    <Button
                      size="lg"
                      className="bg-secondary text-secondary-foreground hover:bg-secondary/90 w-full sm:w-auto"
                    >
                      Request a Demo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                  <a href="#final-cta">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary/10 bg-transparent w-full sm:w-auto"
                    >
                      Join the pilot waitlist
                    </Button>
                  </a>
                </div>
              </Reveal>
              <Reveal delay={150} className="relative">
                <BrowserFrame
                  src="/images/ignitemath-live-pulse.png"
                  alt="IgniteMath live reasoning dashboard showing student status and turns-per-problem distribution."
                  objectPosition="object-top"
                  priority
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* Sticky anchor nav */}
        <StickyNav />

        {/* Section 2: Credibility strip */}
        <section className="py-6 bg-muted/40 border-b border-border">
          <div className="container px-6 md:px-12">
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm font-medium text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                Backed by NVIDIA Inception
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                Shaped by Stanford LEAD
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                Stanford LEAD LISA cohort 11. Top-10 Finalist
              </span>
            </div>
          </div>
        </section>

        {/* Section 3: The problem (condensed) */}
        <section className="py-20 bg-background">
          <div className="container px-6 md:px-12">
            <Reveal className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl text-balance">
                AI gave students a shortcut. <span className="text-primary">It&apos;s costing them the reasoning.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                General AI tools answer the question for students — so the productive struggle that builds real
                understanding never happens. The result shows up downstream: only{" "}
                <strong className="text-foreground">33% of U.S. twelfth-graders are ready for college-level math</strong>{" "}
                (2024 NAEP, down from 37% in 2019). Teachers see it daily, and many are now jailbreaking chatbots just to
                stop them from leaking answers.
              </p>
              <Link
                href="/science"
                className="inline-flex items-center gap-1 font-semibold text-secondary hover:underline"
              >
                See the research
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* Section 4: How it works — the 4-step loop */}
        <section id="how-it-works" className="py-20 bg-muted/30 scroll-mt-28">
          <div className="container px-6 md:px-12">
            <div className="max-w-5xl mx-auto space-y-12">
              <Reveal className="text-center space-y-3 max-w-3xl mx-auto">
                <p className="text-sm font-semibold uppercase tracking-wider text-secondary">How it works</p>
                <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-balance">
                  You stay in control at every step.
                </h2>
              </Reveal>

              <div className="relative">
                <ol className="grid gap-6 md:grid-cols-4">
                  {steps.map((step, index) => {
                    const Icon = step.icon
                    return (
                      <Reveal as="li" key={step.title} delay={index * 100} className="relative">
                        <div className="group relative h-full bg-background p-6 pt-8 rounded-xl border border-border transition-all duration-300 hover:border-secondary/50 hover:shadow-lg hover:-translate-y-1">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-primary shadow-sm ring-4 ring-background transition-transform duration-300 group-hover:scale-110">
                              <Icon className="h-6 w-6 text-primary-foreground" />
                              <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-secondary-foreground text-xs font-bold">
                                {index + 1}
                              </span>
                            </div>
                          </div>
                          <h3 className="font-heading font-bold text-lg mb-2">{step.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                        </div>
                      </Reveal>
                    )
                  })}
                </ol>

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

        {/* Section 5: Product showcase */}
        <section id="see-it" className="py-20 bg-background scroll-mt-28">
          <div className="container px-6 md:px-12">
            <div className="max-w-6xl mx-auto space-y-12">
              <Reveal className="text-center space-y-4 max-w-3xl mx-auto">
                <p className="text-sm font-semibold uppercase tracking-wider text-secondary">See it</p>
                <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-balance">
                  See the reasoning, not just the score.
                </h2>
                <p className="text-lg text-muted-foreground text-pretty">
                  A teacher console built to surface thinking in real time — and a student experience designed to keep
                  them working.
                </p>
              </Reveal>

              <div className="space-y-12">
                {showcase.map((item, index) => (
                  <Reveal
                    key={item.title}
                    delay={index * 100}
                    className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
                  >
                    <BrowserFrame
                      src={item.image}
                      alt={item.alt}
                      objectPosition={item.objectPosition}
                      aspect={item.aspect}
                      fit={item.fit}
                    />
                    <div className="space-y-3">
                      <h3 className="font-heading text-2xl font-bold text-primary">{item.title}</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed text-pretty">{item.caption}</p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal className="text-center pt-4">
                <a href="#final-cta">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10 bg-transparent"
                  >
                    See it live — Request a Demo
                  </Button>
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Section 6: Why not just ChatGPT? */}
        <section id="why-us" className="py-20 bg-muted/30 scroll-mt-28">
          <div className="container px-6 md:px-12">
            <div className="max-w-4xl mx-auto space-y-10">
              <Reveal className="text-center space-y-4">
                <p className="text-sm font-semibold uppercase tracking-wider text-secondary">Why us</p>
                <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-balance">
                  They prompt. We architect.
                </h2>
                <p className="text-lg text-muted-foreground text-pretty">
                  General chatbots can be told to withhold an answer — and talked back out of it minutes later.
                  IgniteMath&apos;s restraint is built into the system, not bolted on as a prompt.
                </p>
              </Reveal>

              <Reveal delay={150} className="overflow-hidden rounded-2xl border border-border shadow-sm">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-primary text-primary-foreground">
                      <th className="p-4 font-heading font-semibold text-sm sm:text-base" />
                      <th className="p-4 font-heading font-semibold text-sm sm:text-base">General AI tools</th>
                      <th className="p-4 font-heading font-semibold text-sm sm:text-base bg-secondary text-secondary-foreground">
                        IgniteMath
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((row, index) => (
                      <tr key={row.label} className={index % 2 === 0 ? "bg-background" : "bg-muted/40"}>
                        <th scope="row" className="p-4 font-semibold text-sm text-foreground align-top">
                          {row.label}
                        </th>
                        <td className="p-4 text-sm text-muted-foreground align-top">
                          <span className="flex items-start gap-2">
                            <X className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                            {row.general}
                          </span>
                        </td>
                        <td className="p-4 text-sm text-foreground align-top bg-secondary/5">
                          <span className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                            <span className="font-medium">{row.ignite}</span>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Section 7: Responsible AI & trust */}
        <section className="py-20 bg-background">
          <div className="container px-6 md:px-12">
            <div className="max-w-6xl mx-auto space-y-12">
              <Reveal className="text-center">
                <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-balance">
                  Built for the realities of a real classroom.
                </h2>
              </Reveal>

              <div className="grid md:grid-cols-3 gap-8">
                {trustCards.map((card, index) => {
                  const Icon = card.icon
                  return (
                    <Reveal
                      key={card.title}
                      delay={index * 120}
                      className="group bg-muted/30 p-8 rounded-xl border border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30"
                    >
                      <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center mb-6 shadow-sm transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <h3 className="font-heading text-xl font-bold mb-3">{card.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{card.description}</p>
                    </Reveal>
                  )
                })}
              </div>

              <Reveal className="text-center">
                <Link
                  href="/science"
                  className="inline-flex items-center gap-1 font-semibold text-secondary hover:underline"
                >
                  Read our Student Data Pledge
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Section 8: What teachers get */}
        <section className="py-20 bg-muted/30">
          <div className="container px-6 md:px-12">
            <div className="max-w-5xl mx-auto space-y-12">
              <Reveal className="text-center">
                <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-balance">
                  More signal. More reach. More time to teach.
                </h2>
              </Reveal>

              <Reveal delay={100} className="max-w-3xl mx-auto space-y-3">
                <BrowserFrame
                  src="/images/ignitemath-agent-monitor.png"
                  alt="IgniteMath monitor: students progress through finding, correcting, and explaining an error."
                  objectPosition="object-center"
                  aspect="aspect-[5/4]"
                  fit="object-contain"
                />
                <p className="text-sm text-muted-foreground text-center text-pretty">
                  Watch reasoning unfold step by step — find the error, correct it, explain why.
                </p>
              </Reveal>

              <div className="grid md:grid-cols-3 gap-8">
                {teacherBenefits.map((benefit, index) => {
                  const Icon = benefit.icon
                  return (
                    <Reveal
                      key={benefit.title}
                      delay={index * 120}
                      className="group bg-background p-8 rounded-xl border border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-secondary/40"
                    >
                      <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center mb-6 shadow-sm transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <h3 className="font-heading text-lg font-bold mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </Reveal>
                  )
                })}
              </div>

              <Reveal delay={150} className="max-w-3xl mx-auto">
                <blockquote className="relative bg-primary text-primary-foreground rounded-2xl p-8 md:p-10 shadow-lg">
                  <Quote className="h-8 w-8 text-secondary mb-4" />
                  <p className="font-heading text-xl md:text-2xl font-medium leading-relaxed text-balance">
                    &ldquo;If you can stop them from copy-pasting answers, I&apos;ll buy it for every campus I
                    manage.&rdquo;
                  </p>
                  <footer className="mt-4 text-sm text-primary-foreground/70">
                    — Charter network principal, IgniteMath interview
                  </footer>
                </blockquote>
              </Reveal>

              <Reveal className="text-center">
                <a href="#final-cta">
                  <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    Request a Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Section 10: FAQ */}
        <section id="faq" className="py-20 bg-muted/30 scroll-mt-28">
          <div className="container px-6 md:px-12">
            <div className="max-w-3xl mx-auto space-y-10">
              <Reveal className="text-center">
                <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-balance">
                  Frequently asked questions
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <Faq />
              </Reveal>
            </div>
          </div>
        </section>

        {/* Section 11: Final CTA */}
        <section id="final-cta" className="py-20 bg-primary text-primary-foreground scroll-mt-28">
          <div className="container px-6 md:px-12">
            <Reveal className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-balance">
                Built for teachers. Grounded in science.
              </h2>
              <p className="text-xl text-primary-foreground/80 text-pretty">
                Bring reasoning back to your math classroom — without losing control to the AI.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  Request a Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                >
                  Join the waitlist
                </Button>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
