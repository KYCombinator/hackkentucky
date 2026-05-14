"use client"

import Link from "next/link";

interface PrizeEntry {
  sponsor: string;
  context: string;
  problem: string;
  requirements: string[];
  prize: string[];
  tracks: string[];
  files?: string[];
}

const prizes: PrizeEntry[] = [
  {
    sponsor: "Swell Health",
    context: "Swell Health is a startup that provides mental health services to users. Users can book sessions with therapists and counselors.",
    problem: "We partner with advocates, influencers & nonprofits to promote Swell. We need a central hub where we can track and share performance metrics, attribution, and scheduled payouts with partners. This is in essence an affiliate tracking app.",
    requirements: [
      "Solution must be built in Google Apps Script using Google sheets as its database",
      "AI is allowed and encouraged, just be prepared to explain your code",
      "Teams keep their code for portfolios, Swell gets a copy of winning code",
      "Admin dashboard for partner management, promo code generation, and stats tracking",
      "Partner dashboard with login, promo code viewing, and redemption tracking",
      "Leaderboard functionality in both admin and partner dashboards",
      "Redemptions sheet for manual promo code entry",
      "API for dynamic redemption data fetching",
      "Bonus: Partnership types (advocate, influencer, driver) with type-specific leaderboards",
      "Bonus: UI consistent with Swell's brand",
      "Bonus: Future development roadmap"
    ],
    prize: [
      "$250 cash bounty (split if winner is a team)",
      "LinkedIn recommendation based on hackathon performance",
      "Swell merch (t-shirts & stickers)",
      "Guaranteed full round interview (screening skip) for next engineering opening"
    ],
    tracks: ["Health", "Startup"]
  },
  {
    sponsor: "Sedrino Labs",
    context: "Sedrino Labs wants you to be able to create an website within 5 minutes.",
    prize: [
      "Prize amount $500 cash",
      "Recognition on hackathon website and social channels",
      "Potential collaboration or funding opportunities"
    ],
    problem: "We want to see you push the boundaries of multimodal AI by creatively fusing images with Large Language Models (LLMs)—with a special focus on generating high-value tokens. High-value tokens are those crucial pieces of text that deliver meaningful impact—such as life-saving medical information, breakthroughs in technical research, or transformative insights.",
    requirements: [
      "Use existing models like Google Gemini, OpenAI, or Anthropic (no building LLMs from scratch)",
      "Demonstrate high-value token generation through image-LLM integration",
      "Show innovation in model usage (e.g., bounding boxes, advanced APIs)",
      "Solve real-world, high-stakes problems with practical applications",
      "Implement robust technical methods (fine-tuning, embeddings, multimodal processing)",
      "Create user-friendly interface with clear documentation",
      "Submit demo video showing image-LLM integration",
      "Provide GitHub repository with setup instructions",
      "Include project write-up explaining technical implementation",
      "Bonus: Medical/Scientific image analysis implementation",
      "Bonus: Complex diagram/blueprint interpretation",
      "Bonus: Interactive educational/training tools",
      "Bonus: Advanced Visual Question-Answering (VQA)"
    ],
    tracks: ["AI", "Health", "Education"]
  },
  {
    sponsor: "Anonymous Donor",
    context: "Louisville International Airport (SDF) is currently the only major commercial airport serving the Greater Louisville Metropolitan Area. As the region continues to grow, there's an increasing need to evaluate additional aviation infrastructure.",
    problem: "Create a comprehensive analysis and proposal for a second commercial airport in the Greater Louisville area. This should include data-driven insights on economic impact, location feasibility, and community benefits.",
    requirements: [
      "Open ended project",
      "Build a website to show the proposal",
      "Include community feedback mechanism in the proposal",
      "Research similar successful dual-airport metropolitan areas",
      "Address potential challenges and solutions",
    ],
    prize: [
      "Eligible for $500 KSTC community cash prize",
      "Presentation opportunity to regional development stakeholders",
      "Letter of recommendation from regional planning committee",
      "Feature in local transportation newsletter"
    ],
    tracks: ["Infrastructure", "Data", "Community"]
  },
  {
    sponsor: "Mavi.io",
    context: "A major fuel retailer is experiencing long wait times at their stations, with an average transaction time of 2 minutes and 40 seconds per vehicle. They're seeking to reduce this time by 15% through a mobile-first solution.",
    problem: "Develop an Android mobile application that streamlines the fueling process through geofencing, automated authentication, and payment processing to reduce transaction times at fuel stations.",
    requirements: [
      "Create a test database with 20 member profiles including 9-digit member numbers, payment info, and fuel preferences",
      "Implement member authentication via API integration",
      "Integrate payment verification system (credit/debit/Plaid bank payment) with funds confirmation",
      "Implement dual geofencing system using Radar SDK for waiting area and fuel dispenser",
      "Build status indicator system (red/yellow/green circle) based on geofence position",
      "Create automated fuel dispenser activation via API",
      "Implement automatic fuel type selection based on user preferences",
      "Generate digital receipts upon completion",
      "Track and log timing metrics at each stage",
      "Deploy database infrastructure on AWS cloud",
      "Use modern Android development tools (Kotlin preferred)",
      "Bonus: Analytics dashboard for timing metrics",
      "Bonus: UI/UX optimized for quick interactions while in vehicle"
    ],
    prize: [
      "Interview opportunity with Mavi.io CTO",
      "$100 Kroger gift card",
      "Potential for implementation of winning solution"
    ],
    tracks: ["Mobile", "Infrastructure", "Data"],
    files: ["projects/Fuel_Station_Queue_Buster_Diagram.pptx"]
  },
  {
    sponsor: "Essential Innovations LLC",
    context: "Kentucky's immigrant and refugee communities face significant challenges in navigating workforce entry and participation, often complicated by language barriers and complex bureaucratic systems.",
    problem: "Develop an AI-powered multilingual application that helps immigrants and refugees in Kentucky access and understand workforce-related information, requirements, and opportunities in their primary language.",
    requirements: [
      "Implement multilingual support for both text and voice interactions",
      "Create web scraping system for government and advocacy websites",
      "Build AI-powered Q&A system with source citations (similar to Perplexity)",
      "Develop both web and mobile applications with offline capabilities",
      "Implement real-time translation for user interactions",
      "Create simple admin interface for non-technical staff",
      "Include document processing for form completion assistance",
      "Build notification system for policy updates",
      "Integrate with relevant government APIs where available",
      "Ensure data privacy and security compliance",
      "Provide comprehensive documentation for non-technical administrators",
      "Bonus: Voice recognition and response system",
      "Bonus: Automated form filling assistance",
      "Bonus: Community feedback integration"
    ],
    prize: [
      "Premium bourbon bottle",
      "Choice between:",
      "• Startup incubation interview opportunity with Essential Innovations",
      "• Five hours of task/errand service from All The Things (local/remote)"
    ],
    tracks: ["AI", "Community", "Mobile"]
  },
  {
    sponsor: "Anonymous Donor",
    context: "Louisville faces a growing crisis with approximately 1,800 permanently unhoused residents living outdoors, many struggling with mental illness or substance use disorders. The city needs innovative solutions to achieve the goal of housing at least half of this population.",
    problem: "Create a comprehensive technology-driven solution to help the city of Louisville house at least half of the 1,800 permanently unhoused residents.",
    requirements: [
      "Open ended project",
      "Example: Develop a housing inventory management system to track available units and their specifications",
      "Example: Create a client relationship management (CRM) system for case workers to track resident interactions",
    ],
    prize: [
      "Eligible for $500 KSTC community cash prize",
    ],
    tracks: ["Community", "Data", "Health"]
  },
  {
    sponsor: "Anonymous Donor",
    context: "As cities compete for talent and growth, Louisville needs innovative ways to attract new residents and showcase its unique qualities. The challenge is to create meaningful connections between the city and potential newcomers.",
    problem: "Develop a technology solution that helps Louisville attract and retain new residents by highlighting the city's strengths, opportunities, and community while providing personalized insights for potential newcomers.",
    requirements: [
      "Open ended project",
      "Create an interactive platform showcasing Louisville's neighborhoods, culture, and opportunities",
      "Implement a matching system to connect potential residents with relevant communities and resources",
      "Develop data visualizations of cost of living, quality of life, and economic opportunities",
      "Build virtual neighborhood tours and community spotlights",
      "Include real stories and testimonials from recent transplants",
      "Create personalized recommendations based on user preferences and needs",
      "Integrate with job boards and housing markets",
      "Include comparison tools with other major cities",
      "Develop metrics to track platform effectiveness",
    ],
    prize: [
      "Eligible for $500 KSTC community cash prize",
    ],
    tracks: ["Community"]
  },
  {
    sponsor: "Anonymous Donor",
    context: "Many students pursue education without clear career direction, often overlooking valuable trade school opportunities. Meanwhile, skilled trades face workforce shortages and offer strong career prospects.",
    problem: "Create a technology solution that helps students explore, evaluate, and connect with trade school opportunities while providing clear insights into career pathways, earning potential, and industry demand.",
    requirements: [
      "Develop an interactive career exploration platform focused on trades",
      "Create visualization tools for career paths and advancement opportunities",
      "Build a matching system between student interests/aptitudes and trade programs",
      "Integrate real-time labor market data and salary information",
      "Include success stories and day-in-the-life content from trade professionals",
      "Implement virtual tours of trade school facilities and workplaces",
      "Create cost comparison tools between different educational paths",
      "Build connections with local trade schools and employers",
      "Include apprenticeship and certification tracking",
      "Develop ROI calculators for different trade paths"
    ],
    prize: [
      "Eligible for $500 KSTC community cash prize"
    ],
    tracks: ["Education", "Community", "Data"]
  },
  {
    sponsor: "Keyhorse.VC",
    context: "If a site like KeyHorse.VC were built from the perspective of hackers and THEIR needs and perspectives for exploring at early-stage tech companies, what would it look like and what functionality would it provide?  What needs should be addressed? Related intern, fellow or job opportunities?; in-depth understanding what regional startup community companies are working on?; tech-stack navigator?; finding mentors?; one long page of tik-tok videos? considering funding for one’s own scalable innovation or tech?; or something else entirely?",
    problem: "Design and develop a replacement to KeyHorse.VC website to create a more dynamic, user-friendly platform for the NEXT tech community; the solution should prioritize this audience (if any other audiences are considered, they should be secondary).",
    requirements: [
      "Make it data-driven",
      "Make it useful to participants in HackKentucky",
      "Create a modern, responsive design that reflects Kentucky's entrepreneurial spirit",
      "Features might (or might not) include:",
      " - An interactive portfolio showcase of Kentucky startups",
      " - A contact system to facilitate tech community inquiries",
      " - Success stories and founder testimonials",
      " - An integrated a CMS for easy content updates",
      " - Or, who knows, that’s the point, we have no clue"
    ],
    prize: [
      "Something super fancy, tbd",
      "Networking opportunity with Kentucky startup founders",
      "Eligible for $500 KSTC community cash prize"
    ],
    tracks: ["Startup", "Community", "Infrastructure"]
  },
  {
    sponsor: "Louisville Real Estate Innovation",
    context: "Louisville's real estate market presents unique opportunities at the intersection of opportunity zones, historic districts, and government-sponsored financing programs. However, identifying properties that qualify for multiple incentives requires analyzing various disconnected data sources.",
    problem: "Create a data-driven web platform that identifies Louisville properties eligible for multiple development incentives by combining opportunity zone data, historic district information, and government financing program criteria.",
    requirements: [
      "Build a web interface showing properties that are both in opportunity zones and historic districts",
      "Integrate PVA (Property Valuation Administrator) data",
      "Include eligibility checking for Louisville government loan programs",
      "Create interactive maps showing eligible properties",
      "Implement property filtering based on development criteria",
      "Include basic financial analysis tools for investment evaluation",
      "Document data sources and update frequency",
      "Bonus: Integration with Zillow API for market data",
      "Bonus: Web scraping for additional property information",
      "Bonus: Machine learning for property potential scoring"
    ],
    prize: [
      "Investment partnership opportunity for viable property discoveries",
      "Mentorship session with experienced real estate developers",
      "Opportunity to implement solution for ongoing use"
    ],
    tracks: ["Data", "Real Estate", "Community"]
  },
  {
    sponsor: "Peer",
    context: "Peer's focus is to connect people through moments of shared beauty through in-person interactions. Traditional platforms force artists to fit into algorithms and focus on self-promotion over self-expression. Peer offers an alternative through physical tools called Tonics and Cues that bridge the physical and digital world, allowing artists to share their work and supporters to engage with it in a more personal way.",
    problem: "Create a secure, invite-only landing page system that introduces people to Peer's vision while maintaining an intentional, controlled growth of the community through referrals and NFC-enabled Backer Tonics.",
    requirements: [
      "See here: https://star-gateway-cf5.notion.site/Peer-Hackathon-Developer-Guide-1a137bcaa3c18074a33fd7d92201e28e",
      "Build a gated landing page accessible only through invite links or NFC scans",
      "Implement role-based content paths (artist/supporter/backer)",
      "Create CMS integration for non-technical content updates",
      "Develop phone number/email validation system for access",
      "Build member dashboard with invite link generation",
      "Implement referral tracking system",
      "Create simple payment integration (Venmo initially)",
      "Design system reflecting Peer's values of intention and community",
      "Implement invite link sharing via text/email/airdrop",
      "Build referral tracking dashboard",
      "Bonus: Downstream referral counter",
      "Bonus: Team updates integration in dashboard",
      "Bonus: Payment and purchase tracking for admins"
    ],
    prize: [
      "$250 cash bounty",
      "Recognition in Peer's first community update",
      "Letter of appreciation from Peer team"
    ],
    tracks: ["Community", "Infrastructure", "Startup"],
    files: ["https://star-gateway-cf5.notion.site/Peer-Hackathon-Developer-Guide-1a137bcaa3c18074a33fd7d92201e28e"]
  },
]

export function Projects() {
  const copyToClipboard = (sponsor: string) => {
    const url = `${window.location.origin}${window.location.pathname}#${sponsor.toLowerCase().replace(/\s+/g, '-')}`;
    navigator.clipboard.writeText(url);
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Sponsored Projects</h2>
            <p className="text-muted-foreground mb-8">
              Companies are offering dedicated prizes for solutions to their Projects
            </p>
            
            {/* Directory */}
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {prizes.map((prize, index) => (
                <Link
                  key={index}
                  href={`#${prize.sponsor.toLowerCase().replace(/\s+/g, '-')}`}
                  className="px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-full text-sm transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(`${prize.sponsor.toLowerCase().replace(/\s+/g, '-')}`)?.scrollIntoView({
                      behavior: 'smooth'
                    });
                  }}
                >
                  {prize.sponsor}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            {prizes.map((prize, index) => (
              <div
                id={prize.sponsor.toLowerCase().replace(/\s+/g, '-')}
                key={index}
                className="bg-card/50 backdrop-blur-sm rounded-xl shadow-lg border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-6">
                    <div className="flex items-center gap-2">
                      <h3 className="text-2xl font-bold">{prize.sponsor}</h3>
                      <button
                        onClick={() => copyToClipboard(prize.sponsor)}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        title="Copy link to clipboard"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="inline-block"
                        >
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                        </svg>
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {prize.tracks.map((track) => (
                        <span
                          key={track}
                          className="px-3 py-1 bg-primary/90 rounded-full text-sm"
                        >
                          {track}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Context:</h4>
                      <p className="text-muted-foreground">{prize.context}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Problem:</h4>
                      <p className="text-muted-foreground">{prize.problem}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-2">Requirements:</h4>
                      <ul className="grid gap-1">
                        {prize.requirements.map((req, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span>•</span>
                            <span className="text-muted-foreground">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="w-full md:w-auto">
                      <h4 className="font-semibold mb-2">Prize:</h4>
                      <ul className="list-none space-y-1">
                        {prize.prize.map((prizeItem, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span>•</span>
                            <span className="text-muted-foreground">{prizeItem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {prize.files && prize.files.length > 0 && (
                      <div className="w-full md:w-auto">
                        <h4 className="font-semibold mb-2">Project Files:</h4>
                        <ul className="list-none space-y-1">
                          {prize.files.map((file, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span>•</span>
                              <Link 
                                href={file}
                                className="text-primary hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {file.split('/').pop()}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="bg-primary/5 p-8 rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-4">Want to Submit a Project?</h3>
            <p className="text-muted-foreground mb-6">
              Join other innovative companies in challenging our hackers with your problem.
            </p>
            <Link
              href="https://kycombinator.typeform.com/hackkyproject"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-all duration-300"
            >
              Submit Your Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 
