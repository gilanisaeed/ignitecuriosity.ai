import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Reveal } from "@/components/reveal"

export function HeroSection() {
  const trust = ["NVIDIA Inception", "Stanford LEAD · LISA cohort 11 · Top-10 Finalist"]

  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-20">
      {/* Background image + scrim (identical to IgniteEd) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/home-hero-classroom.jpg"
          alt="A teacher and two high-school students reasoning together over handwritten math work in a sunlit classroom"
          fill
          priority
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#192028]/80 to-[#56457f]/60" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20 text-center">
        <Reveal className="mx-auto flex max-w-4xl flex-col items-center">
          {/* Kicker pill */}
          <span className="mb-6 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium uppercase tracking-wide text-white backdrop-blur-sm">
            Shaped by Stanford LEAD
          </span>

          <h1 className="mb-6 font-heading text-5xl font-semibold text-balance text-white md:text-6xl lg:text-7xl">
            Ignite Curiosity Lab: Where Human Curiosity Meets Responsible AI.
          </h1>

          <h2 className="mb-8 text-2xl text-balance text-white/90 md:text-3xl lg:text-4xl">
            Learning to think with AI — not just use it.
          </h2>

          <p className="mx-auto mb-12 max-w-4xl text-lg leading-relaxed text-white/85 md:text-xl">
            Ignite Curiosity Lab is a research-driven product lab building teacher-directed learning technology grounded
            in cognitive and learning science. As AI floods the classroom, we are building the alternative to the answer
            engine: tools that turn passive consumption back into active reasoning.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/ignitemath">
              <Button
                size="lg"
                className="h-auto bg-[#F27A37] px-8 py-6 text-lg font-medium text-[#2c2a33] hover:bg-[#F27A37]/90"
              >
                Meet IgniteMath
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/science">
              <Button
                size="lg"
                variant="outline"
                className="h-auto border-white/30 bg-white/10 px-8 py-6 text-lg text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
              >
                Explore the Science
              </Button>
            </Link>
          </div>

          {/* Trust chips — two, centered */}
          <div className="mx-auto mt-16 flex max-w-3xl flex-wrap justify-center gap-4">
            {trust.map((t) => (
              <div
                key={t}
                className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-3 text-white/90 backdrop-blur-sm"
              >
                <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#F27A37]" />
                <span className="text-sm font-medium">{t}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
