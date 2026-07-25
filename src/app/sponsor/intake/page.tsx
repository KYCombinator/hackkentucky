"use client"

import Link from "next/link"
import { Fall26Shell, SectionHead, tagClass } from "@/components/fall26-shell"
import { SponsorIntakeForm } from "@/components/sponsor-intake-form"

const CHECKLIST: { title: string; body: string }[] = [
  {
    title: "VECTOR OR HIGH-RES",
    body: "SVG is ideal. For raster, send at least 1000px on the long edge so it holds up on the t-shirt and signage.",
  },
  {
    title: "TRANSPARENT BACKGROUND",
    body: "A transparent PNG or SVG sits cleanly on our dark and light layouts. Avoid a baked-in white box if you can.",
  },
  {
    title: "THE VARIANT YOU WANT SHOWN",
    body: "Send the exact logo lockup you want on the site, shirt, and screen. Note any clear-space or color rules.",
  },
]

export default function SponsorIntakePage() {
  return (
    <Fall26Shell
      tag="⌁ SPONSOR_INTAKE"
      title={
        <>
          LOGO INTAKE<span className="text-[#c9f73b]">.</span>
        </>
      }
      intro="Confirmed as a HackKentucky × HackTheTrack Fall 2026 sponsor? Send us your logo and details here so we can get you on the site, the t-shirt, and the venue signage."
    >
      {/* what we need */}
      <section className="border-b border-[rgba(201,247,59,.22)] px-5 py-16 sm:px-9">
        <SectionHead title="WHAT WE NEED" note="LOGO CHECKLIST" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {CHECKLIST.map((c) => (
            <div key={c.title} className="border border-[rgba(242,242,236,.12)] p-6 sm:p-7">
              <span className={tagClass}>{c.title}</span>
              <p className="mb-0 mt-5 text-[13px] leading-[1.8] text-[rgba(242,242,236,.6)]">{c.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-[640px] text-[12px] uppercase tracking-[1px] text-[rgba(242,242,236,.5)]">
          Not a sponsor yet?{" "}
          <Link href="/sponsor#get-involved" className="text-[#c9f73b] underline underline-offset-4">
            Start on the sponsor page →
          </Link>
        </p>
      </section>

      {/* the form */}
      <section className="border-b border-[rgba(201,247,59,.22)] px-5 py-16 sm:px-9">
        <SectionHead title="SUBMIT YOUR LOGO" note="INTAKE FORM" />
        <SponsorIntakeForm />
      </section>

      {/* contact */}
      <section className="bg-[#c9f73b] px-5 py-16 sm:px-9">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <div className="mb-4 text-[11px] font-bold tracking-[3px] text-[#0b0b0b]">▚ TROUBLE WITH THE UPLOAD?</div>
            <h2 className="m-0 font-[family-name:var(--font-hk-display)] text-[34px] font-bold leading-[.9] tracking-[-1px] text-[#0b0b0b] sm:text-[56px] sm:tracking-[-2px]">
              EMAIL IT OVER.
            </h2>
          </div>
          <a
            href="mailto:organizers@kycombinator.com?subject=HackKentucky%202026%20sponsor%20logo"
            className="whitespace-nowrap bg-[#0b0b0b] px-8 py-5 text-[14px] tracking-[2px] text-[#c9f73b] transition-colors hover:bg-[#f2f2ec] hover:text-[#0b0b0b]"
          >
            ORGANIZERS@KYCOMBINATOR.COM →
          </a>
        </div>
      </section>
    </Fall26Shell>
  )
}
