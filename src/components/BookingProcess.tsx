"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { BOOKING_STEPS, BUSINESS_INFO, getWhatsAppLink } from "@/lib/data";

export default function BookingProcess() {
  return (
    <section className="w-full py-24 bg-surface-low border-y border-outline-light">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold block">
            Simple Steps
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-primary tracking-tight font-medium">
            Ready to Ride?
          </h2>
        </div>

        {/* 3 Horizontal Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {BOOKING_STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="p-8 bg-surface-card rounded border border-outline-light space-y-4 relative shadow-xs hover:border-primary/40 transition-colors"
            >
              <div className="text-xs font-serif italic text-secondary tracking-widest uppercase font-semibold">
                {step.number}
              </div>
              <h3 className="font-serif text-xl text-primary font-medium">
                {step.title}
              </h3>
              <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed font-light">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* WhatsApp Action Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="bg-primary text-white rounded p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md"
        >
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-[11px] uppercase tracking-[0.2em] text-emerald-400 font-semibold block">
              Instant Inquiries
            </span>
            <h4 className="font-serif text-xl md:text-2xl font-medium">
              Book via WhatsApp: {BUSINESS_INFO.whatsappNumber}
            </h4>
            <p className="text-xs text-white/75 font-light">
              Direct response from our beach team. Pay on arrival.
            </p>
          </div>

          <a
            href={getWhatsAppLink("Hi Malu Surf Bali, I'd like to book a session.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-white text-primary rounded text-xs uppercase font-semibold tracking-[0.16em] hover:bg-sand transition-all shadow-md shrink-0 group"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>Book via WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
