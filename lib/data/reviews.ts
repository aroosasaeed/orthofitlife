// ---------------------------------------------------------------------------
// Sample reviews — DEMONSTRATION CONTENT ONLY
// ---------------------------------------------------------------------------
// These reviews are written as realistic *sample* content so the UI can be
// reviewed before real customer reviews exist. Product pages display them
// with a clear "Demonstration data — not real customer reviews" notice. No
// review is attributed to a real person. When a real review source is
// connected, this module is swapped out via the repository layer.
// ---------------------------------------------------------------------------

import type { Review } from "@/types/product";
import { products } from "@/lib/data/products";

const authors = [
  { name: "A.", city: "Lahore" },
  { name: "S. Khan", city: "Islamabad" },
  { name: "M.", city: "Karachi" },
  { name: "F. A.", city: "Rawalpindi" },
  { name: "H.", city: "Faisalabad" },
  { name: "N.", city: "Multan" },
  { name: "Z.", city: "Peshawar" },
  { name: "R.", city: "Quetta" },
] as const;

interface Template {
  rating: number;
  title: string;
  body: string;
}

const templates: Record<string, Template[]> = {
  "lumbar-cushions": [
    { rating: 5, title: "Finally comfortable in my office chair", body: "My chair has zero back support and by mid-afternoon I was always shifting around. Slid this cushion in on day one and the difference was immediate — I sit back properly now without thinking about it." },
    { rating: 4, title: "Good support, took a week to adjust", body: "First few days it felt like sitting too upright, then it just became normal. The strap keeps it in place on my chair and in the car." },
    { rating: 5, title: "Bought a second one for the car", body: "The curve actually matches where my back needs it. Ordered a second one so I don't have to carry it between home and office." },
  ],
  "back-support": [
    { rating: 5, title: "Full-back support that works on any chair", body: "This covers much more than a small cushion. On my dining chair and my office chair both, the support panel holds its shape and doesn't flatten out." },
    { rating: 4, title: "Solid build, slightly tall for small chairs", body: "Excellent materials. On my smaller study chair it stands a bit tall, but on standard chairs it's perfect." },
    { rating: 5, title: "Works even on a deep sofa", body: "Our lounge sofa gives no back support at all. This panel turns it into a chair I can sit in for a whole cricket match." },
  ],
  "coccyx-cushions": [
    { rating: 5, title: "The cut-out genuinely works", body: "Long days at the desk were hard on my tailbone. With this cushion the pressure point just isn't there anymore. Firm enough that it doesn't sink down." },
    { rating: 4, title: "Very firm, very supportive", body: "Firm — that's what I needed. If you expect a soft fluffy pad this isn't it; it's a proper orthopedic-style cushion." },
    { rating: 5, title: "Helpful during a difficult recovery", body: "Using this while recovering, mostly to sit more comfortably at home. Ask your own doctor what's right for your situation, but the build quality is excellent." },
  ],
  "knee-pillows": [
    { rating: 5, title: "My side-sleeping knees finally rest", body: "Simple idea done well. It stays between the knees through the night and the cover washes easily. I noticed the difference on night one." },
    { rating: 4, title: "Holds position well", body: "I toss and turn a lot. Most pillows slide away — this one mostly stays put because of its contoured shape. Nice firmness." },
    { rating: 4, title: "Longer one fits me better", body: "I'm tall and the knee-only styles felt too narrow. The full-length version keeps my whole leg comfortable." },
  ],
  "orthopedic-insoles": [
    { rating: 4, title: "Less tired feet after long shifts", body: "On my feet teaching all day. Trimmed them to size in two minutes. My feet still get tired by evening, but noticeably less than before." },
    { rating: 5, title: "Arch support feels right", body: "The arch is firm without being painful. Took 2–3 days to get used to. Fit my trainers and work shoes after trimming." },
    { rating: 3, title: "Comfortable but break-in needed", body: "Good cushioning. The arch took a few days to feel right for me — started with slight soreness that went away." },
  ],
  "seat-cushions": [
    { rating: 5, title: "Firm where it should be firm", body: "I wanted support, not a squishy pad — this delivers. My seat feels higher and my legs angle more comfortably at the desk." },
    { rating: 4, title: "Also good on a deep sofa", body: "Our sofa is too deep and low. This cushion fixes both problems reasonably well." },
    { rating: 5, title: "Stays cool in the afternoon", body: "The gel surface makes a real difference on warm days. My desk chair used to feel like a toaster by 3pm." },
  ],
  "neck-pillows": [
    { rating: 5, title: "Actually holds its shape", body: "My old pillow had a crater in the middle after a year. This one has stayed consistent for months. My neck feels supported either way I sleep." },
    { rating: 4, title: "Four nights to settle in", body: "Felt unusual at first — then quite right. The medium height works for me sleeping on both back and side." },
    { rating: 5, title: "The travel one is great too", body: "Real foam, packs into its pouch, survived a Karachi–Islamabad bus trip. My neck didn't hate me when I woke up, which is new." },
  ],
  "contour-pillows": [
    { rating: 5, title: "Strange night one, perfect now", body: "The wave shape felt odd for a few days, and then I couldn't sleep without it. The firm edge under the neck is the trick." },
    { rating: 4, title: "Good for side sleeping", body: "The higher side fits between my shoulder and head really well. Slightly warm in summer but the cover breathes decently." },
    { rating: 5, title: "Worth the upgrade for hot nights", body: "The gel version stays noticeably cooler than my old memory-foam pillow. Sleep through the night much more often now." },
  ],
  "ergonomic-supports": [
    { rating: 5, title: "The desk-setup piece nobody tells you about", body: "Feet rest at the right height now and my legs stopped fidgeting. Cheaper than 'testing' five chairs." },
    { rating: 4, title: "Simple and sturdy", body: "Feels solid, doesn't slide, does its job. Exactly what it should be." },
    { rating: 4, title: "Nice for evening routines", body: "The wedge is gentle, not extreme. I use it after evening walks and while reading." },
  ],
};

function dateFor(i: number, j: number): string {
  const month = String(((i + j) % 9) + 3).padStart(2, "0");
  const day = String(((i * 5 + j * 3) % 27) + 1).padStart(2, "0");
  return `2025-${month}-${day}`;
}

/** All demonstration reviews, deterministically generated per product. */
export const allReviews: Review[] = products.flatMap((product, i) => {
  const list = templates[product.category] ?? templates["ergonomic-supports"];
  const count = product.reviewCount > 100 ? 3 : 2;
  return list.slice(0, count).map((t, j) => {
    const author = authors[(i * 2 + j) % authors.length];
    const rating = Math.max(3, Math.min(5, Math.round((t.rating + product.rating) / 2)));
    return {
      productId: product.id,
      author: { name: author.name, city: author.city },
      rating,
      title: t.title,
      body: t.body,
      date: dateFor(i, j),
    } satisfies Review;
  });
});

export function getReviewsFor(productId: string): Review[] {
  return allReviews.filter((r) => r.productId === productId);
}
