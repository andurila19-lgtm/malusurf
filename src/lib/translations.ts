export type Language = "en" | "id";

export interface ExperienceItem {
  id: string;
  name: string;
  badge: string;
  highlighted?: boolean;
  coachRatio: string;
  duration: string;
  priceIdr: number;
  promoNote?: string;
  description: string;
  inclusions: string[];
  image: string;
  imageAlt: string;
  waMessage: string;
  approxText: string;
}

export const DICTIONARY = {
  en: {
    nav: {
      experiences: "Experiences",
      about: "About",
      reviews: "Reviews",
      gallery: "Gallery",
      location: "Location",
      bookNow: "Book Now",
      chatWa: "Chat on WhatsApp",
    },
    hero: {
      pill: "Legian Beach, Bali · 2-Hour Lessons · Free Photos Included",
      titleLine1: "Catch your first wave",
      titleLine2: "with friendly local surfers.",
      subtitle:
        "Patient, 1-on-1 and small group lessons right on the soft sand of Legian Beach. Everything provided — boards, rashguards, ocean safety, and high-res photos.",
      bookBtn: "Book via WhatsApp",
      exploreBtn: "See Lessons & Prices",
      ratingNote: "on Google (188 reviews)",
      fromPrice: "From Rp 150k / session",
      noPrepay: "No prepayment required",
    },
    trustBar: {
      rating: "4.9",
      reviews: "188 Google Reviews",
      location: "Legian & Kuta Beach · Bali",
      quote: "“Trusted by travelers visiting Bali.”",
    },
    experiences: {
      tag: "Lessons & Rentals",
      title: "Simple, transparent pricing.",
      subtitle:
        "All lessons are 2 hours long and include boards, rashguards, ocean safety briefing, and",
      freePhotosHighlight: "free photos & videos",
      currency: "Currency:",
      includedTitle: "Included in package:",
      rateLabel: "Rate",
      hourlyLabel: "Hourly Rate",
      popularBadge: "★ Most Popular for First-Timers",
      bookBtn: "Book on WhatsApp",
      items: [
        {
          id: "group-lesson",
          name: "GROUP SURF LESSON",
          badge: "Special Promo",
          coachRatio: "Max 1 coach : 2–3 students",
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
          image: "/images/surf-coach.png",
          imageAlt: "Group surf lesson in whitewash at Legian Beach",
          waMessage: "Hi Malu Surf Bali, I'd like to book a Group Surf Lesson at Legian Beach!",
          approxText: "(~AUD $15 / $10 USD per person)",
        },
        {
          id: "private-lesson",
          name: "PRIVATE SURF LESSON",
          badge: "1-on-1 Best For Beginners",
          highlighted: true,
          coachRatio: "1 coach : 1 student (100% focused)",
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
          image: "/images/hero-barrel.png",
          imageAlt: "Private surf coach guidance at Legian Beach wave face",
          waMessage: "Hi Malu Surf Bali, I'd like to book a Private Surf Lesson at Legian Beach!",
          approxText: "(~AUD $20 / $13 USD)",
        },
        {
          id: "intermediate-coaching",
          name: "INTERMEDIATE COACHING",
          badge: "Level Up Your Skills",
          coachRatio: "Out-the-back unbroken blue waves",
          duration: "2 hours (20m theory + 1h 40m water)",
          priceIdr: 250000,
          promoNote: "Rp 200k/person for 2+ people",
          description:
            "Take your surfing out the back. Learn lineup etiquette, duck diving/turtle rolls, trimming, speed generation, and clean bottom turns with video analysis.",
          inclusions: [
            "Lineup positioning & wave reading",
            "Duck dive & turtle roll mechanics",
            "Speed generation & turn techniques",
            "FREE Video & Photo Review",
          ],
          image: "/images/board-quiver.png",
          imageAlt: "Intermediate surfer riding green wave face",
          waMessage: "Hi Malu Surf Bali, I'd like to book Intermediate Surf Coaching at Legian Beach!",
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
          image: "/images/sunset-walk.png",
          imageAlt: "Surfboards lined up on beach rack",
          waMessage: "Hi Malu Surf Bali, I'd like to rent a surfboard at Legian Beach!",
          approxText: "(~AUD $5 / $3.50 USD)",
        },
      ] as ExperienceItem[],
    },
    about: {
      tag: "Why Malu Surf Bali",
      title: "Good waves, patient teaching, zero intimidation.",
      description:
        "We believe everyone can experience the feeling of gliding on a wave. Our local instructors (Bob, Jimmy, Kak Niusman & crew) take time on the beach to explain wave mechanics and safety before helping you catch your first waves with confidence.",
      mottoTag: "Legian Beach · Bali",
      mottoText: "“Sleep. Eat. Surf. It's not just a sport, it's a way of life.”",
      mottoSub: "Safe sand-bottom waves, genuine local coaches, and pure Balinese stoke.",
      benefits: [
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
      ],
    },
    reviews: {
      tag: "Guest Stories & Feedback",
      title: "Loved by Surfers Worldwide",
      subtitle:
        "Real reviews from beginners and intermediate travelers who learned and surfed with Bob, Jimmy, Kak Niusman, and the Malu Surf crew.",
      verifiedCount: "188 verified reviews",
      verifiedSurfer: "Verified Surfer",
      bannerTitle: "Have questions about wave conditions or group rates?",
      bannerSub: "Chat directly with our instructors on WhatsApp — we respond quickly with daily tide reports.",
      bannerBtn: "Chat on WhatsApp",
      items: [
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
      ],
    },
    gallery: {
      tag: "Life at the Beach",
      title: "Moments on Legian Beach",
      subtitle: "Warm Indian Ocean swells, gentle beach breaks, and pure surf stoke.",
      caption1Title: "Sunset at Legian",
      caption1Sub: "Golden hour over the tide line",
      caption2Title: "Beginner Waves",
      caption2Sub: "Patient step-by-step coaching",
      caption3Title: "Fresh Quiver & Beach Stand",
      caption3Sub: "Soft-tops, epoxy funboards & longboards",
      caption4Title: "Warm Indian Ocean Swell",
      caption4Sub: "Consistent sand-bottom beach breaks all year round",
    },
    booking: {
      tag: "How It Works & Instant Booking",
      title: "Quick Booking & Group Calculator",
      subtitle: "Customize your session for solo travelers, couples, families, or groups of any size. No prepayment required.",
      bannerTitle: "Ready to hit the waves today?",
      bannerSub: "Chat directly with our instructors on WhatsApp:",
      bannerBtn: "Chat on WhatsApp",
      form: {
        title: "Surf Booking Form",
        subtitle: "Fill out the quick details below and send directly to our coaches on WhatsApp for instant confirmation.",
        fullNameLabel: "Full Name",
        fullNamePlaceholder: "e.g. Alex Johnson",
        packageLabel: "Surf Experience",
        packages: [
          { id: "group-lesson", name: "Group Promo", price: 150000, note: "Min. 2 pax" },
          { id: "private-lesson", name: "Private 1-on-1", price: 200000, note: "1 Coach : 1 Guest" },
          { id: "intermediate-coaching", name: "Intermediate", price: 250000, note: "Green Waves" },
          { id: "board-rental", name: "Board Rental", price: 50000, note: "Hourly" },
        ],
        surfersCountLabel: "Surfers",
        surfersUnit: "pax",
        skillLevelLabel: "Skill Level",
        skillLevels: [
          { id: "first-timer", label: "First Timer (Never surfed before)" },
          { id: "beginner", label: "Beginner (Tried 1-2 times, practicing standing up)" },
          { id: "intermediate", label: "Intermediate (Can catch green waves, trimming)" },
          { id: "advanced", label: "Advanced Surfer" },
        ],
        dateLabel: "Date",
        timeSlotLabel: "Time / Tide",
        timeSlots: [
          { id: "morning", label: "Morning (08:00–10:00)" },
          { id: "midday", label: "Midday (11:00–13:00)" },
          { id: "sunset", label: "Sunset (15:30–17:30)" },
          { id: "flexible", label: "Flexible (Best Tide)" },
        ],
        notesLabel: "Hotel / Notes (Optional)",
        notesPlaceholder: "e.g. Staying in Legian, 2 adults + 1 child",
        estimatedTotal: "Estimated Total",
        freePhotosBadge: "FREE High-Res Photos & Videos Included",
        gearIncludedBadge: "Board, Rashguard & Leash Provided",
        noPrepaymentBadge: "Pay on the beach (Cash / Transfer / QRIS)",
        submitBtn: "Send Booking via WhatsApp",
        minGroupAlert: "Note: Group lesson promo applies for 2 or more surfers.",
      },
      steps: [
        {
          number: "01",
          title: "Select your session & group size",
          description: "Choose Group Promo (Rp 150k), Private 1-on-1 (Rp 200k), Intermediate Coaching, or Board Rental for 1 to 10+ people.",
        },
        {
          number: "02",
          title: "Message us on WhatsApp",
          description: "Send your preferred date, time, and headcount. We'll check the cleanest tide times and lock in your slot.",
        },
        {
          number: "03",
          title: "Meet at Legian Beach & Surf!",
          description: "Find our beach stand on the sand, get your board & rashguard, catch waves, and get your free photos.",
        },
      ],
    },
    location: {
      tag: "Find Malu Surf Stand",
      title: "Legian & Kuta Beach, Bali",
      description:
        "Located right on the sandy shoreline along Jalan Pantai Legian & Pantai Kuta. Conveniently accessible for morning high-tide beginner sessions and golden sunset wave rides.",
      addressTitle: "Beach Stand Location",
      addressText: "Jl. Pantai Legian / Jl. Pantai Kuta, Legian, Kec. Kuta, Kabupaten Badung, Bali 80361",
      getDirections: "Get Directions",
      bookOnWa: "Book via WhatsApp",
      standBadgeTitle: "Malu Surf Bali — Beach Stand",
      standBadgeSub: "Jl. Pantai Legian · Direct Ocean Access",
      openMap: "Open Map",
    },
    cta: {
      tag: "See You in the Lineup",
      title: "Your first wave is waiting on Legian Beach.",
      description:
        "Send us a message on WhatsApp with your dates and group size. We'll confirm the cleanest tides and get your boards ready.",
      btn: "Book via WhatsApp",
    },
    footer: {
      desc: "Surf lessons, intermediate coaching, and board rentals at Legian Beach & Kuta Beach, Bali, Indonesia. FREE surf action photos & videos included with every lesson.",
      quickLinks: "Quick Links",
      contact: "Contact & Booking",
      allRights: "All rights reserved.",
      freePhotosBadge: "Free Photos Included",
      safetyFirst: "Safety First",
    },
  },
  id: {
    nav: {
      experiences: "Paket & Harga",
      about: "Tentang Kami",
      reviews: "Ulasan Tamu",
      gallery: "Galeri",
      location: "Lokasi Pantai",
      bookNow: "Pesan Sekarang",
      chatWa: "Chat WhatsApp",
    },
    hero: {
      pill: "Pantai Legian, Bali · Sesi 2 Jam · Gratis Foto & Video",
      titleLine1: "Rasakan serunya ombak pertama",
      titleLine2: "bersama instruktur lokal Bali.",
      subtitle:
        "Pelajaran surfing privat (1-on-1) dan grup kecil di Pantai Legian yang berpasir lembut dan aman. Semua perlengkapan sudah disediakan — papan, rashguard, briefing keamanan, serta bonus foto aksi beresolusi tinggi.",
      bookBtn: "Pesan via WhatsApp",
      exploreBtn: "Lihat Paket & Harga",
      ratingNote: "di Google (188 ulasan)",
      fromPrice: "Mulai Rp 150rb / orang",
      noPrepay: "Tanpa uang muka",
    },
    trustBar: {
      rating: "4.9",
      reviews: "188 Ulasan Google",
      location: "Pantai Legian & Kuta · Bali",
      quote: "“Pilihan terpercaya peselancar di Bali.”",
    },
    experiences: {
      tag: "Pelajaran & Sewa Papan",
      title: "Harga jujur dan transparan.",
      subtitle:
        "Semua sesi pelajaran berdurasi 2 jam penuh, termasuk papan selancar, rashguard pelindung, briefing keselamatan, dan",
      freePhotosHighlight: "GRATIS foto & video aksi",
      currency: "Mata Uang:",
      includedTitle: "Fasilitas termasuk:",
      rateLabel: "Biaya Sesi",
      hourlyLabel: "Biaya / Jam",
      popularBadge: "★ Paling Populer untuk Pemula",
      bookBtn: "Pesan via WhatsApp",
      items: [
        {
          id: "group-lesson",
          name: "GROUP SURF LESSON",
          badge: "Promo Spesial",
          coachRatio: "Maks. 1 pelatih : 2–3 murid",
          duration: "2 jam",
          priceIdr: 150000,
          promoNote: "min. 2 orang (harga normal Rp 200rb)",
          description:
            "Sesi seru, aman, dan penuh bimbingan di air. Belajar teknik berdiri (pop-up), membaca ombak, dan keamanan laut dengan bonus foto & video aksi gratis!",
          inclusions: [
            "Papan soft-top pemula & leash",
            "Baju rashguard anti-UV",
            "Teori pantai & briefing keselamatan",
            "GRATIS Foto & Video Aksi",
          ],
          image: "/images/surf-coach.png",
          imageAlt: "Pelajaran surfing grup di Pantai Legian Bali",
          waMessage: "Halo Malu Surf Bali, saya mau booking Group Surf Lesson di Pantai Legian!",
          approxText: "(~AUD $15 / $10 USD per orang)",
        },
        {
          id: "private-lesson",
          name: "PRIVATE SURF LESSON",
          badge: "1-on-1 Terbaik untuk Pemula",
          highlighted: true,
          coachRatio: "1 pelatih : 1 murid (100% fokus)",
          duration: "2 jam",
          priceIdr: 200000,
          description:
            "100% perhatian penuh pelatih khusus untuk perkembangan tercepat dan teraman. Kuasai keseimbangan, timing mendayung, dan kontrol papan bersama dokumentasi foto gratis.",
          inclusions: [
            "1 pelatih pribadi khusus (1-on-1)",
            "Papan learner atau epoxy pilihan",
            "Baju rashguard anti-UV",
            "GRATIS Foto & Video Kualitas Tinggi",
          ],
          image: "/images/hero-barrel.png",
          imageAlt: "Pelatih privat surfing di Pantai Legian Bali",
          waMessage: "Halo Malu Surf Bali, saya mau booking Private Surf Lesson di Pantai Legian!",
          approxText: "(~AUD $20 / $13 USD)",
        },
        {
          id: "intermediate-coaching",
          name: "INTERMEDIATE COACHING",
          badge: "Tingkatkan Skill Surfing",
          coachRatio: "Ombak hijau (unbroken blue waves)",
          duration: "2 jam (20 mnt teori + 1j 40m di air)",
          priceIdr: 250000,
          promoNote: "Rp 200rb/orang untuk 2+ orang",
          description:
            "Bawa kemampuan surfing Anda ke ombak luar. Pelajari etika lineup, teknik duck dive / turtle roll, menambah kecepatan, dan bottom turn dengan analisis video.",
          inclusions: [
            "Posisi lineup & membaca ombak hijau",
            "Mekanik duck dive & turtle roll",
            "Teknik carving & kecepatan papan",
            "GRATIS Evaluasi Video & Foto",
          ],
          image: "/images/board-quiver.png",
          imageAlt: "Peselancar intermediate di Pantai Legian",
          waMessage: "Halo Malu Surf Bali, saya mau booking Intermediate Surf Coaching di Pantai Legian!",
          approxText: "(~AUD $25 / $16 USD)",
        },
        {
          id: "board-rental",
          name: "SEWA PAPAN SURFING",
          badge: "Langsung di Stand Pantai",
          coachRatio: "Soft-top, Funboard & Epoxy",
          duration: "1 jam (fleksibel multi-jam)",
          priceIdr: 50000,
          description:
            "Koleksi papan selancar terawat dan berlilin siap pakai langsung di pasir Pantai Legian. Bebas tukar ukuran papan kapan saja sesuai perubahan pasang surut ombak.",
          inclusions: [
            "Pilihan papan soft-top atau fiberglass",
            "Leash & lilin wax sudah termasuk",
            "Bebas tukar jenis papan selama sesi",
            "Penitipan barang aman di stand pantai",
          ],
          image: "/images/sunset-walk.png",
          imageAlt: "Papan selancar di rak stand pantai Legian",
          waMessage: "Halo Malu Surf Bali, saya mau sewa papan surfing di Pantai Legian!",
          approxText: "(~AUD $5 / $3.50 USD)",
        },
      ] as ExperienceItem[],
    },
    about: {
      tag: "Mengapa Malu Surf Bali",
      title: "Ombak bersahabat, pelatih sabar, suasana santai.",
      description:
        "Kami percaya setiap orang bisa merasakan asyiknya meluncur di atas ombak. Instruktur lokal kami (Bob, Jimmy, Kak Niusman & tim) meluangkan waktu di pantai untuk menjelaskan teknik dan keamanan laut sebelum memandu Anda menangkap ombak pertama dengan percaya diri.",
      mottoTag: "Pantai Legian · Bali",
      mottoText: "“Sleep. Eat. Surf. Bukan sekadar olahraga, ini gaya hidup.”",
      mottoSub: "Dasar pantai pasir yang aman, instruktur lokal ramah, dan semangat peselancar sejati.",
      benefits: [
        {
          title: "Pantai Legian & Kuta",
          description: "Dasar laut pasir lembut tanpa karang tajam, sangat aman untuk belajar.",
          icon: "MapPin",
        },
        {
          title: "Gratis Foto & Video",
          description: "Dokumentasi foto aksi jernih sudah termasuk di setiap sesi tanpa biaya tambahan.",
          icon: "Camera",
        },
        {
          title: "Instruktur Lokal Ramah",
          description: "Peselancar lokal Bali berpengalaman, sabar, dan penuh semangat mengajar.",
          icon: "Users",
        },
        {
          title: "Perlengkapan Lengkap",
          description: "Papan kualitas tinggi, baju rashguard UV, leash, dan tempat simpan barang.",
          icon: "Waves",
        },
      ],
    },
    reviews: {
      tag: "Cerita & Ulasan Tamu",
      title: "Disukai Peselancar dari Seluruh Dunia",
      subtitle:
        "Ulasan nyata dari wisatawan pemula hingga menengah yang belajar surfing bersama Bob, Jimmy, Kak Niusman, dan tim Malu Surf.",
      verifiedCount: "188 ulasan terverifikasi",
      verifiedSurfer: "Peselancar Terverifikasi",
      bannerTitle: "Ada pertanyaan tentang kondisi ombak atau jadwal pasang surut?",
      bannerSub: "Chat langsung dengan instruktur kami di WhatsApp — kami siap membalas info ombak harian dengan cepat.",
      bannerBtn: "Chat di WhatsApp",
      items: [
        {
          name: "Sarah M.",
          origin: "Australia",
          rating: 5,
          date: "Tamu Terbaru",
          comment:
            "Bob dan Jimmy adalah instruktur terbaik! Sangat sabar, membuat kami merasa aman, dan kami langsung bisa berdiri di ombak pertama. Plus mereka mengambil foto aksi yang luar biasa gratis!",
        },
        {
          name: "Marcus L.",
          origin: "Jerman",
          rating: 5,
          date: "Tamu Terbaru",
          comment:
            "Pelajaran surfing terbaik di Bali! Kak Niusman dan kru sangat hangat dan ramah. Setelah seru berselancar, nongkrong di pantai minum kelapa sambil petik gitar akustik sungguh ajaib.",
        },
        {
          name: "Elena R.",
          origin: "Inggris (UK)",
          rating: 5,
          date: "Tamu Terbaru",
          comment:
            "Harga sangat sepadan dan keramahan lokal asli. 200rb untuk 2 jam sesi privat dengan foto dan rashguard lengkap itu luar biasa. Sangat merekomendasikan Malu Surf Bali di Pantai Legian!",
        },
      ],
    },
    gallery: {
      tag: "Suasana di Pantai",
      title: "Momen di Pantai Legian",
      subtitle: "Ombak Samudra Hindia yang hangat, gulungan ombak bersahabat, dan keceriaan berselancar.",
      caption1Title: "Senja di Legian",
      caption1Sub: "Cahaya keemasan di garis pasang surut",
      caption2Title: "Ombak Pemula",
      caption2Sub: "Bimbingan langkah demi langkah yang sabar",
      caption3Title: "Koleksi Papan & Stand Pantai",
      caption3Sub: "Soft-top, epoxy funboard & longboard",
      caption4Title: "Ombak Samudra Hindia",
      caption4Sub: "Ombak dasar pasir yang konsisten sepanjang tahun",
    },
    booking: {
      tag: "Cara Booking & Formulir Langsung",
      title: "Booking Cepat & Kalkulator Grup",
      subtitle: "Sesuaikan sesi untuk solo surfer, pasangan, keluarga, atau rombongan rombongan berapapun. Tanpa uang muka.",
      bannerTitle: "Siap mencoba surfing hari ini?",
      bannerSub: "Chat langsung dengan instruktur kami di WhatsApp:",
      bannerBtn: "Chat via WhatsApp",
      form: {
        title: "Booking Sesi Surfing",
        subtitle: "Lengkapi data singkat di bawah ini dan kirim langsung ke pelatih kami di WhatsApp untuk konfirmasi instan.",
        fullNameLabel: "Nama Lengkap",
        fullNamePlaceholder: "cth. Budi Santoso",
        packageLabel: "Pilihan Paket",
        packages: [
          { id: "group-lesson", name: "Group Promo", price: 150000, note: "Min. 2 org" },
          { id: "private-lesson", name: "Private 1-on-1", price: 200000, note: "1 Pelatih : 1 Org" },
          { id: "intermediate-coaching", name: "Intermediate", price: 250000, note: "Ombak Luar" },
          { id: "board-rental", name: "Sewa Papan", price: 50000, note: "Per Jam" },
        ],
        surfersCountLabel: "Peserta",
        surfersUnit: "org",
        skillLevelLabel: "Level Surfing",
        skillLevels: [
          { id: "first-timer", label: "Pemula Total (Belum pernah)" },
          { id: "beginner", label: "Pernah Mencoba (1-2 kali)" },
          { id: "intermediate", label: "Menengah (Ombak hijau)" },
          { id: "advanced", label: "Mahir (Sewa papan)" },
        ],
        dateLabel: "Tanggal",
        timeSlotLabel: "Waktu / Sesi",
        timeSlots: [
          { id: "morning", label: "Pagi (08:00–10:00)" },
          { id: "midday", label: "Siang (11:00–13:00)" },
          { id: "sunset", label: "Sunset (15:30–17:30)" },
          { id: "flexible", label: "Fleksibel (Ombak Terbaik)" },
        ],
        notesLabel: "Catatan / Hotel (Opsional)",
        notesPlaceholder: "cth. Menginap di Legian, 2 dewasa + 1 anak",
        estimatedTotal: "Perkiraan Total",
        freePhotosBadge: "GRATIS Foto & Video Aksi Beresolusi Tinggi",
        gearIncludedBadge: "Papan, Baju Rashguard & Leash Disediakan",
        noPrepaymentBadge: "Bayar di pantai saat sesi selesai (Tunai / Transfer / QRIS)",
        submitBtn: "Pesan via WhatsApp",
        minGroupAlert: "Catatan: Promo Group Lesson berlaku untuk minimal 2 orang peserta.",
      },
      steps: [
        {
          number: "01",
          title: "Pilih paket sesi & jumlah peserta",
          description: "Pilih Group Promo (Rp 150rb), Private 1-on-1 (Rp 200rb), Intermediate Coaching, atau Sewa Papan untuk 1 hingga 10+ orang.",
        },
        {
          number: "02",
          title: "Kirim pesan via WhatsApp",
          description: "Kirim tanggal, perkiraan jam, dan jumlah peserta. Kami akan cek pasang surut terbaik dan mengonfirmasi jadwal.",
        },
        {
          number: "03",
          title: "Ketemu di Pantai Legian & Surfing!",
          description: "Temui stand kami di pasir pantai, pakai perlengkapan & rashguard, nikmati ombak, dan dapatkan foto gratis Anda.",
        },
      ],
    },
    location: {
      tag: "Lokasi Stand Malu Surf",
      title: "Pantai Legian & Kuta, Bali",
      description:
        "Berlokasi tepat di pasir tepi pantai sepanjang Jalan Pantai Legian & Pantai Kuta. Sangat mudah dijangkau untuk sesi pagi saat air pasang maupun sesi sore saat matahari terbenam.",
      addressTitle: "Alamat Stand Pantai",
      addressText: "Jl. Pantai Legian / Jl. Pantai Kuta, Legian, Kec. Kuta, Kabupaten Badung, Bali 80361",
      getDirections: "Petunjuk Arah Google Maps",
      bookOnWa: "Pesan via WhatsApp",
      standBadgeTitle: "Malu Surf Bali — Stand Pantai",
      standBadgeSub: "Jl. Pantai Legian · Akses Langsung Tepi Laut",
      openMap: "Buka Peta",
    },
    cta: {
      tag: "Sampai Jumpa di Pantai",
      title: "Ombak pertama Anda menanti di Pantai Legian.",
      description:
        "Kirimkan pesan WhatsApp berisi tanggal dan jumlah peserta. Kami akan konfirmasi jadwal ombak terbaik dan siapkan papan untuk Anda.",
      btn: "Pesan via WhatsApp",
    },
    footer: {
      desc: "Pelajaran surfing, intermediate coaching, dan sewa papan selancar di Pantai Legian & Pantai Kuta, Bali. GRATIS foto & video aksi di setiap sesi pelajaran.",
      quickLinks: "Tautan Cepat",
      contact: "Kontak & Pemesanan",
      allRights: "Hak cipta dilindungi.",
      freePhotosBadge: "Termasuk Foto Gratis",
      safetyFirst: "Keamanan Utama",
    },
  },
};
