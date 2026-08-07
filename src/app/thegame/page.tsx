import type { Metadata } from "next"
import Link from "next/link"
import { Game } from "./Game"

// Unlisted + noindexed (not crawled), but its own distinct social/OG card so a
// shared /thegame link previews as the game, not the main site.
const OG_DESC =
  "A pixel-art RPG set at HackKentucky × HackTheTrack — assemble a team, grab a bounty, build, and present to the judges. Play in your browser."

export const metadata: Metadata = {
  title: "HackKentucky: The Game",
  description: OG_DESC,
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    title: "HackKentucky: The Game 🎮",
    description: OG_DESC,
    url: "https://hackkentucky.com/thegame",
    siteName: "HackKentucky: The Game",
    images: [{ url: "/thegame-og.png", width: 1200, height: 630, alt: "HackKentucky: The Game — a pixel-art RPG" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HackKentucky: The Game 🎮",
    description: OG_DESC,
    images: ["/thegame-og.png"],
  },
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
