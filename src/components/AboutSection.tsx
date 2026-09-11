"use client";

import Image from "next/image";
import { MapPin, Waves, Users, Camera } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutSection() {
  const { dict } = useLanguage();

  const iconMap: Record<string, React.ReactNode> = {
    MapPin: <MapPin className="w-5 h-5 text-secondary shrink-0" />,
    Waves: <Waves className="w-5 h-5 text-secondary shrink-0" />,
    Users: <Users className="w-5 h-5 text-secondary shrink-0" />,
    Camera: <Camera className="w-5 h-5 text-secondary shrink-0" />,
  };

  return (
    <section
      className="w-full py-24 bg-surface-low border-y border-outline-light scroll-mt-20"
      id="about"
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Lifestyle Photography */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 order-2 lg:order-1"
          >
            <div className="relative rounded-lg overflow-hidden shadow-sm bg-sand h-[460px] lg:h-[540px]">
              <Image
                src="/images/sunset-walk.webp"
                alt="Surfer walking along Legian Beach at sunset holding surfboard"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-amber-300 block">
                  {dict.about.mottoTag}
                </span>
                <p className="font-serif text-xl italic font-normal">
                  {dict.about.mottoText}
                </p>
                <p className="text-xs text-white/80 font-light pt-0.5">
                  {dict.about.mottoSub}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Story & Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 order-1 lg:order-2 space-y-8"
          >
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold block">
                {dict.about.tag}
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-primary tracking-tight font-normal leading-tight">
                {dict.about.title}
              </h2>
              <p className="text-sm md:text-base text-on-surface-variant font-light leading-relaxed">
                {dict.about.description}
              </p>
            </div>

            {/* 4 Clean Benefit Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {dict.about.benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="p-5 bg-surface-card rounded-lg border border-outline-light space-y-2 shadow-xs hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    {iconMap[benefit.icon] || <Waves className="w-5 h-5 text-secondary shrink-0" />}
                    <h4 className="font-serif font-medium text-base text-primary">
                      {benefit.title}
                    </h4>
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed font-light">
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
