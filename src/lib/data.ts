export const BUSINESS_INFO = {
  name: "MALU SURF BALI",
  tagline: "Catch Your First Wave with Malu Surf Bali",
  subtagline: "Experience the thrill of surfing at Legian Beach with Bali’s most friendly and professional instructors. Whether you’re a complete beginner or looking to level up your skills, we’ve got the perfect wave waiting for you.",
  motto: "Sleep. Eat. Surf. It's not just a sport, it's a way of life.",
  locationName: "Legian & Kuta Beach · Bali",
  address: "Jl. Pantai Legian / Jl. Pantai Kuta, Legian, Kec. Kuta, Kabupaten Badung, Bali 80361",
  rating: "4.9",
  reviewsCount: 188,
  whatsappNumber: "+62 812-3790-3715",
  whatsappRaw: "6281237903715",
  mapsUrl: "https://maps.google.com/?q=Legian+Beach+Bali",
  instagramUrl: "https://www.instagram.com/malusurfbali/",
  instagramHandle: "@malusurfbali",
};

export interface Experience {
  id: string;
  name: string;
  badge: string;
  highlighted?: boolean;
  coachRatio: string;
  duration: string;
  priceIdr: number;
  promoPriceIdr?: number;
  promoNote?: string;
  description: string;
  inclusions: string[];
  image: string;
  imageAlt: string;
  waMessage: string;
  approxText: string;
}

export const EXPERIENCES: Experience[] = [
  {
    id: "group-lesson",
    name: "GROUP SURF LESSON",
    badge: "Special Promo",
    coachRatio: "Max 1 coach for 2–3 students",
    duration: "2 hours",
    priceIdr: 150000,
    promoNote: "min. 2 persons (regular Rp 200k)",
    description:
      "Fun, safe, and supportive ocean guidance. Learn ocean safety, pop-up technique, and wave catching with free surf photos & videos included!",
    inclusions: [
      "Soft-top beginner board & leash",
      "UV protective rashguard",
      "Safety briefing & beach theory",
      "FREE Action Photos & Videos",
    ],
    image: "/images/surf-coach.webp",
    imageAlt: "Group surf lesson in whitewash at Legian Beach",
    waMessage: "Hi Malu Surf Bali, I'd like to book a Group Surf Lesson!",
    approxText: "(~AUD $15 / $10 USD per person)",
  },
  {
    id: "private-lesson",
    name: "PRIVATE SURF LESSON",
    badge: "1-on-1 Best For Beginners",
    highlighted: true,
    coachRatio: "1 coach for 1 student (100% focused)",
    duration: "2 hours",
    priceIdr: 200000,
    description:
      "100% dedicated personal coaching for the fastest, safest progression. Master balance, paddle timing, and board control with complimentary session photography.",
    inclusions: [
      "Dedicated 1-on-1 surf coach",
      "Custom learner or epoxy surfboard",
      "UV protective rashguard",
      "FREE High-Res Photos & Videos",
    ],
    image: "/images/hero-barrel.webp",
    imageAlt: "Private surf coach guidance at Legian Beach wave face",
    waMessage: "Hi Malu Surf Bali, I'd like to book a Private Surf Lesson!",
    approxText: "(~AUD $20 / $13 USD)",
  },
  {
    id: "intermediate-coaching",
    name: "INTERMEDIATE COACHING",
    badge: "Level Up Your Skills",
    coachRatio: "Out-the-back unbroken blue waves",
    duration: "2 hours (20m theory + 1h 40m water)",
    priceIdr: 250000,
    promoPriceIdr: 200000,
    promoNote: "Rp 200k/person for 2+ people",
    description:
      "Take your surfing out the back. Learn lineup etiquette, duck diving/turtle rolls, trimming, speed generation, and clean bottom turns with video analysis.",
    inclusions: [
      "Lineup positioning & wave reading",
      "Duck dive & turtle roll mechanics",
      "Speed generation & turn techniques",
      "FREE Video & Photo Review",
    ],
    image: "/images/board-quiver.webp",
    imageAlt: "Intermediate surfer riding green wave face",
    waMessage: "Hi Malu Surf Bali, I'd like to book Intermediate Surf Coaching!",
    approxText: "(~AUD $25 / $16 USD)",
  },
  {
    id: "board-rental",
    name: "SURFBOARD RENTAL",
    badge: "Direct Sand Stand",
    coachRatio: "Soft-tops, Funboards & Epoxies",
    duration: "1 hour (flexible multi-hour)",
    priceIdr: 50000,
    description:
      "Well-waxed, high quality quiver ready right on the sand at Legian Beach. Switch board sizes anytime as the tide and swell changes.",
    inclusions: [
      "Choice of soft-top or fiberglass board",
      "Surf leash & fresh wax included",
      "Free board swaps during your session",
      "Beachfront bag storage & assistance",
    ],
    image: "/images/sunset-walk.webp",
    imageAlt: "Surfboards lined up on beach rack",
    waMessage: "Hi Malu Surf Bali, I'd like to rent a surfboard!",
    approxText: "(~AUD $5 / $3.50 USD)",
  },
];

export const TESTIMONIALS = [
  {
    name: "Sarah M.",
    origin: "Australia",
    rating: 5,
    date: "Recent Guest",
    comment:
      "Bob and Jimmy were the best instructors! Super patient, made us feel so safe, and we were standing up on our very first wave. Plus they took amazing action photos for us for free!",
  },
  {
    name: "Marcus L.",
    origin: "Germany",
    rating: 5,
    date: "Recent Guest",
    comment:
      "Best surf lesson in Bali! Kak Niusman and the crew are so warm and welcoming. After catching great waves, chilling on the beach with coconut and acoustic guitar was pure magic.",
  },
  {
    name: "Elena R.",
    origin: "United Kingdom",
    rating: 5,
    date: "Recent Guest",
    comment:
      "Unbeatable value and genuine local hospitality. 200k for a 2-hour private lesson with photos and rashguard included is incredible. Highly recommend Malu Surf Bali at Legian Beach!",
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
    title: "Legian & Kuta Beach",
    description: "Safe sandy bottom and clean rolling waves perfect for learning.",
    icon: "MapPin",
  },
  {
    title: "Free Photos & Videos",
    description: "Complimentary high-res action shots included in every lesson.",
    icon: "Camera",
  },
  {
    title: "Friendly Local Coaches",
    description: "Experienced, patient, and passionate Balinese surf instructors.",
    icon: "Users",
  },
  {
    title: "All Equipment Included",
    description: "Quality surfboards, UV rashguards, leashes & beach storage.",
    icon: "Waves",
  },
];

export const BOOKING_STEPS = [
  {
    number: "01",
    title: "Choose your experience",
    description:
      "Select between Group Promo (Rp 150k), Private 1-on-1 (Rp 200k), Intermediate Coaching, or Board Rental.",
  },
  {
    number: "02",
    title: "Message us on WhatsApp",
    description:
      "Send us your date, preferred time, and skill level. We'll check the best tide conditions and confirm your slot.",
  },
  {
    number: "03",
    title: "Meet at Legian Beach & Surf!",
    description:
      "Find our beachfront stand on the sand, get your board & rashguard, catch waves, and get your free photos.",
  },
];

export function getWhatsAppLink(message?: string): string {
  const base = `https://wa.me/${BUSINESS_INFO.whatsappRaw}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
