import { AlloySpec, ProductCatalogItem, TimelineStep, Certification } from "./types";

export const ALLOYS: AlloySpec[] = [
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
    descriptiveText: "Specifically treated to achieve exceptional surface smoothness. Strongly favored in premium European architecture where visible frame lines must look absolutely pristine under raw natural light.",
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
];

export const PRODUCTS: ProductCatalogItem[] = [
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
];

export const TIMELINE: TimelineStep[] = [
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
    description: "Billits are fed into computerized rapid gas induction heaters. The temperature must reach exactly the optimal metallurgical plastic zone where the metal can flow without crystallization.",
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
    description: "A colossal 2,500 to 4,500-ton hydraulic ram forces the hot plasticized billet through a custom pre-heated high-strength steel die to shape the product cross-section.",
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
    description: "The cooled aluminium strips are precision-stretched to relieve internal tension, cut to customer specification lengths, and undergoes electrolytic bath anodizing or secondary CNC machining.",
    detailsList: [
      "Acid-etched oxide skin build-up: 10 to 25 microns deep",
      "Inhouse 5-axis DMG MORI CNC milling to drill interlocking joints",
      "Specular gloss measurements and custom salt spray corrosion checks"
    ],
    activeParameter: "Oxide Skin: 15μm Standard"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "iso-9001",
    iconName: "Award",
    title: "ISO 9001:2015",
    sub: "Quality Management Standard",
    extendedText: "Certified across our central Prague headquarters and Czech casting plant. Governs billet quality verification, die alignment, and testing protocols."
  },
  {
    id: "iso-14001",
    iconName: "Leaf",
    title: "ISO 14001:2015",
    sub: "Environmental Certification",
    extendedText: "Reflects our circular loop: recycling 75% post-industrial scraps, optimizing furnace emissions, and running on hydro-backed grid electric source."
  },
  {
    id: "iso-45001",
    iconName: "ShieldCheck",
    title: "ISO 45001",
    sub: "Occupational Safety System",
    extendedText: "Protects our technical operators. Our 2,500-ton press bays and automated staging systems run under real-time proximity-sensor shutdown guards."
  },
  {
    id: "ce-en1090",
    iconName: "CheckCircle",
    title: "CE EN 1090-3",
    sub: "Structural Metallic Execution",
    extendedText: "Conforms strictly to EU criteria for structural components. Mandated for load-bearing skeletal frames utilized in premium commercial structures."
  }
];
