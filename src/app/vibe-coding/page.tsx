"use client"

import Link from "next/link"
import { Fall26Shell, SectionHead, tagClass } from "@/components/fall26-shell"

const DONT_NEED = [
  "Perfect prompts or programmer vocabulary.",
  "To know the answer before you ask.",
  "To pretend you understand. Confusion is a valid prompt.",
]

const TALK_LIKE_THIS = [
  "I've never done this before. Walk me through it step by step.",
  "I don't understand what you just said. Can you explain it more simply?",
  "What does that command do before I run it?",
  "Wait — I'm lost. Explain what we're doing and why.",
]

const CHECKLIST: [string, React.ReactNode][] = [
  [
    "LEARN WHAT GITHUB IS",
    <>
      Do GitHub&apos;s{" "}
      <a
        href="https://docs.github.com/en/get-started/start-your-journey/hello-world"
        target="_blank"
        rel="noreferrer"
        className="text-[#c9f73b] underline underline-offset-4"
      >
        Hello World tutorial ↗
      </a>
      . Repos, branches, commits, pull requests — no code, no command line, no install. Don&apos;t master it. Just make
      it un-scary.
    </>,
  ],
  [
    "INSTALL CLAUDE CODE",
    <>
      Follow the official{" "}
      <a
        href="https://docs.claude.com/en/docs/claude-code/quickstart"
        target="_blank"
        rel="noreferrer"
        className="text-[#c9f73b] underline underline-offset-4"
      >
        Quickstart ↗
      </a>
      . It covers installing, signing in, and opening your first project.
    </>,
  ],
  [
    "TAKE IT FOR A SPIN",
    <>
      Open any project and ask: &ldquo;What does this project do?&rdquo; Then ask it to make one small change. If that
      works, you&apos;re ready.
    </>,
  ],
]

const PROMPT_CARDS = [
  {
    title: "GETTING STARTED",
    prompts: [
      "Here's what I want to build: [your idea]. Help me figure out the simplest way to build it.",
      "Before we start coding, make a plan with me.",
      "Explain this project to me like I'm a beginner.",
      "Build this one step at a time and explain what you're doing.",
    ],
  },
  {
    title: "WHEN YOU'RE STUCK",
    prompts: [
      "I don't know what this error means. Help me figure it out.",
      "Run the project and help me fix any errors.",
      "Is there a simpler way to do this?",
      "Test what we just built and look for problems.",
      "We only have two hours left. What should we prioritize?",
    ],
  },
]

export default function ClaudeCodePage() {
  return (
    <Fall26Shell
      tag="⌁ VIBE_CODING_101"
      title={
        <>
          NEW TO CODING?
          <br />
          YOU&apos;RE IN<span className="text-[#c9f73b]">.</span>
        </>
      }
      intro="Never opened a terminal? Never used GitHub? You can still build something real. Claude Code lets you build by describing what you want — no jargon required."
    >
      {/* just talk to it */}
      <section className="border-b border-[rgba(201,247,59,.22)] px-5 py-16 sm:px-9">
        <SectionHead title="JUST TALK TO IT" note="THE MOST IMPORTANT SKILL" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="border border-[rgba(242,242,236,.3)] p-6 sm:p-7">
            <div className="mb-5 text-[12px] font-bold tracking-[3px] text-[rgba(242,242,236,.5)]">✕ YOU DON&apos;T NEED</div>
            {DONT_NEED.map((item) => (
              <div key={item} className="flex items-start gap-3 py-2">
                <span className="text-[13px] text-[rgba(242,242,236,.5)]">✕</span>
                <span className="text-[13px] leading-[1.8] text-[rgba(242,242,236,.6)]">{item}</span>
              </div>
            ))}
          </div>
          <div className="border border-[rgba(201,247,59,.6)] p-6 sm:p-7">
            <div className="mb-5 text-[12px] font-bold tracking-[3px] text-[#c9f73b]">✓ TALK LIKE THIS</div>
            {TALK_LIKE_THIS.map((item) => (
              <div key={item} className="flex items-start gap-3 py-2">
                <span className="text-[13px] text-[#c9f73b]">✓</span>
                <span className="text-[13px] leading-[1.8] text-[rgba(242,242,236,.75)]">&ldquo;{item}&rdquo;</span>
              </div>
            ))}
          </div>
        </div>
        <p className="mb-0 mt-8 max-w-[620px] text-[13px] leading-[1.8] text-[rgba(242,242,236,.6)]">
          &ldquo;I don&apos;t know,&rdquo; &ldquo;I&apos;m confused,&rdquo; and &ldquo;what should I do next?&rdquo; are
          good prompts. You can always ask Claude to slow down, explain a term, or suggest a simpler approach.
        </p>
      </section>

      {/* before you arrive */}
      <section className="border-b border-[rgba(201,247,59,.22)] px-5 py-16 sm:px-9">
        <SectionHead title="BEFORE YOU ARRIVE" note="SETUP CHECKLIST" />
        <div>
          {CHECKLIST.map(([title, description], i) => (
            <div
              key={title}
              className={`flex flex-col gap-2 py-[15px] sm:flex-row sm:items-baseline sm:gap-5 ${i < CHECKLIST.length - 1 ? "border-b border-[rgba(242,242,236,.12)]" : ""}`}
            >
              <span className="w-fit border border-[rgba(201,247,59,.6)] px-2 py-[3px] text-[12px] tracking-[1px] text-[#c9f73b]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[14px] font-bold tracking-[1px] text-[#f2f2ec] sm:min-w-[340px]">{title}</span>
              <span className="text-[13px] leading-[1.8] text-[rgba(242,242,236,.6)]">{description}</span>
            </div>
          ))}
        </div>
        <p className="mb-0 mt-8 max-w-[620px] text-[13px] leading-[1.8] text-[rgba(242,242,236,.6)]">
          Want more reps? Browse{" "}
          <a
            href="https://docs.claude.com/en/docs/claude-code/common-workflows"
            target="_blank"
            rel="noreferrer"
            className="text-[#c9f73b] underline underline-offset-4"
          >
            Common Workflows ↗
          </a>{" "}
          and try whatever looks useful. You don&apos;t need to read the whole thing.
        </p>
      </section>

      {/* during the hackathon */}
      <section className="border-b border-[rgba(201,247,59,.22)] px-5 py-16 sm:px-9">
        <SectionHead title="DURING THE HACKATHON" note="STARTER PROMPTS" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {PROMPT_CARDS.map((card) => (
            <div key={card.title} className="border border-[rgba(242,242,236,.12)] p-6 sm:p-7">
              <span className={tagClass}>{card.title}</span>
              <ul className="m-0 mt-5 list-none p-0">
                {card.prompts.map((prompt) => (
                  <li key={prompt} className="flex items-start gap-3 py-1.5">
                    <span className="text-[13px] text-[#c9f73b]">→</span>
                    <span className="text-[13px] leading-[1.8] text-[rgba(242,242,236,.6)]">&ldquo;{prompt}&rdquo;</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mb-0 mt-8 max-w-[620px] text-[13px] leading-[1.8] text-[rgba(242,242,236,.6)]">
          You don&apos;t need to know how to build it before you start. Figuring that out is part of what Claude is for.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/how-to-hack"
            className="inline-block border border-[rgba(242,242,236,.5)] px-6 py-3 text-[13px] font-bold tracking-[1px] text-[#f2f2ec] transition-colors hover:border-[#c9f73b] hover:text-[#c9f73b]"
          >
            NEXT UP: HOW TO WIN A HACKATHON →
          </Link>
        </div>
      </section>

      {/* closing banner */}
      <section className="bg-[#c9f73b] px-5 py-16 sm:px-9">
        <div className="mb-4 text-[11px] font-bold tracking-[3px] text-[#0b0b0b]">▚ THAT&apos;S THE WHOLE LIST</div>
        <h2 className="m-0 max-w-[900px] font-[family-name:var(--font-hk-display)] text-[34px] font-bold leading-[.95] tracking-[-1px] text-[#0b0b0b] sm:text-[56px] sm:tracking-[-2px]">
          IDEA + CURIOSITY + WORKING SETUP
        </h2>
        <p className="mb-0 mt-6 max-w-[560px] text-[12px] uppercase leading-[1.8] tracking-[1px] text-[rgba(11,11,11,.7)]">
          Come with those three. We&apos;ll take it from there.
        </p>
      </section>
    </Fall26Shell>
  )
}
