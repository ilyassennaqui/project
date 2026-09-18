import { AppTab } from "../types";
import { IMAGES } from "../images";
import { Phone, ArrowUpRight, Award } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface HomeHeroProps {
  setActiveTab: (tab: AppTab) => void;
}

export default function HomeHero({ setActiveTab }: HomeHeroProps) {
  const { t, language } = useLanguage();

  const isAr = language === "ar";

  const aluSteps = {
    fr: [
      { title: "Extraction et Raffinage (Bauxite)", desc: "Le minerai brut de bauxite est d'abord converti en alumine (un oxyde d'aluminium blanc en poudre) via le procédé chimique Bayer." },
      { title: "Électrolyse (Hall-Héroult)", desc: "L'alumine est dissoute dans un bain de cryolithe liquide à 960°C. Un fort courant électrique sépare l'oxygène pur de l'aluminium liquide." },
      { title: "Moulage et Extrusion Thermique", desc: "Le métal fondu est coulé en billettes. Ces cylindres sont préchauffés à 500°C puis poussés sous haute pression hydraulique pour former nos profilés de haute précision." }
    ],
    en: [
      { title: "Bauxite Extraction & Refining", desc: "Raw bauxite ore is chemically refined to pure white alumina powder via the high-standard Bayer system." },
      { title: "Hall-Héroult Electrolysis", desc: "Alumina is melted at 960°C. Massive industrial electric currents dissolve oxygen, producing raw pure liquid aluminum." },
      { title: "Billet Casting & Hydraulic Extrusion", desc: "Liquid aluminum is shaped into solid cylinders, preheated to 500°C and pressed through micro-precision steel dies." }
    ],
    ar: [
      { title: "استخراج وتكرير البوكسيت", desc: "يتم تكرير خام البوكسيت الخام كيميائياً إلى مسحوق ألومينا أبيض نقي عبر طريقة باير المعتمدة." },
      { title: "التحليل الكهربائي هول-هيرولت", desc: "تُذاب الألومينا عند 960 درجة مئوية تحت تيار كهربائي قوي يفصل الأكسجين عن الألومنيوم السائل تماماً." },
      { title: "صب وسحب الكتل هيدروليكياً", desc: "يُصب الألومنيوم في قوالب أسطوانية، تسخن إلى 500 درجة مئوية وتضغط هيدروليكياً لتوليد القطاعات المعمارية الفاخرة." }
    ]
  };

  const glassSteps = {
    fr: [
      { title: "Fusion en Haute Température (1600°C)", desc: "Un mélange précis de sable de silice (pur à 99%), de carbonate de sodium et de calcaire est fondu au sein d'un four industriel ultra-puissant." },
      { title: "Flottage sur Étain (Float Glass)", desc: "Le verre liquide est déversé en continu sur un bain d'étain liquide. Par gravité et tension superficielle, il float et forme un ruban parfaitement plan." },
      { title: "Recuit et Assemblage Isolé", desc: "Le ruban est refroidi lentement de manière contrôlée pour éliminer les tensions de surface. Deux feuilles sont ensuite unies avec du gaz argon protecteur." }
    ],
    en: [
      { title: "High-Temperature Fusion (1600°C)", desc: "A calculated mix of high-purity silica sand (99%), soda ash, and calcium carbon is completely liquefied in extreme environments." },
      { title: "Floating on Molten Tin (Float Glass)", desc: "Liquefied glass is steadily poured over an industrial vat of molten tin, spreading flat by natural gravity forces." },
      { title: "Tempering & Double Glazing Assembly", desc: "The glass strip is cooled slowly to wash away structural stress, then paired with insulating argon gas fill protectives." }
    ],
    ar: [
      { title: "الصهر في درجات حرارة فائقة (1600°م)", desc: "يتم صهر مزيج دقيق من رمل السيليكا بنسبة نقاء 99٪ وكربونات الصوديوم والكلس في أفران ضخمة." },
      { title: "التعويم على القصدير السائل", desc: "يندفق الزجاج المصهور باستمرار فوق حمام قصدير سائل لتشكيل شريط مستوٍ رائع دون أي شوائب أو تموجات." },
      { title: "التبريد والتركيب المزدوج العازل", desc: "يبرد شريط الزجاج ببطء لتفادي الضغط الميكانيكي الداخلي، ثم توحد صفيحتان مع حشو غاز الأرغون الخامل." }
    ]
  };

  const currentAluSteps = aluSteps[language];
  const currentGlassSteps = glassSteps[language];

  return (
    <div className="w-full bg-[#f7f9ff] dark:bg-[#0a0f16] transition-colors duration-300">
      
      {/* 1. Hero Section With Parallax Backdrop */}
      <section className="relative min-h-[795px] flex items-center overflow-hidden border-b border-[#c5c6ca] dark:border-[#2a3543]">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0 bg-[#e3e8f2] dark:bg-[#121721] transition-colors duration-300">
          <img
            src={IMAGES.metalMaterialOverview.src}
            alt={IMAGES.metalMaterialOverview.alt}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-90 dark:opacity-40 grayscale brightness-95 dark:brightness-50"
          />
          {/* Saturated linear gradient matching industrial slate colors */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#f7f9ff]/95 via-[#f7f9ff]/85 to-transparent dark:from-[#0a0f16]/98 dark:via-[#0a0f16]/90 transition-colors duration-300" />
        </div>

        {/* Content grid */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-16 grid grid-cols-12 gap-8 items-center pt-16">
          <div className="col-span-12 lg:col-span-7 flex flex-col items-start gap-8">
            
            {/* Upper label line */}
            <div className="flex items-center gap-4 text-xs font-mono font-bold text-[#ba1a1a] dark:text-[#009df0] uppercase tracking-[0.2em]">
              <span className="w-12 h-[2px] bg-[#ba1a1a] dark:bg-[#009df0]" />
              {t("heroBadge")}
            </div>

            {/* Main Statement Display Typography */}
            <h1 className="font-extrabold font-hanken tracking-tight leading-none text-[#000101] dark:text-white text-5xl md:text-7xl uppercase">
              {t("cooperativeLabel")} <br />
              <span className="relative inline-block border-b-8 border-[#009df0] pb-1">
                IKRALUM.
              </span>
            </h1>

            {/* Pitch Bio */}
            <div className="max-w-xl">
              <p className="text-sm md:text-md text-[#44474a] dark:text-slate-300 leading-relaxed font-sans">
                {language === "ar"
                  ? "قطاعات ألومنيوم مصحوبة بدقة هندسية وأنظمة نجارة معمارية حديثة. تصميم وتصنيع هياكل النوافذ المزدوجة الزجاج، والأبواب المعقدة، والخلائط المعدنية فائقة القوة لمتانة قصوى وعزل تائب."
                  : language === "en"
                    ? "Precision engineered extrusion profiles and modern architectural joinery systems. Customized double-glazed window structures, complex doors, and high-performance alloys fabricated for absolute longevity."
                    : "Profilés d'extrusion de précision et systèmes de menuiserie architecturale modernes. Structures de fenêtres coulissantes double vitrage, portes complexes de haute sécurité et alliages haute performance façonnés pour une longévité durable."}
              </p>
            </div>

            {/* Actions tab-routing buttons */}
            <div className="flex flex-wrap gap-4 font-mono text-xs font-bold uppercase tracking-widest pt-2">
              <button 
                onClick={() => setActiveTab(AppTab.PRODUCTS_SPECS)}
                className="bg-[#1a1c1e] text-white dark:bg-[#ba1a1a] hover:bg-[#ba1a1a] dark:hover:bg-[#ba1a1a]/90 hover:scale-105 active:scale-95 px-8 py-4 transition-all duration-300 rounded-none flex items-center gap-2 group border border-transparent cursor-pointer"
              >
                <span>{t("exploreBtn")}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
              
              <button 
                onClick={() => setActiveTab(AppTab.CONTACT_SUPPORT)}
                className="border border-[#161c23] dark:border-slate-400 text-[#161c23] dark:text-slate-200 hover:bg-[#161c23] dark:hover:bg-slate-200 dark:hover:text-black hover:text-white px-8 py-4 transition-all duration-300 rounded-none cursor-pointer"
              >
                {t("estimateBtn")}
              </button>
            </div>

            {/* Static Contact Info Cluster */}
            <div className="flex flex-col sm:flex-row gap-8 pt-6 border-t border-[#c5c6ca]/50 dark:border-[#2a3543]/50 w-full">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white border border-[#c5c6ca] dark:bg-[#121822] dark:border-[#2a3543] flex items-center justify-center text-[#161c23] dark:text-white shadow-sm">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[9px] font-mono text-[#75777a] dark:text-[#8a929b] uppercase tracking-wider font-bold">{t("techOffice")}</p>
                  <p className="font-mono text-xs font-bold text-[#161c23] dark:text-white">+212 607546332</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white border border-[#c5c6ca] dark:bg-[#121822] dark:border-[#2a3543] flex items-center justify-center text-[#161c23] dark:text-[#cbd5e1] shadow-sm">
                  <Award className="w-4 h-4 text-[#ba1a1a] dark:text-[#009df0]" />
                </div>
                <div>
                  <p className="text-[9px] font-mono text-[#75777a] dark:text-[#8a929b] uppercase tracking-wider font-bold">{t("quotesOffice")}</p>
                  <p className="font-mono text-xs font-bold text-[#161c23] dark:text-white">ikralum1@gmail.com</p>
                </div>
              </div>
            </div>

          </div>

          {/* Graphical side timeline anchor */}
          <div className="hidden lg:col-span-5 lg:flex flex-col items-center justify-center gap-6 select-none opacity-90 pr-12">
            <div className="w-[1.5px] h-32 bg-[#c5c6ca] dark:bg-[#2a3543]" />
            <div className="flex flex-col gap-3 font-mono text-[9px] font-extrabold tracking-[0.25em] rotate-90 text-[#75777a] dark:text-[#8a929b] uppercase">
              // PRODUCTION RAW ELEMENTS
            </div>
            <div className="flex flex-col gap-2">
              <div className="w-2.5 h-2.5 bg-[#009df0] rounded-none rotate-45" />
              <div className="w-2.5 h-2.5 border border-[#161c23] dark:border-slate-400 rounded-none rotate-45" />
              <div className="w-2.5 h-2.5 border border-[#161c23] dark:border-slate-400 rounded-none rotate-45" />
            </div>
            <div className="w-[1.5px] h-32 bg-[#c5c6ca] dark:bg-[#2a3543]" />
          </div>
        </div>
      </section>

      {/* 2. Alu & Glass Creation Process Section */}
      <section className="py-24 bg-[#eef4fd] dark:bg-[#10151d] border-b border-[#c5c6ca] dark:border-[#2a3543] transition-colors duration-300">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-mono font-bold tracking-[0.3em] text-[#75777a] dark:text-[#8a929b] uppercase block mb-3">
              // {t("processBadge")}
            </span>
            <h2 className="text-4xl font-extrabold font-hanken tracking-tight uppercase text-[#000101] dark:text-white">
              {t("processTitle")}
            </h2>
            <p className="text-sm text-[#44474a] dark:text-slate-300 leading-relaxed mt-4 font-sans">
              {t("processDesc")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* ALUMINUM CREATION CARD */}
            <div className="bg-white dark:bg-[#161d26] border border-[#c5c6ca] dark:border-[#2a3543] p-8 md:p-10 flex flex-col justify-between space-y-8 shadow-sm">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-[#ba1a1a] dark:text-[#009df0] uppercase bg-[#ffdad6] dark:bg-[#009df0]/15 px-2.5 py-1">
                    {t("metallurgyBadge")}
                  </span>
                  <span className="text-xs font-mono text-[#75777a] dark:text-[#8a929b] font-bold uppercase tracking-wider">// {t("aluLabel")}</span>
                </div>
                
                <h3 className="text-3xl font-extrabold font-hanken tracking-tight uppercase text-[#000101] dark:text-white">
                  {t("aluTitle")}
                </h3>
                
                <p className="text-sm text-[#44474a] dark:text-slate-300 leading-relaxed font-sans">
                  {t("aluIntro")}
                </p>

                {/* Vertical Process Steps */}
                <div className="space-y-6 font-sans">
                  {currentAluSteps.map((step, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <span className="font-mono text-xs font-bold bg-[#ffdad6] dark:bg-[#009df0]/15 text-[#ba1a1a] dark:text-[#009df0] w-6 h-6 rounded-full flex items-center justify-center shrink-0">{idx + 1}</span>
                      <div>
                        <h4 className="font-bold text-sm text-[#000101] dark:text-white font-mono uppercase">{step.title}</h4>
                        <p className="text-xs text-[#75777a] dark:text-slate-400 mt-1">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-[#232c37] flex justify-between items-center text-xs font-mono text-[#75777a] dark:text-[#8a929b]">
                <span>{t("aluFooter")}</span>
                <span className="font-bold text-[#ba1a1a] dark:text-[#009df0]">{t("coopFooter")}</span>
              </div>
            </div>

            {/* GLASS CREATION CARD */}
            <div className="bg-white dark:bg-[#161d26] border border-[#c5c6ca] dark:border-[#2a3543] p-8 md:p-10 flex flex-col justify-between space-y-8 shadow-sm">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-[#ba1a1a] dark:text-[#009df0] uppercase bg-[#ffdad6] dark:bg-[#009df0]/15 px-2.5 py-1">
                    {t("glassBadge")}
                  </span>
                  <span className="text-xs font-mono text-[#75777a] dark:text-[#8a929b] font-bold uppercase tracking-wider">// {t("glassLabel")}</span>
                </div>
                
                <h3 className="text-3xl font-extrabold font-hanken tracking-tight uppercase text-[#000101] dark:text-white">
                  {t("glassTitle")}
                </h3>
                
                <p className="text-sm text-[#44474a] dark:text-slate-300 leading-relaxed font-sans">
                  {t("glassIntro")}
                </p>

                {/* Vertical Process Steps */}
                <div className="space-y-6 font-sans">
                  {currentGlassSteps.map((step, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <span className="font-mono text-xs font-bold bg-[#ffdad6] dark:bg-[#009df0]/15 text-[#ba1a1a] dark:text-[#009df0] w-6 h-6 rounded-full flex items-center justify-center shrink-0">{idx + 1}</span>
                      <div>
                        <h4 className="font-bold text-sm text-[#000101] dark:text-white font-mono uppercase">{step.title}</h4>
                        <p className="text-xs text-[#75777a] dark:text-slate-400 mt-1">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-[#232c37] flex justify-between items-center text-xs font-mono text-[#75777a] dark:text-[#8a929b]">
                <span>{t("glassFooter")}</span>
                <span className="font-bold text-[#ba1a1a] dark:text-[#009df0]">{t("coopFooter")}</span>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
