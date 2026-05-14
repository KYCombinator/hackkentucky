"use client"

import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative py-40 bg-[#1a1a2e] overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
               backgroundSize: '40px 40px'
             }}
        />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h1 className="text-7xl font-bold text-white mb-6">
            Projects
          </h1>
          
          <div className="space-y-6">
            <p className="text-2xl text-purple-200">
              Work on your own problem or tackle one of our sponsored projects. 
              Companies and community partners submit projects and dedicated prizes! It&apos;s a win-win!
            </p>
          </div>

          <div className="pt-8">
            <p className="text-xl leading-relaxed text-gray-300">
              Hackers get to solve real-world problems; project sponsors get a team of hackers working on their project.
            </p>
          </div>

          <div className="pt-12">
            <p className="text-xl leading-relaxed text-gray-300">
              Our partner Kentucky Science and Technology Corporation (KSTC) is offering 2 x $500 cash prizes for the community projects!
            </p>
          </div>
          {/* Section navigation */}
          <div className="pt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => {
                  document.getElementById('format')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white/10 text-white hover:bg-white/20 border-white/20"
              >
                Example Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => {
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white/10 text-white hover:bg-white/20 border-white/20"
              >
                Sponsored Projects
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-20" />
      <div className="absolute -bottom-1 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
} 