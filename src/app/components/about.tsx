"use client"
import Link from "next/link"

export function About() {
  return (
    <section id="about" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center">About HackKentucky</h2>
        <div className="text-lg mb-6 text-center max-w-3xl mx-auto">
          <p>
            HackKentucky is Kentucky&apos;s premier hackathon, bringing together the brightest minds in technology and innovation. Join us for 48 hours of coding, creativity, and collaboration!
          </p>
          <div className="mt-4">
            <Link href="/about" className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 font-medium">
              Learn More About HackKentucky →
            </Link>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">500+ Participants</h3>
            <p className="mb-4">High school students, college students, and industry professionals from across the region</p>
            <Link 
              href="https://kycombinator.typeform.com/resumedrop"
              className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
            >
              Submit Your Resume →
            </Link>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">$10,000 in Prizes</h3>
            <p>Rewarding innovation and creativity</p>
            <div className="mt-4">
              <Link href="/competition" className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 font-medium">
                Learn More About Prizes →
              </Link>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Industry Leaders</h3>
            <p>Network with top engineers and companies</p>
            <div className="mt-4">
              <Link 
                href="#speakers"
                className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('speakers')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Meet Our Speakers →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}