export type Language = "fr" | "en" | "ar";

export interface AlloySpecTrans {
  id: string;
  series: string;
  title: string;
  application: string;
  tensileStrength: string;
  yieldStrength: string;
  compliance: string;
  descriptiveText: string;
  chemicalComposition: { [element: string]: string };
}

export interface ProductCatalogItemTrans {
  id: string;
  series: string;
  title: string;
  description: string;
  imageKey: string;
  bulletPoints: string[];
}

export interface TimelineStepTrans {
  stepNumber: string;
  title: string;
  phase: string;
  description: string;
  detailsList: string[];
  activeParameter: string;
}

export interface CertificationTrans {
  id: string;
  iconName: string;
  title: string;
  sub: string;
  extendedText: string;
}

export const ALLOYS_TRANSLATED: Record<Language, AlloySpecTrans[]> = {
  fr: [
    {
      id: "en-aw-6060",
      series: "EN AW-6060",
      title: "Nuancier Architectural Standard",
      application: "Extrusions complexes, menuiseries esthétiques, façades, portes premium",
      tensileStrength: "160 - 220",
      yieldStrength: "120 - 160",
      compliance: "EN 755-2",
      descriptiveText: "Alliage d'extrusion universel. Excellente aptitude à l'anodisation décorative, haute résistance à la corrosion et soudabilité idéale. Parfait pour les profilés fins exigeant des tolérances précises.",
      chemicalComposition: { Si: "0.30 - 0.60", Mg: "0.35 - 0.60", Fe: "0.10 - 0.30", Mn: "≤ 0.10", Al: "Balance" }
    },
    {
      id: "en-aw-6063",
      series: "EN AW-6063",
      title: "Finition Esthétique Premium",
      application: "Profilés délicats, jonctions visuelles vitrées, tubes fins",
      tensileStrength: "180 - 245",
      yieldStrength: "135 - 190",
      compliance: "EN 12020-2",
      descriptiveText: "Spécialement traité pour obtenir une texture de surface extrêmement lisse. Préféré pour l'architecture marocaine et européenne haut de gamme où la pureté visuelle est requise.",
      chemicalComposition: { Si: "0.20 - 0.60", Mg: "0.45 - 0.90", Fe: "≤ 0.35", Cr: "≤ 0.10", Al: "Balance" }
    },
    {
      id: "en-aw-6082",
      series: "EN AW-6082",
      title: "Grade de Structure Ultra-Résistant",
      application: "Ossatures porteuses, grues mécaniques, échafaudages, structures de ponts",
      tensileStrength: "290 - 340",
      yieldStrength: "250 - 310",
      compliance: "EN 755-9",
      descriptiveText: "Alliage de structure offrant la plus haute résistance mécanique de la série 6000. Substitut idéal pour remplacer des châssis métalliques lourds avec un rapport résistance/poids optimal.",
      chemicalComposition: { Si: "0.70 - 1.30", Mg: "0.60 - 1.20", Mn: "0.40 - 1.00", Cr: "≤ 0.25", Al: "Balance" }
    },
    {
      id: "en-aw-7075",
      series: "EN AW-7075",
      title: "Grade Aérospatial à Haute Limite Élastique",
      application: "Pièces d'aviation, haute pression, moules à fortes contraintes",
      tensileStrength: "480 - 540",
      yieldStrength: "410 - 500",
      compliance: "Aero-Spec QQA",
      descriptiveText: "Alliage d'ultra-haute résistance à base de zinc. Offre une résistance exceptionnelle aux chocs mécaniques et une longévité inégalée.",
      chemicalComposition: { Zn: "5.10 - 6.10", Mg: "2.10 - 2.90", Cu: "1.20 - 2.00", Cr: "0.18 - 0.28", Al: "Balance" }
    }
  ],
  en: [
    {
      id: "en-aw-6060",
      series: "EN AW-6060",
      title: "Standard Architectural Grade",
      application: "Complex extrusions, visual window joints, high-end door systems, facades",
      tensileStrength: "160 - 220",
      yieldStrength: "120 - 160",
      compliance: "EN 755-2",
      descriptiveText: "An extremely popular extrusion alloy. It offers excellent response to decorative anodizing, superb corrosion resistance, and beautiful weldability. Perfect for intricate profiles requiring precise micron geometric tolerances.",
      chemicalComposition: { Si: "0.30 - 0.60", Mg: "0.35 - 0.60", Fe: "0.10 - 0.30", Mn: "≤ 0.10", Al: "Balance" }
    },
    {
      id: "en-aw-6063",
      series: "EN AW-6063",
      title: "Premium Finish Aesthetic Grade",
      application: "Architectural profiles, structural glass frame interfaces, irrigation tubes",
      tensileStrength: "180 - 245",
      yieldStrength: "135 - 190",
      compliance: "EN 12020-2",
      descriptiveText: "Specifically treated to achieve exceptional surface smoothness. Strongly favored in premium architecture where visible frame lines must look absolutely pristine under raw natural light.",
      chemicalComposition: { Si: "0.20 - 0.60", Mg: "0.45 - 0.90", Fe: "≤ 0.35", Cr: "≤ 0.10", Al: "Balance" }
    },
    {
      id: "en-aw-6082",
      series: "EN AW-6082",
      title: "Structural Heavy Duty Grade",
      application: "Structural frameworks, mechanical cranes, heavy transport scaffolding, bridge systems",
      tensileStrength: "290 - 340",
      yieldStrength: "250 - 310",
      compliance: "EN 755-9",
      descriptiveText: "Known as a structural alloy, offering the highest mechanical strength of the 6000 series. Commonly replaces structural mild steel frames where weight-to-strength ratios are critical.",
      chemicalComposition: { Si: "0.70 - 1.30", Mg: "0.60 - 1.20", Mn: "0.40 - 1.00", Cr: "≤ 0.25", Al: "Balance" }
    },
    {
      id: "en-aw-7075",
      series: "EN AW-7075",
      title: "Ultra-Strength Aerospace Grade",
      application: "Aviation components, military aerospace hulls, extreme load chassis, high-stress molds",
      tensileStrength: "480 - 540",
      yieldStrength: "410 - 500",
      compliance: "Aero-Spec QQA",
      descriptiveText: "An extremely high-strength aerospace grade alloy. Zinc is the primary alloying element. Possesses premium mechanical stress resilience, outstanding durability, and wear prevention.",
      chemicalComposition: { Zn: "5.10 - 6.10", Mg: "2.10 - 2.90", Cu: "1.20 - 2.00", Cr: "0.18 - 0.28", Al: "Balance" }
    }
  ],
  ar: [
    {
      id: "en-aw-6060",
      series: "EN AW-6060",
      title: "درجة معمارية قياسية",
      application: "عمليات سحب معقدة، فواصل نوافذ جمالية، واجهات، وأنظمة أبواب فاخرة",
      tensileStrength: "160 - 220",
      yieldStrength: "120 - 160",
      compliance: "EN 755-2",
      descriptiveText: "سبيكة سحب شائعة ومثالية. تتيح نتائج باهرة في الأكسدة التحليلية الجميلة ومقاومة فائقة للتآكل وقدرة ممتازة على اللحام.",
      chemicalComposition: { Si: "0.30 - 0.60", Mg: "0.35 - 0.60", Fe: "0.10 - 0.30", Mn: "≤ 0.10", Al: "Balance" }
    },
    {
      id: "en-aw-6063",
      series: "EN AW-6063",
      title: "درجة جمالية ذات تشطيب متميز",
      application: "القطاعات المعمارية، فواصل الزجاج الهيكلي، أنابيب الري الدقيقة",
      tensileStrength: "180 - 245",
      yieldStrength: "135 - 190",
      compliance: "EN 12020-2",
      descriptiveText: "تمت معالجتها خصيصاً للحصول على نعومة سطحية استثنائية. مفضلة بشدة في المشاريع الفاخرة حيث تتطلب نقاءً بصرياً لافتاً.",
      chemicalComposition: { Si: "0.20 - 0.60", Mg: "0.45 - 0.90", Fe: "≤ 0.35", Cr: "≤ 0.10", Al: "Balance" }
    },
    {
      id: "en-aw-6082",
      series: "EN AW-6082",
      title: "درجة هيكلية شديدة التحمل",
      application: "الهياكل الإنشائية، الرافعات الميكانيكية، سقالات النقل الثقيلة، والجسور",
      tensileStrength: "290 - 340",
      yieldStrength: "250 - 310",
      compliance: "EN 755-9",
      descriptiveText: "سبيكة إنشائية توفر أعلى قوة ميكانيكية في الفئة 6000. البديل الأمثل للهياكل الحديدية التقليدية لتوفير الوزن والقوة.",
      chemicalComposition: { Si: "0.70 - 1.30", Mg: "0.60 - 1.20", Mn: "0.40 - 1.00", Cr: "≤ 0.25", Al: "Balance" }
    },
    {
      id: "en-aw-7075",
      series: "EN AW-7075",
      title: "درجة طيران فائقة القوة",
      application: "مكونات الطيران، هياكل فضائية عسكرية، قوالب عالية التحمل",
      tensileStrength: "480 - 540",
      yieldStrength: "410 - 500",
      compliance: "Aero-Spec QQA",
      descriptiveText: "سبيكة زنك فائقة الجودة تتميز بمقاومتها الميكانيكية القصوى للضغط والظروف القاسية وحماية تامة ضد التآكل والتلف.",
      chemicalComposition: { Zn: "5.10 - 6.10", Mg: "2.10 - 2.90", Cu: "1.20 - 2.00", Cr: "0.18 - 0.28", Al: "Balance" }
    }
  ]
};

export const PRODUCTS_TRANSLATED: Record<Language, ProductCatalogItemTrans[]> = {
  fr: [
    {
      id: "cuisine-alu",
      series: "CUISINES & AMÉNAGEMENTS",
      title: "Cuisines Modernes en Aluminium sur Mesure",
      description: "Des cuisines d'exception alliant esthétique contemporaine et longévité de l'aluminium. Résistance absolue à l'humidité, aux vapeurs de cuisson et entretien sans effort.",
      imageKey: "cuisineAluGrise",
      bulletPoints: [
        "Tiroirs et coulisses aluminium amortis ultra-fluides (soft-close)",
        "Panneaux double face anticorrosion pour climats côtiers (Casablanca)",
        "Plan de travail en granit poli ou quartz antibactérien",
        "Éléments modulaires configurables sur mesure"
      ]
    },
    {
      id: "fenetre-coulissante",
      series: "CONFORT & VITRAGES",
      title: "Fenêtres Coulissantes Double Vitrage",
      description: "Conçues pour maximiser la clarté tout en maintenant une isolation phonique et thermique absolue. Équipées de volets roulants intégrés robustes.",
      imageKey: "fenetreAluCoulissante",
      bulletPoints: [
        "Rupture de pont thermique certifiée selon les normes européennes",
        "Double vitrage feuilleté de sécurité avec traitement antireflet",
        "Volet roulant monobloc motorisable à lames aluminium injectées",
        "Profilés thermo-laqués anti-salinité Qualicoat"
      ]
    },
    {
      id: "porte-laser",
      series: "ARTISANAT DIGITAL DÉCOUPE",
      title: "Portes Aluminium Découpe Laser tradition",
      description: "La beauté des arabesques géométriques marocaines revisitée par la précision numérique. Une porte d'entrée blindée alliant art traditionnel et haute sécurité.",
      imageKey: "porteAluLaserArabesque",
      bulletPoints: [
        "Motifs géométriques et zelliges personnalisés de haute finesse",
        "Structure renforcée par âme isolante haute densité",
        "Serrure multipoints de sécurité anti-effraction",
        "Finitions bronze, champagne, noir mat ou corten anodisées"
      ]
    },
    {
      id: "dressing-alu",
      series: "HABITAT & PLACARDS",
      title: "Dressings & Placards Coulissants Miroir",
      description: "Le rangement intelligent en aluminium. Une structure éco-responsable indéformable qui optimise vos espaces sans crainte de l'humidité ou des variations de température.",
      imageKey: "placardAluDressing",
      bulletPoints: [
        "Façades coulissantes miroirs haute fidélité avec cadres fins de rigidité",
        "Étagères et penderies réglables sur crémaillères alu invisibles",
        "Glissières à roulement à billes d'une fluidité de mouvement",
        "Intégration d'éclairages spots LED basse consommation automatiques"
      ]
    }
  ],
  en: [
    {
      id: "cuisine-alu",
      series: "KITCHENS & AMENITIES",
      title: "Modern Premium Custom Aluminium Kitchens",
      description: "Exceptional kitchens combining contemporary aesthetics and aluminium durability. Absolute resistance to moisture, humidity, and effortless maintenance.",
      imageKey: "cuisineAluGrise",
      bulletPoints: [
        "Ultra-smooth soft-closing aluminium drawers and slides",
        "Double-sided corrosion resistant panels for coastal climates (Casablanca)",
        "Premium polished granite or antibacterial quartz worktops",
        "Highly configurable custom modular units"
      ]
    },
    {
      id: "fenetre-coulissante",
      series: "COMFORT & GLASSWARE",
      title: "Premium Double Glazed Sliding Windows",
      description: "Designed to maximize natural light while maintaining absolute thermal and acoustic insulation. Equipped with integrated robust rolling shutters.",
      imageKey: "fenetreAluCoulissante",
      bulletPoints: [
        "Certified thermal break matching European high standards",
        "Double laminated safety glass with premium anti-reflective treatment",
        "Motorized monobloc rolling shutter with polyurethane-injected slats",
        "Qualicoat-certified anti-salinity powder-coated profiles"
      ]
    },
    {
      id: "porte-laser",
      series: "DIGITAL ARTISANAL CARVING",
      title: "Laser-Cut Traditional Aluminium Doors",
      description: "The majesty of traditional Moroccan geometric patterns re-imagined by digital precision. A secure armored entrance door combining traditional art and safety.",
      imageKey: "porteAluLaserArabesque",
      bulletPoints: [
        "Custom high-delicacy geometric and Moroccan zellige patterns",
        "Structures reinforced with high-density polyurethane cores",
        "Advanced multi-point anti-burglary security lock systems",
        "Elegant champagne oxide, bronze, deep matte dark or corten finishes"
      ]
    },
    {
      id: "dressing-alu",
      series: "HABITAT & LOCKERS",
      title: "Smart Aluminium Dressings & Sliding Mirrors",
      description: "Smart storage solutions in aluminium. An eco-friendly, non-deformable structure optimizing spaces without fear of moisture or heat expansion.",
      imageKey: "placardAluDressing",
      bulletPoints: [
        "High-fidelity sliding mirrors framed by robust slim aluminum profiles",
        "Fully adjustable shelves and wardrobes on invisible racking",
        "Sealed ball-bearing slides ensuring frictionless movements",
        "Integrated energy-efficient low consumption automatic LED spot lighting"
      ]
    }
  ],
  ar: [
    {
      id: "cuisine-alu",
      series: "المطابخ والتجهيزات",
      title: "مطابخ ألومنيوم حديثة مصممة حسب المقاس",
      description: "مطابخ متميزة تجمع بين جماليات التصميم العصري ومتانة الألومنيوم الخالدة. مقاومة مطلقة للرطوبة وأبخرة الطهي مع سهولة تامة في التنظيف والترتيب.",
      imageKey: "cuisineAluGrise",
      bulletPoints: [
        "أدراج ومفاصل ألومنيوم فائقة النعومة بخاصية الإغلاق الصامت",
        "ألواح مزدوجة مقاومة للتآكل والملوحة تناسب المناخ الساحلي (أكادير)",
        "سطح عمل من الغرانيت المصقول أو الكوارتز المضاد للبكتيريا",
        "وحدات تركيبية قابلة للتعديل والتهيئة المطلقة حسب طلبك"
      ]
    },
    {
      id: "fenetre-coulissante",
      series: "الراحة والزجاج",
      title: "نوافذ منزلقة ذات زجاج مزدوج عازل",
      description: "مصممة لزيادة الإضاءة الطبيعية مع تأمين عزل صوتي وحراري تام. مجهزة الستائر الدوارة المدمجة القوية.",
      imageKey: "fenetreAluCoulissante",
      bulletPoints: [
        "نظام كسر العزل الحراري المعتمد وفقاً للمعايير الأوروبية",
        "زجاج مزدوج مصفح للأمان مع ميزة حماية ضد التوهج والإنعكاس",
        "ستائر دوارة من الألمنيوم المحشو بالبولي يوريثان قابلة للمكننة",
        "قطاعات ألومنيوم مغلفة حرارياً ومقاومة للملوحة بشهادة Qualicoat"
      ]
    },
    {
      id: "porte-laser",
      series: "الحرف الرقمية والقص بالليزر",
      title: "أبواب ألومنيوم تقليدية مقصوصة بالليزر",
      description: "فخامة الزخارف المغربية الهندسية برؤية رقمية دقيقة. باب مدخل مصفح يمزج بين التراث الأصيل وأرقى درجات الأمان.",
      imageKey: "porteAluLaserArabesque",
      bulletPoints: [
        "زخارف هندسية ونقوش زليج مخصصة حسب الطلب بالغة الدقة",
        "هيكل مدعم من الداخل بحشوة عازلة عالية الكثافة",
        "نظام قفل الأمان متعدد النقاط لحماية قصوى ضد السرقة",
        "تشطيبات راقية بأكسيد البرونز، الشامبانيا، الأسود المطفي أو الكورتين"
      ]
    },
    {
      id: "dressing-alu",
      series: "غرف الملابس والخزائن",
      title: "خزائن ملابس منزلقة وذكية مع مرايا",
      description: "التخزين الذكي بتكنولوجيا الألومنيوم. هيكل مستدام وصديق للبيئة لا يتأثر بالرطوبة أو الحرارة وينظم مساحتك بامتياز.",
      imageKey: "placardAluDressing",
      bulletPoints: [
        "واجهات مرايا انزلاقية عالية الجودة مع إطارات ألومنيوم رقيقة وعالية الصلابة",
        "رفوف وأعمدة تعليق قابلة للتعديل على مسارات غير مرئية للعين",
        "مسارات انزلاق كروية تيقن حركة سلسة خالية تمامًا من الاحتكاك",
        "مصابيح LED مدمجة منخفضة الاستهلاك تضيء تلقائياً عند الفتح"
      ]
    }
  ]
};

export const TIMELINE_TRANSLATED: Record<Language, TimelineStepTrans[]> = {
  fr: [
    {
      stepNumber: "01",
      phase: "VALIDATION MATÉRIAUX",
      title: "Analyse Spectroscopique des Alliages",
      description: "Avant la chauffe, les billettes brutes d'aluminium sont scannées par un spectromètre d'émission optique de pointe pour certifier leur pureté chimique.",
      detailsList: [
        "Contrôle rigoureux des taux de Mg, Si, Fe et Cr",
        "Test par ultrasons pour détecter d'éventuels vides d'air",
        "Suivi unitaire lié aux dossiers des fonderies européennes"
      ],
      activeParameter: "Pureté Garantie : 99.98%"
    },
    {
      stepNumber: "02",
      phase: "TRAITEMENT THERMIQUE",
      title: "Préchauffage par Induction",
      description: "Les billettes de métal passent par des fours à induction à gaz rapides contrôlés par ordinateur pour atteindre la zone plastique idéale.",
      detailsList: [
        "Température de consigne : 450°C à 480°C selon la densité de la série",
        "Mesure continue par pyromètre laser avec boucle rétroactive",
        "Sous atmosphère d'azote pour prévenir toute trace d'oxydation"
      ],
      activeParameter: "Marge Thermique : ±3.5°C"
    },
    {
      stepNumber: "03",
      phase: "FORMATION DU PROFILÉ",
      title: "Presse d'Extrusion Hydraulique",
      description: "Un vérin hydraulique colossal appliquant une force de 2 500 à 4 500 tonnes force la billette d'aluminium à travers une filière d'acier trempé.",
      detailsList: [
        "Filières d'acier forgé dessinées au micron par FAO",
        "Vitesse contrôlée en continu pour supprimer tout frottement",
        "Trempe directe à l'azote liquide pour maximiser la résilience structurelle"
      ],
      activeParameter: "Force Maximale : 45 000 kN"
    },
    {
      stepNumber: "04",
      phase: "TRAITEMENT DE SURFACE & CN",
      title: "Laquage, Anodisation & Usinage 5 Axes",
      description: "Les profilés refroidis sont étirés, découpés avec soin puis soumis à un bain d'anodisation électrolytique protecteur ou à un fraisage CNC complexe.",
      detailsList: [
        "Couche d'oxyde protectrice intégrée : 10 à 25 microns de profondeur",
        "Fraisage automatisé sur centre DMG MORI pour joints d'assemblage",
        "Tests continus d'épaisseur de laquage et résistance saline (brouillard)"
      ],
      activeParameter: "Épaisseur Anodisée : 15μm Standard"
    }
  ],
  en: [
    {
      stepNumber: "01",
      phase: "MATERIAL VALIDATION",
      title: "Spectroscopic Alloy Analysis",
      description: "Before heating, raw aluminium cylindrical ingots (billets) are scanned using advanced optical emission spectrometers to guarantee composition purity down to parts-per-million.",
      detailsList: [
        "Elemental check on Mg, Si, Fe, and Cr content",
        "Ultrasonic structural void testing",
        "Lot tracking registration tied to European foundry certificates"
      ],
      activeParameter: "Purity Guarantee: 99.98%"
    },
    {
      stepNumber: "02",
      phase: "THERMAL PROCESSING",
      title: "Billet Induction Heating",
      description: "Billets are fed into computerized rapid gas induction heaters. The temperature must reach exactly the optimal metallurgical plastic zone.",
      detailsList: [
        "Target temperature range: 450°C to 480°C depending on alloy density",
        "Laser pyrometer temperature logging with real-time feedback loop",
        "Nitrogen atmosphere shielding to avoid oxidation of billet surface"
      ],
      activeParameter: "Temp Control: ±3.5°C"
    },
    {
      stepNumber: "03",
      phase: "PROFILE FORMATION",
      title: "Hydraulic Extrusion Press",
      description: "A colossal 2,500 to 4,500-ton hydraulic ram forces the hot plasticized billet through a custom pre-heated high-strength steel die.",
      detailsList: [
        "Micro-machined hardened steel die configurations",
        "Press velocity computer-modulated to eliminate surface drag friction",
        "In-line liquid nitrogen quenching to initiate critical structural tempering"
      ],
      activeParameter: "Max Force: 45,000 kN"
    },
    {
      stepNumber: "04",
      phase: "SURFACE & MACHINING",
      title: "Anodizing & Advanced CNC Processing",
      description: "The cooled aluminium strips are precision-stretched, cut to customer specification lengths, and undergoes electrolytic bath anodizing or secondary CNC machining.",
      detailsList: [
        "Acid-etched oxide skin build-up: 10 to 25 microns deep",
        "Inhouse 5-axis DMG MORI CNC milling to drill interlocking joints",
        "Specular gloss measurements and custom salt spray corrosion checks"
      ],
      activeParameter: "Oxide Skin: 15μm Standard"
    }
  ],
  ar: [
    {
      stepNumber: "01",
      phase: "فحص المواد الخام",
      title: "التحليل الطيفي للسبائك",
      description: "قبل التسخين، تخضع كتل الألومنيوم الأسطوانية لفحص دقيق عبر أجهزة تحليل الانبعاث الضوئي للتحقق من نسب العناصر بدقة تناهز جزءاً من المليون.",
      detailsList: [
        "مراقبة صارمة لنسب المغنيسيوم والسيليكون والحديد والكروم",
        "فحوصات بالموجات فوق الصوتية للتثبت من غياب الفراغات البنيوية",
        "ربط تتبع الشحنات بشهادات المسابك الأوروبية المعتمدة"
      ],
      activeParameter: "نسبة النقاء المضمونة: 99.98%"
    },
    {
      stepNumber: "02",
      phase: "المعالجة الحرارية",
      title: "التسخين التحريضي للكتل",
      description: "تُغذى كتل الألمنيوم في أفران الحث الكهربائي السريعة للغاز المبرمجة بالكمبيوتر للوصول الفوري إلى النطاق البلاستيكي المثالي للتطويع.",
      detailsList: [
        "درجة الحرارة المستهدفة: 450 إلى 480 درجة مئوية حسب السلسلة والصلابة",
        "مراقبة دائمة ومباشرة بواسطة بيرومتر ليزر ذو حلقة تغذية راجعة",
        "التسخين في حيز مشبع بالنيتروجين لمنع تأكسد الأسطح المعدنية"
      ],
      activeParameter: "التحكم في الحرارة: ±3.5°م"
    },
    {
      stepNumber: "03",
      phase: "توليد وتشكيل القطاعات",
      title: "مكبس السحب الهيدروليكي الباهر",
      description: "يضغط مكبس هيدروليكي جبار يسلط قوة ضاغطة توازي 2500 إلى 4500 طن كتلة الألومنيوم الساخنة عبر قالب صلب عالي الصلادة والمقاومة.",
      detailsList: [
        "قوالب صلب معالجة بالحرارة ومصممة بدقة ميكرومترية",
        "مراقبة آلية لسرعة الضغط لتلافي نشوء التشققات بالأسطح الخارجية",
        "تبريد سريع ومباشر على المخرج بالنيتروجين السائل لجودة مثلى"
      ],
      activeParameter: "القوة القصوى للمكبس: 45,000 ك.ن"
    },
    {
      stepNumber: "04",
      phase: "معالجة الأسطح وتعديلها",
      title: "الأكسدة التحليلية والتشغيل الرقمي خمسي المحاور",
      description: "تُسحب أعمدة الألومنيوم المبردة وتُنشر بالطول المطلوب ثم تُغطس في أحواض الأكسدة الكهربائية أو تُشغل على مراكز طحن رقمية متطورة.",
      detailsList: [
        "تكوين طبقة أكسيد حامية مدمجة بسماكة 10 إلى 25 ميكرون",
        "ثقب فواصل الترابط بدقة مذهلة على مركز التشغيل DMG MORI خمسي المحاور",
        "قياسات دورية لسمك الطلاء ومقاومتها لرذاذ الأملاح المسبّبة للتآكل"
      ],
      activeParameter: "سمك طبقة الأكسيد: 15 ميكرون قياسي"
    }
  ]
};

export const CERTIFICATIONS_TRANSLATED: Record<Language, CertificationTrans[]> = {
  fr: [
    {
      id: "iso-9001",
      iconName: "Award",
      title: "ISO 9001:2015",
      sub: "Norme de Management de la Qualité",
      extendedText: "Certification couvrant l'ensemble de nos processus d'extrusion, d'alignement des filières et de contrôle qualité final de chaque profilé."
    },
    {
      id: "iso-14001",
      iconName: "Leaf",
      title: "ISO 14001:2015",
      sub: "Certification Environnementale Maroc",
      extendedText: "Traduit notre cycle vertueux : recyclage de plus de 75 % des rebus aluminium industriels, réduction constante des émissions gazeuses des fours."
    },
    {
      id: "iso-45001",
      iconName: "ShieldCheck",
      title: "ISO 45001",
      sub: "Sécurité et Santé au Travail",
      extendedText: "Protège nos artisans. Nos presses de 2 500 tonnes et convoyeurs automatisés opèrent sous la surveillance de barrières immatérielles infrarouges."
    },
    {
      id: "ce-en1090",
      iconName: "CheckCircle",
      title: "CE EN 1090-3",
      sub: "Structures Métalliques & Menuiserie",
      extendedText: "Conforme rigoureusement aux critères réglementaires européens pour les structures porteuses intégrées de bâtiments commerciaux haut de gamme."
    }
  ],
  en: [
    {
      id: "iso-9001",
      iconName: "Award",
      title: "ISO 9001:2015",
      sub: "Quality Management Standard",
      extendedText: "Certified across our extrusion lines, die designs, and strict final visual QA protocols of each aluminum profile."
    },
    {
      id: "iso-14001",
      iconName: "Leaf",
      title: "ISO 14001:2015",
      sub: "Environmental Certification",
      extendedText: "Reflects our circular loop: recycling more than 75% of post-industrial scraps, optimizing furnace energy emissions and carbon footprint."
    },
    {
      id: "iso-45001",
      iconName: "ShieldCheck",
      title: "ISO 45001",
      sub: "Occupational Safety System",
      extendedText: "Protects our technical operators. Our 2,500-ton press bays and automated staging systems run under real-time proximity-sensor guards."
    },
    {
      id: "ce-en1090",
      iconName: "CheckCircle",
      title: "CE EN 1090-3",
      sub: "Structural Metallic Execution",
      extendedText: "Conforms strictly to EU criteria for structural components. Mandated for load-bearing skeletal frames utilized in premium commercial structures."
    }
  ],
  ar: [
    {
      id: "iso-9001",
      iconName: "Award",
      title: "ISO 9001:2015",
      sub: "معيار إدارة الجودة العالمي",
      extendedText: "شهادة معتمدة تشمل كامل مراحل الإنتاج، وضبط القوالب، وبروتوكولات الجودة الصارمة المطبقة على كل قطاع خارج من منشأتنا."
    },
    {
      id: "iso-14001",
      iconName: "Leaf",
      title: "ISO 14001:2015",
      sub: "الاعتماد البيئي والتنمية المستدامة",
      extendedText: "تجسيد لنهجنا المستدام: نقوم بإعادة تدوير أكثر من 75% من فواضل التصنيع، وتحجيم دائم لانبعاثات أفران الصهر والغاز."
    },
    {
      id: "iso-45001",
      iconName: "ShieldCheck",
      title: "ISO 45001",
      sub: "نظام السلامة والصحة المهنية",
      extendedText: "أمان الموظفين أولويتنا. تعمل مكابسنا الضخمة وخطوط النقل بموجب حساسات استشعار ذكية ومباشرة توقف الآلات فور رصد أي خطر."
    },
    {
      id: "ce-en1090",
      iconName: "CheckCircle",
      title: "CE EN 1090-3",
      sub: "تنفيذ الهياكل المعدنية المعمارية",
      extendedText: "مطابقة تامة لمتطلبات الاتحاد الأوروبي الخاصة بالعناصر الإنشائية الحاملة للأوزان المعتمدة في الأبراج والمجمعات السكنية."
    }
  ]
};

export const UI_TRANSLATED: Record<Language, { [key: string]: string }> = {
  fr: {
    // Header
    navHome: "Accueil",
    navCatalog: "Catalogue Produits",
    navContact: "Atelier & Devis",
    btnQuote: "Demande De Vis",
    btnUrgentQuote: "Devis Urgent",
    mobileTheme: "Thème :",
    themeSombre: "Mode Sombre",
    themeClair: "Mode Clair",
    logoSub: "Menuiserie & Extrusion Aluminium",
    
    // HomeHero Section
    heroBadge: "EXPERTISÉ DEPUIS 30 ANS — LEADER NATIONAL",
    cooperativeLabel: "COOPERATIVE",
    exploreBtn: "Explorer le Catalogue",
    estimateBtn: "Estimer un Devis",
    techOffice: "Bureau Technique",
    quotesOffice: "Cabinet Devis & Extrusion",
    processBadge: "PROCESSUS DE FABRICATION ET DE CRÉATION",
    processTitle: "L'Art de Créer l'Aluminium et le Verre",
    processDesc: "Découvrez les étapes techniques hautement spécialisées de la matière brute jusqu'à nos menuiseries d'excellence. Un savoir-faire alliant physique thermique, précision de moulage et technologies de pointe.",
    metallurgyBadge: "MÉTALLURGIE",
    aluLabel: "ALUMINIUM",
    aluTitle: "Comment est Créé l'Aluminium",
    aluIntro: "L'aluminium n'existe pas à l'état pur dans la nature. Sa création nécessite un processus d'électrolyse complexe pour détacher l'oxygène des minéraux :",
    aluFooter: "Extrusion sous Haute Pression",
    coopFooter: "COOPÉRATIVE IKRALUM",
    glassBadge: "VITRERIE",
    glassLabel: "VERRE",
    glassTitle: "Comment est Créé le Verre",
    glassIntro: "Le verre architectural moderne de type \"float\" exige un contrôle physique au niveau microscopique pour obtenir une planéité et une transparence pures :",
    glassFooter: "Transparence Double Vitrage",

    // CategoryGallery (Catalog)
    catalogBadge: "NOTRE CATALOGUE SÉLECTIONNÉ",
    catalogTitle: "SYSTÈMES ET ARCHITECTURE PREMIUM",
    catalogDesc: "Découvrez notre gamme d'excellence conçue et fabriquée par la coopérative IKRALUM. Chaque système est normé et taillé pour les plus hautes exigences architectoniques.",
    catAll: "Tout Voir",
    catMenuiserie: "Menuiserie Extérieure",
    catInterieur: "Cuisines & Dressings",
    catLaser: "Art & Découpe Laser",
    quickView: "Aperçu Rapide",
    previewBadge: "PREVIEW",
    detailsPrefix: "// CATÉGORIE",
    detailsBtn: "Détails",
    specTitle: "Spécifications Techniques",
    orderBtn: "Commander / Demander Étude",
    lightBoxClose: "Fermer",
    cncTitle: "Usinage CNC et Traitements de Surface",
    cncDesc: "Savoir-faire technologique unique au Maroc : de la découpe laser haute puissance jusqu'au laquage certifié Qualicoat pour résister aux climats côtiers.",
    cncContact: "Consulter un Technicien",

    // TechnicalInquiry (Form)
    inquiryBadge: "SERVICE CLIENT & TECHNIQUE",
    inquiryTitle: "Contactez Notre Atelier",
    inquiryDesc: "Que vous soyez à Casablanca ou ailleurs au Maroc, transmettez-nous vos mesures de fenêtres, plans de cuisine ou croquis de découpe laser. Un artisan qualifié étudiera votre demande avec rigueur.",
    contactTitle: "Atelier de Production Direct",
    addressLabel: "Adresse de l'Usine",
    phoneTitle: "Téléphone direct",
    emailTitle: "Cahier des charges",
    availLabel: "Artisans disponibles",
    availPhone: "Appel non-surtaxé",
    availEmail: "Réception 24h/24",
    introFormBadge: "COMMENCER VOTRE ÉTUDE EN LIGNE",
    formTitle: "Formulaire d'Étude & Devis Gratuit",
    formDesc: "Remplissez ce formulaire d'ingénierie préliminaire. Les détails seront injectés dans votre messagerie pour soumettre directement votre cahier des charges.",
    lblFullName: "Nom Complet / Entreprise",
    lblAddress: "Adresse de Livraison / Chantier (Ville...)",
    lblPhone: "Numéro de Téléphone (WhatsApp...)",
    lblMsg: "Description de votre projet (Mesures, Type, Quantité...)",
    phFullName: "Ex: Ilyas Sennaqui / SARL Bâtiment",
    phAddress: "Ex: Quartier Anfa, Casablanca, MAROC",
    phPhone: "Ex: +212 607 546 332",
    phMsg: "Ex: Bonjour, je souhaite un devis pour 3 fenêtres coulissantes double vitrage de dimensions 120x140cm...",
    btnSubmit: "Générer et Envoyer la Demande",
    submitting: "Traitement technique en cours...",
    successTitle: "Email Préparé !",
    successDesc: "Votre demande d'étude a été formulée avec succès. Votre messagerie par défaut a été sollicitée pour envoyer directement les détails à ikralum1@gmail.com.",
    copiedLabel: "Copié !",
    copyBtn: "Copier les données",
    resetBtn: "Formuler un nouveau projet",
    ticketLabel: "TICKET DE SUIVI CRÉÉ :",

    // Footer
    footBio: "Cooperative Professionnelle IKRALUM. Custom high-precision extrusion profiles, architectural systems, premium double-glazed aluminum joinery, and custom industrial designs conforming to international standards.",
    footSectionTitle: "Sections Techniques",
    footCertTitle: "Normes & Certifications",
    //footCertDesc: "Toutes nos étapes de laquage, d’extrusion d'aluminium et d'assemblage verrier sont auditées sous les contrôles qualité ISO 9001 et CE.",
    footLinkPrivacy: "Politique de Confidentialité",
    footLinkSpecs: "Fiches Techniques",
    footLinkQa: "Assurance Qualité",
    footLinkSupply: "Conditions de Fourniture",
    footCopyright: "Cooperative IKRALUM. Tous droits réservés.",
    allAlloyGrade: "Nuances d'Aluminium Haute Qualité",
    metallurgicTitle: "Alliages & Normes d'Extrusion"
  },
  en: {
    // Header
    navHome: "Home",
    navCatalog: "Products Catalog",
    navContact: "Atelier & Quote",
    btnQuote: "Request Quote",
    btnUrgentQuote: "Urgent Quote",
    mobileTheme: "Theme:",
    themeSombre: "Dark Mode",
    themeClair: "Light Mode",
    logoSub: "Aluminium Joinery & Extrusion",

    // HomeHero Section
    heroBadge: "CERTIFIED 30 YEARS — NATIONAL COOPERATIVE LEADER",
    cooperativeLabel: "COOPERATIVE",
    exploreBtn: "Explore the Catalog",
    estimateBtn: "Estimate Custom Quote",
    techOffice: "Technical Office",
    quotesOffice: "Quotes & Extrusion Cabinet",
    processBadge: "MANUFACTURING & CREATION PROCESS",
    processTitle: "The Art of Creating Aluminium and Glass",
    processDesc: "Discover the highly specialized technical stages from raw materials to our carpentry of excellence. Savoir-faire combining thermal physics, precision molding and state-of-the-art technologies.",
    metallurgyBadge: "METALLURGY",
    aluLabel: "ALUMINIUM",
    aluTitle: "How Aluminium is Created",
    aluIntro: "Aluminium does not exist in a pure state in nature. Its creation requires a complex electrolysis process to detach oxygen from minerals:",
    aluFooter: "High Pressure Extrusion Process",
    coopFooter: "COOPERATIVE IKRALUM",
    glassBadge: "GLASSWARE",
    glassLabel: "GLASS",
    glassTitle: "How Glass is Created",
    glassIntro: "Modern \"float\" architectural glass requires physical control at the microscopic level to achieve pure flatness and clarity:",
    glassFooter: "Double Glazing Clarity",

    // CategoryGallery (Catalog)
    catalogBadge: "OUR SELECTED CATALOG",
    catalogTitle: "PREMIUM SYSTEMS & ARCHITECTURE",
    catalogDesc: "Discover our range of excellence designed and manufactured by the IKRALUM cooperative. Each system is standardized and tailored for the highest architectonic demands.",
    catAll: "All Products",
    catMenuiserie: "Exterior Joinery",
    catInterieur: "Kitchens & Wardrobes",
    catLaser: "Art & Laser Cutting",
    quickView: "Quick View",
    previewBadge: "PREVIEW",
    detailsPrefix: "// CATEGORY",
    detailsBtn: "Details",
    specTitle: "Technical Specifications",
    orderBtn: "Order / Request Drawing Study",
    lightBoxClose: "Close",
    cncTitle: "CNC Machining & Surface Coatings",
    cncDesc: "Unique industrial technical expert in Morocco: from high-power computerized laser carving to Qualicoat-certified coastal powder coating.",
    cncContact: "Consult an Engineer",

    // TechnicalInquiry (Form)
    inquiryBadge: "CUSTOMER & SUPPORT AGENT",
    inquiryTitle: "Get in touch with our Atelier",
    inquiryDesc: "Whether in Casablanca, MAROC or abroad, share your windows dimensions, kitchen blueprints, or customized laser drawing. An expert artisan will analyze your requirements.",
    contactTitle: "Direct Production Atelier",
    addressLabel: "Factory Address",
    phoneTitle: "Direct Office Support",
    emailTitle: "Technical Specifications Intake",
    availLabel: "Active engineers online",
    availPhone: "Toll-free local number",
    availEmail: "Processed 24 hours a day",
    introFormBadge: "START PROMT PROJECT DRAWING",
    formTitle: "Free Structural Study & Technical Quote",
    formDesc: "Fill down this preliminary industrial form. Complete parameters will be translated to format an email structure directly to our technical desk.",
    lblFullName: "Full Name / Legal Company",
    lblAddress: "Delivery Address / Construction Site (City...)",
    lblPhone: "Phone Number (WhatsApp Active)",
    lblMsg: "Project specifications (Dimensions, Quantity, Alloy...)",
    phFullName: "E.g., John Doe / Construction LLC",
    phAddress: "E.g., Anfa District, Casablanca, MOROCCO",
    phPhone: "E.g., +212 607 546 332",
    phMsg: "E.g., Hello, I am looking for an extrusion estimate on 3 custom double-glazed sliding windows 120x140cm...",
    btnSubmit: "Format and Submit Technical Inquiry",
    submitting: "Compiling engineering requirements...",
    successTitle: "Technical Email Ready!",
    successDesc: "Your technical request has been successfully generated. Your default mail client has been opened to send details directly to ikralum1@gmail.com.",
    copiedLabel: "Data Copied!",
    copyBtn: "Copy Plaintext Form Data",
    resetBtn: "Submit Another Technical Project",
    ticketLabel: "TRACKING TICKET CREATED:",

    // Footer
    footBio: "Professional Cooperative IKRALUM. Custom high-precision extrusion profiles, architectural systems, premium double-glazed aluminum joinery, and custom industrial designs conforming to international standards.",
    footSectionTitle: "Technical Infrastructure",
    footCertTitle: "International Standards",
    //footCertDesc: "Our entire high-strength powder coating, aluminum extrusion, and double insulated glazing workflows are certified ISO 9001 and CE compliant.",
    footLinkPrivacy: "Privacy Protections",
    footLinkSpecs: "Technical Specification Sheets",
    footLinkQa: "Quality Certifications",
    footLinkSupply: "Supply Side Terms",
    footCopyright: "IKRALUM Cooperative. All rights reserved.",
    allAlloyGrade: "Superior Pure Aluminium Grades",
    metallurgicTitle: "Alloys & Extrusion Standards"
  },
  ar: {
    // Header
    navHome: "الرئيسية",
    navCatalog: "كتالوج المنتجات",
    navContact: "الورشة والطلب",
    btnQuote: "طلب تقدير",
    btnUrgentQuote: "تقدير عاجل",
    mobileTheme: "المظهر:",
    themeSombre: "الوضع الداكن",
    themeClair: "الوضع الفاتح",
    logoSub: "النجارة المعمارية وسحب الألومنيوم",

    // HomeHero Section
    heroBadge: "خبرة معتمدة لأكثر من 30 عاماً — رائد وطني في قطاع الألومنيوم",
    cooperativeLabel: "تعاونية",
    exploreBtn: "استكشف الكتالوج",
    estimateBtn: "تقدير مجاني للتكلفة",
    techOffice: "المكتب التقني الرئيسي",
    quotesOffice: "مكتب المقاييس الفنية والسحب",
    processBadge: "خطوات المعالجة والصناعة الفنية",
    processTitle: "فن صناعة الألومنيوم والزجاج المتطور",
    processDesc: "اكتشف المراحل التقنية المتخصصة للغاية من المواد الخام إلى نجارتنا المعمارية المتميزة. خبرة تجمع بين الفيزياء الحرارية، دقة الصب والتقنيات المتطورة الأكثر كفاءة.",
    metallurgyBadge: "تعدين واستخلاص",
    aluLabel: "ألومنيوم",
    aluTitle: "كيف يصنع ويسحب الألومنيوم",
    aluIntro: "لا يوجد معدن الألومنيوم بشكل نقي في الطبيعة مطلقًا. يتطلب استخلاصه عملية تحليل كهربائي معقدة لفصل ذرات الأكسجين عن المعادن الصخرية:",
    aluFooter: "تقنية الكبس تحت صغط هيدروليكي عالٍ",
    coopFooter: "تعاونية إكرالوم",
    glassBadge: "صناعة الزجاج",
    glassLabel: "زجاج معالج",
    glassTitle: "كيف يصنع الزجاج المسطح",
    glassIntro: "يتطلب الزجاج المعماري الحديث والمسطح تحكماً فيزيائياً مجهرياً دقيقاً لضمان الحصول على استواء تام وشفافية فائقة خالية من الشوائب والتموجات:",
    glassFooter: "شفافية وميزات الزجاج المزدوج العازل",

    // CategoryGallery (Catalog)
    catalogBadge: "كتالوجنا المصنف والخاص",
    catalogTitle: "الأنظمة الهندسية والمعمارية المتميزة",
    catalogDesc: "تصفح مجموعتنا الفريدة التي صممتها وصنعتها أيدي محترفي تعاونية إكرالوم. كل نظام يطابق أعلى المواصفات والمعايير المطلوبة عالمياً ومحلياً.",
    catAll: "رؤية الكُل",
    catMenuiserie: "نجارة هيدروليكية خارجية",
    catInterieur: "مطابخ عصرية وغرف ملابس",
    catLaser: "لوحات وأبواب قص بالليزر",
    quickView: "معاينة سريعة",
    previewBadge: "عينة",
    detailsPrefix: "// التصنيف الفني:",
    detailsBtn: "التفاصيل",
    specTitle: "المواصفات الهندسية الدقيقة",
    orderBtn: "اطلب الآن / استفسر عن التصميم",
    lightBoxClose: "إغلاق",
    cncTitle: "التشغيل الرقمي CNC والطلاء النهائي المتقدم",
    cncDesc: "سلوك تكنولوجي رائد في المغرب: بدءاً من القص بالليزر فائق الطاقة والسرعة، وصولاً للطلاء الحراري المعتمد لمقاومة عوامل رطوبة السواحل المغربية.",
    cncContact: "استشارة مهندس فني",

    // TechnicalInquiry (Form)
    inquiryBadge: "خدمة العملاء والدعم الفني المباشر",
    inquiryTitle: "تواصل مباشرة مع ورشة الإنتاج",
    inquiryDesc: "سواء كنت في الدار البيضاء، المغرب أو أي مكان آخر، أرسل لنا أبعاد النوافذ أو مخطط المطبخ أو تصميم الليزر المفضل لديك ليتم دراسته بتمعن من طرف أمهر الحرفيين.",
    contactTitle: "ورشة التصنيع والإنتاج المباشر",
    addressLabel: "عنوان المصنع والورشة",
    phoneTitle: "رقم الهاتف المباشر للإدارة",
    emailTitle: "طلب دراسة دفاتر التحملات والمشاريع",
    availLabel: "الفنيون متاحون الآن لمساعدتك",
    availPhone: "المكالمة بالسعر العادي بدون رسوم",
    availEmail: "نستقبل الطلبات على مدار 24 ساعة",
    introFormBadge: "ابدأ دراسة مشروعك المعماري الآن",
    formTitle: "طلب تقدير ودراسة فنية مجانية",
    formDesc: "يرجى ملء الاستمارة الفنية الأولية. سيتم صياغة التفاصيل وحقنها آلياً في تطبيق البريد الخاص بك لإرسالها بالكامل بضغطة زر واحدة.",
    lblFullName: "الاسم الكامل / اسم الشركة القانوني",
    lblAddress: "عنوان الشحن والتوصيل / الورشة (المدينة...)",
    lblPhone: "رقم الهاتف (واتساب مفعّل...)",
    lblMsg: "وصف وصورة مشروعك (المقاسات الكلية، الكمية المطلوبة...)",
    phFullName: "مثال: إلياس صناقي / شركة البناء والتعمير",
    phAddress: "مثال: حي أنفا، الدار البيضاء، المغرب",
    phPhone: "مثال: 0607546332 212+",
    phMsg: "مثال: السلام عليكم، أرغب في الحصول على عرض لـ 3 نوافذ منزلقة بزجاج مزدوج بمقاسات 120×140سم...",
    btnSubmit: "توليد وإرسال ملف الطلب التقني",
    submitting: "جاري صياغة المعايير الهندسية...",
    successTitle: "تم إعداد البريد بنجاح باهر!",
    successDesc: "لقد تمت صياغة معايير طلبك الفني بنجاح تام وسليم. تم توجيهك إلى تطبيق البريد الافتراضي لإرسال الرسالة إلى ikralum1@gmail.com آلياً.",
    copiedLabel: "تم النسخ !",
    copyBtn: "نسخ النص كاملاً في الذاكرة",
    resetBtn: "صياغة مشروع فني جديد",
    ticketLabel: "رقم تذكرة تتبع طلبك التقني:",

    // Footer
    footBio: "تعاونية إكرالوم المهنية. أنظمة نجارة معمارية متميزة وزجاج عازل مزدوج صُمم خصيصاً ليناسب متطلبات المباني الساحلية والصناعية الحديثة.",
    footSectionTitle: "أقسام العمل الفنية",
    footCertTitle: "المعايير والشهادات الدولية",
    //footCertDesc: "تخضع جميع عمليات الطلاء النهائي وسحب قطاعات الألمنيوم ومستويات العزل لفحص جودة دوري مطابق لمعايير الآيزو وشهادات الأمان الأوروبية CE.",
    footLinkPrivacy: "سياسة الخصوصية وأمان البيانات",
    footLinkSpecs: "كتيبات المواصفات الهندسية",
    footLinkQa: "توثيق ضمان الجودة",
    footLinkSupply: "شروط وضوابط التوريد والشحن",
    footCopyright: "تعاونية إكرالوم. جميع الحقوق الفنية محفوظة لعام",
    allAlloyGrade: "خلائط الألومنيوم عالية الجودة والنقاء",
    allAlloysTitle: "الخلائط المتاحة ومعايير فحص الصلادة",
    metallurgicTitle: "الخلائط القياسية ومعايير سحب المعادن"
  }
};
