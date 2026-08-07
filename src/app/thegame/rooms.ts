import type { SpriteName } from "./sprites"

export interface Exit {
  x: number
  y: number
  to: string
  sx: number
  sy: number
  label?: string
  dir?: "up" | "down" | "left" | "right"
}
export interface NpcSpawn {
  id: string
  x: number
  y: number
  /** only appears once the quest has reached this step index (default 0) */
  fromStep?: number
}
export interface BoothSpawn {
  id: string // bounty id
  x: number
  y: number
}
export interface Room {
  id: string
  ground: string[]
  over: string[]
  lights: [number, number][]
  exits: Exit[]
  npcs: NpcSpawn[]
  booths?: BoothSpawn[]
  /** buffet tiles that only appear "the next morning" (entry) */
  buffet?: [number, number][]
}

// ground char -> floor tile
export function floorTile(ch: string): SpriteName {
  switch (ch) {
    case "s":
      return "stepTop"
    case "r":
      return "rug"
    case "k":
      return "stage"
    case "w":
      return "wood"
    default:
      return "concrete"
  }
}

// over char -> object sprite (or null)
export function overSprite(ch: string): SpriteName | null {
  switch (ch) {
    case "Y":
      return "chairY"
    case "C":
      return "chairW"
    case "u":
      return "stump"
    case "T":
      return "table"
    case "U":
      return "couch"
    case "D":
      return "deskTop"
    case "G":
      return "glass"
    case "P":
      return "plant"
    case "B":
      return "bean"
    case "p":
      return "printer"
    case "g":
      return "swag"
    case "H":
      return "speaker"
    default:
      return null
  }
}

const SOLID = new Set(["Y", "C", "u", "T", "U", "D", "G", "P", "p", "g", "H"])
export function overSolid(ch: string): boolean {
  return SOLID.has(ch)
}

export const ROOMS: Record<string, Room> = {
  entry: {
    id: "entry",
    ground: [
      "cccccccccccccccc",
      "cccccccccccccccc",
      "cccccccccccccccc",
      "cccccccccccccccc",
      "crrrccccccrrrccc",
      "crrrccccccrrrccc",
      "crrrccccccrrrccc",
      "cccccccccccccccc",
      "cccccccccccccccc",
      "cccccccccccccccc",
      "cccccccccccccccc",
      "cccccccccccccccc",
      "cccccccccccccccc",
      "cccccccccccccccc",
    ],
    over: [
      "GGGGGGG..GGGGGGG",
      "P.............P.",
      ".YTY.......YTY..",
      "................",
      ".UU......gg.....",
      ".UU............",
      ".uu.......CC....",
      "................",
      "...YTY....YTY...",
      "................",
      "....DDD.........",
      "................",
      "P.............P.",
      "................",
    ].map((r) => r.padEnd(16, ".")),
    lights: [
      [3, 2],
      [8, 2],
      [13, 2],
      [5, 7],
      [11, 7],
      [8, 11],
    ],
    exits: [
      { x: 7, y: 0, to: "stadium", sx: 8, sy: 12, label: "STADIUM", dir: "up" },
      { x: 8, y: 0, to: "stadium", sx: 8, sy: 12, dir: "up" },
    ],
    npcs: [
      { id: "ada", x: 3, y: 3 },
      { id: "boone", x: 12, y: 3 },
      { id: "cyra", x: 4, y: 9 },
      { id: "dex", x: 11, y: 9 },
      { id: "rover", x: 2, y: 11, fromStep: 1 },
      // breakfast crowd — shows up the next morning
      { id: "eater1", x: 12, y: 6, fromStep: 3 },
      { id: "eater2", x: 4, y: 6, fromStep: 3 },
    ],
    // laid out only after the sleep cutscene (see morning flag in Game.tsx)
    buffet: [
      [6, 5],
      [7, 5],
      [8, 5],
      [9, 5],
    ],
  },

  stadium: {
    id: "stadium",
    ground: [
      "kkkkkkkkkkkkkkkk",
      "kkkkkkkkkkkkkkkk",
      "ssssssssssssssss",
      "ssssssssssssssss",
      "ssssssssssssssss",
      "ssssssssssssssss",
      "ssssssssssssssss",
      "ssssssssssssssss",
      "ssssssssssssssss",
      "ssssssssssssssss",
      "cccccccccccccccc",
      "cccccccccccccccc",
      "cccccccccccccccc",
      "cccccccccccccccc",
    ],
    over: [
      "...H........H...",
      "................",
      "..B..B......B.B.",
      "................",
      "....B......B....",
      "................",
      "..B.......B..B..",
      "................",
      ".....B...B......",
      "................",
      "................",
      "......Y.Y.......",
      "................",
      "................",
    ],
    lights: [],
    exits: [
      { x: 7, y: 13, to: "entry", sx: 8, sy: 1, label: "ENTRY", dir: "down" },
      { x: 8, y: 13, to: "entry", sx: 8, sy: 1, dir: "down" },
      { x: 7, y: 0, to: "floor2", sx: 8, sy: 12, label: "2ND FLOOR", dir: "up" },
      { x: 8, y: 0, to: "floor2", sx: 8, sy: 12, dir: "up" },
    ],
    npcs: [
      { id: "mc", x: 9, y: 0 },
      // judges + crowd fill the stage for the presentation phase
      { id: "judgeA", x: 5, y: 0, fromStep: 5 },
      { id: "judgeB", x: 10, y: 0, fromStep: 5 },
      { id: "fan1", x: 2, y: 3, fromStep: 5 },
      { id: "fan2", x: 13, y: 5, fromStep: 5 },
      { id: "fan3", x: 4, y: 9, fromStep: 5 },
    ],
    booths: [
      { id: "axiom", x: 2, y: 13 },
      { id: "neon", x: 5, y: 13 },
      { id: "volt", x: 13, y: 13 },
    ],
  },

  floor2: {
    id: "floor2",
    ground: [
      "cccccccccccccccc",
      "cccccccccccccccc",
      "cccccccccccccccc",
      "cccccccccccccccc",
      "crrrccccccrrrccc",
      "crrrccccccrrrccc",
      "crrrccccccrrrccc",
      "cccccccccccccccc",
      "cccccccccccccccc",
      "cccccccccccccccc",
      "cccccccccccccccc",
      "cccccccccccccccc",
      "cccccccccccccccc",
      "cccccccccccccccc",
    ],
    over: [
      "DDDDDDDD....PP..",
      "................",
      ".YTY.......uCu..",
      "................",
      ".UU.......UU....",
      ".UU..C....UU.C..",
      ".uu.......uu....",
      "................",
      "...YTY....YTY...",
      "................",
      "P.............P.",
      "................",
      "................",
      "................",
    ].map((r) => r.padEnd(16, ".")),
    lights: [
      [3, 2],
      [8, 2],
      [13, 2],
      [5, 8],
      [11, 8],
    ],
    exits: [
      { x: 7, y: 13, to: "stadium", sx: 8, sy: 2, label: "STADIUM", dir: "down" },
      { x: 8, y: 13, to: "stadium", sx: 8, sy: 2, dir: "down" },
    ],
    npcs: [
      { id: "vale", x: 4, y: 10 },
      { id: "snooze", x: 11, y: 5 },
    ],
  },
}
