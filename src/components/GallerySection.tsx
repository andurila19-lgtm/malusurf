"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function GallerySection() {
  const { dict } = useLanguage();

  return (
    <section className="w-full py-24 bg-surface scroll-mt-20" id="gallery">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Header */}
        <div className="mb-14 text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold block">
            {dict.gallery.tag}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-primary tracking-tight font-normal">
            {dict.gallery.title}
          </h2>
          <p className="text-sm text-on-surface-variant font-light">
            {dict.gallery.subtitle}
          </p>
        </div>

        {/* Asymmetric Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Large Left Span: Bali Sunset */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="group relative md:col-span-7 h-[380px] md:h-[460px] rounded-lg overflow-hidden bg-sand shadow-xs"
          >
            <Image
              src="/images/sunset-walk.webp"
              alt="Bali sunset walk with surfboard at Legian beach"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-6 text-white">
              <span className="font-serif text-lg md:text-xl font-normal block">
                {dict.gallery.caption1Title}
              </span>
              <span className="text-xs text-white/80 font-light">
                {dict.gallery.caption1Sub}
              </span>
            </div>
          </motion.div>

          {/* Stacked Right Column: 2 Cards */}
          <div className="md:col-span-5 flex flex-col gap-6">
            {/* Top Right: Surf Lesson Coaching */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative h-[218px] rounded-lg overflow-hidden bg-sand shadow-xs"
            >
              <Image
                src="/images/surf-coach.webp"
                alt="Surf lesson coaching in progress at Legian"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 text-white">
                <span className="font-serif text-base font-normal block">
                  {dict.gallery.caption2Title}
                </span>
                <span className="text-xs text-white/80 font-light">
                  {dict.gallery.caption2Sub}
                </span>
              </div>
            </motion.div>

            {/* Bottom Right: Board Rental Quiver */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative h-[218px] rounded-lg overflow-hidden bg-sand shadow-xs"
            >
              <Image
                src="/images/board-quiver.webp"
                alt="Surfboard rack on beach sand"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 text-white">
                <span className="font-serif text-base font-normal block">
                  {dict.gallery.caption3Title}
                </span>
                <span className="text-xs text-white/80 font-light">
                  {dict.gallery.caption3Sub}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Bottom Feature */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="group relative md:col-span-12 h-[300px] md:h-[380px] rounded-lg overflow-hidden bg-sand shadow-xs"
          >
            <Image
              src="/images/hero-barrel.webp"
              alt="Surfer carving turquoise wave in Bali swell"
              fill
              sizes="100vw"
              className="object-cover group-hover:scale-[1.01] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-8 text-white">
              <span className="font-serif text-xl md:text-2xl font-normal block">
                {dict.gallery.caption4Title}
              </span>
              <span className="text-xs text-white/80 font-light">
                {dict.gallery.caption4Sub}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
