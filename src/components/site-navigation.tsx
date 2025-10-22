"use client"

import { Navigation, NavigationBrand, NavigationActions } from "@/components/ui/navigation"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"

// Component for individual flickering text
function FlickerText({ children, className, style }: { children: string, className?: string, style?: React.CSSProperties }) {
  const textRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<gsap.core.Timeline | null>(null)

  useEffect(() => {
    if (!textRef.current) return

    const text = textRef.current
    const chars = children.split('').map((char) => {
      const span = document.createElement('span')
      span.textContent = char === ' ' ? '\u00A0' : char // Use non-breaking space
      span.style.display = 'inline-block'
      span.style.opacity = '1'
      return span
    })

    // Clear existing content and add character spans
    text.innerHTML = ''
    chars.forEach(span => text.appendChild(span))

    // Create timeline for flickering animation
    const tl = gsap.timeline({ paused: true })
    
    //at ramdom flicker not in the same order
    const randomOrder = [...chars].sort(() => Math.random() - 0.5)
    randomOrder.forEach((char, index) => {
      tl.to(char, {
        duration: 0.01,
        opacity: 0,
        ease: "power2.inOut",
        delay: index * 0.02
      }, 0)
      .to(char, {
        duration: 0.01,
        opacity: 1,
        ease: "power2.inOut",
        delay: index * 0.02 + 0.1
      }, 0)
      .to(char, {
        duration: 0.01,
        opacity: 0,
        ease: "power2.inOut",
        delay: index * 0.02 + 0.2
      }, 0)
      .to(char, {
        duration: 0.01,
        opacity: 1,
        ease: "power2.inOut",
        delay: index * 0.02 + 0.25
      }, 0)
    })

    timelineRef.current = tl

    const handleMouseEnter = () => {
      if (timelineRef.current) {
        timelineRef.current.restart()
      }
    }

    const handleMouseLeave = () => {
      if (timelineRef.current) {
        timelineRef.current.pause()
        // Reset all characters to full opacity
        chars.forEach(char => {
          gsap.set(char, { opacity: 1 })
        })
      }
    }

    text.addEventListener('mouseenter', handleMouseEnter)
    text.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      text.removeEventListener('mouseenter', handleMouseEnter)
      text.removeEventListener('mouseleave', handleMouseLeave)
      if (timelineRef.current) {
        timelineRef.current.kill()
      }
    }
  }, [children])

  return (
    <div 
      ref={textRef} 
      className={className}
      style={style}
    />
  )
}

export function SiteNavigation() {
  const navRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={navRef} className="bg-black">
      <Navigation className="bg-transparent">
        <NavigationBrand>
          <div className="flex items-center gap-2">
            <Link href="/">
              <div className="px-4 py-2 bg-transparent text-white font-bold relative font-atamiga">
                HCK KNTKY
                <div className="absolute top-0 right-0 w-2 h-2"
                     style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}></div>
              </div>
            </Link>
          </div>
        </NavigationBrand>
        
        {/* <div className="flex-1 flex justify-center">
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuItem>
              <Link href="/winter25/about" className="relative">
                <div className="px-3 py-2 text-white text-sm">
                  <FlickerText 
                    className=""
                    style={{ fontFamily: 'bc-novatica-cyr', fontWeight: '400' }}
                  >
                    About
                  </FlickerText>
                </div>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/spring25/schedule" className="relative">
                <div className="px-3 py-2 text-white text-sm">
                  <FlickerText 
                    className=""
                    style={{ fontFamily: 'bc-novatica-cyr', fontWeight: '400' }}
                  >
                    Schedule
                  </FlickerText>
                </div>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/spring25/speakers" className="relative">
                <div className="px-3 py-2 text-white text-sm">
                  <FlickerText 
                    className=""
                    style={{ fontFamily: 'bc-novatica-cyr', fontWeight: '400' }}
                  >
                    Speakers
                  </FlickerText>
                </div>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/spring25/sponsors" className="relative">
                <div className="px-3 py-2 text-white text-sm">
                  <FlickerText 
                    className=""
                    style={{ fontFamily: 'bc-novatica-cyr', fontWeight: '400' }}
                  >
                    Sponsors
                  </FlickerText>
                </div>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/spring25/competition" className="relative">
                <div className="px-3 py-2 text-white text-sm">
                  <FlickerText 
                    className=""
                    style={{ fontFamily: 'bc-novatica-cyr', fontWeight: '400' }}
                  >
                    Competition
                  </FlickerText>
                </div>
              </Link>
            </NavigationMenuItem>
          </NavigationMenu>
        </div> */}
        
        <div className="flex items-center gap-6">

          <NavigationActions>
            <Link href="https://luma.com/hackkentucky" target="_blank">
              <div className="px-4 py-2 bg-orange-500 text-white text-sm font-bold relative hover:bg-orange-600 transition-all"
                   style={{ 
                     clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'
                   }}>
                <FlickerText 
                  className="inline-block"
                  style={{ fontFamily: 'bc-novatica-cyr', fontWeight: '600' }}
                >
                  REGISTER
                </FlickerText>
                <div className="absolute top-0 right-0 w-1.5 h-1.5"
                     style={{ clipPath: 'polygon(0 0, 100% 0, 0 100 %)' }}></div>
                <div className="absolute bottom-0 left-0 w-1.5 h-1.5"
                     style={{ clipPath: 'polygon(0 100%, 100% 100%, 0 0)' }}></div>
              </div>
            </Link>
          </NavigationActions>
        </div>
      </Navigation>
    </div>
  )
} 