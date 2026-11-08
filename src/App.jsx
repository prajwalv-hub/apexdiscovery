import { useEffect, useState } from 'react'
import { Nav, Hero, Trending, Categories, Feed, Why, Social, Newsletter, Footer } from './components/Sections'
import Legal from './components/Legal'

const getPage = () => (window.location.hash.startsWith('#/') ? window.location.hash.slice(2) : '')

export default function App() {
  const [page, setPage] = useState(getPage())
  const [active, setActive] = useState('all')
  const [query, setQuery] = useState('')

  useEffect(() => {
    const onHash = () => {
      const p = getPage()
      setPage(p)
      if (p) return window.scrollTo(0, 0)
      const id = window.location.hash.slice(1)
      requestAnimationFrame(() => (id ? document.getElementById(id)?.scrollIntoView() : window.scrollTo(0, 0)))
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const pick = (id) => { setActive(id); setQuery('') }

  return (
    <>
      <Nav query={query} setQuery={setQuery} />
      {page ? <Legal page={page} /> : (
        <main id="top">
          <Hero />
          <Trending />
          <Categories onPick={pick} />
          <Feed active={active} setActive={setActive} query={query} />
          <Why />
          <Social />
          <Newsletter />
        </main>
      )}
      <Footer />
    </>
  )
}
