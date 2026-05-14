import { Button } from "@/components/ui/button"

const speakers = [
  {
    name: "Izaak Prats",
    role: "Software Engineer at Meta",
    linkedin: "https://www.linkedin.com/in/izaakprats/",
    company: "Meta"
  },
  {
    name: "Abu Abukar", 
    role: "Software Engineer @ Netflix",
    linkedin: "https://www.linkedin.com/in/abu-abukar-14717a215/",
    company: "Netflix"
  },
  {
    name: "Rachel Edenfield",
    role: "Founder & CEO of Swell",
    subtitle: "Former Technical Program Manager at Lyft",
    linkedin: "https://www.linkedin.com/in/redenfield/",
    company: "Swell"
  },
  {
    name: "Eric Sage",
    role: "Lead Linux Kernel Engineer at Apple", 
    linkedin: "https://www.linkedin.com/in/ericdavidsage/",
    company: "Apple"
  },
  {
    name: "Wes Eklund",
    role: "Software Development Engineer - Product & Solutions Engineering at AWS",
    linkedin: "https://www.linkedin.com/in/weseklund/",
    company: "AWS"
  },
  {
    name: "Oliver Ardery",
    role: "Strategy & Operations at Google - Trust & Safety",
    linkedin: "https://www.linkedin.com/in/oliver-a-0991524/", 
    company: "Google"
  },
  {
    name: "Jeff Squyres",
    role: "Principle Engineer @ Cisco",
    linkedin: "https://www.linkedin.com/in/jsquyres/",
    company: "Cisco"
  }
]

export default function SpeakersPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main Grid Layout */}
      <div className="grid grid-cols-4 grid-rows-auto min-h-screen w-[90vw] mx-auto">
        
        {/* Hero Title Section */}
        <div className="col-span-4 border-[1px] border-zinc-900/40 p-8 flex flex-col justify-center">
          <h1 className="text-4xl md:text-[120px] font-bold tracking-wider mb-8 font-atamiga">EXPERT</h1>
          <h1 className="text-4xl md:text-[120px] font-bold tracking-wider mb-4 font-atamiga">SPEAKERS</h1>
          <p className="text-xl text-gray-600 mt-8">Learn from industry leaders at top tech companies</p>
        </div>

        {/* Speakers Grid */}
        <div className="col-span-4 border-[1px] border-zinc-900/40 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {speakers.map((speaker, index) => (
              <div key={index} className="border-[1px] border-zinc-900/40 p-6 bg-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-gray-600">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="w-16 h-16 bg-gray-200 rounded border-2 border-dashed border-gray-400 flex items-center justify-center">
                    <div className="text-xs font-bold text-gray-500">
                      {speaker.company}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-bold tracking-wide">{speaker.name}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{speaker.role}</p>
                  {speaker.subtitle && (
                    <p className="text-xs text-gray-600">{speaker.subtitle}</p>
                  )}
                  
                  <div className="pt-2">
                    <a 
                      href={speaker.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      LinkedIn Profile →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Speaker Schedule Preview */}
        <div className="col-span-4 border-[1px] border-zinc-900/40 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold tracking-wider mb-6 font-atamiga">SPEAKER SCHEDULE</h2>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-semibold">1:00pm - 1:30pm</span>
                    <span className="text-sm text-gray-600">Saturday</span>
                  </div>
                  <p className="text-sm text-gray-700">Izaak Prats - Meta</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-semibold">1:40pm - 2:20pm</span>
                    <span className="text-sm text-gray-600">Saturday</span>
                  </div>
                  <p className="text-sm text-gray-700">Wes Eklund - AWS</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-semibold">2:30pm - 3:00pm</span>
                    <span className="text-sm text-gray-600">Saturday</span>
                  </div>
                  <p className="text-sm text-gray-700">Eric Sage - Apple</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold tracking-wider mb-6 font-atamiga">MORE SESSIONS</h2>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-semibold">3:10pm - 3:40pm</span>
                    <span className="text-sm text-gray-600">Saturday</span>
                  </div>
                  <p className="text-sm text-gray-700">Abu Abukar - Netflix</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-semibold">3:50pm - 4:20pm</span>
                    <span className="text-sm text-gray-600">Saturday</span>
                  </div>
                  <p className="text-sm text-gray-700">Oliver Ardery - Google</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-semibold">4:30pm - 5:00pm</span>
                    <span className="text-sm text-gray-600">Saturday</span>
                  </div>
                  <p className="text-sm text-gray-700">Additional speakers TBA</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="col-span-4 border-[1px] border-zinc-900/40 p-8 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold tracking-wider mb-4 font-atamiga">LEARN FROM THE BEST</h2>
          <p className="text-lg text-gray-600 mb-6 text-center">Don&apos;t miss these exclusive talks from industry experts</p>
          <Button className="bg-black text-white px-8 py-3 text-lg hover:bg-gray-800">
            Register Now
          </Button>
        </div>
      </div>
    </div>
  )
}