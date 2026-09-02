// Fall 2026 sponsors, grouped by tier. Tier = how much they put in; the
// bigger the tier, the bigger the logo. Amounts and tier names stay out of
// the UI. Entries without a `logo` render as dim name text until the file
// lands in /public/sponsors-2026.
//
// `ratio` is the logo's width ÷ height. The wall uses it to give every logo in
// a tier the same visual mass, so a wide wordmark and a square mark read as
// equals instead of the wordmark dwarfing everything.

export type SponsorTier = "purple" | "platinum" | "chrome" | "neon" | "community"

export interface Sponsor {
  name: string
  url?: string
  logo?: string // path under /public, e.g. "/sponsors-2026/acme.svg"
  ratio?: number // width / height of the logo artwork

  // Per-logo tuning. Start with the tier default, then nudge until the row
  // reads as one family.
  scale?: number // size multiplier on top of the tier size (1 = as computed, 1.2 = 20% bigger)
  shift?: number // vertical nudge in px (+ moves down) for marks whose optical center sits off
  opacity?: number // 0–1, to dim a heavy or very bright mark so it sits with the others
  filter?: string // any CSS filter, e.g. "grayscale(1) brightness(1.6)" or "invert(1)"
}

export const TIER_ORDER: SponsorTier[] = ["purple", "platinum", "chrome", "neon", "community"]

export const SPONSORS: Record<SponsorTier, Sponsor[]> = {
  // Title sponsor — one only.
  purple: [{ name: "JPMorgan", logo: "/sponsors-2026/jpmorgan.png", ratio: 690 / 180 }],
  // Second tier — above chrome, below the title sponsor.
  platinum: [
    { name: "Anthropic", logo: "/sponsors-2026/anthropic.svg", ratio: 590 / 78 },
    { name: "Humana", logo: "/sponsors-2026/humana.svg", ratio: 1580 / 246 },
    { name: "Citation Labs", logo: "/sponsors-2026/citation-labs.svg", ratio: 198 / 189 },
    { name: "Amplify Startups", logo: "/sponsors-2026/amplify-startups.png", ratio: 528 / 237 },
  ],
  chrome: [
    { name: "Louisville Bats", logo: "/sponsors-2026/louisville-bats.svg", ratio: 1 },
    { name: "LouCity & Racing Foundations", logo: "/sponsors-2026/loucity-racing.png", ratio: 1000 / 190 },
    { name: "Swell", logo: "/sponsors-2026/swell.svg", ratio: 196 / 70 },
    { name: "PayFWDs", logo: "/sponsors-2026/payfwds.svg", ratio: 225 / 84, filter: "brightness(0) invert(1)" },
    { name: "Loudega", logo: "/sponsors-2026/loudega.svg", ratio: 929 / 920 },
    { name: "Due Gooder", logo: "/sponsors-2026/due-gooder.png", ratio: 793 / 246 },
    { name: "Kyndly", logo: "/sponsors-2026/kyndly.png", ratio: 384 / 108 },
    { name: "STAATY", logo: "/sponsors-2026/staaty.png", ratio: 3300 / 2253, filter: "brightness(1.6)" },
    { name: "Super", logo: "/sponsors-2026/super.png", ratio: 1024 / 252 },
    { name: "Vsimple", logo: "/sponsors-2026/vsimple.svg", ratio: 128.551 / 32 },
    { name: "Prologue", logo: "/sponsors-2026/prologue.png", ratio: 500 / 87 },
  ],
  neon: [
    { name: "Churchill Downs", logo: "/sponsors-2026/churchill-downs.svg", ratio: 58.886 / 13.868 },
    { name: "Slingshot", logo: "/sponsors-2026/slingshot.svg", ratio: 1 },
    {
      name: "Community Foundation Louisville",
      logo: "/sponsors-2026/community-foundation.png",
      ratio: 2048 / 479,
      filter: "brightness(0) invert(1)",
    },
  ],
  community: [
    { name: "Papa Johns", logo: "/sponsors-2026/papa-johns.svg", ratio: 198 / 90 },
    { name: "Texas Roadhouse", logo: "/sponsors-2026/texas-roadhouse.svg", ratio: 250 / 136 },
    { name: "Mashup Food Hall", logo: "/sponsors-2026/mashup.svg", ratio: 1130 / 140, scale: 1.3 },
    { name: "Genuine Work", logo: "/sponsors-2026/genuine-works.png", ratio: 271 / 32, scale: 1.3 },
  ],
}
