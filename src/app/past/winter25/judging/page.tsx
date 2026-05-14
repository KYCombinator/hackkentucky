import { Button } from "@/components/ui/button"
import { StatCard } from "@/components/ui/grid-section"

export default function JudgingPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main Grid Layout */}
      <div className="grid grid-cols-4 grid-rows-auto min-h-screen w-[90vw] mx-auto">
        
        {/* Hero Title Section */}
        <div className="col-span-4 border-[1px] border-zinc-900/40 p-8 flex flex-col justify-center">
          <h1 className="text-4xl md:text-[120px] font-bold tracking-wider mb-8 font-atamiga">JUDGING</h1>
          <h1 className="text-4xl md:text-[120px] font-bold tracking-wider mb-4 font-atamiga">CRITERIA</h1>
          <p className="text-xl text-gray-600 mt-8">How we evaluate your hackathon projects</p>
        </div>

        {/* Philosophy Section */}
        <div className="col-span-4 border-[1px] border-zinc-900/40 p-8">
          <h2 className="text-3xl font-bold tracking-wider mb-6 font-atamiga">JUDGING PHILOSOPHY</h2>
          
          <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200 mb-6">
            <p className="text-lg text-blue-800 font-medium">
              In alignment with our values, the KYCombinator hackathon rewards <strong>high-agency and high-velocity</strong>. 
              We&apos;re looking at speed, execution, and impact. We&apos;re indexing on progress - not just motion.
            </p>
          </div>
        </div>

        {/* 5 Minute Judging Flow */}
        <div className="col-span-2 border-[1px] border-zinc-900/40 p-6">
          <h2 className="text-2xl font-bold tracking-wider mb-6 font-atamiga">5 MINUTE JUDGING FLOW</h2>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</div>
                <h3 className="font-semibold">Minutes: Problem & Solution</h3>
              </div>
              <p className="text-sm text-gray-600 ml-11">
                Hacker explains who&apos;s their customer, what&apos;s their problem, and what&apos;s the solution
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</div>
                <h3 className="font-semibold">Minutes: Product Demo</h3>
              </div>
              <p className="text-sm text-gray-600 ml-11">
                Judge uses the product as a customer would
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</div>
                <h3 className="font-semibold">Minute: Additional Features</h3>
              </div>
              <p className="text-sm text-gray-600 ml-11">
                Hacker shows judge features they might have missed
              </p>
            </div>
          </div>
        </div>

        {/* Hard Requirements */}
        <div className="col-span-2 border-[1px] border-zinc-900/40 p-6">
          <h2 className="text-2xl font-bold tracking-wider mb-6 font-atamiga">HARD REQUIREMENTS</h2>
          
          <div className="space-y-4">
            <div className="bg-red-50 p-4 rounded-lg border-2 border-red-200">
              <h3 className="font-semibold mb-2 text-red-800">Working Prototype</h3>
              <p className="text-sm text-red-700">
                Must have a working prototype with access link for autonomous judge review
              </p>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border-2 border-yellow-200">
              <h3 className="font-semibold mb-2 text-yellow-800">Clear Presentation</h3>
              <p className="text-sm text-yellow-700">
                A 5-year-old should understand the customer, problem, and solution in 2 minutes
              </p>
            </div>
          </div>
        </div>

        {/* Main Scoring Categories */}
        <div className="col-span-4 border-[1px] border-zinc-900/40 p-8">
          <h2 className="text-3xl font-bold tracking-wider mb-6 font-atamiga">SCORING CATEGORIES (5 PTS EACH)</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* High Agency */}
            <div className="border-[1px] border-zinc-900/40 p-6 bg-white">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded border-2 border-dashed border-blue-400 flex items-center justify-center mx-auto mb-3">
                  <div className="text-blue-600 font-bold text-lg">5</div>
                </div>
                <h3 className="text-lg font-bold">High Agency</h3>
              </div>
              
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Customer interviews outside team</p>
                <p>• Tested with prospects mid-development</p>
                <p>• Real customers used current version</p>
                <p>• Exhibited high agency during hackathon</p>
              </div>
            </div>

            {/* Creativity & Innovation */}
            <div className="border-[1px] border-zinc-900/40 p-6 bg-white">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded border-2 border-dashed border-green-400 flex items-center justify-center mx-auto mb-3">
                  <div className="text-green-600 font-bold text-lg">5</div>
                </div>
                <h3 className="text-lg font-bold">Creativity & Innovation</h3>
              </div>
              
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Demonstrated skill/technique in solution</p>
                <p>• Simplified and saved time/resources</p>
                <p>• Used variety of tech and knowledge</p>
                <p>• Unique or interesting spin vs remake</p>
              </div>
            </div>

            {/* Presentation & Clarity */}
            <div className="border-[1px] border-zinc-900/40 p-6 bg-white">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-purple-100 rounded border-2 border-dashed border-purple-400 flex items-center justify-center mx-auto mb-3">
                  <div className="text-purple-600 font-bold text-lg">5</div>
                </div>
                <h3 className="text-lg font-bold">Presentation & Clarity</h3>
              </div>
              
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Clear explanation under pressure</p>
                <p>• Can &quot;sell&quot; the solution effectively</p>
                <p>• Demo flows smoothly</p>
                <p>• Professional presentation</p>
              </div>
            </div>

            {/* Impact & Usefulness */}
            <div className="border-[1px] border-zinc-900/40 p-6 bg-white">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-orange-100 rounded border-2 border-dashed border-orange-400 flex items-center justify-center mx-auto mb-3">
                  <div className="text-orange-600 font-bold text-lg">5</div>
                </div>
                <h3 className="text-lg font-bold">Impact & Usefulness</h3>
              </div>
              
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Big, painful problem for sizable group</p>
                <p>• Solution actually solves the problem</p>
                <p>• Highly effective at solving problem</p>
                <p>• &quot;Finished&quot; MVP ready state</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bonus Points */}
        <div className="col-span-4 border-[1px] border-zinc-900/40 p-8">
          <h2 className="text-3xl font-bold tracking-wider mb-6 font-atamiga">BONUS POINTS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
              <h3 className="text-lg font-semibold mb-3 text-green-800">Team Diversity (+1)</h3>
              <p className="text-sm text-green-700">
                Team has non-CS people with material impact to solution/presentation
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
              <h3 className="text-lg font-semibold mb-3 text-blue-800">Open Source (+1)</h3>
              <p className="text-sm text-blue-700">
                Solution is open-source with public git repo for other hackers
              </p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-200">
              <h3 className="text-lg font-semibold mb-3 text-purple-800">Early MVP (+1)</h3>
              <p className="text-sm text-purple-700">
                Team had an MVP within the first day of the hackathon
              </p>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-200">
              <h3 className="text-lg font-semibold mb-3 text-yellow-800">Learning (+1)</h3>
              <p className="text-sm text-yellow-700">
                Team demonstrated learning during the hackathon (subjective)
              </p>
            </div>
            
            <div className="bg-pink-50 p-6 rounded-lg border-2 border-pink-200">
              <h3 className="text-lg font-semibold mb-3 text-pink-800">Fun Factor (+1)</h3>
              <p className="text-sm text-pink-700">
                Team had fun during the event (subjective)
              </p>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-lg border-2 border-orange-200">
              <h3 className="text-lg font-semibold mb-3 text-orange-800">Social Impact</h3>
              <p className="text-sm text-orange-700">
                Solves massive problem in overlooked market (mental health, food scarcity, etc.)
              </p>
            </div>
          </div>
        </div>

        {/* Additional Considerations */}
        <div className="col-span-4 border-[1px] border-zinc-900/40 p-8">
          <h2 className="text-2xl font-bold tracking-wider mb-6 font-atamiga">ADDITIONAL CONSIDERATIONS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold mb-3">Accessibility & Inclusivity</h3>
              <p className="text-sm text-gray-600">
                Teams that consider contrast, font sizing, and WCAG guidelines to ensure 
                their tech is accessible, especially for their target audience.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold mb-3">Judge&apos;s Discretion</h3>
              <p className="text-sm text-gray-600">
                Judges can award up to 3 additional points at their discretion for 
                exceptional innovation, technical excellence, or other standout qualities.
              </p>
            </div>
          </div>
        </div>

        {/* Scoring Summary */}
        <div className="col-span-4 border-[1px] border-zinc-900/40 p-6">
          <h2 className="text-2xl font-bold tracking-wider mb-6 font-atamiga text-center">TOTAL POSSIBLE SCORE</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="border-[1px] border-zinc-900/40 p-4">
              <StatCard
                title="Base"
                value="20"
                description="Core Categories"
                className="glass-card h-full"
              />
            </div>
            
            <div className="border-[1px] border-zinc-900/40 p-4">
              <StatCard
                title="Bonus"
                value="5+"
                description="Additional Points"
                className="glass-card h-full"
              />
            </div>
            
            <div className="border-[1px] border-zinc-900/40 p-4">
              <StatCard
                title="Judge"
                value="3"
                description="Discretionary"
                className="glass-card h-full"
              />
            </div>
            
            <div className="border-[1px] border-zinc-900/40 p-4">
              <StatCard
                title="Max"
                value="28+"
                description="Total Possible"
                className="glass-card h-full"
              />
            </div>
            
            <div className="border-[1px] border-zinc-900/40 p-4">
              <StatCard
                title="Time"
                value="5"
                description="Minutes Per Team"
                className="glass-card h-full"
              />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="col-span-4 border-[1px] border-zinc-900/40 p-8 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold tracking-wider mb-4 font-atamiga">READY TO IMPRESS THE JUDGES?</h2>
          <p className="text-lg text-gray-600 mb-6 text-center">Build something impactful, demo it clearly, and show your high agency</p>
          <Button className="bg-black text-white px-8 py-3 text-lg hover:bg-gray-800">
            Start Building
          </Button>
        </div>
      </div>
    </div>
  )
}