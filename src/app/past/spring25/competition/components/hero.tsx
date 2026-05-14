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
            Competition
          </h1>
          
          <div className="space-y-6">
            <div className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              $2,500 Grand Prize
            </div>
            <p className="text-2xl text-purple-200">
              Plus thousands in track prizes and project awards
            </p>
          </div>

          <div className="pt-8">
            <p className="text-xl leading-relaxed text-gray-300">
              From project challenges to track competitions, multiple ways to win big at HackKentucky
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
                Format
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