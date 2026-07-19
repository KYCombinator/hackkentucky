import type { Metadata } from "next"
import { Cabin } from 'next/font/google'
import { SmoothScroll } from "@/components/smooth-scroll"
import "./globals.css"

const cabin = Cabin({ subsets: ["latin"] })
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/ywk2uab.css" />
      </head>
      <body className={cabin.className}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
