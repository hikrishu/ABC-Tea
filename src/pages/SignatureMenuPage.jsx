import { Link } from 'react-router-dom'
import SiteFooter from '../components/SiteFooter'

const signatureSections = [
  {
    title: 'Artisanal Chiya Collection',
    items: [
      { name: 'Ilam Reserve Saffron Chiya', price: 'NPR 420', note: 'Small-batch brew with saffron and cardamom smoke.' },
      { name: 'Himalayan Butter Chiya Royale', price: 'NPR 390', note: 'Silky, rich, and balanced with pink mountain salt.' },
      { name: 'Jumla Apple Masala Tea', price: 'NPR 360', note: 'Fresh apple aroma with warm Nepali masala profile.' },
    ],
  },
  {
    title: 'Premium Cafe Signature',
    items: [
      { name: 'Kathmandu Velvet Mocha', price: 'NPR 430', note: 'Dark cocoa and Nepali roast espresso fusion.' },
      { name: 'Everest Cold Brew Tonic', price: 'NPR 410', note: 'Crisp and sparkling, perfect for daytime refresh.' },
      { name: 'Bhaktapur Caramel Latte', price: 'NPR 400', note: 'Creamy latte topped with jaggery caramel glaze.' },
    ],
  },
  {
    title: 'Curated Snack Pairings',
    items: [
      { name: 'Newari Tasting Board', price: 'NPR 640', note: 'Sel roti chips, chatamari crisps, and in-house achar trio.' },
      { name: 'Himalayan Momo Basket', price: 'NPR 580', note: 'Steamed dumplings with two house-made sauces.' },
      { name: 'Mustang Walnut Cake Slice', price: 'NPR 320', note: 'Moist tea cake ideal with black Ilam tea.' },
    ],
  },
]

export default function SignatureMenuPage() {
  return (
    <div className="min-h-screen bg-hero-gradient text-cream">
      <main className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-saffron/30 bg-black/30 p-8 backdrop-blur">
          <p className="text-xs uppercase tracking-[0.2em] text-saffron">Signature Menu</p>
          <h1 className="mt-2 text-4xl font-bold">Big Menu for Premium Growth</h1>
          <p className="mt-4 max-w-3xl text-cream/80">
            This page is structured for easy future expansion. Add sections, change pricing, or insert seasonal categories without touching homepage layout.
          </p>

          <div className="mt-8 space-y-8">
            {signatureSections.map((section) => (
              <section key={section.title} className="rounded-2xl border border-cream/15 bg-black/30 p-6">
                <h2 className="text-2xl font-semibold text-saffron">{section.title}</h2>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  {section.items.map((item) => (
                    <article key={item.name} className="rounded-xl border border-cream/15 bg-cream/5 p-4">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="rounded-full bg-saffron/20 px-3 py-1 text-xs font-semibold text-saffron">{item.price}</p>
                      </div>
                      <p className="mt-2 text-sm text-cream/75">{item.note}</p>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>

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
