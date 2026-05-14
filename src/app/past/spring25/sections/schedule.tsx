import { Clock } from 'lucide-react'
import { scheduleItems } from '@/app/spring25/data/schedule'
import Link from 'next/link'

export function Schedule() {
  return (
    <section id="schedule" className="py-20 bg-gradient-to-b from-purple-100 to-white dark:from-purple-900 dark:to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-purple-800 dark:text-purple-200 glow mb-4">
            Event Schedule
          </h2>
          <Link 
            href="/schedule"
            className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 font-medium"
          >
            View Full Schedule →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(scheduleItems).map(([day, items]) => (
            <div key={day} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2 text-purple-600 dark:text-purple-400 glow">{day}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{items.description}</p>
              {items.events.map((item, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-purple-800 dark:text-purple-200">{item.time}</p>
                      <p className="text-gray-600 dark:text-gray-300">{item.event}</p>
                    </div>
                  </div>
                  {index < items.events.length - 1 && (
                    <div className="w-0.5 h-4 bg-purple-300 dark:bg-purple-700 ml-6 my-2"></div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

