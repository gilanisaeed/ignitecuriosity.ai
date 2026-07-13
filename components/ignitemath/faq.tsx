import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    q: "How does it guide students without just giving the answer?",
    a: "IgniteMath is designed so the assistant can't hand over the solution — it's built to coach the reasoning, not to deliver results. It can tell whether a student is on track and what to ask next, while keeping the answer out of reach. That restraint is part of how the product is built, so it holds up even when students try to get around it.",
  },
  {
    q: "Is student data safe?",
    a: "Yes. IgniteMath is FERPA/COPPA-aligned with consent-based data governance, and we never sell student data. See our Student Data Pledge for specifics.",
  },
  {
    q: "What devices and bandwidth does it need?",
    a: "It's designed to run on the hardware schools already have, with fast responses even on low-bandwidth networks. No special equipment required.",
  },
  {
    q: "Which grades and topics are supported today?",
    a: "We're starting with High School Algebra I and expanding from there. Talk to us about your scope.",
  },
  {
    q: "How long does it take to roll out?",
    a: "A pilot can be running in a handful of classrooms quickly, with our support throughout. We handle the heavy lifting.",
  },
  {
    q: "Does the teacher stay in control?",
    a: "Always. You set the guardrails, approve the approach, and control pacing. The AI never advances the class on its own.",
  },
]

export function Faq() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-base font-bold text-foreground hover:no-underline">
            {faq.q}
          </AccordionTrigger>
          <AccordionContent className="text-base text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
