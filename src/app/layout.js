import "./globals.css";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";
import { homepageGraph } from "./structured-data";
import {
  AUDIENCE,
  BUSINESS_EMAIL,
  SOCIAL_PROFILES,
  SPONSORS,
} from "../content/site.js";
import siteFooter from "./site-footer.module.scss";

export const metadata = {
  metadataBase: new URL("https://www.boredgamers.gr"),
  title: "BoredGamers - Entertainment and Gaming Community | YouTube Channel",
  description:
    "Join BoredGamers for entertaining stories, travel adventures, and unique perspectives on life. Subscribe to our YouTube channel with 61.9K subscribers and join our community!",
  keywords: [
    "BoredGamers",
    "YouTube",
    "gaming",
    "entertainment",
    "community",
    "Greece",
    "Greek YouTubers",
    "travel",
    "stories",
    "gaming content",
    "Ελλάδα",
    "YouTube Ελλάδα",
  ],
  authors: [{ name: "BoredGamers" }],
  creator: "BoredGamers",
  publisher: "BoredGamers",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "BoredGamers - Entertainment and Gaming Community",
    description:
      "Join BoredGamers for entertaining stories, travel adventures, and unique perspectives on life. Subscribe to our YouTube channel with 61.9K subscribers and join our community!",
    url: "https://www.boredgamers.gr",
    siteName: "BoredGamers",
    images: [
      {
        url: "/images/background.png",
        width: 1200,
        height: 630,
        alt: "BoredGamers - Entertainment and Gaming Community",
      },
    ],
    locale: "el_GR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BoredGamers - Entertainment and Gaming Community",
    description:
      "Join BoredGamers for entertaining stories, travel adventures, and unique perspectives on life. Subscribe to our YouTube channel with 61.9K subscribers!",
    images: ["/images/background.png"],
    creator: "@BoredGamersOfficial",
  },
  alternates: {
    canonical: "https://www.boredgamers.gr",
  },
  verification: {
    // Add Google Search Console verification if available
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="el">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link
          rel="preload"
          href="/fonts/Gagalin-Regular.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link rel="canonical" href="https://www.boredgamers.gr" />
        <link
          rel="alternate"
          type="text/markdown"
          href="https://www.boredgamers.gr/index.md"
        />
        <script
          type="application/ld+json"
          // Server-rendered so it is present in the raw HTML for crawlers.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageGraph()) }}
        />
      </head>
      <body>
        {children}

        {/*
          Server-rendered summary. The homepage itself is a client component
          built around video, imagery and animation, so without this the raw
          HTML carries very little readable text. This states the same facts
          the page shows, so agents reading HTML without running JavaScript
          get a usable description of the site.
        */}
        <footer className={siteFooter.wrapper}>
          <div className={siteFooter.inner}>
            <h2>Σχετικά με τους BoredGamers / About BoredGamers</h2>
            <p>
              Οι BoredGamers είναι μια ελληνική ομάδα ψυχαγωγίας: βίντεο στο
              YouTube, podcast στο Spotify, ζωντανές εκδηλώσεις και συνεργασίες
              με μάρκες. BoredGamers is a Greek entertainment channel and
              community. The team publishes conversational video in Greek —
              strange stories, arguments and travel — on YouTube, distributes
              the same material as a podcast and short-form video, runs live
              club events, and produces sponsored segments for brands.
            </p>
            <p>
              As published on this site, the channel reaches approximately{" "}
              {AUDIENCE.youtube} subscribers on YouTube, {AUDIENCE.instagram}{" "}
              followers on Instagram and {AUDIENCE.tiktok} on TikTok. These
              figures are maintained by hand and reflect the most recent update
              to the site rather than a live reading from each platform.
              Sponsors featured on this site include{" "}
              {SPONSORS.map((s) => s.name).join(", ")}.
            </p>
            <p>
              Για συνεργασίες και χορηγίες / For sponsorship, branded content
              and press enquiries, email{" "}
              <a href={`mailto:${BUSINESS_EMAIL}`}>{BUSINESS_EMAIL}</a>. More
              detail is on the <Link href="/about">about</Link> and{" "}
              <Link href="/contact">contact</Link> pages, and{" "}
              <Link href="/privacy">privacy</Link> describes what this site
              collects.
            </p>

            <h3>Official channels</h3>
            <ul className={siteFooter.links}>
              {SOCIAL_PROFILES.map((url) => (
                <li key={url}>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {url.replace(/^https:\/\/(www\.)?/, "").replace(/\/$/, "")}
                  </a>
                </li>
              ))}
            </ul>

            <p className={siteFooter.meta}>
              Machine-readable: <a href="/llms.txt">llms.txt</a> ·{" "}
              <a href="/sitemap.xml">sitemap.xml</a> ·{" "}
              <a href="/robots.txt">robots.txt</a> · markdown variants via{" "}
              <code>Accept: text/markdown</code>
            </p>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
