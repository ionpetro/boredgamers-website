import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://www.boredgamers.com"),
  title: "BoredGamers - Entertainment and Gaming Community",
  description:
    "Join BoredGamers for entertaining stories, travel adventures, and unique perspectives on life. Subscribe to our YouTube channel and join our community!",
  icons: {
    icon: "/images/logo.png",
  },
  keywords: "BoredGamers, YouTube, gaming, entertainment, community",
  openGraph: {
    title: "BoredGamers - Entertainment and Gaming Community",
    description:
      "Join BoredGamers for entertaining stories, travel adventures, and unique perspectives on life. Subscribe to our YouTube channel and join our community!",
    url: "/",
    siteName: "BoredGamers",
    images: [
      {
        url: "/images/yellow.png",
        width: 796,
        height: 763,
      },
    ],
    locale: "el_GR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BoredGamers - Entertainment and Gaming Community",
    description:
      "Join BoredGamers for entertaining stories, travel adventures, and unique perspectives on life. Subscribe to our YouTube channel and join our community!",
    images: ["/images/yellow.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
      </head>
      <body>{children}</body>
    </html>
  );
}
