import { Button } from "@/components/ui/button"

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main Grid Layout */}
      <div className="grid grid-cols-4 grid-rows-auto min-h-screen w-[90vw] mx-auto">
        
        {/* Hero Title Section */}
        <div className="col-span-4 border-[1px] border-zinc-900/40 p-8 flex flex-col justify-center">
          <h1 className="text-4xl md:text-[120px] font-bold tracking-wider mb-8 font-atamiga">24 HOUR</h1>
          <h1 className="text-4xl md:text-[120px] font-bold tracking-wider mb-4 font-atamiga">SCHEDULE</h1>
          <p className="text-xl text-gray-600 mt-8">Your complete hackathon timeline</p>
        </div>

        {/* Friday Schedule */}
        <div className="col-span-4 border-[1px] border-zinc-900/40 p-8">
          <div className="flex items-center mb-6">
            <div className="text-4xl mr-4">💡</div>
            <div>
              <h2 className="text-3xl font-bold tracking-wider font-atamiga">FRIDAY - HACK DAY</h2>
              <p className="text-gray-600">Kickoff and team formation</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-lg font-bold">4:00 PM</span>
                  <span className="text-sm text-gray-600 bg-blue-100 px-2 py-1 rounded">Start</span>
                </div>
                <h3 className="font-semibold mb-1">Doors Open</h3>
                <p className="text-sm text-gray-600">Registration and check-in</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-lg font-bold">5:05 PM</span>
                  <span className="text-sm text-gray-600 bg-green-100 px-2 py-1 rounded">Social</span>
                </div>
                <h3 className="font-semibold mb-1">Networking & Gateway Timeout Game</h3>
                <p className="text-sm text-gray-600">Meet fellow hackers and form teams</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-lg font-bold">6:00 PM</span>
                  <span className="text-sm text-gray-600 bg-orange-100 px-2 py-1 rounded">Food</span>
                </div>
                <h3 className="font-semibold mb-1">Dinner</h3>
                <p className="text-sm text-gray-600">Fuel up for the weekend ahead</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-lg font-bold">10:10 PM</span>
                  <span className="text-sm text-gray-600 bg-purple-100 px-2 py-1 rounded">Fun</span>
                </div>
                <h3 className="font-semibold mb-1">10 Minute Party</h3>
                <p className="text-sm text-gray-600">Quick celebration and team bonding</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-lg font-bold">11:00 PM</span>
                  <span className="text-sm text-gray-600 bg-red-100 px-2 py-1 rounded">End</span>
                </div>
                <h3 className="font-semibold mb-1">Doors Close</h3>
                <p className="text-sm text-gray-600">No entry/exit until 6am for security</p>
              </div>
            </div>
          </div>
        </div>

        {/* Saturday Schedule */}
        <div className="col-span-4 border-[1px] border-zinc-900/40 p-8">
          <div className="flex items-center mb-6">
            <div className="text-4xl mr-4">💡</div>
            <div>
              <h2 className="text-3xl font-bold tracking-wider font-atamiga">SATURDAY - BUILD DAY</h2>
              <p className="text-gray-600">Full day of coding and learning</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-lg font-bold">7:00 AM</span>
                  <span className="text-sm text-gray-600 bg-blue-100 px-2 py-1 rounded">Start</span>
                </div>
                <h3 className="font-semibold mb-1">Doors Open</h3>
                <p className="text-sm text-gray-600">Early birds welcome</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-lg font-bold">7:30 AM</span>
                  <span className="text-sm text-gray-600 bg-orange-100 px-2 py-1 rounded">Food</span>
                </div>
                <h3 className="font-semibold mb-1">Breakfast</h3>
                <p className="text-sm text-gray-600">Start your day right</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-lg font-bold">8:00 AM</span>
                  <span className="text-sm text-gray-600 bg-yellow-100 px-2 py-1 rounded">Bonus</span>
                </div>
                <h3 className="font-semibold mb-1">Sunrise Surprise</h3>
                <p className="text-sm text-gray-600">Earn +1 bonus point if you demo</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-lg font-bold">11:30 AM - 5:00 PM</span>
                  <span className="text-sm text-gray-600 bg-green-100 px-2 py-1 rounded">Learn</span>
                </div>
                <h3 className="font-semibold mb-1">Expert Speakers</h3>
                <p className="text-sm text-gray-600">Industry leaders from top tech companies</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-lg font-bold">1:00 PM</span>
                  <span className="text-sm text-gray-600 bg-orange-100 px-2 py-1 rounded">Food</span>
                </div>
                <h3 className="font-semibold mb-1">Lunch</h3>
                <p className="text-sm text-gray-600">Refuel for the afternoon</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-lg font-bold">5:05 PM</span>
                  <span className="text-sm text-gray-600 bg-yellow-100 px-2 py-1 rounded">Bonus</span>
                </div>
                <h3 className="font-semibold mb-1">Demo Time</h3>
                <p className="text-sm text-gray-600">Earn +1 bonus point if you demo</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-lg font-bold">7:00 PM</span>
                  <span className="text-sm text-gray-600 bg-orange-100 px-2 py-1 rounded">Food</span>
                </div>
                <h3 className="font-semibold mb-1">Dinner</h3>
                <p className="text-sm text-gray-600">Evening fuel</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-lg font-bold">10:10 PM</span>
                  <span className="text-sm text-gray-600 bg-purple-100 px-2 py-1 rounded">Fun</span>
                </div>
                <h3 className="font-semibold mb-1">10 Minute Party</h3>
                <p className="text-sm text-gray-600">Celebrate your progress</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sunday Schedule */}
        <div className="col-span-4 border-[1px] border-zinc-900/40 p-8">
          <div className="flex items-center mb-6">
            <div className="text-4xl mr-4">💡</div>
            <div>
              <h2 className="text-3xl font-bold tracking-wider font-atamiga">SUNDAY - CAREER DAY</h2>
              <p className="text-gray-600">Final presentations and networking</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-lg font-bold">7:00 AM</span>
                  <span className="text-sm text-gray-600 bg-blue-100 px-2 py-1 rounded">Start</span>
                </div>
                <h3 className="font-semibold mb-1">Doors Open</h3>
                <p className="text-sm text-gray-600">Final day begins</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-lg font-bold">7:30 AM</span>
                  <span className="text-sm text-gray-600 bg-orange-100 px-2 py-1 rounded">Food</span>
                </div>
                <h3 className="font-semibold mb-1">Breakfast</h3>
                <p className="text-sm text-gray-600">Last meal together</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-lg font-bold">10:00 AM - 1:00 PM</span>
                  <span className="text-sm text-gray-600 bg-green-100 px-2 py-1 rounded">Network</span>
                </div>
                <h3 className="font-semibold mb-1">Open Networking</h3>
                <p className="text-sm text-gray-600">Connect with sponsors and recruiters</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-lg font-bold">10:10 AM</span>
                  <span className="text-sm text-gray-600 bg-red-100 px-2 py-1 rounded">Warning</span>
                </div>
                <h3 className="font-semibold mb-1">10 Minute Warning</h3>
                <p className="text-sm text-gray-600">Final preparations</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-lg font-bold">10:20 AM</span>
                  <span className="text-sm text-gray-600 bg-purple-100 px-2 py-1 rounded">Judge</span>
                </div>
                <h3 className="font-semibold mb-1">Track Judging Begins</h3>
                <p className="text-sm text-gray-600">Present to track-specific judges</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-lg font-bold">11:00 AM</span>
                  <span className="text-sm text-gray-600 bg-green-100 px-2 py-1 rounded">Career</span>
                </div>
                <h3 className="font-semibold mb-1">Resume Roast</h3>
                <p className="text-sm text-gray-600">Get feedback on your resume</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-lg font-bold">11:30 AM - 12:15 PM</span>
                  <span className="text-sm text-gray-600 bg-yellow-100 px-2 py-1 rounded">Finals</span>
                </div>
                <h3 className="font-semibold mb-1">Main Stage Competition</h3>
                <p className="text-sm text-gray-600">Finalists present for grand prize</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-lg font-bold">1:00 PM</span>
                  <span className="text-sm text-gray-600 bg-gold-100 px-2 py-1 rounded">Winner</span>
                </div>
                <h3 className="font-semibold mb-1">Winner Announced</h3>
                <p className="text-sm text-gray-600">Celebration and closing ceremony</p>
              </div>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="col-span-4 border-[1px] border-zinc-900/40 p-8">
          <h2 className="text-2xl font-bold tracking-wider mb-6 font-atamiga">IMPORTANT NOTES</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
              <h3 className="text-lg font-semibold mb-3 text-red-800">Safety Rules</h3>
              <ul className="text-sm text-red-700 space-y-2">
                <li>• No leaving building between 11pm - 6am</li>
                <li>• Participants 18 and under cannot stay overnight</li>
                <li>• Entry/reentry not permitted during overnight hours</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
              <h3 className="text-lg font-semibold mb-3 text-blue-800">Bonus Points</h3>
              <ul className="text-sm text-blue-700 space-y-2">
                <li>• +1 point for Sunrise Surprise demo (8am Saturday)</li>
                <li>• +1 point for Demo Time presentation (5:05pm Saturday)</li>
                <li>• Additional bonus opportunities throughout</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="col-span-4 border-[1px] border-zinc-900/40 p-8 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold tracking-wider mb-4 font-atamiga">READY FOR 24 HOURS?</h2>
          <p className="text-lg text-gray-600 mb-6 text-center">Join us for an intensive weekend of coding, learning, and building</p>
          <Button className="bg-black text-white px-8 py-3 text-lg hover:bg-gray-800">
            Register Now
          </Button>
        </div>
      </div>
    </div>
  )
}