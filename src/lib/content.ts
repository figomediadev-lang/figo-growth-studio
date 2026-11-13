import film1 from "@/assets/films/film-1.mp4.asset.json";
import preview1 from "@/assets/films/film-1-preview.mp4.asset.json";
import cover1 from "@/assets/films/film-1-cover.jpg.asset.json";
import film3 from "@/assets/films/film-3.mp4.asset.json";
import preview3 from "@/assets/films/film-3-preview.mp4.asset.json";
import cover3 from "@/assets/films/film-3-cover.jpg.asset.json";
import film4 from "@/assets/films/film-4.mp4.asset.json";
import preview4 from "@/assets/films/film-4-preview.mp4.asset.json";
import cover4 from "@/assets/films/film-4-cover.jpg.asset.json";
import film5 from "@/assets/films/film-5.mp4.asset.json";
import preview5 from "@/assets/films/film-5-preview.mp4.asset.json";
import cover5 from "@/assets/films/film-5-cover.jpg.asset.json";
import film6 from "@/assets/films/film-6.mp4.asset.json";
import preview6 from "@/assets/films/film-6-preview.mp4.asset.json";
import cover6 from "@/assets/films/film-6-cover.jpg.asset.json";
import film7 from "@/assets/films/film-7.mp4.asset.json";
import preview7 from "@/assets/films/film-7-preview.mp4.asset.json";
import cover7 from "@/assets/films/film-7-cover.jpg.asset.json";
import film9 from "@/assets/films/film-9.mp4.asset.json";
import preview9 from "@/assets/films/film-9-preview.mp4.asset.json";
import cover9 from "@/assets/films/film-9-cover.jpg.asset.json";
import film10 from "@/assets/films/film-10.mp4.asset.json";
import preview10 from "@/assets/films/film-10-preview.mp4.asset.json";
import cover10 from "@/assets/films/film-10-cover.jpg.asset.json";
import ads from "@/assets/work-ads.jpg";
import aggregators from "@/assets/work-aggregators.jpg";
import branding from "@/assets/work-branding.jpg";
import ecom from "@/assets/work-ecom.jpg";
import model from "@/assets/work-model-photo.jpg";
import product from "@/assets/work-product-photo.jpg";
import production from "@/assets/work-production.jpg";
import website from "@/assets/work-website.jpg";
import noon from "@/assets/logo-noon.png";
import talabat from "@/assets/logo-talabat.png";
import deliveroo from "@/assets/logo-deliveroo.png";
import smiles from "@/assets/logo-smiles.png";
import keeta from "@/assets/logo-keeta.png";
import careem from "@/assets/logo-careem.png";

export const WHATSAPP =
  "https://wa.me/971565533893?text=Hi%20Figo%20Media!%20I%27d%20like%20to%20book%20a%20consultation%20to%20discuss%20a%20project.";
export const PHONE = "+971 56 553 3893";
export const PHONE_HREF = "tel:+971565533893";

export const services = [
  { n: "01", title: "Performance Marketing", short: "Precision campaigns on Meta, Google, TikTok and LinkedIn — engineered for ROAS.",
    tags: ["Meta", "Google", "TikTok", "LinkedIn", "Retargeting"],
    get: ["Multi-platform campaigns", "Precision audience targeting", "Strategic retargeting setup", "Continuous ad optimization"],
    wins: ["Maximized ROAS", "Lower acquisition costs", "Data-driven scaling", "Predictable lead generation"] },
  { n: "02", title: "Social Media Growth", short: "Always-on content, community building and creative campaigns that grow audiences and convert.",
    tags: ["Strategy", "Content Calendar", "Community", "UGC"],
    get: ["Content calendar strategy", "Always-on content streams", "Creative campaigns", "Community management & UGC"],
    wins: ["Consistent brand presence", "Audience growth & loyalty", "Higher conversion rates", "More time back for your team"] },
  { n: "03", title: "Creative Strategy & Production", short: "Cinematic product, SaaS and event films, photography and full podcast production.",
    tags: ["Product Film", "SaaS Video", "Events", "Podcasts", "Photography"],
    get: ["Product & SaaS films", "Event coverage", "Informative video series", "Full podcast production"],
    wins: ["High-conversion visuals", "Professional storytelling", "Multi-platform ready", "Increased engagement"] },
  { n: "04", title: "Branding & Identity", short: "Logo systems, brand guidelines, stationery, company profiles and print collateral.",
    tags: ["Logos", "Guidelines", "Stationery", "Company Profile", "Brochures"],
    get: ["Logo design", "Brand guidelines", "Business stationery", "Company profiles"],
    wins: ["Strong first impression", "Consistent brand look", "Professional credibility", "Print & digital ready"] },
  { n: "05", title: "E-Commerce Growth", short: "Storefront ops, merchandising, conversion optimization and lifecycle marketing.",
    tags: ["Shopify", "Catalog", "CRO", "Lifecycle"],
    get: ["Storefront operations", "Product merchandising", "Conversion optimization", "Lifecycle marketing"],
    wins: ["Seamless shopping experience", "Higher average order value", "Better customer retention", "Scalable sales growth"] },
  { n: "06", title: "Aggregator Management", short: "End-to-end ops on Noon, Talabat, Careem, Keeta and Amazon — listings, pricing, performance.",
    tags: ["Noon", "Talabat", "Careem", "Keeta", "Amazon"],
    get: ["End-to-end platform ops", "Optimized product listings", "Dynamic pricing strategies", "Performance monitoring"],
    wins: ["Multi-channel visibility", "Streamlined fulfilment", "Outpace platform competitors", "Hands-free revenue growth"] },
];

export const work = [
  { title: "Ads Management", cat: "Performance", img: ads },
  { title: "Production & Cinematography", cat: "Production", img: production },
  { title: "Branding & Identity", cat: "Branding", img: branding },
  { title: "E-Commerce Management", cat: "Performance", img: ecom },
  { title: "Product Photography", cat: "Production", img: product },
  { title: "Aggregator Management", cat: "Performance", img: aggregators },
  { title: "Model Photography", cat: "Production", img: model },
  { title: "Website Development", cat: "Branding", img: website },
];

export const filmCategories = ["All films", "Reels", "Content Creation", "Events", "Motorsport", "Real Estate"] as const;
export type FilmCategory = (typeof filmCategories)[number];
export type Film = {
  id: string; title: string; category: Exclude<FilmCategory, "All films" | "Reels">;
  src: string; preview: string; poster: string; width: number; height: number; duration: string;
};
export const reels: Film[] = [
  { id: "motorsport", title: "Desert in motion", category: "Motorsport", src: film7.url, preview: preview7.url, poster: cover7.url, width: 1080, height: 1920, duration: "00:52" },
  { id: "stage", title: "Live on stage", category: "Events", src: film6.url, preview: preview6.url, poster: cover6.url, width: 1024, height: 576, duration: "00:44" },
  { id: "property", title: "A different perspective", category: "Real Estate", src: film4.url, preview: preview4.url, poster: cover4.url, width: 720, height: 1280, duration: "01:40" },
  { id: "food", title: "Made to crave", category: "Content Creation", src: film1.url, preview: preview1.url, poster: cover1.url, width: 720, height: 1280, duration: "00:32" },
  { id: "story", title: "Stories from the everyday", category: "Content Creation", src: film3.url, preview: preview3.url, poster: cover3.url, width: 720, height: 1280, duration: "02:09" },
  { id: "restaurant", title: "People. Food. Moments.", category: "Content Creation", src: film5.url, preview: preview5.url, poster: cover5.url, width: 576, height: 1024, duration: "00:48" },
  { id: "brand", title: "A voice for your brand", category: "Content Creation", src: film9.url, preview: preview9.url, poster: cover9.url, width: 1080, height: 1920, duration: "00:37" },
  { id: "fitness", title: "Built through dedication", category: "Content Creation", src: film10.url, preview: preview10.url, poster: cover10.url, width: 1080, height: 1920, duration: "00:25" },
];
export function filmsInCategory(category: FilmCategory) {
  return reels.filter((film) => category === "All films" || (category === "Reels" ? film.height > film.width : film.category === category));
}
export const agencyStatement = "A Dubai-based growth agency where creative meets performance — content that stops the scroll, media that pays it back.";

export const platforms = [
  { name: "Noon", img: noon }, { name: "Talabat", img: talabat }, { name: "Deliveroo", img: deliveroo },
  { name: "Smiles", img: smiles }, { name: "Keeta", img: keeta }, { name: "Careem", img: careem },
];

export const process = [
  { n: "01", t: "Discover", d: "We audit brand, market and channels to find the leverage points." },
  { n: "02", t: "Design", d: "Identity, visual systems and content frameworks tailored to your audience." },
  { n: "03", t: "Produce", d: "Photo, video and social assets shot, edited and shipped on a sprint cycle." },
  { n: "04", t: "Activate", d: "Paid media, e-commerce and aggregator ops calibrated for ROAS." },
  { n: "05", t: "Scale", d: "Weekly reporting, creative iteration and roadmap planning." },
];
