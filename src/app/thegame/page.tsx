import type { Metadata } from "next"
import Link from "next/link"
import { Game } from "./Game"

// Unlisted + noindexed: reachable at /thegame but not linked or crawled.
export const metadata: Metadata = {
  title: "HackKentucky — The Game",
  description: "A tiny pixel-art RPG for HackKentucky × HackTheTrack, Fall 2026.",
  robots: { index: false, follow: false },
}

export default function TheGamePage() {
  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-center gap-4 bg-[#3f5a34] p-4">
      <Game />

      {/* Accessible / no-canvas fallback — real content in the DOM for anyone who can't play. */}
      <section className="max-w-[540px] text-center">
        <h1 className="font-[family-name:var(--font-hk-mono,monospace)] text-[13px] font-bold tracking-[2px] text-[#fff3d0]">
          HACKKENTUCKY — THE GAME
        </h1>
        <p className="mt-2 font-[family-name:var(--font-hk-mono,monospace)] text-[12px] leading-[1.7] text-[rgba(255,243,208,.72)]">
          A tiny pixel-art RPG set at HackKentucky × HackTheTrack, Fall 2026 — Genuine Works, Louisville KY, September
          11–12. Move with the arrow keys or WASD. (Work in progress.){" "}
          <Link href="/" className="text-[#ffd23f] underline underline-offset-4">
            Registration opens soon → hackkentucky.com
          </Link>
        </p>
      </section>
    </main>
  )
}
