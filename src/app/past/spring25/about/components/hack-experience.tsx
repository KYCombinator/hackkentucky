export function HackExperience() {
  return (
    <section className="py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">The HackKentucky Experience</h2>
          <div className="space-y-6">
            <p className="text-lg">
              We&apos;ve created an environment that balances serious innovation with genuine fun. 
              You&apos;ll find:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Work Hard</h3>
                <ul className="space-y-2">
                  <li>• State-of-the-art facilities</li>
                  <li>• High-speed internet</li>
                  <li>• Quiet spaces for focus</li>
                  <li>• Technical mentorship</li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Play Hard</h3>
                <ul className="space-y-2">
                  <li>• Gaming breaks</li>
                  <li>• Social events</li>
                  <li>• Midnight snacks</li>
                  <li>• Fun competitions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 