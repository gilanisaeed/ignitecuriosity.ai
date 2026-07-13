import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CtaBand() {
  return (
    <section className="bg-[#192028] py-20 px-4">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 text-balance">
          Ready to lead in the AI era?
        </h2>
        <p className="text-lg text-white/70 mb-8 text-pretty">
          Let&apos;s build a future where technology amplifies human curiosity.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-[#F27A37] hover:bg-[#F27A37]/90 text-[#2c2a33] font-medium text-lg px-8 py-6 h-auto"
        >
          <Link href="/igniteed/readiness-review">
            Readiness Review
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
