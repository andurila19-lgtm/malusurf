"use client";

import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { getWhatsAppLink } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

export default function FinalCTA() {
  const { language, dict } = useLanguage();

  return (
    <section className="relative w-full py-28 overflow-hidden bg-primary">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/sunset-walk.webp"
          alt="Sunset surfing at Legian Beach Bali"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary/80 to-primary-dark/70" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 md:px-10 text-center flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-[0.22em] text-amber-300 mb-3 font-semibold block"
        >
          {dict.cta.tag}
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl text-white max-w-2xl leading-tight mb-4 font-normal"
        >
          {dict.cta.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base text-white/85 max-w-lg mb-8 leading-relaxed font-light"
        >
          {dict.cta.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href={getWhatsAppLink(
              language === "id"
                ? "Halo Malu Surf Bali, saya siap booking sesi surfing di Pantai Legian!"
                : "Hi Malu Surf Bali, I'm ready to book my surf lesson at Legian Beach!"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-amber-400 text-primary-dark rounded font-semibold text-sm hover:bg-amber-300 transition-colors shadow-lg active:scale-[0.98]"
          >
            <MessageCircle className="w-4 h-4 text-primary-dark" />
            <span>{dict.cta.btn}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
