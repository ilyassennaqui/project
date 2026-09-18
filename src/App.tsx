import { useState, useEffect } from "react";
import { AppTab } from "./types";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeHero from "./components/HomeHero";
import CategoryGallery from "./components/CategoryGallery";
import TechnicalInquiry from "./components/TechnicalInquiry";
import WhatsAppButton from "./components/WhatsAppButton";
import { motion, AnimatePresence } from "motion/react";
import { Hammer, Sparkles, Sliders, ChevronRight } from "lucide-react";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

function AppContent() {
  const [activeTab, setActiveTab] = useState<AppTab>(AppTab.HOME);
  const { t, language } = useLanguage();
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  // Theme Syncing Effect
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Scroll to top upon tab transition
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab]);

  // Listen for custom tab transition requests (e.g. from modals)
  useEffect(() => {
    const handleSwitchTab = (e: Event) => {
      const customEvent = e as CustomEvent<AppTab>;
      if (customEvent.detail) {
        setActiveTab(customEvent.detail);
      }
    };
    window.addEventListener("app-switch-tab", handleSwitchTab);
    return () => window.removeEventListener("app-switch-tab", handleSwitchTab);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f9ff] text-[#161c23] dark:bg-[#0a0f16] dark:text-[#f3f4f6] selection:bg-[#ba1a1a] selection:text-white pb-0 transition-colors duration-300">
      
      {/* Universal Navigation Bar */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Responsive Canvas Staging */}
      <main className="flex-grow pt-[82px] relative overflow-hidden">
        <AnimatePresence mode="wait">
          {activeTab === AppTab.HOME && (
            <motion.div
              key="hometab"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="space-y-0"
            >
              <HomeHero setActiveTab={setActiveTab} />
              <CategoryGallery />
              
              {/* Home Page Dynamic Structural CTA Banner */}
              <section className="bg-white dark:bg-[#121820] border-t border-[#c5c6ca] dark:border-[#2a3543] py-20 px-6 md:px-16 text-center transition-colors duration-300">
                <div className="max-w-2xl mx-auto space-y-8 font-mono">
                  <div className="flex justify-center">
                    <span className="text-[10px] font-bold text-[#ba1a1a] dark:text-[#ffb4ab] tracking-widest uppercase bg-[#ffdad6] dark:bg-[#93000a]/35 px-3 py-1">
                      {language === "ar" 
                        ? "جاهز لبدء مشروع الألومنيوم الخاص بك؟" 
                        : language === "en" 
                          ? "Ready for custom alloy casting?" 
                          : "Prêt à lancer votre projet sur-mesure ?"}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-extrabold font-hanken tracking-tight text-[#000101] dark:text-white uppercase">
                    {language === "ar"
                      ? "تواصل مباشرة مع فريق الدراسة الفنية لدينا"
                      : language === "en"
                        ? "Connect with our technical drafting team"
                        : "Connectez-vous avec notre équipe d'étude technique"}
                  </h3>
                  
                  <p className="text-xs text-slate-500 dark:text-slate-400 max-w-lg mx-auto leading-relaxed font-mono">
                    {language === "ar"
                      ? "نستقبل ملفات STP و STEP و DWG مباشرة. املأ الاستمارة لتقدير تكالifs الإنتاج أو طلب عرض سعر رسمي مخصص."
                      : language === "en"
                        ? "We accept STP, STEP, and DWG files directly. Fill out our form to estimate fabrication costs or request a formal quote."
                        : "Nous acceptons les fichiers STP, STEP et DWG directement. Remplissez notre formulaire pour estimer vos coûts de fabrication ou demandez un devis officiel."}
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={() => setActiveTab(AppTab.CONTACT_SUPPORT)}
                      className="bg-[#ba1a1a] hover:bg-[#ba1a1a]/95 text-white font-bold text-xs uppercase px-10 py-5 tracking-widest transition-all hover:shadow-lg rounded-none active:scale-95 inline-flex items-center gap-2 cursor-pointer"
                    >
                      <span>
                        {language === "ar"
                          ? "تقدير التكلفة الفورية"
                          : language === "en"
                            ? "Simulate Quote"
                            : "Estimer mon Devis"}
                      </span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {activeTab === AppTab.PRODUCTS_SPECS && (
            <motion.div
              key="specstab"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="space-y-0"
            >
              <CategoryGallery />
            </motion.div>
          )}

          {activeTab === AppTab.CONTACT_SUPPORT && (
            <motion.div
              key="contacttab"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="space-y-0"
            >
              <TechnicalInquiry />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Universal Footer */}
      <Footer setActiveTab={setActiveTab} darkMode={darkMode} setDarkMode={setDarkMode} />
      
      {/* Floating WhatsApp Action Line */}
      <WhatsAppButton />
    </div>
  );
}
