"use client"

import Image from 'next/image'

const tracks = [
  {
    icon: "🐦",
    name: "Louisville Track",
    description: "Solutions focused on improving Louisville's community and infrastructure"
  },
  {
    icon: "🦄",
    name: "Startup Track",
    description: "Innovative solutions with commercial potential"
  },
  {
    icon: "🌎",
    name: "Environmental Track",
    description: "Projects addressing environmental challenges and sustainability"
  },
  {
    icon: "🏥",
    name: "Health Track",
    description: "Solutions for healthcare and wellness challenges"
  },
  {
    icon: "💥",
    name: "High School Track",
    description: "Dedicated track for high school innovators"
  },
  {
    icon: "🤖",
    name: 'AI Track',
    description: "Solutions focused on AI and machine learning"
  },
  {
    icon: "❓",
    name: "Open Track",
    description: "Tackle any problems you want"
  }
]

export function Format() {
  return (
    <section id="format" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header Section */}
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Competition Format</h1>
            <p className="text-xl text-muted-foreground">
              Register, Select Project, and Judging
            </p>
          </div>

          {/* Registration Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold mb-6">Register</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Register for the event <a href="https://luma.com/hackkentucky" className="text-primary hover:underline">here</a></span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Join our <a href="https://join.slack.com/t/hack-kentucky/shared_invite/zt-2xabg2z38-cVGqVdXPqN2H7_tlpH9TVA" className="text-primary hover:underline">Slack workspace</a></span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Form your team</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>(Optional) Submit your <a href="https://kycombinator.typeform.com/resumedrop" className="text-primary hover:underline">resume</a> for employer consideration</span>
                </li>
              </ul>
            </div>
            <div className="bg-card p-8 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <Image
                src="/images/registration-isometric.png"
                alt="Registration process illustration"
                width={500}
                height={500}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Project Selection Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-card p-8 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 order-2 md:order-1">
              <Image
                src="/images/projects-isometric.png"
                alt="Project selection illustration"
                width={500}
                height={500}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="space-y-4 order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">Choose Your Project</h2>
              <p className="text-muted-foreground">
                Bring your own idea or select from our sponsored projects <a href="#projects" className="text-primary hover:underline">below</a>.
                Sponsored projects offer additional bounty rewards while still being eligible for the grand prize!
              </p>
            </div>
          </div>

          {/* Judging Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold mb-6">Judging Process</h2>
              <p className="text-muted-foreground">
                Projects can compete in up to 2 <a href="#tracks" className="text-primary hover:underline" onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('tracks')?.scrollIntoView({ behavior: 'smooth' });
                }}>tracks</a>. Track winners automatically advance to the finals,
                with additional wildcard spots available for outstanding projects in competitive tracks. View full <a href="#judging" className="text-primary hover:underline" onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('judging')?.scrollIntoView({ behavior: 'smooth' });
                }}>judging criteria</a>.
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <Image
                src="/images/judging-isometric.png"
                alt="Judging process illustration"
                width={500}
                height={500}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Tracks Section */}
          <div id="tracks">
            <h2 className="text-3xl font-bold mb-6 text-center">Competition Tracks</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {tracks.map((track) => (
                <div key={track.name} className="bg-card p-6 rounded-lg shadow-sm">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-3xl">{track.icon}</span>
                    <h3 className="text-xl font-semibold">{track.name}</h3>
                  </div>
                  <p className="text-muted-foreground">{track.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 