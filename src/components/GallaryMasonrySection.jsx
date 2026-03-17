import { useEffect, useRef, useState } from 'react'

const galleryItems = [
  {
    image:
      'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&q=80',
    source: 'https://www.google.com/search?q=premium+cafe+interior',
    title: 'Cafe ambience reference',
    layout: 'md:col-span-2 md:row-span-2 h-80 md:h-full',
  },
  {
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80',
    source: 'https://www.google.com/search?q=coffee+serving+style',
    title: 'Coffee serving reference',
    layout: 'md:col-span-2 h-56',
  },
  {
    image:
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80',
    source: 'https://www.google.com/search?q=specialty+coffee+closeup',
    title: 'Specialty coffee reference',
    layout: 'md:col-span-2 h-56',
  },
  {
    image:
      'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=900&q=80',
    source: 'https://www.google.com/search?q=cozy+cafe+seating+design',
    title: 'Cozy seating reference',
    layout: 'md:col-span-3 h-64',
  },
  {
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80',
    source: 'https://www.google.com/search?q=tea+and+snacks+plating',
    title: 'Tea and snack plating reference',
    layout: 'md:col-span-3 h-64',
  },
  {
    image:
      'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=900&q=80',
    source: 'https://www.google.com/search?q=cafe+vibes+coffee+shop',
    title: 'Morning brew vibe',
    layout: 'md:col-span-2 h-56',
  },
  {
    image:
      'https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=900&q=80',
    source: 'https://www.google.com/search?q=aesthetic+cafe+counter',
    title: 'Cafe counter aesthetic',
    layout: 'md:col-span-2 h-56',
  },
  {
    image:
      'https://images.unsplash.com/photo-1461988625982-7e46a099bf4f?auto=format&fit=crop&w=900&q=80',
    source: 'https://www.google.com/search?q=coffee+latte+art+table',
    title: 'Latte art table moment',
    layout: 'md:col-span-2 h-56',
  },
  {
    image:
      'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=900&q=80',
    source: 'https://www.google.com/search?q=night+cafe+ambience+lights',
    title: 'Night ambience reference',
    layout: 'md:col-span-6 h-72',
  },
]

export default function GalleryMasonrySection() {
  const cardRefs = useRef([])
  const [visibleCards, setVisibleCards] = useState(() => galleryItems.map(() => false))

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'))
          setVisibleCards((prev) => {
            const next = [...prev]
            next[index] = entry.isIntersecting
            return next
          })
        })
      },
      { threshold: 0.25, rootMargin: '0px 0px -6% 0px' },
    )

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="mt-14 mb-24 rounded-3xl border border-cream/15 bg-black/25 py-8">
      <div className="mb-6 py-12 flex items-end justify-between gap-12">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-saffron">Gallery</p>
          <h2 className="mt-2 text-3xl font-bold">Visual moodboard for cafe growth</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[120px]">
        {galleryItems.map((item, index) => (
          <a
            key={item.title}
            ref={(el) => {
              cardRefs.current[index] = el
            }}
            data-index={index}
            href={item.source}
            target="_blank"
            rel="noreferrer"
            className={`gallery-card group relative block overflow-hidden rounded-2xl border border-cream/15 bg-black/30 ${item.layout} ${
              visibleCards[index] ? 'is-visible' : ''
            }`}
            style={{ transitionDelay: `${index * 0.06}s` }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="gallery-image h-full w-full object-cover"
              loading="lazy"
            />
            <div className="gallery-overlay absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            <p className="absolute bottom-3 left-3 right-3 text-xs text-cream/90">{item.title}</p>
          </a>
        ))}
      </div>
    </section>
  )
}
