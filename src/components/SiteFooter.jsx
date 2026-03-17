export default function SiteFooter() {
  return (
    <footer className="border-t border-cream/15 bg-black/35">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-sm text-cream/75 md:flex-row md:items-center md:justify-between">
        <p>{`(c) ${new Date().getFullYear()} ABC Tea & Cafe. Crafted with Nepali warmth.`}</p>
        <p>Chiya | Coffee | Snacks | Community</p>
      </div>
    </footer>
  )
}
