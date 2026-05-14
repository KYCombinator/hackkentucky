import { Button } from "@/components/ui/button"
import { StatCard } from "@/components/ui/grid-section"

export default function FormatPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main Grid Layout */}
      <div className="grid grid-cols-4 grid-rows-auto min-h-screen w-[90vw] mx-auto">
        
        {/* Hero Title Section */}
        <div className="col-span-4 border-[1px] border-zinc-900/40 p-8 flex flex-col justify-center">
          <h1 className="text-4xl md:text-[120px] font-bold tracking-wider mb-8 font-atamiga">HACK</h1>
          <h1 className="text-4xl md:text-[120px] font-bold tracking-wider mb-4 font-atamiga">FORMAT</h1>
          <p className="text-xl text-gray-600 mt-8">How the competition works</p>
        </div>

        {/* Process Steps */}
        <div className="col-span-4 border-[1px] border-zinc-900/40 p-8">
          <h2 className="text-3xl font-bold tracking-wider mb-8 font-atamiga">HOW IT WORKS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border-[1px] border-zinc-900/40 p-6 bg-white">
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm text-gray-600">01</div>
                <div className="w-16 h-16 bg-gray-200 rounded border-2 border-dashed border-gray-400 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-1">
                    {Array.from({length: 4}).map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    ))}
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">Form Your Team</h3>
              <p className="text-sm text-gray-600">Gather 2-5 members and select a team captain</p>
            </div>

            <div className="border-[1px] border-zinc-900/40 p-6 bg-white">
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm text-gray-600">02</div>
                <div className="w-16 h-16 bg-gray-200 rounded border-2 border-dashed border-gray-400 flex items-center justify-center">
                  <div className="space-y-1">
                    {Array.from({length: 3}).map((_, i) => (
                      <div key={i} className="w-8 h-1 bg-gray-400 rounded"></div>
                    ))}
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">Select Your Problem</h3>
              <p className="text-sm text-gray-600">Choose from sponsor challenges or propose your own</p>
            </div>

            <div className="border-[1px] border-zinc-900/40 p-6 bg-white">
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm text-gray-600">03</div>
                <div className="w-16 h-16 bg-gray-200 rounded border-2 border-dashed border-gray-400 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-1">
                    {Array.from({length: 9}).map((_, i) => (
                      <div key={i} className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    ))}
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">Build a Solution</h3>
              <p className="text-sm text-gray-600">24 hours to build, test, and refine your solution</p>
            </div>

            <div className="border-[1px] border-zinc-900/40 p-6 bg-white">
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm text-gray-600">04</div>
                <div className="w-16 h-16 bg-gray-200 rounded border-2 border-dashed border-gray-400 flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-gray-400 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">May the Best Solution Win</h3>
              <p className="text-sm text-gray-600">Present to judges and compete for prizes</p>
            </div>
          </div>
        </div>

        {/* Prizes Section */}
        <div className="col-span-2 border-[1px] border-zinc-900/40 p-8">
          <h2 className="text-3xl font-bold tracking-wider mb-6 font-atamiga">PRIZES</h2>
          
          <div className="space-y-6">
            <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-300">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">💰</div>
                <div>
                  <h3 className="text-2xl font-bold">$2,500 Grand Prize</h3>
                  <p className="text-sm text-gray-600">Winner takes all</p>
                </div>
              </div>
              <p className="text-sm text-gray-700">
                Track winners compete for the grand prize. In a crowded track? 
                Don&apos;t worry - there are also &quot;wildcard&quot; spots for the finals.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-3">Additional Prizes</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Track-specific sponsor prizes</li>
                <li>• Best use of technology awards</li>
                <li>• People&apos;s choice award</li>
                <li>• Most innovative solution</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Competition Stats */}
        <div className="col-span-2 border-[1px] border-zinc-900/40 p-6">
          <h2 className="text-2xl font-bold tracking-wider mb-6 font-atamiga">COMPETITION STATS</h2>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="border-[1px] border-zinc-900/40 p-4">
              <StatCard
                title="Hours"
                value="48"
                description="To Build"
                className="glass-card h-full"
              />
            </div>
            
            <div className="border-[1px] border-zinc-900/40 p-4">
              <StatCard
                title="Team Size"
                value="2-5"
                description="Members"
                className="glass-card h-full"
              />
            </div>
            
            <div className="border-[1px] border-zinc-900/40 p-4">
              <StatCard
                title="Tracks"
                value="Multiple"
                description="Problem Areas"
                className="glass-card h-full"
              />
            </div>
            
            <div className="border-[1px] border-zinc-900/40 p-4">
              <StatCard
                title="Judges"
                value="Expert"
                description="Panel"
                className="glass-card h-full"
              />
            </div>
          </div>
        </div>

        {/* Rules Preview */}
        <div className="col-span-4 border-[1px] border-zinc-900/40 p-8">
          <h2 className="text-3xl font-bold tracking-wider mb-6 font-atamiga">KEY RULES</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-3">Team Rules</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• 2-5 members per team</li>
                <li>• Must have 2 in-person members</li>
                <li>• Select a team captain</li>
                <li>• No team changes after Day 2 lunch</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-3">Hack Rules</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• AI tools allowed</li>
                <li>• All code by team members</li>
                <li>• Code sharing allowed if agreed</li>
                <li>• Encouraged to code on-site</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-3">Presentation</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Must present in-person</li>
                <li>• 2+ team members present</li>
                <li>• Working prototype required</li>
                <li>• Clear demo and explanation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="col-span-4 border-[1px] border-zinc-900/40 p-8 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold tracking-wider mb-4 font-atamiga">READY TO COMPETE?</h2>
          <p className="text-lg text-gray-600 mb-6 text-center">Join Kentucky&apos;s premier hackathon competition</p>
          <Button className="bg-black text-white px-8 py-3 text-lg hover:bg-gray-800">
            Register Your Team
          </Button>
        </div>
      </div>
    </div>
  )
}