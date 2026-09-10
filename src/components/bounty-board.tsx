import { SectionHead } from "@/components/fall26-shell"
import { BOUNTIES } from "@/lib/bounties"

export function BountyBoard() {
  return (
    <section id="challenges" className="scroll-mt-6 border-b border-[rgba(201,247,59,.22)] px-5 py-16 sm:px-9">
      <SectionHead title="PICK YOUR CHALLENGE" note={`${BOUNTIES.length} BOUNTIES · FALL 2026`} />
      <p className="mb-10 max-w-[680px] text-[13px] leading-[1.8] text-[rgba(242,242,236,.65)]">
        Real problems from the people who need them solved. Find a brief that grabs you, explore what to build,
        and see what the sponsor is putting on the table.
      </p>

      <div className="grid grid-cols-1 items-start gap-5 xl:grid-cols-2">
        {BOUNTIES.map((bounty, index) => (
          <article
            key={bounty.id}
            id={bounty.id}
            aria-labelledby={`${bounty.id}-title`}
            className="min-w-0 scroll-mt-6 border border-[rgba(201,247,59,.3)] bg-[rgba(201,247,59,.025)] target:border-[#c9f73b]"
          >
            <div className="p-6 sm:p-7">
              <div className="mb-6 flex items-start justify-between gap-4">
                <span className="text-[11px] leading-[1.6] tracking-[1px] text-[#c9f73b]">{bounty.category}</span>
                <span aria-hidden="true" className="text-[12px] text-[rgba(201,247,59,.5)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="mb-3 text-[12px] font-bold uppercase tracking-[1px] text-[rgba(242,242,236,.65)]">
                {bounty.organization}
              </p>
              <h3 id={`${bounty.id}-title`} className="font-[family-name:var(--font-hk-display)] text-[30px] font-bold leading-[1.1] tracking-[-1px] text-[#f2f2ec] sm:text-[34px]">
                <a href={`#${bounty.id}`} className="transition-colors hover:text-[#c9f73b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9f73b]">
                  {bounty.title}
                </a>
              </h3>
              <p className="mt-5 text-[13px] leading-[1.8] text-[rgba(242,242,236,.7)]">{bounty.challenge}</p>
              <div className="mt-6 border-l-2 border-[#c9f73b] pl-4">
                <p className="text-[10px] font-bold tracking-[2px] text-[rgba(242,242,236,.55)]">THE REWARD</p>
                <p className="mt-2 text-[16px] font-bold leading-[1.5] text-[#c9f73b]">{bounty.reward}</p>
                {bounty.rewardNote && (
                  <p className="mt-2 text-[12px] leading-[1.7] text-[rgba(242,242,236,.65)]">{bounty.rewardNote}</p>
                )}
              </div>
            </div>

            <details className="group border-t border-[rgba(201,247,59,.22)]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-6 py-5 text-[12px] font-bold tracking-[1px] text-[#c9f73b] transition-colors hover:bg-[rgba(201,247,59,.08)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#c9f73b] sm:px-7 [&::-webkit-details-marker]:hidden">
                <span>READ THE BRIEF<span className="sr-only">: {bounty.organization}</span></span>
                <span aria-hidden="true" className="text-[20px] leading-none transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="space-y-6 px-6 pb-7 text-[13px] leading-[1.8] text-[rgba(242,242,236,.7)] sm:px-7">
                <div>
                  <h4 className="mb-3 text-[11px] font-bold tracking-[2px] text-[#f2f2ec]">WHAT TO BUILD</h4>
                  <ul className="list-disc space-y-3 pl-5 marker:text-[#c9f73b]">
                    {bounty.deliverables.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
                {bounty.stretch && (
                  <div>
                    <h4 className="mb-2 text-[11px] font-bold tracking-[2px] text-[#c9f73b]">STRETCH GOAL</h4>
                    <p>{bounty.stretch}</p>
                  </div>
                )}
                <div>
                  <h4 className="mb-2 text-[11px] font-bold tracking-[2px] text-[#f2f2ec]">GOOD TO KNOW</h4>
                  <p>{bounty.support}</p>
                </div>
                <p className="border-t border-[rgba(242,242,236,.12)] pt-4 text-[12px]">
                  <span className="text-[rgba(242,242,236,.5)]">FROM THE SPONSOR</span><br />
                  {bounty.contact} · {bounty.organization}
                </p>
              </div>
            </details>
          </article>
        ))}
      </div>
    </section>
  )
}
