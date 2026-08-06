"use client"

import { useEffect, useRef } from "react"

// Internal resolution — one screen, 16×14 tiles at 16px.
const TILE = 16
const COLS = 16
const ROWS = 14
const W = COLS * TILE // 256
const H = ROWS * TILE // 224
const STEP_MS = 1000 / 60 // fixed logic timestep
const MOVE_FRAMES = 8 // ticks to slide one tile

type Dir = { dx: number; dy: number }
const DIRS: Record<string, Dir> = {
  up: { dx: 0, dy: -1 },
  down: { dx: 0, dy: 1 },
  left: { dx: -1, dy: 0 },
  right: { dx: 1, dy: 0 },
}

const KEY_TO_DIR: Record<string, keyof typeof DIRS> = {
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

    const reduceMotion =
      typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const moveFrames = reduceMotion ? 1 : MOVE_FRAMES

    // ---- state (mutable, no React re-render in the hot loop) ----
    const player = {
      tx: 8,
      ty: 7,
      moving: false,
      dir: DIRS.down,
      prog: 0, // 0..1 within the current tile slide
    }
    // Two visual snapshots for render interpolation between logic ticks.
    let prevX = player.tx * TILE
    let prevY = player.ty * TILE
    let curX = prevX
    let curY = prevY

    const held: (keyof typeof DIRS)[] = [] // ordered; last = most recent

    function visualXY(): [number, number] {
      const p = player.moving ? player.prog : 0
      return [(player.tx + player.dir.dx * p) * TILE, (player.ty + player.dir.dy * p) * TILE]
    }

    function logic() {
      if (player.moving) {
        player.prog += 1 / moveFrames
        if (player.prog >= 1) {
          player.tx += player.dir.dx
          player.ty += player.dir.dy
          player.moving = false
          player.prog = 0
        }
      }
      if (!player.moving && held.length > 0) {
        const dir = DIRS[held[held.length - 1]]
        const nx = player.tx + dir.dx
        const ny = player.ty + dir.dy
        player.dir = dir
        if (nx >= 0 && nx < COLS && ny >= 0 && ny < ROWS) {
          player.moving = true
          player.prog = 0
        }
      }
      prevX = curX
      prevY = curY
      ;[curX, curY] = visualXY()
    }

    function render(alpha: number) {
      const x = prevX + (curX - prevX) * alpha
      const y = prevY + (curY - prevY) * alpha

      // backdrop
      ctx.fillStyle = "#0b0d17"
      ctx.fillRect(0, 0, W, H)

      // faint grid — industrial floor
      ctx.strokeStyle = "rgba(0,229,255,0.08)"
      ctx.lineWidth = 1
      ctx.beginPath()
      for (let c = 1; c < COLS; c++) {
        ctx.moveTo(c * TILE + 0.5, 0)
        ctx.lineTo(c * TILE + 0.5, H)
      }
      for (let r = 1; r < ROWS; r++) {
        ctx.moveTo(0, r * TILE + 0.5)
        ctx.lineTo(W, r * TILE + 0.5)
      }
      ctx.stroke()

      // player — placeholder colored square (real sprite lands in a later slice)
      ctx.fillStyle = "#00e5ff"
      ctx.fillRect(Math.round(x) + 2, Math.round(y) + 2, TILE - 4, TILE - 4)
      ctx.fillStyle = "#ff2d95"
      ctx.fillRect(Math.round(x) + 6, Math.round(y) + 5, 4, 3) // facing marker
    }

    // ---- integer-scale to fit the viewport, letterbox the rest ----
    function resize() {
      const maxW = Math.min(window.innerWidth - 16, 960)
      const maxH = window.innerHeight - 140
      const scale = Math.max(1, Math.floor(Math.min(maxW / W, maxH / H)))
      canvas.style.width = `${W * scale}px`
      canvas.style.height = `${H * scale}px`
    }
    resize()
    window.addEventListener("resize", resize)

    // ---- input ----
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

    // ---- fixed-timestep loop w/ render interpolation; pause when hidden/off-screen ----
    let raf = 0
    let last = performance.now()
    let acc = 0
    let running = true

    function frame(now: number) {
      if (!running) return
      let dt = now - last
      last = now
      if (dt > 250) dt = 250 // avoid spiral of death after a stall
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

    // pause when the canvas scrolls off-screen
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
      className="touch-none select-none border border-[rgba(0,229,255,0.25)] [image-rendering:pixelated]"
    />
  )
}
