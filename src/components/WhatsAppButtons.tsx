"use client";

import { MessageCircle } from "lucide-react";
import { BUSINESS_INFO, getWhatsAppLink } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

export default function WhatsAppButtons() {
  const { language } = useLanguage();

  const defaultMsg =
    language === "id"
      ? "Halo Malu Surf Bali, saya mau booking sesi surfing di Pantai Legian!"
      : "Hi Malu Surf Bali, I'd like to book a surf session at Legian Beach!";

  return (
    <>
      {/* MOBILE COMPACT FLOATING WHATSAPP BUTTON */}
      <div className="fixed bottom-4 right-4 z-40 sm:hidden">
        <a
          href={getWhatsAppLink(defaultMsg)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-primary-dark/95 text-white px-3.5 py-2 rounded-full shadow-lg border border-white/20 transition-colors"
          aria-label="Book on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
          <span className="text-[11px] font-semibold tracking-wider uppercase font-inter">
            WhatsApp
          </span>
        </a>
      </div>

      {/* DESKTOP COMPACT FLOATING WHATSAPP PILL */}
      <aside className="fixed bottom-5 right-5 z-40 hidden sm:block">
        <a
          href={getWhatsAppLink(defaultMsg)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 bg-primary-dark/95 text-white px-3.5 py-2 rounded-full border border-white/15 shadow-md hover:bg-primary transition-colors group"
          aria-label="Chat with Malu Surf on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
          <span className="text-[11px] font-semibold tracking-wider uppercase font-inter text-white/95">
            WhatsApp
          </span>
          <span className="text-[11px] text-white/60 font-light border-l border-white/20 pl-2">
            {BUSINESS_INFO.whatsappNumber}
          </span>
        </a>
      </aside>
    </>
  );
}

