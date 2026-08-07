"use client"

import { useEffect, useRef, useState } from "react"
import { TILE, buildAtlas, atlasIndex, type SpriteName } from "./sprites"
import { ROOMS, floorTile, overSprite, overSolid, type Room } from "./rooms"
import { NPCS, QUEST, ROOM_NAMES, TEAM_GOAL } from "./config"

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
  id: string
  name: string
  lines: string[]
  idx: number
  reveal: number
  offerRecruit: boolean
  choosing: boolean
  choiceIdx: number
}

const CHOICES = ["Recruit them", "Maybe later"]

export function Game() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [dialogue, setDialogue] = useState<Dialogue | null>(null)
  const [team, setTeam] = useState<string[]>([])
  const [stepIdx, setStepIdx] = useState(0)
  const [roomName, setRoomName] = useState(ROOM_NAMES.entry)

  // bridges the imperative engine <-> React UI
  const blockedRef = useRef(false)
  const recruitedRef = useRef<Set<string>>(new Set())
  const openDialogueRef = useRef<(id: string) => void>(() => {})
  const setRoomNameRef = useRef<(n: string) => void>(() => {})

  useEffect(() => {
    blockedRef.current = dialogue !== null
  }, [dialogue])
  useEffect(() => {
    recruitedRef.current = new Set(team)
  }, [team])
  useEffect(() => {
    setRoomNameRef.current = setRoomName
  }, [])

  // advance quest when the team is assembled
  useEffect(() => {
    if (stepIdx === 0 && team.length >= TEAM_GOAL) setStepIdx(1)
  }, [team, stepIdx])

  // opening a dialogue needs the latest team to know who's already recruited
  useEffect(() => {
    openDialogueRef.current = (id: string) => {
      const npc = NPCS[id]
      if (!npc) return
      const recruited = team.includes(id)
      const lines = recruited ? ["We're already a team — let's go win this."] : npc.lines.slice()
      setDialogue({
        id,
        name: npc.name + (npc.specialty ? ` · ${npc.specialty}` : ""),
        lines,
        idx: 0,
        reveal: 0,
        offerRecruit: Boolean(npc.recruitable) && !recruited,
        choosing: false,
        choiceIdx: 0,
      })
    }
  }, [team])

  // typewriter reveal
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
      setDialogue((d) => {
        if (!d) return d
        if (d.choosing) {
          if (k === "ArrowUp" || k === "ArrowDown" || k === "ArrowLeft" || k === "ArrowRight") {
            e.preventDefault()
            return { ...d, choiceIdx: d.choiceIdx === 0 ? 1 : 0 }
          }
          if (k === "KeyZ" || k === "Enter") {
            e.preventDefault()
            if (d.choiceIdx === 0) setTeam((t) => (t.includes(d.id) ? t : [...t, d.id]))
            return null
          }
          if (k === "KeyX" || k === "Escape") {
            e.preventDefault()
            return null
          }
          return d
        }
        const full = d.lines[d.idx] ?? ""
        if (k === "KeyZ" || k === "Enter" || k === "KeyX") {
          e.preventDefault()
          if (d.reveal < full.length) return { ...d, reveal: full.length }
          if (d.idx < d.lines.length - 1) return { ...d, idx: d.idx + 1, reveal: 0 }
          if (d.offerRecruit) return { ...d, choosing: true }
          return null
        }
        if (k === "Escape") {
          e.preventDefault()
          return null
        }
        return d
      })
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [dialogue])

  // ---- the engine ----
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

    // transition (fade + room switch)
    let trans: { t: number; to: string; sx: number; sy: number } | null = null

    function walkable(tx: number, ty: number): boolean {
      if (tx < 0 || tx >= COLS || ty < 0 || ty >= ROWS) return false
      if (overSolid(room.over[ty][tx])) return false
      for (const n of room.npcs) if (n.x === tx && n.y === ty) return false
      return true
    }

    function exitAt(tx: number, ty: number) {
      return room.exits.find((e) => e.x === tx && e.y === ty) ?? null
    }

    function visualXY(): [number, number] {
      const p = player.moving ? player.prog : 0
      const d = DIRS[player.face]
      return [(player.tx + d.dx * p) * TILE, (player.ty + d.dy * p) * TILE]
    }

    function logic() {
      anim++
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
          setRoomNameRef.current(ROOM_NAMES[trans.to] ?? "")
        }
        if (trans.t >= 1) trans = null
        return
      }
      if (blockedRef.current) {
        held.length = 0
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
          if (ex) {
            trans = { t: 0, to: ex.to, sx: ex.sx, sy: ex.sy }
          }
        }
      }
      if (!player.moving && !trans && held.length > 0) {
        const face = held[held.length - 1]
        player.face = face
        const d = DIRS[face]
        if (walkable(player.tx + d.dx, player.ty + d.dy)) {
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

    function charSprite(face: Face): { name: SpriteName; flip: boolean } {
      if (face === "up") return { name: "cup", flip: false }
      if (face === "down") return { name: "cdown", flip: false }
      // base side sprite faces RIGHT; mirror it for left
      return { name: "cside", flip: face === "left" }
    }

    function render(alpha: number) {
      const x = prevX + (curX - prevX) * alpha
      const y = prevY + (curY - prevY) * alpha

      // ground
      for (let r = 0; r < ROWS; r++)
        for (let c = 0; c < COLS; c++) blit(floorTile(room.ground[r][c]), c * TILE, r * TILE)
      // props
      for (let r = 0; r < ROWS; r++)
        for (let c = 0; c < COLS; c++) {
          const o = overSprite(room.over[r][c])
          if (o) blit(o, c * TILE, r * TILE)
        }

      // NPCs (idle bob, offset per position so they're not synced)
      for (const n of room.npcs) {
        const def = NPCS[n.id]
        if (!def) continue
        const bob = Math.floor(anim / 26 + n.x + n.y) % 2
        ctx.fillStyle = "rgba(15,17,20,0.22)"
        ctx.beginPath()
        ctx.ellipse(n.x * TILE + 8, n.y * TILE + 14, 5, 2, 0, 0, Math.PI * 2)
        ctx.fill()
        blit(def.sprite, n.x * TILE, n.y * TILE - bob)
        if (recruitedRef.current.has(n.id)) {
          ctx.fillStyle = "#7ee36b"
          ctx.fillRect(n.x * TILE + 11, n.y * TILE + 1, 3, 3)
        }
      }

      // player
      ctx.fillStyle = "rgba(15,17,20,0.22)"
      ctx.beginPath()
      ctx.ellipse(Math.round(x) + 8, Math.round(y) + 14, 5, 2, 0, 0, Math.PI * 2)
      ctx.fill()
      const bob = player.moving && Math.floor(anim / 6) % 2 === 1 ? 1 : 0
      const cs = charSprite(player.face)
      blit(cs.name, Math.round(x), Math.round(y) - bob, cs.flip)

      // globe pendant lights (overhead glow)
      for (const [lx, ly] of room.lights) {
        const cx = lx * TILE + 8
        const cy = ly * TILE + 8
        const grad = ctx.createRadialGradient(cx, cy, 1, cx, cy, 22)
        grad.addColorStop(0, "rgba(255,246,216,0.55)")
        grad.addColorStop(1, "rgba(255,246,216,0)")
        ctx.fillStyle = grad
        ctx.fillRect(cx - 22, cy - 22, 44, 44)
        ctx.fillStyle = "#fff6d8"
        ctx.beginPath()
        ctx.arc(cx, cy, 3, 0, Math.PI * 2)
        ctx.fill()
      }

      // transition fade
      if (trans) {
        const a = 1 - Math.abs(trans.t - 0.5) * 2
        ctx.fillStyle = `rgba(10,12,16,${a})`
        ctx.fillRect(0, 0, W, H)
      }
    }

    function resize() {
      const maxW = Math.min(window.innerWidth - 16, 960)
      const maxH = window.innerHeight - 150
      const scale = Math.max(1, Math.floor(Math.min(maxW / W, maxH / H)))
      canvas.style.width = `${W * scale}px`
      canvas.style.height = `${H * scale}px`
    }
    resize()
    window.addEventListener("resize", resize)

    function onKeyDown(e: KeyboardEvent) {
      if (blockedRef.current) return
      const dir = KEY_TO_DIR[e.code]
      if (dir) {
        e.preventDefault()
        if (!held.includes(dir)) held.push(dir)
        return
      }
      if (e.code === "KeyZ" || e.code === "Enter") {
        // interact with an NPC on the faced tile
        if (player.moving || trans) return
        e.preventDefault()
        const d = DIRS[player.face]
        const fx = player.tx + d.dx
        const fy = player.ty + d.dy
        const npc = room.npcs.find((n) => n.x === fx && n.y === fy)
        if (npc) {
          held.length = 0
          openDialogueRef.current(npc.id)
        }
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
      document.removeEventListener("visibilitychange", onVisibility)
      io.disconnect()
    }
  }, [])

  const step = QUEST[stepIdx]

  return (
    <div className="relative inline-block">
      <canvas
        ref={canvasRef}
        width={W}
        height={H}
        aria-label="HackKentucky pixel-art game"
        className="touch-none select-none border-[3px] border-[#2c3640] [image-rendering:pixelated]"
      />

      {/* quest box */}
      <div className="pointer-events-none absolute left-2 top-2 max-w-[240px] border border-[#ffcf33] bg-[rgba(12,14,18,0.86)] px-3 py-2 font-mono text-[#f4f0e4]">
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

      {/* dialogue box */}
      {dialogue ? (
        <div className="absolute inset-x-2 bottom-2 border-[2px] border-[#8fd3f2] bg-[rgba(10,14,22,0.94)] px-4 py-3 font-mono text-[#f4f0e4]">
          <div className="text-[11px] font-bold tracking-[2px] text-[#8fd3f2]">{dialogue.name}</div>
          {dialogue.choosing ? (
            <div className="mt-2">
              <div className="text-[13px]">Team up with {NPCS[dialogue.id]?.name}?</div>
              <div className="mt-2 flex flex-col gap-1">
                {CHOICES.map((c, i) => (
                  <div key={c} className={`text-[13px] ${dialogue.choiceIdx === i ? "text-[#ffcf33]" : "text-[rgba(244,240,228,0.7)]"}`}>
                    {dialogue.choiceIdx === i ? "▶ " : "  "}
                    {c}
                  </div>
                ))}
              </div>
              <div className="mt-2 text-[10px] tracking-[1px] text-[rgba(244,240,228,0.5)]">↑↓ choose · Z select</div>
            </div>
          ) : (
            <>
              <div className="mt-1 min-h-[2.4em] text-[13px] leading-[1.4]">
                {(dialogue.lines[dialogue.idx] ?? "").slice(0, dialogue.reveal)}
              </div>
              <div className="mt-1 text-[10px] tracking-[1px] text-[rgba(244,240,228,0.5)]">Z / Enter to continue</div>
            </>
          )}
        </div>
      ) : null}
    </div>
  )
}
