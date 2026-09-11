"use client";

import { useState, useEffect } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import { BUSINESS_INFO, getWhatsAppLink } from "@/lib/data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Experiences", href: "#experiences" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Location", href: "#location" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary-dark/95 backdrop-blur-md border-b border-white/10 py-3 shadow-md"
          : "bg-primary-dark/80 backdrop-blur-sm border-b border-white/10 py-5"
      }`}
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 flex items-center justify-between">
        {/* Brand Name */}
        <a href="#" className="flex items-center group">
          <span className="font-serif text-lg sm:text-xl md:text-2xl tracking-[0.22em] text-white uppercase font-medium transition-opacity group-hover:opacity-90">
            MALU SURF BALI
          </span>
        </a>

        {/* Desktop Minimal Navigation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-inter text-xs uppercase tracking-[0.16em] text-white/80 hover:text-white transition-colors duration-150"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTAs */}
        <div className="hidden sm:flex items-center gap-5">
          <a
            href={getWhatsAppLink("Hi Malu Surf Bali, I'd like to check availability for surf lessons.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 text-xs tracking-wider text-white/80 hover:text-white transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span className="font-medium">{BUSINESS_INFO.whatsappNumber}</span>
          </a>
          <a
            href="#experiences"
            className="inline-flex items-center justify-center bg-white text-primary text-xs uppercase font-semibold tracking-[0.18em] px-5 py-2.5 rounded hover:bg-sand transition-all duration-200 shadow-sm"
          >
            BOOK NOW
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex items-center gap-3 sm:hidden">
          <a
            href="#experiences"
            className="inline-flex items-center justify-center bg-white text-primary text-[11px] uppercase font-semibold tracking-[0.14em] px-3.5 py-1.5 rounded"
          >
            BOOK
          </a>
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
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-inter text-sm uppercase tracking-[0.18em] text-white/90 hover:text-white py-1"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <a
                href={getWhatsAppLink("Hi Malu Surf Bali, I'd like to book a surf session.")}
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
