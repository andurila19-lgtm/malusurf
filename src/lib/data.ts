export const BUSINESS_INFO = {
  name: "MALU SURF BALI",
  tagline: "Learn to Surf in Bali",
  subtagline: "Surf lessons and board rentals at Kuta Beach, Bali.",
  locationName: "Kuta Beach · Bali",
  address: "Jl. Pantai Kuta, Legian, Kec. Kuta, Kabupaten Badung, Bali 80361",
  rating: "4.9",
  reviewsCount: 188,
  whatsappNumber: "+62 812-3790-3715",
  whatsappRaw: "6281237903715",
  mapsUrl: "https://maps.google.com/?q=Kuta+Beach+Bali",
  instagramUrl: "https://instagram.com",
};

export interface Experience {
  id: string;
  name: string;
  badge: string;
  highlighted?: boolean;
  coachRatio: string;
  duration: string;
  priceIdr: number;
  description: string;
  image: string;
  imageAlt: string;
  waMessage: string;
  approxText: string;
}

export const EXPERIENCES: Experience[] = [
  {
    id: "group-lesson",
    name: "GROUP SURF LESSON",
    badge: "Small Group",
    coachRatio: "One coach for 2–3 guests",
    duration: "2 hours",
    priceIdr: 150000,
    description:
      "Supportive, safe ocean guidance with soft-top learner boards, UV rashguards, and dedicated Balinese surf coaching.",
    image: "/images/surf-coach.png",
    imageAlt: "Group surf lesson in whitewash at Kuta Beach",
    waMessage: "Hi Malu Surf Bali, I'd like to book a Group Surf Lesson!",
    approxText: "(~AUD $15 / $10 USD)",
  },
  {
    id: "private-lesson",
    name: "PRIVATE SURF LESSON",
    badge: "1-on-1 Focused",
    highlighted: true,
    coachRatio: "One coach for one guest",
    duration: "2 hours",
    priceIdr: 250000,
    description:
      "Dedicated personalized attention focused on fast progress, correct wave catching, board trim, and paddling mechanics.",
    image: "/images/hero-barrel.png",
    imageAlt: "Private surf coach guidance at Kuta Beach wave face",
    waMessage: "Hi Malu Surf Bali, I'd like to book a Private Surf Lesson!",
    approxText: "(~AUD $25 / $16 USD)",
  },
  {
    id: "board-rental",
    name: "BOARD RENTAL",
    badge: "Direct Sand Locker",
    coachRatio: "Premium soft-tops & epoxy short/longboards",
    duration: "1 hour",
    priceIdr: 50000,
    description:
      "Clean, well-waxed quiver ready directly on Kuta Beach. Switch boards anytime to match the tide changes throughout your session.",
    image: "/images/board-quiver.png",
    imageAlt: "Custom surfboards and longboards lined up on beach rack",
    waMessage: "Hi Malu Surf Bali, I'd like to rent a surfboard!",
    approxText: "(~AUD $5 / $3.50 USD)",
  },
];

export const CURRENCY_RATES = {
  IDR: {
    symbol: "Rp ",
    multiplier: 1,
    format: (val: number) => `Rp ${val.toLocaleString("id-ID")}`,
  },
  AUD: {
    symbol: "AUD $",
    multiplier: 0.0001,
    format: (val: number) => `AUD $${Math.round(val * 0.0001)}`,
  },
  USD: {
    symbol: "USD $",
    multiplier: 0.000064,
    format: (val: number) => `USD $${Math.round(val * 0.000064)}`,
  },
  EUR: {
    symbol: "EUR €",
    multiplier: 0.000059,
    format: (val: number) => `EUR €${Math.round(val * 0.000059)}`,
  },
};

export type CurrencyKey = keyof typeof CURRENCY_RATES;

export const BENEFITS = [
  {
    title: "Kuta Beach Location",
    description: "Right at the heart of Bali's surf scene.",
    icon: "MapPin",
  },
  {
    title: "Beginner-Friendly Lessons",
    description: "Supportive and easy to follow.",
    icon: "Waves",
  },
  {
    title: "Private & Small-Group Options",
    description: "More attention and a better experience.",
    icon: "Users",
  },
  {
    title: "Easy WhatsApp Booking",
    description: "Quick, simple and hassle-free.",
    icon: "MessageCircle",
  },
];

export const BOOKING_STEPS = [
  {
    number: "01",
    title: "Choose your experience",
    description:
      "Select between beginner small-group sessions, private 1-on-1 coaching, or surfboard rental.",
  },
  {
    number: "02",
    title: "Message us on WhatsApp",
    description:
      "Send us your dates and group size. We'll confirm the cleanest tide times and lock in your session.",
  },
  {
    number: "03",
    title: "Meet us at Kuta Beach",
    description:
      "Find our beachfront stand on the sand, get fitted with board and rashguard, and catch your waves.",
  },
];

export function getWhatsAppLink(message?: string): string {
  const base = `https://wa.me/${BUSINESS_INFO.whatsappRaw}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
