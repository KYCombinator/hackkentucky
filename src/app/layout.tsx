import type { Metadata } from "next"
import { Space_Grotesk, Space_Mono } from "next/font/google"
import { SmoothScroll } from "@/components/smooth-scroll"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["500", "700"], variable: "--font-hk-display" })
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-hk-mono" })

export const metadata: Metadata = {
  metadataBase: new URL("https://hackkentucky.com"),
  title: "Hack Kentucky Fall 2026",
  description: "Kentucky's Premier Hackathon Event - Join us September 11-12, 2026 for a 29-hour build marathon of coding, learning, and shipping with top tech companies",
  keywords: ["hackathon", "kentucky", "programming", "coding", "tech", "students"],
  authors: [{ name: "KYC" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hackkentucky.com",
    siteName: "Hack Kentucky Fall 2026",
    title: "Hack Kentucky Fall 2026",
    description: "Kentucky's Premier Hackathon Event - Join us September 11-12, 2026 for a 29-hour build marathon of coding, learning, and shipping with top tech companies",
    images: [{
      url: '/hackkentuckyposter.jpg',
      width: 1200,
      height: 644,
      alt: "Hack Kentucky Fall 2026"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hack Kentucky Fall 2026",
    description: "Kentucky's Premier Hackathon Event - September 11-12, 2026",
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
    <html lang="en" className={`${spaceGrotesk.variable} ${spaceMono.variable}`}>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  )
}
