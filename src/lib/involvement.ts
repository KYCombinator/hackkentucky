// Single source of truth for the four "get involved" tracks. Shared by the
// client forms (src/components/involvement-form.tsx) and the API route
// (src/app/api/involve/route.ts) so field keys/labels/required never drift.

export type Track = "sponsor" | "bounty" | "speak" | "volunteer"

export const TRACK_KEYS: Track[] = ["sponsor", "bounty", "speak", "volunteer"]

export interface FieldDef {
  key: string
  label: string
  type: "text" | "email" | "url" | "textarea" | "select" | "file"
  required?: boolean
  placeholder?: string
  options?: string[]
  half?: boolean // render half-width on wide screens
}

const LOGO_FIELD: FieldDef = { key: "logo", label: "Logo", type: "file" }

export interface TrackDef {
  key: Track
  label: string // SPONSOR
  glyph: string // small icon-ish marker
  card: string // homepage card blurb
  note: string // section eyebrow
  blurb: string // section intro paragraph
  cta: string // submit button label
  fields: FieldDef[]
}

const NAME: FieldDef = { key: "name", label: "Name", type: "text", required: true, placeholder: "Jane Builder", half: true }
const EMAIL: FieldDef = { key: "email", label: "Email", type: "email", required: true, placeholder: "jane@email.com", half: true }

export const TRACKS: Record<Track, TrackDef> = {
  sponsor: {
    key: "sponsor",
    label: "SPONSOR",
    glyph: "◆",
    card: "Fund the weekend — food, prizes, free entry. Get a table, speaking slots, and the room.",
    note: "FUND THE BUILD",
    blurb: "Back HackKentucky × HackTheTrack and put your brand in front of 300+ builders. Pick a tier or bring a custom package — cash or in-kind.",
    cta: "SEND SPONSOR INQUIRY →",
    fields: [
      NAME,
      EMAIL,
      { key: "organization", label: "Organization", type: "text", required: true, placeholder: "Company / school / team", half: true },
      {
        key: "tier",
        label: "Tier of interest",
        type: "select",
        half: true,
        options: ["Not sure yet", "Community — Free", "Neon — $100", "Chrome — $500", "Purple — $10,000", "Custom package"],
      },
      { key: "budget", label: "Budget / range", type: "text", placeholder: "Optional", half: true },
      {
        key: "message",
        label: "What are you thinking?",
        type: "textarea",
        required: true,
        placeholder: "Goals — recruiting, a challenge track, in-kind, a custom package…",
      },
      LOGO_FIELD,
    ],
  },
  bounty: {
    key: "bounty",
    label: "BOUNTY",
    glyph: "⧫",
    card: "Post a problem + prize. Builders attack it all weekend; you pay the team that wins it.",
    note: "SET THE CHALLENGE",
    blurb: "A bounty is a scoped problem with a prize. You write the challenge, set the prize ($500 min), judge it, and pay the winning team directly.",
    cta: "SEND BOUNTY IDEA →",
    fields: [
      NAME,
      EMAIL,
      { key: "organization", label: "Organization", type: "text", required: true, placeholder: "Company / team", half: true },
      { key: "prize", label: "Prize amount", type: "text", placeholder: "$500 minimum", half: true },
      {
        key: "challenge",
        label: "The challenge",
        type: "textarea",
        required: true,
        placeholder: "The problem, API, dataset, or workflow — and what 'done' looks like.",
      },
      { key: "message", label: "Anything else", type: "textarea", placeholder: "Optional" },
      LOGO_FIELD,
    ],
  },
  speak: {
    key: "speak",
    label: "SPEAK",
    glyph: "▲",
    card: "Lead a Friday Learn-a-thon track or a Saturday talk. Teach a room that wants to be there.",
    note: "TEACH THE ROOM",
    blurb: "Run a 35-minute Friday Learn-a-thon session or a Saturday guest talk. Tell us the track and topic and a little about you.",
    cta: "PITCH A TALK →",
    fields: [
      NAME,
      EMAIL,
      { key: "organization", label: "Company / affiliation", type: "text", placeholder: "Where you're from", half: true },
      {
        key: "track",
        label: "Track",
        type: "select",
        required: true,
        half: true,
        options: [
          "Learn-a-thon: Software",
          "Learn-a-thon: Startups",
          "Learn-a-thon: Hardware",
          "Learn-a-thon: Sustainable Fashion",
          "Learn-a-thon: AI",
          "Saturday: Career track",
          "Saturday: Startup track",
        ],
      },
      { key: "topic", label: "Talk / session topic", type: "text", required: true, placeholder: "What you'd cover" },
      { key: "bio", label: "Short bio", type: "textarea", required: true, placeholder: "You or your team, and why this talk." },
    ],
  },
  volunteer: {
    key: "volunteer",
    label: "VOLUNTEER",
    glyph: "✦",
    card: "Help run the weekend on-site — check-in, food, mentoring, judging support, teardown.",
    note: "RUN THE WEEKEND",
    blurb: "Volunteers make the event happen — check-in, food, mentoring, and keeping the floor moving. Tell us when you're free and what you're good at.",
    cta: "SIGN ME UP →",
    fields: [
      NAME,
      EMAIL,
      { key: "availability", label: "Availability", type: "select", required: true, half: true, options: ["Friday", "Saturday", "Both days"] },
      { key: "skills", label: "Skills / interests", type: "text", placeholder: "e.g. mentoring, logistics, photography", half: true },
      { key: "message", label: "How do you want to help?", type: "textarea", placeholder: "Optional" },
    ],
  },
}

export function trackLabel(track: Track): string {
  return TRACKS[track]?.label ?? track
}
