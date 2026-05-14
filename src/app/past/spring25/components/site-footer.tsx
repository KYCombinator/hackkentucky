import Link from 'next/link'

export function SiteFooter() {
  const siteMap = {
    "Main": [
      { name: "Home", href: "/" },
      { name: "Competition", href: "/competition" },
      { name: "Projects", href: "/projects" },
      { name: "Schedule", href: "/schedule" },
      { name: "About", href: "/about" },
    ],
    "Resources": [
      { name: "Sponsor Us", href: "/sponsors" },
      { name: "Deep Work Enclave", href: "https://deepworkenclave.com" },
    ],
    "Connect": [
      { name: "LinkedIn", href: "https://www.linkedin.com/company/kycombinator/" },
      { name: "Newsletter", href: "https://kycombinator.beehiiv.com/subscribe" },
    ]
  }

  return (
    <footer className="bg-[#1a1a2e] text-gray-300">
      <div className="container mx-auto px-4 py-12">
        {/* Newsletter Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-center mb-6 text-white">Stay Updated</h3>
          <iframe 
            src="https://embeds.beehiiv.com/3cab38c3-d1b9-4443-bdb3-2a0de2d047a6" 
            data-test-id="beehiiv-embed" 
            width="100%" 
            height="320" 
            frameBorder="0" 
            scrolling="no" 
            style={{
              borderRadius: '4px',
              border: '2px solid rgba(255,255,255,0.1)',
              margin: '0',
              backgroundColor: 'transparent'
            }}
          />
        </div>

        {/* Sitemap */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {Object.entries(siteMap).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-lg mb-4 text-white">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Address and Copyright */}
        <div className="text-center text-gray-400 text-sm space-y-2 pt-8 border-t border-gray-800">
          <p>828 E Market St, Louisville, Kentucky 40206</p>
          <p>© {new Date().getFullYear()} KYC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 