// Original art, drawn as code. Skinned to the real venue (Genuine Works /
// Mashup Food Hall): polished concrete, globe pendant lights, wood tables +
// yellow chairs, teal couches, wooden stadium steps, green bean bags.

export const TILE = 16

const C: Record<string, string> = {
  ".": "transparent",
  c: "#616671", // concrete
  C: "#767b86", // concrete light
  v: "#494d57", // concrete seam
  y: "#ffcf33", // yellow
  Y: "#d9a520", // yellow dark
  w: "#b9814e", // wood
  W: "#8a5a30", // wood dark
  o: "#d3a56b", // wood light (step top)
  q: "#3f8f9e", // teal
  Q: "#2c6673", // teal dark
  r: "#6f8f3f", // green (rug / bean)
  R: "#52702c", // green dark
  b: "#93cfe0", // glass
  B: "#2c6673", // glass frame
  k: "#2a2d33", // stage / wall dark
  x: "#15171c", // near black
  p: "#4f9440", // plant
  P: "#356b2c", // plant dark
  m: "#9aa0aa", // metal light
  M: "#6b7079", // metal dark
  s: "#f2c79c", // skin
  a: "#5b3d22", // hair
  u: "#4a86c5", // shirt
  n: "#39507a", // pants
  e: "#2a2233", // outline
}

const SPR: Record<string, string[]> = {
  // furniture / props (transparent bg)
  chairY: [
    "................",
    "................",
    "....YYYYYYYY....",
    "...YyyyyyyyyY...",
    "...YyyyyyyyyY...",
    "...YyyyyyyyyY...",
    "...YyyyyyyyyY...",
    "...YyyyyyyyyY...",
    "...YyyyyyyyyY...",
    "....YYYYYYYY....",
    "................",
    "................",
    "................",
    "................",
    "................",
    "................",
  ],
  chairW: [
    "................",
    "................",
    "....CCCCCCCC....",
    "...CmmmmmmmmC...",
    "...CmmmmmmmmC...",
    "...CmmmmmmmmC...",
    "...CmmmmmmmmC...",
    "...CmmmmmmmmC...",
    "...CmmmmmmmmC...",
    "....CCCCCCCC....",
    "................",
    "................",
    "................",
    "................",
    "................",
    "................",
  ],
  stump: [
    "................",
    "................",
    "................",
    "................",
    ".....oooo.......",
    "....owwwwo......",
    "....owWWwo......",
    "....owwwwo......",
    ".....WWWW.......",
    "................",
    "................",
    "................",
    "................",
    "................",
    "................",
    "................",
  ],
  table: [
    "WWWWWWWWWWWWWWWW",
    "WooooooooooooooW",
    "WooooooooooooooW",
    "WooooooooooooooW",
    "WooooooooooooooW",
    "WooooooooooooooW",
    "WooooooooooooooW",
    "WooooooooooooooW",
    "WooooooooooooooW",
    "WooooooooooooooW",
    "WooooooooooooooW",
    "WooooooooooooooW",
    "WooooooooooooooW",
    "WooooooooooooooW",
    "WooooooooooooooW",
    "WWWWWWWWWWWWWWWW",
  ],
  couch: [
    "QQQQQQQQQQQQQQQQ",
    "QqqqqqqqqqqqqqqQ",
    "QqqqqqqqqqqqqqqQ",
    "QqqQqqqqQqqqqQqQ",
    "QqqqqqqqqqqqqqqQ",
    "QqqqqqqqqqqqqqqQ",
    "QqqqqqqqqqqqqqqQ",
    "QqqQqqqqQqqqqQqQ",
    "QqqqqqqqqqqqqqqQ",
    "QqqqqqqqqqqqqqqQ",
    "QQQQQQQQQQQQQQQQ",
    "................",
    "................",
    "................",
    "................",
    "................",
  ],
  deskTop: [
    "oooooooooooooooo",
    "oooooooooooooooo",
    "WWWWWWWWWWWWWWWW",
    "rrrrrrrrrrrrrrrr",
    "rRrrrrRrrrrRrrrr",
    "rrrrrrrrrrrrrrrr",
    "rRrrrrRrrrrRrrrr",
    "rrrrrrrrrrrrrrrr",
    "RRRRRRRRRRRRRRRR",
    "................",
    "................",
    "................",
    "................",
    "................",
    "................",
    "................",
  ],
  glass: [
    "BBBBBBBBBBBBBBBB",
    "BbbbbbbbbbbbbbbB",
    "BbCbbbbbbbbbbbbB",
    "BbbCbbbbbbbbbbbB",
    "BbbbbbbbbbCbbbbB",
    "BbbbbbbbbbbCbbbB",
    "BbbbbbbbbbbbbbbB",
    "BbbbbbbbbbbbbbbB",
    "BbbbbbbbbbbbbbbB",
    "BbbbbbbbbbbbbbbB",
    "BbbbbbbbbbbbbbbB",
    "BbbbbbbbbbbbbbbB",
    "BbbbbbbbbbbbbbbB",
    "BbbbbbbbbbbbbbbB",
    "BbbbbbbbbbbbbbbB",
    "BBBBBBBBBBBBBBBB",
  ],
  plant: [
    "................",
    ".....pppp.......",
    "....pPpppp......",
    "...ppppPppp.....",
    "...pPppppPp.....",
    "....ppppPp......",
    ".....pppp.......",
    "......pp........",
    ".....wwww.......",
    ".....wWWw.......",
    ".....wWWw.......",
    ".....WWWW.......",
    "................",
    "................",
    "................",
    "................",
  ],
  bean: [
    "................",
    "................",
    ".....rrrr.......",
    "....rrrrrr......",
    "...rrRrrrrr.....",
    "...rrrrrrrr.....",
    "...rrrrrrRr.....",
    "...rrrrrrrr.....",
    "....rrrrrr......",
    ".....RRRR.......",
    "................",
    "................",
    "................",
    "................",
    "................",
    "................",
  ],
  printer: [
    "................",
    "....mmmmmm......",
    "...mMMMMMMm.....",
    "...mMmmmmMm.....",
    "...mMMMMMMm.....",
    "...mxxxxxxm.....",
    "...mMMMMMMm.....",
    "....mmmmmm......",
    ".....MMMM.......",
    "................",
    "................",
    "................",
    "................",
    "................",
    "................",
    "................",
  ],
  swag: [
    "WWWWWWWWWWWWWWWW",
    "WooooooooooooooW",
    "WuuoyyoqqorroooW",
    "WuuoyyoqqorroooW",
    "WooooooooooooooW",
    "WooooooooooooooW",
    "WWWWWWWWWWWWWWWW",
    "................",
    "................",
    "................",
    "................",
    "................",
    "................",
    "................",
    "................",
    "................",
  ],
  speaker: [
    "..kkkkkkkkkkkk..",
    "..kMMMMMMMMMMk..",
    "..kMmmmmmmmMMk..",
    "..kMmxxxxmmMMk..",
    "..kMmxxxxmmMMk..",
    "..kMmmmmmmmMMk..",
    "..kMMMMMMMMMMk..",
    "..kMmmmmmmmMMk..",
    "..kMmxxxxmmMMk..",
    "..kMmxxxxmmMMk..",
    "..kMmmmmmmmMMk..",
    "..kMMMMMMMMMMk..",
    "..kkkkkkkkkkkk..",
    "................",
    "................",
    "................",
  ],
  booth: [
    ".kkkkkkkkkkkkkk.",
    ".kyYYYYYYYYYYyk.",
    ".kYqqqqqqqqqqYk.",
    ".kYqqqqqqqqqqYk.",
    ".kyYYYYYYYYYYyk.",
    ".kkkkkkkkkkkkkk.",
    "......WW........",
    "....WWWWWW......",
    "...WooooooooW...",
    "...WooooooooW...",
    "...WooooooooW...",
    "...WWWWWWWWWW...",
    "................",
    "................",
    "................",
    "................",
  ],
  terminal: [
    "................",
    "..MMMMMMMMMMMM..",
    "..MxxxxxxxxxxM..",
    "..MxppxxxxxpxM..",
    "..MxxxxppxxxxM..",
    "..MxpxxxxxxpxM..",
    "..MxxxpppxxxxM..",
    "..MxxxxxxxxxxM..",
    "..MMMMMMMMMMMM..",
    "......MMMM......",
    "....mMMMMMMm....",
    "...mMMMMMMMMm...",
    "................",
    "................",
    "................",
    "................",
  ],
  buffet: [
    "WWWWWWWWWWWWWWWW",
    "WooooooooooooooW",
    "WmYYqqrrssYYqrmW",
    "WmmmmmmmmmmmmmmW",
    "WooooooooooooooW",
    "WWWWWWWWWWWWWWWW",
    "................",
    "................",
    "................",
    "................",
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
    "....ssuuuuss....",
    "...suuuuuuuus...",
    "...suuuuuuuus...",
    "....uuuuuuuu....",
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
    "....ssuuuuss....",
    "...suuuuuuuus...",
    "...suuuuuuuus...",
    "....uuuuuuuu....",
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
    "...suuuuus......",
    "..suuuuuuu......",
    "..suuuuuu.......",
    "...uuuuuu.......",
    "...nnnnnn.......",
    "...nnn.nnn......",
    "...ee..ee.......",
    "................",
    "................",
  ],
}

export const ATLAS = [
  "concrete",
  "stepTop",
  "rug",
  "stage",
  "wood",
  "chairY",
  "chairW",
  "stump",
  "table",
  "couch",
  "deskTop",
  "glass",
  "plant",
  "bean",
  "printer",
  "swag",
  "speaker",
  "booth",
  "terminal",
  "buffet",
  "cdown",
  "cup",
  "cside",
  "npc0",
  "npc1",
  "npc2",
  "npc3",
] as const
export type SpriteName = (typeof ATLAS)[number]

// NPC shirt/hair tints — reuse the base character silhouette, recolored.
const NPC_TINTS: [shirt: string, shirtDark: string, hair: string][] = [
  ["#e0563f", "#b23f2c", "#2f2a26"], // red
  ["#8a5cd0", "#6b45a8", "#3a2f22"], // purple
  ["#3fae74", "#2e8a5a", "#4a3316"], // green
  ["#e0a020", "#b57e12", "#5b3d22"], // amber
]

export function atlasIndex(name: SpriteName): number {
  return ATLAS.indexOf(name)
}

function px(ctx: CanvasRenderingContext2D, x: number, y: number, color: string) {
  if (!color || color === "transparent") return
  ctx.fillStyle = color
  ctx.fillRect(x, y, 1, 1)
}

function drawGrid(ctx: CanvasRenderingContext2D, x0: number, grid: string[]) {
  for (let r = 0; r < grid.length; r++) {
    const row = grid[r]
    for (let c = 0; c < row.length; c++) px(ctx, x0 + c, r, C[row[c]] ?? "transparent")
  }
}

export function buildAtlas(): HTMLCanvasElement {
  const cv = document.createElement("canvas")
  cv.width = ATLAS.length * TILE
  cv.height = TILE
  const ctx = cv.getContext("2d")!
  ctx.imageSmoothingEnabled = false
  const X = (name: SpriteName) => atlasIndex(name) * TILE

  // concrete — gray with seam grid + a few light flecks
  ctx.fillStyle = C.c
  ctx.fillRect(X("concrete"), 0, TILE, TILE)
  ctx.fillStyle = C.v
  ctx.fillRect(X("concrete"), 0, TILE, 1)
  ctx.fillRect(X("concrete"), 0, 1, TILE)
  for (const [fx, fy] of [
    [4, 6],
    [11, 3],
    [7, 12],
    [13, 9],
  ])
    px(ctx, X("concrete") + fx, fy, C.C)

  // wooden step top — light wood, dark top edge (tier line), grain
  ctx.fillStyle = C.o
  ctx.fillRect(X("stepTop"), 0, TILE, TILE)
  ctx.fillStyle = C.W
  ctx.fillRect(X("stepTop"), 0, TILE, 2) // riser shadow at top of the tier
  for (let gy = 5; gy < TILE; gy += 5) {
    ctx.fillStyle = C.w
    ctx.fillRect(X("stepTop"), gy, TILE, 1)
  }

  // rug — olive green with border
  ctx.fillStyle = C.r
  ctx.fillRect(X("rug"), 0, TILE, TILE)
  ctx.strokeStyle = C.R
  ctx.strokeRect(X("rug") + 0.5, 0.5, TILE - 1, TILE - 1)

  // stage — near-black platform
  ctx.fillStyle = C.k
  ctx.fillRect(X("stage"), 0, TILE, TILE)
  ctx.fillStyle = C.x
  ctx.fillRect(X("stage"), TILE - 2, TILE, 2)

  // plain wood floor
  ctx.fillStyle = C.w
  ctx.fillRect(X("wood"), 0, TILE, TILE)
  ctx.fillStyle = C.W
  for (let gy = 3; gy < TILE; gy += 4) ctx.fillRect(X("wood"), gy, TILE, 1)

  // object sprites
  for (const name of [
    "chairY",
    "chairW",
    "stump",
    "table",
    "couch",
    "deskTop",
    "glass",
    "plant",
    "bean",
    "printer",
    "swag",
    "speaker",
    "booth",
    "terminal",
    "buffet",
    "cdown",
    "cup",
    "cside",
  ] as const) {
    drawGrid(ctx, X(name), SPR[name])
  }

  // NPCs = the down-facing character, recolored (shirt 'u'/'U'-ish, hair 'a')
  NPC_TINTS.forEach(([shirt, shirtDark, hair], i) => {
    const over: Record<string, string> = { u: shirt, a: hair }
    void shirtDark
    const x0 = X(`npc${i}` as SpriteName)
    const grid = SPR.cdown
    for (let r = 0; r < grid.length; r++) {
      for (let c = 0; c < grid[r].length; c++) {
        const ch = grid[r][c]
        px(ctx, x0 + c, r, over[ch] ?? C[ch] ?? "transparent")
      }
    }
  })

  return cv
}
