import { Star, MapPin } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/data";

export default function TrustBar() {
  return (
    <section className="w-full bg-surface-low border-b border-outline-light py-5">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 flex flex-wrap items-center justify-center md:justify-between gap-6 text-sm">
        {/* Google Reviews */}
        <div className="flex items-center gap-3">
          <div className="flex items-center text-amber-500 gap-1">
            <span className="font-serif font-semibold text-primary text-base mr-1">
              {BUSINESS_INFO.rating}
            </span>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-amber-500 text-amber-500"
              />
            ))}
          </div>
          <span className="text-on-surface-variant text-xs md:text-sm font-medium">
            {BUSINESS_INFO.reviewsCount} Google Reviews
          </span>
        </div>

        {/* Divider */}
        <div className="hidden sm:inline-block w-px h-4 bg-outline-light" />

        {/* Location */}
        <div className="flex items-center gap-2 text-on-surface-variant text-xs md:text-sm">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="font-medium">{BUSINESS_INFO.locationName}</span>
        </div>

        {/* Divider */}
        <div className="hidden md:inline-block w-px h-4 bg-outline-light" />

        {/* Traveler Trust Quote */}
        <div className="text-on-surface-variant text-xs md:text-sm font-light tracking-wide italic">
          &ldquo;Trusted by travelers visiting Bali.&rdquo;
        </div>
      </div>
    </section>
  );
}
