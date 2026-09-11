import { ArrowUpRight } from "lucide-react";
import { BUSINESS_INFO, getWhatsAppLink } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="w-full bg-primary-dark text-white border-t border-white/10">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand / Identity */}
          <div className="lg:col-span-5 space-y-4">
            <span className="font-serif text-xl tracking-[0.22em] text-white uppercase font-medium block">
              {BUSINESS_INFO.name}
            </span>
            <p className="text-xs text-white/70 max-w-sm leading-relaxed font-light">
              Surf lessons and board rentals at Kuta Beach, Bali, Indonesia. Warm
              ocean coaches, forgiving waves, and personal guidance.
            </p>
            <div className="text-xs text-white/60">
              Kuta Beach, Bali, Indonesia
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-[0.18em] text-white/50 block font-medium">
              Quick Links
            </span>
            <nav className="flex flex-col space-y-2 text-xs text-white/80">
              <a href="#experiences" className="hover:text-white transition-colors">
                Experiences
              </a>
              <a href="#about" className="hover:text-white transition-colors">
                About
              </a>
              <a href="#gallery" className="hover:text-white transition-colors">
                Gallery
              </a>
              <a href="#location" className="hover:text-white transition-colors">
                Location
              </a>
            </nav>
          </div>

          {/* Contact & Location */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs uppercase tracking-[0.18em] text-white/50 block font-medium">
              Contact &amp; Location
            </span>
            <div className="space-y-2.5 text-xs text-white/80">
              <p>
                WhatsApp:{" "}
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-medium hover:underline underline-offset-4"
                >
                  {BUSINESS_INFO.whatsappNumber}
                </a>
              </p>
              <p>
                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white inline-flex items-center gap-1 transition-colors"
                >
                  <span>Google Maps Location</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </p>
              <p>
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white inline-flex items-center gap-1 transition-colors"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/50">
          <div>© {new Date().getFullYear()} MALU SURF BALI. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <span>Kuta Beach, Bali</span>
            <span>Safety First</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
