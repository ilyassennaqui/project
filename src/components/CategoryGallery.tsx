import { useState } from "react";
import { IMAGES } from "../images";
import { ArrowRight, Drill, Shield, Ruler, Sparkles, Building2, Factory, Eye, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ProductCatalogItemTrans } from "../locales/translations";
import { useLanguage } from "../context/LanguageContext";

export default function CategoryGallery() {
  const [activeCategory, setActiveCategory] = useState<"all" | "menuiserie" | "interieur" | "laser">("all");
  const [hoveredPid, setHoveredPid] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<ProductCatalogItemTrans | null>(null);
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);
  const { t, language, products } = useLanguage();

  const categories = [
    { id: "all", label: t("catAll"), icon: Sparkles },
    { id: "menuiserie", label: t("catMenuiserie"), icon: Building2 },
    { id: "interieur", label: t("catInterieur"), icon: Factory },
    { id: "laser", label: t("catLaser"), icon: Ruler }
  ];

  const categoryTags: { [key: string]: string } = {
    "cuisine-alu": "interieur",
    "fenetre-coulissante": "menuiserie",
    "porte-laser": "laser",
    "dressing-alu": "interieur"
  };

  const filteredProducts = products.filter((p) => {
    if (activeCategory === "all") return true;
    return categoryTags[p.id] === activeCategory;
  });

  return (
    <div className="w-full bg-white dark:bg-[#0a0f16] text-[#161c23] dark:text-[#f3f4f6] py-24 px-6 md:px-16 transition-colors duration-300" id="catalog-section">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-mono font-bold tracking-[0.3em] text-[#75777a] dark:text-[#8a929b] uppercase block mb-3">
              // {t("catalogBadge")}
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold font-hanken tracking-tight text-[#000101] dark:text-white uppercase">
              {t("catalogTitle")}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">
              {t("catalogDesc")}
            </p>
          </div>

          {/* Tab Filter buttons */}
          <div className="flex flex-wrap gap-2 pt-2">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as any)}
                  className={`flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider py-2.5 px-5 transition-all duration-300 rounded-none border cursor-pointer ${
                    isSelected
                      ? "bg-[#1a1c1e] text-white border-[#1a1c1e] dark:bg-white dark:text-[#0b0f17] dark:border-white"
                      : "bg-[#f7f9ff] text-[#44474a] border-[#c5c6ca] dark:bg-[#121820] dark:text-slate-300 dark:border-[#2a3543] hover:border-[#1a1c1e] dark:hover:border-white"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Bento/Grid Catalog List */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((p, idx) => {
              // Map dynamic image keys to real URLs
              const imageSrc = IMAGES[p.imageKey]?.src || IMAGES.extrudedProfilesArrangement.src;
              const imageAlt = IMAGES[p.imageKey]?.alt || IMAGES.extrudedProfilesArrangement.alt;
              const isHovered = hoveredPid === p.id;
              
              // Spans to form asymmetrical layout
              const mdSpan = idx === 0 ? "md:col-span-12 lg:col-span-8" : "md:col-span-6 lg:col-span-4";

              return (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className={`${mdSpan} group cursor-pointer border border-[#c5c6ca] hover:border-[#ba1a1a] dark:border-[#2a3543] dark:hover:border-[#009df0]/60 bg-[#f7f9ff] dark:bg-[#121820] shadow-sm hover:shadow-xl dark:hover:shadow-[#009df0]/5 scale-100 hover:scale-[1.012] -translate-y-0 hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col justify-between`}
                  onMouseEnter={() => setHoveredPid(p.id)}
                  onMouseLeave={() => setHoveredPid(null)}
                  onClick={() => setSelectedProduct(p)}
                >
                  {/* Top image panel */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-900 border-b border-[#c5c6ca] dark:border-[#2a3543]">
                    <img
                      src={imageSrc}
                      alt={imageAlt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale transition-transform duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                    />
                    {/* Dark translucent overlay with centered Quick View button */}
                    <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-[#060a0f]/60 transition-all duration-500 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedProduct(p);
                          }}
                          className="bg-white/95 text-[#0b0f17] dark:bg-[#0b0f17]/95 dark:text-white border border-[#ba1a1a] dark:border-[#009df0] flex items-center gap-2 px-4 py-2.5 font-mono text-[10px] font-bold uppercase tracking-widest shadow-xl cursor-pointer hover:bg-[#ba1a1a] hover:text-white dark:hover:bg-[#009df0] dark:hover:text-[#0b0f17] transition-all duration-200"
                        >
                          <Eye className="w-4 h-4" />
                          {t("quickView")}
                        </button>
                      </div>
                    </div>
                    
                    {/* Spec flag badge */}
                    <div className="absolute top-4 left-4 bg-[#1a1c1e]/90 text-white border border-[#75777a] dark:border-[#2a3543] px-3.5 py-1.5 font-mono text-[10px] font-bold tracking-widest uppercase">
                      {p.series}
                    </div>

                    {/* Active indicators hovering */}
                    {isHovered && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute bottom-4 right-4 bg-white/95 dark:bg-[#161d26]/95 border border-[#ba1a1a] dark:border-[#009df0] text-[#ba1a1a] dark:text-[#009df0] px-2 py-1.5 flex items-center gap-1 font-mono text-[8px] font-bold"
                      >
                        <Sparkles className="w-3 h-3" />
                        {t("previewBadge")}
                      </motion.div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-8 flex-grow flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <span className="text-[10px] font-mono font-bold tracking-widest text-[#ba1a1a] dark:text-[#009df0] uppercase bg-[#ffdad6] dark:bg-[#009df0]/15 px-2.5 py-1 inline-block">
                        {t("detailsPrefix")} {categoryTags[p.id]?.toUpperCase()}
                      </span>
                      <h3 className="text-2xl font-extrabold font-hanken tracking-tight uppercase text-[#000101] dark:text-white">
                        {p.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                        {p.description}
                      </p>
                    </div>

                    {/* Sub-specs list */}
                    <ul className="space-y-2 border-t border-[#c5c6ca]/60 dark:border-[#2a3543]/40 pt-4 font-mono text-xs text-[#44474a] dark:text-slate-300">
                      {p.bulletPoints.map((bp, bpIdx) => (
                        <li key={bpIdx} className="flex gap-2.5 items-center">
                          <span className="w-1.5 h-1.5 bg-[#ba1a1a] dark:bg-[#009df0]" />
                          <span className="font-sans">{bp}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Footer indicators */}
                    <div className="pt-4 border-t border-[#c5c6ca]/60 dark:border-[#2a3543]/40 flex justify-between items-center text-xs font-mono font-bold uppercase tracking-widest">
                      <span className="text-[#75777a] dark:text-[#8a929b]">{t("coopFooter")}</span>
                      <span className="text-[#ba1a1a] dark:text-[#009df0] flex items-center gap-1.5 group-hover:translate-x-1 transition-transform duration-300">
                        {t("detailsBtn")} <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Custom Extra Block: CNC Machining and surface treatments */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Large Machinery Visual Banner Card */}
          <div className="lg:col-span-12 border border-[#c5c6ca] dark:border-[#2a3543] relative aspect-[21/9] overflow-hidden group">
            <img
              src={IMAGES.roboticArmCutting.src}
              alt={IMAGES.roboticArmCutting.alt}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale brightness-95 transition-all duration-1000 group-hover:scale-105 group-hover:brightness-100"
            />
            {/* Red gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#161c23]/95 via-[#161c23]/30 to-transparent flex flex-col justify-end p-8 md:p-12 text-white pointer-events-none" />
            
            <div className="absolute bottom-8 left-8 right-8 z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 font-mono text-xs">
              <div className="space-y-2">
                <span className="text-[#ba1a1a] dark:text-[#009df0] font-bold text-[10px] uppercase tracking-widest">// ATELIERS DESIGN ÉTUDES</span>
                <h4 className="text-xl md:text-2xl font-extrabold tracking-tight uppercase text-white font-hanken">
                  {language === "ar"
                    ? "فريق دراسة المخططات يضمن لك دقة ميليمترية ملفتة"
                    : language === "en"
                      ? "Our design center guarantees sub-millimeter visual precision"
                      : "Notre centre de menuiserie garantit un assemblage millimétrique"}
                </h4>
              </div>
              
              <div className="bg-[#ba1a1a] text-white px-5 py-2 font-bold tracking-widest uppercase text-[10px] whitespace-nowrap">
                {language === "ar"
                  ? "صناعة تكنولوجية يدوية ورقمية مغربية فاخرة"
                  : language === "en"
                    ? "Premium Technical & Traditional Moroccan Handcraft"
                    : "Fait Main & Haute Technologie Marocaine"}
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop with elegant blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-[#060a0f]/80 backdrop-blur-md cursor-zoom-out"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
              className="relative w-full max-w-4xl bg-white dark:bg-[#121820] border border-[#c5c6ca] dark:border-[#2a3543] shadow-2xl overflow-hidden flex flex-col md:flex-row z-10"
              onClick={(e) => e.stopPropagation()} // Prevents closing when clicking modal content
            >
              {/* Close Button top-right */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-20 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 hover:bg-[#ba1a1a] hover:text-white dark:hover:bg-[#ba1a1a] p-2 transition-all duration-200 cursor-pointer rounded-none border border-slate-200 dark:border-slate-700 shadow-sm font-bold"
                aria-label="Fermer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Image side - half width with zoom-to-lightbox */}
              <div 
                className="w-full md:w-1/2 relative bg-slate-950 aspect-[4/3] md:aspect-auto min-h-[300px] md:min-h-[450px] cursor-zoom-in group/img overflow-hidden"
                onClick={() => {
                  const imageSrc = IMAGES[selectedProduct.imageKey]?.src || IMAGES.extrudedProfilesArrangement.src;
                  const imageAlt = IMAGES[selectedProduct.imageKey]?.alt || IMAGES.extrudedProfilesArrangement.alt;
                  setLightboxImage({ src: imageSrc, alt: imageAlt });
                }}
                title="Zoom"
              >
                <img
                  src={IMAGES[selectedProduct.imageKey]?.src || IMAGES.extrudedProfilesArrangement.src}
                  alt={IMAGES[selectedProduct.imageKey]?.alt || IMAGES.extrudedProfilesArrangement.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover absolute inset-0 transition-transform duration-500 group-hover/img:scale-105"
                />
                
                {/* Lightbox hint badge */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/img:opacity-100 transition-all duration-350 flex flex-col items-center justify-center gap-2">
                  <span className="bg-[#ba1a1a] dark:bg-[#009df0] text-white dark:text-[#0b0f17] text-[10px] font-mono font-bold tracking-widest uppercase py-1.5 px-3 shadow-md">
                    🔍 {language === "ar" ? "ملء الشاشة" : language === "en" ? "Full Screen" : "Plein Écran"}
                  </span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-950/20 via-transparent to-transparent pointer-events-none" />
                
                {/* Product Series Badge */}
                <div className="absolute bottom-4 left-4 bg-[#1a1c1e]/90 text-white border border-[#75777a] dark:border-[#2a3543] px-3.5 py-1.5 font-mono text-[10px] font-bold tracking-widest uppercase pointer-events-none">
                  {selectedProduct.series}
                </div>
              </div>

              {/* Content side - half width */}
              <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-between space-y-6 max-h-[90vh] md:max-h-[600px] overflow-y-auto">
                <div className="space-y-4">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#ba1a1a] dark:text-[#009df0] uppercase bg-[#ffdad6] dark:bg-[#009df0]/15 px-2.5 py-1 inline-block">
                    {t("detailsPrefix")} {categoryTags[selectedProduct.id]?.toUpperCase()}
                  </span>
                  
                  <h3 className="text-3xl font-extrabold font-hanken tracking-tight uppercase text-[#000101] dark:text-white leading-tight">
                    {selectedProduct.title}
                  </h3>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                    {selectedProduct.description}
                  </p>

                  <div className="pt-4 border-t border-[#c5c6ca]/60 dark:border-[#2a3543]/40">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#75777a] dark:text-[#8a929b] mb-3 font-mono">
                      {t("specTitle")}
                    </h4>
                    <ul className="space-y-2.5 font-mono text-xs text-[#44474a] dark:text-slate-300">
                      {selectedProduct.bulletPoints.map((bp, bpIdx) => (
                        <li key={bpIdx} className="flex gap-2.5 items-start">
                          <span className="w-1.5 h-1.5 bg-[#ba1a1a] dark:bg-[#009df0] mt-1.5 shrink-0" />
                          <span className="font-sans leading-relaxed">{bp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer and Interactive CTA inside Modal */}
                <div className="pt-6 border-t border-[#c5c6ca]/60 dark:border-[#2a3543]/40 flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
                  <span className="text-[10px] font-mono text-[#75777a] dark:text-[#8a929b]">{t("coopFooter")}</span>
                  
                  <button
                    onClick={() => {
                      setSelectedProduct(null);
                      // Switch to Technical support tab safely via a programmed trigger
                      window.dispatchEvent(new CustomEvent("app-switch-tab", { detail: "contact_support" }));
                    }}
                    className="bg-[#1a1c1e] dark:bg-white text-white dark:text-[#0b0f17] font-bold text-xs uppercase px-5 py-3 tracking-widest transition-all hover:bg-[#ba1a1a] dark:hover:bg-[#009df0] dark:hover:text-slate-900 rounded-none active:scale-95 flex items-center justify-center gap-2 cursor-pointer border border-[#1a1c1e] dark:border-white text-center"
                  >
                    <span>{t("orderBtn")}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* High-Resolution Full-Screen Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxImage(null)}
              className="absolute inset-0 cursor-zoom-out"
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative max-w-5xl max-h-[85vh] z-10 flex flex-col items-center gap-4"
            >
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute -top-12 right-0 bg-[#ba1a1a] dark:bg-[#009df0] text-white p-2.5 hover:rotate-90 transition-transform duration-300 rounded-none shadow-lg cursor-pointer flex items-center justify-center font-bold"
                aria-label="Fermer"
              >
                <X className="w-5 h-5 stroke-[2.5]" />
              </button>
              
              <img
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[75vh] object-contain shadow-2xl border border-white/10"
              />
              
              <div className="text-center font-mono text-xs text-white/70 max-w-lg mt-2 font-mono">
                <span className="text-white uppercase font-bold block mb-1">{lightboxImage.alt}</span>
                <span>{t("coopFooter")}</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
