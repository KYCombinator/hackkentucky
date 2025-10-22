"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SiteNavigation } from "@/components/site-navigation"
import Tiles from "@/components/tiles"
import TilesSM from "@/components/tilessm"
import { useState, useEffect } from "react"
// import Sparkle from "@/components/sparkle"

const CUT_CORNER = "polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px))"

const heroStats = [
  {
    label: "Builders",
    value: "150+",
    detail: "developers, designers, and founders from across the region"
  },
  {
    label: "Prize Pool",
    value: "$5K+",
    detail: "cash, credits, and venture opportunities for standout teams"
  },
  {
    label: "Mentors",
    value: "15+",
    detail: "operators, investors, and product leaders on-site all weekend"
  }
]

const featureHighlights = [
  {
    id: "support",
    title: "End-to-end support",
    subtitle: "From first commit to demo day",
    description: "We pair every team with a dedicated mentor pod, provide 24/7 workspace, and guide your story for judges and investors."
  },
  {
    id: "approach",
    title: "Unique approach",
    subtitle: "Beyond the hackathon",
    description: "HackKentucky blends incubation-style programming with a pressure-cooker sprint so you leave with momentum, not burnout."
  },
  {
    id: "partners",
    title: "Partner ecosystem",
    subtitle: "Strategic access",
    description: "Top funds, cloud partners, and web3 networks are on deck for fast-tracked intros, grants, and hiring pipelines."
  }
]

const programTracks = [
  {
    label: "Incubation",
    title: "Launch Track",
    description: "Ship a new product in 48 hours with hands-on venture support and technical advisors embedded in your build squad.",
    metrics: [
      { label: "Funding Ready", value: "$25K" },
      { label: "Mentor Pods", value: "12" },
      { label: "Pitch Slots", value: "Top 8" },
      { label: "Accelerator Passes", value: "4" }
    ]
  },
  {
    label: "Scale",
    title: "Growth Track",
    description: "Already live? Focus on traction, partnerships, and GTM with curated sessions from seasoned operators and investors.",
    metrics: [
      { label: "Advisors", value: "18" },
      { label: "Enterprise Pilots", value: "6" },
      { label: "Market Sprints", value: "3" },
      { label: "Demo Partners", value: "15" }
    ]
  },
  {
    label: "Frontier",
    title: "AI x Web3 Track",
    description: "Push the edge of intelligent infrastructure, agent tooling, and trustless compute with bleeding-edge workshops.",
    metrics: [
      { label: "GPU Hours", value: "2,500" },
      { label: "Research Labs", value: "5" },
      { label: "Special Prizes", value: "8" },
      { label: "Protocol Grants", value: "$150K" }
    ]
  }
]

const scheduleMilestones = [
  {
    day: "Day 0",
    headline: "Virtual primer",
    detail: "Kickoff briefing, team formation lounges, and problem statements released one week out."
  },
  {
    day: "Day 1",
    headline: "Doors open",
    detail: "Check-in, partner labs, mentor matchmaking, and hack floor access until 2am."
  },
  {
    day: "Day 2",
    headline: "Deep build",
    detail: "Office hours, product clinics, investor roundtables, and midnight wellness reset."
  },
  {
    day: "Day 3",
    headline: "Showcase + finals",
    detail: "Top teams pitch on the main stage to an invite-only panel of funds, corporates, and media."
  }
]

const testimonials = [
  {
    name: "Asha Patel",
    role: "Founder, Mesh Labs",
    quote: "HackKentucky gave us the clarity we needed to reposition our product. We left with a refined story, a pilot partner, and investors following up the next week.",
    initials: "AP"
  },
  {
    name: "Miguel Sanders",
    role: "CTO, BeaconPay",
    quote: "The mentor pods were unreal. Having engineers, operators, and GTM leaders in the same corner accelerated decisions we had been stuck on for months.",
    initials: "MS"
  },
  {
    name: "Leila Zhou",
    role: "Principal, Horizon Ventures",
    quote: "We scout hackathons globally and HackKentucky stands out for founder quality and polish. Teams are ready to pitch, not just demo.",
    initials: "LZ"
  }
]

const sponsors = ["Chainlink", "TRON", "BNB", "OKX", "Filecoin", "Polygon", "AWS Activate", "Muzzle"]

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
        {/* <HeroSection /> */}
        {/* <ProgramSection /> */}
        {/* <ScheduleSection /> */}
        {/* <TestimonialsSection /> */}
        {/* <SponsorsSection /> */}
        <FinalCallout />
      </main>
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#090909]/80">
      <div className="pointer-events-none absolute inset-0 opacity-30" style={gridPattern} />
      <div className="relative grid gap-[1px] bg-white/10 sm:grid-cols-6 lg:grid-cols-12">
        <div className="order-2 flex flex-col justify-between bg-[#050505]/95 p-6 sm:order-1 sm:col-span-6 lg:col-span-6 lg:p-10">
          <div>
            <span className="text-[11px] uppercase tracking-[0.5em] text-zinc-500">November 7 – 9 • Louisville, KY</span>
            <h1 className="mt-4 text-4xl font-atamiga uppercase leading-tight tracking-wide text-white md:text-5xl">
              HackKentucky
            </h1>
            <p className="mt-6 max-w-xl text-sm text-zinc-300 md:text-base" style={{ fontFamily: "bc-novatica-cyr" }}>
              A three-day founder sprint blending world-class mentorship, venture readiness, and boundary-pushing builds. Build with Kentucky&apos;s top talent and leave with a launch plan.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-4">
              <Link href="https://luma.com/hackkentucky" target="_blank" rel="noreferrer">
                <Button
                  className="bg-orange-500 px-8 py-6 text-[13px] font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-orange-500/90"
                  style={{ clipPath: CUT_CORNER, fontFamily: "bc-novatica-cyr" }}
                >
                  Register Now
                </Button>
              </Link>
              <Link
                href="#programs"
                className="flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-zinc-400 transition hover:text-white"
                style={{ fontFamily: "bc-novatica-cyr" }}
              >
                View Programs
                <span className="text-lg">↗</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 p-4 backdrop-blur-sm"
                  style={{ fontFamily: "bc-novatica-cyr", backgroundColor: "rgba(255,255,255,0.02)" }}
                >
                  <div className="text-[11px] uppercase tracking-[0.3em] text-zinc-500">{stat.label}</div>
                  <div className="mt-2 text-3xl font-semibold text-white">{stat.value}</div>
                  <p className="mt-2 text-xs text-zinc-400">{stat.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="order-1 hidden items-center justify-center bg-[#050505]/95 p-6 sm:flex sm:col-span-3 lg:col-span-3">
          <div className="aspect-square w-full max-w-md">
            {/* <Sparkle/> */}
          </div>
        </div>

        <div className="order-3 bg-[#050505]/95 p-6 sm:col-span-3 lg:col-span-3 lg:p-10">
          <div className="flex h-full flex-col justify-between" style={{ fontFamily: "bc-novatica-cyr" }}>
            <div>
              <span className="text-[11px] uppercase tracking-[0.4em] text-orange-400">Signal</span>
              <h2 className="mt-6 text-2xl font-semibold uppercase text-white">Build different</h2>
              <p className="mt-4 text-sm text-zinc-400">
                Expect precision scheduling, deliberate amplification, and relentless support designed with venture-grade rigor.
              </p>
            </div>
            <div className="mt-6 text-xs uppercase tracking-[0.3em] text-zinc-500">→ Beyond the weekend</div>
          </div>
        </div>

        <div className="col-span-full grid gap-[1px] bg-white/10 sm:grid-cols-3">
          {featureHighlights.map((feature) => (
            <div
              key={feature.id}
              className="bg-[#050505]/95 p-6 md:p-8"
              style={{ fontFamily: "bc-novatica-cyr" }}
            >
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-orange-400">
                <span className="h-2 w-2 rounded-sm bg-orange-400" />
                {feature.title}
              </div>
              <h3 className="mt-6 text-xl font-semibold uppercase text-white">{feature.subtitle}</h3>
              <p className="mt-4 text-sm text-zinc-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ProgramSection() {
  return (
    <section id="programs" className="flex flex-col gap-8">
      <header className="flex flex-col gap-2" style={{ fontFamily: "bc-novatica-cyr" }}>
        <span className="text-[11px] uppercase tracking-[0.4em] text-orange-400">Tracks</span>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="text-3xl font-semibold uppercase leading-none text-white md:text-4xl" >
            Programs engineered for velocity
          </h2>
          <p className="max-w-xl text-sm text-zinc-400">
            Choose the focus that matches your stage. Each track layers custom programming, tooling, and partner access so you can validate, scale, or explore frontier tech faster.
          </p>
        </div>
      </header>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {programTracks.map((track) => (
          <div
            key={track.title}
            className="group relative overflow-hidden border border-white/10 bg-[#080808] p-8 transition-transform duration-300 hover:-translate-y-1 hover:border-orange-500/60"
            style={{ clipPath: CUT_CORNER, fontFamily: "bc-novatica-cyr" }}
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-30"
                 style={{ background: "linear-gradient(135deg, rgba(255,112,0,0.15), transparent 60%)" }}
            />
            <div className="relative flex items-center justify-between text-xs uppercase tracking-[0.4em]">
              <span className="text-orange-400">{track.label}</span>
              <span className="text-zinc-600">→</span>
            </div>
            <h3 className="relative mt-6 text-2xl font-semibold uppercase text-white">{track.title}</h3>
            <p className="relative mt-4 text-sm text-zinc-400">{track.description}</p>
            <div className="relative mt-8 grid grid-cols-2 gap-4 text-xs">
              {track.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-xl border border-white/10 p-4"
                     style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
                  <div className="text-zinc-500 uppercase tracking-[0.3em]">{metric.label}</div>
                  <div className="mt-2 text-lg font-semibold text-white">{metric.value}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ScheduleSection() {
  return (
    <section className="flex flex-col gap-8">
      <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between" style={{ fontFamily: "bc-novatica-cyr" }}>
        <div>
          <span className="text-[11px] uppercase tracking-[0.4em] text-orange-400">Weekend arc</span>
          <h2 className="mt-2 text-3xl font-semibold uppercase text-white md:text-4xl">Designed like an accelerator sprint</h2>
        </div>
        <p className="max-w-lg text-sm text-zinc-400">
          Every window maximizes builder output without sacrificing clarity. Expect intentional pacing, curated rooms, and focus blocks that protect momentum.
        </p>
      </header>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {scheduleMilestones.map((milestone) => (
          <div
            key={milestone.day}
            className="relative overflow-hidden border border-white/10 bg-[#070707] p-6"
            style={{ clipPath: CUT_CORNER, fontFamily: "bc-novatica-cyr" }}
          >
            <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
            <div className="text-xs uppercase tracking-[0.4em] text-zinc-500">{milestone.day}</div>
            <h3 className="mt-4 text-lg font-semibold uppercase text-white">{milestone.headline}</h3>
            <p className="mt-3 text-sm text-zinc-400">{milestone.detail}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function TestimonialsSection() {
  return (
    <section className="flex flex-col gap-8">
      <header className="grid gap-6 sm:grid-cols-3" style={{ fontFamily: "bc-novatica-cyr" }}>
        <div className="sm:col-span-2">
          <span className="text-[11px] uppercase tracking-[0.4em] text-orange-400">Voices</span>
          <h2 className="mt-2 text-3xl font-semibold uppercase text-white md:text-4xl">Don&apos;t take our word for it</h2>
        </div>
        <div className="flex items-start justify-end">
          <div className="relative h-20 w-20 rounded-[18px] border border-white/10 bg-[#0c0c0c]">
            <div className="absolute left-3 top-3 h-4 w-4 rounded-full border border-white/20" />
            <div className="absolute right-4 bottom-3 h-10 w-10 rounded-full border border-white/10 bg-gradient-to-br from-white/40 via-transparent to-transparent" />
          </div>
        </div>
      </header>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            className="flex h-full flex-col gap-6 border border-white/10 bg-[#070707] p-6"
            style={{ clipPath: CUT_CORNER, fontFamily: "bc-novatica-cyr" }}
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-[14px] border border-white/10 bg-gradient-to-br from-white/15 via-transparent to-transparent text-sm font-semibold text-white">
                {testimonial.initials}
              </div>
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white">{testimonial.name}</div>
                <div className="text-[11px] uppercase tracking-[0.3em] text-zinc-500">{testimonial.role}</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-zinc-300">“{testimonial.quote}”</p>
          </div>
        ))}
      </div>
    </section>
  )
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function SponsorsSection() {
  return (
    <section className="flex flex-col gap-6">
      <header className="flex flex-col gap-2" style={{ fontFamily: "bc-novatica-cyr" }}>
        <span className="text-[11px] uppercase tracking-[0.4em] text-orange-400">Partners</span>
        <h2 className="text-3xl font-semibold uppercase text-white md:text-4xl">Fueling the build floor</h2>
      </header>
      <div
        className="overflow-hidden rounded-[28px] border border-white/10 bg-[#080808]/80"
        style={{ clipPath: CUT_CORNER }}
      >
        <div className="grid grid-cols-2 gap-[1px] bg-white/10 sm:grid-cols-4">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor}
              className="flex h-28 items-center justify-center bg-[#050505] text-lg font-semibold text-white"
              style={{ fontFamily: "bc-novatica-cyr" }}
            >
              {sponsor}
            </div>
          ))}
        </div>
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
