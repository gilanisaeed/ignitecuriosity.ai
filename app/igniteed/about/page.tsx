import { Navigation } from "@/components/igniteed/navigation"
import { Footer } from "@/components/igniteed/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Lightbulb, Shield, Users, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FEFDFB]">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#192028] mb-6 font-sans">
            Innovating at the Intersection of Learning Science & AI
          </h1>
          <p className="text-xl text-[#192028]/70 mb-8">
            We are educators, researchers, and technologists building the future of responsible learning.
          </p>
        </div>
      </section>

      {/* The Relationship Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#56457f]/5 to-[#F27A37]/5">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-[#56457f]/10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#192028] mb-6">IgniteEd by Ignite Curiosity Lab</h2>
            <p className="text-lg text-[#192028]/80 leading-relaxed">
              IgniteEd is the professional transformation arm of{" "}
              <span className="text-[#56457f] font-medium">Ignite Curiosity Lab</span>, a research and innovation hub
              dedicated to "Human-Centered AI." While the Lab builds technology, IgniteEd builds human capability,
              ensuring that educators remain the "architects" of the learning experience.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#192028] mb-6">Our Mission</h2>
            <p className="text-xl text-[#56457f] max-w-4xl mx-auto italic">
              "Ignite Curiosity Lab builds responsible, teacher-directed AI grounded in learning science that amplifies
              human teaching and elevates student reasoning."
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-[#192028] text-center mb-12">Our Three Core Pillars</h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-[#56457f]/10 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#56457f]/10 rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="w-7 h-7 text-[#56457f]" />
              </div>
              <h4 className="text-xl font-semibold text-[#192028] mb-4">Research-Driven Design</h4>
              <p className="text-[#192028]/70 leading-relaxed">
                We don't guess; we follow learning science. Every framework we teach—from Adaptive Learning to
                Inquiry—is built on evidence-based pedagogy, not just "tech trends."
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-[#56457f]/10 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#f27a37]/10 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-[#f27a37]" />
              </div>
              <h4 className="text-xl font-semibold text-[#192028] mb-4">Technical Sovereignty</h4>
              <p className="text-[#192028]/70 leading-relaxed">
                We believe schools deserve to know exactly how their tools work. We demystify "black box" architectures
                and help schools establish governance protocols to ensure data privacy and transparency.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-[#56457f]/10 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#2f8ca8]/10 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-[#2f8ca8]" />
              </div>
              <h4 className="text-xl font-semibold text-[#192028] mb-4">Educational Equity</h4>
              <p className="text-[#192028]/70 leading-relaxed">
                We are committed to delivering meaningful, personalized learning at scale. We use AI to build "3-Path"
                adaptive frameworks that ensure every student gets the support and rigor they need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Origin Story Section */}
      <section className="py-20 px-4 bg-[#192028]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-8 text-center">
            From Student Reasoning to Educator Empowerment
          </h2>
          <div className="space-y-6 text-white/80 text-lg leading-relaxed">
            <p>
              Our journey began with <span className="text-[#F27A37] font-medium">Ignite Math</span>, a platform
              designed to foster deep student reasoning. Through that work, we realized a critical gap in the market:
              schools didn't just need better solutions; they needed a roadmap for how to teach in the AI era.
            </p>
            <p>
              We saw educators overwhelmed by "tool fatigue" and fearful of replacement. We launched{" "}
              <span className="text-[#F27A37] font-medium">IgniteEd</span> to solve this: moving beyond single-subject
              tools to a holistic, Platform-Agnostic Fellowship that turns teachers into "Instructional Architects"
              capable of mastering any AI technology.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#192028] mb-4 text-center">Meet the Leadership</h2>
          <p className="text-[#192028]/70 text-center mb-16 max-w-2xl mx-auto">
            Schools buy from people, especially when navigating the "trust gap" of AI.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#56457f] to-[#F27A37] p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/igniteed/images/azin-sanjari-photo.png"
                    alt="Dr. Azin Sanjari"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#192028] mb-1">Dr. Azin Sanjari</h3>
              <p className="text-[#F27A37] font-medium mb-4">Co-Founder & Research Lead</p>
              <p className="text-[#192028]/70 text-sm leading-relaxed">
                <span className="font-medium text-[#56457f]">
                  The Pedagogue / University Professor of Mathematics Education.
                </span>{" "}
                Leading the integration of learning science and cognitive psychology into our AI frameworks to ensure
                deep learning.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#F27A37] to-[#56457f] p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/igniteed/images/azade-sanjari-photo.jpg"
                    alt="Azade Sanjari"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#192028] mb-1">Azade Sanjari</h3>
              <p className="text-[#F27A37] font-medium mb-4">Head of Operations & Strategy</p>
              <p className="text-[#192028]/70 text-sm leading-relaxed">
                <span className="font-medium text-[#56457f]">The Strategist / AI Scientist.</span> Guiding school
                partners through the complex landscape of AI governance, policy adoption, and institutional change.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#56457f] to-[#F27A37] p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/igniteed/images/saeed-gilani-photo.jpg"
                    alt="Saeed Gilani"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#192028] mb-1">Saeed Gilani</h3>
              <p className="text-[#F27A37] font-medium mb-4">Head of Technology & Product</p>
              <p className="text-[#192028]/70 text-sm leading-relaxed">
                <span className="font-medium text-[#56457f]">The Architect / Software Architect.</span> Leading the
                technical track ("The AI Curator"), helping IT Directors navigate model architectures, local deployment,
                and security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#56457f]/5 to-[#F27A37]/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#192028] mb-8">
            AI Should Amplify Human Teaching, Not Replace It
          </h2>
          <div className="space-y-6 text-lg text-[#192028]/80 leading-relaxed">
            <p>
              We separate ourselves from the crowded "EdTech" market by being{" "}
              <span className="text-[#56457f] font-medium">Tool-Agnostic</span>. We don't sell you a proprietary chatbot
              that locks you in. We teach your staff the enduring principles of Instructional Architecture—design skills
              that apply whether you are using Google, Microsoft, Anthropic, or OpenAI.
            </p>
            <p className="text-xl font-medium text-[#56457f]">
              We believe the future of education isn't "AI vs. Human."
              <br />
              It is <span className="text-[#F27A37]">Human + AI</span>, working in a rigorous, ethical partnership.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#56457f] to-[#2f8ca8]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Explore Our Programs</h2>
          <p className="text-xl text-white/80 mb-8">{"Let's build a future where technology amplifies human curiosity."}</p>
          <Link href="/igniteed/program">
            <Button className="bg-[#F27A37] hover:bg-[#F27A37]/90 text-[#2C2A33] px-8 py-6 text-lg h-auto">
              View the Program
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
