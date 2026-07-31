"use client"

import { Fall26Shell, SectionHead, tagClass } from "@/components/fall26-shell"

const FACILITIES = [
  {
    title: "BATHROOMS",
    items: [
      "Restrooms are available on-site throughout the event.",
      "No shower facilities on site.",
    ],
  },
  {
    title: "WIFI",
    items: [
      "Dedicated event network with plenty of bandwidth.",
      "Network name and password posted at check-in and on every table.",
    ],
  },
  {
    title: "DESKS + POWER",
    items: [
      "Tables, chairs, power strips, and outlets provided — just bring your laptop and charger.",
      "Genuine Works is a working space. Be respectful: don't move or open anything that isn't yours.",
    ],
  },
  {
    title: "FOOD + CAFFEINE",
    items: [
      "Papa Johns for Friday dinner. Saturday brings grazing breakfast plus lunch and dinner vouchers.",
      "Food is provided during the event. Flag dietary restrictions at registration.",
    ],
  },
]

export default function LogisticsPage() {
  return (
    <Fall26Shell
      tag="⌁ ON-SITE_INFORMATION"
      title={
        <>
          LOGISTICS<span className="text-[#c9f73b]">.</span>
        </>
      }
      intro="Everything you need to know about getting in, parking, wifi, and making the most of the weekend at Genuine Works."
    >
      {/* venue + parking */}
      <section className="border-b border-[rgba(201,247,59,.22)] px-5 py-16 sm:px-9">
        <SectionHead title="GETTING HERE" note="GENUINE WORKS" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="border border-[rgba(242,242,236,.12)] p-6 sm:p-7">
            <span className={tagClass}>THE VENUE</span>
            <p className="mb-0 mt-5 text-[13px] leading-[1.8] text-[rgba(242,242,236,.6)]">
              Genuine Works — 750 E Jefferson St, Louisville, KY 40202. Doors open Friday at 4:00 PM; check in with a
              photo ID at the front desk.
            </p>
            <a
              href="https://maps.google.com/?q=750+E+Jefferson+St,+Louisville,+KY+40202"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-block border border-[rgba(242,242,236,.5)] px-[9px] py-1 text-[12px] tracking-[1px] text-[#f2f2ec] transition-colors hover:border-[#c9f73b] hover:text-[#c9f73b]"
            >
              OPEN IN MAPS ↗
            </a>
          </div>
          <div className="border border-[rgba(242,242,236,.12)] p-6 sm:p-7">
            <span className={tagClass}>PARKING</span>
            <p className="mb-0 mt-5 text-[13px] leading-[1.8] text-[rgba(242,242,236,.6)]">
              Free street parking is available around the venue, with nearby surface lots as backup. A parking map with
              marked spots will be posted here closer to the event.
            </p>
            <div className="mt-5 inline-block border border-[rgba(201,247,59,.6)] px-2 py-[3px] text-[12px] tracking-[1px] text-[#c9f73b]">
              MAP DROPS SOON
            </div>
          </div>
        </div>
      </section>

      {/* facilities */}
      <section className="border-b border-[rgba(201,247,59,.22)] px-5 py-16 sm:px-9">
        <SectionHead title="THE FACILITIES" note="WHAT'S ON-SITE" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {FACILITIES.map((card) => (
            <div key={card.title} className="border border-[rgba(242,242,236,.12)] p-6 sm:p-7">
              <span className={tagClass}>{card.title}</span>
              <ul className="m-0 mt-5 list-none p-0">
                {card.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 py-1.5">
                    <span className="text-[13px] text-[#c9f73b]">→</span>
                    <span className="text-[13px] leading-[1.8] text-[rgba(242,242,236,.6)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* floor map */}
      <section className="border-b border-[rgba(201,247,59,.22)] px-5 py-16 sm:px-9">
        <SectionHead title="FLOOR MAP" note="KNOW THE BUILD FLOOR" />
        <div className="flex flex-col items-start gap-5 border border-[rgba(242,242,236,.12)] p-6 sm:p-10">
          <div className="whitespace-pre font-[family-name:var(--font-hk-mono)] text-[20px] leading-none text-[#c9f73b] opacity-70">
            {"█▀▀▀█ ▀█\n█ ▄  ▄ █\n▀▀ █▀▀▀▀"}
          </div>
          <p className="m-0 max-w-[560px] text-[13px] leading-[1.8] text-[rgba(242,242,236,.6)]">
            The floor map for Genuine Works — hacking zones, demo stage, food station, and quiet corners — will be
            posted here before doors open.
          </p>
          <div className="inline-block border border-[rgba(201,247,59,.6)] px-2 py-[3px] text-[12px] tracking-[1px] text-[#c9f73b]">
            COMING BEFORE DOORS OPEN
          </div>
        </div>
      </section>

      {/* questions */}
      <section className="bg-[#c9f73b] px-5 py-16 sm:px-9">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <div className="mb-4 text-[11px] font-bold tracking-[3px] text-[#0b0b0b]">▚ STILL HAVE QUESTIONS?</div>
            <h2 className="m-0 font-[family-name:var(--font-hk-display)] text-[34px] font-bold leading-[.9] tracking-[-1px] text-[#0b0b0b] sm:text-[56px] sm:tracking-[-2px]">
              ASK AN ORGANIZER.
            </h2>
          </div>
          <a
            href="mailto:hello@hackkentucky.com"
            className="whitespace-nowrap bg-[#0b0b0b] px-8 py-5 text-[14px] tracking-[2px] text-[#c9f73b] transition-colors hover:bg-[#f2f2ec] hover:text-[#0b0b0b]"
          >
            HELLO@HACKKENTUCKY.COM →
          </a>
        </div>
      </section>
    </Fall26Shell>
  )
}
