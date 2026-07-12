"use client"

import { Fall26Shell, SectionHead, tagClass } from "@/components/fall26-shell"

const JUDGING_FLOW = [
  ["2 MIN", "STORY FIRST", "Hacker explains the customer, problem, and solution."],
  ["3 MIN", "PRODUCT WALKTHROUGH", "Judge uses the product as the intended customer."],
  ["1 MIN", "HIDDEN GEMS", "Hacker highlights features the judge might have missed."],
] as const

const HARD_REQUIREMENTS = [
  "Pitch deck ready to share.",
  "Working prototype with an access link for autonomous judging.",
]

const TIEBREAKERS = [
  "Accessibility basics covered: contrast, font sizing, and WCAG considerations for the target audience.",
  "Solution attacks a massive problem in an overlooked market (e.g. military mental health, rural food scarcity, public transportation).",
]

const CATEGORIES = [
  {
    title: "HIGH AGENCY / LVL5",
    prompt: "DID THE TEAM TAKE OWNERSHIP AND MOVE FAST?",
    criteria: [
      "Customer interviews outside the team validating the hypothesis with evidence.",
      "Mid-build testing with prospective customers or stand-ins followed by iteration.",
      "Real customers or prospects have already used the current version.",
      "The team exhibited relentless momentum throughout the hackathon.",
    ],
  },
  {
    title: "CREATIVITY, INNOVATION & SKILL",
    prompt: "DID THEY SHIP WITH CRAFT AND ORIGINALITY?",
    criteria: [
      "Clear demonstration of technical or creative mastery in the solution.",
      "A clever, simplified approach that saves time or resources.",
      "Blend of technologies, tools, or domain knowledge to unlock the solution.",
      "Solution offers a fresh take instead of a straight remake.",
    ],
  },
  {
    title: "PRESENTATION & CLARITY",
    prompt: "CAN THEY TELL THE STORY UNDER PRESSURE?",
    criteria: [
      "Customer, problem, and solution are explained so clearly a 5-year-old could get it in two minutes.",
      "Demo flows smoothly and showcases the right moments.",
      "They can sell the vision and make you believe.",
    ],
  },
  {
    title: "IMPACT & USEFULNESS",
    prompt: "DOES IT MATTER AND DOES IT WORK?",
    criteria: [
      "Problem is painful, urgent, and affects a sizable group.",
      "Solution directly addresses the core pain point.",
      "Execution feels effective and ready to deliver value.",
      "Feels like a true MVP with a path to go even further.",
    ],
  },
]

const BONUS_POINTS = [
  ["Cross-functional team members with meaningful impact.", "+1"],
  ["Open-source project or public repo for the community.", "+1"],
  ["Functional MVP shipped within the first 24 hours.", "+1"],
  ["Visible learning or skill growth during the weekend.", "+1"],
  ["The team clearly had fun building together.", "+1"],
  ["Judges’ favor at discretion.", "UP TO +3"],
] as const

export default function RubricPage() {
  return (
    <Fall26Shell
      tag="⌁ JUDGING_PHILOSOPHY"
      title={
        <>
          HIGH AGENCY
          <br />
          WINS<span className="text-[#c9f73b]">.</span>
        </>
      }
      intro="We reward teams that move fast, execute relentlessly, and ship work that matters. Impact beats motion. Bring the receipts on customer discovery, learning loops, and the tangible value you created this weekend."
    >
      {/* judging flow */}
      <section className="border-b border-[rgba(201,247,59,.22)] px-5 py-16 sm:px-9">
        <SectionHead title="JUDGING FLOW" note="5 MINUTES, END TO END" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {JUDGING_FLOW.map(([time, focus, description]) => (
            <div key={focus} className="border border-[rgba(242,242,236,.12)] p-6">
              <span className="border border-[rgba(201,247,59,.6)] px-2 py-[3px] text-[12px] tracking-[1px] text-[#c9f73b]">
                {time}
              </span>
              <div className="mt-5 text-[14px] font-bold tracking-[2px] text-[#f2f2ec]">{focus}</div>
              <p className="mb-0 mt-3 text-[13px] leading-[1.8] text-[rgba(242,242,236,.6)]">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* requirements + tiebreakers */}
      <section className="border-b border-[rgba(201,247,59,.22)] px-5 py-16 sm:px-9">
        <SectionHead title="HARD REQUIREMENTS" note="NON-NEGOTIABLES" />
        <div>
          {HARD_REQUIREMENTS.map((item, i) => (
            <div
              key={item}
              className={`flex items-start gap-4 py-[15px] ${i < HARD_REQUIREMENTS.length - 1 ? "border-b border-[rgba(242,242,236,.12)]" : ""}`}
            >
              <span className="text-[14px] text-[#c9f73b]">↳</span>
              <span className="text-[14px] tracking-[1px] text-[#f2f2ec]">{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 border border-[rgba(201,247,59,.6)] p-6 sm:p-8">
          <div className="mb-5 text-[12px] font-bold tracking-[3px] text-[#c9f73b]">▚ WHEN PROJECTS TIE</div>
          {TIEBREAKERS.map((item) => (
            <div key={item} className="flex items-start gap-4 py-2">
              <span className="text-[14px] text-[#c9f73b]">+</span>
              <span className="text-[13px] leading-[1.8] text-[rgba(242,242,236,.75)]">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* scorecard */}
      <section className="border-b border-[rgba(201,247,59,.22)] px-5 py-16 sm:px-9">
        <SectionHead title="SCORECARD" note="4 CATEGORIES × 5 POINTS" />
        <p className="mb-10 mt-[-16px] max-w-[560px] text-[12px] uppercase leading-[1.8] tracking-[1px] text-[rgba(242,242,236,.65)]">
          Each category is worth five points. Judges weigh evidence, execution quality, and potential impact — not
          just flashy demos.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {CATEGORIES.map((category) => (
            <div key={category.title} className="border border-[rgba(242,242,236,.12)] p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <span className={tagClass}>{category.title}</span>
                <span className="whitespace-nowrap text-[13px] font-bold text-[#c9f73b]">/5</span>
              </div>
              <div className="mt-4 text-[11px] tracking-[2px] text-[rgba(242,242,236,.5)]">{category.prompt}</div>
              <ul className="m-0 mt-4 list-none p-0">
                {category.criteria.map((criterion) => (
                  <li key={criterion} className="flex items-start gap-3 py-1.5">
                    <span className="text-[13px] text-[#c9f73b]">→</span>
                    <span className="text-[13px] leading-[1.8] text-[rgba(242,242,236,.6)]">{criterion}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* bonus */}
      <section className="bg-[#c9f73b] px-5 py-16 sm:px-9">
        <div className="mb-10 flex flex-wrap items-center gap-3.5">
          <span className="text-[16px] text-[#0b0b0b]">↳</span>
          <h2 className="m-0 font-[family-name:var(--font-hk-display)] text-[34px] font-bold tracking-[-1px] text-[#0b0b0b] sm:text-[44px]">
            BONUS FUEL
          </h2>
          <span className="pt-3 text-[13px] font-bold text-[#0b0b0b]">STACKS ON TOP</span>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {BONUS_POINTS.map(([label, value]) => (
            <div
              key={label}
              className="flex items-center justify-between gap-4 border border-[rgba(11,11,11,.4)] px-5 py-4"
            >
              <span className="text-[13px] leading-[1.6] text-[#0b0b0b]">{label}</span>
              <span className="whitespace-nowrap bg-[#0b0b0b] px-2 py-[3px] text-[12px] font-bold tracking-[1px] text-[#c9f73b]">
                {value}
              </span>
            </div>
          ))}
        </div>
        <p className="mb-0 mt-8 text-[11px] tracking-[2px] text-[rgba(11,11,11,.65)]">
          EACH +1 IS DISCRETIONARY — IT CELEBRATES TEAMS WHO AMPLIFIED COMMUNITY, LEARNING, AND FUN.
        </p>
      </section>
    </Fall26Shell>
  )
}
