"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check } from "lucide-react"

export function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    // Soft conversion: capture intent locally; wire to a real endpoint later.
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex items-center justify-center gap-2 text-sm font-medium text-primary">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
          <Check className="h-4 w-4" />
        </span>
        You&apos;re on the list. We&apos;ll be in touch about the pilot.
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col sm:flex-row items-stretch gap-3">
      <Input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@school.edu"
        aria-label="Email address"
        className="h-11 flex-1 bg-background"
      />
      <Button
        type="submit"
        className="h-11 px-6 bg-secondary text-secondary-foreground hover:bg-secondary/90 whitespace-nowrap"
      >
        Join the pilot waitlist
      </Button>
    </form>
  )
}
