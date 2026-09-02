"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export const REGISTER_URL = "https://luma.com/hy24ycd1"
export const SLACK_INVITE_URL = "https://join.slack.com/t/kycombinator/shared_invite/zt-2viueybdu-QNv80gAKk~sJZ9paWebGVQ"

// Sub-pages for hackers, in the order a first-timer would read them.
export const PAGES: [string, string][] = [
  ["SCHEDULE", "/schedule"],
  ["VIBE CODING 101", "/vibe-coding"],
  ["HOW TO HACK", "/how-to-hack"],
  ["RUBRIC", "/rubric"],
]

// Sub-pages for sponsors, speakers, and volunteers.
export const INVOLVE_PAGES: [string, string][] = [
  ["SPONSOR", "/sponsor"],
  ["BOUNTIES", "/sponsor/bounty"],
  ["GET INVOLVED", "/get-involved"],
]

// Homepage anchors. The third value is the element id the scroll-spy watches.
const SECTIONS: [string, string, string][] = [
  ["OVERVIEW", "/#top", "hero"],
  ["THE SPACE", "/#venue", "venue"],
  ["GUIDELINES", "/#guidelines", "guidelines"],
  ["FAQ", "/#faq", "faq"],
  ["SPONSORS", "/#sponsors", "sponsors"],
]

// Bordered chip — used by the mobile header and shared with pages.
export const sectionTag =
  "inline-block border border-[rgba(242,242,236,.5)] px-[9px] py-1 text-[12px] tracking-[1px] text-[#f2f2ec] hover:border-[#c9f73b] hover:text-[#c9f73b] transition-colors"

const activeTag =
  "inline-block border border-[#c9f73b] px-[9px] py-1 text-[12px] tracking-[1px] text-[#c9f73b]"

// Sidebar links are plain text so the sidebar reads as a list, not a wall of boxes.
const navLink =
  "group flex items-center gap-2 py-[3px] text-[12px] tracking-[1px] text-[rgba(242,242,236,.7)] transition-colors hover:text-[#c9f73b]"
const navActive = "group flex items-center gap-2 py-[3px] text-[12px] tracking-[1px] text-[#c9f73b]"

function Marker({ active }: { active: boolean }) {
  return (
    <span
      aria-hidden
      className={`inline-block h-[6px] w-[6px] shrink-0 bg-[#c9f73b] transition-opacity ${
        active ? "opacity-100" : "opacity-0 group-hover:opacity-40"
      }`}
    />
  )
}

// Which homepage section is under the reader right now.
function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState<string>("hero")

  useEffect(() => {
    if (!enabled) return
    const targets = SECTIONS.map(([, , id]) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    if (!targets.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top band of the viewport.
        const visible = entries.filter((e) => e.isIntersecting)
        if (!visible.length) return
        visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        setActive(visible[0].target.id)
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 },
    )
    targets.forEach((t) => observer.observe(t))
    return () => observer.disconnect()
  }, [enabled])

  return enabled ? active : ""
}

function NavGroup({
  label,
  items,
  isActive,
}: {
  label: string
  items: [string, string, string?][]
  isActive: (href: string, id?: string) => boolean
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3 text-[13px] font-bold tracking-[2px] text-[#f2f2ec]">
        <span className="text-[#c9f73b]">↳</span>
        {label}
      </div>
      <div className="flex flex-col pl-[16px]">
        {items.map(([name, href, id]) => {
          const active = isActive(href, id)
          const cls = active ? navActive : navLink
          return href.includes("#") ? (
            <a key={href} href={href} className={cls}>
              <Marker active={active} />
              {name}
            </a>
          ) : (
            <Link key={href} href={href} className={cls}>
              <Marker active={active} />
              {name}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export function Fall26Sidebar() {
  const pathname = usePathname()
  const activeSection = useActiveSection(pathname === "/")

  const isActive = (href: string, id?: string) => (id ? activeSection === id : pathname === href)

  return (
    <nav className="fixed left-0 top-0 hidden h-screen w-[280px] flex-col overflow-auto border-r border-[rgba(201,247,59,.22)] bg-[#0b0b0b] px-[26px] pb-7 pt-7 lg:flex">
      <Link
        href="/"
        className="font-[family-name:var(--font-hk-display)] text-[32px] font-bold leading-[.95] tracking-[-1px] text-[#c9f73b]"
      >
        HACK
        <br />
        KENTUCKY.
      </Link>

      <div className="mt-12 flex flex-col gap-9">
        <NavGroup label="EVENT" items={SECTIONS} isActive={isActive} />
        <NavGroup label="INTEL" items={PAGES} isActive={isActive} />
        <NavGroup label="PARTNERS" items={INVOLVE_PAGES} isActive={isActive} />
      </div>

      <div className="flex-1" />

      <div className="mt-10 flex flex-col gap-2.5">
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

      <div className="flex items-center gap-2 overflow-x-auto border-b border-[rgba(201,247,59,.22)] px-5 py-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {pathname !== "/" ? (
          <Link href="/" className={`${sectionTag} whitespace-nowrap`}>
            ← EVENT
          </Link>
        ) : null}
        {[...PAGES, ...INVOLVE_PAGES].map(([label, href]) => (
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
