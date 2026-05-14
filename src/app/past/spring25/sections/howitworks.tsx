export function HowItWorks() {
  const steps = [
    {
      title: "Form Your Team",
      description: "Build a team of up to 4 hackers. Don't have a team? No problem! We'll help you find one during team formation.",
      icon: "👥"
    },
    {
      title: "Brainstorm & Build", 
      description: "You'll have 24 hours to turn your idea into reality. Mentors will be available to help you along the way.",
      icon: "💡"
    },
    {
      title: "Present Your Project",
      description: "Show off what you've built to our judges and fellow hackers in a science-fair style presentation.",
      icon: "🎯"
    },
    {
      title: "Win Prizes",
      description: "Top projects will win prizes across multiple categories. Every participant gets swag!",
      icon: "🏆"
    }
  ]

  return (
    <section id="howitworks" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground">
            From idea to demo in less than 48 hours
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div 
              key={step.title}
              className="flex flex-col items-center text-center p-6 rounded-lg border bg-card"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}