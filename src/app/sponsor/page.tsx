"use client"

import { Fall26Shell, SectionHead, tagClass } from "@/components/fall26-shell"
import { SponsorForm } from "@/components/sponsor-form"

const PDF_URL = "/HackKentucky-Sponsorship-2026.pdf"

const STATS: [string, string][] = [
  ["300+", "BUILDERS"],
  ["2", "DAYS"],
  ["5", "LEARN-A-THON TRACKS"],
]

const REASONS: { title: string; body: string }[] = [
  {
    title: "TALENT, UNFILTERED",
    body: "Meet engineers and designers mid-build, under pressure, solving something real. It's the most honest interview that exists.",
  },
  {
    title: "FREE R&D",
    body: "Set a challenge track and get dozens of sharp people stress-testing your API, your dataset, or your idea — for free, over a weekend.",
  },
  {
    title: "A MICROPHONE",
    body: "Friday runs five parallel Learn-a-thon tracks. Put a practitioner from your team in front of a room that actually wants to be there.",
  },
  {
    title: "REAL CREDIBILITY",
    body: "Volunteer-run, free to attend, homegrown. Sponsors are visibly the reason it happens, and the room knows it.",
  },
]

const ROOM: string[] = [
  "University students in CS, engineering, and design",
  "Early-career software engineers and data professionals",
  "High schoolers and first-time hackers — the Friday Learn-a-thon exists for exactly this",
  "Startup founders, independent builders, and career-switchers",
]

const SCHEDULE: [string, string][] = [
  ["FRI 4PM", "Doors open. Check-in and team formation."],
  ["FRI 5–9PM", "Learn-a-thon — five parallel tracks in five rooms: Software, Startups, Hardware, Sustainable Fashion, and AI. 35-minute sessions."],
  ["FRI 11PM", "Doors close. No all-nighter."],
  ["SAT 8AM", "Doors open. Grazing breakfast. Hacking begins."],
  ["SAT 10–3", "Guest speakers in parallel — career track and startup track. Lunch via meal tickets at noon."],
  ["SAT 5–7PM", "Judging begins. Dinner served. Final judging at 7pm."],
  ["SAT 9PM", "Awards and close."],
]

const TIERS: { key: string; name: string; price: string; tagline: string; only?: string }[] = [
  { key: "community", name: "COMMUNITY", price: "FREE", tagline: "Get your name in the code." },
  { key: "neon", name: "NEON", price: "$100", tagline: "Be in the room." },
  { key: "chrome", name: "CHROME", price: "$500", tagline: "Set the challenge. Teach the room." },
  { key: "purple", name: "PURPLE", price: "$5,000", tagline: "Own the grid.", only: "Only one available" },
]

// Benefit matrix. Values: "●" full, "–" none, or a string (e.g. count / "35 min").
const BENEFITS: { label: string; values: [string, string, string, string] }[] = [
  { label: "Logo on both event websites", values: ["●", "●", "●", "●"] },
  { label: "Named at opening + closing ceremony", values: ["–", "●", "●", "●"] },
  { label: "Social media shout-outs", values: ["–", "1", "2", "3"] },
  { label: "Logo on the participant t-shirt", values: ["–", "●", "●", "●"] },
  { label: "Recruiting table at the venue", values: ["–", "●", "●", "●"] },
  { label: "Swag in the welcome bag", values: ["–", "●", "●", "●"] },
  { label: "Friday Learn-a-thon speaking slot (35 min)", values: ["–", "–", "●", "●"] },
  { label: "Post a bounty", values: ["–", "–", "●", "●"] },
  { label: "Send mentors on-site Saturday", values: ["–", "–", "●", "●"] },
  { label: "Résumé book (opt-in participants)", values: ["–", "–", "●", "●"] },
  { label: "Seat on the judging panel", values: ["–", "–", "–", "●"] },
  { label: "Saturday guest-speaker slot", values: ["–", "–", "–", "●"] },
  { label: "Logo on all venue signage", values: ["–", "–", "–", "●"] },
  { label: "Title billing: “presented by”", values: ["–", "–", "–", "●"] },
]

const MONEY: [string, string][] = [
  ["$6,000", "Vendor food across the weekend — lunch and Saturday dinner for 300 people"],
  ["$1,000", "Saturday grazing breakfast"],
  ["$2,500", "Prizes for winning teams"],
  ["$500", "Reserve"],
]

const BOUNTY_STEPS: string[] = [
  "You write the challenge — a real problem, an API to build against, a dataset to explore, a workflow to automate.",
  "You set the prize. Minimum $500.",
  "Teams opt in over the weekend and build against it.",
  "You judge your own bounty and pay the winning team directly.",
]

function Cell({ value }: { value: string }) {
  if (value === "●")
    return <span className="text-[15px] text-[#c9f73b]">●</span>
  if (value === "–")
    return <span className="text-[15px] text-[rgba(242,242,236,.25)]">–</span>
  return <span className="text-[13px] font-bold text-[#c9f73b]">{value}</span>
}

export default function SponsorPage() {
  return (
    <Fall26Shell
      tag="⌁ SPONSORSHIP_PROSPECTUS"
      title={
        <>
          SPONSOR<span className="text-[#c9f73b]">.</span>
        </>
      }
      intro="HackKentucky × HackTheTrack — Fall 2026. Two of Louisville's hackathons, one weekend, one sponsorship. 300+ builders at Genuine Works, September 11–12, 2026."
    >
      {/* top CTA bar */}
      <section className="flex flex-col gap-4 border-b border-[rgba(201,247,59,.22)] px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-9">
        <span className="text-[12px] uppercase tracking-[1px] text-[rgba(242,242,236,.55)]">
          Commit by <span className="text-[#c9f73b]">August 14</span> to make the t-shirt.
        </span>
        <div className="flex flex-wrap gap-3">
          <a
            href="#get-involved"
            className="inline-block bg-[#c9f73b] px-6 py-3 text-[13px] font-bold tracking-[1px] text-[#0b0b0b] transition-colors hover:bg-[#f2f2ec]"
          >
            GET INVOLVED →
          </a>
          <a
            href={PDF_URL}
            download
            className="inline-block border border-[rgba(242,242,236,.5)] px-6 py-3 text-[13px] font-bold tracking-[1px] text-[#f2f2ec] transition-colors hover:border-[#c9f73b] hover:text-[#c9f73b]"
          >
            ↓ PROSPECTUS (PDF)
          </a>
        </div>
      </section>

      {/* the opportunity */}
      <section className="border-b border-[rgba(201,247,59,.22)] px-5 py-16 sm:px-9">
        <SectionHead title="300 BUILDERS. ONE ROOM." note="THE OPPORTUNITY" />
        <div className="grid grid-cols-3 gap-4 sm:gap-6">
          {STATS.map(([num, label]) => (
            <div key={label} className="border border-[rgba(242,242,236,.12)] p-5 sm:p-7">
              <div className="font-[family-name:var(--font-hk-display)] text-[40px] font-bold leading-none tracking-[-2px] text-[#c9f73b] sm:text-[64px]">
                {num}
              </div>
              <div className="mt-3 text-[11px] tracking-[2px] text-[rgba(242,242,236,.65)]">{label}</div>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-[720px] text-[13px] leading-[1.9] text-[rgba(242,242,236,.7)]">
          HackKentucky is Kentucky&apos;s largest community-run hackathon. For 2026, we&apos;re joining forces with
          HackTheTrack — one venue, one crowd, one sponsorship reaching both communities. We&apos;re expecting
          300+ builders, mostly college students, early-career professionals, and high schoolers. Past HackKentuckies
          drew participants from Chicago, Cincinnati, Bowling Green, and Indianapolis.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={PDF_URL}
            download
            className="inline-block bg-[#c9f73b] px-6 py-3 text-[13px] font-bold tracking-[1px] text-[#0b0b0b] transition-colors hover:bg-[#f2f2ec]"
          >
            ↓ DOWNLOAD THE PROSPECTUS (PDF)
          </a>
          <a
            href="#get-involved"
            className="inline-block border border-[rgba(242,242,236,.5)] px-6 py-3 text-[13px] font-bold tracking-[1px] text-[#f2f2ec] transition-colors hover:border-[#c9f73b] hover:text-[#c9f73b]"
          >
            GET INVOLVED →
          </a>
        </div>
      </section>

      {/* four reasons */}
      <section className="border-b border-[rgba(201,247,59,.22)] px-5 py-16 sm:px-9">
        <SectionHead title="FOUR REASONS TO WRITE THE CHECK" note="WHY SPONSOR" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {REASONS.map((r) => (
            <div key={r.title} className="border border-[rgba(242,242,236,.12)] p-6 sm:p-7">
              <span className={tagClass}>{r.title}</span>
              <p className="mb-0 mt-5 text-[13px] leading-[1.8] text-[rgba(242,242,236,.6)]">{r.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* the room + format */}
      <section className="border-b border-[rgba(201,247,59,.22)] px-5 py-16 sm:px-9">
        <SectionHead title="WHO ACTUALLY SHOWS UP" note="THE ROOM" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="border border-[rgba(242,242,236,.12)] p-6 sm:p-7">
            <span className={tagClass}>THE HIGHEST-SIGNAL CROWD</span>
            <ul className="m-0 mt-5 list-none p-0">
              {ROOM.map((item) => (
                <li key={item} className="flex items-start gap-3 py-1.5">
                  <span className="text-[13px] text-[#c9f73b]">→</span>
                  <span className="text-[13px] leading-[1.8] text-[rgba(242,242,236,.6)]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-[rgba(242,242,236,.12)] p-6 sm:p-7">
            <span className={tagClass}>TWO DAYS. NO ALL-NIGHTER.</span>
            <div className="mt-5">
              {SCHEDULE.map(([time, desc], i) => (
                <div
                  key={time}
                  className={`flex flex-col gap-1 py-3 sm:flex-row sm:gap-4 ${
                    i < SCHEDULE.length - 1 ? "border-b border-[rgba(242,242,236,.1)]" : ""
                  }`}
                >
                  <span className="whitespace-nowrap text-[12px] font-bold tracking-[1px] text-[#c9f73b] sm:min-w-[92px]">
                    {time}
                  </span>
                  <span className="text-[12px] leading-[1.7] text-[rgba(242,242,236,.6)]">{desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* two ways to participate */}
      <section className="border-b border-[rgba(201,247,59,.22)] px-5 py-16 sm:px-9">
        <SectionHead title="TWO WAYS TO PARTICIPATE" note="THE OFFER" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="border border-[rgba(242,242,236,.3)] p-6 sm:p-7">
            <span className={tagClass}>A · SPONSOR A TIER</span>
            <p className="mb-0 mt-5 text-[13px] leading-[1.8] text-[rgba(242,242,236,.6)]">
              Your money funds the event — food, prizes, t-shirts, keeping registration free. You get brand presence, a
              recruiting table, speaking slots, and access to the room.
            </p>
          </div>
          <div className="border border-[rgba(242,242,236,.3)] p-6 sm:p-7">
            <span className={tagClass}>B · POST A BOUNTY</span>
            <p className="mb-0 mt-5 text-[13px] leading-[1.8] text-[rgba(242,242,236,.6)]">
              Your money goes directly to whoever solves your problem. Define a challenge, set the prize, and pay out to
              the winning team. No tier required — though Chrome and above include one.
            </p>
          </div>
        </div>
        <p className="mt-6 text-[12px] uppercase tracking-[1px] text-[rgba(242,242,236,.5)]">
          All tiers are cash. In-kind — food, prizes, hardware, cloud credits — is welcome and valued against the same
          table.
        </p>
      </section>

      {/* tiers */}
      <section className="border-b border-[rgba(201,247,59,.22)] px-5 py-16 sm:px-9">
        <SectionHead title="SPONSORSHIP TIERS" note="4 TIERS" />

        {/* tier headline cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TIERS.map((t) => (
            <div
              key={t.key}
              className={`border p-5 sm:p-6 ${
                t.key === "purple" ? "border-[#c9f73b] bg-[rgba(201,247,59,.06)]" : "border-[rgba(242,242,236,.12)]"
              }`}
            >
              <div className="text-[13px] font-bold tracking-[2px] text-[#f2f2ec]">{t.name}</div>
              <div className="mt-2 font-[family-name:var(--font-hk-display)] text-[32px] font-bold leading-none tracking-[-1px] text-[#c9f73b]">
                {t.price}
              </div>
              <p className="mb-0 mt-4 text-[12px] leading-[1.7] text-[rgba(242,242,236,.6)]">{t.tagline}</p>
              {t.only ? (
                <div className="mt-4 inline-block border border-[rgba(201,247,59,.6)] px-2 py-[3px] text-[11px] tracking-[1px] text-[#c9f73b]">
                  {t.only.toUpperCase()}
                </div>
              ) : null}
            </div>
          ))}
        </div>

        {/* benefit matrix */}
        <div className="mt-8 overflow-x-auto border border-[rgba(242,242,236,.12)]">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-[rgba(201,247,59,.22)]">
                <th className="px-4 py-4 text-[11px] font-bold tracking-[1px] text-[rgba(242,242,236,.65)]">
                  WHAT YOU GET
                </th>
                {TIERS.map((t) => (
                  <th
                    key={t.key}
                    className="px-3 py-4 text-center text-[11px] font-bold tracking-[1px] text-[#f2f2ec]"
                  >
                    {t.name}
                    <div className="mt-1 text-[10px] font-normal text-[#c9f73b]">{t.price}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {BENEFITS.map((row, i) => (
                <tr
                  key={row.label}
                  className={i < BENEFITS.length - 1 ? "border-b border-[rgba(242,242,236,.08)]" : ""}
                >
                  <td className="px-4 py-3 text-[12px] leading-[1.5] text-[rgba(242,242,236,.7)]">{row.label}</td>
                  {row.values.map((v, j) => (
                    <td key={j} className="px-3 py-3 text-center">
                      <Cell value={v} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-5 text-[12px] uppercase tracking-[1px] text-[rgba(242,242,236,.5)]">
          Only one Purple sponsorship is available.
        </p>
      </section>

      {/* bounties */}
      <section className="border-b border-[rgba(201,247,59,.22)] px-5 py-16 sm:px-9">
        <SectionHead title="BOUNTIES" note="PROBLEMS + PRIZES" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="border border-[rgba(242,242,236,.12)] p-6 sm:p-7">
            <span className={tagClass}>HOW IT WORKS</span>
            <ol className="m-0 mt-5 list-none p-0">
              {BOUNTY_STEPS.map((step, i) => (
                <li key={step} className="flex items-start gap-3 py-1.5">
                  <span className="text-[13px] font-bold text-[#c9f73b]">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[13px] leading-[1.8] text-[rgba(242,242,236,.6)]">{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="border border-[rgba(242,242,236,.12)] p-6 sm:p-7">
            <span className={tagClass}>WHAT MAKES A GOOD ONE</span>
            <p className="mt-5 text-[13px] leading-[1.8] text-[rgba(242,242,236,.6)]">
              A specific, scoped problem with a clear finish line. &ldquo;Build something cool with our API&rdquo; gets
              ignored. &ldquo;Build a tool that flags anomalies in this dataset in under 200ms&rdquo; gets a room full of
              people fighting over it.
            </p>
            <p className="mb-0 mt-4 text-[12px] uppercase tracking-[1px] text-[#c9f73b]">
              Post on their own, or stack on top of a tier.
            </p>
          </div>
        </div>
      </section>

      {/* the money */}
      <section className="border-b border-[rgba(201,247,59,.22)] px-5 py-16 sm:px-9">
        <SectionHead title="EVERY DOLLAR HITS THE FLOOR" note="THE MONEY · TARGET $10K" />
        <p className="mb-8 max-w-[640px] text-[13px] leading-[1.8] text-[rgba(242,242,236,.6)]">
          HackKentucky and HackTheTrack are volunteer-run. No staff, no overhead, no margin. Our target is $10,000 and
          here is precisely where it goes:
        </p>
        <div>
          {MONEY.map(([amount, desc], i) => (
            <div
              key={desc}
              className={`flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-6 ${
                i < MONEY.length - 1 ? "border-b border-[rgba(242,242,236,.12)]" : ""
              }`}
            >
              <span className="font-[family-name:var(--font-hk-display)] text-[24px] font-bold tracking-[-1px] text-[#c9f73b] sm:min-w-[120px]">
                {amount}
              </span>
              <span className="text-[13px] leading-[1.7] text-[rgba(242,242,236,.6)]">{desc}</span>
            </div>
          ))}
        </div>
        <p className="mt-8 text-[12px] uppercase tracking-[1px] text-[rgba(242,242,236,.5)]">
          Beyond $10K → t-shirts, bigger prizes, and keeping registration free for everyone.
        </p>
      </section>

      {/* custom */}
      <section className="border-b border-[rgba(201,247,59,.22)] px-5 py-16 sm:px-9">
        <SectionHead title="WANT SOMETHING THAT ISN'T ON THE LIST?" note="CUSTOM PACKAGES" />
        <p className="max-w-[720px] text-[13px] leading-[1.9] text-[rgba(242,242,236,.7)]">
          The tiers are a starting point, not a wall. A workshop, a hardware lab, naming rights on a specific award,
          sponsoring a single meal — bring it to us and we&apos;ll build the package around it. In-kind counts toward
          tier benefits: food, prizes, hardware, software licenses, and cloud credits are all things we need.
        </p>
      </section>

      {/* the form */}
      <section id="get-involved" className="scroll-mt-6 border-b border-[rgba(201,247,59,.22)] px-5 py-16 sm:px-9">
        <SectionHead title="GET INVOLVED" note="SPONSOR · VOLUNTEER · SPEAK" />
        <p className="mb-10 max-w-[620px] text-[13px] leading-[1.8] text-[rgba(242,242,236,.6)]">
          Tell us how you want to be part of Fall 2026 and we&apos;ll follow up. Sponsoring?{" "}
          <span className="text-[#c9f73b]">Commit by August 14</span> to make the t-shirt.
        </p>
        <SponsorForm />
      </section>

      {/* contact */}
      <section className="bg-[#c9f73b] px-5 py-16 sm:px-9">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <div className="mb-4 text-[11px] font-bold tracking-[3px] text-[#0b0b0b]">▚ PREFER TO TALK IT THROUGH?</div>
            <h2 className="m-0 font-[family-name:var(--font-hk-display)] text-[34px] font-bold leading-[.9] tracking-[-1px] text-[#0b0b0b] sm:text-[56px] sm:tracking-[-2px]">
              LET&apos;S TALK.
            </h2>
            <p className="mb-0 mt-4 text-[13px] leading-[1.7] text-[rgba(11,11,11,.7)]">
              Dan Ross-Li · 502.521.2872 · hackkentucky.com · hackthetrack.org
            </p>
          </div>
          <a
            href="mailto:organizers@kycombinator.com"
            className="whitespace-nowrap bg-[#0b0b0b] px-8 py-5 text-[14px] tracking-[2px] text-[#c9f73b] transition-colors hover:bg-[#f2f2ec] hover:text-[#0b0b0b]"
          >
            ORGANIZERS@KYCOMBINATOR.COM →
          </a>
        </div>
      </section>
    </Fall26Shell>
  )
}
