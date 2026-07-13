import { Button } from "@/components/ui/button"
import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { DownloadPDFButton } from "@/components/igniteed/download-pdf-button"

export function HeroSection() {
  const heroFeatures = [
    "Platform Agnostic (Works with Google, Microsoft, & Canvas)",
    "Designed for Grades 3-12",
    "Ethical, Human-in-the-Loop Pedagogy",
    "Year-long Fellowship for Teachers & Leaders",
  ]

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/igniteed/teacher-and-student-collaborating-at-computer-scre.jpg"
          alt="Teacher and student collaborating"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#192028]/80 to-[#56457f]/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-6 text-balance">
          IgniteEd: Responsible AI & Adaptive Learning for Educators
        </h1>

        <h2 className="text-2xl md:text-3xl lg:text-4xl text-white/90 mb-8 text-balance">
          Where human curiosity meets responsible AI.
        </h2>

        <p className="text-lg md:text-xl text-white/85 max-w-4xl mx-auto mb-12 leading-relaxed">
          IgniteEd is a strategic capacity-building partnership designed to help schools navigate the AI disruption with
          safety and rigor. We don't just train users; we build internal expertise. Whether your school uses Google,
          Microsoft, or Apple, our cohort-based fellowship prepares educators to leverage best-in-class models to design
          adaptive, equitable, and human-centered learning ecosystems.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-[#F27A37] hover:bg-[#F27A37]/90 text-[#2c2a33] font-medium text-lg px-8 py-6 h-auto" asChild>
            <a href="/igniteed/readiness-review">Book Your AI Readiness Review</a>
          </Button>
          <DownloadPDFButton />
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {heroFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-white/90 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3"
            >
              <CheckCircle className="w-5 h-5 text-[#F27A37] flex-shrink-0" />
              <span className="text-sm font-medium">{feature}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-[#2f8ca8] text-sm mb-4 font-medium">Platform Agnostic - Works with</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
            {/* OpenAI Logo */}
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
              </svg>
              <span className="text-white/90 text-sm font-medium">OpenAI</span>
            </div>
            {/* Anthropic Logo */}
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.304 3.541h-3.672l6.696 16.918h3.672l-6.696-16.918Zm-10.608 0L0 20.459h3.744l1.37-3.553h7.075l1.369 3.553h3.744L10.608 3.541h-3.912Zm.24 10.27 2.494-6.467 2.494 6.467H6.936Z" />
              </svg>
              <span className="text-white/90 text-sm font-medium">Anthropic</span>
            </div>
            {/* Google Logo */}
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#fff"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#fff"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23 7.7 23 3.99 20.53 2.18 17.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
                <path
                  fill="#fff"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#fff"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="text-white/90 text-sm font-medium">Google</span>
            </div>
            {/* Microsoft Logo */}
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#fff"
                  d="M0 0h11.377v11.372H0zm12.623 0H24v11.372H12.623zM0 12.623h11.377V24H0zm12.623 0H24V24H12.623z"
                />
              </svg>
              <span className="text-white/90 text-sm font-medium">Microsoft</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
