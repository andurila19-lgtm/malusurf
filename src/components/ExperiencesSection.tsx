"use client";

import { useState } from "react";
import Image from "next/image";
import { Users, User, Clock, Waves, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  EXPERIENCES,
  CURRENCY_RATES,
  CurrencyKey,
  getWhatsAppLink,
} from "@/lib/data";

export default function ExperiencesSection() {
  const [currency, setCurrency] = useState<CurrencyKey>("IDR");

  const currencies: CurrencyKey[] = ["IDR", "AUD", "USD", "EUR"];

  return (
    <section className="w-full py-24 bg-surface scroll-mt-20" id="experiences">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Header & Currency Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold block">
              Curated Sessions
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-primary tracking-tight font-medium">
              Choose Your Surf Experience
            </h2>
          </div>

          {/* Currency Switcher */}
          <div className="flex items-center gap-2 p-1 rounded bg-surface-low border border-outline-light self-start md:self-auto shadow-sm">
            <span className="font-inter text-[11px] uppercase tracking-wider text-on-surface-variant px-2 font-medium">
              Currency:
            </span>
            <div className="inline-flex rounded p-0.5 gap-0.5" id="currency-switcher">
              {currencies.map((curr) => (
                <button
                  key={curr}
                  type="button"
                  onClick={() => setCurrency(curr)}
                  className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
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
        </div>

        {/* 3 Experience Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {EXPERIENCES.map((exp, idx) => {
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
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`flex flex-col bg-surface-card rounded overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  isPrivate
                    ? "border-2 border-primary/20 hover:border-primary shadow-sm"
                    : "border border-outline-light hover:border-primary/40 shadow-sm"
                }`}
              >
                {/* Image Header */}
                <div className="relative w-full h-72 overflow-hidden bg-sand">
                  <Image
                    src={exp.image}
                    alt={exp.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div
                    className={`absolute top-4 left-4 text-[10px] uppercase font-medium tracking-[0.16em] px-3 py-1 rounded shadow-sm ${
                      isPrivate
                        ? "bg-secondary text-white"
                        : "bg-primary/90 text-white"
                    }`}
                  >
                    {exp.badge}
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-8 flex flex-col flex-grow justify-between space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-serif text-2xl text-primary font-medium">
                      {exp.name}
                    </h3>

                    {/* Meta details */}
                    <div className="space-y-2 text-sm text-on-surface-variant border-y border-outline-light py-4">
                      <div className="flex items-center gap-2.5">
                        {exp.id === "group-lesson" && (
                          <Users className="w-4 h-4 text-secondary flex-shrink-0" />
                        )}
                        {exp.id === "private-lesson" && (
                          <User className="w-4 h-4 text-secondary flex-shrink-0" />
                        )}
                        {exp.id === "board-rental" && (
                          <Waves className="w-4 h-4 text-secondary flex-shrink-0" />
                        )}
                        <span className="font-medium text-on-surface">
                          {exp.coachRatio}
                        </span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Clock className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>

                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      {exp.description}
                    </p>
                  </div>

                  {/* Price & Booking Trigger */}
                  <div className="pt-4 border-t border-outline-light flex items-center justify-between">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-on-surface-variant block font-inter font-medium">
                        {exp.id === "board-rental" ? "Hourly Rate" : "Total Rate"}
                      </span>
                      <div className="font-serif text-2xl font-semibold text-primary">
                        {priceFormatted}
                      </div>
                      <span className="text-xs text-on-surface-variant font-light">
                        {approxText}
                      </span>
                    </div>

                    <a
                      href={getWhatsAppLink(exp.waMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded text-xs uppercase tracking-[0.16em] font-semibold transition-all duration-200 ${
                        isPrivate
                          ? "bg-secondary text-white hover:bg-secondary-gold shadow-sm"
                          : "bg-primary text-white hover:bg-primary-dark"
                      }`}
                    >
                      <span>Book Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
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
