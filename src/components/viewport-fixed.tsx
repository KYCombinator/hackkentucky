"use client"

import type { PropsWithChildren } from "react"
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"

export function ViewportFixed({ children }: PropsWithChildren) {
  const [target, setTarget] = useState<HTMLElement | null>(null)

  useEffect(() => {
    setTarget(document.getElementById("smooth-overlays"))
  }, [])

  return target ? createPortal(children, target) : null
}
