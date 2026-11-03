"use client"

import { useRef, useState, type FormEvent } from "react"
import styles from "@/app/ignitethinking/page.module.css"

// The beta form, ported from the second <script> in
// docs/handoff-2026-11-03/source/IgniteThinking-Page-v3_21.html with the
// logic as written. It composes a message in the visitor's own mail client;
// nothing is transmitted from this page and nothing is stored.

type Intent = "beta" | "ask"

export function BetaForm() {
  const [error, setError] = useState("")
  const intent = useRef<Intent>("beta")
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const questionRef = useRef<HTMLTextAreaElement>(null)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const nm = nameRef.current!
    const em = emailRef.current!
    const n = nm.value.trim()
    const m = em.value.trim()
    if (!n || !m || m.indexOf("@") < 1 || m.indexOf(".") < 0) {
      setError("Please add your first name and an email address, so we can write back.")
      ;(n ? em : nm).focus()
      return
    }
    setError("")
    const q = questionRef.current!.value.trim()
    const subj = intent.current === "beta" ? "IgniteThinking beta request" : "A question about IgniteThinking"
    const body = "Name: " + n + "\nEmail: " + m + (q ? "\n\n" + q : "")
    window.location.href =
      "mailto:hello@ignitecuriosity.ai?subject=" + encodeURIComponent(subj) + "&body=" + encodeURIComponent(body)
  }

  return (
    <form className={styles.signup} id="betaform" noValidate onSubmit={onSubmit}>
      <div className={styles["f-row"]}>
        <label htmlFor="f-name">Your first name</label>
        <input id="f-name" type="text" autoComplete="given-name" required ref={nameRef} />
      </div>
      <div className={styles["f-row"]}>
        <label htmlFor="f-email">Your email</label>
        <input id="f-email" type="email" autoComplete="email" required ref={emailRef} />
        <span className={styles["f-hint"]}>
          A grown-up&rsquo;s email. We never ask for your child&rsquo;s name or details.
        </span>
      </div>
      <div className={styles["f-row"]}>
        <label htmlFor="f-q">
          Anything you would like to ask? <span className={styles.opt}>optional</span>
        </label>
        <textarea id="f-q" rows={3} ref={questionRef}></textarea>
      </div>
      <p className={styles["f-err"]} id="f-err" role="alert" aria-live="polite">
        {error}
      </p>
      <div className={styles["cta-row"]} style={{ marginTop: 6 }}>
        <button
          type="submit"
          className={`${styles.btn} ${styles["btn-primary"]}`}
          onClick={() => (intent.current = "beta")}
        >
          Request beta access
        </button>
        <button
          type="submit"
          className={`${styles.btn} ${styles["btn-ghost"]}`}
          onClick={() => (intent.current = "ask")}
        >
          Ask us a question
        </button>
      </div>
      <p className={styles.note}>
        This opens a filled-in message in your own mail app. Nothing leaves your device until you send it.
      </p>
    </form>
  )
}
