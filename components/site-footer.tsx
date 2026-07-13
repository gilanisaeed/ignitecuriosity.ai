import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WaitlistForm } from "@/components/waitlist-form"

export function SiteFooter() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="border-b bg-primary/5">
        <div className="container py-16 flex flex-col items-center text-center gap-6 px-6 md:px-12">
          <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
            Ready to spark curiosity in your classroom?
          </h2>
          <p className="text-xl text-muted-foreground">
            Join the educators who are teaching students to reason with AI, not just prompt it.
          </p>

          {/* Soft, low-commitment conversion path */}
          <div className="flex flex-col items-center gap-2 pt-2">
            <WaitlistForm />
            <p className="text-xs text-muted-foreground">No spam. Just early access and the occasional research note.</p>
          </div>

          {/* Higher-commitment paths */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <Button
              size="lg"
              className="h-12 px-8 text-base bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              Request a Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="py-12 md:py-16">
        <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4 px-6 md:px-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-heading text-lg font-bold tracking-tight text-primary">Ignite Curiosity Lab</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Empowering the next generation of thinkers with responsible AI technology.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/ignitemath" className="hover:text-foreground transition-colors">
                  IgniteMath
                </Link>
              </li>
              <li>
                <a href="/igniteed/" className="hover:text-foreground transition-colors">
                  IgniteEd
                </a>
              </li>
              <li>
                <Link href="/science" className="hover:text-foreground transition-colors">
                  The Science
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">
                  Student Data Pledge
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mt-12 pt-8 border-t text-center text-sm text-muted-foreground px-6 md:px-12">
          <p>&copy; {new Date().getFullYear()} Ignite Curiosity Lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
