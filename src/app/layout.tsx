import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { BookingModalProvider } from "@/context/BookingModalContext";
import BookingModal from "@/components/BookingModal";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Malu Surf Bali | Surf Lessons & Board Rental at Legian Beach",
  description:
    "Learn to surf in Bali with Malu Surf Bali at Legian & Kuta Beach. Group & private lessons with free surf photos & videos. Book easily via WhatsApp.",
  icons: {
    icon: "/images/logo.webp",
    apple: "/images/logo.webp",
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
    url: "https://malusurf.vercel.app",
    siteName: "Malu Surf Bali",
    images: [
      {
        url: "/images/hero-barrel.webp",
        width: 1200,
        height: 630,
        alt: "Malu Surf Bali Surf Lessons Legian Beach",
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
    images: ["/images/hero-barrel.webp"],
  },
  metadataBase: new URL("https://malusurf.vercel.app"),
  alternates: {
    canonical: "https://malusurf.vercel.app",
  },
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
      "Surf lessons and board rentals right on the white sands of Legian Beach, Bali, Indonesia. Free surf photography included with every lesson.",
    url: "https://malusurf.vercel.app",
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
    <html
      lang="en"
      className={`scroll-smooth ${plusJakartaSans.variable} ${playfairDisplay.variable} ${inter.variable}`}
    >
      <head>
        <link rel="icon" href="/images/logo.webp" type="image/webp" />
        <link rel="apple-touch-icon" href="/images/logo.webp" />
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


