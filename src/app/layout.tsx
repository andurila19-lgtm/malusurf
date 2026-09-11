import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { BookingModalProvider } from "@/context/BookingModalContext";
import BookingModal from "@/components/BookingModal";

export const metadata: Metadata = {
  title: "Malu Surf Bali | Surf Lessons & Board Rental at Legian Beach",
  description:
    "Learn to surf in Bali with Malu Surf Bali at Legian & Kuta Beach. Group & private lessons with free surf photos & videos. Book easily via WhatsApp.",
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  keywords: [
    "Malu Surf Bali",
    "Legian Beach surf lessons",
    "Kuta Beach surf lessons",
    "surf school Bali",
    "board rental Legian",
    "private surf lesson Bali",
    "intermediate surf coaching Bali",
    "surf coach Bali",
  ],
  authors: [{ name: "Malu Surf Bali" }],
  openGraph: {
    title: "Malu Surf Bali | Surf Lessons & Board Rental at Legian Beach",
    description:
      "Learn to surf in Bali with Malu Surf Bali at Legian & Kuta Beach. Group & private lessons with free surf photos & videos. Book easily via WhatsApp.",
    url: "https://sites.google.com/view/malusurfbali/home",
    siteName: "Malu Surf Bali",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 800,
        alt: "Malu Surf Bali Official Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Malu Surf Bali | Surf Lessons & Board Rental at Legian Beach",
    description:
      "Learn to surf in Bali with Malu Surf Bali at Legian & Kuta Beach. Book group or private surf lessons directly via WhatsApp.",
    images: ["/images/logo.png"],
  },
  metadataBase: new URL("https://sites.google.com/view/malusurfbali/home"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: "Malu Surf Bali",
    description:
      "Surf lessons and board rentals right on the white sands of Legian Beach, Bali, Indonesia.",
    url: "https://sites.google.com/view/malusurfbali/home",
    telephone: "+62 812-3790-3715",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Pantai Legian",
      addressLocality: "Legian, Kec. Kuta",
      addressRegion: "Kabupaten Badung, Bali",
      postalCode: "80361",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -8.7185,
      longitude: 115.1686,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "188",
    },
    priceRange: "Rp 50,000 - Rp 250,000",
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/images/logo.png" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/images/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="bg-surface text-on-surface antialiased font-sans selection:bg-secondary-container selection:text-primary min-h-screen flex flex-col">
        <LanguageProvider>
          <BookingModalProvider>
            {children}
            <BookingModal />
          </BookingModalProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}

