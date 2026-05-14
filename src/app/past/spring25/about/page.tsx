import { SiteHeader } from "@/app/spring25/components/site-header"
import { AboutHero } from "./components/about-hero"
import { WhoShouldAttend } from "./components/who-should-attend"
import { HackExperience } from "./components/hack-experience"
import { Rules } from "./components/rules"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <AboutHero />
      <WhoShouldAttend />
      <HackExperience />
      <Rules />
    </main>
  )
}
