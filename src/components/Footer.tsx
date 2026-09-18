import { AppTab } from "../types";
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from "lucide-react";
import CompanyLogo from "./CompanyLogo";
import { useLanguage } from "../context/LanguageContext";

interface FooterProps {
  setActiveTab: (tab: AppTab) => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

export default function Footer({ setActiveTab, darkMode, setDarkMode }: FooterProps) {
  const { t, language } = useLanguage();

  return (
    <footer className="w-full bg-[#11161d] dark:bg-[#06090e] text-white border-t border-[#2a3543] py-16 px-6 md:px-16 mt-auto transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Company Bio */}
        <div className="md:col-span-5 flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <CompanyLogo size={56} className="shrink-0" />
            <span className="text-2xl font-extrabold tracking-tight uppercase font-hanken leading-tight">
              {language === "ar" ? "تعاونية إكرالوم" : "Cooperative IKRALUM"}
            </span>
          </div>
          
          <p className="text-sm text-[#8a929b] leading-relaxed max-w-sm font-sans">
            {t("footBio")}
          </p>

          <div className="flex flex-col gap-2 font-mono text-xs text-[#8a929b]">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#009df0]" />
              {language === "ar" ? "الدار البيضاء، المغرب" : "Casablanca, MAROC"}
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#009df0]" />
              +212 607546332 ({language === "ar" ? "المكتب التقني" : "Bureau Technique"})
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#009df0]" />
              ikralum1@gmail.com ({language === "ar" ? "طلب دراسة ودراسة دفاتر التحملات" : "Devis & Cahier des Charges"})
            </div>
          </div>

          {/* Social Media Section */}
          <div className="flex items-center gap-3">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#8a929b] hover:text-[#009df0] hover:border-[#009df0] transition-all p-2 bg-[#1c2430] hover:bg-[#232e3d] rounded-md border border-[#2a3543] flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              //href="https://instagram.com" 
              href="https://www.instagram.com/cooperativeartisanaleikralum?igsh=MWdjbWZjOGp1bWUzeQ=="
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#8a929b] hover:text-[#009df0] hover:border-[#009df0] transition-all p-2 bg-[#1c2430] hover:bg-[#232e3d] rounded-md border border-[#2a3543] flex items-center justify-center"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a 
              href="https://facebook.com" 
              target="https://web.facebook.com/cooperative.ikralum" 
              rel="noopener noreferrer" 
              className="text-[#8a929b] hover:text-[#009df0] hover:border-[#009df0] transition-all p-2 bg-[#1c2430] hover:bg-[#232e3d] rounded-md border border-[#2a3543] flex items-center justify-center"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Dynamic Navigation */}
        <div className="md:col-span-3 flex flex-col gap-4">
          <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#8a929b] border-b border-[#2a3543] pb-2">
            {t("footSectionTitle")}
          </h4>
          <ul className="flex flex-col gap-2 text-sm font-mono font-medium">
            <li>
              <button 
                onClick={() => setActiveTab(AppTab.HOME)} 
                className="text-[#8a929b] hover:text-[#009df0] transition-colors text-left py-1 cursor-pointer"
              >
                // {t("navHome")}
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab(AppTab.PRODUCTS_SPECS)} 
                className="text-[#8a929b] hover:text-[#009df0] transition-colors text-left py-1 cursor-pointer"
              >
                // {t("navCatalog")}
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab(AppTab.CONTACT_SUPPORT)} 
                className="text-[#8a929b] hover:text-[#009df0] transition-colors text-left py-1 cursor-pointer"
              >
                // {t("navContact")}
              </button>
            </li>
            <li>
              <button 
                onClick={() => setDarkMode(!darkMode)} 
                className="text-[#8a929b] hover:text-[#009df0] transition-colors text-left py-1 cursor-pointer flex items-center gap-1.5"
                title={language === "ar" ? "تغيير المظهر" : "Changer de thème"}
              >
                // {language === "ar" ? "تعديل المظهر" : "Thème"} : {darkMode ? (language === "ar" ? "الوضع الداكن 🌙" : "Mode Sombre 🌙") : (language === "ar" ? "الوضع الفاتح ☀️" : "Mode Clair ☀️")}
              </button>
            </li>
          </ul>
        </div>

        {/* Resources & Compliance Links */}
        <div className="md:col-span-4 flex flex-col gap-4">
          <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#8a929b] border-b border-[#2a3543] pb-2">
            {t("footCertTitle")}
          </h4>
          <p className="text-xs text-[#8a929b] leading-relaxed">
            {t("footCertDesc")}
          </p>

          <div className="flex flex-wrap gap-x-4 gap-y-2 pt-2">
            
            
          </div>
        </div>
      </div>

      {/* Under footer lines */}
      <div className="max-w-[1440px] mx-auto mt-16 pt-8 border-t border-[#2a3543] flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-mono text-[#8a929b]">
        <p>
          {language === "ar" ? (
            <span>{t("footCopyright")} © {new Date().getFullYear()}</span>
          ) : (
            <span>© {new Date().getFullYear()} {t("footCopyright")}</span>
          )}
        </p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white hover:underline transition-colors">{t("footLinkPrivacy")}</a>
          <a href="#" className="hover:text-white hover:underline transition-colors">{t("footLinkSpecs")}</a>
          <a href="#" className="hover:text-white hover:underline transition-colors">{t("footLinkQa")}</a>
          <a href="#" className="hover:text-white hover:underline transition-colors">{t("footLinkSupply")}</a>
        </div>
      </div>
    </footer>
  );
}
