import Link from "next/link"
import { SPONSORS, TIER_ORDER, type Sponsor, type SponsorTier } from "@/lib/sponsors"

// Base logo height per tier, in px. Every logo in a tier is sized to the same
// visual area (about a 3:1 logo at this height), then clamped so very wide or
// very square marks stay in range.
const BASE: Record<SponsorTier, number> = {
  purple: 180,
  platinum: 100,
  chrome: 70,
  neon: 65,
  community: 30,
}

// Placeholder name text size per tier.
const NAME: Record<SponsorTier, string> = {
  purple: "text-[56px]",
  platinum: "text-[44px]",
  chrome: "text-[34px]",
  neon: "text-[26px]",
  community: "text-[20px]",
}

const GAP: Record<SponsorTier, string> = {
  purple: "gap-x-20 gap-y-10",
  platinum: "gap-x-20 gap-y-10",
  chrome: "gap-x-16 gap-y-10",
  neon: "gap-x-14 gap-y-8",
  community: "gap-x-12 gap-y-7",
}

function logoBox(tier: SponsorTier, ratio = 3) {
  const H = BASE[tier]
  const area = 3 * H * H
  let height = Math.sqrt(area / ratio)
  let width = height * ratio
  // Very wide wordmarks: cap width. Very square marks: cap height.
  if (width > 4.2 * H) {
    width = 4.2 * H
    height = width / ratio
  }
  if (height > 1.25 * H) {
    height = 1.25 * H
    width = height * ratio
  }
  return { width: Math.round(width), height: Math.round(height) }
}

function Logo({ sponsor, tier }: { sponsor: Sponsor; tier: SponsorTier }) {
  const box = logoBox(tier, sponsor.ratio)
  const scale = sponsor.scale ?? 1
  const inner = sponsor.logo ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={sponsor.logo}
      alt={sponsor.name}
      style={{
        width: Math.round(box.width * scale),
        height: Math.round(box.height * scale),
        transform: sponsor.shift ? `translateY(${sponsor.shift}px)` : undefined,
        opacity: sponsor.opacity,
        filter: sponsor.filter,
      }}
      className="block object-contain"
    />
  ) : (
    <span
      className={`block text-center font-[family-name:var(--font-hk-display)] font-bold leading-none tracking-[-0.5px] text-[rgba(242,242,236,.3)] ${NAME[tier]}`}
    >
      {sponsor.name}
    </span>
  )

  const className = "flex items-center opacity-90 transition-opacity hover:opacity-100"

  return sponsor.url ? (
    <a href={sponsor.url} target="_blank" rel="noreferrer" className={className} title={sponsor.name}>
      {inner}
    </a>
  ) : (
    <div className={className} title={sponsor.name}>
      {inner}
    </div>
  )
}

export function SponsorWall() {
  return (
    <div className="flex flex-col gap-14">
      {TIER_ORDER.map((tier) => {
        const list = SPONSORS[tier]
        if (!list.length) return null
        return (
          <div key={tier} className={`flex flex-wrap items-center justify-center ${GAP[tier]}`}>
            {list.map((s, i) => (
              <Logo key={`${tier}-${i}`} sponsor={s} tier={tier} />
            ))}
          </div>
        )
      })}

      <div className="flex flex-wrap items-center justify-center gap-4 border-t border-[rgba(242,242,236,.12)] pt-8">
        <Link
          href="/sponsor"
          className="inline-block bg-[#c9f73b] px-6 py-3 text-[13px] font-bold tracking-[1px] text-[#0b0b0b] transition-colors hover:bg-[#f2f2ec]"
        >
          BECOME A SPONSOR →
        </Link>
        <span className="text-[11px] uppercase tracking-[1px] text-[rgba(242,242,236,.45)]">
          Four tiers · cash or in-kind welcome
        </span>
      </div>
    </div>
  )
}
