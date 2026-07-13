import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { PhilosophySection } from "@/components/philosophy-section"
import { ProductSpotlight } from "@/components/product-spotlight"
import { LabPromiseSection } from "@/components/lab-promise-section"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <PhilosophySection />
        <ProductSpotlight />
        <LabPromiseSection />
      </main>
      <SiteFooter />
    </div>
  )
}
