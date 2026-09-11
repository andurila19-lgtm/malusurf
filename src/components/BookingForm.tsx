"use client";

import { useState } from "react";
import { Sparkles, Check, MessageCircle, ChevronDown, Camera, Users, DollarSign } from "lucide-react";
import { BUSINESS_INFO, CURRENCY_RATES, CurrencyKey, getWhatsAppLink } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

interface BookingFormProps {
  initialPackage?: string;
  onSuccess?: () => void;
  className?: string;
  isModal?: boolean;
}

export default function BookingForm({
  initialPackage = "private-lesson",
  onSuccess,
  className = "",
  isModal = false,
}: BookingFormProps) {
  const { language, dict } = useLanguage();
  const formDict = dict.booking.form;

  const [currency, setCurrency] = useState<CurrencyKey>("IDR");
  const [fullName, setFullName] = useState("");
  const [selectedPackage, setSelectedPackage] = useState(initialPackage);
  const [surfersCount, setSurfersCount] = useState(selectedPackage === "group-lesson" ? 2 : 1);
  const [skillLevel, setSkillLevel] = useState("first-timer");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("morning");
  const [notes, setNotes] = useState("");

  const currencies: CurrencyKey[] = ["IDR", "AUD", "USD", "EUR"];

  const currentPkg = formDict.packages.find((p) => p.id === selectedPackage) || formDict.packages[1];

  const handlePackageChange = (pkgId: string) => {
    setSelectedPackage(pkgId);
    if (pkgId === "group-lesson" && surfersCount < 2) {
      setSurfersCount(2);
    }
  };

  const handleSurfersChange = (delta: number) => {
    const minCount = selectedPackage === "group-lesson" ? 2 : 1;
    const newCount = Math.max(minCount, Math.min(20, surfersCount + delta));
    setSurfersCount(newCount);
  };

  // Price calculations
  const unitPriceIdr = currentPkg.price;
  const totalPriceIdr = unitPriceIdr * surfersCount;

  // Format price helper according to selected currency
  const formatPrice = (amountIdr: number, isShort = false) => {
    if (currency === "IDR") {
      return isShort ? `${amountIdr / 1000}k` : `Rp ${amountIdr.toLocaleString("id-ID")}`;
    }
    const converted = Math.round(amountIdr * CURRENCY_RATES[currency].multiplier);
    return `${CURRENCY_RATES[currency].symbol}${converted}`;
  };

  const formatApprox = (amountIdr: number) => {
    if (currency === "IDR") {
      const aud = Math.round(amountIdr * 0.0001);
      const usd = Math.round(amountIdr * 0.000064);
      return `(~AUD $${aud} / ~$${usd} USD)`;
    }
    return `(~Rp ${(amountIdr / 1000).toLocaleString("id-ID")}k IDR)`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedPkgName = currentPkg.name;
    const selectedSkill = formDict.skillLevels.find((s) => s.id === skillLevel)?.label || skillLevel;
    const selectedTime = formDict.timeSlots.find((t) => t.id === timeSlot)?.label || timeSlot;

    const formattedDate = date || (language === "id" ? "Hari ini / Besok (Fleksibel)" : "Today / Tomorrow (Flexible)");
    const leadName = fullName.trim() || (language === "id" ? "Tamu Malu Surf" : "Guest");

    let message = "";
    if (language === "id") {
      message = `🏄 *PERMINTAAN BOOKING - MALU SURF BALI*
━━━━━━━━━━━━━━━━━━━━
👤 *Nama*: ${leadName}
📦 *Paket*: ${selectedPkgName}
👥 *Jumlah Peserta*: ${surfersCount} Orang
📅 *Tanggal*: ${formattedDate}
⏰ *Pilihan Waktu*: ${selectedTime}
🌊 *Level*: ${selectedSkill}
${notes.trim() ? `📝 *Catatan*: ${notes.trim()}\n` : ""}💰 *Estimasi Biaya*: Rp ${totalPriceIdr.toLocaleString("id-ID")} ${currency !== "IDR" ? `(${formatPrice(totalPriceIdr)})` : ""} (Termasuk Foto & Video)
━━━━━━━━━━━━━━━━━━━━
Halo Malu Surf Bali, apakah slot ini tersedia?`;
    } else {
      message = `🏄 *SURF BOOKING REQUEST - MALU SURF BALI*
━━━━━━━━━━━━━━━━━━━━
👤 *Name*: ${leadName}
📦 *Package*: ${selectedPkgName}
👥 *Guests*: ${surfersCount} person(s)
📅 *Date*: ${formattedDate}
⏰ *Time*: ${selectedTime}
🌊 *Skill*: ${selectedSkill}
${notes.trim() ? `📝 *Notes*: ${notes.trim()}\n` : ""}💰 *Estimated Total*: Rp ${totalPriceIdr.toLocaleString("id-ID")} (${formatPrice(totalPriceIdr)}) (Free Photos Included)
━━━━━━━━━━━━━━━━━━━━
Hi Malu Surf Bali, is this session available?`;
    }

    const waLink = getWhatsAppLink(message);
    window.open(waLink, "_blank");

    if (onSuccess) {
      onSuccess();
    }
  };

  // Compact package labels
  const getPackageShortName = (pkgId: string) => {
    switch (pkgId) {
      case "group-lesson":
        return language === "id" ? "Group Promo" : "Group Promo";
      case "private-lesson":
        return language === "id" ? "Private 1-on-1" : "Private 1-on-1";
      case "intermediate-coaching":
        return language === "id" ? "Intermediate" : "Intermediate";
      case "board-rental":
        return language === "id" ? "Sewa Papan" : "Board Rental";
      default:
        return "Surf Session";
    }
  };

  const getPackageSubtext = (pkgId: string) => {
    switch (pkgId) {
      case "group-lesson":
        return language === "id" ? "Min. 2 org" : "Min. 2 pax";
      case "private-lesson":
        return language === "id" ? "1 Coach : 1 Org" : "1-on-1 Coach";
      case "intermediate-coaching":
        return language === "id" ? "Ombak Hijau" : "Green Waves";
      case "board-rental":
        return language === "id" ? "Per Jam" : "Hourly";
      default:
        return "";
    }
  };

  return (
    <div
      className={`bg-surface-card rounded-2xl border border-outline-light shadow-xl p-4 sm:p-6 md:p-8 flex flex-col justify-between ${className}`}
    >
      {/* Top Header: Title + Currency Switcher in 1 Single Line */}
      <div className="flex items-center justify-between gap-2 border-b border-outline-light pb-2.5 mb-3 sm:mb-4">
        <div className="flex items-center gap-1.5 min-w-0">
          <span className="w-2 h-2 rounded-full bg-secondary shrink-0" />
          <h3 className="font-serif text-xs sm:text-base font-medium text-primary leading-none truncate">
            {formDict.title}
          </h3>
        </div>

        {/* Currency Switcher Pill */}
        <div className="flex items-center gap-0.5 sm:gap-1 bg-surface-low p-0.5 sm:p-1 rounded-full border border-outline-light shrink-0">
          {currencies.map((curr) => (
            <button
              key={curr}
              type="button"
              onClick={() => setCurrency(curr)}
              className={`px-1.5 sm:px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold transition-all ${
                currency === curr
                  ? "bg-primary text-white shadow-xs"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {curr}
            </button>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
        {/* ROW 1: Name (Left) + Guests Stepper (Right) */}
        <div className="grid grid-cols-12 gap-2 sm:gap-3 items-end">
          <div className="col-span-7 sm:col-span-8">
            <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-primary mb-1">
              {formDict.fullNameLabel} <span className="text-secondary">*</span>
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder={formDict.fullNamePlaceholder}
              required
              className="w-full px-3 py-2 bg-surface-low border border-outline-light rounded-lg text-xs sm:text-sm text-primary placeholder:text-on-surface-variant/50 focus:outline-none focus:border-secondary transition-colors"
            />
          </div>

          <div className="col-span-5 sm:col-span-4">
            <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-primary mb-1 text-right sm:text-left">
              {language === "id" ? "Peserta" : "Surfers"}
            </label>
            <div className="flex items-center justify-between bg-surface-low px-1.5 py-1 rounded-lg border border-outline-light h-[36px] sm:h-[40px]">
              <button
                type="button"
                onClick={() => handleSurfersChange(-1)}
                disabled={selectedPackage === "group-lesson" ? surfersCount <= 2 : surfersCount <= 1}
                className="w-6 h-6 sm:w-7 sm:h-7 rounded bg-surface-card border border-outline-light flex items-center justify-center text-primary font-bold text-xs hover:bg-sand transition-colors disabled:opacity-30 disabled:cursor-not-allowed shrink-0"
                aria-label="Decrease"
              >
                -
              </button>
              <span className="font-serif text-xs sm:text-sm font-bold text-primary px-1 text-center truncate">
                {surfersCount} <span className="text-[9px] font-sans font-normal text-on-surface-variant">{formDict.surfersUnit}</span>
              </span>
              <button
                type="button"
                onClick={() => handleSurfersChange(1)}
                className="w-6 h-6 sm:w-7 sm:h-7 rounded bg-surface-card border border-outline-light flex items-center justify-center text-primary font-bold text-xs hover:bg-sand transition-colors shrink-0"
                aria-label="Increase"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* ROW 2: 4 Package Cards (2x2 Grid with Clean Currency Prices) */}
        <div>
          <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-primary mb-1">
            {formDict.packageLabel} <span className="text-secondary">*</span>
          </label>
          <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
            {formDict.packages.map((pkg) => {
              const isSelected = selectedPackage === pkg.id;
              const formattedPkgPrice = formatPrice(pkg.price, true);
              const shortTitle = getPackageShortName(pkg.id);
              const subtext = getPackageSubtext(pkg.id);

              return (
                <button
                  key={pkg.id}
                  type="button"
                  onClick={() => handlePackageChange(pkg.id)}
                  className={`text-left p-2 sm:p-2.5 rounded-lg border transition-all flex flex-col justify-between ${
                    isSelected
                      ? "bg-primary text-white border-primary shadow-xs ring-1.5 ring-secondary/50"
                      : "bg-surface-low text-primary border-outline-light hover:border-outline hover:bg-surface-card"
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 w-full">
                    <span className="font-serif text-[11px] sm:text-xs font-medium truncate">
                      {shortTitle}
                    </span>
                    <span className={`text-[10px] sm:text-xs font-bold shrink-0 ${isSelected ? "text-amber-300" : "text-amber-600"}`}>
                      {formattedPkgPrice}
                    </span>
                  </div>
                  <span className={`text-[9px] sm:text-[10px] block mt-0.5 ${isSelected ? "text-white/80" : "text-on-surface-variant"}`}>
                    {subtext}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ROW 3: Date & Time in 2 Columns */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          <div>
            <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-primary mb-1">
              {formDict.dateLabel}
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-2.5 py-1.5 sm:py-2 bg-surface-low border border-outline-light rounded-lg text-xs text-primary focus:outline-none focus:border-secondary transition-colors"
            />
          </div>

          <div>
            <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-primary mb-1">
              {formDict.timeSlotLabel}
            </label>
            <div className="relative">
              <select
                value={timeSlot}
                onChange={(e) => setTimeSlot(e.target.value)}
                className="w-full px-2.5 py-1.5 sm:py-2 bg-surface-low border border-outline-light rounded-lg text-xs text-primary appearance-none focus:outline-none focus:border-secondary transition-colors cursor-pointer pr-6"
              >
                {formDict.timeSlots.map((ts) => (
                  <option key={ts.id} value={ts.id}>
                    {ts.label.split("(")[0].trim()}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-on-surface-variant absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* ROW 4: Skill Level (4 Horizontal Badges) */}
        <div>
          <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-primary mb-1">
            {formDict.skillLevelLabel}
          </label>
          <div className="grid grid-cols-4 gap-1 sm:gap-1.5">
            {[
              { id: "first-timer", short: language === "id" ? "Pemula" : "1st Time" },
              { id: "beginner", short: language === "id" ? "Pernah" : "Beginner" },
              { id: "intermediate", short: language === "id" ? "Menengah" : "Interm." },
              { id: "advanced", short: language === "id" ? "Mahir" : "Advanced" },
            ].map((lvl) => {
              const isSelected = skillLevel === lvl.id;
              return (
                <button
                  key={lvl.id}
                  type="button"
                  onClick={() => setSkillLevel(lvl.id)}
                  className={`py-1 sm:py-1.5 px-1 rounded-md text-[10px] sm:text-xs text-center font-medium transition-all ${
                    isSelected
                      ? "bg-secondary text-primary-dark font-bold shadow-xs ring-1 ring-secondary"
                      : "bg-surface-low text-on-surface-variant border border-outline-light hover:bg-surface-card"
                  }`}
                >
                  {lvl.short}
                </button>
              );
            })}
          </div>
        </div>

        {/* Optional Notes on larger displays */}
        {!isModal && (
          <div className="hidden sm:block pt-0.5">
            <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-primary mb-1">
              {formDict.notesLabel}
            </label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={formDict.notesPlaceholder}
              className="w-full px-3 py-1.5 bg-surface-low border border-outline-light rounded-lg text-xs text-primary placeholder:text-on-surface-variant/50 focus:outline-none focus:border-secondary transition-colors"
            />
          </div>
        )}

        {/* COMPACT BOTTOM ACTION BAR */}
        <div className="bg-primary-dark text-white rounded-xl p-2.5 sm:p-3.5 mt-2 flex items-center justify-between gap-2.5 shadow-md border border-white/10">
          <div className="shrink-0 leading-none">
            <span className="text-[9px] uppercase tracking-wider text-amber-300 block font-semibold mb-0.5">
              {formDict.estimatedTotal} ({surfersCount} {formDict.surfersUnit})
            </span>
            <div className="font-serif text-base sm:text-xl text-white font-bold leading-tight">
              {formatPrice(totalPriceIdr)}
            </div>
            <div className="text-[9px] text-white/60 mt-0.5">
              {formatApprox(totalPriceIdr)}
            </div>
          </div>

          <button
            type="submit"
            className="flex-1 max-w-[210px] inline-flex items-center justify-center gap-1.5 px-3 py-2.5 sm:py-3 bg-amber-400 hover:bg-amber-300 text-primary-dark rounded-lg font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-[0.98] cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-primary-dark shrink-0" />
            <span className="truncate">{language === "id" ? "Pesan via WA" : "Book via WA"}</span>
          </button>
        </div>
      </form>
    </div>
  );
}
