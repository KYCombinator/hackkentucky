"use client"

import Link from "next/link"
import { Fall26Shell, SectionHead } from "@/components/fall26-shell"
import { InvolvementForm } from "@/components/involvement-form"
import { TRACKS, TRACK_KEYS } from "@/lib/involvement"

export default function GetInvolvedPage() {
  return (
    <Fall26Shell
      tag="⌁ JOIN_THE_BUILD"
      title={
        <>
          GET INVOLVED<span className="text-[#c9f73b]">.</span>
        </>
      }
      intro="HackKentucky × HackTheTrack runs on the people who show up for it. Sponsor it, post a bounty, teach a session, or help run the floor — pick a lane and fill out the form."
    >
      {/* quick jump */}
      <section className="border-b border-[rgba(201,247,59,.22)] px-5 py-8 sm:px-9">
        <div className="flex flex-wrap gap-3">
          {TRACK_KEYS.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              className="inline-flex items-center gap-2 border border-[rgba(242,242,236,.3)] px-4 py-2 text-[12px] font-bold tracking-[1px] text-[#f2f2ec] transition-colors hover:border-[#c9f73b] hover:text-[#c9f73b]"
            >
              <span className="text-[#c9f73b]">{TRACKS[key].glyph}</span>
              {TRACKS[key].label}
            </a>
          ))}
        </div>
      </section>

      {/* one section per track */}
      {TRACK_KEYS.map((key) => {
        const def = TRACKS[key]
        return (
          <section
            key={key}
            id={key}
            className="scroll-mt-6 border-b border-[rgba(201,247,59,.22)] px-5 py-16 sm:px-9"
          >
            <SectionHead title={def.label} note={def.note} />
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)]">
              <div>
                <div className="mb-5 font-[family-name:var(--font-hk-display)] text-[52px] leading-none text-[#c9f73b] opacity-80">
                  {def.glyph}
                </div>
                <p className="mb-6 text-[13px] leading-[1.9] text-[rgba(242,242,236,.7)]">{def.blurb}</p>
                {key === "sponsor" ? (
                  <Link
                    href="/sponsor"
                    className="inline-block border border-[rgba(242,242,236,.5)] px-[9px] py-1 text-[12px] tracking-[1px] text-[#f2f2ec] transition-colors hover:border-[#c9f73b] hover:text-[#c9f73b]"
                  >
                    SEE TIERS & DETAILS →
                  </Link>
                ) : null}
              </div>
              <InvolvementForm track={key} />
            </div>
          </section>
        )
      })}

      {/* contact */}
      <section className="bg-[#c9f73b] px-5 py-16 sm:px-9">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <div className="mb-4 text-[11px] font-bold tracking-[3px] text-[#0b0b0b]">▚ RATHER JUST TALK?</div>
            <h2 className="m-0 font-[family-name:var(--font-hk-display)] text-[34px] font-bold leading-[.9] tracking-[-1px] text-[#0b0b0b] sm:text-[56px] sm:tracking-[-2px]">
              EMAIL THE TEAM.
            </h2>
          </div>
          <a
            href="mailto:hackkentucky@kycombinator.com"
            className="whitespace-nowrap bg-[#0b0b0b] px-8 py-5 text-[14px] tracking-[2px] text-[#c9f73b] transition-colors hover:bg-[#f2f2ec] hover:text-[#0b0b0b]"
          >
            HACKKENTUCKY@KYCOMBINATOR.COM →
          </a>
        </div>
      </section>
    </Fall26Shell>
  )
}
