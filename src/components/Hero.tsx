"use client";

import Image from "next/image";
import { MessageCircle, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { getWhatsAppLink } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { language, dict } = useLanguage();

  return (
    <section className="relative w-full min-h-[92vh] flex items-center justify-center overflow-hidden bg-primary-dark">
      {/* Background Image with Radiant Sunset Ocean Atmosphere */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/hero-barrel.png"
          alt="Surfer catching wave at Legian Beach Bali"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-[1.02]"
        />
        {/* Warm oceanic gradient overlay — subtle, cinematic, sun-kissed */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/95 via-primary-dark/50 to-primary-dark/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/60 via-transparent to-primary-dark/80" />
      </div>

      {/* Hero Content Canvas */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-10 pt-32 pb-20 flex flex-col items-center text-center">
        {/* Editorial Eyebrow Tagline (No AI Pill Container) */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-[0.24em] text-amber-300 uppercase mb-5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span>{dict.hero.pill}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-[1.08] mb-6 font-normal max-w-4xl drop-shadow-sm"
        >
          {dict.hero.titleLine1} <br />
          <span className="italic text-amber-300 font-light drop-shadow-sm">{dict.hero.titleLine2}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed mb-10 font-normal"
        >
          {dict.hero.subtitle}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a
            href={getWhatsAppLink(
              language === "id"
                ? "Halo Malu Surf Bali, saya mau booking pelajaran surfing di Pantai Legian!"
                : "Hi Malu Surf Bali, I'd like to book a surf lesson at Legian Beach!"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-amber-400 text-primary-dark rounded-full font-semibold text-sm hover:bg-amber-300 transition-all shadow-lg shadow-amber-500/25 active:scale-[0.98]"
          >
            <MessageCircle className="w-4 h-4 text-primary-dark" />
            <span>{dict.hero.bookBtn}</span>
          </a>

          <a
            href="#experiences"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full border border-white/25 backdrop-blur-sm text-sm font-medium transition-all"
          >
            <span>{dict.hero.exploreBtn}</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        {/* Quick Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-white/80 font-light"
        >
          <span className="flex items-center gap-1.5">
            <span className="text-amber-400 font-bold">★ 4.9</span> {dict.hero.ratingNote}
          </span>
          <span className="opacity-40">•</span>
          <span>{dict.hero.fromPrice}</span>
          <span className="opacity-40">•</span>
          <span>{dict.hero.noPrepay}</span>
        </motion.div>
      </div>
    </section>
  );
}

