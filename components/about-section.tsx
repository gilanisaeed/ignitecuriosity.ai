import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="100%" height="100%" fill="#F7F8FC" />
        <path d="M0 0 L600 800 L400 800 L-200 0 Z" fill="#E2E0F0" opacity="0.15" />
        <path d="M1440 0 L840 800 L1040 800 L1640 0 Z" fill="#DFF1F8" opacity="0.15" />
        <path d="M720 0 L500 800 L940 800 Z" fill="white" opacity="0.3" />
      </svg>
      {/* Section 1: The Origin Story */}
      <div className="container relative z-10 px-6 md:px-12 mb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/about-collaboration.png"
              alt="Ignite Curiosity Lab research team collaborating around laptops and a whiteboard, bridging learning science and AI engineering"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent mix-blend-overlay" />
          </div>
          <div className="space-y-6">
            <h1 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
              We believe the future of AI isn't autonomous. <br />
              <span className="text-primary">It's collaborative.</span>
            </h1>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                We started Ignite Curiosity Lab because we identified a fundamental misalignment. While Silicon Valley
                was racing to build "autonomous AI tutors," they were accidentally building "Answer Engines."
              </p>
              <p>
                Classrooms were facing a different reality. Math scores were at a 20-year low, and students were falling
                into the "Shortcut Trap", using AI to bypass the struggle of learning.
              </p>
              <p>
                Meanwhile, teachers were being handed "Black Box" tools they couldn't control and didn't trust.
              </p>
              <p>
                We asked a different question: What if AI didn't try to replace the teacher? What if it was designed to
                amplify them?
              </p>
              <p className="font-medium text-foreground">
                We built Ignite Curiosity Lab to bridge the gap between advanced AI and the science of how people
                actually learn.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Our Mission */}
      <div className="bg-muted/30 py-24 mb-24 relative z-10">
        <div className="container px-6 md:px-12 text-center max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8 leading-relaxed">
            Ignite Curiosity Lab builds responsible, teacher-directed AI that amplifies human instruction and elevates
            student reasoning.
          </h2>
          <p className="text-xl text-muted-foreground">
            Through research-driven design, transparent AI architectures, and a deep commitment to educational equity,
            we are empowering schools to move beyond "passive consumption" and deliver meaningful, personalized learning
            at scale.
          </p>
        </div>
      </div>

      {/* Section 3: The Team */}
      <div className="container px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary mb-4">
            Where Learning Science Directs AI Engineering.
          </h2>
          <p className="text-xl text-muted-foreground">
            A multidisciplinary team bridging the gap between academic research and scalable technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="group relative overflow-hidden rounded-2xl bg-muted/20 border hover:border-primary/50 transition-colors">
            <div className="aspect-square relative overflow-hidden bg-muted">
              <Image
                src="/azin-sanjari.png"
                alt="Dr. Azin Sanjari"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="font-heading text-xl font-bold text-primary">Dr. Azin Sanjari</h3>
              <p className="text-sm font-medium text-primary mb-4">Co-Founder & Learning Sciences Lead</p>
              <p className="text-sm text-muted-foreground">
                Dr. Sanjari defines the pedagogical DNA of the Lab. As an Assistant Professor of Mathematics Education
                at UCA, she brings deep expertise in instructional design and teacher-AI collaboration. She ensures that
                every line of code we write serves a pedagogical purpose, grounding our technology in the reality of
                K–12 classrooms.
              </p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="group relative overflow-hidden rounded-2xl bg-muted/20 border hover:border-primary/50 transition-colors">
            <div className="aspect-square relative overflow-hidden bg-muted">
              <Image
                src="/azade-sanjari.jpg"
                alt="Azade Sanjari"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="font-heading text-xl font-bold text-primary">Azade Sanjari</h3>
              <p className="text-sm font-medium text-primary mb-4">Co-Founder & CEO | AI Architect</p>
              <p className="text-sm text-muted-foreground">
                As CEO and Lead Architect, Azade bridges the gap between abstract learning science and scalable
                technology. With over a decade of experience in reinforcement learning and AI & ML pipelines, she
                translates complex pedagogical principles into the architectural blueprint for our "Teacher-Directed"
                engine. She leads the technical vision of the Lab, orchestrating the collaboration between research and
                engineering to deliver solutions where AI amplifies, rather than replaces, the teacher.
              </p>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="group relative overflow-hidden rounded-2xl bg-muted/20 border hover:border-primary/50 transition-colors">
            <div className="aspect-square relative overflow-hidden bg-muted">
              <Image
                src="/images/saeed-gilani.jpg"
                alt="Saeed Gilani"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="font-heading text-xl font-bold text-primary">Saeed Gilani</h3>
              <p className="text-sm font-medium text-primary mb-4">CTO & System Architect</p>
              <p className="text-sm text-muted-foreground">
                Saeed is the engineering force behind the platform. As a software architect with years of experience
                building scalable systems, he leads the hands-on implementation of IgniteMath. He translates the Lab's
                architectural vision into robust, production-ready code, ensuring the system is secure (FERPA/COPPA),
                real-time, and optimized to run efficiently even in low-bandwidth school environments.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4: Footer CTA */}
      <div className="container px-6 md:px-12 mt-24 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary mb-8">
            Built for Teachers. Backed by Science.
          </h2>
          <Link href="/ignitemath">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              Explore IgniteMath
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
