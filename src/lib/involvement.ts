// Single source of truth for the four "get involved" tracks. Shared by the
// homepage cards and the /get-involved page. Intake itself runs through the
// KY Combinator form embeds, so there are no form fields here.

export type Track = "sponsor" | "bounty" | "speak" | "volunteer"

export const TRACK_KEYS: Track[] = ["sponsor", "bounty", "speak", "volunteer"]

export interface TrackDef {
  key: Track
  label: string // SPONSOR
  glyph: string // small icon-ish marker
  card: string // homepage card blurb
  note: string // section eyebrow
}

export const TRACKS: Record<Track, TrackDef> = {
  sponsor: {
    key: "sponsor",
    label: "SPONSOR",
    glyph: "◆",
    card: "Fund the weekend — food, prizes, free entry. Get a table, speaking slots, and the room.",
    note: "FUND THE BUILD",
  },
  bounty: {
    key: "bounty",
    label: "BOUNTY",
    glyph: "⧫",
    card: "Post a problem + prize. Builders attack it all weekend; you pay the team that wins it.",
    note: "SET THE CHALLENGE",
  },
  speak: {
    key: "speak",
    label: "SPEAK",
    glyph: "▲",
    card: "Lead a Friday Learn-a-thon track or a Saturday talk. Teach a room that wants to be there.",
    note: "TEACH THE ROOM",
  },
  volunteer: {
    key: "volunteer",
    label: "VOLUNTEER",
    glyph: "✦",
    card: "Help run the weekend on-site — check-in, food, mentoring, judging support, teardown.",
    note: "RUN THE WEEKEND",
  },
}
