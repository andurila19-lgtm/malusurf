"use client";

import Image from "next/image";
import { ArrowUpRight, MessageCircle, MapPin } from "lucide-react";
import { BUSINESS_INFO, getWhatsAppLink } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  const { dict, language } = useLanguage();

  return (
    <footer className="w-full bg-primary-dark text-white border-t border-white/10">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand / Identity */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white shadow-sm border border-white/20 shrink-0">
                <Image
                  src="/images/logo.webp"
                  alt="Malu Surf Bali Logo"
                  fill
                  sizes="48px"
                  className="object-contain p-1"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg tracking-[0.22em] text-white uppercase font-medium leading-none">
                  {BUSINESS_INFO.name}
                </span>
                <span className="text-[10px] uppercase tracking-[0.28em] text-amber-300 font-semibold mt-1">
                  LEGIAN · BALI
                </span>
              </div>
            </div>

            <p className="text-xs text-white/80 max-w-sm leading-relaxed font-light italic">
              &ldquo;{BUSINESS_INFO.motto}&rdquo;
            </p>
            <p className="text-xs text-white/60 max-w-sm leading-relaxed">
              {dict.footer.desc}
            </p>
            <div className="text-xs text-white/70 flex items-center gap-1.5 pt-1">
              <MapPin className="w-3.5 h-3.5 text-secondary" />
              <span>Legian Beach · Kuta · Bali, Indonesia</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-[0.18em] text-white/50 block font-medium">
              {dict.footer.quickLinks}
            </span>
            <nav className="flex flex-col space-y-2 text-xs text-white/80">
              <a href="#experiences" className="hover:text-white transition-colors">
                {dict.nav.experiences}
              </a>
              <a href="#about" className="hover:text-white transition-colors">
                {dict.nav.about}
              </a>
              <a href="#reviews" className="hover:text-white transition-colors">
                {dict.nav.reviews}
              </a>
              <a href="#gallery" className="hover:text-white transition-colors">
                {dict.nav.gallery}
              </a>
              <a href="#location" className="hover:text-white transition-colors">
                {dict.nav.location}
              </a>
            </nav>
          </div>

          {/* Contact & Location */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs uppercase tracking-[0.18em] text-white/50 block font-medium">
              {dict.footer.contact}
            </span>
            <div className="space-y-3 text-xs text-white/80">
              <p className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>WhatsApp: </span>
                <a
                  href={getWhatsAppLink(
                    language === "id"
                      ? "Halo Malu Surf Bali, saya ingin bertanya tentang pelajaran surfing."
                      : "Hi Malu Surf Bali, I'd like to ask about surf lessons."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-medium hover:underline underline-offset-4"
                >
                  {BUSINESS_INFO.whatsappNumber}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <InstagramIcon className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                <span>Instagram: </span>
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-medium hover:underline underline-offset-4 inline-flex items-center gap-1"
                >
                  <span>{BUSINESS_INFO.instagramHandle}</span>
                  <ArrowUpRight className="w-3 h-3 text-white/60" />
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-secondary shrink-0" />
                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white inline-flex items-center gap-1 transition-colors"
                >
                  <span>Google Maps Directions</span>
                  <ArrowUpRight className="w-3 h-3 text-white/60" />
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/50">
          <div>© {new Date().getFullYear()} MALU SURF BALI. {dict.footer.allRights}</div>
          <div className="flex items-center gap-6">
            <span>Legian &amp; Kuta Beach, Bali</span>
            <span>{dict.footer.freePhotosBadge}</span>
            <span>{dict.footer.safetyFirst}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

