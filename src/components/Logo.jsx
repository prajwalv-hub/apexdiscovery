import { useState } from 'react'
import { ShoppingCart } from 'lucide-react'

// Uses your real logo at /public/logo.png (or change the file name below).
// Until that file exists, a simple temporary wordmark is shown. It is NOT the final logo.
const LOGO_SRC = `${import.meta.env.BASE_URL}logo.png`

export default function Logo({ dark = false, className = 'h-9' }) {
  const [failed, setFailed] = useState(false)
  if (!failed)
    return <img src={LOGO_SRC} alt="ApexDiscovery" className={`${className} w-auto`} onError={() => setFailed(true)} />
  return (
    <span className="inline-flex items-center gap-2" aria-label="ApexDiscovery">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-apex text-white"><ShoppingCart size={18} aria-hidden /></span>
      <span className={`text-lg font-bold tracking-tight ${dark ? 'text-white' : 'text-ink'}`}>Apex<span className="text-apex">Discovery</span></span>
    </span>
  )
}
