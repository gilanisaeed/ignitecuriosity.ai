import type React from "react"
import type { Metadata, Viewport } from "next"
import { Montserrat, Roboto, Roboto_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
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
    default: "Ignite Curiosity Lab — Teacher-Directed AI for Mathematical Reasoning",
    template: "%s | Ignite Curiosity Lab",
  },
  description:
    "Ignite Curiosity Lab builds teacher-directed learning technology grounded in cognitive and learning science. Meet IgniteMath: the alternative to the answer engine that turns passive consumption into active reasoning.",
  keywords: [
    "AI in education",
    "teacher-directed AI",
    "math education",
    "IgniteMath",
    "responsible AI",
    "mathematical reasoning",
    "EdTech",
  ],
  authors: [{ name: "Ignite Curiosity Lab" }],
  openGraph: {
    type: "website",
    title: "Ignite Curiosity Lab — Teacher-Directed AI for Mathematical Reasoning",
    description:
      "The alternative to the answer engine. Teacher-directed AI that turns passive consumption into active reasoning.",
    siteName: "Ignite Curiosity Lab",
    images: [{ url: "/images/icl-mainpage.jpg", width: 1280, height: 720, alt: "Ignite Curiosity Lab" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ignite Curiosity Lab — Teacher-Directed AI for Mathematical Reasoning",
    description:
      "The alternative to the answer engine. Teacher-directed AI that turns passive consumption into active reasoning.",
    images: ["/images/icl-mainpage.jpg"],
  },
  icons: {
    icon: "/icon.svg",
  },
    generator: 'v0.app'
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
        <Analytics />
      </body>
    </html>
  )
}
