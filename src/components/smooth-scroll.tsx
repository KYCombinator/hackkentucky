"use client"

import type { PropsWithChildren } from "react"
import { useEffect, useLayoutEffect } from "react"
import { usePathname } from "next/navigation"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollSmoother } from "gsap/ScrollSmoother"

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

export function SmoothScroll({ children }: PropsWithChildren) {
  const pathname = usePathname()

  useLayoutEffect(() => {
    const media = gsap.matchMedia()

    media.add("(prefers-reduced-motion: no-preference)", () => {
      const smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1,
        smoothTouch: false,
        effects: true,
      })

      // the wrapper is position:fixed, so the browser can't jump to anchors
      // inside it — land on an initial hash manually
      if (window.location.hash) {
        const target = document.getElementById(window.location.hash.slice(1))
        if (target) smoother.scrollTo(target, false)
      }

      return () => smoother.kill()
    })

    return () => media.revert()
  }, [])

  // same-page anchor clicks must go through the smoother for the same reason
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      const anchor = (event.target as Element).closest?.("a[href*='#']")
      if (!anchor || anchor.getAttribute("target") === "_blank") return
      const url = new URL(anchor.getAttribute("href") ?? "", window.location.href)
      if (url.origin !== window.location.origin || url.pathname !== window.location.pathname) return
      const smoother = ScrollSmoother.get()
      const target = url.hash ? document.getElementById(decodeURIComponent(url.hash.slice(1))) : null
      if (!smoother || !target) return
      event.preventDefault()
      smoother.scrollTo(target, true)
      history.pushState(null, "", url.hash)
    }

    document.addEventListener("click", onClick)
    return () => document.removeEventListener("click", onClick)
  }, [])

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const smoother = ScrollSmoother.get()
      if (!smoother) return
      // pick up data-speed/data-lag elements mounted by the new route
      smoother.effects("[data-speed], [data-lag]")
      ScrollTrigger.refresh()
    })

    return () => cancelAnimationFrame(frame)
  }, [pathname])

  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">{children}</div>
      </div>
      <div id="smooth-overlays" />
    </>
  )
}
