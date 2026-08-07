// All art is original, drawn as code. Cozy top-down farm palette (Stardew-ish
// vibe, not Stardew assets). 16px tiles, ~20 colors shared across everything.

export const TILE = 16

const C: Record<string, string> = {
  ".": "transparent",
  g: "#6ab04c", // grass mid
  G: "#7ec850", // grass light
  h: "#4f9440", // grass dark blade
  d: "#caa06a", // dirt light
  D: "#a97b47", // dirt mid
  m: "#8a5f34", // dirt dark
  w: "#4aa6dc", // water
  W: "#357fb8", // water shadow
  x: "#9bd8f4", // water highlight
  t: "#7b4a26", // trunk
  T: "#5c3518", // trunk dark
  l: "#5bbf4a", // leaves light
  L: "#3f9738", // leaves dark
  r: "#ff6d8a", // flower petal
  y: "#ffd23f", // flower center
  s: "#f2c79c", // skin
  a: "#5b3d22", // hair
  b: "#4a86c5", // shirt
  n: "#39507a", // pants
  e: "#2a2233", // outline / eyes
}

// Prop + character sprites as 16×16 char grids (transparent bg where ".").
const SPR: Record<string, string[]> = {
  tree: [
    "......llll......",
    ".....lLLLl......",
    "....lLLLLLl.....",
    "...lLLLLLLLl....",
    "..lLLLLLLLLLl...",
    "..lLLLLLLLLLl...",
    "..lLLLLLLLLLl...",
    "...lLLLLLLLl....",
    "....lLLLLLl.....",
    ".....lllll......",
    ".......tt.......",
    "......tTTt......",
    "......tTTt......",
    ".....hh..hh.....",
    "................",
    "................",
  ],
  flower: [
    "................",
    "................",
    "................",
    "................",
    "................",
    "................",
    "......r.r.......",
    ".....ryryr......",
    "......r.r.......",
    ".......h........",
    "................",
    "................",
    "................",
    "................",
    "................",
    "................",
  ],
  cdown: [
    "................",
    "................",
    ".....aaaaaa.....",
    "....aaaaaaaa....",
    "....assssssa....",
    "....asessesa....",
    "....asssssssa...",
    "....ssbbbbss....",
    "...sbbbbbbbbs...",
    "...sbbbbbbbbs...",
    "....bbbbbbbb....",
    "....nnn..nnn....",
    "....nnn..nnn....",
    "....ee....ee....",
    "................",
    "................",
  ],
  cup: [
    "................",
    "................",
    ".....aaaaaa.....",
    "....aaaaaaaa....",
    "....aaaaaaaa....",
    "....aaaaaaaa....",
    "....aaaaaaaa....",
    "....ssbbbbss....",
    "...sbbbbbbbbs...",
    "...sbbbbbbbbs...",
    "....bbbbbbbb....",
    "....nnn..nnn....",
    "....nnn..nnn....",
    "....ee....ee....",
    "................",
    "................",
  ],
  cside: [
    "................",
    "................",
    ".....aaaaa......",
    "....aaaaaaa.....",
    "...aaassss......",
    "...aaseess......",
    "...asssss.......",
    "...sbbbbbs......",
    "..sbbbbbbb......",
    "..sbbbbbb.......",
    "...bbbbbb.......",
    "...nnnnnn.......",
    "...nnn.nnn......",
    "...ee..ee.......",
    "................",
    "................",
  ],
}

// Column order in the baked atlas. Ground tiles are drawn procedurally.
export const ATLAS = ["grass", "path", "water0", "water1", "tree", "flower", "cdown", "cup", "cside"] as const
export type SpriteName = (typeof ATLAS)[number]

export function atlasIndex(name: SpriteName): number {
  return ATLAS.indexOf(name)
}

function px(ctx: CanvasRenderingContext2D, x: number, y: number, color: string) {
  if (color === "transparent") return
  ctx.fillStyle = color
  ctx.fillRect(x, y, 1, 1)
}

function drawGrid(ctx: CanvasRenderingContext2D, x0: number, grid: string[]) {
  for (let r = 0; r < grid.length; r++) {
    const row = grid[r]
    for (let c = 0; c < row.length; c++) px(ctx, x0 + c, r, C[row[c]] ?? "transparent")
  }
}

// Deterministic scatter — fixed coords so grass/dirt look textured but stable.
const GRASS_DARK = [
  [2, 3],
  [9, 2],
  [13, 6],
  [4, 9],
  [11, 11],
  [6, 13],
  [1, 7],
]
const GRASS_LIGHT = [
  [6, 1],
  [12, 4],
  [3, 6],
  [8, 8],
  [14, 10],
  [2, 12],
  [10, 14],
]
const DIRT_FLECK = [
  [3, 2],
  [10, 3],
  [6, 6],
  [13, 8],
  [2, 9],
  [8, 11],
  [12, 13],
  [5, 13],
]

export function buildAtlas(): HTMLCanvasElement {
  const cv = document.createElement("canvas")
  cv.width = ATLAS.length * TILE
  cv.height = TILE
  const ctx = cv.getContext("2d")!
  ctx.imageSmoothingEnabled = false

  const X = (name: SpriteName) => atlasIndex(name) * TILE

  // grass
  ctx.fillStyle = C.g
  ctx.fillRect(X("grass"), 0, TILE, TILE)
  for (const [x, y] of GRASS_DARK) px(ctx, X("grass") + x, y, C.h)
  for (const [x, y] of GRASS_LIGHT) px(ctx, X("grass") + x, y, C.G)

  // dirt path
  ctx.fillStyle = C.d
  ctx.fillRect(X("path"), 0, TILE, TILE)
  for (const [x, y] of DIRT_FLECK) px(ctx, X("path") + x, y, C.D)
  px(ctx, X("path") + 4, 5, C.m)
  px(ctx, X("path") + 11, 10, C.m)

  // water — two frames with shifted highlights for a gentle shimmer
  for (const frame of [0, 1] as const) {
    const x0 = X(frame === 0 ? "water0" : "water1")
    ctx.fillStyle = C.w
    ctx.fillRect(x0, 0, TILE, TILE)
    const off = frame === 0 ? 0 : 4
    for (let y = 2; y < TILE; y += 4) {
      for (let x = 0; x < TILE; x += 2) {
        px(ctx, x0 + ((x + off + y) % TILE), y, C.x)
        px(ctx, x0 + ((x + off + y + 5) % TILE), (y + 1) % TILE, C.W)
      }
    }
  }

  // char + props from grids
  drawGrid(ctx, X("tree"), SPR.tree)
  drawGrid(ctx, X("flower"), SPR.flower)
  drawGrid(ctx, X("cdown"), SPR.cdown)
  drawGrid(ctx, X("cup"), SPR.cup)
  drawGrid(ctx, X("cside"), SPR.cside)

  return cv
}

// ---- Room map: 16 wide × 14 tall. # tree, w water, d path, f flower, g grass.
export const ROOM: string[] = [
  "################",
  "#ggggggdggggggg#",
  "#ggfgggdggggggg#",
  "#ggggggdggwwwgg#",
  "#gfggggdggwwwgg#",
  "#ggggggdggwwwgg#",
  "#ggggggdgggggfg#",
  "#ggggggdggggggg#",
  "#ggggggdggfgggg#",
  "#ggggggddddgggg#",
  "#ggggggggggggg #".replace(" ", "g"),
  "#gfggggggggggg #".replace(" ", "g"),
  "#ggggggggggfgg #".replace(" ", "g"),
  "################",
]

export function isWalkable(ch: string): boolean {
  return ch !== "#" && ch !== "w"
}

export function groundOf(ch: string): SpriteName | "water" {
  if (ch === "d") return "path"
  if (ch === "w") return "water"
  return "grass"
}

export function propOf(ch: string): SpriteName | null {
  if (ch === "#") return "tree"
  if (ch === "f") return "flower"
  return null
}
