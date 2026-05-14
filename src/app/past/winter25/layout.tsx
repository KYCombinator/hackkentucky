import type { Metadata } from "next"
import { Cabin } from 'next/font/google'
import { SiteNavigation } from "@/components/site-navigation"

const cabin = Cabin({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hack Kentucky Winter 2025",
  description: "Kentucky's Premier Winter Hackathon Event - Join us for 24 hours of coding, learning, and building with top tech companies",
  keywords: ["hackathon", "kentucky", "programming", "coding", "tech", "students", "winter"],
  authors: [{ name: "KYC" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hackkentucky.com/winter25",
    siteName: "Hack Kentucky Winter 2025",
    title: "Hack Kentucky Winter 2025",
    description: "Kentucky's Premier Winter Hackathon Event - Join us for 24 hours of coding, learning, and building with top tech companies",
    images: [{
      url: '/hackkentuckyposter.jpg',
      width: 1200,
      height: 630,
      alt: "Hack Kentucky Winter 2025"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hack Kentucky Winter 2025",
    description: "Kentucky's Premier Winter Hackathon Event",
    images: ['/hackkentuckyposter.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function Winter25Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={cabin.className}>
      <SiteNavigation />
      {children}
    </div>
  )
} 