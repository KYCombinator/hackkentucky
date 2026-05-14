"use client"

import Spring26 from "@/components/spring26"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"


export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
      <div className="flex w-full h-screen">
          {/* Hero Section */}
          <section
            className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden"
          >
            {mounted ? (
              <div className="pointer-events-none absolute inset-0">
                <Spring26 />
              </div>
            ) : null}
            <div className="pointer-events-auto absolute inset-0 flex flex-col items-center justify-center mt-[45vh]">
              <p className="text-[13px] sm:text-[18px] font-semibold uppercase tracking-[0.3em] text-white mb-4">
                Feb 20 - 22, 2026
              </p>
              <Link href="https://luma.com/rwwa0fil" target="_blank" rel="noreferrer">
                <Button
                  variant="accento"
                  size="lg"
                  className="bg-none border-none text-[11px] font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-none hover:text-sky-300"
                >
                  Register Now
                </Button>
              </Link>
            </div>
      </section>
    </div>
  );
}