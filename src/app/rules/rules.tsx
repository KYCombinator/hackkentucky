const ruleCategories = [
  {
    title: "Safety Rules",
    rules: [
      "No leaving the building after 11pm - 6am. For security and safety, entry / reentry /exiting will not be permitted between 11pm and 6am. Please plan accordingly",
      "(18 and under) cannot stay overnight"
    ]
  },
  {
    title: "Conduct Rules",
    rules: [
      "No drugs or alcohol",
      "No smoking, vaping, on premise",
      "Please be respectful to everyone"
    ]
  },
  {
    title: "Hack Rules",
    rules: [
      "AI tools + agents allowed",
      "All code must be written / generated by a team member (no outsourcing of labor, no using additional help outside of team)",
      "Teams are encouraged to code \"on-site\"",
      "No cheating, stealing",
      "Code sharing is allowed but only if mutually agreed upon"
    ]
  },
  {
    title: "Team Rules",
    rules: [
      "2-5 members on a team",
      "Team minimum is 2",
      "Team must have 2 \"in-person\" individuals, the rest can be \"virtual\"",
      "Presentation must be made \"in-person\", at least 2 individuals from the team must be present during presentation",
      "An individual can only be part of 1 team during the hackathon",
      "Teams cannot add members after Lunch Day 2",
      "Individuals are not allowed to \"switch\" teams after Lunch Day 2"
    ]
  },
  {
    title: "Team Organization",
    rules: [
      "Team Captain - each team will select a Captain. This liaison will be the main point of contact between the hack-a-thon and the team. The Captain will be responsible for the conduct and behavior of the team. i.e. if there is a mess, the captain will be responsible and accountable for the mess."
    ]
  }
]

export function Rules() {
  return (
    <section id="rules" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Hackathon Rules</h2>
        <div className="max-w-4xl mx-auto space-y-10">
          {ruleCategories.map((category) => (
            <div key={category.title} className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-2xl font-semibold mb-4 text-primary">{category.title}</h3>
              <ul className="space-y-3">
                {category.rules.map((rule, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="h-6 w-6 text-primary shrink-0 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="ml-3">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
