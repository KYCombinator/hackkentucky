"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ViewportFixed } from "@/components/viewport-fixed"

export const REGISTER_URL = "https://luma.com/hy24ycd1"
export const SLACK_INVITE_URL = "https://join.slack.com/t/kycombinator/shared_invite/zt-2viueybdu-QNv80gAKk~sJZ9paWebGVQ"

export const PAGES: [string, string][] = [
  ["RUBRIC", "/rubric"],
  ["HOW TO HACK", "/how-to-hack"],
]

const SECTIONS: [string, string, string?][] = [
  ["OVERVIEW", "/#top"],
  ["SCHEDULE", "/#schedule", "11"],
  ["GUIDELINES", "/#guidelines", "4"],
  ["FAQ", "/#faq", "6"],
]

export const sectionTag =
  "inline-block border border-[rgba(242,242,236,.5)] px-[9px] py-1 text-[12px] tracking-[1px] text-[#f2f2ec] hover:border-[#c9f73b] hover:text-[#c9f73b] transition-colors"

const activeTag =
  "inline-block border border-[#c9f73b] px-[9px] py-1 text-[12px] tracking-[1px] text-[#c9f73b]"

export function Fall26Sidebar() {
  const pathname = usePathname()

  return (
    <ViewportFixed>
      <nav className="fixed left-0 top-0 hidden h-screen w-[280px] flex-col overflow-auto border-r border-[rgba(201,247,59,.22)] bg-[#0b0b0b] px-[26px] pb-[76px] pt-7 lg:flex">
        <Link
          href="/"
          className="font-[family-name:var(--font-hk-display)] text-[32px] font-bold leading-[.95] tracking-[-1px] text-[#c9f73b]"
        >
          HACK
          <br />
          KENTUCKY.
        </Link>

        <div className="mt-12 flex flex-col gap-3.5">
          <div className="flex items-center gap-3 text-[13px] font-bold tracking-[2px] text-[#f2f2ec]">
            <span className="text-[#c9f73b]">↳</span>EVENT
          </div>
          <div className="flex flex-col gap-2.5 pl-[26px]">
            {SECTIONS.map(([label, href, count]) => (
              <div key={href} className="flex items-center gap-2">
                <a href={href} className={sectionTag}>{label}</a>
                {count ? <span className="text-[12px] text-[#c9f73b]">{count}</span> : null}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3.5">
          <div className="flex items-center gap-3 text-[13px] font-bold tracking-[2px] text-[#f2f2ec]">
            <span className="text-[#c9f73b]">↳</span>INTEL
          </div>
          <div className="flex flex-col gap-2.5 pl-[26px]">
            {PAGES.map(([label, href]) => (
              <div key={href} className="flex items-center gap-2">
                <Link href={href} className={pathname === href ? activeTag : sectionTag}>
                  {label}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1" />

        <div className="mt-10 flex flex-col gap-3">
          <div className="flex items-center gap-3 text-[13px] font-bold tracking-[2px] text-[#f2f2ec]">
            <span className="text-[#c9f73b]">↳</span>VENUE
          </div>
          <div className="pl-[26px] text-[12px] leading-[1.8] text-[rgba(242,242,236,.65)]">
            GENUINE WORKS
            <br />
            750 E JEFFERSON ST
            <br />
            LOUISVILLE, KY 40202
          </div>
        </div>

        <div className="mt-[34px] flex flex-col gap-2.5">
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noreferrer"
            className="border border-[#c9f73b] bg-[#c9f73b] px-3 py-2 text-center text-[12px] font-bold tracking-[1px] text-[#0b0b0b] transition-colors hover:border-[#f2f2ec] hover:bg-[#f2f2ec]"
          >
            REGISTER →
          </a>
          <a
            href={SLACK_INVITE_URL}
            target="_blank"
            rel="noreferrer"
            className="border border-[rgba(242,242,236,.5)] px-3 py-2 text-center text-[12px] font-bold tracking-[1px] text-[#f2f2ec] transition-colors hover:border-[#c9f73b] hover:text-[#c9f73b]"
          >
            JOIN THE SLACK →
          </a>
        </div>
      </nav>
    </ViewportFixed>
  )
}

export function Fall26MobileHeader() {
  const pathname = usePathname()

  return (
    <div className="lg:hidden">
      <div className="flex items-center justify-between border-b border-[rgba(201,247,59,.22)] px-5 py-4">
        <Link
          href="/"
          className="font-[family-name:var(--font-hk-display)] text-[20px] font-bold leading-none tracking-[-1px] text-[#c9f73b]"
        >
          HACKKENTUCKY.
        </Link>
        <div className="flex items-center gap-2 text-[11px] tracking-[1px]">
          <a
            href={SLACK_INVITE_URL}
            target="_blank"
            rel="noreferrer"
            className="border border-[rgba(242,242,236,.5)] px-3 py-1.5 font-bold text-[#f2f2ec] transition-colors hover:border-[#c9f73b] hover:text-[#c9f73b]"
          >
            SLACK
          </a>
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noreferrer"
            className="border border-[#c9f73b] bg-[#c9f73b] px-3 py-1.5 font-bold text-[#0b0b0b]"
          >
            REGISTER
          </a>
        </div>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto border-b border-[rgba(201,247,59,.22)] px-5 py-3">
        {pathname !== "/" ? (
          <Link href="/" className={`${sectionTag} whitespace-nowrap`}>
            ← EVENT
          </Link>
        ) : null}
        {PAGES.map(([label, href]) => (
          <Link
            key={href}
            href={href}
            className={`${pathname === href ? activeTag : sectionTag} whitespace-nowrap`}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  )
}
