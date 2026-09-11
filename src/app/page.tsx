import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ExperiencesSection from "@/components/ExperiencesSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import BookingProcess from "@/components/BookingProcess";
import LocationSection from "@/components/LocationSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppButtons from "@/components/WhatsAppButtons";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full">
        {/* 1. Full-screen cinematic hero */}
        <Hero />

        {/* 2. Trust / review strip */}
        <TrustBar />

        {/* 3. Surf experiences */}
        <ExperiencesSection />

        {/* 4. Editorial "Your Bali Surf Experience Starts Here" section */}
        <AboutSection />

        {/* 5. Surf photography gallery */}
        <GallerySection />

        {/* 6. 3-step booking process */}
        <BookingProcess />

        {/* 7. Location section */}
        <LocationSection />

        {/* 8. Full-width final CTA */}
        <FinalCTA />
      </main>

      {/* 9. Premium footer */}
      <Footer />

      {/* 10. Sticky / Floating WhatsApp CTAs */}
      <WhatsAppButtons />
    </>
  );
}
