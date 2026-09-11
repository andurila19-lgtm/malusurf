"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function GallerySection() {
  return (
    <section className="w-full py-24 bg-surface scroll-mt-20" id="gallery">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Header */}
        <div className="mb-14 text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold block">
            Visual Impressions
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-primary tracking-tight font-medium">
            Moments on Kuta Beach
          </h2>
        </div>

        {/* Premium Asymmetric Masonry Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Large Left Span: Bali Sunset */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="group relative md:col-span-7 h-[420px] md:h-[500px] rounded overflow-hidden bg-sand shadow-sm"
          >
            <Image
              src="/images/sunset-walk.png"
              alt="Bali sunset walk with surfboard at Kuta beach"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-6 text-white">
              <span className="font-serif text-lg md:text-xl font-medium block">
                Bali Sunset
              </span>
              <span className="text-[11px] uppercase tracking-[0.18em] text-white/80 font-medium">
                Kuta Beach Shoreline
              </span>
            </div>
          </motion.div>

          {/* Stacked Right Column: 2 Cards */}
          <div className="md:col-span-5 flex flex-col gap-6">
            {/* Top Right: Surf Lesson Coaching */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="group relative h-[238px] rounded overflow-hidden bg-sand shadow-sm"
            >
              <Image
                src="/images/surf-coach.png"
                alt="Surf lesson coaching in progress at Kuta"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 text-white">
                <span className="font-serif text-base font-medium block">
                  Surf Lesson
                </span>
                <span className="text-[10px] uppercase tracking-[0.16em] text-white/80 font-medium">
                  Beginner Waves
                </span>
              </div>
            </motion.div>

            {/* Bottom Right: Board Rental Quiver */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="group relative h-[238px] rounded overflow-hidden bg-sand shadow-sm"
            >
              <Image
                src="/images/board-quiver.png"
                alt="Surfboard rack on beach sand"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 text-white">
                <span className="font-serif text-base font-medium block">
                  Kuta Beach
                </span>
                <span className="text-[10px] uppercase tracking-[0.16em] text-white/80 font-medium">
                  Quiver &amp; Sand Stand
                </span>
              </div>
            </motion.div>
          </div>

          {/* Bottom Full-Width Horizontal Feature: Clean Wave Riding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="group relative md:col-span-12 h-[340px] md:h-[420px] rounded overflow-hidden bg-sand shadow-sm"
          >
            <Image
              src="/images/hero-barrel.png"
              alt="Surfer carving turquoise wave in Kuta swell"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-8 text-white">
              <span className="font-serif text-xl md:text-2xl font-medium block">
                Kuta Beach
              </span>
              <span className="text-xs uppercase tracking-[0.18em] text-white/80 font-medium">
                Clean Indian Ocean Swell
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
