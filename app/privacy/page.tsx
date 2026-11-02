import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Privacy notice",
}

// Placeholder only (handoff A4). The real notice comes from counsel and is a
// launch blocker; no legal text is written or adapted here.

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="py-20">
          <div className="container px-6 md:px-12">
            <h1 className="font-heading text-3xl font-bold text-primary mb-6">Privacy notice</h1>
            <p className="max-w-prose">
              Our privacy notice is being finalized and will be published here before the IgniteThinking beta opens.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
