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

const V = "https://ovlecd37gjnsopi9.public.blob.vercel-storage.com";
const P = "https://i.postimg.cc";
export const reels = [
  { src: `${V}/reel1.mp4`, poster: `${P}/jqFK2DYK/poster3.jpg`, tag: "Cinematic", title: "Promotion" },
  { src: `${V}/reel3.mp4`, poster: `${P}/JhSM6VyH/poster4.jpg`, tag: "Live", title: "Event Coverage" },
  { src: `${V}/reel4.mp4`, poster: `${P}/CKSpXDkJ/poster5.jpg`, tag: "Reel", title: "Promotion Video" },
  { src: `${V}/reel5.mp4`, poster: `${P}/nL5F52Ys/poster6.png`, tag: "Shoot", title: "Product Film" },
  { src: `${V}/reel6.mp4`, poster: `${P}/nzxDDCvL/poster7.jpg`, tag: "Videography", title: "Promotion Video" },
  { src: `${V}/reel7.mp4`, poster: `${P}/bvmBYjhX/poster10.jpg`, tag: "Showreel", title: "Creative Reel" },
  { src: `${V}/reel9.mp4`, poster: `${P}/G2542Qf7/poster11.jpg`, tag: "Storytelling", title: "Brand Story" },
  { src: `${V}/reel10.mp4`, poster: `${P}/gjnTkmDD/IMG-7184.jpg`, tag: "Live", title: "Event Coverage" },
];

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
