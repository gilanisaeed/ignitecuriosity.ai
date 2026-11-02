import type React from "react"
import type { Metadata, Viewport } from "next"
import { Montserrat, Roboto, Roboto_Mono } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
  display: "swap",
})

// Lab-label monospace: eyebrows, tabular stats, and cited source notes.
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://ignitecuriosity.ai"),
  title: {
    default: "Ignite Curiosity Lab | Learning to think with AI, not just use it",
    template: "%s | Ignite Curiosity Lab",
  },
  description:
    "Ignite Curiosity Lab creates AI learning experiences that build independent reasoning skills in K-12 students, where AI guides their thinking instead of giving them answers.",
  keywords: ["AI in education", "math education", "responsible AI", "mathematical reasoning", "EdTech"],
  authors: [{ name: "Ignite Curiosity Lab" }],
  openGraph: {
    type: "website",
    title: "Ignite Curiosity Lab | Learning to think with AI, not just use it",
    description:
      "Ignite Curiosity Lab creates AI learning experiences that build independent reasoning skills in K-12 students, where AI guides their thinking instead of giving them answers.",
    siteName: "Ignite Curiosity Lab",
    images: [{ url: "/images/icl-mainpage.jpg", width: 1280, height: 720, alt: "Ignite Curiosity Lab" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ignite Curiosity Lab | Learning to think with AI, not just use it",
    description:
      "Ignite Curiosity Lab creates AI learning experiences that build independent reasoning skills in K-12 students, where AI guides their thinking instead of giving them answers.",
    images: ["/images/icl-mainpage.jpg"],
  },
  icons: {
    icon: "/icon.svg",
  },
}

export const viewport: Viewport = {
  themeColor: "#56457f",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body
        className={`${montserrat.variable} ${roboto.variable} ${robotoMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
