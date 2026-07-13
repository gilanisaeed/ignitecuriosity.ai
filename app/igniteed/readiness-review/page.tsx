import { Navigation } from "@/components/igniteed/navigation"
import { Footer } from "@/components/igniteed/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, Shield, Compass, Puzzle, MessageSquare, ClipboardCheck, Map } from "lucide-react"
import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CalendlyEmbed } from "@/components/igniteed/calendly-embed"

export default function ReadinessReviewPage() {
  return (
    <main className="min-h-screen bg-[#FEFDFB]">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-sans text-[#192028] mb-4">
            Let's Assess Your School's AI Readiness.
          </h1>
          <p className="text-xl text-[#56457f] font-medium mb-6">
            A 30-minute leadership conversation to identify governance gaps, instructional risk, and next steps.
          </p>
          <div className="text-lg text-[#192028]/70 max-w-3xl mx-auto space-y-4 text-left md:text-center">
            <p>
              AI adoption is already happening in schools. Often faster than policy, leadership alignment, or
              instructional frameworks can keep up. This conversation is not a product demo. It is a leadership-level
              review of where your school currently stands, where risk may be emerging, and what level of response is
              appropriate.
            </p>
            <p>
              Whether you are cautiously exploring AI or actively managing its use, we help school leaders move from
              uncertainty to clarity.
            </p>
          </div>

          {/* Qualifier text - styled as specified */}
          <p className="text-base text-[#192028]/60 italic mt-8 mb-8 max-w-2xl mx-auto">
            IgniteEd engagements are initiated by school or district leadership and designed to align educators,
            administrators, and governance bodies.
          </p>

          <Button className="bg-[#F27A37] hover:bg-[#F27A37]/90 text-[#2C2A33] text-lg px-8 py-6 h-auto">
            Schedule an AI Readiness Review
          </Button>

          <p className="text-sm text-[#192028]/50 mt-4">This review is free for qualified schools and districts.</p>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Calendly Embed */}
            <div className="md:col-span-2">
              <Card className="border-2 border-[#56457f]/20 h-full overflow-hidden">
                <CardContent className="p-0">
                  <CalendlyEmbed />
                </CardContent>
              </Card>
            </div>

            {/* Why Book Sidebar */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold font-sans text-[#192028]">Why Book This Review?</h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#56457f]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Search className="w-5 h-5 text-[#56457f]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#192028]">Readiness Snapshot</h4>
                    <p className="text-[#192028]/70 text-sm">
                      We'll map where your school falls across governance, instruction, and tool usage (Google,
                      Microsoft, or Canvas).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#f27a37]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-[#f27a37]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#192028]">Risk Identification</h4>
                    <p className="text-[#192028]/70 text-sm">
                      We help surface policy gaps, privacy exposure, and "shadow AI" use before they become issues.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#2f8ca8]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Compass className="w-5 h-5 text-[#2f8ca8]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#192028]">Leadership Clarity</h4>
                    <p className="text-[#192028]/70 text-sm">
                      Leave with a clear picture of what not to worry about and what requires immediate action.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#192028]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Puzzle className="w-5 h-5 text-[#192028]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#192028]">Platform-Agnostic</h4>
                    <p className="text-[#192028]/70 text-sm">
                      We account for your specific ecosystem. We don&apos;t sell software; we help you govern it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-16 px-4 bg-[#192028]">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-white text-center mb-12">What Happens Next?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F27A37] rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <div className="text-[#F27A37] font-bold text-sm mb-2">STEP 1</div>
              <h3 className="text-xl font-bold text-white mb-2">The Context</h3>
              <p className="text-white/70">
                We discuss your leadership concerns, instructional realities, and existing tech stack. No preparation
                required.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#2f8ca8] rounded-full flex items-center justify-center mx-auto mb-4">
                <ClipboardCheck className="w-8 h-8 text-white" />
              </div>
              <div className="text-[#2f8ca8] font-bold text-sm mb-2">STEP 2</div>
              <h3 className="text-xl font-bold text-white mb-2">The Assessment</h3>
              <p className="text-white/70">
                We verbally map your current readiness against widely adopted governance, instructional, and privacy
                best practices in K-12 education.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#56457f] rounded-full flex items-center justify-center mx-auto mb-4">
                <Map className="w-8 h-8 text-white" />
              </div>
              <div className="text-[#56457f] font-bold text-sm mb-2">STEP 3</div>
              <h3 className="text-xl font-bold text-white mb-2">The Roadmap</h3>
              <p className="text-white/70">
                If gaps are identified, we outline what a responsible response looks like - whether that's a policy
                update, a pilot cohort, or a full partnership.
              </p>
            </div>
          </div>

          <p className="text-center text-white/60 mt-10 text-sm italic">
            There is no obligation to proceed beyond the review. If no action is needed, we will tell you.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-[#192028] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-[#2f8ca8]/20 rounded-lg px-6 bg-white">
              <AccordionTrigger className="text-lg font-bold text-[#192028] hover:no-underline py-6">
                Is this a sales call?
              </AccordionTrigger>
              <AccordionContent className="text-[#192028]/70 pb-6">
                No. This is a readiness and governance review. Many schools use this conversation simply to validate
                where they stand and determine next steps internally.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-[#2f8ca8]/20 rounded-lg px-6 bg-white">
              <AccordionTrigger className="text-lg font-bold text-[#192028] hover:no-underline py-6">
                Who should attend?
              </AccordionTrigger>
              <AccordionContent className="text-[#192028]/70 pb-6">
                A school leader (Head of School, Principal, Director of Curriculum) is best. IT Directors are welcome
                but not required for this initial strategic discussion.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-[#2f8ca8]/20 rounded-lg px-6 bg-white">
              <AccordionTrigger className="text-lg font-bold text-[#192028] hover:no-underline py-6">
                Do we need to have AI already in use?
              </AccordionTrigger>
              <AccordionContent className="text-[#192028]/70 pb-6">
                No. In fact, many schools book this review specifically because AI use is informal, untracked, or
                &quot;shadow.&quot;
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-[#2f8ca8]/20 rounded-lg px-6 bg-white">
              <AccordionTrigger className="text-lg font-bold text-[#192028] hover:no-underline py-6">
                Will we receive a proposal?
              </AccordionTrigger>
              <AccordionContent className="text-[#192028]/70 pb-6">
                Only if it&apos;s appropriate. We only partner with schools where we can drive measurable transformation.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Trust Footer */}
      <section className="py-12 px-4 border-t border-[#192028]/10">
        <div className="container mx-auto max-w-4xl">
          <p className="text-center text-[#216B80] text-sm mb-6 font-medium">Platform Agnostic - Works with</p>
          <div className="flex justify-center items-center gap-8 flex-wrap opacity-60 mb-6">
            {/* OpenAI Logo */}
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#192028]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
              </svg>
              <span className="text-[#192028] text-sm font-medium">OpenAI</span>
            </div>
            {/* Anthropic Logo */}
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#192028]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.304 3.541h-3.672l6.696 16.918h3.672l-6.696-16.918Zm-10.608 0L0 20.459h3.744l1.37-3.553h7.075l1.369 3.553h3.744L10.608 3.541h-3.912Zm.24 10.27 2.494-6.467 2.494 6.467H6.936Z" />
              </svg>
              <span className="text-[#192028] text-sm font-medium">Anthropic</span>
            </div>
            {/* Google Logo */}
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#192028"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#192028"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#192028"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#192028"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="text-[#192028] text-sm font-medium">Google</span>
            </div>
            {/* Microsoft Logo */}
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#192028"
                  d="M0 0h11.377v11.372H0zm12.623 0H24v11.372H12.623zM0 12.623h11.377V24H0zm12.623 0H24V24H12.623z"
                />
              </svg>
              <span className="text-[#192028] text-sm font-medium">Microsoft</span>
            </div>
            {/* Canvas Logo */}
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#192028]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4a9.6 9.6 0 110 19.2 9.6 9.6 0 010-19.2zm0 3.6a6 6 0 100 12 6 6 0 000-12z" />
              </svg>
              <span className="text-[#192028] text-sm font-medium">Canvas</span>
            </div>
          </div>
          <p className="text-center text-[#192028]/50 text-sm">
            IgniteEd is platform-agnostic. We help schools lead responsibly across evolving AI ecosystems.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
