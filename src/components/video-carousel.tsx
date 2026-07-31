"use client"

import { useRef, useState } from "react"

export type CarouselVideo = { id: string; title: string; subtitle: string }

export function VideoCarousel({ videos }: { videos: CarouselVideo[] }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState<Record<string, boolean>>({})

  function scroll(dir: 1 | -1) {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>("[data-card]")
    const amount = card ? card.offsetWidth + 16 : el.clientWidth
    el.scrollBy({ left: dir * amount, behavior: "smooth" })
  }

  return (
    <div>
      <div className="mb-4 flex items-center justify-between gap-4">
        <span className="text-[11px] uppercase tracking-[1px] text-[rgba(242,242,236,.45)]">
          Swipe or use the arrows · click a video to play
        </span>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scroll(-1)}
            aria-label="Previous"
            className="flex h-10 w-10 items-center justify-center border border-[rgba(242,242,236,.4)] text-[16px] text-[#f2f2ec] transition-colors hover:border-[#c9f73b] hover:text-[#c9f73b]"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            aria-label="Next"
            className="flex h-10 w-10 items-center justify-center border border-[rgba(242,242,236,.4)] text-[16px] text-[#f2f2ec] transition-colors hover:border-[#c9f73b] hover:text-[#c9f73b]"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {videos.map((v) => (
          <div
            key={v.id}
            data-card
            className="w-full shrink-0 snap-start sm:w-[calc(50%-8px)] lg:w-[calc(50%-8px)]"
          >
            <div className="relative aspect-video w-full overflow-hidden border border-[rgba(242,242,236,.12)]">
              {active[v.id] ? (
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&rel=0`}
                  title={v.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setActive((s) => ({ ...s, [v.id]: true }))}
                  aria-label={`Play ${v.title}`}
                  className="group absolute inset-0 h-full w-full"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                    alt={v.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-opacity group-hover:opacity-80"
                  />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-14 w-14 items-center justify-center bg-[#c9f73b] pl-1 text-[22px] text-[#0b0b0b] transition-transform group-hover:scale-110">
                      ▶
                    </span>
                  </span>
                </button>
              )}
            </div>
            <div className="mt-3 text-[14px] font-bold tracking-[1px] text-[#f2f2ec]">{v.title}</div>
            <div className="mt-1 text-[12px] tracking-[1px] text-[#c9f73b]">{v.subtitle}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
