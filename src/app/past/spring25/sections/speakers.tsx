import Image from 'next/image'
import { speakers } from '@/app/spring25/data/speakers'
import { Speaker } from '@/types/speaker'

export function Speakers() {
  const confirmedSpeakers = speakers.filter((speaker: Speaker) => speaker.confirmed)

  return (
    <section id="speakers" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center">Featured Speakers</h2>
        <p className="text-xl text-center text-muted-foreground mb-4">Think Global, Build Local</p>
        <p className="text-center mb-8 text-muted-foreground">
          Showcasing world-class tech leaders with Kentucky roots and connections
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {confirmedSpeakers.map((speaker: Speaker, index: number) => (
            <div key={index} className="text-center">
              <Image
                src={speaker.image}
                alt={speaker.name}
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{speaker.name}</h3>
              <p className="text-purple-600 dark:text-purple-400">{speaker.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
