import Link from "next/link"

export function WhoShouldAttend() {
  return (
    <section className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-center">Who Should Attend?</h2>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                Whether you&apos;re a seasoned coder or just starting your tech journey, HackKentucky 
                welcomes all who are passionate about technology and innovation.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Computer Science and Engineering students looking to apply their skills</li>
                <li>Design students interested in creating user experiences</li>
                <li>Business students wanting to develop entrepreneurial tech solutions</li>
                <li>First-time hackers eager to learn and explore</li>
                <li>Experienced developers ready to mentor and lead</li>
              </ul>
            </div>
          </div>

          {/* Resume Drop CTA */}
          <div className="bg-primary/5 p-8 rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Join Kentucky&apos;s Tech Future?</h3>
            <p className="text-muted-foreground mb-6">
              Submit your resume to connect with innovative companies and exciting opportunities.
            </p>
            <Link
              href="https://kycombinator.typeform.com/resumedrop"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-all duration-300 group"
            >
              <span>Submit Your Resume</span>
              <svg 
                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M14 5l7 7m0 0l-7 7m7-7H3" 
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 