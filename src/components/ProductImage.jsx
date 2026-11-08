import { useState } from 'react'
import { iconMap, FallbackIcon } from './icons'
import { categories } from '../data/site'

const resolve = (src) => (/^https?:\/\//.test(src) ? src : `${import.meta.env.BASE_URL}images/products/${src}`)

// Shows the product image; if missing or broken, a branded placeholder tile.
export default function ProductImage({ product, className = '' }) {
  const [failed, setFailed] = useState(!product.image)
  const cat = categories.find((c) => c.id === product.category)
  const Icon = (cat && iconMap[cat.icon]) || FallbackIcon
  if (failed)
    return (
      <div role="img" aria-label={`${product.name} (image placeholder)`}
        className={`grid place-items-center bg-gradient-to-br from-apex-soft to-cream text-apex ${className}`}>
        <Icon size={44} strokeWidth={1.4} aria-hidden />
      </div>
    )
  return <img src={resolve(product.image)} alt={product.name} loading="lazy" decoding="async" onError={() => setFailed(true)} className={`object-cover ${className}`} />
}
