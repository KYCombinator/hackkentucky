import Image from 'next/image'
import Link from 'next/link'

// FIX BACKGROUND COLOR to be Slate so logos appear better
export function Sponsors() {
  return (
    <section id="sponsors" className="py-20 bg-slate-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center">Our Sponsors</h2>
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-lg mb-4">
            Sponsorship plays a crucial role in making HackKentucky possible. Your support helps us provide resources, 
            mentorship, and opportunities to the next generation of tech innovators. Join us in fostering technology 
            education and innovation in Kentucky.
          </p>
          <Link href="/sponsors" className="inline-block text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 font-medium">
            Learn More About Sponsoring →
          </Link>
        </div>

        <div className="flex flex-col justify-center items-center gap-4">
          <Image src="/sponsors/sponsor1.png" alt={"Sponsor Logo"} width={1200} height={180} />
          <Image src="/sponsors/sponsor2.png" alt={"Sponsor Logo"} width={1200} height={180} />
          <Image src="/sponsors/sponsor3.png" alt={"Sponsor Logo"} width={1200} height={180} />
          <Image src="/sponsors/sponsor4.png" alt={"Sponsor Logo"} width={1200} height={180} />
        </div>
      </div>
    </section>
  )
}
