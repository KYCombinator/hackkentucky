import { Button } from "@/components/ui/button"

export default function HowToHackPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main Grid Layout */}
      <div className="grid grid-cols-4 grid-rows-auto min-h-screen w-[90vw] mx-auto">
        
        {/* Hero Title Section */}
        <div className="col-span-4 border-[1px] border-zinc-900/40 p-8 flex flex-col justify-center">
          <h1 className="text-4xl md:text-[120px] font-bold tracking-wider mb-8 font-atamiga">HOW TO WIN</h1>
          <h1 className="text-4xl md:text-[120px] font-bold tracking-wider mb-4 font-atamiga">A HACKATHON</h1>
          <p className="text-xl text-gray-600 mt-8">Tips for building a winning hack</p>
        </div>

        {/* Core Principles */}
        <div className="col-span-4 border-[1px] border-zinc-900/40 p-8">
          <h2 className="text-3xl font-bold tracking-wider mb-6 font-atamiga">CORE PRINCIPLES</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-[1px] border-zinc-900/40 p-6 bg-white">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded border-2 border-dashed border-blue-400 flex items-center justify-center mx-auto mb-3">
                  <div className="text-2xl">⚡</div>
                </div>
                <h3 className="text-xl font-bold">MVP in 1 Hour</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Ship the smallest, most basic version of your final product within 1 hour.
              </p>
              <div className="bg-gray-50 p-3 rounded text-xs text-gray-700">
                <strong>Example:</strong> Building Slack? Have a webapp that can create a channel 
                and post a message in 1-2 hours. No login, no branding, no scale - but the core feature works.
              </div>
            </div>

            <div className="border-[1px] border-zinc-900/40 p-6 bg-white">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded border-2 border-dashed border-green-400 flex items-center justify-center mx-auto mb-3">
                  <div className="text-2xl">🚀</div>
                </div>
                <h3 className="text-xl font-bold">Speed Over All</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Prioritize speed to production when setting up your dev environment & choosing your stack.
              </p>
              <div className="bg-gray-50 p-3 rounded text-xs text-gray-700">
                <strong>Tip:</strong> Now is not the time to learn Docker for the first time. 
                Pick an easy, hacky stack like AppScript with Google Sheets as your DB.
              </div>
            </div>

            <div className="border-[1px] border-zinc-900/40 p-6 bg-white">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-purple-100 rounded border-2 border-dashed border-purple-400 flex items-center justify-center mx-auto mb-3">
                  <div className="text-2xl">🎯</div>
                </div>
                <h3 className="text-xl font-bold">Focus</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Your problem should be narrow and your solution technically simple.
              </p>
              <div className="bg-gray-50 p-3 rounded text-xs text-gray-700">
                <strong>Remember:</strong> It&apos;s better to solve one problem really well than 
                to try solving multiple problems poorly.
              </div>
            </div>
          </div>
        </div>

        {/* Hacking A Hackathon */}
        <div className="col-span-4 border-[1px] border-zinc-900/40 p-8">
          <h2 className="text-3xl font-bold tracking-wider mb-6 font-atamiga">HACKING A HACKATHON</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-start mb-3">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">1</div>
                  <div>
                    <h3 className="font-semibold mb-2">Start Fast, Decide Faster</h3>
                    <p className="text-sm text-gray-600">
                      Pick an idea in 15 minutes - don&apos;t overthink it. The faster you decide, the more time you have to build.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-start mb-3">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">2</div>
                  <div>
                    <h3 className="font-semibold mb-2">Build a &quot;Demo-First&quot; MVP</h3>
                    <p className="text-sm text-gray-600">
                      Prioritize something you can SHOW, not just talk about. Skip perfect architecture - make it work first.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-start mb-3">
                  <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">3</div>
                  <div>
                    <h3 className="font-semibold mb-2">Ship Small, Ship Often</h3>
                    <p className="text-sm text-gray-600">
                      Get a working version ASAP - even if it&apos;s ugly. Frequent commits & small wins keep momentum high.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-start mb-3">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">4</div>
                  <div>
                    <h3 className="font-semibold mb-2">Automate Boring, Non-Innovative Stuff</h3>
                    <p className="text-sm text-gray-600">
                      Use APIs, AI tools, and no-code where you can. Don&apos;t reinvent the wheel - move fast!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-start mb-3">
                  <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">5</div>
                  <div>
                    <h3 className="font-semibold mb-2">Divide & Conquer</h3>
                    <p className="text-sm text-gray-600">
                      One person stuck? Move on or swap tasks. Time is your biggest enemy - don&apos;t waste it!
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-start mb-3">
                  <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">6</div>
                  <div>
                    <h3 className="font-semibold mb-2">Sleep is Optional / Good Attitude is Mandatory</h3>
                    <p className="text-sm text-gray-600">
                      Drink coffee, hydrate, and keep the vibes high. Momentum beats burnout.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-start mb-3">
                  <div className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">7</div>
                  <div>
                    <h3 className="font-semibold mb-2">The Best Hack = A Working Hack</h3>
                    <p className="text-sm text-gray-600">
                      It doesn&apos;t have to be revolutionary. If it works and looks impressive, you&apos;re winning.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-start mb-3">
                  <div className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">8</div>
                  <div>
                    <h3 className="font-semibold mb-2">HAVE FUN & BREAK THINGS (RESPONSIBLY!)</h3>
                    <p className="text-sm text-gray-600">
                      Hackathons are chaos. Embrace it. Build something cool, make new friends, and enjoy the ride.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MVP Building Guide */}
        <div className="col-span-4 border-[1px] border-zinc-900/40 p-8">
          <h2 className="text-3xl font-bold tracking-wider mb-6 font-atamiga">HOW TO BUILD A MINIMUM VIABLE PRODUCT</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200 mb-4">
                <h3 className="text-lg font-semibold mb-3 text-red-800">❌ NOT LIKE THIS</h3>
                <ul className="text-sm text-red-700 space-y-2">
                  <li>• Spending hours on perfect UI/UX</li>
                  <li>• Building complex authentication systems</li>
                  <li>• Focusing on scalability and architecture</li>
                  <li>• Adding features nobody asked for</li>
                  <li>• Learning new technologies during the hack</li>
                </ul>
              </div>
            </div>
            
            <div>
              <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200 mb-4">
                <h3 className="text-lg font-semibold mb-3 text-green-800">✅ LIKE THIS</h3>
                <ul className="text-sm text-green-700 space-y-2">
                  <li>• Core functionality working first</li>
                  <li>• Simple, clean interface</li>
                  <li>• Using familiar tools and frameworks</li>
                  <li>• Focus on the main problem</li>
                  <li>• Demo-ready prototype</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Tools & Templates */}
        <div className="col-span-2 border-[1px] border-zinc-900/40 p-6">
          <h2 className="text-2xl font-bold tracking-wider mb-6 font-atamiga">CODE TEMPLATES</h2>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold mb-2">Speed Up Development</h3>
              <p className="text-sm text-gray-600 mb-3">
                Boilerplate code will get you working faster.
              </p>
              <div className="bg-gray-50 p-3 rounded text-xs text-gray-700">
                If you&apos;re using AI or template engines, leverage them for the less innovative work (like login flows)
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
              <h3 className="font-semibold mb-2 text-blue-800">Recommended Quick Stacks</h3>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Next.js + Vercel for web apps</li>
                <li>• Google Apps Script + Sheets for data</li>
                <li>• Firebase for backend-as-a-service</li>
                <li>• Netlify for static site deployment</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="col-span-2 border-[1px] border-zinc-900/40 p-6">
          <h2 className="text-2xl font-bold tracking-wider mb-6 font-atamiga">SUCCESS METRICS</h2>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold mb-2">Working Demo</h3>
              <p className="text-sm text-gray-600">
                Can you show the core functionality to a judge in 2 minutes?
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold mb-2">Clear Value Proposition</h3>
              <p className="text-sm text-gray-600">
                Can a 5-year-old understand what problem you&apos;re solving?
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold mb-2">Technical Execution</h3>
              <p className="text-sm text-gray-600">
                Does your solution actually work as demonstrated?
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="col-span-4 border-[1px] border-zinc-900/40 p-8 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold tracking-wider mb-4 font-atamiga">READY TO HACK?</h2>
          <p className="text-lg text-gray-600 mb-6 text-center">
            Remember: Speed, focus, and fun are your keys to success
          </p>
          <Button className="bg-black text-white px-8 py-3 text-lg hover:bg-gray-800">
            Start Your Hack
          </Button>
        </div>
      </div>
    </div>
  )
}