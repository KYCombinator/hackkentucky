"use client"

import { motion, AnimatePresence } from 'motion/react'
import { usePathname } from 'next/navigation'

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.02 }}
        transition={{
          duration: 0.3,
          ease: [0.25, 0.1, 0.25, 1], // Custom easing function for a techy feel
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
