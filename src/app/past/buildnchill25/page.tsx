import { Badge } from "@/components/ui/badge"
import { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Build & Chill 2025 | HackKentucky",
  description: "March 22nd, 2025 @ Story. KYC presents Build & Chill. A laid-back day-of hack for builders who never stop tinkering. Join us for code, creativity, and good company.",
  openGraph: {
    title: "Build & Chill 2025",
    description: "March 22nd, 2025 @ Story. KYC presents Build & Chill. A laid-back day-of hack for builders who never stop tinkering. Join us for code, creativity, and good company.",
    images: [{
      url: '/buildnchill.png',
      alt: "Build & Chill 2025"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Build & Chill 2025",
    description: "March 22nd, 2025 @ Story. KYC presents Build & Chill. A laid-back day-of hack for builders who never stop tinkering. Join us for code, creativity, and good company.",
    images: ['/buildnchill.png'],
  }
}

const schedule = [
  { time: "9:00 AM", event: "Doors Open", description: "Welcome to Build & Chill!" },
  { time: "9:00 AM", event: "Breakfast", description: "Chick-Fil-A", icon: "🍳" },
  { time: "10:00 AM", event: "How to GitHub", description: "Learn Git fundamentals", icon: "🐙" },
  { time: "11:00 AM", event: "How to Vercel", description: "Deploy your projects", icon: "▲" },
  { time: "12:00 PM", event: "TBD - How to Sell?", description: "Pitch your ideas", icon: "💡" },
  { time: "1:00 PM", event: "Lunch", description: "", icon: "🍽️" },
  { time: "1:30 PM", event: "Connect 4 Tournament", description: "Show off your strategic skills", icon: "🎮" },
  { time: "3:00 PM", event: "Show & Tell", description: "Share your creations", icon: "🎯" },
  { time: "5:00 PM", event: "Grilling", description: "End the day with good food", icon: "🍖" },
]

const features = [
  { icon: "💻", text: "Open workspace for hacking & collaboration" },
  { icon: "🎤", text: "Informal project demos (if you feel like sharing)" },
  { icon: "🎵", text: "Chill vibes, great music, and casual networking" },
  { icon: "🍕", text: "Free snacks, drinks & comfy seating" },
  { icon: "💭", text: "Breakout corners for discussions & brainstorming" },
]

const projects = [
  {
    title: "Improve KYC",
    description: "Help enhance Kentucky's tech ecosystem platform with new features and improvements.",
    icon: "🚀",
    difficulty: "Medium"
  },
  {
    title: "Update HackKentucky",
    description: "Contribute to Kentucky's premier hackathon website with new features and designs.",
    icon: "💻",
    difficulty: "Beginner-Friendly"
  },
  {
    title: "Create The Louies Website",
    description: "Build a new website to showcase Louisville's tech achievements and community awards.",
    icon: "🏆",
    difficulty: "All Levels"
  }
]

export default function BuildAndChillPage() {
  return (
    <div className="flex flex-col items-center justify-center">
        <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="fixed w-full h-[200%]" style={{ transform: 'translateY(calc(var(--scroll) * -50%))', willChange: 'transform' }}>
            <Image 
            src="/buildnchill.png" 
            alt="Build & Chill 2025" 
            fill
            className="object-cover opacity-25"
            priority
            style={{ objectPosition: 'center', height: '100%' }}
            />
        </div>
        <script
            dangerouslySetInnerHTML={{
            __html: `
                window.addEventListener('scroll', () => {
                document.documentElement.style.setProperty('--scroll', window.pageYOffset / (document.documentElement.offsetHeight - window.innerHeight));
                });
            `,
            }}
        />
        </div>
        <main className="container max-w-4xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24 pt-12">
            <Badge variant="secondary" className="mb-4 px-6 text-lg rounded-full">
            Day-of Event
            </Badge>
            <h1 className="text-6xl font-bold tracking-tighter sm:text-8xl mb-4">
            Build & Chill
            </h1>
            <p className="text-2xl text-muted-foreground mb-6">
            Code, Create & Collaborate
            </p>
            <Button size="lg" className="text-lg px-8 py-6" asChild>
                <a href="https://lu.ma/fxpsaedb" target="_blank" rel="noopener noreferrer">
                    Register Now
                </a>
            </Button>
        </div>

        <div className="prose prose-gray dark:prose-invert max-w-none mb-16">
            <p className="text-lg">
            After the adrenaline rush of the hackathon, keep the momentum going at <strong>Build &apos;n&apos; Chill</strong>
            —a relaxed, open-ended space to experiment, collaborate, and refine your projects. Whether you&apos;re debugging 
            last-minute features, brainstorming your next big idea, or just vibing with fellow makers, this is the place 
            to unwind and keep building.
            </p>
            <p className="text-lg font-medium">
            No pitches, no pressure—just code, creativity, and good company.
            </p>
        </div>

        <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">What to Expect</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature) => (
                <div key={feature.text} className="flex items-center gap-3 p-4 rounded-lg border bg-card">
                <span className="text-2xl">{feature.icon}</span>
                <span>{feature.text}</span>
                </div>
            ))}
            </div>
        </section>

        <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Who&apos;s It For?</h2>
            <ul className="space-y-3 list-none pl-0">
            <li className="flex items-center gap-2">
                <span className="text-primary">→</span>
                Hackathon participants who aren&apos;t ready to stop building
            </li>
            <li className="flex items-center gap-2">
                <span className="text-primary">→</span>
                Developers, designers, and founders looking to connect
            </li>
            <li className="flex items-center gap-2">
                <span className="text-primary">→</span>
                Anyone who loves creating in a low-stakes, fun environment
            </li>
            </ul>
        </section>

        <section>
            <h2 className="text-2xl font-bold mb-6">Schedule</h2>
            <div className="space-y-4">
            {schedule.map((item, index) => (
                <div 
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg border bg-card"
                >
                <div className="min-w-[100px] font-mono">{item.time}</div>
                <div>
                    <div className="font-semibold flex items-center gap-2">
                    {item.icon && <span>{item.icon}</span>}
                    {item.event}
                    </div>
                    {item.description && (
                    <p className="text-sm text-muted-foreground mt-1">
                        {item.description}
                    </p>
                    )}
                </div>
                </div>
            ))}
            </div>
        </section>

        <section className="my-16">
          <h2 className="text-2xl font-bold mb-6">Help KYC</h2>
          <div className="mb-8">
            <p className="text-muted-foreground">
              All projects are open source and welcome contributors of all skill levels. 
              Find more on our{" "}
              <a 
                href="https://github.com/KYC" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                GitHub →
              </a>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div 
                key={project.title}
                className="p-6 rounded-lg border bg-card hover:shadow-lg transition-all"
              >
                <div className="text-3xl mb-4">{project.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <Badge variant="secondary">
                  {project.difficulty}
                </Badge>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 text-center">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold mb-4">Ready to Join Us?</h2>
                <p className="text-muted-foreground mb-8">
                    Secure your spot at Build &apos;n&apos; Chill and be part of Kentucky&apos;s most relaxed tech gathering.
                </p>
                <Button size="lg" asChild>
                    <a href="https://lu.ma/fxpsaedb" target="_blank" rel="noopener noreferrer">
                        Register
                    </a>
                </Button>
            </div>
        </section>
        
        </main>
    </div>
  )
}