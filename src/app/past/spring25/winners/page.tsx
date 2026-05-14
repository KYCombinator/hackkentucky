import { Badge } from "@/components/ui/badge"

const winners = [
  {
    place: 1,
    team: "Team Chromerunner",
    badge: "🥇 First Place",
    className: "bg-yellow-500/10 border-yellow-500/20"
  },
  {
    place: 2,
    team: "Redbird",
    badge: "🥈 Second Place",
    className: "bg-gray-300/10 border-gray-300/20"
  },
  {
    place: 3,
    team: "Moo Deng",
    badge: "🥉 Third Place",
    className: "bg-amber-700/10 border-amber-700/20"
  },
  {
    place: 4,
    team: "Strategy",
    badge: "4th Place",
    className: "bg-card"
  },
  {
    place: 5,
    team: "The Fixers",
    badge: "5th Place",
    className: "bg-card"
  }
]

export default function WinnersPage() {
  return (
    <main className="container max-w-4xl mx-auto pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          Spring 2025 Winners
        </h1>
        <p className="mt-4 text-muted-foreground">
          Congratulations to our top teams!
        </p>
      </div>

      <div className="space-y-6">
        {winners.map((winner) => (
          <div
            key={winner.team}
            className={`p-6 rounded-lg border transition-all ${winner.className}`}
          >
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <Badge variant="secondary" className="mb-2">
                  {winner.badge}
                </Badge>
                <h2 className="text-2xl font-semibold">
                  {winner.team}
                </h2>
              </div>
              <div className="text-6xl font-bold text-muted-foreground/20">
                #{winner.place}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
