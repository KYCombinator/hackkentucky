"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SiteNavigation } from "@/components/site-navigation"
import Tiles from "@/components/tiles"
import TilesSM from "@/components/tilessm"
import { useState, useEffect } from "react"



const CUT_CORNER = "polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px))"
interface ScheduleEvent {
  time: string
  title: string
  location?: string
  sponsor?: string
  company?: string
  description?: string
  link?: string
}

const scheduleData = {
  friday: {
    theme: "Starter Day - Form your team, meet the project sponsors, pick a problem",
    events: [
      {
        time: "5:00 PM",
        title: "Doors Open",
        location: "Cinderblock - 1205 East Washington Street",
        description: ""
      },
      {
        time: "6:00 PM",
        title: "Dinner",
        sponsor: "Papa Johns",
        description: "Thank you to our sponsor Papa Johns"
      },
      {
        time: "6:15 PM",
        title: "Speaker: Mark Hamner",
        company: "Papa Johns",
        description: "",
        link: "https://www.linkedin.com/in/markhamner/"
      },
      {
        time: "11:00 PM",
        title: "Doors Close",
        description: ""
      }
    ] as ScheduleEvent[]
  },
  saturday: {
    theme: "Build Day",
    events: [
      {
        time: "8:00 AM",
        title: "Doors Open",
        description: ""
      },
      {
        time: "8:00 AM",
        title: "Breakfast - Chick-Fil-A and Krispy Kreme Donuts",
        description: ""
      },
      {
        time: "1:00 PM",
        title: "Lunch",
        sponsor: "Locals Pizza, Salad and Wings",
        description: ""
      },
      {
        time: "5:00 PM",
        title: "Judging / Presentation Time",
        description: ""
      },
      {
        time: "8:00 PM",
        title: "End of HackKentucky Fall 2025",
        description: ""
      }
    ] as ScheduleEvent[]
  }
}


const sponsorTiers = {
  title: [
    { file: "1.svg", scale: 0.3 },
    { file: "datavue.png", scale: 1.0 },
    { file: "papajohns.png", scale: 1.0 }
  ],
  highVelocity: [
    { file: "5.svg", scale: 1.2 },
    { file: "2.svg", scale: 1.0 },
    { file: "localsfoodandpub.png", scale: 0.8 }
  ],
  kyCombinator: [
    { file: "sedrinologo.png", scale: 1.5 },
    { file: "Swell.svg", scale: 1.0 },
    { file: "7.svg", scale: 1.0 }
  ],
  community: [
    { file: "6.svg", scale: 1.3 },
    { file: "8.svg", scale: 1.0 },
    { file: "9.svg", scale: 1.0 },
    { file: "10.svg", scale: 1.0 },
    { file: "11.svg", scale: 0.85 }
  ]
}

const gridPattern = {
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
  backgroundSize: "80px 80px"
}

export default function HomePage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [mounted, setMounted] = useState(false)
  const [breakpoint, setBreakpoint] = useState<'sm' | 'md' | 'lg'>('lg')

  useEffect(() => {
    setMounted(true)
    // Set initial breakpoint and update on resize
    const updateBreakpoint = () => {
      const w = window.innerWidth
      if (w < 1000) setBreakpoint('sm')
      else setBreakpoint('lg')
    }
    updateBreakpoint()
    window.addEventListener('resize', updateBreakpoint)

    return () => {
      window.removeEventListener('resize', updateBreakpoint)
    }
  }, [])
  
  return (
    <div className="min-h-screen bg-black text-white">
      <SiteNavigation />
      <div className="col-span-4 h-[90vh]">
              {breakpoint === 'sm' ? (
                <TilesSM />
              ) : (
                <Tiles />
              )}
              {breakpoint === 'sm' ? (
                <Link href="https://luma.com/hackkentucky" target="_blank">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white border-none absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[30vh] z-10" style={{ 
                      clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
                      fontFamily: 'bc-novatica-cyr', 
                      fontWeight: '500' ,
                    }}>Register Now</Button>
              </Link>
              ) : (
                <Link href="https://luma.com/hackkentucky" target="_blank">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white border-none absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[20vh] z-10" style={{ 
                      clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
                      fontFamily: 'bc-novatica-cyr', 
                      fontWeight: '500' ,
                    }}>Register Now</Button>
              </Link>
              )}
            </div>
      <main className="relative mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-24 pt-12 md:px-10 lg:px-0">
        <RulesSection />
        <ScheduleSection />
        <SponsorsSection />
        <FinalCallout />
      </main>
    </div>
  )
}

function ScheduleSection() {
  return (
    <section id="schedule" className="flex flex-col gap-8">
      <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between" style={{ fontFamily: "bc-novatica-cyr" }}>
        <div>
          <span className="text-[11px] uppercase tracking-[0.4em] text-orange-400">Weekend arc</span>
          <h2 className="mt-2 text-3xl font-semibold uppercase text-white md:text-4xl">November 7-8, 2025</h2>
        </div>
        <p className="max-w-lg text-sm text-zinc-400">
          Two days of intensive building, mentorship, and community. Join us for a weekend designed to ship products and forge lasting connections.
        </p>
      </header>

      {/* Friday Schedule */}
      <div className="relative overflow-hidden border border-white/10 bg-[#080808] rounded-[24px]">
        <div className="border-b border-white/10 bg-[#0a0a0a] p-6 md:p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-semibold uppercase text-white" style={{ fontFamily: "bc-novatica-cyr" }}>
                Friday, November 7
              </h3>
              <div className="mt-3 flex items-center gap-3">
                <span className="h-2 w-2 rounded-sm bg-orange-400" />
                <p className="text-sm text-zinc-300 italic" style={{ fontFamily: "bc-novatica-cyr" }}>
                  {scheduleData.friday.theme}
                </p>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="text-xs uppercase tracking-[0.4em] text-orange-400" style={{ fontFamily: "bc-novatica-cyr" }}>
                Day 1
              </div>
            </div>
          </div>
        </div>

        <div className="divide-y divide-white/5">
          {scheduleData.friday.events.map((event, idx) => (
            <div key={idx} className="p-6 md:p-8 hover:bg-white/[0.02] transition-colors">
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                <div className="flex-shrink-0 md:w-24">
                  <span className="text-lg font-semibold text-orange-400 tabular-nums" style={{ fontFamily: "bc-novatica-cyr" }}>
                    {event.time}
                  </span>
                </div>
                <div className="flex-grow">
                  <h4 className="text-lg font-semibold text-white" style={{ fontFamily: "bc-novatica-cyr" }}>
                    {event.title}
                  </h4>
                  {event.location && (
                    <p className="mt-2 text-sm text-zinc-400" style={{ fontFamily: "bc-novatica-cyr" }}>
                      📍 {event.location}
                    </p>
                  )}
                  {event.sponsor && (
                    <p className="mt-2 text-sm text-zinc-400" style={{ fontFamily: "bc-novatica-cyr" }}>
                      <span className="text-orange-400">Sponsored by</span> {event.sponsor}
                    </p>
                  )}
                  {event.company && (
                    <p className="mt-2 text-sm text-zinc-400" style={{ fontFamily: "bc-novatica-cyr" }}>
                      {event.company}
                    </p>
                  )}
                  {event.description && (
                    <p className="mt-2 text-sm text-zinc-400" style={{ fontFamily: "bc-novatica-cyr" }}>
                      {event.description}
                    </p>
                  )}
                  {event.link && (
                    <a 
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1 text-xs uppercase tracking-[0.3em] text-orange-400 hover:text-orange-300 transition-colors"
                      style={{ fontFamily: "bc-novatica-cyr" }}
                    >
                      LinkedIn Profile
                      <span className="text-sm">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Saturday Schedule */}
      <div className="relative overflow-hidden border border-white/10 bg-[#080808] rounded-[24px]">
        <div className="border-b border-white/10 bg-[#0a0a0a] p-6 md:p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-semibold uppercase text-white" style={{ fontFamily: "bc-novatica-cyr" }}>
                Saturday, November 8
              </h3>
              <div className="mt-3 flex items-center gap-3">
                <span className="h-2 w-2 rounded-sm bg-orange-400" />
                <p className="text-sm text-zinc-300 italic" style={{ fontFamily: "bc-novatica-cyr" }}>
                  {scheduleData.saturday.theme}
                </p>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="text-xs uppercase tracking-[0.4em] text-orange-400" style={{ fontFamily: "bc-novatica-cyr" }}>
                Day 2
              </div>
            </div>
          </div>
        </div>

        <div className="divide-y divide-white/5">
          {scheduleData.saturday.events.map((event, idx) => (
            <div key={idx} className="p-6 md:p-8 hover:bg-white/[0.02] transition-colors">
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                <div className="flex-shrink-0 md:w-24">
                  <span className="text-lg font-semibold text-orange-400 tabular-nums" style={{ fontFamily: "bc-novatica-cyr" }}>
                    {event.time}
                  </span>
                </div>
                <div className="flex-grow">
                  <h4 className="text-lg font-semibold text-white" style={{ fontFamily: "bc-novatica-cyr" }}>
                    {event.title}
                  </h4>
                  {event.location && (
                    <p className="mt-2 text-sm text-zinc-400" style={{ fontFamily: "bc-novatica-cyr" }}>
                      📍 {event.location}
                    </p>
                  )}
                  {event.sponsor && (
                    <p className="mt-2 text-sm text-zinc-400" style={{ fontFamily: "bc-novatica-cyr" }}>
                      <span className="text-orange-400">Sponsored by</span> {event.sponsor}
                    </p>
                  )}
                  {event.company && (
                    <p className="mt-2 text-sm text-zinc-400" style={{ fontFamily: "bc-novatica-cyr" }}>
                      {event.company}
                    </p>
                  )}
                  {event.description && (
                    <p className="mt-2 text-sm text-zinc-400" style={{ fontFamily: "bc-novatica-cyr" }}>
                      {event.description}
                    </p>
                  )}
                  {event.link && (
                    <a 
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1 text-xs uppercase tracking-[0.3em] text-orange-400 hover:text-orange-300 transition-colors"
                      style={{ fontFamily: "bc-novatica-cyr" }}
                    >
                      LinkedIn Profile
                      <span className="text-sm">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SponsorsSection() {
  return (
    <section id="sponsors" className="flex flex-col gap-6">
      <header className="flex flex-col gap-2" style={{ fontFamily: "bc-novatica-cyr" }}>
        <span className="text-[11px] uppercase tracking-[0.4em] text-orange-400">Partners</span>
        <h2 className="text-3xl font-semibold uppercase text-white md:text-4xl">Fueling the build floor</h2>
      </header>
      
       {/* Title Sponsors */}
       <div className="border border-white/10 rounded-[28px] p-4 ">
        <div className="mt-4 mb-8">
          <h3 className="text-center text-2xl uppercase tracking-[0.3em] text-zinc-500" style={{ fontFamily: "bc-novatica-cyr" }}>
            Title Sponsors
          </h3>
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {sponsorTiers.title.map((sponsor) => (
              <div 
                key={sponsor.file} 
                className="flex items-center justify-center p-6"
                style={{ width: `${sponsor.scale * 100}%`, maxWidth: '400px', minWidth: '200px' }}
              >
                <Image
                  src={`/sponsors-fall-2025/${sponsor.file}`}
                  alt={sponsor.file.replace(/\.(svg|png)$/i, "")}
                  width={500}
                  height={300}
                  className="w-full h-auto object-contain"
                  style={sponsor.file.endsWith('.svg') ? { filter: 'brightness(0) invert(1)' } : {}}
                />
              </div>
            ))}
          </div>
        </div>

      {/* High Velocity Sponsors */}
        <div className="">
          <h3 className="text-center text-lg uppercase tracking-[0.3em] text-zinc-500" style={{ fontFamily: "bc-novatica-cyr" }}>
            High Velocity Sponsors
          </h3>
          <div className="grid grid-cols-1 gap-0 sm:grid-cols-3">
            {sponsorTiers.highVelocity.map((sponsor) => (
              <div
                key={sponsor.file}
                className="flex items-center justify-center p-2"
                style={{ minHeight: '140px' }}
              >
                <div style={{ width: `${sponsor.scale * 50}%`, maxWidth: '200px' }}>
                  <Image
                    src={`/sponsors-fall-2025/${sponsor.file}`}
                    alt={sponsor.file.replace(/\.(svg|png)$/i, "")}
                    width={200}
                    height={100}
                    className="w-full h-auto object-contain"
                    style={sponsor.file.endsWith('.svg') ? { filter: 'brightness(0) invert(1)' } : {}}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      {/* KYCombinator Sponsors */}
        <div className="  ">
          <h3 className="text-center text-lg uppercase tracking-[0.3em] text-zinc-500" style={{ fontFamily: "bc-novatica-cyr" }}>
            KYCombinator Sponsors
          </h3>
          <div className="grid grid-cols-1 gap-0 sm:grid-cols-3">
            {sponsorTiers.kyCombinator.map((sponsor) => (
              <div
                key={sponsor.file}
                className="flex items-center justify-center p-2"
                style={{ minHeight: '110px' }}
              >
                <div style={{ width: `${sponsor.scale * 50}%`, maxWidth: '200px' }}>
                  <Image
                    src={`/sponsors-fall-2025/${sponsor.file}`}
                    alt={sponsor.file.replace(/\.(svg|png)$/i, "")}
                    width={150}
                    height={80}
                    className="w-full h-auto object-contain"
                    style={sponsor.file.endsWith('.svg') ? { filter: 'brightness(0) invert(1)' } : {}}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      {/* Community Sponsors */}
        <div className="">
          <h3 className="text-center text-md uppercase tracking-[0.3em] text-zinc-500" style={{ fontFamily: "bc-novatica-cyr" }}>
            Community Sponsors
          </h3>
          <div className="grid grid-cols-2 gap-0 sm:grid-cols-5">
            {sponsorTiers.community.map((sponsor) => (
              <div
                key={sponsor.file}
                className="flex items-center justify-center p-3"
                style={{ minHeight: '80px' }}
              >
                <div style={{ width: `${sponsor.scale * 80}%`, maxWidth: '180px' }}>
                  <Image
                    src={`/sponsors-fall-2025/${sponsor.file}`}
                    alt={sponsor.file.replace(/\.(svg|png)$/i, "")}
                    width={100}
                    height={60}
                    className="w-full h-auto object-contain"
                    style={sponsor.file.endsWith('.svg') ? { filter: 'brightness(0) invert(1)' } : {}}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
    </section>
  )
}

function RulesSection() {
  const ruleCategories = [
    {
      title: "Safety Rules",
      rules: [
        "Building will be closed 11pm - 8am.",
        "For security and safety, we discourage multiple entry / reentry after 9pm on Friday. Please plan accordingly and have all your stuff ready"
      ]
    },
    {
      title: "Conduct Rules",
      rules: [
        "No sex or alcohol",
        "No smoking, vaping, on premise",
        "Please be respectful to everyone"
      ]
    },
    {
      title: "Hack Rules",
      rules: [
        "AI tools + agents allowed",
        "All code must be written / generated by a team member (no outsourcing of labor, no using additional help outside of team)",
        "Teams are encouraged to code \"on-site\"",
        "No cheating, stealing.",
        "Code sharing is allowed but only if mutually agreed upon."
      ]
    },
    {
      title: "Team Rules",
      rules: [
        "2-5 members on a team",
        "Team minimum is 2",
        "Presentation must be made \"in-person\", at least 2 individuals from the team must be present during presentation.",
        "An individual can only be part of 1 team during the hackathon"
      ]
    },
    {
      title: "Team Organization",
      rules: [
        "Team Captain - each team will select a Captain. This liaison will be the main point of contact between the hack-a-thon and the team. The Captain will be responsible for the conduct and behavior of the team. i.e. if there is a mess, the captain will be responsible and accountable for the mess."
      ]
    }
  ]

  return (
    <section id="rules" className="flex flex-col gap-8">
      <header className="flex flex-col gap-2" style={{ fontFamily: "bc-novatica-cyr" }}>
        <span className="text-[11px] uppercase tracking-[0.4em] text-orange-400">Guidelines</span>
        <h2 className="text-3xl font-semibold uppercase text-white md:text-4xl">Rules</h2>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {ruleCategories.map((category) => (
          <div
            key={category.title}
            className="border border-white/10 bg-[#070707] p-6 md:p-8"
            style={{ clipPath: CUT_CORNER, fontFamily: "bc-novatica-cyr" }}
          >
            <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-orange-400 mb-6">
              <span className="h-2 w-2 rounded-sm bg-orange-400" />
              {category.title}
            </div>
            <ul className="space-y-4">
              {category.rules.map((rule, idx) => (
                <li key={idx} className="flex gap-3 text-sm text-zinc-300 leading-relaxed">
                  <span className="text-orange-400 mt-1 flex-shrink-0">→</span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}


function FinalCallout() {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#090909] p-10 text-center">
      <div className="pointer-events-none absolute inset-0 opacity-20" style={gridPattern} />
      <div className="relative flex flex-col items-center gap-6" style={{ fontFamily: "bc-novatica-cyr" }}>
        <span className="text-[11px] uppercase tracking-[0.4em] text-orange-400">Ready to build</span>
        <h2 className="max-w-4xl text-3xl uppercase tracking-[0.1em] font-semibold text-white md:text-5xl">
          Secure your spot on the HackKentucky floor
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="https://luma.com/hackkentucky" target="_blank" rel="noreferrer">
            <Button
              className="bg-orange-500 px-10 py-6 text-[13px] font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-orange-500/90"
              style={{ clipPath: CUT_CORNER, fontFamily: "bc-novatica-cyr" }}
            >
              Apply Now
            </Button>
          </Link>
          <Link
            href="mailto:team@hackkentucky.com"
            className="flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-zinc-400 transition hover:text-white"
          >
            Talk to the organizers
            <span className="text-xs">↗</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
