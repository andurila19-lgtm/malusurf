"use client";

import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { getWhatsAppLink } from "@/lib/data";

export default function FinalCTA() {
  return (
    <section className="relative w-full py-32 overflow-hidden bg-primary">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/sunset-walk.png"
          alt="Sunset surfing at Kuta Beach Bali"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary/75 to-primary-dark/60" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 text-center flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.22em] text-amber-200 mb-4 font-medium block"
        >
          Start Here
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-4xl sm:text-6xl text-white max-w-2xl leading-tight mb-4 font-normal"
        >
          Your First Wave in Bali Awaits
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base text-white/85 max-w-lg mb-10 leading-relaxed font-light"
        >
          Join Malu Surf Bali at Kuta Beach.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href={getWhatsAppLink(
              "Hi Malu Surf Bali, I'm ready to book my surf lesson!"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-primary rounded text-xs uppercase font-semibold tracking-[0.16em] hover:bg-sand transition-all shadow-xl group"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>Book Your Surf Lesson</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
