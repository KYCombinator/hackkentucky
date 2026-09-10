export type Bounty = {
  id: string
  organization: string
  title: string
  category: string
  challenge: string
  reward: string
  rewardNote?: string
  deliverables: string[]
  stretch?: string
  support: string
  contact: string
}

// Fall 2026 sponsor briefs. Keep reward conditions and judging criteria explicit.
export const BOUNTIES: Bounty[] = [
  {
    id: "zywave",
    organization: "Zywave",
    title: "Give brokers a reason to call",
    category: "DATA + INSURANCE",
    challenge:
      "Brokers spend hours digging through public filings to decide which prospects are worth calling and why. Turn those filings into useful prospect intelligence.",
    reward: "$200",
    deliverables: [
      "You can scrape public Form 5500 and Schedule A filings for a set of employers.",
      "For each employer, you could build a one-page report with its likely renewal timing, a reason to call now, and one coverage gap versus similar companies.",
      "The report could also include anything else you think a broker should know.",
    ],
    stretch: "Put the reports on a dashboard that makes decision-making and prospect engagement easy.",
    support: "Public Form 5500 and Schedule A filings are a suggested starting point.",
    contact: "David Merk",
  },
  {
    id: "staaty",
    organization: "STAATY",
    title: "Predict the next winning outcome",
    category: "SPORTS + MACHINE LEARNING",
    challenge:
      "Build sports prediction models and present the findings in an engaging, easy-to-digest way for a casual fan. Make your methods verifiable and repeatable.",
    reward: "$100 + an interview for internships",
    deliverables: [
      "UFC: build a round-win prediction model and a win-method prediction model using historical fight data. Both should achieve greater than 50% accuracy.",
      "Basketball: build win prediction models with greater than 50% accuracy for each league — NBA, WNBA, men's college basketball, and women's college basketball.",
      "Present the results for a general audience, with a breakdown of how you calculated and evaluated the models so the work can be verified and repeated.",
    ],
    stretch: "Add models that help calculate point spreads or other prop bets.",
    support:
      "STAATY will provide data for both sports. The small team behind STAATY.com is building a fan engagement tool and is available to meet teams and answer questions.",
    contact: "Danny Morton",
  },
  {
    id: "prologue-stories",
    organization: "Prologue Stories LLC",
    title: "Build an interviewer worth talking to",
    category: "AI + STORYTELLING",
    challenge:
      "Build an agentic interviewer that takes an editor-style assignment, conducts a warm, curious live interview, and comes back with a story for marketing content — from social posts and blogs to podcast segments.",
    reward: "$250 + a real product integration",
    rewardNote: "Product integration is subject to approval.",
    deliverables: [
      "Accept a brief covering who is being interviewed, the topic, and the desired content, such as a founder story, customer case study, or podcast segment.",
      "Develop a line of questioning and conduct a live, roughly 10-minute voice or text interview. Follow up with curiosity, adapt when something better emerges, and still land the assignment.",
      "Turn the interview into the assigned content, plus the pull quotes worth keeping. It should read like a story and add a valuable asset to a knowledgebase.",
      "The interviewer should run as an MCP tool inside Claude so the winning team can keep building on it with Prologue.",
    ],
    support:
      "Judged on the interview: would the interviewee do it again on purpose, does the output read like a story rather than meeting minutes, and does it add something valuable to a knowledgebase? Teams can ask head of product Chris Gleim questions before starting and will receive user access to Premise's current state, which is in the middle of a pivot. This is a real feature on Premise's roadmap.",
    contact: "Brad Luttrell",
  },
  {
    id: "louisville-bats",
    organization: "Louisville Bats",
    title: "Bring the ballpark to the browser",
    category: "GAMES + FAN ENGAGEMENT",
    challenge:
      "Create an online game for kids that drives traffic to the Bats' team website. Give the team a modern alternative to printed activity books, whose declining use makes seasonal order sizes hard to estimate.",
    reward: "10 game tickets + 5 Bats swag bags",
    rewardNote: "Tickets are for the September 13 Bats game. Multiple teams may win.",
    deliverables: [
      "Build an online video game that can be embedded in the team website and promoted in-stadium with a QR code.",
      "Make it fun for kids and aligned with the Louisville Bats brand.",
      "Choose your format: baseball gameplay, a design-your-own uniform or character game, trivia, or another creative idea.",
    ],
    support: "The Bats are willing to reward multiple winning teams.",
    contact: "Carter Davis",
  },
]
