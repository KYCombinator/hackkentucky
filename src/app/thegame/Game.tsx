"use client"

import { useEffect, useRef, useState } from "react"
import { TILE, buildAtlas, atlasIndex, type SpriteName } from "./sprites"
import { ROOMS, floorTile, overSprite, overSolid, type Room } from "./rooms"
import { NPCS, BOUNTIES, QUEST, ROOM_NAMES, TEAM_GOAL, SCENE, MC_LINES } from "./config"

const COLS = 16
const ROWS = 14
const W = COLS * TILE
const H = ROWS * TILE
const STEP_MS = 1000 / 60
const MOVE_FRAMES = 8

type Face = "down" | "up" | "left" | "right"
const DIRS: Record<Face, { dx: number; dy: number }> = {
  up: { dx: 0, dy: -1 },
  down: { dx: 0, dy: 1 },
  left: { dx: -1, dy: 0 },
  right: { dx: 1, dy: 0 },
}
const KEY_TO_DIR: Record<string, Face> = {
  ArrowUp: "up",
  KeyW: "up",
  ArrowDown: "down",
  KeyS: "down",
  ArrowLeft: "left",
  KeyA: "left",
  ArrowRight: "right",
  KeyD: "right",
}

interface Dialogue {
  kind: "npc" | "bounty" | "info"
  id: string
  name: string
  lines: string[]
  idx: number
  reveal: number
  offer: boolean
  choiceLabels: [string, string]
  choosing: boolean
  choiceIdx: number
  /** runs once when a non-offer dialogue is dismissed (drives cutscenes) */
  after?: () => void
}

export function Game() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const headerRef = useRef<HTMLDivElement | null>(null)
  const [dialogue, setDialogue] = useState<Dialogue | null>(null)
  const [team, setTeam] = useState<string[]>([])
  const [bountyId, setBountyId] = useState<string | null>(null)
  const [stepIdx, setStepIdx] = useState(0)
  const [roomName, setRoomName] = useState(ROOM_NAMES.entry)
  const [present, setPresent] = useState(false)
  const [award, setAward] = useState(false)
  // presentation timing mini-game
  const [pg, setPg] = useState({ pos: 0, dir: 1, hits: 0, target: 0.5, feedback: "" })
  // coding mini-game (take a seat at a table and build)
  const [coding, setCoding] = useState(false)
  const [build, setBuild] = useState({ pct: 0, phase: 0 })

  const blockedRef = useRef(false)
  const recruitedRef = useRef<Set<string>>(new Set())
  const partyRef = useRef<string[]>([])
  const bountyIdRef = useRef<string | null>(null)
  const stepRef = useRef(0)
  const morningRef = useRef(false)
  const sleepyRef = useRef(false)
  const cmdRef = useRef<string | null>(null)
  const dialogueRef = useRef<Dialogue | null>(null)
  const openNpcRef = useRef<(id: string) => void>(() => {})
  const openBoothRef = useRef<(id: string) => void>(() => {})
  const openTableRef = useRef<() => void>(() => {})
  const openBuffetRef = useRef<() => void>(() => {})
  const setRoomNameRef = useRef<(n: string) => void>(() => {})

  useEffect(() => {
    blockedRef.current = dialogue !== null || present || award || coding
  }, [dialogue, present, award, coding])
  useEffect(() => {
    dialogueRef.current = dialogue
  }, [dialogue])
  useEffect(() => {
    stepRef.current = stepIdx
  }, [stepIdx])

  // plain info dialogue with an optional follow-up when dismissed
  function say(name: string, lines: string[], after?: () => void) {
    setDialogue({
      kind: "info",
      id: "_info",
      name,
      lines,
      idx: 0,
      reveal: 0,
      offer: false,
      choiceLabels: ["", ""],
      choosing: false,
      choiceIdx: 0,
      after,
    })
  }
  useEffect(() => {
    recruitedRef.current = new Set(team)
    partyRef.current = team
  }, [team])
  useEffect(() => {
    setRoomNameRef.current = setRoomName
  }, [])

  // quest progression
  useEffect(() => {
    if (stepIdx === 0 && team.length >= TEAM_GOAL) setStepIdx(1)
  }, [team, stepIdx])
  useEffect(() => {
    if (stepIdx === 1 && bountyId) setStepIdx(2)
  }, [bountyId, stepIdx])

  // open handlers capture latest team / bounty state
  useEffect(() => {
    openNpcRef.current = (id: string) => {
      const npc = NPCS[id]
      if (!npc) return
      // MC gates the presentation: on the PRESENT step, talking starts the demo
      if (id === "mc") {
        if (stepRef.current === 5) {
          say("MC", [...SCENE.presentIntro], () => {
            setPg({ pos: 0, dir: 1, hits: 0, target: 0.5, feedback: "" })
            setPresent(true)
          })
        } else {
          say("MC", stepRef.current >= 5 ? [...MC_LINES.ready] : [...MC_LINES.before])
        }
        return
      }
      const recruited = team.includes(id)
      setDialogue({
        kind: "npc",
        id,
        name: npc.name + (npc.specialty ? ` · ${npc.specialty}` : ""),
        lines: recruited ? ["We're already a team — let's go win this."] : npc.lines.slice(),
        idx: 0,
        reveal: 0,
        offer: Boolean(npc.recruitable) && !recruited,
        choiceLabels: ["Recruit them", "Maybe later"],
        choosing: false,
        choiceIdx: 0,
      })
    }
    openBoothRef.current = (id: string) => {
      const b = BOUNTIES.find((x) => x.id === id)
      if (!b) return
      const taken = bountyId === id
      const already = bountyId !== null
      setDialogue({
        kind: "bounty",
        id,
        name: `${b.sponsor} · ${b.difficulty}`,
        lines: [`"${b.title}." ${b.pitch}`, taken ? "You already picked this one." : already ? "You've already got a bounty." : "Take it on?"],
        idx: 0,
        reveal: 0,
        offer: !already,
        choiceLabels: ["Take this bounty", "Keep looking"],
        choosing: false,
        choiceIdx: 0,
      })
    }
  }, [team, bountyId])

  // sit at a table (2nd floor) → coding mini-game; buffet (entry, mornings)
  useEffect(() => {
    openTableRef.current = () => {
      const s = stepRef.current
      if (s === 2 || s === 4) {
        setBuild({ pct: 0, phase: s })
        setCoding(true)
      } else if (s < 2) {
        say("TABLE", [...SCENE.table.early])
      } else {
        say("TABLE", [...SCENE.table.idle])
      }
    }
    openBuffetRef.current = () => {
      if (stepRef.current === 3) {
        say("BUFFET", [...SCENE.buffet], () => setStepIdx(4))
      } else {
        say("BUFFET", [...SCENE.buffetFull])
      }
    }
  }, [])

  function confirmChoice(d: Dialogue) {
    if (d.choiceIdx === 0) {
      if (d.kind === "npc") setTeam((t) => (t.includes(d.id) ? t : [...t, d.id]))
      else setBountyId(d.id)
    }
    setDialogue(null)
  }

  // advance dialogue (shared by keyboard + tap/click)
  function advance() {
    const d = dialogueRef.current
    if (!d || d.choosing) return
    const full = d.lines[d.idx] ?? ""
    if (d.reveal < full.length) {
      setDialogue({ ...d, reveal: full.length })
      return
    }
    if (d.idx < d.lines.length - 1) {
      setDialogue({ ...d, idx: d.idx + 1, reveal: 0 })
      return
    }
    if (d.offer) {
      setDialogue({ ...d, choosing: true })
      return
    }
    // dialogue ends — run its follow-up (cutscene / step advance) exactly once
    setDialogue(null)
    d.after?.()
  }

  // typewriter
  useEffect(() => {
    if (!dialogue || dialogue.choosing) return
    const full = dialogue.lines[dialogue.idx] ?? ""
    if (dialogue.reveal >= full.length) return
    const t = setTimeout(() => setDialogue((d) => (d ? { ...d, reveal: Math.min(full.length, d.reveal + 1) } : d)), 24)
    return () => clearTimeout(t)
  }, [dialogue])

  // dialogue keyboard
  useEffect(() => {
    if (!dialogue) return
    function onKey(e: KeyboardEvent) {
      const k = e.code
      if (dialogue!.choosing) {
        if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(k)) {
          e.preventDefault()
          setDialogue((d) => (d ? { ...d, choiceIdx: d.choiceIdx === 0 ? 1 : 0 } : d))
        } else if (k === "KeyZ" || k === "Enter") {
          e.preventDefault()
          setDialogue((d) => {
            if (d) confirmChoice(d)
            return d
          })
        } else if (k === "KeyX" || k === "Escape") {
          e.preventDefault()
          setDialogue(null)
        }
      } else if (k === "KeyZ" || k === "Enter" || k === "KeyX") {
        e.preventDefault()
        advance()
      } else if (k === "Escape") {
        e.preventDefault()
        setDialogue(null)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [dialogue])

  // ---- coding mini-game (mash to fill the build bar) ----
  function codeTap() {
    setBuild((b) => (b.pct >= 100 ? b : { ...b, pct: Math.min(100, b.pct + 9) }))
  }
  // the build bar drains slightly, so you have to keep at it
  useEffect(() => {
    if (!coding) return
    let raf = 0
    let last = performance.now()
    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now
      setBuild((b) => (b.pct >= 100 ? b : { ...b, pct: Math.max(0, b.pct - dt * 7) }))
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [coding])
  // bar full → build done → first build triggers the sleep cutscene
  useEffect(() => {
    if (!coding || build.pct < 100) return
    const phase = build.phase
    const t = setTimeout(() => {
      setCoding(false)
      if (phase === 2) {
        say("BUILD COMPLETE", [...SCENE.codeFirst], () => {
          sleepyRef.current = true
          say("LATE NIGHT", [...SCENE.sleepy], () => {
            morningRef.current = true
            cmdRef.current = "morning"
            setStepIdx(3)
          })
        })
      } else {
        say("BUILD COMPLETE", [...SCENE.codeSecond], () => setStepIdx(5))
      }
    }, 350)
    return () => clearTimeout(t)
  }, [coding, build.pct, build.phase])
  // Z / Enter / Space = keep coding
  useEffect(() => {
    if (!coding) return
    function onKey(e: KeyboardEvent) {
      if (e.code === "KeyZ" || e.code === "Enter" || e.code === "Space") {
        e.preventDefault()
        codeTap()
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [coding])

  // ---- presentation mini-game ----
  function presentHit() {
    setPg((p) => {
      if (p.hits >= 3) return p
      const good = Math.abs(p.pos - p.target) < 0.11
      if (good) {
        const hits = p.hits + 1
        return { ...p, hits, target: 0.18 + Math.random() * 0.64, feedback: hits >= 3 ? "SHIPPED IT!" : "NAILED IT!" }
      }
      return { ...p, feedback: "off-beat — try again" }
    })
  }
  // timing bar sweeps back and forth while the demo is live
  useEffect(() => {
    if (!present) return
    let raf = 0
    let last = performance.now()
    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now
      setPg((p) => {
        let pos = p.pos + p.dir * dt * 0.85
        let dir = p.dir
        if (pos >= 1) {
          pos = 1
          dir = -1
        }
        if (pos <= 0) {
          pos = 0
          dir = 1
        }
        return { ...p, pos, dir }
      })
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [present])
  // three clean hits wins → award ceremony
  useEffect(() => {
    if (present && pg.hits >= 3) {
      const t = setTimeout(() => {
        setPresent(false)
        setStepIdx(6)
        setAward(true)
      }, 750)
      return () => clearTimeout(t)
    }
  }, [present, pg.hits])
  // Z / Enter / Space = hit while presenting
  useEffect(() => {
    if (!present) return
    function onKey(e: KeyboardEvent) {
      if (e.code === "KeyZ" || e.code === "Enter" || e.code === "Space") {
        e.preventDefault()
        presentHit()
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [present])

  // ---- engine ----
  useEffect(() => {
    const canvasEl = canvasRef.current
    if (!canvasEl) return
    const canvas: HTMLCanvasElement = canvasEl
    const ctx = canvas.getContext("2d")!
    ctx.imageSmoothingEnabled = false
    const atlas = buildAtlas()

    const reduceMotion =
      typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const moveFrames = reduceMotion ? 1 : MOVE_FRAMES

    let room: Room = ROOMS.entry
    const player = { tx: 8, ty: 12, face: "up" as Face, moving: false, prog: 0 }
    let prevX = player.tx * TILE
    let prevY = player.ty * TILE
    let curX = prevX
    let curY = prevY
    let anim = 0
    const held: Face[] = []
    let touchFace: Face | null = null
    const followers: { tx: number; ty: number; fx: number; fy: number }[] = []
    let trans: { t: number; to: string; sx: number; sy: number } | null = null
    let cut: { t: number } | null = null // scripted cutscene fade (e.g. "next morning")

    function boothAt(tx: number, ty: number) {
      return room.booths?.find((b) => b.x === tx && b.y === ty) ?? null
    }
    function npcAt(tx: number, ty: number) {
      return room.npcs.find((n) => n.x === tx && n.y === ty && !recruitedRef.current.has(n.id)) ?? null
    }
    // a workable table (only on the 2nd floor, where you sit down to build)
    function tableAt(tx: number, ty: number) {
      return room.id === "floor2" && room.over[ty]?.[tx] === "T"
    }
    function buffetAt(tx: number, ty: number) {
      return morningRef.current && (room.buffet?.some(([x, y]) => x === tx && y === ty) ?? false)
    }
    function walkable(tx: number, ty: number): boolean {
      if (tx < 0 || tx >= COLS || ty < 0 || ty >= ROWS) return false
      if (overSolid(room.over[ty][tx])) return false
      if (boothAt(tx, ty)) return false
      if (npcAt(tx, ty)) return false
      if (buffetAt(tx, ty)) return false
      return true
    }
    function exitAt(tx: number, ty: number) {
      return room.exits.find((e) => e.x === tx && e.y === ty) ?? null
    }
    function desiredFace(): Face | null {
      if (touchFace) return touchFace
      return held.length ? held[held.length - 1] : null
    }
    function visualXY(): [number, number] {
      const p = player.moving ? player.prog : 0
      const d = DIRS[player.face]
      return [(player.tx + d.dx * p) * TILE, (player.ty + d.dy * p) * TILE]
    }

    function tryInteract() {
      if (player.moving || trans || blockedRef.current) return
      const d = DIRS[player.face]
      const fx = player.tx + d.dx
      const fy = player.ty + d.dy
      const npc = npcAt(fx, fy)
      if (npc) {
        held.length = 0
        touchFace = null
        openNpcRef.current(npc.id)
        return
      }
      const booth = boothAt(fx, fy)
      if (booth) {
        held.length = 0
        touchFace = null
        openBoothRef.current(booth.id)
        return
      }
      if (tableAt(fx, fy)) {
        held.length = 0
        touchFace = null
        openTableRef.current()
        return
      }
      if (buffetAt(fx, fy)) {
        held.length = 0
        touchFace = null
        openBuffetRef.current()
      }
    }

    function logic() {
      anim++
      // keep follower count synced with the party
      const party = partyRef.current
      while (followers.length < party.length)
        followers.push({ tx: player.tx, ty: player.ty, fx: player.tx, fy: player.ty })
      while (followers.length > party.length) followers.pop()

      // scripted cutscene: sleep → fade → wake up back in the Entry Way
      if (cmdRef.current === "morning" && !cut) {
        cut = { t: 0 }
        cmdRef.current = null
      }
      if (cut) {
        cut.t += reduceMotion ? 1 : 1 / 72
        if (cut.t >= 0.5 && room.id !== "entry") {
          room = ROOMS.entry
          player.tx = 7
          player.ty = 8
          player.face = "up"
          player.moving = false
          player.prog = 0
          prevX = curX = player.tx * TILE
          prevY = curY = player.ty * TILE
          for (const f of followers) {
            f.tx = f.fx = player.tx
            f.ty = f.fy = player.ty
          }
          sleepyRef.current = false
          setRoomNameRef.current(ROOM_NAMES.entry)
        }
        if (cut.t >= 1) cut = null
        return
      }

      if (trans) {
        trans.t += reduceMotion ? 1 : 1 / 12
        if (trans.t >= 0.5 && room.id !== trans.to) {
          room = ROOMS[trans.to]
          player.tx = trans.sx
          player.ty = trans.sy
          player.moving = false
          player.prog = 0
          prevX = curX = player.tx * TILE
          prevY = curY = player.ty * TILE
          for (const f of followers) {
            f.tx = f.fx = player.tx
            f.ty = f.fy = player.ty
          }
          setRoomNameRef.current(ROOM_NAMES[trans.to] ?? "")
        }
        if (trans.t >= 1) trans = null
        return
      }
      if (blockedRef.current) {
        held.length = 0
        touchFace = null
        return
      }
      if (player.moving) {
        player.prog += 1 / moveFrames
        if (player.prog >= 1) {
          const d = DIRS[player.face]
          player.tx += d.dx
          player.ty += d.dy
          player.moving = false
          player.prog = 0
          const ex = exitAt(player.tx, player.ty)
          if (ex) trans = { t: 0, to: ex.to, sx: ex.sx, sy: ex.sy }
        }
      }
      const want = desiredFace()
      if (!player.moving && !trans && want) {
        player.face = want
        const d = DIRS[want]
        if (walkable(player.tx + d.dx, player.ty + d.dy)) {
          // snake: each follower steps into the tile of the one ahead
          const chain = [{ x: player.tx, y: player.ty }, ...followers.map((f) => ({ x: f.tx, y: f.ty }))]
          for (let i = 0; i < followers.length; i++) {
            followers[i].fx = followers[i].tx
            followers[i].fy = followers[i].ty
            followers[i].tx = chain[i].x
            followers[i].ty = chain[i].y
          }
          player.moving = true
          player.prog = 0
        }
      }
      prevX = curX
      prevY = curY
      ;[curX, curY] = visualXY()
    }

    function blit(name: SpriteName, dx: number, dy: number, flip = false) {
      const sx = atlasIndex(name) * TILE
      if (flip) {
        ctx.save()
        ctx.translate(dx + TILE, dy)
        ctx.scale(-1, 1)
        ctx.drawImage(atlas, sx, 0, TILE, TILE, 0, 0, TILE, TILE)
        ctx.restore()
      } else {
        ctx.drawImage(atlas, sx, 0, TILE, TILE, dx, dy, TILE, TILE)
      }
    }
    function shadow(cx: number, cy: number) {
      ctx.fillStyle = "rgba(15,17,20,0.22)"
      ctx.beginPath()
      ctx.ellipse(cx, cy, 5, 2, 0, 0, Math.PI * 2)
      ctx.fill()
    }
    function charSprite(face: Face): { name: SpriteName; flip: boolean } {
      if (face === "up") return { name: "cup", flip: false }
      if (face === "down") return { name: "cdown", flip: false }
      return { name: "cside", flip: face === "left" } // base faces right
    }

    function render(alpha: number) {
      const x = prevX + (curX - prevX) * alpha
      const y = prevY + (curY - prevY) * alpha

      for (let r = 0; r < ROWS; r++)
        for (let c = 0; c < COLS; c++) blit(floorTile(room.ground[r][c]), c * TILE, r * TILE)
      for (let r = 0; r < ROWS; r++)
        for (let c = 0; c < COLS; c++) {
          const o = overSprite(room.over[r][c])
          if (o) blit(o, c * TILE, r * TILE)
        }
      if (room.booths)
        for (const b of room.booths) {
          blit("booth", b.x * TILE, b.y * TILE)
          if (bountyIdRef.current === b.id) {
            ctx.fillStyle = "#7ee36b"
            ctx.fillRect(b.x * TILE + 12, b.y * TILE + 1, 3, 3)
          }
        }
      if (morningRef.current && room.buffet)
        for (const [bx, by] of room.buffet) blit("buffet", bx * TILE, by * TILE)

      // exit hints
      for (const ex of room.exits) {
        if (!ex.label || !ex.dir) continue
        const pulse = 0.5 + 0.5 * Math.sin(anim / 14)
        const cx = ex.x * TILE + 8
        ctx.fillStyle = `rgba(255,207,51,${0.55 + 0.4 * pulse})`
        const ay = ex.dir === "up" ? 2 : ex.y * TILE + 13
        // chevron
        ctx.beginPath()
        if (ex.dir === "up") {
          ctx.moveTo(cx, ay)
          ctx.lineTo(cx - 4, ay + 4)
          ctx.lineTo(cx + 4, ay + 4)
        } else {
          ctx.moveTo(cx, ay + 4)
          ctx.lineTo(cx - 4, ay)
          ctx.lineTo(cx + 4, ay)
        }
        ctx.closePath()
        ctx.fill()
        ctx.font = "6px monospace"
        ctx.textAlign = "center"
        ctx.fillStyle = `rgba(255,243,208,${0.7 + 0.3 * pulse})`
        ctx.fillText(ex.label, cx + 8, ex.dir === "up" ? ay + 12 : ay - 6)
        ctx.textAlign = "left"
      }

      // NPCs (skip recruited — they're following now)
      for (const n of room.npcs) {
        if (recruitedRef.current.has(n.id)) continue
        const def = NPCS[n.id]
        if (!def) continue
        const bob = Math.floor(anim / 26 + n.x + n.y) % 2
        shadow(n.x * TILE + 8, n.y * TILE + 14)
        blit(def.sprite, n.x * TILE, n.y * TILE - bob)
      }

      // followers (behind player)
      const party = partyRef.current
      for (let i = 0; i < followers.length; i++) {
        const f = followers[i]
        const p = player.moving ? player.prog : 0
        const fx = (f.fx + (f.tx - f.fx) * p) * TILE
        const fy = (f.fy + (f.ty - f.fy) * p) * TILE
        const sprite = NPCS[party[i]]?.sprite ?? "npc0"
        shadow(fx + 8, fy + 14)
        blit(sprite as SpriteName, fx, fy)
        if (sleepyRef.current) {
          ctx.font = "6px monospace"
          ctx.fillStyle = "rgba(255,243,208,0.9)"
          ctx.fillText("z", fx + 11, fy - 1 - (Math.floor(anim / 18) % 3))
        }
      }

      // player
      shadow(Math.round(x) + 8, Math.round(y) + 14)
      const bob = player.moving && Math.floor(anim / 6) % 2 === 1 ? 1 : 0
      const cs = charSprite(player.face)
      blit(cs.name, Math.round(x), Math.round(y) - bob, cs.flip)

      // globe lights
      for (const [lx, ly] of room.lights) {
        const gx = lx * TILE + 8
        const gy = ly * TILE + 8
        const grad = ctx.createRadialGradient(gx, gy, 1, gx, gy, 22)
        grad.addColorStop(0, "rgba(255,246,216,0.5)")
        grad.addColorStop(1, "rgba(255,246,216,0)")
        ctx.fillStyle = grad
        ctx.fillRect(gx - 22, gy - 22, 44, 44)
        ctx.fillStyle = "#fff6d8"
        ctx.beginPath()
        ctx.arc(gx, gy, 3, 0, Math.PI * 2)
        ctx.fill()
      }

      if (trans) {
        const a = 1 - Math.abs(trans.t - 0.5) * 2
        ctx.fillStyle = `rgba(10,12,16,${a})`
        ctx.fillRect(0, 0, W, H)
      }
      if (cut) {
        const a = 1 - Math.abs(cut.t - 0.5) * 2
        ctx.fillStyle = `rgba(6,8,12,${Math.min(1, a * 1.5)})`
        ctx.fillRect(0, 0, W, H)
        if (a > 0.55) {
          ctx.font = "bold 11px monospace"
          ctx.textAlign = "center"
          ctx.fillStyle = `rgba(255,243,208,${(a - 0.55) / 0.45})`
          ctx.fillText(SCENE.morning, W / 2, H / 2)
          ctx.textAlign = "left"
        }
      }
    }

    // scaling: crisp integer on desktop; on touch devices fill the screen
    // (float scale, still image-rendering:pixelated) so it isn't a tiny 1x box.
    const coarse = typeof window.matchMedia === "function" && window.matchMedia("(pointer: coarse)").matches
    function resize() {
      // reserve room for the quest header that sits above the board
      const headerH = headerRef.current?.offsetHeight ?? 0
      const availW = coarse ? window.innerWidth : Math.min(window.innerWidth - 8, 960)
      const availH = (coarse ? window.innerHeight : window.innerHeight - 24) - headerH - 6
      const raw = Math.min(availW / W, availH / H)
      const s = coarse ? Math.max(1, raw) : Math.max(1, Math.floor(raw))
      const cw = Math.round(W * s)
      canvas.style.width = `${cw}px`
      canvas.style.height = `${Math.round(H * s)}px`
      if (headerRef.current) headerRef.current.style.width = `${cw}px`
    }
    // two passes: first sizes the header to the board width, second re-reads
    // its (now-wrapped) height so the canvas fits under it without overflow.
    resize()
    resize()
    window.addEventListener("resize", resize)

    // keyboard
    function onKeyDown(e: KeyboardEvent) {
      if (blockedRef.current) return
      const dir = KEY_TO_DIR[e.code]
      if (dir) {
        e.preventDefault()
        if (!held.includes(dir)) held.push(dir)
        return
      }
      if (e.code === "KeyZ" || e.code === "Enter") {
        e.preventDefault()
        tryInteract()
      }
    }
    function onKeyUp(e: KeyboardEvent) {
      const dir = KEY_TO_DIR[e.code]
      if (!dir) return
      const i = held.indexOf(dir)
      if (i >= 0) held.splice(i, 1)
    }
    window.addEventListener("keydown", onKeyDown)
    window.addEventListener("keyup", onKeyUp)

    // touch: move toward the touch point, double-tap to interact
    let pointerDown = false
    let startX = 0
    let startY = 0
    let startT = 0
    let lastTapT = 0
    function dirFromPoint(clientX: number, clientY: number): Face | null {
      const rect = canvas.getBoundingClientRect()
      const sc = rect.width / W
      const pcx = rect.left + (curX + 8) * sc
      const pcy = rect.top + (curY + 8) * sc
      const dx = clientX - pcx
      const dy = clientY - pcy
      if (Math.hypot(dx, dy) < 0.6 * TILE * sc) return null
      return Math.abs(dx) > Math.abs(dy) ? (dx < 0 ? "left" : "right") : dy < 0 ? "up" : "down"
    }
    function onPointerDown(e: PointerEvent) {
      if (blockedRef.current) return
      pointerDown = true
      startX = e.clientX
      startY = e.clientY
      startT = performance.now()
      touchFace = dirFromPoint(e.clientX, e.clientY)
      canvas.setPointerCapture?.(e.pointerId)
      e.preventDefault()
    }
    function onPointerMove(e: PointerEvent) {
      if (!pointerDown || blockedRef.current) return
      touchFace = dirFromPoint(e.clientX, e.clientY)
      e.preventDefault()
    }
    function onPointerUp(e: PointerEvent) {
      if (!pointerDown) return
      pointerDown = false
      touchFace = null
      const moved = Math.hypot(e.clientX - startX, e.clientY - startY) > 12
      const quick = performance.now() - startT < 250
      if (!moved && quick && !blockedRef.current) {
        const now = performance.now()
        if (now - lastTapT < 320) {
          lastTapT = 0
          tryInteract()
        } else {
          lastTapT = now
        }
      }
      e.preventDefault()
    }
    canvas.addEventListener("pointerdown", onPointerDown)
    canvas.addEventListener("pointermove", onPointerMove)
    canvas.addEventListener("pointerup", onPointerUp)
    canvas.addEventListener("pointercancel", onPointerUp)

    let raf = 0
    let last = performance.now()
    let acc = 0
    let running = true
    function frame(now: number) {
      if (!running) return
      let dt = now - last
      last = now
      if (dt > 250) dt = 250
      acc += dt
      while (acc >= STEP_MS) {
        logic()
        acc -= STEP_MS
      }
      render(acc / STEP_MS)
      raf = requestAnimationFrame(frame)
    }
    function start() {
      if (running) return
      running = true
      last = performance.now()
      acc = 0
      raf = requestAnimationFrame(frame)
    }
    function stop() {
      running = false
      cancelAnimationFrame(raf)
    }
    raf = requestAnimationFrame(frame)
    function onVisibility() {
      if (document.hidden) stop()
      else start()
    }
    document.addEventListener("visibilitychange", onVisibility)
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) start()
          else stop()
        }
      },
      { threshold: 0.01 },
    )
    io.observe(canvas)

    return () => {
      stop()
      window.removeEventListener("resize", resize)
      window.removeEventListener("keydown", onKeyDown)
      window.removeEventListener("keyup", onKeyUp)
      canvas.removeEventListener("pointerdown", onPointerDown)
      canvas.removeEventListener("pointermove", onPointerMove)
      canvas.removeEventListener("pointerup", onPointerUp)
      canvas.removeEventListener("pointercancel", onPointerUp)
      document.removeEventListener("visibilitychange", onVisibility)
      io.disconnect()
    }
  }, [])

  // bountyId available to the engine render without re-running the effect
  useEffect(() => {
    bountyIdRef.current = bountyId
  }, [bountyId])

  const step = QUEST[stepIdx]

  return (
    <div className="flex flex-col items-center gap-1.5">
      {/* quest box — sits ABOVE the board so it never covers gameplay */}
      <div
        ref={headerRef}
        className="border border-[#ffcf33] bg-[rgba(12,14,18,0.86)] px-3 py-2 font-mono leading-normal text-[#f4f0e4]"
      >
        <div className="flex items-center justify-between gap-3 text-[10px] font-bold tracking-[2px] text-[#ffcf33]">
          <span>◆ QUEST</span>
          <span className="text-[rgba(244,240,228,0.6)]">{roomName}</span>
        </div>
        <div className="mt-1 text-[12px] font-bold tracking-[1px]">
          {stepIdx + 1}. {step.title}
        </div>
        <div className="mt-1 text-[11px] leading-[1.5] text-[rgba(244,240,228,0.75)]">{step.objective}</div>
        {stepIdx === 0 ? (
          <div className="mt-1.5 text-[11px] font-bold tracking-[1px] text-[#7ee36b]">
            TEAM {team.length}/{TEAM_GOAL}
          </div>
        ) : null}
      </div>

      <div className="relative inline-block leading-[0]">
      <canvas
        ref={canvasRef}
        width={W}
        height={H}
        aria-label="HackKentucky pixel-art game"
        className="block touch-none select-none border-[3px] border-[#2c3640] [image-rendering:pixelated]"
      />

      {/* dialogue box (tap/click friendly) */}
      {dialogue ? (
        <div
          onClick={() => !dialogue.choosing && advance()}
          className="absolute inset-x-2 bottom-2 cursor-pointer border-[2px] border-[#8fd3f2] bg-[rgba(10,14,22,0.95)] px-4 py-3 font-mono leading-normal text-[#f4f0e4]"
        >
          <div className="text-[11px] font-bold tracking-[2px] text-[#8fd3f2]">{dialogue.name}</div>
          {dialogue.choosing ? (
            <div className="mt-2 flex flex-col gap-1.5">
              {dialogue.choiceLabels.map((c, i) => (
                <button
                  key={c}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    confirmChoice({ ...dialogue, choiceIdx: i })
                  }}
                  className={`text-left text-[13px] ${dialogue.choiceIdx === i ? "text-[#ffcf33]" : "text-[rgba(244,240,228,0.8)]"}`}
                >
                  ▶ {c}
                </button>
              ))}
              <div className="mt-1 text-[10px] tracking-[1px] text-[rgba(244,240,228,0.5)]">tap an option (or ↑↓ + Z)</div>
            </div>
          ) : (
            <>
              <div className="mt-1 min-h-[2.4em] text-[13px] leading-[1.4]">
                {(dialogue.lines[dialogue.idx] ?? "").slice(0, dialogue.reveal)}
              </div>
              <div className="mt-1 text-[10px] tracking-[1px] text-[rgba(244,240,228,0.5)]">tap / Z to continue</div>
            </>
          )}
        </div>
      ) : null}

      {/* coding mini-game — take a seat at a table and build */}
      {coding ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[rgba(6,8,14,0.9)] px-4 font-mono leading-normal text-[#f4f0e4]">
          <div className="text-[11px] font-bold tracking-[2px] text-[#7ee36b]">HEADS DOWN — BUILD</div>
          <div className="text-[10px] tracking-[1px] text-[rgba(244,240,228,0.7)]">Mash CODE to ship the build.</div>
          <div className="relative h-4 w-[85%] max-w-[320px] overflow-hidden border border-[rgba(244,240,228,0.4)] bg-[rgba(0,0,0,0.5)]">
            <div className="absolute inset-y-0 left-0 bg-[rgba(126,227,107,0.6)]" style={{ width: `${build.pct}%` }} />
          </div>
          <div className="text-[12px] font-bold tracking-[1px] text-[#ffcf33]">{Math.round(build.pct)}%</div>
          <button
            type="button"
            onClick={codeTap}
            className="border-[2px] border-[#7ee36b] bg-[rgba(20,32,20,0.95)] px-8 py-3 text-[14px] font-bold tracking-[2px] text-[#f4f0e4] active:translate-y-px"
          >
            CODE
          </button>
          <div className="text-[10px] tracking-[1px] text-[rgba(244,240,228,0.5)]">tap CODE (or press Z / space)</div>
        </div>
      ) : null}

      {/* presentation timing mini-game */}
      {present ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[rgba(6,8,14,0.9)] px-4 font-mono leading-normal text-[#f4f0e4]">
          <div className="text-[11px] font-bold tracking-[2px] text-[#8fd3f2]">PRESENT TO THE JUDGES</div>
          <div className="text-[10px] tracking-[1px] text-[rgba(244,240,228,0.7)]">Hit the green zone — 3 times.</div>
          <div className="relative h-4 w-[85%] max-w-[320px] overflow-hidden border border-[rgba(244,240,228,0.4)] bg-[rgba(0,0,0,0.5)]">
            <div
              className="absolute inset-y-0 bg-[rgba(126,227,107,0.55)]"
              style={{ left: `${Math.max(0, pg.target - 0.11) * 100}%`, width: `${0.22 * 100}%` }}
            />
            <div className="absolute inset-y-0 w-[3px] bg-[#ffcf33]" style={{ left: `calc(${pg.pos * 100}% - 1px)` }} />
          </div>
          <div className="flex items-center gap-2 text-[12px] font-bold tracking-[2px]">
            {[0, 1, 2].map((i) => (
              <span key={i} className={i < pg.hits ? "text-[#7ee36b]" : "text-[rgba(244,240,228,0.3)]"}>
                ★
              </span>
            ))}
          </div>
          <div className="h-[1.2em] text-[12px] font-bold tracking-[1px] text-[#ffcf33]">{pg.feedback}</div>
          <button
            type="button"
            onClick={presentHit}
            className="border-[2px] border-[#8fd3f2] bg-[rgba(20,28,44,0.95)] px-8 py-3 text-[14px] font-bold tracking-[2px] text-[#f4f0e4] active:translate-y-px"
          >
            HIT
          </button>
          <div className="text-[10px] tracking-[1px] text-[rgba(244,240,228,0.5)]">tap HIT (or press Z / space)</div>
        </div>
      ) : null}

      {/* award ceremony */}
      {award ? (
        <div
          onClick={() => setAward(false)}
          className="absolute inset-0 flex cursor-pointer flex-col items-center justify-center gap-2 bg-[rgba(8,10,18,0.94)] px-6 text-center font-mono leading-normal text-[#f4f0e4]"
        >
          <div className="text-[34px]">🏆</div>
          <div className="text-[16px] font-bold tracking-[3px] text-[#ffcf33]">1ST PLACE</div>
          <div className="text-[11px] tracking-[1px] text-[rgba(244,240,228,0.85)]">
            {BOUNTIES.find((b) => b.id === bountyId)?.sponsor ?? "SPONSOR"} BOUNTY — SHIPPED
          </div>
          <div className="mt-1 text-[11px] leading-[1.5] text-[rgba(244,240,228,0.7)]">
            You, {team.map((id) => NPCS[id]?.name ?? id).join(" & ") || "your team"}. Demo nailed. Judges wowed.
          </div>
          <div className="mt-2 text-[10px] tracking-[2px] text-[#8fd3f2]">tap to close</div>
        </div>
      ) : null}
      </div>
    </div>
  )
}
