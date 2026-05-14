import { SiteHeader } from "@/app/spring25/components/site-header"
import { Hero } from "./components/hero"
import { Format } from "./components/format"
import { Judging } from "./components/judging"

export default function PrizesPage() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <Hero />
      <Format />
      <Judging />
    </main>
  )
}