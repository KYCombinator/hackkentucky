import type { Metadata } from "next"
import { Space_Grotesk } from 'next/font/google'
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { PageTransition } from "@/components/page-transition"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { TechBackground } from "@/components/tech-background"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })
export const metadata: Metadata = {
  title: "Hack Kentucky 2025",
  description: "Kentucky's Premier Hackathon Event - Join us for 48 hours of coding, learning, and building with top tech companies",
  keywords: ["hackathon", "kentucky", "programming", "coding", "tech", "students"],
  authors: [{ name: "KYCombinator" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hackkentucky.com",
    siteName: "Hack Kentucky 2025",
    title: "Hack Kentucky 2025",
    description: "Kentucky's Premier Hackathon Event - Join us for 48 hours of coding, learning, and building with top tech companies",
    images: [{
      url: '/hackkentuckyposter.jpg',
      width: 1200,
      height: 630,
      alt: "Hack Kentucky 2025"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hack Kentucky 2025",
    description: "Kentucky's Premier Hackathon Event",
    images: ['/hackkentuckyposter.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <TechBackground />
          <SiteHeader />
          <PageTransition>
            {children}
          </PageTransition>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}

