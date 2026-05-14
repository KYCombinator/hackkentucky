interface SponsorTier {
  name: string
  price?: string
  slots?: string
  description: string
  fundingUses?: string[]
  benefits?: string[]
  features?: string[]
  note?: string
}

export const sponsorTiers: SponsorTier[] = [
  {
    name: "Partner Sponsor",
    price: "$10,000+",
    slots: "3 slots available",
    description: "You bring the big lift to the event!",
    fundingUses: [
      "Sponsoring the space",
      "Funding the main prize",
      "Sponsoring multiple meals and/or swag"
    ],
    benefits: [
      "Ever loving support and gratitude",
      "Right of first refusal for future events",
      "Slot in the 'final judges panel'",
      "Prominent banner / marketing placement throughout the event",
      "Multiple shout-outs throughout the event"
    ],
    note: "Above $20K will be given 'Title Sponsor' along with all the above."
  },
  {
    name: "Purple (Bounty) Sponsor",
    description: "Bring a problem and sponsor a 'bounty' for teams that solve it",
    features: [
      "Specify a problem and requirements",
      "Cash and/or 'in-kind' bounty",
      "Dedicated judges room on Sunday",
      "Bring one or more judge(s)"
    ],
    note: "Teams select which problems to work on. We encourage providing compelling problems and prizes. If no teams select your problem, we kindly request rolling your bounty into the headline prize (not required)."
  },
  {
    name: "Purple (Meal) Sponsor",
    description: "Cover Breakfast, Lunch, or Dinner (or the 10 minute parties)!",
    benefits: [
      "Decorated whiteboard promoting your sponsorship",
      "Bring banners to showcase your company",
      "Shout-out at meal time",
      "Bring reps to mingle and network",
      "Pass out info and collect resumes",
      "Speaker slot in series (Lunch/Dinner sponsors)"
    ]
  },
  {
    name: "Purple (Swag) Sponsor",
    description: "Cover the cost of swag!",
    benefits: [
      "Main logo placement on swag items",
      "Decorated whiteboard at event start",
      "Bring banners to showcase your company",
      "Shout-out during swag distribution",
      "Bring reps to mingle and network",
      "Pass out info and collect resumes"
    ],
    note: "Logo placement varies by item (hats, scarves, T-shirts, hoodies, etc.)"
  },
  {
    name: "Community Sponsor",
    price: "Free!",
    description: "You're a believer in the mission",
    benefits: [
      "Help us promote and market the event"
    ]
  }
] 