"use client"

import { useState } from "react"

type Interest = "sponsor" | "volunteer" | "speak"

const INTERESTS: { value: Interest; label: string; blurb: string }[] = [
  { value: "sponsor", label: "SPONSOR", blurb: "Fund a tier or post a bounty." },
  { value: "volunteer", label: "VOLUNTEER", blurb: "Help run the weekend on-site." },
  { value: "speak", label: "SPEAK", blurb: "Lead a Learn-a-thon or guest talk." },
]

const TIERS: { value: string; label: string }[] = [
  { value: "", label: "NOT SURE YET" },
  { value: "community", label: "COMMUNITY · FREE" },
  { value: "neon", label: "NEON · $100" },
  { value: "chrome", label: "CHROME · $500" },
  { value: "purple", label: "PURPLE · $5,000" },
  { value: "bounty", label: "BOUNTY (PRIZE)" },
  { value: "custom", label: "CUSTOM PACKAGE" },
]

const inputClass =
  "w-full border border-[rgba(242,242,236,.2)] bg-[#0b0b0b] px-4 py-3 text-[14px] text-[#f2f2ec] outline-none transition-colors placeholder:text-[rgba(242,242,236,.35)] focus:border-[#c9f73b]"

const labelClass = "mb-2 block text-[11px] font-bold tracking-[2px] text-[rgba(242,242,236,.65)]"

export function SponsorForm() {
  const [interest, setInterest] = useState<Interest>("sponsor")
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === "sending") return
    setStatus("sending")
    setError("")

    const form = e.currentTarget
    const data = new FormData(form)
    const payload = {
      interest,
      name: data.get("name"),
      email: data.get("email"),
      organization: data.get("organization"),
      tier: data.get("tier"),
      message: data.get("message"),
      company_url: data.get("company_url"), // honeypot
    }

    try {
      const res = await fetch("/api/sponsor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) {
        const json = await res.json().catch(() => ({}))
        throw new Error(json.error || "Something went wrong. Please try again.")
      }
      setStatus("sent")
      form.reset()
    } catch (err) {
      setStatus("error")
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-[#c9f73b] p-8 sm:p-10">
        <div className="mb-4 text-[11px] font-bold tracking-[3px] text-[#c9f73b]">▚ MESSAGE SENT</div>
        <h3 className="m-0 font-[family-name:var(--font-hk-display)] text-[28px] font-bold tracking-[-1px] text-[#f2f2ec] sm:text-[36px]">
          Thanks — we&apos;ll be in touch.
        </h3>
        <p className="mb-0 mt-4 max-w-[520px] text-[13px] leading-[1.8] text-[rgba(242,242,236,.6)]">
          Your note is on its way to the organizing team at hackkentucky@kycombinator.com. Expect a reply within a couple
          of days. Sponsoring? Commit by <span className="text-[#c9f73b]">August 14</span> to make the t-shirt.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 inline-block border border-[rgba(242,242,236,.5)] px-[9px] py-1 text-[12px] tracking-[1px] text-[#f2f2ec] transition-colors hover:border-[#c9f73b] hover:text-[#c9f73b]"
        >
          SEND ANOTHER →
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="border border-[rgba(242,242,236,.12)] p-6 sm:p-9">
      {/* interest selector */}
      <div className="mb-8">
        <span className={labelClass}>I WANT TO…</span>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {INTERESTS.map((opt) => {
            const active = interest === opt.value
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => setInterest(opt.value)}
                aria-pressed={active}
                className={`border p-4 text-left transition-colors ${
                  active
                    ? "border-[#c9f73b] bg-[rgba(201,247,59,.08)]"
                    : "border-[rgba(242,242,236,.2)] hover:border-[rgba(201,247,59,.6)]"
                }`}
              >
                <div className={`text-[13px] font-bold tracking-[1px] ${active ? "text-[#c9f73b]" : "text-[#f2f2ec]"}`}>
                  {opt.label}
                </div>
                <div className="mt-1.5 text-[12px] leading-[1.6] text-[rgba(242,242,236,.55)]">{opt.blurb}</div>
              </button>
            )
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            NAME *
          </label>
          <input id="name" name="name" required autoComplete="name" className={inputClass} placeholder="Jane Builder" />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            EMAIL *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
            placeholder="jane@company.com"
          />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="organization" className={labelClass}>
            ORGANIZATION
          </label>
          <input
            id="organization"
            name="organization"
            autoComplete="organization"
            className={inputClass}
            placeholder="Company / school / team"
          />
        </div>
        {interest === "sponsor" ? (
          <div>
            <label htmlFor="tier" className={labelClass}>
              TIER OF INTEREST
            </label>
            <select id="tier" name="tier" defaultValue="" className={`${inputClass} appearance-none`}>
              {TIERS.map((t) => (
                <option key={t.value} value={t.value} className="bg-[#0b0b0b]">
                  {t.label}
                </option>
              ))}
            </select>
          </div>
        ) : (
          <div className="hidden sm:block" aria-hidden />
        )}
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={labelClass}>
          {interest === "sponsor"
            ? "WHAT ARE YOU THINKING? *"
            : interest === "speak"
              ? "WHAT WOULD YOU TALK ABOUT? *"
              : "HOW DO YOU WANT TO HELP? *"}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${inputClass} resize-y`}
          placeholder={
            interest === "sponsor"
              ? "Tell us about your goals — recruiting, a challenge track, in-kind, a custom package…"
              : interest === "speak"
                ? "Track, topic, and a line about you or your team…"
                : "Availability, skills, and what you'd love to help run…"
          }
        />
      </div>

      {/* honeypot — hidden from users */}
      <div className="absolute left-[-9999px] top-[-9999px]" aria-hidden>
        <label htmlFor="company_url">Leave this field empty</label>
        <input id="company_url" name="company_url" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" ? (
        <p className="mt-5 border border-[#ff6b6b] px-4 py-3 text-[12px] leading-[1.6] text-[#ff9b9b]">{error}</p>
      ) : null}

      <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-[#c9f73b] px-8 py-4 text-[14px] font-bold tracking-[2px] text-[#0b0b0b] transition-colors hover:bg-[#f2f2ec] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "SENDING…" : "SEND TO ORGANIZERS →"}
        </button>
        <span className="text-[11px] leading-[1.7] tracking-[1px] text-[rgba(242,242,236,.45)]">
          GOES TO HACKKENTUCKY@KYCOMBINATOR.COM
        </span>
      </div>
    </form>
  )
}
