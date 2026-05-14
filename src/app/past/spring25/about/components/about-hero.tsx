export function AboutHero() {
  return (
    <section className="relative py-32 bg-[#1a1a2e] overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
               backgroundSize: '40px 40px'
             }}
        />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-white mb-6">
            Join the Innovation
          </h1>
          <p className="text-xl leading-relaxed text-gray-300">
            HackKentucky is more than just a hackathon—it&apos;s a celebration of creativity, 
            collaboration, and technological innovation.
          </p>
        </div>
      </div>
    </section>
  )
} 