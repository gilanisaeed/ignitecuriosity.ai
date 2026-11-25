"use client"

import { useEffect, useRef } from "react"
import { c } from "@/app/ignitethinking/cx"

// The beta form, ported from the draft's second <script>
// (docs/handoff-2026-11-10/source/IgniteThinking-Page-v3_52.html), logic as
// written. v3.42 (W-2): one field, the email; the optional question is asked on
// the next step, which is the mail message itself. It composes a message in the
// visitor's own mail client; nothing is transmitted from this page. After
// submit, an on-page line says to press Send in the mail app, with the address
// as a fallback.

export function BetaForm() {
  const formRef = useRef<HTMLFormElement | null>(null)

  useEffect(() => {
    const f = formRef.current
    if (!f) return
    const em = f.querySelector("#f-email") as HTMLInputElement
    const err = f.querySelector("#f-err") as HTMLParagraphElement
    const ok = f.querySelector("#f-ok") as HTMLParagraphElement

    const onSubmit = (e: Event) => {
      e.preventDefault()
      const m = em.value.trim()
      /* v3.52: no spaces, a dot after the @, and a real ending */
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(m)) {
        err.textContent = m
          ? "Please check the email address. It looks incomplete."
          : "Please add an email address, so we can write back."
        em.setAttribute("aria-invalid", "true")
        em.focus()
        return
      }
      err.textContent = ""
      ok.textContent = ""
      em.removeAttribute("aria-invalid")
      /* v3.52: ready for the HubSpot form (ruled 25 Nov). Once the form is created, put its
         portal ID and form ID here; the email then goes to us through HubSpot and the visitor
         stays on the page. Until both are set, the mail-app route below is used. Not before
         Privacy Notice v0.9 is live. */
      const HS = { portal: "", form: "" }
      if (HS.portal && HS.form && "fetch" in window) {
        fetch("https://api.hsforms.com/submissions/v3/integration/submit/" + HS.portal + "/" + HS.form, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fields: [{ name: "email", value: m }],
            context: { pageUri: location.href, pageName: document.title },
          }),
        })
          .then((r) => {
            if (!r.ok) throw new Error(String(r.status))
            ok.textContent = "Thank you. Your request is in, and we will write to you at " + m + "."
            f.reset()
          })
          .catch(() => mailApp(m))
        return
      }
      mailApp(m)
    }
    const mailApp = (m: string) => {
      const body =
        "Please send me an invitation to the IgniteThinking Founding Families beta.\n\nEmail: " +
        m +
        "\n\nMy question (optional):\n"
      const href =
        "mailto:hello@ignitecuriosity.ai?subject=" +
        encodeURIComponent("IgniteThinking beta request") +
        "&body=" +
        encodeURIComponent(body)
      window.location.href = href
      ok.appendChild(
        document.createTextNode(
          "Your mail app should open with your request filled in. Add a question if you have one, then press Send there to finish. If nothing opened, write to us at ",
        ),
      )
      const a = document.createElement("a")
      a.href = href
      a.textContent = "hello@ignitecuriosity.ai"
      ok.appendChild(a)
      ok.appendChild(document.createTextNode("."))
      /* v3.52: one click copies the address, for a browser with no mail app set up */
      if (navigator.clipboard) {
        const cb = document.createElement("button")
        cb.type = "button"
        cb.className = c("copy-mail")
        cb.textContent = "Copy email"
        cb.addEventListener("click", () => {
          navigator.clipboard.writeText("hello@ignitecuriosity.ai").then(() => {
            cb.textContent = "Copied"
          })
        })
        ok.appendChild(cb)
      }
    }
    f.addEventListener("submit", onSubmit)
    return () => f.removeEventListener("submit", onSubmit)
  }, [])

  return (
    <form className={c("signup")} id="betaform" noValidate ref={formRef}>
      <div className={c("f-row")}>
        <label htmlFor="f-email">Your email</label>
        <div className={c("f-line")}>
          <input id="f-email" type="email" autoComplete="email" inputMode="email" required aria-describedby="f-hint" />
          <button type="submit" className={c("btn btn-primary")}>
            Request beta access
          </button>
        </div>
        <span className={c("f-hint")} id="f-hint">
          A grown-up&rsquo;s email. We never ask for your child&rsquo;s name or details.
        </span>
      </div>
      <p className={c("f-err")} id="f-err" role="alert" aria-live="polite"></p>
      <p className={c("f-ok")} id="f-ok" role="status" aria-live="polite"></p>
      <p className={c("note")}>
        This opens a filled-in message in your own mail app, where you can add a question. Nothing leaves your device
        until you send it.
      </p>
    </form>
  )
}
