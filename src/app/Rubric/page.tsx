/* eslint-disable react/no-unescaped-entities */
"use client"

import Link from "next/link"
import { Ripple } from "@/components/ui/shadcn-io/ripple"
import { SiteNavigation } from "@/components/site-navigation"

const CUT_CORNER = "polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px))"

const gridPattern = {
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
  backgroundSize: "80px 80px"
}

const judgingFlow = [
  {
    time: "2 Minutes",
    focus: "Story First",
    description: "Hacker explains the customer, problem, and solution."
  },
  {
    time: "3 Minutes",
    focus: "Product Walkthrough",
    description: "Judge uses the product as the intended customer."
  },
  {
    time: "1 Minute",
    focus: "Hidden Gems",
    description: "Hacker highlights features the judge might have missed."
  }
]

const hardRequirements = [
  "Pitch deck ready to share.",
  "Working prototype with an access link for autonomous judging."
]

const tiebreakers = [
  "Accessibility basics covered: contrast, font sizing, and WCAG considerations for the target audience.",
  "Solution attacks a massive problem in an overlooked market (e.g. military mental health, rural food scarcity, public transportation)."
]

const rubricCategories = [
  {
    title: "High Agency / LVL5",
    maxPoints: " /5",
    prompt: "Did the team take ownership and move fast?",
    criteria: [
      "Customer interviews outside the team validating the hypothesis with evidence.",
      "Mid-build testing with prospective customers or stand-ins followed by iteration.",
      "Real customers or prospects have already used the current version.",
      "The team exhibited relentless momentum throughout the hackathon."
    ]
  },
  {
    title: "Creativity, Innovation & Skill",
    maxPoints: " /5",
    prompt: "Did they ship with craft and originality?",
    criteria: [
      "Clear demonstration of technical or creative mastery in the solution.",
      "A clever, simplified approach that saves time or resources.",
      "Blend of technologies, tools, or domain knowledge to unlock the solution.",
      "Solution offers a fresh take instead of a straight remake."
    ]
  },
  {
    title: "Presentation & Clarity",
    maxPoints: " /5",
    prompt: "Can they tell the story under pressure?",
    criteria: [
      "Customer, problem, and solution are explained so clearly a 5-year-old could get it in two minutes.",
      "Demo flows smoothly and showcases the right moments.",
      "They can sell the vision and make you believe."
    ]
  },
  {
    title: "Impact & Usefulness",
    maxPoints: " /5",
    prompt: "Does it matter and does it work?",
    criteria: [
      "Problem is painful, urgent, and affects a sizable group.",
      "Solution directly addresses the core pain point.",
      "Execution feels effective and ready to deliver value.",
      "Feels like a true MVP with a path to go even further."
    ]
  }
]

const bonusPoints = [
  { label: "Cross-functional team members with meaningful impact.", value: "+1" },
  { label: "Open-source project or public repo for the community.", value: "+1" },
  { label: "Functional MVP shipped within the first 24 hours.", value: "+1" },
  { label: "Visible learning or skill growth during the weekend.", value: "+1" },
  { label: "The team clearly had fun building together.", value: "+1" },
  { label: "Judges’ Favor at discretion.", value: "Up to +3" }
]

export default function RubricPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SiteNavigation />
      <section className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden border-b border-white/10 px-6 py-16 md:px-10">
        <Ripple
          numCircles={9}
          className="opacity-60"
          style={{ ["--foreground" as string]: "0 0% 100%" }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div
          className="relative z-10 flex w-full max-w-4xl flex-col items-center gap-8 text-center"
          style={{ fontFamily: "bc-novatica-cyr" }}
        >
          <span className="text-[11px] uppercase tracking-[0.4em] text-orange-400">Judging Philosophy</span>
          <h1 className="text-4xl uppercase tracking-[0.15em] md:text-6xl font-atamiga">
            High Agency Wins
          </h1>
          <p className="max-w-3xl text-sm text-zinc-300 md:text-base">
            We reward teams that move fast, execute relentlessly, and ship work that matters. Impact beats motion. Bring
            the receipts on customer discovery, learning loops, and the tangible value you created this weekend.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-zinc-400 transition hover:text-white"
            >
              Back to Home
              <span className="text-xs">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <main className="relative mx-auto flex max-w-5xl flex-col gap-20 px-6 pb-24 pt-12 md:px-10 lg:px-0">
        <JudgingFlowSection />
        <RequirementsSection />
        <CategoriesSection />
        <BonusSection />
      </main>
    </div>
  )
}

function JudgingFlowSection() {
  return (
    <section className="flex flex-col gap-8">
      <header className="flex flex-col gap-2" style={{ fontFamily: "bc-novatica-cyr" }}>
        <span className="text-[11px] uppercase tracking-[0.4em] text-orange-400">5 Minute Judging Flow</span>
        <h2 className="text-3xl font-semibold uppercase text-white md:text-4xl">Set the pace</h2>
      </header>
      <div className="grid gap-4 md:grid-cols-3">
        {judgingFlow.map((step) => (
          <div
            key={step.time}
            className="relative flex flex-col gap-3 rounded-[24px] border border-white/10 bg-[#080808] p-6"
            style={{ clipPath: CUT_CORNER, fontFamily: "bc-novatica-cyr" }}
          >
            <span className="text-xs uppercase tracking-[0.4em] text-orange-400">{step.time}</span>
            <h3 className="text-lg font-semibold uppercase text-white">{step.focus}</h3>
            <p className="text-sm text-zinc-300 leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function RequirementsSection() {
  return (
    <section className="flex flex-col gap-10">
      <div style={{ fontFamily: "bc-novatica-cyr" }}>
        <span className="text-[11px] uppercase tracking-[0.4em] text-orange-400">Non-negotiables</span>
        <h2 className="mt-2 text-3xl font-semibold uppercase text-white md:text-4xl">Hard Requirements</h2>
        <ul className="mt-6 space-y-4">
          {hardRequirements.map((item) => (
            <li key={item} className="flex gap-3 text-sm text-zinc-300 leading-relaxed">
              <span className="mt-1 flex h-2 w-2 shrink-0 rotate-45 bg-orange-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-[28px] border border-orange-500/30 bg-orange-500/[0.08] p-8"
        style={{ clipPath: CUT_CORNER, fontFamily: "bc-novatica-cyr" }}>
        <span className="text-[11px] uppercase tracking-[0.4em] text-orange-300">When projects tie</span>
        <h3 className="mt-3 text-2xl font-semibold uppercase text-white">Considerations for equal projects</h3>
        <ul className="mt-6 space-y-4">
          {tiebreakers.map((item) => (
            <li key={item} className="flex gap-3 text-sm text-orange-100/90 leading-relaxed">
              <span className="mt-1 flex h-2 w-2 shrink-0 rotate-45 bg-orange-300" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function CategoriesSection() {
  return (
    <section className="flex flex-col gap-8">
      <header className="flex flex-col gap-2" style={{ fontFamily: "bc-novatica-cyr" }}>
        <span className="text-[11px] uppercase tracking-[0.4em] text-orange-400">Scorecard</span>
        <h2 className="text-3xl font-semibold uppercase text-white md:text-4xl">Primary categories</h2>
        <p className="max-w-3xl text-sm text-zinc-400">
          Each track is worth five points. Judges weigh evidence, execution quality, and potential impact—not just flashy demos.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {rubricCategories.map((category) => (
          <div
            key={category.title}
            className="relative flex flex-col gap-5 rounded-[28px] border border-white/10 bg-[#070707] p-8"
            style={{ clipPath: CUT_CORNER, fontFamily: "bc-novatica-cyr" }}
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-2xl font-semibold uppercase text-white">{category.title}</h3>
              <span className="text-sm uppercase tracking-[0.3em] text-orange-400">{category.maxPoints}</span>
            </div>
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">{category.prompt}</p>
            <ul className="space-y-4 text-sm text-zinc-300 leading-relaxed">
              {category.criteria.map((criterion) => (
                <li key={criterion} className="flex gap-3">
                  <span className="mt-1 flex h-2 w-2 shrink-0 rotate-45 bg-orange-400" />
                  <span>{criterion}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

function BonusSection() {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#090909] p-10 text-center">
      <div className="pointer-events-none absolute inset-0 opacity-20" style={gridPattern} />
      <div className="relative flex flex-col gap-6" style={{ fontFamily: "bc-novatica-cyr" }}>
        <span className="text-[11px] uppercase tracking-[0.4em] text-orange-400">Bonus fuel</span>
        <h2 className="text-3xl uppercase tracking-[0.1em] font-semibold text-white md:text-4xl">
          Extra credit opportunities
        </h2>
        <p className="text-sm text-zinc-300 md:text-base">
          These stack on top. Each +1 is discretionary and celebrates teams who amplified community, learning, and fun.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {bonusPoints.map((bonus) => (
            <div
              key={bonus.label}
              className="flex items-center justify-between gap-4 rounded-[24px] border border-white/10 bg-black/60 px-6 py-5 text-left"
              style={{ clipPath: CUT_CORNER }}
            >
              <span className="text-sm text-zinc-100 leading-relaxed">{bonus.label}</span>
              <span className="text-xs uppercase tracking-[0.35em] text-orange-400">{bonus.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

