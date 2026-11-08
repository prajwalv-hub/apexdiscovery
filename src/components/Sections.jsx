import { useState, useMemo } from 'react'
import { Search, Menu, X, ArrowRight, Flame, Compass, ListChecks, Eye, Mail, Music2, Instagram } from 'lucide-react'
import Logo from './Logo'
import ProductCard from './ProductCard'
import ProductImage from './ProductImage'
import { iconMap } from './icons'
import { site, categories } from '../data/site'
import { products } from '../data/products'

const byDate = (a, b) => b.dateAdded.localeCompare(a.dateAdded)
const links = [['Home', '#top'], ['Discover', '#discover'], ['Categories', '#categories'], ['About', '#about']]

export function Nav({ query, setQuery }) {
  const [open, setOpen] = useState(false)
  const [searching, setSearching] = useState(false)
  return (
    <header className="sticky top-0 z-40 border-b border-ink/5 bg-cream/90 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <a href="#top" aria-label="ApexDiscovery home"><Logo /></a>
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {links.map(([l, h]) => <a key={l} href={h} className="text-sm font-medium text-ink/80 transition hover:text-apex">{l}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={() => setSearching((s) => !s)} aria-label="Search products" aria-expanded={searching} className="grid h-10 w-10 place-items-center rounded-full transition hover:bg-ink/5"><Search size={18} /></button>
          <a href="#discover" className="btn btn-primary hidden sm:inline-flex">Explore Products</a>
          <button onClick={() => setOpen(true)} aria-label="Open menu" className="grid h-10 w-10 place-items-center rounded-full hover:bg-ink/5 md:hidden"><Menu size={20} /></button>
        </div>
      </div>
      {searching && (
        <div className="border-t border-ink/5 bg-white">
          <div className="container-x py-3">
            <label className="sr-only" htmlFor="q">Search products</label>
            <input id="q" autoFocus value={query} onChange={(e) => { setQuery(e.target.value); document.getElementById('discover')?.scrollIntoView() }}
              placeholder="Search products or categories…" className="w-full rounded-full border border-ink/15 bg-cream px-5 py-3 text-sm outline-none focus:border-apex" />
          </div>
        </div>
      )}
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-ink text-white md:hidden" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="container-x flex h-16 items-center justify-between">
            <Logo dark /><button onClick={() => setOpen(false)} aria-label="Close menu" className="grid h-10 w-10 place-items-center rounded-full hover:bg-white/10"><X size={22} /></button>
          </div>
          <nav className="container-x mt-8 flex flex-1 flex-col gap-1">
            {links.map(([l, h]) => <a key={l} href={h} onClick={() => setOpen(false)} className="border-b border-white/10 py-5 font-display text-3xl">{l}</a>)}
            <a href="#discover" onClick={() => setOpen(false)} className="btn btn-primary mt-8">Explore Products</a>
          </nav>
        </div>
      )}
    </header>
  )
}

export function Hero() {
  const picks = products.filter((p) => p.featured).sort(byDate).slice(0, 3)
  return (
    <section className="relative overflow-hidden">
      <div className="container-x grid items-center gap-12 py-16 lg:grid-cols-[1.1fr_1fr] lg:py-24">
        <div>
          <p className="eyebrow">Discover smarter living</p>
          <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Discover things you didn't know you <em className="text-apex not-italic">needed.</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate2">From clever gadgets to everyday essentials, discover products that make life easier, smarter, and more interesting.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#discover" className="btn btn-primary">Explore Products <ArrowRight size={16} aria-hidden /></a>
            <a href="#trending" className="btn btn-ghost"><Flame size={16} aria-hidden /> Discover What's Trending</a>
          </div>
          <p className="mt-6 text-xs text-slate2">Some links on this site are affiliate links. <a href="#/disclosure" className="underline hover:text-apex">Learn more</a></p>
        </div>
        <div className="relative mx-auto grid w-full max-w-xl grid-cols-2 gap-4" aria-hidden={picks.length === 0}>
          {picks.map((p, i) => (
            <div key={p.id} className={`overflow-hidden rounded-3xl bg-white shadow-lift ${i === 0 ? 'row-span-2' : ''} ${i === 2 ? 'translate-y-4' : ''}`}>
              <ProductImage product={p} className={`w-full ${i === 0 ? 'h-full min-h-[22rem]' : 'aspect-square'}`} />
            </div>
          ))}
        </div>
      </div>
      {site.showDemoBanner && <p className="bg-ink py-2 text-center text-xs text-white/80">Demo content: products shown are placeholders until real discoveries are added.</p>}
    </section>
  )
}

function Heading({ eyebrow, title, sub, id }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {sub && <p className="mt-3 text-slate2">{sub}</p>}
    </div>
  )
}

export function Trending() {
  const items = products.filter((p) => p.featured).sort(byDate).slice(0, 6)
  return (
    <section id="trending" className="container-x py-16" aria-labelledby="t-h">
      <Heading id="t-h" eyebrow="Trending discoveries" title="What we're looking at right now" sub="Featured picks from our latest videos. Affiliate disclosure applies to every link." />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{items.map((p) => <ProductCard key={p.id} product={p} />)}</div>
    </section>
  )
}

export function Categories({ onPick }) {
  const tones = { ink: 'bg-ink text-white', apex: 'bg-apex text-white', sand: 'bg-apex-soft text-ink' }
  return (
    <section id="categories" className="bg-white py-16" aria-labelledby="c-h">
      <div className="container-x">
        <Heading id="c-h" eyebrow="Shop by category" title="Find your next favorite thing" />
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {categories.map((c, i) => {
            const Icon = iconMap[c.icon]
            const count = products.filter((p) => p.category === c.id).length
            return (
              <a key={c.id} href="#discover" onClick={() => onPick(c.id)}
                className={`group relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-3xl p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-6 ${tones[c.tone]} ${i === 0 || i === 5 ? 'lg:aspect-[4/5]' : ''}`}>
                <Icon size={88} strokeWidth={1} className="absolute -bottom-4 -right-4 opacity-20 transition duration-500 group-hover:scale-110 group-hover:opacity-30" aria-hidden />
                <span className="text-xs font-semibold uppercase tracking-widest opacity-70">{String(i + 1).padStart(2, '0')}</span>
                <div className="relative">
                  <h3 className="font-display text-xl font-semibold leading-tight sm:text-2xl">{c.name}</h3>
                  <p className="mt-1 text-xs opacity-80 sm:text-sm">{c.blurb}</p>
                  <p className="mt-3 text-xs font-semibold opacity-80">{count} {count === 1 ? 'item' : 'items'} <ArrowRight size={12} className="inline transition group-hover:translate-x-1" aria-hidden /></p>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function Feed({ active, setActive, query }) {
  const list = useMemo(() => {
    const q = query.trim().toLowerCase()
    return [...products].sort(byDate).filter((p) =>
      (active === 'all' || p.category === active) &&
      (!q || `${p.name} ${p.description} ${categories.find((c) => c.id === p.category)?.name}`.toLowerCase().includes(q)))
  }, [active, query])
  return (
    <section id="discover" className="container-x py-16" aria-labelledby="f-h">
      <Heading id="f-h" eyebrow="Recently discovered" title="Fresh finds, newest first" />
      <div className="-mx-5 mb-8 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0" role="group" aria-label="Filter by category">
        {[{ id: 'all', name: 'All' }, ...categories].map((c) => (
          <button key={c.id} onClick={() => setActive(c.id)} aria-pressed={active === c.id}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${active === c.id ? 'bg-ink text-white' : 'bg-white text-ink shadow-card hover:text-apex'}`}>{c.name}</button>
        ))}
      </div>
      {query && <p className="mb-4 text-sm text-slate2" role="status">{list.length} result{list.length === 1 ? '' : 's'} for “{query}”</p>}
      {list.length ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{list.map((p) => <ProductCard key={p.id} product={p} />)}</div>
      ) : <p className="rounded-2xl bg-white p-10 text-center text-slate2">Nothing here yet. Try another category.</p>}
    </section>
  )
}

export function Why() {
  const items = [
    [Compass, 'Interesting discoveries', 'We look for products that make you stop and think “wait, that exists?”'],
    [ListChecks, 'Practical product ideas', 'Ideas for desks, kitchens, trips and routines, not just novelty.'],
    [Eye, 'Curated selections', 'A focused list, organized by category, instead of endless scrolling.'],
    [Mail, 'Clear product information', 'Short descriptions and plain disclosure of how we earn.'],
  ]
  return (
    <section id="about" className="bg-ink py-20 text-white" aria-labelledby="w-h">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <p className="eyebrow">Why ApexDiscovery?</p>
          <h2 id="w-h" className="mt-3 font-display text-4xl font-semibold tracking-tight">Discovery, made simple.</h2>
          <p className="mt-4 text-white/70">ApexDiscovery shares products we find interesting. We link to retailers; we don't sell products ourselves.</p>
        </div>
        <ul className="grid gap-6 sm:grid-cols-2">
          {items.map(([Icon, t, d]) => (
            <li key={t} className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
              <Icon className="text-apex" size={22} aria-hidden /><h3 className="mt-4 font-semibold">{t}</h3><p className="mt-2 text-sm text-white/70">{d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function Social() {
  return (
    <section className="container-x py-16">
      <div className="rounded-[2rem] bg-apex px-6 py-14 text-center text-white sm:px-12">
        <h2 className="font-display text-3xl font-semibold sm:text-5xl">Discover something new every day.</h2>
        <p className="mx-auto mt-4 max-w-lg text-white/90">New finds land in our short videos first.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={site.social.tiktok} target="_blank" rel="noopener noreferrer" className="btn bg-ink text-white hover:bg-ink-soft"><Music2 size={16} aria-hidden /> Follow on TikTok</a>
          <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="btn bg-white text-ink hover:bg-cream"><Instagram size={16} aria-hidden /> Follow on Instagram</a>
        </div>
      </div>
    </section>
  )
}

export function Newsletter() {
  return (
    <section className="container-x pb-16">
      <div className="grid items-center gap-8 rounded-[2rem] bg-white p-8 shadow-card sm:p-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Newsletter · coming soon</p>
          <h2 className="mt-3 font-display text-3xl font-semibold">Get new discoveries by email.</h2>
          <p className="mt-3 text-sm text-slate2">A short, occasional roundup of new finds.</p>
        </div>
        <div>
          <form onSubmit={(e) => e.preventDefault()} aria-describedby="nl-note">
            <label htmlFor="email" className="sr-only">Email address</label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input id="email" type="email" disabled placeholder="you@example.com" className="flex-1 rounded-full border border-ink/15 bg-cream px-5 py-3 text-sm disabled:opacity-60" />
              <button disabled className="btn btn-primary cursor-not-allowed opacity-60">Subscribe</button>
            </div>
          </form>
          <p id="nl-note" className="mt-3 text-xs text-slate2">Not active: this form is a design placeholder. Connect an email service (e.g. Mailchimp, Buttondown, ConvertKit) before collecting any emails. See README.</p>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo dark />
          <p className="mt-4 max-w-sm text-sm">ApexDiscovery shares interesting, useful and unique products from across the web. Discover smarter living.</p>
          <p className="mt-4 text-sm">Contact: <a className="underline hover:text-apex" href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a></p>
        </div>
        <div><h3 className="text-sm font-semibold text-white">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm">{links.map(([l, h]) => <li key={l}><a className="hover:text-apex" href={h}>{l}</a></li>)}</ul></div>
        <div><h3 className="text-sm font-semibold text-white">Categories</h3>
          <ul className="mt-4 space-y-2 text-sm">{categories.map((c) => <li key={c.id}><a className="hover:text-apex" href="#categories">{c.name}</a></li>)}</ul></div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x space-y-3 py-6 text-xs text-white/60">
          <p><strong className="text-white/80">Affiliate disclosure:</strong> Some links on this site are affiliate links. If you click and buy, we may earn a commission at no extra cost to you. <a className="underline hover:text-apex" href="#/disclosure">Read the full disclosure</a>.</p>
          {site.showAmazonStatement && <p>{site.amazonStatement}</p>}
          <p>ApexDiscovery is an independent site and is not affiliated with, endorsed by, or sponsored by Amazon or any retailer mentioned.</p>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p>© {new Date().getFullYear()} ApexDiscovery. All rights reserved.</p>
            <p className="space-x-4"><a className="hover:text-apex" href="#/disclosure">Affiliate Disclosure</a><a className="hover:text-apex" href="#/privacy">Privacy Policy</a><a className="hover:text-apex" href="#/terms">Terms &amp; Conditions</a></p>
          </div>
        </div>
      </div>
    </footer>
  )
}
