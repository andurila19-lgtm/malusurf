"use client";

import Image from "next/image";
import { MessageCircle, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { getWhatsAppLink } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Immersive Cinematic Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/hero-barrel.png"
          alt="Surfer riding wave at Kuta Beach, Bali"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary/50 to-primary-dark/60" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Hero Content Canvas */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 pt-36 pb-24 flex flex-col items-center text-center">
        {/* Editorial Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="font-serif text-4xl sm:text-6xl lg:text-7xl text-white max-w-4xl tracking-tight leading-[1.08] mb-6 font-medium"
        >
          Learn to Surf <br />
          <span className="italic font-normal text-amber-100">in Bali</span>
        </motion.h1>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-sans text-base md:text-lg text-white/85 max-w-xl mx-auto leading-relaxed mb-10 font-normal"
        >
          Surf lessons and board rentals at Kuta Beach.
        </motion.p>

        {/* Dual CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center"
        >
          <a
            href={getWhatsAppLink("Hi Malu Surf Bali, I'd like to book a surf lesson!")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-primary rounded text-xs uppercase font-semibold tracking-[0.16em] hover:bg-sand transition-all duration-200 shadow-lg group"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>Book Your Surf Lesson</span>
          </a>

          <a
            href="#experiences"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white rounded border border-white/25 backdrop-blur-md hover:bg-white/20 text-xs uppercase font-medium tracking-[0.16em] transition-all duration-200"
          >
            <span>Explore Experiences</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
