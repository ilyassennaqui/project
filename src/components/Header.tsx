import { AppTab } from "../types";
import { Hammer, Menu, X, Layers, FileText, PhoneCall, Sun, Moon, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import CompanyLogo from "./CompanyLogo";
import { useLanguage } from "../context/LanguageContext";

interface HeaderProps {
  activeTab: AppTab;
  setActiveTab: (tab: AppTab) => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

export default function Header({ activeTab, setActiveTab, darkMode, setDarkMode }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { t, language, setLanguage } = useLanguage();

  // Monitor Scroll Progress for the Top Indicator
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: AppTab.HOME, label: t("navHome"), icon: Layers },
    { id: AppTab.PRODUCTS_SPECS, label: t("navCatalog"), icon: FileText },
    { id: AppTab.CONTACT_SUPPORT, label: t("navContact"), icon: PhoneCall },
  ];

  const languages = [
    { code: "fr", label: "FR" },
    { code: "en", label: "EN" },
    { code: "ar", label: "AR" },
  ] as const;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-[#0a0f16]/90 backdrop-blur-md border-b border-[#c5c6ca] dark:border-[#2a3543] transition-all duration-300 ease-in-out">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-4 flex justify-between items-center relative">
        {/* Brand Logo */}
        <div 
          onClick={() => setActiveTab(AppTab.HOME)} 
          className="flex items-center gap-4 cursor-pointer select-none group"
        >
          <CompanyLogo size={64} className="transition-transform duration-500 group-hover:scale-105 active:scale-95 shrink-0" />
          <div className="flex flex-col">
            <span className="text-2xl font-extrabold tracking-tight text-[#000101] dark:text-white font-hanken leading-tight">
              Cooperative IKRALUM
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] font-mono text-[#75777a] dark:text-slate-400 mt-0.5 font-bold">
              {t("logoSub")}
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 text-xs font-mono font-bold uppercase py-2 border-b-2 tracking-widest transition-all duration-200 ${
                  isActive
                    ? "border-[#ba1a1a] text-[#000101] dark:text-white"
                    : "border-transparent text-[#44474a] dark:text-[#a0a3a7] hover:text-[#000101] dark:hover:text-white hover:border-[#c5c6ca] dark:hover:border-[#3f4a56]"
                }`}
              >
                <Icon className="w-3.5 h-3.5 stroke-[2.5]" />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Button, Theme Toggle, Language Switcher & Mobile toggler */}
        <div className="flex items-center gap-4">
          
          {/* Custom Pill Language Selector for Desktop */}
          <div className="hidden md:flex items-center gap-1.5 bg-[#f1f5f9] dark:bg-[#0e141c] border border-[#c5c6ca] dark:border-[#2a3543] rounded-full p-1 pl-3 pr-1 font-mono text-[10px] font-bold shadow-sm select-none transition-all duration-300 hover:border-slate-400 dark:hover:border-slate-600 focus-within:ring-2 focus-within:ring-[#ba1a1a]">
            {/* Animated Globe Icon Indicator representing absolute global compliance standards */}
            <Globe className="w-3.5 h-3.5 text-[#ba1a1a] dark:text-[#009df0] animate-[spin_15s_linear_infinite] opacity-80 shrink-0" />
            <div className="h-4 w-[1px] bg-slate-300 dark:bg-[#2a3543] mx-1 shrink-0" />
            <div className="flex items-center gap-1">
              {languages.map((lang) => {
                const isSelected = language === lang.code;
                return (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`relative px-3 py-1 font-mono text-[9.5px] font-extrabold tracking-wider transition-all duration-300 ease-out rounded-full overflow-hidden cursor-pointer ${
                      isSelected
                        ? "bg-[#ba1a1a] text-white dark:bg-[#009df0] dark:text-[#06090e] shadow-sm scale-105"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/10"
                    }`}
                  >
                    {isSelected && (
                      <span className="absolute inset-0 bg-white/10 dark:bg-black/10 animate-[pulse_2s_infinite] pointer-events-none" />
                    )}
                    <span className="relative z-10">{lang.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Theme Toggle Switch */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg text-[#44474a] hover:text-[#000101] dark:text-[#a1a5ab] dark:hover:text-white hover:bg-[#f0f4fa] dark:hover:bg-[#16212e] transition-all duration-250 cursor-pointer active:scale-90"
            title={darkMode ? "Activé mode clair" : "Activé mode sombre"}
            aria-label="Toggle Theme Mode"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-400 fill-yellow-400 stroke-[1.8]" />
            ) : (
              <Moon className="w-5 h-5 text-slate-700 fill-slate-700 stroke-[1.8]" />
            )}
          </button>

          <button 
            onClick={() => setActiveTab(AppTab.CONTACT_SUPPORT)}
            className="hidden lg:block bg-[#ba1a1a] hover:bg-[#ba1a1a]/95 text-white text-xs font-mono font-bold tracking-widest uppercase px-6 py-2.5 transition-all duration-200 active:scale-95 cursor-pointer"
          >
            {t("btnQuote")}
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#000101] dark:text-white hover:bg-[#f7f9ff] dark:hover:bg-[#121820] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[73px] bg-white dark:bg-[#101620] border-b border-[#c5c6ca] dark:border-[#2a3543] py-4 px-6 flex flex-col gap-2 shadow-lg animate-fade-in z-40 transition-colors duration-300">
          
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center gap-4 p-3 font-mono text-xs font-bold uppercase tracking-widest text-left transition-all ${
                  isActive
                    ? "bg-[#1a1c1e] text-white dark:bg-[#ba1a1a] dark:text-white"
                    : "text-[#44474a] dark:text-[#a0a3a7] hover:bg-[#eef4fd] dark:hover:bg-[#1a232f] hover:text-[#000101] dark:hover:text-white"
                }`}
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </button>
            );
          })}

          {/* Quick Mobile Language Picker */}
          <div className="w-full flex items-center justify-between p-3.5 border border-[#c5c6ca]/80 dark:border-[#2a3543]/80 rounded-2xl bg-slate-50/50 dark:bg-[#0a0f16]/40 backdrop-blur-sm text-[#44474a] dark:text-[#a0a3a7] font-mono text-xs font-bold uppercase tracking-widest mt-2">
            <span className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#ba1a1a] dark:text-[#009df0] animate-[spin_15s_linear_infinite] shrink-0" />
              <span>{language === "ar" ? "اللغة:" : language === "en" ? "LANGUAGE:" : "LANGUE:"}</span>
            </span>
            <div className="flex items-center gap-1 bg-slate-200/60 dark:bg-[#121822] p-1 rounded-full border border-slate-300/40 dark:border-[#2a3543]/40">
              {(["fr", "en", "ar"] as const).map((lang) => {
                const isSelected = language === lang;
                return (
                  <button
                    key={lang}
                    onClick={() => {
                      setLanguage(lang);
                      setMobileMenuOpen(false);
                    }}
                    className={`px-3.5 py-1.5 text-[10px] font-extrabold rounded-full transition-all cursor-pointer ${
                      isSelected 
                        ? "bg-[#ba1a1a] text-white dark:bg-[#009df0] dark:text-[#0b0f17] shadow-sm transform scale-105" 
                        : "text-[#44474a] dark:text-[#a0a3a7] hover:text-black dark:hover:text-white"
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                );
              })}
            </div>
          </div>

          <button
            onClick={() => {
              setDarkMode(!darkMode);
            }}
            className="w-full flex items-center justify-between p-3 border border-[#c5c6ca] dark:border-[#2a3543] bg-transparent text-[#44474a] dark:text-[#a0a3a7] font-mono text-xs font-bold uppercase tracking-widest text-left transition-all mt-2 cursor-pointer hover:bg-slate-50 dark:hover:bg-[#1a232f]"
          >
            <span>{t("mobileTheme")} {darkMode ? t("themeSombre") : t("themeClair")}</span>
            {darkMode ? (
              <Sun className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            ) : (
              <Moon className="w-4 h-4 text-slate-600 fill-slate-600" />
            )}
          </button>

          <button
            onClick={() => {
              setActiveTab(AppTab.CONTACT_SUPPORT);
              setMobileMenuOpen(false);
            }}
            className="mt-2 w-full bg-[#ba1a1a] text-white py-3 font-mono text-xs font-bold uppercase tracking-widest text-center transition-colors cursor-pointer"
          >
            {t("btnUrgentQuote")}
          </button>
        </div>
      )}

      {/* Scroll Progress Bar Indicator */}
      <div 
         className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-[#ba1a1a] via-[#ff4d4d] to-[#ba1a1a] dark:from-[#009df0] dark:via-[#5fd1ff] dark:to-[#009df0] transition-all duration-75 ease"
        style={{ width: `${scrollProgress}%` }}
      />
    </header>
  );
}
