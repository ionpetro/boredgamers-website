import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

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
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
