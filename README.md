# ApexDiscovery

Static product-discovery site. React + Vite + Tailwind CSS + Lucide. No backend, no paid services.
Hosted free on GitHub Pages at `https://<your-username>.github.io/apexdiscovery/`.

## Why this stack
React/Vite builds to plain static files, which GitHub Pages serves for free. Routing uses URL hashes (`#/privacy`), so no server rewrites are needed.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173/apexdiscovery/
npm run build      # outputs /dist
```

## Deploy to GitHub Pages (exact steps)
1. Create a **public** GitHub repo named exactly `apexdiscovery`.
2. In this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial ApexDiscovery site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/apexdiscovery.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. The included workflow (`.github/workflows/deploy.yml`) builds and publishes on every push to `main`. Check the **Actions** tab; the live URL appears when it finishes.

The base path is set in `vite.config.js` (`base: '/apexdiscovery/'`). Rename the repo or use a custom domain (`base: '/'`) and you must change it, plus the `/apexdiscovery/` paths in `index.html` (favicon, og-image).

## Add your logo
Put your real logo at `public/logo.png` (transparent PNG, roughly 3:1 or wider works best; the nav renders it at 36px high; for the dark footer use a version that reads on charcoal, or swap to `logo-dark.png` in `src/components/Logo.jsx`). Until the file exists, a **temporary** text wordmark is shown. It is not your logo.
Also add `public/og-image.png` (1200×630) for social link previews.

## Add or edit products
Everything lives in `src/data/products.js`. Copy one object, paste it at the top, edit it. Fields are documented at the top of the file. Cards, the trending section, the feed, filters, search and category counts all update automatically.
- **Images:** drop files in `public/images/products/` and set `image: 'file-name.jpg'` (or a full https URL). Missing or broken images show a branded placeholder.
- **Affiliate links:** set `affiliateUrl`. While empty, the button shows "Link coming soon". Use only links issued to you by the program.
- **Trending:** `featured: true`. **Demo label:** delete `demo: true` on real products.
- Set `showDemoBanner: false` in `src/data/site.js` when all demo items are gone.

## Social URLs, email, categories
`src/data/site.js`: `social.tiktok`, `social.instagram`, `contactEmail`, and the category list.

## Affiliate compliance checklist
- Disclosure appears on every product card, in the footer, and on `#/disclosure`.
- Affiliate links use `rel="sponsored noopener noreferrer"`.
- Amazon Associates statement: once accepted, set `showAmazonStatement: true` and paste the **exact** wording from your Operating Agreement into `amazonStatement`. Check Amazon's current rules on showing prices before using the `price` field, and don't use Amazon logos/branding.
- No reviews, ratings, discounts or "tested" claims are included; don't add any unless they are true and substantiated.
- **Privacy Policy and Terms are templates.** Have them completed (and reviewed by a professional if you can) before launch, and update them if you add analytics or email capture.

## Newsletter
The form is intentionally disabled. To enable it, sign up with an email service (Buttondown, Mailchimp, ConvertKit, etc.), paste their hosted form's `action` URL into the form in `Sections.jsx`, and update the Privacy Policy. Don't collect emails without it.
