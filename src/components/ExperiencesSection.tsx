"use client";

import { useState } from "react";
import Image from "next/image";
import { Users, User, Clock, Waves, ArrowRight, Check, Compass } from "lucide-react";
import { motion } from "framer-motion";
import {
  CURRENCY_RATES,
  CurrencyKey,
  getWhatsAppLink,
} from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";
import { useBookingModal } from "@/context/BookingModalContext";

export default function ExperiencesSection() {
  const [currency, setCurrency] = useState<CurrencyKey>("IDR");
  const { dict } = useLanguage();
  const { openBookingModal } = useBookingModal();

  const currencies: CurrencyKey[] = ["IDR", "AUD", "USD", "EUR"];

  return (
    <section className="w-full py-24 bg-surface scroll-mt-20" id="experiences">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Header & Currency Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold block mb-2">
              {dict.experiences.tag}
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-primary tracking-tight font-normal">
              {dict.experiences.title}
            </h2>
            <p className="text-sm md:text-base text-on-surface-variant mt-2 max-w-xl">
              {dict.experiences.subtitle}{" "}
              <span className="text-primary font-semibold">{dict.experiences.freePhotosHighlight}</span>.
            </p>
          </div>

          {/* Currency Switcher */}
          <div className="flex items-center gap-1.5 p-1 rounded-md bg-surface-low border border-outline-light self-start md:self-auto">
            <span className="text-[11px] uppercase tracking-wider text-on-surface-variant px-2 font-medium">
              {dict.experiences.currency}
            </span>
            {currencies.map((curr) => (
              <button
                key={curr}
                type="button"
                onClick={() => setCurrency(curr)}
                className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                  currency === curr
                    ? "bg-primary text-white shadow-xs"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {curr}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dict.experiences.items.map((exp, idx) => {
            const isPrivate = exp.highlighted;
            const priceFormatted =
              currency === "IDR"
                ? `Rp ${exp.priceIdr.toLocaleString("id-ID")}`
                : `${CURRENCY_RATES[currency].symbol}${Math.round(
                    exp.priceIdr * CURRENCY_RATES[currency].multiplier
                  )}`;

            const approxText =
              currency === "IDR"
                ? exp.approxText
                : `(IDR ${exp.priceIdr / 1000}k)`;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`flex flex-col bg-surface-card rounded-lg overflow-hidden transition-all duration-300 ${
                  isPrivate
                    ? "border-2 border-primary shadow-md hover:shadow-xl relative"
                    : "border border-outline-light hover:border-primary/40 shadow-xs hover:shadow-md"
                }`}
              >
                {/* Popular Pill */}
                {isPrivate && (
                  <div className="bg-primary text-white text-[11px] font-medium tracking-wider text-center py-1.5 flex items-center justify-center gap-1.5">
                    <span>{dict.experiences.popularBadge}</span>
                  </div>
                )}

                {/* Card Image */}
                <div className="relative w-full h-48 overflow-hidden bg-sand">
                  <Image
                    src={exp.image}
                    alt={exp.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 text-[10px] uppercase font-semibold tracking-wider px-2.5 py-1 rounded bg-white/90 text-primary backdrop-blur-xs">
                    {exp.badge}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-grow justify-between space-y-5">
                  <div className="space-y-3.5">
                    <div>
                      <h3 className="font-serif text-xl text-primary font-medium">
                        {exp.name}
                      </h3>
                      {exp.promoNote && (
                        <span className="text-xs text-secondary font-medium block mt-0.5">
                          {exp.promoNote}
                        </span>
                      )}
                    </div>

                    {/* Meta info */}
                    <div className="space-y-1.5 text-xs text-on-surface-variant border-y border-outline-light py-2.5">
                      <div className="flex items-center gap-2">
                        {exp.id === "group-lesson" && <Users className="w-3.5 h-3.5 text-secondary shrink-0" />}
                        {exp.id === "private-lesson" && <User className="w-3.5 h-3.5 text-secondary shrink-0" />}
                        {exp.id === "intermediate-coaching" && <Compass className="w-3.5 h-3.5 text-secondary shrink-0" />}
                        {exp.id === "board-rental" && <Waves className="w-3.5 h-3.5 text-secondary shrink-0" />}
                        <span className="font-medium text-on-surface">{exp.coachRatio}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-secondary shrink-0" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>

                    <p className="text-xs text-on-surface-variant leading-relaxed font-light">
                      {exp.description}
                    </p>

                    {/* What's Included */}
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[10px] uppercase tracking-wider text-on-surface-variant font-semibold block">
                        {dict.experiences.includedTitle}
                      </span>
                      {exp.inclusions.map((inc, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-xs text-on-surface">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className={inc.includes("FREE") || inc.includes("GRATIS") ? "font-semibold text-primary" : ""}>
                            {inc}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="pt-4 border-t border-outline-light space-y-3">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-on-surface-variant block font-medium">
                          {exp.id === "board-rental" ? dict.experiences.hourlyLabel : dict.experiences.rateLabel}
                        </span>
                        <div className="font-serif text-2xl font-semibold text-primary">
                          {priceFormatted}
                        </div>
                      </div>
                      <span className="text-[11px] text-on-surface-variant font-light">
                        {approxText}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => openBookingModal(exp.id)}
                      className={`w-full inline-flex items-center justify-center gap-1.5 py-3 rounded text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer ${
                        isPrivate
                          ? "bg-amber-400 text-primary-dark hover:bg-amber-300 shadow-sm"
                          : "bg-primary text-white hover:bg-primary-dark"
                      }`}
                    >
                      <span>{dict.experiences.bookBtn}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
