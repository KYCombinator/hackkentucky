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
    <main className="flex min-h-[100dvh] flex-col items-center justify-center bg-[#2a2d33] p-2">
      <Game />

      {/* Accessible / no-canvas fallback — kept in the DOM (screen readers) but visually hidden. */}
      <section className="sr-only">
        <h1>HackKentucky — The Game</h1>
        <p>
          A pixel-art RPG set at HackKentucky × HackTheTrack, Fall 2026 — Genuine Works, Louisville KY, September 11–12.
          Move with arrow keys / WASD on desktop, or touch in a direction on mobile. Talk to hackers to assemble a team.{" "}
          <Link href="/">Registration opens soon → hackkentucky.com</Link>
        </p>
      </section>
    </main>
  )
}
