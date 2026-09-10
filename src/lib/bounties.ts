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

  // --- MLH global prizes: open to every team, judged and awarded by MLH ---
  {
    id: "mlh-gemini",
    organization: "Google Gemini",
    title: "Best Use of Gemini API",
    category: "AI · MLH GLOBAL PRIZE",
    challenge:
      "It's time to push the boundaries of what's possible with AI using Google Gemini. Build AI-powered apps that make your friends say WHOA — so what can Gemini do for your hackathon project?",
    reward: "Google Swag Kits",
    rewardNote: "1 winner.",
    deliverables: [
      "Understand language like a human and build a chatbot that gives personalized advice.",
      "Analyze info like a supercomputer and create an app that summarizes complex research papers.",
      "Generate creative content like code, scripts, music, and more.",
    ],
    support: "Check out the Gemini API to get started. This is an MLH global prize open to every team.",
    contact: "MLH",
  },
  {
    id: "mlh-elevenlabs",
    organization: "ElevenLabs",
    title: "Best Use of ElevenLabs",
    category: "VOICE AI · MLH GLOBAL PRIZE",
    challenge:
      "Deploy natural, human-sounding audio with ElevenLabs. Create realistic, dynamic, and emotionally expressive voices for any project — from interactive AI companions to narrated stories and voice-enabled apps — without actors or complex audio production, using simply the power of AI.",
    reward: "Wireless Earbuds",
    rewardNote: "1 winner.",
    deliverables: [
      "Give your project a voice — an interactive AI companion, a narrated story, or a voice-enabled app.",
      "Create realistic, dynamic, and emotionally expressive voices with the ElevenLabs API.",
      "Integrate a fully autonomous audio experience without the need for actors or complex audio production.",
    ],
    support: "Integrate the ElevenLabs API to give your hack a voice. This is an MLH global prize open to every team.",
    contact: "MLH",
  },
  {
    id: "mlh-vultr",
    organization: "Vultr",
    title: "Best Use of Vultr",
    category: "CLOUD · MLH GLOBAL PRIZE",
    challenge:
      "Vultr empowers hackers to bring high-performance projects to life instantly — from one-click deployment and scalable cloud compute to specialized Vultr Cloud GPUs that can power AI-driven applications. Push the limits of what can be built when infrastructure is no longer the bottleneck.",
    reward: "Portable Screens",
    rewardNote: "1 winner.",
    deliverables: [
      "Deploy your project instantly with Vultr's one-click deployment and scalable cloud compute.",
      "Power an AI-driven application with specialized Vultr Cloud GPUs.",
      "Build something that pushes the limits once infrastructure is no longer the bottleneck.",
    ],
    support:
      "Sign up for a Vultr account today and claim your free cloud credits to get started. This is an MLH global prize open to every team.",
    contact: "MLH",
  },
  {
    id: "mlh-backboard",
    organization: "Backboard",
    title: "Best Use of Backboard",
    category: "AI MEMORY · MLH GLOBAL PRIZE",
    challenge:
      "Every AI model API is stateless by default — your app forgets everything the second a session ends. Backboard is a single, unified API built on the world's #1 AI memory: long-term memory, RAG, embeddings, tool calls, model routing across 17,000+ LLMs, and persistent context that stays alive across every page refresh, session, and user. One API, one integration — no stitching together five different services.",
    reward: "Tile Essentials Pack",
    rewardNote: "1 winner · each winning team member receives a pack.",
    deliverables: [
      "AI-powered travel guide that remembers allergies and preferences from past trips.",
      "Personalized fitness coach that adjusts workouts based on progress and injury history.",
      "Smart home controller that learns routines over time to anticipate lighting and climate preferences.",
    ],
    support:
      "Use Backboard for state management, long-term memory, RAG, embeddings, tool calls, and model routing from one API. This is an MLH global prize open to every team.",
    contact: "MLH",
  },
  {
    id: "mlh-snowflake",
    organization: "Snowflake",
    title: "Best Use of Snowflake API",
    category: "DATA + AI · MLH GLOBAL PRIZE",
    challenge:
      "Play with industry-leading LLMs on a single account using the Snowflake APIs. Adding AI capabilities into your application can be as simple as a single CURL command to Snowflake's REST API.",
    reward: "Raspberry Pi 4",
    rewardNote: "1 winner.",
    deliverables: [
      "Add AI capabilities to your app with a single CURL command to Snowflake's REST API.",
      "Build a customized application or a RAG-powered chatbot on industry-leading LLMs.",
      "Embed AI-powered features into your app in half the time with half the hassle.",
    ],
    support:
      "Get started free with a special 120-day student Snowflake trial; a sample repo shows the REST API in action. This is an MLH global prize open to every team.",
    contact: "MLH",
  },
]
