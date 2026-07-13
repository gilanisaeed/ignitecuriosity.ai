import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "IgniteEd: Responsible AI & Adaptive Learning for Educators",
  description:
    "Empowering educators to design adaptive, equitable, and meaningful learning experiences that keep teachers at the heart of the classroom.",
}

export default function IgniteEdLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
