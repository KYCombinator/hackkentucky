import type { Metadata } from "next"
import { Cabin } from 'next/font/google'
import "./globals.css"

const cabin = Cabin({ subsets: ["latin"] })
export const metadata: Metadata = {
  title: "Hack Kentucky 2025",
  description: "Kentucky's Premier Hackathon Event - Join us for 424 hours of coding, learning, and building with top tech companies",
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
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/ywk2uab.css" />
      </head>
      <body className={cabin.className}>
        {children}
      </body>
    </html>
  )
}

