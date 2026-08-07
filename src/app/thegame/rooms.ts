import type { SpriteName } from "./sprites"

export interface Exit {
  x: number
  y: number
  to: string
  sx: number
  sy: number
}
export interface NpcSpawn {
  id: string
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
      { x: 7, y: 0, to: "stadium", sx: 8, sy: 12 },
      { x: 8, y: 0, to: "stadium", sx: 8, sy: 12 },
    ],
    npcs: [
      { id: "ada", x: 3, y: 3 },
      { id: "boone", x: 12, y: 3 },
      { id: "cyra", x: 4, y: 9 },
      { id: "dex", x: 11, y: 9 },
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
      { x: 7, y: 13, to: "entry", sx: 8, sy: 1 },
      { x: 8, y: 13, to: "entry", sx: 8, sy: 1 },
      { x: 7, y: 0, to: "floor2", sx: 8, sy: 12 },
      { x: 8, y: 0, to: "floor2", sx: 8, sy: 12 },
    ],
    npcs: [{ id: "mc", x: 9, y: 0 }],
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
      { x: 7, y: 13, to: "stadium", sx: 8, sy: 2 },
      { x: 8, y: 13, to: "stadium", sx: 8, sy: 2 },
    ],
    npcs: [
      { id: "vale", x: 4, y: 10 },
      { id: "snooze", x: 11, y: 5 },
    ],
  },
}
