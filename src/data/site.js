// ─── Site-wide settings. Edit these; nothing else needs touching. ───
export const site = {
  name: 'ApexDiscovery',
  tagline: "Discover things you didn't know you needed.",
  contactEmail: 'hello@your-domain.com', // TODO: replace
  social: {
    tiktok: 'https://www.tiktok.com/@your-handle', // TODO: replace
    instagram: 'https://www.instagram.com/your-handle/', // TODO: replace
  },
  // Set to true ONLY after you are accepted into Amazon Associates.
  showAmazonStatement: false,
  // Use the exact wording required by the Associates Operating Agreement.
  amazonStatement: 'PLACEHOLDER: Insert the exact Amazon Associates statement required by your agreement here.',
  // Set to false once you replace the demo products with real ones.
  showDemoBanner: true,
}

// Category ids are used by products.js. `icon` must be a key in components/icons.js.
export const categories = [
  { id: 'tech', name: 'Tech & Gadgets', icon: 'cpu', tone: 'ink', blurb: 'Clever devices and small upgrades.' },
  { id: 'desk', name: 'Desk Setup', icon: 'monitor', tone: 'apex', blurb: 'Work spaces worth sitting at.' },
  { id: 'home', name: 'Smart Home', icon: 'home', tone: 'sand', blurb: 'Connected, simple, tidy.' },
  { id: 'kitchen', name: 'Kitchen Innovations', icon: 'utensils', tone: 'ink', blurb: 'Ideas for how you cook.' },
  { id: 'essentials', name: 'Everyday Essentials', icon: 'backpack', tone: 'sand', blurb: 'Small things used daily.' },
  { id: 'travel', name: 'Travel Accessories', icon: 'plane', tone: 'apex', blurb: 'Pack lighter, move easier.' },
  { id: 'fitness', name: 'Lifestyle & Fitness', icon: 'dumbbell', tone: 'ink', blurb: 'Gear for active routines.' },
  { id: 'unique', name: 'Unique Finds', icon: 'sparkles', tone: 'sand', blurb: 'Odd, useful, unexpected.' },
]
