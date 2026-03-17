import { Link } from 'react-router-dom'
import SiteFooter from '../components/SiteFooter'

const opportunities = [
  {
    heading: 'Franchise Program',
    detail: 'Launch ABC Tea & Cafe in your city with brand support, menu SOPs, and interior design guidance.',
  },
  {
    heading: 'Private Tea Tastings',
    detail: 'Host high-value tasting sessions for corporate teams, tourists, and premium social circles.',
  },
  {
    heading: 'Event Catering',
    detail: 'Book our tea + snack carts for weddings, launches, cultural nights, and business events.',
  },
]

export default function FranchiseEventsPage() {
  return (
    <div className="min-h-screen bg-hero-gradient text-cream">
      <main className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-maroon/50 bg-black/30 p-8 backdrop-blur">
          <p className="text-xs uppercase tracking-[0.2em] text-saffron">Franchise & Events</p>
          <h1 className="mt-2 text-4xl font-bold">Grow with ABC Tea & Cafe</h1>
          <p className="mt-4 max-w-3xl text-cream/80">
            This dedicated page is intentionally componentized so your team can keep adding business information, proposals, and packages as the brand scales.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {opportunities.map((item) => (
              <article key={item.heading} className="rounded-2xl border border-saffron/25 bg-saffron/5 p-5">
                <h2 className="text-xl font-semibold">{item.heading}</h2>
                <p className="mt-2 text-sm text-cream/80">{item.detail}</p>
              </article>
            ))}
          </div>

          <section className="mt-8 rounded-2xl border border-cream/20 bg-black/25 p-6">
            <h2 className="text-2xl font-semibold">Demo Business Contact</h2>
            <div className="mt-4 space-y-2 text-sm text-cream/85">
              <p><span className="text-saffron font-semibold">Partnership Email:</span> growth@abctea.com</p>
              <p><span className="text-saffron font-semibold">Phone:</span> +977-9800001234</p>
              <p><span className="text-saffron font-semibold">Office:</span> Durbar Marg, Kathmandu, Nepal</p>
            </div>
          </section>

          <div className="mt-8">
            <Link to="/" className="rounded-full bg-saffron px-6 py-3 text-sm font-semibold text-black transition hover:scale-105 inline-block">
              Back to Home
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
