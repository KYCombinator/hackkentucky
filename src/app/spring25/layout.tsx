import type { Metadata } from "next"
import { Space_Grotesk } from 'next/font/google'
import { ThemeProvider } from "@/app/spring25/components/theme-provider"
import { PageTransition } from "@/app/spring25/components/page-transition"
import { SiteHeader } from "@/app/spring25/components/site-header"
import { SiteFooter } from "@/app/spring25/components/site-footer"
import { TechBackground } from "@/app/spring25/components/tech-background"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })
export const metadata: Metadata = {
  title: "Hack Kentucky 2025",
  description: "Kentucky's Premier Hackathon Event - Join us for 24 hours of coding, learning, and building with top tech companies",
  keywords: ["hackathon", "kentucky", "programming", "coding", "tech", "students"],
  authors: [{ name: "KYC" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hackkentucky.com",
    siteName: "Hack Kentucky 2025",
    title: "Hack Kentucky 2025",
    description: "Kentucky's Premier Hackathon Event - Join us for 24 hours of coding, learning, and building with top tech companies",
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

