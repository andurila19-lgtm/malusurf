"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { BUSINESS_INFO, getWhatsAppLink } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";
import BookingForm from "./BookingForm";

export default function BookingProcess() {
  const { language, dict } = useLanguage();

  return (
    <section id="booking" className="w-full py-12 sm:py-20 lg:py-24 bg-surface-low border-y border-outline-light scroll-mt-16">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 space-y-1.5">
          <span className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold block">
            {dict.booking.tag}
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-primary tracking-tight font-normal">
            {dict.booking.title}
          </h2>
          <p className="text-xs sm:text-sm text-on-surface-variant font-light">
            {dict.booking.subtitle}
          </p>
        </div>

        {/* Two-Column Layout: Form takes priority, 3 Steps on side on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          {/* Form Column (Primary on mobile & desktop) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <BookingForm initialPackage="private-lesson" />
          </div>

          {/* Left Column: 3 Steps & Info */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6 order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3 sm:gap-4">
              {dict.booking.steps.map((step, idx) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-4 sm:p-5 bg-surface-card rounded-xl border border-outline-light space-y-1.5 shadow-xs hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="font-serif text-lg sm:text-xl font-bold text-amber-500">
                      {step.number}
                    </span>
                    <h3 className="font-serif text-sm sm:text-base text-primary font-medium">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-[11px] sm:text-xs text-on-surface-variant leading-relaxed font-light pl-6 sm:pl-7">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Direct WhatsApp Strip (Clean desktop & tablet helper) */}
            <div className="bg-primary text-white rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm">
              <div className="space-y-0.5 text-center sm:text-left">
                <h4 className="font-serif text-sm sm:text-base font-medium">
                  {dict.booking.bannerTitle}
                </h4>
                <p className="text-[11px] text-white/80 font-light">
                  {dict.booking.bannerSub} <span className="text-amber-300 font-medium">{BUSINESS_INFO.whatsappNumber}</span>
                </p>
              </div>

              <a
                href={getWhatsAppLink(
                  language === "id"
                    ? "Halo Malu Surf Bali, saya mau cek jadwal pasang surut ombak dan booking sesi surfing!"
                    : "Hi Malu Surf Bali, I'd like to check today's tide times and surf lesson availability!"
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-amber-400 text-primary-dark rounded-full text-xs uppercase font-bold tracking-wider hover:bg-amber-300 transition-colors shadow-sm shrink-0"
              >
                <MessageCircle className="w-3.5 h-3.5 text-primary-dark" />
                <span>{dict.booking.bannerBtn}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


