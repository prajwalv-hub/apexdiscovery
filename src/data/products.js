// ─── PRODUCT DATA ───────────────────────────────────────────────────────────
// To add a product, copy ONE object below and paste it at the top of the list.
//
//  id           unique string
//  name         product name
//  description  one or two plain sentences (no unverified claims)
//  image        file in /public/images/products/ (e.g. 'my-product.jpg'), or a full https URL.
//               Missing/broken images fall back to a branded placeholder automatically.
//  category     one of the ids in site.js: tech, desk, home, kitchen, essentials, travel, fitness, unique
//  price        optional, e.g. '$24.99' — or null to hide. Prices change; only show if you keep them current.
//  affiliateUrl your real affiliate link. Leave '' until you have one; the button shows "Link coming soon".
//  featured     true = appears in "Trending discoveries"
//  dateAdded    'YYYY-MM-DD' — newest appear first in "Recently discovered"
//  demo         true = shows a "Demo product" label. Remove this line for real products.
// ────────────────────────────────────────────────────────────────────────────
export const products = [
  { id: 'demo-001', name: 'Magnetic Cable Organizer', description: 'Placeholder entry. A magnetic clip idea for keeping desk cables in place.', image: 'demo-001.jpg', category: 'desk', price: null, affiliateUrl: '', featured: true, dateAdded: '2026-11-05', demo: true },
  { id: 'demo-002', name: 'Compact Travel Power Strip', description: 'Placeholder entry. One plug, multiple outlets, small enough for a carry-on.', image: 'demo-002.jpg', category: 'travel', price: null, affiliateUrl: '', featured: true, dateAdded: '2026-11-04', demo: true },
  { id: 'demo-003', name: 'Smart Plug Mini', description: 'Placeholder entry. Control a lamp or appliance from your phone.', image: 'demo-003.jpg', category: 'home', price: null, affiliateUrl: '', featured: true, dateAdded: '2026-11-03', demo: true },
  { id: 'demo-004', name: 'Collapsible Silicone Colander', description: 'Placeholder entry. Folds flat to save cabinet space.', image: 'demo-004.jpg', category: 'kitchen', price: null, affiliateUrl: '', featured: true, dateAdded: '2026-11-02', demo: true },
  { id: 'demo-005', name: 'Laptop Stand, Foldable', description: 'Placeholder entry. Raises your screen and packs down for a bag.', image: 'demo-005.jpg', category: 'desk', price: null, affiliateUrl: '', featured: true, dateAdded: '2026-11-01', demo: true },
  { id: 'demo-006', name: 'Bluetooth Item Tracker', description: 'Placeholder entry. Attach it to keys or a bag so they are easier to find.', image: 'demo-006.jpg', category: 'tech', price: null, affiliateUrl: '', featured: true, dateAdded: '2026-10-30', demo: true },
  { id: 'demo-007', name: 'Packing Cube Set', description: 'Placeholder entry. Zippered cubes for sorting clothes in a suitcase.', image: 'demo-007.jpg', category: 'travel', price: null, affiliateUrl: '', featured: false, dateAdded: '2026-10-28', demo: true },
  { id: 'demo-008', name: 'Resistance Band Kit', description: 'Placeholder entry. Bands in several levels for home workouts.', image: 'demo-008.jpg', category: 'fitness', price: null, affiliateUrl: '', featured: false, dateAdded: '2026-10-26', demo: true },
  { id: 'demo-009', name: 'Under-Cabinet LED Strip', description: 'Placeholder entry. Motion-activated light for kitchens or closets.', image: 'demo-009.jpg', category: 'home', price: null, affiliateUrl: '', featured: false, dateAdded: '2026-10-24', demo: true },
  { id: 'demo-010', name: 'Reusable Silicone Food Bags', description: 'Placeholder entry. A washable alternative to single-use bags.', image: 'demo-010.jpg', category: 'essentials', price: null, affiliateUrl: '', featured: false, dateAdded: '2026-10-22', demo: true },
  { id: 'demo-011', name: 'Desk Mat, Large', description: 'Placeholder entry. A full-width mat for keyboard and mouse.', image: 'demo-011.jpg', category: 'desk', price: null, affiliateUrl: '', featured: false, dateAdded: '2026-10-20', demo: true },
  { id: 'demo-012', name: 'Pocket Multi-Tool Card', description: 'Placeholder entry. A slim everyday-carry tool concept.', image: 'demo-012.jpg', category: 'unique', price: null, affiliateUrl: '', featured: false, dateAdded: '2026-10-18', demo: true },
]
