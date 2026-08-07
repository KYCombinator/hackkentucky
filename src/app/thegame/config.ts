// All game strings live here so they can be swapped without touching engine code.

export type Track = "FRONTEND" | "BACKEND" | "DESIGN" | "HARDWARE"
export type NpcSprite = "npc0" | "npc1" | "npc2" | "npc3"

export interface NpcDef {
  id: string
  name: string
  sprite: NpcSprite
  specialty?: Track
  /** short chatter shown before the recruit prompt (or on repeat talks) */
  lines: string[]
  /** if true, talking offers a "recruit" choice that adds them to your team */
  recruitable?: boolean
}

export const NPCS: Record<string, NpcDef> = {
  ada: {
    id: "ada",
    name: "ADA",
    sprite: "npc0",
    specialty: "FRONTEND",
    lines: ["I make pixels behave.", "Solo so far. Two of us could actually ship something."],
    recruitable: true,
  },
  boone: {
    id: "boone",
    name: "BOONE",
    sprite: "npc1",
    specialty: "BACKEND",
    lines: ["APIs, queues, the boring stuff that works.", "Point me at a backend and I go quiet for 24 hours."],
    recruitable: true,
  },
  cyra: {
    id: "cyra",
    name: "CYRA",
    sprite: "npc2",
    specialty: "DESIGN",
    lines: ["If the demo looks good, the demo is good.", "I do design. Judges eat with their eyes."],
    recruitable: true,
  },
  dex: {
    id: "dex",
    name: "DEX",
    sprite: "npc3",
    specialty: "HARDWARE",
    lines: ["I brought a soldering iron. And snacks.", "Hardware hacks win rooms. Want a fourth... er, second?"],
    recruitable: true,
  },
  mc: {
    id: "mc",
    name: "MC",
    sprite: "npc1",
    lines: ["Welcome to the main stage! Judging happens right here.", "Grab a bounty from the booths before you build."],
  },
  vale: {
    id: "vale",
    name: "VALE",
    sprite: "npc2",
    lines: ["Volunteer crew, at your service.", "Grab a seat at any table and start building. Coffee's downstairs."],
  },
  snooze: {
    id: "snooze",
    name: "SLEEPING HACKER",
    sprite: "npc3",
    lines: ["...five more minutes...", "zzz... deployed to prod... zzz"],
  },

  // ---- flavor crowd that fills in as the event progresses ----
  rover: {
    id: "rover",
    name: "ORGANIZER",
    sprite: "npc0",
    lines: ["Biggest turnout yet!", "Wi-Fi password's on the whiteboard. Go build something."],
  },
  eater1: {
    id: "eater1",
    name: "HACKER",
    sprite: "npc3",
    lines: ["These pancakes are elite.", "Coffee number four. Don't judge me."],
  },
  eater2: {
    id: "eater2",
    name: "HACKER",
    sprite: "npc1",
    lines: ["Breakfast fixes everything.", "Back to the grind right after this plate."],
  },
  judgeA: {
    id: "judgeA",
    name: "JUDGE",
    sprite: "npc1",
    lines: ["Originality scores highest.", "Show us something that actually works."],
  },
  judgeB: {
    id: "judgeB",
    name: "JUDGE",
    sprite: "npc3",
    lines: ["We read the README, promise.", "Impress us in ninety seconds."],
  },
  fan1: {
    id: "fan1",
    name: "SPECTATOR",
    sprite: "npc2",
    lines: ["Here for the demos!", "Go, go, go — you got this!"],
  },
  fan2: {
    id: "fan2",
    name: "SPECTATOR",
    sprite: "npc0",
    lines: ["That last pitch was wild.", "Who's presenting next?"],
  },
  fan3: {
    id: "fan3",
    name: "SPECTATOR",
    sprite: "npc3",
    lines: ["I live for hackathon energy.", "Free stickers up front, by the way."],
  },
}

export interface QuestStep {
  id: string
  title: string
  objective: string
}

export const QUEST: QuestStep[] = [
  { id: "team", title: "FIND A TEAM", objective: "Recruit 2 hackers in the Entry Way. (Walk up + Z, or double-tap.)" },
  { id: "bounty", title: "FIND A BOUNTY", objective: "Head up to the Stadium Seating and pick a sponsor bounty." },
  { id: "build", title: "BUILD", objective: "Up to the 2nd Floor — find a table and get to work." },
  { id: "refuel", title: "REFUEL", objective: "Morning! Grab breakfast at the buffet in the Entry Way." },
  { id: "build2", title: "KEEP BUILDING", objective: "Back to a table on the 2nd Floor — finish and ship it." },
  { id: "present", title: "PRESENT", objective: "Head to the Stadium stage — talk to the MC to present." },
  { id: "done", title: "SHIPPED", objective: "🏆 First place. Registration opens soon at hackkentucky.com." },
]

// Cutscene / interaction copy — kept here so the engine stays string-free.
export const SCENE = {
  codeFirst: [
    "You flip open the laptop and get to work.",
    "Commits fly, coffee drains, the build takes shape...",
  ],
  sleepy: [
    "You look up — your whole team is face-down on their keyboards.",
    "It's been a long day. Time to head home and get some sleep.",
  ],
  morning: "THE NEXT MORNING",
  buffet: [
    "A full breakfast buffet is laid out in the Entry Way.",
    "You refuel. The team's back, caffeinated, and ready to build.",
  ],
  codeSecond: ["Final push. You wire up the last feature and squash the last bug.", "It works. Ship it — time to present."],
  presentIntro: [
    "The judges are seated. Deep breath.",
    "Land the timing bar in the green zone 3 times to nail your pitch.",
  ],
  table: {
    early: ["A free table. You'll want a team and a bounty before you sit down to build."],
    idle: ["Nice table. Nothing to build right now."],
  },
  buffetFull: ["You're stuffed. Back to building!"],
  valeBuild: ["Grab a seat at any table and get to work.", "Harder bounties are a tougher build — pace yourself."],
} as const

// How hard the mini-games play, driven by the bounty you pick.
// EASY = VOLTCACHE, MEDIUM = NEON FOUNDRY, HARD = AXIOM DYNAMICS.
export const DIFFICULTY: Record<"EASY" | "MEDIUM" | "HARD", { drain: number; tolerance: number; speed: number }> = {
  EASY: { drain: 4.5, tolerance: 0.15, speed: 0.7 },
  MEDIUM: { drain: 7, tolerance: 0.11, speed: 0.9 },
  HARD: { drain: 10, tolerance: 0.085, speed: 1.15 },
}

export const MC_LINES: Record<string, string[]> = {
  before: ["Welcome to the main stage! Judging happens right here.", "Grab a bounty from the booths, then go build."],
  ready: ["Doors are closing — are you ready to present?", "Talk to me when you're set and we'll get you on stage."],
}

export interface BountyDef {
  id: string
  sponsor: string
  title: string
  pitch: string
  difficulty: "EASY" | "MEDIUM" | "HARD"
}

export const BOUNTIES: BountyDef[] = [
  {
    id: "axiom",
    sponsor: "AXIOM DYNAMICS",
    title: "Realtime anomaly flag",
    pitch: "Flag anomalies in our live sales stream in under 200ms. We score it against a holdout set.",
    difficulty: "HARD",
  },
  {
    id: "neon",
    sponsor: "NEON FOUNDRY",
    title: "One-click ticket triage",
    pitch: "Auto-classify our support tickets into 8 buckets, with a dashboard to approve or reject each.",
    difficulty: "MEDIUM",
  },
  {
    id: "volt",
    sponsor: "VOLTCACHE",
    title: "Edge cache visualizer",
    pitch: "Show cache hit/miss across regions, live. Make it pretty enough to demo.",
    difficulty: "EASY",
  },
]

export const ROOM_NAMES: Record<string, string> = {
  entry: "ENTRY WAY",
  stadium: "STADIUM SEATING",
  floor2: "2ND FLOOR",
}

export const TEAM_GOAL = 2
