import { SiteHeader } from "@/components/site-header"
import { AboutSection } from "@/components/about-section"
import { SiteFooter } from "@/components/site-footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader current="about" />
      <main className="flex-1">
        <AboutSection />
      </main>
      <SiteFooter />
    </div>
  )
}
