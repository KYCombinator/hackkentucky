export function Judging() {
  const presentationRequirements = [
    {
      title: "Live Demo (Preferred)",
      description: "Show your product in action with a live demonstration of key features.",
      icon: "🎮"
    },
    {
      title: "Slide Deck",
      description: "Present a comprehensive overview including:",
      items: [
        "Problem - What issue are you solving?",
        "Solution - How does your project address it?",
        "Outcome - What are the results and benefits?",
        "How it works - Technical implementation",
        "Team - Who contributed what?"
      ],
      icon: "🎯"
    }
  ]

  return (
    <section id="judging" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-16">

          {/* Presentation Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Presentation Requirements</h2>
            <div className="gap-6">
              {presentationRequirements.map((req, index) => (
                <div key={index} className="bg-card p-6 rounded-lg shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-2xl">{req.icon}</span>
                    <h3 className="text-xl font-semibold">{req.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{req.description}</p>
                  {req.items && (
                    <ul className="space-y-2 list-disc pl-6">
                      {req.items.map((item, i) => (
                        <li key={i} className="text-muted-foreground">{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 