import Link from "next/link"
import { Space_Grotesk, Space_Mono } from "next/font/google"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["500", "700"], variable: "--font-hk-display" })
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-hk-mono" })

const LINKS: [string, string][] = [
  ["OVERVIEW", "/"],
  ["SCHEDULE", "/schedule"],
  ["GET INVOLVED", "/get-involved"],
  ["SPONSOR", "/sponsor"],
  ["HOW TO HACK", "/how-to-hack"],
  ["RUBRIC", "/rubric"],
]

export default function NotFound() {
  return (
    <div
      className={`${spaceGrotesk.variable} ${spaceMono.variable} flex min-h-screen flex-col bg-[#0b0b0b] font-[family-name:var(--font-hk-mono)] text-[#f2f2ec] selection:bg-[#c9f73b] selection:text-[#0b0b0b]`}
    >
      <style>{`
        @keyframes hk404-blink { 0%, 60% { opacity: 1 } 61%, 100% { opacity: .15 } }
        @media (prefers-reduced-motion: reduce) { .hk404-cursor { animation: none !important } }
      `}</style>

      {/* top bar */}
      <div className="flex items-center justify-between border-b border-[rgba(201,247,59,.22)] px-5 py-4 sm:px-9">
        <Link
          href="/"
          className="font-[family-name:var(--font-hk-display)] text-[20px] font-bold leading-none tracking-[-1px] text-[#c9f73b]"
        >
          HACKKENTUCKY.
        </Link>
        <span className="text-[11px] tracking-[3px] text-[rgba(242,242,236,.5)]">ERROR</span>
      </div>

      {/* body */}
      <main className="flex flex-1 flex-col justify-center px-5 py-16 sm:px-9">
        <div className="mb-5 inline-block w-fit border border-[#c9f73b] bg-[#0b0b0b] px-3.5 py-2 text-[11px] tracking-[3px] text-[#c9f73b]">
          ⌁ 404_SIGNAL_LOST
        </div>

        <h1 className="m-0 font-[family-name:var(--font-hk-display)] text-[96px] font-bold leading-[.82] tracking-[-4px] text-[#f2f2ec] sm:text-[180px] sm:tracking-[-8px]">
          404
          <span className="hk404-cursor text-[#c9f73b] [animation:hk404-blink_1s_steps(1)_infinite]">_</span>
        </h1>

        <p className="mt-8 max-w-[560px] text-[13px] uppercase leading-[1.9] tracking-[1px] text-[rgba(242,242,236,.65)]">
          This page never made the build. Broken link, moved page, or a typo in the URL — either way, let&apos;s route
          you back to something real.
        </p>

        {/* quick links */}
        <div className="mt-10">
          <div className="mb-4 flex items-center gap-3 text-[12px] font-bold tracking-[2px] text-[#f2f2ec]">
            <span className="text-[#c9f73b]">↳</span>JUMP TO
          </div>
          <div className="flex flex-wrap gap-3">
            {LINKS.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="inline-block border border-[rgba(242,242,236,.4)] px-4 py-2.5 text-[12px] font-bold tracking-[1px] text-[#f2f2ec] transition-colors hover:border-[#c9f73b] hover:text-[#c9f73b]"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <Link
            href="/"
            className="inline-block bg-[#c9f73b] px-8 py-4 text-[14px] font-bold tracking-[2px] text-[#0b0b0b] transition-colors hover:bg-[#f2f2ec]"
          >
            ← BACK TO BASE
          </Link>
        </div>
      </main>

      {/* footer strip */}
      <footer className="flex flex-col gap-2 border-t border-[rgba(201,247,59,.22)] px-5 py-[18px] text-[11px] tracking-[2px] text-[rgba(242,242,236,.5)] sm:flex-row sm:justify-between sm:px-9">
        <span>HACKKENTUCKY © 2026</span>
        <span>GENUINE WORKS · 750 E JEFFERSON ST</span>
        <span>LOUISVILLE KY 40202</span>
      </footer>
    </div>
  )
}
