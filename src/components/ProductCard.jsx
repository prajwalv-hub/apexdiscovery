import { ArrowUpRight } from 'lucide-react'
import ProductImage from './ProductImage'
import { categories } from '../data/site'

export default function ProductCard({ product }) {
  const cat = categories.find((c) => c.id === product.category)
  const hasLink = Boolean(product.affiliateUrl)
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative aspect-[4/3] overflow-hidden">
        <ProductImage product={product} className="h-full w-full transition duration-500 group-hover:scale-105" />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-ink backdrop-blur">{cat?.name}</span>
        {product.demo && <span className="absolute right-3 top-3 rounded-full bg-ink/85 px-2.5 py-1 text-[11px] font-medium text-white">Demo product</span>}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold leading-snug">{product.name}</h3>
          {product.price && <span className="shrink-0 text-sm font-semibold text-slate2">{product.price}</span>}
        </div>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate2">{product.description}</p>
        {hasLink ? (
          <a href={product.affiliateUrl} target="_blank" rel="sponsored noopener noreferrer" className="btn btn-dark mt-5 w-full">
            Discover Product <ArrowUpRight size={16} aria-hidden />
          </a>
        ) : (
          <button disabled className="btn btn-ghost mt-5 w-full cursor-not-allowed opacity-60">Link coming soon</button>
        )}
        <p className="mt-2 text-center text-[11px] text-slate2">{hasLink ? 'Affiliate link. We may earn a commission.' : 'Affiliate link will be added here.'}</p>
      </div>
    </article>
  )
}
