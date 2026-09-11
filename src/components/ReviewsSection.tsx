"use client";

import { Star, Quote, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { BUSINESS_INFO, getWhatsAppLink } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

export default function ReviewsSection() {
  const { language, dict } = useLanguage();

  return (
    <section className="w-full py-24 bg-surface scroll-mt-20" id="reviews">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold block">
              {dict.reviews.tag}
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-primary tracking-tight font-normal">
              {dict.reviews.title}
            </h2>
            <p className="text-sm text-on-surface-variant max-w-xl">
              {dict.reviews.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-low border border-outline-light self-start md:self-auto shadow-xs">
            <div className="flex items-center text-amber-500 gap-1">
              <span className="font-serif font-bold text-primary text-lg">
                {BUSINESS_INFO.rating}
              </span>
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
              ))}
            </div>
            <span className="text-xs text-on-surface-variant font-medium">
              ({dict.reviews.verifiedCount})
            </span>
          </div>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dict.reviews.items.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="flex flex-col justify-between p-8 bg-surface-card rounded-lg border border-outline-light shadow-xs hover:border-primary/40 hover:shadow-md transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-500 gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-secondary/30" />
                </div>

                <p className="text-sm text-on-surface-variant leading-relaxed italic">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-outline-light flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-medium text-base text-primary">
                    {review.name}
                  </h4>
                  <span className="text-xs text-on-surface-variant">
                    {review.origin} · {review.date}
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {dict.reviews.verifiedSurfer}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* WhatsApp Review Invitation Strip */}
        <div className="mt-12 p-6 rounded-lg bg-surface-low border border-outline-light flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-serif text-lg font-medium text-primary">
              {dict.reviews.bannerTitle}
            </h4>
            <p className="text-xs text-on-surface-variant mt-0.5">
              {dict.reviews.bannerSub}
            </p>
          </div>
          <a
            href={getWhatsAppLink(
              language === "id"
                ? "Halo Malu Surf Bali, saya mau tanya kondisi ombak dan jadwal pasang surut hari ini!"
                : "Hi Malu Surf Bali, I have a quick question about wave conditions before booking!"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-amber-400 text-primary-dark rounded text-xs uppercase tracking-wider font-semibold hover:bg-amber-300 transition-all shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-primary-dark" />
            <span>{dict.reviews.bannerBtn}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
