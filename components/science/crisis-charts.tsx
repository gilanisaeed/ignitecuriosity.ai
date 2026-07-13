"use client"

import { Bar, BarChart, CartesianGrid, XAxis, LabelList, RadialBar, RadialBarChart, PolarAngleAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import type { ChartConfig } from "@/components/ui/chart"

const proficiencyData = [
  { year: "2019", value: 37 },
  { year: "2024", value: 33 },
]

const proficiencyConfig = {
  value: { label: "College-ready (%)", color: "var(--destructive)" },
} satisfies ChartConfig

const burnoutData = [{ name: "concern", value: 95, fill: "var(--destructive)" }]

const burnoutConfig = {
  value: { label: "Answer-leaking" },
} satisfies ChartConfig

export function ProficiencyChart() {
  return (
    <ChartContainer config={proficiencyConfig} className="h-[180px] w-full">
      <BarChart accessibilityLayer data={proficiencyData} margin={{ top: 24, right: 8, left: 8, bottom: 0 }}>
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis dataKey="year" tickLine={false} axisLine={false} tickMargin={8} fontSize={12} />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <Bar dataKey="value" fill="var(--color-value)" radius={[4, 4, 0, 0]}>
          <LabelList dataKey="value" position="top" className="fill-foreground" fontSize={11} formatter={(v: number) => `${v}%`} />
        </Bar>
      </BarChart>
    </ChartContainer>
  )
}

export function BurnoutGauge() {
  return (
    <ChartContainer config={burnoutConfig} className="mx-auto aspect-square h-[180px] w-[180px]">
      <RadialBarChart
        data={burnoutData}
        cx="50%"
        cy="50%"
        startAngle={90}
        endAngle={-270}
        innerRadius={66}
        outerRadius={92}
      >
        <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
        <RadialBar
          background={{ fill: "var(--muted)" }}
          dataKey="value"
          cornerRadius={8}
          angleAxisId={0}
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-destructive font-heading text-3xl font-bold"
        >
          95%
        </text>
      </RadialBarChart>
    </ChartContainer>
  )
}
