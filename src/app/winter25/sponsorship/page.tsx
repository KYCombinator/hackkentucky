import { Button } from "@/components/ui/button"
import { StatCard } from "@/components/ui/grid-section"

export default function SponsorshipPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main Grid Layout */}
      <div className="grid grid-cols-4 grid-rows-auto min-h-screen w-[90vw] mx-auto">
        
        {/* Hero Title Section */}
        <div className="col-span-4 border-[1px] border-zinc-900/40 p-8 flex flex-col justify-center">
          <h1 className="text-4xl md:text-[120px] font-bold tracking-wider mb-8 font-atamiga">SPONSOR</h1>
          <h1 className="text-4xl md:text-[120px] font-bold tracking-wider mb-4 font-atamiga">HACK KENTUCKY</h1>
          <p className="text-xl text-gray-600 mt-8">Partner with Kentucky&apos;s most innovative minds</p>
        </div>

        {/* Why Sponsor Section */}
        <div className="col-span-4 border-[1px] border-zinc-900/40 p-8">
          <h2 className="text-3xl font-bold tracking-wider mb-6 font-atamiga">WHY SPONSOR</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-3">Hire & Attract Top Talent</h3>
                <p className="text-gray-600">We&apos;re asking hackers to work intensively for 24 hours. These will be the most talented and motivated individuals in Kentucky.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-3">Premium Brand Recognition</h3>
                <p className="text-gray-600">Separate your company from the rest with premium placement and put your company top of mind for a very low cost.</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-3">Rapid Problem Solving</h3>
                <p className="text-gray-600">Get multiple innovative solutions to your real business challenges in just 24 hours from diverse, talented developers and entrepreneurs.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-3">Resume Pack Access</h3>
                <p className="text-gray-600">We collect, filter, and organize resumes. Get exclusive access to our curated resume pack.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sponsorship Tiers */}
        <div className="col-span-4 border-[1px] border-zinc-900/40 p-8">
          <h2 className="text-3xl font-bold tracking-wider mb-8 font-atamiga">SPONSORSHIP TIERS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Community Sponsor */}
            <div className="border-[1px] border-zinc-900/40 p-6 bg-white">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Community</h3>
                <div className="text-3xl font-bold text-green-600">Free</div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Marketing Benefits</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Logo on website</li>
                    <li>• Social media mention</li>
                    <li>• Community supporter recognition</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Recruiting Benefits</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Basic participant interaction</li>
                    <li>• General networking access</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Participation Benefits</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Mentor opportunities</li>
                    <li>• Demo day access</li>
                    <li>• Community Support Badge (3 reps)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Purple Sponsor */}
            <div className="border-[1px] border-zinc-900/40 p-6 bg-purple-50">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-purple-700">Purple</h3>
                <div className="text-3xl font-bold text-purple-600">$500-$1,000</div>
                <div className="text-sm text-gray-600">Choose Bounty or Meal Track</div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Everything in Community plus:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Branded problem statement</li>
                    <li>• Featured during demo showcase</li>
                    <li>• Logo on event materials</li>
                    <li>• Access to resume pack</li>
                    <li>• Direct team engagement</li>
                    <li>• Dedicated Track Judge position</li>
                    <li>• Custom prizes option</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Partner Sponsor */}
            <div className="border-[1px] border-zinc-900/40 p-6 bg-yellow-50">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-yellow-700">Partner</h3>
                <div className="text-3xl font-bold text-yellow-600">$2,500+</div>
                <div className="text-sm text-gray-600">Only 3 slots available</div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Everything in Purple plus:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Premium brand placement</li>
                    <li>• Primary logo on website</li>
                    <li>• Multiple social media features</li>
                    <li>• Premium Resume Pack</li>
                    <li>• Company showcase opportunities</li>
                    <li>• Guaranteed Finals Judge position</li>
                    <li>• Speaking opportunity</li>
                    <li>• Custom branded award category</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="col-span-4 border-[1px] border-zinc-900/40 p-6">
          <h2 className="text-2xl font-bold tracking-wider mb-6 font-atamiga text-center">YOUR IMPACT</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="border-[1px] border-zinc-900/40 p-4">
              <StatCard
                title="Hackers"
                value="200+"
                description="Expected Participants"
                className="glass-card h-full"
              />
            </div>
            
            <div className="border-[1px] border-zinc-900/40 p-4">
              <StatCard
                title="Hours"
                value="48"
                description="Of Innovation"
                className="glass-card h-full"
              />
            </div>
            
            <div className="border-[1px] border-zinc-900/40 p-4">
              <StatCard
                title="Projects"
                value="50+"
                description="Built Over Weekend"
                className="glass-card h-full"
              />
            </div>
            
            <div className="border-[1px] border-zinc-900/40 p-4">
              <StatCard
                title="Prize"
                value="$2.5K"
                description="Grand Prize"
                className="glass-card h-full"
              />
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="col-span-4 border-[1px] border-zinc-900/40 p-8 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold tracking-wider mb-4 font-atamiga">READY TO SPONSOR?</h2>
          <p className="text-lg text-gray-600 mb-6 text-center">Join us in building Kentucky&apos;s next generation of tech innovators</p>
          <Button className="bg-black text-white px-8 py-3 text-lg hover:bg-gray-800">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  )
}