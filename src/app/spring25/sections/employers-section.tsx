"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"

const reasons = [
  {
    icon: (
      <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
    text: "Unique channel to source the best talent in the area"
  },
  {
    icon: (
      <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
    text: "Market your company"
  },
  {
    icon: (
      <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
    text: "Network with other companies and see what they're working on"
  },
  {
    icon: (
      <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
    text: "Learn about current trends in technology"
  }
]

export function EmployersSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState('left')

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection('left')
      setCurrentIndex((current) => (current + 1) % reasons.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="employers-section" className="py-20 bg-purple-50 dark:bg-background/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-purple-900 dark:text-white">For Employers</h2>
          <p className="text-xl font-semibold mb-4 text-purple-700 dark:text-purple-300">
            Tech Forward Companies Engaging with Top Talent
          </p>
          <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
            Connect with Kentucky&apos;s brightest minds and future innovators while showcasing your company&apos;s opportunities and culture.
          </p>
          
          <div className="space-y-6">
            <div className="h-20 relative overflow-hidden">
              <div
                key={currentIndex}
                className="flex items-center justify-center space-x-3 absolute w-full animate-slide-left"
                style={{
                  animation: `${direction === 'left' ? 'slideLeft' : 'slideRight'} 0.5s ease-in-out forwards`
                }}
              >
                {reasons[currentIndex].icon}
                <span className="text-lg">{reasons[currentIndex].text}</span>
              </div>
            </div>
            
            <div className="flex justify-center gap-2 mt-4">
              {reasons.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? 'bg-purple-600' : 'bg-purple-200'
                  }`}
                  onClick={() => {
                    setDirection(index > currentIndex ? 'right' : 'left')
                    setCurrentIndex(index)
                  }}
                />
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
              <Button asChild size="lg" className="bg-purple-700 hover:bg-purple-600 text-white">
                <Link href="https://kycombinator.typeform.com/hackkyproject" target="_blank">
                  Submit Project
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-purple-700 hover:bg-purple-600 text-white">
                <Link href="https://kycombinator.typeform.com/sponsorhackky" target="_blank">
                  Become a Sponsor
                </Link>
              </Button>
            </div>
            
            <div className="mt-4 flex justify-center">
              <Button asChild size="lg" variant="outline" className="bg-purple-100 text-purple-900 hover:bg-purple-200 border-purple-300">
                <Link href="https://luma.com/hackkentucky" target="_blank">
                  Register as Employer
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes slideLeft {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes slideRight {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  )
} 