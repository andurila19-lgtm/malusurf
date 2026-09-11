"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, DICTIONARY } from "@/lib/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  dict: typeof DICTIONARY.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("malu_surf_lang") as Language;
    if (saved === "en" || saved === "id") {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("malu_surf_lang", lang);
    }
  };

  const dict = DICTIONARY[language] || DICTIONARY.en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dict }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    // Fallback if rendered outside provider
    return {
      language: "en" as Language,
      setLanguage: () => {},
      dict: DICTIONARY.en,
    };
  }
  return context;
}
