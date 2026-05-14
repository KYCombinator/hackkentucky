import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Winter25Page() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main Grid Layout */}
      <div className="grid grid-cols-4 grid-rows-auto min-h-screen w-[90vw] mx-auto">
        
        {/* Hero Title Section */}
        <div className="col-span-4 border-[1px] border-zinc-900/40 p-8 flex flex-col justify-center">
          <div className="text-center mb-4">
            <p className="text-lg md:text-xl mb-2 text-gray-700">
              <Link href="https://www.kstc.org" target="_blank" className="hover:text-gray-900 underline">KSTC</Link> x <Link href="https://www.kycombinator.com" target="_blank" className="hover:text-gray-900 underline">KYCombinator</Link> x <Link href="https://www.storylouisville.com" target="_blank" className="hover:text-gray-900 underline">Story</Link>
            </p>
          </div>
          <h1 className="text-4xl md:text-[160px] font-bold tracking-wider mb-4 font-atamiga text-center">HACK</h1>
          <h1 className="text-4xl md:text-[160px] font-bold tracking-wider mb-8 font-atamiga text-center">KENTUCKY</h1>
          <div className="text-center">
            <p className="text-2xl md:text-4xl font-bold mb-4">WINTER 2025</p>
            <p className="text-xl md:text-2xl mb-4">02.21 - 02.23</p>
            <p className="text-lg md:text-xl text-gray-600 mb-8">Story, 828 East Market Street, Louisville, KY</p>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="col-span-4 border-[1px] border-zinc-900/40 p-8 flex flex-col items-center justify-center">
          <div className="flex flex-col gap-4 items-center">
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#participants">
                <Button className="bg-black text-white px-8 py-3 text-lg hover:bg-gray-800">
                  For Participants
                </Button>
              </Link>
              <Link href="#employers">
                <Button className="bg-black text-white px-8 py-3 text-lg hover:bg-gray-800">
                  For Employers
                </Button>
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <Link href="https://luma.com/hackkentucky" target="_blank">
                <Button variant="outline" className="border-2 border-gray-800 px-8 py-3 text-lg hover:bg-gray-100">
                  Register Now
                </Button>
              </Link>
              <Link href="https://join.slack.com/t/hack-kentucky/shared_invite/zt-2xabg2z38-cVGqVdXPqN2H7_tlpH9TVA" target="_blank">
                <Button variant="link" className="text-gray-700 hover:text-gray-900">
                  Join Slack Community
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="col-span-4 border-[1px] border-zinc-900/40 p-8">
          <h2 className="text-3xl font-bold tracking-wider mb-6 font-atamiga text-center">ABOUT HACK KENTUCKY</h2>
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-8">
            HackKentucky is Kentucky&apos;s premier hackathon, bringing together the brightest minds in technology and innovation. 
            Join us for 24 hours of coding, creativity, and collaboration!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-[1px] border-zinc-900/40 p-6 bg-white text-center">
              <h3 className="text-2xl font-bold mb-4">500+ Participants</h3>
              <p className="text-gray-600 mb-4">High school students, college students, and industry professionals from across the region</p>
              <Link href="https://kycombinator.typeform.com/resumedrop" target="_blank">
                <Button className="bg-gray-800 text-white hover:bg-gray-700">
                  Submit Your Resume →
                </Button>
              </Link>
            </div>
            
            <div className="border-[1px] border-zinc-900/40 p-6 bg-white text-center">
              <h3 className="text-2xl font-bold mb-4">$10,000 in Prizes</h3>
              <p className="text-gray-600 mb-4">Rewarding innovation and creativity</p>
              <Link href="/winter25/format">
                <Button variant="outline" className="border-gray-800 hover:bg-gray-100">
                  Learn More About Prizes →
                </Button>
              </Link>
            </div>
            
            <div className="border-[1px] border-zinc-900/40 p-6 bg-white text-center">
              <h3 className="text-2xl font-bold mb-4">Industry Leaders</h3>
              <p className="text-gray-600 mb-4">Network with top engineers and companies</p>
              <Link href="/winter25/speakers">
                <Button variant="outline" className="border-gray-800 hover:bg-gray-100">
                  Meet Our Speakers →
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="col-span-4 border-[1px] border-zinc-900/40 p-8">
          <h2 className="text-3xl font-bold tracking-wider mb-6 font-atamiga text-center">HOW IT WORKS</h2>
          <p className="text-lg text-gray-600 text-center mb-8">From idea to demo in less than 24 hours</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border-[1px] border-zinc-900/40 p-6 bg-white text-center">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-2">Form Your Team</h3>
              <p className="text-gray-600">Build a team of up to 4 hackers. Don&apos;t have a team? No problem! We&apos;ll help you find one during team formation.</p>
            </div>
            
            <div className="border-[1px] border-zinc-900/40 p-6 bg-white text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-2">Brainstorm & Build</h3>
              <p className="text-gray-600">You&apos;ll have 24 hours to turn your idea into reality. Mentors will be available to help you along the way.</p>
            </div>
            
            <div className="border-[1px] border-zinc-900/40 p-6 bg-white text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2">Present Your Project</h3>
              <p className="text-gray-600">Show off what you&apos;ve built to our judges and fellow hackers in a science-fair style presentation.</p>
            </div>
            
            <div className="border-[1px] border-zinc-900/40 p-6 bg-white text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-2">Win Prizes</h3>
              <p className="text-gray-600">Top projects will win prizes across multiple categories. Every participant gets swag!</p>
            </div>
          </div>
        </div>

        {/* For Participants Section */}
        <div id="participants" className="col-span-2 border-[1px] border-zinc-900/40 p-8 bg-blue-50">
          <h2 className="text-3xl font-bold tracking-wider mb-4 font-atamiga">FOR PARTICIPANTS</h2>
          <p className="text-xl font-semibold mb-4 text-blue-800">
            Distinguish yourself in Kentucky&apos;s growing tech ecosystem
          </p>
          <p className="text-gray-700 mb-6">
            Join us for an exclusive opportunity to connect with leading companies, showcase your skills, and take the first step towards your dream career in technology.
          </p>
          
          <div className="space-y-3 mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span>Network with peers and recruiters</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span>Find your next opportunity or startup!</span>
            </div>
          </div>
          
          <div className="space-y-3">
            <Link href="https://kycombinator.typeform.com/resumedrop" target="_blank">
              <Button className="w-full bg-blue-700 hover:bg-blue-600 text-white">
                Submit Resume
              </Button>
            </Link>
            <Link href="https://luma.com/hackkentucky" target="_blank">
              <Button variant="outline" className="w-full border-blue-700 text-blue-700 hover:bg-blue-50">
                Register Now
              </Button>
            </Link>
          </div>
        </div>

        {/* For Employers Section */}
        <div id="employers" className="col-span-2 border-[1px] border-zinc-900/40 p-8 bg-purple-50">
          <h2 className="text-3xl font-bold tracking-wider mb-4 font-atamiga">FOR EMPLOYERS</h2>
          <p className="text-xl font-semibold mb-4 text-purple-800">
            Tech Forward Companies Engaging with Top Talent
          </p>
          <p className="text-gray-700 mb-6">
            Connect with Kentucky&apos;s brightest minds and future innovators while showcasing your company&apos;s opportunities and culture.
          </p>
          
          <div className="space-y-3 mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <span>Source the best talent in the area</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <span>Market your company</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <span>Network with other companies</span>
            </div>
          </div>
          
          <div className="space-y-3">
            <Link href="https://kycombinator.typeform.com/hackkyproject" target="_blank">
              <Button className="w-full bg-purple-700 hover:bg-purple-600 text-white">
                Submit Project
              </Button>
            </Link>
            <Link href="/winter25/sponsorship">
              <Button className="w-full bg-purple-700 hover:bg-purple-600 text-white">
                Become a Sponsor
              </Button>
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="col-span-4 border-[1px] border-zinc-900/40 p-8">
          <h2 className="text-3xl font-bold tracking-wider mb-6 font-atamiga text-center">EXPLORE MORE</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Link href="/winter25/schedule">
              <div className="border-[1px] border-zinc-900/40 p-4 bg-white hover:bg-gray-50 transition-colors">
                <h3 className="font-semibold mb-2">Schedule</h3>
                <p className="text-sm text-gray-600">Complete 48-hour timeline</p>
              </div>
            </Link>
            
            <Link href="/winter25/speakers">
              <div className="border-[1px] border-zinc-900/40 p-4 bg-white hover:bg-gray-50 transition-colors">
                <h3 className="font-semibold mb-2">Speakers</h3>
                <p className="text-sm text-gray-600">Industry experts from top companies</p>
              </div>
            </Link>
            
            <Link href="/winter25/judging">
              <div className="border-[1px] border-zinc-900/40 p-4 bg-white hover:bg-gray-50 transition-colors">
                <h3 className="font-semibold mb-2">Judging</h3>
                <p className="text-sm text-gray-600">How projects are evaluated</p>
              </div>
            </Link>
            
            <Link href="/winter25/format">
              <div className="border-[1px] border-zinc-900/40 p-4 bg-white hover:bg-gray-50 transition-colors">
                <h3 className="font-semibold mb-2">Format</h3>
                <p className="text-sm text-gray-600">Competition rules and prizes</p>
              </div>
            </Link>
            
            <Link href="/winter25/how-to-hack">
              <div className="border-[1px] border-zinc-900/40 p-4 bg-white hover:bg-gray-50 transition-colors">
                <h3 className="font-semibold mb-2">How to Hack</h3>
                <p className="text-sm text-gray-600">Tips for winning</p>
              </div>
            </Link>
            
            <Link href="/winter25/sponsorship">
              <div className="border-[1px] border-zinc-900/40 p-4 bg-white hover:bg-gray-50 transition-colors">
                <h3 className="font-semibold mb-2">Sponsor</h3>
                <p className="text-sm text-gray-600">Partner with us</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 