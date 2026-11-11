"use client"

import { useEffect, useRef } from "react"
import { c } from "@/app/ignitethinking/cx"

// The beta form, ported from the draft's second <script>
// (docs/handoff-2026-11-10/source/IgniteThinking-Page-v3_34.html), logic as
// written. It composes a message in the visitor's own mail client; nothing is
// transmitted from this page. After submit, an on-page line says to press Send
// in the mail app, with the address as a fallback (v3.25).

export function BetaForm() {
  const formRef = useRef<HTMLFormElement | null>(null)

  useEffect(() => {
    const f = formRef.current
    if (!f) return
    const nm = f.querySelector("#f-name") as HTMLInputElement
    const em = f.querySelector("#f-email") as HTMLInputElement
    const q = f.querySelector("#f-q") as HTMLTextAreaElement
    const err = f.querySelector("#f-err") as HTMLParagraphElement
    const ok = f.querySelector("#f-ok") as HTMLParagraphElement
    let intent = "beta"

    const buttons = Array.from(f.querySelectorAll<HTMLButtonElement>('button[type="submit"]'))
    const onPick = (e: Event) => {
      intent = (e.currentTarget as HTMLButtonElement).getAttribute("data-intent") || "beta"
    }
    buttons.forEach((b) => b.addEventListener("click", onPick))

    const onSubmit = (e: Event) => {
      e.preventDefault()
      const n = nm.value.trim()
      const m = em.value.trim()
      if (!n || !m || m.indexOf("@") < 1 || m.indexOf(".") < 0) {
        err.textContent = "Please add your first name and an email address, so we can write back."
        ;(n ? em : nm).focus()
        return
      }
      err.textContent = ""
      ok.textContent = ""
      const subj = intent === "beta" ? "IgniteThinking beta request" : "A question about IgniteThinking"
      const body = "Name: " + n + "\nEmail: " + m + (q.value.trim() ? "\n\n" + q.value.trim() : "")
      const href =
        "mailto:hello@ignitecuriosity.ai?subject=" + encodeURIComponent(subj) + "&body=" + encodeURIComponent(body)
      window.location.href = href
      ok.appendChild(
        document.createTextNode(
          "Your mail app should open with this message filled in. Press Send there to finish. If nothing opened, write to us at ",
        ),
      )
      const a = document.createElement("a")
      a.href = href
      a.textContent = "hello@ignitecuriosity.ai"
      ok.appendChild(a)
      ok.appendChild(document.createTextNode("."))
    }
    f.addEventListener("submit", onSubmit)

    return () => {
      buttons.forEach((b) => b.removeEventListener("click", onPick))
      f.removeEventListener("submit", onSubmit)
    }
  }, [])

  return (
    <form className={c("signup")} id="betaform" noValidate ref={formRef}>
      <div className={c("f-row")}>
        <label htmlFor="f-name">Your first name</label>
        <input id="f-name" type="text" autoComplete="given-name" required />
      </div>
      <div className={c("f-row")}>
        <label htmlFor="f-email">Your email</label>
        <input id="f-email" type="email" autoComplete="email" required />
        <span className={c("f-hint")}>A grown-up&rsquo;s email. We never ask for your child&rsquo;s name or details.</span>
      </div>
      <div className={c("f-row")}>
        <label htmlFor="f-q">
          Anything you would like to ask? <span className={c("opt")}>optional</span>
        </label>
        <textarea id="f-q" rows={3}></textarea>
      </div>
      <p className={c("f-err")} id="f-err" role="alert" aria-live="polite"></p>
      <p className={c("f-ok")} id="f-ok" role="status" aria-live="polite"></p>
      <div className={c("cta-row")} style={{ marginTop: "6px" }}>
        <button type="submit" className={c("btn btn-primary")} data-intent="beta">
          Request beta access
        </button>
        <button type="submit" className={c("btn btn-ghost")} data-intent="ask">
          Ask us a question
        </button>
      </div>
      <p className={c("note")}>
        This opens a filled-in message in your own mail app. Nothing leaves your device until you send it.
      </p>
    </form>
  )
}
