"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

const reasons = [
  {
    icon: (
      <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
    text: "Network with peers and recruiters"
  },
  {
    icon: (
      <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
    text: "Find your next opportunity or startup!",
    link: "/sponsors"
  }
]

export function StudentsSection() {
  return (
    <section id="students-section" className="py-20 bg-white dark:bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-purple-900 dark:text-white">For Participants</h2>
          <p className="text-xl font-semibold mb-4 text-purple-700 dark:text-purple-300">
            Distinguish yourself in Kentucky&apos;s growing tech ecosystem
          </p>
          <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
            Join us for an exclusive opportunity to connect with leading companies, showcase your skills, and take the first step towards your dream career in technology.
            <br />
            <br />
            Looking to connect with employer sponsors? Submit your resume and we&apos;ll get you in touch with them!</p>
          <div className="space-y-6">
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-center justify-center space-x-3">
                  {reason.link ? (
                    <Link href={reason.link} className="flex items-center space-x-3 hover:text-purple-600 transition-colors">
                      {reason.icon}
                      <span className="text-lg underline underline-offset-4">{reason.text}</span>
                    </Link>
                  ) : (
                    <>
                      {reason.icon}
                      <span className="text-lg">{reason.text}</span>
                    </>
                  )}
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
              <Button asChild size="lg" className="bg-purple-700 hover:bg-purple-600 text-white">
                <Link href="https://kycombinator.typeform.com/resumedrop" target="_blank">
                  Submit Resume
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-purple-100 text-purple-900 hover:bg-purple-200 border-purple-300">
                <Link href="https://luma.com/hackkentucky" target="_blank">
                  Register Now
                </Link>
              </Button>
            </div>

            <div className="mt-4 flex flex-col items-center gap-2">
              <p className="text-sm text-gray-600 dark:text-gray-400">Unsure or looking to find out more?</p>
              <Button asChild size="lg" variant="link" className="text-purple-700 hover:text-purple-600 dark:text-purple-300 dark:hover:text-purple-400">
                <Link href="https://join.slack.com/t/hack-kentucky/shared_invite/zt-2xabg2z38-cVGqVdXPqN2H7_tlpH9TVA" target="_blank">
                  <div className="flex items-center gap-2">
                    <svg fill="currentColor" height="16" width="16" viewBox="0 0 122.8 122.8">
                      <path d="M25.8 77.6c0 7.1-5.8 12.9-12.9 12.9S0 84.7 0 77.6s5.8-12.9 12.9-12.9h12.9v12.9zm6.5 0c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V77.6z" />
                      <path d="M45.2 25.8c-7.1 0-12.9-5.8-12.9-12.9S38.1 0 45.2 0s12.9 5.8 12.9 12.9v12.9H45.2zm0 6.5c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H12.9C5.8 58.1 0 52.3 0 45.2s5.8-12.9 12.9-12.9h32.3z" />
                      <path d="M97 45.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9-5.8 12.9-12.9 12.9H97V45.2zm-6.5 0c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V12.9C64.7 5.8 70.5 0 77.6 0s12.9 5.8 12.9 12.9v32.3z" />
                      <path d="M77.6 97c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9-12.9-5.8-12.9-12.9V97h12.9zm0-6.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H77.6z" />
                    </svg>
                    Join us on Slack
                  </div>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 