"use client"

import { useEffect, useRef } from "react"
import { TILE, buildAtlas, ROOM, isWalkable, groundOf, propOf, atlasIndex, type SpriteName } from "./sprites"

const COLS = ROOM[0].length // 16
const ROWS = ROOM.length // 14
const W = COLS * TILE // 256
const H = ROWS * TILE // 224
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

export function Game() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

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

    const player = { tx: 8, ty: 7, face: "down" as Face, moving: false, prog: 0 }
    let prevX = player.tx * TILE
    let prevY = player.ty * TILE
    let curX = prevX
    let curY = prevY
    let anim = 0 // frame counter for walk bob + water shimmer

    const held: Face[] = []

    function visualXY(): [number, number] {
      const p = player.moving ? player.prog : 0
      const d = DIRS[player.face]
      return [(player.tx + d.dx * p) * TILE, (player.ty + d.dy * p) * TILE]
    }

    function logic() {
      anim++
      if (player.moving) {
        player.prog += 1 / moveFrames
        if (player.prog >= 1) {
          const d = DIRS[player.face]
          player.tx += d.dx
          player.ty += d.dy
          player.moving = false
          player.prog = 0
        }
      }
      if (!player.moving && held.length > 0) {
        const face = held[held.length - 1]
        player.face = face
        const d = DIRS[face]
        const nx = player.tx + d.dx
        const ny = player.ty + d.dy
        if (nx >= 0 && nx < COLS && ny >= 0 && ny < ROWS && isWalkable(ROOM[ny][nx])) {
          player.moving = true
          player.prog = 0
        }
      }
      prevX = curX
      prevY = curY
      ;[curX, curY] = visualXY()
    }

    function blit(name: SpriteName, dx: number, dy: number) {
      ctx.drawImage(atlas, atlasIndex(name) * TILE, 0, TILE, TILE, dx, dy, TILE, TILE)
    }

    function render(alpha: number) {
      const x = prevX + (curX - prevX) * alpha
      const y = prevY + (curY - prevY) * alpha
      const waterName: SpriteName = Math.floor(anim / 40) % 2 === 0 ? "water0" : "water1"

      // ground layer
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const g = groundOf(ROOM[r][c])
          blit(g === "water" ? waterName : g, c * TILE, r * TILE)
        }
      }
      // prop layer (trees/flowers over grass)
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const p = propOf(ROOM[r][c])
          if (p) blit(p, c * TILE, r * TILE)
        }
      }

      // character shadow
      ctx.fillStyle = "rgba(20,24,16,0.22)"
      ctx.beginPath()
      ctx.ellipse(Math.round(x) + 8, Math.round(y) + 14, 5, 2, 0, 0, Math.PI * 2)
      ctx.fill()

      // character sprite (bob 1px while walking)
      const bob = player.moving && Math.floor(anim / 6) % 2 === 1 ? 1 : 0
      const dx = Math.round(x)
      const dy = Math.round(y) - bob
      const name: SpriteName = player.face === "up" ? "cup" : player.face === "down" ? "cdown" : "cside"
      const sx = atlasIndex(name) * TILE
      if (player.face === "right") {
        ctx.save()
        ctx.translate(dx + TILE, dy)
        ctx.scale(-1, 1)
        ctx.drawImage(atlas, sx, 0, TILE, TILE, 0, 0, TILE, TILE)
        ctx.restore()
      } else {
        ctx.drawImage(atlas, sx, 0, TILE, TILE, dx, dy, TILE, TILE)
      }
    }

    function resize() {
      const maxW = Math.min(window.innerWidth - 16, 960)
      const maxH = window.innerHeight - 140
      const scale = Math.max(1, Math.floor(Math.min(maxW / W, maxH / H)))
      canvas.style.width = `${W * scale}px`
      canvas.style.height = `${H * scale}px`
    }
    resize()
    window.addEventListener("resize", resize)

    function onKeyDown(e: KeyboardEvent) {
      const d = KEY_TO_DIR[e.code]
      if (!d) return
      e.preventDefault()
      if (!held.includes(d)) held.push(d)
    }
    function onKeyUp(e: KeyboardEvent) {
      const d = KEY_TO_DIR[e.code]
      if (!d) return
      const i = held.indexOf(d)
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

  return (
    <canvas
      ref={canvasRef}
      width={W}
      height={H}
      aria-label="HackKentucky pixel-art game"
      className="touch-none select-none border-[3px] border-[#6b4a2b] [image-rendering:pixelated]"
    />
  )
}
