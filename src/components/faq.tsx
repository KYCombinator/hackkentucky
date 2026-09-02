"use client"

import { useState } from "react"

export type FaqItem = [question: string, answer: string]

// Two-column FAQ: the question list on the left acts as a switcher, the
// answer panel on the right swaps in with a short rise. On phones the answer
// opens under its question instead.
export function Faq({ items }: { items: FaqItem[] }) {
  const [active, setActive] = useState(0)
  const [question, answer] = items[active]

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_1.15fr] md:gap-12">
      <ul className="m-0 list-none border-t border-[rgba(242,242,236,.12)] p-0">
        {items.map(([q, a], i) => {
          const isActive = i === active
          return (
            <li key={q} className="border-b border-[rgba(242,242,236,.12)]">
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-expanded={isActive}
                className={`flex w-full items-center gap-4 py-4 text-left text-[13px] tracking-[1px] transition-colors ${
                  isActive ? "text-[#c9f73b]" : "text-[rgba(242,242,236,.7)] hover:text-[#f2f2ec]"
                }`}
              >
                <span
                  className={`w-4 shrink-0 text-[#c9f73b] transition-opacity ${isActive ? "opacity-100" : "opacity-0"}`}
                  aria-hidden
                >
                  ↳
                </span>
                <span className="flex-1">{q}</span>
                <span className="text-[11px] text-[rgba(242,242,236,.35)]">{String(i + 1).padStart(2, "0")}</span>
              </button>
              {isActive ? (
                <p key={q} className="hk-rise m-0 mb-5 pl-8 text-[13px] leading-[1.8] text-[rgba(242,242,236,.6)] md:hidden">
                  {a}
                </p>
              ) : null}
            </li>
          )
        })}
      </ul>

      <div className="hidden border border-[rgba(201,247,59,.4)] p-7 md:block md:self-start">
        <div key={question} className="hk-rise">
          <div className="mb-4 inline-block border border-[#c9f73b] px-2.5 py-[5px] text-[13px] tracking-[1px] text-[#c9f73b]">
            {question}
          </div>
          <p className="m-0 text-[14px] leading-[1.9] text-[#f2f2ec]">{answer}</p>
        </div>
      </div>
    </div>
  )
}
