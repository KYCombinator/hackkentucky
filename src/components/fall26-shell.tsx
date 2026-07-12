"use client"

import Link from "next/link"
import { Space_Grotesk, Space_Mono } from "next/font/google"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["500", "700"], variable: "--font-hk-display" })
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-hk-mono" })

export const REGISTER_URL = "https://luma.com/hy24ycd1"

export const tagClass =
  "inline-block border border-[rgba(242,242,236,.5)] px-[9px] py-1 text-[12px] tracking-[1px] text-[#f2f2ec]"

export function SectionHead({ title, note }: { title: string; note?: string }) {
  return (
    <div className="mb-10 flex flex-wrap items-center gap-3.5">
      <span className="text-[16px] text-[#c9f73b]">↳</span>
      <h2 className="m-0 font-[family-name:var(--font-hk-display)] text-[34px] font-bold tracking-[-1px] text-[#f2f2ec] sm:text-[44px]">
        {title}
      </h2>
      {note ? <span className="pt-3 text-[13px] text-[#c9f73b]">{note}</span> : null}
    </div>
  )
}

export function Fall26Shell({
  tag,
  title,
  intro,
  children,
}: {
  tag: string
  title: React.ReactNode
  intro: string
  children: React.ReactNode
}) {
  return (
    <div
      className={`${spaceGrotesk.variable} ${spaceMono.variable} min-h-screen bg-[#0b0b0b] font-[family-name:var(--font-hk-mono)] selection:bg-[#c9f73b] selection:text-[#0b0b0b]`}
    >
      {/* top bar */}
      <div className="flex items-center justify-between border-b border-[rgba(201,247,59,.22)] px-5 py-4 sm:px-9">
        <Link
          href="/"
          className="font-[family-name:var(--font-hk-display)] text-[20px] font-bold leading-none tracking-[-1px] text-[#c9f73b]"
        >
          HACKKENTUCKY.
        </Link>
        <div className="flex items-center gap-2.5 text-[12px] tracking-[1px]">
          <Link
            href="/"
            className="hidden whitespace-nowrap border border-[rgba(242,242,236,.5)] px-3 py-[5px] text-[#f2f2ec] transition-colors hover:border-[#c9f73b] hover:text-[#c9f73b] sm:inline-block"
          >
            ← BACK TO EVENT
          </Link>
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noreferrer"
            className="whitespace-nowrap border border-[#c9f73b] bg-[#c9f73b] px-3 py-[5px] font-bold text-[#0b0b0b] transition-colors hover:border-[#f2f2ec] hover:bg-[#f2f2ec]"
          >
            REGISTER →
          </a>
        </div>
      </div>

      {/* page header */}
      <header className="relative overflow-hidden border-b border-[rgba(201,247,59,.22)] px-5 py-16 sm:px-9 sm:py-20">
        <div className="pointer-events-none absolute right-10 top-8 opacity-50">
          <div className="whitespace-pre font-[family-name:var(--font-hk-mono)] text-[22px] leading-none text-[#c9f73b]">
            {"▄█▀ █\n█  ▀▄\n ▀█"}
          </div>
        </div>
        <div className="mb-[18px] inline-block border border-[#c9f73b] bg-[#0b0b0b] px-3.5 py-2 text-[11px] tracking-[3px] text-[#c9f73b]">
          {tag}
        </div>
        <h1 className="m-0 font-[family-name:var(--font-hk-display)] text-[44px] font-bold leading-[.9] tracking-[-2px] text-[#f2f2ec] sm:text-[76px] sm:tracking-[-3px]">
          {title}
        </h1>
        <p className="mt-6 max-w-[560px] text-[12px] uppercase leading-[1.8] tracking-[1px] text-[rgba(242,242,236,.65)]">
          {intro}
        </p>
      </header>

      <main>{children}</main>

      {/* footer strip */}
      <footer className="flex flex-col gap-2 border-t border-[rgba(201,247,59,.22)] px-5 py-[18px] text-[11px] tracking-[2px] text-[rgba(242,242,236,.5)] sm:flex-row sm:justify-between sm:px-9">
        <span>HACKKENTUCKY © 2026</span>
        <span>GENUINE WORKS · 750 E JEFFERSON ST</span>
        <span>LOUISVILLE KY 40202</span>
      </footer>
    </div>
  )
}
