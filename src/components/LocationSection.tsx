"use client";

import { MapPin, ArrowUpRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { BUSINESS_INFO, getWhatsAppLink } from "@/lib/data";

export default function LocationSection() {
  return (
    <section className="w-full py-24 bg-surface scroll-mt-20" id="location">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold block">
                Find Malu Surf
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-primary tracking-tight font-medium">
                Kuta Beach, Bali
              </h2>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Located right on the white sand along Jalan Pantai Kuta,
                conveniently accessible for morning high-tide sessions and
                sunset surfs.
              </p>
            </div>

            {/* Address Box */}
            <div className="p-6 bg-surface-low rounded border border-outline-light space-y-3 shadow-xs">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-primary">
                    Beach Address
                  </h4>
                  <p className="text-sm text-on-surface mt-1 leading-relaxed">
                    {BUSINESS_INFO.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-white rounded text-xs uppercase tracking-[0.16em] font-semibold hover:bg-primary-dark transition-all shadow-sm group"
              >
                <span>Get Directions</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href={getWhatsAppLink(
                  "Hi Malu Surf, can you send me your exact pin drop location on Kuta Beach?"
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-surface-card border border-outline-light text-primary rounded text-xs uppercase tracking-[0.16em] font-semibold hover:bg-surface-low transition-all shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Book via WhatsApp</span>
              </a>
            </div>
          </motion.div>

          {/* Right Visual Map Area */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="relative w-full h-[420px] rounded overflow-hidden border border-outline-light bg-sand shadow-sm group">
              {/* Google Maps Embed for Kuta Beach */}
              <iframe
                title="Malu Surf Bali Beach Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15777.306016629705!2d115.1610!3d-8.7185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd246bc56041697%3A0xb3661eb1f687440!2sKuta%20Beach!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "contrast(1.02) saturate(0.95)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Floating Beach Stand Badge */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded bg-white/95 backdrop-blur-md border border-outline-light flex items-center justify-between shadow-md">
                <div>
                  <div className="font-serif text-sm font-semibold text-primary">
                    Malu Surf Bali — Beach Stand
                  </div>
                  <div className="text-xs text-on-surface-variant">
                    Jl. Pantai Kuta · Direct Ocean Access
                  </div>
                </div>
                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold uppercase tracking-wider text-secondary hover:underline flex items-center gap-1 shrink-0"
                >
                  <span>Open Map</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
