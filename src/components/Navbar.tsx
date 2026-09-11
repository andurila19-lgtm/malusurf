"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MessageCircle, Menu, X, Globe } from "lucide-react";
import { BUSINESS_INFO, getWhatsAppLink } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";
import { useBookingModal } from "@/context/BookingModalContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, dict } = useLanguage();
  const { openBookingModal } = useBookingModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: dict.nav.experiences, href: "#experiences" },
    { name: dict.nav.about, href: "#about" },
    { name: dict.nav.reviews, href: "#reviews" },
    { name: dict.nav.gallery, href: "#gallery" },
    { name: dict.nav.location, href: "#location" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary-dark/95 backdrop-blur-md border-b border-white/10 py-2.5 shadow-md"
          : "bg-primary-dark/85 backdrop-blur-sm border-b border-white/10 py-4"
      }`}
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden bg-white shadow-sm border border-white/20 shrink-0">
            <Image
              src="/images/logo.png"
              alt="Malu Surf Bali Official Logo"
              fill
              priority
              sizes="44px"
              className="object-contain p-1"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-base sm:text-lg md:text-xl tracking-[0.2em] text-white uppercase font-medium leading-none transition-opacity group-hover:opacity-90">
              MALU SURF
            </span>
            <span className="text-[9px] uppercase tracking-[0.28em] text-amber-300 font-semibold mt-1">
              LEGIAN · BALI
            </span>
          </div>
        </a>

        {/* Desktop Minimal Navigation */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-inter text-xs uppercase tracking-[0.14em] text-white/80 hover:text-white transition-colors duration-150"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Controls: Language Switcher & WhatsApp CTA */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Language Toggle */}
          <div className="flex items-center rounded-full bg-white/10 p-0.5 border border-white/20 text-xs font-medium backdrop-blur-xs">
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`px-3 py-1 rounded-full transition-all text-[11px] font-bold tracking-wider ${
                language === "en"
                  ? "bg-amber-400 text-primary-dark shadow-sm"
                  : "text-white/75 hover:text-white"
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage("id")}
              className={`px-3 py-1 rounded-full transition-all text-[11px] font-bold tracking-wider ${
                language === "id"
                  ? "bg-amber-400 text-primary-dark shadow-sm"
                  : "text-white/75 hover:text-white"
              }`}
              aria-label="Switch to Bahasa Indonesia"
            >
              ID
            </button>
          </div>

          <button
            type="button"
            onClick={() => openBookingModal("private-lesson")}
            className="inline-flex items-center justify-center bg-amber-400 hover:bg-amber-300 text-primary-dark text-xs uppercase font-bold tracking-[0.14em] px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm cursor-pointer"
          >
            {dict.nav.bookNow}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2.5 sm:hidden">
          {/* Mobile Language Switcher */}
          <div className="flex items-center rounded-full bg-white/10 p-0.5 border border-white/20 text-[10px] font-semibold">
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`px-2 py-0.5 rounded-full ${
                language === "en" ? "bg-amber-400 text-primary-dark" : "text-white/70"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage("id")}
              className={`px-2 py-0.5 rounded-full ${
                language === "id" ? "bg-amber-400 text-primary-dark" : "text-white/70"
              }`}
            >
              ID
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-white/90 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-primary-dark border-b border-white/10 px-6 py-6 transition-all animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-inter text-sm uppercase tracking-[0.16em] text-white/90 hover:text-white py-1"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <a
                href={getWhatsAppLink(
                  language === "id"
                    ? "Halo Malu Surf Bali, saya mau booking sesi surfing."
                    : "Hi Malu Surf Bali, I'd like to book a surf session."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs tracking-wider text-emerald-300"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{BUSINESS_INFO.whatsappNumber}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
