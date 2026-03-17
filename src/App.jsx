const menuHighlights = [
  {
    name: 'Ilam Gold Masala Chiya',
    desc: 'Single-estate Ilam tea, cardamom, cinnamon and creamy texture brewed traditionally.',
    price: 'NPR 280',
  },
  {
    name: 'Himalayan Butter Chiya',
    desc: 'A rich mountain-inspired cup with subtle salt notes and hand-pounded spices.',
    price: 'NPR 320',
  },
  {
    name: 'Kathmandu Cafe Mocha',
    desc: 'Premium roast coffee blended with dark cocoa for tea + coffee lovers.',
    price: 'NPR 390',
  },
  {
    name: 'Newari Snack Platter',
    desc: 'Sel roti bites, chatamari crisps and spicy achar for perfect pairing.',
    price: 'NPR 540',
  },
]

const features = [
  'Organic tea leaves sourced from Ilam & Panchthar farms',
  'Handcrafted snacks from local Nepali ingredients',
  'Warm premium ambience with modern Newa-inspired design',
]

export default function App() {
  return (
    <div className="min-h-screen bg-hero-gradient text-cream">
      <header className="mx-auto max-w-6xl px-6 py-8">
        <nav className="flex items-center justify-between rounded-full border border-saffron/30 bg-black/20 px-6 py-3 backdrop-blur">
          <p className="font-display text-xl font-bold tracking-wide">ABC Tea & Cafe</p>
          <div className="hidden gap-8 text-sm md:flex">
            <a href="#menu" className="hover:text-saffron">Menu</a>
            <a href="#about" className="hover:text-saffron">About</a>
            <a href="#visit" className="hover:text-saffron">Visit</a>
          </div>
          <button className="rounded-full bg-saffron px-5 py-2 text-sm font-semibold text-black shadow-glow transition hover:scale-105">
            Reserve Table
          </button>
        </nav>

        <section className="grid items-center gap-10 py-16 md:grid-cols-2">
          <div>
            <p className="mb-4 inline-block rounded-full border border-saffron/40 px-4 py-1 text-xs uppercase tracking-[0.2em] text-saffron">
              Premium Nepali Tea Experience
            </p>
            <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
              Chiya, Coffee & Snacks<br />
              <span className="text-saffron">with a Kathmandu Soul</span>
            </h1>
            <p className="mt-5 max-w-lg text-base text-cream/80 md:text-lg">
              We blend heritage flavors with luxury cafe comfort—crafted for locals, tourists, and every tea lover looking for a saleable, memorable destination.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-maroon px-6 py-3 text-sm font-semibold shadow-lg transition hover:bg-maroon/80">
                Explore Signature Menu
              </button>
              <button className="rounded-full border border-cream/40 px-6 py-3 text-sm font-semibold transition hover:border-saffron hover:text-saffron">
                Franchise & Events
              </button>
            </div>
          </div>

          <div className="rounded-3xl border border-saffron/30 bg-black/30 p-7 shadow-glow backdrop-blur">
            <p className="text-sm uppercase tracking-[0.2em] text-saffron">Today’s Spotlight</p>
            <h2 className="mt-3 text-3xl font-bold">Royal Chiya Tasting Set</h2>
            <p className="mt-3 text-cream/80">
              Try 3 premium brews with paired Nepali snacks. Designed for social media-worthy moments and repeat customers.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl border border-cream/20 bg-cream/10 p-3">
                <p className="text-2xl font-bold text-saffron">4.9★</p>
                <p className="text-cream/70">Customer Rating</p>
              </div>
              <div className="rounded-xl border border-cream/20 bg-cream/10 p-3">
                <p className="text-2xl font-bold text-saffron">+38%</p>
                <p className="text-cream/70">Repeat Visits</p>
              </div>
            </div>
          </div>
        </section>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-16">
        <section id="about" className="mb-14 rounded-3xl border border-cream/15 bg-black/25 p-8">
          <h2 className="text-3xl font-bold">Why ABC Tea & Cafe sells</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {features.map((item) => (
              <div key={item} className="rounded-2xl border border-saffron/20 bg-saffron/5 p-5">
                <p className="text-sm leading-relaxed text-cream/90">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="menu">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="text-3xl font-bold">Best Selling Menu</h2>
            <p className="text-sm text-cream/70">Made fresh every day</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {menuHighlights.map((item) => (
              <article
                key={item.name}
                className="rounded-2xl border border-cream/15 bg-black/30 p-5 transition hover:-translate-y-1 hover:border-saffron/40"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-cream/75">{item.desc}</p>
                  </div>
                  <p className="rounded-full bg-saffron/20 px-3 py-1 text-sm font-semibold text-saffron">{item.price}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="visit" className="mt-14 rounded-3xl border border-maroon/50 bg-maroon/20 p-8 text-center">
          <h2 className="text-3xl font-bold">Visit Our Flagship Cafe</h2>
          <p className="mx-auto mt-3 max-w-2xl text-cream/85">
            Durbar Marg, Kathmandu · Open 7 AM to 10 PM · Live acoustic evenings on Fridays.
          </p>
          <button className="mt-6 rounded-full bg-saffron px-6 py-3 font-semibold text-black transition hover:scale-105">
            Get Directions & Offers
          </button>
        </section>

        <section id="contact" className="mt-14 grid gap-6 rounded-3xl border border-cream/15 bg-black/25 p-8 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-saffron">Contact Us</p>
            <h2 className="mt-2 text-3xl font-bold">Book a table or ask anything</h2>
            <p className="mt-3 text-cream/80">
              We are happy to help with reservations, private tea tastings, cafe events, and franchise conversations.
            </p>

            <div className="mt-6 space-y-3 text-sm text-cream/90">
              <p><span className="font-semibold text-saffron">Phone:</span> +977-1-5554321</p>
              <p><span className="font-semibold text-saffron">Email:</span> hello@abctea.com</p>
              <p><span className="font-semibold text-saffron">Address:</span> Durbar Marg, Kathmandu 44600, Nepal</p>
              <p><span className="font-semibold text-saffron">Hours:</span> Sun-Fri 7:00 AM - 10:00 PM</p>
            </div>

            <a
              href="https://maps.app.goo.gl/w378txK2BNUvekhM8"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block rounded-full bg-saffron px-6 py-3 text-sm font-semibold text-black transition hover:scale-105"
            >
              Open Google Map
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl border border-saffron/30">
            <iframe
              title="ABC Tea & Cafe Location"
              src="https://www.google.com/maps?q=https://maps.app.goo.gl/w378txK2BNUvekhM8&output=embed"
              width="100%"
              height="100%"
              className="min-h-[320px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </main>

      <footer className="border-t border-cream/15 bg-black/35">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-sm text-cream/75 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} ABC Tea & Cafe. Crafted with Nepali warmth.</p>
          <p>Chiya • Coffee • Snacks • Community</p>
        </div>
      </footer>
    </div>
  )
}
