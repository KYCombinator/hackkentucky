"use client"

import Link from "next/link"
import { Fall26Shell, SectionHead, tagClass } from "@/components/fall26-shell"

type Row = [time: string, title: string, desc?: string]

const FRIDAY: Row[] = [
  ["16:00", "Doors open", "Check-in & team formation"],
  ["17:00", "Learn-a-thon", "5 parallel tracks · 5 rooms · 35-min sessions"],
  ["23:00", "Doors close", "No all-nighter — venue closes overnight"],
]

const SATURDAY: Row[] = [
  ["08:00", "Doors open", "Grazing breakfast · hacking begins"],
  ["10:00", "Guest speakers", "Career & startup tracks in parallel, until 15:00"],
  ["12:00", "Lunch", "Lunch voucher per attendee"],
  ["17:00", "Judging starts"],
  ["18:00", "Dinner", "Papa Johns"],
  ["19:00", "Final judging"],
  ["21:00", "Awards & close"],
  ["22:00", "Doors close", "Building empty"],
]

const TRACKS: { room: string; name: string; sessions: string[] }[] = [
  { room: "01", name: "SOFTWARE", sessions: ["Intro to Git — Jeff Squyres", "Building swapsgame.com with AI — Dalton Powell"] },
  { room: "02", name: "STARTUPS", sessions: ["Financial Modeling — Steven Plappert", "Moneybot — Kahlil Garmon"] },
  { room: "03", name: "HARDWARE", sessions: ["Jack Manzella", "Zaid"] },
  { room: "04", name: "SUSTAINABLE FASHION", sessions: ["Sessions TBA"] },
  { room: "05", name: "AI", sessions: ["Sessions TBA"] },
]

function DayColumn({ label, rows }: { label: string; rows: Row[] }) {
  return (
    <div className="border border-[rgba(242,242,236,.12)] p-5 sm:p-6">
      <div className="mb-4 text-[12px] font-bold tracking-[3px] text-[#c9f73b]">{label}</div>
      <div>
        {rows.map(([time, title, desc], i) => (
          <div
            key={`${time}-${title}`}
            className={`flex items-start gap-3 py-2.5 ${i < rows.length - 1 ? "border-b border-[rgba(242,242,236,.1)]" : ""}`}
          >
            <span className="mt-[1px] whitespace-nowrap border border-[rgba(201,247,59,.6)] px-2 py-[2px] text-[11px] tracking-[1px] text-[#c9f73b]">
              {time}
            </span>
            <div className="min-w-0">
              <span className="text-[13px] tracking-[1px] text-[#f2f2ec]">{title}</span>
              {desc ? <p className="m-0 mt-0.5 text-[11px] leading-[1.6] text-[rgba(242,242,236,.55)]">{desc}</p> : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function SchedulePage() {
  return (
    <Fall26Shell
      tag="⌁ RUN_OF_SHOW"
      title={
        <>
          SCHEDULE<span className="text-[#c9f73b]">.</span>
        </>
      }
      intro="The full two-day run of show plus the Friday Learn-a-thon track lineup. Fri 4PM → Sat 10PM at Genuine Works. Two days, no all-nighter."
    >
      {/* timeline */}
      <section className="border-b border-[rgba(201,247,59,.22)] px-5 py-14 sm:px-9">
        <SectionHead title="RUN OF SHOW" note="FRI 4PM → SAT 10PM" />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <DayColumn label="FRIDAY · 09.11" rows={FRIDAY} />
          <DayColumn label="SATURDAY · 09.12" rows={SATURDAY} />
        </div>
      </section>

      {/* learn-a-thon */}
      <section className="border-b border-[rgba(201,247,59,.22)] px-5 py-14 sm:px-9">
        <SectionHead title="LEARN-A-THON" note="FRIDAY · 5 ROOMS · 35-MIN SESSIONS" />
        <p className="mb-8 max-w-[620px] text-[13px] leading-[1.8] text-[rgba(242,242,236,.6)]">
          Five optional tracks running in parallel Friday evening — built to get first-timers building and give
          everyone a head start before the clock runs. Drop into any room.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TRACKS.map((t) => (
            <div key={t.room} className="border border-[rgba(242,242,236,.12)] p-5">
              <div className="flex items-baseline justify-between gap-3">
                <span className={tagClass}>{t.name}</span>
                <span className="font-[family-name:var(--font-hk-display)] text-[22px] font-bold leading-none text-[rgba(201,247,59,.5)]">
                  {t.room}
                </span>
              </div>
              <ul className="m-0 mt-4 list-none p-0">
                {t.sessions.map((s) => (
                  <li key={s} className="flex items-start gap-2.5 py-1">
                    <span className="mt-[3px] text-[11px] text-[#c9f73b]">→</span>
                    <span className="text-[12px] leading-[1.6] text-[rgba(242,242,236,.65)]">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-6 text-[11px] uppercase tracking-[1px] text-[rgba(242,242,236,.45)]">
          Lineup subject to change · more sessions announced closer to the event.
        </p>
      </section>

      {/* saturday speakers note + cta */}
      <section className="border-b border-[rgba(201,247,59,.22)] px-5 py-14 sm:px-9">
        <SectionHead title="SATURDAY SPEAKERS" note="10:00 → 15:00 · TWO TRACKS" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="border border-[rgba(242,242,236,.12)] p-5 sm:p-6">
            <span className={tagClass}>CAREER TRACK</span>
            <p className="mb-0 mt-4 text-[13px] leading-[1.8] text-[rgba(242,242,236,.6)]">
              Talks and mentoring for students and early-career builders, running alongside the hack.
            </p>
          </div>
          <div className="border border-[rgba(242,242,236,.12)] p-5 sm:p-6">
            <span className={tagClass}>STARTUP TRACK</span>
            <p className="mb-0 mt-4 text-[13px] leading-[1.8] text-[rgba(242,242,236,.6)]">
              Sessions for founders and independent builders — go-to-market, fundraising, and shipping fast.
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/get-involved#speak"
            className="inline-block bg-[#c9f73b] px-6 py-3 text-[13px] font-bold tracking-[1px] text-[#0b0b0b] transition-colors hover:bg-[#f2f2ec]"
          >
            WANT TO SPEAK? →
          </Link>
          <Link
            href="/how-to-hack"
            className="inline-block border border-[rgba(242,242,236,.5)] px-6 py-3 text-[13px] font-bold tracking-[1px] text-[#f2f2ec] transition-colors hover:border-[#c9f73b] hover:text-[#c9f73b]"
          >
            HOW TO HACK →
          </Link>
        </div>
      </section>
    </Fall26Shell>
  )
}
