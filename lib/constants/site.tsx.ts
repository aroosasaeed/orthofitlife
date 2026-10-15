export const siteConfig = {
  name: "OrthofitLife",
  tagline: "Everyday Comfort. Better Support. Better Living.",
  description:
    "Thoughtfully selected orthopedic and ergonomic products for everyday comfort, work, sleep, movement and recovery — plus simple, research-informed guidance, made for Pakistan.",
  domain: "orthofitlife.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://orthofitlife.com",
  locale: "en_PK",
  country: "Pakistan",
};

/**
 * Contact details are placeholders until the business confirms them.
 * Set real values in .env.local — nothing fake is displayed as fact.
 */
export const contactConfig = {
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
  phone: process.env.NEXT_PUBLIC_PHONE_NUMBER || "",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "",
};

export const socialConfig = {
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "",
  facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || "",
  youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL || "",
  tiktok: process.env.NEXT_PUBLIC_TIKTOK_URL || "",
};

export const medicalDisclaimer =
  "OrthofitLife products are designed to support comfort and everyday positioning. Our content is general information, not medical advice. It does not diagnose, treat or replace guidance from a qualified healthcare professional. If you have persistent pain or a medical condition, please consult your doctor or a licensed physiotherapist.";

/** Commerce thresholds used across cart UI + messaging. */
export const commerceConfig = {
  currency: "PKR",
  freeShippingThreshold: 5000,
  shippingFlatRate: 250,
  deliveryEstimate: "2–5 working days",
  demoNote:
    "OrthofitLife is currently a demonstration prototype. Reviews shown are sample content and checkout is not yet connected.",
};

/** Demo promo codes clearly labelled as sample behaviour. */
export const promoCodes: Record<string, { percent: number; label: string }> = {
  ORTHO10: { percent: 10, label: "10% sample welcome discount" },
  WELCOME5: { percent: 5, label: "5% sample discount" },
};

export const SEO_KEYWORDS = [
  "orthopedic products Pakistan",
  "orthopedic pillow Pakistan",
  "back support Pakistan",
  "lumbar support Pakistan",
  "coccyx cushion Pakistan",
  "orthopedic insoles Pakistan",
  "neck support pillow Pakistan",
  "ergonomic products Pakistan",
];
