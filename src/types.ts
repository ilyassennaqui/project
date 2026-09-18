/**
 * ALCOM ALVAL Type definitions for strict TypeScript type checking and modularity
 */

export enum AppTab {
  HOME = "home",
  PRODUCTS_SPECS = "products_specs",
  CONTACT_SUPPORT = "contact_support"
}

export interface AlloySpec {
  id: string;
  series: string;
  title: string;
  application: string;
  tensileStrength: string; // e.g. "160 - 220"
  yieldStrength: string;   // e.g. "120 - 180"
  compliance: string;      // e.g. "EN 755-2"
  descriptiveText: string;
  chemicalComposition: { [element: string]: string }; // e.g. { Si: "0.3-0.6", Mg: "0.35-0.6", Fe: "0.1-0.3" }
}

export interface ProductCatalogItem {
  id: string;
  series: string;
  title: string;
  description: string;
  imageKey: string;
  bulletPoints: string[];
}

export interface TimelineStep {
  stepNumber: string;
  title: string;
  phase: string;
  description: string;
  detailsList: string[];
  activeParameter: string; // e.g. "Temp: 480°C" or "Tolerance: ±0.05mm"
}

export interface Certification {
  id: string;
  iconName: string; // lucide icon identifier
  title: string;
  sub: string;
  extendedText: string;
}

export interface QuoteParameters {
  fullName: string;
  address: string;
  phone: string;
  messageText: string;
}
