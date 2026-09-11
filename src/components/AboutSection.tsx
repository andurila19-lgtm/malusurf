"use client";

import Image from "next/image";
import { MapPin, Waves, Users, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { BENEFITS } from "@/lib/data";

export default function AboutSection() {
  const iconMap: Record<string, React.ReactNode> = {
    MapPin: <MapPin className="w-5 h-5 text-secondary flex-shrink-0" />,
    Waves: <Waves className="w-5 h-5 text-secondary flex-shrink-0" />,
    Users: <Users className="w-5 h-5 text-secondary flex-shrink-0" />,
    MessageCircle: <MessageCircle className="w-5 h-5 text-secondary flex-shrink-0" />,
  };

  return (
    <section
      className="w-full py-24 bg-surface-low border-y border-outline-light scroll-mt-20"
      id="about"
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Large Lifestyle Photography */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 order-2 lg:order-1"
          >
            <div className="relative rounded overflow-hidden shadow-md bg-sand h-[480px] lg:h-[580px]">
              <Image
                src="/images/sunset-walk.png"
                alt="Surfer walking along Kuta Beach at sunset holding surfboard"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-amber-200">
                  Kuta Beach Shoreline
                </span>
                <p className="font-serif text-lg italic mt-0.5">
                  Golden hour over the tide line
                </p>
              </div>
            </div>
          </motion.div>

          {/* Editorial Split Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 order-1 lg:order-2 space-y-8"
          >
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold block">
                About Malu Surf
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-primary tracking-tight leading-tight font-medium">
                Your Bali Surf Experience Starts Here
              </h2>
              <p className="text-base text-on-surface-variant font-light leading-relaxed">
                A simple, friendly way to experience the waves of Kuta Beach.
              </p>
            </div>

            {/* Four Concise Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {BENEFITS.map((benefit, i) => (
                <div
                  key={i}
                  className="p-6 bg-surface-card rounded border border-outline-light space-y-2 shadow-xs hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    {iconMap[benefit.icon]}
                    <h4 className="font-serif font-medium text-base text-primary">
                      {benefit.title}
                    </h4>
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
