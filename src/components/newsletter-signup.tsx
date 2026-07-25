"use client"

// KY Combinator newsletter (Beehiiv). The hosted subscribe page accepts an
// `email` query param and pre-fills it, so a plain GET form is enough — no
// embed UUID or API key required. Swap in the inline Beehiiv embed here later
// if we want the no-redirect experience.
export const BEEHIIV_SUBSCRIBE_URL = "https://kycombinator.beehiiv.com/subscribe"

export function NewsletterSignup({
  heading = "STAY IN THE LOOP",
  blurb = "Get KY Combinator's newsletter — events, resources, and what's next for the Louisville build scene.",
}: {
  heading?: string
  blurb?: string
}) {
  return (
    <div className="border border-[rgba(242,242,236,.12)] p-6 sm:p-9">
      <div className="mb-4 text-[11px] font-bold tracking-[3px] text-[#c9f73b]">▚ {heading}</div>
      <p className="mb-6 max-w-[520px] text-[13px] leading-[1.8] text-[rgba(242,242,236,.6)]">{blurb}</p>
      <form
        action={BEEHIIV_SUBSCRIBE_URL}
        method="get"
        target="_blank"
        rel="noreferrer"
        className="flex flex-col gap-3 sm:flex-row"
      >
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="you@email.com"
          className="w-full border border-[rgba(242,242,236,.2)] bg-[#0b0b0b] px-4 py-3 text-[14px] text-[#f2f2ec] outline-none transition-colors placeholder:text-[rgba(242,242,236,.35)] focus:border-[#c9f73b] sm:max-w-[340px]"
        />
        <button
          type="submit"
          className="whitespace-nowrap bg-[#c9f73b] px-7 py-3 text-[13px] font-bold tracking-[1px] text-[#0b0b0b] transition-colors hover:bg-[#f2f2ec]"
        >
          SUBSCRIBE →
        </button>
      </form>
    </div>
  )
}
