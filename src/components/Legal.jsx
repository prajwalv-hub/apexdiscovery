import { site } from '../data/site'

const P = ({ children }) => <p className="mt-4 leading-relaxed text-ink/80">{children}</p>

const pages = {
  disclosure: ['Affiliate Disclosure', () => (<>
    <P>ApexDiscovery participates in affiliate programs. This means that when you click certain links on this site and make a purchase, we may earn a commission at no additional cost to you.</P>
    <P>Affiliate relationships do not change the price you pay. Product selections are ours; descriptions are brief summaries and not reviews unless clearly labeled otherwise.</P>
    <P>ApexDiscovery is an independent site and is not affiliated with, endorsed by, or sponsored by Amazon or any other retailer.</P>
    {site.showAmazonStatement && <P>{site.amazonStatement}</P>}
  </>)],
  privacy: ['Privacy Policy', () => (<>
    <P><strong>TEMPLATE: have this reviewed and completed before launch.</strong> This site is static and does not currently collect personal information through forms. Hosting providers (such as GitHub Pages) and retailers you click through to may collect their own data under their own policies.</P>
    <P>If you add analytics, cookies, or a newsletter service, update this page to describe what is collected and why. Contact: {site.contactEmail}</P>
  </>)],
  terms: ['Terms & Conditions', () => (<>
    <P><strong>TEMPLATE: have this reviewed and completed before launch.</strong> Content on ApexDiscovery is provided for general information. Product details, availability and prices are controlled by retailers and may change; always confirm on the retailer's site before buying.</P>
    <P>We are not responsible for third-party sites linked from this website. Contact: {site.contactEmail}</P>
  </>)],
}

export default function Legal({ page }) {
  const [title, Body] = pages[page] || pages.disclosure
  return (
    <main className="container-x max-w-3xl py-16" id="top">
      <a href="#top" onClick={() => (window.location.hash = '')} className="text-sm text-apex hover:underline">← Back to home</a>
      <h1 className="mt-6 font-display text-4xl font-semibold">{title}</h1>
      <Body />
    </main>
  )
}
