"use client"

import { Space_Grotesk, Space_Mono } from "next/font/google"
import { Fall26Sidebar, Fall26MobileHeader } from "@/components/fall26-sidebar"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["500", "700"], variable: "--font-hk-display" })
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-hk-mono" })

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
      <Fall26Sidebar />

      <div className="min-w-0 lg:ml-[280px]">
        <Fall26MobileHeader />

        {/* page header */}
        <header className="relative overflow-hidden border-b border-[rgba(201,247,59,.22)] px-5 py-16 sm:px-9 sm:py-20">
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
    </div>
  )
}
