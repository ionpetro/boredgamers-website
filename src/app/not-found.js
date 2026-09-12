import Link from "next/link";
import styles from "./not-found.module.scss";

export const metadata = {
  title: "404 - Page not found | BoredGamers",
  description:
    "This page does not exist on boredgamers.gr. Use the links here to find the homepage, the team, sponsorship contact, or the machine-readable site index.",
  robots: { index: false, follow: true },
};

// Served with a real 404 status by Next.js. The body is intentionally a short,
// readable map of the site so both people and agents can recover from a bad URL.
export default function NotFound() {
  return (
    <main className={styles.wrapper}>
      <section className={styles.panel}>
        <h1>404 - Page not found</h1>
        <p>
          There is no page at this address on boredgamers.gr. Nothing here has
          moved; this path has never existed.
        </p>

        <h2>Where to go next</h2>
        <ul>
          <li>
            <Link href="/">Homepage</Link> - videos, team, sponsors and merch
          </li>
          <li>
            <Link href="/about">About</Link> - who BoredGamers are
          </li>
          <li>
            <Link href="/contact">Contact</Link> - business and sponsorship
            enquiries
          </li>
          <li>
            <Link href="/privacy">Privacy</Link> - what this site collects
          </li>
        </ul>

        <h2>For agents and crawlers</h2>
        <ul>
          <li>
            <a href="/llms.txt">/llms.txt</a> - what this site is for and when
            to use it
          </li>
          <li>
            <a href="/sitemap.xml">/sitemap.xml</a> - every indexable URL
          </li>
          <li>
            <a href="/robots.txt">/robots.txt</a> - crawl policy
          </li>
        </ul>

        <p className={styles.note}>
          Markdown versions of the main pages are available via content
          negotiation: send <code>Accept: text/markdown</code>.
        </p>
      </section>
    </main>
  );
}
