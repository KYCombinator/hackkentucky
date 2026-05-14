"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"
import { Menu, X, Linkedin } from "lucide-react"  
import { useState } from "react"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/competition", label: "Competition" },
    { href: "/projects", label: "Projects" },
    { href: "/schedule", label: "Schedule" },
    { href: "/sponsors", label: "Sponsors" },
    { href: "/about", label: "About" },
  ]

  return (
    <>
      {/* Fixed header */}
      <header className="fixed top-0 w-full bg-background z-50 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-2xl font-bold text-foreground">
                KYCombinator
              </Link>
              <Link
                href="https://www.linkedin.com/company/104791558"
                target="_blank"
                className="text-foreground/70 hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
              <ThemeToggle />
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                <Link href="https://luma.com/hackkentucky" target="_blank">
                  Sign-Up
                </Link>
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 relative z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
              <div className="fixed inset-0 top-0 left-0 w-full h-full bg-background z-40 md:hidden">
                <div className="flex flex-col items-center justify-center h-full gap-8 pt-20">
                  <Link
                    href="https://www.linkedin.com/company/104791558"
                    target="_blank"
                    className="text-foreground/70 hover:text-foreground transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-xl font-medium text-foreground/70 transition-colors hover:text-foreground"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <ThemeToggle />
                  <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                    <Link href="https://luma.com/hackkentucky" target="_blank">
                      Sign-Up
                    </Link>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  )
}
