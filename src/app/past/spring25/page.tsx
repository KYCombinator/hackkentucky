import { SiteHeader } from "@/app/spring25/components/site-header"
import { Hero } from "@/app/spring25/sections/hero"
import { About } from "@/app/spring25/sections/about"
import { HowItWorks } from "@/app/spring25/sections/howitworks" 
import { Schedule } from "@/app/spring25/sections/schedule"
import { Speakers } from "@/app/spring25/sections/speakers"
import { Sponsors } from "@/app/spring25/sections/sponsors"
import { StudentsSection } from "@/app/spring25/sections/students-section"
import { EmployersSection } from "@/app/spring25/sections/employers-section"

export default function Page() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <Hero />
      <StudentsSection />
      <EmployersSection />
      <About />
      <HowItWorks />
      <Schedule />
      <Speakers />
      <Sponsors />
    </main>
  )
}
