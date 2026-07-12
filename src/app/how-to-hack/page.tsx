"use client"

import { Fall26Shell, SectionHead, tagClass } from "@/components/fall26-shell"

const QUICK_START = [
  {
    title: "MVP IN 1 HOUR",
    lines: [
      "Ship the smallest, most basic version of your final product within the first hour.",
      "Building Slack? Have a web app that lets you create a channel and post a message within 1–2 hours.",
      "Skip login, branding, and scale — make the core feature work.",
    ],
  },
  {
    title: "CODE TEMPLATES",
    lines: [
      "Boilerplate code will get you to traction faster.",
      "If you're using AI or template engines, let them handle the non-innovative work like auth flows.",
    ],
  },
]

const MVP_CONTRAST = {
  not: [
    "Polishing every screen, crafting bespoke auth, or stressing scale before anything works.",
    "Packing weeks of roadmap into a single weekend sprint.",
  ],
  like: [
    "A clickable demo that proves the single core workflow end-to-end.",
    "A simple story you can show judges in under two minutes.",
  ],
}

const PRINCIPLES = [
  {
    title: "SPEED OVER ALL",
    body: "Prioritize speed to production when setting up your environment and choosing your stack. Now isn't the moment to learn Docker from scratch. If you're brand new, pick an easy, hacky stack — AppScript with Google Sheets counts.",
  },
  {
    title: "FOCUS",
    body: "Make the problem narrow and the solution technically simple. Ship something small, specific, and demo-ready.",
  },
]

const STEPS = [
  ["START FAST, DECIDE FASTER", "Pick an idea in 15 minutes — don't overthink it. The sooner you decide, the more time you have to build."],
  ["BUILD A DEMO-FIRST MVP", "Prioritize something you can show, not just describe. Skip perfect architecture — make it work first."],
  ["SHIP SMALL, SHIP OFTEN", "Get a working version ASAP, even if it's ugly. Frequent commits and small wins keep momentum high."],
  ["AUTOMATE THE BORING STUFF", "Use APIs, AI tools, and no-code where you can. Don't reinvent the wheel — move fast."],
  ["DIVIDE & CONQUER", "If someone is stuck, move on or swap tasks. Time is the enemy — don't stall."],
  ["SLEEP OPTIONAL, ATTITUDE MANDATORY", "Drink coffee, hydrate, and keep the vibes high. Momentum beats burnout."],
  ["THE BEST HACK IS A WORKING HACK", "It doesn't need to be revolutionary. If it works and looks impressive, you're winning."],
  ["HAVE FUN & BREAK THINGS RESPONSIBLY", "Hackathons are chaos. Embrace it, build something cool, make new friends, and enjoy the ride."],
] as const

export default function HowToHackPage() {
  return (
    <Fall26Shell
      tag="⌁ TIPS_FOR_A_GOOD_HACK"
      title={
        <>
          HOW TO WIN A
          <br />
          HACKATHON<span className="text-[#c9f73b]">.</span>
        </>
      }
      intro="Build the demo judges remember: ship fast, show the core workflow, and keep momentum high."
    >
      {/* first hour plan */}
      <section className="border-b border-[rgba(201,247,59,.22)] px-5 py-16 sm:px-9">
        <SectionHead title="SHIP SOMETHING REAL — NOW" note="FIRST HOUR PLAN" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {QUICK_START.map((card) => (
            <div key={card.title} className="border border-[rgba(242,242,236,.12)] p-6 sm:p-7">
              <span className={tagClass}>{card.title}</span>
              <ul className="m-0 mt-5 list-none p-0">
                {card.lines.map((line) => (
                  <li key={line} className="flex items-start gap-3 py-1.5">
                    <span className="text-[13px] text-[#c9f73b]">→</span>
                    <span className="text-[13px] leading-[1.8] text-[rgba(242,242,236,.6)]">{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* demo-first mindset */}
      <section className="border-b border-[rgba(201,247,59,.22)] px-5 py-16 sm:px-9">
        <SectionHead title="DEMO-FIRST MINDSET" note="HOW TO BUILD AN MVP" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="border border-[rgba(242,242,236,.3)] p-6 sm:p-7">
            <div className="mb-5 text-[12px] font-bold tracking-[3px] text-[rgba(242,242,236,.5)]">✕ NOT LIKE THIS</div>
            {MVP_CONTRAST.not.map((item) => (
              <div key={item} className="flex items-start gap-3 py-2">
                <span className="text-[13px] text-[rgba(242,242,236,.5)]">✕</span>
                <span className="text-[13px] leading-[1.8] text-[rgba(242,242,236,.6)]">{item}</span>
              </div>
            ))}
          </div>
          <div className="border border-[rgba(201,247,59,.6)] p-6 sm:p-7">
            <div className="mb-5 text-[12px] font-bold tracking-[3px] text-[#c9f73b]">✓ LIKE THIS</div>
            {MVP_CONTRAST.like.map((item) => (
              <div key={item} className="flex items-start gap-3 py-2">
                <span className="text-[13px] text-[#c9f73b]">✓</span>
                <span className="text-[13px] leading-[1.8] text-[rgba(242,242,236,.75)]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* build philosophy */}
      <section className="border-b border-[rgba(201,247,59,.22)] px-5 py-16 sm:px-9">
        <SectionHead title="OPERATE LIKE AN ELITE HACKER" note="BUILD PHILOSOPHY" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {PRINCIPLES.map((principle) => (
            <div key={principle.title} className="border border-[rgba(242,242,236,.12)] p-6 sm:p-7">
              <span className={tagClass}>{principle.title}</span>
              <p className="mb-0 mt-5 text-[13px] leading-[1.8] text-[rgba(242,242,236,.6)]">{principle.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* momentum playbook */}
      <section className="border-b border-[rgba(201,247,59,.22)] px-5 py-16 sm:px-9">
        <SectionHead title="MOMENTUM PLAYBOOK" note="HACKING A HACKATHON" />
        <div>
          {STEPS.map(([title, description], i) => (
            <div
              key={title}
              className={`flex flex-col gap-2 py-[15px] sm:flex-row sm:items-baseline sm:gap-5 ${i < STEPS.length - 1 ? "border-b border-[rgba(242,242,236,.12)]" : ""}`}
            >
              <span className="w-fit border border-[rgba(201,247,59,.6)] px-2 py-[3px] text-[12px] tracking-[1px] text-[#c9f73b]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[14px] font-bold tracking-[1px] text-[#f2f2ec] sm:min-w-[340px]">{title}</span>
              <span className="text-[13px] leading-[1.8] text-[rgba(242,242,236,.6)]">{description}</span>
            </div>
          ))}
        </div>
      </section>

      {/* winning formula */}
      <section className="bg-[#c9f73b] px-5 py-16 sm:px-9">
        <div className="mb-4 text-[11px] font-bold tracking-[3px] text-[#0b0b0b]">▚ THE WINNING FORMULA</div>
        <h2 className="m-0 max-w-[900px] font-[family-name:var(--font-hk-display)] text-[34px] font-bold leading-[.95] tracking-[-1px] text-[#0b0b0b] sm:text-[56px] sm:tracking-[-2px]">
          WORKING DEMO + GREAT STORY + HIGH ENERGY TEAM
        </h2>
        <p className="mb-0 mt-6 max-w-[560px] text-[12px] uppercase leading-[1.8] tracking-[1px] text-[rgba(11,11,11,.7)]">
          Nail the core flow, show it with confidence, and keep the vibes high. That&apos;s HackKentucky gold.
        </p>
      </section>
    </Fall26Shell>
  )
}
