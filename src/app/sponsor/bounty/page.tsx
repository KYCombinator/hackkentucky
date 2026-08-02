"use client"

import Link from "next/link"
import { Fall26Shell, SectionHead, tagClass } from "@/components/fall26-shell"
import { VideoCarousel, type CarouselVideo } from "@/components/video-carousel"

// Bounty intake runs through the KY Combinator application workstream. The
// submit button auto-switches to an external link-out for http(s) URLs.
const BOUNTY_APPLY_URL = "https://kycombinator.com/hackkentucky/bounty"
const BOUNTY_APPLY_EXTERNAL = BOUNTY_APPLY_URL.startsWith("http")

const PAST_PARTICIPANTS: CarouselVideo[] = [
  { id: "kn_O6oB-DyY", title: "A Full Stack of Potatoes", subtitle: "HackKentucky 2025" },
  { id: "IQYynYpenws", title: "Gobin", subtitle: "HackKentucky 2025" },
  { id: "cBVJfJbvxZk", title: "Vyte", subtitle: "HackTheTrack 2025" },
  { id: "rzsHqSaHD3Q", title: "HackTheTrack 2025", subtitle: "Event recap" },
]

const HOW_IT_WORKS: string[] = [
  "Write the challenge — a real problem: an API to build against, a dataset to explore, a workflow to automate.",
  "Set the reward — cash or in-kind (hardware, cloud credits, swag, a job interview). We recommend around $200 in value; the problem itself motivates builders more than the cash. Stack it on a tier or post it on its own.",
  "Teams opt in over the weekend and build against it.",
  "You judge your own bounty and pay the winning team directly.",
]

const PRINCIPLES: { title: string; body: string }[] = [
  {
    title: "SPECIFIC & SCOPED",
    body: "One clear problem, not a theme. “Build something with our API” gets ignored. Name the exact thing you want built.",
  },
  {
    title: "A CLEAR FINISH LINE",
    body: "Judges (you) should be able to tell who won in five minutes. Define the metric or deliverable that decides it.",
  },
  {
    title: "A REAL PROBLEM",
    body: "Something you actually have. Builders can smell a fake prompt — a genuine pain point gets real effort.",
  },
  {
    title: "WEEKEND-SIZED",
    body: "Narrow enough that a small team can ship a working answer in a day. If it needs a quarter, it's a roadmap, not a bounty.",
  },
  {
    title: "WORTH FIGHTING OVER",
    body: "A crisp problem and a clear winner is what makes a room pick your table — far more than the size of the reward. The challenge is the draw.",
  },
]

const ANATOMY: { step: string; label: string; body: string }[] = [
  { step: "01", label: "THE PROBLEM", body: "“Our support team spends hours manually tagging incoming tickets.”" },
  { step: "02", label: "THE TASK", body: "“Auto-classify these 500 sample tickets into our 8 categories.”" },
  { step: "03", label: "THE FINISH LINE", body: "“Highest F1 score on a held-out set we score live at judging.”" },
  { step: "04", label: "THE INPUTS", body: "Sample data + category definitions + a scoring script, handed out at kickoff." },
  { step: "05", label: "THE REWARD", body: "~$200 in value — cash, or your pick of in-kind — to the winning team." },
]

// Submit button — external link-out for http(s) URLs, internal Link otherwise.
function SubmitButton({ className, children }: { className: string; children: React.ReactNode }) {
  return BOUNTY_APPLY_EXTERNAL ? (
    <a href={BOUNTY_APPLY_URL} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  ) : (
    <Link href={BOUNTY_APPLY_URL} className={className}>
      {children}
    </Link>
  )
}

export default function BountyPage() {
  return (
    <Fall26Shell
      tag="⌁ POST_A_BOUNTY"
      title={
        <>
          BOUNTIES<span className="text-[#c9f73b]">.</span>
        </>
      }
      intro="A bounty is a problem plus a reward. You define a real challenge, set a reward — cash or in-kind, ~$200 in value is plenty — and give it to the team that solves it best. The problem motivates builders more than the prize. Here's how to write one a room will fight over."
    >
      {/* top CTA bar */}
      <section className="flex flex-col gap-4 border-b border-[rgba(201,247,59,.22)] px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-9">
        <span className="text-[12px] uppercase tracking-[1px] text-[rgba(242,242,236,.55)]">
          Cash or in-kind · <span className="text-[#c9f73b]">~$200 in value</span> · stack it on any tier.
        </span>
        <div className="flex flex-wrap gap-3">
          <SubmitButton className="inline-block bg-[#c9f73b] px-6 py-3 text-[13px] font-bold tracking-[1px] text-[#0b0b0b] transition-colors hover:bg-[#f2f2ec]">
            ⧫ SUBMIT A BOUNTY →
          </SubmitButton>
          <a
            href="#how-it-works"
            className="inline-block border border-[rgba(242,242,236,.5)] px-6 py-3 text-[13px] font-bold tracking-[1px] text-[#f2f2ec] transition-colors hover:border-[#c9f73b] hover:text-[#c9f73b]"
          >
            HOW IT WORKS ↓
          </a>
        </div>
      </section>

      {/* past participants */}
      <section id="examples" className="scroll-mt-6 border-b border-[rgba(201,247,59,.22)] px-5 py-16 sm:px-9">
        <SectionHead title="SEE PAST PARTICIPANTS" note="HACKKENTUCKY × HACKTHETRACK 2025" />
        <p className="mb-10 max-w-[620px] text-[13px] leading-[1.8] text-[rgba(242,242,236,.6)]">
          What teams actually shipped at last year&apos;s events — the caliber of builder your bounty gets pointed at.
          Hit play on any demo.
        </p>
        <VideoCarousel videos={PAST_PARTICIPANTS} />
      </section>

      {/* how it works */}
      <section id="how-it-works" className="scroll-mt-6 border-b border-[rgba(201,247,59,.22)] px-5 py-16 sm:px-9">
        <SectionHead title="HOW A BOUNTY WORKS" note="PROBLEM + PRIZE" />
        <div>
          {HOW_IT_WORKS.map((step, i) => (
            <div
              key={step}
              className={`flex items-start gap-4 py-4 ${i < HOW_IT_WORKS.length - 1 ? "border-b border-[rgba(242,242,236,.12)]" : ""}`}
            >
              <span className="font-[family-name:var(--font-hk-display)] text-[22px] font-bold leading-none text-[rgba(201,247,59,.5)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[13px] leading-[1.8] text-[rgba(242,242,236,.65)]">{step}</span>
            </div>
          ))}
        </div>
        <p className="mt-6 text-[12px] uppercase tracking-[1px] text-[#c9f73b]">
          Chrome ($500) and Purple ($10K) sponsors get a bounty included.
        </p>
      </section>

      {/* what makes a good bounty */}
      <section id="good-bounty" className="scroll-mt-6 border-b border-[rgba(201,247,59,.22)] px-5 py-16 sm:px-9">
        <SectionHead title="WHAT MAKES A GOOD BOUNTY" note="THE #1 QUESTION" />
        <p className="mb-10 max-w-[640px] text-[13px] leading-[1.9] text-[rgba(242,242,236,.7)]">
          This is the question every sponsor asks. The answer is simple: a{" "}
          <span className="text-[#c9f73b]">specific, scoped problem with a clear finish line</span>. Get that right and
          the rest takes care of itself — and don&apos;t sweat the prize size. The problem does the motivating, not the
          check: builders grind on a sharp, real challenge far harder than they chase cash.
        </p>

        {/* principles */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PRINCIPLES.map((p) => (
            <div key={p.title} className="border border-[rgba(242,242,236,.12)] p-6">
              <span className={tagClass}>{p.title}</span>
              <p className="mb-0 mt-5 text-[13px] leading-[1.8] text-[rgba(242,242,236,.6)]">{p.body}</p>
            </div>
          ))}
        </div>

        {/* good vs bad */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="border border-[rgba(242,242,236,.2)] p-6 sm:p-7">
            <div className="mb-4 inline-block border border-[rgba(255,107,107,.6)] px-2.5 py-[5px] text-[13px] tracking-[1px] text-[#ff9b9b]">
              ✕ TOO VAGUE
            </div>
            <p className="m-0 text-[14px] leading-[1.8] text-[rgba(242,242,236,.8)]">
              “Build something cool with our API.”
            </p>
            <p className="mb-0 mt-4 text-[12px] leading-[1.7] text-[rgba(242,242,236,.5)]">
              No finish line, no way to pick a winner, no reason to start. Teams skip it.
            </p>
          </div>
          <div className="border border-[#c9f73b] bg-[rgba(201,247,59,.06)] p-6 sm:p-7">
            <div className="mb-4 inline-block border border-[#c9f73b] px-2.5 py-[5px] text-[13px] tracking-[1px] text-[#c9f73b]">
              ✓ SHARP
            </div>
            <p className="m-0 text-[14px] leading-[1.8] text-[#f2f2ec]">
              “Build a tool that flags anomalies in our sales dataset — anomalies are sales under $1 or over $25 — with a
              dashboard to review every flagged transaction and one-click approve or reject each one.”
            </p>
            <p className="mb-0 mt-4 text-[12px] leading-[1.7] text-[rgba(242,242,236,.6)]">
              A concrete rule and a clear deliverable. Builders know exactly what to ship.
            </p>
          </div>
        </div>

        {/* anatomy of a great bounty */}
        <div className="mt-10 border border-[rgba(242,242,236,.12)] p-6 sm:p-8">
          <div className="mb-6 text-[11px] font-bold tracking-[3px] text-[#c9f73b]">▚ ANATOMY OF A GREAT BOUNTY</div>
          <div>
            {ANATOMY.map((a, i) => (
              <div
                key={a.step}
                className={`flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:gap-5 ${i < ANATOMY.length - 1 ? "border-b border-[rgba(242,242,236,.1)]" : ""}`}
              >
                <span className="text-[13px] font-bold tracking-[1px] text-[rgba(201,247,59,.6)] sm:min-w-[30px]">
                  {a.step}
                </span>
                <span className="text-[12px] font-bold tracking-[1px] text-[#f2f2ec] sm:min-w-[150px]">{a.label}</span>
                <span className="text-[13px] leading-[1.7] text-[rgba(242,242,236,.65)]">{a.body}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* submit a bounty */}
      <section id="submit" className="scroll-mt-6 border-b border-[rgba(201,247,59,.22)] px-5 py-16 sm:px-9">
        <SectionHead title="SUBMIT A BOUNTY" note="KY COMBINATOR INTAKE" />
        <p className="mb-8 max-w-[620px] text-[13px] leading-[1.8] text-[rgba(242,242,236,.6)]">
          Ready to post one? Submissions run through the KY Combinator application workstream so intake stays in one
          place. Fill out the form and we&apos;ll follow up to lock the challenge and the reward — cash or in-kind,
          stackable on any sponsorship tier.
        </p>
        <SubmitButton className="inline-block bg-[#c9f73b] px-8 py-4 text-[14px] font-bold tracking-[2px] text-[#0b0b0b] transition-colors hover:bg-[#f2f2ec]">
          SUBMIT YOUR BOUNTY →
        </SubmitButton>
        <p className="mt-6 text-[12px] uppercase tracking-[1px] text-[rgba(242,242,236,.5)]">
          Questions first? Email hackkentucky@kycombinator.com.
        </p>
      </section>

      {/* back to sponsor */}
      <section className="bg-[#c9f73b] px-5 py-16 sm:px-9">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <div className="mb-4 text-[11px] font-bold tracking-[3px] text-[#0b0b0b]">▚ WANT THE FULL PICTURE?</div>
            <h2 className="m-0 font-[family-name:var(--font-hk-display)] text-[34px] font-bold leading-[.9] tracking-[-1px] text-[#0b0b0b] sm:text-[56px] sm:tracking-[-2px]">
              SEE SPONSOR TIERS.
            </h2>
          </div>
          <Link
            href="/sponsor"
            className="whitespace-nowrap bg-[#0b0b0b] px-8 py-5 text-[14px] tracking-[2px] text-[#c9f73b] transition-colors hover:bg-[#f2f2ec] hover:text-[#0b0b0b]"
          >
            SPONSORSHIP PROSPECTUS →
          </Link>
        </div>
      </section>
    </Fall26Shell>
  )
}
