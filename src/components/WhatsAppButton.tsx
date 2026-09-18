import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { Sparkles } from "lucide-react";

export default function WhatsAppButton() {
  const { language } = useLanguage();
  const [showTooltip, setShowTooltip] = useState(false);

  // Auto-show tooltip periodically to catch attention gracefully
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
      // Auto-hide after 6 seconds
      const hideTimer = setTimeout(() => {
        setShowTooltip(false);
      }, 6000);
      return () => clearTimeout(hideTimer);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const phoneNumber = "212607546332";

  // Pre-filled messages for different languages
  const getWhatsAppUrl = () => {
    let text = "";
    if (language === "ar") {
      text = "السلام عليكم إكرالوم، أود الاستفسار عن أنظمتكم للألومنيوم وخدمات النجارة المعمارية.";
    } else if (language === "en") {
      text = "Hello IKRALUM, I would like to inquire about your custom aluminium profiles and architectural joinery.";
    } else {
      text = "Bonjour IKRALUM, je souhaite obtenir des informations sur vos profilés aluminium et vos solutions de menuiserie.";
    }
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
  };

  const getTooltipText = () => {
    if (language === "ar") return "تحدث مباشرة مع المكتب التقني";
    if (language === "en") return "Technical Support Live Chat";
    return "Contacter le Bureau Technique";
  };

  const getSubText = () => {
    if (language === "ar") return "متاحون الآن لمساعدتكم";
    if (language === "en") return "Online and ready to assist";
    return "Artisans disponibles à Casablanca, MAROC";
  };

  // Determine button positioning based on text-direction (RTL for Arabic)
  const isRtl = language === "ar";
  const positionClasses = isRtl
    ? "bottom-6 left-6 md:bottom-8 md:left-8 flex-row-reverse"
    : "bottom-6 right-6 md:bottom-8 md:right-8 flex-row";

  return (
    <div className={`fixed z-50 flex items-center gap-3 select-none pointer-events-none ${positionClasses}`}>
      
      {/* Dynamic Pop-up Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.85, x: isRtl ? -20 : 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.85, x: isRtl ? -20 : 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className={`pointer-events-auto flex items-center gap-3 bg-white dark:bg-[#121822] border border-[#c5c6ca] dark:border-[#2a3543] p-3.5 shadow-2xl rounded-2xl max-w-xs transition-all duration-300 hover:border-[#ba1a1a] dark:hover:border-[#009df0] cursor-pointer group/tooltip ${
              isRtl ? "text-right" : "text-left"
            }`}
          >
            {/* Green glowing online dot indicator */}
            <div className="relative flex h-3 w-3 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </div>

            <div className="flex-grow space-y-0.5 font-mono">
              <p className="text-[11px] font-extrabold uppercase tracking-wide text-[#000101] dark:text-white flex items-center gap-1">
                {language !== "ar" && <Sparkles className="w-3.5 h-3.5 text-[#ba1a1a] dark:text-[#009df0] animate-pulse" />}
                <span>{getTooltipText()}</span>
                {language === "ar" && <Sparkles className="w-3.5 h-3.5 text-[#ba1a1a] dark:text-[#009df0] animate-pulse" />}
              </p>
              <p className="text-[9px] font-medium text-slate-500 dark:text-slate-400">
                {getSubText()}
              </p>
            </div>
          </motion.a>
        )}
      </AnimatePresence>

      {/* Main Floating Action Button Container */}
      <div className="pointer-events-auto relative">
        {/* Repeating soft wave background glow to draw focus visually without being offensive */}
        <div className="absolute inset-0 rounded-full bg-[#ba1a1a] dark:bg-[#009df0] opacity-35 animate-[ping_2s_infinite]" />
        
        <motion.a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowTooltip(true)}
          title={getTooltipText()}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.93 }}
          className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden border border-white/20 dark:border-black/20 bg-[#ba1a1a] text-white dark:bg-[#009df0] dark:text-[#0a0f16]"
        >
          {/* Accent layer to simulate metallic look */}
          <div className="absolute inset-x-0 top-0 h-[40%] bg-white/10 dark:bg-black/5 pointer-events-none" />

          {/* Seamless interactive light glare animation across index */}
          <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/15 dark:via-black/10 to-transparent translate-x-[-100%] animate-[shimmer_3s_infinite]" />

          {/* Genuine High-Fidelity Vector-styled WhatsApp Logo SVG */}
          <svg
            className="w-7 h-7 md:w-8 md:h-8 fill-current drop-shadow-md transition-transform duration-300 group-hover:rotate-12"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.004 2C6.48 2 2 6.48 2 12.004c0 1.848.502 3.578 1.378 5.07l-1.354 4.942 5.07-1.33A9.957 9.957 0 0012.004 22c5.523 0 10.004-4.48 10.004-10.004C22.008 6.48 17.527 2 12.004 2zM17.9 15.39c-.25.707-1.258 1.293-1.815 1.391-.5.09-1.155.158-3.414-.775-2.887-1.192-4.706-4.11-4.85-4.3-.14-.19-1.155-1.536-1.155-2.928 0-1.393.729-2.074.985-2.355.257-.281.564-.352.75-.352.188 0 .375.003.54.01.173.007.406-.067.636.485.236.565.811 1.977.882 2.122.072.145.12.313.024.502-.096.19-.144.309-.288.477-.145.168-.303.38-.433.51-.144.143-.294.299-.126.587.168.288.749 1.233 1.606 1.996.736.654 1.357.857 1.693.998.337.142.535.118.736-.11.202-.23.864-.997 1.096-1.341.232-.344.464-.287.781-.17.317.118 2.016.953 2.361 1.126.346.173.576.257.66.402.085.145.085.839-.165 1.546z"
            />
          </svg>
        </motion.a>
      </div>

    </div>
  );
}
