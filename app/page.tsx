import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { PhilosophySection } from "@/components/philosophy-section"
import { LabPromiseSection } from "@/components/lab-promise-section"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <PhilosophySection />
        <LabPromiseSection />
      </main>
      <SiteFooter />
    </div>
  )
}
