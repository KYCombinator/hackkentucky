"use client"

import { Navigation, NavigationBrand, NavigationActions, NavigationMenu, NavigationMenuItem } from "@/components/ui/navigation"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
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

    // Create timeline for flickering animation - more subtle and quick
    const tl = gsap.timeline({ paused: true })
    
    //at ramdom flicker not in the same order
    const randomOrder = [...chars].sort(() => Math.random() - 0.5)
    randomOrder.forEach((char, index) => {
      tl.to(char, {
        duration: 0.03,
        opacity: 0.7,
        ease: "power2.inOut",
        delay: index * 0.008
      }, 0)
      .to(char, {
        duration: 0.03,
        opacity: 1,
        ease: "power2.inOut",
        delay: index * 0.008 + 0.04
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <div ref={navRef} className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/10">
      <Navigation className="bg-transparent">
        <NavigationBrand>
          <div className="flex items-center gap-2">
            <Link href="/" onClick={closeMobileMenu}>
              <div className="px-4 py-2 bg-transparent text-white font-bold relative font-atamiga">
                HCK KNTKY
                <div className="absolute top-0 right-0 w-2 h-2"
                     style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}></div>
              </div>
            </Link>
          </div>
        </NavigationBrand>
        
        {/* Desktop Menu */}
        <div className="flex-1 flex justify-center">
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuItem>
              <Link href="/#rules" className="relative">
                <div className="px-3 py-2 text-white text-sm">
                  <FlickerText 
                    className=""
                    style={{ fontFamily: 'bc-novatica-cyr', fontWeight: '400' }}
                  >
                    Rules
                  </FlickerText>
                </div>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/#schedule" className="relative">
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
              <Link href="/#sponsors" className="relative">
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
              <Link href="/logistics" className="relative">
                <div className="px-3 py-2 text-white text-sm">
                  <FlickerText 
                    className=""
                    style={{ fontFamily: 'bc-novatica-cyr', fontWeight: '400' }}
                  >
                    Logistics
                  </FlickerText>
                </div>
              </Link>
            </NavigationMenuItem>
          </NavigationMenu>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Register Button - Hidden on mobile, visible on desktop */}
          <NavigationActions className="hidden md:flex">
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

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-white hover:text-orange-400 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </Navigation>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/98 border-t border-white/10">
          <nav className="flex flex-col py-4 px-6 space-y-2">
            <Link 
              href="/#rules" 
              onClick={closeMobileMenu}
              className="py-3 text-white hover:text-orange-400 transition-colors text-sm"
              style={{ fontFamily: 'bc-novatica-cyr', fontWeight: '400' }}
            >
              Rules
            </Link>
            <Link 
              href="/#schedule" 
              onClick={closeMobileMenu}
              className="py-3 text-white hover:text-orange-400 transition-colors text-sm"
              style={{ fontFamily: 'bc-novatica-cyr', fontWeight: '400' }}
            >
              Schedule
            </Link>
            <Link 
              href="/#sponsors" 
              onClick={closeMobileMenu}
              className="py-3 text-white hover:text-orange-400 transition-colors text-sm"
              style={{ fontFamily: 'bc-novatica-cyr', fontWeight: '400' }}
            >
              Sponsors
            </Link>
            <Link 
              href="/logistics" 
              onClick={closeMobileMenu}
              className="py-3 text-white hover:text-orange-400 transition-colors text-sm"
              style={{ fontFamily: 'bc-novatica-cyr', fontWeight: '400' }}
            >
              Logistics
            </Link>
            <Link 
              href="https://luma.com/hackkentucky" 
              target="_blank"
              onClick={closeMobileMenu}
              className="mt-4"
            >
              <div className="px-4 py-3 bg-orange-500 text-white text-sm font-bold text-center hover:bg-orange-600 transition-all"
                   style={{ 
                     clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
                     fontFamily: 'bc-novatica-cyr',
                     fontWeight: '600'
                   }}>
                REGISTER
              </div>
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
} 