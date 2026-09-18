import React, { createContext, useContext, useState, useEffect } from "react";
import { 
  Language, 
  UI_TRANSLATED, 
  ALLOYS_TRANSLATED, 
  PRODUCTS_TRANSLATED, 
  TIMELINE_TRANSLATED, 
  CERTIFICATIONS_TRANSLATED,
  AlloySpecTrans,
  ProductCatalogItemTrans,
  TimelineStepTrans,
  CertificationTrans
} from "../locales/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  alloys: AlloySpecTrans[];
  products: ProductCatalogItemTrans[];
  timeline: TimelineStepTrans[];
  certifications: CertificationTrans[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("app_lang") as Language;
      if (saved === "fr" || saved === "en" || saved === "ar") {
        return saved;
      }
    }
    return "fr";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("app_lang", lang);
    }
  };

  // Synchronize document direction with active language
  useEffect(() => {
    if (typeof window !== "undefined") {
      const dir = language === "ar" ? "rtl" : "ltr";
      document.documentElement.setAttribute("dir", dir);
      document.documentElement.setAttribute("lang", language);
    }
  }, [language]);

  // Translate helper with fallback
  const t = (key: string): string => {
    return UI_TRANSLATED[language]?.[key] || UI_TRANSLATED["fr"]?.[key] || key;
  };

  const alloys = ALLOYS_TRANSLATED[language];
  const products = PRODUCTS_TRANSLATED[language];
  const timeline = TIMELINE_TRANSLATED[language];
  const certifications = CERTIFICATIONS_TRANSLATED[language];

  return (
    <LanguageContext.Provider 
      value={{ 
        language, 
        setLanguage, 
        t, 
        alloys, 
        products, 
        timeline, 
        certifications 
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
