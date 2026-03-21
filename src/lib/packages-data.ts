export interface PackageFeature {
  text: string;
  included: boolean;
}

export interface CarePackage {
  slug: string;
  name: string;
  tagline: string;
  color: string;
  accent: string;
  icon: string;
  features: PackageFeature[];
  popular: boolean;
  cta: string;
}

export const packages: CarePackage[] = [
  {
    slug: "make-it-safe",
    name: "Make it safe",
    tagline: "For when they're mostly independent but at risk",
    color: "#2D7A6B",
    accent: "#E8F5F1",
    icon: "\u{1F6E1}\uFE0F",
    features: [
      { text: "Grab bars in bathrooms", included: true },
      { text: "Anti-slip mats in bathrooms", included: true },
      { text: "Cameras in common areas", included: true },
      { text: "Low / accessible bed setup", included: true },
      { text: "Hospital bed", included: false },
      { text: "Wheelchair", included: false },
      { text: "Dedicated caregiver", included: false },
    ],
    cta: "Get started",
    popular: false,
  },
  {
    slug: "help-them-move",
    name: "Help them move",
    tagline: "For when mobility is significantly reduced",
    color: "#1A5F7A",
    accent: "#E3F0F7",
    icon: "\u{1F91D}",
    features: [
      { text: "Grab bars in bathrooms", included: true },
      { text: "Anti-slip mats in bathrooms", included: true },
      { text: "Cameras in common areas", included: true },
      { text: "Low / accessible bed setup", included: true },
      { text: "Hospital bed", included: true },
      { text: "Wheelchair", included: true },
      { text: "Dedicated caregiver", included: false },
    ],
    cta: "Get started",
    popular: true,
  },
  {
    slug: "someone-by-their-side",
    name: "Someone by their side",
    tagline: "For when they need hands-on daily support",
    color: "#6B4C8A",
    accent: "#F0EBF5",
    icon: "\u{1F49C}",
    features: [
      { text: "Grab bars in bathrooms", included: true },
      { text: "Anti-slip mats in bathrooms", included: true },
      { text: "Cameras in common areas", included: true },
      { text: "Low / accessible bed setup", included: true },
      { text: "Hospital bed", included: true },
      { text: "Wheelchair", included: true },
      { text: "Dedicated caregiver", included: true },
    ],
    cta: "Get started",
    popular: false,
  },
];
