import { useEffect, useRef, useState } from 'react'

const experienceCards = [
  {
    title: 'Personalized Tea Journey',
    description:
      'From first sip to last, our team guides guests through flavor notes, tea origin stories, and premium pairings.',
    stat: '12k+ happy cups / month',
    emoji: '🍵',
  },
  {
    title: 'Luxury Yet Local Ambience',
    description:
      'Kathmandu soul with contemporary cafe comfort: warm lights, curated playlists, and crafted table presentation.',
    stat: '4.9 star customer love',
    emoji: '✨',
  },
  {
    title: 'Moments Worth Sharing',
    description:
      'Signature serving style and aesthetic plating designed for social shares, repeat visits, and brand recall.',
    stat: '38% repeat visitors',
    emoji: '📸',
  },
  {
    title: 'Personalized Tea Journey',
    description:
      'From first sip to last, our team guides guests through flavor notes, tea origin stories, and premium pairings.',
    stat: '12k+ happy cups / month',
    emoji: '🍵',
  },
  {
    title: 'Luxury Yet Local Ambience',
    description:
      'Kathmandu soul with contemporary cafe comfort: warm lights, curated playlists, and crafted table presentation.',
    stat: '4.9 star customer love',
    emoji: '✨',
  },
  {
    title: 'Moments Worth Sharing',
    description:
      'Signature serving style and aesthetic plating designed for social shares, repeat visits, and brand recall.',
    stat: '38% repeat visitors',
    emoji: '📸',
  },
]

export default function CustomerExperienceSection() {
  const cardRefs = useRef([])
  const [visibleCards, setVisibleCards] = useState(() => experienceCards.map(() => false))

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
      { threshold: 0.35, rootMargin: '0px 0px -8% 0px' },
    )

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="customer-experience-shell mt-14 rounded-3xl border border-saffron/25 bg-black/25 py-24">
      <p className="text-xs uppercase tracking-[0.2em] text-saffron">Customer Experience</p>
      <h2 className="mt-2 text-3xl font-bold">A premium feeling in every visit</h2>
      <p className="mt-3 max-w-3xl text-sm text-cream/80 md:text-base">
        This section is componentized so you can add testimonials, loyalty metrics, or service highlights as your cafe grows.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {experienceCards.map((card, index) => (
          <article
            key={card.title}
            ref={(el) => {
              cardRefs.current[index] = el
            }}
            data-index={index}
            className={`customer-card group relative overflow-hidden rounded-2xl border border-cream/15 bg-cream/5 p-5 ${
              visibleCards[index] ? 'is-visible' : ''
            }`}
            style={{ transitionDelay: `${index * 0.08}s` }}
          >
            <div className="customer-shine" />
            <div className="relative z-10 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-saffron">{card.title}</h3>
              <span className="experience-emoji text-xl" aria-hidden="true">{card.emoji}</span>
            </div>
            <p className="relative z-10 mt-2 text-sm leading-relaxed text-cream/80">{card.description}</p>
            <p className="relative z-10 mt-4 text-xs uppercase tracking-[0.14em] text-cream/65">{card.stat}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
