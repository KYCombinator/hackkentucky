"use client"

import { Ripple } from "@/components/ui/shadcn-io/ripple"
import { SiteNavigation } from "@/components/site-navigation"

 const CUT_CORNER = "polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px))"

 const gridPattern = {
   backgroundImage:
     "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
   backgroundSize: "70px 70px"
 }

 const quickStartHighlights = [
   {
     title: "MVP in 1 Hour",
     lines: [
       "Ship the smallest, most basic version of your final product within the first hour.",
       "Building Slack? Have a web app that lets you create a channel and post a message within 1–2 hours.",
       "Skip login, branding, and scale—make the core feature work."
     ]
   },
   {
     title: "Code Templates",
     lines: [
       "Boilerplate code will get you to traction faster.",
       "If you're using AI or template engines, let them handle the non-innovative work like auth flows."
     ]
   }
 ] as const

 const mvpContrast = {
   not: [
     "Polishing every screen, crafting bespoke auth, or stressing scale before anything works.",
     "Packing weeks of roadmap into a single weekend sprint."
   ],
   like: [
     "A clickable demo that proves the single core workflow end-to-end.",
     "A simple story you can show judges in under two minutes."
   ]
 } as const

 const buildPrinciples = [
   {
     title: "Speed Over All",
     body:
       "Prioritize speed to production when setting up your environment and choosing your stack. Now isn't the moment to learn Docker from scratch. If you're brand new, pick an easy, hacky stack—AppScript with Google Sheets counts."
   },
   {
     title: "Focus",
     body:
       "Make the problem narrow and the solution technically simple. Ship something small, specific, and demo-ready."
   }
 ] as const

 const hackingSteps = [
   {
     title: "Start Fast, Decide Faster",
     description: "Pick an idea in 15 minutes—don't overthink it. The sooner you decide, the more time you have to build."
   },
   {
     title: "Build a Demo-First MVP",
     description: "Prioritize something you can show, not just describe. Skip perfect architecture—make it work first."
   },
   {
     title: "Ship Small, Ship Often",
     description: "Get a working version ASAP, even if it's ugly. Frequent commits and small wins keep momentum high."
   },
   {
     title: "Automate the Boring Stuff",
     description: "Use APIs, AI tools, and no-code where you can. Don't reinvent the wheel—move fast."
   },
   {
     title: "Divide & Conquer",
     description: "If someone is stuck, move on or swap tasks. Time is the enemy—don't stall."
   },
   {
     title: "Sleep Optional, Attitude Mandatory",
     description: "Drink coffee, hydrate, and keep the vibes high. Momentum beats burnout."
   },
   {
     title: "The Best Hack Is a Working Hack",
     description: "It doesn't need to be revolutionary. If it works and looks impressive, you're winning."
   },
   {
     title: "Have Fun & Break Things Responsibly",
     description: "Hackathons are chaos. Embrace it, build something cool, make new friends, and enjoy the ride."
   }
 ] as const

 export default function HowToHackPage() {
   return (
     <div className="min-h-screen bg-black text-white">
       <SiteNavigation />
       <HeroSection />
       <main className="relative mx-auto flex max-w-5xl flex-col gap-20 px-6 py-16 md:px-10 lg:px-0">
         <QuickStartSection />
         <ContrastSection />
         <PrinciplesSection />
         <StepsSection />
         <FinalReminder />
       </main>
     </div>
   )
 }

 function HeroSection() {
   return (
     <section className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden border-b border-white/10 px-6 py-20 md:px-10">
      <Ripple
        numCircles={9}
        className="opacity-60"
        style={{ ["--foreground" as string]: "0 0% 100%" }}
      />
       <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
       <div
         className="relative z-10 flex max-w-3xl flex-col items-center gap-6 text-center"
         style={{ fontFamily: "bc-novatica-cyr" }}
       >
         <span className="text-[11px] uppercase tracking-[0.4em] text-orange-400">
           Tips for a good hack
         </span>
         <h1 className="text-4xl uppercase tracking-[0.15em] md:text-6xl font-atamiga">
           How to win a hackathon
         </h1>
         <p className="max-w-xl text-sm text-zinc-300 md:text-base">
           Build the demo judges remember: ship fast, show the core workflow, and keep momentum high.
         </p>
       </div>
     </section>
   )
 }

 function QuickStartSection() {
   return (
     <section className="flex flex-col gap-8" style={{ fontFamily: "bc-novatica-cyr" }}>
       <header className="flex flex-col gap-2">
         <span className="text-[11px] uppercase tracking-[0.4em] text-orange-400">First hour plan</span>
         <h2 className="text-3xl font-semibold uppercase md:text-4xl">
           Ship something real—now
         </h2>
       </header>
       <div className="grid gap-6 md:grid-cols-2">
         {quickStartHighlights.map((card) => (
           <div
             key={card.title}
             className="border border-white/15 bg-[#080808] p-6 md:p-8"
             style={{ clipPath: CUT_CORNER }}
           >
             <h3 className="text-xl uppercase tracking-[0.2em] text-white">{card.title}</h3>
             <ul className="mt-5 space-y-3 text-sm leading-relaxed text-zinc-300">
               {card.lines.map((line) => (
                 <li key={line} className="flex gap-3">
                   <span className="mt-1 text-orange-400">→</span>
                   <span>{line}</span>
                 </li>
               ))}
             </ul>
           </div>
         ))}
       </div>
     </section>
   )
 }

 function ContrastSection() {
   return (
     <section className="flex flex-col gap-6" style={{ fontFamily: "bc-novatica-cyr" }}>
       <header className="flex flex-col gap-2">
         <span className="text-[11px] uppercase tracking-[0.4em] text-orange-400">How to build a minimum viable product</span>
         <h2 className="text-3xl font-semibold uppercase md:text-4xl">Demo-first mindset</h2>
       </header>
       <div
         className="border border-orange-500/30 bg-black/60 p-6 md:p-8"
         style={{ clipPath: CUT_CORNER }}
       >
         <div className="grid gap-6 md:grid-cols-2 md:gap-10">
           <div className="flex flex-col gap-4">
             <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-orange-500">
               <span className="h-2 w-2 rounded-sm bg-orange-500" />
               Not like this
             </div>
             <ul className="space-y-3 text-sm leading-relaxed text-zinc-300">
               {mvpContrast.not.map((item) => (
                 <li key={item} className="flex gap-3">
                   <span className="mt-1 text-orange-500">✕</span>
                   <span>{item}</span>
                 </li>
               ))}
             </ul>
           </div>
           <div className="flex flex-col gap-4">
             <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-emerald-400">
               <span className="h-2 w-2 rounded-sm bg-emerald-400" />
               Like this
             </div>
             <ul className="space-y-3 text-sm leading-relaxed text-zinc-300">
               {mvpContrast.like.map((item) => (
                 <li key={item} className="flex gap-3">
                   <span className="mt-1 text-emerald-400">✓</span>
                   <span>{item}</span>
                 </li>
               ))}
             </ul>
           </div>
         </div>
       </div>
     </section>
   )
 }

 function PrinciplesSection() {
   return (
     <section className="flex flex-col gap-6" style={{ fontFamily: "bc-novatica-cyr" }}>
       <header className="flex flex-col gap-2">
         <span className="text-[11px] uppercase tracking-[0.4em] text-orange-400">Build philosophy</span>
         <h2 className="text-3xl font-semibold uppercase md:text-4xl">Operate like an elite hacker</h2>
       </header>
       <div className="grid gap-6 md:grid-cols-2">
         {buildPrinciples.map((principle) => (
           <div
             key={principle.title}
             className="border border-white/12 bg-[#070707] p-6 md:p-7"
             style={{ clipPath: CUT_CORNER }}
           >
             <h3 className="text-lg uppercase tracking-[0.2em] text-white">{principle.title}</h3>
             <p className="mt-4 text-sm leading-relaxed text-zinc-300">
               {principle.body}
             </p>
           </div>
         ))}
       </div>
     </section>
   )
 }

 function StepsSection() {
   return (
     <section className="flex flex-col gap-6" style={{ fontFamily: "bc-novatica-cyr" }}>
       <header className="flex flex-col gap-2">
         <span className="text-[11px] uppercase tracking-[0.4em] text-orange-400">Hacking a hackathon</span>
         <h2 className="text-3xl font-semibold uppercase md:text-4xl">Momentum playbook</h2>
       </header>
       <ol className="space-y-4">
         {hackingSteps.map((step, index) => (
           <li
             key={step.title}
             className="rounded-[24px] border border-white/10 bg-[#090909] p-6 md:p-7"
             style={{ clipPath: CUT_CORNER }}
           >
             <div className="flex flex-col gap-3 md:flex-row md:items-start md:gap-6">
               <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-orange-400/40 text-sm uppercase tracking-[0.2em] text-orange-400">
                 {String(index + 1).padStart(2, "0")}
               </div>
               <div className="flex flex-col gap-3">
                 <h3 className="text-lg uppercase tracking-[0.2em] text-white">{step.title}</h3>
                 <p className="text-sm leading-relaxed text-zinc-300">{step.description}</p>
               </div>
             </div>
           </li>
         ))}
       </ol>
     </section>
   )
 }

 function FinalReminder() {
   return (
     <section
       className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#080808] p-10 text-center"
       style={{ fontFamily: "bc-novatica-cyr" }}
     >
       <div className="pointer-events-none absolute inset-0 opacity-25" style={gridPattern} />
       <div className="relative flex flex-col items-center gap-4">
         <span className="text-[11px] uppercase tracking-[0.4em] text-orange-400">The winning formula</span>
         <h2 className="max-w-3xl text-3xl uppercase tracking-[0.1em] font-semibold text-white md:text-4xl">
           Working demo + great story + high energy team
         </h2>
         <p className="max-w-xl text-sm text-zinc-300 md:text-base">
           Nail the core flow, show it with confidence, and keep the vibes high. That&apos;s HackKentucky gold.
         </p>
       </div>
     </section>
   )
 }

