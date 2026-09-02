"use client"

import { useEffect } from "react"
import Lenis from "lenis"

// Lenis smooths the *native* scroll instead of transforming a wrapper, so
// fixed elements, cross-page hash navigation, and the browser's own scroll
// restoration all keep working. Same-page anchor clicks are routed through
// Lenis so they glide instead of jumping.
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.09,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.4,
    })

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      const anchor = (event.target as Element).closest?.("a[href*='#']") as HTMLAnchorElement | null
      if (!anchor || anchor.target === "_blank") return
      const url = new URL(anchor.getAttribute("href") ?? "", window.location.href)
      if (url.origin !== window.location.origin || url.pathname !== window.location.pathname) return
      const target = url.hash ? document.getElementById(decodeURIComponent(url.hash.slice(1))) : null
      if (!target) return
      event.preventDefault()
      lenis.scrollTo(target, { offset: 0 })
      history.pushState(null, "", url.hash)
    }

    document.addEventListener("click", onClick)
    return () => {
      document.removeEventListener("click", onClick)
      lenis.destroy()
    }
  }, [])

  return null
}
