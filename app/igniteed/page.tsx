import { Navigation } from "@/components/igniteed/navigation"
import { HeroSection } from "@/components/igniteed/hero-section"
import { VisionSection } from "@/components/igniteed/vision-section"
import { ProgramSection } from "@/components/igniteed/program-section"
import { PartnershipTiers } from "@/components/igniteed/partnership-tiers"
import { OutcomesSection } from "@/components/igniteed/outcomes-section"
import { CtaBand } from "@/components/igniteed/cta-band"
import { Footer } from "@/components/igniteed/footer"

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <div id="about">
        <VisionSection />
      </div>
      <div id="program">
        <ProgramSection />
      </div>
      <div id="pricing">
        <PartnershipTiers />
      </div>
      <div id="impact">
        <OutcomesSection />
      </div>
      <CtaBand />
      <Footer />
    </div>
  )
}
