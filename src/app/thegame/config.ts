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
    lines: ["Volunteer crew, at your service.", "Terminals are free. Coffee's downstairs. Go build."],
  },
  snooze: {
    id: "snooze",
    name: "SLEEPING HACKER",
    sprite: "npc3",
    lines: ["...five more minutes...", "zzz... deployed to prod... zzz"],
  },
}

export interface QuestStep {
  id: string
  title: string
  objective: string
}

export const QUEST: QuestStep[] = [
  { id: "team", title: "FIND A TEAM", objective: "Recruit 2 hackers in the Entry Way. (Walk up and press Z / tap A.)" },
  { id: "bounty", title: "FIND A BOUNTY", objective: "Head up to the Stadium Seating and pick a sponsor bounty." },
  { id: "build", title: "BUILD", objective: "Take the steps up to the 2nd Floor and build your project." },
  { id: "food", title: "REFUEL", objective: "Grab food before judging." },
  { id: "judge", title: "PRESENT", objective: "Present to the judges on the main stage." },
  { id: "done", title: "SHIPPED", objective: "You did it. Registration opens soon." },
]

export const ROOM_NAMES: Record<string, string> = {
  entry: "ENTRY WAY",
  stadium: "STADIUM SEATING",
  floor2: "2ND FLOOR",
}

export const TEAM_GOAL = 2
