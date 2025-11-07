"use client"

import Image from "next/image"
import { SiteNavigation } from "@/components/site-navigation"

const CUT_CORNER = "polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px))"

export default function LogisticsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SiteNavigation />
      <main className="relative mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-24 pt-12 md:px-10 lg:px-0">
        <LogisticsSection />
      </main>
    </div>
  )
}

function LogisticsSection() {
  return (
    <section id="logistics" className="flex flex-col gap-8">
      <header className="flex flex-col gap-2" style={{ fontFamily: "bc-novatica-cyr" }}>
        <span className="text-[11px] uppercase tracking-[0.4em] text-orange-400">Information</span>
        <h2 className="text-3xl font-semibold uppercase text-white md:text-4xl">Logistics</h2>
      </header>

      {/* Parking Section */}
      <div className="border border-white/10 bg-[#070707] p-6 md:p-8" style={{ clipPath: CUT_CORNER, fontFamily: "bc-novatica-cyr" }}>
        <div className="flex items-center gap-3 text-lg uppercase tracking-[0.3em] text-orange-400 mb-4">
          <span className="h-2 w-2 rounded-sm bg-orange-400" />
          Parking
        </div>
        <p className="text-sm text-zinc-300 leading-relaxed mb-6">
          Plenty of parking at 1205 East Washington Street - you can park in the lot or on the street
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-sm uppercase tracking-[0.2em] text-zinc-400 mb-3">Getting Here</h3>
            <p className="text-sm text-zinc-300 leading-relaxed mb-4">
              You can get to the location off Exit 7 on I-64
            </p>
            <div className="border border-white/10 rounded-lg overflow-hidden">
              <Image
                src="/route-dark.png"
                alt="Route to Cinderblock"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-[0.2em] text-zinc-400 mb-3">Parking Map</h3>
            <p className="text-sm text-zinc-300 leading-relaxed mb-4">
              Lots of parking available (marked in green along the streets)
            </p>
            <div className="border border-white/10 rounded-lg overflow-hidden">
              <Image
                src="/parking.png"
                alt="Parking map"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Facilities Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Bathrooms */}
        <div className="border border-white/10 bg-[#070707] p-6 md:p-8" style={{ clipPath: CUT_CORNER, fontFamily: "bc-novatica-cyr" }}>
          <div className="flex items-center gap-3 text-lg uppercase tracking-[0.3em] text-orange-400 mb-4">
            <span className="h-2 w-2 rounded-sm bg-orange-400" />
            Bathrooms
          </div>
          <ul className="space-y-3">
            <li className="flex gap-3 text-sm text-zinc-300 leading-relaxed">
              <span className="text-orange-400 mt-1 flex-shrink-0">→</span>
              <span>There are 2 toilets in the office</span>
            </li>
            <li className="flex gap-3 text-sm text-zinc-300 leading-relaxed">
              <span className="text-orange-400 mt-1 flex-shrink-0">→</span>
              <span>Two sets of bathrooms to the left and to the right of the office</span>
            </li>
            <li className="flex gap-3 text-sm text-zinc-400 leading-relaxed italic mt-4">
              <span className="text-orange-400/60 mt-1 flex-shrink-0">*</span>
              <span>Note: There are no shower facilities on site</span>
            </li>
          </ul>
        </div>

        {/* Internet */}
        <div className="border border-white/10 bg-[#070707] p-6 md:p-8" style={{ clipPath: CUT_CORNER, fontFamily: "bc-novatica-cyr" }}>
          <div className="flex items-center gap-3 text-lg uppercase tracking-[0.3em] text-orange-400 mb-4">
            <span className="h-2 w-2 rounded-sm bg-orange-400" />
            Internet
          </div>
          <div className="space-y-4">
            <div className="flex flex-grid grid-cols-2 gap-2">
            <div className="bg-black/40 border border-white/10 rounded-lg p-4 w-full">
              <div className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-2">WiFi Network</div>
              <div className="text-lg font-semibold text-white">SpectrumSetup-4F</div>
            </div>
            <div className="bg-black/40 border border-white/10 rounded-lg p-4 w-full">
              <div className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-2">WiFi Network Extension</div>
              <div className="text-lg font-semibold text-white">SpectrumSetup-4F_EXT</div>
            </div>
            </div>
            <div className="bg-black/40 border border-white/10 rounded-lg p-4">
              <div className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-2">Password</div>
              <div className="text-lg font-semibold text-white">turtleepic576</div>
            </div>
          </div>
        </div>
      </div>

      {/* Offices + Desks */}
      <div className="border border-white/10 bg-[#070707] p-6 md:p-8" style={{ clipPath: CUT_CORNER, fontFamily: "bc-novatica-cyr" }}>
        <div className="flex items-center gap-3 text-lg uppercase tracking-[0.3em] text-orange-400 mb-4">
          <span className="h-2 w-2 rounded-sm bg-orange-400" />
          Offices + Desks
        </div>
        <div className="space-y-4">
          <p className="text-sm text-zinc-300 leading-relaxed">
            Cinderblock is a shared office space. All personal items will be put away. There are plenty of desks and offices on site.
          </p>
          <ul className="space-y-3 mt-4">
            <li className="flex gap-3 text-sm text-zinc-300 leading-relaxed">
              <span className="text-orange-400 mt-1 flex-shrink-0">→</span>
              <span>Please be respectful and do not open any drawers and/or move personal items</span>
            </li>
            <li className="flex gap-3 text-sm text-zinc-300 leading-relaxed">
              <span className="text-orange-400 mt-1 flex-shrink-0">→</span>
              <span>Electrical cords and outlets will be provided</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Floor Map */}
      <div className="border border-white/10 bg-[#070707] p-6 md:p-8" style={{ clipPath: CUT_CORNER, fontFamily: "bc-novatica-cyr" }}>
        <div className="flex items-center gap-3 text-lg uppercase tracking-[0.3em] text-orange-400 mb-4">
          <span className="h-2 w-2 rounded-sm bg-orange-400" />
          Floor Map
        </div>
        <div className="mt-6 border border-white/10 rounded-lg overflow-hidden">
          <Image
            src="/floormap.png"
            alt="Floor map"
            width={1200}
            height={900}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}

