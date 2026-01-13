"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"


export default function HomePage() {
  const [mounted, setMounted] = useState(false)
  const [showInfo, setShowInfo] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="w-screen h-screen bg-[#101012] overflow-hidden">
      <div className="flex flex-col h-full w-full max-w-full">
        {/* Top section (h1) - takes half screen, centered on mobile, left-aligned on desktop */}
        <div className="flex items-center justify-center md:justify-start h-1/2 w-full md:pl-20">
          <h1 className="text-zinc-200 text-[10dvh] md:text-[20dvh] lg:text-[30dvh] whitespace-nowrap">Σ(°ロ°)!!!</h1>
        </div>

        {/* Bottom section (text content) - takes half screen, always left-aligned */}
        <div className="flex flex-col h-1/2 w-full min-w-0 px-4 md:px-20 md:pt-8 overflow-y-auto">
          <div className="w-full min-w-0">
            <h2 className="text-zinc-300 text-base md:text-3xl lg:text-5xl ">
              hackkentucky spring 2026 has been cancelled
            </h2>
            <p className="text-zinc-300 text-sm md:text-base lg:text-lg mt-1 ">
              see you in fall 2026.
            </p>
          </div>

          <Button 
            variant="outline" 
            size="sm" 
            className="bg-transparent border-zinc-300 text-zinc-300 hover:bg-zinc-700 hover:text-zinc-100 mt-4 shrink-0 max-w-fit"
            onClick={() => setShowInfo(!showInfo)}
          >
            {showInfo ? "Show Less" : "Learn More"}
          </Button>

          {showInfo && (
            <Card className="mt-4 bg-zinc-900/50 border-zinc-700 w-full md:max-w-2xl shrink-0">
              <CardContent className="pt-6">
                <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
                  "Due to staffing and funding, we're unable to execute on HackKentucky Spring 2026. We look forward to bringing this back in the Fall."  
                  <Link href="https://kycombinator.beehiiv.com/p/the-distill-locking-in?utm_source=kycombinator.beehiiv.com&utm_medium=newsletter&utm_campaign=the-distill-locking-in" target="_blank" rel="noreferrer" className="text-orange-500 hover:text-orange-400 ml-2">
                    See Blog <ArrowUpRight className="w-4 h-4 inline-block mb-0.5" />
                  </Link>
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}