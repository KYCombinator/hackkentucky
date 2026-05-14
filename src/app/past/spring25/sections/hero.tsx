"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-purple-300 to-background dark:from-purple-700/50 dark:to-background">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Stars */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              backgroundColor: 'white',
              borderRadius: '50%',
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
        
        {/* Light Beams */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="beam"
            style={{
              left: `${Math.random() * 100}%`,
              top: '0',
              width: '1px',
              height: '100vh',
              transform: `rotate(${Math.random() * 360}deg)`,
              animationDuration: `${20 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * -20}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
         <p className="text-lg md:text-xl mb-2 text-purple-900 dark:text-purple-300">
          <Link href="https://www.kstc.org" target="_blank" className="hover:text-purple-700 dark:hover:text-purple-400">KSTC</Link> x <Link href="https://www.kycombinator.com" target="_blank" className="hover:text-purple-700 dark:hover:text-purple-400">KYCombinator</Link> x <Link href="https://www.storylouisville.com" target="_blank" className="hover:text-purple-700 dark:hover:text-purple-400">Story</Link>
         </p>
        <h1 className="text-7xl md:text-9xl font-bold mb-6 tracking-tighter text-purple-900 dark:text-white glow">
          Hack Kentucky
          <br />
          <span className="text-purple-500 dark:text-purple-300">2025</span>
        </h1>
        <p className="text-3xl md:text-4xl text-purple-900 dark:text-white mb-4 glow">
          02.21 - 02.23
        </p>
        <p className="text-xl md:text-2xl text-purple-900 dark:text-white mb-12">
          Story, 828 East Market Street, Louisville, KY
        </p>
        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="flex flex-row gap-4">
            <Button
              size="lg"
              className="bg-purple-700 hover:bg-purple-600 text-white dark:bg-purple-600 dark:hover:bg-purple-500 font-semibold"
              onClick={() => {
                document.getElementById('students-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              For Participants
            </Button>
            <Button
              size="lg"
              className="bg-purple-700 hover:bg-purple-600 text-white dark:bg-purple-600 dark:hover:bg-purple-500 font-semibold"
              onClick={() => {
                document.getElementById('employers-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              For Employers
            </Button>
          </div>
          <div className="flex flex-col gap-4">
            <Button asChild size="lg" variant="outline" className="bg-purple-100 text-purple-900 hover:bg-purple-200 border-purple-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:border-white">
              <Link href="https://luma.com/hackkentucky" target="_blank">
                Register Now
              </Link>
            </Button>
            <Button asChild size="lg" variant="link" className="text-purple-700 hover:text-purple-600 dark:text-purple-300 dark:hover:text-purple-400">
              <Link href="https://join.slack.com/t/hack-kentucky/shared_invite/zt-2xabg2z38-cVGqVdXPqN2H7_tlpH9TVA" target="_blank">
                <div className="flex items-center gap-2">
                  <svg fill="currentColor" height="16" width="16" viewBox="0 0 122.8 122.8">
                    <path d="M25.8 77.6c0 7.1-5.8 12.9-12.9 12.9S0 84.7 0 77.6s5.8-12.9 12.9-12.9h12.9v12.9zm6.5 0c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V77.6z" />
                    <path d="M45.2 25.8c-7.1 0-12.9-5.8-12.9-12.9S38.1 0 45.2 0s12.9 5.8 12.9 12.9v12.9H45.2zm0 6.5c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H12.9C5.8 58.1 0 52.3 0 45.2s5.8-12.9 12.9-12.9h32.3z" />
                    <path d="M97 45.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9-5.8 12.9-12.9 12.9H97V45.2zm-6.5 0c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V12.9C64.7 5.8 70.5 0 77.6 0s12.9 5.8 12.9 12.9v32.3z" />
                    <path d="M77.6 97c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9-12.9-5.8-12.9-12.9V97h12.9zm0-6.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H77.6z" />
                  </svg>
                  Join Slack
                </div>
              </Link>
            </Button>
            <Button asChild size="lg" variant="link" className="text-purple-700 hover:text-purple-600 dark:text-purple-300 dark:hover:text-purple-400">
              <Link href="/spring25/winners">
                <div className="flex items-center gap-2">
                  <svg fill="currentColor" height="16" width="16" viewBox="0 0 24 24">
                    <path d="M12 6.76l1.379 4.246h4.465l-3.612 2.625 1.379 4.246L12 15.252l-3.611 2.625 1.379-4.246-3.612-2.625h4.465L12 6.76zm0-6.472L9.167 7.252H2.499l5.416 3.936L5.083 18.14 12 13.084l6.917 5.056-2.832-6.952 5.416-3.936h-6.668L12 .288z"/>
                  </svg>
                  View Winners
                </div>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

