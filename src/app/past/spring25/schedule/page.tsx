import { Clock, MapPin } from 'lucide-react'
import { scheduleItems } from '@/app/spring25/data/schedule'
import { SiteHeader } from "@/app/spring25/components/site-header"
import { speakers } from '@/app/spring25/data/speakers'

export default function SchedulePage() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <section className="relative py-32 bg-[#1a1a2e] overflow-hidden">
        {/* Background Pattern */}
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
              Event Schedule
            </h1>
            <p className="text-xl leading-relaxed text-gray-300 mb-8">
              Your complete guide to 24 hours of innovation, learning, and collaboration. 
              From keynote speeches to workshops, every moment is an opportunity to grow.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-gray-300">
              <div className="flex items-center">
                <Clock className="w-6 h-6 mr-2" />
                <span>24 Hours</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                </svg>
                <span>Multiple Tracks</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                <span>Expert Sessions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {Object.entries(scheduleItems).map(([day, items]) => (
        <section key={day} className="py-16 bg-white dark:bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-purple-800 dark:text-purple-200 text-center">{day}</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {items.events.map((item, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-lg font-semibold text-purple-800 dark:text-purple-200">{item.time}</p>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{item.event}</h3>
                      {item.location && (
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                          <MapPin className="w-4 h-4" />
                          <span>{item.location}</span>
                        </div>
                      )}
                      {item.details && (
                        <p className="text-gray-600 dark:text-gray-400">{item.details}</p>
                      )}
                      {item.subEvents && (
                        <div className="mt-4 space-y-4 pl-4 border-l-2 border-purple-200 dark:border-purple-800">
                          {item.subEvents.map((subEvent, subIndex) => (
                            <div key={subIndex} className="space-y-1">
                              <div className="flex justify-between items-center">
                                {subEvent.id ? (
                                  <p className="font-medium text-gray-900 dark:text-gray-100">{speakers[subEvent.id].name}</p>
                                ) : (
                                  <p className="font-medium text-gray-900 dark:text-gray-100">{subEvent.event}</p>
                                )}
                                <p className="text-sm text-purple-600 dark:text-purple-400">{subEvent.time}</p>
                              </div>
                              {subEvent.id && <p className="text-sm text-gray-600 dark:text-gray-400">{speakers[subEvent.id].role}</p>}  
                              {subEvent.details && (
                                <p className="text-sm text-gray-600 dark:text-gray-400">{subEvent.details}</p>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </main>
  )
}

